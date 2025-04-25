document.addEventListener('DOMContentLoaded', function() {
    // Sample recipe data (in a real app, this would come from a database)
    const recipes = [
        {
            id: 1,
            title: 'Vegetable Curry',
            image: 'VegetableCurry.jpg',
            category: 'dinner',
            diet: ['vegetarian', 'vegan', 'glutenFree'],
            prepTime: 15,
            cookTime: 30,
            description: 'A flavorful and spicy vegetable curry that\'s perfect for weeknight dinners.',
            tags: ['Spicy', 'Indian', 'One-pot']
        },
        {
            id: 2,
            title: 'Mushroom Risotto',
            image: 'MushroomRisotto.jpg',
            category: 'dinner',
            diet: ['vegetarian'],
            prepTime: 10,
            cookTime: 30,
            description: 'Creamy, comforting risotto with mushrooms and Parmesan cheese.',
            tags: ['Italian', 'Creamy', 'Comfort Food']
        },
        {
            id: 3,
            title: 'Classic Pancakes',
            image: 'https://images.unsplash.com/photo-1575853121743-60c24f0a7502?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGFuY2FrZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            category: 'breakfast',
            diet: ['vegetarian'],
            prepTime: 10,
            cookTime: 10,
            description: 'Fluffy, golden pancakes served with maple syrup and fresh berries.',
            tags: ['Quick', 'Breakfast', 'Sweet']
        },
        {
            id: 4,
            title: 'Avocado Toast',
            image: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGF2b2NhZG8lMjB0b2FzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            category: 'breakfast',
            diet: ['vegetarian', 'vegan'],
            prepTime: 5,
            cookTime: 5,
            description: 'Simple yet delicious avocado toast with a sprinkle of red pepper flakes.',
            tags: ['Quick', 'Healthy', 'Breakfast']
        },
        {
            id: 5,
            title: 'Chicken Caesar Salad',
            image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMGNhZXNhciUyMHNhbGFkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            category: 'lunch',
            diet: [],
            prepTime: 15,
            cookTime: 10,
            description: 'A classic chicken Caesar salad with homemade croutons and dressing.',
            tags: ['Salad', 'Protein', 'Lunch']
        },
        {
            id: 6,
            title: 'Chocolate Chip Cookies',
            image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2hvY29sYXRlJTIwY2hpcCUyMGNvb2tpZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            category: 'dessert',
            diet: ['vegetarian'],
            prepTime: 15,
            cookTime: 12,
            description: 'Soft and chewy chocolate chip cookies that are perfect with a glass of milk.',
            tags: ['Dessert', 'Baking', 'Sweet']
        }
    ];

    // Check for user-added recipes in localStorage
    let userRecipes = [];
    try {
        userRecipes = JSON.parse(localStorage.getItem('tastyRecipes') || '[]');
    } catch (e) {
        console.error('Error loading user recipes:', e);
    }

    // Combine sample recipes with user-added recipes
    const allRecipes = [...recipes, ...userRecipes];

    // Save all recipes to localStorage for the detail page to access
    localStorage.setItem('allSampleRecipes', JSON.stringify(recipes));

    // DOM elements
    const recipesGrid = document.getElementById('recipesGrid');
    const searchInput = document.getElementById('recipeSearch');
    const searchButton = document.getElementById('searchButton');
    const categoryFilter = document.getElementById('categoryFilter');
    const dietFilter = document.getElementById('dietFilter');
    const timeFilter = document.getElementById('timeFilter');
    const prevPageBtn = document.getElementById('prevPage');
    const nextPageBtn = document.getElementById('nextPage');
    const pageIndicator = document.getElementById('pageIndicator');
    const addRecipeBtn = document.getElementById('addRecipeBtn');

    // Pagination state
    let currentPage = 1;
    const recipesPerPage = 6;
    let filteredRecipes = [...allRecipes];

    // Initial render
    renderRecipes();

    // Event listeners
    searchButton.addEventListener('click', applyFilters);
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            applyFilters();
        }
    });
    categoryFilter.addEventListener('change', applyFilters);
    dietFilter.addEventListener('change', applyFilters);
    timeFilter.addEventListener('change', applyFilters);
    prevPageBtn.addEventListener('click', goToPrevPage);
    nextPageBtn.addEventListener('click', goToNextPage);
    addRecipeBtn.addEventListener('click', goToAddRecipe);

    // Function to apply filters
    function applyFilters() {
        const searchTerm = searchInput.value.toLowerCase();
        const category = categoryFilter.value;
        const diet = dietFilter.value;
        const time = timeFilter.value;

        filteredRecipes = allRecipes.filter(recipe => {
            // Search term filter
            const matchesSearch = 
                recipe.title.toLowerCase().includes(searchTerm) || 
                recipe.description.toLowerCase().includes(searchTerm) ||
                recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm));
            
            // Category filter
            const matchesCategory = category === 'all' || recipe.category === category;
            
            // Diet filter
            const matchesDiet = diet === 'all' || recipe.diet.includes(diet);
            
            // Time filter
            const totalTime = recipe.prepTime + recipe.cookTime;
            const matchesTime = time === 'all' || totalTime <= parseInt(time);
            
            return matchesSearch && matchesCategory && matchesDiet && matchesTime;
        });

        // Reset to first page after filtering
        currentPage = 1;
        renderRecipes();
    }

    // Function to render recipes
    function renderRecipes() {
        // Calculate pagination
        const totalPages = Math.ceil(filteredRecipes.length / recipesPerPage);
        const startIndex = (currentPage - 1) * recipesPerPage;
        const endIndex = startIndex + recipesPerPage;
        const recipesToShow = filteredRecipes.slice(startIndex, endIndex);
        
        // Update pagination controls
        pageIndicator.textContent = `Page ${currentPage} of ${totalPages || 1}`;
        prevPageBtn.disabled = currentPage === 1;
        nextPageBtn.disabled = currentPage === totalPages || totalPages === 0;

        // Clear grid
        recipesGrid.innerHTML = '';
        
        // Show message if no recipes match the filters
        if (recipesToShow.length === 0) {
            const noRecipes = document.createElement('div');
            noRecipes.className = 'no-recipes';
            noRecipes.textContent = 'No recipes match your filters. Try adjusting your search criteria.';
            recipesGrid.appendChild(noRecipes);
            return;
        }

        // Render recipe cards
        recipesToShow.forEach(recipe => {
            const recipeCard = createRecipeCard(recipe);
            recipesGrid.appendChild(recipeCard);
        });
    }

    // Function to create a recipe card
    function createRecipeCard(recipe) {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        
        const totalTime = recipe.prepTime + recipe.cookTime;
        
        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image">
            <div class="recipe-content">
                <h3 class="recipe-title">${recipe.title}</h3>
                <div class="recipe-meta">
                    <span>${totalTime} min total</span>
                    <span>${recipe.category.charAt(0).toUpperCase() + recipe.category.slice(1)}</span>
                </div>
                <p class="recipe-description">${recipe.description}</p>
                <div class="recipe-tags">
                    ${recipe.tags.map(tag => `<span class="recipe-tag">${tag}</span>`).join('')}
                </div>
                <a href="add-recipe.html" class="view-recipe">Add Recipe</a>
            </div>
        `;
        
        return card;
    }

    // Pagination functions
    function goToPrevPage() {
        if (currentPage > 1) {
            currentPage--;
            renderRecipes();
            window.scrollTo(0, 0);
        }
    }

    function goToNextPage() {
        const totalPages = Math.ceil(filteredRecipes.length / recipesPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            renderRecipes();
            window.scrollTo(0, 0);
        }
    }

    // Navigate to add recipe page
    function goToAddRecipe() {
        window.location.href = 'add-recipe.html';
    }
}); 