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
        $( ".advantBoxMenuContent2" ).addClass( "flex" );
        $( ".advantBoxMenuContent" ).addClass( "none" );
        $( ".advantBoxMenuContent1" ).addClass( "none" );
        $( ".advantBoxMenuContent3" ).addClass( "none" );
        $( ".advantBoxMenuContent" ).removeClass( "grid" );
        $( ".advantBoxMenuContent1" ).removeClass( "grid" );
        $( ".advantBoxMenuContent3" ).removeClass( "grid" );

    });









    $( "#cabinet" ).hover(function(){
        $( ".advantBoxMenuContentMobile" ).removeClass( "none" );
        $( ".advantBoxMenuContentMobile" ).addClass( "flexx" );
        $( ".advantBoxMenuContent1Mobile" ).addClass( "none" );
        $( ".advantBoxMenuContent2Mobile" ).addClass( "none" );
        $( ".advantBoxMenuContent3Mobile" ).addClass( "none" );
        $( ".advantBoxMenuContent1Mobile" ).removeClass( "flexx" );
        $( ".advantBoxMenuContent2Mobile" ).removeClass( "flexx" );
        $( ".advantBoxMenuContent3Mobile" ).removeClass( "flexx" );


    });


    $( "#dj" ).hover(function(){
        $( ".advantBoxMenuContent1Mobile" ).removeClass( "none" );
        $( ".advantBoxMenuContent1Mobile" ).addClass( "flexx" );
        $( ".advantBoxMenuContentMobile" ).addClass( "none" );
        $( ".advantBoxMenuContent2Mobile" ).addClass( "none" );
        $( ".advantBoxMenuContent3Mobile" ).addClass( "none" );
        $( ".advantBoxMenuContentMobile" ).removeClass( "flexx" );
        $( ".advantBoxMenuContent2Mobile" ).removeClass( "flexx" );
        $( ".advantBoxMenuContent3Mobile" ).removeClass( "flexx" );


    });


    $( "#support" ).hover(function(){
        $( ".advantBoxMenuContent2Mobile" ).removeClass( "none" );
        $( ".advantBoxMenuContent2Mobile" ).addClass( "flexx" );
        $( ".advantBoxMenuContentMobile" ).addClass( "none" );
        $( ".advantBoxMenuContent1Mobile" ).addClass( "none" );
        $( ".advantBoxMenuContent3Mobile" ).addClass( "none" );
        $( ".advantBoxMenuContentMobile" ).removeClass( "flexx" );
        $( ".advantBoxMenuContent1Mobile" ).removeClass( "flexx" );
        $( ".advantBoxMenuContent3Mobile" ).removeClass( "flexx" );

    });



    $( "#electric" ).hover(function(){
        $( ".advantBoxMenuContent3Mobile" ).removeClass( "none" );
        $( ".advantBoxMenuContent3Mobile" ).addClass( "flexx" );
        $( ".advantBoxMenuContentMobile" ).addClass( "none" );
        $( ".advantBoxMenuContent1Mobile" ).addClass( "none" );
        $( ".advantBoxMenuContent2Mobile" ).addClass( "none" );
        $( ".advantBoxMenuContentMobile" ).removeClass( "flexx" );
        $( ".advantBoxMenuContent1Mobile" ).removeClass( "flexx" );
        $( ".advantBoxMenuContent2Mobile" ).removeClass( "flexx" );

    });










    $( "#sell" ).hover(function(){
        $( ".advantBoxMenuContentMobile" ).removeClass( "none" );
        $( ".advantBoxMenuContentMobile" ).addClass( "flexx" );
        $( ".advantBoxMenuContent1Mobile" ).addClass( "none" );
        $( ".advantBoxMenuContent2Mobile" ).addClass( "none" );
        $( ".advantBoxMenuContent3Mobile" ).addClass( "none" );
        $( ".advantBoxMenuContent1Mobile" ).removeClass( "flexx" );
        $( ".advantBoxMenuContent2Mobile" ).removeClass( "flexx" );
        $( ".advantBoxMenuContent3Mobile" ).removeClass( "flexx" );


    });


    $( "#studio" ).hover(function(){
        $( ".advantBoxMenuContent1Mobile" ).removeClass( "none" );
        $( ".advantBoxMenuContent1Mobile" ).addClass( "flexx" );
        $( ".advantBoxMenuContentMobile" ).addClass( "none" );
        $( ".advantBoxMenuContent2Mobile" ).addClass( "none" );
        $( ".advantBoxMenuContent3Mobile" ).addClass( "none" );
        $( ".advantBoxMenuContentMobile" ).removeClass( "flexx" );
        $( ".advantBoxMenuContent2Mobile" ).removeClass( "flexx" );
        $( ".advantBoxMenuContent3Mobile" ).removeClass( "flexx" );


    });


    $( "#production" ).hover(function(){
        $( ".advantBoxMenuContent2Mobile" ).removeClass( "none" );
        $( ".advantBoxMenuContent2Mobile" ).addClass( "flexx" );
        $( ".advantBoxMenuContentMobile" ).addClass( "none" );
        $( ".advantBoxMenuContent1Mobile" ).addClass( "none" );
        $( ".advantBoxMenuContent3Mobile" ).addClass( "none" );
        $( ".advantBoxMenuContentMobile" ).removeClass( "flexx" );
        $( ".advantBoxMenuContent1Mobile" ).removeClass( "flexx" );
        $( ".advantBoxMenuContent3Mobile" ).removeClass( "flexx" );

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


    $('#pricerContentCards-1').on('click', function (e) {
        e.preventDefault();
        $('#pricerContentCards-1').toggleClass('circle-active');
        $('#pricerContentCards-2').removeClass('circle-active');
        $('#pricerContentCards-3').removeClass('circle-active');
        $('#pricerContentCards-4').removeClass('circle-active');


    });
    $('#pricerContentCards-2').on('click', function (e) {
        e.preventDefault();
        $('#pricerContentCards-2').toggleClass('circle-active');
        $('#pricerContentCards-1').removeClass('circle-active');
        $('#pricerContentCards-3').removeClass('circle-active');
        $('#pricerContentCards-4').removeClass('circle-active');


    });
    $('#pricerContentCards-3').on('click', function (e) {
        e.preventDefault();
        $('#pricerContentCards-3').toggleClass('circle-active');
        $('#pricerContentCards-2').removeClass('circle-active');
        $('#pricerContentCards-1').removeClass('circle-active');
        $('#pricerContentCards-4').removeClass('circle-active');


    });
    $('#pricerContentCards-4').on('click', function (e) {
        e.preventDefault();
        $('#pricerContentCards-4').toggleClass('circle-active');
        $('#pricerContentCards-3').removeClass('circle-active');
        $('#pricerContentCards-1').removeClass('circle-active');
        $('#pricerContentCards-2').removeClass('circle-active');
    });


    let initCardSwitcher = function () {
        let contents = [`<div class="advWorkContentTop1">
                        <div class="advWorkContentTop1Img"></div>
                        <div class="advWorkContentTop1Tittle advTittle">Запустим ваш эфир</div>
                        <div class="advWorkContentTop1Desc advDesc">Предоставим готовое и настроенное к работе
                            оборудование. Подключите и наслаждайтесь!
                        </div>
                    </div>`,
                    `<div class="advWorkContentTop2">
                        <div class="advWorkContentTop2Img"></div>
                        <div class="advWorkContentTop2Tittle advTittle">Музыка без отчислений</div>
                        <div class="advWorkContentTop2Desc advDesc">Собственная база функциональной музыки без
                            отчислений в РАО иВОИС.
                        </div>
                    </div>`,
            `<div class="advWorkContentTop3">
                        <div class="advWorkContentTop3Img"></div>
                        <div class="advWorkContentTop3Tittle advTittle">Юридическая поддержка</div>
                        <div class="advWorkContentTop3Desc advDesc">Наш юридический отдел в течение суток предоставит
                            письменный ответ на любые обращения РАО или ВОИС.
                        </div>
                    </div>`,
            `<div class="advWorkContentBottom1">
                        <div class="advWorkContentBottom1Img"></div>
                        <div class="advWorkContentBottom1Tittle advTittle">На связи 24/7</div>
                        <div class="advWorkContentBottom1Desc advDesc">Наша команда на связи 24 часа в сутки 7 дней в
                            неделю.
                        </div>
                    </div>`,
            `<div class="advWorkContentBottom2">
                        <div class="advWorkContentBottom2Img"></div>
                        <div class="advWorkContentBottom2Tittle advTittle">Создадим яркий ролик</div>
                        <div class="advWorkContentBottom2Desc advDesc">Собственная студия позволяет в кратчайшие сроки
                            разработать продающий рекламный контент.
                        </div>
                    </div>`,
            `<div class="advWorkContentBottom3">
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

    };
    let initCardSwitcher1 = function () {
        let contents1 = [`    <div class="studioVideosContentCard1 contentCard">
                        <div class="contentCardImg1"></div>
                        <div class="contentCardTittle">Информационные ролики</div>
                        <div class="contentCardDesc">Задача информационного ролика – дать информацию. Рассказать о товаре, услугах или продукте ясно, четко и понятно. Сообщение сводится к передаче характеристик или функций предмета рекламы и создания посыла ими воспользоваться.</div>
                        <div class="contentCardExam">
                            <div class="cardExamTittle">Примеры:</div>
                            <div class="cardExamIcons">
                                <div class="cardExamIcon"></div>
                                <div class="cardExamIcon"></div>
                                <div class="cardExamIcon"></div>
                            </div>
                        </div>
                    </div>`,
                    `<div class="studioVideosContentCard2 contentCard">
                       <div class="contentCardImg2"></div>
                        <div class="contentCardTittle">Сложно-информационные ролики</div>
                        <div class="contentCardDesc">Когда выразительности средств информационного ролика становится недостаточно, использование музыкальной подложки и звуковых эффектов дает гораздо больше возможностей донести настроение.</div>
                        <div class="contentCardExam">
                            <div class="cardExamTittle">Примеры:</div>
                            <div class="cardExamIcons">
                                <div class="cardExamIcon"></div>
                                <div class="cardExamIcon"></div>
                                <div class="cardExamIcon"></div>
                            </div>
                        </div>
                    </div>`,
            `<div class="studioVideosContentCard3 contentCard">
                       <div class="contentCardImg3"></div>
                        <div class="contentCardTittle">Игровые ролики</div>
                        <div class="contentCardDesc">Игровой рекламный ролик – наиболее востребованный, популярный и работающий маркетинговый инструмент рекламной кампании. Он может вызвать интерес и, одновременно, раскрыть суть рекламируемого продукта или услуги.</div>
                        <div class="contentCardExam">
                            <div class="cardExamTittle">Примеры:</div>
                            <div class="cardExamIcons">
                                <div class="cardExamIcon"></div>
                                <div class="cardExamIcon"></div>
                                <div class="cardExamIcon"></div>
                            </div>
                        </div>
                    </div>`,
            ` <div class="studioVideosContentCard4 contentCard">
                        <div class="contentCardImg4"></div>
                        <div class="contentCardTittle">Песенные ролики</div>
                        <div class="contentCardDesc">В условиях перенасыщенности рекламой эфира использование песенных роликов иногда оправдано. В случае удачной реализации запоминается не только информация из ролика, но и мелодия.</div>
                        <div class="contentCardExam">
                            <div class="cardExamTittle">Примеры:</div>
                            <div class="cardExamIcons">
                                <div class="cardExamIcon"></div>
                                <div class="cardExamIcon"></div>
                                <div class="cardExamIcon"></div>
                            </div>
                        </div>
                    </div>`,
            ` <div class="studioVideosContentCard5 contentCard">
                        <div class="contentCardImg5"></div>
                        <div class="contentCardTittle">Навигационные ролики</div>
                        <div class="contentCardDesc">Задача ролика навигации – направить посетителя в нужном направлении. Чаще всего - это обязательные или сервисные сообщения торгового предприятия. Но ведь можно рекламировать и собственные маркетинговые акции.</div>
                        <div class="contentCardExam">
                            <div class="cardExamTittle">Примеры:</div>
                            <div class="cardExamIcons">
                                <div class="cardExamIcon"></div>
                                <div class="cardExamIcon"></div>
                                <div class="cardExamIcon"></div>
                            </div>
                        </div>
                    </div>`,
            ` <div class="studioVideosContentCard6 contentCard">
                        <div class="contentCardImg6"></div>
                        <div class="contentCardTittle">Ролики для АТС</div>
                        <div class="contentCardDesc">Большинство торговых предприятий обладают современными телефонными станциями. Используйте их как инструмент маркетинга. Реклама, акции, объявления и помощь в поиске нужного абонента.</div>
                        <div class="contentCardExam">
                            <div class="cardExamTittle">Примеры:</div>
                            <div class="cardExamIcons">
                                <div class="cardExamIcon"></div>
                                <div class="cardExamIcon"></div>
                                <div class="cardExamIcon"></div>
                            </div>
                        </div>
                    </div>`,
            ` <div class="studioVideosContentCard7 contentCard">
                        <div class="contentCardImg7"></div>
                        <div class="contentCardTittle">Одежда эфира</div>
                        <div class="contentCardDesc">Это звуковое лицо предприятия. Комплект аудиороликов, который встраивается в эфир и каждый день работает как средство PR-маркетинга. Очень просто и очень эффективно.</div>
                        <div class="contentCardExam">
                            <div class="cardExamTittle">Примеры:</div>
                            <div class="cardExamIcons">
                                <div class="cardExamIcon"></div>
                                <div class="cardExamIcon"></div>
                                <div class="cardExamIcon"></div>
                            </div>
                        </div>
                    </div>`,
            ` <div class="studioVideosContentCard8 contentCard">
                        <div class="contentCardImg8"></div>
                        <div class="contentCardTittle">Джингл</div>
                        <div class="contentCardDesc">Короткий музыкальный отрезок, содержащий запоминающуюся мелодию и, чаще всего, пропевку. Может использоваться самостоятельно и как элемент, объединяющий рекламу в единую кампанию.</div>
                        <div class="contentCardExam">
                            <div class="cardExamTittle">Примеры:</div>
                            <div class="cardExamIcons">
                                <div class="cardExamIcon"></div>
                                <div class="cardExamIcon"></div>
                                <div class="cardExamIcon"></div>
                            </div>
                        </div>
                    </div>`];
        let containers1 = $('.studioVideosCards');

        let renderUp1 = (index)=> {
            let contentCopys1 = contents1.slice();//копия исходного массива

            for (let i = 0; i < index; i++) {
                contentCopys1.push(contentCopys1.shift());
            }

            renders1(contentCopys1);
        };

        let renders1 = (contentCopys1) => {
            containers1.empty();
            for (let i = 0; i < contentCopys1.length; i++) {
                containers1.append(contentCopys1[i]);
            }
        };

        let initUP1 = () => {
            for (let i = 0; i < 4; i++) {
                containers1.find('#pricerContentCards-'+(i+1)).click(() => {
                    renderUp1(i);
                })
            }
        };

        initUP1();
        renderUp1(0);

    };let initCardSwitcher2 = function () {
        let contents2 = [`    <div class="aboutForContentGridBoxContent1">
                        <div class="aboutForContentGridBoxContent1Img"></div>
                        <div class="aboutForContentGridBoxContentDesc">Мульти- и моно- брендовые торговые предприятия сетевые и одиночные (магазины, супермаркеты, дискаунтеры, дроггери).</div>

                    </div>`,
            ` <div class="aboutForContentGridBoxContent2">
                        <div class="aboutForContentGridBoxContent2Img"></div>
                        <div class="aboutForContentGridBoxContentDesc">Торговые предприятия сетевые и одиночные, сдающие площади в аренду (торговые центры, комплексы, развлекательные центры,
                            гипермаркеты).</div>

                    </div>`,
            `<div class="aboutForContentGridBoxContent3">
                        <div class="aboutForContentGridBoxContent3Img"></div>
                        <div class="aboutForContentGridBoxContentDesc">Спортзалы, фитнес-центры, горно-лыжные курорты.</div>

                    </div>`,
            `<div class="aboutForContentGridBoxContent4">
                        <div class="aboutForContentGridBoxContent4Img"></div>
                        <div class="aboutForContentGridBoxContentDesc">Выставочные залы, выставочные комплексы, экспоцентры, галереи.</div>

                    </div>`,
            ` <div class="aboutForContentGridBoxContent5">
                        <div class="aboutForContentGridBoxContent5Img"></div>
                        <div class="aboutForContentGridBoxContentDesc">Мульти- и моно- брендовые автосалоны.</div>

                    </div>`,
            ` <div class="aboutForContentGridBoxContent6">
                        <div class="aboutForContentGridBoxContent6Img"></div>
                        <div class="aboutForContentGridBoxContentDesc">Сети заправочных станций для создания эфира в мини-маркетах и продвижения маркетинговых программ.</div>

                    </div>`,
            `<div class="aboutForContentGridBoxContent7">
                        <div class="aboutForContentGridBoxContent7Img"></div>
                        <div class="aboutForContentGridBoxContentDesc">Организации, производящие монтаж систем трансляции и пожарного оповещения (в качестве источника звука в проектах).</div>

                    </div>`,
            ` <div class="aboutForContentGridBoxContent8">
                        <div class="aboutForContentGridBoxContent8Img"></div>
                        <div class="aboutForContentGridBoxContentDesc">  Рекламные агентства, использующие технологии размещения рекламы в местах продаж и оказывающие услуги создания музыкальноинформационного эфира для заказчиков.</div>
                    </div>`];
        let containers2 = $('.aboutForContentGridBox');

        let renderUp2 = (index)=> {
            let contentCopys2 = contents2.slice();//копия исходного массива

            for (let i = 0; i < index; i++) {
                contentCopys2.push(contentCopys2.shift());
            }

            renders2(contentCopys2);
        };

        let renders2 = (contentCopys2) => {
            containers2.empty();
            for (let i = 0; i < contentCopys2.length; i++) {
                containers2.append(contentCopys2[i]);
            }
        };

        let initUP2 = () => {
            for (let i = 0; i < 4; i++) {
                containers2.find('#pricerContentCards-'+(i+1)).click(() => {
                    renderUp2(i);
                })
            }
        };

        initUP2();
        renderUp2(0);

    };
    let initCardSwitcher3 = function () {
        let contents3 = [`  <div class="aboutTeamContentGridBoxContent1">
                        <div class="aboutTeamContentGridBoxContent1Img"></div>
                        <div class="aboutTeamContentGridBoxContentName">Новиков<br>
                            Георгий Сергеевич</div>
                        <div class="aboutTeamContentGridBoxContentDesc">Генеральный директор, идейный вдохновитель</div>
                        <div class="aboutTeamContentGridBoxContentContainerButton">
                            <div class="aboutTeamContentGridBoxContentContainerButtonIcon"></div>
                            <a href="#">
                                Написать письмо
                            </a>
                        </div>
                    </div>`,
            ` <div class="aboutTeamContentGridBoxContent2">
                        <div class="aboutTeamContentGridBoxContent2Img"></div>
                        <div class="aboutTeamContentGridBoxContentName">Скрипкина<br>
                            Анастасия Петровна</div>
                        <div class="aboutTeamContentGridBoxContentDesc">Менеджер по работе с привилегированными клиентами</div>
                        <div class="aboutTeamContentGridBoxContentContainerButton">
                            <div class="aboutTeamContentGridBoxContentContainerButtonIcon"></div>
                            <a href="#">
                                Написать письмо
                            </a>
                        </div>
                    </div>`,
            ` <div class="aboutTeamContentGridBoxContent3">
                        <div class="aboutTeamContentGridBoxContent3Img"></div>
                        <div class="aboutTeamContentGridBoxContentName">Стародубцев<br>
                            Михаил Иванович</div>
                        <div class="aboutTeamContentGridBoxContentDesc">Менеджер по размещению рекламных роликов в торговых предприятиях</div>
                        <div class="aboutTeamContentGridBoxContentContainerButton">
                            <div class="aboutTeamContentGridBoxContentContainerButtonIcon"></div>
                            <a href="#">
                                Написать письмо
                            </a>
                        </div>
                    </div>`,
            ` <div class="aboutTeamContentGridBoxContent4">
                        <div class="aboutTeamContentGridBoxContent4Img"></div>
                        <div class="aboutTeamContentGridBoxContentName">Удальцов<br>
                            Константин Константинович</div>
                        <div class="aboutTeamContentGridBoxContentDesc">Специалист по подбору музыкальных композиций для разных целевых аудиторий</div>
                        <div class="aboutTeamContentGridBoxContentContainerButton">
                            <div class="aboutTeamContentGridBoxContentContainerButtonIcon"></div>
                            <a href="#">
                                Написать письмо
                            </a>
                        </div>
                    </div>`,
            ` <div class="aboutTeamContentGridBoxContent5">
                        <div class="aboutTeamContentGridBoxContent5Img"></div>
                        <div class="aboutTeamContentGridBoxContentName">Новиков<br>
                            Георгий Сергеевич</div>
                        <div class="aboutTeamContentGridBoxContentDesc">Генеральный директор, идейный вдохновитель</div>
                        <div class="aboutTeamContentGridBoxContentContainerButton">
                            <div class="aboutTeamContentGridBoxContentContainerButtonIcon"></div>
                            <a href="#">
                                Написать письмо
                            </a>
                        </div>
                    </div>`,
            ` <div class="aboutTeamContentGridBoxContent6">
                        <div class="aboutTeamContentGridBoxContent6Img"></div>
                        <div class="aboutTeamContentGridBoxContentName">Скрипкина<br>
                            Анастасия Петровна</div>
                        <div class="aboutTeamContentGridBoxContentDesc">Менеджер по работе с привилегированными клиентами</div>
                        <div class="aboutTeamContentGridBoxContentContainerButton">
                            <div class="aboutTeamContentGridBoxContentContainerButtonIcon"></div>
                            <a href="#">
                                Написать письмо
                            </a>
                        </div>
                    </div>`,
            ` <div class="aboutTeamContentGridBoxContent7">
                        <div class="aboutTeamContentGridBoxContent7Img"></div>
                        <div class="aboutTeamContentGridBoxContentName">Стародубцев<br>
                            Михаил Иванович</div>
                        <div class="aboutTeamContentGridBoxContentDesc">Менеджер по размещению рекламных роликов в торговых предприятиях</div>
                        <div class="aboutTeamContentGridBoxContentContainerButton">
                            <div class="aboutTeamContentGridBoxContentContainerButtonIcon"></div>
                            <a href="#">
                                Написать письмо
                            </a>
                        </div>
                    </div>`,
            ` <div class="aboutTeamContentGridBoxContent8">
                        <div class="aboutTeamContentGridBoxContent8Img"></div>
                        <div class="aboutTeamContentGridBoxContentName">Удальцов<br>
                            Константин Константинович</div>
                        <div class="aboutTeamContentGridBoxContentDesc">Специалист по подбору музыкальных композиций для разных целевых аудиторий</div>
                        <div class="aboutTeamContentGridBoxContentContainerButton">
                            <div class="aboutTeamContentGridBoxContentContainerButtonIcon"></div>
                            <a href="#">
                                Написать письмо
                            </a>
                        </div>
                    </div>`];
        let containers3 = $('.aboutTeamContentGridBox');

        let renderUp3 = (index)=> {
            let contentCopys3 = contents3.slice();//копия исходного массива

            for (let i = 0; i < index; i++) {
                contentCopys3.push(contentCopys3.shift());
            }

            renders3(contentCopys3);
        };

        let renders3 = (contentCopys3) => {
            containers3.empty();
            for (let i = 0; i < contentCopys3.length; i++) {
                containers3.append(contentCopys3[i]);
            }
        };

        let initUP3 = () => {
            for (let i = 0; i < 8; i++) {
                containers3.find('#pricerContentCards-'+(i+1)).click(() => {
                    renderUp3(i);
                })
            }
        };

        initUP3();
        renderUp3(0);

    };
    initCardSwitcher();
    initCardSwitcher1();
    initCardSwitcher2();
    initCardSwitcher3();
});


