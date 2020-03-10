$( document ).ready(function(){
    $(".setServ > a").on("click", function() {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this)
                .siblings(".contentServ")
                .slideUp(200);
            $(".setServ > a i")
                .removeClass("fa-minus")
                .addClass("fa-plus");
        } else {
            $(".setServ > a i")
                .removeClass("fa-minus")
                .addClass("fa-plus");
            $(this)
                .find("i")
                .removeClass("fa-plus")
                .addClass("fa-minus");
            $(".setServ > a").removeClass("active");
            $(this).addClass("active");
            $(".contentServ").slideUp(200);
            $(this)
                .siblings(".contentServ")
                .slideDown(200);
        }
    });





    $( "#createAudio" ).hover(function(){
        $( ".company-info-menu-contentAudio" ).removeClass( "none" );
        $( ".company-info-menu-contentAudio" ).toggleClass( "block" )

    }, function(){
        $( ".company-info-menu-contentAudio" ).removeClass( "block" );
        $( ".company-info-menu-contentAudio" ).toggleClass( "none" )
    });

    $( ".company-info-menu-contentAudio" ).hover(function(){
        $( ".company-info-menu-contentAudio" ).removeClass( "none" );
        $( ".company-info-menu-contentAudio" ).toggleClass( "block" )

    }, function(){
        $( ".company-info-menu-contentAudio" ).removeClass( "block" );
        $( ".company-info-menu-contentAudio" ).toggleClass( "none" )
    });




    $( "#freeMusic" ).hover(function(){
        $( ".company-info-menu-contentFreeMusic" ).removeClass( "none" );
        $( ".company-info-menu-contentFreeMusic" ).toggleClass( "block" )

    }, function(){
        $( ".company-info-menu-contentFreeMusic" ).removeClass( "block" );
        $( ".company-info-menu-contentFreeMusic" ).toggleClass( "none" )
    });



    $( ".company-info-menu-contentFreeMusic" ).hover(function(){
        $( ".company-info-menu-contentFreeMusic" ).removeClass( "none" );
        $( ".company-info-menu-contentFreeMusic" ).toggleClass( "block" )

    }, function(){
        $( ".company-info-menu-contentFreeMusic" ).removeClass( "block" );
        $( ".company-info-menu-contentFreeMusic" ).toggleClass( "none" )
    });






    $( "#sellAudio" ).hover(function(){
        $( ".company-info-menu-contentSellAudio" ).removeClass( "none" );
        $( ".company-info-menu-contentSellAudio" ).toggleClass( "block" )

    }, function(){
        $( ".company-info-menu-contentSellAudio" ).removeClass( "block" );
        $( ".company-info-menu-contentSellAudio" ).toggleClass( "none" )
    });



    $( ".company-info-menu-contentSellAudio" ).hover(function(){
        $( ".company-info-menu-contentSellAudio" ).removeClass( "none" );
        $( ".company-info-menu-contentSellAudio" ).toggleClass( "block" )

    }, function(){
        $( ".company-info-menu-contentSellAudio" ).removeClass( "block" );
        $( ".company-info-menu-contentSellAudio" ).toggleClass( "none" )
    });







    $( "#studios" ).hover(function(){
        $( ".company-info-menu-contentStudios" ).removeClass( "none" );
        $( ".company-info-menu-contentStudios" ).toggleClass( "block" )

    }, function(){
        $( ".company-info-menu-contentStudios" ).removeClass( "block" );
        $( ".company-info-menu-contentStudios" ).toggleClass( "none" )
    });


    $( ".company-info-menu-contentStudios" ).hover(function(){
        $( ".company-info-menu-contentStudios" ).removeClass( "none" );
        $( ".company-info-menu-contentStudios" ).toggleClass( "block" )

    }, function(){
        $( ".company-info-menu-contentStudios" ).removeClass( "block" );
        $( ".company-info-menu-contentStudios" ).toggleClass( "none" )
    });



    $( "#musicSfera" ).hover(function(){
        $( ".company-info-menu-contentCreateSfera" ).removeClass( "none" );
        $( ".company-info-menu-contentCreateSfera" ).toggleClass( "block" )
    }, function(){
        $( ".company-info-menu-contentCreateSfera" ).removeClass( "block" );
        $( ".company-info-menu-contentCreateSfera" ).toggleClass( "none" )
    });


    $( ".company-info-menu-contentCreateSfera" ).hover(function(){
        $( ".company-info-menu-contentCreateSfera" ).removeClass( "none" );
        $( ".company-info-menu-contentCreateSfera" ).toggleClass( "block" )
    }, function(){
        $( ".company-info-menu-contentCreateSfera" ).removeClass( "block" );
        $( ".company-info-menu-contentCreateSfera" ).toggleClass( "none" )
    });









       $( "#cabinet" ).hover(function(){
           $( ".advantBoxMenuContent" ).removeClass( "none" );
           $( ".advantBoxMenuContent" ).addClass( "grid" );
           $( ".advantBoxMenuContent1" ).addClass( "none" );
           $( ".advantBoxMenuContent2" ).addClass( "none" );
           $( ".advantBoxMenuContent3" ).addClass( "none" );
           $( ".advantBoxMenuContent1" ).removeClass( "grid" );
           $( ".advantBoxMenuContent2" ).removeClass( "grid" );
           $( ".advantBoxMenuContent3" ).removeClass( "grid" );


       });


