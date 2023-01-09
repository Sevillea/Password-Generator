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
/*
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
*/


 

/*
var specialCharacter = []
var numericCharacter = []
var lowerCasedCharacter = []
var upperCasedCharacter = []
*/
/*
const specialCharacters = prompt ("Would you like to include a special character?");
const numericCharacters = prompt ("Would you like to include a number?");
const lowerCasedCharacters = prompt ("Would you like to use a lower cased character?");
const upperCasedCharacters = prompt ("Would you like to use an upper cased character?");
*/

//object called 'keys':
/*
var keys = {
  specialCharacters: "@%+\\/'!#$^?:,)(}{][~_-."
  numericCharacters:"0123456789"
  lowerCasedCharacters:"abcdefghijklmnopqrstuvwxyz"
  upperCasedCharacters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  

}







var getPasswordOptions = specialCharacters.concat(numericCharacters,lowerCasedCharacters,upperCasedCharacters);
var length = 23
var true = "Y"
var false = "N"


else()

}
// Function to prompt user for password options
// SpecialCharacters prompt first:
function getPasswordOptions() {
  prompt = ("How many special characters would you like?");
  if (input === yes) {
    console.log(math.random()) * specialCharacters.length;

    else (return);
  }
  prompt = ("Would you like a numerical character? (Y/N");
  if (input === Y)
  else ()
  return keys.specialCharacters (math.random()) * keys.specialCharacters.length]
}

}



//function for getting a random element from an array
function getPasswordRandom(){
  if (input < 23 ) || (input < 0){
    return(prompt = "pleas")
  }
}
*/
/*
return keys.upperCasedCharacters[math.floor(math.random())*keys.upperCasedCharacters.length]
]

math.floor(Math.random() * keys.length)

const passwordOptions = specialCharacters.concat(numericCharacters,lowerCasedCharacters, upperCasedCharacters);
*/




// Function for getting a random element from an array
function getRandom(specialCharacters) 
{
  return specialCharacters[Math.floor (math.random()*specialCharacters.length)];

}
console.log(getRandom.(specialCharacters));


// Function to generate password with user input
function generatePassword() {
 var input = window.prompt("How many characters do you want?");
if ((input > 8) && (input <=23)) {
  console.log(input);
  
}
else {
  window.alert = ("Oops, you've entered an incorrect number, please try again!");
generatePassword();
}

var input = window.prompt("How many special characters would you like?");
if ((input >= 0) && (input <= 23)) {
  console.log(input);
}
else {
  window.alert = ("Oops, we've hit a roadblock, please try again!");
  generatePassword();
}
}

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