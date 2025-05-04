import ConcreteBuilder from "./concrete_builder";
import type Director from "./director";

class Context {
  private constructor() {}

  public static execute(director: Director) {
    const builder = new ConcreteBuilder();

    director.setBuilder(builder);

    console.log("Standard Basic Product:");

    director.buildMinimalViableProduct();

    builder.getProduct().listParts();

    console.log("Standard Full Featured Product:");

    director.buildFullFeaturedProduct();

    builder.getProduct().listParts();

    console.log("Custom Product:");

    builder.producePartA();

    builder.producePartC();

    builder.getProduct().listParts();
  }
}

export default Context;
