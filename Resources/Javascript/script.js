$(document).ready(function() {
   
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
          offset: '60px;' /* This offset runs the above code 60px BEFORE the defined class .js--section-features*/
        });
    
    
    /*
        var waypoints = $('#handler-first').waypoint(function(direction) {
          notify(this.element.id + ' hit 25% from top of window') 
        }, {
          offset: '25%'
        })
    */
    
});
