var firebaseConfig = {
    apiKey: "AIzaSyDC9wY40kUMYI_KpitK9uxFF8-cl2KWlvE",
    authDomain: "lets-chat-faf2a.firebaseapp.com",
    databaseURL: "https://lets-chat-faf2a-default-rtdb.firebaseio.com",
    projectId: "lets-chat-faf2a",
    storageBucket: "lets-chat-faf2a.appspot.com",
    messagingSenderId: "643905916637",
    appId: "1:643905916637:web:56114de1db65d579e89534"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function add_room(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
        purpose: "adding_room"
      });
  }
