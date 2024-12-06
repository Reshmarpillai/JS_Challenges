// Easy: Write a program to swap two variables without using a third variable.

const readline = require("readline");

// creating interface for reading an input

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Enter the first number : ", (num1) => {
  console.log(`First number is ${num1}`);
  r1.question("Enter the second number : ", (num2) => {
    console.log(`Second number is ${num2}`);

    let a = parseInt(num1);
    let b = parseInt(num2);
    console.log(`Numbers before swaping a : ${a} and b : ${b}`);

    //  swapping logic
    a = a + b;
    b = a - b;
    a = a - b;
    console.log(`Numbers after swapping a : ${a} and b : ${b}`);
    r1.close();
  });
});
