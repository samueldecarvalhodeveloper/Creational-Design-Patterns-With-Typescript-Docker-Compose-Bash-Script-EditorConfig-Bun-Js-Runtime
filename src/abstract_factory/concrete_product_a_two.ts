import type AbstractProductA from "./abstract_product_a";

class ConcreteProductATwo implements AbstractProductA {
  public usefulFunctionA(): string {
    return "The Result Of The Product A Two.";
  }
}

export default ConcreteProductATwo;
