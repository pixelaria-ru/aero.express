"use strict";

(function () {
  var header = document.querySelector('header');

  window.onscroll = function () {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if (scrolled >= 500) {
      header.style.top = '-150px';
    } else {
      header.style.top = '0px';
    }

    if (scrolled >= window.screen.height) {
      header.classList.add('fixed');
    } else {
      header.classList.remove('fixed');
    }

    if (scrolled >= window.screen.height + 100) {
      header.style.top = '0';
    }
  };
})();
'use strict';

;

(function (window, document) {
  'use strict';

  var file = 'images/svg/sprite.svg',
      revision = 1;
  if (!document.createElementNS || !document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect) return true;

  var isLocalStorage = 'localStorage' in window && window['localStorage'] !== null,
      request,
      data,
      insertIT = function insertIT() {
    document.body.insertAdjacentHTML('afterbegin', data);
  },
      insert = function insert() {
    if (document.body) insertIT();else document.addEventListener('DOMContentLoaded', insertIT);
  };

  if (isLocalStorage && localStorage.getItem('inlineSVGrev') == revision) {
    data = localStorage.getItem('inlineSVGdata');

    if (data) {
      insert();
      return true;
    }
  }

  try {
    request = new XMLHttpRequest();
    request.open('GET', file, true);

    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        data = request.responseText;
        insert();

        if (isLocalStorage) {
          localStorage.setItem('inlineSVGdata', data);
          localStorage.setItem('inlineSVGrev', revision);
        }
      }
    };

    request.send();
  } catch (e) {}
})(window, document);

(function () {
  var xhr = new XMLHttpRequest();
  var block = document.querySelector('.for-who__right-side');
  xhr.open('GET', 'images/map.svg', true);
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      block.innerHTML = xhr.responseText;
    }
  };
})();

var timer,
    p = 0,
    progress = document.getElementsByTagName('progress'),
    slider = document.querySelectorAll('.slider img'),
    i = slider.length;
document.getElementsByClassName('menu')[0].addEventListener('click', mainMenu);

function mainMenu() {
  document.getElementsByClassName('main-menu')[0].classList.toggle('active');
  document.querySelector('.header').classList.toggle('active');
  document.querySelector('.menu').classList.toggle('active');
}

document.querySelector('.for-who__block').addEventListener('mouseover', rectOne);
document.querySelector('.for-who__block:nth-child(2)').addEventListener('mouseover', rectTwo);

function rectOne() {
  document.querySelector('.for-who__right-side svg:nth-child(2) #bg polygon').classList.add('active');
  document.querySelector('.for-who__right-side svg .fill-FFAC0122').classList.remove('active');
  document.querySelectorAll('.for-who__block')[0].classList.add('active');
  document.querySelectorAll('.for-who__block')[1].classList.remove('active');
}

function rectTwo() {
  document.querySelector('.for-who__right-side svg:nth-child(2) #bg polygon').classList.remove('active');
  document.querySelector('.for-who__right-side svg .fill-FFAC0122').classList.add('active');
  document.querySelectorAll('.for-who__block')[0].classList.remove('active');
  document.querySelectorAll('.for-who__block')[1].classList.add('active');
}

var start = Date.now();
var timerr = setInterval(function () {
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

autoslider();

function autoslider() {
  timer = setTimeout(function () {
    i--;
    slider[i].style.opacity = '0';

    if (i <= 0) {
      for (i = 0; i <= 2; i++) {
        slider[i].style.opacity = '1';
        progress[0].setAttribute('value', 0);
      }

      p = 0;
      i = slider.length;
      clearTimeout(timer);
    }

    autoslider();
    var start = Date.now();
    var timerr = setInterval(function () {
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
  }, 6000);
}
"use strict";

if (document.getElementById('map') != null) {
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
      center: [55.982800, 37.442230],
      zoom: 9,
      controls: ['zoomControl', 'fullscreenControl']
    }, {
      searchControlProvider: 'yandex#search'
    }),
        // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass('<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'),
        myPlacemarkWithContent = new ymaps.Placemark([55.982800, 37.442230], {
      hintContent: ' Санкт-Петербург, Уманский переулок, д. 72, литера ГГ1, пом. 3-Н, К. 1',
      balloonContent: 'СТЕРХ',
      iconContent: 'I'
    }, {
      // Опции.
      iconLayout: 'default#imageWithContent',
      iconImageSize: [25, 30],
      iconImageOffset: [-24, -24],
      iconContentOffset: [15, 15],
      // Макет содержимого.
      iconContentLayout: MyIconContentLayout
    });
    myMap.geoObjects.add(myPlacemarkWithContent);
  });
}