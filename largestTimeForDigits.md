# Largest Time For Given Digits

Given an array of 4 digits, return the largest 24 hour time that can be made.

The smallest 24 hour time is 00:00, and the largest is 23:59.  Starting from 00:00, a time is larger if more time has elapsed since midnight.

Return the answer as a string of length 5.  If no valid time can be made, return an empty string.

```
Example 1:

Input: [1,2,3,4]
Output: "23:41"
Example 2:

Input: [5,5,5,5]
Output: ""
```

Note:

A.length == 4
0 <= A[i] <= 9

```
var largestTimeFromDigits = function(A) {

    let perms = arrPerms(4);

    let result = [];

    for(let i = 0; i < perms.length; i++){
        let resultStr = "";
        for(let j = 0; j < A.length; j++){
            if(j == 2) resultStr += ":";
            resultStr += A[perms[i][j]];
        }
        result.push(resultStr);
    }

    result.sort();

    let latest = "";
    let bestHours = 0;

    for(let i = 0; i < result.length; i++){
        let hours = parseInt(result[i].slice(0,2));
        let mins = parseInt(result[i].slice(3,5));

        if (hours < 24 && mins < 60){
            latest = result[i];
            bestHours = hours;
        }
    }
    return latest;
};

var arrPerms = function(num){
    if (num == 0) return [];
    if (num == 1) return [[0]];

    let result = [];

    let prevPerms = arrPerms(num - 1);

    for(let i = 0; i < prevPerms.length; i++){
        for(let j = 0; j < num; j++){
            result.push(prevPerms[i].slice(0,j).concat(num-1).concat(prevPerms[i].slice(j)));
        }
    }
    return result;
};
```
