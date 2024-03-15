const array = ['one', 'two', 'three'];
const itemsHtml = array.map(function (item) {
    return `<li>${item}<li>`;
});
//document.getElementById("myList").innerHTML = itemsHtml.join();

const grades = ['A', 'B', 'A'];
function convertGradeToPoints(grade) {
    let points = 0;
    if(grade === 'A') {
        points = 4;
    } else if (grade === 'B') {
        points = 3;
    }
    return points;
}
const gpaPoints = grades.map(convertGradeToPoints);
console.log(gpaPoints);

const points = gpaPoints.reduce(function (total, item) {
    return total + item;
});
const gpa = points / gpaPoints.length;
console.log(gpa);

let fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
let longFruits = fruits.filter(function (fruit) {
    return fruit.length > 6;
});
console.log(longFruits);

const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = myArray.indexOf(luckyNumber);
console.log(luckyIndex);