/* eslint-disable no-unused-vars */

import type AbstractProductA from "./abstract_product_a";

export default interface AbstractProductB {
  usefulFunctionB(): string;

  anotherUsefulFunctionB(collaborator: AbstractProductA): string;
}
