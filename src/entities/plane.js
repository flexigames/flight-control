import arrow from '../components/arrow'

const speed = 64;

export default function createPlane() {
  const direction = randi(360);

  return add([
    pos(width() / 2, height() / 2),
    arrow(),
    origin('center'),
    rotate(direction),
    move(direction, speed),
    color(120, 255, 140),
  ]);
}
