let bahasa = "en";

function tukarSemua() {
  document.querySelectorAll("[data-ms]").forEach(function (el) {
    el.textContent = el.dataset[bahasa];
  });

  document.querySelectorAll("[data-src-ms]").forEach(function (img) {
    img.src = bahasa === "ms" ? img.dataset.srcMs : img.dataset.srcEn;
  });

  document.querySelectorAll(".pilih-bahasa button").forEach(function (btn) {
    btn.classList.toggle("aktif", btn.dataset.lang === bahasa);
  });

  document.documentElement.lang = bahasa;
}

document.querySelectorAll(".pilih-bahasa button").forEach(function (btn) {
  btn.addEventListener("click", function () {
    bahasa = btn.dataset.lang;
    tukarSemua();
  });
});

tukarSemua();
