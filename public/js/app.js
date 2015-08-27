$(function(){
	$('a').on('click', function(){
		console.log("clicked");
		$('html').css("background-color", "white");
	});

	$("dt").on({
	    mouseenter: function () {
	    		clearTimeout($(this).data('timeoutId'));
	        $(this).next('dd').css("display", "inline");
	        $(this).css('display', 'none');
	    },
	    mouseleave: function () {
	    		var someElement = $(this),
	    		    timeoutId = setTimeout(function(){
	    		        someElement.next('dd').css("display", "none");
	    		        someElement.css('display', 'inline');
	    		    }, 5000);
	    		//set the timeoutId, allowing us to clear this trigger if the mouse comes back over
	    		someElement.data('timeoutId', timeoutId); 
	    }
	});

});


