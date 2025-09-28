// NEXT button click
$(".next").on("click", function () {
  const $current = $(".active");
  const $next = $current.next();

  $current.removeClass("active");

  if ($next.length) {
    $next.addClass("active");
  } else {
    $(".imageContainer div").first().addClass("active");
  }

  const position = $(".imageContainer .active").index() + 1;
  announce(`slide ${position}`);
});

// PREV button click
$(".prev").on("click", function () {
  const $current = $(".active");
  const $prev = $current.prev();

  $current.removeClass("active");

  if ($prev.length) {
    $prev.addClass("active");
  } else {
    $(".imageContainer div").last().addClass("active");
  }

  const position = $(".imageContainer .active").index() + 1;
  announce(`slide ${position}`);
});

let startX = 0;
let endX = 0;

$(".imageContainer").on("touchstart", function (e) {
  startX = e.originalEvent.touches[0].clientX;
});

$(".imageContainer").on("touchend", function (e) {
  endX = e.originalEvent.changedTouches[0].clientX;

  const diffX = startX - endX;

  if (diffX > 50) {
    $(".next").click();
  }

  if (diffX < -50) {
    $(".prev").click();
  }
});

function announce(message) {
  setTimeout(() => {
    $(".liveAnnouncement").text(message);
  }, 50);
  setTimeout(() => {
    $(".liveAnnouncement").text("");
  }, 2000);
}
