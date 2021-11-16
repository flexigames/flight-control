export default function createInput() {
  let finalCommand = false;

  const input = add([
    pos(30, height() - 20),
    text("command: "),
    {
      data: "",
      add() {
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

  const recognition = new webkitSpeechRecognition();

  onKeyPress("space", () => {
    finalCommand = false;
    recognizeSpeech((final_transcript, interim_transcript, allFinal) => {
      console.log(final_transcript, interim_transcript);
      input.text = "command: " + final_transcript + interim_transcript;
      if (allFinal) {
        const test = performCommand(final_transcript + interim_transcript);
        if (test.type === "error") {
          input.text = "plane not found: " + test.planeName;
        } else {
          input.text = "executed: " + test.planeName + " " + test.degrees;
        }
      }
    });
  });

  onKeyRelease("space", () => {
    recognition.stop();
    finalCommand = true;
  });

  function recognizeSpeech(onText) {
    recognition.lang = "en-US";
    recognition.interimResults = true;
    recognition.continuous = true;

    recognition.onresult = (event) => {
      let interim_transcript = "";
      let final_transcript = "";
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          final_transcript += event.results[i][0].transcript;
        } else {
          interim_transcript += event.results[i][0].transcript;
        }
      }
      const allFinal =
        event.results.length > 0 &&
        [...event.results].every((result) => result.isFinal);
      onText(interim_transcript, final_transcript, allFinal);
    };

    recognition.start();
    return recognition;
  }

  return input;
}

function performCommand(command) {
  const [planeName, ...args] = command.trim().split(" ");
  const degrees = args[args.length - 1];
  console.log(command, planeName, degrees);
  const planes = get("plane");
  const plane = planes.find((plane) => plane.name === planeName);

  if (!plane) {
    return {
      type: "error",
      planeName,
    };
  }

  plane.angle += Number(degrees);

  return { degrees, planeName };
}
