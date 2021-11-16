export default function createInput() {
  return add([
    pos(30, height() - 20),
    text("command: "),
    {
      data: "",
      add() {
        onCharInput((character) => {
          this.data += character;
          this.text = "command: " + this.data;
        });
        onKeyRelease("enter", () => {
          this.data = "";
          this.text = "command: ";
        });
        onKeyPress("backspace", () => {
          this.data = this.data.slice(0, -1);
          this.text = "command: " + this.data;
        });
      },
    },
  ]);
}
