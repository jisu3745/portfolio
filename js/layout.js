var lypop = function(e, _this) { 

   e.preventDefault();
   var _this = $(_this);
   var _thisDataNum = _this.attr("data-num");
   console.log(_thisDataNum);
   var _origin = $(document).find("#lypop");
   
   
   _origin.addClass("on");
   $('body').css('overflow','hidden');
   
   _origin.find(".lypopcont .simg img").attr("src", "img/detailview0" + _thisDataNum +".jpg");
   
   
};

var lypopClose = function(e, _this) { 
   e.preventDefault();
   var _this = $(_this);
   var _origin = $(document).find("#lypop");      
   _origin.removeClass("on");
   $('body').removeAttr('style');      
};

var lypop = function(e, _this) { 

   e.preventDefault();
   var _this = $(_this);
   var _thisDataNum = _this.attr("data-num");
   console.log(_thisDataNum);
   var _origin = $(document).find("#lypop2");
   
   
   _origin.addClass("on");
   $('body').css('overflow','hidden');
   
   _origin.find(".lypopcont .simg img").attr("src", "img/detailview0" + _thisDataNum +".jpg");
   
   
};

var lypopClose = function(e, _this) { 
   e.preventDefault();
   var _this = $(_this);
   var _origin = $(document).find("#lypop2");      
   _origin.removeClass("on");
   $('body').removeAttr('style');      
};



var msgAlert = function() {

	//var _this = $(this);

	$(document).find("#alertLypop").removeClass("out");
	$(document).find("#alertLypop").removeClass("off");
	$(document).find("#alertLypop").addClass("open");
	$(document).find("#alertLypop").fadeIn();
	
	
//	setTimeout(function() {
//		$(document).find("[id^=alerLypop]").removeClass("open");
//		$(document).find("[id^=alerLypop]").addClass("off");
//		setTimeout(function() {
//			$(document).find("[id^=alerLypop]").fadeOut();
//		}, 10);
//
//
//	}, 1500);
}	

var msgAlertClose = function() {
		$(document).find("#alertLypop").removeClass("open");
		$(document).find("#alertLypop").addClass("off");
		setTimeout(function() {
			$(document).find("#alertLypop").fadeOut();
		}, 10);	
}




$(function() { 

var pshparell = { }
pshparell.winHT = $(window).height();
pshparell.distance = pshparell.winHT;
pshparell.count = 0;
pshparell.mnoving = false;	
pshparell.length = $(document).find(".page").length;
	
	$(".page").each(function (index, element) { 
		
		$(element).on("mousewheel DOMMouseScroll", function (e) {
			//console.log($(this).html());
			
			console.log("e ====", e);
			console.log("originalEvent ====", e.originalEvent);
			
			e.preventDefault();

			var El = e.originalEvent;			

			var delta = 0;

			if (El.wheelDelta) {
				delta = event.wheelDelta / 120;
				//if (window.opera) delta = -delta;
			} else if (El.detail) delta = -El.detail / 3;		

			//console.log("dd?????? ==", El.detail);
			//console.log("event.wheelDelta ==", event.wheelDelta);

			
			//console.log("next", $(window).scrollTop());
			//console.log("moveTop", moveTop);
			
			
			if(pshparell.mnoving == false) { 				
				pshparell.mnoving = true;
				
				// 마우스휠을 위에서 아래로			
				if (delta  < 0 ) {
					if($(window).scrollTop() == pshparell.distance * (pshparell.length-1)) {
						moveTop = $(this).offset().top;				   
					} else { 
						moveTop = $(this).next().offset().top;					  
					}
				// 마우스휠을 아래에서 위로
				} else {
					if($(window).scrollTop() < pshparell.distance) { 
					   moveTop = $(this).offset().top;
					} else { 
						moveTop = $(this).prev().offset().top;
					}	
				}

				
				
				$("html,body").stop().animate({
					scrollTop: moveTop + 'px'
				}, {
					duration: 800, complete: function () {
						pshparell.mnoving = false;	
					}
				});	
			}
			
		});
	});
	
	
	
	//var itemleng = $('.box').length;
	var scfunc = function(event) { 
		event.preventDefault();
		var _this = $(this);
		var _thispt = $(this).parent();
		var _target = $(event).target;
		var _index = _thispt.index(_target);
		
		if(_index == 3) { 
			pshparell.count = _index + 1;		   
		} else { 
			pshparell.count = _index;
		}

		
		var scrollHT = 	pshparell.distance * pshparell.count;
		console.log("scrollHT", scrollHT);
		
		$("html,body").stop().animate({scrollTop : scrollHT + 'px'}, 500);	
	};
	
	var parrelTrigger = $('.scrollm > ul > li > a');
	parrelTrigger.on("click", scfunc);

	
})	
