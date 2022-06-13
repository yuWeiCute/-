

// V8 单行
while (line = readline()) {
    var lines = line.split(' ').map(Number);
    print(lines[0] + lines[1]);
}


// V8 多行
let count = parseInt(readline());
let lines = [];
for(let i=0;i<count;i++)
    lines.push(readline());
for(let line of lines){
    let nums = line.split(" ");
    console.log(parseInt(nums[0]) + parseInt(nums[1]));
}


// nodejs   单行
//这两行必须引入
var readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//line就是一行的数据
rl.on('line', function (line) {
    //将数据按空格分开，返回一个数字数组
    let token = line.split(' ').map(Number)
    console.log(token[0] + token[1])
})




// nodejs   多行
var readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
})
//总行数默认为-1
var n = -1
//保存每行数据
var arr = []
//当前读取的行
cur_line = 0
rl.on('line', function (line) {
    if (n < 0) {
        //第一行数据去除空白字符，转为整数，做为新的行数
        n = parseInt(line.trim())
    } else {
        //处理数据
        //读取每行数据，去掉空格，保存到一个数组
        let token = line.split(' ').map(Number)
        //将数组加入到大的数组中
        arr.push(token)
        //当前行数+1
        cur_line += 1
    }
    //当行数读满
    //这里一定要是全等===
    if (cur_line === n) {
        for (let item of arr) {
            console.log(item[0] + item[1])
        }
    }
})