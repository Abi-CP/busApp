var wm=Object.defineProperty;var Em=(t,e,n)=>e in t?wm(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var po=(t,e,n)=>(Em(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function B(){}const mh=t=>t;function ri(t,e){for(const n in e)t[n]=e[n];return t}function Tm(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function gh(t){return t()}function ol(){return Object.create(null)}function We(t){t.forEach(gh)}function us(t){return typeof t=="function"}function ge(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Ms;function xr(t,e){return t===e?!0:(Ms||(Ms=document.createElement("a")),Ms.href=e,t===Ms.href)}function Am(t){return Object.keys(t).length===0}function _h(t,...e){if(t==null){for(const r of e)r(void 0);return B}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function tn(t,e,n){t.$$.on_destroy.push(_h(e,n))}function Oa(t,e,n,r){if(t){const s=yh(t,e,n,r);return t[0](s)}}function yh(t,e,n,r){return t[1]&&r?ri(n.ctx.slice(),t[1](r(e))):n.ctx}function Ma(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const i=[],o=Math.max(e.dirty.length,s.length);for(let a=0;a<o;a+=1)i[a]=e.dirty[a]|s[a];return i}return e.dirty|s}return e.dirty}function La(t,e,n,r,s,i){if(s){const o=yh(e,n,r,i);t.p(o,s)}}function xa(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function al(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}const vh=typeof window<"u";let Ih=vh?()=>window.performance.now():()=>Date.now(),Fa=vh?t=>requestAnimationFrame(t):B;const tr=new Set;function wh(t){tr.forEach(e=>{e.c(t)||(tr.delete(e),e.f())}),tr.size!==0&&Fa(wh)}function Eh(t){let e;return tr.size===0&&Fa(wh),{promise:new Promise(n=>{tr.add(e={c:t,f:n})}),abort(){tr.delete(e)}}}function f(t,e){t.appendChild(e)}function Th(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function bm(t){const e=I("style");return e.textContent="/* empty */",Rm(Th(t),e),e.sheet}function Rm(t,e){return f(t.head||t,e),e.sheet}function j(t,e,n){t.insertBefore(e,n||null)}function F(t){t.parentNode&&t.parentNode.removeChild(t)}function Ah(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function I(t){return document.createElement(t)}function L(t){return document.createTextNode(t)}function R(){return L(" ")}function Ot(){return L("")}function ne(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function Ua(t){return function(e){return e.preventDefault(),t.call(this,e)}}function y(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function bh(t){return t===""?null:+t}function Sm(t){return Array.from(t.childNodes)}function ie(t,e){e=""+e,t.data!==e&&(t.data=e)}function pe(t,e){t.value=e??""}function cr(t,e,n,r){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function cl(t,e,n){for(let r=0;r<t.options.length;r+=1){const s=t.options[r];if(s.__value===e){s.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function km(t){const e=t.querySelector(":checked");return e&&e.__value}function ll(t,e,n){t.classList.toggle(e,!!n)}function Pm(t,e,{bubbles:n=!1,cancelable:r=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:r})}function ul(t,e){return new t(e)}const si=new Map;let ii=0;function Cm(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Dm(t,e){const n={stylesheet:bm(e),rules:{}};return si.set(t,n),n}function Rh(t,e,n,r,s,i,o,a=0){const c=16.666/r;let l=`{
`;for(let v=0;v<=1;v+=c){const A=e+(n-e)*i(v);l+=v*100+`%{${o(A,1-A)}}
`}const u=l+`100% {${o(n,1-n)}}
}`,h=`__svelte_${Cm(u)}_${a}`,d=Th(t),{stylesheet:p,rules:m}=si.get(d)||Dm(d,t);m[h]||(m[h]=!0,p.insertRule(`@keyframes ${h} ${u}`,p.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${h} ${r}ms linear ${s}ms 1 both`,ii+=1,h}function Wo(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?i=>i.indexOf(e)<0:i=>i.indexOf("__svelte")===-1),s=n.length-r.length;s&&(t.style.animation=r.join(", "),ii-=s,ii||Nm())}function Nm(){Fa(()=>{ii||(si.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&F(e)}),si.clear())})}let Hr;function xt(t){Hr=t}function hs(){if(!Hr)throw new Error("Function called outside component initialization");return Hr}function Ct(t){hs().$$.on_mount.push(t)}function Vm(t){hs().$$.on_destroy.push(t)}function mo(t,e){return hs().$$.context.set(t,e),e}function Ko(t){return hs().$$.context.get(t)}function Om(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(r=>r.call(this,e))}const Yn=[],bn=[];let nr=[];const Go=[],Mm=Promise.resolve();let Qo=!1;function Lm(){Qo||(Qo=!0,Mm.then($a))}function kn(t){nr.push(t)}function go(t){Go.push(t)}const _o=new Set;let Kn=0;function $a(){if(Kn!==0)return;const t=Hr;do{try{for(;Kn<Yn.length;){const e=Yn[Kn];Kn++,xt(e),xm(e.$$)}}catch(e){throw Yn.length=0,Kn=0,e}for(xt(null),Yn.length=0,Kn=0;bn.length;)bn.pop()();for(let e=0;e<nr.length;e+=1){const n=nr[e];_o.has(n)||(_o.add(n),n())}nr.length=0}while(Yn.length);for(;Go.length;)Go.pop()();Qo=!1,_o.clear(),xt(t)}function xm(t){if(t.fragment!==null){t.update(),We(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(kn)}}function Fm(t){const e=[],n=[];nr.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),nr=e}let Rr;function Sh(){return Rr||(Rr=Promise.resolve(),Rr.then(()=>{Rr=null})),Rr}function oi(t,e,n){t.dispatchEvent(Pm(`${e?"intro":"outro"}${n}`))}const Qs=new Set;let nn;function nt(){nn={r:0,c:[],p:nn}}function rt(){nn.r||We(nn.c),nn=nn.p}function N(t,e){t&&t.i&&(Qs.delete(t),t.i(e))}function M(t,e,n,r){if(t&&t.o){if(Qs.has(t))return;Qs.add(t),nn.c.push(()=>{Qs.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}const kh={duration:0};function Um(t,e,n){const r={direction:"in"};let s=e(t,n,r),i=!1,o,a,c=0;function l(){o&&Wo(t,o)}function u(){const{delay:d=0,duration:p=300,easing:m=mh,tick:g=B,css:v}=s||kh;v&&(o=Rh(t,0,1,p,d,m,v,c++)),g(0,1);const A=Ih()+d,_=A+p;a&&a.abort(),i=!0,kn(()=>oi(t,!0,"start")),a=Eh(E=>{if(i){if(E>=_)return g(1,0),oi(t,!0,"end"),l(),i=!1;if(E>=A){const P=m((E-A)/p);g(P,1-P)}}return i})}let h=!1;return{start(){h||(h=!0,Wo(t),us(s)?(s=s(r),Sh().then(u)):u())},invalidate(){h=!1},end(){i&&(l(),i=!1)}}}function $m(t,e,n){const r={direction:"out"};let s=e(t,n,r),i=!0,o;const a=nn;a.r+=1;let c;function l(){const{delay:u=0,duration:h=300,easing:d=mh,tick:p=B,css:m}=s||kh;m&&(o=Rh(t,1,0,h,u,d,m));const g=Ih()+u,v=g+h;kn(()=>oi(t,!1,"start")),"inert"in t&&(c=t.inert,t.inert=!0),Eh(A=>{if(i){if(A>=v)return p(0,1),oi(t,!1,"end"),--a.r||We(a.c),!1;if(A>=g){const _=d((A-g)/h);p(1-_,_)}}return i})}return us(s)?Sh().then(()=>{s=s(r),l()}):l(),{end(u){u&&"inert"in t&&(t.inert=c),u&&s.tick&&s.tick(1,0),i&&(o&&Wo(t,o),i=!1)}}}function hl(t,e){const n=e.token={};function r(s,i,o,a){if(e.token!==n)return;e.resolved=a;let c=e.ctx;o!==void 0&&(c=c.slice(),c[o]=a);const l=s&&(e.current=s)(c);let u=!1;e.block&&(e.blocks?e.blocks.forEach((h,d)=>{d!==i&&h&&(nt(),M(h,1,1,()=>{e.blocks[d]===h&&(e.blocks[d]=null)}),rt())}):e.block.d(1),l.c(),N(l,1),l.m(e.mount(),e.anchor),u=!0),e.block=l,e.blocks&&(e.blocks[i]=l),u&&$a()}if(Tm(t)){const s=hs();if(t.then(i=>{xt(s),r(e.then,1,e.value,i),xt(null)},i=>{if(xt(s),r(e.catch,2,e.error,i),xt(null),!e.hasCatch)throw i}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function Bm(t,e,n){const r=e.slice(),{resolved:s}=t;t.current===t.then&&(r[t.value]=s),t.current===t.catch&&(r[t.error]=s),t.block.p(r,n)}function ln(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function Ph(t,e){M(t,1,1,()=>{e.delete(t.key)})}function Ch(t,e,n,r,s,i,o,a,c,l,u,h){let d=t.length,p=i.length,m=d;const g={};for(;m--;)g[t[m].key]=m;const v=[],A=new Map,_=new Map,E=[];for(m=p;m--;){const V=h(s,i,m),O=n(V);let b=o.get(O);b?r&&E.push(()=>b.p(V,e)):(b=l(O,V),b.c()),A.set(O,v[m]=b),O in g&&_.set(O,Math.abs(m-g[O]))}const P=new Set,q=new Set;function C(V){N(V,1),V.m(a,u),o.set(V.key,V),u=V.first,p--}for(;d&&p;){const V=v[p-1],O=t[d-1],b=V.key,z=O.key;V===O?(u=V.first,d--,p--):A.has(z)?!o.has(b)||P.has(b)?C(V):q.has(z)?d--:_.get(b)>_.get(z)?(q.add(b),C(V)):(P.add(z),d--):(c(O,o),d--)}for(;d--;){const V=t[d];A.has(V.key)||c(V,o)}for(;p;)C(v[p-1]);return We(E),v}function dl(t,e){const n={},r={},s={$$scope:1};let i=t.length;for(;i--;){const o=t[i],a=e[i];if(a){for(const c in o)c in a||(r[c]=1);for(const c in a)s[c]||(n[c]=a[c],s[c]=1);t[i]=a}else for(const c in o)s[c]=1}for(const o in r)o in n||(n[o]=void 0);return n}function Ls(t){return typeof t=="object"&&t!==null?t:{}}function yo(t,e,n){const r=t.$$.props[e];r!==void 0&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}function le(t){t&&t.c()}function oe(t,e,n){const{fragment:r,after_update:s}=t.$$;r&&r.m(e,n),kn(()=>{const i=t.$$.on_mount.map(gh).filter(us);t.$$.on_destroy?t.$$.on_destroy.push(...i):We(i),t.$$.on_mount=[]}),s.forEach(kn)}function ae(t,e){const n=t.$$;n.fragment!==null&&(Fm(n.after_update),We(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function jm(t,e){t.$$.dirty[0]===-1&&(Yn.push(t),Lm(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ee(t,e,n,r,s,i,o=null,a=[-1]){const c=Hr;xt(t);const l=t.$$={fragment:null,ctx:[],props:i,update:B,not_equal:s,bound:ol(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:ol(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(l.root);let u=!1;if(l.ctx=n?n(t,e.props||{},(h,d,...p)=>{const m=p.length?p[0]:d;return l.ctx&&s(l.ctx[h],l.ctx[h]=m)&&(!l.skip_bound&&l.bound[h]&&l.bound[h](m),u&&jm(t,h)),d}):[],l.update(),u=!0,We(l.before_update),l.fragment=r?r(l.ctx):!1,e.target){if(e.hydrate){const h=Sm(e.target);l.fragment&&l.fragment.l(h),h.forEach(F)}else l.fragment&&l.fragment.c();e.intro&&N(t.$$.fragment),oe(t,e.target,e.anchor),$a()}xt(c)}class Te{constructor(){po(this,"$$");po(this,"$$set")}$destroy(){ae(this,1),this.$destroy=B}$on(e,n){if(!us(n))return B;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!Am(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const qm="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(qm);const fl={},Yo={},zm={},Dh=/^:(.+)/,pl=4,Hm=3,Wm=2,Km=1,Gm=1,Jo=t=>t.replace(/(^\/+|\/+$)/g,"").split("/"),vo=t=>t.replace(/(^\/+|\/+$)/g,""),Qm=(t,e)=>{const n=t.default?0:Jo(t.path).reduce((r,s)=>(r+=pl,s===""?r+=Gm:Dh.test(s)?r+=Wm:s[0]==="*"?r-=pl+Km:r+=Hm,r),0);return{route:t,score:n,index:e}},Ym=t=>t.map(Qm).sort((e,n)=>e.score<n.score?1:e.score>n.score?-1:e.index-n.index),ml=(t,e)=>{let n,r;const[s]=e.split("?"),i=Jo(s),o=i[0]==="",a=Ym(t);for(let c=0,l=a.length;c<l;c++){const u=a[c].route;let h=!1;if(u.default){r={route:u,params:{},uri:e};continue}const d=Jo(u.path),p={},m=Math.max(i.length,d.length);let g=0;for(;g<m;g++){const v=d[g],A=i[g];if(v&&v[0]==="*"){const E=v==="*"?"*":v.slice(1);p[E]=i.slice(g).map(decodeURIComponent).join("/");break}if(typeof A>"u"){h=!0;break}const _=Dh.exec(v);if(_&&!o){const E=decodeURIComponent(A);p[_[1]]=E}else if(v!==A){h=!0;break}}if(!h){n={route:u,params:p,uri:"/"+i.slice(0,g).join("/")};break}}return n||r||null},gl=(t,e)=>`${vo(e==="/"?t:`${vo(t)}/${vo(e)}`)}/`,Nh=()=>typeof window<"u"&&"document"in window&&"location"in window,Jm=t=>({params:t&4}),_l=t=>({params:t[2]});function yl(t){let e,n,r,s;const i=[Zm,Xm],o=[];function a(c,l){return c[0]?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),r=Ot()},m(c,l){o[e].m(c,l),j(c,r,l),s=!0},p(c,l){let u=e;e=a(c),e===u?o[e].p(c,l):(nt(),M(o[u],1,1,()=>{o[u]=null}),rt(),n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),N(n,1),n.m(r.parentNode,r))},i(c){s||(N(n),s=!0)},o(c){M(n),s=!1},d(c){c&&F(r),o[e].d(c)}}}function Xm(t){let e;const n=t[8].default,r=Oa(n,t,t[7],_l);return{c(){r&&r.c()},m(s,i){r&&r.m(s,i),e=!0},p(s,i){r&&r.p&&(!e||i&132)&&La(r,n,s,s[7],e?Ma(n,s[7],i,Jm):xa(s[7]),_l)},i(s){e||(N(r,s),e=!0)},o(s){M(r,s),e=!1},d(s){r&&r.d(s)}}}function Zm(t){let e,n,r,s={ctx:t,current:null,token:null,hasCatch:!1,pending:ng,then:tg,catch:eg,value:12,blocks:[,,,]};return hl(n=t[0],s),{c(){e=Ot(),s.block.c()},m(i,o){j(i,e,o),s.block.m(i,s.anchor=o),s.mount=()=>e.parentNode,s.anchor=e,r=!0},p(i,o){t=i,s.ctx=t,o&1&&n!==(n=t[0])&&hl(n,s)||Bm(s,t,o)},i(i){r||(N(s.block),r=!0)},o(i){for(let o=0;o<3;o+=1){const a=s.blocks[o];M(a)}r=!1},d(i){i&&F(e),s.block.d(i),s.token=null,s=null}}}function eg(t){return{c:B,m:B,p:B,i:B,o:B,d:B}}function tg(t){var a;let e,n,r;const s=[t[2],t[3]];var i=((a=t[12])==null?void 0:a.default)||t[12];function o(c,l){let u={};if(l!==void 0&&l&12)u=dl(s,[l&4&&Ls(c[2]),l&8&&Ls(c[3])]);else for(let h=0;h<s.length;h+=1)u=ri(u,s[h]);return{props:u}}return i&&(e=ul(i,o(t))),{c(){e&&le(e.$$.fragment),n=Ot()},m(c,l){e&&oe(e,c,l),j(c,n,l),r=!0},p(c,l){var u;if(l&1&&i!==(i=((u=c[12])==null?void 0:u.default)||c[12])){if(e){nt();const h=e;M(h.$$.fragment,1,0,()=>{ae(h,1)}),rt()}i?(e=ul(i,o(c,l)),le(e.$$.fragment),N(e.$$.fragment,1),oe(e,n.parentNode,n)):e=null}else if(i){const h=l&12?dl(s,[l&4&&Ls(c[2]),l&8&&Ls(c[3])]):{};e.$set(h)}},i(c){r||(e&&N(e.$$.fragment,c),r=!0)},o(c){e&&M(e.$$.fragment,c),r=!1},d(c){c&&F(n),e&&ae(e,c)}}}function ng(t){return{c:B,m:B,p:B,i:B,o:B,d:B}}function rg(t){let e,n,r=t[1]&&t[1].route===t[5]&&yl(t);return{c(){r&&r.c(),e=Ot()},m(s,i){r&&r.m(s,i),j(s,e,i),n=!0},p(s,[i]){s[1]&&s[1].route===s[5]?r?(r.p(s,i),i&2&&N(r,1)):(r=yl(s),r.c(),N(r,1),r.m(e.parentNode,e)):r&&(nt(),M(r,1,1,()=>{r=null}),rt())},i(s){n||(N(r),n=!0)},o(s){M(r),n=!1},d(s){s&&F(e),r&&r.d(s)}}}function sg(t,e,n){let r,{$$slots:s={},$$scope:i}=e,{path:o=""}=e,{component:a=null}=e,c={},l={};const{registerRoute:u,unregisterRoute:h,activeRoute:d}=Ko(Yo);tn(t,d,m=>n(1,r=m));const p={path:o,default:o===""};return u(p),Vm(()=>{h(p)}),t.$$set=m=>{n(11,e=ri(ri({},e),al(m))),"path"in m&&n(6,o=m.path),"component"in m&&n(0,a=m.component),"$$scope"in m&&n(7,i=m.$$scope)},t.$$.update=()=>{if(r&&r.route===p){n(2,c=r.params);const{component:m,path:g,...v}=e;n(3,l=v),m&&(m.toString().startsWith("class ")?n(0,a=m):n(0,a=m())),Nh()&&!r.preserveScroll&&(window==null||window.scrollTo(0,0))}},e=al(e),[a,r,c,l,d,p,o,i,s]}class yn extends Te{constructor(e){super(),Ee(this,e,sg,rg,ge,{path:6,component:0})}}const Gn=[];function ig(t,e){return{subscribe:Ft(t,e).subscribe}}function Ft(t,e=B){let n;const r=new Set;function s(a){if(ge(t,a)&&(t=a,n)){const c=!Gn.length;for(const l of r)l[1](),Gn.push(l,t);if(c){for(let l=0;l<Gn.length;l+=2)Gn[l][0](Gn[l+1]);Gn.length=0}}}function i(a){s(a(t))}function o(a,c=B){const l=[a,c];return r.add(l),r.size===1&&(n=e(s,i)||B),a(t),()=>{r.delete(l),r.size===0&&n&&(n(),n=null)}}return{set:s,update:i,subscribe:o}}function og(t,e,n){const r=!Array.isArray(t),s=r?[t]:t;if(!s.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const i=e.length<2;return ig(n,(o,a)=>{let c=!1;const l=[];let u=0,h=B;const d=()=>{if(u)return;h();const m=e(r?l[0]:l,o,a);i?o(m):h=us(m)?m:B},p=s.map((m,g)=>_h(m,v=>{l[g]=v,u&=~(1<<g),c&&d()},()=>{u|=1<<g}));return c=!0,d(),function(){We(p),h(),c=!1}})}const Io=t=>({...t.location,state:t.history.state,key:t.history.state&&t.history.state.key||"initial"}),ag=t=>{const e=[];let n=Io(t);return{get location(){return n},listen(r){e.push(r);const s=()=>{n=Io(t),r({location:n,action:"POP"})};return t.addEventListener("popstate",s),()=>{t.removeEventListener("popstate",s);const i=e.indexOf(r);e.splice(i,1)}},navigate(r,{state:s,replace:i=!1,preserveScroll:o=!1,blurActiveElement:a=!0}={}){s={...s,key:Date.now()+""};try{i?t.history.replaceState(s,"",r):t.history.pushState(s,"",r)}catch{t.location[i?"replace":"assign"](r)}n=Io(t),e.forEach(c=>c({location:n,action:"PUSH",preserveScroll:o})),a&&document.activeElement.blur()}}},cg=(t="/")=>{let e=0;const n=[{pathname:t,search:""}],r=[];return{get location(){return n[e]},addEventListener(s,i){},removeEventListener(s,i){},history:{get entries(){return n},get index(){return e},get state(){return r[e]},pushState(s,i,o){const[a,c=""]=o.split("?");e++,n.push({pathname:a,search:c}),r.push(s)},replaceState(s,i,o){const[a,c=""]=o.split("?");n[e]={pathname:a,search:c},r[e]=s}}}},Vh=ag(Nh()?window:cg()),{navigate:Be}=Vh,lg=t=>({route:t&4,location:t&2}),vl=t=>({route:t[2]&&t[2].uri,location:t[1]}),ug=t=>({route:t&4,location:t&2}),Il=t=>({route:t[2]&&t[2].uri,location:t[1]});function hg(t){let e;const n=t[15].default,r=Oa(n,t,t[14],vl);return{c(){r&&r.c()},m(s,i){r&&r.m(s,i),e=!0},p(s,i){r&&r.p&&(!e||i&16390)&&La(r,n,s,s[14],e?Ma(n,s[14],i,lg):xa(s[14]),vl)},i(s){e||(N(r,s),e=!0)},o(s){M(r,s),e=!1},d(s){r&&r.d(s)}}}function dg(t){let e=t[1].pathname,n,r,s=wl(t);return{c(){s.c(),n=Ot()},m(i,o){s.m(i,o),j(i,n,o),r=!0},p(i,o){o&2&&ge(e,e=i[1].pathname)?(nt(),M(s,1,1,B),rt(),s=wl(i),s.c(),N(s,1),s.m(n.parentNode,n)):s.p(i,o)},i(i){r||(N(s),r=!0)},o(i){M(s),r=!1},d(i){i&&F(n),s.d(i)}}}function wl(t){let e,n,r,s;const i=t[15].default,o=Oa(i,t,t[14],Il);return{c(){e=I("div"),o&&o.c()},m(a,c){j(a,e,c),o&&o.m(e,null),s=!0},p(a,c){o&&o.p&&(!s||c&16390)&&La(o,i,a,a[14],s?Ma(i,a[14],c,ug):xa(a[14]),Il)},i(a){s||(N(o,a),a&&kn(()=>{s&&(r&&r.end(1),n=Um(e,t[3],{}),n.start())}),s=!0)},o(a){M(o,a),n&&n.invalidate(),a&&(r=$m(e,t[3],{})),s=!1},d(a){a&&F(e),o&&o.d(a),a&&r&&r.end()}}}function fg(t){let e,n,r,s;const i=[dg,hg],o=[];function a(c,l){return c[0]?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),r=Ot()},m(c,l){o[e].m(c,l),j(c,r,l),s=!0},p(c,[l]){let u=e;e=a(c),e===u?o[e].p(c,l):(nt(),M(o[u],1,1,()=>{o[u]=null}),rt(),n=o[e],n?n.p(c,l):(n=o[e]=i[e](c),n.c()),N(n,1),n.m(r.parentNode,r))},i(c){s||(N(n),s=!0)},o(c){M(n),s=!1},d(c){c&&F(r),o[e].d(c)}}}function pg(t,e,n){let r,s,i,o,{$$slots:a={},$$scope:c}=e,{basepath:l="/"}=e,{url:u=null}=e,{viewtransition:h=null}=e,{history:d=Vh}=e;const p=(b,z,G)=>{const S=h(G);return typeof(S==null?void 0:S.fn)=="function"?S.fn(b,S):S};mo(zm,d);const m=Ko(fl),g=Ko(Yo),v=Ft([]);tn(t,v,b=>n(12,s=b));const A=Ft(null);tn(t,A,b=>n(2,o=b));let _=!1;const E=m||Ft(u?{pathname:u}:d.location);tn(t,E,b=>n(1,r=b));const P=g?g.routerBase:Ft({path:l,uri:l});tn(t,P,b=>n(13,i=b));const q=og([P,A],([b,z])=>{if(!z)return b;const{path:G}=b,{route:S,uri:X}=z;return{path:S.default?G:S.path.replace(/\*.*$/,""),uri:X}}),C=b=>{const{path:z}=i;let{path:G}=b;if(b._path=G,b.path=gl(z,G),typeof window>"u"){if(_)return;const S=ml([b],r.pathname);S&&(A.set(S),_=!0)}else v.update(S=>[...S,b])},V=b=>{v.update(z=>z.filter(G=>G!==b))};let O=!1;return m||(Ct(()=>d.listen(z=>{n(11,O=z.preserveScroll||!1),E.set(z.location)})),mo(fl,E)),mo(Yo,{activeRoute:A,base:P,routerBase:q,registerRoute:C,unregisterRoute:V}),t.$$set=b=>{"basepath"in b&&n(8,l=b.basepath),"url"in b&&n(9,u=b.url),"viewtransition"in b&&n(0,h=b.viewtransition),"history"in b&&n(10,d=b.history),"$$scope"in b&&n(14,c=b.$$scope)},t.$$.update=()=>{if(t.$$.dirty&8192){const{path:b}=i;v.update(z=>z.map(G=>Object.assign(G,{path:gl(b,G._path)})))}if(t.$$.dirty&6146){const b=ml(s,r.pathname);A.set(b&&{...b,preserveScroll:O})}},[h,r,o,p,v,A,E,P,l,u,d,O,s,i,c,a]}class mg extends Te{constructor(e){super(),Ee(this,e,pg,fg,ge,{basepath:8,url:9,viewtransition:0,history:10})}}var El={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},gg=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Mh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),r.push(n[u],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Oh(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):gg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new _g;const d=i<<2|a>>4;if(r.push(d),l!==64){const p=a<<4&240|l>>2;if(r.push(p),h!==64){const m=l<<6&192|h;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class _g extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yg=function(t){const e=Oh(t);return Mh.encodeByteArray(e,!0)},ai=function(t){return yg(t).replace(/\./g,"")},Lh=function(t){try{return Mh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig=()=>vg().__FIREBASE_DEFAULTS__,wg=()=>{if(typeof process>"u"||typeof El>"u")return;const t=El.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Eg=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Lh(t[1]);return e&&JSON.parse(e)},Ba=()=>{try{return Ig()||wg()||Eg()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},xh=t=>{var e,n;return(n=(e=Ba())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Tg=t=>{const e=xh(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Fh=()=>{var t;return(t=Ba())===null||t===void 0?void 0:t.config},Uh=t=>{var e;return(e=Ba())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ai(JSON.stringify(n)),ai(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Rg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ze())}function $h(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Sg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kg(){const t=ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Bh(){try{return typeof indexedDB=="object"}catch{return!1}}function jh(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function Pg(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg="FirebaseError";class _t extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Cg,Object.setPrototypeOf(this,_t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fn.prototype.create)}}class Fn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Dg(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new _t(s,a,r)}}function Dg(t,e){return t.replace(Ng,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Ng=/\{\$([^}]+)}/g;function Vg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ci(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Tl(i)&&Tl(o)){if(!ci(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Tl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Dr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Nr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Og(t,e){const n=new Mg(t,e);return n.subscribe.bind(n)}class Mg{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Lg(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=wo),s.error===void 0&&(s.error=wo),s.complete===void 0&&(s.complete=wo);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Lg(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function wo(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg=1e3,Fg=2,Ug=4*60*60*1e3,$g=.5;function Al(t,e=xg,n=Fg){const r=e*Math.pow(n,t),s=Math.round($g*r*(Math.random()-.5)*2);return Math.min(Ug,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(t){return t&&t._delegate?t._delegate:t}class pt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ag;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qg(e))try{this.getOrInitializeService({instanceIdentifier:vn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=vn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vn){return this.instances.has(e)}getOptions(e=vn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:jg(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=vn){return this.component?this.component.multipleInstances?e:vn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jg(t){return t===vn?void 0:t}function qg(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Bg(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const Hg={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},Wg=ee.INFO,Kg={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},Gg=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Kg[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ci{constructor(e){this.name=e,this._logLevel=Wg,this._logHandler=Gg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Hg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const Qg=(t,e)=>e.some(n=>t instanceof n);let bl,Rl;function Yg(){return bl||(bl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jg(){return Rl||(Rl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qh=new WeakMap,Xo=new WeakMap,zh=new WeakMap,Eo=new WeakMap,ja=new WeakMap;function Xg(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(sn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&qh.set(n,t)}).catch(()=>{}),ja.set(e,t),e}function Zg(t){if(Xo.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Xo.set(t,e)}let Zo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Xo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||zh.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return sn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function e_(t){Zo=t(Zo)}function t_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(To(this),e,...n);return zh.set(r,e.sort?e.sort():[e]),sn(r)}:Jg().includes(t)?function(...e){return t.apply(To(this),e),sn(qh.get(this))}:function(...e){return sn(t.apply(To(this),e))}}function n_(t){return typeof t=="function"?t_(t):(t instanceof IDBTransaction&&Zg(t),Qg(t,Yg())?new Proxy(t,Zo):t)}function sn(t){if(t instanceof IDBRequest)return Xg(t);if(Eo.has(t))return Eo.get(t);const e=n_(t);return e!==t&&(Eo.set(t,e),ja.set(e,t)),e}const To=t=>ja.get(t);function r_(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=sn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(sn(o.result),c.oldVersion,c.newVersion,sn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const s_=["get","getKey","getAll","getAllKeys","count"],i_=["put","add","delete","clear"],Ao=new Map;function Sl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ao.get(e))return Ao.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=i_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||s_.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Ao.set(e,i),i}e_(t=>({...t,get:(e,n,r)=>Sl(e,n)||t.get(e,n,r),has:(e,n)=>!!Sl(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(a_(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function a_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ea="@firebase/app",kl="0.9.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn=new Ci("@firebase/app"),c_="@firebase/app-compat",l_="@firebase/analytics-compat",u_="@firebase/analytics",h_="@firebase/app-check-compat",d_="@firebase/app-check",f_="@firebase/auth",p_="@firebase/auth-compat",m_="@firebase/database",g_="@firebase/database-compat",__="@firebase/functions",y_="@firebase/functions-compat",v_="@firebase/installations",I_="@firebase/installations-compat",w_="@firebase/messaging",E_="@firebase/messaging-compat",T_="@firebase/performance",A_="@firebase/performance-compat",b_="@firebase/remote-config",R_="@firebase/remote-config-compat",S_="@firebase/storage",k_="@firebase/storage-compat",P_="@firebase/firestore",C_="@firebase/firestore-compat",D_="firebase",N_="10.7.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta="[DEFAULT]",V_={[ea]:"fire-core",[c_]:"fire-core-compat",[u_]:"fire-analytics",[l_]:"fire-analytics-compat",[d_]:"fire-app-check",[h_]:"fire-app-check-compat",[f_]:"fire-auth",[p_]:"fire-auth-compat",[m_]:"fire-rtdb",[g_]:"fire-rtdb-compat",[__]:"fire-fn",[y_]:"fire-fn-compat",[v_]:"fire-iid",[I_]:"fire-iid-compat",[w_]:"fire-fcm",[E_]:"fire-fcm-compat",[T_]:"fire-perf",[A_]:"fire-perf-compat",[b_]:"fire-rc",[R_]:"fire-rc-compat",[S_]:"fire-gcs",[k_]:"fire-gcs-compat",[P_]:"fire-fst",[C_]:"fire-fst-compat","fire-js":"fire-js",[D_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li=new Map,na=new Map;function O_(t,e){try{t.container.addComponent(e)}catch(n){Pn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Dt(t){const e=t.name;if(na.has(e))return Pn.debug(`There were multiple attempts to register component ${e}.`),!1;na.set(e,t);for(const n of li.values())O_(n,t);return!0}function fs(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},on=new Fn("app","Firebase",M_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new pt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw on.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr=N_;function qa(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ta,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw on.create("bad-app-name",{appName:String(s)});if(n||(n=Fh()),!n)throw on.create("no-options");const i=li.get(s);if(i){if(ci(n,i.options)&&ci(r,i.config))return i;throw on.create("duplicate-app",{appName:s})}const o=new zg(s);for(const c of na.values())o.addComponent(c);const a=new L_(n,r,o);return li.set(s,a),a}function Hh(t=ta){const e=li.get(t);if(!e&&t===ta&&Fh())return qa();if(!e)throw on.create("no-app",{appName:t});return e}function ct(t,e,n){var r;let s=(r=V_[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pn.warn(a.join(" "));return}Dt(new pt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_="firebase-heartbeat-database",F_=1,Wr="firebase-heartbeat-store";let bo=null;function Wh(){return bo||(bo=r_(x_,F_,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Wr)}}}).catch(t=>{throw on.create("idb-open",{originalErrorMessage:t.message})})),bo}async function U_(t){try{return await(await Wh()).transaction(Wr).objectStore(Wr).get(Kh(t))}catch(e){if(e instanceof _t)Pn.warn(e.message);else{const n=on.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pn.warn(n.message)}}}async function Pl(t,e){try{const r=(await Wh()).transaction(Wr,"readwrite");await r.objectStore(Wr).put(e,Kh(t)),await r.done}catch(n){if(n instanceof _t)Pn.warn(n.message);else{const r=on.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Pn.warn(r.message)}}}function Kh(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_=1024,B_=30*24*60*60*1e3;class j_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new z_(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Cl();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=B_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Cl(),{heartbeatsToSend:r,unsentEntries:s}=q_(this._heartbeatsCache.heartbeats),i=ai(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Cl(){return new Date().toISOString().substring(0,10)}function q_(t,e=$_){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Dl(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Dl(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class z_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bh()?jh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await U_(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Pl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Pl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Dl(t){return ai(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H_(t){Dt(new pt("platform-logger",e=>new o_(e),"PRIVATE")),Dt(new pt("heartbeat",e=>new j_(e),"PRIVATE")),ct(ea,kl,t),ct(ea,kl,"esm2017"),ct("fire-js","")}H_("");function za(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Gh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const W_=Gh,Qh=new Fn("auth","Firebase",Gh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui=new Ci("@firebase/auth");function K_(t,...e){ui.logLevel<=ee.WARN&&ui.warn(`Auth (${vr}): ${t}`,...e)}function Ys(t,...e){ui.logLevel<=ee.ERROR&&ui.error(`Auth (${vr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(t,...e){throw Ha(t,...e)}function bt(t,...e){return Ha(t,...e)}function Yh(t,e,n){const r=Object.assign(Object.assign({},W_()),{[e]:n});return new Fn("auth","Firebase",r).create(e,{appName:t.name})}function G_(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&ut(t,"argument-error"),Yh(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ha(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Qh.create(t,...e)}function H(t,e,...n){if(!t)throw Ha(e,...n)}function Ut(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ys(e),new Error(e)}function zt(t,e){t||Ut(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Q_(){return Nl()==="http:"||Nl()==="https:"}function Nl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Q_()||$h()||"connection"in navigator)?navigator.onLine:!0}function J_(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,n){this.shortDelay=e,this.longDelay=n,zt(n>e,"Short delay should be less than long delay!"),this.isMobile=Rg()||Sg()}get(){return Y_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(t,e){zt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ut("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ut("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ut("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z_=new ps(3e4,6e4);function fn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Gt(t,e,n,r,s={}){return Xh(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=ds(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Jh.fetch()(Zh(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Xh(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},X_),e);try{const s=new ty(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw xs(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw xs(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw xs(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw xs(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Yh(t,u,l);ut(t,u)}}catch(s){if(s instanceof _t)throw s;ut(t,"network-request-failed",{message:String(s)})}}async function ms(t,e,n,r,s={}){const i=await Gt(t,e,n,r,s);return"mfaPendingCredential"in i&&ut(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Zh(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Wa(t.config,s):`${t.config.apiScheme}://${s}`}function ey(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ty{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(bt(this.auth,"network-request-failed")),Z_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function xs(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=bt(t,e,r);return s.customData._tokenResponse=n,s}function Vl(t){return t!==void 0&&t.enterprise!==void 0}class ny{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return ey(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function ry(t,e){return Gt(t,"GET","/v2/recaptchaConfig",fn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sy(t,e){return Gt(t,"POST","/v1/accounts:delete",e)}async function iy(t,e){return Gt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function oy(t,e=!1){const n=Ce(t),r=await n.getIdToken(e),s=Ka(r);H(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Fr(Ro(s.auth_time)),issuedAtTime:Fr(Ro(s.iat)),expirationTime:Fr(Ro(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ro(t){return Number(t)*1e3}function Ka(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ys("JWT malformed, contained fewer than 3 sections"),null;try{const s=Lh(n);return s?JSON.parse(s):(Ys("Failed to decode base64 JWT payload"),null)}catch(s){return Ys("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ay(t){const e=Ka(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof _t&&cy(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function cy({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fr(this.lastLoginAt),this.creationTime=Fr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hi(t){var e;const n=t.auth,r=await t.getIdToken(),s=await lr(t,iy(n,{idToken:r}));H(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?dy(i.providerUserInfo):[],a=hy(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new ed(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function uy(t){const e=Ce(t);await hi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hy(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function dy(t){return t.map(e=>{var{providerId:n}=e,r=za(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fy(t,e){const n=await Xh(t,{},async()=>{const r=ds({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Zh(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Jh.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function py(t,e){return Gt(t,"POST","/v2/accounts:revokeToken",fn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ay(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return H(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await fy(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Kr;return r&&(H(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(H(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(H(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Kr,this.toJSON())}_performRefresh(){return Ut("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Rn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=za(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ly(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ed(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await lr(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return oy(this,e)}reload(){return uy(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Rn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await hi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await lr(this,sy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,A=(l=n.createdAt)!==null&&l!==void 0?l:void 0,_=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:E,emailVerified:P,isAnonymous:q,providerData:C,stsTokenManager:V}=n;H(E&&V,e,"internal-error");const O=Kr.fromJSON(this.name,V);H(typeof E=="string",e,"internal-error"),Jt(h,e.name),Jt(d,e.name),H(typeof P=="boolean",e,"internal-error"),H(typeof q=="boolean",e,"internal-error"),Jt(p,e.name),Jt(m,e.name),Jt(g,e.name),Jt(v,e.name),Jt(A,e.name),Jt(_,e.name);const b=new Rn({uid:E,auth:e,email:d,emailVerified:P,displayName:h,isAnonymous:q,photoURL:m,phoneNumber:p,tenantId:g,stsTokenManager:O,createdAt:A,lastLoginAt:_});return C&&Array.isArray(C)&&(b.providerData=C.map(z=>Object.assign({},z))),v&&(b._redirectEventId=v),b}static async _fromIdTokenResponse(e,n,r=!1){const s=new Kr;s.updateFromServerResponse(n);const i=new Rn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await hi(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol=new Map;function $t(t){zt(t instanceof Function,"Expected a class definition");let e=Ol.get(t);return e?(zt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ol.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}td.type="NONE";const Ml=td;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(t,e,n){return`firebase:${t}:${e}:${n}`}class rr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Js(this.userKey,s.apiKey,i),this.fullPersistenceKey=Js("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Rn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new rr($t(Ml),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||$t(Ml);const o=Js(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Rn._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new rr(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new rr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(sd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(nd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(od(e))return"Blackberry";if(ad(e))return"Webos";if(Ga(e))return"Safari";if((e.includes("chrome/")||rd(e))&&!e.includes("edge/"))return"Chrome";if(id(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function nd(t=ze()){return/firefox\//i.test(t)}function Ga(t=ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function rd(t=ze()){return/crios\//i.test(t)}function sd(t=ze()){return/iemobile/i.test(t)}function id(t=ze()){return/android/i.test(t)}function od(t=ze()){return/blackberry/i.test(t)}function ad(t=ze()){return/webos/i.test(t)}function Di(t=ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function my(t=ze()){var e;return Di(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function gy(){return kg()&&document.documentMode===10}function cd(t=ze()){return Di(t)||id(t)||ad(t)||od(t)||/windows phone/i.test(t)||sd(t)}function _y(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(t,e=[]){let n;switch(t){case"Browser":n=Ll(ze());break;case"Worker":n=`${Ll(ze())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${vr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vy(t,e={}){return Gt(t,"GET","/v2/passwordPolicy",fn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy=6;class wy{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Iy,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xl(this),this.idTokenSubscription=new xl(this),this.beforeStateQueue=new yy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=$t(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await rr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await hi(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=J_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ce(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence($t(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await vy(this),n=new wy(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Fn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await py(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&$t(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await rr.create(this,[$t(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ld(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&K_(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function pn(t){return Ce(t)}class xl{constructor(e){this.auth=e,this.observer=null,this.addObserver=Og(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ty(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function ud(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=bt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Ty().appendChild(r)})}function Ay(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const by="https://www.google.com/recaptcha/enterprise.js?render=",Ry="recaptcha-enterprise",Sy="NO_RECAPTCHA";class ky{constructor(e){this.type=Ry,this.auth=pn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{ry(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new ny(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;Vl(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(Sy)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Vl(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}ud(by+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Fl(t,e,n,r=!1){const s=new ky(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function sa(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Fl(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Fl(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Py(t,e){const n=fs(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ci(i,e??{}))return s;ut(s,"already-initialized")}return n.initialize({options:e})}function Cy(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map($t);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Dy(t,e,n){const r=pn(t);H(r._canInitEmulator,r,"emulator-config-failed"),H(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=hd(e),{host:o,port:a}=Ny(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Vy()}function hd(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Ny(t){const e=hd(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Ul(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Ul(o)}}}function Ul(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Vy(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ut("not implemented")}_getIdTokenResponse(e){return Ut("not implemented")}_linkToIdToken(e,n){return Ut("not implemented")}_getReauthenticationResolver(e){return Ut("not implemented")}}async function Oy(t,e){return Gt(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function My(t,e){return ms(t,"POST","/v1/accounts:signInWithPassword",fn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ly(t,e){return ms(t,"POST","/v1/accounts:signInWithEmailLink",fn(t,e))}async function xy(t,e){return ms(t,"POST","/v1/accounts:signInWithEmailLink",fn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr extends Qa{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Gr(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Gr(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return sa(e,n,"signInWithPassword",My);case"emailLink":return Ly(e,{email:this._email,oobCode:this._password});default:ut(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return sa(e,r,"signUpPassword",Oy);case"emailLink":return xy(e,{idToken:n,email:this._email,oobCode:this._password});default:ut(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sr(t,e){return ms(t,"POST","/v1/accounts:signInWithIdp",fn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fy="http://localhost";class Cn extends Qa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Cn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ut("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=za(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Cn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return sr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,sr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,sr(e,n)}buildRequest(){const e={requestUri:Fy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ds(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uy(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function $y(t){const e=Dr(Nr(t)).link,n=e?Dr(Nr(e)).deep_link_id:null,r=Dr(Nr(t)).deep_link_id;return(r?Dr(Nr(r)).link:null)||r||n||e||t}class Ya{constructor(e){var n,r,s,i,o,a;const c=Dr(Nr(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=Uy((s=c.mode)!==null&&s!==void 0?s:null);H(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=$y(e);try{return new Ya(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(){this.providerId=Ir.PROVIDER_ID}static credential(e,n){return Gr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ya.parseLink(n);return H(r,"argument-error"),Gr._fromEmailAndCode(e,r.code,r.tenantId)}}Ir.PROVIDER_ID="password";Ir.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ir.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs extends Ja{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends gs{constructor(){super("facebook.com")}static credential(e){return Cn._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xt.credential(e.oauthAccessToken)}catch{return null}}}Xt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt extends gs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Cn._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Lt.credentialFromTaggedObject(e)}static credentialFromError(e){return Lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Lt.credential(n,r)}catch{return null}}}Lt.GOOGLE_SIGN_IN_METHOD="google.com";Lt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends gs{constructor(){super("github.com")}static credential(e){return Cn._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zt.credential(e.oauthAccessToken)}catch{return null}}}Zt.GITHUB_SIGN_IN_METHOD="github.com";Zt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends gs{constructor(){super("twitter.com")}static credential(e,n){return Cn._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return en.credential(n,r)}catch{return null}}}en.TWITTER_SIGN_IN_METHOD="twitter.com";en.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function By(t,e){return ms(t,"POST","/v1/accounts:signUp",fn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Rn._fromIdTokenResponse(e,r,s),o=$l(r);return new Dn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=$l(r);return new Dn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function $l(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di extends _t{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,di.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new di(e,n,r,s)}}function dd(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?di._fromErrorAndOperation(t,i,e,r):i})}async function jy(t,e,n=!1){const r=await lr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Dn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qy(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await lr(t,dd(r,s,e,t),n);H(i.idToken,r,"internal-error");const o=Ka(i.idToken);H(o,r,"internal-error");const{sub:a}=o;return H(t.uid===a,r,"user-mismatch"),Dn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ut(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fd(t,e,n=!1){const r="signIn",s=await dd(t,r,e),i=await Dn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function zy(t,e){return fd(pn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pd(t){const e=pn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Hy(t,e,n){const r=pn(t),o=await sa(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",By).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&pd(t),c}),a=await Dn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function Wy(t,e,n){return zy(Ce(t),Ir.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&pd(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ky(t,e){return Gt(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gy(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Ce(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await lr(r,Ky(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Qy(t,e,n,r){return Ce(t).onIdTokenChanged(e,n,r)}function Yy(t,e,n){return Ce(t).beforeAuthStateChanged(e,n)}function _s(t,e,n,r){return Ce(t).onAuthStateChanged(e,n,r)}function Jy(t){return Ce(t).signOut()}const fi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(fi,"1"),this.storage.removeItem(fi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xy(){const t=ze();return Ga(t)||Di(t)}const Zy=1e3,ev=10;class gd extends md{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Xy()&&_y(),this.fallbackToPolling=cd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);gy()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,ev):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Zy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}gd.type="LOCAL";const tv=gd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d extends md{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}_d.type="SESSION";const yd=_d;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nv(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ni(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await nv(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ni.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xa(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Xa("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(){return window}function sv(t){Rt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vd(){return typeof Rt().WorkerGlobalScope<"u"&&typeof Rt().importScripts=="function"}async function iv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ov(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function av(){return vd()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id="firebaseLocalStorageDb",cv=1,pi="firebaseLocalStorage",wd="fbase_key";class ys{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Vi(t,e){return t.transaction([pi],e?"readwrite":"readonly").objectStore(pi)}function lv(){const t=indexedDB.deleteDatabase(Id);return new ys(t).toPromise()}function ia(){const t=indexedDB.open(Id,cv);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(pi,{keyPath:wd})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(pi)?e(r):(r.close(),await lv(),e(await ia()))})})}async function Bl(t,e,n){const r=Vi(t,!0).put({[wd]:e,value:n});return new ys(r).toPromise()}async function uv(t,e){const n=Vi(t,!1).get(e),r=await new ys(n).toPromise();return r===void 0?null:r.value}function jl(t,e){const n=Vi(t,!0).delete(e);return new ys(n).toPromise()}const hv=800,dv=3;class Ed{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ia(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>dv)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return vd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ni._getInstance(av()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await iv(),!this.activeServiceWorker)return;this.sender=new rv(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ov()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ia();return await Bl(e,fi,"1"),await jl(e,fi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Bl(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>uv(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>jl(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Vi(s,!1).getAll();return new ys(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ed.type="LOCAL";const fv=Ed;new ps(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(t,e){return e?$t(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za extends Qa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return sr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return sr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return sr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function pv(t){return fd(t.auth,new Za(t),t.bypassAuthState)}function mv(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),qy(n,new Za(t),t.bypassAuthState)}async function gv(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),jy(n,new Za(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return pv;case"linkViaPopup":case"linkViaRedirect":return gv;case"reauthViaPopup":case"reauthViaRedirect":return mv;default:ut(this.auth,"internal-error")}}resolve(e){zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _v=new ps(2e3,1e4);async function yv(t,e,n){const r=pn(t);G_(t,e,Ja);const s=Td(r,n);return new In(r,"signInViaPopup",e,s).executeNotNull()}class In extends Ad{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,In.currentPopupAction&&In.currentPopupAction.cancel(),In.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){zt(this.filter.length===1,"Popup operations only handle one event");const e=Xa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(bt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(bt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,In.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(bt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,_v.get())};e()}}In.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vv="pendingRedirect",Xs=new Map;class Iv extends Ad{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Xs.get(this.auth._key());if(!e){try{const r=await wv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Xs.set(this.auth._key(),e)}return this.bypassAuthState||Xs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function wv(t,e){const n=Av(e),r=Tv(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Ev(t,e){Xs.set(t._key(),e)}function Tv(t){return $t(t._redirectPersistence)}function Av(t){return Js(vv,t.config.apiKey,t.name)}async function bv(t,e,n=!1){const r=pn(t),s=Td(r,e),o=await new Iv(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv=10*60*1e3;class Sv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kv(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!bd(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(bt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Rv&&this.cachedEventUids.clear(),this.cachedEventUids.has(ql(e))}saveEventToCache(e){this.cachedEventUids.add(ql(e)),this.lastProcessedEventTime=Date.now()}}function ql(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function bd({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kv(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return bd(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pv(t,e={}){return Gt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Dv=/^https?/;async function Nv(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Pv(t);for(const n of e)try{if(Vv(n))return}catch{}ut(t,"unauthorized-domain")}function Vv(t){const e=ra(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Dv.test(n))return!1;if(Cv.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ov=new ps(3e4,6e4);function zl(){const t=Rt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Mv(t){return new Promise((e,n)=>{var r,s,i;function o(){zl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zl(),n(bt(t,"network-request-failed"))},timeout:Ov.get()})}if(!((s=(r=Rt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Rt().gapi)===null||i===void 0)&&i.load)o();else{const a=Ay("iframefcb");return Rt()[a]=()=>{gapi.load?o():n(bt(t,"network-request-failed"))},ud(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Zs=null,e})}let Zs=null;function Lv(t){return Zs=Zs||Mv(t),Zs}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv=new ps(5e3,15e3),Fv="__/auth/iframe",Uv="emulator/auth/iframe",$v={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Bv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jv(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Wa(e,Uv):`https://${t.config.authDomain}/${Fv}`,r={apiKey:e.apiKey,appName:t.name,v:vr},s=Bv.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ds(r).slice(1)}`}async function qv(t){const e=await Lv(t),n=Rt().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:jv(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$v,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=bt(t,"network-request-failed"),a=Rt().setTimeout(()=>{i(o)},xv.get());function c(){Rt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Hv=500,Wv=600,Kv="_blank",Gv="http://localhost";class Hl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Qv(t,e,n,r=Hv,s=Wv){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},zv),{width:r.toString(),height:s.toString(),top:i,left:o}),l=ze().toLowerCase();n&&(a=rd(l)?Kv:n),nd(l)&&(e=e||Gv,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[p,m])=>`${d}${p}=${m},`,"");if(my(l)&&a!=="_self")return Yv(e||"",a),new Hl(null);const h=window.open(e||"",a,u);H(h,t,"popup-blocked");try{h.focus()}catch{}return new Hl(h)}function Yv(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jv="__/auth/handler",Xv="emulator/auth/handler",Zv=encodeURIComponent("fac");async function Wl(t,e,n,r,s,i){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:vr,eventId:s};if(e instanceof Ja){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Vg(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof gs){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${Zv}=${encodeURIComponent(c)}`:"";return`${eI(t)}?${ds(a).slice(1)}${l}`}function eI({config:t}){return t.emulator?Wa(t,Xv):`https://${t.authDomain}/${Jv}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So="webStorageSupport";class tI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yd,this._completeRedirectFn=bv,this._overrideRedirectResult=Ev}async _openPopup(e,n,r,s){var i;zt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Wl(e,n,r,ra(),s);return Qv(e,o,Xa())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Wl(e,n,r,ra(),s);return sv(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(zt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await qv(e),r=new Sv(e);return n.register("authEvent",s=>(H(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(So,{type:So},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[So];o!==void 0&&n(!!o),ut(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Nv(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return cd()||Ga()||Di()}}const nI=tI;var Kl="@firebase/auth",Gl="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function iI(t){Dt(new pt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ld(t)},l=new Ey(r,s,i,c);return Cy(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Dt(new pt("auth-internal",e=>{const n=pn(e.getProvider("auth").getImmediate());return(r=>new rI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ct(Kl,Gl,sI(t)),ct(Kl,Gl,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI=5*60,aI=Uh("authIdTokenMaxAge")||oI;let Ql=null;const cI=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>aI)return;const s=n==null?void 0:n.token;Ql!==s&&(Ql=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function mt(t=Hh()){const e=fs(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Py(t,{popupRedirectResolver:nI,persistence:[fv,tv,yd]}),r=Uh("authTokenSyncURL");if(r){const i=cI(r);Yy(n,i,()=>i(n.currentUser)),Qy(n,o=>i(o))}const s=xh("auth");return s&&Dy(n,`http://${s}`),n}iI("Browser");var Rd="https://js.stripe.com/v3",lI=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,Yl="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",uI=function(){for(var e=document.querySelectorAll('script[src^="'.concat(Rd,'"]')),n=0;n<e.length;n++){var r=e[n];if(lI.test(r.src))return r}return null},Jl=function(e){var n=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",r=document.createElement("script");r.src="".concat(Rd).concat(n);var s=document.head||document.body;if(!s)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return s.appendChild(r),r},hI=function(e,n){!e||!e._registerWrapper||e._registerWrapper({name:"stripe-js",version:"2.2.2",startTime:n})},Sr=null,Fs=null,Us=null,dI=function(e){return function(){e(new Error("Failed to load Stripe.js"))}},fI=function(e,n){return function(){window.Stripe?e(window.Stripe):n(new Error("Stripe.js not available"))}},pI=function(e){return Sr!==null?Sr:(Sr=new Promise(function(n,r){if(typeof window>"u"||typeof document>"u"){n(null);return}if(window.Stripe&&e&&console.warn(Yl),window.Stripe){n(window.Stripe);return}try{var s=uI();if(s&&e)console.warn(Yl);else if(!s)s=Jl(e);else if(s&&Us!==null&&Fs!==null){var i;s.removeEventListener("load",Us),s.removeEventListener("error",Fs),(i=s.parentNode)===null||i===void 0||i.removeChild(s),s=Jl(e)}Us=fI(n,r),Fs=dI(r),s.addEventListener("load",Us),s.addEventListener("error",Fs)}catch(o){r(o);return}}),Sr.catch(function(n){return Sr=null,Promise.reject(n)}))},mI=function(e,n,r){if(e===null)return null;var s=e.apply(void 0,n);return hI(s,r),s},Sd=Promise.resolve().then(function(){return pI(null)}),kd=!1;Sd.catch(function(t){kd||console.warn(t)});var Pd=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];kd=!0;var s=Date.now();return Sd.then(function(i){return mI(i,n,s)})},gI="firebase",_I="10.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ct(gI,_I,"app");const yI=(t,e)=>e.some(n=>t instanceof n);let Xl,Zl;function vI(){return Xl||(Xl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function II(){return Zl||(Zl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Cd=new WeakMap,oa=new WeakMap,Dd=new WeakMap,ko=new WeakMap,ec=new WeakMap;function wI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(an(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Cd.set(n,t)}).catch(()=>{}),ec.set(e,t),e}function EI(t){if(oa.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});oa.set(t,e)}let aa={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return oa.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Dd.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return an(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function TI(t){aa=t(aa)}function AI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Po(this),e,...n);return Dd.set(r,e.sort?e.sort():[e]),an(r)}:II().includes(t)?function(...e){return t.apply(Po(this),e),an(Cd.get(this))}:function(...e){return an(t.apply(Po(this),e))}}function bI(t){return typeof t=="function"?AI(t):(t instanceof IDBTransaction&&EI(t),yI(t,vI())?new Proxy(t,aa):t)}function an(t){if(t instanceof IDBRequest)return wI(t);if(ko.has(t))return ko.get(t);const e=bI(t);return e!==t&&(ko.set(t,e),ec.set(e,t)),e}const Po=t=>ec.get(t);function RI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=an(o);return r&&o.addEventListener("upgradeneeded",c=>{r(an(o.result),c.oldVersion,c.newVersion,an(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const SI=["get","getKey","getAll","getAllKeys","count"],kI=["put","add","delete","clear"],Co=new Map;function eu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Co.get(e))return Co.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=kI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||SI.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Co.set(e,i),i}TI(t=>({...t,get:(e,n,r)=>eu(e,n)||t.get(e,n,r),has:(e,n)=>!!eu(e,n)||t.has(e,n)}));const Nd="@firebase/installations",tc="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd=1e4,Od=`w:${tc}`,Md="FIS_v2",PI="https://firebaseinstallations.googleapis.com/v1",CI=60*60*1e3,DI="installations",NI="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Nn=new Fn(DI,NI,VI);function Ld(t){return t instanceof _t&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd({projectId:t}){return`${PI}/projects/${t}/installations`}function Fd(t){return{token:t.token,requestStatus:2,expiresIn:MI(t.expiresIn),creationTime:Date.now()}}async function Ud(t,e){const r=(await e.json()).error;return Nn.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function $d({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function OI(t,{refreshToken:e}){const n=$d(t);return n.append("Authorization",LI(e)),n}async function Bd(t){const e=await t();return e.status>=500&&e.status<600?t():e}function MI(t){return Number(t.replace("s","000"))}function LI(t){return`${Md} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xI({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=xd(t),s=$d(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:Md,appId:t.appId,sdkVersion:Od},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Bd(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Fd(l.authToken)}}else throw await Ud("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FI(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI=/^[cdef][\w-]{21}$/,ca="";function $I(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=BI(t);return UI.test(n)?n:ca}catch{return ca}}function BI(t){return FI(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oi(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd=new Map;function zd(t,e){const n=Oi(t);Hd(n,e),jI(n,e)}function Hd(t,e){const n=qd.get(t);if(n)for(const r of n)r(e)}function jI(t,e){const n=qI();n&&n.postMessage({key:t,fid:e}),zI()}let wn=null;function qI(){return!wn&&"BroadcastChannel"in self&&(wn=new BroadcastChannel("[Firebase] FID Change"),wn.onmessage=t=>{Hd(t.data.key,t.data.fid)}),wn}function zI(){qd.size===0&&wn&&(wn.close(),wn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HI="firebase-installations-database",WI=1,Vn="firebase-installations-store";let Do=null;function nc(){return Do||(Do=RI(HI,WI,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Vn)}}})),Do}async function mi(t,e){const n=Oi(t),s=(await nc()).transaction(Vn,"readwrite"),i=s.objectStore(Vn),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&zd(t,e.fid),e}async function Wd(t){const e=Oi(t),r=(await nc()).transaction(Vn,"readwrite");await r.objectStore(Vn).delete(e),await r.done}async function Mi(t,e){const n=Oi(t),s=(await nc()).transaction(Vn,"readwrite"),i=s.objectStore(Vn),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&zd(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rc(t){let e;const n=await Mi(t.appConfig,r=>{const s=KI(r),i=GI(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===ca?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function KI(t){const e=t||{fid:$I(),registrationStatus:0};return Kd(e)}function GI(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Nn.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=QI(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:YI(t)}:{installationEntry:e}}async function QI(t,e){try{const n=await xI(t,e);return mi(t.appConfig,n)}catch(n){throw Ld(n)&&n.customData.serverCode===409?await Wd(t.appConfig):await mi(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function YI(t){let e=await tu(t.appConfig);for(;e.registrationStatus===1;)await jd(100),e=await tu(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await rc(t);return r||n}return e}function tu(t){return Mi(t,e=>{if(!e)throw Nn.create("installation-not-found");return Kd(e)})}function Kd(t){return JI(t)?{fid:t.fid,registrationStatus:0}:t}function JI(t){return t.registrationStatus===1&&t.registrationTime+Vd<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XI({appConfig:t,heartbeatServiceProvider:e},n){const r=ZI(t,n),s=OI(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:Od,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Bd(()=>fetch(r,a));if(c.ok){const l=await c.json();return Fd(l)}else throw await Ud("Generate Auth Token",c)}function ZI(t,{fid:e}){return`${xd(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sc(t,e=!1){let n;const r=await Mi(t.appConfig,i=>{if(!Gd(i))throw Nn.create("not-registered");const o=i.authToken;if(!e&&nw(o))return i;if(o.requestStatus===1)return n=ew(t,e),i;{if(!navigator.onLine)throw Nn.create("app-offline");const a=sw(i);return n=tw(t,a),a}});return n?await n:r.authToken}async function ew(t,e){let n=await nu(t.appConfig);for(;n.authToken.requestStatus===1;)await jd(100),n=await nu(t.appConfig);const r=n.authToken;return r.requestStatus===0?sc(t,e):r}function nu(t){return Mi(t,e=>{if(!Gd(e))throw Nn.create("not-registered");const n=e.authToken;return iw(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function tw(t,e){try{const n=await XI(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await mi(t.appConfig,r),n}catch(n){if(Ld(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Wd(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await mi(t.appConfig,r)}throw n}}function Gd(t){return t!==void 0&&t.registrationStatus===2}function nw(t){return t.requestStatus===2&&!rw(t)}function rw(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+CI}function sw(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function iw(t){return t.requestStatus===1&&t.requestTime+Vd<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ow(t){const e=t,{installationEntry:n,registrationPromise:r}=await rc(e);return r?r.catch(console.error):sc(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aw(t,e=!1){const n=t;return await cw(n),(await sc(n,e)).token}async function cw(t){const{registrationPromise:e}=await rc(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lw(t){if(!t||!t.options)throw No("App Configuration");if(!t.name)throw No("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw No(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function No(t){return Nn.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd="installations",uw="installations-internal",hw=t=>{const e=t.getProvider("app").getImmediate(),n=lw(e),r=fs(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},dw=t=>{const e=t.getProvider("app").getImmediate(),n=fs(e,Qd).getImmediate();return{getId:()=>ow(n),getToken:s=>aw(n,s)}};function fw(){Dt(new pt(Qd,hw,"PUBLIC")),Dt(new pt(uw,dw,"PRIVATE"))}fw();ct(Nd,tc);ct(Nd,tc,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru="analytics",pw="firebase_id",mw="origin",gw=60*1e3,_w="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ic="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je=new Ci("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},lt=new Fn("analytics","Analytics",yw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vw(t){if(!t.startsWith(ic)){const e=lt.create("invalid-gtag-resource",{gtagURL:t});return Je.warn(e.message),""}return t}function Yd(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Iw(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function ww(t,e){const n=Iw("firebase-js-sdk-policy",{createScriptURL:vw}),r=document.createElement("script"),s=`${ic}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function Ew(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Tw(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const c=(await Yd(n)).find(l=>l.measurementId===s);c&&await e[c.appId]}}catch(a){Je.error(a)}t("config",s,i)}async function Aw(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await Yd(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){Je.error(i)}}function bw(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[a,c]=o;await Aw(t,e,n,a,c)}else if(i==="config"){const[a,c]=o;await Tw(t,e,n,r,a,c)}else if(i==="consent"){const[a]=o;t("consent","update",a)}else if(i==="get"){const[a,c,l]=o;t("get",a,c,l)}else if(i==="set"){const[a]=o;t("set",a)}else t(i,...o)}catch(a){Je.error(a)}}return s}function Rw(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=bw(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function Sw(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(ic)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kw=30,Pw=1e3;class Cw{constructor(e={},n=Pw){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Jd=new Cw;function Dw(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Nw(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:Dw(r)},i=_w.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw lt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Vw(t,e=Jd,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw lt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw lt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Lw;return setTimeout(async()=>{a.abort()},n!==void 0?n:gw),Xd({appId:r,apiKey:s,measurementId:i},o,a,e)}async function Xd(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=Jd){var i;const{appId:o,measurementId:a}=t;try{await Ow(r,e)}catch(c){if(a)return Je.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await Nw(t);return s.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!Mw(l)){if(s.deleteThrottleMetadata(o),a)return Je.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?Al(n,s.intervalMillis,kw):Al(n,s.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(o,h),Je.debug(`Calling attemptFetch again in ${u} millis`),Xd(t,h,r,s)}}function Ow(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(lt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Mw(t){if(!(t instanceof _t)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Lw{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function xw(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fw(){if(Bh())try{await jh()}catch(t){return Je.warn(lt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Je.warn(lt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Uw(t,e,n,r,s,i,o){var a;const c=Vw(t);c.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&Je.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>Je.error(p)),e.push(c);const l=Fw().then(p=>{if(p)return r.getId()}),[u,h]=await Promise.all([c,l]);Sw(i)||ww(i,u.measurementId),s("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[mw]="firebase",d.update=!0,h!=null&&(d[pw]=h),s("config",u.measurementId,d),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(e){this.app=e}_delete(){return delete Ur[this.app.options.appId],Promise.resolve()}}let Ur={},su=[];const iu={};let Vo="dataLayer",Bw="gtag",ou,Zd,au=!1;function jw(){const t=[];if($h()&&t.push("This is a browser extension environment."),Pg()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=lt.create("invalid-analytics-context",{errorInfo:e});Je.warn(n.message)}}function qw(t,e,n){jw();const r=t.options.appId;if(!r)throw lt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Je.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw lt.create("no-api-key");if(Ur[r]!=null)throw lt.create("already-exists",{id:r});if(!au){Ew(Vo);const{wrappedGtag:i,gtagCore:o}=Rw(Ur,su,iu,Vo,Bw);Zd=i,ou=o,au=!0}return Ur[r]=Uw(t,su,iu,e,ou,Vo,n),new $w(t)}function zw(t,e,n,r){t=Ce(t),xw(Zd,Ur[t.app.options.appId],e,n,r).catch(s=>Je.error(s))}const cu="@firebase/analytics",lu="0.10.0";function Hw(){Dt(new pt(ru,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return qw(r,s,n)},"PUBLIC")),Dt(new pt("analytics-internal",t,"PRIVATE")),ct(cu,lu),ct(cu,lu,"esm2017");function t(e){try{const n=e.getProvider(ru).getImmediate();return{logEvent:(r,s,i)=>zw(n,r,s,i)}}catch(n){throw lt.create("interop-component-reg-failed",{reason:n})}}}Hw();var Ww=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},k,oc=oc||{},W=Ww||self;function Li(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function vs(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Kw(t){return Object.prototype.hasOwnProperty.call(t,Oo)&&t[Oo]||(t[Oo]=++Gw)}var Oo="closure_uid_"+(1e9*Math.random()>>>0),Gw=0;function Qw(t,e,n){return t.call.apply(t.bind,arguments)}function Yw(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function je(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?je=Qw:je=Yw,je.apply(null,arguments)}function $s(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ne(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function mn(){this.s=this.s,this.o=this.o}var Jw=0;mn.prototype.s=!1;mn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Jw!=0)&&Kw(this)};mn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ef=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function ac(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function uu(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Li(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function qe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}qe.prototype.h=function(){this.defaultPrevented=!0};var Xw=function(){if(!W.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};W.addEventListener("test",n,e),W.removeEventListener("test",n,e)}catch{}return t}();function Qr(t){return/^[\s\xa0]*$/.test(t)}function xi(){var t=W.navigator;return t&&(t=t.userAgent)?t:""}function Et(t){return xi().indexOf(t)!=-1}function cc(t){return cc[" "](t),t}cc[" "]=function(){};function Zw(t,e){var n=HE;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var eE=Et("Opera"),ur=Et("Trident")||Et("MSIE"),tf=Et("Edge"),la=tf||ur,nf=Et("Gecko")&&!(xi().toLowerCase().indexOf("webkit")!=-1&&!Et("Edge"))&&!(Et("Trident")||Et("MSIE"))&&!Et("Edge"),tE=xi().toLowerCase().indexOf("webkit")!=-1&&!Et("Edge");function rf(){var t=W.document;return t?t.documentMode:void 0}var ua;e:{var Mo="",Lo=function(){var t=xi();if(nf)return/rv:([^\);]+)(\)|;)/.exec(t);if(tf)return/Edge\/([\d\.]+)/.exec(t);if(ur)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(tE)return/WebKit\/(\S+)/.exec(t);if(eE)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Lo&&(Mo=Lo?Lo[1]:""),ur){var xo=rf();if(xo!=null&&xo>parseFloat(Mo)){ua=String(xo);break e}}ua=Mo}var ha;if(W.document&&ur){var hu=rf();ha=hu||parseInt(ua,10)||void 0}else ha=void 0;var nE=ha;function Yr(t,e){if(qe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(nf){e:{try{cc(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:rE[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Yr.$.h.call(this)}}Ne(Yr,qe);var rE={2:"touch",3:"pen",4:"mouse"};Yr.prototype.h=function(){Yr.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Is="closure_listenable_"+(1e6*Math.random()|0),sE=0;function iE(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++sE,this.fa=this.ia=!1}function Fi(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function lc(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function oE(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function sf(t){const e={};for(const n in t)e[n]=t[n];return e}const du="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function of(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<du.length;i++)n=du[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ui(t){this.src=t,this.g={},this.h=0}Ui.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=fa(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new iE(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function da(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=ef(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Fi(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function fa(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var uc="closure_lm_"+(1e6*Math.random()|0),Fo={};function af(t,e,n,r,s){if(r&&r.once)return lf(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)af(t,e[i],n,r,s);return null}return n=fc(n),t&&t[Is]?t.O(e,n,vs(r)?!!r.capture:!!r,s):cf(t,e,n,!1,r,s)}function cf(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=vs(s)?!!s.capture:!!s,a=dc(t);if(a||(t[uc]=a=new Ui(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=aE(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)Xw||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(hf(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function aE(){function t(n){return e.call(t.src,t.listener,n)}const e=cE;return t}function lf(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)lf(t,e[i],n,r,s);return null}return n=fc(n),t&&t[Is]?t.P(e,n,vs(r)?!!r.capture:!!r,s):cf(t,e,n,!0,r,s)}function uf(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)uf(t,e[i],n,r,s);else r=vs(r)?!!r.capture:!!r,n=fc(n),t&&t[Is]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=fa(i,n,r,s),-1<n&&(Fi(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=dc(t))&&(e=t.g[e.toString()],t=-1,e&&(t=fa(e,n,r,s)),(n=-1<t?e[t]:null)&&hc(n))}function hc(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Is])da(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(hf(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=dc(e))?(da(n,t),n.h==0&&(n.src=null,e[uc]=null)):Fi(t)}}}function hf(t){return t in Fo?Fo[t]:Fo[t]="on"+t}function cE(t,e){if(t.fa)t=!0;else{e=new Yr(e,this);var n=t.listener,r=t.la||t.src;t.ia&&hc(t),t=n.call(r,e)}return t}function dc(t){return t=t[uc],t instanceof Ui?t:null}var Uo="__closure_events_fn_"+(1e9*Math.random()>>>0);function fc(t){return typeof t=="function"?t:(t[Uo]||(t[Uo]=function(e){return t.handleEvent(e)}),t[Uo])}function De(){mn.call(this),this.i=new Ui(this),this.S=this,this.J=null}Ne(De,mn);De.prototype[Is]=!0;De.prototype.removeEventListener=function(t,e,n,r){uf(this,t,e,n,r)};function Le(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new qe(e,t);else if(e instanceof qe)e.target=e.target||t;else{var s=e;e=new qe(r,t),of(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Bs(o,r,!0,e)&&s}if(o=e.g=t,s=Bs(o,r,!0,e)&&s,s=Bs(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Bs(o,r,!1,e)&&s}De.prototype.N=function(){if(De.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Fi(n[r]);delete t.g[e],t.h--}}this.J=null};De.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};De.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Bs(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&da(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var pc=W.JSON.stringify;class lE{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function uE(){var t=mc;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class hE{constructor(){this.h=this.g=null}add(e,n){const r=df.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var df=new lE(()=>new dE,t=>t.reset());class dE{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function fE(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function pE(t){W.setTimeout(()=>{throw t},0)}let Jr,Xr=!1,mc=new hE,ff=()=>{const t=W.Promise.resolve(void 0);Jr=()=>{t.then(mE)}};var mE=()=>{for(var t;t=uE();){try{t.h.call(t.g)}catch(n){pE(n)}var e=df;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Xr=!1};function $i(t,e){De.call(this),this.h=t||1,this.g=e||W,this.j=je(this.qb,this),this.l=Date.now()}Ne($i,De);k=$i.prototype;k.ga=!1;k.T=null;k.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Le(this,"tick"),this.ga&&(gc(this),this.start()))}};k.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function gc(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}k.N=function(){$i.$.N.call(this),gc(this),delete this.g};function _c(t,e,n){if(typeof t=="function")n&&(t=je(t,n));else if(t&&typeof t.handleEvent=="function")t=je(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:W.setTimeout(t,e||0)}function pf(t){t.g=_c(()=>{t.g=null,t.i&&(t.i=!1,pf(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class gE extends mn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:pf(this)}N(){super.N(),this.g&&(W.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Zr(t){mn.call(this),this.h=t,this.g={}}Ne(Zr,mn);var fu=[];function mf(t,e,n,r){Array.isArray(n)||(n&&(fu[0]=n.toString()),n=fu);for(var s=0;s<n.length;s++){var i=af(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function gf(t){lc(t.g,function(e,n){this.g.hasOwnProperty(n)&&hc(e)},t),t.g={}}Zr.prototype.N=function(){Zr.$.N.call(this),gf(this)};Zr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Bi(){this.g=!0}Bi.prototype.Ea=function(){this.g=!1};function _E(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function yE(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function er(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+IE(t,n)+(r?" "+r:"")})}function vE(t,e){t.info(function(){return"TIMEOUT: "+e})}Bi.prototype.info=function(){};function IE(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return pc(n)}catch{return e}}var Un={},pu=null;function ji(){return pu=pu||new De}Un.Ta="serverreachability";function _f(t){qe.call(this,Un.Ta,t)}Ne(_f,qe);function es(t){const e=ji();Le(e,new _f(e))}Un.STAT_EVENT="statevent";function yf(t,e){qe.call(this,Un.STAT_EVENT,t),this.stat=e}Ne(yf,qe);function Qe(t){const e=ji();Le(e,new yf(e,t))}Un.Ua="timingevent";function vf(t,e){qe.call(this,Un.Ua,t),this.size=e}Ne(vf,qe);function ws(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return W.setTimeout(function(){t()},e)}var qi={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},If={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function yc(){}yc.prototype.h=null;function mu(t){return t.h||(t.h=t.i())}function wf(){}var Es={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function vc(){qe.call(this,"d")}Ne(vc,qe);function Ic(){qe.call(this,"c")}Ne(Ic,qe);var pa;function zi(){}Ne(zi,yc);zi.prototype.g=function(){return new XMLHttpRequest};zi.prototype.i=function(){return{}};pa=new zi;function Ts(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Zr(this),this.P=wE,t=la?125:void 0,this.V=new $i(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Ef}function Ef(){this.i=null,this.g="",this.h=!1}var wE=45e3,Tf={},ma={};k=Ts.prototype;k.setTimeout=function(t){this.P=t};function ga(t,e,n){t.L=1,t.A=Wi(Ht(e)),t.u=n,t.S=!0,Af(t,null)}function Af(t,e){t.G=Date.now(),As(t),t.B=Ht(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),Nf(n.i,"t",r),t.o=0,n=t.l.J,t.h=new Ef,t.g=Zf(t.l,n?e:null,!t.u),0<t.O&&(t.M=new gE(je(t.Pa,t,t.g),t.O)),mf(t.U,t.g,"readystatechange",t.nb),e=t.I?sf(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),es(),_E(t.j,t.v,t.B,t.m,t.W,t.u)}k.nb=function(t){t=t.target;const e=this.M;e&&Tt(t)==3?e.l():this.Pa(t)};k.Pa=function(t){try{if(t==this.g)e:{const u=Tt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||la||this.g&&(this.h.h||this.g.ja()||vu(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?es(3):es(2)),Hi(this);var n=this.g.da();this.ca=n;t:if(bf(this)){var r=vu(this.g);t="";var s=r.length,i=Tt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){En(this),$r(this);var o="";break t}this.h.i=new W.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,yE(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Qr(a)){var l=a;break t}}l=null}if(n=l)er(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,_a(this,n);else{this.i=!1,this.s=3,Qe(12),En(this),$r(this);break e}}this.S?(Rf(this,u,o),la&&this.i&&u==3&&(mf(this.U,this.V,"tick",this.mb),this.V.start())):(er(this.j,this.m,o,null),_a(this,o)),u==4&&En(this),this.i&&!this.J&&(u==4?Qf(this.l,this):(this.i=!1,As(this)))}else jE(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,Qe(12)):(this.s=0,Qe(13)),En(this),$r(this)}}}catch{}finally{}};function bf(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function Rf(t,e,n){let r=!0,s;for(;!t.J&&t.o<n.length;)if(s=EE(t,n),s==ma){e==4&&(t.s=4,Qe(14),r=!1),er(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Tf){t.s=4,Qe(15),er(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else er(t.j,t.m,s,null),_a(t,s);bf(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,Qe(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Rc(e),e.M=!0,Qe(11))):(er(t.j,t.m,n,"[Invalid Chunked Response]"),En(t),$r(t))}k.mb=function(){if(this.g){var t=Tt(this.g),e=this.g.ja();this.o<e.length&&(Hi(this),Rf(this,t,e),this.i&&t!=4&&As(this))}};function EE(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?ma:(n=Number(e.substring(n,r)),isNaN(n)?Tf:(r+=1,r+n>e.length?ma:(e=e.slice(r,r+n),t.o=r+n,e)))}k.cancel=function(){this.J=!0,En(this)};function As(t){t.Y=Date.now()+t.P,Sf(t,t.P)}function Sf(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=ws(je(t.lb,t),e)}function Hi(t){t.C&&(W.clearTimeout(t.C),t.C=null)}k.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(vE(this.j,this.B),this.L!=2&&(es(),Qe(17)),En(this),this.s=2,$r(this)):Sf(this,this.Y-t)};function $r(t){t.l.H==0||t.J||Qf(t.l,t)}function En(t){Hi(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,gc(t.V),gf(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function _a(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||ya(n.i,t))){if(!t.K&&ya(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)yi(n),Yi(n);else break e;bc(n),Qe(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=ws(je(n.ib,n),6e3));if(1>=Mf(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Tn(n,11)}else if((t.K||n.g==t)&&yi(n),!Qr(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=r.i;i.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(wc(i,i.h),i.h=null))}if(r.F){const g=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(r.Da=g,de(r.I,r.F,g))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=Xf(r,r.J?r.pa:null,r.Y),o.K){Lf(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(Hi(a),As(a)),r.g=o}else Kf(r);0<n.j.length&&Ji(n)}else l[0]!="stop"&&l[0]!="close"||Tn(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Tn(n,7):Ac(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}es(4)}catch{}}function TE(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Li(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function AE(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Li(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function kf(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Li(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=AE(t),r=TE(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var Pf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bE(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Sn(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Sn){this.h=t.h,gi(this,t.j),this.s=t.s,this.g=t.g,_i(this,t.m),this.l=t.l;var e=t.i,n=new ts;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),gu(this,n),this.o=t.o}else t&&(e=String(t).match(Pf))?(this.h=!1,gi(this,e[1]||"",!0),this.s=Vr(e[2]||""),this.g=Vr(e[3]||"",!0),_i(this,e[4]),this.l=Vr(e[5]||"",!0),gu(this,e[6]||"",!0),this.o=Vr(e[7]||"")):(this.h=!1,this.i=new ts(null,this.h))}Sn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Or(e,_u,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Or(e,_u,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Or(n,n.charAt(0)=="/"?kE:SE,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Or(n,CE)),t.join("")};function Ht(t){return new Sn(t)}function gi(t,e,n){t.j=n?Vr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function _i(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function gu(t,e,n){e instanceof ts?(t.i=e,DE(t.i,t.h)):(n||(e=Or(e,PE)),t.i=new ts(e,t.h))}function de(t,e,n){t.i.set(e,n)}function Wi(t){return de(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Vr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Or(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,RE),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function RE(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var _u=/[#\/\?@]/g,SE=/[#\?:]/g,kE=/[#\?]/g,PE=/[#\?@]/g,CE=/#/g;function ts(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function gn(t){t.g||(t.g=new Map,t.h=0,t.i&&bE(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}k=ts.prototype;k.add=function(t,e){gn(this),this.i=null,t=wr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Cf(t,e){gn(t),e=wr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Df(t,e){return gn(t),e=wr(t,e),t.g.has(e)}k.forEach=function(t,e){gn(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};k.ta=function(){gn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};k.Z=function(t){gn(this);let e=[];if(typeof t=="string")Df(this,t)&&(e=e.concat(this.g.get(wr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};k.set=function(t,e){return gn(this),this.i=null,t=wr(this,t),Df(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};k.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Nf(t,e,n){Cf(t,e),0<n.length&&(t.i=null,t.g.set(wr(t,e),ac(n)),t.h+=n.length)}k.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function wr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function DE(t,e){e&&!t.j&&(gn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Cf(this,r),Nf(this,s,n))},t)),t.j=e}var NE=class{constructor(t,e){this.g=t,this.map=e}};function Vf(t){this.l=t||VE,W.PerformanceNavigationTiming?(t=W.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(W.g&&W.g.Ka&&W.g.Ka()&&W.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var VE=10;function Of(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Mf(t){return t.h?1:t.g?t.g.size:0}function ya(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function wc(t,e){t.g?t.g.add(e):t.h=e}function Lf(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Vf.prototype.cancel=function(){if(this.i=xf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function xf(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return ac(t.i)}var OE=class{stringify(t){return W.JSON.stringify(t,void 0)}parse(t){return W.JSON.parse(t,void 0)}};function ME(){this.g=new OE}function LE(t,e,n){const r=n||"";try{kf(t,function(s,i){let o=s;vs(s)&&(o=pc(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function xE(t,e){const n=new Bi;if(W.Image){const r=new Image;r.onload=$s(js,n,r,"TestLoadImage: loaded",!0,e),r.onerror=$s(js,n,r,"TestLoadImage: error",!1,e),r.onabort=$s(js,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=$s(js,n,r,"TestLoadImage: timeout",!1,e),W.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function js(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Ki(t){this.l=t.ec||null,this.j=t.ob||!1}Ne(Ki,yc);Ki.prototype.g=function(){return new Gi(this.l,this.j)};Ki.prototype.i=function(t){return function(){return t}}({});function Gi(t,e){De.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Ec,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ne(Gi,De);var Ec=0;k=Gi.prototype;k.open=function(t,e){if(this.readyState!=Ec)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ns(this)};k.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||W).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};k.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,bs(this)),this.readyState=Ec};k.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ns(this)),this.g&&(this.readyState=3,ns(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof W.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ff(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Ff(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}k.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?bs(this):ns(this),this.readyState==3&&Ff(this)}};k.Za=function(t){this.g&&(this.response=this.responseText=t,bs(this))};k.Ya=function(t){this.g&&(this.response=t,bs(this))};k.ka=function(){this.g&&bs(this)};function bs(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ns(t)}k.setRequestHeader=function(t,e){this.v.append(t,e)};k.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};k.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ns(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Gi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var FE=W.JSON.parse;function ve(t){De.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Uf,this.L=this.M=!1}Ne(ve,De);var Uf="",UE=/^https?$/i,$E=["POST","PUT"];k=ve.prototype;k.Oa=function(t){this.M=t};k.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():pa.g(),this.C=this.u?mu(this.u):mu(pa),this.g.onreadystatechange=je(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){yu(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=W.FormData&&t instanceof W.FormData,!(0<=ef($E,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{jf(this),0<this.B&&((this.L=BE(this.g))?(this.g.timeout=this.B,this.g.ontimeout=je(this.ua,this)):this.A=_c(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){yu(this,i)}};function BE(t){return ur&&typeof t.timeout=="number"&&t.ontimeout!==void 0}k.ua=function(){typeof oc<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Le(this,"timeout"),this.abort(8))};function yu(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,$f(t),Qi(t)}function $f(t){t.F||(t.F=!0,Le(t,"complete"),Le(t,"error"))}k.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Le(this,"complete"),Le(this,"abort"),Qi(this))};k.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Qi(this,!0)),ve.$.N.call(this)};k.La=function(){this.s||(this.G||this.v||this.l?Bf(this):this.kb())};k.kb=function(){Bf(this)};function Bf(t){if(t.h&&typeof oc<"u"&&(!t.C[1]||Tt(t)!=4||t.da()!=2)){if(t.v&&Tt(t)==4)_c(t.La,0,t);else if(Le(t,"readystatechange"),Tt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(Pf)[1]||null;!s&&W.self&&W.self.location&&(s=W.self.location.protocol.slice(0,-1)),r=!UE.test(s?s.toLowerCase():"")}n=r}if(n)Le(t,"complete"),Le(t,"success");else{t.m=6;try{var i=2<Tt(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",$f(t)}}finally{Qi(t)}}}}function Qi(t,e){if(t.g){jf(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Le(t,"ready");try{n.onreadystatechange=r}catch{}}}function jf(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(W.clearTimeout(t.A),t.A=null)}k.isActive=function(){return!!this.g};function Tt(t){return t.g?t.g.readyState:0}k.da=function(){try{return 2<Tt(this)?this.g.status:-1}catch{return-1}};k.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};k.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),FE(e)}};function vu(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Uf:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function jE(t){const e={};t=(t.g&&2<=Tt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Qr(t[r]))continue;var n=fE(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}oE(e,function(r){return r.join(", ")})}k.Ia=function(){return this.m};k.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function qf(t){let e="";return lc(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Tc(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=qf(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):de(t,e,n))}function kr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function zf(t){this.Ga=0,this.j=[],this.l=new Bi,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=kr("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=kr("baseRetryDelayMs",5e3,t),this.hb=kr("retryDelaySeedMs",1e4,t),this.eb=kr("forwardChannelMaxRetries",2,t),this.xa=kr("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Vf(t&&t.concurrentRequestLimit),this.Ja=new ME,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}k=zf.prototype;k.ra=8;k.H=1;function Ac(t){if(Hf(t),t.H==3){var e=t.W++,n=Ht(t.I);if(de(n,"SID",t.K),de(n,"RID",e),de(n,"TYPE","terminate"),Rs(t,n),e=new Ts(t,t.l,e),e.L=2,e.A=Wi(Ht(n)),n=!1,W.navigator&&W.navigator.sendBeacon)try{n=W.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&W.Image&&(new Image().src=e.A,n=!0),n||(e.g=Zf(e.l,null),e.g.ha(e.A)),e.G=Date.now(),As(e)}Jf(t)}function Yi(t){t.g&&(Rc(t),t.g.cancel(),t.g=null)}function Hf(t){Yi(t),t.u&&(W.clearTimeout(t.u),t.u=null),yi(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&W.clearTimeout(t.m),t.m=null)}function Ji(t){if(!Of(t.i)&&!t.m){t.m=!0;var e=t.Na;Jr||ff(),Xr||(Jr(),Xr=!0),mc.add(e,t),t.C=0}}function qE(t,e){return Mf(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=ws(je(t.Na,t,e),Yf(t,t.C)),t.C++,!0)}k.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Ts(this,this.l,t);let i=this.s;if(this.U&&(i?(i=sf(i),of(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Wf(this,s,e),n=Ht(this.I),de(n,"RID",t),de(n,"CVER",22),this.F&&de(n,"X-HTTP-Session-Id",this.F),Rs(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(qf(i)))+"&"+e:this.o&&Tc(n,this.o,i)),wc(this.i,s),this.bb&&de(n,"TYPE","init"),this.P?(de(n,"$req",e),de(n,"SID","null"),s.aa=!0,ga(s,n,null)):ga(s,n,e),this.H=2}}else this.H==3&&(t?Iu(this,t):this.j.length==0||Of(this.i)||Iu(this))};function Iu(t,e){var n;e?n=e.m:n=t.W++;const r=Ht(t.I);de(r,"SID",t.K),de(r,"RID",n),de(r,"AID",t.V),Rs(t,r),t.o&&t.s&&Tc(r,t.o,t.s),n=new Ts(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Wf(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),wc(t.i,n),ga(n,r,e)}function Rs(t,e){t.na&&lc(t.na,function(n,r){de(e,r,n)}),t.h&&kf({},function(n,r){de(e,r,n)})}function Wf(t,e,n){n=Math.min(t.j.length,n);var r=t.h?je(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{LE(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function Kf(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Jr||ff(),Xr||(Jr(),Xr=!0),mc.add(e,t),t.A=0}}function bc(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=ws(je(t.Ma,t),Yf(t,t.A)),t.A++,!0)}k.Ma=function(){if(this.u=null,Gf(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=ws(je(this.jb,this),t)}};k.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Qe(10),Yi(this),Gf(this))};function Rc(t){t.B!=null&&(W.clearTimeout(t.B),t.B=null)}function Gf(t){t.g=new Ts(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Ht(t.wa);de(e,"RID","rpc"),de(e,"SID",t.K),de(e,"AID",t.V),de(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&de(e,"TO",t.qa),de(e,"TYPE","xmlhttp"),Rs(t,e),t.o&&t.s&&Tc(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Wi(Ht(e)),n.u=null,n.S=!0,Af(n,t)}k.ib=function(){this.v!=null&&(this.v=null,Yi(this),bc(this),Qe(19))};function yi(t){t.v!=null&&(W.clearTimeout(t.v),t.v=null)}function Qf(t,e){var n=null;if(t.g==e){yi(t),Rc(t),t.g=null;var r=2}else if(ya(t.i,e))n=e.F,Lf(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var s=t.C;r=ji(),Le(r,new vf(r,n)),Ji(t)}else Kf(t);else if(s=e.s,s==3||s==0&&0<e.ca||!(r==1&&qE(t,e)||r==2&&bc(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Tn(t,5);break;case 4:Tn(t,10);break;case 3:Tn(t,6);break;default:Tn(t,2)}}}function Yf(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Tn(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=je(t.pb,t);n||(n=new Sn("//www.google.com/images/cleardot.gif"),W.location&&W.location.protocol=="http"||gi(n,"https"),Wi(n)),xE(n.toString(),r)}else Qe(2);t.H=0,t.h&&t.h.za(e),Jf(t),Hf(t)}k.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Qe(2)):(this.l.info("Failed to ping google.com"),Qe(1))};function Jf(t){if(t.H=0,t.ma=[],t.h){const e=xf(t.i);(e.length!=0||t.j.length!=0)&&(uu(t.ma,e),uu(t.ma,t.j),t.i.i.length=0,ac(t.j),t.j.length=0),t.h.ya()}}function Xf(t,e,n){var r=n instanceof Sn?Ht(n):new Sn(n);if(r.g!="")e&&(r.g=e+"."+r.g),_i(r,r.m);else{var s=W.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new Sn(null);r&&gi(i,r),e&&(i.g=e),s&&_i(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&de(r,n,e),de(r,"VER",t.ra),Rs(t,r),r}function Zf(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new ve(new Ki({ob:n})):new ve(t.va),e.Oa(t.J),e}k.isActive=function(){return!!this.h&&this.h.isActive(this)};function ep(){}k=ep.prototype;k.Ba=function(){};k.Aa=function(){};k.za=function(){};k.ya=function(){};k.isActive=function(){return!0};k.Va=function(){};function vi(){if(ur&&!(10<=Number(nE)))throw Error("Environmental error: no available transport.")}vi.prototype.g=function(t,e){return new tt(t,e)};function tt(t,e){De.call(this),this.g=new zf(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Qr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Qr(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Er(this)}Ne(tt,De);tt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Qe(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Xf(t,null,t.Y),Ji(t)};tt.prototype.close=function(){Ac(this.g)};tt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=pc(t),t=n);e.j.push(new NE(e.fb++,t)),e.H==3&&Ji(e)};tt.prototype.N=function(){this.g.h=null,delete this.j,Ac(this.g),delete this.g,tt.$.N.call(this)};function tp(t){vc.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ne(tp,vc);function np(){Ic.call(this),this.status=1}Ne(np,Ic);function Er(t){this.g=t}Ne(Er,ep);Er.prototype.Ba=function(){Le(this.g,"a")};Er.prototype.Aa=function(t){Le(this.g,new tp(t))};Er.prototype.za=function(t){Le(this.g,new np)};Er.prototype.ya=function(){Le(this.g,"b")};function zE(){this.blockSize=-1}function gt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ne(gt,zE);gt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function $o(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}gt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)$o(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){$o(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){$o(this,r),s=0;break}}this.h=s,this.i+=e};gt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ce(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var HE={};function Sc(t){return-128<=t&&128>t?Zw(t,function(e){return new ce([e|0],0>e?-1:0)}):new ce([t|0],0>t?-1:0)}function At(t){if(isNaN(t)||!isFinite(t))return ir;if(0>t)return Oe(At(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=va;return new ce(e,0)}function rp(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Oe(rp(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=At(Math.pow(e,8)),r=ir,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=At(Math.pow(e,i)),r=r.R(i).add(At(o))):(r=r.R(n),r=r.add(At(o)))}return r}var va=4294967296,ir=Sc(0),Ia=Sc(1),wu=Sc(16777216);k=ce.prototype;k.ea=function(){if(at(this))return-Oe(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:va+r)*e,e*=va}return t};k.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Bt(this))return"0";if(at(this))return"-"+Oe(this).toString(t);for(var e=At(Math.pow(t,6)),n=this,r="";;){var s=wi(n,e).g;n=Ii(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,Bt(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};k.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Bt(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function at(t){return t.h==-1}k.X=function(t){return t=Ii(this,t),at(t)?-1:Bt(t)?0:1};function Oe(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ce(n,~t.h).add(Ia)}k.abs=function(){return at(this)?Oe(this):this};k.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new ce(n,n[n.length-1]&-2147483648?-1:0)};function Ii(t,e){return t.add(Oe(e))}k.R=function(t){if(Bt(this)||Bt(t))return ir;if(at(this))return at(t)?Oe(this).R(Oe(t)):Oe(Oe(this).R(t));if(at(t))return Oe(this.R(Oe(t)));if(0>this.X(wu)&&0>t.X(wu))return At(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,qs(n,2*r+2*s),n[2*r+2*s+1]+=i*c,qs(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,qs(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,qs(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ce(n,0)};function qs(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Pr(t,e){this.g=t,this.h=e}function wi(t,e){if(Bt(e))throw Error("division by zero");if(Bt(t))return new Pr(ir,ir);if(at(t))return e=wi(Oe(t),e),new Pr(Oe(e.g),Oe(e.h));if(at(e))return e=wi(t,Oe(e)),new Pr(Oe(e.g),e.h);if(30<t.g.length){if(at(t)||at(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Ia,r=e;0>=r.X(t);)n=Eu(n),r=Eu(r);var s=Qn(n,1),i=Qn(r,1);for(r=Qn(r,2),n=Qn(n,2);!Bt(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Qn(r,1),n=Qn(n,1)}return e=Ii(t,s.R(e)),new Pr(s,e)}for(s=ir;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=At(n),o=i.R(e);at(o)||0<o.X(t);)n-=r,i=At(n),o=i.R(e);Bt(i)&&(i=Ia),s=s.add(i),t=Ii(t,o)}return new Pr(s,t)}k.gb=function(t){return wi(this,t).h};k.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ce(n,this.h&t.h)};k.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ce(n,this.h|t.h)};k.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ce(n,this.h^t.h)};function Eu(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ce(n,t.h)}function Qn(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new ce(s,t.h)}vi.prototype.createWebChannel=vi.prototype.g;tt.prototype.send=tt.prototype.u;tt.prototype.open=tt.prototype.m;tt.prototype.close=tt.prototype.close;qi.NO_ERROR=0;qi.TIMEOUT=8;qi.HTTP_ERROR=6;If.COMPLETE="complete";wf.EventType=Es;Es.OPEN="a";Es.CLOSE="b";Es.ERROR="c";Es.MESSAGE="d";De.prototype.listen=De.prototype.O;ve.prototype.listenOnce=ve.prototype.P;ve.prototype.getLastError=ve.prototype.Sa;ve.prototype.getLastErrorCode=ve.prototype.Ia;ve.prototype.getStatus=ve.prototype.da;ve.prototype.getResponseJson=ve.prototype.Wa;ve.prototype.getResponseText=ve.prototype.ja;ve.prototype.send=ve.prototype.ha;ve.prototype.setWithCredentials=ve.prototype.Oa;gt.prototype.digest=gt.prototype.l;gt.prototype.reset=gt.prototype.reset;gt.prototype.update=gt.prototype.j;ce.prototype.add=ce.prototype.add;ce.prototype.multiply=ce.prototype.R;ce.prototype.modulo=ce.prototype.gb;ce.prototype.compare=ce.prototype.X;ce.prototype.toNumber=ce.prototype.ea;ce.prototype.toString=ce.prototype.toString;ce.prototype.getBits=ce.prototype.D;ce.fromNumber=At;ce.fromString=rp;var WE=function(){return new vi},KE=function(){return ji()},Bo=qi,GE=If,QE=Un,Tu={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},zs=wf,YE=ve,JE=gt,or=ce;const Au="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ue.UNAUTHENTICATED=new Ue(null),Ue.GOOGLE_CREDENTIALS=new Ue("google-credentials-uid"),Ue.FIRST_PARTY=new Ue("first-party-uid"),Ue.MOCK_USER=new Ue("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tr="10.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On=new Ci("@firebase/firestore");function Cr(){return On.logLevel}function D(t,...e){if(On.logLevel<=ee.DEBUG){const n=e.map(kc);On.debug(`Firestore (${Tr}): ${t}`,...n)}}function Wt(t,...e){if(On.logLevel<=ee.ERROR){const n=e.map(kc);On.error(`Firestore (${Tr}): ${t}`,...n)}}function hr(t,...e){if(On.logLevel<=ee.WARN){const n=e.map(kc);On.warn(`Firestore (${Tr}): ${t}`,...n)}}function kc(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t="Unexpected state"){const e=`FIRESTORE (${Tr}) INTERNAL ASSERTION FAILED: `+t;throw Wt(e),new Error(e)}function ue(t,e){t||K()}function J(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends _t{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class XE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ue.UNAUTHENTICATED))}shutdown(){}}class ZE{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class eT{constructor(e){this.t=e,this.currentUser=Ue.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new cn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new cn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new cn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ue(typeof r.accessToken=="string"),new sp(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ue(e===null||typeof e=="string"),new Ue(e)}}class tT{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ue.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class nT{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new tT(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ue.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class rT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class sT{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,D("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ue(typeof n.token=="string"),this.R=n.token,new rT(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iT(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=iT(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function re(t,e){return t<e?-1:t>e?1:0}function dr(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new U(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new U(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new U(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Se.fromMillis(Date.now())}static fromDate(e){return Se.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Se(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?re(this.nanoseconds,e.nanoseconds):re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Q(e)}static min(){return new Q(new Se(0,0))}static max(){return new Q(new Se(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(),r===void 0?r=e.length-n:r>e.length-n&&K(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return rs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof rs?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ye extends rs{construct(e,n,r){return new ye(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new U(T.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new ye(n)}static emptyPath(){return new ye([])}}const oT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Me extends rs{construct(e,n,r){return new Me(e,n,r)}static isValidIdentifier(e){return oT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Me.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Me(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new U(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new U(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new U(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new U(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Me(n)}static emptyPath(){return new Me([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(ye.fromString(e))}static fromName(e){return new $(ye.fromString(e).popFirst(5))}static empty(){return new $(ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ye.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new ye(e.slice()))}}function aT(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Q.fromTimestamp(r===1e9?new Se(n+1,0):new Se(n,r));return new un(s,$.empty(),e)}function cT(t){return new un(t.readTime,t.key,-1)}class un{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new un(Q.min(),$.empty(),-1)}static max(){return new un(Q.max(),$.empty(),-1)}}function lT(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=$.comparator(t.documentKey,e.documentKey),n!==0?n:re(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class hT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ss(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==uT)throw t;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new w((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof w?n:w.resolve(n)}catch(n){return w.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):w.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):w.reject(n)}static resolve(e){return new w((n,r)=>{n(e)})}static reject(e){return new w((n,r)=>{r(e)})}static waitFor(e){return new w((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=w.resolve(!1);for(const r of e)n=n.next(s=>s?w.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new w((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new w((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function ks(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Pc._e=-1;function Xi(t){return t==null}function Ei(t){return t===0&&1/t==-1/0}function dT(t){return typeof t=="number"&&Number.isInteger(t)&&!Ei(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bu(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function $n(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function op(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e,n){this.comparator=e,this.root=n||Ve.EMPTY}insert(e,n){return new me(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ve.BLACK,null,null))}remove(e){return new me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ve.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Hs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Hs(this.root,e,this.comparator,!1)}getReverseIterator(){return new Hs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Hs(this.root,e,this.comparator,!0)}}class Hs{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ve{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ve.RED,this.left=s??Ve.EMPTY,this.right=i??Ve.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ve(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ve.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ve.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}Ve.EMPTY=null,Ve.RED=!0,Ve.BLACK=!1;Ve.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Ve(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e){this.comparator=e,this.data=new me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ru(this.data.getIterator())}getIteratorFrom(e){return new Ru(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof xe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new xe(this.comparator);return n.data=e,n}}class Ru{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.fields=e,e.sort(Me.comparator)}static empty(){return new Ze([])}unionWith(e){let n=new xe(Me.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ze(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return dr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new ap("Invalid base64 string: "+i):i}}(e);return new He(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new He(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}He.EMPTY_BYTE_STRING=new He("");const fT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function hn(t){if(ue(!!t),typeof t=="string"){let e=0;const n=fT.exec(t);if(ue(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:be(t.seconds),nanos:be(t.nanos)}}function be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Mn(t){return typeof t=="string"?He.fromBase64String(t):He.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Dc(t){const e=t.mapValue.fields.__previous_value__;return Cc(e)?Dc(e):e}function ss(t){const e=hn(t.mapValue.fields.__local_write_time__.timestampValue);return new Se(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class is{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new is("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof is&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ln(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Cc(t)?4:mT(t)?9007199254740991:10:K()}function Nt(t,e){if(t===e)return!0;const n=Ln(t);if(n!==Ln(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ss(t).isEqual(ss(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=hn(s.timestampValue),a=hn(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Mn(s.bytesValue).isEqual(Mn(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return be(s.geoPointValue.latitude)===be(i.geoPointValue.latitude)&&be(s.geoPointValue.longitude)===be(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return be(s.integerValue)===be(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=be(s.doubleValue),a=be(i.doubleValue);return o===a?Ei(o)===Ei(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return dr(t.arrayValue.values||[],e.arrayValue.values||[],Nt);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(bu(o)!==bu(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Nt(o[c],a[c])))return!1;return!0}(t,e);default:return K()}}function os(t,e){return(t.values||[]).find(n=>Nt(n,e))!==void 0}function fr(t,e){if(t===e)return 0;const n=Ln(t),r=Ln(e);if(n!==r)return re(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return re(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=be(i.integerValue||i.doubleValue),c=be(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return Su(t.timestampValue,e.timestampValue);case 4:return Su(ss(t),ss(e));case 5:return re(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Mn(i),c=Mn(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=re(a[l],c[l]);if(u!==0)return u}return re(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=re(be(i.latitude),be(o.latitude));return a!==0?a:re(be(i.longitude),be(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=fr(a[l],c[l]);if(u)return u}return re(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===Ws.mapValue&&o===Ws.mapValue)return 0;if(i===Ws.mapValue)return 1;if(o===Ws.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const d=re(c[h],u[h]);if(d!==0)return d;const p=fr(a[c[h]],l[u[h]]);if(p!==0)return p}return re(c.length,u.length)}(t.mapValue,e.mapValue);default:throw K()}}function Su(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return re(t,e);const n=hn(t),r=hn(e),s=re(n.seconds,r.seconds);return s!==0?s:re(n.nanos,r.nanos)}function pr(t){return wa(t)}function wa(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=hn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Mn(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return $.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=wa(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${wa(n.fields[o])}`;return s+"}"}(t.mapValue):K()}function Ea(t){return!!t&&"integerValue"in t}function Nc(t){return!!t&&"arrayValue"in t}function ku(t){return!!t&&"nullValue"in t}function Pu(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ei(t){return!!t&&"mapValue"in t}function Br(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return $n(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Br(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Br(t.arrayValue.values[n]);return e}return Object.assign({},t)}function mT(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.value=e}static empty(){return new Ye({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ei(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Br(n)}setAll(e){let n=Me.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Br(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());ei(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Nt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];ei(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){$n(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ye(Br(this.value))}}function cp(t){const e=[];return $n(t.fields,(n,r)=>{const s=new Me([n]);if(ei(r)){const i=cp(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ze(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new $e(e,0,Q.min(),Q.min(),Q.min(),Ye.empty(),0)}static newFoundDocument(e,n,r,s){return new $e(e,1,n,Q.min(),r,s,0)}static newNoDocument(e,n){return new $e(e,2,n,Q.min(),Q.min(),Ye.empty(),0)}static newUnknownDocument(e,n){return new $e(e,3,n,Q.min(),Q.min(),Ye.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ye.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ye.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof $e&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new $e(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,n){this.position=e,this.inclusive=n}}function Cu(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=$.comparator($.fromName(o.referenceValue),n.key):r=fr(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Du(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Nt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,n="asc"){this.field=e,this.dir=n}}function gT(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{}class Re extends lp{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new yT(e,n,r):n==="array-contains"?new wT(e,r):n==="in"?new ET(e,r):n==="not-in"?new TT(e,r):n==="array-contains-any"?new AT(e,r):new Re(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new vT(e,r):new IT(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(fr(n,this.value)):n!==null&&Ln(this.value)===Ln(n)&&this.matchesComparison(fr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Vt extends lp{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new Vt(e,n)}matches(e){return up(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function up(t){return t.op==="and"}function hp(t){return _T(t)&&up(t)}function _T(t){for(const e of t.filters)if(e instanceof Vt)return!1;return!0}function Ta(t){if(t instanceof Re)return t.field.canonicalString()+t.op.toString()+pr(t.value);if(hp(t))return t.filters.map(e=>Ta(e)).join(",");{const e=t.filters.map(n=>Ta(n)).join(",");return`${t.op}(${e})`}}function dp(t,e){return t instanceof Re?function(r,s){return s instanceof Re&&r.op===s.op&&r.field.isEqual(s.field)&&Nt(r.value,s.value)}(t,e):t instanceof Vt?function(r,s){return s instanceof Vt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&dp(o,s.filters[a]),!0):!1}(t,e):void K()}function fp(t){return t instanceof Re?function(n){return`${n.field.canonicalString()} ${n.op} ${pr(n.value)}`}(t):t instanceof Vt?function(n){return n.op.toString()+" {"+n.getFilters().map(fp).join(" ,")+"}"}(t):"Filter"}class yT extends Re{constructor(e,n,r){super(e,n,r),this.key=$.fromName(r.referenceValue)}matches(e){const n=$.comparator(e.key,this.key);return this.matchesComparison(n)}}class vT extends Re{constructor(e,n){super(e,"in",n),this.keys=pp("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class IT extends Re{constructor(e,n){super(e,"not-in",n),this.keys=pp("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function pp(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>$.fromName(r.referenceValue))}class wT extends Re{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Nc(n)&&os(n.arrayValue,this.value)}}class ET extends Re{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&os(this.value.arrayValue,n)}}class TT extends Re{constructor(e,n){super(e,"not-in",n)}matches(e){if(os(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!os(this.value.arrayValue,n)}}class AT extends Re{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Nc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>os(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function Nu(t,e=null,n=[],r=[],s=null,i=null,o=null){return new bT(t,e,n,r,s,i,o)}function Vc(t){const e=J(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ta(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Xi(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>pr(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>pr(r)).join(",")),e.ce=n}return e.ce}function Oc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!gT(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!dp(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Du(t.startAt,e.startAt)&&Du(t.endAt,e.endAt)}function Aa(t){return $.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function RT(t,e,n,r,s,i,o,a){return new Zi(t,e,n,r,s,i,o,a)}function Mc(t){return new Zi(t)}function Vu(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ST(t){return t.collectionGroup!==null}function jr(t){const e=J(t);if(e.le===null){e.le=[];const n=new Set;for(const i of e.explicitOrderBy)e.le.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new xe(Me.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.le.push(new Ai(i,r))}),n.has(Me.keyField().canonicalString())||e.le.push(new Ai(Me.keyField(),r))}return e.le}function St(t){const e=J(t);return e.he||(e.he=kT(e,jr(t))),e.he}function kT(t,e){if(t.limitType==="F")return Nu(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ai(s.field,i)});const n=t.endAt?new Ti(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ti(t.startAt.position,t.startAt.inclusive):null;return Nu(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ba(t,e,n){return new Zi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function eo(t,e){return Oc(St(t),St(e))&&t.limitType===e.limitType}function mp(t){return`${Vc(St(t))}|lt:${t.limitType}`}function Jn(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>fp(s)).join(", ")}]`),Xi(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>pr(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>pr(s)).join(",")),`Target(${r})`}(St(t))}; limitType=${t.limitType})`}function to(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):$.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of jr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=Cu(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,jr(r),s)||r.endAt&&!function(o,a,c){const l=Cu(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,jr(r),s))}(t,e)}function PT(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function gp(t){return(e,n)=>{let r=!1;for(const s of jr(t)){const i=CT(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function CT(t,e,n){const r=t.field.isKeyField()?$.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?fr(c,l):K()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){$n(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return op(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DT=new me($.comparator);function Kt(){return DT}const _p=new me($.comparator);function Mr(...t){let e=_p;for(const n of t)e=e.insert(n.key,n);return e}function yp(t){let e=_p;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function An(){return qr()}function vp(){return qr()}function qr(){return new Ar(t=>t.toString(),(t,e)=>t.isEqual(e))}const NT=new me($.comparator),VT=new xe($.comparator);function Z(...t){let e=VT;for(const n of t)e=e.add(n);return e}const OT=new xe(re);function MT(){return OT}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ip(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ei(e)?"-0":e}}function wp(t){return{integerValue:""+t}}function LT(t,e){return dT(e)?wp(e):Ip(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(){this._=void 0}}function xT(t,e,n){return t instanceof bi?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Cc(i)&&(i=Dc(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof as?Tp(t,e):t instanceof cs?Ap(t,e):function(s,i){const o=Ep(s,i),a=Ou(o)+Ou(s.Ie);return Ea(o)&&Ea(s.Ie)?wp(a):Ip(s.serializer,a)}(t,e)}function FT(t,e,n){return t instanceof as?Tp(t,e):t instanceof cs?Ap(t,e):n}function Ep(t,e){return t instanceof Ri?function(r){return Ea(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class bi extends no{}class as extends no{constructor(e){super(),this.elements=e}}function Tp(t,e){const n=bp(e);for(const r of t.elements)n.some(s=>Nt(s,r))||n.push(r);return{arrayValue:{values:n}}}class cs extends no{constructor(e){super(),this.elements=e}}function Ap(t,e){let n=bp(e);for(const r of t.elements)n=n.filter(s=>!Nt(s,r));return{arrayValue:{values:n}}}class Ri extends no{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function Ou(t){return be(t.integerValue||t.doubleValue)}function bp(t){return Nc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function UT(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof as&&s instanceof as||r instanceof cs&&s instanceof cs?dr(r.elements,s.elements,Nt):r instanceof Ri&&s instanceof Ri?Nt(r.Ie,s.Ie):r instanceof bi&&s instanceof bi}(t.transform,e.transform)}class $T{constructor(e,n){this.version=e,this.transformResults=n}}class kt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new kt}static exists(e){return new kt(void 0,e)}static updateTime(e){return new kt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ti(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ro{}function Rp(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new kp(t.key,kt.none()):new Ps(t.key,t.data,kt.none());{const n=t.data,r=Ye.empty();let s=new xe(Me.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new _n(t.key,r,new Ze(s.toArray()),kt.none())}}function BT(t,e,n){t instanceof Ps?function(s,i,o){const a=s.value.clone(),c=Lu(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof _n?function(s,i,o){if(!ti(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Lu(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Sp(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function zr(t,e,n,r){return t instanceof Ps?function(i,o,a,c){if(!ti(i.precondition,o))return a;const l=i.value.clone(),u=xu(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof _n?function(i,o,a,c){if(!ti(i.precondition,o))return a;const l=xu(i.fieldTransforms,c,o),u=o.data;return u.setAll(Sp(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return ti(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function jT(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Ep(r.transform,s||null);i!=null&&(n===null&&(n=Ye.empty()),n.set(r.field,i))}return n||null}function Mu(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&dr(r,s,(i,o)=>UT(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ps extends ro{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class _n extends ro{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Sp(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Lu(t,e,n){const r=new Map;ue(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,FT(o,a,n[s]))}return r}function xu(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,xT(i,o,e))}return r}class kp extends ro{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class qT extends ro{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&BT(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=zr(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=zr(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=vp();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=Rp(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(Q.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Z())}isEqual(e){return this.batchId===e.batchId&&dr(this.mutations,e.mutations,(n,r)=>Mu(n,r))&&dr(this.baseMutations,e.baseMutations,(n,r)=>Mu(n,r))}}class Lc{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ue(e.mutations.length===r.length);let s=function(){return NT}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Lc(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ae,te;function KT(t){switch(t){default:return K();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function Pp(t){if(t===void 0)return Wt("GRPC error has no .code"),T.UNKNOWN;switch(t){case Ae.OK:return T.OK;case Ae.CANCELLED:return T.CANCELLED;case Ae.UNKNOWN:return T.UNKNOWN;case Ae.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case Ae.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case Ae.INTERNAL:return T.INTERNAL;case Ae.UNAVAILABLE:return T.UNAVAILABLE;case Ae.UNAUTHENTICATED:return T.UNAUTHENTICATED;case Ae.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case Ae.NOT_FOUND:return T.NOT_FOUND;case Ae.ALREADY_EXISTS:return T.ALREADY_EXISTS;case Ae.PERMISSION_DENIED:return T.PERMISSION_DENIED;case Ae.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case Ae.ABORTED:return T.ABORTED;case Ae.OUT_OF_RANGE:return T.OUT_OF_RANGE;case Ae.UNIMPLEMENTED:return T.UNIMPLEMENTED;case Ae.DATA_LOSS:return T.DATA_LOSS;default:return K()}}(te=Ae||(Ae={}))[te.OK=0]="OK",te[te.CANCELLED=1]="CANCELLED",te[te.UNKNOWN=2]="UNKNOWN",te[te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",te[te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",te[te.NOT_FOUND=5]="NOT_FOUND",te[te.ALREADY_EXISTS=6]="ALREADY_EXISTS",te[te.PERMISSION_DENIED=7]="PERMISSION_DENIED",te[te.UNAUTHENTICATED=16]="UNAUTHENTICATED",te[te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",te[te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",te[te.ABORTED=10]="ABORTED",te[te.OUT_OF_RANGE=11]="OUT_OF_RANGE",te[te.UNIMPLEMENTED=12]="UNIMPLEMENTED",te[te.INTERNAL=13]="INTERNAL",te[te.UNAVAILABLE=14]="UNAVAILABLE",te[te.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GT(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT=new or([4294967295,4294967295],0);function Fu(t){const e=GT().encode(t),n=new JE;return n.update(e),new Uint8Array(n.digest())}function Uu(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new or([n,r],0),new or([s,i],0)]}class xc{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Lr(`Invalid padding: ${n}`);if(r<0)throw new Lr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Lr(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Lr(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=or.fromNumber(this.Te)}de(e,n,r){let s=e.add(n.multiply(or.fromNumber(r)));return s.compare(QT)===1&&(s=new or([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Fu(e),[r,s]=Uu(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new xc(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=Fu(e),[r,s]=Uu(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Lr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Cs.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new so(Q.min(),s,new me(re),Kt(),Z())}}class Cs{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Cs(r,n,Z(),Z(),Z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,n,r,s){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=s}}class Cp{constructor(e,n){this.targetId=e,this.fe=n}}class Dp{constructor(e,n,r=He.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class $u{constructor(){this.ge=0,this.pe=ju(),this.ye=He.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=Z(),n=Z(),r=Z();return this.pe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:K()}}),new Cs(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=ju()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,ue(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class YT{constructor(e){this.Le=e,this.ke=new Map,this.qe=Kt(),this.Qe=Bu(),this.Ke=new me(re)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.fe.count,s=this.Ye(n);if(s){const i=s.target;if(Aa(i))if(r===0){const o=new $(i.path);this.We(n,o,$e.newNoDocument(o,Q.min()))}else ue(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,l)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Mn(r).toUint8Array()}catch(c){if(c instanceof ap)return hr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new xc(o,s,i)}catch(c){return hr(c instanceof Lr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&Aa(a.target)){const c=new $(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,$e.newNoDocument(c,e))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=Z();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ye(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(e));const s=new so(e,n,this.Ke,this.qe,r);return this.qe=Kt(),this.Qe=Bu(),this.Ke=new me(re),s}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.st(e,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new $u,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new xe(re),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||D("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new $u),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Bu(){return new me($.comparator)}function ju(){return new me($.comparator)}const JT={asc:"ASCENDING",desc:"DESCENDING"},XT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ZT={and:"AND",or:"OR"};class e0{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ra(t,e){return t.useProto3Json||Xi(e)?e:{value:e}}function Si(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Np(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function t0(t,e){return Si(t,e.toTimestamp())}function Pt(t){return ue(!!t),Q.fromTimestamp(function(n){const r=hn(n);return new Se(r.seconds,r.nanos)}(t))}function Fc(t,e){return function(r){return new ye(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function Vp(t){const e=ye.fromString(t);return ue(xp(e)),e}function Sa(t,e){return Fc(t.databaseId,e.path)}function jo(t,e){const n=Vp(e);if(n.get(1)!==t.databaseId.projectId)throw new U(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new U(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new $(Op(n))}function ka(t,e){return Fc(t.databaseId,e)}function n0(t){const e=Vp(t);return e.length===4?ye.emptyPath():Op(e)}function Pa(t){return new ye(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Op(t){return ue(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function qu(t,e,n){return{name:Sa(t,e),fields:n.value.mapValue.fields}}function r0(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(ue(u===void 0||typeof u=="string"),He.fromBase64String(u||"")):(ue(u===void 0||u instanceof Uint8Array),He.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?T.UNKNOWN:Pp(l.code);return new U(u,l.message||"")}(o);n=new Dp(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=jo(t,r.document.name),i=Pt(r.document.updateTime),o=r.document.createTime?Pt(r.document.createTime):Q.min(),a=new Ye({mapValue:{fields:r.document.fields}}),c=$e.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new ni(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=jo(t,r.document),i=r.readTime?Pt(r.readTime):Q.min(),o=$e.newNoDocument(s,i),a=r.removedTargetIds||[];n=new ni([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=jo(t,r.document),i=r.removedTargetIds||[];n=new ni([],i,s,null)}else{if(!("filter"in e))return K();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new WT(s,i),a=r.targetId;n=new Cp(a,o)}}return n}function s0(t,e){let n;if(e instanceof Ps)n={update:qu(t,e.key,e.value)};else if(e instanceof kp)n={delete:Sa(t,e.key)};else if(e instanceof _n)n={update:qu(t,e.key,e.data),updateMask:f0(e.fieldMask)};else{if(!(e instanceof qT))return K();n={verify:Sa(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof bi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof as)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof cs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ri)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw K()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:t0(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:K()}(t,e.precondition)),n}function i0(t,e){return t&&t.length>0?(ue(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Pt(s.updateTime):Pt(i);return o.isEqual(Q.min())&&(o=Pt(i)),new $T(o,s.transformResults||[])}(n,e))):[]}function o0(t,e){return{documents:[ka(t,e.path)]}}function a0(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=ka(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ka(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return Lp(Vt.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:Xn(h.field),direction:u0(h.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Ra(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function c0(t){let e=n0(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ue(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=Mp(h);return d instanceof Vt&&hp(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(m){return new Ai(Zn(m.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(m.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Xi(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,p=h.values||[];return new Ti(p,d)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const d=!h.before,p=h.values||[];return new Ti(p,d)}(n.endAt)),RT(e,s,o,i,a,"F",c,l)}function l0(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Mp(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Zn(n.unaryFilter.field);return Re.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Zn(n.unaryFilter.field);return Re.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Zn(n.unaryFilter.field);return Re.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Zn(n.unaryFilter.field);return Re.create(o,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(t):t.fieldFilter!==void 0?function(n){return Re.create(Zn(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Vt.create(n.compositeFilter.filters.map(r=>Mp(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return K()}}(n.compositeFilter.op))}(t):K()}function u0(t){return JT[t]}function h0(t){return XT[t]}function d0(t){return ZT[t]}function Xn(t){return{fieldPath:t.canonicalString()}}function Zn(t){return Me.fromServerFormat(t.fieldPath)}function Lp(t){return t instanceof Re?function(n){if(n.op==="=="){if(Pu(n.value))return{unaryFilter:{field:Xn(n.field),op:"IS_NAN"}};if(ku(n.value))return{unaryFilter:{field:Xn(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Pu(n.value))return{unaryFilter:{field:Xn(n.field),op:"IS_NOT_NAN"}};if(ku(n.value))return{unaryFilter:{field:Xn(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xn(n.field),op:h0(n.op),value:n.value}}}(t):t instanceof Vt?function(n){const r=n.getFilters().map(s=>Lp(s));return r.length===1?r[0]:{compositeFilter:{op:d0(n.op),filters:r}}}(t):K()}function f0(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function xp(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,n,r,s,i=Q.min(),o=Q.min(),a=He.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new rn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new rn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new rn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new rn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(e){this.ut=e}}function m0(t){const e=c0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ba(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(){this.on=new _0}addToCollectionParentIndex(e,n){return this.on.add(n),w.resolve()}getCollectionParents(e,n){return w.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return w.resolve()}deleteFieldIndex(e,n){return w.resolve()}deleteAllFieldIndexes(e){return w.resolve()}createTargetIndexes(e,n){return w.resolve()}getDocumentsMatchingTarget(e,n){return w.resolve(null)}getIndexType(e,n){return w.resolve(0)}getFieldIndexes(e,n){return w.resolve([])}getNextCollectionGroupToUpdate(e){return w.resolve(null)}getMinOffset(e,n){return w.resolve(un.min())}getMinOffsetFromCollectionGroup(e,n){return w.resolve(un.min())}updateCollectionGroup(e,n,r){return w.resolve()}updateIndexEntries(e,n){return w.resolve()}}class _0{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new xe(ye.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new xe(ye.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new mr(0)}static Nn(){return new mr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(){this.changes=new Ar(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,$e.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?w.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&zr(r.mutation,s,Ze.empty(),Se.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Z()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Z()){const s=An();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Mr();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=An();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Z()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Kt();const o=qr(),a=function(){return qr()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof _n)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),zr(u.mutation,l,u.mutation.getFieldMask(),Se.now())):o.set(l.key,Ze.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new v0(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=qr();let s=new me((o,a)=>o-a),i=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||Ze.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||Z()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=vp();u.forEach(d=>{if(!i.has(d)){const p=Rp(n.get(d),r.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return w.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return $.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ST(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):w.resolve(An());let a=-1,c=i;return o.next(l=>w.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?w.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,Z())).next(u=>({batchId:a,changes:yp(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new $(n)).next(r=>{let s=Mr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Mr();return this.indexManager.getCollectionParents(e,i).next(a=>w.forEach(a,c=>{const l=function(h,d){return new Zi(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,$e.newInvalidDocument(u)))});let a=Mr();return o.forEach((c,l)=>{const u=i.get(c);u!==void 0&&zr(u.mutation,l,Ze.empty(),Se.now()),to(n,l)&&(a=a.insert(c,l))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return w.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Pt(s.createTime)}}(n)),w.resolve()}getNamedQuery(e,n){return w.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(s){return{name:s.name,query:m0(s.bundledQuery),readTime:Pt(s.readTime)}}(n)),w.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(){this.overlays=new me($.comparator),this.lr=new Map}getOverlay(e,n){return w.resolve(this.overlays.get(n))}getOverlays(e,n){const r=An();return w.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.lt(e,n,i)}),w.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.lr.delete(r)),w.resolve()}getOverlaysForCollection(e,n,r){const s=An(),i=n.length+1,o=new $(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return w.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new me((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=An(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=An(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return w.resolve(a)}lt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.lr.get(s.largestBatchId).delete(r.key);this.lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new HT(n,r));let i=this.lr.get(n);i===void 0&&(i=Z(),this.lr.set(n,i)),this.lr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(){this.hr=new xe(Pe.Pr),this.Ir=new xe(Pe.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new Pe(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new Pe(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new $(new ye([])),r=new Pe(n,e),s=new Pe(n,e+1),i=[];return this.Ir.forEachInRange([r,s],o=>{this.dr(o),i.push(o.key)}),i}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new $(new ye([])),r=new Pe(n,e),s=new Pe(n,e+1);let i=Z();return this.Ir.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Pe(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Pe{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return $.comparator(e.key,n.key)||re(e.gr,n.gr)}static Tr(e,n){return re(e.gr,n.gr)||$.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new xe(Pe.Pr)}checkEmpty(e){return w.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new zT(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.yr=this.yr.add(new Pe(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return w.resolve(o)}lookupMutationBatch(e,n){return w.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Sr(r),i=s<0?0:s;return w.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return w.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return w.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Pe(n,0),s=new Pe(n,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([r,s],o=>{const a=this.wr(o.gr);i.push(a)}),w.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new xe(re);return n.forEach(s=>{const i=new Pe(s,0),o=new Pe(s,Number.POSITIVE_INFINITY);this.yr.forEachInRange([i,o],a=>{r=r.add(a.gr)})}),w.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;$.isDocumentKey(i)||(i=i.child(""));const o=new Pe(new $(i),0);let a=new xe(re);return this.yr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.gr)),!0)},o),w.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const s=this.wr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ue(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return w.forEach(n.mutations,s=>{const i=new Pe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new Pe(n,0),s=this.yr.firstAfterOrEqual(r);return w.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,w.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(e){this.Cr=e,this.docs=function(){return new me($.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return w.resolve(r?r.document.mutableCopy():$e.newInvalidDocument(n))}getEntries(e,n){let r=Kt();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():$e.newInvalidDocument(s))}),w.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Kt();const o=n.path,a=new $(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||lT(cT(u),r)<=0||(s.has(u.key)||to(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return w.resolve(i)}getAllFromCollectionGroup(e,n,r,s){K()}vr(e,n){return w.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new b0(this)}getSize(e){return w.resolve(this.size)}}class b0 extends y0{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this._r.addEntry(e,s)):this._r.removeEntry(r)}),w.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R0{constructor(e){this.persistence=e,this.Fr=new Ar(n=>Vc(n),Oc),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Uc,this.targetCount=0,this.Nr=mr.On()}forEachTarget(e,n){return this.Fr.forEach((r,s)=>n(s)),w.resolve()}getLastRemoteSnapshotVersion(e){return w.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return w.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),w.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),w.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new mr(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,w.resolve()}updateTargetData(e,n){return this.kn(n),w.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,w.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),w.waitFor(i).next(()=>s)}getTargetCount(e){return w.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return w.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),w.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),w.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),w.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return w.resolve(r)}containsKey(e,n){return w.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(e,n){this.Br={},this.overlays={},this.Lr=new Pc(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new R0(this),this.indexManager=new g0,this.remoteDocumentCache=function(s){return new A0(s)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new p0(n),this.Kr=new w0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new E0,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new T0(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){D("MemoryPersistence","Starting transaction:",e);const s=new k0(this.Lr.next());return this.referenceDelegate.$r(),r(s).next(i=>this.referenceDelegate.Ur(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Wr(e,n){return w.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class k0 extends hT{constructor(e){super(),this.currentSequenceNumber=e}}class $c{constructor(e){this.persistence=e,this.Gr=new Uc,this.zr=null}static jr(e){return new $c(e)}get Hr(){if(this.zr)return this.zr;throw K()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),w.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),w.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),w.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(s=>this.Hr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Hr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return w.forEach(this.Hr,r=>{const s=$.fromPath(r);return this.Jr(e,s).next(i=>{i||n.removeEntry(s,Q.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return w.or([()=>w.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=s}static Qi(e,n){let r=Z(),s=Z();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Bc(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.zi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ji(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new P0;return this.Hi(e,n,o).next(a=>{if(i.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>i.result)}Ji(e,n,r,s){return r.documentReadCount<this.Ui?(Cr()<=ee.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",Jn(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),w.resolve()):(Cr()<=ee.DEBUG&&D("QueryEngine","Query:",Jn(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Wi*s?(Cr()<=ee.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",Jn(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,St(n))):w.resolve())}zi(e,n){if(Vu(n))return w.resolve(null);let r=St(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=ba(n,null,"F"),r=St(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Z(...i);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Yi(n,a);return this.Zi(n,l,o,c.readTime)?this.zi(e,ba(n,null,"F")):this.Xi(e,l,n,c)}))})))}ji(e,n,r,s){return Vu(n)||s.isEqual(Q.min())?w.resolve(null):this.Gi.getDocuments(e,r).next(i=>{const o=this.Yi(n,i);return this.Zi(n,o,r,s)?w.resolve(null):(Cr()<=ee.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Jn(n)),this.Xi(e,o,n,aT(s,-1)).next(a=>a))})}Yi(e,n){let r=new xe(gp(e));return n.forEach((s,i)=>{to(e,i)&&(r=r.add(i))}),r}Zi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Hi(e,n,r){return Cr()<=ee.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",Jn(n)),this.Gi.getDocumentsMatchingQuery(e,n,un.min(),r)}Xi(e,n,r,s){return this.Gi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{constructor(e,n,r,s){this.persistence=e,this.es=n,this.serializer=s,this.ts=new me(re),this.ns=new Ar(i=>Vc(i),Oc),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new I0(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function N0(t,e,n,r){return new D0(t,e,n,r)}async function Fp(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=Z();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({_s:l,removedBatchIds:o,addedBatchIds:a}))})})}function V0(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,d=h.keys();let p=w.resolve();return d.forEach(m=>{p=p.next(()=>u.getEntry(c,m)).next(g=>{const v=l.docVersions.get(m);ue(v!==null),g.version.compareTo(v)<0&&(h.applyToRemoteDocument(g,l),g.isValidDocument()&&(g.setReadTime(l.commitVersion),u.addEntry(g)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=Z();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Up(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function O0(t,e){const n=J(t),r=e.snapshotVersion;let s=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});s=n.ts;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.qr.addMatchingKeys(i,u.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(He.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,r)),s=s.insert(h,p),function(g,v,A){return g.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:A.addedDocuments.size+A.modifiedDocuments.size+A.removedDocuments.size>0}(d,p,u)&&a.push(n.qr.updateTargetData(i,p))});let c=Kt(),l=Z();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(M0(i,o,e.documentUpdates).next(u=>{c=u.us,l=u.cs})),!r.isEqual(Q.min())){const u=n.qr.getLastRemoteSnapshotVersion(i).next(h=>n.qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return w.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.ts=s,i))}function M0(t,e,n){let r=Z(),s=Z();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Kt();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(Q.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):D("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{us:o,cs:s}})}function L0(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function x0(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.qr.getTargetData(r,e).next(i=>i?(s=i,w.resolve(s)):n.qr.allocateTargetId(r).next(o=>(s=new rn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(e,r.targetId)),r})}async function Ca(t,e,n){const r=J(t),s=r.ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ks(o))throw o;D("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(s.target)}function zu(t,e,n){const r=J(t);let s=Q.min(),i=Z();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=J(c),d=h.ns.get(u);return d!==void 0?w.resolve(h.ts.get(d)):h.qr.getTargetData(l,u)}(r,o,St(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,n?s:Q.min(),n?i:Z())).next(a=>(F0(r,PT(e),a),{documents:a,ls:i})))}function F0(t,e,n){let r=t.rs.get(e)||Q.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.rs.set(e,r)}class Hu{constructor(){this.activeTargetIds=MT()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class U0{constructor(){this.eo=new Hu,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new Hu,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{ro(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ks=null;function qo(){return Ks===null?Ks=function(){return 268435456+Math.round(2147483648*Math.random())}():Ks++,"0x"+Ks.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fe="WebChannelConnection";class q0 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${s}/databases/${i}`,this.po=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get yo(){return!1}wo(n,r,s,i,o){const a=qo(),c=this.So(n,r);D("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(l,i,o),this.Do(n,c,l,s).then(u=>(D("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw hr("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}Co(n,r,s,i,o,a){return this.wo(n,r,s,i,o)}bo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Tr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}So(n,r){const s=B0[n];return`${this.mo}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,r,s){const i=qo();return new Promise((o,a)=>{const c=new YE;c.setWithCredentials(!0),c.listenOnce(GE.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Bo.NO_ERROR:const u=c.getResponseJson();D(Fe,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Bo.TIMEOUT:D(Fe,`RPC '${e}' ${i} timed out`),a(new U(T.DEADLINE_EXCEEDED,"Request time out"));break;case Bo.HTTP_ERROR:const h=c.getStatus();if(D(Fe,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const m=function(v){const A=v.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(A)>=0?A:T.UNKNOWN}(p.status);a(new U(m,p.message))}else a(new U(T.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new U(T.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{D(Fe,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);D(Fe,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}vo(e,n,r){const s=qo(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=WE(),a=KE(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.bo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");D(Fe,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,p=!1;const m=new j0({co:v=>{p?D(Fe,`Not sending because RPC '${e}' stream ${s} is closed:`,v):(d||(D(Fe,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),D(Fe,`RPC '${e}' stream ${s} sending:`,v),h.send(v))},lo:()=>h.close()}),g=(v,A,_)=>{v.listen(A,E=>{try{_(E)}catch(P){setTimeout(()=>{throw P},0)}})};return g(h,zs.EventType.OPEN,()=>{p||D(Fe,`RPC '${e}' stream ${s} transport opened.`)}),g(h,zs.EventType.CLOSE,()=>{p||(p=!0,D(Fe,`RPC '${e}' stream ${s} transport closed`),m.Ro())}),g(h,zs.EventType.ERROR,v=>{p||(p=!0,hr(Fe,`RPC '${e}' stream ${s} transport errored:`,v),m.Ro(new U(T.UNAVAILABLE,"The operation could not be completed")))}),g(h,zs.EventType.MESSAGE,v=>{var A;if(!p){const _=v.data[0];ue(!!_);const E=_,P=E.error||((A=E[0])===null||A===void 0?void 0:A.error);if(P){D(Fe,`RPC '${e}' stream ${s} received error:`,P);const q=P.status;let C=function(b){const z=Ae[b];if(z!==void 0)return Pp(z)}(q),V=P.message;C===void 0&&(C=T.INTERNAL,V="Unknown error status: "+q+" with message "+P.message),p=!0,m.Ro(new U(C,V)),h.close()}else D(Fe,`RPC '${e}' stream ${s} received:`,_),m.Vo(_)}}),g(a,QE.STAT_EVENT,v=>{v.stat===Tu.PROXY?D(Fe,`RPC '${e}' stream ${s} detected buffering proxy`):v.stat===Tu.NOPROXY&&D(Fe,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{m.Ao()},0),m}}function zo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(t){return new e0(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(e,n,r=1e3,s=1.5,i=6e4){this.si=e,this.timerId=n,this.Fo=r,this.Mo=s,this.xo=i,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),s=Math.max(0,n-r);s>0&&D("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(e,n,r,s,i,o,a,c){this.si=e,this.Ko=r,this.$o=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new $p(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(Wt(n.toString()),Wt("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Uo===n&&this.s_(r,s)},r=>{e(()=>{const s=new U(T.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(s)})})}s_(e,n){const r=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(s=>{r(()=>this.o_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return D("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class z0 extends Bp{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=r0(this.serializer,e),r=function(i){if(!("targetChange"in i))return Q.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Q.min():o.readTime?Pt(o.readTime):Q.min()}(e);return this.listener.a_(n,r)}u_(e){const n={};n.database=Pa(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=Aa(c)?{documents:o0(i,c)}:{query:a0(i,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Np(i,o.resumeToken);const l=Ra(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(Q.min())>0){a.readTime=Si(i,o.snapshotVersion.toTimestamp());const l=Ra(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=l0(this.serializer,e);r&&(n.labels=r),this.e_(n)}c_(e){const n={};n.database=Pa(this.serializer),n.removeTarget=e,this.e_(n)}}class H0 extends Bp{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(ue(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=i0(e.writeResults,e.commitTime),r=Pt(e.commitTime);return this.listener.I_(r,n)}return ue(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=Pa(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>s0(this.serializer,r))};this.e_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0 extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.d_=!1}A_(){if(this.d_)throw new U(T.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.wo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new U(T.UNKNOWN,s.toString())})}Co(e,n,r,s){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Co(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new U(T.UNKNOWN,i.toString())})}terminate(){this.d_=!0}}class K0{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(Wt(n),this.f_=!1):D("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=i,this.F_.ro(o=>{r.enqueueAndForget(async()=>{Bn(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=J(c);l.C_.add(4),await Ds(l),l.M_.set("Unknown"),l.C_.delete(4),await oo(l)}(this))})}),this.M_=new K0(r,s)}}async function oo(t){if(Bn(t))for(const e of t.v_)await e(!0)}async function Ds(t){for(const e of t.v_)await e(!1)}function jp(t,e){const n=J(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),zc(n)?qc(n):br(n).Ho()&&jc(n,e))}function qp(t,e){const n=J(t),r=br(n);n.D_.delete(e),r.Ho()&&zp(n,e),n.D_.size===0&&(r.Ho()?r.Zo():Bn(n)&&n.M_.set("Unknown"))}function jc(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}br(t).u_(e)}function zp(t,e){t.x_.Oe(e),br(t).c_(e)}function qc(t){t.x_=new YT({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),br(t).start(),t.M_.g_()}function zc(t){return Bn(t)&&!br(t).jo()&&t.D_.size>0}function Bn(t){return J(t).C_.size===0}function Hp(t){t.x_=void 0}async function Q0(t){t.D_.forEach((e,n)=>{jc(t,e)})}async function Y0(t,e){Hp(t),zc(t)?(t.M_.w_(e),qc(t)):t.M_.set("Unknown")}async function J0(t,e,n){if(t.M_.set("Online"),e instanceof Dp&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.D_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.D_.delete(a),s.x_.removeTarget(a))}(t,e)}catch(r){D("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ki(t,r)}else if(e instanceof ni?t.x_.$e(e):e instanceof Cp?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(Q.min()))try{const r=await Up(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.x_.it(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.D_.get(l);u&&i.D_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.D_.get(c);if(!u)return;i.D_.set(c,u.withResumeToken(He.EMPTY_BYTE_STRING,u.snapshotVersion)),zp(i,c);const h=new rn(u.target,c,l,u.sequenceNumber);jc(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){D("RemoteStore","Failed to raise snapshot:",r),await ki(t,r)}}async function ki(t,e,n){if(!ks(e))throw e;t.C_.add(1),await Ds(t),t.M_.set("Offline"),n||(n=()=>Up(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await oo(t)})}function Wp(t,e){return e().catch(n=>ki(t,n,e))}async function ao(t){const e=J(t),n=dn(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;X0(e);)try{const s=await L0(e.localStore,r);if(s===null){e.b_.length===0&&n.Zo();break}r=s.batchId,Z0(e,s)}catch(s){await ki(e,s)}Kp(e)&&Gp(e)}function X0(t){return Bn(t)&&t.b_.length<10}function Z0(t,e){t.b_.push(e);const n=dn(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function Kp(t){return Bn(t)&&!dn(t).jo()&&t.b_.length>0}function Gp(t){dn(t).start()}async function eA(t){dn(t).E_()}async function tA(t){const e=dn(t);for(const n of t.b_)e.P_(n.mutations)}async function nA(t,e,n){const r=t.b_.shift(),s=Lc.from(r,e,n);await Wp(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ao(t)}async function rA(t,e){e&&dn(t).h_&&await async function(r,s){if(function(o){return KT(o)&&o!==T.ABORTED}(s.code)){const i=r.b_.shift();dn(r).Yo(),await Wp(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ao(r)}}(t,e),Kp(t)&&Gp(t)}async function Ku(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const r=Bn(n);n.C_.add(3),await Ds(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await oo(n)}async function sA(t,e){const n=J(t);e?(n.C_.delete(2),await oo(n)):e||(n.C_.add(2),await Ds(n),n.M_.set("Unknown"))}function br(t){return t.O_||(t.O_=function(n,r,s){const i=J(n);return i.A_(),new z0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{ho:Q0.bind(null,t),Io:Y0.bind(null,t),a_:J0.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),zc(t)?qc(t):t.M_.set("Unknown")):(await t.O_.stop(),Hp(t))})),t.O_}function dn(t){return t.N_||(t.N_=function(n,r,s){const i=J(n);return i.A_(),new H0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{ho:eA.bind(null,t),Io:rA.bind(null,t),T_:tA.bind(null,t),I_:nA.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await ao(t)):(await t.N_.stop(),t.b_.length>0&&(D("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new cn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Hc(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Wc(t,e){if(Wt("AsyncQueue",`${e}: ${t}`),ks(t))return new U(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e){this.comparator=e?(n,r)=>e(n,r)||$.comparator(n.key,r.key):(n,r)=>$.comparator(n.key,r.key),this.keyedMap=Mr(),this.sortedSet=new me(this.comparator)}static emptySet(e){return new ar(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ar)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ar;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(){this.B_=new me($.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):K():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class gr{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new gr(e,n,ar.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&eo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(){this.k_=void 0,this.listeners=[]}}class oA{constructor(){this.queries=new Ar(e=>mp(e),eo),this.onlineState="Unknown",this.q_=new Set}}async function aA(t,e){const n=J(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new iA),s)try{i.k_=await n.onListen(r)}catch(o){const a=Wc(o,`Initialization of query '${Jn(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.Q_(n.onlineState),i.k_&&e.K_(i.k_)&&Kc(n)}async function cA(t,e){const n=J(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function lA(t,e){const n=J(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.K_(s)&&(r=!0);o.k_=s}}r&&Kc(n)}function uA(t,e,n){const r=J(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Kc(t){t.q_.forEach(e=>{e.next()})}class hA{constructor(e,n,r){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new gr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=gr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(e){this.key=e}}class Yp{constructor(e){this.key=e}}class dA{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=Z(),this.mutatedKeys=Z(),this._a=gp(e),this.aa=new ar(this._a)}get ua(){return this.ia}ca(e,n){const r=n?n.la:new Gu,s=n?n.aa:this.aa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),p=to(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),g=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let v=!1;d&&p?d.data.isEqual(p.data)?m!==g&&(r.track({type:3,doc:p}),v=!0):this.ha(d,p)||(r.track({type:2,doc:p}),v=!0,(c&&this._a(p,c)>0||l&&this._a(p,l)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),v=!0):d&&!p&&(r.track({type:1,doc:d}),v=!0,(c||l)&&(a=!0)),v&&(p?(o=o.add(p),i=g?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{aa:o,la:r,Zi:a,mutatedKeys:i}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const o=e.la.L_();o.sort((u,h)=>function(p,m){const g=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return g(p)-g(m)}(u.type,h.type)||this._a(u.doc,h.doc)),this.Pa(r),s=s!=null&&s;const a=n&&!s?this.Ia():[],c=this.oa.size===0&&this.current&&!s?1:0,l=c!==this.sa;return this.sa=c,o.length!==0||l?{snapshot:new gr(this.query,e.aa,i,o,e.mutatedKeys,c===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:a}:{Ta:a}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new Gu,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=Z(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return e.forEach(r=>{this.oa.has(r)||n.push(new Yp(r))}),this.oa.forEach(r=>{e.has(r)||n.push(new Qp(r))}),n}da(e){this.ia=e.ls,this.oa=Z();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return gr.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class fA{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class pA{constructor(e){this.key=e,this.Ra=!1}}class mA{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new Ar(a=>mp(a),eo),this.fa=new Map,this.ga=new Set,this.pa=new me($.comparator),this.ya=new Map,this.wa=new Uc,this.Sa={},this.ba=new Map,this.Da=mr.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function gA(t,e){const n=RA(t);let r,s;const i=n.ma.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Aa();else{const o=await x0(n.localStore,St(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await _A(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&jp(n.remoteStore,o)}return s}async function _A(t,e,n,r,s){t.va=(h,d,p)=>async function(g,v,A,_){let E=v.view.ca(A);E.Zi&&(E=await zu(g.localStore,v.query,!1).then(({documents:V})=>v.view.ca(V,E)));const P=_&&_.targetChanges.get(v.targetId),q=_&&_.targetMismatches.get(v.targetId)!=null,C=v.view.applyChanges(E,g.isPrimaryClient,P,q);return Yu(g,v.targetId,C.Ta),C.snapshot}(t,h,d,p);const i=await zu(t.localStore,e,!0),o=new dA(e,i.ls),a=o.ca(i.documents),c=Cs.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);Yu(t,n,l.Ta);const u=new fA(e,n,o);return t.ma.set(e,u),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),l.snapshot}async function yA(t,e){const n=J(t),r=n.ma.get(e),s=n.fa.get(r.targetId);if(s.length>1)return n.fa.set(r.targetId,s.filter(i=>!eo(i,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Ca(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),qp(n.remoteStore,r.targetId),Da(n,r.targetId)}).catch(Ss)):(Da(n,r.targetId),await Ca(n.localStore,r.targetId,!0))}async function vA(t,e,n){const r=SA(t);try{const s=await function(o,a){const c=J(o),l=Se.now(),u=a.reduce((p,m)=>p.add(m.key),Z());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",p=>{let m=Kt(),g=Z();return c.ss.getEntries(p,u).next(v=>{m=v,m.forEach((A,_)=>{_.isValidDocument()||(g=g.add(A))})}).next(()=>c.localDocuments.getOverlayedDocuments(p,m)).next(v=>{h=v;const A=[];for(const _ of a){const E=jT(_,h.get(_.key).overlayedDocument);E!=null&&A.push(new _n(_.key,E,cp(E.value.mapValue),kt.exists(!0)))}return c.mutationQueue.addMutationBatch(p,l,A,a)}).next(v=>{d=v;const A=v.applyToLocalDocumentSet(h,g);return c.documentOverlayCache.saveOverlays(p,v.batchId,A)})}).then(()=>({batchId:d.batchId,changes:yp(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.Sa[o.currentUser.toKey()];l||(l=new me(re)),l=l.insert(a,c),o.Sa[o.currentUser.toKey()]=l}(r,s.batchId,n),await Ns(r,s.changes),await ao(r.remoteStore)}catch(s){const i=Wc(s,"Failed to persist write");n.reject(i)}}async function Jp(t,e){const n=J(t);try{const r=await O0(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.ya.get(i);o&&(ue(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ra=!0:s.modifiedDocuments.size>0?ue(o.Ra):s.removedDocuments.size>0&&(ue(o.Ra),o.Ra=!1))}),await Ns(n,r,e)}catch(r){await Ss(r)}}function Qu(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ma.forEach((i,o)=>{const a=o.view.Q_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=J(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const d of h.listeners)d.Q_(a)&&(l=!0)}),l&&Kc(c)}(r.eventManager,e),s.length&&r.Va.a_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function IA(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.ya.get(e),i=s&&s.key;if(i){let o=new me($.comparator);o=o.insert(i,$e.newNoDocument(i,Q.min()));const a=Z().add(i),c=new so(Q.min(),new Map,new me(re),o,a);await Jp(r,c),r.pa=r.pa.remove(i),r.ya.delete(e),Gc(r)}else await Ca(r.localStore,e,!1).then(()=>Da(r,e,n)).catch(Ss)}async function wA(t,e){const n=J(t),r=e.batch.batchId;try{const s=await V0(n.localStore,e);Zp(n,r,null),Xp(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ns(n,s)}catch(s){await Ss(s)}}async function EA(t,e,n){const r=J(t);try{const s=await function(o,a){const c=J(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(ue(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);Zp(r,e,n),Xp(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ns(r,s)}catch(s){await Ss(s)}}function Xp(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function Zp(t,e,n){const r=J(t);let s=r.Sa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Sa[r.currentUser.toKey()]=s}}function Da(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.fa.get(e))t.ma.delete(r),n&&t.Va.Fa(r,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(r=>{t.wa.containsKey(r)||em(t,r)})}function em(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(qp(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),Gc(t))}function Yu(t,e,n){for(const r of n)r instanceof Qp?(t.wa.addReference(r.key,e),TA(t,r)):r instanceof Yp?(D("SyncEngine","Document no longer in limbo: "+r.key),t.wa.removeReference(r.key,e),t.wa.containsKey(r.key)||em(t,r.key)):K()}function TA(t,e){const n=e.key,r=n.path.canonicalString();t.pa.get(n)||t.ga.has(r)||(D("SyncEngine","New document in limbo: "+n),t.ga.add(r),Gc(t))}function Gc(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new $(ye.fromString(e)),r=t.Da.next();t.ya.set(r,new pA(n)),t.pa=t.pa.insert(n,r),jp(t.remoteStore,new rn(St(Mc(n.path)),r,"TargetPurposeLimboResolution",Pc._e))}}async function Ns(t,e,n){const r=J(t),s=[],i=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,c)=>{o.push(r.va(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=Bc.Qi(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.Va.a_(s),await async function(c,l){const u=J(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>w.forEach(l,d=>w.forEach(d.ki,p=>u.persistence.referenceDelegate.addReference(h,d.targetId,p)).next(()=>w.forEach(d.qi,p=>u.persistence.referenceDelegate.removeReference(h,d.targetId,p)))))}catch(h){if(!ks(h))throw h;D("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const p=u.ts.get(d),m=p.snapshotVersion,g=p.withLastLimboFreeSnapshotVersion(m);u.ts=u.ts.insert(d,g)}}}(r.localStore,i))}async function AA(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){D("SyncEngine","User change. New user:",e.toKey());const r=await Fp(n.localStore,e);n.currentUser=e,function(i,o){i.ba.forEach(a=>{a.forEach(c=>{c.reject(new U(T.CANCELLED,o))})}),i.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ns(n,r._s)}}function bA(t,e){const n=J(t),r=n.ya.get(e);if(r&&r.Ra)return Z().add(r.key);{let s=Z();const i=n.fa.get(e);if(!i)return s;for(const o of i){const a=n.ma.get(o);s=s.unionWith(a.view.ua)}return s}}function RA(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Jp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=bA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=IA.bind(null,e),e.Va.a_=lA.bind(null,e.eventManager),e.Va.Fa=uA.bind(null,e.eventManager),e}function SA(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=wA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=EA.bind(null,e),e}class Ju{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=io(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return N0(this.persistence,new C0,e.initialUser,this.serializer)}createPersistence(e){return new S0($c.jr,this.serializer)}createSharedClientState(e){return new U0}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class kA{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Qu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=AA.bind(null,this.syncEngine),await sA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new oA}()}createDatastore(e){const n=io(e.databaseInfo.databaseId),r=function(i){return new q0(i)}(e.databaseInfo);return function(i,o,a,c){return new W0(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new G0(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Qu(this.syncEngine,n,0),function(){return Wu.D()?new Wu:new $0}())}createSyncEngine(e,n){return function(s,i,o,a,c,l,u){const h=new mA(s,i,o,a,c,l);return u&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=J(n);D("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await Ds(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):Wt("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Ue.UNAUTHENTICATED,this.clientId=ip.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{D("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(D("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new U(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new cn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Wc(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ho(t,e){t.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Fp(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Xu(t,e){t.asyncQueue.verifyOperationInProgress();const n=await NA(t);D("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>Ku(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>Ku(e.remoteStore,i)),t._onlineComponents=e}function DA(t){return t.name==="FirebaseError"?t.code===T.FAILED_PRECONDITION||t.code===T.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function NA(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){D("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ho(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!DA(n))throw n;hr("Error using user provided cache. Falling back to memory cache: "+n),await Ho(t,new Ju)}}else D("FirestoreClient","Using default OfflineComponentProvider"),await Ho(t,new Ju);return t._offlineComponents}async function tm(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(D("FirestoreClient","Using user provided OnlineComponentProvider"),await Xu(t,t._uninitializedComponentsProvider._online)):(D("FirestoreClient","Using default OnlineComponentProvider"),await Xu(t,new kA))),t._onlineComponents}function VA(t){return tm(t).then(e=>e.syncEngine)}async function OA(t){const e=await tm(t),n=e.eventManager;return n.onListen=gA.bind(null,e.syncEngine),n.onUnlisten=yA.bind(null,e.syncEngine),n}function MA(t,e,n={}){const r=new cn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new PA({next:d=>{o.enqueueAndForget(()=>cA(i,h));const p=d.docs.has(a);!p&&d.fromCache?l.reject(new U(T.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&d.fromCache&&c&&c.source==="server"?l.reject(new U(T.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new hA(Mc(a.path),u,{includeMetadataChanges:!0,J_:!0});return aA(i,h)}(await OA(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LA(t,e,n){if(!n)throw new U(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function xA(t,e,n,r){if(e===!0&&r===!0)throw new U(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function eh(t){if(!$.isDocumentKey(t))throw new U(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Qc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function xn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new U(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Qc(t);throw new U(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new U(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}xA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=nm((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new U(T.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new U(T.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new U(T.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Yc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new th({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new U(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new U(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new th(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new XE;switch(r.type){case"firstParty":return new nT(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new U(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Zu.get(n);r&&(D("ComponentProvider","Removing Datastore"),Zu.delete(n),r.terminate())}(this),Promise.resolve()}}function FA(t,e,n,r={}){var s;const i=(t=xn(t,Yc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&hr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Ue.MOCK_USER;else{a=bg(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new U(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Ue(l)}t._authCredentials=new ZE(new sp(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Jc(this.firestore,e,this._query)}}class et{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ls(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new et(this.firestore,e,this._key)}}class ls extends Jc{constructor(e,n,r){super(e,n,Mc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new et(this.firestore,null,new $(e))}withConverter(e){return new ls(this.firestore,e,this._path)}}function jt(t,e,...n){if(t=Ce(t),arguments.length===1&&(e=ip.newId()),LA("doc","path",e),t instanceof Yc){const r=ye.fromString(e,...n);return eh(r),new et(t,null,new $(r))}{if(!(t instanceof et||t instanceof ls))throw new U(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ye.fromString(e,...n));return eh(r),new et(t.firestore,t instanceof ls?t.converter:null,new $(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new $p(this,"async_queue_retry"),this.iu=()=>{const n=zo();n&&D("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=zo();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=zo();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new cn;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!ks(e))throw e;D("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(r=>{this.eu=r,this.tu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Wt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(e,n,r){this.su(),this.ru.indexOf(e)>-1&&(n=0);const s=Hc.createAndSchedule(this,e,n,r,i=>this.au(i));return this.Xa.push(s),s}su(){this.eu&&K()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}class co extends Yc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new UA}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||im(this),this._firestoreClient.terminate()}}function rm(t,e){const n=typeof t=="object"?t:Hh(),r=typeof t=="string"?t:e||"(default)",s=fs(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Tg("firestore");i&&FA(s,...i)}return s}function sm(t){return t._firestoreClient||im(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function im(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,l,u){return new pT(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,nm(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new CA(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _r(He.fromBase64String(e))}catch(n){throw new U(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new _r(He.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new U(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Me(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new U(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new U(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return re(this._lat,e._lat)||re(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A=/^__.*__$/;class BA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new _n(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ps(e,this.data,n,this.fieldTransforms)}}class om{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new _n(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function am(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class el{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Pu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new el(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tu({path:r,du:!1});return s.Au(e),s}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tu({path:r,du:!1});return s.Pu(),s}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return Pi(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(am(this.Iu)&&$A.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class jA{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||io(e)}pu(e,n,r,s=!1){return new el({Iu:e,methodName:n,gu:r,path:Me.emptyPath(),du:!1,fu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function cm(t){const e=t._freezeSettings(),n=io(t._databaseId);return new jA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function qA(t,e,n,r,s,i={}){const o=t.pu(i.merge||i.mergeFields?2:0,e,n,s);tl("Data must be an object, but it was:",o,r);const a=lm(r,o);let c,l;if(i.merge)c=new Ze(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=Na(e,h,n);if(!o.contains(d))throw new U(T.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);hm(u,d)||u.push(d)}c=new Ze(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new BA(new Ye(a),c,l)}class uo extends Xc{_toFieldTransform(e){if(e.Iu!==2)throw e.Iu===1?e.mu(`${this._methodName}() can only appear at the top level of your update data`):e.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof uo}}function zA(t,e,n,r){const s=t.pu(1,e,n);tl("Data must be an object, but it was:",s,r);const i=[],o=Ye.empty();$n(r,(c,l)=>{const u=nl(e,c,n);l=Ce(l);const h=s.Ru(u);if(l instanceof uo)i.push(u);else{const d=ho(l,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new Ze(i);return new om(o,a,s.fieldTransforms)}function HA(t,e,n,r,s,i){const o=t.pu(1,e,n),a=[Na(e,r,n)],c=[s];if(i.length%2!=0)throw new U(T.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Na(e,i[d])),c.push(i[d+1]);const l=[],u=Ye.empty();for(let d=a.length-1;d>=0;--d)if(!hm(l,a[d])){const p=a[d];let m=c[d];m=Ce(m);const g=o.Ru(p);if(m instanceof uo)l.push(p);else{const v=ho(m,g);v!=null&&(l.push(p),u.set(p,v))}}const h=new Ze(l);return new om(u,h,o.fieldTransforms)}function ho(t,e){if(um(t=Ce(t)))return tl("Unsupported field value:",e,t),lm(t,e);if(t instanceof Xc)return function(r,s){if(!am(s.Iu))throw s.mu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.mu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=ho(a,s.Vu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ce(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return LT(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Se.fromDate(r);return{timestampValue:Si(s.serializer,i)}}if(r instanceof Se){const i=new Se(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Si(s.serializer,i)}}if(r instanceof Zc)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof _r)return{bytesValue:Np(s.serializer,r._byteString)};if(r instanceof et){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Fc(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.mu(`Unsupported field value: ${Qc(r)}`)}(t,e)}function lm(t,e){const n={};return op(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):$n(t,(r,s)=>{const i=ho(s,e.Eu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function um(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Se||t instanceof Zc||t instanceof _r||t instanceof et||t instanceof Xc)}function tl(t,e,n){if(!um(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Qc(n);throw r==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+r)}}function Na(t,e,n){if((e=Ce(e))instanceof lo)return e._internalPath;if(typeof e=="string")return nl(t,e);throw Pi("Field path arguments must be of type string or ",t,!1,void 0,n)}const WA=new RegExp("[~\\*/\\[\\]]");function nl(t,e,n){if(e.search(WA)>=0)throw Pi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new lo(...e.split("."))._internalPath}catch{throw Pi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Pi(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new U(T.INVALID_ARGUMENT,a+t+c)}function hm(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new KA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(fm("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class KA extends dm{data(){return super.data()}}function fm(t,e){return typeof e=="string"?nl(t,e):e instanceof lo?e._internalPath:e._delegate._internalPath}class GA{convertValue(e,n="none"){switch(Ln(e)){case 0:return null;case 1:return e.booleanValue;case 2:return be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Mn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw K()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return $n(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Zc(be(e.latitude),be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Dc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ss(e));default:return null}}convertTimestamp(e){const n=hn(e);return new Se(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ye.fromString(e);ue(xp(r));const s=new is(r.get(1),r.get(3)),i=new $(r.popFirst(5));return s.isEqual(n)||Wt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QA(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class pm extends dm{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new JA(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(fm("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class JA extends pm{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(t){t=xn(t,et);const e=xn(t.firestore,co);return MA(sm(e),t._key).then(n=>eb(e,t,n))}class XA extends GA{constructor(e){super(),this.firestore=e}convertBytes(e){return new _r(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new et(this.firestore,null,n)}}function mm(t,e,n){t=xn(t,et);const r=xn(t.firestore,co),s=QA(t.converter,e,n);return gm(r,[qA(cm(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,kt.none())])}function ZA(t,e,n,...r){t=xn(t,et);const s=xn(t.firestore,co),i=cm(s);let o;return o=typeof(e=Ce(e))=="string"||e instanceof lo?HA(i,"updateDoc",t._key,e,n,r):zA(i,"updateDoc",t._key,e),gm(s,[o.toMutation(t._key,kt.exists(!0))])}function gm(t,e){return function(r,s){const i=new cn;return r.asyncQueue.enqueueAndForget(async()=>vA(await VA(r),s,i)),i.promise}(sm(t),e)}function eb(t,e,n){const r=n.docs.get(e._key),s=new XA(t);return new pm(t,s,e._key,r,new YA(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Tr=s})(vr),Dt(new pt("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new co(new eT(r.getProvider("auth-internal")),new sT(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new U(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new is(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),ct(Au,"4.4.0",e),ct(Au,"4.4.0","esm2017")})();const _m={apiKey:"AIzaSyA3od-l9i_XZK89LK4p3wB-hjoHUFmj9wE",authDomain:"abicp-bus-app.firebaseapp.com",projectId:"abicp-bus-app",storageBucket:"abicp-bus-app.appspot.com",messagingSenderId:"453438990709",appId:"1:453438990709:web:5edf64a6962a6a39de4b3c",measurementId:"G-QDZNN1H54Z"},Vs=qa(_m),qt=rm(Vs);function tb(t){let e,n,r;return{c(){e=I("button"),e.textContent="Get Premium",y(e,"class","get-premium svelte-1xp2ilw")},m(s,i){j(s,e,i),n||(r=ne(e,"click",t[1]),n=!0)},p:B,d(s){s&&F(e),n=!1,r()}}}function nb(t){let e,n,r;return{c(){e=I("button"),e.textContent="Premium",y(e,"class","premium svelte-1xp2ilw")},m(s,i){j(s,e,i),n||(r=ne(e,"click",t[2]),n=!0)},p:B,d(s){s&&F(e),n=!1,r()}}}function rb(t){let e;function n(i,o){return i[0]?nb:tb}let r=n(t),s=r(t);return{c(){s.c(),e=Ot()},m(i,o){s.m(i,o),j(i,e,o)},p(i,[o]){r===(r=n(i))&&s?s.p(i,o):(s.d(1),s=r(i),s&&(s.c(),s.m(e.parentNode,e)))},i:B,o:B,d(i){i&&F(e),s.d(i)}}}let sb=10.99;function ib(t,e,n){let r,s,i=!1,o=Math.round(sb*100);Pd("pk_test_51OQqOjSEuj1HRmQX8Ce2BE1cQCxyZgBbsdl4JvwvJ76BcOpj8qjgyGReK2jrDcPPtkTiBG4UM8xoU8VaLlF7z19A00y40YX77m").then(h=>(r=h,r.elements(),r)),Ct(()=>{const h=mt().onAuthStateChanged(async d=>(d?(s=d.uid,d.email,await l()):(s=null,Be("/login")),()=>{h()}));return()=>h()});async function a(){try{await mm(jt(qt,"/premiumUsers",s),{userid:s}),console.log("Document written with ID: ",s),n(0,i=!0)}catch(h){console.error("Error adding document: ",h)}}async function c(){if(!i)try{const h=await fetch("http://localhost:3001/api/stripe/create-payment-intent",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:s,amount:o,currency:"inr"})});if(console.log(h),!h.ok){const g=await h.json();throw console.error("Server error response:",g),new Error(`Payment failed with status: ${h.status}`)}const d=await h.json(),{paymentIntent:p,error:m}=await r.confirmCardPayment(d.clientSecret,{payment_method:d.paymentMethodId});console.log("Payment confirmed:",p),a(),Be("/account")}catch(h){console.error("Error during payment:",h.message)}}Ct(l);async function l(){const h=jt(qt,"premiumUsers",s);(await yr(h)).exists()&&(console.log("Already a premium user!"),n(0,i=!0))}return[i,c,()=>alert("Yaay! You're already a Premium User!")]}class ob extends Te{constructor(e){super(),Ee(this,e,ib,rb,ge,{})}}function ab(t){let e,n,r,s,i,o,a,c,l,u,h,d,p;return a=new ob({}),{c(){e=I("div"),n=I("a"),r=I("img"),i=R(),o=I("div"),le(a.$$.fragment),c=R(),l=I("div"),u=I("button"),u.textContent="My Account",xr(r.src,s=cb)||y(r,"src",s),y(r,"class","clickable svelte-4gv3td"),y(r,"alt","Busly Logo"),y(n,"href","/"),y(u,"class","clickable my-account svelte-4gv3td"),y(l,"class","account"),y(o,"class","nav-options flex aic"),y(e,"class","nav-bar flex aic jcsb svelte-4gv3td")},m(m,g){j(m,e,g),f(e,n),f(n,r),f(e,i),f(e,o),oe(a,o,null),f(o,c),f(o,l),f(l,u),h=!0,d||(p=ne(u,"click",t[0]),d=!0)},p:B,i(m){h||(N(a.$$.fragment,m),h=!0)},o(m){M(a.$$.fragment,m),h=!1},d(m){m&&F(e),ae(a),d=!1,p()}}}let cb="./src/assets/img/busly-logo.png";function lb(t){function e(){Be("/account")}return[e]}class jn extends Te{constructor(e){super(),Ee(this,e,lb,ab,ge,{})}}const ym=["Chennai","Kancheepuram","Tiruvallur","Vellore","Thiruvannamalai","Villupuram","Cuddalore","Salem","Namakkal","Dindigul","Karur","Tiruchirappalli","Perambalur","Ariyalur","Thanjavur","Nagapattinam","Thiruvarur","Pudukkottai","Sivaganga","Madurai","Theni","Ramanathapuram","Virudhunagar","Tuticorin","Tirunelveli","Kanyakumari","Nilgiris","Coimbatore","Erode","Krishnagiri","Dharmapuri","Kallakurichi","Tenkasi","Chengalpattu","Tirupathur","Ranipet","Tiruppur","Tambaram"];function ub(t){let e,n,r;return{c(){e=I("li"),y(e,"class","autocomplete-items svelte-xhhva6"),ll(e,"autocomplete-active",t[1])},m(s,i){j(s,e,i),e.innerHTML=t[0],n||(r=ne(e,"click",t[2]),n=!0)},p(s,[i]){i&1&&(e.innerHTML=s[0]),i&2&&ll(e,"autocomplete-active",s[1])},i:B,o:B,d(s){s&&F(e),n=!1,r()}}}function hb(t,e,n){let{itemLabel:r}=e,{highlighted:s}=e;function i(o){Om.call(this,t,o)}return t.$$set=o=>{"itemLabel"in o&&n(0,r=o.itemLabel),"highlighted"in o&&n(1,s=o.highlighted)},[r,s,i]}class vm extends Te{constructor(e){super(),Ee(this,e,hb,ub,ge,{itemLabel:0,highlighted:1})}}function nh(t,e,n){const r=t.slice();return r[17]=e[n],r[19]=n,r}function rh(t){let e,n,r=ln(t[1]),s=[];for(let o=0;o<r.length;o+=1)s[o]=sh(nh(t,r,o));const i=o=>M(s[o],1,1,()=>{s[o]=null});return{c(){e=I("ul");for(let o=0;o<s.length;o+=1)s[o].c();y(e,"id","autocomplete-items-list")},m(o,a){j(o,e,a);for(let c=0;c<s.length;c+=1)s[c]&&s[c].m(e,null);n=!0},p(o,a){if(a&70){r=ln(o[1]);let c;for(c=0;c<r.length;c+=1){const l=nh(o,r,c);s[c]?(s[c].p(l,a),N(s[c],1)):(s[c]=sh(l),s[c].c(),N(s[c],1),s[c].m(e,null))}for(nt(),c=r.length;c<s.length;c+=1)i(c);rt()}},i(o){if(!n){for(let a=0;a<r.length;a+=1)N(s[a]);n=!0}},o(o){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)M(s[a]);n=!1},d(o){o&&F(e),Ah(s,o)}}}function sh(t){let e,n;function r(){return t[12](t[17])}return e=new vm({props:{itemLabel:t[17],highlighted:t[19]===t[2]}}),e.$on("click",r),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},p(s,i){t=s;const o={};i&2&&(o.itemLabel=t[17]),i&4&&(o.highlighted=t[19]===t[2]),e.$set(o)},i(s){n||(N(e.$$.fragment,s),n=!0)},o(s){M(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function db(t){let e,n,r,s,i,o,a,c=t[1].length>0&&rh(t);return{c(){e=I("div"),n=I("div"),r=I("input"),s=R(),c&&c.c(),y(r,"id","src-district-input"),y(r,"type","text"),y(r,"placeholder","Enter Source"),r.required=!0,y(n,"class","autocomplete"),y(e,"class","source-wrapper")},m(l,u){j(l,e,u),f(e,n),f(n,r),t[8](r),pe(r,t[0]),f(e,s),c&&c.m(e,null),i=!0,o||(a=[ne(window,"keydown",t[7]),ne(r,"input",t[9]),ne(r,"input",t[5]),ne(r,"focus",t[10]),ne(r,"blur",t[11])],o=!0)},p(l,[u]){u&1&&r.value!==l[0]&&pe(r,l[0]),l[1].length>0?c?(c.p(l,u),u&2&&N(c,1)):(c=rh(l),c.c(),N(c,1),c.m(e,null)):c&&(nt(),M(c,1,1,()=>{c=null}),rt())},i(l){i||(N(c),i=!0)},o(l){M(c),i=!1},d(l){l&&F(e),t[8](null),c&&c.d(),o=!1,We(a)}}}function fb(t,e,n){let{sourceInputValue:r=""}=e,s=[],i=null,o,a=!1;const c=()=>{let _=[];r&&ym.forEach(E=>{E.toLowerCase().startsWith(r.toLowerCase())&&(_=[..._,u(E)])}),n(1,s=_)},l=_=>{a&&(n(0,r=h(_)),n(1,s=[]),n(2,i=null),document.querySelector("#src-district-input").focus())},u=_=>{let E=_.substring(0,r.length),P=`<strong>${E}</strong>`;return _.replace(E,P)},h=_=>_?_.replace(/<(.)*?>/g,""):"",d=_=>{if(_.key==="ArrowDown"&&i<=s.length-1)i===null?n(2,i=0):n(2,i+=1);else if(_.key==="ArrowUp"&&i!==null)i===0?n(2,i=s.length-1):n(2,i-=1);else if(_.key==="Enter")_.preventDefault(),l(s[i]);else return};function p(_){bn[_?"unshift":"push"](()=>{o=_,n(3,o)})}function m(){r=this.value,n(0,r)}const g=()=>n(4,a=!0),v=()=>n(4,a=!1),A=_=>l(_);return t.$$set=_=>{"sourceInputValue"in _&&n(0,r=_.sourceInputValue)},t.$$.update=()=>{t.$$.dirty&1&&(r||(n(1,s=[]),n(2,i=null))),t.$$.dirty&6&&s[i]},[r,s,i,o,a,c,l,d,p,m,g,v,A]}class pb extends Te{constructor(e){super(),Ee(this,e,fb,db,ge,{sourceInputValue:0})}}function ih(t,e,n){const r=t.slice();return r[16]=e[n],r[18]=n,r}function oh(t){let e,n,r=ln(t[1]),s=[];for(let o=0;o<r.length;o+=1)s[o]=ah(ih(t,r,o));const i=o=>M(s[o],1,1,()=>{s[o]=null});return{c(){e=I("ul");for(let o=0;o<s.length;o+=1)s[o].c();y(e,"id","autocomplete-items-list")},m(o,a){j(o,e,a);for(let c=0;c<s.length;c+=1)s[c]&&s[c].m(e,null);n=!0},p(o,a){if(a&70){r=ln(o[1]);let c;for(c=0;c<r.length;c+=1){const l=ih(o,r,c);s[c]?(s[c].p(l,a),N(s[c],1)):(s[c]=ah(l),s[c].c(),N(s[c],1),s[c].m(e,null))}for(nt(),c=r.length;c<s.length;c+=1)i(c);rt()}},i(o){if(!n){for(let a=0;a<r.length;a+=1)N(s[a]);n=!0}},o(o){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)M(s[a]);n=!1},d(o){o&&F(e),Ah(s,o)}}}function ah(t){let e,n;function r(){return t[12](t[16])}return e=new vm({props:{itemLabel:t[16],highlighted:t[18]===t[2]}}),e.$on("click",r),{c(){le(e.$$.fragment)},m(s,i){oe(e,s,i),n=!0},p(s,i){t=s;const o={};i&2&&(o.itemLabel=t[16]),i&4&&(o.highlighted=t[18]===t[2]),e.$set(o)},i(s){n||(N(e.$$.fragment,s),n=!0)},o(s){M(e.$$.fragment,s),n=!1},d(s){ae(e,s)}}}function mb(t){let e,n,r,s,i,o,a,c=t[1].length>0&&oh(t);return{c(){e=I("div"),n=I("div"),r=I("input"),s=R(),c&&c.c(),y(r,"id","dest-district-input"),y(r,"type","text"),y(r,"placeholder","Enter Destination"),r.required=!0,y(n,"class","autocomplete"),y(e,"class","destination-wrapper")},m(l,u){j(l,e,u),f(e,n),f(n,r),t[8](r),pe(r,t[0]),f(e,s),c&&c.m(e,null),i=!0,o||(a=[ne(window,"keydown",t[7]),ne(r,"input",t[9]),ne(r,"input",t[5]),ne(r,"focus",t[10]),ne(r,"blur",t[11])],o=!0)},p(l,[u]){u&1&&r.value!==l[0]&&pe(r,l[0]),l[1].length>0?c?(c.p(l,u),u&2&&N(c,1)):(c=oh(l),c.c(),N(c,1),c.m(e,null)):c&&(nt(),M(c,1,1,()=>{c=null}),rt())},i(l){i||(N(c),i=!0)},o(l){M(c),i=!1},d(l){l&&F(e),t[8](null),c&&c.d(),o=!1,We(a)}}}function gb(t,e,n){let{destinationInputValue:r=""}=e,s=[],i=null,o,a=!1;const c=()=>{let _=[];r&&ym.forEach(E=>{E.toLowerCase().startsWith(r.toLowerCase())&&(_=[..._,u(E)])}),n(1,s=_)},l=_=>{a&&(n(0,r=h(_)),n(1,s=[]),n(2,i=null),document.querySelector("#dest-district-input").focus())},u=_=>{let E=_.substring(0,r.length),P=`<strong>${E}</strong>`;return _.replace(E,P)},h=_=>_?_.replace(/<(.)*?>/g,""):"",d=_=>{if(_.key==="ArrowDown"&&i<=s.length-1)i===null?n(2,i=0):n(2,i+=1);else if(_.key==="ArrowUp"&&i!==null)i===0?n(2,i=s.length-1):n(2,i-=1);else if(_.key==="Enter")_.preventDefault(),l(s[i]);else return};function p(_){bn[_?"unshift":"push"](()=>{o=_,n(3,o)})}function m(){r=this.value,n(0,r)}const g=()=>n(4,a=!0),v=()=>n(4,a=!1),A=_=>l(_);return t.$$set=_=>{"destinationInputValue"in _&&n(0,r=_.destinationInputValue)},t.$$.update=()=>{t.$$.dirty&1&&(r||(n(1,s=[]),n(2,i=null))),t.$$.dirty&6&&s[i]},[r,s,i,o,a,c,l,d,p,m,g,v,A]}class _b extends Te{constructor(e){super(),Ee(this,e,gb,mb,ge,{destinationInputValue:0})}}function yb(t){let e,n,r,s;return{c(){e=I("div"),n=I("input"),y(n,"type","date"),y(n,"id","date"),y(n,"class","input-field date"),n.required=!0,y(n,"min",t[1]),y(n,"max",t[2]),y(e,"class","input-container flex")},m(i,o){j(i,e,o),f(e,n),pe(n,t[0]),r||(s=[ne(n,"input",t[4]),ne(n,"input",t[3])],r=!0)},p(i,[o]){o&1&&pe(n,i[0])},i:B,o:B,d(i){i&&F(e),r=!1,We(s)}}}function vb(t,e,n){let{dateInput:r=""}=e,s=new Date().toISOString().split("T")[0],i=new Date;i.setMonth(i.getMonth()+3);let o=i.toISOString().split("T")[0];function a(){let l=new Date(r),u=new Date(s),h=new Date(o);l>=u&&l<=h?(console.log(u),console.log("The target date is within the range.")):(console.log("The target date is outside the range."),n(0,r=s))}function c(){r=this.value,n(0,r)}return t.$$set=l=>{"dateInput"in l&&n(0,r=l.dateInput)},[r,s,o,a,c]}class Ib extends Te{constructor(e){super(),Ee(this,e,vb,yb,ge,{dateInput:0})}}const Va=Ft({}),Im=Ft({});function wb(t){let e,n,r,s,i,o,a,c,l,u,h,d,p,m,g;function v(C){t[5](C)}let A={};t[0]!==void 0&&(A.sourceInputValue=t[0]),r=new pb({props:A}),bn.push(()=>yo(r,"sourceInputValue",v));function _(C){t[6](C)}let E={};t[1]!==void 0&&(E.destinationInputValue=t[1]),o=new _b({props:E}),bn.push(()=>yo(o,"destinationInputValue",_));function P(C){t[7](C)}let q={};return t[2]!==void 0&&(q.dateInput=t[2]),l=new Ib({props:q}),bn.push(()=>yo(l,"dateInput",P)),{c(){e=I("form"),n=I("div"),le(r.$$.fragment),i=R(),le(o.$$.fragment),c=R(),le(l.$$.fragment),h=R(),d=I("input"),y(d,"class","submit-btn"),y(d,"type","submit"),d.value="Search",y(n,"class","search-box flex"),y(e,"autocomplete","off")},m(C,V){j(C,e,V),f(e,n),oe(r,n,null),f(n,i),oe(o,n,null),f(n,c),oe(l,n,null),f(n,h),f(n,d),p=!0,m||(g=[ne(d,"keydown",t[4]),ne(e,"submit",Ua(t[3]))],m=!0)},p(C,[V]){const O={};!s&&V&1&&(s=!0,O.sourceInputValue=C[0],go(()=>s=!1)),r.$set(O);const b={};!a&&V&2&&(a=!0,b.destinationInputValue=C[1],go(()=>a=!1)),o.$set(b);const z={};!u&&V&4&&(u=!0,z.dateInput=C[2],go(()=>u=!1)),l.$set(z)},i(C){p||(N(r.$$.fragment,C),N(o.$$.fragment,C),N(l.$$.fragment,C),p=!0)},o(C){M(r.$$.fragment,C),M(o.$$.fragment,C),M(l.$$.fragment,C),p=!1},d(C){C&&F(e),ae(r),ae(o),ae(l),m=!1,We(g)}}}function Eb(t,e,n){let r;tn(t,Va,_=>n(11,r=_));let s="",i="",o=new Date().toISOString().split("T")[0],a=null,c="";const l=mt(Vs);let u=!1;Ct(()=>_s(l,async E=>{if(!E){Be("/login");return}a=E,a&&(c=a.uid,u=await h(c))}));async function h(_){if(!_||!qt)return console.log("User or premium err"),!1;const E=jt(qt,"premiumUsers",_),P=await yr(E);return P.exists()?(console.log("Premium OK! Document data:",P.data()),!0):(console.log("No such document!"),!1)}const d=async()=>{if(s&&i){const _=`http://localhost:3001/api/search?source=${s}&destination=${i}&date=${o}&premium=${u}`;try{const E=await fetch(_);if(E.ok){const P=await E.json();console.log("API response:",P),p(),Va.set(P),console.log("searchData updated:",r),Be("/search-results")}else console.error("API request failed:",E.statusText),alert("API request failed")}catch(E){console.error("Error during API request:",E),alert("Error during API request")}}else alert("Enter Valid Source and Destination!")},p=()=>{n(0,s=""),n(1,i=""),n(2,o="yyyy-MM-dd")},m=_=>{_.key=="Enter"&&d()};function g(_){s=_,n(0,s)}function v(_){i=_,n(1,i)}function A(_){o=_,n(2,o)}return[s,i,o,d,m,g,v,A]}class Tb extends Te{constructor(e){super(),Ee(this,e,Eb,wb,ge,{})}}function Ab(t){let e,n,r,s,i,o;return i=new Tb({}),{c(){e=I("div"),n=I("h6"),n.innerHTML=`Image by <a href="https://pixabay.com/users/sofcor-6983808/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2990060">Sofia Cristina Córdova Valladares</a>
    from
    <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2990060">Pixabay</a> <div class="space svelte-1uxwoq7"></div>`,r=R(),s=I("div"),le(i.$$.fragment),y(s,"class","wrapper flex jcc"),y(e,"class","container svelte-1uxwoq7"),cr(e,"background-image","url('https://cdn.pixabay.com/photo/2017/12/01/03/17/nature-2990060_1280.jpg')")},m(a,c){j(a,e,c),f(e,n),f(e,r),f(e,s),oe(i,s,null),o=!0},p:B,i(a){o||(N(i.$$.fragment,a),o=!0)},o(a){M(i.$$.fragment,a),o=!1},d(a){a&&F(e),ae(i)}}}function bb(){fetch("https://source.unsplash.com/collections/2470411/travel").then(t=>{if(t.ok){const e=t.url;document.body.style.backgroundImage=`url(${e})`,document.body.style.backgroundSize="cover",document.body.style.backgroundPosition="center",console.log("Background image set to:",e)}else console.error("Failed to fetch image. Status:",t.status)}).catch(t=>console.error("Error fetching random image:",t))}function Rb(t){return bb(),[]}class Sb extends Te{constructor(e){super(),Ee(this,e,Rb,Ab,ge,{})}}function kb(t){let e;return{c(){e=I("div"),e.innerHTML=`<h3 class="svelte-khx6rx">FAQ</h3> <br/> <p class="svelte-khx6rx"><strong class="svelte-khx6rx">Advantages of Online Bus Booking:</strong></p> <ul class="svelte-khx6rx"><li>You can <strong class="svelte-khx6rx">choose your preferred seats</strong>.</li> <li>Online bus ticket booking keeps you away from the long queues of the
      offline ticket counters.</li> <li>You can view plenty of buses and choose an appropriate bus for your travel
      considering the amenities, reviews, ratings, and bus images available.</li> <li>You can choose the preferred bus type (Volvo Bus, AC or Non AC) and also
      pickup and dropping point and timings.</li> <li>Your tickets can be booked at a reasonable price with the ongoing bank and
      e-wallet discounts.</li></ul> <br/><br/> <p class="svelte-khx6rx"><strong class="svelte-khx6rx">Can we book state road transport corporation buses from Busly?</strong></p> <p class="svelte-khx6rx">Yes, almost all fleets of state road transport corporation buses can be
    booked from Busly. For example, Deluxe AC and Non AC buses and Volvo bus
    booking.</p> <br/> <p class="svelte-khx6rx"><strong class="svelte-khx6rx">Is it compulsory to carry the printout of the ticket to board the bus?</strong></p> <p class="svelte-khx6rx">The bus operators validate e-tickets received on your e-mail, Whatsapp, or
    available on the Busly app. But, it is advisable to carry the e-ticket&#39;s
    print out to be on a safer side for a hassle-free travel experience.</p> <br/> <p class="svelte-khx6rx"><strong class="svelte-khx6rx">What if I miss the bus? Will I get a refund?</strong></p> <p class="svelte-khx6rx">Refund will not be initiated if you miss the bus. A refund is initiated in
    case the bus operator cancels the bus and has not provided any other bus as
    an alternate option. Please note that Busly will not be liable for a refund
    as it can be permitted only by the bus operators.</p> <br/> <p class="svelte-khx6rx"><strong class="svelte-khx6rx">How to book bus tickets online through Busly?</strong></p> <p class="svelte-khx6rx">Browse the Busly website or mobile app, go to the Bus section, enter the to
    and from city name and the journey date. The results displayed will bring
    forth various bus options. You can apply filters as per your travel
    preferences, like bus timings, boarding or dropping points, bus operators,
    bus type (Volvo Bus, AC or Non AC Bus). After deciding the bus, you can also
    select the seat as per your choice. After selecting the seat, you must
    select the pickup and dropping point before confirming the booking.</p> <p class="svelte-khx6rx">Enter the traveler details on the booking confirmation page. You can also
    check the current offers and promo codes available on the booking and also
    redeem GoCash if any. You can protect your journey with Travel Insurance
    policy. After confirming all the details, pay the final amount through
    payment options like Credit/Debit cards, Netbanking, or e-Wallets.</p> <br/> <p class="svelte-khx6rx"><strong class="svelte-khx6rx">Where can I check current offers on online bus booking via Busly?</strong></p> <p class="svelte-khx6rx">The exciting discounts and offers come with validity; hence, you must check
    the current offers before booking bus tickets. The exclusive bank offers,
    promo codes, and discounts are displayed on the bus page of the website and
    Bus section on the Busly app.</p>`,y(e,"class","faq svelte-khx6rx")},m(n,r){j(n,e,r)},p:B,i:B,o:B,d(n){n&&F(e)}}}class Pb extends Te{constructor(e){super(),Ee(this,e,null,kb,ge,{})}}function Cb(t){let e,n,r,s,i,o,a,c,l,u,h,d,p,m,g,v,A,_,E;return n=new jn({}),s=new Sb({}),_=new Pb({}),{c(){e=I("main"),le(n.$$.fragment),r=R(),le(s.$$.fragment),i=R(),o=I("div"),a=I("img"),l=R(),u=I("div"),h=I("img"),p=R(),m=I("div"),g=I("img"),A=R(),le(_.$$.fragment),xr(a.src,c=Db)||y(a,"src",c),y(a,"alt","offers"),y(a,"class","offer-img svelte-15ycwbw"),y(o,"class","flex jcc img svelte-15ycwbw"),xr(h.src,d=Nb)||y(h,"src",d),y(h,"alt","primo logo"),y(h,"class","primo-logo-img svelte-15ycwbw"),y(u,"class","flex jcc img svelte-15ycwbw"),xr(g.src,v=Vb)||y(g,"src",v),y(g,"alt","primo-assured"),y(g,"class","primo-assured-img svelte-15ycwbw"),y(m,"class","flex jcc img svelte-15ycwbw"),y(e,"class","svelte-15ycwbw")},m(P,q){j(P,e,q),oe(n,e,null),f(e,r),oe(s,e,null),f(e,i),f(e,o),f(o,a),f(e,l),f(e,u),f(u,h),f(e,p),f(e,m),f(m,g),f(e,A),oe(_,e,null),E=!0},p:B,i(P){E||(N(n.$$.fragment,P),N(s.$$.fragment,P),N(_.$$.fragment,P),E=!0)},o(P){M(n.$$.fragment,P),M(s.$$.fragment,P),M(_.$$.fragment,P),E=!1},d(P){P&&F(e),ae(n),ae(s),ae(_)}}}let Db="./src/assets/img/offers.png",Nb="./src/assets/img/primo.svg",Vb="./src/assets/img/primo-assured.png";class Ob extends Te{constructor(e){super(),Ee(this,e,null,Cb,ge,{})}}function Mb(t){let e,n,r,s=t[0].companyName+"",i,o,a,c,l,u=t[0].source+"",h,d,p,m,g,v=Gs(t[0].sourceTime)+"",A,_,E,P,q=ch(t[0].journeyTime)+"",C,V,O,b=t[0].distance+"",z,G,S,X,x,Y=t[0].destination+"",se,ke,yt,vt,st,ht=Gs(t[0].destinationTime)+"",dt,it,ot,fe,Qt,Ke=t[0].totalFare+"",It,Ie,we,Yt,qn;return{c(){e=I("div"),n=I("div"),r=I("h2"),i=L(s),o=R(),a=I("div"),c=I("div"),l=I("h3"),h=L(u),d=R(),p=I("h6"),p.textContent="Source",m=R(),g=I("h4"),A=L(v),_=R(),E=I("div"),P=I("h4"),C=L(q),V=R(),O=I("h4"),z=L(b),G=L(" km"),S=R(),X=I("div"),x=I("h3"),se=L(Y),ke=R(),yt=I("h6"),yt.textContent="Destination",vt=R(),st=I("h4"),dt=L(ht),it=R(),ot=I("div"),fe=I("h2"),Qt=L("₹"),It=L(Ke),Ie=R(),we=I("button"),we.textContent="BOOK",y(r,"class","compant-name"),y(n,"class","flex jcsb"),y(l,"class","source-place place svelte-mo19ae"),y(g,"class","source-time time svelte-mo19ae"),y(c,"class","source-container"),y(P,"class","time-container"),y(O,"class","distance svelte-mo19ae"),y(x,"class","destination-place place svelte-mo19ae"),y(st,"class","destination-time time svelte-mo19ae"),y(X,"class","destination-container"),y(fe,"class","fare"),y(we,"type","button"),y(we,"class","book-btn svelte-mo19ae"),y(ot,"class","booking"),y(a,"class","place-container flex aic jcsb"),y(e,"class","card-container svelte-mo19ae")},m(Ge,_e){j(Ge,e,_e),f(e,n),f(n,r),f(r,i),f(e,o),f(e,a),f(a,c),f(c,l),f(l,h),f(c,d),f(c,p),f(c,m),f(c,g),f(g,A),f(a,_),f(a,E),f(E,P),f(P,C),f(E,V),f(E,O),f(O,z),f(O,G),f(a,S),f(a,X),f(X,x),f(x,se),f(X,ke),f(X,yt),f(X,vt),f(X,st),f(st,dt),f(a,it),f(a,ot),f(ot,fe),f(fe,Qt),f(fe,It),f(ot,Ie),f(ot,we),Yt||(qn=ne(we,"click",t[2]),Yt=!0)},p(Ge,[_e]){_e&1&&s!==(s=Ge[0].companyName+"")&&ie(i,s),_e&1&&u!==(u=Ge[0].source+"")&&ie(h,u),_e&1&&v!==(v=Gs(Ge[0].sourceTime)+"")&&ie(A,v),_e&1&&q!==(q=ch(Ge[0].journeyTime)+"")&&ie(C,q),_e&1&&b!==(b=Ge[0].distance+"")&&ie(z,b),_e&1&&Y!==(Y=Ge[0].destination+"")&&ie(se,Y),_e&1&&ht!==(ht=Gs(Ge[0].destinationTime)+"")&&ie(dt,ht),_e&1&&Ke!==(Ke=Ge[0].totalFare+"")&&ie(It,Ke)},i:B,o:B,d(Ge){Ge&&F(e),Yt=!1,qn()}}}function ch(t){const e=Math.floor(t/60),n=Math.round(t%60);return`${e} hours and ${n} minutes`}function Gs(t){const e=parseInt(Math.floor(t/1440).toFixed(0)),n=Math.round(t%60).toLocaleString("en-US",{minimumIntegerDigits:2});return e>0?`${Math.floor((t-e*1440)/60)}:${n} + ${e}day(s)`:`${Math.floor(t/60)}:${n}`}function Lb(t,e,n){let r,{bus:s}=e;const i=mt(),o=Ft(null);tn(t,o,c=>n(3,r=c)),_s(i,c=>{o.set(c)});function a(){r?(Im.set(s),Be("/booking-page")):(alert("Please log in to book a bus."),Be("/login"))}return t.$$set=c=>{"bus"in c&&n(0,s=c.bus)},[s,o,a]}class xb extends Te{constructor(e){super(),Ee(this,e,Lb,Mb,ge,{bus:0})}}function lh(t,e,n){const r=t.slice();return r[3]=e[n],r}function Fb(t){let e;return{c(){e=I("p"),e.textContent="No results found."},m(n,r){j(n,e,r)},p:B,i:B,o:B,d(n){n&&F(e)}}}function Ub(t){let e=[],n=new Map,r,s,i=ln(t[0]);const o=a=>a[3].busId;for(let a=0;a<i.length;a+=1){let c=lh(t,i,a),l=o(c);n.set(l,e[a]=uh(l,c))}return{c(){for(let a=0;a<e.length;a+=1)e[a].c();r=Ot()},m(a,c){for(let l=0;l<e.length;l+=1)e[l]&&e[l].m(a,c);j(a,r,c),s=!0},p(a,c){c&7&&(i=ln(a[0]),nt(),e=Ch(e,c,o,1,a,i,n,r.parentNode,Ph,uh,r,lh),rt())},i(a){if(!s){for(let c=0;c<i.length;c+=1)N(e[c]);s=!0}},o(a){for(let c=0;c<e.length;c+=1)M(e[c]);s=!1},d(a){a&&F(r);for(let c=0;c<e.length;c+=1)e[c].d(a)}}}function uh(t,e){let n,r,s;return r=new xb({props:{bus:e[3],source:e[1],destination:e[2]}}),{key:t,first:null,c(){n=Ot(),le(r.$$.fragment),this.first=n},m(i,o){j(i,n,o),oe(r,i,o),s=!0},p(i,o){e=i;const a={};o&1&&(a.bus=e[3]),o&2&&(a.source=e[1]),o&4&&(a.destination=e[2]),r.$set(a)},i(i){s||(N(r.$$.fragment,i),s=!0)},o(i){M(r.$$.fragment,i),s=!1},d(i){i&&F(n),ae(r,i)}}}function $b(t){let e,n,r,s,i,o,a,c;n=new jn({});const l=[Ub,Fb],u=[];function h(d,p){return d[0].length>0?0:1}return o=h(t),a=u[o]=l[o](t),{c(){e=I("div"),le(n.$$.fragment),r=R(),s=I("h1"),s.textContent="Search Result",i=R(),a.c(),y(e,"class","search-results container svelte-m6vfcc")},m(d,p){j(d,e,p),oe(n,e,null),f(e,r),f(e,s),f(e,i),u[o].m(e,null),c=!0},p(d,[p]){let m=o;o=h(d),o===m?u[o].p(d,p):(nt(),M(u[m],1,1,()=>{u[m]=null}),rt(),a=u[o],a?a.p(d,p):(a=u[o]=l[o](d),a.c()),N(a,1),a.m(e,null))},i(d){c||(N(n.$$.fragment,d),N(a),c=!0)},o(d){M(n.$$.fragment,d),M(a),c=!1},d(d){d&&F(e),ae(n),u[o].d()}}}function Bb(t,e,n){let r=[],s,i;return Ct(()=>Va.subscribe(a=>{console.log("Search data in SearchResult:",a),n(0,r=a.buses||[]),n(1,s=a.source||""),n(2,i=a.destination||"")})),[r,s,i]}class jb extends Te{constructor(e){super(),Ee(this,e,Bb,$b,ge,{})}}function hh(t){let e,n;return{c(){e=I("p"),n=L(t[2]),cr(e,"color","red"),cr(e,"text-align","center"),y(e,"class","svelte-hzep9q")},m(r,s){j(r,e,s),f(e,n)},p(r,s){s&4&&ie(n,r[2])},d(r){r&&F(e)}}}function qb(t){let e,n,r,s,i,o,a,c,l,u,h,d,p,m,g,v,A,_,E,P,q,C,V,O,b,z;e=new jn({});let G=t[2]&&hh(t);return{c(){le(e.$$.fragment),n=R(),r=I("div"),s=I("h2"),s.textContent="Login",i=R(),G&&G.c(),o=R(),a=I("form"),c=I("label"),c.textContent="Email:",l=R(),u=I("input"),h=R(),d=I("label"),d.textContent="Password:",p=R(),m=I("input"),g=R(),v=I("button"),v.textContent="Login",A=R(),_=I("button"),E=I("img"),q=L(`
    Login with Google`),C=R(),V=I("h4"),V.innerHTML='Not a user? <a href="/register">Register</a>',y(s,"class","svelte-hzep9q"),y(c,"for","email"),y(c,"class","svelte-hzep9q"),y(u,"type","email"),y(u,"id","email"),y(u,"class","svelte-hzep9q"),y(d,"for","password"),y(d,"class","svelte-hzep9q"),y(m,"type","password"),y(m,"id","password"),y(m,"class","svelte-hzep9q"),y(v,"type","submit"),y(v,"class","svelte-hzep9q"),y(a,"class","svelte-hzep9q"),y(E,"class","google-logo svelte-hzep9q"),xr(E.src,P=zb)||y(E,"src",P),y(E,"alt","Google Logo"),y(_,"class","svelte-hzep9q"),y(V,"class","svelte-hzep9q"),y(r,"class","container svelte-hzep9q")},m(S,X){oe(e,S,X),j(S,n,X),j(S,r,X),f(r,s),f(r,i),G&&G.m(r,null),f(r,o),f(r,a),f(a,c),f(a,l),f(a,u),pe(u,t[0]),f(a,h),f(a,d),f(a,p),f(a,m),pe(m,t[1]),f(a,g),f(a,v),f(r,A),f(r,_),f(_,E),f(_,q),f(r,C),f(r,V),O=!0,b||(z=[ne(u,"input",t[5]),ne(m,"input",t[6]),ne(a,"submit",Ua(t[3])),ne(_,"click",t[4])],b=!0)},p(S,[X]){S[2]?G?G.p(S,X):(G=hh(S),G.c(),G.m(r,o)):G&&(G.d(1),G=null),X&1&&u.value!==S[0]&&pe(u,S[0]),X&2&&m.value!==S[1]&&pe(m,S[1])},i(S){O||(N(e.$$.fragment,S),O=!0)},o(S){M(e.$$.fragment,S),O=!1},d(S){S&&(F(n),F(r)),ae(e,S),G&&G.d(),b=!1,We(z)}}}let zb="../src/assets/img/google-logo.png";function Hb(t,e,n){const r=mt(Vs);let s="",i="",o="";Ct(()=>{n(2,o="")});function a(){Be("/account")}const c=async()=>{try{await Wy(r,s,i),console.log("User logged in successfully!"),a()}catch(d){n(2,o="Invalid email/password. Please try again."),console.error("Error logging in:",d.message)}},l=async()=>{try{const d=new Lt;await yv(r,d),console.log("User logged in with Google successfully!"),a()}catch(d){n(2,o="Error logging in with Google. Please try again."),console.error("Error logging in with Google:",d.message)}};function u(){s=this.value,n(0,s)}function h(){i=this.value,n(1,i)}return[s,i,o,c,l,u,h]}class Wb extends Te{constructor(e){super(),Ee(this,e,Hb,qb,ge,{})}}function dh(t){let e,n;return{c(){e=I("p"),n=L(t[4]),cr(e,"color","red"),cr(e,"text-align","center"),y(e,"class","svelte-17g9khx")},m(r,s){j(r,e,s),f(e,n)},p(r,s){s&16&&ie(n,r[4])},d(r){r&&F(e)}}}function Kb(t){let e,n,r,s,i,o,a,c,l,u,h,d,p,m,g,v,A,_,E,P,q,C,V,O,b,z,G,S,X;e=new jn({});let x=t[4]&&dh(t);return{c(){le(e.$$.fragment),n=R(),r=I("div"),s=I("h2"),s.textContent="Register",i=R(),x&&x.c(),o=R(),a=I("form"),c=I("label"),c.textContent="Username:",l=R(),u=I("input"),h=R(),d=I("label"),d.textContent="Email:",p=R(),m=I("input"),g=R(),v=I("label"),v.textContent="Password:",A=R(),_=I("input"),E=R(),P=I("label"),P.textContent="Confirm Password:",q=R(),C=I("input"),V=R(),O=I("button"),O.textContent="Register",b=R(),z=I("h4"),z.innerHTML='Already a user? <a href="/login">Login</a>',y(s,"class","svelte-17g9khx"),y(c,"for","username"),y(c,"class","svelte-17g9khx"),y(u,"type","text"),y(u,"id","username"),u.required=!0,y(u,"class","svelte-17g9khx"),y(d,"for","email"),y(d,"class","svelte-17g9khx"),y(m,"type","email"),y(m,"id","email"),m.required=!0,y(m,"class","svelte-17g9khx"),y(v,"for","password"),y(v,"class","svelte-17g9khx"),y(_,"type","password"),y(_,"id","password"),_.required=!0,y(_,"class","svelte-17g9khx"),y(P,"for","confirmPassword"),y(P,"class","svelte-17g9khx"),y(C,"type","password"),y(C,"id","confirmPassword"),C.required=!0,y(C,"class","svelte-17g9khx"),y(O,"type","submit"),y(O,"class","svelte-17g9khx"),y(a,"class","svelte-17g9khx"),y(z,"class","svelte-17g9khx"),y(r,"class","container svelte-17g9khx")},m(Y,se){oe(e,Y,se),j(Y,n,se),j(Y,r,se),f(r,s),f(r,i),x&&x.m(r,null),f(r,o),f(r,a),f(a,c),f(a,l),f(a,u),pe(u,t[3]),f(a,h),f(a,d),f(a,p),f(a,m),pe(m,t[0]),f(a,g),f(a,v),f(a,A),f(a,_),pe(_,t[1]),f(a,E),f(a,P),f(a,q),f(a,C),pe(C,t[2]),f(a,V),f(a,O),f(r,b),f(r,z),G=!0,S||(X=[ne(u,"input",t[6]),ne(m,"input",t[7]),ne(_,"input",t[8]),ne(C,"input",t[9]),ne(a,"submit",Ua(t[5]))],S=!0)},p(Y,[se]){Y[4]?x?x.p(Y,se):(x=dh(Y),x.c(),x.m(r,o)):x&&(x.d(1),x=null),se&8&&u.value!==Y[3]&&pe(u,Y[3]),se&1&&m.value!==Y[0]&&pe(m,Y[0]),se&2&&_.value!==Y[1]&&pe(_,Y[1]),se&4&&C.value!==Y[2]&&pe(C,Y[2])},i(Y){G||(N(e.$$.fragment,Y),G=!0)},o(Y){M(e.$$.fragment,Y),G=!1},d(Y){Y&&(F(n),F(r)),ae(e,Y),x&&x.d(),S=!1,We(X)}}}function Gb(t,e,n){const r=mt(Vs);let s="",i="",o="",a="",c="";Ct(()=>{n(4,c="")});function l(){Be("/account")}const u=async()=>{try{if(i!==o){n(4,c="Passwords do not match. Please try again.");return}const g=await Hy(r,s,i);await Gy(g.user,{displayName:a}),console.log("User registered successfully!"),l()}catch(g){n(4,c="Error registering user. Please try again."),console.error("Error registering user:",g.message)}};function h(){a=this.value,n(3,a)}function d(){s=this.value,n(0,s)}function p(){i=this.value,n(1,i)}function m(){o=this.value,n(2,o)}return[s,i,o,a,c,u,h,d,p,m]}class Qb extends Te{constructor(e){super(),Ee(this,e,Gb,Kb,ge,{})}}function Yb(t){let e;return{c(){e=I("p"),e.textContent="Loading...",y(e,"class","svelte-11dvkal")},m(n,r){j(n,e,r)},p:B,d(n){n&&F(e)}}}function Jb(t){let e,n,r,s,i=t[0].displayName+"",o,a,c,l,u=t[0].email+"",h,d,p,m,g=t[1]?"Yes":"No",v,A,_,E,P,q,C,V;return{c(){e=I("div"),n=I("div"),r=I("p"),s=L("User Name: "),o=L(i),a=R(),c=I("p"),l=L("Email: "),h=L(u),d=R(),p=I("p"),m=L("Premium Member: "),v=L(g),A=R(),_=I("div"),E=I("button"),E.textContent="My Bookings",P=R(),q=I("button"),q.textContent="Logout",y(r,"class","svelte-11dvkal"),y(c,"class","svelte-11dvkal"),y(p,"class","svelte-11dvkal"),y(n,"class","wrapper aic jcs svelte-11dvkal"),y(e,"class","info-container flex aic jcc"),y(E,"class","svelte-11dvkal"),cr(q,"background-color","firebrick"),y(q,"class","svelte-11dvkal"),y(_,"class","div flex aic jcc")},m(O,b){j(O,e,b),f(e,n),f(n,r),f(r,s),f(r,o),f(n,a),f(n,c),f(c,l),f(c,h),f(n,d),f(n,p),f(p,m),f(p,v),j(O,A,b),j(O,_,b),f(_,E),f(_,P),f(_,q),C||(V=[ne(E,"click",t[3]),ne(q,"click",t[2])],C=!0)},p(O,b){b&1&&i!==(i=O[0].displayName+"")&&ie(o,i),b&1&&u!==(u=O[0].email+"")&&ie(h,u),b&2&&g!==(g=O[1]?"Yes":"No")&&ie(v,g)},d(O){O&&(F(e),F(A),F(_)),C=!1,We(V)}}}function Xb(t){let e,n,r,s,i,o,a;n=new jn({});function c(h,d){return h[0]?Jb:Yb}let l=c(t),u=l(t);return{c(){e=I("main"),le(n.$$.fragment),r=R(),s=I("div"),i=I("h2"),i.textContent="My Account",o=R(),u.c(),y(i,"class","svelte-11dvkal"),y(s,"class","container flex fdc aic svelte-11dvkal"),y(e,"class","flex aic fdr jcc svelte-11dvkal")},m(h,d){j(h,e,d),oe(n,e,null),f(e,r),f(e,s),f(s,i),f(s,o),u.m(s,null),a=!0},p(h,[d]){l===(l=c(h))&&u?u.p(h,d):(u.d(1),u=l(h),u&&(u.c(),u.m(s,null)))},i(h){a||(N(n.$$.fragment,h),a=!0)},o(h){M(n.$$.fragment,h),a=!1},d(h){h&&F(e),ae(n),u.d()}}}function Zb(t,e,n){let r=null,s=!1,i="";const o=mt(Vs);async function a(u){const h=jt(qt,"premiumUsers",u),d=await yr(h);return d.exists()?(console.log("Premium OK! Document data:",d.data()),!0):(console.log("No such document!"),!1)}Ct(()=>{const u=_s(o,async h=>{if(!h){Be("/login");return}if(n(0,r=h),r){i=r.uid,n(1,s=await a(i));const d=rm(),p=jt(d,"users",i);try{const m=await yr(p);if(m.exists()){const g=m.data();n(1,s=g.isPremium||!1)}else console.error("User document does not exist")}catch(m){console.error("Error retrieving user data:",m.message)}}else console.error("User not authenticated")});return()=>u()});const c=async()=>{try{await Jy(o),Be("/login")}catch(u){console.error("Error logging out:",u.message)}};function l(){Be("/my-bookings")}return[r,s,c,l]}class eR extends Te{constructor(e){super(),Ee(this,e,Zb,Xb,ge,{})}}function tR(t){let e;return{c(){e=I("button"),e.textContent="Loading...",e.disabled=!0,y(e,"class","svelte-167vb6u")},m(n,r){j(n,e,r)},p:B,d(n){n&&F(e)}}}function nR(t){let e,n,r;return{c(){e=I("button"),e.textContent="Book Now",y(e,"class","svelte-167vb6u")},m(s,i){j(s,e,i),n||(r=ne(e,"click",t[10]),n=!0)},p:B,d(s){s&&F(e),n=!1,r()}}}function rR(t){let e,n,r,s,i,o,a,c,l,u,h,d,p,m,g,v,A,_,E,P,q,C=Mt(t[3])+"",V,O,b,z,G=Mt(t[4])+"",S,X,x,Y,se=Mt(t[5])+"",ke,yt,vt,st,ht,dt,it,ot,fe,Qt,Ke,It,Ie,we,Yt=t[12](t[7],t[6])+"",qn,Ge,_e,zn,Hn,Wn,rl,ft,fo,sl;r=new jn({});function il(he,Xe){return he[9]?tR:nR}let Os=il(t),wt=Os(t);return{c(){e=I("main"),n=I("div"),le(r.$$.fragment),s=R(),i=I("div"),o=I("h2"),o.textContent="Bus Details",a=R(),c=I("p"),l=L("Bus Name: "),u=L(t[0]),h=R(),d=I("p"),p=L("Source: "),m=L(t[1]),g=R(),v=I("p"),A=L("Destination: "),_=L(t[2]),E=R(),P=I("p"),q=L("Source Time: "),V=L(C),O=R(),b=I("p"),z=L("Destination Time: "),S=L(G),X=R(),x=I("p"),Y=L("Journey Time: "),ke=L(se),yt=R(),vt=I("h2"),vt.textContent="Booking Information",st=R(),ht=I("p"),ht.textContent=`User Name: ${mt().currentUser.displayName}`,dt=R(),it=I("label"),it.textContent="Number of Tickets:",ot=R(),fe=I("input"),Qt=R(),Ke=I("label"),Ke.textContent="Payment Option:",It=R(),Ie=I("p"),we=L("Total Cost: ₹"),qn=L(Yt),Ge=R(),_e=I("select"),zn=I("option"),zn.textContent="Credit Card",Hn=I("option"),Hn.textContent="Debit Card",Wn=I("option"),Wn.textContent="UPI",rl=R(),wt.c(),y(o,"class","svelte-167vb6u"),y(vt,"class","svelte-167vb6u"),y(it,"for","tickets"),y(it,"class","svelte-167vb6u"),y(fe,"type","number"),y(fe,"id","tickets"),y(fe,"min","1"),y(fe,"max","6"),y(fe,"class","svelte-167vb6u"),y(Ke,"for","payment"),y(Ke,"class","svelte-167vb6u"),zn.__value="credit_card",pe(zn,zn.__value),Hn.__value="debit_card",pe(Hn,Hn.__value),Wn.__value="upi",pe(Wn,Wn.__value),y(_e,"id","payment"),y(_e,"class","svelte-167vb6u"),t[8]===void 0&&kn(()=>t[14].call(_e)),y(i,"class","booking-container svelte-167vb6u"),y(n,"class","container svelte-167vb6u")},m(he,Xe){j(he,e,Xe),f(e,n),oe(r,n,null),f(n,s),f(n,i),f(i,o),f(i,a),f(i,c),f(c,l),f(c,u),f(i,h),f(i,d),f(d,p),f(d,m),f(i,g),f(i,v),f(v,A),f(v,_),f(i,E),f(i,P),f(P,q),f(P,V),f(i,O),f(i,b),f(b,z),f(b,S),f(i,X),f(i,x),f(x,Y),f(x,ke),f(i,yt),f(i,vt),f(i,st),f(i,ht),f(i,dt),f(i,it),f(i,ot),f(i,fe),pe(fe,t[7]),f(i,Qt),f(i,Ke),f(i,It),f(i,Ie),f(Ie,we),f(Ie,qn),f(i,Ge),f(i,_e),f(_e,zn),f(_e,Hn),f(_e,Wn),cl(_e,t[8],!0),f(i,rl),wt.m(i,null),ft=!0,fo||(sl=[ne(fe,"input",t[13]),ne(fe,"change",t[11]),ne(_e,"change",t[14])],fo=!0)},p(he,[Xe]){(!ft||Xe&1)&&ie(u,he[0]),(!ft||Xe&2)&&ie(m,he[1]),(!ft||Xe&4)&&ie(_,he[2]),(!ft||Xe&8)&&C!==(C=Mt(he[3])+"")&&ie(V,C),(!ft||Xe&16)&&G!==(G=Mt(he[4])+"")&&ie(S,G),(!ft||Xe&32)&&se!==(se=Mt(he[5])+"")&&ie(ke,se),Xe&128&&bh(fe.value)!==he[7]&&pe(fe,he[7]),(!ft||Xe&192)&&Yt!==(Yt=he[12](he[7],he[6])+"")&&ie(qn,Yt),Xe&256&&cl(_e,he[8]),Os===(Os=il(he))&&wt?wt.p(he,Xe):(wt.d(1),wt=Os(he),wt&&(wt.c(),wt.m(i,null)))},i(he){ft||(N(r.$$.fragment,he),ft=!0)},o(he){M(r.$$.fragment,he),ft=!1},d(he){he&&F(e),ae(r),wt.d(),fo=!1,We(sl)}}}function Mt(t){const e=parseInt(Math.floor(t/1440).toFixed(0)),n=Math.round(t%60).toLocaleString("en-US",{minimumIntegerDigits:2});return e>0?`${Math.floor((t-e*1440)/60)}:${n} + ${e}day(s)`:`${Math.floor(t/60)}:${n}`}function sR(t,e,n){let r,s,i,o,a,c,l,u,h,d="",p="",m=1,g="credit_card",v=!1,A;Pd("pk_test_51OQqOjSEuj1HRmQX8Ce2BE1cQCxyZgBbsdl4JvwvJ76BcOpj8qjgyGReK2jrDcPPtkTiBG4UM8xoU8VaLlF7z19A00y40YX77m").then(S=>(h=S,h.elements(),h)),Ct(()=>{const S=mt().currentUser;return S?(A=S.uid,console.log("User UID:",A)):console.log("No user is currently signed in."),console.log("Current User: "+S),S||Be("/login"),_(),Im.subscribe(x=>{console.log("BusToBook in Booking Page:",x),u=x,n(0,r=x.companyName),n(1,s=x.source),n(2,i=x.destination),x.distance,n(4,a=x.destinationTime),n(3,o=x.sourceTime),x.journeyDate,n(5,c=x.journeyTime),u.journeyTime=c,n(6,l=x.totalFare),u.destinationTime=Mt(x.destinationTime),u.sourceTime=Mt(x.sourceTime),u.journeyTime=Mt(x.journeyTime)})});const _=_s(mt(),async S=>{console.log("Usr id func"),S?(d=S.uid,S.email,p=S.displayName,console.log(p)):(d=null,Be("/login"))});async function E(){try{const S=await fetch("http://localhost:3001/api/stripe/create-payment-intent",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:d,amount:Math.round(C(m,l)*100),currency:"inr"})});if(console.log(S),!S.ok){const se=await S.json();throw console.error("Server error response:",se),new Error(`Payment failed with status: ${S.status}`)}const X=await S.json(),{paymentIntent:x,error:Y}=await h.confirmCardPayment(X.clientSecret,{payment_method:X.paymentMethodId});console.log("Payment confirmed:",x)}catch(S){console.error("Error during payment:",S.message)}}async function P(){n(9,v=!0),console.log("Booking user: "+A),console.log("Booking details:",{busDetails:u,numberOfTickets:m,selectedPaymentOption:g}),await E(),await O("bookings",A),alert("Booking Successful!"),n(9,v=!1),Be("/my-bookings")}function q(){m<1?(alert("Number of Tickets can't be empty!"),n(7,m=1)):m>6&&(alert("You Can Book only upto 6 tickets!"),n(7,m=6))}let C=(S,X)=>S*X;async function V(){const X=new Date().toLocaleString("en-US",{timeZone:"Asia/Kolkata"}).split(", ").join("T"),x={[X]:{dateOfBooking:X,numberOfTickets:m,busDetails:u}},Y=jt(qt,"bookings",A);try{await mm(Y,x,{merge:!0}),console.log("Document successfully added or updated!")}catch(se){console.error("Error adding or updating document: ",se)}}async function O(S,X){const x=jt(qt,S,X),Y=new Date,se={dateOfBooking:new Date().toLocaleString("en-US",{timeZone:"Asia/Kolkata"}).split(", ").join("T"),numberOfTickets:m,busDetails:u,newField:Y};try{const ke=await yr(x);ke.exists()?(console.log("Document exists:",ke.data()),b("bookings",A,Y,se)):(console.log("Document does not exist."),await V())}catch(ke){console.error("Error checking document existence:",ke)}}async function b(S,X,x,Y){const se=jt(qt,S,X);try{await ZA(se,{[x]:Y}),console.log("Field added to the document successfully!")}catch(ke){console.error("Error adding field to the document:",ke)}}function z(){m=bh(this.value),n(7,m)}function G(){g=km(this),n(8,g)}return[r,s,i,o,a,c,l,m,g,v,P,q,C,z,G]}class iR extends Te{constructor(e){super(),Ee(this,e,sR,rR,ge,{})}}function oR(t){let e,n,r=t[0].busDetails.companyName+"",s,i,o,a,c=t[0].busDetails.source+"",l,u,h,d,p=t[0].busDetails.destination+"",m,g,v,A,_=t[0].busDetails.journeyDate+"",E,P,q,C,V=t[0].busDetails.sourceTime+"",O,b,z,G,S=t[0].busDetails.journeyTime+"",X,x,Y,se,ke=t[0].busDetails.totalFare+"",yt,vt,st,ht,dt=t[0].numberOfTickets+"",it,ot,fe,Qt,Ke=t[0].dateOfBooking+"",It;return{c(){e=I("div"),n=I("h2"),s=L(r),i=R(),o=I("p"),a=L("Source: "),l=L(c),u=R(),h=I("p"),d=L("Destination: "),m=L(p),g=R(),v=I("p"),A=L("Journey Date: "),E=L(_),P=R(),q=I("p"),C=L("Source Time: "),O=L(V),b=R(),z=I("p"),G=L("Journey Time: "),X=L(S),x=R(),Y=I("p"),se=L("Total Fare: ₹"),yt=L(ke),vt=R(),st=I("p"),ht=L("Number of Tickets: "),it=L(dt),ot=R(),fe=I("p"),Qt=L("Date of Booking: "),It=L(Ke),y(n,"class","svelte-1yu73wk"),y(e,"class","booking-card svelte-1yu73wk")},m(Ie,we){j(Ie,e,we),f(e,n),f(n,s),f(e,i),f(e,o),f(o,a),f(o,l),f(e,u),f(e,h),f(h,d),f(h,m),f(e,g),f(e,v),f(v,A),f(v,E),f(e,P),f(e,q),f(q,C),f(q,O),f(e,b),f(e,z),f(z,G),f(z,X),f(e,x),f(e,Y),f(Y,se),f(Y,yt),f(e,vt),f(e,st),f(st,ht),f(st,it),f(e,ot),f(e,fe),f(fe,Qt),f(fe,It)},p(Ie,[we]){we&1&&r!==(r=Ie[0].busDetails.companyName+"")&&ie(s,r),we&1&&c!==(c=Ie[0].busDetails.source+"")&&ie(l,c),we&1&&p!==(p=Ie[0].busDetails.destination+"")&&ie(m,p),we&1&&_!==(_=Ie[0].busDetails.journeyDate+"")&&ie(E,_),we&1&&V!==(V=Ie[0].busDetails.sourceTime+"")&&ie(O,V),we&1&&S!==(S=Ie[0].busDetails.journeyTime+"")&&ie(X,S),we&1&&ke!==(ke=Ie[0].busDetails.totalFare+"")&&ie(yt,ke),we&1&&dt!==(dt=Ie[0].numberOfTickets+"")&&ie(it,dt),we&1&&Ke!==(Ke=Ie[0].dateOfBooking+"")&&ie(It,Ke)},i:B,o:B,d(Ie){Ie&&F(e)}}}function aR(t,e,n){let{booking:r}=e;return t.$$set=s=>{"booking"in s&&n(0,r=s.booking)},[r]}class cR extends Te{constructor(e){super(),Ee(this,e,aR,oR,ge,{booking:0})}}function fh(t,e,n){const r=t.slice();return r[4]=e[n],r}function ph(t,e){let n,r,s;return r=new cR({props:{booking:e[4]}}),{key:t,first:null,c(){n=Ot(),le(r.$$.fragment),this.first=n},m(i,o){j(i,n,o),oe(r,i,o),s=!0},p(i,o){e=i;const a={};o&1&&(a.booking=e[4]),r.$set(a)},i(i){s||(N(r.$$.fragment,i),s=!0)},o(i){M(r.$$.fragment,i),s=!1},d(i){i&&F(n),ae(r,i)}}}function lR(t){let e,n,r,s,i,o,a=[],c=new Map,l;n=new jn({});let u=ln(t[0]);const h=d=>d[4].dateOfBooking;for(let d=0;d<u.length;d+=1){let p=fh(t,u,d),m=h(p);c.set(m,a[d]=ph(m,p))}return{c(){e=I("main"),le(n.$$.fragment),r=R(),s=I("h1"),s.textContent="My Bookings",i=R(),o=I("div");for(let d=0;d<a.length;d+=1)a[d].c();y(s,"class","svelte-8g8rpu"),y(o,"class","container svelte-8g8rpu"),y(e,"class","svelte-8g8rpu")},m(d,p){j(d,e,p),oe(n,e,null),f(e,r),f(e,s),f(e,i),f(e,o);for(let m=0;m<a.length;m+=1)a[m]&&a[m].m(o,null);l=!0},p(d,[p]){p&1&&(u=ln(d[0]),nt(),a=Ch(a,p,h,1,d,u,c,o,Ph,ph,null,fh),rt())},i(d){if(!l){N(n.$$.fragment,d);for(let p=0;p<u.length;p+=1)N(a[p]);l=!0}},o(d){M(n.$$.fragment,d);for(let p=0;p<a.length;p+=1)M(a[p]);l=!1},d(d){d&&F(e),ae(n);for(let p=0;p<a.length;p+=1)a[p].d()}}}function uR(t,e,n){let r,s="",i=Ft([]);tn(t,i,a=>n(0,r=a)),Ct(()=>{console.log("Page: My bookings");const a=_s(mt(),async c=>{c?(s=c.uid,console.log("User UID:",s),await o("bookings",s)):(console.log("No user is currently signed in."),Be("/login")),a()})});async function o(a,c){const l=jt(qt,a,c);try{const u=await yr(l);if(u.exists()){const h=u.data(),d=Object.keys(h);console.log("Document exists:",h),console.log("All fields:",d),i.set(Object.values(h))}else console.log("Document does not exist.")}catch(u){console.error("Error checking document existence:",u)}}return[r,i]}class hR extends Te{constructor(e){super(),Ee(this,e,uR,lR,ge,{})}}function dR(t){let e,n,r,s,i,o,a,c,l,u,h,d,p,m;return e=new yn({props:{path:"/",component:Ob}}),r=new yn({props:{path:"/search-results",component:jb}}),i=new yn({props:{path:"/login",component:Wb}}),a=new yn({props:{path:"/register",component:Qb}}),l=new yn({props:{path:"/account",component:eR}}),h=new yn({props:{path:"/booking-page",component:iR}}),p=new yn({props:{path:"/my-bookings",component:hR}}),{c(){le(e.$$.fragment),n=R(),le(r.$$.fragment),s=R(),le(i.$$.fragment),o=R(),le(a.$$.fragment),c=R(),le(l.$$.fragment),u=R(),le(h.$$.fragment),d=R(),le(p.$$.fragment)},m(g,v){oe(e,g,v),j(g,n,v),oe(r,g,v),j(g,s,v),oe(i,g,v),j(g,o,v),oe(a,g,v),j(g,c,v),oe(l,g,v),j(g,u,v),oe(h,g,v),j(g,d,v),oe(p,g,v),m=!0},p:B,i(g){m||(N(e.$$.fragment,g),N(r.$$.fragment,g),N(i.$$.fragment,g),N(a.$$.fragment,g),N(l.$$.fragment,g),N(h.$$.fragment,g),N(p.$$.fragment,g),m=!0)},o(g){M(e.$$.fragment,g),M(r.$$.fragment,g),M(i.$$.fragment,g),M(a.$$.fragment,g),M(l.$$.fragment,g),M(h.$$.fragment,g),M(p.$$.fragment,g),m=!1},d(g){g&&(F(n),F(s),F(o),F(c),F(u),F(d)),ae(e,g),ae(r,g),ae(i,g),ae(a,g),ae(l,g),ae(h,g),ae(p,g)}}}function fR(t){let e,n;return e=new mg({props:{$$slots:{default:[dR]},$$scope:{ctx:t}}}),{c(){le(e.$$.fragment)},m(r,s){oe(e,r,s),n=!0},p(r,[s]){const i={};s&1&&(i.$$scope={dirty:s,ctx:r}),e.$set(i)},i(r){n||(N(e.$$.fragment,r),n=!0)},o(r){M(e.$$.fragment,r),n=!1},d(r){ae(e,r)}}}class pR extends Te{constructor(e){super(),Ee(this,e,null,fR,ge,{})}}const mR=qa(_m);mt(mR);new pR({target:document.getElementById("app")});
