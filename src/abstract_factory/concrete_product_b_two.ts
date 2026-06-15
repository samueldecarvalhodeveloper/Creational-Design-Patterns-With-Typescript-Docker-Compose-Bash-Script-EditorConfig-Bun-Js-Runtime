import type AbstractProductA from "./abstract_product_a";
import type AbstractProductB from "./abstract_product_b";

class ConcreteProductBTwo implements AbstractProductB {
  public usefulFunctionB(): string {
    return "The Result Of The Product B Two.";
  }

  public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
    const result = collaborator.usefulFunctionA();

    return `The Result Of The B Two Collaborating With The (${result})`;
  }
}

export default ConcreteProductBTwo;
