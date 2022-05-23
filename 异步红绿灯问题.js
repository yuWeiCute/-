// 1.红灯3s 亮一次，绿灯1s亮一次，黄灯2s亮一次，让三个灯不断重复
function run(color, wait) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log(color)
            resolve()
        }, wait)
    })
}

async function light() {
    await run('red', 3000)
    await run('green', 1000)
    await run('yellow', 2000)
    light()
}

light()



