const footerLeft = document.querySelector('.footer__inner');
if (footerLeft) {
   const footerBurger = document.querySelector('.footer__burger');
   footerBurger.addEventListener("click", function(e) {
      footerLeft.classList.toggle('_active');
   });

}
const blogsLinks = document.querySelector('.blogs__inner');
if (blogsLinks) {
   const blogsBurger = document.querySelector('.blogs__burger');
   blogsBurger.addEventListener("click", function(e) {
      blogsLinks.classList.toggle('_active');
   });

}
const logoLinks = document.querySelector('.logo__inner');
if (logoLinks) {
   const logoBurger = document.querySelector('.logo__burger');
   logoBurger.addEventListener("click", function(e) {
      logoLinks.classList.toggle('_active');
   });
}
// let testt = document.querySelector('.header__text');
// let logoBurger = document.querySelector('.logo__burger');
// logoBurger.addEventListener('click',function(){
//    let all = getComputedStyle(testt);
//    let per = "matrix(2, 0, 0, 2, 0, 0)"
//    if(all.transform == per){
//       testt.style.transform = "";
//       console.log(all.transform);
//    }else{
//    testt.style.transform = 'scale(2)';
//    console.log(all.transform);

// }
// })
let galeryPhotos = document.querySelectorAll('.galery__photo');
let about = document.querySelector('.about__link');
let galery = document.querySelector('.galery__intro');
let about1 = document.querySelectorAll('.about__link')[1];
let galery1 = document.querySelectorAll('.galery__intro')[1];
let about2 = document.querySelectorAll('.about__link')[2];
let galery2 = document.querySelectorAll('.galery__intro')[2];
let about3 = document.querySelectorAll('.about__link')[3];
let galery3 = document.querySelectorAll('.galery__intro')[3];
console.log(about1);
// console.log(galery1);
function galery12(in1,in2){
   for(let index = 0;index < galeryPhotos.length;index++){
      let galeryPhoto = galeryPhotos[index];
      if(index < in1 && index > in2){
      galeryPhoto.classList.add('_go');
      }else{
      galeryPhoto.classList.remove('_go');

      }
   }
}
about.addEventListener('click',function(){
   about1.classList.remove('line');
   about2.classList.remove('line');
   about3.classList.remove('line');
   about.classList.add('line');
   
   galery1.classList.add('none');
   galery2.classList.add('none');
   galery3.classList.add('none');
   galery.classList.remove('none');
   
   setTimeout(galery12,0,8,-1);
});
about1.addEventListener('click',function(){
   about.classList.remove('line');
   about2.classList.remove('line');
   about3.classList.remove('line');
   about1.classList.add('line');

   galery.classList.add('none');
   galery2.classList.add('none');
   galery3.classList.add('none');
   galery1.classList.remove('none');
   setTimeout(galery12,0,16,7);

});
about2.addEventListener('click',function(){
   about1.classList.remove('line');
   about.classList.remove('line');
   about3.classList.remove('line');
   about2.classList.add('line');

   galery.classList.add('none');
   galery1.classList.add('none');
   galery3.classList.add('none');
   galery2.classList.remove('none');
   setTimeout(galery12,0,24,15);

});
about3.addEventListener('click',function(){
   about1.classList.remove('line');
   about2.classList.remove('line');
   about.classList.remove('line');
   about3.classList.add('line');
   galery.classList.add('none');
   galery2.classList.add('none');
   galery1.classList.add('none');
   galery3.classList.remove('none');
   setTimeout(galery12,0,36,23);

});
let link = document.querySelector('.blogs__link');
let body = document.querySelector('.blogs__body');
let link1 = document.querySelectorAll('.blogs__link')[1];
let body1 = document.querySelectorAll('.blogs__body')[1];
let link2 = document.querySelectorAll('.blogs__link')[2];
let body2 = document.querySelectorAll('.blogs__body')[2];
let link3 = document.querySelectorAll('.blogs__link')[3];
let body3 = document.querySelectorAll('.blogs__body')[3];
let link4 = document.querySelectorAll('.blogs__link')[4];
let body4 = document.querySelectorAll('.blogs__body')[4];
let link5 = document.querySelectorAll('.blogs__link')[5];
let body5 = document.querySelectorAll('.blogs__body')[5];
let link6 = document.querySelectorAll('.blogs__link')[6];
let body6 = document.querySelectorAll('.blogs__body')[6];

