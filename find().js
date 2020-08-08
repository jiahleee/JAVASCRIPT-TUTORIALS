/**
 * @param {array} users
 * @param {number} id
 */

//***회원목록 중 parameter id값을 가진 회원을 찾아 is_verified 항목을 true로 변환하고 회원목록을 다시 반환하는 함수***

    /* .find() 메소드 사용법
     [10, 15, 20].find(item => item === 20); // returns 20

     [10, 15, 20].find(item => item === 18); // returns undefined

     [10, 10, 20].find(item => item === 10); // returns 10 (the first one that matches)
     */

const verifyUser = (users, id) => {
    //users:회원정보(id,name,is_verified)가 담긴 배열
    //id:숫자
    /*verifyUser(
    [{id:1,name:"John",is_verified:false},{id:2,name:"Jennifer",is_verified:false}]
     ,2
     )*/

    const user=users.find(user=>user.id===id);//users 배열의 모든 user 중 id===2인 user 변수에 넣기
    user.is_verified===true;//is_verified 상태값 true 로 변환
    return users;//완료된 회원 배열 반환
}




//sample usage
const users = [{
    id: 1,
    name: "John",
    is_verified: false
}, {
    id: 2,
    name: "Jennifer",
    is_verified: false //true 로 변환
}, {
    id: 3,
    name: "Bob",
    is_verified: false
}];


console.log(verifyUser(users, 2));


