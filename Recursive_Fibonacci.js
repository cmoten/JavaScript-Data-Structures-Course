/*
Write a fucntion called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the 
Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and every number
thereafter is the sum of the previous two numbes.

Examples:

fib(4) // 3
fib(10) // 55
fib(28) // 317811
fib(35) // 9227465
*/

function fib(num) {
    if(num <= 2) return 1;

    return fib(num -2) + fib(num -1)
}

fib(35)