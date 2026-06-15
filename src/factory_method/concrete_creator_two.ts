import ConcreteProductTwo from "./concrete_product_two";
import Creator from "./creator";
import type Product from "./product";

class ConcreteCreatorTwo extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProductTwo();
  }
}

export default ConcreteCreatorTwo;
