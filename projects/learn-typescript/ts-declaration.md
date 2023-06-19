

---
title: '声明文件'
layout: 'center'
---
## 声明文件
最常见的使用声明文件的情况是导入一个没有类型的npm包。  
声明文件的文件名以`.d.ts`结尾，默认解析的目录是项目的根目录，  
可以在tsconfig中配置typeRoot进行配置。

---
title: '声明参考'
level: 2
layout: two-cols
---

#### 1.带属性的对象

```typescript

const result = myLib.makeGreeting('hello, world')
console.log('The computed greeting is:' + result)
const count = myLib.numberOfGreetings

```

```typescript
declare namespace myLib {
  function makeGreeting(s: string): string;
  let numberOfGreetings: number;
}
```
<div v-click>

#### 2.函数重载

```typescript
const x: Widget = getWidget(43)
const arr: Widget[] = getWidget('all of them')
export {}

```

```typescript
declare function getWidget(n: number): Widget
declare function getWidget(s: string): Widget[]
type Widget = any

```
</div>

::right::

<div v-click>  

#### 3.重用类型(interface)  

```typescript
greet({
  greeting: 'hello world',
  duration: 4000,
})
export {}

```

```typescript
interface GreetingSettings {
  greeting: string
  duration?: number
  color?: string
}
declare function greet(setting: GreetingSettings): void
```
</div>

<div v-click>

#### 4.重用类型(type alias)  

```typescript
function getGreeting() {
  return 'howdy'
}
class MyGreeter {}
greet('hello')
greet(getGreeting)
greet(new MyGreeter())

```
```typescript
type GreetingLike = string | (() => string) | MyGreeter
declare function greet(g: GreetingLike): void
```
</div>



---
hideInToc: true
layout: two-cols
---
#### 5.组织类型
命名空间可以用于组织类型
```typescript
const g = new Greeter("Hello");
g.log({ verbose: true });
g.alert({ modal: false, title: "Current Greeting" });

```

```typescript
declare namespace GreetingLib {
  interface LogOptions {
    verbose?: boolean;
  }
  interface AlertOptions {
    modal: boolean;
    title?: string;
    color?: string;
  }
}

declare class Greeter {
  constructor(greeting: string)
  greeting: string
  showGreeting(): void
  log(logOption: GreetingLib.LogOptions)
  alert(alertOption: GreetingLib.AlertOptions)
}

```

::right::

命名空间也可以嵌套使用

```typescript
declare namespace GreetingLib.Options {
  // Refer to via GreetingLib.Options.Log
  interface Log {
    verbose?: boolean;
  }
  interface Alert {
    modal: boolean;
    title?: string;
    color?: string;
  }
}
```

---
hideInToc: true
layout: two-cols
---
#### 6.Class

```typescript

const myGreeter = new Greeter("hello, world");
myGreeter.greeting = "howdy";
myGreeter.showGreeting();
class SpecialGreeter extends Greeter {
  constructor() {
    super("Very special greetings");
  }
}
```

```typescript
declare class Greeter {
  constructor(greeting: string);
  greeting: string;
  showGreeting(): void;
}

```

::right::

<div v-click>

#### 7.全局变量

```typescript
console.log('Half the number of widgets is ' + fooo / 2)

```


```typescript
declare const fooo: number

```
</div>
<div v-click>

#### 8.全局函数

```typescript
greet("hello, world")
```

```typescript
declare function greet(greeting: string): void
```
</div>

---
title: '使用准则'
level: 2
layout: two-cols
---
## 使用准则
#### 1.类型的使用
❌ Number，String，Boolean，Symbol，Object
不要使用这些大写的类型，因为他们不是原始类型，很难被正确使用
```ts
function reverse(s: String): String;/* WRONG */
```
✅使用小写的这些类型number, string, boolean, symbol
```ts
function reverse(s: string): string;
```
Object也建议使用object替代

<div v-click>

