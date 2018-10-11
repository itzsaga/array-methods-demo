const items = [
  { name: "Xbox", price: "299" },
  { name: "PS4", price: "499" },
  { name: "iPhone", price: "999" }
];

const expensiveItems = items.filter(item => {
  return item.price > 300;
});

const modifiedItems = items.map(item => {
  return { name: item.name, price: `$${item.price}` };
});

const itemsUl = document.getElementById("items");

for (let i = 0; i < item.length - 2; i++) {
  
}

modifiedItems.forEach(function(item) {
  const itemLi = document.createElement("li");
  const liText = document.createTextNode(`${item.name}: ${item.price}`);
  itemLi.appendChild(liText);
  itemsUl.appendChild(itemLi);
});

const expensiveItemsUl = document.getElementById("expensive-items");

expensiveItems.forEach(function(item) {
  const itemLi = document.createElement("li");
  const liText = document.createTextNode(`${item.name}: $${item.price}`);
  itemLi.appendChild(liText);
  expensiveItemsUl.appendChild(itemLi);
});

const totalPrice = items.reduce((total, item) => {
  return total + parseInt(item.price);
}, 0);

const averagePrice = totalPrice / items.length;

const averageEl = document.getElementById("average-price");
averageEl.append(`$${averagePrice}`);

console.log("items:", items);
console.log("modifiedItems:", modifiedItems);
console.log("expensiveItems:", expensiveItems);
