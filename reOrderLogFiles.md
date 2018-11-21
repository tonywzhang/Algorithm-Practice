# ReOrder Log Files

You have an array of logs.  Each log is a space delimited string of words.

For each log, the first word in each log is an alphanumeric identifier.  Then, either:

Each word after the identifier will consist only of lowercase letters, or;
Each word after the identifier will consist only of digits.
We will call these two varieties of logs letter-logs and digit-logs.  It is guaranteed that each log has at least one word after its identifier.

Reorder the logs so that all of the letter-logs come before any digit-log.  The letter-logs are ordered lexicographically ignoring identifier, with the identifier used in case of ties.  The digit-logs should be put in their original order.

Return the final order of the logs.

```
Input: ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]
Output: ["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]
```

Note:

0 <= logs.length <= 100
3 <= logs[i].length <= 100
logs[i] is guaranteed to have an identifier, and a word after the identifier.

```
var reorderLogFiles = function(logs) {
    let charArray = [];
    let numArray = [];

    for(let i = 0; i < logs.length; i++){
        if(parseInt(logs[i].split(" ")[1]) > -1){
            numArray.push(logs[i]);
        } else {
            let currStr = logs[i].split(" ");
            let newStr = currStr.slice(1, currStr.length).concat(currStr.slice(0,1));
            charArray.push(newStr.join(" "));
        }
    }

    charArray.sort();

    for(let i = 0; i < charArray.length; i++){
        let currStr = charArray[i].split(" ");
        let newStr = currStr.slice(currStr.length-1, currStr.length).concat(currStr.slice(0, currStr.length -1));
        charArray[i] = newStr.join(" ");
    }

    return charArray.concat(numArray);
};
```
