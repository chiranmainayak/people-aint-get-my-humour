function validateLogin(){

let username = document.getElementById("username").value;
let password = document.getElementById("password").value;
let error = document.getElementById("error");

error.textContent="";

if(username==="" || password===""){
error.textContent="All fields are required";
return false;
}

if(password.length < 6){
error.textContent="Password must be at least 6 characters";
return false;
}

alert("Login Successful");


window.location.href = "boo.html";

return false;
}


function checkStrength(){

let password = document.getElementById("password").value;
let strength = document.getElementById("strength");

if(password.length < 6){
strength.textContent="Weak Password";
strength.style.color="red";
}
else if(/[A-Z]/.test(password) && /[0-9]/.test(password)){
strength.textContent="Strong Password";
strength.style.color="green";
}
else{
strength.textContent="Medium Password";
strength.style.color="orange";
}

}