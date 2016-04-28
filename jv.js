$(document).ready(function(){
  
  
 
  
  $("#submit").click(function(){  
    
    $.get("https://api.foursquare.com/v2/venues/search?client_id=SNQKKXSZ0HF3JE4YU2CMQ43A321ZLE4AXCBFCXYTQ1EJN2PU&client_secret=GVTUZ2P4R4N0DHZ4WSXSOY4KRSDQG4JOTFLB13SPATIYDOII&v=20160213&near=" + $("#ip").val() + "&query=" + $("#q").val() + "&limit=10", function(data){
      
        var place0 = { 
        lat : data.response.venues[0].location.lat, 
        lng : data.response.venues[0].location.lng
        
      };
      
       var place1 = { 
        lat : data.response.venues[1].location.lat, 
        lng : data.response.venues[1].location.lng
        
      };
       var place2 = { 
        lat : data.response.venues[2].location.lat, 
        lng : data.response.venues[2].location.lng
        
      };
       var place3 = { 
        lat : data.response.venues[3].location.lat, 
        lng : data.response.venues[3].location.lng
        
      };
       var place4 = { 
        lat : data.response.venues[4].location.lat, 
        lng : data.response.venues[4].location.lng
        
      };
       var place5 = { 
        lat : data.response.venues[5].location.lat, 
        lng : data.response.venues[5].location.lng
        
      };
       var place6 = { 
        lat : data.response.venues[6].location.lat, 
        lng : data.response.venues[6].location.lng
        
      };
       var place7 = { 
        lat : data.response.venues[7].location.lat, 
        lng : data.response.venues[7].location.lng
        
      };
       var place8 = { 
        lat : data.response.venues[8].location.lat, 
        lng : data.response.venues[8].location.lng
        
      };
       var place9 = { 
        lat : data.response.venues[9].location.lat, 
        lng : data.response.venues[9].location.lng
        
      };
      
       $("#print").append("<li class =search0>"+ data.response.venues[0].name+"</li>");
       $("#print").append("<li class =search1>"+ data.response.venues[1].name+"</li>");
       $("#print").append("<li class =search2>"+ data.response.venues[2].name+"</li>");
       $("#print").append("<li class =search3>"+ data.response.venues[3].name+"</li>");
       $("#print").append("<li class =search4>"+ data.response.venues[4].name+"</li>");
       $("#print").append("<li class =search5>"+ data.response.venues[5].name+"</li>");
       $("#print").append("<li class =search6>"+ data.response.venues[6].name+"</li>");
       $("#print").append("<li class =search7>"+ data.response.venues[7].name+"</li>");
       $("#print").append("<li class =search8>"+ data.response.venues[8].name+"</li>");
       $("#print").append("<li class =search9>"+ data.response.venues[9].name+"</li>");
      
      
      
      
      
       
      
     console.log(data.response);
     
      
      
      
     $(".search0").click(this, function(){
       
     
       
      
       
       var map;
// Creates the map
$(document).ready(function() {
 var mapOptions = {
      center: new google.maps.LatLng(place0),
      zoom: 18
    };
    map = new google.maps.Map(document.getElementById("map-canvas"),
        mapOptions);
    
    console.log("pizza");
    
    
     var marker = new google.maps.Marker({
    map: map,
    position: place0 ,
    title: 'Hello World!'


});
    
  });
    
     
      //console.log(data.response.venues[0].name);
      
      });
      
       $(".search1").click(this, function(){
       
     
       
      
       
       var map;
// Creates the map
$(document).ready(function() {
 var mapOptions = {
      center: new google.maps.LatLng(place1),
      zoom: 18
    };
    map = new google.maps.Map(document.getElementById("map-canvas"),
        mapOptions);
    
    console.log("pizza");
    
    
     var marker = new google.maps.Marker({
    map: map,
    position: place1 ,
    title: 'Hello World!'


});
    
  });
    
     
      //console.log(data.response.venues[0].name);
      
      });
          
   $(".search2").click(this, function(){
       
     
       
      
       
       var map;
// Creates the map
$(document).ready(function() {
 var mapOptions = {
      center: new google.maps.LatLng(place2),
      zoom: 18
    };
    map = new google.maps.Map(document.getElementById("map-canvas"),
        mapOptions);
    
    console.log("pizza");
    
    
     var marker = new google.maps.Marker({
    map: map,
    position: place2 ,
    title: 'Hello World!'


});
    
  });
    
     
      //console.log(data.response.venues[0].name);
      
      });
          
   $(".search3").click(this, function(){
       
     
       
      
       
       var map;
// Creates the map
$(document).ready(function() {
 var mapOptions = {
      center: new google.maps.LatLng(place3),
      zoom: 18
    };
    map = new google.maps.Map(document.getElementById("map-canvas"),
        mapOptions);
    
    console.log("pizza");
    
    
     var marker = new google.maps.Marker({
    map: map,
    position: place3 ,
    title: 'Hello World!'


});
    
  });
    
     
      //console.log(data.response.venues[0].name);
      
      });
          
   $(".search4").click(this, function(){
       
     
       
      
       
       var map;
// Creates the map
$(document).ready(function() {
 var mapOptions = {
      center: new google.maps.LatLng(place4),
      zoom: 18
    };
    map = new google.maps.Map(document.getElementById("map-canvas"),
        mapOptions);
    
    console.log("pizza");
    
    
     var marker = new google.maps.Marker({
    map: map,
    position: place4 ,
    title: 'Hello World!'


});
    
  });
    
     
      //console.log(data.response.venues[0].name);
      
      });
          
   $(".search5").click(this, function(){
       
     
       
      
       
       var map;
// Creates the map
$(document).ready(function() {
 var mapOptions = {
      center: new google.maps.LatLng(place5),
      zoom: 18
    };
    map = new google.maps.Map(document.getElementById("map-canvas"),
        mapOptions);
    
    console.log("pizza");
    
    
     var marker = new google.maps.Marker({
    map: map,
    position: place5 ,
    title: 'Hello World!'


});
    
  });
    
     
      //console.log(data.response.venues[0].name);
      
      });
          
   $(".search6").click(this, function(){
       
     
       
      
       
       var map;
// Creates the map
$(document).ready(function() {
 var mapOptions = {
      center: new google.maps.LatLng(place6),
      zoom: 18
    };
    map = new google.maps.Map(document.getElementById("map-canvas"),
        mapOptions);
    
    console.log("pizza");
    
    
     var marker = new google.maps.Marker({
    map: map,
    position: place6 ,
    title: 'Hello World!'


});
    
  });
    
     
      //console.log(data.response.venues[0].name);
      
      });
          
   $(".search7").click(this, function(){
       
     
       
      
       
       var map;
// Creates the map
$(document).ready(function() {
 var mapOptions = {
      center: new google.maps.LatLng(place7),
      zoom: 18
    };
    map = new google.maps.Map(document.getElementById("map-canvas"),
        mapOptions);
    
    console.log("pizza");
    
    
     var marker = new google.maps.Marker({
    map: map,
    position: place7 ,
    title: 'Hello World!'


});
    
  });
    
     
      //console.log(data.response.venues[0].name);
      
      });
          
   $(".search8").click(this, function(){
       
     
       
      
       
       var map;
// Creates the map
$(document).ready(function() {
 var mapOptions = {
      center: new google.maps.LatLng(place8),
      zoom: 18
    };
    map = new google.maps.Map(document.getElementById("map-canvas"),
        mapOptions);
    
    console.log("pizza");
    
    
     var marker = new google.maps.Marker({
    map: map,
    position: place8 ,
    title: 'Hello World!'


});
    
  });
    
     
      //console.log(data.response.venues[0].name);
      
      });
          
   $(".search9").click(this, function(){
       
     
       
      
       
       var map;
// Creates the map
$(document).ready(function() {
 var mapOptions = {
      center: new google.maps.LatLng(place9),
      zoom: 18
    };
    map = new google.maps.Map(document.getElementById("map-canvas"),
        mapOptions);
    
    console.log("pizza");
    
    
     var marker = new google.maps.Marker({
    map: map,
    position: place9 ,
    title: 'Hello World!'


});
    
  });
    
     
      //console.log(data.response.venues[0].name);
      
      });
          
  
          
  
      
      
  
  });
  
 
  
  
  
  $("#clear").click(function(){
    
    $("#print").empty();
    
    
  });
  
});

});           
