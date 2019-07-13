// create an html5 video element
vid = document.createElement('video')

vid.autoplay = true
vid.loop = true
vid.type = "video/mp4"

// get path to video using getPaths() representing current directory in atom
vid.src = atom.project.getPaths()[1]+'/assets/jelly.webm'
// vid.src = atom.project.getPaths()[1]+'/assets/weekly-challenge-1-minibrute-track.mp4'

console.log(atom.project.getPaths()[1]+'/assets/jelly.webm')

// use video within hydra
s0.init({src: vid})

src(s0)
  // .rotate(0, 0.2)
  .scale(1.1)
  .blend(
    src(o0)
    .saturate(0.8)
    .modulate(osc(3,0.1,1))
  )
  .scrollX(0, -0.1)
  .repeat(2,2)
  // .kaleid(2)
  .mult(osc(1,2,3))
  // .color(1.0, 0.7, -1)
  // .diff(osc(2, 0.3, 2))
 // .kaleid(3)
.out(o0)

shape(128)
.add(src(o0),0.9)
.mult(osc(1,0.1,3).modulatePixelate(o0))
// .repeat(2,2)
.scrollX(0,0.1)
.scrollY(0,0.02)
.kaleid()
.scale(0.6)
.rotate(1,-0.2)
.modulate(noise())
.mult(shape(100).scale(3))
.out()
