
// or 연산자
const name = "crong";
const result = name || "coedsquad";
console.log(result);

0 == false; // true
"" == false; // true
null == false; // false(null:객체)
0 == "0"; // true
null == undefined; //true

0 === "0" // === 은 false (=== 사용할것)

// && 연산자
var result = false && true; // false


// --** js type **--


// undefined, null, boolean, number, string, object, function, array, Date, RegExp
// 변수는 선언될 때가 아니라 실행될 때 타입이 결정된다.
console.log(typeof ""); //  기본 type 확인
toString.call(new Date); // type 확인
