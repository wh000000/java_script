// const title = document.querySelector(".hello h1")


// console.log(title.location);
// console.dir(title);
// title.style.color = "blue";




// function click() {
//     title.style.color = "red";
// ;}

// function enter() {
//    title.innerText = "Mouse is here!";
// ;}

// function leave() {
//     title.innerText = "Mouse is gone!";
//  ;}

// function resize() {
//     document.body.style.backgroundColor = "tomato";
// ;}

// function copy() {
//     alert = "copier!";
// ;}

// function offline() {
//     alert = "no WIFI!";
// ;}

// function online() {
//     alert = "online!";
// ;}

// title.addEventListener("click", click);
// title.addEventListener("mouseenter", enter);
// title.addEventListener("mouseleave", leave);

// window.addEventListener("resize", resize);
// window.addEventListener("copy", copy);
// window.addEventListener("offline", offline);
// window.addEventListener("online", online);

// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick() {
//     const currentColor = h1.style.color;
//     let newColor;
//     if (currentColor === "blue"){
//         newColor = "tomato";
//     } else {
//         newColor = "blue";
//     }
//     h1.style.color = newColor
// }

// h1.addEventListener("click", handleTitleClick);

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
   const clickedClass = "clicked";

   h1.classList.toggle(clickedClass);

   // toggle function
   // if (h1.classList.contains(clickedClass)) {
   //  h1.classList.remove(clickedClass);
   // } else {
   //  h1.classList.add(clickedClass);
   // } 

 }
    
    h1.addEventListener("click", handleTitleClick);