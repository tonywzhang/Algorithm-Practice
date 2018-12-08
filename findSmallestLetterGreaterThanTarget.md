# Find Smallest Letter Greater Than Target

Given a list of sorted characters letters containing only lowercase letters, and given a target letter target, find the smallest element in the list that is larger than the given target.

Letters also wrap around. For example, if the target is target = 'z' and letters = ['a', 'b'], the answer is 'a'.

```
Examples:
Input:
letters = ["c", "f", "j"]
target = "a"
Output: "c"

Input:
letters = ["c", "f", "j"]
target = "c"
Output: "f"

Input:
letters = ["c", "f", "j"]
target = "d"
Output: "f"

Input:
letters = ["c", "f", "j"]
target = "g"
Output: "j"

Input:
letters = ["c", "f", "j"]
target = "j"
Output: "c"

Input:
letters = ["c", "f", "j"]
target = "k"
Output: "c"
```

Note:
letters has a length in range [2, 10000].
letters consists of lowercase letters, and contains at least 2 unique letters.
target is a lowercase letter.

```
var nextGreatestLetter = function(letters, target) {
    if (letters.length < 2) return letters[0];
    if (target >= letters[letters.length -1]) return letters[0];
    if (letters.length == 2) {
        if (target < letters[0]){
            return letters[0];
        } else if (target < letters[1]){
            return letters[1];
        } else {
            return letters[0];
        }    
    }

    let mid_idx = Math.floor(letters.length/2);

    if (letters[mid_idx] <= target){
        let nextSlice = letters.slice(mid_idx + 1, letters.length);
        return nextGreatestLetter(nextSlice, target);
    } else {
        let nextSlice = letters.slice(0, mid_idx + 1);
        return nextGreatestLetter(nextSlice, target);
    }
};
```

```
Revised Version


var nextGreatestLetter = function(letters, target) {
    if (letters.length < 2) return letters[0];
    if (target >= letters[letters.length -1]) return letters[0];

    let mid_idx = Math.floor(letters.length/2);

    if (letters[mid_idx] <= target){
        let nextSlice = letters.slice(mid_idx + 1, letters.length);
        return nextGreatestLetter(nextSlice, target);
    } else {
        if(letters[mid_idx - 1] <= target) return letters[mid_idx];
        let nextSlice = letters.slice(0, mid_idx);
        return nextGreatestLetter(nextSlice, target);
    }
};
```
