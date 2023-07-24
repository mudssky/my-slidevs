type Getters<Type> = {
  [Property in keyof Type as `get${Capitalize<
    string & Property
  >}`]: () => Type[Property]
}
interface Person {
  name: string
  age: number
  location: string
}
type LazyPerson = Getters<Person>
/* {
    getName: () => string;
    getAge: () => number;
    getLocation: () => string;
}*/
export {}