#### 2.泛型
❌ 不要在用不到类型参数的时候使用泛型[TS FAQ](https://github.com/Microsoft/TypeScript/wiki/FAQ#why-doesnt-type-inference-work-on-this-interface-interface-foot--)  
❌ 不要把any作为一个类型，除非你是在迁移JavaScript代码到typescript，
因为编译器碰到any就不会进行类型检查，相当于你在变量使用的地方加上ts-ignore注释  

✅当你不知道要接受的类型，或者想接受任意类型的时候，用unknown代替

</div>

::right::
<div v-click>

#### 3.回调函数类型:返回值类型
❌ 在不需要返回值的函数上，不要使用any类型
```ts
/* WRONG */
function fn(x: () => any) {
  x();
}
```
✅使用void可以防止你不小心使用回调函数的返回值。
```ts
/* OK */
function fn(x: () => void) {
  x();
}
```
</div>


---
hideInToc: true
layout: two-cols
---

#### 4.回调函数类型:回调函数中的可选参数

❌ 回调函数中不要使用可选参数，除非你明白这么做的意义。
```ts
/* WRONG */
interface Fetcher {
  getObject(done: (data: unknown, elapsedTime?: number) 
                                          => void): void;
}
```

上面的可选参数意味着done可以用一个参数调用，也可以用两个参数调用。
（可选参数的情况，你少写参数编辑器不会报错）

✅ 回调参数应该是非可选参数
```ts
/* OK */
interface Fetcher {
  getObject(done: (data: unknown, elapsedTime: number) 
                                            => void): void;
}
```

::right::

<div v-click>

#### 5.重载和回调
❌ 不要分开只有回调函数参数数量不同的重载
```ts
/* WRONG */
declare function beforeAll(action
                    : () => void, timeout?: number): void;
declare function beforeAll(
  action: (done: DoneFn) => void,
  timeout?: number
): void;
```
✅应该只写一个参数更多的重载
```ts
/* OK */
declare function beforeAll(
  action: (done: DoneFn) => void,
  timeout?: number
): void;
```

因为无视回调参数是合法的，不需要提供短的重载。
</div>

---
hideInToc: true
layout: two-cols
---
#### 6.函数重载:排序
❌ 不要把更通用的重载放在更特定的重载前面
```ts
/* WRONG */
declare function fn(x: unknown): unknown;
declare function fn(x: HTMLElement): number;
declare function fn(x: HTMLDivElement): string;
var myElem: HTMLDivElement;
var x = fn(myElem); // x: unknown, wat?

```
✅需要把更通用的函数签名放在更具体的函数签名的后面
```ts
/* OK */
declare function fn(x: HTMLDivElement): string;
declare function fn(x: HTMLElement): number;
declare function fn(x: unknown): unknown;
var myElem: HTMLDivElement;
var x = fn(myElem); // x: string, :)
```

> 因为typescript 会选择第一个匹配的重载，所以当第一个匹配的重载更通用的时候，后续更具体的重载就不能被调用


::right::

<div v-click>

#### 7.函数重载:使用可选参数

❌ 不要写只有尾部参数不同的函数重载
```ts
/* WRONG */
interface Example {
  diff(one: string): number;
  diff(one: string, two: string): number;
  diff(one: string, two: string, three: boolean): number;
}
```
✅使用可选参数

```ts
/* OK */
interface Example {
  diff(one: string, two?: string, three?: boolean): number;
}
```
</div>

---
hideInToc: true
layout: two-cols
---

这有两个原因
- TypeScript通过查看目标的任何签名是否可以用源的参数调用来解决签名兼容性问题。  
例如，只有使用可选参数正确编写签名时，此代码才会暴露错误

```ts
function fn(x: (a: string, b: number, c: number) => void) {}
var x: Example;
// When written with overloads, OK -- used first overload
// When written with optionals, correctly an error
fn(x.diff);
```
::right::

- 第二个原因是当使用者使用TypeScript的严格空检查特性时。因为未指定的参数在JavaScript中显示为undefined，所以通常可以将undefined显式传递给带有可选参数的函数。例如，这段代码在严格为空的情况下应该是可以的

```ts
var x: Example;
// When written with overloads, incorrectly an error 
// because of passing 'undefined' to 'string'
// When written with optionals, correctly OK
x.diff("something", true ? undefined : "hour");
```

---
hideInToc: true
layout: two-cols
---

#### 8. 使用联合类型

❌ 函数参数只有一个位置类型不同的地方不要使用重载
```typescript
/* WRONG */
interface Moment {
  utcOffset(): number;
  utcOffset(b: number): Moment;
  utcOffset(b: string): Moment;
}

```
✅ 使用联合类型

```ts
/* OK */
interface Moment {
  utcOffset(): number;
  utcOffset(b: number | string): Moment;
}
```
这里我们没有将b变成可选的，因为返回值的类型不同





---
title: 'Triple-Slash Directives'
level: 2
layout: two-cols
---

### Triple-Slash Directives 
三斜线指令，是一种单行注释，里面包含了一个xml标签，注释的内容作为编译器指令  
三斜线指令**只在文件的顶部有效**，三斜线指令之前只能有单行或多行注释，包括其他三斜线指令  
如果在语句或声明之后遇到它们，则将它们视为常规的单行注释，没有特殊含义。

#### 1. `/// <reference path="..." />`

`/// <reference path="..." />` 这个指令是最常用的，表示声明文件的依赖
指示编译器在编译过程中引入其他文件
当使用--out或--outFile时，它也可以做为调整输出内容顺序的一种方法。 文件在输出文件内容中的位置与经过预处理后的输入顺序一致。

`--noResolve`
开启这个选项的时候，三斜线reference会被忽略

::right::

#### 2. `/// <reference types="..." />`

声明包(package)的依赖

比如 `/// <reference types="node" />`,表示你导入这个声明文件`@types/node/index.d.ts`
仅当在你需要写一个d.ts文件时才使用这个指令。

#### 3. `/// <reference lib="..." />`

这个指令允许一个文件显式地包含一个现有的内置lib文件。  
引用内置的lib文件的方式与tsconfig中的lib编译器选项相同。Json(例如使用lib="es2015"而不是lib="lib.es2015.d.ts"等)。

举个例子 `/// <reference lib="es2017.string" />`等同于编译时开启`--lib es2017.string`


#### 4. `/// <reference no-default-lib="true"/>`
这个指令把一个文件标记成默认库。 你会在 lib.d.ts文件和它不同的变体的顶端看到这个注释。
这个指令告诉编译器在编译过程中不要包含这个默认库（比如，lib.d.ts）。 这与在命令行上使用 --noLib相似。

还要注意，当传递了--skipDefaultLibCheck时，编译器只会忽略检查带有`/// <reference no-default-lib="true"/>`的文件。


---
hideInToc: true
layout: two-cols
---


#### 5. `/// <amd-module />`
默认情况下生成的AMD模块都是匿名的。 但是，当一些工具需要处理生成的模块时会产生问题，比如 r.js。

amd-module指令允许给编译器传入一个可选的模块名：

amdModule.ts
```ts
///<amd-module name='NamedModule'/>
export class C {
}
```
结果：

```typescript
define("NamedModule", ["require", "exports"], 
          function (require, exports) {
  var C = (function () {
    function C() {}
    return C;
  })();
  exports.C = C;
});
```
::right::

#### 6.`/// <amd-dependency />`

> 注意：这个指令被废弃了。使用import "moduleName";语句代替。



---
title: '忽略类型检查的方法'
level: 2
layout: two-cols
---
### 忽略类型检查的方法

- 忽略下面一行 `// @ts-ignore ` 
- 放在文件开头，忽略整个文件 `// @ts-nocheck` ts3.7