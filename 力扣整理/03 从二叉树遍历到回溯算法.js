// 回溯法采用试错的思想，当它通过尝试发现现有的分步答案不能得到有效的正确的解答的时候，它将取消上一步甚至是上几步的计算，再通过其它的可能的分步解答再次尝试寻找问题的答案。
// 回溯（backtracking） 实际上就是“撤回一步”的意思
// 根据回溯操作的特性，我们使用栈记录遍历时的当前路径。当进入一个结点时，做 push 操作；当退出一个结点时，做 pop 操作，进行回溯。


// LeetCode 78 - Subsets[2]（Medium）
// Subsets
// Subsets 问题就是要枚举出集合的所有子集。

var subsets = function (nums) {
    const path = [];
    const res = [];
    function backtrack(nums, index, path) {
        if (index === nums.length) {
            res.push(path.slice())
            return;
        }
        backtrack(nums, index + 1, path)
        path.push(nums[index])
        backtrack(nums, index + 1, path)
        path.pop();
    }
    backtrack(nums, 0, path)
    return res
};


