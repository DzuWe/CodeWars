const log = (base, x) => Math.log(x) / Math.log(base)
const ceil = (num) => Math.round(num * 100000000000000) / 100000000000000
const isPP = (n) => {
    let N = 2;
    let pow = ceil(log(N, n));
    while(!Number.isInteger(pow)) {
        N++
        pow = ceil(log(N, n))

        if(pow < 2) {
            break
        }
    }

   return Number.isInteger(pow) ? [N, pow] : null
};