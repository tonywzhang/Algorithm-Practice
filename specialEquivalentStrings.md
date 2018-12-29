# Groups of Special Equivalent Strings

You are given an array A of strings.

Two strings S and T are special-equivalent if after any number of moves, S == T.

A move consists of choosing two indices i and j with i % 2 == j % 2, and swapping S[i] with S[j].

Now, a group of special-equivalent strings from A is a non-empty subset S of A such that any string not in S is not special-equivalent with any string in S.

Return the number of groups of special-equivalent strings from A.

```
Example 1:

Input: ["a","b","c","a","c","c"]
Output: 3
Explanation: 3 groups ["a","a"], ["b"], ["c","c","c"]
Example 2:

Input: ["aa","bb","ab","ba"]
Output: 4
Explanation: 4 groups ["aa"], ["bb"], ["ab"], ["ba"]
Example 3:

Input: ["abc","acb","bac","bca","cab","cba"]
Output: 3
Explanation: 3 groups ["abc","cba"], ["acb","bca"], ["bac","cab"]
Example 4:

Input: ["abcd","cdab","adcb","cbad"]
Output: 1
Explanation: 1 group ["abcd","cdab","adcb","cbad"]
 ```

Note:

1 <= A.length <= 1000
1 <= A[i].length <= 20
All A[i] have the same length.
All A[i] consist of only lowercase letters.

```
var numSpecialEquivGroups = function(A) {
    let maps = [];

    for(let i = 0; i < A.length; i++){
        let oddMap = new Map();
        let evenMap = new Map();

        for(let j = 0; j < A[i].length; j++){
            if (j % 2 == 0){
                if(!evenMap.has(A[i][j])){
                    evenMap.set(A[i][j], 1);
                } else {
                    evenMap.set(A[i][j], evenMap.get(A[i][j]) + 1);
                }
            } else {
                if(!oddMap.has(A[i][j])){
                    oddMap.set(A[i][j], 1);
                } else {
                    oddMap.set(A[i][j], oddMap.get(A[i][j]) + 1);
                }
            }
        }

        let currStr = mapToString(oddMap, evenMap);

        if (maps.length == 0){
            maps.push(currStr);
        } else {
            for(let k = 0; k < maps.length; k++){
                if(maps[k] == currStr) break;
                if(k == maps.length - 1) maps.push(currStr);
            }
        }
    }
    return maps.length;
};

var mapToString = function(oddMap, evenMap){

    let str = "";

    let oddKeys = Array.from(oddMap.keys()).sort();
    for(let i = 0; i < oddKeys.length; i++){
        str += oddKeys[i];
        str += oddMap.get(oddKeys[i]);
    }

    let evenKeys = Array.from(evenMap.keys()).sort();
    for(let i = 0; i < evenKeys.length; i++){
        str += evenKeys[i];
        str += evenMap.get(evenKeys[i]);
    }

    return str;
};
```
