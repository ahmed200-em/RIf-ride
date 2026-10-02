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

  return "";
}

function inputVerification() {
  if (VehicleName.value.trim() === "") {
    alert("Please enter a vehicle name.");
    return false;
  }

  if (VehicleType.value === "") {
    alert("Please enter a vehicle type.");
    return false;
  }

  if (
    VehiclePrice.value.trim() === "" ||
    isNaN(VehiclePrice.value) ||
    Number(VehiclePrice.value) <= 0
  ) {
    alert("Please enter a valid vehicle price.");
    return false;
  }

  return true;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!inputVerification()) {
    return;
  }

  let vehicle = new Vehicle(
    VehicleName.value.trim(),
    VehicleType.value,
    Number(VehiclePrice.value)
  );

  vehicleList.push(vehicle);

  let emptySection = document.querySelector(".empty-state-section");

  if (emptySection) {
    emptySection.style.display = "none";
  }

  let vehicleContainer = document.querySelector(".vehicle-list");

  if (!vehicleContainer) {
    vehicleContainer = document.createElement("div");
    vehicleContainer.classList.add("vehicle-list");
    form.parentElement.appendChild(vehicleContainer);
  }

  let vehicleCard = document.createElement("div");
  vehicleCard.classList.add("vehicle-card");

  vehicleCard.innerHTML = `
    <div class="image-wrapper">
      <img 
        src="${pictureUpdate(vehicle.type)}" 
        alt="${vehicle.name}" 
        class="vehicle-image"
      />
      <span class="status-badge badge-available">
        <i class="fa-solid fa-circle-check"></i> Available
      </span>
    </div>

    <div class="card-content">
      <h3 class="vehicle-title">${vehicle.name}</h3>

      <div class="info-row">
        <i class="fa-solid fa-car"></i>
        <span>${vehicle.type}</span>
      </div>

      <div class="info-row">
        <i class="fa-solid fa-coins"></i>
        <span class="price-text">${vehicle.price} MAD / day</span>
      </div>

      <div class="details-row">
        <span class="feature-pill">
          <i class="fa-solid fa-snowflake"></i> Has AC: Yes
        </span>

        <div class="days-picker">
          <label>Rental days</label>
          <input type="number" class="rental-days" value="1" min="1" />
        </div>
      </div>

      <div class="card-actions">
        <button type="button" class="btn btn-rent">
          <i class="fa-solid fa-lock"></i> Rent
        </button>

        <button type="button" class="btn btn-return">
          <i class="fa-solid fa-rotate-left"></i> Return
        </button>

        <button type="button" class="btn btn-delete">
          <i class="fa-solid fa-trash-can"></i> Delete
        </button>
      </div>
    </div>
  `;

  vehicleContainer.appendChild(vehicleCard);

  VehicleName.value = "";
  VehicleType.value = "";
  VehiclePrice.value = "";
});