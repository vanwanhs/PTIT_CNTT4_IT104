var sentence = "hello world apple banana orange pumpkin cucumber";
var words = sentence.split(" ");
var longestWord = "";
for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
    var word = words_1[_i];
    var isUnique = true;
    for (var i = 0; i < word.length; i++) {
        for (var j = i + 1; j < word.length; j++) {
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
