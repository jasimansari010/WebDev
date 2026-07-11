// A function is a reusable block of code that performs a specific task.
// Instead of writing the same code again and again, we write it once inside a function and call it whenever we need it.


// function declaration
// function printHello(){
//     console.log("Hello...")
// }
// printHello()


//function expression
// let res = function(){
//     let a = +prompt("Enter the value of a: ");
//     let b = +prompt("Enter the value of b: ");
//     let sum = a + b;
//     console.log(sum);
// }
// res();



// An Arrow Function is a shorter way to write a function. It was introduced in ES6 (ECMAScript 2015).
//arrow function
// let hello = ()=>{
//     console.log("hello");
// }
// hello();



// A parameter is a variable written in the function definition. It receives the value when the function is called.
// An argument is the actual value passed to the function when calling it.

// function dance(a){                      //parameters
//     console.log(`${a} is dancing`);
// }
// dance("jasim");         //argument
// dance("aman");
// dance("pawan");



// function add(a,b){
//     console.log(a+b);
// }
// add(21,44);
// add(9,8);





// function add(a=5,b=7){      //default parameter
//     console.log(a+b);
// }
// add();
// add(4,9);


// jab argument kai sare ho to humein utne hi parameter banane padenge, issey bachne ke liye, hum rest ka use karte hai (...)  agar ... fuunction ke parameter space mein lage to wo rest operator hai.
// function value(...val){
//     console.log(val)
// }
// value(1,2,3,4,5,6,7,8,9);




// function add(...val) {
//     let sum = 0;
//     for (let num of val) {
//         sum += num;
//     }
//     console.log(sum);
// }
// add(1, 2, 3, 4, 5, 6, 7, 8, 9);




// The return keyword is used to send a value back from a function to the place where the function was called.

// function abcd(){
//     return 12;
// }
// let val = abcd();
// console.log(val);


// function abcd(v){
//     return 12 + v;
// }
// let val = abcd(23);
// console.log(val);







// First-Class Function is a property of JavaScript (functions behave like values).
// function abcd(val){
//     val();
// }
// abcd(function (){
//     console.log("hey")
// })




// Higher-Order Function is a function that accepts another function as an argument or returns a function.
// function abcd(){
//     return function(){
//         console.log("hi");
//     }
// }
// abcd()();




// pure function----> Does not change anything outside the function (no side effects).
// function add(a, b) {
//     return a + b;
// }
// console.log(add(10, 20));
// console.log(add(10, 20));


// Impure function----> Changes something outside the function (side effects).
// let count = 0;
// function increment() {
//     count++;
//     return count;
// }
// console.log(increment());
// console.log(increment());




// closures---> A closure is a function that returns another function, and the returned function always remembers and can access the variables of its parent (outer) function.
// function abcd(){
//     let a = 12;
//     return function(){
//         console.log(a)
//     }
// }
// let res = abcd();
// res();



// Lexical Scope means: A function can access variables from the scope where it was created (written), not where it is called.
// function abcd(){
//     let a = 12;
//     function defg(){
//         let b = 13;
//         function ghij(){
//             let c = 14;
//             console.log(a,b,c)
//         }
//         ghij();
//     }
//     defg();
// }
// abcd();



// Hoisting means: Before executing the code, JavaScript moves declarations to the top of their scope.
// it is not done in function expression but you can done in statement. 

// abcd();
// function abcd(){
//     console.log("hoisting");
// }






// function bioData(...arguments){
//     // console.log(name,age,email);
//     console.log(arguments)
// }
// bioData("jasim" ,25, "jasim123@gmail.com")





// function abcd(a,b,c,d){         //positional argument
//     console.log(a,b,c,d);
// }
// abcd(1,2,3,4);



// function abcd(a,b,c,d,e){
//     console.log(a,b,c,d,e);
// }
// let arr = [1,2,3,4,5];
// abcd(...arr);         //spread argument






