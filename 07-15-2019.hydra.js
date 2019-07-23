

osc(()=>4*Math.sin(time),()=>Math.sin(time)/1000,6).out(o1)

src(o1)


noise(1,0.1).out()

// blend(osc(3,0.01,6).invert())

//oilslick neurons
src(o0)
.modulate(noise(()=>Math.sin(time/1000),()=>0.1))
.blend(
  src(o0)
  .modulateRotate(noise(()=>Math.sin(time/10000),()=>0.1))
  .modulate(src(o0).kaleid(15))
)
.modulate(
  src(o0).modulatePixelate(noise(1,()=>0.1))
)
.add(src(o0).diff(src(o0).colorama().scale(1.1),0.1))
.blend(noise(1,()=>0.1),0.1)
.out()

//paint pool
src(o0)
.modulate(noise(()=>Math.sin(time/1000),()=>0.1))
.blend(
  src(o0)
  .modulatePixelate(noise(()=>Math.sin(time/10000),()=>0.12))
  // .modulate(src(o0).kaleid(15))
)
.modulate(
  src(o0).modulatePixelate(noise(1,()=>0.1))
)
.add(src(o0).diff(src(o0).blend(osc(1,0.1,1).invert().brightness(0.5)).scale(1.01)))
// .rotate(0.1)
.blend(noise(1,()=>0.11),0.1)
.hue(0.5)
.saturate(0.8)
// .brightness(0.5)
.out()


//scribbles
src(o0)
// .modulate(noise(()=>(0.1*Math.sin(time/1003))*Math.random()))
.modulate(noise(1,0.1))
.blend(
  src(o0)
  .modulatePixelate(noise(()=>(4*Math.sin(time/1001))*Math.random()))
  .modulate(src(o0).kaleid(15))
)
.modulate(
  // src(o0).modulatePixelate(noise(()=>1+(3*Math.sin(time/1099))*Math.random()))
  src(o0).modulatePixelate(noise(0.1))
)
// .add(src(o0).diff(src(o0).colorama(),0.01))
// .blend(noise(()=>1+(4*Math.sin(time/1000))*Math.random()),0.1)
.blend(noise(2,0.1))
.out()

//scribbles
src(o0)
// .modulate(noise(()=>(0.1*Math.sin(time/1003))*Math.random()))
.modulate(noise(1,0.1))
.blend(
  src(o0)
  // .modulatePixelate(noise(()=>(4*Math.sin(time/1001))*Math.random()))
  .modulatePixelate(noise(1,1))
  .modulate(src(o0).kaleid(15))
)
.modulate(
  // src(o0).modulatePixelate(noise(()=>1+(3*Math.sin(time/1099))*Math.random()))
  src(o0).modulatePixelate(noise(0.1))
)
.add(src(o0).diff(src(o0).colorama(),0.01))
// .blend(noise(()=>1+(4*Math.sin(time/1000))*Math.random()),0.1)
.blend(noise(1,0.1),0.1)
.out()

//scribbles
src(o0)
.modulate(noise(()=>(1*Math.sin(time/10))*Math.random(),0.2))
.blend(
  src(o0)
  .modulatePixelate(noise(1,0.1))
  .modulate(src(o0).kaleid(15))
)
.modulate(
  src(o0).modulatePixelate(noise(()=>1))
)
.add(src(o0).diff(src(o0).colorama(),0.01))
.blend(noise(1),0.1)
.out()



//water light
src(o0).modulate(noise())
// .blend(
//   // shape(4)
//   o1
//   // .scrollY(1,0.1)
// )
.blend(
  src(o0)
  // .pixelate(64,64)
  // .modulate(src(o0).kaleid())
  // .scale(()=>0.5+0.5*Math.sin(time)/100)
)
.modulate(
  src(o0).modulatePixelate(noise(1))
  // .repeat(2,2)
)
.blend(noise(1),0.1)
.out()
