import createPlane from "../entities/plane";
import { getRandomPointOnCircle } from "../lib/lib";

export default function game() {
  createPlane(vec2(0, height() / 2), 0);
  createPlane(vec2(width(), height() / 2), 180);

  handlePlaneCrashes();
  handlePlaneControl();
  handlePlaneSpawns();

  function handlePlaneSpawns() {
    const spawnInterval = 5;
    const outerSpawnRadius = Math.max(width(), height()) / 2;
    const innerSpawnRadius = Math.min(width(), height()) / 2;
    const center = vec2(width() / 2, height() / 2);

    loop(spawnInterval, () => {
      const spawn = getRandomPointOnCircle(center, outerSpawnRadius);
      const destination = getRandomPointOnCircle(center, innerSpawnRadius);

      createPlane(spawn, destination.angle(spawn));
    });
  }

  function handlePlaneCrashes() {
    onCollide("plane", "plane", () => {
      go("gameover");
    });
  }

  function handlePlaneControl() {
    let activePlaneIndex = 0;

    const planes = get("plane");

    planes[activePlaneIndex].toggleActive();

    onKeyPress("space", () => {
      planes[activePlaneIndex].toggleActive();
      activePlaneIndex = (activePlaneIndex + 1) % planes.length;
      planes[activePlaneIndex].toggleActive();
    });
  }
}
