//<!--
var txt = "";        
if (navigator.userAgent.match(/Windows Phone|IEMobile|Lumia/i)) {
    txt = "WinPhone";
} else if (navigator.userAgent.match(/Android/i)) {
    txt = "android";
} else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
    txt = "ios";
} else {
    txt = "Unknow | Not mobile";
}


(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

		  ga('create', 'UA-101650013-1', 'auto');
		  ga('send', 'pageview');


$(document).ready(function() {
    $('#hideAll').hide();
    $('#content').show(); 
    $("body").css("overflow-y", "scroll");
    
    document.addEventListener('gesturestart', function (e) {
        e.preventDefault();
    });
       
    
    if (txt === "ios" && window.navigator.standalone) {
        $("#ip-head").show();
        $("#ip-top").show();
        $(".rectL").show();
    }
    
    function isRunningStandalone () {
        return (window.matchMedia('(display-mode: standalone)').matches);
    }
    if (isRunningStandalone()) {
        $(".rectL").show();
    }
    
    //reload page
    $(".rectL").click(function(){
        window.location.reload();
    });

        
    // Iniciando a lib
    i18n.init({fallbackLng: false, debug: false, fixLng: true, load: 'current'},
    function(translation) {$('[data-i18n]').i18n(); var appName = translation('app.name');});

    if($("#header").hasClass("active")) {
    } else {
        $("#br").addClass("active");
        i18n.setLng('pt-BR', {
            fixLng: true
        }, function(translation){
            $('[data-i18n]').i18n();
        });
    }

    // inglês
    $('#en').on('click', function() {
        if($("#en").hasClass("active")) {
        } else {
            $("body").css("opacity", "0");
            i18n.setLng('en-US', {
                fixLng: true
            }, function(translation){
                $('[data-i18n]').i18n();
            });
            $("#en").addClass("active");
            $("#br").removeClass("active");
            $("body").animate({ opacity: 1 }, "slow" );
        }
    });

    // português
    $('#br').on('click', function() {
        if($("#br").hasClass("active")) {
        } else {
            $("body").css("opacity", "0");
            i18n.setLng('pt-BR', {
                fixLng: true
            }, function(translation){
                $('[data-i18n]').i18n();
            });
            $("#br").addClass("active");
            $("#en").removeClass("active");
            $("body").animate({ opacity: 1 }, "slow" );
        }
    });
    

    //scroll animate
    $(window).scroll( function(){    
        $('.slideme-left').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var top_of_object = $(this).position().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            var top_of_window = $(window).scrollTop();
            if (bottom_of_window >= top_of_object) {
                $(this).animate({ opacity: 1, "left": "0px" }, "slow" );       
            }
        });

        $('.slideme-right').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var top_of_object = $(this).position().top + 10;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            var top_of_window = $(window).scrollTop();
            if (bottom_of_window >= top_of_object) {
                $(this).animate({ opacity: 1, "right": "0px" }, "slow" );
            }
        }); 
    });
    
    //typed effect
    var typed1 = new Typed('.subtitle', {
        strings: ['','GAME DEVELOPER', 'APPLICATION DEVELOPER', 'WEB DEVELOPER', 'UX DESIGN'],
        typeSpeed: 150,
        backSpeed: 10,
        smartBackspace: true, // this is a default
        loop: true
    });
    var typed2 = new Typed('.element', {
        strings: ['','GAMES', 'APPS', 'WEBSITES (front-end)'],
        typeSpeed: 250,
        backSpeed: 100,
        smartBackspace: true, // this is a default
        loop: true
    });
    
    //change skills
    $(".rotate").textrotator({
      animation: "dissolve",
      separator: ";",
      speed: 3000
    });
    
    
    //check size for font awesome
    function checkWidth() {
        var windowSize = $(window).width();
        if (windowSize > 1600) { 
            $(".fa").addClass("fa-2x");
            $(".fa").removeClass("fa-lg");    
        } else {
            $(".fa").removeClass("fa-2x");
            $(".fa").addClass("fa-lg");
        }
    }
    checkWidth();
    $(window).resize(checkWidth);//usar pra checar as mudanças de tela
});
//-->