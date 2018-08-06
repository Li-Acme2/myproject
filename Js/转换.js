
$(function(){

    $(".shipin").load("../page/推荐.html")
    // $("#dynamic").load("../page/dynamic/chat-records.html")
    //切换
    $(".d").click(function() {

        $(".shipin").load($(this).data("page"))

    })
    // $(".b").click(function() {
    //
    //     $(".menu2").load($(this).data("page"))
    //
    // })
    $(".b").click(function() {

        $(".shipin").load($(this).data("page"))
    })

})

// $(function(){
//     $("#bottom3").click(function() {
//
//         $(".menu2").load($(this).data("page"))
//     })
//
// })