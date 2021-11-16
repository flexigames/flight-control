export default function createInput() {
  return add([
    pos(30, height() - 20),
    text("command: "),
    {
      data: "",
      add() {
        recognizeSpeech((text, isFinal) => {
          this.text = "command: " + text;
          if (isFinal) performCommand(text);
        });
        onCharInput((character) => {
          this.data += character;
          this.text = "command: " + this.data;
        });
        onKeyRelease("enter", () => {
          performCommand(this.data);
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

function performCommand(command) {
  const [planeName, ...args] = command.trim().split(" ");
  const degrees = args[args.length - 1];
  console.log(command, planeName, degrees);
  const planes = get("plane");
  const plane = planes.find((plane) => plane.name === planeName);
  if (!plane) return;

  plane.angle += Number(degrees);
}

function recognizeSpeech(onText) {
  const recognition = new (window.SpeechRecognition ||
    window.webkitSpeechRecognition ||
    window.mozSpeechRecognition ||
    window.msSpeechRecognition)();

  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  recognition.continuous = true;

  recognition.onresult = (event) => {
    if (event.results.length > 0) {
      event.results[0].isFinal;
      const result = event.results[event.results.length - 1];
      onText(result[0].transcript, result.isFinal);
    }
  };

  recognition.start();
}
