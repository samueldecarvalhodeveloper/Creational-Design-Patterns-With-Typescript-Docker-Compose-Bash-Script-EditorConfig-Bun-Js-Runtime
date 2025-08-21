import ConcreteCreatorOne from "./concrete_creator_one";
import ConcreteCreatorTwo from "./concrete_creator_two";
import Context from "./context";

class FactoryMethodClient {
  private constructor() {}

  public static execute() {
    const concreteCreatorOne = new ConcreteCreatorOne();
    const concreteCreatorTwo = new ConcreteCreatorTwo();

    console.log("App: Launched With The Concrete Creator One.");

    Context.execute(concreteCreatorOne);

    console.log();

    console.log("App: Launched With The Concrete Creator Two.");

    Context.execute(concreteCreatorTwo);
  }
}

export default FactoryMethodClient;