link.addEventListener('click',function(){
   body1.classList.add('none');
   body2.classList.add('none');
   body3.classList.add('none');
   body4.classList.add('none');
   body5.classList.add('none');
   body6.classList.add('none');
   body.classList.remove('none');
   blogsLinks.classList.toggle('_active');

});
link1.addEventListener('click',function(){
   body.classList.add('none');
   body2.classList.add('none');
   body3.classList.add('none');
   body4.classList.add('none');
   body5.classList.add('none');
   body6.classList.add('none');
   body1.classList.remove('none');
   blogsLinks.classList.toggle('_active');
});
link2.addEventListener('click',function(){
   body.classList.add('none');
   body1.classList.add('none');
   body3.classList.add('none');
   body4.classList.add('none');
   body5.classList.add('none');
   body6.classList.add('none');
   body2.classList.remove('none');
   blogsLinks.classList.toggle('_active');
});
link3.addEventListener('click',function(){
   body.classList.add('none');
   body2.classList.add('none');
   body1.classList.add('none');
   body4.classList.add('none');
   body5.classList.add('none');
   body6.classList.add('none');
   body3.classList.remove('none');
   blogsLinks.classList.toggle('_active');
});
link4.addEventListener('click',function(){
   body.classList.add('none');
   body2.classList.add('none');
   body3.classList.add('none');
   body1.classList.add('none');
   body5.classList.add('none');
   body6.classList.add('none');
   body4.classList.remove('none');
   blogsLinks.classList.toggle('_active');
});
link5.addEventListener('click',function(){
   body.classList.add('none');
   body2.classList.add('none');
   body3.classList.add('none');
   body4.classList.add('none');
   body1.classList.add('none');
   body6.classList.add('none');
   body5.classList.remove('none');
   blogsLinks.classList.toggle('_active');
});
link6.addEventListener('click',function(){
   body.classList.add('none');
   body2.classList.add('none');
   body3.classList.add('none');
   body4.classList.add('none');
   body5.classList.add('none');
   body1.classList.add('none');
   body6.classList.remove('none');
   blogsLinks.classList.toggle('_active');
});
let footer = document.querySelector('.footer__link');
let footer1 = document.querySelectorAll('.footer__link')[1];
let footer2 = document.querySelectorAll('.footer__link')[2];
let footer3 = document.querySelectorAll('.footer__link')[3];
let footer4 = document.querySelectorAll('.footer__link')[4];
let footer5 = document.querySelectorAll('.footer__link')[5];
let footer6 = document.querySelectorAll('.footer__link')[6];
let footer7 = document.querySelectorAll('.footer__link')[7];
let footer8 = document.querySelectorAll('.footer__link')[8];

