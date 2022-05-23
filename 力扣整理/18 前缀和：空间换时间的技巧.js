/* 
在设计算法时，时间复杂度始终是我们关注的重点。我们需要让算法的时间复杂度尽可能低，追求运行效率。有些时候，我们可以通过增加空间占用的方式减少算法的运行时间，这便是空间换时间。

动态规划就是一类空间换时间的算法。动态规划通过保存所有子问题的计算结果，可以避免子问题的重复计算。这种方法的代价是 DP 数组 占用了较多的空间。

前缀和同样也是一种空间换时间的技巧，只不过我们使用的不是 DP 数组，而是「前缀和数组」。 
*/



// 什么是前缀和：题目解析

// LeetCode 303. Range Sum Query - Immutable（Easy）

// 给定一个整数数组  nums，处理以下类型的多个查询:
// 计算索引 left 和 right （包含 left 和 right）之间的 nums 元素的 和 ，其中 left <= right


/* 
解法一：暴力法
如果用暴力解法，每次调用 sumRange 时，都使用 for 循环将 i 到 j 之间的元素相加。
这样的话，每次查询平均需要 O(n) 的时间，这种算法的时间开销会非常大。
 */

/* 
解法二：空间换时间
对数组 nums 进行预处理，预先存储计算结果。我们使用二维数组 res 存储预处理的结果，res[i][j] 存储 sumRange(i, j) 的返回值。
这个解法的复杂度分析要区分「预处理阶段」和「查询阶段」：

--预处理阶段：时间复杂度 O(n^2) ，空间复杂度 O(n^2)；
--查询阶段：每次查询需要 O(1) 时间。
通过预处理，我们实现了空间换时间，每次查询的时间开销降到了最小。然而这种解法要存储所有可能的结果，空间占用太大。
 */

/* 
解法三：前缀和
上一个解法中的预处理方法过于暴力，会空间占用太大。我们还可以使用另一个更聪明的预处理方法：前缀和。
所谓前缀和（prefix sum），就是数组开头的若干连续元素的和。
--首先，通过两个前缀和相减就可以很快求出数组中从 i 到 j 的元素之和，只需要 O(1) 的时间：
--其次，前缀和数组只占用  O(n)  的空间，计算前缀和数组也很简单，只需要 O(n) 的时间：
 */


/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    let sum = [0];
    let p = 0;
    for (let item of nums) {
        p += item
        sum.push(p)
    }
    this.sum = sum
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
    return this.sum[right + 1] - this.sum[left]
};


var sortArray = function(nums) {
    if (nums.length < 2) return nums;
    return  quickSort(nums, 0, nums.length - 1);
};

function quickSort(nums, left, right) {
    if (left >= right) return;
    let pivotIndex = partition(nums, left, right)
    quickSort(nums, left, pivotIndex - 1)
    quickSort(nums, pivotIndex + 1, right)
    return nums;
}

function partition (nums, left, right) {

    let pivot = Math.ceil(right * Math.random());
    let leftIndex = left;
    for (let i = left; i < right; i++) {
        //
        if (nums[i] < nums[pivot]) {
            //解构赋值
            [nums[leftIndex], nums[i]] = [nums[i], nums[leftIndex]];
            leftIndex++;
        }
    }
    [nums[leftIndex], nums[pivot]] = [nums[pivot], nums[leftIndex]];
    return leftIndex;
}



var sortArray = function (nums) {
    if (nums.length < 2) return nums;
    return quickSort(nums, 0, nums.length - 1);
};

function quickSort(nums, left, right) {
    if (left >= right) return;
    //找到随机key
    let key = Math.ceil((right - left) * Math.random()) + left;
    //swap 把当前元素移到最后面
    [nums[key], nums[right]] = [nums[right], nums[key]];
    //记录分界线的值
    let pivot = nums[right];
    //记录左边比它小的数的下标
    let leftIndex = left - 1;
    //完成替换 将比它小的数放到当前计数下标
    for (let i = left; i < right - 1; i++) {
        if (nums[i] < pivot) {
            leftIndex++;
            [nums[leftIndex], nums[i]] = [nums[i], nums[leftIndex]];
        }
    }
    //把右边的分界值放回数组中
    leftIndex++;
    [nums[leftIndex], nums[right]] = [nums[right], nums[leftIndex]]
    quickSort(nums, left, leftIndex - 1)
    quickSort(nums, leftIndex + 1, right)
    return nums;
};


