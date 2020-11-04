$(document).ready(function() {

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

  $('.hamburger__container').click(function() {
              $('.nav').toggleClass('open');
              $(this).children().first().toggleClass('open');
              $('html, body').toggleClass('noscroll');
          });

          // Bacon Ipsum
          $.ajax({
              url: 'https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1&format=html',
              success: function(data) {
                  $('#content').html(data);
              }
          });

 });
