---
title: Interactivity
level: 1
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

## Interactivity

---
title: Accent Color
level: 2
layout: slim-table
---
### Accent Color

### 强调色
用于控制表单控件的强调色 兼容性还不行 93% 2021年chrome才发布这个属性
<CanIUseCssProperty cssProperty="accent-color" />  

使用 `accent-{color}` 更改元素的强调色。这对于通过覆盖浏览器的默认颜色来设置复选框和单选按钮组等元素的样式很有帮助。  

<label>
  <input type="checkbox" checked> Browser default
</label>
<label>
  <input type="checkbox" class="accent-pink-500" checked> Customized
</label>

---
title: Appearance
level: 2

layout: slim-table
---
### Appearance

| Class           | Properties        |
| --------------- | ----------------- |
| appearance-none | appearance: none; |
| appearance-auto | appearance: auto; |

用于抑制本机表单控制样式  

使用 `appearance-none` 重置元素上任何浏览器特定的样式。创建自定义表单组件时经常使用此实用程序。

<select>
  <option>Yes</option>
  <option>No</option>
  <option>Maybe</option>
</select>

  <select class="appearance-none row-start-1 col-start-1 bg-slate-50 dark:bg-slate-800 ...">
    <option>Yes</option>
    <option>No</option>
    <option>Maybe</option>
  </select>

---
title: Cursor
level: 2

layout: slim-table
---
### Cursor

鼠标的样式还挺多。

| Class                | Properties             | Preview                                                      |
| -------------------- | ---------------------- | ------------------------------------------------------------ |
| cursor-auto          | cursor: auto;          | ![img](/assets/cursor/cursor-auto.svg) |
| cursor-default       | cursor: default;       | ![img](/assets/cursor/cursor-default.svg) |
| cursor-pointer       | cursor: pointer;       | ![img](/assets/cursor/cursor-pointer.svg) |
| cursor-wait          | cursor: wait;          | ![img](/assets/cursor/cursor-wait.svg)          |
| cursor-text          | cursor: text;          | ![img](/assets/cursor/cursor-text.svg)          |
| cursor-move          | cursor: move;          | ![img](/assets/cursor/cursor-move.svg)          |
| cursor-help          | cursor: help;          | ![img](/assets/cursor/cursor-help.svg)          |
| cursor-not-allowed   | cursor: not-allowed;   | ![img](/assets/cursor/cursor-not-allowed.svg)   |
| cursor-none          | cursor: none;          |                                                              |
| cursor-context-menu  | cursor: context-menu;  | ![img](/assets/cursor/cursor-context-menu.svg)  |
| cursor-progress      | cursor: progress;      | ![img](/assets/cursor/cursor-progress.svg)      |
| cursor-cell          | cursor: cell;          | ![img](/assets/cursor/cursor-cell.svg)          |
| cursor-crosshair     | cursor: crosshair;     | ![img](/assets/cursor/cursor-crosshair.svg)     |
| cursor-vertical-text | cursor: vertical-text; | ![img](/assets/cursor/cursor-vertical-text.svg) |
| cursor-alias         | cursor: alias;         | ![img](/assets/cursor/cursor-alias.svg)         |
| cursor-copy          | cursor: copy;          | ![img](/assets/cursor/cursor-copy.svg)          |
| cursor-no-drop       | cursor: no-drop;       | ![img](/assets/cursor/cursor-no-drop.svg)       |
| cursor-grab          | cursor: grab;          | ![img](/assets/cursor/cursor-grab.svg)          |
| cursor-grabbing      | cursor: grabbing;      | ![img](/assets/cursor/cursor-grabbing.svg)      |
| cursor-all-scroll    | cursor: all-scroll;    | ![img](/assets/cursor/cursor-all-scroll.svg)    |
| cursor-col-resize    | cursor: col-resize;    | ![img](/assets/cursor/cursor-col-resize.svg)    |
| cursor-row-resize    | cursor: row-resize;    | ![img](/assets/cursor/cursor-row-resize.svg)    |
| cursor-n-resize      | cursor: n-resize;      | ![img](/assets/cursor/cursor-n-resize.svg)      |
| cursor-e-resize      | cursor: e-resize;      | ![img](/assets/cursor/cursor-e-resize.svg)      |
| cursor-s-resize      | cursor: s-resize;      | ![img](/assets/cursor/cursor-s-resize.svg)      |
| cursor-w-resize      | cursor: w-resize;      | ![img](/assets/cursor/cursor-w-resize.svg)      |
| cursor-ne-resize     | cursor: ne-resize;     | ![img](/assets/cursor/cursor-ne-resize.svg)     |
| cursor-nw-resize     | cursor: nw-resize;     | ![img](/assets/cursor/cursor-nw-resize.svg)     |
| cursor-se-resize     | cursor: se-resize;     | ![img](/assets/cursor/cursor-se-resize.svg)     |
| cursor-sw-resize     | cursor: sw-resize;     | ![img](/assets/cursor/cursor-sw-resize.svg)     |
| cursor-ew-resize     | cursor: ew-resize;     | ![img](/assets/cursor/cursor-ew-resize.svg)     |
| cursor-ns-resize     | cursor: ns-resize;     | ![img](/assets/cursor/cursor-ns-resize.svg)     |
| cursor-nesw-resize   | cursor: nesw-resize;   | ![img](/assets/cursor/cursor-nesw-resize.svg)   |
| cursor-nwse-resize   | cursor: nwse-resize;   | ![img](/assets/cursor/cursor-nwse-resize.svg)   |
| cursor-zoom-in       | cursor: zoom-in;       | ![img](/assets/cursor/cursor-zoom-in.svg)       |
| cursor-zoom-out      | cursor: zoom-out;      | ![img](/assets/cursor/cursor-zoom-out.svg)      |

