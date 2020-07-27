//***[Ajax통신]***
/*
* 브라우저의 새로고침 없이 데이터를 얻어오는 방법
* 사용자가 더 빠르게 변경된 데이터를 화면의 새로고침 없이 확인하는 방법
* 전체 웹페이지의 일부분만 데이터를 갱신하는 방법
* JSON: client & server 데이터를 주고받을 때 표준적으로 사용하는 data format
* =>javascript object notation
* =>[ key& value ] similar to javascript object
* */

//Ajax 실행코드

function ajax(data){
    var oReq=new XMLHttpRequest();
    oReq.addEventListener("load", function () {
        console.log(this.responseText);
    }); //this->oReq
    oReq.open("GET", "http://www.example.org/getData?data=data");
    oReq.send();
}

/*XMLHttpRequest를 사용한 표준방식
* XMLHttpRequest 객체를 생성, open method로 요청을 준비
* send method로 서버로 보낸다.
* 서버에서 응답이 오면 load 이벤트가 발생, 콜백함수 실행,
* 콜백함수가 실행될 때는 ajax 함수는 반환하고 콜스택에서 사라진 상태
* 이는 setTimeout함수의 콜백함수 실행과 유사하게 동작하는 비동기 로직(asynchronous)
* */

