var controller = new ScrollMagic.Controller();
var AboutPageScene = new ScrollMagic.Scene({
  triggerElement: '3about-page'
})
console.log(AboutPageScene)
var rule = CSSRulePlugin.getRule('span::after')
gsap.to(rule, { cssRule: { scaleY: 0 }, duration: 0.8 })
gsap.from('#landing-h1', { duration: 1, opacity: 0, y: -100 })
gsap.from('#landing-p', { duration: 1, opacity: 0, y: 100, delay: 0.5 })
var tl = gsap.timeline({ defaults: { duraition: 0.8, opacity: 0 } });
tl.from('.section', { x: -50, ease: 'power1' })
  .from('#whoami', { y: -50, y: 20, ease: 'power2' })
  .from('.p-about', { y: 100, ease: 'power1', stagger: 0.1 })
  .from('.imgOval', { duraition: 1.3, y: -150, ease: 'power1' })
  .to('.about-para', { duration: 0.4, y: -40, opacity: 80 }, "-=0.2")