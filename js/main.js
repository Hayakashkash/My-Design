$(document).ready(function(){
	$('#c1').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }

    }

})


    $('#c2').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }

    }

})

	});