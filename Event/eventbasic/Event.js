//*** [Browser eventbasic, eventbasic object, eventbasic handler] ***
/*
* 마우스 클릭, 화면 스크롤 등의 작업에 따라 브라우저는 반응
* eventbasic 기반으로 브라우저 동작하기
* Keypoints: eventbasic listener, addEventListener, eventbasic object
* 이벤트 등록:addeventListener function
*
*
*
* */

//2.이벤트 등록
var el=document.querySelector(".outside");
el.addEventListener("click", function (e) {
var target=e.target;
console.log(target.className, target.nodeName);
console.log(target.innerText);
});

//outside DIV
// jiahleee's gitgub


//addEventListener의 두번째 인자는 함수로, 이벤트핸들러/이벤트리스너라고함.
//target을 구해서 target.으로 많은 정보를 알 수 있다.