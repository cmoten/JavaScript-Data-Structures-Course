/*
Write a function called averagePair. Given a sorted array of integers and a target average,
determine if there is a pair of values in the array where the average of the pair equals
the target average. There may be more than one pair that matches the average target.

Time Constraint: O(N)
Space Constraint: O(1)

Examples:
averagePair([1, 2, 3], 2.5) // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1) // false
averagePair([], 4) // false
*/

function averagePair(arr, tgt) {
    if(arr.length == 0 || arr === undefined) {
        return false;
    }

    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let avg = (arr[left] + arr[right]) / 2;
        if(avg == tgt) {
            return true;
        } else if(avg < tgt) {
            left ++;
        } else {
            right --;
        }
    }

    return false; 
}

averagePair([1, 2, 3], 2.5)
//averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)
//averagePair([-1, 0, 3, 4, 5, 6], 4.1)
//averagePair([], 4)