// Sample menu data
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// HINT: Function to display menu items by category
function displayMenuItems(menu) {
    // HINT: Get a reference to the menu container in your HTML
    const menuContainer = document.getElementById('menu');
    // HINT: Loop through each category and its items in the menu object
    for (const [category, items] of Object.entries()) {
        // HINT: Create an h3 element for the category
        const categoryElement = document.createElement('h3');
        // HINT: Append the category heading to the menu container
        menuContainer.appendChild(categoryElement);
        // HINT: Create a list element for the items in the category
        const listOfItems = document.createElement('ul');
        // HINT: Loop through the items in the category and create list items
        Object.entries(menu).forEach(([menuItem]) => {
            // HINT: Attach a click event listener to the list item to add it to the order
            listItem.addEventListener("click", () => addToOrder(menuItem));
            // HINT: Append the list item to the category's list
            listOfItems.appendChild(listItem);
        });
    }
}

// HINT: Callback function for adding an item to the order
function addToOrder(itemName) {
    // HINT: Get references to the order items list and order total element in your HTML
    const orderItems = document.getElementById('order-items');
    const orderTotal = document.getElementById('order-total');
    // HINT: Create a list item for the order
    const orderList = document.createElement('li');
    // HINT: Append the list item to the order items list
    orderItems.appendChild(orderList);
    // HINT: Calculate and update the total price
    const currentTotal = parseFloat();
    const itemPrice = 60; // Assuming each item costs R90 (you can customize this)
    const newTotal = ;
    orderTotal.textContent = newTotal.toFixed(2);
}

// HINT: Function to initialize the menu system
function initMenuSystem() {
    // HINT: Call the displayMenuItems function to display the menu
    displayMenuItems(menu);
}

// HINT: Call the init function to start the menu system
initMenuSystem(menu);
