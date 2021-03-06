export default function controllable(turnSpeed = 2) {
  return {
    id: "controllable",
    require: ["rotate", "area"],
    active: false,
    add() {
      this.defaultColor = this.color;
    },
    update() {
      if (this.isClicked()) {
        get("plane")
          .find((plane) => plane.active)
          ?.toggleActive();
        this.toggleActive();
      }

      if (!this.active) return;

      if (isKeyDown("left")) {
        this.angle -= turnSpeed;
      }

      if (isKeyDown("right")) {
        this.angle += turnSpeed;
      }
    },
    toggleActive() {
      this.active = !this.active;

      if (this.active) {
        this.color = rgb(255, 255, 255);
      } else {
        this.color = this.defaultColor;
      }
    },
  };
}
