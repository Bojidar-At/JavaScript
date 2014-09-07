function variablesTypes(value) {
    return ("\"My name is: " + value[0] + " //type is " + typeof (value[0])
        + "\nMy age: " + value[1] + " //type is " + typeof (value[1])
        + "\nI am male: " + value[2] + " //type is " + typeof (value[2])
        + "\nMy favorite foods are: " + value[3] + " //type is " + typeof (value[3]));



}
console.log(variablesTypes(["Pesho", 22, true, ['fries', 'banana', 'cake']]));