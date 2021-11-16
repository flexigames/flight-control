export default function name() {
  return {
    id: "name",
    require: ["pos"],
    name: String(randi(10, 100)),
    add() {
      this.nameText = add([
        text(this.name),
        pos(this.pos.x, this.pos.y - 15),
        origin("center"),
      ]);
    },
    update() {
      this.nameText.pos = vec2(this.pos.x, this.pos.y - 15);
    },
    destroy() {
      this.nameText.destroy();
    },
  };
}
