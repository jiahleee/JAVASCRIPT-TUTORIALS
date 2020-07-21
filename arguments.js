//*** [arguments] ***
/*
* argument로 arraylike(배열같은,배열아닌) 만들기
* 다른 함수에 배열 형태의 값을 전달할 때 사용, 배열의 method사용불가
* typeof arguments : 객체
*/

//object 형식으로 출력되는 argument
function a(){
    console.log(arguments);
}
a(1,2,3);

//0: 1
//1: 2
//2: 3

// [ argument 활용(1) ]
function a(){
    console.log(arguments);
    for (var i=0;i<arguments.length;i++){
        console.log(arguments[i]);
    }
}
a(1,2,3);

//1 2 3

// [ argument 활용(2) ]

function a() {
console.log('my name is ', arguments[2])
}

a(1,2,"jisu");

//my name is jisu

function a() {
    if(arguments.length<3) return;//arguments 갯수가 3보다 작으면 return해!
    console.log('my name is ', arguments[2])
}

a(1,2);

//undefined

//arguments 함부로 수정금지, 변경에 약한 속성이므로 남발 금지.

//*** [arrow function] ***
//최신 syntax
function getName(name) {
    return "Kim" + name;
}

//위 함수는 아래 arrow 함수와 같다.
var getName = (name) => "Kim " + name;


//*** [1~무한대까지 인자를 받아 합을 구하는 함수] ***
function makeSum() {
    var sum=0;
    for(var i=0;i<arguments.length;i++) {
        sum += arguments[i];
    }
    return sum;
}

makeSum(1,2,3,4);
console.log(makeSum(1,2,3,4));



