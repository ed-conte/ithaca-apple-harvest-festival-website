
function hide_nav() {
  if (window.innerWidth <= 900) {
    $("#navbar").addClass("hidden");
  }
  else {
    $("#navbar").removeClass("hidden");
    $("#navbar").addClass("navmenu");
  }
}

$("#burgerbutton").click(function () {
  if ($("#navbar").hasClass("hidden")) {
      $("#navbar").removeClass("hidden");
      $("#navbar").addClass("navmenu");
    }
  else {
      $("#navbar").addClass("hidden");
    }
})

window.addEventListener("resize", hide_nav);
window.addEventListener("load", hide_nav);
