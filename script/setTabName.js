let menuOptions = Array.from(document.querySelectorAll('.navigation__item'));

let setName = (title) => {
  document.querySelector('.tab__name-text').innerHTML = title;
  let controlMenu = document.querySelector('.control__menu');
  controlMenu.classList.toggle('control__menu-closed');
  document.querySelector('.map__holder').style.width =
    controlMenu.classList.contains('control__menu-closed') ? 'calc(100vw - 5rem)' : 'calc(100vw - 40rem)';
}

menuOptions.map (item => {
  let title = item.querySelector('.nav__text').textContent;
  console.log(title)
  item.addEventListener('click', () => setName(title))
});
