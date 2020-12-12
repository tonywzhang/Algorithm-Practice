# Valid Palindrome

Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.


```
Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true

Example 2:

Input: "race a car"
Output: false
```

```
var isPalindrome = function(s) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";

    s = s.toLowerCase();  
    let newStr = "";

    for(let i = 0; i < s.length; i++){
        if(alphabet.indexOf(s[i]) != -1 || numbers.indexOf(s[i]) != -1) newStr += s[i];
    }

    let strCopy = newStr.slice();

    return newStr === strCopy.split("").reverse().join("");
};
```
