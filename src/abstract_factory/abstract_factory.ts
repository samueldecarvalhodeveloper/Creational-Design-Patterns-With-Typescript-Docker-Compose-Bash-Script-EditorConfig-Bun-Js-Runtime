import type AbstractProductA from "./abstract_product_a";
import type AbstractProductB from "./abstract_product_b";

export default interface AbstractFactory {
  createProductA(): AbstractProductA;

  createProductB(): AbstractProductB;
}
