
// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
var enter;
var confirmNumber;
var confirmSpecChar;
var confirmUCase;
var confirmLCase;
//chars
lCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
specChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '[', ']', '{', '}', '`', '~', ',', '.', '?', '/', '<', '>', '|', '=', '+'];
// Space is for the Uppercase conversion
space = [];
// options out of if statements
var options;
// converts letters to uppercase 
var toUpper = function (x) {
    return x.toUpperCase();
};
uCase = lCase.map(toUpper);

var get = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);  {
  ps = generatePassword();
    document.getElementById("password").placeholder = ps;
}

 

// start function
function generatePassword() {
  //user input
  enter = parseInt(prompt("Please choose a number between 8 and 128"));
  if (!enter) {
      alert("This needs a value");
  } else if (enter < 8 || enter > 128) {
      enter = parseInt(prompt("You must choose between 8 and 128"));
  } else {
    confirmNumber = confirm ('will this contain numbers?')
    confirmSpecChar = confirm ('will this contain special characters?')
    confirmLCase = confirm ('will this conain any lower case letters?')
    confirmUCase = confirm (' will this contain upper case letters?')
  };
   
    // if all no
    if (!confirmSpecChar && !confirmNumber && !confirmUCase && !confirmLCase) {
      options = alert("You must choose a criteria!");

  }
  // if all yes
  else if (confirmSpecChar && confirmNumber && confirmUCase && confirmLCase) {

      options = specChar.concat(number, lCase, uCase);
  }
  // if 3 yes
  else if (confirmSpecChar && confirmNumber && confirmUCase) {
      options = specChar.concat(number, uCase);
  }
  else if (confirmSpecChar && confirmNumber && confirmLCase) {
      options = specChar.concat(number, lCase);
  }
  else if (confirmSpecChar && confirmLCase && confirmUCase) {
      options = specChar.concat(lCase, uCase);
  }
  else if (confirmNumber && confirmLCase && confirmUCase) {
      options = number.concat(lCase, uCase);
  }
  // if 2 yes
  else if (confirmSpecChar && confirmNumber) {
      options = specChar.concat(number);

  } else if (confirmSpecChar && confirmLCase) {
      options = specChar.concat(lCase);

  } else if (confirmSpecChar && confirmUCase) {
      options = specChar.concat(uCase);
  }
  else if (confirmLCase && confirmNumber) {
      options = lCase.concat(number);

  } else if (confirmLCase && confirmUCase) {
      options = lCase.concat(uCase);

  } else if (confirmNumber && confirmUCase) {
      options = number.concat(uCase);
  }
  // if 1 yes
  else if (confirmSpecChar) {
      options = specChar;
  }
  else if (confirmNumber) {
      options = number;
  }
  else if (confirmLCase) {
      options = lCase;
  }
  // make upper case
  else if (confirmUCase) {
      options = space.concat(uCase);
  };
   // placeholder for pw length
   var password = [];

   // Start random selection variables:
   // Random selection for all variables: 
   for (var i = 0; i < enter; i++) {
       var pickoptions = options[Math.floor(Math.random() * options.length)];
       password.push(pickoptions);
   }
   // This joins the password array and converts it to a string
   // Worked with a tutor to incorporate this option
   var ps = password.join("");
   UserInput(ps);
   return ps;
}
// This puts the password value into the textbox
// Changed function input to use textcontent
function UserInput(ps) {
   document.getElementById("password").textContent = ps;

}
