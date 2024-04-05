/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        const art = document.createElement("article");
        const h3 = document.createElement("h3");
        h3.textContent = temple.templeName;
        const tempImg = document.createElement("img");
        tempImg.src = temple.imageUrl;
        tempImg.alt = temple.location;
        art.appendChild(h3);    
        art.appendChild(tempImg);     
        templesElement.appendChild(art);
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
  const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json"); // Let's get the temple data
  templeList = await response.json(); // Convert the response to JSON and store it in our templeList
  displayTemples(templeList); // Let's display those temples!
}


/* reset Function */
const reset = () => {
    templesElement.innerHTML = "";
  }
  

/* filterTemples Function */
const filterTemples = (temples) => {
    reset();
    console.log(temples);
    const filter = document.getElementById("filtered").value;
    console.log(filter);
    switch (filter) {
      case "utah":
        displayTemples(temples.filter(temple => temple.location.includes("Utah"))); 
        break;
      case "notutah":
        displayTemples(temples.filter(temple => !temple.location.includes("Utah"))); 
        break;
      case "older":
        displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
        break;
      case "all":
      default:
        displayTemples(temples);
    }
}

  
/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });
  
getTemples();