a.show()
a.setScale (10)
a.setBins (6)
//
a.settings[0].cutoff = 1
a.settings[1].cutoff = 2
a.settings[2].cutoff = 4
a.settings[3].cutoff = 6
a.settings[4].cutoff = 8
a.settings[5].cutoff = 9


p1 = new P5()
  // load video
  vid1 = p1.createVideo(atom.project.getPaths()[1]+'/assets/jelly.webm')
  vid2 = p1.createVideo(atom.project.getPaths()[1]+'/assets/pixel-woods.webm')
  vid3 = p1.createVideo(atom.project.getPaths()[1]+'/assets/winter-dunes.mp4')
  vid4 = p1.createVideo(atom.project.getPaths()[1]+'/assets/zoom-tree.mp4')
  // set video to loop
  vid1.loop()
  vid2.loop()
  vid3.loop()
  vid4.loop()
  // draw to canvas

  p1.draw = () => {
    p1.clear()
    p1.image(vid1, 0, 0, p1.width, p1.height)
  }
  p1.hide()
  // vid.time(()=>Math.cos(0.07*time) * vid.duration())
  // use within hydra
  s0.init({src: p1.canvas})

  vid1.speed(0.5)
  vid2.speed(0.5)
  vid3.speed(0.5)
  vid4.speed(0.5)


  osc(-1,-2,1)
  .modulatePixelate(osc(4,3))
  .modulateRotate(osc(5))
  .scrollY(()=>time/5*time)
  .pixelate(()=>16+ 4*time%8/8)
  .kaleid(7)
  .scale(0.125)
  .modulateRotate(src(o0).scale(0.66).rotate(3.14))
  .mult(src(o1).scale(0.333).rotate(time).diff(osc(3,3,3)).mult(shape(7).scale(()=>4*(time%16)/16)).diff(shape(7).scale(0.85)))
  .pixelate(()=>1024*(1-((time%16))/16),()=>1024*(1-((time%16))/16))
  .out(o3)

  osc(1,2,0.25,0.125).blend(src(o1)).out()

  osc(-1,-2,1)
  .modulatePixelate(osc(4,3))
  .modulateRotate(osc(5))
  .scrollY(()=>time/5*time)
  .pixelate(()=>16+ 4*time%8/8)
  .kaleid(7)
  .scale(0.125)
  .modulateRotate(src(o0).scale(0.66).rotate(3.14))
  .mult(src(o1).scale(0.333).rotate(time).diff(osc(3,3,3)).mult(shape(7).scale(()=>4*(time%16)/16)).diff(shape(7).scale(0.85)))
  .pixelate(()=>1024*(1-((time%16))/16),()=>1024*(1-((time%16))/16))
  .out(o1)


  src(s0)
    // .rotate(0, -0.002)
    // .repeat(5, 3, 0.5)
    .saturate(4.0)
    // .mult(osc(4, 0.1, 2))
    // .scrollX(0, -0.01)
  //  .kaleid(3)
    // .blend(src(s0).saturate().hue(0.2))
    // .blend(src(o3).scrollX(0, -0.00001).hue(0.1).rotate(0.1).scale(1.1))
    // .repeat(2,2)
    // .scrollX(0,0.1)
    .rotate(-0.5*3.1415926)
    .mult(shape(4).scale(3))
.out(o3)

osc(3,0.3,4).blend(o2).modulate(noise()).blend(src(o1).scale(0.77).scrollY(0,0.2),0.1).scale(0.4).kaleid(5).out(o2)
src(o1).blend(o2,0.3).out()

