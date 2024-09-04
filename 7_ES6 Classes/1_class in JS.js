//constructor function
function Vehicle(name, color, wheels){
    this.name = name;
    this.color = color;
    this.wheels = wheels;

    this.getDetails = function(){
        console.log(`
            This ${this.name} is ${this.color} in color. It has ${this.wheels} wheels`);
    };
}

// const car = new Vehicle('Car','blue',4);
// car.getDetails();

//Clss expression
// const Vehicle = class{

// }

//Classes in JS 
//Class  declaration
class VehicleClass {
    //intial properties
    name;
    color;
    wheels;

    //constructor function(optional)
    constructor(name,color,wheels){
        this.name = name;
        this.color = color;
        this.wheels = wheels;
    }

    //methods
    getDetails(){
        console.log(`
            This ${this.name} is ${this.color} in color. It has ${this.wheels} wheels`);
    };
}

//creating Instance of class
const veh1 = new VehicleClass('BMW','Black',4);
console.log(veh1);
veh1.getDetails();
