export function getRandomPointOnCircle(center, radius) {
  const angle = Math.random() * 2 * Math.PI;
  return vec2(
    center.x + radius * Math.cos(angle),
    center.y + radius * Math.sin(angle)
  );
}

export function getRandomPointOnSides() {
  const destination = vec2();
  const side = choose(["left", "right", "top", "bottom"]);
  if (side === "left") {
    destination.x = 0;
    destination.y = randi(height());
  } else if (side === "right") {
    destination.x = width();
    destination.y = randi(height());
  } else if (side === "top") {
    destination.x = randi(width());
    destination.y = 0;
  } else if (side === "bottom") {
    destination.x = randi(width());
    destination.y = height();
  }

  return destination;
}
