import { IPrompt } from "../ports/prompt.interface";

export class InMemorySinglePrompt implements IPrompt {
  constructor(private number: number) {}

  askNumber(): Promise<number> {
    return Promise.resolve(this.number);
  }
}
