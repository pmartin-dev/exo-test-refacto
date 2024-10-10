import { IPrompt } from "../ports/prompt.interface";

export class InMemoryMultiplePrompt implements IPrompt {
  private index: number = 0;

  constructor(private numbers: number[]) {}

  askNumber(): Promise<number> {
    return Promise.resolve(this.numbers[this.index++]);
  }
}
