import Singleton from "./singleton";

class SingletonClient {
  private constructor() {}

  public static execute() {
    const singletonOne = Singleton.getInstance();
    const singletonTwo = Singleton.getInstance();

    if (singletonOne === singletonTwo) {
      console.log("Singleton Works, Both Variables Contain The Same Instance.");
    } else {
      console.log("Singleton Failed, Variables Contain Different Instances.");
    }
  }
}

export default SingletonClient;
