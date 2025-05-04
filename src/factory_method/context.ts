import type Creator from "./creator";

class Context {
  private constructor() {}

  public static execute(creator: Creator) {
    console.log(
      "Client: I Am Not Aware Of The Creator's Class, But It Still Works.",
    );

    console.log(creator.someOperation());
  }
}

export default Context;
