localStorage.__proto__.mySet = function (key, value, maxAge) {
    const obj = {
        data: value,
        validTime: Date.now() + maxAge
    }
    localStorage.setItem(key, obj)
}

localStorage.__proto__.myGet = function (key) {
    let item = localStorage.getItem(key)
    if (!item) return null
    if (item.validTime < Date.now()) {
        localStorage.removeItem(key)
        return null
    }
    return item.data
}