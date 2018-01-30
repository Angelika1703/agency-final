$("#down").click(function(e){
//Необходимо прокрутить в конец страницы
    e.preventDefault();
    var el = $(this).attr('href');
    var height=$(el).offset().top;
    $("html, body").animate({"scrollTop": height}, 1000);
});