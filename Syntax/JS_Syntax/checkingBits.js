function bitChecker(value) {
    value >> 3;
    var mask = 1;
    if ((mask & value) == 1) {
        return true;
    }
    else return false;
}
console.log(bitChecker(333));
console.log(bitChecker(425));
console.log(bitChecker(2567564754));