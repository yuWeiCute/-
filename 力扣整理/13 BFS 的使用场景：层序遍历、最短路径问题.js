// 如果我们使用 DFS/BFS 只是为了遍历一棵树、一张图上的所有结点的话，那么 DFS 和 BFS 的能力没什么差别，我们当然更倾向于更方便写、空间复杂度更低的 DFS 遍历。
// 不过，某些使用场景是 DFS 做不到的，只能使用 BFS 遍历。这就是本文要介绍的两个场景：「层序遍历」、「最短路径」。


// BFS 的应用一：层序遍历
// LeetCode 102. Binary Tree Level Order Traversal 


// BFS 的应用二：最短路径
// 在二叉树中，BFS 可以实现一层一层的遍历。在图中同样如此。从源点出发，BFS 首先遍历到第一层结点，到源点的距离为 1，然后遍历到第二层结点，到源点的距离为 2…… 可以看到，用 BFS 的话，距离源点更近的点会先被遍历到，这样就能找到到某个点的最短路径了。

// LeetCode 1162. As Far from Land as Possible 离开陆地的最远距离（Medium）

var maxDistance = function (grid) {
    let n = grid.length
    const inArray = (i, j) => {
        return i >= 0 && i < n && j >= 0 && j < n
    }
    const queue = [];
    //把所有1的坐标push进队列
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 1) {
                queue.push([i, j])
            }
        }
    }
    //如果网格上只有陆地或者海洋，返回 -1。
    if (queue.length == 0 || queue.length == n * n) {
        return -1
    }
    let maxDis = 1;
    let move = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    while (queue.length != 0) {
        //当前层次
        maxDis++
        //记录每一次bfs的node数量
        let length = queue.length
        for (let q = 0; q < length; q++) {
            let [i, j] = queue.shift();
            for (let item of move) {
                let [p, k] = item
                if (inArray(i + p, j + k) && grid[i + p][j + k] == 0) {
                    queue.push([i + p, j + k]);
                    grid[i + p][j + k] = maxDis
                }
            }
        }
        //每层遍历后maxDis+1

    }
    return maxDis-2
};




