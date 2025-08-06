let sentence: string = "hello world apple banana orange pumpkin cucumber";
let words: string[] = sentence.split(" ");

let longestWord: string = "";

for (let word of words) {
    let isUnique = true;

    for (let i = 0; i < word.length; i++) {
        for (let j = i + 1; j < word.length; j++) {
            if (word[i] === word[j]) {
                isUnique = false;
            }
        }
    }

    if (isUnique && word.length > longestWord.length) {
        longestWord = word;
    }
}

console.log(longestWord);