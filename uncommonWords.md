# Uncommon Words

We are given two sentences A and B.  (A sentence is a string of space separated words.  Each word consists only of lowercase letters.)

A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

Return a list of all uncommon words.

You may return the list in any order.

```
Example 1:

Input: A = "this apple is sweet", B = "this apple is sour"
Output: ["sweet","sour"]
Example 2:

Input: A = "apple apple", B = "banana"
Output: ["banana"]
 ```

Note:

0 <= A.length <= 200
0 <= B.length <= 200
A and B both contain only spaces and lowercase letters.

```
var uncommonFromSentences = function(A, B) {
    let uncommon = [];
    let wordMapA = new Map();
    let wordMapB = new Map();

    let wordsA = A.split(" ");
    let wordsB = B.split(" ");

    for(let i = 0; i < wordsA.length; i++){
        if(!wordMapA.has(wordsA[i])){
            wordMapA.set(wordsA[i], 1);
        } else {
            wordMapA.set(wordsA[i], wordMapA.get(wordsA[i]) + 1);
        }
    }

    for(let i = 0; i < wordsB.length; i++){
        if(!wordMapB.has(wordsB[i])){
            wordMapB.set(wordsB[i], 1);
        } else {
            wordMapB.set(wordsB[i], wordMapB.get(wordsB[i]) + 1);
        }
    }

    for(let i = 0; i < wordsA.length; i++){
        if(wordMapA.get(wordsA[i]) == 1 && !wordMapB.has(wordsA[i])){
            uncommon.push(wordsA[i]);
        }
    }
    for(let i = 0; i < wordsB.length; i++){
        if(wordMapB.get(wordsB[i]) == 1 && !wordMapA.has(wordsB[i])){
            uncommon.push(wordsB[i]);
        }
    }
    return uncommon;
};
```
