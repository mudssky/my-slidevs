
---
title: 'classes'
layout: 'center'
---

## classes  

typescript 提供了es2015 class关键字的完全支持



---
title: '类的字段'
level: 2
layout: two-cols
---

#### 字段  Fields
先看最基础的类,空的

```typescript
class Point {}
```
<div v-click>

我们再加点其他成员,添加字段可以写入对应的属性

```typescript
class Point {
  x: number;
  y: number;
}
const pt = new Point();
pt.x = 0;
pt.y = 0;

```
</div>
<div v-click>
字段也可以初始化赋值
```typescript
class Point {
  x = 0
  y = 0
}
const pt = new Point()
// Prints 0, 0
console.log(`${pt.x}, ${pt.y}`)
```
</div>
::right::
 
 <div v-click>
 赋值也同样有类型推断

 ```typescript
const pt = new Point()
pt.x = "0"//Type 'string' is not assignable to type 'number'.
 ```
 </div>

 <div v-click>

**--strictPropertyInitialization**

这个配置项决定类的字段的初始化是否严格检查
默认是开启的，也就是类的字段必须初始化，否则类型检查会报错

比如下面就会报错
```ts
class BadGreeter {
  name: string;
}
```
设置构造器初始化
```ts
class GoodGreeter {
  name: string
  constructor() {
    this.name = 'hello'
  }
}
```
 </div>
---
hideInToc: true
layout: two-cols
---



还有一种情况，你需要在其他地方初始化。可以使用确定赋值断言操作符  
这个操作符表示你一定会进行赋值操作

```ts
class OKGreeter {
  // Not initialized, but no error
  name!: string
}
```

::right:: 
<div v-click>

#### readonly
设置为readonly的字段，不能在构造器以外的地方赋值

```ts
class Greeter {
  readonly name: string = 'world'

  constructor(otherName?: string) {
    if (otherName !== undefined) {
      this.name = otherName
    }
  }

  err() {
    this.name = 'not ok'
  }
}
const g = new Greeter()
g.name = 'also not ok'

export {}
```
 </div>

---
title: '构造器'
level: 2
layout: two-cols
---

#### 构造器 Constructors
类的构造函数，和普通函数差不多，可以类型注释，设置默认值，也可以函数重载  

```ts
class Point {
  x: number
  y: number

  // Normal signature with defaults
  constructor(x = 0, y = 0) {
    this.x = x
    this.y = y
  }
}

class Point {
  // Overloads
  constructor(x: number, y: string);
  constructor(s: string);
  constructor(xs: any, y?: any) {
    // TBD
  }
}
```

::right::

构造函数签名和普通函数签名有两个不同点

- 构造函数不能有类型参数————类型参数应该放在外部类声明
- 构造函数不能有返回类型注释————返回的始终是类的实例类型


<div v-click>

#### super

如果一个类继承自某个基类，需要在构造器中调用`super()`，在使用this获取值之前

```ts
class Base {
  k = 4
}

class Derived extends Base {
  constructor() {
    // Prints a wrong value in ES5; throws exception in ES6
    console.log(this.k)
    super()
  }
}

```
</div>

---
title: '方法'
level: 2
layout: two-cols
---

#### 类的方法 Methods
函数属性在class上面被称为方法

```ts
class Point {
  x = 10
  y = 10

  scale(n: number): void {
    this.x *= n
    this.y *= n
  }
}
export {}

```
方法中必须使用this访问字段和其他方法，不用this的情况访问的是外部的变量。

::right::

<div v-click>

#### getter/setter
存取器  
如果没有get set额外的逻辑的话，没必要设置，可以直接设置字段为public
```ts
class C {
  _length = 0;
  get length() {
    return this._length;
  }
  set length(value) {
    this._length = value;
  }
}
```

typescript中有几条关于存取器的设定
- 如果有get，没有set，那么这个属性会被自动设置为只读
- 如果setter参数的类型没有设置，会从getter的返回值推断
- getter和setter 成员可见度相同

</div>

---
hideInToc: true
layout: two-cols
---

ts4.3版本以后，支持getter和setter有不同的类型

```ts
class Thing {
  _size = 0

  get size(): number {
    return this._size
  }

  set size(value: string | number | boolean) {
    const num = Number(value)

    // Don't allow NaN, Infinity, etc

    if (!Number.isFinite(num)) {
      this._size = 0
      return
    }

    this._size = num
  }
}

```

::right::


<div v-click>

#### 索引签名 Index Signatures


```ts


class MyClass {
  [s: string]: boolean | ((s: string) => boolean)

  check(s: string) {
    return this[s] as boolean
  }
}

```
</div>

