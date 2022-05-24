
$(document).ready(function() {
    $(".spring1").click(function() {
        $('td.toggle1').toggleClass("date1");
    });
});

$(document).ready(function() {
    $(".spring2").click(function() {
        $('td.toggle2').toggleClass("date2");
    });
});

$(document).ready(function() {
    $(".summer1").click(function() {
        $('td.toggle3').toggleClass("date3");
    });
});

$(document).ready(function() {
    $(".summer2").click(function() {
        $('td.toggle4').toggleClass("date4");
    });
});

$(document).ready(function() {
    $(".fall1").click(function() {
        $('td.toggle5').toggleClass("date5");
    });
});

$(document).ready(function() {
    $(".fall2").click(function() {
        $('td.toggle6').toggleClass("date6");
    });
});

$(document).ready(function() {
    $(".winter").click(function() {
        $('td.toggle7').toggleClass("date7");
    });
});

$(document).ready(function() {
    $(".button").click(function() {
        $(this).toggleClass("buttonfade");
    });
});

$(document).ready(function() {
    $(".uniholiday").click(function() {
        if ($('td.aptoggle').hasClass("holiday")) {
            $('td.aptoggle.holiday').toggleClass("both_ap_and_sb");
            $('td.aptoggle').toggleClass("apholiday");
        }
        else {
            $('td.aptoggle').toggleClass("apholiday");
        }
    });
});

$(document).ready(function() {
    $(".studbr").click(function() {
        if ($('td.studbrtoggle').hasClass("apholiday")) {
            $('td.studbrtoggle.apholiday').toggleClass("both_ap_and_sb");
            $('td.studbrtoggle').toggleClass("holiday");
        }
        else {
            $('td.studbrtoggle').toggleClass("holiday");
        }
    });
});





