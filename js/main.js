$('#nav li a').click(function(){
    $('#nav li a').css("textDecoration", "none"); 
    $(this).css('textDecoration', 'underline');
    return false;
});