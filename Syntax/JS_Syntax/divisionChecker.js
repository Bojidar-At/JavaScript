function divisionBy3(value) {
    var str = value.toString();
    var sum = 0;

    for (var i = 0; i < str.length; i++) {
        sum += parseInt(str.charAt(i), 10);
    }

    if (sum % 3 == 0) {
        return ("the number is divided by 3 without remainder");
    }
    else {
        return ("the number is not divided by 3 without remainder");
    }
}
console.log(divisionBy3(12));
console.log(divisionBy3(189));
console.log(divisionBy3(591));
// added one more value which returns false
console.log(divisionBy3(112));