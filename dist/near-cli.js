var Xe=Object.defineProperty;var Ze=(st,J,q)=>J in st?Xe(st,J,{enumerable:!0,configurable:!0,writable:!0,value:q}):st[J]=q;var at=(st,J,q)=>Ze(st,typeof J!="symbol"?J+"":J,q);(function(){"use strict";var st={},J={};J.byteLength=pe,J.toByteArray=fe,J.fromByteArray=we;for(var q=[],V=[],le=typeof Uint8Array<"u"?Uint8Array:Array,Nt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",wt=0,he=Nt.length;wt<he;++wt)q[wt]=Nt[wt],V[Nt.charCodeAt(wt)]=wt;V[45]=62,V[95]=63;function zt(o){var i=o.length;if(i%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var c=o.indexOf("=");c===-1&&(c=i);var p=c===i?0:4-c%4;return[c,p]}function pe(o){var i=zt(o),c=i[0],p=i[1];return(c+p)*3/4-p}function de(o,i,c){return(i+c)*3/4-c}function fe(o){var i,c=zt(o),p=c[0],l=c[1],h=new le(de(o,p,l)),f=0,y=l>0?p-4:p,g;for(g=0;g<y;g+=4)i=V[o.charCodeAt(g)]<<18|V[o.charCodeAt(g+1)]<<12|V[o.charCodeAt(g+2)]<<6|V[o.charCodeAt(g+3)],h[f++]=i>>16&255,h[f++]=i>>8&255,h[f++]=i&255;return l===2&&(i=V[o.charCodeAt(g)]<<2|V[o.charCodeAt(g+1)]>>4,h[f++]=i&255),l===1&&(i=V[o.charCodeAt(g)]<<10|V[o.charCodeAt(g+1)]<<4|V[o.charCodeAt(g+2)]>>2,h[f++]=i>>8&255,h[f++]=i&255),h}function ge(o){return q[o>>18&63]+q[o>>12&63]+q[o>>6&63]+q[o&63]}function ye(o,i,c){for(var p,l=[],h=i;h<c;h+=3)p=(o[h]<<16&16711680)+(o[h+1]<<8&65280)+(o[h+2]&255),l.push(ge(p));return l.join("")}function we(o){for(var i,c=o.length,p=c%3,l=[],h=16383,f=0,y=c-p;f<y;f+=h)l.push(ye(o,f,f+h>y?y:f+h));return p===1?(i=o[c-1],l.push(q[i>>2]+q[i<<4&63]+"==")):p===2&&(i=(o[c-2]<<8)+o[c-1],l.push(q[i>>10]+q[i>>4&63]+q[i<<2&63]+"=")),l.join("")}var Pt={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */Pt.read=function(o,i,c,p,l){var h,f,y=l*8-p-1,g=(1<<y)-1,m=g>>1,s=-7,$=c?l-1:0,R=c?-1:1,k=o[i+$];for($+=R,h=k&(1<<-s)-1,k>>=-s,s+=y;s>0;h=h*256+o[i+$],$+=R,s-=8);for(f=h&(1<<-s)-1,h>>=-s,s+=p;s>0;f=f*256+o[i+$],$+=R,s-=8);if(h===0)h=1-m;else{if(h===g)return f?NaN:(k?-1:1)*(1/0);f=f+Math.pow(2,p),h=h-m}return(k?-1:1)*f*Math.pow(2,h-p)},Pt.write=function(o,i,c,p,l,h){var f,y,g,m=h*8-l-1,s=(1<<m)-1,$=s>>1,R=l===23?Math.pow(2,-24)-Math.pow(2,-77):0,k=p?0:h-1,D=p?1:-1,X=i<0||i===0&&1/i<0?1:0;for(i=Math.abs(i),isNaN(i)||i===1/0?(y=isNaN(i)?1:0,f=s):(f=Math.floor(Math.log(i)/Math.LN2),i*(g=Math.pow(2,-f))<1&&(f--,g*=2),f+$>=1?i+=R/g:i+=R*Math.pow(2,1-$),i*g>=2&&(f++,g/=2),f+$>=s?(y=0,f=s):f+$>=1?(y=(i*g-1)*Math.pow(2,l),f=f+$):(y=i*Math.pow(2,$-1)*Math.pow(2,l),f=0));l>=8;o[c+k]=y&255,k+=D,y/=256,l-=8);for(f=f<<l|y,m+=l;m>0;o[c+k]=f&255,k+=D,f/=256,m-=8);o[c+k-D]|=X*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(o){const i=J,c=Pt,p=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;o.Buffer=s,o.SlowBuffer=Bt,o.INSPECT_MAX_BYTES=50;const l=2147483647;o.kMaxLength=l;const{Uint8Array:h,ArrayBuffer:f,SharedArrayBuffer:y}=globalThis;s.TYPED_ARRAY_SUPPORT=g(),!s.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function g(){try{const r=new h(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,h.prototype),Object.setPrototypeOf(r,t),r.foo()===42}catch{return!1}}Object.defineProperty(s.prototype,"parent",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.buffer}}),Object.defineProperty(s.prototype,"offset",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.byteOffset}});function m(r){if(r>l)throw new RangeError('The value "'+r+'" is invalid for option "size"');const t=new h(r);return Object.setPrototypeOf(t,s.prototype),t}function s(r,t,e){if(typeof r=="number"){if(typeof t=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return D(r)}return $(r,t,e)}s.poolSize=8192;function $(r,t,e){if(typeof r=="string")return X(r,t);if(f.isView(r))return mt(r);if(r==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r);if(it(r,f)||r&&it(r.buffer,f)||typeof y<"u"&&(it(r,y)||r&&it(r.buffer,y)))return et(r,t,e);if(typeof r=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const n=r.valueOf&&r.valueOf();if(n!=null&&n!==r)return s.from(n,t,e);const a=xt(r);if(a)return a;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof r[Symbol.toPrimitive]=="function")return s.from(r[Symbol.toPrimitive]("string"),t,e);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}s.from=function(r,t,e){return $(r,t,e)},Object.setPrototypeOf(s.prototype,h.prototype),Object.setPrototypeOf(s,h);function R(r){if(typeof r!="number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is invalid for option "size"')}function k(r,t,e){return R(r),r<=0?m(r):t!==void 0?typeof e=="string"?m(r).fill(t,e):m(r).fill(t):m(r)}s.alloc=function(r,t,e){return k(r,t,e)};function D(r){return R(r),m(r<0?0:ft(r)|0)}s.allocUnsafe=function(r){return D(r)},s.allocUnsafeSlow=function(r){return D(r)};function X(r,t){if((typeof t!="string"||t==="")&&(t="utf8"),!s.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const e=bt(r,t)|0;let n=m(e);const a=n.write(r,t);return a!==e&&(n=n.slice(0,a)),n}function dt(r){const t=r.length<0?0:ft(r.length)|0,e=m(t);for(let n=0;n<t;n+=1)e[n]=r[n]&255;return e}function mt(r){if(it(r,h)){const t=new h(r);return et(t.buffer,t.byteOffset,t.byteLength)}return dt(r)}function et(r,t,e){if(t<0||r.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(r.byteLength<t+(e||0))throw new RangeError('"length" is outside of buffer bounds');let n;return t===void 0&&e===void 0?n=new h(r):e===void 0?n=new h(r,t):n=new h(r,t,e),Object.setPrototypeOf(n,s.prototype),n}function xt(r){if(s.isBuffer(r)){const t=ft(r.length)|0,e=m(t);return e.length===0||r.copy(e,0,0,t),e}if(r.length!==void 0)return typeof r.length!="number"||qt(r.length)?m(0):dt(r);if(r.type==="Buffer"&&Array.isArray(r.data))return dt(r.data)}function ft(r){if(r>=l)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+l.toString(16)+" bytes");return r|0}function Bt(r){return+r!=r&&(r=0),s.alloc(+r)}s.isBuffer=function(t){return t!=null&&t._isBuffer===!0&&t!==s.prototype},s.compare=function(t,e){if(it(t,h)&&(t=s.from(t,t.offset,t.byteLength)),it(e,h)&&(e=s.from(e,e.offset,e.byteLength)),!s.isBuffer(t)||!s.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let n=t.length,a=e.length;for(let u=0,d=Math.min(n,a);u<d;++u)if(t[u]!==e[u]){n=t[u],a=e[u];break}return n<a?-1:a<n?1:0},s.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},s.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(t.length===0)return s.alloc(0);let n;if(e===void 0)for(e=0,n=0;n<t.length;++n)e+=t[n].length;const a=s.allocUnsafe(e);let u=0;for(n=0;n<t.length;++n){let d=t[n];if(it(d,h))u+d.length>a.length?(s.isBuffer(d)||(d=s.from(d)),d.copy(a,u)):h.prototype.set.call(a,d,u);else if(s.isBuffer(d))d.copy(a,u);else throw new TypeError('"list" argument must be an Array of Buffers');u+=d.length}return a};function bt(r,t){if(s.isBuffer(r))return r.length;if(f.isView(r)||it(r,f))return r.byteLength;if(typeof r!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof r);const e=r.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&e===0)return 0;let a=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":return Ht(r).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return e*2;case"hex":return e>>>1;case"base64":return ue(r).length;default:if(a)return n?-1:Ht(r).length;t=(""+t).toLowerCase(),a=!0}}s.byteLength=bt;function gt(r,t,e){let n=!1;if((t===void 0||t<0)&&(t=0),t>this.length||((e===void 0||e>this.length)&&(e=this.length),e<=0)||(e>>>=0,t>>>=0,e<=t))return"";for(r||(r="utf8");;)switch(r){case"hex":return rt(this,t,e);case"utf8":case"utf-8":return B(this,t,e);case"ascii":return N(this,t,e);case"latin1":case"binary":return P(this,t,e);case"base64":return I(this,t,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ot(this,t,e);default:if(n)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),n=!0}}s.prototype._isBuffer=!0;function G(r,t,e){const n=r[t];r[t]=r[e],r[e]=n}s.prototype.swap16=function(){const t=this.length;if(t%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)G(this,e,e+1);return this},s.prototype.swap32=function(){const t=this.length;if(t%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)G(this,e,e+3),G(this,e+1,e+2);return this},s.prototype.swap64=function(){const t=this.length;if(t%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)G(this,e,e+7),G(this,e+1,e+6),G(this,e+2,e+5),G(this,e+3,e+4);return this},s.prototype.toString=function(){const t=this.length;return t===0?"":arguments.length===0?B(this,0,t):gt.apply(this,arguments)},s.prototype.toLocaleString=s.prototype.toString,s.prototype.equals=function(t){if(!s.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t?!0:s.compare(this,t)===0},s.prototype.inspect=function(){let t="";const e=o.INSPECT_MAX_BYTES;return t=this.toString("hex",0,e).replace(/(.{2})/g,"$1 ").trim(),this.length>e&&(t+=" ... "),"<Buffer "+t+">"},p&&(s.prototype[p]=s.prototype.inspect),s.prototype.compare=function(t,e,n,a,u){if(it(t,h)&&(t=s.from(t,t.offset,t.byteLength)),!s.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(e===void 0&&(e=0),n===void 0&&(n=t?t.length:0),a===void 0&&(a=0),u===void 0&&(u=this.length),e<0||n>t.length||a<0||u>this.length)throw new RangeError("out of range index");if(a>=u&&e>=n)return 0;if(a>=u)return-1;if(e>=n)return 1;if(e>>>=0,n>>>=0,a>>>=0,u>>>=0,this===t)return 0;let d=u-a,S=n-e;const M=Math.min(d,S),C=this.slice(a,u),L=t.slice(e,n);for(let U=0;U<M;++U)if(C[U]!==L[U]){d=C[U],S=L[U];break}return d<S?-1:S<d?1:0};function K(r,t,e,n,a){if(r.length===0)return-1;if(typeof e=="string"?(n=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,qt(e)&&(e=a?0:r.length-1),e<0&&(e=r.length+e),e>=r.length){if(a)return-1;e=r.length-1}else if(e<0)if(a)e=0;else return-1;if(typeof t=="string"&&(t=s.from(t,n)),s.isBuffer(t))return t.length===0?-1:W(r,t,e,n,a);if(typeof t=="number")return t=t&255,typeof h.prototype.indexOf=="function"?a?h.prototype.indexOf.call(r,t,e):h.prototype.lastIndexOf.call(r,t,e):W(r,[t],e,n,a);throw new TypeError("val must be string, number or Buffer")}function W(r,t,e,n,a){let u=1,d=r.length,S=t.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(r.length<2||t.length<2)return-1;u=2,d/=2,S/=2,e/=2}function M(L,U){return u===1?L[U]:L.readUInt16BE(U*u)}let C;if(a){let L=-1;for(C=e;C<d;C++)if(M(r,C)===M(t,L===-1?0:C-L)){if(L===-1&&(L=C),C-L+1===S)return L*u}else L!==-1&&(C-=C-L),L=-1}else for(e+S>d&&(e=d-S),C=e;C>=0;C--){let L=!0;for(let U=0;U<S;U++)if(M(r,C+U)!==M(t,U)){L=!1;break}if(L)return C}return-1}s.prototype.includes=function(t,e,n){return this.indexOf(t,e,n)!==-1},s.prototype.indexOf=function(t,e,n){return K(this,t,e,n,!0)},s.prototype.lastIndexOf=function(t,e,n){return K(this,t,e,n,!1)};function yt(r,t,e,n){e=Number(e)||0;const a=r.length-e;n?(n=Number(n),n>a&&(n=a)):n=a;const u=t.length;n>u/2&&(n=u/2);let d;for(d=0;d<n;++d){const S=parseInt(t.substr(d*2,2),16);if(qt(S))return d;r[e+d]=S}return d}function E(r,t,e,n){return Ct(Ht(t,r.length-e),r,e,n)}function w(r,t,e,n){return Ct(We(t),r,e,n)}function x(r,t,e,n){return Ct(ue(t),r,e,n)}function b(r,t,e,n){return Ct(Je(t,r.length-e),r,e,n)}s.prototype.write=function(t,e,n,a){if(e===void 0)a="utf8",n=this.length,e=0;else if(n===void 0&&typeof e=="string")a=e,n=this.length,e=0;else if(isFinite(e))e=e>>>0,isFinite(n)?(n=n>>>0,a===void 0&&(a="utf8")):(a=n,n=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const u=this.length-e;if((n===void 0||n>u)&&(n=u),t.length>0&&(n<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");a||(a="utf8");let d=!1;for(;;)switch(a){case"hex":return yt(this,t,e,n);case"utf8":case"utf-8":return E(this,t,e,n);case"ascii":case"latin1":case"binary":return w(this,t,e,n);case"base64":return x(this,t,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return b(this,t,e,n);default:if(d)throw new TypeError("Unknown encoding: "+a);a=(""+a).toLowerCase(),d=!0}},s.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function I(r,t,e){return t===0&&e===r.length?i.fromByteArray(r):i.fromByteArray(r.slice(t,e))}function B(r,t,e){e=Math.min(r.length,e);const n=[];let a=t;for(;a<e;){const u=r[a];let d=null,S=u>239?4:u>223?3:u>191?2:1;if(a+S<=e){let M,C,L,U;switch(S){case 1:u<128&&(d=u);break;case 2:M=r[a+1],(M&192)===128&&(U=(u&31)<<6|M&63,U>127&&(d=U));break;case 3:M=r[a+1],C=r[a+2],(M&192)===128&&(C&192)===128&&(U=(u&15)<<12|(M&63)<<6|C&63,U>2047&&(U<55296||U>57343)&&(d=U));break;case 4:M=r[a+1],C=r[a+2],L=r[a+3],(M&192)===128&&(C&192)===128&&(L&192)===128&&(U=(u&15)<<18|(M&63)<<12|(C&63)<<6|L&63,U>65535&&U<1114112&&(d=U))}}d===null?(d=65533,S=1):d>65535&&(d-=65536,n.push(d>>>10&1023|55296),d=56320|d&1023),n.push(d),a+=S}return A(n)}const v=4096;function A(r){const t=r.length;if(t<=v)return String.fromCharCode.apply(String,r);let e="",n=0;for(;n<t;)e+=String.fromCharCode.apply(String,r.slice(n,n+=v));return e}function N(r,t,e){let n="";e=Math.min(r.length,e);for(let a=t;a<e;++a)n+=String.fromCharCode(r[a]&127);return n}function P(r,t,e){let n="";e=Math.min(r.length,e);for(let a=t;a<e;++a)n+=String.fromCharCode(r[a]);return n}function rt(r,t,e){const n=r.length;(!t||t<0)&&(t=0),(!e||e<0||e>n)&&(e=n);let a="";for(let u=t;u<e;++u)a+=Ve[r[u]];return a}function ot(r,t,e){const n=r.slice(t,e);let a="";for(let u=0;u<n.length-1;u+=2)a+=String.fromCharCode(n[u]+n[u+1]*256);return a}s.prototype.slice=function(t,e){const n=this.length;t=~~t,e=e===void 0?n:~~e,t<0?(t+=n,t<0&&(t=0)):t>n&&(t=n),e<0?(e+=n,e<0&&(e=0)):e>n&&(e=n),e<t&&(e=t);const a=this.subarray(t,e);return Object.setPrototypeOf(a,s.prototype),a};function T(r,t,e){if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+t>e)throw new RangeError("Trying to access beyond buffer length")}s.prototype.readUintLE=s.prototype.readUIntLE=function(t,e,n){t=t>>>0,e=e>>>0,n||T(t,e,this.length);let a=this[t],u=1,d=0;for(;++d<e&&(u*=256);)a+=this[t+d]*u;return a},s.prototype.readUintBE=s.prototype.readUIntBE=function(t,e,n){t=t>>>0,e=e>>>0,n||T(t,e,this.length);let a=this[t+--e],u=1;for(;e>0&&(u*=256);)a+=this[t+--e]*u;return a},s.prototype.readUint8=s.prototype.readUInt8=function(t,e){return t=t>>>0,e||T(t,1,this.length),this[t]},s.prototype.readUint16LE=s.prototype.readUInt16LE=function(t,e){return t=t>>>0,e||T(t,2,this.length),this[t]|this[t+1]<<8},s.prototype.readUint16BE=s.prototype.readUInt16BE=function(t,e){return t=t>>>0,e||T(t,2,this.length),this[t]<<8|this[t+1]},s.prototype.readUint32LE=s.prototype.readUInt32LE=function(t,e){return t=t>>>0,e||T(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+this[t+3]*16777216},s.prototype.readUint32BE=s.prototype.readUInt32BE=function(t,e){return t=t>>>0,e||T(t,4,this.length),this[t]*16777216+(this[t+1]<<16|this[t+2]<<8|this[t+3])},s.prototype.readBigUInt64LE=ht(function(t){t=t>>>0,H(t,"offset");const e=this[t],n=this[t+7];(e===void 0||n===void 0)&&St(t,this.length-8);const a=e+this[++t]*2**8+this[++t]*2**16+this[++t]*2**24,u=this[++t]+this[++t]*2**8+this[++t]*2**16+n*2**24;return BigInt(a)+(BigInt(u)<<BigInt(32))}),s.prototype.readBigUInt64BE=ht(function(t){t=t>>>0,H(t,"offset");const e=this[t],n=this[t+7];(e===void 0||n===void 0)&&St(t,this.length-8);const a=e*2**24+this[++t]*2**16+this[++t]*2**8+this[++t],u=this[++t]*2**24+this[++t]*2**16+this[++t]*2**8+n;return(BigInt(a)<<BigInt(32))+BigInt(u)}),s.prototype.readIntLE=function(t,e,n){t=t>>>0,e=e>>>0,n||T(t,e,this.length);let a=this[t],u=1,d=0;for(;++d<e&&(u*=256);)a+=this[t+d]*u;return u*=128,a>=u&&(a-=Math.pow(2,8*e)),a},s.prototype.readIntBE=function(t,e,n){t=t>>>0,e=e>>>0,n||T(t,e,this.length);let a=e,u=1,d=this[t+--a];for(;a>0&&(u*=256);)d+=this[t+--a]*u;return u*=128,d>=u&&(d-=Math.pow(2,8*e)),d},s.prototype.readInt8=function(t,e){return t=t>>>0,e||T(t,1,this.length),this[t]&128?(255-this[t]+1)*-1:this[t]},s.prototype.readInt16LE=function(t,e){t=t>>>0,e||T(t,2,this.length);const n=this[t]|this[t+1]<<8;return n&32768?n|4294901760:n},s.prototype.readInt16BE=function(t,e){t=t>>>0,e||T(t,2,this.length);const n=this[t+1]|this[t]<<8;return n&32768?n|4294901760:n},s.prototype.readInt32LE=function(t,e){return t=t>>>0,e||T(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},s.prototype.readInt32BE=function(t,e){return t=t>>>0,e||T(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},s.prototype.readBigInt64LE=ht(function(t){t=t>>>0,H(t,"offset");const e=this[t],n=this[t+7];(e===void 0||n===void 0)&&St(t,this.length-8);const a=this[t+4]+this[t+5]*2**8+this[t+6]*2**16+(n<<24);return(BigInt(a)<<BigInt(32))+BigInt(e+this[++t]*2**8+this[++t]*2**16+this[++t]*2**24)}),s.prototype.readBigInt64BE=ht(function(t){t=t>>>0,H(t,"offset");const e=this[t],n=this[t+7];(e===void 0||n===void 0)&&St(t,this.length-8);const a=(e<<24)+this[++t]*2**16+this[++t]*2**8+this[++t];return(BigInt(a)<<BigInt(32))+BigInt(this[++t]*2**24+this[++t]*2**16+this[++t]*2**8+n)}),s.prototype.readFloatLE=function(t,e){return t=t>>>0,e||T(t,4,this.length),c.read(this,t,!0,23,4)},s.prototype.readFloatBE=function(t,e){return t=t>>>0,e||T(t,4,this.length),c.read(this,t,!1,23,4)},s.prototype.readDoubleLE=function(t,e){return t=t>>>0,e||T(t,8,this.length),c.read(this,t,!0,52,8)},s.prototype.readDoubleBE=function(t,e){return t=t>>>0,e||T(t,8,this.length),c.read(this,t,!1,52,8)};function O(r,t,e,n,a,u){if(!s.isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>a||t<u)throw new RangeError('"value" argument is out of bounds');if(e+n>r.length)throw new RangeError("Index out of range")}s.prototype.writeUintLE=s.prototype.writeUIntLE=function(t,e,n,a){if(t=+t,e=e>>>0,n=n>>>0,!a){const S=Math.pow(2,8*n)-1;O(this,t,e,n,S,0)}let u=1,d=0;for(this[e]=t&255;++d<n&&(u*=256);)this[e+d]=t/u&255;return e+n},s.prototype.writeUintBE=s.prototype.writeUIntBE=function(t,e,n,a){if(t=+t,e=e>>>0,n=n>>>0,!a){const S=Math.pow(2,8*n)-1;O(this,t,e,n,S,0)}let u=n-1,d=1;for(this[e+u]=t&255;--u>=0&&(d*=256);)this[e+u]=t/d&255;return e+n},s.prototype.writeUint8=s.prototype.writeUInt8=function(t,e,n){return t=+t,e=e>>>0,n||O(this,t,e,1,255,0),this[e]=t&255,e+1},s.prototype.writeUint16LE=s.prototype.writeUInt16LE=function(t,e,n){return t=+t,e=e>>>0,n||O(this,t,e,2,65535,0),this[e]=t&255,this[e+1]=t>>>8,e+2},s.prototype.writeUint16BE=s.prototype.writeUInt16BE=function(t,e,n){return t=+t,e=e>>>0,n||O(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=t&255,e+2},s.prototype.writeUint32LE=s.prototype.writeUInt32LE=function(t,e,n){return t=+t,e=e>>>0,n||O(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=t&255,e+4},s.prototype.writeUint32BE=s.prototype.writeUInt32BE=function(t,e,n){return t=+t,e=e>>>0,n||O(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=t&255,e+4};function vt(r,t,e,n,a){Tt(t,n,a,r,e,7);let u=Number(t&BigInt(4294967295));r[e++]=u,u=u>>8,r[e++]=u,u=u>>8,r[e++]=u,u=u>>8,r[e++]=u;let d=Number(t>>BigInt(32)&BigInt(4294967295));return r[e++]=d,d=d>>8,r[e++]=d,d=d>>8,r[e++]=d,d=d>>8,r[e++]=d,e}function _(r,t,e,n,a){Tt(t,n,a,r,e,7);let u=Number(t&BigInt(4294967295));r[e+7]=u,u=u>>8,r[e+6]=u,u=u>>8,r[e+5]=u,u=u>>8,r[e+4]=u;let d=Number(t>>BigInt(32)&BigInt(4294967295));return r[e+3]=d,d=d>>8,r[e+2]=d,d=d>>8,r[e+1]=d,d=d>>8,r[e]=d,e+8}s.prototype.writeBigUInt64LE=ht(function(t,e=0){return vt(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))}),s.prototype.writeBigUInt64BE=ht(function(t,e=0){return _(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))}),s.prototype.writeIntLE=function(t,e,n,a){if(t=+t,e=e>>>0,!a){const M=Math.pow(2,8*n-1);O(this,t,e,n,M-1,-M)}let u=0,d=1,S=0;for(this[e]=t&255;++u<n&&(d*=256);)t<0&&S===0&&this[e+u-1]!==0&&(S=1),this[e+u]=(t/d>>0)-S&255;return e+n},s.prototype.writeIntBE=function(t,e,n,a){if(t=+t,e=e>>>0,!a){const M=Math.pow(2,8*n-1);O(this,t,e,n,M-1,-M)}let u=n-1,d=1,S=0;for(this[e+u]=t&255;--u>=0&&(d*=256);)t<0&&S===0&&this[e+u+1]!==0&&(S=1),this[e+u]=(t/d>>0)-S&255;return e+n},s.prototype.writeInt8=function(t,e,n){return t=+t,e=e>>>0,n||O(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=t&255,e+1},s.prototype.writeInt16LE=function(t,e,n){return t=+t,e=e>>>0,n||O(this,t,e,2,32767,-32768),this[e]=t&255,this[e+1]=t>>>8,e+2},s.prototype.writeInt16BE=function(t,e,n){return t=+t,e=e>>>0,n||O(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=t&255,e+2},s.prototype.writeInt32LE=function(t,e,n){return t=+t,e=e>>>0,n||O(this,t,e,4,2147483647,-2147483648),this[e]=t&255,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},s.prototype.writeInt32BE=function(t,e,n){return t=+t,e=e>>>0,n||O(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=t&255,e+4},s.prototype.writeBigInt64LE=ht(function(t,e=0){return vt(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),s.prototype.writeBigInt64BE=ht(function(t,e=0){return _(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function tt(r,t,e,n,a,u){if(e+n>r.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function j(r,t,e,n,a){return t=+t,e=e>>>0,a||tt(r,t,e,4),c.write(r,t,e,n,23,4),e+4}s.prototype.writeFloatLE=function(t,e,n){return j(this,t,e,!0,n)},s.prototype.writeFloatBE=function(t,e,n){return j(this,t,e,!1,n)};function z(r,t,e,n,a){return t=+t,e=e>>>0,a||tt(r,t,e,8),c.write(r,t,e,n,52,8),e+8}s.prototype.writeDoubleLE=function(t,e,n){return z(this,t,e,!0,n)},s.prototype.writeDoubleBE=function(t,e,n){return z(this,t,e,!1,n)},s.prototype.copy=function(t,e,n,a){if(!s.isBuffer(t))throw new TypeError("argument should be a Buffer");if(n||(n=0),!a&&a!==0&&(a=this.length),e>=t.length&&(e=t.length),e||(e=0),a>0&&a<n&&(a=n),a===n||t.length===0||this.length===0)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(a<0)throw new RangeError("sourceEnd out of bounds");a>this.length&&(a=this.length),t.length-e<a-n&&(a=t.length-e+n);const u=a-n;return this===t&&typeof h.prototype.copyWithin=="function"?this.copyWithin(e,n,a):h.prototype.set.call(t,this.subarray(n,a),e),u},s.prototype.fill=function(t,e,n,a){if(typeof t=="string"){if(typeof e=="string"?(a=e,e=0,n=this.length):typeof n=="string"&&(a=n,n=this.length),a!==void 0&&typeof a!="string")throw new TypeError("encoding must be a string");if(typeof a=="string"&&!s.isEncoding(a))throw new TypeError("Unknown encoding: "+a);if(t.length===1){const d=t.charCodeAt(0);(a==="utf8"&&d<128||a==="latin1")&&(t=d)}}else typeof t=="number"?t=t&255:typeof t=="boolean"&&(t=Number(t));if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;e=e>>>0,n=n===void 0?this.length:n>>>0,t||(t=0);let u;if(typeof t=="number")for(u=e;u<n;++u)this[u]=t;else{const d=s.isBuffer(t)?t:s.from(t,a),S=d.length;if(S===0)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(u=0;u<n-e;++u)this[u+e]=d[u%S]}return this};const Z={};function lt(r,t,e){Z[r]=class extends e{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${r}]`,this.stack,delete this.name}get code(){return r}set code(a){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:a,writable:!0})}toString(){return`${this.name} [${r}]: ${this.message}`}}}lt("ERR_BUFFER_OUT_OF_BOUNDS",function(r){return r?`${r} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),lt("ERR_INVALID_ARG_TYPE",function(r,t){return`The "${r}" argument must be of type number. Received type ${typeof t}`},TypeError),lt("ERR_OUT_OF_RANGE",function(r,t,e){let n=`The value of "${r}" is out of range.`,a=e;return Number.isInteger(e)&&Math.abs(e)>2**32?a=nt(String(e)):typeof e=="bigint"&&(a=String(e),(e>BigInt(2)**BigInt(32)||e<-(BigInt(2)**BigInt(32)))&&(a=nt(a)),a+="n"),n+=` It must be ${t}. Received ${a}`,n},RangeError);function nt(r){let t="",e=r.length;const n=r[0]==="-"?1:0;for(;e>=n+4;e-=3)t=`_${r.slice(e-3,e)}${t}`;return`${r.slice(0,e)}${t}`}function At(r,t,e){H(t,"offset"),(r[t]===void 0||r[t+e]===void 0)&&St(t,r.length-(e+1))}function Tt(r,t,e,n,a,u){if(r>e||r<t){const d=typeof t=="bigint"?"n":"";let S;throw t===0||t===BigInt(0)?S=`>= 0${d} and < 2${d} ** ${(u+1)*8}${d}`:S=`>= -(2${d} ** ${(u+1)*8-1}${d}) and < 2 ** ${(u+1)*8-1}${d}`,new Z.ERR_OUT_OF_RANGE("value",S,r)}At(n,a,u)}function H(r,t){if(typeof r!="number")throw new Z.ERR_INVALID_ARG_TYPE(t,"number",r)}function St(r,t,e){throw Math.floor(r)!==r?(H(r,e),new Z.ERR_OUT_OF_RANGE("offset","an integer",r)):t<0?new Z.ERR_BUFFER_OUT_OF_BOUNDS:new Z.ERR_OUT_OF_RANGE("offset",`>= 0 and <= ${t}`,r)}const ze=/[^+/0-9A-Za-z-_]/g;function Ge(r){if(r=r.split("=")[0],r=r.trim().replace(ze,""),r.length<2)return"";for(;r.length%4!==0;)r=r+"=";return r}function Ht(r,t){t=t||1/0;let e;const n=r.length;let a=null;const u=[];for(let d=0;d<n;++d){if(e=r.charCodeAt(d),e>55295&&e<57344){if(!a){if(e>56319){(t-=3)>-1&&u.push(239,191,189);continue}else if(d+1===n){(t-=3)>-1&&u.push(239,191,189);continue}a=e;continue}if(e<56320){(t-=3)>-1&&u.push(239,191,189),a=e;continue}e=(a-55296<<10|e-56320)+65536}else a&&(t-=3)>-1&&u.push(239,191,189);if(a=null,e<128){if((t-=1)<0)break;u.push(e)}else if(e<2048){if((t-=2)<0)break;u.push(e>>6|192,e&63|128)}else if(e<65536){if((t-=3)<0)break;u.push(e>>12|224,e>>6&63|128,e&63|128)}else if(e<1114112){if((t-=4)<0)break;u.push(e>>18|240,e>>12&63|128,e>>6&63|128,e&63|128)}else throw new Error("Invalid code point")}return u}function We(r){const t=[];for(let e=0;e<r.length;++e)t.push(r.charCodeAt(e)&255);return t}function Je(r,t){let e,n,a;const u=[];for(let d=0;d<r.length&&!((t-=2)<0);++d)e=r.charCodeAt(d),n=e>>8,a=e%256,u.push(a),u.push(n);return u}function ue(r){return i.toByteArray(Ge(r))}function Ct(r,t,e,n){let a;for(a=0;a<n&&!(a+e>=t.length||a>=r.length);++a)t[a+e]=r[a];return a}function it(r,t){return r instanceof t||r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===t.name}function qt(r){return r!==r}const Ve=function(){const r="0123456789abcdef",t=new Array(256);for(let e=0;e<16;++e){const n=e*16;for(let a=0;a<16;++a)t[n+a]=r[e]+r[a]}return t}();function ht(r){return typeof BigInt>"u"?Ye:r}function Ye(){throw new Error("BigInt not supported")}})(st);const Mt=st.Buffer;var me=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},xe={exports:{}};(function(o,i){(function(c,p){o.exports=p()})(me,function(){/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var c=Object.prototype.toString,p=Array.isArray||function(w){return c.call(w)==="[object Array]"};function l(E){return typeof E=="function"}function h(E){return p(E)?"array":typeof E}function f(E){return E.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function y(E,w){return E!=null&&typeof E=="object"&&w in E}function g(E,w){return E!=null&&typeof E!="object"&&E.hasOwnProperty&&E.hasOwnProperty(w)}var m=RegExp.prototype.test;function s(E,w){return m.call(E,w)}var $=/\S/;function R(E){return!s($,E)}var k={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function D(E){return String(E).replace(/[&<>"'`=\/]/g,function(x){return k[x]})}var X=/\s*/,dt=/\s+/,mt=/\s*=/,et=/\s*\}/,xt=/#|\^|\/|>|\{|&|=|!/;function ft(E,w){if(!E)return[];var x=!1,b=[],I=[],B=[],v=!1,A=!1,N="",P=0;function rt(){if(v&&!A)for(;B.length;)delete I[B.pop()];else B=[];v=!1,A=!1}var ot,T,O;function vt(H){if(typeof H=="string"&&(H=H.split(dt,2)),!p(H)||H.length!==2)throw new Error("Invalid tags: "+H);ot=new RegExp(f(H[0])+"\\s*"),T=new RegExp("\\s*"+f(H[1])),O=new RegExp("\\s*"+f("}"+H[1]))}vt(w||W.tags);for(var _=new gt(E),tt,j,z,Z,lt,nt;!_.eos();){if(tt=_.pos,z=_.scanUntil(ot),z)for(var At=0,Tt=z.length;At<Tt;++At)Z=z.charAt(At),R(Z)?(B.push(I.length),N+=Z):(A=!0,x=!0,N+=" "),I.push(["text",Z,tt,tt+1]),tt+=1,Z===`
`&&(rt(),N="",P=0,x=!1);if(!_.scan(ot))break;if(v=!0,j=_.scan(xt)||"name",_.scan(X),j==="="?(z=_.scanUntil(mt),_.scan(mt),_.scanUntil(T)):j==="{"?(z=_.scanUntil(O),_.scan(et),_.scanUntil(T),j="&"):z=_.scanUntil(T),!_.scan(T))throw new Error("Unclosed tag at "+_.pos);if(j==">"?lt=[j,z,tt,_.pos,N,P,x]:lt=[j,z,tt,_.pos],P++,I.push(lt),j==="#"||j==="^")b.push(lt);else if(j==="/"){if(nt=b.pop(),!nt)throw new Error('Unopened section "'+z+'" at '+tt);if(nt[1]!==z)throw new Error('Unclosed section "'+nt[1]+'" at '+tt)}else j==="name"||j==="{"||j==="&"?A=!0:j==="="&&vt(z)}if(rt(),nt=b.pop(),nt)throw new Error('Unclosed section "'+nt[1]+'" at '+_.pos);return bt(Bt(I))}function Bt(E){for(var w=[],x,b,I=0,B=E.length;I<B;++I)x=E[I],x&&(x[0]==="text"&&b&&b[0]==="text"?(b[1]+=x[1],b[3]=x[3]):(w.push(x),b=x));return w}function bt(E){for(var w=[],x=w,b=[],I,B,v=0,A=E.length;v<A;++v)switch(I=E[v],I[0]){case"#":case"^":x.push(I),b.push(I),x=I[4]=[];break;case"/":B=b.pop(),B[5]=I[2],x=b.length>0?b[b.length-1][4]:w;break;default:x.push(I)}return w}function gt(E){this.string=E,this.tail=E,this.pos=0}gt.prototype.eos=function(){return this.tail===""},gt.prototype.scan=function(w){var x=this.tail.match(w);if(!x||x.index!==0)return"";var b=x[0];return this.tail=this.tail.substring(b.length),this.pos+=b.length,b},gt.prototype.scanUntil=function(w){var x=this.tail.search(w),b;switch(x){case-1:b=this.tail,this.tail="";break;case 0:b="";break;default:b=this.tail.substring(0,x),this.tail=this.tail.substring(x)}return this.pos+=b.length,b};function G(E,w){this.view=E,this.cache={".":this.view},this.parent=w}G.prototype.push=function(w){return new G(w,this)},G.prototype.lookup=function(w){var x=this.cache,b;if(x.hasOwnProperty(w))b=x[w];else{for(var I=this,B,v,A,N=!1;I;){if(w.indexOf(".")>0)for(B=I.view,v=w.split("."),A=0;B!=null&&A<v.length;)A===v.length-1&&(N=y(B,v[A])||g(B,v[A])),B=B[v[A++]];else B=I.view[w],N=y(I.view,w);if(N){b=B;break}I=I.parent}x[w]=b}return l(b)&&(b=b.call(this.view)),b};function K(){this.templateCache={_cache:{},set:function(w,x){this._cache[w]=x},get:function(w){return this._cache[w]},clear:function(){this._cache={}}}}K.prototype.clearCache=function(){typeof this.templateCache<"u"&&this.templateCache.clear()},K.prototype.parse=function(w,x){var b=this.templateCache,I=w+":"+(x||W.tags).join(":"),B=typeof b<"u",v=B?b.get(I):void 0;return v==null&&(v=ft(w,x),B&&b.set(I,v)),v},K.prototype.render=function(w,x,b,I){var B=this.parse(w,I),v=x instanceof G?x:new G(x,void 0);return this.renderTokens(B,v,b,w,I)},K.prototype.renderTokens=function(w,x,b,I,B){for(var v="",A,N,P,rt=0,ot=w.length;rt<ot;++rt)P=void 0,A=w[rt],N=A[0],N==="#"?P=this.renderSection(A,x,b,I):N==="^"?P=this.renderInverted(A,x,b,I):N===">"?P=this.renderPartial(A,x,b,B):N==="&"?P=this.unescapedValue(A,x):N==="name"?P=this.escapedValue(A,x):N==="text"&&(P=this.rawValue(A)),P!==void 0&&(v+=P);return v},K.prototype.renderSection=function(w,x,b,I){var B=this,v="",A=x.lookup(w[1]);function N(ot){return B.render(ot,x,b)}if(A){if(p(A))for(var P=0,rt=A.length;P<rt;++P)v+=this.renderTokens(w[4],x.push(A[P]),b,I);else if(typeof A=="object"||typeof A=="string"||typeof A=="number")v+=this.renderTokens(w[4],x.push(A),b,I);else if(l(A)){if(typeof I!="string")throw new Error("Cannot use higher-order sections without the original template");A=A.call(x.view,I.slice(w[3],w[5]),N),A!=null&&(v+=A)}else v+=this.renderTokens(w[4],x,b,I);return v}},K.prototype.renderInverted=function(w,x,b,I){var B=x.lookup(w[1]);if(!B||p(B)&&B.length===0)return this.renderTokens(w[4],x,b,I)},K.prototype.indentPartial=function(w,x,b){for(var I=x.replace(/[^ \t]/g,""),B=w.split(`
`),v=0;v<B.length;v++)B[v].length&&(v>0||!b)&&(B[v]=I+B[v]);return B.join(`
`)},K.prototype.renderPartial=function(w,x,b,I){if(b){var B=l(b)?b(w[1]):b[w[1]];if(B!=null){var v=w[6],A=w[5],N=w[4],P=B;return A==0&&N&&(P=this.indentPartial(B,N,v)),this.renderTokens(this.parse(P,I),x,b,P)}}},K.prototype.unescapedValue=function(w,x){var b=x.lookup(w[1]);if(b!=null)return b},K.prototype.escapedValue=function(w,x){var b=x.lookup(w[1]);if(b!=null)return W.escape(b)},K.prototype.rawValue=function(w){return w[1]};var W={name:"mustache.js",version:"4.0.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(E){yt.templateCache=E},get templateCache(){return yt.templateCache}},yt=new K;return W.clearCache=function(){return yt.clearCache()},W.parse=function(w,x){return yt.parse(w,x)},W.render=function(w,x,b,I){if(typeof w!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+h(w)+'" was given as the first argument for mustache#render(template, view, partials)');return yt.render(w,x,b,I)},W.escape=D,W.Scanner=gt,W.Context=G,W.Writer=K,W})})(xe);/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */function be(o){return o instanceof Uint8Array||ArrayBuffer.isView(o)&&o.constructor.name==="Uint8Array"}function Gt(o,i){return Array.isArray(i)?i.length===0?!0:o?i.every(c=>typeof c=="string"):i.every(c=>Number.isSafeInteger(c)):!1}function Lt(o,i){if(typeof i!="string")throw new Error(`${o}: string expected`);return!0}function Wt(o){if(!Number.isSafeInteger(o))throw new Error(`invalid integer: ${o}`)}function _t(o){if(!Array.isArray(o))throw new Error("array expected")}function Jt(o,i){if(!Gt(!0,i))throw new Error(`${o}: array of strings expected`)}function Ee(o,i){if(!Gt(!1,i))throw new Error(`${o}: array of numbers expected`)}function Ie(...o){const i=h=>h,c=(h,f)=>y=>h(f(y)),p=o.map(h=>h.encode).reduceRight(c,i),l=o.map(h=>h.decode).reduce(c,i);return{encode:p,decode:l}}function Be(o){const i=typeof o=="string"?o.split(""):o,c=i.length;Jt("alphabet",i);const p=new Map(i.map((l,h)=>[l,h]));return{encode:l=>(_t(l),l.map(h=>{if(!Number.isSafeInteger(h)||h<0||h>=c)throw new Error(`alphabet.encode: digit index outside alphabet "${h}". Allowed: ${o}`);return i[h]})),decode:l=>(_t(l),l.map(h=>{Lt("alphabet.decode",h);const f=p.get(h);if(f===void 0)throw new Error(`Unknown letter: "${h}". Allowed: ${o}`);return f}))}}function ve(o=""){return Lt("join",o),{encode:i=>(Jt("join.decode",i),i.join(o)),decode:i=>(Lt("join.decode",i),i.split(o))}}function Vt(o,i,c){if(i<2)throw new Error(`convertRadix: invalid from=${i}, base cannot be less than 2`);if(c<2)throw new Error(`convertRadix: invalid to=${c}, base cannot be less than 2`);if(_t(o),!o.length)return[];let p=0;const l=[],h=Array.from(o,y=>{if(Wt(y),y<0||y>=i)throw new Error(`invalid integer: ${y}`);return y}),f=h.length;for(;;){let y=0,g=!0;for(let m=p;m<f;m++){const s=h[m],$=i*y,R=$+s;if(!Number.isSafeInteger(R)||$/i!==y||R-s!==$)throw new Error("convertRadix: carry overflow");const k=R/c;y=R%c;const D=Math.floor(k);if(h[m]=D,!Number.isSafeInteger(D)||D*c+y!==R)throw new Error("convertRadix: carry overflow");if(g)D?g=!1:p=m;else continue}if(l.push(y),g)break}for(let y=0;y<o.length-1&&o[y]===0;y++)l.push(0);return l.reverse()}function Ae(o){Wt(o);const i=2**8;return{encode:c=>{if(!be(c))throw new Error("radix.encode input should be Uint8Array");return Vt(Array.from(c),i,o)},decode:c=>(Ee("radix.decode",c),Uint8Array.from(Vt(c,o,i)))}}const Se=(o=>Ie(Ae(58),Be(o),ve("")))("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");var $e=24;10n**BigInt($e);function Fe(o){return Se.decode(o)}const Dt="m/44'/397'/0'/0'/1'";function Et(o,i){return o==="sign-with-ledger"?`sign-with-ledger --seed-phrase-hd-path '${F(i||Dt)}'`:"sign-with-keychain"}function ct(o){if(o==="0")return"0";const i=24,c=o.padStart(i+1,"0"),p=c.slice(0,-i)||"0",l=c.slice(-i).replace(/0+$/,"");return l?`${p}.${l}`:p}function Yt(o){if(o==="0")return"0";const i=12,c=o.padStart(i+1,"0"),p=c.slice(0,-i)||"0",l=c.slice(-i).replace(/0+$/,"");return l?`${p}.${l}`:p}function F(o){return o.replace(/'/g,"'\\''")}function Xt({accountId:o,addFunctionCallKey:i,network:c,signingMethod:p="sign-with-keychain",ledgerHdPath:l}){const{contractId:h,publicKey:f,allowMethods:y,gasAllowance:g}=i;let m="'0.25 NEAR'";g&&(g.kind==="unlimited"?m="'unlimited'":m=`'${ct(g.amount)} NEAR'`);const s=["near account"];return s.push(`add-key '${F(o)}'`),s.push("grant-function-call-access"),s.push(`--allowance ${m}`),s.push(`--contract-account-id '${F(h)}'`),y.anyMethod||y.methodNames.length===0?s.push("--function-names ''"):s.push(`--function-names '${F(y.methodNames.join(", "))}'`),s.push(`use-manually-provided-public-key ${f}`),s.push(`network-config ${c}`),s.push(Et(p,l)),s.join(` \\
    `)}function Zt(o){switch(o.type){case"CreateAccount":return"add-action create-account";case"Transfer":return`add-action transfer '${ct(o.params.deposit)} NEAR'`;case"FunctionCall":{const i=JSON.stringify(o.params.args);return[`add-action function-call '${F(o.params.methodName)}'`,`json-args '${F(i)}'`,`prepaid-gas '${Yt(o.params.gas)} Tgas'`,`attached-deposit '${ct(o.params.deposit)} NEAR'`].join(" ")}case"AddKey":if(o.params.accessKey.permission==="FullAccess")return`add-action add-key grant-full-access use-manually-provided-public-key ${o.params.publicKey}`;{const i=o.params.accessKey.permission,c=["add-action add-key grant-function-call-access"];return i.allowance&&c.push(`--allowance '${ct(i.allowance)} NEAR'`),c.push(`--contract-account-id '${F(i.receiverId)}'`),i.methodNames&&i.methodNames.length>0&&c.push(`--function-names '${F(i.methodNames.join(", "))}'`),c.push(`use-manually-provided-public-key ${o.params.publicKey}`),c.join(" ")}case"DeleteKey":return`add-action delete-key ${o.params.publicKey}`;case"DeleteAccount":return`add-action delete-account beneficiary '${F(o.params.beneficiaryId)}'`;case"Stake":return`add-action stake '${ct(o.params.stake)} NEAR' ${o.params.publicKey}`;case"DeployContract":case"DeployGlobalContract":throw new Error(`${o.type} is not supported by NEAR CLI wallet — binary data cannot be passed via command line`);case"UseGlobalContract":{const i=o.params.contractIdentifier;return"accountId"in i?`add-action use-global-contract use-global-account-id '${F(i.accountId)}'`:`add-action use-global-contract use-global-hash '${F(i.codeHash)}'`}default:throw new Error("Unknown action type")}}function Qt({signerId:o,receiverId:i,actions:c,network:p,signingMethod:l="sign-with-keychain",ledgerHdPath:h}){const f=Et(l,h);if(c.length===1&&c[0].type==="FunctionCall"){const g=c[0].params,m=JSON.stringify(g.args);return["near contract","call-function",`as-transaction '${F(i)}' '${F(g.methodName)}'`,`json-args '${F(m)}'`,`prepaid-gas '${Yt(g.gas)} Tgas'`,`attached-deposit '${ct(g.deposit)} NEAR'`,`sign-as '${F(o)}'`,`network-config ${p}`,f].join(` \\
    `)}if(c.length===1&&c[0].type==="Transfer")return["near tokens",`'${F(o)}'`,`send-near '${F(i)}' '${ct(c[0].params.deposit)} NEAR'`,`network-config ${p}`,f].join(` \\
    `);if(c.length===1&&c[0].type==="AddKey"){const g=c[0],m=["near account"];if(m.push(`add-key '${F(o)}'`),g.params.accessKey.permission==="FullAccess")m.push("grant-full-access");else{const s=g.params.accessKey.permission;m.push("grant-function-call-access"),s.allowance&&m.push(`--allowance '${ct(s.allowance)} NEAR'`),m.push(`--contract-account-id '${F(s.receiverId)}'`),s.methodNames&&s.methodNames.length>0&&m.push(`--function-names '${F(s.methodNames.join(", "))}'`)}return m.push(`use-manually-provided-public-key ${g.params.publicKey}`),m.push(`network-config ${p}`),m.push(f),m.join(` \\
    `)}if(c.every(g=>g.type==="DeleteKey")){const g=c.map(m=>m.params.publicKey).join(",");return["near account",`delete-keys '${F(o)}' public-keys ${g}`,`network-config ${p}`,f].join(` \\
    `)}const y=c.map(Zt);return["near transaction",`construct-transaction '${F(o)}' '${F(i)}'`,...y,"skip",`network-config ${p}`,f].join(` \\
    `)}function Re({signerId:o,receiverId:i,actions:c,network:p,signingMethod:l="sign-with-keychain",ledgerHdPath:h}){const f=c.map(Zt);return["near transaction",`construct-meta-transaction '${F(o)}' '${F(i)}'`,...f,"skip",`network-config ${p}`,`${Et(l,h)} display`].join(` \\
    `)}function te({message:o,recipient:i,nonce:c,network:p,signerId:l,signingMethod:h="sign-with-keychain",ledgerHdPath:f}){const y=["near message sign-nep413",`utf8 '${F(o)}'`,`nonce '${F(c)}'`,`recipient '${F(i)}'`,`sign-as '${F(l)}'`];return h==="sign-with-ledger"?y.push(Et(h,f)):(y.push(Et(h,f)),y.push(`network-config ${p}`)),y.join(` \\
    `)}const Ue=`
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="preconnect" href="https://rsms.me/" />
  <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
  <style>
body, html {
  margin: 0;
  padding: 0;
  background: #1d1f20;
  width: 100%;
  height: 100%;
}

@supports (font-variation-settings: normal) {
  :root { font-family: InterVariable, sans-serif; }
}

* {
  box-sizing: border-box;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  -webkit-tap-highlight-color: transparent;
}

*::-webkit-scrollbar { display: none; }

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  min-height: 100%;
  color: #fff;
}

h2 {
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 8px;
  text-align: center;
}

.subtitle {
  font-size: 14px;
  color: #ada5a4;
  margin: 0 0 20px;
  text-align: center;
  line-height: 1.4;
}

input, textarea {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-size: 14px;
  font-family: inherit;
  outline: none;
}

input:focus, textarea:focus {
  border-color: rgba(255, 255, 255, 0.3);
}

input::placeholder, textarea::placeholder {
  color: rgba(255, 255, 255, 0.3);
}

textarea {
  resize: vertical;
  min-height: 100px;
  font-family: 'SF Mono', 'Menlo', 'Monaco', 'Consolas', monospace;
  font-size: 12px;
  line-height: 1.5;
}

.btn {
  width: 100%;
  padding: 14px 20px;
  border: none;
  border-radius: 12px;
  background: #00d4aa;
  color: #1d1f20;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
  margin-top: 12px;
  transition: background 0.15s;
}

.btn:hover { background: #00e6b8; }
.btn:disabled { opacity: 0.5; cursor: not-allowed; }

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.15);
}

.command-block {
  width: 100%;
  position: relative;
  margin: 12px 0;
}

.command-block pre {
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 14px;
  padding-right: 70px;
  overflow-x: auto;
  margin: 0;
  font-size: 13px;
  line-height: 1.6;
  max-height: 200px;
  overflow-y: auto;
}

.command-block code {
  font-family: 'SF Mono', 'Menlo', 'Monaco', 'Consolas', monospace;
  color: #e0e0e0;
  white-space: pre;
}

.copy-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 6px 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 12px;
  cursor: pointer;
  font-family: inherit;
  transition: background 0.15s;
}

