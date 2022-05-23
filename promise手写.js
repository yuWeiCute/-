const PENGING = 'pending';
const RESOLVE = 'resolved';
const REJECTED = 'rejected';

class MyPromise {
    constructor(executor) {
        this.state = 'pending'
        this.value = undefined
        this.reason = undefined
        //记录pending状态的回调函数
        this.callbacks = [];
        let resolve = value => {
            if (this.state === 'pending') {
                this.state = 'fulfilled'
                this.value = value
                //调用成功的回调函数
                setTimeout(() => {
                    this.callbacks.forEach(item => {
                        item.onResolved(value);
                    });
                });
            }
        }
        let reject = value => {
            if (this.state === 'pending') {
                this.state = 'rejected'
                this.reason = value
                //调用失败的回调函数
                setTimeout(() => {
                    this.callbacks.forEach(item => {
                        item.onRejected(value)
                    })
                })
            }
        }
        // 自动执行函数
        try {
            //同步调用『执行器函数』
            executor(resolve, reject)
        } catch (e) {
            //修改 promise 对象状态为『失败』
            reject(e)
        }
    }

    //then
    then(onResolved, onRejected) {
        if (typeof onResolved !== 'function') onResolved = value => value
        if (typeof onRejected !== 'function') onRejected = reason => { throw reason }
        const self = this
        return new MyPromise((resolve, reject) => {
            function callBack(func, val) {
                let result = func(val)
                if (result instanceof Promise) {
                    result.then(v => resolve(v), r => reject(r))
                } else {
                    resolve(result)
                }
            }
            switch (this.state) {
                // 如果是等待状态，则将函数加入对应列表中
                case 'pending':
                    this.callbacks.push({
                        onResolved: function () {
                            callBack(onResolved, self.value);
                        },
                        onRejected: function () {
                            callBack(onRejected, self.reason);
                        }
                    });
                    break
                // 如果状态已经凝固，则直接执行对应状态的函数
                case 'fulfilled':
                    setTimeout(() => {
                        callBack(onResolved, self.value)
                    })
                    break
                case 'rejected':
                    setTimeout(() => {
                        callBack(onRejected, self.reason)
                    })
                    break
                default:
            }
        })
    }

    static resolve(value) {
        return new MyPromise((resolve, reject) => {
            if (value instanceof Promise) {
                value.then(v => resolve(v), r => reject(r))
            } else {
                resolve(value)
            }
        })
    }

    static reject(reason) {
        return new MyPromise((resolve, reject) => {
            reject(reason)
        })
    }

    static all(promises) {
        return new Promise(
            (resolve, reject) => {
                if (!Array.isArray(promises)) {
                    throw new TypeError('not an array')
                }
                const res = []
                let count = 0
                for (let i = 0; i < promises.length; i++) {
                    Promise.resolve(promises[i]).then(
                        value => {
                            res.push(value)
                            count++
                            if (count == promises.length - 1) {
                                resolve(res)
                                return
                            }
                        },
                        reason => {
                            reject(reason)
                            return
                        }
                    )
                }
            }
        )
    }

}



let time = new MyPromise((resolve, reject) => {

    resolve('red')

})
console.log(time);
time.then((val) => {
    console.log(val);
    return '1'
}, reason => {
    console.log(reason);
}
).then(res => {
    console.log("then: ", res)
})
MyPromise.resolve().then(() => {
    return '1'
}).then(res => {
    console.log("then: ", res)
})
// .catch(err => {
//     console.log("catch: ", err)
// })

let time2 = new MyPromise((resolve, reject) => {
    setTimeout(() => { resolve('yellow') }, 0)
})
time2.then((val) => {
    console.log(val);
    return '1'
}, reason => {
    console.log(reason);
}
).then(res => {
    console.log("then: ", res)
})

let p1 = new Promise((resolve, reject) => {
    resolve('OK');
})
let p2 = Promise.resolve('Success');
// let p2 = Promise.resolve('Error');
let p3 = Promise.resolve('Oh Yeah');


MyPromise.all([p1, p2, p3]).then(res => {
    console.log(res);
})



// 顾名思义，Promse.race就是赛跑的意思，意思就是说，
// Promise.race([p1, p2, p3])里面哪个结果获得的快，就返回那个结果，
// 不管结果本身是成功状态还是失败状态。
function race(entries) {
    var Constructor = this; // this 是调用 race 的 Promise 构造器函数。
    if (!isArray(entries)) {
        return new Constructor(function (_, reject) {
            return reject(new TypeError('You must pass an array to race.'));
        });
    } else {
        return new Constructor(function (resolve, reject) {
            var length = entries.length;
            for (var i = 0; i < length; i++) {
                Constructor.resolve(entries[i]).then(resolve, reject);
            }
        });
    }
}


function promiseAll(promises) {
    return new Promise(function (resolve, reject) {
        if (!Array.isArray(promises)) {
            throw new TypeError(`argument must be a array`)
        }
        var resolvedCounter = 0;
        var promiseNum = promises.length;
        var resolvedResult = [];
        for (let i = 0; i < promiseNum; i++) {
            Promise.resolve(promises[i]).then(value => {
                resolvedCounter++;
                resolvedResult[i] = value;
                if (resolvedCounter == promiseNum) {
                    return resolve(resolvedResult)
                }
            }, error => {
                return reject(error)
            })
        }
    })
}

const result3 = promiseAll([p1, p2, p3]);

console.log(result3);

Promise.race = function (args) {
    return new Promise((resolve, reject) => {
      for (let i = 0, len = args.length; i < len; i++) {
        args[i].then(resolve, reject)
      }
    })
  }