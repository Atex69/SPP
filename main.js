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










    $( "#sell" ).hover(function(){
        $( ".advantBoxMenuContent" ).removeClass( "none" );
        $( ".advantBoxMenuContent" ).addClass( "grid" );
        $( ".advantBoxMenuContent1" ).addClass( "none" );
        $( ".advantBoxMenuContent2" ).addClass( "none" );
        $( ".advantBoxMenuContent3" ).addClass( "none" );
        $( ".advantBoxMenuContent1" ).removeClass( "grid" );
        $( ".advantBoxMenuContent2" ).removeClass( "grid" );
        $( ".advantBoxMenuContent3" ).removeClass( "grid" );


    });


    $( "#studio" ).hover(function(){
        $( ".advantBoxMenuContent1" ).removeClass( "none" );
        $( ".advantBoxMenuContent1" ).addClass( "grid" );
        $( ".advantBoxMenuContent" ).addClass( "none" );
        $( ".advantBoxMenuContent2" ).addClass( "none" );
        $( ".advantBoxMenuContent3" ).addClass( "none" );
        $( ".advantBoxMenuContent" ).removeClass( "grid" );
        $( ".advantBoxMenuContent2" ).removeClass( "grid" );
        $( ".advantBoxMenuContent3" ).removeClass( "grid" );


    });


    $( "#production" ).hover(function(){
        $( ".advantBoxMenuContent2" ).removeClass( "none" );
        $( ".advantBoxMenuContent2" ).addClass( "grid" );
        $( ".advantBoxMenuContent" ).addClass( "none" );
        $( ".advantBoxMenuContent1" ).addClass( "none" );
        $( ".advantBoxMenuContent3" ).addClass( "none" );
        $( ".advantBoxMenuContent" ).removeClass( "grid" );
        $( ".advantBoxMenuContent1" ).removeClass( "grid" );
        $( ".advantBoxMenuContent3" ).removeClass( "grid" );

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




        $('.trigger').parent().on('click', function() {
            $('.modal-wrapper').toggleClass('open');
            $('.page-wrapper').toggleClass('blur-it');
            return false;
        });

        $('.triggers').parent().on('click', function() {
            $('.modal-wrapperTwo').toggleClass('open');
            $('.page-wrapper').toggleClass('blur-it');
            return false;
        });

        $('.triggerss').parent().on('click', function() {
            $('.modal-wrapperThree').toggleClass('open');
            $('.page-wrapper').toggleClass('blur-it');
            return false;
        });


    $('.modals-wrap').on('click', function (){
        $('.modals-wrap').removeClass('open');
    });

    $('.sharp').on('click', function () {
        $('.modal-wrapper,.modal-wrapperTwo,.modal-wrapperThree').removeClass('open');

    });

    $('.head').on('click', function () {
        $('.modal-wrapper,.modal-wrapperTwo,.modal-wrapperThree').removeClass('open');

    });

    $('.mobile-menu').on('click', function (e) {
        e.preventDefault();
        $('.menu-btn').toggleClass('menu-active');
        $('.mobile-menu').toggleClass('menu-active');
        $('.mobile-menu__menu-header-wrap').toggleClass('menu-active');
    });
    $("ul").click(function(){
        $('.menu-btn').not(this).removeClass('menu-active');
        $('.mobile-menu').not(this).removeClass('menu-active');
        $('.mobile-menu__menu-header-wrap').not(this).removeClass('menu-active');

    });
    $("button").click(function(){
        $('.menu-btn').not(this).removeClass('menu-active');
        $('.mobile-menu').not(this).removeClass('menu-active');
        $('.mobile-menu__menu-header-wrap').not(this).removeClass('menu-active');

    });



    let initCardSwitcher = function () {
        let contents = [`  <div class="advWorkContentTop1">
                        <div class="advWorkContentTop1Img"></div>
                        <div class="advWorkContentTop1Tittle advTittle">Запустим ваш эфир</div>
                        <div class="advWorkContentTop1Desc advDesc">Предоставим готовое и настроенное к работе
                            оборудование. Подключите и наслаждайтесь!
                        </div>
                    </div>
                    <div class="advWorkContentTop2">
                        <div class="advWorkContentTop2Img"></div>
                        <div class="advWorkContentTop2Tittle advTittle">Музыка без отчислений</div>
                        <div class="advWorkContentTop2Desc advDesc">Собственная база функциональной музыки без
                            отчислений в РАО иВОИС.
                        </div>
                    </div>
                    <div class="advWorkContentTop3">
                        <div class="advWorkContentTop3Img"></div>
                        <div class="advWorkContentTop3Tittle advTittle">Юридическая поддержка</div>
                        <div class="advWorkContentTop3Desc advDesc">Наш юридический отдел в течение суток предоставит
                            письменный ответ на любые обращения РАО или ВОИС.
                        </div>
                    </div>
                    <div class="advWorkContentBottom1">
                        <div class="advWorkContentBottom1Img"></div>
                        <div class="advWorkContentBottom1Tittle advTittle">На связи 24/7</div>
                        <div class="advWorkContentBottom1Desc advDesc">Наша команда на связи 24 часа в сутки 7 дней в
                            неделю.
                        </div>
                    </div>
                    <div class="advWorkContentBottom2">
                        <div class="advWorkContentBottom2Img"></div>
                        <div class="advWorkContentBottom2Tittle advTittle">Создадим яркий ролик</div>
                        <div class="advWorkContentBottom2Desc advDesc">Собственная студия позволяет в кратчайшие сроки
                            разработать продающий рекламный контент.
                        </div>
                    </div>
                    <div class="advWorkContentBottom3">
                        <div class="advWorkContentBottom3Img"></div>
                        <div class="advWorkContentBottom3Tittle advTittle">Организуем продажу эфира</div>
                        <div class="advWorkContentBottom3Desc advDesc">Реклама – мощный инструмент в продвижении бренда!
                            Мы сделаем ваш эфир прибыльным.
                        </div>`];
        let containers = $('.advWorkContentMain');

        let renderUp = (index)=> {
            let contentCopys = contents.slice();//копия исходного массива

            for (let i = 0; i < index; i++) {
                contentCopys.push(contentCopys.shift());
            }

            renders(contentCopys);
        };

        let renders = (contentCopys) => {
            containers.empty();
            for (let i = 0; i < contentCopys.length; i++) {
                containers.append(contentCopys[i]);
            }
        };

        let initUP = () => {
            for (let i = 0; i < 4; i++) {
                $('#pricerContentCards-'+(i+1)).click(() => {
                    renderUp(i);
                })
            }
        };

        initUP();
        renderUp(0);
        initCardSwitcher();
    };
});


