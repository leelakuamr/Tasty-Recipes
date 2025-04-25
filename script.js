// Sample recipe data (in a real app, this would come from a backend API)
const recipeData = [
    {
        id: 1,
        title: "Butter Chicken",
        cuisine: "Indian",
        type: "Main Course",
        description: "A rich and creamy curry made with tender chicken in a spiced tomato sauce.",
        image: "images/ButterChicken.jpg",
        tags: ["Chicken", "Creamy", "Dinner"]
    },
    {
        id: 2,
        title: "Spaghetti Carbonara",
        cuisine: "Italian",
        type: "Main Course",
        description: "Classic pasta dish with eggs, cheese, pancetta and black pepper.",
        image: "images/SpaghettiCarbonara.jpg",
        tags: ["Pasta", "Quick", "Dinner"]
    },
    {
        id: 3,
        title: "Greek Salad",
        cuisine: "Greek",
        type: "Salad",
        description: "Fresh salad with tomatoes, cucumber, olives, and feta cheese with olive oil dressing.",
        image: "images/GreekSalad.jpg",
        tags: ["Vegetarian", "Healthy", "Lunch"]
    },
    {
        id: 4,
        title: "Chocolate Brownies",
        cuisine: "American",
        type: "Dessert",
        description: "Rich, fudgy chocolate brownies with a crackly top and gooey center.",
        image: "images/ChocolateBrownies.jpg",
        tags: ["Dessert", "Chocolate", "Baking"]
    },
    {
        id: 5,
        title: "Thai Green Curry",
        cuisine: "Thai",
        type: "Main Course",
        description: "Aromatic curry with coconut milk, vegetables, and your choice of protein.",
        image: "images/Thai Green Curry.jpg",
        tags: ["Spicy", "Dinner", "Coconut"]
    },
    {
        id: 6,
        title: "Avocado Toast",
        cuisine: "Modern",
        type: "Breakfast",
        description: "Simple toast topped with mashed avocado, salt, pepper and optional toppings.",
        image: "images/Avocado Toast.jpg",
        tags: ["Vegetarian", "Breakfast", "Quick"]
    },
    // Additional recipes for "Load More" functionality
    {
        id: 7,
        title: "Beef Tacos",
        cuisine: "Mexican",
        type: "Main Course",
        description: "Crispy taco shells filled with seasoned beef, lettuce, cheese and salsa.",
        image: "images/BeefTacos.jpg",
        tags: ["Beef", "Mexican", "Dinner"]
    },
    {
        id: 8,
        title: "Mushroom Risotto",
        cuisine: "Italian",
        type: "Main Course", 
        description: "Creamy arborio rice cooked with mushrooms, white wine, and parmesan cheese.",
        image: "images/MushroomRisotto.jpg",
        tags: ["Vegetarian", "Rice", "Dinner"]
    },
    {
        id: 9,
        title: "Berry Smoothie Bowl",
        cuisine: "Health Food",
        type: "Breakfast",
        description: "Thick smoothie made with mixed berries and topped with granola and fresh fruit.",
        image: "images/Berry Smoothie Bowl.jpg",
        tags: ["Breakfast", "Healthy", "Fruit"]
    },
    {
        id: 10,
        title: "Chicken Stir Fry",
        cuisine: "Asian Fusion",
        type: "Main Course",
        description: "Quick and healthy stir fry with chicken, mixed vegetables and soy sauce.",
        image: "images/ChickenStirFry.jpg",
        tags: ["Chicken", "Quick", "Healthy"]
    },
    {
        id: 11,
        title: "Apple Pie",
        cuisine: "American",
        type: "Dessert",
        description: "Classic dessert with tender spiced apples in a flaky crust.",
        image: "images/Apple Pie.jpg",
        tags: ["Dessert", "Baking", "Fruit"]
    },
    {
        id: 12,
        title: "Vegetable Curry",
        cuisine: "Indian",
        type: "Main Course",
        description: "Hearty vegetable curry with potatoes, carrots, peas and tomato sauce.",
        image: "images/VegetableCurry.jpg",
        tags: ["Vegetarian", "Spicy", "Dinner"]
    }
];

// Variables to track pagination
let currentPage = 1;
const recipesPerPage = 6;

// DOM Elements
const recipeGrid = document.getElementById('recipeGrid');
const loadMoreBtn = document.getElementById('loadMoreBtn');