---
title: '继承'
level: 2
layout: two-cols
---
### 类的继承 Class Heritage  
和其他有面向对象特性的语言一样，JavaScript支持从基类继承
#### implements
implements 语法，可以帮我们检查一个类是否满足特定的interface  
如果一个类没有正确实现interface就会报错
支持同时实现多个接口，`class C implements A, B {`

```ts
interface Pingable {
  ping(): void
}
class Sonar implements Pingable {
  ping() {
    console.log('ping!')
  }
}
class Ball implements Pingable {
  pong() {
    console.log('pong!')
  }
}
```

::right::
> 注意： implements语法仅仅是检查一个类是否实现了一个接口，不会改变类的类型。



---
hideInToc: true
layout: two-cols
---

#### extends
类可以从一个基类继承,派生类具有基类的所有属性和方法
```ts
class Animal {
  move() {
    console.log('Moving along!')
  }
}

class Dog extends Animal {
  woof(times: number) {
    for (let i = 0; i < times; i++) {
      console.log('woof!')
    }
  }
}

const d = new Dog()
// Base class method
d.move()
// Derived class method
d.woof(3)

```

::right::

<div v-click>
派生类还可以重写基类的字段或属性。可以使用super关键字（`super.`）访问基类的方法  
typescript强制派生类始终是基类的子类型
```ts
class Base {
  greet() {
    console.log("Hello, world!");
  }
}
class Derived extends Base {
  greet(name?: string) {
    if (name === undefined) {
      super.greet();
    } else {
      console.log(`Hello, ${name.toUpperCase()}`);
    }
  }
}
const d = new Derived();
d.greet();
d.greet("reader");
```
</div>

<div v-click>
派生类可以赋值给基类
```ts
const b: Base = d;
b.greet();
```
</div>

---
hideInToc: true
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

如果派生类不遵守基类的约定，就会报错

```ts
class Base {
  greet() {
    console.log('Hello, world!')
  }
}

class Derived extends Base {
  // Make this parameter required
  greet(name: string) {
    console.log(`Hello, ${name.toUpperCase()}`)
  }
}
```


---
title: '成员可见性'
level: 2
layout: two-cols
---

### 成员可见性
typescript可以用于控制特定的方法和属性在类之外是否可见


#### public
默认的类成员可见性为public，声明为public的成员可以在任何地方被访问

```ts
class Greeter {
  public greet() {
    console.log('hi!')
  }
}
const g = new Greeter()
g.greet()
```
因为是默认的，所以不需要显式声明，除非你是为了样式或者可读性。

::right::

<div v-click>

#### protected
protected声明的成员只对子类可见
```ts
class Greeter {
  public greet() {
    console.log('Hello, ' + this.getName())
  }
  protected getName() {
    return 'hi'
  }
}

class SpecialGreeter extends Greeter {
  public howdy() {
    // OK to access protected member here
    console.log('Howdy, ' + this.getName())
  }
}
const g = new SpecialGreeter()
g.greet() // OK
g.getName()
```
</div>

---
hideInToc: true
layout: two-cols
---
#### 暴露protected成员
派生类可以暴露基类的protected成员
下面的代码，相当于把protected成员变成public
```ts
class Base {
  protected m = 10
}
class Derived extends Base {
  // No modifier, so default is 'public'
  m = 15
}
const d = new Derived()
console.log(d.m) // OK

```

::right::

<div v-click>

#### 跨越层级的protected访问
不同OOP语言在通过基类引用访问受保护成员是否合法的问题存在分歧
在Java中这是合法的，C#和C++里是不合法的。
ts里面也是报错的
```ts
class Base {
  protected x = 1
}
class Derived1 extends Base {
  protected x = 5
}
class Derived2 extends Base {
  f1(other: Derived2) {
    other.x = 10
  }
  f2(other: Base) {
    other.x = 10//error
  }
}
```
</div>

---
hideInToc: true
layout: two-cols
---

#### private
private和protected类似，但是不允许从子类访问成员

```ts
class Base {
  private x = 0
}

class Derived extends Base {
  showX() {
    // Can't access in subclasses
    console.log(this.x)
  }
}

const b = new Base()
// Can't access from outside the class
console.log(b.x)
```

> ES2022 推出了#前缀，表示私有变量。

::right::

因为私有成员对派生类并不可见，所以派生类也不能增加它的可见性

```ts
class Base {
  private x = 0
}
class Derived extends Base {
  x = 1
}

```
<div v-click>

#### 跨实例private访问
不同的OOP语言，在这一点表现不同，Java, C#, C++, Swift, 和PHP支持这一点，Ruby不支持  
typescript也允许跨实例private访问


