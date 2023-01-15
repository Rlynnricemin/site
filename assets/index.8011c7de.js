import{d as C,T as u,_ as k,l as h,w as t,j as o,k as d,f as c,e as s,b as n,r as N,a as f,s as y}from"./index.07eaef2d.js";const G=C({setup(){return{dark:()=>{u.warning({content:"This is a normal message",theme:"dark"})},info:()=>{u.info("This is a normal message")},closeinfo:()=>{u.info("This is a normal message",0,()=>console.log("\u5173\u95ED\u4E86"))}}}}),W=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("info"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Display normal message"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("closeinfo"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-left"),n("span",{class:"token punctuation"},":"),s(" 20px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),s(`
    Display closed message
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("dark"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-left"),n("span",{class:"token punctuation"},":"),s(" 20px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),s("Display dark theme message"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" message "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'ant-design-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"info"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"info"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'This is a normal message'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"dark"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"warning"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'This is a normal message'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'dark'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"closeinfo"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"info"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'This is a normal message'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u5173\u95ED\u4E86'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      dark`),n("span",{class:"token punctuation"},","),s(`
      info`),n("span",{class:"token punctuation"},","),s(`
      closeinfo`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1),V=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("info"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Display normal message"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("closeinfo"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-left"),n("span",{class:"token punctuation"},":"),s(" 20px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),s(`
    Display closed message
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("dark"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-left"),n("span",{class:"token punctuation"},":"),s(" 20px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),s("Display dark theme message"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" message "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'ant-design-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"info"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"info"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'This is a normal message'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"dark"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"warning"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'This is a normal message'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'dark'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"closeinfo"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"info"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'This is a normal message'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u5173\u95ED\u4E86'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      dark`),n("span",{class:"token punctuation"},","),s(`
      info`),n("span",{class:"token punctuation"},","),s(`
      closeinfo`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1);function Y(a,p,i,r,g,m){const e=o("a-button"),l=o("demo-box");return d(),h(l,{jsfiddle:{us:"Normal message for information.",cn:"\u4FE1\u606F\u63D0\u9192\u53CD\u9988\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u4FE1\u606F\u63D0\u9192\u53CD\u9988\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Normal message for information.</p>
`,order:0,title:{"zh-CN":"\u666E\u901A\u63D0\u793A","en-US":"Normal prompt"},relativePath:"components/message/demo/info.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWJ1dHRvbiB0eXBlPSJwcmltYXJ5IiBAY2xpY2s9ImluZm8iPkRpc3BsYXkgbm9ybWFsIG1lc3NhZ2U8L2EtYnV0dG9uPgoKICA8YS1idXR0b24gdHlwZT0icHJpbWFyeSIgQGNsaWNrPSJjbG9zZWluZm8iIHN0eWxlPSJtYXJnaW4tbGVmdDogMjBweCI+CiAgICBEaXNwbGF5IGNsb3NlZCBtZXNzYWdlCiAgPC9hLWJ1dHRvbj4KCiAgPGEtYnV0dG9uIHR5cGU9InByaW1hcnkiIEBjbGljaz0iZGFyayIgc3R5bGU9Im1hcmdpbi1sZWZ0OiAyMHB4Ij5EaXNwbGF5IGRhcmsgdGhlbWUgbWVzc2FnZTwvYS1idXR0b24+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSAnYW50LWRlc2lnbi12dWUnOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgaW5mbyA9ICgpID0+IHsKICAgICAgbWVzc2FnZS5pbmZvKCdUaGlzIGlzIGEgbm9ybWFsIG1lc3NhZ2UnKTsKICAgIH07CgogICAgY29uc3QgZGFyayA9ICgpID0+IHsKICAgICAgbWVzc2FnZS53YXJuaW5nKHsKICAgICAgICBjb250ZW50OiAnVGhpcyBpcyBhIG5vcm1hbCBtZXNzYWdlJywKICAgICAgICB0aGVtZTogJ2RhcmsnLAogICAgICB9KTsKICAgIH07CgogICAgY29uc3QgY2xvc2VpbmZvID0gKCkgPT4gewogICAgICBtZXNzYWdlLmluZm8oJ1RoaXMgaXMgYSBub3JtYWwgbWVzc2FnZScsIDAsICgpID0+IGNvbnNvbGUubG9nKCflhbPpl63kuoYnKSk7CiAgICB9OwogICAgcmV0dXJuIHsKICAgICAgZGFyaywKICAgICAgaW5mbywKICAgICAgY2xvc2VpbmZvLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWJ1dHRvbiB0eXBlPSJwcmltYXJ5IiBAY2xpY2s9ImluZm8iPkRpc3BsYXkgbm9ybWFsIG1lc3NhZ2U8L2EtYnV0dG9uPgoKICA8YS1idXR0b24gdHlwZT0icHJpbWFyeSIgQGNsaWNrPSJjbG9zZWluZm8iIHN0eWxlPSJtYXJnaW4tbGVmdDogMjBweCI+CiAgICBEaXNwbGF5IGNsb3NlZCBtZXNzYWdlCiAgPC9hLWJ1dHRvbj4KCiAgPGEtYnV0dG9uIHR5cGU9InByaW1hcnkiIEBjbGljaz0iZGFyayIgc3R5bGU9Im1hcmdpbi1sZWZ0OiAyMHB4Ij5EaXNwbGF5IGRhcmsgdGhlbWUgbWVzc2FnZTwvYS1idXR0b24+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tICdhbnQtZGVzaWduLXZ1ZSc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBpbmZvID0gKCkgPT4gewogICAgICBtZXNzYWdlLmluZm8oJ1RoaXMgaXMgYSBub3JtYWwgbWVzc2FnZScpOwogICAgfTsKICAgIGNvbnN0IGRhcmsgPSAoKSA9PiB7CiAgICAgIG1lc3NhZ2Uud2FybmluZyh7CiAgICAgICAgY29udGVudDogJ1RoaXMgaXMgYSBub3JtYWwgbWVzc2FnZScsCiAgICAgICAgdGhlbWU6ICdkYXJrJywKICAgICAgfSk7CiAgICB9OwogICAgY29uc3QgY2xvc2VpbmZvID0gKCkgPT4gewogICAgICBtZXNzYWdlLmluZm8oJ1RoaXMgaXMgYSBub3JtYWwgbWVzc2FnZScsIDAsICgpID0+IGNvbnNvbGUubG9nKCflhbPpl63kuoYnKSk7CiAgICB9OwogICAgcmV0dXJuIHsKICAgICAgZGFyaywKICAgICAgaW5mbywKICAgICAgY2xvc2VpbmZvLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+",isdemo:!1}},{default:t(()=>[c(e,{type:"primary",onClick:a.info},{default:t(()=>[s("Display normal message")]),_:1},8,["onClick"]),c(e,{type:"primary",onClick:a.closeinfo,style:{"margin-left":"20px"}},{default:t(()=>[s(" Display closed message ")]),_:1},8,["onClick"]),c(e,{type:"primary",onClick:a.dark,style:{"margin-left":"20px"}},{default:t(()=>[s("Display dark theme message")]),_:1},8,["onClick"])]),htmlCode:t(()=>[W]),jsVersionHtml:t(()=>[V]),_:1},8,["jsfiddle"])}const X=k(G,[["render",Y]]),z=C({setup(){return{success:()=>{u.success("This is a success message")},error:()=>{u.error("This is an error message")},warning:()=>{u.warning("This is a warning message")}}}}),S=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-space")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("success"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Success"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("error"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Error"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("warning"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Warning"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-space")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" message "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'ant-design-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"success"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'This is a success message'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"error"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'This is an error message'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"warning"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"warning"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'This is a warning message'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      success`),n("span",{class:"token punctuation"},","),s(`
      error`),n("span",{class:"token punctuation"},","),s(`
      warning`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1),H=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-space")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("success"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Success"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("error"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Error"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("warning"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Warning"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-space")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" message "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'ant-design-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"success"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'This is a success message'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"error"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'This is an error message'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"warning"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"warning"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'This is a warning message'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      success`),n("span",{class:"token punctuation"},","),s(`
      error`),n("span",{class:"token punctuation"},","),s(`
      warning`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1);function K(a,p,i,r,g,m){const e=o("a-button"),l=o("a-space"),b=o("demo-box");return d(),h(b,{jsfiddle:{us:"Messages of success, error and warning types.",cn:"\u5305\u62EC\u6210\u529F\u3001\u5931\u8D25\u3001\u8B66\u544A\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u5305\u62EC\u6210\u529F\u3001\u5931\u8D25\u3001\u8B66\u544A\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Messages of success, error and warning types.</p>
`,order:3,title:{"zh-CN":"\u5176\u4ED6\u63D0\u793A\u7C7B\u578B","en-US":"Other types of message"},relativePath:"components/message/demo/other.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlPgogICAgPGEtYnV0dG9uIEBjbGljaz0ic3VjY2VzcyI+U3VjY2VzczwvYS1idXR0b24+CiAgICA8YS1idXR0b24gQGNsaWNrPSJlcnJvciI+RXJyb3I8L2EtYnV0dG9uPgogICAgPGEtYnV0dG9uIEBjbGljaz0id2FybmluZyI+V2FybmluZzwvYS1idXR0b24+CiAgPC9hLXNwYWNlPgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gJ2FudC1kZXNpZ24tdnVlJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IHN1Y2Nlc3MgPSAoKSA9PiB7CiAgICAgIG1lc3NhZ2Uuc3VjY2VzcygnVGhpcyBpcyBhIHN1Y2Nlc3MgbWVzc2FnZScpOwogICAgfTsKICAgIGNvbnN0IGVycm9yID0gKCkgPT4gewogICAgICBtZXNzYWdlLmVycm9yKCdUaGlzIGlzIGFuIGVycm9yIG1lc3NhZ2UnKTsKICAgIH07CiAgICBjb25zdCB3YXJuaW5nID0gKCkgPT4gewogICAgICBtZXNzYWdlLndhcm5pbmcoJ1RoaXMgaXMgYSB3YXJuaW5nIG1lc3NhZ2UnKTsKICAgIH07CiAgICByZXR1cm4gewogICAgICBzdWNjZXNzLAogICAgICBlcnJvciwKICAgICAgd2FybmluZywKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlPgogICAgPGEtYnV0dG9uIEBjbGljaz0ic3VjY2VzcyI+U3VjY2VzczwvYS1idXR0b24+CiAgICA8YS1idXR0b24gQGNsaWNrPSJlcnJvciI+RXJyb3I8L2EtYnV0dG9uPgogICAgPGEtYnV0dG9uIEBjbGljaz0id2FybmluZyI+V2FybmluZzwvYS1idXR0b24+CiAgPC9hLXNwYWNlPgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSAnYW50LWRlc2lnbi12dWUnOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3Qgc3VjY2VzcyA9ICgpID0+IHsKICAgICAgbWVzc2FnZS5zdWNjZXNzKCdUaGlzIGlzIGEgc3VjY2VzcyBtZXNzYWdlJyk7CiAgICB9OwogICAgY29uc3QgZXJyb3IgPSAoKSA9PiB7CiAgICAgIG1lc3NhZ2UuZXJyb3IoJ1RoaXMgaXMgYW4gZXJyb3IgbWVzc2FnZScpOwogICAgfTsKICAgIGNvbnN0IHdhcm5pbmcgPSAoKSA9PiB7CiAgICAgIG1lc3NhZ2Uud2FybmluZygnVGhpcyBpcyBhIHdhcm5pbmcgbWVzc2FnZScpOwogICAgfTsKICAgIHJldHVybiB7CiAgICAgIHN1Y2Nlc3MsCiAgICAgIGVycm9yLAogICAgICB3YXJuaW5nLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+",isdemo:!1}},{default:t(()=>[c(l,null,{default:t(()=>[c(e,{onClick:a.success},{default:t(()=>[s("Success")]),_:1},8,["onClick"]),c(e,{onClick:a.error},{default:t(()=>[s("Error")]),_:1},8,["onClick"]),c(e,{onClick:a.warning},{default:t(()=>[s("Warning")]),_:1},8,["onClick"])]),_:1})]),htmlCode:t(()=>[S]),jsVersionHtml:t(()=>[H]),_:1},8,["jsfiddle"])}const P=k(z,[["render",K]]),_=C({setup(){return{success:()=>{u.success("This is a prompt message for success, and it will disappear in 10 seconds",10)}}}}),R=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("success"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Customized display duration"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" message "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'ant-design-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"success"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),s(`
        `),n("span",{class:"token string"},"'This is a prompt message for success, and it will disappear in 10 seconds'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      success`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1),x=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("success"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Customized display duration"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" message "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'ant-design-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"success"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'This is a prompt message for success, and it will disappear in 10 seconds'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      success`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1);function j(a,p,i,r,g,m){const e=o("a-button"),l=o("demo-box");return d(),h(l,{jsfiddle:{us:"Customize message display duration from default `3s` to `10s`.",cn:"\u81EA\u5B9A\u4E49\u65F6\u957F `10s`\uFF0C\u9ED8\u8BA4\u65F6\u957F\u4E3A `3s`\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u81EA\u5B9A\u4E49\u65F6\u957F <code>10s</code>\uFF0C\u9ED8\u8BA4\u65F6\u957F\u4E3A <code>3s</code>\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Customize message display duration from default <code>3s</code> to <code>10s</code>.</p>
`,order:1,title:{"zh-CN":"\u4FEE\u6539\u5EF6\u65F6","en-US":"Customize duration"},relativePath:"components/message/demo/duration.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWJ1dHRvbiBAY2xpY2s9InN1Y2Nlc3MiPkN1c3RvbWl6ZWQgZGlzcGxheSBkdXJhdGlvbjwvYS1idXR0b24+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSAnYW50LWRlc2lnbi12dWUnOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3Qgc3VjY2VzcyA9ICgpID0+IHsKICAgICAgbWVzc2FnZS5zdWNjZXNzKAogICAgICAgICdUaGlzIGlzIGEgcHJvbXB0IG1lc3NhZ2UgZm9yIHN1Y2Nlc3MsIGFuZCBpdCB3aWxsIGRpc2FwcGVhciBpbiAxMCBzZWNvbmRzJywKICAgICAgICAxMCwKICAgICAgKTsKICAgIH07CiAgICByZXR1cm4gewogICAgICBzdWNjZXNzLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWJ1dHRvbiBAY2xpY2s9InN1Y2Nlc3MiPkN1c3RvbWl6ZWQgZGlzcGxheSBkdXJhdGlvbjwvYS1idXR0b24+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tICdhbnQtZGVzaWduLXZ1ZSc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBzdWNjZXNzID0gKCkgPT4gewogICAgICBtZXNzYWdlLnN1Y2Nlc3MoJ1RoaXMgaXMgYSBwcm9tcHQgbWVzc2FnZSBmb3Igc3VjY2VzcywgYW5kIGl0IHdpbGwgZGlzYXBwZWFyIGluIDEwIHNlY29uZHMnLCAxMCk7CiAgICB9OwogICAgcmV0dXJuIHsKICAgICAgc3VjY2VzcywKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0Pg==",isdemo:!1}},{default:t(()=>[c(e,{onClick:a.success},{default:t(()=>[s("Customized display duration")]),_:1},8,["onClick"])]),htmlCode:t(()=>[R]),jsVersionHtml:t(()=>[x]),_:1},8,["jsfiddle"])}const T=k(_,[["render",j]]),F=C({setup(){return{success:()=>{const p=u.loading("Action in progress..",0);setTimeout(p,2500)}}}}),J=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("success"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Display a loading indicator"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" message "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'ant-design-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"success"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" hide "),n("span",{class:"token operator"},"="),s(" message"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"loading"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Action in progress..'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),s("hide"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2500"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      success`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1),D=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("success"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Display a loading indicator"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" message "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'ant-design-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"success"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" hide "),n("span",{class:"token operator"},"="),s(" message"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"loading"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Action in progress..'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),s("hide"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2500"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      success`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1);function L(a,p,i,r,g,m){const e=o("a-button"),l=o("demo-box");return d(),h(l,{jsfiddle:{us:"Display a global loading indicator, which is dismissed by itself asynchronously.",cn:"\u8FDB\u884C\u5168\u5C40 loading\uFF0C\u5F02\u6B65\u81EA\u884C\u79FB\u9664\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u8FDB\u884C\u5168\u5C40 loading\uFF0C\u5F02\u6B65\u81EA\u884C\u79FB\u9664\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Display a global loading indicator, which is dismissed by itself asynchronously.</p>
`,order:2,title:{"zh-CN":"\u52A0\u8F7D\u4E2D","en-US":"Message with loading indicator"},relativePath:"components/message/demo/loading.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWJ1dHRvbiBAY2xpY2s9InN1Y2Nlc3MiPkRpc3BsYXkgYSBsb2FkaW5nIGluZGljYXRvcjwvYS1idXR0b24+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSAnYW50LWRlc2lnbi12dWUnOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3Qgc3VjY2VzcyA9ICgpID0+IHsKICAgICAgY29uc3QgaGlkZSA9IG1lc3NhZ2UubG9hZGluZygnQWN0aW9uIGluIHByb2dyZXNzLi4nLCAwKTsKICAgICAgc2V0VGltZW91dChoaWRlLCAyNTAwKTsKICAgIH07CiAgICByZXR1cm4gewogICAgICBzdWNjZXNzLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWJ1dHRvbiBAY2xpY2s9InN1Y2Nlc3MiPkRpc3BsYXkgYSBsb2FkaW5nIGluZGljYXRvcjwvYS1idXR0b24+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tICdhbnQtZGVzaWduLXZ1ZSc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBzdWNjZXNzID0gKCkgPT4gewogICAgICBjb25zdCBoaWRlID0gbWVzc2FnZS5sb2FkaW5nKCdBY3Rpb24gaW4gcHJvZ3Jlc3MuLicsIDApOwogICAgICBzZXRUaW1lb3V0KGhpZGUsIDI1MDApOwogICAgfTsKICAgIHJldHVybiB7CiAgICAgIHN1Y2Nlc3MsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4=",isdemo:!1}},{default:t(()=>[c(e,{onClick:a.success},{default:t(()=>[s("Display a loading indicator")]),_:1},8,["onClick"])]),htmlCode:t(()=>[J]),jsVersionHtml:t(()=>[D]),_:1},8,["jsfiddle"])}const U=k(F,[["render",L]]),M=C({setup(){return{success:()=>{u.loading("Action in progress..",2.5).then(()=>u.success("Loading finished",2.5),()=>{}).then(()=>u.info("Loading finished is finished",2.5))}}}}),E=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("success"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Display a sequence of message"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" message "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'ant-design-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"success"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      message
        `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"loading"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Action in progress..'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2.5"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),s(`
          `),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" message"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Loading finished'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2.5"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token comment"},"// eslint-disable-next-line @typescript-eslint/no-empty-function"),s(`
          `),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" message"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"info"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Loading finished is finished'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2.5"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      success`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1),Q=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("success"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Display a sequence of message"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" message "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'ant-design-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"success"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"loading"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Action in progress..'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2.5"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" message"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Loading finished'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2.5"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token comment"},"// eslint-disable-next-line @typescript-eslint/no-empty-function"),s(`
      `),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" message"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"info"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Loading finished is finished'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2.5"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      success`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1);function $(a,p,i,r,g,m){const e=o("a-button"),l=o("demo-box");return d(),h(l,{jsfiddle:{us:"`message` provides promise interface for `onClose`. The above example will display a new message when old message is about to finish.",cn:"\u53EF\u4EE5\u901A\u8FC7 then \u63A5\u53E3\u5728\u5173\u95ED\u540E\u8FD0\u884C callback \u3002\u4EE5\u4E0A\u7528\u4F8B\u5C06\u5728\u6BCF\u4E2A message \u5C06\u8981\u7ED3\u675F\u65F6\u901A\u8FC7 then \u663E\u793A\u65B0\u7684 message \u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u53EF\u4EE5\u901A\u8FC7 then \u63A5\u53E3\u5728\u5173\u95ED\u540E\u8FD0\u884C callback \u3002\u4EE5\u4E0A\u7528\u4F8B\u5C06\u5728\u6BCF\u4E2A message \u5C06\u8981\u7ED3\u675F\u65F6\u901A\u8FC7 then \u663E\u793A\u65B0\u7684 message \u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p><code>message</code> provides promise interface for <code>onClose</code>. The above example will display a new message when old message is about to finish.</p>
`,order:4,title:{"zh-CN":"Promise \u63A5\u53E3","en-US":"Promise interface"},relativePath:"components/message/demo/thenable.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWJ1dHRvbiBAY2xpY2s9InN1Y2Nlc3MiPkRpc3BsYXkgYSBzZXF1ZW5jZSBvZiBtZXNzYWdlPC9hLWJ1dHRvbj4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tICdhbnQtZGVzaWduLXZ1ZSc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBzdWNjZXNzID0gKCkgPT4gewogICAgICBtZXNzYWdlCiAgICAgICAgLmxvYWRpbmcoJ0FjdGlvbiBpbiBwcm9ncmVzcy4uJywgMi41KQogICAgICAgIC50aGVuKAogICAgICAgICAgKCkgPT4gbWVzc2FnZS5zdWNjZXNzKCdMb2FkaW5nIGZpbmlzaGVkJywgMi41KSwKICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZW1wdHktZnVuY3Rpb24KICAgICAgICAgICgpID0+IHt9LAogICAgICAgICkKICAgICAgICAudGhlbigoKSA9PiBtZXNzYWdlLmluZm8oJ0xvYWRpbmcgZmluaXNoZWQgaXMgZmluaXNoZWQnLCAyLjUpKTsKICAgIH07CiAgICByZXR1cm4gewogICAgICBzdWNjZXNzLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWJ1dHRvbiBAY2xpY2s9InN1Y2Nlc3MiPkRpc3BsYXkgYSBzZXF1ZW5jZSBvZiBtZXNzYWdlPC9hLWJ1dHRvbj4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gJ2FudC1kZXNpZ24tdnVlJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IHN1Y2Nlc3MgPSAoKSA9PiB7CiAgICAgIG1lc3NhZ2UubG9hZGluZygnQWN0aW9uIGluIHByb2dyZXNzLi4nLCAyLjUpLnRoZW4oKCkgPT4gbWVzc2FnZS5zdWNjZXNzKCdMb2FkaW5nIGZpbmlzaGVkJywgMi41KSwKICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1lbXB0eS1mdW5jdGlvbgogICAgICAoKSA9PiB7fSkudGhlbigoKSA9PiBtZXNzYWdlLmluZm8oJ0xvYWRpbmcgZmluaXNoZWQgaXMgZmluaXNoZWQnLCAyLjUpKTsKICAgIH07CiAgICByZXR1cm4gewogICAgICBzdWNjZXNzLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+",isdemo:!1}},{default:t(()=>[c(e,{onClick:a.success},{default:t(()=>[s("Display a sequence of message")]),_:1},8,["onClick"])]),htmlCode:t(()=>[E]),jsVersionHtml:t(()=>[Q]),_:1},8,["jsfiddle"])}const O=k(M,[["render",$]]),I="updatable",q=C({setup(){const a=()=>{u.loading({content:"Loading...",key:I}),setTimeout(()=>{u.success({content:"Loaded!",key:I,duration:2})},1e3)},p=N("Loading...");return{openMessage:a,openMessage2:()=>{u.loading({content:()=>p.value}),setTimeout(()=>{p.value="Loaded!"},1e3)}}}}),nn=n("br",null,null,-1),sn=n("br",null,null,-1),tn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("openMessage"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Open the message box (update by key)"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("br")]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("br")]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("openMessage2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    Open the message box (update by reactive)
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" message "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'ant-design-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" key "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'updatable'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"openMessage"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"loading"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Loading...'"),n("span",{class:"token punctuation"},","),s(" key "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Loaded!'"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"duration"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" content "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Loading...'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"openMessage2"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// content must use function"),s(`
      message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"loading"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token function-variable function"},"content"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" content"),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        content`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'Loaded!'"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      openMessage`),n("span",{class:"token punctuation"},","),s(`
      openMessage2`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1),an=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("openMessage"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Open the message box (update by key)"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("br")]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("br")]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("openMessage2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    Open the message box (update by reactive)
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" message "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'ant-design-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" key "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'updatable'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"openMessage"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"loading"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Loading...'"),n("span",{class:"token punctuation"},","),s(`
        key`),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Loaded!'"),n("span",{class:"token punctuation"},","),s(`
          key`),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"duration"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" content "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Loading...'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"openMessage2"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// content must use function"),s(`
      message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"loading"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function-variable function"},"content"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" content"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        content`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'Loaded!'"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      openMessage`),n("span",{class:"token punctuation"},","),s(`
      openMessage2`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1);function on(a,p,i,r,g,m){const e=o("a-button"),l=o("demo-box");return d(),h(l,{jsfiddle:{us:"Update message content with unique `key`\uFF0Cor use reactive data.",cn:"\u53EF\u4EE5\u901A\u8FC7\u552F\u4E00\u7684 `key` \u6765\u66F4\u65B0\u5185\u5BB9\u3001\u6216\u8005\u54CD\u5E94\u5F0F\u6570\u636E\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u53EF\u4EE5\u901A\u8FC7\u552F\u4E00\u7684 <code>key</code> \u6765\u66F4\u65B0\u5185\u5BB9\u3001\u6216\u8005\u54CD\u5E94\u5F0F\u6570\u636E\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Update message content with unique <code>key</code>\uFF0Cor use reactive data.</p>
`,order:5,title:{"zh-CN":"\u66F4\u65B0\u6D88\u606F\u5185\u5BB9","en-US":"Update Message Content"},relativePath:"components/message/demo/update.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWJ1dHRvbiB0eXBlPSJwcmltYXJ5IiBAY2xpY2s9Im9wZW5NZXNzYWdlIj5PcGVuIHRoZSBtZXNzYWdlIGJveCAodXBkYXRlIGJ5IGtleSk8L2EtYnV0dG9uPgogIDxiciAvPgogIDxiciAvPgogIDxhLWJ1dHRvbiB0eXBlPSJwcmltYXJ5IiBAY2xpY2s9Im9wZW5NZXNzYWdlMiI+CiAgICBPcGVuIHRoZSBtZXNzYWdlIGJveCAodXBkYXRlIGJ5IHJlYWN0aXZlKQogIDwvYS1idXR0b24+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSAnYW50LWRlc2lnbi12dWUnOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmNvbnN0IGtleSA9ICd1cGRhdGFibGUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3Qgb3Blbk1lc3NhZ2UgPSAoKSA9PiB7CiAgICAgIG1lc3NhZ2UubG9hZGluZyh7IGNvbnRlbnQ6ICdMb2FkaW5nLi4uJywga2V5IH0pOwogICAgICBzZXRUaW1lb3V0KCgpID0+IHsKICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoeyBjb250ZW50OiAnTG9hZGVkIScsIGtleSwgZHVyYXRpb246IDIgfSk7CiAgICAgIH0sIDEwMDApOwogICAgfTsKICAgIGNvbnN0IGNvbnRlbnQgPSByZWYoJ0xvYWRpbmcuLi4nKTsKICAgIGNvbnN0IG9wZW5NZXNzYWdlMiA9ICgpID0+IHsKICAgICAgLy8gY29udGVudCBtdXN0IHVzZSBmdW5jdGlvbgogICAgICBtZXNzYWdlLmxvYWRpbmcoeyBjb250ZW50OiAoKSA9PiBjb250ZW50LnZhbHVlIH0pOwogICAgICBzZXRUaW1lb3V0KCgpID0+IHsKICAgICAgICBjb250ZW50LnZhbHVlID0gJ0xvYWRlZCEnOwogICAgICB9LCAxMDAwKTsKICAgIH07CiAgICByZXR1cm4gewogICAgICBvcGVuTWVzc2FnZSwKICAgICAgb3Blbk1lc3NhZ2UyLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWJ1dHRvbiB0eXBlPSJwcmltYXJ5IiBAY2xpY2s9Im9wZW5NZXNzYWdlIj5PcGVuIHRoZSBtZXNzYWdlIGJveCAodXBkYXRlIGJ5IGtleSk8L2EtYnV0dG9uPgogIDxiciAvPgogIDxiciAvPgogIDxhLWJ1dHRvbiB0eXBlPSJwcmltYXJ5IiBAY2xpY2s9Im9wZW5NZXNzYWdlMiI+CiAgICBPcGVuIHRoZSBtZXNzYWdlIGJveCAodXBkYXRlIGJ5IHJlYWN0aXZlKQogIDwvYS1idXR0b24+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tICdhbnQtZGVzaWduLXZ1ZSc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKY29uc3Qga2V5ID0gJ3VwZGF0YWJsZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBvcGVuTWVzc2FnZSA9ICgpID0+IHsKICAgICAgbWVzc2FnZS5sb2FkaW5nKHsKICAgICAgICBjb250ZW50OiAnTG9hZGluZy4uLicsCiAgICAgICAga2V5LAogICAgICB9KTsKICAgICAgc2V0VGltZW91dCgoKSA9PiB7CiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKHsKICAgICAgICAgIGNvbnRlbnQ6ICdMb2FkZWQhJywKICAgICAgICAgIGtleSwKICAgICAgICAgIGR1cmF0aW9uOiAyLAogICAgICAgIH0pOwogICAgICB9LCAxMDAwKTsKICAgIH07CiAgICBjb25zdCBjb250ZW50ID0gcmVmKCdMb2FkaW5nLi4uJyk7CiAgICBjb25zdCBvcGVuTWVzc2FnZTIgPSAoKSA9PiB7CiAgICAgIC8vIGNvbnRlbnQgbXVzdCB1c2UgZnVuY3Rpb24KICAgICAgbWVzc2FnZS5sb2FkaW5nKHsKICAgICAgICBjb250ZW50OiAoKSA9PiBjb250ZW50LnZhbHVlLAogICAgICB9KTsKICAgICAgc2V0VGltZW91dCgoKSA9PiB7CiAgICAgICAgY29udGVudC52YWx1ZSA9ICdMb2FkZWQhJzsKICAgICAgfSwgMTAwMCk7CiAgICB9OwogICAgcmV0dXJuIHsKICAgICAgb3Blbk1lc3NhZ2UsCiAgICAgIG9wZW5NZXNzYWdlMiwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0Pg==",isdemo:!1}},{default:t(()=>[c(e,{type:"primary",onClick:a.openMessage},{default:t(()=>[s("Open the message box (update by key)")]),_:1},8,["onClick"]),nn,sn,c(e,{type:"primary",onClick:a.openMessage2},{default:t(()=>[s(" Open the message box (update by reactive) ")]),_:1},8,["onClick"])]),htmlCode:t(()=>[tn]),jsVersionHtml:t(()=>[an]),_:1},8,["jsfiddle"])}const en=k(q,[["render",on]]),cn=C({setup(){return{success:()=>{u.success({content:()=>"This is a prompt message with custom className and style",class:"custom-class",style:{marginTop:"20vh"}})}}}});const pn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("success"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Customized style"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" message "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'ant-design-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"success"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function-variable function"},"content"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token string"},"'This is a prompt message with custom className and style'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'custom-class'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"style"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"marginTop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'20vh'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      success`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
`),n("span",{class:"token selector"},".custom-class"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" red"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1),ln=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("success"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Customized style"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" message "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'ant-design-vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"success"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function-variable function"},"content"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token string"},"'This is a prompt message with custom className and style'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'custom-class'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"style"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"marginTop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'20vh'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      success`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
`),n("span",{class:"token selector"},".custom-class"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" red"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1);function un(a,p,i,r,g,m){const e=o("a-button"),l=o("demo-box");return d(),h(l,{jsfiddle:{us:"The `style` and `class` are available to customize Message.",cn:"\u4F7F\u7528 `style` \u548C `class` \u6765\u5B9A\u4E49\u6837\u5F0F\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u4F7F\u7528 <code>style</code> \u548C <code>class</code> \u6765\u5B9A\u4E49\u6837\u5F0F\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>The <code>style</code> and <code>class</code> are available to customize Message.</p>
`,order:6,title:{"zh-CN":"\u81EA\u5B9A\u4E49\u6837\u5F0F","en-US":"Customized style"},relativePath:"components/message/demo/custom-style.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWJ1dHRvbiBAY2xpY2s9InN1Y2Nlc3MiPkN1c3RvbWl6ZWQgc3R5bGU8L2EtYnV0dG9uPgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gJ2FudC1kZXNpZ24tdnVlJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IHN1Y2Nlc3MgPSAoKSA9PiB7CiAgICAgIG1lc3NhZ2Uuc3VjY2Vzcyh7CiAgICAgICAgY29udGVudDogKCkgPT4gJ1RoaXMgaXMgYSBwcm9tcHQgbWVzc2FnZSB3aXRoIGN1c3RvbSBjbGFzc05hbWUgYW5kIHN0eWxlJywKICAgICAgICBjbGFzczogJ2N1c3RvbS1jbGFzcycsCiAgICAgICAgc3R5bGU6IHsKICAgICAgICAgIG1hcmdpblRvcDogJzIwdmgnLAogICAgICAgIH0sCiAgICAgIH0pOwogICAgfTsKICAgIHJldHVybiB7CiAgICAgIHN1Y2Nlc3MsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KPHN0eWxlPgouY3VzdG9tLWNsYXNzIHsKICBjb2xvcjogcmVkOwp9Cjwvc3R5bGU+Cg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWJ1dHRvbiBAY2xpY2s9InN1Y2Nlc3MiPkN1c3RvbWl6ZWQgc3R5bGU8L2EtYnV0dG9uPgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSAnYW50LWRlc2lnbi12dWUnOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3Qgc3VjY2VzcyA9ICgpID0+IHsKICAgICAgbWVzc2FnZS5zdWNjZXNzKHsKICAgICAgICBjb250ZW50OiAoKSA9PiAnVGhpcyBpcyBhIHByb21wdCBtZXNzYWdlIHdpdGggY3VzdG9tIGNsYXNzTmFtZSBhbmQgc3R5bGUnLAogICAgICAgIGNsYXNzOiAnY3VzdG9tLWNsYXNzJywKICAgICAgICBzdHlsZTogewogICAgICAgICAgbWFyZ2luVG9wOiAnMjB2aCcsCiAgICAgICAgfSwKICAgICAgfSk7CiAgICB9OwogICAgcmV0dXJuIHsKICAgICAgc3VjY2VzcywKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0Pgo8c3R5bGU+Ci5jdXN0b20tY2xhc3MgewogIGNvbG9yOiByZWQ7Cn0KPC9zdHlsZT4=",isdemo:!1}},{default:t(()=>[c(e,{onClick:a.success},{default:t(()=>[s("Customized style")]),_:1},8,["onClick"])]),htmlCode:t(()=>[pn]),jsVersionHtml:t(()=>[ln]),_:1},8,["jsfiddle"])}const kn=k(cn,[["render",un]]),dn={pageData:{title:"Message",description:"",frontmatter:{category:"Components",type:"\u53CD\u9988",title:"Message",subtitle:"\u5168\u5C40\u63D0\u793A",cover:"https://gw.alipayobjects.com/zos/alicdn/hAkKTIW0K/Message.svg"},headers:[{level:2,title:"\u4F55\u65F6\u4F7F\u7528",slug:"\u4F55\u65F6\u4F7F\u7528",content:""},{level:2,title:"API",slug:"API",content:"\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E00\u4E9B\u9759\u6001\u65B9\u6CD5\uFF0C\u4F7F\u7528\u65B9\u5F0F\u548C\u53C2\u6570\u5982\u4E0B\uFF1A"},{level:3,title:"\u5168\u5C40\u65B9\u6CD5",slug:"\u5168\u5C40\u65B9\u6CD5",content:"\u8FD8\u63D0\u4F9B\u4E86\u5168\u5C40\u914D\u7F6E\u548C\u5168\u5C40\u9500\u6BC1\u65B9\u6CD5\uFF1A"}],relativePath:"components/message/index.zh-CN.md",content:`
\u5168\u5C40\u5C55\u793A\u64CD\u4F5C\u53CD\u9988\u4FE1\u606F\u3002

## \u4F55\u65F6\u4F7F\u7528

- \u53EF\u63D0\u4F9B\u6210\u529F\u3001\u8B66\u544A\u548C\u9519\u8BEF\u7B49\u53CD\u9988\u4FE1\u606F\u3002
- \u9876\u90E8\u5C45\u4E2D\u663E\u793A\u5E76\u81EA\u52A8\u6D88\u5931\uFF0C\u662F\u4E00\u79CD\u4E0D\u6253\u65AD\u7528\u6237\u64CD\u4F5C\u7684\u8F7B\u91CF\u7EA7\u63D0\u793A\u65B9\u5F0F\u3002

## API

\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E00\u4E9B\u9759\u6001\u65B9\u6CD5\uFF0C\u4F7F\u7528\u65B9\u5F0F\u548C\u53C2\u6570\u5982\u4E0B\uFF1A

- \`message.success(content, [duration], onClose)\`
- \`message.error(content, [duration], onClose)\`
- \`message.info(content, [duration], onClose)\`
- \`message.warning(content, [duration], onClose)\`
- \`message.warn(content, [duration], onClose)\` // alias of warning
- \`message.loading(content, [duration], onClose)\`

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |
| --- | --- | --- | --- |
| content | \u63D0\u793A\u5185\u5BB9 | string\\| VNode \\| () =&gt; VNode | - |
| duration | \u81EA\u52A8\u5173\u95ED\u7684\u5EF6\u65F6\uFF0C\u5355\u4F4D\u79D2\u3002\u8BBE\u4E3A 0 \u65F6\u4E0D\u81EA\u52A8\u5173\u95ED\uFF0C\u5E76\u5C55\u793A\u53EF\u5173\u95ED\u6309\u94AE\u3002 | number | 3 |
| onClose | \u5173\u95ED\u65F6\u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570 | function | - |

\u7EC4\u4EF6\u540C\u65F6\u63D0\u4F9B promise \u63A5\u53E3

- \`message[level](content, [duration]).then(afterClose)\`
- \`message[level](content, [duration], onClose).then(afterClose)\`

\u5176\u4E2D\`message[level]\` \u662F\u7EC4\u4EF6\u5DF2\u7ECF\u63D0\u4F9B\u7684\u9759\u6001\u65B9\u6CD5\u3002\`then\` \u63A5\u53E3\u8FD4\u56DE\u503C\u662F Promise \u3002

\u4E5F\u53EF\u4EE5\u5BF9\u8C61\u7684\u5F62\u5F0F\u4F20\u9012\u53C2\u6570\uFF1A

- \`message.open(config)\`
- \`message.success(config)\`
- \`message.error(config)\`
- \`message.info(config)\`
- \`message.warning(config)\`
- \`message.warn(config)\` // alias of warning
- \`message.loading(config)\`

\`config\` \u5BF9\u8C61\u5C5E\u6027\u5982\u4E0B\uFF1A

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C | \u7248\u672C |
| --- | --- | --- | --- | --- |
| class | \u81EA\u5B9A\u4E49 CSS class | string | - |  |
| theme | \u4E3B\u9898\u8272 | \`light\`\\| \`dark\` | light |  |
| content | \u63D0\u793A\u5185\u5BB9 | string\\| VNode \\| ()=&gt; VNode | - |  |
| duration | \u81EA\u52A8\u5173\u95ED\u7684\u5EF6\u65F6\uFF0C\u5355\u4F4D\u79D2\u3002\u8BBE\u4E3A 0 \u65F6\u4E0D\u81EA\u52A8\u5173\u95ED\u3002 | number | 3 |  |
| icon | \u81EA\u5B9A\u4E49\u56FE\u6807 | VNode \\| () =&gt; VNode | - |  |
| key | \u5F53\u524D\u63D0\u793A\u7684\u552F\u4E00\u6807\u5FD7 | string \\| number | - |  |
| style | \u81EA\u5B9A\u4E49\u5185\u8054\u6837\u5F0F | CSSProperties | - |  |
| onClick | \u70B9\u51FB message \u65F6\u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570 | function | - |  |
| onClose | \u5173\u95ED\u65F6\u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570 | function | - |  |

### \u5168\u5C40\u65B9\u6CD5

\u8FD8\u63D0\u4F9B\u4E86\u5168\u5C40\u914D\u7F6E\u548C\u5168\u5C40\u9500\u6BC1\u65B9\u6CD5\uFF1A

- \`message.config(options)\`
- \`message.destroy()\`

#### message.config

\`\`\`js
message.config({
  theme: &#39;dark&#39;,
  top: \`100px\`,
  duration: 2,
  maxCount: 3,
  rtl: true,
  prefixCls: &#39;my-message&#39;,
});
\`\`\`

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C | \u7248\u672C |  |
| --- | --- | --- | --- | --- | --- |
| duration | \u9ED8\u8BA4\u81EA\u52A8\u5173\u95ED\u5EF6\u65F6\uFF0C\u5355\u4F4D\u79D2 | number | 3 |  |  |
| theme | \u4E3B\u9898\u8272 | \`light\`\\| \`dark\` | light |  |
| getContainer | \u914D\u7F6E\u6E32\u67D3\u8282\u70B9\u7684\u8F93\u51FA\u4F4D\u7F6E | () =&gt; HTMLElement | () =&gt; document.body |  |  |
| maxCount | \u6700\u5927\u663E\u793A\u6570, \u8D85\u8FC7\u9650\u5236\u65F6\uFF0C\u6700\u65E9\u7684\u6D88\u606F\u4F1A\u88AB\u81EA\u52A8\u5173\u95ED | number | - |  |  |
| prefixCls | \u6D88\u606F\u8282\u70B9\u7684 className \u524D\u7F00 | string | \`ant-message\` | 3.0 |  |
| rtl | \u662F\u5426\u5F00\u542F RTL \u6A21\u5F0F | boolean | false |  |  |
| top | \u6D88\u606F\u8DDD\u79BB\u9876\u90E8\u7684\u4F4D\u7F6E | string | \`8px\` |  |  |
`,html:`<p>\u5168\u5C40\u5C55\u793A\u64CD\u4F5C\u53CD\u9988\u4FE1\u606F\u3002</p>
<h2 id="\u4F55\u65F6\u4F7F\u7528">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<ul>
<li>\u53EF\u63D0\u4F9B\u6210\u529F\u3001\u8B66\u544A\u548C\u9519\u8BEF\u7B49\u53CD\u9988\u4FE1\u606F\u3002</li>
<li>\u9876\u90E8\u5C45\u4E2D\u663E\u793A\u5E76\u81EA\u52A8\u6D88\u5931\uFF0C\u662F\u4E00\u79CD\u4E0D\u6253\u65AD\u7528\u6237\u64CD\u4F5C\u7684\u8F7B\u91CF\u7EA7\u63D0\u793A\u65B9\u5F0F\u3002</li>
</ul>
<h2 id="API">API <a class="header-anchor" href="#API">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E00\u4E9B\u9759\u6001\u65B9\u6CD5\uFF0C\u4F7F\u7528\u65B9\u5F0F\u548C\u53C2\u6570\u5982\u4E0B\uFF1A</p>
<ul>
<li><code>message.success(content, [duration], onClose)</code></li>
<li><code>message.error(content, [duration], onClose)</code></li>
<li><code>message.info(content, [duration], onClose)</code></li>
<li><code>message.warning(content, [duration], onClose)</code></li>
<li><code>message.warn(content, [duration], onClose)</code> // alias of warning</li>
<li><code>message.loading(content, [duration], onClose)</code></li>
</ul>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody>
<tr>
<td>content</td>
<td>\u63D0\u793A\u5185\u5BB9</td>
<td>string| VNode | () =&gt; VNode</td>
<td>-</td>
</tr>
<tr>
<td>duration</td>
<td>\u81EA\u52A8\u5173\u95ED\u7684\u5EF6\u65F6\uFF0C\u5355\u4F4D\u79D2\u3002\u8BBE\u4E3A 0 \u65F6\u4E0D\u81EA\u52A8\u5173\u95ED\uFF0C\u5E76\u5C55\u793A\u53EF\u5173\u95ED\u6309\u94AE\u3002</td>
<td>number</td>
<td>3</td>
</tr>
<tr>
<td>onClose</td>
<td>\u5173\u95ED\u65F6\u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570</td>
<td>function</td>
<td>-</td>
</tr>
</tbody>
</table>
<p>\u7EC4\u4EF6\u540C\u65F6\u63D0\u4F9B promise \u63A5\u53E3</p>
<ul>
<li><code>message[level](content, [duration]).then(afterClose)</code></li>
<li><code>message[level](content, [duration], onClose).then(afterClose)</code></li>
</ul>
<p>\u5176\u4E2D<code>message[level]</code> \u662F\u7EC4\u4EF6\u5DF2\u7ECF\u63D0\u4F9B\u7684\u9759\u6001\u65B9\u6CD5\u3002<code>then</code> \u63A5\u53E3\u8FD4\u56DE\u503C\u662F Promise \u3002</p>
<p>\u4E5F\u53EF\u4EE5\u5BF9\u8C61\u7684\u5F62\u5F0F\u4F20\u9012\u53C2\u6570\uFF1A</p>
<ul>
<li><code>message.open(config)</code></li>
<li><code>message.success(config)</code></li>
<li><code>message.error(config)</code></li>
<li><code>message.info(config)</code></li>
<li><code>message.warning(config)</code></li>
<li><code>message.warn(config)</code> // alias of warning</li>
<li><code>message.loading(config)</code></li>
</ul>
<p><code>config</code> \u5BF9\u8C61\u5C5E\u6027\u5982\u4E0B\uFF1A</p>
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
<td>class</td>
<td>\u81EA\u5B9A\u4E49 CSS class</td>
<td>string</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>theme</td>
<td>\u4E3B\u9898\u8272</td>
<td><code>light</code>| <code>dark</code></td>
<td>light</td>
<td></td>
</tr>
<tr>
<td>content</td>
<td>\u63D0\u793A\u5185\u5BB9</td>
<td>string| VNode | ()=&gt; VNode</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>duration</td>
<td>\u81EA\u52A8\u5173\u95ED\u7684\u5EF6\u65F6\uFF0C\u5355\u4F4D\u79D2\u3002\u8BBE\u4E3A 0 \u65F6\u4E0D\u81EA\u52A8\u5173\u95ED\u3002</td>
<td>number</td>
<td>3</td>
<td></td>
</tr>
<tr>
<td>icon</td>
<td>\u81EA\u5B9A\u4E49\u56FE\u6807</td>
<td>VNode | () =&gt; VNode</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>key</td>
<td>\u5F53\u524D\u63D0\u793A\u7684\u552F\u4E00\u6807\u5FD7</td>
<td>string | number</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>style</td>
<td>\u81EA\u5B9A\u4E49\u5185\u8054\u6837\u5F0F</td>
<td>CSSProperties</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>onClick</td>
<td>\u70B9\u51FB message \u65F6\u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570</td>
<td>function</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>onClose</td>
<td>\u5173\u95ED\u65F6\u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570</td>
<td>function</td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="\u5168\u5C40\u65B9\u6CD5">\u5168\u5C40\u65B9\u6CD5 <a class="header-anchor" href="#\u5168\u5C40\u65B9\u6CD5">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>\u8FD8\u63D0\u4F9B\u4E86\u5168\u5C40\u914D\u7F6E\u548C\u5168\u5C40\u9500\u6BC1\u65B9\u6CD5\uFF1A</p>
<ul>
<li><code>message.config(options)</code></li>
<li><code>message.destroy()</code></li>
</ul>
<h4 id="message-config">message.config <a class="header-anchor" href="#message-config">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h4>
<pre class="language-js" v-pre><code>message<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token string">'dark'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">100px</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token literal-property property">maxCount</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rtl</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">prefixCls</span><span class="token operator">:</span> <span class="token string">'my-message'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
<th>\u7248\u672C</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>duration</td>
<td>\u9ED8\u8BA4\u81EA\u52A8\u5173\u95ED\u5EF6\u65F6\uFF0C\u5355\u4F4D\u79D2</td>
<td>number</td>
<td>3</td>
<td></td>
<td></td>
</tr>
<tr>
<td>theme</td>
<td>\u4E3B\u9898\u8272</td>
<td><code>light</code>| <code>dark</code></td>
<td>light</td>
<td></td>
<td></td>
</tr>
<tr>
<td>getContainer</td>
<td>\u914D\u7F6E\u6E32\u67D3\u8282\u70B9\u7684\u8F93\u51FA\u4F4D\u7F6E</td>
<td>() =&gt; HTMLElement</td>
<td>() =&gt; document.body</td>
<td></td>
<td></td>
</tr>
<tr>
<td>maxCount</td>
<td>\u6700\u5927\u663E\u793A\u6570, \u8D85\u8FC7\u9650\u5236\u65F6\uFF0C\u6700\u65E9\u7684\u6D88\u606F\u4F1A\u88AB\u81EA\u52A8\u5173\u95ED</td>
<td>number</td>
<td>-</td>
<td></td>
<td></td>
</tr>
<tr>
<td>prefixCls</td>
<td>\u6D88\u606F\u8282\u70B9\u7684 className \u524D\u7F00</td>
<td>string</td>
<td><code>ant-message</code></td>
<td>3.0</td>
<td></td>
</tr>
<tr>
<td>rtl</td>
<td>\u662F\u5426\u5F00\u542F RTL \u6A21\u5F0F</td>
<td>boolean</td>
<td>false</td>
<td></td>
<td></td>
</tr>
<tr>
<td>top</td>
<td>\u6D88\u606F\u8DDD\u79BB\u9876\u90E8\u7684\u4F4D\u7F6E</td>
<td>string</td>
<td><code>8px</code></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
`,lastUpdated:1673775223606}},rn={class:"markdown"},gn=y(`<p>\u5168\u5C40\u5C55\u793A\u64CD\u4F5C\u53CD\u9988\u4FE1\u606F\u3002</p><h2 id="\u4F55\u65F6\u4F7F\u7528">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528"><span aria-hidden="true" class="anchor">#</span></a></h2><ul><li>\u53EF\u63D0\u4F9B\u6210\u529F\u3001\u8B66\u544A\u548C\u9519\u8BEF\u7B49\u53CD\u9988\u4FE1\u606F\u3002</li><li>\u9876\u90E8\u5C45\u4E2D\u663E\u793A\u5E76\u81EA\u52A8\u6D88\u5931\uFF0C\u662F\u4E00\u79CD\u4E0D\u6253\u65AD\u7528\u6237\u64CD\u4F5C\u7684\u8F7B\u91CF\u7EA7\u63D0\u793A\u65B9\u5F0F\u3002</li></ul><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E00\u4E9B\u9759\u6001\u65B9\u6CD5\uFF0C\u4F7F\u7528\u65B9\u5F0F\u548C\u53C2\u6570\u5982\u4E0B\uFF1A</p><ul><li><code>message.success(content, [duration], onClose)</code></li><li><code>message.error(content, [duration], onClose)</code></li><li><code>message.info(content, [duration], onClose)</code></li><li><code>message.warning(content, [duration], onClose)</code></li><li><code>message.warn(content, [duration], onClose)</code> // alias of warning</li><li><code>message.loading(content, [duration], onClose)</code></li></ul><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>content</td><td>\u63D0\u793A\u5185\u5BB9</td><td>string| VNode | () =&gt; VNode</td><td>-</td></tr><tr><td>duration</td><td>\u81EA\u52A8\u5173\u95ED\u7684\u5EF6\u65F6\uFF0C\u5355\u4F4D\u79D2\u3002\u8BBE\u4E3A 0 \u65F6\u4E0D\u81EA\u52A8\u5173\u95ED\uFF0C\u5E76\u5C55\u793A\u53EF\u5173\u95ED\u6309\u94AE\u3002</td><td>number</td><td>3</td></tr><tr><td>onClose</td><td>\u5173\u95ED\u65F6\u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570</td><td>function</td><td>-</td></tr></tbody></table><p>\u7EC4\u4EF6\u540C\u65F6\u63D0\u4F9B promise \u63A5\u53E3</p><ul><li><code>message[level](content, [duration]).then(afterClose)</code></li><li><code>message[level](content, [duration], onClose).then(afterClose)</code></li></ul><p>\u5176\u4E2D<code>message[level]</code> \u662F\u7EC4\u4EF6\u5DF2\u7ECF\u63D0\u4F9B\u7684\u9759\u6001\u65B9\u6CD5\u3002<code>then</code> \u63A5\u53E3\u8FD4\u56DE\u503C\u662F Promise \u3002</p><p>\u4E5F\u53EF\u4EE5\u5BF9\u8C61\u7684\u5F62\u5F0F\u4F20\u9012\u53C2\u6570\uFF1A</p><ul><li><code>message.open(config)</code></li><li><code>message.success(config)</code></li><li><code>message.error(config)</code></li><li><code>message.info(config)</code></li><li><code>message.warning(config)</code></li><li><code>message.warn(config)</code> // alias of warning</li><li><code>message.loading(config)</code></li></ul><p><code>config</code> \u5BF9\u8C61\u5C5E\u6027\u5982\u4E0B\uFF1A</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>class</td><td>\u81EA\u5B9A\u4E49 CSS class</td><td>string</td><td>-</td><td></td></tr><tr><td>theme</td><td>\u4E3B\u9898\u8272</td><td><code>light</code>| <code>dark</code></td><td>light</td><td></td></tr><tr><td>content</td><td>\u63D0\u793A\u5185\u5BB9</td><td>string| VNode | ()=&gt; VNode</td><td>-</td><td></td></tr><tr><td>duration</td><td>\u81EA\u52A8\u5173\u95ED\u7684\u5EF6\u65F6\uFF0C\u5355\u4F4D\u79D2\u3002\u8BBE\u4E3A 0 \u65F6\u4E0D\u81EA\u52A8\u5173\u95ED\u3002</td><td>number</td><td>3</td><td></td></tr><tr><td>icon</td><td>\u81EA\u5B9A\u4E49\u56FE\u6807</td><td>VNode | () =&gt; VNode</td><td>-</td><td></td></tr><tr><td>key</td><td>\u5F53\u524D\u63D0\u793A\u7684\u552F\u4E00\u6807\u5FD7</td><td>string | number</td><td>-</td><td></td></tr><tr><td>style</td><td>\u81EA\u5B9A\u4E49\u5185\u8054\u6837\u5F0F</td><td>CSSProperties</td><td>-</td><td></td></tr><tr><td>onClick</td><td>\u70B9\u51FB message \u65F6\u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570</td><td>function</td><td>-</td><td></td></tr><tr><td>onClose</td><td>\u5173\u95ED\u65F6\u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570</td><td>function</td><td>-</td><td></td></tr></tbody></table><h3 id="\u5168\u5C40\u65B9\u6CD5">\u5168\u5C40\u65B9\u6CD5 <a class="header-anchor" href="#\u5168\u5C40\u65B9\u6CD5"><span aria-hidden="true" class="anchor">#</span></a></h3><p>\u8FD8\u63D0\u4F9B\u4E86\u5168\u5C40\u914D\u7F6E\u548C\u5168\u5C40\u9500\u6BC1\u65B9\u6CD5\uFF1A</p><ul><li><code>message.config(options)</code></li><li><code>message.destroy()</code></li></ul><h4 id="message-config">message.config <a class="header-anchor" href="#message-config"><span aria-hidden="true" class="anchor">#</span></a></h4><pre class="language-js"><code>message<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token string">&#39;dark&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">100px</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token literal-property property">maxCount</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rtl</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">prefixCls</span><span class="token operator">:</span> <span class="token string">&#39;my-message&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th><th></th></tr></thead><tbody><tr><td>duration</td><td>\u9ED8\u8BA4\u81EA\u52A8\u5173\u95ED\u5EF6\u65F6\uFF0C\u5355\u4F4D\u79D2</td><td>number</td><td>3</td><td></td><td></td></tr><tr><td>theme</td><td>\u4E3B\u9898\u8272</td><td><code>light</code>| <code>dark</code></td><td>light</td><td></td><td></td></tr><tr><td>getContainer</td><td>\u914D\u7F6E\u6E32\u67D3\u8282\u70B9\u7684\u8F93\u51FA\u4F4D\u7F6E</td><td>() =&gt; HTMLElement</td><td>() =&gt; document.body</td><td></td><td></td></tr><tr><td>maxCount</td><td>\u6700\u5927\u663E\u793A\u6570, \u8D85\u8FC7\u9650\u5236\u65F6\uFF0C\u6700\u65E9\u7684\u6D88\u606F\u4F1A\u88AB\u81EA\u52A8\u5173\u95ED</td><td>number</td><td>-</td><td></td><td></td></tr><tr><td>prefixCls</td><td>\u6D88\u606F\u8282\u70B9\u7684 className \u524D\u7F00</td><td>string</td><td><code>ant-message</code></td><td>3.0</td><td></td></tr><tr><td>rtl</td><td>\u662F\u5426\u5F00\u542F RTL \u6A21\u5F0F</td><td>boolean</td><td>false</td><td></td><td></td></tr><tr><td>top</td><td>\u6D88\u606F\u8DDD\u79BB\u9876\u90E8\u7684\u4F4D\u7F6E</td><td>string</td><td><code>8px</code></td><td></td><td></td></tr></tbody></table>`,20),mn=[gn];function Cn(a,p,i,r,g,m){return d(),f("article",rn,mn)}const hn=k(dn,[["render",Cn]]),bn={pageData:{title:"Message",description:"",frontmatter:{category:"Components",type:"Feedback",title:"Message",cover:"https://gw.alipayobjects.com/zos/alicdn/hAkKTIW0K/Message.svg"},headers:[{level:2,title:"When To Use",slug:"When-To-Use",content:""},{level:2,title:"API",slug:"API",content:"This components provides some static methods, with usage and arguments as following:"},{level:3,title:"Global static methods",slug:"Global-static-methods",content:"Methods for global configuration and destruction are also provided:"}],relativePath:"components/message/index.en-US.md",content:`
Display global messages as feedback in response to user operations.

## When To Use

- To provide feedback such as success, warning, error etc.
- A message is displayed at top and center and will be dismissed automatically, as a non-interrupting light-weighted prompt.

## API

This components provides some static methods, with usage and arguments as following:

- \`message.success(content, [duration], onClose)\`
- \`message.error(content, [duration], onClose)\`
- \`message.info(content, [duration], onClose)\`
- \`message.warning(content, [duration], onClose)\`
- \`message.warn(content, [duration], onClose)\` // alias of warning
- \`message.loading(content, [duration], onClose)\`

| Argument | Description | Type | Default |
| --- | --- | --- | --- |
| content | content of the message | string\\| VNode \\| () =&gt; VNode | - |
| duration | time(seconds) before auto-dismiss, don&#39;t dismiss if set to 0, and show closable button | number | 1.5 |
| onClose | Specify a function that will be called when the message is closed | function | - |

\`afterClose\` can be called in then-able interface:

- \`message[level](content, [duration]).then(afterClose)\`
- \`message[level](content, [duration], onClose).then(afterClose)\`

where \`level\` refers one static methods of \`message\`. The result of \`then\` method will be a Promise.

- \`message.open(config)\`
- \`message.success(config)\`
- \`message.error(config)\`
- \`message.info(config)\`
- \`message.warning(config)\`
- \`message.warn(config)\` // alias of warning
- \`message.loading(config)\`

The properties of config are as follows:

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| class | Customized CSS class | string | - |  |
| theme | Theme color | \`light\`\\| \`dark\` | light |  |
| content | content of the message | string\\| VNode \\| () =&gt; VNode | - |  |
| duration | time(seconds) before auto-dismiss, don&#39;t dismiss if set to 0 | number | 3 |  |
| icon | Customized Icon | VNode \\| ()=&gt; VNode | - |  |
| key | The unique identifier of the Message | string\\|number | - |  |
| style | Customized inline style | CSSProperties | - |  |
| onClick | Specify a function that will be called when the message is clicked | function | - |  |
| onClose | Specify a function that will be called when the message is closed | function | - |  |

### Global static methods

Methods for global configuration and destruction are also provided:

- \`message.config(options)\`
- \`message.destroy()\`

#### message.config

\`\`\`js
message.config({
  theme: &#39;dark&#39;,
  top: &#39;100px&#39;,
  duration: 2,
  maxCount: 3,
  rtl: true,
  prefixCls: &#39;my-message&#39;,
});
\`\`\`

| Argument | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| duration | time before auto-dismiss, in seconds | number | 1.5 |  |
| theme | Theme color | \`light\`\\| \`dark\` | light |  |
| getContainer | Return the mount node for Message | () =&gt; HTMLElement | () =&gt; document.body |  |
| maxCount | max message show, drop oldest if exceed limit | number | - |  |
| prefixCls | The prefix className of message node | string | \`ant-message\` | 3.0 |
| rtl | Whether to enable RTL mode | boolean | false | 3.0 |
| top | distance from top | string | \`8px\` |  |
`,html:`<p>Display global messages as feedback in response to user operations.</p>
<h2 id="When-To-Use">When To Use <a class="header-anchor" href="#When-To-Use">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<ul>
<li>To provide feedback such as success, warning, error etc.</li>
<li>A message is displayed at top and center and will be dismissed automatically, as a non-interrupting light-weighted prompt.</li>
</ul>
<h2 id="API">API <a class="header-anchor" href="#API">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>This components provides some static methods, with usage and arguments as following:</p>
<ul>
<li><code>message.success(content, [duration], onClose)</code></li>
<li><code>message.error(content, [duration], onClose)</code></li>
<li><code>message.info(content, [duration], onClose)</code></li>
<li><code>message.warning(content, [duration], onClose)</code></li>
<li><code>message.warn(content, [duration], onClose)</code> // alias of warning</li>
<li><code>message.loading(content, [duration], onClose)</code></li>
</ul>
<table>
<thead>
<tr>
<th>Argument</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody>
<tr>
<td>content</td>
<td>content of the message</td>
<td>string| VNode | () =&gt; VNode</td>
<td>-</td>
</tr>
<tr>
<td>duration</td>
<td>time(seconds) before auto-dismiss, don't dismiss if set to 0, and show closable button</td>
<td>number</td>
<td>1.5</td>
</tr>
<tr>
<td>onClose</td>
<td>Specify a function that will be called when the message is closed</td>
<td>function</td>
<td>-</td>
</tr>
</tbody>
</table>
<p><code>afterClose</code> can be called in then-able interface:</p>
<ul>
<li><code>message[level](content, [duration]).then(afterClose)</code></li>
<li><code>message[level](content, [duration], onClose).then(afterClose)</code></li>
</ul>
<p>where <code>level</code> refers one static methods of <code>message</code>. The result of <code>then</code> method will be a Promise.</p>
<ul>
<li><code>message.open(config)</code></li>
<li><code>message.success(config)</code></li>
<li><code>message.error(config)</code></li>
<li><code>message.info(config)</code></li>
<li><code>message.warning(config)</code></li>
<li><code>message.warn(config)</code> // alias of warning</li>
<li><code>message.loading(config)</code></li>
</ul>
<p>The properties of config are as follows:</p>
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
<td>class</td>
<td>Customized CSS class</td>
<td>string</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>theme</td>
<td>Theme color</td>
<td><code>light</code>| <code>dark</code></td>
<td>light</td>
<td></td>
</tr>
<tr>
<td>content</td>
<td>content of the message</td>
<td>string| VNode | () =&gt; VNode</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>duration</td>
<td>time(seconds) before auto-dismiss, don't dismiss if set to 0</td>
<td>number</td>
<td>3</td>
<td></td>
</tr>
<tr>
<td>icon</td>
<td>Customized Icon</td>
<td>VNode | ()=&gt; VNode</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>key</td>
<td>The unique identifier of the Message</td>
<td>string|number</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>style</td>
<td>Customized inline style</td>
<td>CSSProperties</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>onClick</td>
<td>Specify a function that will be called when the message is clicked</td>
<td>function</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>onClose</td>
<td>Specify a function that will be called when the message is closed</td>
<td>function</td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="Global-static-methods">Global static methods <a class="header-anchor" href="#Global-static-methods">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>Methods for global configuration and destruction are also provided:</p>
<ul>
<li><code>message.config(options)</code></li>
<li><code>message.destroy()</code></li>
</ul>
<h4 id="message-config">message.config <a class="header-anchor" href="#message-config">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h4>
<pre class="language-js" v-pre><code>message<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token string">'dark'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token string">'100px'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token literal-property property">maxCount</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rtl</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">prefixCls</span><span class="token operator">:</span> <span class="token string">'my-message'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<table>
<thead>
<tr>
<th>Argument</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
<th>Version</th>
</tr>
</thead>
<tbody>
<tr>
<td>duration</td>
<td>time before auto-dismiss, in seconds</td>
<td>number</td>
<td>1.5</td>
<td></td>
</tr>
<tr>
<td>theme</td>
<td>Theme color</td>
<td><code>light</code>| <code>dark</code></td>
<td>light</td>
<td></td>
</tr>
<tr>
<td>getContainer</td>
<td>Return the mount node for Message</td>
<td>() =&gt; HTMLElement</td>
<td>() =&gt; document.body</td>
<td></td>
</tr>
<tr>
<td>maxCount</td>
<td>max message show, drop oldest if exceed limit</td>
<td>number</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>prefixCls</td>
<td>The prefix className of message node</td>
<td>string</td>
<td><code>ant-message</code></td>
<td>3.0</td>
</tr>
<tr>
<td>rtl</td>
<td>Whether to enable RTL mode</td>
<td>boolean</td>
<td>false</td>
<td>3.0</td>
</tr>
<tr>
<td>top</td>
<td>distance from top</td>
<td>string</td>
<td><code>8px</code></td>
<td></td>
</tr>
</tbody>
</table>
`,lastUpdated:1673775223604}},In={class:"markdown"},fn=y(`<p>Display global messages as feedback in response to user operations.</p><h2 id="When-To-Use">When To Use <a class="header-anchor" href="#When-To-Use"><span aria-hidden="true" class="anchor">#</span></a></h2><ul><li>To provide feedback such as success, warning, error etc.</li><li>A message is displayed at top and center and will be dismissed automatically, as a non-interrupting light-weighted prompt.</li></ul><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><p>This components provides some static methods, with usage and arguments as following:</p><ul><li><code>message.success(content, [duration], onClose)</code></li><li><code>message.error(content, [duration], onClose)</code></li><li><code>message.info(content, [duration], onClose)</code></li><li><code>message.warning(content, [duration], onClose)</code></li><li><code>message.warn(content, [duration], onClose)</code> // alias of warning</li><li><code>message.loading(content, [duration], onClose)</code></li></ul><table><thead><tr><th>Argument</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>content</td><td>content of the message</td><td>string| VNode | () =&gt; VNode</td><td>-</td></tr><tr><td>duration</td><td>time(seconds) before auto-dismiss, don&#39;t dismiss if set to 0, and show closable button</td><td>number</td><td>1.5</td></tr><tr><td>onClose</td><td>Specify a function that will be called when the message is closed</td><td>function</td><td>-</td></tr></tbody></table><p><code>afterClose</code> can be called in then-able interface:</p><ul><li><code>message[level](content, [duration]).then(afterClose)</code></li><li><code>message[level](content, [duration], onClose).then(afterClose)</code></li></ul><p>where <code>level</code> refers one static methods of <code>message</code>. The result of <code>then</code> method will be a Promise.</p><ul><li><code>message.open(config)</code></li><li><code>message.success(config)</code></li><li><code>message.error(config)</code></li><li><code>message.info(config)</code></li><li><code>message.warning(config)</code></li><li><code>message.warn(config)</code> // alias of warning</li><li><code>message.loading(config)</code></li></ul><p>The properties of config are as follows:</p><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Version</th></tr></thead><tbody><tr><td>class</td><td>Customized CSS class</td><td>string</td><td>-</td><td></td></tr><tr><td>theme</td><td>Theme color</td><td><code>light</code>| <code>dark</code></td><td>light</td><td></td></tr><tr><td>content</td><td>content of the message</td><td>string| VNode | () =&gt; VNode</td><td>-</td><td></td></tr><tr><td>duration</td><td>time(seconds) before auto-dismiss, don&#39;t dismiss if set to 0</td><td>number</td><td>3</td><td></td></tr><tr><td>icon</td><td>Customized Icon</td><td>VNode | ()=&gt; VNode</td><td>-</td><td></td></tr><tr><td>key</td><td>The unique identifier of the Message</td><td>string|number</td><td>-</td><td></td></tr><tr><td>style</td><td>Customized inline style</td><td>CSSProperties</td><td>-</td><td></td></tr><tr><td>onClick</td><td>Specify a function that will be called when the message is clicked</td><td>function</td><td>-</td><td></td></tr><tr><td>onClose</td><td>Specify a function that will be called when the message is closed</td><td>function</td><td>-</td><td></td></tr></tbody></table><h3 id="Global-static-methods">Global static methods <a class="header-anchor" href="#Global-static-methods"><span aria-hidden="true" class="anchor">#</span></a></h3><p>Methods for global configuration and destruction are also provided:</p><ul><li><code>message.config(options)</code></li><li><code>message.destroy()</code></li></ul><h4 id="message-config">message.config <a class="header-anchor" href="#message-config"><span aria-hidden="true" class="anchor">#</span></a></h4><pre class="language-js"><code>message<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token string">&#39;dark&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token string">&#39;100px&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token literal-property property">maxCount</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rtl</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">prefixCls</span><span class="token operator">:</span> <span class="token string">&#39;my-message&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><table><thead><tr><th>Argument</th><th>Description</th><th>Type</th><th>Default</th><th>Version</th></tr></thead><tbody><tr><td>duration</td><td>time before auto-dismiss, in seconds</td><td>number</td><td>1.5</td><td></td></tr><tr><td>theme</td><td>Theme color</td><td><code>light</code>| <code>dark</code></td><td>light</td><td></td></tr><tr><td>getContainer</td><td>Return the mount node for Message</td><td>() =&gt; HTMLElement</td><td>() =&gt; document.body</td><td></td></tr><tr><td>maxCount</td><td>max message show, drop oldest if exceed limit</td><td>number</td><td>-</td><td></td></tr><tr><td>prefixCls</td><td>The prefix className of message node</td><td>string</td><td><code>ant-message</code></td><td>3.0</td></tr><tr><td>rtl</td><td>Whether to enable RTL mode</td><td>boolean</td><td>false</td><td>3.0</td></tr><tr><td>top</td><td>distance from top</td><td>string</td><td><code>8px</code></td><td></td></tr></tbody></table>`,19),yn=[fn];function An(a,p,i,r,g,m){return d(),f("article",In,yn)}const wn=k(bn,[["render",An]]),Zn=C({CN:hn,US:wn,components:{Info:X,Other:P,Duration:T,Loading:U,Thenable:O,Update:en,customStyleVue:kn},setup(){return{}}});function vn(a,p,i,r,g,m){const e=o("info"),l=o("duration"),b=o("other"),A=o("loading"),w=o("thenable"),Z=o("update"),v=o("customStyleVue"),B=o("demo-sort");return d(),h(B,null,{default:t(()=>[c(e),c(l),c(b),c(A),c(w),c(Z),c(v)]),_:1})}const Nn=k(Zn,[["render",vn]]);export{Nn as default};
