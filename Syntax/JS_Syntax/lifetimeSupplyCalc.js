function calcSupply(age, maxAge, food ) {
    var time = (maxAge - age) * 365;
    var sum = time * food;
    var myArray = ['tomatos', 'fruit', 'chocolate', 'nuts', 'pasta', 'bread', 'knuckle', 'frog legs'];
    var fruit = myArray[Math.floor(Math.random() * myArray.length)];
    return (sum + "kg of " + fruit + " would be enough until I am " + maxAge + " years old.");
}
console.log(calcSupply(38, 118, 0.5));
console.log(calcSupply(20, 87, 2));
console.log(calcSupply(16, 102, 1.1));