
$(document).ready(function ()
{
    var numNavs = $("#navigationbar").find('.navigation').length;
    var navWidth = (900 - (numNavs - 1) * 8) / numNavs;
    var navHeight = 60;

    $(".navigation").css("width", navWidth + "px");
    $(".navigation").css("height", navHeight + "px");
    $(".subnavigationbox").css("width", navWidth + "px");
    $(".subnavigationbox").css("height", navHeight + "px");

    $('.navigation, .subnavigationbox').mouseenter(function ()
    {
        $(this).css('background-color', '#243333');
        $(this).css('color', '#26c97a');

        var numSubNavs = $(this).children('.subnavigation').find('div').length;
        $(this).children('.subnavigation').animate(
        {
            height: numSubNavs * navHeight + "px"
        }, 90);
    });
    $('.navigation, .subnavigationbox').mouseleave(function ()
    {
        $(this).css('background-color', '#222222');
        $(this).css('color', '#185952');
        $(this).children('.subnavigation').animate(
        {
            height: "0px"
        }, 90);
    });
});