.copy-btn:hover { background: rgba(255, 255, 255, 0.2); }

.error-text {
  color: #ff6b6b;
  font-size: 13px;
  margin-top: 8px;
  text-align: center;
}

.spinner {
  width: 36px;
  height: 36px;
  border: 3px solid rgba(255, 255, 255, 0.1);
  border-top-color: #00d4aa;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin-bottom: 16px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.step-indicator {
  font-size: 12px;
  color: #6b6661;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.field-group {
  width: 100%;
  margin-bottom: 4px;
}

.field-label {
  font-size: 12px;
  color: #ada5a4;
  margin-bottom: 6px;
  display: block;
}

.signing-method-options {
  display: flex;
  gap: 12px;
  width: 100%;
  margin-bottom: 4px;
}

button.signing-method-card {
  font: inherit;
  color: inherit;
  -webkit-appearance: none;
  appearance: none;
}

.signing-method-card {
  flex: 1;
  padding: 16px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  cursor: pointer;
  transition: border-color 0.15s, background 0.15s;
  text-align: center;
}

.signing-method-card:hover {
  background: rgba(255, 255, 255, 0.08);
}

.signing-method-card.selected {
  border-color: #00d4aa;
  background: rgba(0, 212, 170, 0.1);
}

.signing-method-card-icon {
  margin-bottom: 10px;
}

