// 编程课虽有各种链表的变体：单链表、双链表、循环链表（收尾相连）…… 但算法题中主要考察单链表

/* 注意点：
--加入哑结点（即额外的链表头结点）可以简化插入操作。（如要求不要创建额外的链表结点，哑结点显然也属于额外的结点。）
--双指针链表遍历问题 */

// 框架
let prev = null;
let curr = head;
while (curr != null) {
    // 可能需要临时指针保存
    if (prev === null) {
        // curr 是头节点时候的操作
    } else {
        // curr不是头节点时候的操作
    }
    prev = curr;
    curr = curr.next;
}


// LeetCode 206 - Reverse Linked List[1]（Easy）

// 反转一个单链表。
// 示例：
// 输入： 1->2->3->4->5->NULL
// 输出： 5->4->3->2->1->NULL

function reverseNode(head) {
    let prev = null;
    let curr = head;
    while (curr != null) {
        let temp = curr.next
        if (prev === null) {
            curr.next = null
        } else {
            curr.next = prev
        }
        prev = curr;
        curr = temp;
    }
    return prev
}



