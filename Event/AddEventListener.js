//<button>Click me</button>

const button = document.querySelector("button");

button.addEventListener("click", () => {
    // do something when the button is clicked.
});

//element.addEventListener(event_type, callback)
// In this case the event_type is "click" and the callback is just an empty arrow function.


/* Event Callback */

//Example---------------------

//<button>Click me</button>

const getWeatherInfo = () => {
    // weather info using fetch
}

const button = document.querySelector("button");

button.addEventListener("click", () => {
    button.setAttribute("disabled", "disabled");
    getWeatherInfo();
});

//This will disable the button when it's clicked and call the getWeatherInfo method

//Example2-----------------------

//버튼이 클릭되면 버튼의 text를 바꾸기

const initGetWeather = () => {
    const button=document.querySelector("button");
    button.addEventListener("click",()=>{
        button.innerHTML="Loading...";
    });
}

//sample usage
initGetWeather();



//버튼을 클릭할 때마다 class 를 add/remove 하기 (.classList.toggle)

const initToggleActive = () => {
    const button = document.querySelector("#my-button");

    button.addEventListener("click", () => {
        button.classList.toggle("active");
    });
}

//sample usage (do not remove)
initToggleActive();
