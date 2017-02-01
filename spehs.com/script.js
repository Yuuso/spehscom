
$(document).ready(function ()
{
    var numNavs = $("#navigationbar > a").length;
    var navWidth = (900 - (numNavs - 1) * 8) / numNavs;
    $(".navigation").css("width", navWidth + "px");
    $('.navigation').mouseenter(function ()
    {
        $(this).css('background-color', '#243333');
        $(this).css('color', '#26c97a');
    });
    $('.navigation').mouseleave(function ()
    {
        $(this).css('background-color', '#222222');
        $(this).css('color', '#185952');
    });
});