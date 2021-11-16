export default function gameover() {
  add([
    text("game over"),
    color(240, 240, 240),
    pos(center()),
    origin("center"),
    scale(2),
  ]);

  add([
    text(`press any key to continue`),
    origin("bot"),
    color(240, 240, 240),
    pos(width() / 2, height() - 32),
  ]);

  onKeyPress(() => {
    go("game");
  });
}
