# Reverse Linked List

Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?

```
Iterative Method
var reverseList = function(head) {
    if (head == null) return null;
    let nodeArray = [];

    while (head != null){
        nodeArray.unshift(new ListNode(head.val));
        head = head.next;
    }

    nodeArray.push(null);

    console.log(nodeArray);

    let arrayLength = nodeArray.length-1;

    let newListHead = nodeArray[0];
    let currentNode = newListHead;

    for(let i = 1; i < nodeArray.length; i++){
        currentNode.next = nodeArray[i];
        currentNode = currentNode.next;
    }
    return newListHead;
};
```
