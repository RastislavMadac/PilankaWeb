(function($){
    $(function(){

        $(".jq-map").hide()

        $(".map-info").hover(function(){
            $(".jq-image-shop").fadeOut(500);
            $(".jq-map").show(0);
                
        });
        $(".jq-info-map").click(function(){
            $(".jq-image-shop").fadeIn(500);
            $(".jq-map").hide(0);
        });
        $(".jq-hide").hide()

        $(".jq-test").click(function(){
            $(".jq-show").toggle();
                       
        });
         
      
    });    
})(jQuery);
