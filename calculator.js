const mark = document.querySelector("#mark");
const model = document.querySelector("#models");
const age = document.querySelector(".age");
const distance = document.querySelector(".distance");
const btn = document.querySelector(".btn");
let markPrice = mark.value;
let modelPrice = model.value;
let agePrice;
let distancePrice;
let sums = [];

function getValue() {
  document.querySelector(".result").innerHTML = "";
  sums = [];
  getMarkPrice();
  getModelPrice();
  getAgePrice();
  getDistancePrice();
  calcSum(sums);
}
btn.addEventListener("click", getValue);

function getMarkPrice() {
  switch (mark.value) {
    case "Kia":
      markPrice = 400000;
      sums.push(markPrice);
      break;
    case "Toyota":
      markPrice = 500000;
      sums.push(markPrice);
      break;
    case "BMW":
      markPrice = 600000;
      sums.push(markPrice);
      break;
    case "LADA":
      markPrice = 300000;
      sums.push(markPrice);
      break;
    case "Mercedes":
      markPrice = 1000000;
      sums.push(markPrice);
      break;
    case "Hyundai":
      markPrice = 450000;
      sums.push(markPrice);
      break;
    case "Volkswagen":
      markPrice = 550000;
      sums.push(markPrice);
      break;
    case "Renault":
      markPrice = 450000;
      sums.push(markPrice);
      break;
    case "Skoda":
      markPrice = 300000;
      sums.push(markPrice);
      break;
    case "Nissan":
      markPrice = 700000;
      sums.push(markPrice);
      break;
    case "":
      alert("Выберите марку автомобиля");
  }
}
function getModelPrice() {
  switch (model.value) {
    case "benzin":
      modelPrice = 0;
      sums.push(modelPrice);
      break;
    case "diesel":
      modelPrice = markPrice * 0.05;
      sums.push(modelPrice);
      break;
    case "elektro":
      modelPrice = markPrice * 0.3;
      sums.push(modelPrice);
      break;
    case "":
      alert("Выберите тип топлива");
  }
}
function getAgePrice() {
  if (document.querySelector("#y1").checked) {
    agePrice = markPrice * -0.25;
    sums.push(agePrice);
  }
  if (document.querySelector("#y2").checked) {
    agePrice = markPrice * -0.3;
    sums.push(agePrice);
  }
  if (document.querySelector("#y3").checked) {
    agePrice = markPrice * -0.35;
    sums.push(agePrice);
  }
  if (document.querySelector("#y4").checked) {
    agePrice = markPrice * -0.4;
    sums.push(agePrice);
  }
}
function getDistancePrice() {
  if (document.querySelector("#d1").checked) {
    distancePrice = markPrice * -0.25;
    sums.push(distancePrice);
  }
  if (document.querySelector("#d2").checked) {
    distancePrice = markPrice * -0.3;
    sums.push(distancePrice);
  }
  if (document.querySelector("#d3").checked) {
    distancePrice = markPrice * -0.35;
    sums.push(distancePrice);
  }
  if (document.querySelector("#d4").checked) {
    distancePrice = markPrice * -0.4;
    sums.push(distancePrice);
  }
}
function calcSum(arr) {
  let price = 0;
  for (let i = 0; i < arr.length; i++) {
    price += arr[i];
  }
  document.querySelector(".result").innerHTML = price;
}
