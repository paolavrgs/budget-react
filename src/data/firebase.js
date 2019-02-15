import app from 'firebase/app';

var config = {
  apiKey: "AIzaSyA70sh3Klo5EEGqUZgWZ1IXT-QFTGdztcA",
  authDomain: "budget-planner-eb701.firebaseapp.com",
  databaseURL: "https://budget-planner-eb701.firebaseio.com",
  projectId: "budget-planner-eb701",
  storageBucket: "budget-planner-eb701.appspot.com",
  messagingSenderId: "216408402468"
};

const setDBConfig = function() {
  app.initializeApp(config)
}

export default setDBConfig;
