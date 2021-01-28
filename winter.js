jQuery(document).ready(function(){
    jQuery(document).snowfall({
    // 雪の量 (数値)
    flakeCount : 50,
    // 色 (RGB) (e.g., sakura: #eac2d0)
    flakeColor : "#ffffff",
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
     image : "image/snow.png"
    })
});
