# Merge Two Sorted Lists

Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4

```
Iterative Example

var mergeTwoLists = function(l1, l2) {
    if (l1 == null) return l2;
    if (l2 == null) return l1;

    let head = null;

    if (l1.val <= l2.val){
        head = new ListNode(l1.val);
        l1 = l1.next;
    } else {
        head = new ListNode(l2.val);
        l2 = l2.next;
    }


    let currentNode = head;
    while (l1 != null && l2 != null){
        if (l1.val <= l2.val) {
            currentNode.next = new ListNode(l1.val);
            l1 = l1.next;
            currentNode = currentNode.next;
        } else {
            currentNode.next = new ListNode(l2.val);
            l2 = l2.next;
            currentNode = currentNode.next;
        }
    }

    if (l1 != null){
        currentNode.next = l1;
    } else {
        currentNode.next = l2;
    }

    return head;
};
```

```
Recursive Example

var mergeTwoLists = function(l1, l2) {
    if (l1 == null) return l2;
    if (l2 == null) return l1;
    let head = null;
    if(l1.val <= l2.val) {
        head = new ListNode(l1.val);
        head.next = mergeTwoLists(l1.next, l2);
    } else {
        head = new ListNode(l2.val);   
        head.next = mergeTwoLists(l1, l2.next);
    }
    return head;
};

```
