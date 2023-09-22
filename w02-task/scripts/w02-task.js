/* W02-Task - Profile Home Page */


/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
var profilePicture = "images/myprofilepic.png";
var fullName = "Manuel Mário Manuel Saene Chave";
var currentYear = new Date().getFullYear();

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector('img[alt="My Profile picture"]');

/* Step 4 - Adding Content */
nameElement.innerHTML = fullName;
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);
/* Step 5 - Array */
const favoriteFoods = ["Rice", "Matapa", "Pizza", "Burguer" ,"Ice Cream"];
foodElement.innerHTML = favoriteFoods.join(",");
const newFavoriteFood = "KitKat";
favoriteFoods.push(newFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods.join(",")}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods.join(",")}`;









