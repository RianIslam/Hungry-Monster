const button = document.getElementById("mealBtn");
const inputValue = document.getElementById("inputMeal");

button.addEventListener("click", function () {
  fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=" +
    inputValue.value +
      ""
  )
    .then((res) => res.json())
    .then((data) => displayfoods(data));
});



const displayfoods = (meal) => {
  const mealItem = meal.meals;

  const searchDiv = document.getElementById("foods");

  for (let i = 0; i < mealItem.length; i++) {
    const food = mealItem[i];

    const mealDiv = document.createElement("div");
    const mealInfo = `
    <img onclick="displayFood('<img src=${food.strMealThumb}><h1>${food.strMeal}</h1> <h2>Ingredinet:</h2>  <li>${food.strIngredient1}</li><li>${food.strIngredient2}</li><li>${food.strIngredient3}</li><li>${food.strIngredient4}</li><li>${food.strIngredient5}</li><li>${food.strIngredient6}</li><li>${food.strIngredient7}</li> <li>${food.strIngredient8}</li> <li>${food.strIngredient9}</li> <li>${food.strIngredient10}</li>')" src=${food.strMealThumb}>
    <h4 onclick="displayFood('<img src=${food.strMealThumb}><h1>${food.strMeal}</h1> <h2>Ingredinet:</h2> <li>${food.strIngredient1}</li><li>${food.strIngredient2}</li><li>${food.strIngredient3}</li><li>${food.strIngredient4}</li><li>${food.strIngredient5}</li><li>${food.strIngredient6}</li><li>${food.strIngredient7}</li> <li>${food.strIngredient8}</li> <li>${food.strIngredient9}</li> <li>${food.strIngredient10}</li>')" class="food__name">${food.strMeal}</h4>

    `;
    mealDiv.innerHTML = mealInfo;
    searchDiv.appendChild(mealDiv);
  }
};

const displayFood = (name) => {
  const selectFood = document.getElementById("foodDetails");
  selectFood.innerHTML = `
   ${name}
   `;
};
