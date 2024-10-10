import { IPrinter } from "../ports/printer.interface";

export class Printer implements IPrinter {
  print(message: string) {
    console.log(message);
  }
}
