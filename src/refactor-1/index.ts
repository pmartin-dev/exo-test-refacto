import { magicNumber } from "./magic-number";
import prompt from "prompt";

prompt.start();

magicNumber({
  print: console.log,
  randomNumber: () => Math.floor(Math.random() * 100) + 1,
  askUserNumber: () =>
    prompt.get(["number"]).then(({ number }) => parseInt(number as string, 10)),
});
