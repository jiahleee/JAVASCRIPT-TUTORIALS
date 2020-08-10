
//setting up the API and setting the Base URL:
const API = new MyAPI();
API.setBaseUrl("http://api.learnjavascript.online/demo");


/*Fetch GET*/
//And here's how you'd send a GET request to
//http://api.learnjavascript.online/demo/notifications/new.json:

API.get("/notifications/new.json")
    .then(data => {
        console.log(data.count);
    });

//response is defaulting to JSON. So we did not have to write .then(response => response.json()).
// This means that the API class's get method will call the .then(response => response.json()) for us internally.

/*Fetch POST*/

API.post("/food.json", {
    food: "Pasta"
})
    .then(data => {
        console.log(data);
    })

//we did not have to repeat the Base URL, we did not have to specify the headers everytime,
// nor JSON.stringify. Everything is being taken care of by the .post method.


/*API wrapper*/
//setbaseurl, get 등의 메소드를 미리 정의 해둔 api wrapper class 이다 .
//다른 파일에서 import하여 사용한다.

class Backend {
    constructor(){
        this.baseUrl = '';
    }
    setBaseUrl(url){
        this.baseUrl = url;
    }
    getBaseUrl(){
        return this.baseUrl;
    }
    get(endpoint){
        return fetch(this.baseUrl + endpoint)
            .then(response => response.json());
    }
    post(endpoint, data){
        return fetch(this.baseUrl + endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json());
    }
}


//sample usage
const API = new Backend();
API.setBaseUrl("https://api.learnjavascript.online/demo");
try {
    console.log(API.getBaseUrl());

    API.get("/notifications/new.json")
        .then(data => {
            console.log(data.count);
        });

    API.post("/food.json", {
        food: "Pasta"
    })
        .then(data => {
            console.log(data);
        })
} catch(error){

}

/*Fetch on click*/

//<button id="button">Click me</button>

import {Backend} from "./backend.js";

const API = new Backend();
API.setBaseUrl("/base-url-here/");

const button = document.querySelector("#button");
button.addEventListener("click", () => {
    API.get("some-api.json").then(data => {
        console.log(data);
    });
});

//Example1--------------------------------------------------

//backend.js. Now you have to import it and use it to complete the getAmsterdamWeather()
// such that it calls showTemperature() with the temperature result.
// The base url is "https://api.learnjavascript.online/demo"

import {Backend} from "./backend.js";

const getAmsterdamWeather = () => {
    // create a new instance of Backend and set the base url
    // /weather/amsterdam.json
    const API = new Backend;
    API.setBaseUrl("https://api.learnjavascript.online/demo");
    API.get("/weather/amsterdam.json")
        .then(data => {
            showTemperature(data.temperature);
        });
}

function showTemperature(temperature){
    //do not change this function
}


//sample usage
getAmsterdamWeather();

//Example2------------------------------------------------------------------

/*
Unread notifications bubble
When the Get unread notifications button is clicked,
it should get the number of unread notifications from the notifications API
and insert it into the notifications div. Write your code in initShowNotifications().
    You can use the backend.js provided.
    Base Url: https://api.learnjavascript.online/demo/
    Method: Get
Notifications API: notifications/new.json
*/


import {Backend} from "./backend.js";
const API = new Backend();

API.setBaseUrl("https://api.learnjavascript.online/demo/");
const initShowNotifications = () => {
    const button = document.querySelector("#button");
    button.addEventListener("click", () => {
        API.get("notifications/new.json").then(data => {
            console.log(data);
            document.querySelector("div").innerHTML=data.count;
        });
    });
}

//sample usage (do not remove)
initShowNotifications();


//Example 3---------------------------------------------------------------

/*List chapters
When the List chapters button is clicked, it should get all the chapters from the chapters API and insert
every chapter's name as a new li in the chapters ul. Write your code in initListChapters().
You can use the backend.js provided.
    Base Url: https://api.learnjavascript.online/demo/
    Method: Get
Chapters API: chapters/all.json*/


import {Backend} from "./backend.js";

const API = new Backend;
API.setBaseUrl("https://api.learnjavascript.online/demo/");

const initListChapters = () => {
    const button = document.querySelector("#list-chapters");
    const chapters = document.querySelector("#chapters");

    button.addEventListener("click", ( ) => {
        API.get("chapters/all.json").then(data => {
            data.forEach(chapter => {
                chapters.insertAdjacentHTML("beforeend", `<li>${chapter.title}</li>`)
            })
        });
    });
}

//sample usage (do not remove)
initListChapters();


//Example 4----------------------------------------------------
/*Log my food
When the user fills the food they ate and submit the form, you should send the food to the food API. Write your code in initLogFood()
You can use the backend.js provided.
Base Url: https://api.learnjavascript.online/demo/
Method: Post
Food API: food.json
Expected data: {food: "food name here"}

Optional: Empty the textbox when you get a response from the API.*/

import {Backend} from "./backend.js";

const API = new Backend;
API.setBaseUrl("https://api.learnjavascript.online/demo/");

const initLogFood = () => {
    const form = document.querySelector("#food-form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();//submit event 일 경우 필수로 써준다.
        API.post("food.json", {food: document.querySelector("#food-name").value})
            .then(data => {document.querySelector("#food-name").value = "";//option
        });
    });
}

//sample usage (do not remove)
initLogFood();