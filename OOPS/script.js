// class Student {
//     constructor(username,email,course){
//         this.usernamename = username;
//         this.email = email;
//         this.course = course;
//     }
// }
// const student1 = new Student('jasim','abac@gmail.com','DSA');
// console.log(student1);



// class BiscuitMaker{
//     constructor(){
//         this.name = "ParleG";
//         this.price = 5;
//     }
//     pack(){
//         console.log('biscuit is packed')
//     }
//     unPack(){
//         console.log('biscuit is not packed')
//     }
// }

// let biscuit = new BiscuitMaker(); 




// class Book{
//     constructor(){
//         this.name = "Science";
//         this.author = "harsh Sharma";
//         this.price = 290;
//         this.color = "yellow";
//     }
//     openBook(){
//         console.log('book is open');
//     }
//     study(){
//         console.log('Read the book');
//     }
// }

// let b1 = new Book();
// console.log(b1);

// let b2 = new Book("Maths","Jasim",320,"Green");
// console.log(b2);




// class Book{
//     constructor(name,author,price,color){
//         this.name = name;
//         this.author = author;
//         this.price = price;
//         this.color = color;
//     }
//     openBook(){
//         console.log('book is open');
//     }
//     study(){
//         console.log('Read the book');
//     }
// }

// let b1 = new Book("Science","Harsh",223,"Yellow");
// console.log(b1);

// let b2 = new Book("Maths","Jasim",320,"Green");
// console.log(b2);





// class Human{
//     constructor(){
//         this.name = 'Jasim';
//         this.age = 27;
//     }
// }

// Human.prototype.saansLo = ()=>{
//     console.log('breathing');
// }
// Human.prototype.khaanaKhao = ()=>{
//     console.log('Eating');
// }


// let h1 = new Human();
// let h2 = new Human();






// console.log(this);      //value of this is window

// (()=>{
//     console.log(this)        //value of this is window
// })
// ();



// function abcd(){
//     console.log(this)       //value of this is window
// }
// abcd();


// let obj = {
//     name:"harsh",
//     func:function(){
//         console.log(this);       //value of this is object
//     }
// }
// obj.func();



// //global -> window
// console.log(this);
// //function -> window
// function abcd(){
//     console.log(this)      
// }
// abcd();

// // es5 function inside object ->object 
// let obj = {
//     func: function(){
//         console.log(this)
//     }
// }
// obj.func();



//es6 function inside object  -> window
// let obj = {
//     func : ()=>{
//         console.log(this)
//     }
// }
// obj.func()


// es5 function insside es5 function inside object -> window 
// let obj = {
//     func: function(){
//         function abcd(){
//             console.log(this)
//         }
//         abcd();
//     }
// }
// obj.func();




// es6 function inside es5 function inside object->object
// let obj = {
//     fnc: function(){
//         (()=>{
//             console.log(this)
//         })
//         ()
//     }
// }
// obj.fnc();






// class Animal {
//     constructor() {
//         this.hands = 2;
//         this.legs = 2;
//     }
//     eat(){
        
//     }
//     breath(){

//     }
// }
// class kekda extends Animal{
//     constructor(){
//         super();
//         this.legs = 8;
//         this.hand = 0
//     }
//     susu(){

//     }
// }

// let k1 = new kekda();







// class Profile{
//     constructor(){
//         this._age = 12;
//     }
//     set age(val){
//         if(val<0){
//             console.error("not");
//             return;
//         }
//         this._age = val;
//         return this._age;
//     }
//     get age(){
//         return this._age;
//     }
// }
// let a1 = new Profile(16);
// console.log(a1);



// let user = {
//     name:"harsh",
//     email:"aja12@gmail.com",
//     login: (()=>{
//         console.log("looged in")
//     })
// };
// user.login();






// class User{
//     constructor(name,age,email){
//         this.name = name;
//         this.age = age;
//         this.email = email;
//         this.loggedIn = function(){
//             console.log("Logged")
//         }
//     }
// }

// let user1 = new User("Harsh",19,"harsh12@gmail.com");
// let user2 = new User("Jasim",21,"jas1@gmail.com");
// let user3 = new User("Shivam",18,"shiv.kum@gmail.com");
// let user4 = new User("Arsalan",19,"arshubhai@gmail.com");
// let user5 = new User("satyam",19,"satya@gmail.com");




