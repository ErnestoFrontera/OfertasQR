function iniciarMap(){
    var coord = {lat: -38.06914640086905 ,lng: -57.5578460689807};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
} 