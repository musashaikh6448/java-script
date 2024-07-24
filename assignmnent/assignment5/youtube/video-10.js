// if input = 1,"y","yes"  output  = continue...
// if input = 0,"n","no"  output  = continue...

let input;
input = "";
//     if (input === 1) {
//        document.write("Continue....")
//    }else if (input=="y") {
//     document.write("Continue....")

//    }else if (input=="yes") {
//     document.write("Continue....")

//    }else if (input==0) {
//     document.write("End....")

//    }else if (input=="no") {
//     document.write("End....")

//    }else if (input=="n") {
//     document.write("End....")

//    }
//    else{
//     document.write("Wrong Input")

//    }

// Comparison Between Els If And Switch Case

switch (input) {
  case 1://  if input === 1
    document.write("Continue...");
    break;
  case "y": //if input === 1
    document.write("Continue...");
    break;
  case "yes":
    document.write("Continue...");
    break;
  case 0:
    document.write("End...");
    break;
  case "no":
    document.write("End...");
    break;
  case "n":
    document.write("End...");
    break;
  default:
    document.write("Wrong Input");
    break;
}