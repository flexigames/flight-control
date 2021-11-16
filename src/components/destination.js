export default function destination(position) {
  return {
    id: "destination",
    require: ["pos", "area"],
    destination: position,
    add() {
      this.destinationCircle = add([
        pos(position),
        area({ width: 16, height: 16 }),
        circle(8),
        color(49, 102, 127),
      ]);
    },
    draw() {
      drawLine({
        p1: this.pos,
        p2: this.destination,
        color: rgb(49, 102, 127),
      });
    },
    update() {
      if (this.isColliding(this.destinationCircle)) {
        get('score')[0].increase();
        this.destroy();
      }
    },
    destroy() {
      destroy(this.destinationCircle);
    },
  };
}
