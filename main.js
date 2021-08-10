function add_user(){
    user = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user);
    window.location = "index2.html";
    }