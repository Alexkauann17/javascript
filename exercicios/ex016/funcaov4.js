function fatorial(n) {
    let fat = 1
    for ( let c = n; c > 1;c--) {
        console.log(`${c}x${fat} =`,fat *= c)
    }
    return fat
}
console.log(fatorial(55))