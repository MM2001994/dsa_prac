/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    let slow = head, fast = head;

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let h1 = head;
    let h2 = slow.next;
    slow.next = null;

    h2 = reverse(h2);

    return reorder(h1, h2);
};

var reorder = function (h1, h2) {
    let curr1 = h1;
    let curr2 = h2;
    let curr1Next = null;
    let curr2Next = null;

    while (curr1 !== null && curr2 !== null) {
        curr1Next = curr1.next;
        curr2Next = curr2.next;
        curr1.next = curr2;
        curr2.next = curr1Next;
        curr2 = curr2Next;
        curr1 = curr1Next;
    }

    return h1;
}

var reverse = function (head) {
    let prev = null;
    let next = null;
    let curr = head;

    while (curr !== null) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;
}