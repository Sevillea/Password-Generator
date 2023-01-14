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
  
  // Function to prompt user for password options
  function getPasswordOptions() {
  // need prompt for length of password
  // confirm for uppCase
  // confirm for SC
  // confirm for numChar
  // Need outpit as array or object 

var input = parseInt( prompt("How many characters do you want?") );
 if (Number.isNaN(input)){ //if input is not a number. 
    alert("Length must be between 10 and 64. You provided a non number.");
    return;
 }
 if (input < 10 || input > 64){
    alert("Length must be between 10 and 64");
    return;
 }
 

  containsUpper = confirm ("would you like upper cased characters?");
  containsLower = confirm ("Would you like lower cased characters?");
  containsNumeric = confirm("Would you like numerical characters?");
  containsSpec = confirm("Would you like special charcters?")

let options = {
    length: input,
    containsUpper: containsUpper,
    containsLower: containsLower,
    containsNumeric: containsNumeric,
    containsSpec: containsSpec
}
  return options;  //returning object options
  }
  //console.log(getPasswordOptions())
  
  // Function for getting a random element from an array
  function getRandom(arr) {

   return arr [Math.floor(Math.random()*arr.length)]
    
  }
  console.log(getRandom(upperCasedCharacters));
  console.log(getRandom(lowerCasedCharacters));
  console.log(getRandom(numericCharacters));
  console.log(getRandom(specialCharacters));
  
  // Function to generate password with user input
  function generatePassword() {
    var password = "";
    var passwordOptions = getPasswordOptions();
    var charactersForPassword = [];
    console.log(charactersForPassword);

    if (!passwordOptions){ // if NOT
        return "Password not generated because of bad input";
    }
    if (passwordOptions.containsUpper){
        charactersForPassword = charactersForPassword.concat(upperCasedCharacters);
        console.log(charactersForPassword);
    }
    if (passwordOptions.containsLower){
        charactersForPassword = charactersForPassword.concat(lowerCasedCharacters);
    }
    if (passwordOptions.containsSpec){
        charactersForPassword = charactersForPassword.concat(specialCharacters);
    }
    if (passwordOptions.containsNumeric){
        charactersForPassword = charactersForPassword.concat(numericCharacters);
    }
//validation
    if(passwordOptions.containsLower === false && 
        passwordOptions.containsUpper === false && 
        passwordOptions.containsNumeric === false &&
        passwordOptions.containsSpec === false){
            alert("At least one character type should be selected")
            return "You have not selected a character type";

    }
    console.log("password options =  ", passwordOptions);

    let index=0;
    console.log("Password Length =  ", passwordOptions.length); 
    for(let i=0; i<passwordOptions.length; i++){
        index=Math.floor(Math.random()*charactersForPassword.length);
        password += charactersForPassword[index];

    }
  
    // Define a variable of password options
    //call getPassword function
    // will use getPassword, then an if statement, 
    console.log("Password =  ", password);
    return password;
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