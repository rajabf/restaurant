let elCategoryList = document.querySelector('.category-list')

let url = window.location.href
let params = url.slice(url.lastIndexOf('=')+1)

fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)

        data.meals.forEach(meal => {
            let li = document.createElement('li')
            li.setAttribute('class', 'list-group-item card col-lg-4 col-sm-12 p-2')

            li.innerHTML = `
                <img class="card-img-top" src="${meal.strMealThumb}" alt="${meal.strMeal}">
                <h3 class="card-title">${meal.strMeal}</h3>
            `
            
            elCategoryList.appendChild(li)
        });
    })
    .catch(err => console.error(err.message))