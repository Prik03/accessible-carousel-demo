function announce(message) {
  setTimeout(() => {
    $(".liveAnnouncement").text(message);
  }, 50);

  setTimeout(() => {
    $(".liveAnnouncement").text("");
  }, 2000);
}

// Next Button
$(".next").on("click", function () {
  const $current = $(".withbtn .active");
  const $next = $current.next();

  $current.removeClass("active");

  if ($next.length) {
    $next.addClass("active");
  } else {
    $(".withbtn .imageContainer img").first().addClass("active");
  }

  const alt=$(".withbtn .imageContainer .active").attr("alt");
  announce(`Slide Changed To ${alt}`);
});

// Prev Button
$(".prev").on("click", function () {
  const $current = $(".withbtn .active");
  const $prev = $current.prev();

  $current.removeClass("active");

  if ($prev.length) {
    $prev.addClass("active");
  } else {
    $(".withbtn .imageContainer img").last().addClass("active");
  }

   const alt=$(".withbtn .imageContainer .active").attr("alt");
  announce(`Slide Changed To ${alt}`);
});

let startX = 0;
let endX = 0;
let isDragging = false;

$(".withbtn .imageContainer").on("touchstart", function (e) {
  startX = e.originalEvent.touches[0].clientX;
});

$(".withbtn .imageContainer").on("touchend", function (e) {
  endX = e.originalEvent.changedTouches[0].clientX;
  handleSwipe(endX - startX, ".withbtn");
});

$(".withbtn .imageContainer").on("mousedown", function (e) {
  isDragging = true;
  startX = e.clientX;
});

$(document).on("mouseup", function (e) {
  if (!isDragging) return;
  isDragging = false;
  endX = e.clientX;
  handleSwipe(endX - startX, ".withbtn");
});

$(".withbtn .imageContainer img").on("dragstart", function (e) {
  e.preventDefault();
});


let startX2 = 0;
let endX2 = 0;
let isDragging2 = false;

$(".withoutbtn .imageContainer").on("touchstart", function (e) {
  startX2 = e.originalEvent.touches[0].clientX;
});

$(".withoutbtn .imageContainer").on("touchend", function (e) {
  endX2 = e.originalEvent.changedTouches[0].clientX;
  handleSwipe(endX2 - startX2, ".withoutbtn");
});

$(".withoutbtn .imageContainer").on("mousedown", function (e) {
  isDragging2 = true;
  startX2 = e.clientX;
});

$(document).on("mouseup", function (e) {
  if (!isDragging2) return;
  isDragging2 = false;
  endX2 = e.clientX;
  handleSwipe(endX2 - startX2, ".withoutbtn");
});

$(".withoutbtn .imageContainer img").on("dragstart", function (e) {
  e.preventDefault();
});


function handleSwipe(diff, carouselSelector) {
  if (diff < -50) {
    goToNextSlide(carouselSelector);
  } else if (diff > 50) {

    goToPrevSlide(carouselSelector);
  }
}

function goToNextSlide(carouselSelector) {
  const $current = $(`${carouselSelector} .active`);
  const $next = $current.next();

  $current.removeClass("active");

  if ($next.length) {
    $next.addClass("active");
  } else {
    $(`${carouselSelector} .imageContainer img`).first().addClass("active");
  }
   const alt=$(".withbtn .imageContainer .active").attr("alt");
  announce(`Slide Changed To ${alt}`);
}

function goToPrevSlide(carouselSelector) {
  const $current = $(`${carouselSelector} .active`);
  const $prev = $current.prev();

  $current.removeClass("active");

  if ($prev.length) {
    $prev.addClass("active");
  } else {
    $(`${carouselSelector} .imageContainer img`).last().addClass("active");
  }

   const alt=$(".withbtn .imageContainer .active").attr("alt");
  announce(`Slide Changed To ${alt}`);
}
