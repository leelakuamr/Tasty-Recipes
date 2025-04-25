document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signupForm');
    const emailInput = document.getElementById('email');
    const mobileInput = document.getElementById('mobile');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    // Add input validation
    emailInput.addEventListener('blur', validateEmail);
    mobileInput.addEventListener('blur', validateMobile);
    passwordInput.addEventListener('blur', validatePassword);
    confirmPasswordInput.addEventListener('blur', validateConfirmPassword);

    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate all fields
        const isEmailValid = validateEmail();
        const isMobileValid = validateMobile();
        const isPasswordValid = validatePassword();
        const isConfirmPasswordValid = validateConfirmPassword();
        
        if (isEmailValid && isMobileValid && isPasswordValid && isConfirmPasswordValid) {
            // Form is valid, proceed with submission
            alert('Account created successfully!');
            // In a real application, you would submit the form data to a server here
            // form.submit();
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
    
    function validateMobile() {
        const mobileValue = mobileInput.value.trim();
        const mobileRegex = /^[0-9]{10}$/;
        
        if (mobileValue === '') {
            showError(mobileInput, 'Mobile number is required');
            return false;
        } else if (!mobileRegex.test(mobileValue)) {
            showError(mobileInput, 'Please enter a valid 10-digit mobile number');
            return false;
        } else {
            showSuccess(mobileInput);
            return true;
        }
    }
    
    function validatePassword() {
        const passwordValue = passwordInput.value.trim();
        
        if (passwordValue === '') {
            showError(passwordInput, 'Password is required');
            return false;
        } else if (passwordValue.length < 6) {
            showError(passwordInput, 'Password must be at least 6 characters');
            return false;
        } else {
            showSuccess(passwordInput);
            return true;
        }
    }
    
    function validateConfirmPassword() {
        const confirmPasswordValue = confirmPasswordInput.value.trim();
        const passwordValue = passwordInput.value.trim();
        
        if (confirmPasswordValue === '') {
            showError(confirmPasswordInput, 'Please confirm your password');
            return false;
        } else if (confirmPasswordValue !== passwordValue) {
            showError(confirmPasswordInput, 'Passwords do not match');
            return false;
        } else {
            showSuccess(confirmPasswordInput);
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