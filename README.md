# Password Generator using JavaScript

## Overview

I was required to create an application that would enable an employee to generate a random password based on their input. The application runs in the browser and gives the user a random password creaed from 4 arrays of special characters, lower cased characters, upper cased characters, and numerical characters.

I've ensured that my code is clean and exlained with the use of comments, and the user interface is responsive and adapatable to differing inputs from the user. 


## Application Guide:


* Generate a password when the button ;Generate Password' is clicked by the user.

  * User is presented with a series of prompts for password criteria. If the user fails to input correctly, they are alerted to what went wrong and returned.

    * The length of the password generated will be between 10 and 64 characters. 

    * If the user inputs less than 10 characters, the user will be alerted that it must match 10, and vice versa if user inputs greater than 64.

    * Character types that this application includes:
      * Lowercase
      * Uppercase
      * Numeric
      * Special characters 

  * Code validates for each input and at least one character type will be selected of a password will not be generated and the user returned.

  * Once all prompts are answered then the password will be generated and displayed in the password generator field in the window. 


  
GitHub Pages URL: https://sevillea.github.io/Password-Generator/ 

[![image of Password Generator Application](https://github.com/Sevillea/Password-Generator/blob/main/Images/Initial-Input-Error.pdf)]





