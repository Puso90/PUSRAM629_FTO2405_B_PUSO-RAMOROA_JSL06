// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};


//__________________________________________________________________________________________
// JAVASCRIPT TO HTML CODE
//__________________________________________________________________________________________

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuContainer = document.getElementById('menu');
    
    // Loop through each category and its items in the menu object
    for (const [meals, mealDetails] of Object.entries(menu)) {

        // Create an element to represent the category
        const categoryElement = document.createElement('h2');

        // Set the text content of the category element to the category name
        categoryElement.textContent = meals;

        // Append the category element to the menu container
        menuContainer.appendChild(categoryElement);

        // Create an element to represent a list of items
        const listOfItems = document.createElement('ul');

        // Append a list of items element to the menu container
        menuContainer.appendChild(listOfItems);
        //_____________________________________________________________________________________
        // INSIDE THE MEAL CATEGORY
        //_____________________________________________________________________________________
        // Loop through the items in the category and create list items
        mealDetails.forEach(item => {


            // Create a list item element
            const listItem = document.createElement('li');

            // Set the text content of the list item element to the item name
            listItem.textContent = item;

            // Attach a click event listener to the list item to add it to the order
            listItem.addEventListener("click", () => addToOrder(item));

            // Append the list item to the list of items
            listOfItems.appendChild(listItem);

        });
    }

}


//__________________________________________________________________________________________
// JAVASCRIPT BACK OFFICE ENGINE
//__________________________________________________________________________________________

// Callback function for adding an item to the order
function addToOrder(itemName) {

    // Get the order items list and the order total element from the HTML
    const orderItems = document.getElementById('order-items');
    const orderTotal = document.getElementById('order-total');

    // Create a list item for the order
    const orderList = document.createElement('li');

    // Set the text content of the list item to the item name
    orderList.textContent = itemName;

    // Append the list item to the order items list
    orderItems.appendChild(orderList);

    // Calculate and update the total price
        const currentTotal = parseFloat(orderTotal.textContent); 
        const itemPrice = Math.floor(Math.random() * 1000) + 1; 
        const newTotal = itemPrice + currentTotal; 
        orderTotal.textContent = newTotal.toFixed(2);

    // Update the text content of the order total element with the new total
    orderTotal.textContent = newTotal;
}

//__________________________________________________________________________________________
// JAVASCRIPT TO HTML VISIBILITY KEY - CALLING FUNCTION
//__________________________________________________________________________________________

// Function to initialize the menu system
function initMenuSystem(menu) {

    // Call the function to display menu items
    displayMenuItems(menu);

}

// Start the menu system by calling the init function
initMenuSystem(menu);






//__________________________________________________________________________________________
// REFERENCE USED.

/* forEach loop:

1.  https://www.youtube.com/watch?v=49btOoxofyA&pp=ygUcZm9yIGVhY2ggbG9vcCBpbiBqYXZhc2NyaXB0IA%3D%3D
2.  https://www.youtube.com/watch?v=qdSD5MiqQg0&pp=ygUcZm9yIGVhY2ggbG9vcCBpbiBqYXZhc2NyaXB0IA%3D%3D



// Researched loops tried:
    
    1.  Object.entries(menu).forEach((menuItem) => {
        onsole.log(menuItem)
        });

    2.  Object.entries(menu).forEach((item, menuItem ) => {
        console.log(menu)

// hhhh

    1.  const currentTotal = parseFloat();
        const itemPrice = 60; 
        const newTotal = itemPrice + currentTotal;
        orderTotal.textContent = newTotal.toFixed(2);

    2.  Revomed: .toFixed(2) | because it is not necessary, 
        as I have set a random price floor for: itemPrice

    3. Added orderTotal.textContent inside parseFloat() - 
       this helped in making each item added to total


// COMMENTS & NOTES:

    1. Found it very hard and trick to not see my console.log working
    2. Hoisting, I think... is what was complicating my ability to console.log() - very frustrating*

*/
//__________________________________________________________________________________________
 

    