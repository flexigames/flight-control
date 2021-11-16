export default function createScore() {
  add([
    "score",
    pos(width() / 2, 10),
    text("score: 0"),
    origin("center"),
    {
      score: 0,
      increase() {
        this.score++;
        this.text = `score: ${this.score}`;
      },
    },
  ]);
}
