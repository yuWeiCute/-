setTimeout(() => { console.log('1') }, 1000)

/* const v = new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log('2');
        resolve('success')
    }, 1000);
})

v.then() */

// setTimeout(() => { console.log('67890') }, 1000)

//方法一：这种实现方式是利用一个伪死循环阻塞主线程。因为JS是单线程的。所以通过这种方式可以实现真正意义上的sleep()。
function sleep1(fn, delay) {
    let start = Date.now()
    while (Date.now() - start < delay) {
        continue
    }
    fn()
}

sleep1(() => { console.log('sleep1'); }, 3000)

//方法二：定时器
function sleep2(fn, delay) {
    setTimeout(fn, delay)
}

// 方法三：es6异步处理
function sleep3(delay) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve('fulfilled')
        }, delay);
    })
}
sleep3(1000).then(() => { console.log('sleep3') })

// 方法五：es7---- async/await是基于Promise的，是进一步的一种优化
function sleep5(delay) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve('fulfilled')
        }, delay);
    })
}
async function out(fn) {
    let wait = await sleep5(1000)
    fn()
}
out(() => { console.log('sleep5') })


/* function sleep(time) {
    return new Promise(resolve =>
       setTimeout(resolve,time)
 ) } async function output() {
    let out = await sleep(1000); 
    console.log(1); 
    return out;
} 
output();
 */