var firebaseConfig = {
    apiKey: "AIzaSyDC9wY40kUMYI_KpitK9uxFF8-cl2KWlvE",
    authDomain: "lets-chat-faf2a.firebaseapp.com",
    databaseURL: "https://lets-chat-faf2a-default-rtdb.firebaseio.com",
    projectId: "lets-chat-faf2a",
    storageBucket: "lets-chat-faf2a.appspot.com",
    messagingSenderId: "643905916637",
    appId: "1:643905916637:web:56114de1db65d579e89534"
  };
  
  firebase.initializeApp(firebaseConfig);

  function add_room(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
    });
    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
  }      

   user_name  = localStorage.getItem("user_name");
   document.getElementById("welcome_name").innerHTML = "Welcome " + user_name + " ! ";


   function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
console.log("Room Name -"+Room_names);
row = "<div class='room_name id="+Room_names+" onclick = 'redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
   //End code
});});}
getData();

function redirectToRoomName(name){
   console.log(name);
   localStorage.setItem("room_name", name);
   window.location = "Kwitter_page.html" ;
}
