
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
    var start = 0;
    var monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var monthObj = {
      "January": 30,
      "February": 28,
      "March": 31,
      "April": 30,
      "May": 31,
      "June": 30,
      "July": 31,
      "August": 31,
      "September": 30,
      "October": 30,
      "November": 30,
      "December": 30
    }
    // console.log(monthObj.(monthsArray[month])
    monthYr.textContent = monthsArray[month] + " " + "."+" " + year;

    for (var i=0; i<monthObj.length; i++){
      console.log(monthObj.length);
    }
    // $.each(monthObj, function(key, value){
    //   console.log(key.);
    // })
    // $('.dates').append('<div>Hello</div>');



});
