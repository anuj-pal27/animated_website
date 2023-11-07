//locomotive scroll smooth

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

//gsap to animate
gsap.from(".nlink",{
    stagger:.2,
    y:10,
    duration: 1,
    // ease: power2,
    opacity: 0
});

Shery.textAnimate(".heading h1" /* Element to target.*/, {
    //Parameters are optional.
    style: 2,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });
  gsap.from(".anim2",{
    y:50,
    stagger: .3,
    opacity: 0,
    ease: Power4,
    duration: 1
  });

  Shery.imageEffect(".imgtxt img",{
    style:3,
    config: {"uFrequencyX":{"value":11.57,"range":[0,100]},"uFrequencyY":{"value":4.13,"range":[0,100]},"uFrequencyZ":{"value":45.45,"range":[0,100]},"geoVertex":{"range":[1,64],"value":18.7},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7142940603847496},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.69,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},

  });
  Shery.imageEffect(".imgeff img",{
    style:5,
    config: {"a":{"value":1.24,"range":[0,30]},"b":{"value":-0.7,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6666666666666666},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.36,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},

  });

  gsap.from("#imgtxt img",{
    y:"70",
    opacity:0,
    duration:1,
    ease : Expo,
  });
  Shery.imageEffect("#bimg",{
    style: 5,
    config:{"a":{"value":0.99,"range":[0,30]},"b":{"value":-0.88,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.3266625460959514},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":2.62,"range":[1,15]},"durationOut":{"value":0.5,"range":[0.1,5]},"durationIn":{"value":1.23,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.23,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.83,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":31}},"discard_threshold":{"value":0.64,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.46,"range":[0,2]},"noise_scale":{"value":10.74,"range":[0,100]}} ,
    gooey:true,
  });

  let btn=document.querySelector('#futuretxt button');
  btn.addEventListener("mouseover",function(){
    gsap.to("#future video",{
        opacity: 1,
        duration:1,
        ease: Power4
    })
  });
  btn.addEventListener("mouseleave",function(){
    gsap.to("#future video",{
        opacity: 0,
        duration:1,
        ease: Power4
    })
  })