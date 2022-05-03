const solution = (number) => {
    if(number <= 0) return 0;
    const arr = new Array(number - 1).fill(0).map((el, idx) => idx + 1);
    return arr
    .filter(el => el % 3 === 0 || el % 5 === 0)
    .reduce((acc, el) => acc + el, 0)
}