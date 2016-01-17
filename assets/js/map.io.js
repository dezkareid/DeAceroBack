var map,line, marker,index = 0,route = [], route2 = [], route3 = [];

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
  route.push(new google.maps.LatLng(25.657526,-100.3667740));
  route.push(new google.maps.LatLng(25.650507, -100.292265));
  route.push(new google.maps.LatLng(25.726703, -100.308875));

  route2.push(new google.maps.LatLng(25.650811, -100.281487));
  route2.push(new google.maps.LatLng(25.648810, -100.291014));
  route2.push(new google.maps.LatLng(25.631003, -100.27934));
  route2.push(new google.maps.LatLng(25.620555, -100.270886));

  marker1 = new google.maps.Marker({
    position: new google.maps.LatLng(25.650811, -100.281487),
    map: map,
    title: 'Cliente Ferreteria S.A. de C.V'
  });

  marker2 = new google.maps.Marker({
    position: new google.maps.LatLng(25.648810, -100.291014),
    map: map,
    title: 'Cliente Ferreteria Goméz'
  });

  marker3 = new google.maps.Marker({
    position: {lat: 25.631003, lng: -100.27934},
    map: map,
    title: 'Cliente Ferreteria Jiménez'
  });

  marker4 = new google.maps.Marker({
    position: {lat: 25.620555, lng: -100.270886},
    map: map,
    title: 'Cliente Ferreteria Almaguer'
  });


  route3.push(new google.maps.LatLng(25.662571, -100.353756));
  route3.push(new google.maps.LatLng(25.614093, -100.271809));
  route3.push(new google.maps.LatLng(25.606469, -100.268741));
  route3.push(new google.maps.LatLng(25.599541, -100.265018));
  route3.push(new google.maps.LatLng(25.596348, -100.260941));

  map = new google.maps.Map(document.getElementById('map'), {
    center: route[2],
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  marker = new google.maps.Marker({
    position: route[0],
    map: map
  });

  line = new google.maps.Polyline({
    path: route,
    map: map,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8
  });

  route2  = new google.maps.Polyline({
    path: route2,
    map: map,
    strokeColor: '#00FF00',
    strokeOpacity: 0.8
  });

  route3  = new google.maps.Polyline({
    path: route3,
    map: map,
    strokeColor: '#3366FF',
    strokeOpacity: 0.8
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