$(document).ready(function () {
    // Show and hide cat details based on clicking cat name
    // Hide all cats details
    $('.cat').hide();
    $(".cats-list a").click(function (event) {
        $('.cat').hide();
        var target = $(this).attr('href');
        $('.cat' + target).toggle();
    });

    // Increment the cat counter when clicking on the cat image 
    $(".cat img").click(function (event) {
        // get the counter span element
        var clicks_span = $(this).next().children()[0];
        // get the number of counts
        var clicks_counter = clicks_span.textContent;
        // Increase the counter by 1
        clicks_span.textContent = parseInt(clicks_counter) + 1;

        // var img_id = $(this).attr('id');
        // var clicks_id = clicks_span.getAttribute('id');
    });
});