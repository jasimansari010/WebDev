// DOM (Document Object Model) is a tree-like structure of an HTML page that JavaScript uses to read, modify, add, or delete elements.
// DOM has 4 Pillars :-
        // 1.Selection of an Element,     2. Changing HTML    3.Changing CSS   4.Event Listener


// let btn  = document.querySelector('button');
// btn.innerHTML = "Reset";
// btn.style.backgroundColor = "Red";
// btn.style.color = "white";
// btn.style.fontSize = "20px";
// btn.addEventListener('click',function(){
//     console.log("button is clicked");
// })



// let para = document.querySelector('p');
// let btn = document.querySelector('button');
// btn.addEventListener('click',()=>{
//     para.innerHTML = "Hello, I am Jasim";
//     para.style.fontSize = "20px";
// });


// let h2 = document.querySelector('h2');
// let inc = document.querySelector('#inc');
// let decr = document.querySelector('#decr');
// let a = 0;

// inc.addEventListener('click',()=>{
//     a++;
//     h2.innerHTML = a;
// });
// decr.addEventListener('click',()=>{
//     a--;
//     h2.innerHTML = a;
// });




// var btn = document.querySelector('button');
// var box = document.querySelector('#box');

// btn.addEventListener('click',()=>{
//     var r = Math.floor(Math.random() * 256);
//     var g = Math.floor(Math.random() * 256);
//     var b = Math.floor(Math.random() * 256);

//     box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

// })






// var arr = [
//     {
//         team: "CSK",
//         primary: "gold",
//         secondary: "navy"
//     },
//     {
//         team: "RCB",
//         primary: "crimson",
//         secondary: "black"
//     },
//     {
//         team: "MI",
//         primary: "dodgerblue",
//         secondary: "gold"
//     },
//     {
//         team: "KKR",
//         primary: "purple",
//         secondary: "violet"
//     },
//     {
//         team: "SRH",
//         primary: "darkorange",
//         secondary: "maroon"
//     },
//     {
//         team: "DC",
//         primary: "royalblue",
//         secondary: "tomato"
//     },
//     {
//         team: "RR",
//         primary: "hotpink",
//         secondary: "deepskyblue"
//     },
//     {
//         team: "PBKS",
//         primary: "firebrick",
//         secondary: "silver"
//     },
//     {
//         team: "GT",
//         primary: "midnightblue",
//         secondary: "cyan"
//     },
//     {
//         team: "LSG",
//         primary: "turquoise",
//         secondary: "coral"
//     }
// ];

// let h2 = document.querySelector('h2');
// let btn = document.querySelector('button');


// btn.addEventListener('click',()=>{
//     var a = Math.floor(Math.random()*arr.length);
//     h2.innerHTML = arr[a].team;
//     h2.style.backgroundColor = arr[a].secondary;
//     h2.style.color = arr[a].primary;
// })






// let h2 = document.querySelector('h2');
// let h1 = document.createElement('h1');
// h1.innerHTML = 'Hello from Js';

// h2.appendChild(h1);
// console.log(h1);

// let body = document.querySelector('body')
// let btn = document.createElement('button');
// btn.innerHTML = 'Download';
// body.appendChild(btn);





// let btn = document.querySelector('button');
// let main = document.querySelector('main');

// btn.addEventListener('click',()=>{
//         let a = document.createElement('div');
//         var r = Math.floor(Math.random() * 256);
//         var g = Math.floor(Math.random() * 256);
//         var b = Math.floor(Math.random() * 256);

//         a.style.height = '50px';
//         a.style.width = '50px';
//         a.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        
//         var x = Math.floor(Math.random()*100);
//         var y = Math.floor(Math.random()*100);

//         a.style.position = 'absolute';
//         a.style.top = y+'%';
//         a.style.left = x+'%';
        

//         main.appendChild(a)
        
// })





// console.log("Hello1")
// setTimeout(()=>{
//         console.log("Hello2")
// },3000);
// console.log('Hello 3')



// setTimeout(()=>{
//         console.log("Hello1")
// },5000);

// setTimeout(()=>{
//         console.log("Hello2")
// },3000);

// setTimeout(()=>{
//         console.log("Hello3")
// },2000);



// let user = ['aman','pawan','karan','naman','dhawan','saif','kaif','ali','manish'];
// let btn = document.querySelector('button');
// let h1 = document.querySelector('h1');

// btn.addEventListener('click',()=>{
//         let index = Math.floor(Math.random()*user.length);
//         let r = Math.floor(Math.random() * 256);
//         let g = Math.floor(Math.random() * 256);
//         let b = Math.floor(Math.random() * 256);
//         setTimeout(()=>{
//                 h1.innerHTML = `Hello I am ${user[index]}`;
//                 h1.style.fontSize = '20px'
//                 h1.style.color = `rgb(${r}, ${g}, ${b})`;
//         },2000);
       
// });





// let user = ['aman','pawan','karan','naman','dhawan','saif','kaif','ali','manish'];

// let btn = document.querySelector('button');
// let h1 = document.querySelector('h1');

// btn.addEventListener('click', () => {

//     h1.style.fontSize = '20px';

//     setInterval(() => {
//         let index = Math.floor(Math.random() * user.length);
        
//         h1.innerHTML = `Hello I am ${user[index]}`;
//     }, 1000);

// });


// var a = 0;
// var int = setInterval(()=>{
//         a++;
//         console.log(a);
// },500);
// setTimeout(()=>{
//         clearInterval(int)
// },5000)




