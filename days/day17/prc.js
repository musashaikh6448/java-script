// let age = 18
// if (age >= 18) {
//     console.log("you r eligible for vote")
// } else {
//     console.log("you r not eligible for vote")
// }


// if (age > 18) {
//     console.log("you r eligible for vote")
// } else if(age == 18 ) {
//     console.log("go and vote")
// }
// else{
//     console.log("you r not eligible for vote")
// }


let age = +prompt("enter your age");
if (age >= 18) {
  console.log("you r eligible for vote");
  let voterId = prompt("you have voterId ? (yes or no)");
  if (voterId == "yes") {
    console.log("go and vote");
  } else {
    console.log("make your voterId");
  }
} else {
  console.log("you r not eligible for vote");
}
