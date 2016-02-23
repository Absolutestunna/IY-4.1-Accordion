
var $ = require("jquery");
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////ACCORDION///////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
$(document).ready(function() {
    function close_accordion_section() {
        $('.accordion .accordion-section-title').removeClass('active');
        $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
    }

    $('.accordion-section-title').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');

        if($(e.target).is('.active')) {
            close_accordion_section();
        }else {
            close_accordion_section();

            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
        }

        e.preventDefault();
    });



    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////CALENDER////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////


    var monthYr = document.querySelector(".month-year");
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth();
    var monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var monthsNum = [30, 28, 31, 30, 31, 30, 31, 31, 30, 30, 30, 30]

    console.log(monthsArray[])
    // console.log(monthObj.(monthsArray[month])
    monthYr.textContent = monthsArray[month] + " " + "."+" " + year;


    $('.dates').append('<div>Hello</div>');



});
