// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(password);
}

function generatePassword() {
  var passswordLength = prompt("How many character do you want in your password?");
  var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"};
  var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var specialCharacters = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", ";", "'", ":", ",", ".", "/", "<", ">", "?"];
  var lowercaseChar = lowercaseLetters[Math.floor(Math.random()*lowercaseLetters.length)];


  if (passwordLength < 8 || passwordLength > 128) {
    alert("Error! Your password length must be between 8 and 128 characters!");
   } else if (passwordLength >= 8 || passwordLength <= 128) {
      var lowercase = confirm("Do you want your password to include lowercase letters?");
      var uppercase = confirm("Dp you want your password to include uppercase letters?");
      var number = confirm("Do you want your password to include numbers?");
      var special = confirm("Do you want your password to include special characters?");
    } 
    
    if (lowercase && uppercase && numbers && special) {
      alert("Test");
    } else if (lowercase == true && uppercase == true && number == true && special == false) {

    } else if (lowercase == true && uppercase == true && number == true && special == false) {

    } else if (lowercase == true && uppercase == true && number == false && special == false) {

    } else if (lowercase == true && uppercase == false && number == false && special == false) {

    } else if (lowercase == false && uppercase == true && number == true && special == true) {

    } else if (lowercase == false && uppercase == false && number == true && special == true) {

    } else if (lowercase == false && uppercase == false && number == false && special == true) {

    } else if (lowercase == true && uppercase == false && number == false && special == true) {

    } else if (lowercase == true && uppercase == true && number == false && special == true) {

    } else if (lowercase == true && uppercase == false && number == true && special == true) {

    } else if (lowercase == true && uppercase == false && number == true && special == false) {

    } else if (lowercase == false && uppercase == true && number == false && special == true) {

    } else if (lowercase == false && uppercase == true && number == false && special == false) {

    } else if (lowercase == false && uppercase == false && number == true && special == false) {

    } else if (lowercase == false && uppercase == true && number == true && special == false) {

    } else {
      alert("Error! You must choose at least one type of character!");
    }
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
