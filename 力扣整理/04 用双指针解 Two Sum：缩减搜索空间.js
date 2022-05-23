// LeetCode 167 - Two Sum II - Input array is sorted[1]（Easy）
// 给定一个已按照升序排列的有序数组，找到两个数使得它们相加之和等于目标数（不可以重复使用同一个数），返回两个数的下标值 i 和 j，要求 i < j。
// 假设每个输入有且仅有一个答案。

// 这就是一道普通的双指针解法。两个指针， O(n)的时间。
// 实际上，在这个双指针解法背后蕴含的是缩减搜索空间的通用思想。


/* 
双指针解法的正确性解释:
我们考虑两个指针指向的数字，A[i] 和 A[j]。由于数组是有序的，在一开始，A[i] 是数组中最小的数字，A[j] 是最大的数字。我们将 A[i] + A[j] 与目标和 target 进行比较，则可能有两种情况：

A[i] + A[j] 大了。这时候，我们应该去找更小的两个数。由于 A[i] 已经是最小的元素了，将任何 A[i] 以外的数跟 A[j] 相加的话，和只会更大。因此 A[j] 一定不能构成正确的解，于是将 j 向左移动一格，排除 A[j]。
A[i] + A[j] 小了。这时候，我们应该去找更大的两个数。由于 A[j] 已经是最大的元素了，将任何 A[j] 以外的数跟 A[i] 相加的话，和只会更小。因此 A[i] 一定不能构成正确的解，于是将 i 向右移动一格，排除 A[i]。
*/



// LeetCode 240 - Search a 2D Matrix II[2]（Medium）

/* 举一反三：二维矩阵搜索:
一个m*n的矩阵 matrix 有如下特点：

每行的元素从左到右升序排列
每列的元素从上到下升序排列
写一个高效的算法在矩阵中搜索目标值 target。 */


//LeetCode 11 - Container With Most Water[1]（Medium）

var maxArea = function (height) {
    let maxArea = 0;
    let i = 0, j = height.length - 1;
    while (i < j) {
        let currArea = (j - i) * Math.min(height[i], height[j]);
         maxArea= Math.max( maxArea, currArea);
         if (height[i] < height[j]) {
            i++;
        } else {
            j--;
        }
    }
    return maxArea
};