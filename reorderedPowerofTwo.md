# ReOrdered Power of Two

Starting with a positive integer N, we reorder the digits in any order (including the original order) such that the leading digit is not zero.

Return true if and only if we can do this in a way such that the resulting number is a power of 2.

```
Example 1:

Input: 1
Output: true
Example 2:

Input: 10
Output: false
Example 3:

Input: 16
Output: true
Example 4:

Input: 24
Output: false
Example 5:

Input: 46
Output: true
```


Note:

1 <= N <= 10^9

```
var reorderedPowerOf2 = function(N) {
    let numSet = new Set();
    let num = 1;
    let digits = N.toString().split("");

    while(num <= 1000000000){
        numSet.add(num);
        num *= 2;
    }

    let numArr = generateNums(digits);
    // console.log(numArr);
    // console.log(numArr.length);
    for(let i = 0; i < numArr.length; i++){
        // let currNum = numArr[i];
        // if((currNum[currNum.length-1] * 1) % 2 == 1 && currNum != "1") continue;
        if(numArr[i][0] != "0" && numSet.has(numArr[i] * 1)) return true;
    }
    return false;
};

var generateNums = function(arr){
    if(arr.length < 2) return arr;
    let generatedPrev = generateNums(arr.slice(1));             
    let result = [];
    for(let i = 0; i < generatedPrev.length ; i++){
        for(let j = 0; j <= generatedPrev[0].length; j++){
            let currNum = generatedPrev[i];
            let newRes = currNum.slice(0,j)+arr[0]+currNum.slice(j);

            result.push(currNum.slice(0,j)+arr[0]+currNum.slice(j));
        }
    }
    return result;
};
```
