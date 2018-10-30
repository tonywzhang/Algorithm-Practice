# Rotate String

We are given two strings, A and B.

A shift on A consists of taking string A and moving the leftmost character to the rightmost position. For example, if A = 'abcde', then it will be 'bcdea' after one shift on A. Return True if and only if A can become B after some number of shifts on A.

Example 1:
Input: A = 'abcde', B = 'cdeab'
Output: true

Example 2:
Input: A = 'abcde', B = 'abced'
Output: false

```
var rotateString = function(A, B) {
    if (A.length != B.length) return false; // takes into account the possibility of diff lengths, thus being impossible
    if (A === B) return true;
    let strLen = A.length;   
    for (let i=0; i < strLen; i++) {
        A = A.slice(1,strLen).concat(A[0]);
        if (A === B) return true;
        }
    return false;
};
```
