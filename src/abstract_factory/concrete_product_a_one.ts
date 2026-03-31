import type AbstractProductA from "./abstract_product_a";

class ConcreteProductAOne implements AbstractProductA {
  public usefulFunctionA(): string {
    return "The Result Of The Product A One.";
  }
}

export default ConcreteProductAOne;