footer.addEventListener('click',function(){
   let header = document.querySelector('.header');
   footerLeft.classList.toggle('_active');

   header.scrollIntoView({
      block:'start',
      inline:'nearest',
      behavior:'smooth'
   });
})
footer1.addEventListener('click',function(){
   let header = document.querySelector('.about');
   footerLeft.classList.toggle('_active');

   header.scrollIntoView({
      block:'start',
      inline:'nearest',
      behavior:'smooth'
   });
})
footer2.addEventListener('click',function(){
   let header = document.querySelector('.about__bottom');
   footerLeft.classList.toggle('_active');

   header.scrollIntoView({
      block:'start',
      inline:'nearest',
      behavior:'smooth'
   });
})
footer3.addEventListener('click',function(){
   let header = document.querySelector('.services');
   footerLeft.classList.toggle('_active');

   header.scrollIntoView({
      block:'center',
      inline:'nearest',
      behavior:'smooth'
   });
})
footer4.addEventListener('click',function(){
   let header = document.querySelector('.team');
   footerLeft.classList.toggle('_active');

   header.scrollIntoView({
      block:'start',
      inline:'nearest',
      behavior:'smooth'
   });
})
footer5.addEventListener('click',function(){
   let header = document.querySelector('.testimonials');
   footerLeft.classList.toggle('_active');

   header.scrollIntoView({
      block:'center',
      inline:'nearest',
      behavior:'smooth'
   });
})
footer6.addEventListener('click',function(){
   let header = document.querySelector('.blogs');
   footerLeft.classList.toggle('_active');

   header.scrollIntoView({
      block:'start',
      inline:'nearest',
      behavior:'smooth'
   });
})
footer7.addEventListener('click',function(){
   let header = document.querySelector('.blogs');
   footerLeft.classList.toggle('_active');

   header.scrollIntoView({
      block:'start',
      inline:'nearest',
      behavior:'smooth'
   });
})
footer8.addEventListener('click',function(){
   let header = document.querySelector('.contact');
   footerLeft.classList.toggle('_active');
   header.scrollIntoView({
      block:'start',
      inline:'nearest',
      behavior:'smooth'
   });
})
let logo = document.querySelector('.logo__link');
let logo1 = document.querySelectorAll('.logo__link')[1];
let logo2 = document.querySelectorAll('.logo__link')[2];
let logo3 = document.querySelectorAll('.logo__link')[3];
logo.addEventListener('click',function(){
   let about = document.querySelector('.about');
   logoLinks.classList.toggle('_active');
   about.scrollIntoView({
      block:'start',
      inline:'nearest',
      behavior:'smooth'
   });
})
logo1.addEventListener('click',function(){
   let about = document.querySelector('.process');
   logoLinks.classList.toggle('_active');
   about.scrollIntoView({
      block:'start',
      inline:'nearest',
      behavior:'smooth'
   });
})
logo2.addEventListener('click',function(){
   let about = document.querySelector('.about__bottom');
   logoLinks.classList.toggle('_active');
   about.scrollIntoView({
      block:'start',
      inline:'nearest',
      behavior:'smooth'
   });
})
logo3.addEventListener('click',function(){
   let about = document.querySelector('.blogs');
   logoLinks.classList.toggle('_active');
   about.scrollIntoView({
      block:'start',
      inline:'nearest',
      behavior:'smooth'
   });
})
let processElements = document.querySelectorAll('.process__element');
if (processElements.length > 0){
   for(index of processElements){
      let processElement = index;
      processElement.classList.add('_animate');
   }
}
if (galeryPhotos.length > 0){
   for (let index of galeryPhotos){
      let galeryPhoto = index;
      if(!galeryPhoto.classList.contains('_animate'))
      galeryPhoto.classList.add('_animate');

   }
}
let animateItems = document.querySelectorAll('._animate');
if(animateItems.length > 0){
   function animateF(){
      for(let index of animateItems){
         const animateItem = index;
         const animateItemHeight = animateItem.offsetHeight;
         let pos = animateItem.getBoundingClientRect().top;
         const animateItemPosition = pos + window.pageYOffset;
         let animateDel = 8;
         let animateDel2 = 8;

         if(window.innerHeight > animateItemHeight && window.scrollY + window.innerHeight > animateItemPosition + animateItemHeight/animateDel && window.scrollY < animateItemPosition + animateItemHeight - animateItemHeight/animateDel){
            animateItem.classList.add('_go');
         }else if(window.innerHeight <= animateItemHeight && window.scrollY + window.innerHeight > animateItemPosition + window.innerHeight / animateDel2 && window.scrollY < animateItemPosition + animateItemHeight - window.innerHeight/animateDel2){
            animateItem.classList.add('_go');
         }else if(!animateItem.classList.contains('_animate--stop') ){
            animateItem.classList.remove('_go')
         }
      }
   }
   animateF();
}
window.addEventListener('scroll',animateF);
let animatet = document.querySelectorAll('._animate');
for (index of animatet){
   let animate = index;
   animate.classList.add('_animate--stop');
}