const Outdoorsy = Outdoorsy || {};

Outdoorsy.api_url = "http://localhost:3000/api";

Outdoorsy.init = function() {
  this.apiUrl = "http://localhost:3000/api";
  this.mapSetup();
  this.eventListeners();

  if (this.getToken()) {
    this.loggedInState();
  } else {
    this.loggedOutState();
  }
};

Outdoorsy.eventListeners = function() {
  $('.modal form').on("submit", this.handleForm);
  $(".logout").on("click", this.logout.bind(this));
  // $(".usersIndex").on("click", this.usersIndex.bind(this));
};

Outdoorsy.handleForm = function(){
  event.preventDefault();

  let url    = `${Outdoorsy.apiUrl}${$(this).attr("action")}`;
  let method = $(this).attr("method");
  let data   = $(this).serialize();

  $($(this).parents(".modal")).modal("hide");

  return Outdoorsy.ajaxRequest(url, method, data, (data) => {
    if (data.token) Outdoorsy.setToken(data.token);
    Outdoorsy.loggedInState();
  });
};

Outdoorsy.ajaxRequest = function(url, method, data, callback){
  return $.ajax({
    url,
    method,
    data,
    beforeSend: this.setRequestHeader.bind(this)
  })
  .done(callback)
  .fail(data => {
    console.log(data);
  });
};

Outdoorsy.logout = function() {
  event.preventDefault();
  this.removeToken();
  this.loggedOutState();
};

Outdoorsy.setRequestHeader = function(xhr, settings) {
  return xhr.setRequestHeader("Authorization", `Bearer ${this.getToken()}`);
};

Outdoorsy.setToken = function(token){
  return window.localStorage.setItem("token", token);
};

Outdoorsy.getToken = function(){
  return window.localStorage.getItem("token");
};

Outdoorsy.removeToken = function(){
  return window.localStorage.clear();
};

Outdoorsy.loggedInState = function(){
  $(".loggedOut").hide();
  $(".loggedIn").show();
};

Outdoorsy.loggedOutState = function(){
  $(".loggedOut").show();
  $(".loggedIn").hide();
};

Outdoorsy.getCurrentLocation = function() {
  navigator.geolocation.getCurrentPosition(function(position){
    let marker = new google.maps.Marker({
      position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
      map: Outdoorsy.map,
      animation: google.maps.Animation.DROP,
      icon: {
        url: "http://furtaev.ru/preview/user_on_map_2_small.png",
        scaledSize: new google.maps.Size(56, 56)
      }
    });

    Outdoorsy.map.setCenter(marker.getPosition());
  });
};

Outdoorsy.addActivity = function() {
  event.preventDefault();
  $.ajax({
    method: "POST",
    url: "http://localhost:3000/api/activities",
    data: $(this).serialize()
  }).done(data => {
    console.log(data.activity);
    Outdoorsy.createMarkerForActivity(null, data.activity);
    $('form').reset().hide();
  });
};

Outdoorsy.mapSetup = function() {
  let canvas = document.getElementById('map-canvas');
  console.log(canvas);

  let mapOptions = {
    zoom: 13,
    center: new google.maps.LatLng(51.506178,-0.088369),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#87b5db"},{"visibility":"on"}]}]
  };

  this.map = new google.maps.Map(canvas, mapOptions);

  this.getActivities();
};

Outdoorsy.getActivities = function(){
  // WILL HAVE TO CHANGE LATER TO HAVE A JWT TOKEN
  return $.get(`${this.api_url}/activities`).done(this.loopThroughActivities.bind(this));
};

Outdoorsy.loopThroughActivities = function(data) {
  return $.each(data.activities, this.createMarkerForActivity.bind(this));
};

Outdoorsy.createMarkerForActivity = function(index, activity) {
  // console.log(activity, this);

  let latlng = new google.maps.LatLng(activity.lat, activity.lng);

  let icon = {
    url: "/images/badge.png", // url
    scaledSize: new google.maps.Size(34.95, 40), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
  };

  let marker = new google.maps.Marker({
    position: latlng,
    map: this.map,
    icon: icon
    // icon: {
    //   url: "http://furtaev.ru/preview/activity_map_pointer_small.png",
    //   scaledSize: new google.maps.Size(56, 56)
    // }
  });



  this.addInfoWindowForActivity(activity, marker);
};

Outdoorsy.addInfoWindowForActivity = function(activity, marker) {
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


$(Outdoorsy.init.bind(Outdoorsy));
