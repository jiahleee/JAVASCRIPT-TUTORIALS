/*
Whenever an event is dispatched, the browser sends to you the details of the event.
There are many details that you can read. Here's an example of a some of the details that you get from a "click" event:

X position of the mouse when click was triggered
Y position of the mouse when click was triggered
time when the event was triggered
boolean for whether the ctrl key was pressed when the click was triggered
boolean for whether the shift key was pressed when the click was triggered
You will (almost) never use these. However, there is 1 property that you will use very often which is the event's currentTarget.

But first, how do you read the event? You simply pass an event variable as the first argument of the callback function:
*/

//Example1---------------

const initToggleActive = () => {
    const button=document.querySelector("button");
    button.addEventListener("click",(event)=>{
        event.currentTarget.classList.toggle("active");
    })//event를 꼭 넘겨주어야 event.currentTarget을 알 수 있다!
}

//sample usage (do not remove)
initToggleActive();


//Example2------------------
//같은 클래스명을 가진 요소를 다중선택해서 올 때 forEach문 사용해서
//single node에 event가 행해질 때 currentTarget의 text 콘솔에 출력하는 함수 만들기
/*
<div id="sudoku">
    <div class="number">9</div>
    <div class="number">4</div>
    <div class="number">5</div>
</div>
*/

const elements = document.querySelectorAll(".number");

elements.forEach(element => {
    element.addEventListener("click", event => {
        console.log(event.currentTarget.textContent);
    });
});

//once event listener 도 참고! 한번 event가 실행 된 후 사라진다.
