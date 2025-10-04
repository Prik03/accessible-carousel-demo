// ---------- Common Announce Function ----------
function announce(message) {
  // Small delay to ensure screen readers detect the update
  setTimeout(() => {
    $(".liveAnnouncement").text(message);
  }, 50);

  setTimeout(() => {
    $(".liveAnnouncement").text("");
  }, 2000);
}


// =====================================================================
// ============== CAROUSEL WITH BUTTONS =================================
// =====================================================================

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

  const position = $(".withbtn .imageContainer .active").index() + 1;
  announce(`Slide ${position}`);
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

  const position = $(".withbtn .imageContainer .active").index() + 1;
  announce(`Slide ${position}`);
});


// ---------- Swipe / Drag for Carousel WITH Buttons ----------
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


// =====================================================================
// ============== CAROUSEL WITHOUT BUTTONS =============================
// =====================================================================

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


// =====================================================================
// ============== SHARED SWIPE HANDLER =================================
// =====================================================================
function handleSwipe(diff, carouselSelector) {
  if (diff < -50) {
    // swipe left → next
    goToNextSlide(carouselSelector);
  } else if (diff > 50) {
    // swipe right → prev
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

  const position = $(`${carouselSelector} .imageContainer .active`).index() + 1;
  announce(`Slide ${position}`);
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

  const position = $(`${carouselSelector} .imageContainer .active`).index() + 1;
  announce(`Slide ${position}`);
}
