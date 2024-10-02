document.addEventListener('DOMContentLoaded', displayRecipes);
const recipes = [
    {
        title: "Chocolate Cake",
        ingredients: ["2 cups flour", "1 cup sugar", "1 cup cocoa powder", "2 eggs", "1 cup milk"],
        instructions: "Mix all ingredients and bake at 350°F for 30 minutes.",
        image: "chocolate-cake.jpg"
    },
    {
        title: "Vanilla Cake",
        ingredients: ["2 cups flour", "1 cup sugar", "1 cup butter", "2 eggs", "1 cup milk"],
        instructions: "Mix all ingredients and bake at 350°F for 30 minutes.",
        image: "vanilla-cake.jpg"
    }
];

function displayRecipes() {
    const recipeList = document.getElementById('recipe-list');
    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card';
        recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}">
            <h2>${recipe.title}</h2>
            <p>${recipe.instructions}</p>
        `;
        recipeList.appendChild(recipeCard);
    });
}


