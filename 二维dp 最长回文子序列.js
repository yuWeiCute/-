// 给你一个字符串 s ，找出其中最长的回文子序列，并返回该序列的长度。

// 子序列定义为：不改变剩余字符顺序的情况下，删除某些字符或者不删除任何字符形成的一个序列。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/longest-palindromic-subsequence
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


/**
 * @param {string} s
 * @return {number}u
 */
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