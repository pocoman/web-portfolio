// 금바다 포트폴리오 — 내비게이션 상호작용

(function () {
  "use strict";

  var nav = document.getElementById("nav");
  var toggle = document.getElementById("navToggle");
  var links = Array.prototype.slice.call(
    document.querySelectorAll(".nav__links a")
  );

  // 연도 자동 표기
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // 스크롤 시 내비 경계선
  var onScroll = function () {
    nav.classList.toggle("is-scrolled", window.scrollY > 12);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // 모바일 메뉴 토글
  if (toggle) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "메뉴 닫기" : "메뉴 열기");
    });
  }

  // 링크 클릭 시 모바일 메뉴 닫기
  links.forEach(function (a) {
    a.addEventListener("click", function () {
      nav.classList.remove("is-open");
      if (toggle) toggle.setAttribute("aria-expanded", "false");
    });
  });

  // 스크롤 스파이 — 현재 섹션 하이라이트
  var sections = links
    .map(function (a) {
      var id = a.getAttribute("href");
      return id && id.charAt(0) === "#" && id.length > 1
        ? document.querySelector(id)
        : null;
    })
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    var byId = {};
    links.forEach(function (a) {
      byId[a.getAttribute("href")] = a;
    });

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var link = byId["#" + entry.target.id];
          if (!link) return;
          links.forEach(function (l) {
            l.classList.remove("is-active");
          });
          link.classList.add("is-active");
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach(function (s) {
      io.observe(s);
    });
  }
})();
