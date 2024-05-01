// ---------- ハンバーガーメニュー ----------
var hamburger = $('.header__nav');
// OPEN/CLOSEボタンをクリックしたら
$('.header__hamburger-button').on('click', function () {
    // .hamburgerの表示・非表示を繰り返す
    hamburger.toggleClass('header__nav--active');
});
// リンクをクリックしたら
$(window).on('click', function (e) {
    // クリックした場所がリンクであれば
    if ($(e.target).closest('a').length) {
        // ハンバーガーメニューを閉じる
        hamburger.removeClass('header__nav--active');
    }
});
// 画面幅のサイズが変わったら
$(window).on('resize', function () {
    // ハンバーガーメニューを閉じる
    hamburger.removeClass('header__nav--active');
});
