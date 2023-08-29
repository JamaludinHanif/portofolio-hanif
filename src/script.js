const hamburgerMenu2 = document.querySelector('#hamburger-menu');
const navBar = document.querySelector('#mobile-menu');

hamburgerMenu2.addEventListener('click', function() {
    navBar.classList.toggle('hidden');
});
hamburgerMenu2.addEventListener('click', function(e) {
    if (!hamburgerMenu2.contains(e.target) && !navBar.contains(e.target))
    navBar.classList.remove('hidden');
})
console.log(navBar);