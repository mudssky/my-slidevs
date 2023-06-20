---
theme: default
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
drawings:
  persist: false
css: unocss
# download: true
record: dev
hideInToc: true
title: TypeScript 快速上手
---

# TypeScript 快速上手



<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/slidevjs/slidev" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
hideInToc: true
---

## 目录

<Toc columns="4" />


---
title: 什么是typescript?
level: 1
---

## 什么是typescript?

<h3> TypeScript is <strong>JavaScript with syntax for types</strong>.</h3>
<p class="sub-title">TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.</p>

[typescript 官网](https://www.typescriptlang.org/)  

<v-click>

typescript是JavaScript的超集，增加了类型（变成强类型语言）和一些扩展语法（枚举，泛型，命名空间，面向对象的扩展等）。

</v-click>

<v-click>

### typescript 的作用

</v-click>


<v-clicks>

1. 提供静态类型检查，可以在编译阶段发现错误。
2. 有更好的代码提示，有类型的代码可读性更高
3. 可以使用最新的JavaScript特性，比如 可选链语法(ES2020)
4. 扩展语法，特别是面向对象的扩展，比如抽象类，public,private各种修饰符，函数方面也有，比如函数重载。

</v-clicks>


<!--
You can have `style` tag in markdown to override the style for the current page.
Learn more: https://sli.dev/guide/syntax#embedded-styles
-->

<style>
h2{
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}

</style>


---
title: typescript学习环境搭建
level: 1
layout: default
---

## typescript学习环境搭建  
<br/>  

<div v-click>  

### 安装ts  
```shell
npm init -y
```
安装typescript开发依赖
```shell
npm install typescript  --save-dev
```
然后我们需要创建tsconfig 配置文件,执行下面的命令就会自动创建一个

```shell
npx tsc --init
```
</div>
<div v-click>

### 安装ts-node  

ts-node是可以直接执行ts的node引擎。  
```shell
npm install ts-node  --save-dev
```
或者也可以用deno
</div>


---
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
title: typescript 原始类型
level: 1
---

## typescript 原始类型(Primitive Type)  
也就是js的7种原始类型。

```ts
const a: string = 'hello'
const b: boolean = true
const c: number = 111
const d: bigint = 120000983300012345090n
const e: null = null
const f: undefined = undefined
const h: symbol = Symbol('测试')
console.log({a,b,c,d,f,h,})

```
<v-click>

```shell
{
  a: 'hello',
  b: true,
  c: 111,
  d: 120000983300012345090n,
  e: null,
  f: undefined,
  h: Symbol(测试)
}

```
</v-click>

<style>
.footnotes-sep {
  @apply mt-20 opacity-10;
}
.footnotes {
  @apply text-sm opacity-75;
}
.footnote-backref {
  display: none;
}
</style>

---
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
title: 字面类型
level: 1
---

## 字面类型 Literal Types
特定的数字Number和字符串String也能作为类型
```ts
let x: "hello" = "hello"
x = "hello"//ok
x='world'//error
```

---
layout: default
title: 模块
level: 1
---

## 模块

### 模块作用域

<v-click>

Typescript的模块和JavaScript(ecma2015)一样,任何包含顶级`import`或者`export`的文件都被当成一个模块.  
相反地，如果一个文件不带有顶级的`import`或者`export`声明，那么它的内容被视为全局可见的（因此对模块也是可见的）。

</v-click>

<v-click>

```typescript
// 可以用一个自启动函数创建隔离的作用域
;(function () {
  const a = 123
})()
```

</v-click>

<br/>

<v-click>

```typescript
const a=123
// 即使导出一个空对象，也会被当作一个模块，变量不会和其他文件产生冲突
export {}

```

</v-click>


---
layout: two-cols
title: 导入和导出
level: 2
---

### 导入和导出

<div class="left">

<v-click>

1. 导出多项   
```typescript
export const name='zhangsan'
export const age=12
export type Cat = { breed: string;
                   yearOfBirth: number }//导出类型
```  
```typescript
//可以改名,集中导出可读性好.
export {name as username,age}
```

</v-click>

<v-click>

2. 默认导出,
只能有一个默认导出,集中导出,导出时不能改名

```ts
export default {name,age}
```

</v-click>

<v-click>

3. 重新导出
`export * from "module"`  
可以在一个模块里面把其他模块的导出集中起来

```typescript
export * from "./StringValidator"; 
export * from "./LettersOnlyValidator"; 
export * from "./ZipCodeValidator"; 
```

</v-click>


</div>

::right::

<v-click>

1. 导入指定项  可以重命名,集中导入可读性好  
```typescript
import {name as username,age} from '模块的相对路径'
import type { APIResponseType } from "./api"//导入类型 ts3.8
import { createCatName, type Cat, type Dog } from "./animal.js";//ts4.5
```
</v-click>
<v-click>

2. 将整个模块导入一个变量，通过它来访问模块的导出部分

```typescript
import * as React from 'react'
React.useState
```
</v-click>

<v-click>

3. 导入默认导出的模块

```typescript
import React from 'react';
// 可以重命名
import Jquery from 'react'
```
</v-click>

<v-click>

4. 具有副作用的导入模块  
尽管不推荐这么做，一些模块会设置一些全局状态供其它模块使用。 这些模块可能没有任何的导出或用户根本就不关注它的导出。 

```ts
import "./side-effect.js";
```

</v-click>

<style>
  .slidev-vclick-prior{
    margin-bottom:5px;
  }
</style>

---
title: '类型别名和接口'
level: 1
layout: two-cols
---

### 类型别名 Type Alias

```ts
type Point = {
  x: number
  y: number
}

type SetPoint = (x: number, y: number) => void

```



### 接口 Interface  

```ts
interface Point {
  x: number
  y: number
}

interface SetPoint {
  (x: number, y: number): void
}


```
::right::  

### 区别
作为定义类型的两种方式，主要有以下区别
<v-clicks>

1. 接口可以定义多次,会被合并 
2. 接口只能定义对象类型  

</v-clicks>

<div v-click>

接口多次定义的示例:
```ts

interface Point { x: number; }
interface Point { y: number; }
const point: Point = { x: 1, y: 2 };

```

</div>


---
layout: image-left
image: https://source.unsplash.com/collection/94734566/1920x1080
title: 对象
---

## 对象 Object

对象类型可以是匿名的
```ts
function greet(person: { name: string
                        age: number }) {
  return "Hello " + person.name;
}

```
也可以用接口或者类型别名

```ts
interface Person {
  name: string;
  age: number;
}
 
```
```ts
type Person = {
  name: string;
  age: number;
};
```


---
title: 鸭式辨型法
level: 2
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---
### 鸭式辨型法

具有鸭子特征的认为它就是鸭子  

ts只会检查那些必须的属性是否存在来匹配类型

```ts
interface LabeledValue {
  label: string;
}
function printLabel(labeledObj: LabeledValue) {
  console.log(labeledObj.label);
}
const myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj); // OK

printLabel({ size: 10, 
            label: "Size 10 Object" }); // Error

```
<div v-click>

`printLabel({ size: 10, label: "Size 10 Object" })`函数传参是直接赋值，所以严格检查  

`printLabel(myObj)` 是两种类型赋值，按照鸭式辨型法认定为相同。
</div>


---
layout: two-cols
title: Object,object,和{}
level: 2
---

### Object,object,和{}
object类型可以接受函数,对象,数组,可以接收除了原始类型以外的其他类型  

<div v-click>

```typescript 
const foo: object = function () {}
const obj: object = { foo: 123 }
const obj2: object = [1, 2, 3]

console.log({foo, obj1, obj2})
```
</div>

<div v-click>

```shell
{ 
  foo: [Function: foo], 
  obj1: { foo: 123 },
  obj2: [ 1, 2, 3 ] 
 }
```
</div>

::right::
<div v-click>
Object和{} 不建议使用
因为这两个类型十分宽泛，除了对象还能接受原始类型

String, Number, Boolean这几个也不建议使用，
用string,number,boolean代替
</div>


---
title: 属性修饰符
layout: two-cols
level: 2
---

### 属性修饰符  Property Modifiers
对象中的每个属性可定义下面几件事，类型，是否必须，是否能写入
#### 可选属性 Optional Properties

接口里的属性不全都是必需的。 有些是只在某些条件下存在，或者根本不存在.  


```ts
interface Person {
  name: string
  age?: number
}

```
::right::
#### 只读属性 `readonly`Properties
一些对象属性只能在对象刚刚创建的时候修改其值。 你可以在属性名前用 readonly来指定只读属性
```ts
interface Point {
    x: number;
    readonly y: number;
}
```


---
title: '索引签名'
level: 2
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

### 索引签名 index signature
如果不能提前知道所有的属性名，但是知道值的类型
可以使用下面这种索引签名语法  
索引签名属性类型只能是字符串或数字

```ts
interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}

interface StringArray {
  [index: number]: string;
}

```


---
title: 联合类型和交叉类型
level: 2
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

### 联合类型(Union Type) 
联合类型表示取值可以为多种类型中的一种，使用`|` 分隔每个类型

```ts
type Size= "small"|"medium"|"large"
// React.Key   number|string
```

### 交叉类型(Intersection Types)
一种 合并/扩展类型的方式

交叉类型主要还是用于接口的扩展，  
不存在的交叉类型，比如string&number，会被判断成never
```ts

type Loaction = {x:number}&{y:number}
// {x:number,y:number}

```

---
layout: two-cols
title: ' 类型扩展'
level: 2
---

### 类型扩展

接口可以用extends语法扩展
类型别名和接口之间可以用交叉类型& 语法扩展

<div v-click>

#### 1.接口扩展接口

```ts
interface PointX {
    x: number
}
interface Point extends PointX {
    y: number
}

```
</div>


<div v-click>

#### 2.类型别名扩展类型别名

```ts
type PointX = {
    x: number
}
type Point = PointX & {
    y: number
}

```
</div>

::right::

<div v-click>

#### 3.接口扩展类型别名

```ts
type PointX = {
    x: number
}
interface Point extends PointX {
    y: number
}

```
</div>

<div v-click>

#### 4.类型别名扩展接口

```ts
interface PointX {
    x: number
}
type Point = PointX & {
    y: number
}

```

<Link to="19" class="absolute right-5 bottom-5">--->数组和元组</Link>

</div>


---
title: 对象的泛型
level: 2
layout: two-cols
---

### 泛型
假设一个包含许多类型的box类型
```ts
interface Box {
  contents: any;
}

```

上面的contents设为any，这会导致类型检查失效  
如果我们改为unknown类型，需要在使用前进行类型判断和断言  
有一种类型安全的方法，就是给每种类型都定义一个interface

```ts
interface NumberBox {
  contents: number;
}
interface StringBox {
  contents: string;
}
interface BooleanBox {
  contents: boolean;
}

```


::right::

<div v-click>

这样我们就要写很多重载函数。。。。。

```ts
function setContents(box: StringBox, newContents: string): void
function setContents(box: NumberBox, newContents: number): void
function setContents(box: BooleanBox, 
                    newContents: boolean): void
function setContents(
  box: { contents: string | number | boolean },
  newContents: string | number | boolean
) {
  box.contents = newContents
}
```

</div>

<div v-click>

我们可以用泛型解决这个问题

```ts
interface Box<Type> {
  contents: Type
}

function setContents<Type>(box: Box<Type>, newContents: Type) {
  box.contents = newContents;
}

const  box: Box<string>={  contents: 'this is a box',}

```
</div>

---
hideInToc: true
level: 2
layout: two-cols
---

类型别名也可以实现这个泛型  

```ts
type Box<Type> = {
  contents: Type;
};
```

<div v-click>

#### 类型别名定义工具类泛型  

```ts
type OrNull<Type> = Type | null;
type OneOrMany<Type> = Type | Type[];
type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>;
//type OneOrManyOrNull<Type> = OneOrMany<Type> | null
type OneOrManyOrNullStrings = OneOrManyOrNull<string>;
//type OneOrManyOrNullStrings = OneOrMany<string> | null

```
<Link to="36" class="absolute right-5 bottom-5">----> 泛型和类型操作</Link>
</div>
---
layout: image-left
image: https://source.unsplash.com/collection/94734566/1920x1080
title: 数组和元组
level: 1
---

## 数组类型(Array Type)  



<div v-click>

```ts
const arr1: Array<number> = [1, 2, 3]
const arr2: number[] = [4, 5, 6]

console.log({arr1, arr2})
```
</div>

<div v-click>

```shell
{ 
  arr1: [ 1, 2, 3 ],
  arr2: [ 4, 5, 6 ] 
 }
```
</div>


<div v-click>

## 元组类型(Tuple Type)
指定元素个数和类型的数组

```ts
const tuple: [number, string] = [18, 'zhangsan']
```
</div>
<div v-click>
元组类型的解构赋值
```typescript
const  [age, name] = tuple
```
</div>


---
layout: two-cols
title: 枚举类型
---

## 枚举类型 Enums
<div v-click>

### 数字枚举 Numeric enums

```typescript
// 1.数字枚举，up初始化为1,后续的会自动增长
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}
console.log(
  'Direction', Direction.Up,Direction.Down, 
  Direction.Left, Direction.Right,Direction
)

```
</div>
<div v-click>

```shell
Direction 1 2 3 4 {
  '1': 'Up',
  '2': 'Down',
  '3': 'Left',
  '4': 'Right',
  Up: 1,
  Down: 2,
  Left: 3,
  Right: 4
}//有反向映射

```
</div>

::right::
<div v-click class="">

### 字符串枚举 String enums
```typescript
enum Direction2 {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}

console.log(
  'Direction2',
  Direction2.Up,
  Direction2.Down,
  Direction2.Left,
  Direction2.Right,
)
console.log(Direction2)
```
</div>
<div v-click>
```shell
Direction2 UP DOWN LEFT RIGHT 
{ Up: 'UP', Down: 'DOWN', Left: 'LEFT', Right: 'RIGHT' }
```
</div>


---
hideInToc: true
layout: two-cols
---

### 异构枚举（Heterogeneous enums）
```ts
enum Direction3 {
  Up = 'UP',
  Down = 'DOWN',
  Left = 1,
  Right = 2,
}

console.log(
  'Direction3',
  Direction3.Up,
  Direction3.Down,
  Direction3.Left,
  Direction3.Right,
  Direction3
)

```
<div v-click>

```ts
Direction3 UP DOWN 1 2 {
  '1': 'Left',
  '2': 'Right',
  Up: 'UP',
  Down: 'DOWN',
  Left: 1,
  Right: 2
}

```
</div>

::right::

<div v-click>

### 常量枚举 （const enums）
效率最高  
常量枚举只能使用常量枚举表达式，并且不同于常规的枚举，它们在编译阶段会被删除。   
常量枚举成员在使用的地方会被内联进来。 之所以可以这么做是因为，常量枚举不允许包含计算成员。
```ts
const enum Directions4 {
  Up,
  Down,
  Left,
  Right,
}
console.log('Directions4', Directions4.Up)

```
```shell
Directions4 0
```
</div>


---
title: 函数
level: 1
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

## 函数  

<div v-click>

1. 两种定义函数的方式

```ts
export function sum1(x: number, y: number): number {
  return x + y
}//function sum1(x: number, y: number): number
export const sum2 = (x: number, y: number) => {
  return x + y
}//(x: number, y: number) => number
```
</div>

<div v-click>
2. 函数类型表达式 Function Type Expressions
    
```ts
let mySum: (x: number, y: number) => number 
= function (x: number, y: number): number {
    return x + y;
};

```
</div>


---
title: 调用签名，构造签名
level: 2
layout: two-cols
---

### 调用签名 Call Signatures

在js里，函数可以有很多属性  
匿名函数表达式语法不能绑定属性，我们可以用调用签名的形式，
编写一些可调用的带属性的函数类型

```ts
type DescribableFunction = {
  description: string
  (someArg: number): boolean
}

function isOver5(num: number) {
  return num > 5 ? true : false
}
isOver5.description = '判断是否大于5'

function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " 结果为 " + fn(6));
}

doSomething(isOver5)

```

::right::

<div v-click>

### 构造签名 Construct Signatures

js函数可以被new操作符调用 ，这在ts中被称为构造函数,他们通常可以创建一个新对象  
在调用签名前面加上new关键字，定义构造函数

```ts

type SomeConstructor = {
  new (s: string): SomeObject;
};
function fn(ctor: SomeConstructor) {
  return new ctor("hello");
}

```
有些对象，比如js中的Date，是可以直接调用，不用new操作符的  
可以结合调用和构造签名实现这种类型
```ts
interface CallOrConstruct {
  new (s: string): Date;
  (n?: number): number;
}
```
</div>


---
title: 函数的泛型
level: 2
layout: two-cols
---

### 函数的泛型
当函数的输入类型和输出的类型相关，或者两个输入的类型以某种方式相关  
我们就可以考虑泛型的方式  
```ts
function firstElement(arr: any[]) {
  return arr[0];
}
```
上面的返回类型是any，如果我们用泛型的方式会更好，因为那样就会有更具体的类型提示。
```ts
function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}
```

::right::

<div v-click>

### 泛型约束
可以用extends语法对泛型的范围进行限制
```ts

function longest<Type extends { length: number }>
(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}

```
上面的函数中，泛型被限制为含有number类型的length属性。

</div>

---
title: 如何编写好的泛型函数
level: 2
layout: two-cols
---

### 如何编写好的泛型函数


#### 1. 尽量直接使用类型参数，而不是使用约束的方式 Push Type Parameters Down
```ts
function firstElement1<Type>(arr: Type[]) {
  return arr[0];
}
 
function firstElement2<Type extends any[]>(arr: Type) {
  return arr[0];
}
 
// a: number (good)
const a = firstElement1([1, 2, 3]);
// b: any (bad)
const b = firstElement2([1, 2, 3]);
console.log(a, b)
export {}
```


::right::

<div v-click>

#### 2. 尽可能使用更少的类型参数 Use Fewer Type Parameters

```ts
function filter1<Type>(arr: Type[], 
                  func: (arg: Type) => boolean): Type[] {
  return arr.filter(func);
}
//  Func 和Type两个类型参数，可读性差
function filter2<Type, Func extends (arg: Type) => boolean>(
  arr: Type[],
  func: Func
): Type[] {
  return arr.filter(func);
}

```
</div>


---
hideInToc: true
layout: two-cols
---


#### 3. 类型参数需要出现两次 Type Parameters Should Appear Twice
```ts
function greet<Str extends string>(s: Str) {
  console.log("Hello, " + s);
}
 
greet("world");

```
如果类型参数只在一个地方出现，就要考虑是否有必要用泛型  
上面的函数，可以有更简单的写法

```ts
function greet(s: string) {
  console.log("Hello, " + s);
}

```



---
title: '函数重载'
level: 2
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

### 函数重载 Function Overloads
```ts
function add(x: number, y: number): number
function add(x: string, y: string): string
function add(x: string, y: number): string
function add(x: number, y: string): string

function add(x: string | number, y: string | number) {
  if (typeof x === 'string' ||
      typeof y === 'string') {
    return x.toString() + y.toString()
  }
  return x + y
}

console.log(add(1, 2))
console.log(add('1', '2'))
console.log(add('1', 2))


```

<div v-click>

```shell
3
12
12
```
</div>


---
title: any,void,unknown,never
layout: two-cols
---

### any
当我们不清楚一个变量的类型，比如来自第三方库或者用户输入。  
希望不进行类型检查，可以用any 类型。

```ts
let a: any = 666;
a = "any";
a = false;
a = 66
a = undefined
a = null
a = []
a = {}
```

::right::

<div v-click>

### unknown
any过于宽松，并且让typescript的类型检查失效  
为了解决这个问题，ts3.0引入了unknown  
unknown与any一样，所有类型都可以分配给unknown  
但是 **它只能赋值给unknown和any类型**

```ts
let notSure: unknown = 2
const uncertain: any = notSure
notSure = uncertain
notSure = '231'
// uncertain.ll ok
// notSure.ll error
```

不进行<Link to="32">类型收窄</Link>或者<Link to="34">类型断言</Link>能做的操作很有限

</div>


---
hideInToc: true
layout: two-cols
---

### never  
never类型表示的是那些永不存在的值的类型。
有两种情况
1. 函数执行时抛出了异常，到达不了返回那一步
2. 函数中有死循环，到达不了返回那一步

也就是说函数阻断，永远没有返回值的情况我们可以用never

```ts
// 异常
function err(msg: string): never { // OK
  throw new Error(msg); 
}
// 死循环
function loopForever(): never { // OK
  while (true) {};
}

```
never类型同null和undefined一样，也是任何类型的子类型，也可以赋值给任何类型。
但是任何值， 即使any也不能给never赋值

::right::

<div v-click>

#### 穷尽性检查 Exhaustiveness checking

下面是never用于穷尽性检查的例子

```ts
type Foo = string | number;
function controlFlowAnalysisWithNever(foo: Foo) {
  if (typeof foo === "string") {
    // 这里 foo 被收窄为 string 类型
  } else if (typeof foo === "number") {
    // 这里 foo 被收窄为 number 类型
  } else {
    // foo 在这里是 never
    const check: never = foo;
    return check
  }
}

```

else分支里面，foo被赋值给一个never变量，这样可以确保穷尽了所有可能
如果上面的分支没有穷尽所有可能，就会进入else分支，never赋值报错提示  
</div>

---
hideInToc: true
layout: two-cols
---


还有一种情况是交叉类型没有值的情况,下面的C 经过ts类型推断就是never类型
```ts
type A='A'
type B='B'
type C = A&B
```



---
hideInToc: true
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

### void

表示没有任何类型，只能赋值undefined和null， 严格模式只能赋值undefined  
一般用在函数没有返回值的时候,因为js的函数没有return的时候，返回值就是undefined

```ts
function foo(): void {
  console.log("this is TypeScript");
};
```


---
title: 类型收窄
level: 1
layout: two-cols
---

## 类型收窄 Narrowing

### 1.真值收窄 Truthiness narrowing
当传递参数可能为空的时候

```ts
function printName(name?: string) {
  if (name) {
    console.log('名字是', name)
  } else {
    console.log('请传入名字')
  }
}

```

<div v-click>

### 2.等式收窄 Equality narrowing
使用这几种相等判断的符号时也会对类型进行收窄  
 `===`, `!==`, `==`, `!=`

</div>

::right::

<div v-click>

### 3.类型守卫 Type guards

可以用if语句和typeof来明确收缩类型
ts支持typeof判断这8种类型  
- "string"
- "number"
- "bigint"
- "boolean"
- "symbol"
- "undefined"
- "object"
- "function"
```ts
export const func = (anything: string | number) => {
  if (typeof anything === 'string') {
    return anything // 类型是 string
  } else if (typeof anything === 'number') {
    return anything
  } else {
    const nothing: never = anything
    return nothing
  }
}
```
</div>


---
hideInToc: true
layout: two-cols
---

### 4.`in`收窄 
`in` 操作符可以用于判断对象是否有某属性，或者数组是否有某值  
在ts中in操作符也会进行类型收窄
```ts
type Fish = { swim: () => void };
type Bird = { fly: () => void };
 
function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }
 
  return animal.fly();
}

```

::right::

<div v-click>

### 5.`instanceof`收窄

```ts
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

```

</div>

<div v-click>

### 6. 赋值时的收窄
ts赋值的时候，会按照右侧对左侧进行收窄
```ts
let x = Math.random() < 0.5 
        ? 10 : "hello world!" //string | number
x=1 //number
x = "goodbye!"//string
```
<Link to="17" class="absolute right-5 bottom-5">---> 对象的泛型</Link>
</div>


---
title: 类型断言
level: 1
layout: image-left
image: https://source.unsplash.com/collection/94734566/1920x1080
---

## 类型断言 Type Assertion

类型断言相当于你告诉编译器变量的类型，  

有两种写法

尖括号语法
```ts

let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
```
as 语法

```ts

let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

```


---
title: 非空断言
level: 1
layout: two-cols
---

## 非空断言  

`!`操作符，可以用于断言对象不是null和undefined类型  
典型场景是获取dom的时候，有可能获取不到dom，所以调用dom的属性方法ts会报错  
此时我们可以使用非空断言，这样类型检查就不会报错。

```ts
let mayNullOrUndefinedOrString: null | undefined | string;
mayNullOrUndefinedOrString!.toString(); // ok
mayNullOrUndefinedOrString.toString(); // ts(2531)

```

::right::

<div v-click>

## 确定赋值断言



`!`在变量声明时使用，表示变量一定会被赋值
```ts
let x: number;
initialize();

// Variable 'x' is used before being assigned.(2454)
console.log(2 * x); // Error
function initialize() {
  x = 10;
}

```
</div>


<div v-click>

```ts
let x!: number;
initialize();
console.log(2 * x); // Ok

function initialize() {
  x = 10;
}

```

<Link to="28" class="absolute right-5 bottom-5">----> any unkonwn</Link>
</div>

---
title: 泛型和类型操作
level: 1
layout: center
---

## 泛型和类型操作
---
title: keyof,typeof
level: 2
layout: two-cols
---

## 泛型和类型操作
### 1.keyof
keyof 接受一个对象，生成字符串或数字键值的并集

```ts
type Point = { x: number; y: number };
type P = keyof Point;
//“x” | “y”
```
如果是string或number类型的索引签名，keyof就能返回这些类型
```ts
type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;//number

type Mapish = { [k: string]: boolean };
type M = keyof Mapish;
//type M = string | number
// 因为js中键值都会被转为字符串，obj[0]和obj['0']是相同的
```

::right::

<div v-click>

### 2. typeof
js中原本就有typeof操作，ts中增加了类型上下文中的typeof  
可以用来获取变量或者属性的类型
```ts
let s = "hello";
let n: typeof s;
```
</div>

<div v-click>

介绍一个typescript预定义泛型`RerturnType<T>`，传入一个函数类型，能产生返回值类型
```ts
type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>;//boolean
```
配合typeof 我们可以直接获得函数的类型
```ts
function f() {
  return { x: 10, y: 3 };
}
type P = ReturnType<typeof f>;
```
</div>





---
title: '类型索引'
level: 2
layout: image-left
image: https://source.unsplash.com/collection/94734566/1920x1080
---
### 3.类型索引(Type Indexing)
我们可以从已经存在的类型中提取子集
```ts
type Response = {
  data: {
    name: string
    age: number
  }
}

type Data = Response['data']
// {
    // name: string;
    // age: number;
// }
```




---
title: '条件类型'
level: 2
layout: two-cols
---

### 4.条件类型 Conditional Types
这个语法类似js的条件表达式

```ts
interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}
type Example1 = Dog extends Animal ? number : string;
type Example2 = RegExp extends Animal ? number : string;
```

::right:: 

上面这个例子还看不出什么，下面来一个条件类型和泛型结合的例子
```ts
interface IdLabel {
  id: number /* some fields */;
}
interface NameLabel {
  name: string /* other fields */;
} 
function createLabel(id: number): IdLabel;
function createLabel(name: string): NameLabel;
function createLabel(nameOrId: string | number)
                            : IdLabel | NameLabel {
  throw "unimplemented";
}
```
上面是函数重载的语法，函数重载要对参数每种类型的情况进行定义  
随着参数数量的增多工作量指数型增长.  
我们可以用条件类型和泛型简化这个代码

```ts
type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;
```


---
hideInToc: true
layout: two-cols
---

```ts
function createLabel<T extends number | string>(idOrName: T)
                                            : NameOrId<T> {
  throw "unimplemented";
}
let a = createLabel("typescript");
//NameLabel
let b = createLabel(2.8);
//IdLabel
let c = createLabel(Math.random() ? "hello" : 42);
// NameLabel | IdLabel
```

#### 条件类型约束泛型
条件类型也可以用于缩小泛型的范围  
下面是一个获得message键对应值类型的工具类型
```ts
type MessageOf<T extends { message: unknown }> 
                                = T["message"]
interface Email {
  message: string;
}
type EmailMessageContents = MessageOf<Email>;//string
```

::right::

假设我们想让MessageOf 能处理任何类型，在不存在message属性的时候返回never
```ts
type MessageOf<T> = T extends { message: unknown } ? 
                      T["message"] : never;
interface Email {
  message: string;
}
interface Dog {
  bark(): void;
}
type EmailMessageContents = MessageOf<Email>;
// string
type DogMessageContents = MessageOf<Dog>;
//never
```
还有一个例子是数组扁平化数组类型的泛型
```ts
type Flatten<T> = T extends any[] ? T[number] : T;
```


---
title: 'infer关键字'
level: 2
layout: two-cols
---
### infer 关键字

之前我们用条件类型应用约束，然后提取类型是很典型的应用了。

在Flatern上，我们可以用infer关键字以声明的方式引入一个新泛型Item，  
而不是考虑类型的结构，考虑怎么用类型索引

```ts
type Flatten<Type> = Type extends Array<infer Item> 
                                  ? Item : Type
```
下面是提取函数类型返回值的类型。
```ts
type GetReturnType<Type> = Type extends (...args: never[]) 
                                      => infer Return
  ? Return
  : never;

type Num = GetReturnType<() => number>;
type Str = GetReturnType<(x: string) => string>;
type Bools = GetReturnType<(a: boolean, b: boolean) 
                                        => boolean[]>;

```

---
title: '分配条件类型'
level: 2
layout: two-cols
---
### 分配条件类型 Distributive Conditional Types
当条件类型用在泛型上，如果给的是一个联合类型，
就会分别作用于单个类型上

```ts
type ToArray<Type> = Type extends any ? Type[] : never;
type StrArrOrNumArr = ToArray<string | number>;
//string[] | number[]
```

如果你不不满意这个行为，可以用中括号把extends的两边的类型包裹起来
```ts
type ToArrayNonDist<Type> = [Type] extends [any] ? 
                                          Type[] : never;
type StrArrOrNumArr = ToArrayNonDist<string | number>;
//(string | number)[]
```
---
title: '映射类型'
level: 2
layout: two-cols
---
### 映射类型 Mapped Types
映射类型建立在索引签名的基础上，是用keyof遍历所有属性键来创建类型  
OptionsFlags会获取type的所有属性，并且把值改为boolean类型

```ts
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

type FeatureFlags = {
  darkMode: () => void;
  newUserProfile: () => void;
};

type FeatureOptions = OptionsFlags<FeatureFlags>;
/*{
    darkMode: boolean;
    newUserProfile: boolean;
}*/
```
::right::

<div v-click>

### 映射修饰符 Mapping Modifiers
有两个修饰符能在映射过程中使用：`readonly`和`?`,
你可以使用 `+``-`前缀，移除或者添加，如果不指定的情况默认是`+`  

```ts
//移除 readonly属性
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};
type LockedAccount = {
  readonly id: string;
  readonly name: string;
};
type UnlockedAccount = CreateMutable<LockedAccount>;
/*{
    id: string;
    name: string;
}*/
```
</div>

---
hideInToc: true
layout: two-cols
---
### 键值映射使用as
ts4.1以后的版本，支持在映射类型中使用as
```ts
type MappedTypeWithNewProperties<Type> = {
    [Properties in keyof Type as NewKeyType]:
                                           Type[Properties]
}
```
典型的应用是结合模板字面类型  
```ts
type Getters<Type> = {
    [Property in keyof Type as
     `get${Capitalize<string & Property>}`]:
       () => Type[Property]
};
interface Person {
    name: string;
    age: number;
    location: string;
}
type LazyPerson = Getters<Person>;
/* {
    getName: () => string;
    getAge: () => number;
    getLocation: () => string;
}*/
```


---
title: '模板字面类型'
level: 2
layout: two-cols
---
#### 模板字面类型  Template Literal Types

模板字面类型是基于字符串字面类型之上的。
和js的模板字符串语法是相同的语法，只是用在类型中。

```ts
type World = "world";
type Greeting = `hello ${World}`;
```

当在插值中使用联合类型的时候，类型是每种可能的集合
```ts
type EmailLocaleIDs = "welcome_email" | "email_heading"
type FooterLocaleIDs = "footer_title" | "footer_sendoff"
type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`
//"welcome_email_id" | "email_heading_id" | 
//"footer_title_id" | "footer_sendoff_id"
```

::right::

我们希望定义下面on函数的类型
```ts
const person = makeWatchedObject({
  firstName: "Saoirse",
  lastName: "Ronan",
  age: 26,
});
person.on("firstNameChanged", (newValue) => {
  console.log(`firstName was changed to ${newValue}!`);
});
```
可以用模板字符串实现下面的泛型
```ts
type PropEventSource<Type> = {
    on(eventName: `${string & keyof Type}Changed`, 
              callback: (newValue: any) => void): void;
}
declare function makeWatchedObject<Type>(obj: Type):
                       Type & PropEventSource<Type>
```
还可以优化
```ts
type PropEventSource<Type> = {
    on<Key extends string & keyof Type>
        (eventName: `${Key}Changed`,
               callback: (newValue: Type[Key]) => void ): void;
};
```


---
title: '内置字符串操作类型'
level: 2
layout: two-cols
---

1. `Uppercase<StringType>`

```ts
type Greeting = "Hello, world"
type ShoutyGreeting = Uppercase<Greeting>
//"HELLO, WORLD"
```

2. `Lowercase<StringType>`


3. `Capitalize<StringType>`
首字母大写

4. `Uncapitalize<StringType>`
首字母小写


---
title: 'ts常见内置工具类型'
level: 2
layout: two-cols
---
### ts常见内置工具类型 Utility Types
#### 1.`Partial<Type>`
`Partial<Type>` 将类型所有属性变成可选

```ts
type Partial<T> = {
  [P in keyof T]?: T[P];
};
```

#### DeepPartial
上面只处理了第一层,可以用递归实现多层处理
```ts
type DeepPartial<T> = {
     // 如果是 object，则递归类型
    [U in keyof T]?: T[U] extends object
      ? DeepPartial<T[U]>
      : T[U]
};
```

::right::

####  2.`Required<Type>`
`Required<Type>`将类型所有属性变成必选

```ts
type Required<T> = { 
    [P in keyof T]-?: T[P] 
};
```


#### 3.`Readonly<Type>`

`Readonly<Type>` 的作用是将类型所有属性变为只读属性，也就意味着这些属性不能被重新赋值。

```ts
type Readonly<T> = {
 readonly [P in keyof T]: T[P];
};
```

#### 4.`Record<Keys, Type>` 
   
`Record<K extends keyof any, T>` 的作用是将Key中所有属性的值转为Type类型


```ts
type Record<K extends keyof any, T> = {
    [P in K]: T;
};
```


---
layout: two-cols
hideInToc: true
---
#### 5.Pick
`Pick<Type, Keys>`

`Pick<Type, Keys>` 从Type中挑选一组属性Keys集合来构造一种类型

```ts
type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
```

#### 6.Omit  


`Omit<Type, Keys>`  
`Omit<T, K extends keyof any>` 的作用是使用Type中除了Keys属性的所有属性来构造一个新类型

```ts
type Omit<T, K extends keyof any> =
                            Pick<T, Exclude<keyof T, K>>;
```

<br/>



::right::



#### 7.`Exclude<UnionType, ExcludedMembers>`

`Exclude<UnionType, ExcludedMembers>`的作用是将某个类型中属于另一个的类型移除掉。

```ts

type Exclude<T, U> = T extends U ? never : T;
```




#### 8.Extract
`Extract<Type, Union>`

`Extract<Type, Union>` 的作用是从Type联合类型中提取可分配给Union的联合类型。

```ts

type Extract<T, U> = T extends U ? T : never;
```



---
hideInToc: true
layout: two-cols
---



#### 9.NonNullable

`NonNullable<T>` 的作用是用来过滤类型中的 null 及 undefined 类型。

```ts
type NonNullable<T> = T extends null | undefined ?
                                               never : T;
```

#### 10.Parameters  

`Parameters<T>` 的作用是用于获得函数的参数类型组成的元组类型。

```ts
type Parameters<T extends (...args: any) => any> = 
T extends (...args: infer P) => any
? P : never;
```


#### 11.`ConstructorParameters<Type>`  

`ConstructorParameters<Type>`从构造函数的参数列表创建一个类型


::right::



#### 12.`ReturnType<Type>`

`ReturnType<Type>`用来得到一个函数的返回值类型

```ts
type ReturnType<T extends (...args: any[]) => any> = 
T extends (
  ...args: any[]
) => infer R
  ? R
  : any;
```

#### 13.`InstanceType<Type>`  
构造函数的实例类型


#### 14.`ThisParameterType<Type>`  
为函数类型提取this参数的类型，如果没有this参数，则为unknown

#### 15.`OmitThisParameter<Type>`  
从Type类型中删除this参数,如果Type中没有明确声明this参数，则结果就是Type。


---
hideInToc: true
layout: two-cols
---

#### 16.ThisType
 `ThisType<Type>`  
需要在配置里面开启  noImplicitThis(禁止隐式this)
这个工具不会返回一个转换的类型，而是作为一个this上下文标记。


#### 17.内置字符串操作类型  

```ts
Uppercase<StringType>
Lowercase<StringType>
Capitalize<StringType>
Uncapitalize<StringType>
```
---
src: ./ts-classes.md
---

---
src: ./ts-declaration.md
---