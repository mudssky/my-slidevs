---
# You can also start simply with 'default'
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: Welcome to Slidev
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# apply unocss classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
hideInToc: true
addons:
  - '@mudssky/slidev-addon-default'
---



# Socket.io的使用

支持多平台的双向和低延迟通信

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/slidevjs/slidev" target="_blank" alt="GitHub" title="Open in GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
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
transition: fade-out
---

# 什么是Socket.IO

Socket.IO 是一个库，可在客户端和服务器之间实现低延迟、双向和基于事件的通信。

1. 在大多数情况下，将使用 WebSocket 建立连接，从而在服务器和客户端之间提供低开销的通信通道。
2. 自动降级 如果 WebSocket 连接无法实现，它将回退到 HTTP 长轮询。
3. 自动重连 如果连接丢失，客户端会自动尝试重新连接。（断开连接的数据包也会自动缓存）

此外还有事件驱动和命名空间的特性。

Socket.IO的服务端和客户端都实现了多种语言
比如，js，java，python，golang，rust等

Socket.IO使用websocket通信时每个数据包添加了额外的元数据，因此websocket的客户端将无法成功连接连接到 Socket.IO 服务器，并且 Socket.IO 客户端也将无法连接到普通 WebSocket 服务器。

---

# 为什么选择Socket.IO

0. 处理了不同浏览器的兼容性问题，自动降级（不支持websocket的情况自动回退http轮询），确保连接的稳定性
1. 相比于直接使用websocket api，更易于使用
2. 事件驱动的代码，和命名空间等功能，代码结构更清晰，易于维护
3. 房间管理等功能为应用开发带来便利

**应用场景**
Socket.IO 广泛应用于聊天应用、实时通知、在线协作工具、实时数据分析仪表盘和在线游戏等需要实时互动的场景。

---
title: websocket协议简述
---

## websocket协议简述

### 什么是WebSocket
HTML5开始提供的一种浏览器与服务器进行全双工通讯的网络技术，属于应用层协议。它基于TCP传输协议，并复用HTTP的握手通道。

### 建立连接过程
#### 1、客户端：申请协议升级

```
GET / HTTP/1.1
Host: localhost:8080
Origin: http://127.0.0.1:3000
Connection: Upgrade
Upgrade: websocket
Sec-WebSocket-Version: 13
Sec-WebSocket-Key: w4v7O6xFTi36lq3RNcgctw==

```

#### 2、服务端：响应协议升级

```
HTTP/1.1 101 Switching Protocols
Connection:Upgrade
Upgrade: websocket
Sec-WebSocket-Accept: Oy4NRAQ13jhfONC7bP8dTKb4PTU=
```

---

#### 3、Sec-WebSocket-Accept的计算

`Sec-WebSocket-Accept`根据客户端请求首部的`Sec-WebSocket-Key`计算出来。

计算公式为：

1. 将`Sec-WebSocket-Key`跟`258EAFA5-E914-47DA-95CA-C5AB0DC85B11`拼接。
2. 通过SHA1计算出摘要，并转成base64字符串。

```ts
function hashKey(key: string) {
  const sha1 = crypto.createHash("sha1")
  sha1.update(key + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11")
  return sha1.digest("base64")
}
```

---

### WebSocket数据帧概览

```
  0                   1                   2                   3
  0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
 +-+-+-+-+-------+-+-------------+-------------------------------+
 |F|R|R|R| opcode|M| Payload len |    Extended payload length    |
 |I|S|S|S|  (4)  |A|     (7)     |             (16/64)           |
 |N|V|V|V|       |S|             |   (if payload len==126/127)   |
 | |1|2|3|       |K|             |                               |
 +-+-+-+-+-------+-+-------------+ - - - - - - - - - - - - - - - +
 |     Extended payload length continued, if payload len == 127  |
 + - - - - - - - - - - - - - - - +-------------------------------+
 |                               |Masking-key, if MASK set to 1  |
 +-------------------------------+-------------------------------+
 | Masking-key (continued)       |          Payload Data         |
 +-------------------------------- - - - - - - - - - - - - - - - +
 :                     Payload Data continued ...                :
 + - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +
 |                     Payload Data continued ...                |
 +---------------------------------------------------------------+

```

