import{d as y,r as k,o as J,z as x,_ as v,k as h,l as A,w as o,f as e,b as n,t as Y,y as K,a as G,h as S,e as a,F as R,j as c,B as V,K as b,s as B}from"./index.6a8b5f17.js";import{t as z}from"./trydemo.48000c6d.js";import{S as U}from"./SmileOutlined.978d0a5f.js";const T=y({mixins:[z],setup(t){const s=k(""),r=k(""),g=k({range:!1,picker:"date",showTime:!1,allowClear:!0,bordered:!0,size:"middle",disabled:!1}),I={...g.value},C=(l,p,f="")=>g.value[l]!==p?f||" "+(g.value[l]===!1?":":"")+l.replace(/([A-Z])/g,function(Z){return"-"+Z.toLocaleLowerCase()})+(g.value[l]===!0?"":`="${g.value[l]}"`):"",u=l=>{let p="",f="";for(let W in l)["range"].includes(W)||(p+=C(W,I[W]));const Z=l.range?"a-range-picker":"a-date-picker";return`<template>
          <${Z}${p}${l.prefixsuffix==="1"?`>
            <template #prefix>
              <user-outlined type="user" />
            </template>
            <template #suffix>
              <a-tooltip title="Extra information"><info-circle-outlined style="color: rgba(0, 0, 0, 0.45)" /></a-tooltip>
            </template>
          </${Z}>`:" />"}
        </template>
        ${f}`.replace(/ {8}/g,"")};J(()=>{s.value=u(g.value)});let i=g.value.range;return x(g,l=>{i!==l.range&&(r.value="",g.value.showTime=!1),l.picker!=="date"&&(g.value.showTime=!1),i=l.range,s.value=u(l)},{deep:!0}),{value:r,democode:s,propdata:g,resetItem:()=>{g.value={...I}},labelCol:{style:{width:"80px"}}}}}),L={class:"code-box-demo-try"},E={class:"code-box-meta markdown"},q={class:"code-box-title"},Q={class:"code-box-description"};function M(t,s,r,g,I,C){const u=c("a-date-picker"),i=c("a-range-picker"),d=c("a-switch"),l=c("a-form-item"),p=c("a-col"),f=c("a-row"),Z=c("a-radio"),W=c("a-radio-group"),w=c("a-form"),P=c("demo-try"),j=c("demo-box");return h(),A(j,{jsfiddle:{docHtml:"",demo:1,order:-1,title:{"zh-CN":"\u5728\u7EBF\u6F14\u793A","en-US":"Online Demo"},relativePath:"components/date-picker/demo/try.vue",sourceCode:"PHRlbXBsYXRlPgogIDxzZWN0aW9uPgogICAgPHNlY3Rpb24gY2xhc3M9ImNvZGUtYm94LWRlbW8tdHJ5Ij4KICAgICAgPGEtZGF0ZS1waWNrZXIKICAgICAgICB2LWlmPSIhcHJvcGRhdGEucmFuZ2UiCiAgICAgICAgdi1tb2RlbDp2YWx1ZT0idmFsdWUiCiAgICAgICAgOnBpY2tlcj0icHJvcGRhdGEucGlja2VyIgogICAgICAgIDphbGxvdy1jbGVhcj0icHJvcGRhdGEuYWxsb3dDbGVhciIKICAgICAgICA6Ym9yZGVyZWQ9InByb3BkYXRhLmJvcmRlcmVkIgogICAgICAgIDpzaXplPSJwcm9wZGF0YS5zaXplIgogICAgICAgIDpkaXNhYmxlZD0icHJvcGRhdGEuZGlzYWJsZWQiCiAgICAgIC8+CgogICAgICA8YS1yYW5nZS1waWNrZXIKICAgICAgICB2LWVsc2UKICAgICAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZSIKICAgICAgICA6cGlja2VyPSJwcm9wZGF0YS5waWNrZXIiCiAgICAgICAgOnNob3ctdGltZT0icHJvcGRhdGEuc2hvd1RpbWUiCiAgICAgICAgOmFsbG93LWNsZWFyPSJwcm9wZGF0YS5hbGxvd0NsZWFyIgogICAgICAgIDpib3JkZXJlZD0icHJvcGRhdGEuYm9yZGVyZWQiCiAgICAgICAgOnNpemU9InByb3BkYXRhLnNpemUiCiAgICAgICAgOmRpc2FibGVkPSJwcm9wZGF0YS5kaXNhYmxlZCIKICAgICAgLz4KICAgIDwvc2VjdGlvbj4KICAgIDxzZWN0aW9uIGNsYXNzPSJjb2RlLWJveC1tZXRhIG1hcmtkb3duIj4KICAgICAgPHNlY3Rpb24gY2xhc3M9ImNvZGUtYm94LXRpdGxlIj57eyBkZW1vdGl0bGUgfX08L3NlY3Rpb24+CiAgICAgIDxzZWN0aW9uIGNsYXNzPSJjb2RlLWJveC1kZXNjcmlwdGlvbiI+CiAgICAgICAgPGEtZm9ybSA6bGFiZWwtY29sPSJsYWJlbENvbCI+CiAgICAgICAgICA8YS1yb3c+CiAgICAgICAgICAgIDxhLWNvbCBzcGFuPSI4Ij4KICAgICAgICAgICAgICA8YS1mb3JtLWl0ZW0gbGFiZWw9ImlzUmFuZ2UiPgogICAgICAgICAgICAgICAgPGEtc3dpdGNoCiAgICAgICAgICAgICAgICAgIHYtbW9kZWw6Y2hlY2tlZD0icHJvcGRhdGEucmFuZ2UiCiAgICAgICAgICAgICAgICAgIGNoZWNrZWQtY2hpbGRyZW49IuW8gCIKICAgICAgICAgICAgICAgICAgdW4tY2hlY2tlZC1jaGlsZHJlbj0i5YWzIgogICAgICAgICAgICAgICAgLz4KICAgICAgICAgICAgICA8L2EtZm9ybS1pdGVtPgogICAgICAgICAgICA8L2EtY29sPgogICAgICAgICAgICA8YS1jb2wgc3Bhbj0iOCIgdi1pZj0icHJvcGRhdGEucmFuZ2UiPgogICAgICAgICAgICAgIDxhLWZvcm0taXRlbSBsYWJlbD0ic2hvd3RpbWUiPgogICAgICAgICAgICAgICAgPGEtc3dpdGNoCiAgICAgICAgICAgICAgICAgIHYtbW9kZWw6Y2hlY2tlZD0icHJvcGRhdGEuc2hvd1RpbWUiCiAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD0icHJvcGRhdGEucGlja2VyICE9PSAnZGF0ZSciCiAgICAgICAgICAgICAgICAgIGNoZWNrZWQtY2hpbGRyZW49IuW8gCIKICAgICAgICAgICAgICAgICAgdW4tY2hlY2tlZC1jaGlsZHJlbj0i5YWzIgogICAgICAgICAgICAgICAgLz4KICAgICAgICAgICAgICA8L2EtZm9ybS1pdGVtPgogICAgICAgICAgICA8L2EtY29sPgogICAgICAgICAgPC9hLXJvdz4KICAgICAgICAgIDxhLXJvdz4KICAgICAgICAgICAgPGEtY29sIHNwYW49IjE0Ij4KICAgICAgICAgICAgICA8YS1mb3JtLWl0ZW0gbGFiZWw9InR5cGUiPgogICAgICAgICAgICAgICAgPGEtcmFkaW8tZ3JvdXAgdi1tb2RlbDp2YWx1ZT0icHJvcGRhdGEucGlja2VyIj4KICAgICAgICAgICAgICAgICAgPGEtcmFkaW8KICAgICAgICAgICAgICAgICAgICB2LWZvcj0iaXRlbSBpbiBbJ2RhdGUnLCAnd2VlaycsICdtb250aCcsICdxdWFydGVyJywgJ3llYXInXSIKICAgICAgICAgICAgICAgICAgICA6a2V5PSJpdGVtIgogICAgICAgICAgICAgICAgICAgIDp2YWx1ZT0iaXRlbSIKICAgICAgICAgICAgICAgICAgICBuYW1lPSJvcHRpb25UeXBlIgogICAgICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICAgICAge3sgaXRlbSB9fQogICAgICAgICAgICAgICAgICA8L2EtcmFkaW8+CiAgICAgICAgICAgICAgICA8L2EtcmFkaW8tZ3JvdXA+CiAgICAgICAgICAgICAgPC9hLWZvcm0taXRlbT4KICAgICAgICAgICAgPC9hLWNvbD4KICAgICAgICAgIDwvYS1yb3c+CgogICAgICAgICAgPGEtZm9ybS1pdGVtIGxhYmVsPSJzaXplIj4KICAgICAgICAgICAgPGEtcmFkaW8tZ3JvdXAgdi1tb2RlbDp2YWx1ZT0icHJvcGRhdGEuc2l6ZSI+CiAgICAgICAgICAgICAgPGEtcmFkaW8KICAgICAgICAgICAgICAgIHYtZm9yPSJpdGVtIG9mIFsnbGFyZ2UnLCAnbWlkZGxlJywgJ3NtYWxsJ10iCiAgICAgICAgICAgICAgICA6a2V5PSJpdGVtIgogICAgICAgICAgICAgICAgOnZhbHVlPSJpdGVtIgogICAgICAgICAgICAgICAgbmFtZT0ib3B0aW9uVHlwZSIKICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICB7eyBpdGVtIH19CiAgICAgICAgICAgICAgPC9hLXJhZGlvPgogICAgICAgICAgICA8L2EtcmFkaW8tZ3JvdXA+CiAgICAgICAgICA8L2EtZm9ybS1pdGVtPgoKICAgICAgICAgIDxhLXJvdz4KICAgICAgICAgICAgPGEtY29sIHNwYW49IjgiPgogICAgICAgICAgICAgIDxhLWZvcm0taXRlbSBsYWJlbD0iYWxsb3dDbGVhciI+CiAgICAgICAgICAgICAgICA8YS1zd2l0Y2gKICAgICAgICAgICAgICAgICAgdi1tb2RlbDpjaGVja2VkPSJwcm9wZGF0YS5hbGxvd0NsZWFyIgogICAgICAgICAgICAgICAgICBjaGVja2VkLWNoaWxkcmVuPSLlvIAiCiAgICAgICAgICAgICAgICAgIHVuLWNoZWNrZWQtY2hpbGRyZW49IuWFsyIKICAgICAgICAgICAgICAgIC8+CiAgICAgICAgICAgICAgPC9hLWZvcm0taXRlbT4KICAgICAgICAgICAgPC9hLWNvbD4KICAgICAgICAgICAgPGEtY29sIHNwYW49IjgiPgogICAgICAgICAgICAgIDxhLWZvcm0taXRlbSBsYWJlbD0iYm9yZGVyZWQiPgogICAgICAgICAgICAgICAgPGEtc3dpdGNoCiAgICAgICAgICAgICAgICAgIHYtbW9kZWw6Y2hlY2tlZD0icHJvcGRhdGEuYm9yZGVyZWQiCiAgICAgICAgICAgICAgICAgIGNoZWNrZWQtY2hpbGRyZW49IuW8gCIKICAgICAgICAgICAgICAgICAgdW4tY2hlY2tlZC1jaGlsZHJlbj0i5YWzIgogICAgICAgICAgICAgICAgLz4KICAgICAgICAgICAgICA8L2EtZm9ybS1pdGVtPgogICAgICAgICAgICA8L2EtY29sPgogICAgICAgICAgICA8YS1jb2wgc3Bhbj0iOCI+CiAgICAgICAgICAgICAgPGEtZm9ybS1pdGVtIGxhYmVsPSJkaXNhYmxlZCI+CiAgICAgICAgICAgICAgICA8YS1zd2l0Y2gKICAgICAgICAgICAgICAgICAgdi1tb2RlbDpjaGVja2VkPSJwcm9wZGF0YS5kaXNhYmxlZCIKICAgICAgICAgICAgICAgICAgY2hlY2tlZC1jaGlsZHJlbj0i5byAIgogICAgICAgICAgICAgICAgICB1bi1jaGVja2VkLWNoaWxkcmVuPSLlhbMiCiAgICAgICAgICAgICAgICAvPgogICAgICAgICAgICAgIDwvYS1mb3JtLWl0ZW0+CiAgICAgICAgICAgIDwvYS1jb2w+CiAgICAgICAgICA8L2Etcm93PgogICAgICAgIDwvYS1mb3JtPgogICAgICA8L3NlY3Rpb24+CiAgICA8L3NlY3Rpb24+CiAgPC9zZWN0aW9uPgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYsIHdhdGNoLCBvbk1vdW50ZWQgfSBmcm9tICd2dWUnOwppbXBvcnQgdHJ5ZGVtbyBmcm9tICcuLi8uLi9fdXRpbC90cnlkZW1vJzsKCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgbWl4aW5zOiBbdHJ5ZGVtb10sCiAgc2V0dXAocHJvcHMpIHsKICAgIC8vIC8vIOWGhee9ruWtl+autQogICAgY29uc3QgZGVtb2NvZGUgPSByZWYoJycpOwoKICAgIGNvbnN0IHZhbHVlID0gcmVmKCcnKTsKCiAgICBjb25zdCBwcm9wZGF0YSA9IHJlZih7CiAgICAgIHJhbmdlOiBmYWxzZSwKICAgICAgcGlja2VyOiAnZGF0ZScsCiAgICAgIHNob3dUaW1lOiBmYWxzZSwKICAgICAgYWxsb3dDbGVhcjogdHJ1ZSwKICAgICAgYm9yZGVyZWQ6IHRydWUsCiAgICAgIHNpemU6ICdtaWRkbGUnLCAvLyBkZWZhdWx0LeaZrumAmiBsYXJnZSBzbWFsbAogICAgICBkaXNhYmxlZDogZmFsc2UsCiAgICB9KTsKCiAgICBjb25zdCBkZWZhdWx0VmFsID0geyAuLi5wcm9wZGF0YS52YWx1ZSB9OwoKICAgIGNvbnN0IGdldEVxdWFsVmFsID0gKHR5cGUsIG5vdGVxdWFsLCBlcXVhbHJlcyA9ICcnKSA9PiB7CiAgICAgIHJldHVybiBwcm9wZGF0YS52YWx1ZVt0eXBlXSAhPT0gbm90ZXF1YWwKICAgICAgICA/IGVxdWFscmVzIHx8CiAgICAgICAgICAgICcgJyArCiAgICAgICAgICAgICAgKHByb3BkYXRhLnZhbHVlW3R5cGVdID09PSBmYWxzZSA/ICc6JyA6ICcnKSArCiAgICAgICAgICAgICAgdHlwZS5yZXBsYWNlKC8oW0EtWl0pL2csIGZ1bmN0aW9uIChtKSB7CiAgICAgICAgICAgICAgICByZXR1cm4gJy0nICsgbS50b0xvY2FsZUxvd2VyQ2FzZSgpOwogICAgICAgICAgICAgIH0pICsKICAgICAgICAgICAgICAocHJvcGRhdGEudmFsdWVbdHlwZV0gPT09IHRydWUgPyAnJyA6IGA9IiR7cHJvcGRhdGEudmFsdWVbdHlwZV19ImApCiAgICAgICAgOiAnJzsKICAgIH07CgogICAgY29uc3QgcmVuZGVyQ29kZSA9IHByb3BkYXRhID0+IHsKICAgICAgbGV0IHByb3BzdmFsID0gJyc7CiAgICAgIGxldCBzY3JpcHRjb2RlID0gJyc7CgogICAgICBmb3IgKGxldCBrZXkgaW4gcHJvcGRhdGEpIHsKICAgICAgICBpZiAoIVsncmFuZ2UnXS5pbmNsdWRlcyhrZXkpKSB7CiAgICAgICAgICBwcm9wc3ZhbCArPSBnZXRFcXVhbFZhbChrZXksIGRlZmF1bHRWYWxba2V5XSk7CiAgICAgICAgfQogICAgICB9CiAgICAgIGNvbnN0IGxhYmVsID0gcHJvcGRhdGEucmFuZ2UgPyAnYS1yYW5nZS1waWNrZXInIDogJ2EtZGF0ZS1waWNrZXInOwogICAgICByZXR1cm4gYDx0ZW1wbGF0ZT4KICAgICAgICAgIDwke2xhYmVsfSR7cHJvcHN2YWx9JHsKICAgICAgICBwcm9wZGF0YVsncHJlZml4c3VmZml4J10gPT09ICcxJwogICAgICAgICAgPyBgPgogICAgICAgICAgICA8dGVtcGxhdGUgI3ByZWZpeD4KICAgICAgICAgICAgICA8dXNlci1vdXRsaW5lZCB0eXBlPSJ1c2VyIiAvPgogICAgICAgICAgICA8L3RlbXBsYXRlPgogICAgICAgICAgICA8dGVtcGxhdGUgI3N1ZmZpeD4KICAgICAgICAgICAgICA8YS10b29sdGlwIHRpdGxlPSJFeHRyYSBpbmZvcm1hdGlvbiI+PGluZm8tY2lyY2xlLW91dGxpbmVkIHN0eWxlPSJjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ1KSIgLz48L2EtdG9vbHRpcD4KICAgICAgICAgICAgPC90ZW1wbGF0ZT4KICAgICAgICAgIDwvJHtsYWJlbH0+YAogICAgICAgICAgOiAnIC8+JwogICAgICB9CiAgICAgICAgPC90ZW1wbGF0ZT4KICAgICAgICAke3NjcmlwdGNvZGV9YC5yZXBsYWNlKC8gezh9L2csICcnKTsKICAgIH07CgogICAgb25Nb3VudGVkKCgpID0+IHsKICAgICAgZGVtb2NvZGUudmFsdWUgPSByZW5kZXJDb2RlKHByb3BkYXRhLnZhbHVlKTsKICAgIH0pOwoKICAgIGxldCBsYXN0SXNSYW5nZSA9IHByb3BkYXRhLnZhbHVlLnJhbmdlOwoKICAgIHdhdGNoKAogICAgICBwcm9wZGF0YSwKICAgICAgZGF0YSA9PiB7CiAgICAgICAgaWYgKGxhc3RJc1JhbmdlICE9PSBkYXRhLnJhbmdlKSB7CiAgICAgICAgICB2YWx1ZS52YWx1ZSA9ICcnOwogICAgICAgICAgcHJvcGRhdGEudmFsdWUuc2hvd1RpbWUgPSBmYWxzZTsKICAgICAgICB9CiAgICAgICAgZGF0YS5waWNrZXIgIT09ICdkYXRlJyAmJiAocHJvcGRhdGEudmFsdWUuc2hvd1RpbWUgPSBmYWxzZSk7CiAgICAgICAgbGFzdElzUmFuZ2UgPSBkYXRhLnJhbmdlOwogICAgICAgIGRlbW9jb2RlLnZhbHVlID0gcmVuZGVyQ29kZShkYXRhKTsKICAgICAgfSwKICAgICAgewogICAgICAgIGRlZXA6IHRydWUsCiAgICAgIH0sCiAgICApOwoKICAgIC8vIOmHjee9ruaWueazleWbuuWumuWtl+autQogICAgY29uc3QgcmVzZXRJdGVtID0gKCkgPT4gewogICAgICBwcm9wZGF0YS52YWx1ZSA9IHsgLi4uZGVmYXVsdFZhbCB9OwogICAgfTsKCiAgICByZXR1cm4gewogICAgICB2YWx1ZSwKICAgICAgZGVtb2NvZGUsCiAgICAgIHByb3BkYXRhLAogICAgICByZXNldEl0ZW0sCiAgICAgIGxhYmVsQ29sOiB7IHN0eWxlOiB7IHdpZHRoOiAnODBweCcgfSB9LAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxzZWN0aW9uPgogICAgPHNlY3Rpb24gY2xhc3M9ImNvZGUtYm94LWRlbW8tdHJ5Ij4KICAgICAgPGEtZGF0ZS1waWNrZXIKICAgICAgICB2LWlmPSIhcHJvcGRhdGEucmFuZ2UiCiAgICAgICAgdi1tb2RlbDp2YWx1ZT0idmFsdWUiCiAgICAgICAgOnBpY2tlcj0icHJvcGRhdGEucGlja2VyIgogICAgICAgIDphbGxvdy1jbGVhcj0icHJvcGRhdGEuYWxsb3dDbGVhciIKICAgICAgICA6Ym9yZGVyZWQ9InByb3BkYXRhLmJvcmRlcmVkIgogICAgICAgIDpzaXplPSJwcm9wZGF0YS5zaXplIgogICAgICAgIDpkaXNhYmxlZD0icHJvcGRhdGEuZGlzYWJsZWQiCiAgICAgIC8+CgogICAgICA8YS1yYW5nZS1waWNrZXIKICAgICAgICB2LWVsc2UKICAgICAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZSIKICAgICAgICA6cGlja2VyPSJwcm9wZGF0YS5waWNrZXIiCiAgICAgICAgOnNob3ctdGltZT0icHJvcGRhdGEuc2hvd1RpbWUiCiAgICAgICAgOmFsbG93LWNsZWFyPSJwcm9wZGF0YS5hbGxvd0NsZWFyIgogICAgICAgIDpib3JkZXJlZD0icHJvcGRhdGEuYm9yZGVyZWQiCiAgICAgICAgOnNpemU9InByb3BkYXRhLnNpemUiCiAgICAgICAgOmRpc2FibGVkPSJwcm9wZGF0YS5kaXNhYmxlZCIKICAgICAgLz4KICAgIDwvc2VjdGlvbj4KICAgIDxzZWN0aW9uIGNsYXNzPSJjb2RlLWJveC1tZXRhIG1hcmtkb3duIj4KICAgICAgPHNlY3Rpb24gY2xhc3M9ImNvZGUtYm94LXRpdGxlIj57eyBkZW1vdGl0bGUgfX08L3NlY3Rpb24+CiAgICAgIDxzZWN0aW9uIGNsYXNzPSJjb2RlLWJveC1kZXNjcmlwdGlvbiI+CiAgICAgICAgPGEtZm9ybSA6bGFiZWwtY29sPSJsYWJlbENvbCI+CiAgICAgICAgICA8YS1yb3c+CiAgICAgICAgICAgIDxhLWNvbCBzcGFuPSI4Ij4KICAgICAgICAgICAgICA8YS1mb3JtLWl0ZW0gbGFiZWw9ImlzUmFuZ2UiPgogICAgICAgICAgICAgICAgPGEtc3dpdGNoCiAgICAgICAgICAgICAgICAgIHYtbW9kZWw6Y2hlY2tlZD0icHJvcGRhdGEucmFuZ2UiCiAgICAgICAgICAgICAgICAgIGNoZWNrZWQtY2hpbGRyZW49IuW8gCIKICAgICAgICAgICAgICAgICAgdW4tY2hlY2tlZC1jaGlsZHJlbj0i5YWzIgogICAgICAgICAgICAgICAgLz4KICAgICAgICAgICAgICA8L2EtZm9ybS1pdGVtPgogICAgICAgICAgICA8L2EtY29sPgogICAgICAgICAgICA8YS1jb2wgc3Bhbj0iOCIgdi1pZj0icHJvcGRhdGEucmFuZ2UiPgogICAgICAgICAgICAgIDxhLWZvcm0taXRlbSBsYWJlbD0ic2hvd3RpbWUiPgogICAgICAgICAgICAgICAgPGEtc3dpdGNoCiAgICAgICAgICAgICAgICAgIHYtbW9kZWw6Y2hlY2tlZD0icHJvcGRhdGEuc2hvd1RpbWUiCiAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD0icHJvcGRhdGEucGlja2VyICE9PSAnZGF0ZSciCiAgICAgICAgICAgICAgICAgIGNoZWNrZWQtY2hpbGRyZW49IuW8gCIKICAgICAgICAgICAgICAgICAgdW4tY2hlY2tlZC1jaGlsZHJlbj0i5YWzIgogICAgICAgICAgICAgICAgLz4KICAgICAgICAgICAgICA8L2EtZm9ybS1pdGVtPgogICAgICAgICAgICA8L2EtY29sPgogICAgICAgICAgPC9hLXJvdz4KICAgICAgICAgIDxhLXJvdz4KICAgICAgICAgICAgPGEtY29sIHNwYW49IjE0Ij4KICAgICAgICAgICAgICA8YS1mb3JtLWl0ZW0gbGFiZWw9InR5cGUiPgogICAgICAgICAgICAgICAgPGEtcmFkaW8tZ3JvdXAgdi1tb2RlbDp2YWx1ZT0icHJvcGRhdGEucGlja2VyIj4KICAgICAgICAgICAgICAgICAgPGEtcmFkaW8KICAgICAgICAgICAgICAgICAgICB2LWZvcj0iaXRlbSBpbiBbJ2RhdGUnLCAnd2VlaycsICdtb250aCcsICdxdWFydGVyJywgJ3llYXInXSIKICAgICAgICAgICAgICAgICAgICA6a2V5PSJpdGVtIgogICAgICAgICAgICAgICAgICAgIDp2YWx1ZT0iaXRlbSIKICAgICAgICAgICAgICAgICAgICBuYW1lPSJvcHRpb25UeXBlIgogICAgICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICAgICAge3sgaXRlbSB9fQogICAgICAgICAgICAgICAgICA8L2EtcmFkaW8+CiAgICAgICAgICAgICAgICA8L2EtcmFkaW8tZ3JvdXA+CiAgICAgICAgICAgICAgPC9hLWZvcm0taXRlbT4KICAgICAgICAgICAgPC9hLWNvbD4KICAgICAgICAgIDwvYS1yb3c+CgogICAgICAgICAgPGEtZm9ybS1pdGVtIGxhYmVsPSJzaXplIj4KICAgICAgICAgICAgPGEtcmFkaW8tZ3JvdXAgdi1tb2RlbDp2YWx1ZT0icHJvcGRhdGEuc2l6ZSI+CiAgICAgICAgICAgICAgPGEtcmFkaW8KICAgICAgICAgICAgICAgIHYtZm9yPSJpdGVtIG9mIFsnbGFyZ2UnLCAnbWlkZGxlJywgJ3NtYWxsJ10iCiAgICAgICAgICAgICAgICA6a2V5PSJpdGVtIgogICAgICAgICAgICAgICAgOnZhbHVlPSJpdGVtIgogICAgICAgICAgICAgICAgbmFtZT0ib3B0aW9uVHlwZSIKICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICB7eyBpdGVtIH19CiAgICAgICAgICAgICAgPC9hLXJhZGlvPgogICAgICAgICAgICA8L2EtcmFkaW8tZ3JvdXA+CiAgICAgICAgICA8L2EtZm9ybS1pdGVtPgoKICAgICAgICAgIDxhLXJvdz4KICAgICAgICAgICAgPGEtY29sIHNwYW49IjgiPgogICAgICAgICAgICAgIDxhLWZvcm0taXRlbSBsYWJlbD0iYWxsb3dDbGVhciI+CiAgICAgICAgICAgICAgICA8YS1zd2l0Y2gKICAgICAgICAgICAgICAgICAgdi1tb2RlbDpjaGVja2VkPSJwcm9wZGF0YS5hbGxvd0NsZWFyIgogICAgICAgICAgICAgICAgICBjaGVja2VkLWNoaWxkcmVuPSLlvIAiCiAgICAgICAgICAgICAgICAgIHVuLWNoZWNrZWQtY2hpbGRyZW49IuWFsyIKICAgICAgICAgICAgICAgIC8+CiAgICAgICAgICAgICAgPC9hLWZvcm0taXRlbT4KICAgICAgICAgICAgPC9hLWNvbD4KICAgICAgICAgICAgPGEtY29sIHNwYW49IjgiPgogICAgICAgICAgICAgIDxhLWZvcm0taXRlbSBsYWJlbD0iYm9yZGVyZWQiPgogICAgICAgICAgICAgICAgPGEtc3dpdGNoCiAgICAgICAgICAgICAgICAgIHYtbW9kZWw6Y2hlY2tlZD0icHJvcGRhdGEuYm9yZGVyZWQiCiAgICAgICAgICAgICAgICAgIGNoZWNrZWQtY2hpbGRyZW49IuW8gCIKICAgICAgICAgICAgICAgICAgdW4tY2hlY2tlZC1jaGlsZHJlbj0i5YWzIgogICAgICAgICAgICAgICAgLz4KICAgICAgICAgICAgICA8L2EtZm9ybS1pdGVtPgogICAgICAgICAgICA8L2EtY29sPgogICAgICAgICAgICA8YS1jb2wgc3Bhbj0iOCI+CiAgICAgICAgICAgICAgPGEtZm9ybS1pdGVtIGxhYmVsPSJkaXNhYmxlZCI+CiAgICAgICAgICAgICAgICA8YS1zd2l0Y2gKICAgICAgICAgICAgICAgICAgdi1tb2RlbDpjaGVja2VkPSJwcm9wZGF0YS5kaXNhYmxlZCIKICAgICAgICAgICAgICAgICAgY2hlY2tlZC1jaGlsZHJlbj0i5byAIgogICAgICAgICAgICAgICAgICB1bi1jaGVja2VkLWNoaWxkcmVuPSLlhbMiCiAgICAgICAgICAgICAgICAvPgogICAgICAgICAgICAgIDwvYS1mb3JtLWl0ZW0+CiAgICAgICAgICAgIDwvYS1jb2w+CiAgICAgICAgICA8L2Etcm93PgogICAgICAgIDwvYS1mb3JtPgogICAgICA8L3NlY3Rpb24+CiAgICA8L3NlY3Rpb24+CiAgPC9zZWN0aW9uPgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiwgd2F0Y2gsIG9uTW91bnRlZCB9IGZyb20gJ3Z1ZSc7CmltcG9ydCB0cnlkZW1vIGZyb20gJy4uLy4uL191dGlsL3RyeWRlbW8nOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIG1peGluczogW3RyeWRlbW9dLAogIHNldHVwKHByb3BzKSB7CiAgICAvLyAvLyDlhoXnva7lrZfmrrUKICAgIGNvbnN0IGRlbW9jb2RlID0gcmVmKCcnKTsKICAgIGNvbnN0IHZhbHVlID0gcmVmKCcnKTsKICAgIGNvbnN0IHByb3BkYXRhID0gcmVmKHsKICAgICAgcmFuZ2U6IGZhbHNlLAogICAgICBwaWNrZXI6ICdkYXRlJywKICAgICAgc2hvd1RpbWU6IGZhbHNlLAogICAgICBhbGxvd0NsZWFyOiB0cnVlLAogICAgICBib3JkZXJlZDogdHJ1ZSwKICAgICAgc2l6ZTogJ21pZGRsZScsCiAgICAgIC8vIGRlZmF1bHQt5pmu6YCaIGxhcmdlIHNtYWxsCiAgICAgIGRpc2FibGVkOiBmYWxzZSwKICAgIH0pOwogICAgY29uc3QgZGVmYXVsdFZhbCA9IHsKICAgICAgLi4ucHJvcGRhdGEudmFsdWUsCiAgICB9OwogICAgY29uc3QgZ2V0RXF1YWxWYWwgPSAodHlwZSwgbm90ZXF1YWwsIGVxdWFscmVzID0gJycpID0+IHsKICAgICAgcmV0dXJuIHByb3BkYXRhLnZhbHVlW3R5cGVdICE9PSBub3RlcXVhbCA/IGVxdWFscmVzIHx8ICcgJyArIChwcm9wZGF0YS52YWx1ZVt0eXBlXSA9PT0gZmFsc2UgPyAnOicgOiAnJykgKyB0eXBlLnJlcGxhY2UoLyhbQS1aXSkvZywgZnVuY3Rpb24gKG0pIHsKICAgICAgICByZXR1cm4gJy0nICsgbS50b0xvY2FsZUxvd2VyQ2FzZSgpOwogICAgICB9KSArIChwcm9wZGF0YS52YWx1ZVt0eXBlXSA9PT0gdHJ1ZSA/ICcnIDogYD0iJHtwcm9wZGF0YS52YWx1ZVt0eXBlXX0iYCkgOiAnJzsKICAgIH07CiAgICBjb25zdCByZW5kZXJDb2RlID0gcHJvcGRhdGEgPT4gewogICAgICBsZXQgcHJvcHN2YWwgPSAnJzsKICAgICAgbGV0IHNjcmlwdGNvZGUgPSAnJzsKICAgICAgZm9yIChsZXQga2V5IGluIHByb3BkYXRhKSB7CiAgICAgICAgaWYgKCFbJ3JhbmdlJ10uaW5jbHVkZXMoa2V5KSkgewogICAgICAgICAgcHJvcHN2YWwgKz0gZ2V0RXF1YWxWYWwoa2V5LCBkZWZhdWx0VmFsW2tleV0pOwogICAgICAgIH0KICAgICAgfQogICAgICBjb25zdCBsYWJlbCA9IHByb3BkYXRhLnJhbmdlID8gJ2EtcmFuZ2UtcGlja2VyJyA6ICdhLWRhdGUtcGlja2VyJzsKICAgICAgcmV0dXJuIGA8dGVtcGxhdGU+CiAgICAgICAgICA8JHtsYWJlbH0ke3Byb3BzdmFsfSR7cHJvcGRhdGFbJ3ByZWZpeHN1ZmZpeCddID09PSAnMScgPyBgPgogICAgICAgICAgICA8dGVtcGxhdGUgI3ByZWZpeD4KICAgICAgICAgICAgICA8dXNlci1vdXRsaW5lZCB0eXBlPSJ1c2VyIiAvPgogICAgICAgICAgICA8L3RlbXBsYXRlPgogICAgICAgICAgICA8dGVtcGxhdGUgI3N1ZmZpeD4KICAgICAgICAgICAgICA8YS10b29sdGlwIHRpdGxlPSJFeHRyYSBpbmZvcm1hdGlvbiI+PGluZm8tY2lyY2xlLW91dGxpbmVkIHN0eWxlPSJjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ1KSIgLz48L2EtdG9vbHRpcD4KICAgICAgICAgICAgPC90ZW1wbGF0ZT4KICAgICAgICAgIDwvJHtsYWJlbH0+YCA6ICcgLz4nfQogICAgICAgIDwvdGVtcGxhdGU+CiAgICAgICAgJHtzY3JpcHRjb2RlfWAucmVwbGFjZSgvIHs4fS9nLCAnJyk7CiAgICB9OwogICAgb25Nb3VudGVkKCgpID0+IHsKICAgICAgZGVtb2NvZGUudmFsdWUgPSByZW5kZXJDb2RlKHByb3BkYXRhLnZhbHVlKTsKICAgIH0pOwogICAgbGV0IGxhc3RJc1JhbmdlID0gcHJvcGRhdGEudmFsdWUucmFuZ2U7CiAgICB3YXRjaChwcm9wZGF0YSwgZGF0YSA9PiB7CiAgICAgIGlmIChsYXN0SXNSYW5nZSAhPT0gZGF0YS5yYW5nZSkgewogICAgICAgIHZhbHVlLnZhbHVlID0gJyc7CiAgICAgICAgcHJvcGRhdGEudmFsdWUuc2hvd1RpbWUgPSBmYWxzZTsKICAgICAgfQogICAgICBkYXRhLnBpY2tlciAhPT0gJ2RhdGUnICYmIChwcm9wZGF0YS52YWx1ZS5zaG93VGltZSA9IGZhbHNlKTsKICAgICAgbGFzdElzUmFuZ2UgPSBkYXRhLnJhbmdlOwogICAgICBkZW1vY29kZS52YWx1ZSA9IHJlbmRlckNvZGUoZGF0YSk7CiAgICB9LCB7CiAgICAgIGRlZXA6IHRydWUsCiAgICB9KTsKCiAgICAvLyDph43nva7mlrnms5Xlm7rlrprlrZfmrrUKICAgIGNvbnN0IHJlc2V0SXRlbSA9ICgpID0+IHsKICAgICAgcHJvcGRhdGEudmFsdWUgPSB7CiAgICAgICAgLi4uZGVmYXVsdFZhbCwKICAgICAgfTsKICAgIH07CiAgICByZXR1cm4gewogICAgICB2YWx1ZSwKICAgICAgZGVtb2NvZGUsCiAgICAgIHByb3BkYXRhLAogICAgICByZXNldEl0ZW0sCiAgICAgIGxhYmVsQ29sOiB7CiAgICAgICAgc3R5bGU6IHsKICAgICAgICAgIHdpZHRoOiAnODBweCcsCiAgICAgICAgfSwKICAgICAgfSwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0Pg==",isdemo:1}},{default:o(()=>[e(P,{jsfiddle:{demo:1,order:-1,title:{"zh-CN":"\u5728\u7EBF\u6F14\u793A","en-US":"Online Demo"},relativePath:"components/date-picker/demo/try.vue"},code:t.democode,onChangeDemo:t.changeDemo},{default:o(()=>[n("section",null,[n("section",L,[t.propdata.range?(h(),A(i,{key:1,value:t.value,"onUpdate:value":s[1]||(s[1]=m=>t.value=m),picker:t.propdata.picker,"show-time":t.propdata.showTime,"allow-clear":t.propdata.allowClear,bordered:t.propdata.bordered,size:t.propdata.size,disabled:t.propdata.disabled},null,8,["value","picker","show-time","allow-clear","bordered","size","disabled"])):(h(),A(u,{key:0,value:t.value,"onUpdate:value":s[0]||(s[0]=m=>t.value=m),picker:t.propdata.picker,"allow-clear":t.propdata.allowClear,bordered:t.propdata.bordered,size:t.propdata.size,disabled:t.propdata.disabled},null,8,["value","picker","allow-clear","bordered","size","disabled"]))]),n("section",E,[n("section",q,Y(t.demotitle),1),n("section",Q,[e(w,{"label-col":t.labelCol},{default:o(()=>[e(f,null,{default:o(()=>[e(p,{span:"8"},{default:o(()=>[e(l,{label:"isRange"},{default:o(()=>[e(d,{checked:t.propdata.range,"onUpdate:checked":s[2]||(s[2]=m=>t.propdata.range=m),"checked-children":"\u5F00","un-checked-children":"\u5173"},null,8,["checked"])]),_:1})]),_:1}),t.propdata.range?(h(),A(p,{key:0,span:"8"},{default:o(()=>[e(l,{label:"showtime"},{default:o(()=>[e(d,{checked:t.propdata.showTime,"onUpdate:checked":s[3]||(s[3]=m=>t.propdata.showTime=m),disabled:t.propdata.picker!=="date","checked-children":"\u5F00","un-checked-children":"\u5173"},null,8,["checked","disabled"])]),_:1})]),_:1})):K("",!0)]),_:1}),e(f,null,{default:o(()=>[e(p,{span:"14"},{default:o(()=>[e(l,{label:"type"},{default:o(()=>[e(W,{value:t.propdata.picker,"onUpdate:value":s[4]||(s[4]=m=>t.propdata.picker=m)},{default:o(()=>[(h(),G(R,null,S(["date","week","month","quarter","year"],m=>e(Z,{key:m,value:m,name:"optionType"},{default:o(()=>[a(Y(m),1)]),_:2},1032,["value"])),64))]),_:1},8,["value"])]),_:1})]),_:1})]),_:1}),e(l,{label:"size"},{default:o(()=>[e(W,{value:t.propdata.size,"onUpdate:value":s[5]||(s[5]=m=>t.propdata.size=m)},{default:o(()=>[(h(),G(R,null,S(["large","middle","small"],m=>e(Z,{key:m,value:m,name:"optionType"},{default:o(()=>[a(Y(m),1)]),_:2},1032,["value"])),64))]),_:1},8,["value"])]),_:1}),e(f,null,{default:o(()=>[e(p,{span:"8"},{default:o(()=>[e(l,{label:"allowClear"},{default:o(()=>[e(d,{checked:t.propdata.allowClear,"onUpdate:checked":s[6]||(s[6]=m=>t.propdata.allowClear=m),"checked-children":"\u5F00","un-checked-children":"\u5173"},null,8,["checked"])]),_:1})]),_:1}),e(p,{span:"8"},{default:o(()=>[e(l,{label:"bordered"},{default:o(()=>[e(d,{checked:t.propdata.bordered,"onUpdate:checked":s[7]||(s[7]=m=>t.propdata.bordered=m),"checked-children":"\u5F00","un-checked-children":"\u5173"},null,8,["checked"])]),_:1})]),_:1}),e(p,{span:"8"},{default:o(()=>[e(l,{label:"disabled"},{default:o(()=>[e(d,{checked:t.propdata.disabled,"onUpdate:checked":s[8]||(s[8]=m=>t.propdata.disabled=m),"checked-children":"\u5F00","un-checked-children":"\u5173"},null,8,["checked"])]),_:1})]),_:1})]),_:1})]),_:1},8,["label-col"])])])])]),_:1},8,["jsfiddle","code","onChangeDemo"])]),_:1},8,["jsfiddle"])}const _=v(T,[["render",M]]),O=y({setup(){return{value1:k(),value2:k(),value3:k(),value4:k(),value5:k()}}}),$=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),a(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("vertical"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("12"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value1"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value2"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"picker"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("week"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value3"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"picker"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("month"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value4"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"picker"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("quarter"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value5"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"picker"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("year"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(" type "),n("span",{class:"token punctuation"},"{"),a(" Dayjs "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'dayjs'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"value1"),n("span",{class:"token operator"},":"),a(" ref"),n("span",{class:"token operator"},"<"),a("Dayjs"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value2"),n("span",{class:"token operator"},":"),a(" ref"),n("span",{class:"token operator"},"<"),a("Dayjs"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value3"),n("span",{class:"token operator"},":"),a(" ref"),n("span",{class:"token operator"},"<"),a("Dayjs"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value4"),n("span",{class:"token operator"},":"),a(" ref"),n("span",{class:"token operator"},"<"),a("Dayjs"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value5"),n("span",{class:"token operator"},":"),a(" ref"),n("span",{class:"token operator"},"<"),a("Dayjs"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),nn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),a(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("vertical"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("12"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value1"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value2"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"picker"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("week"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value3"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"picker"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("month"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value4"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"picker"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("quarter"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value5"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"picker"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("year"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"value1"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value2"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value3"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value4"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value5"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function an(t,s,r,g,I,C){const u=c("a-date-picker"),i=c("a-space"),d=c("demo-box");return h(),A(d,{jsfiddle:{us:"Basic use case. Users can select or input a date in panel.",cn:"\u6700\u7B80\u5355\u7684\u7528\u6CD5\uFF0C\u5728\u6D6E\u5C42\u4E2D\u53EF\u4EE5\u9009\u62E9\u6216\u8005\u8F93\u5165\u65E5\u671F\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\uFF0C\u5728\u6D6E\u5C42\u4E2D\u53EF\u4EE5\u9009\u62E9\u6216\u8005\u8F93\u5165\u65E5\u671F\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Basic use case. Users can select or input a date in panel.</p>
`,order:0,title:{"zh-CN":"\u57FA\u672C\u7528\u6CD5","en-US":"Basic Usage"},relativePath:"components/date-picker/demo/basic.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiIDpzaXplPSIxMiI+CiAgICA8YS1kYXRlLXBpY2tlciB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTEiIC8+CiAgICA8YS1kYXRlLXBpY2tlciB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTIiIHBpY2tlcj0id2VlayIgLz4KICAgIDxhLWRhdGUtcGlja2VyIHYtbW9kZWw6dmFsdWU9InZhbHVlMyIgcGlja2VyPSJtb250aCIgLz4KICAgIDxhLWRhdGUtcGlja2VyIHYtbW9kZWw6dmFsdWU9InZhbHVlNCIgcGlja2VyPSJxdWFydGVyIiAvPgogICAgPGEtZGF0ZS1waWNrZXIgdi1tb2RlbDp2YWx1ZT0idmFsdWU1IiBwaWNrZXI9InllYXIiIC8+CiAgPC9hLXNwYWNlPgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwppbXBvcnQgdHlwZSB7IERheWpzIH0gZnJvbSAnZGF5anMnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgcmV0dXJuIHsKICAgICAgdmFsdWUxOiByZWY8RGF5anM+KCksCiAgICAgIHZhbHVlMjogcmVmPERheWpzPigpLAogICAgICB2YWx1ZTM6IHJlZjxEYXlqcz4oKSwKICAgICAgdmFsdWU0OiByZWY8RGF5anM+KCksCiAgICAgIHZhbHVlNTogcmVmPERheWpzPigpLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiIDpzaXplPSIxMiI+CiAgICA8YS1kYXRlLXBpY2tlciB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTEiIC8+CiAgICA8YS1kYXRlLXBpY2tlciB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTIiIHBpY2tlcj0id2VlayIgLz4KICAgIDxhLWRhdGUtcGlja2VyIHYtbW9kZWw6dmFsdWU9InZhbHVlMyIgcGlja2VyPSJtb250aCIgLz4KICAgIDxhLWRhdGUtcGlja2VyIHYtbW9kZWw6dmFsdWU9InZhbHVlNCIgcGlja2VyPSJxdWFydGVyIiAvPgogICAgPGEtZGF0ZS1waWNrZXIgdi1tb2RlbDp2YWx1ZT0idmFsdWU1IiBwaWNrZXI9InllYXIiIC8+CiAgPC9hLXNwYWNlPgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICByZXR1cm4gewogICAgICB2YWx1ZTE6IHJlZigpLAogICAgICB2YWx1ZTI6IHJlZigpLAogICAgICB2YWx1ZTM6IHJlZigpLAogICAgICB2YWx1ZTQ6IHJlZigpLAogICAgICB2YWx1ZTU6IHJlZigpLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+",isdemo:!1}},{default:o(()=>[e(i,{direction:"vertical",size:12},{default:o(()=>[e(u,{value:t.value1,"onUpdate:value":s[0]||(s[0]=l=>t.value1=l)},null,8,["value"]),e(u,{value:t.value2,"onUpdate:value":s[1]||(s[1]=l=>t.value2=l),picker:"week"},null,8,["value"]),e(u,{value:t.value3,"onUpdate:value":s[2]||(s[2]=l=>t.value3=l),picker:"month"},null,8,["value"]),e(u,{value:t.value4,"onUpdate:value":s[3]||(s[3]=l=>t.value4=l),picker:"quarter"},null,8,["value"]),e(u,{value:t.value5,"onUpdate:value":s[4]||(s[4]=l=>t.value5=l),picker:"year"},null,8,["value"])]),_:1})]),htmlCode:o(()=>[$]),jsVersionHtml:o(()=>[nn]),_:1},8,["jsfiddle"])}const tn=v(O,[["render",an]]),sn=y({setup(){const t=s=>{const r={};return s.date()===1&&(r.border="1px solid #1890ff",r.borderRadius="50%"),r};return{value1:k(),value2:k(),value3:k(),getCurrentStyle:t}}}),en=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),a(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("vertical"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("12"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#dateRender"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{ current }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ant-picker-cell-inner"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("getCurrentStyle(current)"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          {{ current.date() }}
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-date-picker")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-range-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#dateRender"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{ current }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ant-picker-cell-inner"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("getCurrentStyle(current)"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          {{ current.date() }}
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-range-picker")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(" type "),n("span",{class:"token punctuation"},"{"),a(" Dayjs "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'dayjs'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(" type "),n("span",{class:"token punctuation"},"{"),a(" CSSProperties "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"getCurrentStyle"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"current"),n("span",{class:"token operator"},":"),a(" Dayjs")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token literal-property property"},"style"),n("span",{class:"token operator"},":"),a(" CSSProperties "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

      `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("current"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        style`),n("span",{class:"token punctuation"},"."),a("border "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token string"},"'1px solid #1890ff'"),n("span",{class:"token punctuation"},";"),a(`
        style`),n("span",{class:"token punctuation"},"."),a("borderRadius "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token string"},"'50%'"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`

      `),n("span",{class:"token keyword"},"return"),a(" style"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"value1"),n("span",{class:"token operator"},":"),a(" ref"),n("span",{class:"token operator"},"<"),a("Dayjs"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value2"),n("span",{class:"token operator"},":"),a(" ref"),n("span",{class:"token operator"},"<"),n("span",{class:"token punctuation"},"["),a("Dayjs"),n("span",{class:"token punctuation"},","),a(" Dayjs"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value3"),n("span",{class:"token operator"},":"),a(" ref"),n("span",{class:"token operator"},"<"),a("Dayjs"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      getCurrentStyle`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),on=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),a(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("vertical"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("12"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#dateRender"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{ current }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ant-picker-cell-inner"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("getCurrentStyle(current)"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          {{ current.date() }}
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-date-picker")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-range-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#dateRender"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{ current }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ant-picker-cell-inner"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("getCurrentStyle(current)"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          {{ current.date() }}
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-range-picker")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"getCurrentStyle"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token parameter"},"current"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"const"),a(" style "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("current"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        style`),n("span",{class:"token punctuation"},"."),a("border "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token string"},"'1px solid #1890ff'"),n("span",{class:"token punctuation"},";"),a(`
        style`),n("span",{class:"token punctuation"},"."),a("borderRadius "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token string"},"'50%'"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" style"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"value1"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value2"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value3"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      getCurrentStyle`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function cn(t,s,r,g,I,C){const u=c("a-date-picker"),i=c("a-range-picker"),d=c("a-space"),l=c("demo-box");return h(),A(l,{jsfiddle:{us:"We can customize the rendering of date cells in the calendar by providing a `dateRender` function to `DatePicker`.",cn:"\u4F7F\u7528 `dateRender` \u53EF\u4EE5\u81EA\u5B9A\u4E49\u65E5\u671F\u5355\u5143\u683C\u7684\u5185\u5BB9\u548C\u6837\u5F0F\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u4F7F\u7528 <code>dateRender</code> \u53EF\u4EE5\u81EA\u5B9A\u4E49\u65E5\u671F\u5355\u5143\u683C\u7684\u5185\u5BB9\u548C\u6837\u5F0F\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>We can customize the rendering of date cells in the calendar by providing a <code>dateRender</code> function to <code>DatePicker</code>.</p>
`,order:9,title:{"zh-CN":"\u5B9A\u5236\u65E5\u671F\u5355\u5143\u683C","en-US":"Customized Date Rendering"},relativePath:"components/date-picker/demo/date-render.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiIDpzaXplPSIxMiI+CiAgICA8YS1kYXRlLXBpY2tlciB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTEiPgogICAgICA8dGVtcGxhdGUgI2RhdGVSZW5kZXI9InsgY3VycmVudCB9Ij4KICAgICAgICA8ZGl2IGNsYXNzPSJhbnQtcGlja2VyLWNlbGwtaW5uZXIiIDpzdHlsZT0iZ2V0Q3VycmVudFN0eWxlKGN1cnJlbnQpIj4KICAgICAgICAgIHt7IGN1cnJlbnQuZGF0ZSgpIH19CiAgICAgICAgPC9kaXY+CiAgICAgIDwvdGVtcGxhdGU+CiAgICA8L2EtZGF0ZS1waWNrZXI+CiAgICA8YS1yYW5nZS1waWNrZXIgdi1tb2RlbDp2YWx1ZT0idmFsdWUyIj4KICAgICAgPHRlbXBsYXRlICNkYXRlUmVuZGVyPSJ7IGN1cnJlbnQgfSI+CiAgICAgICAgPGRpdiBjbGFzcz0iYW50LXBpY2tlci1jZWxsLWlubmVyIiA6c3R5bGU9ImdldEN1cnJlbnRTdHlsZShjdXJyZW50KSI+CiAgICAgICAgICB7eyBjdXJyZW50LmRhdGUoKSB9fQogICAgICAgIDwvZGl2PgogICAgICA8L3RlbXBsYXRlPgogICAgPC9hLXJhbmdlLXBpY2tlcj4KICA8L2Etc3BhY2U+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgdHlwZSB7IERheWpzIH0gZnJvbSAnZGF5anMnOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmltcG9ydCB0eXBlIHsgQ1NTUHJvcGVydGllcyB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBnZXRDdXJyZW50U3R5bGUgPSAoY3VycmVudDogRGF5anMpID0+IHsKICAgICAgY29uc3Qgc3R5bGU6IENTU1Byb3BlcnRpZXMgPSB7fTsKCiAgICAgIGlmIChjdXJyZW50LmRhdGUoKSA9PT0gMSkgewogICAgICAgIHN0eWxlLmJvcmRlciA9ICcxcHggc29saWQgIzE4OTBmZic7CiAgICAgICAgc3R5bGUuYm9yZGVyUmFkaXVzID0gJzUwJSc7CiAgICAgIH0KCiAgICAgIHJldHVybiBzdHlsZTsKICAgIH07CiAgICByZXR1cm4gewogICAgICB2YWx1ZTE6IHJlZjxEYXlqcz4oKSwKICAgICAgdmFsdWUyOiByZWY8W0RheWpzLCBEYXlqc10+KCksCiAgICAgIHZhbHVlMzogcmVmPERheWpzPigpLAogICAgICBnZXRDdXJyZW50U3R5bGUsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiIDpzaXplPSIxMiI+CiAgICA8YS1kYXRlLXBpY2tlciB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTEiPgogICAgICA8dGVtcGxhdGUgI2RhdGVSZW5kZXI9InsgY3VycmVudCB9Ij4KICAgICAgICA8ZGl2IGNsYXNzPSJhbnQtcGlja2VyLWNlbGwtaW5uZXIiIDpzdHlsZT0iZ2V0Q3VycmVudFN0eWxlKGN1cnJlbnQpIj4KICAgICAgICAgIHt7IGN1cnJlbnQuZGF0ZSgpIH19CiAgICAgICAgPC9kaXY+CiAgICAgIDwvdGVtcGxhdGU+CiAgICA8L2EtZGF0ZS1waWNrZXI+CiAgICA8YS1yYW5nZS1waWNrZXIgdi1tb2RlbDp2YWx1ZT0idmFsdWUyIj4KICAgICAgPHRlbXBsYXRlICNkYXRlUmVuZGVyPSJ7IGN1cnJlbnQgfSI+CiAgICAgICAgPGRpdiBjbGFzcz0iYW50LXBpY2tlci1jZWxsLWlubmVyIiA6c3R5bGU9ImdldEN1cnJlbnRTdHlsZShjdXJyZW50KSI+CiAgICAgICAgICB7eyBjdXJyZW50LmRhdGUoKSB9fQogICAgICAgIDwvZGl2PgogICAgICA8L3RlbXBsYXRlPgogICAgPC9hLXJhbmdlLXBpY2tlcj4KICA8L2Etc3BhY2U+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IGdldEN1cnJlbnRTdHlsZSA9IGN1cnJlbnQgPT4gewogICAgICBjb25zdCBzdHlsZSA9IHt9OwogICAgICBpZiAoY3VycmVudC5kYXRlKCkgPT09IDEpIHsKICAgICAgICBzdHlsZS5ib3JkZXIgPSAnMXB4IHNvbGlkICMxODkwZmYnOwogICAgICAgIHN0eWxlLmJvcmRlclJhZGl1cyA9ICc1MCUnOwogICAgICB9CiAgICAgIHJldHVybiBzdHlsZTsKICAgIH07CiAgICByZXR1cm4gewogICAgICB2YWx1ZTE6IHJlZigpLAogICAgICB2YWx1ZTI6IHJlZigpLAogICAgICB2YWx1ZTM6IHJlZigpLAogICAgICBnZXRDdXJyZW50U3R5bGUsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4=",isdemo:!1}},{default:o(()=>[e(d,{direction:"vertical",size:12},{default:o(()=>[e(u,{value:t.value1,"onUpdate:value":s[0]||(s[0]=p=>t.value1=p)},{dateRender:o(({current:p})=>[n("div",{class:"ant-picker-cell-inner",style:V(t.getCurrentStyle(p))},Y(p.date()),5)]),_:1},8,["value"]),e(i,{value:t.value2,"onUpdate:value":s[1]||(s[1]=p=>t.value2=p)},{dateRender:o(({current:p})=>[n("div",{class:"ant-picker-cell-inner",style:V(t.getCurrentStyle(p))},Y(p.date()),5)]),_:1},8,["value"])]),_:1})]),htmlCode:o(()=>[en]),jsVersionHtml:o(()=>[on]),_:1},8,["jsfiddle"])}const pn=v(sn,[["render",cn]]),ln=y({setup(){const t=(I,C)=>{const u=[];for(let i=I;i<C;i++)u.push(i);return u},s=I=>I&&I<b().endOf("day"),r=()=>({disabledHours:()=>t(0,24).splice(4,20),disabledMinutes:()=>t(30,60),disabledSeconds:()=>[55,56]}),g=(I,C)=>C==="start"?{disabledHours:()=>t(0,60).splice(4,20),disabledMinutes:()=>t(30,60),disabledSeconds:()=>[55,56]}:{disabledHours:()=>t(0,60).splice(20,4),disabledMinutes:()=>t(0,31),disabledSeconds:()=>[55,56]};return{dayjs:b,value1:k(),value2:k(),value3:k(),value4:k(),disabledDate:s,disabledDateTime:r,disabledRangeTime:g}}}),un=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),a(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("vertical"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value1"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"format"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("YYYY-MM-DD HH:mm:ss"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":disabled-date"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("disabledDate"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":disabled-time"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("disabledDateTime"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":show-time"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{ defaultValue: dayjs('00:00:00', 'HH:mm:ss') }"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value2"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":disabled-date"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("disabledDate"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"picker"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("month"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-range-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value3"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":disabled-date"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("disabledDate"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-range-picker")]),a(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value4"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 400px")]),n("span",{class:"token punctuation"},'"')])]),a(`
      `),n("span",{class:"token attr-name"},":disabled-date"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("disabledDate"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":disabled-time"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("disabledRangeTime"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":show-time"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`{
        hideDisabledOptions: true,
        defaultValue: [dayjs('00:00:00', 'HH:mm:ss'), dayjs('11:59:59', 'HH:mm:ss')],
      }`),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"format"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("YYYY-MM-DD HH:mm:ss"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(" dayjs"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(" Dayjs "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'dayjs'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"range"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"start"),n("span",{class:"token operator"},":"),a(" number"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"end"),n("span",{class:"token operator"},":"),a(" number")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"const"),a(" result "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`

      `),n("span",{class:"token keyword"},"for"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),a(" i "),n("span",{class:"token operator"},"="),a(" start"),n("span",{class:"token punctuation"},";"),a(" i "),n("span",{class:"token operator"},"<"),a(" end"),n("span",{class:"token punctuation"},";"),a(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        result`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),a("i"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`

      `),n("span",{class:"token keyword"},"return"),a(" result"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"disabledDate"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"current"),n("span",{class:"token operator"},":"),a(" Dayjs")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// Can not select days before today and today"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" current "),n("span",{class:"token operator"},"&&"),a(" current "),n("span",{class:"token operator"},"<"),a(),n("span",{class:"token function"},"dayjs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"endOf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'day'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"disabledDateTime"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token function-variable function"},"disabledHours"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token function"},"range"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"24"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"splice"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token function-variable function"},"disabledMinutes"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token function"},"range"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"30"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"60"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token function-variable function"},"disabledSeconds"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"55"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"56"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(" disabledRangeTime "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),a("_"),n("span",{class:"token operator"},":"),a(" Dayjs"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'start'"),a(),n("span",{class:"token operator"},"|"),a(),n("span",{class:"token string"},"'end'"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("type "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token string"},"'start'"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token function-variable function"},"disabledHours"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token function"},"range"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"60"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"splice"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token function-variable function"},"disabledMinutes"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token function"},"range"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"30"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"60"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token function-variable function"},"disabledSeconds"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"55"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"56"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
      `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token function-variable function"},"disabledHours"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token function"},"range"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"60"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"splice"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token function-variable function"},"disabledMinutes"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token function"},"range"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"31"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token function-variable function"},"disabledSeconds"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"55"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"56"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      dayjs`),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value1"),n("span",{class:"token operator"},":"),a(" ref"),n("span",{class:"token operator"},"<"),a("Dayjs"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value2"),n("span",{class:"token operator"},":"),a(" ref"),n("span",{class:"token operator"},"<"),a("Dayjs"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value3"),n("span",{class:"token operator"},":"),a(" ref"),n("span",{class:"token operator"},"<"),n("span",{class:"token punctuation"},"["),a("Dayjs"),n("span",{class:"token punctuation"},","),a(" Dayjs"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value4"),n("span",{class:"token operator"},":"),a(" ref"),n("span",{class:"token operator"},"<"),n("span",{class:"token punctuation"},"["),a("Dayjs"),n("span",{class:"token punctuation"},","),a(" Dayjs"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      disabledDate`),n("span",{class:"token punctuation"},","),a(`
      disabledDateTime`),n("span",{class:"token punctuation"},","),a(`
      disabledRangeTime`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),kn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),a(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("vertical"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value1"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"format"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("YYYY-MM-DD HH:mm:ss"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":disabled-date"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("disabledDate"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":disabled-time"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("disabledDateTime"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":show-time"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{ defaultValue: dayjs('00:00:00', 'HH:mm:ss') }"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value2"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":disabled-date"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("disabledDate"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"picker"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("month"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-range-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value3"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":disabled-date"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("disabledDate"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-range-picker")]),a(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value4"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 400px")]),n("span",{class:"token punctuation"},'"')])]),a(`
      `),n("span",{class:"token attr-name"},":disabled-date"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("disabledDate"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":disabled-time"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("disabledRangeTime"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":show-time"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`{
        hideDisabledOptions: true,
        defaultValue: [dayjs('00:00:00', 'HH:mm:ss'), dayjs('11:59:59', 'HH:mm:ss')],
      }`),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"format"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("YYYY-MM-DD HH:mm:ss"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(" dayjs "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'dayjs'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"range"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("start"),n("span",{class:"token punctuation"},","),a(" end")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"const"),a(" result "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token keyword"},"for"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),a(" i "),n("span",{class:"token operator"},"="),a(" start"),n("span",{class:"token punctuation"},";"),a(" i "),n("span",{class:"token operator"},"<"),a(" end"),n("span",{class:"token punctuation"},";"),a(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        result`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),a("i"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" result"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"disabledDate"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token parameter"},"current"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token comment"},"// Can not select days before today and today"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" current "),n("span",{class:"token operator"},"&&"),a(" current "),n("span",{class:"token operator"},"<"),a(),n("span",{class:"token function"},"dayjs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"endOf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'day'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"disabledDateTime"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token function-variable function"},"disabledHours"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token function"},"range"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"24"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"splice"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token function-variable function"},"disabledMinutes"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token function"},"range"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"30"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"60"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token function-variable function"},"disabledSeconds"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"55"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"56"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"disabledRangeTime"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("_"),n("span",{class:"token punctuation"},","),a(" type")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("type "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token string"},"'start'"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token function-variable function"},"disabledHours"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token function"},"range"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"60"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"splice"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token function-variable function"},"disabledMinutes"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token function"},"range"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"30"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"60"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token function-variable function"},"disabledSeconds"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"55"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"56"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
      `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token function-variable function"},"disabledHours"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token function"},"range"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"60"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"splice"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token function-variable function"},"disabledMinutes"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token function"},"range"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"31"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token function-variable function"},"disabledSeconds"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"55"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"56"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      dayjs`),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value1"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value2"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value3"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value4"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      disabledDate`),n("span",{class:"token punctuation"},","),a(`
      disabledDateTime`),n("span",{class:"token punctuation"},","),a(`
      disabledRangeTime`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function rn(t,s,r,g,I,C){const u=c("a-date-picker"),i=c("a-range-picker"),d=c("a-space"),l=c("demo-box");return h(),A(l,{jsfiddle:{us:"Disabled part of dates and time by `disabledDate` and `disabledTime` respectively, and `disabledTime` only works with `showTime`.",cn:"\u53EF\u7528 `disabledDate` \u548C `disabledTime` \u5206\u522B\u7981\u6B62\u9009\u62E9\u90E8\u5206\u65E5\u671F\u548C\u65F6\u95F4\uFF0C\u5176\u4E2D `disabledTime` \u9700\u8981\u548C `showTime` \u4E00\u8D77\u4F7F\u7528\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u53EF\u7528 <code>disabledDate</code> \u548C <code>disabledTime</code> \u5206\u522B\u7981\u6B62\u9009\u62E9\u90E8\u5206\u65E5\u671F\u548C\u65F6\u95F4\uFF0C\u5176\u4E2D <code>disabledTime</code> \u9700\u8981\u548C <code>showTime</code> \u4E00\u8D77\u4F7F\u7528\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Disabled part of dates and time by <code>disabledDate</code> and <code>disabledTime</code> respectively, and <code>disabledTime</code> only works with <code>showTime</code>.</p>
`,order:4,title:{"zh-CN":"\u4E0D\u53EF\u9009\u62E9\u65E5\u671F\u548C\u65F6\u95F4","en-US":"Disabled Date & Time"},relativePath:"components/date-picker/demo/disabled-date.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiPgogICAgPGEtZGF0ZS1waWNrZXIKICAgICAgdi1tb2RlbDp2YWx1ZT0idmFsdWUxIgogICAgICBmb3JtYXQ9IllZWVktTU0tREQgSEg6bW06c3MiCiAgICAgIDpkaXNhYmxlZC1kYXRlPSJkaXNhYmxlZERhdGUiCiAgICAgIDpkaXNhYmxlZC10aW1lPSJkaXNhYmxlZERhdGVUaW1lIgogICAgICA6c2hvdy10aW1lPSJ7IGRlZmF1bHRWYWx1ZTogZGF5anMoJzAwOjAwOjAwJywgJ0hIOm1tOnNzJykgfSIKICAgIC8+CiAgICA8YS1kYXRlLXBpY2tlciB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTIiIDpkaXNhYmxlZC1kYXRlPSJkaXNhYmxlZERhdGUiIHBpY2tlcj0ibW9udGgiIC8+CiAgICA8YS1yYW5nZS1waWNrZXIgdi1tb2RlbDp2YWx1ZT0idmFsdWUzIiA6ZGlzYWJsZWQtZGF0ZT0iZGlzYWJsZWREYXRlIiAvPgogICAgPGEtcmFuZ2UtcGlja2VyCiAgICAgIHYtbW9kZWw6dmFsdWU9InZhbHVlNCIKICAgICAgc3R5bGU9IndpZHRoOiA0MDBweCIKICAgICAgOmRpc2FibGVkLWRhdGU9ImRpc2FibGVkRGF0ZSIKICAgICAgOmRpc2FibGVkLXRpbWU9ImRpc2FibGVkUmFuZ2VUaW1lIgogICAgICA6c2hvdy10aW1lPSJ7CiAgICAgICAgaGlkZURpc2FibGVkT3B0aW9uczogdHJ1ZSwKICAgICAgICBkZWZhdWx0VmFsdWU6IFtkYXlqcygnMDA6MDA6MDAnLCAnSEg6bW06c3MnKSwgZGF5anMoJzExOjU5OjU5JywgJ0hIOm1tOnNzJyldLAogICAgICB9IgogICAgICBmb3JtYXQ9IllZWVktTU0tREQgSEg6bW06c3MiCiAgICAvPgogIDwvYS1zcGFjZT4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCBkYXlqcywgeyBEYXlqcyB9IGZyb20gJ2RheWpzJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgcmFuZ2UgPSAoc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpID0+IHsKICAgICAgY29uc3QgcmVzdWx0ID0gW107CgogICAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykgewogICAgICAgIHJlc3VsdC5wdXNoKGkpOwogICAgICB9CgogICAgICByZXR1cm4gcmVzdWx0OwogICAgfTsKCiAgICBjb25zdCBkaXNhYmxlZERhdGUgPSAoY3VycmVudDogRGF5anMpID0+IHsKICAgICAgLy8gQ2FuIG5vdCBzZWxlY3QgZGF5cyBiZWZvcmUgdG9kYXkgYW5kIHRvZGF5CiAgICAgIHJldHVybiBjdXJyZW50ICYmIGN1cnJlbnQgPCBkYXlqcygpLmVuZE9mKCdkYXknKTsKICAgIH07CgogICAgY29uc3QgZGlzYWJsZWREYXRlVGltZSA9ICgpID0+IHsKICAgICAgcmV0dXJuIHsKICAgICAgICBkaXNhYmxlZEhvdXJzOiAoKSA9PiByYW5nZSgwLCAyNCkuc3BsaWNlKDQsIDIwKSwKICAgICAgICBkaXNhYmxlZE1pbnV0ZXM6ICgpID0+IHJhbmdlKDMwLCA2MCksCiAgICAgICAgZGlzYWJsZWRTZWNvbmRzOiAoKSA9PiBbNTUsIDU2XSwKICAgICAgfTsKICAgIH07CgogICAgY29uc3QgZGlzYWJsZWRSYW5nZVRpbWUgPSAoXzogRGF5anMsIHR5cGU6ICdzdGFydCcgfCAnZW5kJykgPT4gewogICAgICBpZiAodHlwZSA9PT0gJ3N0YXJ0JykgewogICAgICAgIHJldHVybiB7CiAgICAgICAgICBkaXNhYmxlZEhvdXJzOiAoKSA9PiByYW5nZSgwLCA2MCkuc3BsaWNlKDQsIDIwKSwKICAgICAgICAgIGRpc2FibGVkTWludXRlczogKCkgPT4gcmFuZ2UoMzAsIDYwKSwKICAgICAgICAgIGRpc2FibGVkU2Vjb25kczogKCkgPT4gWzU1LCA1Nl0sCiAgICAgICAgfTsKICAgICAgfQogICAgICByZXR1cm4gewogICAgICAgIGRpc2FibGVkSG91cnM6ICgpID0+IHJhbmdlKDAsIDYwKS5zcGxpY2UoMjAsIDQpLAogICAgICAgIGRpc2FibGVkTWludXRlczogKCkgPT4gcmFuZ2UoMCwgMzEpLAogICAgICAgIGRpc2FibGVkU2Vjb25kczogKCkgPT4gWzU1LCA1Nl0sCiAgICAgIH07CiAgICB9OwoKICAgIHJldHVybiB7CiAgICAgIGRheWpzLAogICAgICB2YWx1ZTE6IHJlZjxEYXlqcz4oKSwKICAgICAgdmFsdWUyOiByZWY8RGF5anM+KCksCiAgICAgIHZhbHVlMzogcmVmPFtEYXlqcywgRGF5anNdPigpLAogICAgICB2YWx1ZTQ6IHJlZjxbRGF5anMsIERheWpzXT4oKSwKICAgICAgZGlzYWJsZWREYXRlLAogICAgICBkaXNhYmxlZERhdGVUaW1lLAogICAgICBkaXNhYmxlZFJhbmdlVGltZSwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiPgogICAgPGEtZGF0ZS1waWNrZXIKICAgICAgdi1tb2RlbDp2YWx1ZT0idmFsdWUxIgogICAgICBmb3JtYXQ9IllZWVktTU0tREQgSEg6bW06c3MiCiAgICAgIDpkaXNhYmxlZC1kYXRlPSJkaXNhYmxlZERhdGUiCiAgICAgIDpkaXNhYmxlZC10aW1lPSJkaXNhYmxlZERhdGVUaW1lIgogICAgICA6c2hvdy10aW1lPSJ7IGRlZmF1bHRWYWx1ZTogZGF5anMoJzAwOjAwOjAwJywgJ0hIOm1tOnNzJykgfSIKICAgIC8+CiAgICA8YS1kYXRlLXBpY2tlciB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTIiIDpkaXNhYmxlZC1kYXRlPSJkaXNhYmxlZERhdGUiIHBpY2tlcj0ibW9udGgiIC8+CiAgICA8YS1yYW5nZS1waWNrZXIgdi1tb2RlbDp2YWx1ZT0idmFsdWUzIiA6ZGlzYWJsZWQtZGF0ZT0iZGlzYWJsZWREYXRlIiAvPgogICAgPGEtcmFuZ2UtcGlja2VyCiAgICAgIHYtbW9kZWw6dmFsdWU9InZhbHVlNCIKICAgICAgc3R5bGU9IndpZHRoOiA0MDBweCIKICAgICAgOmRpc2FibGVkLWRhdGU9ImRpc2FibGVkRGF0ZSIKICAgICAgOmRpc2FibGVkLXRpbWU9ImRpc2FibGVkUmFuZ2VUaW1lIgogICAgICA6c2hvdy10aW1lPSJ7CiAgICAgICAgaGlkZURpc2FibGVkT3B0aW9uczogdHJ1ZSwKICAgICAgICBkZWZhdWx0VmFsdWU6IFtkYXlqcygnMDA6MDA6MDAnLCAnSEg6bW06c3MnKSwgZGF5anMoJzExOjU5OjU5JywgJ0hIOm1tOnNzJyldLAogICAgICB9IgogICAgICBmb3JtYXQ9IllZWVktTU0tREQgSEg6bW06c3MiCiAgICAvPgogIDwvYS1zcGFjZT4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgcmFuZ2UgPSAoc3RhcnQsIGVuZCkgPT4gewogICAgICBjb25zdCByZXN1bHQgPSBbXTsKICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHsKICAgICAgICByZXN1bHQucHVzaChpKTsKICAgICAgfQogICAgICByZXR1cm4gcmVzdWx0OwogICAgfTsKICAgIGNvbnN0IGRpc2FibGVkRGF0ZSA9IGN1cnJlbnQgPT4gewogICAgICAvLyBDYW4gbm90IHNlbGVjdCBkYXlzIGJlZm9yZSB0b2RheSBhbmQgdG9kYXkKICAgICAgcmV0dXJuIGN1cnJlbnQgJiYgY3VycmVudCA8IGRheWpzKCkuZW5kT2YoJ2RheScpOwogICAgfTsKICAgIGNvbnN0IGRpc2FibGVkRGF0ZVRpbWUgPSAoKSA9PiB7CiAgICAgIHJldHVybiB7CiAgICAgICAgZGlzYWJsZWRIb3VyczogKCkgPT4gcmFuZ2UoMCwgMjQpLnNwbGljZSg0LCAyMCksCiAgICAgICAgZGlzYWJsZWRNaW51dGVzOiAoKSA9PiByYW5nZSgzMCwgNjApLAogICAgICAgIGRpc2FibGVkU2Vjb25kczogKCkgPT4gWzU1LCA1Nl0sCiAgICAgIH07CiAgICB9OwogICAgY29uc3QgZGlzYWJsZWRSYW5nZVRpbWUgPSAoXywgdHlwZSkgPT4gewogICAgICBpZiAodHlwZSA9PT0gJ3N0YXJ0JykgewogICAgICAgIHJldHVybiB7CiAgICAgICAgICBkaXNhYmxlZEhvdXJzOiAoKSA9PiByYW5nZSgwLCA2MCkuc3BsaWNlKDQsIDIwKSwKICAgICAgICAgIGRpc2FibGVkTWludXRlczogKCkgPT4gcmFuZ2UoMzAsIDYwKSwKICAgICAgICAgIGRpc2FibGVkU2Vjb25kczogKCkgPT4gWzU1LCA1Nl0sCiAgICAgICAgfTsKICAgICAgfQogICAgICByZXR1cm4gewogICAgICAgIGRpc2FibGVkSG91cnM6ICgpID0+IHJhbmdlKDAsIDYwKS5zcGxpY2UoMjAsIDQpLAogICAgICAgIGRpc2FibGVkTWludXRlczogKCkgPT4gcmFuZ2UoMCwgMzEpLAogICAgICAgIGRpc2FibGVkU2Vjb25kczogKCkgPT4gWzU1LCA1Nl0sCiAgICAgIH07CiAgICB9OwogICAgcmV0dXJuIHsKICAgICAgZGF5anMsCiAgICAgIHZhbHVlMTogcmVmKCksCiAgICAgIHZhbHVlMjogcmVmKCksCiAgICAgIHZhbHVlMzogcmVmKCksCiAgICAgIHZhbHVlNDogcmVmKCksCiAgICAgIGRpc2FibGVkRGF0ZSwKICAgICAgZGlzYWJsZWREYXRlVGltZSwKICAgICAgZGlzYWJsZWRSYW5nZVRpbWUsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4=",isdemo:!1}},{default:o(()=>[e(d,{direction:"vertical"},{default:o(()=>[e(u,{value:t.value1,"onUpdate:value":s[0]||(s[0]=p=>t.value1=p),format:"YYYY-MM-DD HH:mm:ss","disabled-date":t.disabledDate,"disabled-time":t.disabledDateTime,"show-time":{defaultValue:t.dayjs("00:00:00","HH:mm:ss")}},null,8,["value","disabled-date","disabled-time","show-time"]),e(u,{value:t.value2,"onUpdate:value":s[1]||(s[1]=p=>t.value2=p),"disabled-date":t.disabledDate,picker:"month"},null,8,["value","disabled-date"]),e(i,{value:t.value3,"onUpdate:value":s[2]||(s[2]=p=>t.value3=p),"disabled-date":t.disabledDate},null,8,["value","disabled-date"]),e(i,{value:t.value4,"onUpdate:value":s[3]||(s[3]=p=>t.value4=p),style:{width:"400px"},"disabled-date":t.disabledDate,"disabled-time":t.disabledRangeTime,"show-time":{hideDisabledOptions:!0,defaultValue:[t.dayjs("00:00:00","HH:mm:ss"),t.dayjs("11:59:59","HH:mm:ss")]},format:"YYYY-MM-DD HH:mm:ss"},null,8,["value","disabled-date","disabled-time","show-time"])]),_:1})]),htmlCode:o(()=>[un]),jsVersionHtml:o(()=>[kn]),_:1},8,["jsfiddle"])}const dn=v(ln,[["render",rn]]),gn=y({setup(){const t="YYYY-MM-DD";return{value1:k(b("2015-06-06",t)),value2:k(b("2015-06","YYYY-MM")),value3:k([b("2015-06-06",t),b("2015-06-06",t)]),value4:k([b("2019-09-03",t),b("2019-11-22",t)])}}}),In=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),a(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("vertical"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value1"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value2"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"disabled"),a(),n("span",{class:"token attr-name"},"picker"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("month"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-range-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value3"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"disabled"),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-range-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value4"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":disabled"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("[false, true]"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(" dayjs"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(" Dayjs "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'dayjs'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" dateFormat "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token string"},"'YYYY-MM-DD'"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"value1"),n("span",{class:"token operator"},":"),a(" ref"),n("span",{class:"token operator"},"<"),a("Dayjs"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"dayjs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'2015-06-06'"),n("span",{class:"token punctuation"},","),a(" dateFormat"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value2"),n("span",{class:"token operator"},":"),a(" ref"),n("span",{class:"token operator"},"<"),a("Dayjs"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"dayjs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'2015-06'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'YYYY-MM'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value3"),n("span",{class:"token operator"},":"),a(" ref"),n("span",{class:"token operator"},"<"),n("span",{class:"token punctuation"},"["),a("Dayjs"),n("span",{class:"token punctuation"},","),a(" Dayjs"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
        `),n("span",{class:"token function"},"dayjs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'2015-06-06'"),n("span",{class:"token punctuation"},","),a(" dateFormat"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token function"},"dayjs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'2015-06-06'"),n("span",{class:"token punctuation"},","),a(" dateFormat"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value4"),n("span",{class:"token operator"},":"),a(" ref"),n("span",{class:"token operator"},"<"),n("span",{class:"token punctuation"},"["),a("Dayjs"),n("span",{class:"token punctuation"},","),a(" Dayjs"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
        `),n("span",{class:"token function"},"dayjs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'2019-09-03'"),n("span",{class:"token punctuation"},","),a(" dateFormat"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token function"},"dayjs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'2019-11-22'"),n("span",{class:"token punctuation"},","),a(" dateFormat"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),Cn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),a(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("vertical"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value1"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value2"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"disabled"),a(),n("span",{class:"token attr-name"},"picker"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("month"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-range-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value3"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"disabled"),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-range-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value4"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":disabled"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("[false, true]"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(" dayjs "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'dayjs'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" dateFormat "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token string"},"'YYYY-MM-DD'"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"value1"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"dayjs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'2015-06-06'"),n("span",{class:"token punctuation"},","),a(" dateFormat"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value2"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"dayjs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'2015-06'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'YYYY-MM'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value3"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token function"},"dayjs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'2015-06-06'"),n("span",{class:"token punctuation"},","),a(" dateFormat"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token function"},"dayjs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'2015-06-06'"),n("span",{class:"token punctuation"},","),a(" dateFormat"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value4"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token function"},"dayjs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'2019-09-03'"),n("span",{class:"token punctuation"},","),a(" dateFormat"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token function"},"dayjs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'2019-11-22'"),n("span",{class:"token punctuation"},","),a(" dateFormat"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function mn(t,s,r,g,I,C){const u=c("a-date-picker"),i=c("a-range-picker"),d=c("a-space"),l=c("demo-box");return h(),A(l,{jsfiddle:{us:"A disabled state of the `DatePicker`.",cn:"\u9009\u62E9\u6846\u7684\u4E0D\u53EF\u7528\u72B6\u6001\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u9009\u62E9\u6846\u7684\u4E0D\u53EF\u7528\u72B6\u6001\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>A disabled state of the <code>DatePicker</code>.</p>
`,order:3,title:{"zh-CN":"\u7981\u7528","en-US":"Disabled"},relativePath:"components/date-picker/demo/disabled.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiPgogICAgPGEtZGF0ZS1waWNrZXIgdi1tb2RlbDp2YWx1ZT0idmFsdWUxIiAvPgogICAgPGEtZGF0ZS1waWNrZXIgdi1tb2RlbDp2YWx1ZT0idmFsdWUyIiBkaXNhYmxlZCBwaWNrZXI9Im1vbnRoIiAvPgogICAgPGEtcmFuZ2UtcGlja2VyIHYtbW9kZWw6dmFsdWU9InZhbHVlMyIgZGlzYWJsZWQgLz4KICAgIDxhLXJhbmdlLXBpY2tlciB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTQiIDpkaXNhYmxlZD0iW2ZhbHNlLCB0cnVlXSIgLz4KICA8L2Etc3BhY2U+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgZGF5anMsIHsgRGF5anMgfSBmcm9tICdkYXlqcyc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IGRhdGVGb3JtYXQgPSAnWVlZWS1NTS1ERCc7CiAgICByZXR1cm4gewogICAgICB2YWx1ZTE6IHJlZjxEYXlqcz4oZGF5anMoJzIwMTUtMDYtMDYnLCBkYXRlRm9ybWF0KSksCiAgICAgIHZhbHVlMjogcmVmPERheWpzPihkYXlqcygnMjAxNS0wNicsICdZWVlZLU1NJykpLAogICAgICB2YWx1ZTM6IHJlZjxbRGF5anMsIERheWpzXT4oWwogICAgICAgIGRheWpzKCcyMDE1LTA2LTA2JywgZGF0ZUZvcm1hdCksCiAgICAgICAgZGF5anMoJzIwMTUtMDYtMDYnLCBkYXRlRm9ybWF0KSwKICAgICAgXSksCiAgICAgIHZhbHVlNDogcmVmPFtEYXlqcywgRGF5anNdPihbCiAgICAgICAgZGF5anMoJzIwMTktMDktMDMnLCBkYXRlRm9ybWF0KSwKICAgICAgICBkYXlqcygnMjAxOS0xMS0yMicsIGRhdGVGb3JtYXQpLAogICAgICBdKSwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiPgogICAgPGEtZGF0ZS1waWNrZXIgdi1tb2RlbDp2YWx1ZT0idmFsdWUxIiAvPgogICAgPGEtZGF0ZS1waWNrZXIgdi1tb2RlbDp2YWx1ZT0idmFsdWUyIiBkaXNhYmxlZCBwaWNrZXI9Im1vbnRoIiAvPgogICAgPGEtcmFuZ2UtcGlja2VyIHYtbW9kZWw6dmFsdWU9InZhbHVlMyIgZGlzYWJsZWQgLz4KICAgIDxhLXJhbmdlLXBpY2tlciB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTQiIDpkaXNhYmxlZD0iW2ZhbHNlLCB0cnVlXSIgLz4KICA8L2Etc3BhY2U+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IGRhdGVGb3JtYXQgPSAnWVlZWS1NTS1ERCc7CiAgICByZXR1cm4gewogICAgICB2YWx1ZTE6IHJlZihkYXlqcygnMjAxNS0wNi0wNicsIGRhdGVGb3JtYXQpKSwKICAgICAgdmFsdWUyOiByZWYoZGF5anMoJzIwMTUtMDYnLCAnWVlZWS1NTScpKSwKICAgICAgdmFsdWUzOiByZWYoW2RheWpzKCcyMDE1LTA2LTA2JywgZGF0ZUZvcm1hdCksIGRheWpzKCcyMDE1LTA2LTA2JywgZGF0ZUZvcm1hdCldKSwKICAgICAgdmFsdWU0OiByZWYoW2RheWpzKCcyMDE5LTA5LTAzJywgZGF0ZUZvcm1hdCksIGRheWpzKCcyMDE5LTExLTIyJywgZGF0ZUZvcm1hdCldKSwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0Pg==",isdemo:!1}},{default:o(()=>[e(d,{direction:"vertical"},{default:o(()=>[e(u,{value:t.value1,"onUpdate:value":s[0]||(s[0]=p=>t.value1=p)},null,8,["value"]),e(u,{value:t.value2,"onUpdate:value":s[1]||(s[1]=p=>t.value2=p),disabled:"",picker:"month"},null,8,["value"]),e(i,{value:t.value3,"onUpdate:value":s[2]||(s[2]=p=>t.value3=p),disabled:""},null,8,["value"]),e(i,{value:t.value4,"onUpdate:value":s[3]||(s[3]=p=>t.value4=p),disabled:[!1,!0]},null,8,["value"])]),_:1})]),htmlCode:o(()=>[In]),jsVersionHtml:o(()=>[Cn]),_:1},8,["jsfiddle"])}const hn=v(gn,[["render",mn]]),An={},bn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),a(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("vertical"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#renderExtraFooter"),n("span",{class:"token punctuation"},">")]),a("extra footer"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-date-picker")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},"show-time"),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#renderExtraFooter"),n("span",{class:"token punctuation"},">")]),a("extra footer"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-date-picker")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-range-picker")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#renderExtraFooter"),n("span",{class:"token punctuation"},">")]),a("extra footer"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-range-picker")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-range-picker")]),a(),n("span",{class:"token attr-name"},"show-time"),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#renderExtraFooter"),n("span",{class:"token punctuation"},">")]),a("extra footer"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-range-picker")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Select month"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"picker"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("month"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#renderExtraFooter"),n("span",{class:"token punctuation"},">")]),a("extra footer"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-date-picker")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),vn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),a(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("vertical"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#renderExtraFooter"),n("span",{class:"token punctuation"},">")]),a("extra footer"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-date-picker")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},"show-time"),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#renderExtraFooter"),n("span",{class:"token punctuation"},">")]),a("extra footer"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-date-picker")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-range-picker")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#renderExtraFooter"),n("span",{class:"token punctuation"},">")]),a("extra footer"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-range-picker")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-range-picker")]),a(),n("span",{class:"token attr-name"},"show-time"),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#renderExtraFooter"),n("span",{class:"token punctuation"},">")]),a("extra footer"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-range-picker")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Select month"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"picker"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("month"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#renderExtraFooter"),n("span",{class:"token punctuation"},">")]),a("extra footer"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-date-picker")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function yn(t,s){const r=c("a-date-picker"),g=c("a-range-picker"),I=c("a-space"),C=c("demo-box");return h(),A(C,{jsfiddle:{us:"Render extra footer in panel for customized requirements.",cn:"\u5728\u6D6E\u5C42\u4E2D\u52A0\u5165\u989D\u5916\u7684\u9875\u811A\uFF0C\u4EE5\u6EE1\u8DB3\u67D0\u4E9B\u5B9A\u5236\u4FE1\u606F\u7684\u9700\u6C42\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u5728\u6D6E\u5C42\u4E2D\u52A0\u5165\u989D\u5916\u7684\u9875\u811A\uFF0C\u4EE5\u6EE1\u8DB3\u67D0\u4E9B\u5B9A\u5236\u4FE1\u606F\u7684\u9700\u6C42\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Render extra footer in panel for customized requirements.</p>
`,order:7,title:{"zh-CN":"\u989D\u5916\u7684\u9875\u811A","en-US":"Extra Footer"},relativePath:"components/date-picker/demo/extra-footer.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiPgogICAgPGEtZGF0ZS1waWNrZXI+CiAgICAgIDx0ZW1wbGF0ZSAjcmVuZGVyRXh0cmFGb290ZXI+ZXh0cmEgZm9vdGVyPC90ZW1wbGF0ZT4KICAgIDwvYS1kYXRlLXBpY2tlcj4KICAgIDxhLWRhdGUtcGlja2VyIHNob3ctdGltZT4KICAgICAgPHRlbXBsYXRlICNyZW5kZXJFeHRyYUZvb3Rlcj5leHRyYSBmb290ZXI8L3RlbXBsYXRlPgogICAgPC9hLWRhdGUtcGlja2VyPgogICAgPGEtcmFuZ2UtcGlja2VyPgogICAgICA8dGVtcGxhdGUgI3JlbmRlckV4dHJhRm9vdGVyPmV4dHJhIGZvb3RlcjwvdGVtcGxhdGU+CiAgICA8L2EtcmFuZ2UtcGlja2VyPgogICAgPGEtcmFuZ2UtcGlja2VyIHNob3ctdGltZT4KICAgICAgPHRlbXBsYXRlICNyZW5kZXJFeHRyYUZvb3Rlcj5leHRyYSBmb290ZXI8L3RlbXBsYXRlPgogICAgPC9hLXJhbmdlLXBpY2tlcj4KICAgIDxhLWRhdGUtcGlja2VyIHBsYWNlaG9sZGVyPSJTZWxlY3QgbW9udGgiIHBpY2tlcj0ibW9udGgiPgogICAgICA8dGVtcGxhdGUgI3JlbmRlckV4dHJhRm9vdGVyPmV4dHJhIGZvb3RlcjwvdGVtcGxhdGU+CiAgICA8L2EtZGF0ZS1waWNrZXI+CiAgPC9hLXNwYWNlPgo8L3RlbXBsYXRlPgoKCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiPgogICAgPGEtZGF0ZS1waWNrZXI+CiAgICAgIDx0ZW1wbGF0ZSAjcmVuZGVyRXh0cmFGb290ZXI+ZXh0cmEgZm9vdGVyPC90ZW1wbGF0ZT4KICAgIDwvYS1kYXRlLXBpY2tlcj4KICAgIDxhLWRhdGUtcGlja2VyIHNob3ctdGltZT4KICAgICAgPHRlbXBsYXRlICNyZW5kZXJFeHRyYUZvb3Rlcj5leHRyYSBmb290ZXI8L3RlbXBsYXRlPgogICAgPC9hLWRhdGUtcGlja2VyPgogICAgPGEtcmFuZ2UtcGlja2VyPgogICAgICA8dGVtcGxhdGUgI3JlbmRlckV4dHJhRm9vdGVyPmV4dHJhIGZvb3RlcjwvdGVtcGxhdGU+CiAgICA8L2EtcmFuZ2UtcGlja2VyPgogICAgPGEtcmFuZ2UtcGlja2VyIHNob3ctdGltZT4KICAgICAgPHRlbXBsYXRlICNyZW5kZXJFeHRyYUZvb3Rlcj5leHRyYSBmb290ZXI8L3RlbXBsYXRlPgogICAgPC9hLXJhbmdlLXBpY2tlcj4KICAgIDxhLWRhdGUtcGlja2VyIHBsYWNlaG9sZGVyPSJTZWxlY3QgbW9udGgiIHBpY2tlcj0ibW9udGgiPgogICAgICA8dGVtcGxhdGUgI3JlbmRlckV4dHJhRm9vdGVyPmV4dHJhIGZvb3RlcjwvdGVtcGxhdGU+CiAgICA8L2EtZGF0ZS1waWNrZXI+CiAgPC9hLXNwYWNlPgo8L3RlbXBsYXRlPg==",isdemo:!1}},{default:o(()=>[e(I,{direction:"vertical"},{default:o(()=>[e(r,null,{renderExtraFooter:o(()=>[a("extra footer")]),_:1}),e(r,{"show-time":""},{renderExtraFooter:o(()=>[a("extra footer")]),_:1}),e(g,null,{renderExtraFooter:o(()=>[a("extra footer")]),_:1}),e(g,{"show-time":""},{renderExtraFooter:o(()=>[a("extra footer")]),_:1}),e(r,{placeholder:"Select month",picker:"month"},{renderExtraFooter:o(()=>[a("extra footer")]),_:1})]),_:1})]),htmlCode:o(()=>[bn]),jsVersionHtml:o(()=>[vn]),_:1},8,["jsfiddle"])}const fn=v(An,[["render",yn]]),Zn=y({setup(){const t="YYYY/MM/DD",s="MM/DD",r="YYYY/MM",g=["DD/MM/YYYY","DD/MM/YY"],I=C=>`${b(C).startOf("week").format(s)} ~ ${b(C).endOf("week").format(s)}`;return{value1:k(b("2015/01/01",t)),value2:k(b("01/01/2015",g[0])),value3:k(b("2015/01",r)),value4:k([b("2015/01/01",t),b("2015/01/01",t)]),value5:k(b("2015/01/01",t)),value6:k(b()),dateFormat:t,monthFormat:r,dateFormatList:g,customWeekStartEndFormat:I,customFormat:C=>`custom format: ${C.format(t)}`}}}),Wn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),a(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("vertical"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("12"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value1"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":format"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dateFormat"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value2"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":format"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dateFormatList"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value3"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":format"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("monthFormat"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"picker"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("month"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-range-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value4"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":format"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dateFormat"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value5"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":format"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("customFormat"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value6"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":format"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("customWeekStartEndFormat"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"picker"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("week"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(" dayjs"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(" Dayjs "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'dayjs'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" dateFormat "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token string"},"'YYYY/MM/DD'"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" weekFormat "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token string"},"'MM/DD'"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" monthFormat "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token string"},"'YYYY/MM'"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" dateFormatList "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'DD/MM/YYYY'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'DD/MM/YY'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"customWeekStartEndFormat"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token parameter"},"value"),a(),n("span",{class:"token operator"},"=>"),a(`
      `),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),n("span",{class:"token function"},"dayjs"),n("span",{class:"token punctuation"},"("),a("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"startOf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'week'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"format"),n("span",{class:"token punctuation"},"("),a("weekFormat"),n("span",{class:"token punctuation"},")"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," ~ "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),n("span",{class:"token function"},"dayjs"),n("span",{class:"token punctuation"},"("),a("value"),n("span",{class:"token punctuation"},")"),a(`
        `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"endOf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'week'"),n("span",{class:"token punctuation"},")"),a(`
        `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"format"),n("span",{class:"token punctuation"},"("),a("weekFormat"),n("span",{class:"token punctuation"},")"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"value1"),n("span",{class:"token operator"},":"),a(" ref"),n("span",{class:"token operator"},"<"),a("Dayjs"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"dayjs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'2015/01/01'"),n("span",{class:"token punctuation"},","),a(" dateFormat"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value2"),n("span",{class:"token operator"},":"),a(" ref"),n("span",{class:"token operator"},"<"),a("Dayjs"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"dayjs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'01/01/2015'"),n("span",{class:"token punctuation"},","),a(" dateFormatList"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value3"),n("span",{class:"token operator"},":"),a(" ref"),n("span",{class:"token operator"},"<"),a("Dayjs"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"dayjs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'2015/01'"),n("span",{class:"token punctuation"},","),a(" monthFormat"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value4"),n("span",{class:"token operator"},":"),a(" ref"),n("span",{class:"token operator"},"<"),n("span",{class:"token punctuation"},"["),a("Dayjs"),n("span",{class:"token punctuation"},","),a(" Dayjs"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
        `),n("span",{class:"token function"},"dayjs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'2015/01/01'"),n("span",{class:"token punctuation"},","),a(" dateFormat"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token function"},"dayjs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'2015/01/01'"),n("span",{class:"token punctuation"},","),a(" dateFormat"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value5"),n("span",{class:"token operator"},":"),a(" ref"),n("span",{class:"token operator"},"<"),a("Dayjs"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"dayjs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'2015/01/01'"),n("span",{class:"token punctuation"},","),a(" dateFormat"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value6"),n("span",{class:"token operator"},":"),a(" ref"),n("span",{class:"token operator"},"<"),a("Dayjs"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"dayjs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      dateFormat`),n("span",{class:"token punctuation"},","),a(`
      monthFormat`),n("span",{class:"token punctuation"},","),a(`
      dateFormatList`),n("span",{class:"token punctuation"},","),a(`
      customWeekStartEndFormat`),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"customFormat"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token parameter"},"value"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"custom format: "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"format"),n("span",{class:"token punctuation"},"("),a("dateFormat"),n("span",{class:"token punctuation"},")"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),Yn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),a(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("vertical"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("12"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value1"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":format"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dateFormat"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value2"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":format"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dateFormatList"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value3"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":format"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("monthFormat"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"picker"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("month"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-range-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value4"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":format"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dateFormat"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value5"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":format"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("customFormat"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value6"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":format"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("customWeekStartEndFormat"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"picker"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("week"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(" dayjs "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'dayjs'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" dateFormat "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token string"},"'YYYY/MM/DD'"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" weekFormat "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token string"},"'MM/DD'"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" monthFormat "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token string"},"'YYYY/MM'"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" dateFormatList "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'DD/MM/YYYY'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'DD/MM/YY'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"customWeekStartEndFormat"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token parameter"},"value"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),n("span",{class:"token function"},"dayjs"),n("span",{class:"token punctuation"},"("),a("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"startOf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'week'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"format"),n("span",{class:"token punctuation"},"("),a("weekFormat"),n("span",{class:"token punctuation"},")"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," ~ "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),n("span",{class:"token function"},"dayjs"),n("span",{class:"token punctuation"},"("),a("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"endOf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'week'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"format"),n("span",{class:"token punctuation"},"("),a("weekFormat"),n("span",{class:"token punctuation"},")"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"value1"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"dayjs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'2015/01/01'"),n("span",{class:"token punctuation"},","),a(" dateFormat"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value2"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"dayjs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'01/01/2015'"),n("span",{class:"token punctuation"},","),a(" dateFormatList"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value3"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"dayjs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'2015/01'"),n("span",{class:"token punctuation"},","),a(" monthFormat"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value4"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token function"},"dayjs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'2015/01/01'"),n("span",{class:"token punctuation"},","),a(" dateFormat"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token function"},"dayjs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'2015/01/01'"),n("span",{class:"token punctuation"},","),a(" dateFormat"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value5"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"dayjs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'2015/01/01'"),n("span",{class:"token punctuation"},","),a(" dateFormat"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value6"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"dayjs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      dateFormat`),n("span",{class:"token punctuation"},","),a(`
      monthFormat`),n("span",{class:"token punctuation"},","),a(`
      dateFormatList`),n("span",{class:"token punctuation"},","),a(`
      customWeekStartEndFormat`),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"customFormat"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token parameter"},"value"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"custom format: "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"format"),n("span",{class:"token punctuation"},"("),a("dateFormat"),n("span",{class:"token punctuation"},")"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function Gn(t,s,r,g,I,C){const u=c("a-date-picker"),i=c("a-range-picker"),d=c("a-space"),l=c("demo-box");return h(),A(l,{jsfiddle:{us:"We can set the date format by `format`.",cn:"\u4F7F\u7528 `format` \u5C5E\u6027\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u65E5\u671F\u663E\u793A\u683C\u5F0F\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u4F7F\u7528 <code>format</code> \u5C5E\u6027\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u65E5\u671F\u663E\u793A\u683C\u5F0F\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>We can set the date format by <code>format</code>.</p>
`,order:1,title:{"zh-CN":"\u65E5\u671F\u683C\u5F0F","en-US":"Date Format"},relativePath:"components/date-picker/demo/format.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiIDpzaXplPSIxMiI+CiAgICA8YS1kYXRlLXBpY2tlciB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTEiIDpmb3JtYXQ9ImRhdGVGb3JtYXQiIC8+CiAgICA8YS1kYXRlLXBpY2tlciB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTIiIDpmb3JtYXQ9ImRhdGVGb3JtYXRMaXN0IiAvPgogICAgPGEtZGF0ZS1waWNrZXIgdi1tb2RlbDp2YWx1ZT0idmFsdWUzIiA6Zm9ybWF0PSJtb250aEZvcm1hdCIgcGlja2VyPSJtb250aCIgLz4KICAgIDxhLXJhbmdlLXBpY2tlciB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTQiIDpmb3JtYXQ9ImRhdGVGb3JtYXQiIC8+CiAgICA8YS1kYXRlLXBpY2tlciB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTUiIDpmb3JtYXQ9ImN1c3RvbUZvcm1hdCIgLz4KICAgIDxhLWRhdGUtcGlja2VyIHYtbW9kZWw6dmFsdWU9InZhbHVlNiIgOmZvcm1hdD0iY3VzdG9tV2Vla1N0YXJ0RW5kRm9ybWF0IiBwaWNrZXI9IndlZWsiIC8+CiAgPC9hLXNwYWNlPgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IGRheWpzLCB7IERheWpzIH0gZnJvbSAnZGF5anMnOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBkYXRlRm9ybWF0ID0gJ1lZWVkvTU0vREQnOwogICAgY29uc3Qgd2Vla0Zvcm1hdCA9ICdNTS9ERCc7CiAgICBjb25zdCBtb250aEZvcm1hdCA9ICdZWVlZL01NJzsKICAgIGNvbnN0IGRhdGVGb3JtYXRMaXN0ID0gWydERC9NTS9ZWVlZJywgJ0REL01NL1lZJ107CgogICAgY29uc3QgY3VzdG9tV2Vla1N0YXJ0RW5kRm9ybWF0ID0gdmFsdWUgPT4KICAgICAgYCR7ZGF5anModmFsdWUpLnN0YXJ0T2YoJ3dlZWsnKS5mb3JtYXQod2Vla0Zvcm1hdCl9IH4gJHtkYXlqcyh2YWx1ZSkKICAgICAgICAuZW5kT2YoJ3dlZWsnKQogICAgICAgIC5mb3JtYXQod2Vla0Zvcm1hdCl9YDsKICAgIHJldHVybiB7CiAgICAgIHZhbHVlMTogcmVmPERheWpzPihkYXlqcygnMjAxNS8wMS8wMScsIGRhdGVGb3JtYXQpKSwKICAgICAgdmFsdWUyOiByZWY8RGF5anM+KGRheWpzKCcwMS8wMS8yMDE1JywgZGF0ZUZvcm1hdExpc3RbMF0pKSwKICAgICAgdmFsdWUzOiByZWY8RGF5anM+KGRheWpzKCcyMDE1LzAxJywgbW9udGhGb3JtYXQpKSwKICAgICAgdmFsdWU0OiByZWY8W0RheWpzLCBEYXlqc10+KFsKICAgICAgICBkYXlqcygnMjAxNS8wMS8wMScsIGRhdGVGb3JtYXQpLAogICAgICAgIGRheWpzKCcyMDE1LzAxLzAxJywgZGF0ZUZvcm1hdCksCiAgICAgIF0pLAogICAgICB2YWx1ZTU6IHJlZjxEYXlqcz4oZGF5anMoJzIwMTUvMDEvMDEnLCBkYXRlRm9ybWF0KSksCiAgICAgIHZhbHVlNjogcmVmPERheWpzPihkYXlqcygpKSwKICAgICAgZGF0ZUZvcm1hdCwKICAgICAgbW9udGhGb3JtYXQsCiAgICAgIGRhdGVGb3JtYXRMaXN0LAogICAgICBjdXN0b21XZWVrU3RhcnRFbmRGb3JtYXQsCiAgICAgIGN1c3RvbUZvcm1hdDogdmFsdWUgPT4gYGN1c3RvbSBmb3JtYXQ6ICR7dmFsdWUuZm9ybWF0KGRhdGVGb3JtYXQpfWAsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiIDpzaXplPSIxMiI+CiAgICA8YS1kYXRlLXBpY2tlciB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTEiIDpmb3JtYXQ9ImRhdGVGb3JtYXQiIC8+CiAgICA8YS1kYXRlLXBpY2tlciB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTIiIDpmb3JtYXQ9ImRhdGVGb3JtYXRMaXN0IiAvPgogICAgPGEtZGF0ZS1waWNrZXIgdi1tb2RlbDp2YWx1ZT0idmFsdWUzIiA6Zm9ybWF0PSJtb250aEZvcm1hdCIgcGlja2VyPSJtb250aCIgLz4KICAgIDxhLXJhbmdlLXBpY2tlciB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTQiIDpmb3JtYXQ9ImRhdGVGb3JtYXQiIC8+CiAgICA8YS1kYXRlLXBpY2tlciB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTUiIDpmb3JtYXQ9ImN1c3RvbUZvcm1hdCIgLz4KICAgIDxhLWRhdGUtcGlja2VyIHYtbW9kZWw6dmFsdWU9InZhbHVlNiIgOmZvcm1hdD0iY3VzdG9tV2Vla1N0YXJ0RW5kRm9ybWF0IiBwaWNrZXI9IndlZWsiIC8+CiAgPC9hLXNwYWNlPgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBkYXRlRm9ybWF0ID0gJ1lZWVkvTU0vREQnOwogICAgY29uc3Qgd2Vla0Zvcm1hdCA9ICdNTS9ERCc7CiAgICBjb25zdCBtb250aEZvcm1hdCA9ICdZWVlZL01NJzsKICAgIGNvbnN0IGRhdGVGb3JtYXRMaXN0ID0gWydERC9NTS9ZWVlZJywgJ0REL01NL1lZJ107CiAgICBjb25zdCBjdXN0b21XZWVrU3RhcnRFbmRGb3JtYXQgPSB2YWx1ZSA9PiBgJHtkYXlqcyh2YWx1ZSkuc3RhcnRPZignd2VlaycpLmZvcm1hdCh3ZWVrRm9ybWF0KX0gfiAke2RheWpzKHZhbHVlKS5lbmRPZignd2VlaycpLmZvcm1hdCh3ZWVrRm9ybWF0KX1gOwogICAgcmV0dXJuIHsKICAgICAgdmFsdWUxOiByZWYoZGF5anMoJzIwMTUvMDEvMDEnLCBkYXRlRm9ybWF0KSksCiAgICAgIHZhbHVlMjogcmVmKGRheWpzKCcwMS8wMS8yMDE1JywgZGF0ZUZvcm1hdExpc3RbMF0pKSwKICAgICAgdmFsdWUzOiByZWYoZGF5anMoJzIwMTUvMDEnLCBtb250aEZvcm1hdCkpLAogICAgICB2YWx1ZTQ6IHJlZihbZGF5anMoJzIwMTUvMDEvMDEnLCBkYXRlRm9ybWF0KSwgZGF5anMoJzIwMTUvMDEvMDEnLCBkYXRlRm9ybWF0KV0pLAogICAgICB2YWx1ZTU6IHJlZihkYXlqcygnMjAxNS8wMS8wMScsIGRhdGVGb3JtYXQpKSwKICAgICAgdmFsdWU2OiByZWYoZGF5anMoKSksCiAgICAgIGRhdGVGb3JtYXQsCiAgICAgIG1vbnRoRm9ybWF0LAogICAgICBkYXRlRm9ybWF0TGlzdCwKICAgICAgY3VzdG9tV2Vla1N0YXJ0RW5kRm9ybWF0LAogICAgICBjdXN0b21Gb3JtYXQ6IHZhbHVlID0+IGBjdXN0b20gZm9ybWF0OiAke3ZhbHVlLmZvcm1hdChkYXRlRm9ybWF0KX1gLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+",isdemo:!1}},{default:o(()=>[e(d,{direction:"vertical",size:12},{default:o(()=>[e(u,{value:t.value1,"onUpdate:value":s[0]||(s[0]=p=>t.value1=p),format:t.dateFormat},null,8,["value","format"]),e(u,{value:t.value2,"onUpdate:value":s[1]||(s[1]=p=>t.value2=p),format:t.dateFormatList},null,8,["value","format"]),e(u,{value:t.value3,"onUpdate:value":s[2]||(s[2]=p=>t.value3=p),format:t.monthFormat,picker:"month"},null,8,["value","format"]),e(i,{value:t.value4,"onUpdate:value":s[3]||(s[3]=p=>t.value4=p),format:t.dateFormat},null,8,["value","format"]),e(u,{value:t.value5,"onUpdate:value":s[4]||(s[4]=p=>t.value5=p),format:t.customFormat},null,8,["value","format"]),e(u,{value:t.value6,"onUpdate:value":s[5]||(s[5]=p=>t.value6=p),format:t.customWeekStartEndFormat,picker:"week"},null,8,["value","format"])]),_:1})]),htmlCode:o(()=>[Wn]),jsVersionHtml:o(()=>[Yn]),_:1},8,["jsfiddle"])}const wn=v(Zn,[["render",Gn]]),Pn=y({setup(){const t=k("time"),s=k(["month","month"]),r=k();return{mode1:t,mode2:s,value:r,handleOpenChange1:i=>{i&&(t.value="time")},handleChange:i=>{r.value=i},handlePanelChange1:(i,d)=>{t.value=d},handlePanelChange2:(i,d)=>{r.value=i,s.value=[d[0]==="date"?"month":d[0],d[1]==="date"?"month":d[1]]}}}}),jn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),a(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("vertical"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("12"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(`
      `),n("span",{class:"token attr-name"},":mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("mode1"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"show-time"),a(`
      `),n("span",{class:"token attr-name"},"@openChange"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handleOpenChange1"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"@panelChange"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handlePanelChange1"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-range-picker")]),a(`
      `),n("span",{class:"token attr-name"},":placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("['Start month', 'End month']"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"format"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("YYYY-MM"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("mode2"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"@panelChange"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handlePanelChange2"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handleChange"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Dayjs "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'dayjs'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" mode1 "),n("span",{class:"token operator"},"="),a(" ref"),n("span",{class:"token operator"},"<"),a("any"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'time'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" mode2 "),n("span",{class:"token operator"},"="),a(" ref"),n("span",{class:"token operator"},"<"),a("any"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'month'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'month'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" value "),n("span",{class:"token operator"},"="),a(" ref"),n("span",{class:"token operator"},"<"),n("span",{class:"token punctuation"},"["),a("Dayjs"),n("span",{class:"token punctuation"},","),a(" Dayjs"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"handleOpenChange1"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"open"),n("span",{class:"token operator"},":"),a(" boolean")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("open"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        mode1`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token string"},"'time'"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"handleChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"val"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a("Dayjs"),n("span",{class:"token punctuation"},","),a(" Dayjs"),n("span",{class:"token punctuation"},"]")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(" val"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"handlePanelChange1"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"_val"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a("Dayjs"),n("span",{class:"token punctuation"},","),a(" Dayjs"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"mode"),n("span",{class:"token operator"},":"),a(" any")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      mode1`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(" mode"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"handlePanelChange2"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"val"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a("Dayjs"),n("span",{class:"token punctuation"},","),a(" Dayjs"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"mode"),n("span",{class:"token operator"},":"),a(" any"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(" val"),n("span",{class:"token punctuation"},";"),a(`
      mode2`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
        mode`),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token string"},"'date'"),a(),n("span",{class:"token operator"},"?"),a(),n("span",{class:"token string"},"'month'"),a(),n("span",{class:"token operator"},":"),a(" mode"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
        mode`),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token string"},"'date'"),a(),n("span",{class:"token operator"},"?"),a(),n("span",{class:"token string"},"'month'"),a(),n("span",{class:"token operator"},":"),a(" mode"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      mode1`),n("span",{class:"token punctuation"},","),a(`
      mode2`),n("span",{class:"token punctuation"},","),a(`
      value`),n("span",{class:"token punctuation"},","),a(`
      handleOpenChange1`),n("span",{class:"token punctuation"},","),a(`
      handleChange`),n("span",{class:"token punctuation"},","),a(`
      handlePanelChange1`),n("span",{class:"token punctuation"},","),a(`
      handlePanelChange2`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),Sn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),a(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("vertical"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("12"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(`
      `),n("span",{class:"token attr-name"},":mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("mode1"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"show-time"),a(`
      `),n("span",{class:"token attr-name"},"@openChange"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handleOpenChange1"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"@panelChange"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handlePanelChange1"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-range-picker")]),a(`
      `),n("span",{class:"token attr-name"},":placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("['Start month', 'End month']"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"format"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("YYYY-MM"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("mode2"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"@panelChange"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handlePanelChange2"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handleChange"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" mode1 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'time'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" mode2 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'month'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'month'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"handleOpenChange1"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token parameter"},"open"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("open"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        mode1`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token string"},"'time'"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"handleChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token parameter"},"val"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(" val"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"handlePanelChange1"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("_val"),n("span",{class:"token punctuation"},","),a(" mode")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      mode1`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(" mode"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"handlePanelChange2"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("val"),n("span",{class:"token punctuation"},","),a(" mode")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(" val"),n("span",{class:"token punctuation"},";"),a(`
      mode2`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a("mode"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token string"},"'date'"),a(),n("span",{class:"token operator"},"?"),a(),n("span",{class:"token string"},"'month'"),a(),n("span",{class:"token operator"},":"),a(" mode"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(" mode"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token string"},"'date'"),a(),n("span",{class:"token operator"},"?"),a(),n("span",{class:"token string"},"'month'"),a(),n("span",{class:"token operator"},":"),a(" mode"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      mode1`),n("span",{class:"token punctuation"},","),a(`
      mode2`),n("span",{class:"token punctuation"},","),a(`
      value`),n("span",{class:"token punctuation"},","),a(`
      handleOpenChange1`),n("span",{class:"token punctuation"},","),a(`
      handleChange`),n("span",{class:"token punctuation"},","),a(`
      handlePanelChange1`),n("span",{class:"token punctuation"},","),a(`
      handlePanelChange2`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function Rn(t,s,r,g,I,C){const u=c("a-date-picker"),i=c("a-range-picker"),d=c("a-space"),l=c("demo-box");return h(),A(l,{jsfiddle:{us:"Determing which panel to show with `mode` and `onPanelChange`.",cn:"\u901A\u8FC7\u7EC4\u5408 `mode` \u4E0E `onPanelChange` \u63A7\u5236\u8981\u5C55\u793A\u7684\u9762\u677F\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u901A\u8FC7\u7EC4\u5408 <code>mode</code> \u4E0E <code>onPanelChange</code> \u63A7\u5236\u8981\u5C55\u793A\u7684\u9762\u677F\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Determing which panel to show with <code>mode</code> and <code>onPanelChange</code>.</p>
`,order:10,title:{"zh-CN":"\u53D7\u63A7\u9762\u677F","en-US":"Controlled Panels"},relativePath:"components/date-picker/demo/mode.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiIDpzaXplPSIxMiI+CiAgICA8YS1kYXRlLXBpY2tlcgogICAgICA6bW9kZT0ibW9kZTEiCiAgICAgIHNob3ctdGltZQogICAgICBAb3BlbkNoYW5nZT0iaGFuZGxlT3BlbkNoYW5nZTEiCiAgICAgIEBwYW5lbENoYW5nZT0iaGFuZGxlUGFuZWxDaGFuZ2UxIgogICAgLz4KICAgIDxhLXJhbmdlLXBpY2tlcgogICAgICA6cGxhY2Vob2xkZXI9IlsnU3RhcnQgbW9udGgnLCAnRW5kIG1vbnRoJ10iCiAgICAgIGZvcm1hdD0iWVlZWS1NTSIKICAgICAgOnZhbHVlPSJ2YWx1ZSIKICAgICAgOm1vZGU9Im1vZGUyIgogICAgICBAcGFuZWxDaGFuZ2U9ImhhbmRsZVBhbmVsQ2hhbmdlMiIKICAgICAgQGNoYW5nZT0iaGFuZGxlQ2hhbmdlIgogICAgLz4KICA8L2Etc3BhY2U+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBEYXlqcyB9IGZyb20gJ2RheWpzJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgbW9kZTEgPSByZWY8YW55PigndGltZScpOwogICAgY29uc3QgbW9kZTIgPSByZWY8YW55PihbJ21vbnRoJywgJ21vbnRoJ10pOwogICAgY29uc3QgdmFsdWUgPSByZWY8W0RheWpzLCBEYXlqc10+KCk7CgogICAgY29uc3QgaGFuZGxlT3BlbkNoYW5nZTEgPSAob3BlbjogYm9vbGVhbikgPT4gewogICAgICBpZiAob3BlbikgewogICAgICAgIG1vZGUxLnZhbHVlID0gJ3RpbWUnOwogICAgICB9CiAgICB9OwoKICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICh2YWw6IFtEYXlqcywgRGF5anNdKSA9PiB7CiAgICAgIHZhbHVlLnZhbHVlID0gdmFsOwogICAgfTsKCiAgICBjb25zdCBoYW5kbGVQYW5lbENoYW5nZTEgPSAoX3ZhbDogW0RheWpzLCBEYXlqc10sIG1vZGU6IGFueSkgPT4gewogICAgICBtb2RlMS52YWx1ZSA9IG1vZGU7CiAgICB9OwoKICAgIGNvbnN0IGhhbmRsZVBhbmVsQ2hhbmdlMiA9ICh2YWw6IFtEYXlqcywgRGF5anNdLCBtb2RlOiBhbnlbXSkgPT4gewogICAgICB2YWx1ZS52YWx1ZSA9IHZhbDsKICAgICAgbW9kZTIudmFsdWUgPSBbCiAgICAgICAgbW9kZVswXSA9PT0gJ2RhdGUnID8gJ21vbnRoJyA6IG1vZGVbMF0sCiAgICAgICAgbW9kZVsxXSA9PT0gJ2RhdGUnID8gJ21vbnRoJyA6IG1vZGVbMV0sCiAgICAgIF07CiAgICB9OwoKICAgIHJldHVybiB7CiAgICAgIG1vZGUxLAogICAgICBtb2RlMiwKICAgICAgdmFsdWUsCiAgICAgIGhhbmRsZU9wZW5DaGFuZ2UxLAogICAgICBoYW5kbGVDaGFuZ2UsCiAgICAgIGhhbmRsZVBhbmVsQ2hhbmdlMSwKICAgICAgaGFuZGxlUGFuZWxDaGFuZ2UyLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiIDpzaXplPSIxMiI+CiAgICA8YS1kYXRlLXBpY2tlcgogICAgICA6bW9kZT0ibW9kZTEiCiAgICAgIHNob3ctdGltZQogICAgICBAb3BlbkNoYW5nZT0iaGFuZGxlT3BlbkNoYW5nZTEiCiAgICAgIEBwYW5lbENoYW5nZT0iaGFuZGxlUGFuZWxDaGFuZ2UxIgogICAgLz4KICAgIDxhLXJhbmdlLXBpY2tlcgogICAgICA6cGxhY2Vob2xkZXI9IlsnU3RhcnQgbW9udGgnLCAnRW5kIG1vbnRoJ10iCiAgICAgIGZvcm1hdD0iWVlZWS1NTSIKICAgICAgOnZhbHVlPSJ2YWx1ZSIKICAgICAgOm1vZGU9Im1vZGUyIgogICAgICBAcGFuZWxDaGFuZ2U9ImhhbmRsZVBhbmVsQ2hhbmdlMiIKICAgICAgQGNoYW5nZT0iaGFuZGxlQ2hhbmdlIgogICAgLz4KICA8L2Etc3BhY2U+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IG1vZGUxID0gcmVmKCd0aW1lJyk7CiAgICBjb25zdCBtb2RlMiA9IHJlZihbJ21vbnRoJywgJ21vbnRoJ10pOwogICAgY29uc3QgdmFsdWUgPSByZWYoKTsKICAgIGNvbnN0IGhhbmRsZU9wZW5DaGFuZ2UxID0gb3BlbiA9PiB7CiAgICAgIGlmIChvcGVuKSB7CiAgICAgICAgbW9kZTEudmFsdWUgPSAndGltZSc7CiAgICAgIH0KICAgIH07CiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSB2YWwgPT4gewogICAgICB2YWx1ZS52YWx1ZSA9IHZhbDsKICAgIH07CiAgICBjb25zdCBoYW5kbGVQYW5lbENoYW5nZTEgPSAoX3ZhbCwgbW9kZSkgPT4gewogICAgICBtb2RlMS52YWx1ZSA9IG1vZGU7CiAgICB9OwogICAgY29uc3QgaGFuZGxlUGFuZWxDaGFuZ2UyID0gKHZhbCwgbW9kZSkgPT4gewogICAgICB2YWx1ZS52YWx1ZSA9IHZhbDsKICAgICAgbW9kZTIudmFsdWUgPSBbbW9kZVswXSA9PT0gJ2RhdGUnID8gJ21vbnRoJyA6IG1vZGVbMF0sIG1vZGVbMV0gPT09ICdkYXRlJyA/ICdtb250aCcgOiBtb2RlWzFdXTsKICAgIH07CiAgICByZXR1cm4gewogICAgICBtb2RlMSwKICAgICAgbW9kZTIsCiAgICAgIHZhbHVlLAogICAgICBoYW5kbGVPcGVuQ2hhbmdlMSwKICAgICAgaGFuZGxlQ2hhbmdlLAogICAgICBoYW5kbGVQYW5lbENoYW5nZTEsCiAgICAgIGhhbmRsZVBhbmVsQ2hhbmdlMiwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0Pg==",isdemo:!1}},{default:o(()=>[e(d,{direction:"vertical",size:12},{default:o(()=>[e(u,{mode:t.mode1,"show-time":"",onOpenChange:t.handleOpenChange1,onPanelChange:t.handlePanelChange1},null,8,["mode","onOpenChange","onPanelChange"]),e(i,{placeholder:["Start month","End month"],format:"YYYY-MM",value:t.value,mode:t.mode2,onPanelChange:t.handlePanelChange2,onChange:t.handleChange},null,8,["value","mode","onPanelChange","onChange"])]),_:1})]),htmlCode:o(()=>[jn]),jsVersionHtml:o(()=>[Sn]),_:1},8,["jsfiddle"])}const Vn=v(Pn,[["render",Rn]]),Bn=y({setup(){return{value1:k(),value2:k(),ranges:{Today:[b(),b()],"This Month":[b(),b().endOf("month")]}}}}),Dn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),a(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("vertical"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("12"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-range-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value1"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":ranges"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ranges"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-range-picker")]),a(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value2"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 400px")]),n("span",{class:"token punctuation"},'"')])]),a(`
      `),n("span",{class:"token attr-name"},":ranges"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ranges"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"show-time"),a(`
      `),n("span",{class:"token attr-name"},"format"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("YYYY/MM/DD HH:mm:ss"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(" dayjs"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(" Dayjs "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'dayjs'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
type RangeValue `),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a("Dayjs"),n("span",{class:"token punctuation"},","),a(" Dayjs"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"value1"),n("span",{class:"token operator"},":"),a(" ref"),n("span",{class:"token operator"},"<"),a("RangeValue"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value2"),n("span",{class:"token operator"},":"),a(" ref"),n("span",{class:"token operator"},"<"),a("RangeValue"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"ranges"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"Today"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token function"},"dayjs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token function"},"dayjs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token keyword"},"as"),a(" RangeValue"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token string-property property"},"'This Month'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token function"},"dayjs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token function"},"dayjs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"endOf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'month'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token keyword"},"as"),a(" RangeValue"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),Fn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),a(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("vertical"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("12"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-range-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value1"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":ranges"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ranges"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-range-picker")]),a(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value2"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 400px")]),n("span",{class:"token punctuation"},'"')])]),a(`
      `),n("span",{class:"token attr-name"},":ranges"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ranges"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"show-time"),a(`
      `),n("span",{class:"token attr-name"},"format"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("YYYY/MM/DD HH:mm:ss"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(" dayjs "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'dayjs'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"value1"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value2"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"ranges"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"Today"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token function"},"dayjs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token function"},"dayjs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token string-property property"},"'This Month'"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token function"},"dayjs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token function"},"dayjs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"endOf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'month'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function Xn(t,s,r,g,I,C){const u=c("a-range-picker"),i=c("a-space"),d=c("demo-box");return h(),A(d,{jsfiddle:{us:"We can set presetted ranges to RangePicker to improve user experience.",cn:"\u53EF\u4EE5\u9884\u8BBE\u5E38\u7528\u7684\u65E5\u671F\u8303\u56F4\u4EE5\u63D0\u9AD8\u7528\u6237\u4F53\u9A8C\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u53EF\u4EE5\u9884\u8BBE\u5E38\u7528\u7684\u65E5\u671F\u8303\u56F4\u4EE5\u63D0\u9AD8\u7528\u6237\u4F53\u9A8C\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>We can set presetted ranges to RangePicker to improve user experience.</p>
`,order:6,title:{"zh-CN":"\u9884\u8BBE\u8303\u56F4","en-US":"Preset Ranges"},relativePath:"components/date-picker/demo/presetted-ranges.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiIDpzaXplPSIxMiI+CiAgICA8YS1yYW5nZS1waWNrZXIgdi1tb2RlbDp2YWx1ZT0idmFsdWUxIiA6cmFuZ2VzPSJyYW5nZXMiIC8+CiAgICA8YS1yYW5nZS1waWNrZXIKICAgICAgdi1tb2RlbDp2YWx1ZT0idmFsdWUyIgogICAgICBzdHlsZT0id2lkdGg6IDQwMHB4IgogICAgICA6cmFuZ2VzPSJyYW5nZXMiCiAgICAgIHNob3ctdGltZQogICAgICBmb3JtYXQ9IllZWVkvTU0vREQgSEg6bW06c3MiCiAgICAvPgogIDwvYS1zcGFjZT4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCBkYXlqcywgeyBEYXlqcyB9IGZyb20gJ2RheWpzJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwp0eXBlIFJhbmdlVmFsdWUgPSBbRGF5anMsIERheWpzXTsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIHJldHVybiB7CiAgICAgIHZhbHVlMTogcmVmPFJhbmdlVmFsdWU+KCksCiAgICAgIHZhbHVlMjogcmVmPFJhbmdlVmFsdWU+KCksCiAgICAgIHJhbmdlczogewogICAgICAgIFRvZGF5OiBbZGF5anMoKSwgZGF5anMoKV0gYXMgUmFuZ2VWYWx1ZSwKICAgICAgICAnVGhpcyBNb250aCc6IFtkYXlqcygpLCBkYXlqcygpLmVuZE9mKCdtb250aCcpXSBhcyBSYW5nZVZhbHVlLAogICAgICB9LAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiIDpzaXplPSIxMiI+CiAgICA8YS1yYW5nZS1waWNrZXIgdi1tb2RlbDp2YWx1ZT0idmFsdWUxIiA6cmFuZ2VzPSJyYW5nZXMiIC8+CiAgICA8YS1yYW5nZS1waWNrZXIKICAgICAgdi1tb2RlbDp2YWx1ZT0idmFsdWUyIgogICAgICBzdHlsZT0id2lkdGg6IDQwMHB4IgogICAgICA6cmFuZ2VzPSJyYW5nZXMiCiAgICAgIHNob3ctdGltZQogICAgICBmb3JtYXQ9IllZWVkvTU0vREQgSEg6bW06c3MiCiAgICAvPgogIDwvYS1zcGFjZT4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgcmV0dXJuIHsKICAgICAgdmFsdWUxOiByZWYoKSwKICAgICAgdmFsdWUyOiByZWYoKSwKICAgICAgcmFuZ2VzOiB7CiAgICAgICAgVG9kYXk6IFtkYXlqcygpLCBkYXlqcygpXSwKICAgICAgICAnVGhpcyBNb250aCc6IFtkYXlqcygpLCBkYXlqcygpLmVuZE9mKCdtb250aCcpXSwKICAgICAgfSwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0Pg==",isdemo:!1}},{default:o(()=>[e(i,{direction:"vertical",size:12},{default:o(()=>[e(u,{value:t.value1,"onUpdate:value":s[0]||(s[0]=l=>t.value1=l),ranges:t.ranges},null,8,["value","ranges"]),e(u,{value:t.value2,"onUpdate:value":s[1]||(s[1]=l=>t.value2=l),style:{width:"400px"},ranges:t.ranges,"show-time":"",format:"YYYY/MM/DD HH:mm:ss"},null,8,["value","ranges"])]),_:1})]),htmlCode:o(()=>[Dn]),jsVersionHtml:o(()=>[Fn]),_:1},8,["jsfiddle"])}const Hn=v(Bn,[["render",Xn]]),Nn=y({setup(){const t=k(),s=k(),r=k();return{dates:t,value:s,hackValue:r,disabledDate:i=>{if(!t.value||t.value.length===0)return!1;const d=t.value[0]&&i.diff(t.value[0],"days")>7;return t.value[1]&&t.value[1].diff(i,"days")>7||d},onOpenChange:i=>{i?(t.value=[],r.value=[]):r.value=void 0},onChange:i=>{s.value=i},onCalendarChange:i=>{t.value=i}}}}),Jn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-range-picker")]),a(`
    `),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("hackValue || value"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":disabled-date"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("disabledDate"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onChange"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"@openChange"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onOpenChange"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"@calendarChange"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onCalendarChange"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Dayjs "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'dayjs'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
type RangeValue `),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a("Dayjs"),n("span",{class:"token punctuation"},","),a(" Dayjs"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" dates "),n("span",{class:"token operator"},"="),a(" ref"),n("span",{class:"token operator"},"<"),a("RangeValue"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" value "),n("span",{class:"token operator"},"="),a(" ref"),n("span",{class:"token operator"},"<"),a("RangeValue"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" hackValue "),n("span",{class:"token operator"},"="),a(" ref"),n("span",{class:"token operator"},"<"),a("RangeValue"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"disabledDate"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"current"),n("span",{class:"token operator"},":"),a(" Dayjs")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),a("dates"),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"||"),a(),n("span",{class:"token punctuation"},"("),a("dates"),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token keyword"},"as"),a(" any"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),a("length "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
      `),n("span",{class:"token keyword"},"const"),a(" tooLate "),n("span",{class:"token operator"},"="),a(" dates"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token operator"},"&&"),a(" current"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"diff"),n("span",{class:"token punctuation"},"("),a("dates"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'days'"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},">"),a(),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token keyword"},"const"),a(" tooEarly "),n("span",{class:"token operator"},"="),a(" dates"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token operator"},"&&"),a(" dates"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"diff"),n("span",{class:"token punctuation"},"("),a("current"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'days'"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},">"),a(),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" tooEarly "),n("span",{class:"token operator"},"||"),a(" tooLate"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onOpenChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"open"),n("span",{class:"token operator"},":"),a(" boolean")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("open"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        dates`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token keyword"},"as"),a(" any"),n("span",{class:"token punctuation"},";"),a(`
        hackValue`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token keyword"},"as"),a(" any"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"else"),a(),n("span",{class:"token punctuation"},"{"),a(`
        hackValue`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"undefined"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"val"),n("span",{class:"token operator"},":"),a(" RangeValue")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(" val"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onCalendarChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"val"),n("span",{class:"token operator"},":"),a(" RangeValue")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      dates`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(" val"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      dates`),n("span",{class:"token punctuation"},","),a(`
      value`),n("span",{class:"token punctuation"},","),a(`
      hackValue`),n("span",{class:"token punctuation"},","),a(`
      disabledDate`),n("span",{class:"token punctuation"},","),a(`
      onOpenChange`),n("span",{class:"token punctuation"},","),a(`
      onChange`),n("span",{class:"token punctuation"},","),a(`
      onCalendarChange`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),xn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-range-picker")]),a(`
    `),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("hackValue || value"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":disabled-date"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("disabledDate"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onChange"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"@openChange"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onOpenChange"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"@calendarChange"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onCalendarChange"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" dates "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" hackValue "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"disabledDate"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token parameter"},"current"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),a("dates"),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"||"),a(" dates"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),a("length "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
      `),n("span",{class:"token keyword"},"const"),a(" tooLate "),n("span",{class:"token operator"},"="),a(" dates"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token operator"},"&&"),a(" current"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"diff"),n("span",{class:"token punctuation"},"("),a("dates"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'days'"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},">"),a(),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token keyword"},"const"),a(" tooEarly "),n("span",{class:"token operator"},"="),a(" dates"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token operator"},"&&"),a(" dates"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"diff"),n("span",{class:"token punctuation"},"("),a("current"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'days'"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},">"),a(),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" tooEarly "),n("span",{class:"token operator"},"||"),a(" tooLate"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onOpenChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token parameter"},"open"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("open"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        dates`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
        hackValue`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"else"),a(),n("span",{class:"token punctuation"},"{"),a(`
        hackValue`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"undefined"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token parameter"},"val"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(" val"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onCalendarChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token parameter"},"val"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      dates`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(" val"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      dates`),n("span",{class:"token punctuation"},","),a(`
      value`),n("span",{class:"token punctuation"},","),a(`
      hackValue`),n("span",{class:"token punctuation"},","),a(`
      disabledDate`),n("span",{class:"token punctuation"},","),a(`
      onOpenChange`),n("span",{class:"token punctuation"},","),a(`
      onChange`),n("span",{class:"token punctuation"},","),a(`
      onCalendarChange`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function Kn(t,s,r,g,I,C){const u=c("a-range-picker"),i=c("demo-box");return h(),A(i,{jsfiddle:{us:"A example shows how to select a dynamic range by using `onCalendarChange` and `disabledDate`.",cn:"\u8FD9\u91CC\u4E3E\u4F8B\u5982\u4F55\u7528 `onCalendarChange` \u548C `disabledDate` \u6765\u9650\u5236\u52A8\u6001\u7684\u65E5\u671F\u533A\u95F4\u9009\u62E9\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u8FD9\u91CC\u4E3E\u4F8B\u5982\u4F55\u7528 <code>onCalendarChange</code> \u548C <code>disabledDate</code> \u6765\u9650\u5236\u52A8\u6001\u7684\u65E5\u671F\u533A\u95F4\u9009\u62E9\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>A example shows how to select a dynamic range by using <code>onCalendarChange</code> and <code>disabledDate</code>.</p>
`,order:5,title:{"zh-CN":"\u9009\u62E9\u4E0D\u8D85\u8FC7\u4E03\u5929\u7684\u8303\u56F4","en-US":"Select range dates in 7 days"},relativePath:"components/date-picker/demo/select-in-range.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXJhbmdlLXBpY2tlcgogICAgOnZhbHVlPSJoYWNrVmFsdWUgfHwgdmFsdWUiCiAgICA6ZGlzYWJsZWQtZGF0ZT0iZGlzYWJsZWREYXRlIgogICAgQGNoYW5nZT0ib25DaGFuZ2UiCiAgICBAb3BlbkNoYW5nZT0ib25PcGVuQ2hhbmdlIgogICAgQGNhbGVuZGFyQ2hhbmdlPSJvbkNhbGVuZGFyQ2hhbmdlIgogIC8+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBEYXlqcyB9IGZyb20gJ2RheWpzJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwp0eXBlIFJhbmdlVmFsdWUgPSBbRGF5anMsIERheWpzXTsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IGRhdGVzID0gcmVmPFJhbmdlVmFsdWU+KCk7CiAgICBjb25zdCB2YWx1ZSA9IHJlZjxSYW5nZVZhbHVlPigpOwogICAgY29uc3QgaGFja1ZhbHVlID0gcmVmPFJhbmdlVmFsdWU+KCk7CgogICAgY29uc3QgZGlzYWJsZWREYXRlID0gKGN1cnJlbnQ6IERheWpzKSA9PiB7CiAgICAgIGlmICghZGF0ZXMudmFsdWUgfHwgKGRhdGVzLnZhbHVlIGFzIGFueSkubGVuZ3RoID09PSAwKSB7CiAgICAgICAgcmV0dXJuIGZhbHNlOwogICAgICB9CiAgICAgIGNvbnN0IHRvb0xhdGUgPSBkYXRlcy52YWx1ZVswXSAmJiBjdXJyZW50LmRpZmYoZGF0ZXMudmFsdWVbMF0sICdkYXlzJykgPiA3OwogICAgICBjb25zdCB0b29FYXJseSA9IGRhdGVzLnZhbHVlWzFdICYmIGRhdGVzLnZhbHVlWzFdLmRpZmYoY3VycmVudCwgJ2RheXMnKSA+IDc7CiAgICAgIHJldHVybiB0b29FYXJseSB8fCB0b29MYXRlOwogICAgfTsKCiAgICBjb25zdCBvbk9wZW5DaGFuZ2UgPSAob3BlbjogYm9vbGVhbikgPT4gewogICAgICBpZiAob3BlbikgewogICAgICAgIGRhdGVzLnZhbHVlID0gW10gYXMgYW55OwogICAgICAgIGhhY2tWYWx1ZS52YWx1ZSA9IFtdIGFzIGFueTsKICAgICAgfSBlbHNlIHsKICAgICAgICBoYWNrVmFsdWUudmFsdWUgPSB1bmRlZmluZWQ7CiAgICAgIH0KICAgIH07CgogICAgY29uc3Qgb25DaGFuZ2UgPSAodmFsOiBSYW5nZVZhbHVlKSA9PiB7CiAgICAgIHZhbHVlLnZhbHVlID0gdmFsOwogICAgfTsKCiAgICBjb25zdCBvbkNhbGVuZGFyQ2hhbmdlID0gKHZhbDogUmFuZ2VWYWx1ZSkgPT4gewogICAgICBkYXRlcy52YWx1ZSA9IHZhbDsKICAgIH07CgogICAgcmV0dXJuIHsKICAgICAgZGF0ZXMsCiAgICAgIHZhbHVlLAogICAgICBoYWNrVmFsdWUsCiAgICAgIGRpc2FibGVkRGF0ZSwKICAgICAgb25PcGVuQ2hhbmdlLAogICAgICBvbkNoYW5nZSwKICAgICAgb25DYWxlbmRhckNoYW5nZSwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXJhbmdlLXBpY2tlcgogICAgOnZhbHVlPSJoYWNrVmFsdWUgfHwgdmFsdWUiCiAgICA6ZGlzYWJsZWQtZGF0ZT0iZGlzYWJsZWREYXRlIgogICAgQGNoYW5nZT0ib25DaGFuZ2UiCiAgICBAb3BlbkNoYW5nZT0ib25PcGVuQ2hhbmdlIgogICAgQGNhbGVuZGFyQ2hhbmdlPSJvbkNhbGVuZGFyQ2hhbmdlIgogIC8+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IGRhdGVzID0gcmVmKCk7CiAgICBjb25zdCB2YWx1ZSA9IHJlZigpOwogICAgY29uc3QgaGFja1ZhbHVlID0gcmVmKCk7CiAgICBjb25zdCBkaXNhYmxlZERhdGUgPSBjdXJyZW50ID0+IHsKICAgICAgaWYgKCFkYXRlcy52YWx1ZSB8fCBkYXRlcy52YWx1ZS5sZW5ndGggPT09IDApIHsKICAgICAgICByZXR1cm4gZmFsc2U7CiAgICAgIH0KICAgICAgY29uc3QgdG9vTGF0ZSA9IGRhdGVzLnZhbHVlWzBdICYmIGN1cnJlbnQuZGlmZihkYXRlcy52YWx1ZVswXSwgJ2RheXMnKSA+IDc7CiAgICAgIGNvbnN0IHRvb0Vhcmx5ID0gZGF0ZXMudmFsdWVbMV0gJiYgZGF0ZXMudmFsdWVbMV0uZGlmZihjdXJyZW50LCAnZGF5cycpID4gNzsKICAgICAgcmV0dXJuIHRvb0Vhcmx5IHx8IHRvb0xhdGU7CiAgICB9OwogICAgY29uc3Qgb25PcGVuQ2hhbmdlID0gb3BlbiA9PiB7CiAgICAgIGlmIChvcGVuKSB7CiAgICAgICAgZGF0ZXMudmFsdWUgPSBbXTsKICAgICAgICBoYWNrVmFsdWUudmFsdWUgPSBbXTsKICAgICAgfSBlbHNlIHsKICAgICAgICBoYWNrVmFsdWUudmFsdWUgPSB1bmRlZmluZWQ7CiAgICAgIH0KICAgIH07CiAgICBjb25zdCBvbkNoYW5nZSA9IHZhbCA9PiB7CiAgICAgIHZhbHVlLnZhbHVlID0gdmFsOwogICAgfTsKICAgIGNvbnN0IG9uQ2FsZW5kYXJDaGFuZ2UgPSB2YWwgPT4gewogICAgICBkYXRlcy52YWx1ZSA9IHZhbDsKICAgIH07CiAgICByZXR1cm4gewogICAgICBkYXRlcywKICAgICAgdmFsdWUsCiAgICAgIGhhY2tWYWx1ZSwKICAgICAgZGlzYWJsZWREYXRlLAogICAgICBvbk9wZW5DaGFuZ2UsCiAgICAgIG9uQ2hhbmdlLAogICAgICBvbkNhbGVuZGFyQ2hhbmdlLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+",isdemo:!1}},{default:o(()=>[e(u,{value:t.hackValue||t.value,"disabled-date":t.disabledDate,onChange:t.onChange,onOpenChange:t.onOpenChange,onCalendarChange:t.onCalendarChange},null,8,["value","disabled-date","onChange","onOpenChange","onCalendarChange"])]),htmlCode:o(()=>[Jn]),jsVersionHtml:o(()=>[xn]),_:1},8,["jsfiddle"])}const zn=v(Nn,[["render",Kn]]),Un=y({setup(){return{size:k("default")}}}),Tn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),a(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("vertical"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("12"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-radio-group")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("size"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-radio-button")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("large"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Large"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-radio-button")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-radio-button")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("default"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Default"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-radio-button")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-radio-button")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("small"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Small"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-radio-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-radio-group")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("size"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("size"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Select Month"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"picker"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("month"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-range-picker")]),a(),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("size"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("size"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Select Week"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"picker"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("week"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"size"),n("span",{class:"token operator"},":"),a(" ref"),n("span",{class:"token operator"},"<"),a("any"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'default'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),Ln=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),a(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("vertical"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("12"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-radio-group")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("size"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-radio-button")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("large"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Large"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-radio-button")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-radio-button")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("default"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Default"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-radio-button")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-radio-button")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("small"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Small"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-radio-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-radio-group")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("size"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("size"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Select Month"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"picker"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("month"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-range-picker")]),a(),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("size"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("size"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Select Week"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"picker"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("week"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"size"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'default'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function En(t,s,r,g,I,C){const u=c("a-radio-button"),i=c("a-radio-group"),d=c("a-date-picker"),l=c("a-range-picker"),p=c("a-space"),f=c("demo-box");return h(),A(f,{jsfiddle:{us:"The input box comes in three sizes. `default` will be used if `size` is omitted.",cn:"\u4E09\u79CD\u5927\u5C0F\u7684\u8F93\u5165\u6846\uFF0C\u82E5\u4E0D\u8BBE\u7F6E\uFF0C\u5219\u4E3A `default`\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u4E09\u79CD\u5927\u5C0F\u7684\u8F93\u5165\u6846\uFF0C\u82E5\u4E0D\u8BBE\u7F6E\uFF0C\u5219\u4E3A <code>default</code>\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>The input box comes in three sizes. <code>default</code> will be used if <code>size</code> is omitted.</p>
`,order:8,title:{"zh-CN":"\u4E09\u79CD\u5927\u5C0F","en-US":"Three Sizes"},relativePath:"components/date-picker/demo/size.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiIDpzaXplPSIxMiI+CiAgICA8YS1yYWRpby1ncm91cCB2LW1vZGVsOnZhbHVlPSJzaXplIj4KICAgICAgPGEtcmFkaW8tYnV0dG9uIHZhbHVlPSJsYXJnZSI+TGFyZ2U8L2EtcmFkaW8tYnV0dG9uPgogICAgICA8YS1yYWRpby1idXR0b24gdmFsdWU9ImRlZmF1bHQiPkRlZmF1bHQ8L2EtcmFkaW8tYnV0dG9uPgogICAgICA8YS1yYWRpby1idXR0b24gdmFsdWU9InNtYWxsIj5TbWFsbDwvYS1yYWRpby1idXR0b24+CiAgICA8L2EtcmFkaW8tZ3JvdXA+CiAgICA8YS1kYXRlLXBpY2tlciA6c2l6ZT0ic2l6ZSIgLz4KICAgIDxhLWRhdGUtcGlja2VyIDpzaXplPSJzaXplIiBwbGFjZWhvbGRlcj0iU2VsZWN0IE1vbnRoIiBwaWNrZXI9Im1vbnRoIiAvPgogICAgPGEtcmFuZ2UtcGlja2VyIDpzaXplPSJzaXplIiAvPgogICAgPGEtZGF0ZS1waWNrZXIgOnNpemU9InNpemUiIHBsYWNlaG9sZGVyPSJTZWxlY3QgV2VlayIgcGlja2VyPSJ3ZWVrIiAvPgogIDwvYS1zcGFjZT4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIHJldHVybiB7CiAgICAgIHNpemU6IHJlZjxhbnk+KCdkZWZhdWx0JyksCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiIDpzaXplPSIxMiI+CiAgICA8YS1yYWRpby1ncm91cCB2LW1vZGVsOnZhbHVlPSJzaXplIj4KICAgICAgPGEtcmFkaW8tYnV0dG9uIHZhbHVlPSJsYXJnZSI+TGFyZ2U8L2EtcmFkaW8tYnV0dG9uPgogICAgICA8YS1yYWRpby1idXR0b24gdmFsdWU9ImRlZmF1bHQiPkRlZmF1bHQ8L2EtcmFkaW8tYnV0dG9uPgogICAgICA8YS1yYWRpby1idXR0b24gdmFsdWU9InNtYWxsIj5TbWFsbDwvYS1yYWRpby1idXR0b24+CiAgICA8L2EtcmFkaW8tZ3JvdXA+CiAgICA8YS1kYXRlLXBpY2tlciA6c2l6ZT0ic2l6ZSIgLz4KICAgIDxhLWRhdGUtcGlja2VyIDpzaXplPSJzaXplIiBwbGFjZWhvbGRlcj0iU2VsZWN0IE1vbnRoIiBwaWNrZXI9Im1vbnRoIiAvPgogICAgPGEtcmFuZ2UtcGlja2VyIDpzaXplPSJzaXplIiAvPgogICAgPGEtZGF0ZS1waWNrZXIgOnNpemU9InNpemUiIHBsYWNlaG9sZGVyPSJTZWxlY3QgV2VlayIgcGlja2VyPSJ3ZWVrIiAvPgogIDwvYS1zcGFjZT4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgcmV0dXJuIHsKICAgICAgc2l6ZTogcmVmKCdkZWZhdWx0JyksCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4=",isdemo:!1}},{default:o(()=>[e(p,{direction:"vertical",size:12},{default:o(()=>[e(i,{value:t.size,"onUpdate:value":s[0]||(s[0]=Z=>t.size=Z)},{default:o(()=>[e(u,{value:"large"},{default:o(()=>[a("Large")]),_:1}),e(u,{value:"default"},{default:o(()=>[a("Default")]),_:1}),e(u,{value:"small"},{default:o(()=>[a("Small")]),_:1})]),_:1},8,["value"]),e(d,{size:t.size},null,8,["size"]),e(d,{size:t.size,placeholder:"Select Month",picker:"month"},null,8,["size"]),e(l,{size:t.size},null,8,["size"]),e(d,{size:t.size,placeholder:"Select Week",picker:"week"},null,8,["size"])]),_:1})]),htmlCode:o(()=>[Tn]),jsVersionHtml:o(()=>[Ln]),_:1},8,["jsfiddle"])}const qn=v(Un,[["render",En]]),Qn=y({setup(){return{type:k("time")}}}),Mn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),a(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("vertical"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("12"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("type"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select-option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("time"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Time"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select-option")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select-option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("date"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Date"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select-option")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select-option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("week"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Week"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select-option")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select-option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("month"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Month"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select-option")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select-option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("quarter"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Quarter"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select-option")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select-option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("year"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Year"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select-option")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("type === 'time'"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-time-picker")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"v-else"),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},":picker"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("type"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),a(" ref"),n("span",{class:"token operator"},"<"),a("any"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'time'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),_n=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),a(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("vertical"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("12"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("type"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select-option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("time"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Time"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select-option")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select-option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("date"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Date"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select-option")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select-option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("week"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Week"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select-option")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select-option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("month"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Month"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select-option")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select-option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("quarter"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Quarter"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select-option")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select-option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("year"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Year"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select-option")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("type === 'time'"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-time-picker")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"v-else"),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},":picker"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("type"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'time'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function On(t,s,r,g,I,C){const u=c("a-select-option"),i=c("a-select"),d=c("a-time-picker"),l=c("a-date-picker"),p=c("a-space"),f=c("demo-box");return h(),A(f,{jsfiddle:{us:"Switch in different types of pickers by Select.",cn:"\u63D0\u4F9B\u9009\u62E9\u5668\uFF0C\u81EA\u7531\u5207\u6362\u4E0D\u540C\u7C7B\u578B\u7684\u65E5\u671F\u9009\u62E9\u5668\uFF0C\u5E38\u7528\u4E8E\u65E5\u671F\u7B5B\u9009\u573A\u5408\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u63D0\u4F9B\u9009\u62E9\u5668\uFF0C\u81EA\u7531\u5207\u6362\u4E0D\u540C\u7C7B\u578B\u7684\u65E5\u671F\u9009\u62E9\u5668\uFF0C\u5E38\u7528\u4E8E\u65E5\u671F\u7B5B\u9009\u573A\u5408\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Switch in different types of pickers by Select.</p>
`,order:1.1,title:{"zh-CN":"\u5207\u6362\u4E0D\u540C\u7684\u9009\u62E9\u5668","en-US":"Switchable picker"},relativePath:"components/date-picker/demo/switchable.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiIDpzaXplPSIxMiI+CiAgICA8YS1zZWxlY3Qgdi1tb2RlbDp2YWx1ZT0idHlwZSI+CiAgICAgIDxhLXNlbGVjdC1vcHRpb24gdmFsdWU9InRpbWUiPlRpbWU8L2Etc2VsZWN0LW9wdGlvbj4KICAgICAgPGEtc2VsZWN0LW9wdGlvbiB2YWx1ZT0iZGF0ZSI+RGF0ZTwvYS1zZWxlY3Qtb3B0aW9uPgogICAgICA8YS1zZWxlY3Qtb3B0aW9uIHZhbHVlPSJ3ZWVrIj5XZWVrPC9hLXNlbGVjdC1vcHRpb24+CiAgICAgIDxhLXNlbGVjdC1vcHRpb24gdmFsdWU9Im1vbnRoIj5Nb250aDwvYS1zZWxlY3Qtb3B0aW9uPgogICAgICA8YS1zZWxlY3Qtb3B0aW9uIHZhbHVlPSJxdWFydGVyIj5RdWFydGVyPC9hLXNlbGVjdC1vcHRpb24+CiAgICAgIDxhLXNlbGVjdC1vcHRpb24gdmFsdWU9InllYXIiPlllYXI8L2Etc2VsZWN0LW9wdGlvbj4KICAgIDwvYS1zZWxlY3Q+CiAgICA8dGVtcGxhdGUgdi1pZj0idHlwZSA9PT0gJ3RpbWUnIj4KICAgICAgPGEtdGltZS1waWNrZXIgLz4KICAgIDwvdGVtcGxhdGU+CiAgICA8dGVtcGxhdGUgdi1lbHNlPgogICAgICA8YS1kYXRlLXBpY2tlciA6cGlja2VyPSJ0eXBlIiAvPgogICAgPC90ZW1wbGF0ZT4KICA8L2Etc3BhY2U+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICByZXR1cm4gewogICAgICB0eXBlOiByZWY8YW55PigndGltZScpLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiIDpzaXplPSIxMiI+CiAgICA8YS1zZWxlY3Qgdi1tb2RlbDp2YWx1ZT0idHlwZSI+CiAgICAgIDxhLXNlbGVjdC1vcHRpb24gdmFsdWU9InRpbWUiPlRpbWU8L2Etc2VsZWN0LW9wdGlvbj4KICAgICAgPGEtc2VsZWN0LW9wdGlvbiB2YWx1ZT0iZGF0ZSI+RGF0ZTwvYS1zZWxlY3Qtb3B0aW9uPgogICAgICA8YS1zZWxlY3Qtb3B0aW9uIHZhbHVlPSJ3ZWVrIj5XZWVrPC9hLXNlbGVjdC1vcHRpb24+CiAgICAgIDxhLXNlbGVjdC1vcHRpb24gdmFsdWU9Im1vbnRoIj5Nb250aDwvYS1zZWxlY3Qtb3B0aW9uPgogICAgICA8YS1zZWxlY3Qtb3B0aW9uIHZhbHVlPSJxdWFydGVyIj5RdWFydGVyPC9hLXNlbGVjdC1vcHRpb24+CiAgICAgIDxhLXNlbGVjdC1vcHRpb24gdmFsdWU9InllYXIiPlllYXI8L2Etc2VsZWN0LW9wdGlvbj4KICAgIDwvYS1zZWxlY3Q+CiAgICA8dGVtcGxhdGUgdi1pZj0idHlwZSA9PT0gJ3RpbWUnIj4KICAgICAgPGEtdGltZS1waWNrZXIgLz4KICAgIDwvdGVtcGxhdGU+CiAgICA8dGVtcGxhdGUgdi1lbHNlPgogICAgICA8YS1kYXRlLXBpY2tlciA6cGlja2VyPSJ0eXBlIiAvPgogICAgPC90ZW1wbGF0ZT4KICA8L2Etc3BhY2U+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIHJldHVybiB7CiAgICAgIHR5cGU6IHJlZigndGltZScpLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+",isdemo:!1}},{default:o(()=>[e(p,{direction:"vertical",size:12},{default:o(()=>[e(i,{value:t.type,"onUpdate:value":s[0]||(s[0]=Z=>t.type=Z)},{default:o(()=>[e(u,{value:"time"},{default:o(()=>[a("Time")]),_:1}),e(u,{value:"date"},{default:o(()=>[a("Date")]),_:1}),e(u,{value:"week"},{default:o(()=>[a("Week")]),_:1}),e(u,{value:"month"},{default:o(()=>[a("Month")]),_:1}),e(u,{value:"quarter"},{default:o(()=>[a("Quarter")]),_:1}),e(u,{value:"year"},{default:o(()=>[a("Year")]),_:1})]),_:1},8,["value"]),t.type==="time"?(h(),A(d,{key:0})):(h(),A(l,{key:1,picker:t.type},null,8,["picker"]))]),_:1})]),htmlCode:o(()=>[Mn]),jsVersionHtml:o(()=>[_n]),_:1},8,["jsfiddle"])}const $n=v(Qn,[["render",On]]),na=y({setup(){return{onChange:(I,C)=>{console.log("Selected Time: ",I),console.log("Formatted Selected Time: ",C)},onOk:I=>{console.log("onOk: ",I)},onRangeChange:(I,C)=>{console.log("Selected Time: ",I),console.log("Formatted Selected Time: ",C)},onRangeOk:I=>{console.log("onOk: ",I)}}}}),aa=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),a(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("vertical"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("12"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},"show-time"),a(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Select Time"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onChange"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@ok"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onOk"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-range-picker")]),a(`
      `),n("span",{class:"token attr-name"},":show-time"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{ format: 'HH:mm' }"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"format"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("YYYY-MM-DD HH:mm"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("['Start Time', 'End Time']"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onRangeChange"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"@ok"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onRangeOk"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Dayjs "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'dayjs'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(" Dayjs"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"dateString"),n("span",{class:"token operator"},":"),a(" string")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Selected Time: '"),n("span",{class:"token punctuation"},","),a(" value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Formatted Selected Time: '"),n("span",{class:"token punctuation"},","),a(" dateString"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onOk"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(" Dayjs")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'onOk: '"),n("span",{class:"token punctuation"},","),a(" value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onRangeChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a("Dayjs"),n("span",{class:"token punctuation"},","),a(" Dayjs"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"dateString"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a("string"),n("span",{class:"token punctuation"},","),a(" string"),n("span",{class:"token punctuation"},"]")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Selected Time: '"),n("span",{class:"token punctuation"},","),a(" value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Formatted Selected Time: '"),n("span",{class:"token punctuation"},","),a(" dateString"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onRangeOk"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a("Dayjs"),n("span",{class:"token punctuation"},","),a(" Dayjs"),n("span",{class:"token punctuation"},"]")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'onOk: '"),n("span",{class:"token punctuation"},","),a(" value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      onChange`),n("span",{class:"token punctuation"},","),a(`
      onOk`),n("span",{class:"token punctuation"},","),a(`
      onRangeChange`),n("span",{class:"token punctuation"},","),a(`
      onRangeOk`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),ta=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),a(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("vertical"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("12"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},"show-time"),a(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Select Time"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onChange"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@ok"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onOk"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-range-picker")]),a(`
      `),n("span",{class:"token attr-name"},":show-time"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{ format: 'HH:mm' }"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"format"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("YYYY-MM-DD HH:mm"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("['Start Time', 'End Time']"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onRangeChange"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"@ok"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onRangeOk"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("value"),n("span",{class:"token punctuation"},","),a(" dateString")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Selected Time: '"),n("span",{class:"token punctuation"},","),a(" value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Formatted Selected Time: '"),n("span",{class:"token punctuation"},","),a(" dateString"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onOk"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token parameter"},"value"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'onOk: '"),n("span",{class:"token punctuation"},","),a(" value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onRangeChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("value"),n("span",{class:"token punctuation"},","),a(" dateString")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Selected Time: '"),n("span",{class:"token punctuation"},","),a(" value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Formatted Selected Time: '"),n("span",{class:"token punctuation"},","),a(" dateString"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onRangeOk"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token parameter"},"value"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'onOk: '"),n("span",{class:"token punctuation"},","),a(" value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      onChange`),n("span",{class:"token punctuation"},","),a(`
      onOk`),n("span",{class:"token punctuation"},","),a(`
      onRangeChange`),n("span",{class:"token punctuation"},","),a(`
      onRangeOk`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function sa(t,s,r,g,I,C){const u=c("a-date-picker"),i=c("a-range-picker"),d=c("a-space"),l=c("demo-box");return h(),A(l,{jsfiddle:{us:"This property provide an additional time selection. When `showTime` is an Object, its properties will be passed on to built-in `TimePicker`.",cn:"\u589E\u52A0\u9009\u62E9\u65F6\u95F4\u529F\u80FD\uFF0C\u5F53 `showTime` \u4E3A\u4E00\u4E2A\u5BF9\u8C61\u65F6\uFF0C\u5176\u5C5E\u6027\u4F1A\u4F20\u9012\u7ED9\u5185\u5EFA\u7684 `TimePicker`\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u589E\u52A0\u9009\u62E9\u65F6\u95F4\u529F\u80FD\uFF0C\u5F53 <code>showTime</code> \u4E3A\u4E00\u4E2A\u5BF9\u8C61\u65F6\uFF0C\u5176\u5C5E\u6027\u4F1A\u4F20\u9012\u7ED9\u5185\u5EFA\u7684 <code>TimePicker</code>\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>This property provide an additional time selection. When <code>showTime</code> is an Object, its properties will be passed on to built-in <code>TimePicker</code>.</p>
`,order:2,title:{"zh-CN":"\u65E5\u671F\u65F6\u95F4\u9009\u62E9","en-US":"Choose Time"},relativePath:"components/date-picker/demo/time.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiIDpzaXplPSIxMiI+CiAgICA8YS1kYXRlLXBpY2tlciBzaG93LXRpbWUgcGxhY2Vob2xkZXI9IlNlbGVjdCBUaW1lIiBAY2hhbmdlPSJvbkNoYW5nZSIgQG9rPSJvbk9rIiAvPgogICAgPGEtcmFuZ2UtcGlja2VyCiAgICAgIDpzaG93LXRpbWU9InsgZm9ybWF0OiAnSEg6bW0nIH0iCiAgICAgIGZvcm1hdD0iWVlZWS1NTS1ERCBISDptbSIKICAgICAgOnBsYWNlaG9sZGVyPSJbJ1N0YXJ0IFRpbWUnLCAnRW5kIFRpbWUnXSIKICAgICAgQGNoYW5nZT0ib25SYW5nZUNoYW5nZSIKICAgICAgQG9rPSJvblJhbmdlT2siCiAgICAvPgogIDwvYS1zcGFjZT4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB7IERheWpzIH0gZnJvbSAnZGF5anMnOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3Qgb25DaGFuZ2UgPSAodmFsdWU6IERheWpzLCBkYXRlU3RyaW5nOiBzdHJpbmcpID0+IHsKICAgICAgY29uc29sZS5sb2coJ1NlbGVjdGVkIFRpbWU6ICcsIHZhbHVlKTsKICAgICAgY29uc29sZS5sb2coJ0Zvcm1hdHRlZCBTZWxlY3RlZCBUaW1lOiAnLCBkYXRlU3RyaW5nKTsKICAgIH07CgogICAgY29uc3Qgb25PayA9ICh2YWx1ZTogRGF5anMpID0+IHsKICAgICAgY29uc29sZS5sb2coJ29uT2s6ICcsIHZhbHVlKTsKICAgIH07CgogICAgY29uc3Qgb25SYW5nZUNoYW5nZSA9ICh2YWx1ZTogW0RheWpzLCBEYXlqc10sIGRhdGVTdHJpbmc6IFtzdHJpbmcsIHN0cmluZ10pID0+IHsKICAgICAgY29uc29sZS5sb2coJ1NlbGVjdGVkIFRpbWU6ICcsIHZhbHVlKTsKICAgICAgY29uc29sZS5sb2coJ0Zvcm1hdHRlZCBTZWxlY3RlZCBUaW1lOiAnLCBkYXRlU3RyaW5nKTsKICAgIH07CgogICAgY29uc3Qgb25SYW5nZU9rID0gKHZhbHVlOiBbRGF5anMsIERheWpzXSkgPT4gewogICAgICBjb25zb2xlLmxvZygnb25PazogJywgdmFsdWUpOwogICAgfTsKCiAgICByZXR1cm4gewogICAgICBvbkNoYW5nZSwKICAgICAgb25PaywKICAgICAgb25SYW5nZUNoYW5nZSwKICAgICAgb25SYW5nZU9rLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiIDpzaXplPSIxMiI+CiAgICA8YS1kYXRlLXBpY2tlciBzaG93LXRpbWUgcGxhY2Vob2xkZXI9IlNlbGVjdCBUaW1lIiBAY2hhbmdlPSJvbkNoYW5nZSIgQG9rPSJvbk9rIiAvPgogICAgPGEtcmFuZ2UtcGlja2VyCiAgICAgIDpzaG93LXRpbWU9InsgZm9ybWF0OiAnSEg6bW0nIH0iCiAgICAgIGZvcm1hdD0iWVlZWS1NTS1ERCBISDptbSIKICAgICAgOnBsYWNlaG9sZGVyPSJbJ1N0YXJ0IFRpbWUnLCAnRW5kIFRpbWUnXSIKICAgICAgQGNoYW5nZT0ib25SYW5nZUNoYW5nZSIKICAgICAgQG9rPSJvblJhbmdlT2siCiAgICAvPgogIDwvYS1zcGFjZT4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IG9uQ2hhbmdlID0gKHZhbHVlLCBkYXRlU3RyaW5nKSA9PiB7CiAgICAgIGNvbnNvbGUubG9nKCdTZWxlY3RlZCBUaW1lOiAnLCB2YWx1ZSk7CiAgICAgIGNvbnNvbGUubG9nKCdGb3JtYXR0ZWQgU2VsZWN0ZWQgVGltZTogJywgZGF0ZVN0cmluZyk7CiAgICB9OwogICAgY29uc3Qgb25PayA9IHZhbHVlID0+IHsKICAgICAgY29uc29sZS5sb2coJ29uT2s6ICcsIHZhbHVlKTsKICAgIH07CiAgICBjb25zdCBvblJhbmdlQ2hhbmdlID0gKHZhbHVlLCBkYXRlU3RyaW5nKSA9PiB7CiAgICAgIGNvbnNvbGUubG9nKCdTZWxlY3RlZCBUaW1lOiAnLCB2YWx1ZSk7CiAgICAgIGNvbnNvbGUubG9nKCdGb3JtYXR0ZWQgU2VsZWN0ZWQgVGltZTogJywgZGF0ZVN0cmluZyk7CiAgICB9OwogICAgY29uc3Qgb25SYW5nZU9rID0gdmFsdWUgPT4gewogICAgICBjb25zb2xlLmxvZygnb25PazogJywgdmFsdWUpOwogICAgfTsKICAgIHJldHVybiB7CiAgICAgIG9uQ2hhbmdlLAogICAgICBvbk9rLAogICAgICBvblJhbmdlQ2hhbmdlLAogICAgICBvblJhbmdlT2ssCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4=",isdemo:!1}},{default:o(()=>[e(d,{direction:"vertical",size:12},{default:o(()=>[e(u,{"show-time":"",placeholder:"Select Time",onChange:t.onChange,onOk:t.onOk},null,8,["onChange","onOk"]),e(i,{"show-time":{format:"HH:mm"},format:"YYYY-MM-DD HH:mm",placeholder:["Start Time","End Time"],onChange:t.onRangeChange,onOk:t.onRangeOk},null,8,["onChange","onOk"])]),_:1})]),htmlCode:o(()=>[aa]),jsVersionHtml:o(()=>[ta]),_:1},8,["jsfiddle"])}const ea=v(na,[["render",sa]]),oa=y({components:{SmileOutlined:U},setup(){return{onChange:(r,g)=>{console.log(r,g)},onRangeChange:(r,g)=>{console.log(r,g)}}}}),ca=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),a(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("vertical"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onChange"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#suffixIcon"),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("SmileOutlined")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-date-picker")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Select month"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"picker"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("month"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onChange"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#suffixIcon"),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("SmileOutlined")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-date-picker")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-range-picker")]),a(),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onRangeChange"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#suffixIcon"),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("SmileOutlined")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-range-picker")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Select week"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"picker"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("week"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onChange"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#suffixIcon"),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("SmileOutlined")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-date-picker")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},"suffix-icon"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ab"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onChange"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},"suffix-icon"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ab"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Select month"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"picker"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("month"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onChange"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-range-picker")]),a(),n("span",{class:"token attr-name"},"suffix-icon"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ab"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onRangeChange"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},"suffix-icon"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ab"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Select week"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"picker"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("week"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onChange"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" SmileOutlined "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Dayjs "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'dayjs'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    SmileOutlined`),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(" Dayjs "),n("span",{class:"token operator"},"|"),a(" string"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"dateString"),n("span",{class:"token operator"},":"),a(" string")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("date"),n("span",{class:"token punctuation"},","),a(" dateString"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onRangeChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a("Dayjs"),n("span",{class:"token punctuation"},","),a(" Dayjs"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"dateString"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a("string"),n("span",{class:"token punctuation"},","),a(" string"),n("span",{class:"token punctuation"},"]")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("date"),n("span",{class:"token punctuation"},","),a(" dateString"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      onChange`),n("span",{class:"token punctuation"},","),a(`
      onRangeChange`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),pa=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),a(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("vertical"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onChange"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#suffixIcon"),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("SmileOutlined")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-date-picker")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Select month"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"picker"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("month"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onChange"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#suffixIcon"),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("SmileOutlined")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-date-picker")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-range-picker")]),a(),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onRangeChange"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#suffixIcon"),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("SmileOutlined")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-range-picker")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Select week"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"picker"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("week"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onChange"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#suffixIcon"),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("SmileOutlined")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-date-picker")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},"suffix-icon"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ab"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onChange"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},"suffix-icon"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ab"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Select month"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"picker"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("month"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onChange"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-range-picker")]),a(),n("span",{class:"token attr-name"},"suffix-icon"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ab"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onRangeChange"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},"suffix-icon"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ab"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Select week"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"picker"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("week"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onChange"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" SmileOutlined "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    SmileOutlined`),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("date"),n("span",{class:"token punctuation"},","),a(" dateString")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("date"),n("span",{class:"token punctuation"},","),a(" dateString"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onRangeChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("date"),n("span",{class:"token punctuation"},","),a(" dateString")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("date"),n("span",{class:"token punctuation"},","),a(" dateString"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      onChange`),n("span",{class:"token punctuation"},","),a(`
      onRangeChange`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function la(t,s,r,g,I,C){const u=c("SmileOutlined"),i=c("a-date-picker"),d=c("a-range-picker"),l=c("a-space"),p=c("demo-box");return h(),A(p,{jsfiddle:{us:"Customize the suffix icon through `suffixIcon`",cn:"\u901A\u8FC7 `suffixIcon` \u81EA\u5B9A\u4E49\u540E\u7F00\u56FE\u6807",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u901A\u8FC7 <code>suffixIcon</code> \u81EA\u5B9A\u4E49\u540E\u7F00\u56FE\u6807</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Customize the suffix icon through <code>suffixIcon</code></p>
`,order:13,title:{"zh-CN":"\u540E\u7F00\u56FE\u6807","en-US":"Suffix"},relativePath:"components/date-picker/demo/suffix.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiPgogICAgPGEtZGF0ZS1waWNrZXIgQGNoYW5nZT0ib25DaGFuZ2UiPgogICAgICA8dGVtcGxhdGUgI3N1ZmZpeEljb24+CiAgICAgICAgPFNtaWxlT3V0bGluZWQgLz4KICAgICAgPC90ZW1wbGF0ZT4KICAgIDwvYS1kYXRlLXBpY2tlcj4KICAgIDxhLWRhdGUtcGlja2VyIHBsYWNlaG9sZGVyPSJTZWxlY3QgbW9udGgiIHBpY2tlcj0ibW9udGgiIEBjaGFuZ2U9Im9uQ2hhbmdlIj4KICAgICAgPHRlbXBsYXRlICNzdWZmaXhJY29uPgogICAgICAgIDxTbWlsZU91dGxpbmVkIC8+CiAgICAgIDwvdGVtcGxhdGU+CiAgICA8L2EtZGF0ZS1waWNrZXI+CiAgICA8YS1yYW5nZS1waWNrZXIgQGNoYW5nZT0ib25SYW5nZUNoYW5nZSI+CiAgICAgIDx0ZW1wbGF0ZSAjc3VmZml4SWNvbj4KICAgICAgICA8U21pbGVPdXRsaW5lZCAvPgogICAgICA8L3RlbXBsYXRlPgogICAgPC9hLXJhbmdlLXBpY2tlcj4KICAgIDxhLWRhdGUtcGlja2VyIHBsYWNlaG9sZGVyPSJTZWxlY3Qgd2VlayIgcGlja2VyPSJ3ZWVrIiBAY2hhbmdlPSJvbkNoYW5nZSI+CiAgICAgIDx0ZW1wbGF0ZSAjc3VmZml4SWNvbj4KICAgICAgICA8U21pbGVPdXRsaW5lZCAvPgogICAgICA8L3RlbXBsYXRlPgogICAgPC9hLWRhdGUtcGlja2VyPgogICAgPGEtZGF0ZS1waWNrZXIgc3VmZml4LWljb249ImFiIiBAY2hhbmdlPSJvbkNoYW5nZSIgLz4KICAgIDxhLWRhdGUtcGlja2VyIHN1ZmZpeC1pY29uPSJhYiIgcGxhY2Vob2xkZXI9IlNlbGVjdCBtb250aCIgcGlja2VyPSJtb250aCIgQGNoYW5nZT0ib25DaGFuZ2UiIC8+CiAgICA8YS1yYW5nZS1waWNrZXIgc3VmZml4LWljb249ImFiIiBAY2hhbmdlPSJvblJhbmdlQ2hhbmdlIiAvPgogICAgPGEtZGF0ZS1waWNrZXIgc3VmZml4LWljb249ImFiIiBwbGFjZWhvbGRlcj0iU2VsZWN0IHdlZWsiIHBpY2tlcj0id2VlayIgQGNoYW5nZT0ib25DaGFuZ2UiIC8+CiAgPC9hLXNwYWNlPgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHsgU21pbGVPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLXZ1ZSc7CmltcG9ydCB7IERheWpzIH0gZnJvbSAnZGF5anMnOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIGNvbXBvbmVudHM6IHsKICAgIFNtaWxlT3V0bGluZWQsCiAgfSwKICBzZXR1cCgpIHsKICAgIGNvbnN0IG9uQ2hhbmdlID0gKGRhdGU6IERheWpzIHwgc3RyaW5nLCBkYXRlU3RyaW5nOiBzdHJpbmcpID0+IHsKICAgICAgY29uc29sZS5sb2coZGF0ZSwgZGF0ZVN0cmluZyk7CiAgICB9OwoKICAgIGNvbnN0IG9uUmFuZ2VDaGFuZ2UgPSAoZGF0ZTogW0RheWpzLCBEYXlqc10sIGRhdGVTdHJpbmc6IFtzdHJpbmcsIHN0cmluZ10pID0+IHsKICAgICAgY29uc29sZS5sb2coZGF0ZSwgZGF0ZVN0cmluZyk7CiAgICB9OwogICAgcmV0dXJuIHsKICAgICAgb25DaGFuZ2UsCiAgICAgIG9uUmFuZ2VDaGFuZ2UsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiPgogICAgPGEtZGF0ZS1waWNrZXIgQGNoYW5nZT0ib25DaGFuZ2UiPgogICAgICA8dGVtcGxhdGUgI3N1ZmZpeEljb24+CiAgICAgICAgPFNtaWxlT3V0bGluZWQgLz4KICAgICAgPC90ZW1wbGF0ZT4KICAgIDwvYS1kYXRlLXBpY2tlcj4KICAgIDxhLWRhdGUtcGlja2VyIHBsYWNlaG9sZGVyPSJTZWxlY3QgbW9udGgiIHBpY2tlcj0ibW9udGgiIEBjaGFuZ2U9Im9uQ2hhbmdlIj4KICAgICAgPHRlbXBsYXRlICNzdWZmaXhJY29uPgogICAgICAgIDxTbWlsZU91dGxpbmVkIC8+CiAgICAgIDwvdGVtcGxhdGU+CiAgICA8L2EtZGF0ZS1waWNrZXI+CiAgICA8YS1yYW5nZS1waWNrZXIgQGNoYW5nZT0ib25SYW5nZUNoYW5nZSI+CiAgICAgIDx0ZW1wbGF0ZSAjc3VmZml4SWNvbj4KICAgICAgICA8U21pbGVPdXRsaW5lZCAvPgogICAgICA8L3RlbXBsYXRlPgogICAgPC9hLXJhbmdlLXBpY2tlcj4KICAgIDxhLWRhdGUtcGlja2VyIHBsYWNlaG9sZGVyPSJTZWxlY3Qgd2VlayIgcGlja2VyPSJ3ZWVrIiBAY2hhbmdlPSJvbkNoYW5nZSI+CiAgICAgIDx0ZW1wbGF0ZSAjc3VmZml4SWNvbj4KICAgICAgICA8U21pbGVPdXRsaW5lZCAvPgogICAgICA8L3RlbXBsYXRlPgogICAgPC9hLWRhdGUtcGlja2VyPgogICAgPGEtZGF0ZS1waWNrZXIgc3VmZml4LWljb249ImFiIiBAY2hhbmdlPSJvbkNoYW5nZSIgLz4KICAgIDxhLWRhdGUtcGlja2VyIHN1ZmZpeC1pY29uPSJhYiIgcGxhY2Vob2xkZXI9IlNlbGVjdCBtb250aCIgcGlja2VyPSJtb250aCIgQGNoYW5nZT0ib25DaGFuZ2UiIC8+CiAgICA8YS1yYW5nZS1waWNrZXIgc3VmZml4LWljb249ImFiIiBAY2hhbmdlPSJvblJhbmdlQ2hhbmdlIiAvPgogICAgPGEtZGF0ZS1waWNrZXIgc3VmZml4LWljb249ImFiIiBwbGFjZWhvbGRlcj0iU2VsZWN0IHdlZWsiIHBpY2tlcj0id2VlayIgQGNoYW5nZT0ib25DaGFuZ2UiIC8+CiAgPC9hLXNwYWNlPgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBTbWlsZU91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMtdnVlJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBjb21wb25lbnRzOiB7CiAgICBTbWlsZU91dGxpbmVkLAogIH0sCiAgc2V0dXAoKSB7CiAgICBjb25zdCBvbkNoYW5nZSA9IChkYXRlLCBkYXRlU3RyaW5nKSA9PiB7CiAgICAgIGNvbnNvbGUubG9nKGRhdGUsIGRhdGVTdHJpbmcpOwogICAgfTsKICAgIGNvbnN0IG9uUmFuZ2VDaGFuZ2UgPSAoZGF0ZSwgZGF0ZVN0cmluZykgPT4gewogICAgICBjb25zb2xlLmxvZyhkYXRlLCBkYXRlU3RyaW5nKTsKICAgIH07CiAgICByZXR1cm4gewogICAgICBvbkNoYW5nZSwKICAgICAgb25SYW5nZUNoYW5nZSwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0Pg==",isdemo:!1}},{default:o(()=>[e(l,{direction:"vertical"},{default:o(()=>[e(i,{onChange:t.onChange},{suffixIcon:o(()=>[e(u)]),_:1},8,["onChange"]),e(i,{placeholder:"Select month",picker:"month",onChange:t.onChange},{suffixIcon:o(()=>[e(u)]),_:1},8,["onChange"]),e(d,{onChange:t.onRangeChange},{suffixIcon:o(()=>[e(u)]),_:1},8,["onChange"]),e(i,{placeholder:"Select week",picker:"week",onChange:t.onChange},{suffixIcon:o(()=>[e(u)]),_:1},8,["onChange"]),e(i,{"suffix-icon":"ab",onChange:t.onChange},null,8,["onChange"]),e(i,{"suffix-icon":"ab",placeholder:"Select month",picker:"month",onChange:t.onChange},null,8,["onChange"]),e(d,{"suffix-icon":"ab",onChange:t.onRangeChange},null,8,["onChange"]),e(i,{"suffix-icon":"ab",placeholder:"Select week",picker:"week",onChange:t.onChange},null,8,["onChange"])]),_:1})]),htmlCode:o(()=>[ca]),jsVersionHtml:o(()=>[pa]),_:1},8,["jsfiddle"])}const ua=v(oa,[["render",la]]),ia=y({setup(){return{value1:k(),value2:k(),value3:k(),value4:k(),value5:k(),value6:k(),value7:k(),value8:k(),value9:k()}}}),ka=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),a(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("vertical"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("12"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value1"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":bordered"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value2"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"picker"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("week"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":bordered"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value3"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"picker"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("month"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":bordered"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value4"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"picker"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("quarter"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":bordered"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value5"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"picker"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("year"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":bordered"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-range-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value6"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":bordered"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-range-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value7"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"picker"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("week"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":bordered"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-range-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value8"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"picker"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("month"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":bordered"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-range-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value9"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"picker"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("year"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":bordered"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(" type "),n("span",{class:"token punctuation"},"{"),a(" Dayjs "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'dayjs'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"value1"),n("span",{class:"token operator"},":"),a(" ref"),n("span",{class:"token operator"},"<"),a("Dayjs"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value2"),n("span",{class:"token operator"},":"),a(" ref"),n("span",{class:"token operator"},"<"),a("Dayjs"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value3"),n("span",{class:"token operator"},":"),a(" ref"),n("span",{class:"token operator"},"<"),a("Dayjs"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value4"),n("span",{class:"token operator"},":"),a(" ref"),n("span",{class:"token operator"},"<"),a("Dayjs"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value5"),n("span",{class:"token operator"},":"),a(" ref"),n("span",{class:"token operator"},"<"),a("Dayjs"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value6"),n("span",{class:"token operator"},":"),a(" ref"),n("span",{class:"token operator"},"<"),n("span",{class:"token punctuation"},"["),a("Dayjs"),n("span",{class:"token punctuation"},","),a(" Dayjs"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value7"),n("span",{class:"token operator"},":"),a(" ref"),n("span",{class:"token operator"},"<"),n("span",{class:"token punctuation"},"["),a("Dayjs"),n("span",{class:"token punctuation"},","),a(" Dayjs"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value8"),n("span",{class:"token operator"},":"),a(" ref"),n("span",{class:"token operator"},"<"),n("span",{class:"token punctuation"},"["),a("Dayjs"),n("span",{class:"token punctuation"},","),a(" Dayjs"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value9"),n("span",{class:"token operator"},":"),a(" ref"),n("span",{class:"token operator"},"<"),n("span",{class:"token punctuation"},"["),a("Dayjs"),n("span",{class:"token punctuation"},","),a(" Dayjs"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),ra=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),a(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("vertical"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("12"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value1"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":bordered"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value2"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"picker"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("week"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":bordered"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value3"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"picker"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("month"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":bordered"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value4"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"picker"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("quarter"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":bordered"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value5"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"picker"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("year"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":bordered"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-range-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value6"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":bordered"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-range-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value7"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"picker"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("week"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":bordered"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-range-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value8"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"picker"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("month"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":bordered"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-range-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value9"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"picker"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("year"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":bordered"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"value1"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value2"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value3"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value4"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value5"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value6"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value7"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value8"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value9"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function da(t,s,r,g,I,C){const u=c("a-date-picker"),i=c("a-range-picker"),d=c("a-space"),l=c("demo-box");return h(),A(l,{jsfiddle:{us:"Bordered-less style component.",cn:"\u65E0\u8FB9\u6846\u6837\u5F0F\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u65E0\u8FB9\u6846\u6837\u5F0F\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Bordered-less style component.</p>
`,order:23,title:{"zh-CN":"\u65E0\u8FB9\u6846","en-US":"Bordered-less"},relativePath:"components/date-picker/demo/bordered.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiIDpzaXplPSIxMiI+CiAgICA8YS1kYXRlLXBpY2tlciB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTEiIDpib3JkZXJlZD0iZmFsc2UiIC8+CiAgICA8YS1kYXRlLXBpY2tlciB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTIiIHBpY2tlcj0id2VlayIgOmJvcmRlcmVkPSJmYWxzZSIgLz4KICAgIDxhLWRhdGUtcGlja2VyIHYtbW9kZWw6dmFsdWU9InZhbHVlMyIgcGlja2VyPSJtb250aCIgOmJvcmRlcmVkPSJmYWxzZSIgLz4KICAgIDxhLWRhdGUtcGlja2VyIHYtbW9kZWw6dmFsdWU9InZhbHVlNCIgcGlja2VyPSJxdWFydGVyIiA6Ym9yZGVyZWQ9ImZhbHNlIiAvPgogICAgPGEtZGF0ZS1waWNrZXIgdi1tb2RlbDp2YWx1ZT0idmFsdWU1IiBwaWNrZXI9InllYXIiIDpib3JkZXJlZD0iZmFsc2UiIC8+CgogICAgPGEtcmFuZ2UtcGlja2VyIHYtbW9kZWw6dmFsdWU9InZhbHVlNiIgOmJvcmRlcmVkPSJmYWxzZSIgLz4KICAgIDxhLXJhbmdlLXBpY2tlciB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTciIHBpY2tlcj0id2VlayIgOmJvcmRlcmVkPSJmYWxzZSIgLz4KICAgIDxhLXJhbmdlLXBpY2tlciB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTgiIHBpY2tlcj0ibW9udGgiIDpib3JkZXJlZD0iZmFsc2UiIC8+CiAgICA8YS1yYW5nZS1waWNrZXIgdi1tb2RlbDp2YWx1ZT0idmFsdWU5IiBwaWNrZXI9InllYXIiIDpib3JkZXJlZD0iZmFsc2UiIC8+CiAgPC9hLXNwYWNlPgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwppbXBvcnQgdHlwZSB7IERheWpzIH0gZnJvbSAnZGF5anMnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgcmV0dXJuIHsKICAgICAgdmFsdWUxOiByZWY8RGF5anM+KCksCiAgICAgIHZhbHVlMjogcmVmPERheWpzPigpLAogICAgICB2YWx1ZTM6IHJlZjxEYXlqcz4oKSwKICAgICAgdmFsdWU0OiByZWY8RGF5anM+KCksCiAgICAgIHZhbHVlNTogcmVmPERheWpzPigpLAogICAgICB2YWx1ZTY6IHJlZjxbRGF5anMsIERheWpzXT4oKSwKICAgICAgdmFsdWU3OiByZWY8W0RheWpzLCBEYXlqc10+KCksCiAgICAgIHZhbHVlODogcmVmPFtEYXlqcywgRGF5anNdPigpLAogICAgICB2YWx1ZTk6IHJlZjxbRGF5anMsIERheWpzXT4oKSwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiIDpzaXplPSIxMiI+CiAgICA8YS1kYXRlLXBpY2tlciB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTEiIDpib3JkZXJlZD0iZmFsc2UiIC8+CiAgICA8YS1kYXRlLXBpY2tlciB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTIiIHBpY2tlcj0id2VlayIgOmJvcmRlcmVkPSJmYWxzZSIgLz4KICAgIDxhLWRhdGUtcGlja2VyIHYtbW9kZWw6dmFsdWU9InZhbHVlMyIgcGlja2VyPSJtb250aCIgOmJvcmRlcmVkPSJmYWxzZSIgLz4KICAgIDxhLWRhdGUtcGlja2VyIHYtbW9kZWw6dmFsdWU9InZhbHVlNCIgcGlja2VyPSJxdWFydGVyIiA6Ym9yZGVyZWQ9ImZhbHNlIiAvPgogICAgPGEtZGF0ZS1waWNrZXIgdi1tb2RlbDp2YWx1ZT0idmFsdWU1IiBwaWNrZXI9InllYXIiIDpib3JkZXJlZD0iZmFsc2UiIC8+CgogICAgPGEtcmFuZ2UtcGlja2VyIHYtbW9kZWw6dmFsdWU9InZhbHVlNiIgOmJvcmRlcmVkPSJmYWxzZSIgLz4KICAgIDxhLXJhbmdlLXBpY2tlciB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTciIHBpY2tlcj0id2VlayIgOmJvcmRlcmVkPSJmYWxzZSIgLz4KICAgIDxhLXJhbmdlLXBpY2tlciB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTgiIHBpY2tlcj0ibW9udGgiIDpib3JkZXJlZD0iZmFsc2UiIC8+CiAgICA8YS1yYW5nZS1waWNrZXIgdi1tb2RlbDp2YWx1ZT0idmFsdWU5IiBwaWNrZXI9InllYXIiIDpib3JkZXJlZD0iZmFsc2UiIC8+CiAgPC9hLXNwYWNlPgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICByZXR1cm4gewogICAgICB2YWx1ZTE6IHJlZigpLAogICAgICB2YWx1ZTI6IHJlZigpLAogICAgICB2YWx1ZTM6IHJlZigpLAogICAgICB2YWx1ZTQ6IHJlZigpLAogICAgICB2YWx1ZTU6IHJlZigpLAogICAgICB2YWx1ZTY6IHJlZigpLAogICAgICB2YWx1ZTc6IHJlZigpLAogICAgICB2YWx1ZTg6IHJlZigpLAogICAgICB2YWx1ZTk6IHJlZigpLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+",isdemo:!1}},{default:o(()=>[e(d,{direction:"vertical",size:12},{default:o(()=>[e(u,{value:t.value1,"onUpdate:value":s[0]||(s[0]=p=>t.value1=p),bordered:!1},null,8,["value"]),e(u,{value:t.value2,"onUpdate:value":s[1]||(s[1]=p=>t.value2=p),picker:"week",bordered:!1},null,8,["value"]),e(u,{value:t.value3,"onUpdate:value":s[2]||(s[2]=p=>t.value3=p),picker:"month",bordered:!1},null,8,["value"]),e(u,{value:t.value4,"onUpdate:value":s[3]||(s[3]=p=>t.value4=p),picker:"quarter",bordered:!1},null,8,["value"]),e(u,{value:t.value5,"onUpdate:value":s[4]||(s[4]=p=>t.value5=p),picker:"year",bordered:!1},null,8,["value"]),e(i,{value:t.value6,"onUpdate:value":s[5]||(s[5]=p=>t.value6=p),bordered:!1},null,8,["value"]),e(i,{value:t.value7,"onUpdate:value":s[6]||(s[6]=p=>t.value7=p),picker:"week",bordered:!1},null,8,["value"]),e(i,{value:t.value8,"onUpdate:value":s[7]||(s[7]=p=>t.value8=p),picker:"month",bordered:!1},null,8,["value"]),e(i,{value:t.value9,"onUpdate:value":s[8]||(s[8]=p=>t.value9=p),picker:"year",bordered:!1},null,8,["value"])]),_:1})]),htmlCode:o(()=>[ka]),jsVersionHtml:o(()=>[ra]),_:1},8,["jsfiddle"])}const ga=v(ia,[["render",da]]),Ia=y({setup(){return{value1:k(),value2:k(),value3:k(),value4:k(),value5:k()}}}),Ca=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),a(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("vertical"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("12"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-range-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value1"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-range-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value2"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"show-time"),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-range-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value3"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"picker"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("week"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-range-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value4"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"picker"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("month"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-range-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value5"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"picker"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("year"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(" type "),n("span",{class:"token punctuation"},"{"),a(" Dayjs "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'dayjs'"),n("span",{class:"token punctuation"},";"),a(`
type RangeValue `),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a("Dayjs"),n("span",{class:"token punctuation"},","),a(" Dayjs"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"value1"),n("span",{class:"token operator"},":"),a(" ref"),n("span",{class:"token operator"},"<"),a("RangeValue"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value2"),n("span",{class:"token operator"},":"),a(" ref"),n("span",{class:"token operator"},"<"),a("RangeValue"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value3"),n("span",{class:"token operator"},":"),a(" ref"),n("span",{class:"token operator"},"<"),a("RangeValue"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value4"),n("span",{class:"token operator"},":"),a(" ref"),n("span",{class:"token operator"},"<"),a("RangeValue"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value5"),n("span",{class:"token operator"},":"),a(" ref"),n("span",{class:"token operator"},"<"),a("RangeValue"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),ma=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),a(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("vertical"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("12"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-range-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value1"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-range-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value2"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"show-time"),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-range-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value3"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"picker"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("week"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-range-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value4"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"picker"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("month"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-range-picker")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value5"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"picker"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("year"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"value1"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value2"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value3"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value4"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value5"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function ha(t,s,r,g,I,C){const u=c("a-range-picker"),i=c("a-space"),d=c("demo-box");return h(),A(d,{jsfiddle:{us:"Set range picker type by `picker` prop.",cn:"\u901A\u8FC7\u8BBE\u7F6E `picker` \u5C5E\u6027\uFF0C\u6307\u5B9A\u8303\u56F4\u9009\u62E9\u5668\u7C7B\u578B\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u901A\u8FC7\u8BBE\u7F6E <code>picker</code> \u5C5E\u6027\uFF0C\u6307\u5B9A\u8303\u56F4\u9009\u62E9\u5668\u7C7B\u578B\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Set range picker type by <code>picker</code> prop.</p>
`,order:1,title:{"zh-CN":"\u8303\u56F4\u9009\u62E9\u5668","en-US":"Range Picker"},relativePath:"components/date-picker/demo/range-picker.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiIDpzaXplPSIxMiI+CiAgICA8YS1yYW5nZS1waWNrZXIgdi1tb2RlbDp2YWx1ZT0idmFsdWUxIiAvPgogICAgPGEtcmFuZ2UtcGlja2VyIHYtbW9kZWw6dmFsdWU9InZhbHVlMiIgc2hvdy10aW1lIC8+CiAgICA8YS1yYW5nZS1waWNrZXIgdi1tb2RlbDp2YWx1ZT0idmFsdWUzIiBwaWNrZXI9IndlZWsiIC8+CiAgICA8YS1yYW5nZS1waWNrZXIgdi1tb2RlbDp2YWx1ZT0idmFsdWU0IiBwaWNrZXI9Im1vbnRoIiAvPgogICAgPGEtcmFuZ2UtcGlja2VyIHYtbW9kZWw6dmFsdWU9InZhbHVlNSIgcGlja2VyPSJ5ZWFyIiAvPgogIDwvYS1zcGFjZT4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKaW1wb3J0IHR5cGUgeyBEYXlqcyB9IGZyb20gJ2RheWpzJzsKdHlwZSBSYW5nZVZhbHVlID0gW0RheWpzLCBEYXlqc107CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICByZXR1cm4gewogICAgICB2YWx1ZTE6IHJlZjxSYW5nZVZhbHVlPigpLAogICAgICB2YWx1ZTI6IHJlZjxSYW5nZVZhbHVlPigpLAogICAgICB2YWx1ZTM6IHJlZjxSYW5nZVZhbHVlPigpLAogICAgICB2YWx1ZTQ6IHJlZjxSYW5nZVZhbHVlPigpLAogICAgICB2YWx1ZTU6IHJlZjxSYW5nZVZhbHVlPigpLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiIDpzaXplPSIxMiI+CiAgICA8YS1yYW5nZS1waWNrZXIgdi1tb2RlbDp2YWx1ZT0idmFsdWUxIiAvPgogICAgPGEtcmFuZ2UtcGlja2VyIHYtbW9kZWw6dmFsdWU9InZhbHVlMiIgc2hvdy10aW1lIC8+CiAgICA8YS1yYW5nZS1waWNrZXIgdi1tb2RlbDp2YWx1ZT0idmFsdWUzIiBwaWNrZXI9IndlZWsiIC8+CiAgICA8YS1yYW5nZS1waWNrZXIgdi1tb2RlbDp2YWx1ZT0idmFsdWU0IiBwaWNrZXI9Im1vbnRoIiAvPgogICAgPGEtcmFuZ2UtcGlja2VyIHYtbW9kZWw6dmFsdWU9InZhbHVlNSIgcGlja2VyPSJ5ZWFyIiAvPgogIDwvYS1zcGFjZT4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgcmV0dXJuIHsKICAgICAgdmFsdWUxOiByZWYoKSwKICAgICAgdmFsdWUyOiByZWYoKSwKICAgICAgdmFsdWUzOiByZWYoKSwKICAgICAgdmFsdWU0OiByZWYoKSwKICAgICAgdmFsdWU1OiByZWYoKSwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0Pg==",isdemo:!1}},{default:o(()=>[e(i,{direction:"vertical",size:12},{default:o(()=>[e(u,{value:t.value1,"onUpdate:value":s[0]||(s[0]=l=>t.value1=l)},null,8,["value"]),e(u,{value:t.value2,"onUpdate:value":s[1]||(s[1]=l=>t.value2=l),"show-time":""},null,8,["value"]),e(u,{value:t.value3,"onUpdate:value":s[2]||(s[2]=l=>t.value3=l),picker:"week"},null,8,["value"]),e(u,{value:t.value4,"onUpdate:value":s[3]||(s[3]=l=>t.value4=l),picker:"month"},null,8,["value"]),e(u,{value:t.value5,"onUpdate:value":s[4]||(s[4]=l=>t.value5=l),picker:"year"},null,8,["value"])]),_:1})]),htmlCode:o(()=>[Ca]),jsVersionHtml:o(()=>[ma]),_:1},8,["jsfiddle"])}const Aa=v(Ia,[["render",ha]]),ba={pageData:{title:"DatePicker",description:"",frontmatter:{category:"Components",type:"\u6570\u636E\u5F55\u5165",title:"DatePicker",subtitle:"\u65E5\u671F\u9009\u62E9\u6846",cover:"https://gw.alipayobjects.com/zos/alicdn/RT_USzA48/DatePicker.svg"},headers:[{level:2,title:"\u4F55\u65F6\u4F7F\u7528",slug:"\u4F55\u65F6\u4F7F\u7528",content:"\u5F53\u7528\u6237\u9700\u8981\u8F93\u5165\u4E00\u4E2A\u65E5\u671F\uFF0C\u53EF\u4EE5\u70B9\u51FB\u6807\u51C6\u8F93\u5165\u6846\uFF0C\u5F39\u51FA\u65E5\u671F\u9762\u677F\u8FDB\u884C\u9009\u62E9\u3002"},{level:2,title:"API",slug:"API",content:"\u65E5\u671F\u7C7B\u7EC4\u4EF6\u5305\u62EC\u4EE5\u4E0B\u4E94\u79CD\u5F62\u5F0F\u3002"},{level:3,title:"\u56FD\u9645\u5316\u914D\u7F6E",slug:"\u56FD\u9645\u5316\u914D\u7F6E",content:"\u9ED8\u8BA4\u914D\u7F6E\u4E3A en-US\uFF0C\u5982\u679C\u4F60\u9700\u8981\u8BBE\u7F6E\u5176\u4ED6\u8BED\u8A00\uFF0C\u63A8\u8350\u5728\u5165\u53E3\u5904\u4F7F\u7528\u6211\u4EEC\u63D0\u4F9B\u7684\u56FD\u9645\u5316\u7EC4\u4EF6\uFF0C\u8BE6\u89C1\uFF1A[ConfigProvider \u56FD\u9645\u5316](/components/config-provider-cn/)\u3002"},{level:3,title:"\u5171\u540C\u7684 API",slug:"\u5171\u540C\u7684-API",content:"\u4EE5\u4E0B API \u4E3A DatePicker\u3001 RangePicker \u5171\u4EAB\u7684 API\u3002"},{level:3,title:"\u5171\u6709\u7684\u4E8B\u4EF6",slug:"\u5171\u6709\u7684\u4E8B\u4EF6",content:""},{level:3,title:"\u5171\u540C\u7684\u65B9\u6CD5",slug:"\u5171\u540C\u7684\u65B9\u6CD5",content:""},{level:3,title:"DatePicker",slug:"DatePicker",content:""},{level:3,title:"DatePicker \u4E8B\u4EF6",slug:"DatePicker-\u4E8B\u4EF6",content:""},{level:3,title:"DatePicker\\[picker=year]",slug:"DatePicker-picker-year",content:""},{level:3,title:"DatePicker\\[picker=quarter]",slug:"DatePicker-picker-quarter",content:""},{level:3,title:"DatePicker\\[picker=month]",slug:"DatePicker-picker-month",content:""},{level:3,title:"DatePicker\\[picker=week]",slug:"DatePicker-picker-week",content:""},{level:3,title:"RangePicker",slug:"RangePicker",content:""},{level:3,title:"RangePicker \u4E8B\u4EF6",slug:"RangePicker-\u4E8B\u4EF6",content:""},{level:2,title:"FAQ",slug:"FAQ",content:"\u5982\u4F55\u5728 DatePicker \u4E2D\u4F7F\u7528\u81EA\u5B9A\u4E49\u65E5\u671F\u5E93\uFF08\u5982 moment.js \\| dayjs \\| date-fns\uFF09\uFF1F"},{level:3,title:"\u5982\u4F55\u5728 DatePicker \u4E2D\u4F7F\u7528\u81EA\u5B9A\u4E49\u65E5\u671F\u5E93\uFF08\u5982 moment.js \\| dayjs \\| date-fns\uFF09\uFF1F",slug:"\u5982\u4F55\u5728-DatePicker-\u4E2D\u4F7F\u7528\u81EA\u5B9A\u4E49\u65E5\u671F\u5E93\uFF08\u5982-moment-js-dayjs-date-fns\uFF09\uFF1F",content:"\u8BF7\u53C2\u8003[\u300A\u81EA\u5B9A\u4E49\u65E5\u671F\u5E93\u300B](/docs/vue/replace-date-cn)"},{level:3,title:"\u4E3A\u4F55\u5168\u5C40\u4FEE\u6539 dayjs.locale \u4E0D\u751F\u6548\uFF1F",slug:"\u4E3A\u4F55\u5168\u5C40\u4FEE\u6539-dayjs-locale-\u4E0D\u751F\u6548\uFF1F",content:"DatePicker \u9ED8\u8BA4 `locale` \u4E3A `en`\u3002\u4F60\u53EF\u4EE5\u901A\u8FC7 DatePicker \u7684 `locale` \u5C5E\u6027\u6765\u5355\u72EC\u8BBE\u7F6E\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7 [ConfigProvider `locale`](/components/config-provider-cn) \u5C5E\u6027\u6765\u914D\u7F6E\u3002"}],relativePath:"components/date-picker/index.zh-CN.md",content:`
\u8F93\u5165\u6216\u9009\u62E9\u65E5\u671F\u7684\u63A7\u4EF6\u3002

## \u4F55\u65F6\u4F7F\u7528

\u5F53\u7528\u6237\u9700\u8981\u8F93\u5165\u4E00\u4E2A\u65E5\u671F\uFF0C\u53EF\u4EE5\u70B9\u51FB\u6807\u51C6\u8F93\u5165\u6846\uFF0C\u5F39\u51FA\u65E5\u671F\u9762\u677F\u8FDB\u884C\u9009\u62E9\u3002

## API

\u65E5\u671F\u7C7B\u7EC4\u4EF6\u5305\u62EC\u4EE5\u4E0B\u4E94\u79CD\u5F62\u5F0F\u3002

- DatePicker
- DatePicker\\[picker=&quot;month&quot;]
- DatePicker\\[picker=&quot;week&quot;]
- DatePicker\\[picker=&quot;year&quot;]
- DatePicker\\[picker=&quot;quarter&quot;]
- RangePicker

### \u56FD\u9645\u5316\u914D\u7F6E

\u9ED8\u8BA4\u914D\u7F6E\u4E3A en-US\uFF0C\u5982\u679C\u4F60\u9700\u8981\u8BBE\u7F6E\u5176\u4ED6\u8BED\u8A00\uFF0C\u63A8\u8350\u5728\u5165\u53E3\u5904\u4F7F\u7528\u6211\u4EEC\u63D0\u4F9B\u7684\u56FD\u9645\u5316\u7EC4\u4EF6\uFF0C\u8BE6\u89C1\uFF1A[ConfigProvider \u56FD\u9645\u5316](/components/config-provider-cn/)\u3002

\u5982\u6709\u7279\u6B8A\u9700\u6C42\uFF08\u4EC5\u4FEE\u6539\u5355\u4E00\u7EC4\u4EF6\u7684\u8BED\u8A00\uFF09\uFF0C\u8BF7\u4F7F\u7528 locale \u53C2\u6570\uFF0C\u53C2\u8003\uFF1A[\u9ED8\u8BA4\u914D\u7F6E](https://github.com/vueComponent/ant-design-vue/blob/main/components/date-picker/locale/example.json)\u3002

\`\`\`html
&lt;template&gt;
  &lt;a-date-picker v-model:value=&quot;value&quot; :locale=&quot;locale&quot; /&gt;
&lt;/template&gt;
&lt;script&gt;
  import locale from &#39;ant-design-vue/es/date-picker/locale/zh_CN&#39;;
  import { defineComponent } from &#39;vue&#39;;
  export default defineComponent({
    setup() {
      return {
        locale,
        value: null,
      };
    },
  });
&lt;/script&gt;
\`\`\`

\`\`\`html
&lt;template&gt;
  &lt;a-config-provider :locale=&quot;locale&quot;&gt;
    &lt;a-date-picker v-model:value=&quot;value&quot; /&gt;
  &lt;/a-config-provider&gt;
&lt;/template&gt;
&lt;script&gt;
  // \u9ED8\u8BA4\u8BED\u8A00\u4E3A en-US\uFF0C\u5982\u679C\u4F60\u9700\u8981\u8BBE\u7F6E\u5176\u4ED6\u8BED\u8A00\uFF0C\u63A8\u8350\u5728\u5165\u53E3\u6587\u4EF6\u5168\u5C40\u8BBE\u7F6E locale
  import dayjs from &#39;dayjs&#39;;
  import &#39;dayjs/locale/zh-cn&#39;;
  import locale from &#39;ant-design-vue/es/date-picker/locale/zh_CN&#39;;
  import { defineComponent } from &#39;vue&#39;;
  dayjs.locale(&#39;zh-cn&#39;);
  export default defineComponent({
    setup() {
      return {
        value: dayjs(&#39;2015-01-01&#39;, &#39;YYYY-MM-DD&#39;)
        dayjs,
        locale
      };
    },
  });
&lt;/script&gt;
\`\`\`

### \u5171\u540C\u7684 API

\u4EE5\u4E0B API \u4E3A DatePicker\u3001 RangePicker \u5171\u4EAB\u7684 API\u3002

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C | \u7248\u672C |
| --- | --- | --- | --- | --- |
| allowClear | \u662F\u5426\u663E\u793A\u6E05\u9664\u6309\u94AE | boolean | true |  |
| autofocus | \u81EA\u52A8\u83B7\u53D6\u7126\u70B9 | boolean | false |  |
| bordered | \u662F\u5426\u6709\u8FB9\u6846 | boolean | true |  |
| dateRender | \u81EA\u5B9A\u4E49\u65E5\u671F\u5355\u5143\u683C\u7684\u5185\u5BB9 | v-slot:dateRender=&quot;{current, today}&quot; | - |  |
| disabled | \u7981\u7528 | boolean | false |  |
| disabledDate | \u4E0D\u53EF\u9009\u62E9\u7684\u65E5\u671F | (currentDate: dayjs) =&gt; boolean | - |  |
| dropdownClassName | \u989D\u5916\u7684\u5F39\u51FA\u65E5\u5386 className | string | - |  |
| getPopupContainer | \u5B9A\u4E49\u6D6E\u5C42\u7684\u5BB9\u5668\uFF0C\u9ED8\u8BA4\u4E3A body \u4E0A\u65B0\u5EFA div | function(trigger) | - |  |
| inputReadOnly | \u8BBE\u7F6E\u8F93\u5165\u6846\u4E3A\u53EA\u8BFB\uFF08\u907F\u514D\u5728\u79FB\u52A8\u8BBE\u5907\u4E0A\u6253\u5F00\u865A\u62DF\u952E\u76D8\uFF09 | boolean | false |  |
| locale | \u56FD\u9645\u5316\u914D\u7F6E | object | [\u9ED8\u8BA4\u914D\u7F6E](https://github.com/vueComponent/ant-design-vue/blob/main/components/date-picker/locale/example.json) | - |
| mode | \u65E5\u671F\u9762\u677F\u7684\u72B6\u6001 | \`time\` \\| \`date\` \\| \`month\` \\| \`year\` \\| \`decade\` | - |  |
| nextIcon | \u81EA\u5B9A\u4E49\u4E0B\u4E00\u4E2A\u56FE\u6807 | slot | - | 3.0 |
| open | \u63A7\u5236\u5F39\u5C42\u662F\u5426\u5C55\u5F00 | boolean | - |  |
| picker | \u8BBE\u7F6E\u9009\u62E9\u5668\u7C7B\u578B | \`date\` \\| \`week\` \\| \`month\` \\| \`quarter\` \\| \`year\` | \`date\` | \`quarter\` |
| placeholder | \u8F93\u5165\u6846\u63D0\u793A\u6587\u5B57 | string \\| \\[string, string] | - |  |
| popupStyle | \u989D\u5916\u7684\u5F39\u51FA\u65E5\u5386\u6837\u5F0F | CSSProperties | {} |  |
| prevIcon | \u81EA\u5B9A\u4E49\u4E0A\u4E00\u4E2A\u56FE\u6807 | slot | - | 3.0 |
| size | \u8F93\u5165\u6846\u5927\u5C0F\uFF0C\`large\` \u9AD8\u5EA6\u4E3A 40px\uFF0C\`small\` \u4E3A 24px\uFF0C\u9ED8\u8BA4\u662F 32px | \`large\` \\| \`middle\` \\| \`small\` | - |  |
| suffixIcon | \u81EA\u5B9A\u4E49\u7684\u9009\u62E9\u6846\u540E\u7F00\u56FE\u6807 | v-slot:suffixIcon | - |  |
| superNextIcon | \u81EA\u5B9A\u4E49 \`&lt;&lt;\` \u5207\u6362\u56FE\u6807 | slot | - | 3.0 |
| superPrevIcon | \u81EA\u5B9A\u4E49 \`&gt;&gt;\` \u5207\u6362\u56FE\u6807 | slot | - | 3.0 |
| valueFormat | \u53EF\u9009\uFF0C\u7ED1\u5B9A\u503C\u7684\u683C\u5F0F\uFF0C\u5BF9 value\u3001defaultValue\u3001defaultPickerValue \u8D77\u4F5C\u7528\u3002\u4E0D\u6307\u5B9A\u5219\u7ED1\u5B9A\u503C\u4E3A dayjs \u5BF9\u8C61 | string\uFF0C[\u5177\u4F53\u683C\u5F0F](https://day.js.org/docs/zh-CN/display/format) | - |  |

### \u5171\u6709\u7684\u4E8B\u4EF6

| \u4E8B\u4EF6\u540D\u79F0    | \u8BF4\u660E                     | \u56DE\u8C03\u53C2\u6570              |     |
| ----------- | ------------------------ | --------------------- | --- |
| openChange  | \u5F39\u51FA\u65E5\u5386\u548C\u5173\u95ED\u65E5\u5386\u7684\u56DE\u8C03 | function(status)      |     |
| panelChange | \u65E5\u671F\u9762\u677F\u53D8\u5316\u65F6\u7684\u56DE\u8C03     | function(value, mode) | -   |

### \u5171\u540C\u7684\u65B9\u6CD5

| \u540D\u79F0    | \u63CF\u8FF0     |
| ------- | -------- |
| blur()  | \u79FB\u9664\u7126\u70B9 |
| focus() | \u83B7\u53D6\u7126\u70B9 |

### DatePicker

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C | \u7248\u672C |
| --- | --- | --- | --- | --- |
| defaultPickerValue | \u9ED8\u8BA4\u9762\u677F\u65E5\u671F | [dayjs](https://day.js.org/) | - |  |
| disabledTime | \u4E0D\u53EF\u9009\u62E9\u7684\u65F6\u95F4 | function(date) | - |  |
| format | \u8BBE\u7F6E\u65E5\u671F\u683C\u5F0F\uFF0C\u4E3A\u6570\u7EC4\u65F6\u652F\u6301\u591A\u683C\u5F0F\u5339\u914D\uFF0C\u5C55\u793A\u4EE5\u7B2C\u4E00\u4E2A\u4E3A\u51C6\u3002\u914D\u7F6E\u53C2\u8003 [dayjs](https://day.js.org/docs/zh-CN/display/format)\uFF0C\u652F\u6301[\u81EA\u5B9A\u4E49\u683C\u5F0F](#components-date-picker-demo-format) | string \\| (value: dayjs) =&gt; string \\| (string \\| (value: dayjs) =&gt; string)\\[] | \`YYYY-MM-DD\` |  |
| renderExtraFooter | \u5728\u9762\u677F\u4E2D\u6DFB\u52A0\u989D\u5916\u7684\u9875\u811A | v-slot:renderExtraFooter=&quot;mode&quot; | - |  |
| showNow | \u5F53\u8BBE\u5B9A\u4E86 \`showTime\` \u7684\u65F6\u5019\uFF0C\u9762\u677F\u662F\u5426\u663E\u793A\u201C\u6B64\u523B\u201D\u6309\u94AE | boolean | - |  |
| showTime | \u589E\u52A0\u65F6\u95F4\u9009\u62E9\u529F\u80FD | Object \\| boolean | [TimePicker Options](/components/time-picker/#API) |  |
| showTime.defaultValue | \u8BBE\u7F6E\u7528\u6237\u9009\u62E9\u65E5\u671F\u65F6\u9ED8\u8BA4\u7684\u65F6\u5206\u79D2\uFF0C[\u4F8B\u5B50](#components-date-picker-demo-disabled-date) | [dayjs](https://day.js.org/) | dayjs() |  |
| showToday | \u662F\u5426\u5C55\u793A\u201C\u4ECA\u5929\u201D\u6309\u94AE | boolean | true |  |
| value(v-model) | \u65E5\u671F | [dayjs](https://day.js.org/) | - |  |

### DatePicker \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D\u79F0 | \u8BF4\u660E               | \u56DE\u8C03\u53C2\u6570                                            |
| -------- | ------------------ | --------------------------------------------------- |
| change   | \u65F6\u95F4\u53D1\u751F\u53D8\u5316\u7684\u56DE\u8C03 | function(date: dayjs \\| string, dateString: string) |
| ok       | \u70B9\u51FB\u786E\u5B9A\u6309\u94AE\u7684\u56DE\u8C03 | function(date: dayjs \\| string)                     |

### DatePicker\\[picker=year]

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C | \u7248\u672C |
| --- | --- | --- | --- | --- |
| format | \u5C55\u793A\u7684\u65E5\u671F\u683C\u5F0F\uFF0C\u914D\u7F6E\u53C2\u8003 [dayjs](https://day.js.org/docs/zh-CN/display/format) | string | \`YYYY\` |  |

### DatePicker\\[picker=quarter]

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C | \u7248\u672C |
| --- | --- | --- | --- | --- |
| format | \u5C55\u793A\u7684\u65E5\u671F\u683C\u5F0F\uFF0C\u914D\u7F6E\u53C2\u8003 [dayjs](https://day.js.org/docs/zh-CN/display/format) | string | \`YYYY-\\QQ\` |  |

### DatePicker\\[picker=month]

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C | \u7248\u672C |
| --- | --- | --- | --- | --- |
| format | \u5C55\u793A\u7684\u65E5\u671F\u683C\u5F0F\uFF0C\u914D\u7F6E\u53C2\u8003 [dayjs](https://day.js.org/docs/zh-CN/display/format) | string | \`YYYY-MM\` |  |
| monthCellRender | \u81EA\u5B9A\u4E49\u7684\u6708\u4EFD\u5185\u5BB9\u6E32\u67D3\u65B9\u6CD5 | v-slot:monthCellRender=&quot;{current, locale}&quot; | - |  |

### DatePicker\\[picker=week]

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C | \u7248\u672C |
| --- | --- | --- | --- | --- |
| format | \u5C55\u793A\u7684\u65E5\u671F\u683C\u5F0F\uFF0C\u914D\u7F6E\u53C2\u8003 [dayjs](https://day.js.org/docs/zh-CN/display/format) | string | \`YYYY-wo\` |  |

### RangePicker

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C | \u7248\u672C |
| --- | --- | --- | --- | --- |
| allowEmpty | \u5141\u8BB8\u8D77\u59CB\u9879\u90E8\u5206\u4E3A\u7A7A | \\[boolean, boolean] | \\[false, false] |  |
| dateRender | \u81EA\u5B9A\u4E49\u65E5\u671F\u5355\u5143\u683C\u7684\u5185\u5BB9\u3002 | v-slot:dateRender=&quot;{current: dayjs, today: dayjs, info: { range: \`start\` \\| \`end\` }}&quot; | - |  |
| defaultPickerValue | \u9ED8\u8BA4\u9762\u677F\u65E5\u671F | [dayjs](https://day.js.org/)\\[] | - |  |
| disabled | \u7981\u7528\u8D77\u59CB\u9879 | \\[boolean, boolean] | - |  |
| disabledTime | \u4E0D\u53EF\u9009\u62E9\u7684\u65F6\u95F4 | function(date: dayjs, partial: \`start\` \\| \`end\`) | - |  |
| format | \u5C55\u793A\u7684\u65E5\u671F\u683C\u5F0F | string | \`YYYY-MM-DD HH:mm:ss\` |  |
| ranges | \u9884\u8BBE\u65F6\u95F4\u8303\u56F4\u5FEB\u6377\u9009\u62E9 | { \\[range: string]: [dayjs](https://day.js.org/)\\[] } \\| { \\[range: string]: () =&gt; [dayjs](https://day.js.org/)\\[] } | - |  |
| renderExtraFooter | \u5728\u9762\u677F\u4E2D\u6DFB\u52A0\u989D\u5916\u7684\u9875\u811A | () =&gt; React.ReactNode | - |  |
| separator | \u8BBE\u7F6E\u5206\u9694\u7B26 | string \\| v-slot:separator | \`&lt;SwapRightOutlined /&gt;\` |  |
| showTime | \u589E\u52A0\u65F6\u95F4\u9009\u62E9\u529F\u80FD | Object\\|boolean | [TimePicker Options](/components/time-picker/#API) |  |
| showTime.defaultValue | \u8BBE\u7F6E\u7528\u6237\u9009\u62E9\u65E5\u671F\u65F6\u9ED8\u8BA4\u7684\u65F6\u5206\u79D2\uFF0C[\u4F8B\u5B50](#components-date-picker-demo-disabled-date) | [dayjs](https://day.js.org/)\\[] | \\[dayjs(), dayjs()] |  |
| value(v-model) | \u65E5\u671F | [dayjs](https://day.js.org/)\\[] | - |  |

### RangePicker \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D\u79F0 | \u8BF4\u660E | \u56DE\u8C03\u53C2\u6570 |
| --- | --- | --- |
| calendarChange | \u5F85\u9009\u65E5\u671F\u53D1\u751F\u53D8\u5316\u7684\u56DE\u8C03 | function(dates: \\[dayjs, dayjs] \\| \\[string, string], dateStrings: \\[string, string], info: { range:\`start\`\\|\`end\` }) |
| change | \u65E5\u671F\u8303\u56F4\u53D1\u751F\u53D8\u5316\u7684\u56DE\u8C03 | function(dates: \\[dayjs, dayjs] \\| \\[string, string], dateStrings: \\[string, string]) |
| ok | \u70B9\u51FB\u786E\u5B9A\u6309\u94AE\u7684\u56DE\u8C03 | function(dates: \\[dayjs, dayjs] \\| \\[string, string]) |

## FAQ

### \u5982\u4F55\u5728 DatePicker \u4E2D\u4F7F\u7528\u81EA\u5B9A\u4E49\u65E5\u671F\u5E93\uFF08\u5982 moment.js \\| dayjs \\| date-fns\uFF09\uFF1F

\u8BF7\u53C2\u8003[\u300A\u81EA\u5B9A\u4E49\u65E5\u671F\u5E93\u300B](/docs/vue/replace-date-cn)

### \u4E3A\u4F55\u5168\u5C40\u4FEE\u6539 dayjs.locale \u4E0D\u751F\u6548\uFF1F

DatePicker \u9ED8\u8BA4 \`locale\` \u4E3A \`en\`\u3002\u4F60\u53EF\u4EE5\u901A\u8FC7 DatePicker \u7684 \`locale\` \u5C5E\u6027\u6765\u5355\u72EC\u8BBE\u7F6E\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7 [ConfigProvider \`locale\`](/components/config-provider-cn) \u5C5E\u6027\u6765\u914D\u7F6E\u3002
`,html:`<p>\u8F93\u5165\u6216\u9009\u62E9\u65E5\u671F\u7684\u63A7\u4EF6\u3002</p>
<h2 id="\u4F55\u65F6\u4F7F\u7528">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u5F53\u7528\u6237\u9700\u8981\u8F93\u5165\u4E00\u4E2A\u65E5\u671F\uFF0C\u53EF\u4EE5\u70B9\u51FB\u6807\u51C6\u8F93\u5165\u6846\uFF0C\u5F39\u51FA\u65E5\u671F\u9762\u677F\u8FDB\u884C\u9009\u62E9\u3002</p>
<h2 id="API">API <a class="header-anchor" href="#API">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u65E5\u671F\u7C7B\u7EC4\u4EF6\u5305\u62EC\u4EE5\u4E0B\u4E94\u79CD\u5F62\u5F0F\u3002</p>
<ul>
<li>DatePicker</li>
<li>DatePicker[picker=&quot;month&quot;]</li>
<li>DatePicker[picker=&quot;week&quot;]</li>
<li>DatePicker[picker=&quot;year&quot;]</li>
<li>DatePicker[picker=&quot;quarter&quot;]</li>
<li>RangePicker</li>
</ul>
<h3 id="\u56FD\u9645\u5316\u914D\u7F6E">\u56FD\u9645\u5316\u914D\u7F6E <a class="header-anchor" href="#\u56FD\u9645\u5316\u914D\u7F6E">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>\u9ED8\u8BA4\u914D\u7F6E\u4E3A en-US\uFF0C\u5982\u679C\u4F60\u9700\u8981\u8BBE\u7F6E\u5176\u4ED6\u8BED\u8A00\uFF0C\u63A8\u8350\u5728\u5165\u53E3\u5904\u4F7F\u7528\u6211\u4EEC\u63D0\u4F9B\u7684\u56FD\u9645\u5316\u7EC4\u4EF6\uFF0C\u8BE6\u89C1\uFF1A<a href="/components/config-provider-cn/">ConfigProvider \u56FD\u9645\u5316</a>\u3002</p>
<p>\u5982\u6709\u7279\u6B8A\u9700\u6C42\uFF08\u4EC5\u4FEE\u6539\u5355\u4E00\u7EC4\u4EF6\u7684\u8BED\u8A00\uFF09\uFF0C\u8BF7\u4F7F\u7528 locale \u53C2\u6570\uFF0C\u53C2\u8003\uFF1A<a href="https://github.com/vueComponent/ant-design-vue/blob/main/components/date-picker/locale/example.json" target="_blank" rel="noopener noreferrer">\u9ED8\u8BA4\u914D\u7F6E</a>\u3002</p>
<pre class="language-html" v-pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-date-picker</span> <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span> <span class="token attr-name">:locale</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>locale<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> locale <span class="token keyword">from</span> <span class="token string">'ant-design-vue/es/date-picker/locale/zh_CN'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        locale<span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre>
<pre class="language-html" v-pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-config-provider</span> <span class="token attr-name">:locale</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>locale<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-date-picker</span> <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-config-provider</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">// \u9ED8\u8BA4\u8BED\u8A00\u4E3A en-US\uFF0C\u5982\u679C\u4F60\u9700\u8981\u8BBE\u7F6E\u5176\u4ED6\u8BED\u8A00\uFF0C\u63A8\u8350\u5728\u5165\u53E3\u6587\u4EF6\u5168\u5C40\u8BBE\u7F6E locale</span>
  <span class="token keyword">import</span> dayjs <span class="token keyword">from</span> <span class="token string">'dayjs'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token string">'dayjs/locale/zh-cn'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> locale <span class="token keyword">from</span> <span class="token string">'ant-design-vue/es/date-picker/locale/zh_CN'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
  dayjs<span class="token punctuation">.</span><span class="token function">locale</span><span class="token punctuation">(</span><span class="token string">'zh-cn'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token function">dayjs</span><span class="token punctuation">(</span><span class="token string">'2015-01-01'</span><span class="token punctuation">,</span> <span class="token string">'YYYY-MM-DD'</span><span class="token punctuation">)</span>
        dayjs<span class="token punctuation">,</span>
        locale
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre>
<h3 id="\u5171\u540C\u7684-API">\u5171\u540C\u7684 API <a class="header-anchor" href="#\u5171\u540C\u7684-API">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>\u4EE5\u4E0B API \u4E3A DatePicker\u3001 RangePicker \u5171\u4EAB\u7684 API\u3002</p>
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
<td>\u662F\u5426\u663E\u793A\u6E05\u9664\u6309\u94AE</td>
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
<td>dateRender</td>
<td>\u81EA\u5B9A\u4E49\u65E5\u671F\u5355\u5143\u683C\u7684\u5185\u5BB9</td>
<td>v-slot:dateRender=&quot;{current, today}&quot;</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>disabled</td>
<td>\u7981\u7528</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>disabledDate</td>
<td>\u4E0D\u53EF\u9009\u62E9\u7684\u65E5\u671F</td>
<td>(currentDate: dayjs) =&gt; boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>dropdownClassName</td>
<td>\u989D\u5916\u7684\u5F39\u51FA\u65E5\u5386 className</td>
<td>string</td>
<td>-</td>
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
<td>inputReadOnly</td>
<td>\u8BBE\u7F6E\u8F93\u5165\u6846\u4E3A\u53EA\u8BFB\uFF08\u907F\u514D\u5728\u79FB\u52A8\u8BBE\u5907\u4E0A\u6253\u5F00\u865A\u62DF\u952E\u76D8\uFF09</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>locale</td>
<td>\u56FD\u9645\u5316\u914D\u7F6E</td>
<td>object</td>
<td><a href="https://github.com/vueComponent/ant-design-vue/blob/main/components/date-picker/locale/example.json" target="_blank" rel="noopener noreferrer">\u9ED8\u8BA4\u914D\u7F6E</a></td>
<td>-</td>
</tr>
<tr>
<td>mode</td>
<td>\u65E5\u671F\u9762\u677F\u7684\u72B6\u6001</td>
<td><code>time</code> | <code>date</code> | <code>month</code> | <code>year</code> | <code>decade</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>nextIcon</td>
<td>\u81EA\u5B9A\u4E49\u4E0B\u4E00\u4E2A\u56FE\u6807</td>
<td>slot</td>
<td>-</td>
<td>3.0</td>
</tr>
<tr>
<td>open</td>
<td>\u63A7\u5236\u5F39\u5C42\u662F\u5426\u5C55\u5F00</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>picker</td>
<td>\u8BBE\u7F6E\u9009\u62E9\u5668\u7C7B\u578B</td>
<td><code>date</code> | <code>week</code> | <code>month</code> | <code>quarter</code> | <code>year</code></td>
<td><code>date</code></td>
<td><code>quarter</code></td>
</tr>
<tr>
<td>placeholder</td>
<td>\u8F93\u5165\u6846\u63D0\u793A\u6587\u5B57</td>
<td>string | [string, string]</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>popupStyle</td>
<td>\u989D\u5916\u7684\u5F39\u51FA\u65E5\u5386\u6837\u5F0F</td>
<td>CSSProperties</td>
<td>{}</td>
<td></td>
</tr>
<tr>
<td>prevIcon</td>
<td>\u81EA\u5B9A\u4E49\u4E0A\u4E00\u4E2A\u56FE\u6807</td>
<td>slot</td>
<td>-</td>
<td>3.0</td>
</tr>
<tr>
<td>size</td>
<td>\u8F93\u5165\u6846\u5927\u5C0F\uFF0C<code>large</code> \u9AD8\u5EA6\u4E3A 40px\uFF0C<code>small</code> \u4E3A 24px\uFF0C\u9ED8\u8BA4\u662F 32px</td>
<td><code>large</code> | <code>middle</code> | <code>small</code></td>
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
<td>superNextIcon</td>
<td>\u81EA\u5B9A\u4E49 <code>&lt;&lt;</code> \u5207\u6362\u56FE\u6807</td>
<td>slot</td>
<td>-</td>
<td>3.0</td>
</tr>
<tr>
<td>superPrevIcon</td>
<td>\u81EA\u5B9A\u4E49 <code>&gt;&gt;</code> \u5207\u6362\u56FE\u6807</td>
<td>slot</td>
<td>-</td>
<td>3.0</td>
</tr>
<tr>
<td>valueFormat</td>
<td>\u53EF\u9009\uFF0C\u7ED1\u5B9A\u503C\u7684\u683C\u5F0F\uFF0C\u5BF9 value\u3001defaultValue\u3001defaultPickerValue \u8D77\u4F5C\u7528\u3002\u4E0D\u6307\u5B9A\u5219\u7ED1\u5B9A\u503C\u4E3A dayjs \u5BF9\u8C61</td>
<td>string\uFF0C<a href="https://day.js.org/docs/zh-CN/display/format" target="_blank" rel="noopener noreferrer">\u5177\u4F53\u683C\u5F0F</a></td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="\u5171\u6709\u7684\u4E8B\u4EF6">\u5171\u6709\u7684\u4E8B\u4EF6 <a class="header-anchor" href="#\u5171\u6709\u7684\u4E8B\u4EF6">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<table>
<thead>
<tr>
<th>\u4E8B\u4EF6\u540D\u79F0</th>
<th>\u8BF4\u660E</th>
<th>\u56DE\u8C03\u53C2\u6570</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>openChange</td>
<td>\u5F39\u51FA\u65E5\u5386\u548C\u5173\u95ED\u65E5\u5386\u7684\u56DE\u8C03</td>
<td>function(status)</td>
<td></td>
</tr>
<tr>
<td>panelChange</td>
<td>\u65E5\u671F\u9762\u677F\u53D8\u5316\u65F6\u7684\u56DE\u8C03</td>
<td>function(value, mode)</td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="\u5171\u540C\u7684\u65B9\u6CD5">\u5171\u540C\u7684\u65B9\u6CD5 <a class="header-anchor" href="#\u5171\u540C\u7684\u65B9\u6CD5">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
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
<h3 id="DatePicker">DatePicker <a class="header-anchor" href="#DatePicker">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
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
<td>defaultPickerValue</td>
<td>\u9ED8\u8BA4\u9762\u677F\u65E5\u671F</td>
<td><a href="https://day.js.org/" target="_blank" rel="noopener noreferrer">dayjs</a></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>disabledTime</td>
<td>\u4E0D\u53EF\u9009\u62E9\u7684\u65F6\u95F4</td>
<td>function(date)</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>format</td>
<td>\u8BBE\u7F6E\u65E5\u671F\u683C\u5F0F\uFF0C\u4E3A\u6570\u7EC4\u65F6\u652F\u6301\u591A\u683C\u5F0F\u5339\u914D\uFF0C\u5C55\u793A\u4EE5\u7B2C\u4E00\u4E2A\u4E3A\u51C6\u3002\u914D\u7F6E\u53C2\u8003 <a href="https://day.js.org/docs/zh-CN/display/format" target="_blank" rel="noopener noreferrer">dayjs</a>\uFF0C\u652F\u6301<a href="#components-date-picker-demo-format">\u81EA\u5B9A\u4E49\u683C\u5F0F</a></td>
<td>string | (value: dayjs) =&gt; string | (string | (value: dayjs) =&gt; string)[]</td>
<td><code>YYYY-MM-DD</code></td>
<td></td>
</tr>
<tr>
<td>renderExtraFooter</td>
<td>\u5728\u9762\u677F\u4E2D\u6DFB\u52A0\u989D\u5916\u7684\u9875\u811A</td>
<td>v-slot:renderExtraFooter=&quot;mode&quot;</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>showNow</td>
<td>\u5F53\u8BBE\u5B9A\u4E86 <code>showTime</code> \u7684\u65F6\u5019\uFF0C\u9762\u677F\u662F\u5426\u663E\u793A\u201C\u6B64\u523B\u201D\u6309\u94AE</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>showTime</td>
<td>\u589E\u52A0\u65F6\u95F4\u9009\u62E9\u529F\u80FD</td>
<td>Object | boolean</td>
<td><a href="/components/time-picker/#API">TimePicker Options</a></td>
<td></td>
</tr>
<tr>
<td>showTime.defaultValue</td>
<td>\u8BBE\u7F6E\u7528\u6237\u9009\u62E9\u65E5\u671F\u65F6\u9ED8\u8BA4\u7684\u65F6\u5206\u79D2\uFF0C<a href="#components-date-picker-demo-disabled-date">\u4F8B\u5B50</a></td>
<td><a href="https://day.js.org/" target="_blank" rel="noopener noreferrer">dayjs</a></td>
<td>dayjs()</td>
<td></td>
</tr>
<tr>
<td>showToday</td>
<td>\u662F\u5426\u5C55\u793A\u201C\u4ECA\u5929\u201D\u6309\u94AE</td>
<td>boolean</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>value(v-model)</td>
<td>\u65E5\u671F</td>
<td><a href="https://day.js.org/" target="_blank" rel="noopener noreferrer">dayjs</a></td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="DatePicker-\u4E8B\u4EF6">DatePicker \u4E8B\u4EF6 <a class="header-anchor" href="#DatePicker-\u4E8B\u4EF6">
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
<td>function(date: dayjs | string, dateString: string)</td>
</tr>
<tr>
<td>ok</td>
<td>\u70B9\u51FB\u786E\u5B9A\u6309\u94AE\u7684\u56DE\u8C03</td>
<td>function(date: dayjs | string)</td>
</tr>
</tbody>
</table>
<h3 id="DatePicker-picker-year">DatePicker[picker=year] <a class="header-anchor" href="#DatePicker-picker-year">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
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
<td>format</td>
<td>\u5C55\u793A\u7684\u65E5\u671F\u683C\u5F0F\uFF0C\u914D\u7F6E\u53C2\u8003 <a href="https://day.js.org/docs/zh-CN/display/format" target="_blank" rel="noopener noreferrer">dayjs</a></td>
<td>string</td>
<td><code>YYYY</code></td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="DatePicker-picker-quarter">DatePicker[picker=quarter] <a class="header-anchor" href="#DatePicker-picker-quarter">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
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
<td>format</td>
<td>\u5C55\u793A\u7684\u65E5\u671F\u683C\u5F0F\uFF0C\u914D\u7F6E\u53C2\u8003 <a href="https://day.js.org/docs/zh-CN/display/format" target="_blank" rel="noopener noreferrer">dayjs</a></td>
<td>string</td>
<td><code>YYYY-\\QQ</code></td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="DatePicker-picker-month">DatePicker[picker=month] <a class="header-anchor" href="#DatePicker-picker-month">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
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
<td>format</td>
<td>\u5C55\u793A\u7684\u65E5\u671F\u683C\u5F0F\uFF0C\u914D\u7F6E\u53C2\u8003 <a href="https://day.js.org/docs/zh-CN/display/format" target="_blank" rel="noopener noreferrer">dayjs</a></td>
<td>string</td>
<td><code>YYYY-MM</code></td>
<td></td>
</tr>
<tr>
<td>monthCellRender</td>
<td>\u81EA\u5B9A\u4E49\u7684\u6708\u4EFD\u5185\u5BB9\u6E32\u67D3\u65B9\u6CD5</td>
<td>v-slot:monthCellRender=&quot;{current, locale}&quot;</td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="DatePicker-picker-week">DatePicker[picker=week] <a class="header-anchor" href="#DatePicker-picker-week">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
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
<td>format</td>
<td>\u5C55\u793A\u7684\u65E5\u671F\u683C\u5F0F\uFF0C\u914D\u7F6E\u53C2\u8003 <a href="https://day.js.org/docs/zh-CN/display/format" target="_blank" rel="noopener noreferrer">dayjs</a></td>
<td>string</td>
<td><code>YYYY-wo</code></td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="RangePicker">RangePicker <a class="header-anchor" href="#RangePicker">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
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
<td>allowEmpty</td>
<td>\u5141\u8BB8\u8D77\u59CB\u9879\u90E8\u5206\u4E3A\u7A7A</td>
<td>[boolean, boolean]</td>
<td>[false, false]</td>
<td></td>
</tr>
<tr>
<td>dateRender</td>
<td>\u81EA\u5B9A\u4E49\u65E5\u671F\u5355\u5143\u683C\u7684\u5185\u5BB9\u3002</td>
<td>v-slot:dateRender=&quot;{current: dayjs, today: dayjs, info: { range: <code>start</code> | <code>end</code> }}&quot;</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>defaultPickerValue</td>
<td>\u9ED8\u8BA4\u9762\u677F\u65E5\u671F</td>
<td><a href="https://day.js.org/" target="_blank" rel="noopener noreferrer">dayjs</a>[]</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>disabled</td>
<td>\u7981\u7528\u8D77\u59CB\u9879</td>
<td>[boolean, boolean]</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>disabledTime</td>
<td>\u4E0D\u53EF\u9009\u62E9\u7684\u65F6\u95F4</td>
<td>function(date: dayjs, partial: <code>start</code> | <code>end</code>)</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>format</td>
<td>\u5C55\u793A\u7684\u65E5\u671F\u683C\u5F0F</td>
<td>string</td>
<td><code>YYYY-MM-DD HH:mm:ss</code></td>
<td></td>
</tr>
<tr>
<td>ranges</td>
<td>\u9884\u8BBE\u65F6\u95F4\u8303\u56F4\u5FEB\u6377\u9009\u62E9</td>
<td>{ [range: string]: <a href="https://day.js.org/" target="_blank" rel="noopener noreferrer">dayjs</a>[] } | { [range: string]: () =&gt; <a href="https://day.js.org/" target="_blank" rel="noopener noreferrer">dayjs</a>[] }</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>renderExtraFooter</td>
<td>\u5728\u9762\u677F\u4E2D\u6DFB\u52A0\u989D\u5916\u7684\u9875\u811A</td>
<td>() =&gt; React.ReactNode</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>separator</td>
<td>\u8BBE\u7F6E\u5206\u9694\u7B26</td>
<td>string | v-slot:separator</td>
<td><code>&lt;SwapRightOutlined /&gt;</code></td>
<td></td>
</tr>
<tr>
<td>showTime</td>
<td>\u589E\u52A0\u65F6\u95F4\u9009\u62E9\u529F\u80FD</td>
<td>Object|boolean</td>
<td><a href="/components/time-picker/#API">TimePicker Options</a></td>
<td></td>
</tr>
<tr>
<td>showTime.defaultValue</td>
<td>\u8BBE\u7F6E\u7528\u6237\u9009\u62E9\u65E5\u671F\u65F6\u9ED8\u8BA4\u7684\u65F6\u5206\u79D2\uFF0C<a href="#components-date-picker-demo-disabled-date">\u4F8B\u5B50</a></td>
<td><a href="https://day.js.org/" target="_blank" rel="noopener noreferrer">dayjs</a>[]</td>
<td>[dayjs(), dayjs()]</td>
<td></td>
</tr>
<tr>
<td>value(v-model)</td>
<td>\u65E5\u671F</td>
<td><a href="https://day.js.org/" target="_blank" rel="noopener noreferrer">dayjs</a>[]</td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="RangePicker-\u4E8B\u4EF6">RangePicker \u4E8B\u4EF6 <a class="header-anchor" href="#RangePicker-\u4E8B\u4EF6">
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
<td>calendarChange</td>
<td>\u5F85\u9009\u65E5\u671F\u53D1\u751F\u53D8\u5316\u7684\u56DE\u8C03</td>
<td>function(dates: [dayjs, dayjs] | [string, string], dateStrings: [string, string], info: { range:<code>start</code>|<code>end</code> })</td>
</tr>
<tr>
<td>change</td>
<td>\u65E5\u671F\u8303\u56F4\u53D1\u751F\u53D8\u5316\u7684\u56DE\u8C03</td>
<td>function(dates: [dayjs, dayjs] | [string, string], dateStrings: [string, string])</td>
</tr>
<tr>
<td>ok</td>
<td>\u70B9\u51FB\u786E\u5B9A\u6309\u94AE\u7684\u56DE\u8C03</td>
<td>function(dates: [dayjs, dayjs] | [string, string])</td>
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
<h3 id="\u4E3A\u4F55\u5168\u5C40\u4FEE\u6539-dayjs-locale-\u4E0D\u751F\u6548\uFF1F">\u4E3A\u4F55\u5168\u5C40\u4FEE\u6539 dayjs.locale \u4E0D\u751F\u6548\uFF1F <a class="header-anchor" href="#\u4E3A\u4F55\u5168\u5C40\u4FEE\u6539-dayjs-locale-\u4E0D\u751F\u6548\uFF1F">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>DatePicker \u9ED8\u8BA4 <code>locale</code> \u4E3A <code>en</code>\u3002\u4F60\u53EF\u4EE5\u901A\u8FC7 DatePicker \u7684 <code>locale</code> \u5C5E\u6027\u6765\u5355\u72EC\u8BBE\u7F6E\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7 <a href="/components/config-provider-cn">ConfigProvider <code>locale</code></a> \u5C5E\u6027\u6765\u914D\u7F6E\u3002</p>
`,lastUpdated:1669791391941}},va={class:"markdown"},ya=B(`<p>\u8F93\u5165\u6216\u9009\u62E9\u65E5\u671F\u7684\u63A7\u4EF6\u3002</p><h2 id="\u4F55\u65F6\u4F7F\u7528">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528"><span aria-hidden="true" class="anchor">#</span></a></h2><p>\u5F53\u7528\u6237\u9700\u8981\u8F93\u5165\u4E00\u4E2A\u65E5\u671F\uFF0C\u53EF\u4EE5\u70B9\u51FB\u6807\u51C6\u8F93\u5165\u6846\uFF0C\u5F39\u51FA\u65E5\u671F\u9762\u677F\u8FDB\u884C\u9009\u62E9\u3002</p><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><p>\u65E5\u671F\u7C7B\u7EC4\u4EF6\u5305\u62EC\u4EE5\u4E0B\u4E94\u79CD\u5F62\u5F0F\u3002</p><ul><li>DatePicker</li><li>DatePicker[picker=&quot;month&quot;]</li><li>DatePicker[picker=&quot;week&quot;]</li><li>DatePicker[picker=&quot;year&quot;]</li><li>DatePicker[picker=&quot;quarter&quot;]</li><li>RangePicker</li></ul><h3 id="\u56FD\u9645\u5316\u914D\u7F6E">\u56FD\u9645\u5316\u914D\u7F6E <a class="header-anchor" href="#\u56FD\u9645\u5316\u914D\u7F6E"><span aria-hidden="true" class="anchor">#</span></a></h3><p>\u9ED8\u8BA4\u914D\u7F6E\u4E3A en-US\uFF0C\u5982\u679C\u4F60\u9700\u8981\u8BBE\u7F6E\u5176\u4ED6\u8BED\u8A00\uFF0C\u63A8\u8350\u5728\u5165\u53E3\u5904\u4F7F\u7528\u6211\u4EEC\u63D0\u4F9B\u7684\u56FD\u9645\u5316\u7EC4\u4EF6\uFF0C\u8BE6\u89C1\uFF1A<a href="/components/config-provider-cn/">ConfigProvider \u56FD\u9645\u5316</a>\u3002</p><p>\u5982\u6709\u7279\u6B8A\u9700\u6C42\uFF08\u4EC5\u4FEE\u6539\u5355\u4E00\u7EC4\u4EF6\u7684\u8BED\u8A00\uFF09\uFF0C\u8BF7\u4F7F\u7528 locale \u53C2\u6570\uFF0C\u53C2\u8003\uFF1A<a href="https://github.com/vueComponent/ant-design-vue/blob/main/components/date-picker/locale/example.json" target="_blank" rel="noopener noreferrer">\u9ED8\u8BA4\u914D\u7F6E</a>\u3002</p><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-date-picker</span> <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:locale</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>locale<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> locale <span class="token keyword">from</span> <span class="token string">&#39;ant-design-vue/es/date-picker/locale/zh_CN&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        locale<span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-config-provider</span> <span class="token attr-name">:locale</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>locale<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-date-picker</span> <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-config-provider</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">// \u9ED8\u8BA4\u8BED\u8A00\u4E3A en-US\uFF0C\u5982\u679C\u4F60\u9700\u8981\u8BBE\u7F6E\u5176\u4ED6\u8BED\u8A00\uFF0C\u63A8\u8350\u5728\u5165\u53E3\u6587\u4EF6\u5168\u5C40\u8BBE\u7F6E locale</span>
  <span class="token keyword">import</span> dayjs <span class="token keyword">from</span> <span class="token string">&#39;dayjs&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token string">&#39;dayjs/locale/zh-cn&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> locale <span class="token keyword">from</span> <span class="token string">&#39;ant-design-vue/es/date-picker/locale/zh_CN&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
  dayjs<span class="token punctuation">.</span><span class="token function">locale</span><span class="token punctuation">(</span><span class="token string">&#39;zh-cn&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token function">dayjs</span><span class="token punctuation">(</span><span class="token string">&#39;2015-01-01&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;YYYY-MM-DD&#39;</span><span class="token punctuation">)</span>
        dayjs<span class="token punctuation">,</span>
        locale
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="\u5171\u540C\u7684-API">\u5171\u540C\u7684 API <a class="header-anchor" href="#\u5171\u540C\u7684-API"><span aria-hidden="true" class="anchor">#</span></a></h3><p>\u4EE5\u4E0B API \u4E3A DatePicker\u3001 RangePicker \u5171\u4EAB\u7684 API\u3002</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>allowClear</td><td>\u662F\u5426\u663E\u793A\u6E05\u9664\u6309\u94AE</td><td>boolean</td><td>true</td><td></td></tr><tr><td>autofocus</td><td>\u81EA\u52A8\u83B7\u53D6\u7126\u70B9</td><td>boolean</td><td>false</td><td></td></tr><tr><td>bordered</td><td>\u662F\u5426\u6709\u8FB9\u6846</td><td>boolean</td><td>true</td><td></td></tr><tr><td>dateRender</td><td>\u81EA\u5B9A\u4E49\u65E5\u671F\u5355\u5143\u683C\u7684\u5185\u5BB9</td><td>v-slot:dateRender=&quot;{current, today}&quot;</td><td>-</td><td></td></tr><tr><td>disabled</td><td>\u7981\u7528</td><td>boolean</td><td>false</td><td></td></tr><tr><td>disabledDate</td><td>\u4E0D\u53EF\u9009\u62E9\u7684\u65E5\u671F</td><td>(currentDate: dayjs) =&gt; boolean</td><td>-</td><td></td></tr><tr><td>dropdownClassName</td><td>\u989D\u5916\u7684\u5F39\u51FA\u65E5\u5386 className</td><td>string</td><td>-</td><td></td></tr><tr><td>getPopupContainer</td><td>\u5B9A\u4E49\u6D6E\u5C42\u7684\u5BB9\u5668\uFF0C\u9ED8\u8BA4\u4E3A body \u4E0A\u65B0\u5EFA div</td><td>function(trigger)</td><td>-</td><td></td></tr><tr><td>inputReadOnly</td><td>\u8BBE\u7F6E\u8F93\u5165\u6846\u4E3A\u53EA\u8BFB\uFF08\u907F\u514D\u5728\u79FB\u52A8\u8BBE\u5907\u4E0A\u6253\u5F00\u865A\u62DF\u952E\u76D8\uFF09</td><td>boolean</td><td>false</td><td></td></tr><tr><td>locale</td><td>\u56FD\u9645\u5316\u914D\u7F6E</td><td>object</td><td><a href="https://github.com/vueComponent/ant-design-vue/blob/main/components/date-picker/locale/example.json" target="_blank" rel="noopener noreferrer">\u9ED8\u8BA4\u914D\u7F6E</a></td><td>-</td></tr><tr><td>mode</td><td>\u65E5\u671F\u9762\u677F\u7684\u72B6\u6001</td><td><code>time</code> | <code>date</code> | <code>month</code> | <code>year</code> | <code>decade</code></td><td>-</td><td></td></tr><tr><td>nextIcon</td><td>\u81EA\u5B9A\u4E49\u4E0B\u4E00\u4E2A\u56FE\u6807</td><td>slot</td><td>-</td><td>3.0</td></tr><tr><td>open</td><td>\u63A7\u5236\u5F39\u5C42\u662F\u5426\u5C55\u5F00</td><td>boolean</td><td>-</td><td></td></tr><tr><td>picker</td><td>\u8BBE\u7F6E\u9009\u62E9\u5668\u7C7B\u578B</td><td><code>date</code> | <code>week</code> | <code>month</code> | <code>quarter</code> | <code>year</code></td><td><code>date</code></td><td><code>quarter</code></td></tr><tr><td>placeholder</td><td>\u8F93\u5165\u6846\u63D0\u793A\u6587\u5B57</td><td>string | [string, string]</td><td>-</td><td></td></tr><tr><td>popupStyle</td><td>\u989D\u5916\u7684\u5F39\u51FA\u65E5\u5386\u6837\u5F0F</td><td>CSSProperties</td><td>{}</td><td></td></tr><tr><td>prevIcon</td><td>\u81EA\u5B9A\u4E49\u4E0A\u4E00\u4E2A\u56FE\u6807</td><td>slot</td><td>-</td><td>3.0</td></tr><tr><td>size</td><td>\u8F93\u5165\u6846\u5927\u5C0F\uFF0C<code>large</code> \u9AD8\u5EA6\u4E3A 40px\uFF0C<code>small</code> \u4E3A 24px\uFF0C\u9ED8\u8BA4\u662F 32px</td><td><code>large</code> | <code>middle</code> | <code>small</code></td><td>-</td><td></td></tr><tr><td>suffixIcon</td><td>\u81EA\u5B9A\u4E49\u7684\u9009\u62E9\u6846\u540E\u7F00\u56FE\u6807</td><td>v-slot:suffixIcon</td><td>-</td><td></td></tr><tr><td>superNextIcon</td><td>\u81EA\u5B9A\u4E49 <code>&lt;&lt;</code> \u5207\u6362\u56FE\u6807</td><td>slot</td><td>-</td><td>3.0</td></tr><tr><td>superPrevIcon</td><td>\u81EA\u5B9A\u4E49 <code>&gt;&gt;</code> \u5207\u6362\u56FE\u6807</td><td>slot</td><td>-</td><td>3.0</td></tr><tr><td>valueFormat</td><td>\u53EF\u9009\uFF0C\u7ED1\u5B9A\u503C\u7684\u683C\u5F0F\uFF0C\u5BF9 value\u3001defaultValue\u3001defaultPickerValue \u8D77\u4F5C\u7528\u3002\u4E0D\u6307\u5B9A\u5219\u7ED1\u5B9A\u503C\u4E3A dayjs \u5BF9\u8C61</td><td>string\uFF0C<a href="https://day.js.org/docs/zh-CN/display/format" target="_blank" rel="noopener noreferrer">\u5177\u4F53\u683C\u5F0F</a></td><td>-</td><td></td></tr></tbody></table><h3 id="\u5171\u6709\u7684\u4E8B\u4EF6">\u5171\u6709\u7684\u4E8B\u4EF6 <a class="header-anchor" href="#\u5171\u6709\u7684\u4E8B\u4EF6"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th><th></th></tr></thead><tbody><tr><td>openChange</td><td>\u5F39\u51FA\u65E5\u5386\u548C\u5173\u95ED\u65E5\u5386\u7684\u56DE\u8C03</td><td>function(status)</td><td></td></tr><tr><td>panelChange</td><td>\u65E5\u671F\u9762\u677F\u53D8\u5316\u65F6\u7684\u56DE\u8C03</td><td>function(value, mode)</td><td>-</td></tr></tbody></table><h3 id="\u5171\u540C\u7684\u65B9\u6CD5">\u5171\u540C\u7684\u65B9\u6CD5 <a class="header-anchor" href="#\u5171\u540C\u7684\u65B9\u6CD5"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>\u540D\u79F0</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>blur()</td><td>\u79FB\u9664\u7126\u70B9</td></tr><tr><td>focus()</td><td>\u83B7\u53D6\u7126\u70B9</td></tr></tbody></table><h3 id="DatePicker">DatePicker <a class="header-anchor" href="#DatePicker"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>defaultPickerValue</td><td>\u9ED8\u8BA4\u9762\u677F\u65E5\u671F</td><td><a href="https://day.js.org/" target="_blank" rel="noopener noreferrer">dayjs</a></td><td>-</td><td></td></tr><tr><td>disabledTime</td><td>\u4E0D\u53EF\u9009\u62E9\u7684\u65F6\u95F4</td><td>function(date)</td><td>-</td><td></td></tr><tr><td>format</td><td>\u8BBE\u7F6E\u65E5\u671F\u683C\u5F0F\uFF0C\u4E3A\u6570\u7EC4\u65F6\u652F\u6301\u591A\u683C\u5F0F\u5339\u914D\uFF0C\u5C55\u793A\u4EE5\u7B2C\u4E00\u4E2A\u4E3A\u51C6\u3002\u914D\u7F6E\u53C2\u8003 <a href="https://day.js.org/docs/zh-CN/display/format" target="_blank" rel="noopener noreferrer">dayjs</a>\uFF0C\u652F\u6301<a href="#components-date-picker-demo-format">\u81EA\u5B9A\u4E49\u683C\u5F0F</a></td><td>string | (value: dayjs) =&gt; string | (string | (value: dayjs) =&gt; string)[]</td><td><code>YYYY-MM-DD</code></td><td></td></tr><tr><td>renderExtraFooter</td><td>\u5728\u9762\u677F\u4E2D\u6DFB\u52A0\u989D\u5916\u7684\u9875\u811A</td><td>v-slot:renderExtraFooter=&quot;mode&quot;</td><td>-</td><td></td></tr><tr><td>showNow</td><td>\u5F53\u8BBE\u5B9A\u4E86 <code>showTime</code> \u7684\u65F6\u5019\uFF0C\u9762\u677F\u662F\u5426\u663E\u793A\u201C\u6B64\u523B\u201D\u6309\u94AE</td><td>boolean</td><td>-</td><td></td></tr><tr><td>showTime</td><td>\u589E\u52A0\u65F6\u95F4\u9009\u62E9\u529F\u80FD</td><td>Object | boolean</td><td><a href="/components/time-picker/#API">TimePicker Options</a></td><td></td></tr><tr><td>showTime.defaultValue</td><td>\u8BBE\u7F6E\u7528\u6237\u9009\u62E9\u65E5\u671F\u65F6\u9ED8\u8BA4\u7684\u65F6\u5206\u79D2\uFF0C<a href="#components-date-picker-demo-disabled-date">\u4F8B\u5B50</a></td><td><a href="https://day.js.org/" target="_blank" rel="noopener noreferrer">dayjs</a></td><td>dayjs()</td><td></td></tr><tr><td>showToday</td><td>\u662F\u5426\u5C55\u793A\u201C\u4ECA\u5929\u201D\u6309\u94AE</td><td>boolean</td><td>true</td><td></td></tr><tr><td>value(v-model)</td><td>\u65E5\u671F</td><td><a href="https://day.js.org/" target="_blank" rel="noopener noreferrer">dayjs</a></td><td>-</td><td></td></tr></tbody></table><h3 id="DatePicker-\u4E8B\u4EF6">DatePicker \u4E8B\u4EF6 <a class="header-anchor" href="#DatePicker-\u4E8B\u4EF6"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u65F6\u95F4\u53D1\u751F\u53D8\u5316\u7684\u56DE\u8C03</td><td>function(date: dayjs | string, dateString: string)</td></tr><tr><td>ok</td><td>\u70B9\u51FB\u786E\u5B9A\u6309\u94AE\u7684\u56DE\u8C03</td><td>function(date: dayjs | string)</td></tr></tbody></table><h3 id="DatePicker-picker-year">DatePicker[picker=year] <a class="header-anchor" href="#DatePicker-picker-year"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>format</td><td>\u5C55\u793A\u7684\u65E5\u671F\u683C\u5F0F\uFF0C\u914D\u7F6E\u53C2\u8003 <a href="https://day.js.org/docs/zh-CN/display/format" target="_blank" rel="noopener noreferrer">dayjs</a></td><td>string</td><td><code>YYYY</code></td><td></td></tr></tbody></table><h3 id="DatePicker-picker-quarter">DatePicker[picker=quarter] <a class="header-anchor" href="#DatePicker-picker-quarter"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>format</td><td>\u5C55\u793A\u7684\u65E5\u671F\u683C\u5F0F\uFF0C\u914D\u7F6E\u53C2\u8003 <a href="https://day.js.org/docs/zh-CN/display/format" target="_blank" rel="noopener noreferrer">dayjs</a></td><td>string</td><td><code>YYYY-\\QQ</code></td><td></td></tr></tbody></table><h3 id="DatePicker-picker-month">DatePicker[picker=month] <a class="header-anchor" href="#DatePicker-picker-month"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>format</td><td>\u5C55\u793A\u7684\u65E5\u671F\u683C\u5F0F\uFF0C\u914D\u7F6E\u53C2\u8003 <a href="https://day.js.org/docs/zh-CN/display/format" target="_blank" rel="noopener noreferrer">dayjs</a></td><td>string</td><td><code>YYYY-MM</code></td><td></td></tr><tr><td>monthCellRender</td><td>\u81EA\u5B9A\u4E49\u7684\u6708\u4EFD\u5185\u5BB9\u6E32\u67D3\u65B9\u6CD5</td><td>v-slot:monthCellRender=&quot;{current, locale}&quot;</td><td>-</td><td></td></tr></tbody></table><h3 id="DatePicker-picker-week">DatePicker[picker=week] <a class="header-anchor" href="#DatePicker-picker-week"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>format</td><td>\u5C55\u793A\u7684\u65E5\u671F\u683C\u5F0F\uFF0C\u914D\u7F6E\u53C2\u8003 <a href="https://day.js.org/docs/zh-CN/display/format" target="_blank" rel="noopener noreferrer">dayjs</a></td><td>string</td><td><code>YYYY-wo</code></td><td></td></tr></tbody></table><h3 id="RangePicker">RangePicker <a class="header-anchor" href="#RangePicker"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>allowEmpty</td><td>\u5141\u8BB8\u8D77\u59CB\u9879\u90E8\u5206\u4E3A\u7A7A</td><td>[boolean, boolean]</td><td>[false, false]</td><td></td></tr><tr><td>dateRender</td><td>\u81EA\u5B9A\u4E49\u65E5\u671F\u5355\u5143\u683C\u7684\u5185\u5BB9\u3002</td><td>v-slot:dateRender=&quot;{current: dayjs, today: dayjs, info: { range: <code>start</code> | <code>end</code> }}&quot;</td><td>-</td><td></td></tr><tr><td>defaultPickerValue</td><td>\u9ED8\u8BA4\u9762\u677F\u65E5\u671F</td><td><a href="https://day.js.org/" target="_blank" rel="noopener noreferrer">dayjs</a>[]</td><td>-</td><td></td></tr><tr><td>disabled</td><td>\u7981\u7528\u8D77\u59CB\u9879</td><td>[boolean, boolean]</td><td>-</td><td></td></tr><tr><td>disabledTime</td><td>\u4E0D\u53EF\u9009\u62E9\u7684\u65F6\u95F4</td><td>function(date: dayjs, partial: <code>start</code> | <code>end</code>)</td><td>-</td><td></td></tr><tr><td>format</td><td>\u5C55\u793A\u7684\u65E5\u671F\u683C\u5F0F</td><td>string</td><td><code>YYYY-MM-DD HH:mm:ss</code></td><td></td></tr><tr><td>ranges</td><td>\u9884\u8BBE\u65F6\u95F4\u8303\u56F4\u5FEB\u6377\u9009\u62E9</td><td>{ [range: string]: <a href="https://day.js.org/" target="_blank" rel="noopener noreferrer">dayjs</a>[] } | { [range: string]: () =&gt; <a href="https://day.js.org/" target="_blank" rel="noopener noreferrer">dayjs</a>[] }</td><td>-</td><td></td></tr><tr><td>renderExtraFooter</td><td>\u5728\u9762\u677F\u4E2D\u6DFB\u52A0\u989D\u5916\u7684\u9875\u811A</td><td>() =&gt; React.ReactNode</td><td>-</td><td></td></tr><tr><td>separator</td><td>\u8BBE\u7F6E\u5206\u9694\u7B26</td><td>string | v-slot:separator</td><td><code>&lt;SwapRightOutlined /&gt;</code></td><td></td></tr><tr><td>showTime</td><td>\u589E\u52A0\u65F6\u95F4\u9009\u62E9\u529F\u80FD</td><td>Object|boolean</td><td><a href="/components/time-picker/#API">TimePicker Options</a></td><td></td></tr><tr><td>showTime.defaultValue</td><td>\u8BBE\u7F6E\u7528\u6237\u9009\u62E9\u65E5\u671F\u65F6\u9ED8\u8BA4\u7684\u65F6\u5206\u79D2\uFF0C<a href="#components-date-picker-demo-disabled-date">\u4F8B\u5B50</a></td><td><a href="https://day.js.org/" target="_blank" rel="noopener noreferrer">dayjs</a>[]</td><td>[dayjs(), dayjs()]</td><td></td></tr><tr><td>value(v-model)</td><td>\u65E5\u671F</td><td><a href="https://day.js.org/" target="_blank" rel="noopener noreferrer">dayjs</a>[]</td><td>-</td><td></td></tr></tbody></table><h3 id="RangePicker-\u4E8B\u4EF6">RangePicker \u4E8B\u4EF6 <a class="header-anchor" href="#RangePicker-\u4E8B\u4EF6"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>calendarChange</td><td>\u5F85\u9009\u65E5\u671F\u53D1\u751F\u53D8\u5316\u7684\u56DE\u8C03</td><td>function(dates: [dayjs, dayjs] | [string, string], dateStrings: [string, string], info: { range:<code>start</code>|<code>end</code> })</td></tr><tr><td>change</td><td>\u65E5\u671F\u8303\u56F4\u53D1\u751F\u53D8\u5316\u7684\u56DE\u8C03</td><td>function(dates: [dayjs, dayjs] | [string, string], dateStrings: [string, string])</td></tr><tr><td>ok</td><td>\u70B9\u51FB\u786E\u5B9A\u6309\u94AE\u7684\u56DE\u8C03</td><td>function(dates: [dayjs, dayjs] | [string, string])</td></tr></tbody></table><h2 id="FAQ">FAQ <a class="header-anchor" href="#FAQ"><span aria-hidden="true" class="anchor">#</span></a></h2><h3 id="\u5982\u4F55\u5728-DatePicker-\u4E2D\u4F7F\u7528\u81EA\u5B9A\u4E49\u65E5\u671F\u5E93\uFF08\u5982-moment-js-dayjs-date-fns\uFF09\uFF1F">\u5982\u4F55\u5728 DatePicker \u4E2D\u4F7F\u7528\u81EA\u5B9A\u4E49\u65E5\u671F\u5E93\uFF08\u5982 moment.js | dayjs | date-fns\uFF09\uFF1F <a class="header-anchor" href="#\u5982\u4F55\u5728-DatePicker-\u4E2D\u4F7F\u7528\u81EA\u5B9A\u4E49\u65E5\u671F\u5E93\uFF08\u5982-moment-js-dayjs-date-fns\uFF09\uFF1F"><span aria-hidden="true" class="anchor">#</span></a></h3><p>\u8BF7\u53C2\u8003<a href="/docs/vue/replace-date-cn">\u300A\u81EA\u5B9A\u4E49\u65E5\u671F\u5E93\u300B</a></p><h3 id="\u4E3A\u4F55\u5168\u5C40\u4FEE\u6539-dayjs-locale-\u4E0D\u751F\u6548\uFF1F">\u4E3A\u4F55\u5168\u5C40\u4FEE\u6539 dayjs.locale \u4E0D\u751F\u6548\uFF1F <a class="header-anchor" href="#\u4E3A\u4F55\u5168\u5C40\u4FEE\u6539-dayjs-locale-\u4E0D\u751F\u6548\uFF1F"><span aria-hidden="true" class="anchor">#</span></a></h3><p>DatePicker \u9ED8\u8BA4 <code>locale</code> \u4E3A <code>en</code>\u3002\u4F60\u53EF\u4EE5\u901A\u8FC7 DatePicker \u7684 <code>locale</code> \u5C5E\u6027\u6765\u5355\u72EC\u8BBE\u7F6E\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7 <a href="/components/config-provider-cn">ConfigProvider <code>locale</code></a> \u5C5E\u6027\u6765\u914D\u7F6E\u3002</p>`,39),fa=[ya];function Za(t,s,r,g,I,C){return h(),G("article",va,fa)}const Wa=v(ba,[["render",Za]]),Ya={pageData:{title:"DatePicker",description:"",frontmatter:{category:"Components",type:"Data Entry",title:"DatePicker",cover:"https://gw.alipayobjects.com/zos/alicdn/RT_USzA48/DatePicker.svg"},headers:[{level:2,title:"When To Use",slug:"When-To-Use",content:"By clicking the input box, you can select a date from a popup calendar."},{level:2,title:"API",slug:"API",content:"There are five kinds of picker:"},{level:3,title:"Localization",slug:"Localization",content:"The default locale is en-US, if you need to use other languages, recommend to use internationalized components provided by us at the entrance. Look at: [ConfigProvider](/components/config-provider/)."},{level:3,title:"Common API",slug:"Common-API",content:"The following APIs are shared by DatePicker, RangePicker."},{level:3,title:"Common Events",slug:"Common-Events",content:""},{level:3,title:"Common Methods",slug:"Common-Methods",content:""},{level:3,title:"DatePicker",slug:"DatePicker",content:""},{level:3,title:"DatePicker Events",slug:"DatePicker-Events",content:""},{level:3,title:"DatePicker\\[picker=year]",slug:"DatePicker-picker-year",content:""},{level:3,title:"DatePicker\\[picker=quarter]",slug:"DatePicker-picker-quarter",content:""},{level:3,title:"DatePicker\\[picker=month]",slug:"DatePicker-picker-month",content:""},{level:3,title:"DatePicker\\[picker=week]",slug:"DatePicker-picker-week",content:""},{level:3,title:"RangePicker",slug:"RangePicker",content:""},{level:3,title:"RangePicker Events",slug:"RangePicker-Events",content:""},{level:2,title:"FAQ",slug:"FAQ",content:"How to use DatePicker with customize date library\uFF08like moment.js \\| dayjs \\| date-fns\uFF09\uFF1F"},{level:3,title:"How to use DatePicker with customize date library\uFF08like moment.js \\| dayjs \\| date-fns\uFF09\uFF1F",slug:"How-to-use-DatePicker-with-customize-date-library\uFF08like-moment-js-dayjs-date-fns\uFF09\uFF1F",content:"Please refer [replace date](/docs/vue/replace-date)"},{level:3,title:"Why config dayjs.locale globally not work?",slug:"Why-config-dayjs-locale-globally-not-work",content:"DatePicker default set `locale` as `en` in v4. You can config DatePicker `locale` prop or [ConfigProvider `locale`](/components/config-provider) prop instead."}],relativePath:"components/date-picker/index.en-US.md",content:`
To select or input a date.

## When To Use

By clicking the input box, you can select a date from a popup calendar.

## API

There are five kinds of picker:

- DatePicker
- DatePicker\\[picker=&quot;month&quot;]
- DatePicker\\[picker=&quot;week&quot;]
- DatePicker\\[picker=&quot;year&quot;]
- DatePicker\\[picker=&quot;quarter&quot;]
- RangePicker

### Localization

The default locale is en-US, if you need to use other languages, recommend to use internationalized components provided by us at the entrance. Look at: [ConfigProvider](/components/config-provider/).

If there are special needs (only modifying single component language), Please use the property: local. Example: [default](https://github.com/vueComponent/ant-design-vue/blob/main/components/date-picker/locale/example.json).

\`\`\`html
&lt;template&gt;
  &lt;a-date-picker v-model:value=&quot;value&quot; :locale=&quot;locale&quot; /&gt;
&lt;/template&gt;
&lt;script&gt;
  import locale from &#39;ant-design-vue/es/date-picker/locale/zh_CN&#39;;
  import { defineComponent } from &#39;vue&#39;;
  export default defineComponent({
    setup() {
      return {
        locale,
        value: null,
      };
    },
  });
&lt;/script&gt;
\`\`\`

\`\`\`html
&lt;template&gt;
  &lt;a-config-provider :locale=&quot;locale&quot;&gt;
    &lt;a-date-picker v-model:value=&quot;value&quot; /&gt;
  &lt;/a-config-provider&gt;
&lt;/template&gt;
&lt;script&gt;
  // The default locale is en-US, if you want to use other locale, just set locale in entry file globally.
  import dayjs from &#39;dayjs&#39;;
  import &#39;dayjs/locale/zh-cn&#39;;
  import locale from &#39;ant-design-vue/es/date-picker/locale/zh_CN&#39;;
  import { defineComponent } from &#39;vue&#39;;
  dayjs.locale(&#39;zh-cn&#39;);
  export default defineComponent({
    setup() {
      return {
        value: dayjs(&#39;2015-01-01&#39;, &#39;YYYY-MM-DD&#39;)
        dayjs,
        locale
      };
    },
  });
&lt;/script&gt;
\`\`\`

### Common API

The following APIs are shared by DatePicker, RangePicker.

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| allowClear | Whether to show clear button | boolean | true |  |
| autofocus | If get focus when component mounted | boolean | false |  |
| bordered | Whether has border style | boolean | true |  |
| dateRender | Custom rendering function for date cells | v-slot:dateRender=&quot;{current, today}&quot; | - |  |
| disabled | Determine whether the DatePicker is disabled | boolean | false |  |
| disabledDate | Specify the date that cannot be selected | (currentDate: dayjs) =&gt; boolean | - |  |
| dropdownClassName | To customize the className of the popup calendar | string | - |  |
| getPopupContainer | To set the container of the floating layer, while the default is to create a \`div\` element in \`body\` | function(trigger) | - |  |
| inputReadOnly | Set the \`readonly\` attribute of the input tag (avoids virtual keyboard on touch devices) | boolean | false |  |
| locale | Localization configuration | object | [default](https://github.com/vueComponent/ant-design-vue/blob/main/components/date-picker/locale/example.json) |  |
| mode | The picker panel mode | \`time\` \\| \`date\` \\| \`month\` \\| \`year\` \\| \`decade\` | - |  |
| nextIcon | The custom next icon | slot | - | 3.0 |
| open | The open state of picker | boolean | - |  |
| picker | Set picker type | \`date\` \\| \`week\` \\| \`month\` \\| \`quarter\` \\| \`year\` | \`date\` | \`quarter\` |
| placeholder | The placeholder of date input | string \\| \\[string,string] | - |  |
| popupStyle | To customize the style of the popup calendar | CSSProperties | {} |  |
| prevIcon | The custom prev icon | slot | - | 3.0 |
| size | To determine the size of the input box, the height of \`large\` and \`small\`, are 40px and 24px respectively, while default size is 32px | \`large\` \\| \`middle\` \\| \`small\` | - |  |
| suffixIcon | The custom suffix icon | v-slot:suffixIcon | - |  |
| superNextIcon | The custom super next icon | slot | - | 3.0 |
| superPrevIcon | The custom super prev icon | slot | - | 3.0 |
| valueFormat | optional, format of binding value. If not specified, the binding value will be a Date object | string\uFF0C[date formats](https://day.js.org/docs/en/display/format) | - |  |

### Common Events

| Events Name | Description | Arguments | Version |
| --- | --- | --- | --- |
| openChange | a callback function, can be executed whether the popup calendar is popped up or closed | function(status) |  |
| panelChange | callback when picker panel mode is changed | function(value, mode) |  |

### Common Methods

| Name    | Description  | Version |
| ------- | ------------ | ------- |
| blur()  | remove focus |         |
| focus() | get focus    |         |

### DatePicker

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| defaultPickerValue | To set default picker date | [dayjs](https://day.js.org/) | - |  |
| disabledTime | To specify the time that cannot be selected | function(date) | - |  |
| format | To set the date format, refer to [dayjs](https://day.js.org/). When an array is provided, all values are used for parsing and first value is used for formatting, support [Custom Format](#components-date-picker-demo-format) | string \\| (value: dayjs) =&gt; string \\| (string \\| (value: dayjs) =&gt; string)\\[] | \`YYYY-MM-DD\` |  |
| renderExtraFooter | Render extra footer in panel | v-slot:renderExtraFooter=&quot;mode&quot; | - |  |
| showNow | Whether to show &#39;Now&#39; button on panel when \`showTime\` is set | boolean | - |  |
| showTime | To provide an additional time selection | object \\| boolean | [TimePicker Options](/components/time-picker/#API) |  |
| showTime.defaultValue | To set default time of selected date, [demo](#components-date-picker-demo-disabled-date) | [dayjs](https://day.js.org/) | dayjs() |  |
| showToday | Whether to show \`Today\` button | boolean | true |  |
| value(v-model) | To set date | [dayjs](https://day.js.org/) | - |  |

### DatePicker Events

| Events Name | Description | Arguments | Version |
| --- | --- | --- | --- |
| change | a callback function, can be executed when the selected time is changing | function(date: dayjs \\| string, dateString: string) |  |
| ok | callback when click ok button | function(date: dayjs \\| string) |  |

### DatePicker\\[picker=year]

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| format | To set the date format, refer to [dayjs](https://day.js.org/) | string | \`YYYY\` |  |

### DatePicker\\[picker=quarter]

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| format | To set the date format, refer to [dayjs](https://day.js.org/) | string | \`YYYY-\\QQ\` |  |

### DatePicker\\[picker=month]

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| format | To set the date format, refer to [dayjs](https://day.js.org/) | string | \`YYYY-MM\` |  |
| monthCellRender | Custom month cell content render method | v-slot:monthCellRender=&quot;{current, locale}&quot; | - |  |

### DatePicker\\[picker=week]

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| format | To set the date format, refer to [dayjs](https://day.js.org/) | string | \`YYYY-wo\` |  |

### RangePicker

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| allowEmpty | Allow start or end input leave empty | \\[boolean, boolean] | \\[false, false] |  |
| dateRender | Customize date cell. | v-slot:dateRender=&quot;{current: dayjs, today: dayjs, info: { range: \`start\` \\| \`end\` }}&quot; | - |  |
| defaultPickerValue | To set default picker date | \\[[dayjs](https://day.js.org/), [dayjs](https://day.js.org/)] | - |  |
| disabled | If disable start or end | \\[boolean, boolean] | - |  |
| disabledTime | To specify the time that cannot be selected | function(date: dayjs, partial: \`start\` \\| \`end\`) | - |  |
| format | To set the date format, refer to [dayjs](https://day.js.org/). When an array is provided, all values are used for parsing and first value is used for formatting | string \\| string\\[] | \`YYYY-MM-DD HH:mm:ss\` |  |
| ranges | The preseted ranges for quick selection | { \\[range: string]: [dayjs](https://day.js.org/)\\[] } \\| { \\[range: string]: () =&gt; [dayjs](https://day.js.org/)\\[] } | - |  |
| renderExtraFooter | Render extra footer in panel | v-slot:renderExtraFooter | - |  |
| separator | Set separator between inputs | string \\| v-slot:separator | \`&lt;SwapRightOutlined /&gt;\` |  |
| showTime | To provide an additional time selection | object \\| boolean | [TimePicker Options](/components/time-picker/#API) |  |
| showTime.defaultValue | To set default time of selected date, [demo](#components-date-picker-demo-disabled-date) | [dayjs](https://day.js.org/)\\[] | \\[dayjs(), dayjs()] |  |
| value(v-model) | To set date | \\[[dayjs](https://day.js.org/), [dayjs](https://day.js.org/)] | - |  |

### RangePicker Events

| Events Name | Description | Arguments | Version |  |
| --- | --- | --- | --- | --- |
| calendarChange | Callback function, can be executed when the start time or the end time of the range is changing. | function(dates: \\[dayjs, dayjs], dateStrings: \\[string, string], info: { range:\`start\`\\|\`end\` }) | - |  |
| change | a callback function, can be executed when the selected time is changing | function(dates: \\[dayjs, dayjs] \\| \\[string, string], dateStrings: \\[string, string]) |  |  |
| ok | callback when click ok button | function(dates: \\[dayjs, dayjs] \\| \\[string, string]) |  |  |

## FAQ

### How to use DatePicker with customize date library\uFF08like moment.js \\| dayjs \\| date-fns\uFF09\uFF1F

Please refer [replace date](/docs/vue/replace-date)

### Why config dayjs.locale globally not work?

DatePicker default set \`locale\` as \`en\` in v4. You can config DatePicker \`locale\` prop or [ConfigProvider \`locale\`](/components/config-provider) prop instead.
`,html:`<p>To select or input a date.</p>
<h2 id="When-To-Use">When To Use <a class="header-anchor" href="#When-To-Use">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>By clicking the input box, you can select a date from a popup calendar.</p>
<h2 id="API">API <a class="header-anchor" href="#API">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>There are five kinds of picker:</p>
<ul>
<li>DatePicker</li>
<li>DatePicker[picker=&quot;month&quot;]</li>
<li>DatePicker[picker=&quot;week&quot;]</li>
<li>DatePicker[picker=&quot;year&quot;]</li>
<li>DatePicker[picker=&quot;quarter&quot;]</li>
<li>RangePicker</li>
</ul>
<h3 id="Localization">Localization <a class="header-anchor" href="#Localization">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>The default locale is en-US, if you need to use other languages, recommend to use internationalized components provided by us at the entrance. Look at: <a href="/components/config-provider/">ConfigProvider</a>.</p>
<p>If there are special needs (only modifying single component language), Please use the property: local. Example: <a href="https://github.com/vueComponent/ant-design-vue/blob/main/components/date-picker/locale/example.json" target="_blank" rel="noopener noreferrer">default</a>.</p>
<pre class="language-html" v-pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-date-picker</span> <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span> <span class="token attr-name">:locale</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>locale<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> locale <span class="token keyword">from</span> <span class="token string">'ant-design-vue/es/date-picker/locale/zh_CN'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        locale<span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre>
<pre class="language-html" v-pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-config-provider</span> <span class="token attr-name">:locale</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>locale<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-date-picker</span> <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-config-provider</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">// The default locale is en-US, if you want to use other locale, just set locale in entry file globally.</span>
  <span class="token keyword">import</span> dayjs <span class="token keyword">from</span> <span class="token string">'dayjs'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token string">'dayjs/locale/zh-cn'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> locale <span class="token keyword">from</span> <span class="token string">'ant-design-vue/es/date-picker/locale/zh_CN'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
  dayjs<span class="token punctuation">.</span><span class="token function">locale</span><span class="token punctuation">(</span><span class="token string">'zh-cn'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token function">dayjs</span><span class="token punctuation">(</span><span class="token string">'2015-01-01'</span><span class="token punctuation">,</span> <span class="token string">'YYYY-MM-DD'</span><span class="token punctuation">)</span>
        dayjs<span class="token punctuation">,</span>
        locale
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre>
<h3 id="Common-API">Common API <a class="header-anchor" href="#Common-API">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>The following APIs are shared by DatePicker, RangePicker.</p>
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
<td>Whether to show clear button</td>
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
<td>dateRender</td>
<td>Custom rendering function for date cells</td>
<td>v-slot:dateRender=&quot;{current, today}&quot;</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>disabled</td>
<td>Determine whether the DatePicker is disabled</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>disabledDate</td>
<td>Specify the date that cannot be selected</td>
<td>(currentDate: dayjs) =&gt; boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>dropdownClassName</td>
<td>To customize the className of the popup calendar</td>
<td>string</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>getPopupContainer</td>
<td>To set the container of the floating layer, while the default is to create a <code>div</code> element in <code>body</code></td>
<td>function(trigger)</td>
<td>-</td>
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
<td>locale</td>
<td>Localization configuration</td>
<td>object</td>
<td><a href="https://github.com/vueComponent/ant-design-vue/blob/main/components/date-picker/locale/example.json" target="_blank" rel="noopener noreferrer">default</a></td>
<td></td>
</tr>
<tr>
<td>mode</td>
<td>The picker panel mode</td>
<td><code>time</code> | <code>date</code> | <code>month</code> | <code>year</code> | <code>decade</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>nextIcon</td>
<td>The custom next icon</td>
<td>slot</td>
<td>-</td>
<td>3.0</td>
</tr>
<tr>
<td>open</td>
<td>The open state of picker</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>picker</td>
<td>Set picker type</td>
<td><code>date</code> | <code>week</code> | <code>month</code> | <code>quarter</code> | <code>year</code></td>
<td><code>date</code></td>
<td><code>quarter</code></td>
</tr>
<tr>
<td>placeholder</td>
<td>The placeholder of date input</td>
<td>string | [string,string]</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>popupStyle</td>
<td>To customize the style of the popup calendar</td>
<td>CSSProperties</td>
<td>{}</td>
<td></td>
</tr>
<tr>
<td>prevIcon</td>
<td>The custom prev icon</td>
<td>slot</td>
<td>-</td>
<td>3.0</td>
</tr>
<tr>
<td>size</td>
<td>To determine the size of the input box, the height of <code>large</code> and <code>small</code>, are 40px and 24px respectively, while default size is 32px</td>
<td><code>large</code> | <code>middle</code> | <code>small</code></td>
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
<td>superNextIcon</td>
<td>The custom super next icon</td>
<td>slot</td>
<td>-</td>
<td>3.0</td>
</tr>
<tr>
<td>superPrevIcon</td>
<td>The custom super prev icon</td>
<td>slot</td>
<td>-</td>
<td>3.0</td>
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
<h3 id="Common-Events">Common Events <a class="header-anchor" href="#Common-Events">
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
<td>openChange</td>
<td>a callback function, can be executed whether the popup calendar is popped up or closed</td>
<td>function(status)</td>
<td></td>
</tr>
<tr>
<td>panelChange</td>
<td>callback when picker panel mode is changed</td>
<td>function(value, mode)</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="Common-Methods">Common Methods <a class="header-anchor" href="#Common-Methods">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
<th>Version</th>
</tr>
</thead>
<tbody>
<tr>
<td>blur()</td>
<td>remove focus</td>
<td></td>
</tr>
<tr>
<td>focus()</td>
<td>get focus</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="DatePicker">DatePicker <a class="header-anchor" href="#DatePicker">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
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
<td>defaultPickerValue</td>
<td>To set default picker date</td>
<td><a href="https://day.js.org/" target="_blank" rel="noopener noreferrer">dayjs</a></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>disabledTime</td>
<td>To specify the time that cannot be selected</td>
<td>function(date)</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>format</td>
<td>To set the date format, refer to <a href="https://day.js.org/" target="_blank" rel="noopener noreferrer">dayjs</a>. When an array is provided, all values are used for parsing and first value is used for formatting, support <a href="#components-date-picker-demo-format">Custom Format</a></td>
<td>string | (value: dayjs) =&gt; string | (string | (value: dayjs) =&gt; string)[]</td>
<td><code>YYYY-MM-DD</code></td>
<td></td>
</tr>
<tr>
<td>renderExtraFooter</td>
<td>Render extra footer in panel</td>
<td>v-slot:renderExtraFooter=&quot;mode&quot;</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>showNow</td>
<td>Whether to show 'Now' button on panel when <code>showTime</code> is set</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>showTime</td>
<td>To provide an additional time selection</td>
<td>object | boolean</td>
<td><a href="/components/time-picker/#API">TimePicker Options</a></td>
<td></td>
</tr>
<tr>
<td>showTime.defaultValue</td>
<td>To set default time of selected date, <a href="#components-date-picker-demo-disabled-date">demo</a></td>
<td><a href="https://day.js.org/" target="_blank" rel="noopener noreferrer">dayjs</a></td>
<td>dayjs()</td>
<td></td>
</tr>
<tr>
<td>showToday</td>
<td>Whether to show <code>Today</code> button</td>
<td>boolean</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>value(v-model)</td>
<td>To set date</td>
<td><a href="https://day.js.org/" target="_blank" rel="noopener noreferrer">dayjs</a></td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="DatePicker-Events">DatePicker Events <a class="header-anchor" href="#DatePicker-Events">
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
<td>a callback function, can be executed when the selected time is changing</td>
<td>function(date: dayjs | string, dateString: string)</td>
<td></td>
</tr>
<tr>
<td>ok</td>
<td>callback when click ok button</td>
<td>function(date: dayjs | string)</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="DatePicker-picker-year">DatePicker[picker=year] <a class="header-anchor" href="#DatePicker-picker-year">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
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
<td>format</td>
<td>To set the date format, refer to <a href="https://day.js.org/" target="_blank" rel="noopener noreferrer">dayjs</a></td>
<td>string</td>
<td><code>YYYY</code></td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="DatePicker-picker-quarter">DatePicker[picker=quarter] <a class="header-anchor" href="#DatePicker-picker-quarter">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
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
<td>format</td>
<td>To set the date format, refer to <a href="https://day.js.org/" target="_blank" rel="noopener noreferrer">dayjs</a></td>
<td>string</td>
<td><code>YYYY-\\QQ</code></td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="DatePicker-picker-month">DatePicker[picker=month] <a class="header-anchor" href="#DatePicker-picker-month">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
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
<td>format</td>
<td>To set the date format, refer to <a href="https://day.js.org/" target="_blank" rel="noopener noreferrer">dayjs</a></td>
<td>string</td>
<td><code>YYYY-MM</code></td>
<td></td>
</tr>
<tr>
<td>monthCellRender</td>
<td>Custom month cell content render method</td>
<td>v-slot:monthCellRender=&quot;{current, locale}&quot;</td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="DatePicker-picker-week">DatePicker[picker=week] <a class="header-anchor" href="#DatePicker-picker-week">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
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
<td>format</td>
<td>To set the date format, refer to <a href="https://day.js.org/" target="_blank" rel="noopener noreferrer">dayjs</a></td>
<td>string</td>
<td><code>YYYY-wo</code></td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="RangePicker">RangePicker <a class="header-anchor" href="#RangePicker">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
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
<td>allowEmpty</td>
<td>Allow start or end input leave empty</td>
<td>[boolean, boolean]</td>
<td>[false, false]</td>
<td></td>
</tr>
<tr>
<td>dateRender</td>
<td>Customize date cell.</td>
<td>v-slot:dateRender=&quot;{current: dayjs, today: dayjs, info: { range: <code>start</code> | <code>end</code> }}&quot;</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>defaultPickerValue</td>
<td>To set default picker date</td>
<td>[<a href="https://day.js.org/" target="_blank" rel="noopener noreferrer">dayjs</a>, <a href="https://day.js.org/" target="_blank" rel="noopener noreferrer">dayjs</a>]</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>disabled</td>
<td>If disable start or end</td>
<td>[boolean, boolean]</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>disabledTime</td>
<td>To specify the time that cannot be selected</td>
<td>function(date: dayjs, partial: <code>start</code> | <code>end</code>)</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>format</td>
<td>To set the date format, refer to <a href="https://day.js.org/" target="_blank" rel="noopener noreferrer">dayjs</a>. When an array is provided, all values are used for parsing and first value is used for formatting</td>
<td>string | string[]</td>
<td><code>YYYY-MM-DD HH:mm:ss</code></td>
<td></td>
</tr>
<tr>
<td>ranges</td>
<td>The preseted ranges for quick selection</td>
<td>{ [range: string]: <a href="https://day.js.org/" target="_blank" rel="noopener noreferrer">dayjs</a>[] } | { [range: string]: () =&gt; <a href="https://day.js.org/" target="_blank" rel="noopener noreferrer">dayjs</a>[] }</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>renderExtraFooter</td>
<td>Render extra footer in panel</td>
<td>v-slot:renderExtraFooter</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>separator</td>
<td>Set separator between inputs</td>
<td>string | v-slot:separator</td>
<td><code>&lt;SwapRightOutlined /&gt;</code></td>
<td></td>
</tr>
<tr>
<td>showTime</td>
<td>To provide an additional time selection</td>
<td>object | boolean</td>
<td><a href="/components/time-picker/#API">TimePicker Options</a></td>
<td></td>
</tr>
<tr>
<td>showTime.defaultValue</td>
<td>To set default time of selected date, <a href="#components-date-picker-demo-disabled-date">demo</a></td>
<td><a href="https://day.js.org/" target="_blank" rel="noopener noreferrer">dayjs</a>[]</td>
<td>[dayjs(), dayjs()]</td>
<td></td>
</tr>
<tr>
<td>value(v-model)</td>
<td>To set date</td>
<td>[<a href="https://day.js.org/" target="_blank" rel="noopener noreferrer">dayjs</a>, <a href="https://day.js.org/" target="_blank" rel="noopener noreferrer">dayjs</a>]</td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="RangePicker-Events">RangePicker Events <a class="header-anchor" href="#RangePicker-Events">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<table>
<thead>
<tr>
<th>Events Name</th>
<th>Description</th>
<th>Arguments</th>
<th>Version</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>calendarChange</td>
<td>Callback function, can be executed when the start time or the end time of the range is changing.</td>
<td>function(dates: [dayjs, dayjs], dateStrings: [string, string], info: { range:<code>start</code>|<code>end</code> })</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>change</td>
<td>a callback function, can be executed when the selected time is changing</td>
<td>function(dates: [dayjs, dayjs] | [string, string], dateStrings: [string, string])</td>
<td></td>
<td></td>
</tr>
<tr>
<td>ok</td>
<td>callback when click ok button</td>
<td>function(dates: [dayjs, dayjs] | [string, string])</td>
<td></td>
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
<h3 id="Why-config-dayjs-locale-globally-not-work">Why config dayjs.locale globally not work? <a class="header-anchor" href="#Why-config-dayjs-locale-globally-not-work">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>DatePicker default set <code>locale</code> as <code>en</code> in v4. You can config DatePicker <code>locale</code> prop or <a href="/components/config-provider">ConfigProvider <code>locale</code></a> prop instead.</p>
`,lastUpdated:1669791391941}},Ga={class:"markdown"},wa=B(`<p>To select or input a date.</p><h2 id="When-To-Use">When To Use <a class="header-anchor" href="#When-To-Use"><span aria-hidden="true" class="anchor">#</span></a></h2><p>By clicking the input box, you can select a date from a popup calendar.</p><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><p>There are five kinds of picker:</p><ul><li>DatePicker</li><li>DatePicker[picker=&quot;month&quot;]</li><li>DatePicker[picker=&quot;week&quot;]</li><li>DatePicker[picker=&quot;year&quot;]</li><li>DatePicker[picker=&quot;quarter&quot;]</li><li>RangePicker</li></ul><h3 id="Localization">Localization <a class="header-anchor" href="#Localization"><span aria-hidden="true" class="anchor">#</span></a></h3><p>The default locale is en-US, if you need to use other languages, recommend to use internationalized components provided by us at the entrance. Look at: <a href="/components/config-provider/">ConfigProvider</a>.</p><p>If there are special needs (only modifying single component language), Please use the property: local. Example: <a href="https://github.com/vueComponent/ant-design-vue/blob/main/components/date-picker/locale/example.json" target="_blank" rel="noopener noreferrer">default</a>.</p><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-date-picker</span> <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:locale</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>locale<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> locale <span class="token keyword">from</span> <span class="token string">&#39;ant-design-vue/es/date-picker/locale/zh_CN&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        locale<span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-config-provider</span> <span class="token attr-name">:locale</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>locale<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-date-picker</span> <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-config-provider</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">// The default locale is en-US, if you want to use other locale, just set locale in entry file globally.</span>
  <span class="token keyword">import</span> dayjs <span class="token keyword">from</span> <span class="token string">&#39;dayjs&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token string">&#39;dayjs/locale/zh-cn&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> locale <span class="token keyword">from</span> <span class="token string">&#39;ant-design-vue/es/date-picker/locale/zh_CN&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
  dayjs<span class="token punctuation">.</span><span class="token function">locale</span><span class="token punctuation">(</span><span class="token string">&#39;zh-cn&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token function">dayjs</span><span class="token punctuation">(</span><span class="token string">&#39;2015-01-01&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;YYYY-MM-DD&#39;</span><span class="token punctuation">)</span>
        dayjs<span class="token punctuation">,</span>
        locale
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="Common-API">Common API <a class="header-anchor" href="#Common-API"><span aria-hidden="true" class="anchor">#</span></a></h3><p>The following APIs are shared by DatePicker, RangePicker.</p><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Version</th></tr></thead><tbody><tr><td>allowClear</td><td>Whether to show clear button</td><td>boolean</td><td>true</td><td></td></tr><tr><td>autofocus</td><td>If get focus when component mounted</td><td>boolean</td><td>false</td><td></td></tr><tr><td>bordered</td><td>Whether has border style</td><td>boolean</td><td>true</td><td></td></tr><tr><td>dateRender</td><td>Custom rendering function for date cells</td><td>v-slot:dateRender=&quot;{current, today}&quot;</td><td>-</td><td></td></tr><tr><td>disabled</td><td>Determine whether the DatePicker is disabled</td><td>boolean</td><td>false</td><td></td></tr><tr><td>disabledDate</td><td>Specify the date that cannot be selected</td><td>(currentDate: dayjs) =&gt; boolean</td><td>-</td><td></td></tr><tr><td>dropdownClassName</td><td>To customize the className of the popup calendar</td><td>string</td><td>-</td><td></td></tr><tr><td>getPopupContainer</td><td>To set the container of the floating layer, while the default is to create a <code>div</code> element in <code>body</code></td><td>function(trigger)</td><td>-</td><td></td></tr><tr><td>inputReadOnly</td><td>Set the <code>readonly</code> attribute of the input tag (avoids virtual keyboard on touch devices)</td><td>boolean</td><td>false</td><td></td></tr><tr><td>locale</td><td>Localization configuration</td><td>object</td><td><a href="https://github.com/vueComponent/ant-design-vue/blob/main/components/date-picker/locale/example.json" target="_blank" rel="noopener noreferrer">default</a></td><td></td></tr><tr><td>mode</td><td>The picker panel mode</td><td><code>time</code> | <code>date</code> | <code>month</code> | <code>year</code> | <code>decade</code></td><td>-</td><td></td></tr><tr><td>nextIcon</td><td>The custom next icon</td><td>slot</td><td>-</td><td>3.0</td></tr><tr><td>open</td><td>The open state of picker</td><td>boolean</td><td>-</td><td></td></tr><tr><td>picker</td><td>Set picker type</td><td><code>date</code> | <code>week</code> | <code>month</code> | <code>quarter</code> | <code>year</code></td><td><code>date</code></td><td><code>quarter</code></td></tr><tr><td>placeholder</td><td>The placeholder of date input</td><td>string | [string,string]</td><td>-</td><td></td></tr><tr><td>popupStyle</td><td>To customize the style of the popup calendar</td><td>CSSProperties</td><td>{}</td><td></td></tr><tr><td>prevIcon</td><td>The custom prev icon</td><td>slot</td><td>-</td><td>3.0</td></tr><tr><td>size</td><td>To determine the size of the input box, the height of <code>large</code> and <code>small</code>, are 40px and 24px respectively, while default size is 32px</td><td><code>large</code> | <code>middle</code> | <code>small</code></td><td>-</td><td></td></tr><tr><td>suffixIcon</td><td>The custom suffix icon</td><td>v-slot:suffixIcon</td><td>-</td><td></td></tr><tr><td>superNextIcon</td><td>The custom super next icon</td><td>slot</td><td>-</td><td>3.0</td></tr><tr><td>superPrevIcon</td><td>The custom super prev icon</td><td>slot</td><td>-</td><td>3.0</td></tr><tr><td>valueFormat</td><td>optional, format of binding value. If not specified, the binding value will be a Date object</td><td>string\uFF0C<a href="https://day.js.org/docs/en/display/format" target="_blank" rel="noopener noreferrer">date formats</a></td><td>-</td><td></td></tr></tbody></table><h3 id="Common-Events">Common Events <a class="header-anchor" href="#Common-Events"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>Events Name</th><th>Description</th><th>Arguments</th><th>Version</th></tr></thead><tbody><tr><td>openChange</td><td>a callback function, can be executed whether the popup calendar is popped up or closed</td><td>function(status)</td><td></td></tr><tr><td>panelChange</td><td>callback when picker panel mode is changed</td><td>function(value, mode)</td><td></td></tr></tbody></table><h3 id="Common-Methods">Common Methods <a class="header-anchor" href="#Common-Methods"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>Name</th><th>Description</th><th>Version</th></tr></thead><tbody><tr><td>blur()</td><td>remove focus</td><td></td></tr><tr><td>focus()</td><td>get focus</td><td></td></tr></tbody></table><h3 id="DatePicker">DatePicker <a class="header-anchor" href="#DatePicker"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Version</th></tr></thead><tbody><tr><td>defaultPickerValue</td><td>To set default picker date</td><td><a href="https://day.js.org/" target="_blank" rel="noopener noreferrer">dayjs</a></td><td>-</td><td></td></tr><tr><td>disabledTime</td><td>To specify the time that cannot be selected</td><td>function(date)</td><td>-</td><td></td></tr><tr><td>format</td><td>To set the date format, refer to <a href="https://day.js.org/" target="_blank" rel="noopener noreferrer">dayjs</a>. When an array is provided, all values are used for parsing and first value is used for formatting, support <a href="#components-date-picker-demo-format">Custom Format</a></td><td>string | (value: dayjs) =&gt; string | (string | (value: dayjs) =&gt; string)[]</td><td><code>YYYY-MM-DD</code></td><td></td></tr><tr><td>renderExtraFooter</td><td>Render extra footer in panel</td><td>v-slot:renderExtraFooter=&quot;mode&quot;</td><td>-</td><td></td></tr><tr><td>showNow</td><td>Whether to show &#39;Now&#39; button on panel when <code>showTime</code> is set</td><td>boolean</td><td>-</td><td></td></tr><tr><td>showTime</td><td>To provide an additional time selection</td><td>object | boolean</td><td><a href="/components/time-picker/#API">TimePicker Options</a></td><td></td></tr><tr><td>showTime.defaultValue</td><td>To set default time of selected date, <a href="#components-date-picker-demo-disabled-date">demo</a></td><td><a href="https://day.js.org/" target="_blank" rel="noopener noreferrer">dayjs</a></td><td>dayjs()</td><td></td></tr><tr><td>showToday</td><td>Whether to show <code>Today</code> button</td><td>boolean</td><td>true</td><td></td></tr><tr><td>value(v-model)</td><td>To set date</td><td><a href="https://day.js.org/" target="_blank" rel="noopener noreferrer">dayjs</a></td><td>-</td><td></td></tr></tbody></table><h3 id="DatePicker-Events">DatePicker Events <a class="header-anchor" href="#DatePicker-Events"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>Events Name</th><th>Description</th><th>Arguments</th><th>Version</th></tr></thead><tbody><tr><td>change</td><td>a callback function, can be executed when the selected time is changing</td><td>function(date: dayjs | string, dateString: string)</td><td></td></tr><tr><td>ok</td><td>callback when click ok button</td><td>function(date: dayjs | string)</td><td></td></tr></tbody></table><h3 id="DatePicker-picker-year">DatePicker[picker=year] <a class="header-anchor" href="#DatePicker-picker-year"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Version</th></tr></thead><tbody><tr><td>format</td><td>To set the date format, refer to <a href="https://day.js.org/" target="_blank" rel="noopener noreferrer">dayjs</a></td><td>string</td><td><code>YYYY</code></td><td></td></tr></tbody></table><h3 id="DatePicker-picker-quarter">DatePicker[picker=quarter] <a class="header-anchor" href="#DatePicker-picker-quarter"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Version</th></tr></thead><tbody><tr><td>format</td><td>To set the date format, refer to <a href="https://day.js.org/" target="_blank" rel="noopener noreferrer">dayjs</a></td><td>string</td><td><code>YYYY-\\QQ</code></td><td></td></tr></tbody></table><h3 id="DatePicker-picker-month">DatePicker[picker=month] <a class="header-anchor" href="#DatePicker-picker-month"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Version</th></tr></thead><tbody><tr><td>format</td><td>To set the date format, refer to <a href="https://day.js.org/" target="_blank" rel="noopener noreferrer">dayjs</a></td><td>string</td><td><code>YYYY-MM</code></td><td></td></tr><tr><td>monthCellRender</td><td>Custom month cell content render method</td><td>v-slot:monthCellRender=&quot;{current, locale}&quot;</td><td>-</td><td></td></tr></tbody></table><h3 id="DatePicker-picker-week">DatePicker[picker=week] <a class="header-anchor" href="#DatePicker-picker-week"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Version</th></tr></thead><tbody><tr><td>format</td><td>To set the date format, refer to <a href="https://day.js.org/" target="_blank" rel="noopener noreferrer">dayjs</a></td><td>string</td><td><code>YYYY-wo</code></td><td></td></tr></tbody></table><h3 id="RangePicker">RangePicker <a class="header-anchor" href="#RangePicker"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Version</th></tr></thead><tbody><tr><td>allowEmpty</td><td>Allow start or end input leave empty</td><td>[boolean, boolean]</td><td>[false, false]</td><td></td></tr><tr><td>dateRender</td><td>Customize date cell.</td><td>v-slot:dateRender=&quot;{current: dayjs, today: dayjs, info: { range: <code>start</code> | <code>end</code> }}&quot;</td><td>-</td><td></td></tr><tr><td>defaultPickerValue</td><td>To set default picker date</td><td>[<a href="https://day.js.org/" target="_blank" rel="noopener noreferrer">dayjs</a>, <a href="https://day.js.org/" target="_blank" rel="noopener noreferrer">dayjs</a>]</td><td>-</td><td></td></tr><tr><td>disabled</td><td>If disable start or end</td><td>[boolean, boolean]</td><td>-</td><td></td></tr><tr><td>disabledTime</td><td>To specify the time that cannot be selected</td><td>function(date: dayjs, partial: <code>start</code> | <code>end</code>)</td><td>-</td><td></td></tr><tr><td>format</td><td>To set the date format, refer to <a href="https://day.js.org/" target="_blank" rel="noopener noreferrer">dayjs</a>. When an array is provided, all values are used for parsing and first value is used for formatting</td><td>string | string[]</td><td><code>YYYY-MM-DD HH:mm:ss</code></td><td></td></tr><tr><td>ranges</td><td>The preseted ranges for quick selection</td><td>{ [range: string]: <a href="https://day.js.org/" target="_blank" rel="noopener noreferrer">dayjs</a>[] } | { [range: string]: () =&gt; <a href="https://day.js.org/" target="_blank" rel="noopener noreferrer">dayjs</a>[] }</td><td>-</td><td></td></tr><tr><td>renderExtraFooter</td><td>Render extra footer in panel</td><td>v-slot:renderExtraFooter</td><td>-</td><td></td></tr><tr><td>separator</td><td>Set separator between inputs</td><td>string | v-slot:separator</td><td><code>&lt;SwapRightOutlined /&gt;</code></td><td></td></tr><tr><td>showTime</td><td>To provide an additional time selection</td><td>object | boolean</td><td><a href="/components/time-picker/#API">TimePicker Options</a></td><td></td></tr><tr><td>showTime.defaultValue</td><td>To set default time of selected date, <a href="#components-date-picker-demo-disabled-date">demo</a></td><td><a href="https://day.js.org/" target="_blank" rel="noopener noreferrer">dayjs</a>[]</td><td>[dayjs(), dayjs()]</td><td></td></tr><tr><td>value(v-model)</td><td>To set date</td><td>[<a href="https://day.js.org/" target="_blank" rel="noopener noreferrer">dayjs</a>, <a href="https://day.js.org/" target="_blank" rel="noopener noreferrer">dayjs</a>]</td><td>-</td><td></td></tr></tbody></table><h3 id="RangePicker-Events">RangePicker Events <a class="header-anchor" href="#RangePicker-Events"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>Events Name</th><th>Description</th><th>Arguments</th><th>Version</th><th></th></tr></thead><tbody><tr><td>calendarChange</td><td>Callback function, can be executed when the start time or the end time of the range is changing.</td><td>function(dates: [dayjs, dayjs], dateStrings: [string, string], info: { range:<code>start</code>|<code>end</code> })</td><td>-</td><td></td></tr><tr><td>change</td><td>a callback function, can be executed when the selected time is changing</td><td>function(dates: [dayjs, dayjs] | [string, string], dateStrings: [string, string])</td><td></td><td></td></tr><tr><td>ok</td><td>callback when click ok button</td><td>function(dates: [dayjs, dayjs] | [string, string])</td><td></td><td></td></tr></tbody></table><h2 id="FAQ">FAQ <a class="header-anchor" href="#FAQ"><span aria-hidden="true" class="anchor">#</span></a></h2><h3 id="How-to-use-DatePicker-with-customize-date-library\uFF08like-moment-js-dayjs-date-fns\uFF09\uFF1F">How to use DatePicker with customize date library\uFF08like moment.js | dayjs | date-fns\uFF09\uFF1F <a class="header-anchor" href="#How-to-use-DatePicker-with-customize-date-library\uFF08like-moment-js-dayjs-date-fns\uFF09\uFF1F"><span aria-hidden="true" class="anchor">#</span></a></h3><p>Please refer <a href="/docs/vue/replace-date">replace date</a></p><h3 id="Why-config-dayjs-locale-globally-not-work">Why config dayjs.locale globally not work? <a class="header-anchor" href="#Why-config-dayjs-locale-globally-not-work"><span aria-hidden="true" class="anchor">#</span></a></h3><p>DatePicker default set <code>locale</code> as <code>en</code> in v4. You can config DatePicker <code>locale</code> prop or <a href="/components/config-provider">ConfigProvider <code>locale</code></a> prop instead.</p>`,39),Pa=[wa];function ja(t,s,r,g,I,C){return h(),G("article",Ga,Pa)}const Sa=v(Ya,[["render",ja]]);const Ra=y({CN:Wa,US:Sa,components:{Try:_,Basic:tn,DateRender:pn,DisabledDate:dn,Disabled:hn,ExtraFooter:fn,Format:wn,Mode:Vn,PresettedRanges:Hn,Size:qn,Switchable:$n,Time:ea,Suffix:ua,SelectInRnage:zn,Bordered:ga,RangePicker:Aa}});function Va(t,s,r,g,I,C){const u=c("Try"),i=c("Basic"),d=c("RangePicker"),l=c("Bordered"),p=c("Format"),f=c("Time"),Z=c("Disabled"),W=c("DisabledDate"),w=c("SelectInRnage"),P=c("PresettedRanges"),j=c("ExtraFooter"),m=c("Size"),D=c("DateRender"),F=c("Mode"),X=c("Switchable"),H=c("Suffix"),N=c("demo-sort");return h(),A(N,null,{default:o(()=>[e(u),e(i),e(d),e(l),e(p),e(f),e(Z),e(W),e(w),e(P),e(j),e(m),e(D),e(F),e(X),e(H)]),_:1})}const Xa=v(Ra,[["render",Va]]);export{Xa as default};
