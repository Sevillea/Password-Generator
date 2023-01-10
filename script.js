// I need to condense the arrays down to properties within a key.
//I need to create a an object called key to add my properties in.
// I'll need to create an alert to say "Welcome, pto continue please click 'generate password'".
// I'll need to create a function that generates a random number from "0" to the length of the string -1.
// 




// Array of special characters to be included in password

var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password

var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];



 

/*
var specialCharacter = []
var numericCharacter = []
var lowerCasedCharacter = []
var upperCasedCharacter = []
*/



// Function to prompt user for password options
/*
function getPasswordOptions() {
  prompt = ("How many special characters would you like?");
  if (input === yes) {
    console.log(math.random()) * specialCharacters.length;

    else (return);
  }
  prompt = ("Would you like a numerical character? (Y/N");
  if (input === yes)
  else ()
  return keys.specialCharacters (math.random()) * keys.specialCharacters.length]
}

}
*/




/*
return keys.upperCasedCharacters[math.floor(math.random())*keys.upperCasedCharacters.length]
]

math.floor(Math.random() * keys.length)

const passwordOptions = specialCharacters.concat(numericCharacters,lowerCasedCharacters, upperCasedCharacters);
*/







// Function to generate password with user input
function generatePassword() {
 var input = window.prompt("How many characters do you want?");
if ((input >= 0) && (input <=21)) {
  console.log(input);
}
else {
  window.alert = ("Oops, you've entered an incorrect number, please try again!");
generatePassword();
}
// specialCharacter prompt:
var input = window.prompt("How many special characters would you like?");
if ((input >= 10) && (input <= 21)) {
  console.log(input);
}
else {
  window.alert = ("Oops, you'e entered an incorrect number, please try again!");
  generatePassword();
}
// numericalValue prompt:
var input = window.prompt("How many numerical character do you want?");
if ((input > 0) && (input <=21)) {
  console.log(input);
  
}
else {
  window.alert = ("Oops, you've entered an incorrect number, please try again!");
generatePassword();
}
// lowerCasedCharacters prompt:
var input = window.prompt("How many lower cased characters do you want?");
if ((input > 0) && (input <=21)) {
  console.log(input);
  
}
else {
  window.alert = ("Oops, you've entered an incorrect number, please try again!");
generatePassword();
}
// upperCasedCharacters prompt:
var input = window.prompt("How many upper cased characters do you want?");
if ((input > 0) && (input <=21)) {
  console.log(input);
  
}
else {
  window.alert = ("Oops, you've entered an incorrect number, please try again!");
generatePassword();
}
}

// Function for getting a random element from an array
 // var arr = [Math.floor(Math.random()*arr.length)];

function getRandom() {
  arr[Math.floor(Math.random()*arr.length)];

    return getRandom();

  }

  






 
/*For (let i = 0; i < specialCharacters.length; i++) {
}
*/










// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);