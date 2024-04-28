// ---------- ハンバーガーメニュー ----------
var hamburger = $('.header__hamburger-menu');
// OPEN/CLOSEボタンをクリックしたら
$('.header__hamburger-button').on('click', function () {
    // .hamburgerの表示・非表示を繰り返す
    hamburger.toggleClass('header__hamburger-menu--active');
});
// 画面幅のサイズが変わったら
$(window).on('resize', function () {
    // ハンバーガーメニューを閉じる
    hamburger.removeClass('header__hamburger-menu--active');
});
