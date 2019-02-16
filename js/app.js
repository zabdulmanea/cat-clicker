$(document).ready(function () {
    // Show and hide cat details based on clicking cat name
    // Hide all cats details
    $('.cat').hide();
    $(".cats-list a").click(function (event) {
        $('.cat').hide();
        var target = $(this).attr('href');
        $('.cat' + target).toggle();
    });
});