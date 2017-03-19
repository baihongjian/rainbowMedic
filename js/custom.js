$(document).ready(function() {
    
    //smooth scroll
    $(function() {
      $('.scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top - 88
            }, 800);
            return false;
          }
        }
      });
    });
    
	$('.chart').easyPieChart({
		easing: 'easeOutElastic',
		delay: 1000,
		animate: 2000,
		size: 130,
		barColor: '#69c',
		trackColor: false,
		scaleColor: false,
		lineWidth: 20,
		trackWidth: 16,
		lineCap: 'square',
		onStep: function(from, to, percent) {
			this.el.children[0].innerHTML = Math.round(percent) + '%';
		}
	});
});
