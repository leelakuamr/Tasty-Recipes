// Sample recipe detail data (in a real app, this would come from a backend API)
const recipeDetails = {
    1: {
        id: 1,
        title: "Butter Chicken",
        cuisine: "Indian",
        type: "Main Course",
        description: "A rich and creamy curry made with tender chicken in a spiced tomato sauce. This popular Indian dish features chicken marinated in yogurt and spices, then simmered in a tomato-based sauce enriched with butter and cream. The result is a silky, flavorful curry that pairs perfectly with naan bread or rice.",
        image: "images/ButterChicken.jpg",
        rating: 4.8,
        tags: ["Chicken", "Creamy", "Dinner", "Spicy", "Indian Cuisine"],
        ingredients: [
            { name: "Boneless chicken thighs", quantity: "1.5 lbs" },
            { name: "Plain yogurt", quantity: "1/2 cup" },
            { name: "Lemon juice", quantity: "2 tbsp" },
            { name: "Garam masala", quantity: "2 tsp" },
            { name: "Ground turmeric", quantity: "1 tsp" },
            { name: "Ground cumin", quantity: "1 tsp" },
            { name: "Chili powder", quantity: "1 tsp" },
            { name: "Fresh ginger, minced", quantity: "1 tbsp" },
            { name: "Garlic cloves, minced", quantity: "4" },
            { name: "Butter", quantity: "4 tbsp" },
            { name: "Onion, finely chopped", quantity: "1 large" },
            { name: "Tomato puree", quantity: "1.5 cups" },
            { name: "Heavy cream", quantity: "3/4 cup" },
            { name: "Fresh cilantro, chopped", quantity: "For garnish" }
        ],
        instructions: [
            "In a large bowl, mix the yogurt, lemon juice, garam masala, turmeric, cumin, chili powder, ginger, and garlic. Add the chicken and coat thoroughly. Refrigerate for at least 1 hour, preferably overnight.",
            "Heat a large skillet or pan over medium-high heat. Add 2 tablespoons of butter. When melted, add the marinated chicken pieces and cook until browned on all sides, about 5-6 minutes. Remove chicken and set aside.",
            "In the same pan, add the remaining butter. Add the chopped onion and sauté until soft and translucent, about 3-4 minutes.",
            "Add the tomato puree and bring to a simmer. Cook for 10-15 minutes, stirring occasionally, until the sauce thickens and the tomatoes lose their raw flavor.",
            "Return the chicken to the pan. Reduce heat to low, cover, and simmer for about 15 minutes, until chicken is fully cooked.",
            "Stir in the heavy cream and cook for an additional 5 minutes. Taste and adjust seasoning if needed.",
            "Garnish with fresh chopped cilantro and serve hot with naan bread or basmati rice."
        ],
        reviews: [
            {
                name: "Sarah Johnson",
                date: "March 15, 2025",
                rating: 5,
                comment: "This butter chicken recipe is absolutely divine! The flavors are authentic and the sauce is perfectly creamy. My family loved it."
            },
            {
                name: "Michael Rodriguez",
                date: "February 28, 2025",
                rating: 4,
                comment: "Really good recipe. I added a bit more spice to suit my taste, but the base recipe is excellent. Will definitely make again!"
            },
            {
                name: "Emma Williams",
                date: "April 5, 2025",
                rating: 5,
                comment: "I've tried many butter chicken recipes and this one is by far the best. The overnight marination makes a huge difference in flavor. Highly recommend!"
            }
        ]
    },
    4: {
        id: 4,
        title: "Chocolate Brownies",
        cuisine: "American",
        type: "Dessert",
        description: "Rich, fudgy chocolate brownies with a crackly top and gooey center. These decadent brownies strike the perfect balance between cakey and fudgy textures, with deep chocolate flavor enhanced by espresso powder. They're studded with chocolate chips for extra richness and finished with a delicate crackly top that chocolate lovers crave.",
        image: "images/ChocolateBrownies.jpg",
        rating: 4.9,
        tags: ["Dessert", "Chocolate", "Baking", "Sweet", "American"],
        ingredients: [
            { name: "Unsalted butter", quantity: "1 cup (2 sticks)" },
            { name: "Semi-sweet chocolate chips", quantity: "12 oz" },
            { name: "Granulated sugar", quantity: "1 1/2 cups" },
            { name: "Eggs", quantity: "4 large" },
            { name: "Vanilla extract", quantity: "2 tsp" },
            { name: "All-purpose flour", quantity: "1 cup" },
            { name: "Unsweetened cocoa powder", quantity: "1/4 cup" },
            { name: "Salt", quantity: "1/2 tsp" },
            { name: "Espresso powder (optional)", quantity: "1 tsp" },
            { name: "Additional chocolate chips for topping", quantity: "1/2 cup" }
        ],
        instructions: [
            "Preheat oven to 350°F (175°C). Line a 9x13-inch baking pan with parchment paper, leaving overhang on the sides for easy removal.",
            "In a large microwave-safe bowl, combine the butter and 8 oz of chocolate chips. Microwave in 30-second intervals, stirring between each, until completely melted and smooth.",
            "Add the sugar to the chocolate mixture and whisk until combined. Add the eggs one at a time, whisking well after each addition. Stir in the vanilla extract.",
            "In a separate bowl, whisk together the flour, cocoa powder, salt, and espresso powder (if using).",
            "Gradually fold the dry ingredients into the wet ingredients until just combined. Do not overmix.",
            "Fold in the remaining 4 oz of chocolate chips. Pour the batter into the prepared pan and spread evenly. Sprinkle the additional 1/2 cup of chocolate chips on top.",
            "Bake for 25-30 minutes, or until a toothpick inserted in the center comes out with a few moist crumbs (not wet batter).",
            "Allow to cool completely in the pan before lifting out using the parchment paper overhang. Cut into squares and serve."
        ],
        reviews: [
            {
                name: "David Chen",
                date: "March 20, 2025",
                rating: 5,
                comment: "These are the best brownies I've ever made! So fudgy and rich. The espresso powder really enhances the chocolate flavor without tasting like coffee."
            },
            {
                name: "Jessica Taylor",
                date: "April 2, 2025",
                rating: 5,
                comment: "Absolute perfection! The crackly top and gooey center are exactly what I look for in brownies. My kids devoured them in minutes."
            },
            {
                name: "Robert Kim",
                date: "March 15, 2025",
                rating: 4,
                comment: "Very good recipe. I reduced the sugar a bit and they were still delicious. Will be my go-to brownie recipe from now on."
            }
        ]
    },
    5: {
        id: 5,
        title: "Thai Green Curry",
        cuisine: "Thai",
        type: "Main Course",
        description: "Aromatic curry with coconut milk, vegetables, and your choice of protein. This authentic Thai green curry balances the heat of green chilies with the sweetness of coconut milk and the complexity of Thai herbs and spices. Customize with your preferred protein and vegetables for a vibrant, satisfying meal that's both comforting and exotic.",
        image: "images/Thai Green Curry.jpg",
        rating: 4.7,
        tags: ["Spicy", "Dinner", "Coconut", "Thai Cuisine", "Asian"],
        ingredients: [
            { name: "Green curry paste", quantity: "4 tbsp" },
            { name: "Coconut milk", quantity: "2 cans (13.5 oz each)" },
            { name: "Chicken breast or tofu", quantity: "1.5 lbs" },
            { name: "Bell peppers, sliced", quantity: "2" },
            { name: "Zucchini, sliced", quantity: "1 medium" },
            { name: "Broccoli florets", quantity: "2 cups" },
            { name: "Thai eggplant (or regular eggplant)", quantity: "1 cup, quartered" },
            { name: "Fish sauce", quantity: "2 tbsp" },
            { name: "Palm sugar or brown sugar", quantity: "1 tbsp" },
            { name: "Thai basil leaves", quantity: "1 cup" },
            { name: "Kaffir lime leaves", quantity: "4-5" },
            { name: "Vegetable oil", quantity: "2 tbsp" },
            { name: "Thai chilies, sliced (optional)", quantity: "2-3" },
            { name: "Lime juice", quantity: "1 tbsp" }
        ],
        instructions: [
            "If using chicken, slice it into thin strips. If using tofu, drain well and cut into cubes.",
            "Heat the vegetable oil in a large pot or wok over medium heat. Add the green curry paste and stir-fry for 1-2 minutes until fragrant.",
            "Add 1/4 of the coconut milk (the thick creamy part from the top of the can is best) and cook, stirring constantly, until the oil separates and the mixture is fragrant, about 3-4 minutes.",
            "Add the chicken or tofu and stir to coat with the curry paste. Cook chicken for about 5 minutes until no longer pink on the outside (for tofu, just cook for 2 minutes).",
            "Pour in the remaining coconut milk, fish sauce, and palm sugar. Bring to a gentle simmer.",
            "Add the harder vegetables first (eggplant, broccoli) and kaffir lime leaves. Simmer for 5 minutes.",
            "Add the remaining vegetables (bell peppers, zucchini) and simmer for another 5-7 minutes until all vegetables are tender but still retain some crispness.",
            "Check that the chicken is fully cooked through (or tofu is heated through).",
            "Turn off the heat and add the Thai basil leaves, lime juice, and optional sliced chilies. Stir to combine.",
            "Taste and adjust seasonings as needed. Serve hot with steamed jasmine rice."
        ],
        reviews: [
            {
                name: "Thomas Wilson",
                date: "April 10, 2025",
                rating: 5,
                comment: "Truly authentic flavor! I've been to Thailand multiple times and this curry tastes just like what I had there. The balance of spice and coconut is perfect."
            },
            {
                name: "Priya Sharma",
                date: "March 25, 2025",
                rating: 4,
                comment: "Great recipe! I made it with tofu and it was delicious. I did have to add more curry paste since I like it spicier, but that's just personal preference."
            },
            {
                name: "Lisa Martinez",
                date: "April 5, 2025",
                rating: 5,
                comment: "This was a huge hit with my family! Even my kids who usually avoid spicy food loved it. The coconut milk really balances the heat nicely."
            }
        ]
    },
    6: {
        id: 6,
        title: "Avocado Toast",
        cuisine: "Modern",
        type: "Breakfast",
        description: "Simple toast topped with mashed avocado, salt, pepper and optional toppings. This trendy breakfast favorite is not only delicious but also packed with healthy fats and nutrients. The creamy avocado spread on crispy toast creates a perfect contrast in textures, while customizable toppings allow for endless variations.",
        image: "images/Avocado Toast.jpg",
        rating: 4.7,
        tags: ["Vegetarian", "Breakfast", "Quick", "Healthy", "Simple"],
        ingredients: [
            { name: "Ripe avocados", quantity: "2 medium" },
            { name: "Whole grain bread", quantity: "4 slices" },
            { name: "Lemon juice", quantity: "1 tbsp" },
            { name: "Salt", quantity: "1/4 tsp, or to taste" },
            { name: "Black pepper", quantity: "1/4 tsp, or to taste" },
            { name: "Red pepper flakes (optional)", quantity: "A pinch" },
            { name: "Extra virgin olive oil", quantity: "1 tbsp" },
            { name: "Cherry tomatoes, halved (optional)", quantity: "1/2 cup" },
            { name: "Feta cheese, crumbled (optional)", quantity: "1/4 cup" },
            { name: "Microgreens or sprouts (optional)", quantity: "1/4 cup" },
            { name: "Eggs (optional, for topping)", quantity: "2-4" }
        ],
        instructions: [
            "Toast the bread slices until golden and crisp.",
            "Cut the avocados in half, remove the pit, and scoop the flesh into a bowl.",
            "Add lemon juice, salt, and pepper to the avocado. Mash with a fork to your desired consistency (chunky or smooth).",
            "Spread the avocado mixture evenly on the toast slices.",
            "If desired, top with cherry tomatoes, crumbled feta, and microgreens.",
            "Drizzle with olive oil and sprinkle with red pepper flakes if using.",
            "For a more substantial meal, top each toast with a fried or poached egg.",
            "Serve immediately while the toast is still warm and crisp."
        ],
        reviews: [
            {
                name: "Rachel Green",
                date: "March 18, 2025",
                rating: 5,
                comment: "So simple yet so good! I added a poached egg on top and it made the perfect breakfast. Love how customizable this is!"
            },
            {
                name: "Daniel Lee",
                date: "April 7, 2025",
                rating: 4,
                comment: "Great quick breakfast. I added some everything bagel seasoning on top which gave it an extra flavor boost. Will definitely make again."
            },
            {
                name: "Sofia Gonzalez",
                date: "March 25, 2025",
                rating: 5,
                comment: "This has become my go-to breakfast. So nutritious and filling. I like to add sliced radishes and microgreens for extra crunch and nutrients."
            }
        ]
    },
    9: {
        id: 9,
        title: "Berry Smoothie Bowl",
        cuisine: "Health Food",
        type: "Breakfast",
        description: "Thick smoothie made with mixed berries and topped with granola and fresh fruit. This vibrant breakfast bowl is packed with antioxidants, vitamins, and natural sweetness from the berries. The creamy smoothie base is topped with crunchy granola, fresh fruits, and other nutritious toppings for a satisfying and Instagram-worthy breakfast.",
        image: "images/Berry Smoothie Bowl.jpg",
        rating: 4.9,
        tags: ["Breakfast", "Healthy", "Fruit", "Vegetarian", "Quick"],
        ingredients: [
            { name: "Frozen mixed berries", quantity: "2 cups" },
            { name: "Frozen banana", quantity: "1 medium" },
            { name: "Greek yogurt", quantity: "1/2 cup" },
            { name: "Almond milk (or any milk)", quantity: "1/4 cup" },
            { name: "Honey or maple syrup", quantity: "1-2 tbsp" },
            { name: "Granola", quantity: "1/2 cup" },
            { name: "Fresh berries (strawberries, blueberries)", quantity: "1/2 cup" },
            { name: "Sliced banana", quantity: "1/2 medium" },
            { name: "Chia seeds", quantity: "1 tbsp" },
            { name: "Shredded coconut", quantity: "1 tbsp" },
            { name: "Almond butter (optional)", quantity: "1 tbsp" }
        ],
        instructions: [
            "Place the frozen berries, frozen banana, Greek yogurt, and milk in a high-powered blender.",
            "Blend on low speed initially, then gradually increase to high. You may need to stop and scrape down the sides occasionally.",
            "Add honey or maple syrup to taste, depending on the sweetness of your berries.",
            "The consistency should be very thick – thicker than a regular smoothie. If it's too thick to blend, add a little more milk, one tablespoon at a time.",
            "Pour the smoothie mixture into a bowl. It should be thick enough to eat with a spoon.",
            "Top with granola, fresh berries, sliced banana, chia seeds, and shredded coconut.",
            "If using, drizzle almond butter on top.",
            "Serve immediately while still cold and enjoy with a spoon!",
            "For variations, try different frozen fruits like mango, pineapple, or açaí. You can also add protein powder or spinach for extra nutrition."
        ],
        reviews: [
            {
                name: "Olivia Green",
                date: "April 15, 2025",
                rating: 5,
                comment: "Such a beautiful and delicious breakfast! The combination of frozen and fresh berries gives it amazing flavor. I added a scoop of protein powder to mine for a post-workout meal."
            },
            {
                name: "Jack Thompson",
                date: "March 30, 2025",
                rating: 5,
                comment: "I've been making this every morning for the past week. It's filling, nutritious, and keeps me full until lunch. The toppings make it fun to eat!"
            },
            {
                name: "Maya Patel",
                date: "April 8, 2025",
                rating: 4,
                comment: "Great healthy breakfast option. I used coconut yogurt instead of Greek yogurt for a dairy-free version and it worked perfectly."
            }
        ]
    },
    11: {
        id: 11,
        title: "Apple Pie",
        cuisine: "American",
        type: "Dessert",
        description: "Classic dessert with tender spiced apples in a flaky crust. This traditional American pie features a buttery, flaky crust filled with layers of thinly sliced apples, sugar, and warm spices like cinnamon and nutmeg. The top crust is golden brown and slightly caramelized, creating the perfect contrast to the soft, juicy filling.",
        image: "images/Apple Pie.jpg",
        rating: 4.8,
        tags: ["Dessert", "Baking", "Fruit", "American", "Classic"],
        ingredients: [
            { name: "For the crust:", quantity: "" },
            { name: "All-purpose flour", quantity: "2 1/2 cups" },
            { name: "Salt", quantity: "1 tsp" },
            { name: "Unsalted butter, very cold, cubed", quantity: "1 cup (2 sticks)" },
            { name: "Ice water", quantity: "6-8 tbsp" },
            { name: "For the filling:", quantity: "" },
            { name: "Apples (Granny Smith or mix with Honeycrisp)", quantity: "6-7 large" },
            { name: "Granulated sugar", quantity: "3/4 cup" },
            { name: "All-purpose flour", quantity: "2 tbsp" },
            { name: "Ground cinnamon", quantity: "1 1/2 tsp" },
            { name: "Ground nutmeg", quantity: "1/4 tsp" },
            { name: "Ground allspice", quantity: "1/8 tsp" },
            { name: "Lemon juice", quantity: "1 tbsp" },
            { name: "Vanilla extract", quantity: "1 tsp" },
            { name: "Unsalted butter, cut into small pieces", quantity: "2 tbsp" },
            { name: "Egg (for egg wash)", quantity: "1" },
            { name: "Sugar for sprinkling on top", quantity: "1 tbsp" }
        ],
        instructions: [
            "For the crust: In a food processor, pulse the flour and salt. Add the cold cubed butter and pulse until the mixture resembles coarse crumbs with some pea-sized pieces.",
            "Gradually add ice water, 1 tablespoon at a time, pulsing until the dough begins to form a ball. Divide the dough in half, flatten into disks, wrap in plastic, and refrigerate for at least 1 hour.",
            "For the filling: Peel, core, and slice the apples thinly (about 1/4-inch thick). Place in a large bowl.",
            "Add sugar, flour, cinnamon, nutmeg, allspice, lemon juice, and vanilla to the apples. Toss gently to coat all slices evenly. Let sit for 15-30 minutes to allow juices to develop.",
            "Preheat oven to 425°F (220°C).",
            "Roll out one disk of dough on a floured surface to a 12-inch circle. Transfer to a 9-inch pie dish, pressing gently into the bottom and sides.",
            "Pour the apple mixture into the pie crust, mounding slightly in the center. Dot the top with small pieces of butter.",
            "Roll out the second disk of dough and place over the filling. Trim excess dough, leaving about 1/2-inch overhang. Fold the edges under and crimp decoratively.",
            "Cut several slits in the top crust to allow steam to escape. Beat the egg with 1 tablespoon of water and brush over the top crust. Sprinkle with sugar.",
            "Place the pie on a baking sheet and bake for 45-50 minutes, until the crust is golden brown and the filling is bubbling through the slits. If the edges brown too quickly, cover them with foil.",
            "Cool on a wire rack for at least 2 hours before serving to allow the filling to set."
        ],
        reviews: [
            {
                name: "William Anderson",
                date: "March 28, 2025",
                rating: 5,
                comment: "This pie is exceptional! The crust is perfectly flaky and the filling has just the right balance of sweetness and spice. My family devoured it in one sitting."
            },
            {
                name: "Elizabeth Cooper",
                date: "April 12, 2025",
                rating: 5,
                comment: "I've tried many apple pie recipes over the years, and this one is now my favorite. The mix of apples gives it such a wonderful flavor and texture."
            },
            {
                name: "James Mitchell",
                date: "April 3, 2025",
                rating: 4,
                comment: "Great classic recipe. I added a bit more cinnamon and some cardamom for extra flavor. The tips for the crust were very helpful - mine turned out flaky and delicious."
            }
        ]
    }
};

