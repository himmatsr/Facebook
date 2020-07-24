

function loginfunc(){
    var showlogin = document.getElementById("showlogin");
    var loginuser = document.getElementById("loginuser");
    var loginpass = document.getElementById("loginpass");
    var bigcont = document.getElementById("bigcont");
    var usernameValue = loginuser.value;
    // console.log(usernameValue)
    var passwordValue = loginpass.value;
    // console.log(passwordValue);
    var logindata = {username :usernameValue, password:passwordValue};
    localStorage.setItem("logindata",JSON.stringify(logindata));
    
}

function signinfunc(){
    var showlogin = document.getElementById("showlogin");
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var email = document.getElementById("email");
    var signinpass = document.getElementById("signinpass");
    var birthday = document.getElementById("birthday");
    var gender = document.getElementsByClassName("radio");
    // var bod = day.value + "/" + month.value + "/" + year.value;
    var selectedValue;
    for (const rb of gender) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    // console.log(selectedValue);
    // console.log(bod);
    var signindata ={
        firstname : fname.value,
        lastname : lname.value,
        email : email.value,
        password : signinpass.value,
        birthday : birthday.value,
        gender: selectedValue
    };
    localStorage.setItem("signindata",JSON.stringify(signindata));
    

}