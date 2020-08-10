/*form tag에서 받아온 user의 입력값 중 email, password 받아서 함수 실행시키기*/

const initLoginForm = () => {
    const form = document.querySelector("#login-form");
    const email = document.querySelector("#login-email");
    const password = document.querySelector("#login-password");

    form.addEventListener("submit", event => {
        event.preventDefault();//submit event가 실행될 때에는 늘 default 로드를 방지해준다.

        processLogin(email.value, password.value);
    });

    function processLogin(email, password) {
        //do not modify this function
    }
}

//sample usage (do not remove)
    initLoginForm();

/*사용자가 input id=city 칸의 값을 채우지 않았을 때*/

const form = document.querySelector("#weather-form");
const city = document.querySelector("#city");

form.addEventListener("submit", event => {
    event.preventDefault();

    if (!city.value){//칸이 비어있을 경우우        return false;
    }

    getWeatherInfo(city.value);
});

/*사용자의 input (email,password) 빈 값인지 아닌지 확인하고 로그인 메소드로 넘기기*/

const form = document.querySelector("#login-form");
const email = document.querySelector("#login-email");
const password = document.querySelector("#login-password");

const initLoginForm = () => {
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!email.value || !password.value){
            return false;
        }

        processLogin(email.value, password.value);
    });
}

function processLogin(email, password){
    //do not modify this function
}

//sample usage (do not remove)
initLoginForm();

