import ConcreteFactoryOne from "./concrete_factory_one";
import ConcreteFactoryTwo from "./concrete_factory_two";
import Context from "./context";

class AbstractFactoryClient {
  private constructor() {}

  public static execute() {
    const concreteFactoryOne = new ConcreteFactoryOne();
    const concreteFactoryTwo = new ConcreteFactoryTwo();

    console.log("Client: Testing Client Code With The First Factory Type...");

    Context.execute(concreteFactoryOne);

    console.log();

    console.log(
      "Client: Testing The Same Client Code With The Second Factory Type...",
    );

    Context.execute(concreteFactoryTwo);
  }
}

export default AbstractFactoryClient;
