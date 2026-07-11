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


let h2 = document.querySelector('h2');
let inc = document.querySelector('#inc');
let decr = document.querySelector('#decr');
let a = 0;

inc.addEventListener('click',()=>{
    a++;
    h2.innerHTML = a;
});
decr.addEventListener('click',()=>{
    a--;
    h2.innerHTML = a;
});




