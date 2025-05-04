import type Builder from "./builder";
import Product from "./product";

class ConcreteBuilder implements Builder {
  private product: Product | null = null;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.product = new Product();
  }

  public producePartA(): void {
    this.product?.parts.push("Part A One");
  }

  public producePartB(): void {
    this.product?.parts.push("Part B One");
  }

  public producePartC(): void {
    this.product?.parts.push("Part C One");
  }

  public getProduct(): Product {
    const result = this.product;

    this.reset();

    return result as Product;
  }
}

export default ConcreteBuilder;
