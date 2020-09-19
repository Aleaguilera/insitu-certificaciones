$("#open").click(function () {
  $("#toggle").toggleClass('active-op');
  $(".link-grup .link").addClass('active');
  $(".link").toggleClass('active-link');
});

$(".link").click(function () {
  $("#toggle").toggleClass('active-op');
  $(".hamburger").removeClass('is-active');
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});


var forEach = function (t, o, r) { if ("[object Object]" === Object.prototype.toString.call(t)) for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t); else for (var e = 0, l = t.length; l > e; e++)o.call(r, t[e], e, t) };

var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
  forEach(hamburgers, function (hamburger) {
    hamburger.addEventListener("click", function () {
      this.classList.toggle("is-active");
    }, false);
  });
}

window.onscroll = function () { myFunction() };
var header = document.getElementById("toggle");
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

const content = $('#content-form');
const check = $('#check');
const btn = $('.btn-submmit');

$("#formulario-contacto").on("submit", function (ev) {
  ev.preventDefault();
  ev.stopPropagation();
  let form = $(this);
  let url = form.attr('action');

  btn.click(function () {
    check.fadeOut();
    content.fadeIn(3000);
  });

  $.ajax({
    type: "POST",
    url: url,
    data: form.serialize(),
    success: function (data) {
      content.hide();
      check.fadeIn(1000);
    },
    error: function (data) {
      alert("Error al enviar el mensaje");
    }
  });
})




