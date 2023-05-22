/***************** Animation Texte HTML Header ************************************/
$(document).ready(function() {
  $(".trainning").hide().slideDown(1000);
});



/***********************   Code pour le texte du header ******************************************************* */
$(document).ready(function(){
    var text = "HTML // CSS // PHP // SYMFONY // JAVASCRIPT // JQUERY // ANGULAR // WORDPRESS //";
    var index = 0;
    var speed = 200;
    var container = $("#text");
    setInterval(function(){
        container.html(text.substring(index, text.length) + text.substring(0, index));
        index++;
        if (index > text.length) {
            index = 0;
        }
    }, speed);
});
   
/***********************   finction pour la section About ******************************************************* */

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    document.querySelector("#imgAbout").classList.add("show");
  }, 4000);

  setTimeout(function() {
    document.querySelector("#texAbout").classList.add("show");
  }, 3000);
});

/***********************   function pour l'ecriture machine ******************************************************* */
$(document).ready(function(){
  var text = $("#").text();
  var length = text.length;
  var time = length * 50; 
  $("#").text("");
  
  function typeWriter() {
    var i = 0;
    setInterval(function() {
      if (i < length) {
        $("#").append(text.charAt(i));
        i++;
      }
    }, 50);
  }

  $("#").mouseenter(function() {
    typeWriter();
  });
});

/***********************   Pour l'effect scroll Nos Domaines d'Expertise ******************************************************* */

function handleScroll() {
  const items = document.querySelectorAll('#scroll-section .item');
  items.forEach(item => {
    const position = item.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (position < windowHeight) {
      item.style.opacity = '5';
      item.style.transform = 'translateY(0)';
    }
  });
}

window.addEventListener('scroll', handleScroll);



function handleScroll() {
  const items = document.querySelectorAll('#scroll-section .item');
  items.forEach(item => {
    const position = item.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (position < windowHeight) {
      item.classList.add('animate');
    }
  });
}

window.addEventListener('scroll', handleScroll);



/***********************   Pour l'effect scroll dans l'achievements ******************************************************* */

$(window).scroll(function() {
  var windowHeight = $(window).height();
  var scrollHeight = $(window).scrollTop();
  $('#scroll-section2 img').each(function(index) {
    var imagePos = $(this).offset().top;
    if (imagePos < scrollHeight + windowHeight) {
      $(this).delay(index * 500).animate({opacity: 6}, 1000);
    }
  });
});
