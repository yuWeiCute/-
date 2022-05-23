/* 
「三步走」方法的三步分别为：
--第一步【拆解子问题】：将问题尽可能地划分为子问题。 
  复杂问题的子问题很可能不止一个。要划分到不能再划分为止。这一步的目的是找出所有的子问题。
--第二步【抽取全局变量】：如果题目所求的结果涉及到所有子树，考虑使用全局变量。 
  如果题目要返回的结果就是所有子树的最大值，或是所有子树的和，那么可以在遍历的过程中不断更新变量，让代码更简洁。
--第三步【写出递归函数】：有几个子问题，递归函数就返回几个值。 
*/


// LeetCode 1372. Longest ZigZag Path in a Binary Tree

// 给定一棵二叉树。二叉树的之字形路径是一条从上至下的路径，其中左向边（前往左子结点的边）和右向边（前往右子结点的边）交替出现。之字形路径的长度定义为路径中边的数量，或结点的数量减一。请返回给定二叉树中的最长之字形路径的长度。

// 第一步：拆解子问题: 最长左之根路径，最长右之根路径

// 第二步：抽取全局变量：所有子树上子问题的最大值

// 第三步：写出递归函数：有几个子问题，递归函数就返回几个值

var longestZigZag = function (root) {
    let maxPath = 0;
    function zigZag(root) {
        //退出条件
        if (root === null) {
            return [0, 0]
        }
        if (root.left === null && root.right === null) return [0, 0]
        //返回 longestLeft, LongestRight
        let left = zigZag(root.left)    //是一个记录左右长度的数组
        let right = zigZag(root.right)
        let leftLength = 1 + left[1]
        let rightLength = 1 + right[0]
        maxPath = Math.max(maxPath, leftLength, rightLength)
        return [leftLength, rightLength]
    }
    zigZag(root)
    return maxPath - 1
};



