// 循环引用对象本来没有什么问题，但是序列化的时候就会发生问题，
// 比如调用JSON.stringify()对该类对象进行序列化，就会报错: Converting circular structure to JSON.

// 下面方法可以用来判断一个对象中是否已存在循环引用：

//重点是再某一节点的时候，把他的父辈们放进array，看它的孩子有没有和父辈们重复
const isCycle = (obj, parent) => {
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            for(let item of parent){
                if (item === obj[key]) {
                    return true
                }
            }
            let res = isCycle(obj[key], [obj[key], ...parent])
            if(res) return true
        }
    }
    return false
}




const a = 1;
const b = { a };
const c = { b };
const o = { d: { a: 3 }, c }
o.c.b.aa = c;

console.log(isCycle(o,[o]))

/* const isCycleObject = (obj, parent) => {
    const parentArr = parent || [obj];
    for (let i in obj) {
        if (typeof obj[i] === 'object') {
            let flag = false;
            parentArr.forEach((pObj) => {
                if (pObj === obj[i]) {
                    flag = true;
                }
            })
            if (flag) return true;
            flag = isCycleObject(obj[i], [...parentArr, obj[i]]);
            if (flag) return true;
        }
    }
    return false;
} */

function Clone(obj) {
    const objClone = Array.isArray(obj) ? [] : {}
    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj,key)) {
            if (typeof obj[key] === Object){
                objClone[key]= Clone(obj[key])
            }else{
                objClone[key]= obj[key]
            }
        }
    }
    return objClone
}
