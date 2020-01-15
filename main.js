/*
Challenge #1:
Highest Scoring Word

Given a string of 2 words, find the highest scoring word. Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3 etc. All letters will be lowercase there will be no punctuation. Display (id='challenge-1') the word that is the highest scoring. If two words score the same, display the word that appears earliest in the original string.
*/

function writeToDom(input, id) {
    document.getElementById(id).innerHTML += input;
}

function challenge1(input) {
    const tacos = input.toLowerCase().split(' ');
    const best = findBestTaco(tacos);
    writeToDom(best.taco, "challenge-1");
}

function findBestTaco(tacos) {
    const bestTaco = { score: 0 };
    // console.log(tacos)
    tacos.forEach(function (taco) {
        let score = 0;
        taco.split().forEach(function (char) {
            const codeLetter = (char.charCodeAt(0) - 'a'.charCodeAt(0) + 1);
            if (codeLetter >= 1 || codeLetter <= 26) {
                score += codeLetter
            }
            else {
                score += 0
            }
        });
        if (score > bestTaco.score) {
            bestTaco.score = score;
            bestTaco.taco = taco;
        }
    });
    return bestTaco;
}
challenge1("jumbo shrimp");


/*

Challenge #2:
Sorting on planet Twisted-3-7

There is a planet... in a galaxy far far away. It is exactly like our planet, but it has one difference: The values of the digits 3 and 7 are twisted. Our 3 means 7 and 7 means 3.

Write some code that takes an array of numbers and outputs an array that changes any 3s to 7s and any 7s to 3s.

*/

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const str = " ";
for (var i = 0; i < array; i++) {
    str = array[i].toString();
    if (str.includes(3))
        array[i] = 1 * (str.replace(/[3]/g, [7]));
    else if (str.includes(7))
        array[i] = 1 * (str.replace(/[7]/g, 3))
    else
        array[i] = 1 * str
}


/*

Challenge #3:
Find the unique number

Given an array of more than 3 numbers where all numbers are equal except for one. Display the one unique number!
*/

function challenge3(input) {
    const unique = findUnique(input);
    writeToDom(unique, "challenge-3")
}

function findUnique(array) {
    array.sort(function (a, b) {
        return a - b;
    });
    if (array[0] === array[1]) {
        return array.pop();
    } else {
        return array[0];
    }
}
var input3 = [10, 0, 0, 0, 0, 0, 0, 0.55, 0, 0];
challenge3(input3);

/*

Challenge #4:
Lost Without a Map
Given an array of any number of integers display the array with each value doubled.

*/


function challenge4(input) {
    let doubledDogs = double(input);
    writeToDom(doubledDogs, "challenge-4");
}

function double(integers) {
    let answer = integers.map(doubledTaco);
    return answer;
}

function doubledTaco(article) {
    return article * 2;
}
challenge4([1, 2, 3, 19, 5, 6, 909, 8, 9, 100000087654334])

/*

Challenge #5:
Array.diff

Given two arrays remove all values from array1 that are present in array2. Display the final results of array1

*/

function challenge5(array1, array2) {
    let result = arrayFilter(array1, array2);
    writeToDom(result, "challenge-5");
}

function arrayFilter(one, two) {
    return one.filter(function (item) {
        return !two.includes(item);
    });
}
challenge5([1, 2, 3, 4, 5, 6, 8, 10, 12], [1, 2, 3, 5, 7, 9])

/*
Challenge #6:
Number Zoo Patrol

You're working in a number zoo, and it seems that one of the numbers has gone missing! Given an array of numbers. The numbers will be unsorted values between 1 and one more than the length of the array. No values will be repeated within the array. displaythe number that is missing.

*/
var test1 = [1, 3]; // 2
var test2 = [2, 3, 4]; // 1
var test3 = [13, 11, 10, 3, 2, 1, 4, 5, 6, 9, 7, 8]; // 12
let missingInt;

test1 = test1.sort(function (a, b) {
    return a - b;
});

for (var i = 0; i < test1.length - 1; i++) {
    if (test1[i + 1] === test1[i] + 1) {

    } else {
        missingInt = test1[i] + 1;
    }
}
document.getElementById("challenge-6").innerHTML = missingInt;

/*

Challenge #7:
English beggars

Given an array of values and an amount of beggars, you are supposed to return an array with the sum of what each beggar brings home, assuming they all take regular TURNS, from the first to the last. Not all beggars have to take the same offers - ie the length of the array is not a multiple of the number of beggers.

*/

var numBeggers = 2;
var offerings = [1, 2, 3, 4, 5];

var arrayOne = [];
var arrayTwo = [];
var value1 = 0;
var value2 = 0;
var answer = [];

for (var i = 0; i < offerings.length; i += numBeggers) {
    arrayOne.push(offerings[i]);
}

for (var m = 0; m < arrayOne.length; m++) {
    value1 += arrayOne[m];
    var removeElement = offerings.indexOf(arrayOne[m]);
    offerings.splice(removeElement, 1)
}

for (var a = 0; a < offerings.length; a += (numBeggers - 1)) {
    arrayTwo.push(offerings[a]);
}

for (var r = 0; r < arrayTwo.length; r++) {
    value2 += arrayTwo[r];
    var removeElement = offerings.indexOf(arrayTwo[r]);
    offerings.splice(removeElement, 1);
}

answer.push(value1, value2);
var tacoString = '<h3>' + answer + '</h3>';
document.getElementById("challenge-7").innerHTML = tacoString;