const { json } = require("stream/consumers");

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

function arrToLinkList(arr) {
    let nodeHead = new Node(null)
    let lastNode = nodeHead;
    for (let i = 0; i < arr.length; i++) {
        let curNode = new Node(arr[i])
        lastNode.next = curNode
        lastNode = curNode;
    }
    return nodeHead.next
}

let nodeList = arrToLinkList([1, 2, 3, 4, 5])
console.log(JSON.stringify(nodeList)); 
