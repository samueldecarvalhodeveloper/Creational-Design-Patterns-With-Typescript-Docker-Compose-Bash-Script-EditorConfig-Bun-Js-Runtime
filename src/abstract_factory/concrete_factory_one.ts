import type AbstractFactory from "./abstract_factory";
import type AbstractProductA from "./abstract_product_a";
import type AbstractProductB from "./abstract_product_b";
import ConcreteProductAOne from "./concrete_product_a_one";
import ConcreteProductBOne from "./concrete_product_b_one";

class ConcreteFactoryOne implements AbstractFactory {
  public createProductA(): AbstractProductA {
    return new ConcreteProductAOne();
  }

  public createProductB(): AbstractProductB {
    return new ConcreteProductBOne();
  }
}

export default ConcreteFactoryOne;
