import{d as Z,aS as F,r as k,o as D,B as R,_ as v,l as W,w as e,j as c,k as m,f as o,b as n,H as K,t as G,a as V,h as x,e as a,F as S,s as P}from"./index.07eaef2d.js";import{t as L}from"./trydemo.48000c6d.js";import{U as J}from"./UserOutlined.2adf1a8e.js";import{S as N}from"./SettingOutlined.c4f261db.js";const j=Z({components:{UserOutlined:J,InfoCircleOutlined:F},mixins:[L],setup(t){const s=k(""),d=k(),g=k({prefixsuffix:"0",size:"default",bordered:!0,maxAndMin:!1,controls:!0}),A={...g.value},b=(l,p,r="")=>g.value[l]!==p?r||" "+(g.value[l]===!1?":":"")+l.replace(/([A-Z])/g,function(h){return"-"+h.toLocaleLowerCase()})+(g.value[l]===!0?"":`="${g.value[l]}"`):"",u=l=>{let p="",r="";for(let h in l)h==="prefixsuffix"?(l.prefixsuffix==="3"&&(p+=' prefix="\uFFE5"'),l.prefixsuffix==="2"&&(p+=' addon-before="+" addon-after="$"'),l.prefixsuffix==="1"&&(r=`
        <script>
        import { UserOutlined, InfoCircleOutlined } from '@ant-design/icons-vue';
        export default {
          components: {
            UserOutlined,
            InfoCircleOutlined,
          },
        }
        <\/script>`)):h==="maxAndMin"?l.maxAndMin&&(p+=' :max="10" :min="1"'):p+=b(h,A[h]);return`<template>
          <a-input-number${p}${l.prefixsuffix==="1"?`>
            <template #addonBefore>
              <user-outlined type="user" />
            </template>
            <template #addonAfter>
              <a-tooltip title="Extra information"><info-circle-outlined style="color: rgba(0, 0, 0, 0.45)" /></a-tooltip>
            </template>
          </a-input-number>`:" />"}
        </template>
        ${r}`.replace(/ {8}/g,"")};return D(()=>{s.value=u(g.value)}),R(g,l=>{s.value=u(l)},{deep:!0}),{value:d,democode:s,propdata:g,resetItem:()=>{g.value={...A}},labelCol:{style:{width:"120px"}}}}}),z={class:"code-box-demo-try"},E=n("div",{style:{"margin-bottom":"10px"}},"\u57FA\u672C\u6570\u5B57\u8F93\u5165\u6846\u793A\u4F8B (\u5176\u4ED6\u7528\u6CD5\u8BE6\u89C1\u53F3\u4FA7\u5217\u8868)\uFF1A",-1),U={class:"code-box-meta markdown"},_={class:"code-box-title"},T={class:"code-box-description"};function Q(t,s,d,g,A,b){const u=c("user-outlined"),i=c("info-circle-outlined"),l=c("a-tooltip"),p=c("a-input-number"),r=c("a-radio"),h=c("a-radio-group"),f=c("a-form-item"),I=c("a-row"),y=c("a-col"),w=c("a-switch"),B=c("a-form"),Y=c("demo-try"),X=c("demo-box");return m(),W(X,{jsfiddle:{docHtml:"",demo:1,order:-1,title:{"zh-CN":"\u5728\u7EBF\u6F14\u793A","en-US":"Online Demo"},relativePath:"components/input-number/demo/try.vue",sourceCode:"PHRlbXBsYXRlPgogIDxzZWN0aW9uPgogICAgPHNlY3Rpb24gY2xhc3M9ImNvZGUtYm94LWRlbW8tdHJ5Ij4KICAgICAgPGRpdiBzdHlsZT0ibWFyZ2luLWJvdHRvbTogMTBweCI+5Z+65pys5pWw5a2X6L6T5YWl5qGG56S65L6LICjlhbbku5bnlKjms5Xor6bop4Hlj7PkvqfliJfooagp77yaPC9kaXY+CiAgICAgIDxhLWlucHV0LW51bWJlcgogICAgICAgIHYtbW9kZWw6dmFsdWU9InZhbHVlIgogICAgICAgIDphZGRvbi1iZWZvcmU9InByb3BkYXRhLnByZWZpeHN1ZmZpeCA9PT0gJzInID8gJysnIDogdW5kZWZpbmVkIgogICAgICAgIDphZGRvbi1hZnRlcj0icHJvcGRhdGEucHJlZml4c3VmZml4ID09PSAnMicgPyAnJCcgOiB1bmRlZmluZWQiCiAgICAgICAgOnByZWZpeD0icHJvcGRhdGEucHJlZml4c3VmZml4ID09PSAnMycgPyAn77+lJyA6IHVuZGVmaW5lZCIKICAgICAgICA6c2l6ZT0icHJvcGRhdGEuc2l6ZSIKICAgICAgICA6Ym9yZGVyZWQ9InByb3BkYXRhLmJvcmRlcmVkIgogICAgICAgIDptYXg9InByb3BkYXRhLm1heEFuZE1pbiA/IDEwIDogdW5kZWZpbmVkIgogICAgICAgIDptaW49InByb3BkYXRhLm1heEFuZE1pbiA/IDEgOiB1bmRlZmluZWQiCiAgICAgICAgOmNvbnRyb2xzPSJwcm9wZGF0YS5jb250cm9scyIKICAgICAgPgogICAgICAgIDx0ZW1wbGF0ZSB2LWlmPSJwcm9wZGF0YS5wcmVmaXhzdWZmaXggPT09ICcxJyIgI2FkZG9uQmVmb3JlPgogICAgICAgICAgPHVzZXItb3V0bGluZWQgdHlwZT0idXNlciIgLz4KICAgICAgICA8L3RlbXBsYXRlPgogICAgICAgIDx0ZW1wbGF0ZSB2LWlmPSJwcm9wZGF0YS5wcmVmaXhzdWZmaXggPT09ICcxJyIgI2FkZG9uQWZ0ZXI+CiAgICAgICAgICA8YS10b29sdGlwIHRpdGxlPSJFeHRyYSBpbmZvcm1hdGlvbiI+CiAgICAgICAgICAgIDxpbmZvLWNpcmNsZS1vdXRsaW5lZCBzdHlsZT0iY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NSkiIC8+CiAgICAgICAgICA8L2EtdG9vbHRpcD4KICAgICAgICA8L3RlbXBsYXRlPgogICAgICA8L2EtaW5wdXQtbnVtYmVyPgogICAgPC9zZWN0aW9uPgogICAgPHNlY3Rpb24gY2xhc3M9ImNvZGUtYm94LW1ldGEgbWFya2Rvd24iPgogICAgICA8c2VjdGlvbiBjbGFzcz0iY29kZS1ib3gtdGl0bGUiPnt7IGRlbW90aXRsZSB9fTwvc2VjdGlvbj4KICAgICAgPHNlY3Rpb24gY2xhc3M9ImNvZGUtYm94LWRlc2NyaXB0aW9uIj4KICAgICAgICA8YS1mb3JtIDpsYWJlbC1jb2w9ImxhYmVsQ29sIj4KICAgICAgICAgIDxhLXJvdz4KICAgICAgICAgICAgPGEtZm9ybS1pdGVtIGxhYmVsPSJwcmVmaXhTdWZmaXgiPgogICAgICAgICAgICAgIDxhLXJhZGlvLWdyb3VwIHYtbW9kZWw6dmFsdWU9InByb3BkYXRhLnByZWZpeHN1ZmZpeCI+CiAgICAgICAgICAgICAgICA8YS1yYWRpbwogICAgICAgICAgICAgICAgICB2LWZvcj0iKGl0ZW0sIHNrZXkpIGluIHsKICAgICAgICAgICAgICAgICAgICAnMCc6ICfkuI3phY3nva7liY3lkI7nvIAnLAogICAgICAgICAgICAgICAgICAgICcxJzogJ+WJjeWQjue9ruiHquWumuS5iScsCiAgICAgICAgICAgICAgICAgICAgJzInOiAn5YmN5ZCO572u5Li65paH5a2XJywKICAgICAgICAgICAgICAgICAgICAnMyc6ICfliY3nvIDmloflrZflvaLlvI8nLAogICAgICAgICAgICAgICAgICB9IgogICAgICAgICAgICAgICAgICA6a2V5PSJza2V5IgogICAgICAgICAgICAgICAgICA6dmFsdWU9InNrZXkiCiAgICAgICAgICAgICAgICAgIG5hbWU9Im9wdGlvblR5cGUiCiAgICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICAgIHt7IGl0ZW0gfX0KICAgICAgICAgICAgICAgIDwvYS1yYWRpbz4KICAgICAgICAgICAgICA8L2EtcmFkaW8tZ3JvdXA+CiAgICAgICAgICAgIDwvYS1mb3JtLWl0ZW0+CiAgICAgICAgICA8L2Etcm93PgoKICAgICAgICAgIDxhLXJvdz4KICAgICAgICAgICAgPGEtY29sIHNwYW49IjEwIj4KICAgICAgICAgICAgICA8YS1mb3JtLWl0ZW0gbGFiZWw9InNpemUiPgogICAgICAgICAgICAgICAgPGEtcmFkaW8tZ3JvdXAgdi1tb2RlbDp2YWx1ZT0icHJvcGRhdGEuc2l6ZSI+CiAgICAgICAgICAgICAgICAgIDxhLXJhZGlvCiAgICAgICAgICAgICAgICAgICAgdi1mb3I9Iml0ZW0gb2YgWydsYXJnZScsICdkZWZhdWx0JywgJ3NtYWxsJ10iCiAgICAgICAgICAgICAgICAgICAgOmtleT0iaXRlbSIKICAgICAgICAgICAgICAgICAgICA6dmFsdWU9Iml0ZW0iCiAgICAgICAgICAgICAgICAgICAgbmFtZT0ib3B0aW9uVHlwZSIKICAgICAgICAgICAgICAgICAgPgogICAgICAgICAgICAgICAgICAgIHt7IGl0ZW0gfX0KICAgICAgICAgICAgICAgICAgPC9hLXJhZGlvPgogICAgICAgICAgICAgICAgPC9hLXJhZGlvLWdyb3VwPgogICAgICAgICAgICAgIDwvYS1mb3JtLWl0ZW0+CiAgICAgICAgICAgIDwvYS1jb2w+CgogICAgICAgICAgICA8YS1jb2wgc3Bhbj0iMTQiPgogICAgICAgICAgICAgIDxhLWZvcm0taXRlbSBsYWJlbD0iYm9yZGVyZWQiPgogICAgICAgICAgICAgICAgPGEtc3dpdGNoCiAgICAgICAgICAgICAgICAgIHYtbW9kZWw6Y2hlY2tlZD0icHJvcGRhdGEuYm9yZGVyZWQiCiAgICAgICAgICAgICAgICAgIGNoZWNrZWQtY2hpbGRyZW49IuW8gCIKICAgICAgICAgICAgICAgICAgdW4tY2hlY2tlZC1jaGlsZHJlbj0i5YWzIgogICAgICAgICAgICAgICAgLz4KICAgICAgICAgICAgICA8L2EtZm9ybS1pdGVtPgogICAgICAgICAgICA8L2EtY29sPgogICAgICAgICAgPC9hLXJvdz4KCiAgICAgICAgICA8YS1yb3c+CiAgICAgICAgICAgIDxhLWNvbCBzcGFuPSI4Ij4KICAgICAgICAgICAgICA8YS1mb3JtLWl0ZW0gbGFiZWw9Im1heEFuZE1pbiI+CiAgICAgICAgICAgICAgICA8YS1zd2l0Y2gKICAgICAgICAgICAgICAgICAgdi1tb2RlbDpjaGVja2VkPSJwcm9wZGF0YS5tYXhBbmRNaW4iCiAgICAgICAgICAgICAgICAgIGNoZWNrZWQtY2hpbGRyZW49IuW8gCIKICAgICAgICAgICAgICAgICAgdW4tY2hlY2tlZC1jaGlsZHJlbj0i5YWzIgogICAgICAgICAgICAgICAgLz4KICAgICAgICAgICAgICA8L2EtZm9ybS1pdGVtPgogICAgICAgICAgICA8L2EtY29sPgogICAgICAgICAgICA8YS1jb2wgc3Bhbj0iOCI+CiAgICAgICAgICAgICAgPGEtZm9ybS1pdGVtIGxhYmVsPSJjb250cm9scyI+CiAgICAgICAgICAgICAgICA8YS1zd2l0Y2gKICAgICAgICAgICAgICAgICAgdi1tb2RlbDpjaGVja2VkPSJwcm9wZGF0YS5jb250cm9scyIKICAgICAgICAgICAgICAgICAgY2hlY2tlZC1jaGlsZHJlbj0i5byAIgogICAgICAgICAgICAgICAgICB1bi1jaGVja2VkLWNoaWxkcmVuPSLlhbMiCiAgICAgICAgICAgICAgICAvPgogICAgICAgICAgICAgIDwvYS1mb3JtLWl0ZW0+CiAgICAgICAgICAgIDwvYS1jb2w+CiAgICAgICAgICA8L2Etcm93PgogICAgICAgIDwvYS1mb3JtPgogICAgICA8L3NlY3Rpb24+CiAgICA8L3NlY3Rpb24+CiAgPC9zZWN0aW9uPgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYsIHdhdGNoLCBpbmplY3QsIG9uTW91bnRlZCB9IGZyb20gJ3Z1ZSc7CmltcG9ydCB7IFVzZXJPdXRsaW5lZCwgSW5mb0NpcmNsZU91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMtdnVlJzsKaW1wb3J0IHRyeWRlbW8gZnJvbSAnLi4vLi4vX3V0aWwvdHJ5ZGVtbyc7CgpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIGNvbXBvbmVudHM6IHsKICAgIFVzZXJPdXRsaW5lZCwKICAgIEluZm9DaXJjbGVPdXRsaW5lZCwKICB9LAogIG1peGluczogW3RyeWRlbW9dLAogIHNldHVwKHByb3BzKSB7CiAgICAvLyAvLyDlhoXnva7lrZfmrrUKICAgIGNvbnN0IGRlbW9jb2RlID0gcmVmKCcnKTsKCiAgICBjb25zdCB2YWx1ZSA9IHJlZjxudW1iZXI+KCk7CgogICAgY29uc3QgcHJvcGRhdGEgPSByZWYoewogICAgICBwcmVmaXhzdWZmaXg6ICcwJywgLy8gMC3kuI3lsZXnpLrliY3lkI7nvIAgMS3liY3lkI7nva7moIfnrb7lvaLlvI8gMi3liY3lkI7nva7mloflrZflvaLlvI8gMy3liY3nvIDlvaLlvI8KICAgICAgc2l6ZTogJ2RlZmF1bHQnLCAvLyBkZWZhdWx0LeaZrumAmiBsYXJnZSBzbWFsbAogICAgICBib3JkZXJlZDogdHJ1ZSwKICAgICAgbWF4QW5kTWluOiBmYWxzZSwKICAgICAgY29udHJvbHM6IHRydWUsCiAgICB9KTsKCiAgICBjb25zdCBkZWZhdWx0VmFsID0geyAuLi5wcm9wZGF0YS52YWx1ZSB9OwoKICAgIGNvbnN0IGdldEVxdWFsVmFsID0gKHR5cGUsIG5vdGVxdWFsLCBlcXVhbHJlcyA9ICcnKSA9PiB7CiAgICAgIHJldHVybiBwcm9wZGF0YS52YWx1ZVt0eXBlXSAhPT0gbm90ZXF1YWwKICAgICAgICA/IGVxdWFscmVzIHx8CiAgICAgICAgICAgICcgJyArCiAgICAgICAgICAgICAgKHByb3BkYXRhLnZhbHVlW3R5cGVdID09PSBmYWxzZSA/ICc6JyA6ICcnKSArCiAgICAgICAgICAgICAgdHlwZS5yZXBsYWNlKC8oW0EtWl0pL2csIGZ1bmN0aW9uIChtKSB7CiAgICAgICAgICAgICAgICByZXR1cm4gJy0nICsgbS50b0xvY2FsZUxvd2VyQ2FzZSgpOwogICAgICAgICAgICAgIH0pICsKICAgICAgICAgICAgICAocHJvcGRhdGEudmFsdWVbdHlwZV0gPT09IHRydWUgPyAnJyA6IGA9IiR7cHJvcGRhdGEudmFsdWVbdHlwZV19ImApCiAgICAgICAgOiAnJzsKICAgIH07CgogICAgY29uc3QgcmVuZGVyQ29kZSA9IHByb3BkYXRhID0+IHsKICAgICAgbGV0IHByb3BzdmFsID0gJyc7CiAgICAgIGxldCBzY3JpcHRjb2RlID0gJyc7CgogICAgICBmb3IgKGxldCBrZXkgaW4gcHJvcGRhdGEpIHsKICAgICAgICBpZiAoa2V5ID09PSAncHJlZml4c3VmZml4JykgewogICAgICAgICAgcHJvcGRhdGEucHJlZml4c3VmZml4ID09PSAnMycgJiYgKHByb3BzdmFsICs9ICcgcHJlZml4PSLvv6UiJyk7CiAgICAgICAgICBwcm9wZGF0YS5wcmVmaXhzdWZmaXggPT09ICcyJyAmJiAocHJvcHN2YWwgKz0gJyBhZGRvbi1iZWZvcmU9IisiIGFkZG9uLWFmdGVyPSIkIicpOwogICAgICAgICAgcHJvcGRhdGEucHJlZml4c3VmZml4ID09PSAnMScgJiYKICAgICAgICAgICAgKHNjcmlwdGNvZGUgPSBgCiAgICAgICAgPHNjcmlwdD4KICAgICAgICBpbXBvcnQgeyBVc2VyT3V0bGluZWQsIEluZm9DaXJjbGVPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLXZ1ZSc7CiAgICAgICAgZXhwb3J0IGRlZmF1bHQgewogICAgICAgICAgY29tcG9uZW50czogewogICAgICAgICAgICBVc2VyT3V0bGluZWQsCiAgICAgICAgICAgIEluZm9DaXJjbGVPdXRsaW5lZCwKICAgICAgICAgIH0sCiAgICAgICAgfQogICAgICAgIDxcL3NjcmlwdD5gKTsKICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ21heEFuZE1pbicpIHsKICAgICAgICAgIHByb3BkYXRhLm1heEFuZE1pbiAmJiAocHJvcHN2YWwgKz0gJyA6bWF4PSIxMCIgOm1pbj0iMSInKTsKICAgICAgICB9IGVsc2UgewogICAgICAgICAgcHJvcHN2YWwgKz0gZ2V0RXF1YWxWYWwoa2V5LCBkZWZhdWx0VmFsW2tleV0pOwogICAgICAgIH0KICAgICAgfQogICAgICByZXR1cm4gYDx0ZW1wbGF0ZT4KICAgICAgICAgIDxhLWlucHV0LW51bWJlciR7cHJvcHN2YWx9JHsKICAgICAgICBwcm9wZGF0YVsncHJlZml4c3VmZml4J10gPT09ICcxJwogICAgICAgICAgPyBgPgogICAgICAgICAgICA8dGVtcGxhdGUgI2FkZG9uQmVmb3JlPgogICAgICAgICAgICAgIDx1c2VyLW91dGxpbmVkIHR5cGU9InVzZXIiIC8+CiAgICAgICAgICAgIDwvdGVtcGxhdGU+CiAgICAgICAgICAgIDx0ZW1wbGF0ZSAjYWRkb25BZnRlcj4KICAgICAgICAgICAgICA8YS10b29sdGlwIHRpdGxlPSJFeHRyYSBpbmZvcm1hdGlvbiI+PGluZm8tY2lyY2xlLW91dGxpbmVkIHN0eWxlPSJjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ1KSIgLz48L2EtdG9vbHRpcD4KICAgICAgICAgICAgPC90ZW1wbGF0ZT4KICAgICAgICAgIDwvYS1pbnB1dC1udW1iZXI+YAogICAgICAgICAgOiAnIC8+JwogICAgICB9CiAgICAgICAgPC90ZW1wbGF0ZT4KICAgICAgICAke3NjcmlwdGNvZGV9YC5yZXBsYWNlKC8gezh9L2csICcnKTsKICAgIH07CgogICAgb25Nb3VudGVkKCgpID0+IHsKICAgICAgZGVtb2NvZGUudmFsdWUgPSByZW5kZXJDb2RlKHByb3BkYXRhLnZhbHVlKTsKICAgIH0pOwoKICAgIHdhdGNoKAogICAgICBwcm9wZGF0YSwKICAgICAgZGF0YSA9PiB7CiAgICAgICAgZGVtb2NvZGUudmFsdWUgPSByZW5kZXJDb2RlKGRhdGEpOwogICAgICB9LAogICAgICB7CiAgICAgICAgZGVlcDogdHJ1ZSwKICAgICAgfSwKICAgICk7CgogICAgLy8g6YeN572u5pa55rOV5Zu65a6a5a2X5q61CiAgICBjb25zdCByZXNldEl0ZW0gPSAoKSA9PiB7CiAgICAgIHByb3BkYXRhLnZhbHVlID0geyAuLi5kZWZhdWx0VmFsIH07CiAgICB9OwoKICAgIHJldHVybiB7CiAgICAgIHZhbHVlLAogICAgICBkZW1vY29kZSwKICAgICAgcHJvcGRhdGEsCiAgICAgIHJlc2V0SXRlbSwKICAgICAgbGFiZWxDb2w6IHsgc3R5bGU6IHsgd2lkdGg6ICcxMjBweCcgfSB9LAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxzZWN0aW9uPgogICAgPHNlY3Rpb24gY2xhc3M9ImNvZGUtYm94LWRlbW8tdHJ5Ij4KICAgICAgPGRpdiBzdHlsZT0ibWFyZ2luLWJvdHRvbTogMTBweCI+5Z+65pys5pWw5a2X6L6T5YWl5qGG56S65L6LICjlhbbku5bnlKjms5Xor6bop4Hlj7PkvqfliJfooagp77yaPC9kaXY+CiAgICAgIDxhLWlucHV0LW51bWJlcgogICAgICAgIHYtbW9kZWw6dmFsdWU9InZhbHVlIgogICAgICAgIDphZGRvbi1iZWZvcmU9InByb3BkYXRhLnByZWZpeHN1ZmZpeCA9PT0gJzInID8gJysnIDogdW5kZWZpbmVkIgogICAgICAgIDphZGRvbi1hZnRlcj0icHJvcGRhdGEucHJlZml4c3VmZml4ID09PSAnMicgPyAnJCcgOiB1bmRlZmluZWQiCiAgICAgICAgOnByZWZpeD0icHJvcGRhdGEucHJlZml4c3VmZml4ID09PSAnMycgPyAn77+lJyA6IHVuZGVmaW5lZCIKICAgICAgICA6c2l6ZT0icHJvcGRhdGEuc2l6ZSIKICAgICAgICA6Ym9yZGVyZWQ9InByb3BkYXRhLmJvcmRlcmVkIgogICAgICAgIDptYXg9InByb3BkYXRhLm1heEFuZE1pbiA/IDEwIDogdW5kZWZpbmVkIgogICAgICAgIDptaW49InByb3BkYXRhLm1heEFuZE1pbiA/IDEgOiB1bmRlZmluZWQiCiAgICAgICAgOmNvbnRyb2xzPSJwcm9wZGF0YS5jb250cm9scyIKICAgICAgPgogICAgICAgIDx0ZW1wbGF0ZSB2LWlmPSJwcm9wZGF0YS5wcmVmaXhzdWZmaXggPT09ICcxJyIgI2FkZG9uQmVmb3JlPgogICAgICAgICAgPHVzZXItb3V0bGluZWQgdHlwZT0idXNlciIgLz4KICAgICAgICA8L3RlbXBsYXRlPgogICAgICAgIDx0ZW1wbGF0ZSB2LWlmPSJwcm9wZGF0YS5wcmVmaXhzdWZmaXggPT09ICcxJyIgI2FkZG9uQWZ0ZXI+CiAgICAgICAgICA8YS10b29sdGlwIHRpdGxlPSJFeHRyYSBpbmZvcm1hdGlvbiI+CiAgICAgICAgICAgIDxpbmZvLWNpcmNsZS1vdXRsaW5lZCBzdHlsZT0iY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NSkiIC8+CiAgICAgICAgICA8L2EtdG9vbHRpcD4KICAgICAgICA8L3RlbXBsYXRlPgogICAgICA8L2EtaW5wdXQtbnVtYmVyPgogICAgPC9zZWN0aW9uPgogICAgPHNlY3Rpb24gY2xhc3M9ImNvZGUtYm94LW1ldGEgbWFya2Rvd24iPgogICAgICA8c2VjdGlvbiBjbGFzcz0iY29kZS1ib3gtdGl0bGUiPnt7IGRlbW90aXRsZSB9fTwvc2VjdGlvbj4KICAgICAgPHNlY3Rpb24gY2xhc3M9ImNvZGUtYm94LWRlc2NyaXB0aW9uIj4KICAgICAgICA8YS1mb3JtIDpsYWJlbC1jb2w9ImxhYmVsQ29sIj4KICAgICAgICAgIDxhLXJvdz4KICAgICAgICAgICAgPGEtZm9ybS1pdGVtIGxhYmVsPSJwcmVmaXhTdWZmaXgiPgogICAgICAgICAgICAgIDxhLXJhZGlvLWdyb3VwIHYtbW9kZWw6dmFsdWU9InByb3BkYXRhLnByZWZpeHN1ZmZpeCI+CiAgICAgICAgICAgICAgICA8YS1yYWRpbwogICAgICAgICAgICAgICAgICB2LWZvcj0iKGl0ZW0sIHNrZXkpIGluIHsKICAgICAgICAgICAgICAgICAgICAnMCc6ICfkuI3phY3nva7liY3lkI7nvIAnLAogICAgICAgICAgICAgICAgICAgICcxJzogJ+WJjeWQjue9ruiHquWumuS5iScsCiAgICAgICAgICAgICAgICAgICAgJzInOiAn5YmN5ZCO572u5Li65paH5a2XJywKICAgICAgICAgICAgICAgICAgICAnMyc6ICfliY3nvIDmloflrZflvaLlvI8nLAogICAgICAgICAgICAgICAgICB9IgogICAgICAgICAgICAgICAgICA6a2V5PSJza2V5IgogICAgICAgICAgICAgICAgICA6dmFsdWU9InNrZXkiCiAgICAgICAgICAgICAgICAgIG5hbWU9Im9wdGlvblR5cGUiCiAgICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICAgIHt7IGl0ZW0gfX0KICAgICAgICAgICAgICAgIDwvYS1yYWRpbz4KICAgICAgICAgICAgICA8L2EtcmFkaW8tZ3JvdXA+CiAgICAgICAgICAgIDwvYS1mb3JtLWl0ZW0+CiAgICAgICAgICA8L2Etcm93PgoKICAgICAgICAgIDxhLXJvdz4KICAgICAgICAgICAgPGEtY29sIHNwYW49IjEwIj4KICAgICAgICAgICAgICA8YS1mb3JtLWl0ZW0gbGFiZWw9InNpemUiPgogICAgICAgICAgICAgICAgPGEtcmFkaW8tZ3JvdXAgdi1tb2RlbDp2YWx1ZT0icHJvcGRhdGEuc2l6ZSI+CiAgICAgICAgICAgICAgICAgIDxhLXJhZGlvCiAgICAgICAgICAgICAgICAgICAgdi1mb3I9Iml0ZW0gb2YgWydsYXJnZScsICdkZWZhdWx0JywgJ3NtYWxsJ10iCiAgICAgICAgICAgICAgICAgICAgOmtleT0iaXRlbSIKICAgICAgICAgICAgICAgICAgICA6dmFsdWU9Iml0ZW0iCiAgICAgICAgICAgICAgICAgICAgbmFtZT0ib3B0aW9uVHlwZSIKICAgICAgICAgICAgICAgICAgPgogICAgICAgICAgICAgICAgICAgIHt7IGl0ZW0gfX0KICAgICAgICAgICAgICAgICAgPC9hLXJhZGlvPgogICAgICAgICAgICAgICAgPC9hLXJhZGlvLWdyb3VwPgogICAgICAgICAgICAgIDwvYS1mb3JtLWl0ZW0+CiAgICAgICAgICAgIDwvYS1jb2w+CgogICAgICAgICAgICA8YS1jb2wgc3Bhbj0iMTQiPgogICAgICAgICAgICAgIDxhLWZvcm0taXRlbSBsYWJlbD0iYm9yZGVyZWQiPgogICAgICAgICAgICAgICAgPGEtc3dpdGNoCiAgICAgICAgICAgICAgICAgIHYtbW9kZWw6Y2hlY2tlZD0icHJvcGRhdGEuYm9yZGVyZWQiCiAgICAgICAgICAgICAgICAgIGNoZWNrZWQtY2hpbGRyZW49IuW8gCIKICAgICAgICAgICAgICAgICAgdW4tY2hlY2tlZC1jaGlsZHJlbj0i5YWzIgogICAgICAgICAgICAgICAgLz4KICAgICAgICAgICAgICA8L2EtZm9ybS1pdGVtPgogICAgICAgICAgICA8L2EtY29sPgogICAgICAgICAgPC9hLXJvdz4KCiAgICAgICAgICA8YS1yb3c+CiAgICAgICAgICAgIDxhLWNvbCBzcGFuPSI4Ij4KICAgICAgICAgICAgICA8YS1mb3JtLWl0ZW0gbGFiZWw9Im1heEFuZE1pbiI+CiAgICAgICAgICAgICAgICA8YS1zd2l0Y2gKICAgICAgICAgICAgICAgICAgdi1tb2RlbDpjaGVja2VkPSJwcm9wZGF0YS5tYXhBbmRNaW4iCiAgICAgICAgICAgICAgICAgIGNoZWNrZWQtY2hpbGRyZW49IuW8gCIKICAgICAgICAgICAgICAgICAgdW4tY2hlY2tlZC1jaGlsZHJlbj0i5YWzIgogICAgICAgICAgICAgICAgLz4KICAgICAgICAgICAgICA8L2EtZm9ybS1pdGVtPgogICAgICAgICAgICA8L2EtY29sPgogICAgICAgICAgICA8YS1jb2wgc3Bhbj0iOCI+CiAgICAgICAgICAgICAgPGEtZm9ybS1pdGVtIGxhYmVsPSJjb250cm9scyI+CiAgICAgICAgICAgICAgICA8YS1zd2l0Y2gKICAgICAgICAgICAgICAgICAgdi1tb2RlbDpjaGVja2VkPSJwcm9wZGF0YS5jb250cm9scyIKICAgICAgICAgICAgICAgICAgY2hlY2tlZC1jaGlsZHJlbj0i5byAIgogICAgICAgICAgICAgICAgICB1bi1jaGVja2VkLWNoaWxkcmVuPSLlhbMiCiAgICAgICAgICAgICAgICAvPgogICAgICAgICAgICAgIDwvYS1mb3JtLWl0ZW0+CiAgICAgICAgICAgIDwvYS1jb2w+CiAgICAgICAgICA8L2Etcm93PgogICAgICAgIDwvYS1mb3JtPgogICAgICA8L3NlY3Rpb24+CiAgICA8L3NlY3Rpb24+CiAgPC9zZWN0aW9uPgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiwgd2F0Y2gsIG9uTW91bnRlZCB9IGZyb20gJ3Z1ZSc7CmltcG9ydCB7IFVzZXJPdXRsaW5lZCwgSW5mb0NpcmNsZU91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMtdnVlJzsKaW1wb3J0IHRyeWRlbW8gZnJvbSAnLi4vLi4vX3V0aWwvdHJ5ZGVtbyc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgY29tcG9uZW50czogewogICAgVXNlck91dGxpbmVkLAogICAgSW5mb0NpcmNsZU91dGxpbmVkLAogIH0sCiAgbWl4aW5zOiBbdHJ5ZGVtb10sCiAgc2V0dXAocHJvcHMpIHsKICAgIC8vIC8vIOWGhee9ruWtl+autQogICAgY29uc3QgZGVtb2NvZGUgPSByZWYoJycpOwogICAgY29uc3QgdmFsdWUgPSByZWYoKTsKICAgIGNvbnN0IHByb3BkYXRhID0gcmVmKHsKICAgICAgcHJlZml4c3VmZml4OiAnMCcsCiAgICAgIC8vIDAt5LiN5bGV56S65YmN5ZCO57yAIDEt5YmN5ZCO572u5qCH562+5b2i5byPIDIt5YmN5ZCO572u5paH5a2X5b2i5byPIDMt5YmN57yA5b2i5byPCiAgICAgIHNpemU6ICdkZWZhdWx0JywKICAgICAgLy8gZGVmYXVsdC3mma7pgJogbGFyZ2Ugc21hbGwKICAgICAgYm9yZGVyZWQ6IHRydWUsCiAgICAgIG1heEFuZE1pbjogZmFsc2UsCiAgICAgIGNvbnRyb2xzOiB0cnVlLAogICAgfSk7CiAgICBjb25zdCBkZWZhdWx0VmFsID0gewogICAgICAuLi5wcm9wZGF0YS52YWx1ZSwKICAgIH07CiAgICBjb25zdCBnZXRFcXVhbFZhbCA9ICh0eXBlLCBub3RlcXVhbCwgZXF1YWxyZXMgPSAnJykgPT4gewogICAgICByZXR1cm4gcHJvcGRhdGEudmFsdWVbdHlwZV0gIT09IG5vdGVxdWFsID8gZXF1YWxyZXMgfHwgJyAnICsgKHByb3BkYXRhLnZhbHVlW3R5cGVdID09PSBmYWxzZSA/ICc6JyA6ICcnKSArIHR5cGUucmVwbGFjZSgvKFtBLVpdKS9nLCBmdW5jdGlvbiAobSkgewogICAgICAgIHJldHVybiAnLScgKyBtLnRvTG9jYWxlTG93ZXJDYXNlKCk7CiAgICAgIH0pICsgKHByb3BkYXRhLnZhbHVlW3R5cGVdID09PSB0cnVlID8gJycgOiBgPSIke3Byb3BkYXRhLnZhbHVlW3R5cGVdfSJgKSA6ICcnOwogICAgfTsKICAgIGNvbnN0IHJlbmRlckNvZGUgPSBwcm9wZGF0YSA9PiB7CiAgICAgIGxldCBwcm9wc3ZhbCA9ICcnOwogICAgICBsZXQgc2NyaXB0Y29kZSA9ICcnOwogICAgICBmb3IgKGxldCBrZXkgaW4gcHJvcGRhdGEpIHsKICAgICAgICBpZiAoa2V5ID09PSAncHJlZml4c3VmZml4JykgewogICAgICAgICAgcHJvcGRhdGEucHJlZml4c3VmZml4ID09PSAnMycgJiYgKHByb3BzdmFsICs9ICcgcHJlZml4PSLvv6UiJyk7CiAgICAgICAgICBwcm9wZGF0YS5wcmVmaXhzdWZmaXggPT09ICcyJyAmJiAocHJvcHN2YWwgKz0gJyBhZGRvbi1iZWZvcmU9IisiIGFkZG9uLWFmdGVyPSIkIicpOwogICAgICAgICAgcHJvcGRhdGEucHJlZml4c3VmZml4ID09PSAnMScgJiYgKHNjcmlwdGNvZGUgPSBgCiAgICAgICAgPHNjcmlwdD4KICAgICAgICBpbXBvcnQgeyBVc2VyT3V0bGluZWQsIEluZm9DaXJjbGVPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLXZ1ZSc7CiAgICAgICAgZXhwb3J0IGRlZmF1bHQgewogICAgICAgICAgY29tcG9uZW50czogewogICAgICAgICAgICBVc2VyT3V0bGluZWQsCiAgICAgICAgICAgIEluZm9DaXJjbGVPdXRsaW5lZCwKICAgICAgICAgIH0sCiAgICAgICAgfQogICAgICAgIDxcL3NjcmlwdD5gKTsKICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ21heEFuZE1pbicpIHsKICAgICAgICAgIHByb3BkYXRhLm1heEFuZE1pbiAmJiAocHJvcHN2YWwgKz0gJyA6bWF4PSIxMCIgOm1pbj0iMSInKTsKICAgICAgICB9IGVsc2UgewogICAgICAgICAgcHJvcHN2YWwgKz0gZ2V0RXF1YWxWYWwoa2V5LCBkZWZhdWx0VmFsW2tleV0pOwogICAgICAgIH0KICAgICAgfQogICAgICByZXR1cm4gYDx0ZW1wbGF0ZT4KICAgICAgICAgIDxhLWlucHV0LW51bWJlciR7cHJvcHN2YWx9JHtwcm9wZGF0YVsncHJlZml4c3VmZml4J10gPT09ICcxJyA/IGA+CiAgICAgICAgICAgIDx0ZW1wbGF0ZSAjYWRkb25CZWZvcmU+CiAgICAgICAgICAgICAgPHVzZXItb3V0bGluZWQgdHlwZT0idXNlciIgLz4KICAgICAgICAgICAgPC90ZW1wbGF0ZT4KICAgICAgICAgICAgPHRlbXBsYXRlICNhZGRvbkFmdGVyPgogICAgICAgICAgICAgIDxhLXRvb2x0aXAgdGl0bGU9IkV4dHJhIGluZm9ybWF0aW9uIj48aW5mby1jaXJjbGUtb3V0bGluZWQgc3R5bGU9ImNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDUpIiAvPjwvYS10b29sdGlwPgogICAgICAgICAgICA8L3RlbXBsYXRlPgogICAgICAgICAgPC9hLWlucHV0LW51bWJlcj5gIDogJyAvPid9CiAgICAgICAgPC90ZW1wbGF0ZT4KICAgICAgICAke3NjcmlwdGNvZGV9YC5yZXBsYWNlKC8gezh9L2csICcnKTsKICAgIH07CiAgICBvbk1vdW50ZWQoKCkgPT4gewogICAgICBkZW1vY29kZS52YWx1ZSA9IHJlbmRlckNvZGUocHJvcGRhdGEudmFsdWUpOwogICAgfSk7CiAgICB3YXRjaChwcm9wZGF0YSwgZGF0YSA9PiB7CiAgICAgIGRlbW9jb2RlLnZhbHVlID0gcmVuZGVyQ29kZShkYXRhKTsKICAgIH0sIHsKICAgICAgZGVlcDogdHJ1ZSwKICAgIH0pOwoKICAgIC8vIOmHjee9ruaWueazleWbuuWumuWtl+autQogICAgY29uc3QgcmVzZXRJdGVtID0gKCkgPT4gewogICAgICBwcm9wZGF0YS52YWx1ZSA9IHsKICAgICAgICAuLi5kZWZhdWx0VmFsLAogICAgICB9OwogICAgfTsKICAgIHJldHVybiB7CiAgICAgIHZhbHVlLAogICAgICBkZW1vY29kZSwKICAgICAgcHJvcGRhdGEsCiAgICAgIHJlc2V0SXRlbSwKICAgICAgbGFiZWxDb2w6IHsKICAgICAgICBzdHlsZTogewogICAgICAgICAgd2lkdGg6ICcxMjBweCcsCiAgICAgICAgfSwKICAgICAgfSwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0Pg==",isdemo:1}},{default:e(()=>[o(Y,{jsfiddle:{demo:1,order:-1,title:{"zh-CN":"\u5728\u7EBF\u6F14\u793A","en-US":"Online Demo"},relativePath:"components/input-number/demo/try.vue"},code:t.democode,onChangeDemo:t.changeDemo},{default:e(()=>[n("section",null,[n("section",z,[E,o(p,{value:t.value,"onUpdate:value":s[0]||(s[0]=C=>t.value=C),"addon-before":t.propdata.prefixsuffix==="2"?"+":void 0,"addon-after":t.propdata.prefixsuffix==="2"?"$":void 0,prefix:t.propdata.prefixsuffix==="3"?"\uFFE5":void 0,size:t.propdata.size,bordered:t.propdata.bordered,max:t.propdata.maxAndMin?10:void 0,min:t.propdata.maxAndMin?1:void 0,controls:t.propdata.controls},K({_:2},[t.propdata.prefixsuffix==="1"?{name:"addonBefore",fn:e(()=>[o(u,{type:"user"})]),key:"0"}:void 0,t.propdata.prefixsuffix==="1"?{name:"addonAfter",fn:e(()=>[o(l,{title:"Extra information"},{default:e(()=>[o(i,{style:{color:"rgba(0, 0, 0, 0.45)"}})]),_:1})]),key:"1"}:void 0]),1032,["value","addon-before","addon-after","prefix","size","bordered","max","min","controls"])]),n("section",U,[n("section",_,G(t.demotitle),1),n("section",T,[o(B,{"label-col":t.labelCol},{default:e(()=>[o(I,null,{default:e(()=>[o(f,{label:"prefixSuffix"},{default:e(()=>[o(h,{value:t.propdata.prefixsuffix,"onUpdate:value":s[1]||(s[1]=C=>t.propdata.prefixsuffix=C)},{default:e(()=>[(m(),V(S,null,x({0:"\u4E0D\u914D\u7F6E\u524D\u540E\u7F00",1:"\u524D\u540E\u7F6E\u81EA\u5B9A\u4E49",2:"\u524D\u540E\u7F6E\u4E3A\u6587\u5B57",3:"\u524D\u7F00\u6587\u5B57\u5F62\u5F0F"},(C,H)=>o(r,{key:H,value:H,name:"optionType"},{default:e(()=>[a(G(C),1)]),_:2},1032,["value"])),64))]),_:1},8,["value"])]),_:1})]),_:1}),o(I,null,{default:e(()=>[o(y,{span:"10"},{default:e(()=>[o(f,{label:"size"},{default:e(()=>[o(h,{value:t.propdata.size,"onUpdate:value":s[2]||(s[2]=C=>t.propdata.size=C)},{default:e(()=>[(m(),V(S,null,x(["large","default","small"],C=>o(r,{key:C,value:C,name:"optionType"},{default:e(()=>[a(G(C),1)]),_:2},1032,["value"])),64))]),_:1},8,["value"])]),_:1})]),_:1}),o(y,{span:"14"},{default:e(()=>[o(f,{label:"bordered"},{default:e(()=>[o(w,{checked:t.propdata.bordered,"onUpdate:checked":s[3]||(s[3]=C=>t.propdata.bordered=C),"checked-children":"\u5F00","un-checked-children":"\u5173"},null,8,["checked"])]),_:1})]),_:1})]),_:1}),o(I,null,{default:e(()=>[o(y,{span:"8"},{default:e(()=>[o(f,{label:"maxAndMin"},{default:e(()=>[o(w,{checked:t.propdata.maxAndMin,"onUpdate:checked":s[4]||(s[4]=C=>t.propdata.maxAndMin=C),"checked-children":"\u5F00","un-checked-children":"\u5173"},null,8,["checked"])]),_:1})]),_:1}),o(y,{span:"8"},{default:e(()=>[o(f,{label:"controls"},{default:e(()=>[o(w,{checked:t.propdata.controls,"onUpdate:checked":s[5]||(s[5]=C=>t.propdata.controls=C),"checked-children":"\u5F00","un-checked-children":"\u5173"},null,8,["checked"])]),_:1})]),_:1})]),_:1})]),_:1},8,["label-col"])])])])]),_:1},8,["jsfiddle","code","onChangeDemo"])]),_:1},8,["jsfiddle"])}const M=v(j,[["render",Q]]),q=Z({setup(){return{value:k(3)}}}),O=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-input-number")]),a(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("inputNumber"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":min"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("1"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":max"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("10"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    \u5F53\u524D\u503C\uFF1A{{ value }}
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" value "),n("span",{class:"token operator"},"="),a(" ref"),n("span",{class:"token operator"},"<"),a("number"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),$=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-input-number")]),a(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("inputNumber"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":min"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("1"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":max"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("10"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    \u5F53\u524D\u503C\uFF1A{{ value }}
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function nn(t,s,d,g,A,b){const u=c("a-input-number"),i=c("demo-box");return m(),W(i,{jsfiddle:{us:"Numeric-only input box.",cn:"\u6570\u5B57\u8F93\u5165\u6846\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u6570\u5B57\u8F93\u5165\u6846\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Numeric-only input box.</p>
`,order:0,title:{"zh-CN":"\u57FA\u672C\u7528\u6CD5","en-US":"Basic usage"},relativePath:"components/input-number/demo/basic.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS1pbnB1dC1udW1iZXIgaWQ9ImlucHV0TnVtYmVyIiB2LW1vZGVsOnZhbHVlPSJ2YWx1ZSIgOm1pbj0iMSIgOm1heD0iMTAiIC8+CiAgICDlvZPliY3lgLzvvJp7eyB2YWx1ZSB9fQogIDwvZGl2Pgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgdmFsdWUgPSByZWY8bnVtYmVyPigzKTsKCiAgICByZXR1cm4gewogICAgICB2YWx1ZSwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS1pbnB1dC1udW1iZXIgaWQ9ImlucHV0TnVtYmVyIiB2LW1vZGVsOnZhbHVlPSJ2YWx1ZSIgOm1pbj0iMSIgOm1heD0iMTAiIC8+CiAgICDlvZPliY3lgLzvvJp7eyB2YWx1ZSB9fQogIDwvZGl2Pgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCB2YWx1ZSA9IHJlZigzKTsKICAgIHJldHVybiB7CiAgICAgIHZhbHVlLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+",isdemo:!1}},{default:e(()=>[n("div",null,[o(u,{id:"inputNumber",value:t.value,"onUpdate:value":s[0]||(s[0]=l=>t.value=l),min:1,max:10},null,8,["value"]),a(" \u5F53\u524D\u503C\uFF1A"+G(t.value),1)])]),htmlCode:e(()=>[O]),jsVersionHtml:e(()=>[$]),_:1},8,["jsfiddle"])}const an=v(q,[["render",nn]]),tn=Z({setup(){const t=k(3),s=k(!0);return{value:t,disabled:s,toggle:()=>{s.value=!s.value}}}}),sn={style:{"margin-top":"20px"}},en=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-input-number")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":min"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("1"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":max"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("10"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":disabled"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("disabled"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),a(" 20px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-button")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("primary"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("toggle"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Toggle disabled"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" value "),n("span",{class:"token operator"},"="),a(" ref"),n("span",{class:"token operator"},"<"),a("number"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" disabled "),n("span",{class:"token operator"},"="),a(" ref"),n("span",{class:"token operator"},"<"),a("boolean"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"toggle"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      disabled`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token operator"},"!"),a("disabled"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token punctuation"},","),a(`
      disabled`),n("span",{class:"token punctuation"},","),a(`
      toggle`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),on=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-input-number")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":min"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("1"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":max"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("10"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":disabled"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("disabled"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),a(" 20px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-button")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("primary"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("toggle"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Toggle disabled"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" disabled "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"toggle"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      disabled`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token operator"},"!"),a("disabled"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token punctuation"},","),a(`
      disabled`),n("span",{class:"token punctuation"},","),a(`
      toggle`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function cn(t,s,d,g,A,b){const u=c("a-input-number"),i=c("a-button"),l=c("demo-box");return m(),W(l,{jsfiddle:{us:"Click the button to toggle between available and disabled states.",cn:"\u70B9\u51FB\u6309\u94AE\u5207\u6362\u53EF\u7528\u72B6\u6001\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u70B9\u51FB\u6309\u94AE\u5207\u6362\u53EF\u7528\u72B6\u6001\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Click the button to toggle between available and disabled states.</p>
`,order:0,title:{"zh-CN":"\u4E0D\u53EF\u7528","en-US":"Disabled"},relativePath:"components/input-number/demo/disabled.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS1pbnB1dC1udW1iZXIgdi1tb2RlbDp2YWx1ZT0idmFsdWUiIDptaW49IjEiIDptYXg9IjEwIiA6ZGlzYWJsZWQ9ImRpc2FibGVkIiAvPgogICAgPGRpdiBzdHlsZT0ibWFyZ2luLXRvcDogMjBweCI+CiAgICAgIDxhLWJ1dHRvbiB0eXBlPSJwcmltYXJ5IiBAY2xpY2s9InRvZ2dsZSI+VG9nZ2xlIGRpc2FibGVkPC9hLWJ1dHRvbj4KICAgIDwvZGl2PgogIDwvZGl2Pgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgdmFsdWUgPSByZWY8bnVtYmVyPigzKTsKICAgIGNvbnN0IGRpc2FibGVkID0gcmVmPGJvb2xlYW4+KHRydWUpOwoKICAgIGNvbnN0IHRvZ2dsZSA9ICgpID0+IHsKICAgICAgZGlzYWJsZWQudmFsdWUgPSAhZGlzYWJsZWQudmFsdWU7CiAgICB9OwoKICAgIHJldHVybiB7CiAgICAgIHZhbHVlLAogICAgICBkaXNhYmxlZCwKICAgICAgdG9nZ2xlLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS1pbnB1dC1udW1iZXIgdi1tb2RlbDp2YWx1ZT0idmFsdWUiIDptaW49IjEiIDptYXg9IjEwIiA6ZGlzYWJsZWQ9ImRpc2FibGVkIiAvPgogICAgPGRpdiBzdHlsZT0ibWFyZ2luLXRvcDogMjBweCI+CiAgICAgIDxhLWJ1dHRvbiB0eXBlPSJwcmltYXJ5IiBAY2xpY2s9InRvZ2dsZSI+VG9nZ2xlIGRpc2FibGVkPC9hLWJ1dHRvbj4KICAgIDwvZGl2PgogIDwvZGl2Pgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCB2YWx1ZSA9IHJlZigzKTsKICAgIGNvbnN0IGRpc2FibGVkID0gcmVmKHRydWUpOwogICAgY29uc3QgdG9nZ2xlID0gKCkgPT4gewogICAgICBkaXNhYmxlZC52YWx1ZSA9ICFkaXNhYmxlZC52YWx1ZTsKICAgIH07CiAgICByZXR1cm4gewogICAgICB2YWx1ZSwKICAgICAgZGlzYWJsZWQsCiAgICAgIHRvZ2dsZSwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0Pg==",isdemo:!1}},{default:e(()=>[n("div",null,[o(u,{value:t.value,"onUpdate:value":s[0]||(s[0]=p=>t.value=p),min:1,max:10,disabled:t.disabled},null,8,["value","disabled"]),n("div",sn,[o(i,{type:"primary",onClick:t.toggle},{default:e(()=>[a("Toggle disabled")]),_:1},8,["onClick"])])])]),htmlCode:e(()=>[en]),jsVersionHtml:e(()=>[on]),_:1},8,["jsfiddle"])}const pn=v(tn,[["render",cn]]),ln=Z({setup(){return{value:k("1")}}}),un=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-input-number")]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 200px")]),n("span",{class:"token punctuation"},'"')])]),a(`
    `),n("span",{class:"token attr-name"},":min"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("0"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":max"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("10"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":step"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("0.00000000000001"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"string-mode"),a(`
  `),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" value "),n("span",{class:"token operator"},"="),a(" ref"),n("span",{class:"token operator"},"<"),a("string"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),kn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-input-number")]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 200px")]),n("span",{class:"token punctuation"},'"')])]),a(`
    `),n("span",{class:"token attr-name"},":min"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("0"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":max"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("10"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":step"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("0.00000000000001"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"string-mode"),a(`
  `),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function gn(t,s,d,g,A,b){const u=c("a-input-number"),i=c("demo-box");return m(),W(i,{jsfiddle:{us:"Use `stringMode` to support high precision decimals support.\n`change` will return string value instead. You need polyfill of BigInt if browser not support.",cn:"\u901A\u8FC7 `stringMode` \u5F00\u542F\u9AD8\u7CBE\u5EA6\u5C0F\u6570\u652F\u6301\uFF0C`change` \u4E8B\u4EF6\u5C06\u8FD4\u56DE string \u7C7B\u578B\u3002\n\u5BF9\u4E8E\u65E7\u7248\u6D4F\u89C8\u5668\uFF0C\u4F60\u9700\u8981 BigInt polyfill\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u901A\u8FC7 <code>stringMode</code> \u5F00\u542F\u9AD8\u7CBE\u5EA6\u5C0F\u6570\u652F\u6301\uFF0C<code>change</code> \u4E8B\u4EF6\u5C06\u8FD4\u56DE string \u7C7B\u578B\u3002
\u5BF9\u4E8E\u65E7\u7248\u6D4F\u89C8\u5668\uFF0C\u4F60\u9700\u8981 BigInt polyfill\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Use <code>stringMode</code> to support high precision decimals support.
<code>change</code> will return string value instead. You need polyfill of BigInt if browser not support.</p>
`,order:3,title:{"zh-CN":"\u9AD8\u7CBE\u5EA6\u5C0F\u6570","en-US":"High precision decimals"},relativePath:"components/input-number/demo/digit.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWlucHV0LW51bWJlcgogICAgdi1tb2RlbDp2YWx1ZT0idmFsdWUiCiAgICBzdHlsZT0id2lkdGg6IDIwMHB4IgogICAgOm1pbj0iMCIKICAgIDptYXg9IjEwIgogICAgOnN0ZXA9IjAuMDAwMDAwMDAwMDAwMDEiCiAgICBzdHJpbmctbW9kZQogIC8+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCB2YWx1ZSA9IHJlZjxzdHJpbmc+KCcxJyk7CgogICAgcmV0dXJuIHsKICAgICAgdmFsdWUsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWlucHV0LW51bWJlcgogICAgdi1tb2RlbDp2YWx1ZT0idmFsdWUiCiAgICBzdHlsZT0id2lkdGg6IDIwMHB4IgogICAgOm1pbj0iMCIKICAgIDptYXg9IjEwIgogICAgOnN0ZXA9IjAuMDAwMDAwMDAwMDAwMDEiCiAgICBzdHJpbmctbW9kZQogIC8+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IHZhbHVlID0gcmVmKCcxJyk7CiAgICByZXR1cm4gewogICAgICB2YWx1ZSwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0Pg==",isdemo:!1}},{default:e(()=>[o(u,{value:t.value,"onUpdate:value":s[0]||(s[0]=l=>t.value=l),style:{width:"200px"},min:0,max:10,step:1e-14,"string-mode":""},null,8,["value","step"])]),htmlCode:e(()=>[un]),jsVersionHtml:e(()=>[kn]),_:1},8,["jsfiddle"])}const dn=v(ln,[["render",gn]]),rn=Z({setup(){const t=k(1e3),s=k(100);return{value1:t,value2:s}}}),In=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-input-number")]),a(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value1"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":formatter"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value => `$ ${value}`.replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',')"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":parser"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value => value.replace(/\\$\\s?|(,*)/g, '')"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-input-number")]),a(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value2"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":min"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("0"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":max"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("100"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":formatter"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value => `${value}%`"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":parser"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value => value.replace('%', '')"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" value1 "),n("span",{class:"token operator"},"="),a(" ref"),n("span",{class:"token operator"},"<"),a("number"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" value2 "),n("span",{class:"token operator"},"="),a(" ref"),n("span",{class:"token operator"},"<"),a("number"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value1`),n("span",{class:"token punctuation"},","),a(`
      value2`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),Cn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-input-number")]),a(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value1"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":formatter"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value => `$ ${value}`.replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',')"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":parser"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value => value.replace(/\\$\\s?|(,*)/g, '')"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-input-number")]),a(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value2"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":min"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("0"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":max"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("100"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":formatter"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value => `${value}%`"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":parser"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value => value.replace('%', '')"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" value1 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" value2 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value1`),n("span",{class:"token punctuation"},","),a(`
      value2`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function An(t,s,d,g,A,b){const u=c("a-input-number"),i=c("a-space"),l=c("demo-box");return m(),W(l,{jsfiddle:{us:"Display value within it's situation with `formatter`, and we usually use `parser` at the same time.",cn:"\u901A\u8FC7 `formatter` \u683C\u5F0F\u5316\u6570\u5B57\uFF0C\u4EE5\u5C55\u793A\u5177\u6709\u5177\u4F53\u542B\u4E49\u7684\u6570\u636E\uFF0C\u5F80\u5F80\u9700\u8981\u914D\u5408 `parser` \u4E00\u8D77\u4F7F\u7528\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u901A\u8FC7 <code>formatter</code> \u683C\u5F0F\u5316\u6570\u5B57\uFF0C\u4EE5\u5C55\u793A\u5177\u6709\u5177\u4F53\u542B\u4E49\u7684\u6570\u636E\uFF0C\u5F80\u5F80\u9700\u8981\u914D\u5408 <code>parser</code> \u4E00\u8D77\u4F7F\u7528\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Display value within it's situation with <code>formatter</code>, and we usually use <code>parser</code> at the same time.</p>
`,order:0,title:{"zh-CN":"\u683C\u5F0F\u5316\u5C55\u793A","en-US":"Formatter"},relativePath:"components/input-number/demo/formatter.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlPgogICAgPGEtaW5wdXQtbnVtYmVyCiAgICAgIHYtbW9kZWw6dmFsdWU9InZhbHVlMSIKICAgICAgOmZvcm1hdHRlcj0idmFsdWUgPT4gYCQgJHt2YWx1ZX1gLnJlcGxhY2UoL1xCKD89KFxkezN9KSsoPyFcZCkpL2csICcsJykiCiAgICAgIDpwYXJzZXI9InZhbHVlID0+IHZhbHVlLnJlcGxhY2UoL1wkXHM/fCgsKikvZywgJycpIgogICAgLz4KICAgIDxhLWlucHV0LW51bWJlcgogICAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTIiCiAgICAgIDptaW49IjAiCiAgICAgIDptYXg9IjEwMCIKICAgICAgOmZvcm1hdHRlcj0idmFsdWUgPT4gYCR7dmFsdWV9JWAiCiAgICAgIDpwYXJzZXI9InZhbHVlID0+IHZhbHVlLnJlcGxhY2UoJyUnLCAnJykiCiAgICAvPgogIDwvYS1zcGFjZT4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IHZhbHVlMSA9IHJlZjxudW1iZXI+KDEwMDApOwogICAgY29uc3QgdmFsdWUyID0gcmVmPG51bWJlcj4oMTAwKTsKCiAgICByZXR1cm4gewogICAgICB2YWx1ZTEsCiAgICAgIHZhbHVlMiwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlPgogICAgPGEtaW5wdXQtbnVtYmVyCiAgICAgIHYtbW9kZWw6dmFsdWU9InZhbHVlMSIKICAgICAgOmZvcm1hdHRlcj0idmFsdWUgPT4gYCQgJHt2YWx1ZX1gLnJlcGxhY2UoL1xCKD89KFxkezN9KSsoPyFcZCkpL2csICcsJykiCiAgICAgIDpwYXJzZXI9InZhbHVlID0+IHZhbHVlLnJlcGxhY2UoL1wkXHM/fCgsKikvZywgJycpIgogICAgLz4KICAgIDxhLWlucHV0LW51bWJlcgogICAgICB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTIiCiAgICAgIDptaW49IjAiCiAgICAgIDptYXg9IjEwMCIKICAgICAgOmZvcm1hdHRlcj0idmFsdWUgPT4gYCR7dmFsdWV9JWAiCiAgICAgIDpwYXJzZXI9InZhbHVlID0+IHZhbHVlLnJlcGxhY2UoJyUnLCAnJykiCiAgICAvPgogIDwvYS1zcGFjZT4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgdmFsdWUxID0gcmVmKDEwMDApOwogICAgY29uc3QgdmFsdWUyID0gcmVmKDEwMCk7CiAgICByZXR1cm4gewogICAgICB2YWx1ZTEsCiAgICAgIHZhbHVlMiwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0Pg==",isdemo:!1}},{default:e(()=>[o(i,null,{default:e(()=>[o(u,{value:t.value1,"onUpdate:value":s[0]||(s[0]=p=>t.value1=p),formatter:p=>`$ ${p}`.replace(/\B(?=(\d{3})+(?!\d))/g,","),parser:p=>p.replace(/\$\s?|(,*)/g,"")},null,8,["value","formatter","parser"]),o(u,{value:t.value2,"onUpdate:value":s[1]||(s[1]=p=>t.value2=p),min:0,max:100,formatter:p=>`${p}%`,parser:p=>p.replace("%","")},null,8,["value","formatter","parser"])]),_:1})]),htmlCode:e(()=>[In]),jsVersionHtml:e(()=>[Cn]),_:1},8,["jsfiddle"])}const mn=v(rn,[["render",An]]),bn=Z({setup(){const t=k(3),s=k(3),d=k(3);return{value1:t,value2:s,value3:d}}}),vn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-input-number")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value1"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("large"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":min"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("1"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":max"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("100000"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-input-number")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value2"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":min"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("1"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":max"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("100000"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-input-number")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value3"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("small"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":min"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("1"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":max"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("100000"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" value1 "),n("span",{class:"token operator"},"="),a(" ref"),n("span",{class:"token operator"},"<"),a("number"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" value2 "),n("span",{class:"token operator"},"="),a(" ref"),n("span",{class:"token operator"},"<"),a("number"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" value3 "),n("span",{class:"token operator"},"="),a(" ref"),n("span",{class:"token operator"},"<"),a("number"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value1`),n("span",{class:"token punctuation"},","),a(`
      value2`),n("span",{class:"token punctuation"},","),a(`
      value3`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),hn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-input-number")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value1"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("large"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":min"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("1"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":max"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("100000"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-input-number")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value2"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":min"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("1"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":max"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("100000"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-input-number")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value3"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("small"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":min"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("1"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":max"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("100000"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" value1 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" value2 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" value3 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value1`),n("span",{class:"token punctuation"},","),a(`
      value2`),n("span",{class:"token punctuation"},","),a(`
      value3`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function Zn(t,s,d,g,A,b){const u=c("a-input-number"),i=c("a-space"),l=c("demo-box");return m(),W(l,{jsfiddle:{us:"There are three sizes available to a numeric input box. By default, the size is `32px`. The two additional sizes are `large` and `small` which means `40px` and `24px`, respectively.",cn:"\u4E09\u79CD\u5927\u5C0F\u7684\u6570\u5B57\u8F93\u5165\u6846\uFF0C\u5F53 size \u5206\u522B\u4E3A `large` \u548C `small` \u65F6\uFF0C\u8F93\u5165\u6846\u9AD8\u5EA6\u4E3A `40px` \u548C `24px` \uFF0C\u9ED8\u8BA4\u9AD8\u5EA6\u4E3A `32px`\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u4E09\u79CD\u5927\u5C0F\u7684\u6570\u5B57\u8F93\u5165\u6846\uFF0C\u5F53 size \u5206\u522B\u4E3A <code>large</code> \u548C <code>small</code> \u65F6\uFF0C\u8F93\u5165\u6846\u9AD8\u5EA6\u4E3A <code>40px</code> \u548C <code>24px</code> \uFF0C\u9ED8\u8BA4\u9AD8\u5EA6\u4E3A <code>32px</code>\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>There are three sizes available to a numeric input box. By default, the size is <code>32px</code>. The two additional sizes are <code>large</code> and <code>small</code> which means <code>40px</code> and <code>24px</code>, respectively.</p>
`,order:0,title:{"zh-CN":"\u4E09\u79CD\u5927\u5C0F","en-US":"Sizes"},relativePath:"components/input-number/demo/size.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlPgogICAgPGEtaW5wdXQtbnVtYmVyIHYtbW9kZWw6dmFsdWU9InZhbHVlMSIgc2l6ZT0ibGFyZ2UiIDptaW49IjEiIDptYXg9IjEwMDAwMCIgLz4KICAgIDxhLWlucHV0LW51bWJlciB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTIiIDptaW49IjEiIDptYXg9IjEwMDAwMCIgLz4KICAgIDxhLWlucHV0LW51bWJlciB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTMiIHNpemU9InNtYWxsIiA6bWluPSIxIiA6bWF4PSIxMDAwMDAiIC8+CiAgPC9hLXNwYWNlPgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgdmFsdWUxID0gcmVmPG51bWJlcj4oMyk7CiAgICBjb25zdCB2YWx1ZTIgPSByZWY8bnVtYmVyPigzKTsKICAgIGNvbnN0IHZhbHVlMyA9IHJlZjxudW1iZXI+KDMpOwoKICAgIHJldHVybiB7CiAgICAgIHZhbHVlMSwKICAgICAgdmFsdWUyLAogICAgICB2YWx1ZTMsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlPgogICAgPGEtaW5wdXQtbnVtYmVyIHYtbW9kZWw6dmFsdWU9InZhbHVlMSIgc2l6ZT0ibGFyZ2UiIDptaW49IjEiIDptYXg9IjEwMDAwMCIgLz4KICAgIDxhLWlucHV0LW51bWJlciB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTIiIDptaW49IjEiIDptYXg9IjEwMDAwMCIgLz4KICAgIDxhLWlucHV0LW51bWJlciB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTMiIHNpemU9InNtYWxsIiA6bWluPSIxIiA6bWF4PSIxMDAwMDAiIC8+CiAgPC9hLXNwYWNlPgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCB2YWx1ZTEgPSByZWYoMyk7CiAgICBjb25zdCB2YWx1ZTIgPSByZWYoMyk7CiAgICBjb25zdCB2YWx1ZTMgPSByZWYoMyk7CiAgICByZXR1cm4gewogICAgICB2YWx1ZTEsCiAgICAgIHZhbHVlMiwKICAgICAgdmFsdWUzLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+",isdemo:!1}},{default:e(()=>[o(i,null,{default:e(()=>[o(u,{value:t.value1,"onUpdate:value":s[0]||(s[0]=p=>t.value1=p),size:"large",min:1,max:1e5},null,8,["value"]),o(u,{value:t.value2,"onUpdate:value":s[1]||(s[1]=p=>t.value2=p),min:1,max:1e5},null,8,["value"]),o(u,{value:t.value3,"onUpdate:value":s[2]||(s[2]=p=>t.value3=p),size:"small",min:1,max:1e5},null,8,["value"])]),_:1})]),htmlCode:e(()=>[vn]),jsVersionHtml:e(()=>[hn]),_:1},8,["jsfiddle"])}const Wn=v(bn,[["render",Zn]]),fn=Z({components:{SettingOutlined:N},setup(){return{value1:k(100),value2:k(100),value3:k(100),value4:k(100),addonBeforeValue:k("add"),addonAfterValue:k("USD")}}}),yn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),a(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("vertical"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-input-number")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value1"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"addon-before"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("+"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"addon-after"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("$"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-input-number")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-input-number")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#addonBefore"),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("addonBeforeValue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 60px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select-option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("add"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("+"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select-option")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select-option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("minus"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("-"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select-option")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#addonAfter"),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("addonAfterValue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 60px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select-option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("USD"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("$"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select-option")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select-option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("EUR"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u20AC"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select-option")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select-option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("GBP"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\xA3"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select-option")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select-option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("CNY"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\xA5"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select-option")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-input-number")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-input-number")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#addonAfter"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("SettingOutlined")]),a(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-input-number")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-input-number")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value4"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#addonAfter"),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-cascader")]),a(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("cascader"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 150px")]),n("span",{class:"token punctuation"},'"')])]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-input-number")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" SettingOutlined "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(" SettingOutlined "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"value1"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value2"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value3"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value4"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"addonBeforeValue"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'add'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"addonAfterValue"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'USD'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),wn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),a(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("vertical"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-input-number")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value1"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"addon-before"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("+"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"addon-after"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("$"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-input-number")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-input-number")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#addonBefore"),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("addonBeforeValue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 60px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select-option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("add"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("+"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select-option")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select-option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("minus"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("-"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select-option")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#addonAfter"),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("addonAfterValue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 60px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select-option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("USD"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("$"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select-option")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select-option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("EUR"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u20AC"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select-option")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select-option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("GBP"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\xA3"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select-option")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select-option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("CNY"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\xA5"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select-option")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-input-number")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-input-number")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#addonAfter"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("SettingOutlined")]),a(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-input-number")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-input-number")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value4"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#addonAfter"),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-cascader")]),a(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("cascader"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 150px")]),n("span",{class:"token punctuation"},'"')])]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-input-number")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" SettingOutlined "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    SettingOutlined`),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"value1"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value2"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value3"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value4"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"addonBeforeValue"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'add'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"addonAfterValue"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'USD'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function Gn(t,s,d,g,A,b){const u=c("a-input-number"),i=c("a-select-option"),l=c("a-select"),p=c("SettingOutlined"),r=c("a-cascader"),h=c("a-space"),f=c("demo-box");return m(),W(f,{jsfiddle:{us:"Using pre & post tabs example.",cn:"\u7528\u4E8E\u914D\u7F6E\u4E00\u4E9B\u56FA\u5B9A\u7EC4\u5408\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u7528\u4E8E\u914D\u7F6E\u4E00\u4E9B\u56FA\u5B9A\u7EC4\u5408\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Using pre &amp; post tabs example.</p>
`,order:2,title:{"zh-CN":"\u524D\u7F6E/\u540E\u7F6E\u6807\u7B7E","en-US":"Pre / Post tab"},relativePath:"components/input-number/demo/addon.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiPgogICAgPGEtaW5wdXQtbnVtYmVyIHYtbW9kZWw6dmFsdWU9InZhbHVlMSIgYWRkb24tYmVmb3JlPSIrIiBhZGRvbi1hZnRlcj0iJCI+PC9hLWlucHV0LW51bWJlcj4KICAgIDxhLWlucHV0LW51bWJlciB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTIiPgogICAgICA8dGVtcGxhdGUgI2FkZG9uQmVmb3JlPgogICAgICAgIDxhLXNlbGVjdCB2LW1vZGVsOnZhbHVlPSJhZGRvbkJlZm9yZVZhbHVlIiBzdHlsZT0id2lkdGg6IDYwcHgiPgogICAgICAgICAgPGEtc2VsZWN0LW9wdGlvbiB2YWx1ZT0iYWRkIj4rPC9hLXNlbGVjdC1vcHRpb24+CiAgICAgICAgICA8YS1zZWxlY3Qtb3B0aW9uIHZhbHVlPSJtaW51cyI+LTwvYS1zZWxlY3Qtb3B0aW9uPgogICAgICAgIDwvYS1zZWxlY3Q+CiAgICAgIDwvdGVtcGxhdGU+CiAgICAgIDx0ZW1wbGF0ZSAjYWRkb25BZnRlcj4KICAgICAgICA8YS1zZWxlY3Qgdi1tb2RlbDp2YWx1ZT0iYWRkb25BZnRlclZhbHVlIiBzdHlsZT0id2lkdGg6IDYwcHgiPgogICAgICAgICAgPGEtc2VsZWN0LW9wdGlvbiB2YWx1ZT0iVVNEIj4kPC9hLXNlbGVjdC1vcHRpb24+CiAgICAgICAgICA8YS1zZWxlY3Qtb3B0aW9uIHZhbHVlPSJFVVIiPuKCrDwvYS1zZWxlY3Qtb3B0aW9uPgogICAgICAgICAgPGEtc2VsZWN0LW9wdGlvbiB2YWx1ZT0iR0JQIj7CozwvYS1zZWxlY3Qtb3B0aW9uPgogICAgICAgICAgPGEtc2VsZWN0LW9wdGlvbiB2YWx1ZT0iQ05ZIj7CpTwvYS1zZWxlY3Qtb3B0aW9uPgogICAgICAgIDwvYS1zZWxlY3Q+CiAgICAgIDwvdGVtcGxhdGU+CiAgICA8L2EtaW5wdXQtbnVtYmVyPgogICAgPGEtaW5wdXQtbnVtYmVyIHYtbW9kZWw6dmFsdWU9InZhbHVlMyI+CiAgICAgIDx0ZW1wbGF0ZSAjYWRkb25BZnRlcj48U2V0dGluZ091dGxpbmVkIC8+PC90ZW1wbGF0ZT4KICAgIDwvYS1pbnB1dC1udW1iZXI+CiAgICA8YS1pbnB1dC1udW1iZXIgdi1tb2RlbDp2YWx1ZT0idmFsdWU0Ij4KICAgICAgPHRlbXBsYXRlICNhZGRvbkFmdGVyPgogICAgICAgIDxhLWNhc2NhZGVyIHBsYWNlaG9sZGVyPSJjYXNjYWRlciIgc3R5bGU9IndpZHRoOiAxNTBweCIgLz4KICAgICAgPC90ZW1wbGF0ZT4KICAgIDwvYS1pbnB1dC1udW1iZXI+CiAgPC9hLXNwYWNlPgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwppbXBvcnQgeyBTZXR0aW5nT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy12dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIGNvbXBvbmVudHM6IHsgU2V0dGluZ091dGxpbmVkIH0sCiAgc2V0dXAoKSB7CiAgICByZXR1cm4gewogICAgICB2YWx1ZTE6IHJlZigxMDApLAogICAgICB2YWx1ZTI6IHJlZigxMDApLAogICAgICB2YWx1ZTM6IHJlZigxMDApLAogICAgICB2YWx1ZTQ6IHJlZigxMDApLAogICAgICBhZGRvbkJlZm9yZVZhbHVlOiByZWYoJ2FkZCcpLAogICAgICBhZGRvbkFmdGVyVmFsdWU6IHJlZignVVNEJyksCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiPgogICAgPGEtaW5wdXQtbnVtYmVyIHYtbW9kZWw6dmFsdWU9InZhbHVlMSIgYWRkb24tYmVmb3JlPSIrIiBhZGRvbi1hZnRlcj0iJCI+PC9hLWlucHV0LW51bWJlcj4KICAgIDxhLWlucHV0LW51bWJlciB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTIiPgogICAgICA8dGVtcGxhdGUgI2FkZG9uQmVmb3JlPgogICAgICAgIDxhLXNlbGVjdCB2LW1vZGVsOnZhbHVlPSJhZGRvbkJlZm9yZVZhbHVlIiBzdHlsZT0id2lkdGg6IDYwcHgiPgogICAgICAgICAgPGEtc2VsZWN0LW9wdGlvbiB2YWx1ZT0iYWRkIj4rPC9hLXNlbGVjdC1vcHRpb24+CiAgICAgICAgICA8YS1zZWxlY3Qtb3B0aW9uIHZhbHVlPSJtaW51cyI+LTwvYS1zZWxlY3Qtb3B0aW9uPgogICAgICAgIDwvYS1zZWxlY3Q+CiAgICAgIDwvdGVtcGxhdGU+CiAgICAgIDx0ZW1wbGF0ZSAjYWRkb25BZnRlcj4KICAgICAgICA8YS1zZWxlY3Qgdi1tb2RlbDp2YWx1ZT0iYWRkb25BZnRlclZhbHVlIiBzdHlsZT0id2lkdGg6IDYwcHgiPgogICAgICAgICAgPGEtc2VsZWN0LW9wdGlvbiB2YWx1ZT0iVVNEIj4kPC9hLXNlbGVjdC1vcHRpb24+CiAgICAgICAgICA8YS1zZWxlY3Qtb3B0aW9uIHZhbHVlPSJFVVIiPuKCrDwvYS1zZWxlY3Qtb3B0aW9uPgogICAgICAgICAgPGEtc2VsZWN0LW9wdGlvbiB2YWx1ZT0iR0JQIj7CozwvYS1zZWxlY3Qtb3B0aW9uPgogICAgICAgICAgPGEtc2VsZWN0LW9wdGlvbiB2YWx1ZT0iQ05ZIj7CpTwvYS1zZWxlY3Qtb3B0aW9uPgogICAgICAgIDwvYS1zZWxlY3Q+CiAgICAgIDwvdGVtcGxhdGU+CiAgICA8L2EtaW5wdXQtbnVtYmVyPgogICAgPGEtaW5wdXQtbnVtYmVyIHYtbW9kZWw6dmFsdWU9InZhbHVlMyI+CiAgICAgIDx0ZW1wbGF0ZSAjYWRkb25BZnRlcj48U2V0dGluZ091dGxpbmVkIC8+PC90ZW1wbGF0ZT4KICAgIDwvYS1pbnB1dC1udW1iZXI+CiAgICA8YS1pbnB1dC1udW1iZXIgdi1tb2RlbDp2YWx1ZT0idmFsdWU0Ij4KICAgICAgPHRlbXBsYXRlICNhZGRvbkFmdGVyPgogICAgICAgIDxhLWNhc2NhZGVyIHBsYWNlaG9sZGVyPSJjYXNjYWRlciIgc3R5bGU9IndpZHRoOiAxNTBweCIgLz4KICAgICAgPC90ZW1wbGF0ZT4KICAgIDwvYS1pbnB1dC1udW1iZXI+CiAgPC9hLXNwYWNlPgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmltcG9ydCB7IFNldHRpbmdPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLXZ1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgY29tcG9uZW50czogewogICAgU2V0dGluZ091dGxpbmVkLAogIH0sCiAgc2V0dXAoKSB7CiAgICByZXR1cm4gewogICAgICB2YWx1ZTE6IHJlZigxMDApLAogICAgICB2YWx1ZTI6IHJlZigxMDApLAogICAgICB2YWx1ZTM6IHJlZigxMDApLAogICAgICB2YWx1ZTQ6IHJlZigxMDApLAogICAgICBhZGRvbkJlZm9yZVZhbHVlOiByZWYoJ2FkZCcpLAogICAgICBhZGRvbkFmdGVyVmFsdWU6IHJlZignVVNEJyksCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4=",isdemo:!1}},{default:e(()=>[o(h,{direction:"vertical"},{default:e(()=>[o(u,{value:t.value1,"onUpdate:value":s[0]||(s[0]=I=>t.value1=I),"addon-before":"+","addon-after":"$"},null,8,["value"]),o(u,{value:t.value2,"onUpdate:value":s[3]||(s[3]=I=>t.value2=I)},{addonBefore:e(()=>[o(l,{value:t.addonBeforeValue,"onUpdate:value":s[1]||(s[1]=I=>t.addonBeforeValue=I),style:{width:"60px"}},{default:e(()=>[o(i,{value:"add"},{default:e(()=>[a("+")]),_:1}),o(i,{value:"minus"},{default:e(()=>[a("-")]),_:1})]),_:1},8,["value"])]),addonAfter:e(()=>[o(l,{value:t.addonAfterValue,"onUpdate:value":s[2]||(s[2]=I=>t.addonAfterValue=I),style:{width:"60px"}},{default:e(()=>[o(i,{value:"USD"},{default:e(()=>[a("$")]),_:1}),o(i,{value:"EUR"},{default:e(()=>[a("\u20AC")]),_:1}),o(i,{value:"GBP"},{default:e(()=>[a("\xA3")]),_:1}),o(i,{value:"CNY"},{default:e(()=>[a("\xA5")]),_:1})]),_:1},8,["value"])]),_:1},8,["value"]),o(u,{value:t.value3,"onUpdate:value":s[4]||(s[4]=I=>t.value3=I)},{addonAfter:e(()=>[o(p)]),_:1},8,["value"]),o(u,{value:t.value4,"onUpdate:value":s[5]||(s[5]=I=>t.value4=I)},{addonAfter:e(()=>[o(r,{placeholder:"cascader",style:{width:"150px"}})]),_:1},8,["value"])]),_:1})]),htmlCode:e(()=>[yn]),jsVersionHtml:e(()=>[wn]),_:1},8,["jsfiddle"])}const Vn=v(fn,[["render",Gn]]),Bn=Z({setup(){return{value:k(3)}}}),Yn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-input-number")]),a(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("inputNumber"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":bordered"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":min"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("1"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":max"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("10"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" value "),n("span",{class:"token operator"},"="),a(" ref"),n("span",{class:"token operator"},"<"),a("number"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),Hn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-input-number")]),a(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("inputNumber"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":bordered"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":min"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("1"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":max"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("10"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function xn(t,s,d,g,A,b){const u=c("a-input-number"),i=c("demo-box");return m(),W(i,{jsfiddle:{us:"No border.",cn:"\u6CA1\u6709\u8FB9\u6846\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u6CA1\u6709\u8FB9\u6846\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>No border.</p>
`,order:6,title:{"zh-CN":"\u65E0\u8FB9\u6846","en-US":"Borderless"},relativePath:"components/input-number/demo/borderless.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS1pbnB1dC1udW1iZXIgaWQ9ImlucHV0TnVtYmVyIiB2LW1vZGVsOnZhbHVlPSJ2YWx1ZSIgOmJvcmRlcmVkPSJmYWxzZSIgOm1pbj0iMSIgOm1heD0iMTAiIC8+CiAgPC9kaXY+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCB2YWx1ZSA9IHJlZjxudW1iZXI+KDMpOwoKICAgIHJldHVybiB7CiAgICAgIHZhbHVlLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS1pbnB1dC1udW1iZXIgaWQ9ImlucHV0TnVtYmVyIiB2LW1vZGVsOnZhbHVlPSJ2YWx1ZSIgOmJvcmRlcmVkPSJmYWxzZSIgOm1pbj0iMSIgOm1heD0iMTAiIC8+CiAgPC9kaXY+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IHZhbHVlID0gcmVmKDMpOwogICAgcmV0dXJuIHsKICAgICAgdmFsdWUsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4=",isdemo:!1}},{default:e(()=>[n("div",null,[o(u,{id:"inputNumber",value:t.value,"onUpdate:value":s[0]||(s[0]=l=>t.value=l),bordered:!1,min:1,max:10},null,8,["value"])])]),htmlCode:e(()=>[Yn]),jsVersionHtml:e(()=>[Hn]),_:1},8,["jsfiddle"])}const Sn=v(Bn,[["render",xn]]),Pn=Z({setup(){return{value:k(3),keyboard:k(!0)}}}),Jn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-input-number")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":keyboard"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("keyboard"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":min"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("1"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":max"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("10"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-checkbox")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("checked")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("keyboard"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Toggle keyboard"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-checkbox")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" value "),n("span",{class:"token operator"},"="),a(" ref"),n("span",{class:"token operator"},"<"),a("number"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"keyboard"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),Xn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-input-number")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":keyboard"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("keyboard"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":min"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("1"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":max"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("10"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-checkbox")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("checked")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("keyboard"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Toggle keyboard"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-checkbox")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"keyboard"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function Fn(t,s,d,g,A,b){const u=c("a-input-number"),i=c("a-checkbox"),l=c("a-space"),p=c("demo-box");return m(),W(p,{jsfiddle:{us:"Control keyboard behavior by `keyboard`.",cn:"\u4F7F\u7528 `keyboard` \u5C5E\u6027\u53EF\u4EE5\u63A7\u5236\u952E\u76D8\u884C\u4E3A\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u4F7F\u7528 <code>keyboard</code> \u5C5E\u6027\u53EF\u4EE5\u63A7\u5236\u952E\u76D8\u884C\u4E3A\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Control keyboard behavior by <code>keyboard</code>.</p>
`,order:5,title:{"zh-CN":"\u952E\u76D8\u884C\u4E3A","en-US":"Keyboard"},relativePath:"components/input-number/demo/keyboard.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlPgogICAgPGEtaW5wdXQtbnVtYmVyIHYtbW9kZWw6dmFsdWU9InZhbHVlIiA6a2V5Ym9hcmQ9ImtleWJvYXJkIiA6bWluPSIxIiA6bWF4PSIxMCIgLz4KICAgIDxhLWNoZWNrYm94IHYtbW9kZWw6Y2hlY2tlZD0ia2V5Ym9hcmQiPlRvZ2dsZSBrZXlib2FyZDwvYS1jaGVja2JveD4KICA8L2Etc3BhY2U+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCB2YWx1ZSA9IHJlZjxudW1iZXI+KDMpOwoKICAgIHJldHVybiB7CiAgICAgIHZhbHVlLAogICAgICBrZXlib2FyZDogcmVmKHRydWUpLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlPgogICAgPGEtaW5wdXQtbnVtYmVyIHYtbW9kZWw6dmFsdWU9InZhbHVlIiA6a2V5Ym9hcmQ9ImtleWJvYXJkIiA6bWluPSIxIiA6bWF4PSIxMCIgLz4KICAgIDxhLWNoZWNrYm94IHYtbW9kZWw6Y2hlY2tlZD0ia2V5Ym9hcmQiPlRvZ2dsZSBrZXlib2FyZDwvYS1jaGVja2JveD4KICA8L2Etc3BhY2U+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IHZhbHVlID0gcmVmKDMpOwogICAgcmV0dXJuIHsKICAgICAgdmFsdWUsCiAgICAgIGtleWJvYXJkOiByZWYodHJ1ZSksCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4=",isdemo:!1}},{default:e(()=>[o(l,null,{default:e(()=>[o(u,{value:t.value,"onUpdate:value":s[0]||(s[0]=r=>t.value=r),keyboard:t.keyboard,min:1,max:10},null,8,["value","keyboard"]),o(i,{checked:t.keyboard,"onUpdate:checked":s[1]||(s[1]=r=>t.keyboard=r)},{default:e(()=>[a("Toggle keyboard")]),_:1},8,["checked"])]),_:1})]),htmlCode:e(()=>[Jn]),jsVersionHtml:e(()=>[Xn]),_:1},8,["jsfiddle"])}const Dn=v(Pn,[["render",Fn]]),Rn=Z({setup(){return{value:k(99)}}}),Kn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-input-number")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":min"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("1"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":max"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("10"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-button")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("primary"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value = 99"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Reset"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-button")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" value "),n("span",{class:"token operator"},"="),a(" ref"),n("span",{class:"token operator"},"<"),a("number"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"99"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),Ln=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-input-number")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":min"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("1"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":max"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("10"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-button")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("primary"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value = 99"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Reset"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-button")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"99"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function Nn(t,s,d,g,A,b){const u=c("a-input-number"),i=c("a-button"),l=c("a-space"),p=c("demo-box");return m(),W(p,{jsfiddle:{us:"Show warning style when `value` is out of range by control.",cn:"\u5F53\u901A\u8FC7\u53D7\u63A7\u5C06 `value` \u8D85\u51FA\u8FB9\u754C\u65F6\uFF0C\u63D0\u4F9B\u8B66\u544A\u6837\u5F0F\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u5F53\u901A\u8FC7\u53D7\u63A7\u5C06 <code>value</code> \u8D85\u51FA\u8FB9\u754C\u65F6\uFF0C\u63D0\u4F9B\u8B66\u544A\u6837\u5F0F\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Show warning style when <code>value</code> is out of range by control.</p>
`,order:6,title:{"zh-CN":"\u8D85\u51FA\u8FB9\u754C","en-US":"Out of range"},relativePath:"components/input-number/demo/out-of-range.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlPgogICAgPGEtaW5wdXQtbnVtYmVyIHYtbW9kZWw6dmFsdWU9InZhbHVlIiA6bWluPSIxIiA6bWF4PSIxMCIgLz4KICAgIDxhLWJ1dHRvbiB0eXBlPSJwcmltYXJ5IiBAY2xpY2s9InZhbHVlID0gOTkiPlJlc2V0PC9hLWJ1dHRvbj4KICA8L2Etc3BhY2U+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCB2YWx1ZSA9IHJlZjxudW1iZXI+KDk5KTsKCiAgICByZXR1cm4gewogICAgICB2YWx1ZSwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlPgogICAgPGEtaW5wdXQtbnVtYmVyIHYtbW9kZWw6dmFsdWU9InZhbHVlIiA6bWluPSIxIiA6bWF4PSIxMCIgLz4KICAgIDxhLWJ1dHRvbiB0eXBlPSJwcmltYXJ5IiBAY2xpY2s9InZhbHVlID0gOTkiPlJlc2V0PC9hLWJ1dHRvbj4KICA8L2Etc3BhY2U+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IHZhbHVlID0gcmVmKDk5KTsKICAgIHJldHVybiB7CiAgICAgIHZhbHVlLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+",isdemo:!1}},{default:e(()=>[o(l,null,{default:e(()=>[o(u,{value:t.value,"onUpdate:value":s[0]||(s[0]=r=>t.value=r),min:1,max:10},null,8,["value"]),o(i,{type:"primary",onClick:s[1]||(s[1]=r=>t.value=99)},{default:e(()=>[a("Reset")]),_:1})]),_:1})]),htmlCode:e(()=>[Kn]),jsVersionHtml:e(()=>[Ln]),_:1},8,["jsfiddle"])}const jn=v(Rn,[["render",Nn]]),zn=Z({components:{UserOutlined:J},setup(){const t=k(1),s=k(2),d=k(3);return{value1:t,value2:s,value3:d}}}),En=n("br",null,null,-1),Un=n("br",null,null,-1),_n=n("br",null,null,-1),Tn=n("br",null,null,-1),Qn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-input-number")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value1"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"prefix"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\uFFE5"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 100%")]),n("span",{class:"token punctuation"},'"')])]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-input-number")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value2"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"prefix"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\uFFE5"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 100%")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#addonBefore"),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("UserOutlined")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-input-number")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-input-number")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value3"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"prefix"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\uFFE5"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"disabled"),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 100%")]),n("span",{class:"token punctuation"},'"')])]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" UserOutlined "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(" UserOutlined "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" value1 "),n("span",{class:"token operator"},"="),a(" ref"),n("span",{class:"token operator"},"<"),a("number"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" value2 "),n("span",{class:"token operator"},"="),a(" ref"),n("span",{class:"token operator"},"<"),a("number"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" value3 "),n("span",{class:"token operator"},"="),a(" ref"),n("span",{class:"token operator"},"<"),a("number"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value1`),n("span",{class:"token punctuation"},","),a(`
      value2`),n("span",{class:"token punctuation"},","),a(`
      value3`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),Mn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-input-number")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value1"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"prefix"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\uFFE5"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 100%")]),n("span",{class:"token punctuation"},'"')])]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-input-number")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value2"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"prefix"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\uFFE5"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 100%")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#addonBefore"),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("UserOutlined")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-input-number")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-input-number")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value3"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"prefix"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\uFFE5"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"disabled"),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 100%")]),n("span",{class:"token punctuation"},'"')])]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" UserOutlined "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    UserOutlined`),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" value1 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" value2 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" value3 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value1`),n("span",{class:"token punctuation"},","),a(`
      value2`),n("span",{class:"token punctuation"},","),a(`
      value3`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function qn(t,s,d,g,A,b){const u=c("a-input-number"),i=c("UserOutlined"),l=c("demo-box");return m(),W(l,{jsfiddle:{us:"Add a prefix inside input.",cn:"\u5728\u8F93\u5165\u6846\u4E0A\u6DFB\u52A0\u524D\u7F00\u56FE\u6807\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u5728\u8F93\u5165\u6846\u4E0A\u6DFB\u52A0\u524D\u7F00\u56FE\u6807\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Add a prefix inside input.</p>
`,order:7,title:{"zh-CN":"\u524D\u7F00","en-US":"Prefix"},relativePath:"components/input-number/demo/prefix.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWlucHV0LW51bWJlciB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTEiIHByZWZpeD0i77+lIiBzdHlsZT0id2lkdGg6IDEwMCUiIC8+CiAgPGJyIC8+CiAgPGJyIC8+CiAgPGEtaW5wdXQtbnVtYmVyIHYtbW9kZWw6dmFsdWU9InZhbHVlMiIgcHJlZml4PSLvv6UiIHN0eWxlPSJ3aWR0aDogMTAwJSI+CiAgICA8dGVtcGxhdGUgI2FkZG9uQmVmb3JlPgogICAgICA8VXNlck91dGxpbmVkIC8+CiAgICA8L3RlbXBsYXRlPgogIDwvYS1pbnB1dC1udW1iZXI+CiAgPGJyIC8+CiAgPGJyIC8+CiAgPGEtaW5wdXQtbnVtYmVyIHYtbW9kZWw6dmFsdWU9InZhbHVlMyIgcHJlZml4PSLvv6UiIGRpc2FibGVkIHN0eWxlPSJ3aWR0aDogMTAwJSIgLz4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKaW1wb3J0IHsgVXNlck91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMtdnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBjb21wb25lbnRzOiB7IFVzZXJPdXRsaW5lZCB9LAogIHNldHVwKCkgewogICAgY29uc3QgdmFsdWUxID0gcmVmPG51bWJlcj4oMSk7CiAgICBjb25zdCB2YWx1ZTIgPSByZWY8bnVtYmVyPigyKTsKICAgIGNvbnN0IHZhbHVlMyA9IHJlZjxudW1iZXI+KDMpOwoKICAgIHJldHVybiB7CiAgICAgIHZhbHVlMSwKICAgICAgdmFsdWUyLAogICAgICB2YWx1ZTMsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWlucHV0LW51bWJlciB2LW1vZGVsOnZhbHVlPSJ2YWx1ZTEiIHByZWZpeD0i77+lIiBzdHlsZT0id2lkdGg6IDEwMCUiIC8+CiAgPGJyIC8+CiAgPGJyIC8+CiAgPGEtaW5wdXQtbnVtYmVyIHYtbW9kZWw6dmFsdWU9InZhbHVlMiIgcHJlZml4PSLvv6UiIHN0eWxlPSJ3aWR0aDogMTAwJSI+CiAgICA8dGVtcGxhdGUgI2FkZG9uQmVmb3JlPgogICAgICA8VXNlck91dGxpbmVkIC8+CiAgICA8L3RlbXBsYXRlPgogIDwvYS1pbnB1dC1udW1iZXI+CiAgPGJyIC8+CiAgPGJyIC8+CiAgPGEtaW5wdXQtbnVtYmVyIHYtbW9kZWw6dmFsdWU9InZhbHVlMyIgcHJlZml4PSLvv6UiIGRpc2FibGVkIHN0eWxlPSJ3aWR0aDogMTAwJSIgLz4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwppbXBvcnQgeyBVc2VyT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy12dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIGNvbXBvbmVudHM6IHsKICAgIFVzZXJPdXRsaW5lZCwKICB9LAogIHNldHVwKCkgewogICAgY29uc3QgdmFsdWUxID0gcmVmKDEpOwogICAgY29uc3QgdmFsdWUyID0gcmVmKDIpOwogICAgY29uc3QgdmFsdWUzID0gcmVmKDMpOwogICAgcmV0dXJuIHsKICAgICAgdmFsdWUxLAogICAgICB2YWx1ZTIsCiAgICAgIHZhbHVlMywKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0Pg==",isdemo:!1}},{default:e(()=>[o(u,{value:t.value1,"onUpdate:value":s[0]||(s[0]=p=>t.value1=p),prefix:"\uFFE5",style:{width:"100%"}},null,8,["value"]),En,Un,o(u,{value:t.value2,"onUpdate:value":s[1]||(s[1]=p=>t.value2=p),prefix:"\uFFE5",style:{width:"100%"}},{addonBefore:e(()=>[o(i)]),_:1},8,["value"]),_n,Tn,o(u,{value:t.value3,"onUpdate:value":s[2]||(s[2]=p=>t.value3=p),prefix:"\uFFE5",disabled:"",style:{width:"100%"}},null,8,["value"])]),htmlCode:e(()=>[Qn]),jsVersionHtml:e(()=>[Mn]),_:1},8,["jsfiddle"])}const On=v(zn,[["render",qn]]),$n={pageData:{title:"InputNumber",description:"",frontmatter:{category:"Components",type:"\u6570\u636E\u5F55\u5165",title:"InputNumber",subtitle:"\u6570\u5B57\u8F93\u5165\u6846",cover:"https://gw.alipayobjects.com/zos/alicdn/XOS8qZ0kU/InputNumber.svg"},headers:[{level:2,title:"\u4F55\u65F6\u4F7F\u7528",slug:"\u4F55\u65F6\u4F7F\u7528",content:"\u5F53\u9700\u8981\u83B7\u53D6\u6807\u51C6\u6570\u503C\u65F6\u3002"},{level:2,title:"API",slug:"API",content:"\u5C5E\u6027\u5982\u4E0B"},{level:3,title:"\u4E8B\u4EF6",slug:"\u4E8B\u4EF6",content:""},{level:2,title:"\u65B9\u6CD5",slug:"\u65B9\u6CD5",content:""},{level:2,title:"FAQ",slug:"FAQ",content:"\u4E3A\u4F55\u53D7\u63A7\u6A21\u5F0F\u4E0B\uFF0C`value` \u53EF\u4EE5\u8D85\u51FA `min` \u548C `max` \u8303\u56F4\uFF1F"},{level:3,title:"\u4E3A\u4F55\u53D7\u63A7\u6A21\u5F0F\u4E0B\uFF0Cvalue \u53EF\u4EE5\u8D85\u51FA min \u548C max \u8303\u56F4\uFF1F",slug:"\u4E3A\u4F55\u53D7\u63A7\u6A21\u5F0F\u4E0B\uFF0Cvalue-\u53EF\u4EE5\u8D85\u51FA-min-\u548C-max-\u8303\u56F4\uFF1F",content:"\u5728\u53D7\u63A7\u6A21\u5F0F\u4E0B\uFF0C\u5F00\u53D1\u8005\u53EF\u80FD\u81EA\u884C\u5B58\u50A8\u76F8\u5173\u6570\u636E\u3002\u5982\u679C\u7EC4\u4EF6\u5C06\u6570\u636E\u7EA6\u675F\u56DE\u8303\u56F4\u5185\uFF0C\u4F1A\u5BFC\u81F4\u5C55\u793A\u6570\u636E\u4E0E\u5B9E\u9645\u5B58\u50A8\u6570\u636E\u4E0D\u4E00\u81F4\u7684\u60C5\u51B5\u3002\u8FD9\u4F7F\u5F97\u4E00\u4E9B\u5982\u8868\u5355\u573A\u666F\u5B58\u5728\u6F5C\u5728\u7684\u6570\u636E\u95EE\u9898\u3002"},{level:3,title:"\u4E3A\u4F55\u52A8\u6001\u4FEE\u6539 min \u548C max \u8BA9 value \u8D85\u51FA\u8303\u56F4\u4E0D\u4F1A\u89E6\u53D1 change \u4E8B\u4EF6\uFF1F",slug:"\u4E3A\u4F55\u52A8\u6001\u4FEE\u6539-min-\u548C-max-\u8BA9-value-\u8D85\u51FA\u8303\u56F4\u4E0D\u4F1A\u89E6\u53D1-change-\u4E8B\u4EF6\uFF1F",content:"`change` \u4E8B\u4EF6\u4E3A\u7528\u6237\u89E6\u53D1\u4E8B\u4EF6\uFF0C\u81EA\u884C\u89E6\u53D1\u4F1A\u5BFC\u81F4\u8868\u5355\u5E93\u8BEF\u4EE5\u4E3A\u53D8\u66F4\u6765\u81EA\u7528\u6237\u64CD\u4F5C\u3002\u6211\u4EEC\u4EE5\u9519\u8BEF\u6837\u5F0F\u5C55\u793A\u8D85\u51FA\u8303\u56F4\u7684\u6570\u503C\u3002"}],relativePath:"components/input-number/index.zh-CN.md",content:`
\u901A\u8FC7\u9F20\u6807\u6216\u952E\u76D8\uFF0C\u8F93\u5165\u8303\u56F4\u5185\u7684\u6570\u503C\u3002

## \u4F55\u65F6\u4F7F\u7528

\u5F53\u9700\u8981\u83B7\u53D6\u6807\u51C6\u6570\u503C\u65F6\u3002

## API

\u5C5E\u6027\u5982\u4E0B

| \u6210\u5458 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C | \u7248\u672C |
| --- | --- | --- | --- | --- |
| addonAfter | \u5E26\u6807\u7B7E\u7684 input\uFF0C\u8BBE\u7F6E\u540E\u7F6E\u6807\u7B7E | slot | - | 3.0 |
| addonBefore | \u5E26\u6807\u7B7E\u7684 input\uFF0C\u8BBE\u7F6E\u524D\u7F6E\u6807\u7B7E | slot | - | 3.0 |
| autofocus | \u81EA\u52A8\u83B7\u53D6\u7126\u70B9 | boolean | false |  |
| bordered | \u662F\u5426\u6709\u8FB9\u6846 | boolean | true | 3.0 |
| controls | \u662F\u5426\u663E\u793A\u589E\u51CF\u6309\u94AE | boolean | true | 3.0 |
| decimalSeparator | \u5C0F\u6570\u70B9 | string | - |  |
| defaultValue | \u521D\u59CB\u503C | number |  |  |
| disabled | \u7981\u7528 | boolean | false |  |
| formatter | \u6307\u5B9A\u8F93\u5165\u6846\u5C55\u793A\u503C\u7684\u683C\u5F0F | function(value: number \\| string, info: { userTyping: boolean, input: string }): string | - | info: 3.0 |
| keyboard | \u662F\u5426\u542F\u7528\u952E\u76D8\u5FEB\u6377\u884C\u4E3A | boolean | true | 3.0 |
| max | \u6700\u5927\u503C | number | Infinity |  |
| min | \u6700\u5C0F\u503C | number | -Infinity |  |
| parser | \u6307\u5B9A\u4ECE formatter \u91CC\u8F6C\u6362\u56DE\u6570\u5B57\u7684\u65B9\u5F0F\uFF0C\u548C formatter \u642D\u914D\u4F7F\u7528 | function( string): number | - |  |
| precision | \u6570\u503C\u7CBE\u5EA6 | number | - |  |
| prefix | \u5E26\u6709\u524D\u7F00\u56FE\u6807\u7684 input | slot | - | 3.0 |
| size | \u8F93\u5165\u6846\u5927\u5C0F | string | \u65E0 |  |
| step | \u6BCF\u6B21\u6539\u53D8\u6B65\u6570\uFF0C\u53EF\u4EE5\u4E3A\u5C0F\u6570 | number\\|string | 1 |  |
| stringMode | \u5B57\u7B26\u503C\u6A21\u5F0F\uFF0C\u5F00\u542F\u540E\u652F\u6301\u9AD8\u7CBE\u5EA6\u5C0F\u6570\u3002\u540C\u65F6 \`change\` \u4E8B\u4EF6\u5C06\u8FD4\u56DE string \u7C7B\u578B | boolean | false | 3.0 |
| value(v-model) | \u5F53\u524D\u503C | number |  |  |

### \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D\u79F0 | \u8BF4\u660E | \u56DE\u8C03\u53C2\u6570 | \u7248\u672C |
| --- | --- | --- | --- |
| change | \u53D8\u5316\u56DE\u8C03 | Function(value: number \\| string) |  |
| pressEnter | \u6309\u4E0B\u56DE\u8F66\u7684\u56DE\u8C03 | function(e) |  |
| step | \u70B9\u51FB\u4E0A\u4E0B\u7BAD\u5934\u7684\u56DE\u8C03 | (value: number, info: { offset: number, type: &#39;up&#39; \\| &#39;down&#39; }) =&gt; void | 3.0 |

## \u65B9\u6CD5

| \u540D\u79F0    | \u63CF\u8FF0     |
| ------- | -------- |
| blur()  | \u79FB\u9664\u7126\u70B9 |
| focus() | \u83B7\u53D6\u7126\u70B9 |

## FAQ

### \u4E3A\u4F55\u53D7\u63A7\u6A21\u5F0F\u4E0B\uFF0C\`value\` \u53EF\u4EE5\u8D85\u51FA \`min\` \u548C \`max\` \u8303\u56F4\uFF1F

\u5728\u53D7\u63A7\u6A21\u5F0F\u4E0B\uFF0C\u5F00\u53D1\u8005\u53EF\u80FD\u81EA\u884C\u5B58\u50A8\u76F8\u5173\u6570\u636E\u3002\u5982\u679C\u7EC4\u4EF6\u5C06\u6570\u636E\u7EA6\u675F\u56DE\u8303\u56F4\u5185\uFF0C\u4F1A\u5BFC\u81F4\u5C55\u793A\u6570\u636E\u4E0E\u5B9E\u9645\u5B58\u50A8\u6570\u636E\u4E0D\u4E00\u81F4\u7684\u60C5\u51B5\u3002\u8FD9\u4F7F\u5F97\u4E00\u4E9B\u5982\u8868\u5355\u573A\u666F\u5B58\u5728\u6F5C\u5728\u7684\u6570\u636E\u95EE\u9898\u3002

### \u4E3A\u4F55\u52A8\u6001\u4FEE\u6539 \`min\` \u548C \`max\` \u8BA9 \`value\` \u8D85\u51FA\u8303\u56F4\u4E0D\u4F1A\u89E6\u53D1 \`change\` \u4E8B\u4EF6\uFF1F

\`change\` \u4E8B\u4EF6\u4E3A\u7528\u6237\u89E6\u53D1\u4E8B\u4EF6\uFF0C\u81EA\u884C\u89E6\u53D1\u4F1A\u5BFC\u81F4\u8868\u5355\u5E93\u8BEF\u4EE5\u4E3A\u53D8\u66F4\u6765\u81EA\u7528\u6237\u64CD\u4F5C\u3002\u6211\u4EEC\u4EE5\u9519\u8BEF\u6837\u5F0F\u5C55\u793A\u8D85\u51FA\u8303\u56F4\u7684\u6570\u503C\u3002
`,html:`<p>\u901A\u8FC7\u9F20\u6807\u6216\u952E\u76D8\uFF0C\u8F93\u5165\u8303\u56F4\u5185\u7684\u6570\u503C\u3002</p>
<h2 id="\u4F55\u65F6\u4F7F\u7528">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u5F53\u9700\u8981\u83B7\u53D6\u6807\u51C6\u6570\u503C\u65F6\u3002</p>
<h2 id="API">API <a class="header-anchor" href="#API">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u5C5E\u6027\u5982\u4E0B</p>
<table>
<thead>
<tr>
<th>\u6210\u5458</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
<th>\u7248\u672C</th>
</tr>
</thead>
<tbody>
<tr>
<td>addonAfter</td>
<td>\u5E26\u6807\u7B7E\u7684 input\uFF0C\u8BBE\u7F6E\u540E\u7F6E\u6807\u7B7E</td>
<td>slot</td>
<td>-</td>
<td>3.0</td>
</tr>
<tr>
<td>addonBefore</td>
<td>\u5E26\u6807\u7B7E\u7684 input\uFF0C\u8BBE\u7F6E\u524D\u7F6E\u6807\u7B7E</td>
<td>slot</td>
<td>-</td>
<td>3.0</td>
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
<td>3.0</td>
</tr>
<tr>
<td>controls</td>
<td>\u662F\u5426\u663E\u793A\u589E\u51CF\u6309\u94AE</td>
<td>boolean</td>
<td>true</td>
<td>3.0</td>
</tr>
<tr>
<td>decimalSeparator</td>
<td>\u5C0F\u6570\u70B9</td>
<td>string</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>defaultValue</td>
<td>\u521D\u59CB\u503C</td>
<td>number</td>
<td></td>
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
<td>formatter</td>
<td>\u6307\u5B9A\u8F93\u5165\u6846\u5C55\u793A\u503C\u7684\u683C\u5F0F</td>
<td>function(value: number | string, info: { userTyping: boolean, input: string }): string</td>
<td>-</td>
<td>info: 3.0</td>
</tr>
<tr>
<td>keyboard</td>
<td>\u662F\u5426\u542F\u7528\u952E\u76D8\u5FEB\u6377\u884C\u4E3A</td>
<td>boolean</td>
<td>true</td>
<td>3.0</td>
</tr>
<tr>
<td>max</td>
<td>\u6700\u5927\u503C</td>
<td>number</td>
<td>Infinity</td>
<td></td>
</tr>
<tr>
<td>min</td>
<td>\u6700\u5C0F\u503C</td>
<td>number</td>
<td>-Infinity</td>
<td></td>
</tr>
<tr>
<td>parser</td>
<td>\u6307\u5B9A\u4ECE formatter \u91CC\u8F6C\u6362\u56DE\u6570\u5B57\u7684\u65B9\u5F0F\uFF0C\u548C formatter \u642D\u914D\u4F7F\u7528</td>
<td>function( string): number</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>precision</td>
<td>\u6570\u503C\u7CBE\u5EA6</td>
<td>number</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>prefix</td>
<td>\u5E26\u6709\u524D\u7F00\u56FE\u6807\u7684 input</td>
<td>slot</td>
<td>-</td>
<td>3.0</td>
</tr>
<tr>
<td>size</td>
<td>\u8F93\u5165\u6846\u5927\u5C0F</td>
<td>string</td>
<td>\u65E0</td>
<td></td>
</tr>
<tr>
<td>step</td>
<td>\u6BCF\u6B21\u6539\u53D8\u6B65\u6570\uFF0C\u53EF\u4EE5\u4E3A\u5C0F\u6570</td>
<td>number|string</td>
<td>1</td>
<td></td>
</tr>
<tr>
<td>stringMode</td>
<td>\u5B57\u7B26\u503C\u6A21\u5F0F\uFF0C\u5F00\u542F\u540E\u652F\u6301\u9AD8\u7CBE\u5EA6\u5C0F\u6570\u3002\u540C\u65F6 <code>change</code> \u4E8B\u4EF6\u5C06\u8FD4\u56DE string \u7C7B\u578B</td>
<td>boolean</td>
<td>false</td>
<td>3.0</td>
</tr>
<tr>
<td>value(v-model)</td>
<td>\u5F53\u524D\u503C</td>
<td>number</td>
<td></td>
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
<td>\u53D8\u5316\u56DE\u8C03</td>
<td>Function(value: number | string)</td>
<td></td>
</tr>
<tr>
<td>pressEnter</td>
<td>\u6309\u4E0B\u56DE\u8F66\u7684\u56DE\u8C03</td>
<td>function(e)</td>
<td></td>
</tr>
<tr>
<td>step</td>
<td>\u70B9\u51FB\u4E0A\u4E0B\u7BAD\u5934\u7684\u56DE\u8C03</td>
<td>(value: number, info: { offset: number, type: 'up' | 'down' }) =&gt; void</td>
<td>3.0</td>
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
<h2 id="FAQ">FAQ <a class="header-anchor" href="#FAQ">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<h3 id="\u4E3A\u4F55\u53D7\u63A7\u6A21\u5F0F\u4E0B\uFF0Cvalue-\u53EF\u4EE5\u8D85\u51FA-min-\u548C-max-\u8303\u56F4\uFF1F">\u4E3A\u4F55\u53D7\u63A7\u6A21\u5F0F\u4E0B\uFF0C<code>value</code> \u53EF\u4EE5\u8D85\u51FA <code>min</code> \u548C <code>max</code> \u8303\u56F4\uFF1F <a class="header-anchor" href="#\u4E3A\u4F55\u53D7\u63A7\u6A21\u5F0F\u4E0B\uFF0Cvalue-\u53EF\u4EE5\u8D85\u51FA-min-\u548C-max-\u8303\u56F4\uFF1F">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>\u5728\u53D7\u63A7\u6A21\u5F0F\u4E0B\uFF0C\u5F00\u53D1\u8005\u53EF\u80FD\u81EA\u884C\u5B58\u50A8\u76F8\u5173\u6570\u636E\u3002\u5982\u679C\u7EC4\u4EF6\u5C06\u6570\u636E\u7EA6\u675F\u56DE\u8303\u56F4\u5185\uFF0C\u4F1A\u5BFC\u81F4\u5C55\u793A\u6570\u636E\u4E0E\u5B9E\u9645\u5B58\u50A8\u6570\u636E\u4E0D\u4E00\u81F4\u7684\u60C5\u51B5\u3002\u8FD9\u4F7F\u5F97\u4E00\u4E9B\u5982\u8868\u5355\u573A\u666F\u5B58\u5728\u6F5C\u5728\u7684\u6570\u636E\u95EE\u9898\u3002</p>
<h3 id="\u4E3A\u4F55\u52A8\u6001\u4FEE\u6539-min-\u548C-max-\u8BA9-value-\u8D85\u51FA\u8303\u56F4\u4E0D\u4F1A\u89E6\u53D1-change-\u4E8B\u4EF6\uFF1F">\u4E3A\u4F55\u52A8\u6001\u4FEE\u6539 <code>min</code> \u548C <code>max</code> \u8BA9 <code>value</code> \u8D85\u51FA\u8303\u56F4\u4E0D\u4F1A\u89E6\u53D1 <code>change</code> \u4E8B\u4EF6\uFF1F <a class="header-anchor" href="#\u4E3A\u4F55\u52A8\u6001\u4FEE\u6539-min-\u548C-max-\u8BA9-value-\u8D85\u51FA\u8303\u56F4\u4E0D\u4F1A\u89E6\u53D1-change-\u4E8B\u4EF6\uFF1F">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p><code>change</code> \u4E8B\u4EF6\u4E3A\u7528\u6237\u89E6\u53D1\u4E8B\u4EF6\uFF0C\u81EA\u884C\u89E6\u53D1\u4F1A\u5BFC\u81F4\u8868\u5355\u5E93\u8BEF\u4EE5\u4E3A\u53D8\u66F4\u6765\u81EA\u7528\u6237\u64CD\u4F5C\u3002\u6211\u4EEC\u4EE5\u9519\u8BEF\u6837\u5F0F\u5C55\u793A\u8D85\u51FA\u8303\u56F4\u7684\u6570\u503C\u3002</p>
`,lastUpdated:1669791391985}},na={class:"markdown"},aa=P('<p>\u901A\u8FC7\u9F20\u6807\u6216\u952E\u76D8\uFF0C\u8F93\u5165\u8303\u56F4\u5185\u7684\u6570\u503C\u3002</p><h2 id="\u4F55\u65F6\u4F7F\u7528">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528"><span aria-hidden="true" class="anchor">#</span></a></h2><p>\u5F53\u9700\u8981\u83B7\u53D6\u6807\u51C6\u6570\u503C\u65F6\u3002</p><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><p>\u5C5E\u6027\u5982\u4E0B</p><table><thead><tr><th>\u6210\u5458</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>addonAfter</td><td>\u5E26\u6807\u7B7E\u7684 input\uFF0C\u8BBE\u7F6E\u540E\u7F6E\u6807\u7B7E</td><td>slot</td><td>-</td><td>3.0</td></tr><tr><td>addonBefore</td><td>\u5E26\u6807\u7B7E\u7684 input\uFF0C\u8BBE\u7F6E\u524D\u7F6E\u6807\u7B7E</td><td>slot</td><td>-</td><td>3.0</td></tr><tr><td>autofocus</td><td>\u81EA\u52A8\u83B7\u53D6\u7126\u70B9</td><td>boolean</td><td>false</td><td></td></tr><tr><td>bordered</td><td>\u662F\u5426\u6709\u8FB9\u6846</td><td>boolean</td><td>true</td><td>3.0</td></tr><tr><td>controls</td><td>\u662F\u5426\u663E\u793A\u589E\u51CF\u6309\u94AE</td><td>boolean</td><td>true</td><td>3.0</td></tr><tr><td>decimalSeparator</td><td>\u5C0F\u6570\u70B9</td><td>string</td><td>-</td><td></td></tr><tr><td>defaultValue</td><td>\u521D\u59CB\u503C</td><td>number</td><td></td><td></td></tr><tr><td>disabled</td><td>\u7981\u7528</td><td>boolean</td><td>false</td><td></td></tr><tr><td>formatter</td><td>\u6307\u5B9A\u8F93\u5165\u6846\u5C55\u793A\u503C\u7684\u683C\u5F0F</td><td>function(value: number | string, info: { userTyping: boolean, input: string }): string</td><td>-</td><td>info: 3.0</td></tr><tr><td>keyboard</td><td>\u662F\u5426\u542F\u7528\u952E\u76D8\u5FEB\u6377\u884C\u4E3A</td><td>boolean</td><td>true</td><td>3.0</td></tr><tr><td>max</td><td>\u6700\u5927\u503C</td><td>number</td><td>Infinity</td><td></td></tr><tr><td>min</td><td>\u6700\u5C0F\u503C</td><td>number</td><td>-Infinity</td><td></td></tr><tr><td>parser</td><td>\u6307\u5B9A\u4ECE formatter \u91CC\u8F6C\u6362\u56DE\u6570\u5B57\u7684\u65B9\u5F0F\uFF0C\u548C formatter \u642D\u914D\u4F7F\u7528</td><td>function( string): number</td><td>-</td><td></td></tr><tr><td>precision</td><td>\u6570\u503C\u7CBE\u5EA6</td><td>number</td><td>-</td><td></td></tr><tr><td>prefix</td><td>\u5E26\u6709\u524D\u7F00\u56FE\u6807\u7684 input</td><td>slot</td><td>-</td><td>3.0</td></tr><tr><td>size</td><td>\u8F93\u5165\u6846\u5927\u5C0F</td><td>string</td><td>\u65E0</td><td></td></tr><tr><td>step</td><td>\u6BCF\u6B21\u6539\u53D8\u6B65\u6570\uFF0C\u53EF\u4EE5\u4E3A\u5C0F\u6570</td><td>number|string</td><td>1</td><td></td></tr><tr><td>stringMode</td><td>\u5B57\u7B26\u503C\u6A21\u5F0F\uFF0C\u5F00\u542F\u540E\u652F\u6301\u9AD8\u7CBE\u5EA6\u5C0F\u6570\u3002\u540C\u65F6 <code>change</code> \u4E8B\u4EF6\u5C06\u8FD4\u56DE string \u7C7B\u578B</td><td>boolean</td><td>false</td><td>3.0</td></tr><tr><td>value(v-model)</td><td>\u5F53\u524D\u503C</td><td>number</td><td></td><td></td></tr></tbody></table><h3 id="\u4E8B\u4EF6">\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8B\u4EF6"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>change</td><td>\u53D8\u5316\u56DE\u8C03</td><td>Function(value: number | string)</td><td></td></tr><tr><td>pressEnter</td><td>\u6309\u4E0B\u56DE\u8F66\u7684\u56DE\u8C03</td><td>function(e)</td><td></td></tr><tr><td>step</td><td>\u70B9\u51FB\u4E0A\u4E0B\u7BAD\u5934\u7684\u56DE\u8C03</td><td>(value: number, info: { offset: number, type: &#39;up&#39; | &#39;down&#39; }) =&gt; void</td><td>3.0</td></tr></tbody></table><h2 id="\u65B9\u6CD5">\u65B9\u6CD5 <a class="header-anchor" href="#\u65B9\u6CD5"><span aria-hidden="true" class="anchor">#</span></a></h2><table><thead><tr><th>\u540D\u79F0</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>blur()</td><td>\u79FB\u9664\u7126\u70B9</td></tr><tr><td>focus()</td><td>\u83B7\u53D6\u7126\u70B9</td></tr></tbody></table><h2 id="FAQ">FAQ <a class="header-anchor" href="#FAQ"><span aria-hidden="true" class="anchor">#</span></a></h2><h3 id="\u4E3A\u4F55\u53D7\u63A7\u6A21\u5F0F\u4E0B\uFF0Cvalue-\u53EF\u4EE5\u8D85\u51FA-min-\u548C-max-\u8303\u56F4\uFF1F">\u4E3A\u4F55\u53D7\u63A7\u6A21\u5F0F\u4E0B\uFF0C<code>value</code> \u53EF\u4EE5\u8D85\u51FA <code>min</code> \u548C <code>max</code> \u8303\u56F4\uFF1F <a class="header-anchor" href="#\u4E3A\u4F55\u53D7\u63A7\u6A21\u5F0F\u4E0B\uFF0Cvalue-\u53EF\u4EE5\u8D85\u51FA-min-\u548C-max-\u8303\u56F4\uFF1F"><span aria-hidden="true" class="anchor">#</span></a></h3><p>\u5728\u53D7\u63A7\u6A21\u5F0F\u4E0B\uFF0C\u5F00\u53D1\u8005\u53EF\u80FD\u81EA\u884C\u5B58\u50A8\u76F8\u5173\u6570\u636E\u3002\u5982\u679C\u7EC4\u4EF6\u5C06\u6570\u636E\u7EA6\u675F\u56DE\u8303\u56F4\u5185\uFF0C\u4F1A\u5BFC\u81F4\u5C55\u793A\u6570\u636E\u4E0E\u5B9E\u9645\u5B58\u50A8\u6570\u636E\u4E0D\u4E00\u81F4\u7684\u60C5\u51B5\u3002\u8FD9\u4F7F\u5F97\u4E00\u4E9B\u5982\u8868\u5355\u573A\u666F\u5B58\u5728\u6F5C\u5728\u7684\u6570\u636E\u95EE\u9898\u3002</p><h3 id="\u4E3A\u4F55\u52A8\u6001\u4FEE\u6539-min-\u548C-max-\u8BA9-value-\u8D85\u51FA\u8303\u56F4\u4E0D\u4F1A\u89E6\u53D1-change-\u4E8B\u4EF6\uFF1F">\u4E3A\u4F55\u52A8\u6001\u4FEE\u6539 <code>min</code> \u548C <code>max</code> \u8BA9 <code>value</code> \u8D85\u51FA\u8303\u56F4\u4E0D\u4F1A\u89E6\u53D1 <code>change</code> \u4E8B\u4EF6\uFF1F <a class="header-anchor" href="#\u4E3A\u4F55\u52A8\u6001\u4FEE\u6539-min-\u548C-max-\u8BA9-value-\u8D85\u51FA\u8303\u56F4\u4E0D\u4F1A\u89E6\u53D1-change-\u4E8B\u4EF6\uFF1F"><span aria-hidden="true" class="anchor">#</span></a></h3><p><code>change</code> \u4E8B\u4EF6\u4E3A\u7528\u6237\u89E6\u53D1\u4E8B\u4EF6\uFF0C\u81EA\u884C\u89E6\u53D1\u4F1A\u5BFC\u81F4\u8868\u5355\u5E93\u8BEF\u4EE5\u4E3A\u53D8\u66F4\u6765\u81EA\u7528\u6237\u64CD\u4F5C\u3002\u6211\u4EEC\u4EE5\u9519\u8BEF\u6837\u5F0F\u5C55\u793A\u8D85\u51FA\u8303\u56F4\u7684\u6570\u503C\u3002</p>',15),ta=[aa];function sa(t,s,d,g,A,b){return m(),V("article",na,ta)}const ea=v($n,[["render",sa]]),oa={pageData:{title:"InputNumber",description:"",frontmatter:{category:"Components",type:"Data Entry",title:"InputNumber",cover:"https://gw.alipayobjects.com/zos/alicdn/XOS8qZ0kU/InputNumber.svg"},headers:[{level:2,title:"When To Use",slug:"When-To-Use",content:"When a numeric value needs to be provided."},{level:2,title:"API",slug:"API",content:""},{level:3,title:"events",slug:"events",content:""},{level:2,title:"Methods",slug:"Methods",content:""},{level:2,title:"FAQ",slug:"FAQ",content:"Why `value` can exceed `min` or `max` in control?"},{level:3,title:"Why value can exceed min or max in control?",slug:"Why-value-can-exceed-min-or-max-in-control",content:"Developer handle data by their own in control. It will make data out of sync if InputNumber change display value. It also cause potential data issues when use in form."},{level:3,title:"Why dynamic change min or max which makes value out of range will not trigger change?",slug:"Why-dynamic-change-min-or-max-which-makes-value-out-of-range-will-not-trigger-change",content:"`change` is user trigger event. Auto trigger will makes form lib can not detect data modify source."}],relativePath:"components/input-number/index.en-US.md",content:`
Enter a number within certain range with the mouse or keyboard.

## When To Use

When a numeric value needs to be provided.

## API

| property | description | type | default |  |
| --- | --- | --- | --- | --- |
| addonAfter | The label text displayed after (on the right side of) the input field | slot | - | 3.0 |
| addonBefore | The label text displayed before (on the left side of) the input field | slot | - | 3.0 |
| autofocus | get focus when component mounted | boolean | false |  |
| bordered | Whether has border style | boolean | true | 3.0 |
| controls | Whether to show \`+-\` controls | boolean | true | 3.0 |
| decimalSeparator | decimal separator | string | - |  |
| defaultValue | initial value | number |  |  |
| disabled | disable the input | boolean | false |  |
| formatter | Specifies the format of the value presented | function(value: number \\| string, info: { userTyping: boolean, input: string }): string | - | info: 3.0 |
| keyboard | If enable keyboard behavior | boolean | true | 3.0 |
| max | max value | number | Infinity |  |
| min | min value | number | -Infinity |  |
| parser | Specifies the value extracted from formatter | function( string): number | - |  |
| precision | precision of input value | number | - |  |
| prefix | The prefix icon for the Input | slot | - | 3.0 |
| size | height of input box | string | - |  |
| step | The number to which the current value is increased or decreased. It can be an integer or decimal. | number\\|string | 1 |  |
| stringMode | Set value as string to support high precision decimals. Will return string value by \`change\` | boolean | false | 3.0 |
| value(v-model) | current value | number |  |  |

### events

| Events Name | Description | Arguments | Version |  |
| --- | --- | --- | --- | --- |
| change | The callback triggered when the value is changed. | function(value: number \\| string) |  |  |
| pressEnter | The callback function that is triggered when Enter key is pressed. | function(e) |  | 1.5.0 |
| step | The callback function that is triggered when click up or down buttons | (value: number, info: { offset: number, type: &#39;up&#39; \\| &#39;down&#39; }) =&gt; void | 3.0 |  |

## Methods

| Name    | Description  |
| ------- | ------------ |
| blur()  | remove focus |
| focus() | get focus    |

## FAQ

### Why \`value\` can exceed \`min\` or \`max\` in control?

Developer handle data by their own in control. It will make data out of sync if InputNumber change display value. It also cause potential data issues when use in form.

### Why dynamic change \`min\` or \`max\` which makes \`value\` out of range will not trigger \`change\`?

\`change\` is user trigger event. Auto trigger will makes form lib can not detect data modify source.
`,html:`<p>Enter a number within certain range with the mouse or keyboard.</p>
<h2 id="When-To-Use">When To Use <a class="header-anchor" href="#When-To-Use">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>When a numeric value needs to be provided.</p>
<h2 id="API">API <a class="header-anchor" href="#API">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<table>
<thead>
<tr>
<th>property</th>
<th>description</th>
<th>type</th>
<th>default</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>addonAfter</td>
<td>The label text displayed after (on the right side of) the input field</td>
<td>slot</td>
<td>-</td>
<td>3.0</td>
</tr>
<tr>
<td>addonBefore</td>
<td>The label text displayed before (on the left side of) the input field</td>
<td>slot</td>
<td>-</td>
<td>3.0</td>
</tr>
<tr>
<td>autofocus</td>
<td>get focus when component mounted</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>bordered</td>
<td>Whether has border style</td>
<td>boolean</td>
<td>true</td>
<td>3.0</td>
</tr>
<tr>
<td>controls</td>
<td>Whether to show <code>+-</code> controls</td>
<td>boolean</td>
<td>true</td>
<td>3.0</td>
</tr>
<tr>
<td>decimalSeparator</td>
<td>decimal separator</td>
<td>string</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>defaultValue</td>
<td>initial value</td>
<td>number</td>
<td></td>
<td></td>
</tr>
<tr>
<td>disabled</td>
<td>disable the input</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>formatter</td>
<td>Specifies the format of the value presented</td>
<td>function(value: number | string, info: { userTyping: boolean, input: string }): string</td>
<td>-</td>
<td>info: 3.0</td>
</tr>
<tr>
<td>keyboard</td>
<td>If enable keyboard behavior</td>
<td>boolean</td>
<td>true</td>
<td>3.0</td>
</tr>
<tr>
<td>max</td>
<td>max value</td>
<td>number</td>
<td>Infinity</td>
<td></td>
</tr>
<tr>
<td>min</td>
<td>min value</td>
<td>number</td>
<td>-Infinity</td>
<td></td>
</tr>
<tr>
<td>parser</td>
<td>Specifies the value extracted from formatter</td>
<td>function( string): number</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>precision</td>
<td>precision of input value</td>
<td>number</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>prefix</td>
<td>The prefix icon for the Input</td>
<td>slot</td>
<td>-</td>
<td>3.0</td>
</tr>
<tr>
<td>size</td>
<td>height of input box</td>
<td>string</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>step</td>
<td>The number to which the current value is increased or decreased. It can be an integer or decimal.</td>
<td>number|string</td>
<td>1</td>
<td></td>
</tr>
<tr>
<td>stringMode</td>
<td>Set value as string to support high precision decimals. Will return string value by <code>change</code></td>
<td>boolean</td>
<td>false</td>
<td>3.0</td>
</tr>
<tr>
<td>value(v-model)</td>
<td>current value</td>
<td>number</td>
<td></td>
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
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>change</td>
<td>The callback triggered when the value is changed.</td>
<td>function(value: number | string)</td>
<td></td>
<td></td>
</tr>
<tr>
<td>pressEnter</td>
<td>The callback function that is triggered when Enter key is pressed.</td>
<td>function(e)</td>
<td></td>
<td>1.5.0</td>
</tr>
<tr>
<td>step</td>
<td>The callback function that is triggered when click up or down buttons</td>
<td>(value: number, info: { offset: number, type: 'up' | 'down' }) =&gt; void</td>
<td>3.0</td>
<td></td>
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
<h2 id="FAQ">FAQ <a class="header-anchor" href="#FAQ">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<h3 id="Why-value-can-exceed-min-or-max-in-control">Why <code>value</code> can exceed <code>min</code> or <code>max</code> in control? <a class="header-anchor" href="#Why-value-can-exceed-min-or-max-in-control">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>Developer handle data by their own in control. It will make data out of sync if InputNumber change display value. It also cause potential data issues when use in form.</p>
<h3 id="Why-dynamic-change-min-or-max-which-makes-value-out-of-range-will-not-trigger-change">Why dynamic change <code>min</code> or <code>max</code> which makes <code>value</code> out of range will not trigger <code>change</code>? <a class="header-anchor" href="#Why-dynamic-change-min-or-max-which-makes-value-out-of-range-will-not-trigger-change">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p><code>change</code> is user trigger event. Auto trigger will makes form lib can not detect data modify source.</p>
`,lastUpdated:1669791391984}},ca={class:"markdown"},pa=P('<p>Enter a number within certain range with the mouse or keyboard.</p><h2 id="When-To-Use">When To Use <a class="header-anchor" href="#When-To-Use"><span aria-hidden="true" class="anchor">#</span></a></h2><p>When a numeric value needs to be provided.</p><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><table><thead><tr><th>property</th><th>description</th><th>type</th><th>default</th><th></th></tr></thead><tbody><tr><td>addonAfter</td><td>The label text displayed after (on the right side of) the input field</td><td>slot</td><td>-</td><td>3.0</td></tr><tr><td>addonBefore</td><td>The label text displayed before (on the left side of) the input field</td><td>slot</td><td>-</td><td>3.0</td></tr><tr><td>autofocus</td><td>get focus when component mounted</td><td>boolean</td><td>false</td><td></td></tr><tr><td>bordered</td><td>Whether has border style</td><td>boolean</td><td>true</td><td>3.0</td></tr><tr><td>controls</td><td>Whether to show <code>+-</code> controls</td><td>boolean</td><td>true</td><td>3.0</td></tr><tr><td>decimalSeparator</td><td>decimal separator</td><td>string</td><td>-</td><td></td></tr><tr><td>defaultValue</td><td>initial value</td><td>number</td><td></td><td></td></tr><tr><td>disabled</td><td>disable the input</td><td>boolean</td><td>false</td><td></td></tr><tr><td>formatter</td><td>Specifies the format of the value presented</td><td>function(value: number | string, info: { userTyping: boolean, input: string }): string</td><td>-</td><td>info: 3.0</td></tr><tr><td>keyboard</td><td>If enable keyboard behavior</td><td>boolean</td><td>true</td><td>3.0</td></tr><tr><td>max</td><td>max value</td><td>number</td><td>Infinity</td><td></td></tr><tr><td>min</td><td>min value</td><td>number</td><td>-Infinity</td><td></td></tr><tr><td>parser</td><td>Specifies the value extracted from formatter</td><td>function( string): number</td><td>-</td><td></td></tr><tr><td>precision</td><td>precision of input value</td><td>number</td><td>-</td><td></td></tr><tr><td>prefix</td><td>The prefix icon for the Input</td><td>slot</td><td>-</td><td>3.0</td></tr><tr><td>size</td><td>height of input box</td><td>string</td><td>-</td><td></td></tr><tr><td>step</td><td>The number to which the current value is increased or decreased. It can be an integer or decimal.</td><td>number|string</td><td>1</td><td></td></tr><tr><td>stringMode</td><td>Set value as string to support high precision decimals. Will return string value by <code>change</code></td><td>boolean</td><td>false</td><td>3.0</td></tr><tr><td>value(v-model)</td><td>current value</td><td>number</td><td></td><td></td></tr></tbody></table><h3 id="events">events <a class="header-anchor" href="#events"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>Events Name</th><th>Description</th><th>Arguments</th><th>Version</th><th></th></tr></thead><tbody><tr><td>change</td><td>The callback triggered when the value is changed.</td><td>function(value: number | string)</td><td></td><td></td></tr><tr><td>pressEnter</td><td>The callback function that is triggered when Enter key is pressed.</td><td>function(e)</td><td></td><td>1.5.0</td></tr><tr><td>step</td><td>The callback function that is triggered when click up or down buttons</td><td>(value: number, info: { offset: number, type: &#39;up&#39; | &#39;down&#39; }) =&gt; void</td><td>3.0</td><td></td></tr></tbody></table><h2 id="Methods">Methods <a class="header-anchor" href="#Methods"><span aria-hidden="true" class="anchor">#</span></a></h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>blur()</td><td>remove focus</td></tr><tr><td>focus()</td><td>get focus</td></tr></tbody></table><h2 id="FAQ">FAQ <a class="header-anchor" href="#FAQ"><span aria-hidden="true" class="anchor">#</span></a></h2><h3 id="Why-value-can-exceed-min-or-max-in-control">Why <code>value</code> can exceed <code>min</code> or <code>max</code> in control? <a class="header-anchor" href="#Why-value-can-exceed-min-or-max-in-control"><span aria-hidden="true" class="anchor">#</span></a></h3><p>Developer handle data by their own in control. It will make data out of sync if InputNumber change display value. It also cause potential data issues when use in form.</p><h3 id="Why-dynamic-change-min-or-max-which-makes-value-out-of-range-will-not-trigger-change">Why dynamic change <code>min</code> or <code>max</code> which makes <code>value</code> out of range will not trigger <code>change</code>? <a class="header-anchor" href="#Why-dynamic-change-min-or-max-which-makes-value-out-of-range-will-not-trigger-change"><span aria-hidden="true" class="anchor">#</span></a></h3><p><code>change</code> is user trigger event. Auto trigger will makes form lib can not detect data modify source.</p>',14),la=[pa];function ua(t,s,d,g,A,b){return m(),V("article",ca,la)}const ia=v(oa,[["render",ua]]),ka=Z({CN:ea,US:ia,components:{Try:M,prefixVue:On,Basic:an,Disabled:pn,Digit:dn,Formatter:mn,Size:Wn,addonVue:Vn,borderlessVue:Sn,keyboardVue:Dn,outOfRangeVue:jn}});function ga(t,s,d,g,A,b){const u=c("try"),i=c("basic"),l=c("addonVue"),p=c("size"),r=c("disabled"),h=c("digit"),f=c("formatter"),I=c("keyboardVue"),y=c("outOfRangeVue"),w=c("borderlessVue"),B=c("prefixVue"),Y=c("demo-sort");return m(),W(Y,null,{default:e(()=>[o(u),o(i),o(l),o(p),o(r),o(h),o(f),o(I),o(y),o(w),o(B)]),_:1})}const Aa=v(ka,[["render",ga]]);export{Aa as default};
