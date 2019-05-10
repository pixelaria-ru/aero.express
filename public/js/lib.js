"use strict";

(function activeMenu() {
  var mainMenu = document.querySelector('.main-menu');
  var item = mainMenu.querySelectorAll('.list-item a');

  for (var i = 0, max = item.length; i < max; i++) {
    var href = item[i].getAttribute('href');

    if (href === location.pathname) {
      item[i].classList.add('active');
    }
  }
})();
"use strict";

(function () {
  var header = document.querySelector('header');
  var logo = document.querySelector('.logotype img');

  window.onscroll = function () {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if (scrolled >= 500) {
      header.style.top = '-150px';
    } else {
      header.style.top = '0px';
    }

    if (scrolled >= window.screen.height) {
      header.classList.add('fixed');
      logo.src = '/bitrix/templates/aero/images/logo.png';
    } else {
      header.classList.remove('fixed');
      logo.src = '/bitrix/templates/aero/images/vexp-logo.png';
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
  if (document.querySelector('.for-who__right-side')) {
    var xhr = new XMLHttpRequest();
    var block = document.querySelector('.for-who__right-side');
    xhr.open('GET', '/bitrix/templates/aero/images/map.svg', true);
    xhr.send();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        block.innerHTML = xhr.responseText;
      }
    };
  }
})();

slider();
document.getElementsByClassName('menu')[0].addEventListener('click', mainMenu);

function mainMenu() {
  document.getElementsByClassName('main-menu')[0].classList.toggle('active');
  document.querySelector('.header').classList.toggle('active');
  document.querySelector('.menu').classList.toggle('active');
}

if (document.querySelector('.for-who__block')) {
  document.querySelector('.for-who__block').addEventListener('mouseover', rectOne);
  document.querySelector('.for-who__block:nth-child(2)').addEventListener('mouseover', rectTwo);
}

function rectOne() {
  if (document.querySelectorAll('.for-who__block')[0]) {
    document.querySelector('.for-who__right-side svg:nth-child(2) #bg polygon').classList.remove('active');
    document.querySelector('.for-who__right-side svg .fill-FFAC0122').classList.add('active');
    document.querySelector('.for-who__right-side svg:nth-child(2) #offset').style.fill = '#bbb';
    document.querySelector('.for-who__right-side svg #offset').style.fill = '#19acff';
    document.querySelectorAll('.for-who__block')[0].classList.add('active');
    document.querySelectorAll('.for-who__block')[1].classList.remove('active');
  }
}

function rectTwo() {
  if (document.querySelectorAll('.for-who__block')[0]) {
    document.querySelector('.for-who__right-side svg:nth-child(2) #bg polygon').classList.add('active');
    document.querySelector('.for-who__right-side svg .fill-FFAC0122').classList.remove('active');
    document.querySelector('.for-who__right-side svg:nth-child(2) #offset').style.fill = '#19acff';
    document.querySelector('.for-who__right-side svg #offset').style.fill = '#bbb';
    document.querySelectorAll('.for-who__block')[0].classList.remove('active');
    document.querySelectorAll('.for-who__block')[1].classList.add('active');
  }
}

if (document.getElementsByTagName('progress')[0]) {
  var draw = function draw(timePassed) {
    progress[0].setAttribute('value', timePassed);
  };

  var autoslider = function autoslider() {
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
  };

  var timer,
      p = 0,
      progress = document.getElementsByTagName('progress'),
      slider = document.querySelectorAll('.slider img'),
      i = slider.length;
  var start = Date.now();
  var timerr = setInterval(function () {
    var timePassed = Date.now() - start;

    if (timePassed >= 6000) {
      clearInterval(timerr);
      return;
    }

    draw(timePassed);
  }, 20);
  autoslider();
}
"use strict";

