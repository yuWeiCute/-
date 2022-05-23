// 给一个十进制数 (假设是 n 位数)，要求从数字中剔除 k 个数字，使得剔除之后形成的 n - k 个数字组成的数最小，并求这个数。


//傻瓜式n^2
function minNum(num) {
    let str = num + ''
    const arr = str.split('')
    const minNum = {
        val: num,
        index: []
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let arrCur = arr.slice(0, i).concat(arr.slice(i + 1, j).concat(arr.slice(j + 1))).join('')
            let numCur = Number(arrCur)
            if (numCur < minNum.val) {
                minNum.val = numCur;
                minNum.index = [i, j]
            }
        }
    }
    console.log(minNum.index);
}

// minNum(613245)


//前面一位大于后面的时候可以删掉，也可以用于删除k位

function findMinNum(num, k) {
    let str = num + ''
    const arr = str.split('').map(Number)
    let count = 0
    const delIndex = []
    for (let i = 0; i < arr.length; i++) {
        if (count == k) break
        if (arr[i] > arr[i + 1]) {
            count += 1
            delIndex.push(i)
        }
    }
    if (delIndex.length < k) {
        let dValue = k - delIndex.length
        for (let i = arr.length - dValue; i < arr.length; i++) {
            delIndex.push(i)
        }
    }
    console.log(delIndex);
}

findMinNum(613245,2)
findMinNum(12345,2)