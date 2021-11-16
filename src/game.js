import kaboom from 'kaboom';
import createPlane from './entities/plane';

kaboom({
  background: [20, 40, 50],
  width: 480,
  height: 360,
  scale: 2,
  canvas: document.getElementById('canvas'),
});

createPlane();
