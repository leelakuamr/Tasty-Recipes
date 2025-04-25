document.addEventListener('DOMContentLoaded', function() {
    // Get form elements
    const form = document.getElementById('addRecipeForm');
    const previewBtn = document.getElementById('previewBtn');
    const submitBtn = document.getElementById('submitBtn');
    
    // Form input elements
    const titleInput = document.getElementById('recipeTitle');
    const descriptionInput = document.getElementById('recipeDescription');
    const prepTimeInput = document.getElementById('prepTime');
    const cookTimeInput = document.getElementById('cookTime');
    const servingsInput = document.getElementById('servings');
    const categorySelect = document.getElementById('category');
    const ingredientsInput = document.getElementById('ingredients');
    const instructionsInput = document.getElementById('instructions');
    const imageInput = document.getElementById('recipeImage');
    const tagsInput = document.getElementById('recipeTags');
    const authorNameInput = document.getElementById('authorName');
    const authorEmailInput = document.getElementById('authorEmail');
    
    // Diet checkboxes
    const dietCheckboxes = document.querySelectorAll('input[name="diet"]');
    
    // Form validation and submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate form
        if (validateForm()) {
            // In a real application, you would submit the form to a server
            // For this demo, we'll show a success message
            
            // Create recipe object from form data
            const recipeData = getFormData();
            
            // Save to localStorage for demo purposes
            saveRecipe(recipeData);
            
            // Show success message and redirect
            alert('Recipe submitted successfully! You will be redirected to the home page.');
            window.location.href = 'index.html';
        }
    });
    
    // Preview button handler
    previewBtn.addEventListener('click', function() {
        if (validateForm()) {
            // For demo purposes, we'll show what the preview would look like
            alert('In a real application, this would show a preview of your recipe before submitting.');
        }
    });
    
    // Add input validation
    titleInput.addEventListener('blur', validateTitle);
    descriptionInput.addEventListener('blur', validateDescription);
    prepTimeInput.addEventListener('blur', validatePrepTime);
    cookTimeInput.addEventListener('blur', validateCookTime);
    servingsInput.addEventListener('blur', validateServings);
    categorySelect.addEventListener('blur', validateCategory);
    ingredientsInput.addEventListener('blur', validateIngredients);
    instructionsInput.addEventListener('blur', validateInstructions);
    authorNameInput.addEventListener('blur', validateAuthorName);
    authorEmailInput.addEventListener('blur', validateAuthorEmail);
    
    // Validate the entire form
    function validateForm() {
        const isTitleValid = validateTitle();
        const isDescriptionValid = validateDescription();
        const isPrepTimeValid = validatePrepTime();
        const isCookTimeValid = validateCookTime();
        const isServingsValid = validateServings();
        const isCategoryValid = validateCategory();
        const isIngredientsValid = validateIngredients();
        const isInstructionsValid = validateInstructions();
        const isAuthorNameValid = validateAuthorName();
        const isAuthorEmailValid = validateAuthorEmail();
        
        return (
            isTitleValid && 
            isDescriptionValid && 
            isPrepTimeValid && 
            isCookTimeValid && 
            isServingsValid && 
            isCategoryValid && 
            isIngredientsValid && 
            isInstructionsValid && 
            isAuthorNameValid && 
            isAuthorEmailValid
        );
    }
    
    // Individual validation functions
    function validateTitle() {
        const value = titleInput.value.trim();
        if (value === '') {
            showError(titleInput, 'Recipe title is required');
            return false;
        } else if (value.length < 3) {
            showError(titleInput, 'Title must be at least 3 characters');
            return false;
        } else {
            showSuccess(titleInput);
            return true;
        }
    }
    
    function validateDescription() {
        const value = descriptionInput.value.trim();
        if (value === '') {
            showError(descriptionInput, 'Description is required');
            return false;
        } else if (value.length < 10) {
            showError(descriptionInput, 'Description must be at least 10 characters');
            return false;
        } else {
            showSuccess(descriptionInput);
            return true;
        }
    }
    
    function validatePrepTime() {
        const value = prepTimeInput.value.trim();
        if (value === '') {
            showError(prepTimeInput, 'Prep time is required');
            return false;
        } else if (parseInt(value) < 0) {
            showError(prepTimeInput, 'Prep time cannot be negative');
            return false;
        } else {
            showSuccess(prepTimeInput);
            return true;
        }
    }
    
    function validateCookTime() {
        const value = cookTimeInput.value.trim();
        if (value === '') {
            showError(cookTimeInput, 'Cook time is required');
            return false;
        } else if (parseInt(value) < 0) {
            showError(cookTimeInput, 'Cook time cannot be negative');
            return false;
        } else {
            showSuccess(cookTimeInput);
            return true;
        }
    }
    
    function validateServings() {
        const value = servingsInput.value.trim();
        if (value === '') {
            showError(servingsInput, 'Number of servings is required');
            return false;
        } else if (parseInt(value) < 1) {
            showError(servingsInput, 'Servings must be at least 1');
            return false;
        } else {
            showSuccess(servingsInput);
            return true;
        }
    }
    
    function validateCategory() {
        const value = categorySelect.value;
        if (value === '') {
            showError(categorySelect, 'Please select a category');
            return false;
        } else {
            showSuccess(categorySelect);
            return true;
        }
    }
    
    function validateIngredients() {
        const value = ingredientsInput.value.trim();
        if (value === '') {
            showError(ingredientsInput, 'Please list the ingredients');
            return false;
        } else if (value.split('\n').filter(line => line.trim() !== '').length < 2) {
            showError(ingredientsInput, 'Please list at least 2 ingredients');
            return false;
        } else {
            showSuccess(ingredientsInput);
            return true;
        }
    }
    
    function validateInstructions() {
        const value = instructionsInput.value.trim();
        if (value === '') {
            showError(instructionsInput, 'Please provide cooking instructions');
            return false;
        } else if (value.split('\n').filter(line => line.trim() !== '').length < 2) {
            showError(instructionsInput, 'Please provide at least 2 steps');
            return false;
        } else {
            showSuccess(instructionsInput);
            return true;
        }
    }
    
    function validateAuthorName() {
        const value = authorNameInput.value.trim();
        if (value === '') {
            showError(authorNameInput, 'Your name is required');
            return false;
        } else {
            showSuccess(authorNameInput);
            return true;
        }
    }
    
    function validateAuthorEmail() {
        const value = authorEmailInput.value.trim();
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        
        if (value === '') {
            showError(authorEmailInput, 'Email is required');
            return false;
        } else if (!emailRegex.test(value)) {
            showError(authorEmailInput, 'Please enter a valid email address');
            return false;
        } else {
            showSuccess(authorEmailInput);
            return true;
        }
    }
    
    // Utility functions for showing errors/success
    function showError(input, message) {
        const formGroup = input.parentElement;
        const errorElement = formGroup.querySelector('.error-message') || document.createElement('div');
        
        errorElement.className = 'error-message';
        errorElement.innerText = message;
        
        if (!formGroup.querySelector('.error-message')) {
            formGroup.appendChild(errorElement);
        }
        
        input.classList.add('error-input');
        input.classList.remove('success-input');
    }
    
    function showSuccess(input) {
        const formGroup = input.parentElement;
        const errorElement = formGroup.querySelector('.error-message');
        
        if (errorElement) {
            formGroup.removeChild(errorElement);
        }
        
        input.classList.remove('error-input');
        input.classList.add('success-input');
    }
    
    // Get form data as an object
    function getFormData() {
        // Get selected dietary preferences
        const dietPreferences = [];
        dietCheckboxes.forEach(checkbox => {
            if (checkbox.checked) {
                dietPreferences.push(checkbox.value);
            }
        });
        
        // Parse tags from comma-separated string
        const tags = tagsInput.value.trim() !== '' 
            ? tagsInput.value.split(',').map(tag => tag.trim())
            : [];
            
        // For demo purposes, we'll use a placeholder image if none is provided
        const imageFile = imageInput.files[0];
        let imageSrc = 'https://via.placeholder.com/400x300?text=No+Image+Provided';
        
        if (imageFile) {
            // In a real application, you would upload the image to a server
            // Here we'll use a placeholder for demonstration
            imageSrc = URL.createObjectURL(imageFile);
        }
        
        return {
            id: Date.now(), // Generate a unique ID based on timestamp
            title: titleInput.value.trim(),
            description: descriptionInput.value.trim(),
            prepTime: parseInt(prepTimeInput.value),
            cookTime: parseInt(cookTimeInput.value),
            servings: parseInt(servingsInput.value),
            category: categorySelect.value,
            diet: dietPreferences,
            ingredients: ingredientsInput.value.trim().split('\n').filter(line => line.trim() !== ''),
            instructions: instructionsInput.value.trim().split('\n').filter(line => line.trim() !== ''),
            image: imageSrc,
            tags: tags,
            author: {
                name: authorNameInput.value.trim(),
                email: authorEmailInput.value.trim()
            },
            dateAdded: new Date().toISOString()
        };
    }
    
    // Save recipe data to localStorage (for demo purposes)
    function saveRecipe(recipe) {
        // Get existing recipes or initialize empty array
        let recipes = JSON.parse(localStorage.getItem('tastyRecipes') || '[]');
        
        // Add new recipe
        recipes.push(recipe);
        
        // Save back to localStorage
        localStorage.setItem('tastyRecipes', JSON.stringify(recipes));
    }
}); 