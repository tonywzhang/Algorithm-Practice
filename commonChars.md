# Find Common Characters

Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

You may return the answer in any order.

```
Example 1:

Input: ["bella","label","roller"]
Output: ["e","l","l"]
Example 2:

Input: ["cool","lock","cook"]
Output: ["c","o"]
 ```

Note:

1 <= A.length <= 100
1 <= A[i].length <= 100
A[i][j] is a lowercase letter

```
var commonChars = function(A) {
    let result = [];

    let arr = [];
    for(let i = 0;i <26;i++){
        arr.push(0);
    }

    for(let i = 0; i < A[0].length; i++){
        arr[A[0].charCodeAt(i) - 97] += 1;
    }

    // console.log(arr);

    for(let i = 1; i < A.length; i++){
        let newArr = [];
        for(let j = 0; j < 26;j++){
            newArr.push(0);
        }

        for(let k = 0; k < A[i].length; k++){
            newArr[A[i].charCodeAt(k)-97] += 1;
        }

        for(let m = 0; m < 26; m++){
            if(arr[m] < newArr[m]){
                newArr[m] = arr[m];
            }
        }
        arr = newArr;
        // console.log(arr);
    }

    for(let i = 0;i < 26; i++){
        let times = 0;
        if(arr[i] > 0){
            times = arr[i];
        }
        for(let j = 0; j < times; j++){
            result.push(String.fromCharCode(i+97));
        }
    }
    return result;
};
```
