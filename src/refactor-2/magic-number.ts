import { IPrinter } from "./ports/printer.interface";
import { IPrompt } from "./ports/prompt.interface";
import { IRandomNumberGenerator } from "./ports/random-number-generator.interface";

export async function magicNumber(
  printer: IPrinter,
  randomNumber: IRandomNumberGenerator,
  prompter: IPrompt
) {
  printer.print("Welcome to the magic number !");

  let magicNumber = randomNumber.generate();
  let userNumber = -1;

  while (userNumber !== magicNumber) {
    userNumber = await prompter.askNumber();

    if (userNumber > magicNumber) {
      printer.print("Trop grand !");
    } else if (userNumber < magicNumber) {
      printer.print("Trop petit !");
    } else {
      printer.print("Vous avez gagné !");
    }
  }
}
