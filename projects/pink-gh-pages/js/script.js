var navMain = document.querySelector(".menu");
    var navToggle = document.querySelector(".menu__toggle");

    navMain.classList.remove("menu--nojs");

    navToggle.addEventListener("click", function() {
      if (navMain.classList.contains("menu--closed")) {
        navMain.classList.remove("menu--closed");
        navMain.classList.add("menu--opened");
      } else {
        navMain.classList.add("menu--closed");
        navMain.classList.remove("menu--opened");
      }
    });
ymaps.ready(function () {
  var myMap = new ymaps.Map("map", {
    center: [59.93863075783236,30.323054499999976],
    zoom: 16
  }, {
    searchControlProvider: "yandex#search"
  }),
  myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
  }, {
    iconLayout: "default#image",
    iconImageHref: "img/icon-map-marker.svg",
    iconImageSize: [35, 35],
    iconImageOffset: [-30, 0]
  });

  myMap.behaviors.disable("scrollZoom");
  myMap.geoObjects.add(myPlacemark);
});
