if(document.getElementById('map') != null){
    let zoom = (/terminal-aeroekspress/.test(location.href) || /terminal-e/.test(location.href)) ? 16 : 12;
    ymaps.ready(function () {
var myMap = new ymaps.Map('map', {
        center: [55.964768, 37.413740],
        zoom: zoom,
  controls: ['zoomControl', 'fullscreenControl']
    }, {
        searchControlProvider: 'yandex#search'
    }),

    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),
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




    if(/terminal-aeroekspress/.test(location.href)){
      myMap.geoObjects
      .add(myPlacemarkWithContent2);
    }else if(/terminal-e/.test(location.href)){
      myMap.geoObjects
      .add(myPlacemarkWithContent)
    }else{
      myMap.geoObjects
      .add(myPlacemarkWithContent)
      .add(myPlacemarkWithContent2);
    }

});
}
