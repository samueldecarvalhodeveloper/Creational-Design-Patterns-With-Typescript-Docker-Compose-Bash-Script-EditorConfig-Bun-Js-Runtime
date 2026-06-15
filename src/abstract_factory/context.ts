import type AbstractFactory from "./abstract_factory";

class Context {
  private constructor() {}

  public static execute(factory: AbstractFactory) {
    const productA = factory.createProductA();
    const productB = factory.createProductB();

    console.log(productB.usefulFunctionB());
    console.log(productB.anotherUsefulFunctionB(productA));
  }
}

export default Context;
