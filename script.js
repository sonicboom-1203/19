$(document).ready(function(){
    $(".tryTohide").click(function(){
        $(this).fadeOut("slow",function(){
             $(this).fadeIn("fast")
        });
    });

    $("#head1").click(function(){
        $("#art1").slideToggle();
    });
    $("#head2").click(function(){
        $("#art2").slideToggle();
    });
    $("#head3").click(function(){
        $("#art3").slideToggle();
    })
})
  