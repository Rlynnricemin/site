import{d as G,r as g,_ as b,l as h,w as i,j as u,k as A,b as n,f as d,e as t,o as S,y as X,t as R,B as T,c as j,C as P,D as L,a as Y,s as B}from"./index.6a8b5f17.js";const w=[];for(let s=0;s<20;s++)w.push({key:s.toString(),title:`content${s+1}`,description:`description of content${s+1}`,disabled:s%3<1});const E=w.filter(s=>+s.key%3>1).map(s=>s.key),U=G({data(){const s=g(!1),a=g(E),l=g(["1","4"]);return{mockData:w,targetKeys:a,selectedKeys:l,disabled:s,handleChange:(o,e,p)=>{console.log("targetKeys: ",o),console.log("direction: ",e),console.log("moveKeys: ",p)},handleSelectChange:(o,e)=>{console.log("sourceSelectedKeys: ",o),console.log("targetSelectedKeys: ",e)},handleScroll:(o,e)=>{console.log("direction:",o),console.log("target:",e.target)}}}}),q=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-transfer")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("target-keys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("targetKeys"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("selected-keys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("selectedKeys"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":data-source"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mockData"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":titles"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("['Source', 'Target']"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":render"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item => item.title"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":disabled"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("disabled"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleChange"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"@selectChange"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleSelectChange"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"@scroll"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleScroll"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-switch")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("checked")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("disabled"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"un-checked-children"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("enabled"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"checked-children"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("disabled"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),t(" 16px")]),n("span",{class:"token punctuation"},'"')])]),t(`
    `),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"interface"),t(),n("span",{class:"token class-name"},"MockData"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token literal-property property"},"description"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),t(" boolean"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token literal-property property"},"mockData"),n("span",{class:"token operator"},":"),t(" MockData"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  mockData`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(" i"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"content"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"description"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"description of content"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),t(" i "),n("span",{class:"token operator"},"%"),t(),n("span",{class:"token number"},"3"),t(),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token keyword"},"const"),t(" oriTargetKeys "),n("span",{class:"token operator"},"="),t(" mockData"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"filter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token operator"},"+"),t("item"),n("span",{class:"token punctuation"},"."),t("key "),n("span",{class:"token operator"},"%"),t(),n("span",{class:"token number"},"3"),t(),n("span",{class:"token operator"},">"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),t(),n("span",{class:"token operator"},"=>"),t(" item"),n("span",{class:"token punctuation"},"."),t("key"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" disabled "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("boolean"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(" targetKeys "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),t("oriTargetKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(" selectedKeys "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'4'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"nextTargetKeys"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"direction"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"moveKeys"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'targetKeys: '"),n("span",{class:"token punctuation"},","),t(" nextTargetKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'direction: '"),n("span",{class:"token punctuation"},","),t(" direction"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'moveKeys: '"),n("span",{class:"token punctuation"},","),t(" moveKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleSelectChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"sourceSelectedKeys"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"targetSelectedKeys"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'sourceSelectedKeys: '"),n("span",{class:"token punctuation"},","),t(" sourceSelectedKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'targetSelectedKeys: '"),n("span",{class:"token punctuation"},","),t(" targetSelectedKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleScroll"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"direction"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"e"),n("span",{class:"token operator"},":"),t(" Event")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'direction:'"),n("span",{class:"token punctuation"},","),t(" direction"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'target:'"),n("span",{class:"token punctuation"},","),t(" e"),n("span",{class:"token punctuation"},"."),t("target"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      mockData`),n("span",{class:"token punctuation"},","),t(`
      targetKeys`),n("span",{class:"token punctuation"},","),t(`
      selectedKeys`),n("span",{class:"token punctuation"},","),t(`
      disabled`),n("span",{class:"token punctuation"},","),t(`
      handleChange`),n("span",{class:"token punctuation"},","),t(`
      handleSelectChange`),n("span",{class:"token punctuation"},","),t(`
      handleScroll`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),Q=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-transfer")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("target-keys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("targetKeys"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("selected-keys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("selectedKeys"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":data-source"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mockData"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":titles"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("['Source', 'Target']"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":render"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item => item.title"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":disabled"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("disabled"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleChange"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"@selectChange"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleSelectChange"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"@scroll"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleScroll"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-switch")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("checked")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("disabled"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"un-checked-children"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("enabled"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"checked-children"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("disabled"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),t(" 16px")]),n("span",{class:"token punctuation"},'"')])]),t(`
    `),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"const"),t(" mockData "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  mockData`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(" i"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"content"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"description"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"description of content"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),t(" i "),n("span",{class:"token operator"},"%"),t(),n("span",{class:"token number"},"3"),t(),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token keyword"},"const"),t(" oriTargetKeys "),n("span",{class:"token operator"},"="),t(" mockData"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"filter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token operator"},"+"),t("item"),n("span",{class:"token punctuation"},"."),t("key "),n("span",{class:"token operator"},"%"),t(),n("span",{class:"token number"},"3"),t(),n("span",{class:"token operator"},">"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),t(),n("span",{class:"token operator"},"=>"),t(" item"),n("span",{class:"token punctuation"},"."),t("key"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" disabled "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" targetKeys "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),t("oriTargetKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" selectedKeys "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'4'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("nextTargetKeys"),n("span",{class:"token punctuation"},","),t(" direction"),n("span",{class:"token punctuation"},","),t(" moveKeys")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'targetKeys: '"),n("span",{class:"token punctuation"},","),t(" nextTargetKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'direction: '"),n("span",{class:"token punctuation"},","),t(" direction"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'moveKeys: '"),n("span",{class:"token punctuation"},","),t(" moveKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleSelectChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("sourceSelectedKeys"),n("span",{class:"token punctuation"},","),t(" targetSelectedKeys")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'sourceSelectedKeys: '"),n("span",{class:"token punctuation"},","),t(" sourceSelectedKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'targetSelectedKeys: '"),n("span",{class:"token punctuation"},","),t(" targetSelectedKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleScroll"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("direction"),n("span",{class:"token punctuation"},","),t(" e")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'direction:'"),n("span",{class:"token punctuation"},","),t(" direction"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'target:'"),n("span",{class:"token punctuation"},","),t(" e"),n("span",{class:"token punctuation"},"."),t("target"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      mockData`),n("span",{class:"token punctuation"},","),t(`
      targetKeys`),n("span",{class:"token punctuation"},","),t(`
      selectedKeys`),n("span",{class:"token punctuation"},","),t(`
      disabled`),n("span",{class:"token punctuation"},","),t(`
      handleChange`),n("span",{class:"token punctuation"},","),t(`
      handleSelectChange`),n("span",{class:"token punctuation"},","),t(`
      handleScroll`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function O(s,a,l,I,k,r){const o=u("a-transfer"),e=u("a-switch"),p=u("demo-box");return A(),h(p,{jsfiddle:{us:"The most basic usage of `Transfer` involves providing the source data and target keys arrays, plus the rendering and some callback functions.",cn:"\u6700\u57FA\u672C\u7684\u7528\u6CD5\uFF0C\u5C55\u793A\u4E86 `dataSource`\u3001`targetKeys`\u3001\u6BCF\u884C\u7684\u6E32\u67D3\u51FD\u6570 `render` \u4EE5\u53CA\u56DE\u8C03\u51FD\u6570 `change` `selectChange` `scroll` \u7684\u7528\u6CD5\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u6700\u57FA\u672C\u7684\u7528\u6CD5\uFF0C\u5C55\u793A\u4E86 <code>dataSource</code>\u3001<code>targetKeys</code>\u3001\u6BCF\u884C\u7684\u6E32\u67D3\u51FD\u6570 <code>render</code> \u4EE5\u53CA\u56DE\u8C03\u51FD\u6570 <code>change</code> <code>selectChange</code> <code>scroll</code> \u7684\u7528\u6CD5\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>The most basic usage of <code>Transfer</code> involves providing the source data and target keys arrays, plus the rendering and some callback functions.</p>
`,order:0,title:{"zh-CN":"\u57FA\u672C\u7528\u6CD5","en-US":"Basic usage"},relativePath:"components/transfer/demo/basic.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS10cmFuc2ZlcgogICAgICB2LW1vZGVsOnRhcmdldC1rZXlzPSJ0YXJnZXRLZXlzIgogICAgICB2LW1vZGVsOnNlbGVjdGVkLWtleXM9InNlbGVjdGVkS2V5cyIKICAgICAgOmRhdGEtc291cmNlPSJtb2NrRGF0YSIKICAgICAgOnRpdGxlcz0iWydTb3VyY2UnLCAnVGFyZ2V0J10iCiAgICAgIDpyZW5kZXI9Iml0ZW0gPT4gaXRlbS50aXRsZSIKICAgICAgOmRpc2FibGVkPSJkaXNhYmxlZCIKICAgICAgQGNoYW5nZT0iaGFuZGxlQ2hhbmdlIgogICAgICBAc2VsZWN0Q2hhbmdlPSJoYW5kbGVTZWxlY3RDaGFuZ2UiCiAgICAgIEBzY3JvbGw9ImhhbmRsZVNjcm9sbCIKICAgIC8+CiAgICA8YS1zd2l0Y2gKICAgICAgdi1tb2RlbDpjaGVja2VkPSJkaXNhYmxlZCIKICAgICAgdW4tY2hlY2tlZC1jaGlsZHJlbj0iZW5hYmxlZCIKICAgICAgY2hlY2tlZC1jaGlsZHJlbj0iZGlzYWJsZWQiCiAgICAgIHN0eWxlPSJtYXJnaW4tdG9wOiAxNnB4IgogICAgLz4KICA8L2Rpdj4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKaW50ZXJmYWNlIE1vY2tEYXRhIHsKICBrZXk6IHN0cmluZzsKICB0aXRsZTogc3RyaW5nOwogIGRlc2NyaXB0aW9uOiBzdHJpbmc7CiAgZGlzYWJsZWQ6IGJvb2xlYW47Cn0KY29uc3QgbW9ja0RhdGE6IE1vY2tEYXRhW10gPSBbXTsKZm9yIChsZXQgaSA9IDA7IGkgPCAyMDsgaSsrKSB7CiAgbW9ja0RhdGEucHVzaCh7CiAgICBrZXk6IGkudG9TdHJpbmcoKSwKICAgIHRpdGxlOiBgY29udGVudCR7aSArIDF9YCwKICAgIGRlc2NyaXB0aW9uOiBgZGVzY3JpcHRpb24gb2YgY29udGVudCR7aSArIDF9YCwKICAgIGRpc2FibGVkOiBpICUgMyA8IDEsCiAgfSk7Cn0KCmNvbnN0IG9yaVRhcmdldEtleXMgPSBtb2NrRGF0YS5maWx0ZXIoaXRlbSA9PiAraXRlbS5rZXkgJSAzID4gMSkubWFwKGl0ZW0gPT4gaXRlbS5rZXkpOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIGRhdGEoKSB7CiAgICBjb25zdCBkaXNhYmxlZCA9IHJlZjxib29sZWFuPihmYWxzZSk7CgogICAgY29uc3QgdGFyZ2V0S2V5cyA9IHJlZjxzdHJpbmdbXT4ob3JpVGFyZ2V0S2V5cyk7CgogICAgY29uc3Qgc2VsZWN0ZWRLZXlzID0gcmVmPHN0cmluZ1tdPihbJzEnLCAnNCddKTsKCiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAobmV4dFRhcmdldEtleXM6IHN0cmluZ1tdLCBkaXJlY3Rpb246IHN0cmluZywgbW92ZUtleXM6IHN0cmluZ1tdKSA9PiB7CiAgICAgIGNvbnNvbGUubG9nKCd0YXJnZXRLZXlzOiAnLCBuZXh0VGFyZ2V0S2V5cyk7CiAgICAgIGNvbnNvbGUubG9nKCdkaXJlY3Rpb246ICcsIGRpcmVjdGlvbik7CiAgICAgIGNvbnNvbGUubG9nKCdtb3ZlS2V5czogJywgbW92ZUtleXMpOwogICAgfTsKICAgIGNvbnN0IGhhbmRsZVNlbGVjdENoYW5nZSA9IChzb3VyY2VTZWxlY3RlZEtleXM6IHN0cmluZ1tdLCB0YXJnZXRTZWxlY3RlZEtleXM6IHN0cmluZ1tdKSA9PiB7CiAgICAgIGNvbnNvbGUubG9nKCdzb3VyY2VTZWxlY3RlZEtleXM6ICcsIHNvdXJjZVNlbGVjdGVkS2V5cyk7CiAgICAgIGNvbnNvbGUubG9nKCd0YXJnZXRTZWxlY3RlZEtleXM6ICcsIHRhcmdldFNlbGVjdGVkS2V5cyk7CiAgICB9OwogICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKGRpcmVjdGlvbjogc3RyaW5nLCBlOiBFdmVudCkgPT4gewogICAgICBjb25zb2xlLmxvZygnZGlyZWN0aW9uOicsIGRpcmVjdGlvbik7CiAgICAgIGNvbnNvbGUubG9nKCd0YXJnZXQ6JywgZS50YXJnZXQpOwogICAgfTsKCiAgICByZXR1cm4gewogICAgICBtb2NrRGF0YSwKICAgICAgdGFyZ2V0S2V5cywKICAgICAgc2VsZWN0ZWRLZXlzLAogICAgICBkaXNhYmxlZCwKICAgICAgaGFuZGxlQ2hhbmdlLAogICAgICBoYW5kbGVTZWxlY3RDaGFuZ2UsCiAgICAgIGhhbmRsZVNjcm9sbCwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS10cmFuc2ZlcgogICAgICB2LW1vZGVsOnRhcmdldC1rZXlzPSJ0YXJnZXRLZXlzIgogICAgICB2LW1vZGVsOnNlbGVjdGVkLWtleXM9InNlbGVjdGVkS2V5cyIKICAgICAgOmRhdGEtc291cmNlPSJtb2NrRGF0YSIKICAgICAgOnRpdGxlcz0iWydTb3VyY2UnLCAnVGFyZ2V0J10iCiAgICAgIDpyZW5kZXI9Iml0ZW0gPT4gaXRlbS50aXRsZSIKICAgICAgOmRpc2FibGVkPSJkaXNhYmxlZCIKICAgICAgQGNoYW5nZT0iaGFuZGxlQ2hhbmdlIgogICAgICBAc2VsZWN0Q2hhbmdlPSJoYW5kbGVTZWxlY3RDaGFuZ2UiCiAgICAgIEBzY3JvbGw9ImhhbmRsZVNjcm9sbCIKICAgIC8+CiAgICA8YS1zd2l0Y2gKICAgICAgdi1tb2RlbDpjaGVja2VkPSJkaXNhYmxlZCIKICAgICAgdW4tY2hlY2tlZC1jaGlsZHJlbj0iZW5hYmxlZCIKICAgICAgY2hlY2tlZC1jaGlsZHJlbj0iZGlzYWJsZWQiCiAgICAgIHN0eWxlPSJtYXJnaW4tdG9wOiAxNnB4IgogICAgLz4KICA8L2Rpdj4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwpjb25zdCBtb2NrRGF0YSA9IFtdOwpmb3IgKGxldCBpID0gMDsgaSA8IDIwOyBpKyspIHsKICBtb2NrRGF0YS5wdXNoKHsKICAgIGtleTogaS50b1N0cmluZygpLAogICAgdGl0bGU6IGBjb250ZW50JHtpICsgMX1gLAogICAgZGVzY3JpcHRpb246IGBkZXNjcmlwdGlvbiBvZiBjb250ZW50JHtpICsgMX1gLAogICAgZGlzYWJsZWQ6IGkgJSAzIDwgMSwKICB9KTsKfQpjb25zdCBvcmlUYXJnZXRLZXlzID0gbW9ja0RhdGEuZmlsdGVyKGl0ZW0gPT4gK2l0ZW0ua2V5ICUgMyA+IDEpLm1hcChpdGVtID0+IGl0ZW0ua2V5KTsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBkYXRhKCkgewogICAgY29uc3QgZGlzYWJsZWQgPSByZWYoZmFsc2UpOwogICAgY29uc3QgdGFyZ2V0S2V5cyA9IHJlZihvcmlUYXJnZXRLZXlzKTsKICAgIGNvbnN0IHNlbGVjdGVkS2V5cyA9IHJlZihbJzEnLCAnNCddKTsKICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChuZXh0VGFyZ2V0S2V5cywgZGlyZWN0aW9uLCBtb3ZlS2V5cykgPT4gewogICAgICBjb25zb2xlLmxvZygndGFyZ2V0S2V5czogJywgbmV4dFRhcmdldEtleXMpOwogICAgICBjb25zb2xlLmxvZygnZGlyZWN0aW9uOiAnLCBkaXJlY3Rpb24pOwogICAgICBjb25zb2xlLmxvZygnbW92ZUtleXM6ICcsIG1vdmVLZXlzKTsKICAgIH07CiAgICBjb25zdCBoYW5kbGVTZWxlY3RDaGFuZ2UgPSAoc291cmNlU2VsZWN0ZWRLZXlzLCB0YXJnZXRTZWxlY3RlZEtleXMpID0+IHsKICAgICAgY29uc29sZS5sb2coJ3NvdXJjZVNlbGVjdGVkS2V5czogJywgc291cmNlU2VsZWN0ZWRLZXlzKTsKICAgICAgY29uc29sZS5sb2coJ3RhcmdldFNlbGVjdGVkS2V5czogJywgdGFyZ2V0U2VsZWN0ZWRLZXlzKTsKICAgIH07CiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoZGlyZWN0aW9uLCBlKSA9PiB7CiAgICAgIGNvbnNvbGUubG9nKCdkaXJlY3Rpb246JywgZGlyZWN0aW9uKTsKICAgICAgY29uc29sZS5sb2coJ3RhcmdldDonLCBlLnRhcmdldCk7CiAgICB9OwogICAgcmV0dXJuIHsKICAgICAgbW9ja0RhdGEsCiAgICAgIHRhcmdldEtleXMsCiAgICAgIHNlbGVjdGVkS2V5cywKICAgICAgZGlzYWJsZWQsCiAgICAgIGhhbmRsZUNoYW5nZSwKICAgICAgaGFuZGxlU2VsZWN0Q2hhbmdlLAogICAgICBoYW5kbGVTY3JvbGwsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4=",isdemo:!1}},{default:i(()=>[n("div",null,[d(o,{"target-keys":s.targetKeys,"onUpdate:target-keys":a[0]||(a[0]=c=>s.targetKeys=c),"selected-keys":s.selectedKeys,"onUpdate:selected-keys":a[1]||(a[1]=c=>s.selectedKeys=c),"data-source":s.mockData,titles:["Source","Target"],render:c=>c.title,disabled:s.disabled,onChange:s.handleChange,onSelectChange:s.handleSelectChange,onScroll:s.handleScroll},null,8,["target-keys","selected-keys","data-source","render","disabled","onChange","onSelectChange","onScroll"]),d(e,{checked:s.disabled,"onUpdate:checked":a[2]||(a[2]=c=>s.disabled=c),"un-checked-children":"enabled","checked-children":"disabled",style:{"margin-top":"16px"}},null,8,["checked"])])]),htmlCode:i(()=>[q]),jsVersionHtml:i(()=>[Q]),_:1},8,["jsfiddle"])}const M=b(U,[["render",O]]),N=[];for(let s=0;s<20;s++)N.push({key:s.toString(),title:`content${s+1}`,description:`description of content${s+1}`,disabled:s%3<1});const _=G({data(){const s=g(!1),a=g([]),l=g(["1","4"]);return{mockData:N,targetKeys:a,selectedKeys:l,disabled:s,handleChange:(o,e,p)=>{console.log("targetKeys: ",o),console.log("direction: ",e),console.log("moveKeys: ",p)},handleSelectChange:(o,e)=>{console.log("sourceSelectedKeys: ",o),console.log("targetSelectedKeys: ",e)},handleScroll:(o,e)=>{console.log("direction:",o),console.log("target:",e.target)}}}}),$=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-transfer")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("target-keys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("targetKeys"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("selected-keys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("selectedKeys"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":data-source"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mockData"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":one-way"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":titles"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("['Source', 'Target']"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":render"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item => item.title"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":disabled"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("disabled"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleChange"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"@selectChange"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleSelectChange"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"@scroll"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleScroll"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-switch")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("checked")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("disabled"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"un-checked-children"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("enabled"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"checked-children"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("disabled"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),t(" 16px")]),n("span",{class:"token punctuation"},'"')])]),t(`
    `),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"interface"),t(),n("span",{class:"token class-name"},"MockData"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token literal-property property"},"description"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),t(" boolean"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token literal-property property"},"mockData"),n("span",{class:"token operator"},":"),t(" MockData"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  mockData`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(" i"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"content"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"description"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"description of content"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),t(" i "),n("span",{class:"token operator"},"%"),t(),n("span",{class:"token number"},"3"),t(),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" disabled "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("boolean"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(" targetKeys "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(" selectedKeys "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'4'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"nextTargetKeys"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"direction"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"moveKeys"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'targetKeys: '"),n("span",{class:"token punctuation"},","),t(" nextTargetKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'direction: '"),n("span",{class:"token punctuation"},","),t(" direction"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'moveKeys: '"),n("span",{class:"token punctuation"},","),t(" moveKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleSelectChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"sourceSelectedKeys"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"targetSelectedKeys"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'sourceSelectedKeys: '"),n("span",{class:"token punctuation"},","),t(" sourceSelectedKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'targetSelectedKeys: '"),n("span",{class:"token punctuation"},","),t(" targetSelectedKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleScroll"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"direction"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"e"),n("span",{class:"token operator"},":"),t(" Event")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'direction:'"),n("span",{class:"token punctuation"},","),t(" direction"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'target:'"),n("span",{class:"token punctuation"},","),t(" e"),n("span",{class:"token punctuation"},"."),t("target"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      mockData`),n("span",{class:"token punctuation"},","),t(`
      targetKeys`),n("span",{class:"token punctuation"},","),t(`
      selectedKeys`),n("span",{class:"token punctuation"},","),t(`
      disabled`),n("span",{class:"token punctuation"},","),t(`
      handleChange`),n("span",{class:"token punctuation"},","),t(`
      handleSelectChange`),n("span",{class:"token punctuation"},","),t(`
      handleScroll`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),nn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-transfer")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("target-keys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("targetKeys"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("selected-keys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("selectedKeys"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":data-source"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mockData"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":one-way"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":titles"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("['Source', 'Target']"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":render"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item => item.title"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":disabled"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("disabled"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleChange"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"@selectChange"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleSelectChange"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"@scroll"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleScroll"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-switch")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("checked")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("disabled"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"un-checked-children"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("enabled"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"checked-children"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("disabled"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),t(" 16px")]),n("span",{class:"token punctuation"},'"')])]),t(`
    `),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"const"),t(" mockData "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  mockData`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(" i"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"content"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"description"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"description of content"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),t(" i "),n("span",{class:"token operator"},"%"),t(),n("span",{class:"token number"},"3"),t(),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" disabled "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" targetKeys "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" selectedKeys "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'4'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("nextTargetKeys"),n("span",{class:"token punctuation"},","),t(" direction"),n("span",{class:"token punctuation"},","),t(" moveKeys")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'targetKeys: '"),n("span",{class:"token punctuation"},","),t(" nextTargetKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'direction: '"),n("span",{class:"token punctuation"},","),t(" direction"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'moveKeys: '"),n("span",{class:"token punctuation"},","),t(" moveKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleSelectChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("sourceSelectedKeys"),n("span",{class:"token punctuation"},","),t(" targetSelectedKeys")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'sourceSelectedKeys: '"),n("span",{class:"token punctuation"},","),t(" sourceSelectedKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'targetSelectedKeys: '"),n("span",{class:"token punctuation"},","),t(" targetSelectedKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleScroll"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("direction"),n("span",{class:"token punctuation"},","),t(" e")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'direction:'"),n("span",{class:"token punctuation"},","),t(" direction"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'target:'"),n("span",{class:"token punctuation"},","),t(" e"),n("span",{class:"token punctuation"},"."),t("target"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      mockData`),n("span",{class:"token punctuation"},","),t(`
      targetKeys`),n("span",{class:"token punctuation"},","),t(`
      selectedKeys`),n("span",{class:"token punctuation"},","),t(`
      disabled`),n("span",{class:"token punctuation"},","),t(`
      handleChange`),n("span",{class:"token punctuation"},","),t(`
      handleSelectChange`),n("span",{class:"token punctuation"},","),t(`
      handleScroll`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function tn(s,a,l,I,k,r){const o=u("a-transfer"),e=u("a-switch"),p=u("demo-box");return A(),h(p,{jsfiddle:{us:"Use `oneWay` to makes Transfer to one way style.",cn:"\u901A\u8FC7 `oneWay` \u5C06 Transfer \u8F6C\u4E3A\u5355\u5411\u6837\u5F0F\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u901A\u8FC7 <code>oneWay</code> \u5C06 Transfer \u8F6C\u4E3A\u5355\u5411\u6837\u5F0F\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Use <code>oneWay</code> to makes Transfer to one way style.</p>
`,order:1,title:{"zh-CN":"\u5355\u5411\u6837\u5F0F","en-US":"One Way"},relativePath:"components/transfer/demo/oneway.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS10cmFuc2ZlcgogICAgICB2LW1vZGVsOnRhcmdldC1rZXlzPSJ0YXJnZXRLZXlzIgogICAgICB2LW1vZGVsOnNlbGVjdGVkLWtleXM9InNlbGVjdGVkS2V5cyIKICAgICAgOmRhdGEtc291cmNlPSJtb2NrRGF0YSIKICAgICAgOm9uZS13YXk9InRydWUiCiAgICAgIDp0aXRsZXM9IlsnU291cmNlJywgJ1RhcmdldCddIgogICAgICA6cmVuZGVyPSJpdGVtID0+IGl0ZW0udGl0bGUiCiAgICAgIDpkaXNhYmxlZD0iZGlzYWJsZWQiCiAgICAgIEBjaGFuZ2U9ImhhbmRsZUNoYW5nZSIKICAgICAgQHNlbGVjdENoYW5nZT0iaGFuZGxlU2VsZWN0Q2hhbmdlIgogICAgICBAc2Nyb2xsPSJoYW5kbGVTY3JvbGwiCiAgICAvPgogICAgPGEtc3dpdGNoCiAgICAgIHYtbW9kZWw6Y2hlY2tlZD0iZGlzYWJsZWQiCiAgICAgIHVuLWNoZWNrZWQtY2hpbGRyZW49ImVuYWJsZWQiCiAgICAgIGNoZWNrZWQtY2hpbGRyZW49ImRpc2FibGVkIgogICAgICBzdHlsZT0ibWFyZ2luLXRvcDogMTZweCIKICAgIC8+CiAgPC9kaXY+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmludGVyZmFjZSBNb2NrRGF0YSB7CiAga2V5OiBzdHJpbmc7CiAgdGl0bGU6IHN0cmluZzsKICBkZXNjcmlwdGlvbjogc3RyaW5nOwogIGRpc2FibGVkOiBib29sZWFuOwp9CmNvbnN0IG1vY2tEYXRhOiBNb2NrRGF0YVtdID0gW107CmZvciAobGV0IGkgPSAwOyBpIDwgMjA7IGkrKykgewogIG1vY2tEYXRhLnB1c2goewogICAga2V5OiBpLnRvU3RyaW5nKCksCiAgICB0aXRsZTogYGNvbnRlbnQke2kgKyAxfWAsCiAgICBkZXNjcmlwdGlvbjogYGRlc2NyaXB0aW9uIG9mIGNvbnRlbnQke2kgKyAxfWAsCiAgICBkaXNhYmxlZDogaSAlIDMgPCAxLAogIH0pOwp9CgpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIGRhdGEoKSB7CiAgICBjb25zdCBkaXNhYmxlZCA9IHJlZjxib29sZWFuPihmYWxzZSk7CgogICAgY29uc3QgdGFyZ2V0S2V5cyA9IHJlZjxzdHJpbmdbXT4oW10pOwoKICAgIGNvbnN0IHNlbGVjdGVkS2V5cyA9IHJlZjxzdHJpbmdbXT4oWycxJywgJzQnXSk7CgogICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKG5leHRUYXJnZXRLZXlzOiBzdHJpbmdbXSwgZGlyZWN0aW9uOiBzdHJpbmcsIG1vdmVLZXlzOiBzdHJpbmdbXSkgPT4gewogICAgICBjb25zb2xlLmxvZygndGFyZ2V0S2V5czogJywgbmV4dFRhcmdldEtleXMpOwogICAgICBjb25zb2xlLmxvZygnZGlyZWN0aW9uOiAnLCBkaXJlY3Rpb24pOwogICAgICBjb25zb2xlLmxvZygnbW92ZUtleXM6ICcsIG1vdmVLZXlzKTsKICAgIH07CiAgICBjb25zdCBoYW5kbGVTZWxlY3RDaGFuZ2UgPSAoc291cmNlU2VsZWN0ZWRLZXlzOiBzdHJpbmdbXSwgdGFyZ2V0U2VsZWN0ZWRLZXlzOiBzdHJpbmdbXSkgPT4gewogICAgICBjb25zb2xlLmxvZygnc291cmNlU2VsZWN0ZWRLZXlzOiAnLCBzb3VyY2VTZWxlY3RlZEtleXMpOwogICAgICBjb25zb2xlLmxvZygndGFyZ2V0U2VsZWN0ZWRLZXlzOiAnLCB0YXJnZXRTZWxlY3RlZEtleXMpOwogICAgfTsKICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9IChkaXJlY3Rpb246IHN0cmluZywgZTogRXZlbnQpID0+IHsKICAgICAgY29uc29sZS5sb2coJ2RpcmVjdGlvbjonLCBkaXJlY3Rpb24pOwogICAgICBjb25zb2xlLmxvZygndGFyZ2V0OicsIGUudGFyZ2V0KTsKICAgIH07CgogICAgcmV0dXJuIHsKICAgICAgbW9ja0RhdGEsCiAgICAgIHRhcmdldEtleXMsCiAgICAgIHNlbGVjdGVkS2V5cywKICAgICAgZGlzYWJsZWQsCiAgICAgIGhhbmRsZUNoYW5nZSwKICAgICAgaGFuZGxlU2VsZWN0Q2hhbmdlLAogICAgICBoYW5kbGVTY3JvbGwsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS10cmFuc2ZlcgogICAgICB2LW1vZGVsOnRhcmdldC1rZXlzPSJ0YXJnZXRLZXlzIgogICAgICB2LW1vZGVsOnNlbGVjdGVkLWtleXM9InNlbGVjdGVkS2V5cyIKICAgICAgOmRhdGEtc291cmNlPSJtb2NrRGF0YSIKICAgICAgOm9uZS13YXk9InRydWUiCiAgICAgIDp0aXRsZXM9IlsnU291cmNlJywgJ1RhcmdldCddIgogICAgICA6cmVuZGVyPSJpdGVtID0+IGl0ZW0udGl0bGUiCiAgICAgIDpkaXNhYmxlZD0iZGlzYWJsZWQiCiAgICAgIEBjaGFuZ2U9ImhhbmRsZUNoYW5nZSIKICAgICAgQHNlbGVjdENoYW5nZT0iaGFuZGxlU2VsZWN0Q2hhbmdlIgogICAgICBAc2Nyb2xsPSJoYW5kbGVTY3JvbGwiCiAgICAvPgogICAgPGEtc3dpdGNoCiAgICAgIHYtbW9kZWw6Y2hlY2tlZD0iZGlzYWJsZWQiCiAgICAgIHVuLWNoZWNrZWQtY2hpbGRyZW49ImVuYWJsZWQiCiAgICAgIGNoZWNrZWQtY2hpbGRyZW49ImRpc2FibGVkIgogICAgICBzdHlsZT0ibWFyZ2luLXRvcDogMTZweCIKICAgIC8+CiAgPC9kaXY+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKY29uc3QgbW9ja0RhdGEgPSBbXTsKZm9yIChsZXQgaSA9IDA7IGkgPCAyMDsgaSsrKSB7CiAgbW9ja0RhdGEucHVzaCh7CiAgICBrZXk6IGkudG9TdHJpbmcoKSwKICAgIHRpdGxlOiBgY29udGVudCR7aSArIDF9YCwKICAgIGRlc2NyaXB0aW9uOiBgZGVzY3JpcHRpb24gb2YgY29udGVudCR7aSArIDF9YCwKICAgIGRpc2FibGVkOiBpICUgMyA8IDEsCiAgfSk7Cn0KZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBkYXRhKCkgewogICAgY29uc3QgZGlzYWJsZWQgPSByZWYoZmFsc2UpOwogICAgY29uc3QgdGFyZ2V0S2V5cyA9IHJlZihbXSk7CiAgICBjb25zdCBzZWxlY3RlZEtleXMgPSByZWYoWycxJywgJzQnXSk7CiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAobmV4dFRhcmdldEtleXMsIGRpcmVjdGlvbiwgbW92ZUtleXMpID0+IHsKICAgICAgY29uc29sZS5sb2coJ3RhcmdldEtleXM6ICcsIG5leHRUYXJnZXRLZXlzKTsKICAgICAgY29uc29sZS5sb2coJ2RpcmVjdGlvbjogJywgZGlyZWN0aW9uKTsKICAgICAgY29uc29sZS5sb2coJ21vdmVLZXlzOiAnLCBtb3ZlS2V5cyk7CiAgICB9OwogICAgY29uc3QgaGFuZGxlU2VsZWN0Q2hhbmdlID0gKHNvdXJjZVNlbGVjdGVkS2V5cywgdGFyZ2V0U2VsZWN0ZWRLZXlzKSA9PiB7CiAgICAgIGNvbnNvbGUubG9nKCdzb3VyY2VTZWxlY3RlZEtleXM6ICcsIHNvdXJjZVNlbGVjdGVkS2V5cyk7CiAgICAgIGNvbnNvbGUubG9nKCd0YXJnZXRTZWxlY3RlZEtleXM6ICcsIHRhcmdldFNlbGVjdGVkS2V5cyk7CiAgICB9OwogICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKGRpcmVjdGlvbiwgZSkgPT4gewogICAgICBjb25zb2xlLmxvZygnZGlyZWN0aW9uOicsIGRpcmVjdGlvbik7CiAgICAgIGNvbnNvbGUubG9nKCd0YXJnZXQ6JywgZS50YXJnZXQpOwogICAgfTsKICAgIHJldHVybiB7CiAgICAgIG1vY2tEYXRhLAogICAgICB0YXJnZXRLZXlzLAogICAgICBzZWxlY3RlZEtleXMsCiAgICAgIGRpc2FibGVkLAogICAgICBoYW5kbGVDaGFuZ2UsCiAgICAgIGhhbmRsZVNlbGVjdENoYW5nZSwKICAgICAgaGFuZGxlU2Nyb2xsLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+",isdemo:!1}},{default:i(()=>[n("div",null,[d(o,{"target-keys":s.targetKeys,"onUpdate:target-keys":a[0]||(a[0]=c=>s.targetKeys=c),"selected-keys":s.selectedKeys,"onUpdate:selected-keys":a[1]||(a[1]=c=>s.selectedKeys=c),"data-source":s.mockData,"one-way":!0,titles:["Source","Target"],render:c=>c.title,disabled:s.disabled,onChange:s.handleChange,onSelectChange:s.handleSelectChange,onScroll:s.handleScroll},null,8,["target-keys","selected-keys","data-source","render","disabled","onChange","onSelectChange","onScroll"]),d(e,{checked:s.disabled,"onUpdate:checked":a[2]||(a[2]=c=>s.disabled=c),"un-checked-children":"enabled","checked-children":"disabled",style:{"margin-top":"16px"}},null,8,["checked"])])]),htmlCode:i(()=>[$]),jsVersionHtml:i(()=>[nn]),_:1},8,["jsfiddle"])}const sn=b(_,[["render",tn]]),an=G({setup(){const s=g([]),a=g([]);S(()=>{l()});const l=()=>{const o=[],e=[];for(let p=0;p<20;p++){const c={key:p.toString(),title:`content${p+1}`,description:`description of content${p+1}`,chosen:Math.random()*2>1};c.chosen&&o.push(c.key),e.push(c)}s.value=e,a.value=o};return{mockData:s,targetKeys:a,filterOption:(o,e)=>e.description.indexOf(o)>-1,handleChange:(o,e,p)=>{console.log(o,e,p)},handleSearch:(o,e)=>{console.log("search:",o,e)}}}}),on=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-transfer")]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("target-keys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("targetKeys"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":data-source"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mockData"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"show-search"),t(`
    `),n("span",{class:"token attr-name"},":filter-option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("filterOption"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":render"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item => item.title"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleChange"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@search"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleSearch"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" onMounted"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"interface"),t(),n("span",{class:"token class-name"},"MockData"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token literal-property property"},"description"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token literal-property property"},"chosen"),n("span",{class:"token operator"},":"),t(" boolean"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" mockData "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("MockData"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(" targetKeys "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token function"},"onMounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token function"},"getMock"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"getMock"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" keys "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" mData "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"const"),t(" data "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(" i"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"content"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"description"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"description of content"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"chosen"),n("span",{class:"token operator"},":"),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"*"),t(),n("span",{class:"token number"},"2"),t(),n("span",{class:"token operator"},">"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("data"),n("span",{class:"token punctuation"},"."),t("chosen"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
          keys`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),t("data"),n("span",{class:"token punctuation"},"."),t("key"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),t(`
        mData`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),t("data"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
      mockData`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(" mData"),n("span",{class:"token punctuation"},";"),t(`
      targetKeys`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(" keys"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"filterOption"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"inputValue"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"option"),n("span",{class:"token operator"},":"),t(" MockData")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"return"),t(" option"),n("span",{class:"token punctuation"},"."),t("description"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),t("inputValue"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},">"),t(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"keys"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"direction"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"moveKeys"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("keys"),n("span",{class:"token punctuation"},","),t(" direction"),n("span",{class:"token punctuation"},","),t(" moveKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleSearch"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"dir"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(" string")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'search:'"),n("span",{class:"token punctuation"},","),t(" dir"),n("span",{class:"token punctuation"},","),t(" value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      mockData`),n("span",{class:"token punctuation"},","),t(`
      targetKeys`),n("span",{class:"token punctuation"},","),t(`
      filterOption`),n("span",{class:"token punctuation"},","),t(`
      handleChange`),n("span",{class:"token punctuation"},","),t(`
      handleSearch`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),en=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-transfer")]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("target-keys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("targetKeys"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":data-source"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mockData"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"show-search"),t(`
    `),n("span",{class:"token attr-name"},":filter-option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("filterOption"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":render"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item => item.title"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleChange"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@search"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleSearch"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" onMounted"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" mockData "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" targetKeys "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token function"},"onMounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token function"},"getMock"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"getMock"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" keys "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" mData "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"const"),t(" data "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(" i"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"content"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"description"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"description of content"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"chosen"),n("span",{class:"token operator"},":"),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"*"),t(),n("span",{class:"token number"},"2"),t(),n("span",{class:"token operator"},">"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("data"),n("span",{class:"token punctuation"},"."),t("chosen"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
          keys`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),t("data"),n("span",{class:"token punctuation"},"."),t("key"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),t(`
        mData`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),t("data"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
      mockData`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(" mData"),n("span",{class:"token punctuation"},";"),t(`
      targetKeys`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(" keys"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"filterOption"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("inputValue"),n("span",{class:"token punctuation"},","),t(" option")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"return"),t(" option"),n("span",{class:"token punctuation"},"."),t("description"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),t("inputValue"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},">"),t(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("keys"),n("span",{class:"token punctuation"},","),t(" direction"),n("span",{class:"token punctuation"},","),t(" moveKeys")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("keys"),n("span",{class:"token punctuation"},","),t(" direction"),n("span",{class:"token punctuation"},","),t(" moveKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleSearch"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("dir"),n("span",{class:"token punctuation"},","),t(" value")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'search:'"),n("span",{class:"token punctuation"},","),t(" dir"),n("span",{class:"token punctuation"},","),t(" value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      mockData`),n("span",{class:"token punctuation"},","),t(`
      targetKeys`),n("span",{class:"token punctuation"},","),t(`
      filterOption`),n("span",{class:"token punctuation"},","),t(`
      handleChange`),n("span",{class:"token punctuation"},","),t(`
      handleSearch`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function cn(s,a,l,I,k,r){const o=u("a-transfer"),e=u("demo-box");return A(),h(e,{jsfiddle:{us:"Transfer with a search box.",cn:"\u5E26\u641C\u7D22\u6846\u7684\u7A7F\u68AD\u6846\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u641C\u7D22\u51FD\u6570\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u5E26\u641C\u7D22\u6846\u7684\u7A7F\u68AD\u6846\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u641C\u7D22\u51FD\u6570\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Transfer with a search box.</p>
`,order:2,title:{"zh-CN":"\u5E26\u641C\u7D22\u6846","en-US":"Search"},relativePath:"components/transfer/demo/search.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXRyYW5zZmVyCiAgICB2LW1vZGVsOnRhcmdldC1rZXlzPSJ0YXJnZXRLZXlzIgogICAgOmRhdGEtc291cmNlPSJtb2NrRGF0YSIKICAgIHNob3ctc2VhcmNoCiAgICA6ZmlsdGVyLW9wdGlvbj0iZmlsdGVyT3B0aW9uIgogICAgOnJlbmRlcj0iaXRlbSA9PiBpdGVtLnRpdGxlIgogICAgQGNoYW5nZT0iaGFuZGxlQ2hhbmdlIgogICAgQHNlYXJjaD0iaGFuZGxlU2VhcmNoIgogIC8+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIG9uTW91bnRlZCwgcmVmIH0gZnJvbSAndnVlJzsKaW50ZXJmYWNlIE1vY2tEYXRhIHsKICBrZXk6IHN0cmluZzsKICB0aXRsZTogc3RyaW5nOwogIGRlc2NyaXB0aW9uOiBzdHJpbmc7CiAgY2hvc2VuOiBib29sZWFuOwp9CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBtb2NrRGF0YSA9IHJlZjxNb2NrRGF0YVtdPihbXSk7CgogICAgY29uc3QgdGFyZ2V0S2V5cyA9IHJlZjxzdHJpbmdbXT4oW10pOwogICAgb25Nb3VudGVkKCgpID0+IHsKICAgICAgZ2V0TW9jaygpOwogICAgfSk7CiAgICBjb25zdCBnZXRNb2NrID0gKCkgPT4gewogICAgICBjb25zdCBrZXlzID0gW107CiAgICAgIGNvbnN0IG1EYXRhID0gW107CiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjA7IGkrKykgewogICAgICAgIGNvbnN0IGRhdGEgPSB7CiAgICAgICAgICBrZXk6IGkudG9TdHJpbmcoKSwKICAgICAgICAgIHRpdGxlOiBgY29udGVudCR7aSArIDF9YCwKICAgICAgICAgIGRlc2NyaXB0aW9uOiBgZGVzY3JpcHRpb24gb2YgY29udGVudCR7aSArIDF9YCwKICAgICAgICAgIGNob3NlbjogTWF0aC5yYW5kb20oKSAqIDIgPiAxLAogICAgICAgIH07CiAgICAgICAgaWYgKGRhdGEuY2hvc2VuKSB7CiAgICAgICAgICBrZXlzLnB1c2goZGF0YS5rZXkpOwogICAgICAgIH0KICAgICAgICBtRGF0YS5wdXNoKGRhdGEpOwogICAgICB9CiAgICAgIG1vY2tEYXRhLnZhbHVlID0gbURhdGE7CiAgICAgIHRhcmdldEtleXMudmFsdWUgPSBrZXlzOwogICAgfTsKICAgIGNvbnN0IGZpbHRlck9wdGlvbiA9IChpbnB1dFZhbHVlOiBzdHJpbmcsIG9wdGlvbjogTW9ja0RhdGEpID0+IHsKICAgICAgcmV0dXJuIG9wdGlvbi5kZXNjcmlwdGlvbi5pbmRleE9mKGlucHV0VmFsdWUpID4gLTE7CiAgICB9OwogICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGtleXM6IHN0cmluZ1tdLCBkaXJlY3Rpb246IHN0cmluZywgbW92ZUtleXM6IHN0cmluZ1tdKSA9PiB7CiAgICAgIGNvbnNvbGUubG9nKGtleXMsIGRpcmVjdGlvbiwgbW92ZUtleXMpOwogICAgfTsKCiAgICBjb25zdCBoYW5kbGVTZWFyY2ggPSAoZGlyOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+IHsKICAgICAgY29uc29sZS5sb2coJ3NlYXJjaDonLCBkaXIsIHZhbHVlKTsKICAgIH07CiAgICByZXR1cm4gewogICAgICBtb2NrRGF0YSwKICAgICAgdGFyZ2V0S2V5cywKICAgICAgZmlsdGVyT3B0aW9uLAogICAgICBoYW5kbGVDaGFuZ2UsCiAgICAgIGhhbmRsZVNlYXJjaCwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXRyYW5zZmVyCiAgICB2LW1vZGVsOnRhcmdldC1rZXlzPSJ0YXJnZXRLZXlzIgogICAgOmRhdGEtc291cmNlPSJtb2NrRGF0YSIKICAgIHNob3ctc2VhcmNoCiAgICA6ZmlsdGVyLW9wdGlvbj0iZmlsdGVyT3B0aW9uIgogICAgOnJlbmRlcj0iaXRlbSA9PiBpdGVtLnRpdGxlIgogICAgQGNoYW5nZT0iaGFuZGxlQ2hhbmdlIgogICAgQHNlYXJjaD0iaGFuZGxlU2VhcmNoIgogIC8+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgb25Nb3VudGVkLCByZWYgfSBmcm9tICd2dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgbW9ja0RhdGEgPSByZWYoW10pOwogICAgY29uc3QgdGFyZ2V0S2V5cyA9IHJlZihbXSk7CiAgICBvbk1vdW50ZWQoKCkgPT4gewogICAgICBnZXRNb2NrKCk7CiAgICB9KTsKICAgIGNvbnN0IGdldE1vY2sgPSAoKSA9PiB7CiAgICAgIGNvbnN0IGtleXMgPSBbXTsKICAgICAgY29uc3QgbURhdGEgPSBbXTsKICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyMDsgaSsrKSB7CiAgICAgICAgY29uc3QgZGF0YSA9IHsKICAgICAgICAgIGtleTogaS50b1N0cmluZygpLAogICAgICAgICAgdGl0bGU6IGBjb250ZW50JHtpICsgMX1gLAogICAgICAgICAgZGVzY3JpcHRpb246IGBkZXNjcmlwdGlvbiBvZiBjb250ZW50JHtpICsgMX1gLAogICAgICAgICAgY2hvc2VuOiBNYXRoLnJhbmRvbSgpICogMiA+IDEsCiAgICAgICAgfTsKICAgICAgICBpZiAoZGF0YS5jaG9zZW4pIHsKICAgICAgICAgIGtleXMucHVzaChkYXRhLmtleSk7CiAgICAgICAgfQogICAgICAgIG1EYXRhLnB1c2goZGF0YSk7CiAgICAgIH0KICAgICAgbW9ja0RhdGEudmFsdWUgPSBtRGF0YTsKICAgICAgdGFyZ2V0S2V5cy52YWx1ZSA9IGtleXM7CiAgICB9OwogICAgY29uc3QgZmlsdGVyT3B0aW9uID0gKGlucHV0VmFsdWUsIG9wdGlvbikgPT4gewogICAgICByZXR1cm4gb3B0aW9uLmRlc2NyaXB0aW9uLmluZGV4T2YoaW5wdXRWYWx1ZSkgPiAtMTsKICAgIH07CiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoa2V5cywgZGlyZWN0aW9uLCBtb3ZlS2V5cykgPT4gewogICAgICBjb25zb2xlLmxvZyhrZXlzLCBkaXJlY3Rpb24sIG1vdmVLZXlzKTsKICAgIH07CiAgICBjb25zdCBoYW5kbGVTZWFyY2ggPSAoZGlyLCB2YWx1ZSkgPT4gewogICAgICBjb25zb2xlLmxvZygnc2VhcmNoOicsIGRpciwgdmFsdWUpOwogICAgfTsKICAgIHJldHVybiB7CiAgICAgIG1vY2tEYXRhLAogICAgICB0YXJnZXRLZXlzLAogICAgICBmaWx0ZXJPcHRpb24sCiAgICAgIGhhbmRsZUNoYW5nZSwKICAgICAgaGFuZGxlU2VhcmNoLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+",isdemo:!1}},{default:i(()=>[d(o,{"target-keys":s.targetKeys,"onUpdate:target-keys":a[0]||(a[0]=p=>s.targetKeys=p),"data-source":s.mockData,"show-search":"","filter-option":s.filterOption,render:p=>p.title,onChange:s.handleChange,onSearch:s.handleSearch},null,8,["target-keys","data-source","filter-option","render","onChange","onSearch"])]),htmlCode:i(()=>[on]),jsVersionHtml:i(()=>[en]),_:1},8,["jsfiddle"])}const pn=b(an,[["render",cn]]),ln=G({setup(){const s=g([]),a=g([]);S(()=>{l()});const l=()=>{const k=[],r=[];for(let o=0;o<20;o++){const e={key:o.toString(),title:`content${o+1}`,description:`description of content${o+1}`,chosen:Math.random()*2>1};e.chosen&&k.push(e.key),r.push(e)}s.value=r,a.value=k};return{mockData:s,targetKeys:a,handleChange:(k,r,o)=>{console.log(k,r,o)},getMock:l}}}),un=n("span",null,"\u6CA1\u6570\u636E",-1),kn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-transfer")]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("target-keys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("targetKeys"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":data-source"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mockData"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"show-search"),t(`
    `),n("span",{class:"token attr-name"},":list-style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(`{
      width: '250px',
      height: '300px',
    }`),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":operations"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("['to right', 'to left']"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":render"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item => `${item.title}-${item.description}`"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleChange"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#footer"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ direction }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(`
        `),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("direction === 'left'"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("small"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"float"),n("span",{class:"token punctuation"},":"),t(" left"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),t(" 5px")]),n("span",{class:"token punctuation"},'"')])]),t(`
        `),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("getMock"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token punctuation"},">")]),t(`
        left reload
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(`
        `),n("span",{class:"token attr-name"},"v-else-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("direction === 'right'"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("small"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"float"),n("span",{class:"token punctuation"},":"),t(" right"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),t(" 5px")]),n("span",{class:"token punctuation"},'"')])]),t(`
        `),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("getMock"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token punctuation"},">")]),t(`
        right reload
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#notFoundContent"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),n("span",{class:"token punctuation"},">")]),t("\u6CA1\u6570\u636E"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-transfer")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t(" onMounted "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"interface"),t(),n("span",{class:"token class-name"},"MockData"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token literal-property property"},"description"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token literal-property property"},"chosen"),n("span",{class:"token operator"},":"),t(" boolean"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" mockData "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("MockData"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(" targetKeys "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token function"},"onMounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token function"},"getMock"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"getMock"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" keys "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" mData "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"const"),t(" data "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(" i"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"content"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"description"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"description of content"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"chosen"),n("span",{class:"token operator"},":"),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"*"),t(),n("span",{class:"token number"},"2"),t(),n("span",{class:"token operator"},">"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("data"),n("span",{class:"token punctuation"},"."),t("chosen"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
          keys`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),t("data"),n("span",{class:"token punctuation"},"."),t("key"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),t(`
        mData`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),t("data"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
      mockData`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(" mData"),n("span",{class:"token punctuation"},";"),t(`
      targetKeys`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(" keys"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"keys"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"direction"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"moveKeys"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("keys"),n("span",{class:"token punctuation"},","),t(" direction"),n("span",{class:"token punctuation"},","),t(" moveKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      mockData`),n("span",{class:"token punctuation"},","),t(`
      targetKeys`),n("span",{class:"token punctuation"},","),t(`
      handleChange`),n("span",{class:"token punctuation"},","),t(`
      getMock`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),rn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-transfer")]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("target-keys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("targetKeys"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":data-source"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mockData"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"show-search"),t(`
    `),n("span",{class:"token attr-name"},":list-style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(`{
      width: '250px',
      height: '300px',
    }`),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":operations"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("['to right', 'to left']"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":render"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item => `${item.title}-${item.description}`"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleChange"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#footer"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ direction }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(`
        `),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("direction === 'left'"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("small"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"float"),n("span",{class:"token punctuation"},":"),t(" left"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),t(" 5px")]),n("span",{class:"token punctuation"},'"')])]),t(`
        `),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("getMock"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token punctuation"},">")]),t(`
        left reload
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(`
        `),n("span",{class:"token attr-name"},"v-else-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("direction === 'right'"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("small"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"float"),n("span",{class:"token punctuation"},":"),t(" right"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),t(" 5px")]),n("span",{class:"token punctuation"},'"')])]),t(`
        `),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("getMock"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token punctuation"},">")]),t(`
        right reload
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#notFoundContent"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),n("span",{class:"token punctuation"},">")]),t("\u6CA1\u6570\u636E"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-transfer")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t(" onMounted "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" mockData "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" targetKeys "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token function"},"onMounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token function"},"getMock"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"getMock"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" keys "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" mData "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"const"),t(" data "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(" i"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"content"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"description"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"description of content"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"chosen"),n("span",{class:"token operator"},":"),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"*"),t(),n("span",{class:"token number"},"2"),t(),n("span",{class:"token operator"},">"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("data"),n("span",{class:"token punctuation"},"."),t("chosen"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
          keys`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),t("data"),n("span",{class:"token punctuation"},"."),t("key"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),t(`
        mData`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),t("data"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
      mockData`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(" mData"),n("span",{class:"token punctuation"},";"),t(`
      targetKeys`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(" keys"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("keys"),n("span",{class:"token punctuation"},","),t(" direction"),n("span",{class:"token punctuation"},","),t(" moveKeys")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("keys"),n("span",{class:"token punctuation"},","),t(" direction"),n("span",{class:"token punctuation"},","),t(" moveKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      mockData`),n("span",{class:"token punctuation"},","),t(`
      targetKeys`),n("span",{class:"token punctuation"},","),t(`
      handleChange`),n("span",{class:"token punctuation"},","),t(`
      getMock`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function dn(s,a,l,I,k,r){const o=u("a-button"),e=u("a-transfer"),p=u("demo-box");return A(),h(p,{jsfiddle:{us:"You can customize the labels of the transfer buttons, the width and height of the columns, and what should be displayed in the footer.",cn:"\u7A7F\u68AD\u6846\u9AD8\u7EA7\u7528\u6CD5\uFF0C\u53EF\u914D\u7F6E\u64CD\u4F5C\u6587\u6848\uFF0C\u53EF\u5B9A\u5236\u5BBD\u9AD8\uFF0C\u53EF\u5BF9\u5E95\u90E8\u8FDB\u884C\u81EA\u5B9A\u4E49\u6E32\u67D3\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u7A7F\u68AD\u6846\u9AD8\u7EA7\u7528\u6CD5\uFF0C\u53EF\u914D\u7F6E\u64CD\u4F5C\u6587\u6848\uFF0C\u53EF\u5B9A\u5236\u5BBD\u9AD8\uFF0C\u53EF\u5BF9\u5E95\u90E8\u8FDB\u884C\u81EA\u5B9A\u4E49\u6E32\u67D3\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>You can customize the labels of the transfer buttons, the width and height of the columns, and what should be displayed in the footer.</p>
`,order:3,title:{"zh-CN":"\u9AD8\u7EA7\u7528\u6CD5","en-US":"Advanced"},relativePath:"components/transfer/demo/advanced.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXRyYW5zZmVyCiAgICB2LW1vZGVsOnRhcmdldC1rZXlzPSJ0YXJnZXRLZXlzIgogICAgOmRhdGEtc291cmNlPSJtb2NrRGF0YSIKICAgIHNob3ctc2VhcmNoCiAgICA6bGlzdC1zdHlsZT0iewogICAgICB3aWR0aDogJzI1MHB4JywKICAgICAgaGVpZ2h0OiAnMzAwcHgnLAogICAgfSIKICAgIDpvcGVyYXRpb25zPSJbJ3RvIHJpZ2h0JywgJ3RvIGxlZnQnXSIKICAgIDpyZW5kZXI9Iml0ZW0gPT4gYCR7aXRlbS50aXRsZX0tJHtpdGVtLmRlc2NyaXB0aW9ufWAiCiAgICBAY2hhbmdlPSJoYW5kbGVDaGFuZ2UiCiAgPgogICAgPHRlbXBsYXRlICNmb290ZXI9InsgZGlyZWN0aW9uIH0iPgogICAgICA8YS1idXR0b24KICAgICAgICB2LWlmPSJkaXJlY3Rpb24gPT09ICdsZWZ0JyIKICAgICAgICBzaXplPSJzbWFsbCIKICAgICAgICBzdHlsZT0iZmxvYXQ6IGxlZnQ7IG1hcmdpbjogNXB4IgogICAgICAgIEBjbGljaz0iZ2V0TW9jayIKICAgICAgPgogICAgICAgIGxlZnQgcmVsb2FkCiAgICAgIDwvYS1idXR0b24+CiAgICAgIDxhLWJ1dHRvbgogICAgICAgIHYtZWxzZS1pZj0iZGlyZWN0aW9uID09PSAncmlnaHQnIgogICAgICAgIHNpemU9InNtYWxsIgogICAgICAgIHN0eWxlPSJmbG9hdDogcmlnaHQ7IG1hcmdpbjogNXB4IgogICAgICAgIEBjbGljaz0iZ2V0TW9jayIKICAgICAgPgogICAgICAgIHJpZ2h0IHJlbG9hZAogICAgICA8L2EtYnV0dG9uPgogICAgPC90ZW1wbGF0ZT4KICAgIDx0ZW1wbGF0ZSAjbm90Rm91bmRDb250ZW50PgogICAgICA8c3Bhbj7msqHmlbDmja48L3NwYW4+CiAgICA8L3RlbXBsYXRlPgogIDwvYS10cmFuc2Zlcj4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmLCBvbk1vdW50ZWQgfSBmcm9tICd2dWUnOwppbnRlcmZhY2UgTW9ja0RhdGEgewogIGtleTogc3RyaW5nOwogIHRpdGxlOiBzdHJpbmc7CiAgZGVzY3JpcHRpb246IHN0cmluZzsKICBjaG9zZW46IGJvb2xlYW47Cn0KZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IG1vY2tEYXRhID0gcmVmPE1vY2tEYXRhW10+KFtdKTsKCiAgICBjb25zdCB0YXJnZXRLZXlzID0gcmVmPHN0cmluZ1tdPihbXSk7CiAgICBvbk1vdW50ZWQoKCkgPT4gewogICAgICBnZXRNb2NrKCk7CiAgICB9KTsKICAgIGNvbnN0IGdldE1vY2sgPSAoKSA9PiB7CiAgICAgIGNvbnN0IGtleXMgPSBbXTsKICAgICAgY29uc3QgbURhdGEgPSBbXTsKICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyMDsgaSsrKSB7CiAgICAgICAgY29uc3QgZGF0YSA9IHsKICAgICAgICAgIGtleTogaS50b1N0cmluZygpLAogICAgICAgICAgdGl0bGU6IGBjb250ZW50JHtpICsgMX1gLAogICAgICAgICAgZGVzY3JpcHRpb246IGBkZXNjcmlwdGlvbiBvZiBjb250ZW50JHtpICsgMX1gLAogICAgICAgICAgY2hvc2VuOiBNYXRoLnJhbmRvbSgpICogMiA+IDEsCiAgICAgICAgfTsKICAgICAgICBpZiAoZGF0YS5jaG9zZW4pIHsKICAgICAgICAgIGtleXMucHVzaChkYXRhLmtleSk7CiAgICAgICAgfQogICAgICAgIG1EYXRhLnB1c2goZGF0YSk7CiAgICAgIH0KICAgICAgbW9ja0RhdGEudmFsdWUgPSBtRGF0YTsKICAgICAgdGFyZ2V0S2V5cy52YWx1ZSA9IGtleXM7CiAgICB9OwogICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGtleXM6IHN0cmluZ1tdLCBkaXJlY3Rpb246IHN0cmluZywgbW92ZUtleXM6IHN0cmluZ1tdKSA9PiB7CiAgICAgIGNvbnNvbGUubG9nKGtleXMsIGRpcmVjdGlvbiwgbW92ZUtleXMpOwogICAgfTsKICAgIHJldHVybiB7CiAgICAgIG1vY2tEYXRhLAogICAgICB0YXJnZXRLZXlzLAogICAgICBoYW5kbGVDaGFuZ2UsCiAgICAgIGdldE1vY2ssCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXRyYW5zZmVyCiAgICB2LW1vZGVsOnRhcmdldC1rZXlzPSJ0YXJnZXRLZXlzIgogICAgOmRhdGEtc291cmNlPSJtb2NrRGF0YSIKICAgIHNob3ctc2VhcmNoCiAgICA6bGlzdC1zdHlsZT0iewogICAgICB3aWR0aDogJzI1MHB4JywKICAgICAgaGVpZ2h0OiAnMzAwcHgnLAogICAgfSIKICAgIDpvcGVyYXRpb25zPSJbJ3RvIHJpZ2h0JywgJ3RvIGxlZnQnXSIKICAgIDpyZW5kZXI9Iml0ZW0gPT4gYCR7aXRlbS50aXRsZX0tJHtpdGVtLmRlc2NyaXB0aW9ufWAiCiAgICBAY2hhbmdlPSJoYW5kbGVDaGFuZ2UiCiAgPgogICAgPHRlbXBsYXRlICNmb290ZXI9InsgZGlyZWN0aW9uIH0iPgogICAgICA8YS1idXR0b24KICAgICAgICB2LWlmPSJkaXJlY3Rpb24gPT09ICdsZWZ0JyIKICAgICAgICBzaXplPSJzbWFsbCIKICAgICAgICBzdHlsZT0iZmxvYXQ6IGxlZnQ7IG1hcmdpbjogNXB4IgogICAgICAgIEBjbGljaz0iZ2V0TW9jayIKICAgICAgPgogICAgICAgIGxlZnQgcmVsb2FkCiAgICAgIDwvYS1idXR0b24+CiAgICAgIDxhLWJ1dHRvbgogICAgICAgIHYtZWxzZS1pZj0iZGlyZWN0aW9uID09PSAncmlnaHQnIgogICAgICAgIHNpemU9InNtYWxsIgogICAgICAgIHN0eWxlPSJmbG9hdDogcmlnaHQ7IG1hcmdpbjogNXB4IgogICAgICAgIEBjbGljaz0iZ2V0TW9jayIKICAgICAgPgogICAgICAgIHJpZ2h0IHJlbG9hZAogICAgICA8L2EtYnV0dG9uPgogICAgPC90ZW1wbGF0ZT4KICAgIDx0ZW1wbGF0ZSAjbm90Rm91bmRDb250ZW50PgogICAgICA8c3Bhbj7msqHmlbDmja48L3NwYW4+CiAgICA8L3RlbXBsYXRlPgogIDwvYS10cmFuc2Zlcj4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYsIG9uTW91bnRlZCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBtb2NrRGF0YSA9IHJlZihbXSk7CiAgICBjb25zdCB0YXJnZXRLZXlzID0gcmVmKFtdKTsKICAgIG9uTW91bnRlZCgoKSA9PiB7CiAgICAgIGdldE1vY2soKTsKICAgIH0pOwogICAgY29uc3QgZ2V0TW9jayA9ICgpID0+IHsKICAgICAgY29uc3Qga2V5cyA9IFtdOwogICAgICBjb25zdCBtRGF0YSA9IFtdOwogICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDIwOyBpKyspIHsKICAgICAgICBjb25zdCBkYXRhID0gewogICAgICAgICAga2V5OiBpLnRvU3RyaW5nKCksCiAgICAgICAgICB0aXRsZTogYGNvbnRlbnQke2kgKyAxfWAsCiAgICAgICAgICBkZXNjcmlwdGlvbjogYGRlc2NyaXB0aW9uIG9mIGNvbnRlbnQke2kgKyAxfWAsCiAgICAgICAgICBjaG9zZW46IE1hdGgucmFuZG9tKCkgKiAyID4gMSwKICAgICAgICB9OwogICAgICAgIGlmIChkYXRhLmNob3NlbikgewogICAgICAgICAga2V5cy5wdXNoKGRhdGEua2V5KTsKICAgICAgICB9CiAgICAgICAgbURhdGEucHVzaChkYXRhKTsKICAgICAgfQogICAgICBtb2NrRGF0YS52YWx1ZSA9IG1EYXRhOwogICAgICB0YXJnZXRLZXlzLnZhbHVlID0ga2V5czsKICAgIH07CiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoa2V5cywgZGlyZWN0aW9uLCBtb3ZlS2V5cykgPT4gewogICAgICBjb25zb2xlLmxvZyhrZXlzLCBkaXJlY3Rpb24sIG1vdmVLZXlzKTsKICAgIH07CiAgICByZXR1cm4gewogICAgICBtb2NrRGF0YSwKICAgICAgdGFyZ2V0S2V5cywKICAgICAgaGFuZGxlQ2hhbmdlLAogICAgICBnZXRNb2NrLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+",isdemo:!1}},{default:i(()=>[d(e,{"target-keys":s.targetKeys,"onUpdate:target-keys":a[0]||(a[0]=c=>s.targetKeys=c),"data-source":s.mockData,"show-search":"","list-style":{width:"250px",height:"300px"},operations:["to right","to left"],render:c=>`${c.title}-${c.description}`,onChange:s.handleChange},{footer:i(({direction:c})=>[c==="left"?(A(),h(o,{key:0,size:"small",style:{float:"left",margin:"5px"},onClick:s.getMock},{default:i(()=>[t(" left reload ")]),_:1},8,["onClick"])):c==="right"?(A(),h(o,{key:1,size:"small",style:{float:"right",margin:"5px"},onClick:s.getMock},{default:i(()=>[t(" right reload ")]),_:1},8,["onClick"])):X("",!0)]),notFoundContent:i(()=>[un]),_:1},8,["target-keys","data-source","render","onChange"])]),htmlCode:i(()=>[kn]),jsVersionHtml:i(()=>[rn]),_:1},8,["jsfiddle"])}const gn=b(ln,[["render",dn]]),In=G({setup(){const s=g([]),a=g([]);S(()=>{l()});const l=()=>{const k=[],r=[];for(let o=0;o<20;o++){const e={key:o.toString(),title:`content${o+1}`,description:`description of content${o+1}`,chosen:Math.random()*2>1};e.chosen&&k.push(e.key),r.push(e)}s.value=r,a.value=k};return{mockData:s,targetKeys:a,handleChange:(k,r,o)=>{console.log(k,r,o)},getMock:l}}}),Cn={class:"custom-item",style:{color:"red"}},mn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-transfer")]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("target-keys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("targetKeys"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":data-source"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mockData"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":list-style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(`{
      width: '300px',
      height: '300px',
    }`),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleChange"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#render"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("custom-item"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" red")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t("{{ item.title }} - {{ item.description }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-transfer")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t(" onMounted "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"interface"),t(),n("span",{class:"token class-name"},"MockData"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token literal-property property"},"description"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token literal-property property"},"chosen"),n("span",{class:"token operator"},":"),t(" boolean"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" mockData "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("MockData"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(" targetKeys "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token function"},"onMounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token function"},"getMock"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"getMock"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" keys "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" mData "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"const"),t(" data "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(" i"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"content"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"description"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"description of content"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"chosen"),n("span",{class:"token operator"},":"),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"*"),t(),n("span",{class:"token number"},"2"),t(),n("span",{class:"token operator"},">"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("data"),n("span",{class:"token punctuation"},"."),t("chosen"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
          keys`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),t("data"),n("span",{class:"token punctuation"},"."),t("key"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),t(`
        mData`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),t("data"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
      mockData`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(" mData"),n("span",{class:"token punctuation"},";"),t(`
      targetKeys`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(" keys"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"keys"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"direction"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"moveKeys"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("keys"),n("span",{class:"token punctuation"},","),t(" direction"),n("span",{class:"token punctuation"},","),t(" moveKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      mockData`),n("span",{class:"token punctuation"},","),t(`
      targetKeys`),n("span",{class:"token punctuation"},","),t(`
      handleChange`),n("span",{class:"token punctuation"},","),t(`
      getMock`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),An=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-transfer")]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("target-keys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("targetKeys"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":data-source"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mockData"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":list-style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(`{
      width: '300px',
      height: '300px',
    }`),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleChange"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#render"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("custom-item"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" red")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t("{{ item.title }} - {{ item.description }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-transfer")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t(" onMounted "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" mockData "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" targetKeys "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token function"},"onMounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token function"},"getMock"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"getMock"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" keys "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" mData "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"const"),t(" data "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(" i"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"content"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"description"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"description of content"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"chosen"),n("span",{class:"token operator"},":"),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"*"),t(),n("span",{class:"token number"},"2"),t(),n("span",{class:"token operator"},">"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("data"),n("span",{class:"token punctuation"},"."),t("chosen"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
          keys`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),t("data"),n("span",{class:"token punctuation"},"."),t("key"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),t(`
        mData`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),t("data"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
      mockData`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(" mData"),n("span",{class:"token punctuation"},";"),t(`
      targetKeys`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(" keys"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("keys"),n("span",{class:"token punctuation"},","),t(" direction"),n("span",{class:"token punctuation"},","),t(" moveKeys")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("keys"),n("span",{class:"token punctuation"},","),t(" direction"),n("span",{class:"token punctuation"},","),t(" moveKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      mockData`),n("span",{class:"token punctuation"},","),t(`
      targetKeys`),n("span",{class:"token punctuation"},","),t(`
      handleChange`),n("span",{class:"token punctuation"},","),t(`
      getMock`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function hn(s,a,l,I,k,r){const o=u("a-transfer"),e=u("demo-box");return A(),h(e,{jsfiddle:{us:"Custom each Transfer Item, and in this way you can render a complex datasource.",cn:"\u81EA\u5B9A\u4E49\u6E32\u67D3\u6BCF\u4E00\u4E2A Transfer Item\uFF0C\u53EF\u7528\u4E8E\u6E32\u67D3\u590D\u6742\u6570\u636E\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u81EA\u5B9A\u4E49\u6E32\u67D3\u6BCF\u4E00\u4E2A Transfer Item\uFF0C\u53EF\u7528\u4E8E\u6E32\u67D3\u590D\u6742\u6570\u636E\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Custom each Transfer Item, and in this way you can render a complex datasource.</p>
`,order:4,title:{"zh-CN":"\u81EA\u5B9A\u4E49\u6E32\u67D3\u884C\u6570\u636E","en-US":"Custom datasource"},relativePath:"components/transfer/demo/custom-item.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXRyYW5zZmVyCiAgICB2LW1vZGVsOnRhcmdldC1rZXlzPSJ0YXJnZXRLZXlzIgogICAgOmRhdGEtc291cmNlPSJtb2NrRGF0YSIKICAgIDpsaXN0LXN0eWxlPSJ7CiAgICAgIHdpZHRoOiAnMzAwcHgnLAogICAgICBoZWlnaHQ6ICczMDBweCcsCiAgICB9IgogICAgQGNoYW5nZT0iaGFuZGxlQ2hhbmdlIgogID4KICAgIDx0ZW1wbGF0ZSAjcmVuZGVyPSJpdGVtIj4KICAgICAgPHNwYW4gY2xhc3M9ImN1c3RvbS1pdGVtIiBzdHlsZT0iY29sb3I6IHJlZCI+e3sgaXRlbS50aXRsZSB9fSAtIHt7IGl0ZW0uZGVzY3JpcHRpb24gfX08L3NwYW4+CiAgICA8L3RlbXBsYXRlPgogIDwvYS10cmFuc2Zlcj4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmLCBvbk1vdW50ZWQgfSBmcm9tICd2dWUnOwppbnRlcmZhY2UgTW9ja0RhdGEgewogIGtleTogc3RyaW5nOwogIHRpdGxlOiBzdHJpbmc7CiAgZGVzY3JpcHRpb246IHN0cmluZzsKICBjaG9zZW46IGJvb2xlYW47Cn0KZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IG1vY2tEYXRhID0gcmVmPE1vY2tEYXRhW10+KFtdKTsKCiAgICBjb25zdCB0YXJnZXRLZXlzID0gcmVmPHN0cmluZ1tdPihbXSk7CiAgICBvbk1vdW50ZWQoKCkgPT4gewogICAgICBnZXRNb2NrKCk7CiAgICB9KTsKICAgIGNvbnN0IGdldE1vY2sgPSAoKSA9PiB7CiAgICAgIGNvbnN0IGtleXMgPSBbXTsKICAgICAgY29uc3QgbURhdGEgPSBbXTsKICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyMDsgaSsrKSB7CiAgICAgICAgY29uc3QgZGF0YSA9IHsKICAgICAgICAgIGtleTogaS50b1N0cmluZygpLAogICAgICAgICAgdGl0bGU6IGBjb250ZW50JHtpICsgMX1gLAogICAgICAgICAgZGVzY3JpcHRpb246IGBkZXNjcmlwdGlvbiBvZiBjb250ZW50JHtpICsgMX1gLAogICAgICAgICAgY2hvc2VuOiBNYXRoLnJhbmRvbSgpICogMiA+IDEsCiAgICAgICAgfTsKICAgICAgICBpZiAoZGF0YS5jaG9zZW4pIHsKICAgICAgICAgIGtleXMucHVzaChkYXRhLmtleSk7CiAgICAgICAgfQogICAgICAgIG1EYXRhLnB1c2goZGF0YSk7CiAgICAgIH0KICAgICAgbW9ja0RhdGEudmFsdWUgPSBtRGF0YTsKICAgICAgdGFyZ2V0S2V5cy52YWx1ZSA9IGtleXM7CiAgICB9OwogICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGtleXM6IHN0cmluZ1tdLCBkaXJlY3Rpb246IHN0cmluZywgbW92ZUtleXM6IHN0cmluZ1tdKSA9PiB7CiAgICAgIGNvbnNvbGUubG9nKGtleXMsIGRpcmVjdGlvbiwgbW92ZUtleXMpOwogICAgfTsKICAgIHJldHVybiB7CiAgICAgIG1vY2tEYXRhLAogICAgICB0YXJnZXRLZXlzLAogICAgICBoYW5kbGVDaGFuZ2UsCiAgICAgIGdldE1vY2ssCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXRyYW5zZmVyCiAgICB2LW1vZGVsOnRhcmdldC1rZXlzPSJ0YXJnZXRLZXlzIgogICAgOmRhdGEtc291cmNlPSJtb2NrRGF0YSIKICAgIDpsaXN0LXN0eWxlPSJ7CiAgICAgIHdpZHRoOiAnMzAwcHgnLAogICAgICBoZWlnaHQ6ICczMDBweCcsCiAgICB9IgogICAgQGNoYW5nZT0iaGFuZGxlQ2hhbmdlIgogID4KICAgIDx0ZW1wbGF0ZSAjcmVuZGVyPSJpdGVtIj4KICAgICAgPHNwYW4gY2xhc3M9ImN1c3RvbS1pdGVtIiBzdHlsZT0iY29sb3I6IHJlZCI+e3sgaXRlbS50aXRsZSB9fSAtIHt7IGl0ZW0uZGVzY3JpcHRpb24gfX08L3NwYW4+CiAgICA8L3RlbXBsYXRlPgogIDwvYS10cmFuc2Zlcj4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYsIG9uTW91bnRlZCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBtb2NrRGF0YSA9IHJlZihbXSk7CiAgICBjb25zdCB0YXJnZXRLZXlzID0gcmVmKFtdKTsKICAgIG9uTW91bnRlZCgoKSA9PiB7CiAgICAgIGdldE1vY2soKTsKICAgIH0pOwogICAgY29uc3QgZ2V0TW9jayA9ICgpID0+IHsKICAgICAgY29uc3Qga2V5cyA9IFtdOwogICAgICBjb25zdCBtRGF0YSA9IFtdOwogICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDIwOyBpKyspIHsKICAgICAgICBjb25zdCBkYXRhID0gewogICAgICAgICAga2V5OiBpLnRvU3RyaW5nKCksCiAgICAgICAgICB0aXRsZTogYGNvbnRlbnQke2kgKyAxfWAsCiAgICAgICAgICBkZXNjcmlwdGlvbjogYGRlc2NyaXB0aW9uIG9mIGNvbnRlbnQke2kgKyAxfWAsCiAgICAgICAgICBjaG9zZW46IE1hdGgucmFuZG9tKCkgKiAyID4gMSwKICAgICAgICB9OwogICAgICAgIGlmIChkYXRhLmNob3NlbikgewogICAgICAgICAga2V5cy5wdXNoKGRhdGEua2V5KTsKICAgICAgICB9CiAgICAgICAgbURhdGEucHVzaChkYXRhKTsKICAgICAgfQogICAgICBtb2NrRGF0YS52YWx1ZSA9IG1EYXRhOwogICAgICB0YXJnZXRLZXlzLnZhbHVlID0ga2V5czsKICAgIH07CiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoa2V5cywgZGlyZWN0aW9uLCBtb3ZlS2V5cykgPT4gewogICAgICBjb25zb2xlLmxvZyhrZXlzLCBkaXJlY3Rpb24sIG1vdmVLZXlzKTsKICAgIH07CiAgICByZXR1cm4gewogICAgICBtb2NrRGF0YSwKICAgICAgdGFyZ2V0S2V5cywKICAgICAgaGFuZGxlQ2hhbmdlLAogICAgICBnZXRNb2NrLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+",isdemo:!1}},{default:i(()=>[d(o,{"target-keys":s.targetKeys,"onUpdate:target-keys":a[0]||(a[0]=p=>s.targetKeys=p),"data-source":s.mockData,"list-style":{width:"300px",height:"300px"},onChange:s.handleChange},{render:i(p=>[n("span",Cn,R(p.title)+" - "+R(p.description),1)]),_:1},8,["target-keys","data-source","onChange"])]),htmlCode:i(()=>[mn]),jsVersionHtml:i(()=>[An]),_:1},8,["jsfiddle"])}const yn=b(In,[["render",hn]]),v=[];for(let s=0;s<10;s++)v.push({key:s.toString(),title:`content${s+1}`,description:`description of content${s+1}`,disabled:s%4===0});const bn=v.filter(s=>+s.key%3>1).map(s=>s.key),Zn=[{dataIndex:"title",title:"Name"},{dataIndex:"description",title:"Description"}],Gn=[{dataIndex:"title",title:"Name"}],fn=G({setup(){const s=g(bn),a=g(!1),l=g(!1),I=g(Zn),k=g(Gn);return{mockData:v,targetKeys:s,disabled:a,showSearch:l,leftColumns:I,rightColumns:k,onChange:e=>{console.log("nextTargetKeys",e)},getRowSelection:({disabled:e,selectedKeys:p,onItemSelectAll:c,onItemSelect:C})=>({getCheckboxProps:m=>({disabled:e||m.disabled}),onSelectAll(m,Z){const y=Z.filter(f=>!f.disabled).map(({key:f})=>f);c(y,m)},onSelect({key:m},Z){C(m,Z)},selectedRowKeys:p})}}}),Sn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-transfer")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("target-keys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("targetKeys"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":data-source"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mockData"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":disabled"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("disabled"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":show-search"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showSearch"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":filter-option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("(inputValue, item) => item.title.indexOf(inputValue) !== -1"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":show-select-all"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("false"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("onChange"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(`
        `),n("span",{class:"token attr-name"},"#children"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(`{
          direction,
          filteredItems,
          selectedKeys,
          disabled: listDisabled,
          onItemSelectAll,
          onItemSelect,
        }`),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-table")]),t(`
          `),n("span",{class:"token attr-name"},":row-selection"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(`
            getRowSelection({
              disabled: listDisabled,
              selectedKeys,
              onItemSelectAll,
              onItemSelect,
            })
          `),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("direction === 'left' ? leftColumns : rightColumns"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token attr-name"},":data-source"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("filteredItems"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("small"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ pointerEvents: listDisabled ? 'none' : null }"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token attr-name"},":custom-row"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(`
            ({ key, disabled: itemDisabled }) => ({
              onClick: () => {
                if (itemDisabled || listDisabled) return;
                onItemSelect(key, !selectedKeys.includes(key));
              },
            })
          `),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token punctuation"},"/>")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-transfer")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-switch")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("checked")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("disabled"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"un-checked-children"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("disabled"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"checked-children"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("disabled"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),t(" 16px")]),n("span",{class:"token punctuation"},'"')])]),t(`
    `),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-switch")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("checked")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showSearch"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"un-checked-children"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showSearch"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"checked-children"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showSearch"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),t(" 16px")]),n("span",{class:"token punctuation"},'"')])]),t(`
    `),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"interface"),t(),n("span",{class:"token class-name"},"MockData"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token literal-property property"},"description"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),t(" boolean"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
type tableColumn `),n("span",{class:"token operator"},"="),t(" Record"),n("span",{class:"token operator"},"<"),t("string"),n("span",{class:"token punctuation"},","),t(" string"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token literal-property property"},"mockData"),n("span",{class:"token operator"},":"),t(" MockData"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  mockData`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(" i"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"content"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"description"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"description of content"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),t(" i "),n("span",{class:"token operator"},"%"),t(),n("span",{class:"token number"},"4"),t(),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token keyword"},"const"),t(" originTargetKeys "),n("span",{class:"token operator"},"="),t(" mockData"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"filter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token operator"},"+"),t("item"),n("span",{class:"token punctuation"},"."),t("key "),n("span",{class:"token operator"},"%"),t(),n("span",{class:"token number"},"3"),t(),n("span",{class:"token operator"},">"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),t(),n("span",{class:"token operator"},"=>"),t(" item"),n("span",{class:"token punctuation"},"."),t("key"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"const"),t(" leftTableColumns "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"dataIndex"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'title'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Name'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"dataIndex"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'description'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Description'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"const"),t(" rightTableColumns "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"dataIndex"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'title'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Name'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" targetKeys "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),t("originTargetKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" disabled "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("boolean"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" showSearch "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("boolean"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" leftColumns "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("tableColumn"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),t("leftTableColumns"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" rightColumns "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("tableColumn"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),t("rightTableColumns"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"onChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"nextTargetKeys"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'nextTargetKeys'"),n("span",{class:"token punctuation"},","),t(" nextTargetKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"getRowSelection"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(`
      disabled`),n("span",{class:"token punctuation"},","),t(`
      selectedKeys`),n("span",{class:"token punctuation"},","),t(`
      onItemSelectAll`),n("span",{class:"token punctuation"},","),t(`
      onItemSelect`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),t(" Record"),n("span",{class:"token operator"},"<"),t("string"),n("span",{class:"token punctuation"},","),t(" any"),n("span",{class:"token operator"},">")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token function-variable function"},"getCheckboxProps"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"item"),n("span",{class:"token operator"},":"),t(" Record"),n("span",{class:"token operator"},"<"),t("string"),n("span",{class:"token punctuation"},","),t(" string "),n("span",{class:"token operator"},"|"),t(" boolean"),n("span",{class:"token operator"},">")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),t(" disabled "),n("span",{class:"token operator"},"||"),t(" item"),n("span",{class:"token punctuation"},"."),t("disabled"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token function"},"onSelectAll"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"selected"),n("span",{class:"token operator"},":"),t(" boolean"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"selectedRows"),n("span",{class:"token operator"},":"),t(" Record"),n("span",{class:"token operator"},"<"),t("string"),n("span",{class:"token punctuation"},","),t(" string "),n("span",{class:"token operator"},"|"),t(" boolean"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token keyword"},"const"),t(" treeSelectedKeys "),n("span",{class:"token operator"},"="),t(` selectedRows
            `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"filter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token operator"},"!"),t("item"),n("span",{class:"token punctuation"},"."),t("disabled"),n("span",{class:"token punctuation"},")"),t(`
            `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(" key "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(" key"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
          `),n("span",{class:"token function"},"onItemSelectAll"),n("span",{class:"token punctuation"},"("),t("treeSelectedKeys"),n("span",{class:"token punctuation"},","),t(" selected"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token function"},"onSelect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(" key "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),t(" Record"),n("span",{class:"token operator"},"<"),t("string"),n("span",{class:"token punctuation"},","),t(" string"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"selected"),n("span",{class:"token operator"},":"),t(" boolean")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token function"},"onItemSelect"),n("span",{class:"token punctuation"},"("),t("key"),n("span",{class:"token punctuation"},","),t(" selected"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"selectedRowKeys"),n("span",{class:"token operator"},":"),t(" selectedKeys"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      mockData`),n("span",{class:"token punctuation"},","),t(`
      targetKeys`),n("span",{class:"token punctuation"},","),t(`
      disabled`),n("span",{class:"token punctuation"},","),t(`
      showSearch`),n("span",{class:"token punctuation"},","),t(`
      leftColumns`),n("span",{class:"token punctuation"},","),t(`
      rightColumns`),n("span",{class:"token punctuation"},","),t(`
      onChange`),n("span",{class:"token punctuation"},","),t(`
      getRowSelection`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),wn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-transfer")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("target-keys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("targetKeys"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":data-source"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mockData"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":disabled"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("disabled"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":show-search"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showSearch"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":filter-option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("(inputValue, item) => item.title.indexOf(inputValue) !== -1"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":show-select-all"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("false"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("onChange"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(`
        `),n("span",{class:"token attr-name"},"#children"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(`{
          direction,
          filteredItems,
          selectedKeys,
          disabled: listDisabled,
          onItemSelectAll,
          onItemSelect,
        }`),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-table")]),t(`
          `),n("span",{class:"token attr-name"},":row-selection"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(`
            getRowSelection({
              disabled: listDisabled,
              selectedKeys,
              onItemSelectAll,
              onItemSelect,
            })
          `),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("direction === 'left' ? leftColumns : rightColumns"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token attr-name"},":data-source"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("filteredItems"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("small"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ pointerEvents: listDisabled ? 'none' : null }"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token attr-name"},":custom-row"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(`
            ({ key, disabled: itemDisabled }) => ({
              onClick: () => {
                if (itemDisabled || listDisabled) return;
                onItemSelect(key, !selectedKeys.includes(key));
              },
            })
          `),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token punctuation"},"/>")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-transfer")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-switch")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("checked")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("disabled"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"un-checked-children"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("disabled"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"checked-children"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("disabled"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),t(" 16px")]),n("span",{class:"token punctuation"},'"')])]),t(`
    `),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-switch")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("checked")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showSearch"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"un-checked-children"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showSearch"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"checked-children"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showSearch"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),t(" 16px")]),n("span",{class:"token punctuation"},'"')])]),t(`
    `),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"const"),t(" mockData "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  mockData`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(" i"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"content"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"description"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"description of content"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),t(" i "),n("span",{class:"token operator"},"%"),t(),n("span",{class:"token number"},"4"),t(),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token keyword"},"const"),t(" originTargetKeys "),n("span",{class:"token operator"},"="),t(" mockData"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"filter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token operator"},"+"),t("item"),n("span",{class:"token punctuation"},"."),t("key "),n("span",{class:"token operator"},"%"),t(),n("span",{class:"token number"},"3"),t(),n("span",{class:"token operator"},">"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),t(),n("span",{class:"token operator"},"=>"),t(" item"),n("span",{class:"token punctuation"},"."),t("key"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"const"),t(" leftTableColumns "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"dataIndex"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'title'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Name'"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"dataIndex"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'description'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Description'"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"const"),t(" rightTableColumns "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"dataIndex"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'title'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Name'"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" targetKeys "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),t("originTargetKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" disabled "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" showSearch "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" leftColumns "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),t("leftTableColumns"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" rightColumns "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),t("rightTableColumns"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"onChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token parameter"},"nextTargetKeys"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'nextTargetKeys'"),n("span",{class:"token punctuation"},","),t(" nextTargetKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"getRowSelection"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(`
      disabled`),n("span",{class:"token punctuation"},","),t(`
      selectedKeys`),n("span",{class:"token punctuation"},","),t(`
      onItemSelectAll`),n("span",{class:"token punctuation"},","),t(`
      onItemSelect`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token function-variable function"},"getCheckboxProps"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token parameter"},"item"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),t(" disabled "),n("span",{class:"token operator"},"||"),t(" item"),n("span",{class:"token punctuation"},"."),t("disabled"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token function"},"onSelectAll"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("selected"),n("span",{class:"token punctuation"},","),t(" selectedRows")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token keyword"},"const"),t(" treeSelectedKeys "),n("span",{class:"token operator"},"="),t(" selectedRows"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"filter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token operator"},"!"),t("item"),n("span",{class:"token punctuation"},"."),t("disabled"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(`
            key`),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(" key"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
          `),n("span",{class:"token function"},"onItemSelectAll"),n("span",{class:"token punctuation"},"("),t("treeSelectedKeys"),n("span",{class:"token punctuation"},","),t(" selected"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token function"},"onSelect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(`
          key`),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(" selected")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token function"},"onItemSelect"),n("span",{class:"token punctuation"},"("),t("key"),n("span",{class:"token punctuation"},","),t(" selected"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"selectedRowKeys"),n("span",{class:"token operator"},":"),t(" selectedKeys"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      mockData`),n("span",{class:"token punctuation"},","),t(`
      targetKeys`),n("span",{class:"token punctuation"},","),t(`
      disabled`),n("span",{class:"token punctuation"},","),t(`
      showSearch`),n("span",{class:"token punctuation"},","),t(`
      leftColumns`),n("span",{class:"token punctuation"},","),t(`
      rightColumns`),n("span",{class:"token punctuation"},","),t(`
      onChange`),n("span",{class:"token punctuation"},","),t(`
      getRowSelection`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function vn(s,a,l,I,k,r){const o=u("a-table"),e=u("a-transfer"),p=u("a-switch"),c=u("demo-box");return A(),h(c,{jsfiddle:{us:"Customize render list with Table component.",cn:"\u4F7F\u7528 Table \u7EC4\u4EF6\u4F5C\u4E3A\u81EA\u5B9A\u4E49\u6E32\u67D3\u5217\u8868\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u4F7F\u7528 Table \u7EC4\u4EF6\u4F5C\u4E3A\u81EA\u5B9A\u4E49\u6E32\u67D3\u5217\u8868\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Customize render list with Table component.</p>
`,order:6,title:{"zh-CN":"\u8868\u683C\u7A7F\u68AD\u6846","en-US":"Table Transfer"},relativePath:"components/transfer/demo/table-transfer.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS10cmFuc2ZlcgogICAgICB2LW1vZGVsOnRhcmdldC1rZXlzPSJ0YXJnZXRLZXlzIgogICAgICA6ZGF0YS1zb3VyY2U9Im1vY2tEYXRhIgogICAgICA6ZGlzYWJsZWQ9ImRpc2FibGVkIgogICAgICA6c2hvdy1zZWFyY2g9InNob3dTZWFyY2giCiAgICAgIDpmaWx0ZXItb3B0aW9uPSIoaW5wdXRWYWx1ZSwgaXRlbSkgPT4gaXRlbS50aXRsZS5pbmRleE9mKGlucHV0VmFsdWUpICE9PSAtMSIKICAgICAgOnNob3ctc2VsZWN0LWFsbD0iZmFsc2UiCiAgICAgIEBjaGFuZ2U9Im9uQ2hhbmdlIgogICAgPgogICAgICA8dGVtcGxhdGUKICAgICAgICAjY2hpbGRyZW49InsKICAgICAgICAgIGRpcmVjdGlvbiwKICAgICAgICAgIGZpbHRlcmVkSXRlbXMsCiAgICAgICAgICBzZWxlY3RlZEtleXMsCiAgICAgICAgICBkaXNhYmxlZDogbGlzdERpc2FibGVkLAogICAgICAgICAgb25JdGVtU2VsZWN0QWxsLAogICAgICAgICAgb25JdGVtU2VsZWN0LAogICAgICAgIH0iCiAgICAgID4KICAgICAgICA8YS10YWJsZQogICAgICAgICAgOnJvdy1zZWxlY3Rpb249IgogICAgICAgICAgICBnZXRSb3dTZWxlY3Rpb24oewogICAgICAgICAgICAgIGRpc2FibGVkOiBsaXN0RGlzYWJsZWQsCiAgICAgICAgICAgICAgc2VsZWN0ZWRLZXlzLAogICAgICAgICAgICAgIG9uSXRlbVNlbGVjdEFsbCwKICAgICAgICAgICAgICBvbkl0ZW1TZWxlY3QsCiAgICAgICAgICAgIH0pCiAgICAgICAgICAiCiAgICAgICAgICA6Y29sdW1ucz0iZGlyZWN0aW9uID09PSAnbGVmdCcgPyBsZWZ0Q29sdW1ucyA6IHJpZ2h0Q29sdW1ucyIKICAgICAgICAgIDpkYXRhLXNvdXJjZT0iZmlsdGVyZWRJdGVtcyIKICAgICAgICAgIHNpemU9InNtYWxsIgogICAgICAgICAgOnN0eWxlPSJ7IHBvaW50ZXJFdmVudHM6IGxpc3REaXNhYmxlZCA/ICdub25lJyA6IG51bGwgfSIKICAgICAgICAgIDpjdXN0b20tcm93PSIKICAgICAgICAgICAgKHsga2V5LCBkaXNhYmxlZDogaXRlbURpc2FibGVkIH0pID0+ICh7CiAgICAgICAgICAgICAgb25DbGljazogKCkgPT4gewogICAgICAgICAgICAgICAgaWYgKGl0ZW1EaXNhYmxlZCB8fCBsaXN0RGlzYWJsZWQpIHJldHVybjsKICAgICAgICAgICAgICAgIG9uSXRlbVNlbGVjdChrZXksICFzZWxlY3RlZEtleXMuaW5jbHVkZXMoa2V5KSk7CiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgfSkKICAgICAgICAgICIKICAgICAgICAvPgogICAgICA8L3RlbXBsYXRlPgogICAgPC9hLXRyYW5zZmVyPgogICAgPGEtc3dpdGNoCiAgICAgIHYtbW9kZWw6Y2hlY2tlZD0iZGlzYWJsZWQiCiAgICAgIHVuLWNoZWNrZWQtY2hpbGRyZW49ImRpc2FibGVkIgogICAgICBjaGVja2VkLWNoaWxkcmVuPSJkaXNhYmxlZCIKICAgICAgc3R5bGU9Im1hcmdpbi10b3A6IDE2cHgiCiAgICAvPgogICAgPGEtc3dpdGNoCiAgICAgIHYtbW9kZWw6Y2hlY2tlZD0ic2hvd1NlYXJjaCIKICAgICAgdW4tY2hlY2tlZC1jaGlsZHJlbj0ic2hvd1NlYXJjaCIKICAgICAgY2hlY2tlZC1jaGlsZHJlbj0ic2hvd1NlYXJjaCIKICAgICAgc3R5bGU9Im1hcmdpbi10b3A6IDE2cHgiCiAgICAvPgogIDwvZGl2Pgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwppbnRlcmZhY2UgTW9ja0RhdGEgewogIGtleTogc3RyaW5nOwogIHRpdGxlOiBzdHJpbmc7CiAgZGVzY3JpcHRpb246IHN0cmluZzsKICBkaXNhYmxlZDogYm9vbGVhbjsKfQp0eXBlIHRhYmxlQ29sdW1uID0gUmVjb3JkPHN0cmluZywgc3RyaW5nPjsKY29uc3QgbW9ja0RhdGE6IE1vY2tEYXRhW10gPSBbXTsKZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7CiAgbW9ja0RhdGEucHVzaCh7CiAgICBrZXk6IGkudG9TdHJpbmcoKSwKICAgIHRpdGxlOiBgY29udGVudCR7aSArIDF9YCwKICAgIGRlc2NyaXB0aW9uOiBgZGVzY3JpcHRpb24gb2YgY29udGVudCR7aSArIDF9YCwKICAgIGRpc2FibGVkOiBpICUgNCA9PT0gMCwKICB9KTsKfQoKY29uc3Qgb3JpZ2luVGFyZ2V0S2V5cyA9IG1vY2tEYXRhLmZpbHRlcihpdGVtID0+ICtpdGVtLmtleSAlIDMgPiAxKS5tYXAoaXRlbSA9PiBpdGVtLmtleSk7Cgpjb25zdCBsZWZ0VGFibGVDb2x1bW5zID0gWwogIHsKICAgIGRhdGFJbmRleDogJ3RpdGxlJywKICAgIHRpdGxlOiAnTmFtZScsCiAgfSwKICB7CiAgICBkYXRhSW5kZXg6ICdkZXNjcmlwdGlvbicsCiAgICB0aXRsZTogJ0Rlc2NyaXB0aW9uJywKICB9LApdOwpjb25zdCByaWdodFRhYmxlQ29sdW1ucyA9IFsKICB7CiAgICBkYXRhSW5kZXg6ICd0aXRsZScsCiAgICB0aXRsZTogJ05hbWUnLAogIH0sCl07CgpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgdGFyZ2V0S2V5cyA9IHJlZjxzdHJpbmdbXT4ob3JpZ2luVGFyZ2V0S2V5cyk7CiAgICBjb25zdCBkaXNhYmxlZCA9IHJlZjxib29sZWFuPihmYWxzZSk7CiAgICBjb25zdCBzaG93U2VhcmNoID0gcmVmPGJvb2xlYW4+KGZhbHNlKTsKICAgIGNvbnN0IGxlZnRDb2x1bW5zID0gcmVmPHRhYmxlQ29sdW1uW10+KGxlZnRUYWJsZUNvbHVtbnMpOwogICAgY29uc3QgcmlnaHRDb2x1bW5zID0gcmVmPHRhYmxlQ29sdW1uW10+KHJpZ2h0VGFibGVDb2x1bW5zKTsKCiAgICBjb25zdCBvbkNoYW5nZSA9IChuZXh0VGFyZ2V0S2V5czogc3RyaW5nW10pID0+IHsKICAgICAgY29uc29sZS5sb2coJ25leHRUYXJnZXRLZXlzJywgbmV4dFRhcmdldEtleXMpOwogICAgfTsKCiAgICBjb25zdCBnZXRSb3dTZWxlY3Rpb24gPSAoewogICAgICBkaXNhYmxlZCwKICAgICAgc2VsZWN0ZWRLZXlzLAogICAgICBvbkl0ZW1TZWxlY3RBbGwsCiAgICAgIG9uSXRlbVNlbGVjdCwKICAgIH06IFJlY29yZDxzdHJpbmcsIGFueT4pID0+IHsKICAgICAgcmV0dXJuIHsKICAgICAgICBnZXRDaGVja2JveFByb3BzOiAoaXRlbTogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgYm9vbGVhbj4pID0+ICh7CiAgICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWQgfHwgaXRlbS5kaXNhYmxlZCwKICAgICAgICB9KSwKICAgICAgICBvblNlbGVjdEFsbChzZWxlY3RlZDogYm9vbGVhbiwgc2VsZWN0ZWRSb3dzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBib29sZWFuPltdKSB7CiAgICAgICAgICBjb25zdCB0cmVlU2VsZWN0ZWRLZXlzID0gc2VsZWN0ZWRSb3dzCiAgICAgICAgICAgIC5maWx0ZXIoaXRlbSA9PiAhaXRlbS5kaXNhYmxlZCkKICAgICAgICAgICAgLm1hcCgoeyBrZXkgfSkgPT4ga2V5KTsKICAgICAgICAgIG9uSXRlbVNlbGVjdEFsbCh0cmVlU2VsZWN0ZWRLZXlzLCBzZWxlY3RlZCk7CiAgICAgICAgfSwKICAgICAgICBvblNlbGVjdCh7IGtleSB9OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+LCBzZWxlY3RlZDogYm9vbGVhbikgewogICAgICAgICAgb25JdGVtU2VsZWN0KGtleSwgc2VsZWN0ZWQpOwogICAgICAgIH0sCiAgICAgICAgc2VsZWN0ZWRSb3dLZXlzOiBzZWxlY3RlZEtleXMsCiAgICAgIH07CiAgICB9OwogICAgcmV0dXJuIHsKICAgICAgbW9ja0RhdGEsCiAgICAgIHRhcmdldEtleXMsCiAgICAgIGRpc2FibGVkLAogICAgICBzaG93U2VhcmNoLAogICAgICBsZWZ0Q29sdW1ucywKICAgICAgcmlnaHRDb2x1bW5zLAogICAgICBvbkNoYW5nZSwKICAgICAgZ2V0Um93U2VsZWN0aW9uLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS10cmFuc2ZlcgogICAgICB2LW1vZGVsOnRhcmdldC1rZXlzPSJ0YXJnZXRLZXlzIgogICAgICA6ZGF0YS1zb3VyY2U9Im1vY2tEYXRhIgogICAgICA6ZGlzYWJsZWQ9ImRpc2FibGVkIgogICAgICA6c2hvdy1zZWFyY2g9InNob3dTZWFyY2giCiAgICAgIDpmaWx0ZXItb3B0aW9uPSIoaW5wdXRWYWx1ZSwgaXRlbSkgPT4gaXRlbS50aXRsZS5pbmRleE9mKGlucHV0VmFsdWUpICE9PSAtMSIKICAgICAgOnNob3ctc2VsZWN0LWFsbD0iZmFsc2UiCiAgICAgIEBjaGFuZ2U9Im9uQ2hhbmdlIgogICAgPgogICAgICA8dGVtcGxhdGUKICAgICAgICAjY2hpbGRyZW49InsKICAgICAgICAgIGRpcmVjdGlvbiwKICAgICAgICAgIGZpbHRlcmVkSXRlbXMsCiAgICAgICAgICBzZWxlY3RlZEtleXMsCiAgICAgICAgICBkaXNhYmxlZDogbGlzdERpc2FibGVkLAogICAgICAgICAgb25JdGVtU2VsZWN0QWxsLAogICAgICAgICAgb25JdGVtU2VsZWN0LAogICAgICAgIH0iCiAgICAgID4KICAgICAgICA8YS10YWJsZQogICAgICAgICAgOnJvdy1zZWxlY3Rpb249IgogICAgICAgICAgICBnZXRSb3dTZWxlY3Rpb24oewogICAgICAgICAgICAgIGRpc2FibGVkOiBsaXN0RGlzYWJsZWQsCiAgICAgICAgICAgICAgc2VsZWN0ZWRLZXlzLAogICAgICAgICAgICAgIG9uSXRlbVNlbGVjdEFsbCwKICAgICAgICAgICAgICBvbkl0ZW1TZWxlY3QsCiAgICAgICAgICAgIH0pCiAgICAgICAgICAiCiAgICAgICAgICA6Y29sdW1ucz0iZGlyZWN0aW9uID09PSAnbGVmdCcgPyBsZWZ0Q29sdW1ucyA6IHJpZ2h0Q29sdW1ucyIKICAgICAgICAgIDpkYXRhLXNvdXJjZT0iZmlsdGVyZWRJdGVtcyIKICAgICAgICAgIHNpemU9InNtYWxsIgogICAgICAgICAgOnN0eWxlPSJ7IHBvaW50ZXJFdmVudHM6IGxpc3REaXNhYmxlZCA/ICdub25lJyA6IG51bGwgfSIKICAgICAgICAgIDpjdXN0b20tcm93PSIKICAgICAgICAgICAgKHsga2V5LCBkaXNhYmxlZDogaXRlbURpc2FibGVkIH0pID0+ICh7CiAgICAgICAgICAgICAgb25DbGljazogKCkgPT4gewogICAgICAgICAgICAgICAgaWYgKGl0ZW1EaXNhYmxlZCB8fCBsaXN0RGlzYWJsZWQpIHJldHVybjsKICAgICAgICAgICAgICAgIG9uSXRlbVNlbGVjdChrZXksICFzZWxlY3RlZEtleXMuaW5jbHVkZXMoa2V5KSk7CiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgfSkKICAgICAgICAgICIKICAgICAgICAvPgogICAgICA8L3RlbXBsYXRlPgogICAgPC9hLXRyYW5zZmVyPgogICAgPGEtc3dpdGNoCiAgICAgIHYtbW9kZWw6Y2hlY2tlZD0iZGlzYWJsZWQiCiAgICAgIHVuLWNoZWNrZWQtY2hpbGRyZW49ImRpc2FibGVkIgogICAgICBjaGVja2VkLWNoaWxkcmVuPSJkaXNhYmxlZCIKICAgICAgc3R5bGU9Im1hcmdpbi10b3A6IDE2cHgiCiAgICAvPgogICAgPGEtc3dpdGNoCiAgICAgIHYtbW9kZWw6Y2hlY2tlZD0ic2hvd1NlYXJjaCIKICAgICAgdW4tY2hlY2tlZC1jaGlsZHJlbj0ic2hvd1NlYXJjaCIKICAgICAgY2hlY2tlZC1jaGlsZHJlbj0ic2hvd1NlYXJjaCIKICAgICAgc3R5bGU9Im1hcmdpbi10b3A6IDE2cHgiCiAgICAvPgogIDwvZGl2Pgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmNvbnN0IG1vY2tEYXRhID0gW107CmZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykgewogIG1vY2tEYXRhLnB1c2goewogICAga2V5OiBpLnRvU3RyaW5nKCksCiAgICB0aXRsZTogYGNvbnRlbnQke2kgKyAxfWAsCiAgICBkZXNjcmlwdGlvbjogYGRlc2NyaXB0aW9uIG9mIGNvbnRlbnQke2kgKyAxfWAsCiAgICBkaXNhYmxlZDogaSAlIDQgPT09IDAsCiAgfSk7Cn0KY29uc3Qgb3JpZ2luVGFyZ2V0S2V5cyA9IG1vY2tEYXRhLmZpbHRlcihpdGVtID0+ICtpdGVtLmtleSAlIDMgPiAxKS5tYXAoaXRlbSA9PiBpdGVtLmtleSk7CmNvbnN0IGxlZnRUYWJsZUNvbHVtbnMgPSBbewogIGRhdGFJbmRleDogJ3RpdGxlJywKICB0aXRsZTogJ05hbWUnLAp9LCB7CiAgZGF0YUluZGV4OiAnZGVzY3JpcHRpb24nLAogIHRpdGxlOiAnRGVzY3JpcHRpb24nLAp9XTsKY29uc3QgcmlnaHRUYWJsZUNvbHVtbnMgPSBbewogIGRhdGFJbmRleDogJ3RpdGxlJywKICB0aXRsZTogJ05hbWUnLAp9XTsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IHRhcmdldEtleXMgPSByZWYob3JpZ2luVGFyZ2V0S2V5cyk7CiAgICBjb25zdCBkaXNhYmxlZCA9IHJlZihmYWxzZSk7CiAgICBjb25zdCBzaG93U2VhcmNoID0gcmVmKGZhbHNlKTsKICAgIGNvbnN0IGxlZnRDb2x1bW5zID0gcmVmKGxlZnRUYWJsZUNvbHVtbnMpOwogICAgY29uc3QgcmlnaHRDb2x1bW5zID0gcmVmKHJpZ2h0VGFibGVDb2x1bW5zKTsKICAgIGNvbnN0IG9uQ2hhbmdlID0gbmV4dFRhcmdldEtleXMgPT4gewogICAgICBjb25zb2xlLmxvZygnbmV4dFRhcmdldEtleXMnLCBuZXh0VGFyZ2V0S2V5cyk7CiAgICB9OwogICAgY29uc3QgZ2V0Um93U2VsZWN0aW9uID0gKHsKICAgICAgZGlzYWJsZWQsCiAgICAgIHNlbGVjdGVkS2V5cywKICAgICAgb25JdGVtU2VsZWN0QWxsLAogICAgICBvbkl0ZW1TZWxlY3QsCiAgICB9KSA9PiB7CiAgICAgIHJldHVybiB7CiAgICAgICAgZ2V0Q2hlY2tib3hQcm9wczogaXRlbSA9PiAoewogICAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkIHx8IGl0ZW0uZGlzYWJsZWQsCiAgICAgICAgfSksCiAgICAgICAgb25TZWxlY3RBbGwoc2VsZWN0ZWQsIHNlbGVjdGVkUm93cykgewogICAgICAgICAgY29uc3QgdHJlZVNlbGVjdGVkS2V5cyA9IHNlbGVjdGVkUm93cy5maWx0ZXIoaXRlbSA9PiAhaXRlbS5kaXNhYmxlZCkubWFwKCh7CiAgICAgICAgICAgIGtleSwKICAgICAgICAgIH0pID0+IGtleSk7CiAgICAgICAgICBvbkl0ZW1TZWxlY3RBbGwodHJlZVNlbGVjdGVkS2V5cywgc2VsZWN0ZWQpOwogICAgICAgIH0sCiAgICAgICAgb25TZWxlY3QoewogICAgICAgICAga2V5LAogICAgICAgIH0sIHNlbGVjdGVkKSB7CiAgICAgICAgICBvbkl0ZW1TZWxlY3Qoa2V5LCBzZWxlY3RlZCk7CiAgICAgICAgfSwKICAgICAgICBzZWxlY3RlZFJvd0tleXM6IHNlbGVjdGVkS2V5cywKICAgICAgfTsKICAgIH07CiAgICByZXR1cm4gewogICAgICBtb2NrRGF0YSwKICAgICAgdGFyZ2V0S2V5cywKICAgICAgZGlzYWJsZWQsCiAgICAgIHNob3dTZWFyY2gsCiAgICAgIGxlZnRDb2x1bW5zLAogICAgICByaWdodENvbHVtbnMsCiAgICAgIG9uQ2hhbmdlLAogICAgICBnZXRSb3dTZWxlY3Rpb24sCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4=",isdemo:!1}},{default:i(()=>[n("div",null,[d(e,{"target-keys":s.targetKeys,"onUpdate:target-keys":a[0]||(a[0]=C=>s.targetKeys=C),"data-source":s.mockData,disabled:s.disabled,"show-search":s.showSearch,"filter-option":(C,m)=>m.title.indexOf(C)!==-1,"show-select-all":!1,onChange:s.onChange},{children:i(({direction:C,filteredItems:m,selectedKeys:Z,disabled:y,onItemSelectAll:f,onItemSelect:W})=>[d(o,{"row-selection":s.getRowSelection({disabled:y,selectedKeys:Z,onItemSelectAll:f,onItemSelect:W}),columns:C==="left"?s.leftColumns:s.rightColumns,"data-source":m,size:"small",style:T({pointerEvents:y?"none":null}),"custom-row":({key:V,disabled:x})=>({onClick:()=>{x||y||W(V,!Z.includes(V))}})},null,8,["row-selection","columns","data-source","style","custom-row"])]),_:1},8,["target-keys","data-source","disabled","show-search","filter-option","onChange"]),d(p,{checked:s.disabled,"onUpdate:checked":a[1]||(a[1]=C=>s.disabled=C),"un-checked-children":"disabled","checked-children":"disabled",style:{"margin-top":"16px"}},null,8,["checked"]),d(p,{checked:s.showSearch,"onUpdate:checked":a[2]||(a[2]=C=>s.showSearch=C),"un-checked-children":"showSearch","checked-children":"showSearch",style:{"margin-top":"16px"}},null,8,["checked"])])]),htmlCode:i(()=>[Sn]),jsVersionHtml:i(()=>[wn]),_:1},8,["jsfiddle"])}const Kn=b(fn,[["render",vn]]),H=[{key:"0-0",title:"0-0"},{key:"0-1",title:"0-1",children:[{key:"0-1-0",title:"0-1-0"},{key:"0-1-1",title:"0-1-1"}]},{key:"0-2",title:"0-3"}],D=[];function J(s=[]){s.forEach(a=>{D.push(a),J(a.children)})}J(JSON.parse(JSON.stringify(H)));function Wn(s,a){return s.indexOf(a)!==-1}function z(s,a=[]){return s.forEach(l=>{l.disabled=a.includes(l.key),l.children&&z(l.children,a)}),s}const Vn=G({setup(){const s=g([]),a=g(D),l=j(()=>z(H,s.value));return{targetKeys:s,dataSource:a,treeData:l,onChecked:(k,r,o)=>{const{eventKey:e}=k.node;o(e,!Wn(r,e))}}}});const F=s=>(P("data-v-1ab4823c"),s=s(),L(),s),Rn=F(()=>n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-transfer")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("target-keys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("targetKeys"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("tree-transfer"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":data-source"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("dataSource"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":render"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item => item.title"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":show-select-all"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("false"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#children"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ direction, selectedKeys, onItemSelect }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-tree")]),t(`
          `),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("direction === 'left'"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token attr-name"},"block-node"),t(`
          `),n("span",{class:"token attr-name"},"checkable"),t(`
          `),n("span",{class:"token attr-name"},"check-strictly"),t(`
          `),n("span",{class:"token attr-name"},"default-expand-all"),t(`
          `),n("span",{class:"token attr-name"},":checked-keys"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("[...selectedKeys, ...targetKeys]"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token attr-name"},":tree-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("treeData"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token attr-name"},"@check"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(`
            (_, props) => {
              onChecked(props, [...selectedKeys, ...targetKeys], onItemSelect);
            }
          `),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token attr-name"},"@select"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(`
            (_, props) => {
              onChecked(props, [...selectedKeys, ...targetKeys], onItemSelect);
            }
          `),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token punctuation"},"/>")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-transfer")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" computed"),n("span",{class:"token punctuation"},","),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(" type "),n("span",{class:"token punctuation"},"{"),t(" TransferProps"),n("span",{class:"token punctuation"},","),t(" TreeProps "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'ant-design-vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token literal-property property"},"tData"),n("span",{class:"token operator"},":"),t(" TransferProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'dataSource'"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
  `),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'0-0'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'0-0'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'0-1'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'0-1'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'0-1-0'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'0-1-0'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'0-1-1'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'0-1-1'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'0-2'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'0-3'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token literal-property property"},"transferDataSource"),n("span",{class:"token operator"},":"),t(" TransferProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'dataSource'"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"flatten"),n("span",{class:"token punctuation"},"("),t("list"),n("span",{class:"token operator"},":"),t(" TransferProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'dataSource'"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  list`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"forEach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    transferDataSource`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),t("item"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token function"},"flatten"),n("span",{class:"token punctuation"},"("),t("item"),n("span",{class:"token punctuation"},"."),t("children"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token function"},"flatten"),n("span",{class:"token punctuation"},"("),n("span",{class:"token constant"},"JSON"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"parse"),n("span",{class:"token punctuation"},"("),n("span",{class:"token constant"},"JSON"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stringify"),n("span",{class:"token punctuation"},"("),t("tData"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"isChecked"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"selectedKeys"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),t("string "),n("span",{class:"token operator"},"|"),t(" number"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"eventKey"),n("span",{class:"token operator"},":"),t(" string "),n("span",{class:"token operator"},"|"),t(" number")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"return"),t(" selectedKeys"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),t("eventKey"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"!=="),t(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"handleTreeData"),n("span",{class:"token punctuation"},"("),t("data"),n("span",{class:"token operator"},":"),t(" TransferProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'dataSource'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"targetKeys"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  data`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"forEach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    item`),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'disabled'"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(" targetKeys"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"includes"),n("span",{class:"token punctuation"},"("),t("item"),n("span",{class:"token punctuation"},"."),t("key "),n("span",{class:"token keyword"},"as"),t(" any"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("item"),n("span",{class:"token punctuation"},"."),t("children"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token function"},"handleTreeData"),n("span",{class:"token punctuation"},"("),t("item"),n("span",{class:"token punctuation"},"."),t("children"),n("span",{class:"token punctuation"},","),t(" targetKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token keyword"},"return"),t(" data "),n("span",{class:"token keyword"},"as"),t(" TreeProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'treeData'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" targetKeys "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(" dataSource "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),t("transferDataSource"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(" treeData "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"computed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token function"},"handleTreeData"),n("span",{class:"token punctuation"},"("),t("tData"),n("span",{class:"token punctuation"},","),t(" targetKeys"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(" onChecked "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),t(`
      `),n("span",{class:"token literal-property property"},"e"),n("span",{class:"token operator"},":"),t(" Parameters"),n("span",{class:"token operator"},"<"),t("TreeProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'onCheck'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"|"),t(" Parameters"),n("span",{class:"token operator"},"<"),t("TreeProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'onSelect'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"checkedKeys"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token function-variable function"},"onItemSelect"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"n"),n("span",{class:"token operator"},":"),t(" any"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"c"),n("span",{class:"token operator"},":"),t(" boolean")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"{"),t(" eventKey "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token operator"},"="),t(" e"),n("span",{class:"token punctuation"},"."),t("node"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token function"},"onItemSelect"),n("span",{class:"token punctuation"},"("),t("eventKey"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token operator"},"!"),n("span",{class:"token function"},"isChecked"),n("span",{class:"token punctuation"},"("),t("checkedKeys"),n("span",{class:"token punctuation"},","),t(" eventKey"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      targetKeys`),n("span",{class:"token punctuation"},","),t(`
      dataSource`),n("span",{class:"token punctuation"},","),t(`
      treeData`),n("span",{class:"token punctuation"},","),t(`
      onChecked`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),t(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".tree-transfer .ant-transfer-list:first-child"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 50%"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"flex"),n("span",{class:"token punctuation"},":"),t(" none"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1)),Xn=F(()=>n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-transfer")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("target-keys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("targetKeys"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("tree-transfer"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":data-source"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("dataSource"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":render"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item => item.title"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":show-select-all"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("false"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#children"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ direction, selectedKeys, onItemSelect }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-tree")]),t(`
          `),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("direction === 'left'"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token attr-name"},"block-node"),t(`
          `),n("span",{class:"token attr-name"},"checkable"),t(`
          `),n("span",{class:"token attr-name"},"check-strictly"),t(`
          `),n("span",{class:"token attr-name"},"default-expand-all"),t(`
          `),n("span",{class:"token attr-name"},":checked-keys"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("[...selectedKeys, ...targetKeys]"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token attr-name"},":tree-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("treeData"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token attr-name"},"@check"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(`
            (_, props) => {
              onChecked(props, [...selectedKeys, ...targetKeys], onItemSelect);
            }
          `),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token attr-name"},"@select"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(`
            (_, props) => {
              onChecked(props, [...selectedKeys, ...targetKeys], onItemSelect);
            }
          `),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token punctuation"},"/>")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-transfer")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" computed"),n("span",{class:"token punctuation"},","),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"const"),t(" tData "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'0-0'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'0-0'"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'0-1'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'0-1'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'0-1-0'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'0-1-0'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'0-1-1'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'0-1-1'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'0-2'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'0-3'"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"const"),t(" transferDataSource "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"flatten"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("list "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  list`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"forEach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    transferDataSource`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),t("item"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token function"},"flatten"),n("span",{class:"token punctuation"},"("),t("item"),n("span",{class:"token punctuation"},"."),t("children"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token function"},"flatten"),n("span",{class:"token punctuation"},"("),n("span",{class:"token constant"},"JSON"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"parse"),n("span",{class:"token punctuation"},"("),n("span",{class:"token constant"},"JSON"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stringify"),n("span",{class:"token punctuation"},"("),t("tData"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"isChecked"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("selectedKeys"),n("span",{class:"token punctuation"},","),t(" eventKey")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"return"),t(" selectedKeys"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),t("eventKey"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"!=="),t(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"handleTreeData"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("data"),n("span",{class:"token punctuation"},","),t(" targetKeys "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  data`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"forEach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    item`),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'disabled'"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(" targetKeys"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"includes"),n("span",{class:"token punctuation"},"("),t("item"),n("span",{class:"token punctuation"},"."),t("key"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("item"),n("span",{class:"token punctuation"},"."),t("children"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token function"},"handleTreeData"),n("span",{class:"token punctuation"},"("),t("item"),n("span",{class:"token punctuation"},"."),t("children"),n("span",{class:"token punctuation"},","),t(" targetKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token keyword"},"return"),t(" data"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" targetKeys "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" dataSource "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),t("transferDataSource"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" treeData "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"computed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token function"},"handleTreeData"),n("span",{class:"token punctuation"},"("),t("tData"),n("span",{class:"token punctuation"},","),t(" targetKeys"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"onChecked"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("e"),n("span",{class:"token punctuation"},","),t(" checkedKeys"),n("span",{class:"token punctuation"},","),t(" onItemSelect")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"{"),t(`
        eventKey`),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token operator"},"="),t(" e"),n("span",{class:"token punctuation"},"."),t("node"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token function"},"onItemSelect"),n("span",{class:"token punctuation"},"("),t("eventKey"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token operator"},"!"),n("span",{class:"token function"},"isChecked"),n("span",{class:"token punctuation"},"("),t("checkedKeys"),n("span",{class:"token punctuation"},","),t(" eventKey"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      targetKeys`),n("span",{class:"token punctuation"},","),t(`
      dataSource`),n("span",{class:"token punctuation"},","),t(`
      treeData`),n("span",{class:"token punctuation"},","),t(`
      onChecked`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),t(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".tree-transfer .ant-transfer-list:first-child"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 50%"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"flex"),n("span",{class:"token punctuation"},":"),t(" none"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1));function Yn(s,a,l,I,k,r){const o=u("a-tree"),e=u("a-transfer"),p=u("demo-box");return A(),h(p,{jsfiddle:{us:"Customize render list with Tree component.",cn:"\u4F7F\u7528 Tree \u7EC4\u4EF6\u4F5C\u4E3A\u81EA\u5B9A\u4E49\u6E32\u67D3\u5217\u8868\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u4F7F\u7528 Tree \u7EC4\u4EF6\u4F5C\u4E3A\u81EA\u5B9A\u4E49\u6E32\u67D3\u5217\u8868\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Customize render list with Tree component.</p>
`,order:7,title:{"zh-CN":"\u6811\u7A7F\u68AD\u6846","en-US":"Tree Transfer"},relativePath:"components/transfer/demo/tree-transfer.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS10cmFuc2ZlcgogICAgICB2LW1vZGVsOnRhcmdldC1rZXlzPSJ0YXJnZXRLZXlzIgogICAgICBjbGFzcz0idHJlZS10cmFuc2ZlciIKICAgICAgOmRhdGEtc291cmNlPSJkYXRhU291cmNlIgogICAgICA6cmVuZGVyPSJpdGVtID0+IGl0ZW0udGl0bGUiCiAgICAgIDpzaG93LXNlbGVjdC1hbGw9ImZhbHNlIgogICAgPgogICAgICA8dGVtcGxhdGUgI2NoaWxkcmVuPSJ7IGRpcmVjdGlvbiwgc2VsZWN0ZWRLZXlzLCBvbkl0ZW1TZWxlY3QgfSI+CiAgICAgICAgPGEtdHJlZQogICAgICAgICAgdi1pZj0iZGlyZWN0aW9uID09PSAnbGVmdCciCiAgICAgICAgICBibG9jay1ub2RlCiAgICAgICAgICBjaGVja2FibGUKICAgICAgICAgIGNoZWNrLXN0cmljdGx5CiAgICAgICAgICBkZWZhdWx0LWV4cGFuZC1hbGwKICAgICAgICAgIDpjaGVja2VkLWtleXM9IlsuLi5zZWxlY3RlZEtleXMsIC4uLnRhcmdldEtleXNdIgogICAgICAgICAgOnRyZWUtZGF0YT0idHJlZURhdGEiCiAgICAgICAgICBAY2hlY2s9IgogICAgICAgICAgICAoXywgcHJvcHMpID0+IHsKICAgICAgICAgICAgICBvbkNoZWNrZWQocHJvcHMsIFsuLi5zZWxlY3RlZEtleXMsIC4uLnRhcmdldEtleXNdLCBvbkl0ZW1TZWxlY3QpOwogICAgICAgICAgICB9CiAgICAgICAgICAiCiAgICAgICAgICBAc2VsZWN0PSIKICAgICAgICAgICAgKF8sIHByb3BzKSA9PiB7CiAgICAgICAgICAgICAgb25DaGVja2VkKHByb3BzLCBbLi4uc2VsZWN0ZWRLZXlzLCAuLi50YXJnZXRLZXlzXSwgb25JdGVtU2VsZWN0KTsKICAgICAgICAgICAgfQogICAgICAgICAgIgogICAgICAgIC8+CiAgICAgIDwvdGVtcGxhdGU+CiAgICA8L2EtdHJhbnNmZXI+CiAgPC9kaXY+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBjb21wdXRlZCwgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwppbXBvcnQgdHlwZSB7IFRyYW5zZmVyUHJvcHMsIFRyZWVQcm9wcyB9IGZyb20gJ2FudC1kZXNpZ24tdnVlJzsKY29uc3QgdERhdGE6IFRyYW5zZmVyUHJvcHNbJ2RhdGFTb3VyY2UnXSA9IFsKICB7IGtleTogJzAtMCcsIHRpdGxlOiAnMC0wJyB9LAogIHsKICAgIGtleTogJzAtMScsCiAgICB0aXRsZTogJzAtMScsCiAgICBjaGlsZHJlbjogWwogICAgICB7IGtleTogJzAtMS0wJywgdGl0bGU6ICcwLTEtMCcgfSwKICAgICAgeyBrZXk6ICcwLTEtMScsIHRpdGxlOiAnMC0xLTEnIH0sCiAgICBdLAogIH0sCiAgeyBrZXk6ICcwLTInLCB0aXRsZTogJzAtMycgfSwKXTsKCmNvbnN0IHRyYW5zZmVyRGF0YVNvdXJjZTogVHJhbnNmZXJQcm9wc1snZGF0YVNvdXJjZSddID0gW107CmZ1bmN0aW9uIGZsYXR0ZW4obGlzdDogVHJhbnNmZXJQcm9wc1snZGF0YVNvdXJjZSddID0gW10pIHsKICBsaXN0LmZvckVhY2goaXRlbSA9PiB7CiAgICB0cmFuc2ZlckRhdGFTb3VyY2UucHVzaChpdGVtKTsKICAgIGZsYXR0ZW4oaXRlbS5jaGlsZHJlbik7CiAgfSk7Cn0KZmxhdHRlbihKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHREYXRhKSkpOwoKZnVuY3Rpb24gaXNDaGVja2VkKHNlbGVjdGVkS2V5czogKHN0cmluZyB8IG51bWJlcilbXSwgZXZlbnRLZXk6IHN0cmluZyB8IG51bWJlcikgewogIHJldHVybiBzZWxlY3RlZEtleXMuaW5kZXhPZihldmVudEtleSkgIT09IC0xOwp9CgpmdW5jdGlvbiBoYW5kbGVUcmVlRGF0YShkYXRhOiBUcmFuc2ZlclByb3BzWydkYXRhU291cmNlJ10sIHRhcmdldEtleXM6IHN0cmluZ1tdID0gW10pIHsKICBkYXRhLmZvckVhY2goaXRlbSA9PiB7CiAgICBpdGVtWydkaXNhYmxlZCddID0gdGFyZ2V0S2V5cy5pbmNsdWRlcyhpdGVtLmtleSBhcyBhbnkpOwogICAgaWYgKGl0ZW0uY2hpbGRyZW4pIHsKICAgICAgaGFuZGxlVHJlZURhdGEoaXRlbS5jaGlsZHJlbiwgdGFyZ2V0S2V5cyk7CiAgICB9CiAgfSk7CiAgcmV0dXJuIGRhdGEgYXMgVHJlZVByb3BzWyd0cmVlRGF0YSddOwp9CgpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgdGFyZ2V0S2V5cyA9IHJlZjxzdHJpbmdbXT4oW10pOwoKICAgIGNvbnN0IGRhdGFTb3VyY2UgPSByZWYodHJhbnNmZXJEYXRhU291cmNlKTsKCiAgICBjb25zdCB0cmVlRGF0YSA9IGNvbXB1dGVkKCgpID0+IHsKICAgICAgcmV0dXJuIGhhbmRsZVRyZWVEYXRhKHREYXRhLCB0YXJnZXRLZXlzLnZhbHVlKTsKICAgIH0pOwoKICAgIGNvbnN0IG9uQ2hlY2tlZCA9ICgKICAgICAgZTogUGFyYW1ldGVyczxUcmVlUHJvcHNbJ29uQ2hlY2snXT5bMV0gfCBQYXJhbWV0ZXJzPFRyZWVQcm9wc1snb25TZWxlY3QnXT5bMV0sCiAgICAgIGNoZWNrZWRLZXlzOiBzdHJpbmdbXSwKICAgICAgb25JdGVtU2VsZWN0OiAobjogYW55LCBjOiBib29sZWFuKSA9PiB2b2lkLAogICAgKSA9PiB7CiAgICAgIGNvbnN0IHsgZXZlbnRLZXkgfSA9IGUubm9kZTsKICAgICAgb25JdGVtU2VsZWN0KGV2ZW50S2V5LCAhaXNDaGVja2VkKGNoZWNrZWRLZXlzLCBldmVudEtleSkpOwogICAgfTsKICAgIHJldHVybiB7CiAgICAgIHRhcmdldEtleXMsCiAgICAgIGRhdGFTb3VyY2UsCiAgICAgIHRyZWVEYXRhLAogICAgICBvbkNoZWNrZWQsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KPHN0eWxlIHNjb3BlZD4KLnRyZWUtdHJhbnNmZXIgLmFudC10cmFuc2Zlci1saXN0OmZpcnN0LWNoaWxkIHsKICB3aWR0aDogNTAlOwogIGZsZXg6IG5vbmU7Cn0KPC9zdHlsZT4K",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS10cmFuc2ZlcgogICAgICB2LW1vZGVsOnRhcmdldC1rZXlzPSJ0YXJnZXRLZXlzIgogICAgICBjbGFzcz0idHJlZS10cmFuc2ZlciIKICAgICAgOmRhdGEtc291cmNlPSJkYXRhU291cmNlIgogICAgICA6cmVuZGVyPSJpdGVtID0+IGl0ZW0udGl0bGUiCiAgICAgIDpzaG93LXNlbGVjdC1hbGw9ImZhbHNlIgogICAgPgogICAgICA8dGVtcGxhdGUgI2NoaWxkcmVuPSJ7IGRpcmVjdGlvbiwgc2VsZWN0ZWRLZXlzLCBvbkl0ZW1TZWxlY3QgfSI+CiAgICAgICAgPGEtdHJlZQogICAgICAgICAgdi1pZj0iZGlyZWN0aW9uID09PSAnbGVmdCciCiAgICAgICAgICBibG9jay1ub2RlCiAgICAgICAgICBjaGVja2FibGUKICAgICAgICAgIGNoZWNrLXN0cmljdGx5CiAgICAgICAgICBkZWZhdWx0LWV4cGFuZC1hbGwKICAgICAgICAgIDpjaGVja2VkLWtleXM9IlsuLi5zZWxlY3RlZEtleXMsIC4uLnRhcmdldEtleXNdIgogICAgICAgICAgOnRyZWUtZGF0YT0idHJlZURhdGEiCiAgICAgICAgICBAY2hlY2s9IgogICAgICAgICAgICAoXywgcHJvcHMpID0+IHsKICAgICAgICAgICAgICBvbkNoZWNrZWQocHJvcHMsIFsuLi5zZWxlY3RlZEtleXMsIC4uLnRhcmdldEtleXNdLCBvbkl0ZW1TZWxlY3QpOwogICAgICAgICAgICB9CiAgICAgICAgICAiCiAgICAgICAgICBAc2VsZWN0PSIKICAgICAgICAgICAgKF8sIHByb3BzKSA9PiB7CiAgICAgICAgICAgICAgb25DaGVja2VkKHByb3BzLCBbLi4uc2VsZWN0ZWRLZXlzLCAuLi50YXJnZXRLZXlzXSwgb25JdGVtU2VsZWN0KTsKICAgICAgICAgICAgfQogICAgICAgICAgIgogICAgICAgIC8+CiAgICAgIDwvdGVtcGxhdGU+CiAgICA8L2EtdHJhbnNmZXI+CiAgPC9kaXY+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGNvbXB1dGVkLCBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmNvbnN0IHREYXRhID0gW3sKICBrZXk6ICcwLTAnLAogIHRpdGxlOiAnMC0wJywKfSwgewogIGtleTogJzAtMScsCiAgdGl0bGU6ICcwLTEnLAogIGNoaWxkcmVuOiBbewogICAga2V5OiAnMC0xLTAnLAogICAgdGl0bGU6ICcwLTEtMCcsCiAgfSwgewogICAga2V5OiAnMC0xLTEnLAogICAgdGl0bGU6ICcwLTEtMScsCiAgfV0sCn0sIHsKICBrZXk6ICcwLTInLAogIHRpdGxlOiAnMC0zJywKfV07CmNvbnN0IHRyYW5zZmVyRGF0YVNvdXJjZSA9IFtdOwpmdW5jdGlvbiBmbGF0dGVuKGxpc3QgPSBbXSkgewogIGxpc3QuZm9yRWFjaChpdGVtID0+IHsKICAgIHRyYW5zZmVyRGF0YVNvdXJjZS5wdXNoKGl0ZW0pOwogICAgZmxhdHRlbihpdGVtLmNoaWxkcmVuKTsKICB9KTsKfQpmbGF0dGVuKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodERhdGEpKSk7CmZ1bmN0aW9uIGlzQ2hlY2tlZChzZWxlY3RlZEtleXMsIGV2ZW50S2V5KSB7CiAgcmV0dXJuIHNlbGVjdGVkS2V5cy5pbmRleE9mKGV2ZW50S2V5KSAhPT0gLTE7Cn0KZnVuY3Rpb24gaGFuZGxlVHJlZURhdGEoZGF0YSwgdGFyZ2V0S2V5cyA9IFtdKSB7CiAgZGF0YS5mb3JFYWNoKGl0ZW0gPT4gewogICAgaXRlbVsnZGlzYWJsZWQnXSA9IHRhcmdldEtleXMuaW5jbHVkZXMoaXRlbS5rZXkpOwogICAgaWYgKGl0ZW0uY2hpbGRyZW4pIHsKICAgICAgaGFuZGxlVHJlZURhdGEoaXRlbS5jaGlsZHJlbiwgdGFyZ2V0S2V5cyk7CiAgICB9CiAgfSk7CiAgcmV0dXJuIGRhdGE7Cn0KZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IHRhcmdldEtleXMgPSByZWYoW10pOwogICAgY29uc3QgZGF0YVNvdXJjZSA9IHJlZih0cmFuc2ZlckRhdGFTb3VyY2UpOwogICAgY29uc3QgdHJlZURhdGEgPSBjb21wdXRlZCgoKSA9PiB7CiAgICAgIHJldHVybiBoYW5kbGVUcmVlRGF0YSh0RGF0YSwgdGFyZ2V0S2V5cy52YWx1ZSk7CiAgICB9KTsKICAgIGNvbnN0IG9uQ2hlY2tlZCA9IChlLCBjaGVja2VkS2V5cywgb25JdGVtU2VsZWN0KSA9PiB7CiAgICAgIGNvbnN0IHsKICAgICAgICBldmVudEtleSwKICAgICAgfSA9IGUubm9kZTsKICAgICAgb25JdGVtU2VsZWN0KGV2ZW50S2V5LCAhaXNDaGVja2VkKGNoZWNrZWRLZXlzLCBldmVudEtleSkpOwogICAgfTsKICAgIHJldHVybiB7CiAgICAgIHRhcmdldEtleXMsCiAgICAgIGRhdGFTb3VyY2UsCiAgICAgIHRyZWVEYXRhLAogICAgICBvbkNoZWNrZWQsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KPHN0eWxlIHNjb3BlZD4KLnRyZWUtdHJhbnNmZXIgLmFudC10cmFuc2Zlci1saXN0OmZpcnN0LWNoaWxkIHsKICB3aWR0aDogNTAlOwogIGZsZXg6IG5vbmU7Cn0KPC9zdHlsZT4=",isdemo:!1}},{default:i(()=>[n("div",null,[d(e,{"target-keys":s.targetKeys,"onUpdate:target-keys":a[0]||(a[0]=c=>s.targetKeys=c),class:"tree-transfer","data-source":s.dataSource,render:c=>c.title,"show-select-all":!1},{children:i(({direction:c,selectedKeys:C,onItemSelect:m})=>[c==="left"?(A(),h(o,{key:0,"block-node":"",checkable:"","check-strictly":"","default-expand-all":"","checked-keys":[...C,...s.targetKeys],"tree-data":s.treeData,onCheck:(Z,y)=>{s.onChecked(y,[...C,...s.targetKeys],m)},onSelect:(Z,y)=>{s.onChecked(y,[...C,...s.targetKeys],m)}},null,8,["checked-keys","tree-data","onCheck","onSelect"])):X("",!0)]),_:1},8,["target-keys","data-source","render"])])]),htmlCode:i(()=>[Rn]),jsVersionHtml:i(()=>[Xn]),_:1},8,["jsfiddle"])}const Bn=b(Vn,[["render",Yn],["__scopeId","data-v-1ab4823c"]]),K=[];for(let s=0;s<200;s++)K.push({key:s.toString(),title:`content${s+1}`,description:`description of content${s+1}`});const Nn=K.filter(s=>+s.key%3>1).map(s=>s.key),Hn=G({data(){const s=g(!1),a=g(Nn);return{mockData:K,targetKeys:a,disabled:s,handleChange:(I,k,r)=>{console.log("targetKeys: ",I),console.log("direction: ",k),console.log("moveKeys: ",r)}}}}),Dn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-transfer")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("target-keys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("targetKeys"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":data-source"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mockData"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":render"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item => item.title"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":disabled"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("disabled"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"pagination"),t(`
      `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleChange"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-switch")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("checked")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("disabled"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"un-checked-children"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("enabled"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"checked-children"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("disabled"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),t(" 16px")]),n("span",{class:"token punctuation"},'"')])]),t(`
    `),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"interface"),t(),n("span",{class:"token class-name"},"MockData"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token literal-property property"},"description"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token literal-property property"},"mockData"),n("span",{class:"token operator"},":"),t(" MockData"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  mockData`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(" i"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"content"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"description"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"description of content"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token keyword"},"const"),t(" oriTargetKeys "),n("span",{class:"token operator"},"="),t(" mockData"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"filter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token operator"},"+"),t("item"),n("span",{class:"token punctuation"},"."),t("key "),n("span",{class:"token operator"},"%"),t(),n("span",{class:"token number"},"3"),t(),n("span",{class:"token operator"},">"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),t(),n("span",{class:"token operator"},"=>"),t(" item"),n("span",{class:"token punctuation"},"."),t("key"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" disabled "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("boolean"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(" targetKeys "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),t("oriTargetKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"nextTargetKeys"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"direction"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"moveKeys"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'targetKeys: '"),n("span",{class:"token punctuation"},","),t(" nextTargetKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'direction: '"),n("span",{class:"token punctuation"},","),t(" direction"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'moveKeys: '"),n("span",{class:"token punctuation"},","),t(" moveKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      mockData`),n("span",{class:"token punctuation"},","),t(`
      targetKeys`),n("span",{class:"token punctuation"},","),t(`
      disabled`),n("span",{class:"token punctuation"},","),t(`
      handleChange`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),Jn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-transfer")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("target-keys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("targetKeys"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":data-source"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mockData"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":render"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item => item.title"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":disabled"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("disabled"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"pagination"),t(`
      `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleChange"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-switch")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("checked")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("disabled"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"un-checked-children"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("enabled"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"checked-children"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("disabled"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),t(" 16px")]),n("span",{class:"token punctuation"},'"')])]),t(`
    `),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"const"),t(" mockData "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  mockData`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(" i"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"content"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"description"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"description of content"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token keyword"},"const"),t(" oriTargetKeys "),n("span",{class:"token operator"},"="),t(" mockData"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"filter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token operator"},"+"),t("item"),n("span",{class:"token punctuation"},"."),t("key "),n("span",{class:"token operator"},"%"),t(),n("span",{class:"token number"},"3"),t(),n("span",{class:"token operator"},">"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),t(),n("span",{class:"token operator"},"=>"),t(" item"),n("span",{class:"token punctuation"},"."),t("key"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" disabled "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" targetKeys "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),t("oriTargetKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("nextTargetKeys"),n("span",{class:"token punctuation"},","),t(" direction"),n("span",{class:"token punctuation"},","),t(" moveKeys")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'targetKeys: '"),n("span",{class:"token punctuation"},","),t(" nextTargetKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'direction: '"),n("span",{class:"token punctuation"},","),t(" direction"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'moveKeys: '"),n("span",{class:"token punctuation"},","),t(" moveKeys"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      mockData`),n("span",{class:"token punctuation"},","),t(`
      targetKeys`),n("span",{class:"token punctuation"},","),t(`
      disabled`),n("span",{class:"token punctuation"},","),t(`
      handleChange`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function zn(s,a,l,I,k,r){const o=u("a-transfer"),e=u("a-switch"),p=u("demo-box");return A(),h(p,{jsfiddle:{us:"large count of items with pagination.",cn:"\u5927\u6570\u636E\u4E0B\u4F7F\u7528\u5206\u9875\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u5927\u6570\u636E\u4E0B\u4F7F\u7528\u5206\u9875\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>large count of items with pagination.</p>
`,order:5,title:{"zh-CN":"\u5206\u9875","en-US":"Pagination"},relativePath:"components/transfer/demo/pagination.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS10cmFuc2ZlcgogICAgICB2LW1vZGVsOnRhcmdldC1rZXlzPSJ0YXJnZXRLZXlzIgogICAgICA6ZGF0YS1zb3VyY2U9Im1vY2tEYXRhIgogICAgICA6cmVuZGVyPSJpdGVtID0+IGl0ZW0udGl0bGUiCiAgICAgIDpkaXNhYmxlZD0iZGlzYWJsZWQiCiAgICAgIHBhZ2luYXRpb24KICAgICAgQGNoYW5nZT0iaGFuZGxlQ2hhbmdlIgogICAgLz4KICAgIDxhLXN3aXRjaAogICAgICB2LW1vZGVsOmNoZWNrZWQ9ImRpc2FibGVkIgogICAgICB1bi1jaGVja2VkLWNoaWxkcmVuPSJlbmFibGVkIgogICAgICBjaGVja2VkLWNoaWxkcmVuPSJkaXNhYmxlZCIKICAgICAgc3R5bGU9Im1hcmdpbi10b3A6IDE2cHgiCiAgICAvPgogIDwvZGl2Pgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwppbnRlcmZhY2UgTW9ja0RhdGEgewogIGtleTogc3RyaW5nOwogIHRpdGxlOiBzdHJpbmc7CiAgZGVzY3JpcHRpb246IHN0cmluZzsKfQpjb25zdCBtb2NrRGF0YTogTW9ja0RhdGFbXSA9IFtdOwpmb3IgKGxldCBpID0gMDsgaSA8IDIwMDsgaSsrKSB7CiAgbW9ja0RhdGEucHVzaCh7CiAgICBrZXk6IGkudG9TdHJpbmcoKSwKICAgIHRpdGxlOiBgY29udGVudCR7aSArIDF9YCwKICAgIGRlc2NyaXB0aW9uOiBgZGVzY3JpcHRpb24gb2YgY29udGVudCR7aSArIDF9YCwKICB9KTsKfQoKY29uc3Qgb3JpVGFyZ2V0S2V5cyA9IG1vY2tEYXRhLmZpbHRlcihpdGVtID0+ICtpdGVtLmtleSAlIDMgPiAxKS5tYXAoaXRlbSA9PiBpdGVtLmtleSk7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgZGF0YSgpIHsKICAgIGNvbnN0IGRpc2FibGVkID0gcmVmPGJvb2xlYW4+KGZhbHNlKTsKCiAgICBjb25zdCB0YXJnZXRLZXlzID0gcmVmPHN0cmluZ1tdPihvcmlUYXJnZXRLZXlzKTsKCiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAobmV4dFRhcmdldEtleXM6IHN0cmluZ1tdLCBkaXJlY3Rpb246IHN0cmluZywgbW92ZUtleXM6IHN0cmluZ1tdKSA9PiB7CiAgICAgIGNvbnNvbGUubG9nKCd0YXJnZXRLZXlzOiAnLCBuZXh0VGFyZ2V0S2V5cyk7CiAgICAgIGNvbnNvbGUubG9nKCdkaXJlY3Rpb246ICcsIGRpcmVjdGlvbik7CiAgICAgIGNvbnNvbGUubG9nKCdtb3ZlS2V5czogJywgbW92ZUtleXMpOwogICAgfTsKCiAgICByZXR1cm4gewogICAgICBtb2NrRGF0YSwKICAgICAgdGFyZ2V0S2V5cywKICAgICAgZGlzYWJsZWQsCiAgICAgIGhhbmRsZUNoYW5nZSwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS10cmFuc2ZlcgogICAgICB2LW1vZGVsOnRhcmdldC1rZXlzPSJ0YXJnZXRLZXlzIgogICAgICA6ZGF0YS1zb3VyY2U9Im1vY2tEYXRhIgogICAgICA6cmVuZGVyPSJpdGVtID0+IGl0ZW0udGl0bGUiCiAgICAgIDpkaXNhYmxlZD0iZGlzYWJsZWQiCiAgICAgIHBhZ2luYXRpb24KICAgICAgQGNoYW5nZT0iaGFuZGxlQ2hhbmdlIgogICAgLz4KICAgIDxhLXN3aXRjaAogICAgICB2LW1vZGVsOmNoZWNrZWQ9ImRpc2FibGVkIgogICAgICB1bi1jaGVja2VkLWNoaWxkcmVuPSJlbmFibGVkIgogICAgICBjaGVja2VkLWNoaWxkcmVuPSJkaXNhYmxlZCIKICAgICAgc3R5bGU9Im1hcmdpbi10b3A6IDE2cHgiCiAgICAvPgogIDwvZGl2Pgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmNvbnN0IG1vY2tEYXRhID0gW107CmZvciAobGV0IGkgPSAwOyBpIDwgMjAwOyBpKyspIHsKICBtb2NrRGF0YS5wdXNoKHsKICAgIGtleTogaS50b1N0cmluZygpLAogICAgdGl0bGU6IGBjb250ZW50JHtpICsgMX1gLAogICAgZGVzY3JpcHRpb246IGBkZXNjcmlwdGlvbiBvZiBjb250ZW50JHtpICsgMX1gLAogIH0pOwp9CmNvbnN0IG9yaVRhcmdldEtleXMgPSBtb2NrRGF0YS5maWx0ZXIoaXRlbSA9PiAraXRlbS5rZXkgJSAzID4gMSkubWFwKGl0ZW0gPT4gaXRlbS5rZXkpOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIGRhdGEoKSB7CiAgICBjb25zdCBkaXNhYmxlZCA9IHJlZihmYWxzZSk7CiAgICBjb25zdCB0YXJnZXRLZXlzID0gcmVmKG9yaVRhcmdldEtleXMpOwogICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKG5leHRUYXJnZXRLZXlzLCBkaXJlY3Rpb24sIG1vdmVLZXlzKSA9PiB7CiAgICAgIGNvbnNvbGUubG9nKCd0YXJnZXRLZXlzOiAnLCBuZXh0VGFyZ2V0S2V5cyk7CiAgICAgIGNvbnNvbGUubG9nKCdkaXJlY3Rpb246ICcsIGRpcmVjdGlvbik7CiAgICAgIGNvbnNvbGUubG9nKCdtb3ZlS2V5czogJywgbW92ZUtleXMpOwogICAgfTsKICAgIHJldHVybiB7CiAgICAgIG1vY2tEYXRhLAogICAgICB0YXJnZXRLZXlzLAogICAgICBkaXNhYmxlZCwKICAgICAgaGFuZGxlQ2hhbmdlLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+",isdemo:!1}},{default:i(()=>[n("div",null,[d(o,{"target-keys":s.targetKeys,"onUpdate:target-keys":a[0]||(a[0]=c=>s.targetKeys=c),"data-source":s.mockData,render:c=>c.title,disabled:s.disabled,pagination:"",onChange:s.handleChange},null,8,["target-keys","data-source","render","disabled","onChange"]),d(e,{checked:s.disabled,"onUpdate:checked":a[1]||(a[1]=c=>s.disabled=c),"un-checked-children":"enabled","checked-children":"disabled",style:{"margin-top":"16px"}},null,8,["checked"])])]),htmlCode:i(()=>[Dn]),jsVersionHtml:i(()=>[Jn]),_:1},8,["jsfiddle"])}const Fn=b(Hn,[["render",zn]]),xn={pageData:{title:"Transfer",description:"",frontmatter:{category:"Components",type:"\u6570\u636E\u5F55\u5165",title:"Transfer",subtitle:"\u7A7F\u68AD\u6846",cover:"https://gw.alipayobjects.com/zos/alicdn/QAXskNI4G/Transfer.svg"},headers:[{level:2,title:"\u4F55\u65F6\u4F7F\u7528",slug:"\u4F55\u65F6\u4F7F\u7528",content:""},{level:2,title:"API",slug:"API",content:""},{level:3,title:"\u4E8B\u4EF6",slug:"\u4E8B\u4EF6",content:""},{level:3,title:"Render Props",slug:"Render-Props",content:"Transfer \u652F\u6301\u63A5\u6536 `children` \u81EA\u5B9A\u4E49\u6E32\u67D3\u5217\u8868\uFF0C\u5E76\u8FD4\u56DE\u4EE5\u4E0B\u53C2\u6570\uFF1A"},{level:2,title:"\u6CE8\u610F",slug:"\u6CE8\u610F",content:"\u6309\u7167 Vue \u6700\u65B0\u7684\u89C4\u8303\uFF0C\u6240\u6709\u7684\u7EC4\u4EF6\u6570\u7EC4\u6700\u597D\u7ED1\u5B9A key\u3002\u5728 Transfer \u4E2D\uFF0C`dataSource`\u91CC\u7684\u6570\u636E\u503C\u9700\u8981\u6307\u5B9A `key` \u503C\u3002\u5BF9\u4E8E `dataSource` \u9ED8\u8BA4\u5C06\u6BCF\u5217\u6570\u636E\u7684 `key` \u5C5E\u6027\u4F5C\u4E3A\u552F\u4E00\u7684\u6807\u8BC6\u3002"}],relativePath:"components/transfer/index.zh-CN.md",content:`
\u53CC\u680F\u7A7F\u68AD\u9009\u62E9\u6846\u3002

## \u4F55\u65F6\u4F7F\u7528

- \u9700\u8981\u5728\u591A\u4E2A\u53EF\u9009\u9879\u4E2D\u8FDB\u884C\u591A\u9009\u65F6\u3002
- \u6BD4\u8D77 Select \u548C TreeSelect\uFF0C\u7A7F\u68AD\u6846\u5360\u636E\u66F4\u5927\u7684\u7A7A\u95F4\uFF0C\u53EF\u4EE5\u5C55\u793A\u53EF\u9009\u9879\u7684\u66F4\u591A\u4FE1\u606F\u3002

\u7A7F\u68AD\u9009\u62E9\u6846\u7528\u76F4\u89C2\u7684\u65B9\u5F0F\u5728\u4E24\u680F\u4E2D\u79FB\u52A8\u5143\u7D20\uFF0C\u5B8C\u6210\u9009\u62E9\u884C\u4E3A\u3002

\u9009\u62E9\u4E00\u4E2A\u6216\u4EE5\u4E0A\u7684\u9009\u9879\u540E\uFF0C\u70B9\u51FB\u5BF9\u5E94\u7684\u65B9\u5411\u952E\uFF0C\u53EF\u4EE5\u628A\u9009\u4E2D\u7684\u9009\u9879\u79FB\u52A8\u5230\u53E6\u4E00\u680F\u3002\u5176\u4E2D\uFF0C\u5DE6\u8FB9\u4E00\u680F\u4E3A \`source\`\uFF0C\u53F3\u8FB9\u4E00\u680F\u4E3A \`target\`\uFF0CAPI \u7684\u8BBE\u8BA1\u4E5F\u53CD\u6620\u4E86\u8FD9\u4E24\u4E2A\u6982\u5FF5\u3002

## API

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C | \u7248\u672C |
| --- | --- | --- | --- | --- |
| dataSource | \u6570\u636E\u6E90\uFF0C\u5176\u4E2D\u7684\u6570\u636E\u5C06\u4F1A\u88AB\u6E32\u67D3\u5230\u5DE6\u8FB9\u4E00\u680F\u4E2D\uFF0C\`targetKeys\` \u4E2D\u6307\u5B9A\u7684\u9664\u5916\u3002 | \\[{key: string.isRequired,title: string.isRequired,description: string,disabled: bool}]\\[] | \\[] |  |
| disabled | \u662F\u5426\u7981\u7528 | boolean | false |  |
| filterOption | \u63A5\u6536 \`inputValue\` \`option\` \u4E24\u4E2A\u53C2\u6570\uFF0C\u5F53 \`option\` \u7B26\u5408\u7B5B\u9009\u6761\u4EF6\u65F6\uFF0C\u5E94\u8FD4\u56DE \`true\`\uFF0C\u53CD\u4E4B\u5219\u8FD4\u56DE \`false\`\u3002 | (inputValue, option): boolean |  |  |
| footer | \u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u4E00\u4E2A \u4F5C\u7528\u57DF\u63D2\u69FD | slot=&quot;footer&quot; slot-scope=&quot;props&quot; |  |  |
| listStyle | \u4E24\u4E2A\u7A7F\u68AD\u6846\u7684\u81EA\u5B9A\u4E49\u6837\u5F0F | CSSProperties |  |  |
| locale | \u5404\u79CD\u8BED\u8A00 | object | \`{ itemUnit: &#39;\u9879&#39;, itemsUnit: &#39;\u9879&#39;, notFoundContent: &#39;\u5217\u8868\u4E3A\u7A7A&#39;, searchPlaceholder: &#39;\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9&#39; }\` |  |
| oneWay | \u5C55\u793A\u4E3A\u5355\u5411\u6837\u5F0F | boolean | false | 3.0.0 |
| operations | \u64CD\u4F5C\u6587\u6848\u96C6\u5408\uFF0C\u987A\u5E8F\u4ECE\u4E0A\u81F3\u4E0B | string\\[] | \\[&#39;&gt;&#39;, &#39;&amp;lt;&#39;] |  |
| operationStyle | \u64CD\u4F5C\u680F\u7684\u81EA\u5B9A\u4E49\u6837\u5F0F | CSSProperties | - | 3.0.0 |
| pagination | \u4F7F\u7528\u5206\u9875\u6837\u5F0F\uFF0C\u81EA\u5B9A\u4E49\u6E32\u67D3\u5217\u8868\u4E0B\u65E0\u6548 | boolean \\| { pageSize: number } | flase | 3.0.0 |
| render | \u6BCF\u884C\u6570\u636E\u6E32\u67D3\u51FD\u6570\uFF0C\u8BE5\u51FD\u6570\u7684\u5165\u53C2\u4E3A \`dataSource\` \u4E2D\u7684\u9879\uFF0C\u8FD4\u56DE\u503C\u4E3A element\u3002\u6216\u8005\u8FD4\u56DE\u4E00\u4E2A\u666E\u901A\u5BF9\u8C61\uFF0C\u5176\u4E2D \`label\` \u5B57\u6BB5\u4E3A element\uFF0C\`value\` \u5B57\u6BB5\u4E3A title | Function(record)\\| slot |  |  |
| selectedKeys(v-model) | \u8BBE\u7F6E\u54EA\u4E9B\u9879\u5E94\u8BE5\u88AB\u9009\u4E2D | string\\[] | \\[] |  |
| showSearch | \u662F\u5426\u663E\u793A\u641C\u7D22\u6846 | boolean | false |  |
| showSelectAll | \u662F\u5426\u5C55\u793A\u5168\u9009\u52FE\u9009\u6846 | boolean | true |  |
| showDropDown | \u662F\u5426\u5C55\u793A\u4E0B\u62C9\u5168\u9009\u53CD\u9009\u9009\u9879\u6846 | boolean | true |  |
| targetKeys(v-model) | \u663E\u793A\u5728\u53F3\u4FA7\u6846\u6570\u636E\u7684 key \u96C6\u5408 | string\\[] | \\[] |  |
| titles | \u6807\u9898\u96C6\u5408\uFF0C\u987A\u5E8F\u4ECE\u5DE6\u81F3\u53F3 | string\\[] | \\[&#39;&#39;, &#39;&#39;] |  |

### \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D\u79F0 | \u8BF4\u660E | \u56DE\u8C03\u53C2\u6570 | \u7248\u672C |
| --- | --- | --- | --- |
| change | \u9009\u9879\u5728\u4E24\u680F\u4E4B\u95F4\u8F6C\u79FB\u65F6\u7684\u56DE\u8C03\u51FD\u6570 | (targetKeys, direction, moveKeys): void |  |
| scroll | \u9009\u9879\u5217\u8868\u6EDA\u52A8\u65F6\u7684\u56DE\u8C03\u51FD\u6570 | (direction, event): void |  |
| search | \u641C\u7D22\u6846\u5185\u5BB9\u65F6\u6539\u53D8\u65F6\u7684\u56DE\u8C03\u51FD\u6570 | (direction: &#39;left&#39;\\|&#39;right&#39;, value: string): void | - |
| selectChange | \u9009\u4E2D\u9879\u53D1\u751F\u6539\u53D8\u65F6\u7684\u56DE\u8C03\u51FD\u6570 | (sourceSelectedKeys, targetSelectedKeys): void |  |

### Render Props

Transfer \u652F\u6301\u63A5\u6536 \`children\` \u81EA\u5B9A\u4E49\u6E32\u67D3\u5217\u8868\uFF0C\u5E76\u8FD4\u56DE\u4EE5\u4E0B\u53C2\u6570\uFF1A

\`\`\`json
{
  &quot;direction&quot;: String,
  &quot;disabled&quot;: Boolean,
  &quot;filteredItems&quot;: Array,
  &quot;selectedKeys&quot;: Array,
  &quot;onItemSelect&quot;: Function,
  &quot;onItemSelectAll&quot;: Function
}
\`\`\`

| \u53C2\u6570          | \u8BF4\u660E           | \u7C7B\u578B                                 | \u7248\u672C |
| ------------- | -------------- | ------------------------------------ | ---- |
| direction     | \u6E32\u67D3\u5217\u8868\u7684\u65B9\u5411 | &#39;left&#39; \\| &#39;right&#39;                    |      |
| disabled      | \u662F\u5426\u7981\u7528\u5217\u8868   | boolean                              |      |
| filteredItems | \u8FC7\u6EE4\u540E\u7684\u6570\u636E   | TransferItem\\[]                      |      |
| itemSelect    | \u52FE\u9009\u6761\u76EE       | (key: string, selected: boolean)     |      |
| itemSelectAll | \u52FE\u9009\u4E00\u7EC4\u6761\u76EE   | (keys: string\\[], selected: boolean) |      |
| selectedKeys  | \u9009\u4E2D\u7684\u6761\u76EE     | string\\[]                            |      |

#### \u53C2\u8003\u793A\u4F8B

\`\`\`html
&lt;a-transfer&gt;
  &lt;template
    #children=&quot;{
      direction,
      filteredItems,
      selectedKeys,
      disabled: listDisabled,
      onItemSelectAll,
      onItemSelect,
    }&quot;
  &gt;
    &lt;your-component /&gt;
  &lt;template&gt;
&lt;/a-transfer&gt;
\`\`\`

## \u6CE8\u610F

\u6309\u7167 Vue \u6700\u65B0\u7684\u89C4\u8303\uFF0C\u6240\u6709\u7684\u7EC4\u4EF6\u6570\u7EC4\u6700\u597D\u7ED1\u5B9A key\u3002\u5728 Transfer \u4E2D\uFF0C\`dataSource\`\u91CC\u7684\u6570\u636E\u503C\u9700\u8981\u6307\u5B9A \`key\` \u503C\u3002\u5BF9\u4E8E \`dataSource\` \u9ED8\u8BA4\u5C06\u6BCF\u5217\u6570\u636E\u7684 \`key\` \u5C5E\u6027\u4F5C\u4E3A\u552F\u4E00\u7684\u6807\u8BC6\u3002

\u5982\u679C\u4F60\u7684\u6570\u636E\u6CA1\u6709\u8FD9\u4E2A\u5C5E\u6027\uFF0C\u52A1\u5FC5\u4F7F\u7528 \`rowKey\` \u6765\u6307\u5B9A\u6570\u636E\u5217\u7684\u4E3B\u952E\u3002

\`\`\`jsx
// \u6BD4\u5982\u4F60\u7684\u6570\u636E\u4E3B\u952E\u662F uid
return &lt;Transfer :rowKey=&quot;record =&gt; record.uid&quot; /&gt;;
\`\`\`
`,html:`<p>\u53CC\u680F\u7A7F\u68AD\u9009\u62E9\u6846\u3002</p>
<h2 id="\u4F55\u65F6\u4F7F\u7528">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<ul>
<li>\u9700\u8981\u5728\u591A\u4E2A\u53EF\u9009\u9879\u4E2D\u8FDB\u884C\u591A\u9009\u65F6\u3002</li>
<li>\u6BD4\u8D77 Select \u548C TreeSelect\uFF0C\u7A7F\u68AD\u6846\u5360\u636E\u66F4\u5927\u7684\u7A7A\u95F4\uFF0C\u53EF\u4EE5\u5C55\u793A\u53EF\u9009\u9879\u7684\u66F4\u591A\u4FE1\u606F\u3002</li>
</ul>
<p>\u7A7F\u68AD\u9009\u62E9\u6846\u7528\u76F4\u89C2\u7684\u65B9\u5F0F\u5728\u4E24\u680F\u4E2D\u79FB\u52A8\u5143\u7D20\uFF0C\u5B8C\u6210\u9009\u62E9\u884C\u4E3A\u3002</p>
<p>\u9009\u62E9\u4E00\u4E2A\u6216\u4EE5\u4E0A\u7684\u9009\u9879\u540E\uFF0C\u70B9\u51FB\u5BF9\u5E94\u7684\u65B9\u5411\u952E\uFF0C\u53EF\u4EE5\u628A\u9009\u4E2D\u7684\u9009\u9879\u79FB\u52A8\u5230\u53E6\u4E00\u680F\u3002\u5176\u4E2D\uFF0C\u5DE6\u8FB9\u4E00\u680F\u4E3A <code>source</code>\uFF0C\u53F3\u8FB9\u4E00\u680F\u4E3A <code>target</code>\uFF0CAPI \u7684\u8BBE\u8BA1\u4E5F\u53CD\u6620\u4E86\u8FD9\u4E24\u4E2A\u6982\u5FF5\u3002</p>
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
<td>dataSource</td>
<td>\u6570\u636E\u6E90\uFF0C\u5176\u4E2D\u7684\u6570\u636E\u5C06\u4F1A\u88AB\u6E32\u67D3\u5230\u5DE6\u8FB9\u4E00\u680F\u4E2D\uFF0C<code>targetKeys</code> \u4E2D\u6307\u5B9A\u7684\u9664\u5916\u3002</td>
<td>[{key: string.isRequired,title: string.isRequired,description: string,disabled: bool}][]</td>
<td>[]</td>
<td></td>
</tr>
<tr>
<td>disabled</td>
<td>\u662F\u5426\u7981\u7528</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>filterOption</td>
<td>\u63A5\u6536 <code>inputValue</code> <code>option</code> \u4E24\u4E2A\u53C2\u6570\uFF0C\u5F53 <code>option</code> \u7B26\u5408\u7B5B\u9009\u6761\u4EF6\u65F6\uFF0C\u5E94\u8FD4\u56DE <code>true</code>\uFF0C\u53CD\u4E4B\u5219\u8FD4\u56DE <code>false</code>\u3002</td>
<td>(inputValue, option): boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>footer</td>
<td>\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u4E00\u4E2A \u4F5C\u7528\u57DF\u63D2\u69FD</td>
<td>slot=&quot;footer&quot; slot-scope=&quot;props&quot;</td>
<td></td>
<td></td>
</tr>
<tr>
<td>listStyle</td>
<td>\u4E24\u4E2A\u7A7F\u68AD\u6846\u7684\u81EA\u5B9A\u4E49\u6837\u5F0F</td>
<td>CSSProperties</td>
<td></td>
<td></td>
</tr>
<tr>
<td>locale</td>
<td>\u5404\u79CD\u8BED\u8A00</td>
<td>object</td>
<td><code>{ itemUnit: '\u9879', itemsUnit: '\u9879', notFoundContent: '\u5217\u8868\u4E3A\u7A7A', searchPlaceholder: '\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9' }</code></td>
<td></td>
</tr>
<tr>
<td>oneWay</td>
<td>\u5C55\u793A\u4E3A\u5355\u5411\u6837\u5F0F</td>
<td>boolean</td>
<td>false</td>
<td>3.0.0</td>
</tr>
<tr>
<td>operations</td>
<td>\u64CD\u4F5C\u6587\u6848\u96C6\u5408\uFF0C\u987A\u5E8F\u4ECE\u4E0A\u81F3\u4E0B</td>
<td>string[]</td>
<td>['&gt;', '&lt;']</td>
<td></td>
</tr>
<tr>
<td>operationStyle</td>
<td>\u64CD\u4F5C\u680F\u7684\u81EA\u5B9A\u4E49\u6837\u5F0F</td>
<td>CSSProperties</td>
<td>-</td>
<td>3.0.0</td>
</tr>
<tr>
<td>pagination</td>
<td>\u4F7F\u7528\u5206\u9875\u6837\u5F0F\uFF0C\u81EA\u5B9A\u4E49\u6E32\u67D3\u5217\u8868\u4E0B\u65E0\u6548</td>
<td>boolean | { pageSize: number }</td>
<td>flase</td>
<td>3.0.0</td>
</tr>
<tr>
<td>render</td>
<td>\u6BCF\u884C\u6570\u636E\u6E32\u67D3\u51FD\u6570\uFF0C\u8BE5\u51FD\u6570\u7684\u5165\u53C2\u4E3A <code>dataSource</code> \u4E2D\u7684\u9879\uFF0C\u8FD4\u56DE\u503C\u4E3A element\u3002\u6216\u8005\u8FD4\u56DE\u4E00\u4E2A\u666E\u901A\u5BF9\u8C61\uFF0C\u5176\u4E2D <code>label</code> \u5B57\u6BB5\u4E3A element\uFF0C<code>value</code> \u5B57\u6BB5\u4E3A title</td>
<td>Function(record)| slot</td>
<td></td>
<td></td>
</tr>
<tr>
<td>selectedKeys(v-model)</td>
<td>\u8BBE\u7F6E\u54EA\u4E9B\u9879\u5E94\u8BE5\u88AB\u9009\u4E2D</td>
<td>string[]</td>
<td>[]</td>
<td></td>
</tr>
<tr>
<td>showSearch</td>
<td>\u662F\u5426\u663E\u793A\u641C\u7D22\u6846</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>showSelectAll</td>
<td>\u662F\u5426\u5C55\u793A\u5168\u9009\u52FE\u9009\u6846</td>
<td>boolean</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>showDropDown</td>
<td>\u662F\u5426\u5C55\u793A\u4E0B\u62C9\u5168\u9009\u53CD\u9009\u9009\u9879\u6846</td>
<td>boolean</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>targetKeys(v-model)</td>
<td>\u663E\u793A\u5728\u53F3\u4FA7\u6846\u6570\u636E\u7684 key \u96C6\u5408</td>
<td>string[]</td>
<td>[]</td>
<td></td>
</tr>
<tr>
<td>titles</td>
<td>\u6807\u9898\u96C6\u5408\uFF0C\u987A\u5E8F\u4ECE\u5DE6\u81F3\u53F3</td>
<td>string[]</td>
<td>['', '']</td>
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
<th>\u7248\u672C</th>
</tr>
</thead>
<tbody>
<tr>
<td>change</td>
<td>\u9009\u9879\u5728\u4E24\u680F\u4E4B\u95F4\u8F6C\u79FB\u65F6\u7684\u56DE\u8C03\u51FD\u6570</td>
<td>(targetKeys, direction, moveKeys): void</td>
<td></td>
</tr>
<tr>
<td>scroll</td>
<td>\u9009\u9879\u5217\u8868\u6EDA\u52A8\u65F6\u7684\u56DE\u8C03\u51FD\u6570</td>
<td>(direction, event): void</td>
<td></td>
</tr>
<tr>
<td>search</td>
<td>\u641C\u7D22\u6846\u5185\u5BB9\u65F6\u6539\u53D8\u65F6\u7684\u56DE\u8C03\u51FD\u6570</td>
<td>(direction: 'left'|'right', value: string): void</td>
<td>-</td>
</tr>
<tr>
<td>selectChange</td>
<td>\u9009\u4E2D\u9879\u53D1\u751F\u6539\u53D8\u65F6\u7684\u56DE\u8C03\u51FD\u6570</td>
<td>(sourceSelectedKeys, targetSelectedKeys): void</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="Render-Props">Render Props <a class="header-anchor" href="#Render-Props">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>Transfer \u652F\u6301\u63A5\u6536 <code>children</code> \u81EA\u5B9A\u4E49\u6E32\u67D3\u5217\u8868\uFF0C\u5E76\u8FD4\u56DE\u4EE5\u4E0B\u53C2\u6570\uFF1A</p>
<pre class="language-json" v-pre><code><span class="token punctuation">{</span>
  <span class="token property">"direction"</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
  <span class="token property">"disabled"</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
  <span class="token property">"filteredItems"</span><span class="token operator">:</span> Array<span class="token punctuation">,</span>
  <span class="token property">"selectedKeys"</span><span class="token operator">:</span> Array<span class="token punctuation">,</span>
  <span class="token property">"onItemSelect"</span><span class="token operator">:</span> Function<span class="token punctuation">,</span>
  <span class="token property">"onItemSelectAll"</span><span class="token operator">:</span> Function
<span class="token punctuation">}</span>
</code></pre>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u7248\u672C</th>
</tr>
</thead>
<tbody>
<tr>
<td>direction</td>
<td>\u6E32\u67D3\u5217\u8868\u7684\u65B9\u5411</td>
<td>'left' | 'right'</td>
<td></td>
</tr>
<tr>
<td>disabled</td>
<td>\u662F\u5426\u7981\u7528\u5217\u8868</td>
<td>boolean</td>
<td></td>
</tr>
<tr>
<td>filteredItems</td>
<td>\u8FC7\u6EE4\u540E\u7684\u6570\u636E</td>
<td>TransferItem[]</td>
<td></td>
</tr>
<tr>
<td>itemSelect</td>
<td>\u52FE\u9009\u6761\u76EE</td>
<td>(key: string, selected: boolean)</td>
<td></td>
</tr>
<tr>
<td>itemSelectAll</td>
<td>\u52FE\u9009\u4E00\u7EC4\u6761\u76EE</td>
<td>(keys: string[], selected: boolean)</td>
<td></td>
</tr>
<tr>
<td>selectedKeys</td>
<td>\u9009\u4E2D\u7684\u6761\u76EE</td>
<td>string[]</td>
<td></td>
</tr>
</tbody>
</table>
<h4 id="\u53C2\u8003\u793A\u4F8B">\u53C2\u8003\u793A\u4F8B <a class="header-anchor" href="#\u53C2\u8003\u793A\u4F8B">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h4>
<pre class="language-html" v-pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-transfer</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span>
    <span class="token attr-name">#children</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{
      direction,
      filteredItems,
      selectedKeys,
      disabled: listDisabled,
      onItemSelectAll,
      onItemSelect,
    }<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>your-component</span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-transfer</span><span class="token punctuation">></span></span>
</code></pre>
<h2 id="\u6CE8\u610F">\u6CE8\u610F <a class="header-anchor" href="#\u6CE8\u610F">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u6309\u7167 Vue \u6700\u65B0\u7684\u89C4\u8303\uFF0C\u6240\u6709\u7684\u7EC4\u4EF6\u6570\u7EC4\u6700\u597D\u7ED1\u5B9A key\u3002\u5728 Transfer \u4E2D\uFF0C<code>dataSource</code>\u91CC\u7684\u6570\u636E\u503C\u9700\u8981\u6307\u5B9A <code>key</code> \u503C\u3002\u5BF9\u4E8E <code>dataSource</code> \u9ED8\u8BA4\u5C06\u6BCF\u5217\u6570\u636E\u7684 <code>key</code> \u5C5E\u6027\u4F5C\u4E3A\u552F\u4E00\u7684\u6807\u8BC6\u3002</p>
<p>\u5982\u679C\u4F60\u7684\u6570\u636E\u6CA1\u6709\u8FD9\u4E2A\u5C5E\u6027\uFF0C\u52A1\u5FC5\u4F7F\u7528 <code>rowKey</code> \u6765\u6307\u5B9A\u6570\u636E\u5217\u7684\u4E3B\u952E\u3002</p>
<pre class="language-jsx" v-pre><code><span class="token comment">// \u6BD4\u5982\u4F60\u7684\u6570\u636E\u4E3B\u952E\u662F uid</span>
<span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Transfer</span></span> <span class="token attr-name">:rowKey</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>record => record.uid<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
</code></pre>
`,lastUpdated:1670463015749}},Tn={class:"markdown"},jn=B(`<p>\u53CC\u680F\u7A7F\u68AD\u9009\u62E9\u6846\u3002</p><h2 id="\u4F55\u65F6\u4F7F\u7528">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528"><span aria-hidden="true" class="anchor">#</span></a></h2><ul><li>\u9700\u8981\u5728\u591A\u4E2A\u53EF\u9009\u9879\u4E2D\u8FDB\u884C\u591A\u9009\u65F6\u3002</li><li>\u6BD4\u8D77 Select \u548C TreeSelect\uFF0C\u7A7F\u68AD\u6846\u5360\u636E\u66F4\u5927\u7684\u7A7A\u95F4\uFF0C\u53EF\u4EE5\u5C55\u793A\u53EF\u9009\u9879\u7684\u66F4\u591A\u4FE1\u606F\u3002</li></ul><p>\u7A7F\u68AD\u9009\u62E9\u6846\u7528\u76F4\u89C2\u7684\u65B9\u5F0F\u5728\u4E24\u680F\u4E2D\u79FB\u52A8\u5143\u7D20\uFF0C\u5B8C\u6210\u9009\u62E9\u884C\u4E3A\u3002</p><p>\u9009\u62E9\u4E00\u4E2A\u6216\u4EE5\u4E0A\u7684\u9009\u9879\u540E\uFF0C\u70B9\u51FB\u5BF9\u5E94\u7684\u65B9\u5411\u952E\uFF0C\u53EF\u4EE5\u628A\u9009\u4E2D\u7684\u9009\u9879\u79FB\u52A8\u5230\u53E6\u4E00\u680F\u3002\u5176\u4E2D\uFF0C\u5DE6\u8FB9\u4E00\u680F\u4E3A <code>source</code>\uFF0C\u53F3\u8FB9\u4E00\u680F\u4E3A <code>target</code>\uFF0CAPI \u7684\u8BBE\u8BA1\u4E5F\u53CD\u6620\u4E86\u8FD9\u4E24\u4E2A\u6982\u5FF5\u3002</p><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>dataSource</td><td>\u6570\u636E\u6E90\uFF0C\u5176\u4E2D\u7684\u6570\u636E\u5C06\u4F1A\u88AB\u6E32\u67D3\u5230\u5DE6\u8FB9\u4E00\u680F\u4E2D\uFF0C<code>targetKeys</code> \u4E2D\u6307\u5B9A\u7684\u9664\u5916\u3002</td><td>[{key: string.isRequired,title: string.isRequired,description: string,disabled: bool}][]</td><td>[]</td><td></td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>false</td><td></td></tr><tr><td>filterOption</td><td>\u63A5\u6536 <code>inputValue</code> <code>option</code> \u4E24\u4E2A\u53C2\u6570\uFF0C\u5F53 <code>option</code> \u7B26\u5408\u7B5B\u9009\u6761\u4EF6\u65F6\uFF0C\u5E94\u8FD4\u56DE <code>true</code>\uFF0C\u53CD\u4E4B\u5219\u8FD4\u56DE <code>false</code>\u3002</td><td>(inputValue, option): boolean</td><td></td><td></td></tr><tr><td>footer</td><td>\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u4E00\u4E2A \u4F5C\u7528\u57DF\u63D2\u69FD</td><td>slot=&quot;footer&quot; slot-scope=&quot;props&quot;</td><td></td><td></td></tr><tr><td>listStyle</td><td>\u4E24\u4E2A\u7A7F\u68AD\u6846\u7684\u81EA\u5B9A\u4E49\u6837\u5F0F</td><td>CSSProperties</td><td></td><td></td></tr><tr><td>locale</td><td>\u5404\u79CD\u8BED\u8A00</td><td>object</td><td><code>{ itemUnit: &#39;\u9879&#39;, itemsUnit: &#39;\u9879&#39;, notFoundContent: &#39;\u5217\u8868\u4E3A\u7A7A&#39;, searchPlaceholder: &#39;\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9&#39; }</code></td><td></td></tr><tr><td>oneWay</td><td>\u5C55\u793A\u4E3A\u5355\u5411\u6837\u5F0F</td><td>boolean</td><td>false</td><td>3.0.0</td></tr><tr><td>operations</td><td>\u64CD\u4F5C\u6587\u6848\u96C6\u5408\uFF0C\u987A\u5E8F\u4ECE\u4E0A\u81F3\u4E0B</td><td>string[]</td><td>[&#39;&gt;&#39;, &#39;&lt;&#39;]</td><td></td></tr><tr><td>operationStyle</td><td>\u64CD\u4F5C\u680F\u7684\u81EA\u5B9A\u4E49\u6837\u5F0F</td><td>CSSProperties</td><td>-</td><td>3.0.0</td></tr><tr><td>pagination</td><td>\u4F7F\u7528\u5206\u9875\u6837\u5F0F\uFF0C\u81EA\u5B9A\u4E49\u6E32\u67D3\u5217\u8868\u4E0B\u65E0\u6548</td><td>boolean | { pageSize: number }</td><td>flase</td><td>3.0.0</td></tr><tr><td>render</td><td>\u6BCF\u884C\u6570\u636E\u6E32\u67D3\u51FD\u6570\uFF0C\u8BE5\u51FD\u6570\u7684\u5165\u53C2\u4E3A <code>dataSource</code> \u4E2D\u7684\u9879\uFF0C\u8FD4\u56DE\u503C\u4E3A element\u3002\u6216\u8005\u8FD4\u56DE\u4E00\u4E2A\u666E\u901A\u5BF9\u8C61\uFF0C\u5176\u4E2D <code>label</code> \u5B57\u6BB5\u4E3A element\uFF0C<code>value</code> \u5B57\u6BB5\u4E3A title</td><td>Function(record)| slot</td><td></td><td></td></tr><tr><td>selectedKeys(v-model)</td><td>\u8BBE\u7F6E\u54EA\u4E9B\u9879\u5E94\u8BE5\u88AB\u9009\u4E2D</td><td>string[]</td><td>[]</td><td></td></tr><tr><td>showSearch</td><td>\u662F\u5426\u663E\u793A\u641C\u7D22\u6846</td><td>boolean</td><td>false</td><td></td></tr><tr><td>showSelectAll</td><td>\u662F\u5426\u5C55\u793A\u5168\u9009\u52FE\u9009\u6846</td><td>boolean</td><td>true</td><td></td></tr><tr><td>showDropDown</td><td>\u662F\u5426\u5C55\u793A\u4E0B\u62C9\u5168\u9009\u53CD\u9009\u9009\u9879\u6846</td><td>boolean</td><td>true</td><td></td></tr><tr><td>targetKeys(v-model)</td><td>\u663E\u793A\u5728\u53F3\u4FA7\u6846\u6570\u636E\u7684 key \u96C6\u5408</td><td>string[]</td><td>[]</td><td></td></tr><tr><td>titles</td><td>\u6807\u9898\u96C6\u5408\uFF0C\u987A\u5E8F\u4ECE\u5DE6\u81F3\u53F3</td><td>string[]</td><td>[&#39;&#39;, &#39;&#39;]</td><td></td></tr></tbody></table><h3 id="\u4E8B\u4EF6">\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8B\u4EF6"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>change</td><td>\u9009\u9879\u5728\u4E24\u680F\u4E4B\u95F4\u8F6C\u79FB\u65F6\u7684\u56DE\u8C03\u51FD\u6570</td><td>(targetKeys, direction, moveKeys): void</td><td></td></tr><tr><td>scroll</td><td>\u9009\u9879\u5217\u8868\u6EDA\u52A8\u65F6\u7684\u56DE\u8C03\u51FD\u6570</td><td>(direction, event): void</td><td></td></tr><tr><td>search</td><td>\u641C\u7D22\u6846\u5185\u5BB9\u65F6\u6539\u53D8\u65F6\u7684\u56DE\u8C03\u51FD\u6570</td><td>(direction: &#39;left&#39;|&#39;right&#39;, value: string): void</td><td>-</td></tr><tr><td>selectChange</td><td>\u9009\u4E2D\u9879\u53D1\u751F\u6539\u53D8\u65F6\u7684\u56DE\u8C03\u51FD\u6570</td><td>(sourceSelectedKeys, targetSelectedKeys): void</td><td></td></tr></tbody></table><h3 id="Render-Props">Render Props <a class="header-anchor" href="#Render-Props"><span aria-hidden="true" class="anchor">#</span></a></h3><p>Transfer \u652F\u6301\u63A5\u6536 <code>children</code> \u81EA\u5B9A\u4E49\u6E32\u67D3\u5217\u8868\uFF0C\u5E76\u8FD4\u56DE\u4EE5\u4E0B\u53C2\u6570\uFF1A</p><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;direction&quot;</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
  <span class="token property">&quot;disabled&quot;</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
  <span class="token property">&quot;filteredItems&quot;</span><span class="token operator">:</span> Array<span class="token punctuation">,</span>
  <span class="token property">&quot;selectedKeys&quot;</span><span class="token operator">:</span> Array<span class="token punctuation">,</span>
  <span class="token property">&quot;onItemSelect&quot;</span><span class="token operator">:</span> Function<span class="token punctuation">,</span>
  <span class="token property">&quot;onItemSelectAll&quot;</span><span class="token operator">:</span> Function
<span class="token punctuation">}</span>
</code></pre><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>direction</td><td>\u6E32\u67D3\u5217\u8868\u7684\u65B9\u5411</td><td>&#39;left&#39; | &#39;right&#39;</td><td></td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528\u5217\u8868</td><td>boolean</td><td></td></tr><tr><td>filteredItems</td><td>\u8FC7\u6EE4\u540E\u7684\u6570\u636E</td><td>TransferItem[]</td><td></td></tr><tr><td>itemSelect</td><td>\u52FE\u9009\u6761\u76EE</td><td>(key: string, selected: boolean)</td><td></td></tr><tr><td>itemSelectAll</td><td>\u52FE\u9009\u4E00\u7EC4\u6761\u76EE</td><td>(keys: string[], selected: boolean)</td><td></td></tr><tr><td>selectedKeys</td><td>\u9009\u4E2D\u7684\u6761\u76EE</td><td>string[]</td><td></td></tr></tbody></table><h4 id="\u53C2\u8003\u793A\u4F8B">\u53C2\u8003\u793A\u4F8B <a class="header-anchor" href="#\u53C2\u8003\u793A\u4F8B"><span aria-hidden="true" class="anchor">#</span></a></h4><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-transfer</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span>
    <span class="token attr-name">#children</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      direction,
      filteredItems,
      selectedKeys,
      disabled: listDisabled,
      onItemSelectAll,
      onItemSelect,
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>your-component</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-transfer</span><span class="token punctuation">&gt;</span></span>
</code></pre><h2 id="\u6CE8\u610F">\u6CE8\u610F <a class="header-anchor" href="#\u6CE8\u610F"><span aria-hidden="true" class="anchor">#</span></a></h2><p>\u6309\u7167 Vue \u6700\u65B0\u7684\u89C4\u8303\uFF0C\u6240\u6709\u7684\u7EC4\u4EF6\u6570\u7EC4\u6700\u597D\u7ED1\u5B9A key\u3002\u5728 Transfer \u4E2D\uFF0C<code>dataSource</code>\u91CC\u7684\u6570\u636E\u503C\u9700\u8981\u6307\u5B9A <code>key</code> \u503C\u3002\u5BF9\u4E8E <code>dataSource</code> \u9ED8\u8BA4\u5C06\u6BCF\u5217\u6570\u636E\u7684 <code>key</code> \u5C5E\u6027\u4F5C\u4E3A\u552F\u4E00\u7684\u6807\u8BC6\u3002</p><p>\u5982\u679C\u4F60\u7684\u6570\u636E\u6CA1\u6709\u8FD9\u4E2A\u5C5E\u6027\uFF0C\u52A1\u5FC5\u4F7F\u7528 <code>rowKey</code> \u6765\u6307\u5B9A\u6570\u636E\u5217\u7684\u4E3B\u952E\u3002</p><pre class="language-jsx"><code><span class="token comment">// \u6BD4\u5982\u4F60\u7684\u6570\u636E\u4E3B\u952E\u662F uid</span>
<span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Transfer</span></span> <span class="token attr-name">:rowKey</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>record =&gt; record.uid<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">;</span>
</code></pre>`,19),Pn=[jn];function Ln(s,a,l,I,k,r){return A(),Y("article",Tn,Pn)}const En=b(xn,[["render",Ln]]),Un={pageData:{title:"Transfer",description:"",frontmatter:{category:"Components",type:"Data Entry",title:"Transfer",cover:"https://gw.alipayobjects.com/zos/alicdn/QAXskNI4G/Transfer.svg"},headers:[{level:2,title:"When To Use",slug:"When-To-Use",content:""},{level:2,title:"API",slug:"API",content:""},{level:3,title:"events",slug:"events",content:""},{level:3,title:"Render Props",slug:"Render-Props",content:"Transfer accept `children` to customize render list, using follow props:"},{level:2,title:"Warning",slug:"Warning",content:"According the standard of Vue, the key should always be supplied directly to the elements in the array. In Transfer, the keys should be set on the elements included in `dataSource` array. By default, `key` property is used as an unique identifier."}],relativePath:"components/transfer/index.en-US.md",content:`
Alert component for feedback.

## When To Use

- When you need to show alert messages to users.
- When you need a persistent static container which is closable by user actions.

Transfer the elements between two columns in an intuitive and efficient way.

One or more elements can be selected from either column, one click on the proper \`direction\` button, and the transfer is done. The left column is considered the \`source\` and the right column is considered the \`target\`. As you can see in the API description, these names are reflected in.

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| dataSource | Used for setting the source data. The elements that are part of this array will be present the left column. Except the elements whose keys are included in \`targetKeys\` prop. | \\[{key: string.isRequired,title: string.isRequired,description: string,disabled: bool}] | \\[] |  |
| disabled | Whether disabled transfer | boolean | false |  |
| filterOption | A function to determine whether an item should show in search result list | (inputValue, option): boolean |  |  |
| footer | customize the progress dot by setting a scoped slot | slot=&quot;footer&quot; slot-scope=&quot;props&quot; |  |  |
| listStyle | A custom CSS style used for rendering the transfer columns. | CSSProperties |  |  |
| locale | i18n text including filter, empty text, item unit, etc | object | \`{ itemUnit: &#39;item&#39;, itemsUnit: &#39;items&#39;, notFoundContent: &#39;The list is empty&#39;, searchPlaceholder: &#39;Search here&#39; }\` |  |
| oneWay | Display as single direction style | boolean | false | 3.0.0 |
| operations | A set of operations that are sorted from top to bottom. | string\\[] | \\[&#39;&gt;&#39;, &#39;&amp;lt;&#39;] |  |
| operationStyle | A custom CSS style used for rendering the operations column | CSSProperties | - | 3.0.0 |
| pagination | Use pagination. Not work in render props | boolean \\| { pageSize: number } | false | 3.0.0 |
| render | The function to generate the item shown on a column. Based on an record (element of the dataSource array), this function should return a element which is generated from that record. Also, it can return a plain object with \`value\` and \`label\`, \`label\` is a element and \`value\` is for title | Function(record) \\| slot |  |  |
| selectedKeys(v-model) | A set of keys of selected items. | string\\[] | \\[] |  |
| showSearch | If included, a search box is shown on each column. | boolean | false |  |
| showSelectAll | Show select all checkbox on the header | boolean | true |  |
| showDropDown | Show dropdown button on the header | boolean | true |  |
| targetKeys(v-model) | A set of keys of elements that are listed on the right column. | string\\[] | \\[] |  |
| titles | A set of titles that are sorted from left to right. | string\\[] | - |  |

### events

| Events Name | Description | Arguments | Version |
| --- | --- | --- | --- |
| change | A callback function that is executed when the transfer between columns is complete. | (targetKeys, direction, moveKeys): void |  |
| scroll | A callback function which is executed when scroll options list | (direction, event): void |  |
| search | A callback function which is executed when search field are changed | (direction: &#39;left&#39;\\|&#39;right&#39;, value: string): void | - |
| selectChange | A callback function which is executed when selected items are changed. | (sourceSelectedKeys, targetSelectedKeys): void |  |

### Render Props

Transfer accept \`children\` to customize render list, using follow props:

\`\`\`json
{
  &quot;direction&quot;: String,
  &quot;disabled&quot;: Boolean,
  &quot;filteredItems&quot;: Array,
  &quot;selectedKeys&quot;: Array,
  &quot;onItemSelect&quot;: Function,
  &quot;onItemSelectAll&quot;: Function
}
\`\`\`

| Property        | Description             | Type                                 | Version |
| --------------- | ----------------------- | ------------------------------------ | ------- |
| direction       | List render direction   | &#39;left&#39; \\| &#39;right&#39;                    |         |
| disabled        | Disable list or not     | boolean                              |         |
| filteredItems   | Filtered items          | TransferItem\\[]                      |         |
| selectedKeys    | Selected items          | string\\[]                            |         |
| onItemSelect    | Select item             | (key: string, selected: boolean)     |         |
| onItemSelectAll | Select a group of items | (keys: string\\[], selected: boolean) |         |

#### example

\`\`\`html
&lt;a-transfer&gt;
  &lt;template
    #children=&quot;{
      direction,
      filteredItems,
      selectedKeys,
      disabled: listDisabled,
      onItemSelectAll,
      onItemSelect,
    }&quot;
  &gt;
    &lt;your-component /&gt;
  &lt;template&gt;
&lt;/a-transfer&gt;
\`\`\`

## Warning

According the standard of Vue, the key should always be supplied directly to the elements in the array. In Transfer, the keys should be set on the elements included in \`dataSource\` array. By default, \`key\` property is used as an unique identifier.

If there&#39;s no \`key\` in your data, you should use \`rowKey\` to specify the key that will be used for uniquely identify each element.

\`\`\`jsx
// eg. your primary key is \`uid\`
return &lt;Transfer :rowKey=&quot;record =&gt; record.uid&quot; /&gt;;
\`\`\`
`,html:`<p>Alert component for feedback.</p>
<h2 id="When-To-Use">When To Use <a class="header-anchor" href="#When-To-Use">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<ul>
<li>When you need to show alert messages to users.</li>
<li>When you need a persistent static container which is closable by user actions.</li>
</ul>
<p>Transfer the elements between two columns in an intuitive and efficient way.</p>
<p>One or more elements can be selected from either column, one click on the proper <code>direction</code> button, and the transfer is done. The left column is considered the <code>source</code> and the right column is considered the <code>target</code>. As you can see in the API description, these names are reflected in.</p>
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
<td>dataSource</td>
<td>Used for setting the source data. The elements that are part of this array will be present the left column. Except the elements whose keys are included in <code>targetKeys</code> prop.</td>
<td>[{key: string.isRequired,title: string.isRequired,description: string,disabled: bool}]</td>
<td>[]</td>
<td></td>
</tr>
<tr>
<td>disabled</td>
<td>Whether disabled transfer</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>filterOption</td>
<td>A function to determine whether an item should show in search result list</td>
<td>(inputValue, option): boolean</td>
<td></td>
<td></td>
</tr>
<tr>
<td>footer</td>
<td>customize the progress dot by setting a scoped slot</td>
<td>slot=&quot;footer&quot; slot-scope=&quot;props&quot;</td>
<td></td>
<td></td>
</tr>
<tr>
<td>listStyle</td>
<td>A custom CSS style used for rendering the transfer columns.</td>
<td>CSSProperties</td>
<td></td>
<td></td>
</tr>
<tr>
<td>locale</td>
<td>i18n text including filter, empty text, item unit, etc</td>
<td>object</td>
<td><code>{ itemUnit: 'item', itemsUnit: 'items', notFoundContent: 'The list is empty', searchPlaceholder: 'Search here' }</code></td>
<td></td>
</tr>
<tr>
<td>oneWay</td>
<td>Display as single direction style</td>
<td>boolean</td>
<td>false</td>
<td>3.0.0</td>
</tr>
<tr>
<td>operations</td>
<td>A set of operations that are sorted from top to bottom.</td>
<td>string[]</td>
<td>['&gt;', '&lt;']</td>
<td></td>
</tr>
<tr>
<td>operationStyle</td>
<td>A custom CSS style used for rendering the operations column</td>
<td>CSSProperties</td>
<td>-</td>
<td>3.0.0</td>
</tr>
<tr>
<td>pagination</td>
<td>Use pagination. Not work in render props</td>
<td>boolean | { pageSize: number }</td>
<td>false</td>
<td>3.0.0</td>
</tr>
<tr>
<td>render</td>
<td>The function to generate the item shown on a column. Based on an record (element of the dataSource array), this function should return a element which is generated from that record. Also, it can return a plain object with <code>value</code> and <code>label</code>, <code>label</code> is a element and <code>value</code> is for title</td>
<td>Function(record) | slot</td>
<td></td>
<td></td>
</tr>
<tr>
<td>selectedKeys(v-model)</td>
<td>A set of keys of selected items.</td>
<td>string[]</td>
<td>[]</td>
<td></td>
</tr>
<tr>
<td>showSearch</td>
<td>If included, a search box is shown on each column.</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>showSelectAll</td>
<td>Show select all checkbox on the header</td>
<td>boolean</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>showDropDown</td>
<td>Show dropdown button on the header</td>
<td>boolean</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>targetKeys(v-model)</td>
<td>A set of keys of elements that are listed on the right column.</td>
<td>string[]</td>
<td>[]</td>
<td></td>
</tr>
<tr>
<td>titles</td>
<td>A set of titles that are sorted from left to right.</td>
<td>string[]</td>
<td>-</td>
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
<th>Version</th>
</tr>
</thead>
<tbody>
<tr>
<td>change</td>
<td>A callback function that is executed when the transfer between columns is complete.</td>
<td>(targetKeys, direction, moveKeys): void</td>
<td></td>
</tr>
<tr>
<td>scroll</td>
<td>A callback function which is executed when scroll options list</td>
<td>(direction, event): void</td>
<td></td>
</tr>
<tr>
<td>search</td>
<td>A callback function which is executed when search field are changed</td>
<td>(direction: 'left'|'right', value: string): void</td>
<td>-</td>
</tr>
<tr>
<td>selectChange</td>
<td>A callback function which is executed when selected items are changed.</td>
<td>(sourceSelectedKeys, targetSelectedKeys): void</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="Render-Props">Render Props <a class="header-anchor" href="#Render-Props">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>Transfer accept <code>children</code> to customize render list, using follow props:</p>
<pre class="language-json" v-pre><code><span class="token punctuation">{</span>
  <span class="token property">"direction"</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
  <span class="token property">"disabled"</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
  <span class="token property">"filteredItems"</span><span class="token operator">:</span> Array<span class="token punctuation">,</span>
  <span class="token property">"selectedKeys"</span><span class="token operator">:</span> Array<span class="token punctuation">,</span>
  <span class="token property">"onItemSelect"</span><span class="token operator">:</span> Function<span class="token punctuation">,</span>
  <span class="token property">"onItemSelectAll"</span><span class="token operator">:</span> Function
<span class="token punctuation">}</span>
</code></pre>
<table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Version</th>
</tr>
</thead>
<tbody>
<tr>
<td>direction</td>
<td>List render direction</td>
<td>'left' | 'right'</td>
<td></td>
</tr>
<tr>
<td>disabled</td>
<td>Disable list or not</td>
<td>boolean</td>
<td></td>
</tr>
<tr>
<td>filteredItems</td>
<td>Filtered items</td>
<td>TransferItem[]</td>
<td></td>
</tr>
<tr>
<td>selectedKeys</td>
<td>Selected items</td>
<td>string[]</td>
<td></td>
</tr>
<tr>
<td>onItemSelect</td>
<td>Select item</td>
<td>(key: string, selected: boolean)</td>
<td></td>
</tr>
<tr>
<td>onItemSelectAll</td>
<td>Select a group of items</td>
<td>(keys: string[], selected: boolean)</td>
<td></td>
</tr>
</tbody>
</table>
<h4 id="example">example <a class="header-anchor" href="#example">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h4>
<pre class="language-html" v-pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-transfer</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span>
    <span class="token attr-name">#children</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{
      direction,
      filteredItems,
      selectedKeys,
      disabled: listDisabled,
      onItemSelectAll,
      onItemSelect,
    }<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>your-component</span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-transfer</span><span class="token punctuation">></span></span>
</code></pre>
<h2 id="Warning">Warning <a class="header-anchor" href="#Warning">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>According the standard of Vue, the key should always be supplied directly to the elements in the array. In Transfer, the keys should be set on the elements included in <code>dataSource</code> array. By default, <code>key</code> property is used as an unique identifier.</p>
<p>If there's no <code>key</code> in your data, you should use <code>rowKey</code> to specify the key that will be used for uniquely identify each element.</p>
<pre class="language-jsx" v-pre><code><span class="token comment">// eg. your primary key is \`uid\`</span>
<span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Transfer</span></span> <span class="token attr-name">:rowKey</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>record => record.uid<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
</code></pre>
`,lastUpdated:1670462714215}},qn={class:"markdown"},Qn=B(`<p>Alert component for feedback.</p><h2 id="When-To-Use">When To Use <a class="header-anchor" href="#When-To-Use"><span aria-hidden="true" class="anchor">#</span></a></h2><ul><li>When you need to show alert messages to users.</li><li>When you need a persistent static container which is closable by user actions.</li></ul><p>Transfer the elements between two columns in an intuitive and efficient way.</p><p>One or more elements can be selected from either column, one click on the proper <code>direction</code> button, and the transfer is done. The left column is considered the <code>source</code> and the right column is considered the <code>target</code>. As you can see in the API description, these names are reflected in.</p><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Version</th></tr></thead><tbody><tr><td>dataSource</td><td>Used for setting the source data. The elements that are part of this array will be present the left column. Except the elements whose keys are included in <code>targetKeys</code> prop.</td><td>[{key: string.isRequired,title: string.isRequired,description: string,disabled: bool}]</td><td>[]</td><td></td></tr><tr><td>disabled</td><td>Whether disabled transfer</td><td>boolean</td><td>false</td><td></td></tr><tr><td>filterOption</td><td>A function to determine whether an item should show in search result list</td><td>(inputValue, option): boolean</td><td></td><td></td></tr><tr><td>footer</td><td>customize the progress dot by setting a scoped slot</td><td>slot=&quot;footer&quot; slot-scope=&quot;props&quot;</td><td></td><td></td></tr><tr><td>listStyle</td><td>A custom CSS style used for rendering the transfer columns.</td><td>CSSProperties</td><td></td><td></td></tr><tr><td>locale</td><td>i18n text including filter, empty text, item unit, etc</td><td>object</td><td><code>{ itemUnit: &#39;item&#39;, itemsUnit: &#39;items&#39;, notFoundContent: &#39;The list is empty&#39;, searchPlaceholder: &#39;Search here&#39; }</code></td><td></td></tr><tr><td>oneWay</td><td>Display as single direction style</td><td>boolean</td><td>false</td><td>3.0.0</td></tr><tr><td>operations</td><td>A set of operations that are sorted from top to bottom.</td><td>string[]</td><td>[&#39;&gt;&#39;, &#39;&lt;&#39;]</td><td></td></tr><tr><td>operationStyle</td><td>A custom CSS style used for rendering the operations column</td><td>CSSProperties</td><td>-</td><td>3.0.0</td></tr><tr><td>pagination</td><td>Use pagination. Not work in render props</td><td>boolean | { pageSize: number }</td><td>false</td><td>3.0.0</td></tr><tr><td>render</td><td>The function to generate the item shown on a column. Based on an record (element of the dataSource array), this function should return a element which is generated from that record. Also, it can return a plain object with <code>value</code> and <code>label</code>, <code>label</code> is a element and <code>value</code> is for title</td><td>Function(record) | slot</td><td></td><td></td></tr><tr><td>selectedKeys(v-model)</td><td>A set of keys of selected items.</td><td>string[]</td><td>[]</td><td></td></tr><tr><td>showSearch</td><td>If included, a search box is shown on each column.</td><td>boolean</td><td>false</td><td></td></tr><tr><td>showSelectAll</td><td>Show select all checkbox on the header</td><td>boolean</td><td>true</td><td></td></tr><tr><td>showDropDown</td><td>Show dropdown button on the header</td><td>boolean</td><td>true</td><td></td></tr><tr><td>targetKeys(v-model)</td><td>A set of keys of elements that are listed on the right column.</td><td>string[]</td><td>[]</td><td></td></tr><tr><td>titles</td><td>A set of titles that are sorted from left to right.</td><td>string[]</td><td>-</td><td></td></tr></tbody></table><h3 id="events">events <a class="header-anchor" href="#events"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>Events Name</th><th>Description</th><th>Arguments</th><th>Version</th></tr></thead><tbody><tr><td>change</td><td>A callback function that is executed when the transfer between columns is complete.</td><td>(targetKeys, direction, moveKeys): void</td><td></td></tr><tr><td>scroll</td><td>A callback function which is executed when scroll options list</td><td>(direction, event): void</td><td></td></tr><tr><td>search</td><td>A callback function which is executed when search field are changed</td><td>(direction: &#39;left&#39;|&#39;right&#39;, value: string): void</td><td>-</td></tr><tr><td>selectChange</td><td>A callback function which is executed when selected items are changed.</td><td>(sourceSelectedKeys, targetSelectedKeys): void</td><td></td></tr></tbody></table><h3 id="Render-Props">Render Props <a class="header-anchor" href="#Render-Props"><span aria-hidden="true" class="anchor">#</span></a></h3><p>Transfer accept <code>children</code> to customize render list, using follow props:</p><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;direction&quot;</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
  <span class="token property">&quot;disabled&quot;</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
  <span class="token property">&quot;filteredItems&quot;</span><span class="token operator">:</span> Array<span class="token punctuation">,</span>
  <span class="token property">&quot;selectedKeys&quot;</span><span class="token operator">:</span> Array<span class="token punctuation">,</span>
  <span class="token property">&quot;onItemSelect&quot;</span><span class="token operator">:</span> Function<span class="token punctuation">,</span>
  <span class="token property">&quot;onItemSelectAll&quot;</span><span class="token operator">:</span> Function
<span class="token punctuation">}</span>
</code></pre><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Version</th></tr></thead><tbody><tr><td>direction</td><td>List render direction</td><td>&#39;left&#39; | &#39;right&#39;</td><td></td></tr><tr><td>disabled</td><td>Disable list or not</td><td>boolean</td><td></td></tr><tr><td>filteredItems</td><td>Filtered items</td><td>TransferItem[]</td><td></td></tr><tr><td>selectedKeys</td><td>Selected items</td><td>string[]</td><td></td></tr><tr><td>onItemSelect</td><td>Select item</td><td>(key: string, selected: boolean)</td><td></td></tr><tr><td>onItemSelectAll</td><td>Select a group of items</td><td>(keys: string[], selected: boolean)</td><td></td></tr></tbody></table><h4 id="example">example <a class="header-anchor" href="#example"><span aria-hidden="true" class="anchor">#</span></a></h4><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-transfer</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span>
    <span class="token attr-name">#children</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      direction,
      filteredItems,
      selectedKeys,
      disabled: listDisabled,
      onItemSelectAll,
      onItemSelect,
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>your-component</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-transfer</span><span class="token punctuation">&gt;</span></span>
</code></pre><h2 id="Warning">Warning <a class="header-anchor" href="#Warning"><span aria-hidden="true" class="anchor">#</span></a></h2><p>According the standard of Vue, the key should always be supplied directly to the elements in the array. In Transfer, the keys should be set on the elements included in <code>dataSource</code> array. By default, <code>key</code> property is used as an unique identifier.</p><p>If there&#39;s no <code>key</code> in your data, you should use <code>rowKey</code> to specify the key that will be used for uniquely identify each element.</p><pre class="language-jsx"><code><span class="token comment">// eg. your primary key is \`uid\`</span>
<span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Transfer</span></span> <span class="token attr-name">:rowKey</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>record =&gt; record.uid<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">;</span>
</code></pre>`,19),On=[Qn];function Mn(s,a,l,I,k,r){return A(),Y("article",qn,On)}const _n=b(Un,[["render",Mn]]),$n=G({CN:En,US:_n,components:{Basic:M,Oneway:sn,Search:pn,Advanced:gn,CustomItem:yn,Pagination:Fn,TableTransfer:Kn,TreeTransfer:Bn},setup(){return{}}});function nt(s,a,l,I,k,r){const o=u("basic"),e=u("oneway"),p=u("search"),c=u("advanced"),C=u("custom-item"),m=u("pagination"),Z=u("table-transfer"),y=u("tree-transfer"),f=u("demo-sort");return A(),h(f,{cols:1},{default:i(()=>[d(o),d(e),d(p),d(c),d(C),d(m),d(Z),d(y)]),_:1})}const st=b($n,[["render",nt]]);export{st as default};
