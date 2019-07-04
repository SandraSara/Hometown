$(function () {
    $(window).on("load resize", function () {
        $(".fill-screen").css("height", window.innerHeight);
    });

    $("#video-wallpaper").wallpaper({
        source: {
            poster: "assets/img/trg-slobode.jpg",
            video: "//www.youtube.com/embed/qzEbX09iaIU"
        }
    });
});