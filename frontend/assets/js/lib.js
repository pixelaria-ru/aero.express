'use strict';
;( function( window, document )
{
  'use strict';

  var file     = 'images/svg/sprite.svg',
    revision = 1;

  if( !document.createElementNS || !document.createElementNS( 'http://www.w3.org/2000/svg', 'svg' ).createSVGRect )
    return true;

  var isLocalStorage = 'localStorage' in window && window[ 'localStorage' ] !== null,
    request,
    data,
    insertIT = function()
    {
      document.body.insertAdjacentHTML( 'afterbegin', data );
    },
    insert = function()
    {
      if( document.body ) insertIT();
      else document.addEventListener( 'DOMContentLoaded', insertIT );
    };

  if( isLocalStorage && localStorage.getItem( 'inlineSVGrev' ) == revision )
  {
    data = localStorage.getItem( 'inlineSVGdata' );
    if( data )
    {
      insert();
      return true;
    }
  }

  try
  {
    request = new XMLHttpRequest();
    request.open( 'GET', file, true );
    request.onload = function()
    {
      if( request.status >= 200 && request.status < 400 )
      {
        data = request.responseText;
        insert();
        if( isLocalStorage )
        {
          localStorage.setItem( 'inlineSVGdata',  data );
          localStorage.setItem( 'inlineSVGrev',   revision );
        }
      }
    }
    request.send();
  }
  catch( e ){}

}( window, document ) );

(function(){
  const xhr = new XMLHttpRequest();
  const block = document.querySelector('.for-who__right-side');
  xhr.open('GET', 'images/map.svg',true)
  xhr.send()
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
      block.innerHTML = xhr.responseText

    }
  }

}());


var
  timer ,
  p=0,
  progress = document.getElementsByTagName('progress'),
  slider = document.querySelectorAll('.slider img'),
  i = slider.length;
  document.getElementsByClassName('menu')[0].addEventListener('click', mainMenu);
  function mainMenu(){
      document.getElementsByClassName('main-menu')[0].classList.toggle('active')
      document.querySelector('.header').classList.toggle('active')
      document.querySelector('.menu').classList.toggle('active')
  }

  document.querySelector('.for-who__block').addEventListener('mouseover', rectOne)
  document.querySelector('.for-who__block:nth-child(2)').addEventListener('mouseover', rectTwo)

  function rectOne (){
    document.querySelector('.for-who__right-side svg:nth-child(2) #bg polygon').classList.add('active')
    document.querySelector('.for-who__right-side svg .fill-FFAC0122').classList.remove('active')
    document.querySelectorAll('.for-who__block')[0].classList.add('active');
    document.querySelectorAll('.for-who__block')[1].classList.remove('active');
  }
  function rectTwo (){
    document.querySelector('.for-who__right-side svg:nth-child(2) #bg polygon').classList.remove('active')
    document.querySelector('.for-who__right-side svg .fill-FFAC0122').classList.add('active')
    document.querySelectorAll('.for-who__block')[0].classList.remove('active');
    document.querySelectorAll('.for-who__block')[1].classList.add('active');
  }




var start = Date.now();

var timerr = setInterval(function() {
  var timePassed = Date.now() - start;

  if (timePassed >= 6000) {
    clearInterval(timerr);
    return;
  }

  draw(timePassed);

}, 20);

function draw(timePassed) {
  progress[0].setAttribute('value', timePassed);
}




  autoslider ();

function autoslider (){

  timer = setTimeout(function (){
      i--;


      slider[i].style.opacity = '0'
      if(i <= 0){
          for(i=0 ; i<=2;i++){
            slider[i].style.opacity = '1';
            progress[0].setAttribute('value', 0);
          }


        p=0;
        i = slider.length;
        clearTimeout(timer);
      }


autoslider ();

var start = Date.now();

var timerr = setInterval(function() {

  var timePassed = Date.now() - start;

  if (timePassed >= 6000) {
    clearInterval(timerr);
    return;
  }


  draw(timePassed);

}, 20);


function draw(timePassed) {
  progress[0].setAttribute('value', timePassed);
}

},6000);

}
