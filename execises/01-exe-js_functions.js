// Practice

/**
 * Create a function doTheMath(num1, sign, num2)
 * that will return the result of the mathematical operations of num1 operator num2.
 * Allowed operators (signs) are +, -, *, /, %, **.
 * Hint: you can use the switch statement.
 */

// 1

// num1, num2, sign => are just PLACEHOLDERS, it can be any word
const doTheMath = function(num1, sign, num2){
    switch(sign){
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num1 / num2;
      case "%":
        return num1 % num2;
      case "**":
        return num1 ** num2;
      default:
        return 'Please insert the valid operator!';
    }
  }
  
  // doTheMath(3, "*", 5) // 15
  doTheMath(5, "/", 2) // 2.5
  
  // ********************************************************************************
  // 2
  
  const doTheMath = (num1, sign, num2) => {
    switch(sign){
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num1 / num2;
      case "%":
        return num1 % num2;
      case "**":
        return num1 ** num2;
      default:
        return 'Please insert the valid operator!';
    }
  }
  
  // doTheMath(3, "*", 5) // 15
  doTheMath(5, "/", 2) // 2.5


/**
 * Create a function named isNameOddOrEven() that accepts a string as a parameter.
 * The function should return whether a received string has an odd or even number of letters.
 * The expected return should be in the following format - string: "has an even/odd number of letters".
 */

function isNameOddOrEven(){
    // your code here ...
}


/**
 * Refactor both the above functions to be arrow functions.
 */


