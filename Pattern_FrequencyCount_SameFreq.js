/*
Write a function called sameFrequency. Given two positive integers, find out if the two
have the same frequency of digits.

Required time complexity: O(N)

Examples:
sameFrequency(182, 281) // true
sameFrequency(34, 14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22, 222) // false
*/

function sameFrequency(int1, int2) {
    var str1 = int1.toString();
    var str2 = int2.toString();
    if(str1.length != str2.length) {
        return false;
    }

    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of str1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of str2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    //console.log(frequencyCounter1);
    //console.log(frequencyCounter2);
    for(let key in frequencyCounter1) {
        if(!(key in frequencyCounter2)) {
            return false;
        }
        if(frequencyCounter2[key] != frequencyCounter1[key]) {
            return false;
        }
    }
        


    return true;
}

//sameFrequency(182, 281)
//sameFrequency(34, 14)
//sameFrequency(3589578, 5879385)
sameFrequency(22, 222)