// filepath: /workspaces/Team_Creators/script.js

// LOGIN FORM VALIDATION AND HANDLING
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-container form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = loginForm.querySelector('input[type="email"]').value.trim();
            const password = loginForm.querySelector('input[type="password"]').value.trim();
            
            // Validation
            if (!email) {
                alert('Please enter your email');
                return;
            }
            
            if (!isValidEmail(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            if (!password) {
                alert('Please enter your password');
                return;
            }
            
            if (password.length < 6) {
                alert('Password must be at least 6 characters');
                return;
            }
            
            // Store credentials in localStorage (for demo purposes)
            localStorage.setItem('userEmail', email);
            localStorage.setItem('isLoggedIn', 'true');
            
            console.log('Login successful for:', email);
            alert('Login successful! Redirecting...');
            
            // Redirect to home page after 1 second
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
        });
    }
});

// EMAIL VALIDATION FUNCTION
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// CHECK IF USER IS LOGGED IN
function isUserLoggedIn() {
    return localStorage.getItem('isLoggedIn') === 'true';
}

// GET LOGGED IN USER EMAIL
function getUserEmail() {
    return localStorage.getItem('userEmail');
}

// LOGOUT FUNCTION
function logout() {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'index.html';
}

// NAVBAR LOGIN BUTTON - REDIRECT TO LOGIN OR PROFILE
document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.querySelector('.nav-links .btn');
    
    if (loginBtn && isUserLoggedIn()) {
        loginBtn.textContent = 'Profile';
        loginBtn.href = '#';
        loginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Welcome, ' + getUserEmail());
        });
    }
});

// ENROLL BUTTON FUNCTIONALITY
document.addEventListener('DOMContentLoaded', function() {
    const enrollButtons = document.querySelectorAll('.card button, .feature-card button');
    
    enrollButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (button.textContent.toLowerCase() === 'enroll') {
                e.preventDefault();
                
                if (isUserLoggedIn()) {
                    alert('You are enrolled! Check your email for details.');
                } else {
                    alert('Please login to enroll in this course');
                    window.location.href = 'login.html';
                }
            }
        });
    });
});

// SMOOTH SCROLLING FOR NAVIGATION LINKS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Only smooth scroll if it's not the login button
        if (href !== '#' && href !== '#login') {
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});