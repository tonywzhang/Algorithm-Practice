# Word Subsets

We are given two arrays A and B of words.  Each word is a string of lowercase letters.

Now, say that word b is a subset of word a if every letter in b occurs in a, including multiplicity.  For example, "wrr" is a subset of "warrior", but is not a subset of "world".

Now say a word a from A is universal if for every b in B, b is a subset of a.

Return a list of all universal words in A.  You can return the words in any order.

```
Example 1:

Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["e","o"]
Output: ["facebook","google","leetcode"]
Example 2:

Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["l","e"]
Output: ["apple","google","leetcode"]
Example 3:

Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["e","oo"]
Output: ["facebook","google"]
Example 4:
 
Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["lo","eo"]
Output: ["google","leetcode"]
Example 5:

Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["ec","oc","ceo"]
Output: ["facebook","leetcode"]
```

Note:

1 <= A.length, B.length <= 10000
1 <= A[i].length, B[i].length <= 10
A[i] and B[i] consist only of lowercase letters.
All words in A[i] are unique: there isn't i != j with A[i] == A[j].

```
var wordSubsets = function(A, B) {
    let result = [];
    let letterHash = substrComb(B);

    for(let i = 0; i < A.length; i++){
        let isSubset = true;
        let wordMap = new Map();

        for(let j = 0; j < A[i].length; j++){
            if(!wordMap.has(A[i][j])){
                wordMap.set(A[i][j], 1);
            } else {
                wordMap.set(A[i][j], wordMap.get(A[i][j]) + 1);
            }
        }    

        if(wordComp(wordMap, letterHash)){
            result.push(A[i]);
        }
    }

    return result;
};

var wordComp = function(wordMap, letterHash){

    let letters = Array.from(letterHash.keys());

    for(let i = 0; i < letters.length; i++){
        if(wordMap.get(letters[i]) < letterHash.get(letters[i]) || !wordMap.has(letters[i])){
            return false;
        }
    }
    return true;
};

var substrComb = function(B){
    let letterHash = new Map();
    for(let i = 0; i < B.length; i++){
        let currentHash = new Map();
        let S = B[i];
        for(let j = 0; j < S.length; j++){
            if(!currentHash.has(S[j])){
                currentHash.set(S[j], 0);
            }
            currentHash.set(S[j], currentHash.get(S[j]) + 1);
        }
        let keys = Array.from(currentHash.keys());
        for(let k = 0; k < keys.length; k++){
            if(!letterHash.has(keys[k])){
                letterHash.set(keys[k], currentHash.get(keys[k]));
            } else if (letterHash.get(keys[k]) < currentHash.get(keys[k])) {
                letterHash.set(keys[k], currentHash.get(keys[k]));
            }
        }
    }

    return letterHash;
};
```
