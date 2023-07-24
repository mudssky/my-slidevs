//移除 readonly属性
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property]
}
type LockedAccount = {
  readonly id: string
  readonly name: string
}
type UnlockedAccount = CreateMutable<LockedAccount>
/*{
    id: string;
    name: string;
}*/
