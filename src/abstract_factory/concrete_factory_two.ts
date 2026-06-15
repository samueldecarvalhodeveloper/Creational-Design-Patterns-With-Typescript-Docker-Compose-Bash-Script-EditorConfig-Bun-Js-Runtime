import type AbstractFactory from "./abstract_factory";
import type AbstractProductA from "./abstract_product_a";
import type AbstractProductB from "./abstract_product_b";
import ConcreteProductATwo from "./concrete_product_a_two";
import ConcreteProductBTwo from "./concrete_product_b_two";

class ConcreteFactoryTwo implements AbstractFactory {
  public createProductA(): AbstractProductA {
    return new ConcreteProductATwo();
  }

  public createProductB(): AbstractProductB {
    return new ConcreteProductBTwo();
  }
}

export default ConcreteFactoryTwo;
