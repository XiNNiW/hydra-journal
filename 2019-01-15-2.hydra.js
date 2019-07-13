// by david minnix
// xinniw.github.io


s0.initCam()

osc()
  .scale(()=>5*Math.cos(0.07*time))
  .mult(osc().rotate(1.5).scale(()=>Math.sin(0.05*time)))
.blend(src(o1).add(s0).scale(0.5))
  .modulate(osc()).out(o1)

shape(3).scale(1,1,1.75).scale(0.75).blend(shape(3).scale(1,1,1.75).colorama(3)).blend(src(o2).scale(()=>Math.sin(0.005*time))).out(o2)

  src(o1).blend(o2)
  .out()

  src(o2).out()
