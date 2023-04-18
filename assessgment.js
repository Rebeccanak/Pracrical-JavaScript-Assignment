
//You manage a grocery store and need to keep track of the inventory of 
// various items. You will use arrays to store the data and various functions
//  to manipulate and analyze the data. 

// Create an array containing the names of all items in the inventory maximum 
// of 10.

let inventoryItems = ["lipstick", "jewlery", "braids", "shampo", "vaselines"];


// Create a separate array with the corresponding 
// stock quantities of each item maximum of 10.
let stockQuantities = [200, 105, 102, 80, 25];
// Write a function to add a new item to the inventory,
//  updating both arrays.
  
 // Create arrays for inventory items and stock quantities

// Function to add a new item to the inventory, updating both arrays
function addItem(itemName, quantity) {
  // let empty = []
  if (inventoryItems.length >= 10 || stockQuantities.length >= 10) {
    return "Maximum capacity reached";
  } else {
    inventoryItems.push(itemName);
    stockQuantities.push(quantity);
    // return [inventoryItems, StockQuantities];
  }
}
console.log(addItem("pineapples",10));
console.log(inventoryItems)
console.log(stockQuantities)
// Function to update the stock quantity of an existing item
function updateStock(itemName, newQuantity) {
// updated = [];
  let index = inventoryItems.indexOf(itemName);
  if (index !== -1) {
    stockQuantities[index] = newQuantity;
    return (`quantity of ${itemName} updated to ${newQuantity}`);
  } else {
    return "Item not found";
  }
}
updateStock("braids", 150);
// console.log(inventoryItems)
console.log(stockQuantities)
// let updated = updateStock(("oranges",20))
// console.log(updated());
// Function to calculate the total number of items in the inventory
function totalItems() {
  let total = 0;
  for (let i = 0; i<stockQuantities.length; i++) {
    total += stockQuantities[i];
  }
  return total;
}
console.log(totalItems());
// Function to find the item with the lowest stock quantity
function findLowestStock() {
  let lowestStock = stockQuantities[0];
  let lowestIndex = 0;
  for (let i = 1; i < stockQuantities.length; i++) {
    if (stockQuantities[i] < lowestStock) {
      lowestStock = stockQuantities[i];
      lowestIndex = i;
    }
  }
  return inventoryItems[lowestIndex];
}
console.log(findLowestStock());

// // Write a function to update the stock quantity of an existing item.
// // Write a function to calculate the total number of items in the inventory.
// // Write a function to find the item with the lowest stock quantity.

// let inventory = ["juices","eggs","bananas", "oranges", "bread","pear","bandblue","cutlery","honey",];
// let stock = [100, 500, 700, 200,350,290,50,45,410];

// // Function to add a new item to the inventory
// function addItem(name, quantity) {
//   stock = []
//   if (inventory.length < 10) {
//     inventory.push(name);
//     stock.push(quantity);
//     console.log(`Added ${name} to the inventory with a stock of ${quantity}`);
//   } else {
//     console.log("Inventory is full, cannot add new item");
//   }
// }

// // Function to update the stock quantity of an existing item
// function updateStock(name, quantity) {
//   let index = inventory.indexOf(name);
//   if (index !== -1) {
//     stock[index] = quantity;
//     console.log(`Updated stock of ${name} to ${quantity}`);
//   } else {
//     console.log(`${name} not found in inventory`);
//   }
// }

// // Function to calculate the total number of items in the inventory
// function countItems() {
//   let count = 0;
//   for (let i = 0; i < inventory.length; i++) {
//     count += stock[i];
//   }
//   console.log(`Total number of items in inventory: ${count}`);
// }

// // Function to find the item with the lowest stock quantity
// function findLowest() {
//   let min = stock[0];
//   let index = 0;
//   for (let i = 1; i < stock.length; i++) {
//     if (stock[i] < min) {
//       min = stock[i];
//       index = i;
//     }
//   }
//   console.log(`Item with lowest stock: ${inventory[index]} (${min} left)`);
// }

// // Example usage
// addItem("bags", 9);
// updateStock("juices", 2);
// countItems();
// findLowest();