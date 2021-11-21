
var more = document.getElementById("more");
more.style.display = "none";

function myFunction() {
var pic = document.getElementById("pic");

pic.style.display = "none";
more.style.display = "flex";
more.style.marginBottom = "2%";
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myScrollFunction()};

// Get the header
var header = document.getElementById("head");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myScrollFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
} 