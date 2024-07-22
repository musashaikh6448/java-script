let isloggedin = 1; // if 0 loggedout if 1 login

// if (isloggedin == 0) {
//     document.write("Login")
// }else{
//     document.write("Logout")
// }



// ternory Oprators
let option = isloggedin == 0 ? document.write("login") :document.write("logout")

// Controle Null And undefiend

let user;
// user = "Azhar Hussain"
alert (user ??"Guest User")