function convertHP(value) {
    return Math.round((value / 0.746) * 100) / 100;
}

console.log(convertHP(75));
console.log(convertHP(150));
console.log(convertHP(1000));