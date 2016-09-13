console.log("LOADED");

const googleMap = googleMap || {};

googleMap.api_url = "http://localhost:3000/api";

googleMap.init = function() {
  console.log("RUNNING");
  this.mapSetup();
  // this.eventListeners();
};

// googleMap.eventListeners = function() {
//   $('.location').on('click', this.getCurrentLocation);
//   $('.new').on('click', this.toggleForm);
//   $('main').on('submit', 'form', this.addActivity);
// };
//
// googleMap.toggleForm = function() {
//   $('form').slideToggle();
// };

// googleMap.getCurrentLocation = function() {
//   navigator.geolocation.getCurrentPosition(function(position){
//     let marker = new google.maps.Marker({
//       position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
//       map: googleMap.map,
//       animation: google.maps.Animation.DROP,
//       icon: {
//         url: "http://furtaev.ru/preview/user_on_map_2_small.png",
//         scaledSize: new google.maps.Size(56, 56)
//       }
//     });
//
//     googleMap.map.setCenter(marker.getPosition());
//   });
// };
//
// googleMap.addActivity = function() {
//   event.preventDefault();
//   $.ajax({
//     method: "POST",
//     url: "http://localhost:3000/api/activities",
//     data: $(this).serialize()
//   }).done(data => {
//     console.log(data.activity);
//     googleMap.createMarkerForActivity(null, data.activity);
//     $('form').reset().hide();
//   });
// };

googleMap.mapSetup = function() {
  let canvas = document.getElementById('map-canvas');
  console.log(canvas);

  let mapOptions = {
    zoom: 13,
    center: new google.maps.LatLng(51.506178,-0.088369),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: []
  };

  this.map = new google.maps.Map(canvas, mapOptions);

  this.getActivities();
};

googleMap.getActivities = function(){
  // WILL HAVE TO CHANGE LATER TO HAVE A JWT TOKEN
  return $.get(`${this.api_url}/activities`).done(this.loopThroughActivities.bind(this));
};

googleMap.loopThroughActivities = function(data) {
  return $.each(data.activities, this.createMarkerForActivity.bind(this));
};

googleMap.createMarkerForActivity = function(index, activity) {
  console.log(activity, this);

  let latlng = new google.maps.LatLng(activity.lat, activity.lng);

  let marker = new google.maps.Marker({
    position: latlng,
    map: this.map,
    // icon: {
    //   url: "http://furtaev.ru/preview/activity_map_pointer_small.png",
    //   scaledSize: new google.maps.Size(56, 56)
    // }
  });

  this.addInfoWindowForActivity(activity, marker);
};

googleMap.addInfoWindowForActivity = function(activity, marker) {
  google.maps.event.addListener(marker, 'click', () => {
    if (typeof this.infowindow != "undefined") this.infowindow.close();

    this.infowindow = new google.maps.InfoWindow({
      content: `
                <div class="info">
                  <img src="${ activity.image}">
                  <h3>${ activity.name }</h3>
                  <p>${ activity.description}</p>
                </div>
               `
    });

    this.infowindow.open(this.map, marker);
    this.map.setCenter(marker.getPosition());
  });
};

$(googleMap.init.bind(googleMap));
