# First Unique Character in a String

Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

```
Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
```

Note: You may assume the string contain only lowercase letters.

```
var firstUniqChar = function(s) {
    let letterMap = new Map();
    for(let i = 0; i < s.length; i++){
        if(!letterMap.has(s[i])){
            letterMap.set(s[i], 1);
        } else {
            letterMap.set(s[i], letterMap.get(s[i]) + 1);
        }
    }

    for(let i = 0; i < s.length; i++){
        if(letterMap.get(s[i]) == 1) return i;
    }
    return -1;
};
```
