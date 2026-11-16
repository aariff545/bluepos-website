let bahasa = "ms";

document.getElementById("tukarBahasa").addEventListener("click", function () {
  bahasa = bahasa === "ms" ? "en" : "ms";

  document.querySelectorAll("[data-ms]").forEach(function (el) {
    el.textContent = el.dataset[bahasa];
  });

  this.textContent = bahasa === "ms" ? "EN" : "BM";
  document.documentElement.lang = bahasa;
});