```ts
class A {
  private x = 10

  public sameAs(other: A) {
    // No error
    return other.x === this.x
  }
}
```
</div>

---
hideInToc: true
layout: two-cols
---

#### static
静态成员，可以不进行实例化，通过类本身访问。

```ts
class MyClass {
  static x = 0
  static printX() {
    console.log(MyClass.x)
  }
}
console.log(MyClass.x)
MyClass.printX()

```

也可以使用public，protected，private关键字

```ts
class MyClass {
  private static x = 0
}
console.log(MyClass.x)

```
::right::

静态成员也是可继承的。

```ts
class Base {
  static getGreeting() {
    return 'Hello world'
  }
}
class Derived extends Base {
  myGreeting = Derived.getGreeting()
}

```

> 注意静态属性命名不能使用函数prototype上的，比如name，length，call等，

---
hideInToc: true
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

#### 静态块 static block
静态块可以访问类的所有私有字段，并且不会泄露变量。
可以用写一大段初始化代码。

```ts
class Foo {
  static #count = 0
  get count() {
    return Foo.#count
  }
  static {
    try {
      const lastInstances = loadLastInstances()
      Foo.#count += lastInstances.length
    } catch {}
  }
}
```


---
title: '类的泛型'
level: 2
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---
### 类的泛型

当用new操作符实例化操作的时候，类型参数就和函数一样会进行类型推断。

```ts
class Box<Type> {
  contents: Type
  constructor(value: Type) {
    this.contents = value
  }
}
const b = new Box('hello!')
```
类的泛型约束就类似于接口

<div v-click>

#### 静态成员中的类型参数

静态成员是不能使用类型参数的
```ts
class Box<Type> {
  static defaultValue: Type
  //Static members cannot reference class
  // type parameters.
}

```
</div>

---
title: 'class中的this'
level: 2
layout: two-cols
---
### class中的this
typescript不会改变JavaScript的运行时行为。
js有一些怪异的运行时行为，比如说this

```ts
class MyClass {
  name = 'MyClass'
  getName() {
    return this.name
  }
}
const c = new MyClass()
const obj = {
  name: 'obj',
  getName: c.getName,
}
// Prints "obj", not "MyClass"
console.log(obj.getName())
```
<div v-click>

总结，JavaScript的函数中的this取决于函数是怎么被调用的。  
在这个例子里面，函数被obj对象调用，因此this变成obj  
这种情况一般是不符合预期的，typescript提供了一些方法来避免这些错误。
</div>

::right::

<div v-click>

#### 方法一：箭头函数
箭头函数不会丢失this指向

```ts
class MyClass {
  name = 'MyClass'
  getName = () => {
    return this.name
  }
}
const c = new MyClass()
const g = c.getName
// Prints "MyClass" instead of crashing
console.log(g())
```
但是有以下三点需要注意取舍  

- this的值在运行时也是正确的，即使没有经过typescript检查的代码
- 会使用更多的内存，因为每个类实例都有自己的一份函数拷贝
- 不能在派生类中使用`super.getName`，因为这种方式不能添加到原型链上。


</div>

---
hideInToc: true
layout: two-cols
---

#### 方法二：this参数
在方法或者函数定义里面，名为this的初始形参在TypeScript中有特殊的含义。这些参数在编译期间被删除

```ts
// TypeScript input with 'this' parameter
function fn(this: SomeType, x: number) {
  /* ... */
}
```
```js
// JavaScript output
function fn(x) {
  /* ... */
}
```
typescript会检查带this形参的函数调用是否在正确的上下文下完成。  

我们可以不使用箭头函数，而是在方法定义中添加一个this参数，以静态地强制正确地调用方法

::right::

```ts
class MyClass {
  name = 'MyClass'
  getName(this: MyClass) {
    return this.name
  }
}
const c = new MyClass()
// OK
c.getName()

// Error, would crash
const g = c.getName
console.log(g())

```
这种方式取舍的点与箭头函数相反

- js调用者仍然可能在没有意识到的情况下错误使用方法
- 每个类只分配一个函数，而不是每个类实例分配一个函数
- 基类方法能用`super`调用

---
hideInToc: true
layout: two-cols
---

#### this 的类型
在类中，名为this的特殊类型能动态引用当前类的类型

```ts
class Box {
  contents = ''
  set(value: string) {
    this.contents = value
    return this
  }
}

class ClearableBox extends Box {
  clear() {
    this.contents = ''
  }
}
const a = new ClearableBox()
const b = a.set('hello')
```

::right::

<div v-click>

