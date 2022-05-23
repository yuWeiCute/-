var CQueue = function () {
    this.stackA = [];
    this.stackB = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
    this.stackA.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {

    if (this.stackB.length == 0) {
        while (this.stackA.length != 0) {
            this.stackB.push(this.stackA.pop())
        }
    }
    if (this.stackB.length == 0) {
        return -1
    }
    let deleteItem = this.stackB.pop();

    return deleteItem
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */


