// Create recipe card HTML
function createRecipeCard(recipe) {
    // Icon for recipe type
    let typeIcon = '';
    switch(recipe.type.toLowerCase()) {
        case 'main course':
            typeIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10h10"/><path d="M7 14h10"/><circle cx="12" cy="12" r="9"/></svg>';
            break;
        case 'dessert':
            typeIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 01-7 7 2.6 2.6 0 01-1-.2"/><path d="M14.5 4.5c0 4.5-2.5 5.5-2.5 9.5"/></svg>';
            break;
        case 'breakfast':
            typeIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 7h12M5 11h14M8 15h8"/></svg>';
            break;
        case 'salad':
            typeIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a9 9 0 019 9c0 3.6-2.6 6.9-6 7.8-1 .3-2.2.2-3.1-.3a5.5 5.5 0 01-2.9-5.6c.4-2 1.9-3 3-3.5.8-.3 1.8-.2 2.6.2.4.2.7.6.7 1s-.3.8-.7 1c-.5.3-1.3.2-1.9-.2-.4-.3-.6-.8-.6-1.3-.3.5-.4 1.2-.2 1.9.3 1 1.1 1.8 2.1 2.1.8.2 1.7.1 2.5-.3 2.5-1.3 3.8-4 3.5-6.7-.5-4-3.5-7.2-7.5-7.8C12 2 11 2 10 2.2 7 2.7 4.4 4.6 3.4 7.4c-.5 1.6-.5 3.2 0 4.8.3.8.6 1.6 1.1 2.3.7 1 1.9 1.9 3 2.2.5.2 1 .3 1.5.3"/></svg>';
            break;
        default:
            typeIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/></svg>';
    }

    // Generate tags HTML
    const tagsHtml = recipe.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

    // Create the full recipe card HTML
    return `
        <div class="recipe-card" data-id="${recipe.id}">
            <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image">
            <div class="recipe-content">
                <h2 class="recipe-title">${recipe.title}</h2>
                <div class="recipe-meta">
                    <div class="cuisine-type">${recipe.cuisine}</div>
                    <div class="recipe-type">
                        ${typeIcon}
                        <span>${recipe.type}</span>
                    </div>
                </div>
                <p class="recipe-description">${recipe.description}</p>
                <div class="recipe-tags">${tagsHtml}</div>
                <button class="view-recipe-btn">View Recipe</button>
            </div>
        </div>
    `;
}

// Load initial recipes
function loadInitialRecipes() {
    const initialRecipes = recipeData.slice(0, recipesPerPage);
    renderRecipes(initialRecipes);
}

// Render recipes to the grid
function renderRecipes(recipes) {
    const recipesHtml = recipes.map(recipe => createRecipeCard(recipe)).join('');
    recipeGrid.innerHTML = recipesHtml;
    
    // Add event listeners to the newly added recipe cards
    document.querySelectorAll('.recipe-card').forEach(card => {
        card.addEventListener('click', function() {
            const recipeId = card.dataset.id;
            showRecipeDetails(recipeId);
        });
    });
    
    // Add event listeners to view recipe buttons
    document.querySelectorAll('.view-recipe-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent the card click event from firing
            const card = this.closest('.recipe-card');
            const recipeId = card.dataset.id;
            showRecipeDetails(recipeId);
        });
    });
}

// Function to show recipe details
function showRecipeDetails(recipeId) {
    // Find the recipe in our dataset
    const recipe = recipeData.find(r => r.id == recipeId);
    
    if (recipe) {
        // Create a modal to display recipe details
        const modal = document.createElement('div');
        modal.className = 'recipe-modal';
        
        // Generate HTML for recipe details
        modal.innerHTML = `
            <div class="recipe-modal-content">
                <span class="close-modal">&times;</span>
                <div class="recipe-modal-header">
                    <img src="${recipe.image}" alt="${recipe.title}" class="modal-image">
                    <div class="modal-info">
                        <h2>${recipe.title}</h2>
                        <div class="modal-meta">
                            <span>${recipe.cuisine}</span> • 
                            <span>${recipe.type}</span>
                        </div>
                        <div class="modal-tags">
                            ${recipe.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                </div>
                <p class="modal-description">${recipe.description}</p>
                
                <div class="recipe-details">
                    <div class="recipe-ingredients">
                        <h3>Ingredients</h3>
                        <ul class="ingredients-list">
                            ${getIngredientsForRecipe(recipe).map(ingredient => 
                                `<li>${ingredient}</li>`
                            ).join('')}
                        </ul>
                    </div>
                    
                    <div class="recipe-instructions">
                        <h3>Instructions</h3>
                        <ol class="instructions-list">
                            ${getInstructionsForRecipe(recipe).map(step => 
                                `<li>${step}</li>`
                            ).join('')}
                        </ol>
                    </div>
                </div>
                
                <div class="recipe-actions">
                    <a href="add-recipe.html" class="add-recipe-btn">Add Your Own Recipe</a>
                </div>
            </div>
        `;
        
        // Add the modal to the page
        document.body.appendChild(modal);
        
        // Show the modal
        setTimeout(() => {
            modal.style.display = 'flex';
        }, 10);
        
        // Close the modal when clicking the close button
        const closeBtn = modal.querySelector('.close-modal');
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
            setTimeout(() => {
                modal.remove();
            }, 300);
        });
        
        // Close the modal when clicking outside of it
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
                setTimeout(() => {
                    modal.remove();
                }, 300);
            }
        });
    }
}