$( "#dj" ).hover(function(){
    $( ".advantBoxMenuContent1" ).removeClass( "none" );
    $( ".advantBoxMenuContent1" ).addClass( "grid" );
    $( ".advantBoxMenuContent" ).addClass( "none" );
    $( ".advantBoxMenuContent2" ).addClass( "none" );
    $( ".advantBoxMenuContent3" ).addClass( "none" );
    $( ".advantBoxMenuContent" ).removeClass( "grid" );
    $( ".advantBoxMenuContent2" ).removeClass( "grid" );
    $( ".advantBoxMenuContent3" ).removeClass( "grid" );


});


$( "#support" ).hover(function(){
    $( ".advantBoxMenuContent2" ).removeClass( "none" );
    $( ".advantBoxMenuContent2" ).addClass( "grid" );
    $( ".advantBoxMenuContent" ).addClass( "none" );
    $( ".advantBoxMenuContent1" ).addClass( "none" );
    $( ".advantBoxMenuContent3" ).addClass( "none" );
    $( ".advantBoxMenuContent" ).removeClass( "grid" );
    $( ".advantBoxMenuContent1" ).removeClass( "grid" );
    $( ".advantBoxMenuContent3" ).removeClass( "grid" );

                            });



$( "#electric" ).hover(function(){
    $( ".advantBoxMenuContent3" ).removeClass( "none" );
    $( ".advantBoxMenuContent3" ).addClass( "grid" );
    $( ".advantBoxMenuContent" ).addClass( "none" );
    $( ".advantBoxMenuContent1" ).addClass( "none" );
    $( ".advantBoxMenuContent2" ).addClass( "none" );
    $( ".advantBoxMenuContent" ).removeClass( "grid" );
    $( ".advantBoxMenuContent1" ).removeClass( "grid" );
    $( ".advantBoxMenuContent2" ).removeClass( "grid" );

});







    $(window).scroll(function() {
                if($(this).scrollTop() > 900) {
                    $(".menu-headerDown-left").show();
                    $(".menu-headerDown-left").addClass("menu-headerDown-leftShow")
                    $(".menu-headerDown-right").addClass("menu-headerDown-rightShow")
                }
   if($(this).scrollTop() < 900) {
       $(".menu-headerDown-right").removeClass("menu-headerDown-rightShow")
                    $(".menu-headerDown-left").hide();
                }


    });

});