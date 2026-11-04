var Qe=Object.defineProperty;var tn=(D,v,T)=>v in D?Qe(D,v,{enumerable:!0,configurable:!0,writable:!0,value:T}):D[v]=T;var P=(D,v,T)=>tn(D,typeof v!="symbol"?v+"":v,T);(function(){"use strict";var D={},v={};v.byteLength=ee,v.toByteArray=re,v.fromByteArray=ae;for(var T=[],C=[],Qt=typeof Uint8Array<"u"?Uint8Array:Array,ct="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",z=0,te=ct.length;z<te;++z)T[z]=ct[z],C[ct.charCodeAt(z)]=z;C[45]=62,C[95]=63;function Et(i){var o=i.length;if(o%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var s=i.indexOf("=");s===-1&&(s=o);var l=s===o?0:4-s%4;return[s,l]}function ee(i){var o=Et(i),s=o[0],l=o[1];return(s+l)*3/4-l}function ne(i,o,s){return(o+s)*3/4-s}function re(i){var o,s=Et(i),l=s[0],h=s[1],d=new Qt(ne(i,l,h)),f=0,g=h>0?l-4:l,y;for(y=0;y<g;y+=4)o=C[i.charCodeAt(y)]<<18|C[i.charCodeAt(y+1)]<<12|C[i.charCodeAt(y+2)]<<6|C[i.charCodeAt(y+3)],d[f++]=o>>16&255,d[f++]=o>>8&255,d[f++]=o&255;return h===2&&(o=C[i.charCodeAt(y)]<<2|C[i.charCodeAt(y+1)]>>4,d[f++]=o&255),h===1&&(o=C[i.charCodeAt(y)]<<10|C[i.charCodeAt(y+1)]<<4|C[i.charCodeAt(y+2)]>>2,d[f++]=o>>8&255,d[f++]=o&255),d}function ie(i){return T[i>>18&63]+T[i>>12&63]+T[i>>6&63]+T[i&63]}function oe(i,o,s){for(var l,h=[],d=o;d<s;d+=3)l=(i[d]<<16&16711680)+(i[d+1]<<8&65280)+(i[d+2]&255),h.push(ie(l));return h.join("")}function ae(i){for(var o,s=i.length,l=s%3,h=[],d=16383,f=0,g=s-l;f<g;f+=d)h.push(oe(i,f,f+d>g?g:f+d));return l===1?(o=i[s-1],h.push(T[o>>2]+T[o<<4&63]+"==")):l===2&&(o=(i[s-2]<<8)+i[s-1],h.push(T[o>>10]+T[o>>4&63]+T[o<<2&63]+"=")),h.join("")}var st={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */st.read=function(i,o,s,l,h){var d,f,g=h*8-l-1,y=(1<<g)-1,m=y>>1,c=-7,E=s?h-1:0,w=s?-1:1,x=i[o+E];for(E+=w,d=x&(1<<-c)-1,x>>=-c,c+=g;c>0;d=d*256+i[o+E],E+=w,c-=8);for(f=d&(1<<-c)-1,d>>=-c,c+=l;c>0;f=f*256+i[o+E],E+=w,c-=8);if(d===0)d=1-m;else{if(d===y)return f?NaN:(x?-1:1)*(1/0);f=f+Math.pow(2,l),d=d-m}return(x?-1:1)*f*Math.pow(2,d-l)},st.write=function(i,o,s,l,h,d){var f,g,y,m=d*8-h-1,c=(1<<m)-1,E=c>>1,w=h===23?Math.pow(2,-24)-Math.pow(2,-77):0,x=l?0:d-1,F=l?1:-1,k=o<0||o===0&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(g=isNaN(o)?1:0,f=c):(f=Math.floor(Math.log(o)/Math.LN2),o*(y=Math.pow(2,-f))<1&&(f--,y*=2),f+E>=1?o+=w/y:o+=w*Math.pow(2,1-E),o*y>=2&&(f++,y/=2),f+E>=c?(g=0,f=c):f+E>=1?(g=(o*y-1)*Math.pow(2,h),f=f+E):(g=o*Math.pow(2,E-1)*Math.pow(2,h),f=0));h>=8;i[s+x]=g&255,x+=F,g/=256,h-=8);for(f=f<<h|g,m+=h;m>0;i[s+x]=f&255,x+=F,f/=256,m-=8);i[s+x-F]|=k*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(i){const o=v,s=st,l=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;i.Buffer=c,i.SlowBuffer=mt,i.INSPECT_MAX_BYTES=50;const h=2147483647;i.kMaxLength=h;const{Uint8Array:d,ArrayBuffer:f,SharedArrayBuffer:g}=globalThis;c.TYPED_ARRAY_SUPPORT=y(),!c.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function y(){try{const n=new d(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,d.prototype),Object.setPrototypeOf(n,t),n.foo()===42}catch{return!1}}Object.defineProperty(c.prototype,"parent",{enumerable:!0,get:function(){if(c.isBuffer(this))return this.buffer}}),Object.defineProperty(c.prototype,"offset",{enumerable:!0,get:function(){if(c.isBuffer(this))return this.byteOffset}});function m(n){if(n>h)throw new RangeError('The value "'+n+'" is invalid for option "size"');const t=new d(n);return Object.setPrototypeOf(t,c.prototype),t}function c(n,t,e){if(typeof n=="number"){if(typeof t=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return F(n)}return E(n,t,e)}c.poolSize=8192;function E(n,t,e){if(typeof n=="string")return k(n,t);if(f.isView(n))return yt(n);if(n==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof n);if(M(n,f)||n&&M(n.buffer,f)||typeof g<"u"&&(M(n,g)||n&&M(n.buffer,g)))return K(n,t,e);if(typeof n=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const r=n.valueOf&&n.valueOf();if(r!=null&&r!==n)return c.from(r,t,e);const a=it(n);if(a)return a;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof n[Symbol.toPrimitive]=="function")return c.from(n[Symbol.toPrimitive]("string"),t,e);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof n)}c.from=function(n,t,e){return E(n,t,e)},Object.setPrototypeOf(c.prototype,d.prototype),Object.setPrototypeOf(c,d);function w(n){if(typeof n!="number")throw new TypeError('"size" argument must be of type number');if(n<0)throw new RangeError('The value "'+n+'" is invalid for option "size"')}function x(n,t,e){return w(n),n<=0?m(n):t!==void 0?typeof e=="string"?m(n).fill(t,e):m(n).fill(t):m(n)}c.alloc=function(n,t,e){return x(n,t,e)};function F(n){return w(n),m(n<0?0:X(n)|0)}c.allocUnsafe=function(n){return F(n)},c.allocUnsafeSlow=function(n){return F(n)};function k(n,t){if((typeof t!="string"||t==="")&&(t="utf8"),!c.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const e=ot(n,t)|0;let r=m(e);const a=r.write(n,t);return a!==e&&(r=r.slice(0,a)),r}function Y(n){const t=n.length<0?0:X(n.length)|0,e=m(t);for(let r=0;r<t;r+=1)e[r]=n[r]&255;return e}function yt(n){if(M(n,d)){const t=new d(n);return K(t.buffer,t.byteOffset,t.byteLength)}return Y(n)}function K(n,t,e){if(t<0||n.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(n.byteLength<t+(e||0))throw new RangeError('"length" is outside of buffer bounds');let r;return t===void 0&&e===void 0?r=new d(n):e===void 0?r=new d(n,t):r=new d(n,t,e),Object.setPrototypeOf(r,c.prototype),r}function it(n){if(c.isBuffer(n)){const t=X(n.length)|0,e=m(t);return e.length===0||n.copy(e,0,0,t),e}if(n.length!==void 0)return typeof n.length!="number"||bt(n.length)?m(0):Y(n);if(n.type==="Buffer"&&Array.isArray(n.data))return Y(n.data)}function X(n){if(n>=h)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+h.toString(16)+" bytes");return n|0}function mt(n){return+n!=n&&(n=0),c.alloc(+n)}c.isBuffer=function(t){return t!=null&&t._isBuffer===!0&&t!==c.prototype},c.compare=function(t,e){if(M(t,d)&&(t=c.from(t,t.offset,t.byteLength)),M(e,d)&&(e=c.from(e,e.offset,e.byteLength)),!c.isBuffer(t)||!c.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let r=t.length,a=e.length;for(let u=0,p=Math.min(r,a);u<p;++u)if(t[u]!==e[u]){r=t[u],a=e[u];break}return r<a?-1:a<r?1:0},c.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},c.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(t.length===0)return c.alloc(0);let r;if(e===void 0)for(e=0,r=0;r<t.length;++r)e+=t[r].length;const a=c.allocUnsafe(e);let u=0;for(r=0;r<t.length;++r){let p=t[r];if(M(p,d))u+p.length>a.length?(c.isBuffer(p)||(p=c.from(p)),p.copy(a,u)):d.prototype.set.call(a,p,u);else if(c.isBuffer(p))p.copy(a,u);else throw new TypeError('"list" argument must be an Array of Buffers');u+=p.length}return a};function ot(n,t){if(c.isBuffer(n))return n.length;if(f.isView(n)||M(n,f))return n.byteLength;if(typeof n!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof n);const e=n.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&e===0)return 0;let a=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":return xt(n).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return e*2;case"hex":return e>>>1;case"base64":return Zt(n).length;default:if(a)return r?-1:xt(n).length;t=(""+t).toLowerCase(),a=!0}}c.byteLength=ot;function Ne(n,t,e){let r=!1;if((t===void 0||t<0)&&(t=0),t>this.length||((e===void 0||e>this.length)&&(e=this.length),e<=0)||(e>>>=0,t>>>=0,e<=t))return"";for(n||(n="utf8");;)switch(n){case"hex":return qe(this,t,e);case"utf8":case"utf-8":return jt(this,t,e);case"ascii":return Oe(this,t,e);case"latin1":case"binary":return je(this,t,e);case"base64":return He(this,t,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ze(this,t,e);default:if(r)throw new TypeError("Unknown encoding: "+n);n=(n+"").toLowerCase(),r=!0}}c.prototype._isBuffer=!0;function q(n,t,e){const r=n[t];n[t]=n[e],n[e]=r}c.prototype.swap16=function(){const t=this.length;if(t%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)q(this,e,e+1);return this},c.prototype.swap32=function(){const t=this.length;if(t%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)q(this,e,e+3),q(this,e+1,e+2);return this},c.prototype.swap64=function(){const t=this.length;if(t%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)q(this,e,e+7),q(this,e+1,e+6),q(this,e+2,e+5),q(this,e+3,e+4);return this},c.prototype.toString=function(){const t=this.length;return t===0?"":arguments.length===0?jt(this,0,t):Ne.apply(this,arguments)},c.prototype.toLocaleString=c.prototype.toString,c.prototype.equals=function(t){if(!c.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t?!0:c.compare(this,t)===0},c.prototype.inspect=function(){let t="";const e=i.INSPECT_MAX_BYTES;return t=this.toString("hex",0,e).replace(/(.{2})/g,"$1 ").trim(),this.length>e&&(t+=" ... "),"<Buffer "+t+">"},l&&(c.prototype[l]=c.prototype.inspect),c.prototype.compare=function(t,e,r,a,u){if(M(t,d)&&(t=c.from(t,t.offset,t.byteLength)),!c.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(e===void 0&&(e=0),r===void 0&&(r=t?t.length:0),a===void 0&&(a=0),u===void 0&&(u=this.length),e<0||r>t.length||a<0||u>this.length)throw new RangeError("out of range index");if(a>=u&&e>=r)return 0;if(a>=u)return-1;if(e>=r)return 1;if(e>>>=0,r>>>=0,a>>>=0,u>>>=0,this===t)return 0;let p=u-a,b=r-e;const $=Math.min(p,b),A=this.slice(a,u),S=t.slice(e,r);for(let B=0;B<$;++B)if(A[B]!==S[B]){p=A[B],b=S[B];break}return p<b?-1:b<p?1:0};function Kt(n,t,e,r,a){if(n.length===0)return-1;if(typeof e=="string"?(r=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,bt(e)&&(e=a?0:n.length-1),e<0&&(e=n.length+e),e>=n.length){if(a)return-1;e=n.length-1}else if(e<0)if(a)e=0;else return-1;if(typeof t=="string"&&(t=c.from(t,r)),c.isBuffer(t))return t.length===0?-1:Ot(n,t,e,r,a);if(typeof t=="number")return t=t&255,typeof d.prototype.indexOf=="function"?a?d.prototype.indexOf.call(n,t,e):d.prototype.lastIndexOf.call(n,t,e):Ot(n,[t],e,r,a);throw new TypeError("val must be string, number or Buffer")}function Ot(n,t,e,r,a){let u=1,p=n.length,b=t.length;if(r!==void 0&&(r=String(r).toLowerCase(),r==="ucs2"||r==="ucs-2"||r==="utf16le"||r==="utf-16le")){if(n.length<2||t.length<2)return-1;u=2,p/=2,b/=2,e/=2}function $(S,B){return u===1?S[B]:S.readUInt16BE(B*u)}let A;if(a){let S=-1;for(A=e;A<p;A++)if($(n,A)===$(t,S===-1?0:A-S)){if(S===-1&&(S=A),A-S+1===b)return S*u}else S!==-1&&(A-=A-S),S=-1}else for(e+b>p&&(e=p-b),A=e;A>=0;A--){let S=!0;for(let B=0;B<b;B++)if($(n,A+B)!==$(t,B)){S=!1;break}if(S)return A}return-1}c.prototype.includes=function(t,e,r){return this.indexOf(t,e,r)!==-1},c.prototype.indexOf=function(t,e,r){return Kt(this,t,e,r,!0)},c.prototype.lastIndexOf=function(t,e,r){return Kt(this,t,e,r,!1)};function Le(n,t,e,r){e=Number(e)||0;const a=n.length-e;r?(r=Number(r),r>a&&(r=a)):r=a;const u=t.length;r>u/2&&(r=u/2);let p;for(p=0;p<r;++p){const b=parseInt(t.substr(p*2,2),16);if(bt(b))return p;n[e+p]=b}return p}function Me(n,t,e,r){return at(xt(t,n.length-e),n,e,r)}function Pe(n,t,e,r){return at(We(t),n,e,r)}function De(n,t,e,r){return at(Zt(t),n,e,r)}function _e(n,t,e,r){return at(Ye(t,n.length-e),n,e,r)}c.prototype.write=function(t,e,r,a){if(e===void 0)a="utf8",r=this.length,e=0;else if(r===void 0&&typeof e=="string")a=e,r=this.length,e=0;else if(isFinite(e))e=e>>>0,isFinite(r)?(r=r>>>0,a===void 0&&(a="utf8")):(a=r,r=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const u=this.length-e;if((r===void 0||r>u)&&(r=u),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");a||(a="utf8");let p=!1;for(;;)switch(a){case"hex":return Le(this,t,e,r);case"utf8":case"utf-8":return Me(this,t,e,r);case"ascii":case"latin1":case"binary":return Pe(this,t,e,r);case"base64":return De(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return _e(this,t,e,r);default:if(p)throw new TypeError("Unknown encoding: "+a);a=(""+a).toLowerCase(),p=!0}},c.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function He(n,t,e){return t===0&&e===n.length?o.fromByteArray(n):o.fromByteArray(n.slice(t,e))}function jt(n,t,e){e=Math.min(n.length,e);const r=[];let a=t;for(;a<e;){const u=n[a];let p=null,b=u>239?4:u>223?3:u>191?2:1;if(a+b<=e){let $,A,S,B;switch(b){case 1:u<128&&(p=u);break;case 2:$=n[a+1],($&192)===128&&(B=(u&31)<<6|$&63,B>127&&(p=B));break;case 3:$=n[a+1],A=n[a+2],($&192)===128&&(A&192)===128&&(B=(u&15)<<12|($&63)<<6|A&63,B>2047&&(B<55296||B>57343)&&(p=B));break;case 4:$=n[a+1],A=n[a+2],S=n[a+3],($&192)===128&&(A&192)===128&&(S&192)===128&&(B=(u&15)<<18|($&63)<<12|(A&63)<<6|S&63,B>65535&&B<1114112&&(p=B))}}p===null?(p=65533,b=1):p>65535&&(p-=65536,r.push(p>>>10&1023|55296),p=56320|p&1023),r.push(p),a+=b}return Ke(r)}const qt=4096;function Ke(n){const t=n.length;if(t<=qt)return String.fromCharCode.apply(String,n);let e="",r=0;for(;r<t;)e+=String.fromCharCode.apply(String,n.slice(r,r+=qt));return e}function Oe(n,t,e){let r="";e=Math.min(n.length,e);for(let a=t;a<e;++a)r+=String.fromCharCode(n[a]&127);return r}function je(n,t,e){let r="";e=Math.min(n.length,e);for(let a=t;a<e;++a)r+=String.fromCharCode(n[a]);return r}function qe(n,t,e){const r=n.length;(!t||t<0)&&(t=0),(!e||e<0||e>r)&&(e=r);let a="";for(let u=t;u<e;++u)a+=Xe[n[u]];return a}function ze(n,t,e){const r=n.slice(t,e);let a="";for(let u=0;u<r.length-1;u+=2)a+=String.fromCharCode(r[u]+r[u+1]*256);return a}c.prototype.slice=function(t,e){const r=this.length;t=~~t,e=e===void 0?r:~~e,t<0?(t+=r,t<0&&(t=0)):t>r&&(t=r),e<0?(e+=r,e<0&&(e=0)):e>r&&(e=r),e<t&&(e=t);const a=this.subarray(t,e);return Object.setPrototypeOf(a,c.prototype),a};function U(n,t,e){if(n%1!==0||n<0)throw new RangeError("offset is not uint");if(n+t>e)throw new RangeError("Trying to access beyond buffer length")}c.prototype.readUintLE=c.prototype.readUIntLE=function(t,e,r){t=t>>>0,e=e>>>0,r||U(t,e,this.length);let a=this[t],u=1,p=0;for(;++p<e&&(u*=256);)a+=this[t+p]*u;return a},c.prototype.readUintBE=c.prototype.readUIntBE=function(t,e,r){t=t>>>0,e=e>>>0,r||U(t,e,this.length);let a=this[t+--e],u=1;for(;e>0&&(u*=256);)a+=this[t+--e]*u;return a},c.prototype.readUint8=c.prototype.readUInt8=function(t,e){return t=t>>>0,e||U(t,1,this.length),this[t]},c.prototype.readUint16LE=c.prototype.readUInt16LE=function(t,e){return t=t>>>0,e||U(t,2,this.length),this[t]|this[t+1]<<8},c.prototype.readUint16BE=c.prototype.readUInt16BE=function(t,e){return t=t>>>0,e||U(t,2,this.length),this[t]<<8|this[t+1]},c.prototype.readUint32LE=c.prototype.readUInt32LE=function(t,e){return t=t>>>0,e||U(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+this[t+3]*16777216},c.prototype.readUint32BE=c.prototype.readUInt32BE=function(t,e){return t=t>>>0,e||U(t,4,this.length),this[t]*16777216+(this[t+1]<<16|this[t+2]<<8|this[t+3])},c.prototype.readBigUInt64LE=O(function(t){t=t>>>0,J(t,"offset");const e=this[t],r=this[t+7];(e===void 0||r===void 0)&&Z(t,this.length-8);const a=e+this[++t]*2**8+this[++t]*2**16+this[++t]*2**24,u=this[++t]+this[++t]*2**8+this[++t]*2**16+r*2**24;return BigInt(a)+(BigInt(u)<<BigInt(32))}),c.prototype.readBigUInt64BE=O(function(t){t=t>>>0,J(t,"offset");const e=this[t],r=this[t+7];(e===void 0||r===void 0)&&Z(t,this.length-8);const a=e*2**24+this[++t]*2**16+this[++t]*2**8+this[++t],u=this[++t]*2**24+this[++t]*2**16+this[++t]*2**8+r;return(BigInt(a)<<BigInt(32))+BigInt(u)}),c.prototype.readIntLE=function(t,e,r){t=t>>>0,e=e>>>0,r||U(t,e,this.length);let a=this[t],u=1,p=0;for(;++p<e&&(u*=256);)a+=this[t+p]*u;return u*=128,a>=u&&(a-=Math.pow(2,8*e)),a},c.prototype.readIntBE=function(t,e,r){t=t>>>0,e=e>>>0,r||U(t,e,this.length);let a=e,u=1,p=this[t+--a];for(;a>0&&(u*=256);)p+=this[t+--a]*u;return u*=128,p>=u&&(p-=Math.pow(2,8*e)),p},c.prototype.readInt8=function(t,e){return t=t>>>0,e||U(t,1,this.length),this[t]&128?(255-this[t]+1)*-1:this[t]},c.prototype.readInt16LE=function(t,e){t=t>>>0,e||U(t,2,this.length);const r=this[t]|this[t+1]<<8;return r&32768?r|4294901760:r},c.prototype.readInt16BE=function(t,e){t=t>>>0,e||U(t,2,this.length);const r=this[t+1]|this[t]<<8;return r&32768?r|4294901760:r},c.prototype.readInt32LE=function(t,e){return t=t>>>0,e||U(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},c.prototype.readInt32BE=function(t,e){return t=t>>>0,e||U(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},c.prototype.readBigInt64LE=O(function(t){t=t>>>0,J(t,"offset");const e=this[t],r=this[t+7];(e===void 0||r===void 0)&&Z(t,this.length-8);const a=this[t+4]+this[t+5]*2**8+this[t+6]*2**16+(r<<24);return(BigInt(a)<<BigInt(32))+BigInt(e+this[++t]*2**8+this[++t]*2**16+this[++t]*2**24)}),c.prototype.readBigInt64BE=O(function(t){t=t>>>0,J(t,"offset");const e=this[t],r=this[t+7];(e===void 0||r===void 0)&&Z(t,this.length-8);const a=(e<<24)+this[++t]*2**16+this[++t]*2**8+this[++t];return(BigInt(a)<<BigInt(32))+BigInt(this[++t]*2**24+this[++t]*2**16+this[++t]*2**8+r)}),c.prototype.readFloatLE=function(t,e){return t=t>>>0,e||U(t,4,this.length),s.read(this,t,!0,23,4)},c.prototype.readFloatBE=function(t,e){return t=t>>>0,e||U(t,4,this.length),s.read(this,t,!1,23,4)},c.prototype.readDoubleLE=function(t,e){return t=t>>>0,e||U(t,8,this.length),s.read(this,t,!0,52,8)},c.prototype.readDoubleBE=function(t,e){return t=t>>>0,e||U(t,8,this.length),s.read(this,t,!1,52,8)};function R(n,t,e,r,a,u){if(!c.isBuffer(n))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>a||t<u)throw new RangeError('"value" argument is out of bounds');if(e+r>n.length)throw new RangeError("Index out of range")}c.prototype.writeUintLE=c.prototype.writeUIntLE=function(t,e,r,a){if(t=+t,e=e>>>0,r=r>>>0,!a){const b=Math.pow(2,8*r)-1;R(this,t,e,r,b,0)}let u=1,p=0;for(this[e]=t&255;++p<r&&(u*=256);)this[e+p]=t/u&255;return e+r},c.prototype.writeUintBE=c.prototype.writeUIntBE=function(t,e,r,a){if(t=+t,e=e>>>0,r=r>>>0,!a){const b=Math.pow(2,8*r)-1;R(this,t,e,r,b,0)}let u=r-1,p=1;for(this[e+u]=t&255;--u>=0&&(p*=256);)this[e+u]=t/p&255;return e+r},c.prototype.writeUint8=c.prototype.writeUInt8=function(t,e,r){return t=+t,e=e>>>0,r||R(this,t,e,1,255,0),this[e]=t&255,e+1},c.prototype.writeUint16LE=c.prototype.writeUInt16LE=function(t,e,r){return t=+t,e=e>>>0,r||R(this,t,e,2,65535,0),this[e]=t&255,this[e+1]=t>>>8,e+2},c.prototype.writeUint16BE=c.prototype.writeUInt16BE=function(t,e,r){return t=+t,e=e>>>0,r||R(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=t&255,e+2},c.prototype.writeUint32LE=c.prototype.writeUInt32LE=function(t,e,r){return t=+t,e=e>>>0,r||R(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=t&255,e+4},c.prototype.writeUint32BE=c.prototype.writeUInt32BE=function(t,e,r){return t=+t,e=e>>>0,r||R(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=t&255,e+4};function zt(n,t,e,r,a){Xt(t,r,a,n,e,7);let u=Number(t&BigInt(4294967295));n[e++]=u,u=u>>8,n[e++]=u,u=u>>8,n[e++]=u,u=u>>8,n[e++]=u;let p=Number(t>>BigInt(32)&BigInt(4294967295));return n[e++]=p,p=p>>8,n[e++]=p,p=p>>8,n[e++]=p,p=p>>8,n[e++]=p,e}function Gt(n,t,e,r,a){Xt(t,r,a,n,e,7);let u=Number(t&BigInt(4294967295));n[e+7]=u,u=u>>8,n[e+6]=u,u=u>>8,n[e+5]=u,u=u>>8,n[e+4]=u;let p=Number(t>>BigInt(32)&BigInt(4294967295));return n[e+3]=p,p=p>>8,n[e+2]=p,p=p>>8,n[e+1]=p,p=p>>8,n[e]=p,e+8}c.prototype.writeBigUInt64LE=O(function(t,e=0){return zt(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))}),c.prototype.writeBigUInt64BE=O(function(t,e=0){return Gt(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))}),c.prototype.writeIntLE=function(t,e,r,a){if(t=+t,e=e>>>0,!a){const $=Math.pow(2,8*r-1);R(this,t,e,r,$-1,-$)}let u=0,p=1,b=0;for(this[e]=t&255;++u<r&&(p*=256);)t<0&&b===0&&this[e+u-1]!==0&&(b=1),this[e+u]=(t/p>>0)-b&255;return e+r},c.prototype.writeIntBE=function(t,e,r,a){if(t=+t,e=e>>>0,!a){const $=Math.pow(2,8*r-1);R(this,t,e,r,$-1,-$)}let u=r-1,p=1,b=0;for(this[e+u]=t&255;--u>=0&&(p*=256);)t<0&&b===0&&this[e+u+1]!==0&&(b=1),this[e+u]=(t/p>>0)-b&255;return e+r},c.prototype.writeInt8=function(t,e,r){return t=+t,e=e>>>0,r||R(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=t&255,e+1},c.prototype.writeInt16LE=function(t,e,r){return t=+t,e=e>>>0,r||R(this,t,e,2,32767,-32768),this[e]=t&255,this[e+1]=t>>>8,e+2},c.prototype.writeInt16BE=function(t,e,r){return t=+t,e=e>>>0,r||R(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=t&255,e+2},c.prototype.writeInt32LE=function(t,e,r){return t=+t,e=e>>>0,r||R(this,t,e,4,2147483647,-2147483648),this[e]=t&255,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},c.prototype.writeInt32BE=function(t,e,r){return t=+t,e=e>>>0,r||R(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=t&255,e+4},c.prototype.writeBigInt64LE=O(function(t,e=0){return zt(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),c.prototype.writeBigInt64BE=O(function(t,e=0){return Gt(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function Jt(n,t,e,r,a,u){if(e+r>n.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function Vt(n,t,e,r,a){return t=+t,e=e>>>0,a||Jt(n,t,e,4),s.write(n,t,e,r,23,4),e+4}c.prototype.writeFloatLE=function(t,e,r){return Vt(this,t,e,!0,r)},c.prototype.writeFloatBE=function(t,e,r){return Vt(this,t,e,!1,r)};function Wt(n,t,e,r,a){return t=+t,e=e>>>0,a||Jt(n,t,e,8),s.write(n,t,e,r,52,8),e+8}c.prototype.writeDoubleLE=function(t,e,r){return Wt(this,t,e,!0,r)},c.prototype.writeDoubleBE=function(t,e,r){return Wt(this,t,e,!1,r)},c.prototype.copy=function(t,e,r,a){if(!c.isBuffer(t))throw new TypeError("argument should be a Buffer");if(r||(r=0),!a&&a!==0&&(a=this.length),e>=t.length&&(e=t.length),e||(e=0),a>0&&a<r&&(a=r),a===r||t.length===0||this.length===0)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(a<0)throw new RangeError("sourceEnd out of bounds");a>this.length&&(a=this.length),t.length-e<a-r&&(a=t.length-e+r);const u=a-r;return this===t&&typeof d.prototype.copyWithin=="function"?this.copyWithin(e,r,a):d.prototype.set.call(t,this.subarray(r,a),e),u},c.prototype.fill=function(t,e,r,a){if(typeof t=="string"){if(typeof e=="string"?(a=e,e=0,r=this.length):typeof r=="string"&&(a=r,r=this.length),a!==void 0&&typeof a!="string")throw new TypeError("encoding must be a string");if(typeof a=="string"&&!c.isEncoding(a))throw new TypeError("Unknown encoding: "+a);if(t.length===1){const p=t.charCodeAt(0);(a==="utf8"&&p<128||a==="latin1")&&(t=p)}}else typeof t=="number"?t=t&255:typeof t=="boolean"&&(t=Number(t));if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;e=e>>>0,r=r===void 0?this.length:r>>>0,t||(t=0);let u;if(typeof t=="number")for(u=e;u<r;++u)this[u]=t;else{const p=c.isBuffer(t)?t:c.from(t,a),b=p.length;if(b===0)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(u=0;u<r-e;++u)this[u+e]=p[u%b]}return this};const G={};function wt(n,t,e){G[n]=class extends e{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${n}]`,this.stack,delete this.name}get code(){return n}set code(a){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:a,writable:!0})}toString(){return`${this.name} [${n}]: ${this.message}`}}}wt("ERR_BUFFER_OUT_OF_BOUNDS",function(n){return n?`${n} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),wt("ERR_INVALID_ARG_TYPE",function(n,t){return`The "${n}" argument must be of type number. Received type ${typeof t}`},TypeError),wt("ERR_OUT_OF_RANGE",function(n,t,e){let r=`The value of "${n}" is out of range.`,a=e;return Number.isInteger(e)&&Math.abs(e)>2**32?a=Yt(String(e)):typeof e=="bigint"&&(a=String(e),(e>BigInt(2)**BigInt(32)||e<-(BigInt(2)**BigInt(32)))&&(a=Yt(a)),a+="n"),r+=` It must be ${t}. Received ${a}`,r},RangeError);function Yt(n){let t="",e=n.length;const r=n[0]==="-"?1:0;for(;e>=r+4;e-=3)t=`_${n.slice(e-3,e)}${t}`;return`${n.slice(0,e)}${t}`}function Ge(n,t,e){J(t,"offset"),(n[t]===void 0||n[t+e]===void 0)&&Z(t,n.length-(e+1))}function Xt(n,t,e,r,a,u){if(n>e||n<t){const p=typeof t=="bigint"?"n":"";let b;throw t===0||t===BigInt(0)?b=`>= 0${p} and < 2${p} ** ${(u+1)*8}${p}`:b=`>= -(2${p} ** ${(u+1)*8-1}${p}) and < 2 ** ${(u+1)*8-1}${p}`,new G.ERR_OUT_OF_RANGE("value",b,n)}Ge(r,a,u)}function J(n,t){if(typeof n!="number")throw new G.ERR_INVALID_ARG_TYPE(t,"number",n)}function Z(n,t,e){throw Math.floor(n)!==n?(J(n,e),new G.ERR_OUT_OF_RANGE("offset","an integer",n)):t<0?new G.ERR_BUFFER_OUT_OF_BOUNDS:new G.ERR_OUT_OF_RANGE("offset",`>= 0 and <= ${t}`,n)}const Je=/[^+/0-9A-Za-z-_]/g;function Ve(n){if(n=n.split("=")[0],n=n.trim().replace(Je,""),n.length<2)return"";for(;n.length%4!==0;)n=n+"=";return n}function xt(n,t){t=t||1/0;let e;const r=n.length;let a=null;const u=[];for(let p=0;p<r;++p){if(e=n.charCodeAt(p),e>55295&&e<57344){if(!a){if(e>56319){(t-=3)>-1&&u.push(239,191,189);continue}else if(p+1===r){(t-=3)>-1&&u.push(239,191,189);continue}a=e;continue}if(e<56320){(t-=3)>-1&&u.push(239,191,189),a=e;continue}e=(a-55296<<10|e-56320)+65536}else a&&(t-=3)>-1&&u.push(239,191,189);if(a=null,e<128){if((t-=1)<0)break;u.push(e)}else if(e<2048){if((t-=2)<0)break;u.push(e>>6|192,e&63|128)}else if(e<65536){if((t-=3)<0)break;u.push(e>>12|224,e>>6&63|128,e&63|128)}else if(e<1114112){if((t-=4)<0)break;u.push(e>>18|240,e>>12&63|128,e>>6&63|128,e&63|128)}else throw new Error("Invalid code point")}return u}function We(n){const t=[];for(let e=0;e<n.length;++e)t.push(n.charCodeAt(e)&255);return t}function Ye(n,t){let e,r,a;const u=[];for(let p=0;p<n.length&&!((t-=2)<0);++p)e=n.charCodeAt(p),r=e>>8,a=e%256,u.push(a),u.push(r);return u}function Zt(n){return o.toByteArray(Ve(n))}function at(n,t,e,r){let a;for(a=0;a<r&&!(a+e>=t.length||a>=n.length);++a)t[a+e]=n[a];return a}function M(n,t){return n instanceof t||n!=null&&n.constructor!=null&&n.constructor.name!=null&&n.constructor.name===t.name}function bt(n){return n!==n}const Xe=function(){const n="0123456789abcdef",t=new Array(256);for(let e=0;e<16;++e){const r=e*16;for(let a=0;a<16;++a)t[r+a]=n[e]+n[a]}return t}();function O(n){return typeof BigInt>"u"?Ze:n}function Ze(){throw new Error("BigInt not supported")}})(D);const ut=D.Buffer;/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */function ce(i){return i instanceof Uint8Array||ArrayBuffer.isView(i)&&i.constructor.name==="Uint8Array"}function It(i,o){return Array.isArray(o)?o.length===0?!0:i?o.every(s=>typeof s=="string"):o.every(s=>Number.isSafeInteger(s)):!1}function lt(i,o){if(typeof o!="string")throw new Error(`${i}: string expected`);return!0}function Bt(i){if(!Number.isSafeInteger(i))throw new Error(`invalid integer: ${i}`)}function dt(i){if(!Array.isArray(i))throw new Error("array expected")}function At(i,o){if(!It(!0,o))throw new Error(`${i}: array of strings expected`)}function se(i,o){if(!It(!1,o))throw new Error(`${i}: array of numbers expected`)}function ue(...i){const o=d=>d,s=(d,f)=>g=>d(f(g)),l=i.map(d=>d.encode).reduceRight(s,o),h=i.map(d=>d.decode).reduce(s,o);return{encode:l,decode:h}}function le(i){const o=typeof i=="string"?i.split(""):i,s=o.length;At("alphabet",o);const l=new Map(o.map((h,d)=>[h,d]));return{encode:h=>(dt(h),h.map(d=>{if(!Number.isSafeInteger(d)||d<0||d>=s)throw new Error(`alphabet.encode: digit index outside alphabet "${d}". Allowed: ${i}`);return o[d]})),decode:h=>(dt(h),h.map(d=>{lt("alphabet.decode",d);const f=l.get(d);if(f===void 0)throw new Error(`Unknown letter: "${d}". Allowed: ${i}`);return f}))}}function de(i=""){return lt("join",i),{encode:o=>(At("join.decode",o),o.join(i)),decode:o=>(lt("join.decode",o),o.split(i))}}function $t(i,o,s){if(o<2)throw new Error(`convertRadix: invalid from=${o}, base cannot be less than 2`);if(s<2)throw new Error(`convertRadix: invalid to=${s}, base cannot be less than 2`);if(dt(i),!i.length)return[];let l=0;const h=[],d=Array.from(i,g=>{if(Bt(g),g<0||g>=o)throw new Error(`invalid integer: ${g}`);return g}),f=d.length;for(;;){let g=0,y=!0;for(let m=l;m<f;m++){const c=d[m],E=o*g,w=E+c;if(!Number.isSafeInteger(w)||E/o!==g||w-c!==E)throw new Error("convertRadix: carry overflow");const x=w/s;g=w%s;const F=Math.floor(x);if(d[m]=F,!Number.isSafeInteger(F)||F*s+g!==w)throw new Error("convertRadix: carry overflow");if(y)F?y=!1:l=m;else continue}if(h.push(g),y)break}for(let g=0;g<i.length-1&&i[g]===0;g++)h.push(0);return h.reverse()}function he(i){Bt(i);const o=2**8;return{encode:s=>{if(!ce(s))throw new Error("radix.encode input should be Uint8Array");return $t(Array.from(s),o,i)},decode:s=>(se("radix.decode",s),Uint8Array.from($t(s,i,o)))}}const pe=(i=>ue(he(58),le(i),de("")))("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),ht="m/44'/397'/0'/0'/1'";function V(i,o){return i==="sign-with-ledger"?`sign-with-ledger --seed-phrase-hd-path '${I(o||ht)}'`:"sign-with-keychain"}function _(i){if(i==="0")return"0";const o=24,s=i.padStart(o+1,"0"),l=s.slice(0,-o)||"0",h=s.slice(-o).replace(/0+$/,"");return h?`${l}.${h}`:l}function St(i){if(i==="0")return"0";const o=12,s=i.padStart(o+1,"0"),l=s.slice(0,-o)||"0",h=s.slice(-o).replace(/0+$/,"");return h?`${l}.${h}`:l}function I(i){return i.replace(/'/g,"'\\''")}function fe(i){if(i instanceof Uint8Array)return i;if(i instanceof ArrayBuffer)return new Uint8Array(i);if(ArrayBuffer.isView(i)){const o=i;return new Uint8Array(o.buffer,o.byteOffset,o.byteLength)}return null}function ge(i){let o="";for(let l=0;l<i.length;l+=32768)o+=String.fromCharCode(...i.subarray(l,l+32768));return btoa(o)}function Ft(i){const o=fe(i);return o?`base64-args '${ge(o)}'`:`json-args '${I(JSON.stringify(i))}'`}function Ut({accountId:i,addFunctionCallKey:o,network:s,signingMethod:l="sign-with-keychain",ledgerHdPath:h}){const{contractId:d,publicKey:f,allowMethods:g,gasAllowance:y}=o;let m="'0.25 NEAR'";y&&(y.kind==="unlimited"?m="'unlimited'":m=`'${_(y.amount)} NEAR'`);const c=["near account"];return c.push(`add-key '${I(i)}'`),c.push("grant-function-call-access"),c.push(`--allowance ${m}`),c.push(`--contract-account-id '${I(d)}'`),g.anyMethod||g.methodNames.length===0?c.push("--function-names ''"):c.push(`--function-names '${I(g.methodNames.join(", "))}'`),c.push(`use-manually-provided-public-key ${f}`),c.push(`network-config ${s}`),c.push(V(l,h)),c.join(` \\
    `)}function kt(i){switch(i.type){case"CreateAccount":return"add-action create-account";case"Transfer":return`add-action transfer '${_(i.params.deposit)} NEAR'`;case"FunctionCall":return[`add-action function-call '${I(i.params.methodName)}'`,Ft(i.params.args),`prepaid-gas '${St(i.params.gas)} Tgas'`,`attached-deposit '${_(i.params.deposit)} NEAR'`].join(" ");case"AddKey":if(i.params.accessKey.permission==="FullAccess")return`add-action add-key grant-full-access use-manually-provided-public-key ${i.params.publicKey}`;{const o=i.params.accessKey.permission,s=["add-action add-key grant-function-call-access"];return o.allowance&&s.push(`--allowance '${_(o.allowance)} NEAR'`),s.push(`--contract-account-id '${I(o.receiverId)}'`),o.methodNames&&o.methodNames.length>0&&s.push(`--function-names '${I(o.methodNames.join(", "))}'`),s.push(`use-manually-provided-public-key ${i.params.publicKey}`),s.join(" ")}case"DeleteKey":return`add-action delete-key ${i.params.publicKey}`;case"DeleteAccount":return`add-action delete-account beneficiary '${I(i.params.beneficiaryId)}'`;case"Stake":return`add-action stake '${_(i.params.stake)} NEAR' ${i.params.publicKey}`;case"DeployContract":case"DeployGlobalContract":throw new Error(`${i.type} is not supported by NEAR CLI wallet — binary data cannot be passed via command line`);case"UseGlobalContract":{const o=i.params.contractIdentifier;return"accountId"in o?`add-action use-global-contract use-global-account-id '${I(o.accountId)}'`:`add-action use-global-contract use-global-hash '${I(o.codeHash)}'`}default:throw new Error("Unknown action type")}}function Tt({signerId:i,receiverId:o,actions:s,network:l,signingMethod:h="sign-with-keychain",ledgerHdPath:d}){const f=V(h,d);if(s.length===1&&s[0].type==="FunctionCall"){const y=s[0].params;return["near contract","call-function",`as-transaction '${I(o)}' '${I(y.methodName)}'`,Ft(y.args),`prepaid-gas '${St(y.gas)} Tgas'`,`attached-deposit '${_(y.deposit)} NEAR'`,`sign-as '${I(i)}'`,`network-config ${l}`,f].join(` \\
    `)}if(s.length===1&&s[0].type==="Transfer")return["near tokens",`'${I(i)}'`,`send-near '${I(o)}' '${_(s[0].params.deposit)} NEAR'`,`network-config ${l}`,f].join(` \\
    `);if(s.length===1&&s[0].type==="AddKey"){const y=s[0],m=["near account"];if(m.push(`add-key '${I(i)}'`),y.params.accessKey.permission==="FullAccess")m.push("grant-full-access");else{const c=y.params.accessKey.permission;m.push("grant-function-call-access"),c.allowance&&m.push(`--allowance '${_(c.allowance)} NEAR'`),m.push(`--contract-account-id '${I(c.receiverId)}'`),c.methodNames&&c.methodNames.length>0&&m.push(`--function-names '${I(c.methodNames.join(", "))}'`)}return m.push(`use-manually-provided-public-key ${y.params.publicKey}`),m.push(`network-config ${l}`),m.push(f),m.join(` \\
    `)}if(s.every(y=>y.type==="DeleteKey")){const y=s.map(m=>m.params.publicKey).join(",");return["near account",`delete-keys '${I(i)}' public-keys ${y}`,`network-config ${l}`,f].join(` \\
    `)}const g=s.map(kt);return["near transaction",`construct-transaction '${I(i)}' '${I(o)}'`,...g,"skip",`network-config ${l}`,f].join(` \\
    `)}function ye({signerId:i,receiverId:o,actions:s,network:l,signingMethod:h="sign-with-keychain",ledgerHdPath:d}){const f=s.map(kt);return["near transaction",`construct-meta-transaction '${I(i)}' '${I(o)}'`,...f,"skip",`network-config ${l}`,`${V(h,d)}`].join(` \\
    `)}function Rt({message:i,recipient:o,nonce:s,network:l,signerId:h,signingMethod:d="sign-with-keychain",ledgerHdPath:f}){const g=["near message sign-nep413",`utf8 '${I(i)}'`,`nonce '${I(s)}'`,`recipient '${I(o)}'`,`sign-as '${I(h)}'`];return d==="sign-with-ledger"?g.push(V(d,f)):(g.push(V(d,f)),g.push(`network-config ${l}`)),g.join(` \\
    `)}const me=`
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
`;function L(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Q(i){return`
    <div class="command-block">
      <pre><code>${L(i)}</code></pre>
      <button class="copy-btn" data-command="${L(i)}">Copy</button>
    </div>
  `}function we(i){return`
    <div class="container">
      ${i.step?`<div class="step-indicator">${L(i.step)}</div>`:""}
      <h2>${L(i.title)}</h2>
      ${i.subtitle?`<p class="subtitle">${L(i.subtitle)}</p>`:""}
      <div class="field-group">
        <input type="text" id="account-id" placeholder="e.g. yourname.near" autocapitalize="off" autocomplete="off" spellcheck="false" />
      </div>
      <div id="error" class="error-text" style="display:none"></div>
      <button class="btn" id="submit-btn">${L(i.buttonText)}</button>
    </div>
  `}function vt(i,o){return`
    <div class="container">
      ${o?`<div class="step-indicator">${L(o)}</div>`:""}
      <h2>Add access key</h2>
      <p class="subtitle">Run this command in your terminal, then paste the transaction hash or explorer URL below</p>
      ${Q(i)}
      <div class="field-group">
        <label class="field-label">Transaction hash or explorer URL</label>
        <input type="text" id="tx-hash" placeholder="Paste transaction hash or explorer URL" autocapitalize="off" autocomplete="off" spellcheck="false" />
      </div>
      <div id="error" class="error-text" style="display:none"></div>
      <button class="btn" id="verify-btn">Verify</button>
    </div>
  `}function Ct(i){return`
    <div class="container">
      <h2>Sign transaction</h2>
      <p class="subtitle">Run this command in your terminal, then paste the transaction hash or explorer URL below</p>
      ${Q(i)}
      <div class="field-group">
        <label class="field-label">Transaction hash or explorer URL</label>
        <input type="text" id="tx-hash" placeholder="Paste transaction hash or explorer URL" autocapitalize="off" autocomplete="off" spellcheck="false" />
      </div>
      <div id="error" class="error-text" style="display:none"></div>
      <button class="btn" id="verify-btn">Verify</button>
    </div>
  `}function xe(i,o){return`
    <div class="container">
      ${o?`<div class="step-indicator">${L(o)}</div>`:""}
      <h2>Sign message</h2>
      <p class="subtitle">Run this command in your terminal, then paste the JSON output below</p>
      ${Q(i)}
      <div class="field-group">
        <label class="field-label">Command output</label>
        <textarea id="sign-output" placeholder='Paste the JSON output here, e.g.&#10;{"accountId":"...","publicKey":"...","signature":"..."}'></textarea>
      </div>
      <div id="error" class="error-text" style="display:none"></div>
      <button class="btn" id="submit-sign-btn">Submit</button>
    </div>
  `}function be(i,o){return`
    <div class="container">
      ${o?`<div class="step-indicator">${L(o)}</div>`:""}
      <h2>Sign delegate action</h2>
      <p class="subtitle">Run this command in your terminal, then paste the base64 output below</p>
      ${Q(i)}
      <div class="field-group">
        <label class="field-label">Signed delegate action (base64)</label>
        <textarea id="delegate-output" placeholder="Paste the base64 output here"></textarea>
      </div>
      <div id="error" class="error-text" style="display:none"></div>
      <button class="btn" id="submit-delegate-btn">Submit</button>
    </div>
  `}function Ee(i){return`
    <div class="container">
      ${i.step?`<div class="step-indicator">${L(i.step)}</div>`:""}
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
        <input type="text" id="hd-path" value="${L(i.defaultHdPath)}" autocapitalize="off" autocomplete="off" spellcheck="false" />
      </div>
      <div id="error" class="error-text" style="display:none"></div>
      <button class="btn" id="submit-signing-method-btn">Continue</button>
    </div>
  `}const N=()=>window.selector.storage;async function j(i){return await N().get(`cli:${i}:accountId`)||""}async function pt(i,o){await N().set(`cli:${i}:accountId`,o)}async function Ie(i){await N().remove(`cli:${i}:accountId`)}async function ft(i){const o=await N().get(`cli:${i}:functionCallKey`);return o?JSON.parse(o):null}async function Nt(i,o){await N().set(`cli:${i}:functionCallKey`,JSON.stringify(o))}async function Be(i){await N().remove(`cli:${i}:functionCallKey`)}async function tt(i){return await N().get(`cli:${i}:signingMethod`)==="sign-with-ledger"?"sign-with-ledger":"sign-with-keychain"}async function Lt(i,o){await N().set(`cli:${i}:signingMethod`,o)}async function Ae(i){await N().remove(`cli:${i}:signingMethod`)}async function et(i){return await N().get(`cli:${i}:ledgerHdPath`)||ht}async function Mt(i,o){await N().set(`cli:${i}:ledgerHdPath`,o)}async function $e(i){await N().remove(`cli:${i}:ledgerHdPath`)}function nt(i){var l,h;const o=(h=(l=window.selector)==null?void 0:l.providers)==null?void 0:h[i],s=i==="mainnet"?"https://rpc.mainnet.near.org":"https://rpc.testnet.near.org";return o&&o.length>0?o[0]:s}async function Se(i,o,s){const h=await(await fetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({jsonrpc:"2.0",id:1,method:"tx",params:{tx_hash:o,sender_account_id:s,wait_until:"NONE"}})})).json();if(h.error)throw new Error(h.error.message||JSON.stringify(h.error));return h.result}function W(i){document.head.innerHTML=me,document.body.innerHTML="";const o=document.createElement("div");return o.style.height="100%",o.innerHTML=i,document.body.appendChild(o),window.focus(),o}function Pt(i){const o=i.getAttribute("data-command")||"";navigator.clipboard.writeText(o).then(()=>{const s=i.textContent;i.textContent="Copied!",setTimeout(()=>{i.textContent=s},1500)}).catch(()=>{var l;const s=(l=i.parentElement)==null?void 0:l.querySelector("code");if(s){const h=document.createRange();h.selectNodeContents(s);const d=window.getSelection();d==null||d.removeAllRanges(),d==null||d.addRange(h)}})}function gt(i){const o=i.querySelectorAll(".copy-btn");o.forEach(s=>{s.addEventListener("click",()=>Pt(s))}),document.addEventListener("keydown",s=>{const l=document.activeElement;l instanceof HTMLInputElement||l instanceof HTMLTextAreaElement||s.key==="c"&&o.length>0&&(s.preventDefault(),Pt(o[0]))})}function H(i,o){const s=i.querySelector("#error");s&&(s.textContent=o,s.style.display="block")}function Dt(i){return new Promise(o=>{const s=W(we(i));window.selector.ui.showIframe();const l=s.querySelector("#account-id"),h=s.querySelector("#submit-btn"),d=()=>{const f=l.value.trim();if(!f){H(s,"Please enter an account ID");return}o(f)};h.addEventListener("click",d),l.addEventListener("keydown",f=>{f.key==="Enter"&&d()}),requestAnimationFrame(()=>l.focus())})}function _t(i){return new Promise(o=>{const s=W(Ee({step:i.step,defaultHdPath:ht}));window.selector.ui.showIframe();let l="sign-with-keychain";const h=s.querySelectorAll(".signing-method-card"),d=s.querySelector("#hd-path-group"),f=s.querySelector("#hd-path"),g=s.querySelector("#submit-signing-method-btn");function y(w){h.forEach(x=>{x.classList.remove("selected"),x.setAttribute("aria-pressed","false")}),w.classList.add("selected"),w.setAttribute("aria-pressed","true"),l=w.getAttribute("data-method"),d.style.display=l==="sign-with-ledger"?"block":"none"}const m=Array.from(h);h.forEach(w=>{w.addEventListener("click",()=>y(w)),w.addEventListener("keydown",x=>{if(x.key==="Enter"){x.preventDefault(),c();return}const F=m.indexOf(w);if(x.key==="ArrowRight"||x.key==="ArrowDown"){x.preventDefault();const k=m[(F+1)%m.length];y(k),k.focus()}else if(x.key==="ArrowLeft"||x.key==="ArrowUp"){x.preventDefault();const k=m[(F-1+m.length)%m.length];y(k),k.focus()}})});function c(){const w={signingMethod:l};if(l==="sign-with-ledger"){const x=f.value.trim();if(!x){H(s,"Please enter an HD derivation path");return}w.ledgerHdPath=x}o(w)}g.addEventListener("click",c),s.addEventListener("keydown",w=>{w.key==="Enter"&&document.activeElement!==f&&(w.preventDefault(),c())});const E=s.querySelector(".signing-method-card.selected");E&&requestAnimationFrame(()=>E.focus())})}function Fe(i){const o=i.match(/(?:txns?|transactions)\/([A-Za-z0-9]{43,44})/);if(o)return o[1];const s=i.match(/(?:Transaction ID:\s*)?([A-Za-z0-9]{43,44})/);return s?s[1]:i}async function Ue(i,o,s,l=5){let h;for(let d=0;d<l;d++)try{return await Se(i,o,s)}catch(f){h=f,d<l-1&&await new Promise(g=>setTimeout(g,2e3))}throw h??new Error(`Transaction ${o} not found after ${l} attempts`)}function rt(i,o,s){return new Promise(l=>{const h=W(i);gt(h),window.selector.ui.showIframe();const d=h.querySelector("#tx-hash"),f=h.querySelector("#verify-btn"),g=async()=>{const y=d.value.trim();if(!y){H(h,"Please paste the transaction hash or explorer URL");return}const m=Fe(y);f.disabled=!0,f.textContent="Verifying...";try{const c=await Ue(o,m,s);l(c)}catch{H(h,"Transaction not found. Please check the hash and try again."),f.disabled=!1,f.textContent="Verify"}};f.addEventListener("click",g),d.addEventListener("keydown",y=>{y.key==="Enter"&&g()})})}const ke={ed25519:64,secp256k1:65,"ml-dsa-65":3309};function Te(i,o){const s=o.includes(":")?o.split(":")[0]:"ed25519",[l,h]=i.includes(":")?[i.slice(0,i.indexOf(":")),i.slice(i.indexOf(":")+1)]:[s,i],d=ke[l];if(d===void 0)throw new Error(`Unsupported signature type "${l}"`);if(l!==s)throw new Error(`Signature type "${l}" does not match public key type "${s}"`);const f=pe.decode(h);if(f.length!==d)throw new Error(`Invalid ${l} signature: expected ${d} bytes, got ${f.length}`);return ut.from(f).toString("base64")}function Ht(i,o){return new Promise(s=>{const l=W(xe(i,o));gt(l),window.selector.ui.showIframe();const h=l.querySelector("#sign-output");l.querySelector("#submit-sign-btn").addEventListener("click",()=>{const f=h.value.trim();if(!f){H(l,"Please paste the command output");return}try{const g=f.match(/\{[\s\S]*"signature"[\s\S]*\}/);if(!g)throw new Error("No valid JSON found");const y=JSON.parse(g[0]);if(!y.signature||!y.publicKey)throw new Error("Missing signature or publicKey in output");s({accountId:y.accountId||"",publicKey:y.publicKey,signature:Te(y.signature,y.publicKey)})}catch(g){H(l,`Could not parse output: ${g.message}`)}})})}function Re(i){const s=i.trim().match(/[A-Za-z0-9+/=]{20,}/g);return s?s.reduce((l,h)=>l.length>=h.length?l:h):null}function ve(i,o){return new Promise(s=>{const l=W(be(i,o));gt(l),window.selector.ui.showIframe();const h=l.querySelector("#delegate-output");l.querySelector("#submit-delegate-btn").addEventListener("click",()=>{const f=h.value.trim();if(!f){H(l,"Please paste the base64 output from the command");return}const g=Re(f);if(!g){H(l,"Could not find valid base64 data in the pasted output");return}s(g)})})}class Ce{constructor(){P(this,"signIn",async({addFunctionCallKey:o,network:s})=>{const l=await j(s),h=await ft(s),d=(h==null?void 0:h.publicKey)&&(!o||h.contractId===o.contractId&&h.publicKey===o.publicKey);if(l&&(!o||d))return[{accountId:l,publicKey:(h==null?void 0:h.publicKey)??""}];const f=!l;let g=1;f&&g++,o&&g++;let y=0;const m=l||await Dt({title:"Connect with NEAR CLI",subtitle:"Enter your NEAR account ID",buttonText:"Next",step:`Step ${++y} of ${g}`}),{signingMethod:c,ledgerHdPath:E}=await _t({step:`Step ${++y} of ${g}`});if(await Lt(s,c),E&&await Mt(s,E),o){const{publicKey:w}=o,x=Ut({accountId:m,addFunctionCallKey:o,network:s,signingMethod:c,ledgerHdPath:E}),F=nt(s);await rt(vt(x,`Step ${++y} of ${g}`),F,m);const k={publicKey:w,contractId:o.contractId};return await pt(s,m),await Nt(s,k),[{accountId:m,publicKey:w}]}return await pt(s,m),[{accountId:m,publicKey:""}]});P(this,"signInAndSignMessage",async({addFunctionCallKey:o,network:s,messageParams:l})=>{const{message:h,recipient:d,nonce:f}=l,g=await j(s),y=await ft(s),m=!g,c=!!o&&(!(y!=null&&y.publicKey)||y.contractId!==o.contractId||y.publicKey!==o.publicKey);let E=2;m&&E++,c&&E++;let w=0;const x=g||await Dt({title:"Connect with NEAR CLI",subtitle:"Enter your NEAR account ID to sign in and sign a message",buttonText:"Next",step:`Step ${++w} of ${E}`}),{signingMethod:F,ledgerHdPath:k}=await _t({step:`Step ${++w} of ${E}`});await Lt(s,F),k&&await Mt(s,k);const Y=ut.from(f).toString("base64"),yt=Rt({message:h,recipient:d,nonce:Y,network:s,signerId:x,signingMethod:F,ledgerHdPath:k}),K=await Ht(yt,`Step ${++w} of ${E}`);let it=K.publicKey;if(c&&o){it=o.publicKey;const X=Ut({accountId:x,addFunctionCallKey:o,network:s,signingMethod:F,ledgerHdPath:k}),mt=nt(s);await rt(vt(X,`Step ${++w} of ${E}`),mt,x);const ot={publicKey:o.publicKey,contractId:o.contractId};await Nt(s,ot)}return await pt(s,x),[{accountId:x,publicKey:it,signedMessage:{accountId:K.accountId||x,publicKey:K.publicKey,signature:K.signature}}]});P(this,"signOut",async({network:o})=>{await Ie(o),await Be(o),await Ae(o),await $e(o)});P(this,"getAccounts",async({network:o})=>{const s=await j(o);if(!s)return[];const l=await ft(o);return[{accountId:s,publicKey:(l==null?void 0:l.publicKey)??""}]});P(this,"signAndSendTransaction",async({receiverId:o,actions:s,network:l})=>{const h=await j(l);if(!h)throw new Error("Wallet not signed in");const d=await tt(l),f=d==="sign-with-ledger"?await et(l):void 0,g=Tt({signerId:h,receiverId:o,actions:s,network:l,signingMethod:d,ledgerHdPath:f});try{const y=nt(l);return await rt(Ct(g),y,h)}finally{window.selector.ui.hideIframe()}});P(this,"signAndSendTransactions",async({transactions:o,network:s})=>{const l=await j(s);if(!l)throw new Error("Wallet not signed in");const h=await tt(s),d=h==="sign-with-ledger"?await et(s):void 0,f=nt(s),g=[];try{for(const y of o){const m=Tt({signerId:l,receiverId:y.receiverId,actions:y.actions,network:s,signingMethod:h,ledgerHdPath:d}),c=await rt(Ct(m),f,l);g.push(c)}return g}finally{window.selector.ui.hideIframe()}});P(this,"signMessage",async({message:o,nonce:s,recipient:l,network:h})=>{const d=await j(h);if(!d)throw new Error("Wallet not signed in");const f=await tt(h),g=f==="sign-with-ledger"?await et(h):void 0,y=ut.from(s).toString("base64"),m=Rt({message:o,recipient:l,nonce:y,network:h,signerId:d,signingMethod:f,ledgerHdPath:g});try{const c=await Ht(m);return{accountId:c.accountId||d,publicKey:c.publicKey,signature:c.signature}}finally{window.selector.ui.hideIframe()}});P(this,"signDelegateActions",async({delegateActions:o,network:s})=>{const l=await j(s);if(!l)throw new Error("Wallet not signed in");const h=await tt(s),d=h==="sign-with-ledger"?await et(s):void 0,f=[];try{const g=o.length;for(let y=0;y<o.length;y++){const m=o[y],c=ye({signerId:l,receiverId:m.receiverId,actions:m.actions,network:s,signingMethod:h,ledgerHdPath:d}),E=g>1?`Step ${y+1} of ${g}`:void 0,w=await ve(c,E);f.push(w)}return{signedDelegateActions:f}}finally{window.selector.ui.hideIframe()}})}}window.selector.ready(new Ce)})();
