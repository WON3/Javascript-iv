function outer(number){
    // let hiddenNumber = number;
    // some super complex code 
    return function  inner(){
        return ++number;
    }
}

const innerFunction = outer(4);
console.log(innerFunction())
console.log(innerFunction())
console.log(innerFunction())
console.log(innerFunction())
console.log(innerFunction())

function calculator(){
    total = 0;
    return {
        add: function(num){
            total += num;
            return total;
        },
        subtract: function(num){
            total -= num;
            return total;
        },
        divide: function(num){
            total /= num;
            return total;
        },
        multiply: function(num){
            total *= num;
            return total;
        }
    }
}

const myCalculator = calculator();
console.log(myCalculator.add(24))
console.log(myCalculator.subtract(4))
console.log(myCalculator.divide(4))
console.log(myCalculator.multiply(4))


function secretIdenties(){
    const obj = {
        superman: 'Clark Kent',
        batman: 'Clark Kent',
        robin: 'Dick Grayson',
        greenLatern: 'Hal Jordan'
    }

    return function(superHero){
        return obj[superHero]
    }
}

const ident = secretIdenties();
console.log(ident('superman'))