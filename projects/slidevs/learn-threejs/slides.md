---
# You can also start simply with 'default'
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
hideInToc: true
# apply unocss classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
addons:
  - '@mudssky/slidev-addon-default'
monacoRunAdditionalDeps:
  - three
monacoTypesAdditionalPackages:
  - three
---


## 学习threejs

---

## 目录

<Toc columns="4" />

---
src: ./pages/01-install.md
---

---
src: ./pages/02-basics.md
---

---
src: ./pages/03-BufferGeometry.md
---

---
src: ./pages/04-point-line-mesh.md
---

---
src: ./pages/05-material.md
---

---
src: ./pages/04-lights-shadows.md
---

---
src: ./pages/05-camera-controls.md
---

---
src: ./pages/06-textures-envmap.md
---

---
src: ./pages/07-loaders-gltf.md
---

---
src: ./pages/08-animation.md
---

---
src: ./pages/09-raycaster.md
---

---
src: ./pages/10-postprocessing.md
---

---
src: ./pages/11-shader.md
---

---
src: ./pages/12-advanced-performance.md
---

---
src: ./pages/13-physics.md
---

---
src: ./pages/14-debug-best-practices.md
---

---
src: ./pages/15-case-study.md
---

---
src: ./pages/16-resources.md
---

---
title: thre
---
---
layout: none
---

<Demo001start />

---
layout: none
---

<Demo002GUI />

---
layout: none
---

<Demo003PerspectiveCamera />
