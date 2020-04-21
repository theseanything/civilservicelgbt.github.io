function toggleMenu() {
  var menuItems = document.getElementById("menu-items");
  var menuToggle = document.getElementById("menu-toggle");
  menuItems.classList.toggle("closed");
  menuToggle.classList.toggle("open");
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function createCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

function eraseCookie(name) {
  createCookie(name, "", -1);
}

function gtag() {
  dataLayer.push(arguments);
}

function initGoogleAnalytics(trackingId){
  window.dataLayer = window.dataLayer || [];
  gtag("js", new Date());

  gtag("config", trackingId);
}
