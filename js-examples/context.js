// context is what this means

class Vehicle{
    constructor(){
        this.miles = 0;
    }

    drive(){
        this.miles += 50;
        return this.miles
    }

}

class Car extends Vehicle{
    constructor(){
        super()
        this.wheels = 4;
        this.whatIsThis = whatIsThis.bind(this)
    }
   
}

function whatIsThis(){
    return this
}

const myCar = new Car();
const yourCar = new Car();
yourCar.drive()
yourCar.drive()
yourCar.drive()
console.log(myCar.whatIsThis())
console.log(yourCar.whatIsThis())



console.log(whatIsThis())
console.log(myCar.whatIsThis())
console.log(new whatIsThis())


const whatIsMyCar = whatIsThis.bind(myCar)
console.log(whatIsMyCar())

const whatIsYourCar = yourCar.whatIsThis;
console.log(whatIsYourCar())

// bind vs apply vs call

const whatIsMyCar2 = whatIsThis.bind(myCar)
console.log(whatIsMyCar2())

const whatIsMyCarCall = whatIsThis.call(myCar)
console.log(whatIsMyCarCall)


function driveACar(num1, num2, num3){
    this.miles += num1 + num2+ num3;
    return this.miles
}

const driveACarBind = driveACar.bind(myCar);
console.log(driveACarBind(1, 2, 4))

const driveACarCall = driveACar.call(myCar, 1, 2, 4 );
console.log(driveACarCall)

const driveACarApply = driveACar.apply(myCar,[ 1, 2, 4] );
console.log(driveACarApply)