---
layout: scroll
---

### 数据帧格式详解

**FIN**：1个比特。

如果是1，表示这是消息（message）的最后一个分片（fragment），如果是0，表示不是是消息（message）的最后一个分片（fragment）。

**RSV1, RSV2, RSV3**：各占1个比特。

一般情况下全为0。当客户端、服务端协商采用WebSocket扩展时，这三个标志位可以非0，且值的含义由扩展进行定义。如果出现非零的值，且并没有采用WebSocket扩展，连接出错。

**Opcode**: 4个比特。

操作代码，Opcode的值决定了应该如何解析后续的数据载荷（data payload）。如果操作代码是不认识的，那么接收端应该断开连接（fail the connection）。可选的操作代码如下：

- %x0：表示一个延续帧。当Opcode为0时，表示本次数据传输采用了数据分片，当前收到的数据帧为其中一个数据分片。
- %x1：表示这是一个文本帧（frame）
- %x2：表示这是一个二进制帧（frame）
- %x3-7：保留的操作代码，用于后续定义的非控制帧。
- %x8：表示连接断开。
- %x9：表示这是一个ping操作。
- %xA：表示这是一个pong操作。
- %xB-F：保留的操作代码，用于后续定义的控制帧。

---

**Mask**: 1个比特。

表示是否要对数据载荷进行掩码操作。从客户端向服务端发送数据时，需要对数据进行掩码操作；从服务端向客户端发送数据时，不需要对数据进行掩码操作。

如果服务端接收到的数据没有进行过掩码操作，服务端需要断开连接。

如果Mask是1，那么在Masking-key中会定义一个掩码键（masking key），并用这个掩码键来对数据载荷进行反掩码。所有客户端发送到服务端的数据帧，Mask都是1。

**Payload length**：数据载荷的长度，单位是字节。为7位，或7+16位，或1+64位。

假设数Payload length === x，如果

- x为0~126：数据的长度为x字节。
- x为126：后续2个字节代表一个16位的无符号整数，该无符号整数的值为数据的长度。
- x为127：后续8个字节代表一个64位的无符号整数（最高位为0），该无符号整数的值为数据的长度。

此外，如果payload length占用了多个字节的话，payload length的二进制表达采用网络序（big endian，重要的位在前）。

---

**Masking-key**：0或4字节（32位）

所有从客户端传送到服务端的数据帧，数据载荷都进行了掩码操作，Mask为1，且携带了4字节的Masking-key。如果Mask为0，则没有Masking-key。

备注：载荷数据的长度，不包括mask key的长度。

**Payload data**：(x+y) 字节

载荷数据：包括了扩展数据、应用数据。其中，扩展数据x字节，应用数据y字节。

扩展数据：如果没有协商使用扩展的话，扩展数据数据为0字节。所有的扩展都必须声明扩展数据的长度，或者可以如何计算出扩展数据的长度。此外，扩展如何使用必须在握手阶段就协商好。如果扩展数据存在，那么载荷数据长度必须将扩展数据的长度包含在内。

应用数据：任意的应用数据，在扩展数据之后（如果存在扩展数据），占据了数据帧剩余的位置。载荷数据长度 减去 扩展数据长度，就得到应用数据的长度。

---

### 掩码算法

掩码键（Masking-key）是由客户端挑选出来的32位的随机数。掩码操作不会影响数据载荷的长度。掩码、反掩码操作都采用如下算法：

首先，假设：

- original-octet-i：为原始数据的第i字节。
- transformed-octet-i：为转换后的数据的第i字节。
- j：为`i mod 4`的结果。
- masking-key-octet-j：为mask key第j字节。

---

### 数据掩码的作用

WebSocket协议中，数据掩码的作用是增强协议的安全性。但数据掩码并不是为了保护数据本身，因为算法本身是公开的，运算也不复杂。除了加密通道本身，似乎没有太多有效的保护通信安全的办法。

