import Context from "./context";
import Director from "./director";

class BuilderClient {
  private constructor() {}

  public static execute() {
    const director = new Director();

    Context.execute(director);
  }
}

export default BuilderClient;
