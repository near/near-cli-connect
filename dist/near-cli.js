var Ze=Object.defineProperty;var Qe=(st,V,z)=>V in st?Ze(st,V,{enumerable:!0,configurable:!0,writable:!0,value:z}):st[V]=z;var at=(st,V,z)=>Qe(st,typeof V!="symbol"?V+"":V,z);(function(){"use strict";var st={},V={};V.byteLength=de,V.toByteArray=ge,V.fromByteArray=me;for(var z=[],Y=[],he=typeof Uint8Array<"u"?Uint8Array:Array,Nt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",wt=0,pe=Nt.length;wt<pe;++wt)z[wt]=Nt[wt],Y[Nt.charCodeAt(wt)]=wt;Y[45]=62,Y[95]=63;function zt(i){var o=i.length;if(o%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var c=i.indexOf("=");c===-1&&(c=o);var h=c===o?0:4-c%4;return[c,h]}function de(i){var o=zt(i),c=o[0],h=o[1];return(c+h)*3/4-h}function fe(i,o,c){return(o+c)*3/4-c}function ge(i){var o,c=zt(i),h=c[0],p=c[1],l=new he(fe(i,h,p)),f=0,g=p>0?h-4:h,y;for(y=0;y<g;y+=4)o=Y[i.charCodeAt(y)]<<18|Y[i.charCodeAt(y+1)]<<12|Y[i.charCodeAt(y+2)]<<6|Y[i.charCodeAt(y+3)],l[f++]=o>>16&255,l[f++]=o>>8&255,l[f++]=o&255;return p===2&&(o=Y[i.charCodeAt(y)]<<2|Y[i.charCodeAt(y+1)]>>4,l[f++]=o&255),p===1&&(o=Y[i.charCodeAt(y)]<<10|Y[i.charCodeAt(y+1)]<<4|Y[i.charCodeAt(y+2)]>>2,l[f++]=o>>8&255,l[f++]=o&255),l}function ye(i){return z[i>>18&63]+z[i>>12&63]+z[i>>6&63]+z[i&63]}function we(i,o,c){for(var h,p=[],l=o;l<c;l+=3)h=(i[l]<<16&16711680)+(i[l+1]<<8&65280)+(i[l+2]&255),p.push(ye(h));return p.join("")}function me(i){for(var o,c=i.length,h=c%3,p=[],l=16383,f=0,g=c-h;f<g;f+=l)p.push(we(i,f,f+l>g?g:f+l));return h===1?(o=i[c-1],p.push(z[o>>2]+z[o<<4&63]+"==")):h===2&&(o=(i[c-2]<<8)+i[c-1],p.push(z[o>>10]+z[o>>4&63]+z[o<<2&63]+"=")),p.join("")}var Pt={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */Pt.read=function(i,o,c,h,p){var l,f,g=p*8-h-1,y=(1<<g)-1,m=y>>1,a=-7,F=c?p-1:0,v=c?-1:1,S=i[o+F];for(F+=v,l=S&(1<<-a)-1,S>>=-a,a+=g;a>0;l=l*256+i[o+F],F+=v,a-=8);for(f=l&(1<<-a)-1,l>>=-a,a+=h;a>0;f=f*256+i[o+F],F+=v,a-=8);if(l===0)l=1-m;else{if(l===y)return f?NaN:(S?-1:1)*(1/0);f=f+Math.pow(2,h),l=l-m}return(S?-1:1)*f*Math.pow(2,l-h)},Pt.write=function(i,o,c,h,p,l){var f,g,y,m=l*8-p-1,a=(1<<m)-1,F=a>>1,v=p===23?Math.pow(2,-24)-Math.pow(2,-77):0,S=h?0:l-1,N=h?1:-1,O=o<0||o===0&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(g=isNaN(o)?1:0,f=a):(f=Math.floor(Math.log(o)/Math.LN2),o*(y=Math.pow(2,-f))<1&&(f--,y*=2),f+F>=1?o+=v/y:o+=v*Math.pow(2,1-F),o*y>=2&&(f++,y/=2),f+F>=a?(g=0,f=a):f+F>=1?(g=(o*y-1)*Math.pow(2,p),f=f+F):(g=o*Math.pow(2,F-1)*Math.pow(2,p),f=0));p>=8;i[c+S]=g&255,S+=N,g/=256,p-=8);for(f=f<<p|g,m+=p;m>0;i[c+S]=f&255,S+=N,f/=256,m-=8);i[c+S-N]|=O*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(i){const o=V,c=Pt,h=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;i.Buffer=a,i.SlowBuffer=Bt,i.INSPECT_MAX_BYTES=50;const p=2147483647;i.kMaxLength=p;const{Uint8Array:l,ArrayBuffer:f,SharedArrayBuffer:g}=globalThis;a.TYPED_ARRAY_SUPPORT=y(),!a.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function y(){try{const n=new l(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,l.prototype),Object.setPrototypeOf(n,t),n.foo()===42}catch{return!1}}Object.defineProperty(a.prototype,"parent",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.buffer}}),Object.defineProperty(a.prototype,"offset",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.byteOffset}});function m(n){if(n>p)throw new RangeError('The value "'+n+'" is invalid for option "size"');const t=new l(n);return Object.setPrototypeOf(t,a.prototype),t}function a(n,t,e){if(typeof n=="number"){if(typeof t=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return N(n)}return F(n,t,e)}a.poolSize=8192;function F(n,t,e){if(typeof n=="string")return O(n,t);if(f.isView(n))return mt(n);if(n==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof n);if(it(n,f)||n&&it(n.buffer,f)||typeof g<"u"&&(it(n,g)||n&&it(n.buffer,g)))return et(n,t,e);if(typeof n=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const r=n.valueOf&&n.valueOf();if(r!=null&&r!==n)return a.from(r,t,e);const s=xt(n);if(s)return s;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof n[Symbol.toPrimitive]=="function")return a.from(n[Symbol.toPrimitive]("string"),t,e);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof n)}a.from=function(n,t,e){return F(n,t,e)},Object.setPrototypeOf(a.prototype,l.prototype),Object.setPrototypeOf(a,l);function v(n){if(typeof n!="number")throw new TypeError('"size" argument must be of type number');if(n<0)throw new RangeError('The value "'+n+'" is invalid for option "size"')}function S(n,t,e){return v(n),n<=0?m(n):t!==void 0?typeof e=="string"?m(n).fill(t,e):m(n).fill(t):m(n)}a.alloc=function(n,t,e){return S(n,t,e)};function N(n){return v(n),m(n<0?0:ft(n)|0)}a.allocUnsafe=function(n){return N(n)},a.allocUnsafeSlow=function(n){return N(n)};function O(n,t){if((typeof t!="string"||t==="")&&(t="utf8"),!a.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const e=bt(n,t)|0;let r=m(e);const s=r.write(n,t);return s!==e&&(r=r.slice(0,s)),r}function dt(n){const t=n.length<0?0:ft(n.length)|0,e=m(t);for(let r=0;r<t;r+=1)e[r]=n[r]&255;return e}function mt(n){if(it(n,l)){const t=new l(n);return et(t.buffer,t.byteOffset,t.byteLength)}return dt(n)}function et(n,t,e){if(t<0||n.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(n.byteLength<t+(e||0))throw new RangeError('"length" is outside of buffer bounds');let r;return t===void 0&&e===void 0?r=new l(n):e===void 0?r=new l(n,t):r=new l(n,t,e),Object.setPrototypeOf(r,a.prototype),r}function xt(n){if(a.isBuffer(n)){const t=ft(n.length)|0,e=m(t);return e.length===0||n.copy(e,0,0,t),e}if(n.length!==void 0)return typeof n.length!="number"||qt(n.length)?m(0):dt(n);if(n.type==="Buffer"&&Array.isArray(n.data))return dt(n.data)}function ft(n){if(n>=p)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+p.toString(16)+" bytes");return n|0}function Bt(n){return+n!=n&&(n=0),a.alloc(+n)}a.isBuffer=function(t){return t!=null&&t._isBuffer===!0&&t!==a.prototype},a.compare=function(t,e){if(it(t,l)&&(t=a.from(t,t.offset,t.byteLength)),it(e,l)&&(e=a.from(e,e.offset,e.byteLength)),!a.isBuffer(t)||!a.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let r=t.length,s=e.length;for(let u=0,d=Math.min(r,s);u<d;++u)if(t[u]!==e[u]){r=t[u],s=e[u];break}return r<s?-1:s<r?1:0},a.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(t.length===0)return a.alloc(0);let r;if(e===void 0)for(e=0,r=0;r<t.length;++r)e+=t[r].length;const s=a.allocUnsafe(e);let u=0;for(r=0;r<t.length;++r){let d=t[r];if(it(d,l))u+d.length>s.length?(a.isBuffer(d)||(d=a.from(d)),d.copy(s,u)):l.prototype.set.call(s,d,u);else if(a.isBuffer(d))d.copy(s,u);else throw new TypeError('"list" argument must be an Array of Buffers');u+=d.length}return s};function bt(n,t){if(a.isBuffer(n))return n.length;if(f.isView(n)||it(n,f))return n.byteLength;if(typeof n!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof n);const e=n.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&e===0)return 0;let s=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":return Kt(n).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return e*2;case"hex":return e>>>1;case"base64":return le(n).length;default:if(s)return r?-1:Kt(n).length;t=(""+t).toLowerCase(),s=!0}}a.byteLength=bt;function gt(n,t,e){let r=!1;if((t===void 0||t<0)&&(t=0),t>this.length||((e===void 0||e>this.length)&&(e=this.length),e<=0)||(e>>>=0,t>>>=0,e<=t))return"";for(n||(n="utf8");;)switch(n){case"hex":return nt(this,t,e);case"utf8":case"utf-8":return B(this,t,e);case"ascii":return P(this,t,e);case"latin1":case"binary":return L(this,t,e);case"base64":return I(this,t,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ot(this,t,e);default:if(r)throw new TypeError("Unknown encoding: "+n);n=(n+"").toLowerCase(),r=!0}}a.prototype._isBuffer=!0;function W(n,t,e){const r=n[t];n[t]=n[e],n[e]=r}a.prototype.swap16=function(){const t=this.length;if(t%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)W(this,e,e+1);return this},a.prototype.swap32=function(){const t=this.length;if(t%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)W(this,e,e+3),W(this,e+1,e+2);return this},a.prototype.swap64=function(){const t=this.length;if(t%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)W(this,e,e+7),W(this,e+1,e+6),W(this,e+2,e+5),W(this,e+3,e+4);return this},a.prototype.toString=function(){const t=this.length;return t===0?"":arguments.length===0?B(this,0,t):gt.apply(this,arguments)},a.prototype.toLocaleString=a.prototype.toString,a.prototype.equals=function(t){if(!a.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t?!0:a.compare(this,t)===0},a.prototype.inspect=function(){let t="";const e=i.INSPECT_MAX_BYTES;return t=this.toString("hex",0,e).replace(/(.{2})/g,"$1 ").trim(),this.length>e&&(t+=" ... "),"<Buffer "+t+">"},h&&(a.prototype[h]=a.prototype.inspect),a.prototype.compare=function(t,e,r,s,u){if(it(t,l)&&(t=a.from(t,t.offset,t.byteLength)),!a.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(e===void 0&&(e=0),r===void 0&&(r=t?t.length:0),s===void 0&&(s=0),u===void 0&&(u=this.length),e<0||r>t.length||s<0||u>this.length)throw new RangeError("out of range index");if(s>=u&&e>=r)return 0;if(s>=u)return-1;if(e>=r)return 1;if(e>>>=0,r>>>=0,s>>>=0,u>>>=0,this===t)return 0;let d=u-s,k=r-e;const M=Math.min(d,k),C=this.slice(s,u),_=t.slice(e,r);for(let U=0;U<M;++U)if(C[U]!==_[U]){d=C[U],k=_[U];break}return d<k?-1:k<d?1:0};function K(n,t,e,r,s){if(n.length===0)return-1;if(typeof e=="string"?(r=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,qt(e)&&(e=s?0:n.length-1),e<0&&(e=n.length+e),e>=n.length){if(s)return-1;e=n.length-1}else if(e<0)if(s)e=0;else return-1;if(typeof t=="string"&&(t=a.from(t,r)),a.isBuffer(t))return t.length===0?-1:J(n,t,e,r,s);if(typeof t=="number")return t=t&255,typeof l.prototype.indexOf=="function"?s?l.prototype.indexOf.call(n,t,e):l.prototype.lastIndexOf.call(n,t,e):J(n,[t],e,r,s);throw new TypeError("val must be string, number or Buffer")}function J(n,t,e,r,s){let u=1,d=n.length,k=t.length;if(r!==void 0&&(r=String(r).toLowerCase(),r==="ucs2"||r==="ucs-2"||r==="utf16le"||r==="utf-16le")){if(n.length<2||t.length<2)return-1;u=2,d/=2,k/=2,e/=2}function M(_,U){return u===1?_[U]:_.readUInt16BE(U*u)}let C;if(s){let _=-1;for(C=e;C<d;C++)if(M(n,C)===M(t,_===-1?0:C-_)){if(_===-1&&(_=C),C-_+1===k)return _*u}else _!==-1&&(C-=C-_),_=-1}else for(e+k>d&&(e=d-k),C=e;C>=0;C--){let _=!0;for(let U=0;U<k;U++)if(M(n,C+U)!==M(t,U)){_=!1;break}if(_)return C}return-1}a.prototype.includes=function(t,e,r){return this.indexOf(t,e,r)!==-1},a.prototype.indexOf=function(t,e,r){return K(this,t,e,r,!0)},a.prototype.lastIndexOf=function(t,e,r){return K(this,t,e,r,!1)};function yt(n,t,e,r){e=Number(e)||0;const s=n.length-e;r?(r=Number(r),r>s&&(r=s)):r=s;const u=t.length;r>u/2&&(r=u/2);let d;for(d=0;d<r;++d){const k=parseInt(t.substr(d*2,2),16);if(qt(k))return d;n[e+d]=k}return d}function E(n,t,e,r){return Ct(Kt(t,n.length-e),n,e,r)}function w(n,t,e,r){return Ct(Je(t),n,e,r)}function x(n,t,e,r){return Ct(le(t),n,e,r)}function b(n,t,e,r){return Ct(Ve(t,n.length-e),n,e,r)}a.prototype.write=function(t,e,r,s){if(e===void 0)s="utf8",r=this.length,e=0;else if(r===void 0&&typeof e=="string")s=e,r=this.length,e=0;else if(isFinite(e))e=e>>>0,isFinite(r)?(r=r>>>0,s===void 0&&(s="utf8")):(s=r,r=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const u=this.length-e;if((r===void 0||r>u)&&(r=u),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");s||(s="utf8");let d=!1;for(;;)switch(s){case"hex":return yt(this,t,e,r);case"utf8":case"utf-8":return E(this,t,e,r);case"ascii":case"latin1":case"binary":return w(this,t,e,r);case"base64":return x(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return b(this,t,e,r);default:if(d)throw new TypeError("Unknown encoding: "+s);s=(""+s).toLowerCase(),d=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function I(n,t,e){return t===0&&e===n.length?o.fromByteArray(n):o.fromByteArray(n.slice(t,e))}function B(n,t,e){e=Math.min(n.length,e);const r=[];let s=t;for(;s<e;){const u=n[s];let d=null,k=u>239?4:u>223?3:u>191?2:1;if(s+k<=e){let M,C,_,U;switch(k){case 1:u<128&&(d=u);break;case 2:M=n[s+1],(M&192)===128&&(U=(u&31)<<6|M&63,U>127&&(d=U));break;case 3:M=n[s+1],C=n[s+2],(M&192)===128&&(C&192)===128&&(U=(u&15)<<12|(M&63)<<6|C&63,U>2047&&(U<55296||U>57343)&&(d=U));break;case 4:M=n[s+1],C=n[s+2],_=n[s+3],(M&192)===128&&(C&192)===128&&(_&192)===128&&(U=(u&15)<<18|(M&63)<<12|(C&63)<<6|_&63,U>65535&&U<1114112&&(d=U))}}d===null?(d=65533,k=1):d>65535&&(d-=65536,r.push(d>>>10&1023|55296),d=56320|d&1023),r.push(d),s+=k}return $(r)}const A=4096;function $(n){const t=n.length;if(t<=A)return String.fromCharCode.apply(String,n);let e="",r=0;for(;r<t;)e+=String.fromCharCode.apply(String,n.slice(r,r+=A));return e}function P(n,t,e){let r="";e=Math.min(n.length,e);for(let s=t;s<e;++s)r+=String.fromCharCode(n[s]&127);return r}function L(n,t,e){let r="";e=Math.min(n.length,e);for(let s=t;s<e;++s)r+=String.fromCharCode(n[s]);return r}function nt(n,t,e){const r=n.length;(!t||t<0)&&(t=0),(!e||e<0||e>r)&&(e=r);let s="";for(let u=t;u<e;++u)s+=Ye[n[u]];return s}function ot(n,t,e){const r=n.slice(t,e);let s="";for(let u=0;u<r.length-1;u+=2)s+=String.fromCharCode(r[u]+r[u+1]*256);return s}a.prototype.slice=function(t,e){const r=this.length;t=~~t,e=e===void 0?r:~~e,t<0?(t+=r,t<0&&(t=0)):t>r&&(t=r),e<0?(e+=r,e<0&&(e=0)):e>r&&(e=r),e<t&&(e=t);const s=this.subarray(t,e);return Object.setPrototypeOf(s,a.prototype),s};function T(n,t,e){if(n%1!==0||n<0)throw new RangeError("offset is not uint");if(n+t>e)throw new RangeError("Trying to access beyond buffer length")}a.prototype.readUintLE=a.prototype.readUIntLE=function(t,e,r){t=t>>>0,e=e>>>0,r||T(t,e,this.length);let s=this[t],u=1,d=0;for(;++d<e&&(u*=256);)s+=this[t+d]*u;return s},a.prototype.readUintBE=a.prototype.readUIntBE=function(t,e,r){t=t>>>0,e=e>>>0,r||T(t,e,this.length);let s=this[t+--e],u=1;for(;e>0&&(u*=256);)s+=this[t+--e]*u;return s},a.prototype.readUint8=a.prototype.readUInt8=function(t,e){return t=t>>>0,e||T(t,1,this.length),this[t]},a.prototype.readUint16LE=a.prototype.readUInt16LE=function(t,e){return t=t>>>0,e||T(t,2,this.length),this[t]|this[t+1]<<8},a.prototype.readUint16BE=a.prototype.readUInt16BE=function(t,e){return t=t>>>0,e||T(t,2,this.length),this[t]<<8|this[t+1]},a.prototype.readUint32LE=a.prototype.readUInt32LE=function(t,e){return t=t>>>0,e||T(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+this[t+3]*16777216},a.prototype.readUint32BE=a.prototype.readUInt32BE=function(t,e){return t=t>>>0,e||T(t,4,this.length),this[t]*16777216+(this[t+1]<<16|this[t+2]<<8|this[t+3])},a.prototype.readBigUInt64LE=ht(function(t){t=t>>>0,q(t,"offset");const e=this[t],r=this[t+7];(e===void 0||r===void 0)&&St(t,this.length-8);const s=e+this[++t]*2**8+this[++t]*2**16+this[++t]*2**24,u=this[++t]+this[++t]*2**8+this[++t]*2**16+r*2**24;return BigInt(s)+(BigInt(u)<<BigInt(32))}),a.prototype.readBigUInt64BE=ht(function(t){t=t>>>0,q(t,"offset");const e=this[t],r=this[t+7];(e===void 0||r===void 0)&&St(t,this.length-8);const s=e*2**24+this[++t]*2**16+this[++t]*2**8+this[++t],u=this[++t]*2**24+this[++t]*2**16+this[++t]*2**8+r;return(BigInt(s)<<BigInt(32))+BigInt(u)}),a.prototype.readIntLE=function(t,e,r){t=t>>>0,e=e>>>0,r||T(t,e,this.length);let s=this[t],u=1,d=0;for(;++d<e&&(u*=256);)s+=this[t+d]*u;return u*=128,s>=u&&(s-=Math.pow(2,8*e)),s},a.prototype.readIntBE=function(t,e,r){t=t>>>0,e=e>>>0,r||T(t,e,this.length);let s=e,u=1,d=this[t+--s];for(;s>0&&(u*=256);)d+=this[t+--s]*u;return u*=128,d>=u&&(d-=Math.pow(2,8*e)),d},a.prototype.readInt8=function(t,e){return t=t>>>0,e||T(t,1,this.length),this[t]&128?(255-this[t]+1)*-1:this[t]},a.prototype.readInt16LE=function(t,e){t=t>>>0,e||T(t,2,this.length);const r=this[t]|this[t+1]<<8;return r&32768?r|4294901760:r},a.prototype.readInt16BE=function(t,e){t=t>>>0,e||T(t,2,this.length);const r=this[t+1]|this[t]<<8;return r&32768?r|4294901760:r},a.prototype.readInt32LE=function(t,e){return t=t>>>0,e||T(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},a.prototype.readInt32BE=function(t,e){return t=t>>>0,e||T(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},a.prototype.readBigInt64LE=ht(function(t){t=t>>>0,q(t,"offset");const e=this[t],r=this[t+7];(e===void 0||r===void 0)&&St(t,this.length-8);const s=this[t+4]+this[t+5]*2**8+this[t+6]*2**16+(r<<24);return(BigInt(s)<<BigInt(32))+BigInt(e+this[++t]*2**8+this[++t]*2**16+this[++t]*2**24)}),a.prototype.readBigInt64BE=ht(function(t){t=t>>>0,q(t,"offset");const e=this[t],r=this[t+7];(e===void 0||r===void 0)&&St(t,this.length-8);const s=(e<<24)+this[++t]*2**16+this[++t]*2**8+this[++t];return(BigInt(s)<<BigInt(32))+BigInt(this[++t]*2**24+this[++t]*2**16+this[++t]*2**8+r)}),a.prototype.readFloatLE=function(t,e){return t=t>>>0,e||T(t,4,this.length),c.read(this,t,!0,23,4)},a.prototype.readFloatBE=function(t,e){return t=t>>>0,e||T(t,4,this.length),c.read(this,t,!1,23,4)},a.prototype.readDoubleLE=function(t,e){return t=t>>>0,e||T(t,8,this.length),c.read(this,t,!0,52,8)},a.prototype.readDoubleBE=function(t,e){return t=t>>>0,e||T(t,8,this.length),c.read(this,t,!1,52,8)};function j(n,t,e,r,s,u){if(!a.isBuffer(n))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>s||t<u)throw new RangeError('"value" argument is out of bounds');if(e+r>n.length)throw new RangeError("Index out of range")}a.prototype.writeUintLE=a.prototype.writeUIntLE=function(t,e,r,s){if(t=+t,e=e>>>0,r=r>>>0,!s){const k=Math.pow(2,8*r)-1;j(this,t,e,r,k,0)}let u=1,d=0;for(this[e]=t&255;++d<r&&(u*=256);)this[e+d]=t/u&255;return e+r},a.prototype.writeUintBE=a.prototype.writeUIntBE=function(t,e,r,s){if(t=+t,e=e>>>0,r=r>>>0,!s){const k=Math.pow(2,8*r)-1;j(this,t,e,r,k,0)}let u=r-1,d=1;for(this[e+u]=t&255;--u>=0&&(d*=256);)this[e+u]=t/d&255;return e+r},a.prototype.writeUint8=a.prototype.writeUInt8=function(t,e,r){return t=+t,e=e>>>0,r||j(this,t,e,1,255,0),this[e]=t&255,e+1},a.prototype.writeUint16LE=a.prototype.writeUInt16LE=function(t,e,r){return t=+t,e=e>>>0,r||j(this,t,e,2,65535,0),this[e]=t&255,this[e+1]=t>>>8,e+2},a.prototype.writeUint16BE=a.prototype.writeUInt16BE=function(t,e,r){return t=+t,e=e>>>0,r||j(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=t&255,e+2},a.prototype.writeUint32LE=a.prototype.writeUInt32LE=function(t,e,r){return t=+t,e=e>>>0,r||j(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=t&255,e+4},a.prototype.writeUint32BE=a.prototype.writeUInt32BE=function(t,e,r){return t=+t,e=e>>>0,r||j(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=t&255,e+4};function vt(n,t,e,r,s){Tt(t,r,s,n,e,7);let u=Number(t&BigInt(4294967295));n[e++]=u,u=u>>8,n[e++]=u,u=u>>8,n[e++]=u,u=u>>8,n[e++]=u;let d=Number(t>>BigInt(32)&BigInt(4294967295));return n[e++]=d,d=d>>8,n[e++]=d,d=d>>8,n[e++]=d,d=d>>8,n[e++]=d,e}function D(n,t,e,r,s){Tt(t,r,s,n,e,7);let u=Number(t&BigInt(4294967295));n[e+7]=u,u=u>>8,n[e+6]=u,u=u>>8,n[e+5]=u,u=u>>8,n[e+4]=u;let d=Number(t>>BigInt(32)&BigInt(4294967295));return n[e+3]=d,d=d>>8,n[e+2]=d,d=d>>8,n[e+1]=d,d=d>>8,n[e]=d,e+8}a.prototype.writeBigUInt64LE=ht(function(t,e=0){return vt(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))}),a.prototype.writeBigUInt64BE=ht(function(t,e=0){return D(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))}),a.prototype.writeIntLE=function(t,e,r,s){if(t=+t,e=e>>>0,!s){const M=Math.pow(2,8*r-1);j(this,t,e,r,M-1,-M)}let u=0,d=1,k=0;for(this[e]=t&255;++u<r&&(d*=256);)t<0&&k===0&&this[e+u-1]!==0&&(k=1),this[e+u]=(t/d>>0)-k&255;return e+r},a.prototype.writeIntBE=function(t,e,r,s){if(t=+t,e=e>>>0,!s){const M=Math.pow(2,8*r-1);j(this,t,e,r,M-1,-M)}let u=r-1,d=1,k=0;for(this[e+u]=t&255;--u>=0&&(d*=256);)t<0&&k===0&&this[e+u+1]!==0&&(k=1),this[e+u]=(t/d>>0)-k&255;return e+r},a.prototype.writeInt8=function(t,e,r){return t=+t,e=e>>>0,r||j(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=t&255,e+1},a.prototype.writeInt16LE=function(t,e,r){return t=+t,e=e>>>0,r||j(this,t,e,2,32767,-32768),this[e]=t&255,this[e+1]=t>>>8,e+2},a.prototype.writeInt16BE=function(t,e,r){return t=+t,e=e>>>0,r||j(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=t&255,e+2},a.prototype.writeInt32LE=function(t,e,r){return t=+t,e=e>>>0,r||j(this,t,e,4,2147483647,-2147483648),this[e]=t&255,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},a.prototype.writeInt32BE=function(t,e,r){return t=+t,e=e>>>0,r||j(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=t&255,e+4},a.prototype.writeBigInt64LE=ht(function(t,e=0){return vt(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),a.prototype.writeBigInt64BE=ht(function(t,e=0){return D(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function tt(n,t,e,r,s,u){if(e+r>n.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function H(n,t,e,r,s){return t=+t,e=e>>>0,s||tt(n,t,e,4),c.write(n,t,e,r,23,4),e+4}a.prototype.writeFloatLE=function(t,e,r){return H(this,t,e,!0,r)},a.prototype.writeFloatBE=function(t,e,r){return H(this,t,e,!1,r)};function G(n,t,e,r,s){return t=+t,e=e>>>0,s||tt(n,t,e,8),c.write(n,t,e,r,52,8),e+8}a.prototype.writeDoubleLE=function(t,e,r){return G(this,t,e,!0,r)},a.prototype.writeDoubleBE=function(t,e,r){return G(this,t,e,!1,r)},a.prototype.copy=function(t,e,r,s){if(!a.isBuffer(t))throw new TypeError("argument should be a Buffer");if(r||(r=0),!s&&s!==0&&(s=this.length),e>=t.length&&(e=t.length),e||(e=0),s>0&&s<r&&(s=r),s===r||t.length===0||this.length===0)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(s<0)throw new RangeError("sourceEnd out of bounds");s>this.length&&(s=this.length),t.length-e<s-r&&(s=t.length-e+r);const u=s-r;return this===t&&typeof l.prototype.copyWithin=="function"?this.copyWithin(e,r,s):l.prototype.set.call(t,this.subarray(r,s),e),u},a.prototype.fill=function(t,e,r,s){if(typeof t=="string"){if(typeof e=="string"?(s=e,e=0,r=this.length):typeof r=="string"&&(s=r,r=this.length),s!==void 0&&typeof s!="string")throw new TypeError("encoding must be a string");if(typeof s=="string"&&!a.isEncoding(s))throw new TypeError("Unknown encoding: "+s);if(t.length===1){const d=t.charCodeAt(0);(s==="utf8"&&d<128||s==="latin1")&&(t=d)}}else typeof t=="number"?t=t&255:typeof t=="boolean"&&(t=Number(t));if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;e=e>>>0,r=r===void 0?this.length:r>>>0,t||(t=0);let u;if(typeof t=="number")for(u=e;u<r;++u)this[u]=t;else{const d=a.isBuffer(t)?t:a.from(t,s),k=d.length;if(k===0)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(u=0;u<r-e;++u)this[u+e]=d[u%k]}return this};const Z={};function lt(n,t,e){Z[n]=class extends e{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${n}]`,this.stack,delete this.name}get code(){return n}set code(s){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:s,writable:!0})}toString(){return`${this.name} [${n}]: ${this.message}`}}}lt("ERR_BUFFER_OUT_OF_BOUNDS",function(n){return n?`${n} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),lt("ERR_INVALID_ARG_TYPE",function(n,t){return`The "${n}" argument must be of type number. Received type ${typeof t}`},TypeError),lt("ERR_OUT_OF_RANGE",function(n,t,e){let r=`The value of "${n}" is out of range.`,s=e;return Number.isInteger(e)&&Math.abs(e)>2**32?s=rt(String(e)):typeof e=="bigint"&&(s=String(e),(e>BigInt(2)**BigInt(32)||e<-(BigInt(2)**BigInt(32)))&&(s=rt(s)),s+="n"),r+=` It must be ${t}. Received ${s}`,r},RangeError);function rt(n){let t="",e=n.length;const r=n[0]==="-"?1:0;for(;e>=r+4;e-=3)t=`_${n.slice(e-3,e)}${t}`;return`${n.slice(0,e)}${t}`}function At(n,t,e){q(t,"offset"),(n[t]===void 0||n[t+e]===void 0)&&St(t,n.length-(e+1))}function Tt(n,t,e,r,s,u){if(n>e||n<t){const d=typeof t=="bigint"?"n":"";let k;throw t===0||t===BigInt(0)?k=`>= 0${d} and < 2${d} ** ${(u+1)*8}${d}`:k=`>= -(2${d} ** ${(u+1)*8-1}${d}) and < 2 ** ${(u+1)*8-1}${d}`,new Z.ERR_OUT_OF_RANGE("value",k,n)}At(r,s,u)}function q(n,t){if(typeof n!="number")throw new Z.ERR_INVALID_ARG_TYPE(t,"number",n)}function St(n,t,e){throw Math.floor(n)!==n?(q(n,e),new Z.ERR_OUT_OF_RANGE("offset","an integer",n)):t<0?new Z.ERR_BUFFER_OUT_OF_BOUNDS:new Z.ERR_OUT_OF_RANGE("offset",`>= 0 and <= ${t}`,n)}const Ge=/[^+/0-9A-Za-z-_]/g;function We(n){if(n=n.split("=")[0],n=n.trim().replace(Ge,""),n.length<2)return"";for(;n.length%4!==0;)n=n+"=";return n}function Kt(n,t){t=t||1/0;let e;const r=n.length;let s=null;const u=[];for(let d=0;d<r;++d){if(e=n.charCodeAt(d),e>55295&&e<57344){if(!s){if(e>56319){(t-=3)>-1&&u.push(239,191,189);continue}else if(d+1===r){(t-=3)>-1&&u.push(239,191,189);continue}s=e;continue}if(e<56320){(t-=3)>-1&&u.push(239,191,189),s=e;continue}e=(s-55296<<10|e-56320)+65536}else s&&(t-=3)>-1&&u.push(239,191,189);if(s=null,e<128){if((t-=1)<0)break;u.push(e)}else if(e<2048){if((t-=2)<0)break;u.push(e>>6|192,e&63|128)}else if(e<65536){if((t-=3)<0)break;u.push(e>>12|224,e>>6&63|128,e&63|128)}else if(e<1114112){if((t-=4)<0)break;u.push(e>>18|240,e>>12&63|128,e>>6&63|128,e&63|128)}else throw new Error("Invalid code point")}return u}function Je(n){const t=[];for(let e=0;e<n.length;++e)t.push(n.charCodeAt(e)&255);return t}function Ve(n,t){let e,r,s;const u=[];for(let d=0;d<n.length&&!((t-=2)<0);++d)e=n.charCodeAt(d),r=e>>8,s=e%256,u.push(s),u.push(r);return u}function le(n){return o.toByteArray(We(n))}function Ct(n,t,e,r){let s;for(s=0;s<r&&!(s+e>=t.length||s>=n.length);++s)t[s+e]=n[s];return s}function it(n,t){return n instanceof t||n!=null&&n.constructor!=null&&n.constructor.name!=null&&n.constructor.name===t.name}function qt(n){return n!==n}const Ye=function(){const n="0123456789abcdef",t=new Array(256);for(let e=0;e<16;++e){const r=e*16;for(let s=0;s<16;++s)t[r+s]=n[e]+n[s]}return t}();function ht(n){return typeof BigInt>"u"?Xe:n}function Xe(){throw new Error("BigInt not supported")}})(st);const Lt=st.Buffer;var xe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},be={exports:{}};(function(i,o){(function(c,h){i.exports=h()})(xe,function(){/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var c=Object.prototype.toString,h=Array.isArray||function(w){return c.call(w)==="[object Array]"};function p(E){return typeof E=="function"}function l(E){return h(E)?"array":typeof E}function f(E){return E.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function g(E,w){return E!=null&&typeof E=="object"&&w in E}function y(E,w){return E!=null&&typeof E!="object"&&E.hasOwnProperty&&E.hasOwnProperty(w)}var m=RegExp.prototype.test;function a(E,w){return m.call(E,w)}var F=/\S/;function v(E){return!a(F,E)}var S={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function N(E){return String(E).replace(/[&<>"'`=\/]/g,function(x){return S[x]})}var O=/\s*/,dt=/\s+/,mt=/\s*=/,et=/\s*\}/,xt=/#|\^|\/|>|\{|&|=|!/;function ft(E,w){if(!E)return[];var x=!1,b=[],I=[],B=[],A=!1,$=!1,P="",L=0;function nt(){if(A&&!$)for(;B.length;)delete I[B.pop()];else B=[];A=!1,$=!1}var ot,T,j;function vt(q){if(typeof q=="string"&&(q=q.split(dt,2)),!h(q)||q.length!==2)throw new Error("Invalid tags: "+q);ot=new RegExp(f(q[0])+"\\s*"),T=new RegExp("\\s*"+f(q[1])),j=new RegExp("\\s*"+f("}"+q[1]))}vt(w||J.tags);for(var D=new gt(E),tt,H,G,Z,lt,rt;!D.eos();){if(tt=D.pos,G=D.scanUntil(ot),G)for(var At=0,Tt=G.length;At<Tt;++At)Z=G.charAt(At),v(Z)?(B.push(I.length),P+=Z):($=!0,x=!0,P+=" "),I.push(["text",Z,tt,tt+1]),tt+=1,Z===`
`&&(nt(),P="",L=0,x=!1);if(!D.scan(ot))break;if(A=!0,H=D.scan(xt)||"name",D.scan(O),H==="="?(G=D.scanUntil(mt),D.scan(mt),D.scanUntil(T)):H==="{"?(G=D.scanUntil(j),D.scan(et),D.scanUntil(T),H="&"):G=D.scanUntil(T),!D.scan(T))throw new Error("Unclosed tag at "+D.pos);if(H==">"?lt=[H,G,tt,D.pos,P,L,x]:lt=[H,G,tt,D.pos],L++,I.push(lt),H==="#"||H==="^")b.push(lt);else if(H==="/"){if(rt=b.pop(),!rt)throw new Error('Unopened section "'+G+'" at '+tt);if(rt[1]!==G)throw new Error('Unclosed section "'+rt[1]+'" at '+tt)}else H==="name"||H==="{"||H==="&"?$=!0:H==="="&&vt(G)}if(nt(),rt=b.pop(),rt)throw new Error('Unclosed section "'+rt[1]+'" at '+D.pos);return bt(Bt(I))}function Bt(E){for(var w=[],x,b,I=0,B=E.length;I<B;++I)x=E[I],x&&(x[0]==="text"&&b&&b[0]==="text"?(b[1]+=x[1],b[3]=x[3]):(w.push(x),b=x));return w}function bt(E){for(var w=[],x=w,b=[],I,B,A=0,$=E.length;A<$;++A)switch(I=E[A],I[0]){case"#":case"^":x.push(I),b.push(I),x=I[4]=[];break;case"/":B=b.pop(),B[5]=I[2],x=b.length>0?b[b.length-1][4]:w;break;default:x.push(I)}return w}function gt(E){this.string=E,this.tail=E,this.pos=0}gt.prototype.eos=function(){return this.tail===""},gt.prototype.scan=function(w){var x=this.tail.match(w);if(!x||x.index!==0)return"";var b=x[0];return this.tail=this.tail.substring(b.length),this.pos+=b.length,b},gt.prototype.scanUntil=function(w){var x=this.tail.search(w),b;switch(x){case-1:b=this.tail,this.tail="";break;case 0:b="";break;default:b=this.tail.substring(0,x),this.tail=this.tail.substring(x)}return this.pos+=b.length,b};function W(E,w){this.view=E,this.cache={".":this.view},this.parent=w}W.prototype.push=function(w){return new W(w,this)},W.prototype.lookup=function(w){var x=this.cache,b;if(x.hasOwnProperty(w))b=x[w];else{for(var I=this,B,A,$,P=!1;I;){if(w.indexOf(".")>0)for(B=I.view,A=w.split("."),$=0;B!=null&&$<A.length;)$===A.length-1&&(P=g(B,A[$])||y(B,A[$])),B=B[A[$++]];else B=I.view[w],P=g(I.view,w);if(P){b=B;break}I=I.parent}x[w]=b}return p(b)&&(b=b.call(this.view)),b};function K(){this.templateCache={_cache:{},set:function(w,x){this._cache[w]=x},get:function(w){return this._cache[w]},clear:function(){this._cache={}}}}K.prototype.clearCache=function(){typeof this.templateCache<"u"&&this.templateCache.clear()},K.prototype.parse=function(w,x){var b=this.templateCache,I=w+":"+(x||J.tags).join(":"),B=typeof b<"u",A=B?b.get(I):void 0;return A==null&&(A=ft(w,x),B&&b.set(I,A)),A},K.prototype.render=function(w,x,b,I){var B=this.parse(w,I),A=x instanceof W?x:new W(x,void 0);return this.renderTokens(B,A,b,w,I)},K.prototype.renderTokens=function(w,x,b,I,B){for(var A="",$,P,L,nt=0,ot=w.length;nt<ot;++nt)L=void 0,$=w[nt],P=$[0],P==="#"?L=this.renderSection($,x,b,I):P==="^"?L=this.renderInverted($,x,b,I):P===">"?L=this.renderPartial($,x,b,B):P==="&"?L=this.unescapedValue($,x):P==="name"?L=this.escapedValue($,x):P==="text"&&(L=this.rawValue($)),L!==void 0&&(A+=L);return A},K.prototype.renderSection=function(w,x,b,I){var B=this,A="",$=x.lookup(w[1]);function P(ot){return B.render(ot,x,b)}if($){if(h($))for(var L=0,nt=$.length;L<nt;++L)A+=this.renderTokens(w[4],x.push($[L]),b,I);else if(typeof $=="object"||typeof $=="string"||typeof $=="number")A+=this.renderTokens(w[4],x.push($),b,I);else if(p($)){if(typeof I!="string")throw new Error("Cannot use higher-order sections without the original template");$=$.call(x.view,I.slice(w[3],w[5]),P),$!=null&&(A+=$)}else A+=this.renderTokens(w[4],x,b,I);return A}},K.prototype.renderInverted=function(w,x,b,I){var B=x.lookup(w[1]);if(!B||h(B)&&B.length===0)return this.renderTokens(w[4],x,b,I)},K.prototype.indentPartial=function(w,x,b){for(var I=x.replace(/[^ \t]/g,""),B=w.split(`
`),A=0;A<B.length;A++)B[A].length&&(A>0||!b)&&(B[A]=I+B[A]);return B.join(`
`)},K.prototype.renderPartial=function(w,x,b,I){if(b){var B=p(b)?b(w[1]):b[w[1]];if(B!=null){var A=w[6],$=w[5],P=w[4],L=B;return $==0&&P&&(L=this.indentPartial(B,P,A)),this.renderTokens(this.parse(L,I),x,b,L)}}},K.prototype.unescapedValue=function(w,x){var b=x.lookup(w[1]);if(b!=null)return b},K.prototype.escapedValue=function(w,x){var b=x.lookup(w[1]);if(b!=null)return J.escape(b)},K.prototype.rawValue=function(w){return w[1]};var J={name:"mustache.js",version:"4.0.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(E){yt.templateCache=E},get templateCache(){return yt.templateCache}},yt=new K;return J.clearCache=function(){return yt.clearCache()},J.parse=function(w,x){return yt.parse(w,x)},J.render=function(w,x,b,I){if(typeof w!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+l(w)+'" was given as the first argument for mustache#render(template, view, partials)');return yt.render(w,x,b,I)},J.escape=N,J.Scanner=gt,J.Context=W,J.Writer=K,J})})(be);/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */function Ee(i){return i instanceof Uint8Array||ArrayBuffer.isView(i)&&i.constructor.name==="Uint8Array"}function Gt(i,o){return Array.isArray(o)?o.length===0?!0:i?o.every(c=>typeof c=="string"):o.every(c=>Number.isSafeInteger(c)):!1}function Mt(i,o){if(typeof o!="string")throw new Error(`${i}: string expected`);return!0}function Wt(i){if(!Number.isSafeInteger(i))throw new Error(`invalid integer: ${i}`)}function _t(i){if(!Array.isArray(i))throw new Error("array expected")}function Jt(i,o){if(!Gt(!0,o))throw new Error(`${i}: array of strings expected`)}function Ie(i,o){if(!Gt(!1,o))throw new Error(`${i}: array of numbers expected`)}function Be(...i){const o=l=>l,c=(l,f)=>g=>l(f(g)),h=i.map(l=>l.encode).reduceRight(c,o),p=i.map(l=>l.decode).reduce(c,o);return{encode:h,decode:p}}function ve(i){const o=typeof i=="string"?i.split(""):i,c=o.length;Jt("alphabet",o);const h=new Map(o.map((p,l)=>[p,l]));return{encode:p=>(_t(p),p.map(l=>{if(!Number.isSafeInteger(l)||l<0||l>=c)throw new Error(`alphabet.encode: digit index outside alphabet "${l}". Allowed: ${i}`);return o[l]})),decode:p=>(_t(p),p.map(l=>{Mt("alphabet.decode",l);const f=h.get(l);if(f===void 0)throw new Error(`Unknown letter: "${l}". Allowed: ${i}`);return f}))}}function Ae(i=""){return Mt("join",i),{encode:o=>(Jt("join.decode",o),o.join(i)),decode:o=>(Mt("join.decode",o),o.split(i))}}function Vt(i,o,c){if(o<2)throw new Error(`convertRadix: invalid from=${o}, base cannot be less than 2`);if(c<2)throw new Error(`convertRadix: invalid to=${c}, base cannot be less than 2`);if(_t(i),!i.length)return[];let h=0;const p=[],l=Array.from(i,g=>{if(Wt(g),g<0||g>=o)throw new Error(`invalid integer: ${g}`);return g}),f=l.length;for(;;){let g=0,y=!0;for(let m=h;m<f;m++){const a=l[m],F=o*g,v=F+a;if(!Number.isSafeInteger(v)||F/o!==g||v-a!==F)throw new Error("convertRadix: carry overflow");const S=v/c;g=v%c;const N=Math.floor(S);if(l[m]=N,!Number.isSafeInteger(N)||N*c+g!==v)throw new Error("convertRadix: carry overflow");if(y)N?y=!1:h=m;else continue}if(p.push(g),y)break}for(let g=0;g<i.length-1&&i[g]===0;g++)p.push(0);return p.reverse()}function Se(i){Wt(i);const o=2**8;return{encode:c=>{if(!Ee(c))throw new Error("radix.encode input should be Uint8Array");return Vt(Array.from(c),o,i)},decode:c=>(Ie("radix.decode",c),Uint8Array.from(Vt(c,i,o)))}}const $e=(i=>Be(Se(58),ve(i),Ae("")))("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");var Fe=24;10n**BigInt(Fe);function ke(i){return $e.decode(i)}const Dt="m/44'/397'/0'/0'/1'";function Et(i,o){return i==="sign-with-ledger"?`sign-with-ledger --seed-phrase-hd-path '${R(o||Dt)}'`:"sign-with-keychain"}function ct(i){if(i==="0")return"0";const o=24,c=i.padStart(o+1,"0"),h=c.slice(0,-o)||"0",p=c.slice(-o).replace(/0+$/,"");return p?`${h}.${p}`:h}function Yt(i){if(i==="0")return"0";const o=12,c=i.padStart(o+1,"0"),h=c.slice(0,-o)||"0",p=c.slice(-o).replace(/0+$/,"");return p?`${h}.${p}`:h}function R(i){return i.replace(/'/g,"'\\''")}function Xt({accountId:i,addFunctionCallKey:o,network:c,signingMethod:h="sign-with-keychain",ledgerHdPath:p}){const{contractId:l,publicKey:f,allowMethods:g,gasAllowance:y}=o;let m="'0.25 NEAR'";y&&(y.kind==="unlimited"?m="'unlimited'":m=`'${ct(y.amount)} NEAR'`);const a=["near account"];return a.push(`add-key '${R(i)}'`),a.push("grant-function-call-access"),a.push(`--allowance ${m}`),a.push(`--contract-account-id '${R(l)}'`),g.anyMethod||g.methodNames.length===0?a.push("--function-names ''"):a.push(`--function-names '${R(g.methodNames.join(", "))}'`),a.push(`use-manually-provided-public-key ${f}`),a.push(`network-config ${c}`),a.push(Et(h,p)),a.join(` \\
    `)}function Zt(i){switch(i.type){case"CreateAccount":return"add-action create-account";case"Transfer":return`add-action transfer '${ct(i.params.deposit)} NEAR'`;case"FunctionCall":{const o=JSON.stringify(i.params.args);return[`add-action function-call '${R(i.params.methodName)}'`,`json-args '${R(o)}'`,`prepaid-gas '${Yt(i.params.gas)} Tgas'`,`attached-deposit '${ct(i.params.deposit)} NEAR'`].join(" ")}case"AddKey":if(i.params.accessKey.permission==="FullAccess")return`add-action add-key grant-full-access use-manually-provided-public-key ${i.params.publicKey}`;{const o=i.params.accessKey.permission,c=["add-action add-key grant-function-call-access"];return o.allowance&&c.push(`--allowance '${ct(o.allowance)} NEAR'`),c.push(`--contract-account-id '${R(o.receiverId)}'`),o.methodNames&&o.methodNames.length>0&&c.push(`--function-names '${R(o.methodNames.join(", "))}'`),c.push(`use-manually-provided-public-key ${i.params.publicKey}`),c.join(" ")}case"DeleteKey":return`add-action delete-key ${i.params.publicKey}`;case"DeleteAccount":return`add-action delete-account beneficiary '${R(i.params.beneficiaryId)}'`;case"Stake":return`add-action stake '${ct(i.params.stake)} NEAR' ${i.params.publicKey}`;case"DeployContract":case"DeployGlobalContract":throw new Error(`${i.type} is not supported by NEAR CLI wallet — binary data cannot be passed via command line`);case"UseGlobalContract":{const o=i.params.contractIdentifier;return"accountId"in o?`add-action use-global-contract use-global-account-id '${R(o.accountId)}'`:`add-action use-global-contract use-global-hash '${R(o.codeHash)}'`}default:throw new Error("Unknown action type")}}function Qt({signerId:i,receiverId:o,actions:c,network:h,signingMethod:p="sign-with-keychain",ledgerHdPath:l}){const f=Et(p,l);if(c.length===1&&c[0].type==="FunctionCall"){const y=c[0].params,m=JSON.stringify(y.args);return["near contract","call-function",`as-transaction '${R(o)}' '${R(y.methodName)}'`,`json-args '${R(m)}'`,`prepaid-gas '${Yt(y.gas)} Tgas'`,`attached-deposit '${ct(y.deposit)} NEAR'`,`sign-as '${R(i)}'`,`network-config ${h}`,f].join(` \\
    `)}if(c.length===1&&c[0].type==="Transfer")return["near tokens",`'${R(i)}'`,`send-near '${R(o)}' '${ct(c[0].params.deposit)} NEAR'`,`network-config ${h}`,f].join(` \\
    `);if(c.length===1&&c[0].type==="AddKey"){const y=c[0],m=["near account"];if(m.push(`add-key '${R(i)}'`),y.params.accessKey.permission==="FullAccess")m.push("grant-full-access");else{const a=y.params.accessKey.permission;m.push("grant-function-call-access"),a.allowance&&m.push(`--allowance '${ct(a.allowance)} NEAR'`),m.push(`--contract-account-id '${R(a.receiverId)}'`),a.methodNames&&a.methodNames.length>0&&m.push(`--function-names '${R(a.methodNames.join(", "))}'`)}return m.push(`use-manually-provided-public-key ${y.params.publicKey}`),m.push(`network-config ${h}`),m.push(f),m.join(` \\
    `)}if(c.every(y=>y.type==="DeleteKey")){const y=c.map(m=>m.params.publicKey).join(",");return["near account",`delete-keys '${R(i)}' public-keys ${y}`,`network-config ${h}`,f].join(` \\
    `)}const g=c.map(Zt);return["near transaction",`construct-transaction '${R(i)}' '${R(o)}'`,...g,"skip",`network-config ${h}`,f].join(` \\
    `)}function Re({signerId:i,receiverId:o,actions:c,network:h,signingMethod:p="sign-with-keychain",ledgerHdPath:l}){const f=c.map(Zt);return["near transaction",`construct-meta-transaction '${R(i)}' '${R(o)}'`,...f,"skip",`network-config ${h}`,`${Et(p,l)} display`].join(` \\
    `)}function te({message:i,recipient:o,nonce:c,network:h,signerId:p,signingMethod:l="sign-with-keychain",ledgerHdPath:f}){const g=["near message sign-nep413",`utf8 '${R(i)}'`,`nonce '${R(c)}'`,`recipient '${R(o)}'`,`sign-as '${R(p)}'`];return l==="sign-with-ledger"?g.push(Et(l,f)):(g.push(Et(l,f)),g.push(`network-config ${h}`)),g.join(` \\
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
  `}function Te(i){return`
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
  `}function ee(i,o){return`
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
  `}function ne(i){return`
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
  `}function Ce(i,o){return`
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
  `}function Ne(i,o){return`
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
  `}function Pe(i){return`
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
  `}const X=()=>window.selector.storage;async function pt(i){return await X().get(`cli:${i}:accountId`)||""}async function Ot(i,o){await X().set(`cli:${i}:accountId`,o)}async function Le(i){await X().remove(`cli:${i}:accountId`)}async function jt(i){const o=await X().get(`cli:${i}:functionCallKey`);return o?JSON.parse(o):null}async function re(i,o){await X().set(`cli:${i}:functionCallKey`,JSON.stringify(o))}async function Me(i){await X().remove(`cli:${i}:functionCallKey`)}async function Ft(i){return await X().get(`cli:${i}:signingMethod`)==="sign-with-ledger"?"sign-with-ledger":"sign-with-keychain"}async function ie(i,o){await X().set(`cli:${i}:signingMethod`,o)}async function _e(i){await X().remove(`cli:${i}:signingMethod`)}async function kt(i){return await X().get(`cli:${i}:ledgerHdPath`)||Dt}async function oe(i,o){await X().set(`cli:${i}:ledgerHdPath`,o)}async function De(i){await X().remove(`cli:${i}:ledgerHdPath`)}function Rt(i){var h,p;const o=(p=(h=window.selector)==null?void 0:h.providers)==null?void 0:p[i],c=i==="mainnet"?"https://rpc.mainnet.near.org":"https://rpc.testnet.near.org";return o&&o.length>0?o[0]:c}async function Oe(i,o,c){const p=await(await fetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({jsonrpc:"2.0",id:1,method:"tx",params:{tx_hash:o,sender_account_id:c,wait_until:"NONE"}})})).json();if(p.error)throw new Error(p.error.message||JSON.stringify(p.error));return p.result}function It(i){document.head.innerHTML=Ue,document.body.innerHTML="";const o=document.createElement("div");return o.style.height="100%",o.innerHTML=i,document.body.appendChild(o),window.focus(),o}function ae(i){const o=i.getAttribute("data-command")||"";navigator.clipboard.writeText(o).then(()=>{const c=i.textContent;i.textContent="Copied!",setTimeout(()=>{i.textContent=c},1500)}).catch(()=>{var h;const c=(h=i.parentElement)==null?void 0:h.querySelector("code");if(c){const p=document.createRange();p.selectNodeContents(c);const l=window.getSelection();l==null||l.removeAllRanges(),l==null||l.addRange(p)}})}function Ht(i){const o=i.querySelectorAll(".copy-btn");o.forEach(c=>{c.addEventListener("click",()=>ae(c))}),document.addEventListener("keydown",c=>{const h=document.activeElement;h instanceof HTMLInputElement||h instanceof HTMLTextAreaElement||c.key==="c"&&o.length>0&&(c.preventDefault(),ae(o[0]))})}function ut(i,o){const c=i.querySelector("#error");c&&(c.textContent=o,c.style.display="block")}function se(i){return new Promise(o=>{const c=It(Te(i));window.selector.ui.showIframe();const h=c.querySelector("#account-id"),p=c.querySelector("#submit-btn"),l=()=>{const f=h.value.trim();if(!f){ut(c,"Please enter an account ID");return}o(f)};p.addEventListener("click",l),h.addEventListener("keydown",f=>{f.key==="Enter"&&l()}),requestAnimationFrame(()=>h.focus())})}function ce(i){return new Promise(o=>{const c=It(Pe({step:i.step,defaultHdPath:Dt}));window.selector.ui.showIframe();let h="sign-with-keychain";const p=c.querySelectorAll(".signing-method-card"),l=c.querySelector("#hd-path-group"),f=c.querySelector("#hd-path"),g=c.querySelector("#submit-signing-method-btn");function y(v){p.forEach(S=>{S.classList.remove("selected"),S.setAttribute("aria-pressed","false")}),v.classList.add("selected"),v.setAttribute("aria-pressed","true"),h=v.getAttribute("data-method"),l.style.display=h==="sign-with-ledger"?"block":"none"}const m=Array.from(p);p.forEach(v=>{v.addEventListener("click",()=>y(v)),v.addEventListener("keydown",S=>{if(S.key==="Enter"){S.preventDefault(),a();return}const N=m.indexOf(v);if(S.key==="ArrowRight"||S.key==="ArrowDown"){S.preventDefault();const O=m[(N+1)%m.length];y(O),O.focus()}else if(S.key==="ArrowLeft"||S.key==="ArrowUp"){S.preventDefault();const O=m[(N-1+m.length)%m.length];y(O),O.focus()}})});function a(){const v={signingMethod:h};if(h==="sign-with-ledger"){const S=f.value.trim();if(!S){ut(c,"Please enter an HD derivation path");return}v.ledgerHdPath=S}o(v)}g.addEventListener("click",a),c.addEventListener("keydown",v=>{v.key==="Enter"&&document.activeElement!==f&&(v.preventDefault(),a())});const F=c.querySelector(".signing-method-card.selected");F&&requestAnimationFrame(()=>F.focus())})}function je(i){const o=i.match(/(?:txns?|transactions)\/([A-Za-z0-9]{43,44})/);if(o)return o[1];const c=i.match(/(?:Transaction ID:\s*)?([A-Za-z0-9]{43,44})/);return c?c[1]:i}async function He(i,o,c,h=5){let p;for(let l=0;l<h;l++)try{return await Oe(i,o,c)}catch(f){p=f,l<h-1&&await new Promise(g=>setTimeout(g,2e3))}throw p??new Error(`Transaction ${o} not found after ${h} attempts`)}function Ut(i,o,c){return new Promise(h=>{const p=It(i);Ht(p),window.selector.ui.showIframe();const l=p.querySelector("#tx-hash"),f=p.querySelector("#verify-btn"),g=async()=>{const y=l.value.trim();if(!y){ut(p,"Please paste the transaction hash or explorer URL");return}const m=je(y);f.disabled=!0,f.textContent="Verifying...";try{const a=await He(o,m,c);h(a)}catch{ut(p,"Transaction not found. Please check the hash and try again."),f.disabled=!1,f.textContent="Verify"}};f.addEventListener("click",g),l.addEventListener("keydown",y=>{y.key==="Enter"&&g()})})}function ue(i,o){return new Promise(c=>{const h=It(Ce(i,o));Ht(h),window.selector.ui.showIframe();const p=h.querySelector("#sign-output");h.querySelector("#submit-sign-btn").addEventListener("click",()=>{const f=p.value.trim();if(!f){ut(h,"Please paste the command output");return}try{const g=f.match(/\{[\s\S]*"signature"[\s\S]*\}/);if(!g)throw new Error("No valid JSON found");const y=JSON.parse(g[0]);if(!y.signature||!y.publicKey)throw new Error("Missing signature or publicKey in output");const m=y.signature.replace(/^ed25519:/,"");c({accountId:y.accountId||"",publicKey:y.publicKey,signature:Lt.from(ke(m)).toString("base64")})}catch(g){ut(h,`Could not parse output: ${g.message}`)}})})}function Ke(i){const c=i.trim().match(/[A-Za-z0-9+/=]{20,}/g);return c?c.reduce((h,p)=>h.length>=p.length?h:p):null}function qe(i,o){return new Promise(c=>{const h=It(Ne(i,o));Ht(h),window.selector.ui.showIframe();const p=h.querySelector("#delegate-output");h.querySelector("#submit-delegate-btn").addEventListener("click",()=>{const f=p.value.trim();if(!f){ut(h,"Please paste the base64 output from the command");return}const g=Ke(f);if(!g){ut(h,"Could not find valid base64 data in the pasted output");return}c(g)})})}class ze{constructor(){at(this,"signIn",async({addFunctionCallKey:o,network:c})=>{const h=await pt(c),p=await jt(c),l=(p==null?void 0:p.publicKey)&&(!o||p.contractId===o.contractId&&p.publicKey===o.publicKey);if(h&&(!o||l))return[{accountId:h,publicKey:(p==null?void 0:p.publicKey)??""}];const f=!h;let g=1;f&&g++,o&&g++;let y=0;const m=h||await se({title:"Connect with NEAR CLI",subtitle:"Enter your NEAR account ID",buttonText:"Next",step:`Step ${++y} of ${g}`}),{signingMethod:a,ledgerHdPath:F}=await ce({step:`Step ${++y} of ${g}`});if(await ie(c,a),F&&await oe(c,F),o){const{publicKey:v}=o,S=Xt({accountId:m,addFunctionCallKey:o,network:c,signingMethod:a,ledgerHdPath:F}),N=Rt(c);await Ut(ee(S,`Step ${++y} of ${g}`),N,m);const O={publicKey:v,contractId:o.contractId};return await Ot(c,m),await re(c,O),[{accountId:m,publicKey:v}]}return await Ot(c,m),[{accountId:m,publicKey:""}]});at(this,"signInAndSignMessage",async({addFunctionCallKey:o,network:c,messageParams:h})=>{const{message:p,recipient:l,nonce:f}=h,g=await pt(c),y=await jt(c),m=!g,a=!!o&&(!(y!=null&&y.publicKey)||y.contractId!==o.contractId||y.publicKey!==o.publicKey);let F=2;m&&F++,a&&F++;let v=0;const S=g||await se({title:"Connect with NEAR CLI",subtitle:"Enter your NEAR account ID to sign in and sign a message",buttonText:"Next",step:`Step ${++v} of ${F}`}),{signingMethod:N,ledgerHdPath:O}=await ce({step:`Step ${++v} of ${F}`});await ie(c,N),O&&await oe(c,O);const dt=Lt.from(f).toString("base64"),mt=te({message:p,recipient:l,nonce:dt,network:c,signerId:S,signingMethod:N,ledgerHdPath:O}),et=await ue(mt,`Step ${++v} of ${F}`);let xt=et.publicKey;if(a&&o){xt=o.publicKey;const ft=Xt({accountId:S,addFunctionCallKey:o,network:c,signingMethod:N,ledgerHdPath:O}),Bt=Rt(c);await Ut(ee(ft,`Step ${++v} of ${F}`),Bt,S);const bt={publicKey:o.publicKey,contractId:o.contractId};await re(c,bt)}return await Ot(c,S),[{accountId:S,publicKey:xt,signedMessage:{accountId:et.accountId||S,publicKey:et.publicKey,signature:et.signature}}]});at(this,"signOut",async({network:o})=>{await Le(o),await Me(o),await _e(o),await De(o)});at(this,"getAccounts",async({network:o})=>{const c=await pt(o);if(!c)return[];const h=await jt(o);return[{accountId:c,publicKey:(h==null?void 0:h.publicKey)??""}]});at(this,"signAndSendTransaction",async({receiverId:o,actions:c,network:h})=>{const p=await pt(h);if(!p)throw new Error("Wallet not signed in");const l=await Ft(h),f=l==="sign-with-ledger"?await kt(h):void 0,g=Qt({signerId:p,receiverId:o,actions:c,network:h,signingMethod:l,ledgerHdPath:f});try{const y=Rt(h);return await Ut(ne(g),y,p)}finally{window.selector.ui.hideIframe()}});at(this,"signAndSendTransactions",async({transactions:o,network:c})=>{const h=await pt(c);if(!h)throw new Error("Wallet not signed in");const p=await Ft(c),l=p==="sign-with-ledger"?await kt(c):void 0,f=Rt(c),g=[];try{for(const y of o){const m=Qt({signerId:h,receiverId:y.receiverId,actions:y.actions,network:c,signingMethod:p,ledgerHdPath:l}),a=await Ut(ne(m),f,h);g.push(a)}return g}finally{window.selector.ui.hideIframe()}});at(this,"signMessage",async({message:o,nonce:c,recipient:h,network:p})=>{const l=await pt(p);if(!l)throw new Error("Wallet not signed in");const f=await Ft(p),g=f==="sign-with-ledger"?await kt(p):void 0,y=Lt.from(c).toString("base64"),m=te({message:o,recipient:h,nonce:y,network:p,signerId:l,signingMethod:f,ledgerHdPath:g});try{const a=await ue(m);return{accountId:a.accountId||l,publicKey:a.publicKey,signature:a.signature}}finally{window.selector.ui.hideIframe()}});at(this,"signDelegateActions",async({delegateActions:o,network:c})=>{const h=await pt(c);if(!h)throw new Error("Wallet not signed in");const p=await Ft(c),l=p==="sign-with-ledger"?await kt(c):void 0,f=[];try{const g=o.length;for(let y=0;y<o.length;y++){const m=o[y],a=Re({signerId:h,receiverId:m.receiverId,actions:m.actions,network:c,signingMethod:p,ledgerHdPath:l}),F=g>1?`Step ${y+1} of ${g}`:void 0,v=await qe(a,F);f.push(v)}return{signedDelegateActions:f}}finally{window.selector.ui.hideIframe()}})}}window.selector.ready(new ze)})();
