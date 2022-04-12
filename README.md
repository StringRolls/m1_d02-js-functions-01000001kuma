![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)
# Module 1 - Day 2
# JS Functions basics

## Contents
> JS | Functions basics:
>      declaration
>      invocation
>      default parameters
>      arrow syntax for anonimous functions


## Functions

At the nomenclature level, there are:

- **Nominal functions**: they have declaration and invocation, with high reusability.
  ````javascript
  function sayHi(name){
    console.log(`Hello, ${name}!`)
  }
  ````
- **Anonymous functions**: no declaration, only invocation. Used in a single context.
  ````javascript
  names.forEach(function(elm) => {
     console.log(`Hello, ${elm}!`)
  })
  ````
  
At the structure level, there are: 
- **Function statement**: they have the reserved word `function`, parentheses for their parameters and block:
  ````javascript
  function getTotals(subtotal, tax){
    return subtotal + tax
  }
  ````
- **Arrow function**: they lack the reserved word `function`, the parenthesis in their parameters can be omitted in front of a single parameter, and they have an arrow before the opening of their block (block can be omitted in functions of a single instruction).
  ````javascript
  const getTotals = (subtotal, tax) => subtotal + tax
  ````
Functions can receive arguments in the form of parameters, and return data. Concerning their return:
- They can only return a single value, or `undefined` if they lack a return.
- A return in a function means stopping its execution.
- _Arrow functions_ without a block have a return by default.

For variable scoping purposes:
- Variables declared inside a block or function are called **local** or **private**, accessible only within that context.
- Variables declared outside any block or function are called **global** or **public**, accessible from anywhere in the script.
