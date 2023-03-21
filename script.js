
const loginError = document.getElementById("loginMessage")


function myFunction(){
    var userInputName = document.getElementById("user").value
    var userInputpassword = document.getElementById("pass").value
  if(userInputName==="Henock" && userInputpassword === "3436"){
    window.open('home.html');
  }
  else{
    loginError.innerHTML="Invalid username/password?"
    
  }
  
}
