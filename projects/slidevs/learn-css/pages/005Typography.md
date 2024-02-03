---
title: Typography
level: 1
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

## Typography

---
title: Font Family
level: 2
---

### Font Family
这些是tailwind默认提供的字体

| Class      | Properties                                                   |
| ---------- | ------------------------------------------------------------ |
| font-sans  | font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; |
| font-serif | font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif; |
| font-mono  | font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; |

<div class="border-1 border-gray-100 rounded-lg p-2">
<p class="font-sans ...">The quick brown fox </p>
<p class="font-serif ...">The quick brown fox </p>
<p class="font-mono ...">The quick brown fox </p>
</div>

---
title: Font Size
level: 2
---
### Font Size

这里可以设置字体，同时也设置行高

<p class="text-base/6 ...">So I started to walk into the water...</p>
<p class="text-base/7 ...">So I started to walk into the water...</p>
<p class="text-base/loose ...">So I started to walk into the water...</p>

---
title: Font Smoothing
level: 2
---

### Font Smoothing

应用字体平滑，但是这两个兼容性都不行，不建议使用  

| Class                | Properties                                                   |
| -------------------- | ------------------------------------------------------------ |
| antialiased          | -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; |
| subpixel-antialiased | -webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto; |

---
title: Font Style
level: 2
---

### Font Style

可以设置斜体

| Class      | Properties          |
| ---------- | ------------------- |
| italic     | font-style: italic; |
| not-italic | font-style: normal; |

---
title: Font Weight
level: 2
---

### Font Weight

设置字重

---
title: Font Variant Numeric
level: 2
---

### Font Variant Numeric

控制字体数字的变体，需要看你的字体是否支持。

---
title: Letter Spacing
level: 2
layout: slim-table
---

### Letter Spacing

设置字母间距

| Class            | Properties                |
| ---------------- | ------------------------- |
| tracking-tighter | letter-spacing: -0.05em;  |
| tracking-tight   | letter-spacing: -0.025em; |
| tracking-normal  | letter-spacing: 0em;      |
| tracking-wide    | letter-spacing: 0.025em;  |
| tracking-wider   | letter-spacing: 0.05em;   |
| tracking-widest  | letter-spacing: 0.1em;    |

<p class="tracking-tight ...">The quick brown fox ...</p>
<p class="tracking-normal ...">The quick brown fox ...</p>
<p class="tracking-wide ...">The quick brown fox ...</p>

---
title: Line Clamp
level: 2
layout: slim-table
---

### Line Clamp

设置文字省略溢出的

---
title: Line Height
level: 2
---

### Line Height

用于控制元素的行距（行高）

相对行高，比如 `leading-normal:line-height: 1.5;`，行高为字体大小的倍数

---
title: List Style Image
level: 2
layout: slim-table
---

### List Style Image

| Class           | Properties              |
| --------------- | ----------------------- |
| list-image-none | list-style-image: none; |

<CanIUseCssProperty cssProperty="list-style-image" />

这个属性的兼容性还可以

这个最常用的就是设置为none，会去掉ul或者ol列表前面的标记，但是也可以设置成图片url

---
title: List Style Position
level: 2
layout: slim-table
---

### List Style Position

是控制列表标记的位置的。

| Class        | Properties                    |
| ------------ | ----------------------------- |
| list-inside  | list-style-position: inside;  |
| list-outside | list-style-position: outside; |

list-inside  

<ul class="!list-inside">
  <li>5 cups chopped Porcini mushrooms</li>
  <li>5 cups chopped Porcini mushrooms</li>
  <li>5 cups chopped Porcini mushrooms</li>
</ul>

list-outside 似乎是默认值

<ul class="!list-outside ">
  <li>5 cups chopped Porcini mushrooms</li>
  <li>5 cups chopped Porcini mushrooms</li>
  <li>5 cups chopped Porcini mushrooms</li>
</ul>

---
title: List Style Type
level: 2
layout: slim-table
---

### List Style Type
控制列表的类型，也就是markdown里面两种列表样式

| Class        | Properties                |
| ------------ | ------------------------- |
| list-none    | list-style-type: none;    |
| list-disc    | list-style-type: disc;    |
| list-decimal | list-style-type: decimal; |

---
title: Text Align
level: 2
layout: slim-table
---

### Text Align

前三个常用一些，后面的等用到再说吧。

