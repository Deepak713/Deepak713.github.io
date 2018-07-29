function validate(){
var username= document.getElementById("username").value;
var password= document.getElementById("password").value;
if(username== "deepak" && password== "deepak013"){
alert("login successful");
}

else{
alert("login unsuccessful");
}

return false
}
