# Palindrome Linked List

Given a singly linked list, determine if it is a palindrome.

Example 1:

Input: 1->2
Output: false
Example 2:

Input: 1->2->2->1
Output: true
Follow up:
Could you do it in O(n) time and O(1) space?

```
var isPalindrome = function(head) {
    let valArray = [];
    while(head != null){
        valArray.push(head.val);
        head = head.next;
    }
    let reversedArray = valArray.slice().reverse();
    for(let i = 0;i < valArray.length; i++){
        if (valArray[i] != reversedArray[i]) return false;
    }
    console.log(valArray);
    console.log(reversedArray);
    return true;
};
```
