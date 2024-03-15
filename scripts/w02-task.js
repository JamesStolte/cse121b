/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

const fullName = 'James Stolte';
let currentYear = 2024;
let profilePicture = 'images/goodmugshot.jpg';

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */

let favoritFoods = ['spaghetti', ' pizza', ' sushi', ' large burgers', ' melt in your mouth BBQ'];
foodElement.innerHTML = `<strong>${favoritFoods}<strong>`;
favoritFoods.push(' lemonade');
foodElement.innerHTML += `<strong><br>${favoritFoods}<strong>`;
favoritFoods.shift()
foodElement.innerHTML += `<strong><br>${favoritFoods}<strong>`;

