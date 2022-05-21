let home = document.querySelector('.home');
let about = document.querySelector('.about');
let products = document.querySelector('.products');
let contact = document.querySelector('.contact');

let active;

const toggleActiveSection = (item) => {
    switch (item) {
        case "home":
            home.classList.toggle('active');
            break;
        case "about":
            about.classList.toggle('active');
            break;
        case "products":
            products.classList.toggle('active');
            break;
        case "contact":
            contact.classList.toggle('active');
            break;
    
        default:
            break;
    }   
}
