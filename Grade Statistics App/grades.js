/** @param {number[]} grades */
export function getNumberOfGrades(grades) {
    // return the number of grades
    return grades.length;

}

/** @param {number[]} grades */
export function getAverageValue(grades) {
    // return the average value of all grades (sum of all grades / total number of grades)
    let sum=0;
    grades.forEach(grade=>sum+=grade);
    return Math.round(sum/grades.length);
}

/** @param {number[]} grades */
export function getLowestValue(grades) {
    // return the lowest grade from the array
    return Math.min(...grades);

    /*
     -console.log((...grades));
        ->Uncaught SyntaxError unexpected token '...'
     -console.log(...grades);
        -> 12 19 10 4 15 9  //괄호없는 숫자의 모음이 나온다.
     -console.log(Math.min(...grades));
        ->4 //공식: Math.min(숫자나열모음);
    */
}

/** @param {number[]} grades */
export function getHighestValue(grades) {
    // return the highest grade from the array
    return Math.max(...grades);
}

/** @param {number[]} grades */
export function getPassingGrades(grades) {
    // return a CSV of all passing grades (10 and above)

    return grades.filter(grade => grade >= 10).join(", ");

    /*
      - *** CSV 란?***
        -> "12, 19, 10, 15" 의 comma로 이어진 문자열 형태
      -console.log(grades.filter(grade=>grade>=10));
         -> [12, 19, 10, 15]  //*** Array.filter() *** 은 조건에 알맞는 요소들이 *배열*형태로 반환된다.
      -[2,3,4,5,6].join();
         -> "2,3,4,5,6"  //*** Array.join() *** 은 배열 [] 이 문자열 "" 형태로 반환된다.
      -[2,3,4,5,6].join(", ");
         -> "2, 3, 4, 5, 6" //*** CSV 형태***
      -const elements = ["Eat", "Sleep", "Code", "Repeat"];
         -> elements.join(",");
         -> "Eat,Sleep,Code,Repeat"
     */



}

/** @param {number[]} grades */
export function getFailingGrades(grades) {
    // return a CSV of all failing grades (9 and below)

    return grades.filter(grade => grade < 10).join(", ");
}

/** @param {number[]} grades */
export function getRaisedGrades(grades) {
    // return a CSV of all the grades raised by 2 (grades should not exceed 20)

    return grades.map(grade => {
        const newValue = grade + 2;
        if (newValue >= 20){
            return 20;
        }
        return newValue;
    }).join(", ");

    /*
     - *** CSV 란?***
       -> "12, 19, 10, 15" 의 comma로 이어진 문자열 형태
     -console.log(grades.map(grade=>grade+2));
        -> [14, 21, 12, 17]  //*** Array.map() *** 은 조건식의 변화를 거친 요소들이 *배열*형태로 반환된다.
     -grades.map(grade=>grade+2).join(", ");
        -> "14, 21, 12, 6, 17, 11"  //*** Array.join() *** 은 배열 [] 이 문자열 "" 형태로 반환된다.
     -[2,3,4,5,6].join(", ");
        -> "2, 3, 4, 5, 6" //*** CSV 형태***
     -const elements = ["Eat", "Sleep", "Code", "Repeat"];
        -> elements.join(",");
        -> "Eat,Sleep,Code,Repeat"
    */


}
