var map,line, marker,index = 0,route = [];

function suscribe () {
  var socket = io.connect();
  socket.on("connect", function () {
    socket.on("message", function () {
      runBarryrun();
    });
  });
}

function initMap() {
  route.push(new google.maps.LatLng(25.656824, -100.405280));
  route.push(new google.maps.LatLng(25.657526,-100.36677400000002));
  route.push(new google.maps.LatLng(25.650507, -100.292265));
  route.push(new google.maps.LatLng(25.726703, -100.308875));

  map = new google.maps.Map(document.getElementById('map'), {
    center: route[2],
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.TERRAIN
  });

  marker = new google.maps.Marker({
    position: route[0],
    map: map
  });

  line = new google.maps.Polyline({
    path: route,
    map: map
  });

  suscribe();
}

function reset () {
  marker.setPosition(route[0]);
  index = 0;
}

function runBarryrun () {
  var step = 0;
  var numSteps = 100; 
  var timePerStep = 1; 
  var interval = setInterval(function() {
    step += 1;
    if (step > numSteps) {
      index++;
      clearInterval(interval);
    } else {
      marker.setPosition(google.maps.geometry.spherical.interpolate(route[index],route[index+1],step/numSteps));
    }
  }, timePerStep);
}


window.onload=initMap;