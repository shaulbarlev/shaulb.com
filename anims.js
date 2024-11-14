/*let name = new SplitType('#name');
gsap.fromTo(name.chars, {
fontWeight: 100,
opacity: .4
},
{
duration: 1.5,
opacity: 1,
fontWeight: 800,
//fontSize: '1.1em',
stagger: 0.25
});*/


import gsap from 'gsap';
import SplitType from 'split-type';
export function anims(){
    let name = new SplitType('#name');
    //crazy blink
    gsap.to(name.chars, {
      duration: 0.05,
      fontWeight: 800,
      opacity: 1,
      //ease: "power1.inOut",
      stagger: {
        each: 0.07,
        from: "random",
        repeat: 22,
        yoyo: true
      }
    });
    //smooth waves
    gsap.to(name.chars, {
      delay: 1.9,
      duration: 2.5,
      fontWeight: 100,
      color: '#c97979',
      ease: "rough",
      stagger: {
        from: "random",
        each: .6,
        repeat: 30,
        yoyo: true
      }
    });
  
    let title = new SplitType('#title');
    gsap.from(title.chars, {
      delay: .6,
      duration: 0.05,
      opacity: 0,
      //ease: "power1.inOut",
      stagger: {
        each: 0.07,
        from: "random",
        repeat: 12,
        yoyo: true
      }
    });
  
    gsap.from(".nav-item", {
      delay: 1.25,
      duration: 0.05,
      opacity: 0,
      //ease: "power1.inOut",
      stagger: {
        each: 0.07,
        from: "random",
        repeat: 4,
        yoyo: true
      }
    });
  
  
    gsap.from("#reel", {
      opacity: 0,
      delay: 1.7,
      duration: 4,
    });

    gsap.fromTo("#bottom", {
      opacity: 0
      },
      {
      delay: .8,
      duration: 7,
      opacity: 1
    });

}

