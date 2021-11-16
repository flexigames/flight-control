import createPlane from "../entities/plane";
import createScore from "../entities/score";
import { getRandomPointOnCircle, getRandomPointOnSides } from "../lib/lib";

export default function game() {
  handlePlaneCrashes();
  handlePlaneControl();
  handlePlaneSpawns();
  createScore();

  function handlePlaneSpawns() {
    const spawnInterval = 5;
    const outerSpawnRadius =
      Math.sqrt(width() * width() + height() * height()) / 2;
    const innerSpawnRadius = Math.min(width(), height()) / 2;
    const center = vec2(width() / 2, height() / 2);

    loop(spawnInterval, () => {
      const spawn = getRandomPointOnCircle(center, outerSpawnRadius);
      const destination = getRandomPointOnSides();
      createPlane(spawn, destination);
    });
  }

  function handlePlaneCrashes() {
    onCollide("plane", "plane", () => {
      go("gameover");
    });
  }

  function handlePlaneControl() {
    const planes = get("plane");

    onKeyPress("space", () => {
      const planes = get("plane").filter(({ hasBeenInside }) => hasBeenInside);
      activePlane.toggleActive();
      activePlane = planes[(planes.indexOf(activePlane) + 1) % planes.length];
      activePlane.toggleActive();
    });
  }
}
