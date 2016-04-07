$(document).ready(function(){
  
  
 
  
  $("#submit").click(function(){  
    
    $.get("https://api.foursquare.com/v2/venues/search?client_id=SNQKKXSZ0HF3JE4YU2CMQ43A321ZLE4AXCBFCXYTQ1EJN2PU&client_secret=GVTUZ2P4R4N0DHZ4WSXSOY4KRSDQG4JOTFLB13SPATIYDOII&v=20160213&near=" + $("#ip").val() + "&query=" + $("#q").val() + "&limit=10", function(data){
      for(i=0;i< data.response.venues.length;i++){
      
      $("#print").append("<li class =search>"+ data.response.venues[i].name+"</li>");
      
     console.log(data.response.venues[i].location.lat);
     
      var place = { 
        lat : data.response.venues[i].location.lat, 
        lng : data.response.venues[i].location.lng
        
      };
      
      
      
     $(".search").click(this,function(){
       
       var place = { 
        lat : data.response.venues[this].location.lat, 
        lng : data.response.venues[this].location.lng
        
      };
      
       
       var map;
// Creates the map
$(document).ready(function() {
 var mapOptions = {
      center: new google.maps.LatLng(place),
      zoom: 1
    };
    map = new google.maps.Map(document.getElementById("map-canvas"),
        mapOptions);
    
    console.log("pizza");
    
    
     var marker = new google.maps.Marker({
    map: map,
    position: place ,
    title: 'Hello World!'


});
    
  });
    
     
      //console.log(data.response.venues[0].name);
      
      });
          
  
    
      }
  
  });
  
 
  
  
  
  $("#clear").click(function(){
    
    $("#print").empty();
    
  });
  
});

});           
