

function loginfunc(){
    var showlogin = document.getElementById("showlogin");
    var loginuser = document.getElementById("loginuser");
    var loginpass = document.getElementById("loginpass");
    var bigcont = document.getElementById("bigcont");
    var usernameValue = loginuser.value;
    console.log(usernameValue)
    var passwordValue = loginpass.value;
    console.log(passwordValue);
    var logindata = {username :usernameValue, password:passwordValue};
    localStorage.setItem("logindata",JSON.stringify(logindata));
    var getdata = localStorage.getItem("logindata");
    var getparsedata = JSON.parse(getdata);
    showlogin.innerHTML = `<h1>Username: ${getparsedata.username} <br> Password: ${getparsedata.password}</h1>`
    bigcont.innerHTML = '';
}

function signinfunc(){
    var showlogin = document.getElementById("showlogin");
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var email = document.getElementById("email");
    var signinpass = document.getElementById("signinpass");
    var  day= document.getElementById("day");
    var month = document.getElementById("month");
    var year = document.getElementById("year");
    var gender = document.getElementsByClassName("radio");
    var bod = day.value + "/" + month.value + "/" + year.value;
    var selectedValue;
    for (const rb of gender) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    console.log(selectedValue);
    // console.log(bod);
    var signindata ={
        firstname : fname.value,
        lastname : lname.value,
        email : email.value,
        password : signinpass.value,
        birthday : bod,
        gender: selectedValue
    };
    localStorage.setItem("signindata",JSON.stringify(signindata));
    var getdata = localStorage.getItem("signindata");
    var data = JSON.parse(getdata);
    showlogin.innerHTML = `<table style="font-weight:bold; border: 2px solid black; font-size:25px;">
    <tr><td>Data</td><td>Value</td></tr>
    <tr><td>FirstName</td><td>${data.firstname}</td></tr>
    <tr><td>LastName</td><td>${data.lastname}</td></tr>
    <tr><td>email</td><td>${data.email}</td></tr>
    <tr><td>password</td><td>${data.password}</td></tr>
    <tr><td>birthday</td><td>${data.birthday}</td></tr>
    <tr><td>Gender</td><td>${data.gender}</td></tr>
    </table>`
    bigcont.innerHTML = '';

}