// type ToArray<Type> = Type extends any ? Type[] : never;
// type StrArrOrNumArr = ToArray<string | number>;

type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never
type StrArrOrNumArr = ToArrayNonDist<string | number>
//(string | number)[]
export {}
