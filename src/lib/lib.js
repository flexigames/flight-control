export function getRandomPointOnCircle(center, radius) {
  const angle = Math.random() * 2 * Math.PI;
  return vec2(
    center.x + radius * Math.cos(angle),
    center.y + radius * Math.sin(angle)
  );
}

export function getRandomPointOnSides(padding = 0) {
  const destination = vec2();
  const side = choose(["left", "right", "top", "bottom"]);
  if (side === "left") {
    destination.x = -padding;
    destination.y = randi(height());
  } else if (side === "right") {
    destination.x = width() + padding;
    destination.y = randi(height());
  } else if (side === "top") {
    destination.x = randi(width());
    destination.y = -padding;
  } else if (side === "bottom") {
    destination.x = randi(width());
    destination.y = height() + padding;
  }

  return destination;
}
