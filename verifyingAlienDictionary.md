# Verifying an Alien Dictionary

In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographicaly in this alien language.

```
Example 1:

Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
Output: true
Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
Example 2:

Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
Output: false
Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
Example 3:

Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
Output: false
Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).
```


Note:

1 <= words.length <= 100
1 <= words[i].length <= 20
order.length == 26
All characters in words[i] and order are english lowercase letters.

```
var isAlienSorted = function(words, order) {
    let wordsCopy = words.slice();
    wordsCopy.sort(
        function(a,b){
        let shorterLen = Math.min(a.length, b.length);
        for(let i = 0; i < shorterLen; i++){
            if(a[i] != b[i]){
                if(order.indexOf(a[i]) < order.indexOf(b[i])){
                    return -1;
                }else{
                    return 1;
                }
            }
        }
        if(a.length >= b.length){
            return 1;
        } else {
            return -1;
        }

    });
    for(let i = 0; i < wordsCopy.length; i++){
        if(words[i] != wordsCopy[i]){
            return false;
        }
    }
    return true;
};
```
