import arrow from "../components/arrow";
import controllable from "../components/controllable";
import destroyAfterExit from "../components/destroyAfterExit";
import movable from "../components/movable";

const speed = 64;
const size = 8;

export default function createPlane(
  position = vec2(width() / 2, height() / 2),
  direction = randi(360)
) {
  return add([
    "plane",
    pos(position),
    arrow(size),
    origin("center"),
    rotate(direction),
    movable(speed),
    controllable(),
    area({ width: size, height: size }),
    color(120, 255, 140),
    destroyAfterExit(),
  ]);
}
