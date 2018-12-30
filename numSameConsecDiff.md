# Numbers With Same Consecutive Differences

Return all non-negative integers of length N such that the absolute difference between every two consecutive digits is K.

Note that every number in the answer must not have leading zeros except for the number 0 itself. For example, 01 has one leading zero and is invalid, but 0 is valid.

You may return the answer in any order.


```
Example 1:

Input: N = 3, K = 7
Output: [181,292,707,818,929]
Explanation: Note that 070 is not a valid number, because it has leading zeroes.
Example 2:

Input: N = 2, K = 1
Output: [10,12,21,23,32,34,43,45,54,56,65,67,76,78,87,89,98]
```


Note:

1 <= N <= 9
0 <= K <= 9

```
var numsSameConsecDiff = function(N, K) {
    if(N == 1) {
        return [0,1,2,3,4,5,6,7,8,9];    
    }


    let prevRes = numsSameConsecDiff(N-1, K);
    let result = [];

    for(let i = 0; i < prevRes.length; i++){
        let lastDigit = prevRes[i]%10;
        if(lastDigit + K < 10){
            result.push(prevRes[i]*10 + lastDigit + K);
        }

        if(K == 0){
            continue;
        }

        if(lastDigit - K < 10 && lastDigit - K >= 0){
            result.push(prevRes[i]*10 + lastDigit - K);
        }
    }

    if (N > 1){
        return result.filter(el => el >= 10**(N-1));
    }

    return result;
};

```
