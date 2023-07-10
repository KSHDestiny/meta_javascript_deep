// switch(parameter){       //  ==
//     case value1:         // condition
//         statement;
//         break;
//     case value2:         // condition
//         statement;
//         break;
//     default:             // else
//         statement;
// }

var fruit = "apple";

switch (fruit) {
  case "orange":
    console.log("This is orange.");
    break;
  case "banana":
    console.log("This is banana.");
    break;
  default:
    console.log("This is other fruit.");
}

var num = 25;

switch (num) {
  case 10:
    console.log("This is 10.");
    break;
  case 25:
    console.log("This is 25.");
    break;
  case "25":
    console.log("This is 25 string.");
    break;
  default:
    console.log("This is other number.");
}

var int = 100;

switch (true) {
  case int < 50:
    console.log("This is less than 50.");
    break;
  case int == 50:
    console.log("This is 50.");
    break;
  default:
    console.log("This is greater than 50.");
}
