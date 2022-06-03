/* const fs = require('fs');

fs.readFile('./date.json', (err, data) => {
    if (err) throw err;
    let input = JSON.parse(data)
}); */


/* let arr = [];
let line;
while ((line = read_line()) != "") {
    arr.push(line.split(' ').map(v => parseInt(v)));
}
// 使用自测数据按钮时调试用，正式提交时要删掉。
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        printsth(arr[i][j], ' ');
    }
    print();
}
 */


// let arr = [];
// let line;
// while (line = read_line()) {
//     arr = line.split(' ');
// }
// let num = parseInt(arr[0]), n = parseInt(arr[1])
// let sum = num
// let curr = num
// for (let i = 1; i < n; i++) {
//     now = Math.sqrt(curr)
//     sum += now
//     curr = now
// }
// print(n)

// // 读取多行
// let t = parseInt(readline())
// for (var i = 0; i < t; i++) {
//     let x = readline();
//     let arr = line.trim().split(' ').map(Number)
//     let n = parseInt(lines[0]);
//     lines.shift();
//     print(arr.reduce((a, b) => a + b, 0));
// }
// while (line = readline()) { }

// //Nodejs

// var readline = require('readline');
// process.stdin.setEncoding('utf-8');

// var rl = readline.createInterface({ input: process.stdin, output: process.stdout, prompt: '' });
// rl.prompt();

// var solveMeFirst = (a, b) => a + b;

// rl.on('line', function (data) {
//     let arr = data.split(' ');
//     if (arr && arr.length == 2) {
//         let c = solveMeFirst(+arr[0], +arr[1]);
//         process.stdout.write('' + c + '\n');
//     }
// });

// const s = "anagram";
// console.log(...s);
// console.log([...s]);
// console.log([...s].sort());
// console.log([...s].sort().join(''));

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