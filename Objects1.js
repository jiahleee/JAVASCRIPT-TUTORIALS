const language={
    name:"Javascript",
    creator:"Brendan Eich",
    is_popular:true
};

Object.keys(language);
//["name", "creator", "is_popular"]

Object.values(language);
//["Javascript", "Brendan Eich", true]

//***Object.keys(); returns an array of those keys

/*
***Reading a dynamic key from an object***
    =>In case the key you were looking for is a variable
    in that case you have to use the [key] which gets the value of the variable key.
*/

const key="creator";
console.log(language[key]);//Brendan Eich

Object.keys(language).forEach(key =>{
   console.log(key);
   console.log(language[key]);
//key is variable, and to get the value->language[key]
});

/* ***Concatenate objects***
=>merge 2 objects together, using the ... spread operator
* */

const firstPerson={
    name:"john",
    age:18
}

const secondPerosn={
    age:25
}

const mergedObjects={...firstPerson, ...secondPerosn};

console.log(mergedObjects);
//{name: "john", age: 25}

/* ***Destructuring objects***
we use this in situations below.
=> use this when you extract multiple properties from an object
* */

const person={
    first_name:"Jennifer",
    last_name:"Doe",
    age:24
};

//and wanna create 2 variables from person

const first_name=person.first_name;
const last_name=person.last_name;

//By using destructuring we can make it simple

const{first_name,last_name}=person;

//*** provide default value for a non-existing variable ***

const{first_name, last_name, status='single'}=person;



