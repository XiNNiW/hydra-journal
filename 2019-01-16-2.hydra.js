// by david minnix
// https://xinniw.github.io


shape(()=>(365*Math.sin(time))).mult(noise((time/124)%44,(time/1024)%55).colorama(1).mult(shape((time/128)%300)))
  .modulate(src(o2),0.04)
  .rotate(()=>2*(Math.sin(0.1*time)+1))
  .scale(()=>Math.sin(0.04*time))
  .out(o2)



  //

src(o2)
  //.colorama(0.3)
  .scrollY(()=>0.3*time)
.diff(src(o0).kaleid(()=>(time/100)%65))
  // .diff(voronoi(10.5,0.51,0.01).colorama())
  .mult(voronoi(()=>time%40,0.1,0.01).colorama(5),0.5)
  .modulate(shape(128).rotate(3.14).color(3,4,5).blend(shape(365,3,0.01)).colorama(4))
  .out()



  src(o2)
    //.colorama(0.3)
    .scrollY(()=>0.03*time)
  .diff(src(o0).kaleid(()=>(time/1000)%65))
    .diff(voronoi(0.5,0.51,0.01).colorama())
    //.mult(voronoi(()=>time%40,0.1,0.01).colorama(5),0.5)
    //.modulate(shape(128).rotate(3.14).color(3,4,5).blend(shape(365,3,0.01)).colorama(4))
    .out()
