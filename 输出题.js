/* Promise.resolve(1)
    .then(2)
    .then(Promise.resolve(3))
    .then(console.log) */

// //解释：.then 或者 .catch 的参数期望是函数，传入非函数则会发生值穿透。

/* Promise.resolve(1)
    .then(res => {
        console.log(res);
        return 2;
    })
    .catch(err => {
        return 3;
    })
    .then(res => {
        console.log(res);
    }); */

// //   Promise是可以链式调用的，由于每次调用 .then 或者 .catch
// //   都会返回一个新的 promise，从而实现了链式调用, 它并不像一般任务的链式调用一样return this。

// // 上面的输出结果之所以依次打印出1和2，是因为resolve(1)之后走的是第一个then方法，
// // 并没有进catch里，所以第二个then中的res得到的实际上是第一个then的返回值。并且return 2会被包装成resolve(2)，被最后的then打印输出2。

/* Promise.resolve().then(() => {
    return new Error('error!!!')
  }).then(res => {
    console.log("then: ", res)
  }).catch(err => {
    console.log("catch: ", err)
  }) */

// //   返回任意一个非 promise 的值都会被包裹成 promise 对象，
// // 因此这里的return new Error('error!!!')也被包裹成了return Promise.resolve(new Error('error!!!'))，因此它会被then捕获而不是catch。

/* const promise = Promise.resolve().then(() => {
    return promise;
  })
  promise.catch(console.err) */

// //   这里其实是一个坑，.then 或 .catch 返回的值不能是 promise 本身，否则会造成死循环。

/* function runAsync (x) {
    const p = new Promise(r => setTimeout(() => r(x, console.log(x)), 1000))
    return p
}

Promise.all([runAsync(1), runAsync(2), runAsync(3)]).then(res => console.log(res)) */

// 首先，定义了一个Promise，来异步执行函数runAsync，该函数传入一个值x，然后间隔一秒后打印出这个x。

// 之后再使用Promise.all来执行这个函数，执行的时候，看到一秒之后输出了1，2，3，同时输出了数组[1, 2, 3]，
// 三个函数是同步执行的，并且在一个回调函数中返回了所有的结果。并且结果和函数的执行顺序是一致的。


/* function runAsync(x) {
    const p = new Promise(r => setTimeout(() => r(x, console.log(x)), 1000))
    return p
}
function runReject(x) {
    const p = new Promise((res, rej) => setTimeout(() => rej(`Error: ${x}`, console.log(x)), 1000 * x))
    return p
}
Promise.all([runAsync(1), runReject(4), runAsync(3), runReject(2)])
    .then(res => console.log(res))
    .catch(err => console.log(err)) */



/* async function async1() {
    console.log('async1 start');
    await new Promise(resolve => {
        console.log('promise1')
    })
    console.log('async1 success');
    return 'async1 end'
}
console.log('srcipt start')
async1().then(res => console.log(res))
console.log('srcipt end') */

//   这里需要注意的是在async1中await后面的Promise是没有返回值的，也就是它的状态始终是pending状态，所以在await之后的内容是不会执行的，包括async1后面的 .then
/* let window = this
window.number = 2;
var obj = {
 number: 3,
 db1: (function(){
   console.log(this);
   this.number *= 4;
   return function(){
     console.log(this);
     this.number *= 5;
   }
 })()
}
var db1 = obj.db1;
db1();
obj.db1();
console.log(obj.number);     // 15
console.log(window.number);  // 40 */

/* var obj = { 
    name: 'cuggz', 
    fun: function(){ 
       console.log(this.name); 
    } 
  } 
  obj.fun()     // cuggz
  new obj.fun() // undefined */

//   var obj = {
//     say: function() {
//       var f1 = () =>  {
//         console.log("1111", this);
//       }
//       f1();
//     },
//     pro: {
//       getPro:() =>  {
//          console.log(this);
//       },
//       get:3
//     }
//  }
//  var o = obj.say;
//  o();
//  obj.say();
//  obj.pro.getPro();
var a = 1
function f() {
  var a = 2
  return function () {
    console.log(a)
  }
}
var res = f()
res()






