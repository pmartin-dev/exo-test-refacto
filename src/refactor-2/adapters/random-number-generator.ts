import { IRandomNumberGenerator } from "../ports/random-number-generator.interface";

export class RandomNumberGenerator implements IRandomNumberGenerator {
  generate(): number {
    return Math.floor(Math.random() * 100) + 1;
  }
}
