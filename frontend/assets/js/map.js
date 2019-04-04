if(document.getElementById('map') != null){
    ymaps.ready(function () {
var myMap = new ymaps.Map('map', {
        center: [55.982800, 37.442230],
        zoom: 9,
  controls: ['zoomControl', 'fullscreenControl']
    }, {
        searchControlProvider: 'yandex#search'
    }),

    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),
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

myMap.geoObjects


    .add(myPlacemarkWithContent);
});
}
