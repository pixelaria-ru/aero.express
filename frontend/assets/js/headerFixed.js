(function(){
  const header = document.querySelector('header');

  window.onscroll = function(){
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;


    if(scrolled >= 500){
      header.style.top = '-150px'
    }else{
      header.style.top = '0px'
    }

    if(scrolled >= window.screen.height){
      header.classList.add('fixed');
    }else{
      header.classList.remove('fixed')
    }

    if(scrolled >= window.screen.height + 100){
      header.style.top = '0'
    }
  }
}())
