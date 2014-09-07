function printNumber(n) {    
    var obj = [];
    for (var i = 0; i <= n; i++) {        
        if ((i % 4 != 0) && (i % 5 != 0)) {
            obj.push(i);
        }       
    }
    if (obj.length > 0) {
        return obj.toString();
    }
    else {
        return "no";
    }
   
}
console.log(printNumber(20));
console.log(printNumber(-5));
console.log(printNumber(13));