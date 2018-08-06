$(function() {
    function showImg(index) {
        var imgWidth = $(".container_img").width();
        $(".container_img ul li").stop(true, false).animate({
            left: -imgWidth * index
        }, 100);
    };
    var i = 0,timer = null;
    silder();
    $(".container_img li img").mouseover(function() {
        clearInterval(timer);
    });
    $(".container_num li").mouseover(function() {
        clearInterval(timer);
        var index = $(".container_num li").index(this);
        $(this).addClass("current").siblings("li").removeClass("current");
        showImg(index);
        i = index;
    });
    $(".container_num li,.container_img li img").mouseout(function() {
        silder();
    });
    function silder(){
        timer = setInterval(function(){
            i++;
            if (i > 3) {
                i = 0;
            };
            showImg(i);
            $(".container_num li").eq(i).addClass("current").siblings("li").removeClass("current");
        }, 1500);
    };
});
