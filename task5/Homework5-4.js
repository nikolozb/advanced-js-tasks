console.log("Start");

const usersDB = {
  "user1@hw.js": [{ title: "video1" }, { title: "video2" }],
  "user2@hw.js": [{ genre: "genre1" }, { genre: "genre1" }],
  "user3@hw.js": [],
};

function displayError(errorMessage) {
  console.error(new Error(errorMessage));
}

function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    if (Object.keys(usersDB).includes(email)) {
      setTimeout(() => {
        console.log(`Now we have the data of user: ${email}`);
        console.log("user:", email);
        resolve({ userEmail: email });
      }, 3000);
    } else {
      setTimeout(() => {
        reject("User not found");
      }, 3000);
    }
  });
}

function getUserVideos(email) {
  return new Promise((resolve, reject) => {
    if (usersDB[email].length !== 0) {
      setTimeout(() => {
        console.log("videos:", usersDB[email]);
        resolve(usersDB[email]);
      }, 2000);
    } else {
      setTimeout(() => {
        reject("Videos not found");
      }, 2000);
    }
  });
}

function videoDetails(video) {
  return new Promise((resolve, reject) => {
    if (video.title) {
      setTimeout(() => {
        console.log("title:", video.title);
        resolve(video.title);
      }, 2000);
    } else {
      setTimeout(() => {
        reject("Video title not found");
      }, 2000);
    }
  });
}

const getPassedUsersFirstVideoTitle = async (user) => {
  try {
    let loggedUser = await loginUser(user, 1234);
    let videosObj = await getUserVideos(loggedUser.userEmail);
    let videoTitle = await videoDetails(videosObj[0]);
  } catch (error) {
    displayError(error);
  }
};

getPassedUsersFirstVideoTitle("user3@hw.js");

console.log("Finish");
