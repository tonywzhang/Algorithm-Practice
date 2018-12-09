# Delete Columns to Make Sorted II

We are given an array A of N lowercase letter strings, all of the same length.

Now, we may choose any set of deletion indices, and for each string, we delete all the characters in those indices.

For example, if we have an array A = ["abcdef","uvwxyz"] and deletion indices {0, 2, 3}, then the final array after deletions is ["bef","vyz"].

Suppose we chose a set of deletion indices D such that after deletions, the final array has its elements in lexicographic order (A[0] <= A[1] <= A[2] ... <= A[A.length - 1]).

Return the minimum possible value of D.length.


```
Example 1:

Input: ["ca","bb","ac"]
Output: 1
Explanation:
After deleting the first column, A = ["a", "b", "c"].
Now A is in lexicographic order (ie. A[0] <= A[1] <= A[2]).
We require at least 1 deletion since initially A was not in lexicographic order, so the answer is 1.
Example 2:

Input: ["xc","yb","za"]
Output: 0
Explanation:
A is already in lexicographic order, so we don't need to delete anything.
Note that the rows of A are not necessarily in lexicographic order:
ie. it is NOT necessarily true that (A[0][0] <= A[0][1] <= ...)
Example 3:

Input: ["zyx","wvu","tsr"]
Output: 3
Explanation:
We have to delete every column.
```


Note:

1 <= A.length <= 100
1 <= A[i].length <= 100

```
var minDeletionSize = function(A) {
    let count = 0;
    let safeIdx = 0;

    while (safeIdx < A[0].length){
        let temp= lexiCheck(A, safeIdx, count);
        safeIdx = temp[0];
        count = temp[1];
        A = temp[2];
    }

    return count;
};

var lexiCheck = function(arr, idx, count){

    for(let i = 0; i < arr.length - 1; i++){
        let iSlice = arr[i].slice(0, idx+1);
        let nextSlice = arr[i+1].slice(0, idx+1);

        if (iSlice > nextSlice){
            for(let j = 0; j < arr.length; j++){
                arr[j] = arr[j].slice(0,idx).concat(arr[j].slice(idx + 1, arr[j].length));
            }
            return [idx, count + 1, arr];
        }
    }
    return [idx + 1, count, arr];
};
```
