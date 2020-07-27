const grades=[15,5,10];

function sumGrades(grades){
    let sum=0;
    grades.forEach(function(grade){sum+=grade});
    return sum;
}

//sample usage
console.log(sumGrades(grades));

//change to *** Arrowfunction ***

function sumScores(scores){
    let sum=0;
    scores.forEach((score)=>{sum+=score});
    return sum;
}

//make own array and practice

const jiah=["gigi",1010,{age:25},{major:"arabic"}];

jiah.length; //4
// .length is a property (pre-computed value) and not a function.
// That's why you should not have () after it.

jiah[3].major;//arabic

//***Arrowfunction***

const isLegal=(age)=>{return age>=18};//return type : boolean

isLegal(2);//false
isLegal(30);//true