那么为什么还要引入掩码计算呢，除了增加计算机器的运算量外似乎并没有太多的收益
答案还是两个字：**安全**。但并不是为了防止数据泄密，而是为了防止早期版本的协议中存在的代理缓存污染攻击（proxy cache poisoning attacks）等问题

---

### 数据传递

一旦WebSocket客户端、服务端建立连接后，后续的操作都是基于数据帧的传递。

WebSocket根据`opcode`来区分操作的类型。比如`0x8`表示断开连接，`0x0`-`0x2`表示数据交互。

#### 1、数据分片

WebSocket的每条消息可能被切分成多个数据帧。当WebSocket的接收方收到一个数据帧时，会根据`FIN`的值来判断，是否已经收到消息的最后一个数据帧。

FIN=1表示当前数据帧为消息的最后一个数据帧，此时接收方已经收到完整的消息，可以对消息进行处理。FIN=0，则接收方还需要继续监听接收其余的数据帧。

此外，`opcode`在数据交换的场景下，表示的是数据的类型。`0x01`表示文本，`0x02`表示二进制。而`0x00`比较特殊，表示延续帧（continuation frame），顾名思义，就是完整消息对应的数据帧还没接收完。

---

#### 2、数据分片例子

直接看例子更形象些。下面例子来自[MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers)，可以很好地演示数据的分片。客户端向服务端两次发送消息，服务端收到消息后回应客户端，这里主要看客户端往服务端发送的消息。

**第一条消息**

FIN=1, 表示是当前消息的最后一个数据帧。服务端收到当前数据帧后，可以处理消息。opcode=0x1，表示客户端发送的是文本类型。

**第二条消息**

1. FIN=0，opcode=0x1，表示发送的是文本类型，且消息还没发送完成，还有后续的数据帧。
2. FIN=0，opcode=0x0，表示消息还没发送完成，还有后续的数据帧，当前的数据帧需要接在上一条数据帧之后。
3. FIN=1，opcode=0x0，表示消息已经发送完成，没有后续的数据帧，当前的数据帧需要接在上一条数据帧之后。服务端可以将关联的数据帧组装成完整的消息。

---

### 连接保持+心跳

WebSocket为了保持客户端、服务端的实时双向通信，需要确保客户端、服务端之间的TCP通道保持连接没有断开。然而，对于长时间没有数据往来的连接，如果依旧长时间保持着，可能会浪费包括的连接资源。

但不排除有些场景，客户端、服务端虽然长时间没有数据往来，但仍需要保持连接。这个时候，可以采用心跳来实现。

- 发送方->接收方：ping
- 接收方->发送方：pong

ping、pong的操作，对应的是WebSocket的两个控制帧，`opcode`分别是`0x9`、`0xA`。

举例，WebSocket服务端向客户端发送ping，只需要如下代码（采用`ws`模块）

举例，WebSocket服务端向客户端发送ping，只需要如下代码（采用`ws`模块）

```javascript
ws.ping('', false, true);
```

---
title: 安装使用
---

客户端安装

```shell
pnpm add socket.io-client
```

nodejs服务端安装

```
pnpm add socket.io
```

如果是nestjs框架，需要

```
pnpm add @nestjs/platform-socket.io
```

### 前端socket.io代理配置
比如vite的proxy中可以进行如下配置，可以将socket.io通信转发到指定的服务

```ts
  '/socket.io': {
      target: env.VITE_WS_TARGET,
      ws: true,
    },
```

配置之后我们就不需要在代码中指定服务的地址,后端也不再需要开启CORS

```ts
  // const socket = io('http://localhost:30355/nest-websocket')
  const socket = io('/nest-websocket')
```

### 后端socket.io配置

可以配置命名空间或者配置socket.io服务在不同的端口启动

nestjs中通过装饰器来指定，下面是指定常用的几个参数

```ts
 @WebSocketGateway(33155, {
   namespace: 'nest-websocket',
   cors: {
     origin: '*',
   },
 })
```
