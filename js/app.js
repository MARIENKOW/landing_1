"use string"
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
//! ///----------------\\\ !\\
let about = document.querySelectorAll('.about__link');
let galery = document.querySelectorAll('.galery__intro');
if (about.length > 0){
   for (let i = 0;i < about.length;i++){
      let aboutItem = about[i];
      aboutItem.addEventListener('click',function(){
         for(let j = 0; j < galery.length;j++){
            let galeryItem = galery[j];
            let aboutItem = about[j];
            if (i ===j){
               galeryItem.classList.remove('none');
               aboutItem.classList.add('line');
            }else{
               galeryItem.classList.add('none');
               aboutItem.classList.remove('line');
            }
         }
         animateF();
      })
   }
}
//! ///----------------\\\ !\\
let galeryPhotos = document.querySelectorAll('.galery__photo');
//! ///----------------\\\ !\\
let links = document.querySelectorAll('.blogs__link');
let bodys = document.querySelectorAll('.blogs__body');
if (links.length > 0){
   for (let i = 0;i < links.length;i++){
      let link = links[i];
      link.addEventListener('click',function(){
         for(let j = 0; j < bodys.length;j++){
            let body = bodys[j];
            if (i===j){
               body.classList.remove('none');
            }else{
               body.classList.add('none');
            }
         }
         animateF();
         blogsLinks.classList.toggle('_active');
      })
   }
}
//! ///----------------\\\ !\\
let footerLinks = document.querySelectorAll('.footer__link');
if(footerLinks.length >0){
   for(let i = 0;i<footerLinks.length;i++){
      let footerLink = footerLinks[i];
      let header; 
      footerLink.addEventListener('click',function(){
         if(i===0){
            header = document.querySelector('.header'); 
         }else if(i===1){
            header = document.querySelector('.about'); 
         }else if(i===2){
            header = document.querySelector('.galery'); 
         }else if(i===3){
            header = document.querySelector('.services'); 
         }else if(i===4){
            header = document.querySelector('.team'); 
         }else if(i===5){
            header = document.querySelector('.testimonials'); 
         }else if(i===6){
            header = document.querySelector('.blogs'); 
         }else if(i===7){
            header = document.querySelector('.blogs'); 
         }else if(i===8){
            header = document.querySelector('.contact'); 
         }
         footerLeft.classList.toggle('_active');
         header.scrollIntoView({
         block:'start',
         inline:'nearest',
         behavior:'smooth'
      });
      })
   }
}
//! ///----------------\\\ !\\
let logos = document.querySelectorAll('.logo__link');
if(logos.length >0){
   for(let i = 0;i<logos.length;i++){
      let logo = logos[i];
      let header; 
      logo.addEventListener('click',function(){
         if(i===0){
            header = document.querySelector('.about'); 
         }else if(i===1){
            header = document.querySelector('.process'); 
         }else if(i===2){
            header = document.querySelector('.galery'); 
         }else if(i===3){
            header = document.querySelector('.blogs'); 
         }
         logoLinks.classList.toggle('_active');
         header.scrollIntoView({
         block:'start',
         inline:'nearest',
         behavior:'smooth'
      });
      })
   }
}
//! ///----------------\\\ !\\

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
         let animateParent = animateItem.parentNode;
         const animateItemHeight = animateItem.offsetHeight;
         let pos = animateItem.getBoundingClientRect().top;
         const animateItemPosition = pos + window.pageYOffset;
         let animateDel = 8;
         let animateDel2 = 8;
         if(window.innerHeight > animateItemHeight && window.scrollY + window.innerHeight > animateItemPosition + animateItemHeight/animateDel && window.scrollY < animateItemPosition + animateItemHeight - animateItemHeight/animateDel && !animateParent.classList.contains('none')){
            animateItem.classList.add('_go');
         }else if(window.innerHeight <= animateItemHeight && window.scrollY + window.innerHeight > animateItemPosition + window.innerHeight / animateDel2 && window.scrollY < animateItemPosition + animateItemHeight - window.innerHeight/animateDel2 && !animateParent.classList.contains('none')){
            animateItem.classList.add('_go');
         }else if(!animateItem.classList.contains('_animate--stop') ){
            animateItem.classList.remove('_go')
         }else if(animateParent.classList.contains('none')){
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
//! ///--------------\\\ !\\

let footerLeftNav = document.querySelector('.footer__left');
let footerPE = document.querySelector('.footer__PE');
let next = document.querySelector('.footer__tap');
function leftLink(){
   if(footerLeftNav.scrollHeight > footerLeft.clientHeight){
      let leftHeight = footerLeftNav.scrollHeight + "px" ;
      footerPE.style.height = leftHeight;
      }else{
         let leftHeight = footerLeft.offsetHeight + "px" ;
         footerPE.style.height = leftHeight;
      }
}
leftLink();
window.addEventListener('resize',leftLink);
window.addEventListener('resize',scrollFooterLeftNav);

function scrollFooterLeftNav(){
   if (footerLeftNav.scrollTop<=0 && footerLeftNav.scrollHeight > footerLeft.clientHeight){
      next.classList.add('_on');
      }else if (footerLeftNav.scrollTop > 0 || footerLeftNav.scrollHeight <= footerLeft.clientHeight){
      next.classList.remove('_on');

      }
}
scrollFooterLeftNav();
footerLeftNav.addEventListener('scroll',scrollFooterLeftNav)
next.addEventListener('click',function(){
   let riz = footerLeftNav.scrollHeight - footerLeft.clientHeight;
   footerLeftNav.scroll({
      top:riz,
      left:0,
      behavior:'smooth'

   });
});

//! ///---SWIPER---\\\ !\\

/*! ///---SWIPER---\\\ !*/

let swiperContainer = document.querySelector('.swiper__container');
let swiperLine = document.querySelector('.swiper__line');
let swiperItems = document.querySelectorAll('.swiper__item');
let swiperLeft = document.querySelector('.swiper__left');
let swiperRight = document.querySelector('.swiper__right');
let body = document.querySelector('body');
let ww = (document.documentElement).offsetWidth;
let countItems;
let countScroll;
if(ww < 768){
   countItems = 1;
   countScroll = countItems;

}else{
   countItems = 3;
   countScroll = 2;

}
let tf = false;
let x1 =null;
let y1 =null;
let fScroll = null;
const swiperWidth = swiperContainer.offsetWidth;
let itemWidth = swiperWidth / countItems;
let breakScroll = itemWidth / 2;
itemsWidth();
active();
function itemsWidth(){
   if(swiperItems.length > 0){
      for(let i of swiperItems){
         let swiperItem = i;
         swiperItem.style.flexBasis = `${itemWidth}px`;
         }
      }
}
function scroll(){
   let nn= swiperLine.style.transform
   let da = +(nn.replace(/[^0-9,\-\.]/g,''));
   let daa = Math.trunc(da);
   return daa || 0;
}
function active(){
   if(scroll() <0){
      swiperLeft.classList.add('_active');
   }else{
      swiperLeft.classList.remove('_active');
   }
   if(scroll() - swiperContainer.offsetWidth <= -(swiperLine.scrollWidth)){
      swiperRight.classList.remove('_active');
   }else{
      swiperRight.classList.add('_active');
   }
}
function hTouchStart(event){
   let firstTouch = event.touches[0];
   x1 = firstTouch.clientX;
   y1 = firstTouch.clientY;
   fScroll = scroll();

}
function itemsBack(){
   if(swiperItems.length > 0){
      for(let i of swiperItems){
         let swiperItem = i;
         let window = document.documentElement;
         let windowWidth = window.clientWidth;
         let swiperItemLeft = swiperItem.getBoundingClientRect().left;
         let swiperItemRight = swiperItem.getBoundingClientRect().right;
         let point1 = (windowWidth / 2) + ((swiperContainer.offsetWidth/ 2)-itemWidth/2);
         let point2 = (windowWidth / 2) - ((swiperContainer.offsetWidth/ 2)-itemWidth/2);
         console.log(parseInt(swiperItemLeft),parseInt(swiperItemRight),point1)
         if(swiperItemRight-itemWidth* countScroll > point1){
            swiperItem.classList.add('_back--right');
         }else{
            swiperItem.classList.remove('_back--right');
         }
         if(swiperItemLeft- itemWidth * countScroll<point2){
            swiperItem.classList.add('_back--left');

         }else{
            swiperItem.classList.remove('_back--left');
         }
         }
      }
}
function itemsLeft(){
   if(swiperItems.length > 0){
      for(let i of swiperItems){
         let swiperItem = i;
         let window = document.documentElement;
         let windowWidth = window.clientWidth;
         let swiperItemLeft = swiperItem.getBoundingClientRect().left;
         let swiperItemRight = swiperItem.getBoundingClientRect().right;
         let point1 = (windowWidth / 2) + ((swiperContainer.offsetWidth/ 2)-itemWidth/4);
         let point2 = (windowWidth / 2) - ((swiperContainer.offsetWidth/ 2)-itemWidth/4);
         if(swiperItemRight+itemWidth* countScroll > point1){
            swiperItem.classList.add('_back--right');
         }else{
            swiperItem.classList.remove('_back--right');
         }
         if(swiperItemLeft+ itemWidth * countScroll<point2){
            swiperItem.classList.add('_back--left');

         }else{
            swiperItem.classList.remove('_back--left');
         }
      }
   }
}
function itemsScrollBack(){
   if(swiperItems.length > 0){
      for(let i of swiperItems){
         let swiperItem = i;
         let window = document.documentElement;
         let windowWidth = window.clientWidth;
         let swiperItemLeft = swiperItem.getBoundingClientRect().left;
         let swiperItemRight = swiperItem.getBoundingClientRect().right;
         let point1 = (windowWidth / 2) + ((swiperContainer.offsetWidth/ 2)-itemWidth);
         let point2 = (windowWidth / 2) - ((swiperContainer.offsetWidth/ 2)-itemWidth);
         if(swiperItemLeft <= point1 && swiperItemRight>= point1){
            swiperItem.classList.add('_back--right');
         }else{
            swiperItem.classList.remove('_back--right');
         }
         if(swiperItemLeft<point2 && swiperItemRight> point2){
            swiperItem.classList.add('_back--left');
         }else{
            swiperItem.classList.remove('_back--left');
         }
         }
      }
}
function itemsScrollLeft(){
   if(swiperItems.length > 0){
      for(let i of swiperItems){
         let swiperItem = i;
         let window = document.documentElement;
         let windowWidth = window.clientWidth;
         let swiperItemLeft = swiperItem.getBoundingClientRect().left;
         let swiperItemRight = swiperItem.getBoundingClientRect().right;
         let point1 = (windowWidth / 2) + ((swiperContainer.offsetWidth/ 2)-itemWidth/2);
         let point2 = (windowWidth / 2) - ((swiperContainer.offsetWidth/ 2)-itemWidth/2);
         if(fScroll<0){
            if(swiperItemRight+itemWidth* countScroll > point1){
               swiperItem.classList.add('_back--right');
            }else{
               swiperItem.classList.remove('_back--right');
            }
            if(swiperItemLeft+ itemWidth * countScroll<point2){
               swiperItem.classList.add('_back--left');
   
            }else{
               swiperItem.classList.remove('_back--left');
            }
         }
      }
   }
}
swiperRight.addEventListener('click',function(){
   itemsBack();

   let tap = scroll() - itemWidth * countScroll;
   if(swiperLine.scrollWidth + (scroll()-swiperContainer.clientWidth) >= itemWidth * countScroll){
   swiperLine.style.transform = ('translateX('+tap+'px)');
      }else{
         let tap = scroll() -(swiperLine.scrollWidth + (scroll()-swiperContainer.clientWidth))
      swiperLine.style.transform = ('translateX('+tap+'px)');
      }
   active();
})

swiperLeft.addEventListener('click',function(){
   let jnca = scroll() + itemWidth * countScroll;
   if(scroll() <=-itemWidth * countScroll){
   swiperLine.style.transform = ('translateX('+jnca+'px)');
      }else{
         swiperLine.style.transform = ('translateX(0px)');
      }
   active();
   itemsLeft();
})


   swiperContainer.addEventListener('touchstart',hTouchStart,false);
   swiperContainer.addEventListener('touchmove',hTouchMove,false);
   swiperContainer.addEventListener('touchend',hTouchEnd,false);
   function hTouchEnd(){
      body.style.overflow = '';
   }

   // swiperContainer.addEventListener('mousedown',mouseD,false);
   // swiperContainer.addEventListener('mousemove',mouseM,false);
   // function mouseD(event){
   //    let ddd = event;
   // }

function hTouchMove(event){
   let x2 = event.touches[0].clientX;
   let y2 = event.touches[0].clientY;
   let xDif = x2-x1;
   let yDif = y2-y1;
   if(Math.abs(xDif) > Math.abs(yDif)){
      if (xDif>0 && xDif<50 && !fScroll ==0 || xDif<0 && xDif> -50 && (swiperLine.scrollWidth + (fScroll-swiperContainer.clientWidth)) > 0){
         body.style.overflow = 'hidden';
         let tap = fScroll + xDif;
         swiperLine.style.transition = ('0s');
         swiperLine.style.transform = ('translateX('+tap+'px)');
         tf=true;
         swiperContainer.addEventListener('touchend',function hTouchEnd(){
            if (tf == true ){
               swiperLine.style.transition = '';
               swiperLine.style.transform = ('translateX('+fScroll+'px)');
            }
         },false);
      }
      else if (xDif<-50){
         itemsScrollBack();
         tf=false;
         if(swiperLine.scrollWidth + (fScroll-swiperContainer.clientWidth) >= itemWidth * countScroll){
            let tap = fScroll - itemWidth * countScroll;
            swiperLine.style.transition = '';
            swiperLine.style.transform = ('translateX('+tap+'px)');
         }else if(swiperLine.scrollWidth + (fScroll-swiperContainer.clientWidth) < itemWidth * countScroll && swiperLine.scrollWidth + (fScroll-swiperContainer.clientWidth) >0){
            let tap = fScroll -(swiperLine.scrollWidth + (fScroll-swiperContainer.clientWidth))
            swiperLine.style.transition = '';
            swiperLine.style.transform = ('translateX('+tap+'px)');
         }else if(swiperLine.scrollWidth + (fScroll-swiperContainer.clientWidth) == 0 ){
            swiperLine.style.transform = ('translateX('+fScroll+'px)');
         }
            active();
            x1,y1 = null
      }
      else if (xDif>50){
         itemsScrollLeft();
         tf=false;
         if(fScroll <=-itemWidth * countScroll){
            let tap = fScroll + itemWidth * countScroll;
            swiperLine.style.transition = '';
            swiperLine.style.transform = ('translateX('+tap+'px)');
         }else if(fScroll >-itemWidth * countScroll & !fScroll==0){
            swiperLine.style.transform = ('translateX(0px)');
            swiperLine.style.transition = '';
         }
         x1,y1 = null
         active();
      }
   }
}
// const A = () => {
// console.log('hello');
// }
// A();