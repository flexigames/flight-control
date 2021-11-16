import createPlane from "../entities/plane";
import createScore from "../entities/score";
import { getRandomPointOnCircle, getRandomPointOnSides } from "../lib/lib";
import createInput from "./input";

export default function game() {
  handlePlaneCrashes();
  handlePlaneSpawns();
  createScore();
  createInput();

  function handlePlaneSpawns() {
    const spawnInterval = 5;
    const outerSpawnRadius =
      Math.sqrt(width() * width() + height() * height()) / 2;
    const innerSpawnRadius = Math.min(width(), height()) / 2;
    const center = vec2(width() / 2, height() / 2);

    loop(spawnInterval, () => {
      const spawn = getRandomPointOnSides(20);
      const destination = getRandomPointOnSides();
      createPlane(spawn, destination);
    });
  }

  function handlePlaneCrashes() {
    onCollide("plane", "plane", () => {
      go("gameover");
    });
  }
}
