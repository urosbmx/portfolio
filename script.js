    
            $(".email-button").hover(function () {
                $(".text-send").toggle();
                $(".icon-send").toggle();
                //        $(".email-button").css("padding","0px");
                //        $(".email-button").toggle
            });
            //        Mail button
            $(function () {
                $('.email-button').on('click', function (event) {
                    event.preventDefault();
                    var email = 'urosbmx@gmail.com';
                    var subject = 'Kontaktiram te';
                    window.location = 'mailto:' + email + '?subject=' + subject;
                });
            });
            //        smood scroll
    
            $(document).ready(function () {
                $("html,body").animate({
                    scrollTop: 0
                }, 0);
            });
    
    
            $("#goAboutMe").on("click", function (scroll) {
                scroll.preventDefault();
                var two = $("#about-me");
                $('html,body').animate({
                    scrollTop: two.offset().top
                }, 1200);
    
    
    
    
            });
            $("#goMyWork").on("click", function (scroll) {
                scroll.preventDefault();
                var third = $('#my-work');
                $('html,body').animate({
                    scrollTop: third.offset().top
                }, 1200);
            })
    
            $("#bac-to-top").on("click", function (back) {
                back.preventDefault();
                var backing = $(".logo-menu");
                $('html ,body').animate({
                    scrollTop: backing.offset().top
                }, 1200);
            });
    
    $( window ).resize(function() {
        var screen = $(window).width();
        console.log(screen);

        if(screen > 900){
            $('.menu').show();
            $('.fa-bars').hide();
        }
        else{
            $('.menu').hide();
            $('.fa-bars').show();
        }
    });

    $(document).ready(function(){
        $(".home-vp").hide().show("slide", { direction: "left" }, 1500);
        var screen = $(window).width();
        if(screen > 900){
            $('.menu').show();
            $('.fa-bars').hide();
        }
        else{
            $('.menu').hide();
            $('.fa-bars').show();
        }
    });

    $(document).on('click','.fa-bars',function(){
        $('.menu').slideToggle("slow");
    });


//   Modali 
    $(document).on('click','.milica-stanojevic-popup',function(){
        $('.milica-stanojevic-modal').show();
    });

    $(document).on('click','.fa-times',function(){
        $('.milica-stanojevic-modal').hide();
    });

    