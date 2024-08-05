let formValidation = () => {
  let username = document.getElementById("Username");
  let password = document.getElementById("password");
  let error_pass = document.getElementById("error-password");
  let error_username = document.getElementById("error-username");
  let successpara= document.getElementById("succes-para");
  let flag = 1;

  if (username.value == "") {
    console.log("hallow role");
    error_username.innerHTML = "Username field is empty";
    flag = 0;
  } else if (username.value.length < 3) {
    error_username.innerHTML = "username requires min 3 chars";
    flag = 0;
  } else {
    error_username.innerHTML = "";
    flag = 1;
  }

  if(username.value=="Huzaif"){
    error_username.innerHTML="Login successfull";
  }

  if (password.value == "") {
    error_pass.innerHTML = "password field is empty";
    flag = 0;
  } else if (password.value.length < 3) {
    error_pass.innerHTML = "password requires min 3 chars";
    flag = 0;
  } else {
    error_pass.innerHTML = "";
    flag = 1;
  }
  if(password.value=="Huzaif@123"){
    successpara.innerHTML="Login successful"
  }

  
  if (flag) {
    return true;
  } else {
    return false;
  }
};
