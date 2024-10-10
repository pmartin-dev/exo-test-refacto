export interface IMagicNumber {
  print(message: string): void;
  randomNumber(): number;
  askUserNumber(): Promise<number>;
}
