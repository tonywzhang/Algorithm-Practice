# Sort Characters By Frequency

Given a string, sort it in decreasing order based on the frequency of characters.

```
Example 1:

Input:
"tree"

Output:
"eert"

Explanation:
'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
Example 2:

Input:
"cccaaa"

Output:
"cccaaa"

Explanation:
Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
Note that "cacaca" is incorrect, as the same characters must be together.
Example 3:

Input:
"Aabb"

Output:
"bbAa"

Explanation:
"bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.
```

```
var frequencySort = function(s) {
    let letterMap = new Map();

    for(let i = 0; i < s.length; i++){
        if(!letterMap.has(s[i])){
            letterMap.set(s[i], 1);
        } else {
            letterMap.set(s[i], letterMap.get(s[i]) + 1);
        }
    }

    let newMap = new Map([...letterMap.entries()].sort(
        function(a,b){
        return b[1] - a[1];
        }
    ));

    let keys = Array.from(newMap.keys());
    let result = "";
    for(let i = 0; i < keys.length; i++){
        for(let j = 0; j < newMap.get(keys[i]); j++){
            result += keys[i];
        }
    }
    return result;
};
```
