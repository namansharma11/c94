
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCvDHfCBTS1IxnyKXnFki7T_hjXDKB8pjw",
    authDomain: "p-94-88df6.firebaseapp.com",
    databaseURL: "https://p-94-88df6-default-rtdb.firebaseio.com",
    projectId: "p-94-88df6",
    storageBucket: "p-94-88df6.appspot.com",
    messagingSenderId: "253721819401",
    appId: "1:253721819401:web:e9a6ff5cd041978e0cbbd8"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}