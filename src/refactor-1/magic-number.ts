import { IMagicNumber } from "./ports/magic-number.interface";

export async function magicNumber(dependencies: IMagicNumber) {
  dependencies.print("Welcome to the magic number !");

  let magicNumber = dependencies.randomNumber();
  let userNumber = -1;

  while (userNumber !== magicNumber) {
    userNumber = await dependencies.askUserNumber();

    if (userNumber > magicNumber) {
      dependencies.print("Trop grand !");
    } else if (userNumber < magicNumber) {
      dependencies.print("Trop petit !");
    } else {
      dependencies.print("Vous avez gagné !");
    }
  }
}
