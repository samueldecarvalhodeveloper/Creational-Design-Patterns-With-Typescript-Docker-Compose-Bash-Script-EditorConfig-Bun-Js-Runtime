import ComponentWithBackReference from "./component_with_back_reference";
import Prototype from "./prototype";

class PrototypeClient {
  private constructor() {}

  public static execute() {
    const prototypeOne = new Prototype();

    prototypeOne.primitive = 245;
    prototypeOne.component = new Date();
    prototypeOne.circularReference = new ComponentWithBackReference(
      prototypeOne,
    );

    const prototypeTwo = prototypeOne.clone();
    if (prototypeOne.primitive === prototypeTwo.primitive) {
      console.log(
        "Primitive Field Values Have Been Carried Over To A Clone. Yay!",
      );
    } else {
      console.log("Primitive Field Values Have Not Been Copied. Booo!");
    }
    if (prototypeOne.component === prototypeTwo.component) {
      console.log("Simple Component Has Not Been Cloned. Booo!");
    } else {
      console.log("Simple Component Has Been Cloned. Yay!");
    }

    if (prototypeOne.circularReference === prototypeTwo.circularReference) {
      console.log("Component With Back Reference Has Not Been Cloned. Booo!");
    } else {
      console.log("Component With Back Reference Has Been Cloned. Yay!");
    }

    if (
      prototypeOne.circularReference.prototype ===
      prototypeTwo.circularReference?.prototype
    ) {
      console.log(
        "Component With Back Reference Is Linked To Original Object. Booo!",
      );
    } else {
      console.log("Component With Back Reference Is Linked To The Clone. Yay!");
    }
  }
}

export default PrototypeClient;
