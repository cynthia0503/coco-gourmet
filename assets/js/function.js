function updateTime() {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  const formatted = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;

  document.getElementById("datetime").textContent = formatted;
}

// 初回実行
updateTime();

// 1秒ごと更新
setInterval(updateTime, 1000);




// テキストアニメーション（遅延付き）
$(function () {
  setTimeout(() => {
    $('.txt').addClass('animate');
  }, 100);
});

// スクロール時のアニメーション
$(function () {
  $(window).on('scroll', function () {
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();

    $('.fade-up').each(function () {
      const position = $(this).offset().top;
      if (scroll > position - windowHeight + 280) {
        if ($(this).hasClass('fade-up')) {
          $(this).addClass('fadein-up-active');
        }
      }
    });
  });
});



// お客様の声セクションのスライダー
const swiper1 = new Swiper('.voices .swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// よくある質問セクションのスライダー
const swiper2 = new Swiper('.faq .swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


