/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: 'James Stolte',
    photo: 'images/goodmugshot.jpg',
    favoriteFoods: ['spaghetti', ' pizza', ' sushi', ' large burgers', ' melt in your mouth BBQ', 'lemonade'],
    hobbies: ['Dungeons and Dragons', 'Helldivers 2', 'Cooking', 'Painting Miniatures'],
    placesLived: []
}

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Meridian, Idaho',
        length: '18 years'
    },
    {
        place: 'Oklahoma',
        length: '13 months'
    },
    {
        place: 'Rexburg, Idaho',
        length: '3 years'
    }
);

/* DOM Manipulation - Output */
/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let ul = document.createElement('li');
    ul.textContent = hobby;
    document.querySelector('#hobbies').appendChild(ul);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    let dd = document.createElement('dd');
    dd.textContent = place.length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
});
