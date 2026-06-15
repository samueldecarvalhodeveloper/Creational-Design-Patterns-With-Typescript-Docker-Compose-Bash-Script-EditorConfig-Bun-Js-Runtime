import type Product from "./product";

abstract class Creator {
  public abstract factoryMethod(): Product;

  public someOperation(): string {
    const product = this.factoryMethod();

    return `Creator: The Same Creator's Code Has Just Worked With ${product.operation()}`;
  }
}

export default Creator;
