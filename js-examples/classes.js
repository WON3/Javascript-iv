// class Vehicle{
//     constructor(){
//         this.miles = 0;
//     }

//     drive(){
//         this.miles += 50;
//         return this.miles
//     }

// }

// class Car extends Vehicle{
//     constructor(){
//         super()
//         this.wheels = 4;
//     }

    
// }

function Car(){
    this.wheels = 4;
    let miles = 0;
    this.drive = function(){
        miles += 50;
        return miles
    }
}


const myCar = new Car();
console.log(myCar.miles)
const yourCar = new Car();
const RyanCar = new Car();
const camiloCar = new Car();
const justinCar = new Car();
const erikaCar = new Car();
const tannerCar = new Car();
console.log(myCar.drive())
console.log(myCar.drive())
console.log(myCar.drive())
console.log(myCar.drive())
console.log(myCar.drive())
console.log(myCar.drive())
console.log(myCar.drive())
console.log(myCar.drive())
console.log(myCar.drive())
console.log(myCar.drive())