// 二叉树的递归结构
// 二叉树问题的子问题划分

// 二叉树天生就是递归的。遍历一个二叉树，先处理根结点，左右两个子树又是二叉树，可以递归处理。这便是递归前序遍历的原理。
// 递归本质上是将问题分解成同类的子问题，反复调用自己来进行求解。你可能更熟悉动态规划里的子问题，但实际上任何有递归函数的地方都有子问题。


/* 
Path Sum 的子问题划分:
  递归有两大要点：
  --反复调用自身(参数及操作)
  --终止条件
  而在二叉树结构上进行递归，则这两大要点变为：
  --递归调用自己两个子树
  --在叶结点处终止递归 
*/

// LeetCode 112 - Path Sum[1]（Easy）

// 给定一个二叉树和一个目标和，判断该树中是否存在根结点到叶结点的路径，这条路径上所有结点值相加等于目标和。返回 true 或者 false。

function hasPathSum(root, sum) {
    if (root == null) {
        return false;
    }
    if (root.left == null && root.right == null) {
        return root.val == sum;
    }
    let target = sum - root;
    return hasPathSum(root.left, target) || hasPathSum(root.right, target);
}

/* 
细节问题:
  细节 1：root == null 表示什么:
  在二叉树中， root 为 null 表示空树。但这里的空树有两种含义：
  --第一个含义是整棵树都为空。二叉树题目一般都需要考虑这种情况，否则面试官会认为你考虑边界情况不周全。
  --第二个含义是某个子树为空。由于函数是递归调用的，参数 root 可以表示任何一个子树。特别的，叶结点的两个子树都为空，递归到这里就会自然遇到两个 root == null 的情况 

  细节 2：是否要判断叶结点:
  root.left == null && root.right == null的情况是否要判断，结合具体题目思考边界条件
*/