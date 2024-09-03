const car = {
    name: 'car',
    color:'black',
    getDetails(brand,seats){
        console.log(`This is a ${this.color} ${this.name} of ${brand} company. It has ${seats} seats`);
    },
};
const bus = {
    name: 'bus',
    color:'blue',
};


car.getDetails("BMW",5);

//call method
car.getDetails.call(bus,"Star", 50);

//apply method
car.getDetails.apply(bus,['Gold',30]);

//bind method
const veh1 = car.getDetails.bind(bus);
veh1("Mercedes",40);

