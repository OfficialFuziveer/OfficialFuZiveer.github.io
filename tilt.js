const tilt = document.querySelectorAll(".card-v2🔸");

VanillaTilt.init(tilt, {
  reverse: false,
  max: 7.5,
  speed: 1000,
  scale: 1,
  glare: true,
  reset: true,
  perspective: 1000,
  transition: true,
  "max-glare": 0.1,
  "glare-prerender": false,
  gyroscope: true,
  gyroscopeMinAngleX: -45,
  gyroscopeMaxAngleX: 45,
  gyroscopeMinAngleY: -45,
  gyroscopeMaxAngleY: 45,
});
