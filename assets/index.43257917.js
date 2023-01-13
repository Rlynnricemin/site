import{d as f,r as C,o as X,z as S,_ as A,k as h,l as b,w as e,f as o,b as n,t as H,a as P,h as V,e as t,F as j,j as c,K as y,s as Y}from"./index.6a8b5f17.js";import{t as R}from"./trydemo.48000c6d.js";import{S as N}from"./SmileOutlined.978d0a5f.js";const F=f({mixins:[R],setup(a){const s=C(""),k=C(""),i=C({allowClear:!0,bordered:!0,size:"middle",disabled:!1,format:"HH:mm:ss"}),I={...i.value},g=(u,p,r="")=>i.value[u]!==p?r||" "+(i.value[u]===!1?":":"")+u.replace(/([A-Z])/g,function(v){return"-"+v.toLocaleLowerCase()})+(i.value[u]===!0?"":`="${i.value[u]}"`):"",l=u=>{let p="",r="";for(let v in u)p+=g(v,I[v]);return`<template>
          <a-time-picker${p} />
        </template>
        ${r}`.replace(/ {8}/g,"")};return X(()=>{s.value=l(i.value)}),S(i,u=>{s.value=l(u)},{deep:!0}),{value:k,democode:s,propdata:i,resetItem:()=>{i.value={...I}},labelCol:{style:{width:"80px"}}}}}),D={class:"code-box-demo-try"},J={class:"code-box-meta markdown"},x={class:"code-box-title"},K={class:"code-box-description"};function L(a,s,k,i,I,g){const l=c("a-time-picker"),d=c("a-radio"),u=c("a-radio-group"),p=c("a-form-item"),r=c("a-switch"),v=c("a-col"),Z=c("a-row"),w=c("a-input"),W=c("a-form"),G=c("demo-try"),B=c("demo-box");return h(),b(B,{jsfiddle:{docHtml:"",demo:1,order:-1,title:{"zh-CN":"\u5728\u7EBF\u6F14\u793A","en-US":"Online Demo"},relativePath:"components/time-picker/demo/try.vue",sourceCode:"PHRlbXBsYXRlPgogIDxzZWN0aW9uPgogICAgPHNlY3Rpb24gY2xhc3M9ImNvZGUtYm94LWRlbW8tdHJ5Ij4KICAgICAgPGEtdGltZS1waWNrZXIKICAgICAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZSIKICAgICAgICA6YWxsb3ctY2xlYXI9InByb3BkYXRhLmFsbG93Q2xlYXIiCiAgICAgICAgOmJvcmRlcmVkPSJwcm9wZGF0YS5ib3JkZXJlZCIKICAgICAgICA6c2l6ZT0icHJvcGRhdGEuc2l6ZSIKICAgICAgICA6ZGlzYWJsZWQ9InByb3BkYXRhLmRpc2FibGVkIgogICAgICAgIDpmb3JtYXQ9InByb3BkYXRhLmZvcm1hdCIKICAgICAgLz4KICAgIDwvc2VjdGlvbj4KICAgIDxzZWN0aW9uIGNsYXNzPSJjb2RlLWJveC1tZXRhIG1hcmtkb3duIj4KICAgICAgPHNlY3Rpb24gY2xhc3M9ImNvZGUtYm94LXRpdGxlIj57eyBkZW1vdGl0bGUgfX08L3NlY3Rpb24+CiAgICAgIDxzZWN0aW9uIGNsYXNzPSJjb2RlLWJveC1kZXNjcmlwdGlvbiI+CiAgICAgICAgPGEtZm9ybSA6bGFiZWwtY29sPSJsYWJlbENvbCI+CiAgICAgICAgICA8YS1mb3JtLWl0ZW0gbGFiZWw9InNpemUiPgogICAgICAgICAgICA8YS1yYWRpby1ncm91cCB2LW1vZGVsOnZhbHVlPSJwcm9wZGF0YS5zaXplIj4KICAgICAgICAgICAgICA8YS1yYWRpbwogICAgICAgICAgICAgICAgdi1mb3I9Iml0ZW0gb2YgWydsYXJnZScsICdtaWRkbGUnLCAnc21hbGwnXSIKICAgICAgICAgICAgICAgIDprZXk9Iml0ZW0iCiAgICAgICAgICAgICAgICA6dmFsdWU9Iml0ZW0iCiAgICAgICAgICAgICAgICBuYW1lPSJvcHRpb25UeXBlIgogICAgICAgICAgICAgID4KICAgICAgICAgICAgICAgIHt7IGl0ZW0gfX0KICAgICAgICAgICAgICA8L2EtcmFkaW8+CiAgICAgICAgICAgIDwvYS1yYWRpby1ncm91cD4KICAgICAgICAgIDwvYS1mb3JtLWl0ZW0+CgogICAgICAgICAgPGEtcm93PgogICAgICAgICAgICA8YS1jb2wgc3Bhbj0iOCI+CiAgICAgICAgICAgICAgPGEtZm9ybS1pdGVtIGxhYmVsPSJhbGxvd0NsZWFyIj4KICAgICAgICAgICAgICAgIDxhLXN3aXRjaAogICAgICAgICAgICAgICAgICB2LW1vZGVsOmNoZWNrZWQ9InByb3BkYXRhLmFsbG93Q2xlYXIiCiAgICAgICAgICAgICAgICAgIGNoZWNrZWQtY2hpbGRyZW49IuW8gCIKICAgICAgICAgICAgICAgICAgdW4tY2hlY2tlZC1jaGlsZHJlbj0i5YWzIgogICAgICAgICAgICAgICAgLz4KICAgICAgICAgICAgICA8L2EtZm9ybS1pdGVtPgogICAgICAgICAgICA8L2EtY29sPgogICAgICAgICAgICA8YS1jb2wgc3Bhbj0iOCI+CiAgICAgICAgICAgICAgPGEtZm9ybS1pdGVtIGxhYmVsPSJib3JkZXJlZCI+CiAgICAgICAgICAgICAgICA8YS1zd2l0Y2gKICAgICAgICAgICAgICAgICAgdi1tb2RlbDpjaGVja2VkPSJwcm9wZGF0YS5ib3JkZXJlZCIKICAgICAgICAgICAgICAgICAgY2hlY2tlZC1jaGlsZHJlbj0i5byAIgogICAgICAgICAgICAgICAgICB1bi1jaGVja2VkLWNoaWxkcmVuPSLlhbMiCiAgICAgICAgICAgICAgICAvPgogICAgICAgICAgICAgIDwvYS1mb3JtLWl0ZW0+CiAgICAgICAgICAgIDwvYS1jb2w+CiAgICAgICAgICAgIDxhLWNvbCBzcGFuPSI4Ij4KICAgICAgICAgICAgICA8YS1mb3JtLWl0ZW0gbGFiZWw9ImRpc2FibGVkIj4KICAgICAgICAgICAgICAgIDxhLXN3aXRjaAogICAgICAgICAgICAgICAgICB2LW1vZGVsOmNoZWNrZWQ9InByb3BkYXRhLmRpc2FibGVkIgogICAgICAgICAgICAgICAgICBjaGVja2VkLWNoaWxkcmVuPSLlvIAiCiAgICAgICAgICAgICAgICAgIHVuLWNoZWNrZWQtY2hpbGRyZW49IuWFsyIKICAgICAgICAgICAgICAgIC8+CiAgICAgICAgICAgICAgPC9hLWZvcm0taXRlbT4KICAgICAgICAgICAgPC9hLWNvbD4KICAgICAgICAgIDwvYS1yb3c+CgogICAgICAgICAgPGEtZm9ybS1pdGVtIGxhYmVsPSJmb3JtYXQiPgogICAgICAgICAgICA8YS1pbnB1dCB2LW1vZGVsOnZhbHVlPSJwcm9wZGF0YS5mb3JtYXQiIC8+CiAgICAgICAgICA8L2EtZm9ybS1pdGVtPgogICAgICAgIDwvYS1mb3JtPgogICAgICA8L3NlY3Rpb24+CiAgICA8L3NlY3Rpb24+CiAgPC9zZWN0aW9uPgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYsIHdhdGNoLCBvbk1vdW50ZWQgfSBmcm9tICd2dWUnOwppbXBvcnQgdHJ5ZGVtbyBmcm9tICcuLi8uLi9fdXRpbC90cnlkZW1vJzsKCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgbWl4aW5zOiBbdHJ5ZGVtb10sCiAgc2V0dXAocHJvcHMpIHsKICAgIC8vIC8vIOWGhee9ruWtl+autQogICAgY29uc3QgZGVtb2NvZGUgPSByZWYoJycpOwoKICAgIGNvbnN0IHZhbHVlID0gcmVmKCcnKTsKCiAgICBjb25zdCBwcm9wZGF0YSA9IHJlZih7CiAgICAgIGFsbG93Q2xlYXI6IHRydWUsCiAgICAgIGJvcmRlcmVkOiB0cnVlLAogICAgICBzaXplOiAnbWlkZGxlJywgLy8gbWlkZGxlLeaZrumAmiBsYXJnZSBzbWFsbAogICAgICBkaXNhYmxlZDogZmFsc2UsCiAgICAgIGZvcm1hdDogJ0hIOm1tOnNzJywKICAgIH0pOwoKICAgIGNvbnN0IGRlZmF1bHRWYWwgPSB7IC4uLnByb3BkYXRhLnZhbHVlIH07CgogICAgY29uc3QgZ2V0RXF1YWxWYWwgPSAodHlwZSwgbm90ZXF1YWwsIGVxdWFscmVzID0gJycpID0+IHsKICAgICAgcmV0dXJuIHByb3BkYXRhLnZhbHVlW3R5cGVdICE9PSBub3RlcXVhbAogICAgICAgID8gZXF1YWxyZXMgfHwKICAgICAgICAgICAgJyAnICsKICAgICAgICAgICAgICAocHJvcGRhdGEudmFsdWVbdHlwZV0gPT09IGZhbHNlID8gJzonIDogJycpICsKICAgICAgICAgICAgICB0eXBlLnJlcGxhY2UoLyhbQS1aXSkvZywgZnVuY3Rpb24gKG0pIHsKICAgICAgICAgICAgICAgIHJldHVybiAnLScgKyBtLnRvTG9jYWxlTG93ZXJDYXNlKCk7CiAgICAgICAgICAgICAgfSkgKwogICAgICAgICAgICAgIChwcm9wZGF0YS52YWx1ZVt0eXBlXSA9PT0gdHJ1ZSA/ICcnIDogYD0iJHtwcm9wZGF0YS52YWx1ZVt0eXBlXX0iYCkKICAgICAgICA6ICcnOwogICAgfTsKCiAgICBjb25zdCByZW5kZXJDb2RlID0gcHJvcGRhdGEgPT4gewogICAgICBsZXQgcHJvcHN2YWwgPSAnJzsKICAgICAgbGV0IHNjcmlwdGNvZGUgPSAnJzsKCiAgICAgIGZvciAobGV0IGtleSBpbiBwcm9wZGF0YSkgewogICAgICAgIHByb3BzdmFsICs9IGdldEVxdWFsVmFsKGtleSwgZGVmYXVsdFZhbFtrZXldKTsKICAgICAgfQogICAgICByZXR1cm4gYDx0ZW1wbGF0ZT4KICAgICAgICAgIDxhLXRpbWUtcGlja2VyJHtwcm9wc3ZhbH0gLz4KICAgICAgICA8L3RlbXBsYXRlPgogICAgICAgICR7c2NyaXB0Y29kZX1gLnJlcGxhY2UoLyB7OH0vZywgJycpOwogICAgfTsKCiAgICBvbk1vdW50ZWQoKCkgPT4gewogICAgICBkZW1vY29kZS52YWx1ZSA9IHJlbmRlckNvZGUocHJvcGRhdGEudmFsdWUpOwogICAgfSk7CgogICAgd2F0Y2goCiAgICAgIHByb3BkYXRhLAogICAgICBkYXRhID0+IHsKICAgICAgICBkZW1vY29kZS52YWx1ZSA9IHJlbmRlckNvZGUoZGF0YSk7CiAgICAgIH0sCiAgICAgIHsKICAgICAgICBkZWVwOiB0cnVlLAogICAgICB9LAogICAgKTsKCiAgICAvLyDph43nva7mlrnms5Xlm7rlrprlrZfmrrUKICAgIGNvbnN0IHJlc2V0SXRlbSA9ICgpID0+IHsKICAgICAgcHJvcGRhdGEudmFsdWUgPSB7IC4uLmRlZmF1bHRWYWwgfTsKICAgIH07CgogICAgcmV0dXJuIHsKICAgICAgdmFsdWUsCiAgICAgIGRlbW9jb2RlLAogICAgICBwcm9wZGF0YSwKICAgICAgcmVzZXRJdGVtLAogICAgICBsYWJlbENvbDogeyBzdHlsZTogeyB3aWR0aDogJzgwcHgnIH0gfSwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxzZWN0aW9uPgogICAgPHNlY3Rpb24gY2xhc3M9ImNvZGUtYm94LWRlbW8tdHJ5Ij4KICAgICAgPGEtdGltZS1waWNrZXIKICAgICAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZSIKICAgICAgICA6YWxsb3ctY2xlYXI9InByb3BkYXRhLmFsbG93Q2xlYXIiCiAgICAgICAgOmJvcmRlcmVkPSJwcm9wZGF0YS5ib3JkZXJlZCIKICAgICAgICA6c2l6ZT0icHJvcGRhdGEuc2l6ZSIKICAgICAgICA6ZGlzYWJsZWQ9InByb3BkYXRhLmRpc2FibGVkIgogICAgICAgIDpmb3JtYXQ9InByb3BkYXRhLmZvcm1hdCIKICAgICAgLz4KICAgIDwvc2VjdGlvbj4KICAgIDxzZWN0aW9uIGNsYXNzPSJjb2RlLWJveC1tZXRhIG1hcmtkb3duIj4KICAgICAgPHNlY3Rpb24gY2xhc3M9ImNvZGUtYm94LXRpdGxlIj57eyBkZW1vdGl0bGUgfX08L3NlY3Rpb24+CiAgICAgIDxzZWN0aW9uIGNsYXNzPSJjb2RlLWJveC1kZXNjcmlwdGlvbiI+CiAgICAgICAgPGEtZm9ybSA6bGFiZWwtY29sPSJsYWJlbENvbCI+CiAgICAgICAgICA8YS1mb3JtLWl0ZW0gbGFiZWw9InNpemUiPgogICAgICAgICAgICA8YS1yYWRpby1ncm91cCB2LW1vZGVsOnZhbHVlPSJwcm9wZGF0YS5zaXplIj4KICAgICAgICAgICAgICA8YS1yYWRpbwogICAgICAgICAgICAgICAgdi1mb3I9Iml0ZW0gb2YgWydsYXJnZScsICdtaWRkbGUnLCAnc21hbGwnXSIKICAgICAgICAgICAgICAgIDprZXk9Iml0ZW0iCiAgICAgICAgICAgICAgICA6dmFsdWU9Iml0ZW0iCiAgICAgICAgICAgICAgICBuYW1lPSJvcHRpb25UeXBlIgogICAgICAgICAgICAgID4KICAgICAgICAgICAgICAgIHt7IGl0ZW0gfX0KICAgICAgICAgICAgICA8L2EtcmFkaW8+CiAgICAgICAgICAgIDwvYS1yYWRpby1ncm91cD4KICAgICAgICAgIDwvYS1mb3JtLWl0ZW0+CgogICAgICAgICAgPGEtcm93PgogICAgICAgICAgICA8YS1jb2wgc3Bhbj0iOCI+CiAgICAgICAgICAgICAgPGEtZm9ybS1pdGVtIGxhYmVsPSJhbGxvd0NsZWFyIj4KICAgICAgICAgICAgICAgIDxhLXN3aXRjaAogICAgICAgICAgICAgICAgICB2LW1vZGVsOmNoZWNrZWQ9InByb3BkYXRhLmFsbG93Q2xlYXIiCiAgICAgICAgICAgICAgICAgIGNoZWNrZWQtY2hpbGRyZW49IuW8gCIKICAgICAgICAgICAgICAgICAgdW4tY2hlY2tlZC1jaGlsZHJlbj0i5YWzIgogICAgICAgICAgICAgICAgLz4KICAgICAgICAgICAgICA8L2EtZm9ybS1pdGVtPgogICAgICAgICAgICA8L2EtY29sPgogICAgICAgICAgICA8YS1jb2wgc3Bhbj0iOCI+CiAgICAgICAgICAgICAgPGEtZm9ybS1pdGVtIGxhYmVsPSJib3JkZXJlZCI+CiAgICAgICAgICAgICAgICA8YS1zd2l0Y2gKICAgICAgICAgICAgICAgICAgdi1tb2RlbDpjaGVja2VkPSJwcm9wZGF0YS5ib3JkZXJlZCIKICAgICAgICAgICAgICAgICAgY2hlY2tlZC1jaGlsZHJlbj0i5byAIgogICAgICAgICAgICAgICAgICB1bi1jaGVja2VkLWNoaWxkcmVuPSLlhbMiCiAgICAgICAgICAgICAgICAvPgogICAgICAgICAgICAgIDwvYS1mb3JtLWl0ZW0+CiAgICAgICAgICAgIDwvYS1jb2w+CiAgICAgICAgICAgIDxhLWNvbCBzcGFuPSI4Ij4KICAgICAgICAgICAgICA8YS1mb3JtLWl0ZW0gbGFiZWw9ImRpc2FibGVkIj4KICAgICAgICAgICAgICAgIDxhLXN3aXRjaAogICAgICAgICAgICAgICAgICB2LW1vZGVsOmNoZWNrZWQ9InByb3BkYXRhLmRpc2FibGVkIgogICAgICAgICAgICAgICAgICBjaGVja2VkLWNoaWxkcmVuPSLlvIAiCiAgICAgICAgICAgICAgICAgIHVuLWNoZWNrZWQtY2hpbGRyZW49IuWFsyIKICAgICAgICAgICAgICAgIC8+CiAgICAgICAgICAgICAgPC9hLWZvcm0taXRlbT4KICAgICAgICAgICAgPC9hLWNvbD4KICAgICAgICAgIDwvYS1yb3c+CgogICAgICAgICAgPGEtZm9ybS1pdGVtIGxhYmVsPSJmb3JtYXQiPgogICAgICAgICAgICA8YS1pbnB1dCB2LW1vZGVsOnZhbHVlPSJwcm9wZGF0YS5mb3JtYXQiIC8+CiAgICAgICAgICA8L2EtZm9ybS1pdGVtPgogICAgICAgIDwvYS1mb3JtPgogICAgICA8L3NlY3Rpb24+CiAgICA8L3NlY3Rpb24+CiAgPC9zZWN0aW9uPgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiwgd2F0Y2gsIG9uTW91bnRlZCB9IGZyb20gJ3Z1ZSc7CmltcG9ydCB0cnlkZW1vIGZyb20gJy4uLy4uL191dGlsL3RyeWRlbW8nOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIG1peGluczogW3RyeWRlbW9dLAogIHNldHVwKHByb3BzKSB7CiAgICAvLyAvLyDlhoXnva7lrZfmrrUKICAgIGNvbnN0IGRlbW9jb2RlID0gcmVmKCcnKTsKICAgIGNvbnN0IHZhbHVlID0gcmVmKCcnKTsKICAgIGNvbnN0IHByb3BkYXRhID0gcmVmKHsKICAgICAgYWxsb3dDbGVhcjogdHJ1ZSwKICAgICAgYm9yZGVyZWQ6IHRydWUsCiAgICAgIHNpemU6ICdtaWRkbGUnLAogICAgICAvLyBtaWRkbGUt5pmu6YCaIGxhcmdlIHNtYWxsCiAgICAgIGRpc2FibGVkOiBmYWxzZSwKICAgICAgZm9ybWF0OiAnSEg6bW06c3MnLAogICAgfSk7CiAgICBjb25zdCBkZWZhdWx0VmFsID0gewogICAgICAuLi5wcm9wZGF0YS52YWx1ZSwKICAgIH07CiAgICBjb25zdCBnZXRFcXVhbFZhbCA9ICh0eXBlLCBub3RlcXVhbCwgZXF1YWxyZXMgPSAnJykgPT4gewogICAgICByZXR1cm4gcHJvcGRhdGEudmFsdWVbdHlwZV0gIT09IG5vdGVxdWFsID8gZXF1YWxyZXMgfHwgJyAnICsgKHByb3BkYXRhLnZhbHVlW3R5cGVdID09PSBmYWxzZSA/ICc6JyA6ICcnKSArIHR5cGUucmVwbGFjZSgvKFtBLVpdKS9nLCBmdW5jdGlvbiAobSkgewogICAgICAgIHJldHVybiAnLScgKyBtLnRvTG9jYWxlTG93ZXJDYXNlKCk7CiAgICAgIH0pICsgKHByb3BkYXRhLnZhbHVlW3R5cGVdID09PSB0cnVlID8gJycgOiBgPSIke3Byb3BkYXRhLnZhbHVlW3R5cGVdfSJgKSA6ICcnOwogICAgfTsKICAgIGNvbnN0IHJlbmRlckNvZGUgPSBwcm9wZGF0YSA9PiB7CiAgICAgIGxldCBwcm9wc3ZhbCA9ICcnOwogICAgICBsZXQgc2NyaXB0Y29kZSA9ICcnOwogICAgICBmb3IgKGxldCBrZXkgaW4gcHJvcGRhdGEpIHsKICAgICAgICBwcm9wc3ZhbCArPSBnZXRFcXVhbFZhbChrZXksIGRlZmF1bHRWYWxba2V5XSk7CiAgICAgIH0KICAgICAgcmV0dXJuIGA8dGVtcGxhdGU+CiAgICAgICAgICA8YS10aW1lLXBpY2tlciR7cHJvcHN2YWx9IC8+CiAgICAgICAgPC90ZW1wbGF0ZT4KICAgICAgICAke3NjcmlwdGNvZGV9YC5yZXBsYWNlKC8gezh9L2csICcnKTsKICAgIH07CiAgICBvbk1vdW50ZWQoKCkgPT4gewogICAgICBkZW1vY29kZS52YWx1ZSA9IHJlbmRlckNvZGUocHJvcGRhdGEudmFsdWUpOwogICAgfSk7CiAgICB3YXRjaChwcm9wZGF0YSwgZGF0YSA9PiB7CiAgICAgIGRlbW9jb2RlLnZhbHVlID0gcmVuZGVyQ29kZShkYXRhKTsKICAgIH0sIHsKICAgICAgZGVlcDogdHJ1ZSwKICAgIH0pOwoKICAgIC8vIOmHjee9ruaWueazleWbuuWumuWtl+autQogICAgY29uc3QgcmVzZXRJdGVtID0gKCkgPT4gewogICAgICBwcm9wZGF0YS52YWx1ZSA9IHsKICAgICAgICAuLi5kZWZhdWx0VmFsLAogICAgICB9OwogICAgfTsKICAgIHJldHVybiB7CiAgICAgIHZhbHVlLAogICAgICBkZW1vY29kZSwKICAgICAgcHJvcGRhdGEsCiAgICAgIHJlc2V0SXRlbSwKICAgICAgbGFiZWxDb2w6IHsKICAgICAgICBzdHlsZTogewogICAgICAgICAgd2lkdGg6ICc4MHB4JywKICAgICAgICB9LAogICAgICB9LAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+",isdemo:1}},{default:e(()=>[o(G,{jsfiddle:{demo:1,order:-1,title:{"zh-CN":"\u5728\u7EBF\u6F14\u793A","en-US":"Online Demo"},relativePath:"components/time-picker/demo/try.vue"},code:a.democode,onChangeDemo:a.changeDemo},{default:e(()=>[n("section",null,[n("section",D,[o(l,{value:a.value,"onUpdate:value":s[0]||(s[0]=m=>a.value=m),"allow-clear":a.propdata.allowClear,bordered:a.propdata.bordered,size:a.propdata.size,disabled:a.propdata.disabled,format:a.propdata.format},null,8,["value","allow-clear","bordered","size","disabled","format"])]),n("section",J,[n("section",x,H(a.demotitle),1),n("section",K,[o(W,{"label-col":a.labelCol},{default:e(()=>[o(p,{label:"size"},{default:e(()=>[o(u,{value:a.propdata.size,"onUpdate:value":s[1]||(s[1]=m=>a.propdata.size=m)},{default:e(()=>[(h(),P(j,null,V(["large","middle","small"],m=>o(d,{key:m,value:m,name:"optionType"},{default:e(()=>[t(H(m),1)]),_:2},1032,["value"])),64))]),_:1},8,["value"])]),_:1}),o(Z,null,{default:e(()=>[o(v,{span:"8"},{default:e(()=>[o(p,{label:"allowClear"},{default:e(()=>[o(r,{checked:a.propdata.allowClear,"onUpdate:checked":s[2]||(s[2]=m=>a.propdata.allowClear=m),"checked-children":"\u5F00","un-checked-children":"\u5173"},null,8,["checked"])]),_:1})]),_:1}),o(v,{span:"8"},{default:e(()=>[o(p,{label:"bordered"},{default:e(()=>[o(r,{checked:a.propdata.bordered,"onUpdate:checked":s[3]||(s[3]=m=>a.propdata.bordered=m),"checked-children":"\u5F00","un-checked-children":"\u5173"},null,8,["checked"])]),_:1})]),_:1}),o(v,{span:"8"},{default:e(()=>[o(p,{label:"disabled"},{default:e(()=>[o(r,{checked:a.propdata.disabled,"onUpdate:checked":s[4]||(s[4]=m=>a.propdata.disabled=m),"checked-children":"\u5F00","un-checked-children":"\u5173"},null,8,["checked"])]),_:1})]),_:1})]),_:1}),o(p,{label:"format"},{default:e(()=>[o(w,{value:a.propdata.format,"onUpdate:value":s[5]||(s[5]=m=>a.propdata.format=m)},null,8,["value"])]),_:1})]),_:1},8,["label-col"])])])])]),_:1},8,["jsfiddle","code","onChangeDemo"])]),_:1},8,["jsfiddle"])}const _=A(F,[["render",L]]),z=f({setup(){return{value:C()}}}),U=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-space")]),t(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("vertical"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-time-picker")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"use12-hours"),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-time-picker")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"use12-hours"),t(),n("span",{class:"token attr-name"},"format"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("h:mm:ss A"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 140px")]),n("span",{class:"token punctuation"},'"')])]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-time-picker")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"use12-hours"),t(),n("span",{class:"token attr-name"},"format"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("h:mm a"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" Dayjs "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'dayjs'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(" ref"),n("span",{class:"token operator"},"<"),t("Dayjs"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),T=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-space")]),t(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("vertical"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-time-picker")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"use12-hours"),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-time-picker")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"use12-hours"),t(),n("span",{class:"token attr-name"},"format"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("h:mm:ss A"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 140px")]),n("span",{class:"token punctuation"},'"')])]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-time-picker")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"use12-hours"),t(),n("span",{class:"token attr-name"},"format"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("h:mm a"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function E(a,s,k,i,I,g){const l=c("a-time-picker"),d=c("a-space"),u=c("demo-box");return h(),b(u,{jsfiddle:{us:"TimePicker of 12 hours format, with default format `h:mm:ss a`.",cn:"12 \u5C0F\u65F6\u5236\u7684\u65F6\u95F4\u9009\u62E9\u5668\uFF0C\u9ED8\u8BA4\u7684 format \u4E3A `h:mm:ss a`\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>12 \u5C0F\u65F6\u5236\u7684\u65F6\u95F4\u9009\u62E9\u5668\uFF0C\u9ED8\u8BA4\u7684 format \u4E3A <code>h:mm:ss a</code>\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>TimePicker of 12 hours format, with default format <code>h:mm:ss a</code>.</p>
`,order:2,title:{"zh-CN":"12 \u5C0F\u65F6\u5236","en-US":"12 hours"},relativePath:"components/time-picker/demo/12hours.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiPgogICAgPGEtdGltZS1waWNrZXIgdi1tb2RlbDp2YWx1ZT0idmFsdWUiIHVzZTEyLWhvdXJzIC8+CiAgICA8YS10aW1lLXBpY2tlciB2LW1vZGVsOnZhbHVlPSJ2YWx1ZSIgdXNlMTItaG91cnMgZm9ybWF0PSJoOm1tOnNzIEEiIHN0eWxlPSJ3aWR0aDogMTQwcHgiIC8+CiAgICA8YS10aW1lLXBpY2tlciB2LW1vZGVsOnZhbHVlPSJ2YWx1ZSIgdXNlMTItaG91cnMgZm9ybWF0PSJoOm1tIGEiIC8+CiAgPC9hLXNwYWNlPgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHsgRGF5anMgfSBmcm9tICdkYXlqcyc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIHJldHVybiB7CiAgICAgIHZhbHVlOiByZWY8RGF5anM+KCksCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiPgogICAgPGEtdGltZS1waWNrZXIgdi1tb2RlbDp2YWx1ZT0idmFsdWUiIHVzZTEyLWhvdXJzIC8+CiAgICA8YS10aW1lLXBpY2tlciB2LW1vZGVsOnZhbHVlPSJ2YWx1ZSIgdXNlMTItaG91cnMgZm9ybWF0PSJoOm1tOnNzIEEiIHN0eWxlPSJ3aWR0aDogMTQwcHgiIC8+CiAgICA8YS10aW1lLXBpY2tlciB2LW1vZGVsOnZhbHVlPSJ2YWx1ZSIgdXNlMTItaG91cnMgZm9ybWF0PSJoOm1tIGEiIC8+CiAgPC9hLXNwYWNlPgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICByZXR1cm4gewogICAgICB2YWx1ZTogcmVmKCksCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4=",isdemo:!1}},{default:e(()=>[o(d,{direction:"vertical"},{default:e(()=>[o(l,{value:a.value,"onUpdate:value":s[0]||(s[0]=p=>a.value=p),"use12-hours":""},null,8,["value"]),o(l,{value:a.value,"onUpdate:value":s[1]||(s[1]=p=>a.value=p),"use12-hours":"",format:"h:mm:ss A",style:{width:"140px"}},null,8,["value"]),o(l,{value:a.value,"onUpdate:value":s[2]||(s[2]=p=>a.value=p),"use12-hours":"",format:"h:mm a"},null,8,["value"])]),_:1})]),htmlCode:e(()=>[U]),jsVersionHtml:e(()=>[T]),_:1},8,["jsfiddle"])}const O=A(z,[["render",E]]),Q=f({setup(){const a=C(!1),s=C(!1);return{value:C(),open:a,open2:s,handleOpenChange:g=>{console.log("open",g),a.value=g},handleClose:()=>{a.value=!1,s.value=!1}}}}),q=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-space")]),t(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("vertical"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-time-picker")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("open")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("open"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@openChange"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleOpenChange"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#renderExtraFooter"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ prefixCls }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("small"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleClose"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("OK {{ prefixCls }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-time-picker")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-time-picker")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("open")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("open2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#renderExtraFooter"),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("small"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleClose"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("OK"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-time-picker")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" Dayjs "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'dayjs'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" open "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" open2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("Dayjs"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleOpenChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"openStatus"),n("span",{class:"token operator"},":"),t(" boolean")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'open'"),n("span",{class:"token punctuation"},","),t(" openStatus"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      open`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(" openStatus"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleClose"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      open`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
      open2`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token punctuation"},","),t(`
      open`),n("span",{class:"token punctuation"},","),t(`
      open2`),n("span",{class:"token punctuation"},","),t(`
      handleOpenChange`),n("span",{class:"token punctuation"},","),t(`
      handleClose`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),M=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-space")]),t(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("vertical"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-time-picker")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("open")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("open"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@openChange"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleOpenChange"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#renderExtraFooter"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ prefixCls }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("small"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleClose"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("OK {{ prefixCls }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-time-picker")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-time-picker")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("open")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("open2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#renderExtraFooter"),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("small"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleClose"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("OK"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-time-picker")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" open "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" open2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleOpenChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token parameter"},"openStatus"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'open'"),n("span",{class:"token punctuation"},","),t(" openStatus"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      open`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(" openStatus"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleClose"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      open`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
      open2`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token punctuation"},","),t(`
      open`),n("span",{class:"token punctuation"},","),t(`
      open2`),n("span",{class:"token punctuation"},","),t(`
      handleOpenChange`),n("span",{class:"token punctuation"},","),t(`
      handleClose`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function $(a,s,k,i,I,g){const l=c("a-button"),d=c("a-time-picker"),u=c("a-space"),p=c("demo-box");return h(),b(p,{jsfiddle:{us:"Render addon contents to timepicker panel's bottom.",cn:"\u5728 TimePicker \u9009\u62E9\u6846\u5E95\u90E8\u663E\u793A\u81EA\u5B9A\u4E49\u7684\u5185\u5BB9\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u5728 TimePicker \u9009\u62E9\u6846\u5E95\u90E8\u663E\u793A\u81EA\u5B9A\u4E49\u7684\u5185\u5BB9\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Render addon contents to timepicker panel's bottom.</p>
`,order:1,title:{"zh-CN":"\u9644\u52A0\u5185\u5BB9","en-US":"Addon"},relativePath:"components/time-picker/demo/addon.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiPgogICAgPGEtdGltZS1waWNrZXIgdi1tb2RlbDp2YWx1ZT0idmFsdWUiIHYtbW9kZWw6b3Blbj0ib3BlbiIgQG9wZW5DaGFuZ2U9ImhhbmRsZU9wZW5DaGFuZ2UiPgogICAgICA8dGVtcGxhdGUgI3JlbmRlckV4dHJhRm9vdGVyPSJ7IHByZWZpeENscyB9Ij4KICAgICAgICA8YS1idXR0b24gc2l6ZT0ic21hbGwiIHR5cGU9InByaW1hcnkiIEBjbGljaz0iaGFuZGxlQ2xvc2UiPk9LIHt7IHByZWZpeENscyB9fTwvYS1idXR0b24+CiAgICAgIDwvdGVtcGxhdGU+CiAgICA8L2EtdGltZS1waWNrZXI+CiAgICA8YS10aW1lLXBpY2tlciB2LW1vZGVsOnZhbHVlPSJ2YWx1ZSIgdi1tb2RlbDpvcGVuPSJvcGVuMiI+CiAgICAgIDx0ZW1wbGF0ZSAjcmVuZGVyRXh0cmFGb290ZXI+CiAgICAgICAgPGEtYnV0dG9uIHNpemU9InNtYWxsIiB0eXBlPSJwcmltYXJ5IiBAY2xpY2s9ImhhbmRsZUNsb3NlIj5PSzwvYS1idXR0b24+CiAgICAgIDwvdGVtcGxhdGU+CiAgICA8L2EtdGltZS1waWNrZXI+CiAgPC9hLXNwYWNlPgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHsgRGF5anMgfSBmcm9tICdkYXlqcyc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBvcGVuID0gcmVmKGZhbHNlKTsKICAgIGNvbnN0IG9wZW4yID0gcmVmKGZhbHNlKTsKICAgIGNvbnN0IHZhbHVlID0gcmVmPERheWpzPigpOwoKICAgIGNvbnN0IGhhbmRsZU9wZW5DaGFuZ2UgPSAob3BlblN0YXR1czogYm9vbGVhbikgPT4gewogICAgICBjb25zb2xlLmxvZygnb3BlbicsIG9wZW5TdGF0dXMpOwogICAgICBvcGVuLnZhbHVlID0gb3BlblN0YXR1czsKICAgIH07CgogICAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7CiAgICAgIG9wZW4udmFsdWUgPSBmYWxzZTsKICAgICAgb3BlbjIudmFsdWUgPSBmYWxzZTsKICAgIH07CgogICAgcmV0dXJuIHsKICAgICAgdmFsdWUsCiAgICAgIG9wZW4sCiAgICAgIG9wZW4yLAogICAgICBoYW5kbGVPcGVuQ2hhbmdlLAogICAgICBoYW5kbGVDbG9zZSwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiPgogICAgPGEtdGltZS1waWNrZXIgdi1tb2RlbDp2YWx1ZT0idmFsdWUiIHYtbW9kZWw6b3Blbj0ib3BlbiIgQG9wZW5DaGFuZ2U9ImhhbmRsZU9wZW5DaGFuZ2UiPgogICAgICA8dGVtcGxhdGUgI3JlbmRlckV4dHJhRm9vdGVyPSJ7IHByZWZpeENscyB9Ij4KICAgICAgICA8YS1idXR0b24gc2l6ZT0ic21hbGwiIHR5cGU9InByaW1hcnkiIEBjbGljaz0iaGFuZGxlQ2xvc2UiPk9LIHt7IHByZWZpeENscyB9fTwvYS1idXR0b24+CiAgICAgIDwvdGVtcGxhdGU+CiAgICA8L2EtdGltZS1waWNrZXI+CiAgICA8YS10aW1lLXBpY2tlciB2LW1vZGVsOnZhbHVlPSJ2YWx1ZSIgdi1tb2RlbDpvcGVuPSJvcGVuMiI+CiAgICAgIDx0ZW1wbGF0ZSAjcmVuZGVyRXh0cmFGb290ZXI+CiAgICAgICAgPGEtYnV0dG9uIHNpemU9InNtYWxsIiB0eXBlPSJwcmltYXJ5IiBAY2xpY2s9ImhhbmRsZUNsb3NlIj5PSzwvYS1idXR0b24+CiAgICAgIDwvdGVtcGxhdGU+CiAgICA8L2EtdGltZS1waWNrZXI+CiAgPC9hLXNwYWNlPgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBvcGVuID0gcmVmKGZhbHNlKTsKICAgIGNvbnN0IG9wZW4yID0gcmVmKGZhbHNlKTsKICAgIGNvbnN0IHZhbHVlID0gcmVmKCk7CiAgICBjb25zdCBoYW5kbGVPcGVuQ2hhbmdlID0gb3BlblN0YXR1cyA9PiB7CiAgICAgIGNvbnNvbGUubG9nKCdvcGVuJywgb3BlblN0YXR1cyk7CiAgICAgIG9wZW4udmFsdWUgPSBvcGVuU3RhdHVzOwogICAgfTsKICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4gewogICAgICBvcGVuLnZhbHVlID0gZmFsc2U7CiAgICAgIG9wZW4yLnZhbHVlID0gZmFsc2U7CiAgICB9OwogICAgcmV0dXJuIHsKICAgICAgdmFsdWUsCiAgICAgIG9wZW4sCiAgICAgIG9wZW4yLAogICAgICBoYW5kbGVPcGVuQ2hhbmdlLAogICAgICBoYW5kbGVDbG9zZSwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0Pg==",isdemo:!1}},{default:e(()=>[o(u,{direction:"vertical"},{default:e(()=>[o(d,{value:a.value,"onUpdate:value":s[0]||(s[0]=r=>a.value=r),open:a.open,"onUpdate:open":s[1]||(s[1]=r=>a.open=r),onOpenChange:a.handleOpenChange},{renderExtraFooter:e(({prefixCls:r})=>[o(l,{size:"small",type:"primary",onClick:a.handleClose},{default:e(()=>[t("OK "+H(r),1)]),_:2},1032,["onClick"])]),_:1},8,["value","open","onOpenChange"]),o(d,{value:a.value,"onUpdate:value":s[2]||(s[2]=r=>a.value=r),open:a.open2,"onUpdate:open":s[3]||(s[3]=r=>a.open2=r)},{renderExtraFooter:e(()=>[o(l,{size:"small",type:"primary",onClick:a.handleClose},{default:e(()=>[t("OK")]),_:1},8,["onClick"])]),_:1},8,["value","open"])]),_:1})]),htmlCode:e(()=>[q]),jsVersionHtml:e(()=>[M]),_:1},8,["jsfiddle"])}const nn=A(Q,[["render",$]]),tn=f({setup(){const a=C(y("08:00:00","HH:mm:ss")),s=C("09:00:00");return S(a,()=>{console.log(a.value)}),S(s,()=>{console.log(s.value)}),{value:a,strValue:s}}}),an=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-space")]),t(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("vertical"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-time-picker")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-time-picker")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("strValue"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"value-format"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("HH:mm:ss"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" dayjs"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(" Dayjs "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'dayjs'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t(" watch "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("Dayjs"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"dayjs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'08:00:00'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'HH:mm:ss'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" strValue "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("string"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'09:00:00'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),t("value"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("value"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),t("strValue"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("strValue"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token punctuation"},","),t(`
      strValue`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),sn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-space")]),t(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("vertical"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-time-picker")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-time-picker")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("strValue"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"value-format"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("HH:mm:ss"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" dayjs "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'dayjs'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t(" watch "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"dayjs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'08:00:00'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'HH:mm:ss'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" strValue "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'09:00:00'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),t("value"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("value"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),t("strValue"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("strValue"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token punctuation"},","),t(`
      strValue`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function en(a,s,k,i,I,g){const l=c("a-time-picker"),d=c("a-space"),u=c("demo-box");return h(),b(u,{jsfiddle:{us:"Click `TimePicker`, and then we could select or input a time in panel.",cn:"\u70B9\u51FB TimePicker\uFF0C\u7136\u540E\u53EF\u4EE5\u5728\u6D6E\u5C42\u4E2D\u9009\u62E9\u6216\u8005\u8F93\u5165\u67D0\u4E00\u65F6\u95F4\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u70B9\u51FB TimePicker\uFF0C\u7136\u540E\u53EF\u4EE5\u5728\u6D6E\u5C42\u4E2D\u9009\u62E9\u6216\u8005\u8F93\u5165\u67D0\u4E00\u65F6\u95F4\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Click <code>TimePicker</code>, and then we could select or input a time in panel.</p>
`,order:0,title:{"zh-CN":"\u57FA\u672C","en-US":"Basic"},relativePath:"components/time-picker/demo/basic.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiPgogICAgPGEtdGltZS1waWNrZXIgdi1tb2RlbDp2YWx1ZT0idmFsdWUiIC8+CiAgICA8YS10aW1lLXBpY2tlciB2LW1vZGVsOnZhbHVlPSJzdHJWYWx1ZSIgdmFsdWUtZm9ybWF0PSJISDptbTpzcyIgLz4KICA8L2Etc3BhY2U+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgZGF5anMsIHsgRGF5anMgfSBmcm9tICdkYXlqcyc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmLCB3YXRjaCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCB2YWx1ZSA9IHJlZjxEYXlqcz4oZGF5anMoJzA4OjAwOjAwJywgJ0hIOm1tOnNzJykpOwogICAgY29uc3Qgc3RyVmFsdWUgPSByZWY8c3RyaW5nPignMDk6MDA6MDAnKTsKCiAgICB3YXRjaCh2YWx1ZSwgKCkgPT4gewogICAgICBjb25zb2xlLmxvZyh2YWx1ZS52YWx1ZSk7CiAgICB9KTsKICAgIHdhdGNoKHN0clZhbHVlLCAoKSA9PiB7CiAgICAgIGNvbnNvbGUubG9nKHN0clZhbHVlLnZhbHVlKTsKICAgIH0pOwogICAgcmV0dXJuIHsKICAgICAgdmFsdWUsCiAgICAgIHN0clZhbHVlLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiPgogICAgPGEtdGltZS1waWNrZXIgdi1tb2RlbDp2YWx1ZT0idmFsdWUiIC8+CiAgICA8YS10aW1lLXBpY2tlciB2LW1vZGVsOnZhbHVlPSJzdHJWYWx1ZSIgdmFsdWUtZm9ybWF0PSJISDptbTpzcyIgLz4KICA8L2Etc3BhY2U+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmLCB3YXRjaCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCB2YWx1ZSA9IHJlZihkYXlqcygnMDg6MDA6MDAnLCAnSEg6bW06c3MnKSk7CiAgICBjb25zdCBzdHJWYWx1ZSA9IHJlZignMDk6MDA6MDAnKTsKICAgIHdhdGNoKHZhbHVlLCAoKSA9PiB7CiAgICAgIGNvbnNvbGUubG9nKHZhbHVlLnZhbHVlKTsKICAgIH0pOwogICAgd2F0Y2goc3RyVmFsdWUsICgpID0+IHsKICAgICAgY29uc29sZS5sb2coc3RyVmFsdWUudmFsdWUpOwogICAgfSk7CiAgICByZXR1cm4gewogICAgICB2YWx1ZSwKICAgICAgc3RyVmFsdWUsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4=",isdemo:!1}},{default:e(()=>[o(d,{direction:"vertical"},{default:e(()=>[o(l,{value:a.value,"onUpdate:value":s[0]||(s[0]=p=>a.value=p)},null,8,["value"]),o(l,{value:a.strValue,"onUpdate:value":s[1]||(s[1]=p=>a.strValue=p),"value-format":"HH:mm:ss"},null,8,["value"])]),_:1})]),htmlCode:e(()=>[an]),jsVersionHtml:e(()=>[sn]),_:1},8,["jsfiddle"])}const on=A(tn,[["render",en]]),cn=f({setup(){return{dayjs:y}}}),pn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-time-picker")]),t(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("dayjs('12:08:23', 'HH:mm:ss')"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"disabled"),t(),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" dayjs "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'dayjs'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      dayjs`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),ln=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-time-picker")]),t(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("dayjs('12:08:23', 'HH:mm:ss')"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"disabled"),t(),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" dayjs "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'dayjs'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      dayjs`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function un(a,s,k,i,I,g){const l=c("a-time-picker"),d=c("demo-box");return h(),b(d,{jsfiddle:{us:"A disabled state of the `TimePicker`.",cn:"\u7981\u7528\u65F6\u95F4\u9009\u62E9\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u7981\u7528\u65F6\u95F4\u9009\u62E9\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>A disabled state of the <code>TimePicker</code>.</p>
`,order:3,title:{"zh-CN":"\u7981\u7528","en-US":"Disabled"},relativePath:"components/time-picker/demo/disabled.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXRpbWUtcGlja2VyIDp2YWx1ZT0iZGF5anMoJzEyOjA4OjIzJywgJ0hIOm1tOnNzJykiIGRpc2FibGVkIC8+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgcmV0dXJuIHsKICAgICAgZGF5anMsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXRpbWUtcGlja2VyIDp2YWx1ZT0iZGF5anMoJzEyOjA4OjIzJywgJ0hIOm1tOnNzJykiIGRpc2FibGVkIC8+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICByZXR1cm4gewogICAgICBkYXlqcywKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0Pg==",isdemo:!1}},{default:e(()=>[o(l,{value:a.dayjs("12:08:23","HH:mm:ss"),disabled:""},null,8,["value"])]),htmlCode:e(()=>[pn]),jsVersionHtml:e(()=>[ln]),_:1},8,["jsfiddle"])}const dn=A(cn,[["render",un]]),rn=f({setup(){return{value:C(y("12:08","HH:mm")),dayjs:y}}}),kn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-time-picker")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"format"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("HH:mm"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" dayjs "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'dayjs'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"dayjs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'12:08'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'HH:mm'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token punctuation"},","),t(`
      dayjs`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),gn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-time-picker")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"format"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("HH:mm"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" dayjs "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'dayjs'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"dayjs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'12:08'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'HH:mm'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token punctuation"},","),t(`
      dayjs`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function In(a,s,k,i,I,g){const l=c("a-time-picker"),d=c("demo-box");return h(),b(d,{jsfiddle:{us:"While part of `format` is omitted, the corresponding column in panel will disappear, too.",cn:"TimePicker \u6D6E\u5C42\u4E2D\u7684\u5217\u4F1A\u968F\u7740 `format` \u53D8\u5316\uFF0C\u5F53\u7565\u53BB `format` \u4E2D\u7684\u67D0\u90E8\u5206\u65F6\uFF0C\u6D6E\u5C42\u4E2D\u5BF9\u5E94\u7684\u5217\u4E5F\u4F1A\u6D88\u5931\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>TimePicker \u6D6E\u5C42\u4E2D\u7684\u5217\u4F1A\u968F\u7740 <code>format</code> \u53D8\u5316\uFF0C\u5F53\u7565\u53BB <code>format</code> \u4E2D\u7684\u67D0\u90E8\u5206\u65F6\uFF0C\u6D6E\u5C42\u4E2D\u5BF9\u5E94\u7684\u5217\u4E5F\u4F1A\u6D88\u5931\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>While part of <code>format</code> is omitted, the corresponding column in panel will disappear, too.</p>
`,order:4,title:{"zh-CN":"\u9009\u62E9\u65F6\u5206","en-US":"Hour and minute"},relativePath:"components/time-picker/demo/hide-column.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXRpbWUtcGlja2VyIHYtbW9kZWw6dmFsdWU9InZhbHVlIiBmb3JtYXQ9IkhIOm1tIiAvPgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgdmFsdWUgPSByZWYoZGF5anMoJzEyOjA4JywgJ0hIOm1tJykpOwoKICAgIHJldHVybiB7CiAgICAgIHZhbHVlLAogICAgICBkYXlqcywKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXRpbWUtcGlja2VyIHYtbW9kZWw6dmFsdWU9InZhbHVlIiBmb3JtYXQ9IkhIOm1tIiAvPgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCB2YWx1ZSA9IHJlZihkYXlqcygnMTI6MDgnLCAnSEg6bW0nKSk7CiAgICByZXR1cm4gewogICAgICB2YWx1ZSwKICAgICAgZGF5anMsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4=",isdemo:!1}},{default:e(()=>[o(l,{value:a.value,"onUpdate:value":s[0]||(s[0]=u=>a.value=u),format:"HH:mm"},null,8,["value"])]),htmlCode:e(()=>[kn]),jsVersionHtml:e(()=>[gn]),_:1},8,["jsfiddle"])}const mn=A(rn,[["render",In]]),Cn=f({setup(){return{value:C()}}}),hn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-time-picker")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":minute-step"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("15"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":second-step"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("10"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),An=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-time-picker")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":minute-step"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("15"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":second-step"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("10"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function bn(a,s,k,i,I,g){const l=c("a-time-picker"),d=c("demo-box");return h(),b(d,{jsfiddle:{us:"Show stepped options by `hourStep` `minuteStep` `secondStep`.",cn:"\u53EF\u4EE5\u4F7F\u7528 `hourStep` `minuteStep` `secondStep` \u6309\u6B65\u957F\u5C55\u793A\u53EF\u9009\u7684\u65F6\u5206\u79D2\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u53EF\u4EE5\u4F7F\u7528 <code>hourStep</code> <code>minuteStep</code> <code>secondStep</code> \u6309\u6B65\u957F\u5C55\u793A\u53EF\u9009\u7684\u65F6\u5206\u79D2\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Show stepped options by <code>hourStep</code> <code>minuteStep</code> <code>secondStep</code>.</p>
`,order:5,title:{"zh-CN":"\u6B65\u957F\u9009\u9879","en-US":"Interval option"},relativePath:"components/time-picker/demo/interval-options.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXRpbWUtcGlja2VyIHYtbW9kZWw6dmFsdWU9InZhbHVlIiA6bWludXRlLXN0ZXA9IjE1IiA6c2Vjb25kLXN0ZXA9IjEwIiAvPgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgdmFsdWUgPSByZWYoKTsKICAgIHJldHVybiB7CiAgICAgIHZhbHVlLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXRpbWUtcGlja2VyIHYtbW9kZWw6dmFsdWU9InZhbHVlIiA6bWludXRlLXN0ZXA9IjE1IiA6c2Vjb25kLXN0ZXA9IjEwIiAvPgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCB2YWx1ZSA9IHJlZigpOwogICAgcmV0dXJuIHsKICAgICAgdmFsdWUsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4=",isdemo:!1}},{default:e(()=>[o(l,{value:a.value,"onUpdate:value":s[0]||(s[0]=u=>a.value=u),"minute-step":15,"second-step":10},null,8,["value"])]),htmlCode:e(()=>[hn]),jsVersionHtml:e(()=>[An]),_:1},8,["jsfiddle"])}const vn=A(Cn,[["render",bn]]),fn=f({setup(){return{value1:C(y("12:08:23","HH:mm")),value2:C(y("12:08:23","HH:mm")),value3:C(y("12:08:23","HH:mm"))}}}),yn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-space")]),t(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("vertical"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-time-picker")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value1"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("large"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-time-picker")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-time-picker")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value3"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("small"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" dayjs "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'dayjs'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"value1"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"dayjs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'12:08:23'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'HH:mm'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"value2"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"dayjs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'12:08:23'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'HH:mm'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"value3"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"dayjs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'12:08:23'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'HH:mm'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),Zn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-space")]),t(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("vertical"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-time-picker")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value1"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("large"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-time-picker")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-time-picker")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value3"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("small"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" dayjs "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'dayjs'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"value1"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"dayjs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'12:08:23'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'HH:mm'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"value2"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"dayjs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'12:08:23'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'HH:mm'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"value3"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"dayjs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'12:08:23'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'HH:mm'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function wn(a,s,k,i,I,g){const l=c("a-time-picker"),d=c("a-space"),u=c("demo-box");return h(),b(u,{jsfiddle:{us:"The input box comes in three sizes. large is used in the form, while the medium size is the default.",cn:"\u4E09\u79CD\u5927\u5C0F\u7684\u8F93\u5165\u6846\uFF0C\u5927\u7684\u7528\u5728\u8868\u5355\u4E2D\uFF0C\u4E2D\u7684\u4E3A\u9ED8\u8BA4\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u4E09\u79CD\u5927\u5C0F\u7684\u8F93\u5165\u6846\uFF0C\u5927\u7684\u7528\u5728\u8868\u5355\u4E2D\uFF0C\u4E2D\u7684\u4E3A\u9ED8\u8BA4\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>The input box comes in three sizes. large is used in the form, while the medium size is the default.</p>
`,order:6,title:{"zh-CN":"\u4E09\u79CD\u5927\u5C0F","en-US":"Three Sizes"},relativePath:"components/time-picker/demo/size.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiPgogICAgPGEtdGltZS1waWNrZXIgdi1tb2RlbDp2YWx1ZT0idmFsdWUxIiBzaXplPSJsYXJnZSIgLz4KICAgIDxhLXRpbWUtcGlja2VyIHYtbW9kZWw6dmFsdWU9InZhbHVlMiIgLz4KICAgIDxhLXRpbWUtcGlja2VyIHYtbW9kZWw6dmFsdWU9InZhbHVlMyIgc2l6ZT0ic21hbGwiIC8+CiAgPC9hLXNwYWNlPgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwoKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIHJldHVybiB7CiAgICAgIHZhbHVlMTogcmVmKGRheWpzKCcxMjowODoyMycsICdISDptbScpKSwKICAgICAgdmFsdWUyOiByZWYoZGF5anMoJzEyOjA4OjIzJywgJ0hIOm1tJykpLAogICAgICB2YWx1ZTM6IHJlZihkYXlqcygnMTI6MDg6MjMnLCAnSEg6bW0nKSksCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiPgogICAgPGEtdGltZS1waWNrZXIgdi1tb2RlbDp2YWx1ZT0idmFsdWUxIiBzaXplPSJsYXJnZSIgLz4KICAgIDxhLXRpbWUtcGlja2VyIHYtbW9kZWw6dmFsdWU9InZhbHVlMiIgLz4KICAgIDxhLXRpbWUtcGlja2VyIHYtbW9kZWw6dmFsdWU9InZhbHVlMyIgc2l6ZT0ic21hbGwiIC8+CiAgPC9hLXNwYWNlPgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICByZXR1cm4gewogICAgICB2YWx1ZTE6IHJlZihkYXlqcygnMTI6MDg6MjMnLCAnSEg6bW0nKSksCiAgICAgIHZhbHVlMjogcmVmKGRheWpzKCcxMjowODoyMycsICdISDptbScpKSwKICAgICAgdmFsdWUzOiByZWYoZGF5anMoJzEyOjA4OjIzJywgJ0hIOm1tJykpLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+",isdemo:!1}},{default:e(()=>[o(d,{direction:"vertical"},{default:e(()=>[o(l,{value:a.value1,"onUpdate:value":s[0]||(s[0]=p=>a.value1=p),size:"large"},null,8,["value"]),o(l,{value:a.value2,"onUpdate:value":s[1]||(s[1]=p=>a.value2=p)},null,8,["value"]),o(l,{value:a.value3,"onUpdate:value":s[2]||(s[2]=p=>a.value3=p),size:"small"},null,8,["value"])]),_:1})]),htmlCode:e(()=>[yn]),jsVersionHtml:e(()=>[Zn]),_:1},8,["jsfiddle"])}const Wn=A(fn,[["render",wn]]),Gn=f({components:{SmileOutlined:N},setup(){return{dayjs:y,value:C()}}}),Bn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-time-picker")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":default-value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("dayjs('00:00:00', 'HH:mm:ss')"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#suffixIcon"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("smile-outlined")]),t(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-time-picker")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" dayjs"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(" Dayjs "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'dayjs'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" SmileOutlined "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    SmileOutlined`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      dayjs`),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(" ref"),n("span",{class:"token operator"},"<"),t("Dayjs"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),Sn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-time-picker")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":default-value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("dayjs('00:00:00', 'HH:mm:ss')"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#suffixIcon"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("smile-outlined")]),t(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-time-picker")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" dayjs "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'dayjs'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" SmileOutlined "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    SmileOutlined`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      dayjs`),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function Hn(a,s,k,i,I,g){const l=c("smile-outlined"),d=c("a-time-picker"),u=c("demo-box");return h(),b(u,{jsfiddle:{us:"Click `TimePicker`, and then we could select or input a time in panel.",cn:"\u70B9\u51FB TimePicker\uFF0C\u7136\u540E\u53EF\u4EE5\u5728\u6D6E\u5C42\u4E2D\u9009\u62E9\u6216\u8005\u8F93\u5165\u67D0\u4E00\u65F6\u95F4\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u70B9\u51FB TimePicker\uFF0C\u7136\u540E\u53EF\u4EE5\u5728\u6D6E\u5C42\u4E2D\u9009\u62E9\u6216\u8005\u8F93\u5165\u67D0\u4E00\u65F6\u95F4\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Click <code>TimePicker</code>, and then we could select or input a time in panel.</p>
`,order:7,title:{"zh-CN":"\u540E\u7F00\u56FE\u6807","en-US":"Suffix"},relativePath:"components/time-picker/demo/suffix.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXRpbWUtcGlja2VyIHYtbW9kZWw6dmFsdWU9InZhbHVlIiA6ZGVmYXVsdC12YWx1ZT0iZGF5anMoJzAwOjAwOjAwJywgJ0hIOm1tOnNzJykiPgogICAgPHRlbXBsYXRlICNzdWZmaXhJY29uPjxzbWlsZS1vdXRsaW5lZCAvPjwvdGVtcGxhdGU+CiAgPC9hLXRpbWUtcGlja2VyPgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IGRheWpzLCB7IERheWpzIH0gZnJvbSAnZGF5anMnOwppbXBvcnQgeyBTbWlsZU91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMtdnVlJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwoKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBjb21wb25lbnRzOiB7CiAgICBTbWlsZU91dGxpbmVkLAogIH0sCiAgc2V0dXAoKSB7CiAgICByZXR1cm4gewogICAgICBkYXlqcywKICAgICAgdmFsdWU6IHJlZjxEYXlqcz4oKSwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXRpbWUtcGlja2VyIHYtbW9kZWw6dmFsdWU9InZhbHVlIiA6ZGVmYXVsdC12YWx1ZT0iZGF5anMoJzAwOjAwOjAwJywgJ0hIOm1tOnNzJykiPgogICAgPHRlbXBsYXRlICNzdWZmaXhJY29uPjxzbWlsZS1vdXRsaW5lZCAvPjwvdGVtcGxhdGU+CiAgPC9hLXRpbWUtcGlja2VyPgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnOwppbXBvcnQgeyBTbWlsZU91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMtdnVlJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIGNvbXBvbmVudHM6IHsKICAgIFNtaWxlT3V0bGluZWQsCiAgfSwKICBzZXR1cCgpIHsKICAgIHJldHVybiB7CiAgICAgIGRheWpzLAogICAgICB2YWx1ZTogcmVmKCksCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4=",isdemo:!1}},{default:e(()=>[o(d,{value:a.value,"onUpdate:value":s[0]||(s[0]=p=>a.value=p),"default-value":a.dayjs("00:00:00","HH:mm:ss")},{suffixIcon:e(()=>[o(l)]),_:1},8,["value","default-value"])]),htmlCode:e(()=>[Bn]),jsVersionHtml:e(()=>[Sn]),_:1},8,["jsfiddle"])}const Pn=A(Gn,[["render",Hn]]),Yn={},Xn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-space")]),t(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("vertical"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-time-picker")]),t(),n("span",{class:"token attr-name"},":bordered"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("false"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-time-range-picker")]),t(),n("span",{class:"token attr-name"},":bordered"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("false"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),Vn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-space")]),t(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("vertical"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-time-picker")]),t(),n("span",{class:"token attr-name"},":bordered"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("false"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-time-range-picker")]),t(),n("span",{class:"token attr-name"},":bordered"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("false"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function jn(a,s){const k=c("a-time-picker"),i=c("a-time-range-picker"),I=c("a-space"),g=c("demo-box");return h(),b(g,{jsfiddle:{us:"Bordered-less style component.",cn:"\u65E0\u8FB9\u6846\u6837\u5F0F\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u65E0\u8FB9\u6846\u6837\u5F0F\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Bordered-less style component.</p>
`,order:14,title:{"zh-CN":"\u65E0\u8FB9\u6846","en-US":"Bordered-less"},relativePath:"components/time-picker/demo/bordered.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiPgogICAgPGEtdGltZS1waWNrZXIgOmJvcmRlcmVkPSJmYWxzZSIgLz4KICAgIDxhLXRpbWUtcmFuZ2UtcGlja2VyIDpib3JkZXJlZD0iZmFsc2UiIC8+CiAgPC9hLXNwYWNlPgo8L3RlbXBsYXRlPgoKCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiPgogICAgPGEtdGltZS1waWNrZXIgOmJvcmRlcmVkPSJmYWxzZSIgLz4KICAgIDxhLXRpbWUtcmFuZ2UtcGlja2VyIDpib3JkZXJlZD0iZmFsc2UiIC8+CiAgPC9hLXNwYWNlPgo8L3RlbXBsYXRlPg==",isdemo:!1}},{default:e(()=>[o(I,{direction:"vertical"},{default:e(()=>[o(k,{bordered:!1}),o(i,{bordered:!1})]),_:1})]),htmlCode:e(()=>[Xn]),jsVersionHtml:e(()=>[Vn]),_:1},8,["jsfiddle"])}const Rn=A(Yn,[["render",jn]]),Nn={},Fn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-time-range-picker")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),Dn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-time-range-picker")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function Jn(a,s){const k=c("a-time-range-picker"),i=c("demo-box");return h(),b(i,{jsfiddle:{us:"Use time range picker with `TimeRangePicker`.",cn:"\u901A\u8FC7 `TimeRangePicker` \u4F7F\u7528\u65F6\u95F4\u8303\u56F4\u9009\u62E9\u5668\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u901A\u8FC7 <code>TimeRangePicker</code> \u4F7F\u7528\u65F6\u95F4\u8303\u56F4\u9009\u62E9\u5668\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Use time range picker with <code>TimeRangePicker</code>.</p>
`,order:13,title:{"zh-CN":"\u8303\u56F4\u9009\u62E9\u5668","en-US":"Time Range Picker"},relativePath:"components/time-picker/demo/range-picker.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXRpbWUtcmFuZ2UtcGlja2VyIC8+CjwvdGVtcGxhdGU+CgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXRpbWUtcmFuZ2UtcGlja2VyIC8+CjwvdGVtcGxhdGU+",isdemo:!1}},{default:e(()=>[o(k)]),htmlCode:e(()=>[Fn]),jsVersionHtml:e(()=>[Dn]),_:1},8,["jsfiddle"])}const xn=A(Nn,[["render",Jn]]),Kn={pageData:{title:"TimePicker",description:"",frontmatter:{category:"Components",type:"\u6570\u636E\u5F55\u5165",title:"TimePicker",subtitle:"\u65F6\u95F4\u9009\u62E9\u6846",cover:"https://gw.alipayobjects.com/zos/alicdn/h04Zsl98I/TimePicker.svg"},headers:[{level:2,title:"\u4F55\u65F6\u4F7F\u7528",slug:"\u4F55\u65F6\u4F7F\u7528",content:"\u5F53\u7528\u6237\u9700\u8981\u8F93\u5165\u4E00\u4E2A\u65F6\u95F4\uFF0C\u53EF\u4EE5\u70B9\u51FB\u6807\u51C6\u8F93\u5165\u6846\uFF0C\u5F39\u51FA\u65F6\u95F4\u9762\u677F\u8FDB\u884C\u9009\u62E9\u3002"},{level:2,title:"API",slug:"API",content:""},{level:3,title:"\u4E8B\u4EF6",slug:"\u4E8B\u4EF6",content:""},{level:2,title:"\u65B9\u6CD5",slug:"\u65B9\u6CD5",content:""},{level:3,title:"TimeRangePicker",slug:"TimeRangePicker",content:"\u5C5E\u6027\u4E0E DatePicker \u7684 [RangePicker](/components/date-picker/#RangePicker) \u76F8\u540C\u3002\u8FD8\u5305\u542B\u4EE5\u4E0B\u5C5E\u6027\uFF1A"},{level:2,title:"FAQ",slug:"FAQ",content:"\u5982\u4F55\u5728 DatePicker \u4E2D\u4F7F\u7528\u81EA\u5B9A\u4E49\u65E5\u671F\u5E93\uFF08\u5982 moment.js \\| dayjs \\| date-fns\uFF09\uFF1F"},{level:3,title:"\u5982\u4F55\u5728 DatePicker \u4E2D\u4F7F\u7528\u81EA\u5B9A\u4E49\u65E5\u671F\u5E93\uFF08\u5982 moment.js \\| dayjs \\| date-fns\uFF09\uFF1F",slug:"\u5982\u4F55\u5728-DatePicker-\u4E2D\u4F7F\u7528\u81EA\u5B9A\u4E49\u65E5\u671F\u5E93\uFF08\u5982-moment-js-dayjs-date-fns\uFF09\uFF1F",content:"\u8BF7\u53C2\u8003[\u300A\u81EA\u5B9A\u4E49\u65E5\u671F\u5E93\u300B](/docs/vue/replace-date-cn)"}],relativePath:"components/time-picker/index.zh-CN.md",content:`
\u8F93\u5165\u6216\u9009\u62E9\u65F6\u95F4\u7684\u63A7\u4EF6\u3002

## \u4F55\u65F6\u4F7F\u7528

\u5F53\u7528\u6237\u9700\u8981\u8F93\u5165\u4E00\u4E2A\u65F6\u95F4\uFF0C\u53EF\u4EE5\u70B9\u51FB\u6807\u51C6\u8F93\u5165\u6846\uFF0C\u5F39\u51FA\u65F6\u95F4\u9762\u677F\u8FDB\u884C\u9009\u62E9\u3002

## API

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C | \u7248\u672C |
| --- | --- | --- | --- | --- |
| allowClear | \u662F\u5426\u5C55\u793A\u6E05\u9664\u6309\u94AE | boolean | true |  |
| autofocus | \u81EA\u52A8\u83B7\u53D6\u7126\u70B9 | boolean | false |  |
| bordered | \u662F\u5426\u6709\u8FB9\u6846 | boolean | true |  |
| clearIcon | \u81EA\u5B9A\u4E49\u7684\u6E05\u9664\u56FE\u6807 | v-slot:clearIcon | - |  |
| clearText | \u6E05\u9664\u6309\u94AE\u7684\u63D0\u793A\u6587\u6848 | string | clear |  |
| disabled | \u7981\u7528\u5168\u90E8\u64CD\u4F5C | boolean | false |  |
| disabledHours | \u7981\u6B62\u9009\u62E9\u90E8\u5206\u5C0F\u65F6\u9009\u9879 | function() | - |  |
| disabledMinutes | \u7981\u6B62\u9009\u62E9\u90E8\u5206\u5206\u949F\u9009\u9879 | function(selectedHour) | - |  |
| disabledSeconds | \u7981\u6B62\u9009\u62E9\u90E8\u5206\u79D2\u9009\u9879 | function(selectedHour, selectedMinute) | - |  |
| format | \u5C55\u793A\u7684\u65F6\u95F4\u683C\u5F0F | string | \`HH:mm:ss\` |  |
| getPopupContainer | \u5B9A\u4E49\u6D6E\u5C42\u7684\u5BB9\u5668\uFF0C\u9ED8\u8BA4\u4E3A body \u4E0A\u65B0\u5EFA div | function(trigger) | - |  |
| hideDisabledOptions | \u9690\u85CF\u7981\u6B62\u9009\u62E9\u7684\u9009\u9879 | boolean | false |  |
| hourStep | \u5C0F\u65F6\u9009\u9879\u95F4\u9694 | number | 1 |  |
| inputReadOnly | \u8BBE\u7F6E\u8F93\u5165\u6846\u4E3A\u53EA\u8BFB\uFF08\u907F\u514D\u5728\u79FB\u52A8\u8BBE\u5907\u4E0A\u6253\u5F00\u865A\u62DF\u952E\u76D8\uFF09 | boolean | false |  |
| minuteStep | \u5206\u949F\u9009\u9879\u95F4\u9694 | number | 1 |  |
| open(v-model) | \u9762\u677F\u662F\u5426\u6253\u5F00 | boolean | false |  |
| placeholder | \u6CA1\u6709\u503C\u7684\u65F6\u5019\u663E\u793A\u7684\u5185\u5BB9 | string \\| \\[string, string] | \`\u8BF7\u9009\u62E9\u65F6\u95F4\` |  |
| popupClassName | \u5F39\u51FA\u5C42\u7C7B\u540D | string | - |  |
| popupStyle | \u5F39\u51FA\u5C42\u6837\u5F0F\u5BF9\u8C61 | object | - |  |
| renderExtraFooter | \u9009\u62E9\u6846\u5E95\u90E8\u663E\u793A\u81EA\u5B9A\u4E49\u7684\u5185\u5BB9 | v-slot:renderExtraFooter | - |  |
| secondStep | \u79D2\u9009\u9879\u95F4\u9694 | number | 1 |  |
| showNow | \u9762\u677F\u662F\u5426\u663E\u793A\u201C\u6B64\u523B\u201D\u6309\u94AE | boolean | - |  |
| suffixIcon | \u81EA\u5B9A\u4E49\u7684\u9009\u62E9\u6846\u540E\u7F00\u56FE\u6807 | v-slot:suffixIcon | - |  |
| use12Hours | \u4F7F\u7528 12 \u5C0F\u65F6\u5236\uFF0C\u4E3A true \u65F6 \`format\` \u9ED8\u8BA4\u4E3A \`h:mm:ss a\` | boolean | false |  |
| value(v-model) | \u5F53\u524D\u65F6\u95F4 | [dayjs](https://day.js.org/) | - |  |
| valueFormat | \u53EF\u9009\uFF0C\u7ED1\u5B9A\u503C\u7684\u683C\u5F0F\uFF0C\u5BF9 value\u3001defaultValue \u8D77\u4F5C\u7528\u3002\u4E0D\u6307\u5B9A\u5219\u7ED1\u5B9A\u503C\u4E3A dayjs \u5BF9\u8C61 | string\uFF0C[\u5177\u4F53\u683C\u5F0F](https://day.js.org/docs/zh-CN/display/format) | - |  |

### \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D\u79F0   | \u8BF4\u660E                  | \u56DE\u8C03\u53C2\u6570                                                  |
| ---------- | --------------------- | --------------------------------------------------------- |
| change     | \u65F6\u95F4\u53D1\u751F\u53D8\u5316\u7684\u56DE\u8C03    | function(time: dayjs \\| string, timeString: string): void |
| openChange | \u9762\u677F\u6253\u5F00/\u5173\u95ED\u65F6\u7684\u56DE\u8C03 | (open: boolean): void                                     |

## \u65B9\u6CD5

| \u540D\u79F0    | \u63CF\u8FF0     |
| ------- | -------- |
| blur()  | \u79FB\u9664\u7126\u70B9 |
| focus() | \u83B7\u53D6\u7126\u70B9 |

### TimeRangePicker

\u5C5E\u6027\u4E0E DatePicker \u7684 [RangePicker](/components/date-picker/#RangePicker) \u76F8\u540C\u3002\u8FD8\u5305\u542B\u4EE5\u4E0B\u5C5E\u6027\uFF1A

| \u53C2\u6570  | \u8BF4\u660E                 | \u7C7B\u578B    | \u9ED8\u8BA4\u503C | \u7248\u672C |
| ----- | -------------------- | ------- | ------ | ---- |
| order | \u59CB\u672B\u65F6\u95F4\u662F\u5426\u81EA\u52A8\u6392\u5E8F | boolean | true   |      |

## FAQ

### \u5982\u4F55\u5728 DatePicker \u4E2D\u4F7F\u7528\u81EA\u5B9A\u4E49\u65E5\u671F\u5E93\uFF08\u5982 moment.js \\| dayjs \\| date-fns\uFF09\uFF1F

\u8BF7\u53C2\u8003[\u300A\u81EA\u5B9A\u4E49\u65E5\u671F\u5E93\u300B](/docs/vue/replace-date-cn)
`,html:`<p>\u8F93\u5165\u6216\u9009\u62E9\u65F6\u95F4\u7684\u63A7\u4EF6\u3002</p>
<h2 id="\u4F55\u65F6\u4F7F\u7528">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u5F53\u7528\u6237\u9700\u8981\u8F93\u5165\u4E00\u4E2A\u65F6\u95F4\uFF0C\u53EF\u4EE5\u70B9\u51FB\u6807\u51C6\u8F93\u5165\u6846\uFF0C\u5F39\u51FA\u65F6\u95F4\u9762\u677F\u8FDB\u884C\u9009\u62E9\u3002</p>
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
<td>allowClear</td>
<td>\u662F\u5426\u5C55\u793A\u6E05\u9664\u6309\u94AE</td>
<td>boolean</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>autofocus</td>
<td>\u81EA\u52A8\u83B7\u53D6\u7126\u70B9</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>bordered</td>
<td>\u662F\u5426\u6709\u8FB9\u6846</td>
<td>boolean</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>clearIcon</td>
<td>\u81EA\u5B9A\u4E49\u7684\u6E05\u9664\u56FE\u6807</td>
<td>v-slot:clearIcon</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>clearText</td>
<td>\u6E05\u9664\u6309\u94AE\u7684\u63D0\u793A\u6587\u6848</td>
<td>string</td>
<td>clear</td>
<td></td>
</tr>
<tr>
<td>disabled</td>
<td>\u7981\u7528\u5168\u90E8\u64CD\u4F5C</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>disabledHours</td>
<td>\u7981\u6B62\u9009\u62E9\u90E8\u5206\u5C0F\u65F6\u9009\u9879</td>
<td>function()</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>disabledMinutes</td>
<td>\u7981\u6B62\u9009\u62E9\u90E8\u5206\u5206\u949F\u9009\u9879</td>
<td>function(selectedHour)</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>disabledSeconds</td>
<td>\u7981\u6B62\u9009\u62E9\u90E8\u5206\u79D2\u9009\u9879</td>
<td>function(selectedHour, selectedMinute)</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>format</td>
<td>\u5C55\u793A\u7684\u65F6\u95F4\u683C\u5F0F</td>
<td>string</td>
<td><code>HH:mm:ss</code></td>
<td></td>
</tr>
<tr>
<td>getPopupContainer</td>
<td>\u5B9A\u4E49\u6D6E\u5C42\u7684\u5BB9\u5668\uFF0C\u9ED8\u8BA4\u4E3A body \u4E0A\u65B0\u5EFA div</td>
<td>function(trigger)</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>hideDisabledOptions</td>
<td>\u9690\u85CF\u7981\u6B62\u9009\u62E9\u7684\u9009\u9879</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>hourStep</td>
<td>\u5C0F\u65F6\u9009\u9879\u95F4\u9694</td>
<td>number</td>
<td>1</td>
<td></td>
</tr>
<tr>
<td>inputReadOnly</td>
<td>\u8BBE\u7F6E\u8F93\u5165\u6846\u4E3A\u53EA\u8BFB\uFF08\u907F\u514D\u5728\u79FB\u52A8\u8BBE\u5907\u4E0A\u6253\u5F00\u865A\u62DF\u952E\u76D8\uFF09</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>minuteStep</td>
<td>\u5206\u949F\u9009\u9879\u95F4\u9694</td>
<td>number</td>
<td>1</td>
<td></td>
</tr>
<tr>
<td>open(v-model)</td>
<td>\u9762\u677F\u662F\u5426\u6253\u5F00</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>placeholder</td>
<td>\u6CA1\u6709\u503C\u7684\u65F6\u5019\u663E\u793A\u7684\u5185\u5BB9</td>
<td>string | [string, string]</td>
<td><code>\u8BF7\u9009\u62E9\u65F6\u95F4</code></td>
<td></td>
</tr>
<tr>
<td>popupClassName</td>
<td>\u5F39\u51FA\u5C42\u7C7B\u540D</td>
<td>string</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>popupStyle</td>
<td>\u5F39\u51FA\u5C42\u6837\u5F0F\u5BF9\u8C61</td>
<td>object</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>renderExtraFooter</td>
<td>\u9009\u62E9\u6846\u5E95\u90E8\u663E\u793A\u81EA\u5B9A\u4E49\u7684\u5185\u5BB9</td>
<td>v-slot:renderExtraFooter</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>secondStep</td>
<td>\u79D2\u9009\u9879\u95F4\u9694</td>
<td>number</td>
<td>1</td>
<td></td>
</tr>
<tr>
<td>showNow</td>
<td>\u9762\u677F\u662F\u5426\u663E\u793A\u201C\u6B64\u523B\u201D\u6309\u94AE</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>suffixIcon</td>
<td>\u81EA\u5B9A\u4E49\u7684\u9009\u62E9\u6846\u540E\u7F00\u56FE\u6807</td>
<td>v-slot:suffixIcon</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>use12Hours</td>
<td>\u4F7F\u7528 12 \u5C0F\u65F6\u5236\uFF0C\u4E3A true \u65F6 <code>format</code> \u9ED8\u8BA4\u4E3A <code>h:mm:ss a</code></td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>value(v-model)</td>
<td>\u5F53\u524D\u65F6\u95F4</td>
<td><a href="https://day.js.org/" target="_blank" rel="noopener noreferrer">dayjs</a></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>valueFormat</td>
<td>\u53EF\u9009\uFF0C\u7ED1\u5B9A\u503C\u7684\u683C\u5F0F\uFF0C\u5BF9 value\u3001defaultValue \u8D77\u4F5C\u7528\u3002\u4E0D\u6307\u5B9A\u5219\u7ED1\u5B9A\u503C\u4E3A dayjs \u5BF9\u8C61</td>
<td>string\uFF0C<a href="https://day.js.org/docs/zh-CN/display/format" target="_blank" rel="noopener noreferrer">\u5177\u4F53\u683C\u5F0F</a></td>
<td>-</td>
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
<td>change</td>
<td>\u65F6\u95F4\u53D1\u751F\u53D8\u5316\u7684\u56DE\u8C03</td>
<td>function(time: dayjs | string, timeString: string): void</td>
</tr>
<tr>
<td>openChange</td>
<td>\u9762\u677F\u6253\u5F00/\u5173\u95ED\u65F6\u7684\u56DE\u8C03</td>
<td>(open: boolean): void</td>
</tr>
</tbody>
</table>
<h2 id="\u65B9\u6CD5">\u65B9\u6CD5 <a class="header-anchor" href="#\u65B9\u6CD5">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<table>
<thead>
<tr>
<th>\u540D\u79F0</th>
<th>\u63CF\u8FF0</th>
</tr>
</thead>
<tbody>
<tr>
<td>blur()</td>
<td>\u79FB\u9664\u7126\u70B9</td>
</tr>
<tr>
<td>focus()</td>
<td>\u83B7\u53D6\u7126\u70B9</td>
</tr>
</tbody>
</table>
<h3 id="TimeRangePicker">TimeRangePicker <a class="header-anchor" href="#TimeRangePicker">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>\u5C5E\u6027\u4E0E DatePicker \u7684 <a href="/components/date-picker/#RangePicker">RangePicker</a> \u76F8\u540C\u3002\u8FD8\u5305\u542B\u4EE5\u4E0B\u5C5E\u6027\uFF1A</p>
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
<td>order</td>
<td>\u59CB\u672B\u65F6\u95F4\u662F\u5426\u81EA\u52A8\u6392\u5E8F</td>
<td>boolean</td>
<td>true</td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="FAQ">FAQ <a class="header-anchor" href="#FAQ">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<h3 id="\u5982\u4F55\u5728-DatePicker-\u4E2D\u4F7F\u7528\u81EA\u5B9A\u4E49\u65E5\u671F\u5E93\uFF08\u5982-moment-js-dayjs-date-fns\uFF09\uFF1F">\u5982\u4F55\u5728 DatePicker \u4E2D\u4F7F\u7528\u81EA\u5B9A\u4E49\u65E5\u671F\u5E93\uFF08\u5982 moment.js | dayjs | date-fns\uFF09\uFF1F <a class="header-anchor" href="#\u5982\u4F55\u5728-DatePicker-\u4E2D\u4F7F\u7528\u81EA\u5B9A\u4E49\u65E5\u671F\u5E93\uFF08\u5982-moment-js-dayjs-date-fns\uFF09\uFF1F">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>\u8BF7\u53C2\u8003<a href="/docs/vue/replace-date-cn">\u300A\u81EA\u5B9A\u4E49\u65E5\u671F\u5E93\u300B</a></p>
`,lastUpdated:1669791392141}},Ln={class:"markdown"},_n=Y('<p>\u8F93\u5165\u6216\u9009\u62E9\u65F6\u95F4\u7684\u63A7\u4EF6\u3002</p><h2 id="\u4F55\u65F6\u4F7F\u7528">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528"><span aria-hidden="true" class="anchor">#</span></a></h2><p>\u5F53\u7528\u6237\u9700\u8981\u8F93\u5165\u4E00\u4E2A\u65F6\u95F4\uFF0C\u53EF\u4EE5\u70B9\u51FB\u6807\u51C6\u8F93\u5165\u6846\uFF0C\u5F39\u51FA\u65F6\u95F4\u9762\u677F\u8FDB\u884C\u9009\u62E9\u3002</p><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>allowClear</td><td>\u662F\u5426\u5C55\u793A\u6E05\u9664\u6309\u94AE</td><td>boolean</td><td>true</td><td></td></tr><tr><td>autofocus</td><td>\u81EA\u52A8\u83B7\u53D6\u7126\u70B9</td><td>boolean</td><td>false</td><td></td></tr><tr><td>bordered</td><td>\u662F\u5426\u6709\u8FB9\u6846</td><td>boolean</td><td>true</td><td></td></tr><tr><td>clearIcon</td><td>\u81EA\u5B9A\u4E49\u7684\u6E05\u9664\u56FE\u6807</td><td>v-slot:clearIcon</td><td>-</td><td></td></tr><tr><td>clearText</td><td>\u6E05\u9664\u6309\u94AE\u7684\u63D0\u793A\u6587\u6848</td><td>string</td><td>clear</td><td></td></tr><tr><td>disabled</td><td>\u7981\u7528\u5168\u90E8\u64CD\u4F5C</td><td>boolean</td><td>false</td><td></td></tr><tr><td>disabledHours</td><td>\u7981\u6B62\u9009\u62E9\u90E8\u5206\u5C0F\u65F6\u9009\u9879</td><td>function()</td><td>-</td><td></td></tr><tr><td>disabledMinutes</td><td>\u7981\u6B62\u9009\u62E9\u90E8\u5206\u5206\u949F\u9009\u9879</td><td>function(selectedHour)</td><td>-</td><td></td></tr><tr><td>disabledSeconds</td><td>\u7981\u6B62\u9009\u62E9\u90E8\u5206\u79D2\u9009\u9879</td><td>function(selectedHour, selectedMinute)</td><td>-</td><td></td></tr><tr><td>format</td><td>\u5C55\u793A\u7684\u65F6\u95F4\u683C\u5F0F</td><td>string</td><td><code>HH:mm:ss</code></td><td></td></tr><tr><td>getPopupContainer</td><td>\u5B9A\u4E49\u6D6E\u5C42\u7684\u5BB9\u5668\uFF0C\u9ED8\u8BA4\u4E3A body \u4E0A\u65B0\u5EFA div</td><td>function(trigger)</td><td>-</td><td></td></tr><tr><td>hideDisabledOptions</td><td>\u9690\u85CF\u7981\u6B62\u9009\u62E9\u7684\u9009\u9879</td><td>boolean</td><td>false</td><td></td></tr><tr><td>hourStep</td><td>\u5C0F\u65F6\u9009\u9879\u95F4\u9694</td><td>number</td><td>1</td><td></td></tr><tr><td>inputReadOnly</td><td>\u8BBE\u7F6E\u8F93\u5165\u6846\u4E3A\u53EA\u8BFB\uFF08\u907F\u514D\u5728\u79FB\u52A8\u8BBE\u5907\u4E0A\u6253\u5F00\u865A\u62DF\u952E\u76D8\uFF09</td><td>boolean</td><td>false</td><td></td></tr><tr><td>minuteStep</td><td>\u5206\u949F\u9009\u9879\u95F4\u9694</td><td>number</td><td>1</td><td></td></tr><tr><td>open(v-model)</td><td>\u9762\u677F\u662F\u5426\u6253\u5F00</td><td>boolean</td><td>false</td><td></td></tr><tr><td>placeholder</td><td>\u6CA1\u6709\u503C\u7684\u65F6\u5019\u663E\u793A\u7684\u5185\u5BB9</td><td>string | [string, string]</td><td><code>\u8BF7\u9009\u62E9\u65F6\u95F4</code></td><td></td></tr><tr><td>popupClassName</td><td>\u5F39\u51FA\u5C42\u7C7B\u540D</td><td>string</td><td>-</td><td></td></tr><tr><td>popupStyle</td><td>\u5F39\u51FA\u5C42\u6837\u5F0F\u5BF9\u8C61</td><td>object</td><td>-</td><td></td></tr><tr><td>renderExtraFooter</td><td>\u9009\u62E9\u6846\u5E95\u90E8\u663E\u793A\u81EA\u5B9A\u4E49\u7684\u5185\u5BB9</td><td>v-slot:renderExtraFooter</td><td>-</td><td></td></tr><tr><td>secondStep</td><td>\u79D2\u9009\u9879\u95F4\u9694</td><td>number</td><td>1</td><td></td></tr><tr><td>showNow</td><td>\u9762\u677F\u662F\u5426\u663E\u793A\u201C\u6B64\u523B\u201D\u6309\u94AE</td><td>boolean</td><td>-</td><td></td></tr><tr><td>suffixIcon</td><td>\u81EA\u5B9A\u4E49\u7684\u9009\u62E9\u6846\u540E\u7F00\u56FE\u6807</td><td>v-slot:suffixIcon</td><td>-</td><td></td></tr><tr><td>use12Hours</td><td>\u4F7F\u7528 12 \u5C0F\u65F6\u5236\uFF0C\u4E3A true \u65F6 <code>format</code> \u9ED8\u8BA4\u4E3A <code>h:mm:ss a</code></td><td>boolean</td><td>false</td><td></td></tr><tr><td>value(v-model)</td><td>\u5F53\u524D\u65F6\u95F4</td><td><a href="https://day.js.org/" target="_blank" rel="noopener noreferrer">dayjs</a></td><td>-</td><td></td></tr><tr><td>valueFormat</td><td>\u53EF\u9009\uFF0C\u7ED1\u5B9A\u503C\u7684\u683C\u5F0F\uFF0C\u5BF9 value\u3001defaultValue \u8D77\u4F5C\u7528\u3002\u4E0D\u6307\u5B9A\u5219\u7ED1\u5B9A\u503C\u4E3A dayjs \u5BF9\u8C61</td><td>string\uFF0C<a href="https://day.js.org/docs/zh-CN/display/format" target="_blank" rel="noopener noreferrer">\u5177\u4F53\u683C\u5F0F</a></td><td>-</td><td></td></tr></tbody></table><h3 id="\u4E8B\u4EF6">\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8B\u4EF6"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u65F6\u95F4\u53D1\u751F\u53D8\u5316\u7684\u56DE\u8C03</td><td>function(time: dayjs | string, timeString: string): void</td></tr><tr><td>openChange</td><td>\u9762\u677F\u6253\u5F00/\u5173\u95ED\u65F6\u7684\u56DE\u8C03</td><td>(open: boolean): void</td></tr></tbody></table><h2 id="\u65B9\u6CD5">\u65B9\u6CD5 <a class="header-anchor" href="#\u65B9\u6CD5"><span aria-hidden="true" class="anchor">#</span></a></h2><table><thead><tr><th>\u540D\u79F0</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>blur()</td><td>\u79FB\u9664\u7126\u70B9</td></tr><tr><td>focus()</td><td>\u83B7\u53D6\u7126\u70B9</td></tr></tbody></table><h3 id="TimeRangePicker">TimeRangePicker <a class="header-anchor" href="#TimeRangePicker"><span aria-hidden="true" class="anchor">#</span></a></h3><p>\u5C5E\u6027\u4E0E DatePicker \u7684 <a href="/components/date-picker/#RangePicker">RangePicker</a> \u76F8\u540C\u3002\u8FD8\u5305\u542B\u4EE5\u4E0B\u5C5E\u6027\uFF1A</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>order</td><td>\u59CB\u672B\u65F6\u95F4\u662F\u5426\u81EA\u52A8\u6392\u5E8F</td><td>boolean</td><td>true</td><td></td></tr></tbody></table><h2 id="FAQ">FAQ <a class="header-anchor" href="#FAQ"><span aria-hidden="true" class="anchor">#</span></a></h2><h3 id="\u5982\u4F55\u5728-DatePicker-\u4E2D\u4F7F\u7528\u81EA\u5B9A\u4E49\u65E5\u671F\u5E93\uFF08\u5982-moment-js-dayjs-date-fns\uFF09\uFF1F">\u5982\u4F55\u5728 DatePicker \u4E2D\u4F7F\u7528\u81EA\u5B9A\u4E49\u65E5\u671F\u5E93\uFF08\u5982 moment.js | dayjs | date-fns\uFF09\uFF1F <a class="header-anchor" href="#\u5982\u4F55\u5728-DatePicker-\u4E2D\u4F7F\u7528\u81EA\u5B9A\u4E49\u65E5\u671F\u5E93\uFF08\u5982-moment-js-dayjs-date-fns\uFF09\uFF1F"><span aria-hidden="true" class="anchor">#</span></a></h3><p>\u8BF7\u53C2\u8003<a href="/docs/vue/replace-date-cn">\u300A\u81EA\u5B9A\u4E49\u65E5\u671F\u5E93\u300B</a></p>',15),zn=[_n];function Un(a,s,k,i,I,g){return h(),P("article",Ln,zn)}const Tn=A(Kn,[["render",Un]]),En={pageData:{title:"TimePicker",description:"",frontmatter:{category:"Components",type:"Data Entry",title:"TimePicker",cover:"https://gw.alipayobjects.com/zos/alicdn/h04Zsl98I/TimePicker.svg"},headers:[{level:2,title:"When To Use",slug:"When-To-Use",content:"By clicking the input box, you can select a time from a popup panel."},{level:2,title:"API",slug:"API",content:""},{level:3,title:"events",slug:"events",content:""},{level:2,title:"Methods",slug:"Methods",content:""},{level:3,title:"TimeRangePicker",slug:"TimeRangePicker",content:"Same props from [RangePicker](/components/date-picker/#RangePicker) of DatePicker. And includes additional props:"},{level:2,title:"FAQ",slug:"FAQ",content:"How to use DatePicker with customize date library\uFF08like moment.js \\| dayjs \\| date-fns\uFF09\uFF1F"},{level:3,title:"How to use DatePicker with customize date library\uFF08like moment.js \\| dayjs \\| date-fns\uFF09\uFF1F",slug:"How-to-use-DatePicker-with-customize-date-library\uFF08like-moment-js-dayjs-date-fns\uFF09\uFF1F",content:"Please refer [replace date](/docs/vue/replace-date)"}],relativePath:"components/time-picker/index.en-US.md",content:`
To select/input a time.

## When To Use

By clicking the input box, you can select a time from a popup panel.

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| allowClear | Whether allow clearing text | boolean | true |  |
| autofocus | If get focus when component mounted | boolean | false |  |
| bordered | Whether has border style | boolean | true |  |
| clearIcon | The custom clear icon | v-slot:clearIcon | - |  |
| clearText | The clear tooltip of icon | string | clear |  |
| disabled | Determine whether the TimePicker is disabled | boolean | false |  |
| disabledHours | To specify the hours that cannot be selected | function() | - |  |
| disabledMinutes | To specify the minutes that cannot be selected | function(selectedHour) | - |  |
| disabledSeconds | To specify the seconds that cannot be selected | function(selectedHour, selectedMinute) | - |  |
| format | To set the time format | string | \`HH:mm:ss\` |  |
| getPopupContainer | To set the container of the floating layer, while the default is to create a div element in body | function(trigger) | - |  |
| hideDisabledOptions | Whether hide the options that can not be selected | boolean | false |  |
| hourStep | Interval between hours in picker | number | 1 |  |
| inputReadOnly | Set the \`readonly\` attribute of the input tag (avoids virtual keyboard on touch devices) | boolean | false |  |
| minuteStep | Interval between minutes in picker | number | 1 |  |
| open(v-model) | Whether to popup panel | boolean | false |  |
| placeholder | Display when there&#39;s no value | string \\| \\[string, string] | \`Select a time\` |  |
| popupClassName | The className of panel | string | - |  |
| popupStyle | The style of panel | CSSProperties | - |  |
| renderExtraFooter | Called from time picker panel to render some addon to its bottom | v-slot:renderExtraFooter | - |  |
| secondStep | Interval between seconds in picker | number | 1 |  |
| showNow | Whether to show \`Now\` button on panel | boolean | - |  |
| suffixIcon | The custom suffix icon | v-slot:suffixIcon | - |  |
| use12Hours | Display as 12 hours format, with default format \`h:mm:ss a\` | boolean | false |  |
| value(v-model) | To set time | [dayjs](https://day.js.org/) | - |  |
| valueFormat | optional, format of binding value. If not specified, the binding value will be a Date object | string\uFF0C[date formats](https://day.js.org/docs/en/display/format) | - |  |

### events

| Events Name | Description | Arguments |
| --- | --- | --- |
| change | a callback function, can be executed when the selected time is changing | function(time: dayjs \\| string, timeString: string): void |
| openChange | a callback function which will be called while panel opening/closing | (open: boolean): void |

## Methods

| Name    | Description  |
| ------- | ------------ |
| blur()  | remove focus |
| focus() | get focus    |

### TimeRangePicker

Same props from [RangePicker](/components/date-picker/#RangePicker) of DatePicker. And includes additional props:

| Property | Description              | Type    | Default | Version |
| -------- | ------------------------ | ------- | ------- | ------- |
| order    | Order start and end time | boolean | true    |         |

## FAQ

### How to use DatePicker with customize date library\uFF08like moment.js \\| dayjs \\| date-fns\uFF09\uFF1F

Please refer [replace date](/docs/vue/replace-date)
`,html:`<p>To select/input a time.</p>
<h2 id="When-To-Use">When To Use <a class="header-anchor" href="#When-To-Use">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>By clicking the input box, you can select a time from a popup panel.</p>
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
<td>allowClear</td>
<td>Whether allow clearing text</td>
<td>boolean</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>autofocus</td>
<td>If get focus when component mounted</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>bordered</td>
<td>Whether has border style</td>
<td>boolean</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>clearIcon</td>
<td>The custom clear icon</td>
<td>v-slot:clearIcon</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>clearText</td>
<td>The clear tooltip of icon</td>
<td>string</td>
<td>clear</td>
<td></td>
</tr>
<tr>
<td>disabled</td>
<td>Determine whether the TimePicker is disabled</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>disabledHours</td>
<td>To specify the hours that cannot be selected</td>
<td>function()</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>disabledMinutes</td>
<td>To specify the minutes that cannot be selected</td>
<td>function(selectedHour)</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>disabledSeconds</td>
<td>To specify the seconds that cannot be selected</td>
<td>function(selectedHour, selectedMinute)</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>format</td>
<td>To set the time format</td>
<td>string</td>
<td><code>HH:mm:ss</code></td>
<td></td>
</tr>
<tr>
<td>getPopupContainer</td>
<td>To set the container of the floating layer, while the default is to create a div element in body</td>
<td>function(trigger)</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>hideDisabledOptions</td>
<td>Whether hide the options that can not be selected</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>hourStep</td>
<td>Interval between hours in picker</td>
<td>number</td>
<td>1</td>
<td></td>
</tr>
<tr>
<td>inputReadOnly</td>
<td>Set the <code>readonly</code> attribute of the input tag (avoids virtual keyboard on touch devices)</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>minuteStep</td>
<td>Interval between minutes in picker</td>
<td>number</td>
<td>1</td>
<td></td>
</tr>
<tr>
<td>open(v-model)</td>
<td>Whether to popup panel</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>placeholder</td>
<td>Display when there's no value</td>
<td>string | [string, string]</td>
<td><code>Select a time</code></td>
<td></td>
</tr>
<tr>
<td>popupClassName</td>
<td>The className of panel</td>
<td>string</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>popupStyle</td>
<td>The style of panel</td>
<td>CSSProperties</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>renderExtraFooter</td>
<td>Called from time picker panel to render some addon to its bottom</td>
<td>v-slot:renderExtraFooter</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>secondStep</td>
<td>Interval between seconds in picker</td>
<td>number</td>
<td>1</td>
<td></td>
</tr>
<tr>
<td>showNow</td>
<td>Whether to show <code>Now</code> button on panel</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>suffixIcon</td>
<td>The custom suffix icon</td>
<td>v-slot:suffixIcon</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>use12Hours</td>
<td>Display as 12 hours format, with default format <code>h:mm:ss a</code></td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>value(v-model)</td>
<td>To set time</td>
<td><a href="https://day.js.org/" target="_blank" rel="noopener noreferrer">dayjs</a></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>valueFormat</td>
<td>optional, format of binding value. If not specified, the binding value will be a Date object</td>
<td>string\uFF0C<a href="https://day.js.org/docs/en/display/format" target="_blank" rel="noopener noreferrer">date formats</a></td>
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
</tr>
</thead>
<tbody>
<tr>
<td>change</td>
<td>a callback function, can be executed when the selected time is changing</td>
<td>function(time: dayjs | string, timeString: string): void</td>
</tr>
<tr>
<td>openChange</td>
<td>a callback function which will be called while panel opening/closing</td>
<td>(open: boolean): void</td>
</tr>
</tbody>
</table>
<h2 id="Methods">Methods <a class="header-anchor" href="#Methods">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>blur()</td>
<td>remove focus</td>
</tr>
<tr>
<td>focus()</td>
<td>get focus</td>
</tr>
</tbody>
</table>
<h3 id="TimeRangePicker">TimeRangePicker <a class="header-anchor" href="#TimeRangePicker">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>Same props from <a href="/components/date-picker/#RangePicker">RangePicker</a> of DatePicker. And includes additional props:</p>
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
<td>order</td>
<td>Order start and end time</td>
<td>boolean</td>
<td>true</td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="FAQ">FAQ <a class="header-anchor" href="#FAQ">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<h3 id="How-to-use-DatePicker-with-customize-date-library\uFF08like-moment-js-dayjs-date-fns\uFF09\uFF1F">How to use DatePicker with customize date library\uFF08like moment.js | dayjs | date-fns\uFF09\uFF1F <a class="header-anchor" href="#How-to-use-DatePicker-with-customize-date-library\uFF08like-moment-js-dayjs-date-fns\uFF09\uFF1F">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>Please refer <a href="/docs/vue/replace-date">replace date</a></p>
`,lastUpdated:1669791392141}},On={class:"markdown"},Qn=Y('<p>To select/input a time.</p><h2 id="When-To-Use">When To Use <a class="header-anchor" href="#When-To-Use"><span aria-hidden="true" class="anchor">#</span></a></h2><p>By clicking the input box, you can select a time from a popup panel.</p><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Version</th></tr></thead><tbody><tr><td>allowClear</td><td>Whether allow clearing text</td><td>boolean</td><td>true</td><td></td></tr><tr><td>autofocus</td><td>If get focus when component mounted</td><td>boolean</td><td>false</td><td></td></tr><tr><td>bordered</td><td>Whether has border style</td><td>boolean</td><td>true</td><td></td></tr><tr><td>clearIcon</td><td>The custom clear icon</td><td>v-slot:clearIcon</td><td>-</td><td></td></tr><tr><td>clearText</td><td>The clear tooltip of icon</td><td>string</td><td>clear</td><td></td></tr><tr><td>disabled</td><td>Determine whether the TimePicker is disabled</td><td>boolean</td><td>false</td><td></td></tr><tr><td>disabledHours</td><td>To specify the hours that cannot be selected</td><td>function()</td><td>-</td><td></td></tr><tr><td>disabledMinutes</td><td>To specify the minutes that cannot be selected</td><td>function(selectedHour)</td><td>-</td><td></td></tr><tr><td>disabledSeconds</td><td>To specify the seconds that cannot be selected</td><td>function(selectedHour, selectedMinute)</td><td>-</td><td></td></tr><tr><td>format</td><td>To set the time format</td><td>string</td><td><code>HH:mm:ss</code></td><td></td></tr><tr><td>getPopupContainer</td><td>To set the container of the floating layer, while the default is to create a div element in body</td><td>function(trigger)</td><td>-</td><td></td></tr><tr><td>hideDisabledOptions</td><td>Whether hide the options that can not be selected</td><td>boolean</td><td>false</td><td></td></tr><tr><td>hourStep</td><td>Interval between hours in picker</td><td>number</td><td>1</td><td></td></tr><tr><td>inputReadOnly</td><td>Set the <code>readonly</code> attribute of the input tag (avoids virtual keyboard on touch devices)</td><td>boolean</td><td>false</td><td></td></tr><tr><td>minuteStep</td><td>Interval between minutes in picker</td><td>number</td><td>1</td><td></td></tr><tr><td>open(v-model)</td><td>Whether to popup panel</td><td>boolean</td><td>false</td><td></td></tr><tr><td>placeholder</td><td>Display when there&#39;s no value</td><td>string | [string, string]</td><td><code>Select a time</code></td><td></td></tr><tr><td>popupClassName</td><td>The className of panel</td><td>string</td><td>-</td><td></td></tr><tr><td>popupStyle</td><td>The style of panel</td><td>CSSProperties</td><td>-</td><td></td></tr><tr><td>renderExtraFooter</td><td>Called from time picker panel to render some addon to its bottom</td><td>v-slot:renderExtraFooter</td><td>-</td><td></td></tr><tr><td>secondStep</td><td>Interval between seconds in picker</td><td>number</td><td>1</td><td></td></tr><tr><td>showNow</td><td>Whether to show <code>Now</code> button on panel</td><td>boolean</td><td>-</td><td></td></tr><tr><td>suffixIcon</td><td>The custom suffix icon</td><td>v-slot:suffixIcon</td><td>-</td><td></td></tr><tr><td>use12Hours</td><td>Display as 12 hours format, with default format <code>h:mm:ss a</code></td><td>boolean</td><td>false</td><td></td></tr><tr><td>value(v-model)</td><td>To set time</td><td><a href="https://day.js.org/" target="_blank" rel="noopener noreferrer">dayjs</a></td><td>-</td><td></td></tr><tr><td>valueFormat</td><td>optional, format of binding value. If not specified, the binding value will be a Date object</td><td>string\uFF0C<a href="https://day.js.org/docs/en/display/format" target="_blank" rel="noopener noreferrer">date formats</a></td><td>-</td><td></td></tr></tbody></table><h3 id="events">events <a class="header-anchor" href="#events"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>Events Name</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>change</td><td>a callback function, can be executed when the selected time is changing</td><td>function(time: dayjs | string, timeString: string): void</td></tr><tr><td>openChange</td><td>a callback function which will be called while panel opening/closing</td><td>(open: boolean): void</td></tr></tbody></table><h2 id="Methods">Methods <a class="header-anchor" href="#Methods"><span aria-hidden="true" class="anchor">#</span></a></h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>blur()</td><td>remove focus</td></tr><tr><td>focus()</td><td>get focus</td></tr></tbody></table><h3 id="TimeRangePicker">TimeRangePicker <a class="header-anchor" href="#TimeRangePicker"><span aria-hidden="true" class="anchor">#</span></a></h3><p>Same props from <a href="/components/date-picker/#RangePicker">RangePicker</a> of DatePicker. And includes additional props:</p><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Version</th></tr></thead><tbody><tr><td>order</td><td>Order start and end time</td><td>boolean</td><td>true</td><td></td></tr></tbody></table><h2 id="FAQ">FAQ <a class="header-anchor" href="#FAQ"><span aria-hidden="true" class="anchor">#</span></a></h2><h3 id="How-to-use-DatePicker-with-customize-date-library\uFF08like-moment-js-dayjs-date-fns\uFF09\uFF1F">How to use DatePicker with customize date library\uFF08like moment.js | dayjs | date-fns\uFF09\uFF1F <a class="header-anchor" href="#How-to-use-DatePicker-with-customize-date-library\uFF08like-moment-js-dayjs-date-fns\uFF09\uFF1F"><span aria-hidden="true" class="anchor">#</span></a></h3><p>Please refer <a href="/docs/vue/replace-date">replace date</a></p>',15),qn=[Qn];function Mn(a,s,k,i,I,g){return h(),P("article",On,qn)}const $n=A(En,[["render",Mn]]);const nt={CN:Tn,US:$n,components:{Try:_,Hours:O,Addon:nn,Basic:on,Disabled:dn,HideColumn:mn,IntervalOptions:vn,Size:Wn,Suffix:Pn,Bordered:Rn,RangePicker:xn}};function tt(a,s,k,i,I,g){const l=c("Try"),d=c("Basic"),u=c("Bordered"),p=c("RangePicker"),r=c("Hours"),v=c("Addon"),Z=c("Disabled"),w=c("HideColumn"),W=c("IntervalOptions"),G=c("Size"),B=c("Suffix"),m=c("demo-sort");return h(),b(m,null,{default:e(()=>[o(l),o(d),o(u),o(p),o(r),o(v),o(Z),o(w),o(W),o(G),o(B)]),_:1})}const ot=A(nt,[["render",tt]]);export{ot as default};
