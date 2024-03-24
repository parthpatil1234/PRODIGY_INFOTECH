window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.backgroundColor = "#222"; // Change background color when scrolled
  } else {
    document.getElementById("navbar").style.backgroundColor = "#333"; // Default background color
  }
}
