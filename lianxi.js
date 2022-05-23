/* "use strict"

Array.prototype.copy = function () {
    return [...this, ...this]
}
let res = [1, 2, 3, 4, 5].copy()
console.log(res);

function A() {
    this.a = 1
}

A()
console.log(a)
 */


// 实例链式调用：如let a = new Man(); a.sleep(3000).sayHi().sleep(1000).sleep(2000).sayHi()；写出Man()构造函数

// 遍历DOM树打印每个元素的tagName

// 后端返回的64位大数，前端怎么处理精度丢失的问题


// 画0.5px的线

/* hr */
/* .hr.scale-half {
    height: 1px;
    transform: scaleY(0.5);
    transform-origin: 50% 100%;
} */
function create(obj) {
    function F() { }
    F.prototype = obj
    return new F()
}

function myInstanceof(left, right) {
    let proto = Object.getPrototypeOf(left), // 获取对象的原型
        prototype = right.prototype; // 获取构造函数的 prototype 对象
    // 判断构造函数的 prototype 对象是否在对象的原型链上
    while (true) {    //一直执行
        if (!proto) return false
        if (proto === prototype) return true
        proto = proto.__proto__
    }
}

console.log(myInstanceof(Function, Object));
console.log(myInstanceof(Object, Function));


function myNew() {
    let newObject = null;
    let constructor = [].shift.call(arguments)
    let result = null
    // 判断参数是否是一个函数
    if (typeof constructor !== 'function') {
        console.log('type error');
        return
    }
    // 新建一个空对象，对象的原型为构造函数的 prototype 对象
    newObject.__proto__ = constructor.prototype
    // 将 this 指向新建对象，并执行函数
    result = constructor.apply(newObject, arguments);
    // 判断返回对象
    return typeof result === 'object' ? result : newObject
}


const PENGING = 'pending';
const RESOLVE = 'resolved';
const REJECTED = 'rejected';

class MyPromise{
    constructor(){
        
    }

}