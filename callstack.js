//*** [함수 호출] ***
//

//javascript 함수호출

function printName(firstname){
    var myname="jisu";
    return myname + " ,"+ firstname;
}

console.log(printName());
//jisu ,undefined



function run(firstname){
    var firstname = firstname || "Youn";//undefined || "Youn"
    var result = printName(firstname); //jisu , Youn
    console.log(result);
}

run('kim');
//output: jisu,kim

/*console.log('kim'||'youn') ==> kim
* || 연산자는 왼쪽 것이 true이면 왼쪽 것을 차용
*/

//실행순서 line: 22, 16, 17, 18, (6,7,8,9), 18(result), 19, 20
//중간에 printName()함수가 실행될 때 run 함수도 실행하며 대기중.
//반환될 때까지 stack에 쌓여있다가 반환하고 메모리에서 사라진다.





