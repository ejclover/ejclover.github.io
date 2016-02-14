$(document).ready(function(){
  
  
 
  
  $("#submit").click(function(){  
    
    $.get("https://api.foursquare.com/v2/venues/search?client_id=SNQKKXSZ0HF3JE4YU2CMQ43A321ZLE4AXCBFCXYTQ1EJN2PU&client_secret=GVTUZ2P4R4N0DHZ4WSXSOY4KRSDQG4JOTFLB13SPATIYDOII&v=20160213&near=" + $("#ip").val() + "&query=" + $("#q").val() + "&limit=10", function(data){
      for(i=0;i< data.response.venues.length;i++)
      $("#print").append("<li>"+ data.response.venues[i].name+"</li>");
      
    
     // console.log(data.response.venues[0].name);
      
      });
          
  
    
    
  
  });
  
  $("#clear").click(function(){
    
    $("#print").empty();
    
  });
  
});
             
