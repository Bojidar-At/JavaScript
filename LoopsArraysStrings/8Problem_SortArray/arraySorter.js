function sortArray(value) {
    var obj = value;
    obj.sort(function (a, b) { return a - b });
    return obj;
}
console.log(sortArray([5, 4, 3, 2, 1]));
console.log(sortArray([12, 12, 50, 2, 6, 22, 51, 712, 6, 3, 3]));