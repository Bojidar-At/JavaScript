﻿function createArray(value) {
    var arr = value;
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * 5;
    }
    return arr;
        

}
console.log(createArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]))