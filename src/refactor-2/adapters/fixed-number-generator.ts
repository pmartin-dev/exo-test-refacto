import { IRandomNumberGenerator } from "../ports/random-number-generator.interface";

export class FixedNumberGenerator implements IRandomNumberGenerator {
  constructor(private readonly number: number) {}
  generate(): number {
    return this.number;
  }
}
