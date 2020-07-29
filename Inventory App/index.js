import Inventory from "./inventory.js";

const form = document.querySelector("#add-item-form");
const newItem = document.querySelector("#new-item");
const tbody = document.querySelector("#tbody");
const total = document.querySelector("#total");
const checkExists = document.querySelector("#check-exists");

const inventory = new Inventory; //new 예약어를 활용해서 class Inventory의 instance 생성
                                 //빈 객체 items [] 만들기
const render = () => {
    let html = "";
    inventory.getItems().forEach(item => {
        html += `<tr><td>${item}</td></tr>`
    });
    tbody.innerHTML = html;
    total.textContent = inventory.getCount();
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    inventory.addItem(newItem.value);
    // empty text field
    newItem.value = "";
    // re-render
    render();
});

checkExists.addEventListener("keyup", () => {
    const itemToCheck = checkExists.value;
    const exists = inventory.exists(itemToCheck);
    if (exists) {
        checkExists.classList.add("found");
        checkExists.classList.remove("notfound");
    } else {
        checkExists.classList.remove("found");
        checkExists.classList.add("notfound");
    }
});