// DOM Elements
const recipeImage = document.getElementById('recipeImage');
const recipeTitle = document.getElementById('recipeTitle');
const recipeCuisine = document.getElementById('recipeCuisine');
const recipeType = document.getElementById('recipeType');
const recipeRating = document.getElementById('recipeRating');
const recipeTags = document.getElementById('recipeTags');
const recipeDescription = document.getElementById('recipeDescription');
const ingredientsList = document.getElementById('ingredientsList');
const instructionsList = document.getElementById('instructionsList');
const reviewsList = document.getElementById('reviewsList');
const defaultContent = document.getElementById('defaultContent');
const instructionsContent = document.getElementById('instructionsContent');
const toggleViewBtn = document.getElementById('toggleViewBtn');
const leaveReviewBtn = document.getElementById('leaveReviewBtn');

// Extract recipe ID from URL query parameter
function getRecipeIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const recipeId = urlParams.get('id');
    return recipeId ? parseInt(recipeId) : null;
}

// Function to find recipe by ID
function findRecipeById(id) {
    // First try to get from hardcoded sample data
    if (recipeDetails[id]) {
        return recipeDetails[id];
    }
    
    // If not found in hardcoded data, try localStorage
    // Convert the id to the correct type for comparison
    const numericId = parseInt(id);
    
    // First, try to find in sample recipes from localStorage
    let sampleRecipes = [];
    try {
        sampleRecipes = JSON.parse(localStorage.getItem('allSampleRecipes') || '[]');
    } catch (e) {
        console.error('Error loading sample recipes:', e);
    }
    
    // Search for recipe in sample recipes from localStorage
    let foundRecipe = sampleRecipes.find(recipe => recipe.id === numericId);
    
    // If not found in sample recipes, try to find in user recipes from localStorage
    if (!foundRecipe) {
        try {
            const userRecipes = JSON.parse(localStorage.getItem('tastyRecipes') || '[]');
            // For user recipes, we need to check if the ID is stored as a number or string
            foundRecipe = userRecipes.find(recipe => recipe.id == id);
        } catch (e) {
            console.error('Error loading user recipes:', e);
        }
    }
    
    return foundRecipe;
}

