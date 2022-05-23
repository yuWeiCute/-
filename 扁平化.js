
//彻底拍平
function flatArr(arr) {
    const res = []
    function flatten(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                flatten(arr[i])
            } else {
                res.push(arr[i])
            }
        }
    }
    flatten(arr)
    return res
}
// const arr = [1, [2, [3, [4, 5]]], 6]
// console.log(flatArr(arr));



//反向拍平k层
function flatArrK(arr, k) {
    let res = []
    let depth = 0
    function findDepth(arr) {
        depth += 1
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                findDepth(arr[i])
            }
        }
    }
    findDepth(arr)
    if (k >= depth) {
        res = flatArr(arr)
        return res
    } else {
        let flatDepth = depth - k
        function flatArrDepth(res, arr, curDepth, flatDepth) {
            for (let i = 0; i < arr.length; i++) {
                if (curDepth >= flatDepth - 2 && Array.isArray(arr[i])) {
                    res.push(flatArr(arr[i]))
                }
                else if (Array.isArray(arr[i])) {
                    let node = new Array()
                    res.push(node)
                    flatArrDepth(res[res.length - 1], arr[i], curDepth + 1, flatDepth)
                } else {
                    res.push(arr[i])
                }
            }
        }
        flatArrDepth(res, arr, 0, flatDepth)
        return res
    }
}
// const arr2 = [1, [2, [3, [4, 5]]], 6]
// console.log(JSON.stringify(flatArrK(arr2, 1)))


//正向拍平k层
let res = []
function flatArrK2(arr, depth, k) {
    for (let i = 0; i < arr.length; i++) {
        if (depth < k && Array.isArray(arr[i])) {
            flatArrK2(arr[i], depth + 1, k)
        } else {
            res.push(arr[i])
        }
    }
}
// const arr3 = [1, [2, [3, [4, 5]]], 6]
// flatArrK2(arr3, 0, 1)
// console.log(JSON.stringify(res))