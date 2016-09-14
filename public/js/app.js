"use strict";var Outdoorsy=Outdoorsy||{};Outdoorsy.api_url="http://localhost:3000/api",Outdoorsy.init=function(){this.apiUrl="http://localhost:3000/api",this.mapSetup(),this.eventListeners(),this.getToken()?this.loggedInState():this.loggedOutState()},Outdoorsy.eventListeners=function(){$("main").on("submit",".modal form",this.handleForm),$(".logout").on("click",this.logout.bind(this))},Outdoorsy.handleForm=function(){console.log("working"),event.preventDefault();var t=""+Outdoorsy.apiUrl+$(this).attr("action"),o=$(this).attr("method"),e=$(this).serialize();return $(".modal").modal("hide"),Outdoorsy.ajaxRequest(t,o,e,function(t){t.token&&Outdoorsy.setToken(t.token),Outdoorsy.loggedInState()})},Outdoorsy.ajaxRequest=function(t,o,e,n){return $.ajax({url:t,method:o,data:e,beforeSend:this.setRequestHeader.bind(this)}).done(n).fail(function(t){console.log(t)})},Outdoorsy.logout=function(){event.preventDefault(),this.removeToken(),this.loggedOutState()},Outdoorsy.setRequestHeader=function(t,o){return t.setRequestHeader("Authorization","Bearer "+this.getToken())},Outdoorsy.setToken=function(t){return window.localStorage.setItem("token",t)},Outdoorsy.getToken=function(){return window.localStorage.getItem("token")},Outdoorsy.removeToken=function(){return window.localStorage.clear()},Outdoorsy.loggedInState=function(){$(".loggedOut").hide(),$(".loggedIn").show()},Outdoorsy.loggedOutState=function(){$(".loggedOut").show(),$(".loggedIn").hide()},Outdoorsy.mapSetup=function(){var t=document.getElementById("map-canvas");console.log(t);var o={zoom:13,center:new google.maps.LatLng(51.506178,(-.088369)),mapTypeId:google.maps.MapTypeId.ROADMAP,styles:[]};this.map=new google.maps.Map(t,o),this.getActivities()},Outdoorsy.getActivities=function(){return $.get(this.api_url+"/activities").done(this.loopThroughActivities.bind(this))},Outdoorsy.loopThroughActivities=function(t){return $.each(t.activities,this.createMarkerForActivity.bind(this))},Outdoorsy.createMarkerForActivity=function(t,o){var e=new google.maps.LatLng(o.lat,o.lng),n=new google.maps.Marker({position:e,map:this.map});this.addInfoWindowForActivity(o,n)},Outdoorsy.addInfoWindowForActivity=function(t,o){var e=this;google.maps.event.addListener(o,"click",function(){"undefined"!=typeof e.infowindow&&e.infowindow.close(),e.infowindow=new google.maps.InfoWindow({content:'\n      <div class="info">\n      <img src="'+t.image+'">\n      <h3>'+t.name+"</h3>\n      <p>"+t.description+"</p>\n      </div>\n      "}),e.infowindow.open(e.map,o),e.map.setCenter(o.getPosition())})},$(Outdoorsy.init.bind(Outdoorsy));