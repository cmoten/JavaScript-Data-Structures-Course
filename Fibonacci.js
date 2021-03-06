function fib_recursive(n){
    if(n <= 2) return 1;
    return fib_recursive(n - 1) + fib_recursive(n - 2);
}

function fib_memoize(n, memo = []){
    if(memo[n] !== undefined) return memo[n];
    if(n <= 2) return 1;
    let res = fib_memoize(n-1, memo) + fib_memoize(n-2, memo);
    memo[n] = res;
    return res;
}

function fib_tabulation(n){
    if(n <= 2) return 1;
    let fibNums = [0, 1, 1];
    for(let i = 3; i <= n; i++){
        fibNums[i] = fibNums[i -1] + fibNums[i - 2];
    }
    return fibNums[n];
}
