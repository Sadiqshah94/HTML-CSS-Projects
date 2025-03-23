//  slick
$(document).ready(function() {
    $('.product-slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: 5,
        infinite: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});

$(document).ready(function() {
    $('.blog-slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: 3,
        infinite: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});


$(document).ready(function() {
    $('.gallery').slick({
        dots: false,
        arrows: true,
        slidesToShow: 4,
        infinite: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 770,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});



$(document).ready(function() {
    $('.review__slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: 3,
        infinite: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 995,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 770,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});
// check page
// quantity

$('.btn-number').click(function(e) {
    e.preventDefault();

    fieldName = $(this).attr('data-field');
    type = $(this).attr('data-type');
    var input = $("input[name='" + fieldName + "']");
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
        if (type == 'minus') {

            if (currentVal > input.attr('min')) {
                input.val(currentVal - 1).change();
            }
            if (parseInt(input.val()) == input.attr('min')) {
                $(this).attr('disabled', true);
            }

        } else if (type == 'plus') {

            if (currentVal < input.attr('max')) {
                input.val(currentVal + 1).change();
            }
            if (parseInt(input.val()) == input.attr('max')) {
                $(this).attr('disabled', true);
            }

        }
    } else {
        input.val(0);
    }
});
$('.input-number').focusin(function() {
    $(this).data('oldValue', $(this).val());
});
$('.input-number').change(function() {

    minValue = parseInt($(this).attr('min'));
    maxValue = parseInt($(this).attr('max'));
    valueCurrent = parseInt($(this).val());

    name = $(this).attr('name');
    if (valueCurrent >= minValue) {
        $(".btn-number[data-type='minus'][data-field='" + name + "']").removeAttr('disabled')
    } else {
        alert('Sorry, the minimum value was reached');
        $(this).val($(this).data('oldValue'));
    }
    if (valueCurrent <= maxValue) {
        $(".btn-number[data-type='plus'][data-field='" + name + "']").removeAttr('disabled')
    } else {
        alert('Sorry, the maximum value was reached');
        $(this).val($(this).data('oldValue'));
    }


});
$(".input-number").keydown(function(e) {
    // Allow: backspace, delete, tab, escape, enter and .
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
        // Allow: Ctrl+A
        (e.keyCode == 65 && e.ctrlKey === true) ||
        // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)) {
        // let it happen, don't do anything
        return;
    }
    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
    }
});

// collapse div field
// function myFunction() {
//     var x = document.getElementById("myDIV");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }
// collapse button div

var coll = document.getElementsByClassName("collapsible__div2");
var i;
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active__div2");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}



// drop down

$('.dropdown-el').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).toggleClass('expanded');
    $('#' + $(e.target).attr('for')).prop('checked', true);
});
$(document).click(function() {
    $('.dropdown-el').removeClass('expanded');
});






// Show password
function togglePass(e) {
    // toggle the type attribute
    const passwords = e.previousElementSibling;
    const type = passwords.getAttribute('type') === 'password' ? 'text' : 'password';
    passwords.setAttribute('type', type);
    // toggle the eye slash icon
    e.classList.toggle('fa-eye-slash');
}


// Read more

function ReadFunction(el) {
    // var dots = document.getElementById("dots");
    // var moreText = document.getElementById("more");
    // var btnText = document.getElementById("myBtn");
    var dots = el.previousElementSibling.firstElementChild;
    var moreText = dots.nextElementSibling;
    var btnText = el;
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}





// owl
// $('.owl-carousel').owlCarousel({
//         loop: true,
//         margin: 10,
//         nav: false,
//         slideSpeed: 5000,
//         paginationSpeed: 5000,
//         smartSpeed: 1500,
//         responsive: {
//             0: {
//                 items: 1
//             },
//             600: {
//                 items: 1
//             },
//             1000: {
//                 items: 1
//             }
//         }
//     })
// price filter


$('#price-range-submit').hide();

$("#min_price,#max_price").on('change', function() {

    $('#price-range-submit').show();

    var min_price_range = parseInt($("#min_price").val());

    var max_price_range = parseInt($("#max_price").val());

    if (min_price_range > max_price_range) {
        $('#max_price').val(min_price_range);
    }

    $("#slider-range").slider({
        values: [min_price_range, max_price_range]
    });

});


$("#min_price,#max_price").on("paste keyup", function() {

    $('#price-range-submit').show();

    var min_price_range = parseInt($("#min_price").val());

    var max_price_range = parseInt($("#max_price").val());

    if (min_price_range == max_price_range) {

        max_price_range = min_price_range + 100;

        $("#min_price").val(min_price_range);
        $("#max_price").val(max_price_range);
    }

    $("#slider-range").slider({
        values: [min_price_range, max_price_range]
    });

});

// tool
$('#example').tooltip();
$(function() {
    $("#slider-range").slider({
        range: true,
        orientation: "horizontal",
        min: 0,
        max: 10000,
        values: [0, 10000],
        step: 100,

        slide: function(event, ui) {
            if (ui.values[0] == ui.values[1]) {
                return false;
            }

            $("#min_price").val(ui.values[0]);
            $("#max_price").val(ui.values[1]);
        }
    });

    $("#min_price").val($("#slider-range").slider("values", 0));
    $("#max_price").val($("#slider-range").slider("values", 1));

});

$("#slider-range,#price-range-submit").click(function() {

    var min_price = $('#min_price').val();
    var max_price = $('#max_price').val();

    $("#searchResults").text("Here List of products will be shown which are cost between " + min_price + " " + "and" + " " + max_price + ".");
});

// size-inputs
$(document).ready(function() {
    $('button.btn-size').click(function() {
        $('.btn-size').removeClass("btn-size-active");
        $(this).addClass("btn-size-active");
    });
});

// collapse button div

var coll = document.getElementsByClassName("collapsible__div");
var i;
var div = document.getElementById("abc");
div.style.maxHeight = div.scrollHeight + "px";
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active__div");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

//feather icon





// picture Upload







// quantity buttons



// $('.btn-number').click(function(e){
//     e.preventDefault();

//     fieldName = $(this).attr('data-field');
//     type      = $(this).attr('data-type');
//     var input = $("input[name='"+fieldName+"']");
//     var currentVal = parseInt(input.val());
//     if (!isNaN(currentVal)) {
//         if(type == 'minus') {

//             if(currentVal > input.attr('min')) {
//                 input.val(currentVal - 1).change();
//             } 
//             if(parseInt(input.val()) == input.attr('min')) {
//                 $(this).attr('disabled', true);
//             }

//         } else if(type == 'plus') {

//             if(currentVal < input.attr('max')) {
//                 input.val(currentVal + 1).change();
//             }
//             if(parseInt(input.val()) == input.attr('max')) {
//                 $(this).attr('disabled', true);
//             }

//         }
//     } else {
//         input.val(0);
//     }
// });
// $('.input-number').focusin(function(){
//    $(this).data('oldValue', $(this).val());
// });
// $('.input-number').change(function() {

//     minValue =  parseInt($(this).attr('min'));
//     maxValue =  parseInt($(this).attr('max'));
//     valueCurrent = parseInt($(this).val());

//     name = $(this).attr('name');
//     if(valueCurrent >= minValue) {
//         $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
//     } else {
//         alert('Sorry, the minimum value was reached');
//         $(this).val($(this).data('oldValue'));
//     }
//     if(valueCurrent <= maxValue) {
//         $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
//     } else {
//         alert('Sorry, the maximum value was reached');
//         $(this).val($(this).data('oldValue'));
//     }


// });