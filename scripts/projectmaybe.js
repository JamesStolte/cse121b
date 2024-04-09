// Function to fetch groceries data from external JSON file
function fetchGroceriesData() {
    return fetch('groceries.json')
        .then(response => response.json());
}

// Function to filter groceries by type
function filterGroceriesByType(groceries, type) {
    return groceries.filter(grocery => grocery.Type === type);
}

// Function to display groceries on the screen
function displayGroceries(groceries) {
    const groceriesContainer = document.getElementById('groceriesContainer');
    groceriesContainer.innerHTML = '';

    groceries.forEach(grocery => {
        const item = document.createElement('div');
        item.innerHTML = `<p>${grocery.Name} - $${grocery.Price}</p>`;
        groceriesContainer.appendChild(item);
    });
}

// Function to handle adding items to the list
function addItemToList() {
    const selectElement = document.getElementById('groceryType');
    const selectedType = selectElement.value;
    
    fetchGroceriesData()
        .then(data => {
            const filteredGroceries = filterGroceriesByType(data, selectedType);
            displayGroceries(filteredGroceries);
        })
        .catch(error => console.error('Error fetching groceries data:', error));
}

// Function to clear all items from the list
function clearList() {
    const listContainer = document.getElementById('listContainer');
    listContainer.innerHTML = '';
}

// Function to handle switching the number of items to add
function switchQuantity() {
    const quantitySwitch = document.getElementById('quantitySwitch');
    const quantityLabel = document.getElementById('quantityLabel');
    const quantity = quantitySwitch.checked ? 'Many' : 'One';
    quantityLabel.textContent = `Quantity to Add: ${quantity}`;
}

// Initialize event listeners
document.getElementById('addItemButton').addEventListener('click', addItemToList);
document.getElementById('clearListButton').addEventListener('click', clearList);
document.getElementById('quantitySwitch').addEventListener('change', switchQuantity);