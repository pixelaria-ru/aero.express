(function(){
  const header = document.querySelector('header');
  let logo = document.querySelector('.logotype img');
  window.onscroll = function(){
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;


    if(scrolled >= 500){
      header.style.top = '-150px'
    }else{
      header.style.top = '0px'
    }

    if(scrolled >= window.screen.height){
      header.classList.add('fixed');
      logo.src = '/bitrix/templates/aero/images/logo.png'
    }else{
      header.classList.remove('fixed')
      logo.src = '/bitrix/templates/aero/images/vexp-logo.png'
    }

    if(scrolled >= window.screen.height + 100){
      header.style.top = '0'
    }
  }
}())
