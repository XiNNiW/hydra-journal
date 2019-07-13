// based on patch by Sebastian Avila
// http://www.sebastian-avila.com/

// modified by David Minnix
// http://www.xinniw.github.io

//

a.setScale (10  )
a.setBins (6)
//
a.settings[0].cutoff = 1
a.settings[1].cutoff = 2
a.settings[2].cutoff = 4
a.settings[3].cutoff = 6
a.settings[4].cutoff = 8
a.settings[5].cutoff = 9


shape(4).scale(()=> a.fft[4]*2 +1)
.blend(o0).add(shape(3).color(0,0,0.7))
.blend(src(o0).kaleid()).color(1,1,1)
.blend(o0).rotate(()=> a.fft[1]*0.01 -0.1)
.scrollY(-0.32,-0.2)
.add(shape(300).color(2,0,0).scrollY(()=> a.fft[0]*0.7 -0.1,-0.02)).scale(()=> a.fft[2]*0.7 -0.8)
.scale(()=> a.fft[3]*2 -1)
.modulate(o0,()=> a.fft[2]*0.1 -0.2)
.rotate(-0.1,()=> a.fft[3]*0.2 -0.1)
.out(o0)
