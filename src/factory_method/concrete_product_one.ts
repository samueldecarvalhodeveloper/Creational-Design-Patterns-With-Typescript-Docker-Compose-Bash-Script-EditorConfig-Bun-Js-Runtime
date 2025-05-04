import type Product from "./product";

class ConcreteProductOne implements Product {
  public operation(): string {
    return "{ Result Of The Concrete Product One }";
  }
}

export default ConcreteProductOne;
