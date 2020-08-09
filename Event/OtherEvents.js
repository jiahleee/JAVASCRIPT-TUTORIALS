/* focus & blur*/

/*
focus and blur are often used in form validation.
They let you know when a user focuses a textbox and when they remove the focus (blur).
"focus" means that the element is selected to receive user input from the keyboard.
If you write something on your keyboard, it will be written inside the element that is focused.
When you remove the focus, then this will dispatch a blur event.
*/


//<input type="text" id="name" placeholder="Enter your name">

const name = document.querySelector("#name");

name.addEventListener("focus", () => {
    console.log("user focused inside the name");
});

name.addEventListener("blur", () => {
    console.log("user removed focus from the name");
});


/* DOMContentloaded */

/*This event fires on the document element only.
It signifies that the HTML has been loaded successfully by the browser.
This means that the browser has finished reading all of the content of your HTML file.
It doesn't mean however that images and other assets have finished loading.*/

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM is ready");
});


/* Scroll */

//The scroll event triggers on any element that scrolls.
// It is often used on the window object as following:

window.addEventListener("scroll", () => {
    console.log("page scrolled");
});

/*Summary*/
//focus is triggered when the user enters focus (the cursor) in a textbox.
// blur is triggered when the user removes focus (the cursor) from a textbox.
// DOMContentLoaded is fired when the browser has finished loading & constructing the entire HTML in your page.
// scroll is triggered everytime the user scrolls.


//Example1----------------
//user address textbox에 focus가 없으면 error class를 주고 success class를 없앤다. 반대도 마찬가지


const initValidation = () => {
    const address = document.querySelector("#user-address");

    address.addEventListener("blur", event => {//사용자가 focus를 없애면
        if (address.value){//input 태그의 입력값 address.value;를 얻어와서 값이 있다면
            address.classList.remove("error");
            address.classList.add("success");
        }else{
            address.classList.add("error");
            address.classList.remove("success");
        }
    });
}


//sample usage
initValidation();
