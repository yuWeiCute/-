// 第2题：给定一个 object (如下所示)，输入一个 from 和一个 to，要求返回从 from 到 to 是否存在路径:
// {
// "purse": "hand purse",
// "bag": "backpack",
// " backpack": "sports backpack",
// "iphone": "apple watch",
// "iphone": "iphone case",
// "wallet": "leather wallet"
// }
// 例如，给定 from = bag 和 to = sports backpack，应该返回的是 true，因为存在 bag - backpack - sports backpack 这条路径
// 给定 iphone 和 backpack，应该返回 false，因为不存在路径

// 第3题：题设跟上面一样，要求你在找到路径之后，还能够返回整条路径。

function findPath(obj, from, to) {
    let next = obj[from]
    const path = [from, next]
    while (obj[next]) {
        if (next == from) return 'not find a path'
        next = obj[next]
        path.push(next)
        if (next == to) {
            return path
        }
    }
    return 'not find a path'
}

const obj = {
    "purse": "hand purse",
    "bag": "backpack",
    "backpack": "sports backpack",
    "iphone": "apple watch",
    "iphone": "iphone case",
    "wallet": "leather wallet"
}

console.log(findPath(obj, 'bag', 'sports backpack')); 

let a = '曦曦是猪'
console.log(a=='曦曦是猪')

