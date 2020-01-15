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