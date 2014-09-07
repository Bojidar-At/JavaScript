function convertDigitToWord(value) {
    switch (value) {
        case (0): return value = "zero";
            break;
        case (1): return value = "one";
            break;
        case (2): return value = "two";
            break;
        case (3): return value = "three";
            break;
        case (4): return value = "four";
            break;
        case (5): return value = "five";
            break;
        case (6): return value = "six";
            break;
        case (7): return value = "seven";
            break;
        case (8): return value = "eight";
            break;
        case (9): return value = "nine";
            break;
    }
}
console.log(convertDigitToWord(8));
console.log(convertDigitToWord(3));
console.log(convertDigitToWord(5));