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


let arr = [];
let line;
while (line = read_line()) {
    arr = line.split(' ');
}
let num = parseInt(arr[0]), n = parseInt(arr[1])
let sum = num
let curr = num
for (let i = 1; i < n; i++) {
    now = Math.sqrt(curr)
    sum += now
    curr = now
}
print(n)

// 读取多行
let t = parseInt(readline())
for (var i = 0; i < t; i++) {
    let x = readline();
    let arr = line.trim().split(' ').map(Number)
    let n = parseInt(lines[0]);
    lines.shift();
    print(arr.reduce((a, b) => a + b, 0));
}
while (line = readline()) { }

//Nodejs

var readline = require('readline');
process.stdin.setEncoding('utf-8');

var rl = readline.createInterface({ input: process.stdin, output: process.stdout, prompt: '' });
rl.prompt();

var solveMeFirst = (a, b) => a + b;

rl.on('line', function (data) {
    let arr = data.split(' ');
    if (arr && arr.length == 2) {
        let c = solveMeFirst(+arr[0], +arr[1]);
        process.stdout.write('' + c + '\n');
    }
});

const s = "anagram";
console.log(...s);
console.log([...s]);
console.log([...s].sort());
console.log([...s].sort().join(''));