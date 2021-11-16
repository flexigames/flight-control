const size = 16;
const speed = 64;

export default function createPlane() {
  return add([
    rect(size, size),
    pos(width() / 2, height() / 2),
    origin('center'),
    move(randi(360), speed),
  ]);
}
