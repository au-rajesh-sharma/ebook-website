// Add custom JavaScript here

// navbar scroll effect
function userScroll() {
    //get navbar by class
    const navbar = document.querySelector('.navbar');

    //add scroll event listener
    window.addEventListener('scroll', () => {
        ////if user is scrolling up/down more than half way
        if (window.scrollY > 50) {
            //add bg-dark class to navbar
            navbar.classList.add('bg-dark');
            navbar.classList.add('navbar-sticky');
        }
        else { // remove bg-dark from class list
            navbar.classList.remove('bg-dark');
            navbar.classList.remove('navbar-sticky');
        }
    });
}

//call this function when document loaded
document.addEventListener('DOMContentLoaded', userScroll);

