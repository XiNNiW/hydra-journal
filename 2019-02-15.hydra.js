


osc(3,2,3).colorama(4).blend(o2).out(o3)


shape(()=>(365*Math.sin(time))).mult(noise((time/124)%44,(time/1024)%55).colorama(1).mult(shape((Math.round(time)/128)%300)))
  .mult(src(o3))
  .rotate(()=>2*(Math.sin(0.1*time)+1))
  .scale(()=>Math.sin(0.04*time))
  .out(o2)

shape(3).scale(1,1,1).scale(0.75).rotate(3.141592).colorama(5).scrollY(()=>Math.cos(time/1000)).out(o1)

src(o2).blend(src(s0)).diff(o1).modulatePixelate(o3).out()
