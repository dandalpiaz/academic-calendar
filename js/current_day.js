var today = new Date();
var monthNames = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];
var month_var = monthNames[today.getMonth()];
var day_var = today.getDate();

$(document).ready(function() {
    $('.' + month_var).filter(function() {
        return $(this).text() == day_var;
    }).toggleClass("currentday");
});