if (document.getElementById('map') != null) {
  var zoom = /terminal-aeroekspress/.test(location.href) || /terminal-e/.test(location.href) ? 16 : 12;
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
      center: [55.964768, 37.413740],
      zoom: zoom,
      controls: ['zoomControl', 'fullscreenControl']
    }, {
      searchControlProvider: 'yandex#search'
    }),
        // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass('<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'),
        myPlacemarkWithContent = new ymaps.Placemark([55.964768, 37.413740], {
      hintContent: ' ',
      balloonContent: '',
      iconContent: 'I'
    }, {
      // Опции.
      iconLayout: 'default#imageWithContent',
      iconImageSize: [25, 30],
      iconImageOffset: [-24, -24],
      iconContentOffset: [15, 15],
      // Макет содержимого.
      iconContentLayout: MyIconContentLayout
    }),
        myPlacemarkWithContent2 = new ymaps.Placemark([55.963844, 37.417120], {
      hintContent: '',
      balloonContent: '',
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

    if (/terminal-aeroekspress/.test(location.href)) {
      myMap.geoObjects.add(myPlacemarkWithContent2);
    } else if (/terminal-e/.test(location.href)) {
      myMap.geoObjects.add(myPlacemarkWithContent);
    } else {
      myMap.geoObjects.add(myPlacemarkWithContent).add(myPlacemarkWithContent2);
    }
  });
}
"use strict";

(function () {
  var svgMap = document.querySelector('.for-who__right-side');

  if (svgMap) {
    svgMap.addEventListener('mouseover', function () {
      if (!document.querySelector('.mapToolTip')) {
        var mapToolTip = document.createElement('span');
        mapToolTip.className = 'mapToolTip button button--pink';
        mapToolTip.innerHTML = 'Увеличить схему';
        svgMap.appendChild(mapToolTip);
      }
    });
    svgMap.addEventListener('click', function (e) {
      if (e.target.classList.contains('cancelMap')) {
        svgMap.classList.remove('active-pop-up');
      } else {
        this.classList.add('active-pop-up');
      }

      if (!document.querySelector('.cancelMap')) {
        var cancelMap = document.createElement('div');
        cancelMap.className = 'cancelMap';
        svgMap.appendChild(cancelMap);
      }
    });
  }
})();
"use strict";

function slider() {
  if (document.querySelector('.slider-room .next')) {
    var roomSliderNext = document.querySelector('.slider-room .next'),
        roomSliderPrev = document.querySelector('.slider-room .prev'),
        roomNumImg = 0,
        roomSliderDots = document.querySelectorAll('.slider-room .dots span'),
        roomSliderImg = document.querySelectorAll('.slider-room img');
    roomSliderImg[roomNumImg].style.opacity = 1;
    roomSliderDots[roomNumImg].classList.add('active');

    var _loop = function _loop(i, max) {
      roomSliderDots[i].addEventListener('click', function () {
        for (var _i = 0, _max = roomSliderDots.length; _i < _max; _i++) {
          roomSliderDots[_i].classList.remove('active');

          roomSliderImg[_i].style.opacity = 0;
        }

        roomSliderDots[i].classList.add('active');
        roomSliderImg[i].style.opacity = 1;
      });
    };

    for (var i = 0, max = roomSliderDots.length; i < max; i++) {
      _loop(i, max);
    }

    roomSliderNext.addEventListener('click', function () {
      if (roomNumImg < roomSliderImg.length - 1) {
        roomSliderImg[roomNumImg].style.opacity = 0;
        roomSliderDots[roomNumImg].classList.remove('active');
        roomNumImg++;
        roomSliderImg[roomNumImg].style.opacity = 1;
        roomSliderDots[roomNumImg].classList.add('active');
      }
    });
    roomSliderPrev.addEventListener('click', function () {
      if (roomNumImg >= 1) {
        roomSliderImg[roomNumImg].style.opacity = 0;
        roomSliderDots[roomNumImg].classList.remove('active');
        roomNumImg--;
        roomSliderImg[roomNumImg].style.opacity = 1;
        roomSliderDots[roomNumImg].classList.add('active');
      }
    });
    var commSliderNext = document.querySelector('.comm .next'),
        commSliderPrev = document.querySelector('.comm .prev'),
        commNumImg = 0,
        commSliderImg = document.querySelectorAll('.comm .comment');
    commSliderImg[commNumImg].style.opacity = 1;
    commSliderNext.addEventListener('click', function () {
      if (commNumImg < commSliderImg.length - 1) {
        commSliderImg[commNumImg].style.opacity = 0;
        commNumImg++;
        commSliderImg[commNumImg].style.opacity = 1;
      }
    });
    commSliderPrev.addEventListener('click', function () {
      if (commNumImg >= 1) {
        commSliderImg[commNumImg].style.opacity = 0;
        commNumImg--;
        commSliderImg[commNumImg].style.opacity = 1;
      }
    });
  }
}