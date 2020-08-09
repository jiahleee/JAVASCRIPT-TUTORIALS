
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