你也可以用this做类型注解  
下面的例子，在派生类的时候，sameAs将只接受派生类的实例
```ts
class Box {
  content = ''
  sameAs(other: this) {
    return other.content === this.content
  }
}


class DerivedBox extends Box {
  otherContent = '?'
}

const base = new Box()
const derived = new DerivedBox()
derived.sameAs(base)//Error
```
</div>

---
hideInToc: true
layout: two-cols
---

#### 基于this的类型守卫
可以在类和接口的返回值位置，使用`this is`语法，指定this的类型。配合if进行类型收窄

```ts
class FileSystemObject {
  isFile(): this is FileRep {
    return this instanceof FileRep
  }
  isDirectory(): this is Directory {
    return this instanceof Directory
  }
  isNetworked(): this is Networked & this {
    return this.networked
  }
  constructor(public path: string, 
              private networked: boolean) {}
}
class FileRep extends FileSystemObject {
  constructor(path: string, public content: string) {
    super(path, false)
  }
}
class Directory extends FileSystemObject {
  children: FileSystemObject[] = []
}
interface Networked {
  host: string
}
```
::right::

```ts
const fso: FileSystemObject = new FileRep('foo/bar.txt', 'foo')
if (fso.isFile()) {
  fso.content
} else if (fso.isDirectory()) {
  fso.children
} else if (fso.isNetworked()) {
  fso.host
}
```
<div v-click>
基于this的类型守卫的一个常见用例就是对特定字段惰性验证。

```ts
class Box<T> {
  value?: T

  hasValue(): this is { value: T } {
    return this.value !== undefined
  }
}
const box = new Box()
box.value = 'Gameboy'
if (box.hasValue())
  console.log(box.value)
} else {
  console.log('is undefined')
}

```
</div>

---
title: '参数属性'
level: 2
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---
#### 参数属性 Parameter Properties

TypeScript提供了特殊的语法来将构造函数参数转换为具有相同名称和值的类属性。  
这些被称为参数属性，通过在构造函数参数前加上可见性修饰符public、private、protected或readonly之一来创建。结果字段会得到这些修饰符

```ts
class Params {
  constructor(
    public readonly x: number,
    protected y: number,
    private z: number
  ) {
    // No body necessary
  }
}
const a = new Params(1, 2, 3)
console.log(a.x)
console.log(a.z)
```

---
title: '类表达式'
level: 2
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---
#### 类表达式
类表达式与类声明非常相似。唯一真正的区别是类表达式不需要名称，尽管我们可以通过它们最终绑定的任何标识符来引用它们

```ts
const someClass = class<Type> {
  content: Type
  constructor(value: Type) {
    this.content = value
  }
}

const m = new someClass('Hello, world')

```



---
title: '抽象类和抽象成员'
level: 2
layout: two-cols
---

### 抽象类和抽象成员
typescript中的类，方法，字段都可能是抽象的
抽象方法或抽象字段是没有提供实现的方法。这些成员必须存在于不能直接实例化的抽象类中。  
抽象类的作用是作为实现所有抽象成员的子类的基类。当一个类没有任何抽象成员时，它被称为具体的（concrete）类。

```ts
abstract class Base {
  abstract getName(): string
  printName() {
    console.log('Hello, ' + this.getName())
  }
}
class Derived extends Base {
  getName() {
    return 'world'
  }
}
const b = new Base()
const d = new Derived()
```
类似于实现接口，继承抽象类的情况不实现抽象类的方法就会报错

::right::

<div v-click>

#### 抽象构建签名
有时您希望接受某个类构造函数，该函数生成派生自某个抽象类的类的实例。

```ts
// function greet(ctor: typeof Base) {
//   const instance = new ctor()

//   instance.printName()
// }

function greet(ctor: new () => Base) {
  const instance = new ctor()
  instance.printName()
}
greet(Derived)
greet(Base)
```
</div>

---
title: '类之间的关系'
level: 2
layout: two-cols
---
#### 类之间的关系
在大多数情况，typescript中的类是比较结构，和别的类型是一样的方式
举个例子，下面两个类是可以互相替代的。
```ts
class Point1 {
  x = 0
  y = 0
}
class Point2 {
  x = 0
  y = 0
}
const p: Point1 = new Point2()// OK

```
类似的，子类型的关系，即使没有显式继承也是存在的。

```ts
class Person {
  name: string
  age: number
}
class Employee {
  name: string
  age: number
  salary: number
}
const p: Person = new Employee()// OK

```

::right::
空类的情况，任何其他类型都能替代
```ts
class Empty {}

function fn(x: Empty) {
  // can't do anything with 'x', so I won't
}

// All OK!
fn(window)
fn({})
fn(fn)
```