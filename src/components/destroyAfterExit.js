export default function destroyAfterExit() {
  return {
    id: "destroyAfterExit",
    require: ["area"],
    hasBeenInside: false,
    update() {
      const screenRect = {
        p1: vec2(0, 0),
        p2: vec2(width(), height()),
      };
      if (testAreaRect(this.screenArea(), screenRect)) {
        this.hasBeenInside = true;
      } else if (this.hasBeenInside) {
        this.destroy();
      }
    },
  };
}
