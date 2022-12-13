$(document).ready(function(){
    $("#toggle").click(function(){
        $(".schedule").slideToggle(0);
       
    });

    $("#btnOnProfessor").click(function(){
        $(".professor").slideDown(0);
    });
    
    $("#btnOffProfessor").click(function(){
        $(".professor").slideUp(0);
    });


  
});
