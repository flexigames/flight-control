import createPlane from '../entities/plane';

export default function game() {
  createPlane(vec2(0, height() / 2), 0);
  createPlane(vec2(width(), height() / 2), 180);

  onCollide('plane', 'plane', () => {
    go('gameover');
  });
}
