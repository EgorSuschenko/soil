let burger = document.querySelector('.burger');

let toggleBurger = () => {
  burger.classList.toggle('burger__rotate');
  let lines = Array.from(document.querySelectorAll('.line'));
  document.querySelector('.burger__ul').classList.toggle('burger__active');
  lines.map(line => {
    line.classList.toggle('circle')
    var isBurgerNotToggled = !line.classList.contains('circle')
    if (isBurgerNotToggled) {
      burger.style.margin = '0.5rem 2rem';
    } else {
      burger.style.margin = '0 auto';
    }
    line.innerHTML = isBurgerNotToggled ? `
    <svg viewBox="0 0 100 10" xmlns="http://www.w3.org/2000/svg">
      <line x1="0" y1="0" x2="100" y2="0" stroke="white" stroke-width="20" />
    </svg>` : `
    <svg viewBox="0 0 60 60"
    version="1.1" xmlns="http://www.w3.org/2000/svg">
      <circle cx="30" cy="30" r="15" style="fill: white"/>
    </svg>`
    let menuOptions = Array.from(document.querySelectorAll('.navigation__item'));

    menuOptions.map(item => {
      let text = item.querySelector('.nav__text')
      if (isBurgerNotToggled) {
        text.style.position = 'static';
      } else {
        text.style.position = 'absolute';
        text.style.left = '-100%'
      }
      let icon = item.querySelector('.icon');
      if (isBurgerNotToggled) {
        icon.style.margin = '';
      } else {
        icon.style.margin = '0 0.5rem';
      }
    });
  });

  document.querySelector('.navigation__list').classList.toggle('navigation__list-small');

}

burger.addEventListener('click', toggleBurger);
