function addUser(){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("User_Name", username);
    window.location = "Letschat.html";
}