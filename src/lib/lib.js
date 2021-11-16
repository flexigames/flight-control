export function getRandomPointOnCircle(center, radius) {
  const angle = Math.random() * 2 * Math.PI;
  return vec2(
    center.x + radius * Math.cos(angle),
    center.y + radius * Math.sin(angle)
  );
}
