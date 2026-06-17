var en=Object.defineProperty;var nn=(st,V,z)=>V in st?en(st,V,{enumerable:!0,configurable:!0,writable:!0,value:z}):st[V]=z;var at=(st,V,z)=>nn(st,typeof V!="symbol"?V+"":V,z);(function(){"use strict";var st={},V={};V.byteLength=de,V.toByteArray=ye,V.fromByteArray=xe;for(var z=[],Y=[],pe=typeof Uint8Array<"u"?Uint8Array:Array,Nt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",wt=0,fe=Nt.length;wt<fe;++wt)z[wt]=Nt[wt],Y[Nt.charCodeAt(wt)]=wt;Y[45]=62,Y[95]=63;function zt(i){var o=i.length;if(o%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var c=i.indexOf("=");c===-1&&(c=o);var l=c===o?0:4-c%4;return[c,l]}function de(i){var o=zt(i),c=o[0],l=o[1];return(c+l)*3/4-l}function ge(i,o,c){return(o+c)*3/4-c}function ye(i){var o,c=zt(i),l=c[0],p=c[1],h=new pe(ge(i,l,p)),d=0,g=p>0?l-4:l,y;for(y=0;y<g;y+=4)o=Y[i.charCodeAt(y)]<<18|Y[i.charCodeAt(y+1)]<<12|Y[i.charCodeAt(y+2)]<<6|Y[i.charCodeAt(y+3)],h[d++]=o>>16&255,h[d++]=o>>8&255,h[d++]=o&255;return p===2&&(o=Y[i.charCodeAt(y)]<<2|Y[i.charCodeAt(y+1)]>>4,h[d++]=o&255),p===1&&(o=Y[i.charCodeAt(y)]<<10|Y[i.charCodeAt(y+1)]<<4|Y[i.charCodeAt(y+2)]>>2,h[d++]=o>>8&255,h[d++]=o&255),h}function we(i){return z[i>>18&63]+z[i>>12&63]+z[i>>6&63]+z[i&63]}function me(i,o,c){for(var l,p=[],h=o;h<c;h+=3)l=(i[h]<<16&16711680)+(i[h+1]<<8&65280)+(i[h+2]&255),p.push(we(l));return p.join("")}function xe(i){for(var o,c=i.length,l=c%3,p=[],h=16383,d=0,g=c-l;d<g;d+=h)p.push(me(i,d,d+h>g?g:d+h));return l===1?(o=i[c-1],p.push(z[o>>2]+z[o<<4&63]+"==")):l===2&&(o=(i[c-2]<<8)+i[c-1],p.push(z[o>>10]+z[o>>4&63]+z[o<<2&63]+"=")),p.join("")}var Pt={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */Pt.read=function(i,o,c,l,p){var h,d,g=p*8-l-1,y=(1<<g)-1,m=y>>1,a=-7,F=c?p-1:0,v=c?-1:1,S=i[o+F];for(F+=v,h=S&(1<<-a)-1,S>>=-a,a+=g;a>0;h=h*256+i[o+F],F+=v,a-=8);for(d=h&(1<<-a)-1,h>>=-a,a+=l;a>0;d=d*256+i[o+F],F+=v,a-=8);if(h===0)h=1-m;else{if(h===y)return d?NaN:(S?-1:1)*(1/0);d=d+Math.pow(2,l),h=h-m}return(S?-1:1)*d*Math.pow(2,h-l)},Pt.write=function(i,o,c,l,p,h){var d,g,y,m=h*8-p-1,a=(1<<m)-1,F=a>>1,v=p===23?Math.pow(2,-24)-Math.pow(2,-77):0,S=l?0:h-1,N=l?1:-1,O=o<0||o===0&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(g=isNaN(o)?1:0,d=a):(d=Math.floor(Math.log(o)/Math.LN2),o*(y=Math.pow(2,-d))<1&&(d--,y*=2),d+F>=1?o+=v/y:o+=v*Math.pow(2,1-F),o*y>=2&&(d++,y/=2),d+F>=a?(g=0,d=a):d+F>=1?(g=(o*y-1)*Math.pow(2,p),d=d+F):(g=o*Math.pow(2,F-1)*Math.pow(2,p),d=0));p>=8;i[c+S]=g&255,S+=N,g/=256,p-=8);for(d=d<<p|g,m+=p;m>0;i[c+S]=d&255,S+=N,d/=256,m-=8);i[c+S-N]|=O*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(i){const o=V,c=Pt,l=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;i.Buffer=a,i.SlowBuffer=Bt,i.INSPECT_MAX_BYTES=50;const p=2147483647;i.kMaxLength=p;const{Uint8Array:h,ArrayBuffer:d,SharedArrayBuffer:g}=globalThis;a.TYPED_ARRAY_SUPPORT=y(),!a.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function y(){try{const n=new h(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,h.prototype),Object.setPrototypeOf(n,t),n.foo()===42}catch{return!1}}Object.defineProperty(a.prototype,"parent",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.buffer}}),Object.defineProperty(a.prototype,"offset",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.byteOffset}});function m(n){if(n>p)throw new RangeError('The value "'+n+'" is invalid for option "size"');const t=new h(n);return Object.setPrototypeOf(t,a.prototype),t}function a(n,t,e){if(typeof n=="number"){if(typeof t=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return N(n)}return F(n,t,e)}a.poolSize=8192;function F(n,t,e){if(typeof n=="string")return O(n,t);if(d.isView(n))return mt(n);if(n==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof n);if(it(n,d)||n&&it(n.buffer,d)||typeof g<"u"&&(it(n,g)||n&&it(n.buffer,g)))return et(n,t,e);if(typeof n=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const r=n.valueOf&&n.valueOf();if(r!=null&&r!==n)return a.from(r,t,e);const s=xt(n);if(s)return s;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof n[Symbol.toPrimitive]=="function")return a.from(n[Symbol.toPrimitive]("string"),t,e);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof n)}a.from=function(n,t,e){return F(n,t,e)},Object.setPrototypeOf(a.prototype,h.prototype),Object.setPrototypeOf(a,h);function v(n){if(typeof n!="number")throw new TypeError('"size" argument must be of type number');if(n<0)throw new RangeError('The value "'+n+'" is invalid for option "size"')}function S(n,t,e){return v(n),n<=0?m(n):t!==void 0?typeof e=="string"?m(n).fill(t,e):m(n).fill(t):m(n)}a.alloc=function(n,t,e){return S(n,t,e)};function N(n){return v(n),m(n<0?0:dt(n)|0)}a.allocUnsafe=function(n){return N(n)},a.allocUnsafeSlow=function(n){return N(n)};function O(n,t){if((typeof t!="string"||t==="")&&(t="utf8"),!a.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const e=bt(n,t)|0;let r=m(e);const s=r.write(n,t);return s!==e&&(r=r.slice(0,s)),r}function ft(n){const t=n.length<0?0:dt(n.length)|0,e=m(t);for(let r=0;r<t;r+=1)e[r]=n[r]&255;return e}function mt(n){if(it(n,h)){const t=new h(n);return et(t.buffer,t.byteOffset,t.byteLength)}return ft(n)}function et(n,t,e){if(t<0||n.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(n.byteLength<t+(e||0))throw new RangeError('"length" is outside of buffer bounds');let r;return t===void 0&&e===void 0?r=new h(n):e===void 0?r=new h(n,t):r=new h(n,t,e),Object.setPrototypeOf(r,a.prototype),r}function xt(n){if(a.isBuffer(n)){const t=dt(n.length)|0,e=m(t);return e.length===0||n.copy(e,0,0,t),e}if(n.length!==void 0)return typeof n.length!="number"||qt(n.length)?m(0):ft(n);if(n.type==="Buffer"&&Array.isArray(n.data))return ft(n.data)}function dt(n){if(n>=p)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+p.toString(16)+" bytes");return n|0}function Bt(n){return+n!=n&&(n=0),a.alloc(+n)}a.isBuffer=function(t){return t!=null&&t._isBuffer===!0&&t!==a.prototype},a.compare=function(t,e){if(it(t,h)&&(t=a.from(t,t.offset,t.byteLength)),it(e,h)&&(e=a.from(e,e.offset,e.byteLength)),!a.isBuffer(t)||!a.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let r=t.length,s=e.length;for(let u=0,f=Math.min(r,s);u<f;++u)if(t[u]!==e[u]){r=t[u],s=e[u];break}return r<s?-1:s<r?1:0},a.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(t.length===0)return a.alloc(0);let r;if(e===void 0)for(e=0,r=0;r<t.length;++r)e+=t[r].length;const s=a.allocUnsafe(e);let u=0;for(r=0;r<t.length;++r){let f=t[r];if(it(f,h))u+f.length>s.length?(a.isBuffer(f)||(f=a.from(f)),f.copy(s,u)):h.prototype.set.call(s,f,u);else if(a.isBuffer(f))f.copy(s,u);else throw new TypeError('"list" argument must be an Array of Buffers');u+=f.length}return s};function bt(n,t){if(a.isBuffer(n))return n.length;if(d.isView(n)||it(n,d))return n.byteLength;if(typeof n!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof n);const e=n.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&e===0)return 0;let s=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":return jt(n).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return e*2;case"hex":return e>>>1;case"base64":return he(n).length;default:if(s)return r?-1:jt(n).length;t=(""+t).toLowerCase(),s=!0}}a.byteLength=bt;function gt(n,t,e){let r=!1;if((t===void 0||t<0)&&(t=0),t>this.length||((e===void 0||e>this.length)&&(e=this.length),e<=0)||(e>>>=0,t>>>=0,e<=t))return"";for(n||(n="utf8");;)switch(n){case"hex":return nt(this,t,e);case"utf8":case"utf-8":return B(this,t,e);case"ascii":return P(this,t,e);case"latin1":case"binary":return L(this,t,e);case"base64":return I(this,t,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ot(this,t,e);default:if(r)throw new TypeError("Unknown encoding: "+n);n=(n+"").toLowerCase(),r=!0}}a.prototype._isBuffer=!0;function W(n,t,e){const r=n[t];n[t]=n[e],n[e]=r}a.prototype.swap16=function(){const t=this.length;if(t%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)W(this,e,e+1);return this},a.prototype.swap32=function(){const t=this.length;if(t%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)W(this,e,e+3),W(this,e+1,e+2);return this},a.prototype.swap64=function(){const t=this.length;if(t%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)W(this,e,e+7),W(this,e+1,e+6),W(this,e+2,e+5),W(this,e+3,e+4);return this},a.prototype.toString=function(){const t=this.length;return t===0?"":arguments.length===0?B(this,0,t):gt.apply(this,arguments)},a.prototype.toLocaleString=a.prototype.toString,a.prototype.equals=function(t){if(!a.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t?!0:a.compare(this,t)===0},a.prototype.inspect=function(){let t="";const e=i.INSPECT_MAX_BYTES;return t=this.toString("hex",0,e).replace(/(.{2})/g,"$1 ").trim(),this.length>e&&(t+=" ... "),"<Buffer "+t+">"},l&&(a.prototype[l]=a.prototype.inspect),a.prototype.compare=function(t,e,r,s,u){if(it(t,h)&&(t=a.from(t,t.offset,t.byteLength)),!a.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(e===void 0&&(e=0),r===void 0&&(r=t?t.length:0),s===void 0&&(s=0),u===void 0&&(u=this.length),e<0||r>t.length||s<0||u>this.length)throw new RangeError("out of range index");if(s>=u&&e>=r)return 0;if(s>=u)return-1;if(e>=r)return 1;if(e>>>=0,r>>>=0,s>>>=0,u>>>=0,this===t)return 0;let f=u-s,U=r-e;const M=Math.min(f,U),T=this.slice(s,u),_=t.slice(e,r);for(let R=0;R<M;++R)if(T[R]!==_[R]){f=T[R],U=_[R];break}return f<U?-1:U<f?1:0};function j(n,t,e,r,s){if(n.length===0)return-1;if(typeof e=="string"?(r=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,qt(e)&&(e=s?0:n.length-1),e<0&&(e=n.length+e),e>=n.length){if(s)return-1;e=n.length-1}else if(e<0)if(s)e=0;else return-1;if(typeof t=="string"&&(t=a.from(t,r)),a.isBuffer(t))return t.length===0?-1:J(n,t,e,r,s);if(typeof t=="number")return t=t&255,typeof h.prototype.indexOf=="function"?s?h.prototype.indexOf.call(n,t,e):h.prototype.lastIndexOf.call(n,t,e):J(n,[t],e,r,s);throw new TypeError("val must be string, number or Buffer")}function J(n,t,e,r,s){let u=1,f=n.length,U=t.length;if(r!==void 0&&(r=String(r).toLowerCase(),r==="ucs2"||r==="ucs-2"||r==="utf16le"||r==="utf-16le")){if(n.length<2||t.length<2)return-1;u=2,f/=2,U/=2,e/=2}function M(_,R){return u===1?_[R]:_.readUInt16BE(R*u)}let T;if(s){let _=-1;for(T=e;T<f;T++)if(M(n,T)===M(t,_===-1?0:T-_)){if(_===-1&&(_=T),T-_+1===U)return _*u}else _!==-1&&(T-=T-_),_=-1}else for(e+U>f&&(e=f-U),T=e;T>=0;T--){let _=!0;for(let R=0;R<U;R++)if(M(n,T+R)!==M(t,R)){_=!1;break}if(_)return T}return-1}a.prototype.includes=function(t,e,r){return this.indexOf(t,e,r)!==-1},a.prototype.indexOf=function(t,e,r){return j(this,t,e,r,!0)},a.prototype.lastIndexOf=function(t,e,r){return j(this,t,e,r,!1)};function yt(n,t,e,r){e=Number(e)||0;const s=n.length-e;r?(r=Number(r),r>s&&(r=s)):r=s;const u=t.length;r>u/2&&(r=u/2);let f;for(f=0;f<r;++f){const U=parseInt(t.substr(f*2,2),16);if(qt(U))return f;n[e+f]=U}return f}function E(n,t,e,r){return Tt(jt(t,n.length-e),n,e,r)}function w(n,t,e,r){return Tt(Xe(t),n,e,r)}function x(n,t,e,r){return Tt(he(t),n,e,r)}function b(n,t,e,r){return Tt(Ze(t,n.length-e),n,e,r)}a.prototype.write=function(t,e,r,s){if(e===void 0)s="utf8",r=this.length,e=0;else if(r===void 0&&typeof e=="string")s=e,r=this.length,e=0;else if(isFinite(e))e=e>>>0,isFinite(r)?(r=r>>>0,s===void 0&&(s="utf8")):(s=r,r=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const u=this.length-e;if((r===void 0||r>u)&&(r=u),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");s||(s="utf8");let f=!1;for(;;)switch(s){case"hex":return yt(this,t,e,r);case"utf8":case"utf-8":return E(this,t,e,r);case"ascii":case"latin1":case"binary":return w(this,t,e,r);case"base64":return x(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return b(this,t,e,r);default:if(f)throw new TypeError("Unknown encoding: "+s);s=(""+s).toLowerCase(),f=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function I(n,t,e){return t===0&&e===n.length?o.fromByteArray(n):o.fromByteArray(n.slice(t,e))}function B(n,t,e){e=Math.min(n.length,e);const r=[];let s=t;for(;s<e;){const u=n[s];let f=null,U=u>239?4:u>223?3:u>191?2:1;if(s+U<=e){let M,T,_,R;switch(U){case 1:u<128&&(f=u);break;case 2:M=n[s+1],(M&192)===128&&(R=(u&31)<<6|M&63,R>127&&(f=R));break;case 3:M=n[s+1],T=n[s+2],(M&192)===128&&(T&192)===128&&(R=(u&15)<<12|(M&63)<<6|T&63,R>2047&&(R<55296||R>57343)&&(f=R));break;case 4:M=n[s+1],T=n[s+2],_=n[s+3],(M&192)===128&&(T&192)===128&&(_&192)===128&&(R=(u&15)<<18|(M&63)<<12|(T&63)<<6|_&63,R>65535&&R<1114112&&(f=R))}}f===null?(f=65533,U=1):f>65535&&(f-=65536,r.push(f>>>10&1023|55296),f=56320|f&1023),r.push(f),s+=U}return $(r)}const A=4096;function $(n){const t=n.length;if(t<=A)return String.fromCharCode.apply(String,n);let e="",r=0;for(;r<t;)e+=String.fromCharCode.apply(String,n.slice(r,r+=A));return e}function P(n,t,e){let r="";e=Math.min(n.length,e);for(let s=t;s<e;++s)r+=String.fromCharCode(n[s]&127);return r}function L(n,t,e){let r="";e=Math.min(n.length,e);for(let s=t;s<e;++s)r+=String.fromCharCode(n[s]);return r}function nt(n,t,e){const r=n.length;(!t||t<0)&&(t=0),(!e||e<0||e>r)&&(e=r);let s="";for(let u=t;u<e;++u)s+=Qe[n[u]];return s}function ot(n,t,e){const r=n.slice(t,e);let s="";for(let u=0;u<r.length-1;u+=2)s+=String.fromCharCode(r[u]+r[u+1]*256);return s}a.prototype.slice=function(t,e){const r=this.length;t=~~t,e=e===void 0?r:~~e,t<0?(t+=r,t<0&&(t=0)):t>r&&(t=r),e<0?(e+=r,e<0&&(e=0)):e>r&&(e=r),e<t&&(e=t);const s=this.subarray(t,e);return Object.setPrototypeOf(s,a.prototype),s};function C(n,t,e){if(n%1!==0||n<0)throw new RangeError("offset is not uint");if(n+t>e)throw new RangeError("Trying to access beyond buffer length")}a.prototype.readUintLE=a.prototype.readUIntLE=function(t,e,r){t=t>>>0,e=e>>>0,r||C(t,e,this.length);let s=this[t],u=1,f=0;for(;++f<e&&(u*=256);)s+=this[t+f]*u;return s},a.prototype.readUintBE=a.prototype.readUIntBE=function(t,e,r){t=t>>>0,e=e>>>0,r||C(t,e,this.length);let s=this[t+--e],u=1;for(;e>0&&(u*=256);)s+=this[t+--e]*u;return s},a.prototype.readUint8=a.prototype.readUInt8=function(t,e){return t=t>>>0,e||C(t,1,this.length),this[t]},a.prototype.readUint16LE=a.prototype.readUInt16LE=function(t,e){return t=t>>>0,e||C(t,2,this.length),this[t]|this[t+1]<<8},a.prototype.readUint16BE=a.prototype.readUInt16BE=function(t,e){return t=t>>>0,e||C(t,2,this.length),this[t]<<8|this[t+1]},a.prototype.readUint32LE=a.prototype.readUInt32LE=function(t,e){return t=t>>>0,e||C(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+this[t+3]*16777216},a.prototype.readUint32BE=a.prototype.readUInt32BE=function(t,e){return t=t>>>0,e||C(t,4,this.length),this[t]*16777216+(this[t+1]<<16|this[t+2]<<8|this[t+3])},a.prototype.readBigUInt64LE=ht(function(t){t=t>>>0,q(t,"offset");const e=this[t],r=this[t+7];(e===void 0||r===void 0)&&St(t,this.length-8);const s=e+this[++t]*2**8+this[++t]*2**16+this[++t]*2**24,u=this[++t]+this[++t]*2**8+this[++t]*2**16+r*2**24;return BigInt(s)+(BigInt(u)<<BigInt(32))}),a.prototype.readBigUInt64BE=ht(function(t){t=t>>>0,q(t,"offset");const e=this[t],r=this[t+7];(e===void 0||r===void 0)&&St(t,this.length-8);const s=e*2**24+this[++t]*2**16+this[++t]*2**8+this[++t],u=this[++t]*2**24+this[++t]*2**16+this[++t]*2**8+r;return(BigInt(s)<<BigInt(32))+BigInt(u)}),a.prototype.readIntLE=function(t,e,r){t=t>>>0,e=e>>>0,r||C(t,e,this.length);let s=this[t],u=1,f=0;for(;++f<e&&(u*=256);)s+=this[t+f]*u;return u*=128,s>=u&&(s-=Math.pow(2,8*e)),s},a.prototype.readIntBE=function(t,e,r){t=t>>>0,e=e>>>0,r||C(t,e,this.length);let s=e,u=1,f=this[t+--s];for(;s>0&&(u*=256);)f+=this[t+--s]*u;return u*=128,f>=u&&(f-=Math.pow(2,8*e)),f},a.prototype.readInt8=function(t,e){return t=t>>>0,e||C(t,1,this.length),this[t]&128?(255-this[t]+1)*-1:this[t]},a.prototype.readInt16LE=function(t,e){t=t>>>0,e||C(t,2,this.length);const r=this[t]|this[t+1]<<8;return r&32768?r|4294901760:r},a.prototype.readInt16BE=function(t,e){t=t>>>0,e||C(t,2,this.length);const r=this[t+1]|this[t]<<8;return r&32768?r|4294901760:r},a.prototype.readInt32LE=function(t,e){return t=t>>>0,e||C(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},a.prototype.readInt32BE=function(t,e){return t=t>>>0,e||C(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},a.prototype.readBigInt64LE=ht(function(t){t=t>>>0,q(t,"offset");const e=this[t],r=this[t+7];(e===void 0||r===void 0)&&St(t,this.length-8);const s=this[t+4]+this[t+5]*2**8+this[t+6]*2**16+(r<<24);return(BigInt(s)<<BigInt(32))+BigInt(e+this[++t]*2**8+this[++t]*2**16+this[++t]*2**24)}),a.prototype.readBigInt64BE=ht(function(t){t=t>>>0,q(t,"offset");const e=this[t],r=this[t+7];(e===void 0||r===void 0)&&St(t,this.length-8);const s=(e<<24)+this[++t]*2**16+this[++t]*2**8+this[++t];return(BigInt(s)<<BigInt(32))+BigInt(this[++t]*2**24+this[++t]*2**16+this[++t]*2**8+r)}),a.prototype.readFloatLE=function(t,e){return t=t>>>0,e||C(t,4,this.length),c.read(this,t,!0,23,4)},a.prototype.readFloatBE=function(t,e){return t=t>>>0,e||C(t,4,this.length),c.read(this,t,!1,23,4)},a.prototype.readDoubleLE=function(t,e){return t=t>>>0,e||C(t,8,this.length),c.read(this,t,!0,52,8)},a.prototype.readDoubleBE=function(t,e){return t=t>>>0,e||C(t,8,this.length),c.read(this,t,!1,52,8)};function H(n,t,e,r,s,u){if(!a.isBuffer(n))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>s||t<u)throw new RangeError('"value" argument is out of bounds');if(e+r>n.length)throw new RangeError("Index out of range")}a.prototype.writeUintLE=a.prototype.writeUIntLE=function(t,e,r,s){if(t=+t,e=e>>>0,r=r>>>0,!s){const U=Math.pow(2,8*r)-1;H(this,t,e,r,U,0)}let u=1,f=0;for(this[e]=t&255;++f<r&&(u*=256);)this[e+f]=t/u&255;return e+r},a.prototype.writeUintBE=a.prototype.writeUIntBE=function(t,e,r,s){if(t=+t,e=e>>>0,r=r>>>0,!s){const U=Math.pow(2,8*r)-1;H(this,t,e,r,U,0)}let u=r-1,f=1;for(this[e+u]=t&255;--u>=0&&(f*=256);)this[e+u]=t/f&255;return e+r},a.prototype.writeUint8=a.prototype.writeUInt8=function(t,e,r){return t=+t,e=e>>>0,r||H(this,t,e,1,255,0),this[e]=t&255,e+1},a.prototype.writeUint16LE=a.prototype.writeUInt16LE=function(t,e,r){return t=+t,e=e>>>0,r||H(this,t,e,2,65535,0),this[e]=t&255,this[e+1]=t>>>8,e+2},a.prototype.writeUint16BE=a.prototype.writeUInt16BE=function(t,e,r){return t=+t,e=e>>>0,r||H(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=t&255,e+2},a.prototype.writeUint32LE=a.prototype.writeUInt32LE=function(t,e,r){return t=+t,e=e>>>0,r||H(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=t&255,e+4},a.prototype.writeUint32BE=a.prototype.writeUInt32BE=function(t,e,r){return t=+t,e=e>>>0,r||H(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=t&255,e+4};function vt(n,t,e,r,s){Ct(t,r,s,n,e,7);let u=Number(t&BigInt(4294967295));n[e++]=u,u=u>>8,n[e++]=u,u=u>>8,n[e++]=u,u=u>>8,n[e++]=u;let f=Number(t>>BigInt(32)&BigInt(4294967295));return n[e++]=f,f=f>>8,n[e++]=f,f=f>>8,n[e++]=f,f=f>>8,n[e++]=f,e}function D(n,t,e,r,s){Ct(t,r,s,n,e,7);let u=Number(t&BigInt(4294967295));n[e+7]=u,u=u>>8,n[e+6]=u,u=u>>8,n[e+5]=u,u=u>>8,n[e+4]=u;let f=Number(t>>BigInt(32)&BigInt(4294967295));return n[e+3]=f,f=f>>8,n[e+2]=f,f=f>>8,n[e+1]=f,f=f>>8,n[e]=f,e+8}a.prototype.writeBigUInt64LE=ht(function(t,e=0){return vt(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))}),a.prototype.writeBigUInt64BE=ht(function(t,e=0){return D(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))}),a.prototype.writeIntLE=function(t,e,r,s){if(t=+t,e=e>>>0,!s){const M=Math.pow(2,8*r-1);H(this,t,e,r,M-1,-M)}let u=0,f=1,U=0;for(this[e]=t&255;++u<r&&(f*=256);)t<0&&U===0&&this[e+u-1]!==0&&(U=1),this[e+u]=(t/f>>0)-U&255;return e+r},a.prototype.writeIntBE=function(t,e,r,s){if(t=+t,e=e>>>0,!s){const M=Math.pow(2,8*r-1);H(this,t,e,r,M-1,-M)}let u=r-1,f=1,U=0;for(this[e+u]=t&255;--u>=0&&(f*=256);)t<0&&U===0&&this[e+u+1]!==0&&(U=1),this[e+u]=(t/f>>0)-U&255;return e+r},a.prototype.writeInt8=function(t,e,r){return t=+t,e=e>>>0,r||H(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=t&255,e+1},a.prototype.writeInt16LE=function(t,e,r){return t=+t,e=e>>>0,r||H(this,t,e,2,32767,-32768),this[e]=t&255,this[e+1]=t>>>8,e+2},a.prototype.writeInt16BE=function(t,e,r){return t=+t,e=e>>>0,r||H(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=t&255,e+2},a.prototype.writeInt32LE=function(t,e,r){return t=+t,e=e>>>0,r||H(this,t,e,4,2147483647,-2147483648),this[e]=t&255,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},a.prototype.writeInt32BE=function(t,e,r){return t=+t,e=e>>>0,r||H(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=t&255,e+4},a.prototype.writeBigInt64LE=ht(function(t,e=0){return vt(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),a.prototype.writeBigInt64BE=ht(function(t,e=0){return D(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function tt(n,t,e,r,s,u){if(e+r>n.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function K(n,t,e,r,s){return t=+t,e=e>>>0,s||tt(n,t,e,4),c.write(n,t,e,r,23,4),e+4}a.prototype.writeFloatLE=function(t,e,r){return K(this,t,e,!0,r)},a.prototype.writeFloatBE=function(t,e,r){return K(this,t,e,!1,r)};function G(n,t,e,r,s){return t=+t,e=e>>>0,s||tt(n,t,e,8),c.write(n,t,e,r,52,8),e+8}a.prototype.writeDoubleLE=function(t,e,r){return G(this,t,e,!0,r)},a.prototype.writeDoubleBE=function(t,e,r){return G(this,t,e,!1,r)},a.prototype.copy=function(t,e,r,s){if(!a.isBuffer(t))throw new TypeError("argument should be a Buffer");if(r||(r=0),!s&&s!==0&&(s=this.length),e>=t.length&&(e=t.length),e||(e=0),s>0&&s<r&&(s=r),s===r||t.length===0||this.length===0)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(s<0)throw new RangeError("sourceEnd out of bounds");s>this.length&&(s=this.length),t.length-e<s-r&&(s=t.length-e+r);const u=s-r;return this===t&&typeof h.prototype.copyWithin=="function"?this.copyWithin(e,r,s):h.prototype.set.call(t,this.subarray(r,s),e),u},a.prototype.fill=function(t,e,r,s){if(typeof t=="string"){if(typeof e=="string"?(s=e,e=0,r=this.length):typeof r=="string"&&(s=r,r=this.length),s!==void 0&&typeof s!="string")throw new TypeError("encoding must be a string");if(typeof s=="string"&&!a.isEncoding(s))throw new TypeError("Unknown encoding: "+s);if(t.length===1){const f=t.charCodeAt(0);(s==="utf8"&&f<128||s==="latin1")&&(t=f)}}else typeof t=="number"?t=t&255:typeof t=="boolean"&&(t=Number(t));if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;e=e>>>0,r=r===void 0?this.length:r>>>0,t||(t=0);let u;if(typeof t=="number")for(u=e;u<r;++u)this[u]=t;else{const f=a.isBuffer(t)?t:a.from(t,s),U=f.length;if(U===0)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(u=0;u<r-e;++u)this[u+e]=f[u%U]}return this};const Z={};function lt(n,t,e){Z[n]=class extends e{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${n}]`,this.stack,delete this.name}get code(){return n}set code(s){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:s,writable:!0})}toString(){return`${this.name} [${n}]: ${this.message}`}}}lt("ERR_BUFFER_OUT_OF_BOUNDS",function(n){return n?`${n} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),lt("ERR_INVALID_ARG_TYPE",function(n,t){return`The "${n}" argument must be of type number. Received type ${typeof t}`},TypeError),lt("ERR_OUT_OF_RANGE",function(n,t,e){let r=`The value of "${n}" is out of range.`,s=e;return Number.isInteger(e)&&Math.abs(e)>2**32?s=rt(String(e)):typeof e=="bigint"&&(s=String(e),(e>BigInt(2)**BigInt(32)||e<-(BigInt(2)**BigInt(32)))&&(s=rt(s)),s+="n"),r+=` It must be ${t}. Received ${s}`,r},RangeError);function rt(n){let t="",e=n.length;const r=n[0]==="-"?1:0;for(;e>=r+4;e-=3)t=`_${n.slice(e-3,e)}${t}`;return`${n.slice(0,e)}${t}`}function At(n,t,e){q(t,"offset"),(n[t]===void 0||n[t+e]===void 0)&&St(t,n.length-(e+1))}function Ct(n,t,e,r,s,u){if(n>e||n<t){const f=typeof t=="bigint"?"n":"";let U;throw t===0||t===BigInt(0)?U=`>= 0${f} and < 2${f} ** ${(u+1)*8}${f}`:U=`>= -(2${f} ** ${(u+1)*8-1}${f}) and < 2 ** ${(u+1)*8-1}${f}`,new Z.ERR_OUT_OF_RANGE("value",U,n)}At(r,s,u)}function q(n,t){if(typeof n!="number")throw new Z.ERR_INVALID_ARG_TYPE(t,"number",n)}function St(n,t,e){throw Math.floor(n)!==n?(q(n,e),new Z.ERR_OUT_OF_RANGE("offset","an integer",n)):t<0?new Z.ERR_BUFFER_OUT_OF_BOUNDS:new Z.ERR_OUT_OF_RANGE("offset",`>= 0 and <= ${t}`,n)}const Ve=/[^+/0-9A-Za-z-_]/g;function Ye(n){if(n=n.split("=")[0],n=n.trim().replace(Ve,""),n.length<2)return"";for(;n.length%4!==0;)n=n+"=";return n}function jt(n,t){t=t||1/0;let e;const r=n.length;let s=null;const u=[];for(let f=0;f<r;++f){if(e=n.charCodeAt(f),e>55295&&e<57344){if(!s){if(e>56319){(t-=3)>-1&&u.push(239,191,189);continue}else if(f+1===r){(t-=3)>-1&&u.push(239,191,189);continue}s=e;continue}if(e<56320){(t-=3)>-1&&u.push(239,191,189),s=e;continue}e=(s-55296<<10|e-56320)+65536}else s&&(t-=3)>-1&&u.push(239,191,189);if(s=null,e<128){if((t-=1)<0)break;u.push(e)}else if(e<2048){if((t-=2)<0)break;u.push(e>>6|192,e&63|128)}else if(e<65536){if((t-=3)<0)break;u.push(e>>12|224,e>>6&63|128,e&63|128)}else if(e<1114112){if((t-=4)<0)break;u.push(e>>18|240,e>>12&63|128,e>>6&63|128,e&63|128)}else throw new Error("Invalid code point")}return u}function Xe(n){const t=[];for(let e=0;e<n.length;++e)t.push(n.charCodeAt(e)&255);return t}function Ze(n,t){let e,r,s;const u=[];for(let f=0;f<n.length&&!((t-=2)<0);++f)e=n.charCodeAt(f),r=e>>8,s=e%256,u.push(s),u.push(r);return u}function he(n){return o.toByteArray(Ye(n))}function Tt(n,t,e,r){let s;for(s=0;s<r&&!(s+e>=t.length||s>=n.length);++s)t[s+e]=n[s];return s}function it(n,t){return n instanceof t||n!=null&&n.constructor!=null&&n.constructor.name!=null&&n.constructor.name===t.name}function qt(n){return n!==n}const Qe=function(){const n="0123456789abcdef",t=new Array(256);for(let e=0;e<16;++e){const r=e*16;for(let s=0;s<16;++s)t[r+s]=n[e]+n[s]}return t}();function ht(n){return typeof BigInt>"u"?tn:n}function tn(){throw new Error("BigInt not supported")}})(st);const Lt=st.Buffer;var be=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ee={exports:{}};(function(i,o){(function(c,l){i.exports=l()})(be,function(){/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var c=Object.prototype.toString,l=Array.isArray||function(w){return c.call(w)==="[object Array]"};function p(E){return typeof E=="function"}function h(E){return l(E)?"array":typeof E}function d(E){return E.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function g(E,w){return E!=null&&typeof E=="object"&&w in E}function y(E,w){return E!=null&&typeof E!="object"&&E.hasOwnProperty&&E.hasOwnProperty(w)}var m=RegExp.prototype.test;function a(E,w){return m.call(E,w)}var F=/\S/;function v(E){return!a(F,E)}var S={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function N(E){return String(E).replace(/[&<>"'`=\/]/g,function(x){return S[x]})}var O=/\s*/,ft=/\s+/,mt=/\s*=/,et=/\s*\}/,xt=/#|\^|\/|>|\{|&|=|!/;function dt(E,w){if(!E)return[];var x=!1,b=[],I=[],B=[],A=!1,$=!1,P="",L=0;function nt(){if(A&&!$)for(;B.length;)delete I[B.pop()];else B=[];A=!1,$=!1}var ot,C,H;function vt(q){if(typeof q=="string"&&(q=q.split(ft,2)),!l(q)||q.length!==2)throw new Error("Invalid tags: "+q);ot=new RegExp(d(q[0])+"\\s*"),C=new RegExp("\\s*"+d(q[1])),H=new RegExp("\\s*"+d("}"+q[1]))}vt(w||J.tags);for(var D=new gt(E),tt,K,G,Z,lt,rt;!D.eos();){if(tt=D.pos,G=D.scanUntil(ot),G)for(var At=0,Ct=G.length;At<Ct;++At)Z=G.charAt(At),v(Z)?(B.push(I.length),P+=Z):($=!0,x=!0,P+=" "),I.push(["text",Z,tt,tt+1]),tt+=1,Z===`
`&&(nt(),P="",L=0,x=!1);if(!D.scan(ot))break;if(A=!0,K=D.scan(xt)||"name",D.scan(O),K==="="?(G=D.scanUntil(mt),D.scan(mt),D.scanUntil(C)):K==="{"?(G=D.scanUntil(H),D.scan(et),D.scanUntil(C),K="&"):G=D.scanUntil(C),!D.scan(C))throw new Error("Unclosed tag at "+D.pos);if(K==">"?lt=[K,G,tt,D.pos,P,L,x]:lt=[K,G,tt,D.pos],L++,I.push(lt),K==="#"||K==="^")b.push(lt);else if(K==="/"){if(rt=b.pop(),!rt)throw new Error('Unopened section "'+G+'" at '+tt);if(rt[1]!==G)throw new Error('Unclosed section "'+rt[1]+'" at '+tt)}else K==="name"||K==="{"||K==="&"?$=!0:K==="="&&vt(G)}if(nt(),rt=b.pop(),rt)throw new Error('Unclosed section "'+rt[1]+'" at '+D.pos);return bt(Bt(I))}function Bt(E){for(var w=[],x,b,I=0,B=E.length;I<B;++I)x=E[I],x&&(x[0]==="text"&&b&&b[0]==="text"?(b[1]+=x[1],b[3]=x[3]):(w.push(x),b=x));return w}function bt(E){for(var w=[],x=w,b=[],I,B,A=0,$=E.length;A<$;++A)switch(I=E[A],I[0]){case"#":case"^":x.push(I),b.push(I),x=I[4]=[];break;case"/":B=b.pop(),B[5]=I[2],x=b.length>0?b[b.length-1][4]:w;break;default:x.push(I)}return w}function gt(E){this.string=E,this.tail=E,this.pos=0}gt.prototype.eos=function(){return this.tail===""},gt.prototype.scan=function(w){var x=this.tail.match(w);if(!x||x.index!==0)return"";var b=x[0];return this.tail=this.tail.substring(b.length),this.pos+=b.length,b},gt.prototype.scanUntil=function(w){var x=this.tail.search(w),b;switch(x){case-1:b=this.tail,this.tail="";break;case 0:b="";break;default:b=this.tail.substring(0,x),this.tail=this.tail.substring(x)}return this.pos+=b.length,b};function W(E,w){this.view=E,this.cache={".":this.view},this.parent=w}W.prototype.push=function(w){return new W(w,this)},W.prototype.lookup=function(w){var x=this.cache,b;if(x.hasOwnProperty(w))b=x[w];else{for(var I=this,B,A,$,P=!1;I;){if(w.indexOf(".")>0)for(B=I.view,A=w.split("."),$=0;B!=null&&$<A.length;)$===A.length-1&&(P=g(B,A[$])||y(B,A[$])),B=B[A[$++]];else B=I.view[w],P=g(I.view,w);if(P){b=B;break}I=I.parent}x[w]=b}return p(b)&&(b=b.call(this.view)),b};function j(){this.templateCache={_cache:{},set:function(w,x){this._cache[w]=x},get:function(w){return this._cache[w]},clear:function(){this._cache={}}}}j.prototype.clearCache=function(){typeof this.templateCache<"u"&&this.templateCache.clear()},j.prototype.parse=function(w,x){var b=this.templateCache,I=w+":"+(x||J.tags).join(":"),B=typeof b<"u",A=B?b.get(I):void 0;return A==null&&(A=dt(w,x),B&&b.set(I,A)),A},j.prototype.render=function(w,x,b,I){var B=this.parse(w,I),A=x instanceof W?x:new W(x,void 0);return this.renderTokens(B,A,b,w,I)},j.prototype.renderTokens=function(w,x,b,I,B){for(var A="",$,P,L,nt=0,ot=w.length;nt<ot;++nt)L=void 0,$=w[nt],P=$[0],P==="#"?L=this.renderSection($,x,b,I):P==="^"?L=this.renderInverted($,x,b,I):P===">"?L=this.renderPartial($,x,b,B):P==="&"?L=this.unescapedValue($,x):P==="name"?L=this.escapedValue($,x):P==="text"&&(L=this.rawValue($)),L!==void 0&&(A+=L);return A},j.prototype.renderSection=function(w,x,b,I){var B=this,A="",$=x.lookup(w[1]);function P(ot){return B.render(ot,x,b)}if($){if(l($))for(var L=0,nt=$.length;L<nt;++L)A+=this.renderTokens(w[4],x.push($[L]),b,I);else if(typeof $=="object"||typeof $=="string"||typeof $=="number")A+=this.renderTokens(w[4],x.push($),b,I);else if(p($)){if(typeof I!="string")throw new Error("Cannot use higher-order sections without the original template");$=$.call(x.view,I.slice(w[3],w[5]),P),$!=null&&(A+=$)}else A+=this.renderTokens(w[4],x,b,I);return A}},j.prototype.renderInverted=function(w,x,b,I){var B=x.lookup(w[1]);if(!B||l(B)&&B.length===0)return this.renderTokens(w[4],x,b,I)},j.prototype.indentPartial=function(w,x,b){for(var I=x.replace(/[^ \t]/g,""),B=w.split(`
`),A=0;A<B.length;A++)B[A].length&&(A>0||!b)&&(B[A]=I+B[A]);return B.join(`
`)},j.prototype.renderPartial=function(w,x,b,I){if(b){var B=p(b)?b(w[1]):b[w[1]];if(B!=null){var A=w[6],$=w[5],P=w[4],L=B;return $==0&&P&&(L=this.indentPartial(B,P,A)),this.renderTokens(this.parse(L,I),x,b,L)}}},j.prototype.unescapedValue=function(w,x){var b=x.lookup(w[1]);if(b!=null)return b},j.prototype.escapedValue=function(w,x){var b=x.lookup(w[1]);if(b!=null)return J.escape(b)},j.prototype.rawValue=function(w){return w[1]};var J={name:"mustache.js",version:"4.0.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(E){yt.templateCache=E},get templateCache(){return yt.templateCache}},yt=new j;return J.clearCache=function(){return yt.clearCache()},J.parse=function(w,x){return yt.parse(w,x)},J.render=function(w,x,b,I){if(typeof w!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+h(w)+'" was given as the first argument for mustache#render(template, view, partials)');return yt.render(w,x,b,I)},J.escape=N,J.Scanner=gt,J.Context=W,J.Writer=j,J})})(Ee);/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */function Ie(i){return i instanceof Uint8Array||ArrayBuffer.isView(i)&&i.constructor.name==="Uint8Array"}function Gt(i,o){return Array.isArray(o)?o.length===0?!0:i?o.every(c=>typeof c=="string"):o.every(c=>Number.isSafeInteger(c)):!1}function Mt(i,o){if(typeof o!="string")throw new Error(`${i}: string expected`);return!0}function Wt(i){if(!Number.isSafeInteger(i))throw new Error(`invalid integer: ${i}`)}function _t(i){if(!Array.isArray(i))throw new Error("array expected")}function Jt(i,o){if(!Gt(!0,o))throw new Error(`${i}: array of strings expected`)}function Be(i,o){if(!Gt(!1,o))throw new Error(`${i}: array of numbers expected`)}function ve(...i){const o=h=>h,c=(h,d)=>g=>h(d(g)),l=i.map(h=>h.encode).reduceRight(c,o),p=i.map(h=>h.decode).reduce(c,o);return{encode:l,decode:p}}function Ae(i){const o=typeof i=="string"?i.split(""):i,c=o.length;Jt("alphabet",o);const l=new Map(o.map((p,h)=>[p,h]));return{encode:p=>(_t(p),p.map(h=>{if(!Number.isSafeInteger(h)||h<0||h>=c)throw new Error(`alphabet.encode: digit index outside alphabet "${h}". Allowed: ${i}`);return o[h]})),decode:p=>(_t(p),p.map(h=>{Mt("alphabet.decode",h);const d=l.get(h);if(d===void 0)throw new Error(`Unknown letter: "${h}". Allowed: ${i}`);return d}))}}function Se(i=""){return Mt("join",i),{encode:o=>(Jt("join.decode",o),o.join(i)),decode:o=>(Mt("join.decode",o),o.split(i))}}function Vt(i,o,c){if(o<2)throw new Error(`convertRadix: invalid from=${o}, base cannot be less than 2`);if(c<2)throw new Error(`convertRadix: invalid to=${c}, base cannot be less than 2`);if(_t(i),!i.length)return[];let l=0;const p=[],h=Array.from(i,g=>{if(Wt(g),g<0||g>=o)throw new Error(`invalid integer: ${g}`);return g}),d=h.length;for(;;){let g=0,y=!0;for(let m=l;m<d;m++){const a=h[m],F=o*g,v=F+a;if(!Number.isSafeInteger(v)||F/o!==g||v-a!==F)throw new Error("convertRadix: carry overflow");const S=v/c;g=v%c;const N=Math.floor(S);if(h[m]=N,!Number.isSafeInteger(N)||N*c+g!==v)throw new Error("convertRadix: carry overflow");if(y)N?y=!1:l=m;else continue}if(p.push(g),y)break}for(let g=0;g<i.length-1&&i[g]===0;g++)p.push(0);return p.reverse()}function $e(i){Wt(i);const o=2**8;return{encode:c=>{if(!Ie(c))throw new Error("radix.encode input should be Uint8Array");return Vt(Array.from(c),o,i)},decode:c=>(Be("radix.decode",c),Uint8Array.from(Vt(c,i,o)))}}const Fe=(i=>ve($e(58),Ae(i),Se("")))("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");var Ue=24;10n**BigInt(Ue);function ke(i){return Fe.decode(i)}const Dt="m/44'/397'/0'/0'/1'";function Et(i,o){return i==="sign-with-ledger"?`sign-with-ledger --seed-phrase-hd-path '${k(o||Dt)}'`:"sign-with-keychain"}function ct(i){if(i==="0")return"0";const o=24,c=i.padStart(o+1,"0"),l=c.slice(0,-o)||"0",p=c.slice(-o).replace(/0+$/,"");return p?`${l}.${p}`:l}function Yt(i){if(i==="0")return"0";const o=12,c=i.padStart(o+1,"0"),l=c.slice(0,-o)||"0",p=c.slice(-o).replace(/0+$/,"");return p?`${l}.${p}`:l}function k(i){return i.replace(/'/g,"'\\''")}function Re(i){if(i instanceof Uint8Array)return i;if(i instanceof ArrayBuffer)return new Uint8Array(i);if(ArrayBuffer.isView(i)){const o=i;return new Uint8Array(o.buffer,o.byteOffset,o.byteLength)}return null}function Ce(i){let o="";for(let l=0;l<i.length;l+=32768)o+=String.fromCharCode(...i.subarray(l,l+32768));return btoa(o)}function Xt(i){const o=Re(i);return o?`base64-args '${Ce(o)}'`:`json-args '${k(JSON.stringify(i))}'`}function Zt({accountId:i,addFunctionCallKey:o,network:c,signingMethod:l="sign-with-keychain",ledgerHdPath:p}){const{contractId:h,publicKey:d,allowMethods:g,gasAllowance:y}=o;let m="'0.25 NEAR'";y&&(y.kind==="unlimited"?m="'unlimited'":m=`'${ct(y.amount)} NEAR'`);const a=["near account"];return a.push(`add-key '${k(i)}'`),a.push("grant-function-call-access"),a.push(`--allowance ${m}`),a.push(`--contract-account-id '${k(h)}'`),g.anyMethod||g.methodNames.length===0?a.push("--function-names ''"):a.push(`--function-names '${k(g.methodNames.join(", "))}'`),a.push(`use-manually-provided-public-key ${d}`),a.push(`network-config ${c}`),a.push(Et(l,p)),a.join(` \\
    `)}function Qt(i){switch(i.type){case"CreateAccount":return"add-action create-account";case"Transfer":return`add-action transfer '${ct(i.params.deposit)} NEAR'`;case"FunctionCall":return[`add-action function-call '${k(i.params.methodName)}'`,Xt(i.params.args),`prepaid-gas '${Yt(i.params.gas)} Tgas'`,`attached-deposit '${ct(i.params.deposit)} NEAR'`].join(" ");case"AddKey":if(i.params.accessKey.permission==="FullAccess")return`add-action add-key grant-full-access use-manually-provided-public-key ${i.params.publicKey}`;{const o=i.params.accessKey.permission,c=["add-action add-key grant-function-call-access"];return o.allowance&&c.push(`--allowance '${ct(o.allowance)} NEAR'`),c.push(`--contract-account-id '${k(o.receiverId)}'`),o.methodNames&&o.methodNames.length>0&&c.push(`--function-names '${k(o.methodNames.join(", "))}'`),c.push(`use-manually-provided-public-key ${i.params.publicKey}`),c.join(" ")}case"DeleteKey":return`add-action delete-key ${i.params.publicKey}`;case"DeleteAccount":return`add-action delete-account beneficiary '${k(i.params.beneficiaryId)}'`;case"Stake":return`add-action stake '${ct(i.params.stake)} NEAR' ${i.params.publicKey}`;case"DeployContract":case"DeployGlobalContract":throw new Error(`${i.type} is not supported by NEAR CLI wallet — binary data cannot be passed via command line`);case"UseGlobalContract":{const o=i.params.contractIdentifier;return"accountId"in o?`add-action use-global-contract use-global-account-id '${k(o.accountId)}'`:`add-action use-global-contract use-global-hash '${k(o.codeHash)}'`}default:throw new Error("Unknown action type")}}function te({signerId:i,receiverId:o,actions:c,network:l,signingMethod:p="sign-with-keychain",ledgerHdPath:h}){const d=Et(p,h);if(c.length===1&&c[0].type==="FunctionCall"){const y=c[0].params;return["near contract","call-function",`as-transaction '${k(o)}' '${k(y.methodName)}'`,Xt(y.args),`prepaid-gas '${Yt(y.gas)} Tgas'`,`attached-deposit '${ct(y.deposit)} NEAR'`,`sign-as '${k(i)}'`,`network-config ${l}`,d].join(` \\
    `)}if(c.length===1&&c[0].type==="Transfer")return["near tokens",`'${k(i)}'`,`send-near '${k(o)}' '${ct(c[0].params.deposit)} NEAR'`,`network-config ${l}`,d].join(` \\
    `);if(c.length===1&&c[0].type==="AddKey"){const y=c[0],m=["near account"];if(m.push(`add-key '${k(i)}'`),y.params.accessKey.permission==="FullAccess")m.push("grant-full-access");else{const a=y.params.accessKey.permission;m.push("grant-function-call-access"),a.allowance&&m.push(`--allowance '${ct(a.allowance)} NEAR'`),m.push(`--contract-account-id '${k(a.receiverId)}'`),a.methodNames&&a.methodNames.length>0&&m.push(`--function-names '${k(a.methodNames.join(", "))}'`)}return m.push(`use-manually-provided-public-key ${y.params.publicKey}`),m.push(`network-config ${l}`),m.push(d),m.join(` \\
    `)}if(c.every(y=>y.type==="DeleteKey")){const y=c.map(m=>m.params.publicKey).join(",");return["near account",`delete-keys '${k(i)}' public-keys ${y}`,`network-config ${l}`,d].join(` \\
    `)}const g=c.map(Qt);return["near transaction",`construct-transaction '${k(i)}' '${k(o)}'`,...g,"skip",`network-config ${l}`,d].join(` \\
    `)}function Te({signerId:i,receiverId:o,actions:c,network:l,signingMethod:p="sign-with-keychain",ledgerHdPath:h}){const d=c.map(Qt);return["near transaction",`construct-meta-transaction '${k(i)}' '${k(o)}'`,...d,"skip",`network-config ${l}`,`${Et(p,h)}`].join(` \\
    `)}function ee({message:i,recipient:o,nonce:c,network:l,signerId:p,signingMethod:h="sign-with-keychain",ledgerHdPath:d}){const g=["near message sign-nep413",`utf8 '${k(i)}'`,`nonce '${k(c)}'`,`recipient '${k(o)}'`,`sign-as '${k(p)}'`];return h==="sign-with-ledger"?g.push(Et(h,d)):(g.push(Et(h,d)),g.push(`network-config ${l}`)),g.join(` \\
    `)}const Ne=`
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
  outline: none;
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
`;function Q(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function $t(i){return`
    <div class="command-block">
      <pre><code>${Q(i)}</code></pre>
      <button class="copy-btn" data-command="${Q(i)}">Copy</button>
    </div>
  `}function Pe(i){return`
    <div class="container">
      ${i.step?`<div class="step-indicator">${Q(i.step)}</div>`:""}
      <h2>${Q(i.title)}</h2>
      ${i.subtitle?`<p class="subtitle">${Q(i.subtitle)}</p>`:""}
      <div class="field-group">
        <input type="text" id="account-id" placeholder="e.g. yourname.near" autocapitalize="off" autocomplete="off" spellcheck="false" />
      </div>
      <div id="error" class="error-text" style="display:none"></div>
      <button class="btn" id="submit-btn">${Q(i.buttonText)}</button>
    </div>
  `}function ne(i,o){return`
    <div class="container">
      ${o?`<div class="step-indicator">${Q(o)}</div>`:""}
      <h2>Add access key</h2>
      <p class="subtitle">Run this command in your terminal, then paste the transaction hash or explorer URL below</p>
      ${$t(i)}
      <div class="field-group">
        <label class="field-label">Transaction hash or explorer URL</label>
        <input type="text" id="tx-hash" placeholder="Paste transaction hash or explorer URL" autocapitalize="off" autocomplete="off" spellcheck="false" />
      </div>
      <div id="error" class="error-text" style="display:none"></div>
      <button class="btn" id="verify-btn">Verify</button>
    </div>
  `}function re(i){return`
    <div class="container">
      <h2>Sign transaction</h2>
      <p class="subtitle">Run this command in your terminal, then paste the transaction hash or explorer URL below</p>
      ${$t(i)}
      <div class="field-group">
        <label class="field-label">Transaction hash or explorer URL</label>
        <input type="text" id="tx-hash" placeholder="Paste transaction hash or explorer URL" autocapitalize="off" autocomplete="off" spellcheck="false" />
      </div>
      <div id="error" class="error-text" style="display:none"></div>
      <button class="btn" id="verify-btn">Verify</button>
    </div>
  `}function Le(i,o){return`
    <div class="container">
      ${o?`<div class="step-indicator">${Q(o)}</div>`:""}
      <h2>Sign message</h2>
      <p class="subtitle">Run this command in your terminal, then paste the JSON output below</p>
      ${$t(i)}
      <div class="field-group">
        <label class="field-label">Command output</label>
        <textarea id="sign-output" placeholder='Paste the JSON output here, e.g.&#10;{"accountId":"...","publicKey":"...","signature":"..."}'></textarea>
      </div>
      <div id="error" class="error-text" style="display:none"></div>
      <button class="btn" id="submit-sign-btn">Submit</button>
    </div>
  `}function Me(i,o){return`
    <div class="container">
      ${o?`<div class="step-indicator">${Q(o)}</div>`:""}
      <h2>Sign delegate action</h2>
      <p class="subtitle">Run this command in your terminal, then paste the base64 output below</p>
      ${$t(i)}
      <div class="field-group">
        <label class="field-label">Signed delegate action (base64)</label>
        <textarea id="delegate-output" placeholder="Paste the base64 output here"></textarea>
      </div>
      <div id="error" class="error-text" style="display:none"></div>
      <button class="btn" id="submit-delegate-btn">Submit</button>
    </div>
  `}function _e(i){return`
    <div class="container">
      ${i.step?`<div class="step-indicator">${Q(i.step)}</div>`:""}
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
        <input type="text" id="hd-path" value="${Q(i.defaultHdPath)}" autocapitalize="off" autocomplete="off" spellcheck="false" />
      </div>
      <div id="error" class="error-text" style="display:none"></div>
      <button class="btn" id="submit-signing-method-btn">Continue</button>
    </div>
  `}const X=()=>window.selector.storage;async function pt(i){return await X().get(`cli:${i}:accountId`)||""}async function Ot(i,o){await X().set(`cli:${i}:accountId`,o)}async function De(i){await X().remove(`cli:${i}:accountId`)}async function Ht(i){const o=await X().get(`cli:${i}:functionCallKey`);return o?JSON.parse(o):null}async function ie(i,o){await X().set(`cli:${i}:functionCallKey`,JSON.stringify(o))}async function Oe(i){await X().remove(`cli:${i}:functionCallKey`)}async function Ft(i){return await X().get(`cli:${i}:signingMethod`)==="sign-with-ledger"?"sign-with-ledger":"sign-with-keychain"}async function oe(i,o){await X().set(`cli:${i}:signingMethod`,o)}async function He(i){await X().remove(`cli:${i}:signingMethod`)}async function Ut(i){return await X().get(`cli:${i}:ledgerHdPath`)||Dt}async function ae(i,o){await X().set(`cli:${i}:ledgerHdPath`,o)}async function Ke(i){await X().remove(`cli:${i}:ledgerHdPath`)}function kt(i){var l,p;const o=(p=(l=window.selector)==null?void 0:l.providers)==null?void 0:p[i],c=i==="mainnet"?"https://rpc.mainnet.near.org":"https://rpc.testnet.near.org";return o&&o.length>0?o[0]:c}async function je(i,o,c){const p=await(await fetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({jsonrpc:"2.0",id:1,method:"tx",params:{tx_hash:o,sender_account_id:c,wait_until:"NONE"}})})).json();if(p.error)throw new Error(p.error.message||JSON.stringify(p.error));return p.result}function It(i){document.head.innerHTML=Ne,document.body.innerHTML="";const o=document.createElement("div");return o.style.height="100%",o.innerHTML=i,document.body.appendChild(o),window.focus(),o}function se(i){const o=i.getAttribute("data-command")||"";navigator.clipboard.writeText(o).then(()=>{const c=i.textContent;i.textContent="Copied!",setTimeout(()=>{i.textContent=c},1500)}).catch(()=>{var l;const c=(l=i.parentElement)==null?void 0:l.querySelector("code");if(c){const p=document.createRange();p.selectNodeContents(c);const h=window.getSelection();h==null||h.removeAllRanges(),h==null||h.addRange(p)}})}function Kt(i){const o=i.querySelectorAll(".copy-btn");o.forEach(c=>{c.addEventListener("click",()=>se(c))}),document.addEventListener("keydown",c=>{const l=document.activeElement;l instanceof HTMLInputElement||l instanceof HTMLTextAreaElement||c.key==="c"&&o.length>0&&(c.preventDefault(),se(o[0]))})}function ut(i,o){const c=i.querySelector("#error");c&&(c.textContent=o,c.style.display="block")}function ce(i){return new Promise(o=>{const c=It(Pe(i));window.selector.ui.showIframe();const l=c.querySelector("#account-id"),p=c.querySelector("#submit-btn"),h=()=>{const d=l.value.trim();if(!d){ut(c,"Please enter an account ID");return}o(d)};p.addEventListener("click",h),l.addEventListener("keydown",d=>{d.key==="Enter"&&h()}),requestAnimationFrame(()=>l.focus())})}function ue(i){return new Promise(o=>{const c=It(_e({step:i.step,defaultHdPath:Dt}));window.selector.ui.showIframe();let l="sign-with-keychain";const p=c.querySelectorAll(".signing-method-card"),h=c.querySelector("#hd-path-group"),d=c.querySelector("#hd-path"),g=c.querySelector("#submit-signing-method-btn");function y(v){p.forEach(S=>{S.classList.remove("selected"),S.setAttribute("aria-pressed","false")}),v.classList.add("selected"),v.setAttribute("aria-pressed","true"),l=v.getAttribute("data-method"),h.style.display=l==="sign-with-ledger"?"block":"none"}const m=Array.from(p);p.forEach(v=>{v.addEventListener("click",()=>y(v)),v.addEventListener("keydown",S=>{if(S.key==="Enter"){S.preventDefault(),a();return}const N=m.indexOf(v);if(S.key==="ArrowRight"||S.key==="ArrowDown"){S.preventDefault();const O=m[(N+1)%m.length];y(O),O.focus()}else if(S.key==="ArrowLeft"||S.key==="ArrowUp"){S.preventDefault();const O=m[(N-1+m.length)%m.length];y(O),O.focus()}})});function a(){const v={signingMethod:l};if(l==="sign-with-ledger"){const S=d.value.trim();if(!S){ut(c,"Please enter an HD derivation path");return}v.ledgerHdPath=S}o(v)}g.addEventListener("click",a),c.addEventListener("keydown",v=>{v.key==="Enter"&&document.activeElement!==d&&(v.preventDefault(),a())});const F=c.querySelector(".signing-method-card.selected");F&&requestAnimationFrame(()=>F.focus())})}function qe(i){const o=i.match(/(?:txns?|transactions)\/([A-Za-z0-9]{43,44})/);if(o)return o[1];const c=i.match(/(?:Transaction ID:\s*)?([A-Za-z0-9]{43,44})/);return c?c[1]:i}async function ze(i,o,c,l=5){let p;for(let h=0;h<l;h++)try{return await je(i,o,c)}catch(d){p=d,h<l-1&&await new Promise(g=>setTimeout(g,2e3))}throw p??new Error(`Transaction ${o} not found after ${l} attempts`)}function Rt(i,o,c){return new Promise(l=>{const p=It(i);Kt(p),window.selector.ui.showIframe();const h=p.querySelector("#tx-hash"),d=p.querySelector("#verify-btn"),g=async()=>{const y=h.value.trim();if(!y){ut(p,"Please paste the transaction hash or explorer URL");return}const m=qe(y);d.disabled=!0,d.textContent="Verifying...";try{const a=await ze(o,m,c);l(a)}catch{ut(p,"Transaction not found. Please check the hash and try again."),d.disabled=!1,d.textContent="Verify"}};d.addEventListener("click",g),h.addEventListener("keydown",y=>{y.key==="Enter"&&g()})})}function le(i,o){return new Promise(c=>{const l=It(Le(i,o));Kt(l),window.selector.ui.showIframe();const p=l.querySelector("#sign-output");l.querySelector("#submit-sign-btn").addEventListener("click",()=>{const d=p.value.trim();if(!d){ut(l,"Please paste the command output");return}try{const g=d.match(/\{[\s\S]*"signature"[\s\S]*\}/);if(!g)throw new Error("No valid JSON found");const y=JSON.parse(g[0]);if(!y.signature||!y.publicKey)throw new Error("Missing signature or publicKey in output");const m=y.signature.replace(/^ed25519:/,"");c({accountId:y.accountId||"",publicKey:y.publicKey,signature:Lt.from(ke(m)).toString("base64")})}catch(g){ut(l,`Could not parse output: ${g.message}`)}})})}function Ge(i){const c=i.trim().match(/[A-Za-z0-9+/=]{20,}/g);return c?c.reduce((l,p)=>l.length>=p.length?l:p):null}function We(i,o){return new Promise(c=>{const l=It(Me(i,o));Kt(l),window.selector.ui.showIframe();const p=l.querySelector("#delegate-output");l.querySelector("#submit-delegate-btn").addEventListener("click",()=>{const d=p.value.trim();if(!d){ut(l,"Please paste the base64 output from the command");return}const g=Ge(d);if(!g){ut(l,"Could not find valid base64 data in the pasted output");return}c(g)})})}class Je{constructor(){at(this,"signIn",async({addFunctionCallKey:o,network:c})=>{const l=await pt(c),p=await Ht(c),h=(p==null?void 0:p.publicKey)&&(!o||p.contractId===o.contractId&&p.publicKey===o.publicKey);if(l&&(!o||h))return[{accountId:l,publicKey:(p==null?void 0:p.publicKey)??""}];const d=!l;let g=1;d&&g++,o&&g++;let y=0;const m=l||await ce({title:"Connect with NEAR CLI",subtitle:"Enter your NEAR account ID",buttonText:"Next",step:`Step ${++y} of ${g}`}),{signingMethod:a,ledgerHdPath:F}=await ue({step:`Step ${++y} of ${g}`});if(await oe(c,a),F&&await ae(c,F),o){const{publicKey:v}=o,S=Zt({accountId:m,addFunctionCallKey:o,network:c,signingMethod:a,ledgerHdPath:F}),N=kt(c);await Rt(ne(S,`Step ${++y} of ${g}`),N,m);const O={publicKey:v,contractId:o.contractId};return await Ot(c,m),await ie(c,O),[{accountId:m,publicKey:v}]}return await Ot(c,m),[{accountId:m,publicKey:""}]});at(this,"signInAndSignMessage",async({addFunctionCallKey:o,network:c,messageParams:l})=>{const{message:p,recipient:h,nonce:d}=l,g=await pt(c),y=await Ht(c),m=!g,a=!!o&&(!(y!=null&&y.publicKey)||y.contractId!==o.contractId||y.publicKey!==o.publicKey);let F=2;m&&F++,a&&F++;let v=0;const S=g||await ce({title:"Connect with NEAR CLI",subtitle:"Enter your NEAR account ID to sign in and sign a message",buttonText:"Next",step:`Step ${++v} of ${F}`}),{signingMethod:N,ledgerHdPath:O}=await ue({step:`Step ${++v} of ${F}`});await oe(c,N),O&&await ae(c,O);const ft=Lt.from(d).toString("base64"),mt=ee({message:p,recipient:h,nonce:ft,network:c,signerId:S,signingMethod:N,ledgerHdPath:O}),et=await le(mt,`Step ${++v} of ${F}`);let xt=et.publicKey;if(a&&o){xt=o.publicKey;const dt=Zt({accountId:S,addFunctionCallKey:o,network:c,signingMethod:N,ledgerHdPath:O}),Bt=kt(c);await Rt(ne(dt,`Step ${++v} of ${F}`),Bt,S);const bt={publicKey:o.publicKey,contractId:o.contractId};await ie(c,bt)}return await Ot(c,S),[{accountId:S,publicKey:xt,signedMessage:{accountId:et.accountId||S,publicKey:et.publicKey,signature:et.signature}}]});at(this,"signOut",async({network:o})=>{await De(o),await Oe(o),await He(o),await Ke(o)});at(this,"getAccounts",async({network:o})=>{const c=await pt(o);if(!c)return[];const l=await Ht(o);return[{accountId:c,publicKey:(l==null?void 0:l.publicKey)??""}]});at(this,"signAndSendTransaction",async({receiverId:o,actions:c,network:l})=>{const p=await pt(l);if(!p)throw new Error("Wallet not signed in");const h=await Ft(l),d=h==="sign-with-ledger"?await Ut(l):void 0,g=te({signerId:p,receiverId:o,actions:c,network:l,signingMethod:h,ledgerHdPath:d});try{const y=kt(l);return await Rt(re(g),y,p)}finally{window.selector.ui.hideIframe()}});at(this,"signAndSendTransactions",async({transactions:o,network:c})=>{const l=await pt(c);if(!l)throw new Error("Wallet not signed in");const p=await Ft(c),h=p==="sign-with-ledger"?await Ut(c):void 0,d=kt(c),g=[];try{for(const y of o){const m=te({signerId:l,receiverId:y.receiverId,actions:y.actions,network:c,signingMethod:p,ledgerHdPath:h}),a=await Rt(re(m),d,l);g.push(a)}return g}finally{window.selector.ui.hideIframe()}});at(this,"signMessage",async({message:o,nonce:c,recipient:l,network:p})=>{const h=await pt(p);if(!h)throw new Error("Wallet not signed in");const d=await Ft(p),g=d==="sign-with-ledger"?await Ut(p):void 0,y=Lt.from(c).toString("base64"),m=ee({message:o,recipient:l,nonce:y,network:p,signerId:h,signingMethod:d,ledgerHdPath:g});try{const a=await le(m);return{accountId:a.accountId||h,publicKey:a.publicKey,signature:a.signature}}finally{window.selector.ui.hideIframe()}});at(this,"signDelegateActions",async({delegateActions:o,network:c})=>{const l=await pt(c);if(!l)throw new Error("Wallet not signed in");const p=await Ft(c),h=p==="sign-with-ledger"?await Ut(c):void 0,d=[];try{const g=o.length;for(let y=0;y<o.length;y++){const m=o[y],a=Te({signerId:l,receiverId:m.receiverId,actions:m.actions,network:c,signingMethod:p,ledgerHdPath:h}),F=g>1?`Step ${y+1} of ${g}`:void 0,v=await We(a,F);d.push(v)}return{signedDelegateActions:d}}finally{window.selector.ui.hideIframe()}})}}window.selector.ready(new Je)})();
