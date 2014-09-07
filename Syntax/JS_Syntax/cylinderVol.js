function calcCylinderVol(radius, height) {
    return (Math.PI * height * radius * radius).toFixed(3);
}
console.log(calcCylinderVol(2, 4));
console.log(calcCylinderVol(5, 8));
console.log(calcCylinderVol(12, 3));