let form = document.getElementById("addVehicleForm");
let vehicleName = document.getElementById("vehicleName");
let vehicleType = document.getElementById("vehicleType");
let vehiclePrice = document.getElementById("dailyPrice");
let errorMessage = document.getElementById("error-message");
let vehicleList = [];

class Vehicle {
  constructor(name, type, price) {
    this.name = name;
    this.type = type;
    this.price = price;
  }
}

class Car extends Vehicle {
  constructor(name, type, price) {
    super(name, type, price);
  }

}

class Motorcycle extends Vehicle {
  constructor(name, type, price) {
    super(name, type, price);
  }
}

class Bicycle extends Vehicle {
  constructor(name, type, price) {
    super(name, type, price);
  }
}

function inputVerification() {
  if (vehicleName.value.trim() === "") {
    errorMessage.textContent = "! Vehicle name is required";
    return false;
  } else if (vehicleType.value === "") {
    errorMessage.textContent = "! Vehicle type is required";
    return false;
  } else if (
    vehiclePrice.value === "" ||
    isNaN(vehiclePrice.value) ||
    Number(vehiclePrice.value) <= 0
  ) {
    errorMessage.textContent =
      "! Vehicle price is required and must be a positive number";
    return false;
  } else {
    errorMessage.textContent = "";
    return true;
  }
}
function addVehicle() {
  let name = vehicleName.value.trim();
  let type = vehicleType.value;
  let price = parseFloat(vehiclePrice.value);

  if (inputVerification()) {
    if (type === "Car") {
      let newCar = new Car(name, type, price);
      vehicleList.push(newCar);
    } else if (type === "Motorcycle") {
      let newMotorcycle = new Motorcycle(name, type, price);
      vehicleList.push(newMotorcycle);
    } else if (type === "Bicycle") {
      let newBicycle = new Bicycle(name, type, price);
      vehicleList.push(newBicycle);
    }
  }
}
function updateCardImages() {
  if (vehicleType.value === "Car") {
    return "assets/redcar.jpg";
  }
  if (vehicleType.value === "Motorcycle") {
    return "assets/redmotocycle.jpg";
  }
  if (vehicleType.value === "Bicycle") {
    return "assets/bicycle1.jpg";
  }
}
function createVehicleCard(vehicle) {
  let card = document.createElement("div");
  let cards = document.createElement("div");
  let emptydiv = document.getElementById("empty-state");
  let emptysection = document.querySelector(".empty-state-section");
  emptydiv.style.display = "none";
  card.className = "vehicle-card";
  cards.className = "vehicle-cards";
  cards.appendChild(card);
  emptysection.appendChild(cards);
  card.innerHTML = `
    <div class="image-wrapper">
      <img src="${updateCardImages()}" alt="${vehicle.name}" class="vehicle-image" />
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
  `;
  return card;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (inputVerification()) {
    console.log("Form is valid!");
    addVehicle();
    createVehicleCard(vehicleList[vehicleList.length - 1]);
  }
});
