import{_ as o}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-BBMbTb8L.js";import{aI as B,o as h,c as D,k,ag as n,b as e,e as i,l as r,m as p,ac as s,q as u,s as A,B as d}from"./modules/vue-Dx6KAzBk.js";import{_ as f}from"./slidev/two-cols.vue_vue_type_script_setup_true_lang-CEEDoeBM.js";import{u as c,f as m}from"./slidev/context-B6hahb1o.js";import"./modules/unplugin-icons-Di3rWGKn.js";import"./index-pWunCf4o.js";import"./modules/shiki-6JoZZVvS.js";const z={__name:"slides.md__slidev_32",setup(C){const{$slidev:v,$nav:E,$clicksContext:g,$clicks:b,$page:F,$renderContext:$,$frontmatter:y}=c();return g.setup(),(x,l)=>{const t=o,a=B("click");return h(),D(f,u(A(d(m)(d(y),31))),{right:k(_=>[n((h(),e("div",null,[l[3]||(l[3]=i("h3",null,"3.类型守卫 Type guards",-1)),l[4]||(l[4]=i("p",null,"可以用if语句和typeof来明确收缩类型 ts支持typeof判断这8种类型",-1)),l[5]||(l[5]=i("ul",null,[i("li",null,'"string"'),i("li",null,'"number"'),i("li",null,'"bigint"'),i("li",null,'"boolean"'),i("li",null,'"symbol"'),i("li",null,'"undefined"'),i("li",null,'"object"'),i("li",null,'"function"')],-1)),r(t,p({},{ranges:[]}),{default:k(()=>l[2]||(l[2]=[i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-ts"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"export"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," const "),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"func"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ("),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"anything"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},": "),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"string"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," | "),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"number"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," =>"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"  if"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ("),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"typeof "),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"anything"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," === "),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"string"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"    return"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," anything"),i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," // 类型是 string")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"  }"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," else"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," if"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ("),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"typeof "),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"anything"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," === "),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"number"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"    return"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," anything")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"  }"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," else"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"    const "),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"nothing"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},": "),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"never"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," anything")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"    return"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," nothing")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"  }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"}")])])],-1)])),_:1},16)])),[[a]])]),default:k(()=>[l[6]||(l[6]=i("h2",null,"类型收窄 Narrowing",-1)),l[7]||(l[7]=i("h3",null,"1.真值收窄 Truthiness narrowing",-1)),l[8]||(l[8]=i("p",null,"当传递参数可能为空的时候",-1)),r(t,p({},{ranges:[]}),{default:k(()=>l[0]||(l[0]=[i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-ts"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"function"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," printName"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"name"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"?"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},": "),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"string"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"  if"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ("),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"name"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"    console"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"log"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"名字是"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," name"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"  }"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," else"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"    console"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"log"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"请传入名字"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"  }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"}")])])],-1)])),_:1},16),n((h(),e("div",null,l[1]||(l[1]=[i("h3",null,"2.等式收窄 Equality narrowing",-1),i("p",null,[s("使用这几种相等判断的符号时也会对类型进行收窄"),i("br"),i("code",null,"==="),s(", "),i("code",null,"!=="),s(", "),i("code",null,"=="),s(", "),i("code",null,"!=")],-1)]))),[[a]])]),_:1},16)}}};export{z as default};
