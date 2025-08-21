import type Product from "./product";

class ConcreteProductTwo implements Product {
  public operation(): string {
    return "{ Result Of The Concrete Product Two }";
  }
}

export default ConcreteProductTwo;
