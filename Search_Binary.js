/*
Write a function called binarySearch which accepts an array and a value, and returns the index at which the value 
exists. If the value does not exist in the array, return -1.

Time Complexity: O(log(N))

Examples:

binarySearch([1, 2, 3, 4, 5], 2) // 1
binarySearch([1, 2, 3, 4, 5], 3) // 2
binarySearch([1, 2, 3, 4, 5], 5) // 4
binarySearch([1, 2, 3, 4, 5], 6) // -1
binarySearch([
5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95) // 16
binarySearch([
5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100) // -1
*/

function binarySearch(arr, val) {
    if(arr.length === 0) return -1;

    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor((left + right) / 2);

    while(arr[middle] !== val && left <= right) {
        //console.log(left, middle, right);
        if(val < arr[middle]) right = middle - 1;
        
        else left = middle + 1;

        middle = Math.floor((left + right) / 2);
    }

    return arr[middle]===val ? middle: -1;

}

//binarySearch([1, 2, 3, 4, 5], 2)
//binarySearch([1, 2, 3, 4, 5], 3)
//binarySearch([1, 2, 3, 4, 5], 5)
//binarySearch([1, 2, 3, 4, 5], 6)
// binarySearch([
// 5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
// 40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 95)
// binarySearch([
// 5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
// 40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 100)