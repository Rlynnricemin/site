import{d as h,r as m,_ as b,l as A,w as o,j as p,k as I,b as n,f as c,e as t,t as Q,X as y,aJ as W,$ as Y,bg as q,O as $,bh as nn,bi as tn,bj as sn,c as R,B as P,bk as H,x as an,z as on,m as en,a as j,s as U}from"./index.07eaef2d.js";const cn=h({setup(){const s=m(!1);return{visible:s,showModal:()=>{s.value=!0},handleOk:u=>{console.log(u),s.value=!1}}}}),pn=n("p",null,"Some contents...",-1),ln=n("p",null,"Some contents...",-1),un=n("p",null,"Some contents...",-1),kn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showModal"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Open Modal"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-modal")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("visible")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("visible"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Basic Modal"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@ok"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleOk"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("Some contents..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("Some contents..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("Some contents..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-modal")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" visible "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("boolean"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"showModal"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      visible`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleOk"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"e"),n("span",{class:"token operator"},":"),t(" MouseEvent")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("e"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      visible`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      visible`),n("span",{class:"token punctuation"},","),t(`
      showModal`),n("span",{class:"token punctuation"},","),t(`
      handleOk`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),rn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showModal"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Open Modal"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-modal")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("visible")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("visible"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Basic Modal"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@ok"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleOk"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("Some contents..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("Some contents..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("Some contents..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-modal")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" visible "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"showModal"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      visible`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleOk"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token parameter"},"e"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("e"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      visible`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      visible`),n("span",{class:"token punctuation"},","),t(`
      showModal`),n("span",{class:"token punctuation"},","),t(`
      handleOk`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function dn(s,a,e,u,i,r){const l=p("a-button"),k=p("a-modal"),d=p("demo-box");return I(),A(d,{jsfiddle:{us:"Basic modal.",cn:"\u7B2C\u4E00\u4E2A\u5BF9\u8BDD\u6846\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u7B2C\u4E00\u4E2A\u5BF9\u8BDD\u6846\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Basic modal.</p>
`,order:0,title:{"zh-CN":"\u57FA\u672C\u7528\u6CD5","en-US":"Basic usage"},relativePath:"components/modal/demo/basic.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS1idXR0b24gdHlwZT0icHJpbWFyeSIgQGNsaWNrPSJzaG93TW9kYWwiPk9wZW4gTW9kYWw8L2EtYnV0dG9uPgogICAgPGEtbW9kYWwgdi1tb2RlbDp2aXNpYmxlPSJ2aXNpYmxlIiB0aXRsZT0iQmFzaWMgTW9kYWwiIEBvaz0iaGFuZGxlT2siPgogICAgICA8cD5Tb21lIGNvbnRlbnRzLi4uPC9wPgogICAgICA8cD5Tb21lIGNvbnRlbnRzLi4uPC9wPgogICAgICA8cD5Tb21lIGNvbnRlbnRzLi4uPC9wPgogICAgPC9hLW1vZGFsPgogIDwvZGl2Pgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgdmlzaWJsZSA9IHJlZjxib29sZWFuPihmYWxzZSk7CgogICAgY29uc3Qgc2hvd01vZGFsID0gKCkgPT4gewogICAgICB2aXNpYmxlLnZhbHVlID0gdHJ1ZTsKICAgIH07CgogICAgY29uc3QgaGFuZGxlT2sgPSAoZTogTW91c2VFdmVudCkgPT4gewogICAgICBjb25zb2xlLmxvZyhlKTsKICAgICAgdmlzaWJsZS52YWx1ZSA9IGZhbHNlOwogICAgfTsKICAgIHJldHVybiB7CiAgICAgIHZpc2libGUsCiAgICAgIHNob3dNb2RhbCwKICAgICAgaGFuZGxlT2ssCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS1idXR0b24gdHlwZT0icHJpbWFyeSIgQGNsaWNrPSJzaG93TW9kYWwiPk9wZW4gTW9kYWw8L2EtYnV0dG9uPgogICAgPGEtbW9kYWwgdi1tb2RlbDp2aXNpYmxlPSJ2aXNpYmxlIiB0aXRsZT0iQmFzaWMgTW9kYWwiIEBvaz0iaGFuZGxlT2siPgogICAgICA8cD5Tb21lIGNvbnRlbnRzLi4uPC9wPgogICAgICA8cD5Tb21lIGNvbnRlbnRzLi4uPC9wPgogICAgICA8cD5Tb21lIGNvbnRlbnRzLi4uPC9wPgogICAgPC9hLW1vZGFsPgogIDwvZGl2Pgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCB2aXNpYmxlID0gcmVmKGZhbHNlKTsKICAgIGNvbnN0IHNob3dNb2RhbCA9ICgpID0+IHsKICAgICAgdmlzaWJsZS52YWx1ZSA9IHRydWU7CiAgICB9OwogICAgY29uc3QgaGFuZGxlT2sgPSBlID0+IHsKICAgICAgY29uc29sZS5sb2coZSk7CiAgICAgIHZpc2libGUudmFsdWUgPSBmYWxzZTsKICAgIH07CiAgICByZXR1cm4gewogICAgICB2aXNpYmxlLAogICAgICBzaG93TW9kYWwsCiAgICAgIGhhbmRsZU9rLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+",isdemo:!1}},{default:o(()=>[n("div",null,[c(l,{type:"primary",onClick:s.showModal},{default:o(()=>[t("Open Modal")]),_:1},8,["onClick"]),c(k,{visible:s.visible,"onUpdate:visible":a[0]||(a[0]=g=>s.visible=g),title:"Basic Modal",onOk:s.handleOk},{default:o(()=>[pn,ln,un]),_:1},8,["visible","onOk"])])]),htmlCode:o(()=>[kn]),jsVersionHtml:o(()=>[rn]),_:1},8,["jsfiddle"])}const gn=b(cn,[["render",dn]]),Cn=h({setup(){const s=m("Content of the modal"),a=m(!1),e=m(!1);return{modalText:s,visible:a,confirmLoading:e,showModal:()=>{a.value=!0},handleOk:()=>{s.value="The modal will be closed after two seconds",e.value=!0,setTimeout(()=>{a.value=!1,e.value=!1},2e3)}}}}),mn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showModal"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Open Modal with async logic"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-modal")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("visible")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("visible"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Title"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":confirm-loading"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("confirmLoading"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"@ok"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleOk"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("{{ modalText }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-modal")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref"),n("span",{class:"token punctuation"},","),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" modalText "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("string"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Content of the modal'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" visible "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("boolean"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" confirmLoading "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("boolean"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"showModal"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      visible`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleOk"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      modalText`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token string"},"'The modal will be closed after two seconds'"),n("span",{class:"token punctuation"},";"),t(`
      confirmLoading`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        visible`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
        confirmLoading`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"2000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      modalText`),n("span",{class:"token punctuation"},","),t(`
      visible`),n("span",{class:"token punctuation"},","),t(`
      confirmLoading`),n("span",{class:"token punctuation"},","),t(`
      showModal`),n("span",{class:"token punctuation"},","),t(`
      handleOk`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),In=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showModal"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Open Modal with async logic"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-modal")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("visible")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("visible"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Title"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":confirm-loading"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("confirmLoading"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"@ok"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleOk"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("{{ modalText }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-modal")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref"),n("span",{class:"token punctuation"},","),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" modalText "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Content of the modal'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" visible "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" confirmLoading "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"showModal"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      visible`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleOk"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      modalText`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token string"},"'The modal will be closed after two seconds'"),n("span",{class:"token punctuation"},";"),t(`
      confirmLoading`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        visible`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
        confirmLoading`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"2000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      modalText`),n("span",{class:"token punctuation"},","),t(`
      visible`),n("span",{class:"token punctuation"},","),t(`
      confirmLoading`),n("span",{class:"token punctuation"},","),t(`
      showModal`),n("span",{class:"token punctuation"},","),t(`
      handleOk`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function bn(s,a,e,u,i,r){const l=p("a-button"),k=p("a-modal"),d=p("demo-box");return I(),A(d,{jsfiddle:{us:"Asynchronously close a modal dialog when the OK button is pressed.",cn:"\u70B9\u51FB\u786E\u5B9A\u540E\u5F02\u6B65\u5173\u95ED\u5BF9\u8BDD\u6846\uFF0C\u4F8B\u5982\u63D0\u4EA4\u8868\u5355\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u70B9\u51FB\u786E\u5B9A\u540E\u5F02\u6B65\u5173\u95ED\u5BF9\u8BDD\u6846\uFF0C\u4F8B\u5982\u63D0\u4EA4\u8868\u5355\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Asynchronously close a modal dialog when the OK button is pressed.</p>
<p>For example, you can use this pattern when you submit a form.</p>
`,order:1,title:{"zh-CN":"\u5F02\u6B65\u5173\u95ED","en-US":"Asynchronously close"},relativePath:"components/modal/demo/async.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS1idXR0b24gdHlwZT0icHJpbWFyeSIgQGNsaWNrPSJzaG93TW9kYWwiPk9wZW4gTW9kYWwgd2l0aCBhc3luYyBsb2dpYzwvYS1idXR0b24+CiAgICA8YS1tb2RhbAogICAgICB2LW1vZGVsOnZpc2libGU9InZpc2libGUiCiAgICAgIHRpdGxlPSJUaXRsZSIKICAgICAgOmNvbmZpcm0tbG9hZGluZz0iY29uZmlybUxvYWRpbmciCiAgICAgIEBvaz0iaGFuZGxlT2siCiAgICA+CiAgICAgIDxwPnt7IG1vZGFsVGV4dCB9fTwvcD4KICAgIDwvYS1tb2RhbD4KICA8L2Rpdj4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB7IHJlZiwgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IG1vZGFsVGV4dCA9IHJlZjxzdHJpbmc+KCdDb250ZW50IG9mIHRoZSBtb2RhbCcpOwogICAgY29uc3QgdmlzaWJsZSA9IHJlZjxib29sZWFuPihmYWxzZSk7CiAgICBjb25zdCBjb25maXJtTG9hZGluZyA9IHJlZjxib29sZWFuPihmYWxzZSk7CgogICAgY29uc3Qgc2hvd01vZGFsID0gKCkgPT4gewogICAgICB2aXNpYmxlLnZhbHVlID0gdHJ1ZTsKICAgIH07CgogICAgY29uc3QgaGFuZGxlT2sgPSAoKSA9PiB7CiAgICAgIG1vZGFsVGV4dC52YWx1ZSA9ICdUaGUgbW9kYWwgd2lsbCBiZSBjbG9zZWQgYWZ0ZXIgdHdvIHNlY29uZHMnOwogICAgICBjb25maXJtTG9hZGluZy52YWx1ZSA9IHRydWU7CiAgICAgIHNldFRpbWVvdXQoKCkgPT4gewogICAgICAgIHZpc2libGUudmFsdWUgPSBmYWxzZTsKICAgICAgICBjb25maXJtTG9hZGluZy52YWx1ZSA9IGZhbHNlOwogICAgICB9LCAyMDAwKTsKICAgIH07CiAgICByZXR1cm4gewogICAgICBtb2RhbFRleHQsCiAgICAgIHZpc2libGUsCiAgICAgIGNvbmZpcm1Mb2FkaW5nLAogICAgICBzaG93TW9kYWwsCiAgICAgIGhhbmRsZU9rLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS1idXR0b24gdHlwZT0icHJpbWFyeSIgQGNsaWNrPSJzaG93TW9kYWwiPk9wZW4gTW9kYWwgd2l0aCBhc3luYyBsb2dpYzwvYS1idXR0b24+CiAgICA8YS1tb2RhbAogICAgICB2LW1vZGVsOnZpc2libGU9InZpc2libGUiCiAgICAgIHRpdGxlPSJUaXRsZSIKICAgICAgOmNvbmZpcm0tbG9hZGluZz0iY29uZmlybUxvYWRpbmciCiAgICAgIEBvaz0iaGFuZGxlT2siCiAgICA+CiAgICAgIDxwPnt7IG1vZGFsVGV4dCB9fTwvcD4KICAgIDwvYS1tb2RhbD4KICA8L2Rpdj4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgcmVmLCBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgbW9kYWxUZXh0ID0gcmVmKCdDb250ZW50IG9mIHRoZSBtb2RhbCcpOwogICAgY29uc3QgdmlzaWJsZSA9IHJlZihmYWxzZSk7CiAgICBjb25zdCBjb25maXJtTG9hZGluZyA9IHJlZihmYWxzZSk7CiAgICBjb25zdCBzaG93TW9kYWwgPSAoKSA9PiB7CiAgICAgIHZpc2libGUudmFsdWUgPSB0cnVlOwogICAgfTsKICAgIGNvbnN0IGhhbmRsZU9rID0gKCkgPT4gewogICAgICBtb2RhbFRleHQudmFsdWUgPSAnVGhlIG1vZGFsIHdpbGwgYmUgY2xvc2VkIGFmdGVyIHR3byBzZWNvbmRzJzsKICAgICAgY29uZmlybUxvYWRpbmcudmFsdWUgPSB0cnVlOwogICAgICBzZXRUaW1lb3V0KCgpID0+IHsKICAgICAgICB2aXNpYmxlLnZhbHVlID0gZmFsc2U7CiAgICAgICAgY29uZmlybUxvYWRpbmcudmFsdWUgPSBmYWxzZTsKICAgICAgfSwgMjAwMCk7CiAgICB9OwogICAgcmV0dXJuIHsKICAgICAgbW9kYWxUZXh0LAogICAgICB2aXNpYmxlLAogICAgICBjb25maXJtTG9hZGluZywKICAgICAgc2hvd01vZGFsLAogICAgICBoYW5kbGVPaywKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0Pg==",isdemo:!1}},{default:o(()=>[n("div",null,[c(l,{type:"primary",onClick:s.showModal},{default:o(()=>[t("Open Modal with async logic")]),_:1},8,["onClick"]),c(k,{visible:s.visible,"onUpdate:visible":a[0]||(a[0]=g=>s.visible=g),title:"Title","confirm-loading":s.confirmLoading,onOk:s.handleOk},{default:o(()=>[n("p",null,Q(s.modalText),1)]),_:1},8,["visible","confirm-loading","onOk"])])]),htmlCode:o(()=>[mn]),jsVersionHtml:o(()=>[In]),_:1},8,["jsfiddle"])}const An=b(Cn,[["render",bn]]),hn=h({setup(){const s=m(!1),a=m(!1);return{loading:s,visible:a,showModal:()=>{a.value=!0},handleOk:()=>{s.value=!0,setTimeout(()=>{s.value=!1,a.value=!1},2e3)},handleCancel:()=>{a.value=!1}}}}),fn=n("p",null,"Some contents...",-1),yn=n("p",null,"Some contents...",-1),vn=n("p",null,"Some contents...",-1),wn=n("p",null,"Some contents...",-1),Zn=n("p",null,"Some contents...",-1),Wn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showModal"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Open Modal with customized footer"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-modal")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("visible")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("visible"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Title"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@ok"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleOk"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#footer"),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("back"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleCancel"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Return"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("submit"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":loading"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("loading"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleOk"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Submit"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("Some contents..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("Some contents..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("Some contents..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("Some contents..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("Some contents..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-modal")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" loading "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("boolean"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" visible "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("boolean"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"showModal"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      visible`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleOk"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      loading`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        loading`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
        visible`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"2000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleCancel"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      visible`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      loading`),n("span",{class:"token punctuation"},","),t(`
      visible`),n("span",{class:"token punctuation"},","),t(`
      showModal`),n("span",{class:"token punctuation"},","),t(`
      handleOk`),n("span",{class:"token punctuation"},","),t(`
      handleCancel`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),Gn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showModal"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Open Modal with customized footer"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-modal")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("visible")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("visible"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Title"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@ok"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleOk"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#footer"),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("back"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleCancel"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Return"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("submit"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":loading"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("loading"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleOk"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Submit"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("Some contents..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("Some contents..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("Some contents..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("Some contents..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("Some contents..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-modal")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" loading "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" visible "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"showModal"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      visible`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleOk"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      loading`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        loading`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
        visible`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"2000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleCancel"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      visible`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      loading`),n("span",{class:"token punctuation"},","),t(`
      visible`),n("span",{class:"token punctuation"},","),t(`
      showModal`),n("span",{class:"token punctuation"},","),t(`
      handleOk`),n("span",{class:"token punctuation"},","),t(`
      handleCancel`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function Bn(s,a,e,u,i,r){const l=p("a-button"),k=p("a-modal"),d=p("demo-box");return I(),A(d,{jsfiddle:{us:"A more complex example which define a customized footer button bar,\nthe dialog will change to loading state after clicking submit button, when the loading is over,\nthe modal dialog will be closed.\nYou could set `footer` to `null` if you don't need default footer buttons.",cn:"\u66F4\u590D\u6742\u7684\u4F8B\u5B50\uFF0C\u81EA\u5B9A\u4E49\u4E86\u9875\u811A\u7684\u6309\u94AE\uFF0C\u70B9\u51FB\u63D0\u4EA4\u540E\u8FDB\u5165 loading \u72B6\u6001\uFF0C\u5B8C\u6210\u540E\u5173\u95ED\u3002\n\u4E0D\u9700\u8981\u9ED8\u8BA4\u786E\u5B9A\u53D6\u6D88\u6309\u94AE\u65F6\uFF0C\u4F60\u53EF\u4EE5\u628A `footer` \u8BBE\u4E3A `null`\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u66F4\u590D\u6742\u7684\u4F8B\u5B50\uFF0C\u81EA\u5B9A\u4E49\u4E86\u9875\u811A\u7684\u6309\u94AE\uFF0C\u70B9\u51FB\u63D0\u4EA4\u540E\u8FDB\u5165 loading \u72B6\u6001\uFF0C\u5B8C\u6210\u540E\u5173\u95ED\u3002
\u4E0D\u9700\u8981\u9ED8\u8BA4\u786E\u5B9A\u53D6\u6D88\u6309\u94AE\u65F6\uFF0C\u4F60\u53EF\u4EE5\u628A <code>footer</code> \u8BBE\u4E3A <code>null</code>\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>A more complex example which define a customized footer button bar,
the dialog will change to loading state after clicking submit button, when the loading is over,
the modal dialog will be closed.
You could set <code>footer</code> to <code>null</code> if you don't need default footer buttons.</p>
`,order:2,title:{"zh-CN":"\u81EA\u5B9A\u4E49\u9875\u811A","en-US":"Customized Footer"},relativePath:"components/modal/demo/footer.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS1idXR0b24gdHlwZT0icHJpbWFyeSIgQGNsaWNrPSJzaG93TW9kYWwiPk9wZW4gTW9kYWwgd2l0aCBjdXN0b21pemVkIGZvb3RlcjwvYS1idXR0b24+CiAgICA8YS1tb2RhbCB2LW1vZGVsOnZpc2libGU9InZpc2libGUiIHRpdGxlPSJUaXRsZSIgQG9rPSJoYW5kbGVPayI+CiAgICAgIDx0ZW1wbGF0ZSAjZm9vdGVyPgogICAgICAgIDxhLWJ1dHRvbiBrZXk9ImJhY2siIEBjbGljaz0iaGFuZGxlQ2FuY2VsIj5SZXR1cm48L2EtYnV0dG9uPgogICAgICAgIDxhLWJ1dHRvbiBrZXk9InN1Ym1pdCIgdHlwZT0icHJpbWFyeSIgOmxvYWRpbmc9ImxvYWRpbmciIEBjbGljaz0iaGFuZGxlT2siPlN1Ym1pdDwvYS1idXR0b24+CiAgICAgIDwvdGVtcGxhdGU+CiAgICAgIDxwPlNvbWUgY29udGVudHMuLi48L3A+CiAgICAgIDxwPlNvbWUgY29udGVudHMuLi48L3A+CiAgICAgIDxwPlNvbWUgY29udGVudHMuLi48L3A+CiAgICAgIDxwPlNvbWUgY29udGVudHMuLi48L3A+CiAgICAgIDxwPlNvbWUgY29udGVudHMuLi48L3A+CiAgICA8L2EtbW9kYWw+CiAgPC9kaXY+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBsb2FkaW5nID0gcmVmPGJvb2xlYW4+KGZhbHNlKTsKICAgIGNvbnN0IHZpc2libGUgPSByZWY8Ym9vbGVhbj4oZmFsc2UpOwoKICAgIGNvbnN0IHNob3dNb2RhbCA9ICgpID0+IHsKICAgICAgdmlzaWJsZS52YWx1ZSA9IHRydWU7CiAgICB9OwoKICAgIGNvbnN0IGhhbmRsZU9rID0gKCkgPT4gewogICAgICBsb2FkaW5nLnZhbHVlID0gdHJ1ZTsKICAgICAgc2V0VGltZW91dCgoKSA9PiB7CiAgICAgICAgbG9hZGluZy52YWx1ZSA9IGZhbHNlOwogICAgICAgIHZpc2libGUudmFsdWUgPSBmYWxzZTsKICAgICAgfSwgMjAwMCk7CiAgICB9OwoKICAgIGNvbnN0IGhhbmRsZUNhbmNlbCA9ICgpID0+IHsKICAgICAgdmlzaWJsZS52YWx1ZSA9IGZhbHNlOwogICAgfTsKICAgIHJldHVybiB7CiAgICAgIGxvYWRpbmcsCiAgICAgIHZpc2libGUsCiAgICAgIHNob3dNb2RhbCwKICAgICAgaGFuZGxlT2ssCiAgICAgIGhhbmRsZUNhbmNlbCwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS1idXR0b24gdHlwZT0icHJpbWFyeSIgQGNsaWNrPSJzaG93TW9kYWwiPk9wZW4gTW9kYWwgd2l0aCBjdXN0b21pemVkIGZvb3RlcjwvYS1idXR0b24+CiAgICA8YS1tb2RhbCB2LW1vZGVsOnZpc2libGU9InZpc2libGUiIHRpdGxlPSJUaXRsZSIgQG9rPSJoYW5kbGVPayI+CiAgICAgIDx0ZW1wbGF0ZSAjZm9vdGVyPgogICAgICAgIDxhLWJ1dHRvbiBrZXk9ImJhY2siIEBjbGljaz0iaGFuZGxlQ2FuY2VsIj5SZXR1cm48L2EtYnV0dG9uPgogICAgICAgIDxhLWJ1dHRvbiBrZXk9InN1Ym1pdCIgdHlwZT0icHJpbWFyeSIgOmxvYWRpbmc9ImxvYWRpbmciIEBjbGljaz0iaGFuZGxlT2siPlN1Ym1pdDwvYS1idXR0b24+CiAgICAgIDwvdGVtcGxhdGU+CiAgICAgIDxwPlNvbWUgY29udGVudHMuLi48L3A+CiAgICAgIDxwPlNvbWUgY29udGVudHMuLi48L3A+CiAgICAgIDxwPlNvbWUgY29udGVudHMuLi48L3A+CiAgICAgIDxwPlNvbWUgY29udGVudHMuLi48L3A+CiAgICAgIDxwPlNvbWUgY29udGVudHMuLi48L3A+CiAgICA8L2EtbW9kYWw+CiAgPC9kaXY+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IGxvYWRpbmcgPSByZWYoZmFsc2UpOwogICAgY29uc3QgdmlzaWJsZSA9IHJlZihmYWxzZSk7CiAgICBjb25zdCBzaG93TW9kYWwgPSAoKSA9PiB7CiAgICAgIHZpc2libGUudmFsdWUgPSB0cnVlOwogICAgfTsKICAgIGNvbnN0IGhhbmRsZU9rID0gKCkgPT4gewogICAgICBsb2FkaW5nLnZhbHVlID0gdHJ1ZTsKICAgICAgc2V0VGltZW91dCgoKSA9PiB7CiAgICAgICAgbG9hZGluZy52YWx1ZSA9IGZhbHNlOwogICAgICAgIHZpc2libGUudmFsdWUgPSBmYWxzZTsKICAgICAgfSwgMjAwMCk7CiAgICB9OwogICAgY29uc3QgaGFuZGxlQ2FuY2VsID0gKCkgPT4gewogICAgICB2aXNpYmxlLnZhbHVlID0gZmFsc2U7CiAgICB9OwogICAgcmV0dXJuIHsKICAgICAgbG9hZGluZywKICAgICAgdmlzaWJsZSwKICAgICAgc2hvd01vZGFsLAogICAgICBoYW5kbGVPaywKICAgICAgaGFuZGxlQ2FuY2VsLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+",isdemo:!1}},{default:o(()=>[n("div",null,[c(l,{type:"primary",onClick:s.showModal},{default:o(()=>[t("Open Modal with customized footer")]),_:1},8,["onClick"]),c(k,{visible:s.visible,"onUpdate:visible":a[0]||(a[0]=g=>s.visible=g),title:"Title",onOk:s.handleOk},{footer:o(()=>[c(l,{key:"back",onClick:s.handleCancel},{default:o(()=>[t("Return")]),_:1},8,["onClick"]),c(l,{key:"submit",type:"primary",loading:s.loading,onClick:s.handleOk},{default:o(()=>[t("Submit")]),_:1},8,["loading","onClick"])]),default:o(()=>[fn,yn,vn,wn,Zn]),_:1},8,["visible","onOk"])])]),htmlCode:o(()=>[Wn]),jsVersionHtml:o(()=>[Gn]),_:1},8,["jsfiddle"])}const Yn=b(hn,[["render",Bn]]),Hn=h({setup(){const s=()=>{y.confirm({title:"Do you Want to delete these items?",icon:c(W),content:c("div",{style:"color:red;"},"Some descriptions"),onOk(){console.log("OK")},onCancel(){console.log("Cancel")},class:"test"})},a=()=>{y.confirm({title:"Are you sure delete this task?",icon:c(W),content:"Some descriptions",okText:"Yes",okType:"danger",cancelText:"No",onOk(){console.log("OK")},onCancel(){console.log("Cancel")}})},e=()=>{y.confirm({title:"Are you sure delete this task?",icon:c(W),content:"Some descriptions",okText:"Yes",okType:"danger",okButtonProps:{disabled:!0},cancelText:"No",onOk(){console.log("OK")},onCancel(){console.log("Cancel")}})};function u(){y.confirm({title:"Do you want to delete these items?",icon:c(W),content:"When clicked the OK button, this dialog will be closed after 1 second",async onOk(){try{return await new Promise((i,r)=>{setTimeout(Math.random()>.5?i:r,1e3)})}catch{return console.log("Oops errors!")}},onCancel(){}})}return{showConfirm:s,showDeleteConfirm:a,showPropsConfirm:e,showPromiseConfirm:u}}}),Nn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-space")]),t(),n("span",{class:"token attr-name"},"wrap"),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showConfirm"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Confirm"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showPromiseConfirm"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("With promise"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("dashed"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showDeleteConfirm"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Delete"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("dashed"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showPropsConfirm"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("With extra props"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ExclamationCircleOutlined "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" createVNode"),n("span",{class:"token punctuation"},","),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" Modal "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'ant-design-vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"showConfirm"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      Modal`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"confirm"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Do you Want to delete these items?'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"createVNode"),n("span",{class:"token punctuation"},"("),t("ExclamationCircleOutlined"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"createVNode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'div'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"style"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'color:red;'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'Some descriptions'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token function"},"onOk"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'OK'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token function"},"onCancel"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Cancel'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'test'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"showDeleteConfirm"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      Modal`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"confirm"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Are you sure delete this task?'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"createVNode"),n("span",{class:"token punctuation"},"("),t("ExclamationCircleOutlined"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Some descriptions'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"okText"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Yes'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"okType"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'danger'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"cancelText"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'No'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token function"},"onOk"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'OK'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token function"},"onCancel"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Cancel'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"showPropsConfirm"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      Modal`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"confirm"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Are you sure delete this task?'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"createVNode"),n("span",{class:"token punctuation"},"("),t("ExclamationCircleOutlined"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Some descriptions'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"okText"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Yes'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"okType"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'danger'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"okButtonProps"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"cancelText"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'No'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token function"},"onOk"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'OK'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token function"},"onCancel"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Cancel'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"showPromiseConfirm"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      Modal`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"confirm"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Do you want to delete these items?'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"createVNode"),n("span",{class:"token punctuation"},"("),t("ExclamationCircleOutlined"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'When clicked the OK button, this dialog will be closed after 1 second'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token keyword"},"async"),t(),n("span",{class:"token function"},"onOk"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token keyword"},"try"),t(),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token keyword"},"await"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("resolve"),n("span",{class:"token punctuation"},","),t(" reject")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
              `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),t("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},">"),t(),n("span",{class:"token number"},"0.5"),t(),n("span",{class:"token operator"},"?"),t(" resolve "),n("span",{class:"token operator"},":"),t(" reject"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
          `),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"catch"),t(),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token keyword"},"return"),t(" console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Oops errors!'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
          `),n("span",{class:"token punctuation"},"}"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token function"},"onCancel"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      showConfirm`),n("span",{class:"token punctuation"},","),t(`
      showDeleteConfirm`),n("span",{class:"token punctuation"},","),t(`
      showPropsConfirm`),n("span",{class:"token punctuation"},","),t(`
      showPromiseConfirm`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),xn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-space")]),t(),n("span",{class:"token attr-name"},"wrap"),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showConfirm"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Confirm"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showPromiseConfirm"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("With promise"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("dashed"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showDeleteConfirm"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Delete"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("dashed"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showPropsConfirm"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("With extra props"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ExclamationCircleOutlined "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" createVNode"),n("span",{class:"token punctuation"},","),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" Modal "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'ant-design-vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"showConfirm"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      Modal`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"confirm"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Do you Want to delete these items?'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"createVNode"),n("span",{class:"token punctuation"},"("),t("ExclamationCircleOutlined"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"createVNode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'div'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token literal-property property"},"style"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'color:red;'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'Some descriptions'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token function"},"onOk"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'OK'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token function"},"onCancel"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Cancel'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'test'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"showDeleteConfirm"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      Modal`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"confirm"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Are you sure delete this task?'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"createVNode"),n("span",{class:"token punctuation"},"("),t("ExclamationCircleOutlined"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Some descriptions'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"okText"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Yes'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"okType"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'danger'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"cancelText"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'No'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token function"},"onOk"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'OK'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token function"},"onCancel"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Cancel'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"showPropsConfirm"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      Modal`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"confirm"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Are you sure delete this task?'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"createVNode"),n("span",{class:"token punctuation"},"("),t("ExclamationCircleOutlined"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Some descriptions'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"okText"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Yes'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"okType"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'danger'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"okButtonProps"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"cancelText"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'No'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token function"},"onOk"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'OK'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token function"},"onCancel"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Cancel'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"showPromiseConfirm"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      Modal`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"confirm"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Do you want to delete these items?'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"createVNode"),n("span",{class:"token punctuation"},"("),t("ExclamationCircleOutlined"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'When clicked the OK button, this dialog will be closed after 1 second'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token keyword"},"async"),t(),n("span",{class:"token function"},"onOk"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token keyword"},"try"),t(),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token keyword"},"await"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("resolve"),n("span",{class:"token punctuation"},","),t(" reject")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
              `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),t("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},">"),t(),n("span",{class:"token number"},"0.5"),t(),n("span",{class:"token operator"},"?"),t(" resolve "),n("span",{class:"token operator"},":"),t(" reject"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
          `),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"catch"),t(),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token keyword"},"return"),t(" console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Oops errors!'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
          `),n("span",{class:"token punctuation"},"}"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token function"},"onCancel"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      showConfirm`),n("span",{class:"token punctuation"},","),t(`
      showDeleteConfirm`),n("span",{class:"token punctuation"},","),t(`
      showPropsConfirm`),n("span",{class:"token punctuation"},","),t(`
      showPromiseConfirm`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function Sn(s,a,e,u,i,r){const l=p("a-button"),k=p("a-space"),d=p("demo-box");return I(),A(d,{jsfiddle:{us:"To use `confirm()` to show a confirmation modal dialog.",cn:"\u4F7F\u7528 `confirm()` \u53EF\u4EE5\u5FEB\u6377\u5730\u5F39\u51FA\u786E\u8BA4\u6846\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u4F7F\u7528 <code>confirm()</code> \u53EF\u4EE5\u5FEB\u6377\u5730\u5F39\u51FA\u786E\u8BA4\u6846\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>To use <code>confirm()</code> to show a confirmation modal dialog.</p>
`,order:3,title:{"zh-CN":"\u786E\u8BA4\u5BF9\u8BDD\u6846","en-US":"Confirmation modal dialog"},relativePath:"components/modal/demo/confirm.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIHdyYXA+CiAgICA8YS1idXR0b24gQGNsaWNrPSJzaG93Q29uZmlybSI+Q29uZmlybTwvYS1idXR0b24+CiAgICA8YS1idXR0b24gQGNsaWNrPSJzaG93UHJvbWlzZUNvbmZpcm0iPldpdGggcHJvbWlzZTwvYS1idXR0b24+CiAgICA8YS1idXR0b24gdHlwZT0iZGFzaGVkIiBAY2xpY2s9InNob3dEZWxldGVDb25maXJtIj5EZWxldGU8L2EtYnV0dG9uPgogICAgPGEtYnV0dG9uIHR5cGU9ImRhc2hlZCIgQGNsaWNrPSJzaG93UHJvcHNDb25maXJtIj5XaXRoIGV4dHJhIHByb3BzPC9hLWJ1dHRvbj4KICA8L2Etc3BhY2U+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBFeGNsYW1hdGlvbkNpcmNsZU91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMtdnVlJzsKaW1wb3J0IHsgY3JlYXRlVk5vZGUsIGRlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnYW50LWRlc2lnbi12dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3Qgc2hvd0NvbmZpcm0gPSAoKSA9PiB7CiAgICAgIE1vZGFsLmNvbmZpcm0oewogICAgICAgIHRpdGxlOiAnRG8geW91IFdhbnQgdG8gZGVsZXRlIHRoZXNlIGl0ZW1zPycsCiAgICAgICAgaWNvbjogY3JlYXRlVk5vZGUoRXhjbGFtYXRpb25DaXJjbGVPdXRsaW5lZCksCiAgICAgICAgY29udGVudDogY3JlYXRlVk5vZGUoJ2RpdicsIHsgc3R5bGU6ICdjb2xvcjpyZWQ7JyB9LCAnU29tZSBkZXNjcmlwdGlvbnMnKSwKICAgICAgICBvbk9rKCkgewogICAgICAgICAgY29uc29sZS5sb2coJ09LJyk7CiAgICAgICAgfSwKICAgICAgICBvbkNhbmNlbCgpIHsKICAgICAgICAgIGNvbnNvbGUubG9nKCdDYW5jZWwnKTsKICAgICAgICB9LAogICAgICAgIGNsYXNzOiAndGVzdCcsCiAgICAgIH0pOwogICAgfTsKICAgIGNvbnN0IHNob3dEZWxldGVDb25maXJtID0gKCkgPT4gewogICAgICBNb2RhbC5jb25maXJtKHsKICAgICAgICB0aXRsZTogJ0FyZSB5b3Ugc3VyZSBkZWxldGUgdGhpcyB0YXNrPycsCiAgICAgICAgaWNvbjogY3JlYXRlVk5vZGUoRXhjbGFtYXRpb25DaXJjbGVPdXRsaW5lZCksCiAgICAgICAgY29udGVudDogJ1NvbWUgZGVzY3JpcHRpb25zJywKICAgICAgICBva1RleHQ6ICdZZXMnLAogICAgICAgIG9rVHlwZTogJ2RhbmdlcicsCiAgICAgICAgY2FuY2VsVGV4dDogJ05vJywKICAgICAgICBvbk9rKCkgewogICAgICAgICAgY29uc29sZS5sb2coJ09LJyk7CiAgICAgICAgfSwKICAgICAgICBvbkNhbmNlbCgpIHsKICAgICAgICAgIGNvbnNvbGUubG9nKCdDYW5jZWwnKTsKICAgICAgICB9LAogICAgICB9KTsKICAgIH07CiAgICBjb25zdCBzaG93UHJvcHNDb25maXJtID0gKCkgPT4gewogICAgICBNb2RhbC5jb25maXJtKHsKICAgICAgICB0aXRsZTogJ0FyZSB5b3Ugc3VyZSBkZWxldGUgdGhpcyB0YXNrPycsCiAgICAgICAgaWNvbjogY3JlYXRlVk5vZGUoRXhjbGFtYXRpb25DaXJjbGVPdXRsaW5lZCksCiAgICAgICAgY29udGVudDogJ1NvbWUgZGVzY3JpcHRpb25zJywKICAgICAgICBva1RleHQ6ICdZZXMnLAogICAgICAgIG9rVHlwZTogJ2RhbmdlcicsCiAgICAgICAgb2tCdXR0b25Qcm9wczogewogICAgICAgICAgZGlzYWJsZWQ6IHRydWUsCiAgICAgICAgfSwKICAgICAgICBjYW5jZWxUZXh0OiAnTm8nLAogICAgICAgIG9uT2soKSB7CiAgICAgICAgICBjb25zb2xlLmxvZygnT0snKTsKICAgICAgICB9LAogICAgICAgIG9uQ2FuY2VsKCkgewogICAgICAgICAgY29uc29sZS5sb2coJ0NhbmNlbCcpOwogICAgICAgIH0sCiAgICAgIH0pOwogICAgfTsKCiAgICBmdW5jdGlvbiBzaG93UHJvbWlzZUNvbmZpcm0oKSB7CiAgICAgIE1vZGFsLmNvbmZpcm0oewogICAgICAgIHRpdGxlOiAnRG8geW91IHdhbnQgdG8gZGVsZXRlIHRoZXNlIGl0ZW1zPycsCiAgICAgICAgaWNvbjogY3JlYXRlVk5vZGUoRXhjbGFtYXRpb25DaXJjbGVPdXRsaW5lZCksCiAgICAgICAgY29udGVudDogJ1doZW4gY2xpY2tlZCB0aGUgT0sgYnV0dG9uLCB0aGlzIGRpYWxvZyB3aWxsIGJlIGNsb3NlZCBhZnRlciAxIHNlY29uZCcsCiAgICAgICAgYXN5bmMgb25PaygpIHsKICAgICAgICAgIHRyeSB7CiAgICAgICAgICAgIHJldHVybiBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7CiAgICAgICAgICAgICAgc2V0VGltZW91dChNYXRoLnJhbmRvbSgpID4gMC41ID8gcmVzb2x2ZSA6IHJlamVjdCwgMTAwMCk7CiAgICAgICAgICAgIH0pOwogICAgICAgICAgfSBjYXRjaCB7CiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmxvZygnT29wcyBlcnJvcnMhJyk7CiAgICAgICAgICB9CiAgICAgICAgfSwKICAgICAgICBvbkNhbmNlbCgpIHt9LAogICAgICB9KTsKICAgIH0KICAgIHJldHVybiB7CiAgICAgIHNob3dDb25maXJtLAogICAgICBzaG93RGVsZXRlQ29uZmlybSwKICAgICAgc2hvd1Byb3BzQ29uZmlybSwKICAgICAgc2hvd1Byb21pc2VDb25maXJtLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIHdyYXA+CiAgICA8YS1idXR0b24gQGNsaWNrPSJzaG93Q29uZmlybSI+Q29uZmlybTwvYS1idXR0b24+CiAgICA8YS1idXR0b24gQGNsaWNrPSJzaG93UHJvbWlzZUNvbmZpcm0iPldpdGggcHJvbWlzZTwvYS1idXR0b24+CiAgICA8YS1idXR0b24gdHlwZT0iZGFzaGVkIiBAY2xpY2s9InNob3dEZWxldGVDb25maXJtIj5EZWxldGU8L2EtYnV0dG9uPgogICAgPGEtYnV0dG9uIHR5cGU9ImRhc2hlZCIgQGNsaWNrPSJzaG93UHJvcHNDb25maXJtIj5XaXRoIGV4dHJhIHByb3BzPC9hLWJ1dHRvbj4KICA8L2Etc3BhY2U+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IEV4Y2xhbWF0aW9uQ2lyY2xlT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy12dWUnOwppbXBvcnQgeyBjcmVhdGVWTm9kZSwgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJzsKaW1wb3J0IHsgTW9kYWwgfSBmcm9tICdhbnQtZGVzaWduLXZ1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBzaG93Q29uZmlybSA9ICgpID0+IHsKICAgICAgTW9kYWwuY29uZmlybSh7CiAgICAgICAgdGl0bGU6ICdEbyB5b3UgV2FudCB0byBkZWxldGUgdGhlc2UgaXRlbXM/JywKICAgICAgICBpY29uOiBjcmVhdGVWTm9kZShFeGNsYW1hdGlvbkNpcmNsZU91dGxpbmVkKSwKICAgICAgICBjb250ZW50OiBjcmVhdGVWTm9kZSgnZGl2JywgewogICAgICAgICAgc3R5bGU6ICdjb2xvcjpyZWQ7JywKICAgICAgICB9LCAnU29tZSBkZXNjcmlwdGlvbnMnKSwKICAgICAgICBvbk9rKCkgewogICAgICAgICAgY29uc29sZS5sb2coJ09LJyk7CiAgICAgICAgfSwKICAgICAgICBvbkNhbmNlbCgpIHsKICAgICAgICAgIGNvbnNvbGUubG9nKCdDYW5jZWwnKTsKICAgICAgICB9LAogICAgICAgIGNsYXNzOiAndGVzdCcsCiAgICAgIH0pOwogICAgfTsKICAgIGNvbnN0IHNob3dEZWxldGVDb25maXJtID0gKCkgPT4gewogICAgICBNb2RhbC5jb25maXJtKHsKICAgICAgICB0aXRsZTogJ0FyZSB5b3Ugc3VyZSBkZWxldGUgdGhpcyB0YXNrPycsCiAgICAgICAgaWNvbjogY3JlYXRlVk5vZGUoRXhjbGFtYXRpb25DaXJjbGVPdXRsaW5lZCksCiAgICAgICAgY29udGVudDogJ1NvbWUgZGVzY3JpcHRpb25zJywKICAgICAgICBva1RleHQ6ICdZZXMnLAogICAgICAgIG9rVHlwZTogJ2RhbmdlcicsCiAgICAgICAgY2FuY2VsVGV4dDogJ05vJywKICAgICAgICBvbk9rKCkgewogICAgICAgICAgY29uc29sZS5sb2coJ09LJyk7CiAgICAgICAgfSwKICAgICAgICBvbkNhbmNlbCgpIHsKICAgICAgICAgIGNvbnNvbGUubG9nKCdDYW5jZWwnKTsKICAgICAgICB9LAogICAgICB9KTsKICAgIH07CiAgICBjb25zdCBzaG93UHJvcHNDb25maXJtID0gKCkgPT4gewogICAgICBNb2RhbC5jb25maXJtKHsKICAgICAgICB0aXRsZTogJ0FyZSB5b3Ugc3VyZSBkZWxldGUgdGhpcyB0YXNrPycsCiAgICAgICAgaWNvbjogY3JlYXRlVk5vZGUoRXhjbGFtYXRpb25DaXJjbGVPdXRsaW5lZCksCiAgICAgICAgY29udGVudDogJ1NvbWUgZGVzY3JpcHRpb25zJywKICAgICAgICBva1RleHQ6ICdZZXMnLAogICAgICAgIG9rVHlwZTogJ2RhbmdlcicsCiAgICAgICAgb2tCdXR0b25Qcm9wczogewogICAgICAgICAgZGlzYWJsZWQ6IHRydWUsCiAgICAgICAgfSwKICAgICAgICBjYW5jZWxUZXh0OiAnTm8nLAogICAgICAgIG9uT2soKSB7CiAgICAgICAgICBjb25zb2xlLmxvZygnT0snKTsKICAgICAgICB9LAogICAgICAgIG9uQ2FuY2VsKCkgewogICAgICAgICAgY29uc29sZS5sb2coJ0NhbmNlbCcpOwogICAgICAgIH0sCiAgICAgIH0pOwogICAgfTsKICAgIGZ1bmN0aW9uIHNob3dQcm9taXNlQ29uZmlybSgpIHsKICAgICAgTW9kYWwuY29uZmlybSh7CiAgICAgICAgdGl0bGU6ICdEbyB5b3Ugd2FudCB0byBkZWxldGUgdGhlc2UgaXRlbXM/JywKICAgICAgICBpY29uOiBjcmVhdGVWTm9kZShFeGNsYW1hdGlvbkNpcmNsZU91dGxpbmVkKSwKICAgICAgICBjb250ZW50OiAnV2hlbiBjbGlja2VkIHRoZSBPSyBidXR0b24sIHRoaXMgZGlhbG9nIHdpbGwgYmUgY2xvc2VkIGFmdGVyIDEgc2Vjb25kJywKICAgICAgICBhc3luYyBvbk9rKCkgewogICAgICAgICAgdHJ5IHsKICAgICAgICAgICAgcmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHsKICAgICAgICAgICAgICBzZXRUaW1lb3V0KE1hdGgucmFuZG9tKCkgPiAwLjUgPyByZXNvbHZlIDogcmVqZWN0LCAxMDAwKTsKICAgICAgICAgICAgfSk7CiAgICAgICAgICB9IGNhdGNoIHsKICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKCdPb3BzIGVycm9ycyEnKTsKICAgICAgICAgIH0KICAgICAgICB9LAogICAgICAgIG9uQ2FuY2VsKCkge30sCiAgICAgIH0pOwogICAgfQogICAgcmV0dXJuIHsKICAgICAgc2hvd0NvbmZpcm0sCiAgICAgIHNob3dEZWxldGVDb25maXJtLAogICAgICBzaG93UHJvcHNDb25maXJtLAogICAgICBzaG93UHJvbWlzZUNvbmZpcm0sCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4=",isdemo:!1}},{default:o(()=>[c(k,{wrap:""},{default:o(()=>[c(l,{onClick:s.showConfirm},{default:o(()=>[t("Confirm")]),_:1},8,["onClick"]),c(l,{onClick:s.showPromiseConfirm},{default:o(()=>[t("With promise")]),_:1},8,["onClick"]),c(l,{type:"dashed",onClick:s.showDeleteConfirm},{default:o(()=>[t("Delete")]),_:1},8,["onClick"]),c(l,{type:"dashed",onClick:s.showPropsConfirm},{default:o(()=>[t("With extra props")]),_:1},8,["onClick"])]),_:1})]),htmlCode:o(()=>[Nn]),jsVersionHtml:o(()=>[xn]),_:1},8,["jsfiddle"])}const Vn=b(Hn,[["render",Sn]]),Rn=h({setup(){return{info:()=>{y.info({title:"This is a notification message",content:Y("div",{},[Y("p","some messages...some messages..."),Y("p","some messages...some messages...")]),onOk(){console.log("ok")}})},success:()=>{y.success({title:"This is a success message",content:Y("div",{},[Y("p","some messages...some messages..."),Y("p","some messages...some messages...")])})},error:()=>{y.error({title:"This is an error message",content:"some messages...some messages..."})},warning:()=>{y.warning({title:"This is a warning message",content:"some messages...some messages..."})}}}}),Pn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-space")]),t(),n("span",{class:"token attr-name"},"wrap"),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("info"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Info"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("success"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Success"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("error"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Error"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("warning"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Warning"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" Modal "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'ant-design-vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" h "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"info"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      Modal`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"info"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'This is a notification message'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'div'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'p'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'some messages...some messages...'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'p'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'some messages...some messages...'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token function"},"onOk"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'ok'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"success"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      Modal`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'This is a success message'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'div'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'p'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'some messages...some messages...'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'p'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'some messages...some messages...'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"error"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      Modal`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'This is an error message'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'some messages...some messages...'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"warning"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      Modal`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"warning"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'This is a warning message'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'some messages...some messages...'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      info`),n("span",{class:"token punctuation"},","),t(`
      success`),n("span",{class:"token punctuation"},","),t(`
      error`),n("span",{class:"token punctuation"},","),t(`
      warning`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),Kn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-space")]),t(),n("span",{class:"token attr-name"},"wrap"),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("info"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Info"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("success"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Success"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("error"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Error"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("warning"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Warning"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" Modal "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'ant-design-vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" h "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"info"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      Modal`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"info"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'This is a notification message'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'div'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'p'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'some messages...some messages...'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'p'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'some messages...some messages...'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token function"},"onOk"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'ok'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"success"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      Modal`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'This is a success message'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'div'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'p'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'some messages...some messages...'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'p'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'some messages...some messages...'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"error"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      Modal`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'This is an error message'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'some messages...some messages...'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"warning"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      Modal`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"warning"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'This is a warning message'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'some messages...some messages...'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      info`),n("span",{class:"token punctuation"},","),t(`
      success`),n("span",{class:"token punctuation"},","),t(`
      error`),n("span",{class:"token punctuation"},","),t(`
      warning`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function Xn(s,a,e,u,i,r){const l=p("a-button"),k=p("a-space"),d=p("demo-box");return I(),A(d,{jsfiddle:{us:"In the various types of information modal dialog, only one button to close dialog is provided.",cn:"\u5404\u79CD\u7C7B\u578B\u7684\u4FE1\u606F\u63D0\u793A\uFF0C\u53EA\u63D0\u4F9B\u4E00\u4E2A\u6309\u94AE\u7528\u4E8E\u5173\u95ED\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u5404\u79CD\u7C7B\u578B\u7684\u4FE1\u606F\u63D0\u793A\uFF0C\u53EA\u63D0\u4F9B\u4E00\u4E2A\u6309\u94AE\u7528\u4E8E\u5173\u95ED\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>In the various types of information modal dialog, only one button to close dialog is provided.</p>
`,order:4,title:{"zh-CN":"\u4FE1\u606F\u63D0\u793A","en-US":"Information modal dialog"},relativePath:"components/modal/demo/info.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIHdyYXA+CiAgICA8YS1idXR0b24gQGNsaWNrPSJpbmZvIj5JbmZvPC9hLWJ1dHRvbj4KICAgIDxhLWJ1dHRvbiBAY2xpY2s9InN1Y2Nlc3MiPlN1Y2Nlc3M8L2EtYnV0dG9uPgogICAgPGEtYnV0dG9uIEBjbGljaz0iZXJyb3IiPkVycm9yPC9hLWJ1dHRvbj4KICAgIDxhLWJ1dHRvbiBAY2xpY2s9Indhcm5pbmciPldhcm5pbmc8L2EtYnV0dG9uPgogIDwvYS1zcGFjZT4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnYW50LWRlc2lnbi12dWUnOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIGggfSBmcm9tICd2dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgaW5mbyA9ICgpID0+IHsKICAgICAgTW9kYWwuaW5mbyh7CiAgICAgICAgdGl0bGU6ICdUaGlzIGlzIGEgbm90aWZpY2F0aW9uIG1lc3NhZ2UnLAogICAgICAgIGNvbnRlbnQ6IGgoJ2RpdicsIHt9LCBbCiAgICAgICAgICBoKCdwJywgJ3NvbWUgbWVzc2FnZXMuLi5zb21lIG1lc3NhZ2VzLi4uJyksCiAgICAgICAgICBoKCdwJywgJ3NvbWUgbWVzc2FnZXMuLi5zb21lIG1lc3NhZ2VzLi4uJyksCiAgICAgICAgXSksCiAgICAgICAgb25PaygpIHsKICAgICAgICAgIGNvbnNvbGUubG9nKCdvaycpOwogICAgICAgIH0sCiAgICAgIH0pOwogICAgfTsKICAgIGNvbnN0IHN1Y2Nlc3MgPSAoKSA9PiB7CiAgICAgIE1vZGFsLnN1Y2Nlc3MoewogICAgICAgIHRpdGxlOiAnVGhpcyBpcyBhIHN1Y2Nlc3MgbWVzc2FnZScsCiAgICAgICAgY29udGVudDogaCgnZGl2Jywge30sIFsKICAgICAgICAgIGgoJ3AnLCAnc29tZSBtZXNzYWdlcy4uLnNvbWUgbWVzc2FnZXMuLi4nKSwKICAgICAgICAgIGgoJ3AnLCAnc29tZSBtZXNzYWdlcy4uLnNvbWUgbWVzc2FnZXMuLi4nKSwKICAgICAgICBdKSwKICAgICAgfSk7CiAgICB9OwoKICAgIGNvbnN0IGVycm9yID0gKCkgPT4gewogICAgICBNb2RhbC5lcnJvcih7CiAgICAgICAgdGl0bGU6ICdUaGlzIGlzIGFuIGVycm9yIG1lc3NhZ2UnLAogICAgICAgIGNvbnRlbnQ6ICdzb21lIG1lc3NhZ2VzLi4uc29tZSBtZXNzYWdlcy4uLicsCiAgICAgIH0pOwogICAgfTsKCiAgICBjb25zdCB3YXJuaW5nID0gKCkgPT4gewogICAgICBNb2RhbC53YXJuaW5nKHsKICAgICAgICB0aXRsZTogJ1RoaXMgaXMgYSB3YXJuaW5nIG1lc3NhZ2UnLAogICAgICAgIGNvbnRlbnQ6ICdzb21lIG1lc3NhZ2VzLi4uc29tZSBtZXNzYWdlcy4uLicsCiAgICAgIH0pOwogICAgfTsKCiAgICByZXR1cm4gewogICAgICBpbmZvLAogICAgICBzdWNjZXNzLAogICAgICBlcnJvciwKICAgICAgd2FybmluZywKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIHdyYXA+CiAgICA8YS1idXR0b24gQGNsaWNrPSJpbmZvIj5JbmZvPC9hLWJ1dHRvbj4KICAgIDxhLWJ1dHRvbiBAY2xpY2s9InN1Y2Nlc3MiPlN1Y2Nlc3M8L2EtYnV0dG9uPgogICAgPGEtYnV0dG9uIEBjbGljaz0iZXJyb3IiPkVycm9yPC9hLWJ1dHRvbj4KICAgIDxhLWJ1dHRvbiBAY2xpY2s9Indhcm5pbmciPldhcm5pbmc8L2EtYnV0dG9uPgogIDwvYS1zcGFjZT4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgTW9kYWwgfSBmcm9tICdhbnQtZGVzaWduLXZ1ZSc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgaCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBpbmZvID0gKCkgPT4gewogICAgICBNb2RhbC5pbmZvKHsKICAgICAgICB0aXRsZTogJ1RoaXMgaXMgYSBub3RpZmljYXRpb24gbWVzc2FnZScsCiAgICAgICAgY29udGVudDogaCgnZGl2Jywge30sIFtoKCdwJywgJ3NvbWUgbWVzc2FnZXMuLi5zb21lIG1lc3NhZ2VzLi4uJyksIGgoJ3AnLCAnc29tZSBtZXNzYWdlcy4uLnNvbWUgbWVzc2FnZXMuLi4nKV0pLAogICAgICAgIG9uT2soKSB7CiAgICAgICAgICBjb25zb2xlLmxvZygnb2snKTsKICAgICAgICB9LAogICAgICB9KTsKICAgIH07CiAgICBjb25zdCBzdWNjZXNzID0gKCkgPT4gewogICAgICBNb2RhbC5zdWNjZXNzKHsKICAgICAgICB0aXRsZTogJ1RoaXMgaXMgYSBzdWNjZXNzIG1lc3NhZ2UnLAogICAgICAgIGNvbnRlbnQ6IGgoJ2RpdicsIHt9LCBbaCgncCcsICdzb21lIG1lc3NhZ2VzLi4uc29tZSBtZXNzYWdlcy4uLicpLCBoKCdwJywgJ3NvbWUgbWVzc2FnZXMuLi5zb21lIG1lc3NhZ2VzLi4uJyldKSwKICAgICAgfSk7CiAgICB9OwogICAgY29uc3QgZXJyb3IgPSAoKSA9PiB7CiAgICAgIE1vZGFsLmVycm9yKHsKICAgICAgICB0aXRsZTogJ1RoaXMgaXMgYW4gZXJyb3IgbWVzc2FnZScsCiAgICAgICAgY29udGVudDogJ3NvbWUgbWVzc2FnZXMuLi5zb21lIG1lc3NhZ2VzLi4uJywKICAgICAgfSk7CiAgICB9OwogICAgY29uc3Qgd2FybmluZyA9ICgpID0+IHsKICAgICAgTW9kYWwud2FybmluZyh7CiAgICAgICAgdGl0bGU6ICdUaGlzIGlzIGEgd2FybmluZyBtZXNzYWdlJywKICAgICAgICBjb250ZW50OiAnc29tZSBtZXNzYWdlcy4uLnNvbWUgbWVzc2FnZXMuLi4nLAogICAgICB9KTsKICAgIH07CiAgICByZXR1cm4gewogICAgICBpbmZvLAogICAgICBzdWNjZXNzLAogICAgICBlcnJvciwKICAgICAgd2FybmluZywKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0Pg==",isdemo:!1}},{default:o(()=>[c(k,{wrap:""},{default:o(()=>[c(l,{onClick:s.info},{default:o(()=>[t("Info")]),_:1},8,["onClick"]),c(l,{onClick:s.success},{default:o(()=>[t("Success")]),_:1},8,["onClick"]),c(l,{onClick:s.error},{default:o(()=>[t("Error")]),_:1},8,["onClick"]),c(l,{onClick:s.warning},{default:o(()=>[t("Warning")]),_:1},8,["onClick"])]),_:1})]),htmlCode:o(()=>[Pn]),jsVersionHtml:o(()=>[Kn]),_:1},8,["jsfiddle"])}const Tn=b(Rn,[["render",Xn]]),Jn=h({setup(){const s=m(!1);return{visible:s,showModal:()=>{s.value=!0},hideModal:()=>{s.value=!1},confirm:()=>{y.confirm({title:"Confirm",icon:c(W),content:"Bla bla ...",okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88"})}}}}),Fn=n("p",null,"Bla bla ...",-1),Dn=n("p",null,"Bla bla ...",-1),Mn=n("p",null,"Bla bla ...",-1),zn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showModal"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Modal"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("confirm"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Confirm"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-modal")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("visible")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("visible"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Modal"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"ok-text"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u786E\u8BA4"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"cancel-text"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u53D6\u6D88"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"@ok"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("hideModal"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("Bla bla ..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("Bla bla ..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("Bla bla ..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-modal")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ExclamationCircleOutlined "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t(" createVNode "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" Modal "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'ant-design-vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" visible "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("boolean"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"showModal"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      visible`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"hideModal"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      visible`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"confirm"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      Modal`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"confirm"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Confirm'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"createVNode"),n("span",{class:"token punctuation"},"("),t("ExclamationCircleOutlined"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Bla bla ...'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"okText"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u786E\u8BA4'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"cancelText"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u53D6\u6D88'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      visible`),n("span",{class:"token punctuation"},","),t(`
      showModal`),n("span",{class:"token punctuation"},","),t(`
      hideModal`),n("span",{class:"token punctuation"},","),t(`
      confirm`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),jn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showModal"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Modal"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("confirm"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Confirm"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-modal")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("visible")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("visible"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Modal"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"ok-text"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u786E\u8BA4"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"cancel-text"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u53D6\u6D88"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"@ok"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("hideModal"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("Bla bla ..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("Bla bla ..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("Bla bla ..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-modal")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ExclamationCircleOutlined "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t(" createVNode "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" Modal "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'ant-design-vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" visible "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"showModal"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      visible`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"hideModal"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      visible`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"confirm"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      Modal`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"confirm"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Confirm'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"createVNode"),n("span",{class:"token punctuation"},"("),t("ExclamationCircleOutlined"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Bla bla ...'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"okText"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u786E\u8BA4'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"cancelText"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u53D6\u6D88'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      visible`),n("span",{class:"token punctuation"},","),t(`
      showModal`),n("span",{class:"token punctuation"},","),t(`
      hideModal`),n("span",{class:"token punctuation"},","),t(`
      confirm`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function Un(s,a,e,u,i,r){const l=p("a-button"),k=p("a-modal"),d=p("demo-box");return I(),A(d,{jsfiddle:{us:"To customize the text of the buttons, you need to set `okText` and `cancelText` props.",cn:"\u8BBE\u7F6E `okText` \u4E0E `cancelText` \u4EE5\u81EA\u5B9A\u4E49\u6309\u94AE\u6587\u5B57\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u8BBE\u7F6E <code>okText</code> \u4E0E <code>cancelText</code> \u4EE5\u81EA\u5B9A\u4E49\u6309\u94AE\u6587\u5B57\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>To customize the text of the buttons, you need to set <code>okText</code> and <code>cancelText</code> props.</p>
`,order:5,title:{"zh-CN":"\u56FD\u9645\u5316","en-US":"Internationalization"},relativePath:"components/modal/demo/locale.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS1idXR0b24gdHlwZT0icHJpbWFyeSIgQGNsaWNrPSJzaG93TW9kYWwiPk1vZGFsPC9hLWJ1dHRvbj4KICAgIDxhLWJ1dHRvbiBAY2xpY2s9ImNvbmZpcm0iPkNvbmZpcm08L2EtYnV0dG9uPgogICAgPGEtbW9kYWwKICAgICAgdi1tb2RlbDp2aXNpYmxlPSJ2aXNpYmxlIgogICAgICB0aXRsZT0iTW9kYWwiCiAgICAgIG9rLXRleHQ9IuehruiupCIKICAgICAgY2FuY2VsLXRleHQ9IuWPlua2iCIKICAgICAgQG9rPSJoaWRlTW9kYWwiCiAgICA+CiAgICAgIDxwPkJsYSBibGEgLi4uPC9wPgogICAgICA8cD5CbGEgYmxhIC4uLjwvcD4KICAgICAgPHA+QmxhIGJsYSAuLi48L3A+CiAgICA8L2EtbW9kYWw+CiAgPC9kaXY+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBFeGNsYW1hdGlvbkNpcmNsZU91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMtdnVlJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYsIGNyZWF0ZVZOb2RlIH0gZnJvbSAndnVlJzsKaW1wb3J0IHsgTW9kYWwgfSBmcm9tICdhbnQtZGVzaWduLXZ1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCB2aXNpYmxlID0gcmVmPGJvb2xlYW4+KGZhbHNlKTsKCiAgICBjb25zdCBzaG93TW9kYWwgPSAoKSA9PiB7CiAgICAgIHZpc2libGUudmFsdWUgPSB0cnVlOwogICAgfTsKICAgIGNvbnN0IGhpZGVNb2RhbCA9ICgpID0+IHsKICAgICAgdmlzaWJsZS52YWx1ZSA9IGZhbHNlOwogICAgfTsKCiAgICBjb25zdCBjb25maXJtID0gKCkgPT4gewogICAgICBNb2RhbC5jb25maXJtKHsKICAgICAgICB0aXRsZTogJ0NvbmZpcm0nLAogICAgICAgIGljb246IGNyZWF0ZVZOb2RlKEV4Y2xhbWF0aW9uQ2lyY2xlT3V0bGluZWQpLAogICAgICAgIGNvbnRlbnQ6ICdCbGEgYmxhIC4uLicsCiAgICAgICAgb2tUZXh0OiAn56Gu6K6kJywKICAgICAgICBjYW5jZWxUZXh0OiAn5Y+W5raIJywKICAgICAgfSk7CiAgICB9OwoKICAgIHJldHVybiB7CiAgICAgIHZpc2libGUsCiAgICAgIHNob3dNb2RhbCwKICAgICAgaGlkZU1vZGFsLAogICAgICBjb25maXJtLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS1idXR0b24gdHlwZT0icHJpbWFyeSIgQGNsaWNrPSJzaG93TW9kYWwiPk1vZGFsPC9hLWJ1dHRvbj4KICAgIDxhLWJ1dHRvbiBAY2xpY2s9ImNvbmZpcm0iPkNvbmZpcm08L2EtYnV0dG9uPgogICAgPGEtbW9kYWwKICAgICAgdi1tb2RlbDp2aXNpYmxlPSJ2aXNpYmxlIgogICAgICB0aXRsZT0iTW9kYWwiCiAgICAgIG9rLXRleHQ9IuehruiupCIKICAgICAgY2FuY2VsLXRleHQ9IuWPlua2iCIKICAgICAgQG9rPSJoaWRlTW9kYWwiCiAgICA+CiAgICAgIDxwPkJsYSBibGEgLi4uPC9wPgogICAgICA8cD5CbGEgYmxhIC4uLjwvcD4KICAgICAgPHA+QmxhIGJsYSAuLi48L3A+CiAgICA8L2EtbW9kYWw+CiAgPC9kaXY+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IEV4Y2xhbWF0aW9uQ2lyY2xlT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy12dWUnOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiwgY3JlYXRlVk5vZGUgfSBmcm9tICd2dWUnOwppbXBvcnQgeyBNb2RhbCB9IGZyb20gJ2FudC1kZXNpZ24tdnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IHZpc2libGUgPSByZWYoZmFsc2UpOwogICAgY29uc3Qgc2hvd01vZGFsID0gKCkgPT4gewogICAgICB2aXNpYmxlLnZhbHVlID0gdHJ1ZTsKICAgIH07CiAgICBjb25zdCBoaWRlTW9kYWwgPSAoKSA9PiB7CiAgICAgIHZpc2libGUudmFsdWUgPSBmYWxzZTsKICAgIH07CiAgICBjb25zdCBjb25maXJtID0gKCkgPT4gewogICAgICBNb2RhbC5jb25maXJtKHsKICAgICAgICB0aXRsZTogJ0NvbmZpcm0nLAogICAgICAgIGljb246IGNyZWF0ZVZOb2RlKEV4Y2xhbWF0aW9uQ2lyY2xlT3V0bGluZWQpLAogICAgICAgIGNvbnRlbnQ6ICdCbGEgYmxhIC4uLicsCiAgICAgICAgb2tUZXh0OiAn56Gu6K6kJywKICAgICAgICBjYW5jZWxUZXh0OiAn5Y+W5raIJywKICAgICAgfSk7CiAgICB9OwogICAgcmV0dXJuIHsKICAgICAgdmlzaWJsZSwKICAgICAgc2hvd01vZGFsLAogICAgICBoaWRlTW9kYWwsCiAgICAgIGNvbmZpcm0sCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4=",isdemo:!1}},{default:o(()=>[n("div",null,[c(l,{type:"primary",onClick:s.showModal},{default:o(()=>[t("Modal")]),_:1},8,["onClick"]),c(l,{onClick:s.confirm},{default:o(()=>[t("Confirm")]),_:1},8,["onClick"]),c(k,{visible:s.visible,"onUpdate:visible":a[0]||(a[0]=g=>s.visible=g),title:"Modal","ok-text":"\u786E\u8BA4","cancel-text":"\u53D6\u6D88",onOk:s.hideModal},{default:o(()=>[Fn,Dn,Mn]),_:1},8,["visible","onOk"])])]),htmlCode:o(()=>[zn]),jsVersionHtml:o(()=>[jn]),_:1},8,["jsfiddle"])}const Ln=b(Jn,[["render",Un]]),On=h({setup(){return{countDown:()=>{let a=5;const e=y.success({title:"This is a notification message",content:`This modal will be destroyed after ${a} second.`}),u=setInterval(()=>{a-=1,e.update({content:`This modal will be destroyed after ${a} second.`})},1e3);setTimeout(()=>{clearInterval(u),e.destroy()},a*1e3)}}}}),_n=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("countDown"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Open modal to close in 5s"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" Modal "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'ant-design-vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"countDown"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"let"),t(" secondsToGo "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" modal "),n("span",{class:"token operator"},"="),t(" Modal"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'This is a notification message'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"This modal will be destroyed after "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("secondsToGo"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," second."),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" interval "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"setInterval"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        secondsToGo `),n("span",{class:"token operator"},"-="),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(`
        modal`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"update"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"This modal will be destroyed after "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("secondsToGo"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," second."),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token function"},"clearInterval"),n("span",{class:"token punctuation"},"("),t("interval"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
        modal`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"destroy"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(" secondsToGo "),n("span",{class:"token operator"},"*"),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      countDown`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),En=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("countDown"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Open modal to close in 5s"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" Modal "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'ant-design-vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"countDown"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"let"),t(" secondsToGo "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" modal "),n("span",{class:"token operator"},"="),t(" Modal"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'This is a notification message'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"This modal will be destroyed after "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("secondsToGo"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," second."),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" interval "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"setInterval"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        secondsToGo `),n("span",{class:"token operator"},"-="),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(`
        modal`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"update"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"This modal will be destroyed after "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("secondsToGo"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," second."),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token function"},"clearInterval"),n("span",{class:"token punctuation"},"("),t("interval"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
        modal`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"destroy"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(" secondsToGo "),n("span",{class:"token operator"},"*"),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      countDown`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function Qn(s,a,e,u,i,r){const l=p("a-button"),k=p("demo-box");return I(),A(k,{jsfiddle:{us:"Manually updating and destroying a modal from `Modal.method`.",cn:"\u624B\u52A8\u66F4\u65B0\u548C\u5173\u95ED `Modal.method` \u65B9\u5F0F\u521B\u5EFA\u7684\u5BF9\u8BDD\u6846\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u624B\u52A8\u66F4\u65B0\u548C\u5173\u95ED <code>Modal.method</code> \u65B9\u5F0F\u521B\u5EFA\u7684\u5BF9\u8BDD\u6846\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Manually updating and destroying a modal from <code>Modal.method</code>.</p>
`,order:6,title:{"zh-CN":"\u624B\u52A8\u66F4\u65B0\u548C\u79FB\u9664","en-US":"Manual to update destroy"},relativePath:"components/modal/demo/manual.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWJ1dHRvbiBAY2xpY2s9ImNvdW50RG93biI+T3BlbiBtb2RhbCB0byBjbG9zZSBpbiA1czwvYS1idXR0b24+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBNb2RhbCB9IGZyb20gJ2FudC1kZXNpZ24tdnVlJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IGNvdW50RG93biA9ICgpID0+IHsKICAgICAgbGV0IHNlY29uZHNUb0dvID0gNTsKICAgICAgY29uc3QgbW9kYWwgPSBNb2RhbC5zdWNjZXNzKHsKICAgICAgICB0aXRsZTogJ1RoaXMgaXMgYSBub3RpZmljYXRpb24gbWVzc2FnZScsCiAgICAgICAgY29udGVudDogYFRoaXMgbW9kYWwgd2lsbCBiZSBkZXN0cm95ZWQgYWZ0ZXIgJHtzZWNvbmRzVG9Hb30gc2Vjb25kLmAsCiAgICAgIH0pOwogICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHsKICAgICAgICBzZWNvbmRzVG9HbyAtPSAxOwogICAgICAgIG1vZGFsLnVwZGF0ZSh7CiAgICAgICAgICBjb250ZW50OiBgVGhpcyBtb2RhbCB3aWxsIGJlIGRlc3Ryb3llZCBhZnRlciAke3NlY29uZHNUb0dvfSBzZWNvbmQuYCwKICAgICAgICB9KTsKICAgICAgfSwgMTAwMCk7CiAgICAgIHNldFRpbWVvdXQoKCkgPT4gewogICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpOwogICAgICAgIG1vZGFsLmRlc3Ryb3koKTsKICAgICAgfSwgc2Vjb25kc1RvR28gKiAxMDAwKTsKICAgIH07CiAgICByZXR1cm4gewogICAgICBjb3VudERvd24sCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWJ1dHRvbiBAY2xpY2s9ImNvdW50RG93biI+T3BlbiBtb2RhbCB0byBjbG9zZSBpbiA1czwvYS1idXR0b24+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnYW50LWRlc2lnbi12dWUnOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgY291bnREb3duID0gKCkgPT4gewogICAgICBsZXQgc2Vjb25kc1RvR28gPSA1OwogICAgICBjb25zdCBtb2RhbCA9IE1vZGFsLnN1Y2Nlc3MoewogICAgICAgIHRpdGxlOiAnVGhpcyBpcyBhIG5vdGlmaWNhdGlvbiBtZXNzYWdlJywKICAgICAgICBjb250ZW50OiBgVGhpcyBtb2RhbCB3aWxsIGJlIGRlc3Ryb3llZCBhZnRlciAke3NlY29uZHNUb0dvfSBzZWNvbmQuYCwKICAgICAgfSk7CiAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4gewogICAgICAgIHNlY29uZHNUb0dvIC09IDE7CiAgICAgICAgbW9kYWwudXBkYXRlKHsKICAgICAgICAgIGNvbnRlbnQ6IGBUaGlzIG1vZGFsIHdpbGwgYmUgZGVzdHJveWVkIGFmdGVyICR7c2Vjb25kc1RvR299IHNlY29uZC5gLAogICAgICAgIH0pOwogICAgICB9LCAxMDAwKTsKICAgICAgc2V0VGltZW91dCgoKSA9PiB7CiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7CiAgICAgICAgbW9kYWwuZGVzdHJveSgpOwogICAgICB9LCBzZWNvbmRzVG9HbyAqIDEwMDApOwogICAgfTsKICAgIHJldHVybiB7CiAgICAgIGNvdW50RG93biwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0Pg==",isdemo:!1}},{default:o(()=>[c(l,{onClick:s.countDown},{default:o(()=>[t("Open modal to close in 5s")]),_:1},8,["onClick"])]),htmlCode:o(()=>[_n]),jsVersionHtml:o(()=>[En]),_:1},8,["jsfiddle"])}const qn=b(On,[["render",Qn]]),$n=h({setup(){const s=m(!1),a=m(!1);return{modal1Visible:s,modal2Visible:a,setModal1Visible:u=>{s.value=u}}}}),nt={id:"components-modal-demo-position"},tt=n("p",null,"some contents...",-1),st=n("p",null,"some contents...",-1),at=n("p",null,"some contents...",-1),ot=n("br",null,null,-1),et=n("br",null,null,-1),ct=n("p",null,"some contents...",-1),pt=n("p",null,"some contents...",-1),lt=n("p",null,"some contents...",-1),ut=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("components-modal-demo-position"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("setModal1Visible(true)"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      Display a modal dialog at 20px to Top
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-modal")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("visible")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("modal1Visible"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("20px to Top"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"top"),n("span",{class:"token punctuation"},":"),t(" 20px")]),n("span",{class:"token punctuation"},'"')])]),t(`
      `),n("span",{class:"token attr-name"},"@ok"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("setModal1Visible(false)"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("some contents..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("some contents..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("some contents..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-modal")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("br")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("br")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("modal2Visible = true"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      Vertically centered modal dialog
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-modal")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("visible")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("modal2Visible"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Vertically centered modal dialog"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"centered"),t(`
      `),n("span",{class:"token attr-name"},"@ok"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("modal2Visible = false"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("some contents..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("some contents..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("some contents..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-modal")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" modal1Visible "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("boolean"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" modal2Visible "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("boolean"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"setModal1Visible"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"visible"),n("span",{class:"token operator"},":"),t(" boolean")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      modal1Visible`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(" visible"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      modal1Visible`),n("span",{class:"token punctuation"},","),t(`
      modal2Visible`),n("span",{class:"token punctuation"},","),t(`
      setModal1Visible`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),it=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("components-modal-demo-position"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("setModal1Visible(true)"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      Display a modal dialog at 20px to Top
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-modal")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("visible")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("modal1Visible"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("20px to Top"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"top"),n("span",{class:"token punctuation"},":"),t(" 20px")]),n("span",{class:"token punctuation"},'"')])]),t(`
      `),n("span",{class:"token attr-name"},"@ok"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("setModal1Visible(false)"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("some contents..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("some contents..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("some contents..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-modal")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("br")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("br")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("modal2Visible = true"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      Vertically centered modal dialog
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-modal")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("visible")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("modal2Visible"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Vertically centered modal dialog"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"centered"),t(`
      `),n("span",{class:"token attr-name"},"@ok"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("modal2Visible = false"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("some contents..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("some contents..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("some contents..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-modal")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" modal1Visible "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" modal2Visible "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"setModal1Visible"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token parameter"},"visible"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      modal1Visible`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(" visible"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      modal1Visible`),n("span",{class:"token punctuation"},","),t(`
      modal2Visible`),n("span",{class:"token punctuation"},","),t(`
      setModal1Visible`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function kt(s,a,e,u,i,r){const l=p("a-button"),k=p("a-modal"),d=p("demo-box");return I(),A(d,{jsfiddle:{us:"You can use `centered`,`style.top` or other styles to set position of modal dialog.",cn:"\u4F7F\u7528 `centered` \u6216\u7C7B\u4F3C `style.top` \u7684\u6837\u5F0F\u6765\u8BBE\u7F6E\u5BF9\u8BDD\u6846\u4F4D\u7F6E\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u4F7F\u7528 <code>centered</code> \u6216\u7C7B\u4F3C <code>style.top</code> \u7684\u6837\u5F0F\u6765\u8BBE\u7F6E\u5BF9\u8BDD\u6846\u4F4D\u7F6E\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>You can use <code>centered</code>,<code>style.top</code> or other styles to set position of modal dialog.</p>
`,order:7,title:{"zh-CN":"\u81EA\u5B9A\u4E49\u4F4D\u7F6E","en-US":"To customize the position of modal"},relativePath:"components/modal/demo/position.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXYgaWQ9ImNvbXBvbmVudHMtbW9kYWwtZGVtby1wb3NpdGlvbiI+CiAgICA8YS1idXR0b24gdHlwZT0icHJpbWFyeSIgQGNsaWNrPSJzZXRNb2RhbDFWaXNpYmxlKHRydWUpIj4KICAgICAgRGlzcGxheSBhIG1vZGFsIGRpYWxvZyBhdCAyMHB4IHRvIFRvcAogICAgPC9hLWJ1dHRvbj4KICAgIDxhLW1vZGFsCiAgICAgIHYtbW9kZWw6dmlzaWJsZT0ibW9kYWwxVmlzaWJsZSIKICAgICAgdGl0bGU9IjIwcHggdG8gVG9wIgogICAgICBzdHlsZT0idG9wOiAyMHB4IgogICAgICBAb2s9InNldE1vZGFsMVZpc2libGUoZmFsc2UpIgogICAgPgogICAgICA8cD5zb21lIGNvbnRlbnRzLi4uPC9wPgogICAgICA8cD5zb21lIGNvbnRlbnRzLi4uPC9wPgogICAgICA8cD5zb21lIGNvbnRlbnRzLi4uPC9wPgogICAgPC9hLW1vZGFsPgogICAgPGJyIC8+CiAgICA8YnIgLz4KICAgIDxhLWJ1dHRvbiB0eXBlPSJwcmltYXJ5IiBAY2xpY2s9Im1vZGFsMlZpc2libGUgPSB0cnVlIj4KICAgICAgVmVydGljYWxseSBjZW50ZXJlZCBtb2RhbCBkaWFsb2cKICAgIDwvYS1idXR0b24+CiAgICA8YS1tb2RhbAogICAgICB2LW1vZGVsOnZpc2libGU9Im1vZGFsMlZpc2libGUiCiAgICAgIHRpdGxlPSJWZXJ0aWNhbGx5IGNlbnRlcmVkIG1vZGFsIGRpYWxvZyIKICAgICAgY2VudGVyZWQKICAgICAgQG9rPSJtb2RhbDJWaXNpYmxlID0gZmFsc2UiCiAgICA+CiAgICAgIDxwPnNvbWUgY29udGVudHMuLi48L3A+CiAgICAgIDxwPnNvbWUgY29udGVudHMuLi48L3A+CiAgICAgIDxwPnNvbWUgY29udGVudHMuLi48L3A+CiAgICA8L2EtbW9kYWw+CiAgPC9kaXY+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBtb2RhbDFWaXNpYmxlID0gcmVmPGJvb2xlYW4+KGZhbHNlKTsKICAgIGNvbnN0IG1vZGFsMlZpc2libGUgPSByZWY8Ym9vbGVhbj4oZmFsc2UpOwoKICAgIGNvbnN0IHNldE1vZGFsMVZpc2libGUgPSAodmlzaWJsZTogYm9vbGVhbikgPT4gewogICAgICBtb2RhbDFWaXNpYmxlLnZhbHVlID0gdmlzaWJsZTsKICAgIH07CiAgICByZXR1cm4gewogICAgICBtb2RhbDFWaXNpYmxlLAogICAgICBtb2RhbDJWaXNpYmxlLAogICAgICBzZXRNb2RhbDFWaXNpYmxlLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXYgaWQ9ImNvbXBvbmVudHMtbW9kYWwtZGVtby1wb3NpdGlvbiI+CiAgICA8YS1idXR0b24gdHlwZT0icHJpbWFyeSIgQGNsaWNrPSJzZXRNb2RhbDFWaXNpYmxlKHRydWUpIj4KICAgICAgRGlzcGxheSBhIG1vZGFsIGRpYWxvZyBhdCAyMHB4IHRvIFRvcAogICAgPC9hLWJ1dHRvbj4KICAgIDxhLW1vZGFsCiAgICAgIHYtbW9kZWw6dmlzaWJsZT0ibW9kYWwxVmlzaWJsZSIKICAgICAgdGl0bGU9IjIwcHggdG8gVG9wIgogICAgICBzdHlsZT0idG9wOiAyMHB4IgogICAgICBAb2s9InNldE1vZGFsMVZpc2libGUoZmFsc2UpIgogICAgPgogICAgICA8cD5zb21lIGNvbnRlbnRzLi4uPC9wPgogICAgICA8cD5zb21lIGNvbnRlbnRzLi4uPC9wPgogICAgICA8cD5zb21lIGNvbnRlbnRzLi4uPC9wPgogICAgPC9hLW1vZGFsPgogICAgPGJyIC8+CiAgICA8YnIgLz4KICAgIDxhLWJ1dHRvbiB0eXBlPSJwcmltYXJ5IiBAY2xpY2s9Im1vZGFsMlZpc2libGUgPSB0cnVlIj4KICAgICAgVmVydGljYWxseSBjZW50ZXJlZCBtb2RhbCBkaWFsb2cKICAgIDwvYS1idXR0b24+CiAgICA8YS1tb2RhbAogICAgICB2LW1vZGVsOnZpc2libGU9Im1vZGFsMlZpc2libGUiCiAgICAgIHRpdGxlPSJWZXJ0aWNhbGx5IGNlbnRlcmVkIG1vZGFsIGRpYWxvZyIKICAgICAgY2VudGVyZWQKICAgICAgQG9rPSJtb2RhbDJWaXNpYmxlID0gZmFsc2UiCiAgICA+CiAgICAgIDxwPnNvbWUgY29udGVudHMuLi48L3A+CiAgICAgIDxwPnNvbWUgY29udGVudHMuLi48L3A+CiAgICAgIDxwPnNvbWUgY29udGVudHMuLi48L3A+CiAgICA8L2EtbW9kYWw+CiAgPC9kaXY+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IG1vZGFsMVZpc2libGUgPSByZWYoZmFsc2UpOwogICAgY29uc3QgbW9kYWwyVmlzaWJsZSA9IHJlZihmYWxzZSk7CiAgICBjb25zdCBzZXRNb2RhbDFWaXNpYmxlID0gdmlzaWJsZSA9PiB7CiAgICAgIG1vZGFsMVZpc2libGUudmFsdWUgPSB2aXNpYmxlOwogICAgfTsKICAgIHJldHVybiB7CiAgICAgIG1vZGFsMVZpc2libGUsCiAgICAgIG1vZGFsMlZpc2libGUsCiAgICAgIHNldE1vZGFsMVZpc2libGUsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4=",isdemo:!1}},{default:o(()=>[n("div",nt,[c(l,{type:"primary",onClick:a[0]||(a[0]=g=>s.setModal1Visible(!0))},{default:o(()=>[t(" Display a modal dialog at 20px to Top ")]),_:1}),c(k,{visible:s.modal1Visible,"onUpdate:visible":a[1]||(a[1]=g=>s.modal1Visible=g),title:"20px to Top",style:{top:"20px"},onOk:a[2]||(a[2]=g=>s.setModal1Visible(!1))},{default:o(()=>[tt,st,at]),_:1},8,["visible"]),ot,et,c(l,{type:"primary",onClick:a[3]||(a[3]=g=>s.modal2Visible=!0)},{default:o(()=>[t(" Vertically centered modal dialog ")]),_:1}),c(k,{visible:s.modal2Visible,"onUpdate:visible":a[4]||(a[4]=g=>s.modal2Visible=g),title:"Vertically centered modal dialog",centered:"",onOk:a[5]||(a[5]=g=>s.modal2Visible=!1)},{default:o(()=>[ct,pt,lt]),_:1},8,["visible"])])]),htmlCode:o(()=>[ut]),jsVersionHtml:o(()=>[it]),_:1},8,["jsfiddle"])}const rt=b($n,[["render",kt]]),dt=h({setup(){return{showConfirm:()=>{for(let a=0;a<3;a+=1)setTimeout(()=>{y.confirm({content:"destroy all",icon:c(W),onOk(){return new Promise((e,u)=>{setTimeout(Math.random()>.5?e:u,1e3)}).catch(()=>console.log("Oops errors!"))},cancelText:"Click to destroy all",onCancel(){y.destroyAll()}})},a*500)}}}}),gt=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showConfirm"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Confirm"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ExclamationCircleOutlined "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" createVNode"),n("span",{class:"token punctuation"},","),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" Modal "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'ant-design-vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"showConfirm"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"+="),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
          Modal`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"confirm"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'destroy all'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"createVNode"),n("span",{class:"token punctuation"},"("),t("ExclamationCircleOutlined"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token function"},"onOk"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
              `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("resolve"),n("span",{class:"token punctuation"},","),t(" reject")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
                `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),t("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},">"),t(),n("span",{class:"token number"},"0.5"),t(),n("span",{class:"token operator"},"?"),t(" resolve "),n("span",{class:"token operator"},":"),t(" reject"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"catch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(" console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Oops errors!'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"cancelText"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Click to destroy all'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token function"},"onCancel"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
              Modal`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"destroyAll"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(" i "),n("span",{class:"token operator"},"*"),t(),n("span",{class:"token number"},"500"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      showConfirm`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),Ct=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showConfirm"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Confirm"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ExclamationCircleOutlined "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" createVNode"),n("span",{class:"token punctuation"},","),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" Modal "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'ant-design-vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"showConfirm"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"+="),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
          Modal`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"confirm"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'destroy all'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"createVNode"),n("span",{class:"token punctuation"},"("),t("ExclamationCircleOutlined"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token function"},"onOk"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
              `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("resolve"),n("span",{class:"token punctuation"},","),t(" reject")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
                `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),t("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},">"),t(),n("span",{class:"token number"},"0.5"),t(),n("span",{class:"token operator"},"?"),t(" resolve "),n("span",{class:"token operator"},":"),t(" reject"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"catch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(" console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Oops errors!'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"cancelText"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Click to destroy all'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token function"},"onCancel"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
              Modal`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"destroyAll"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(" i "),n("span",{class:"token operator"},"*"),t(),n("span",{class:"token number"},"500"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      showConfirm`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function mt(s,a,e,u,i,r){const l=p("a-button"),k=p("demo-box");return I(),A(k,{jsfiddle:{us:"`Modal.destroyAll()` could destroy all confirmation modal dialogs. Usually, you can use it in router change event to destroy confirm modal dialog automatically",cn:"\u4F7F\u7528 `Modal.destroyAll()` \u53EF\u4EE5\u9500\u6BC1\u5F39\u51FA\u7684\u786E\u8BA4\u7A97\u3002\u901A\u5E38\u7528\u4E8E\u8DEF\u7531\u76D1\u542C\u5F53\u4E2D\uFF0C\u5904\u7406\u8DEF\u7531\u524D\u8FDB\u3001\u540E\u9000\u4E0D\u80FD\u9500\u6BC1\u786E\u8BA4\u5BF9\u8BDD\u6846\u7684\u95EE\u9898\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u4F7F\u7528 <code>Modal.destroyAll()</code> \u53EF\u4EE5\u9500\u6BC1\u5F39\u51FA\u7684\u786E\u8BA4\u7A97\u3002\u901A\u5E38\u7528\u4E8E\u8DEF\u7531\u76D1\u542C\u5F53\u4E2D\uFF0C\u5904\u7406\u8DEF\u7531\u524D\u8FDB\u3001\u540E\u9000\u4E0D\u80FD\u9500\u6BC1\u786E\u8BA4\u5BF9\u8BDD\u6846\u7684\u95EE\u9898\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p><code>Modal.destroyAll()</code> could destroy all confirmation modal dialogs. Usually, you can use it in router change event to destroy confirm modal dialog automatically</p>
`,order:8,title:{"zh-CN":"\u9500\u6BC1\u786E\u8BA4\u5BF9\u8BDD\u6846","en-US":"destroy confirmation modal dialog"},relativePath:"components/modal/demo/confirm-router.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWJ1dHRvbiBAY2xpY2s9InNob3dDb25maXJtIj5Db25maXJtPC9hLWJ1dHRvbj4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB7IEV4Y2xhbWF0aW9uQ2lyY2xlT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy12dWUnOwppbXBvcnQgeyBjcmVhdGVWTm9kZSwgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJzsKaW1wb3J0IHsgTW9kYWwgfSBmcm9tICdhbnQtZGVzaWduLXZ1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBzaG93Q29uZmlybSA9ICgpID0+IHsKICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpICs9IDEpIHsKICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsKICAgICAgICAgIE1vZGFsLmNvbmZpcm0oewogICAgICAgICAgICBjb250ZW50OiAnZGVzdHJveSBhbGwnLAogICAgICAgICAgICBpY29uOiBjcmVhdGVWTm9kZShFeGNsYW1hdGlvbkNpcmNsZU91dGxpbmVkKSwKICAgICAgICAgICAgb25PaygpIHsKICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gewogICAgICAgICAgICAgICAgc2V0VGltZW91dChNYXRoLnJhbmRvbSgpID4gMC41ID8gcmVzb2x2ZSA6IHJlamVjdCwgMTAwMCk7CiAgICAgICAgICAgICAgfSkuY2F0Y2goKCkgPT4gY29uc29sZS5sb2coJ09vcHMgZXJyb3JzIScpKTsKICAgICAgICAgICAgfSwKICAgICAgICAgICAgY2FuY2VsVGV4dDogJ0NsaWNrIHRvIGRlc3Ryb3kgYWxsJywKICAgICAgICAgICAgb25DYW5jZWwoKSB7CiAgICAgICAgICAgICAgTW9kYWwuZGVzdHJveUFsbCgpOwogICAgICAgICAgICB9LAogICAgICAgICAgfSk7CiAgICAgICAgfSwgaSAqIDUwMCk7CiAgICAgIH0KICAgIH07CiAgICByZXR1cm4gewogICAgICBzaG93Q29uZmlybSwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWJ1dHRvbiBAY2xpY2s9InNob3dDb25maXJtIj5Db25maXJtPC9hLWJ1dHRvbj4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgRXhjbGFtYXRpb25DaXJjbGVPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLXZ1ZSc7CmltcG9ydCB7IGNyZWF0ZVZOb2RlLCBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnOwppbXBvcnQgeyBNb2RhbCB9IGZyb20gJ2FudC1kZXNpZ24tdnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IHNob3dDb25maXJtID0gKCkgPT4gewogICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkgKz0gMSkgewogICAgICAgIHNldFRpbWVvdXQoKCkgPT4gewogICAgICAgICAgTW9kYWwuY29uZmlybSh7CiAgICAgICAgICAgIGNvbnRlbnQ6ICdkZXN0cm95IGFsbCcsCiAgICAgICAgICAgIGljb246IGNyZWF0ZVZOb2RlKEV4Y2xhbWF0aW9uQ2lyY2xlT3V0bGluZWQpLAogICAgICAgICAgICBvbk9rKCkgewogICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7CiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KE1hdGgucmFuZG9tKCkgPiAwLjUgPyByZXNvbHZlIDogcmVqZWN0LCAxMDAwKTsKICAgICAgICAgICAgICB9KS5jYXRjaCgoKSA9PiBjb25zb2xlLmxvZygnT29wcyBlcnJvcnMhJykpOwogICAgICAgICAgICB9LAogICAgICAgICAgICBjYW5jZWxUZXh0OiAnQ2xpY2sgdG8gZGVzdHJveSBhbGwnLAogICAgICAgICAgICBvbkNhbmNlbCgpIHsKICAgICAgICAgICAgICBNb2RhbC5kZXN0cm95QWxsKCk7CiAgICAgICAgICAgIH0sCiAgICAgICAgICB9KTsKICAgICAgICB9LCBpICogNTAwKTsKICAgICAgfQogICAgfTsKICAgIHJldHVybiB7CiAgICAgIHNob3dDb25maXJtLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+",isdemo:!1}},{default:o(()=>[c(l,{onClick:s.showConfirm},{default:o(()=>[t("Confirm")]),_:1},8,["onClick"])]),htmlCode:o(()=>[gt]),jsVersionHtml:o(()=>[Ct]),_:1},8,["jsfiddle"])}const It=b(dt,[["render",mt]]),bt=h({setup(){return{showConfirm:()=>{y.confirm({title:"Do you want to delete these items?",icon:c(W),content:"When clicked the OK button, this dialog will be closed after 1 second",onOk(){return new Promise((a,e)=>{setTimeout(Math.random()>.5?a:e,1e3)}).catch(()=>console.log("Oops errors!"))},onCancel(){}})}}}}),At=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showConfirm"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Confirm"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ExclamationCircleOutlined "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" createVNode"),n("span",{class:"token punctuation"},","),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" Modal "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'ant-design-vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"showConfirm"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      Modal`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"confirm"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Do you want to delete these items?'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"createVNode"),n("span",{class:"token punctuation"},"("),t("ExclamationCircleOutlined"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'When clicked the OK button, this dialog will be closed after 1 second'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token function"},"onOk"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("resolve"),n("span",{class:"token punctuation"},","),t(" reject")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),t("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},">"),t(),n("span",{class:"token number"},"0.5"),t(),n("span",{class:"token operator"},"?"),t(" resolve "),n("span",{class:"token operator"},":"),t(" reject"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"catch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(" console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Oops errors!'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token comment"},"// eslint-disable-next-line @typescript-eslint/no-empty-function"),t(`
        `),n("span",{class:"token function"},"onCancel"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      showConfirm`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),ht=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showConfirm"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Confirm"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ExclamationCircleOutlined "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" createVNode"),n("span",{class:"token punctuation"},","),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" Modal "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'ant-design-vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"showConfirm"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      Modal`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"confirm"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Do you want to delete these items?'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"icon"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"createVNode"),n("span",{class:"token punctuation"},"("),t("ExclamationCircleOutlined"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'When clicked the OK button, this dialog will be closed after 1 second'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token function"},"onOk"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("resolve"),n("span",{class:"token punctuation"},","),t(" reject")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),t("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},">"),t(),n("span",{class:"token number"},"0.5"),t(),n("span",{class:"token operator"},"?"),t(" resolve "),n("span",{class:"token operator"},":"),t(" reject"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"catch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(" console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Oops errors!'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token comment"},"// eslint-disable-next-line @typescript-eslint/no-empty-function"),t(`
        `),n("span",{class:"token function"},"onCancel"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      showConfirm`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function ft(s,a,e,u,i,r){const l=p("a-button"),k=p("demo-box");return I(),A(k,{jsfiddle:{us:"To use `confirm()` to popup confirmation modal dialog. Let onCancel/onOk function return a promise object to\ndelay closing the dialog.",cn:"\u4F7F\u7528 `confirm()` \u53EF\u4EE5\u5FEB\u6377\u5730\u5F39\u51FA\u786E\u8BA4\u6846\u3002onCancel/onOk \u8FD4\u56DE promise \u53EF\u4EE5\u5EF6\u8FDF\u5173\u95ED",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u4F7F\u7528 <code>confirm()</code> \u53EF\u4EE5\u5FEB\u6377\u5730\u5F39\u51FA\u786E\u8BA4\u6846\u3002onCancel/onOk \u8FD4\u56DE promise \u53EF\u4EE5\u5EF6\u8FDF\u5173\u95ED</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>To use <code>confirm()</code> to popup confirmation modal dialog. Let onCancel/onOk function return a promise object to
delay closing the dialog.</p>
`,order:9,title:{"zh-CN":"\u786E\u8BA4\u5BF9\u8BDD\u6846(promise)","en-US":"Confirmation modal dialog use promise"},relativePath:"components/modal/demo/confirm-promise.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWJ1dHRvbiBAY2xpY2s9InNob3dDb25maXJtIj5Db25maXJtPC9hLWJ1dHRvbj4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB7IEV4Y2xhbWF0aW9uQ2lyY2xlT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy12dWUnOwppbXBvcnQgeyBjcmVhdGVWTm9kZSwgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJzsKaW1wb3J0IHsgTW9kYWwgfSBmcm9tICdhbnQtZGVzaWduLXZ1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBzaG93Q29uZmlybSA9ICgpID0+IHsKICAgICAgTW9kYWwuY29uZmlybSh7CiAgICAgICAgdGl0bGU6ICdEbyB5b3Ugd2FudCB0byBkZWxldGUgdGhlc2UgaXRlbXM/JywKICAgICAgICBpY29uOiBjcmVhdGVWTm9kZShFeGNsYW1hdGlvbkNpcmNsZU91dGxpbmVkKSwKICAgICAgICBjb250ZW50OiAnV2hlbiBjbGlja2VkIHRoZSBPSyBidXR0b24sIHRoaXMgZGlhbG9nIHdpbGwgYmUgY2xvc2VkIGFmdGVyIDEgc2Vjb25kJywKICAgICAgICBvbk9rKCkgewogICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHsKICAgICAgICAgICAgc2V0VGltZW91dChNYXRoLnJhbmRvbSgpID4gMC41ID8gcmVzb2x2ZSA6IHJlamVjdCwgMTAwMCk7CiAgICAgICAgICB9KS5jYXRjaCgoKSA9PiBjb25zb2xlLmxvZygnT29wcyBlcnJvcnMhJykpOwogICAgICAgIH0sCiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1lbXB0eS1mdW5jdGlvbgogICAgICAgIG9uQ2FuY2VsKCkge30sCiAgICAgIH0pOwogICAgfTsKICAgIHJldHVybiB7CiAgICAgIHNob3dDb25maXJtLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWJ1dHRvbiBAY2xpY2s9InNob3dDb25maXJtIj5Db25maXJtPC9hLWJ1dHRvbj4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgRXhjbGFtYXRpb25DaXJjbGVPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLXZ1ZSc7CmltcG9ydCB7IGNyZWF0ZVZOb2RlLCBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnOwppbXBvcnQgeyBNb2RhbCB9IGZyb20gJ2FudC1kZXNpZ24tdnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IHNob3dDb25maXJtID0gKCkgPT4gewogICAgICBNb2RhbC5jb25maXJtKHsKICAgICAgICB0aXRsZTogJ0RvIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGVzZSBpdGVtcz8nLAogICAgICAgIGljb246IGNyZWF0ZVZOb2RlKEV4Y2xhbWF0aW9uQ2lyY2xlT3V0bGluZWQpLAogICAgICAgIGNvbnRlbnQ6ICdXaGVuIGNsaWNrZWQgdGhlIE9LIGJ1dHRvbiwgdGhpcyBkaWFsb2cgd2lsbCBiZSBjbG9zZWQgYWZ0ZXIgMSBzZWNvbmQnLAogICAgICAgIG9uT2soKSB7CiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gewogICAgICAgICAgICBzZXRUaW1lb3V0KE1hdGgucmFuZG9tKCkgPiAwLjUgPyByZXNvbHZlIDogcmVqZWN0LCAxMDAwKTsKICAgICAgICAgIH0pLmNhdGNoKCgpID0+IGNvbnNvbGUubG9nKCdPb3BzIGVycm9ycyEnKSk7CiAgICAgICAgfSwKICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWVtcHR5LWZ1bmN0aW9uCiAgICAgICAgb25DYW5jZWwoKSB7fSwKICAgICAgfSk7CiAgICB9OwogICAgcmV0dXJuIHsKICAgICAgc2hvd0NvbmZpcm0sCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4=",isdemo:!1}},{default:o(()=>[c(l,{onClick:s.showConfirm},{default:o(()=>[t("Confirm")]),_:1},8,["onClick"])]),htmlCode:o(()=>[At]),jsVersionHtml:o(()=>[ht]),_:1},8,["jsfiddle"])}const yt=b(bt,[["render",ft]]),vt=h({setup(){const s=m(!1);return{visible:s,showModal:()=>{s.value=!0},handleOk:u=>{console.log(u),s.value=!1}}}}),wt=n("p",null,"Some contents...",-1),Zt=n("p",null,"Some contents...",-1),Wt=n("p",null,"Some contents...",-1),Gt=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showModal"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Open Modal of 1000px width"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-modal")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("visible")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("visible"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1000px"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Basic Modal"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@ok"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleOk"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("Some contents..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("Some contents..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("Some contents..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-modal")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" visible "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("boolean"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"showModal"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      visible`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleOk"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"e"),n("span",{class:"token operator"},":"),t(" MouseEvent")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("e"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      visible`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      visible`),n("span",{class:"token punctuation"},","),t(`
      showModal`),n("span",{class:"token punctuation"},","),t(`
      handleOk`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),Bt=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showModal"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Open Modal of 1000px width"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-modal")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("visible")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("visible"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1000px"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Basic Modal"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@ok"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleOk"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("Some contents..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("Some contents..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("Some contents..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-modal")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" visible "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"showModal"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      visible`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleOk"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token parameter"},"e"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("e"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      visible`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      visible`),n("span",{class:"token punctuation"},","),t(`
      showModal`),n("span",{class:"token punctuation"},","),t(`
      handleOk`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function Yt(s,a,e,u,i,r){const l=p("a-button"),k=p("a-modal"),d=p("demo-box");return I(),A(d,{jsfiddle:{us:"Use `width` to set the width of the modal dialog",cn:"\u4F7F\u7528`width`\u6765\u8BBE\u7F6E\u6A21\u6001\u5BF9\u8BDD\u6846\u7684\u5BBD\u5EA6",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u4F7F\u7528<code>width</code>\u6765\u8BBE\u7F6E\u6A21\u6001\u5BF9\u8BDD\u6846\u7684\u5BBD\u5EA6</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Use <code>width</code> to set the width of the modal dialog</p>
`,order:10,title:{"zh-CN":"\u81EA\u5B9A\u4E49\u6A21\u6001\u7684\u5BBD\u5EA6","en-US":"To customize the width of modal"},relativePath:"components/modal/demo/width.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS1idXR0b24gdHlwZT0icHJpbWFyeSIgQGNsaWNrPSJzaG93TW9kYWwiPk9wZW4gTW9kYWwgb2YgMTAwMHB4IHdpZHRoPC9hLWJ1dHRvbj4KICAgIDxhLW1vZGFsIHYtbW9kZWw6dmlzaWJsZT0idmlzaWJsZSIgd2lkdGg9IjEwMDBweCIgdGl0bGU9IkJhc2ljIE1vZGFsIiBAb2s9ImhhbmRsZU9rIj4KICAgICAgPHA+U29tZSBjb250ZW50cy4uLjwvcD4KICAgICAgPHA+U29tZSBjb250ZW50cy4uLjwvcD4KICAgICAgPHA+U29tZSBjb250ZW50cy4uLjwvcD4KICAgIDwvYS1tb2RhbD4KICA8L2Rpdj4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IHZpc2libGUgPSByZWY8Ym9vbGVhbj4oZmFsc2UpOwoKICAgIGNvbnN0IHNob3dNb2RhbCA9ICgpID0+IHsKICAgICAgdmlzaWJsZS52YWx1ZSA9IHRydWU7CiAgICB9OwoKICAgIGNvbnN0IGhhbmRsZU9rID0gKGU6IE1vdXNlRXZlbnQpID0+IHsKICAgICAgY29uc29sZS5sb2coZSk7CiAgICAgIHZpc2libGUudmFsdWUgPSBmYWxzZTsKICAgIH07CiAgICByZXR1cm4gewogICAgICB2aXNpYmxlLAogICAgICBzaG93TW9kYWwsCiAgICAgIGhhbmRsZU9rLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS1idXR0b24gdHlwZT0icHJpbWFyeSIgQGNsaWNrPSJzaG93TW9kYWwiPk9wZW4gTW9kYWwgb2YgMTAwMHB4IHdpZHRoPC9hLWJ1dHRvbj4KICAgIDxhLW1vZGFsIHYtbW9kZWw6dmlzaWJsZT0idmlzaWJsZSIgd2lkdGg9IjEwMDBweCIgdGl0bGU9IkJhc2ljIE1vZGFsIiBAb2s9ImhhbmRsZU9rIj4KICAgICAgPHA+U29tZSBjb250ZW50cy4uLjwvcD4KICAgICAgPHA+U29tZSBjb250ZW50cy4uLjwvcD4KICAgICAgPHA+U29tZSBjb250ZW50cy4uLjwvcD4KICAgIDwvYS1tb2RhbD4KICA8L2Rpdj4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgdmlzaWJsZSA9IHJlZihmYWxzZSk7CiAgICBjb25zdCBzaG93TW9kYWwgPSAoKSA9PiB7CiAgICAgIHZpc2libGUudmFsdWUgPSB0cnVlOwogICAgfTsKICAgIGNvbnN0IGhhbmRsZU9rID0gZSA9PiB7CiAgICAgIGNvbnNvbGUubG9nKGUpOwogICAgICB2aXNpYmxlLnZhbHVlID0gZmFsc2U7CiAgICB9OwogICAgcmV0dXJuIHsKICAgICAgdmlzaWJsZSwKICAgICAgc2hvd01vZGFsLAogICAgICBoYW5kbGVPaywKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0Pg==",isdemo:!1}},{default:o(()=>[n("div",null,[c(l,{type:"primary",onClick:s.showModal},{default:o(()=>[t("Open Modal of 1000px width")]),_:1},8,["onClick"]),c(k,{visible:s.visible,"onUpdate:visible":a[0]||(a[0]=g=>s.visible=g),width:"1000px",title:"Basic Modal",onOk:s.handleOk},{default:o(()=>[wt,Zt,Wt]),_:1},8,["visible","onOk"])])]),htmlCode:o(()=>[Gt]),jsVersionHtml:o(()=>[Bt]),_:1},8,["jsfiddle"])}const Ht=b(vt,[["render",Yt]]),Nt=h({setup(){const s=m(!1);return{visible:s,showModal:()=>{s.value=!0},handleOk:u=>{console.log(u),s.value=!1}}}});const xt=n("p",null,"Some contents...",-1),St=n("p",null,"Some contents...",-1),Vt=n("p",null,"Some contents...",-1),Rt=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showModal"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Open Modal"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-modal")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("visible")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("visible"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Basic Modal"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("100%"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"wrap-class-name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("full-modal"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"@ok"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleOk"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("Some contents..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("Some contents..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("Some contents..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-modal")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" visible "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("boolean"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"showModal"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      visible`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleOk"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"e"),n("span",{class:"token operator"},":"),t(" MouseEvent")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("e"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      visible`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      visible`),n("span",{class:"token punctuation"},","),t(`
      showModal`),n("span",{class:"token punctuation"},","),t(`
      handleOk`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("less"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".full-modal"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token selector"},".ant-modal"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token property"},"max-width"),n("span",{class:"token punctuation"},":"),t(" 100%"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"top"),n("span",{class:"token punctuation"},":"),t(" 0"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"padding-bottom"),n("span",{class:"token punctuation"},":"),t(" 0"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),t(" 0"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token selector"},".ant-modal-content"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),t(" flex"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"flex-direction"),n("span",{class:"token punctuation"},":"),t(" column"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(),n("span",{class:"token function"},"calc"),n("span",{class:"token punctuation"},"("),t("100vh"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token selector"},".ant-modal-body"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token property"},"flex"),n("span",{class:"token punctuation"},":"),t(" 1"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),Pt=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showModal"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Open Modal"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-modal")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("visible")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("visible"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Basic Modal"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("100%"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"wrap-class-name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("full-modal"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"@ok"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleOk"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("Some contents..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("Some contents..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("Some contents..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-modal")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" visible "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"showModal"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      visible`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleOk"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token parameter"},"e"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("e"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      visible`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      visible`),n("span",{class:"token punctuation"},","),t(`
      showModal`),n("span",{class:"token punctuation"},","),t(`
      handleOk`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("less"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".full-modal"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token selector"},".ant-modal"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token property"},"max-width"),n("span",{class:"token punctuation"},":"),t(" 100%"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"top"),n("span",{class:"token punctuation"},":"),t(" 0"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"padding-bottom"),n("span",{class:"token punctuation"},":"),t(" 0"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),t(" 0"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token selector"},".ant-modal-content"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),t(" flex"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"flex-direction"),n("span",{class:"token punctuation"},":"),t(" column"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(),n("span",{class:"token function"},"calc"),n("span",{class:"token punctuation"},"("),t("100vh"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token selector"},".ant-modal-body"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token property"},"flex"),n("span",{class:"token punctuation"},":"),t(" 1"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function Kt(s,a,e,u,i,r){const l=p("a-button"),k=p("a-modal"),d=p("demo-box");return I(),A(d,{jsfiddle:{us:"Full screen by custom style.",cn:"\u4F7F\u7528\u6837\u5F0F\u5B9A\u4E49\u4E00\u4E2A\u5168\u5C4F\u5F39\u7A97",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u4F7F\u7528\u6837\u5F0F\u5B9A\u4E49\u4E00\u4E2A\u5168\u5C4F\u5F39\u7A97</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Full screen by custom style.</p>
`,order:0,title:{"zh-CN":"\u5168\u5C4F","en-US":"full screen"},relativePath:"components/modal/demo/fullscreen.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS1idXR0b24gdHlwZT0icHJpbWFyeSIgQGNsaWNrPSJzaG93TW9kYWwiPk9wZW4gTW9kYWw8L2EtYnV0dG9uPgogICAgPGEtbW9kYWwKICAgICAgdi1tb2RlbDp2aXNpYmxlPSJ2aXNpYmxlIgogICAgICB0aXRsZT0iQmFzaWMgTW9kYWwiCiAgICAgIHdpZHRoPSIxMDAlIgogICAgICB3cmFwLWNsYXNzLW5hbWU9ImZ1bGwtbW9kYWwiCiAgICAgIEBvaz0iaGFuZGxlT2siCiAgICA+CiAgICAgIDxwPlNvbWUgY29udGVudHMuLi48L3A+CiAgICAgIDxwPlNvbWUgY29udGVudHMuLi48L3A+CiAgICAgIDxwPlNvbWUgY29udGVudHMuLi48L3A+CiAgICA8L2EtbW9kYWw+CiAgPC9kaXY+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCB2aXNpYmxlID0gcmVmPGJvb2xlYW4+KGZhbHNlKTsKCiAgICBjb25zdCBzaG93TW9kYWwgPSAoKSA9PiB7CiAgICAgIHZpc2libGUudmFsdWUgPSB0cnVlOwogICAgfTsKCiAgICBjb25zdCBoYW5kbGVPayA9IChlOiBNb3VzZUV2ZW50KSA9PiB7CiAgICAgIGNvbnNvbGUubG9nKGUpOwogICAgICB2aXNpYmxlLnZhbHVlID0gZmFsc2U7CiAgICB9OwogICAgcmV0dXJuIHsKICAgICAgdmlzaWJsZSwKICAgICAgc2hvd01vZGFsLAogICAgICBoYW5kbGVPaywKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0Pgo8c3R5bGUgbGFuZz0ibGVzcyI+Ci5mdWxsLW1vZGFsIHsKICAuYW50LW1vZGFsIHsKICAgIG1heC13aWR0aDogMTAwJTsKICAgIHRvcDogMDsKICAgIHBhZGRpbmctYm90dG9tOiAwOwogICAgbWFyZ2luOiAwOwogIH0KICAuYW50LW1vZGFsLWNvbnRlbnQgewogICAgZGlzcGxheTogZmxleDsKICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47CiAgICBoZWlnaHQ6IGNhbGMoMTAwdmgpOwogIH0KICAuYW50LW1vZGFsLWJvZHkgewogICAgZmxleDogMTsKICB9Cn0KPC9zdHlsZT4K",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS1idXR0b24gdHlwZT0icHJpbWFyeSIgQGNsaWNrPSJzaG93TW9kYWwiPk9wZW4gTW9kYWw8L2EtYnV0dG9uPgogICAgPGEtbW9kYWwKICAgICAgdi1tb2RlbDp2aXNpYmxlPSJ2aXNpYmxlIgogICAgICB0aXRsZT0iQmFzaWMgTW9kYWwiCiAgICAgIHdpZHRoPSIxMDAlIgogICAgICB3cmFwLWNsYXNzLW5hbWU9ImZ1bGwtbW9kYWwiCiAgICAgIEBvaz0iaGFuZGxlT2siCiAgICA+CiAgICAgIDxwPlNvbWUgY29udGVudHMuLi48L3A+CiAgICAgIDxwPlNvbWUgY29udGVudHMuLi48L3A+CiAgICAgIDxwPlNvbWUgY29udGVudHMuLi48L3A+CiAgICA8L2EtbW9kYWw+CiAgPC9kaXY+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IHZpc2libGUgPSByZWYoZmFsc2UpOwogICAgY29uc3Qgc2hvd01vZGFsID0gKCkgPT4gewogICAgICB2aXNpYmxlLnZhbHVlID0gdHJ1ZTsKICAgIH07CiAgICBjb25zdCBoYW5kbGVPayA9IGUgPT4gewogICAgICBjb25zb2xlLmxvZyhlKTsKICAgICAgdmlzaWJsZS52YWx1ZSA9IGZhbHNlOwogICAgfTsKICAgIHJldHVybiB7CiAgICAgIHZpc2libGUsCiAgICAgIHNob3dNb2RhbCwKICAgICAgaGFuZGxlT2ssCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KPHN0eWxlIGxhbmc9Imxlc3MiPgouZnVsbC1tb2RhbCB7CiAgLmFudC1tb2RhbCB7CiAgICBtYXgtd2lkdGg6IDEwMCU7CiAgICB0b3A6IDA7CiAgICBwYWRkaW5nLWJvdHRvbTogMDsKICAgIG1hcmdpbjogMDsKICB9CiAgLmFudC1tb2RhbC1jb250ZW50IHsKICAgIGRpc3BsYXk6IGZsZXg7CiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOwogICAgaGVpZ2h0OiBjYWxjKDEwMHZoKTsKICB9CiAgLmFudC1tb2RhbC1ib2R5IHsKICAgIGZsZXg6IDE7CiAgfQp9Cjwvc3R5bGU+",isdemo:!1}},{default:o(()=>[n("div",null,[c(l,{type:"primary",onClick:s.showModal},{default:o(()=>[t("Open Modal")]),_:1},8,["onClick"]),c(k,{visible:s.visible,"onUpdate:visible":a[0]||(a[0]=g=>s.visible=g),title:"Basic Modal",width:"100%","wrap-class-name":"full-modal",onOk:s.handleOk},{default:o(()=>[xt,St,Vt]),_:1},8,["visible","onOk"])])]),htmlCode:o(()=>[Rt]),jsVersionHtml:o(()=>[Pt]),_:1},8,["jsfiddle"])}const Xt=b(Nt,[["render",Kt]]),Tt=h({setup(){const s=m(!1);return{visible:s,showModal:()=>{s.value=!0},handleOk:i=>{console.log(i),s.value=!1},handleCancel:i=>{console.log(i),s.value=!1}}}}),Jt=n("p",null,"Some contents...",-1),Ft=n("p",null,"Some contents...",-1),Dt=n("p",null,"Some contents...",-1),Mt=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showModal"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Open Modal with customized button props"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-modal")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("visible")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("visible"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Basic Modal"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":ok-button-props"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ disabled: true }"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":cancel-button-props"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ disabled: true }"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"@ok"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleOk"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("Some contents..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("Some contents..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("Some contents..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-modal")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" visible "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("boolean"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"showModal"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      visible`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleOk"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"e"),n("span",{class:"token operator"},":"),t(" MouseEvent")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("e"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      visible`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleCancel"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"e"),n("span",{class:"token operator"},":"),t(" MouseEvent")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("e"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      visible`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      visible`),n("span",{class:"token punctuation"},","),t(`
      showModal`),n("span",{class:"token punctuation"},","),t(`
      handleOk`),n("span",{class:"token punctuation"},","),t(`
      handleCancel`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),zt=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showModal"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Open Modal with customized button props"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-modal")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("visible")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("visible"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Basic Modal"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":ok-button-props"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ disabled: true }"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":cancel-button-props"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ disabled: true }"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"@ok"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleOk"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("Some contents..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("Some contents..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("Some contents..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-modal")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" visible "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"showModal"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      visible`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleOk"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token parameter"},"e"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("e"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      visible`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleCancel"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token parameter"},"e"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("e"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      visible`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      visible`),n("span",{class:"token punctuation"},","),t(`
      showModal`),n("span",{class:"token punctuation"},","),t(`
      handleOk`),n("span",{class:"token punctuation"},","),t(`
      handleCancel`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function jt(s,a,e,u,i,r){const l=p("a-button"),k=p("a-modal"),d=p("demo-box");return I(),A(d,{jsfiddle:{us:"Passing `okButtonProps` and `cancelButtonProps` can customize the ok button and cancel button props.",cn:"\u4F20\u5165 `okButtonProps` \u548C `cancelButtonProps` \u53EF\u5206\u522B\u81EA\u5B9A\u4E49\u786E\u5B9A\u6309\u94AE\u548C\u53D6\u6D88\u6309\u94AE\u7684 props\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u4F20\u5165 <code>okButtonProps</code> \u548C <code>cancelButtonProps</code> \u53EF\u5206\u522B\u81EA\u5B9A\u4E49\u786E\u5B9A\u6309\u94AE\u548C\u53D6\u6D88\u6309\u94AE\u7684 props\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Passing <code>okButtonProps</code> and <code>cancelButtonProps</code> can customize the ok button and cancel button props.</p>
`,order:11,title:{"zh-CN":"\u81EA\u5B9A\u4E49\u9875\u811A\u6309\u94AE\u5C5E\u6027","en-US":"Customize footer buttons props"},relativePath:"components/modal/demo/button-props.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS1idXR0b24gdHlwZT0icHJpbWFyeSIgQGNsaWNrPSJzaG93TW9kYWwiPk9wZW4gTW9kYWwgd2l0aCBjdXN0b21pemVkIGJ1dHRvbiBwcm9wczwvYS1idXR0b24+CiAgICA8YS1tb2RhbAogICAgICB2LW1vZGVsOnZpc2libGU9InZpc2libGUiCiAgICAgIHRpdGxlPSJCYXNpYyBNb2RhbCIKICAgICAgOm9rLWJ1dHRvbi1wcm9wcz0ieyBkaXNhYmxlZDogdHJ1ZSB9IgogICAgICA6Y2FuY2VsLWJ1dHRvbi1wcm9wcz0ieyBkaXNhYmxlZDogdHJ1ZSB9IgogICAgICBAb2s9ImhhbmRsZU9rIgogICAgPgogICAgICA8cD5Tb21lIGNvbnRlbnRzLi4uPC9wPgogICAgICA8cD5Tb21lIGNvbnRlbnRzLi4uPC9wPgogICAgICA8cD5Tb21lIGNvbnRlbnRzLi4uPC9wPgogICAgPC9hLW1vZGFsPgogIDwvZGl2Pgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgdmlzaWJsZSA9IHJlZjxib29sZWFuPihmYWxzZSk7CgogICAgY29uc3Qgc2hvd01vZGFsID0gKCkgPT4gewogICAgICB2aXNpYmxlLnZhbHVlID0gdHJ1ZTsKICAgIH07CgogICAgY29uc3QgaGFuZGxlT2sgPSAoZTogTW91c2VFdmVudCkgPT4gewogICAgICBjb25zb2xlLmxvZyhlKTsKICAgICAgdmlzaWJsZS52YWx1ZSA9IGZhbHNlOwogICAgfTsKCiAgICBjb25zdCBoYW5kbGVDYW5jZWwgPSAoZTogTW91c2VFdmVudCkgPT4gewogICAgICBjb25zb2xlLmxvZyhlKTsKICAgICAgdmlzaWJsZS52YWx1ZSA9IGZhbHNlOwogICAgfTsKICAgIHJldHVybiB7CiAgICAgIHZpc2libGUsCiAgICAgIHNob3dNb2RhbCwKICAgICAgaGFuZGxlT2ssCiAgICAgIGhhbmRsZUNhbmNlbCwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS1idXR0b24gdHlwZT0icHJpbWFyeSIgQGNsaWNrPSJzaG93TW9kYWwiPk9wZW4gTW9kYWwgd2l0aCBjdXN0b21pemVkIGJ1dHRvbiBwcm9wczwvYS1idXR0b24+CiAgICA8YS1tb2RhbAogICAgICB2LW1vZGVsOnZpc2libGU9InZpc2libGUiCiAgICAgIHRpdGxlPSJCYXNpYyBNb2RhbCIKICAgICAgOm9rLWJ1dHRvbi1wcm9wcz0ieyBkaXNhYmxlZDogdHJ1ZSB9IgogICAgICA6Y2FuY2VsLWJ1dHRvbi1wcm9wcz0ieyBkaXNhYmxlZDogdHJ1ZSB9IgogICAgICBAb2s9ImhhbmRsZU9rIgogICAgPgogICAgICA8cD5Tb21lIGNvbnRlbnRzLi4uPC9wPgogICAgICA8cD5Tb21lIGNvbnRlbnRzLi4uPC9wPgogICAgICA8cD5Tb21lIGNvbnRlbnRzLi4uPC9wPgogICAgPC9hLW1vZGFsPgogIDwvZGl2Pgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCB2aXNpYmxlID0gcmVmKGZhbHNlKTsKICAgIGNvbnN0IHNob3dNb2RhbCA9ICgpID0+IHsKICAgICAgdmlzaWJsZS52YWx1ZSA9IHRydWU7CiAgICB9OwogICAgY29uc3QgaGFuZGxlT2sgPSBlID0+IHsKICAgICAgY29uc29sZS5sb2coZSk7CiAgICAgIHZpc2libGUudmFsdWUgPSBmYWxzZTsKICAgIH07CiAgICBjb25zdCBoYW5kbGVDYW5jZWwgPSBlID0+IHsKICAgICAgY29uc29sZS5sb2coZSk7CiAgICAgIHZpc2libGUudmFsdWUgPSBmYWxzZTsKICAgIH07CiAgICByZXR1cm4gewogICAgICB2aXNpYmxlLAogICAgICBzaG93TW9kYWwsCiAgICAgIGhhbmRsZU9rLAogICAgICBoYW5kbGVDYW5jZWwsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4=",isdemo:!1}},{default:o(()=>[n("div",null,[c(l,{type:"primary",onClick:s.showModal},{default:o(()=>[t("Open Modal with customized button props")]),_:1},8,["onClick"]),c(k,{visible:s.visible,"onUpdate:visible":a[0]||(a[0]=g=>s.visible=g),title:"Basic Modal","ok-button-props":{disabled:!0},"cancel-button-props":{disabled:!0},onOk:s.handleOk},{default:o(()=>[Jt,Ft,Dt]),_:1},8,["visible","onOk"])])]),htmlCode:o(()=>[Mt]),jsVersionHtml:o(()=>[zt]),_:1},8,["jsfiddle"])}const Ut=b(Tt,[["render",jt]]);var T;const N=typeof window<"u",Lt=s=>typeof s=="string",S=()=>{};N&&((T=window==null?void 0:window.navigator)==null?void 0:T.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Ot(s){return tn()?(sn(s),!0):!1}var _t=Object.defineProperty,Et=Object.defineProperties,Qt=Object.getOwnPropertyDescriptors,J=Object.getOwnPropertySymbols,qt=Object.prototype.hasOwnProperty,$t=Object.prototype.propertyIsEnumerable,F=(s,a,e)=>a in s?_t(s,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[a]=e,ns=(s,a)=>{for(var e in a||(a={}))qt.call(a,e)&&F(s,e,a[e]);if(J)for(var e of J(a))$t.call(a,e)&&F(s,e,a[e]);return s},ts=(s,a)=>Et(s,Qt(a));function ss(s){if(!q(s))return $(s);const a=Array.isArray(s.value)?new Array(s.value.length):{};for(const e in s.value)a[e]=nn(()=>({get(){return s.value[e]},set(u){if(Array.isArray(s.value)){const i=[...s.value];i[e]=u,s.value=i}else{const i=ts(ns({},s.value),{[e]:u});Object.setPrototypeOf(i,s.value),s.value=i}}}));return a}function as(s){var a;const e=H(s);return(a=e==null?void 0:e.$el)!=null?a:e}const L=N?window:void 0;N&&window.document;N&&window.navigator;N&&window.location;function V(...s){let a,e,u,i;if(Lt(s[0])?([e,u,i]=s,a=L):[a,e,u,i]=s,!a)return S;let r=S;const l=P(()=>as(a),d=>{r(),d&&(d.addEventListener(e,u,i),r=()=>{d.removeEventListener(e,u,i),r=S})},{immediate:!0,flush:"post"}),k=()=>{l(),r()};return Ot(k),k}const K=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},X="__vueuse_ssr_handlers__";K[X]=K[X]||{};K[X];var os=Object.defineProperty,es=Object.defineProperties,cs=Object.getOwnPropertyDescriptors,D=Object.getOwnPropertySymbols,ps=Object.prototype.hasOwnProperty,ls=Object.prototype.propertyIsEnumerable,M=(s,a,e)=>a in s?os(s,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[a]=e,us=(s,a)=>{for(var e in a||(a={}))ps.call(a,e)&&M(s,e,a[e]);if(D)for(var e of D(a))ls.call(a,e)&&M(s,e,a[e]);return s},is=(s,a)=>es(s,cs(a));function ks(s,a={}){var e,u;const i=(e=a.draggingElement)!=null?e:L,r=m((u=a.initialValue)!=null?u:{x:0,y:0}),l=m(),k=C=>a.pointerTypes?a.pointerTypes.includes(C.pointerType):!0,d=C=>{H(a.preventDefault)&&C.preventDefault(),H(a.stopPropagation)&&C.stopPropagation()},g=C=>{var f;if(!k(C)||H(a.exact)&&C.target!==H(s))return;const v=H(s).getBoundingClientRect(),G={x:C.pageX-v.left,y:C.pageY-v.top};((f=a.onStart)==null?void 0:f.call(a,G,C))!==!1&&(l.value=G,d(C))},w=C=>{var f;!k(C)||!l.value||(r.value={x:C.pageX-l.value.x,y:C.pageY-l.value.y},(f=a.onMove)==null||f.call(a,r.value,C),d(C))},Z=C=>{var f;!k(C)||!l.value||(l.value=void 0,(f=a.onEnd)==null||f.call(a,r.value,C),d(C))};return N&&(V(s,"pointerdown",g,!0),V(i,"pointermove",w,!0),V(i,"pointerup",Z,!0)),is(us({},ss(r)),{position:r,isDragging:R(()=>!!l.value),style:R(()=>`left:${r.value.x}px;top:${r.value.y}px;`)})}var z;(function(s){s.UP="UP",s.RIGHT="RIGHT",s.DOWN="DOWN",s.LEFT="LEFT",s.NONE="NONE"})(z||(z={}));const rs=h({setup(){const s=m(!1),a=m(null),e=()=>{s.value=!0},{x:u,y:i,isDragging:r}=ks(a),l=B=>{console.log(B),s.value=!1},k=m(0),d=m(0),g=m(!1),w=m(0),Z=m(0),C=m(0),f=m(0),v=m({left:0,right:0,top:0,bottom:0});P([u,i],()=>{if(!g.value){k.value=u.value,d.value=i.value;const B=document.body.getBoundingClientRect(),x=a.value.getBoundingClientRect();v.value.right=B.width-x.width,v.value.bottom=B.height-x.height,C.value=w.value,f.value=Z.value}g.value=!0}),P(r,()=>{r||(g.value=!1)}),an(()=>{g.value&&(w.value=C.value+Math.min(Math.max(v.value.left,u.value),v.value.right)-k.value,Z.value=f.value+Math.min(Math.max(v.value.top,i.value),v.value.bottom)-d.value)});const G=R(()=>({transform:`translate(${w.value}px, ${Z.value}px)`}));return{visible:s,showModal:e,handleOk:l,modalTitleRef:a,transformStyle:G}}}),ds=n("p",null,"Some contents...",-1),gs=n("p",null,"Some contents...",-1),Cs=n("p",null,"Some contents...",-1),ms={ref:"modalTitleRef",style:{width:"100%",cursor:"move"}},Is=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showModal"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Open Modal"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-modal")]),t(`
      `),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("modalRef"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("visible")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("visible"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":wrap-style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ overflow: 'hidden' }"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"@ok"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleOk"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("Some contents..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("Some contents..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("Some contents..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#title"),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("modalTitleRef"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"cursor"),n("span",{class:"token punctuation"},":"),t(" move")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t("Draggable Modal"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#modalRender"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ originVNode }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("transformStyle"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("component")]),t(),n("span",{class:"token attr-name"},":is"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("originVNode"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-modal")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t(" computed"),n("span",{class:"token punctuation"},","),t(" CSSProperties"),n("span",{class:"token punctuation"},","),t(" watch"),n("span",{class:"token punctuation"},","),t(" watchEffect "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" useDraggable "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@vueuse/core'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" visible "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("boolean"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" modalTitleRef "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("HTMLElement"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"showModal"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      visible`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"{"),t(" x"),n("span",{class:"token punctuation"},","),t(" y"),n("span",{class:"token punctuation"},","),t(" isDragging "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"useDraggable"),n("span",{class:"token punctuation"},"("),t("modalTitleRef"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleOk"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"e"),n("span",{class:"token operator"},":"),t(" MouseEvent")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("e"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      visible`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" startX "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("number"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" startY "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("number"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" startedDrag "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" transformX "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" transformY "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" preTransformX "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" preTransformY "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" dragRect "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"left"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"right"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"top"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"bottom"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"0"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t("x"),n("span",{class:"token punctuation"},","),t(" y"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),t("startedDrag"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        startX`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(" x"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},";"),t(`
        startY`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(" y"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token keyword"},"const"),t(" bodyRect "),n("span",{class:"token operator"},"="),t(" document"),n("span",{class:"token punctuation"},"."),t("body"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getBoundingClientRect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token keyword"},"const"),t(" titleRect "),n("span",{class:"token operator"},"="),t(" modalTitleRef"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getBoundingClientRect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
        dragRect`),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),t("right "),n("span",{class:"token operator"},"="),t(" bodyRect"),n("span",{class:"token punctuation"},"."),t("width "),n("span",{class:"token operator"},"-"),t(" titleRect"),n("span",{class:"token punctuation"},"."),t("width"),n("span",{class:"token punctuation"},";"),t(`
        dragRect`),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),t("bottom "),n("span",{class:"token operator"},"="),t(" bodyRect"),n("span",{class:"token punctuation"},"."),t("height "),n("span",{class:"token operator"},"-"),t(" titleRect"),n("span",{class:"token punctuation"},"."),t("height"),n("span",{class:"token punctuation"},";"),t(`
        preTransformX`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(" transformX"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},";"),t(`
        preTransformY`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(" transformY"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
      startedDrag`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),t("isDragging"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),t("isDragging"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        startedDrag`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token function"},"watchEffect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("startedDrag"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        transformX`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(`
          preTransformX`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"+"),t(`
          Math`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"min"),n("span",{class:"token punctuation"},"("),t("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),t("dragRect"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),t("left"),n("span",{class:"token punctuation"},","),t(" x"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(" dragRect"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),t("right"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"-"),t(`
          startX`),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},";"),t(`
        transformY`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(`
          preTransformY`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"+"),t(`
          Math`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"min"),n("span",{class:"token punctuation"},"("),t("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),t("dragRect"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),t("top"),n("span",{class:"token punctuation"},","),t(" y"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(" dragRect"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),t("bottom"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"-"),t(`
          startY`),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" transformStyle "),n("span",{class:"token operator"},"="),t(" computed"),n("span",{class:"token operator"},"<"),t("CSSProperties"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"transform"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"translate("),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("transformX"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"px, "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("transformY"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"px)"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      visible`),n("span",{class:"token punctuation"},","),t(`
      showModal`),n("span",{class:"token punctuation"},","),t(`
      handleOk`),n("span",{class:"token punctuation"},","),t(`
      modalTitleRef`),n("span",{class:"token punctuation"},","),t(`
      transformStyle`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),bs=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showModal"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Open Modal"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-modal")]),t(`
      `),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("modalRef"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("visible")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("visible"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":wrap-style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ overflow: 'hidden' }"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"@ok"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleOk"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("Some contents..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("Some contents..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("Some contents..."),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#title"),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("modalTitleRef"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"cursor"),n("span",{class:"token punctuation"},":"),t(" move")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t("Draggable Modal"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#modalRender"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ originVNode }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("transformStyle"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("component")]),t(),n("span",{class:"token attr-name"},":is"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("originVNode"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-modal")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t(" computed"),n("span",{class:"token punctuation"},","),t(" watch"),n("span",{class:"token punctuation"},","),t(" watchEffect "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" useDraggable "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@vueuse/core'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" visible "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" modalTitleRef "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"showModal"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      visible`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"{"),t(`
      x`),n("span",{class:"token punctuation"},","),t(`
      y`),n("span",{class:"token punctuation"},","),t(`
      isDragging`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"useDraggable"),n("span",{class:"token punctuation"},"("),t("modalTitleRef"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleOk"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token parameter"},"e"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("e"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      visible`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" startX "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" startY "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" startedDrag "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" transformX "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" transformY "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" preTransformX "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" preTransformY "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" dragRect "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"left"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"right"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"top"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"bottom"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t("x"),n("span",{class:"token punctuation"},","),t(" y"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),t("startedDrag"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        startX`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(" x"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},";"),t(`
        startY`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(" y"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token keyword"},"const"),t(" bodyRect "),n("span",{class:"token operator"},"="),t(" document"),n("span",{class:"token punctuation"},"."),t("body"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getBoundingClientRect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token keyword"},"const"),t(" titleRect "),n("span",{class:"token operator"},"="),t(" modalTitleRef"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getBoundingClientRect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
        dragRect`),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),t("right "),n("span",{class:"token operator"},"="),t(" bodyRect"),n("span",{class:"token punctuation"},"."),t("width "),n("span",{class:"token operator"},"-"),t(" titleRect"),n("span",{class:"token punctuation"},"."),t("width"),n("span",{class:"token punctuation"},";"),t(`
        dragRect`),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),t("bottom "),n("span",{class:"token operator"},"="),t(" bodyRect"),n("span",{class:"token punctuation"},"."),t("height "),n("span",{class:"token operator"},"-"),t(" titleRect"),n("span",{class:"token punctuation"},"."),t("height"),n("span",{class:"token punctuation"},";"),t(`
        preTransformX`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(" transformX"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},";"),t(`
        preTransformY`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(" transformY"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
      startedDrag`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),t("isDragging"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),t("isDragging"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        startedDrag`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token function"},"watchEffect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("startedDrag"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        transformX`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(" preTransformX"),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"+"),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"min"),n("span",{class:"token punctuation"},"("),t("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),t("dragRect"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),t("left"),n("span",{class:"token punctuation"},","),t(" x"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(" dragRect"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),t("right"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"-"),t(" startX"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},";"),t(`
        transformY`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(" preTransformY"),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"+"),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"min"),n("span",{class:"token punctuation"},"("),t("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),t("dragRect"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),t("top"),n("span",{class:"token punctuation"},","),t(" y"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(" dragRect"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),t("bottom"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"-"),t(" startY"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" transformStyle "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"computed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"transform"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"translate("),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("transformX"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"px, "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("transformY"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"px)"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      visible`),n("span",{class:"token punctuation"},","),t(`
      showModal`),n("span",{class:"token punctuation"},","),t(`
      handleOk`),n("span",{class:"token punctuation"},","),t(`
      modalTitleRef`),n("span",{class:"token punctuation"},","),t(`
      transformStyle`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function As(s,a,e,u,i,r){const l=p("a-button"),k=p("a-modal"),d=p("demo-box");return I(),A(d,{jsfiddle:{us:"Custom modal content render. use `vueuse` implements draggable.",cn:"\u81EA\u5B9A\u4E49\u6E32\u67D3\u5BF9\u8BDD\u6846, \u53EF\u901A\u8FC7 `vueuse` \u6765\u5B9E\u73B0\u62D6\u62FD\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u81EA\u5B9A\u4E49\u6E32\u67D3\u5BF9\u8BDD\u6846, \u53EF\u901A\u8FC7 <code>vueuse</code> \u6765\u5B9E\u73B0\u62D6\u62FD\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Custom modal content render. use <code>vueuse</code> implements draggable.</p>
`,order:13,title:{"zh-CN":"\u81EA\u5B9A\u4E49\u6E32\u67D3\u5BF9\u8BDD\u6846","en-US":"Custom modal content render"},relativePath:"components/modal/demo/modal-render.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS1idXR0b24gdHlwZT0icHJpbWFyeSIgQGNsaWNrPSJzaG93TW9kYWwiPk9wZW4gTW9kYWw8L2EtYnV0dG9uPgogICAgPGEtbW9kYWwKICAgICAgcmVmPSJtb2RhbFJlZiIKICAgICAgdi1tb2RlbDp2aXNpYmxlPSJ2aXNpYmxlIgogICAgICA6d3JhcC1zdHlsZT0ieyBvdmVyZmxvdzogJ2hpZGRlbicgfSIKICAgICAgQG9rPSJoYW5kbGVPayIKICAgID4KICAgICAgPHA+U29tZSBjb250ZW50cy4uLjwvcD4KICAgICAgPHA+U29tZSBjb250ZW50cy4uLjwvcD4KICAgICAgPHA+U29tZSBjb250ZW50cy4uLjwvcD4KICAgICAgPHRlbXBsYXRlICN0aXRsZT4KICAgICAgICA8ZGl2IHJlZj0ibW9kYWxUaXRsZVJlZiIgc3R5bGU9IndpZHRoOiAxMDAlOyBjdXJzb3I6IG1vdmUiPkRyYWdnYWJsZSBNb2RhbDwvZGl2PgogICAgICA8L3RlbXBsYXRlPgogICAgICA8dGVtcGxhdGUgI21vZGFsUmVuZGVyPSJ7IG9yaWdpblZOb2RlIH0iPgogICAgICAgIDxkaXYgOnN0eWxlPSJ0cmFuc2Zvcm1TdHlsZSI+CiAgICAgICAgICA8Y29tcG9uZW50IDppcz0ib3JpZ2luVk5vZGUiIC8+CiAgICAgICAgPC9kaXY+CiAgICAgIDwvdGVtcGxhdGU+CiAgICA8L2EtbW9kYWw+CiAgPC9kaXY+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiwgY29tcHV0ZWQsIENTU1Byb3BlcnRpZXMsIHdhdGNoLCB3YXRjaEVmZmVjdCB9IGZyb20gJ3Z1ZSc7CmltcG9ydCB7IHVzZURyYWdnYWJsZSB9IGZyb20gJ0B2dWV1c2UvY29yZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCB2aXNpYmxlID0gcmVmPGJvb2xlYW4+KGZhbHNlKTsKICAgIGNvbnN0IG1vZGFsVGl0bGVSZWYgPSByZWY8SFRNTEVsZW1lbnQ+KG51bGwpOwogICAgY29uc3Qgc2hvd01vZGFsID0gKCkgPT4gewogICAgICB2aXNpYmxlLnZhbHVlID0gdHJ1ZTsKICAgIH07CiAgICBjb25zdCB7IHgsIHksIGlzRHJhZ2dpbmcgfSA9IHVzZURyYWdnYWJsZShtb2RhbFRpdGxlUmVmKTsKICAgIGNvbnN0IGhhbmRsZU9rID0gKGU6IE1vdXNlRXZlbnQpID0+IHsKICAgICAgY29uc29sZS5sb2coZSk7CiAgICAgIHZpc2libGUudmFsdWUgPSBmYWxzZTsKICAgIH07CiAgICBjb25zdCBzdGFydFggPSByZWY8bnVtYmVyPigwKTsKICAgIGNvbnN0IHN0YXJ0WSA9IHJlZjxudW1iZXI+KDApOwogICAgY29uc3Qgc3RhcnRlZERyYWcgPSByZWYoZmFsc2UpOwogICAgY29uc3QgdHJhbnNmb3JtWCA9IHJlZigwKTsKICAgIGNvbnN0IHRyYW5zZm9ybVkgPSByZWYoMCk7CiAgICBjb25zdCBwcmVUcmFuc2Zvcm1YID0gcmVmKDApOwogICAgY29uc3QgcHJlVHJhbnNmb3JtWSA9IHJlZigwKTsKICAgIGNvbnN0IGRyYWdSZWN0ID0gcmVmKHsgbGVmdDogMCwgcmlnaHQ6IDAsIHRvcDogMCwgYm90dG9tOiAwIH0pOwogICAgd2F0Y2goW3gsIHldLCAoKSA9PiB7CiAgICAgIGlmICghc3RhcnRlZERyYWcudmFsdWUpIHsKICAgICAgICBzdGFydFgudmFsdWUgPSB4LnZhbHVlOwogICAgICAgIHN0YXJ0WS52YWx1ZSA9IHkudmFsdWU7CiAgICAgICAgY29uc3QgYm9keVJlY3QgPSBkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpOwogICAgICAgIGNvbnN0IHRpdGxlUmVjdCA9IG1vZGFsVGl0bGVSZWYudmFsdWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7CiAgICAgICAgZHJhZ1JlY3QudmFsdWUucmlnaHQgPSBib2R5UmVjdC53aWR0aCAtIHRpdGxlUmVjdC53aWR0aDsKICAgICAgICBkcmFnUmVjdC52YWx1ZS5ib3R0b20gPSBib2R5UmVjdC5oZWlnaHQgLSB0aXRsZVJlY3QuaGVpZ2h0OwogICAgICAgIHByZVRyYW5zZm9ybVgudmFsdWUgPSB0cmFuc2Zvcm1YLnZhbHVlOwogICAgICAgIHByZVRyYW5zZm9ybVkudmFsdWUgPSB0cmFuc2Zvcm1ZLnZhbHVlOwogICAgICB9CiAgICAgIHN0YXJ0ZWREcmFnLnZhbHVlID0gdHJ1ZTsKICAgIH0pOwogICAgd2F0Y2goaXNEcmFnZ2luZywgKCkgPT4gewogICAgICBpZiAoIWlzRHJhZ2dpbmcpIHsKICAgICAgICBzdGFydGVkRHJhZy52YWx1ZSA9IGZhbHNlOwogICAgICB9CiAgICB9KTsKCiAgICB3YXRjaEVmZmVjdCgoKSA9PiB7CiAgICAgIGlmIChzdGFydGVkRHJhZy52YWx1ZSkgewogICAgICAgIHRyYW5zZm9ybVgudmFsdWUgPQogICAgICAgICAgcHJlVHJhbnNmb3JtWC52YWx1ZSArCiAgICAgICAgICBNYXRoLm1pbihNYXRoLm1heChkcmFnUmVjdC52YWx1ZS5sZWZ0LCB4LnZhbHVlKSwgZHJhZ1JlY3QudmFsdWUucmlnaHQpIC0KICAgICAgICAgIHN0YXJ0WC52YWx1ZTsKICAgICAgICB0cmFuc2Zvcm1ZLnZhbHVlID0KICAgICAgICAgIHByZVRyYW5zZm9ybVkudmFsdWUgKwogICAgICAgICAgTWF0aC5taW4oTWF0aC5tYXgoZHJhZ1JlY3QudmFsdWUudG9wLCB5LnZhbHVlKSwgZHJhZ1JlY3QudmFsdWUuYm90dG9tKSAtCiAgICAgICAgICBzdGFydFkudmFsdWU7CiAgICAgIH0KICAgIH0pOwogICAgY29uc3QgdHJhbnNmb3JtU3R5bGUgPSBjb21wdXRlZDxDU1NQcm9wZXJ0aWVzPigoKSA9PiB7CiAgICAgIHJldHVybiB7CiAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7dHJhbnNmb3JtWC52YWx1ZX1weCwgJHt0cmFuc2Zvcm1ZLnZhbHVlfXB4KWAsCiAgICAgIH07CiAgICB9KTsKICAgIHJldHVybiB7CiAgICAgIHZpc2libGUsCiAgICAgIHNob3dNb2RhbCwKICAgICAgaGFuZGxlT2ssCiAgICAgIG1vZGFsVGl0bGVSZWYsCiAgICAgIHRyYW5zZm9ybVN0eWxlLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS1idXR0b24gdHlwZT0icHJpbWFyeSIgQGNsaWNrPSJzaG93TW9kYWwiPk9wZW4gTW9kYWw8L2EtYnV0dG9uPgogICAgPGEtbW9kYWwKICAgICAgcmVmPSJtb2RhbFJlZiIKICAgICAgdi1tb2RlbDp2aXNpYmxlPSJ2aXNpYmxlIgogICAgICA6d3JhcC1zdHlsZT0ieyBvdmVyZmxvdzogJ2hpZGRlbicgfSIKICAgICAgQG9rPSJoYW5kbGVPayIKICAgID4KICAgICAgPHA+U29tZSBjb250ZW50cy4uLjwvcD4KICAgICAgPHA+U29tZSBjb250ZW50cy4uLjwvcD4KICAgICAgPHA+U29tZSBjb250ZW50cy4uLjwvcD4KICAgICAgPHRlbXBsYXRlICN0aXRsZT4KICAgICAgICA8ZGl2IHJlZj0ibW9kYWxUaXRsZVJlZiIgc3R5bGU9IndpZHRoOiAxMDAlOyBjdXJzb3I6IG1vdmUiPkRyYWdnYWJsZSBNb2RhbDwvZGl2PgogICAgICA8L3RlbXBsYXRlPgogICAgICA8dGVtcGxhdGUgI21vZGFsUmVuZGVyPSJ7IG9yaWdpblZOb2RlIH0iPgogICAgICAgIDxkaXYgOnN0eWxlPSJ0cmFuc2Zvcm1TdHlsZSI+CiAgICAgICAgICA8Y29tcG9uZW50IDppcz0ib3JpZ2luVk5vZGUiIC8+CiAgICAgICAgPC9kaXY+CiAgICAgIDwvdGVtcGxhdGU+CiAgICA8L2EtbW9kYWw+CiAgPC9kaXY+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmLCBjb21wdXRlZCwgd2F0Y2gsIHdhdGNoRWZmZWN0IH0gZnJvbSAndnVlJzsKaW1wb3J0IHsgdXNlRHJhZ2dhYmxlIH0gZnJvbSAnQHZ1ZXVzZS9jb3JlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IHZpc2libGUgPSByZWYoZmFsc2UpOwogICAgY29uc3QgbW9kYWxUaXRsZVJlZiA9IHJlZihudWxsKTsKICAgIGNvbnN0IHNob3dNb2RhbCA9ICgpID0+IHsKICAgICAgdmlzaWJsZS52YWx1ZSA9IHRydWU7CiAgICB9OwogICAgY29uc3QgewogICAgICB4LAogICAgICB5LAogICAgICBpc0RyYWdnaW5nLAogICAgfSA9IHVzZURyYWdnYWJsZShtb2RhbFRpdGxlUmVmKTsKICAgIGNvbnN0IGhhbmRsZU9rID0gZSA9PiB7CiAgICAgIGNvbnNvbGUubG9nKGUpOwogICAgICB2aXNpYmxlLnZhbHVlID0gZmFsc2U7CiAgICB9OwogICAgY29uc3Qgc3RhcnRYID0gcmVmKDApOwogICAgY29uc3Qgc3RhcnRZID0gcmVmKDApOwogICAgY29uc3Qgc3RhcnRlZERyYWcgPSByZWYoZmFsc2UpOwogICAgY29uc3QgdHJhbnNmb3JtWCA9IHJlZigwKTsKICAgIGNvbnN0IHRyYW5zZm9ybVkgPSByZWYoMCk7CiAgICBjb25zdCBwcmVUcmFuc2Zvcm1YID0gcmVmKDApOwogICAgY29uc3QgcHJlVHJhbnNmb3JtWSA9IHJlZigwKTsKICAgIGNvbnN0IGRyYWdSZWN0ID0gcmVmKHsKICAgICAgbGVmdDogMCwKICAgICAgcmlnaHQ6IDAsCiAgICAgIHRvcDogMCwKICAgICAgYm90dG9tOiAwLAogICAgfSk7CiAgICB3YXRjaChbeCwgeV0sICgpID0+IHsKICAgICAgaWYgKCFzdGFydGVkRHJhZy52YWx1ZSkgewogICAgICAgIHN0YXJ0WC52YWx1ZSA9IHgudmFsdWU7CiAgICAgICAgc3RhcnRZLnZhbHVlID0geS52YWx1ZTsKICAgICAgICBjb25zdCBib2R5UmVjdCA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7CiAgICAgICAgY29uc3QgdGl0bGVSZWN0ID0gbW9kYWxUaXRsZVJlZi52YWx1ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTsKICAgICAgICBkcmFnUmVjdC52YWx1ZS5yaWdodCA9IGJvZHlSZWN0LndpZHRoIC0gdGl0bGVSZWN0LndpZHRoOwogICAgICAgIGRyYWdSZWN0LnZhbHVlLmJvdHRvbSA9IGJvZHlSZWN0LmhlaWdodCAtIHRpdGxlUmVjdC5oZWlnaHQ7CiAgICAgICAgcHJlVHJhbnNmb3JtWC52YWx1ZSA9IHRyYW5zZm9ybVgudmFsdWU7CiAgICAgICAgcHJlVHJhbnNmb3JtWS52YWx1ZSA9IHRyYW5zZm9ybVkudmFsdWU7CiAgICAgIH0KICAgICAgc3RhcnRlZERyYWcudmFsdWUgPSB0cnVlOwogICAgfSk7CiAgICB3YXRjaChpc0RyYWdnaW5nLCAoKSA9PiB7CiAgICAgIGlmICghaXNEcmFnZ2luZykgewogICAgICAgIHN0YXJ0ZWREcmFnLnZhbHVlID0gZmFsc2U7CiAgICAgIH0KICAgIH0pOwogICAgd2F0Y2hFZmZlY3QoKCkgPT4gewogICAgICBpZiAoc3RhcnRlZERyYWcudmFsdWUpIHsKICAgICAgICB0cmFuc2Zvcm1YLnZhbHVlID0gcHJlVHJhbnNmb3JtWC52YWx1ZSArIE1hdGgubWluKE1hdGgubWF4KGRyYWdSZWN0LnZhbHVlLmxlZnQsIHgudmFsdWUpLCBkcmFnUmVjdC52YWx1ZS5yaWdodCkgLSBzdGFydFgudmFsdWU7CiAgICAgICAgdHJhbnNmb3JtWS52YWx1ZSA9IHByZVRyYW5zZm9ybVkudmFsdWUgKyBNYXRoLm1pbihNYXRoLm1heChkcmFnUmVjdC52YWx1ZS50b3AsIHkudmFsdWUpLCBkcmFnUmVjdC52YWx1ZS5ib3R0b20pIC0gc3RhcnRZLnZhbHVlOwogICAgICB9CiAgICB9KTsKICAgIGNvbnN0IHRyYW5zZm9ybVN0eWxlID0gY29tcHV0ZWQoKCkgPT4gewogICAgICByZXR1cm4gewogICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgke3RyYW5zZm9ybVgudmFsdWV9cHgsICR7dHJhbnNmb3JtWS52YWx1ZX1weClgLAogICAgICB9OwogICAgfSk7CiAgICByZXR1cm4gewogICAgICB2aXNpYmxlLAogICAgICBzaG93TW9kYWwsCiAgICAgIGhhbmRsZU9rLAogICAgICBtb2RhbFRpdGxlUmVmLAogICAgICB0cmFuc2Zvcm1TdHlsZSwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0Pg==",isdemo:!1}},{default:o(()=>[n("div",null,[c(l,{type:"primary",onClick:s.showModal},{default:o(()=>[t("Open Modal")]),_:1},8,["onClick"]),c(k,{ref:"modalRef",visible:s.visible,"onUpdate:visible":a[0]||(a[0]=g=>s.visible=g),"wrap-style":{overflow:"hidden"},onOk:s.handleOk},{title:o(()=>[n("div",ms,"Draggable Modal",512)]),modalRender:o(({originVNode:g})=>[n("div",{style:on(s.transformStyle)},[(I(),A(en(g)))],4)]),default:o(()=>[ds,gs,Cs]),_:1},8,["visible","onOk"])])]),htmlCode:o(()=>[Is]),jsVersionHtml:o(()=>[bs]),_:1},8,["jsfiddle"])}const hs=b(rs,[["render",As]]),fs={pageData:{title:"Modal",description:"",frontmatter:{category:"Components",type:"\u53CD\u9988",title:"Modal",subtitle:"\u5BF9\u8BDD\u6846",cover:"https://gw.alipayobjects.com/zos/alicdn/3StSdUlSH/Modal.svg"},headers:[{level:2,title:"\u4F55\u65F6\u4F7F\u7528",slug:"\u4F55\u65F6\u4F7F\u7528",content:"\u9700\u8981\u7528\u6237\u5904\u7406\u4E8B\u52A1\uFF0C\u53C8\u4E0D\u5E0C\u671B\u8DF3\u8F6C\u9875\u9762\u4EE5\u81F4\u6253\u65AD\u5DE5\u4F5C\u6D41\u7A0B\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 `Modal` \u5728\u5F53\u524D\u9875\u9762\u6B63\u4E2D\u6253\u5F00\u4E00\u4E2A\u6D6E\u5C42\uFF0C\u627F\u8F7D\u76F8\u5E94\u7684\u64CD\u4F5C\u3002"},{level:2,title:"API",slug:"API",content:""},{level:3,title:"\u4E8B\u4EF6",slug:"\u4E8B\u4EF6",content:""},{level:3,title:"Modal.method()",slug:"Modal-method",content:"\u5305\u62EC\uFF1A"},{level:2,title:"FAQ",slug:"FAQ",content:"\u4E3A\u4EC0\u4E48 Modal \u65B9\u6CD5\u4E0D\u80FD\u83B7\u53D6 \u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\u3001context\u3001vuex \u7B49\u5185\u5BB9\u548C ConfigProvider `locale/prefixCls` \u914D\u7F6E\uFF0C \u4EE5\u53CA\u4E0D\u80FD\u54CD\u5E94\u5F0F\u66F4\u65B0\u6570\u636E \uFF1F"},{level:3,title:"\u4E3A\u4EC0\u4E48 Modal \u65B9\u6CD5\u4E0D\u80FD\u83B7\u53D6 \u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\u3001context\u3001vuex \u7B49\u5185\u5BB9\u548C ConfigProvider locale/prefixCls \u914D\u7F6E\uFF0C \u4EE5\u53CA\u4E0D\u80FD\u54CD\u5E94\u5F0F\u66F4\u65B0\u6570\u636E \uFF1F",slug:"\u4E3A\u4EC0\u4E48-Modal-\u65B9\u6CD5\u4E0D\u80FD\u83B7\u53D6-\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\u3001context\u3001vuex-\u7B49\u5185\u5BB9\u548C-ConfigProvider-locale-prefixCls-\u914D\u7F6E\uFF0C-\u4EE5\u53CA\u4E0D\u80FD\u54CD\u5E94\u5F0F\u66F4\u65B0\u6570\u636E-\uFF1F",content:"\u76F4\u63A5\u8C03\u7528 Modal \u65B9\u6CD5\uFF0C\u7EC4\u4EF6\u4F1A\u901A\u8FC7 `Vue.render` \u52A8\u6001\u521B\u5EFA\u65B0\u7684 Vue \u5B9E\u4F53\u3002\u5176 context \u4E0E\u5F53\u524D\u4EE3\u7801\u6240\u5728 context \u5E76\u4E0D\u76F8\u540C\uFF0C\u56E0\u800C\u65E0\u6CD5\u83B7\u53D6 context \u4FE1\u606F\u3002"}],relativePath:"components/modal/index.zh-CN.md",content:`
\u6A21\u6001\u5BF9\u8BDD\u6846\u3002

## \u4F55\u65F6\u4F7F\u7528

\u9700\u8981\u7528\u6237\u5904\u7406\u4E8B\u52A1\uFF0C\u53C8\u4E0D\u5E0C\u671B\u8DF3\u8F6C\u9875\u9762\u4EE5\u81F4\u6253\u65AD\u5DE5\u4F5C\u6D41\u7A0B\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 \`Modal\` \u5728\u5F53\u524D\u9875\u9762\u6B63\u4E2D\u6253\u5F00\u4E00\u4E2A\u6D6E\u5C42\uFF0C\u627F\u8F7D\u76F8\u5E94\u7684\u64CD\u4F5C\u3002

\u53E6\u5916\u5F53\u9700\u8981\u4E00\u4E2A\u7B80\u6D01\u7684\u786E\u8BA4\u6846\u8BE2\u95EE\u7528\u6237\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 \`Modal.confirm()\` \u7B49\u8BED\u6CD5\u7CD6\u65B9\u6CD5\u3002

## API

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C | \u7248\u672C |
| --- | --- | --- | --- | --- |
| afterClose | Modal \u5B8C\u5168\u5173\u95ED\u540E\u7684\u56DE\u8C03 | function | \u65E0 |  |
| bodyStyle | Modal body \u6837\u5F0F | object | {} |  |
| cancelButtonProps | cancel \u6309\u94AE props | [ButtonProps](/components/button/#API) | - |  |
| cancelText | \u53D6\u6D88\u6309\u94AE\u6587\u5B57 | string\\| slot | \u53D6\u6D88 |  |
| centered | \u5782\u76F4\u5C45\u4E2D\u5C55\u793A Modal | boolean | \`false\` |  |
| closable | \u662F\u5426\u663E\u793A\u53F3\u4E0A\u89D2\u7684\u5173\u95ED\u6309\u94AE | boolean | true |  |
| closeIcon | \u81EA\u5B9A\u4E49\u5173\u95ED\u56FE\u6807 | VNode \\| slot | - |  |
| confirmLoading | \u786E\u5B9A\u6309\u94AE loading | boolean | \u65E0 |  |
| destroyOnClose | \u5173\u95ED\u65F6\u9500\u6BC1 Modal \u91CC\u7684\u5B50\u5143\u7D20 | boolean | false |  |
| dialogClass | \u53EF\u7528\u4E8E\u8BBE\u7F6E\u6D6E\u5C42\u7684\u7C7B\u540D | string | - |  |
| dialogStyle | \u53EF\u7528\u4E8E\u8BBE\u7F6E\u6D6E\u5C42\u7684\u6837\u5F0F\uFF0C\u8C03\u6574\u6D6E\u5C42\u4F4D\u7F6E\u7B49 | object | - |  |
| footer | \u5E95\u90E8\u5185\u5BB9\uFF0C\u5F53\u4E0D\u9700\u8981\u9ED8\u8BA4\u5E95\u90E8\u6309\u94AE\u65F6\uFF0C\u53EF\u4EE5\u8BBE\u4E3A \`:footer=&quot;null&quot;\` | string\\|slot | \u786E\u5B9A\u53D6\u6D88\u6309\u94AE |  |
| forceRender | \u5F3A\u5236\u6E32\u67D3 Modal | boolean | false |  |
| getContainer | \u6307\u5B9A Modal \u6302\u8F7D\u7684 HTML \u8282\u70B9 | (instance): HTMLElement | () =&gt; document.body |  |
| keyboard | \u662F\u5426\u652F\u6301\u952E\u76D8 esc \u5173\u95ED | boolean | true |  |
| mask | \u662F\u5426\u5C55\u793A\u906E\u7F69 | boolean | true |  |
| maskClosable | \u70B9\u51FB\u8499\u5C42\u662F\u5426\u5141\u8BB8\u5173\u95ED | boolean | true |  |
| maskStyle | \u906E\u7F69\u6837\u5F0F | object | {} |  |
| okButtonProps | ok \u6309\u94AE props | [ButtonProps](/components/button/#API) | - |  |
| okText | \u786E\u8BA4\u6309\u94AE\u6587\u5B57 | string\\|slot | \u786E\u5B9A |  |
| okType | \u786E\u8BA4\u6309\u94AE\u7C7B\u578B | string | primary |  |
| title | \u6807\u9898 | string\\|slot | \u65E0 |  |
| visible(v-model) | \u5BF9\u8BDD\u6846\u662F\u5426\u53EF\u89C1 | boolean | \u65E0 |  |
| width | \u5BBD\u5EA6 | string\\|number | 520 |  |
| wrapClassName | \u5BF9\u8BDD\u6846\u5916\u5C42\u5BB9\u5668\u7684\u7C7B\u540D | string | - |  |
| zIndex | \u8BBE\u7F6E Modal \u7684 \`z-index\` | number | 1000 |  |

### \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D\u79F0 | \u8BF4\u660E                                 | \u56DE\u8C03\u53C2\u6570    |
| -------- | ------------------------------------ | ----------- |
| cancel   | \u70B9\u51FB\u906E\u7F69\u5C42\u6216\u53F3\u4E0A\u89D2\u53C9\u6216\u53D6\u6D88\u6309\u94AE\u7684\u56DE\u8C03 | function(e) |
| ok       | \u70B9\u51FB\u786E\u5B9A\u56DE\u8C03                         | function(e) |

#### \u6CE8\u610F

&gt; \`&lt;Modal /&gt;\` \u9ED8\u8BA4\u5173\u95ED\u540E\u72B6\u6001\u4E0D\u4F1A\u81EA\u52A8\u6E05\u7A7A, \u5982\u679C\u5E0C\u671B\u6BCF\u6B21\u6253\u5F00\u90FD\u662F\u65B0\u5185\u5BB9\uFF0C\u8BF7\u8BBE\u7F6E \`destroyOnClose\`\u3002

### Modal.method()

\u5305\u62EC\uFF1A

- \`Modal.info\`
- \`Modal.success\`
- \`Modal.error\`
- \`Modal.warning\`
- \`Modal.confirm\`

\u4EE5\u4E0A\u5747\u4E3A\u4E00\u4E2A\u51FD\u6570\uFF0C\u53C2\u6570\u4E3A object\uFF0C\u5177\u4F53\u5C5E\u6027\u5982\u4E0B\uFF1A

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C | \u7248\u672C |
| --- | --- | --- | --- | --- |
| appContext | \u5F39\u7A97\u7684\u4E0A\u4E0B\u6587\uFF0C\u4E00\u822C\u7528\u4E8E\u83B7\u53D6\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\u3001vuex \u7B49\u5185\u5BB9 | - | - |  |
| autoFocusButton | \u6307\u5B9A\u81EA\u52A8\u83B7\u5F97\u7126\u70B9\u7684\u6309\u94AE | \`null\` \\| \`ok\` \\| \`cancel\` | \`ok\` |  |
| cancelButtonProps | cancel \u6309\u94AE props | [ButtonProps](/components/button) | - |  |
| cancelText | \u53D6\u6D88\u6309\u94AE\u6587\u5B57 | string | \u53D6\u6D88 |  |
| centered | \u5782\u76F4\u5C45\u4E2D\u5C55\u793A Modal | boolean | \`false\` |  |
| class | \u5BB9\u5668\u7C7B\u540D | string | - |  |
| closable | \u662F\u5426\u663E\u793A\u53F3\u4E0A\u89D2\u7684\u5173\u95ED\u6309\u94AE | boolean | \`false\` |  |
| content | \u5185\u5BB9 | string \\|VNode \\|function(h) | \u65E0 |  |
| icon | \u81EA\u5B9A\u4E49\u56FE\u6807\uFF081.14.0 \u65B0\u589E\uFF09 | VNode \\| ()=&gt;VNode | - |  |
| keyboard | \u662F\u5426\u652F\u6301\u952E\u76D8 esc \u5173\u95ED | boolean | true |  |
| mask | \u662F\u5426\u5C55\u793A\u906E\u7F69 | boolean | true |  |
| maskClosable | \u70B9\u51FB\u8499\u5C42\u662F\u5426\u5141\u8BB8\u5173\u95ED | boolean | \`false\` |  |
| okButtonProps | ok \u6309\u94AE props | [ButtonProps](/components/button) | - |  |
| okText | \u786E\u8BA4\u6309\u94AE\u6587\u5B57 | string | \u786E\u5B9A |  |
| okType | \u786E\u8BA4\u6309\u94AE\u7C7B\u578B | string | primary |  |
| title | \u6807\u9898 | string\\|VNode \\|function(h) | \u65E0 |  |
| width | \u5BBD\u5EA6 | string\\|number | 416 |  |
| wrapClassName | \u5BF9\u8BDD\u6846\u5916\u5C42\u5BB9\u5668\u7684\u7C7B\u540D | string | - | 3.2.3 |
| zIndex | \u8BBE\u7F6E Modal \u7684 \`z-index\` | number | 1000 |  |
| onCancel | \u53D6\u6D88\u56DE\u8C03\uFF0C\u53C2\u6570\u4E3A\u5173\u95ED\u51FD\u6570\uFF0C\u8FD4\u56DE promise \u65F6 resolve \u540E\u81EA\u52A8\u5173\u95ED | function | \u65E0 |  |
| onOk | \u70B9\u51FB\u786E\u5B9A\u56DE\u8C03\uFF0C\u53C2\u6570\u4E3A\u5173\u95ED\u51FD\u6570\uFF0C\u8FD4\u56DE promise \u65F6 resolve \u540E\u81EA\u52A8\u5173\u95ED | function | \u65E0 |  |

\u4EE5\u4E0A\u51FD\u6570\u8C03\u7528\u540E\uFF0C\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u5F15\u7528\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BE5\u5F15\u7528\u66F4\u65B0\u548C\u5173\u95ED\u5F39\u7A97\u3002

\`\`\`jsx
const modal = Modal.info();

modal.update({
  title: &#39;\u4FEE\u6539\u7684\u6807\u9898&#39;,
  content: &#39;\u4FEE\u6539\u7684\u5185\u5BB9&#39;,
});

modal.destroy();
\`\`\`

- \`Modal.destroyAll\`

\u4F7F\u7528 \`Modal.destroyAll()\` \u53EF\u4EE5\u9500\u6BC1\u5F39\u51FA\u7684\u786E\u8BA4\u7A97\uFF08\u5373\u4E0A\u8FF0\u7684 Modal.info\u3001Modal.success\u3001Modal.error\u3001Modal.warning\u3001Modal.confirm\uFF09\u3002\u901A\u5E38\u7528\u4E8E\u8DEF\u7531\u76D1\u542C\u5F53\u4E2D\uFF0C\u5904\u7406\u8DEF\u7531\u524D\u8FDB\u3001\u540E\u9000\u4E0D\u80FD\u9500\u6BC1\u786E\u8BA4\u5BF9\u8BDD\u6846\u7684\u95EE\u9898\uFF0C\u800C\u4E0D\u7528\u5404\u5904\u53BB\u4F7F\u7528\u5B9E\u4F8B\u7684\u8FD4\u56DE\u503C\u8FDB\u884C\u5173\u95ED\uFF08modal.destroy() \u9002\u7528\u4E8E\u4E3B\u52A8\u5173\u95ED\uFF0C\u800C\u4E0D\u662F\u8DEF\u7531\u8FD9\u6837\u88AB\u52A8\u5173\u95ED\uFF09

\`\`\`jsx
const router = new VueRouter({ ... })

// router change
router.beforeEach((to, from, next) =&gt; {
  Modal.destroyAll();
})
\`\`\`

## FAQ

### \u4E3A\u4EC0\u4E48 Modal \u65B9\u6CD5\u4E0D\u80FD\u83B7\u53D6 \u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\u3001context\u3001vuex \u7B49\u5185\u5BB9\u548C ConfigProvider \`locale/prefixCls\` \u914D\u7F6E\uFF0C \u4EE5\u53CA\u4E0D\u80FD\u54CD\u5E94\u5F0F\u66F4\u65B0\u6570\u636E \uFF1F

\u76F4\u63A5\u8C03\u7528 Modal \u65B9\u6CD5\uFF0C\u7EC4\u4EF6\u4F1A\u901A\u8FC7 \`Vue.render\` \u52A8\u6001\u521B\u5EFA\u65B0\u7684 Vue \u5B9E\u4F53\u3002\u5176 context \u4E0E\u5F53\u524D\u4EE3\u7801\u6240\u5728 context \u5E76\u4E0D\u76F8\u540C\uFF0C\u56E0\u800C\u65E0\u6CD5\u83B7\u53D6 context \u4FE1\u606F\u3002

\u5F53\u4F60\u9700\u8981 context \u4FE1\u606F\uFF08\u4F8B\u5982\u4F7F\u7528\u5168\u5C40\u6CE8\u518C\u7684\u7EC4\u4EF6\uFF09\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 \`appContext\` \u5C5E\u6027\u4F20\u9012\u5F53\u524D\u7EC4\u4EF6 context, \u5F53\u4F60\u9700\u8981\u4FDD\u7559\u5C5E\u6027\u54CD\u5E94\u5F0F\u65F6\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528\u51FD\u6570\u8FD4\u56DE\uFF1A

\`\`\`tsx
import { getCurrentInstance } from &#39;vue&#39;;

const appContext = getCurrentInstance().appContext;
const title = ref(&#39;some message&#39;);
Modal.confirm({
  title: () =&gt; title.value, // \u6B64\u65F6 title \u7684\u6539\u53D8\uFF0C\u4F1A\u540C\u6B65\u66F4\u65B0 confirm \u4E2D\u7684 title
  appContext,
});
\`\`\`
`,html:`<p>\u6A21\u6001\u5BF9\u8BDD\u6846\u3002</p>
<h2 id="\u4F55\u65F6\u4F7F\u7528">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u9700\u8981\u7528\u6237\u5904\u7406\u4E8B\u52A1\uFF0C\u53C8\u4E0D\u5E0C\u671B\u8DF3\u8F6C\u9875\u9762\u4EE5\u81F4\u6253\u65AD\u5DE5\u4F5C\u6D41\u7A0B\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>Modal</code> \u5728\u5F53\u524D\u9875\u9762\u6B63\u4E2D\u6253\u5F00\u4E00\u4E2A\u6D6E\u5C42\uFF0C\u627F\u8F7D\u76F8\u5E94\u7684\u64CD\u4F5C\u3002</p>
<p>\u53E6\u5916\u5F53\u9700\u8981\u4E00\u4E2A\u7B80\u6D01\u7684\u786E\u8BA4\u6846\u8BE2\u95EE\u7528\u6237\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>Modal.confirm()</code> \u7B49\u8BED\u6CD5\u7CD6\u65B9\u6CD5\u3002</p>
<h2 id="API">API <a class="header-anchor" href="#API">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
<th>\u7248\u672C</th>
</tr>
</thead>
<tbody>
<tr>
<td>afterClose</td>
<td>Modal \u5B8C\u5168\u5173\u95ED\u540E\u7684\u56DE\u8C03</td>
<td>function</td>
<td>\u65E0</td>
<td></td>
</tr>
<tr>
<td>bodyStyle</td>
<td>Modal body \u6837\u5F0F</td>
<td>object</td>
<td>{}</td>
<td></td>
</tr>
<tr>
<td>cancelButtonProps</td>
<td>cancel \u6309\u94AE props</td>
<td><a href="/components/button/#API">ButtonProps</a></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>cancelText</td>
<td>\u53D6\u6D88\u6309\u94AE\u6587\u5B57</td>
<td>string| slot</td>
<td>\u53D6\u6D88</td>
<td></td>
</tr>
<tr>
<td>centered</td>
<td>\u5782\u76F4\u5C45\u4E2D\u5C55\u793A Modal</td>
<td>boolean</td>
<td><code>false</code></td>
<td></td>
</tr>
<tr>
<td>closable</td>
<td>\u662F\u5426\u663E\u793A\u53F3\u4E0A\u89D2\u7684\u5173\u95ED\u6309\u94AE</td>
<td>boolean</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>closeIcon</td>
<td>\u81EA\u5B9A\u4E49\u5173\u95ED\u56FE\u6807</td>
<td>VNode | slot</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>confirmLoading</td>
<td>\u786E\u5B9A\u6309\u94AE loading</td>
<td>boolean</td>
<td>\u65E0</td>
<td></td>
</tr>
<tr>
<td>destroyOnClose</td>
<td>\u5173\u95ED\u65F6\u9500\u6BC1 Modal \u91CC\u7684\u5B50\u5143\u7D20</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>dialogClass</td>
<td>\u53EF\u7528\u4E8E\u8BBE\u7F6E\u6D6E\u5C42\u7684\u7C7B\u540D</td>
<td>string</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>dialogStyle</td>
<td>\u53EF\u7528\u4E8E\u8BBE\u7F6E\u6D6E\u5C42\u7684\u6837\u5F0F\uFF0C\u8C03\u6574\u6D6E\u5C42\u4F4D\u7F6E\u7B49</td>
<td>object</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>footer</td>
<td>\u5E95\u90E8\u5185\u5BB9\uFF0C\u5F53\u4E0D\u9700\u8981\u9ED8\u8BA4\u5E95\u90E8\u6309\u94AE\u65F6\uFF0C\u53EF\u4EE5\u8BBE\u4E3A <code>:footer=&quot;null&quot;</code></td>
<td>string|slot</td>
<td>\u786E\u5B9A\u53D6\u6D88\u6309\u94AE</td>
<td></td>
</tr>
<tr>
<td>forceRender</td>
<td>\u5F3A\u5236\u6E32\u67D3 Modal</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>getContainer</td>
<td>\u6307\u5B9A Modal \u6302\u8F7D\u7684 HTML \u8282\u70B9</td>
<td>(instance): HTMLElement</td>
<td>() =&gt; document.body</td>
<td></td>
</tr>
<tr>
<td>keyboard</td>
<td>\u662F\u5426\u652F\u6301\u952E\u76D8 esc \u5173\u95ED</td>
<td>boolean</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>mask</td>
<td>\u662F\u5426\u5C55\u793A\u906E\u7F69</td>
<td>boolean</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>maskClosable</td>
<td>\u70B9\u51FB\u8499\u5C42\u662F\u5426\u5141\u8BB8\u5173\u95ED</td>
<td>boolean</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>maskStyle</td>
<td>\u906E\u7F69\u6837\u5F0F</td>
<td>object</td>
<td>{}</td>
<td></td>
</tr>
<tr>
<td>okButtonProps</td>
<td>ok \u6309\u94AE props</td>
<td><a href="/components/button/#API">ButtonProps</a></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>okText</td>
<td>\u786E\u8BA4\u6309\u94AE\u6587\u5B57</td>
<td>string|slot</td>
<td>\u786E\u5B9A</td>
<td></td>
</tr>
<tr>
<td>okType</td>
<td>\u786E\u8BA4\u6309\u94AE\u7C7B\u578B</td>
<td>string</td>
<td>primary</td>
<td></td>
</tr>
<tr>
<td>title</td>
<td>\u6807\u9898</td>
<td>string|slot</td>
<td>\u65E0</td>
<td></td>
</tr>
<tr>
<td>visible(v-model)</td>
<td>\u5BF9\u8BDD\u6846\u662F\u5426\u53EF\u89C1</td>
<td>boolean</td>
<td>\u65E0</td>
<td></td>
</tr>
<tr>
<td>width</td>
<td>\u5BBD\u5EA6</td>
<td>string|number</td>
<td>520</td>
<td></td>
</tr>
<tr>
<td>wrapClassName</td>
<td>\u5BF9\u8BDD\u6846\u5916\u5C42\u5BB9\u5668\u7684\u7C7B\u540D</td>
<td>string</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>zIndex</td>
<td>\u8BBE\u7F6E Modal \u7684 <code>z-index</code></td>
<td>number</td>
<td>1000</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="\u4E8B\u4EF6">\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8B\u4EF6">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<table>
<thead>
<tr>
<th>\u4E8B\u4EF6\u540D\u79F0</th>
<th>\u8BF4\u660E</th>
<th>\u56DE\u8C03\u53C2\u6570</th>
</tr>
</thead>
<tbody>
<tr>
<td>cancel</td>
<td>\u70B9\u51FB\u906E\u7F69\u5C42\u6216\u53F3\u4E0A\u89D2\u53C9\u6216\u53D6\u6D88\u6309\u94AE\u7684\u56DE\u8C03</td>
<td>function(e)</td>
</tr>
<tr>
<td>ok</td>
<td>\u70B9\u51FB\u786E\u5B9A\u56DE\u8C03</td>
<td>function(e)</td>
</tr>
</tbody>
</table>
<h4 id="\u6CE8\u610F">\u6CE8\u610F <a class="header-anchor" href="#\u6CE8\u610F">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h4>
<blockquote>
<p><code>&lt;Modal /&gt;</code> \u9ED8\u8BA4\u5173\u95ED\u540E\u72B6\u6001\u4E0D\u4F1A\u81EA\u52A8\u6E05\u7A7A, \u5982\u679C\u5E0C\u671B\u6BCF\u6B21\u6253\u5F00\u90FD\u662F\u65B0\u5185\u5BB9\uFF0C\u8BF7\u8BBE\u7F6E <code>destroyOnClose</code>\u3002</p>
</blockquote>
<h3 id="Modal-method">Modal.method() <a class="header-anchor" href="#Modal-method">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>\u5305\u62EC\uFF1A</p>
<ul>
<li><code>Modal.info</code></li>
<li><code>Modal.success</code></li>
<li><code>Modal.error</code></li>
<li><code>Modal.warning</code></li>
<li><code>Modal.confirm</code></li>
</ul>
<p>\u4EE5\u4E0A\u5747\u4E3A\u4E00\u4E2A\u51FD\u6570\uFF0C\u53C2\u6570\u4E3A object\uFF0C\u5177\u4F53\u5C5E\u6027\u5982\u4E0B\uFF1A</p>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
<th>\u7248\u672C</th>
</tr>
</thead>
<tbody>
<tr>
<td>appContext</td>
<td>\u5F39\u7A97\u7684\u4E0A\u4E0B\u6587\uFF0C\u4E00\u822C\u7528\u4E8E\u83B7\u53D6\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\u3001vuex \u7B49\u5185\u5BB9</td>
<td>-</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>autoFocusButton</td>
<td>\u6307\u5B9A\u81EA\u52A8\u83B7\u5F97\u7126\u70B9\u7684\u6309\u94AE</td>
<td><code>null</code> | <code>ok</code> | <code>cancel</code></td>
<td><code>ok</code></td>
<td></td>
</tr>
<tr>
<td>cancelButtonProps</td>
<td>cancel \u6309\u94AE props</td>
<td><a href="/components/button">ButtonProps</a></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>cancelText</td>
<td>\u53D6\u6D88\u6309\u94AE\u6587\u5B57</td>
<td>string</td>
<td>\u53D6\u6D88</td>
<td></td>
</tr>
<tr>
<td>centered</td>
<td>\u5782\u76F4\u5C45\u4E2D\u5C55\u793A Modal</td>
<td>boolean</td>
<td><code>false</code></td>
<td></td>
</tr>
<tr>
<td>class</td>
<td>\u5BB9\u5668\u7C7B\u540D</td>
<td>string</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>closable</td>
<td>\u662F\u5426\u663E\u793A\u53F3\u4E0A\u89D2\u7684\u5173\u95ED\u6309\u94AE</td>
<td>boolean</td>
<td><code>false</code></td>
<td></td>
</tr>
<tr>
<td>content</td>
<td>\u5185\u5BB9</td>
<td>string |VNode |function(h)</td>
<td>\u65E0</td>
<td></td>
</tr>
<tr>
<td>icon</td>
<td>\u81EA\u5B9A\u4E49\u56FE\u6807\uFF081.14.0 \u65B0\u589E\uFF09</td>
<td>VNode | ()=&gt;VNode</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>keyboard</td>
<td>\u662F\u5426\u652F\u6301\u952E\u76D8 esc \u5173\u95ED</td>
<td>boolean</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>mask</td>
<td>\u662F\u5426\u5C55\u793A\u906E\u7F69</td>
<td>boolean</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>maskClosable</td>
<td>\u70B9\u51FB\u8499\u5C42\u662F\u5426\u5141\u8BB8\u5173\u95ED</td>
<td>boolean</td>
<td><code>false</code></td>
<td></td>
</tr>
<tr>
<td>okButtonProps</td>
<td>ok \u6309\u94AE props</td>
<td><a href="/components/button">ButtonProps</a></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>okText</td>
<td>\u786E\u8BA4\u6309\u94AE\u6587\u5B57</td>
<td>string</td>
<td>\u786E\u5B9A</td>
<td></td>
</tr>
<tr>
<td>okType</td>
<td>\u786E\u8BA4\u6309\u94AE\u7C7B\u578B</td>
<td>string</td>
<td>primary</td>
<td></td>
</tr>
<tr>
<td>title</td>
<td>\u6807\u9898</td>
<td>string|VNode |function(h)</td>
<td>\u65E0</td>
<td></td>
</tr>
<tr>
<td>width</td>
<td>\u5BBD\u5EA6</td>
<td>string|number</td>
<td>416</td>
<td></td>
</tr>
<tr>
<td>wrapClassName</td>
<td>\u5BF9\u8BDD\u6846\u5916\u5C42\u5BB9\u5668\u7684\u7C7B\u540D</td>
<td>string</td>
<td>-</td>
<td>3.2.3</td>
</tr>
<tr>
<td>zIndex</td>
<td>\u8BBE\u7F6E Modal \u7684 <code>z-index</code></td>
<td>number</td>
<td>1000</td>
<td></td>
</tr>
<tr>
<td>onCancel</td>
<td>\u53D6\u6D88\u56DE\u8C03\uFF0C\u53C2\u6570\u4E3A\u5173\u95ED\u51FD\u6570\uFF0C\u8FD4\u56DE promise \u65F6 resolve \u540E\u81EA\u52A8\u5173\u95ED</td>
<td>function</td>
<td>\u65E0</td>
<td></td>
</tr>
<tr>
<td>onOk</td>
<td>\u70B9\u51FB\u786E\u5B9A\u56DE\u8C03\uFF0C\u53C2\u6570\u4E3A\u5173\u95ED\u51FD\u6570\uFF0C\u8FD4\u56DE promise \u65F6 resolve \u540E\u81EA\u52A8\u5173\u95ED</td>
<td>function</td>
<td>\u65E0</td>
<td></td>
</tr>
</tbody>
</table>
<p>\u4EE5\u4E0A\u51FD\u6570\u8C03\u7528\u540E\uFF0C\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u5F15\u7528\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BE5\u5F15\u7528\u66F4\u65B0\u548C\u5173\u95ED\u5F39\u7A97\u3002</p>
<pre class="language-jsx" v-pre><code><span class="token keyword">const</span> modal <span class="token operator">=</span> Modal<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

modal<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'\u4FEE\u6539\u7684\u6807\u9898'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">'\u4FEE\u6539\u7684\u5185\u5BB9'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

modal<span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<ul>
<li><code>Modal.destroyAll</code></li>
</ul>
<p>\u4F7F\u7528 <code>Modal.destroyAll()</code> \u53EF\u4EE5\u9500\u6BC1\u5F39\u51FA\u7684\u786E\u8BA4\u7A97\uFF08\u5373\u4E0A\u8FF0\u7684 <a href="http://Modal.info" target="_blank" rel="noopener noreferrer">Modal.info</a>\u3001Modal.success\u3001Modal.error\u3001Modal.warning\u3001Modal.confirm\uFF09\u3002\u901A\u5E38\u7528\u4E8E\u8DEF\u7531\u76D1\u542C\u5F53\u4E2D\uFF0C\u5904\u7406\u8DEF\u7531\u524D\u8FDB\u3001\u540E\u9000\u4E0D\u80FD\u9500\u6BC1\u786E\u8BA4\u5BF9\u8BDD\u6846\u7684\u95EE\u9898\uFF0C\u800C\u4E0D\u7528\u5404\u5904\u53BB\u4F7F\u7528\u5B9E\u4F8B\u7684\u8FD4\u56DE\u503C\u8FDB\u884C\u5173\u95ED\uFF08modal.destroy() \u9002\u7528\u4E8E\u4E3B\u52A8\u5173\u95ED\uFF0C\u800C\u4E0D\u662F\u8DEF\u7531\u8FD9\u6837\u88AB\u52A8\u5173\u95ED\uFF09</p>
<pre class="language-jsx" v-pre><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// router change</span>
router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  Modal<span class="token punctuation">.</span><span class="token function">destroyAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre>
<h2 id="FAQ">FAQ <a class="header-anchor" href="#FAQ">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<h3 id="\u4E3A\u4EC0\u4E48-Modal-\u65B9\u6CD5\u4E0D\u80FD\u83B7\u53D6-\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\u3001context\u3001vuex-\u7B49\u5185\u5BB9\u548C-ConfigProvider-locale-prefixCls-\u914D\u7F6E\uFF0C-\u4EE5\u53CA\u4E0D\u80FD\u54CD\u5E94\u5F0F\u66F4\u65B0\u6570\u636E-\uFF1F">\u4E3A\u4EC0\u4E48 Modal \u65B9\u6CD5\u4E0D\u80FD\u83B7\u53D6 \u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\u3001context\u3001vuex \u7B49\u5185\u5BB9\u548C ConfigProvider <code>locale/prefixCls</code> \u914D\u7F6E\uFF0C \u4EE5\u53CA\u4E0D\u80FD\u54CD\u5E94\u5F0F\u66F4\u65B0\u6570\u636E \uFF1F <a class="header-anchor" href="#\u4E3A\u4EC0\u4E48-Modal-\u65B9\u6CD5\u4E0D\u80FD\u83B7\u53D6-\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\u3001context\u3001vuex-\u7B49\u5185\u5BB9\u548C-ConfigProvider-locale-prefixCls-\u914D\u7F6E\uFF0C-\u4EE5\u53CA\u4E0D\u80FD\u54CD\u5E94\u5F0F\u66F4\u65B0\u6570\u636E-\uFF1F">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>\u76F4\u63A5\u8C03\u7528 Modal \u65B9\u6CD5\uFF0C\u7EC4\u4EF6\u4F1A\u901A\u8FC7 <code>Vue.render</code> \u52A8\u6001\u521B\u5EFA\u65B0\u7684 Vue \u5B9E\u4F53\u3002\u5176 context \u4E0E\u5F53\u524D\u4EE3\u7801\u6240\u5728 context \u5E76\u4E0D\u76F8\u540C\uFF0C\u56E0\u800C\u65E0\u6CD5\u83B7\u53D6 context \u4FE1\u606F\u3002</p>
<p>\u5F53\u4F60\u9700\u8981 context \u4FE1\u606F\uFF08\u4F8B\u5982\u4F7F\u7528\u5168\u5C40\u6CE8\u518C\u7684\u7EC4\u4EF6\uFF09\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>appContext</code> \u5C5E\u6027\u4F20\u9012\u5F53\u524D\u7EC4\u4EF6 context, \u5F53\u4F60\u9700\u8981\u4FDD\u7559\u5C5E\u6027\u54CD\u5E94\u5F0F\u65F6\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528\u51FD\u6570\u8FD4\u56DE\uFF1A</p>
<pre class="language-tsx" v-pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getCurrentInstance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> appContext <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>appContext<span class="token punctuation">;</span>
<span class="token keyword">const</span> title <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'some message'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Modal<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">title</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> title<span class="token punctuation">.</span>value<span class="token punctuation">,</span> <span class="token comment">// \u6B64\u65F6 title \u7684\u6539\u53D8\uFF0C\u4F1A\u540C\u6B65\u66F4\u65B0 confirm \u4E2D\u7684 title</span>
  appContext<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
`,lastUpdated:1669791392033}},ys={class:"markdown"},vs=U(`<p>\u6A21\u6001\u5BF9\u8BDD\u6846\u3002</p><h2 id="\u4F55\u65F6\u4F7F\u7528">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528"><span aria-hidden="true" class="anchor">#</span></a></h2><p>\u9700\u8981\u7528\u6237\u5904\u7406\u4E8B\u52A1\uFF0C\u53C8\u4E0D\u5E0C\u671B\u8DF3\u8F6C\u9875\u9762\u4EE5\u81F4\u6253\u65AD\u5DE5\u4F5C\u6D41\u7A0B\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>Modal</code> \u5728\u5F53\u524D\u9875\u9762\u6B63\u4E2D\u6253\u5F00\u4E00\u4E2A\u6D6E\u5C42\uFF0C\u627F\u8F7D\u76F8\u5E94\u7684\u64CD\u4F5C\u3002</p><p>\u53E6\u5916\u5F53\u9700\u8981\u4E00\u4E2A\u7B80\u6D01\u7684\u786E\u8BA4\u6846\u8BE2\u95EE\u7528\u6237\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>Modal.confirm()</code> \u7B49\u8BED\u6CD5\u7CD6\u65B9\u6CD5\u3002</p><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>afterClose</td><td>Modal \u5B8C\u5168\u5173\u95ED\u540E\u7684\u56DE\u8C03</td><td>function</td><td>\u65E0</td><td></td></tr><tr><td>bodyStyle</td><td>Modal body \u6837\u5F0F</td><td>object</td><td>{}</td><td></td></tr><tr><td>cancelButtonProps</td><td>cancel \u6309\u94AE props</td><td><a href="/components/button/#API">ButtonProps</a></td><td>-</td><td></td></tr><tr><td>cancelText</td><td>\u53D6\u6D88\u6309\u94AE\u6587\u5B57</td><td>string| slot</td><td>\u53D6\u6D88</td><td></td></tr><tr><td>centered</td><td>\u5782\u76F4\u5C45\u4E2D\u5C55\u793A Modal</td><td>boolean</td><td><code>false</code></td><td></td></tr><tr><td>closable</td><td>\u662F\u5426\u663E\u793A\u53F3\u4E0A\u89D2\u7684\u5173\u95ED\u6309\u94AE</td><td>boolean</td><td>true</td><td></td></tr><tr><td>closeIcon</td><td>\u81EA\u5B9A\u4E49\u5173\u95ED\u56FE\u6807</td><td>VNode | slot</td><td>-</td><td></td></tr><tr><td>confirmLoading</td><td>\u786E\u5B9A\u6309\u94AE loading</td><td>boolean</td><td>\u65E0</td><td></td></tr><tr><td>destroyOnClose</td><td>\u5173\u95ED\u65F6\u9500\u6BC1 Modal \u91CC\u7684\u5B50\u5143\u7D20</td><td>boolean</td><td>false</td><td></td></tr><tr><td>dialogClass</td><td>\u53EF\u7528\u4E8E\u8BBE\u7F6E\u6D6E\u5C42\u7684\u7C7B\u540D</td><td>string</td><td>-</td><td></td></tr><tr><td>dialogStyle</td><td>\u53EF\u7528\u4E8E\u8BBE\u7F6E\u6D6E\u5C42\u7684\u6837\u5F0F\uFF0C\u8C03\u6574\u6D6E\u5C42\u4F4D\u7F6E\u7B49</td><td>object</td><td>-</td><td></td></tr><tr><td>footer</td><td>\u5E95\u90E8\u5185\u5BB9\uFF0C\u5F53\u4E0D\u9700\u8981\u9ED8\u8BA4\u5E95\u90E8\u6309\u94AE\u65F6\uFF0C\u53EF\u4EE5\u8BBE\u4E3A <code>:footer=&quot;null&quot;</code></td><td>string|slot</td><td>\u786E\u5B9A\u53D6\u6D88\u6309\u94AE</td><td></td></tr><tr><td>forceRender</td><td>\u5F3A\u5236\u6E32\u67D3 Modal</td><td>boolean</td><td>false</td><td></td></tr><tr><td>getContainer</td><td>\u6307\u5B9A Modal \u6302\u8F7D\u7684 HTML \u8282\u70B9</td><td>(instance): HTMLElement</td><td>() =&gt; document.body</td><td></td></tr><tr><td>keyboard</td><td>\u662F\u5426\u652F\u6301\u952E\u76D8 esc \u5173\u95ED</td><td>boolean</td><td>true</td><td></td></tr><tr><td>mask</td><td>\u662F\u5426\u5C55\u793A\u906E\u7F69</td><td>boolean</td><td>true</td><td></td></tr><tr><td>maskClosable</td><td>\u70B9\u51FB\u8499\u5C42\u662F\u5426\u5141\u8BB8\u5173\u95ED</td><td>boolean</td><td>true</td><td></td></tr><tr><td>maskStyle</td><td>\u906E\u7F69\u6837\u5F0F</td><td>object</td><td>{}</td><td></td></tr><tr><td>okButtonProps</td><td>ok \u6309\u94AE props</td><td><a href="/components/button/#API">ButtonProps</a></td><td>-</td><td></td></tr><tr><td>okText</td><td>\u786E\u8BA4\u6309\u94AE\u6587\u5B57</td><td>string|slot</td><td>\u786E\u5B9A</td><td></td></tr><tr><td>okType</td><td>\u786E\u8BA4\u6309\u94AE\u7C7B\u578B</td><td>string</td><td>primary</td><td></td></tr><tr><td>title</td><td>\u6807\u9898</td><td>string|slot</td><td>\u65E0</td><td></td></tr><tr><td>visible(v-model)</td><td>\u5BF9\u8BDD\u6846\u662F\u5426\u53EF\u89C1</td><td>boolean</td><td>\u65E0</td><td></td></tr><tr><td>width</td><td>\u5BBD\u5EA6</td><td>string|number</td><td>520</td><td></td></tr><tr><td>wrapClassName</td><td>\u5BF9\u8BDD\u6846\u5916\u5C42\u5BB9\u5668\u7684\u7C7B\u540D</td><td>string</td><td>-</td><td></td></tr><tr><td>zIndex</td><td>\u8BBE\u7F6E Modal \u7684 <code>z-index</code></td><td>number</td><td>1000</td><td></td></tr></tbody></table><h3 id="\u4E8B\u4EF6">\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8B\u4EF6"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>cancel</td><td>\u70B9\u51FB\u906E\u7F69\u5C42\u6216\u53F3\u4E0A\u89D2\u53C9\u6216\u53D6\u6D88\u6309\u94AE\u7684\u56DE\u8C03</td><td>function(e)</td></tr><tr><td>ok</td><td>\u70B9\u51FB\u786E\u5B9A\u56DE\u8C03</td><td>function(e)</td></tr></tbody></table><h4 id="\u6CE8\u610F">\u6CE8\u610F <a class="header-anchor" href="#\u6CE8\u610F"><span aria-hidden="true" class="anchor">#</span></a></h4><blockquote><p><code>&lt;Modal /&gt;</code> \u9ED8\u8BA4\u5173\u95ED\u540E\u72B6\u6001\u4E0D\u4F1A\u81EA\u52A8\u6E05\u7A7A, \u5982\u679C\u5E0C\u671B\u6BCF\u6B21\u6253\u5F00\u90FD\u662F\u65B0\u5185\u5BB9\uFF0C\u8BF7\u8BBE\u7F6E <code>destroyOnClose</code>\u3002</p></blockquote><h3 id="Modal-method">Modal.method() <a class="header-anchor" href="#Modal-method"><span aria-hidden="true" class="anchor">#</span></a></h3><p>\u5305\u62EC\uFF1A</p><ul><li><code>Modal.info</code></li><li><code>Modal.success</code></li><li><code>Modal.error</code></li><li><code>Modal.warning</code></li><li><code>Modal.confirm</code></li></ul><p>\u4EE5\u4E0A\u5747\u4E3A\u4E00\u4E2A\u51FD\u6570\uFF0C\u53C2\u6570\u4E3A object\uFF0C\u5177\u4F53\u5C5E\u6027\u5982\u4E0B\uFF1A</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>appContext</td><td>\u5F39\u7A97\u7684\u4E0A\u4E0B\u6587\uFF0C\u4E00\u822C\u7528\u4E8E\u83B7\u53D6\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\u3001vuex \u7B49\u5185\u5BB9</td><td>-</td><td>-</td><td></td></tr><tr><td>autoFocusButton</td><td>\u6307\u5B9A\u81EA\u52A8\u83B7\u5F97\u7126\u70B9\u7684\u6309\u94AE</td><td><code>null</code> | <code>ok</code> | <code>cancel</code></td><td><code>ok</code></td><td></td></tr><tr><td>cancelButtonProps</td><td>cancel \u6309\u94AE props</td><td><a href="/components/button">ButtonProps</a></td><td>-</td><td></td></tr><tr><td>cancelText</td><td>\u53D6\u6D88\u6309\u94AE\u6587\u5B57</td><td>string</td><td>\u53D6\u6D88</td><td></td></tr><tr><td>centered</td><td>\u5782\u76F4\u5C45\u4E2D\u5C55\u793A Modal</td><td>boolean</td><td><code>false</code></td><td></td></tr><tr><td>class</td><td>\u5BB9\u5668\u7C7B\u540D</td><td>string</td><td>-</td><td></td></tr><tr><td>closable</td><td>\u662F\u5426\u663E\u793A\u53F3\u4E0A\u89D2\u7684\u5173\u95ED\u6309\u94AE</td><td>boolean</td><td><code>false</code></td><td></td></tr><tr><td>content</td><td>\u5185\u5BB9</td><td>string |VNode |function(h)</td><td>\u65E0</td><td></td></tr><tr><td>icon</td><td>\u81EA\u5B9A\u4E49\u56FE\u6807\uFF081.14.0 \u65B0\u589E\uFF09</td><td>VNode | ()=&gt;VNode</td><td>-</td><td></td></tr><tr><td>keyboard</td><td>\u662F\u5426\u652F\u6301\u952E\u76D8 esc \u5173\u95ED</td><td>boolean</td><td>true</td><td></td></tr><tr><td>mask</td><td>\u662F\u5426\u5C55\u793A\u906E\u7F69</td><td>boolean</td><td>true</td><td></td></tr><tr><td>maskClosable</td><td>\u70B9\u51FB\u8499\u5C42\u662F\u5426\u5141\u8BB8\u5173\u95ED</td><td>boolean</td><td><code>false</code></td><td></td></tr><tr><td>okButtonProps</td><td>ok \u6309\u94AE props</td><td><a href="/components/button">ButtonProps</a></td><td>-</td><td></td></tr><tr><td>okText</td><td>\u786E\u8BA4\u6309\u94AE\u6587\u5B57</td><td>string</td><td>\u786E\u5B9A</td><td></td></tr><tr><td>okType</td><td>\u786E\u8BA4\u6309\u94AE\u7C7B\u578B</td><td>string</td><td>primary</td><td></td></tr><tr><td>title</td><td>\u6807\u9898</td><td>string|VNode |function(h)</td><td>\u65E0</td><td></td></tr><tr><td>width</td><td>\u5BBD\u5EA6</td><td>string|number</td><td>416</td><td></td></tr><tr><td>wrapClassName</td><td>\u5BF9\u8BDD\u6846\u5916\u5C42\u5BB9\u5668\u7684\u7C7B\u540D</td><td>string</td><td>-</td><td>3.2.3</td></tr><tr><td>zIndex</td><td>\u8BBE\u7F6E Modal \u7684 <code>z-index</code></td><td>number</td><td>1000</td><td></td></tr><tr><td>onCancel</td><td>\u53D6\u6D88\u56DE\u8C03\uFF0C\u53C2\u6570\u4E3A\u5173\u95ED\u51FD\u6570\uFF0C\u8FD4\u56DE promise \u65F6 resolve \u540E\u81EA\u52A8\u5173\u95ED</td><td>function</td><td>\u65E0</td><td></td></tr><tr><td>onOk</td><td>\u70B9\u51FB\u786E\u5B9A\u56DE\u8C03\uFF0C\u53C2\u6570\u4E3A\u5173\u95ED\u51FD\u6570\uFF0C\u8FD4\u56DE promise \u65F6 resolve \u540E\u81EA\u52A8\u5173\u95ED</td><td>function</td><td>\u65E0</td><td></td></tr></tbody></table><p>\u4EE5\u4E0A\u51FD\u6570\u8C03\u7528\u540E\uFF0C\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u5F15\u7528\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BE5\u5F15\u7528\u66F4\u65B0\u548C\u5173\u95ED\u5F39\u7A97\u3002</p><pre class="language-jsx"><code><span class="token keyword">const</span> modal <span class="token operator">=</span> Modal<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

modal<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u4FEE\u6539\u7684\u6807\u9898&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&#39;\u4FEE\u6539\u7684\u5185\u5BB9&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

modal<span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><ul><li><code>Modal.destroyAll</code></li></ul><p>\u4F7F\u7528 <code>Modal.destroyAll()</code> \u53EF\u4EE5\u9500\u6BC1\u5F39\u51FA\u7684\u786E\u8BA4\u7A97\uFF08\u5373\u4E0A\u8FF0\u7684 <a href="http://Modal.info" target="_blank" rel="noopener noreferrer">Modal.info</a>\u3001Modal.success\u3001Modal.error\u3001Modal.warning\u3001Modal.confirm\uFF09\u3002\u901A\u5E38\u7528\u4E8E\u8DEF\u7531\u76D1\u542C\u5F53\u4E2D\uFF0C\u5904\u7406\u8DEF\u7531\u524D\u8FDB\u3001\u540E\u9000\u4E0D\u80FD\u9500\u6BC1\u786E\u8BA4\u5BF9\u8BDD\u6846\u7684\u95EE\u9898\uFF0C\u800C\u4E0D\u7528\u5404\u5904\u53BB\u4F7F\u7528\u5B9E\u4F8B\u7684\u8FD4\u56DE\u503C\u8FDB\u884C\u5173\u95ED\uFF08modal.destroy() \u9002\u7528\u4E8E\u4E3B\u52A8\u5173\u95ED\uFF0C\u800C\u4E0D\u662F\u8DEF\u7531\u8FD9\u6837\u88AB\u52A8\u5173\u95ED\uFF09</p><pre class="language-jsx"><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// router change</span>
router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  Modal<span class="token punctuation">.</span><span class="token function">destroyAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><h2 id="FAQ">FAQ <a class="header-anchor" href="#FAQ"><span aria-hidden="true" class="anchor">#</span></a></h2><h3 id="\u4E3A\u4EC0\u4E48-Modal-\u65B9\u6CD5\u4E0D\u80FD\u83B7\u53D6-\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\u3001context\u3001vuex-\u7B49\u5185\u5BB9\u548C-ConfigProvider-locale-prefixCls-\u914D\u7F6E\uFF0C-\u4EE5\u53CA\u4E0D\u80FD\u54CD\u5E94\u5F0F\u66F4\u65B0\u6570\u636E-\uFF1F">\u4E3A\u4EC0\u4E48 Modal \u65B9\u6CD5\u4E0D\u80FD\u83B7\u53D6 \u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\u3001context\u3001vuex \u7B49\u5185\u5BB9\u548C ConfigProvider <code>locale/prefixCls</code> \u914D\u7F6E\uFF0C \u4EE5\u53CA\u4E0D\u80FD\u54CD\u5E94\u5F0F\u66F4\u65B0\u6570\u636E \uFF1F <a class="header-anchor" href="#\u4E3A\u4EC0\u4E48-Modal-\u65B9\u6CD5\u4E0D\u80FD\u83B7\u53D6-\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\u3001context\u3001vuex-\u7B49\u5185\u5BB9\u548C-ConfigProvider-locale-prefixCls-\u914D\u7F6E\uFF0C-\u4EE5\u53CA\u4E0D\u80FD\u54CD\u5E94\u5F0F\u66F4\u65B0\u6570\u636E-\uFF1F"><span aria-hidden="true" class="anchor">#</span></a></h3><p>\u76F4\u63A5\u8C03\u7528 Modal \u65B9\u6CD5\uFF0C\u7EC4\u4EF6\u4F1A\u901A\u8FC7 <code>Vue.render</code> \u52A8\u6001\u521B\u5EFA\u65B0\u7684 Vue \u5B9E\u4F53\u3002\u5176 context \u4E0E\u5F53\u524D\u4EE3\u7801\u6240\u5728 context \u5E76\u4E0D\u76F8\u540C\uFF0C\u56E0\u800C\u65E0\u6CD5\u83B7\u53D6 context \u4FE1\u606F\u3002</p><p>\u5F53\u4F60\u9700\u8981 context \u4FE1\u606F\uFF08\u4F8B\u5982\u4F7F\u7528\u5168\u5C40\u6CE8\u518C\u7684\u7EC4\u4EF6\uFF09\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>appContext</code> \u5C5E\u6027\u4F20\u9012\u5F53\u524D\u7EC4\u4EF6 context, \u5F53\u4F60\u9700\u8981\u4FDD\u7559\u5C5E\u6027\u54CD\u5E94\u5F0F\u65F6\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528\u51FD\u6570\u8FD4\u56DE\uFF1A</p><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getCurrentInstance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> appContext <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>appContext<span class="token punctuation">;</span>
<span class="token keyword">const</span> title <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;some message&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Modal<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">title</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> title<span class="token punctuation">.</span>value<span class="token punctuation">,</span> <span class="token comment">// \u6B64\u65F6 title \u7684\u6539\u53D8\uFF0C\u4F1A\u540C\u6B65\u66F4\u65B0 confirm \u4E2D\u7684 title</span>
  appContext<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>`,25),ws=[vs];function Zs(s,a,e,u,i,r){return I(),j("article",ys,ws)}const Ws=b(fs,[["render",Zs]]),Gs={pageData:{title:"Modal",description:"",frontmatter:{category:"Components",type:"Feedback",title:"Modal",cover:"https://gw.alipayobjects.com/zos/alicdn/3StSdUlSH/Modal.svg"},headers:[{level:2,title:"When To Use",slug:"When-To-Use",content:"When requiring users to interact with the application, but without jumping to a new page and interrupting the user's workflow, you can use `Modal` to create a new floating layer over the current page to get user feedback or display information. Additionally, if you need show a simple confirmation dialog, you can use `antd.Modal.confirm()`, and so on."},{level:2,title:"API",slug:"API",content:""},{level:3,title:"events",slug:"events",content:""},{level:3,title:"Modal.method()",slug:"Modal-method",content:"There are five ways to display the information based on the content's nature:"},{level:2,title:"FAQ",slug:"FAQ",content:"Why can't the Modal method obtain global registered components, context, vuex, etc. and ConfigProvider `locale/prefixCls` configuration, and can't update data responsively?"},{level:3,title:"Why can't the Modal method obtain global registered components, context, vuex, etc. and ConfigProvider locale/prefixCls configuration, and can't update data responsively?",slug:"Why-can-t-the-Modal-method-obtain-global-registered-components-context-vuex-etc-and-ConfigProvider-locale-prefixCls-configuration-and-can-t-update-data-responsively",content:"Call the Modal method directly, and the component will dynamically create a new Vue entity through `Vue.render`. Its context is not the same as the context where the current code is located, so the context information cannot be obtained."}],relativePath:"components/modal/index.en-US.md",content:`
Modal dialogs.

## When To Use

When requiring users to interact with the application, but without jumping to a new page and interrupting the user&#39;s workflow, you can use \`Modal\` to create a new floating layer over the current page to get user feedback or display information. Additionally, if you need show a simple confirmation dialog, you can use \`antd.Modal.confirm()\`, and so on.

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| afterClose | Specify a function that will be called when modal is closed completely. | function | - |  |
| bodyStyle | Body style for modal body element. Such as height, padding etc. | object | {} |  |
| cancelButtonProps | The cancel button props | [ButtonProps](/components/button/#API) | - |  |
| cancelText | Text of the Cancel button | string\\|slot | \`Cancel\` |  |
| centered | Centered Modal | boolean | \`false\` |  |
| closable | Whether a close (x) button is visible on top right of the modal dialog or not | boolean | true |  |
| closeIcon | custom close icon | VNode \\| slot | - |  |
| confirmLoading | Whether to apply loading visual effect for OK button or not | boolean | false |  |
| destroyOnClose | Whether to unmount child components on onClose | boolean | false |  |
| dialogClass | className of floating layer. | string | - |  |
| dialogStyle | Style of floating layer, typically used at least for adjusting the position. | object | - |  |
| footer | Footer content, set as \`:footer=&quot;null&quot;\` when you don&#39;t need default buttons | string\\|slot | OK and Cancel buttons |  |
| forceRender | Force render Modal | boolean | false |  |
| getContainer | Return the mount node for Modal | (instance): HTMLElement | () =&gt; document.body |  |
| mask | Whether show mask or not. | boolean | true |  |
| maskClosable | Whether to close the modal dialog when the mask (area outside the modal) is clicked | boolean | true |  |
| maskStyle | Style for modal&#39;s mask element. | object | {} |  |
| okButtonProps | The ok button props | [ButtonProps](/components/button/#API) | - |  |
| okText | Text of the OK button | string\\|slot | \`OK\` |  |
| okType | Button \`type\` of the OK button | string | \`primary\` |  |
| title | The modal dialog&#39;s title | string\\|slot | - |  |
| visible | Whether the modal dialog is visible or not | boolean | false |  |
| width | Width of the modal dialog | string\\|number | 520 |  |
| wrapClassName | The class name of the container of the modal dialog | string | - |  |
| zIndex | The \`z-index\` of the Modal | number | 1000 |  |

### events

| Events Name | Description | Arguments |
| --- | --- | --- |
| cancel | Specify a function that will be called when a user clicks mask, close button on top right or Cancel button | function(e) |
| ok | Specify a function that will be called when a user clicks the OK button | function(e) |

#### Note

&gt; The state of Modal will be preserved at it&#39;s component lifecycle by default, if you wish to open it with a brand new state everytime, set \`destroyOnClose\` on it.

### Modal.method()

There are five ways to display the information based on the content&#39;s nature:

- \`Modal.info\`
- \`Modal.success\`
- \`Modal.error\`
- \`Modal.warning\`
- \`Modal.confirm\`

The items listed above are all functions, expecting a settings object as parameter. The properties of the object are follows:

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| appContext | The context of the pop-up window is generally used to obtain content such as global registered components, vuex, etc. | - | - |  |
| autoFocusButton | Specify which button to autofocus | \`null\` \\| \`ok\` \\| \`cancel\` | \`ok\` |  |
| cancelButtonProps | The cancel button props | [ButtonProps](/components/button) | - |  |
| cancelText | Text of the Cancel button | string | \`Cancel\` |  |
| centered | Centered Modal | boolean | \`false\` |  |
| class | class of container | string | - |  |
| closable | Whether a close (x) button is visible on top right of the modal dialog or not | boolean | \`false\` |  |
| content | Content | string\\|VNode \\|function(h) | - |  |
| icon | custom icon (\`Added in 1.14.0\`) | VNode \\|()=&gt;VNode | - |  |
| keyboard | Whether support press esc to close | boolean | true |  |
| mask | Whether show mask or not. | boolean | true |  |
| maskClosable | Whether to close the modal dialog when the mask (area outside the modal) is clicked | boolean | \`false\` |  |
| okButtonProps | The ok button props | [ButtonProps](/components/button) | - |  |
| okText | Text of the OK button | string | \`OK\` |  |
| okType | Button \`type\` of the OK button | string | \`primary\` |  |
| title | Title | string\\|VNode \\|function(h) | - |  |
| width | Width of the modal dialog | string\\|number | 416 |  |
| wrapClassName | The class name of the container of the modal dialog | string | - | 3.2.3 |
| zIndex | The \`z-index\` of the Modal | number | 1000 |  |
| onCancel | Specify a function that will be called when the user clicks the Cancel button. The parameter of this function is a function whose execution should include closing the dialog. You can also just return a promise and when the promise is resolved, the modal dialog will also be closed | function | - |  |
| onOk | Specify a function that will be called when the user clicks the OK button. The parameter of this function is a function whose execution should include closing the dialog. You can also just return a promise and when the promise is resolved, the modal dialog will also be closed | function | - |  |

All the \`Modal.method\`s will return a reference, and then we can update and close the modal dialog by the reference.

\`\`\`jsx
const modal = Modal.info();

modal.update({
  title: &#39;Updated title&#39;,
  content: &#39;Updated content&#39;,
});

modal.destroy();
\`\`\`

- \`Modal.destroyAll\`

\`Modal.destroyAll()\` could destroy all confirmation modal dialogs(Modal.info/Modal.success/Modal.error/Modal.warning/Modal.confirm). Usually, you can use it in router change event to destroy confirm modal dialog automatically without use modal reference to close( it&#39;s too complex to use for all modal dialogs)

\`\`\`jsx
const router = new VueRouter({ ... })

// router change
router.beforeEach((to, from, next) =&gt; {
  Modal.destroyAll();
})
\`\`\`

## FAQ

### Why can&#39;t the Modal method obtain global registered components, context, vuex, etc. and ConfigProvider \`locale/prefixCls\` configuration, and can&#39;t update data responsively?

Call the Modal method directly, and the component will dynamically create a new Vue entity through \`Vue.render\`. Its context is not the same as the context where the current code is located, so the context information cannot be obtained.

When you need context information (for example, using a globally registered component), you can pass the current component context through the \`appContext\` property. When you need to keep the property responsive, you can use the function to return:

\`\`\`tsx
import { getCurrentInstance } from &#39;vue&#39;;

const appContext = getCurrentInstance().appContext;
const title = ref(&#39;some message&#39;);
Modal.confirm({
  title: () =&gt; title.value, // the change of title will update the title in confirm synchronously
  appContext,
});
\`\`\`
`,html:`<p>Modal dialogs.</p>
<h2 id="When-To-Use">When To Use <a class="header-anchor" href="#When-To-Use">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>When requiring users to interact with the application, but without jumping to a new page and interrupting the user's workflow, you can use <code>Modal</code> to create a new floating layer over the current page to get user feedback or display information. Additionally, if you need show a simple confirmation dialog, you can use <code>antd.Modal.confirm()</code>, and so on.</p>
<h2 id="API">API <a class="header-anchor" href="#API">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
<th>Version</th>
</tr>
</thead>
<tbody>
<tr>
<td>afterClose</td>
<td>Specify a function that will be called when modal is closed completely.</td>
<td>function</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>bodyStyle</td>
<td>Body style for modal body element. Such as height, padding etc.</td>
<td>object</td>
<td>{}</td>
<td></td>
</tr>
<tr>
<td>cancelButtonProps</td>
<td>The cancel button props</td>
<td><a href="/components/button/#API">ButtonProps</a></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>cancelText</td>
<td>Text of the Cancel button</td>
<td>string|slot</td>
<td><code>Cancel</code></td>
<td></td>
</tr>
<tr>
<td>centered</td>
<td>Centered Modal</td>
<td>boolean</td>
<td><code>false</code></td>
<td></td>
</tr>
<tr>
<td>closable</td>
<td>Whether a close (x) button is visible on top right of the modal dialog or not</td>
<td>boolean</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>closeIcon</td>
<td>custom close icon</td>
<td>VNode | slot</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>confirmLoading</td>
<td>Whether to apply loading visual effect for OK button or not</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>destroyOnClose</td>
<td>Whether to unmount child components on onClose</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>dialogClass</td>
<td>className of floating layer.</td>
<td>string</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>dialogStyle</td>
<td>Style of floating layer, typically used at least for adjusting the position.</td>
<td>object</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>footer</td>
<td>Footer content, set as <code>:footer=&quot;null&quot;</code> when you don't need default buttons</td>
<td>string|slot</td>
<td>OK and Cancel buttons</td>
<td></td>
</tr>
<tr>
<td>forceRender</td>
<td>Force render Modal</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>getContainer</td>
<td>Return the mount node for Modal</td>
<td>(instance): HTMLElement</td>
<td>() =&gt; document.body</td>
<td></td>
</tr>
<tr>
<td>mask</td>
<td>Whether show mask or not.</td>
<td>boolean</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>maskClosable</td>
<td>Whether to close the modal dialog when the mask (area outside the modal) is clicked</td>
<td>boolean</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>maskStyle</td>
<td>Style for modal's mask element.</td>
<td>object</td>
<td>{}</td>
<td></td>
</tr>
<tr>
<td>okButtonProps</td>
<td>The ok button props</td>
<td><a href="/components/button/#API">ButtonProps</a></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>okText</td>
<td>Text of the OK button</td>
<td>string|slot</td>
<td><code>OK</code></td>
<td></td>
</tr>
<tr>
<td>okType</td>
<td>Button <code>type</code> of the OK button</td>
<td>string</td>
<td><code>primary</code></td>
<td></td>
</tr>
<tr>
<td>title</td>
<td>The modal dialog's title</td>
<td>string|slot</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>visible</td>
<td>Whether the modal dialog is visible or not</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>width</td>
<td>Width of the modal dialog</td>
<td>string|number</td>
<td>520</td>
<td></td>
</tr>
<tr>
<td>wrapClassName</td>
<td>The class name of the container of the modal dialog</td>
<td>string</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>zIndex</td>
<td>The <code>z-index</code> of the Modal</td>
<td>number</td>
<td>1000</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="events">events <a class="header-anchor" href="#events">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<table>
<thead>
<tr>
<th>Events Name</th>
<th>Description</th>
<th>Arguments</th>
</tr>
</thead>
<tbody>
<tr>
<td>cancel</td>
<td>Specify a function that will be called when a user clicks mask, close button on top right or Cancel button</td>
<td>function(e)</td>
</tr>
<tr>
<td>ok</td>
<td>Specify a function that will be called when a user clicks the OK button</td>
<td>function(e)</td>
</tr>
</tbody>
</table>
<h4 id="Note">Note <a class="header-anchor" href="#Note">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h4>
<blockquote>
<p>The state of Modal will be preserved at it's component lifecycle by default, if you wish to open it with a brand new state everytime, set <code>destroyOnClose</code> on it.</p>
</blockquote>
<h3 id="Modal-method">Modal.method() <a class="header-anchor" href="#Modal-method">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>There are five ways to display the information based on the content's nature:</p>
<ul>
<li><code>Modal.info</code></li>
<li><code>Modal.success</code></li>
<li><code>Modal.error</code></li>
<li><code>Modal.warning</code></li>
<li><code>Modal.confirm</code></li>
</ul>
<p>The items listed above are all functions, expecting a settings object as parameter. The properties of the object are follows:</p>
<table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
<th>Version</th>
</tr>
</thead>
<tbody>
<tr>
<td>appContext</td>
<td>The context of the pop-up window is generally used to obtain content such as global registered components, vuex, etc.</td>
<td>-</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>autoFocusButton</td>
<td>Specify which button to autofocus</td>
<td><code>null</code> | <code>ok</code> | <code>cancel</code></td>
<td><code>ok</code></td>
<td></td>
</tr>
<tr>
<td>cancelButtonProps</td>
<td>The cancel button props</td>
<td><a href="/components/button">ButtonProps</a></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>cancelText</td>
<td>Text of the Cancel button</td>
<td>string</td>
<td><code>Cancel</code></td>
<td></td>
</tr>
<tr>
<td>centered</td>
<td>Centered Modal</td>
<td>boolean</td>
<td><code>false</code></td>
<td></td>
</tr>
<tr>
<td>class</td>
<td>class of container</td>
<td>string</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>closable</td>
<td>Whether a close (x) button is visible on top right of the modal dialog or not</td>
<td>boolean</td>
<td><code>false</code></td>
<td></td>
</tr>
<tr>
<td>content</td>
<td>Content</td>
<td>string|VNode |function(h)</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>icon</td>
<td>custom icon (<code>Added in 1.14.0</code>)</td>
<td>VNode |()=&gt;VNode</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>keyboard</td>
<td>Whether support press esc to close</td>
<td>boolean</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>mask</td>
<td>Whether show mask or not.</td>
<td>boolean</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>maskClosable</td>
<td>Whether to close the modal dialog when the mask (area outside the modal) is clicked</td>
<td>boolean</td>
<td><code>false</code></td>
<td></td>
</tr>
<tr>
<td>okButtonProps</td>
<td>The ok button props</td>
<td><a href="/components/button">ButtonProps</a></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>okText</td>
<td>Text of the OK button</td>
<td>string</td>
<td><code>OK</code></td>
<td></td>
</tr>
<tr>
<td>okType</td>
<td>Button <code>type</code> of the OK button</td>
<td>string</td>
<td><code>primary</code></td>
<td></td>
</tr>
<tr>
<td>title</td>
<td>Title</td>
<td>string|VNode |function(h)</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>width</td>
<td>Width of the modal dialog</td>
<td>string|number</td>
<td>416</td>
<td></td>
</tr>
<tr>
<td>wrapClassName</td>
<td>The class name of the container of the modal dialog</td>
<td>string</td>
<td>-</td>
<td>3.2.3</td>
</tr>
<tr>
<td>zIndex</td>
<td>The <code>z-index</code> of the Modal</td>
<td>number</td>
<td>1000</td>
<td></td>
</tr>
<tr>
<td>onCancel</td>
<td>Specify a function that will be called when the user clicks the Cancel button. The parameter of this function is a function whose execution should include closing the dialog. You can also just return a promise and when the promise is resolved, the modal dialog will also be closed</td>
<td>function</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>onOk</td>
<td>Specify a function that will be called when the user clicks the OK button. The parameter of this function is a function whose execution should include closing the dialog. You can also just return a promise and when the promise is resolved, the modal dialog will also be closed</td>
<td>function</td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<p>All the <code>Modal.method</code>s will return a reference, and then we can update and close the modal dialog by the reference.</p>
<pre class="language-jsx" v-pre><code><span class="token keyword">const</span> modal <span class="token operator">=</span> Modal<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

modal<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Updated title'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">'Updated content'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

modal<span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<ul>
<li><code>Modal.destroyAll</code></li>
</ul>
<p><code>Modal.destroyAll()</code> could destroy all confirmation modal dialogs(<a href="http://Modal.info/Modal.success/Modal.error/Modal.warning/Modal.confirm" target="_blank" rel="noopener noreferrer">Modal.info/Modal.success/Modal.error/Modal.warning/Modal.confirm</a>). Usually, you can use it in router change event to destroy confirm modal dialog automatically without use modal reference to close( it's too complex to use for all modal dialogs)</p>
<pre class="language-jsx" v-pre><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// router change</span>
router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  Modal<span class="token punctuation">.</span><span class="token function">destroyAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre>
<h2 id="FAQ">FAQ <a class="header-anchor" href="#FAQ">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<h3 id="Why-can-t-the-Modal-method-obtain-global-registered-components-context-vuex-etc-and-ConfigProvider-locale-prefixCls-configuration-and-can-t-update-data-responsively">Why can't the Modal method obtain global registered components, context, vuex, etc. and ConfigProvider <code>locale/prefixCls</code> configuration, and can't update data responsively? <a class="header-anchor" href="#Why-can-t-the-Modal-method-obtain-global-registered-components-context-vuex-etc-and-ConfigProvider-locale-prefixCls-configuration-and-can-t-update-data-responsively">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>Call the Modal method directly, and the component will dynamically create a new Vue entity through <code>Vue.render</code>. Its context is not the same as the context where the current code is located, so the context information cannot be obtained.</p>
<p>When you need context information (for example, using a globally registered component), you can pass the current component context through the <code>appContext</code> property. When you need to keep the property responsive, you can use the function to return:</p>
<pre class="language-tsx" v-pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getCurrentInstance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> appContext <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>appContext<span class="token punctuation">;</span>
<span class="token keyword">const</span> title <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'some message'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Modal<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">title</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> title<span class="token punctuation">.</span>value<span class="token punctuation">,</span> <span class="token comment">// the change of title will update the title in confirm synchronously</span>
  appContext<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
`,lastUpdated:1669791392032}},Bs={class:"markdown"},Ys=U(`<p>Modal dialogs.</p><h2 id="When-To-Use">When To Use <a class="header-anchor" href="#When-To-Use"><span aria-hidden="true" class="anchor">#</span></a></h2><p>When requiring users to interact with the application, but without jumping to a new page and interrupting the user&#39;s workflow, you can use <code>Modal</code> to create a new floating layer over the current page to get user feedback or display information. Additionally, if you need show a simple confirmation dialog, you can use <code>antd.Modal.confirm()</code>, and so on.</p><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Version</th></tr></thead><tbody><tr><td>afterClose</td><td>Specify a function that will be called when modal is closed completely.</td><td>function</td><td>-</td><td></td></tr><tr><td>bodyStyle</td><td>Body style for modal body element. Such as height, padding etc.</td><td>object</td><td>{}</td><td></td></tr><tr><td>cancelButtonProps</td><td>The cancel button props</td><td><a href="/components/button/#API">ButtonProps</a></td><td>-</td><td></td></tr><tr><td>cancelText</td><td>Text of the Cancel button</td><td>string|slot</td><td><code>Cancel</code></td><td></td></tr><tr><td>centered</td><td>Centered Modal</td><td>boolean</td><td><code>false</code></td><td></td></tr><tr><td>closable</td><td>Whether a close (x) button is visible on top right of the modal dialog or not</td><td>boolean</td><td>true</td><td></td></tr><tr><td>closeIcon</td><td>custom close icon</td><td>VNode | slot</td><td>-</td><td></td></tr><tr><td>confirmLoading</td><td>Whether to apply loading visual effect for OK button or not</td><td>boolean</td><td>false</td><td></td></tr><tr><td>destroyOnClose</td><td>Whether to unmount child components on onClose</td><td>boolean</td><td>false</td><td></td></tr><tr><td>dialogClass</td><td>className of floating layer.</td><td>string</td><td>-</td><td></td></tr><tr><td>dialogStyle</td><td>Style of floating layer, typically used at least for adjusting the position.</td><td>object</td><td>-</td><td></td></tr><tr><td>footer</td><td>Footer content, set as <code>:footer=&quot;null&quot;</code> when you don&#39;t need default buttons</td><td>string|slot</td><td>OK and Cancel buttons</td><td></td></tr><tr><td>forceRender</td><td>Force render Modal</td><td>boolean</td><td>false</td><td></td></tr><tr><td>getContainer</td><td>Return the mount node for Modal</td><td>(instance): HTMLElement</td><td>() =&gt; document.body</td><td></td></tr><tr><td>mask</td><td>Whether show mask or not.</td><td>boolean</td><td>true</td><td></td></tr><tr><td>maskClosable</td><td>Whether to close the modal dialog when the mask (area outside the modal) is clicked</td><td>boolean</td><td>true</td><td></td></tr><tr><td>maskStyle</td><td>Style for modal&#39;s mask element.</td><td>object</td><td>{}</td><td></td></tr><tr><td>okButtonProps</td><td>The ok button props</td><td><a href="/components/button/#API">ButtonProps</a></td><td>-</td><td></td></tr><tr><td>okText</td><td>Text of the OK button</td><td>string|slot</td><td><code>OK</code></td><td></td></tr><tr><td>okType</td><td>Button <code>type</code> of the OK button</td><td>string</td><td><code>primary</code></td><td></td></tr><tr><td>title</td><td>The modal dialog&#39;s title</td><td>string|slot</td><td>-</td><td></td></tr><tr><td>visible</td><td>Whether the modal dialog is visible or not</td><td>boolean</td><td>false</td><td></td></tr><tr><td>width</td><td>Width of the modal dialog</td><td>string|number</td><td>520</td><td></td></tr><tr><td>wrapClassName</td><td>The class name of the container of the modal dialog</td><td>string</td><td>-</td><td></td></tr><tr><td>zIndex</td><td>The <code>z-index</code> of the Modal</td><td>number</td><td>1000</td><td></td></tr></tbody></table><h3 id="events">events <a class="header-anchor" href="#events"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>Events Name</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>cancel</td><td>Specify a function that will be called when a user clicks mask, close button on top right or Cancel button</td><td>function(e)</td></tr><tr><td>ok</td><td>Specify a function that will be called when a user clicks the OK button</td><td>function(e)</td></tr></tbody></table><h4 id="Note">Note <a class="header-anchor" href="#Note"><span aria-hidden="true" class="anchor">#</span></a></h4><blockquote><p>The state of Modal will be preserved at it&#39;s component lifecycle by default, if you wish to open it with a brand new state everytime, set <code>destroyOnClose</code> on it.</p></blockquote><h3 id="Modal-method">Modal.method() <a class="header-anchor" href="#Modal-method"><span aria-hidden="true" class="anchor">#</span></a></h3><p>There are five ways to display the information based on the content&#39;s nature:</p><ul><li><code>Modal.info</code></li><li><code>Modal.success</code></li><li><code>Modal.error</code></li><li><code>Modal.warning</code></li><li><code>Modal.confirm</code></li></ul><p>The items listed above are all functions, expecting a settings object as parameter. The properties of the object are follows:</p><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Version</th></tr></thead><tbody><tr><td>appContext</td><td>The context of the pop-up window is generally used to obtain content such as global registered components, vuex, etc.</td><td>-</td><td>-</td><td></td></tr><tr><td>autoFocusButton</td><td>Specify which button to autofocus</td><td><code>null</code> | <code>ok</code> | <code>cancel</code></td><td><code>ok</code></td><td></td></tr><tr><td>cancelButtonProps</td><td>The cancel button props</td><td><a href="/components/button">ButtonProps</a></td><td>-</td><td></td></tr><tr><td>cancelText</td><td>Text of the Cancel button</td><td>string</td><td><code>Cancel</code></td><td></td></tr><tr><td>centered</td><td>Centered Modal</td><td>boolean</td><td><code>false</code></td><td></td></tr><tr><td>class</td><td>class of container</td><td>string</td><td>-</td><td></td></tr><tr><td>closable</td><td>Whether a close (x) button is visible on top right of the modal dialog or not</td><td>boolean</td><td><code>false</code></td><td></td></tr><tr><td>content</td><td>Content</td><td>string|VNode |function(h)</td><td>-</td><td></td></tr><tr><td>icon</td><td>custom icon (<code>Added in 1.14.0</code>)</td><td>VNode |()=&gt;VNode</td><td>-</td><td></td></tr><tr><td>keyboard</td><td>Whether support press esc to close</td><td>boolean</td><td>true</td><td></td></tr><tr><td>mask</td><td>Whether show mask or not.</td><td>boolean</td><td>true</td><td></td></tr><tr><td>maskClosable</td><td>Whether to close the modal dialog when the mask (area outside the modal) is clicked</td><td>boolean</td><td><code>false</code></td><td></td></tr><tr><td>okButtonProps</td><td>The ok button props</td><td><a href="/components/button">ButtonProps</a></td><td>-</td><td></td></tr><tr><td>okText</td><td>Text of the OK button</td><td>string</td><td><code>OK</code></td><td></td></tr><tr><td>okType</td><td>Button <code>type</code> of the OK button</td><td>string</td><td><code>primary</code></td><td></td></tr><tr><td>title</td><td>Title</td><td>string|VNode |function(h)</td><td>-</td><td></td></tr><tr><td>width</td><td>Width of the modal dialog</td><td>string|number</td><td>416</td><td></td></tr><tr><td>wrapClassName</td><td>The class name of the container of the modal dialog</td><td>string</td><td>-</td><td>3.2.3</td></tr><tr><td>zIndex</td><td>The <code>z-index</code> of the Modal</td><td>number</td><td>1000</td><td></td></tr><tr><td>onCancel</td><td>Specify a function that will be called when the user clicks the Cancel button. The parameter of this function is a function whose execution should include closing the dialog. You can also just return a promise and when the promise is resolved, the modal dialog will also be closed</td><td>function</td><td>-</td><td></td></tr><tr><td>onOk</td><td>Specify a function that will be called when the user clicks the OK button. The parameter of this function is a function whose execution should include closing the dialog. You can also just return a promise and when the promise is resolved, the modal dialog will also be closed</td><td>function</td><td>-</td><td></td></tr></tbody></table><p>All the <code>Modal.method</code>s will return a reference, and then we can update and close the modal dialog by the reference.</p><pre class="language-jsx"><code><span class="token keyword">const</span> modal <span class="token operator">=</span> Modal<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

modal<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Updated title&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&#39;Updated content&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

modal<span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><ul><li><code>Modal.destroyAll</code></li></ul><p><code>Modal.destroyAll()</code> could destroy all confirmation modal dialogs(<a href="http://Modal.info/Modal.success/Modal.error/Modal.warning/Modal.confirm" target="_blank" rel="noopener noreferrer">Modal.info/Modal.success/Modal.error/Modal.warning/Modal.confirm</a>). Usually, you can use it in router change event to destroy confirm modal dialog automatically without use modal reference to close( it&#39;s too complex to use for all modal dialogs)</p><pre class="language-jsx"><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// router change</span>
router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  Modal<span class="token punctuation">.</span><span class="token function">destroyAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><h2 id="FAQ">FAQ <a class="header-anchor" href="#FAQ"><span aria-hidden="true" class="anchor">#</span></a></h2><h3 id="Why-can-t-the-Modal-method-obtain-global-registered-components-context-vuex-etc-and-ConfigProvider-locale-prefixCls-configuration-and-can-t-update-data-responsively">Why can&#39;t the Modal method obtain global registered components, context, vuex, etc. and ConfigProvider <code>locale/prefixCls</code> configuration, and can&#39;t update data responsively? <a class="header-anchor" href="#Why-can-t-the-Modal-method-obtain-global-registered-components-context-vuex-etc-and-ConfigProvider-locale-prefixCls-configuration-and-can-t-update-data-responsively"><span aria-hidden="true" class="anchor">#</span></a></h3><p>Call the Modal method directly, and the component will dynamically create a new Vue entity through <code>Vue.render</code>. Its context is not the same as the context where the current code is located, so the context information cannot be obtained.</p><p>When you need context information (for example, using a globally registered component), you can pass the current component context through the <code>appContext</code> property. When you need to keep the property responsive, you can use the function to return:</p><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getCurrentInstance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> appContext <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>appContext<span class="token punctuation">;</span>
<span class="token keyword">const</span> title <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;some message&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Modal<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">title</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> title<span class="token punctuation">.</span>value<span class="token punctuation">,</span> <span class="token comment">// the change of title will update the title in confirm synchronously</span>
  appContext<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>`,24),Hs=[Ys];function Ns(s,a,e,u,i,r){return I(),j("article",Bs,Hs)}const xs=b(Gs,[["render",Ns]]),Ss=h({CN:Ws,US:xs,components:{Basic:gn,Async:An,CustomFooter:Yn,Confirm:Vn,Info:Tn,Locale:Ln,Manual:qn,Position:rt,ConfirmRouter:It,ConfirmPromise:yt,Width:Ht,ButtonProps:Ut,Fullscreen:Xt,modalRenderVue:hs},setup(){return{}}});function Vs(s,a,e,u,i,r){const l=p("basic"),k=p("async"),d=p("custom-footer"),g=p("confirm"),w=p("info"),Z=p("locale"),C=p("manual"),f=p("position"),v=p("confirm-router"),G=p("confirm-promise"),B=p("width"),x=p("button-props"),O=p("fullscreen"),_=p("modalRenderVue"),E=p("demo-sort");return I(),A(E,null,{default:o(()=>[c(l),c(k),c(d),c(g),c(w),c(Z),c(C),c(f),c(v),c(G),c(B),c(x),c(O),c(_)]),_:1})}const Ps=b(Ss,[["render",Vs]]);export{Ps as default};
