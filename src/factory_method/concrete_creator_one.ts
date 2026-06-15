import ConcreteProductOne from "./concrete_product_one";
import Creator from "./creator";
import type Product from "./product";

class ConcreteCreatorOne extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProductOne();
  }
}

export default ConcreteCreatorOne;
