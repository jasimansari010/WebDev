// console.log("Hello");

// console.error("this is error");


// console.warn("This is warning");


// console.info("Server Started Succesfully");     

// let user = {
//     name:"Jasim",
//     email:"jasim@gmail.com",
//     course:"JS"
// };
// console.table(user);



// console.group("User Info");
// console.log("Name: John");
// console.log("email: jasim@gmail.com")
// console.log("Course: JS");
// console.groupEnd();


// console.time("loopTime");
// for(let i=0; i<100000;i++){}
// console.timeEnd("loopTime");

// // console.clear();



// let name = "Ritik Rajput";
// console.log(name);

// let str = "JavaScript";
// let str2 = str.slice(0,4);
// console.log(str2);
// console.log(str);


// let myName = "jasim";
// console.log(`Hello ${myName} how are you`);


// let fruits = "apple, banana, grapes";
// console.log(fruits.split(","));                 


// let str = "I love HTML";
// console.log(str.replace("HTML","JS"));
// let msg = "hello how are you, are you fine";
// console.log(msg.replace("e","w"));
// console.log(msg.replaceAll("e","w"));


// let text = "Learning JavaScript is fun";
// console.log(text.includes("fun"))


// let a = 12;
// let b = a;
// a = a+b;

// let c = [1,2,3];
// let d = c;
// c.pop();


// let a = "";    //null
// let b;          //undefined


// let a = Number.MAX_SAFE_INTEGER;

// let a = 9007199254740991n;
// console.log(a+4n);



// let name = prompt("name ?");
// console.log(name);


// 1. Input two integers and print their sum.
// let num1 = Number(prompt("Enter the first Number: "));
// let num2 = Number(prompt("Enter the second Number:"));
// let sum = num1 + num2;
// console.log(sum);


// 2. Input length and breadth of a rectangle and print area.
// let length = Number(prompt("Enter the length of rectangle: "));
// let breadth = Number(prompt("Enter the breadth of rectangle: "));
// console.log(length*breadth);


// 3. Input radius of a circle and print circumference.
// let r = Number(prompt("Enter the radius: "));
// let pi = Math.PI;
// console.log("circumference of circle: " + 2*Math.PI*r);



// 4. Swap two numbers using a third variable.
// let num1 = 10;
// let num2 = 20;
// let temp;
// temp = num1;
// num1 = num2;
// num2 = temp;
// console.log(num1 , num2);


// 5. Swap two numbers without using a third variable.
// let num1 = 10;
// let num2 = 20;
// num1 = num1 + num2;
// num2 = num1 - num2;
// num1 = num1 - num2;
// console.log(num1, num2);

// OR
// let num1 = 40;
// let num2 = 20;

// [num1, num2] = [num2, num1];

// console.log(num1, num2);


// 6. Convert temperature from Celsius to Fahrenheit.
// let C = 25;
// let farhenheit = (9/5)*C+32;
// console.log(farhenheit);


// 7. Input principal, rate, and time and calculate simple interest.
// let principal = 1200;
// let rate = 5;
// let time = 3;
// let SI = (principal*rate*time)/100;
// console.log(SI);



// 8. Input a character and print its ASCII value.
// let ch = 'a';
// console.log(ch.charCodeAt(0));

// 11. Input two numbers and perform all arithmetic operations.
// let num1 = 10;
// let num2 = 20;
// console.log("Sum: " + (num1+num2));
// console.log("Difference: " + (num1-num2));
// console.log("Product: " + (num1*num2));
// console.log("Quotient: " + (num1/num2));
// console.log("Remainder: " + (num1%num2));
// console.log("Exponentiation: " + (num1**num2));


// 12. Check whether a number is even or odd using modulus operator.
// let num = Number(prompt("Enter a number: "));
// if(num%2==0){
//     console.log("Even");
// }else{
//     console.log("odd");
// }


// 13. Find largest among two numbers using ternary operator.
// let num1 = Number(prompt("Enter a first number: "));
// let num2 = Number(prompt("Enter a  second number: "));
// let greater = num1 > num2 ? num1 : num2;
// console.log(greater);



// truthy and falsy
// 0 "" false NaN null undefined document.all  --> falsy
// other is truthy
