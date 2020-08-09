/* Dataset */

//returns in STRING type, if you expect number, need number.parseInt() method!!


//<div id="user" data-id="1234567890" data-user="johndoe" data-date-of-birth>John Doe</div>

const el = document.querySelector('#user');

// el.id === 'user'
// el.dataset.id === '1234567890'
// el.dataset.user === 'johndoe'
// el.dataset.dateOfBirth === ''

// set the data attribute
el.dataset.dateOfBirth = '1960-10-03';
// Result: el.dataset.dateOfBirth === 1960-10-03

delete el.dataset.dateOfBirth;
// Result: el.dataset.dateOfBirth === undefined

// 'someDataAttr' in el.dataset === false
el.dataset.someDataAttr = 'mydata';
// Result: 'someDataAttr' in el.dataset === true

const getUserIdFromCard = () => {
    const card = document.querySelector("#user-card");
    return Number.parseInt(card.dataset.userId, 10);
}

//sample usage
console.log(getUserIdFromCard());




/*Append HTML(afterbegin:prepend,beforeend:append)*/

const addItemToShoppingList = item => {
    if (!item){
        return false;
    }
    const shoppingList = document.querySelector("#shopping-list");
    shoppingList.insertAdjacentHTML("beforeend", `<li class="item">${item}</li>`)
}


//sample usage
addItemToShoppingList("Apple");
addItemToShoppingList("Banana");
addItemToShoppingList();





/*Create Element*/

const paragraph = document.createElement("p");
paragraph.classList.add("text-center");
paragraph.textContent = "Hello World";
console.log(paragraph);

//<p class="text-center">Hello World</p>
//you can simply create it in a string: <p class="text-center">Hello World</p>
// as pass it to insertAdjacentHTML.


//Example1

const createAvatar = (url, className) => {
    const img = document.createElement("img");
    img.src = url;
    img.classList.add(className);
    return img; //<img src="/avatar/person.png" class="className">
}



//sample usage
console.log(createAvatar("/avatar/person.png", "circle"));
console.log(createAvatar("/avatar/user.png", "rounded"));




