
// APPLICATION FUNCTION

// To create a password - 
// First, check what the user selected in the form.
// If they chose symbols (inclSymbols = true), then select a symbol from the array - selectSymbol();
// Then, use the selectedSymbol and start adding it to the newPassword.
// add a symbol, number, lower, then upper case. And use for loop to repeat and until you get the length of the password selected by the user (pwLength.value).



// CAPTURE FORM VALUES FOR VALIDATION

// Create an empty object to store the form values.
// TODO: Form values are used for debugging only.
var formValues = {};

function getFormValues () {

formValues.pwLength = document.getElementById("pwLength").value;

formValues.inclSymbols = document.getElementById("inclSymbols").checked;
formValues.inclNumbers = document.getElementById("inclNumbers").checked;
formValues.inclLowerCase = document.getElementById("inclLowerCase").checked;
formValues.inclUpperCase = document.getElementById("inclUpperCase").checked;

console.log(formValues);

};




// ADD EVENT LISTENER TO GENERATE PASSWORD BUTTON

// Assignment Code
// "Generate Password" button HTML element is returned and stored in generateBtn variable.
var generateBtn = document.querySelector("#generate");

// When the "Generate Password" button (generateBtn) is clicked {
// The newPassword is set to an empty string and the password counter pwCounter is set to 0.
// Then following functions are executed.
// generatePassword() is not listed. It is called when validateLengthInput() is called.
generateBtn.addEventListener("click", () => {

  newPassword = "";
  pwCounter = 0;

  // For debugging only.
  getFormValues();

  // TODO: Need to stop form (preventDefault()?) from submitting if conditions not met.
  // Or if statement
  validateLengthInput();

  writePassword();
  
});



// FUNCTION TO DISPLAY PASSWORD ON SCREEN

// Write password to the #password input
function writePassword() {
  
  // generatePassword() function does not yet exist.
  // Once it does exist, it will generate a password and store it in the 'password' variable.
  var password = generatePassword();

  // document.querySelector returns the <textarea> with the placeholder text "Your Secure Password" and stores it in the variable 'passwordText'.
  // passwordText is used to display the newPassword.
  var passwordText = document.querySelector("#password");

  // Takes 'password' that is generated from generatePassword() which is newPassword - and stores it as the value for the <textarea> stored in passwordText.
  // This displays the password.
  // TODO: Determine if the order of these statements matter. I would rather switch them so that it's more human-readable with the logic, but it throws errors. ---- Order matters since the variable passwordText needs to be used.
  passwordText.value = newPassword;

}



// VALIDATE FORM - THEN GENERATE PASSWORD

// Verifies that the password length is between 8 and 128.
// If yes, generate the password.

var forLoopCount = 0;

function validateLengthInput() {

  if (pwLength.value >= 8 && pwLength.value <= 128) {

    // Call generatePassword() and choose X number of characters - X is number of checkboxes.

    for (var i = 0; i < pwLength.value; i++) {
      generatePassword();
      forLoopCount++;
      console.log("Password loop count is: " + forLoopCount);
    }
    
    console.log("Final password length is: " + pwLength.value);
    return true;

  }
  else {
    alert("Password length must be between 8 and 128.");

    // TODO: Add actual error messaging on-screen with innerHTML or textContent
    // TODO: Use if to prevent generatePassword() if checkboxes are not checked.

    return false;

  }
}




// FUNCTION TO GENERATE PASSWORD

// Arrays of symbols and characters are below generatePassword() function.

var newPassword = "";

// Variable to count length of password for debugging.
var pwCounter = 0;

function generatePassword() {

  // If user selected to include Symbols and pwCounter is not equal to user's password length
  // Then select random symbol and add symbol to newPassword
  // And log below message for debugging.
  // Repeat for numbers and characters

  if (inclSymbols.checked === true && pwCounter != pwLength.value) {

    newPassword += selectSymbol();

    console.log("Symbols included");

    pwCounter++;
    console.log("Password length counter: " + pwCounter);
  }

  if (inclNumbers.checked === true && pwCounter != pwLength.value) {

    newPassword += selectNumber();

    console.log("Numbers included");

    pwCounter++;
    console.log("Password counter: " + pwCounter);

  }

  if (inclLowerCase.checked === true && pwCounter != pwLength.value) {

    newPassword += selectLowerCase();

    console.log("Lower case characters included");

    pwCounter++;
    console.log("Password counter: " + pwCounter);

  }

  if (inclUpperCase.checked === true && pwCounter != pwLength.value) {

    newPassword += selectUpperCase();

    console.log("Upper case characters included");

    pwCounter++;
    console.log("Password counter: " + pwCounter);

  }

  console.log(newPassword);
  console.log("The current password length is: " + newPassword.length);

  if (pwCounter === pwLength.value) {
    console.log("Password generated.")
  }

}




// DECLARE ARRAYS FOR SYMBOLS, NUMBERS, CHARACTERS

// Declare variables for what are considered symbols, numbers, lower case characters, and upper case characters.

var pwSymbols = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "="];
var pwNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var pwLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var pwUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];



// FUNCTIONS FOR SELECTING RANDOM CHARACTER

// TODO: Simplify variables inside functions - do not need to be unique as they are local to their scope.

// Function for selecting a Symbol from the pwSymbol array.

function selectSymbol() {

  // Select a random number between 0 and 9 to determine the index from the symbol array.
  var symbolIndex = Math.floor(Math.random()*10);
  console.log("symbolIndex is: " + symbolIndex);

  // Take symbolIndex number and select the item from the pwSymbols array.
  var selectedSymbol = pwSymbols[symbolIndex];
  console.log("Selected symbol from array: " + selectedSymbol);
  return selectedSymbol;

}

// Function for selecting a Number from the pwNumbers array.

function selectNumber() {

  var numberIndex = Math.floor(Math.random()*10);
  console.log("numberIndex is: " + numberIndex);

  var selectedNumber = pwNumbers[numberIndex];
  console.log("Selected number from array: " + selectedNumber);
  return selectedNumber;

}

// Function for selecting a Lower Case Character from the array.

function selectLowerCase() {

  var lowerCaseIndex = Math.floor((Math.random()*26));
  console.log("lowerCaseIndex is: " + lowerCaseIndex);

  var selectedLowerCase = pwLowerCase[lowerCaseIndex];
  console.log("Selected lower case character from array: " + selectedLowerCase);
  return selectedLowerCase;

}

// Function for selecting a Upper Case Character from the array.

function selectUpperCase() {

  var upperCaseIndex = Math.floor((Math.random()*26));
  console.log("upperCaseIndex is: " + upperCaseIndex);

  var selectedUpperCase = pwUpperCase[upperCaseIndex];
  console.log("Selected upper case character from array: " + selectedUpperCase);
  return selectedUpperCase;

}