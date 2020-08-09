
//html selector로 요소 object 받아오기

const getNavbarElement = () => {
    return document.querySelector("#navbar");
}

const getMainElement = () => {
    return document.querySelector("#main");
}

const getAboutFromFooter = () => {
    return document.querySelector("#footer .about");
}

const getTheParagraphElement = () => {
    return document.querySelector("p");
}


const getArticleTitle = () => {
    return document.querySelector("#headline").textContent;
}


//요소 태그 안의 text 가져오기

const getArticleTitle = () => {
    return document.querySelector("#headline").textContent;
}

//sample usage
console.log(getArticleTitle());


//요소 태그를 찾지 못했을 때 break 되지 않도록 if문 사용해서 예외처리 해주기

const getTextFromSelector = css_selector => {
    const element = document.querySelector(css_selector);
    if (!element){
        return "";
    }
    return element.textContent;
}

//selector에 해당하는 복수의 요소 가져오기

/*
document.querySelectorAll("your-css-selector-here") returns multiple elements from the DOM
it always returns a NodeList which is largely similar to an Array (but not exactly the same).*/

const getAllLinks = () => {
    return  document.querySelectorAll("a");
}

/* 리턴타입인 nodelist 예시, 배열과 유사하나 배열이 아니다.

NodeList(4) [div, div, div, div]

NodeList(2) [a, a]

NodeList(2) [a, a]*/

/* NodeList 는 array의 몇몇 property를 가지고 있다.
->.length .forEach
->document.querySelectorAll(".link").filter(). 는 작동 X
->.textContent 도 single element에만 작동, querySelectorAll 때는 forEach로 사용 가능
*/

/*<p>First paragraph</p>
<p>Second paragraph</p>*/

const paragraphs = document.querySelectorAll("p");

console.log(paragraphs.length); // 2

paragraphs.forEach(paragraph => {
    console.log(paragraph); // logs every paragraph element
});



const paragraphs = document.querySelectorAll("p");

paragraphs.forEach(paragraph => {
    console.log(paragraph.textContent); // logs every paragraph's text
});



//html 내 모든 <a>태그의 textContent를 받아오는 함수

const getLinksTexts = () => {
    document.querySelectorAll("a").forEach(selector=>showText(selector.textContent));
}

function showText(text){
    //do not modify this function
}

//sample usage
getLinksTexts();

/* 유사배열인 NodeList => Array 변환
* Convert NodeList to Array

const divs = document.querySelectorAll("div"); // NodeList
const array = [...divs]; // Array
*
* array로 변환 시 map, filter 사용 가능
* */

const divs = document.querySelectorAll("div"); // NodeList
const array = [...divs]; // Array

/*
 <div class="navbar">
    <a href="login.html">Login</a>
    <a href="register.html">Register</a>
</div>
<div class="footer">
    <a href="login.html">Login</a>
</div>
* */

const links = document.querySelectorAll("a");
const loginLinks = [...links].filter(link => link.textContent === "Login");
console.log(loginLinks); // Array of 2 links that have "Login" as text


/* innerhtml */

//<div id="test">This is a <strong>sample text</strong></div>

const element = document.querySelector("#test");
console.log(element.textContent); // "This is a sample text"
console.log(element.innerHTML); // "This is a <strong>sample text</strong>"


/* Change text in node */

//<div id="test">This is a <strong>sample text</strong></div>

const element = document.querySelector("#test");
element.textContent = "This is the new text!";

element.textContent = "<strong>This will NOT be bold</strong>";

element.innerHTML = "<strong>This will be bold</strong>"

//html code를 html로 인식시키려면 innerHTML을 사용해야한다.

//If the string that you're rendering is coming from your users, then you should most likely avoid using .innerHTML
// as your users will be able to write HTML & JavaScript code inside of your page which may lead to security issues,
// often called Cross-Site Scripting (XSS).

/* Emptying Elements */

/*
 <div id="banner">
    <h1>Hello World</h1>
    <p>lorem ipsum</p>
</div>
*
* */

const banner = document.querySelector("#banner");
banner.innerHTML = "";

//This will empty all the content inside the div with id "banner",
// without removing the banner itself. So it only removes the h1 and p inside.

// 자동화된 welcome message 보낼 때(strong 태그 포함한)

const getFormattedWelcomeMessage = () => {
    return document.querySelector("#welcome-message").innerHTML;
}

//   Welcome to your beautiful(bold font) website!


// Practice 1
/*Complete the method such that it welcomes the user by writing: "Hello {name}"
where the name is between <strong> tags in the div with id "welcome-message".*/

const setFormattedWelcomeMessage = (name) => {
    document.querySelector("#welcome-message").innerHTML
        =`Hello <strong>${name}</strong>`;
}



//sample usage
setFormattedWelcomeMessage("John");
setFormattedWelcomeMessage("Jennifer");

//input 타입 태그는 닫히는 태그(closing tag)가 없기 때문에 .textContent/.innerHTML로 불러올 수 없다.
//사용자가 input tag 에 입력한 값을 얻고 싶다면 .value 속성을 이용해야 한다.
//사용자의 정보를 미리 알고 있을 경우, value="" 을 통해 미리 input tag에 적어 놓을 수도 있다.(사용자 편의를 위해)

const emptyUserName = () => {
    document.querySelector("#name").value="";
} //empty도 가능



/*모든 요소마다 class="highlighted" 추가하기*/

const highlightShoppingListItems = () => {
    document.querySelectorAll("#shopping-list li")
        .forEach(item => item.classList.add("highlighted"));
}

//sample usage
highlightShoppingListItems();


/* Change STYLE by using DOM
 One of the powerful features of the DOM is being able to change the style of an element.
Any CSS property can be set or changed from JavaScript.
This lets you create dynamic experiences based on certain conditions or based on events (which we will see in the next chapter).
* */

//USE CAMELCASE!

/*
CSS	                 JavaScript
background-color	backgroundColor
color	            color
font-size	        fontSize
z-index	            zIndex
*/

//<div id="banner">Welcome!</div>

const banner = document.querySelector("#banner");
banner.style.backgroundColor = "red";

//Showing or Hiding element

//<div id="banner">Welcome!</div>

const banner = document.querySelector("#banner");

// hide element
banner.style.display = "none";

//show element by resetting it's display
banner.style.display = ""; //or "initial"

// eu-citizen 에게만 전송하고픈 message가 있을 때, 특정 메세지 node를 show/hide 하는 방법

/**
 * @param {Object[]} user
 * @param {number} user[].id
 * @param {boolean} user[].is_eu
 */
const updateFormEUConsent = user => {
    const msg = document.querySelector("#eu-consent");
    if (user.is_eu){
        msg.style.display = ""; //same as "initial", block/inline등으로 초기화 시키기
    }else{
        msg.style.display = "none";
    }
}

//sample usage
updateFormEUConsent({
    id: 1,
    is_eu: true
});

updateFormEUConsent({
    id: 2,
    is_eu: false
});


