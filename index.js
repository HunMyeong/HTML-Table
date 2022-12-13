$(document).ready(function(){
    $("#toggle").click(function(){
        $(".schedule").slideToggle(0);
       
    });

    $("#professortoggle").click(function(){
        $(".professor").slideToggle(0);
    });
    
    $("#review").click(function(){
        $(".reviewclass").slideToggle(0);
    });

    $(".reviewclass").hide();
  
});


