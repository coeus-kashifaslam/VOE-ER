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
})();

$(window).scroll(function() {
    var height = $(window).scrollTop();

    if(height  > 60) {
        $('.site-nav').addClass('nav-scrolled');
    }else {
        $('.site-nav').removeClass('nav-scrolled');
    }
});
