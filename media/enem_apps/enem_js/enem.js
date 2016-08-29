var enem = (function ($) {
    
    var enemProjectName = 'ahu',
        enemTestElement = '<div class="enem_test_element" style="position:fixed; color:white; z-index:9999; bottom:0; right:0; background:tomato; padding:8px 15px;"></div>';
  
	var bismillah = function() {
        console.log('alhamdulillah');
    }
    
    var uhuy = function() {
		console.log('hello :)');
	};
    
    var btnClick = function () {
        $('.enem_btn').click(function(){
            var en = $(this),
                em = en.attr('data-enem-btn-type'),
                lo = en.attr('data-enem-visible');
            
            var enem_wr_search = $('.enem_ahu_wrapper_searchin');
            
            if(em === 'search') {
                if(lo === 'hidden') {  
                    $('.enem_search_icon').removeClass('fa-search');
                    $('.enem_search_icon').addClass('fa-close');
                    $('.enem_search_icon').addClass('enem_btn_search_open');
                    $('.enem_ahu_wrapper_logo').css({
                        'opacity': 0.2
                    });
                    enem_wr_search.fadeIn(1000);
                    en.attr('data-enem-visible','show');
//                    console.info('enemtrue');
                } else {
                    $('.enem_search_icon').removeClass('fa-close');
                    $('.enem_search_icon').removeClass('enem_btn_search_open');
                    $('.enem_search_icon').addClass('fa-search');
                    $('.enem_ahu_wrapper_logo').css({
                        'opacity': 1
                    });
                    enem_wr_search.fadeOut(1000);
                    en.attr('data-enem-visible','hidden');
//                    console.info('enemfalse');

                }
            }
            //alert(em);
        });
    };
    
    var smoothScroll = function () {
        var $window = $(window);		//Window object
//        var $window = $('body');
		
		var scrollTime = .7;			//Scroll time
		var scrollDistance = 170;		//Distance. Use smaller value for shorter scroll and greater value for longer scroll
			
		$window.on("mousewheel DOMMouseScroll", function(event){
			
			//event.preventDefault();	
											
			var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
			var scrollTop = $window.scrollTop();
			var finalScroll = scrollTop - parseInt(delta*scrollDistance);
				
			TweenMax.to($window, scrollTime, {
				scrollTo : { y: finalScroll, autoKill:true },
					ease: Power1.easeOut,	//For more easing functions see http://api.greensock.com/js/com/greensock/easing/package-detail.html
					autoKill: true,
					overwrite: 5							
				});
						
		});
    }
    
    var normalSlide = function () {
        var enem_width = '100%',
            enem_height = '100%',
            enem_slideJssor = $('.enem_slide div');
        
        var en = enem_slideJssor.attr('u');
        
        $('.enem_slide').css({
            'position' : 'relative',
            'width' : enem_width,
            'height' : enem_height,
        });
        
        if(en === 'slides') {
            en.css({
                'position' : 'relative'
            });
        }
    }
    
    var customSlide = function () {
            var _SlideshowTransitions = [
                {$Duration:1200,$Opacity:2}
            ];

            var _CaptionTransitions = [];
            _CaptionTransitions["L"] = { $Duration: 400, $FlyDirection: 1, $Easing: { $Left: $JssorEasing$.$EaseInOutSine }, $ScaleHorizontal: 0.6, $Opacity: 2 };
            _CaptionTransitions["R"] = { $Duration: 400, $FlyDirection: 2, $Easing: { $Left: $JssorEasing$.$EaseInOutSine }, $ScaleHorizontal: 0.6, $Opacity: 2 };
            _CaptionTransitions["B"] = { $Duration: 400, $FlyDirection: 8, $Easing: { $Top: $JssorEasing$.$EaseInOutSine }, $ScaleVertical: 0.6, $Opacity: 2 };
            
            var options = {
                $FillMode: 2,                                       //[Optional] The way to fill image in slide, 0 stretch, 1 contain (keep aspect ratio and put all inside slide), 2 cover (keep aspect ratio and cover whole slide), 4 actuall size, default value is 0
                $AutoPlay: true,                                    //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
                $AutoPlayInterval: 4000,                            //[Optional] Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing, default value is 3000
                $PauseOnHover: 1,                                   //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, default value is 1

                $ArrowKeyNavigation: true,   			            //[Optional] Allows keyboard (arrow key) navigation or not, default value is false
                $SlideEasing: $JssorEasing$.$EaseOutQuint,          //[Optional] Specifies easing for right to left animation, default value is $JssorEasing$.$EaseOutQuad
                $SlideDuration: 1200,                               //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500
                $MinDragOffsetToSlide: 20,                          //[Optional] Minimum drag offset to trigger slide , default value is 20
                //$SlideWidth: 600,                                 //[Optional] Width of every slide in pixels, default value is width of 'slides' container
                //$SlideHeight: 300,                                //[Optional] Height of every slide in pixels, default value is height of 'slides' container
                $SlideSpacing: 0, 					                //[Optional] Space between each slide in pixels, default value is 0
                $DisplayPieces: 1,                                  //[Optional] Number of pieces to display (the slideshow would be disabled if the value is set to greater than 1), the default value is 1
                $ParkingPosition: 0,                                //[Optional] The offset position to park slide (this options applys only when slideshow disabled), default value is 0.
                $UISearchMode: 1,                                   //[Optional] The way (0 parellel, 1 recursive, default value is 1) to search UI components (slides container, loading screen, navigator container, arrow navigator container, thumbnail navigator container etc).
                $PlayOrientation: 1,                                //[Optional] Orientation to play slide (for auto play, navigation), 1 horizental, 2 vertical, default value is 1
                $DragOrientation: 1,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)

                $CaptionSliderOptions: {                            //[Optional] Options which specifies how to animate caption
                    $Class: $JssorCaptionSlider$,                   //[Required] Class to create instance to animate caption
                    $CaptionTransitions: _CaptionTransitions,       //[Required] An array of caption transitions to play caption, see caption transition section at jssor slideshow transition builder
                    $PlayInMode: 1,                                 //[Optional] 0 None (no play), 1 Chain (goes after main slide), 3 Chain Flatten (goes after main slide and flatten all caption animations), default value is 1
                    $PlayOutMode: 3                                 //[Optional] 0 None (no play), 1 Chain (goes before main slide), 3 Chain Flatten (goes before main slide and flatten all caption animations), default value is 1
                },

                $BulletNavigatorOptions: {                          //[Optional] Options to specify and enable navigator or not
                    $Class: $JssorBulletNavigator$,                 //[Required] Class to create navigator instance
                    $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
                    $AutoCenter: 1,                                 //[Optional] Auto center navigator in parent container, 0 None, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
                    $Steps: 1,                                      //[Optional] Steps to go for each navigation request, default value is 1
                    $Lanes: 1,                                      //[Optional] Specify lanes to arrange items, default value is 1
                    $SpacingX: 8,                                   //[Optional] Horizontal space between each item in pixel, default value is 0
                    $SpacingY: 8,                                   //[Optional] Vertical space between each item in pixel, default value is 0
                    $Orientation: 1                                 //[Optional] The orientation of the navigator, 1 horizontal, 2 vertical, default value is 1
                },

                $SlideshowOptions: {
                    $Class: $JssorSlideshowRunner$,
                    $Transitions: _SlideshowTransitions,
                    $TransitionsOrder: 1,
                    $ShowLink: true
                },
                //$SlideHeight: 500,
            };

            var jssor_slider1 = new $JssorSlider$("slider_container", options);
        
            function setWidthSlide() {
                var we = $('.enem_ahu_box_slider').width();
                jssor_slider1.$SetScaleWidth(Math.min(we, 1920));
            }
        
            function setHeightSlide() {
                var he = $('.enem_ahu_box_slider').height();
                jssor_slider1.$SlideHeight(he);
            }
        
            setWidthSlide();
            //setHeightSlide();

            //responsive code begin
            //you can remove responsive code if you don't want the slider scales while window resizes
//            function ScaleSlider() {
//                var bodyWidth = document.body.clientWidth;
//                if (bodyWidth)
//                    jssor_slider1.$SetScaleWidth(Math.min(bodyWidth, 1920));
//                else
//                    window.setTimeout(ScaleSlider, 30);
//            }

//            ScaleSlider();

//            if (!navigator.userAgent.match(/(iPhone|iPod|iPad|BlackBerry|IEMobile)/)) {
//                $(window).bind('resize', ScaleSlider);
//            }
    }
    
    var detectImage = function () {
        var image = $('.enem_detect img'),
            imageWidth = image.width(),
            imageHeight = image.height();
        if(imageWidth > imageHeight) {
            image.css({
//                'width' : '100%',
//                'height' : '100%',
                'width' : '100%',
                'height' : 'auto'
            });
        } else {
            image.css({
//                'height' : '100%',
                'height' : 'auto',
            });
        }
    }
    
    var swiperSlider = function () {
        var swiper = new Swiper('.enem_ahu_wrapper_list_aplikasiahu', {
	        //pagination: '.swiper-pagination',
	        slidesPerView: 7,
	        paginationClickable: true,
	        spaceBetween: 40,
	        freeMode: true,
	        grabCursor: true,
	        nextButton: '.swiper-button-next',
        	prevButton: '.swiper-button-prev',
            // Responsive breakpoints
            breakpoints: {
                // when window width is <= 320px
                320: {
                  slidesPerView: 1,
                  spaceBetweenSlides: 10
                },
                // when window width is <= 480px
                480: {
                  slidesPerView: 2,
                  spaceBetweenSlides: 20
                },
                // when window width is <= 640px
                768: {
                  slidesPerView: 3,
                  spaceBetweenSlides: 30
                },
                
                1024: {
                  slidesPerView: 3,
                  spaceBetweenSlides: 30
                },
                
                1250: {
                  slidesPerView: 5,
                  spaceBetweenSlides: 30
                }
            },
            autoplay: 2500,
            autoplayDisableOnInteraction: false
	    });
    }
    
    var swiperSlider2 = function () {
        var swiper = new Swiper('.enem_ahu_wrapper_list_faq', {
	        //pagination: '.swiper-pagination',
	        slidesPerView: 7,
	        paginationClickable: true,
	        spaceBetween: 30,
	        freeMode: true,
	        grabCursor: true,
	        nextButton: '.swiper-button-next',
        	prevButton: '.swiper-button-prev',
            // Responsive breakpoints
            breakpoints: {
                // when window width is <= 320px
                320: {
                  slidesPerView: 1,
                  spaceBetweenSlides: 10
                },
                // when window width is <= 480px
                480: {
                  slidesPerView: 2,
                  spaceBetweenSlides: 20
                },
                // when window width is <= 640px
                768: {
                  slidesPerView: 3,
                  spaceBetweenSlides: 30
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetweenSlides: 30
                },
                
                1250: {
                  slidesPerView: 5,
                  spaceBetweenSlides: 30
                }
            },
            autoplay: 2500,
            autoplayDisableOnInteraction: false
	    }); 
    }
    
    var swiperSlider3 = function () {
        var swiper = new Swiper('.enem_slide_struktur', {
	        //pagination: '.swiper-pagination',
	        slidesPerView: 3,
	        paginationClickable: true,
	        spaceBetween: 30,
	        freeMode: true,
	        grabCursor: true,
	        nextButton: '.swiper-button-next',
        	prevButton: '.swiper-button-prev',
            // Responsive breakpoints
            breakpoints: {
//                // when window width is <= 320px
//                320: {
//                  slidesPerView: 1,
//                  spaceBetweenSlides: 10
//                },
                // when window width is <= 480px
//                480: {
//                  slidesPerView: 2,
//                  spaceBetweenSlides: 20
//                },
                // when window width is <= 640px
                768: {
                  slidesPerView: 1,
                  spaceBetweenSlides: 10
                }
            }
	    }); 
    }
    
    var swiperSliderVideo = function () {
        var swiper = new Swiper('.enem_ahu_box_other_video', {
	        //pagination: '.swiper-pagination',
	        slidesPerView: 2,
	        paginationClickable: true,
	        spaceBetween: 50,
	        freeMode: true,
	        grabCursor: true,
	        nextButton: '.swiper-button-next',
        	prevButton: '.swiper-button-prev',
            // Responsive breakpoints
            breakpoints: {
                // when window width is <= 320px
                320: {
                  slidesPerView: 1,
                  spaceBetweenSlides: 10
                },
                // when window width is <= 480px
                480: {
                  slidesPerView: 2,
                  spaceBetweenSlides: 20
                },
                // when window width is <= 640px
                768: {
                  slidesPerView: 3,
                  spaceBetweenSlides: 30
                }
            }
	    }); 
    }
    
    var swiperSliderBanner = function() {
        var swiper = new Swiper('.enem_ahu_box_slider', {
            pagination: '.swiper-pagination',
//            nextButton: '.swiper-button-next',
//            prevButton: '.swiper-button-prev',
            paginationClickable: true,
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: 5000,
            parallax: true,
            autoplayDisableOnInteraction: false,
        });
    }
    
    var swiperSliderTab = function() {
        var swiper = new Swiper('.enem_ahu_tab_slider', {
	        //pagination: '.swiper-pagination',
	        slidesPerView: 1,
	        paginationClickable: true,
	        spaceBetween: 30,
	        freeMode: true,
	        grabCursor: true,
	        nextButton: '.swiper-button-next',
        	prevButton: '.swiper-button-prev',
            initialSlide: 1,
            breakpoints: {
                // when window width is <= 320px
//                320: {
//                  slidesPerView: 1,
//                  spaceBetweenSlides: 10
//                },
                // when window width is <= 480px
//                480: {
//                  slidesPerView: 2,
//                  spaceBetweenSlides: 20
//                },
                // when window width is <= 640px
                768: {
                  slidesPerView: 1,
                  spaceBetweenSlides: 30
                }
            }
	    });
    }
    
    var progressBar = function () {
        $.ajax({
          xhr: function()
          {
            var xhr = new window.XMLHttpRequest();
            //Upload progress
            xhr.upload.addEventListener("progress", function(evt){
              if (evt.lengthComputable) {
                var percentComplete = evt.loaded / evt.total;
                //Do something with upload progress
                console.log(percentComplete);
              }
            }, false);
            //Download progress
            xhr.addEventListener("progress", function(evt){
              if (evt.lengthComputable) {
                var percentComplete = evt.loaded / evt.total;
                //Do something with download progress
                console.log(percentComplete);
              }
            }, false);
            return xhr;
          },
          type: 'POST',
          url: "/",
          data: {},
          success: function(data){
            //Do something success-ish
          }
        });
    }
    
    var enemSecret = function() {
        enem_secret = '68a7998c07429dead3debb730cf0f17c'; 
        return enem_secret;
    }
    
    var enemDownload = function(elem) {
        var fileName = enemGetLinkDownload(elem);
        fpost.filename.value = fileName;
        fpost.submit();
        
        function enemGetLinkDownloadImage(elem) {
            var link = elem.attr('src');
            return link;
        }
    }
    
    var enemVideoHome = function() {

        // The API will call this function when the page has finished downloading the JavaScript for the player API
        function onYouTubePlayerAPIReady() {

            // Initialise the fancyBox after the DOM is loaded
            $(".fancybox")
            .attr('rel', 'gallery')
            .fancybox({
                openEffect  : 'none',
                closeEffect : 'none',
                nextEffect  : 'none',
                prevEffect  : 'none',
                padding     : 0,
                margin      : 50,
                beforeShow  : function() {
                    // Find the iframe ID
                    var id = $.fancybox.inner.find('iframe').attr('id');

                    // Create video player object and add event listeners
                    var player = new YT.Player(id, {
                        events: {
                            'onReady': onPlayerReady,
                            'onStateChange': onPlayerStateChange
                        }
                    });
                }
            });

        }
    }
    
    var powerHashEnem = function(enemPowerHash, enemPowerHashStatus) {
        var enemHash = enemPowerHash,
            enemPowerStatus = enemPowerHashStatus;
        console.info('This enem hash: ' + enemHash + ' and this hash status: ' + enemPowerStatus);
        if(enemHash && enemPowerStatus) {
            var enemHashEl = $('.enem_box_icon_' + enemHash),
                enemHashElTitle = enemHashEl.siblings('.enem_ahu_box_title_menu_' + enemPowerStatus);
            if(enemHashEl.length){
                enemPowerTabActiveHash();
                console.info(enemHash);
            } else {
                console.error('Coba cek Hash anda dan Statusnya. Your Hash is: ' + enemHash + ' and your status is: ' + enemPowerStatus);
            }
        } else {
            console.error('Hash dan Status Kosong');
        }
        
        function enemPowerTabActiveHash() {
            
            /** Sama Kaya enemPowerTabCategory() fungsinya buat aktifin tab tapi ini pake hash url **/
            var enemElClassActive = $('.menu_'+ enemPowerStatus +'_active'),
                enemThisEl = enemHashEl,
                enemThisElTitle = enemHashElTitle,
                enemThisTitle = enemThisElTitle.text(),
                enemElTabStatus = $('.enem_ahu_tab_status');

            enemElClassActive.removeClass('menu_'+ enemPowerStatus +'_active');
            //console.info(enemPowerType);
            enemThisEl.addClass('menu_'+ enemPowerStatus +'_active');
            //console.info(ex);
            enemElTabStatus.html(enemThisTitle);
            console.info(enemThisTitle);
        }
    }
    
    var powerModal = function(enemSiteUrl) {
        
        var enemSiteUrl = enemSiteUrl,
            enemAjaxKey = enemSecret();
        
//        console.info(enemAjaxKey);
//        console.info(enemSiteUrl);
        
        $(document).on('click','.enem_modal', function(){
           var enemPowerModalEl = $(this), 
               enemPowerModal = enemPowerModalEl.attr('data-enem-modalpower'),
               enemPowerModalTarget = enemPowerModalEl.attr('data-enem-modaltarget'),
               enemPowerModalId = enemPowerModalEl.attr('data-enem-enmodal'),
               enemPowerModalContainerTarget = $('.enem_body_modal');
            
            var enemFlag = true;
            
            if(enemPowerModal === 'modal_on') {
                
                if(enemSiteUrl) {
                    
                    if(enemPowerModalId) {
                        
                        var enemPowerModalTargetEl = $(enemPowerModalTarget);

                        if(enemPowerModalTargetEl.length) {

                            var enemFlag = false,
                                enemStatus = 'modal';
                            $('body').addClass('enem_modal_active_body');
                            
                        } else {
                            console.error('Check your modal target. Your modal target is: ' + enemPowerModalTargetEl);
                        }
                        
                    } else {
                        console.error('Check your enmodal. Your enmodal is: ' + enemPowerModalId);
                    }
                    
                } else {
                    console.error('Check your site url. Your site url is: ' + enemSiteUrl);
                }
                
                

            } else if(enemPowerModal === 'modal_off') {
                var enemPowerModalTargetEl = $('.enem_modal_active'),
                    enemContentModal = $('.enem_wrapper_content_modal');

                if(enemPowerModalTargetEl.length) {
                    enemPowerModalTargetEl.fadeOut();
                    enemContentModal.fadeOut();
                    $('body').removeClass('enem_modal_active_body');
                    
                    var enemFlag = 'modal_off';

                } else {
                    console.error('Check your modal target. Your modal target is: ' + enemPowerModalTargetEl);
                }

            } else {
                console.error('Check your modal power. Your modal power is: ' + enemPowerModal);
            }
            
            
            if(enemFlag === false) {
                
                var enemDataModal = {
                    enem_modal_target: enemPowerModalId,
                    enem_key: enemAjaxKey,
                    enem_status: enemStatus,
                }
                
                var enemLoadingModal = $('.enem_modal_loading'),
                    enemContentModal = $('.enem_wrapper_content_modal');
                
//                console.info(enemDataModal);
                enemLoadingModal.fadeIn();
                enemPowerModalTargetEl.fadeIn();
                enemPowerModalTargetEl.addClass('enem_modal_active');
                
                $.ajax({
                    url     : enemSiteUrl + '/ajax/enemmodal',
                    type    : 'POST',
                    data    : enemDataModal,
                    success   : function(data){

                      //enem_loading.fadeOut();
//                      enem_loading.hide();
                        
                        //reset element content modal
                        enemPowerModalContainerTarget.empty();
                        
                        
                        enemLoadingModal.hide();
                        
                        if(data) {
                            enemPowerModalContainerTarget.html(data);
                        } else {
                            enemPowerModalContainerTarget.html('Content Here');
                        }
                        
                        var enemElTitleModal = $('.enem_title_modal'),
                            enemGetTitleModal = $('.enem_body_content_modal').attr('data-enem-modaltitle');
                        
                        //reset element title
                        enemElTitleModal.empty();
                        
//                        console.info(enemGetTitleModal);
                        if(enemGetTitleModal) {
                            enemElTitleModal.html(enemGetTitleModal); 
                        } else {
                            enemElTitleModal.html('Title Here'); 
                            console.error('Check your modal title. Your title is: ' + enemGetTitleModal);
                        }
                        
                        enemContentModal.fadeIn();
                    /** Give some condition. Kalo butuh **/
                        /** if(asd) {
                        
                        }
                        **/
                    /*************************************/

                  }
                });
//                console.info('ok no flag');
            } else {
                if(enemFlag === 'modal_off') {
                    console.info('Thank you');
                } else {
                    console.error('Check your modal flag');
                }
            }
            
            console.info(enemPowerModal);
        });
        
    }
    
    var powerModalFix = function() {
        var enemWindow = $(window),
            enemWindowWidth = enemWindow.width(),
            enemWindowHeight = enemWindow.height(),
            enemModalElBody = $('.enem_container_body_modal'),
            enemModalBodyHeight = parseInt(enemModalElBody.height()),
            enemHeightWindowNow = Math.round(enemWindowHeight * 30 / 100),
            enemMaxHeightBodyModal = enemWindowHeight - enemHeightWindowNow,
            enemBodyContentModal = $('.enem_body_content_modal'),
            enemBodyContentWidth = enemBodyContentModal.width(),
            enemWrapperContentModalEl = $('.enem_wrapper_content_modal'),
            enemWidMinWrapperContentModal = enemWindowWidth - 80;
        
        powerTest('Width: ' + enemWindowWidth + '<br>' + ' Height: ' + enemWindowHeight + '<br>' + ' HaWeNo: ' + enemHeightWindowNow);
        
        if(enemWindowWidth > 620) {
            enemModalElBody.css({
                'max-height' : enemMaxHeightBodyModal
            });
            setTimeout(function(){
                if(enemBodyContentWidth > enemWindowWidth) {
                    enemWrapperContentModalEl.css({
                        'min-width' : enemWidMinWrapperContentModal
                    });
                }
            },20);
        } else {
            enemModalElBody.css({
                'max-height' : enemWindowHeight - 90
            });
        }
        
        $(window).resize(function(){
            var enemWindow = $(window),
                enemWindowWidth = enemWindow.width(),
                enemWindowHeight = enemWindow.height(),
                enemModalElBody = $('.enem_container_body_modal');

            powerTest('Width: ' + enemWindowWidth + '<br>' + ' Height: ' + enemWindowHeight);
            
            if(enemWindowWidth < 620) {
                enemModalElBody.css({
                    'height' : enemWindowHeight
                });
            } else {
                enemModalElBody.css({
                    'max-height' : enemWindowHeight - 90
                });
            }
            
        });
        
    }
    
    var powerVoting = function() {
        $(document).on('click', '.enem_vc', function(){
            var enemPowerChoice = $(this),
                enemParentElVoting = enemPowerChoice.parent();
            
            $('.enem_voting li').removeClass('power_voting_active');
            enemParentElVoting.addClass('power_voting_active');
            
            console.info('enem');
        });
    }
    
    var powerMenu = function() {
        $(document).on('click', '.enem_menu', function(){
            var enemThisBtnMenuEl = $(this),
                enemStatusBtn = enemThisBtnMenuEl.attr('data-menu'),
                enemBodyEl = $('body'),
                enemMenuEl = $('.enem_ahu_menu_side');
            
            var dataMenu = {
                enemThisBtnMenuEl: enemThisBtnMenuEl,
                enemBodyEl: enemBodyEl,
                enemMenuEl: enemMenuEl,
            }
            
            if(enemStatusBtn === 'hidden') {
//                enemMenuMobile(dataMenu, 'ON');
            } else if(enemStatusBtn === 'show') {
//                enemMenuMobile(dataMenu, 'OFF');
            } else {
                console.error('Check your status menu. Your status menu is: ' + enemStatusBtn);
            }
            
            
        });
        
//        function enemMenuMobile(dataMenu, enemMenuPower) {
//            if(enemMenuPower === 'ON') {
//                
//                dataMenu.enemBodyEl.addClass('enem_ahu_navbar_active');
//                setTimeout(function(){
//                    dataMenu.enemThisBtnMenuEl.addClass('is-active');
//                    dataMenu.enemMenuEl.animate({
//                        left : '0px',
//                    },700);
//                    dataMenu.enemBodyEl.animate({
//                        left : '270px',
//                    },700);
//                },5);
//                dataMenu.enemThisBtnMenuEl.attr('data-menu','show');
//                
//            } else if(enemMenuPower === 'OFF') {
//                
//                var enemAnimateFinish = false;
//            
//                dataMenu.enemThisBtnMenuEl.removeClass('is-active');
//                dataMenu.enemThisBtnMenuEl.attr('data-menu','hidden');
//                dataMenu.enemMenuEl.animate({
//                    left : '-270px',
//                },700);
//                dataMenu.enemBodyEl.animate({
//                    left : '0px',
//                },700);
//
//                setTimeout(function(){
//                    var enemBodyOffset = dataMenu.enemBodyEl.offset().left;
//                    if(enemBodyOffset === 0) {    
//                        dataMenu.enemBodyEl.removeClass('enem_ahu_navbar_active');    
//                    } 
//                },710);
//                
//            } else {
//                console.error('Check your menu power. Your power is: ' + dataMenu.enemMenuPower);
//            }
//        }
        
    }
    
    var powerTest = function(content) {
        $('body').append(enemTestElement);
        if(content.length) {
            $('.enem_test_element').html(content);
        } else {
            console.error('Check your content. Your content is: ' + content);
        }
    }
    
    var powerScreen = function() {
        var enemWindow = $(window),
            enemWidth = enemWindow.width(),
            enemHeight = enemWindow.height();
        
        $('body').append(enemTestElement);
        console.info('w : ' + enemWidth + ' ' + 'h : ' + enemHeight);
        if(enemWidth && enemHeight) {
            var dataScreen = {
                'enemWidth' : enemWidth,
                'enemHeight' : enemHeight,
            };
            var dataContent = 'width : ' + dataScreen.enemWidth + '<br>' + 'height : ' + dataScreen.enemHeight;
            $('.enem_test_element').html(dataContent);
        } else {
            console.error('Check your content. Your content is: ' + dataContent);
        }
    }
    
    var powerRatio = function(dataRatio) {
        var enemTypeof = powerGetType(dataRatio).enemTypeof;
        if(enemTypeof === 'object') {
            var enemPowerRatioWidth = dataRatio.width,
                enemPowerRatioHeight = dataRatio.height;
            
        } else {
            console.error('Data must be object. Your data is: ' + dataRatio);
        }
    }
    
    var powerSpeed = function() {
        window.onload = function(){
          setTimeout(function(){
            var t = performance.timing;
            console.log(t.loadEventEnd - t.responseEnd);
          }, 0);
        }
    }
    
    var powerLoader = function() {
        window.onload = function(){
            $('.enem_ahu_wrapper_loader').fadeOut(800);
            $('.enem_ahu_active_loader').removeClass('enem_ahu_active_loader');
        }
    }
    
    var powerSliderTitle = function(enemTarget) {
        var enemWindow = $(window),
            enemWindowWidth = enemWindow.width(),
            enemWindowHeight = enemWindow.height();
        
        var dataWindow = {
            powerWidth: enemWindowWidth,
            powerHeight: enemWindowHeight,
        }
        
        if(enemTarget.length){
            var enemTitleTarget = $('.' + enemTarget + ' .swiper-wrapper .swiper-slide span a p.title'),
                enemTotalTitle = enemTitleTarget.length;
            
//            console.info(enemTitleTarget);
//            console.info('w: ' + enemWindowWidth + ' and h : ' + enemWindowHeight);
//            console.info('Title total : ' + enemTotalTitle);
//            console.info('Target width : ' + enemParentWidth);
            
            
//            powerResponsive(dataWindow, exTest);
            enemTitleTarget.each(function(index){
                var enemElTarget = $(this),
                    enemTargetParent = enemElTarget.parent().parent(),
                    enemTitleText = enemElTarget.text(),
                    enemTitleLength = enemTitleText.length;
                
                var dataParam = {
                    textLength: enemTitleLength,
                    targetEl: enemTargetParent,
                }
                
                if(enemTitleLength > 15) {
                    if(dataWindow.powerWidth >= 2000) {
                        console.info('lebih dari 2000');
                    } else if(dataWindow.powerWidth >= 1500) {
                        console.info('1500 an');
                    } else if(dataWindow.powerWidth >= 1200) {
                        console.info('1200 an');
                        powerTitleSlider('add', dataParam);
                    } else if(dataWindow.powerWidth >= 768) {
                        console.info('768 aaaan');
                    } else {
                        console.info('Noresize :)');
                    }

                    enemWindow.on('resize', function(){
                        if(dataWindow.powerWidth >= 2000) {
                            console.info('lebih dari 2000');
                            powerTitleSlider('remove', dataParam);
                        } else if(dataWindow.powerWidth >= 1500) {
                            console.info('1500 an');
                            powerTitleSlider('remove', dataParam);
                        } else if(dataWindow.powerWidth >= 1200) {
                            console.info('1200 an');
                            powerTitleSlider('add', dataParam);
                        } else if(dataWindow.powerWidth >= 768) {
                            console.info('768 aaaan');
                            powerTitleSlider('remove', dataParam);
                        } else {
                            console.info('Resize :)');
                        }
                    });
                }
                
//                powerResponsiveTitleSlider(dataWindow, function(){
//                    powerTitleSlider('add', dataParam);
//                }, 'noresize');
//                
//                powerResponsiveTitleSlider(dataWindow, function(){
//                    powerTitleSlider('remove', dataParam);
//                }, 'resize');
                
                console.info(index + ": " + enemTitleText + ', and length is : ' + enemTitleLength);
                console.info( index + ": " + $(this).text() );
            });
            
        } else {
            console.error('Target not defined. Your target is : ' + enemTarget);
        }
    }
    
    var powerTitleSlider = function(statusPTS, dataParam) {
        var enemTypeof = powerGetType(dataParam).enemTypeof;
        if(statusPTS === 'add') {
            
            if(enemTypeof === 'object') {
                console.info('okee object');
                if(dataParam.textLength > 15) {
                    dataParam.targetEl.addClass('enem_' + enemProjectName + '_slider_gap');
                    console.info('Success add class');
                }
            } else {
                console.error('Data Must be object. Your data type is : ' + enemTypeof);
            }
            
        } else if(statusPTS === 'remove') {
            $('.enem_' + enemProjectName + '_slider_gap').removeClass('enem_' + enemProjectName + '_slider_gap');
            console.info('Success remove class');
        } else {
            console.error('Error in powerTitleSlider. Sorry :)');
        }
    }
    
    var powerResponsiveTitleSlider = function(dataWindow, callback, statusPRTS) {
        console.info(dataWindow);
        var enemWindow = $(window);
        
        if(callback) {
            
            if(statusPRTS === 'noresize') {
                
                if(dataWindow.powerWidth >= 2000) {
                    console.info('lebih dari 2000');
                } else if(dataWindow.powerWidth >= 1500) {
                    console.info('1500 an');
                } else if(dataWindow.powerWidth >= 1200) {
                    console.info('1200 an');
                    powerRunCallback(callback);
                } else if(dataWindow.powerWidth >= 768) {
                    console.info('768 aaaan');
                } else {
                    console.info('Noresize :)');
                }
                
            } else if(statusPRTS === 'resize') {
                
                enemWindow.resize(function(){
                    if(dataWindow.powerWidth >= 2000) {
                        console.info('lebih dari 2000');
                    } else if(dataWindow.powerWidth >= 1500) {
                        console.info('1500 an');
                    } else if(dataWindow.powerWidth >= 1200) {
                        console.info('1200 an');
                        powerRunCallback(callback);
                    } else if(dataWindow.powerWidth >= 768) {
                        console.info('768 aaaan');
                    } else {
                        console.info('Resize :)');
                    }
                });
                
            } else {
                console.error('Error in powerResponsiveTitleSlider. Sorry :)');
            }
            
            
        }
        
        return {
            powerWidth: dataWindow.powerWidth,
            powerHeight: dataWindow.powerHeight,
        }
    }
    
    var powerResponsive = function(dataWindow, callback) {
//        console.info(dataWindow);
//        if(dataWindow.powerWidth >= 2000) {
//            console.info('2000 an');
//            powerRunCallback(callback);
//        } else if(dataWindow.powerWidth >= 1200) {
//            console.info('1200 an');
//            powerRunCallback(callback);
//        } else if(dataWindow.powerWidth >= 768) {
//            console.info('700 an');
//        } else {
//            console.info(':)');
//        }
//        
//        return {
//            powerWidth: dataWindow.powerWidth,
//        }
    }
    
    var powerGetType = function(dataTitle){
        var enemTypeof = typeof(dataTitle);
        return {
            enemTypeof: enemTypeof,
        }
    }
    
    var powerRunCallback = function(callback) {
        if (callback) {
            var enemTypeof = powerGetType(callback).enemTypeof;
//            console.info(callback);
            if(enemTypeof === "function"){
                callback();
            } else {
                console.error('Sorry, check your callback. Your type is : ' + enemTypeof + ' :)');
            }
        } else {
            console.error('Sorry :)');
			console.error('Error in powerRunCallback');
		}
    }
    
    var powerSlider = function(dataSlider) {
//        console.info(dataSlider);
        var enemTypeof = powerGetType(dataSlider).enemTypeof;
//            console.info(callback);
        // dataSlider must object
        // dataSlider.sliderType = For type of slider
        // dataSlider.element = For element of slider
        // dataSlider.setting = For setting slider. this data is optional
        if(enemTypeof === "object"){
            
            if($(dataSlider.element)[0]) {
                
                if(dataSlider.sliderType === 'banner') {
                    
                    if(dataSlider.setting) {
                        var swiper = new Swiper(dataSlider.element, dataSlider.setting);
                    } else {
                        var swiper = new Swiper(dataSlider.element, {
                            pagination: '.swiper-pagination',
                //            nextButton: '.swiper-button-next',
                //            prevButton: '.swiper-button-prev',
                            paginationClickable: true,
                            spaceBetween: 30,
                            centeredSlides: true,
                            autoplay: 5000,
                            parallax: true,
                            autoplayDisableOnInteraction: false,
                        });
                    } 
                    
                } else if(dataSlider.sliderType === 'sliderList') {
                    
                    if(dataSlider.setting) {
                        var swiper = new Swiper(dataSlider.element, dataSlider.setting);
                    } else {
                        var swiper = new Swiper(dataSlider.element, {
                            //pagination: '.swiper-pagination',
                            slidesPerView: 7,
                            paginationClickable: true,
                            spaceBetween: 40,
                            freeMode: true,
                            grabCursor: true,
                            nextButton: '.swiper-button-next',
                            prevButton: '.swiper-button-prev',
                            // Responsive breakpoints
                            breakpoints: {
                                // when window width is <= 320px
                                320: {
                                  slidesPerView: 1,
                                  spaceBetweenSlides: 10
                                },
                                // when window width is <= 480px
                                480: {
                                  slidesPerView: 1,
                                  spaceBetweenSlides: 20
                                },
                                // when window width is <= 640px
                                768: {
                                  slidesPerView: 3,
                                  spaceBetweenSlides: 30
                                },

                                1024: {
                                  slidesPerView: 3,
                                  spaceBetweenSlides: 30
                                },

                                1250: {
                                  slidesPerView: 5,
                                  spaceBetweenSlides: 30
                                }
                            },
                            autoplay: 2500,
                            autoplayDisableOnInteraction: false
                        });
                    }
                    
                } else if(dataSlider.sliderType === 'sliderOtherVideo') {
                    if(dataSlider.setting) {
                        var swiper = new Swiper(dataSlider.element, dataSlider.setting);
                    } else {
                        var swiper = new Swiper(dataSlider.element, {
                            //pagination: '.swiper-pagination',
                            slidesPerView: 2,
                            paginationClickable: true,
                            spaceBetween: 50,
                            freeMode: true,
                            grabCursor: true,
                            nextButton: '.swiper-button-next',
                            prevButton: '.swiper-button-prev',
                            // Responsive breakpoints
                            breakpoints: {
                                // when window width is <= 320px
                                320: {
                                  slidesPerView: 1,
                                  spaceBetweenSlides: 10
                                },
                                // when window width is <= 480px
                                480: {
                                  slidesPerView: 1,
                                  spaceBetweenSlides: 20
                                },
                                // when window width is <= 640px
                                768: {
                                  slidesPerView: 3,
                                  spaceBetweenSlides: 30
                                },
                                1024: {
                                  slidesPerView: 3,
                                  spaceBetweenSlides: 30
                                },
                            }
                        });
                    }
                    
                } else if(dataSlider.sliderType === 'sliderStruktur') {
                    if(dataSlider.setting) {
                        var swiper = new Swiper(dataSlider.element, dataSlider.setting);
                    } else {
                        var swiper = new Swiper(dataSlider.element, {
                            //pagination: '.swiper-pagination',
                            slidesPerView: 3,
                            paginationClickable: true,
                            spaceBetween: 30,
                            freeMode: true,
                            grabCursor: true,
                            nextButton: '.swiper-button-next',
                            prevButton: '.swiper-button-prev',
                            // Responsive breakpoints
                            breakpoints: {
                //                // when window width is <= 320px
                //                320: {
                //                  slidesPerView: 1,
                //                  spaceBetweenSlides: 10
                //                },
                                // when window width is <= 480px
                //                480: {
                //                  slidesPerView: 2,
                //                  spaceBetweenSlides: 20
                //                },
                                // when window width is <= 640px
                                768: {
                                  slidesPerView: 1,
                                  spaceBetweenSlides: 10
                                }
                            }
                        }); 
                    }
                } else if(dataSlider.sliderType === 'sliderTab') {
                    if(dataSlider.setting) {
                        var swiper = new Swiper(dataSlider.element, dataSlider.setting);
                    } else {
                        var swiper = new Swiper(dataSlider.element, {
                            //pagination: '.swiper-pagination',
                            slidesPerView: 1,
                            paginationClickable: true,
                            spaceBetween: 30,
                            freeMode: true,
                            grabCursor: true,
                            nextButton: '.swiper-button-next',
                            prevButton: '.swiper-button-prev',
                            // Responsive breakpoints
                            breakpoints: {
                //                // when window width is <= 320px
                //                320: {
                //                  slidesPerView: 1,
                //                  spaceBetweenSlides: 10
                //                },
                                // when window width is <= 480px
                //                480: {
                //                  slidesPerView: 2,
                //                  spaceBetweenSlides: 20
                //                },
                                // when window width is <= 640px
                                768: {
                                  slidesPerView: 1,
                                  spaceBetweenSlides: 10
                                }
                            }
                        });
                    }
                } else {
                    console.error('Sorry, check your sliderType. Your type is : ' + dataSlider.sliderType + ' :)');
                }
                
            } else {
                console.error('Sorry, check your element. Your element is : ' + dataSlider.element + ' :)');
            }
            
        } else {
            console.error('Sorry, check your dataSlider. Your type is : ' + enemTypeof + ' :)');
        }
        
    }
    
    var powerToggle = function(powerOfToggle, dataToggle) {
        // dataToggle.targetId buat elemen yg mau di off. Mencari berdasarkan Toggle namenya. Jadi Toggle Id dan Toggle name harus sama
        // dataToggle.targetActive buat elemen yg mau di on
//        console.info('hahahahahaha');
        if(powerOfToggle === 'off') {
            $(dataToggle.targetId).slideUp(700);
            $(dataToggle.targetId).removeClass('toggle-active');
        } else if(powerOfToggle === 'on') {
            $(dataToggle.targetId).hide();
            $(dataToggle.targetId).removeClass('toggle-active');
            $(dataToggle.targetActive).slideDown(700);
            $(dataToggle.targetActive).addClass('toggle-active');
        } else {
            console.error('Sorry :)');
        }
    }
    
    var powerHash = function(enemHash, activeClass, clbk) {
        if(enemHash) {
            if($('[data-enem-hash='+ enemHash +']')[0]) {
                if(activeClass) {
                    var enemTargetEl = $('[data-enem-hash='+ enemHash +']'),
                        enemActiveClassHash = $('.' + activeClass);
                    enemActiveClassHash.removeClass(activeClass);
                    enemTargetEl.addClass(activeClass);
                    if(clbk) {
                        powerRunCallback(clbk);
                    }
                }
            } else {
                console.error('Sorry, check your hash element. your hash element is : data-enem-hash=' + enemHash);
            }
            console.info('Hash ok :)');
        } else {
            console.error('Sorry, check your hash. your hash is : ' + enemHash);
        }
    }
    
    var powerShowModal = function(dataModal) {
        var enemModalTitleEl = $(dataModal.selector).find('.modal-title'),
            enemModalContentEl = $(dataModal.selector).find('.modal-body'),
            enemModalContainerEl = $(dataModal.selector).find('.modal-dialog');
        
        if(dataModal.power === 'on') {
            if(dataModal.modalWidth) {
                enemModalContainerEl.css({
                    'width' : dataModal.modalWidth,
                });
            }
            
            if(dataModal.modalTitle) {
                enemModalTitleEl.html(dataModal.modalTitle);
            }
            if(dataModal.modalContent) {
                enemModalContentEl.html(dataModal.modalContent);
            }
            
            if(dataModal.beforeOn) {
                powerRunCallback(dataModal.beforeOn);
            }
            
            $(dataModal.selector).modal('show');
        } else if(dataModal.power === 'off') {
            $(dataModal.selector).modal('hide');
        }
    }
    
    var powerNetral = function(dataNetral) {
        function cleanDistrubingStyle() {
            console.info(dataNetral.enemCleanDistrubing);
            $(dataNetral.enemCleanDistrubing.cleanEl).removeAttr('style');
        }
        function initClean() {
            if(dataNetral.enemCleanDistrubing) {
                var enemTypeof = powerGetType(dataNetral.enemCleanDistrubing).enemTypeof;
                if(enemTypeof === 'object') {
                    if($(dataNetral.enemCleanDistrubing.cleanEl)[0]) {
                        if(dataNetral.enemCleanDistrubing.cleanType === 'styleInline') {
                            cleanDistrubingStyle();
                            if(dataNetral.enemCleanDistrubing.cleanSuccess) {
                                powerRunCallback(dataNetral.enemCleanDistrubing.cleanSuccess);
                            }
                        } else {
                            console.error('Sorry, not found cleanType. Your cleanType is : ' + dataNetral.enemCleanDistrubing.cleanType);
                        }
                    } else {
                        console.error('Sorry, not found element cleanEl');
                    }
                } else {
                    console.error('Sorry, enemCleanDistrubing must be object. Your enemCleanDistrubing is : ' + enemTypeof);
                }
                
            } else {
                console.error('Sorry, you dont have enemCleanDistrubing');
            }
        }
        
        initClean();
    }
    
    var powerVex = function(dataVex) {
        if(dataVex) {
            var enemTypeof = powerGetType(dataVex).enemTypeof;
            if(enemTypeof === 'object') {
                if(dataVex.vexMessages) {
                    if(dataVex.beforeLoad) {
                        var enemTypeof = powerGetType(dataVex.beforeLoad).enemTypeof;
                        if(enemTypeof === 'function') {
                            powerRunCallback(dataVex.beforeLoad);
                        }
                    }
                    vex.defaultOptions.className = 'vex-theme-os';
                    vex.dialog.alert(dataVex.vexMessages);
                    if(dataVex.afterLoad) {
                        var enemTypeof = powerGetType(dataVex.afterLoad).enemTypeof;
                        if(enemTypeof === 'function') {
                            powerRunCallback(dataVex.afterLoad);
                        }
                    }
                } else {
                    console.error('Sorry, not found vexMessages');
                }
            } else {
                console.error('Data must be object. Your data is: ' + dataVex);
            }
            
        } else {
            console.error('Sorry, not found dataVex');
        }
    }
    
    var powerModernizr = function(dataModernizr) {
        if(Modernizr.dataModernizr.usage) {
            //do something if support
            if(dataModernizr.clbkSupport) {
                powerRunCallback(dataModernizr.clbkSupport);
            }
        } else {
            //do something if not support
            if(dataModernizr.clbkNotSupport) {
                powerRunCallback(dataModernizr.clbkNotSupport);
            }
        }
    }
    
    var powerMaps = function(dataMaps) {
        if(dataMaps) {
            var enemTypeof = powerGetType(dataMaps).enemTypeof;
            if(enemTypeof === 'object') {
                $(dataMaps.selectorEl).on('click', function(){
                    var map = new google.maps.Map(document.getElementById(dataMaps.targetIdEl), dataMaps.options);
                    var image = new google.maps.MarkerImage(dataMaps.markerImg,
                        new google.maps.Size(129, 42),
                        new google.maps.Point(0,0),
                        new google.maps.Point(40, 12)
                    );
                    // Add Marker
                    var marker1 = new google.maps.Marker({
                        position: dataMaps.latlng,
                        map: map,
                        icon: image
                    });
                    google.maps.event.addListener(marker1, 'click', function() {
                        infowindow1.open(map, marker1);
                    });
                });
            } else {
                console.error('Data must be object. Your data is: ' + dataMaps);
            }
        } else {
            console.error('Sorry, not found dataMaps');
        }
    }
    
    var powerToggleEz = function(dataToggleEz) {
        if(dataToggleEz) {
            var enemTypeof = powerGetType(dataToggleEz).enemTypeof;
            if(enemTypeof === 'object') {
                if(dataToggleEz.selectorEl[0] && dataToggleEz.targetEl[0]) {
                    $(document).on('click', dataToggleEz.selectorEl, function(){

                        if(dataToggleEz.beforeLoad) {
                            powerRunCallback(dataToggleEz.beforeLoad);
                        }

                        if(dataToggleEz.speedToggle) {
                            $(dataToggleEz.targetEl).toggle(dataToggleEz.speedToggle);
                        } else {
                            $(dataToggleEz.targetEl).toggle();
                        }

                        if(dataToggleEz.afterLoad) {
                            powerRunCallback(dataToggleEz.afterLoad);
                        }
                    });
                } else {
                    console.error('Sorry, nor found selectorEl and targetEl');
                }
            } else {
                console.error('Data must be object. Your data is: ' + dataToggleEz);
            }
        } else {
            console.error('Sorry, not found dataToggleEz');
        }
    }
    
    var powerCss = function(dataCss) {
        if(dataCss) {
            var enemTypeof = powerGetType(dataCss).enemTypeof;
            if(enemTypeof === 'object') {
                if(dataCss.targetEl[0]) {
                    var enemTypeof = powerGetType(dataCss.css).enemTypeof;
                    if(enemTypeof === 'object') {
                        $(dataCss.targetEl).css(dataCss.css);
                    } else {
                        console.error('Data must be object. Your css is: ' + dataCss);
                    }
                } else {
                    console.error('Sorry, not found targetEl');
                }
            } else {
                console.error('Data must be object. Your dataCss is: ' + dataCss);
            }
        } else {
            console.error('Sorry, not found dataCss');
        }
    }
    
    var powerNiceScroll = function(dataScroll) {
        // Example Nicescroll // 
//        $("#thisdiv").niceScroll({
//            cursorcolor: "#424242", // change cursor color in hex
//            cursoropacitymin: 0, // change opacity when cursor is inactive (scrollabar "hidden" state), range from 1 to 0
//            cursoropacitymax: 1, // change opacity when cursor is active (scrollabar "visible" state), range from 1 to 0
//            cursorwidth: "5px", // cursor width in pixel (you can also write "5px")
//            cursorborder: "1px solid #fff", // css definition for cursor border
//            cursorborderradius: "5px", // border radius in pixel for cursor
//            zindex: "auto", //| //<number>, // change z-index for scrollbar div
//            scrollspeed: 60, // scrolling speed
//            mousescrollstep: 40, // scrolling speed with mouse wheel (pixel)
//            touchbehavior: false, // enable cursor-drag scrolling like touch devices in desktop computer
//            hwacceleration: true, // use hardware accelerated scroll when supported
//            boxzoom: false, // enable zoom for box content
//            dblclickzoom: true, // (only when boxzoom=true) zoom activated when double click on box
//            gesturezoom: true, // (only when boxzoom=true and with touch devices) zoom activated when pinch out/in on box
//            grabcursorenabled: true, // (only when touchbehavior=true) display "grab" icon
//            autohidemode: true, // how hide the scrollbar works, possible values: 
////              true | // hide when no scrolling
////              "cursor" | // only cursor hidden
////              false | // do not hide,
////              "leave" | // hide only if pointer leaves content
////              "hidden" | // hide always
////              "scroll", // show only on scroll          
//            background: "", // change css for rail background
//            iframeautoresize: true, // autoresize iframe on load event
//            cursorminheight: 32, // set the minimum cursor height (pixel)
//            preservenativescrolling: true, // you can scroll native scrollable areas with mouse, bubbling mouse wheel event
//            railoffset: false, // you can add offset top/left for rail position
//            bouncescroll: false, // (only hw accell) enable scroll bouncing at the end of content as mobile-like 
//            spacebarenabled: true, // enable page down scrolling when space bar has pressed
//            railpadding: { top: 0, right: 0, left: 0, bottom: 0 }, // set padding for rail bar
//            disableoutline: true, // for chrome browser, disable outline (orange highlight) when selecting a div with nicescroll
//            horizrailenabled: true, // nicescroll can manage horizontal scroll
//            railalign: right, // alignment of vertical rail
//            railvalign: bottom, // alignment of horizontal rail
//            enabletranslate3d: true, // nicescroll can use css translate to scroll content
//            enablemousewheel: true, // nicescroll can manage mouse wheel events
//            enablekeyboard: true, // nicescroll can manage keyboard events
//            smoothscroll: true, // scroll with ease movement
//            sensitiverail: true, // click on rail make a scroll
//            enablemouselockapi: true, // can use mouse caption lock API (same issue on object dragging)
//            cursorfixedheight: false, // set fixed height for cursor in pixel
//            hidecursordelay: 400, // set the delay in microseconds to fading out scrollbars
//            directionlockdeadzone: 6, // dead zone in pixels for direction lock activation
//            nativeparentscrolling: true, // detect bottom of content and let parent to scroll, as native scroll does
//            enablescrollonselection: true, // enable auto-scrolling of content when selection text
//            cursordragspeed: 0.3, // speed of selection when dragged with cursor
//            rtlmode: "auto", // horizontal div scrolling starts at left side
//            cursordragontouch: false, // drag cursor in touch / touchbehavior mode also
//            oneaxismousemode: "auto", // it permits horizontal scrolling with mousewheel on horizontal only content, if false (vertical-only) mousewheel don't scroll horizontally, if value is auto detects two-axis mouse
//            scriptpath: "", // define custom path for boxmode icons ("" => same script path)
//            preventmultitouchscrolling: true, // prevent scrolling on multitouch events
//            disablemutationobserver: false, // force MutationObserver disabled
//        });
        if(dataScroll) {
            
            var enemTypeof = powerGetType(dataScroll).enemTypeof;
            if(enemTypeof === 'object') {
                if(dataScroll.targetEl[0]) {
                    if(dataScroll.setting) {
                        if(dataScroll.setting === 'default') {
                            
                            if(dataScroll.targetEl[0]) {
                                $(dataScroll.targetEl).niceScroll();
                            } else {
                                console.error('Sorry, not found dataScroll.targetEl');
                            }
                            
                        } else {
                            
                            if(dataScroll.targetEl[0]) {
                                var enemTypeof = powerGetType(dataScroll.setting).enemTypeof;
                                if(enemTypeof === 'object') {
                                    $(dataScroll.targetEl).niceScroll(dataScroll.setting);
                                } else {
                                    console.error('Data must be object. dataScroll.setting');
                                }
                            } else {
                                console.error('Sorry, not found dataScroll.targetEl');
                            }
                            
                        }
                    } else {
                        console.error('Sorry, not found dataScroll.setting');
                    }
                } else {
                    console.error('Sorry, not found targetEl');
                }
            } else {
                console.error('Data must be object. Your dataScroll is: ' + dataScroll);
            }
            
        } else {
            console.error('Sorry, not found dataScroll');
        }
        
    }
	
	var powerSidebar = function(dataSidebar) {
		if(dataSidebar) {
			var enemTypeof = powerGetType(dataSidebar).enemTypeof; 
			if(enemTypeof === "object") {
				var enemElBody = $(dataSidebar.elBody),
					enemElSidebar = $(dataSidebar.elSidebar);
				
				if(enemElBody[0]) {
					if(enemElSidebar[0]) {
						if(dataSidebar.status == 'on') {
							console.info('Sidebar on');
//							enemElSidebar.addClass('sidebar-active');
//							enemElBody.css({
//								'overflow' : 'auto'
//							});
//							enemElBody.animate({
//								'left' : '250px',
//							},500);
//							enemElSidebar.animate({
//								'left' : '0'
//							},500);
//							
//							
//							setTimeout(function(){
//								enemElBody.addClass('menu-active');
//							},510); // Old Code
							
							
//							enemElBody.animate({
//								'marginLeft' : '250px',
//							},500); // Old code
							
							// For Responsive Container content element
							if(Modernizr.mq('(min-width: 1200px)')) {
								enemElBody.animate({
									'marginLeft' : '250px',
								},500);
							} else {
								enemElBody.animate({
									'marginLeft' : '0px',
								},500);
							}
							
							enemElSidebar.animate({
								'left' : '0'
							},500);
							
							
						} else if(dataSidebar.status == 'off') {
							console.info('Sidebar off');
//							enemElSidebar.removeClass('sidebar-active');
//							enemElBody.animate({
//								'left' : '0px',
//							},500);
//							enemElSidebar.animate({
//								'left' : '-250px'
//							},500);
//							
////							enemElBody.removeClass('menu-active');
////							enemElBody.css({
////								'overflow' : 'hidden'
////							});
//							enemElBody.removeClass('menu-active');
//							
//							setTimeout(function(){
////								enemElBody.removeClass('menu-active');
//								enemElBody.css({
//									'overflow' : 'hidden'
//								});
//							},550); // Old Code 
							
							enemElBody.animate({
								'marginLeft' : '0px',
							},500);
							
							enemElSidebar.animate({
								'left' : '-250px'
							},500);
							
						} else {
							console.error('Sory, statusSidebar not found. In powerSidebar');
						}
					} else {
						console.error('Sory, elSidebar not found. In powerSidebar');
					}
				} else {
					console.error('Sory, elBody not found. In powerSidebar');
				}
			} else {
				console.error('Sorry, dataSidebar must be object. In powerSidebar');
			}
		} else {
			console.info('Sorry, not found dataSidebar. In powerSidebar');
		}
	}
	
	var powerAlert = function(dataAlert) {
		if(dataAlert) {
			var enemTypeof = powerGetType(dataAlert).enemTypeof;
			if(enemTypeof === 'object') {
				if(dataAlert.status) {
					if(dataAlert.messages) {
						switch(dataAlert.status) {
							case 1:
								var enemAlertStatus = 'danger';
							break;
								
							case 2:
								var enemAlertStatus = 'success';
							break;
								
							case 3:
								var enemAlertStatus = 'info';
							break;
								
							case 4:
								var enemAlertStatus = 'warning';
							break;
								
							default:
								var enemAlertStatus = 'info';
							break;
						}
						var enemTemplateAlert = '<div class="enem alert alert-'+ enemAlertStatus +' power-alert message-box">'+ dataAlert.messages +'</div>',
							enemElAlert = $('[data-enem-power="powerAlert"]');
						
						enemElAlert.html(enemTemplateAlert);
						setTimeout(function(){
							enemElAlert.addClass('active');
						},500);
						setTimeout(function(){
							enemElAlert.removeClass('active');
						},5500);
					} else {
						console.error('Sorry, not found dataAlert messages');
					}
				} else {
					console.error('Sorry, not found dataAlert status');
				}
			} else {
				console.error('Data must be object. Your data is: ' + dataAlert);
			}
		} else {
			console.error('Sorry, not found dataAlert in powerAlert');
		}
	}
	
	var powerNotification = function(dataNotification) {
		if(dataNotification) {
			
			var enemTypeof = powerGetType(dataNotification).enemTypeof;
			if(enemTypeof === "object") {
				if(dataNotification.statusNotification) {
					if(dataNotification.setAlert) {
						var enemTypeof = powerGetType(dataNotification.setAlert).enemTypeof;
						if(enemTypeof === "object") {
							switch(dataNotification.statusNotification) {
								case 1:
									var enemNotificationStatus = 'messages';
								break;

								case 2:
									var enemNotificationStatus = 'notification';
								break;

								case 3:
									var enemNotificationStatus = 'other';
								break;

								default:
									var enemNotificationStatus = 'other';
								break;
							}
							var enemSetNotif = {
								'status' : dataNotification.setAlert.statusAlert,
								'messages' : dataNotification.setAlert.messagesAlert,
								'src' : dataNotification.srcNotification,
//								'ringtone' : dataNotification.ringtoneNotification,
							};
							var enemPathSound = enemSetNotif.src;
							var enemSoundEmbbed = '<audio class="enem sound-notif" src="'+ enemPathSound +'" autoplay width="0" height="0"></audio>',
								enemSoundNotifEl = $('.enem.sound-notif');
							if(enemSoundNotifEl[0]) {
								enemSoundNotifEl.remove();
								$('body').append(enemSoundEmbbed);
							} else {
								$('body').append(enemSoundEmbbed);
							}
							powerAlert(enemSetNotif);
						} else {
							console.error('Data must be object. Your data is: ' + dataNotification.setAlert + ' in powerNotification');
						}
					} else {
						console.error('Sorry, not found setAlert in powerNotification');
					}
				} else {
					console.error('Sorry, not found dataAlert status');
				}
			} else {
				console.error('Data must be object. Your data is: ' + dataNotification + ' in power notification');
			}
			
		} else {
			console.error('Sorry, not found dataNotification in powerNotification');
		}
		
		/** Contoh Pakai Notification **/
		/*
		/* enem.powerNotification({
				'statusNotification' : 1,
				'srcNotification' : 'media/sounds/test.mp3',
				'setAlert' : {
					'statusAlert' : 3,
					'messagesAlert' : 'Test Notif Sound',
				},
			});
		/*********************************/
		
	}
	
	var powerPanelCollapse = function(dataPanel) {
		if(dataPanel) {
			console.info('panel collapse ok :)');
			var enemPanelEl = $(dataPanel.panelEl);
			if(enemPanelEl[0]) {
				if(dataPanel.beforeAction) {
					powerRunCallback(dataPanel.beforeAction);
				}
				
				if(enemPanelEl.is(':hidden')) {
					enemPanelEl.slideDown();
				} else {
					enemPanelEl.slideUp();
				}
				
				if(dataPanel.afterAction) {
					powerRunCallback(dataPanel.afterAction);
				}
			} else {
				console.error('Sorry, not found panelEl in powerPanelCollapse');
			}
		} else {
			console.error('Sorry, not found dataPanel in powerPanelCollapse');
		}
	}
	
	var powerPanelClose = function(dataPanel) {
		if(dataPanel) {
			console.info('panel close ok :)');
			var enemPanelEl = $(dataPanel.panelEl);
			if(enemPanelEl[0]) {
				
				if(dataPanel.beforeAction) {
					powerRunCallback(dataPanel.beforeAction);
				}
				
				if(enemPanelEl.is(':hidden')) {
					enemPanelEl.fadeIn(1000);
				} else {
					if(dataPanel.removeDuration) {
						if(parseInt(dataPanel.removeDuration) === dataPanel.removeDuration) {
							setTimeout(function(){
								enemPanelEl.fadeOut(1000, function(){
									$(this).remove();
								});
							},dataPanel.removeDuration);
						} else {
							console.error('Sorry, removeDuration must be integer. In powerEnem');
						}
					} else {
						enemPanelEl.fadeOut(1000, function(){
							$(this).remove();
						});
					}
				}
				
				if(dataPanel.afterAction) {
					powerRunCallback(dataPanel.afterAction);
				}
				
			} else {
				console.error('Sorry, not found panelEl in powerPanelClose');
			}
		} else {
			console.error('Sorry, not found dataPanel in powerPanelClose');
		}
	}
	
	var powerSearch = function(dataSearch) {
		if(dataSearch) {
			var enemTypeof = powerGetType(dataSearch).enemTypeof;
			if(enemTypeof === "object") {
				var enemNameEl = $('[data-enem-search="'+dataSearch.nameEl+'"]'),
					enemStatus = dataSearch.status;
				if(enemNameEl[0]) {
					if(enemStatus == 'on') {
						enemNameEl.addClass('active');
					} else if(enemStatus == 'off') {
						enemNameEl.removeClass('active');
					} else {
						console.error('Sorry, not found status in powerSearch');
					}
				} else {
					console.error('Sorry, not found element in powerSearch');
				}
			} else {
				console.error('Sorry, dataSearch must be object in powerSearch');
			}
		} else {
			console.error('Sorry, not found dataSearch in powerSearch');
		}
	}
	
	var powerListNotification = function(dataNotif){
		var notifId = dataNotif.target,
			notifAllEl = $('[data-notification]'),
			notifEl = $('[data-notification="'+ notifId +'"]'),
			notifStatus = dataNotif.status;
		
		if(notifEl) {
			var enemTypeOf = powerGetType(dataNotif).enemTypeof;
			if(enemTypeOf == 'object') {
				if(notifStatus == 'on') {
					notifEl.addClass('active');
					if(dataNotif.success) {
						powerRunCallback(dataNotif.success);
					}
				} else if(notifStatus == 'off') {
					notifAllEl.removeClass('active');
					if(dataNotif.success) {
						powerRunCallback(dataNotif.success);
					}
				} else {
					console.error('Sorry, not found status in powerListNotification');
				}
				
			} else {
				console.error('Sorry, parameter must be object in powerListNotification');
			}
		} else {
			console.error('Sorry, not found data-notification element in powerListNotification');
		}
	}
	
	var powerEnem = function() {
		$('[data-enem]').on('click', function(){
			var enemThisEl = $(this),
				enemPowerType = enemThisEl.attr('data-enem');
			
			if(enemPowerType != "undefined") {
				console.info('powerEnem ok :)');
				if(enemPowerType === "powerMenu") {
					
					var enemBodyEl = '.enem.page-container', //target container
						enemSidebarEl = '.enem.sidebar.left';
					if(enemThisEl.hasClass('active')) {
						powerSidebar({
							'elBody' : enemBodyEl,
							'elSidebar' : enemSidebarEl,
							'status' : 'off',
						});
						enemThisEl.removeClass('active');
//						setTimeout(function(){
//							enemThisEl.removeClass('is-active');
//						},550);
						
//						powerNormalNs();
					} else {
//						enemThisEl.addClass('is-active');
						enemThisEl.addClass('active');
						powerSidebar({
							'elBody' : enemBodyEl,
							'elSidebar' : enemSidebarEl,
							'status' : 'on',
						});
					}
					
				} else if(enemPowerType === "powerSubmenu") {
					console.info('powerSubMenu ok :)');
					
					var enemSubmenuEl = enemThisEl.parent().children('.enem.sub-nav'),
						enemSubmenuIconEl = enemThisEl.children('.enem.icon.icon-sub-menu');
					
					if(enemSubmenuEl[0] && enemSubmenuIconEl[0]) {
						
						/** Enem Submenu Behavior **/
						function enemSubmenuOn() {
							enemSubmenuEl.slideDown();
							enemSubmenuIconEl.addClass('sub-active');
						}
						
						function enemSubmenuOff() {
							enemSubmenuEl.slideUp();
							enemSubmenuIconEl.removeClass('sub-active');
						}
						/****************************/
						
						if(enemSubmenuIconEl.hasClass('sub-active')) {
							enemSubmenuOff();
						} else {
							enemSubmenuOn();
						}
						
					} else {
						console.error('Sorry, not found submenu element or submenu icon element in powerSubmenu powerEnem');
					}
					
				} else if(enemPowerType === "powerDropdown") {
					console.info('powerDropdown ok :)');
					var enemThisDropdownId = enemThisEl.attr('data-dd-id'),
						enemDropdownEl = $('[data-dd-name="'+ enemThisDropdownId +'"]');
					if(enemDropdownEl[0]) {
						/** Enem Dropdown Behavior **/
						function enemDropdownOn() {
							enemDropdownEl.show();
							enemThisEl.addClass('active');
						}
						
						function enemDropdownOff() {
							enemDropdownEl.hide();
							enemThisEl.removeClass('active');
						}
						/*********************************/
						
						if(enemDropdownEl.is(':hidden')) {
							enemDropdownOn();
						} else {
							enemDropdownOff();
						}
					} else {
						console.error('Sorry, not found dropdown element. In powerDropdown');
					}
				} else if(enemPowerType === "powerPanel") {
					var enemPanelType = enemThisEl.attr('data-enem-panel');
					if(enemPanelType == "collapse") {
						var enemPanelTarget = enemThisEl.parent().parent().parent().parent().parent().find('.enem.panel-main-content'),
							enemThisIcon = enemThisEl.children('i');
						
						if(enemPanelTarget.is(':hidden')) {
							powerPanelCollapse({
								'panelEl' : enemPanelTarget,
							});
							enemThisIcon.removeClass('fa-plus');
							enemThisIcon.addClass('fa-minus');
//							console.info(enemThisIcon);
						} else {
							powerPanelCollapse({
								'panelEl' : enemPanelTarget,
							});
							enemThisIcon.removeClass('fa-minus');
							enemThisIcon.addClass('fa-plus');
//							console.info(enemThisIcon);
						}
					} else if(enemPanelType == "closePanel") {
						var enemPanelTarget = enemThisEl.parent().parent().parent().parent().parent();
						powerPanelClose({
							'panelEl' : enemPanelTarget,
							'removeDuration' : 550,
							'beforeAction' : function(){
								console.info(enemPanelTarget);
								enemPanelTarget.addClass('animated rotateOutDownRight');
							}
						});
					} else if(enemPanelType == "powerSearch") {
						if(enemThisEl.hasClass('active')) {
							powerSearch({
							 'nameEl' : 'powerSearch',
							 'status' : 'off'
							});
						} else {
							
						}
					} else {
						console.error('Sorry, not found data-enem-panel in powerEnem');
					}
				} else if(enemPowerType == "powerSearch") {
					var enemBtnSearch = $("[data-enem='"+ enemPowerType +"']");
					if(enemThisEl.hasClass('active')) {
						enemBtnSearch.removeClass('active');
						powerSearch({
							'nameEl' : 'powerSearch',
							'status' : 'off'
						});
					} else {
						enemBtnSearch.addClass('active');
						powerSearch({
							'nameEl' : 'powerSearch',
							'status' : 'on'
						});
					}
				} else if(enemPowerType == "powerListNotification") {
					var typeNotification = enemThisEl.attr('data-type-notification');
					$('[data-enem="'+ enemPowerType +'"]').removeClass('active');
					$('[data-enem="'+ enemPowerType +'"]').find('span.arrow-notification').fadeOut(300);
					if(typeNotification) {
						if($('[data-notification="'+ typeNotification +'"]').hasClass('active')) {
							
							powerListNotification({
								status: 'off',
								success: function() {
									if($('[data-enem="'+ enemPowerType +'"]').hasClass('active')){
										$('[data-enem="'+ enemPowerType +'"]').removeClass('active');
										$('[data-enem="'+ enemPowerType +'"]').find('span.arrow-notification').fadeOut(300);
									}
								},
							});
							console.info('close notif');
//							$('[data-enem="'+ enemPowerType +'"]').removeClass('active');
							
						} else {
							console.info('open notif');
//							$('[data-enem="'+ enemPowerType +'"]').find('span.arrow-notification').fadeOut(300);
							$('[data-enem="'+ enemPowerType +'"]').find('span.arrow-notification').fadeOut(300);
							powerListNotification({
								status: 'off',
								success: function() {
									if($('[data-enem="'+ enemPowerType +'"]').hasClass('active')){
										$('[data-enem="'+ enemPowerType +'"]').removeClass('active');
										$('[data-enem="'+ enemPowerType +'"]').find('span.arrow-notification').fadeOut(300);
									}
									
									console.info('close notif before open again');
								}
							});
							enemThisEl.addClass('active');
//							powerListNotification({
//								target: typeNotification,
//								status: 'on',
//								success: function() {
//									enemThisEl.find('span.arrow-notification').fadeIn(300);
//								}
//							});
							setTimeout(function(){
								powerListNotification({
									target: typeNotification,
									status: 'on',
//									success: function() {
//										enemThisEl.find('span.arrow-notification').fadeIn(300);
//									}
								});
							},1000);
							setTimeout(function(){
								enemThisEl.find('span.arrow-notification').fadeIn(300);
								enemThisEl.addClass('active');
							},2000);
							
						}
					} else {
						console.error('Sorry, not found data-type-notification in powerListNotification');
					}
				} else {
					console.error('Sorry, not found data-enem with your value. Your data-enem is : ' + enemPowerType + '. In powerDropdown');
				}
			} else {
				console.error('Sorry, not found data-enem value. Your data-enem is : ' + enemPowerType + '. In powerEnem');
			}
			
//			powerVex({
//				'vexMessages' : enemThisAttr,
//			});
		});
	}
	
	var powerWatch = function(dataWatch) {
		if(dataWatch) {
			var enemTypeof = powerGetType(dataWatch).enemTypeof;
			if(enemTypeof === "object") {
				
			} else {
				console.error('Sorry, dataWatch must be object. In powerWatch');
			}
		} else {
			console.error('Sorry, not found dataWatch. In powerWatch');
		}
		$('div').watch('width height', function(){
			console.log(this.style.width, this.style.height);
		});
	}
	
	var powerWaves = function() {
		Waves.init();
    	Waves.attach('.enem.waves', ['waves-block']);
	}
	
	var powerEnemScroll = function() {
		powerNiceScroll({
			targetEl : '.enem.scroll',
			setting : {
				cursorcolor: "#FFEB3B",
				cursorwidth: "5px",
//				background: 'grey',
				background: '#06b1b1',
				cursorborder: 'none',
//				smoothscroll: false,
			}
		});
		$('.nicescroll-rails-hr').hide();
	}
	
	var powerNormalNs = function() {
		$('.nicescroll-rails-hr').hide();
		$('window').on('resize',function(){
			alert('resize scroll');
		});
	}
	
	var powerTooltip = function() {
		$('[data-toggle="tooltip"]').tooltip();
	}
	
	var powerResponsive = function() {
		if(Modernizr.mq('(min-width: 1200px)')) {
			powerSidebar({'elBody' : '.enem.page-container', 'elSidebar' : '.enem.sidebar.left', 'status' : 'on'});
			$('[data-enem="powerMenu"]').addClass('active');
		} else {
			powerSidebar({'elBody' : '.enem.page-container', 'elSidebar' : '.enem.sidebar.left', 'status' : 'off'});
			$('[data-enem="powerMenu"]').removeClass('active');
		}
		$(window).on('resize', function(){
			if(Modernizr.mq('(min-width: 1200px)')) {
				powerSidebar({'elBody' : '.enem.page-container', 'elSidebar' : '.enem.sidebar.left', 'status' : 'on'});
				$('[data-enem="powerMenu"]').addClass('active');
			} else {
				powerSidebar({'elBody' : '.enem.page-container', 'elSidebar' : '.enem.sidebar.left', 'status' : 'off'});
				$('[data-enem="powerMenu"]').removeClass('active');
			}
		});
	}
	
	var powerEditor = function() {
		tinymce.init({
		  selector: '[data-enem="powerEditor"]',
		  height: 250,
		  plugins: [
			'advlist autolink lists link image charmap print preview anchor',
			'searchreplace visualblocks code fullscreen',
			'insertdatetime media table contextmenu paste code'
		  ],
		  toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
//		  content_css: [
//			'//fast.fonts.net/cssapi/e6dc9b99-64fe-4292-ad98-6974f93cd2a2.css',
//			'//www.tinymce.com/css/codepen.min.css'
//		  ]
		});
	}
	
	var powerCheckOffsetEl = function() {
		var docWidth = document.documentElement.offsetWidth;

		[].forEach.call(
		document.querySelectorAll('*'),
			function(el) {
				if (el.offsetWidth > docWidth) {
					console.log(el);
				}
			}
		);
	}
    
    var powerDocs = function(typeDocs) {
        if(typeDocs === 1) {
            var enemBody = $('body'),
                enemConDocs = $('.enem-container-docs'),
                enemCloseDocs = $('.enem-close-docs');
            
            var enemTemplate =  '<section class="enem-container-docs">' +
                                    '<div class="enem-close-docs">' +
                                        '&times;' +
                                    '</div>' +
                                    '<div>' +
                                        'lalalalala' +
                                    '</div>' +
                                '</section>';
            console.info(':)');
            
            function runPowerDocs() {
                enemGetWindowTemplate();
                enemTestOk();
                enemExitDocs();
            }
            function enemGetWindowTemplate() {
                enemBody.append(enemTemplate,function(){
                    enemConDocs.fadeIn();
                });
            }
            function enemTestOk(wow) {
                if(wow === 'enem') {
                    console.info('uhuy');
                } 
            }
            function enemExitDocs() {
                enemCloseDocs.on('click', function(){
                    enemConDocs.fadeOut();
                });
            }
            
            runPowerDocs();
        } else {
            console.info(':(');
        }
    }
    

	return {
		uhuy: uhuy,
        bismillah: bismillah,
        btnClick: btnClick,
        smoothScroll: smoothScroll,
        normalSlide: normalSlide,
        customSlide: customSlide,
        detectImage: detectImage,
        powerEnem: powerEnem,
        swiperSlider: swiperSlider,
        swiperSlider2: swiperSlider2,
        swiperSlider3: swiperSlider3,
        swiperSliderVideo: swiperSliderVideo,
        swiperSliderBanner: swiperSliderBanner,
        swiperSliderTab: swiperSliderTab,
        enemSecret: enemSecret,
        enemDownload: enemDownload,
        enemVideoHome: enemVideoHome,
        powerHashEnem: powerHashEnem,
        powerModal: powerModal,
        powerModalFix: powerModalFix,
        powerVoting: powerVoting,
        powerMenu: powerMenu,
        powerScreen: powerScreen,
        powerRatio: powerRatio,
        powerSpeed: powerSpeed,
        powerLoader: powerLoader,
        powerSliderTitle: powerSliderTitle,
        powerSlider: powerSlider,
        powerHash: powerHash,
        powerNetral: powerNetral,
        powerVex: powerVex,
        powerShowModal: powerShowModal,
        powerModernizr: powerModernizr,
        powerMaps: powerMaps,
        powerToggleEz: powerToggleEz,
        powerCss: powerCss,
        powerNiceScroll: powerNiceScroll,
        powerRunCallback: powerRunCallback,
		powerSidebar: powerSidebar,
		powerAlert: powerAlert,
		powerNotification: powerNotification,
		powerListNotification: powerListNotification,
		powerWatch: powerWatch,
		powerWaves: powerWaves,
		powerEnemScroll: powerEnemScroll,
		powerNormalNs: powerNormalNs,
		powerTooltip: powerTooltip,
		powerResponsive: powerResponsive,
		powerSearch: powerSearch,
		powerPanelCollapse: powerPanelCollapse,
		powerEditor: powerEditor,
		powerCheckOffsetEl: powerCheckOffsetEl,
        powerDocs: powerDocs,
        progressBar: progressBar,
	};

})(jQuery);