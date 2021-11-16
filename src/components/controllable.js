export default function controllable(turnSpeed = 2) {
  return {
    id: 'controllable',
    require: ['rotate'],
    update() {
      if (isKeyDown('left')) {
        this.angle -= turnSpeed;
      }

      if (isKeyDown('right')) {
        this.angle += turnSpeed;
      }
    },
  };
}
