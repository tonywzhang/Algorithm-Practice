# Linked List Cycle

Given a linked list, determine if it has a cycle in it.

Follow up:
Can you solve it without using extra space?

```
var hasCycle = function(head) {
    if (head == null || head.next == null || head.next.next == null) return false;
    let nextNode = head.next;
    let doubleNextNode = head.next.next;

    while (nextNode != null) {
        if (doubleNextNode == null || doubleNextNode.next == null) return false;
        if (nextNode === doubleNextNode) {
            return true;
        }
        nextNode = nextNode.next;
        doubleNextNode = doubleNextNode.next.next;
    }

};
```
