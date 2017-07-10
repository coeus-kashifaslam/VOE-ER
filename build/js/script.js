;(function() {
    // Initialize
    var bLazy = new Blazy({
        error: function(ele, msg){
            if(msg === 'missing'){
                $(ele).attr("src", "");
                $(ele).attr("alt", "Image data-src is missing");
            }
            else if(msg === 'invalid'){
                $(ele).attr("src", "");
                $(ele).attr("alt", "Image not found");
            }
        }
    });

    $('.easypiechart').easyPieChart({
        barColor: '#ffcd03',
        scaleColor: false,
        trackColor: 'rgba(255,255,255,0.4)',
        lineWidth: 6,
        animate: 2000,
        easing: 'easeOutBounce',
        size: 115,
        lineCap:'butt'
    });

})();

$(window).scroll(function() {
    var height = $(window).scrollTop();

    if(height  > 60) {
        $('.site-nav').addClass('nav-scrolled');
    }else {
        $('.site-nav').removeClass('nav-scrolled');
    }
});

$(document).ready(function(){
    $(".submenu-link").click(function(){
        $('.sub-menu-open').slideToggle(function(){
        });
    });

    $('.employeedd').click(function(){
        $('.sub-dropdown').slideToggle(function(){
        });
    });
});
