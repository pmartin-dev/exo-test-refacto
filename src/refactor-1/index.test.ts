import { magicNumber } from "./magic-number";
import { IMagicNumber } from "./ports/magic-number.interface";

describe("magicNumber", () => {
  it("should win if the number is correct", async () => {
    class MagicNumberFake implements IMagicNumber {
      public prints: string[] = [];
      askUserNumber() {
        return Promise.resolve(50);
      }
      print(message: string) {
        this.prints.push(message);
      }
      randomNumber() {
        return 50;
      }
    }
    const magicNumberFake = new MagicNumberFake();
    await magicNumber(magicNumberFake);
    expect(magicNumberFake.prints).toEqual([
      "Welcome to the magic number !",
      "Vous avez gagné !",
    ]);
  });

  it("should tell the number is too small", async () => {
    class MagicNumberFake implements IMagicNumber {
      public prints: string[] = [];
      public attempts = [49, 50];
      public attemptsIndex = 0;

      askUserNumber() {
        return Promise.resolve(this.attempts[this.attemptsIndex++]);
      }
      print(message: string) {
        this.prints.push(message);
      }
      randomNumber() {
        return 50;
      }
    }
    const magicNumberFake = new MagicNumberFake();
    await magicNumber(magicNumberFake);
    expect(magicNumberFake.prints).toEqual([
      "Welcome to the magic number !",
      "Trop petit !",
      "Vous avez gagné !",
    ]);
  });

  it("should tell the number is too big", async () => {
    class MagicNumberFake implements IMagicNumber {
      public prints: string[] = [];
      public attempts = [51, 50];
      public attemptsIndex = 0;

      askUserNumber() {
        return Promise.resolve(this.attempts[this.attemptsIndex++]);
      }
      print(message: string) {
        this.prints.push(message);
      }
      randomNumber() {
        return 50;
      }
    }
    const magicNumberFake = new MagicNumberFake();
    await magicNumber(magicNumberFake);
    expect(magicNumberFake.prints).toEqual([
      "Welcome to the magic number !",
      "Trop grand !",
      "Vous avez gagné !",
    ]);
  });
});
