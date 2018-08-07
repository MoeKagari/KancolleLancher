var fitToWindow = function() {
    document.body.style.overflow = "hidden";

    var game_frame = document.getElementById("game_frame");
    if (game_frame) {
        game_frame.style.zIndex = 99;
        game_frame.style.position = "fixed";
        game_frame.style.top = "-" +
            16 //gameFrame 上方的空白
            +
            "px";
        game_frame.style.left = "-" +
            (Math.round(game_frame.getBoundingClientRect().width) - 800) / 2 +
            "px";
    }
}

fitToWindow();
