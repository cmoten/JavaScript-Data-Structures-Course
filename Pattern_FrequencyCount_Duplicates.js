/*
Implement a function areThereDuplicates which accepts a variable number of arguments, and checks
whether there are any duplicates among the arguments passed in.You can solve this using the 
frequency counter pattern OR the multiple pointers pattern

Required time complexity: O(N)
Required space complexity: O(N)

Examples:
areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true
areThereDuplicates('a', 'b', 'c', 'a') // true
*/

function areThereDuplicates(...args) {
    let frequencyCounter = {};
    var argString = args.join("");
    const duplicated = (element) => element > 1;
    for(let val of argString) {
        frequencyCounter[val] = (frequencyCounter[val] || 0) + 1
    }

    return Object.values(frequencyCounter).some(duplicated);   
}

areThereDuplicates('a', 'b', 'c', 'a')