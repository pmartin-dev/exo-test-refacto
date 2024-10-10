import { IPrinter } from "../ports/printer.interface";

export class InMemoryPrinter implements IPrinter {
  public messages: string[] = [];

  print(message: string) {
    this.messages.push(message);
  }
}
