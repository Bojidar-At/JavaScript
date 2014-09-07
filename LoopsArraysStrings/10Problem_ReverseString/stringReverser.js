function reverseString(value) {
    var str = value;
    var reverse = [];
    for (var i = (str.length-1); i >= 0; i--) {
        reverse.push(str[i]);
    }
    return reverse.toString();

}
console.log(reverseString('sample'));
console.log(reverseString('softUni'));
console.log(reverseString('java script'));