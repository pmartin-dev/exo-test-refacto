import prompt from "prompt";
import { magicNumber } from "./magic-number";
import { Printer } from "./adapters/printer";
import { RandomNumberGenerator } from "./adapters/random-number-generator";
import { Prompter } from "./adapters/prompter";

const printer = new Printer();
const randomNumber = new RandomNumberGenerator();
const prompter = new Prompter();

prompt.start();
magicNumber(printer, randomNumber, prompter);
