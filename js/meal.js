const API_URL = 'https://www.themealdb.com/api/json/v1/1'

const elMealList = document.querySelector('.meal-list')

function renderMeals(meals) {
    elMealList.innerHTML = ''

    meals.forEach(meal => {
        const params = new URLSearchParams({ meal: meal.strCategory})
        // const url = `https://mealsbyrajab.netlify.app/?${params}`
        const url = `https://mealsbyrajab.netlify.app/meal.html?${params}`

        let li = document.createElement('li')
        li.setAttribute('class','list-group-item col-sm-12 col-lg-4 card')
        li.innerHTML = `
            <img class="card-img-top" src="${meal.strCategoryThumb}" alt="${meal.strMeal}">
            <h3 class="card-title">${meal.strCategory}</h3>
            <p>${meal.strCategoryDescription.slice(0, 100)}</p>
            <a href="${url}">${meal.strCategory}</a>
        `

        elMealList.appendChild(li)
    })
}

const fetchMeals = async url => {
    try{
        const response = await fetch(API_URL + url)
        const data = await response.json()
        console.log(data)
        renderMeals(data.categories)
    } catch (error) {
        console.error(error.message);
    }
}

fetchMeals('/categories.php')   