shape(128)
.diff(src(o1),0.9)
// .blend(o0)
.blend(src(o0).kaleid()).color(1,1,1)
.blend(o0).rotate(()=> a.fft[1]*0.01 -0.1)
.scrollY(-0.32,-0.2)
// .diff(src(o0).scale(0.5).repeat(2,2),0.9)
// .mult(osc(1,0.5,3).modulatePixelate(src(o0).scale(1.2)))
// .repeat(2,2)
.scrollX(0,0.01)
.scrollY(0,0.02)
.kaleid(3)
.saturate(()=>a.fft[4]*2 +1)
.scale(0.6)
.rotate(0,-0.001)
// .blend(o1)
.modulate(noise())
// .mult(shape(10).modulateScale(noise(),3),0.9)
.blend(
  shape(800)
  .mult(osc(3,0.2,4))
  // .add(o3)
  .mult(shape(800).scale(4))
  .saturate(0.99).modulate(noise())
  .scale(()=>a.fft[1]+0.01)
  .scrollX(()=>Math.sin(Math.random()*(a.fft[0]-0.5)*0.5))
  .scrollY(()=>((a.fft[3]-0.5)*0.6))
  .kaleid()
)
.modulate(noise())
.mult(shape(10).modulateScale(noise(),3),0.9)
.add(src(o3).scale(()=>1.1+0.04*Math.cos(time/10000)).scrollX(0,0.01).rotate(0,0.2).saturate(()=>Math.cos(time/10000)))
.blend(o1)
.out(o0)


shape(128)
.scrollX(0,-0.1)
.scale(0.1)
.pixelate(5, 5)
.out(o1)

shape(128)
.add(src(o0),0.9)
.mult(osc(1,0.5,3).modulatePixelate(o3))
.repeat(2,2)
.scrollX(0,0.01)
.scrollY(0,0.002)
.kaleid(3)
.scale(0.6)
.rotate(0,-0.001)
.add(o0)
.modulate(noise())
.mult(shape(10).modulateScale(noise(),3),0.9)
.blend(o0).add(shape(3).color(0,0,0.7))
.blend(src(o0).kaleid()).color(1,1,1)
.blend(o3).rotate(()=> a.fft[1]*0.1 -0.1)
.saturate(()=>a.fft[3]*3+1)
.scrollY(-0.32,-0.002)
.out()

src(o2)
  .colorama(5)
  .scrollY(()=>0.000003*time)
.mask(src(o2).modulate(src(o0).kaleid(3)))
  .diff(src(o0).kaleid(3).rotate(()=>time*0.0005))
  .blend(src(s0).scale(4).invert())
  .modulate(o3)
  .diff(voronoi(0.5,0.51,0.001).colorama())
  .mult(voronoi(()=>time%40,0.1,0.01).colorama(5),0.5)
  // .modulate(shape(128).rotate(()=>0.005*time*3.14).color(3,4,5).blend(shape(365,3,0.01)).colorama(4))
  .out()



src(o2)
  .colorama()
  .scrollY(()=>0.00003*time)
  // .blend(src(o1).modulate(src(o0).kaleid(65)))
  .diff(src(o0).modulateRotate(src(o2).kaleid(3)))
  // .diff(voronoi(0.5,0.51,0.01).colorama())
  .mult(voronoi(()=>time%40,0.1,0.01).colorama(5),0.5)
  .modulate(shape(128).rotate(3.14).color(3,4,5).blend(shape(365,3,0.01)).colorama(4))
  .out(o3)


  noise((time/124)%44,(time/1024)%55).colorama(1).mult(shape((time/128)%300))
    .modulate(src(o2),0.04)
    .rotate(()=>2*(Math.sin(0.1*time)+1))
    .scale(()=>Math.sin(0.04*time))
    .out(o0)



    //

  src(o1)
    //.colorama(0.3)
    .scrollY(()=>0.03*time)
  .blend(src(o0).kaleid(()=>(time/10000000)%65))
    // .diff(voronoi(0.5,0.51,0.01).colorama())
  .modulate(osc(0.5,0.0002,0.00001))
    // .mult(voronoi(()=>time%40,0.1,0.01).colorama(5),0.5)
    // .modulate(shape(128).rotate(3.14).color(3,4,5).blend(shape(365,3,0.01)).colorama(4))
    .out(o0)

    osc()
      .scale(()=>5*Math.cos(0.00007*time))
      .mult(osc().rotate(1.5).scale(()=>Math.sin(0.0005*time)))
    .blend(src(o1).add(s0).scale(0.5))
      .modulate(osc()).out(o0)

    shape(3)
    .scale(1,1,1.75)
    .scale(0.75)
    .blend(shape(3)
    .scale(1,1,1.75).colorama(3))
    .blend(src(o2).scale(()=>Math.sin(0.00005*time))).out(o2)

      src(o1).blend(o2)
      .out()

      src(o2).out()
