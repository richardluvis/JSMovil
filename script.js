$(document).ready(function(){
    
    $("#submitVideo").click(function(){
        return getVideo();
    });
    
    
});

function getVideo(){
    var video = $("#search").val();
    
    if(video != ''){
        
        $.ajax({
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
    return;
}

