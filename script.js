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
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

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
            // Navigate to the recipe detail page with the recipe ID
            window.location.href = `recipe-detail.html?id=${recipeId}`;
        });
    });
    
    // Add event listeners to view recipe buttons
    document.querySelectorAll('.view-recipe-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent the card click event from firing
            const card = this.closest('.recipe-card');
            const recipeId = card.dataset.id;
            
            // Navigate to the recipe detail page with the recipe ID
            window.location.href = `recipe-detail.html?id=${recipeId}`;
        });
    });
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
                    // Navigate to the recipe detail page with the recipe ID
                    window.location.href = `recipe-detail.html?id=${recipeId}`;
                });
                
                const viewButton = card.querySelector('.view-recipe-btn');
                if (viewButton) {
                    viewButton.addEventListener('click', function(e) {
                        e.stopPropagation(); // Prevent the card click event from firing
                        const recipeId = card.dataset.id;
                        
                        // Navigate to the recipe detail page with the recipe ID
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

// Search functionality (simplified)
function handleSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    if (searchTerm === '') {
        // If search is cleared, reset to initial view
        recipeGrid.innerHTML = '';
        currentPage = 1;
        loadInitialRecipes();
        loadMoreBtn.style.display = 'block';
    } else {
        // Filter recipes based on search term
        const filteredRecipes = recipeData.filter(recipe => 
            recipe.title.toLowerCase().includes(searchTerm) ||
            recipe.cuisine.toLowerCase().includes(searchTerm) ||
            recipe.type.toLowerCase().includes(searchTerm) ||
            recipe.description.toLowerCase().includes(searchTerm) ||
            recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
        
        // Display filtered recipes
        recipeGrid.innerHTML = '';
        renderRecipes(filteredRecipes);
        
        // Hide "Load More" button when searching
        loadMoreBtn.style.display = 'none';
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    loadInitialRecipes();
    
    loadMoreBtn.addEventListener('click', loadMoreRecipes);
    
    searchBtn.addEventListener('click', handleSearch);
    
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
}); 