import { FixedNumberGenerator } from "./adapters/fixed-number-generator";
import { InMemoryMultiplePrompt } from "./adapters/in-memory-multiple-prompt";
import { InMemoryPrinter } from "./adapters/in-memory-printer";
import { InMemorySinglePrompt } from "./adapters/in-memory-single-prompt";
import { magicNumber } from "./magic-number";

describe("magicNumber", () => {
  it("should win if the number is correct", async () => {
    const printer = new InMemoryPrinter();
    const randomNumber = new FixedNumberGenerator(50);
    const prompt = new InMemorySinglePrompt(50);

    await magicNumber(printer, randomNumber, prompt);

    expect(printer.messages).toEqual([
      "Welcome to the magic number !",
      "Vous avez gagné !",
    ]);
  });

  it("should tell when the number is too small", async () => {
    const printer = new InMemoryPrinter();
    const randomNumber = new FixedNumberGenerator(50);
    const prompt = new InMemoryMultiplePrompt([49, 50]);

    await magicNumber(printer, randomNumber, prompt);

    expect(printer.messages).toEqual([
      "Welcome to the magic number !",
      "Trop petit !",
      "Vous avez gagné !",
    ]);
  });

  it("should tell when the number is too big", async () => {
    const printer = new InMemoryPrinter();
    const randomNumber = new FixedNumberGenerator(50);
    const prompt = new InMemoryMultiplePrompt([51, 50]);

    await magicNumber(printer, randomNumber, prompt);

    expect(printer.messages).toEqual([
      "Welcome to the magic number !",
      "Trop grand !",
      "Vous avez gagné !",
    ]);
  });
});
