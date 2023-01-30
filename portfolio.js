function mobileMenuClicked() {
  document.getElementById('mobile-menu-icon').classList.toggle('expanded');
  document.getElementById('mobile-menu-items').toggleAttribute('hidden');
}

document
  .querySelector('#mobile-menu-icon')
  .addEventListener('click', mobileMenuClicked);

document.querySelectorAll('#mobile-menu-items li').forEach((item) => {
  item.addEventListener('click', mobileMenuClicked);
});
