let arr = [['A', 'B'], ['a', 'b'], ['1', '2']];
let res = []
let path = []
function pushPath(i) {
    if (i >= arr.length) {
        res.push(path.join(''))
        return
    }
    for (let k = 0; k < arr[i].length; k++) {
        path.push(arr[i][k])
        pushPath(i + 1)
        path.pop()
    }
}
pushPath(0, 0)
console.log(res);