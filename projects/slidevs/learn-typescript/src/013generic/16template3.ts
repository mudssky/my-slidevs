type PropEventSource<Type> = {
  on(
    eventName: `${string & keyof Type}Changed`,
    callback: (newValue: any) => void
  ): void
}

// type PropEventSource<Type> = {
//   on<Key extends string & keyof Type>(
//     eventName: `${Key}Changed`,
//     callback: (newValue: Type[Key]) => void
//   ): void
// }
declare function makeWatchedObject<Type>(
  obj: Type
): Type & PropEventSource<Type>

const person = makeWatchedObject({
  firstName: 'Saoirse',
  lastName: 'Ronan',
  age: 26,
})

person.on('firstNameChanged', (newName) => {
  console.log(`new name is ${newName.toUpperCase()}`)
})

export {}
