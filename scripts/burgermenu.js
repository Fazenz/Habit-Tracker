function toggleNavMenu() {
    const menu = document.getElementById('menu');
    const burger = document.getElementById('burger-menu');
    menu.classList.toggle('show');
    
    menu.classList.toggle('nav-animation');
    
    burger.classList.toggle('active');
}