.signing-method-card-icon svg {
  width: 32px;
  height: 32px;
  transition: stroke 0.15s;
}

.signing-method-card.selected .signing-method-card-icon svg {
  stroke: #00d4aa;
}

.signing-method-card-title {
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 4px;
}

.signing-method-card-desc {
  font-size: 12px;
  color: #ada5a4;
  line-height: 1.4;
}

.hd-path-group {
  width: 100%;
  margin-top: 12px;
}
</style>
  <title>NEAR CLI</title>
`;function Q(o){return o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function $t(o){return`
    <div class="command-block">
      <pre><code>${Q(o)}</code></pre>
      <button class="copy-btn" data-command="${Q(o)}">Copy</button>
    </div>
  `}function ke(o){return`
    <div class="container">
      ${o.step?`<div class="step-indicator">${Q(o.step)}</div>`:""}
      <h2>${Q(o.title)}</h2>
      ${o.subtitle?`<p class="subtitle">${Q(o.subtitle)}</p>`:""}
      <div class="field-group">
        <input type="text" id="account-id" placeholder="e.g. yourname.near" autocapitalize="off" autocomplete="off" spellcheck="false" />
      </div>
      <div id="error" class="error-text" style="display:none"></div>
      <button class="btn" id="submit-btn">${Q(o.buttonText)}</button>
    </div>
  `}function ee(o,i){return`
    <div class="container">
      ${i?`<div class="step-indicator">${Q(i)}</div>`:""}
      <h2>Add access key</h2>
      <p class="subtitle">Run this command in your terminal, then paste the transaction hash or explorer URL below</p>
      ${$t(o)}
      <div class="field-group">
        <label class="field-label">Transaction hash or explorer URL</label>
        <input type="text" id="tx-hash" placeholder="Paste transaction hash or explorer URL" autocapitalize="off" autocomplete="off" spellcheck="false" />
      </div>
      <div id="error" class="error-text" style="display:none"></div>
      <button class="btn" id="verify-btn">Verify</button>
    </div>
  `}function re(o){return`
    <div class="container">
      <h2>Sign transaction</h2>
      <p class="subtitle">Run this command in your terminal, then paste the transaction hash or explorer URL below</p>
      ${$t(o)}
      <div class="field-group">
        <label class="field-label">Transaction hash or explorer URL</label>
        <input type="text" id="tx-hash" placeholder="Paste transaction hash or explorer URL" autocapitalize="off" autocomplete="off" spellcheck="false" />
      </div>
      <div id="error" class="error-text" style="display:none"></div>
      <button class="btn" id="verify-btn">Verify</button>
    </div>
  `}function Te(o,i){return`
    <div class="container">
      ${i?`<div class="step-indicator">${Q(i)}</div>`:""}
      <h2>Sign message</h2>
      <p class="subtitle">Run this command in your terminal, then paste the JSON output below</p>
      ${$t(o)}
      <div class="field-group">
        <label class="field-label">Command output</label>
        <textarea id="sign-output" placeholder='Paste the JSON output here, e.g.&#10;{"accountId":"...","publicKey":"...","signature":"..."}'></textarea>
      </div>
      <div id="error" class="error-text" style="display:none"></div>
      <button class="btn" id="submit-sign-btn">Submit</button>
    </div>
  `}function Ce(o,i){return`
    <div class="container">
      ${i?`<div class="step-indicator">${Q(i)}</div>`:""}
      <h2>Sign delegate action</h2>
      <p class="subtitle">Run this command in your terminal (requires near-cli-rs &ge; 0.24.0), then paste the base64 output below</p>
      ${$t(o)}
      <div class="field-group">
        <label class="field-label">Signed delegate action (base64)</label>
        <textarea id="delegate-output" placeholder="Paste the base64 output here"></textarea>
      </div>
      <div id="error" class="error-text" style="display:none"></div>
      <button class="btn" id="submit-delegate-btn">Submit</button>
    </div>
  `}function Ne(o){return`
    <div class="container">
      ${o.step?`<div class="step-indicator">${Q(o.step)}</div>`:""}
      <h2>Signing method</h2>
      <p class="subtitle">Choose how to sign transactions</p>
      <div class="signing-method-options">
        <button type="button" class="signing-method-card selected" data-method="sign-with-keychain" aria-pressed="true">
          <div class="signing-method-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#ada5a4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg></div>
          <div class="signing-method-card-title">Keychain</div>
          <div class="signing-method-card-desc">Sign using your OS keychain managed by near-cli</div>
        </button>
        <button type="button" class="signing-method-card" data-method="sign-with-ledger" aria-pressed="false">
          <div class="signing-method-card-icon"><svg viewBox="0 0 34 24" fill="none" stroke="#ada5a4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="5" width="26" height="14" rx="3"/><rect x="4" y="8" width="10" height="8" rx="1.5"/><path d="M27 9h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4"/></svg></div>
          <div class="signing-method-card-title">Ledger</div>
          <div class="signing-method-card-desc">Sign using a Ledger hardware wallet</div>
        </button>
      </div>
      <div class="hd-path-group" id="hd-path-group" style="display:none">
        <label class="field-label">HD derivation path</label>
        <input type="text" id="hd-path" value="${Q(o.defaultHdPath)}" autocapitalize="off" autocomplete="off" spellcheck="false" />
      </div>
      <div id="error" class="error-text" style="display:none"></div>
      <button class="btn" id="submit-signing-method-btn">Continue</button>
    </div>
  `}const Y=()=>window.selector.storage;async function pt(o){return await Y().get(`cli:${o}:accountId`)||""}async function Ot(o,i){await Y().set(`cli:${o}:accountId`,i)}async function Pe(o){await Y().remove(`cli:${o}:accountId`)}async function jt(o){const i=await Y().get(`cli:${o}:functionCallKey`);return i?JSON.parse(i):null}async function ne(o,i){await Y().set(`cli:${o}:functionCallKey`,JSON.stringify(i))}async function Me(o){await Y().remove(`cli:${o}:functionCallKey`)}async function Ft(o){return await Y().get(`cli:${o}:signingMethod`)==="sign-with-ledger"?"sign-with-ledger":"sign-with-keychain"}async function ie(o,i){await Y().set(`cli:${o}:signingMethod`,i)}async function Le(o){await Y().remove(`cli:${o}:signingMethod`)}async function Rt(o){return await Y().get(`cli:${o}:ledgerHdPath`)||Dt}async function oe(o,i){await Y().set(`cli:${o}:ledgerHdPath`,i)}async function _e(o){await Y().remove(`cli:${o}:ledgerHdPath`)}function Ut(o){var p,l;const i=(l=(p=window.selector)==null?void 0:p.providers)==null?void 0:l[o],c=o==="mainnet"?"https://rpc.mainnet.near.org":"https://rpc.testnet.near.org";return i&&i.length>0?i[0]:c}async function De(o,i,c){const l=await(await fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({jsonrpc:"2.0",id:1,method:"tx",params:{tx_hash:i,sender_account_id:c,wait_until:"NONE"}})})).json();if(l.error)throw new Error(l.error.message||JSON.stringify(l.error));return l.result}function It(o){document.head.innerHTML=Ue,document.body.innerHTML="";const i=document.createElement("div");return i.style.height="100%",i.innerHTML=o,document.body.appendChild(i),i}function Kt(o){o.querySelectorAll(".copy-btn").forEach(i=>{i.addEventListener("click",async()=>{var p;const c=i.getAttribute("data-command")||"";try{await navigator.clipboard.writeText(c);const l=i.textContent;i.textContent="Copied!",setTimeout(()=>{i.textContent=l},1500)}catch{const l=(p=i.parentElement)==null?void 0:p.querySelector("code");if(l){const h=document.createRange();h.selectNodeContents(l);const f=window.getSelection();f==null||f.removeAllRanges(),f==null||f.addRange(h)}}})})}function ut(o,i){const c=o.querySelector("#error");c&&(c.textContent=i,c.style.display="block")}function ae(o){return new Promise(i=>{const c=It(ke(o));window.selector.ui.showIframe();const p=c.querySelector("#account-id"),l=c.querySelector("#submit-btn"),h=()=>{const f=p.value.trim();if(!f){ut(c,"Please enter an account ID");return}i(f)};l.addEventListener("click",h),p.addEventListener("keydown",f=>{f.key==="Enter"&&h()})})}function se(o){return new Promise(i=>{const c=It(Ne({step:o.step,defaultHdPath:Dt}));window.selector.ui.showIframe();let p="sign-with-keychain";const l=c.querySelectorAll(".signing-method-card"),h=c.querySelector("#hd-path-group"),f=c.querySelector("#hd-path"),y=c.querySelector("#submit-signing-method-btn");l.forEach(g=>{g.addEventListener("click",()=>{l.forEach(m=>{m.classList.remove("selected"),m.setAttribute("aria-pressed","false")}),g.classList.add("selected"),g.setAttribute("aria-pressed","true"),p=g.getAttribute("data-method"),h.style.display=p==="sign-with-ledger"?"block":"none"})}),y.addEventListener("click",()=>{const g={signingMethod:p};if(p==="sign-with-ledger"){const m=f.value.trim();if(!m){ut(c,"Please enter an HD derivation path");return}g.ledgerHdPath=m}i(g)})})}function Oe(o){const i=o.match(/(?:txns?|transactions)\/([A-Za-z0-9]{43,44})/);if(i)return i[1];const c=o.match(/(?:Transaction ID:\s*)?([A-Za-z0-9]{43,44})/);return c?c[1]:o}async function je(o,i,c,p=5){let l;for(let h=0;h<p;h++)try{return await De(o,i,c)}catch(f){l=f,h<p-1&&await new Promise(y=>setTimeout(y,2e3))}throw l??new Error(`Transaction ${i} not found after ${p} attempts`)}function kt(o,i,c){return new Promise(p=>{const l=It(o);Kt(l),window.selector.ui.showIframe();const h=l.querySelector("#tx-hash"),f=l.querySelector("#verify-btn"),y=async()=>{const g=h.value.trim();if(!g){ut(l,"Please paste the transaction hash or explorer URL");return}const m=Oe(g);f.disabled=!0,f.textContent="Verifying...";try{const s=await je(i,m,c);p(s)}catch{ut(l,"Transaction not found. Please check the hash and try again."),f.disabled=!1,f.textContent="Verify"}};f.addEventListener("click",y),h.addEventListener("keydown",g=>{g.key==="Enter"&&y()})})}function ce(o,i){return new Promise(c=>{const p=It(Te(o,i));Kt(p),window.selector.ui.showIframe();const l=p.querySelector("#sign-output");p.querySelector("#submit-sign-btn").addEventListener("click",()=>{const f=l.value.trim();if(!f){ut(p,"Please paste the command output");return}try{const y=f.match(/\{[\s\S]*"signature"[\s\S]*\}/);if(!y)throw new Error("No valid JSON found");const g=JSON.parse(y[0]);if(!g.signature||!g.publicKey)throw new Error("Missing signature or publicKey in output");const m=g.signature.replace(/^ed25519:/,"");c({accountId:g.accountId||"",publicKey:g.publicKey,signature:Mt.from(Fe(m)).toString("base64")})}catch(y){ut(p,`Could not parse output: ${y.message}`)}})})}function Ke(o){const c=o.trim().match(/[A-Za-z0-9+/=]{20,}/g);return c?c.reduce((p,l)=>p.length>=l.length?p:l):null}function He(o,i){return new Promise(c=>{const p=It(Ce(o,i));Kt(p),window.selector.ui.showIframe();const l=p.querySelector("#delegate-output");p.querySelector("#submit-delegate-btn").addEventListener("click",()=>{const f=l.value.trim();if(!f){ut(p,"Please paste the base64 output from the command");return}const y=Ke(f);if(!y){ut(p,"Could not find valid base64 data in the pasted output");return}c(y)})})}class qe{constructor(){at(this,"signIn",async({addFunctionCallKey:i,network:c})=>{const p=await pt(c),l=await jt(c),h=(l==null?void 0:l.publicKey)&&(!i||l.contractId===i.contractId&&l.publicKey===i.publicKey);if(p&&(!i||h))return[{accountId:p,publicKey:(l==null?void 0:l.publicKey)??""}];const f=!p;let y=1;f&&y++,i&&y++;let g=0;const m=p||await ae({title:"Connect with NEAR CLI",subtitle:"Enter your NEAR account ID",buttonText:"Next",step:`Step ${++g} of ${y}`}),{signingMethod:s,ledgerHdPath:$}=await se({step:`Step ${++g} of ${y}`});if(await ie(c,s),$&&await oe(c,$),i){const{publicKey:R}=i,k=Xt({accountId:m,addFunctionCallKey:i,network:c,signingMethod:s,ledgerHdPath:$}),D=Ut(c);await kt(ee(k,`Step ${++g} of ${y}`),D,m);const X={publicKey:R,contractId:i.contractId};return await Ot(c,m),await ne(c,X),[{accountId:m,publicKey:R}]}return await Ot(c,m),[{accountId:m,publicKey:""}]});at(this,"signInAndSignMessage",async({addFunctionCallKey:i,network:c,messageParams:p})=>{const{message:l,recipient:h,nonce:f}=p,y=await pt(c),g=await jt(c),m=!y,s=!!i&&(!(g!=null&&g.publicKey)||g.contractId!==i.contractId||g.publicKey!==i.publicKey);let $=2;m&&$++,s&&$++;let R=0;const k=y||await ae({title:"Connect with NEAR CLI",subtitle:"Enter your NEAR account ID to sign in and sign a message",buttonText:"Next",step:`Step ${++R} of ${$}`}),{signingMethod:D,ledgerHdPath:X}=await se({step:`Step ${++R} of ${$}`});await ie(c,D),X&&await oe(c,X);const dt=Mt.from(f).toString("base64"),mt=te({message:l,recipient:h,nonce:dt,network:c,signerId:k,signingMethod:D,ledgerHdPath:X}),et=await ce(mt,`Step ${++R} of ${$}`);let xt=et.publicKey;if(s&&i){xt=i.publicKey;const ft=Xt({accountId:k,addFunctionCallKey:i,network:c,signingMethod:D,ledgerHdPath:X}),Bt=Ut(c);await kt(ee(ft,`Step ${++R} of ${$}`),Bt,k);const bt={publicKey:i.publicKey,contractId:i.contractId};await ne(c,bt)}return await Ot(c,k),[{accountId:k,publicKey:xt,signedMessage:{accountId:et.accountId||k,publicKey:et.publicKey,signature:et.signature}}]});at(this,"signOut",async({network:i})=>{await Pe(i),await Me(i),await Le(i),await _e(i)});at(this,"getAccounts",async({network:i})=>{const c=await pt(i);if(!c)return[];const p=await jt(i);return[{accountId:c,publicKey:(p==null?void 0:p.publicKey)??""}]});at(this,"signAndSendTransaction",async({receiverId:i,actions:c,network:p})=>{const l=await pt(p);if(!l)throw new Error("Wallet not signed in");const h=await Ft(p),f=h==="sign-with-ledger"?await Rt(p):void 0,y=Qt({signerId:l,receiverId:i,actions:c,network:p,signingMethod:h,ledgerHdPath:f});try{const g=Ut(p);return await kt(re(y),g,l)}finally{window.selector.ui.hideIframe()}});at(this,"signAndSendTransactions",async({transactions:i,network:c})=>{const p=await pt(c);if(!p)throw new Error("Wallet not signed in");const l=await Ft(c),h=l==="sign-with-ledger"?await Rt(c):void 0,f=Ut(c),y=[];try{for(const g of i){const m=Qt({signerId:p,receiverId:g.receiverId,actions:g.actions,network:c,signingMethod:l,ledgerHdPath:h}),s=await kt(re(m),f,p);y.push(s)}return y}finally{window.selector.ui.hideIframe()}});at(this,"signMessage",async({message:i,nonce:c,recipient:p,network:l})=>{const h=await pt(l);if(!h)throw new Error("Wallet not signed in");const f=await Ft(l),y=f==="sign-with-ledger"?await Rt(l):void 0,g=Mt.from(c).toString("base64"),m=te({message:i,recipient:p,nonce:g,network:l,signerId:h,signingMethod:f,ledgerHdPath:y});try{const s=await ce(m);return{accountId:s.accountId||h,publicKey:s.publicKey,signature:s.signature}}finally{window.selector.ui.hideIframe()}});at(this,"signDelegateActions",async({delegateActions:i,network:c})=>{const p=await pt(c);if(!p)throw new Error("Wallet not signed in");const l=await Ft(c),h=l==="sign-with-ledger"?await Rt(c):void 0,f=[];try{const y=i.length;for(let g=0;g<i.length;g++){const m=i[g],s=Re({signerId:p,receiverId:m.receiverId,actions:m.actions,network:c,signingMethod:l,ledgerHdPath:h}),$=y>1?`Step ${g+1} of ${y}`:void 0,R=await He(s,$);f.push(R)}return{signedDelegateActions:f}}finally{window.selector.ui.hideIframe()}})}}window.selector.ready(new qe)})();
