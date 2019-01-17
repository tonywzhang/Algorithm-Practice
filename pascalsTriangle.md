# Pascals Triangle

Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.


In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:

Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]

```
var generate = function(numRows) {
    if (numRows) {
        var result = [[1]];

        for(var i = 1;i < numRows;i++) {
            result[i] = [];
            for(var j = 0; j < i + 1;j++) {
                result[i][j] = (result[i - 1][j] || 0) + (result[i - 1][j - 1] || 0);
            }
        }

        return result;
    }
    return [];
};
```
