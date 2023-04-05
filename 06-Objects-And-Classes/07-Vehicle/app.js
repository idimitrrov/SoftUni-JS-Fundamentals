/* 07. Class Vehicle - https://judge.softuni.org/Contests/1322/Objects-and-Classes-Exercise

Create a class with name Vehicle that has the following properties:
•	type – a string
•	model – a string
•	parts – an object that contains:
  o	engine – number (quality of the engine)
  o	power – number
  o	quality – engine * power
•	fuel – a number
•	drive – a function that receives fuel loss and decreases the fuel of the vehicle by that number
The constructor should receive the type, the model, the parts as an object and the fuel
In judge post your class (Note: all names should be as described)

*/

function vehicle() {
  class Vehicle {
    type;
    model;
    parts;
    fuel;

    constructor(type, model, parts, fuel) {
      this.type = type;
      this.mode = model;
      this.parts = parts;
      this.parts.quality = this.parts.engine * this.parts.power;
      this.fuel = fuel;
    }

    drive(fuelLoss) {
      this.fuel -= fuelLoss;
    }
  }

  let parts = {
    engine: 6,
    power: 100,
  };

  let vehicle = new Vehicle("a", "b", parts, 200);

  vehicle.drive(100);

  console.log(vehicle.fuel);
  console.log(vehicle.parts.quality);
}

vehicle();
