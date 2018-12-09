# Array of Doubled Pairs

Given an array of integers A with even length, return true if and only if it is possible to reorder it such that A[2 * i + 1] = 2 * A[2 * i] for every 0 <= i < len(A) / 2.


```
Example 1:

Input: [3,1,3,6]
Output: false
Example 2:

Input: [2,1,2,6]
Output: false
Example 3:

Input: [4,-2,2,-4]
Output: true
Explanation: We can take two groups, [-2,-4] and [2,4] to form [-2,-4,2,4] or [2,4,-2,-4].
Example 4:

Input: [1,2,4,16,8,4]
Output: false
```


Note:

0 <= A.length <= 30000
A.length is even
-100000 <= A[i] <= 100000


```
var canReorderDoubled = function(A) {
    let numMap = new Map();

    for(let i = 0;i < A.length; i++){
        if (!numMap.has(A[i])){
            numMap.set(A[i], 1);
        } else{
            numMap.set(A[i], numMap.get(A[i]) + 1);
        }
    }

    let keys = Array.from(numMap.keys());

    let posKeys = [];
    let negKeys = [];

    for(let i = 0; i < keys.length; i++){
        if (keys[i] < 0){
            negKeys.push(keys[i]);
        } else {
            posKeys.push(keys[i]);
        }
    }
    negKeys.sort(function(a, b){return b-a});
    posKeys.sort(function(a, b){return a-b});

    for(let i = 0; i < negKeys.length;i++){
        if (numMap.get(negKeys[i]*2) != null && numMap.get(negKeys[i]) <= numMap.get(negKeys[i]*2)){
            numMap.set(negKeys[i]*2, numMap.get(negKeys[i]*2) - numMap.get(negKeys[i]));
            numMap.set(negKeys[i], 0);
        }
    }

    for(let i = 0; i < posKeys.length;i++){
        if (numMap.get(posKeys[i]*2) != null && numMap.get(posKeys[i]) <= numMap.get(posKeys[i]*2)){
            numMap.set(posKeys[i] * 2, numMap.get(posKeys[i]*2) - numMap.get(posKeys[i]));
            numMap.set(posKeys[i], 0);
        }
    }

    console.log(numMap);

    for(let i = 0; i < keys.length; i++){
        if(numMap.get(keys[i]) != 0){
            return false;
        }
    }
    return true;
};
```