| Class        | Properties           |
| ------------ | -------------------- |
| text-left    | text-align: left;    |
| text-center  | text-align: center;  |
| text-right   | text-align: right;   |
| text-justify | text-align: justify; |
| text-start   | text-align: start;   |
| text-end     | text-align: end;     |

---
title: Text Color
level: 2
layout: slim-table
---

有几个颜色比较特殊
currentColor属性比较实用，可以使用当前的color值来设置颜色
<CanIUse src="https://caniuse.com/currentcolor" buttonText="can I use currentColor"/>

| Class            | Properties           |
| ---------------- | -------------------- |
| text-inherit     | color: inherit;      |
| text-current     | color: currentColor; |
| text-transparent | color: transparent;  |

currentColor 的例子,可以减少颜色的重复写
比较实用的例子，比如svg图标颜色随着color改变

```css
div { 
  color: red; 
  border: 5px solid red;
  box-shadow: 0 0 5px solid red;
}

```

```css
div { 
  color: red; 
  border: 5px solid currentcolor;
  box-shadow: 0 0 5px solid currentcolor;
}

```

---
title: Text Decoration
level: 2
layout: slim-table
---
### Text Decoration

| Class        | Properties                          |
| ------------ | ----------------------------------- |
| underline    | text-decoration-line: underline;    |
| overline     | text-decoration-line: overline;     |
| line-through | text-decoration-line: line-through; |
| no-underline | text-decoration-line: none;         |

下面是例子：

<p class="underline ...">The quick brown fox ...</p>
<p class="overline ...">The quick brown fox ...</p>
<p class="line-through ...">The quick brown fox ...</p>
<p class="no-underline ...">The quick brown fox ...</p>

---
title: Text Decoration Color
level: 2
layout: slim-table
---

### Text Decoration Color

<div>
  <p>
    I’m Derek, an astro-engineer based in Tattooine. I like to build X-Wings at
    <a class="underline decoration-sky-500">My Company, Inc</a>.
    Outside of work, I like to <a class="underline decoration-pink-500">watch
    pod-racing</a> and have <a class="underline decoration-indigo-500">light-saber</a> fights.
  </p>
</div>

还能调整透明度

<div>
  <p>
    I’m Derek, an astro-engineer based in Tattooine. I like to build X-Wings at
    <a class="underline decoration-sky-500/30">My Company, Inc</a>.
    Outside of work, I like to <a class="underline decoration-pink-500/30">watch
    pod-racing</a> and have <a class="underline decoration-indigo-500/30">light-saber</a> fights.
  </p>
</div>

---
title: Text Decoration Style
level: 2
layout: slim-table
---

### Text Decoration Style

| Class             | Properties                     |
| ----------------- | ------------------------------ |
| decoration-solid  | text-decoration-style: solid;  |
| decoration-double | text-decoration-style: double; |
| decoration-dotted | text-decoration-style: dotted; |
| decoration-dashed | text-decoration-style: dashed; |
| decoration-wavy   | text-decoration-style: wavy;   |

下面是例子：

<p class="underline decoration-solid ...">The quick brown fox...</p>
<p class="underline decoration-double ...">The quick brown fox...</p>
<p class="underline decoration-dotted ...">The quick brown fox...</p>
<p class="underline decoration-dashed ...">The quick brown fox...</p>
<p class="underline decoration-wavy ...">The quick brown fox...</p>

---
title: Text Decoration Thickness
level: 2
layout: slim-table
---

### Text Decoration Thickness

调整文本装饰线的粗细

<p class="underline decoration-1 ...">The quick brown fox...</p>
<p class="underline decoration-2 ...">The quick brown fox...</p>
<p class="underline decoration-4 ...">The quick brown fox...</p>

---
title: Text Underline Offset
level: 2
layout: slim-table
---

### Text Underline Offset

调整文本下划线的偏移量

<p class="underline underline-offset-1 ...">The quick brown fox...</p>
<p class="underline underline-offset-2 ...">The quick brown fox...</p>
<p class="underline underline-offset-4 ...">The quick brown fox...</p>
<p class="underline underline-offset-8 ...">The quick brown fox...</p>

---
title: Text Transform
level: 2
layout: slim-table
---

### Text Transform
对于英文比较实用，直接帮你调整大小写