// Show error message
function showError(message) {
    document.querySelector('main').innerHTML = `
        <div class="error-container">
            <h2>Error</h2>
            <p>${message}</p>
            <button id="backToRecipesBtn" class="secondary-btn">Back to Recipes</button>
        </div>
    `;
    
    document.getElementById('backToRecipesBtn').addEventListener('click', function() {
        window.location.href = 'recipes.html';
    });
}

// Display recipe from hardcoded data
function displayHardcodedRecipe(recipe) {
    // Set page title
    document.title = `${recipe.title} - Tasty Recipes`;
    
    // Update DOM with recipe details
    recipeImage.src = recipe.image;
    recipeImage.alt = recipe.title;
    recipeTitle.textContent = recipe.title;
    recipeCuisine.textContent = recipe.cuisine;
    recipeType.textContent = recipe.type;
    
    // Display rating with stars
    const stars = '★'.repeat(Math.floor(recipe.rating)) + '☆'.repeat(5 - Math.floor(recipe.rating));
    recipeRating.innerHTML = `${stars} <span>(${recipe.rating})</span>`;
    
    // Display tags
    recipeTags.innerHTML = recipe.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    
    // Display description
    recipeDescription.textContent = recipe.description;
    
    // Display ingredients
    ingredientsList.innerHTML = recipe.ingredients.map(ingredient => 
        `<li><span class="ingredient-name">${ingredient.name}</span> <span class="ingredient-quantity">${ingredient.quantity}</span></li>`
    ).join('');
    
    // Display instructions
    instructionsList.innerHTML = recipe.instructions.map(instruction => 
        `<li>${instruction}</li>`
    ).join('');
    
    // Display reviews
    reviewsList.innerHTML = recipe.reviews.map(review => `
        <div class="review-item">
            <div class="review-header">
                <span class="reviewer-name">${review.name}</span>
                <span class="review-date">${review.date}</span>
            </div>
            <div class="review-rating">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div>
            <p class="review-text">${review.comment}</p>
        </div>
    `).join('');
}

