// modified by david minnix
// https://xinniw.github.io
// originally by
// Olivia Jack
// https://ojack.github.io

let shifty = (amp,freq)=> amp * Math.sin(freq * time);
osc(4, 0.1, 0.8).color(1.04,shifty(0.9,0.4)).rotate(0.30, shifty(5,3)).pixelate(shifty(5,shifty(0.5,0.2)), 20).modulate(noise(2.5), shifty(shifty(3,0.2),shifty(5,0.2))).out(o0)
