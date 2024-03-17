// const seats = document.querySelectorAll(".seat");
// let seatClick = 0;
// for (const seat of seats) {
//   seat.addEventListener("click", function () {
//     if (!seat.classList.contains("bg-green-500")) {
//       if (seatClick < 4) {
//         seat.classList.add("bg-green-500");
//         seatClick++;
//         const seatInner = seat.innerHTML;
//         const seatNames = document.getElementById("seatName");
//         seatNames.innerText = seatInner;
//         newSeatCreate();
//       }
//     } else {
//       seat.classList.remove("bg-green-500");
//       seatClick--;
//     }
//   });
// }

// function getInnerHtml(elementID) {
//   const element = document.getElementById(elementID);
//   element.innerHTML;
//   console.log(element);
// }

// function newSeatCreate() {
//   const newSeats = document.createElement("div");
//   newSeats.innerHTML = `   <div class="text-xl py-4 flex justify-between">
//                   <p id="seatName">${seatInner}</p>
//                   <p>Economoy</p>
//                   <p>550</p>
//                 </div>`;
//   document.getElementById("newSeat").appendChild(newSeats);
// }

const seats = document.querySelectorAll(".seat");
let seatClick = 0;
const newSeatsContainer = document.getElementById("newSeat");
const selectedSeats = [];
const seatCount = document.getElementById("countSeat");
const totalSeat = document.getElementById("totalSeat");
const totalCost = document.getElementById("totalCost");

for (const seat of seats) {
  seat.addEventListener("click", function () {
    if (!seat.classList.contains("bg-green-500")) {
      if (seatClick < 4) {
        seat.classList.add("bg-green-500");
        seatClick++;
        const seatInner = seat.innerText;
        selectedSeats.push(seatInner);
        newSeatCreate(seatInner);
        updateSeatCount();
        updateSeatTotal();
        updateTotalCost();
      }
    } else {
      seat.classList.remove("bg-green-500");
      seatClick--;
      const index = selectedSeats.indexOf(seat.innerText);
      if (index > -1) {
        selectedSeats.splice(index, 1);
        const seatToRemove = document.getElementById(seat.innerText);
        newSeatsContainer.removeChild(seatToRemove);
        updateSeatCount();
        updateSeatTotal();
        updateTotalCost();
      }
    }
  });
}

function updateSeatCount() {
  seatCount.innerText = 40 - seatClick;
}

function updateSeatTotal() {
  totalSeat.innerText = seatClick;
}

function updateTotalCost() {
  totalCost.innerText = 550 * seatClick;
}

document.getElementById("apply").addEventListener("click", function () {
  const discountPercent = document.getElementById("discountPercent").value;

  if (discountPercent === "Couple 20") {
    const totalCostValue = parseFloat(totalCost.innerText);
    if (totalCostValue) {
      const discount = (totalCostValue * 20) / 100;
      const discountedPrice = totalCostValue - discount;
      const discountBefore = document.getElementById("discountBefore");
      discountBefore.innerText = discountedPrice;
    }
  } else if (discountPercent === "NEW15") {
    const totalCostValue = parseFloat(totalCost.innerText);
    if (totalCostValue) {
      const discount = (totalCostValue * 15) / 100;
      const discountedPrice = totalCostValue - discount;
      const discountBefore = document.getElementById("discountBefore");
      discountBefore.innerText = discountedPrice;
    }
  }
});

function newSeatCreate(seatInner) {
  const newSeat = document.createElement("div");
  newSeat.setAttribute("id", seatInner);
  newSeat.innerHTML = `
      <div class="text-xl py-4 flex justify-between">
        <p>${seatInner}</p>
        <p>Economy</p>
        <p>550</p>
      </div>`;
  newSeatsContainer.appendChild(newSeat);
}