---

下面是三个常用鼠标样式  

<div class="flex [&_button]:(w-[180px] bg-blue rounded text-white) space-x-20">
<button type="button" class="cursor-pointer ...">
  Submit
</button>
<button type="button" class="cursor-progress ...">
  Saving...
</button>
<button type="button" disabled class="cursor-not-allowed ...">
  Confirm
</button>
</div>

---
title: Caret Color
level: 2
layout: slim-table
---
### Caret Color

控制文本输入框光标的颜色

<textarea class="caret-pink-500 ..."></textarea>

---
title: Pointer Events
level: 2
layout: slim-table
---

### Pointer Events

就是可以取消鼠标指针事件 （点击，hover等）

使用 `pointer-events-auto` 恢复指针事件的默认浏览器行为（如 :hover 和 click ）。  
使用 `pointer-events-none` 使元素忽略指针事件。指针事件仍将在子元素上触发，并传递到目标“下方”的元素。

---
title: Resize
level: 2
layout: slim-table
---
### Resize

控制元素怎么被缩放，可以控制只允许水平或垂直方向的缩放

| Class       | Properties          |
| ----------- | ------------------- |
| resize-none | resize: none;       |
| resize-y    | resize: vertical;   |
| resize-x    | resize: horizontal; |
| resize      | resize: both;       |

<textarea class="resize rounded-md border-pink-500 border-1 focus:outline-none focus-visible:(outline-pink-700 border-pink-700 text-red)"></textarea>

---
title: Scroll Behavior
level: 2
layout: slim-table
---
### Scroll Behavior

控制滚动行为，比如让滚动更平滑  

| Class         | Properties               |
| ------------- | ------------------------ |
| scroll-auto   | scroll-behavior: auto;   |
| scroll-smooth | scroll-behavior: smooth; |

---
title: Scroll Margin
level: 2
layout: slim-table
---
### Scroll Margin

用于控制捕捉容器中项目周围滚动偏移
---
title: Scroll Padding
level: 2
layout: slim-table
---
### Scroll Padding
滚动条相关参数

