// 21. Merge Two Sorted Lists
// Easy
// Topics
// Companies

// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: list1 = [], list2 = []
// Output: []

// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]

// Constraints:
// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.

// case 1: list1 = [1,2,4] | list2 = [1,3,4]
// case 2: list1 = [] | list2 = []
// case 1: list1 = [] | list2 = [0]

// Definition for singly-linked list.

export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
} 

export function mergeTwoSortedLists(list1: ListNode, list2: ListNode) {
    const head = new ListNode()
    /*
        - Can visit every node then construct array from memory
        or
        - Can construct array as I am traversing lists 
    */
    
    let head1 = list1;
    let head2 = list2;
    
    while (true) {
        
    } 
    
    // head.val = Math.max(list1.val, list2.val)
}