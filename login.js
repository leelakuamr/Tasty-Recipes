document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    // Add input validation
    emailInput.addEventListener('blur', validateEmail);
    passwordInput.addEventListener('blur', validatePassword);

    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate all fields
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        
        if (isEmailValid && isPasswordValid) {
            // Form is valid, proceed with submission
            // In a real application, you would send a request to the server for authentication
            
            // For demo purposes, we'll simulate a successful login
            alert('Login successful!');
            
            // In a real application you might redirect to another page
            // window.location.href = 'index.html';
        }
    });

    // Input validation functions
    function validateEmail() {
        const emailValue = emailInput.value.trim();
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        
        if (emailValue === '') {
            showError(emailInput, 'Email is required');
            return false;
        } else if (!emailRegex.test(emailValue)) {
            showError(emailInput, 'Please enter a valid email address');
            return false;
        } else {
            showSuccess(emailInput);
            return true;
        }
    }
    
    function validatePassword() {
        const passwordValue = passwordInput.value.trim();
        
        if (passwordValue === '') {
            showError(passwordInput, 'Password is required');
            return false;
        } else {
            showSuccess(passwordInput);
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
}); 