const footerLeft = document.querySelector('.footer__inner');
if (footerLeft) {
   const footerBurger = document.querySelector('.footer__burger');
   footerBurger.addEventListener("click", function(e) {
      footerLeft.classList.toggle('_active');
   });

}
const blogsLinks = document.querySelector('.blogs__inner');
if (footerLeft) {
   const blogsBurger = document.querySelector('.blogs__burger');
   blogsBurger.addEventListener("click", function(e) {
      blogsLinks.classList.toggle('_active');
   });

}
const logoLinks = document.querySelector('.logo__inner');
if (footerLeft) {
   const logoBurger = document.querySelector('.logo__burger');
   logoBurger.addEventListener("click", function(e) {
      logoLinks.classList.toggle('_active');
   });

}
