"use strict";

let toggleBoxes = document.querySelectorAll(".toggle-box");
let checkboxes = document.querySelectorAll(
  ".toggle-box input[type='checkbox']"
);
let monthlyPrices = document.querySelectorAll(
  ".pricing__container .price #monthly"
);
let yearlyPrices = document.querySelectorAll(
  ".pricing__container .price #annually"
);

toggleBoxes.forEach((toggleBox, index) => {
  toggleBox.onclick = function () {
    let circle = this.querySelector(".circle");
    let checkbox = this.querySelector("input[type='checkbox']");

    if (checkbox.checked) {
      circle.style.right = "24px";
      monthlyPrices.forEach((monthly) => (monthly.style.display = "none"));
      yearlyPrices.forEach((yearly) => (yearly.style.display = "inline-block"));
    } else {
      circle.style.right = "0px";
      monthlyPrices.forEach(
        (monthly) => (monthly.style.display = "inline-block")
      );
      yearlyPrices.forEach((yearly) => (yearly.style.display = "none"));
    }
  };
});