// Display custom user recipe
function displayUserRecipe(recipe) {
    // Get recipe container element
    const recipeContainer = document.getElementById('recipeDetail');
    
    // Calculate total time
    const totalTime = recipe.prepTime + recipe.cookTime;
    
    // Format dietary information
    const dietaryInfo = recipe.diet && recipe.diet.length > 0 
        ? recipe.diet.map(d => capitalizeFirstLetter(d)).join(', ') 
        : 'None';
    
    // Create HTML
    const html = `
        <div class="recipe-header">
            <div class="recipe-image-container">
                <img src="${recipe.image}" alt="${recipe.title}" class="recipe-detail-image">
            </div>
            <div class="recipe-info">
                <h1>${recipe.title}</h1>
                <p class="recipe-description">${recipe.description}</p>
                
                <div class="recipe-meta-info">
                    <div class="meta-item">
                        <span class="meta-label">Prep Time:</span>
                        <span class="meta-value">${recipe.prepTime} mins</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Cook Time:</span>
                        <span class="meta-value">${recipe.cookTime} mins</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Total Time:</span>
                        <span class="meta-value">${totalTime} mins</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Servings:</span>
                        <span class="meta-value">${recipe.servings}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Category:</span>
                        <span class="meta-value">${capitalizeFirstLetter(recipe.category)}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Dietary:</span>
                        <span class="meta-value">${dietaryInfo}</span>
                    </div>
                </div>
                
                <div class="recipe-tags">
                    ${recipe.tags.map(tag => `<span class="recipe-tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
        
        <div class="recipe-content">
            <div class="recipe-section ingredients-section">
                <h2>Ingredients</h2>
                <ul class="ingredients-list">
                    ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
            </div>
            
            <div class="recipe-section instructions-section">
                <h2>Instructions</h2>
                <ol class="instructions-list">
                    ${recipe.instructions.map(step => `<li>${step}</li>`).join('')}
                </ol>
            </div>
        </div>
        
        ${recipe.author ? `
        <div class="recipe-footer">
            <p>Recipe by: ${recipe.author.name}</p>
            ${recipe.dateAdded ? `<p>Added on: ${formatDate(recipe.dateAdded)}</p>` : ''}
        </div>
        ` : ''}
        
        <div class="recipe-actions">
            <button id="backToRecipesBtn" class="secondary-btn">Back to Recipes</button>
            <button id="printRecipeBtn" class="primary-btn">Print Recipe</button>
        </div>
    `;
    
    // Insert HTML
    recipeContainer.innerHTML = html;
    
    // Add event listeners
    document.getElementById('backToRecipesBtn').addEventListener('click', function() {
        window.location.href = 'recipes.html';
    });
    
    document.getElementById('printRecipeBtn').addEventListener('click', function() {
        window.print();
    });
}

// Helper function to capitalize first letter
function capitalizeFirstLetter(string) {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Helper function to format date
function formatDate(dateString) {
    try {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    } catch (e) {
        return dateString;
    }
}

// Toggle between ingredients/reviews and instructions views
function toggleContentView() {
    const isShowingDefault = defaultContent.classList.contains('active');
    
    if (isShowingDefault) {
        defaultContent.classList.remove('active');
        instructionsContent.classList.add('active');
        toggleViewBtn.textContent = 'View Ingredients & Reviews';
    } else {
        instructionsContent.classList.remove('active');
        defaultContent.classList.add('active');
        toggleViewBtn.textContent = 'View Instructions';
    }
}

// Show placeholder alert for leave review
function showLeaveReviewAlert() {
    alert('Review submission is not implemented in this demo. In a complete app, this would open a review form.');
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Get the recipe ID from URL parameter
    const recipeId = getRecipeIdFromUrl();
    
    if (!recipeId) {
        showError('Recipe ID is missing from the URL');
        return;
    }
    
    // Find the recipe
    const recipe = findRecipeById(recipeId);
    
    if (!recipe) {
        showError('Recipe not found');
        return;
    }
    
    // Determine which display function to use based on recipe structure
    if (recipe.cuisine && recipe.ingredients && recipe.ingredients[0] && typeof recipe.ingredients[0] === 'object') {
        displayHardcodedRecipe(recipe);
    } else {
        displayUserRecipe(recipe);
    }
    
    // Set up event listeners
    if (toggleViewBtn) {
        toggleViewBtn.addEventListener('click', toggleContentView);
    }
    
    if (leaveReviewBtn) {
        leaveReviewBtn.addEventListener('click', showLeaveReviewAlert);
    }
}); 