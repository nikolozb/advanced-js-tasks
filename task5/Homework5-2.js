console.log("Start");

const usersDB = {
  "user1@hw.js": [{ title: "video1" }, { title: "video2" }],
  "user2@hw.js": [{ genre: "genre1" }, { genre: "genre1" }],
  "user3@hw.js": [],
};

function displayError(errorMessage) {
  console.error(new Error(errorMessage));
}

function loginUser(email, password, callback, errorCallback) {
  const obj = { userEmail: email }; // userEmail: "user1@hw.js"

  if (Object.keys(usersDB).includes(email)) {
    setTimeout(() => {
      console.log(`Now we have the data of user: ${email}`);
      callback(obj);
    }, 3000);
  } else {
    setTimeout(() => {
      errorCallback("User not found!");
    }, 3000);
  }
}

function getUserVideos(email, callback, errorCallback) {
  if (usersDB[email].length > 0) {
    setTimeout(() => {
      callback(usersDB[email]);
    }, 2000);
  } else {
    setTimeout(() => {
      errorCallback("Videos not found!");
    }, 2000);
  }
}

function videoDetails(video, callback, errorCallback) {
  if (video.title) {
    setTimeout(() => {
      callback(video.title);
    }, 2000);
  } else {
    setTimeout(() => {
      errorCallback("Video Title not found!");
    }, 2000);
  }
}

const getPassedUsersFirstVideoTitle = (user) => {
  loginUser(
    user,
    1234,
    (obj) => {
      console.log("user:", obj); // user: { userEmail: "user1@hw.js" }
      getUserVideos(
        obj.userEmail,
        (videosObj) => {
          console.log("videos:", videosObj);
          videoDetails(
            videosObj[0],
            (title) => {
              console.log("title:", title);
            },
            (error) => {
              displayError(error);
            }
          );
        },
        (error) => {
          displayError(error);
        }
      );
    },
    (error) => {
      displayError(error);
    }
  );
};

getPassedUsersFirstVideoTitle("user2@hw.js");
console.log("Finish");
