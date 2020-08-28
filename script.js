$(document).ready(function(){



    $(window).scroll(function(){

        $(".fade-in-scroll").each(function(i){
            var objbot= $(this).position().top + $(this).outerHeight();
            var winbot = $(window).scrollTop() + $(window).height();

            if (winbot>objbot){
                $(this).animate({'opacity':'1'},1200);
            }

        })
    })
})