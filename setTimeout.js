//*** [window 객체] ***
/*
* window는 전역객체. alert, setTimeout 등의 메소드가 많다.
* 비동기로 동작되는 setTimeout
*/

window.setTimeout()

//setTimeout은 인자로 함수를 받는다.
//나중에 실행되는 함수를 콜백함수라고 한다.
//함수를 return 할 수 있다.

function run() {
    setTimeout(function () {
        var msg="hello stranger";
        console.log(msg);
    }, 1000);
}

run();
// 1초 뒤에 실행되어 hello stranger이 나온다.



function run() {
    console.log("run start");
    setTimeout(function () {
        var msg="hello callback";
        console.log(msg);
        console.log("run......ing")
    }, 2000);
    console.log("run end");
}

run();

//run();
// VM523:2 run start
// VM523:8 run end
// undefined  <2초 후>
// VM523:5 hello callback
// VM523:6 run......ing
// setTimeout()함수가 가장 늦게 실행됨.

function run(){
    setTimeout(function () {
        var msg="my name is jiah";
        console.log(msg);
    }, 2000);
}

console.log("run start");
run();
console.log("run end");

//run start --> settimeout함수밖에 없어서 암것도 출력 x
//VM528:10 run end --> run() 실행 끝. 다음 콘솔 출력
//undefined <2초후> --> 2000ms 동안 undefined 상태
//VM528:4 my name is jiah -->2000ms 이후 콘솔출력


function run(){
    setTimeout(function () {
        var msg="my name is jiah";
        console.log(msg);
    }, 2000);
    console.log("run function end");
}

console.log("start");
run();
console.log("end");

//start
// VM610:6 run function end
// VM610:11 end
// undefined
// VM610:4 my name is jiah

//*** [비동기함수] ***
//비동기 함수는 본체의 run()함수가 실행된 이후에 실행이 된다.


//*** [another Asynchronous example: setInterval()]  ***
function startAlert() {
    console.log("love")
    setInterval(function() {
        alert("forever");
    },2000);
    console.log("you")
};

console.log("I")
startAlert();
