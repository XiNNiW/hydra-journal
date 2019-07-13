


/////////


p1 = new P5()

p1.createCanvas(710, 400, 0)

  // load video
  // vid = p1.createVideo(atom.project.getPaths()[1]+'/assets/jelly.webm')
  // set video to loop
  // vid.loop()
  // draw to canvas
  p1.draw = () => {
    p1.clear()
    // p1.image(vid, 0, 0, p1.width, p1.height)
    p1.sphere(40)
  }

  // vid.time(()=>Math.cos(0.07*time) * vid.duration())
  vid.speed(0.1)

  p1.hide()

  // use within hydra
  s0.init({src: p1.canvas})
  src(s0)
    .rotate(0, -0.002)
    // .repeat(5, 3, 0.5)
    .saturate(4.0)
    .mult(osc(4, 0.1, 2))
    .scrollX(0, -0.01)
  //  .kaleid(3)
    // .blend(src(s0).saturate().hue(0.2))
    .blend(src(o0).scrollX(0, -0.00001).hue(0.1).rotate(0.1).scale(1.1))
.out()
