var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function s(t){t.parentNode.removeChild(t)}let u;function i(t){u=t}const a=[],l=[],f=[],d=[],h=Promise.resolve();let p=!1;function $(t){f.push(t)}let m=!1;const g=new Set;function b(){if(!m){m=!0;do{for(let t=0;t<a.length;t+=1){const n=a[t];i(n),y(n.$$)}for(i(null),a.length=0;l.length;)l.pop()();for(let t=0;t<f.length;t+=1){const n=f[t];g.has(n)||(g.add(n),n())}f.length=0}while(a.length);for(;d.length;)d.pop()();p=!1,m=!1,g.clear()}}function y(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach($)}}const _=new Set;function x(t,n){-1===t.$$.dirty[0]&&(a.push(t),p||(p=!0,h.then(b)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function w(c,a,l,f,d,h,p=[-1]){const m=u;i(c);const g=a.props||{},y=c.$$={fragment:null,ctx:null,props:h,update:t,not_equal:d,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(m?m.$$.context:[]),callbacks:e(),dirty:p,skip_bound:!1};let w=!1;if(y.ctx=l?l(c,g,(t,n,...e)=>{const o=e.length?e[0]:n;return y.ctx&&d(y.ctx[t],y.ctx[t]=o)&&(!y.skip_bound&&y.bound[t]&&y.bound[t](o),w&&x(c,t)),n}):[],y.update(),w=!0,o(y.before_update),y.fragment=!!f&&f(y.ctx),a.target){if(a.hydrate){const t=function(t){return Array.from(t.childNodes)}(a.target);y.fragment&&y.fragment.l(t),t.forEach(s)}else y.fragment&&y.fragment.c();a.intro&&((v=c.$$.fragment)&&v.i&&(_.delete(v),v.i(k))),function(t,e,c){const{fragment:s,on_mount:u,on_destroy:i,after_update:a}=t.$$;s&&s.m(e,c),$(()=>{const e=u.map(n).filter(r);i?i.push(...e):o(e),t.$$.on_mount=[]}),a.forEach($)}(c,a.target,a.anchor),b()}var v,k;i(m)}function v(n){let e;return{c(){var t,n,o,r;t="main",e=document.createElement(t),e.innerHTML='<h1 class="svelte-5uccn9">Under maintenance.</h1>',n=e,o="class",null==(r="svelte-5uccn9")?n.removeAttribute(o):n.getAttribute(o)!==r&&n.setAttribute(o,r)},m(t,n){!function(t,n,e){t.insertBefore(n,e||null)}(t,e,n)},p:t,i:t,o:t,d(t){t&&s(e)}}}function k(t,n,e){let{host:o}=n;return o==window.location.host&&"https:"!=window.location.protocol&&(window.location.protocol="https"),t.$$set=t=>{"host"in t&&e(0,o=t.host)},[o]}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),w(this,t,k,v,c,{host:0})}}({target:document.body,props:{host:"timflichy.com"}})}();
//# sourceMappingURL=bundle.js.map
