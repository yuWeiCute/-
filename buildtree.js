let arr = [
    { id: 1, name: '1', pid: 0 },
    { id: 2, name: '2', pid: 3 },
    { id: 3, name: '3', pid: 1 },
    { id: 4, name: '4', pid: 3 },
    { id: 5, name: '5', pid: 3 },
]

let tree = [
    {
        "id": 1,
        "name": "1",
        "pid": 0,
        "children": [
            {
                "id": 2,
                "name": "2",
                "pid": 1,
                "children": []
            },
            {
                "id": 3,
                "name": "3",
                "pid": 1,
                "children": [
                    {
                        "id": 4,
                        "name": "4",
                        "pid": 3,
                        "children": []
                    }
                ]
            }
        ]
    }
]
//N^2构建树
const buildTree = [];
function linkFather(arr, item) {
    for (let k of arr) {
        if (k.id === item.pid) {
            if (!k.children) k.children = []
            k.children.push(item)
        }
    }
}
function linkTree(arr) {
    for (let item of arr) {
        if (!item.children) item.children = []
        if (item.pid === 0) buildTree.push(item)
        if (item.pid != 0) linkFather(arr, item)
    }
}
linkTree(arr)
console.log(JSON.stringify(buildTree));


//map构建树  2N
const treeOrigin = []
const map = {}
for (let item of arr) {
    map[item.id] = item;
    map[item.id].children = []
}
for (let item of arr) {
    if (item.pid == 0) {
        treeOrigin.push(item)
    } else {
        map[item.pid].children.push(item)
    }
}

let res = JSON.stringify(treeOrigin)
console.log(res);

//map构建树  2N
const buildTree2 = []
const map2 = {}
for (let item of arr) {
    item.children = []
    map2[item.id] = item;
}
for (let item of arr) {
    if (item.pid === 0){
        buildTree2.push(item)
    }else{
        map2[item.pid].children.push(item)
    }
}
console.log(buildTree2);

//将树flat
const flatTree = []
function flat(tree) {
    for (let item of tree) {
        const newItem = {
            "id": item.id,
            "name": item.name,
            "pid": item.pid,
        }
        flatTree.push(newItem)
        if (item.children.length != 0) {
            flat(item.children)
        }
    }
}
flat(tree)
console.log(flatTree);