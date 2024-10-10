import { IMagicNumber } from "../ports/magic-number.interface";

export class MagicNumberFake implements IMagicNumber {
  constructor() {}

  askUserNumber() {
    return Promise.resolve(50);
  }

  print(message: string) {
    return console.log(message);
  }

  randomNumber() {
    return 50;
  }
}
