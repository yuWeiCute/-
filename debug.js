// function starsAndBars(s, startIndex, endIndex) {
//     // Write your code here
//     const arr = s.split('');
//     const result = [];

//     // const map = new Map()
//     const numArr = []
//     function findNum(start, end) {
//         let isRecord = false;
//         let num = 0;
//         let record = 0
//         for (let i = start; i < end; i++) {
//             if (arr[i] === '|' && isRecord === false) {
//                 isRecord = true;
//             }
//             if (arr[i] === '*' && isRecord === true) {
//                 record += 1;
//             }
//             if (arr[i] === '|' && isRecord === true) {
//                 num += record;
//                 record = 0;
//             }
//             numArr.push(num)
//         }
//         // return num
//     }
//     findNum(0, arr.length)

//     /*     for(let i = 0; i < arr.length; i++){
//             for(let j = i+1; j < arr.length; j++){
//                 let key = i + ',' + j
//                 map.set(key,findNum(i, j))
//             }
//         } */
//     const setArr = [...new Set(numArr)]

//     for (let i = 0; i < startIndex.length; i++) {
//         let start = startIndex[i] - 1
//         let end = endIndex[i] - 1
//         // let key =  start + ',' + endIndex[i]
//         // result.push(map.get(key))
//         // let 
//         let endNum = 0, startNum = 0;
//         if (arr[end] === '|') {
//             endNum = numArr[end]
//         } else {
//             endNum = setArr[setArr.indexOf(numArr[end]) - 1]?setArr[setArr.indexOf(numArr[end]) -1]:0
//         }

//         if (arr[start] === '|') {
//             startNum = numArr[start]
//         } else {
//             startNum = setArr[setArr.indexOf(numArr[start]) + 1]?setArr[setArr.indexOf(numArr[start]) + 1]:0
//         }
//         result.push(endNum - startNum)
//     }
//     return result
// }

// const s= '*|*|'
// const startIndex = [1,1]
// const endIndex = [1,3]
// console.log(starsAndBars(s, startIndex, endIndex));
/* var isStraight = function (nums) {
    nums = nums.sort()
    let pre = 0, count = 0;
    for (let item of nums) {
        if (item === 0) {
            count++
            continue
        }
        if (pre === 0 || item === pre + 1) {
            pre = item
            continue
        }
        else {
            let dif = item - pre - 1
            if (dif < 0) return false
            if (count >= dif) {
                count = count - dif
                pre += dif
            }
            else return false
        }
    }
    return true
};

console.log(isStraight([0, 7, 8, 9, 11])); */


/* function Foo(car) {
    this.bar = function () {
        this.bar = () => {
            console.log(this.car)
        }
        Foo.bar = () => {
            console.log(this.car)
        }
    }
    this.car = car
}
const m = new Foo(3)
m.bar()   //Foo添加了bar的方法
m.bar()
Foo(45)
Foo.bar
 */

/* new Promise((resolve, reject) => {
    reject(1);
    console.log(6);
}).catch(() => {
    console.log(2);
}).then(() => console.log(3), (v) => console.log(v))
    .then(console.log)
console.log(5); */

// Promise.reject(1).catch(err => {return err}).then(e => {console.log(e)})


/* var a = 1
var oA = () => {
  console.log(this.a)
}
obj = {
  a: 10,
  b: function () {
    console.log(this.a);
  }
}
var c = obj.b
oA()  //undefined
obj.b() //10
c()  //undefined */
// var longestConsecutive = function (nums) {
//     const arr = [...new Set(nums)]
//     let maxLength = 0
//     for (let i = 0; i < arr.length; i++) {
//         let k = nums[i]
//         if (arr.indexOf(k - 1) >=0 ) continue
//         let currLength = 1
//         while (arr.indexOf(k + 1) != -1) {
//             currLength += 1;
//             k += 1;
//         }
//         maxLength = Math.max(maxLength, currLength)
//     }
//     return maxLength
// };
// longestConsecutive([0,0,-1])

/* var a = 1
function f() {
    var a = 2
    return function () {
        console.log(a)
    }
}
var res = f()
res()
 */

/* function f() { return true; };
function g() { return false; };
(function () {
    if (g() && [] == ![]) {
        var f = function f() { return false; };
        function g() { return true; }
    }
})();
console.log(f()); */

function A() {
    this.name = 1
}
function B() {
    this.name = 2
}
let a = new A()
let b = new B()
A.prototype.constructor = B
console.log(a.name)
let a1 = new A()
console.log(a1.name)
console.log(a1.__proto__.constructor === A)