---
title: Scroll Align
level: 2
layout: slim-table
---

### Scroll Align

滚动条相关参数

| Class           | Properties                 |
| --------------- | -------------------------- |
| snap-start      | scroll-snap-align: start;  |
| snap-end        | scroll-snap-align: end;    |
| snap-center     | scroll-snap-align: center; |
| snap-align-none | scroll-snap-align: none;   |

---
title: Scroll Snap Stop
level: 2
layout: slim-table
---
### Scroll Snap Stop

用于控制是否可以跳过可能的捕捉位置

| Class       | Properties                |
| ----------- | ------------------------- |
| snap-normal | scroll-snap-stop: normal; |
| snap-always | scroll-snap-stop: always; |

将 snap-always 实用程序与 snap-mandatory 实用程序一起使用，可以强制捕捉容器始终停在某个元素上，然后用户才能继续滚动到下一个项目。

---
title: Scroll Snap Type
level: 2
layout: slim-table
---

### Scroll Snap Type
用于控制捕捉点在捕捉容器中执行的严格程度

| Class          | Properties                                               |
| -------------- | -------------------------------------------------------- |
| snap-none      | scroll-snap-type: none;                                  |
| snap-x         | scroll-snap-type: x var(--tw-scroll-snap-strictness);    |
| snap-y         | scroll-snap-type: y var(--tw-scroll-snap-strictness);    |
| snap-both      | scroll-snap-type: both var(--tw-scroll-snap-strictness); |
| snap-mandatory | --tw-scroll-snap-strictness: mandatory;                  |
| snap-proximity | --tw-scroll-snap-strictness: proximity;                  |

---
title: Touch Action
level: 2
layout: slim-table
---
### Touch Action

移动端代码不怎么写，暂时略过这个

| Class              | Properties                  |
| ------------------ | --------------------------- |
| touch-auto         | touch-action: auto;         |
| touch-none         | touch-action: none;         |
| touch-pan-x        | touch-action: pan-x;        |
| touch-pan-left     | touch-action: pan-left;     |
| touch-pan-right    | touch-action: pan-right;    |
| touch-pan-y        | touch-action: pan-y;        |
| touch-pan-up       | touch-action: pan-up;       |
| touch-pan-down     | touch-action: pan-down;     |
| touch-pinch-zoom   | touch-action: pinch-zoom;   |
| touch-manipulation | touch-action: manipulation; |

---
title: User Select
level: 2
layout: slim-table
---

### User Select
控制用户能否选中文本  

一般情况都不用设置，因为一般让用户能选中文本体验才比较好

| Class       | Properties         |
| ----------- | ------------------ |
| select-none | user-select: none; |
| select-text | user-select: text; |
| select-all  | user-select: all;  |
| select-auto | user-select: auto; |

不允许用户选择
<div class="select-none  shadow-lg p-2">
  The quick brown fox jumps over the lazy dog.
</div>

一键选择所有文本

<div class="select-all  shadow-lg p-2">
  The quick brown fox jumps over the lazy dog.
</div>

select-text 允许文本选择  
select-auto 浏览器默认值

---
title: Will Change
level: 2
layout: slim-table
---

### Will Change

用于优化即将发生变化的元素的动画

<CanIUse src="https://caniuse.com/will-change" buttonText="can i use will-change"/>

| Class                 | Properties                    |
| --------------------- | ----------------------------- |
| will-change-auto      | will-change: auto;            |
| will-change-scroll    | will-change: scroll-position; |
| will-change-contents  | will-change: contents;        |
| will-change-transform | will-change: transform;       |

使用 `will-change-scroll` 、 `will-change-contents` 和 `will-change-transform` 通过指示浏览器在实际开始之前准备必要的动画来优化预计在不久的将来发生变化的元素。

css出现性能问题时才考虑时候，感觉除非开发游戏之类的重前端场景应该是用不到的
