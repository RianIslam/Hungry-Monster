const button = document.getElementById("mealBtn");
const inputValue = document.getElementById('inputMeal');
button.addEventListener("click", function () {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=f")
    .then((res) => res.json())
    .then((data) => displayfoods(data));
});

const displayfoods = (meal) => {
  // console.log(meal.categories[0].strCategory)
  const mealItem = meal.meals;

  const ul = document.getElementById('foods')



  for (let i = 0; i < mealItem.length; i++) {
    const food = mealItem[i];

    const countryDiv = document.createElement('div');
    const countryInfo =`
    <h3 class="food__name">${food.strCategory}</h3>
    <h3 class="food__name">${food.strMeal}</h3>
    <button onclick="displayDetails('${food.strMeal}')">details</button>

    `;
    countryDiv.innerHTML = countryInfo;
    ul.appendChild(countryDiv);




    // const li =document.createElement('li');
    // li.innerText = food.strCategory; 
    // ul.appendChild(li)
    // console.log(food.strCategory);
  }
};


const displayDetails = name =>{
    const url =  `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => mealMake(data[0]));
    
}

const mealMake = food =>{

    const foodDiv = document.getElementById('foodDetails');
    foodDiv.innerHTML =`
    <h1>${food.strMealThumb}</h1>
    `

}