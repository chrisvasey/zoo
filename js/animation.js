$(document).ready(function(){
    $(".idle").hide();
    $(".active").hide();
    $(".dead").hide();
  });
  $(document).ready(function(){
    $(".active").show().addClass('animated bounceInUp').delay(80).queue(
        function(){
          $(".idle").show().addClass('animated bounceInUp').delay(80).queue(
            function(){
              $(".dead").show().addClass('animated bounceInUp').dequeue();
            }
          );
        }
      );
  });