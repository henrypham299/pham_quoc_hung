const sumToNa = (n: number): number => {
    let sum = 0;
    for (let i = 1; i <=n; i++) {
        sum += i;
    }

    return sum;
}

const sumToNb = (n: number): number => {
    return Array.from({ length: n }, (_, i) => i + 1)
        .reduce((partialSum, a) => partialSum + a, 0);
}

const sumToNc = (n: number): number => {
    return n * (n + 1) / 2;
}

console.log(sumToNa(6));
console.log(sumToNb(6));
console.log(sumToNc(6));
