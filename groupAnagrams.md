# Group Anagrams

Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.



```
var groupAnagrams = function(strs) {
    let hashMap = new Map();
    for(let i = 0; i < strs.length; i++){
        let currentString = sort(strs[i]);
        if(hashMap.has(currentString) == false){
            hashMap.set(currentString, [strs[i]]);   
        } else {
            let q = hashMap.get(currentString);
            hashMap.set(currentString, q.concat(strs[i]));
        }
    }
    return Array.from(hashMap.values());
};

var sort = function(word){
    return word.split("").sort().join("");
}
```
