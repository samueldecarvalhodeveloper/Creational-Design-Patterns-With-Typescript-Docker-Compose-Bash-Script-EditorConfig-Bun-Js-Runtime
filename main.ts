import FactoryMethodClient from "./src/factory_method/factory_method_client";
import AbstractFactoryClient from "./src/abstract_factory/abstract_factory_client";
import BuilderClient from "./src/builder/builder_client";
import PrototypeClient from "./src/prototype/prototype_client";
import SingletonClient from "./src/singleton/singleton_client";

console.log("Factory Method:");

console.log();

FactoryMethodClient.execute();

console.log();

console.log("Abstract Factory:");

console.log();

AbstractFactoryClient.execute();

console.log();

console.log("Builder:");

console.log();

BuilderClient.execute();

console.log();

console.log("Prototype:");

console.log();

PrototypeClient.execute();

console.log();

console.log("Singleton:");

console.log();

SingletonClient.execute();
