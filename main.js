/*
Challenge #1: Highest Scoring Word
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