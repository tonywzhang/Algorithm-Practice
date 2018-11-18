# DI String Match

Given a string S that only contains "I" (increase) or "D" (decrease), let N = S.length.

Return any permutation A of [0, 1, ..., N] such that for all i = 0, ..., N-1:

If S[i] == "I", then A[i] < A[i+1]
If S[i] == "D", then A[i] > A[i+1]

```
var diStringMatch = function(S) {
    let result = [];
    let N = S.length;
    let L = 0;

    for(let i = 0; i < S.length; i++){
        if(S[i] == "D"){
            result.push(N);
            N-=1;
        } else{
            result.push(L);
            L+=1;
        }
    }

    result.push(N);

    return result;
};
```
