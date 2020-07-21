

//*** 함수의 선언 ***
/*
* 함수는 여러개의 인자를 받아서 그 결과를 출력한다.
* 파라미터의 갯수와 인자의 갯수가 일치하지 않아도 오류 x
* 파라미터:1개, 인자:0개 => 파라미터는 <undefined>값을 갖게 됨.
*
*
* */

//함수선언문

function printName(firstname){
    var myname="jisu";
    return "name is "+firstname;
}
console.log(printName());
//name is undefined
//선언되고 할당되지 않은 변수는 undefined



function printName(firstname){
    return "name is "+firstname;
}
console.log(printName('jisu', 'crong'));
//name is jisu
//파라미터 갯수와 인자의 갯수가 달라도 오류가 나지 않는다.

//함수표현식

function test(){
    console.log(printName());
    var printName=function () {
        return 'anonymous';
    }

}
test();

function printName(firstname){


    //변수값에 함수 표현식을 담아놓은 것 : 함수표현식
    var inner = function(){
        return "inner value";
    }

    var result=inner();
    console.log(" name is " + result);
}

printName();

//*** javascript hoisting ***

/* js는 실행될 때 함수를 한번 먼저 훑는다.
 * 기억을 해둔다. function으로 표기된 함수들을 위로 끌어올리는 것과 같다.
 */

//Hoisting example//

function printName(firstname){

    function inner(){
        return "inner value";
    }//함수는 통째로

    var a;//함수표현식이라 undefined

    var result=inner();

    console.log(typeof a);//undefined
    console.log(" name is "+ result);//name is inner value

    a= function () {};

}

//==> 함수표현식인 a 변수는 선언은 되고 값이 지정되지 않은 undefined type이다.

//*** 함수의 반환값 ***

function a(){

}
console.log(a()); //undefined

//return이 없어도 좋지만,void 함수의 경우 undefined값이 반환된다.

