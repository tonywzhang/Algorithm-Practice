# Reversed Only Letters

Given a string S, return the "reversed" string where all characters that are not a letter stay in the same place, and all letters reverse their positions.

```
Example 1:

Input: "ab-cd"
Output: "dc-ba"
Example 2:

Input: "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"
Example 3:

Input: "Test1ng-Leet=code-Q!"
Output: "Qedo1ct-eeLg=ntse-T!"
```

Note:

S.length <= 100
33 <= S[i].ASCIIcode <= 122
S doesn't contain \ or "

```
var reverseOnlyLetters = function(S) {
    let letterArr = [];
    let reversed = "";

    for(let i = 0; i < S.length; i++){
        if((S.charCodeAt(i) >= 65 && S.charCodeAt(i) <= 90) || (S.charCodeAt(i) >= 97 && S.charCodeAt(i) <= 122)){
            letterArr.unshift(S[i]);
        }
    }

    for(let i = 0; i < S.length; i++){
        if(!(S.charCodeAt(i) >= 65 && S.charCodeAt(i) <= 90) && !(S.charCodeAt(i) >= 97 && S.charCodeAt(i) <= 122)){
            reversed+=S[i];
        }else{
            reversed+=letterArr.shift();
        }
    }
    return reversed;
};
```
