(function activeMenu(){
  const mainMenu = document.querySelector('.main-menu');
  const item = mainMenu.querySelectorAll('.list-item a');

  for(let i = 0, max = item.length; i < max; i ++){
    let href = item[i].getAttribute('href');
    if(href === location.pathname){
      item[i].classList.add('active');
    }
  }
}());
