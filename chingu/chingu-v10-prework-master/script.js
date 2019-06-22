// Show Menu with click on hamburger

function showHam() {  
  var x = document.querySelector('#mobile-main-menu');
  x.classList.toggle('show-main-menu');
}

// Show submenu with click on plus icon
function showSub1(subMenuId, showClass) {
  var sMId = "#" + subMenuId;
  var y = document.querySelector(sMId);
  y.classList.toggle(showClass);
}

// Change Icon and colors with click on '+'
function changeIcon(icon, listBg) {
  var iconId = "#" + icon;
  var a = document.querySelector(iconId);
  a.classList.toggle('bg-cross');
  a.classList.toggle('bg-plus');

  var ListBgId = "#" + listBg;
  var b = document.querySelector(ListBgId);
  b.classList.toggle('blue-li-active');
  b.classList.toggle('blue-li-inactive');
}

// Show Share box
function showShareIcons() {  
  var a = document.querySelector('#header-social-nav');
  a.classList.toggle('showShareItems');
  document.getElementById('share-link').style.background = "black";
  document.getElementById('share-link').style.color = "white";
}

// Style Share box
var color_tracker = '#f1f1f1';
function styleBlackSocialBox() {
  if (color_tracker == '#f1f1f1') {
    document.getElementById('share-link').style.background = "black";
    color_tracker = 'black';
    document.getElementById('share-link').style.color = "white";
    } else {
      document.getElementById('share-link').style.background = "#f1f1f1";
      color_tracker = '#f1f1f1';
      document.getElementById('share-link').style.color = "#0c4ab5";
    }
}

// Sub Menus Desktop Version
function showSub(subMenuId) {
  document.getElementById(subMenuId).style.display = "block";
}

function hideSub(subMenuId) {
  document.getElementById(subMenuId).style.display = "none";
}