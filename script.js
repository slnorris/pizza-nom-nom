// console.log("Hello World")

let pizzaFormElement = document.getElementById("pizza-order");
let pizzaOrderTable = document.getElementById("new-orders");
pizzaFormElement.addEventListener("submit", pizzaOrderLog);

function pizzaOrderLog(event) {
  event.preventDefault();
  let customerFirstName = document.getElementById("fname").value;
  let customerLastName = document.getElementById("lname").value;
  let pizzaSize = document.getElementById("sizes").value;
  let crustType = document.getElementById("crust").value;
  let toppingChoices = document.getElementById("toppings").value;
  let deliveryInstructions = document.getElementById("instructions").value;

 let newOrder = pizzaOrderTable.insertRow();
 let nameData = newOrder.insertCell(0);
 nameData.textContent = `${customerFirstName} ${customerLastName}`;
 let sizeData = newOrder.insertCell(1);
 sizeData.textContent = pizzaSize;
 let crustData = newOrder.insertCell(2);
 crustData.innerHTML = crustType;
 let toppingData = newOrder.insertCell(3);
 toppingData.innerHTML = toppingChoices;
 let instructionData = newOrder.insertCell(4);
 instructionData.innerHTML = deliveryInstructions;
}