// Helper function to get ingredients for a recipe
function getIngredientsForRecipe(recipe) {
    // Sample ingredients for different recipes
    const sampleIngredients = {
        "Butter Chicken": [
            "1.5 lbs boneless chicken thighs, cut into chunks",
            "1/2 cup plain yogurt",
            "2 tbsp lemon juice",
            "2 tsp garam masala",
            "1 tsp ground turmeric",
            "1 tsp ground cumin",
            "1 tsp chili powder",
            "4 tbsp butter",
            "1 large onion, finely chopped",
            "3 cloves garlic, minced",
            "1 tbsp fresh ginger, grated",
            "1 cinnamon stick",
            "14 oz tomato sauce",
            "1 cup heavy cream",
            "Salt to taste",
            "Fresh cilantro for garnish"
        ],
        "Spaghetti Carbonara": [
            "1 lb spaghetti",
            "8 oz pancetta or thick-cut bacon, diced",
            "4 large eggs",
            "1 cup freshly grated Pecorino Romano cheese",
            "1 tsp freshly ground black pepper",
            "Salt to taste"
        ],
        "Greek Salad": [
            "2 large tomatoes, cut into chunks",
            "1 cucumber, sliced",
            "1 red onion, thinly sliced",
            "1 green bell pepper, chopped",
            "1/2 cup Kalamata olives",
            "6 oz feta cheese, cubed",
            "2 tbsp olive oil",
            "1 tbsp red wine vinegar",
            "1 tsp dried oregano",
            "Salt and pepper to taste"
        ],
        "Chocolate Brownies": [
            "1/2 cup butter",
            "1 cup granulated sugar",
            "2 large eggs",
            "1 tsp vanilla extract",
            "1/2 cup all-purpose flour",
            "1/3 cup cocoa powder",
            "1/4 tsp salt",
            "1/4 tsp baking powder",
            "1/2 cup chocolate chips"
        ],
        "Thai Green Curry": [
            "2 tbsp green curry paste",
            "1 can (14 oz) coconut milk",
            "1 lb chicken breast, sliced",
            "1 cup mixed vegetables (bell peppers, broccoli, carrots)",
            "2 tbsp fish sauce",
            "1 tbsp brown sugar",
            "1 tbsp vegetable oil",
            "Fresh Thai basil leaves",
            "2 kaffir lime leaves",
            "1 tbsp lime juice"
        ],
        "Avocado Toast": [
            "2 slices whole grain bread",
            "1 ripe avocado",
            "1 tbsp lemon juice",
            "Salt and pepper to taste",
            "Red pepper flakes (optional)",
            "1 tbsp olive oil",
            "Optional toppings: fried egg, cherry tomatoes, feta cheese"
        ]
    };
    
    // If we have specific ingredients for this recipe, return those
    if (sampleIngredients[recipe.title]) {
        return sampleIngredients[recipe.title];
    }
    
    // Otherwise return some default ingredients based on the recipe type
    return [
        "Ingredient 1",
        "Ingredient 2",
        "Ingredient 3",
        "Ingredient 4",
        "Ingredient 5"
    ];
}

