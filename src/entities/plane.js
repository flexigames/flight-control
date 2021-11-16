import arrow from "../components/arrow";
import controllable from "../components/controllable";
import destination from "../components/destination";
import destroyAfterExit from "../components/destroyAfterExit";
import movable from "../components/movable";
import name from "../components/name";

const speed = 10;
const size = 12;

export default function createPlane(position, destinationPos) {
  const direction = destinationPos.angle(position);

  return add([
    "plane",
    pos(position),
    destination(destinationPos),
    arrow(size),
    origin("center"),
    rotate(direction),
    movable(randi(speed / 2, speed)),
    controllable(),
    area({ width: size / 2, height: size / 2 }),
    color(120, 255, 140),
    destroyAfterExit(),
    name(),
  ]);
}
