import createPlane from '../entities/plane';

export default function game() {
  const planes = [
    createPlane(vec2(0, height() / 2), 0),
    createPlane(vec2(width(), height() / 2), 180),
  ];

  handlePlaneCrashes();
  handlePlaneControl();

  function handlePlaneCrashes() {
    onCollide('plane', 'plane', () => {
      go('gameover');
    });
  }

  function handlePlaneControl() {
    let activePlaneIndex = 0;

    planes[activePlaneIndex].toggleActive();

    onKeyPress('space', () => {
      planes[activePlaneIndex].toggleActive();
      activePlaneIndex = (activePlaneIndex + 1) % planes.length;
      planes[activePlaneIndex].toggleActive();
    });
  }
}
