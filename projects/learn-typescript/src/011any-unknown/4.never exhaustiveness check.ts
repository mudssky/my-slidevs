type Foo = string | number
// type Foo = string | number|boolean
export function controlFlowAnalysisWithNever(foo: Foo) {
  if (typeof foo === 'string') {
    // 这里 foo 被收窄为 string 类型
  } else if (typeof foo === 'number') {
    // 这里 foo 被收窄为 number 类型
  } else {
    // foo 在这里是 never
    const check: never = foo
    return check
  }
}

// type A='A'
// type B='B'
// type C = A&B
