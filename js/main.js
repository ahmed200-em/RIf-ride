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
    let emptySection = document.querySelector(".empty-state-section");
    if (emptySection) {
      emptySection.style.display = "none";
    } else {
      emptySection.innerHTML = `
<div class="vehicle-card">
    <div class="image-wrapper">
      <img src=${pictureUpdate(VehicleType.value)} alt="${VehicleName.value}" class="vehicle-image" />
      <span class="status-badge badge-available">
        <i class="fa-solid fa-circle-check"></i> Available
      </span>
    </div>
    <div class="card-content">
      <h3 class="vehicle-title">${VehicleName.value}</h3>
      <div class="info-row">
        <i class="fa-solid fa-car"></i>
        <span>${VehicleType.value}</span>
      </div>
      <div class="info-row">
        <i class="fa-solid fa-coins"></i>
        <span class="price-text">${VehiclePrice.value} MAD / day</span>
      </div>
      <div class="details-row">
        <span class="feature-pill">
          <i class="fa-solid fa-snowflake"></i> Has AC: Yes
        </span>
        <div class="days-picker">
          <label for="days">Rental days</label>
          <input type="number" id="days" value="1" min="1" />
        </div>
      </div>
      <div class="card-actions">
        <button class="btn btn-rent">
          <i class="fa-solid fa-lock"></i> Rent
        </button>
        <button class="btn btn-return">
          <i class="fa-solid fa-rotate-left"></i> Return
        </button>
        <button class="btn btn-delete">
          <i class="fa-solid fa-trash-can"></i> Delete
        </button>
      </div>
    </div>
  </div>
      `;
    }
  }
});
