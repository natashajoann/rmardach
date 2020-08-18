$(document).ready(function() {

  $(".burger-button").click(function(){
    $(".burger-button").toggleClass("active");
    $(".burger-menu").slideToggle();
  });


  $(".burger-menu").click(function(){
    $(".burger-button").toggleClass("active");
    $(".burger-menu").slideToggle();
  });

  $(".burger-button").click(function(){
    $(".burger-menu").toggleClass("active");
  });

//


  $( document ).ready(function() {
  $(".dropdown-nav").click(function(){
      $(this).children(".dropdown-content").slideToggle("200");
    });
  });

$( document ).ready(function() {
$(".dropdown-nav").click(function(){
    $(this).children(".dropdown-content").slideToggle("200");
  });
});

    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }

});
