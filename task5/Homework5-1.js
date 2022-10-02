console.log("Start");

const usersDB = {
  "user1@hw.js": [{ title: "video1" }, { title: "video2" }],
  "user2@hw.js": [{ genre: "genre1" }, { genre: "genre1" }],
  "user3@hw.js": [],
};

function loginUser(email, password, callback) {
  const obj = { userEmail: email }; // userEmail: "user1@hw.js"
  setTimeout(() => {
    console.log(`Now we have the data of user: ${email}`);
    callback(obj);
  }, 3000);
}

function getUserVideos(email, callback) {
  setTimeout(() => {
    callback(usersDB[email]);
  }, 2000);
}

function videoDetails(video, callback) {
  setTimeout(() => {
    callback(video.title);
  }, 2000);
}

const getPassedUsersFirstVideoTitle = (user) => {
  loginUser(user, 1234, (obj) => {
    console.log("user:", obj); // user: { userEmail: "user1@hw.js" }

    getUserVideos(obj.userEmail, (videosObj) => {
      console.log("videos:", videosObj);

      videoDetails(videosObj[0], (title) => {
        console.log("title:", title);
      });
    });
  });
};

getPassedUsersFirstVideoTitle("user1@hw.js");

console.log("Finish");
