import{r as t,d as i,h as a,g as e}from"./p-c001178f.js";import{s}from"./p-7ebf1169.js";var h=function(t,i,a,e,s,h){h||(h={});for(var n=void 0===h.threshold?.1:h.threshold,c=35215*n*n,g=0,f=0;f<s;f++)for(var u=0;u<e;u++){var p=4*(f*e+u);if(l(t,i,p,p)>c)h.includeAA||!r(t,u,f,e,s,i)&&!r(i,u,f,e,s,t)?(a&&m(a,p,255,0,0),g++):a&&m(a,p,255,255,0);else if(a){var v=o((void 0,void 0,void 0,void 0,d(o((A=t)[(I=p)+0],w=A[I+3]/255),o(A[I+1],w),o(A[I+2],w))),.1);m(a,p,v,v,v)}}var A,I,w;return g};function r(t,i,a,e,s,h){for(var d,n,c,o,m=Math.max(i-1,0),g=Math.max(a-1,0),f=Math.min(i+1,e-1),u=Math.min(a+1,s-1),p=4*(a*e+i),v=0,A=0,I=0,w=0,B=0,C=m;C<=f;C++)for(var S=g;S<=u;S++)if(C!==i||S!==a){var L=l(t,t,p,4*(S*e+C),!0);if(0===L?v++:L<0?I++:L>0&&A++,v>2)return!1;h&&(L<w&&(w=L,d=C,n=S),L>B&&(B=L,c=C,o=S))}return!h||0!==I&&0!==A&&(!r(t,d,n,e,s)&&!r(h,d,n,e,s)||!r(t,c,o,e,s)&&!r(h,c,o,e,s))}function l(t,i,a,e,s){var h=t[a+3]/255,r=i[e+3]/255,l=o(t[a+0],h),m=o(t[a+1],h),g=o(t[a+2],h),f=o(i[e+0],r),u=o(i[e+1],r),p=o(i[e+2],r),v=d(l,m,g)-d(f,u,p);if(s)return v;var A=n(l,m,g)-n(f,u,p),I=c(l,m,g)-c(f,u,p);return.5053*v*v+.299*A*A+.1957*I*I}function d(t,i,a){return.29889531*t+.58662247*i+.11448223*a}function n(t,i,a){return.59597799*t-.2741761*i-.32180189*a}function c(t,i,a){return.21147017*t-.52261711*i+.31114694*a}function o(t,i){return 255+(t-255)*i}function m(t,i,a,e,s){t[i+0]=a,t[i+1]=e,t[i+2]=s,t[i+3]=255}function g(t,i,a){if(u.has(i))return void a(u.get(i));if(f.has(i))return void f.get(i).push(a);f.set(i,[a]);const e=document.createElement("script");e.src=`${t}screenshot_${i}.js`,document.head.appendChild(e)}window.loadScreenshot=(t,i)=>{const a=f.get(t);a&&(a.forEach(t=>t(i)),f.delete(t)),u.set(t,i)};const f=new Map,u=new Map;class p{constructor(a){t(this,a),this.imageASrc=null,this.imageBSrc=null,this.imageAClass="is-loading",this.imageBClass="is-loading",this.canvasClass="is-loading",this.imagesLoaded=new Set,this.isImageALoaded=!1,this.isImageBLoaded=!1,this.isMismatchInitialized=!1,this.hasCalculatedMismatch=!1,this.compareLoaded=i(this,"compareLoaded",7)}componentWillLoad(){this.loadScreenshots()}componentWillUpdate(){this.loadScreenshots()}loadScreenshots(){if(this.show&&this.diff.hasIntersected)return this.diff.identical?(this.imageASrc=this.imagesUrl+this.diff.imageA,this.isImageALoaded=!0,this.imageAClass="has-loaded",this.imageBSrc=this.imagesUrl+this.diff.imageB,this.isImageBLoaded=!0,void(this.imageBClass="has-loaded")):void(this.isMismatchInitialized||(this.isMismatchInitialized=!0,null!=this.jsonpUrl?(null!=this.diff.imageA&&g(this.jsonpUrl,this.diff.imageA,t=>{this.imageASrc=t}),null!=this.diff.imageB&&g(this.jsonpUrl,this.diff.imageB,t=>{this.imageBSrc=t})):(this.imageASrc=this.imagesUrl+this.diff.imageA,this.imageBSrc=this.imagesUrl+this.diff.imageB)))}async compareImages(){const t=this.diff;this.isImageALoaded&&this.isImageBLoaded&&!this.hasCalculatedMismatch&&t.comparable&&(this.hasCalculatedMismatch=!0,t.mismatchedPixels=await function(t,i,a,e,s,r){let l=-1;try{const d=document.createElement("canvas");d.width=e,d.height=s;const n=document.createElement("canvas");n.width=e,n.height=s;const c=d.getContext("2d");c.drawImage(t,0,0);const o=n.getContext("2d");o.drawImage(i,0,0);const m=document.createElement("canvas").getContext("2d");m.drawImage(t,0,0),m.getImageData(0,0,e,s);const g=c.getImageData(0,0,e,s).data,f=o.getImageData(0,0,e,s).data,u=a.getContext("2d"),p=u.createImageData(e,d.height);l=h(g,f,p.data,e,s,{threshold:r}),u.putImageData(p,0,0)}catch(t){console.error(t)}return l}(this.imageA,this.imageB,this.canvas,Math.round(t.width*t.deviceScaleFactor),Math.round(t.height*t.deviceScaleFactor),t.threshold),this.canvasClass="has-loaded",s(t.imageA,t.imageB,t.mismatchedPixels,t.threshold),this.compareLoaded.emit(t))}render(){const t=this.diff,i={width:t.width+"px",height:t.height+"px"};return[a("compare-cell",null,null!=t.imageA?a("a",{href:this.imagesUrl+t.imageA,target:"_blank"},a("img",{src:this.imageASrc,class:this.imageAClass,style:i,onLoad:this.diff.identical?null:()=>{this.isImageALoaded=!0,this.imageAClass="has-loaded",this.compareImages()},ref:t=>this.imageA=t})):a("img",{style:i,class:"is-loading"})),a("compare-cell",null,null!=t.imageB?a("a",{href:this.imagesUrl+t.imageB,target:"_blank"},a("img",{src:this.imageBSrc,class:this.imageBClass,style:i,onLoad:this.diff.identical?null:()=>{this.isImageBLoaded=!0,this.imageBClass="has-loaded",this.compareImages()},ref:t=>this.imageB=t})):a("img",{style:i,class:"is-loading"})),a("compare-cell",null,this.diff.identical?a("img",{style:i,src:this.imageASrc}):a("canvas",{width:Math.round(t.width*t.deviceScaleFactor),height:Math.round(t.height*t.deviceScaleFactor),class:this.canvasClass,style:i,hidden:!t.comparable,ref:t=>this.canvas=t})),a("compare-cell",null,a("compare-analysis",{aId:this.aId,bId:this.bId,mismatchedPixels:this.diff.mismatchedPixels,diff:this.diff}))]}get elm(){return e(this)}static get style(){return"compare-row canvas,compare-row img{display:block;-webkit-box-shadow:var(--screenshot-box-shadow);box-shadow:var(--screenshot-box-shadow);border-radius:var(--screenshot-border-radius)}compare-row a{display:block}.is-loading{visibility:hidden}"}}class v{constructor(i){t(this,i)}render(){if(!this.a||!this.b||!this.diffs)return;let t=0;this.diffs.forEach(i=>{i.width>t&&(t=i.width)});const i={width:(t-=6)+"px"};return[a("th-cell",null,a("div",{style:i},a("a",{href:this.a.url,target:"_blank"},this.a.message))),a("th-cell",null,a("div",{style:i},a("a",{href:this.b.url,target:"_blank"},this.b.message))),a("th-cell",null,a("div",{style:i},a("a",{href:`https://github.com/ionic-team/ionic/compare/${this.a.id}...${this.b.id}`,target:"_blank"},"Compare: ",this.a.id," - ",this.b.id))),a("th-cell",{class:"analysis"},a("div",null,"Analysis"))]}static get style(){return":host{display:-ms-flexbox;display:flex}th-cell{display:block;-ms-flex:1;flex:1;font-weight:500;font-size:12px}th-cell div{padding-left:12px;padding-right:12px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}th-cell a{color:var(--font-color);text-decoration:none}th-cell a:hover{color:var(--analysis-data-color);text-decoration:underline}.analysis div{width:262px}"}}export{p as compare_row,v as compare_thead};