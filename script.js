// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Function to generate password.
function generatePassword() {
  var passwordLength = prompt("How many character do you want in your password?");
  var lowercaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbersChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var specialChar = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", ";", "'", ":", ",", ".", "/", "<", ">", "?"];

//Checking that the password length is between 8 and 128 characters.
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Error! Your password length must be between 8 and 128 characters!");
   } else if (passwordLength >= 8 || passwordLength <= 128) {
     //Asking four separate questions to see what user wants included in password.
      var lowercase = confirm("Do you want your password to include lowercase letters?");
      var uppercase = confirm("Dp you want your password to include uppercase letters?");
      var number = confirm("Do you want your password to include numbers?");
      var special = confirm("Do you want your password to include special characters?");
    } 

    var pwd = "";
//Combination of if-else statements and for loops to help create the password based on the users wants.  
    if (lowercase && uppercase && number && special) {
      for (var i = 0; i<passwordLength; i++) {
        var comboChar = lowercaseChar.concat(uppercaseChar, numbersChar, specialChar);
        var charRand = comboChar[Math.floor(Math.random()*comboChar.length)]
        pwd += charRand;
      }
    } else if (lowercase == true && uppercase == true && number == true && special == false) {
      for (var i = 0; i<passwordLength; i++) {
        var comboChar = lowercaseChar.concat(uppercaseChar, numbersChar);
        var charRand = comboChar[Math.floor(Math.random()*comboChar.length)]
        pwd += charRand;
      }

    } else if (lowercase == true && uppercase == true && number == false && special == false) {
      for (var i = 0; i<passwordLength; i++) {
        var comboChar = lowercaseChar.concat(uppercaseChar, numbersChar);
        var charRand = comboChar[Math.floor(Math.random()*comboChar.length)]
        pwd += charRand;
      }

    } else if (lowercase == true && uppercase == false && number == false && special == false) {
      for (var i = 0; i<passwordLength; i++) {
        var comboChar = uppercaseChar;
        var charRand = comboChar[Math.floor(Math.random()*comboChar.length)]
        pwd += charRand;
      }

    } else if (lowercase == false && uppercase == true && number == true && special == true) {
      for (var i = 0; i<passwordLength; i++) {
        var comboChar = uppercaseChar.concat(numbersChar, specialChar);
        var charRand = comboChar[Math.floor(Math.random()*comboChar.length)]
        pwd += charRand;
      }

    } else if (lowercase == false && uppercase == false && number == true && special == true) {
      for (var i = 0; i<passwordLength; i++) {
        var comboChar = numbersChar.concat(specialChar);
        var charRand = comboChar[Math.floor(Math.random()*comboChar.length)]
        pwd += charRand;
      }

    } else if (lowercase == false && uppercase == false && number == false && special == true) {
      for (var i = 0; i<passwordLength; i++) {
        var comboChar = specialChar;
        var charRand = comboChar[Math.floor(Math.random()*comboChar.length)]
        pwd += charRand;
      }

    } else if (lowercase == true && uppercase == false && number == false && special == true) {
      for (var i = 0; i<passwordLength; i++) {
        var comboChar = lowercaseChar.concat(specialChar);
        var charRand = comboChar[Math.floor(Math.random()*comboChar.length)]
        pwd += charRand;
      }

    } else if (lowercase == true && uppercase == true && number == false && special == true) {
      for (var i = 0; i<passwordLength; i++) {
        var comboChar = lowercaseChar.concat(uppercaseChar, specialChar);
        var charRand = comboChar[Math.floor(Math.random()*comboChar.length)]
        pwd += charRand;
      }

    } else if (lowercase == true && uppercase == false && number == true && special == true) {
      for (var i = 0; i<passwordLength; i++) {
        var comboChar = lowercaseChar.concat(numbersChar, specialChar);
        var charRand = comboChar[Math.floor(Math.random()*comboChar.length)]
        pwd += charRand;
      }

    } else if (lowercase == true && uppercase == false && number == true && special == false) {
      for (var i = 0; i<passwordLength; i++) {
        var comboChar = lowercaseChar.concat(numbersChar);
        var charRand = comboChar[Math.floor(Math.random()*comboChar.length)]
        pwd += charRand;
      }

    } else if (lowercase == false && uppercase == true && number == false && special == true) {
      for (var i = 0; i<passwordLength; i++) {
        var comboChar = uppercaseChar.concat(specialChar);
        var charRand = comboChar[Math.floor(Math.random()*comboChar.length)]
        pwd += charRand;
      }

    } else if (lowercase == false && uppercase == true && number == false && special == false) {
      for (var i = 0; i<passwordLength; i++) {
        var comboChar = uppercaseChar;
        var charRand = comboChar[Math.floor(Math.random()*comboChar.length)]
        pwd += charRand;
      }

    } else if (lowercase == false && uppercase == false && number == true && special == false) {
      for (var i = 0; i<passwordLength; i++) {
        var comboChar = numbersChar;
        var charRand = comboChar[Math.floor(Math.random()*comboChar.length)]
        pwd += charRand;
      }

    } else if (lowercase == false && uppercase == true && number == true && special == false) {
      for (var i = 0; i<passwordLength; i++) {
        var comboChar = uppercaseChar.concat(numbersChar);
        var charRand = comboChar[Math.floor(Math.random()*comboChar.length)]
        pwd += charRand;
      }

    } else {
      //Error message if user did not say yes to at least one of the questions. 
      alert("Error! You must choose at least one type of character!");
      //Password is returned
    } return pwd;
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
