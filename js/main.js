let form = document.getElementById("addVehicleForm");
let VehicleName = document.getElementById("vehicleName");
let VehicleType = document.getElementById("vehicleType");
let VehiclePrice = document.getElementById("dailyPrice");

let vehicleList = [];

class Vehicle {
  constructor(name, type, price) {
    this.name = name;
    this.type = type;
    this.price = price;
  }
}

class cars extends Vehicle {}
class motorcycle extends Vehicle {}
class bicycle extends Vehicle {}

function pictureUpdate(vehicleType) {
  if (vehicleType === "bicycle1") {
    return "assets/bicycle1.jpg";
  }
  if (vehicleType === "bicycle2") {
    return "assets/bicycle2.jpg";
  }
  if (vehicleType === "bluecar") {
    return "assets/bluecar.jpg";
  }
  if (vehicleType === "redcar") {
    return "assets/redcar.jpg";
  }
  if (vehicleType === "redmotorcycle") {
    return "assets/redmotorcycle.jpg";
  }
  if (vehicleType === "bluewmotorcycle") {
    return "assets/bluewmotorcycle.jpg";
  }
}
function inputVerification() {
  if (VehicleName.value === "" || VehicleName.value.trim() === "") {
    alert("Please enter a vehicle name.");
    return false;
  }
  if (VehicleType.value === "") {
    alert("Please enter a vehicle type.");
    return false;
  }
  if (
    VehiclePrice.value === "" ||
    isNaN(VehiclePrice.value) ||
    VehiclePrice.value <= 0
  ) {
    alert("Please enter a vehicle price.");
    return false;
  }
  return true;
}
form.addEventListener("submit", function (event) {
  event.preventDefault();
    if (!inputVerification()) { 
        
    }
});