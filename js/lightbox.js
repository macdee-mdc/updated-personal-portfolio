(function () {
  const certCards = Array.from(document.querySelectorAll(".cert-card"));
  const lightbox = document.getElementById("cert-lightbox");
  const lightboxImg = document.querySelector(".lightbox-image");
  const closeBtn = document.querySelector(".close-lightbox");

  if (!lightbox || !lightboxImg || !closeBtn) return;

  function lockScroll() {
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  }
  function unlockScroll() {
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  }

  function getCardImageSrc(card) {
    const dataImg = card.getAttribute("data-image");
    if (dataImg) return dataImg;
    const img = card.querySelector("img");
    if (img && img.src) return img.src;
    return null;
  }

  function openLightbox(src) {
    if (!src) return;
    lightboxImg.src = src;
    lightbox.classList.add("active");
    lockScroll();

    closeBtn.focus({ preventScroll: true });

    setTimeout(() => {
      lightbox.scrollTop = 0;
      lightboxImg.scrollIntoView({
        block: "center",
        inline: "center",
        behavior: "instant",
      });
    }, 50);
  }

  function closeLightbox() {
    lightbox.classList.remove("active");
    lightboxImg.src = "";
    unlockScroll();
  }

  certCards.forEach((card) => {
    card.addEventListener("click", (e) => {
      if (e.target.closest("a")) e.preventDefault();

      const src = getCardImageSrc(card);
      if (!src) return;

      openLightbox(src);
    });
  });

  closeBtn.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("active"))
      closeLightbox();
  });

  window.addEventListener("orientationchange", () => {
    if (lightbox.classList.contains("active")) {
      setTimeout(() => {
        lightboxImg.style.maxHeight = "";
        lightboxImg.style.maxHeight = `calc(100svh - 110px)`;
      }, 300);
    }
  });
})();
