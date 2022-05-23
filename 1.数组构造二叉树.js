//完全二叉树

class treeNode {
    constructor(val) {
        this.val = val;
        this.right = null;
        this.left = null;
    }
}

function arrToTree(arr) {
    if (arr.length == 0) return null
    let nodeFather = new treeNode(arr[0]);
    //创建一个队列，类似于先序遍历 BFS
    let nodeList = [nodeFather]
    let i = 1;
    while (i < arr.length) {
        let curFather = nodeList.shift()
        let nodeLeft = new treeNode(arr[i]);
        curFather.left = nodeLeft;
        nodeList.push(nodeLeft)
        i += 1;
        if (i == arr.length) return nodeFather
        let nodeRight = new treeNode(arr[i]);
        curFather.right = nodeRight;
        nodeList.push(nodeRight)
        i += 1;
    }
    return nodeFather
}


let treeTest = arrToTree([1, 2, 3, 4])
console.log(JSON.stringify(treeTest));




function arrToTreeWithNull(arr) {
    if (arr.length == 0 || !arr[0]) return null
    let nodeFather = new treeNode(arr[0]);
    //初始化，创建一个队列，类似于先序遍历 BFS
    let nodeList = [nodeFather]
    let i = 1;
    while (i < arr.length) {
        let curFather = nodeList.shift()
        if (arr[i] != null) {
            let nodeLeft = new treeNode(arr[i]);
            curFather.left = nodeLeft;
            nodeList.push(nodeLeft)
        } else {
            curFather.left = null;
        }
        i += 1;
        if (i == arr.length) return nodeFather
        if (arr[i] != null) {
            let nodeRight = new treeNode(arr[i]);
            curFather.right = nodeRight;
            nodeList.push(nodeRight)
        } else {
            curFather.right = null;
        }
        i += 1;
    }
    return nodeFather
}

let treeTest2 = arrToTreeWithNull([1, 2, null, 3, null, 4, null, 5])
console.log(JSON.stringify(treeTest2));


