// Types.js - Constructors used behind the scenes

// A constructor for defining new cars
function Car( options ) {

    // some defaults
    this.doors = options.doors ;
    this.state = options.state ;
    this.color = options.color ;
  
  }
  
  // A constructor for defining new trucks
  function Truck( options){
  
    this.state = options.state ;
    this.wheelSize = options.wheelSize ;
    this.color = options.color ;
  }
  
  
  // FactoryExample.js
  
  // Define a skeleton vehicle factory
  function VehicleFactory() {}
  
  // Define the prototypes and utilities for this factory
  
  // Our default vehicleClass is Car
  VehicleFactory.prototype.vehicleClass = Car;
  
  // Our Factory method for creating new Vehicle instances
  VehicleFactory.prototype.createVehicle = function ( options ) {
  
    if( options.vehicleType === "car" ){
      this.vehicleClass = Car;
    }else{
      this.vehicleClass = Truck;
    }
  
    return new this.vehicleClass( options );
  
  };
  
  // Create an instance of our factory that makes cars
  let carFactory = new VehicleFactory();
  let car = carFactory.createVehicle( { 
              vehicleType: "car", 
              color: "yellow", 
              doors: 6 } );
  
  // Test to confirm our car was created using the vehicleClass/prototype Car
  
  // Outputs: true
  //console.log( car instanceof Car ); 
  
  // Outputs: Car object of color "yellow", doors: 6 in a "brand new" state
  console.log( car );

  let movingTruck = carFactory.createVehicle( { 
    vehicleType: "truck", 
    state: "like new", 
    color: "red", 
    wheelSize: "small" } );

// Test to confirm our truck was created with the vehicleClass/prototype Truck



// Outputs: Truck object of color "red", a "like new" state 
// and a "small" wheelSize
console.log( movingTruck );

let newcar = carFactory.createVehicle({
    vehicleType: "car",
    color: "azul",
    doors: 5
});

console.log(newcar);

