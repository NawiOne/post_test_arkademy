const fib = (num) => {
    if(num == 1) return [0,1];
    else if(num == 0) return;
    else {
        let res = fib(num - 1);
        res.push(res[res.length - 1] + res[res.length - 2])
        return res
    }
}

console.log(fib(11))