// call函数实现  主要就是把调用的函数挂载到第一个参数（也就是对象的属性上）再删除该属性
Function.prototype.myCall = function (context) {
    // 判断调用对象
    if (typeof this != 'function') {
        console.log('type error');
    }
    // 获取参数
    let args = [].slice.call(arguments,1)
    // 判断 context 是否传入，如果未传入则设置为 window
    context = context || window
    // this是当前调用的函数对象，在context中添加属性，这个属性是this（调用的函数对象），将调用函数设为对象的方法
    context.fn = this
    // 调用函数
    let res = context.fn(...args)
    // 将属性删除
    delete context.fn
    return res
}

let test = [].slice.myCall([0, 1, 2, 3, 4, 5], 2, 4)
console.log(test);


Function.prototype.myApply = function (context, args) {
    if (typeof this != 'function') {
        console.log('type error');
    }
    context = context || window
    context.fn = this
    let res = context.fn(...args)
    delete context.fn
    return res
}

let test2 = [].slice.myApply([0, 1, 2, 3, 4, 5], [2, 4])
console.log(test2);

// bind 函数实现  放回的是一个可传入剩余参数的函数
Function.prototype.myBind = function(context){
    // 判断调用对象是否为函数
    if (typeof this != 'function') {
        console.log('type error');
    }
    // 获取参数
    let args = [].slice.call(arguments,1)
    let that = this
    return function(){
        that.myApply(context,[...args,...arguments])
    }
}

function add() {
    return this.x + this.y;
}

var obj = {
    x: 1,
    y: 2,
}

obj.e = add.myBind(obj) // 不赋值会报错
console.log(obj.e())