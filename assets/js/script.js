//mover la pagina con menu
$(document).ready(function () {
  $(".menu li a").click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500
    );
  });
  return false;
});

//cambiar idioma de la pagina
function cambiarIdioma() {
  var idioma = document.getElementById("idioma").value;
  console.log(idioma);
  if (idioma == "en") {
    window.location.href = "index.html";
  } else if (idioma == "es") {
    window.location.href = "index-es.html";
  }
}
