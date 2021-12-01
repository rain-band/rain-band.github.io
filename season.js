var flake_count = 50;
var flake_color = "#ffffff";
var image = "image/snow.png";

var dt = new Date();
var month = dt.getMonth();
var today = dt.getDate();

if (month >= 10) {
    ;
} else if (month >= 2) {
    flake_count = 42;
    flake_color = "#eac2d0";
    image = "image/sakura.png";
};


jQuery(document).ready(function(){
    jQuery(document).snowfall({
    // 雪の量 (数値)
    flakeCount : flake_count,
    // 色 (RGB) (e.g., sakura: #eac2d0)
    flakeColor : flake_color,
    // z-indexの値
    //flakeIndex : "888",
    // 最小サイズ (数値)
    minSize : 2.5,
    // 最大サイズ(数値)
    maxSize : 10,
    // 最低速度(数値)
    minSpeed : 1,
    // 最高速度(数値)
    maxSpeed : 5,
    // 雪の形を丸にする(boolean)
    // round : true,
    // 影をつける(boolean)
    // shadow : false,
    // 要素に積もらせる場合
    // collection : "div.bottom",
    // オリジナル画像を使用する場合
    image : image
    })
});
