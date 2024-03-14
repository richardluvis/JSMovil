$(document).ready(function(){
    
    $("#submitVideo").click(function(){
        return getVideo();
    });
    
    
});

function getVideo(){
    var video = $("#search").val();
    
    if(video != ''){
        
        $.ajax({
            // https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=java_script&key=AIzaSyB8IbXTJnV3n2ye-6CjXsfCVWIqq8ex1Fw
           url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=' + video + "&key=AIzaSyB8IbXTJnV3n2ye-6CjXsfCVWIqq8ex1Fw",
            type: "GET",
            dataType: "jsonp",
            success: function(data){
                var widget = showResults(data)
                
                
                
                $("#showVideo").html(widget);
                
                $("#search").val('');
            }
            
        });
        
        
    }else{
        $("#error").html("<div class='alert alert-danger' id='errorCity'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>Search video field cannot be empty</div>");
    }
    
    
}


function showResults(data)
{
    console.log(data);
    const videoTitle = data.items[0].snippet.title;
    console.log(data.items.length);
    var table = '';

    for(var i = 0; i < data.items.length; i++){
        table+='<div id="video" class="row">';
        table+='<h2>'+data.items[i].snippet.title+'</h2>';
        table+='<iframe width="640" height="360" src="https://www.youtube.com/embed/'+ data.items[i].id.videoId+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
        table+='<p>Description: '+data.items[i].snippet.description+'</p>'
        table+='</div>';
    }  
    $("#showVideo").html(table);
    return 
           /* '<h2 style="font-weight:bold; font-size:30px; padding-top:20px;" class="text-center">Current Weather for '+data.name+', '+data.sys.country+'</h2>'+
            "<h3 style='padding-left:40px;'><strong>Weather</strong>: "+data.weather[0].main+"</h3>"+
            "<h3 style='padding-left:40px;'><strong>Description</strong>:<img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png'> "+data.weather[0].description+"</h3>"+
            "<h3 style='padding-left:40px;'><strong>Temperature</strong>: "+data.main.temp+" &deg;C</h3>"+
            "<h3 style='padding-left:40px;'><strong>Pressure</strong>: "+data.main.pressure+" hpa</h3>"+
            "<h3 style='padding-left:40px;'><strong>Humidity</strong>: "+data.main.humidity+"%</h3>"+
            "<h3 style='padding-left:40px;'><strong>Min Temperature</strong>: "+data.main.temp_min+"&deg;C</h3>"+
            "<h3 style='padding-left:40px;'><strong>Max Temperature</strong>: "+data.main.temp_max+"&deg;C</h3>"+
            "<h3 style='padding-left:40px;'><strong>Wind Speed</strong>: "+data.wind.speed+"m/s</h3>"+
            "<h3 style='padding-left:40px; padding-bottom:30px;'><strong>Wind Direction</strong>: "+data.wind.deg+"&deg;</h3>";
            */
           ;
}
