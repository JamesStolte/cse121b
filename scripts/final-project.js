/* Declare and initialize global variables */
const groceriesElement = document.getElementById("groceries");
let groceryList = [];
let activeList = [];

/* async displayGrocery Function */
const displayGroceries = (groceries) => {
    groceries.forEach(grocery => {
        const art = document.createElement("article");
        const h3 = document.createElement("h3");
        h3.textContent = grocery.Name;
        const itemImg = document.createElement("img");
        itemImg.src = grocery.Path;
        itemImg.alt = grocery.Name;
        const button = document.createElement("button");
        button.id = grocery.Name;
        button.textContent = `Add ${grocery.Name} to list`;
        art.appendChild(h3);    
        art.appendChild(itemImg);
        art.appendChild(button);
        groceriesElement.appendChild(art);
    });
};

/* async getGroceries Function using fetch()*/
const getGroceries = async () => {
  const response = await fetch("https://run.mocky.io/v3/f491fce0-0462-4f3f-a167-ac66fdf9ed12"); 
  groceryList = await response.json(); 
  displayGroceries(groceryList); 
}

function addItemToArray(name, price) {
  activeList.push({ name: name, price: price });
}

function handleButtonClick(groceries) {
  let name = groceries.filter(grocery => grocery.Name)
  addItemToArray(name, price);
  console.log("Item added to array:", activeList);
}

/* reset Function */
const reset = () => {
    groceriesElement.innerHTML = "";
  }

  /* filterGroceries Function */
const filterGroceries = (groceries) => {
    reset();
    console.log(groceries);
    const filter = document.getElementById("filtered").value;
    console.log(filter);
    switch (filter) {
      case "produce":
        displayGroceries(groceries.filter(grocery => grocery.Type.includes("produce"))); 
        break;
      case "food":
        displayGroceries(groceries.filter(grocery => grocery.Type.includes("food")));
        break
      case "cheap":
        displayGroceries(groceries.filter(grocery => parseFloat(grocery.Price) < 3));
        break;
      case "other":
        displayGroceries(groceries.filter(grocery => grocery.Type.includes("other")));
        break;
      case "all":
      default:
        displayGroceries(groceries);
    }
}
  
/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => {filterGroceries(groceryList)});



getGroceries();

var apple = document.getElementById("apple");
apple.addEventListener("click", () => handleButtonClick(groceryList));
