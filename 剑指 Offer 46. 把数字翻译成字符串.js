// 0 -> 'a'，1 -> 'b' .... 25 -> 'z' ，问一个数能有多少种组合
// 1234 -> 3
// 111 -> 3
// 333 -> 1
//剑指 Offer 46. 把数字翻译成字符串


//先全局变量，记一下个数
/* let res = 0
function dfs(nums){
    if  */

var translateNum = function (num) {
    //将数字转化为字符串或者数组方便遍历
    const str = num.toString()
    //新建一个dp数组
    const dp = new Array(str.length + 1)
    //初始化一下dp的初始值
    dp[0] = 1;
    dp[1] = 1;
    //遍历计算dp队列
    for (let i = 1; i < str.length; i++) {
        //递推关系  f(i) = f(i-1) 条件（数字Xi-1 Xi在10-25范围外）
        //递推关系  f(i) = f(i-1)+f(i-2) 条件（数字Xi-1 Xi在10-25范围内）
        let temp = Number(str[i] + str[i - 1])
        if (temp >= 10 && temp <= 25) {
            dp[i + 1] = dp[i] + dp[i - 1]
        } else {
            dp[i + 1] = dp[i]
        }
    }
    return dp[str.length]
};

console.log(translateNum(12258));


function translate(num) {
    str = num.toString
    //dfs遍历 参数：记录当前的位置，位置向右移动
    const memo = new Array(num.length)
    
    const dfs = (index) => {
        //退出条件
        if (index >= str.length - 1) return 1
        //当前操作  当前和下一位合起来是否在10-25范围内 内的话就为两个分支的合
        let cur = Number(str[index] + str[index + 1])
        //外的话就~~~~
        if (cur >= 10 && cur <= 25) return dfs(index + 1) + dfs(index + 1)
        else return dfs(index + 1)

    }

}