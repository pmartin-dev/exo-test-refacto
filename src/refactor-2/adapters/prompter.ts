import { IPrompt } from "../ports/prompt.interface";
import prompt from "prompt";

export class Prompter implements IPrompt {
  async askNumber(): Promise<number> {
    return prompt
      .get(["number"])
      .then(({ number }) => parseInt(number as string, 10));
  }
}
