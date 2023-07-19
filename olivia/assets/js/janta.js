document.addEventListener('DOMContentLoaded', () => {
    const pizzaCalabresa = document.querySelector('.pizza-calabresa');

    pizzaCalabresa.addEventListener('mouseenter', () => {
        pizzaCalabresa.classList.add('active');
    });

    pizzaCalabresa.addEventListener('mouseleave', () => {
        pizzaCalabresa.classList.remove('active');
    });
});