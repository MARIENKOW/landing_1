const footerLeft = document.querySelector('.footer__inner');
if (footerLeft) {
   const footerBurger = document.querySelector('.footer__burger');
   footerLeft.addEventListener("click", function(e) {
      footerLeft.classList.toggle('_active');
   });

}
const blogsLinks = document.querySelector('.blogs__inner');
if (footerLeft) {
   const blogsBurger = document.querySelector('.blogs__burger');
   blogsLinks.addEventListener("click", function(e) {
      blogsLinks.classList.toggle('_active');
   });

}
const logoLinks = document.querySelector('.logo__inner');
if (footerLeft) {
   const logoBurger = document.querySelector('.logo__burger');
   logoLinks.addEventListener("click", function(e) {
      logoLinks.classList.toggle('_active');
   });

}
