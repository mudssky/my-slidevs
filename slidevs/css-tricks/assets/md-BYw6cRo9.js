import{o as r,c as l,k as n,e as o,q as i,s as p,B as t}from"./modules/vue-Ba7U_aMa.js";import{I as u}from"./slidev/default-D2HxYKwE.js";import{u as c,f as d}from"./slidev/context-_iZsAegV.js";import"./index-Dgj8W5Xr.js";import"./modules/shiki-Bpdc4GVC.js";const P={__name:"005Shadow.md__slidev_77",setup(m){const{$slidev:f,$nav:x,$clicksContext:s,$clicks:_,$page:$,$renderContext:h,$frontmatter:a}=c();return s.setup(),(k,e)=>(r(),l(u,i(p(t(d)(t(a),76))),{default:n(()=>e[0]||(e[0]=[o("p",null,"有一些注意事项",-1),o("ul",null,[o("li",null,"为了确保 box-shadow 生成的阴影在所有浏览器视口大小下都能覆盖整个页面，可能需要将阴影的尺寸，也就是阴影的扩散半径（第四个数字参数值）设置得很大；"),o("li",null,"使用 box-shadow 生成的阴影，它是无法阻止它背后元素的交互事件的，譬如阴影后面的元素还是可以被 hover 和 click，使用这种方式时，需要配合 pointer-event 一起，禁止掉元素的点击相关事件；"),o("li",null,"从性能角度而言，box-shadow 属于耗性能样式，不同样式在消耗性能方面也有所不同，box-shadow 在渲染方面更加耗费性能，因为它的绘制代码执行时间较长，因此在实际使用时仍需要仔细考虑此方案的优缺点。")],-1)])),_:1},16))}};export{P as default};
