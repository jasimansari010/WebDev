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



