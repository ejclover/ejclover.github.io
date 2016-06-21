$(document).ready(function(){
  
  
 
  
  $("#submit").click(function(){  
      $("#print").empty();
       
    
    $.get("https://api.foursquare.com/v2/venues/search?client_id=SNQKKXSZ0HF3JE4YU2CMQ43A321ZLE4AXCBFCXYTQ1EJN2PU&client_secret=GVTUZ2P4R4N0DHZ4WSXSOY4KRSDQG4JOTFLB13SPATIYDOII&v=20160213&near=" + $("#ip").val() + "&query=" + $("#q").val() + "&limit=10", function(data){
      for(i=0;i< data.response.venues.length;i++){
        var place  = { 
        lat : data.response.venues[i].location.lat, 
        lng : data.response.venues[i].location.lng
        
      };
      
      
       $("#print").append("<li class =search"+ i +">"+ data.response.venues[i].name+"</li>");

      
      
      
      
       
      
     console.log(data.response);
     
      
      
      (function(place) {
         $(".search"+i).click(this, function(){
             
             $("#map-canvas").css("opacity",1);
           
         
           

var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;

           
  
   
           
    // Creates the map
    function initialize() {
  directionsDisplay = new google.maps.DirectionsRenderer();
  var mapOptions = {
    zoom: 14,
    center: pos
  }
 
  directionsDisplay.setMap(map);
}
        var mapOptions = {
          center: new google.maps.LatLng(place),
          zoom: 18
        };
        map = new google.maps.Map(document.getElementById("map-canvas"),  mapOptions);
        
        console.log("pizza");
           
           if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
       var marker1 = new google.maps.Marker({
            map: map,
            position: pos ,
            title: 'Hello World!'
        });
    });
         };  
      
 function calcRoute() {
  var selectedMode = document.getElementById("mode").value;
  var request = {
      origin: pos,
      destination: place,
      // Note that Javascript allows us to access the constant
      // using square brackets and a string value as its
      // "property."
      travelMode: google.maps.TravelMode[selectedMode]
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
  });
}

        
     
         
        
        
        var marker = new google.maps.Marker({
            map: map,
            position: place ,
            title: 'Hello World!'
        });
        
          //console.log(data.response.venues[0].name);
          
          });
          
      })(place)
        
  
      }
      
  
  });
  
 
  
  
  
  $("#clear").click(function(){
    
    $("#print").empty();
     $("#map-canvas").css("opacity",0);
    
  });
  
});

});           