| Class       | Properties                  |
| ----------- | --------------------------- |
| uppercase   | text-transform: uppercase;  |
| lowercase   | text-transform: lowercase;  |
| capitalize  | text-transform: capitalize; |
| normal-case | text-transform: none;       |

<p class="normal-case ...">The quick brown fox ...</p>
<p class="uppercase ...">The quick brown fox ...</p>
<p class="lowercase ...">The quick brown fox ...</p>
<p class="capitalize ...">The quick brown fox ...</p>

---
title: Text Overflow
level: 2
layout: slim-table
---

### Text Overflow

很实用了，两种文本溢出的处理方式，一个是clip也就是截断，另一个是省略号
truncate 是方便的一行文本溢出省略的总结

| Class         | Properties                                                   |
| ------------- | ------------------------------------------------------------ |
| truncate      | overflow: hidden; text-overflow: ellipsis; white-space: nowrap; |
| text-ellipsis | text-overflow: ellipsis;                                     |
| text-clip     | text-overflow: clip;                                         |

<p class="truncate ..."><p class="truncate">
      The longest word in any of the major English language dictionaries is <span class="text-slate-900 font-medium">pneumonoultramicroscopicsilicovolcanoconiosis,</span> a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.
    </p></p>

---
title: Text Wrap
level: 2
layout: slim-table
---

### Text Wrap

前两个就不说了，balance是让文本均匀分布在每一行  
pretty防止末尾出现孤立词，应该是针对英文的  

| Class        | Properties          |
| ------------ | ------------------- |
| text-wrap    | text-wrap: wrap;    |
| text-nowrap  | text-wrap: nowrap;  |
| text-balance | text-wrap: balance; |
| text-pretty  | text-wrap: pretty;  |

---
title: Text Indent
level: 2
layout: slim-table
---

### Text Indent

文本缩进，不多说

---
title: Vertical Align
level: 2
layout: slim-table
---

### Vertical Align

用于控制内联或表格单元格框的垂直对齐
总之文本垂直对齐的时候考虑使用

| Class             | Properties                   |
| ----------------- | ---------------------------- |
| align-baseline    | vertical-align: baseline;    |
| align-top         | vertical-align: top;         |
| align-middle      | vertical-align: middle;      |
| align-bottom      | vertical-align: bottom;      |
| align-text-top    | vertical-align: text-top;    |
| align-text-bottom | vertical-align: text-bottom; |
| align-sub         | vertical-align: sub;         |
| align-super       | vertical-align: super;       |

---
title: Whitespace
level: 2
layout: slim-table
---

### Whitespace

normal是最常用的，默认值，文本会正常换行，换行符和空格将被折叠
nowrap不换行
后面的没碰到应用场景就先略过。
| Class                   | Properties                 |
| ----------------------- | -------------------------- |
| whitespace-normal       | white-space: normal;       |
| whitespace-nowrap       | white-space: nowrap;       |
| whitespace-pre          | white-space: pre;          |
| whitespace-pre-line     | white-space: pre-line;     |
| whitespace-pre-wrap     | white-space: pre-wrap;     |
| whitespace-break-spaces | white-space: break-spaces; |

---
title: Word Break
level: 2
layout: slim-table
---

### Word Break

控制在换行的地方断词的
break-normal 仅在正常单词断点处添加换行符。(也就是有一个特别长的单词不会换行) `overflow-wrap: normal; word-break: normal;`
break-words `overflow-wrap: break-word;` 就是会换行
break-all 全部换行
break-keep 针对CJK，防止文本中间换行，对于非CJK文本和break-normal一样

一般我们固定宽度的情况是希望break-all的

| Class        | Properties                                 |
| ------------ | ------------------------------------------ |
| break-normal | overflow-wrap: normal; word-break: normal; |
| break-words  | overflow-wrap: break-word;                 |
| break-all    | word-break: break-all;                     |
| break-keep   | word-break: keep-all;                      |

---
title: Hyphens
level: 2
layout: slim-table
---

### Hyphens 连字符

这个似乎也是英语专用的，可以用`-`连接换行处的单词  

| Class          | Properties       |
| -------------- | ---------------- |
| hyphens-none   | hyphens: none;   |
| hyphens-manual | hyphens: manual; |
| hyphens-auto   | hyphens: auto;   |

---
title: Content
level: 2
layout: slim-table
---
### Content

用于控制前后伪元素
