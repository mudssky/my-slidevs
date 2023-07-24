// type Flatten<T> = T extends any[] ? T[number] : T
type Flatten<Type> = Type extends Array<infer Item> ? Item : Type

type s = Flatten<string[]>
type n = Flatten<number>

export {}
