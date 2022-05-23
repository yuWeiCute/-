// 柯里化函数的实现
// 柯里化函数的定义：将多参数的函数转换成单参数的形式。
// 柯里化函数实现的原理：利用闭包原理在执行可以形成一个不销毁的作用域，然后把需要预先处理的内容都储存在这个不销毁的作用域中，并且返回一个最少参数函数。

function sum2() {
    return [].reduce.call(arguments, (pre, cur) => pre + cur, 0)
}
console.log(sum2(1, 2, 3));

//传入两个参数 函数 和 放在数组格式里面的参数
function curry2(fn, argOuter) {
    return function () {       //注意这里不能用箭头函数，箭头函数没有arguments
        let argInner = [].slice.call(arguments)
        //当外部函数存在的时候记录一共的参数
        if (argOuter !== undefined) {
            var args = argInner.concat(argOuter);
        }
        if (argInner.length == 0) {
            return args ? fn(...args) : fn(...argInner)   //这里直接写args传入会输出字符串，我有点晕了，以后在想原因吧 TAT
        } else {
            return args ? curry2(fn, args) : curry2(fn, argInner)
        }
    }
}

var sumPlus = curry2(sum2)
let res = sumPlus(1)(2)(3)(4)()
console.log(res);
let res2 = sumPlus(1, 2)(3)(4)()
console.log(res2);
let res3 = sumPlus()
console.log(res3);

//传入两个参数 函数 和 放在数组格式里面的参数
function curry(fn, currArgs) {
    return function () {
        // 将具有length属性的arguments转	换为数组
        let args = [].slice.call(arguments);
        // 首次调用时，若未提供最后一个参数currArgs，则不用进行args的拼接
        if (currArgs !== undefined) {
            args = args.concat(currArgs);
        }
        // 递归调用
        if (args.length < fn.length) {
            return curry(fn, args);
        }
        // 递归出口
        return fn(null, args);  // null表示没有需要替代的对象
    }
}

function sum(a, b, c) {
    console.log(a + b + c);
}
const fn = curry(sum);

fn(1, 2, 3); // 6
fn(1, 2)(3); // 6
fn(1)(2, 3); // 6
fn(1)(2)(3); // 6



// sum(1,2)(3)(4)(5,6,7)()返回28
// sum()返回0


function mySum() {
    let argOuter = [].slice.call(arguments)
    return function () {
        let argInner = [].slice.call(arguments)
        let args = argOuter.concat(argInner)
        if (argInner.length == 0) {
            return args.reduce((pre, cur) => pre + cur, 0)
        } else {
            return mySum(...args)
        }
    }
}

let res6 = mySum(1,2)(3)(4)(5,6,7)()

console.log(res6);


// compose(f,g)(x) === f(g(x))
// compose(f,g,m)(x) === f(g(m(x)))
// compose(f,g,m)(x) === f(g(m(x)))
// compose(f,g,m,n)(x) === f(g(m(n(x))))
//···

function compose(f,g,m){
    return function(x){
        return f(g(m(x)));
    }
}

function compose(...fns) {
    return function(x){
      return fns.reverse().reduce(function(arg, fn,){
        return fn(arg);
      }, x);
    }
  }



  