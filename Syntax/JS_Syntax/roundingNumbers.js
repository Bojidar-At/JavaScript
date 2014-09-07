function roundNumbers(value) {
    var a = Math.floor(value);
    var b = Math.round(value);
    return (a+"\n"+b);
}

console.log(roundNumbers(22.7));
console.log(roundNumbers(12.3));
console.log(roundNumbers(58.7));
