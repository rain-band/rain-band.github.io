var flake_count = 50;
var flake_color = "#ffffff";
var minSize = 2.5;
var maxSize = 10;
var minSpeed = 1;
var maxSpeed = 5;
var image = "image/snow.png";

var dt = new Date();
var month = dt.getMonth();
var today = dt.getDate();

if (10 > month >= 4) {
    flake_count = 300;
    minSize = 0.1;
    maxSize = 2.5;
    minSpeed = 12;
    maxSpeed = 15;
    image = "image/rain.png"
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
    minSize : minSize,
    // 最大サイズ(数値)
    maxSize : maxSize,
    // 最低速度(数値)
    minSpeed : minSpeed,
    // 最高速度(数値)
    maxSpeed : maxSpeed,
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
