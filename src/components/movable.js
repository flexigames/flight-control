export default function movable(speed = 32) {
  return {
    id: 'movable',
    require: ['pos', 'rotate'],
    speed,
    update() {
      this.move(dir(this.angle).scale(this.speed));
    },
  };
}
