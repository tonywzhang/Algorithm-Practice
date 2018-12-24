# Find and Replace Pattern

You have a list of words and a pattern, and you want to know which words in words matches the pattern.

A word matches the pattern if there exists a permutation of letters p so that after replacing every letter x in the pattern with p(x), we get the desired word.

(Recall that a permutation of letters is a bijection from letters to letters: every letter maps to another letter, and no two letters map to the same letter.)

Return a list of the words in words that match the given pattern.

You may return the answer in any order.


```
Example 1:

Input: words = ["abc","deq","mee","aqq","dkd","ccc"], pattern = "abb"
Output: ["mee","aqq"]
Explanation: "mee" matches the pattern because there is a permutation {a -> m, b -> e, ...}.
"ccc" does not match the pattern because {a -> c, b -> c, ...} is not a permutation,
since a and b map to the same letter.
```


Note:

1 <= words.length <= 50
1 <= pattern.length = words[i].length <= 20

```
var findAndReplacePattern = function(words, pattern) {
    let matches = [];
    let pattMap = new Map();

    for(let i = 0; i < pattern.length; i++){
        if(!pattMap.has(pattern[i])){
            pattMap.set(pattern[i], [i]);
        } else {
            pattMap.get(pattern[i]).push(i);
        }
    }

    let pattVals = Array.from(pattMap.values());

    for(let i = 0; i < words.length; i++){
        let wordMap = new Map();
        let word = words[i];
        for(let j = 0; j < word.length; j++){
            if(!wordMap.has(word[j])){
                wordMap.set(word[j], [j]);
            } else {
                wordMap.get(word[j]).push(j);
            }
        }
        let vals = Array.from(wordMap.values());

        if (match(pattVals, vals)){
            matches.push(words[i]);
        }
    }
    return matches;
};

var match = function(arr1,arr2){
  if (arr1.length != arr2.length) return false;

    for(let k = 0; k < arr1.length; k++){
        if(arr1[k].length != arr2[k].length) return false;
        for(let m = 0; m < arr1[k].length; m++){
            if (arr1[k][m] != arr2[k][m]) return false;   
        }
    }
    return true;
};
```
