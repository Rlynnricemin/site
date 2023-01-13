import{_ as b,a as V,k,s as w,d as Y,r as v,o as N,z as R,l as I,w as s,j as e,f as t,b as n,y,H as S,t as Z,e as a}from"./index.6a8b5f17.js";import{t as X}from"./trydemo.48000c6d.js";import{H as B}from"./HomeOutlined.950c7930.js";import{U as _}from"./UserOutlined.2290d831.js";const H={pageData:{title:"Breadcrumb",description:"",frontmatter:{category:"Components",type:"Navigation",title:"Breadcrumb",cover:"https://gw.alipayobjects.com/zos/alicdn/9Ltop8JwH/Breadcrumb.svg"},headers:[{level:2,title:"When To Use",slug:"When-To-Use",content:""},{level:2,title:"API",slug:"API",content:""},{level:3,title:"Breadcrumb.Item",slug:"Breadcrumb-Item",content:""},{level:3,title:"Breadcrumb.Separator 1.5.0",slug:"Breadcrumb-Separator-1-5-0",content:""},{level:3,title:"routes",slug:"routes",content:""},{level:3,title:"Use with browserHistory",slug:"Use-with-browserHistory",content:"The link of Breadcrumb item targets `#` by default, you can use `itemRender` to make a `browserHistory` Link."}],relativePath:"components/breadcrumb/index.en-US.md",content:`
A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy.

## When To Use

- When the system has more than two layers in a hierarchy.
- When you need to inform the user of where they are.
- When the user may need to navigate back to a higher level.

## API

| Property | Description | Type | Optional | Default | Version |
| --- | --- | --- | --- | --- | --- |
| itemRender | Custom item renderer, #itemRender=&quot;{route, params, routes, paths}&quot; | ({route, params, routes, paths}) =&gt; vNode |  | - |  |
| params | Routing parameters | object |  | - |  |
| routes | The routing stack information of router | [routes\\[\\]](#routes) |  | - |  |
| separator | Custom separator | string\\|slot |  | \`/\` |  |

### Breadcrumb.Item

| Property | Description         | Type                                   | Default | Version |
| -------- | ------------------- | -------------------------------------- | ------- | ------- |
| href     | Target of hyperlink | string                                 | -       |         |
| overlay  | The dropdown menu   | [Menu](/components/menu) \\| () =&gt; Menu | -       |         |

#### Events

| Events Name | Description                   | Arguments            | Version |       |
| ----------- | ----------------------------- | -------------------- | ------- | ----- |
| click       | handler to handle click event | (e:MouseEvent)=&gt;void | -       | 1.5.0 |

### Breadcrumb.Separator \`1.5.0\`

| Property | Description | Type | Default | Version |
| -------- | ----------- | ---- | ------- | ------- |
| -        | -           | -    | -       | -       |

&gt; When using \`Breadcrumb.Separator\`,its parent component must be set to \`separator=&quot;&quot;\`, otherwise the default separator of the parent component will appear.

### routes

\`\`\`ts
interface Route {
  path: string;
  breadcrumbName: string;
  children?: Array&lt;{
    path: string;
    breadcrumbName: string;
  }&gt;;
}
\`\`\`

### Use with browserHistory

The link of Breadcrumb item targets \`#\` by default, you can use \`itemRender\` to make a \`browserHistory\` Link.

\`\`\`html
&lt;template&gt;
  &lt;a-breadcrumb :routes=&quot;routes&quot;&gt;
    &lt;template #itemRender=&quot;{ route, params, routes, paths }&quot;&gt;
      &lt;span v-if=&quot;routes.indexOf(route) === routes.length - 1&quot;&gt;{{route.breadcrumbName}}&lt;/span&gt;
      &lt;router-link v-else :to=&quot;paths.join(&#39;/&#39;)&quot;&gt;{{route.breadcrumbName}}&lt;/router-link&gt;
    &lt;/template&gt;
  &lt;/a-breadcrumb&gt;
&lt;/template&gt;
&lt;script lang=&quot;ts&quot;&gt;
  import { defineComponent, ref } from &#39;vue&#39;;
  interface Route {
    path: string;
    breadcrumbName: string;
    children?: Array&lt;{
      path: string;
      breadcrumbName: string;
    }&gt;;
  }
  export default defineComponent({
    setup() {
      const routes = ref&lt;Route[]&gt;([
        {
          path: &#39;index&#39;,
          breadcrumbName: &#39;home&#39;,
        },
        {
          path: &#39;first&#39;,
          breadcrumbName: &#39;first&#39;,
          children: [
            {
              path: &#39;/design&#39;,
              breadcrumbName: &#39;Design&#39;,
            },
            {
              path: &#39;/general&#39;,
              breadcrumbName: &#39;General&#39;,
            },
            {
              path: &#39;/layout&#39;,
              breadcrumbName: &#39;Layout&#39;,
            },
            {
              path: &#39;/navigation&#39;,
              breadcrumbName: &#39;Navigation&#39;,
            },
          ],
        },
        {
          path: &#39;second&#39;,
          breadcrumbName: &#39;second&#39;,
        },
      ]);
      return {
        routes,
      };
    },
  });
&lt;/script&gt;
\`\`\`
`,html:`<p>A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy.</p>
<h2 id="When-To-Use">When To Use <a class="header-anchor" href="#When-To-Use">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<ul>
<li>When the system has more than two layers in a hierarchy.</li>
<li>When you need to inform the user of where they are.</li>
<li>When the user may need to navigate back to a higher level.</li>
</ul>
<h2 id="API">API <a class="header-anchor" href="#API">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
<th>Type</th>
<th>Optional</th>
<th>Default</th>
<th>Version</th>
</tr>
</thead>
<tbody>
<tr>
<td>itemRender</td>
<td>Custom item renderer, #itemRender=&quot;{route, params, routes, paths}&quot;</td>
<td>({route, params, routes, paths}) =&gt; vNode</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>params</td>
<td>Routing parameters</td>
<td>object</td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>routes</td>
<td>The routing stack information of router</td>
<td><a href="#routes">routes[]</a></td>
<td></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>separator</td>
<td>Custom separator</td>
<td>string|slot</td>
<td></td>
<td><code>/</code></td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="Breadcrumb-Item">Breadcrumb.Item <a class="header-anchor" href="#Breadcrumb-Item">
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
<td>href</td>
<td>Target of hyperlink</td>
<td>string</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>overlay</td>
<td>The dropdown menu</td>
<td><a href="/components/menu">Menu</a> | () =&gt; Menu</td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<h4 id="Events">Events <a class="header-anchor" href="#Events">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h4>
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
<td>click</td>
<td>handler to handle click event</td>
<td>(e:MouseEvent)=&gt;void</td>
<td>-</td>
<td>1.5.0</td>
</tr>
</tbody>
</table>
<h3 id="Breadcrumb-Separator-1-5-0">Breadcrumb.Separator <code>1.5.0</code> <a class="header-anchor" href="#Breadcrumb-Separator-1-5-0">
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
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
</tbody>
</table>
<blockquote>
<p>When using <code>Breadcrumb.Separator</code>,its parent component must be set to <code>separator=&quot;&quot;</code>, otherwise the default separator of the parent component will appear.</p>
</blockquote>
<h3 id="routes">routes <a class="header-anchor" href="#routes">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<pre class="language-ts" v-pre><code><span class="token keyword">interface</span> <span class="token class-name">Route</span> <span class="token punctuation">{</span>
  path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  breadcrumbName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  children<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    breadcrumbName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<h3 id="Use-with-browserHistory">Use with browserHistory <a class="header-anchor" href="#Use-with-browserHistory">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>The link of Breadcrumb item targets <code>#</code> by default, you can use <code>itemRender</code> to make a <code>browserHistory</code> Link.</p>
<pre class="language-html" v-pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-breadcrumb</span> <span class="token attr-name">:routes</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>routes<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#itemRender</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ route, params, routes, paths }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>routes.indexOf(route) === routes.length - 1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{route.breadcrumbName}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">v-else</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>paths.join('/')<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{route.breadcrumbName}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-breadcrumb</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
  <span class="token keyword">interface</span> <span class="token class-name">Route</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token literal-property property">breadcrumbName</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    children<span class="token operator">?</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span><span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
      <span class="token literal-property property">breadcrumbName</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> routes <span class="token operator">=</span> ref<span class="token operator">&lt;</span>Route<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'index'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">breadcrumbName</span><span class="token operator">:</span> <span class="token string">'home'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'first'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">breadcrumbName</span><span class="token operator">:</span> <span class="token string">'first'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/design'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">breadcrumbName</span><span class="token operator">:</span> <span class="token string">'Design'</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/general'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">breadcrumbName</span><span class="token operator">:</span> <span class="token string">'General'</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/layout'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">breadcrumbName</span><span class="token operator">:</span> <span class="token string">'Layout'</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/navigation'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">breadcrumbName</span><span class="token operator">:</span> <span class="token string">'Navigation'</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'second'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">breadcrumbName</span><span class="token operator">:</span> <span class="token string">'second'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        routes<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre>
`,lastUpdated:1669791391876}},j={class:"markdown"},D=w(`<p>A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy.</p><h2 id="When-To-Use">When To Use <a class="header-anchor" href="#When-To-Use"><span aria-hidden="true" class="anchor">#</span></a></h2><ul><li>When the system has more than two layers in a hierarchy.</li><li>When you need to inform the user of where they are.</li><li>When the user may need to navigate back to a higher level.</li></ul><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Optional</th><th>Default</th><th>Version</th></tr></thead><tbody><tr><td>itemRender</td><td>Custom item renderer, #itemRender=&quot;{route, params, routes, paths}&quot;</td><td>({route, params, routes, paths}) =&gt; vNode</td><td></td><td>-</td><td></td></tr><tr><td>params</td><td>Routing parameters</td><td>object</td><td></td><td>-</td><td></td></tr><tr><td>routes</td><td>The routing stack information of router</td><td><a href="#routes">routes[]</a></td><td></td><td>-</td><td></td></tr><tr><td>separator</td><td>Custom separator</td><td>string|slot</td><td></td><td><code>/</code></td><td></td></tr></tbody></table><h3 id="Breadcrumb-Item">Breadcrumb.Item <a class="header-anchor" href="#Breadcrumb-Item"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Version</th></tr></thead><tbody><tr><td>href</td><td>Target of hyperlink</td><td>string</td><td>-</td><td></td></tr><tr><td>overlay</td><td>The dropdown menu</td><td><a href="/components/menu">Menu</a> | () =&gt; Menu</td><td>-</td><td></td></tr></tbody></table><h4 id="Events">Events <a class="header-anchor" href="#Events"><span aria-hidden="true" class="anchor">#</span></a></h4><table><thead><tr><th>Events Name</th><th>Description</th><th>Arguments</th><th>Version</th><th></th></tr></thead><tbody><tr><td>click</td><td>handler to handle click event</td><td>(e:MouseEvent)=&gt;void</td><td>-</td><td>1.5.0</td></tr></tbody></table><h3 id="Breadcrumb-Separator-1-5-0">Breadcrumb.Separator <code>1.5.0</code> <a class="header-anchor" href="#Breadcrumb-Separator-1-5-0"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Version</th></tr></thead><tbody><tr><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr></tbody></table><blockquote><p>When using <code>Breadcrumb.Separator</code>,its parent component must be set to <code>separator=&quot;&quot;</code>, otherwise the default separator of the parent component will appear.</p></blockquote><h3 id="routes">routes <a class="header-anchor" href="#routes"><span aria-hidden="true" class="anchor">#</span></a></h3><pre class="language-ts"><code><span class="token keyword">interface</span> <span class="token class-name">Route</span> <span class="token punctuation">{</span>
  path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  breadcrumbName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  children<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    breadcrumbName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><h3 id="Use-with-browserHistory">Use with browserHistory <a class="header-anchor" href="#Use-with-browserHistory"><span aria-hidden="true" class="anchor">#</span></a></h3><p>The link of Breadcrumb item targets <code>#</code> by default, you can use <code>itemRender</code> to make a <code>browserHistory</code> Link.</p><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-breadcrumb</span> <span class="token attr-name">:routes</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>routes<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#itemRender</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ route, params, routes, paths }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>routes.indexOf(route) === routes.length - 1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{route.breadcrumbName}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">v-else</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>paths.join(&#39;/&#39;)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{route.breadcrumbName}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-breadcrumb</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">interface</span> <span class="token class-name">Route</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token literal-property property">breadcrumbName</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    children<span class="token operator">?</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span><span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
      <span class="token literal-property property">breadcrumbName</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> routes <span class="token operator">=</span> ref<span class="token operator">&lt;</span>Route<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">breadcrumbName</span><span class="token operator">:</span> <span class="token string">&#39;home&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;first&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">breadcrumbName</span><span class="token operator">:</span> <span class="token string">&#39;first&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/design&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">breadcrumbName</span><span class="token operator">:</span> <span class="token string">&#39;Design&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/general&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">breadcrumbName</span><span class="token operator">:</span> <span class="token string">&#39;General&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/layout&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">breadcrumbName</span><span class="token operator">:</span> <span class="token string">&#39;Layout&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/navigation&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">breadcrumbName</span><span class="token operator">:</span> <span class="token string">&#39;Navigation&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;second&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">breadcrumbName</span><span class="token operator">:</span> <span class="token string">&#39;second&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        routes<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre>`,17),F=[D];function x(o,u,p,c,r,C){return k(),V("article",j,F)}const K=b(H,[["render",x]]),T={pageData:{title:"Breadcrumb",description:"",frontmatter:{category:"Components",subtitle:"\u9762\u5305\u5C51",type:"\u5BFC\u822A",title:"Breadcrumb",cover:"https://gw.alipayobjects.com/zos/alicdn/9Ltop8JwH/Breadcrumb.svg"},headers:[{level:2,title:"\u4F55\u65F6\u4F7F\u7528",slug:"\u4F55\u65F6\u4F7F\u7528",content:""},{level:2,title:"API",slug:"API",content:""},{level:3,title:"Breadcrumb.Item",slug:"Breadcrumb-Item",content:""},{level:3,title:"Breadcrumb.Separator 1.5.0",slug:"Breadcrumb-Separator-1-5-0",content:""},{level:3,title:"routes",slug:"routes",content:""},{level:3,title:"\u548C browserHistory \u914D\u5408",slug:"\u548C-browserHistory-\u914D\u5408",content:"\u548C vue-router \u4E00\u8D77\u4F7F\u7528\u65F6\uFF0C\u9ED8\u8BA4\u751F\u6210\u7684 url \u8DEF\u5F84\u662F\u5E26\u6709 `#` \u7684\uFF0C\u5982\u679C\u548C browserHistory \u4E00\u8D77\u4F7F\u7528\u7684\u8BDD\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 `itemRender` \u5C5E\u6027\u5B9A\u4E49\u9762\u5305\u5C51\u94FE\u63A5\u3002"}],relativePath:"components/breadcrumb/index.zh-CN.md",content:`
\u663E\u793A\u5F53\u524D\u9875\u9762\u5728\u7CFB\u7EDF\u5C42\u7EA7\u7ED3\u6784\u4E2D\u7684\u4F4D\u7F6E\uFF0C\u5E76\u80FD\u5411\u4E0A\u8FD4\u56DE\u3002

## \u4F55\u65F6\u4F7F\u7528

- \u5F53\u7CFB\u7EDF\u62E5\u6709\u8D85\u8FC7\u4E24\u7EA7\u4EE5\u4E0A\u7684\u5C42\u7EA7\u7ED3\u6784\u65F6\uFF1B
- \u5F53\u9700\u8981\u544A\u77E5\u7528\u6237\u300E\u4F60\u5728\u54EA\u91CC\u300F\u65F6\uFF1B
- \u5F53\u9700\u8981\u5411\u4E0A\u5BFC\u822A\u7684\u529F\u80FD\u65F6\u3002

## API

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |
| --- | --- | --- | --- | --- |
| itemRender | \u81EA\u5B9A\u4E49\u94FE\u63A5\u51FD\u6570\uFF0C\u548C vue-router \u914D\u7F6E\u4F7F\u7528\uFF0C \u4E5F\u53EF\u4F7F\u7528 #itemRender=&quot;props&quot; | ({route, params, routes, paths}) =&gt; vNode |  | - |
| params | \u8DEF\u7531\u7684\u53C2\u6570 | object |  | - |
| routes | router \u7684\u8DEF\u7531\u6808\u4FE1\u606F | [routes\\[\\]](#routes) |  | - |
| separator | \u5206\u9694\u7B26\u81EA\u5B9A\u4E49 | string\\|slot |  | &#39;/&#39; |

### Breadcrumb.Item

| \u53C2\u6570    | \u53C2\u6570           | \u7C7B\u578B                                   | \u9ED8\u8BA4\u503C | \u7248\u672C  |
| ------- | -------------- | -------------------------------------- | ------ | ----- |
| href    | \u94FE\u63A5\u7684\u76EE\u7684\u5730   | string                                 | -      | 1.5.0 |
| overlay | \u4E0B\u62C9\u83DC\u5355\u7684\u5185\u5BB9 | [Menu](/components/menu) \\| () =&gt; Menu | -      | 1.5.0 |

#### \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D\u79F0 | \u8BF4\u660E     | \u56DE\u8C03\u53C2\u6570             | \u7248\u672C |       |
| -------- | -------- | -------------------- | ---- | ----- |
| click    | \u5355\u51FB\u4E8B\u4EF6 | (e:MouseEvent)=&gt;void | -    | 1.5.0 |

### Breadcrumb.Separator \`1.5.0\`

| \u53C2\u6570 | \u7C7B\u578B | \u9ED8\u8BA4\u503C | \u7248\u672C |
| ---- | ---- | ------ | ---- |
| -    | -    | -      | -    |

&gt; \u6CE8\u610F\uFF1A\u5728\u4F7F\u7528 \`Breadcrumb.Separator\` \u65F6\uFF0C\u5176\u7236\u7EC4\u4EF6\u7684\u5206\u9694\u7B26\u5FC5\u987B\u8BBE\u7F6E\u4E3A \`separator=&quot;&quot;\`\uFF0C\u5426\u5219\u4F1A\u51FA\u73B0\u7236\u7EC4\u4EF6\u9ED8\u8BA4\u7684\u5206\u9694\u7B26\u3002

### routes

\`\`\`ts
interface Route {
  path: string;
  breadcrumbName: string;
  children?: Array&lt;{
    path: string;
    breadcrumbName: string;
  }&gt;;
}
\`\`\`

### \u548C browserHistory \u914D\u5408

\u548C vue-router \u4E00\u8D77\u4F7F\u7528\u65F6\uFF0C\u9ED8\u8BA4\u751F\u6210\u7684 url \u8DEF\u5F84\u662F\u5E26\u6709 \`#\` \u7684\uFF0C\u5982\u679C\u548C browserHistory \u4E00\u8D77\u4F7F\u7528\u7684\u8BDD\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 \`itemRender\` \u5C5E\u6027\u5B9A\u4E49\u9762\u5305\u5C51\u94FE\u63A5\u3002

\`\`\`html
&lt;template&gt;
  &lt;a-breadcrumb :routes=&quot;routes&quot;&gt;
    &lt;template #itemRender=&quot;{ route, params, routes, paths }&quot;&gt;
      &lt;span v-if=&quot;routes.indexOf(route) === routes.length - 1&quot;&gt;{{route.breadcrumbName}}&lt;/span&gt;
      &lt;router-link v-else :to=&quot;paths.join(&#39;/&#39;)&quot;&gt;{{route.breadcrumbName}}&lt;/router-link&gt;
    &lt;/template&gt;
  &lt;/a-breadcrumb&gt;
&lt;/template&gt;
&lt;script lang=&quot;ts&quot;&gt;
  import { defineComponent, ref } from &#39;vue&#39;;
  interface Route {
    path: string;
    breadcrumbName: string;
    children?: Array&lt;{
      path: string;
      breadcrumbName: string;
    }&gt;;
  }
  export default defineComponent({
    setup() {
      const routes = ref&lt;Route[]&gt;([
        {
          path: &#39;index&#39;,
          breadcrumbName: &#39;home&#39;,
        },
        {
          path: &#39;first&#39;,
          breadcrumbName: &#39;first&#39;,
          children: [
            {
              path: &#39;/design&#39;,
              breadcrumbName: &#39;Design&#39;,
            },
            {
              path: &#39;/general&#39;,
              breadcrumbName: &#39;General&#39;,
            },
            {
              path: &#39;/layout&#39;,
              breadcrumbName: &#39;Layout&#39;,
            },
            {
              path: &#39;/navigation&#39;,
              breadcrumbName: &#39;Navigation&#39;,
            },
          ],
        },
        {
          path: &#39;second&#39;,
          breadcrumbName: &#39;second&#39;,
        },
      ]);
      return {
        routes,
      };
    },
  });
&lt;/script&gt;
\`\`\`
`,html:`<p>\u663E\u793A\u5F53\u524D\u9875\u9762\u5728\u7CFB\u7EDF\u5C42\u7EA7\u7ED3\u6784\u4E2D\u7684\u4F4D\u7F6E\uFF0C\u5E76\u80FD\u5411\u4E0A\u8FD4\u56DE\u3002</p>
<h2 id="\u4F55\u65F6\u4F7F\u7528">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<ul>
<li>\u5F53\u7CFB\u7EDF\u62E5\u6709\u8D85\u8FC7\u4E24\u7EA7\u4EE5\u4E0A\u7684\u5C42\u7EA7\u7ED3\u6784\u65F6\uFF1B</li>
<li>\u5F53\u9700\u8981\u544A\u77E5\u7528\u6237\u300E\u4F60\u5728\u54EA\u91CC\u300F\u65F6\uFF1B</li>
<li>\u5F53\u9700\u8981\u5411\u4E0A\u5BFC\u822A\u7684\u529F\u80FD\u65F6\u3002</li>
</ul>
<h2 id="API">API <a class="header-anchor" href="#API">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u8BF4\u660E</th>
<th>\u7C7B\u578B</th>
<th>\u53EF\u9009\u503C</th>
<th>\u9ED8\u8BA4\u503C</th>
</tr>
</thead>
<tbody>
<tr>
<td>itemRender</td>
<td>\u81EA\u5B9A\u4E49\u94FE\u63A5\u51FD\u6570\uFF0C\u548C vue-router \u914D\u7F6E\u4F7F\u7528\uFF0C \u4E5F\u53EF\u4F7F\u7528 #itemRender=&quot;props&quot;</td>
<td>({route, params, routes, paths}) =&gt; vNode</td>
<td></td>
<td>-</td>
</tr>
<tr>
<td>params</td>
<td>\u8DEF\u7531\u7684\u53C2\u6570</td>
<td>object</td>
<td></td>
<td>-</td>
</tr>
<tr>
<td>routes</td>
<td>router \u7684\u8DEF\u7531\u6808\u4FE1\u606F</td>
<td><a href="#routes">routes[]</a></td>
<td></td>
<td>-</td>
</tr>
<tr>
<td>separator</td>
<td>\u5206\u9694\u7B26\u81EA\u5B9A\u4E49</td>
<td>string|slot</td>
<td></td>
<td>'/'</td>
</tr>
</tbody>
</table>
<h3 id="Breadcrumb-Item">Breadcrumb.Item <a class="header-anchor" href="#Breadcrumb-Item">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u53C2\u6570</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
<th>\u7248\u672C</th>
</tr>
</thead>
<tbody>
<tr>
<td>href</td>
<td>\u94FE\u63A5\u7684\u76EE\u7684\u5730</td>
<td>string</td>
<td>-</td>
<td>1.5.0</td>
</tr>
<tr>
<td>overlay</td>
<td>\u4E0B\u62C9\u83DC\u5355\u7684\u5185\u5BB9</td>
<td><a href="/components/menu">Menu</a> | () =&gt; Menu</td>
<td>-</td>
<td>1.5.0</td>
</tr>
</tbody>
</table>
<h4 id="\u4E8B\u4EF6">\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8B\u4EF6">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h4>
<table>
<thead>
<tr>
<th>\u4E8B\u4EF6\u540D\u79F0</th>
<th>\u8BF4\u660E</th>
<th>\u56DE\u8C03\u53C2\u6570</th>
<th>\u7248\u672C</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>click</td>
<td>\u5355\u51FB\u4E8B\u4EF6</td>
<td>(e:MouseEvent)=&gt;void</td>
<td>-</td>
<td>1.5.0</td>
</tr>
</tbody>
</table>
<h3 id="Breadcrumb-Separator-1-5-0">Breadcrumb.Separator <code>1.5.0</code> <a class="header-anchor" href="#Breadcrumb-Separator-1-5-0">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u7C7B\u578B</th>
<th>\u9ED8\u8BA4\u503C</th>
<th>\u7248\u672C</th>
</tr>
</thead>
<tbody>
<tr>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
</tbody>
</table>
<blockquote>
<p>\u6CE8\u610F\uFF1A\u5728\u4F7F\u7528 <code>Breadcrumb.Separator</code> \u65F6\uFF0C\u5176\u7236\u7EC4\u4EF6\u7684\u5206\u9694\u7B26\u5FC5\u987B\u8BBE\u7F6E\u4E3A <code>separator=&quot;&quot;</code>\uFF0C\u5426\u5219\u4F1A\u51FA\u73B0\u7236\u7EC4\u4EF6\u9ED8\u8BA4\u7684\u5206\u9694\u7B26\u3002</p>
</blockquote>
<h3 id="routes">routes <a class="header-anchor" href="#routes">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<pre class="language-ts" v-pre><code><span class="token keyword">interface</span> <span class="token class-name">Route</span> <span class="token punctuation">{</span>
  path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  breadcrumbName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  children<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    breadcrumbName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<h3 id="\u548C-browserHistory-\u914D\u5408">\u548C browserHistory \u914D\u5408 <a class="header-anchor" href="#\u548C-browserHistory-\u914D\u5408">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>\u548C vue-router \u4E00\u8D77\u4F7F\u7528\u65F6\uFF0C\u9ED8\u8BA4\u751F\u6210\u7684 url \u8DEF\u5F84\u662F\u5E26\u6709 <code>#</code> \u7684\uFF0C\u5982\u679C\u548C browserHistory \u4E00\u8D77\u4F7F\u7528\u7684\u8BDD\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 <code>itemRender</code> \u5C5E\u6027\u5B9A\u4E49\u9762\u5305\u5C51\u94FE\u63A5\u3002</p>
<pre class="language-html" v-pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-breadcrumb</span> <span class="token attr-name">:routes</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>routes<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#itemRender</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ route, params, routes, paths }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>routes.indexOf(route) === routes.length - 1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{route.breadcrumbName}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">v-else</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>paths.join('/')<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{route.breadcrumbName}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-breadcrumb</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
  <span class="token keyword">interface</span> <span class="token class-name">Route</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token literal-property property">breadcrumbName</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    children<span class="token operator">?</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span><span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
      <span class="token literal-property property">breadcrumbName</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> routes <span class="token operator">=</span> ref<span class="token operator">&lt;</span>Route<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'index'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">breadcrumbName</span><span class="token operator">:</span> <span class="token string">'home'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'first'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">breadcrumbName</span><span class="token operator">:</span> <span class="token string">'first'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/design'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">breadcrumbName</span><span class="token operator">:</span> <span class="token string">'Design'</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/general'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">breadcrumbName</span><span class="token operator">:</span> <span class="token string">'General'</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/layout'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">breadcrumbName</span><span class="token operator">:</span> <span class="token string">'Layout'</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/navigation'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">breadcrumbName</span><span class="token operator">:</span> <span class="token string">'Navigation'</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'second'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">breadcrumbName</span><span class="token operator">:</span> <span class="token string">'second'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        routes<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre>
`,lastUpdated:1669791391877}},q={class:"markdown"},E=w(`<p>\u663E\u793A\u5F53\u524D\u9875\u9762\u5728\u7CFB\u7EDF\u5C42\u7EA7\u7ED3\u6784\u4E2D\u7684\u4F4D\u7F6E\uFF0C\u5E76\u80FD\u5411\u4E0A\u8FD4\u56DE\u3002</p><h2 id="\u4F55\u65F6\u4F7F\u7528">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528"><span aria-hidden="true" class="anchor">#</span></a></h2><ul><li>\u5F53\u7CFB\u7EDF\u62E5\u6709\u8D85\u8FC7\u4E24\u7EA7\u4EE5\u4E0A\u7684\u5C42\u7EA7\u7ED3\u6784\u65F6\uFF1B</li><li>\u5F53\u9700\u8981\u544A\u77E5\u7528\u6237\u300E\u4F60\u5728\u54EA\u91CC\u300F\u65F6\uFF1B</li><li>\u5F53\u9700\u8981\u5411\u4E0A\u5BFC\u822A\u7684\u529F\u80FD\u65F6\u3002</li></ul><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>itemRender</td><td>\u81EA\u5B9A\u4E49\u94FE\u63A5\u51FD\u6570\uFF0C\u548C vue-router \u914D\u7F6E\u4F7F\u7528\uFF0C \u4E5F\u53EF\u4F7F\u7528 #itemRender=&quot;props&quot;</td><td>({route, params, routes, paths}) =&gt; vNode</td><td></td><td>-</td></tr><tr><td>params</td><td>\u8DEF\u7531\u7684\u53C2\u6570</td><td>object</td><td></td><td>-</td></tr><tr><td>routes</td><td>router \u7684\u8DEF\u7531\u6808\u4FE1\u606F</td><td><a href="#routes">routes[]</a></td><td></td><td>-</td></tr><tr><td>separator</td><td>\u5206\u9694\u7B26\u81EA\u5B9A\u4E49</td><td>string|slot</td><td></td><td>&#39;/&#39;</td></tr></tbody></table><h3 id="Breadcrumb-Item">Breadcrumb.Item <a class="header-anchor" href="#Breadcrumb-Item"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>href</td><td>\u94FE\u63A5\u7684\u76EE\u7684\u5730</td><td>string</td><td>-</td><td>1.5.0</td></tr><tr><td>overlay</td><td>\u4E0B\u62C9\u83DC\u5355\u7684\u5185\u5BB9</td><td><a href="/components/menu">Menu</a> | () =&gt; Menu</td><td>-</td><td>1.5.0</td></tr></tbody></table><h4 id="\u4E8B\u4EF6">\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8B\u4EF6"><span aria-hidden="true" class="anchor">#</span></a></h4><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th><th>\u7248\u672C</th><th></th></tr></thead><tbody><tr><td>click</td><td>\u5355\u51FB\u4E8B\u4EF6</td><td>(e:MouseEvent)=&gt;void</td><td>-</td><td>1.5.0</td></tr></tbody></table><h3 id="Breadcrumb-Separator-1-5-0">Breadcrumb.Separator <code>1.5.0</code> <a class="header-anchor" href="#Breadcrumb-Separator-1-5-0"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>-</td><td>-</td><td>-</td><td>-</td></tr></tbody></table><blockquote><p>\u6CE8\u610F\uFF1A\u5728\u4F7F\u7528 <code>Breadcrumb.Separator</code> \u65F6\uFF0C\u5176\u7236\u7EC4\u4EF6\u7684\u5206\u9694\u7B26\u5FC5\u987B\u8BBE\u7F6E\u4E3A <code>separator=&quot;&quot;</code>\uFF0C\u5426\u5219\u4F1A\u51FA\u73B0\u7236\u7EC4\u4EF6\u9ED8\u8BA4\u7684\u5206\u9694\u7B26\u3002</p></blockquote><h3 id="routes">routes <a class="header-anchor" href="#routes"><span aria-hidden="true" class="anchor">#</span></a></h3><pre class="language-ts"><code><span class="token keyword">interface</span> <span class="token class-name">Route</span> <span class="token punctuation">{</span>
  path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  breadcrumbName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  children<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    breadcrumbName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><h3 id="\u548C-browserHistory-\u914D\u5408">\u548C browserHistory \u914D\u5408 <a class="header-anchor" href="#\u548C-browserHistory-\u914D\u5408"><span aria-hidden="true" class="anchor">#</span></a></h3><p>\u548C vue-router \u4E00\u8D77\u4F7F\u7528\u65F6\uFF0C\u9ED8\u8BA4\u751F\u6210\u7684 url \u8DEF\u5F84\u662F\u5E26\u6709 <code>#</code> \u7684\uFF0C\u5982\u679C\u548C browserHistory \u4E00\u8D77\u4F7F\u7528\u7684\u8BDD\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 <code>itemRender</code> \u5C5E\u6027\u5B9A\u4E49\u9762\u5305\u5C51\u94FE\u63A5\u3002</p><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-breadcrumb</span> <span class="token attr-name">:routes</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>routes<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#itemRender</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ route, params, routes, paths }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>routes.indexOf(route) === routes.length - 1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{route.breadcrumbName}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">v-else</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>paths.join(&#39;/&#39;)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{route.breadcrumbName}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-breadcrumb</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">interface</span> <span class="token class-name">Route</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token literal-property property">breadcrumbName</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    children<span class="token operator">?</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span><span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
      <span class="token literal-property property">breadcrumbName</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> routes <span class="token operator">=</span> ref<span class="token operator">&lt;</span>Route<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">breadcrumbName</span><span class="token operator">:</span> <span class="token string">&#39;home&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;first&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">breadcrumbName</span><span class="token operator">:</span> <span class="token string">&#39;first&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/design&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">breadcrumbName</span><span class="token operator">:</span> <span class="token string">&#39;Design&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/general&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">breadcrumbName</span><span class="token operator">:</span> <span class="token string">&#39;General&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/layout&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">breadcrumbName</span><span class="token operator">:</span> <span class="token string">&#39;Layout&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/navigation&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">breadcrumbName</span><span class="token operator">:</span> <span class="token string">&#39;Navigation&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;second&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">breadcrumbName</span><span class="token operator">:</span> <span class="token string">&#39;second&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        routes<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre>`,17),z=[E];function U(o,u,p,c,r,C){return k(),V("article",q,z)}const Q=b(T,[["render",U]]),$=Y({components:{HomeOutlined:B},mixins:[X],setup(o){const u=v(""),p=v({icon:!1,submenu:!1}),c={...p.value},r=l=>{let i="",m="";for(let d in l)d==="icon"?l[d]&&(m=`
        <script>
        import { HomeOutlined } from '@ant-design/icons-vue';
        export default {
          components: {
            HomeOutlined,
          },
        }
        <\/script>`):d==="submenu"&&l.submenu&&(i=`
              <template #overlay>
              <a-menu>
              <a-menu-item><a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">General</a></a-menu-item>
              <a-menu-item><a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">Layout</a></a-menu-item>
              <a-menu-item><a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">Navigation</a></a-menu-item>
              </a-menu>
              </template>`);console.log("propsval",i);const g=d=>l.icon?`<home-outlined /><span>${d}</span>`:d;return`<template>
          <a-breadcrumb>
            <a-breadcrumb-item>${g("Home")}</a-breadcrumb-item>
            <a-breadcrumb-item>
              ${g("Application Center")}${i}
            </a-breadcrumb-item>
            <a-breadcrumb-item><a href="">${g("Application List")}</a></a-breadcrumb-item>
            <a-breadcrumb-item>${g("An Application")}</a-breadcrumb-item>
          </a-breadcrumb>
        </template>
        ${m}`.replace(/ {8}/g,"")};return N(()=>{u.value=r(p.value)}),R(p,l=>{u.value=r(l)},{deep:!0}),{democode:u,resetItem:()=>{p.value={...c}},propdata:p,labelCol:{style:{width:"80px"}}}}}),O={class:"code-box-demo-try"},M=n("span",null,"Home",-1),nn=n("span",null,"Application Center",-1),an=n("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.alipay.com/"}," General ",-1),sn=n("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.taobao.com/"}," Layout ",-1),tn=n("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.tmall.com/"}," Navigation ",-1),en={href:""},pn=n("span",null,"Application List",-1),on=n("span",null,"An Application",-1),cn={class:"code-box-meta markdown"},ln={class:"code-box-title"},un={class:"code-box-description"};function rn(o,u,p,c,r,C){const l=e("home-outlined"),i=e("a-breadcrumb-item"),m=e("a-menu-item"),g=e("a-menu"),d=e("a-breadcrumb"),A=e("a-switch"),h=e("a-form-item"),W=e("a-col"),f=e("a-row"),J=e("a-form"),P=e("demo-try"),L=e("demo-box");return k(),I(L,{jsfiddle:{docHtml:"",demo:1,order:-1,title:{"zh-CN":"\u5728\u7EBF\u6F14\u793A","en-US":"Online Demo"},relativePath:"components/breadcrumb/demo/try.vue",sourceCode:"PHRlbXBsYXRlPgogIDxzZWN0aW9uPgogICAgPHNlY3Rpb24gY2xhc3M9ImNvZGUtYm94LWRlbW8tdHJ5Ij4KICAgICAgPGEtYnJlYWRjcnVtYj4KICAgICAgICA8YS1icmVhZGNydW1iLWl0ZW0+CiAgICAgICAgICA8aG9tZS1vdXRsaW5lZCB2LWlmPSJwcm9wZGF0YS5pY29uIiAvPgogICAgICAgICAgPHNwYW4+SG9tZTwvc3Bhbj4KICAgICAgICA8L2EtYnJlYWRjcnVtYi1pdGVtPgogICAgICAgIDxhLWJyZWFkY3J1bWItaXRlbT4KICAgICAgICAgIDxob21lLW91dGxpbmVkIHYtaWY9InByb3BkYXRhLmljb24iIC8+CiAgICAgICAgICA8c3Bhbj5BcHBsaWNhdGlvbiBDZW50ZXI8L3NwYW4+CiAgICAgICAgICA8dGVtcGxhdGUgdi1pZj0icHJvcGRhdGEuc3VibWVudSIgI292ZXJsYXk+CiAgICAgICAgICAgIDxhLW1lbnU+CiAgICAgICAgICAgICAgPGEtbWVudS1pdGVtPgogICAgICAgICAgICAgICAgPGEgdGFyZ2V0PSJfYmxhbmsiIHJlbD0ibm9vcGVuZXIgbm9yZWZlcnJlciIgaHJlZj0iaHR0cDovL3d3dy5hbGlwYXkuY29tLyI+CiAgICAgICAgICAgICAgICAgIEdlbmVyYWwKICAgICAgICAgICAgICAgIDwvYT4KICAgICAgICAgICAgICA8L2EtbWVudS1pdGVtPgogICAgICAgICAgICAgIDxhLW1lbnUtaXRlbT4KICAgICAgICAgICAgICAgIDxhIHRhcmdldD0iX2JsYW5rIiByZWw9Im5vb3BlbmVyIG5vcmVmZXJyZXIiIGhyZWY9Imh0dHA6Ly93d3cudGFvYmFvLmNvbS8iPgogICAgICAgICAgICAgICAgICBMYXlvdXQKICAgICAgICAgICAgICAgIDwvYT4KICAgICAgICAgICAgICA8L2EtbWVudS1pdGVtPgogICAgICAgICAgICAgIDxhLW1lbnUtaXRlbT4KICAgICAgICAgICAgICAgIDxhIHRhcmdldD0iX2JsYW5rIiByZWw9Im5vb3BlbmVyIG5vcmVmZXJyZXIiIGhyZWY9Imh0dHA6Ly93d3cudG1hbGwuY29tLyI+CiAgICAgICAgICAgICAgICAgIE5hdmlnYXRpb24KICAgICAgICAgICAgICAgIDwvYT4KICAgICAgICAgICAgICA8L2EtbWVudS1pdGVtPgogICAgICAgICAgICA8L2EtbWVudT4KICAgICAgICAgIDwvdGVtcGxhdGU+CiAgICAgICAgPC9hLWJyZWFkY3J1bWItaXRlbT4KICAgICAgICA8YS1icmVhZGNydW1iLWl0ZW0+CiAgICAgICAgICA8YSBocmVmPSIiPjxob21lLW91dGxpbmVkIHYtaWY9InByb3BkYXRhLmljb24iIHN0eWxlPSJtYXJnaW4tcmlnaHQ6IDNweCIvPjxzcGFuPkFwcGxpY2F0aW9uIExpc3Q8L3NwYW4+PC9hPgogICAgICAgIDwvYS1icmVhZGNydW1iLWl0ZW0+CiAgICAgICAgPGEtYnJlYWRjcnVtYi1pdGVtPgogICAgICAgICAgPGhvbWUtb3V0bGluZWQgdi1pZj0icHJvcGRhdGEuaWNvbiIgLz4KICAgICAgICAgIDxzcGFuPkFuIEFwcGxpY2F0aW9uPC9zcGFuPgogICAgICAgIDwvYS1icmVhZGNydW1iLWl0ZW0+CiAgICAgIDwvYS1icmVhZGNydW1iPgogICAgPC9zZWN0aW9uPgogICAgPHNlY3Rpb24gY2xhc3M9ImNvZGUtYm94LW1ldGEgbWFya2Rvd24iPgogICAgICA8c2VjdGlvbiBjbGFzcz0iY29kZS1ib3gtdGl0bGUiPnt7IGRlbW90aXRsZSB9fTwvc2VjdGlvbj4KICAgICAgPHNlY3Rpb24gY2xhc3M9ImNvZGUtYm94LWRlc2NyaXB0aW9uIj4KICAgICAgICA8YS1mb3JtIDpsYWJlbC1jb2w9ImxhYmVsQ29sIj4KICAgICAgICAgIDxhLXJvdz4KICAgICAgICAgICAgPGEtY29sIHNwYW49IjgiPgogICAgICAgICAgICAgIDxhLWZvcm0taXRlbSBsYWJlbD0iaGFzTWVudSI+CiAgICAgICAgICAgICAgICA8YS1zd2l0Y2gKICAgICAgICAgICAgICAgICAgdi1tb2RlbDpjaGVja2VkPSJwcm9wZGF0YS5zdWJtZW51IgogICAgICAgICAgICAgICAgICBjaGVja2VkLWNoaWxkcmVuPSLlvIAiCiAgICAgICAgICAgICAgICAgIHVuLWNoZWNrZWQtY2hpbGRyZW49IuWFsyIKICAgICAgICAgICAgICAgIC8+CiAgICAgICAgICAgICAgPC9hLWZvcm0taXRlbT4KICAgICAgICAgICAgPC9hLWNvbD4KCiAgICAgICAgICAgIDxhLWNvbCBzcGFuPSI4Ij4KICAgICAgICAgICAgICA8YS1mb3JtLWl0ZW0gbGFiZWw9Imljb24iPgogICAgICAgICAgICAgICAgPGEtc3dpdGNoCiAgICAgICAgICAgICAgICAgIHYtbW9kZWw6Y2hlY2tlZD0icHJvcGRhdGEuaWNvbiIKICAgICAgICAgICAgICAgICAgY2hlY2tlZC1jaGlsZHJlbj0i5byAIgogICAgICAgICAgICAgICAgICB1bi1jaGVja2VkLWNoaWxkcmVuPSLlhbMiCiAgICAgICAgICAgICAgICAvPgogICAgICAgICAgICAgIDwvYS1mb3JtLWl0ZW0+CiAgICAgICAgICAgIDwvYS1jb2w+CiAgICAgICAgICA8L2Etcm93PgogICAgICAgIDwvYS1mb3JtPgogICAgICA8L3NlY3Rpb24+CiAgICA8L3NlY3Rpb24+CiAgPC9zZWN0aW9uPgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYsIHdhdGNoLCBpbmplY3QsIG9uTW91bnRlZCB9IGZyb20gJ3Z1ZSc7CmltcG9ydCB7IEhvbWVPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLXZ1ZSc7CmltcG9ydCB0cnlkZW1vIGZyb20gJy4uLy4uL191dGlsL3RyeWRlbW8nOwoKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBjb21wb25lbnRzOiB7CiAgICBIb21lT3V0bGluZWQsCiAgfSwKICBtaXhpbnM6IFt0cnlkZW1vXSwKICBzZXR1cChwcm9wcykgewogICAgLy8gLy8g5YaF572u5a2X5q61CiAgICBjb25zdCBkZW1vY29kZSA9IHJlZignJyk7CgogICAgY29uc3QgcHJvcGRhdGEgPSByZWYoewogICAgICBpY29uOiBmYWxzZSwKICAgICAgc3VibWVudTogZmFsc2UsCiAgICB9KTsKCiAgICBjb25zdCBkZWZhdWx0VmFsID0geyAuLi5wcm9wZGF0YS52YWx1ZSB9OwoKICAgIGNvbnN0IHJlbmRlckNvZGUgPSBwcm9wZGF0YSA9PiB7CiAgICAgIGxldCBwcm9wc3ZhbCA9ICcnOwogICAgICBsZXQgc2NyaXB0Y29kZSA9ICcnOwogICAgICBmb3IgKGxldCBrZXkgaW4gcHJvcGRhdGEpIHsKICAgICAgICBpZiAoa2V5ID09PSAnaWNvbicpIHsKICAgICAgICAgIHByb3BkYXRhW2tleV0gJiYKICAgICAgICAgICAgKHNjcmlwdGNvZGUgPSBgCiAgICAgICAgPHNjcmlwdD4KICAgICAgICBpbXBvcnQgeyBIb21lT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy12dWUnOwogICAgICAgIGV4cG9ydCBkZWZhdWx0IHsKICAgICAgICAgIGNvbXBvbmVudHM6IHsKICAgICAgICAgICAgSG9tZU91dGxpbmVkLAogICAgICAgICAgfSwKICAgICAgICB9CiAgICAgICAgPFwvc2NyaXB0PmApOwogICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnc3VibWVudScgJiYgcHJvcGRhdGFbJ3N1Ym1lbnUnXSkgewogICAgICAgICAgcHJvcHN2YWwgPSBgCiAgICAgICAgICAgICAgPHRlbXBsYXRlICNvdmVybGF5PgogICAgICAgICAgICAgIDxhLW1lbnU+CiAgICAgICAgICAgICAgPGEtbWVudS1pdGVtPjxhIHRhcmdldD0iX2JsYW5rIiByZWw9Im5vb3BlbmVyIG5vcmVmZXJyZXIiIGhyZWY9Imh0dHA6Ly93d3cuYWxpcGF5LmNvbS8iPkdlbmVyYWw8L2E+PC9hLW1lbnUtaXRlbT4KICAgICAgICAgICAgICA8YS1tZW51LWl0ZW0+PGEgdGFyZ2V0PSJfYmxhbmsiIHJlbD0ibm9vcGVuZXIgbm9yZWZlcnJlciIgaHJlZj0iaHR0cDovL3d3dy50YW9iYW8uY29tLyI+TGF5b3V0PC9hPjwvYS1tZW51LWl0ZW0+CiAgICAgICAgICAgICAgPGEtbWVudS1pdGVtPjxhIHRhcmdldD0iX2JsYW5rIiByZWw9Im5vb3BlbmVyIG5vcmVmZXJyZXIiIGhyZWY9Imh0dHA6Ly93d3cudG1hbGwuY29tLyI+TmF2aWdhdGlvbjwvYT48L2EtbWVudS1pdGVtPgogICAgICAgICAgICAgIDwvYS1tZW51PgogICAgICAgICAgICAgIDwvdGVtcGxhdGU+YDsKICAgICAgICB9CiAgICAgIH0KICAgICAgY29uc29sZS5sb2coJ3Byb3BzdmFsJywgcHJvcHN2YWwpOwogICAgICBjb25zdCByZW5kZXJJdGVtID0gdmFsID0+IHsKICAgICAgICByZXR1cm4gcHJvcGRhdGFbJ2ljb24nXSA/IGA8aG9tZS1vdXRsaW5lZCAvPjxzcGFuPiR7dmFsfTwvc3Bhbj5gIDogdmFsOwogICAgICB9OwogICAgICByZXR1cm4gYDx0ZW1wbGF0ZT4KICAgICAgICAgIDxhLWJyZWFkY3J1bWI+CiAgICAgICAgICAgIDxhLWJyZWFkY3J1bWItaXRlbT4ke3JlbmRlckl0ZW0oJ0hvbWUnKX08L2EtYnJlYWRjcnVtYi1pdGVtPgogICAgICAgICAgICA8YS1icmVhZGNydW1iLWl0ZW0+CiAgICAgICAgICAgICAgJHtyZW5kZXJJdGVtKCdBcHBsaWNhdGlvbiBDZW50ZXInKX0ke3Byb3BzdmFsfQogICAgICAgICAgICA8L2EtYnJlYWRjcnVtYi1pdGVtPgogICAgICAgICAgICA8YS1icmVhZGNydW1iLWl0ZW0+PGEgaHJlZj0iIj4ke3JlbmRlckl0ZW0oJ0FwcGxpY2F0aW9uIExpc3QnKX08L2E+PC9hLWJyZWFkY3J1bWItaXRlbT4KICAgICAgICAgICAgPGEtYnJlYWRjcnVtYi1pdGVtPiR7cmVuZGVySXRlbSgnQW4gQXBwbGljYXRpb24nKX08L2EtYnJlYWRjcnVtYi1pdGVtPgogICAgICAgICAgPC9hLWJyZWFkY3J1bWI+CiAgICAgICAgPC90ZW1wbGF0ZT4KICAgICAgICAke3NjcmlwdGNvZGV9YC5yZXBsYWNlKC8gezh9L2csICcnKTsKICAgIH07CgogICAgb25Nb3VudGVkKCgpID0+IHsKICAgICAgZGVtb2NvZGUudmFsdWUgPSByZW5kZXJDb2RlKHByb3BkYXRhLnZhbHVlKTsKICAgIH0pOwoKICAgIHdhdGNoKAogICAgICBwcm9wZGF0YSwKICAgICAgZGF0YSA9PiB7CiAgICAgICAgZGVtb2NvZGUudmFsdWUgPSByZW5kZXJDb2RlKGRhdGEpOwogICAgICB9LAogICAgICB7CiAgICAgICAgZGVlcDogdHJ1ZSwKICAgICAgfSwKICAgICk7CgogICAgLy8g6YeN572u5pa55rOV5Zu65a6a5a2X5q61CiAgICBjb25zdCByZXNldEl0ZW0gPSAoKSA9PiB7CiAgICAgIHByb3BkYXRhLnZhbHVlID0geyAuLi5kZWZhdWx0VmFsIH07CiAgICB9OwoKICAgIHJldHVybiB7CiAgICAgIGRlbW9jb2RlLAogICAgICByZXNldEl0ZW0sCiAgICAgIHByb3BkYXRhLAogICAgICBsYWJlbENvbDogeyBzdHlsZTogeyB3aWR0aDogJzgwcHgnIH0gfSwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxzZWN0aW9uPgogICAgPHNlY3Rpb24gY2xhc3M9ImNvZGUtYm94LWRlbW8tdHJ5Ij4KICAgICAgPGEtYnJlYWRjcnVtYj4KICAgICAgICA8YS1icmVhZGNydW1iLWl0ZW0+CiAgICAgICAgICA8aG9tZS1vdXRsaW5lZCB2LWlmPSJwcm9wZGF0YS5pY29uIiAvPgogICAgICAgICAgPHNwYW4+SG9tZTwvc3Bhbj4KICAgICAgICA8L2EtYnJlYWRjcnVtYi1pdGVtPgogICAgICAgIDxhLWJyZWFkY3J1bWItaXRlbT4KICAgICAgICAgIDxob21lLW91dGxpbmVkIHYtaWY9InByb3BkYXRhLmljb24iIC8+CiAgICAgICAgICA8c3Bhbj5BcHBsaWNhdGlvbiBDZW50ZXI8L3NwYW4+CiAgICAgICAgICA8dGVtcGxhdGUgdi1pZj0icHJvcGRhdGEuc3VibWVudSIgI292ZXJsYXk+CiAgICAgICAgICAgIDxhLW1lbnU+CiAgICAgICAgICAgICAgPGEtbWVudS1pdGVtPgogICAgICAgICAgICAgICAgPGEgdGFyZ2V0PSJfYmxhbmsiIHJlbD0ibm9vcGVuZXIgbm9yZWZlcnJlciIgaHJlZj0iaHR0cDovL3d3dy5hbGlwYXkuY29tLyI+CiAgICAgICAgICAgICAgICAgIEdlbmVyYWwKICAgICAgICAgICAgICAgIDwvYT4KICAgICAgICAgICAgICA8L2EtbWVudS1pdGVtPgogICAgICAgICAgICAgIDxhLW1lbnUtaXRlbT4KICAgICAgICAgICAgICAgIDxhIHRhcmdldD0iX2JsYW5rIiByZWw9Im5vb3BlbmVyIG5vcmVmZXJyZXIiIGhyZWY9Imh0dHA6Ly93d3cudGFvYmFvLmNvbS8iPgogICAgICAgICAgICAgICAgICBMYXlvdXQKICAgICAgICAgICAgICAgIDwvYT4KICAgICAgICAgICAgICA8L2EtbWVudS1pdGVtPgogICAgICAgICAgICAgIDxhLW1lbnUtaXRlbT4KICAgICAgICAgICAgICAgIDxhIHRhcmdldD0iX2JsYW5rIiByZWw9Im5vb3BlbmVyIG5vcmVmZXJyZXIiIGhyZWY9Imh0dHA6Ly93d3cudG1hbGwuY29tLyI+CiAgICAgICAgICAgICAgICAgIE5hdmlnYXRpb24KICAgICAgICAgICAgICAgIDwvYT4KICAgICAgICAgICAgICA8L2EtbWVudS1pdGVtPgogICAgICAgICAgICA8L2EtbWVudT4KICAgICAgICAgIDwvdGVtcGxhdGU+CiAgICAgICAgPC9hLWJyZWFkY3J1bWItaXRlbT4KICAgICAgICA8YS1icmVhZGNydW1iLWl0ZW0+CiAgICAgICAgICA8YSBocmVmPSIiPjxob21lLW91dGxpbmVkIHYtaWY9InByb3BkYXRhLmljb24iIHN0eWxlPSJtYXJnaW4tcmlnaHQ6IDNweCIvPjxzcGFuPkFwcGxpY2F0aW9uIExpc3Q8L3NwYW4+PC9hPgogICAgICAgIDwvYS1icmVhZGNydW1iLWl0ZW0+CiAgICAgICAgPGEtYnJlYWRjcnVtYi1pdGVtPgogICAgICAgICAgPGhvbWUtb3V0bGluZWQgdi1pZj0icHJvcGRhdGEuaWNvbiIgLz4KICAgICAgICAgIDxzcGFuPkFuIEFwcGxpY2F0aW9uPC9zcGFuPgogICAgICAgIDwvYS1icmVhZGNydW1iLWl0ZW0+CiAgICAgIDwvYS1icmVhZGNydW1iPgogICAgPC9zZWN0aW9uPgogICAgPHNlY3Rpb24gY2xhc3M9ImNvZGUtYm94LW1ldGEgbWFya2Rvd24iPgogICAgICA8c2VjdGlvbiBjbGFzcz0iY29kZS1ib3gtdGl0bGUiPnt7IGRlbW90aXRsZSB9fTwvc2VjdGlvbj4KICAgICAgPHNlY3Rpb24gY2xhc3M9ImNvZGUtYm94LWRlc2NyaXB0aW9uIj4KICAgICAgICA8YS1mb3JtIDpsYWJlbC1jb2w9ImxhYmVsQ29sIj4KICAgICAgICAgIDxhLXJvdz4KICAgICAgICAgICAgPGEtY29sIHNwYW49IjgiPgogICAgICAgICAgICAgIDxhLWZvcm0taXRlbSBsYWJlbD0iaGFzTWVudSI+CiAgICAgICAgICAgICAgICA8YS1zd2l0Y2gKICAgICAgICAgICAgICAgICAgdi1tb2RlbDpjaGVja2VkPSJwcm9wZGF0YS5zdWJtZW51IgogICAgICAgICAgICAgICAgICBjaGVja2VkLWNoaWxkcmVuPSLlvIAiCiAgICAgICAgICAgICAgICAgIHVuLWNoZWNrZWQtY2hpbGRyZW49IuWFsyIKICAgICAgICAgICAgICAgIC8+CiAgICAgICAgICAgICAgPC9hLWZvcm0taXRlbT4KICAgICAgICAgICAgPC9hLWNvbD4KCiAgICAgICAgICAgIDxhLWNvbCBzcGFuPSI4Ij4KICAgICAgICAgICAgICA8YS1mb3JtLWl0ZW0gbGFiZWw9Imljb24iPgogICAgICAgICAgICAgICAgPGEtc3dpdGNoCiAgICAgICAgICAgICAgICAgIHYtbW9kZWw6Y2hlY2tlZD0icHJvcGRhdGEuaWNvbiIKICAgICAgICAgICAgICAgICAgY2hlY2tlZC1jaGlsZHJlbj0i5byAIgogICAgICAgICAgICAgICAgICB1bi1jaGVja2VkLWNoaWxkcmVuPSLlhbMiCiAgICAgICAgICAgICAgICAvPgogICAgICAgICAgICAgIDwvYS1mb3JtLWl0ZW0+CiAgICAgICAgICAgIDwvYS1jb2w+CiAgICAgICAgICA8L2Etcm93PgogICAgICAgIDwvYS1mb3JtPgogICAgICA8L3NlY3Rpb24+CiAgICA8L3NlY3Rpb24+CiAgPC9zZWN0aW9uPgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiwgd2F0Y2gsIG9uTW91bnRlZCB9IGZyb20gJ3Z1ZSc7CmltcG9ydCB7IEhvbWVPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLXZ1ZSc7CmltcG9ydCB0cnlkZW1vIGZyb20gJy4uLy4uL191dGlsL3RyeWRlbW8nOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIGNvbXBvbmVudHM6IHsKICAgIEhvbWVPdXRsaW5lZCwKICB9LAogIG1peGluczogW3RyeWRlbW9dLAogIHNldHVwKHByb3BzKSB7CiAgICAvLyAvLyDlhoXnva7lrZfmrrUKICAgIGNvbnN0IGRlbW9jb2RlID0gcmVmKCcnKTsKICAgIGNvbnN0IHByb3BkYXRhID0gcmVmKHsKICAgICAgaWNvbjogZmFsc2UsCiAgICAgIHN1Ym1lbnU6IGZhbHNlLAogICAgfSk7CiAgICBjb25zdCBkZWZhdWx0VmFsID0gewogICAgICAuLi5wcm9wZGF0YS52YWx1ZSwKICAgIH07CiAgICBjb25zdCByZW5kZXJDb2RlID0gcHJvcGRhdGEgPT4gewogICAgICBsZXQgcHJvcHN2YWwgPSAnJzsKICAgICAgbGV0IHNjcmlwdGNvZGUgPSAnJzsKICAgICAgZm9yIChsZXQga2V5IGluIHByb3BkYXRhKSB7CiAgICAgICAgaWYgKGtleSA9PT0gJ2ljb24nKSB7CiAgICAgICAgICBwcm9wZGF0YVtrZXldICYmIChzY3JpcHRjb2RlID0gYAogICAgICAgIDxzY3JpcHQ+CiAgICAgICAgaW1wb3J0IHsgSG9tZU91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMtdnVlJzsKICAgICAgICBleHBvcnQgZGVmYXVsdCB7CiAgICAgICAgICBjb21wb25lbnRzOiB7CiAgICAgICAgICAgIEhvbWVPdXRsaW5lZCwKICAgICAgICAgIH0sCiAgICAgICAgfQogICAgICAgIDxcL3NjcmlwdD5gKTsKICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3N1Ym1lbnUnICYmIHByb3BkYXRhWydzdWJtZW51J10pIHsKICAgICAgICAgIHByb3BzdmFsID0gYAogICAgICAgICAgICAgIDx0ZW1wbGF0ZSAjb3ZlcmxheT4KICAgICAgICAgICAgICA8YS1tZW51PgogICAgICAgICAgICAgIDxhLW1lbnUtaXRlbT48YSB0YXJnZXQ9Il9ibGFuayIgcmVsPSJub29wZW5lciBub3JlZmVycmVyIiBocmVmPSJodHRwOi8vd3d3LmFsaXBheS5jb20vIj5HZW5lcmFsPC9hPjwvYS1tZW51LWl0ZW0+CiAgICAgICAgICAgICAgPGEtbWVudS1pdGVtPjxhIHRhcmdldD0iX2JsYW5rIiByZWw9Im5vb3BlbmVyIG5vcmVmZXJyZXIiIGhyZWY9Imh0dHA6Ly93d3cudGFvYmFvLmNvbS8iPkxheW91dDwvYT48L2EtbWVudS1pdGVtPgogICAgICAgICAgICAgIDxhLW1lbnUtaXRlbT48YSB0YXJnZXQ9Il9ibGFuayIgcmVsPSJub29wZW5lciBub3JlZmVycmVyIiBocmVmPSJodHRwOi8vd3d3LnRtYWxsLmNvbS8iPk5hdmlnYXRpb248L2E+PC9hLW1lbnUtaXRlbT4KICAgICAgICAgICAgICA8L2EtbWVudT4KICAgICAgICAgICAgICA8L3RlbXBsYXRlPmA7CiAgICAgICAgfQogICAgICB9CiAgICAgIGNvbnNvbGUubG9nKCdwcm9wc3ZhbCcsIHByb3BzdmFsKTsKICAgICAgY29uc3QgcmVuZGVySXRlbSA9IHZhbCA9PiB7CiAgICAgICAgcmV0dXJuIHByb3BkYXRhWydpY29uJ10gPyBgPGhvbWUtb3V0bGluZWQgLz48c3Bhbj4ke3ZhbH08L3NwYW4+YCA6IHZhbDsKICAgICAgfTsKICAgICAgcmV0dXJuIGA8dGVtcGxhdGU+CiAgICAgICAgICA8YS1icmVhZGNydW1iPgogICAgICAgICAgICA8YS1icmVhZGNydW1iLWl0ZW0+JHtyZW5kZXJJdGVtKCdIb21lJyl9PC9hLWJyZWFkY3J1bWItaXRlbT4KICAgICAgICAgICAgPGEtYnJlYWRjcnVtYi1pdGVtPgogICAgICAgICAgICAgICR7cmVuZGVySXRlbSgnQXBwbGljYXRpb24gQ2VudGVyJyl9JHtwcm9wc3ZhbH0KICAgICAgICAgICAgPC9hLWJyZWFkY3J1bWItaXRlbT4KICAgICAgICAgICAgPGEtYnJlYWRjcnVtYi1pdGVtPjxhIGhyZWY9IiI+JHtyZW5kZXJJdGVtKCdBcHBsaWNhdGlvbiBMaXN0Jyl9PC9hPjwvYS1icmVhZGNydW1iLWl0ZW0+CiAgICAgICAgICAgIDxhLWJyZWFkY3J1bWItaXRlbT4ke3JlbmRlckl0ZW0oJ0FuIEFwcGxpY2F0aW9uJyl9PC9hLWJyZWFkY3J1bWItaXRlbT4KICAgICAgICAgIDwvYS1icmVhZGNydW1iPgogICAgICAgIDwvdGVtcGxhdGU+CiAgICAgICAgJHtzY3JpcHRjb2RlfWAucmVwbGFjZSgvIHs4fS9nLCAnJyk7CiAgICB9OwogICAgb25Nb3VudGVkKCgpID0+IHsKICAgICAgZGVtb2NvZGUudmFsdWUgPSByZW5kZXJDb2RlKHByb3BkYXRhLnZhbHVlKTsKICAgIH0pOwogICAgd2F0Y2gocHJvcGRhdGEsIGRhdGEgPT4gewogICAgICBkZW1vY29kZS52YWx1ZSA9IHJlbmRlckNvZGUoZGF0YSk7CiAgICB9LCB7CiAgICAgIGRlZXA6IHRydWUsCiAgICB9KTsKCiAgICAvLyDph43nva7mlrnms5Xlm7rlrprlrZfmrrUKICAgIGNvbnN0IHJlc2V0SXRlbSA9ICgpID0+IHsKICAgICAgcHJvcGRhdGEudmFsdWUgPSB7CiAgICAgICAgLi4uZGVmYXVsdFZhbCwKICAgICAgfTsKICAgIH07CiAgICByZXR1cm4gewogICAgICBkZW1vY29kZSwKICAgICAgcmVzZXRJdGVtLAogICAgICBwcm9wZGF0YSwKICAgICAgbGFiZWxDb2w6IHsKICAgICAgICBzdHlsZTogewogICAgICAgICAgd2lkdGg6ICc4MHB4JywKICAgICAgICB9LAogICAgICB9LAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+",isdemo:1}},{default:s(()=>[t(P,{jsfiddle:{demo:1,order:-1,title:{"zh-CN":"\u5728\u7EBF\u6F14\u793A","en-US":"Online Demo"},relativePath:"components/breadcrumb/demo/try.vue"},code:o.democode,onChangeDemo:o.changeDemo},{default:s(()=>[n("section",null,[n("section",O,[t(d,null,{default:s(()=>[t(i,null,{default:s(()=>[o.propdata.icon?(k(),I(l,{key:0})):y("",!0),M]),_:1}),t(i,null,S({default:s(()=>[o.propdata.icon?(k(),I(l,{key:0})):y("",!0),nn]),_:2},[o.propdata.submenu?{name:"overlay",fn:s(()=>[t(g,null,{default:s(()=>[t(m,null,{default:s(()=>[an]),_:1}),t(m,null,{default:s(()=>[sn]),_:1}),t(m,null,{default:s(()=>[tn]),_:1})]),_:1})]),key:"0"}:void 0]),1024),t(i,null,{default:s(()=>[n("a",en,[o.propdata.icon?(k(),I(l,{key:0,style:{"margin-right":"3px"}})):y("",!0),pn])]),_:1}),t(i,null,{default:s(()=>[o.propdata.icon?(k(),I(l,{key:0})):y("",!0),on]),_:1})]),_:1})]),n("section",cn,[n("section",ln,Z(o.demotitle),1),n("section",un,[t(J,{"label-col":o.labelCol},{default:s(()=>[t(f,null,{default:s(()=>[t(W,{span:"8"},{default:s(()=>[t(h,{label:"hasMenu"},{default:s(()=>[t(A,{checked:o.propdata.submenu,"onUpdate:checked":u[0]||(u[0]=G=>o.propdata.submenu=G),"checked-children":"\u5F00","un-checked-children":"\u5173"},null,8,["checked"])]),_:1})]),_:1}),t(W,{span:"8"},{default:s(()=>[t(h,{label:"icon"},{default:s(()=>[t(A,{checked:o.propdata.icon,"onUpdate:checked":u[1]||(u[1]=G=>o.propdata.icon=G),"checked-children":"\u5F00","un-checked-children":"\u5173"},null,8,["checked"])]),_:1})]),_:1})]),_:1})]),_:1},8,["label-col"])])])])]),_:1},8,["jsfiddle","code","onChangeDemo"])]),_:1},8,["jsfiddle"])}const kn=b($,[["render",rn]]),gn={},dn=n("a",{href:""},"Application Center",-1),In=n("a",{href:""},"Application List",-1),mn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a("Home"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Application Center"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Application List"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a("An Application"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),Cn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a("Home"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Application Center"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Application List"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a("An Application"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function bn(o,u){const p=e("a-breadcrumb-item"),c=e("a-breadcrumb"),r=e("demo-box");return k(),I(r,{jsfiddle:{us:"The simplest use.",cn:"\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>The simplest use.</p>
`,order:0,title:{"zh-CN":"\u57FA\u672C","en-US":"Basic Usage"},relativePath:"components/breadcrumb/demo/basic.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWJyZWFkY3J1bWI+CiAgICA8YS1icmVhZGNydW1iLWl0ZW0+SG9tZTwvYS1icmVhZGNydW1iLWl0ZW0+CiAgICA8YS1icmVhZGNydW1iLWl0ZW0+PGEgaHJlZj0iIj5BcHBsaWNhdGlvbiBDZW50ZXI8L2E+PC9hLWJyZWFkY3J1bWItaXRlbT4KICAgIDxhLWJyZWFkY3J1bWItaXRlbT48YSBocmVmPSIiPkFwcGxpY2F0aW9uIExpc3Q8L2E+PC9hLWJyZWFkY3J1bWItaXRlbT4KICAgIDxhLWJyZWFkY3J1bWItaXRlbT5BbiBBcHBsaWNhdGlvbjwvYS1icmVhZGNydW1iLWl0ZW0+CiAgPC9hLWJyZWFkY3J1bWI+CjwvdGVtcGxhdGU+CgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWJyZWFkY3J1bWI+CiAgICA8YS1icmVhZGNydW1iLWl0ZW0+SG9tZTwvYS1icmVhZGNydW1iLWl0ZW0+CiAgICA8YS1icmVhZGNydW1iLWl0ZW0+PGEgaHJlZj0iIj5BcHBsaWNhdGlvbiBDZW50ZXI8L2E+PC9hLWJyZWFkY3J1bWItaXRlbT4KICAgIDxhLWJyZWFkY3J1bWItaXRlbT48YSBocmVmPSIiPkFwcGxpY2F0aW9uIExpc3Q8L2E+PC9hLWJyZWFkY3J1bWItaXRlbT4KICAgIDxhLWJyZWFkY3J1bWItaXRlbT5BbiBBcHBsaWNhdGlvbjwvYS1icmVhZGNydW1iLWl0ZW0+CiAgPC9hLWJyZWFkY3J1bWI+CjwvdGVtcGxhdGU+",isdemo:!1}},{default:s(()=>[t(c,null,{default:s(()=>[t(p,null,{default:s(()=>[a("Home")]),_:1}),t(p,null,{default:s(()=>[dn]),_:1}),t(p,null,{default:s(()=>[In]),_:1}),t(p,null,{default:s(()=>[a("An Application")]),_:1})]),_:1})]),htmlCode:s(()=>[mn]),jsVersionHtml:s(()=>[Cn]),_:1},8,["jsfiddle"])}const An=b(gn,[["render",bn]]),hn={},Wn=n("a",{href:""},"Component",-1),yn=n("a",{href:""},"General",-1),Zn=n("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.alipay.com/"},"General",-1),Yn=n("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.taobao.com/"},"Layout",-1),Gn=n("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.tmall.com/"},"Navigation",-1),vn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a("Ant Design Vue"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Component"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("General"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-menu")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-menu-item")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a")]),a(),n("span",{class:"token attr-name"},"target"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("_blank"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("noopener noreferrer"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("http://www.alipay.com/"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("General"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-menu-item")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-menu-item")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a")]),a(),n("span",{class:"token attr-name"},"target"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("_blank"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("noopener noreferrer"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("http://www.taobao.com/"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Layout"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-menu-item")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-menu-item")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a")]),a(),n("span",{class:"token attr-name"},"target"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("_blank"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("noopener noreferrer"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("http://www.tmall.com/"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Navigation"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-menu-item")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-menu")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a("Button"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),Vn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a("Ant Design Vue"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Component"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("General"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#overlay"),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-menu")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-menu-item")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a")]),a(),n("span",{class:"token attr-name"},"target"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("_blank"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("noopener noreferrer"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("http://www.alipay.com/"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("General"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-menu-item")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-menu-item")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a")]),a(),n("span",{class:"token attr-name"},"target"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("_blank"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("noopener noreferrer"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("http://www.taobao.com/"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Layout"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-menu-item")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-menu-item")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a")]),a(),n("span",{class:"token attr-name"},"target"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("_blank"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("noopener noreferrer"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("http://www.tmall.com/"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Navigation"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-menu-item")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-menu")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a("Button"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function wn(o,u){const p=e("a-breadcrumb-item"),c=e("a-menu-item"),r=e("a-menu"),C=e("a-breadcrumb"),l=e("demo-box");return k(),I(l,{jsfiddle:{us:"Breadcrumbs support drop down menu.",cn:"\u9762\u5305\u5C51\u652F\u6301\u4E0B\u62C9\u83DC\u5355\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u9762\u5305\u5C51\u652F\u6301\u4E0B\u62C9\u83DC\u5355\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Breadcrumbs support drop down menu.</p>
`,order:5,title:{"zh-CN":"\u5E26\u4E0B\u62C9\u83DC\u5355\u7684\u9762\u5305\u5C51","en-US":"Bread crumbs with drop down menu"},relativePath:"components/breadcrumb/demo/overlay.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWJyZWFkY3J1bWI+CiAgICA8YS1icmVhZGNydW1iLWl0ZW0+QW50IERlc2lnbiBWdWU8L2EtYnJlYWRjcnVtYi1pdGVtPgogICAgPGEtYnJlYWRjcnVtYi1pdGVtPjxhIGhyZWY9IiI+Q29tcG9uZW50PC9hPjwvYS1icmVhZGNydW1iLWl0ZW0+CiAgICA8YS1icmVhZGNydW1iLWl0ZW0+CiAgICAgIDxhIGhyZWY9IiI+R2VuZXJhbDwvYT4KICAgICAgPHRlbXBsYXRlICNvdmVybGF5PgogICAgICAgIDxhLW1lbnU+CiAgICAgICAgICA8YS1tZW51LWl0ZW0+CiAgICAgICAgICAgIDxhIHRhcmdldD0iX2JsYW5rIiByZWw9Im5vb3BlbmVyIG5vcmVmZXJyZXIiIGhyZWY9Imh0dHA6Ly93d3cuYWxpcGF5LmNvbS8iPkdlbmVyYWw8L2E+CiAgICAgICAgICA8L2EtbWVudS1pdGVtPgogICAgICAgICAgPGEtbWVudS1pdGVtPgogICAgICAgICAgICA8YSB0YXJnZXQ9Il9ibGFuayIgcmVsPSJub29wZW5lciBub3JlZmVycmVyIiBocmVmPSJodHRwOi8vd3d3LnRhb2Jhby5jb20vIj5MYXlvdXQ8L2E+CiAgICAgICAgICA8L2EtbWVudS1pdGVtPgogICAgICAgICAgPGEtbWVudS1pdGVtPgogICAgICAgICAgICA8YSB0YXJnZXQ9Il9ibGFuayIgcmVsPSJub29wZW5lciBub3JlZmVycmVyIiBocmVmPSJodHRwOi8vd3d3LnRtYWxsLmNvbS8iPk5hdmlnYXRpb248L2E+CiAgICAgICAgICA8L2EtbWVudS1pdGVtPgogICAgICAgIDwvYS1tZW51PgogICAgICA8L3RlbXBsYXRlPgogICAgPC9hLWJyZWFkY3J1bWItaXRlbT4KICAgIDxhLWJyZWFkY3J1bWItaXRlbT5CdXR0b248L2EtYnJlYWRjcnVtYi1pdGVtPgogIDwvYS1icmVhZGNydW1iPgo8L3RlbXBsYXRlPgoKCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWJyZWFkY3J1bWI+CiAgICA8YS1icmVhZGNydW1iLWl0ZW0+QW50IERlc2lnbiBWdWU8L2EtYnJlYWRjcnVtYi1pdGVtPgogICAgPGEtYnJlYWRjcnVtYi1pdGVtPjxhIGhyZWY9IiI+Q29tcG9uZW50PC9hPjwvYS1icmVhZGNydW1iLWl0ZW0+CiAgICA8YS1icmVhZGNydW1iLWl0ZW0+CiAgICAgIDxhIGhyZWY9IiI+R2VuZXJhbDwvYT4KICAgICAgPHRlbXBsYXRlICNvdmVybGF5PgogICAgICAgIDxhLW1lbnU+CiAgICAgICAgICA8YS1tZW51LWl0ZW0+CiAgICAgICAgICAgIDxhIHRhcmdldD0iX2JsYW5rIiByZWw9Im5vb3BlbmVyIG5vcmVmZXJyZXIiIGhyZWY9Imh0dHA6Ly93d3cuYWxpcGF5LmNvbS8iPkdlbmVyYWw8L2E+CiAgICAgICAgICA8L2EtbWVudS1pdGVtPgogICAgICAgICAgPGEtbWVudS1pdGVtPgogICAgICAgICAgICA8YSB0YXJnZXQ9Il9ibGFuayIgcmVsPSJub29wZW5lciBub3JlZmVycmVyIiBocmVmPSJodHRwOi8vd3d3LnRhb2Jhby5jb20vIj5MYXlvdXQ8L2E+CiAgICAgICAgICA8L2EtbWVudS1pdGVtPgogICAgICAgICAgPGEtbWVudS1pdGVtPgogICAgICAgICAgICA8YSB0YXJnZXQ9Il9ibGFuayIgcmVsPSJub29wZW5lciBub3JlZmVycmVyIiBocmVmPSJodHRwOi8vd3d3LnRtYWxsLmNvbS8iPk5hdmlnYXRpb248L2E+CiAgICAgICAgICA8L2EtbWVudS1pdGVtPgogICAgICAgIDwvYS1tZW51PgogICAgICA8L3RlbXBsYXRlPgogICAgPC9hLWJyZWFkY3J1bWItaXRlbT4KICAgIDxhLWJyZWFkY3J1bWItaXRlbT5CdXR0b248L2EtYnJlYWRjcnVtYi1pdGVtPgogIDwvYS1icmVhZGNydW1iPgo8L3RlbXBsYXRlPg==",isdemo:!1}},{default:s(()=>[t(C,null,{default:s(()=>[t(p,null,{default:s(()=>[a("Ant Design Vue")]),_:1}),t(p,null,{default:s(()=>[Wn]),_:1}),t(p,null,{overlay:s(()=>[t(r,null,{default:s(()=>[t(c,null,{default:s(()=>[Zn]),_:1}),t(c,null,{default:s(()=>[Yn]),_:1}),t(c,null,{default:s(()=>[Gn]),_:1})]),_:1})]),default:s(()=>[yn]),_:1}),t(p,null,{default:s(()=>[a("Button")]),_:1})]),_:1})]),htmlCode:s(()=>[vn]),jsVersionHtml:s(()=>[Vn]),_:1},8,["jsfiddle"])}const Bn=b(hn,[["render",wn]]),fn=Y({setup(){return{basePath:"/components/breadcrumb",routes:v([{path:"index",breadcrumbName:"home"},{path:"first",breadcrumbName:"first",children:[{path:"/design",breadcrumbName:"Design"},{path:"/general",breadcrumbName:"General"},{path:"/layout",breadcrumbName:"Layout"},{path:"/navigation",breadcrumbName:"Navigation"}]},{path:"second",breadcrumbName:"second"}])}}}),Jn={key:0},Pn=n("br",null,null,-1),Ln=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb")]),a(),n("span",{class:"token attr-name"},":routes"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("routes"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#itemRender"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{ route, paths }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("routes.indexOf(route) === routes.length - 1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          {{ route.breadcrumbName }}
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("router-link")]),a(),n("span",{class:"token attr-name"},"v-else"),a(),n("span",{class:"token attr-name"},":to"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("`${basePath}/${paths.join('/')}`"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          {{ route.breadcrumbName }}
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("router-link")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    {{ $route.path }}
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"interface"),a(),n("span",{class:"token class-name"},"Route"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token literal-property property"},"breadcrumbName"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},";"),a(`
  children`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(" Array"),n("span",{class:"token operator"},"<"),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token literal-property property"},"breadcrumbName"),n("span",{class:"token operator"},":"),a(" string"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" routes "),n("span",{class:"token operator"},"="),a(" ref"),n("span",{class:"token operator"},"<"),a("Route"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'index'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"breadcrumbName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'home'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'first'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"breadcrumbName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'first'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'/design'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"breadcrumbName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Design'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'/general'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"breadcrumbName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'General'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'/layout'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"breadcrumbName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Layout'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'/navigation'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"breadcrumbName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Navigation'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'second'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"breadcrumbName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'second'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"basePath"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'/components/breadcrumb'"),n("span",{class:"token punctuation"},","),a(`
      routes`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),Nn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb")]),a(),n("span",{class:"token attr-name"},":routes"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("routes"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#itemRender"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{ route, paths }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("routes.indexOf(route) === routes.length - 1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          {{ route.breadcrumbName }}
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("router-link")]),a(),n("span",{class:"token attr-name"},"v-else"),a(),n("span",{class:"token attr-name"},":to"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("`${basePath}/${paths.join('/')}`"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          {{ route.breadcrumbName }}
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("router-link")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    {{ $route.path }}
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" routes "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'index'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"breadcrumbName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'home'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'first'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"breadcrumbName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'first'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'/design'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"breadcrumbName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Design'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'/general'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"breadcrumbName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'General'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'/layout'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"breadcrumbName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Layout'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'/navigation'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"breadcrumbName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Navigation'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'second'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"breadcrumbName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'second'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"basePath"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'/components/breadcrumb'"),n("span",{class:"token punctuation"},","),a(`
      routes`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function Rn(o,u,p,c,r,C){const l=e("router-link"),i=e("a-breadcrumb"),m=e("demo-box");return k(),I(m,{jsfiddle:{us:"Used together with `vue-router`",cn:"\u548C `vue-router` \u8FDB\u884C\u7ED3\u5408\u4F7F\u7528\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u548C <code>vue-router</code> \u8FDB\u884C\u7ED3\u5408\u4F7F\u7528\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Used together with <code>vue-router</code></p>
`,order:3,iframe:200,reactRouter:"react-router-dom",title:{"zh-CN":"\u5176\u5B83\u8DEF\u7531","en-US":"Other Router Integration"},relativePath:"components/breadcrumb/demo/router.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS1icmVhZGNydW1iIDpyb3V0ZXM9InJvdXRlcyI+CiAgICAgIDx0ZW1wbGF0ZSAjaXRlbVJlbmRlcj0ieyByb3V0ZSwgcGF0aHMgfSI+CiAgICAgICAgPHNwYW4gdi1pZj0icm91dGVzLmluZGV4T2Yocm91dGUpID09PSByb3V0ZXMubGVuZ3RoIC0gMSI+CiAgICAgICAgICB7eyByb3V0ZS5icmVhZGNydW1iTmFtZSB9fQogICAgICAgIDwvc3Bhbj4KICAgICAgICA8cm91dGVyLWxpbmsgdi1lbHNlIDp0bz0iYCR7YmFzZVBhdGh9LyR7cGF0aHMuam9pbignLycpfWAiPgogICAgICAgICAge3sgcm91dGUuYnJlYWRjcnVtYk5hbWUgfX0KICAgICAgICA8L3JvdXRlci1saW5rPgogICAgICA8L3RlbXBsYXRlPgogICAgPC9hLWJyZWFkY3J1bWI+CiAgICA8YnIgLz4KICAgIHt7ICRyb3V0ZS5wYXRoIH19CiAgPC9kaXY+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmludGVyZmFjZSBSb3V0ZSB7CiAgcGF0aDogc3RyaW5nOwogIGJyZWFkY3J1bWJOYW1lOiBzdHJpbmc7CiAgY2hpbGRyZW4/OiBBcnJheTx7CiAgICBwYXRoOiBzdHJpbmc7CiAgICBicmVhZGNydW1iTmFtZTogc3RyaW5nOwogIH0+Owp9CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCByb3V0ZXMgPSByZWY8Um91dGVbXT4oWwogICAgICB7CiAgICAgICAgcGF0aDogJ2luZGV4JywKICAgICAgICBicmVhZGNydW1iTmFtZTogJ2hvbWUnLAogICAgICB9LAogICAgICB7CiAgICAgICAgcGF0aDogJ2ZpcnN0JywKICAgICAgICBicmVhZGNydW1iTmFtZTogJ2ZpcnN0JywKICAgICAgICBjaGlsZHJlbjogWwogICAgICAgICAgewogICAgICAgICAgICBwYXRoOiAnL2Rlc2lnbicsCiAgICAgICAgICAgIGJyZWFkY3J1bWJOYW1lOiAnRGVzaWduJywKICAgICAgICAgIH0sCiAgICAgICAgICB7CiAgICAgICAgICAgIHBhdGg6ICcvZ2VuZXJhbCcsCiAgICAgICAgICAgIGJyZWFkY3J1bWJOYW1lOiAnR2VuZXJhbCcsCiAgICAgICAgICB9LAogICAgICAgICAgewogICAgICAgICAgICBwYXRoOiAnL2xheW91dCcsCiAgICAgICAgICAgIGJyZWFkY3J1bWJOYW1lOiAnTGF5b3V0JywKICAgICAgICAgIH0sCiAgICAgICAgICB7CiAgICAgICAgICAgIHBhdGg6ICcvbmF2aWdhdGlvbicsCiAgICAgICAgICAgIGJyZWFkY3J1bWJOYW1lOiAnTmF2aWdhdGlvbicsCiAgICAgICAgICB9LAogICAgICAgIF0sCiAgICAgIH0sCiAgICAgIHsKICAgICAgICBwYXRoOiAnc2Vjb25kJywKICAgICAgICBicmVhZGNydW1iTmFtZTogJ3NlY29uZCcsCiAgICAgIH0sCiAgICBdKTsKICAgIHJldHVybiB7CiAgICAgIGJhc2VQYXRoOiAnL2NvbXBvbmVudHMvYnJlYWRjcnVtYicsCiAgICAgIHJvdXRlcywKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS1icmVhZGNydW1iIDpyb3V0ZXM9InJvdXRlcyI+CiAgICAgIDx0ZW1wbGF0ZSAjaXRlbVJlbmRlcj0ieyByb3V0ZSwgcGF0aHMgfSI+CiAgICAgICAgPHNwYW4gdi1pZj0icm91dGVzLmluZGV4T2Yocm91dGUpID09PSByb3V0ZXMubGVuZ3RoIC0gMSI+CiAgICAgICAgICB7eyByb3V0ZS5icmVhZGNydW1iTmFtZSB9fQogICAgICAgIDwvc3Bhbj4KICAgICAgICA8cm91dGVyLWxpbmsgdi1lbHNlIDp0bz0iYCR7YmFzZVBhdGh9LyR7cGF0aHMuam9pbignLycpfWAiPgogICAgICAgICAge3sgcm91dGUuYnJlYWRjcnVtYk5hbWUgfX0KICAgICAgICA8L3JvdXRlci1saW5rPgogICAgICA8L3RlbXBsYXRlPgogICAgPC9hLWJyZWFkY3J1bWI+CiAgICA8YnIgLz4KICAgIHt7ICRyb3V0ZS5wYXRoIH19CiAgPC9kaXY+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IHJvdXRlcyA9IHJlZihbewogICAgICBwYXRoOiAnaW5kZXgnLAogICAgICBicmVhZGNydW1iTmFtZTogJ2hvbWUnLAogICAgfSwgewogICAgICBwYXRoOiAnZmlyc3QnLAogICAgICBicmVhZGNydW1iTmFtZTogJ2ZpcnN0JywKICAgICAgY2hpbGRyZW46IFt7CiAgICAgICAgcGF0aDogJy9kZXNpZ24nLAogICAgICAgIGJyZWFkY3J1bWJOYW1lOiAnRGVzaWduJywKICAgICAgfSwgewogICAgICAgIHBhdGg6ICcvZ2VuZXJhbCcsCiAgICAgICAgYnJlYWRjcnVtYk5hbWU6ICdHZW5lcmFsJywKICAgICAgfSwgewogICAgICAgIHBhdGg6ICcvbGF5b3V0JywKICAgICAgICBicmVhZGNydW1iTmFtZTogJ0xheW91dCcsCiAgICAgIH0sIHsKICAgICAgICBwYXRoOiAnL25hdmlnYXRpb24nLAogICAgICAgIGJyZWFkY3J1bWJOYW1lOiAnTmF2aWdhdGlvbicsCiAgICAgIH1dLAogICAgfSwgewogICAgICBwYXRoOiAnc2Vjb25kJywKICAgICAgYnJlYWRjcnVtYk5hbWU6ICdzZWNvbmQnLAogICAgfV0pOwogICAgcmV0dXJuIHsKICAgICAgYmFzZVBhdGg6ICcvY29tcG9uZW50cy9icmVhZGNydW1iJywKICAgICAgcm91dGVzLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+",isdemo:!1}},{default:s(()=>[n("div",null,[t(i,{routes:o.routes},{itemRender:s(({route:g,paths:d})=>[o.routes.indexOf(g)===o.routes.length-1?(k(),V("span",Jn,Z(g.breadcrumbName),1)):(k(),I(l,{key:1,to:`${o.basePath}/${d.join("/")}`},{default:s(()=>[a(Z(g.breadcrumbName),1)]),_:2},1032,["to"]))]),_:1},8,["routes"]),Pn,a(" "+Z(o.$route.path),1)])]),htmlCode:s(()=>[Ln]),jsVersionHtml:s(()=>[Nn]),_:1},8,["jsfiddle"])}const Sn=b(fn,[["render",Rn]]),Xn={},_n=n("span",{style:{color:"red"}},"/",-1),Hn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb")]),a(),n("span",{class:"token attr-name"},"separator"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("/"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a("Home"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Application Center"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Application List"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a("An Application"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#separator"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),a(" red")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a("/"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a("Home"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Application Center"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Application List"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a("An Application"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),jn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb")]),a(),n("span",{class:"token attr-name"},"separator"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("/"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a("Home"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Application Center"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Application List"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a("An Application"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#separator"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),a(" red")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a("/"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a("Home"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Application Center"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Application List"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a("An Application"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function Dn(o,u){const p=e("a-breadcrumb-item"),c=e("a-breadcrumb"),r=e("demo-box");return k(),I(r,{jsfiddle:{us:`The separator can be customized by setting the separator preperty: separator=">" or use
  slot="separator"`,cn:'\u7528` separator=">" `\u53EF\u4EE5\u81EA\u5B9A\u4E49\u5206\u9694\u7B26\uFF0C\u6216\u8005\u4F7F\u7528slot="separator"\u81EA\u5B9A\u4E49\u66F4\u590D\u6742\u7684\u5206\u9694\u7B26',docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u7528<code>separator=&quot;&gt;&quot;</code>\u53EF\u4EE5\u81EA\u5B9A\u4E49\u5206\u9694\u7B26\uFF0C\u6216\u8005\u4F7F\u7528slot=&quot;separator&quot;\u81EA\u5B9A\u4E49\u66F4\u590D\u6742\u7684\u5206\u9694\u7B26</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>The separator can be customized by setting the separator preperty: separator=&quot;&gt;&quot; or use
slot=&quot;separator&quot;</p>
`,order:4,title:{"zh-CN":"\u5206\u9694\u7B26","en-US":"Configuring the Separator"},relativePath:"components/breadcrumb/demo/separator.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWJyZWFkY3J1bWIgc2VwYXJhdG9yPSIvIj4KICAgIDxhLWJyZWFkY3J1bWItaXRlbT5Ib21lPC9hLWJyZWFkY3J1bWItaXRlbT4KICAgIDxhLWJyZWFkY3J1bWItaXRlbSBocmVmPSIiPkFwcGxpY2F0aW9uIENlbnRlcjwvYS1icmVhZGNydW1iLWl0ZW0+CiAgICA8YS1icmVhZGNydW1iLWl0ZW0gaHJlZj0iIj5BcHBsaWNhdGlvbiBMaXN0PC9hLWJyZWFkY3J1bWItaXRlbT4KICAgIDxhLWJyZWFkY3J1bWItaXRlbT5BbiBBcHBsaWNhdGlvbjwvYS1icmVhZGNydW1iLWl0ZW0+CiAgPC9hLWJyZWFkY3J1bWI+CiAgPGEtYnJlYWRjcnVtYj4KICAgIDx0ZW1wbGF0ZSAjc2VwYXJhdG9yPjxzcGFuIHN0eWxlPSJjb2xvcjogcmVkIj4vPC9zcGFuPjwvdGVtcGxhdGU+CiAgICA8YS1icmVhZGNydW1iLWl0ZW0+SG9tZTwvYS1icmVhZGNydW1iLWl0ZW0+CiAgICA8YS1icmVhZGNydW1iLWl0ZW0gaHJlZj0iIj5BcHBsaWNhdGlvbiBDZW50ZXI8L2EtYnJlYWRjcnVtYi1pdGVtPgogICAgPGEtYnJlYWRjcnVtYi1pdGVtIGhyZWY9IiI+QXBwbGljYXRpb24gTGlzdDwvYS1icmVhZGNydW1iLWl0ZW0+CiAgICA8YS1icmVhZGNydW1iLWl0ZW0+QW4gQXBwbGljYXRpb248L2EtYnJlYWRjcnVtYi1pdGVtPgogIDwvYS1icmVhZGNydW1iPgo8L3RlbXBsYXRlPgoKCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWJyZWFkY3J1bWIgc2VwYXJhdG9yPSIvIj4KICAgIDxhLWJyZWFkY3J1bWItaXRlbT5Ib21lPC9hLWJyZWFkY3J1bWItaXRlbT4KICAgIDxhLWJyZWFkY3J1bWItaXRlbSBocmVmPSIiPkFwcGxpY2F0aW9uIENlbnRlcjwvYS1icmVhZGNydW1iLWl0ZW0+CiAgICA8YS1icmVhZGNydW1iLWl0ZW0gaHJlZj0iIj5BcHBsaWNhdGlvbiBMaXN0PC9hLWJyZWFkY3J1bWItaXRlbT4KICAgIDxhLWJyZWFkY3J1bWItaXRlbT5BbiBBcHBsaWNhdGlvbjwvYS1icmVhZGNydW1iLWl0ZW0+CiAgPC9hLWJyZWFkY3J1bWI+CiAgPGEtYnJlYWRjcnVtYj4KICAgIDx0ZW1wbGF0ZSAjc2VwYXJhdG9yPjxzcGFuIHN0eWxlPSJjb2xvcjogcmVkIj4vPC9zcGFuPjwvdGVtcGxhdGU+CiAgICA8YS1icmVhZGNydW1iLWl0ZW0+SG9tZTwvYS1icmVhZGNydW1iLWl0ZW0+CiAgICA8YS1icmVhZGNydW1iLWl0ZW0gaHJlZj0iIj5BcHBsaWNhdGlvbiBDZW50ZXI8L2EtYnJlYWRjcnVtYi1pdGVtPgogICAgPGEtYnJlYWRjcnVtYi1pdGVtIGhyZWY9IiI+QXBwbGljYXRpb24gTGlzdDwvYS1icmVhZGNydW1iLWl0ZW0+CiAgICA8YS1icmVhZGNydW1iLWl0ZW0+QW4gQXBwbGljYXRpb248L2EtYnJlYWRjcnVtYi1pdGVtPgogIDwvYS1icmVhZGNydW1iPgo8L3RlbXBsYXRlPg==",isdemo:!1}},{default:s(()=>[t(c,{separator:"/"},{default:s(()=>[t(p,null,{default:s(()=>[a("Home")]),_:1}),t(p,{href:""},{default:s(()=>[a("Application Center")]),_:1}),t(p,{href:""},{default:s(()=>[a("Application List")]),_:1}),t(p,null,{default:s(()=>[a("An Application")]),_:1})]),_:1}),t(c,null,{separator:s(()=>[_n]),default:s(()=>[t(p,null,{default:s(()=>[a("Home")]),_:1}),t(p,{href:""},{default:s(()=>[a("Application Center")]),_:1}),t(p,{href:""},{default:s(()=>[a("Application List")]),_:1}),t(p,null,{default:s(()=>[a("An Application")]),_:1})]),_:1})]),htmlCode:s(()=>[Hn]),jsVersionHtml:s(()=>[jn]),_:1},8,["jsfiddle"])}const Fn=b(Xn,[["render",Dn]]),xn={},Kn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb")]),a(),n("span",{class:"token attr-name"},"separator"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a("Location"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-separator")]),n("span",{class:"token punctuation"},">")]),a(":"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-separator")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Application Center"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-separator")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Application List"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-separator")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a("An Application"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),Tn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb")]),a(),n("span",{class:"token attr-name"},"separator"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a("Location"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-separator")]),n("span",{class:"token punctuation"},">")]),a(":"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-separator")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Application Center"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-separator")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Application List"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-separator")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a("An Application"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function qn(o,u){const p=e("a-breadcrumb-item"),c=e("a-breadcrumb-separator"),r=e("a-breadcrumb"),C=e("demo-box");return k(),I(C,{jsfiddle:{us:"The separator can be customized by setting the separator property: `Breadcrumb.Separator`.",cn:"\u4F7F\u7528 `Breadcrumb.Separator` \u53EF\u4EE5\u81EA\u5B9A\u4E49\u5206\u9694\u7B26\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u4F7F\u7528 <code>Breadcrumb.Separator</code> \u53EF\u4EE5\u81EA\u5B9A\u4E49\u5206\u9694\u7B26\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>The separator can be customized by setting the separator property: <code>Breadcrumb.Separator</code>.</p>
`,order:6,title:{"zh-CN":"\u5206\u9694\u7B26","en-US":"Configuring the Separator"},relativePath:"components/breadcrumb/demo/separator-indepent.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWJyZWFkY3J1bWIgc2VwYXJhdG9yPSIiPgogICAgPGEtYnJlYWRjcnVtYi1pdGVtPkxvY2F0aW9uPC9hLWJyZWFkY3J1bWItaXRlbT4KICAgIDxhLWJyZWFkY3J1bWItc2VwYXJhdG9yPjo8L2EtYnJlYWRjcnVtYi1zZXBhcmF0b3I+CiAgICA8YS1icmVhZGNydW1iLWl0ZW0gaHJlZj0iIj5BcHBsaWNhdGlvbiBDZW50ZXI8L2EtYnJlYWRjcnVtYi1pdGVtPgogICAgPGEtYnJlYWRjcnVtYi1zZXBhcmF0b3IgLz4KICAgIDxhLWJyZWFkY3J1bWItaXRlbSBocmVmPSIiPkFwcGxpY2F0aW9uIExpc3Q8L2EtYnJlYWRjcnVtYi1pdGVtPgogICAgPGEtYnJlYWRjcnVtYi1zZXBhcmF0b3IgLz4KICAgIDxhLWJyZWFkY3J1bWItaXRlbT5BbiBBcHBsaWNhdGlvbjwvYS1icmVhZGNydW1iLWl0ZW0+CiAgPC9hLWJyZWFkY3J1bWI+CjwvdGVtcGxhdGU+CgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWJyZWFkY3J1bWIgc2VwYXJhdG9yPSIiPgogICAgPGEtYnJlYWRjcnVtYi1pdGVtPkxvY2F0aW9uPC9hLWJyZWFkY3J1bWItaXRlbT4KICAgIDxhLWJyZWFkY3J1bWItc2VwYXJhdG9yPjo8L2EtYnJlYWRjcnVtYi1zZXBhcmF0b3I+CiAgICA8YS1icmVhZGNydW1iLWl0ZW0gaHJlZj0iIj5BcHBsaWNhdGlvbiBDZW50ZXI8L2EtYnJlYWRjcnVtYi1pdGVtPgogICAgPGEtYnJlYWRjcnVtYi1zZXBhcmF0b3IgLz4KICAgIDxhLWJyZWFkY3J1bWItaXRlbSBocmVmPSIiPkFwcGxpY2F0aW9uIExpc3Q8L2EtYnJlYWRjcnVtYi1pdGVtPgogICAgPGEtYnJlYWRjcnVtYi1zZXBhcmF0b3IgLz4KICAgIDxhLWJyZWFkY3J1bWItaXRlbT5BbiBBcHBsaWNhdGlvbjwvYS1icmVhZGNydW1iLWl0ZW0+CiAgPC9hLWJyZWFkY3J1bWI+CjwvdGVtcGxhdGU+",isdemo:!1}},{default:s(()=>[t(r,{separator:""},{default:s(()=>[t(p,null,{default:s(()=>[a("Location")]),_:1}),t(c,null,{default:s(()=>[a(":")]),_:1}),t(p,{href:""},{default:s(()=>[a("Application Center")]),_:1}),t(c),t(p,{href:""},{default:s(()=>[a("Application List")]),_:1}),t(c),t(p,null,{default:s(()=>[a("An Application")]),_:1})]),_:1})]),htmlCode:s(()=>[Kn]),jsVersionHtml:s(()=>[Tn]),_:1},8,["jsfiddle"])}const En=b(xn,[["render",qn]]),zn=Y({components:{HomeOutlined:B,UserOutlined:_}}),Un=n("span",null,"Application List",-1),Qn=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("home-outlined")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("user-outlined")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),n("span",{class:"token punctuation"},">")]),a("Application List"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a("Application"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" HomeOutlined"),n("span",{class:"token punctuation"},","),a(" UserOutlined "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    HomeOutlined`),n("span",{class:"token punctuation"},","),a(`
    UserOutlined`),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1),$n=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("home-outlined")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("user-outlined")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),n("span",{class:"token punctuation"},">")]),a("Application List"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a("Application"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb-item")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-breadcrumb")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" HomeOutlined"),n("span",{class:"token punctuation"},","),a(" UserOutlined "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@ant-design/icons-vue'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
    HomeOutlined`),n("span",{class:"token punctuation"},","),a(`
    UserOutlined`),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1);function On(o,u,p,c,r,C){const l=e("home-outlined"),i=e("a-breadcrumb-item"),m=e("user-outlined"),g=e("a-breadcrumb"),d=e("demo-box");return k(),I(d,{jsfiddle:{us:"The icon should be placed in front of the text.",cn:"\u56FE\u6807\u653E\u5728\u6587\u5B57\u524D\u9762\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u56FE\u6807\u653E\u5728\u6587\u5B57\u524D\u9762\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>The icon should be placed in front of the text.</p>
`,order:1,title:{"zh-CN":"\u5E26\u6709\u56FE\u6807\u7684","en-US":"With an Icon"},relativePath:"components/breadcrumb/demo/withIcon.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWJyZWFkY3J1bWI+CiAgICA8YS1icmVhZGNydW1iLWl0ZW0gaHJlZj0iIj4KICAgICAgPGhvbWUtb3V0bGluZWQgLz4KICAgIDwvYS1icmVhZGNydW1iLWl0ZW0+CiAgICA8YS1icmVhZGNydW1iLWl0ZW0gaHJlZj0iIj4KICAgICAgPHVzZXItb3V0bGluZWQgLz4KICAgICAgPHNwYW4+QXBwbGljYXRpb24gTGlzdDwvc3Bhbj4KICAgIDwvYS1icmVhZGNydW1iLWl0ZW0+CiAgICA8YS1icmVhZGNydW1iLWl0ZW0+QXBwbGljYXRpb248L2EtYnJlYWRjcnVtYi1pdGVtPgogIDwvYS1icmVhZGNydW1iPgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJzsKaW1wb3J0IHsgSG9tZU91dGxpbmVkLCBVc2VyT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy12dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIGNvbXBvbmVudHM6IHsKICAgIEhvbWVPdXRsaW5lZCwKICAgIFVzZXJPdXRsaW5lZCwKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWJyZWFkY3J1bWI+CiAgICA8YS1icmVhZGNydW1iLWl0ZW0gaHJlZj0iIj4KICAgICAgPGhvbWUtb3V0bGluZWQgLz4KICAgIDwvYS1icmVhZGNydW1iLWl0ZW0+CiAgICA8YS1icmVhZGNydW1iLWl0ZW0gaHJlZj0iIj4KICAgICAgPHVzZXItb3V0bGluZWQgLz4KICAgICAgPHNwYW4+QXBwbGljYXRpb24gTGlzdDwvc3Bhbj4KICAgIDwvYS1icmVhZGNydW1iLWl0ZW0+CiAgICA8YS1icmVhZGNydW1iLWl0ZW0+QXBwbGljYXRpb248L2EtYnJlYWRjcnVtYi1pdGVtPgogIDwvYS1icmVhZGNydW1iPgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnOwppbXBvcnQgeyBIb21lT3V0bGluZWQsIFVzZXJPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLXZ1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgY29tcG9uZW50czogewogICAgSG9tZU91dGxpbmVkLAogICAgVXNlck91dGxpbmVkLAogIH0sCn0pOwo8L3NjcmlwdD4=",isdemo:!1}},{default:s(()=>[t(g,null,{default:s(()=>[t(i,{href:""},{default:s(()=>[t(l)]),_:1}),t(i,{href:""},{default:s(()=>[t(m),Un]),_:1}),t(i,null,{default:s(()=>[a("Application")]),_:1})]),_:1})]),htmlCode:s(()=>[Qn]),jsVersionHtml:s(()=>[$n]),_:1},8,["jsfiddle"])}const Mn=b(zn,[["render",On]]),na=Y({CN:Q,US:K,components:{Try:kn,Basic:An,Overlay:Bn,Router:Sn,Separator:Fn,SeparatorIndepent:En,WithIcon:Mn}});function aa(o,u,p,c,r,C){const l=e("try"),i=e("basic"),m=e("overlay"),g=e("router"),d=e("separator"),A=e("separator-indepent"),h=e("with-icon"),W=e("demo-sort");return k(),I(W,null,{default:s(()=>[t(l),t(i),t(m),t(g),t(d),t(A),t(h)]),_:1})}const oa=b(na,[["render",aa]]);export{oa as default};
