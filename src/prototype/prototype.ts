import type ComponentWithBackReference from "./component_with_back_reference";

class Prototype {
  public primitive: any;

  public component: object | null = null;

  public circularReference: ComponentWithBackReference | null = null;

  public clone(): this {
    const clone = Object.create(this);

    clone.component = Object.create(this.component);

    clone.circularReference = {
      ...this.circularReference,
      prototype: { ...this },
    };

    return clone;
  }
}

export default Prototype;
