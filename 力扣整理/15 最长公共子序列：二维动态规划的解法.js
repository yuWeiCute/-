/* 
动态规划的的四个解题步骤是：

--定义子问题
--写出子问题的递推关系
--确定 DP 数组的计算顺序
--空间优化（可选） 
*/


// LeetCode 1143. Longest Common Subsequence 最长公共子序列（Medium）

/* 
步骤一：定义子问题
子问题是和原问题相似，但规模较小的问题。 
对于 LCS 问题，原问题是「s 和 t 的最长公共子序列」。
那么子问题可以缩小字符串 s 或者 t 的规模，变成「s 的前  个字符（s[0..i)）和 t 的前  个字符（t[0..j)）的最长公共子序列」，用f(i,j)表示。
可以看到，子问题有i、j两个参数，属于二维 DP 问题。
*/

/* 
步骤二：写出子问题的递推关系
这一步是求解动态规划问题最关键的一步。二维的子问题有很多可能的递推关系，有些题目一目了然，有些则可能需要仔细推敲。
一般来说，我们首先思考能不能使用一种最简单的子问题递推关系：看当前子问题和前一个子问题的关系。
LCS问题的子问题: 「s[0..i) 和 t[0..j) 的最长公共子序列」。我们可以比较 s 和 t 的最后一个字符 s[i-1] 和 t[j-1]。那么，这可能会有两种情况：
 --第一种情况：如果 s[i-1] == t[j-1] ，我们可以用这个字符作为最长公共子序列中的字符，然后找 s[0..i-1) 和 t[0..j-1) 的最长公共子序列
 --第二种情况：如果 s[i-1] != t[j-1]，我们可以试着删掉 s 或者 t 末尾的一个字符，即比较 s[0..i-1) 与 t[0..j)，或者比较 s[0..i) 与 t[0..j-1)，两种方案中，选择较长的公共子序列
*/

/* 
步骤三：确定 DP 数组的计算顺序
对于二维动态规划问题，我们仍然要坚持使用 DP 数组，用自底向上的顺序计算子问题。因为 DP 数组中的每一个元素都对应一个子问题，
DP 数组计算顺序的基本原则是：当我们计算一个子问题时，它所依赖的其他子问题应该已经计算好了。 根据这个原则，我们思考三点内容。
   --第一点：DP 数组的有效范围是什么？ 
   --第二点：base case 和原问题在 DP 数组中在什么位置？ 
   --第三点：DP 数组的子问题依赖方向是什么？ 
 */

/* 
步骤四：空间优化（可选）
一维数组 + 临时变量
 */

var longestCommonSubsequence = function (text1, text2) {
    let n = text1.length
    let dp = new Array(n + 1).fill(0);
    let max = 0;

    for (let i = 0; i < text2.length; i++) {
        var upLeft = 0;
        for (let j = 0; j < n; j++) {
            let temp = dp[j + 1]
            if (text2[i] == text1[j]) {
                dp[j + 1] = upLeft + 1
                if (max < dp[j + 1]) {
                    max = dp[j + 1]
                    dp.fill(max, j + 1, n + 1)
                    break
                }

            } else {
                dp[j + 1] = Math.max(dp[j], dp[j + 1])
            }
            upLeft = temp;
        }
    }
    return dp[n]
};



// 516. Longest Palindromic Subsequence

// 给你一个字符串 s ，找出其中最长的回文子序列，并返回该序列的长度。
// 子序列定义为：不改变剩余字符顺序的情况下，删除某些字符或者不删除任何字符形成的一个序列。


var longestPalindromeSubseq = function (s) {
    let length = s.length;
    //初始化
    const dp = new Array(length).fill(0).map(() => new Array(length).fill(0))
    for (let i = length - 1; i >= 0; i--) {
        dp[i][i] = 1;
        let cur = s[i]
        for (let j = i + 1; j < length; j++) {
            let cur2 = s[j];
            if (cur2 == cur) {
                dp[i][j] = dp[i + 1][j - 1] + 2
            }else{
                dp[i][j]=Math.max(dp[i+1][j],dp[i][j-1])
            }

        }
    }
    return dp[0][length-1]
};
