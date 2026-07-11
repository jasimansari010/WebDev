//arrays--> an array is a special object used to store multiple values in a single variable.
// let arr = [120,423,354,738,974];
// console.log(arr[0]);
// console.log(arr[4],arr[2]);

 

//creating array
// Empty array
// let arr = [];
// Array with values
// let fruits = ["Apple", "Banana", "Orange"];
// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// // Using Array constructor
// let numbers = new Array(1, 2, 3);
// console.log(numbers);



// let fruits = ["Apple", "Banana", "Orange"];
// fruits[1] = "Mango";
// console.log(fruits);




//function on array
// Mutable Methods---A mutable method changes (modifies) the original array.
// Immutable Methods----An immutable method does not change the original array. It returns a new array, a new value, or a string.

// push()-->Adds one or more elements to the end of an array.
// pop()--->Removes the last element from an array.
// unshift()---->Adds elements to the beginning of an array.
// shift()----> Removes the first element.
// indexOf()---->Returns the index of an element.
// includes()--->Checks whether an element exists.it return true or false.
// filter----->Creates a new array containing only the elements that satisfy a given condition.
// some()---> checks whether at least one element in an array satisfies a given condition.
// map()----->creates a new array by applying a function to every element.
// reduce()---->reduces an array into a single value.
// slice()--->Returns a copy of a portion of an array.Original array is not changed.
//splice()---->Adds, removes, or replaces elements.Original array changes.
// concat()----> Combines two or more arrays.
// reverse()----->reverses the order of elements in the original array.
// sort()---->sorts the elements of an array.
// join()---->converts an array into a string using a separator.
// toString()---->converts an array into a comma-separated string.it always uses ","

// from the above these are mutable push()
            // pop()
            // shift()
            // unshift()
            // splice()
            // reverse()
            // sort() rest all immutable




// let arr = [1,2,3,4,5];
// arr.push(6);
// arr.pop()
// arr.unshift(0);
// arr.shift()
// console.log(arr.indexOf(3));
// console.log(arr.includes(4));
// console.log(arr.includes(9));


// let numbers = [1,2,3,4,5,6,8];
// let evenNumber = numbers.filter(num => num%2==0);
// console.log(evenNumber) 


// let arr = [1,2,3,4,5,6];
// let arr2 = arr.filter(function(val){
//     return val<3;
// });
// console.log(arr2);
// console.log(arr);


// let numbers = [1, 3, 5, 7];
// let result = numbers.some(num => num % 2 === 0);
// console.log(result);



// let numbers = [1,2,3,4];
// let doubled = numbers.map(num => num * 2);
// console.log(doubled);



// let numbers = [10,20,30,40];
// let sum = numbers.reduce((acc, num) => acc + num, 0);
// console.log(sum);


// let numbers = [10,20,30];
// let product = numbers.reduce((acc, num) => acc * num, 1);
// console.log(product);



// let arr = [10,20,30,40,50];
// let result = arr.slice(1,4);
// console.log(result);
// console.log(arr);


// array.splice(start, deleteCount, item1, item2)
// let arr = [10,20,30,40];
// arr.splice(1,2);
// console.log(arr);


// let arr = [10,30];
// arr.splice(1,0,20);
// console.log(arr);


// let arr = [10,20,30];
// arr.splice(1,1,50);
// console.log(arr);





// let arr1 = [1,2];
// let arr2 = [3,4];
// let result = arr1.concat(arr2);
// console.log(result);





// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers.reverse());



// let fruits = ["banana", "apple", "mango", "orange"];
// console.log(fruits.sort());


// let numbers = [10, 5, 100, 20];
// numbers.sort();
// console.log(numbers);//10,100,20,5   sort() converts numbers to strings and compares them alphabetically.


// let numbers = [10, 5, 100, 20];
// numbers.sort((a, b) => a - b);
// console.log(numbers);





// let fruits = ["Apple", "Banana", "Mango"];
// console.log(fruits.join(" "));
// console.log(fruits.join("-"));



// let fruits = ["Apple", "Banana", "Mango"];
// let result = fruits.toString();
// console.log(result);




// Array Destructuring is a JavaScript feature that allows you to unpack values from an array into separate variables.
// const array = [10, 20, 30];
// const [a,b , c] = array;
// console.log(a); 
// console.log(b); 
// console.log(c); 



// const array = [10, 20, 30];
// const [a, , c] = array;
// console.log(a); 
// console.log(c); 




// Iteration Over Arrays using [`for loop`,`forEach`]
// The forEach() method is used to iterate (loop) through every element of an array.

// let numbers = [10, 20, 30, 40];
// numbers.forEach(function(num) {
//     console.log(num);
// });


// let fruits = ["Apple", "Banana", "Mango"];
// fruits.forEach((fruit, index) => {
//     console.log(index, fruit);
// });


// let numbers = [10, 20, 30];
// let sum = 0;
// numbers.forEach(num => {
//     sum += num;
// });
// console.log(sum);





//<---------------Objects------------->
// let obj = {
//     name: "harsh",
//     age: 27,
//     email: "harsh@123.com",
//     number: 68476384
// };
// console.log(obj.name," ",obj.email);
// console.log(obj['name'],obj['age'],obj['number']);
// delete obj.number;
// console.log(obj)



// let obj = {
//     name: "harsh",
//     socials: {
//         instragram:"harshbhai",
//         facebook:"harshkumar"
//     }
// }
// console.log(obj['socials']['facebook']);





//question
// function add(a,b){
//     return a+b;
// }
// let ans = add(12,32);
// console.log(ans);



// function greeting(name="Guest"){
//     console.log(`Hi ${name}`)
// }
// greeting("Harsh");
// greeting("Jasim");
// greeting("Aman");




// function addition(...val){
//     let sum = 0;
//     val.forEach(function(add){
//         sum += add;
//     });
//     console.log(sum)
// }
// addition(1,2,3,4,5,7,9);


// function addUnlimited(...nums){
//     let sum = 0;
//     for(let i=0;i<nums.length;i++){
//         sum += nums[i];
//     }
//     console.log(sum)
// }
// addUnlimited(1,2,3,4,5,6,7,8,9);




// function addUnlimited(...nums){
//     let ans = nums.reduce(function(acc,val){
//         return acc + val;
//     },0);
//     console.log(ans);
// }
// addUnlimited(1,2,3,4,5,6,7,8);






//create IIFE that prints "I ran instantly"
// (function(){
//     console.log("I ran Instantly")
// })();



// function parent(){
//     let a = 12;
//     function child(){
//         console.log(a);
//     }
//     child();
// }
// parent();




// let fruits = ["apple","banana","mango","guava","orange"];
// fruits.push("litchi");//add at the end
// fruits.shift();//remove from the begining
// console.log(fruits);



// let arr = [1,2,3,4,5,6];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }






// let obj = {
//     name:"harsh",
//     age:25,
//     city:"Patna",
// };
// for(let key in obj){
//     console.log(obj[key])
// }



// setTimeout(function(){
//     console.log("Time's up")
// },2000);





// function runTwice(fn){
//     fn();
//     fn();
// }
// runTwice(function(){
//     console.log("Hello");
// })