// Helper function to get instructions for a recipe
function getInstructionsForRecipe(recipe) {
    // Sample instructions for different recipes
    const sampleInstructions = {
        "Butter Chicken": [
            "In a large bowl, mix yogurt, lemon juice, and spices. Add chicken and marinate for at least 1 hour.",
            "Melt 2 tbsp butter in a large skillet. Add marinated chicken and cook until browned (about 5-6 minutes).",
            "Remove chicken and set aside. In the same pan, add remaining butter.",
            "Add onion and sauté until soft. Add garlic and ginger, cook for 1 minute.",
            "Add cinnamon stick and tomato sauce. Simmer for 10-15 minutes.",
            "Return chicken to the pan and simmer for 10 minutes.",
            "Stir in cream and cook for 5 more minutes.",
            "Garnish with cilantro and serve with rice or naan bread."
        ],
        "Spaghetti Carbonara": [
            "Cook spaghetti in salted water according to package directions.",
            "While pasta cooks, fry diced pancetta until crispy.",
            "In a bowl, whisk together eggs, cheese, and black pepper.",
            "Drain pasta, reserving 1/2 cup of pasta water.",
            "Working quickly, add hot pasta to the pancetta, then immediately add egg mixture.",
            "Toss everything together, adding pasta water as needed for a creamy sauce.",
            "Serve immediately with extra cheese and black pepper."
        ],
        "Greek Salad": [
            "In a large bowl, combine tomatoes, cucumber, red onion, green pepper, and olives.",
            "Add feta cheese cubes.",
            "In a small bowl, whisk together olive oil, red wine vinegar, and oregano.",
            "Pour dressing over salad and toss gently.",
            "Season with salt and pepper.",
            "Let sit for 10 minutes before serving to allow flavors to blend."
        ],
        "Chocolate Brownies": [
            "Preheat oven to 350°F (175°C). Line an 8-inch square baking pan with parchment paper.",
            "Melt butter in a microwave-safe bowl.",
            "Add sugar and whisk until combined. Add eggs and vanilla, mix well.",
            "In a separate bowl, whisk together flour, cocoa powder, salt, and baking powder.",
            "Add dry ingredients to wet ingredients and mix until just combined.",
            "Fold in chocolate chips.",
            "Pour batter into prepared pan and spread evenly.",
            "Bake for 25-30 minutes until a toothpick comes out with a few moist crumbs.",
            "Cool completely before cutting into squares."
        ],
        "Thai Green Curry": [
            "Heat oil in a large pot or wok over medium heat.",
            "Add curry paste and stir-fry for 1 minute until fragrant.",
            "Add half of the coconut milk and simmer until oil separates (3-4 minutes).",
            "Add chicken and stir to coat with the curry paste. Cook for 3-4 minutes.",
            "Add remaining coconut milk, fish sauce, and sugar. Bring to a simmer.",
            "Add vegetables and kaffir lime leaves. Simmer for 5-7 minutes until vegetables are tender.",
            "Stir in Thai basil leaves and lime juice.",
            "Serve hot with steamed jasmine rice."
        ],
        "Avocado Toast": [
            "Toast bread until golden and crisp.",
            "Cut avocado in half, remove pit, and scoop flesh into a bowl.",
            "Add lemon juice, salt, and pepper. Mash with a fork to desired consistency.",
            "Spread avocado mixture evenly on toast.",
            "Drizzle with olive oil and sprinkle with red pepper flakes if desired.",
            "Add any optional toppings and serve immediately."
        ]
    };
    
    // If we have specific instructions for this recipe, return those
    if (sampleInstructions[recipe.title]) {
        return sampleInstructions[recipe.title];
    }
    
    // Otherwise return some default instructions
    return [
        "Prepare the ingredients.",
        "Cook according to preference.",
        "Combine all ingredients together.",
        "Serve and enjoy!"
    ];
}

// Load more recipes
function loadMoreRecipes() {
    currentPage++;
    const start = (currentPage - 1) * recipesPerPage;
    const end = currentPage * recipesPerPage;
    const nextRecipes = recipeData.slice(start, end);
    
    if (nextRecipes.length > 0) {
        const newRecipesHtml = nextRecipes.map(recipe => createRecipeCard(recipe)).join('');
        recipeGrid.innerHTML += newRecipesHtml;
        
        // Add event listeners to the newly added recipe cards
        document.querySelectorAll('.recipe-card').forEach(card => {
            if (!card.hasAttribute('data-initialized')) {
                card.setAttribute('data-initialized', 'true');
                card.addEventListener('click', function() {
                    const recipeId = card.dataset.id;
                    // Navigate to the recipe page with the recipe ID
                    window.location.href = `recipe-detail.html?id=${recipeId}`;
                });
                
                const viewButton = card.querySelector('.view-recipe-btn');
                if (viewButton) {
                    viewButton.addEventListener('click', function(e) {
                        e.stopPropagation(); // Prevent the card click event from firing
                        const card = this.closest('.recipe-card');
                        const recipeId = card.dataset.id;
                        // Navigate to the recipe page with the recipe ID
                        window.location.href = `recipe-detail.html?id=${recipeId}`;
                    });
                }
            }
        });
    }
    
    // Hide "Load More" button if we've loaded all recipes
    if (end >= recipeData.length) {
        loadMoreBtn.style.display = 'none';
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    loadInitialRecipes();
    
    loadMoreBtn.addEventListener('click', loadMoreRecipes);
}); 