/**
 * 
 堆排序
  堆排序基本介绍
1.堆排序是利用堆这种数据结构而设计的一种排序算法，堆排序是一种选择排序，它的最坏，最好，平均时间复杂度均为O(nlogn)，它也是不稳定排序。
2.堆是具有以下性质的完全二叉树：每个结点的值都大于或等于其左右孩子结点的值，称为大顶堆, 注意 : 没有要求结点的左孩子的值和右孩子的值的大小关系。
3.每个结点的值都小于或等于其左右孩子结点的值，称为小顶堆

堆排序的基本思想是：
1.将待排序序列构造成一个大顶堆
2.此时，整个序列的最大值就是堆顶的根节点。
3.将其与末尾元素进行交换，此时末尾就为最大值。
4.然后将剩余n-1个元素重新构造成一个堆，这样会得到n个元素的次小值。如此反复执行，便能得到一个有序序列了。

可以看到在构建大顶堆的过程中，元素的个数逐渐减少，最后就得到一个有序序列了.


 * 
 */

let arr = [4, 6, 8, 5, 9, -1, 17, 5, 23, 11, 6];
heapSort(arr);
console.log(arr)

//编写一个堆排序
function heapSort(arr) {

    let temp;
    //1.将无序序列构成一个堆，根据升序降序需求选择大顶堆或小顶堆
//最后一个值的序号为arr.length-1，根据顺序存储二叉树，
//n节点的左子树为2*n+1,右子树为2*n+2，
//那么最后一个非叶子节点的值应该为Math.floor((arr.length-1-1)/2) 
//= Math.floor((arr.length)/2 -1)
//=Math.floor(arr.length / 2) - 1
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
        adjustHeap(arr, i, arr.length)
    }
    //2.将堆顶元素与末尾元素交换，将最大元素“沉”到数组末端
    //3.重新调整结构，使其满足堆条件，然后继续交换堆顶元素和当前末尾元素,
    //  反复执行调整+交换步骤，直到整个序列有序
    for (let j = arr.length - 1; j > 0; j--) {
        //交换
        temp = arr[j];
        arr[j] = arr[0];
        arr[0] = temp;
        adjustHeap(arr, 0, j);
    }
}

//将一个数组(二叉树),调整成一个大顶堆
/**
 * 将以i对应的非叶子节点的树调整成一个大顶堆
 * @param {要调整的数组} arr 
 * @param {表示非叶子节点在数组中的索引} i 
 * @param {对多少个元素进行调整，length是在逐渐减少} length 
 */
function adjustHeap(arr, i, length) {
    let temp = arr[i];//先取出当前元素的值，保存在临时变量
    //开始调整
    //说明 调整非叶子节点的顺序时从下到上，从左到右
    //从最下层开始，逐层将大的值往上提
    //1.k=i*2+1是i节点的左子节点
    for (let k = i * 2 + 1; k < length; k = k * 2 + 1) {
        if (k + 1 < length && arr[k] < arr[k + 1]) {
            //说明左子节点的值小于右子节点的值
            k++//k指向右子节点
        }
        if (arr[k] > temp) {
            //如果子节点大于父节点
            arr[i] = arr[k]//把较大的值赋给当前节点
//i指向k，继续循环比较，使的以当前i顶点的二叉树满足大顶堆的条件
//k为i节点的左子节点或右子节点，因为从下往上调整的，
//我们可以认为左子节点树或右子节点树已经是一个大顶堆，
//当这个大顶堆的顶点被某值X替换后，大顶堆被破坏结构，
//此时我们需要从原来的大顶堆右边节点树找到一个位置，将X放入该位置，从而重新形成大顶堆结构
//其实是从把最右边的一排节点逐层上移，X被安放在最右边的一排节点中合适的位置
            i = k;
        } else {
            break;//调整非叶子节点的顺序时从下到上，从左到右,所以可以中断
        }
        //当for选好结束后，我们已经将以i为父节点的树的最大值，放在了最顶上（局部）
        arr[i] = temp;//将temp值放到调整后的位置
    }
}


var findKthLargest = function (nums, k) {
    let length = nums.length
    // 创建大顶堆
    function buildMaxHeap(nums) {
        // 从倒数第二层开始调整顺序
        for (i = Math.floor(length / 2); i >= 0; i--) {
            heapify(nums, i)
        }
    }
    // 堆调整
    function heapify(nums, i) {
        //用2倍关系找到左右节点
        let left = 2 * i + 1, right = 2 * i + 2, largest = i;
        if (left < length && nums[left] > nums[largest]) {
            largest = left
        }
        if (right < length && nums[right] > nums[largest]) {
            largest = right
        }
        if (largest != i) {
            //替换两个元素
            swap(nums, i, largest)
            //查找下面是否还有大于这个数的（原来index为i的值）
            heapify(nums, largest)
        }
    }
    //替换两个元素
    function swap(nums, i, j) {
        let temp = nums[j];
        nums[j] = nums[i];
        nums[i] = temp
    }
    //输出
    buildMaxHeap(nums)
    //找到第k大的数
    for (i = length - 1; i >= nums.length - k + 1; --i) {
        //将第一个数换掉
        swap(nums, 0, i)
        //去除最后一个值
        length -= 1;
        //重新调整堆
        heapify(nums, 0)
    }
    return nums[0]
};
