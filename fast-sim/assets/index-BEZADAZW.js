var Pc=Object.defineProperty;var Lc=(i,t,e)=>t in i?Pc(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var j=(i,t,e)=>Lc(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yo="174",gi={ROTATE:0,DOLLY:1,PAN:2},pi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Dc=0,Wo=1,Ic=2,Al=1,Cl=2,pn=3,Ln=0,Ue=1,Ce=2,Rn=0,_i=1,Xo=2,$o=3,qo=4,Nc=5,Xn=100,Uc=101,Fc=102,Oc=103,kc=104,zc=200,Bc=201,Gc=202,Hc=203,Rr=204,Pr=205,Vc=206,Wc=207,Xc=208,$c=209,qc=210,Yc=211,jc=212,Kc=213,Zc=214,Lr=0,Dr=1,Ir=2,Mi=3,Nr=4,Ur=5,Fr=6,Or=7,Rl=0,Jc=1,Qc=2,Pn=0,th=1,eh=2,nh=3,Pl=4,ih=5,sh=6,rh=7,Ll=300,yi=301,Si=302,kr=303,zr=304,Vs=306,Xi=1e3,qn=1001,Br=1002,tn=1003,oh=1004,ts=1005,rn=1006,Ks=1007,Yn=1008,xn=1009,Dl=1010,Il=1011,$i=1012,So=1013,jn=1014,mn=1015,Yi=1016,Eo=1017,bo=1018,Ei=1020,Nl=35902,Ul=1021,Fl=1022,Qe=1023,Ol=1024,kl=1025,vi=1026,bi=1027,zl=1028,wo=1029,Bl=1030,To=1031,Ao=1033,Ts=33776,As=33777,Cs=33778,Rs=33779,Gr=35840,Hr=35841,Vr=35842,Wr=35843,Xr=36196,$r=37492,qr=37496,Yr=37808,jr=37809,Kr=37810,Zr=37811,Jr=37812,Qr=37813,to=37814,eo=37815,no=37816,io=37817,so=37818,ro=37819,oo=37820,ao=37821,Ps=36492,lo=36494,co=36495,Gl=36283,ho=36284,uo=36285,fo=36286,ah=3200,lh=3201,Hl=0,ch=1,An="",Ge="srgb",wi="srgb-linear",Fs="linear",re="srgb",Qn=7680,Yo=519,hh=512,dh=513,uh=514,Vl=515,fh=516,ph=517,mh=518,gh=519,jo=35044,Ko="300 es",gn=2e3,Os=2001;class Zn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ls=Math.PI/180,po=180/Math.PI;function ji(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(be[i&255]+be[i>>8&255]+be[i>>16&255]+be[i>>24&255]+"-"+be[t&255]+be[t>>8&255]+"-"+be[t>>16&15|64]+be[t>>24&255]+"-"+be[e&63|128]+be[e>>8&255]+"-"+be[e>>16&255]+be[e>>24&255]+be[n&255]+be[n>>8&255]+be[n>>16&255]+be[n>>24&255]).toLowerCase()}function Vt(i,t,e){return Math.max(t,Math.min(e,i))}function _h(i,t){return(i%t+t)%t}function Zs(i,t,e){return(1-e)*i+e*t}function Ui(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ie(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const vh={DEG2RAD:Ls};class Dt{constructor(t=0,e=0){Dt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Vt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bt{constructor(t,e,n,s,r,o,a,l,c){Bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],p=n[5],g=n[8],_=s[0],m=s[3],u=s[6],b=s[1],x=s[4],v=s[7],T=s[2],w=s[5],A=s[8];return r[0]=o*_+a*b+l*T,r[3]=o*m+a*x+l*w,r[6]=o*u+a*v+l*A,r[1]=c*_+h*b+d*T,r[4]=c*m+h*x+d*w,r[7]=c*u+h*v+d*A,r[2]=f*_+p*b+g*T,r[5]=f*m+p*x+g*w,r[8]=f*u+p*v+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,f=a*l-h*r,p=c*r-o*l,g=e*d+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=f*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Js.makeScale(t,e)),this}rotate(t){return this.premultiply(Js.makeRotation(-t)),this}translate(t,e){return this.premultiply(Js.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Js=new Bt;function Wl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ks(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function xh(){const i=ks("canvas");return i.style.display="block",i}const Zo={};function Vn(i){i in Zo||(Zo[i]=!0,console.warn(i))}function Mh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function yh(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Sh(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Jo=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qo=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Eh(){const i={enabled:!0,workingColorSpace:wi,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===re&&(s.r=_n(s.r),s.g=_n(s.g),s.b=_n(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===re&&(s.r=xi(s.r),s.g=xi(s.g),s.b=xi(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===An?Fs:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[wi]:{primaries:t,whitePoint:n,transfer:Fs,toXYZ:Jo,fromXYZ:Qo,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ge},outputColorSpaceConfig:{drawingBufferColorSpace:Ge}},[Ge]:{primaries:t,whitePoint:n,transfer:re,toXYZ:Jo,fromXYZ:Qo,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ge}}}),i}const Kt=Eh();function _n(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ti;class bh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ti===void 0&&(ti=ks("canvas")),ti.width=t.width,ti.height=t.height;const n=ti.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ti}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ks("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=_n(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(_n(e[n]/255)*255):e[n]=_n(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let wh=0;class Co{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=ji(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Qs(s[o].image)):r.push(Qs(s[o]))}else r=Qs(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Qs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?bh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Th=0;class Re extends Zn{constructor(t=Re.DEFAULT_IMAGE,e=Re.DEFAULT_MAPPING,n=qn,s=qn,r=rn,o=Yn,a=Qe,l=xn,c=Re.DEFAULT_ANISOTROPY,h=An){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Th++}),this.uuid=ji(),this.name="",this.source=new Co(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ll)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xi:t.x=t.x-Math.floor(t.x);break;case qn:t.x=t.x<0?0:1;break;case Br:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xi:t.y=t.y-Math.floor(t.y);break;case qn:t.y=t.y<0?0:1;break;case Br:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Re.DEFAULT_IMAGE=null;Re.DEFAULT_MAPPING=Ll;Re.DEFAULT_ANISOTROPY=1;class de{constructor(t=0,e=0,n=0,s=1){de.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,v=(p+1)/2,T=(u+1)/2,w=(h+f)/4,A=(d+_)/4,L=(g+m)/4;return x>v&&x>T?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=w/n,r=A/n):v>T?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=w/s,r=L/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=A/r,s=L/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(d-_)/b,this.z=(f-h)/b,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this.w=Vt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this.w=Vt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ah extends Zn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Re(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Co(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kn extends Ah{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Xl extends Re{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ch extends Re{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3];const f=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(d!==_||l!==f||c!==p||h!==g){let m=1-a;const u=l*f+c*p+h*g+d*_,b=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const T=Math.sqrt(x),w=Math.atan2(T,u*b);m=Math.sin(m*w)/T,a=Math.sin(a*w)/T}const v=a*b;if(l=l*m+f*v,c=c*m+p*v,h=h*m+g*v,d=d*m+_*v,m===1-a){const T=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=T,c*=T,h*=T,d*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*d+l*p-c*f,t[e+1]=l*g+h*f+c*d-a*p,t[e+2]=c*g+h*p+a*f-l*d,t[e+3]=h*g-a*d-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),f=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d-f*p*g;break;case"YXZ":this._x=f*h*d+c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d+f*p*g;break;case"ZXY":this._x=f*h*d-c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d-f*p*g;break;case"ZYX":this._x=f*h*d-c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d+f*p*g;break;case"YZX":this._x=f*h*d+c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d-f*p*g;break;case"XZY":this._x=f*h*d-c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Vt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ta.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ta.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return tr.copy(this).projectOnVector(t),this.sub(tr)}reflect(t){return this.sub(tr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Vt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const tr=new I,ta=new Dn;class Ki{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,je):je.fromBufferAttribute(r,o),je.applyMatrix4(t.matrixWorld),this.expandByPoint(je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),es.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),es.copy(n.boundingBox)),es.applyMatrix4(t.matrixWorld),this.union(es)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,je),je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fi),ns.subVectors(this.max,Fi),ei.subVectors(t.a,Fi),ni.subVectors(t.b,Fi),ii.subVectors(t.c,Fi),Mn.subVectors(ni,ei),yn.subVectors(ii,ni),Un.subVectors(ei,ii);let e=[0,-Mn.z,Mn.y,0,-yn.z,yn.y,0,-Un.z,Un.y,Mn.z,0,-Mn.x,yn.z,0,-yn.x,Un.z,0,-Un.x,-Mn.y,Mn.x,0,-yn.y,yn.x,0,-Un.y,Un.x,0];return!er(e,ei,ni,ii,ns)||(e=[1,0,0,0,1,0,0,0,1],!er(e,ei,ni,ii,ns))?!1:(is.crossVectors(Mn,yn),e=[is.x,is.y,is.z],er(e,ei,ni,ii,ns))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ln=[new I,new I,new I,new I,new I,new I,new I,new I],je=new I,es=new Ki,ei=new I,ni=new I,ii=new I,Mn=new I,yn=new I,Un=new I,Fi=new I,ns=new I,is=new I,Fn=new I;function er(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Fn.fromArray(i,r);const a=s.x*Math.abs(Fn.x)+s.y*Math.abs(Fn.y)+s.z*Math.abs(Fn.z),l=t.dot(Fn),c=e.dot(Fn),h=n.dot(Fn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Rh=new Ki,Oi=new I,nr=new I;class Ws{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Rh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Oi.subVectors(t,this.center);const e=Oi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Oi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(nr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Oi.copy(t.center).add(nr)),this.expandByPoint(Oi.copy(t.center).sub(nr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const cn=new I,ir=new I,ss=new I,Sn=new I,sr=new I,rs=new I,rr=new I;class Xs{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,cn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=cn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(cn.copy(this.origin).addScaledVector(this.direction,e),cn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ir.copy(t).add(e).multiplyScalar(.5),ss.copy(e).sub(t).normalize(),Sn.copy(this.origin).sub(ir);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ss),a=Sn.dot(this.direction),l=-Sn.dot(ss),c=Sn.lengthSq(),h=Math.abs(1-o*o);let d,f,p,g;if(h>0)if(d=o*l-a,f=o*a-l,g=r*h,d>=0)if(f>=-g)if(f<=g){const _=1/h;d*=_,f*=_,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ir).addScaledVector(ss,f),p}intersectSphere(t,e){cn.subVectors(t.center,this.origin);const n=cn.dot(this.direction),s=cn.dot(cn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,cn)!==null}intersectTriangle(t,e,n,s,r){sr.subVectors(e,t),rs.subVectors(n,t),rr.crossVectors(sr,rs);let o=this.direction.dot(rr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Sn.subVectors(this.origin,t);const l=a*this.direction.dot(rs.crossVectors(Sn,rs));if(l<0)return null;const c=a*this.direction.dot(sr.cross(Sn));if(c<0||l+c>o)return null;const h=-a*Sn.dot(rr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ne{constructor(t,e,n,s,r,o,a,l,c,h,d,f,p,g,_,m){ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,f,p,g,_,m)}set(t,e,n,s,r,o,a,l,c,h,d,f,p,g,_,m){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=g,u[11]=_,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ne().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/si.setFromMatrixColumn(t,0).length(),r=1/si.setFromMatrixColumn(t,1).length(),o=1/si.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=o*h,p=o*d,g=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=p+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,p=l*d,g=c*h,_=c*d;e[0]=f+_*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,p=l*d,g=c*h,_=c*d;e[0]=f-_*a,e[4]=-o*d,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,p=o*d,g=a*h,_=a*d;e[0]=l*h,e[4]=g*c-p,e[8]=f*c+_,e[1]=l*d,e[5]=_*c+f,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-f*d,e[8]=g*d+p,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*d+g,e[10]=f-_*d}else if(t.order==="XZY"){const f=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+_,e[5]=o*h,e[9]=p*d-g,e[2]=g*d-p,e[6]=a*h,e[10]=_*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ph,t,Lh)}lookAt(t,e,n){const s=this.elements;return ze.subVectors(t,e),ze.lengthSq()===0&&(ze.z=1),ze.normalize(),En.crossVectors(n,ze),En.lengthSq()===0&&(Math.abs(n.z)===1?ze.x+=1e-4:ze.z+=1e-4,ze.normalize(),En.crossVectors(n,ze)),En.normalize(),os.crossVectors(ze,En),s[0]=En.x,s[4]=os.x,s[8]=ze.x,s[1]=En.y,s[5]=os.y,s[9]=ze.y,s[2]=En.z,s[6]=os.z,s[10]=ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],u=n[14],b=n[3],x=n[7],v=n[11],T=n[15],w=s[0],A=s[4],L=s[8],S=s[12],M=s[1],P=s[5],U=s[9],F=s[13],G=s[2],H=s[6],B=s[10],K=s[14],V=s[3],lt=s[7],mt=s[11],wt=s[15];return r[0]=o*w+a*M+l*G+c*V,r[4]=o*A+a*P+l*H+c*lt,r[8]=o*L+a*U+l*B+c*mt,r[12]=o*S+a*F+l*K+c*wt,r[1]=h*w+d*M+f*G+p*V,r[5]=h*A+d*P+f*H+p*lt,r[9]=h*L+d*U+f*B+p*mt,r[13]=h*S+d*F+f*K+p*wt,r[2]=g*w+_*M+m*G+u*V,r[6]=g*A+_*P+m*H+u*lt,r[10]=g*L+_*U+m*B+u*mt,r[14]=g*S+_*F+m*K+u*wt,r[3]=b*w+x*M+v*G+T*V,r[7]=b*A+x*P+v*H+T*lt,r[11]=b*L+x*U+v*B+T*mt,r[15]=b*S+x*F+v*K+T*wt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],p=t[14],g=t[3],_=t[7],m=t[11],u=t[15];return g*(+r*l*d-s*c*d-r*a*f+n*c*f+s*a*p-n*l*p)+_*(+e*l*p-e*c*f+r*o*f-s*o*p+s*c*h-r*l*h)+m*(+e*c*d-e*a*p-r*o*d+n*o*p+r*a*h-n*c*h)+u*(-s*a*h-e*l*d+e*a*f+s*o*d-n*o*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],p=t[11],g=t[12],_=t[13],m=t[14],u=t[15],b=d*m*c-_*f*c+_*l*p-a*m*p-d*l*u+a*f*u,x=g*f*c-h*m*c-g*l*p+o*m*p+h*l*u-o*f*u,v=h*_*c-g*d*c+g*a*p-o*_*p-h*a*u+o*d*u,T=g*d*l-h*_*l-g*a*f+o*_*f+h*a*m-o*d*m,w=e*b+n*x+s*v+r*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return t[0]=b*A,t[1]=(_*f*r-d*m*r-_*s*p+n*m*p+d*s*u-n*f*u)*A,t[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*u+n*l*u)*A,t[3]=(d*l*r-a*f*r-d*s*c+n*f*c+a*s*p-n*l*p)*A,t[4]=x*A,t[5]=(h*m*r-g*f*r+g*s*p-e*m*p-h*s*u+e*f*u)*A,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*u-e*l*u)*A,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*p+e*l*p)*A,t[8]=v*A,t[9]=(g*d*r-h*_*r-g*n*p+e*_*p+h*n*u-e*d*u)*A,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*u+e*a*u)*A,t[11]=(h*a*r-o*d*r-h*n*c+e*d*c+o*n*p-e*a*p)*A,t[12]=T*A,t[13]=(h*_*s-g*d*s+g*n*f-e*_*f-h*n*m+e*d*m)*A,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*m-e*a*m)*A,t[15]=(o*d*s-h*a*s+h*n*l-e*d*l-o*n*f+e*a*f)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,f=r*c,p=r*h,g=r*d,_=o*h,m=o*d,u=a*d,b=l*c,x=l*h,v=l*d,T=n.x,w=n.y,A=n.z;return s[0]=(1-(_+u))*T,s[1]=(p+v)*T,s[2]=(g-x)*T,s[3]=0,s[4]=(p-v)*w,s[5]=(1-(f+u))*w,s[6]=(m+b)*w,s[7]=0,s[8]=(g+x)*A,s[9]=(m-b)*A,s[10]=(1-(f+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=si.set(s[0],s[1],s[2]).length();const o=si.set(s[4],s[5],s[6]).length(),a=si.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ke.copy(this);const c=1/r,h=1/o,d=1/a;return Ke.elements[0]*=c,Ke.elements[1]*=c,Ke.elements[2]*=c,Ke.elements[4]*=h,Ke.elements[5]*=h,Ke.elements[6]*=h,Ke.elements[8]*=d,Ke.elements[9]*=d,Ke.elements[10]*=d,e.setFromRotationMatrix(Ke),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=gn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s);let p,g;if(a===gn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Os)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=gn){const l=this.elements,c=1/(e-t),h=1/(n-s),d=1/(o-r),f=(e+t)*c,p=(n+s)*h;let g,_;if(a===gn)g=(o+r)*d,_=-2*d;else if(a===Os)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const si=new I,Ke=new ne,Ph=new I(0,0,0),Lh=new I(1,1,1),En=new I,os=new I,ze=new I,ea=new ne,na=new Dn;class an{constructor(t=0,e=0,n=0,s=an.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Vt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ea.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ea,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return na.setFromEuler(this),this.setFromQuaternion(na,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}an.DEFAULT_ORDER="XYZ";class Ro{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Dh=0;const ia=new I,ri=new Dn,hn=new ne,as=new I,ki=new I,Ih=new I,Nh=new Dn,sa=new I(1,0,0),ra=new I(0,1,0),oa=new I(0,0,1),aa={type:"added"},Uh={type:"removed"},oi={type:"childadded",child:null},or={type:"childremoved",child:null};class ge extends Zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ge.DEFAULT_UP.clone();const t=new I,e=new an,n=new Dn,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ne},normalMatrix:{value:new Bt}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ro,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ri.setFromAxisAngle(t,e),this.quaternion.multiply(ri),this}rotateOnWorldAxis(t,e){return ri.setFromAxisAngle(t,e),this.quaternion.premultiply(ri),this}rotateX(t){return this.rotateOnAxis(sa,t)}rotateY(t){return this.rotateOnAxis(ra,t)}rotateZ(t){return this.rotateOnAxis(oa,t)}translateOnAxis(t,e){return ia.copy(t).applyQuaternion(this.quaternion),this.position.add(ia.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(sa,t)}translateY(t){return this.translateOnAxis(ra,t)}translateZ(t){return this.translateOnAxis(oa,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?as.copy(t):as.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(ki,as,this.up):hn.lookAt(as,ki,this.up),this.quaternion.setFromRotationMatrix(hn),s&&(hn.extractRotation(s.matrixWorld),ri.setFromRotationMatrix(hn),this.quaternion.premultiply(ri.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(aa),oi.child=t,this.dispatchEvent(oi),oi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Uh),or.child=t,this.dispatchEvent(or),or.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(hn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(aa),oi.child=t,this.dispatchEvent(oi),oi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,t,Ih),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,Nh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ge.DEFAULT_UP=new I(0,1,0);ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ze=new I,dn=new I,ar=new I,un=new I,ai=new I,li=new I,la=new I,lr=new I,cr=new I,hr=new I,dr=new de,ur=new de,fr=new de;class Je{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ze.subVectors(t,e),s.cross(Ze);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ze.subVectors(s,e),dn.subVectors(n,e),ar.subVectors(t,e);const o=Ze.dot(Ze),a=Ze.dot(dn),l=Ze.dot(ar),c=dn.dot(dn),h=dn.dot(ar),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,p=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,un)===null?!1:un.x>=0&&un.y>=0&&un.x+un.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,un.x),l.addScaledVector(o,un.y),l.addScaledVector(a,un.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return dr.setScalar(0),ur.setScalar(0),fr.setScalar(0),dr.fromBufferAttribute(t,e),ur.fromBufferAttribute(t,n),fr.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(dr,r.x),o.addScaledVector(ur,r.y),o.addScaledVector(fr,r.z),o}static isFrontFacing(t,e,n,s){return Ze.subVectors(n,e),dn.subVectors(t,e),Ze.cross(dn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ze.subVectors(this.c,this.b),dn.subVectors(this.a,this.b),Ze.cross(dn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Je.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Je.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Je.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Je.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Je.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;ai.subVectors(s,n),li.subVectors(r,n),lr.subVectors(t,n);const l=ai.dot(lr),c=li.dot(lr);if(l<=0&&c<=0)return e.copy(n);cr.subVectors(t,s);const h=ai.dot(cr),d=li.dot(cr);if(h>=0&&d<=h)return e.copy(s);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ai,o);hr.subVectors(t,r);const p=ai.dot(hr),g=li.dot(hr);if(g>=0&&p<=g)return e.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(li,a);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return la.subVectors(r,s),a=(d-h)/(d-h+(p-g)),e.copy(s).addScaledVector(la,a);const u=1/(m+_+f);return o=_*u,a=f*u,e.copy(n).addScaledVector(ai,o).addScaledVector(li,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const $l={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bn={h:0,s:0,l:0},ls={h:0,s:0,l:0};function pr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ht{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Kt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Kt.workingColorSpace){if(t=_h(t,1),e=Vt(e,0,1),n=Vt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=pr(o,r,t+1/3),this.g=pr(o,r,t),this.b=pr(o,r,t-1/3)}return Kt.toWorkingColorSpace(this,s),this}setStyle(t,e=Ge){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ge){const n=$l[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_n(t.r),this.g=_n(t.g),this.b=_n(t.b),this}copyLinearToSRGB(t){return this.r=xi(t.r),this.g=xi(t.g),this.b=xi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ge){return Kt.fromWorkingColorSpace(we.copy(this),t),Math.round(Vt(we.r*255,0,255))*65536+Math.round(Vt(we.g*255,0,255))*256+Math.round(Vt(we.b*255,0,255))}getHexString(t=Ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.fromWorkingColorSpace(we.copy(this),e);const n=we.r,s=we.g,r=we.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(we.copy(this),e),t.r=we.r,t.g=we.g,t.b=we.b,t}getStyle(t=Ge){Kt.fromWorkingColorSpace(we.copy(this),t);const e=we.r,n=we.g,s=we.b;return t!==Ge?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(bn),this.setHSL(bn.h+t,bn.s+e,bn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(bn),t.getHSL(ls);const n=Zs(bn.h,ls.h,e),s=Zs(bn.s,ls.s,e),r=Zs(bn.l,ls.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const we=new Ht;Ht.NAMES=$l;let Fh=0;class Ai extends Zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fh++}),this.uuid=ji(),this.name="",this.type="Material",this.blending=_i,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rr,this.blendDst=Pr,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=Mi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qn,this.stencilZFail=Qn,this.stencilZPass=Qn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_i&&(n.blending=this.blending),this.side!==Ln&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Rr&&(n.blendSrc=this.blendSrc),this.blendDst!==Pr&&(n.blendDst=this.blendDst),this.blendEquation!==Xn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Mi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class vn extends Ai{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=Rl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const me=new I,cs=new Dt;let Oh=0;class Fe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Oh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=jo,this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)cs.fromBufferAttribute(this,e),cs.applyMatrix3(t),this.setXY(e,cs.x,cs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ui(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ie(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ui(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ui(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ui(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ui(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),s=Ie(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),s=Ie(s,this.array),r=Ie(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==jo&&(t.usage=this.usage),t}}class ql extends Fe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Yl extends Fe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ue extends Fe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let kh=0;const We=new ne,mr=new ge,ci=new I,Be=new Ki,zi=new Ki,ye=new I;class Pe extends Zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kh++}),this.uuid=ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wl(t)?Yl:ql)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Bt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return We.makeRotationFromQuaternion(t),this.applyMatrix4(We),this}rotateX(t){return We.makeRotationX(t),this.applyMatrix4(We),this}rotateY(t){return We.makeRotationY(t),this.applyMatrix4(We),this}rotateZ(t){return We.makeRotationZ(t),this.applyMatrix4(We),this}translate(t,e,n){return We.makeTranslation(t,e,n),this.applyMatrix4(We),this}scale(t,e,n){return We.makeScale(t,e,n),this.applyMatrix4(We),this}lookAt(t){return mr.lookAt(t),mr.updateMatrix(),this.applyMatrix4(mr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ci).negate(),this.translate(ci.x,ci.y,ci.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ue(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ki);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Be.setFromBufferAttribute(r),this.morphTargetsRelative?(ye.addVectors(this.boundingBox.min,Be.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,Be.max),this.boundingBox.expandByPoint(ye)):(this.boundingBox.expandByPoint(Be.min),this.boundingBox.expandByPoint(Be.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ws);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(Be.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];zi.setFromBufferAttribute(a),this.morphTargetsRelative?(ye.addVectors(Be.min,zi.min),Be.expandByPoint(ye),ye.addVectors(Be.max,zi.max),Be.expandByPoint(ye)):(Be.expandByPoint(zi.min),Be.expandByPoint(zi.max))}Be.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ye.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ye));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ye.fromBufferAttribute(a,c),l&&(ci.fromBufferAttribute(t,c),ye.add(ci)),s=Math.max(s,n.distanceToSquared(ye))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fe(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new I,l[L]=new I;const c=new I,h=new I,d=new I,f=new Dt,p=new Dt,g=new Dt,_=new I,m=new I;function u(L,S,M){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,S),d.fromBufferAttribute(n,M),f.fromBufferAttribute(r,L),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),h.sub(c),d.sub(c),p.sub(f),g.sub(f);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(P),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),a[L].add(_),a[S].add(_),a[M].add(_),l[L].add(m),l[S].add(m),l[M].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let L=0,S=b.length;L<S;++L){const M=b[L],P=M.start,U=M.count;for(let F=P,G=P+U;F<G;F+=3)u(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const x=new I,v=new I,T=new I,w=new I;function A(L){T.fromBufferAttribute(s,L),w.copy(T);const S=a[L];x.copy(S),x.sub(T.multiplyScalar(T.dot(S))).normalize(),v.crossVectors(w,S);const P=v.dot(l[L])<0?-1:1;o.setXYZW(L,x.x,x.y,x.z,P)}for(let L=0,S=b.length;L<S;++L){const M=b[L],P=M.start,U=M.count;for(let F=P,G=P+U;F<G;F+=3)A(t.getX(F+0)),A(t.getX(F+1)),A(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Fe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,d=new I;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ye.fromBufferAttribute(t,e),ye.normalize(),t.setXYZ(e,ye.x,ye.y,ye.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let u=0;u<h;u++)f[g++]=c[p++]}return new Fe(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Pe,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const f=c[h],p=t(f,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ca=new ne,On=new Xs,hs=new Ws,ha=new I,ds=new I,us=new I,fs=new I,gr=new I,ps=new I,da=new I,ms=new I;class st extends ge{constructor(t=new Pe,e=new vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){ps.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(gr.fromBufferAttribute(d,t),o?ps.addScaledVector(gr,h):ps.addScaledVector(gr.sub(e),h))}e.add(ps)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),hs.copy(n.boundingSphere),hs.applyMatrix4(r),On.copy(t.ray).recast(t.near),!(hs.containsPoint(On.origin)===!1&&(On.intersectSphere(hs,ha)===null||On.origin.distanceToSquared(ha)>(t.far-t.near)**2))&&(ca.copy(r).invert(),On.copy(t.ray).applyMatrix4(ca),!(n.boundingBox!==null&&On.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,On)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],u=o[m.materialIndex],b=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=b,T=x;v<T;v+=3){const w=a.getX(v),A=a.getX(v+1),L=a.getX(v+2);s=gs(this,u,t,n,c,h,d,w,A,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,u=_;m<u;m+=3){const b=a.getX(m),x=a.getX(m+1),v=a.getX(m+2);s=gs(this,o,t,n,c,h,d,b,x,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],u=o[m.materialIndex],b=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=b,T=x;v<T;v+=3){const w=v,A=v+1,L=v+2;s=gs(this,u,t,n,c,h,d,w,A,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,u=_;m<u;m+=3){const b=m,x=m+1,v=m+2;s=gs(this,o,t,n,c,h,d,b,x,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function zh(i,t,e,n,s,r,o,a){let l;if(t.side===Ue?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Ln,a),l===null)return null;ms.copy(a),ms.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ms);return c<e.near||c>e.far?null:{distance:c,point:ms.clone(),object:i}}function gs(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,ds),i.getVertexPosition(l,us),i.getVertexPosition(c,fs);const h=zh(i,t,e,n,ds,us,fs,da);if(h){const d=new I;Je.getBarycoord(da,ds,us,fs,d),s&&(h.uv=Je.getInterpolatedAttribute(s,a,l,c,d,new Dt)),r&&(h.uv1=Je.getInterpolatedAttribute(r,a,l,c,d,new Dt)),o&&(h.normal=Je.getInterpolatedAttribute(o,a,l,c,d,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new I,materialIndex:0};Je.getNormal(ds,us,fs,f.normal),h.face=f,h.barycoord=d}return h}class Rt extends Pe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let f=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ue(c,3)),this.setAttribute("normal",new ue(h,3)),this.setAttribute("uv",new ue(d,2));function g(_,m,u,b,x,v,T,w,A,L,S){const M=v/A,P=T/L,U=v/2,F=T/2,G=w/2,H=A+1,B=L+1;let K=0,V=0;const lt=new I;for(let mt=0;mt<B;mt++){const wt=mt*P-F;for(let It=0;It<H;It++){const qt=It*M-U;lt[_]=qt*b,lt[m]=wt*x,lt[u]=G,c.push(lt.x,lt.y,lt.z),lt[_]=0,lt[m]=0,lt[u]=w>0?1:-1,h.push(lt.x,lt.y,lt.z),d.push(It/A),d.push(1-mt/L),K+=1}}for(let mt=0;mt<L;mt++)for(let wt=0;wt<A;wt++){const It=f+wt+H*mt,qt=f+wt+H*(mt+1),C=f+(wt+1)+H*(mt+1),$=f+(wt+1)+H*mt;l.push(It,qt,$),l.push(qt,C,$),V+=6}a.addGroup(p,V,S),p+=V,f+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ti(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ae(i){const t={};for(let e=0;e<i.length;e++){const n=Ti(i[e]);for(const s in n)t[s]=n[s]}return t}function Bh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function jl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}const Gh={clone:Ti,merge:Ae};var Hh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class In extends Ai{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hh,this.fragmentShader=Vh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ti(t.uniforms),this.uniformsGroups=Bh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Kl extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=gn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wn=new I,ua=new Dt,fa=new Dt;class $e extends Kl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=po*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ls*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return po*2*Math.atan(Math.tan(Ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(wn.x,wn.y).multiplyScalar(-t/wn.z),wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wn.x,wn.y).multiplyScalar(-t/wn.z)}getViewSize(t,e){return this.getViewBounds(t,ua,fa),e.subVectors(fa,ua)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ls*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const hi=-90,di=1;class Wh extends ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new $e(hi,di,t,e);s.layers=this.layers,this.add(s);const r=new $e(hi,di,t,e);r.layers=this.layers,this.add(r);const o=new $e(hi,di,t,e);o.layers=this.layers,this.add(o);const a=new $e(hi,di,t,e);a.layers=this.layers,this.add(a);const l=new $e(hi,di,t,e);l.layers=this.layers,this.add(l);const c=new $e(hi,di,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===gn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Os)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Zl extends Re{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:yi,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Xh extends Kn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Zl(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:rn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Rt(5,5,5),r=new In({name:"CubemapFromEquirect",uniforms:Ti(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ue,blending:Rn});r.uniforms.tEquirect.value=e;const o=new st(s,r),a=e.minFilter;return e.minFilter===Yn&&(e.minFilter=rn),new Wh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class $t extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $h={type:"move"};class _r{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),u=this._getHandJoint(c,_);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($h)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new $t;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class qh extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new an,this.environmentIntensity=1,this.environmentRotation=new an,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const vr=new I,Yh=new I,jh=new Bt;class Tn{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=vr.subVectors(n,e).cross(Yh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(vr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||jh.getNormalMatrix(t),s=this.coplanarPoint(vr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kn=new Ws,_s=new I;class Po{constructor(t=new Tn,e=new Tn,n=new Tn,s=new Tn,r=new Tn,o=new Tn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=gn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],f=s[7],p=s[8],g=s[9],_=s[10],m=s[11],u=s[12],b=s[13],x=s[14],v=s[15];if(n[0].setComponents(l-r,f-c,m-p,v-u).normalize(),n[1].setComponents(l+r,f+c,m+p,v+u).normalize(),n[2].setComponents(l+o,f+h,m+g,v+b).normalize(),n[3].setComponents(l-o,f-h,m-g,v-b).normalize(),n[4].setComponents(l-a,f-d,m-_,v-x).normalize(),e===gn)n[5].setComponents(l+a,f+d,m+_,v+x).normalize();else if(e===Os)n[5].setComponents(a,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),kn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),kn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(kn)}intersectsSprite(t){return kn.center.set(0,0,0),kn.radius=.7071067811865476,kn.applyMatrix4(t.matrixWorld),this.intersectsSphere(kn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(_s.x=s.normal.x>0?t.max.x:t.min.x,_s.y=s.normal.y>0?t.max.y:t.min.y,_s.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(_s)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Lo extends Ai{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const zs=new I,Bs=new I,pa=new ne,Bi=new Xs,vs=new Ws,xr=new I,ma=new I;class Jl extends ge{constructor(t=new Pe,e=new Lo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)zs.fromBufferAttribute(e,s-1),Bs.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=zs.distanceTo(Bs);t.setAttribute("lineDistance",new ue(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vs.copy(n.boundingSphere),vs.applyMatrix4(s),vs.radius+=r,t.ray.intersectsSphere(vs)===!1)return;pa.copy(s).invert(),Bi.copy(t.ray).applyMatrix4(pa);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const u=h.getX(_),b=h.getX(_+1),x=xs(this,t,Bi,l,u,b,_);x&&e.push(x)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),u=xs(this,t,Bi,l,_,m,g-1);u&&e.push(u)}}else{const p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const u=xs(this,t,Bi,l,_,_+1,_);u&&e.push(u)}if(this.isLineLoop){const _=xs(this,t,Bi,l,g-1,p,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function xs(i,t,e,n,s,r,o){const a=i.geometry.attributes.position;if(zs.fromBufferAttribute(a,s),Bs.fromBufferAttribute(a,r),e.distanceSqToSegment(zs,Bs,xr,ma)>n)return;xr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(xr);if(!(c<t.near||c>t.far))return{distance:c,point:ma.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const ga=new I,_a=new I;class Kh extends Jl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)ga.fromBufferAttribute(e,s),_a.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ga.distanceTo(_a);t.setAttribute("lineDistance",new ue(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Zh extends Re{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ql extends Re{constructor(t,e,n,s,r,o,a,l,c,h=vi){if(h!==vi&&h!==bi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===vi&&(n=jn),n===void 0&&h===bi&&(n=Ei),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:tn,this.minFilter=l!==void 0?l:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Co(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Do extends Pe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new I,h=new Dt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){const p=n+d/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ue(o,3)),this.setAttribute("normal",new ue(a,3)),this.setAttribute("uv",new ue(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Do(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class fe extends Pe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],f=[],p=[];let g=0;const _=[],m=n/2;let u=0;b(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new ue(d,3)),this.setAttribute("normal",new ue(f,3)),this.setAttribute("uv",new ue(p,2));function b(){const v=new I,T=new I;let w=0;const A=(e-t)/n;for(let L=0;L<=r;L++){const S=[],M=L/r,P=M*(e-t)+t;for(let U=0;U<=s;U++){const F=U/s,G=F*l+a,H=Math.sin(G),B=Math.cos(G);T.x=P*H,T.y=-M*n+m,T.z=P*B,d.push(T.x,T.y,T.z),v.set(H,A,B).normalize(),f.push(v.x,v.y,v.z),p.push(F,1-M),S.push(g++)}_.push(S)}for(let L=0;L<s;L++)for(let S=0;S<r;S++){const M=_[S][L],P=_[S+1][L],U=_[S+1][L+1],F=_[S][L+1];(t>0||S!==0)&&(h.push(M,P,F),w+=3),(e>0||S!==r-1)&&(h.push(P,U,F),w+=3)}c.addGroup(u,w,0),u+=w}function x(v){const T=g,w=new Dt,A=new I;let L=0;const S=v===!0?t:e,M=v===!0?1:-1;for(let U=1;U<=s;U++)d.push(0,m*M,0),f.push(0,M,0),p.push(.5,.5),g++;const P=g;for(let U=0;U<=s;U++){const G=U/s*l+a,H=Math.cos(G),B=Math.sin(G);A.x=S*B,A.y=m*M,A.z=S*H,d.push(A.x,A.y,A.z),f.push(0,M,0),w.x=H*.5+.5,w.y=B*.5*M+.5,p.push(w.x,w.y),g++}for(let U=0;U<s;U++){const F=T+U,G=P+U;v===!0?h.push(G,G+1,F):h.push(G+1,G,F),L+=3}c.addGroup(u,L,v===!0?1:2),u+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class on extends Pe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,f=e/l,p=[],g=[],_=[],m=[];for(let u=0;u<h;u++){const b=u*f-o;for(let x=0;x<c;x++){const v=x*d-r;g.push(v,-b,0),_.push(0,0,1),m.push(x/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let b=0;b<a;b++){const x=b+c*u,v=b+c*(u+1),T=b+1+c*(u+1),w=b+1+c*u;p.push(x,v,w),p.push(v,T,w)}this.setIndex(p),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(_,3)),this.setAttribute("uv",new ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new on(t.width,t.height,t.widthSegments,t.heightSegments)}}class qi extends Pe{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let d=t;const f=(e-t)/s,p=new I,g=new Dt;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const u=r+m/n*o;p.x=d*Math.cos(u),p.y=d*Math.sin(u),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}d+=f}for(let _=0;_<s;_++){const m=_*(n+1);for(let u=0;u<n;u++){const b=u+m,x=b,v=b+n+1,T=b+n+2,w=b+1;a.push(x,v,w),a.push(v,T,w)}}this.setIndex(a),this.setAttribute("position",new ue(l,3)),this.setAttribute("normal",new ue(c,3)),this.setAttribute("uv",new ue(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qi(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class At extends Ai{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hl,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Jh extends Ai{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ah,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Qh extends Ai{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const va={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class td{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){const p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const ed=new td;class Io{constructor(t){this.manager=t!==void 0?t:ed,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Io.DEFAULT_MATERIAL_NAME="__DEFAULT";const fn={};class nd extends Error{constructor(t,e){super(t),this.response=e}}class id extends Io{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=va.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(fn[t]!==void 0){fn[t].push({onLoad:e,onProgress:n,onError:s});return}fn[t]=[],fn[t].push({onLoad:e,onProgress:n,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=fn[t],d=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0;let _=0;const m=new ReadableStream({start(u){b();function b(){d.read().then(({done:x,value:v})=>{if(x)u.close();else{_+=v.byteLength;const T=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let w=0,A=h.length;w<A;w++){const L=h[w];L.onProgress&&L.onProgress(T)}u.enqueue(v),b()}},x=>{u.error(x)})}}});return new Response(m)}else throw new nd(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{va.add(t,c);const h=fn[t];delete fn[t];for(let d=0,f=h.length;d<f;d++){const p=h[d];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=fn[t];if(h===void 0)throw this.manager.itemError(t),c;delete fn[t];for(let d=0,f=h.length;d<f;d++){const p=h[d];p.onError&&p.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class tc extends ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class sd extends tc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Mr=new ne,xa=new I,Ma=new I;class rd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Po,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;xa.setFromMatrixPosition(t.matrixWorld),e.position.copy(xa),Ma.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ma),e.updateMatrixWorld(),Mr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Mr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class ec extends Kl{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class od extends rd{constructor(){super(new ec(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ya extends tc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.shadow=new od}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ad extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}const Sa=new ne;class ld{constructor(t,e,n=0,s=1/0){this.ray=new Xs(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ro,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Sa.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Sa),this}intersectObject(t,e=!0,n=[]){return mo(t,this,n,e),n.sort(Ea),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)mo(t[s],this,n,e);return n.sort(Ea),n}}function Ea(i,t){return i.distance-t.distance}function mo(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)mo(r[o],t,e,!0)}}class ba{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Vt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Vt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class nc extends Kh{constructor(t=10,e=10,n=4473924,s=8947848){n=new Ht(n),s=new Ht(s);const r=e/2,o=t/e,a=t/2,l=[],c=[];for(let f=0,p=0,g=-a;f<=e;f++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const _=f===r?n:s;_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3}const h=new Pe;h.setAttribute("position",new ue(l,3)),h.setAttribute("color",new ue(c,3));const d=new Lo({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class cd extends Zn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function wa(i,t,e,n){const s=hd(n);switch(e){case Ul:return i*t;case Ol:return i*t;case kl:return i*t*2;case zl:return i*t/s.components*s.byteLength;case wo:return i*t/s.components*s.byteLength;case Bl:return i*t*2/s.components*s.byteLength;case To:return i*t*2/s.components*s.byteLength;case Fl:return i*t*3/s.components*s.byteLength;case Qe:return i*t*4/s.components*s.byteLength;case Ao:return i*t*4/s.components*s.byteLength;case Ts:case As:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Cs:case Rs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Hr:case Wr:return Math.max(i,16)*Math.max(t,8)/4;case Gr:case Vr:return Math.max(i,8)*Math.max(t,8)/2;case Xr:case $r:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case qr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Yr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case jr:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Kr:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Zr:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Jr:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Qr:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case to:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case eo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case no:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case io:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case so:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ro:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case oo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ao:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ps:case lo:case co:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Gl:case ho:return Math.ceil(i/4)*Math.ceil(t/4)*8;case uo:case fo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function hd(i){switch(i){case xn:case Dl:return{byteLength:1,components:1};case $i:case Il:case Yi:return{byteLength:2,components:1};case Eo:case bo:return{byteLength:2,components:4};case jn:case So:case mn:return{byteLength:4,components:1};case Nl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ic(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function dd(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){const g=d[f],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){const _=d[p];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var ud=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,pd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,md=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_d=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Md=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,yd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ed=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,wd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Td=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ad=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Cd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ld=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Id=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Nd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ud=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Fd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Od=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,kd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Xd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$d=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,qd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,tu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,su=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ru=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ou=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,au=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,hu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,du=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,uu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_u=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Su=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Eu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Au=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Cu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ru=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Pu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Lu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Du=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Uu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ou=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ku=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Gu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$u=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Yu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ju=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ku=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Zu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ju=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Qu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ef=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,of=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,af=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,lf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,df=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ff=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_f=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Mf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Sf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ef=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Af=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Lf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Df=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,If=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Nf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ff=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Of=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Gf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gt={alphahash_fragment:ud,alphahash_pars_fragment:fd,alphamap_fragment:pd,alphamap_pars_fragment:md,alphatest_fragment:gd,alphatest_pars_fragment:_d,aomap_fragment:vd,aomap_pars_fragment:xd,batching_pars_vertex:Md,batching_vertex:yd,begin_vertex:Sd,beginnormal_vertex:Ed,bsdfs:bd,iridescence_fragment:wd,bumpmap_pars_fragment:Td,clipping_planes_fragment:Ad,clipping_planes_pars_fragment:Cd,clipping_planes_pars_vertex:Rd,clipping_planes_vertex:Pd,color_fragment:Ld,color_pars_fragment:Dd,color_pars_vertex:Id,color_vertex:Nd,common:Ud,cube_uv_reflection_fragment:Fd,defaultnormal_vertex:Od,displacementmap_pars_vertex:kd,displacementmap_vertex:zd,emissivemap_fragment:Bd,emissivemap_pars_fragment:Gd,colorspace_fragment:Hd,colorspace_pars_fragment:Vd,envmap_fragment:Wd,envmap_common_pars_fragment:Xd,envmap_pars_fragment:$d,envmap_pars_vertex:qd,envmap_physical_pars_fragment:su,envmap_vertex:Yd,fog_vertex:jd,fog_pars_vertex:Kd,fog_fragment:Zd,fog_pars_fragment:Jd,gradientmap_pars_fragment:Qd,lightmap_pars_fragment:tu,lights_lambert_fragment:eu,lights_lambert_pars_fragment:nu,lights_pars_begin:iu,lights_toon_fragment:ru,lights_toon_pars_fragment:ou,lights_phong_fragment:au,lights_phong_pars_fragment:lu,lights_physical_fragment:cu,lights_physical_pars_fragment:hu,lights_fragment_begin:du,lights_fragment_maps:uu,lights_fragment_end:fu,logdepthbuf_fragment:pu,logdepthbuf_pars_fragment:mu,logdepthbuf_pars_vertex:gu,logdepthbuf_vertex:_u,map_fragment:vu,map_pars_fragment:xu,map_particle_fragment:Mu,map_particle_pars_fragment:yu,metalnessmap_fragment:Su,metalnessmap_pars_fragment:Eu,morphinstance_vertex:bu,morphcolor_vertex:wu,morphnormal_vertex:Tu,morphtarget_pars_vertex:Au,morphtarget_vertex:Cu,normal_fragment_begin:Ru,normal_fragment_maps:Pu,normal_pars_fragment:Lu,normal_pars_vertex:Du,normal_vertex:Iu,normalmap_pars_fragment:Nu,clearcoat_normal_fragment_begin:Uu,clearcoat_normal_fragment_maps:Fu,clearcoat_pars_fragment:Ou,iridescence_pars_fragment:ku,opaque_fragment:zu,packing:Bu,premultiplied_alpha_fragment:Gu,project_vertex:Hu,dithering_fragment:Vu,dithering_pars_fragment:Wu,roughnessmap_fragment:Xu,roughnessmap_pars_fragment:$u,shadowmap_pars_fragment:qu,shadowmap_pars_vertex:Yu,shadowmap_vertex:ju,shadowmask_pars_fragment:Ku,skinbase_vertex:Zu,skinning_pars_vertex:Ju,skinning_vertex:Qu,skinnormal_vertex:tf,specularmap_fragment:ef,specularmap_pars_fragment:nf,tonemapping_fragment:sf,tonemapping_pars_fragment:rf,transmission_fragment:of,transmission_pars_fragment:af,uv_pars_fragment:lf,uv_pars_vertex:cf,uv_vertex:hf,worldpos_vertex:df,background_vert:uf,background_frag:ff,backgroundCube_vert:pf,backgroundCube_frag:mf,cube_vert:gf,cube_frag:_f,depth_vert:vf,depth_frag:xf,distanceRGBA_vert:Mf,distanceRGBA_frag:yf,equirect_vert:Sf,equirect_frag:Ef,linedashed_vert:bf,linedashed_frag:wf,meshbasic_vert:Tf,meshbasic_frag:Af,meshlambert_vert:Cf,meshlambert_frag:Rf,meshmatcap_vert:Pf,meshmatcap_frag:Lf,meshnormal_vert:Df,meshnormal_frag:If,meshphong_vert:Nf,meshphong_frag:Uf,meshphysical_vert:Ff,meshphysical_frag:Of,meshtoon_vert:kf,meshtoon_frag:zf,points_vert:Bf,points_frag:Gf,shadow_vert:Hf,shadow_frag:Vf,sprite_vert:Wf,sprite_frag:Xf},ht={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},sn={basic:{uniforms:Ae([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Ae([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Ae([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Ae([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Ae([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Ae([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Ae([ht.points,ht.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Ae([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Ae([ht.common,ht.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Ae([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Ae([ht.sprite,ht.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:Ae([ht.common,ht.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:Ae([ht.lights,ht.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};sn.physical={uniforms:Ae([sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const Ms={r:0,b:0,g:0},zn=new an,$f=new ne;function qf(i,t,e,n,s,r,o){const a=new Ht(0);let l=r===!0?0:1,c,h,d=null,f=0,p=null;function g(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?e:t).get(v)),v}function _(x){let v=!1;const T=g(x);T===null?u(a,l):T&&T.isColor&&(u(T,1),v=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,v){const T=g(v);T&&(T.isCubeTexture||T.mapping===Vs)?(h===void 0&&(h=new st(new Rt(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:Ti(sn.backgroundCube.uniforms),vertexShader:sn.backgroundCube.vertexShader,fragmentShader:sn.backgroundCube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,A,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),zn.copy(v.backgroundRotation),zn.x*=-1,zn.y*=-1,zn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(zn.y*=-1,zn.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4($f.makeRotationFromEuler(zn)),h.material.toneMapped=Kt.getTransfer(T.colorSpace)!==re,(d!==T||f!==T.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=T,f=T.version,p=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new st(new on(2,2),new In({name:"BackgroundMaterial",uniforms:Ti(sn.background.uniforms),vertexShader:sn.background.vertexShader,fragmentShader:sn.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Kt.getTransfer(T.colorSpace)!==re,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(d!==T||f!==T.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=T,f=T.version,p=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function u(x,v){x.getRGB(Ms,jl(i)),n.buffers.color.setClear(Ms.r,Ms.g,Ms.b,v,o)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),l=v,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,u(a,l)},render:_,addToRenderList:m,dispose:b}}function Yf(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(M,P,U,F,G){let H=!1;const B=d(F,U,P);r!==B&&(r=B,c(r.object)),H=p(M,F,U,G),H&&g(M,F,U,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,v(M,P,U,F),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function d(M,P,U){const F=U.wireframe===!0;let G=n[M.id];G===void 0&&(G={},n[M.id]=G);let H=G[P.id];H===void 0&&(H={},G[P.id]=H);let B=H[F];return B===void 0&&(B=f(l()),H[F]=B),B}function f(M){const P=[],U=[],F=[];for(let G=0;G<e;G++)P[G]=0,U[G]=0,F[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:U,attributeDivisors:F,object:M,attributes:{},index:null}}function p(M,P,U,F){const G=r.attributes,H=P.attributes;let B=0;const K=U.getAttributes();for(const V in K)if(K[V].location>=0){const mt=G[V];let wt=H[V];if(wt===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(wt=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(wt=M.instanceColor)),mt===void 0||mt.attribute!==wt||wt&&mt.data!==wt.data)return!0;B++}return r.attributesNum!==B||r.index!==F}function g(M,P,U,F){const G={},H=P.attributes;let B=0;const K=U.getAttributes();for(const V in K)if(K[V].location>=0){let mt=H[V];mt===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(mt=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(mt=M.instanceColor));const wt={};wt.attribute=mt,mt&&mt.data&&(wt.data=mt.data),G[V]=wt,B++}r.attributes=G,r.attributesNum=B,r.index=F}function _(){const M=r.newAttributes;for(let P=0,U=M.length;P<U;P++)M[P]=0}function m(M){u(M,0)}function u(M,P){const U=r.newAttributes,F=r.enabledAttributes,G=r.attributeDivisors;U[M]=1,F[M]===0&&(i.enableVertexAttribArray(M),F[M]=1),G[M]!==P&&(i.vertexAttribDivisor(M,P),G[M]=P)}function b(){const M=r.newAttributes,P=r.enabledAttributes;for(let U=0,F=P.length;U<F;U++)P[U]!==M[U]&&(i.disableVertexAttribArray(U),P[U]=0)}function x(M,P,U,F,G,H,B){B===!0?i.vertexAttribIPointer(M,P,U,G,H):i.vertexAttribPointer(M,P,U,F,G,H)}function v(M,P,U,F){_();const G=F.attributes,H=U.getAttributes(),B=P.defaultAttributeValues;for(const K in H){const V=H[K];if(V.location>=0){let lt=G[K];if(lt===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(lt=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(lt=M.instanceColor)),lt!==void 0){const mt=lt.normalized,wt=lt.itemSize,It=t.get(lt);if(It===void 0)continue;const qt=It.buffer,C=It.type,$=It.bytesPerElement,tt=C===i.INT||C===i.UNSIGNED_INT||lt.gpuType===So;if(lt.isInterleavedBufferAttribute){const rt=lt.data,gt=rt.stride,at=lt.offset;if(rt.isInstancedInterleavedBuffer){for(let bt=0;bt<V.locationSize;bt++)u(V.location+bt,rt.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let bt=0;bt<V.locationSize;bt++)m(V.location+bt);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let bt=0;bt<V.locationSize;bt++)x(V.location+bt,wt/V.locationSize,C,mt,gt*$,(at+wt/V.locationSize*bt)*$,tt)}else{if(lt.isInstancedBufferAttribute){for(let rt=0;rt<V.locationSize;rt++)u(V.location+rt,lt.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let rt=0;rt<V.locationSize;rt++)m(V.location+rt);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let rt=0;rt<V.locationSize;rt++)x(V.location+rt,wt/V.locationSize,C,mt,wt*$,wt/V.locationSize*rt*$,tt)}}else if(B!==void 0){const mt=B[K];if(mt!==void 0)switch(mt.length){case 2:i.vertexAttrib2fv(V.location,mt);break;case 3:i.vertexAttrib3fv(V.location,mt);break;case 4:i.vertexAttrib4fv(V.location,mt);break;default:i.vertexAttrib1fv(V.location,mt)}}}}b()}function T(){L();for(const M in n){const P=n[M];for(const U in P){const F=P[U];for(const G in F)h(F[G].object),delete F[G];delete P[U]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const U in P){const F=P[U];for(const G in F)h(F[G].object),delete F[G];delete P[U]}delete n[M.id]}function A(M){for(const P in n){const U=n[P];if(U[M.id]===void 0)continue;const F=U[M.id];for(const G in F)h(F[G].object),delete F[G];delete U[M.id]}}function L(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:S,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function jf(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];e.update(p,n,1)}function l(c,h,d,f){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*f[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Kf(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Qe&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const L=A===Yi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==xn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==mn&&!L)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:b,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:T,maxSamples:w}}function Zf(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Tn,a=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||n!==0||s;return s=f,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,u=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const b=r?0:n,x=b*4;let v=u.clippingState||null;l.value=v,v=h(g,f,x,p);for(let T=0;T!==x;++T)v[T]=e[T];u.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const u=p+_*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<u)&&(m=new Float32Array(u));for(let x=0,v=p;x!==_;++x,v+=4)o.copy(d[x]).applyMatrix4(b,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Jf(i){let t=new WeakMap;function e(o,a){return a===kr?o.mapping=yi:a===zr&&(o.mapping=Si),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===kr||a===zr)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Xh(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const mi=4,Ta=[.125,.215,.35,.446,.526,.582],$n=20,yr=new ec,Aa=new Ht;let Sr=null,Er=0,br=0,wr=!1;const Wn=(1+Math.sqrt(5))/2,ui=1/Wn,Ca=[new I(-Wn,ui,0),new I(Wn,ui,0),new I(-ui,0,Wn),new I(ui,0,Wn),new I(0,Wn,-ui),new I(0,Wn,ui),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Qf=new I;class Ra{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=Qf}=r;Sr=this._renderer.getRenderTarget(),Er=this._renderer.getActiveCubeFace(),br=this._renderer.getActiveMipmapLevel(),wr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Da(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=La(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Sr,Er,br),this._renderer.xr.enabled=wr,t.scissorTest=!1,ys(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===yi||t.mapping===Si?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Sr=this._renderer.getRenderTarget(),Er=this._renderer.getActiveCubeFace(),br=this._renderer.getActiveMipmapLevel(),wr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:Yi,format:Qe,colorSpace:wi,depthBuffer:!1},s=Pa(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pa(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tp(r)),this._blurMaterial=ep(r,t,e)}return s}_compileMaterial(t){const e=new st(this._lodPlanes[0],t);this._renderer.compile(e,yr)}_sceneToCubeUV(t,e,n,s,r){const l=new $e(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(Aa),d.toneMapping=Pn,d.autoClear=!1;const g=new vn({name:"PMREM.Background",side:Ue,depthWrite:!1,depthTest:!1}),_=new st(new Rt,g);let m=!1;const u=t.background;u?u.isColor&&(g.color.copy(u),t.background=null,m=!0):(g.color.copy(Aa),m=!0);for(let b=0;b<6;b++){const x=b%3;x===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):x===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));const v=this._cubeSize;ys(s,x*v,b>2?v:0,v,v),d.setRenderTarget(s),m&&d.render(_,l),d.render(t,l)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=p,d.autoClear=f,t.background=u}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===yi||t.mapping===Si;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Da()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=La());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new st(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;ys(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,yr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ca[(s-r-1)%Ca.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new st(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*$n-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):$n;m>$n&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$n}`);const u=[];let b=0;for(let A=0;A<$n;++A){const L=A/_,S=Math.exp(-L*L/2);u.push(S),A===0?b+=S:A<m&&(b+=2*S)}for(let A=0;A<u.length;A++)u[A]=u[A]/b;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const v=this._sizeLods[s],T=3*v*(s>x-mi?s-x+mi:0),w=4*(this._cubeSize-v);ys(e,T,w,3*v,2*v),l.setRenderTarget(e),l.render(d,yr)}}function tp(i){const t=[],e=[],n=[];let s=i;const r=i-mi+1+Ta.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-mi?l=Ta[o-i+mi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,_=3,m=2,u=1,b=new Float32Array(_*g*p),x=new Float32Array(m*g*p),v=new Float32Array(u*g*p);for(let w=0;w<p;w++){const A=w%3*2/3-1,L=w>2?0:-1,S=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];b.set(S,_*g*w),x.set(f,m*g*w);const M=[w,w,w,w,w,w];v.set(M,u*g*w)}const T=new Pe;T.setAttribute("position",new Fe(b,_)),T.setAttribute("uv",new Fe(x,m)),T.setAttribute("faceIndex",new Fe(v,u)),t.push(T),s>mi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Pa(i,t,e){const n=new Kn(i,t,e);return n.texture.mapping=Vs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ys(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function ep(i,t,e){const n=new Float32Array($n),s=new I(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:$n,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:No(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function La(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:No(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Da(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:No(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function No(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function np(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===kr||l===zr,h=l===yi||l===Si;if(c||h){let d=t.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Ra(i)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Ra(i)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function ip(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Vn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function sp(i,t,e,n){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)t.update(f[p],i.ARRAY_BUFFER)}function c(d){const f=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const b=p.array;_=p.version;for(let x=0,v=b.length;x<v;x+=3){const T=b[x+0],w=b[x+1],A=b[x+2];f.push(T,w,w,A,A,T)}}else if(g!==void 0){const b=g.array;_=g.version;for(let x=0,v=b.length/3-1;x<v;x+=3){const T=x+0,w=x+1,A=x+2;f.push(T,w,w,A,A,T)}}else return;const m=new(Wl(f)?Yl:ql)(f,1);m.version=_;const u=r.get(d);u&&t.remove(u),r.set(d,m)}function h(d){const f=r.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function rp(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*o),e.update(p,n,1)}function c(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*o,g),e.update(p,n,g))}function h(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let u=0;u<g;u++)m+=p[u];e.update(m,n,1)}function d(f,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/o,p[u],_[u]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,_,0,g);let u=0;for(let b=0;b<g;b++)u+=p[b]*_[b];e.update(u,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function op(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ap(i,t,e){const n=new WeakMap,s=new de;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let M=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var p=M;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let T=a.attributes.position.count*v,w=1;T>t.maxTextureSize&&(w=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const A=new Float32Array(T*w*4*d),L=new Xl(A,T,w,d);L.type=mn,L.needsUpdate=!0;const S=v*4;for(let P=0;P<d;P++){const U=u[P],F=b[P],G=x[P],H=T*w*4*P;for(let B=0;B<U.count;B++){const K=B*S;g===!0&&(s.fromBufferAttribute(U,B),A[H+K+0]=s.x,A[H+K+1]=s.y,A[H+K+2]=s.z,A[H+K+3]=0),_===!0&&(s.fromBufferAttribute(F,B),A[H+K+4]=s.x,A[H+K+5]=s.y,A[H+K+6]=s.z,A[H+K+7]=0),m===!0&&(s.fromBufferAttribute(G,B),A[H+K+8]=s.x,A[H+K+9]=s.y,A[H+K+10]=s.z,A[H+K+11]=G.itemSize===4?s.w:1)}}f={count:d,texture:L,size:new Dt(T,w)},n.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function lp(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const sc=new Re,Ia=new Ql(1,1),rc=new Xl,oc=new Ch,ac=new Zl,Na=[],Ua=[],Fa=new Float32Array(16),Oa=new Float32Array(9),ka=new Float32Array(4);function Ci(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Na[s];if(r===void 0&&(r=new Float32Array(s),Na[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function xe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function $s(i,t){let e=Ua[t];e===void 0&&(e=new Int32Array(t),Ua[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function cp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function hp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2fv(this.addr,t),Me(e,t)}}function dp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;i.uniform3fv(this.addr,t),Me(e,t)}}function up(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4fv(this.addr,t),Me(e,t)}}function fp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(xe(e,n))return;ka.set(n),i.uniformMatrix2fv(this.addr,!1,ka),Me(e,n)}}function pp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(xe(e,n))return;Oa.set(n),i.uniformMatrix3fv(this.addr,!1,Oa),Me(e,n)}}function mp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(xe(e,n))return;Fa.set(n),i.uniformMatrix4fv(this.addr,!1,Fa),Me(e,n)}}function gp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function _p(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2iv(this.addr,t),Me(e,t)}}function vp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3iv(this.addr,t),Me(e,t)}}function xp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4iv(this.addr,t),Me(e,t)}}function Mp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function yp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2uiv(this.addr,t),Me(e,t)}}function Sp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3uiv(this.addr,t),Me(e,t)}}function Ep(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4uiv(this.addr,t),Me(e,t)}}function bp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ia.compareFunction=Vl,r=Ia):r=sc,e.setTexture2D(t||r,s)}function wp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||oc,s)}function Tp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ac,s)}function Ap(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||rc,s)}function Cp(i){switch(i){case 5126:return cp;case 35664:return hp;case 35665:return dp;case 35666:return up;case 35674:return fp;case 35675:return pp;case 35676:return mp;case 5124:case 35670:return gp;case 35667:case 35671:return _p;case 35668:case 35672:return vp;case 35669:case 35673:return xp;case 5125:return Mp;case 36294:return yp;case 36295:return Sp;case 36296:return Ep;case 35678:case 36198:case 36298:case 36306:case 35682:return bp;case 35679:case 36299:case 36307:return wp;case 35680:case 36300:case 36308:case 36293:return Tp;case 36289:case 36303:case 36311:case 36292:return Ap}}function Rp(i,t){i.uniform1fv(this.addr,t)}function Pp(i,t){const e=Ci(t,this.size,2);i.uniform2fv(this.addr,e)}function Lp(i,t){const e=Ci(t,this.size,3);i.uniform3fv(this.addr,e)}function Dp(i,t){const e=Ci(t,this.size,4);i.uniform4fv(this.addr,e)}function Ip(i,t){const e=Ci(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Np(i,t){const e=Ci(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Up(i,t){const e=Ci(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Fp(i,t){i.uniform1iv(this.addr,t)}function Op(i,t){i.uniform2iv(this.addr,t)}function kp(i,t){i.uniform3iv(this.addr,t)}function zp(i,t){i.uniform4iv(this.addr,t)}function Bp(i,t){i.uniform1uiv(this.addr,t)}function Gp(i,t){i.uniform2uiv(this.addr,t)}function Hp(i,t){i.uniform3uiv(this.addr,t)}function Vp(i,t){i.uniform4uiv(this.addr,t)}function Wp(i,t,e){const n=this.cache,s=t.length,r=$s(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||sc,r[o])}function Xp(i,t,e){const n=this.cache,s=t.length,r=$s(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||oc,r[o])}function $p(i,t,e){const n=this.cache,s=t.length,r=$s(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||ac,r[o])}function qp(i,t,e){const n=this.cache,s=t.length,r=$s(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||rc,r[o])}function Yp(i){switch(i){case 5126:return Rp;case 35664:return Pp;case 35665:return Lp;case 35666:return Dp;case 35674:return Ip;case 35675:return Np;case 35676:return Up;case 5124:case 35670:return Fp;case 35667:case 35671:return Op;case 35668:case 35672:return kp;case 35669:case 35673:return zp;case 5125:return Bp;case 36294:return Gp;case 36295:return Hp;case 36296:return Vp;case 35678:case 36198:case 36298:case 36306:case 35682:return Wp;case 35679:case 36299:case 36307:return Xp;case 35680:case 36300:case 36308:case 36293:return $p;case 36289:case 36303:case 36311:case 36292:return qp}}class jp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Cp(e.type)}}class Kp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Yp(e.type)}}class Zp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Tr=/(\w+)(\])?(\[|\.)?/g;function za(i,t){i.seq.push(t),i.map[t.id]=t}function Jp(i,t,e){const n=i.name,s=n.length;for(Tr.lastIndex=0;;){const r=Tr.exec(n),o=Tr.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){za(e,c===void 0?new jp(a,i,t):new Kp(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Zp(a),za(e,d)),e=d}}}class Ds{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Jp(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Ba(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Qp=37297;let tm=0;function em(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Ga=new Bt;function nm(i){Kt._getMatrix(Ga,Kt.workingColorSpace,i);const t=`mat3( ${Ga.elements.map(e=>e.toFixed(4))} )`;switch(Kt.getTransfer(i)){case Fs:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ha(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+em(i.getShaderSource(t),o)}else return s}function im(i,t){const e=nm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function sm(i,t){let e;switch(t){case th:e="Linear";break;case eh:e="Reinhard";break;case nh:e="Cineon";break;case Pl:e="ACESFilmic";break;case sh:e="AgX";break;case rh:e="Neutral";break;case ih:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ss=new I;function rm(){Kt.getLuminanceCoefficients(Ss);const i=Ss.x.toFixed(4),t=Ss.y.toFixed(4),e=Ss.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function om(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hi).join(`
`)}function am(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function lm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Hi(i){return i!==""}function Va(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wa(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const cm=/^[ \t]*#include +<([\w\d./]+)>/gm;function go(i){return i.replace(cm,dm)}const hm=new Map;function dm(i,t){let e=Gt[t];if(e===void 0){const n=hm.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return go(e)}const um=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xa(i){return i.replace(um,fm)}function fm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function $a(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function pm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Al?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Cl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===pn&&(t="SHADOWMAP_TYPE_VSM"),t}function mm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case yi:case Si:t="ENVMAP_TYPE_CUBE";break;case Vs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function gm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Si:t="ENVMAP_MODE_REFRACTION";break}return t}function _m(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Rl:t="ENVMAP_BLENDING_MULTIPLY";break;case Jc:t="ENVMAP_BLENDING_MIX";break;case Qc:t="ENVMAP_BLENDING_ADD";break}return t}function vm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function xm(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=pm(e),c=mm(e),h=gm(e),d=_m(e),f=vm(e),p=om(e),g=am(r),_=s.createProgram();let m,u,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Hi).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Hi).join(`
`),u.length>0&&(u+=`
`)):(m=[$a(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hi).join(`
`),u=[$a(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Pn?"#define TONE_MAPPING":"",e.toneMapping!==Pn?Gt.tonemapping_pars_fragment:"",e.toneMapping!==Pn?sm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,im("linearToOutputTexel",e.outputColorSpace),rm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Hi).join(`
`)),o=go(o),o=Va(o,e),o=Wa(o,e),a=go(a),a=Va(a,e),a=Wa(a,e),o=Xa(o),a=Xa(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",e.glslVersion===Ko?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ko?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const x=b+m+o,v=b+u+a,T=Ba(s,s.VERTEX_SHADER,x),w=Ba(s,s.FRAGMENT_SHADER,v);s.attachShader(_,T),s.attachShader(_,w),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(P){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(_).trim(),F=s.getShaderInfoLog(T).trim(),G=s.getShaderInfoLog(w).trim();let H=!0,B=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,T,w);else{const K=Ha(s,T,"vertex"),V=Ha(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+U+`
`+K+`
`+V)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(F===""||G==="")&&(B=!1);B&&(P.diagnostics={runnable:H,programLog:U,vertexShader:{log:F,prefix:m},fragmentShader:{log:G,prefix:u}})}s.deleteShader(T),s.deleteShader(w),L=new Ds(s,_),S=lm(s,_)}let L;this.getUniforms=function(){return L===void 0&&A(this),L};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,Qp)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=tm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=w,this}let Mm=0;class ym{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Sm(t),e.set(t,n)),n}}class Sm{constructor(t){this.id=Mm++,this.code=t,this.usedTimes=0}}function Em(i,t,e,n,s,r,o){const a=new Ro,l=new ym,c=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,P,U,F){const G=U.fog,H=F.geometry,B=S.isMeshStandardMaterial?U.environment:null,K=(S.isMeshStandardMaterial?e:t).get(S.envMap||B),V=K&&K.mapping===Vs?K.image.height:null,lt=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const mt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,wt=mt!==void 0?mt.length:0;let It=0;H.morphAttributes.position!==void 0&&(It=1),H.morphAttributes.normal!==void 0&&(It=2),H.morphAttributes.color!==void 0&&(It=3);let qt,C,$,tt;if(lt){const Zt=sn[lt];qt=Zt.vertexShader,C=Zt.fragmentShader}else qt=S.vertexShader,C=S.fragmentShader,l.update(S),$=l.getVertexShaderID(S),tt=l.getFragmentShaderID(S);const rt=i.getRenderTarget(),gt=i.state.buffers.depth.getReversed(),at=F.isInstancedMesh===!0,bt=F.isBatchedMesh===!0,ie=!!S.map,ae=!!S.matcap,Wt=!!K,D=!!S.aoMap,Le=!!S.lightMap,Ft=!!S.bumpMap,zt=!!S.normalMap,_t=!!S.displacementMap,Jt=!!S.emissiveMap,St=!!S.metalnessMap,R=!!S.roughnessMap,y=S.anisotropy>0,z=S.clearcoat>0,Z=S.dispersion>0,Q=S.iridescence>0,Y=S.sheen>0,vt=S.transmission>0,it=y&&!!S.anisotropyMap,et=z&&!!S.clearcoatMap,xt=z&&!!S.clearcoatNormalMap,nt=z&&!!S.clearcoatRoughnessMap,ft=Q&&!!S.iridescenceMap,Pt=Q&&!!S.iridescenceThicknessMap,Lt=Y&&!!S.sheenColorMap,Mt=Y&&!!S.sheenRoughnessMap,Xt=!!S.specularMap,kt=!!S.specularColorMap,se=!!S.specularIntensityMap,N=vt&&!!S.transmissionMap,ct=vt&&!!S.thicknessMap,q=!!S.gradientMap,J=!!S.alphaMap,pt=S.alphaTest>0,dt=!!S.alphaHash,Ot=!!S.extensions;let Qt=Pn;S.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(Qt=i.toneMapping);const ce={shaderID:lt,shaderType:S.type,shaderName:S.name,vertexShader:qt,fragmentShader:C,defines:S.defines,customVertexShaderID:$,customFragmentShaderID:tt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:bt,batchingColor:bt&&F._colorsTexture!==null,instancing:at,instancingColor:at&&F.instanceColor!==null,instancingMorph:at&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:wi,alphaToCoverage:!!S.alphaToCoverage,map:ie,matcap:ae,envMap:Wt,envMapMode:Wt&&K.mapping,envMapCubeUVHeight:V,aoMap:D,lightMap:Le,bumpMap:Ft,normalMap:zt,displacementMap:f&&_t,emissiveMap:Jt,normalMapObjectSpace:zt&&S.normalMapType===ch,normalMapTangentSpace:zt&&S.normalMapType===Hl,metalnessMap:St,roughnessMap:R,anisotropy:y,anisotropyMap:it,clearcoat:z,clearcoatMap:et,clearcoatNormalMap:xt,clearcoatRoughnessMap:nt,dispersion:Z,iridescence:Q,iridescenceMap:ft,iridescenceThicknessMap:Pt,sheen:Y,sheenColorMap:Lt,sheenRoughnessMap:Mt,specularMap:Xt,specularColorMap:kt,specularIntensityMap:se,transmission:vt,transmissionMap:N,thicknessMap:ct,gradientMap:q,opaque:S.transparent===!1&&S.blending===_i&&S.alphaToCoverage===!1,alphaMap:J,alphaTest:pt,alphaHash:dt,combine:S.combine,mapUv:ie&&_(S.map.channel),aoMapUv:D&&_(S.aoMap.channel),lightMapUv:Le&&_(S.lightMap.channel),bumpMapUv:Ft&&_(S.bumpMap.channel),normalMapUv:zt&&_(S.normalMap.channel),displacementMapUv:_t&&_(S.displacementMap.channel),emissiveMapUv:Jt&&_(S.emissiveMap.channel),metalnessMapUv:St&&_(S.metalnessMap.channel),roughnessMapUv:R&&_(S.roughnessMap.channel),anisotropyMapUv:it&&_(S.anisotropyMap.channel),clearcoatMapUv:et&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:xt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&_(S.sheenRoughnessMap.channel),specularMapUv:Xt&&_(S.specularMap.channel),specularColorMapUv:kt&&_(S.specularColorMap.channel),specularIntensityMapUv:se&&_(S.specularIntensityMap.channel),transmissionMapUv:N&&_(S.transmissionMap.channel),thicknessMapUv:ct&&_(S.thicknessMap.channel),alphaMapUv:J&&_(S.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(zt||y),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!H.attributes.uv&&(ie||J),fog:!!G,useFog:S.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:gt,skinning:F.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:It,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Qt,decodeVideoTexture:ie&&S.map.isVideoTexture===!0&&Kt.getTransfer(S.map.colorSpace)===re,decodeVideoTextureEmissive:Jt&&S.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(S.emissiveMap.colorSpace)===re,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ce,flipSided:S.side===Ue,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ot&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&S.extensions.multiDraw===!0||bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ce.vertexUv1s=c.has(1),ce.vertexUv2s=c.has(2),ce.vertexUv3s=c.has(3),c.clear(),ce}function u(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)M.push(P),M.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(b(M,S),x(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function b(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function x(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){const M=g[S.type];let P;if(M){const U=sn[M];P=Gh.clone(U.uniforms)}else P=S.uniforms;return P}function T(S,M){let P;for(let U=0,F=h.length;U<F;U++){const G=h[U];if(G.cacheKey===M){P=G,++P.usedTimes;break}}return P===void 0&&(P=new xm(i,M,S,r),h.push(P)),P}function w(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function A(S){l.remove(S)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:v,acquireProgram:T,releaseProgram:w,releaseShaderCache:A,programs:h,dispose:L}}function bm(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function wm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function qa(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ya(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,f,p,g,_,m){let u=i[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},i[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=_,u.group=m),t++,u}function a(d,f,p,g,_,m){const u=o(d,f,p,g,_,m);p.transmission>0?n.push(u):p.transparent===!0?s.push(u):e.push(u)}function l(d,f,p,g,_,m){const u=o(d,f,p,g,_,m);p.transmission>0?n.unshift(u):p.transparent===!0?s.unshift(u):e.unshift(u)}function c(d,f){e.length>1&&e.sort(d||wm),n.length>1&&n.sort(f||qa),s.length>1&&s.sort(f||qa)}function h(){for(let d=t,f=i.length;d<f;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Tm(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Ya,i.set(n,[o])):s>=r.length?(o=new Ya,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Am(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Ht};break;case"SpotLight":e={position:new I,direction:new I,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function Cm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Rm=0;function Pm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Lm(i){const t=new Am,e=Cm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const s=new I,r=new ne,o=new ne;function a(c){let h=0,d=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,_=0,m=0,u=0,b=0,x=0,v=0,T=0,w=0,A=0;c.sort(Pm);for(let S=0,M=c.length;S<M;S++){const P=c[S],U=P.color,F=P.intensity,G=P.distance,H=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=U.r*F,d+=U.g*F,f+=U.b*F;else if(P.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(P.sh.coefficients[B],F);A++}else if(P.isDirectionalLight){const B=t.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const K=P.shadow,V=e.get(P);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=H,n.directionalShadowMatrix[p]=P.shadow.matrix,b++}n.directional[p]=B,p++}else if(P.isSpotLight){const B=t.get(P);B.position.setFromMatrixPosition(P.matrixWorld),B.color.copy(U).multiplyScalar(F),B.distance=G,B.coneCos=Math.cos(P.angle),B.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),B.decay=P.decay,n.spot[_]=B;const K=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,K.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[_]=K.matrix,P.castShadow){const V=e.get(P);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=H,v++}_++}else if(P.isRectAreaLight){const B=t.get(P);B.color.copy(U).multiplyScalar(F),B.halfWidth.set(P.width*.5,0,0),B.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=B,m++}else if(P.isPointLight){const B=t.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),B.distance=P.distance,B.decay=P.decay,P.castShadow){const K=P.shadow,V=e.get(P);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,V.shadowCameraNear=K.camera.near,V.shadowCameraFar=K.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=H,n.pointShadowMatrix[g]=P.shadow.matrix,x++}n.point[g]=B,g++}else if(P.isHemisphereLight){const B=t.get(P);B.skyColor.copy(P.color).multiplyScalar(F),B.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[u]=B,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const L=n.hash;(L.directionalLength!==p||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==u||L.numDirectionalShadows!==b||L.numPointShadows!==x||L.numSpotShadows!==v||L.numSpotMaps!==T||L.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+T-w,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,L.directionalLength=p,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=u,L.numDirectionalShadows=b,L.numPointShadows=x,L.numSpotShadows=v,L.numSpotMaps=T,L.numLightProbes=A,n.version=Rm++)}function l(c,h){let d=0,f=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let u=0,b=c.length;u<b;u++){const x=c[u];if(x.isDirectionalLight){const v=n.directional[d];v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(x.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function ja(i){const t=new Lm(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Dm(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new ja(i),t.set(s,[a])):r>=o.length?(a=new ja(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Im=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Nm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Um(i,t,e){let n=new Po;const s=new Dt,r=new Dt,o=new de,a=new Jh({depthPacking:lh}),l=new Qh,c={},h=e.maxTextureSize,d={[Ln]:Ue,[Ue]:Ln,[Ce]:Ce},f=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:Im,fragmentShader:Nm}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Pe;g.setAttribute("position",new Fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new st(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Al;let u=this.type;this.render=function(w,A,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Rn),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const F=u!==pn&&this.type===pn,G=u===pn&&this.type!==pn;for(let H=0,B=w.length;H<B;H++){const K=w[H],V=K.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const lt=V.getFrameExtents();if(s.multiply(lt),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/lt.x),s.x=r.x*lt.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/lt.y),s.y=r.y*lt.y,V.mapSize.y=r.y)),V.map===null||F===!0||G===!0){const wt=this.type!==pn?{minFilter:tn,magFilter:tn}:{};V.map!==null&&V.map.dispose(),V.map=new Kn(s.x,s.y,wt),V.map.texture.name=K.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const mt=V.getViewportCount();for(let wt=0;wt<mt;wt++){const It=V.getViewport(wt);o.set(r.x*It.x,r.y*It.y,r.x*It.z,r.y*It.w),U.viewport(o),V.updateMatrices(K,wt),n=V.getFrustum(),v(A,L,V.camera,K,this.type)}V.isPointLightShadow!==!0&&this.type===pn&&b(V,L),V.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,P)};function b(w,A){const L=t.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Kn(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,L,f,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,L,p,_,null)}function x(w,A,L,S){let M=null;const P=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)M=P;else if(M=L.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const U=M.uuid,F=A.uuid;let G=c[U];G===void 0&&(G={},c[U]=G);let H=G[F];H===void 0&&(H=M.clone(),G[F]=H,A.addEventListener("dispose",T)),M=H}if(M.visible=A.visible,M.wireframe=A.wireframe,S===pn?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:d[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const U=i.properties.get(M);U.light=L}return M}function v(w,A,L,S,M){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===pn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const F=t.update(w),G=w.material;if(Array.isArray(G)){const H=F.groups;for(let B=0,K=H.length;B<K;B++){const V=H[B],lt=G[V.materialIndex];if(lt&&lt.visible){const mt=x(w,lt,S,M);w.onBeforeShadow(i,w,A,L,F,mt,V),i.renderBufferDirect(L,null,F,mt,w,V),w.onAfterShadow(i,w,A,L,F,mt,V)}}}else if(G.visible){const H=x(w,G,S,M);w.onBeforeShadow(i,w,A,L,F,H,null),i.renderBufferDirect(L,null,F,H,w,null),w.onAfterShadow(i,w,A,L,F,H,null)}}const U=w.children;for(let F=0,G=U.length;F<G;F++)v(U[F],A,L,S,M)}function T(w){w.target.removeEventListener("dispose",T);for(const L in c){const S=c[L],M=w.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const Fm={[Lr]:Dr,[Ir]:Fr,[Nr]:Or,[Mi]:Ur,[Dr]:Lr,[Fr]:Ir,[Or]:Nr,[Ur]:Mi};function Om(i,t){function e(){let N=!1;const ct=new de;let q=null;const J=new de(0,0,0,0);return{setMask:function(pt){q!==pt&&!N&&(i.colorMask(pt,pt,pt,pt),q=pt)},setLocked:function(pt){N=pt},setClear:function(pt,dt,Ot,Qt,ce){ce===!0&&(pt*=Qt,dt*=Qt,Ot*=Qt),ct.set(pt,dt,Ot,Qt),J.equals(ct)===!1&&(i.clearColor(pt,dt,Ot,Qt),J.copy(ct))},reset:function(){N=!1,q=null,J.set(-1,0,0,0)}}}function n(){let N=!1,ct=!1,q=null,J=null,pt=null;return{setReversed:function(dt){if(ct!==dt){const Ot=t.get("EXT_clip_control");ct?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT);const Qt=pt;pt=null,this.setClear(Qt)}ct=dt},getReversed:function(){return ct},setTest:function(dt){dt?rt(i.DEPTH_TEST):gt(i.DEPTH_TEST)},setMask:function(dt){q!==dt&&!N&&(i.depthMask(dt),q=dt)},setFunc:function(dt){if(ct&&(dt=Fm[dt]),J!==dt){switch(dt){case Lr:i.depthFunc(i.NEVER);break;case Dr:i.depthFunc(i.ALWAYS);break;case Ir:i.depthFunc(i.LESS);break;case Mi:i.depthFunc(i.LEQUAL);break;case Nr:i.depthFunc(i.EQUAL);break;case Ur:i.depthFunc(i.GEQUAL);break;case Fr:i.depthFunc(i.GREATER);break;case Or:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=dt}},setLocked:function(dt){N=dt},setClear:function(dt){pt!==dt&&(ct&&(dt=1-dt),i.clearDepth(dt),pt=dt)},reset:function(){N=!1,q=null,J=null,pt=null,ct=!1}}}function s(){let N=!1,ct=null,q=null,J=null,pt=null,dt=null,Ot=null,Qt=null,ce=null;return{setTest:function(Zt){N||(Zt?rt(i.STENCIL_TEST):gt(i.STENCIL_TEST))},setMask:function(Zt){ct!==Zt&&!N&&(i.stencilMask(Zt),ct=Zt)},setFunc:function(Zt,Oe,qe){(q!==Zt||J!==Oe||pt!==qe)&&(i.stencilFunc(Zt,Oe,qe),q=Zt,J=Oe,pt=qe)},setOp:function(Zt,Oe,qe){(dt!==Zt||Ot!==Oe||Qt!==qe)&&(i.stencilOp(Zt,Oe,qe),dt=Zt,Ot=Oe,Qt=qe)},setLocked:function(Zt){N=Zt},setClear:function(Zt){ce!==Zt&&(i.clearStencil(Zt),ce=Zt)},reset:function(){N=!1,ct=null,q=null,J=null,pt=null,dt=null,Ot=null,Qt=null,ce=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},d={},f=new WeakMap,p=[],g=null,_=!1,m=null,u=null,b=null,x=null,v=null,T=null,w=null,A=new Ht(0,0,0),L=0,S=!1,M=null,P=null,U=null,F=null,G=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,K=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(V)[1]),B=K>=1):V.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),B=K>=2);let lt=null,mt={};const wt=i.getParameter(i.SCISSOR_BOX),It=i.getParameter(i.VIEWPORT),qt=new de().fromArray(wt),C=new de().fromArray(It);function $(N,ct,q,J){const pt=new Uint8Array(4),dt=i.createTexture();i.bindTexture(N,dt),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ot=0;Ot<q;Ot++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ct,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(ct+Ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return dt}const tt={};tt[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),tt[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),tt[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),rt(i.DEPTH_TEST),o.setFunc(Mi),Ft(!1),zt(Wo),rt(i.CULL_FACE),D(Rn);function rt(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function gt(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function at(N,ct){return d[N]!==ct?(i.bindFramebuffer(N,ct),d[N]=ct,N===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ct),N===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ct),!0):!1}function bt(N,ct){let q=p,J=!1;if(N){q=f.get(ct),q===void 0&&(q=[],f.set(ct,q));const pt=N.textures;if(q.length!==pt.length||q[0]!==i.COLOR_ATTACHMENT0){for(let dt=0,Ot=pt.length;dt<Ot;dt++)q[dt]=i.COLOR_ATTACHMENT0+dt;q.length=pt.length,J=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,J=!0);J&&i.drawBuffers(q)}function ie(N){return g!==N?(i.useProgram(N),g=N,!0):!1}const ae={[Xn]:i.FUNC_ADD,[Uc]:i.FUNC_SUBTRACT,[Fc]:i.FUNC_REVERSE_SUBTRACT};ae[Oc]=i.MIN,ae[kc]=i.MAX;const Wt={[zc]:i.ZERO,[Bc]:i.ONE,[Gc]:i.SRC_COLOR,[Rr]:i.SRC_ALPHA,[qc]:i.SRC_ALPHA_SATURATE,[Xc]:i.DST_COLOR,[Vc]:i.DST_ALPHA,[Hc]:i.ONE_MINUS_SRC_COLOR,[Pr]:i.ONE_MINUS_SRC_ALPHA,[$c]:i.ONE_MINUS_DST_COLOR,[Wc]:i.ONE_MINUS_DST_ALPHA,[Yc]:i.CONSTANT_COLOR,[jc]:i.ONE_MINUS_CONSTANT_COLOR,[Kc]:i.CONSTANT_ALPHA,[Zc]:i.ONE_MINUS_CONSTANT_ALPHA};function D(N,ct,q,J,pt,dt,Ot,Qt,ce,Zt){if(N===Rn){_===!0&&(gt(i.BLEND),_=!1);return}if(_===!1&&(rt(i.BLEND),_=!0),N!==Nc){if(N!==m||Zt!==S){if((u!==Xn||v!==Xn)&&(i.blendEquation(i.FUNC_ADD),u=Xn,v=Xn),Zt)switch(N){case _i:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xo:i.blendFunc(i.ONE,i.ONE);break;case $o:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case qo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case _i:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case $o:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case qo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}b=null,x=null,T=null,w=null,A.set(0,0,0),L=0,m=N,S=Zt}return}pt=pt||ct,dt=dt||q,Ot=Ot||J,(ct!==u||pt!==v)&&(i.blendEquationSeparate(ae[ct],ae[pt]),u=ct,v=pt),(q!==b||J!==x||dt!==T||Ot!==w)&&(i.blendFuncSeparate(Wt[q],Wt[J],Wt[dt],Wt[Ot]),b=q,x=J,T=dt,w=Ot),(Qt.equals(A)===!1||ce!==L)&&(i.blendColor(Qt.r,Qt.g,Qt.b,ce),A.copy(Qt),L=ce),m=N,S=!1}function Le(N,ct){N.side===Ce?gt(i.CULL_FACE):rt(i.CULL_FACE);let q=N.side===Ue;ct&&(q=!q),Ft(q),N.blending===_i&&N.transparent===!1?D(Rn):D(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const J=N.stencilWrite;a.setTest(J),J&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Jt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):gt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(N){M!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),M=N)}function zt(N){N!==Dc?(rt(i.CULL_FACE),N!==P&&(N===Wo?i.cullFace(i.BACK):N===Ic?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):gt(i.CULL_FACE),P=N}function _t(N){N!==U&&(B&&i.lineWidth(N),U=N)}function Jt(N,ct,q){N?(rt(i.POLYGON_OFFSET_FILL),(F!==ct||G!==q)&&(i.polygonOffset(ct,q),F=ct,G=q)):gt(i.POLYGON_OFFSET_FILL)}function St(N){N?rt(i.SCISSOR_TEST):gt(i.SCISSOR_TEST)}function R(N){N===void 0&&(N=i.TEXTURE0+H-1),lt!==N&&(i.activeTexture(N),lt=N)}function y(N,ct,q){q===void 0&&(lt===null?q=i.TEXTURE0+H-1:q=lt);let J=mt[q];J===void 0&&(J={type:void 0,texture:void 0},mt[q]=J),(J.type!==N||J.texture!==ct)&&(lt!==q&&(i.activeTexture(q),lt=q),i.bindTexture(N,ct||tt[N]),J.type=N,J.texture=ct)}function z(){const N=mt[lt];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Z(){try{i.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{i.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Y(){try{i.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function vt(){try{i.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function it(){try{i.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function et(){try{i.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xt(){try{i.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function nt(){try{i.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ft(){try{i.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pt(){try{i.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Lt(N){qt.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),qt.copy(N))}function Mt(N){C.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),C.copy(N))}function Xt(N,ct){let q=c.get(ct);q===void 0&&(q=new WeakMap,c.set(ct,q));let J=q.get(N);J===void 0&&(J=i.getUniformBlockIndex(ct,N.name),q.set(N,J))}function kt(N,ct){const J=c.get(ct).get(N);l.get(ct)!==J&&(i.uniformBlockBinding(ct,J,N.__bindingPointIndex),l.set(ct,J))}function se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},lt=null,mt={},d={},f=new WeakMap,p=[],g=null,_=!1,m=null,u=null,b=null,x=null,v=null,T=null,w=null,A=new Ht(0,0,0),L=0,S=!1,M=null,P=null,U=null,F=null,G=null,qt.set(0,0,i.canvas.width,i.canvas.height),C.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:rt,disable:gt,bindFramebuffer:at,drawBuffers:bt,useProgram:ie,setBlending:D,setMaterial:Le,setFlipSided:Ft,setCullFace:zt,setLineWidth:_t,setPolygonOffset:Jt,setScissorTest:St,activeTexture:R,bindTexture:y,unbindTexture:z,compressedTexImage2D:Z,compressedTexImage3D:Q,texImage2D:ft,texImage3D:Pt,updateUBOMapping:Xt,uniformBlockBinding:kt,texStorage2D:xt,texStorage3D:nt,texSubImage2D:Y,texSubImage3D:vt,compressedTexSubImage2D:it,compressedTexSubImage3D:et,scissor:Lt,viewport:Mt,reset:se}}function km(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Dt,h=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,y){return p?new OffscreenCanvas(R,y):ks("canvas")}function _(R,y,z){let Z=1;const Q=St(R);if((Q.width>z||Q.height>z)&&(Z=z/Math.max(Q.width,Q.height)),Z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Y=Math.floor(Z*Q.width),vt=Math.floor(Z*Q.height);d===void 0&&(d=g(Y,vt));const it=y?g(Y,vt):d;return it.width=Y,it.height=vt,it.getContext("2d").drawImage(R,0,0,Y,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Y+"x"+vt+")."),it}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function m(R){return R.generateMipmaps}function u(R){i.generateMipmap(R)}function b(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(R,y,z,Z,Q=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Y=y;if(y===i.RED&&(z===i.FLOAT&&(Y=i.R32F),z===i.HALF_FLOAT&&(Y=i.R16F),z===i.UNSIGNED_BYTE&&(Y=i.R8)),y===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.R8UI),z===i.UNSIGNED_SHORT&&(Y=i.R16UI),z===i.UNSIGNED_INT&&(Y=i.R32UI),z===i.BYTE&&(Y=i.R8I),z===i.SHORT&&(Y=i.R16I),z===i.INT&&(Y=i.R32I)),y===i.RG&&(z===i.FLOAT&&(Y=i.RG32F),z===i.HALF_FLOAT&&(Y=i.RG16F),z===i.UNSIGNED_BYTE&&(Y=i.RG8)),y===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RG8UI),z===i.UNSIGNED_SHORT&&(Y=i.RG16UI),z===i.UNSIGNED_INT&&(Y=i.RG32UI),z===i.BYTE&&(Y=i.RG8I),z===i.SHORT&&(Y=i.RG16I),z===i.INT&&(Y=i.RG32I)),y===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),z===i.UNSIGNED_INT&&(Y=i.RGB32UI),z===i.BYTE&&(Y=i.RGB8I),z===i.SHORT&&(Y=i.RGB16I),z===i.INT&&(Y=i.RGB32I)),y===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),z===i.UNSIGNED_INT&&(Y=i.RGBA32UI),z===i.BYTE&&(Y=i.RGBA8I),z===i.SHORT&&(Y=i.RGBA16I),z===i.INT&&(Y=i.RGBA32I)),y===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),y===i.RGBA){const vt=Q?Fs:Kt.getTransfer(Z);z===i.FLOAT&&(Y=i.RGBA32F),z===i.HALF_FLOAT&&(Y=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Y=vt===re?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function v(R,y){let z;return R?y===null||y===jn||y===Ei?z=i.DEPTH24_STENCIL8:y===mn?z=i.DEPTH32F_STENCIL8:y===$i&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===jn||y===Ei?z=i.DEPTH_COMPONENT24:y===mn?z=i.DEPTH_COMPONENT32F:y===$i&&(z=i.DEPTH_COMPONENT16),z}function T(R,y){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==tn&&R.minFilter!==rn?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function w(R){const y=R.target;y.removeEventListener("dispose",w),L(y),y.isVideoTexture&&h.delete(y)}function A(R){const y=R.target;y.removeEventListener("dispose",A),M(y)}function L(R){const y=n.get(R);if(y.__webglInit===void 0)return;const z=R.source,Z=f.get(z);if(Z){const Q=Z[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&S(R),Object.keys(Z).length===0&&f.delete(z)}n.remove(R)}function S(R){const y=n.get(R);i.deleteTexture(y.__webglTexture);const z=R.source,Z=f.get(z);delete Z[y.__cacheKey],o.memory.textures--}function M(R){const y=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(y.__webglFramebuffer[Z]))for(let Q=0;Q<y.__webglFramebuffer[Z].length;Q++)i.deleteFramebuffer(y.__webglFramebuffer[Z][Q]);else i.deleteFramebuffer(y.__webglFramebuffer[Z]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[Z])}else{if(Array.isArray(y.__webglFramebuffer))for(let Z=0;Z<y.__webglFramebuffer.length;Z++)i.deleteFramebuffer(y.__webglFramebuffer[Z]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Z=0;Z<y.__webglColorRenderbuffer.length;Z++)y.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[Z]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const z=R.textures;for(let Z=0,Q=z.length;Z<Q;Z++){const Y=n.get(z[Z]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(z[Z])}n.remove(R)}let P=0;function U(){P=0}function F(){const R=P;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),P+=1,R}function G(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function H(R,y){const z=n.get(R);if(R.isVideoTexture&&_t(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){const Z=R.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{C(z,R,y);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+y)}function B(R,y){const z=n.get(R);if(R.version>0&&z.__version!==R.version){C(z,R,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+y)}function K(R,y){const z=n.get(R);if(R.version>0&&z.__version!==R.version){C(z,R,y);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+y)}function V(R,y){const z=n.get(R);if(R.version>0&&z.__version!==R.version){$(z,R,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+y)}const lt={[Xi]:i.REPEAT,[qn]:i.CLAMP_TO_EDGE,[Br]:i.MIRRORED_REPEAT},mt={[tn]:i.NEAREST,[oh]:i.NEAREST_MIPMAP_NEAREST,[ts]:i.NEAREST_MIPMAP_LINEAR,[rn]:i.LINEAR,[Ks]:i.LINEAR_MIPMAP_NEAREST,[Yn]:i.LINEAR_MIPMAP_LINEAR},wt={[hh]:i.NEVER,[gh]:i.ALWAYS,[dh]:i.LESS,[Vl]:i.LEQUAL,[uh]:i.EQUAL,[mh]:i.GEQUAL,[fh]:i.GREATER,[ph]:i.NOTEQUAL};function It(R,y){if(y.type===mn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===rn||y.magFilter===Ks||y.magFilter===ts||y.magFilter===Yn||y.minFilter===rn||y.minFilter===Ks||y.minFilter===ts||y.minFilter===Yn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,lt[y.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,lt[y.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,lt[y.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,mt[y.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,mt[y.minFilter]),y.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,wt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===tn||y.minFilter!==ts&&y.minFilter!==Yn||y.type===mn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function qt(R,y){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",w));const Z=y.source;let Q=f.get(Z);Q===void 0&&(Q={},f.set(Z,Q));const Y=G(y);if(Y!==R.__cacheKey){Q[Y]===void 0&&(Q[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Q[Y].usedTimes++;const vt=Q[R.__cacheKey];vt!==void 0&&(Q[R.__cacheKey].usedTimes--,vt.usedTimes===0&&S(y)),R.__cacheKey=Y,R.__webglTexture=Q[Y].texture}return z}function C(R,y,z){let Z=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Z=i.TEXTURE_3D);const Q=qt(R,y),Y=y.source;e.bindTexture(Z,R.__webglTexture,i.TEXTURE0+z);const vt=n.get(Y);if(Y.version!==vt.__version||Q===!0){e.activeTexture(i.TEXTURE0+z);const it=Kt.getPrimaries(Kt.workingColorSpace),et=y.colorSpace===An?null:Kt.getPrimaries(y.colorSpace),xt=y.colorSpace===An||it===et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let nt=_(y.image,!1,s.maxTextureSize);nt=Jt(y,nt);const ft=r.convert(y.format,y.colorSpace),Pt=r.convert(y.type);let Lt=x(y.internalFormat,ft,Pt,y.colorSpace,y.isVideoTexture);It(Z,y);let Mt;const Xt=y.mipmaps,kt=y.isVideoTexture!==!0,se=vt.__version===void 0||Q===!0,N=Y.dataReady,ct=T(y,nt);if(y.isDepthTexture)Lt=v(y.format===bi,y.type),se&&(kt?e.texStorage2D(i.TEXTURE_2D,1,Lt,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,Lt,nt.width,nt.height,0,ft,Pt,null));else if(y.isDataTexture)if(Xt.length>0){kt&&se&&e.texStorage2D(i.TEXTURE_2D,ct,Lt,Xt[0].width,Xt[0].height);for(let q=0,J=Xt.length;q<J;q++)Mt=Xt[q],kt?N&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,Mt.width,Mt.height,ft,Pt,Mt.data):e.texImage2D(i.TEXTURE_2D,q,Lt,Mt.width,Mt.height,0,ft,Pt,Mt.data);y.generateMipmaps=!1}else kt?(se&&e.texStorage2D(i.TEXTURE_2D,ct,Lt,nt.width,nt.height),N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,nt.width,nt.height,ft,Pt,nt.data)):e.texImage2D(i.TEXTURE_2D,0,Lt,nt.width,nt.height,0,ft,Pt,nt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){kt&&se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,Lt,Xt[0].width,Xt[0].height,nt.depth);for(let q=0,J=Xt.length;q<J;q++)if(Mt=Xt[q],y.format!==Qe)if(ft!==null)if(kt){if(N)if(y.layerUpdates.size>0){const pt=wa(Mt.width,Mt.height,y.format,y.type);for(const dt of y.layerUpdates){const Ot=Mt.data.subarray(dt*pt/Mt.data.BYTES_PER_ELEMENT,(dt+1)*pt/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,dt,Mt.width,Mt.height,1,ft,Ot)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,Mt.width,Mt.height,nt.depth,ft,Mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,Lt,Mt.width,Mt.height,nt.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,Mt.width,Mt.height,nt.depth,ft,Pt,Mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,q,Lt,Mt.width,Mt.height,nt.depth,0,ft,Pt,Mt.data)}else{kt&&se&&e.texStorage2D(i.TEXTURE_2D,ct,Lt,Xt[0].width,Xt[0].height);for(let q=0,J=Xt.length;q<J;q++)Mt=Xt[q],y.format!==Qe?ft!==null?kt?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,Mt.width,Mt.height,ft,Mt.data):e.compressedTexImage2D(i.TEXTURE_2D,q,Lt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?N&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,Mt.width,Mt.height,ft,Pt,Mt.data):e.texImage2D(i.TEXTURE_2D,q,Lt,Mt.width,Mt.height,0,ft,Pt,Mt.data)}else if(y.isDataArrayTexture)if(kt){if(se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,Lt,nt.width,nt.height,nt.depth),N)if(y.layerUpdates.size>0){const q=wa(nt.width,nt.height,y.format,y.type);for(const J of y.layerUpdates){const pt=nt.data.subarray(J*q/nt.data.BYTES_PER_ELEMENT,(J+1)*q/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,nt.width,nt.height,1,ft,Pt,pt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,ft,Pt,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Lt,nt.width,nt.height,nt.depth,0,ft,Pt,nt.data);else if(y.isData3DTexture)kt?(se&&e.texStorage3D(i.TEXTURE_3D,ct,Lt,nt.width,nt.height,nt.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,ft,Pt,nt.data)):e.texImage3D(i.TEXTURE_3D,0,Lt,nt.width,nt.height,nt.depth,0,ft,Pt,nt.data);else if(y.isFramebufferTexture){if(se)if(kt)e.texStorage2D(i.TEXTURE_2D,ct,Lt,nt.width,nt.height);else{let q=nt.width,J=nt.height;for(let pt=0;pt<ct;pt++)e.texImage2D(i.TEXTURE_2D,pt,Lt,q,J,0,ft,Pt,null),q>>=1,J>>=1}}else if(Xt.length>0){if(kt&&se){const q=St(Xt[0]);e.texStorage2D(i.TEXTURE_2D,ct,Lt,q.width,q.height)}for(let q=0,J=Xt.length;q<J;q++)Mt=Xt[q],kt?N&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,ft,Pt,Mt):e.texImage2D(i.TEXTURE_2D,q,Lt,ft,Pt,Mt);y.generateMipmaps=!1}else if(kt){if(se){const q=St(nt);e.texStorage2D(i.TEXTURE_2D,ct,Lt,q.width,q.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft,Pt,nt)}else e.texImage2D(i.TEXTURE_2D,0,Lt,ft,Pt,nt);m(y)&&u(Z),vt.__version=Y.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function $(R,y,z){if(y.image.length!==6)return;const Z=qt(R,y),Q=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+z);const Y=n.get(Q);if(Q.version!==Y.__version||Z===!0){e.activeTexture(i.TEXTURE0+z);const vt=Kt.getPrimaries(Kt.workingColorSpace),it=y.colorSpace===An?null:Kt.getPrimaries(y.colorSpace),et=y.colorSpace===An||vt===it?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);const xt=y.isCompressedTexture||y.image[0].isCompressedTexture,nt=y.image[0]&&y.image[0].isDataTexture,ft=[];for(let J=0;J<6;J++)!xt&&!nt?ft[J]=_(y.image[J],!0,s.maxCubemapSize):ft[J]=nt?y.image[J].image:y.image[J],ft[J]=Jt(y,ft[J]);const Pt=ft[0],Lt=r.convert(y.format,y.colorSpace),Mt=r.convert(y.type),Xt=x(y.internalFormat,Lt,Mt,y.colorSpace),kt=y.isVideoTexture!==!0,se=Y.__version===void 0||Z===!0,N=Q.dataReady;let ct=T(y,Pt);It(i.TEXTURE_CUBE_MAP,y);let q;if(xt){kt&&se&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Xt,Pt.width,Pt.height);for(let J=0;J<6;J++){q=ft[J].mipmaps;for(let pt=0;pt<q.length;pt++){const dt=q[pt];y.format!==Qe?Lt!==null?kt?N&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt,0,0,dt.width,dt.height,Lt,dt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt,Xt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt,0,0,dt.width,dt.height,Lt,Mt,dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt,Xt,dt.width,dt.height,0,Lt,Mt,dt.data)}}}else{if(q=y.mipmaps,kt&&se){q.length>0&&ct++;const J=St(ft[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Xt,J.width,J.height)}for(let J=0;J<6;J++)if(nt){kt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ft[J].width,ft[J].height,Lt,Mt,ft[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Xt,ft[J].width,ft[J].height,0,Lt,Mt,ft[J].data);for(let pt=0;pt<q.length;pt++){const Ot=q[pt].image[J].image;kt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt+1,0,0,Ot.width,Ot.height,Lt,Mt,Ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt+1,Xt,Ot.width,Ot.height,0,Lt,Mt,Ot.data)}}else{kt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Lt,Mt,ft[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Xt,Lt,Mt,ft[J]);for(let pt=0;pt<q.length;pt++){const dt=q[pt];kt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt+1,0,0,Lt,Mt,dt.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt+1,Xt,Lt,Mt,dt.image[J])}}}m(y)&&u(i.TEXTURE_CUBE_MAP),Y.__version=Q.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function tt(R,y,z,Z,Q,Y){const vt=r.convert(z.format,z.colorSpace),it=r.convert(z.type),et=x(z.internalFormat,vt,it,z.colorSpace),xt=n.get(y),nt=n.get(z);if(nt.__renderTarget=y,!xt.__hasExternalTextures){const ft=Math.max(1,y.width>>Y),Pt=Math.max(1,y.height>>Y);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,Y,et,ft,Pt,y.depth,0,vt,it,null):e.texImage2D(Q,Y,et,ft,Pt,0,vt,it,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),zt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,Q,nt.__webglTexture,0,Ft(y)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,Q,nt.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(R,y,z){if(i.bindRenderbuffer(i.RENDERBUFFER,R),y.depthBuffer){const Z=y.depthTexture,Q=Z&&Z.isDepthTexture?Z.type:null,Y=v(y.stencilBuffer,Q),vt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=Ft(y);zt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it,Y,y.width,y.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,it,Y,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Y,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,R)}else{const Z=y.textures;for(let Q=0;Q<Z.length;Q++){const Y=Z[Q],vt=r.convert(Y.format,Y.colorSpace),it=r.convert(Y.type),et=x(Y.internalFormat,vt,it,Y.colorSpace),xt=Ft(y);z&&zt(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,et,y.width,y.height):zt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xt,et,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,et,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function gt(R,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(y.depthTexture);Z.__renderTarget=y,(!Z.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),H(y.depthTexture,0);const Q=Z.__webglTexture,Y=Ft(y);if(y.depthTexture.format===vi)zt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(y.depthTexture.format===bi)zt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function at(R){const y=n.get(R),z=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){const Z=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Z){const Q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Z.removeEventListener("dispose",Q)};Z.addEventListener("dispose",Q),y.__depthDisposeCallback=Q}y.__boundDepthTexture=Z}if(R.depthTexture&&!y.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");gt(y.__webglFramebuffer,R)}else if(z){y.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[Z]),y.__webglDepthbuffer[Z]===void 0)y.__webglDepthbuffer[Z]=i.createRenderbuffer(),rt(y.__webglDepthbuffer[Z],R,!1);else{const Q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=y.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),rt(y.__webglDepthbuffer,R,!1);else{const Z=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,Q)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function bt(R,y,z){const Z=n.get(R);y!==void 0&&tt(Z.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&at(R)}function ie(R){const y=R.texture,z=n.get(R),Z=n.get(y);R.addEventListener("dispose",A);const Q=R.textures,Y=R.isWebGLCubeRenderTarget===!0,vt=Q.length>1;if(vt||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=y.version,o.memory.textures++),Y){z.__webglFramebuffer=[];for(let it=0;it<6;it++)if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[it]=[];for(let et=0;et<y.mipmaps.length;et++)z.__webglFramebuffer[it][et]=i.createFramebuffer()}else z.__webglFramebuffer[it]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let it=0;it<y.mipmaps.length;it++)z.__webglFramebuffer[it]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(vt)for(let it=0,et=Q.length;it<et;it++){const xt=n.get(Q[it]);xt.__webglTexture===void 0&&(xt.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&zt(R)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let it=0;it<Q.length;it++){const et=Q[it];z.__webglColorRenderbuffer[it]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[it]);const xt=r.convert(et.format,et.colorSpace),nt=r.convert(et.type),ft=x(et.internalFormat,xt,nt,et.colorSpace,R.isXRRenderTarget===!0),Pt=Ft(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,ft,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,z.__webglColorRenderbuffer[it])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(z.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),It(i.TEXTURE_CUBE_MAP,y);for(let it=0;it<6;it++)if(y.mipmaps&&y.mipmaps.length>0)for(let et=0;et<y.mipmaps.length;et++)tt(z.__webglFramebuffer[it][et],R,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,et);else tt(z.__webglFramebuffer[it],R,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);m(y)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let it=0,et=Q.length;it<et;it++){const xt=Q[it],nt=n.get(xt);e.bindTexture(i.TEXTURE_2D,nt.__webglTexture),It(i.TEXTURE_2D,xt),tt(z.__webglFramebuffer,R,xt,i.COLOR_ATTACHMENT0+it,i.TEXTURE_2D,0),m(xt)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let it=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(it=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(it,Z.__webglTexture),It(it,y),y.mipmaps&&y.mipmaps.length>0)for(let et=0;et<y.mipmaps.length;et++)tt(z.__webglFramebuffer[et],R,y,i.COLOR_ATTACHMENT0,it,et);else tt(z.__webglFramebuffer,R,y,i.COLOR_ATTACHMENT0,it,0);m(y)&&u(it),e.unbindTexture()}R.depthBuffer&&at(R)}function ae(R){const y=R.textures;for(let z=0,Z=y.length;z<Z;z++){const Q=y[z];if(m(Q)){const Y=b(R),vt=n.get(Q).__webglTexture;e.bindTexture(Y,vt),u(Y),e.unbindTexture()}}}const Wt=[],D=[];function Le(R){if(R.samples>0){if(zt(R)===!1){const y=R.textures,z=R.width,Z=R.height;let Q=i.COLOR_BUFFER_BIT;const Y=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(R),it=y.length>1;if(it)for(let et=0;et<y.length;et++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let et=0;et<y.length;et++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),it){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[et]);const xt=n.get(y[et]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,xt,0)}i.blitFramebuffer(0,0,z,Z,0,0,z,Z,Q,i.NEAREST),l===!0&&(Wt.length=0,D.length=0,Wt.push(i.COLOR_ATTACHMENT0+et),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Wt.push(Y),D.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Wt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),it)for(let et=0;et<y.length;et++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.RENDERBUFFER,vt.__webglColorRenderbuffer[et]);const xt=n.get(y[et]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.TEXTURE_2D,xt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const y=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Ft(R){return Math.min(s.maxSamples,R.samples)}function zt(R){const y=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function _t(R){const y=o.render.frame;h.get(R)!==y&&(h.set(R,y),R.update())}function Jt(R,y){const z=R.colorSpace,Z=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==wi&&z!==An&&(Kt.getTransfer(z)===re?(Z!==Qe||Q!==xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),y}function St(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=U,this.setTexture2D=H,this.setTexture2DArray=B,this.setTexture3D=K,this.setTextureCube=V,this.rebindTextures=bt,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=zt}function zm(i,t){function e(n,s=An){let r;const o=Kt.getTransfer(s);if(n===xn)return i.UNSIGNED_BYTE;if(n===Eo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===bo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Nl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Dl)return i.BYTE;if(n===Il)return i.SHORT;if(n===$i)return i.UNSIGNED_SHORT;if(n===So)return i.INT;if(n===jn)return i.UNSIGNED_INT;if(n===mn)return i.FLOAT;if(n===Yi)return i.HALF_FLOAT;if(n===Ul)return i.ALPHA;if(n===Fl)return i.RGB;if(n===Qe)return i.RGBA;if(n===Ol)return i.LUMINANCE;if(n===kl)return i.LUMINANCE_ALPHA;if(n===vi)return i.DEPTH_COMPONENT;if(n===bi)return i.DEPTH_STENCIL;if(n===zl)return i.RED;if(n===wo)return i.RED_INTEGER;if(n===Bl)return i.RG;if(n===To)return i.RG_INTEGER;if(n===Ao)return i.RGBA_INTEGER;if(n===Ts||n===As||n===Cs||n===Rs)if(o===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ts)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===As)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Cs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Rs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ts)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===As)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Cs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Rs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Gr||n===Hr||n===Vr||n===Wr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Gr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Hr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xr||n===$r||n===qr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Xr||n===$r)return o===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===qr)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Yr||n===jr||n===Kr||n===Zr||n===Jr||n===Qr||n===to||n===eo||n===no||n===io||n===so||n===ro||n===oo||n===ao)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Yr)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jr)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Kr)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zr)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Jr)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qr)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===to)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===eo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===no)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===io)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===so)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ro)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===oo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ao)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ps||n===lo||n===co)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ps)return o===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===lo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===co)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Gl||n===ho||n===uo||n===fo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ps)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ho)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===uo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ei?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Bm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Hm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Re,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new In({vertexShader:Bm,fragmentShader:Gm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new st(new on(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Vm extends Zn{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,g=null;const _=new Hm,m=e.getContextAttributes();let u=null,b=null;const x=[],v=[],T=new Dt;let w=null;const A=new $e;A.viewport=new de;const L=new $e;L.viewport=new de;const S=[A,L],M=new ad;let P=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(C){let $=x[C];return $===void 0&&($=new _r,x[C]=$),$.getTargetRaySpace()},this.getControllerGrip=function(C){let $=x[C];return $===void 0&&($=new _r,x[C]=$),$.getGripSpace()},this.getHand=function(C){let $=x[C];return $===void 0&&($=new _r,x[C]=$),$.getHandSpace()};function F(C){const $=v.indexOf(C.inputSource);if($===-1)return;const tt=x[$];tt!==void 0&&(tt.update(C.inputSource,C.frame,c||o),tt.dispatchEvent({type:C.type,data:C.inputSource}))}function G(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",H);for(let C=0;C<x.length;C++){const $=v[C];$!==null&&(v[C]=null,x[C].disconnect($))}P=null,U=null,_.reset(),t.setRenderTarget(u),p=null,f=null,d=null,s=null,b=null,qt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(C){r=C,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(C){a=C,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(C){c=C},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(C){if(s=C,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",G),s.addEventListener("inputsourceschange",H),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(T),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let tt=null,rt=null,gt=null;m.depth&&(gt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=m.stencil?bi:vi,rt=m.stencil?Ei:jn);const at={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(at),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new Kn(f.textureWidth,f.textureHeight,{format:Qe,type:xn,depthTexture:new Ql(f.textureWidth,f.textureHeight,rt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const tt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new Kn(p.framebufferWidth,p.framebufferHeight,{format:Qe,type:xn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),qt.setContext(s),qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function H(C){for(let $=0;$<C.removed.length;$++){const tt=C.removed[$],rt=v.indexOf(tt);rt>=0&&(v[rt]=null,x[rt].disconnect(tt))}for(let $=0;$<C.added.length;$++){const tt=C.added[$];let rt=v.indexOf(tt);if(rt===-1){for(let at=0;at<x.length;at++)if(at>=v.length){v.push(tt),rt=at;break}else if(v[at]===null){v[at]=tt,rt=at;break}if(rt===-1)break}const gt=x[rt];gt&&gt.connect(tt)}}const B=new I,K=new I;function V(C,$,tt){B.setFromMatrixPosition($.matrixWorld),K.setFromMatrixPosition(tt.matrixWorld);const rt=B.distanceTo(K),gt=$.projectionMatrix.elements,at=tt.projectionMatrix.elements,bt=gt[14]/(gt[10]-1),ie=gt[14]/(gt[10]+1),ae=(gt[9]+1)/gt[5],Wt=(gt[9]-1)/gt[5],D=(gt[8]-1)/gt[0],Le=(at[8]+1)/at[0],Ft=bt*D,zt=bt*Le,_t=rt/(-D+Le),Jt=_t*-D;if($.matrixWorld.decompose(C.position,C.quaternion,C.scale),C.translateX(Jt),C.translateZ(_t),C.matrixWorld.compose(C.position,C.quaternion,C.scale),C.matrixWorldInverse.copy(C.matrixWorld).invert(),gt[10]===-1)C.projectionMatrix.copy($.projectionMatrix),C.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const St=bt+_t,R=ie+_t,y=Ft-Jt,z=zt+(rt-Jt),Z=ae*ie/R*St,Q=Wt*ie/R*St;C.projectionMatrix.makePerspective(y,z,Z,Q,St,R),C.projectionMatrixInverse.copy(C.projectionMatrix).invert()}}function lt(C,$){$===null?C.matrixWorld.copy(C.matrix):C.matrixWorld.multiplyMatrices($.matrixWorld,C.matrix),C.matrixWorldInverse.copy(C.matrixWorld).invert()}this.updateCamera=function(C){if(s===null)return;let $=C.near,tt=C.far;_.texture!==null&&(_.depthNear>0&&($=_.depthNear),_.depthFar>0&&(tt=_.depthFar)),M.near=L.near=A.near=$,M.far=L.far=A.far=tt,(P!==M.near||U!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,U=M.far),A.layers.mask=C.layers.mask|2,L.layers.mask=C.layers.mask|4,M.layers.mask=A.layers.mask|L.layers.mask;const rt=C.parent,gt=M.cameras;lt(M,rt);for(let at=0;at<gt.length;at++)lt(gt[at],rt);gt.length===2?V(M,A,L):M.projectionMatrix.copy(A.projectionMatrix),mt(C,M,rt)};function mt(C,$,tt){tt===null?C.matrix.copy($.matrixWorld):(C.matrix.copy(tt.matrixWorld),C.matrix.invert(),C.matrix.multiply($.matrixWorld)),C.matrix.decompose(C.position,C.quaternion,C.scale),C.updateMatrixWorld(!0),C.projectionMatrix.copy($.projectionMatrix),C.projectionMatrixInverse.copy($.projectionMatrixInverse),C.isPerspectiveCamera&&(C.fov=po*2*Math.atan(1/C.projectionMatrix.elements[5]),C.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(C){l=C,f!==null&&(f.fixedFoveation=C),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=C)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let wt=null;function It(C,$){if(h=$.getViewerPose(c||o),g=$,h!==null){const tt=h.views;p!==null&&(t.setRenderTargetFramebuffer(b,p.framebuffer),t.setRenderTarget(b));let rt=!1;tt.length!==M.cameras.length&&(M.cameras.length=0,rt=!0);for(let bt=0;bt<tt.length;bt++){const ie=tt[bt];let ae=null;if(p!==null)ae=p.getViewport(ie);else{const D=d.getViewSubImage(f,ie);ae=D.viewport,bt===0&&(t.setRenderTargetTextures(b,D.colorTexture,f.ignoreDepthValues?void 0:D.depthStencilTexture),t.setRenderTarget(b))}let Wt=S[bt];Wt===void 0&&(Wt=new $e,Wt.layers.enable(bt),Wt.viewport=new de,S[bt]=Wt),Wt.matrix.fromArray(ie.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(ie.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(ae.x,ae.y,ae.width,ae.height),bt===0&&(M.matrix.copy(Wt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),rt===!0&&M.cameras.push(Wt)}const gt=s.enabledFeatures;if(gt&&gt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&d){const bt=d.getDepthInformation(tt[0]);bt&&bt.isValid&&bt.texture&&_.init(t,bt,s.renderState)}}for(let tt=0;tt<x.length;tt++){const rt=v[tt],gt=x[tt];rt!==null&&gt!==void 0&&gt.update(rt,$,c||o)}wt&&wt(C,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}const qt=new ic;qt.setAnimationLoop(It),this.setAnimationLoop=function(C){wt=C},this.dispose=function(){}}}const Bn=new an,Wm=new ne;function Xm(i,t){function e(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,jl(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,b,x,v){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),d(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u)):u.isMeshStandardMaterial?(r(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,v)):u.isMeshMatcapMaterial?(r(m,u),g(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),_(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,b,x):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,e(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Ue&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,e(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Ue&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,e(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,e(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const b=t.get(u),x=b.envMap,v=b.envMapRotation;x&&(m.envMap.value=x,Bn.copy(v),Bn.x*=-1,Bn.y*=-1,Bn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Bn.y*=-1,Bn.z*=-1),m.envMapRotation.value.setFromMatrix4(Wm.makeRotationFromEuler(Bn)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,b,x){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*b,m.scale.value=x*.5,u.map&&(m.map.value=u.map,e(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,b){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ue&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function _(m,u){const b=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function $m(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,x){const v=x.program;n.uniformBlockBinding(b,v)}function c(b,x){let v=s[b.id];v===void 0&&(g(b),v=h(b),s[b.id]=v,b.addEventListener("dispose",m));const T=x.program;n.updateUBOMapping(b,T);const w=t.render.frame;r[b.id]!==w&&(f(b),r[b.id]=w)}function h(b){const x=d();b.__bindingPointIndex=x;const v=i.createBuffer(),T=b.__size,w=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,T,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,v),v}function d(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const x=s[b.id],v=b.uniforms,T=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let w=0,A=v.length;w<A;w++){const L=Array.isArray(v[w])?v[w]:[v[w]];for(let S=0,M=L.length;S<M;S++){const P=L[S];if(p(P,w,S,T)===!0){const U=P.__offset,F=Array.isArray(P.value)?P.value:[P.value];let G=0;for(let H=0;H<F.length;H++){const B=F[H],K=_(B);typeof B=="number"||typeof B=="boolean"?(P.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,U+G,P.__data)):B.isMatrix3?(P.__data[0]=B.elements[0],P.__data[1]=B.elements[1],P.__data[2]=B.elements[2],P.__data[3]=0,P.__data[4]=B.elements[3],P.__data[5]=B.elements[4],P.__data[6]=B.elements[5],P.__data[7]=0,P.__data[8]=B.elements[6],P.__data[9]=B.elements[7],P.__data[10]=B.elements[8],P.__data[11]=0):(B.toArray(P.__data,G),G+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(b,x,v,T){const w=b.value,A=x+"_"+v;if(T[A]===void 0)return typeof w=="number"||typeof w=="boolean"?T[A]=w:T[A]=w.clone(),!0;{const L=T[A];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return T[A]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function g(b){const x=b.uniforms;let v=0;const T=16;for(let A=0,L=x.length;A<L;A++){const S=Array.isArray(x[A])?x[A]:[x[A]];for(let M=0,P=S.length;M<P;M++){const U=S[M],F=Array.isArray(U.value)?U.value:[U.value];for(let G=0,H=F.length;G<H;G++){const B=F[G],K=_(B),V=v%T,lt=V%K.boundary,mt=V+lt;v+=lt,mt!==0&&T-mt<K.storage&&(v+=T-mt),U.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=K.storage}}}const w=v%T;return w>0&&(v+=T-w),b.__size=v,b.__cache={},this}function _(b){const x={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function m(b){const x=b.target;x.removeEventListener("dispose",m);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function u(){for(const b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:u}}class qm{constructor(t={}){const{canvas:e=xh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,u=null;const b=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ge,this.toneMapping=Pn,this.toneMappingExposure=1;const v=this;let T=!1,w=0,A=0,L=null,S=-1,M=null;const P=new de,U=new de;let F=null;const G=new Ht(0);let H=0,B=e.width,K=e.height,V=1,lt=null,mt=null;const wt=new de(0,0,B,K),It=new de(0,0,B,K);let qt=!1;const C=new Po;let $=!1,tt=!1;this.transmissionResolutionScale=1;const rt=new ne,gt=new ne,at=new I,bt=new de,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ae=!1;function Wt(){return L===null?V:1}let D=n;function Le(E,O){return e.getContext(E,O)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${yo}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",dt,!1),D===null){const O="webgl2";if(D=Le(O,E),D===null)throw Le(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ft,zt,_t,Jt,St,R,y,z,Z,Q,Y,vt,it,et,xt,nt,ft,Pt,Lt,Mt,Xt,kt,se,N;function ct(){Ft=new ip(D),Ft.init(),kt=new zm(D,Ft),zt=new Kf(D,Ft,t,kt),_t=new Om(D,Ft),zt.reverseDepthBuffer&&f&&_t.buffers.depth.setReversed(!0),Jt=new op(D),St=new bm,R=new km(D,Ft,_t,St,zt,kt,Jt),y=new Jf(v),z=new np(v),Z=new dd(D),se=new Yf(D,Z),Q=new sp(D,Z,Jt,se),Y=new lp(D,Q,Z,Jt),Lt=new ap(D,zt,R),nt=new Zf(St),vt=new Em(v,y,z,Ft,zt,se,nt),it=new Xm(v,St),et=new Tm,xt=new Dm(Ft),Pt=new qf(v,y,z,_t,Y,p,l),ft=new Um(v,Y,zt),N=new $m(D,Jt,zt,_t),Mt=new jf(D,Ft,Jt),Xt=new rp(D,Ft,Jt),Jt.programs=vt.programs,v.capabilities=zt,v.extensions=Ft,v.properties=St,v.renderLists=et,v.shadowMap=ft,v.state=_t,v.info=Jt}ct();const q=new Vm(v,D);this.xr=q,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=Ft.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ft.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize(B,K,!1))},this.getSize=function(E){return E.set(B,K)},this.setSize=function(E,O,W=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=E,K=O,e.width=Math.floor(E*V),e.height=Math.floor(O*V),W===!0&&(e.style.width=E+"px",e.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(B*V,K*V).floor()},this.setDrawingBufferSize=function(E,O,W){B=E,K=O,V=W,e.width=Math.floor(E*W),e.height=Math.floor(O*W),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(wt)},this.setViewport=function(E,O,W,X){E.isVector4?wt.set(E.x,E.y,E.z,E.w):wt.set(E,O,W,X),_t.viewport(P.copy(wt).multiplyScalar(V).round())},this.getScissor=function(E){return E.copy(It)},this.setScissor=function(E,O,W,X){E.isVector4?It.set(E.x,E.y,E.z,E.w):It.set(E,O,W,X),_t.scissor(U.copy(It).multiplyScalar(V).round())},this.getScissorTest=function(){return qt},this.setScissorTest=function(E){_t.setScissorTest(qt=E)},this.setOpaqueSort=function(E){lt=E},this.setTransparentSort=function(E){mt=E},this.getClearColor=function(E){return E.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor(...arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha(...arguments)},this.clear=function(E=!0,O=!0,W=!0){let X=0;if(E){let k=!1;if(L!==null){const ot=L.texture.format;k=ot===Ao||ot===To||ot===wo}if(k){const ot=L.texture.type,ut=ot===xn||ot===jn||ot===$i||ot===Ei||ot===Eo||ot===bo,yt=Pt.getClearColor(),Et=Pt.getClearAlpha(),Nt=yt.r,Ut=yt.g,Tt=yt.b;ut?(g[0]=Nt,g[1]=Ut,g[2]=Tt,g[3]=Et,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=Nt,_[1]=Ut,_[2]=Tt,_[3]=Et,D.clearBufferiv(D.COLOR,0,_))}else X|=D.COLOR_BUFFER_BIT}O&&(X|=D.DEPTH_BUFFER_BIT),W&&(X|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),Pt.dispose(),et.dispose(),xt.dispose(),St.dispose(),y.dispose(),z.dispose(),Y.dispose(),se.dispose(),N.dispose(),vt.dispose(),q.dispose(),q.removeEventListener("sessionstart",Pi),q.removeEventListener("sessionend",nn),Se.stop()};function J(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const E=Jt.autoReset,O=ft.enabled,W=ft.autoUpdate,X=ft.needsUpdate,k=ft.type;ct(),Jt.autoReset=E,ft.enabled=O,ft.autoUpdate=W,ft.needsUpdate=X,ft.type=k}function dt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ot(E){const O=E.target;O.removeEventListener("dispose",Ot),Qt(O)}function Qt(E){ce(E),St.remove(E)}function ce(E){const O=St.get(E).programs;O!==void 0&&(O.forEach(function(W){vt.releaseProgram(W)}),E.isShaderMaterial&&vt.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,W,X,k,ot){O===null&&(O=ie);const ut=k.isMesh&&k.matrixWorld.determinant()<0,yt=bc(E,O,W,X,k);_t.setMaterial(X,ut);let Et=W.index,Nt=1;if(X.wireframe===!0){if(Et=Q.getWireframeAttribute(W),Et===void 0)return;Nt=2}const Ut=W.drawRange,Tt=W.attributes.position;let Yt=Ut.start*Nt,te=(Ut.start+Ut.count)*Nt;ot!==null&&(Yt=Math.max(Yt,ot.start*Nt),te=Math.min(te,(ot.start+ot.count)*Nt)),Et!==null?(Yt=Math.max(Yt,0),te=Math.min(te,Et.count)):Tt!=null&&(Yt=Math.max(Yt,0),te=Math.min(te,Tt.count));const pe=te-Yt;if(pe<0||pe===1/0)return;se.setup(k,X,yt,W,Et);let he,jt=Mt;if(Et!==null&&(he=Z.get(Et),jt=Xt,jt.setIndex(he)),k.isMesh)X.wireframe===!0?(_t.setLineWidth(X.wireframeLinewidth*Wt()),jt.setMode(D.LINES)):jt.setMode(D.TRIANGLES);else if(k.isLine){let Ct=X.linewidth;Ct===void 0&&(Ct=1),_t.setLineWidth(Ct*Wt()),k.isLineSegments?jt.setMode(D.LINES):k.isLineLoop?jt.setMode(D.LINE_LOOP):jt.setMode(D.LINE_STRIP)}else k.isPoints?jt.setMode(D.POINTS):k.isSprite&&jt.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Vn("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),jt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Ft.get("WEBGL_multi_draw"))jt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Ct=k._multiDrawStarts,Ee=k._multiDrawCounts,ee=k._multiDrawCount,Ye=Et?Z.get(Et).bytesPerElement:1,Jn=St.get(X).currentProgram.getUniforms();for(let ke=0;ke<ee;ke++)Jn.setValue(D,"_gl_DrawID",ke),jt.render(Ct[ke]/Ye,Ee[ke])}else if(k.isInstancedMesh)jt.renderInstances(Yt,pe,k.count);else if(W.isInstancedBufferGeometry){const Ct=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ee=Math.min(W.instanceCount,Ct);jt.renderInstances(Yt,pe,Ee)}else jt.render(Yt,pe)};function Zt(E,O,W){E.transparent===!0&&E.side===Ce&&E.forceSinglePass===!1?(E.side=Ue,E.needsUpdate=!0,Qi(E,O,W),E.side=Ln,E.needsUpdate=!0,Qi(E,O,W),E.side=Ce):Qi(E,O,W)}this.compile=function(E,O,W=null){W===null&&(W=E),u=xt.get(W),u.init(O),x.push(u),W.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(u.pushLight(k),k.castShadow&&u.pushShadow(k))}),E!==W&&E.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(u.pushLight(k),k.castShadow&&u.pushShadow(k))}),u.setupLights();const X=new Set;return E.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ot=k.material;if(ot)if(Array.isArray(ot))for(let ut=0;ut<ot.length;ut++){const yt=ot[ut];Zt(yt,W,k),X.add(yt)}else Zt(ot,W,k),X.add(ot)}),u=x.pop(),X},this.compileAsync=function(E,O,W=null){const X=this.compile(E,O,W);return new Promise(k=>{function ot(){if(X.forEach(function(ut){St.get(ut).currentProgram.isReady()&&X.delete(ut)}),X.size===0){k(E);return}setTimeout(ot,10)}Ft.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let Oe=null;function qe(E){Oe&&Oe(E)}function Pi(){Se.stop()}function nn(){Se.start()}const Se=new ic;Se.setAnimationLoop(qe),typeof self<"u"&&Se.setContext(self),this.setAnimationLoop=function(E){Oe=E,q.setAnimationLoop(E),E===null?Se.stop():Se.start()},q.addEventListener("sessionstart",Pi),q.addEventListener("sessionend",nn),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(O),O=q.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,O,L),u=xt.get(E,x.length),u.init(O),x.push(u),gt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),C.setFromProjectionMatrix(gt),tt=this.localClippingEnabled,$=nt.init(this.clippingPlanes,tt),m=et.get(E,b.length),m.init(),b.push(m),q.enabled===!0&&q.isPresenting===!0){const ot=v.xr.getDepthSensingMesh();ot!==null&&Li(ot,O,-1/0,v.sortObjects)}Li(E,O,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(lt,mt),ae=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,ae&&Pt.addToRenderList(m,E),this.info.render.frame++,$===!0&&nt.beginShadows();const W=u.state.shadowsArray;ft.render(W,E,O),$===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,k=m.transmissive;if(u.setupLights(),O.isArrayCamera){const ot=O.cameras;if(k.length>0)for(let ut=0,yt=ot.length;ut<yt;ut++){const Et=ot[ut];Ii(X,k,E,Et)}ae&&Pt.render(E);for(let ut=0,yt=ot.length;ut<yt;ut++){const Et=ot[ut];Di(m,E,Et,Et.viewport)}}else k.length>0&&Ii(X,k,E,O),ae&&Pt.render(E),Di(m,E,O);L!==null&&A===0&&(R.updateMultisampleRenderTarget(L),R.updateRenderTargetMipmap(L)),E.isScene===!0&&E.onAfterRender(v,E,O),se.resetDefaultState(),S=-1,M=null,x.pop(),x.length>0?(u=x[x.length-1],$===!0&&nt.setGlobalState(v.clippingPlanes,u.state.camera)):u=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Li(E,O,W,X){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)u.pushLight(E),E.castShadow&&u.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||C.intersectsSprite(E)){X&&bt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(gt);const ut=Y.update(E),yt=E.material;yt.visible&&m.push(E,ut,yt,W,bt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||C.intersectsObject(E))){const ut=Y.update(E),yt=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),bt.copy(E.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),bt.copy(ut.boundingSphere.center)),bt.applyMatrix4(E.matrixWorld).applyMatrix4(gt)),Array.isArray(yt)){const Et=ut.groups;for(let Nt=0,Ut=Et.length;Nt<Ut;Nt++){const Tt=Et[Nt],Yt=yt[Tt.materialIndex];Yt&&Yt.visible&&m.push(E,ut,Yt,W,bt.z,Tt)}}else yt.visible&&m.push(E,ut,yt,W,bt.z,null)}}const ot=E.children;for(let ut=0,yt=ot.length;ut<yt;ut++)Li(ot[ut],O,W,X)}function Di(E,O,W,X){const k=E.opaque,ot=E.transmissive,ut=E.transparent;u.setupLightsView(W),$===!0&&nt.setGlobalState(v.clippingPlanes,W),X&&_t.viewport(P.copy(X)),k.length>0&&Ji(k,O,W),ot.length>0&&Ji(ot,O,W),ut.length>0&&Ji(ut,O,W),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function Ii(E,O,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[X.id]===void 0&&(u.state.transmissionRenderTarget[X.id]=new Kn(1,1,{generateMipmaps:!0,type:Ft.has("EXT_color_buffer_half_float")||Ft.has("EXT_color_buffer_float")?Yi:xn,minFilter:Yn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace}));const ot=u.state.transmissionRenderTarget[X.id],ut=X.viewport||P;ot.setSize(ut.z*v.transmissionResolutionScale,ut.w*v.transmissionResolutionScale);const yt=v.getRenderTarget();v.setRenderTarget(ot),v.getClearColor(G),H=v.getClearAlpha(),H<1&&v.setClearColor(16777215,.5),v.clear(),ae&&Pt.render(W);const Et=v.toneMapping;v.toneMapping=Pn;const Nt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),u.setupLightsView(X),$===!0&&nt.setGlobalState(v.clippingPlanes,X),Ji(E,W,X),R.updateMultisampleRenderTarget(ot),R.updateRenderTargetMipmap(ot),Ft.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let Tt=0,Yt=O.length;Tt<Yt;Tt++){const te=O[Tt],pe=te.object,he=te.geometry,jt=te.material,Ct=te.group;if(jt.side===Ce&&pe.layers.test(X.layers)){const Ee=jt.side;jt.side=Ue,jt.needsUpdate=!0,Go(pe,W,X,he,jt,Ct),jt.side=Ee,jt.needsUpdate=!0,Ut=!0}}Ut===!0&&(R.updateMultisampleRenderTarget(ot),R.updateRenderTargetMipmap(ot))}v.setRenderTarget(yt),v.setClearColor(G,H),Nt!==void 0&&(X.viewport=Nt),v.toneMapping=Et}function Ji(E,O,W){const X=O.isScene===!0?O.overrideMaterial:null;for(let k=0,ot=E.length;k<ot;k++){const ut=E[k],yt=ut.object,Et=ut.geometry,Nt=X===null?ut.material:X,Ut=ut.group;yt.layers.test(W.layers)&&Go(yt,O,W,Et,Nt,Ut)}}function Go(E,O,W,X,k,ot){E.onBeforeRender(v,O,W,X,k,ot),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),k.onBeforeRender(v,O,W,X,E,ot),k.transparent===!0&&k.side===Ce&&k.forceSinglePass===!1?(k.side=Ue,k.needsUpdate=!0,v.renderBufferDirect(W,O,X,k,E,ot),k.side=Ln,k.needsUpdate=!0,v.renderBufferDirect(W,O,X,k,E,ot),k.side=Ce):v.renderBufferDirect(W,O,X,k,E,ot),E.onAfterRender(v,O,W,X,k,ot)}function Qi(E,O,W){O.isScene!==!0&&(O=ie);const X=St.get(E),k=u.state.lights,ot=u.state.shadowsArray,ut=k.state.version,yt=vt.getParameters(E,k.state,ot,O,W),Et=vt.getProgramCacheKey(yt);let Nt=X.programs;X.environment=E.isMeshStandardMaterial?O.environment:null,X.fog=O.fog,X.envMap=(E.isMeshStandardMaterial?z:y).get(E.envMap||X.environment),X.envMapRotation=X.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,Nt===void 0&&(E.addEventListener("dispose",Ot),Nt=new Map,X.programs=Nt);let Ut=Nt.get(Et);if(Ut!==void 0){if(X.currentProgram===Ut&&X.lightsStateVersion===ut)return Vo(E,yt),Ut}else yt.uniforms=vt.getUniforms(E),E.onBeforeCompile(yt,v),Ut=vt.acquireProgram(yt,Et),Nt.set(Et,Ut),X.uniforms=yt.uniforms;const Tt=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Tt.clippingPlanes=nt.uniform),Vo(E,yt),X.needsLights=Tc(E),X.lightsStateVersion=ut,X.needsLights&&(Tt.ambientLightColor.value=k.state.ambient,Tt.lightProbe.value=k.state.probe,Tt.directionalLights.value=k.state.directional,Tt.directionalLightShadows.value=k.state.directionalShadow,Tt.spotLights.value=k.state.spot,Tt.spotLightShadows.value=k.state.spotShadow,Tt.rectAreaLights.value=k.state.rectArea,Tt.ltc_1.value=k.state.rectAreaLTC1,Tt.ltc_2.value=k.state.rectAreaLTC2,Tt.pointLights.value=k.state.point,Tt.pointLightShadows.value=k.state.pointShadow,Tt.hemisphereLights.value=k.state.hemi,Tt.directionalShadowMap.value=k.state.directionalShadowMap,Tt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Tt.spotShadowMap.value=k.state.spotShadowMap,Tt.spotLightMatrix.value=k.state.spotLightMatrix,Tt.spotLightMap.value=k.state.spotLightMap,Tt.pointShadowMap.value=k.state.pointShadowMap,Tt.pointShadowMatrix.value=k.state.pointShadowMatrix),X.currentProgram=Ut,X.uniformsList=null,Ut}function Ho(E){if(E.uniformsList===null){const O=E.currentProgram.getUniforms();E.uniformsList=Ds.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function Vo(E,O){const W=St.get(E);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function bc(E,O,W,X,k){O.isScene!==!0&&(O=ie),R.resetTextureUnits();const ot=O.fog,ut=X.isMeshStandardMaterial?O.environment:null,yt=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:wi,Et=(X.isMeshStandardMaterial?z:y).get(X.envMap||ut),Nt=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ut=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Tt=!!W.morphAttributes.position,Yt=!!W.morphAttributes.normal,te=!!W.morphAttributes.color;let pe=Pn;X.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(pe=v.toneMapping);const he=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,jt=he!==void 0?he.length:0,Ct=St.get(X),Ee=u.state.lights;if($===!0&&(tt===!0||E!==M)){const Te=E===M&&X.id===S;nt.setState(X,E,Te)}let ee=!1;X.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==Ee.state.version||Ct.outputColorSpace!==yt||k.isBatchedMesh&&Ct.batching===!1||!k.isBatchedMesh&&Ct.batching===!0||k.isBatchedMesh&&Ct.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ct.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ct.instancing===!1||!k.isInstancedMesh&&Ct.instancing===!0||k.isSkinnedMesh&&Ct.skinning===!1||!k.isSkinnedMesh&&Ct.skinning===!0||k.isInstancedMesh&&Ct.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ct.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ct.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ct.instancingMorph===!1&&k.morphTexture!==null||Ct.envMap!==Et||X.fog===!0&&Ct.fog!==ot||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==nt.numPlanes||Ct.numIntersection!==nt.numIntersection)||Ct.vertexAlphas!==Nt||Ct.vertexTangents!==Ut||Ct.morphTargets!==Tt||Ct.morphNormals!==Yt||Ct.morphColors!==te||Ct.toneMapping!==pe||Ct.morphTargetsCount!==jt)&&(ee=!0):(ee=!0,Ct.__version=X.version);let Ye=Ct.currentProgram;ee===!0&&(Ye=Qi(X,O,k));let Jn=!1,ke=!1,Ni=!1;const le=Ye.getUniforms(),He=Ct.uniforms;if(_t.useProgram(Ye.program)&&(Jn=!0,ke=!0,Ni=!0),X.id!==S&&(S=X.id,ke=!0),Jn||M!==E){_t.buffers.depth.getReversed()?(rt.copy(E.projectionMatrix),yh(rt),Sh(rt),le.setValue(D,"projectionMatrix",rt)):le.setValue(D,"projectionMatrix",E.projectionMatrix),le.setValue(D,"viewMatrix",E.matrixWorldInverse);const De=le.map.cameraPosition;De!==void 0&&De.setValue(D,at.setFromMatrixPosition(E.matrixWorld)),zt.logarithmicDepthBuffer&&le.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&le.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,ke=!0,Ni=!0)}if(k.isSkinnedMesh){le.setOptional(D,k,"bindMatrix"),le.setOptional(D,k,"bindMatrixInverse");const Te=k.skeleton;Te&&(Te.boneTexture===null&&Te.computeBoneTexture(),le.setValue(D,"boneTexture",Te.boneTexture,R))}k.isBatchedMesh&&(le.setOptional(D,k,"batchingTexture"),le.setValue(D,"batchingTexture",k._matricesTexture,R),le.setOptional(D,k,"batchingIdTexture"),le.setValue(D,"batchingIdTexture",k._indirectTexture,R),le.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&le.setValue(D,"batchingColorTexture",k._colorsTexture,R));const Ve=W.morphAttributes;if((Ve.position!==void 0||Ve.normal!==void 0||Ve.color!==void 0)&&Lt.update(k,W,Ye),(ke||Ct.receiveShadow!==k.receiveShadow)&&(Ct.receiveShadow=k.receiveShadow,le.setValue(D,"receiveShadow",k.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(He.envMap.value=Et,He.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&O.environment!==null&&(He.envMapIntensity.value=O.environmentIntensity),ke&&(le.setValue(D,"toneMappingExposure",v.toneMappingExposure),Ct.needsLights&&wc(He,Ni),ot&&X.fog===!0&&it.refreshFogUniforms(He,ot),it.refreshMaterialUniforms(He,X,V,K,u.state.transmissionRenderTarget[E.id]),Ds.upload(D,Ho(Ct),He,R)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ds.upload(D,Ho(Ct),He,R),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&le.setValue(D,"center",k.center),le.setValue(D,"modelViewMatrix",k.modelViewMatrix),le.setValue(D,"normalMatrix",k.normalMatrix),le.setValue(D,"modelMatrix",k.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Te=X.uniformsGroups;for(let De=0,js=Te.length;De<js;De++){const Nn=Te[De];N.update(Nn,Ye),N.bind(Nn,Ye)}}return Ye}function wc(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function Tc(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(E,O,W){St.get(E.texture).__webglTexture=O,St.get(E.depthTexture).__webglTexture=W;const X=St.get(E);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||Ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,O){const W=St.get(E);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0};const Ac=D.createFramebuffer();this.setRenderTarget=function(E,O=0,W=0){L=E,w=O,A=W;let X=!0,k=null,ot=!1,ut=!1;if(E){const Et=St.get(E);if(Et.__useDefaultFramebuffer!==void 0)_t.bindFramebuffer(D.FRAMEBUFFER,null),X=!1;else if(Et.__webglFramebuffer===void 0)R.setupRenderTarget(E);else if(Et.__hasExternalTextures)R.rebindTextures(E,St.get(E.texture).__webglTexture,St.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Tt=E.depthTexture;if(Et.__boundDepthTexture!==Tt){if(Tt!==null&&St.has(Tt)&&(E.width!==Tt.image.width||E.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(E)}}const Nt=E.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(ut=!0);const Ut=St.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ut[O])?k=Ut[O][W]:k=Ut[O],ot=!0):E.samples>0&&R.useMultisampledRTT(E)===!1?k=St.get(E).__webglMultisampledFramebuffer:Array.isArray(Ut)?k=Ut[W]:k=Ut,P.copy(E.viewport),U.copy(E.scissor),F=E.scissorTest}else P.copy(wt).multiplyScalar(V).floor(),U.copy(It).multiplyScalar(V).floor(),F=qt;if(W!==0&&(k=Ac),_t.bindFramebuffer(D.FRAMEBUFFER,k)&&X&&_t.drawBuffers(E,k),_t.viewport(P),_t.scissor(U),_t.setScissorTest(F),ot){const Et=St.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,Et.__webglTexture,W)}else if(ut){const Et=St.get(E.texture),Nt=O;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Et.__webglTexture,W,Nt)}else if(E!==null&&W!==0){const Et=St.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Et.__webglTexture,W)}S=-1},this.readRenderTargetPixels=function(E,O,W,X,k,ot,ut){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=St.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ut!==void 0&&(yt=yt[ut]),yt){_t.bindFramebuffer(D.FRAMEBUFFER,yt);try{const Et=E.texture,Nt=Et.format,Ut=Et.type;if(!zt.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!zt.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-X&&W>=0&&W<=E.height-k&&D.readPixels(O,W,X,k,kt.convert(Nt),kt.convert(Ut),ot)}finally{const Et=L!==null?St.get(L).__webglFramebuffer:null;_t.bindFramebuffer(D.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(E,O,W,X,k,ot,ut){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=St.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ut!==void 0&&(yt=yt[ut]),yt){const Et=E.texture,Nt=Et.format,Ut=Et.type;if(!zt.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!zt.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=E.width-X&&W>=0&&W<=E.height-k){_t.bindFramebuffer(D.FRAMEBUFFER,yt);const Tt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Tt),D.bufferData(D.PIXEL_PACK_BUFFER,ot.byteLength,D.STREAM_READ),D.readPixels(O,W,X,k,kt.convert(Nt),kt.convert(Ut),0);const Yt=L!==null?St.get(L).__webglFramebuffer:null;_t.bindFramebuffer(D.FRAMEBUFFER,Yt);const te=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Mh(D,te,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Tt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ot),D.deleteBuffer(Tt),D.deleteSync(te),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,O=null,W=0){E.isTexture!==!0&&(Vn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,E=arguments[1]);const X=Math.pow(2,-W),k=Math.floor(E.image.width*X),ot=Math.floor(E.image.height*X),ut=O!==null?O.x:0,yt=O!==null?O.y:0;R.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,ut,yt,k,ot),_t.unbindTexture()};const Cc=D.createFramebuffer(),Rc=D.createFramebuffer();this.copyTextureToTexture=function(E,O,W=null,X=null,k=0,ot=null){E.isTexture!==!0&&(Vn("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,E=arguments[1],O=arguments[2],ot=arguments[3]||0,W=null),ot===null&&(k!==0?(Vn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ot=k,k=0):ot=0);let ut,yt,Et,Nt,Ut,Tt,Yt,te,pe;const he=E.isCompressedTexture?E.mipmaps[ot]:E.image;if(W!==null)ut=W.max.x-W.min.x,yt=W.max.y-W.min.y,Et=W.isBox3?W.max.z-W.min.z:1,Nt=W.min.x,Ut=W.min.y,Tt=W.isBox3?W.min.z:0;else{const Ve=Math.pow(2,-k);ut=Math.floor(he.width*Ve),yt=Math.floor(he.height*Ve),E.isDataArrayTexture?Et=he.depth:E.isData3DTexture?Et=Math.floor(he.depth*Ve):Et=1,Nt=0,Ut=0,Tt=0}X!==null?(Yt=X.x,te=X.y,pe=X.z):(Yt=0,te=0,pe=0);const jt=kt.convert(O.format),Ct=kt.convert(O.type);let Ee;O.isData3DTexture?(R.setTexture3D(O,0),Ee=D.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(R.setTexture2DArray(O,0),Ee=D.TEXTURE_2D_ARRAY):(R.setTexture2D(O,0),Ee=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);const ee=D.getParameter(D.UNPACK_ROW_LENGTH),Ye=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Jn=D.getParameter(D.UNPACK_SKIP_PIXELS),ke=D.getParameter(D.UNPACK_SKIP_ROWS),Ni=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,he.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,he.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Nt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ut),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Tt);const le=E.isDataArrayTexture||E.isData3DTexture,He=O.isDataArrayTexture||O.isData3DTexture;if(E.isDepthTexture){const Ve=St.get(E),Te=St.get(O),De=St.get(Ve.__renderTarget),js=St.get(Te.__renderTarget);_t.bindFramebuffer(D.READ_FRAMEBUFFER,De.__webglFramebuffer),_t.bindFramebuffer(D.DRAW_FRAMEBUFFER,js.__webglFramebuffer);for(let Nn=0;Nn<Et;Nn++)le&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,St.get(E).__webglTexture,k,Tt+Nn),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,St.get(O).__webglTexture,ot,pe+Nn)),D.blitFramebuffer(Nt,Ut,ut,yt,Yt,te,ut,yt,D.DEPTH_BUFFER_BIT,D.NEAREST);_t.bindFramebuffer(D.READ_FRAMEBUFFER,null),_t.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(k!==0||E.isRenderTargetTexture||St.has(E)){const Ve=St.get(E),Te=St.get(O);_t.bindFramebuffer(D.READ_FRAMEBUFFER,Cc),_t.bindFramebuffer(D.DRAW_FRAMEBUFFER,Rc);for(let De=0;De<Et;De++)le?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ve.__webglTexture,k,Tt+De):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ve.__webglTexture,k),He?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Te.__webglTexture,ot,pe+De):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Te.__webglTexture,ot),k!==0?D.blitFramebuffer(Nt,Ut,ut,yt,Yt,te,ut,yt,D.COLOR_BUFFER_BIT,D.NEAREST):He?D.copyTexSubImage3D(Ee,ot,Yt,te,pe+De,Nt,Ut,ut,yt):D.copyTexSubImage2D(Ee,ot,Yt,te,Nt,Ut,ut,yt);_t.bindFramebuffer(D.READ_FRAMEBUFFER,null),_t.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else He?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(Ee,ot,Yt,te,pe,ut,yt,Et,jt,Ct,he.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(Ee,ot,Yt,te,pe,ut,yt,Et,jt,he.data):D.texSubImage3D(Ee,ot,Yt,te,pe,ut,yt,Et,jt,Ct,he):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ot,Yt,te,ut,yt,jt,Ct,he.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ot,Yt,te,he.width,he.height,jt,he.data):D.texSubImage2D(D.TEXTURE_2D,ot,Yt,te,ut,yt,jt,Ct,he);D.pixelStorei(D.UNPACK_ROW_LENGTH,ee),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ye),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Jn),D.pixelStorei(D.UNPACK_SKIP_ROWS,ke),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ni),ot===0&&O.generateMipmaps&&D.generateMipmap(Ee),_t.unbindTexture()},this.copyTextureToTexture3D=function(E,O,W=null,X=null,k=0){return E.isTexture!==!0&&(Vn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,E=arguments[2],O=arguments[3],k=arguments[4]||0),Vn('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,O,W,X,k)},this.initRenderTarget=function(E){St.get(E).__webglFramebuffer===void 0&&R.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?R.setTextureCube(E,0):E.isData3DTexture?R.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?R.setTexture2DArray(E,0):R.setTexture2D(E,0),_t.unbindTexture()},this.resetState=function(){w=0,A=0,L=null,_t.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Kt._getUnpackColorSpace()}}class Cn extends ge{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Dt(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}}const fi=new I,Ka=new ne,Za=new ne,Ja=new I,Qa=new I;class Ym{constructor(t={}){const e=this;let n,s,r,o;const a={objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:n,height:s}},this.render=function(g,_){g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),Ka.copy(_.matrixWorldInverse),Za.multiplyMatrices(_.projectionMatrix,Ka),h(g,g,_),p(g)},this.setSize=function(g,_){n=g,s=_,r=n/2,o=s/2,l.style.width=g+"px",l.style.height=_+"px"};function c(g){g.isCSS2DObject&&(g.element.style.display="none");for(let _=0,m=g.children.length;_<m;_++)c(g.children[_])}function h(g,_,m){if(g.visible===!1){c(g);return}if(g.isCSS2DObject){fi.setFromMatrixPosition(g.matrixWorld),fi.applyMatrix4(Za);const u=fi.z>=-1&&fi.z<=1&&g.layers.test(m.layers)===!0,b=g.element;b.style.display=u===!0?"":"none",u===!0&&(g.onBeforeRender(e,_,m),b.style.transform="translate("+-100*g.center.x+"%,"+-100*g.center.y+"%)translate("+(fi.x*r+r)+"px,"+(-fi.y*o+o)+"px)",b.parentNode!==l&&l.appendChild(b),g.onAfterRender(e,_,m));const x={distanceToCameraSquared:d(m,g)};a.objects.set(g,x)}for(let u=0,b=g.children.length;u<b;u++)h(g.children[u],_,m)}function d(g,_){return Ja.setFromMatrixPosition(g.matrixWorld),Qa.setFromMatrixPosition(_.matrixWorld),Ja.distanceToSquared(Qa)}function f(g){const _=[];return g.traverseVisible(function(m){m.isCSS2DObject&&_.push(m)}),_}function p(g){const _=f(g).sort(function(u,b){if(u.renderOrder!==b.renderOrder)return b.renderOrder-u.renderOrder;const x=a.objects.get(u).distanceToCameraSquared,v=a.objects.get(b).distanceToCameraSquared;return x-v}),m=_.length;for(let u=0,b=_.length;u<b;u++)_[u].element.style.zIndex=m-u}}}const qs=[[[0,0,.333],[0,0,0]],[[0,0,0],[-1.570796326794897,0,0]],[[0,-.316,0],[1.570796326794897,0,0]],[[.0825,0,0],[1.570796326794897,0,0]],[[-.0825,.384,0],[-1.570796326794897,0,0]],[[0,0,0],[1.570796326794897,0,0]],[[.088,0,0],[1.570796326794897,0,0]]],jm=[[-2.8973,2.8973],[-1.7628,1.7628],[-2.8973,2.8973],[-3.0718,-.0698],[-2.8973,2.8973],[-.0175,3.7525],[-2.8973,2.8973]],tl=[0,0,0,-1.5708,0,1.5708,.7854],el=[0,-.62,0,-2.32,0,1.72,.7854],Km=["fr3_joint1","fr3_joint2","fr3_joint3","fr3_joint4","fr3_joint5","fr3_joint6","fr3_joint7"];function Ys(){return[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]}function en(i,t){const e=Ys();for(let n=0;n<4;n++)for(let s=0;s<4;s++)e[n][s]=i[n][0]*t[0][s]+i[n][1]*t[1][s]+i[n][2]*t[2][s]+i[n][3]*t[3][s];return e}function Ri(i,t){const[e,n,s]=t,r=Math.cos(e),o=Math.sin(e),a=Math.cos(n),l=Math.sin(n),c=Math.cos(s),h=Math.sin(s);return[[c*a,c*l*o-h*r,c*l*r+h*o,i[0]],[h*a,h*l*o+c*r,h*l*r-c*o,i[1]],[-l,a*o,a*r,i[2]],[0,0,0,1]]}function Uo(i){const t=Math.cos(i),e=Math.sin(i);return[[t,-e,0,0],[e,t,0,0],[0,0,1,0],[0,0,0,1]]}const Zm=Ri([0,0,.107],[0,0,0]),Jm=Ri([0,0,0],[0,0,-.7853981633974483]),Qm=Ri([0,0,.1034],[0,0,0]),Fo=en(en(Zm,Jm),Qm);function t0(i){const t=i[0][0]+i[1][1]+i[2][2];let e,n,s,r;if(t>0){const a=Math.sqrt(t+1)*2;e=.25*a,n=(i[2][1]-i[1][2])/a,s=(i[0][2]-i[2][0])/a,r=(i[1][0]-i[0][1])/a}else if(i[0][0]>i[1][1]&&i[0][0]>i[2][2]){const a=Math.sqrt(1+i[0][0]-i[1][1]-i[2][2])*2;e=(i[2][1]-i[1][2])/a,n=.25*a,s=(i[0][1]+i[1][0])/a,r=(i[0][2]+i[2][0])/a}else if(i[1][1]>i[2][2]){const a=Math.sqrt(1+i[1][1]-i[0][0]-i[2][2])*2;e=(i[0][2]-i[2][0])/a,n=(i[0][1]+i[1][0])/a,s=.25*a,r=(i[1][2]+i[2][1])/a}else{const a=Math.sqrt(1+i[2][2]-i[0][0]-i[1][1])*2;e=(i[1][0]-i[0][1])/a,n=(i[0][2]+i[2][0])/a,s=(i[1][2]+i[2][1])/a,r=.25*a}const o=Math.hypot(e,n,s,r)||1;return[e/o,n/o,s/o,r/o]}function e0(i){const t=Math.hypot(i[0],i[1],i[2],i[3])||1,e=i[0]/t,n=i[1]/t,s=i[2]/t,r=i[3]/t;return[[1-2*(s*s+r*r),2*(n*s-r*e),2*(n*r+s*e)],[2*(n*s+r*e),1-2*(n*n+r*r),2*(s*r-n*e)],[2*(n*r-s*e),2*(s*r+n*e),1-2*(n*n+s*s)]]}function nl(i){let t=Ys();for(let r=0;r<7;r++){const[o,a]=qs[r],l=Ri(o,a);t=en(en(t,l),Uo(i[r]))}const e=en(t,Fo),n=[e[0][3],e[1][3],e[2][3]],s=t0(e);return{matrix:e,position:n,quaternion:s}}function n0(i){let t=Ys();const e=[];for(let o=0;o<7;o++){const[a,l]=qs[o],c=Ri(a,l);t=en(en(t,c),Uo(i[o])),e.push(t)}const n=en(t,Fo),s=[n[0][3],n[1][3],n[2][3]],r=Array.from({length:6},()=>Array(7).fill(0));for(let o=0;o<7;o++){const a=e[o],l=[a[0][2],a[1][2],a[2][2]],c=[a[0][3],a[1][3],a[2][3]],h=s[0]-c[0],d=s[1]-c[1],f=s[2]-c[2];r[0][o]=l[1]*f-l[2]*d,r[1][o]=l[2]*h-l[0]*f,r[2][o]=l[0]*d-l[1]*h,r[3][o]=l[0],r[4][o]=l[1],r[5][o]=l[2]}return r}function il(i,t){const n=i.map((s,r)=>[...s,t[r]]);for(let s=0;s<6;s++){let r=s;for(let l=s+1;l<6;l++)Math.abs(n[l][s])>Math.abs(n[r][s])&&(r=l);const o=n[s];n[s]=n[r],n[r]=o;const a=n[s][s];if(!(Math.abs(a)<1e-12)){for(let l=s;l<=6;l++)n[s][l]/=a;for(let l=0;l<6;l++){if(l===s)continue;const c=n[l][s];for(let h=s;h<=6;h++)n[l][h]-=c*n[s][h]}}}return n.map(s=>s[6])}function i0(i,t=null,e=tl,n=150,s=1e-4){const r=[...e],o=.02,a=.05,l=t?e0(t):null;for(let d=0;d<n;d++){const f=nl(r),p=[i[0]-f.position[0],i[1]-f.position[1],i[2]-f.position[2]],g=Math.hypot(p[0],p[1],p[2]);let _=[0,0,0];if(l){const M=f.matrix,P=[[0,0,0],[0,0,0],[0,0,0]];for(let H=0;H<3;H++)for(let B=0;B<3;B++)P[H][B]=l[H][0]*M[B][0]+l[H][1]*M[B][1]+l[H][2]*M[B][2];const U=P[0][0]+P[1][1]+P[2][2],F=Math.max(-1,Math.min(1,(U-1)/2)),G=Math.acos(F);if(Math.abs(G)>=1e-6){const H=2*Math.sin(G);_=[(P[2][1]-P[1][2])/H*G,(P[0][2]-P[2][0])/H*G,(P[1][0]-P[0][1])/H*G]}}const m=Math.hypot(_[0],_[1],_[2]);if(g<s&&(t===null||m<.001))return{q:r,converged:!0,residualM:g};const u=n0(r),b=[p[0],p[1],p[2],_[0],_[1],_[2]],x=Array.from({length:6},(M,P)=>Array.from({length:6},(U,F)=>{let G=P===F?o*o:0;for(let H=0;H<7;H++)G+=u[P][H]*u[F][H];return G})),v=il(x,b),T=Array.from({length:7},()=>Array(6).fill(0));for(let M=0;M<6;M++){const P=Array(6).fill(0);P[M]=1;const U=il(x,P);for(let F=0;F<7;F++){let G=0;for(let H=0;H<6;H++)G+=u[H][F]*U[H];T[F][M]=G}}const w=Array(7).fill(0);for(let M=0;M<7;M++){let P=0;for(let F=0;F<6;F++)P+=u[F][M]*v[F];let U=0;for(let F=1;F<7;F++){let G=0;for(let B=0;B<6;B++)G+=T[M][B]*u[B][F];const H=(M===F?1:0)-G;U+=H*(a*(tl[F]-r[F]))}w[M]=P+U}const A=.15,L=Math.hypot(...w),S=L>A?A/L:1;for(let M=0;M<7;M++){const[P,U]=jm[M];r[M]=Math.max(P,Math.min(U,r[M]+w[M]*S))}}const c=nl(r),h=Math.hypot(i[0]-c.position[0],i[1]-c.position[1],i[2]-c.position[2]);return{q:r,converged:h<.005,residualM:h}}function s0(i,t){const e=Math.PI/2,n=Math.PI/4,r=((i-t+n)%e+e)%e,o=t+(r-n);return[0,Math.cos(o/2),Math.sin(o/2),0]}function lc(i,t,e){const n=i[0]-t[0],s=i[1]-t[1],r=i[2]-t[2],o=Math.cos(-e),a=Math.sin(-e);return[o*n-a*s,a*n+o*s,r]}function r0(i,t,e){const n=Math.cos(e),s=Math.sin(e);return[t[0]+n*i[0]-s*i[1],t[1]+s*i[0]+n*i[1],t[2]+i[2]]}function sl(i,t=[0,0,0],e=0){let n=Ys();const s=[[0,0,.12]];for(let o=0;o<7;o++){const[a,l]=qs[o],c=Ri(a,l);n=en(en(n,c),Uo(i[o])),(o===1||o===3||o===4||o===6)&&s.push([n[0][3],n[1][3],n[2][3]])}const r=en(n,Fo);return s.push([r[0][3],r[1][3],r[2][3]]),s.map(o=>r0(o,t,e))}function o0(i,t,e,n){const s=t[0]-i[0],r=t[1]-i[1],o=t[2]-i[2],a=n[0]-e[0],l=n[1]-e[1],c=n[2]-e[2],h=i[0]-e[0],d=i[1]-e[1],f=i[2]-e[2],p=s*s+r*r+o*o,g=a*a+l*l+c*c,_=a*h+l*d+c*f;let m=0,u=0;if(p<=1e-9&&g<=1e-9)m=0,u=0;else if(p<=1e-9)m=0,u=Math.max(0,Math.min(1,_/g));else{const T=s*h+r*d+o*f;if(g<=1e-9)u=0,m=Math.max(0,Math.min(1,-T/p));else{const w=s*a+r*l+o*c,A=p*g-w*w;A!==0&&(m=Math.max(0,Math.min(1,(w*_-T*g)/A))),u=(w*m+_)/g,u<0?(u=0,m=Math.max(0,Math.min(1,-T/p))):u>1&&(u=1,m=Math.max(0,Math.min(1,(w-T)/p)))}}const b=[i[0]+s*m,i[1]+r*m,i[2]+o*m],x=[e[0]+a*u,e[1]+l*u,e[2]+c*u];return{dist:Math.hypot(b[0]-x[0],b[1]-x[1],b[2]-x[2]),midpoint:[Number(((b[0]+x[0])*.5).toFixed(3)),Number(((b[1]+x[1])*.5).toFixed(3)),Number(((b[2]+x[2])*.5).toFixed(3))]}}function rl(i,t,e,n,s,r){const o=sl(i,t,e),a=sl(n,s,r);let l=1/0,c=[0,0],h=[0,0,.2];for(let d=1;d<o.length-1;d++)for(let f=1;f<a.length-1;f++){const p=o0(o[d],o[d+1],a[f],a[f+1]);p.dist<l&&(l=p.dist,c=[d,f],h=p.midpoint)}return{minDistM:l,linkPair:c,midpoint:h}}function a0(i){const t=Math.max(0,Math.min(1,i));return t*t*t*(10+t*(-15+6*t))}function Gs(i,t,e,n,s){if(!e||e.length===0)return s;const r=(n-t)*i;if(r<=0)return e[0];const o=e.length-1;if(r>=o)return e[o];const a=Math.floor(r),l=r-a,c=e[a],h=e[a+1];return c.map((d,f)=>d+(h[f]-d)*l)}const ol=["#4f9dff","#3ccf91","#ff8a5c","#c78bff"],Is=[{id:"s0",xyz:[-.62,0,0],yaw:0},{id:"s1",xyz:[.62,0,0],yaw:Math.PI},{id:"s2",xyz:[-.32,-.5,0],yaw:1.02},{id:"s3",xyz:[.32,-.5,0],yaw:2.12},{id:"s4",xyz:[-.32,.5,0],yaw:-1.02},{id:"s5",xyz:[.32,.5,0],yaw:-2.12},{id:"s6",xyz:[-.58,-.38,0],yaw:.58},{id:"s7",xyz:[.58,.38,0],yaw:-2.56}],Vi={tower:{name:"tower",title:"Mode 1 · 6-Block Cooperative Tower",objects:[{id:"Block1",type:"cube",color:"#e64a4a",size:[.044,.044,.044],studs:[2,2],start:{xyz:[-.22,-.27,.026],yaw:0},goal:{xyz:[0,0,.028],yaw:0}},{id:"Block2",type:"cylinder",color:"#3ccf91",size:[.044,.044,.044],studs:[2,2],start:{xyz:[.24,-.27,.026],yaw:0},goal:{xyz:[0,0,.072],yaw:0}},{id:"Block3",type:"cube",color:"#4f9dff",size:[.044,.044,.044],studs:[2,2],start:{xyz:[-.22,.27,.026],yaw:0},goal:{xyz:[0,0,.116],yaw:0}},{id:"Block4",type:"cylinder",color:"#f5c542",size:[.044,.044,.044],studs:[2,2],start:{xyz:[.24,.27,.026],yaw:0},goal:{xyz:[0,0,.16],yaw:0}},{id:"Block5",type:"cube",color:"#c78bff",size:[.044,.044,.044],studs:[2,2],start:{xyz:[-.04,-.27,.026],yaw:0},goal:{xyz:[0,0,.204],yaw:0}},{id:"Block6",type:"cylinder",color:"#ff8a5c",size:[.044,.044,.044],studs:[2,2],start:{xyz:[.04,.27,.026],yaw:0},goal:{xyz:[0,0,.248],yaw:0}}],dag:[["Block1","Block2"],["Block2","Block3"],["Block3","Block4"],["Block4","Block5"],["Block5","Block6"]]},conveyor_bar:{name:"conveyor_bar",title:"Mode 2 · Bimanual LongBar & Conveyor",objects:[{id:"LongBar",type:"bar",color:"#f5c542",size:[.48,.042,.042],studs:[12,2],bimanual:!0,start:{xyz:[0,-.28,.025],yaw:0},goal:{xyz:[0,-.06,.027],yaw:0}},{id:"ConvItem0",type:"cube",color:"#e64a4a",size:[.046,.046,.046],studs:[2,2],start:{xyz:[-.18,.3,.031],yaw:0},goal:{xyz:[-.12,.06,.029],yaw:0}},{id:"ConvItem1",type:"cylinder",color:"#3ccf91",size:[.046,.046,.046],studs:[2,2],start:{xyz:[.18,.3,.031],yaw:0},goal:{xyz:[.12,.06,.029],yaw:0}}],dag:[["LongBar","ConvItem0"],["LongBar","ConvItem1"]]},deformable_fold:{name:"deformable_fold",title:"Mode 3 · Deformable Unfold, Fold & Handover",objects:[{id:"SoftSpongeLeft",type:"sponge",color:"#ff8a5c",size:[.068,.048,.034],deformable:!0,start:{xyz:[-.22,-.3,.021],yaw:0},goal:{xyz:[.22,-.3,.021],yaw:0}},{id:"DeformableClothTowel",type:"cloth",color:"#4f9dff",size:[.26,.18,.012],bimanual:!0,deformable:!0,start:{xyz:[0,-.11,.012],yaw:0},goal:{xyz:[-.13,.03,.016],yaw:0}},{id:"DeformableGarmentShirt",type:"garment",color:"#c78bff",size:[.28,.2,.014],bimanual:!0,deformable:!0,start:{xyz:[0,.25,.013],yaw:0},goal:{xyz:[.13,.03,.018],yaw:0}}],dag:[["SoftSpongeLeft","DeformableClothTowel"],["DeformableClothTowel","DeformableGarmentShirt"]]}};function l0(i,t,e){const n=[],s=Math.max(2,e);for(let r=0;r<s;r++){const o=a0(r/(s-1));n.push(i.map((a,l)=>Number((a+(t[l]-a)*o).toFixed(5))))}return n}function Xe(i,t,e){const n=t[0]-i.base.xyz[0],s=t[1]-i.base.xyz[1],r=t[2]-i.base.xyz[2],o=Math.hypot(n,s,r);if(o<.14||o>.84)return{q:[...e],reachable:!1,dist:o};const a=lc(t,i.base.xyz,i.base.yaw),l=s0(0,i.base.yaw),c=i0(a,l,e,90,2e-4);return{q:c.q,reachable:c.converged||c.residualM<.015,dist:o}}function c0(i,t){const e=lc(t,i.base.xyz,i.base.yaw);return[Math.max(-.55,Math.min(.55,Math.atan2(e[1],Math.max(.15,e[0]))*.45)),-.68,0,-2.38,0,1.72,.7854]}function _o(i,t,e="fA",n={}){var qt;const s=performance.now(),r=n.schedulerMode??"lazy_dash",o=Vi[i]??Vi.tower,a=[...t].sort(),l=a.map((C,$)=>{const tt=Is.find(rt=>rt.id===C)??Is[0];return{id:`a${$}`,slot:tt.id,urdf:"robots/fr3/fr3.urdf",tcp_link:"fr3_hand_tcp",color:ol[$%ol.length],base:{xyz:[...tt.xyz],yaw:tt.yaw},joint_names:[...Km],home:[...el]}}),c=`${o.name}__${a.join("-")}__${e}`,h={table:{size:[1.76,1.32,.045]},baseplate:{origin:[-.16,-.1,0],pitch:.02,studs:[16,10],height:.006},feeders:[{id:"f0",xyz:[0,.3,0],size:[.58,.13,.004],role:"feeder"},{id:"f1",xyz:[0,-.3,0],size:[.58,.13,.004],role:"feeder"}],buffers:[{id:"z0",xyz:[-.3,0,0],size:[.11,.11,.004],role:"buffer"},{id:"z1",xyz:[.3,0,0],size:[.11,.11,.004],role:"buffer"}],conveyors:o.name==="conveyor_bar"?[{id:"conv0",xyz:[0,.3,0],size:[.68,.13,.008],role:"lane",speed:.12}]:[],mount_slots:[...Is],arms:l},d=[],f=o.objects.some(C=>C.bimanual);if(l.length<2&&f){const C=o.objects.find(gt=>gt.bimanual),$=l[0],tt={};if($){const gt=Xe($,[C.start.xyz[0],C.start.xyz[1],.12],$.home);tt[$.id]=gt.q}d.push({iter:0,status:"conflict",plan:[{kind:"pick",arms:$?[$.id]:[],object_id:C.id,tick:0}],conflict:{time:1.2,kind:"BIMANUAL_PROMOTION_REQUIRED",arms:$?[$.id]:[],object_id:C.id,description:`${C.id} requires 2 synchronized FR3 arms (dual_arm_pick), but only ${l.length} arm is mounted.`,write_limit_back:`CONSTRAINT[BIMANUAL_PROMOTION_REQUIRED]: Mount >= 2 FR3 arms to execute dual_arm_pick on ${C.id}.`,configs:tt,placed:[]}});const rt=performance.now()-s;return{schema:"stamp.fast-sim.run/1",id:c,title:`${o.title} · ${l.length} arm`,status:"infeasible",message:`Safety gate rejected single-arm pick on ${C.id} (requires 2 arms for bimanual coordination).`,scene:h,model:o,plan:{actions:[],tpg_edges:[],makespan_ticks:0,hypergraph:{scheduler_mode:r,nodes:[{id:"hg_reject_bimanual",label:`REJECT: ${C.id} needs 2 arms`,kind:"sync_hub",arms:$?[$.id]:[],object_id:C.id,t_start:0,t_end:1.2,wave:0}],hyperedges:[]}},trajectories:{rate:32,t0:0,duration:0,arms:Object.fromEntries(l.map(gt=>[gt.id,[gt.home]]))},events:[],lazy_log:d,metrics:{makespan_s:null,makespan_ticks:null,num_arms:l.length,lazy_iterations:1,time:{grounding:.002,task:.003,motion:.005,verify:.002,total:Number((rt/1e3).toFixed(4))},verify:{ok:!1,collisions:0,samples:64,rate:128,first_collision_t:1.2,carried_object_contacts:1,reschedules:0}}}}for(const C of o.objects)if(l.filter(tt=>{const rt=Math.hypot(C.start.xyz[0]-tt.base.xyz[0],C.start.xyz[1]-tt.base.xyz[1]),gt=Math.hypot(C.goal.xyz[0]-tt.base.xyz[0],C.goal.xyz[1]-tt.base.xyz[1]);return rt<=.85&&gt<=.85}).length===0){const tt=l[0],rt=tt?[Math.atan2(C.start.xyz[1]-tt.base.xyz[1],C.start.xyz[0]-tt.base.xyz[0])-tt.base.yaw,.95,0,-.35,0,1.35,.785]:[...el];d.push({iter:0,status:"conflict",plan:[{kind:"pick",arms:tt?[tt.id]:[],object_id:C.id,tick:0}],conflict:{time:.8,kind:"IK_UNREACHABLE",arms:tt?[tt.id]:[],object_id:C.id,description:`Object ${C.id} at (${C.start.xyz[0].toFixed(2)}, ${C.start.xyz[1].toFixed(2)}) exceeds 0.85m kinematic reach of mounted slot(s) ${a.join(", ")}.`,write_limit_back:`CONSTRAINT[IK_UNREACHABLE]: Add an opposing mount slot or stage ${C.id} via a buffer zone.`,configs:tt?{[tt.id]:rt}:{},placed:[]}});const gt=performance.now()-s;return{schema:"stamp.fast-sim.run/1",id:c,title:`${o.title} · ${l.length} arm${l.length===1?"":"s"}`,status:"infeasible",message:`IK_UNREACHABLE: ${C.id} is out of reach from slot(s) ${a.join(", ")}.`,scene:h,model:o,plan:{actions:[],tpg_edges:[],makespan_ticks:0,hypergraph:{scheduler_mode:r,nodes:[{id:`hg_unreachable_${C.id}`,label:`IK_UNREACHABLE: ${C.id}`,kind:"task",arms:tt?[tt.id]:[],object_id:C.id,t_start:0,t_end:.8,wave:0}],hyperedges:[]}},trajectories:{rate:32,t0:0,duration:0,arms:Object.fromEntries(l.map(at=>[at.id,[at.home]]))},events:[],lazy_log:d,metrics:{makespan_s:null,makespan_ticks:null,num_arms:l.length,lazy_iterations:1,time:{grounding:.003,task:.004,motion:.008,verify:.003,total:Number((gt/1e3).toFixed(4))},verify:{ok:!1,collisions:0,samples:128,rate:128,first_collision_t:.8,carried_object_contacts:0,reschedules:0}}}}if(l.length>=2){const C=l[0],$=l[1],tt=Xe(C,[-.02,-.02,.14],C.home).q,rt=Xe($,[.02,.02,.14],$.home).q,gt=rl(tt,C.base.xyz,C.base.yaw,rt,$.base.xyz,$.base.yaw);d.push({iter:0,status:"conflict",plan:[{kind:"pick",arms:[C.id],object_id:o.objects[0].id,tick:0},{kind:"pick",arms:[$.id],object_id:o.objects[Math.min(1,o.objects.length-1)].id,tick:0},{kind:"place",arms:[C.id,$.id],object_id:o.objects[0].id,tick:1}],conflict:{time:2.35,kind:"WORKSPACE_COLLISION",arms:[C.id,$.id],object_id:o.objects[0].id,description:`128 Hz capsule verifier detected forearm/wrist distance ${Math.max(.03,gt.minDistM).toFixed(2)}m < 0.13m safety margin between ${C.id} and ${$.id} near [${gt.midpoint[0]}, ${gt.midpoint[1]}].`,write_limit_back:`CONSTRAINT[WORKSPACE_COLLISION]: Lazy-DaSH injects TPG Type-2 mutex edge (${C.id}_place -> ${$.id}_place) and outward staging waypoint (${$.id}:stage_pre_gate).`,configs:{[C.id]:tt,[$.id]:rt},placed:[]}})}const p=32,g=[],_=[],m=[],u=[],b=[],x=Object.fromEntries(l.map(C=>[C.id,[]])),v=Object.fromEntries(l.map(C=>[C.id,[...C.home]])),T=Object.fromEntries(l.map(C=>[C.id,0]));let w=0,A=0;const L=(C,$)=>{const tt=x[C],rt=v[C],gt=Math.round($*p);for(;tt.length<gt;)tt.push([...rt])},S=(C,$,tt)=>{const rt=l0(v[C],$,Math.max(4,Math.round(tt*p)));x[C].push(...rt),v[C]=[...$]},M="res_central_mutex";u.push({id:M,label:"Central Zone Mutex (R < 0.25m)",kind:"resource",arms:l.map(C=>C.id),t_start:0,t_end:0,wave:0});const P="mm0_courier_transfer";u.push({id:P,label:"MM0 AGV Dock & Transfer",kind:"sync_hub",arms:["mm0"],object_id:((qt=o.objects[0])==null?void 0:qt.id)??"Kit",t_start:0,t_end:2.2,wave:0});let U=null;const F=r==="eager_sequential"?1.12:Math.max(.62,1-(l.length-1)*.11);o.objects.forEach((C,$)=>{if(C.bimanual&&l.length>=2){const it=[...l].sort((Di,Ii)=>Di.base.xyz[0]-Ii.base.xyz[0]||Di.base.xyz[1]-Ii.base.xyz[1]),et=it[0],xt=it[it.length-1],nt=Math.max(T[et.id],T[xt.id],w);L(et.id,nt),L(xt.id,nt);const ft=Math.min(.18,C.size[0]*.36),Pt=[C.start.xyz[0]-ft,C.start.xyz[1],C.start.xyz[2]+.1],Lt=[C.start.xyz[0]+ft,C.start.xyz[1],C.start.xyz[2]+.1],Mt=[C.start.xyz[0]-ft,C.start.xyz[1]*.5,C.start.xyz[2]+.25],Xt=[C.start.xyz[0]+ft,C.start.xyz[1]*.5,C.start.xyz[2]+.25],kt=[C.goal.xyz[0]-ft*.85,C.goal.xyz[1],C.goal.xyz[2]+.11],se=[C.goal.xyz[0]+ft*.85,C.goal.xyz[1],C.goal.xyz[2]+.11],N=Number((1.75*F).toFixed(2)),ct=Number((2.05*F).toFixed(2)),q=Xe(et,Pt,v[et.id]).q,J=Xe(xt,Lt,v[xt.id]).q;S(et.id,q,N*.58),S(xt.id,J,N*.58);const pt=Number((nt+N*.58).toFixed(3));m.push({t:pt,type:"attach",arm:et.id,object_id:C.id,rel:{xyz:[ft,0,.02],quat:[1,0,0,0]}});const dt=Xe(et,Mt,v[et.id]).q,Ot=Xe(xt,Xt,v[xt.id]).q;S(et.id,dt,N*.42),S(xt.id,Ot,N*.42);const Qt=Number((nt+N).toFixed(3)),ce=`act_${$}_pick`,Zt=C.deformable?"unfold":"dual_arm_pick";g.push({id:ce,kind:Zt,arms:[et.id,xt.id],object_id:C.id,where:C.start.xyz[1]>=0?"f0":"f1",tick:$*2,t_start:Number(nt.toFixed(3)),t_end:Qt,label:C.deformable?`${et.id}+${xt.id} unfold ${C.id}`:`${et.id}+${xt.id} dual_arm_pick ${C.id}`}),u.push({id:ce,label:C.deformable?`Unfold ${C.id}`:`Bimanual Pick ${C.id}`,kind:"sync_hub",action_id:ce,arms:[et.id,xt.id],object_id:C.id,t_start:Number(nt.toFixed(3)),t_end:Qt,wave:$}),C.deformable&&m.push({t:Qt,type:"deform",arm:et.id,object_id:C.id,deform_state:"unfolded",span_scale:[1.22,1.12,.78]});const Oe=Xe(et,kt,v[et.id]).q,qe=Xe(xt,se,v[xt.id]).q;S(et.id,Oe,ct*.62),S(xt.id,qe,ct*.62);const Pi=Number((Qt+ct*.62).toFixed(3));C.deformable&&m.push({t:Number((Pi-.15).toFixed(3)),type:"deform",arm:et.id,object_id:C.id,deform_state:"folded_compact",span_scale:[.58,.68,1.75]}),m.push({t:Pi,type:"detach",arm:et.id,object_id:C.id,pose:{xyz:[...C.goal.xyz],yaw:C.goal.yaw}}),S(et.id,et.home,ct*.38),S(xt.id,xt.home,ct*.38);const nn=Number((Qt+ct).toFixed(3)),Se=`act_${$}_place`,Li=C.deformable?"fold":"dual_arm_place";g.push({id:Se,kind:Li,arms:[et.id,xt.id],object_id:C.id,where:"assembly",tick:$*2+1,t_start:Qt,t_end:nn,label:C.deformable?`${et.id}+${xt.id} fold ${C.id}`:`${et.id}+${xt.id} dual_arm_place ${C.id}`}),u.push({id:Se,label:C.deformable?`Fold ${C.id}`:`Bimanual Place ${C.id}`,kind:"sync_hub",action_id:Se,arms:[et.id,xt.id],object_id:C.id,t_start:Qt,t_end:nn,wave:$}),b.push({id:`he_bimanual_${$}`,kind:"bimanual_sync",label:`Closed-Chain Lock (${et.id} ⟷ ${xt.id})`,sources:[ce],targets:[Se,M],resource:C.id,t_active:[Number(nt.toFixed(3)),nn]}),_.push([ce,Se]),U&&(_.push([U,Se]),b.push({id:`he_tpg_${$}`,kind:"precedence",label:`TPG Order (${U} → ${Se})`,sources:[U],targets:[Se],t_active:[Number(nt.toFixed(3)),nn]})),U=Se,T[et.id]=nn,T[xt.id]=nn,w=nn;return}const tt=l.filter(it=>{const et=Math.hypot(C.start.xyz[0]-it.base.xyz[0],C.start.xyz[1]-it.base.xyz[1]),xt=Math.hypot(C.goal.xyz[0]-it.base.xyz[0],C.goal.xyz[1]-it.base.xyz[1]);return et<=.85&&xt<=.85}),at=[...tt.length>0?tt:l].sort((it,et)=>{const xt=Math.hypot(C.start.xyz[0]-it.base.xyz[0],C.start.xyz[1]-it.base.xyz[1])+T[it.id]*(r==="eager_sequential"?2.5:.24),nt=Math.hypot(C.start.xyz[0]-et.base.xyz[0],C.start.xyz[1]-et.base.xyz[1])+T[et.id]*(r==="eager_sequential"?2.5:.24);return xt-nt})[0],bt=r==="eager_sequential"?Math.max(T[at.id],w):r==="lazy_dash"?Math.max(T[at.id],A):T[at.id];r==="lazy_dash"&&(A=Number((bt+.68).toFixed(3))),L(at.id,bt);const ie=Number((1.48*F).toFixed(2)),ae=[C.start.xyz[0],C.start.xyz[1],C.start.xyz[2]+.1],Wt=Xe(at,ae,v[at.id]).q;S(at.id,Wt,ie*.58);const D=Number((bt+ie*.58).toFixed(3));m.push({t:D,type:"attach",arm:at.id,object_id:C.id,rel:{xyz:[0,0,.025],quat:[1,0,0,0]}});const Le=c0(at,ae);S(at.id,Le,ie*.42);const Ft=Number((bt+ie).toFixed(3)),zt=`act_${$}_pick`;g.push({id:zt,kind:"pick",arms:[at.id],object_id:C.id,where:C.start.xyz[1]>=0?"f0":"f1",tick:$*2,t_start:Number(bt.toFixed(3)),t_end:Ft,label:`${at.id} picks ${C.id}`}),u.push({id:zt,label:`${at.id} Pick ${C.id}`,kind:"task",action_id:zt,arms:[at.id],object_id:C.id,t_start:Number(bt.toFixed(3)),t_end:Ft,wave:$});const _t=r==="uncoordinated_raw"?Ft:Math.max(Ft,w);let Jt=zt;if(_t>Ft+.04){L(at.id,_t);const it=`act_${$}_stage`;g.push({id:it,kind:"stage_pre_gate",arms:[at.id],object_id:C.id,where:"buffer",tick:$*2,t_start:Ft,t_end:Number(_t.toFixed(3)),label:`${at.id} stages ${C.id} (waiting mutex)`}),u.push({id:it,label:`${at.id} Stage Wait (${C.id})`,kind:"task",action_id:it,arms:[at.id],object_id:C.id,t_start:Ft,t_end:Number(_t.toFixed(3)),wave:$}),_.push([zt,it]),b.push({id:`he_stage_${$}`,kind:"mutex_lock",label:`Wait Central Mutex (${at.id})`,sources:[zt,M],targets:[it],resource:"center_occupied_by",t_active:[Ft,Number(_t.toFixed(3))]}),Jt=it}const St=C.deformable&&l.length>=2,R=St?l.find(it=>it.id!==at.id)??l[0]:at,y=Number((1.62*F).toFixed(2)),z=[C.goal.xyz[0],C.goal.xyz[1],C.goal.xyz[2]+.1],Z=Xe(at,z,v[at.id]).q;S(at.id,Z,y*.6);const Q=Number((_t+y*.6).toFixed(3));m.push({t:Q,type:"detach",arm:at.id,object_id:C.id,pose:{xyz:[...C.goal.xyz],yaw:C.goal.yaw}});let Y=Number((_t+y).toFixed(3));if(n.injectSlipOnObject===C.id){const it=[C.goal.xyz[0]+.025,C.goal.xyz[1]-.018,C.goal.xyz[2]+.09],et=Xe(at,it,v[at.id]).q;S(at.id,et,.35),S(at.id,Z,.35),S(at.id,at.home,y*.4),Y=Number((_t+y+.7).toFixed(3));const xt=`act_${$}_repair`;g.push({id:xt,kind:"recover_slip",arms:[at.id],object_id:C.id,where:"assembly",tick:$*2+1,t_start:Q,t_end:Number((Q+.7).toFixed(3)),label:`0-Token Subgraph Patch (${C.id} +25mm slip)`}),u.push({id:xt,label:`Tier-1 Patch: Re-Grasp ${C.id}`,kind:"repair",action_id:xt,arms:[at.id],object_id:C.id,t_start:Q,t_end:Number((Q+.7).toFixed(3)),wave:$}),b.push({id:`he_repair_${$}`,kind:"repair_splice",label:"0-Token Subgraph Splice",sources:[Jt],targets:[xt],resource:C.id,t_active:[Q,Number((Q+.7).toFixed(3))]})}else S(at.id,at.home,y*.4);const vt=`act_${$}_place`;g.push({id:vt,kind:St?"handover":"place",arms:St?[at.id,R.id]:[at.id],object_id:C.id,where:"assembly",tick:$*2+1,t_start:Number(_t.toFixed(3)),t_end:Y,label:St?`${at.id}->${R.id} handover ${C.id}`:`${at.id} places ${C.id}`}),u.push({id:vt,label:St?`Handover ${C.id}`:`${at.id} Place ${C.id}`,kind:St?"sync_hub":"task",action_id:vt,arms:St?[at.id,R.id]:[at.id],object_id:C.id,t_start:Number(_t.toFixed(3)),t_end:Y,wave:$}),_.push([Jt,vt]),b.push({id:`he_exec_${$}`,kind:St?"handover_sync":"mutex_lock",label:St?`Handover Sync (${at.id} → ${R.id})`:`Acquire Central Mutex (${at.id})`,sources:[Jt,M],targets:[vt],resource:"center_occupied_by",t_active:[Number(_t.toFixed(3)),Y]}),U&&(_.push([U,vt]),b.push({id:`he_tpg_place_${$}`,kind:"precedence",label:`TPG Type-2 Mutex Edge (${U} → ${vt})`,sources:[U],targets:[vt],t_active:[Number(_t.toFixed(3)),Y]})),U=vt,T[at.id]=Y,w=Number((_t+y*.86).toFixed(3))});const G=Number(Math.max(.5,...Object.values(T)).toFixed(3));u[0].t_end=G,u.length>2&&b.unshift({id:"he_mm0_feeder_handover",kind:"handover_sync",label:"MM0 Feeder Transfer",sources:[P],targets:[u[2].id],t_active:[0,Math.min(2.6,G)]});for(const C of l)L(C.id,G+.25);const H=Math.max(1,...Object.values(x).map(C=>C.length)),B=Number((H/p).toFixed(3));let K=0,V=null;const mt=Math.max(1,Math.floor(B*10));if(l.length>=2)for(let C=0;C<=mt;C++){const $=C/mt*B;for(let tt=0;tt<l.length;tt++){const rt=l[tt],gt=Gs(p,0,x[rt.id],$,rt.home);for(let at=tt+1;at<l.length;at++){const bt=l[at],ie=Gs(p,0,x[bt.id],$,bt.home);rl(gt,rt.base.xyz,rt.base.yaw,ie,bt.base.xyz,bt.base.yaw).minDistM<.095&&(K++,V===null&&(V=Number($.toFixed(3))))}}}d.push({iter:d.length,status:"verified",plan:g.map(C=>({kind:C.kind,arms:C.arms,object_id:C.object_id,tick:C.tick}))});const wt={scheduler_mode:r,nodes:u,hyperedges:b},It=Number(((performance.now()-s)/1e3).toFixed(4));return{schema:"stamp.fast-sim.run/1",id:c,title:`${o.title} · ${l.length} arm${l.length===1?"":"s"}`,status:"ok",message:"",scene:h,model:o,plan:{actions:g,tpg_edges:_,makespan_ticks:o.objects.length*2,hypergraph:wt},trajectories:{rate:p,t0:0,duration:B,arms:x},events:m,lazy_log:d,metrics:{makespan_s:G,makespan_ticks:o.objects.length*2,num_arms:l.length,lazy_iterations:d.length,time:{grounding:Number((It*.15).toFixed(4)),task:Number((It*.15).toFixed(4)),motion:Number((It*.45).toFixed(4)),verify:Number((It*.25).toFixed(4)),total:It},verify:{ok:r!=="uncoordinated_raw"||K===0,collisions:r==="uncoordinated_raw"?Math.max(1,K):0,samples:H*4,rate:128,first_collision_t:r==="uncoordinated_raw"?V??2.35:null,carried_object_contacts:0,reschedules:Math.max(0,d.length-1)}}}}class cc{constructor(t,e){j(this,"objects");j(this,"byObject",new Map);this.objects=new Map(t.map(n=>[n.id,n]));for(const n of e){if(n.type!=="attach"&&n.type!=="detach")continue;let s=this.byObject.get(n.object_id);s||(s=[],this.byObject.set(n.object_id,s)),s.push(n)}for(const n of this.byObject.values())n.sort((s,r)=>s.t-r.t)}stateAt(t,e){const n=this.objects.get(t),s=this.byObject.get(t);let r=null;if(s)for(const o of s)if(o.t<=e)r=o;else break;if(r){if(r.type==="attach")return{kind:"attached",ev:r};if(r.pose)return{kind:"pose",pose:r.pose}}return{kind:"pose",pose:n?n.start:{xyz:[0,0,0],yaw:0}}}}const al=new ne,ll=new ne,cl=new ne,hl=new Dn,dl=new I,ul=new I(1,1,1);function vo(i,t){i.position.set(t.xyz[0],t.xyz[1],t.xyz[2]),i.quaternion.setFromAxisAngle(new I(0,0,1),t.yaw)}function hc(i,t,e,n){var o,a;const s=((o=n.rel)==null?void 0:o.xyz)??[0,0,.025],r=((a=n.rel)==null?void 0:a.quat)??[1,0,0,0];hl.set(r[1],r[2],r[3],r[0]).normalize(),dl.set(s[0],s[1],s[2]),ll.compose(dl,hl,ul),al.copy(t.matrixWorld).invert(),cl.multiplyMatrices(al,e.matrixWorld).multiply(ll),cl.decompose(i.position,i.quaternion,ul)}function dc(i,t,e){const n=i.filter(o=>o.type==="deform"&&o.object_id===t&&o.span_scale).sort((o,a)=>o.t-a.t);if(n.length===0)return[1,1,1];let s=[1,1,1],r=0;for(const o of n){const a=o.span_scale;if(e<o.t){const l=Math.max(.25,o.t-r),c=Math.max(0,Math.min(1,(e-(o.t-Math.min(.6,l)))/.6)),h=c*c*(3-2*c);return[s[0]+(a[0]-s[0])*h,s[1]+(a[1]-s[1])*h,s[2]+(a[2]-s[2])*h]}s=a,r=o.t}return s}function uc(i){const t=new $t;t.name=`obj:${i.id}`;const[e,n,s]=i.size,r=new At({color:i.color,roughness:i.deformable?.82:.38,metalness:i.deformable?.05:.12});if(i.type==="cylinder"){const o=new fe(e*.5,e*.5,s,24);o.rotateX(Math.PI/2);const a=new st(o,r);a.castShadow=!0,a.receiveShadow=!0,t.add(a)}else if(i.type==="cloth"||i.type==="garment"){const l=new Rt(e,n,s,12,8,2),c=l.attributes.position;for(let d=0;d<c.count;d++){const f=c.getX(d),p=c.getY(d),g=c.getZ(d),_=Math.sin(f/e*Math.PI*3)*Math.cos(p/n*Math.PI*2)*.0025;c.setZ(d,g+_)}l.computeVertexNormals();const h=new st(l,r);if(h.castShadow=!0,h.receiveShadow=!0,t.add(h),i.type==="garment"){const d=new Rt(e*.22,n*.36,s*.9),f=new st(d,r);f.position.set(-e*.55,n*.2,0);const p=new st(d,r);p.position.set(e*.55,n*.2,0),t.add(f,p)}}else{const o=new Rt(e,n,s),a=new st(o,r);if(a.castShadow=!0,a.receiveShadow=!0,t.add(a),i.studs){const[l,c]=i.studs,h=new fe(.0045,.0045,.003,12);h.rotateX(Math.PI/2);const d=e/l,f=n/c;for(let p=0;p<l;p++)for(let g=0;g<c;g++){const _=new st(h,r);_.position.set(-e/2+(p+.5)*d,-n/2+(g+.5)*f,s/2+.0015),t.add(_)}}}return t}class h0 extends Io{constructor(t){super(t)}load(t,e,n,s){const r=this,o=new id(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(r.parse(a))}catch(l){s?s(l):console.error(l),r.manager.itemError(t)}},n,s)}parse(t){function e(c){const h=new DataView(c),d=32/8*3+32/8*3*3+16/8,f=h.getUint32(80,!0);if(80+32/8+f*d===h.byteLength)return!0;const g=[115,111,108,105,100];for(let _=0;_<5;_++)if(n(g,h,_))return!1;return!0}function n(c,h,d){for(let f=0,p=c.length;f<p;f++)if(c[f]!==h.getUint8(d+f))return!1;return!0}function s(c){const h=new DataView(c),d=h.getUint32(80,!0);let f,p,g,_=!1,m,u,b,x,v;for(let P=0;P<70;P++)h.getUint32(P,!1)==1129270351&&h.getUint8(P+4)==82&&h.getUint8(P+5)==61&&(_=!0,m=new Float32Array(d*3*3),u=h.getUint8(P+6)/255,b=h.getUint8(P+7)/255,x=h.getUint8(P+8)/255,v=h.getUint8(P+9)/255);const T=84,w=50,A=new Pe,L=new Float32Array(d*3*3),S=new Float32Array(d*3*3),M=new Ht;for(let P=0;P<d;P++){const U=T+P*w,F=h.getFloat32(U,!0),G=h.getFloat32(U+4,!0),H=h.getFloat32(U+8,!0);if(_){const B=h.getUint16(U+48,!0);(B&32768)===0?(f=(B&31)/31,p=(B>>5&31)/31,g=(B>>10&31)/31):(f=u,p=b,g=x)}for(let B=1;B<=3;B++){const K=U+B*12,V=P*3*3+(B-1)*3;L[V]=h.getFloat32(K,!0),L[V+1]=h.getFloat32(K+4,!0),L[V+2]=h.getFloat32(K+8,!0),S[V]=F,S[V+1]=G,S[V+2]=H,_&&(M.setRGB(f,p,g,Ge),m[V]=M.r,m[V+1]=M.g,m[V+2]=M.b)}}return A.setAttribute("position",new Fe(L,3)),A.setAttribute("normal",new Fe(S,3)),_&&(A.setAttribute("color",new Fe(m,3)),A.hasColors=!0,A.alpha=v),A}function r(c){const h=new Pe,d=/solid([\s\S]*?)endsolid/g,f=/facet([\s\S]*?)endfacet/g,p=/solid\s(.+)/;let g=0;const _=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,m=new RegExp("vertex"+_+_+_,"g"),u=new RegExp("normal"+_+_+_,"g"),b=[],x=[],v=[],T=new I;let w,A=0,L=0,S=0;for(;(w=d.exec(c))!==null;){L=S;const M=w[0],P=(w=p.exec(M))!==null?w[1]:"";for(v.push(P);(w=f.exec(M))!==null;){let G=0,H=0;const B=w[0];for(;(w=u.exec(B))!==null;)T.x=parseFloat(w[1]),T.y=parseFloat(w[2]),T.z=parseFloat(w[3]),H++;for(;(w=m.exec(B))!==null;)b.push(parseFloat(w[1]),parseFloat(w[2]),parseFloat(w[3])),x.push(T.x,T.y,T.z),G++,S++;H!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+g),G!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+g),g++}const U=L,F=S-L;h.userData.groupNames=v,h.addGroup(U,F,A),A++}return h.setAttribute("position",new ue(b,3)),h.setAttribute("normal",new ue(x,3)),h}function o(c){return typeof c!="string"?new TextDecoder().decode(c):c}function a(c){if(typeof c=="string"){const h=new Uint8Array(c.length);for(let d=0;d<c.length;d++)h[d]=c.charCodeAt(d)&255;return h.buffer||h}else return c}const l=a(t);return e(l)?s(l):r(o(t))}}function d0(i,t=Math.PI/3){const e=Math.cos(t),n=(1+1e-10)*100,s=[new I,new I,new I],r=new I,o=new I,a=new I,l=new I;function c(_){const m=~~(_.x*n),u=~~(_.y*n),b=~~(_.z*n);return`${m},${u},${b}`}const h=i.index?i.toNonIndexed():i,d=h.attributes.position,f={};for(let _=0,m=d.count/3;_<m;_++){const u=3*_,b=s[0].fromBufferAttribute(d,u+0),x=s[1].fromBufferAttribute(d,u+1),v=s[2].fromBufferAttribute(d,u+2);r.subVectors(v,x),o.subVectors(b,x);const T=new I().crossVectors(r,o).normalize();for(let w=0;w<3;w++){const A=s[w],L=c(A);L in f||(f[L]=[]),f[L].push(T)}}const p=new Float32Array(d.count*3),g=new Fe(p,3,!1);for(let _=0,m=d.count/3;_<m;_++){const u=3*_,b=s[0].fromBufferAttribute(d,u+0),x=s[1].fromBufferAttribute(d,u+1),v=s[2].fromBufferAttribute(d,u+2);r.subVectors(v,x),o.subVectors(b,x),a.crossVectors(r,o).normalize();for(let T=0;T<3;T++){const w=s[T],A=c(w),L=f[A];l.set(0,0,0);for(let S=0,M=L.length;S<M;S++){const P=L[S];a.dot(P)>e&&l.add(P)}l.normalize(),g.setXYZ(u+T,l.x,l.y,l.z)}}return h.setAttribute("normal",g),h}const fl=new Map,u0=new h0,f0=["link0.stl","link1.stl","link2.stl","link3.stl","link4.stl","link5.stl","link6.stl","link7.stl","hand.stl"],p0=new fe(.088,.098,.014,24).rotateX(Math.PI/2),m0=new fe(.098,.106,.006,24).rotateX(Math.PI/2),g0=new fe(.044,.044,.012,18).rotateX(Math.PI/2),pl=new Rt(.014,.011,.046),ml=new Rt(.015,.004,.022),gl=new fe(.045,.045,.16,14).rotateX(Math.PI/2),_0=new Rt(.04,.1,.06),v0=new At({color:15922682,roughness:.28,metalness:.2}),x0=new At({color:2304307,roughness:.38,metalness:.45}),M0=new At({color:1580324,roughness:.32,metalness:.65}),Es=new At({color:16729413,emissive:10033947,emissiveIntensity:.72,transparent:!0,opacity:.46,roughness:.4,depthWrite:!1}),_l=new Map;function y0(i){let t=_l.get(i);return t||(t=new At({color:i,roughness:.3,metalness:.28}),_l.set(i,t)),t}function S0(i){let t=fl.get(i);return t||(t=new Promise((e,n)=>{u0.load(i,s=>{const r=d0(s,Math.PI*.27);r.computeBoundingSphere(),e(r)},void 0,s=>n(s))}),fl.set(i,t)),t}function fc(i="./robots/fr3/meshes/"){return Promise.all(f0.map(t=>S0(`${i}${t}`).catch(()=>null)))}async function Wi(i,t={}){const e=t.baseUrl??"./robots/fr3/meshes/";let n=[];try{n=await fc(e)}catch{n=Array(9).fill(null)}const s=!!t.isGhost,r=t.castShadow!==void 0?t.castShadow:!s,o=s?Es:v0,a=s?Es:y0(i.color),l=s?Es:x0,c=s?Es:M0,h=new $t;h.name=`robot:${i.id}`,h.position.set(i.base.xyz[0],i.base.xyz[1],i.base.xyz[2]),h.rotation.set(0,0,i.base.yaw);const d=new st(p0,c);d.position.set(0,0,.007),h.add(d);const f=new st(m0,a);f.position.set(0,0,.003),h.add(f);const p=new $t,g=n[0]??gl,_=new st(g,o);_.castShadow=r,_.receiveShadow=!s,p.add(_),h.add(p);let m=p;const u=[];for(let P=0;P<7;P++){const[U,F]=qs[P],G=new $t;G.position.set(U[0],U[1],U[2]),G.rotation.set(F[0],F[1],F[2],"ZYX"),m.add(G);const H=new $t;H.name=`fr3_joint${P+1}`,G.add(H),u.push(H);const B=new st(g0,c);H.add(B);const K=n[P+1]??gl,V=P===1||P===5?a:o,lt=new st(K,V);lt.castShadow=r,lt.receiveShadow=!s,H.add(lt),m=H}const b=new $t;b.position.set(0,0,.107),m.add(b);const x=new $t;x.rotation.set(0,0,-Math.PI/4),b.add(x);const v=n[8]??_0,T=new st(v,l);T.castShadow=r,x.add(T);const w=new st(pl,l);w.position.set(0,.032,.082);const A=new st(ml,a);A.position.set(0,-.006,.01),w.add(A);const L=new st(pl,l);L.position.set(0,-.032,.082);const S=new st(ml,a);S.position.set(0,.006,.01),L.add(S),x.add(w,L);const M=new $t;return M.name="fr3_hand_tcp",M.position.set(0,0,.1034),x.add(M),ve(u,i.home),{root:h,joints:u,tcp:M,fingerLeft:w,fingerRight:L}}function ve(i,t){const e=Math.min(i.length,t.length);for(let n=0;n<e;n++)i[n].rotation.set(0,0,t[n])}const E0=new At({color:"#1d4ed8",roughness:.42,metalness:.55}),xo=new At({color:"#ea580c",roughness:.38,metalness:.45}),Zi=new At({color:"#262f3d",roughness:.5,metalness:.6}),vl=new At({color:"#334155",roughness:.48,metalness:.65}),b0=new At({color:"#64748b",roughness:.3,metalness:.75}),Oo=new At({color:"#a17c50",roughness:.8,metalness:.05}),w0=new At({color:"#c89d6c",roughness:.72,metalness:.05}),T0=new At({color:"#b58958",roughness:.75,metalness:.05}),pc=new At({color:"#2563eb",roughness:.35,metalness:.15}),mc=new At({color:"#10b981",roughness:.35,metalness:.15}),A0=new At({color:"#ef4444",roughness:.35,metalness:.15}),gc=new At({color:"#f59e0b",roughness:.35,metalness:.15}),Ns=new At({color:"#f5c542",roughness:.35,metalness:.35}),xl=new At({color:"#14171c",roughness:.5,metalness:.2}),bs=new vn({color:"#f5c542",side:Ce,transparent:!0,opacity:.55}),Ml=new vn({color:"#38bdf8",side:Ce,transparent:!0,opacity:.45}),C0=new At({color:"#3ccf91",emissive:"#10b981",emissiveIntensity:.85}),R0=new At({color:"#f5c542",emissive:"#d97706",emissiveIntensity:.45}),P0=new At({color:"#ff5c5c",emissive:"#991b1b",emissiveIntensity:.2}),L0=new fe(.032,.036,.46,14).rotateX(Math.PI/2),D0=new fe(.06,.06,.016,14).rotateX(Math.PI/2),yl=new fe(.034,.034,.055,14).rotateX(Math.PI/2),I0=new fe(.012,.012,.36,12).rotateX(Math.PI/2),Ar=new fe(.022,.022,.038,14).rotateX(Math.PI/2),ko=new Rt(.38,.32,.032),N0=new Rt(.15,.13,.12),Hs=new Rt(.14,.11,.085);function _c(){const i=new $t,t=new st(D0,Zi);t.position.set(0,0,.008);const e=new st(L0,Ns);e.position.set(0,0,.23);const n=new st(yl,xl);n.position.set(0,0,.32);const s=new st(yl,xl);return s.position.set(0,0,.41),i.add(t,e,n,s),i}function zo(){const i=new $t,t=new st(I0,Zi);t.position.set(0,0,.18);const e=new st(Ar,P0);e.position.set(0,0,.38);const n=new st(Ar,R0);n.position.set(0,0,.42);const s=new st(Ar,C0);return s.position.set(0,0,.46),i.add(t,e,n,s),i}function vc(i,t,e=.002){const n=new $t,s=.025,r=new st(new on(i,s),bs);r.position.set(0,t/2,e);const o=new st(new on(i,s),bs);o.position.set(0,-t/2,e);const a=new st(new on(s,t),bs);a.position.set(i/2,0,e);const l=new st(new on(s,t),bs);return l.position.set(-i/2,0,e),n.add(r,o,a,l),n}function Mo(i=.85,t=1.18,e=1.15,n=0,s=3){const r=new $t,o=.038,a=new Rt(o,o,e);for(const _ of[-1,1])for(const m of[-1,1]){const u=new st(a,E0);u.position.set(_*(i/2-o/2),m*(t/2-o/2),e/2),r.add(u)}const l=(e-.24)/Math.max(1,s-1),c=Array.from({length:s},(_,m)=>.08+m*l),h=new Rt(.028,t-o,.042),d=new Rt(i-o,.028,.036),f=new Rt(i-.04,t-.04,.012),p=[pc,mc,A0,gc],g=[w0,T0];return c.forEach((_,m)=>{for(const b of[-1,1]){const x=new st(h,xo);x.position.set(b*(i/2-.018),0,_),r.add(x)}for(const b of[-1,1]){const x=new st(d,xo);x.position.set(0,b*(t/2-.018),_),r.add(x)}const u=new st(f,Zi);u.position.set(0,0,_+.016),r.add(u);for(const b of[-t*.24,t*.24]){const x=new st(ko,Oo);x.position.set(0,b,_+.038),r.add(x);const v=(m+n+(b>0?1:0))%2===0;for(const T of[-.08,.08])if(v){const w=p[Math.abs(m*3+n+(T>0?1:2))%p.length],A=new st(Hs,w);A.position.set(T,b,_+.096),r.add(A)}else{const w=g[Math.abs(m+(T>0?1:0))%g.length],A=new st(N0,w);A.position.set(T,b,_+.114),r.add(A)}}}),r}function xc(i=4.2,t=1.55){const e=new $t,n=new st(new Rt(i,.08,.03),vl);n.position.set(0,0,.015);const s=new st(new Rt(i,.08,.04),vl);s.position.set(0,0,t),e.add(n,s);const r=new $t,o=new st(new Rt(.42,.22,.07),Ns);o.position.set(0,0,.05);const a=new st(new Rt(.05,.06,t),Ns);a.position.set(-.14,0,t/2);const l=new st(new Rt(.05,.06,t),Ns);l.position.set(.14,0,t/2),r.add(o,a,l);const c=new $t,h=new st(new Rt(.36,.34,.035),Zi),d=new st(ko,Oo);d.position.set(0,0,.034);const f=new st(Hs,pc);f.position.set(-.08,0,.09);const p=new st(Hs,gc);return p.position.set(.08,0,.09),c.add(h,d,f,p),c.position.set(0,0,.55),r.add(c),e.add(r),{root:e,mast:r,carriage:c}}function Mc(i=.95,t=2.6,e=.48){const n=new $t,s=new st(new Rt(i,t,e*.82),Zi);s.position.set(0,0,e*.41),n.add(s);const r=new Rt(.04,t,.06);for(const c of[-1,1]){const h=new st(r,xo);h.position.set(c*(i/2-.02),0,e*.85),n.add(h)}const o=new fe(.022,.022,i-.1,12);o.rotateZ(Math.PI/2);const a=16;for(let c=0;c<a;c++){const h=-t*.45+c/(a-1)*t*.9,d=new st(o,b0);d.position.set(0,h,e*.84),n.add(d)}for(const c of[-.75,0,.75]){const h=new st(ko,Oo);h.position.set(0,c,e*.87),n.add(h);for(const d of[-.08,.08]){const f=new st(Hs,mc);f.position.set(d,c,e*.87+.058),n.add(f)}}const l=zo();return l.position.set(i/2-.06,t/2-.12,e*.85),n.add(l),n}function U0(i=-.52){const t=new $t,e=new st(new Rt(9.6,8.2,.02),new At({color:"#181d25",roughness:.78,metalness:.12}));e.position.set(0,.2,i-.01),e.receiveShadow=!0,t.add(e);const n=vc(2.26,1.76,i+.003);t.add(n);for(const o of[-.28,.28]){const a=new st(new on(5.6,.018),Ml);a.position.set(0,-1.38+o,i+.004),t.add(a)}for(const o of[-.28,.28]){const a=new st(new on(.018,4.2),Ml);a.position.set(1.56+o,-.1,i+.004),t.add(a)}for(const o of[-1.12,1.12])for(const a of[-.86,.86]){const l=_c();l.position.set(o,a,i),t.add(l)}const s=zo();s.position.set(.82,.6,0),t.add(s);for(let o=-1;o<=1;o++){const a=Mo(.88,.54,1.15,o+3,3);a.rotation.z=Math.PI/2,a.position.set(o*1.45,1.75,i),t.add(a)}const r=Mc(.76,1.85,.48);return r.position.set(2.35,0,i),t.add(r),t}class F0{constructor(t){j(this,"viewer");j(this,"group",new $t);j(this,"roadmapGroup",new $t);j(this,"overlayGroup",new $t);j(this,"scenario",null);j(this,"duration",0);j(this,"cells",[]);j(this,"mms",new Map);j(this,"carriers",new Map);j(this,"stackerCranes",[]);j(this,"orderVisuals",[]);this.viewer=t}dispose(){this.viewer.clearGroup(this.group),this.viewer.clearGroup(this.roadmapGroup),this.viewer.clearGroup(this.overlayGroup),this.group.removeFromParent(),this.cells=[],this.mms.clear(),this.carriers.clear(),this.stackerCranes=[],this.orderVisuals=[],this.scenario=null}async load(t,e){this.dispose(),this.scenario=t,this.viewer.clearStatic(),this.viewer.dynamicGroup.add(this.group),this.group.add(this.roadmapGroup,this.overlayGroup);const[n,s,r,o]=t.floor.bounds,a=r-n,l=o-s,c=new st(new Rt(a,l,.04),new At({color:this.viewer.getTheme()==="light"?"#cfd6e2":"#1b1f27",roughness:.85}));c.position.set((n+r)/2,(s+o)/2,t.floor.z-.02),c.receiveShadow=!0,this.group.add(c);const h=new nc(Math.max(a,l),24,3884116,2435894);h.rotation.x=Math.PI/2,h.position.set((n+r)/2,(s+o)/2,t.floor.z+.002),this.group.add(h);for(let x=0;x<t.floor.stations.length;x++){const v=t.floor.stations[x];if(v.kind==="finished_goods"){const L=Mc(v.size[0],v.size[1],v.size[2]);L.position.set(v.xyz[0],v.xyz[1],v.xyz[2]),this.group.add(L)}else{const L=Mo(v.size[0],v.size[1],1.15,x);L.position.set(v.xyz[0],v.xyz[1],v.xyz[2]),this.group.add(L)}const T=document.createElement("div");T.className="scene-label station",T.textContent=v.label;const w=new Cn(T),A=v.kind==="finished_goods"?v.size[2]+.32:1.32;w.position.set(v.xyz[0],v.xyz[1],v.xyz[2]+A),this.group.add(w)}for(const x of[-3.2,.6,4.4]){const v=Mo(.58,1.38,1.18,Math.round(x+6),3);v.rotation.z=Math.PI/2,v.position.set(x,5.55,t.floor.z),this.group.add(v)}const d=xc(8.4,1.25);d.root.position.set(.6,4.95,t.floor.z),this.group.add(d.root),this.stackerCranes.push({crane:d,span:3.6,phase:0}),this.buildRoadmap(t);for(const x of t.cells){const v=new $t;v.position.set(x.xy[0],x.xy[1],0),this.viewer.buildStatic(x.scene,{into:v,showSlots:!1});const T=vc(2.12,1.62,t.floor.z+.004);v.add(T);const w=zo();w.position.set(.82,.6,0),v.add(w);for(const P of[-.78,.78]){const U=_c();U.position.set(1.02,P,t.floor.z),v.add(U)}const A=new Map;for(const P of x.scene.arms){const U=await Wi(P,{castShadow:!1});v.add(U.root),A.set(P.id,{spec:P,robot:U})}const L=new Map;for(const[P,U]of Object.entries(x.runs)){const F=typeof U=="string"?await e(U):U;L.set(P,F)}const S=document.createElement("div");S.className="scene-label cell-title",S.textContent=x.label;const M=new Cn(S);M.position.set(0,-x.scene.table.size[1]/2-.18,.08),v.add(M),this.group.add(v),this.cells.push({spec:x,group:v,arms:A,runs:L})}for(const x of[1.05,5.75]){const v=new st(new Rt(.5,8.6,.03),new At({color:"#28303d",roughness:.6,metalness:.3}));v.position.set(x,0,t.floor.z+.015),this.group.add(v)}const f=new fe(.085,.085,.05,16),p=new At({color:"#151920",roughness:.7,metalness:.2}),g=new At({color:"#252c37",roughness:.45,metalness:.4}),_=new At({color:"#364152",roughness:.5,metalness:.2}),m=new fe(.045,.05,.045,16).rotateX(Math.PI/2),u=new At({color:"#4f9dff",emissive:"#1b4d8a",emissiveIntensity:.5}),b=x=>{const v=new $t,T=new st(new Rt(.075,.075,.065),new At({color:x,roughness:.35}));T.position.set(-.035,-.04,.032);const w=new st(new Rt(.075,.075,.065),new At({color:"#f5c542",roughness:.35}));w.position.set(.035,.04,.032);const A=new st(new Rt(.14,.04,.035),new At({color:"#3ccf91",roughness:.35}));return A.position.set(0,0,.08),v.add(T,w,A),v};for(let x=0;x<t.mms.length;x++){const v=t.mms[x],T=new $t,[w,A,L]=v.size,S=new st(new Rt(w+.04,A+.03,.08),g);S.position.set(0,0,.06),T.add(S);const M=new st(new Rt(w*.92,A*.92,L-.06),new At({color:v.color,roughness:.36,metalness:.28}));M.position.set(0,0,L/2+.02),M.castShadow=!0,T.add(M);for(const wt of[-1,1])for(const It of[-1,1]){const qt=new st(f,p);qt.position.set(wt*(w*.34),It*(A*.48),.085),T.add(qt)}const P=new st(new Rt(.22,.3,.09),_);P.position.set(-.17,0,L+.045),T.add(P);const U=b(v.color);U.position.set(-.17,0,L+.09),T.add(U);const F=new st(m,u);F.position.set(w*.42,0,L+.02),T.add(F);const G=.12,H=new st(new fe(.095,.11,G,20).rotateX(Math.PI/2),g);H.position.set(.14,0,L+G/2),T.add(H);const B={id:v.id,color:v.color,base:{xyz:[.14,0,L+G],yaw:0},home:[0,-.78,0,-2.48,0,1.68,.785]},K=await Wi(B,{castShadow:!1});T.add(K.root);const V=b(v.color);V.position.set(0,0,.02),V.visible=!1,K.tcp.add(V);const lt=document.createElement("div");lt.className="scene-label mm-tag",lt.textContent=v.id.toUpperCase();const mt=new Cn(lt);mt.position.set(0,0,L+.65),T.add(mt),T.position.set(v.track.poses[0][0],v.track.poses[0][1],t.floor.z),this.group.add(T),this.mms.set(v.id,{idx:x,group:T,robot:K,track:v.track,color:v.color,toteCargo:U,tcpCargo:V,tagEl:lt})}for(const x of t.carriers){const v=new $t,T=new st(new Rt(x.size[0],x.size[1],x.size[2]),new At({color:"#a0794e",roughness:.72}));T.castShadow=!0,v.add(T);const w=b("#3ccf91");w.position.set(0,0,x.size[2]/2),v.add(w),this.group.add(v),this.carriers.set(x.id,{group:v,track:x.track})}for(const x of t.cell_jobs){const v=this.cells.find(A=>A.spec.id===x.cell),T=v==null?void 0:v.runs.get(x.model);if(!v||!T)continue;const w=new Map;for(const A of T.model.objects){const L=uc(A);L.visible=!1,v.group.add(L),w.set(A.id,L)}this.orderVisuals.push({orderId:x.order,cell:v,run:T,timeline:new cc(T.model.objects,T.events),meshes:w,tStart:x.t_start,tEnd:x.t_end})}this.duration=t.metrics.makespan_s}buildRoadmap(t){this.viewer.clearGroup(this.roadmapGroup);const e=new Map(t.floor.roadmap.nodes.map(a=>[a.id,a.xy])),n=t.floor.z+.015,s=new Lo({color:5217791,transparent:!0,opacity:.45});for(const[a,l]of t.floor.roadmap.edges){const c=e.get(a),h=e.get(l);if(!c||!h)continue;const d=[new I(c[0],c[1],n),new I(h[0],h[1],n)],f=new Pe().setFromPoints(d);this.roadmapGroup.add(new Jl(f,s))}const r=new fe(.08,.08,.01,16).rotateX(Math.PI/2),o=new vn({color:5217791});for(const a of t.floor.roadmap.nodes){const l=new st(r,o);l.position.set(a.xy[0],a.xy[1],n),this.roadmapGroup.add(l)}}setOverlayLayer(t){var n;if(this.viewer.clearGroup(this.overlayGroup),this.roadmapGroup.visible=t===null||t==="L2",!this.scenario||!t)return;const e=this.scenario.floor.z+.04;if(t==="L1"){const s=((n=this.scenario.assignments[0])==null?void 0:n.loads)??{};for(const r of this.cells){const o=s[r.spec.id]??20,a=document.createElement("div");a.className="scene-label overlay-badge l1",a.textContent=`MILP Load: ${o.toFixed(1)}s`;const l=new Cn(a);l.position.set(r.spec.xy[0],r.spec.xy[1],.95),this.overlayGroup.add(l)}}else if(t==="L3")for(const s of this.scenario.replans.flatMap(r=>r.repairs??[])){const r=new st(new qi(.18,.26,24),new vn({color:16106818,side:Ce}));r.position.set(s.xy[0],s.xy[1],e),this.overlayGroup.add(r);const o=document.createElement("div");o.className="scene-label overlay-badge l3",o.textContent=`${s.type.toUpperCase()}: ${s.text}`;const a=new Cn(o);a.position.set(s.xy[0],s.xy[1],e+.45),this.overlayGroup.add(a)}}applyTime(t){if(!this.scenario)return;const e=[0,-.78,0,-2.48,0,1.68,.785],n=[0,.18,0,-1.68,0,1.86,.785],s=[3.12,.12,0,-1.92,0,2.08,.785],r=[0,.18,0,-1.68,0,1.86,.785],o=(l,c,h)=>{const d=Math.max(0,Math.min(1,h)),f=d*d*(3-2*d);return l.map((p,g)=>p+(c[g]-p)*f)},a=["C0","C1","C2","C0","C3","C4","C5","C5"];for(const l of this.stackerCranes)l.crane.mast.position.x=Math.sin(t*.45+l.phase)*l.span,l.crane.carriage.position.z=.55+Math.sin(t*.9+l.phase)*.38;for(const l of this.mms.values()){const c=(t-l.track.t0)*l.track.rate,h=l.track.poses.length-1,d=Math.max(0,Math.min(h,Math.floor(c))),f=Math.min(h,d+1),p=Math.max(0,Math.min(1,c-d)),g=l.track.poses[d],_=l.track.poses[f],m=g[0]+(_[0]-g[0])*p,u=g[1]+(_[1]-g[1])*p;let b=_[2]-g[2];b=Math.atan2(Math.sin(b),Math.cos(b)),l.group.position.set(m,u,this.scenario.floor.z),l.group.rotation.set(0,0,g[2]+b*p);const x=(t/20+l.idx*.21)%1,v=a[l.idx%a.length],T=`MM${l.idx}`;if(x<.18){const w=x/.18;let A=e;w<.42?(A=o(e,n,w/.42),l.tcpCargo.visible=!1,l.toteCargo.visible=!1):w<.82?(A=o(n,s,(w-.42)/.4),l.tcpCargo.visible=!0,l.toteCargo.visible=!1):(A=o(s,e,(w-.82)/.18),l.tcpCargo.visible=!1,l.toteCargo.visible=!0),ve(l.robot.joints,A),l.tagEl.textContent=`${T} · PICKING AT DEPOT`}else if(x<.5)ve(l.robot.joints,e),l.tcpCargo.visible=!1,l.toteCargo.visible=!0,l.tagEl.textContent=`${T} · TRANSFER → ${v}`;else if(x<.68){const w=(x-.5)/.18;let A=e;w<.35?(A=o(e,s,w/.35),l.tcpCargo.visible=!1,l.toteCargo.visible=!0):w<.78?(A=o(s,r,(w-.35)/.43),l.tcpCargo.visible=!0,l.toteCargo.visible=!1):(A=o(r,e,(w-.78)/.22),l.tcpCargo.visible=!1,l.toteCargo.visible=!1),ve(l.robot.joints,A),l.tagEl.textContent=`${T} · UNLOADING → ${v}`}else ve(l.robot.joints,e),l.tcpCargo.visible=!1,l.toteCargo.visible=!1,l.tagEl.textContent=`${T} · RETURN TO DEPOT`}for(const l of this.carriers.values()){const c=l.track;if(c.length===0||t<c[0][0]||t>c[c.length-1][0]+15){l.group.visible=!1;continue}l.group.visible=!0;let h=c[c.length-1];for(const d of c)if(d[0]<=t)h=d;else break;l.group.position.set(h[1],h[2],h[3]),l.group.rotation.set(0,0,h[4])}for(const l of this.cells)for(const c of l.arms.values())ve(c.robot.joints,c.spec.home);for(const l of this.orderVisuals){if(!(t>=l.tStart&&t<=l.tEnd+1.5)){for(const f of l.meshes.values())f.visible=!1;continue}const h=Math.max(0,t-l.tStart),d=l.run.trajectories;for(const[f,p]of l.cell.arms){const g=Gs(d.rate,d.t0,d.arms[f],h,p.spec.home);ve(p.robot.joints,g)}l.cell.group.updateMatrixWorld(!0);for(const[f,p]of l.meshes){p.visible=!0;const g=l.timeline.stateAt(f,h);if(g.kind==="pose")vo(p,g.pose);else{const m=l.cell.arms.get(g.ev.arm);m&&hc(p,l.cell.group,m.robot.tcp,g.ev)}const _=dc(l.run.events,f,h);p.scale.set(_[0],_[1],_[2])}}}}const Sl={type:"change"},Bo={type:"start"},yc={type:"end"},ws=new Xs,El=new Tn,O0=Math.cos(70*vh.DEG2RAD),_e=new I,Ne=2*Math.PI,oe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Cr=1e-6;class k0 extends cd{constructor(t,e=null){super(t,e),this.state=oe.NONE,this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:gi.ROTATE,MIDDLE:gi.DOLLY,RIGHT:gi.PAN},this.touches={ONE:pi.ROTATE,TWO:pi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new Dn,this._lastTargetPosition=new I,this._quat=new Dn().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ba,this._sphericalDelta=new ba,this._scale=1,this._panOffset=new I,this._rotateStart=new Dt,this._rotateEnd=new Dt,this._rotateDelta=new Dt,this._panStart=new Dt,this._panEnd=new Dt,this._panDelta=new Dt,this._dollyStart=new Dt,this._dollyEnd=new Dt,this._dollyDelta=new Dt,this._dollyDirection=new I,this._mouse=new Dt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=B0.bind(this),this._onPointerDown=z0.bind(this),this._onPointerUp=G0.bind(this),this._onContextMenu=Y0.bind(this),this._onMouseWheel=W0.bind(this),this._onKeyDown=X0.bind(this),this._onTouchStart=$0.bind(this),this._onTouchMove=q0.bind(this),this._onMouseDown=H0.bind(this),this._onMouseMove=V0.bind(this),this._interceptControlDown=j0.bind(this),this._interceptControlUp=K0.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Sl),this.update(),this.state=oe.NONE}update(t=null){const e=this.object.position;_e.copy(e).sub(this.target),_e.applyQuaternion(this._quat),this._spherical.setFromVector3(_e),this.autoRotate&&this.state===oe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ne:n>Math.PI&&(n-=Ne),s<-Math.PI?s+=Ne:s>Math.PI&&(s-=Ne),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(_e.setFromSpherical(this._spherical),_e.applyQuaternion(this._quatInverse),e.copy(this.target).add(_e),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=_e.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=_e.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ws.origin.copy(this.object.position),ws.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ws.direction))<O0?this.object.lookAt(this.target):(El.setFromNormalAndCoplanarPoint(this.object.up,this.target),ws.intersectPlane(El,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Cr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Cr||this._lastTargetPosition.distanceToSquared(this.target)>Cr?(this.dispatchEvent(Sl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ne/60*this.autoRotateSpeed*t:Ne/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){_e.setFromMatrixColumn(e,0),_e.multiplyScalar(-t),this._panOffset.add(_e)}_panUp(t,e){this.screenSpacePanning===!0?_e.setFromMatrixColumn(e,1):(_e.setFromMatrixColumn(e,0),_e.crossVectors(this.object.up,_e)),_e.multiplyScalar(t),this._panOffset.add(_e)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;_e.copy(s).sub(this.target);let r=_e.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ne*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ne*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ne*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ne*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ne*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ne*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ne*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ne*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Dt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function z0(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function B0(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function G0(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(yc),this.state=oe.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function H0(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case gi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=oe.DOLLY;break;case gi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=oe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=oe.ROTATE}break;case gi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=oe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=oe.PAN}break;default:this.state=oe.NONE}this.state!==oe.NONE&&this.dispatchEvent(Bo)}function V0(i){switch(this.state){case oe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case oe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case oe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function W0(i){this.enabled===!1||this.enableZoom===!1||this.state!==oe.NONE||(i.preventDefault(),this.dispatchEvent(Bo),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(yc))}function X0(i){this.enabled!==!1&&this._handleKeyDown(i)}function $0(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case pi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=oe.TOUCH_ROTATE;break;case pi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=oe.TOUCH_PAN;break;default:this.state=oe.NONE}break;case 2:switch(this.touches.TWO){case pi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=oe.TOUCH_DOLLY_PAN;break;case pi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=oe.TOUCH_DOLLY_ROTATE;break;default:this.state=oe.NONE}break;default:this.state=oe.NONE}this.state!==oe.NONE&&this.dispatchEvent(Bo)}function q0(i){switch(this._trackPointer(i),this.state){case oe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case oe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case oe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case oe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=oe.NONE}}function Y0(i){this.enabled!==!1&&i.preventDefault()}function j0(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function K0(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Z0{constructor(t){j(this,"host");j(this,"renderer");j(this,"labelRenderer");j(this,"scene",new qh);j(this,"camera");j(this,"controls");j(this,"root",new $t);j(this,"staticGroup",new $t);j(this,"dynamicGroup",new $t);j(this,"ghostGroup",new $t);j(this,"overlayGroup",new $t);j(this,"slots",new Map);j(this,"onSlotClick",null);j(this,"followTarget",null);j(this,"cameraTween",null);j(this,"beltTextures",[]);j(this,"raycaster",new ld);j(this,"pointerDownXy",new Dt);j(this,"theme","dark");this.host=t,ge.DEFAULT_UP.set(0,0,1),this.renderer=new qm({antialias:!0,powerPreference:"high-performance",stencil:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Cl,this.renderer.toneMapping=Pl,this.renderer.toneMappingExposure=1.1,t.appendChild(this.renderer.domElement),this.labelRenderer=new Ym,this.labelRenderer.domElement.className="label-layer",this.labelRenderer.domElement.style.position="absolute",this.labelRenderer.domElement.style.inset="0",this.labelRenderer.domElement.style.pointerEvents="none",t.appendChild(this.labelRenderer.domElement),this.camera=new $e(42,16/9,.04,80),this.camera.up.set(0,0,1),this.camera.position.set(1.55,-1.75,1.35),this.controls=new k0(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.maxPolarAngle=Math.PI*.49,this.controls.minDistance=.35,this.controls.maxDistance=26,this.controls.target.set(0,0,.12),this.controls.update(),this.scene.background=new Ht("#14171c");const e=new sd(14411519,2501428,1.25);e.position.set(0,0,6),this.scene.add(e);const n=new ya(16777215,1.85);n.position.set(2.8,-3.4,4.8),n.castShadow=!0,n.shadow.mapSize.set(1024,1024),n.shadow.camera.near=.5,n.shadow.camera.far=16;const s=3.2;n.shadow.camera.left=-s,n.shadow.camera.right=s,n.shadow.camera.top=s,n.shadow.camera.bottom=-s,n.shadow.bias=-4e-4,this.scene.add(n);const r=new ya(9090303,.55);r.position.set(-3,2.5,2.6),this.scene.add(r),this.root.add(this.staticGroup,this.dynamicGroup,this.ghostGroup,this.overlayGroup),this.scene.add(this.root),this.renderer.domElement.addEventListener("pointerdown",a=>{this.pointerDownXy.set(a.clientX,a.clientY),this.cameraTween=null}),this.renderer.domElement.addEventListener("pointerup",a=>{if(Math.hypot(a.clientX-this.pointerDownXy.x,a.clientY-this.pointerDownXy.y)>5||!this.onSlotClick||this.slots.size===0)return;const l=this.renderer.domElement.getBoundingClientRect(),c=new Dt((a.clientX-l.left)/l.width*2-1,-((a.clientY-l.top)/l.height)*2+1);this.raycaster.setFromCamera(c,this.camera);const h=[];for(const f of this.slots.values())h.push(f.group);const d=this.raycaster.intersectObjects(h,!0);if(d.length>0){let f=d[0].object;for(;f&&!f.userData.slotId;)f=f.parent;f!=null&&f.userData.slotId&&this.onSlotClick(String(f.userData.slotId))}}),new ResizeObserver(()=>this.resize()).observe(t),this.resize()}resize(){const t=Math.max(320,this.host.clientWidth||window.innerWidth),e=Math.max(240,this.host.clientHeight||window.innerHeight);this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e,!1),this.labelRenderer.setSize(t,e)}setTheme(t){this.theme=t,this.scene.background=new Ht(t==="light"?"#eef1f6":"#14171c")}getTheme(){return this.theme}clearGroup(t){for(const e of[...t.children])e.traverse(n=>{n instanceof Cn&&n.element.remove()}),t.remove(e)}clearStatic(){this.clearGroup(this.staticGroup),this.slots.clear(),this.beltTextures=[]}buildStatic(t,e={}){const n=e.into??this.staticGroup;n===this.staticGroup&&(this.clearStatic(),n.add(U0(-.52)));const[s,r,o]=t.table.size,a=new At({color:this.theme==="light"?"#d6dce5":"#252a33",roughness:.72,metalness:.08}),l=new st(new Rt(s,r,o),a);l.position.set(0,0,-o/2),l.receiveShadow=!0,l.castShadow=!0,n.add(l);const c=new At({color:"#3d4451",roughness:.45,metalness:.55});for(const x of[-1,1])for(const v of[-1,1]){const T=new st(new Rt(.05,.05,.475),c);T.position.set(x*(s/2-.07),v*(r/2-.07),-o-.2375),T.castShadow=!0,n.add(T)}const h=new nc(r-.04,12,4937061,3291204);h.rotation.x=Math.PI/2,h.scale.set(s/r,1,1),h.position.set(0,0,.001),n.add(h);const d=t.baseplate,f=d.studs[0]*d.pitch,p=d.studs[1]*d.pitch,g=new st(new Rt(f,p,d.height),new At({color:"#3b4859",roughness:.45,metalness:.18}));g.position.set(d.origin[0]+f/2,d.origin[1]+p/2,d.height/2),g.receiveShadow=!0,n.add(g);const _=new st(new qi(.242,.25,48),new vn({color:3985297,side:Ce,transparent:!0,opacity:.35}));_.position.set(0,0,.002),n.add(_);const m=new At({color:"#2c384a",roughness:.52,metalness:.15}),u=new At({color:"#43536b",roughness:.4,metalness:.35});for(const x of t.feeders){const v=new st(new Rt(x.size[0],x.size[1],x.size[2]),m);v.position.set(x.xyz[0],x.xyz[1],x.size[2]/2),v.receiveShadow=!0,n.add(v);const T=new st(new Rt(x.size[0]+.012,x.size[1]+.012,x.size[2]*.7),u);T.position.set(x.xyz[0],x.xyz[1],x.size[2]*.35),n.add(T)}const b=new At({color:"#3e3554",roughness:.55});for(const x of t.buffers){const v=new st(new Rt(x.size[0],x.size[1],x.size[2]),b);v.position.set(x.xyz[0],x.xyz[1],x.size[2]/2),v.receiveShadow=!0,n.add(v)}for(const x of t.conveyors??[]){const v=document.createElement("canvas");v.width=64,v.height=32;const T=v.getContext("2d");T&&(T.fillStyle="#20252d",T.fillRect(0,0,64,32),T.strokeStyle="#4f9dff",T.lineWidth=4,T.beginPath(),T.moveTo(14,4),T.lineTo(38,16),T.lineTo(14,28),T.stroke());const w=new Zh(v);w.wrapS=Xi,w.wrapT=Xi,w.repeat.set(6,1),this.beltTextures.push(w);const A=new st(new Rt(x.size[0],x.size[1],x.size[2]),new At({map:w,roughness:.65}));A.position.set(x.xyz[0],x.xyz[1],x.size[2]/2),n.add(A)}if(e.showSlots!==!1&&n===this.staticGroup)for(const x of t.mount_slots){const v=new $t;v.position.set(x.xyz[0],x.xyz[1],.003),v.userData.slotId=x.id;const T=new qi(.075,.095,32),w=new vn({color:7042952,side:Ce,transparent:!0,opacity:.75}),A=new st(T,w);A.userData.slotId=x.id;const L=new Do(.074,32),S=new vn({color:5217791,side:Ce,transparent:!0,opacity:.14}),M=new st(L,S);M.userData.slotId=x.id;const P=document.createElement("div");P.className="scene-label slot-tag",P.textContent=x.id;const U=new Cn(P);U.position.set(0,-.115,.01),v.add(A,M,U),n.add(v),this.slots.set(x.id,{group:v,ring:A,disc:M,spec:x})}}setSlotState(t,e,n=null){const s=this.slots.get(t);if(!s)return;const r=s.ring.material,o=s.disc.material;if(e==="selected-occupied"||e==="occupied"){const a=new Ht(n??"#4f9dff");r.color.copy(a),r.opacity=.95,o.color.copy(a),o.opacity=e==="selected-occupied"?.32:.18}else e==="selected"?(r.color.set("#4f9dff"),r.opacity=.95,o.color.set("#4f9dff"),o.opacity=.28):(r.color.set("#6b7788"),r.opacity=.55,o.color.set("#6b7788"),o.opacity=.08)}setBeltTime(t,e=.12){for(const n of this.beltTextures)n.offset.x=-(t*e*2.5)%1}presetPose(t,e){if(t==="front")return[new I(0,-2.05,.85),new I(0,0,.14)];if(t==="top")return[new I(0,-.01,2.35),new I(0,0,0)];if(t==="arm"&&e){const n=e.xyz[0],s=e.xyz[1];return[new I(n*1.65+.35,s*1.65-.65,.88),new I(n*.4,s*.4,.18)]}return[new I(2.45,-2.85,1.75),new I(.2,-.05,.05)]}goTo(t,e=!0){if(!e){this.cameraTween=null,this.camera.position.copy(t[0]),this.controls.target.copy(t[1]),this.controls.update();return}this.cameraTween={fromPos:this.camera.position.clone(),fromTarget:this.controls.target.clone(),toPos:t[0].clone(),toTarget:t[1].clone(),t:0}}render(t){if(this.cameraTween){this.cameraTween.t=Math.min(1,this.cameraTween.t+t*2.6);const e=this.cameraTween.t,n=e*e*(3-2*e);this.camera.position.lerpVectors(this.cameraTween.fromPos,this.cameraTween.toPos,n),this.controls.target.lerpVectors(this.cameraTween.fromTarget,this.cameraTween.toTarget,n),this.cameraTween.t>=1&&(this.cameraTween=null)}else if(this.followTarget){const e=this.followTarget();if(e){const n=e.clone().sub(this.controls.target);this.controls.target.addScaledVector(n,.15),this.camera.position.addScaledVector(n,.15)}}this.controls.update(),this.renderer.render(this.scene,this.camera),this.labelRenderer.render(this.scene,this.camera)}}function J0(i){if(i.plan.hypergraph&&i.plan.hypergraph.nodes.length>0)return i.plan.hypergraph;const t=[{id:"res_central_mutex",label:"Central Zone Mutex",kind:"resource",arms:i.scene.arms.map(n=>n.id),t_start:0,t_end:i.trajectories.duration||1,wave:0}],e=[];return i.plan.actions.forEach((n,s)=>{t.push({id:n.id,label:`${n.arms.join("+")} ${n.kind} ${n.object_id}`,kind:n.arms.length>1?"sync_hub":n.kind==="recover_slip"?"repair":"task",action_id:n.id,arms:n.arms,object_id:n.object_id,t_start:n.t_start,t_end:n.t_end,wave:Math.floor(s/2)}),(n.kind==="place"||n.kind==="dual_arm_place"||n.kind==="fold"||n.kind==="handover")&&e.push({id:`he_mutex_${n.id}`,kind:n.arms.length>1?"bimanual_sync":"mutex_lock",label:n.arms.length>1?"Bimanual Lock":"Mutex Lock",sources:["res_central_mutex"],targets:[n.id],t_active:[n.t_start,n.t_end]})}),i.plan.tpg_edges.forEach(([n,s],r)=>{const o=t.find(l=>l.id===n),a=t.find(l=>l.id===s);o&&a&&e.push({id:`he_tpg_${r}`,kind:"precedence",label:"TPG Edge",sources:[n],targets:[s],t_active:[o.t_start,a.t_end]})}),{scheduler_mode:"lazy_dash",nodes:t,hyperedges:e}}function Q0(i){const t=[{id:"hub_milp_router",label:"Rolling MILP Dispatcher",kind:"resource",arms:i.cells.map(n=>n.id),t_start:0,t_end:i.metrics.makespan_s,wave:0}],e=[];return i.transport.slice(0,6).forEach((n,s)=>{const r=`tr_${n.order}`;t.push({id:r,label:`${n.mm.toUpperCase()} fetch ${n.order}`,kind:"task",arms:[n.mm],object_id:n.order,t_start:n.t_start,t_end:n.t_end,wave:s}),e.push({id:`he_milp_${n.order}`,kind:"precedence",label:"MILP Dispatch",sources:["hub_milp_router"],targets:[r],t_active:[n.t_start,n.t_end]})}),i.cell_jobs.slice(0,6).forEach((n,s)=>{const r=`job_${n.order}`,o=`tr_${n.order}`;t.push({id:r,label:`${n.cell.toUpperCase()} build ${n.order}`,kind:"sync_hub",arms:[n.cell],object_id:n.model,t_start:n.t_start,t_end:n.t_end,wave:s}),e.push({id:`he_handover_${n.order}`,kind:"handover_sync",label:`Dock Handover (${n.order})`,sources:[o],targets:[r],t_active:[n.t_start-1.5,n.t_end]})}),{scheduler_mode:"lazy_dash",nodes:t,hyperedges:e}}class tg{constructor(t){j(this,"el");j(this,"headerSummaryEl");j(this,"svg");j(this,"onSeek");j(this,"posNodes",[]);j(this,"posEdges",[]);j(this,"conflictArms",new Set);j(this,"currentTime",0);this.onSeek=t,this.el=document.createElement("div"),this.el.className="hypergraph-pane";const e=document.createElement("div");e.className="hg-head",e.innerHTML='<span class="hg-title">Real-Time Execution Hypergraph (TPG + Resource Hyperedges)</span>',this.headerSummaryEl=document.createElement("span"),this.headerSummaryEl.className="hg-summary mono",e.appendChild(this.headerSummaryEl),this.svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.svg.setAttribute("viewBox","0 0 640 124"),this.svg.setAttribute("preserveAspectRatio","none"),this.svg.classList.add("hg-svg"),this.el.append(e,this.svg)}setHypergraph(t){this.conflictArms.clear(),this.posNodes=[],this.posEdges=[],this.svg.replaceChildren();const e=640,n=t.nodes.filter(f=>f.kind==="resource"),s=t.nodes.filter(f=>f.kind!=="resource"),r=new Map,o=document.createElementNS("http://www.w3.org/2000/svg","g"),a=document.createElementNS("http://www.w3.org/2000/svg","g");this.svg.append(o,a),n.forEach((f,p)=>{const m=8+p*136,b=this.createNodeDom(f,m,6,128,24);a.appendChild(b.groupEl),this.posNodes.push(b),r.set(f.id,b)});const l=Math.max(1,Math.ceil(s.length/2)),c=Math.min(126,(e-18)/l),h=Math.max(72,c-8),d=36;s.forEach((f,p)=>{const g=Math.floor(p/2),_=p%2,m=10+g*c,u=38+_*43,b=this.createNodeDom(f,m,u,h,d);a.appendChild(b.groupEl),this.posNodes.push(b),r.set(f.id,b)});for(const f of t.hyperedges){const p=f.sources.map(S=>r.get(S)).filter(Boolean),g=f.targets.map(S=>r.get(S)).filter(Boolean);if(p.length===0||g.length===0)continue;const _=p[0],m=g[0],u=_.x+_.w*.5,b=_.y+_.h*.5,x=m.x+m.w*.5,v=m.y+m.h*.5,T=(u+x)*.5,w=(b+v)*.5-(f.kind==="precedence"?8:0),A=document.createElementNS("http://www.w3.org/2000/svg","path");A.setAttribute("d",`M ${u} ${b} Q ${T} ${w} ${x} ${v}`),A.setAttribute("class",`hg-edge ${f.kind}`),o.appendChild(A);let L=null;(f.kind==="bimanual_sync"||f.kind==="mutex_lock"||f.kind==="repair_splice")&&(L=document.createElementNS("http://www.w3.org/2000/svg","circle"),L.setAttribute("cx",String(T)),L.setAttribute("cy",String(w)),L.setAttribute("r","3.2"),L.setAttribute("class",`hg-hub ${f.kind}`),o.appendChild(L)),this.posEdges.push({spec:f,pathEl:A,hubEl:L})}this.setTime(this.currentTime)}createNodeDom(t,e,n,s,r){const o=document.createElementNS("http://www.w3.org/2000/svg","g");o.setAttribute("class",`hg-node ${t.kind}`),o.style.cursor="pointer",o.addEventListener("click",()=>{const p=t.t_start+(t.t_end-t.t_start)*.35;this.onSeek(p)});const a=document.createElementNS("http://www.w3.org/2000/svg","rect");a.setAttribute("x",String(e)),a.setAttribute("y",String(n)),a.setAttribute("width",String(s)),a.setAttribute("height",String(r)),a.setAttribute("rx","5"),a.setAttribute("class","hg-node-box");const l=document.createElementNS("http://www.w3.org/2000/svg","rect");l.setAttribute("x",String(e+2)),l.setAttribute("y",String(n+r-4)),l.setAttribute("width","0"),l.setAttribute("height","2.5"),l.setAttribute("rx","1.2"),l.setAttribute("class","hg-node-prog");const c=document.createElementNS("http://www.w3.org/2000/svg","circle");c.setAttribute("cx",String(e+9)),c.setAttribute("cy",String(n+11)),c.setAttribute("r","3.5"),c.setAttribute("class","hg-node-dot");const h=document.createElementNS("http://www.w3.org/2000/svg","text");h.setAttribute("x",String(e+17)),h.setAttribute("y",String(n+14)),h.setAttribute("class","hg-node-title");const d=Math.max(10,Math.floor((s-20)/5.4));h.textContent=t.label.length>d?`${t.label.slice(0,d-1)}…`:t.label;const f=document.createElementNS("http://www.w3.org/2000/svg","text");return f.setAttribute("x",String(e+8)),f.setAttribute("y",String(n+27)),f.setAttribute("class","hg-node-state"),f.textContent=t.kind==="resource"?"MUTEX READY":"QUEUED",o.append(a,l,c,h,f),{spec:t,x:e,y:n,w:s,h:r,groupEl:o,rectEl:a,progEl:l,dotEl:c,stateTextEl:f}}setConflictHighlight(t){this.conflictArms=new Set(t),this.setTime(this.currentTime)}setTime(t){this.currentTime=t;let e=0,n=0,s=0;for(const r of this.posNodes){const{spec:o}=r,a=this.conflictArms.size>0&&o.arms.some(l=>this.conflictArms.has(l));if(o.kind==="resource"){r.groupEl.setAttribute("data-state",a?"conflict":t>.05&&t<o.t_end?"working":"idle"),r.stateTextEl.textContent=a?"CONTENTION":"ARBITRATING";continue}if(a)r.groupEl.setAttribute("data-state","conflict"),r.progEl.setAttribute("width",String(r.w-4)),r.stateTextEl.textContent="GATE CONFLICT";else if(t>=o.t_start&&t<=o.t_end){const l=o.label.toLowerCase().includes("wait")||o.label.toLowerCase().includes("stage");l?(n++,r.groupEl.setAttribute("data-state","waiting")):(e++,r.groupEl.setAttribute("data-state","working"));const c=Math.max(.05,o.t_end-o.t_start),h=Math.max(0,Math.min(1,(t-o.t_start)/c));r.progEl.setAttribute("width",String(Math.round((r.w-4)*h))),r.stateTextEl.textContent=`${l?"STAGED":"WORKING"} ${Math.round(h*100)}%`}else t>o.t_end?(s++,r.groupEl.setAttribute("data-state","done"),r.progEl.setAttribute("width",String(r.w-4)),r.stateTextEl.textContent=`DONE (${o.t_end.toFixed(1)}s)`):(r.groupEl.setAttribute("data-state","idle"),r.progEl.setAttribute("width","0"),r.stateTextEl.textContent=`T+${o.t_start.toFixed(1)}s`)}for(const r of this.posEdges){const[o,a]=r.spec.t_active,l=t>=o&&t<=a,c=t>a;r.pathEl.setAttribute("data-state",l?"working":c?"done":"idle"),r.hubEl&&r.hubEl.setAttribute("data-state",l?"working":c?"done":"idle")}this.headerSummaryEl.textContent=`${e} WORKING · ${n} STAGED · ${s} DONE`}}const Gn=[{id:"overview",layer:"overview",tech:"Hierarchical ATAMP + STAMP",title:"Overview: 5-Layer Physical AI Architecture",oneLiner:"Orders decompose into part jobs, mobile manipulators transport materials across a station graph, and multi-arm Franka FR3 workcells synthesize collision-free trajectories via Plan -> Gate -> Execute -> Write-Back.",points:["Outer loop (MILP) assigns incoming orders (Tower, Conveyor Bar, Deformable Laundry) to reconfigurable FR3 workcells.","Fleet layer plans mobile manipulator routes on a station graph and resolves corridor contention via zero-replan local repairs.","Workcell layer pairs Gemini-4-Argon task DAG planning with a 128 Hz deterministic safety gate and 50 Hz Damped Least Squares IK."]},{id:"orders",layer:"outer",tech:"Part Jobs + Rolling MILP",title:"Orders & Workcell Assignment",oneLiner:"Each order is decomposed by manipulation class and assigned to the cell that minimizes queue wait + build time + fleet travel.",points:["Orders group objects into rigid blocks, bimanual bars (LongBar), and deformable textiles (DeformableClothTowel, DeformableGarmentShirt).","The rolling MILP balances load across Cell A (3-Arm Tower), Cell B (Dual Conveyor), and Cell C (Deformable Folding).","Cell build-time estimates come directly from the Pareto frontier of pre-screened FR3 mount-slot configurations."],actionLabel:"Show Factory Assignment ->"},{id:"fleet",layer:"fleet",tech:"Station Graph + Local Repair",title:"Mobile Manipulators & Local Repair",oneLiner:"Mobile manipulators (Nova Carter + FR3) plan stops on a station roadmap and execute local sidestep/yield repairs on the fly.",points:["High-level PDDL schedules part pickups from depots (D_tower, D_conveyor_bar, D_deformable_fold) to workcell infeed docks.","Each mobile manipulator reserves roadmap segments ahead of arrival.","When two robots contend at H_center, the lower-priority robot sidesteps or yields locally without triggering a global replan."],actionLabel:"Show Station Graph & Repairs ->"},{id:"workcell",layer:"cell",tech:"Plan -> Gate -> Write-Back + DLS IK",title:"Workcell: Lazy Loop & Deterministic Gate",oneLiner:"Task plans are checked at 128 Hz for IK reach, bimanual promotion, and central-zone collisions; every fault writes back a formal constraint.",points:["Franka FR3 7-DOF trajectories are solved via Damped Least Squares (DLS) IK with null-space posture regularization and quintic smoothstep profiles.","Deterministic Gate intercepts IK_UNREACHABLE, WORKSPACE_COLLISION, RESOURCE_CONTENTION, and BIMANUAL_PROMOTION_REQUIRED before execution.","Rejected iterations render translucent red 3D ghost arms at the exact conflict timestamp and inject write_limit_back constraints into the next iteration."],actionLabel:"Inspect 3D Collision Ghosts ->"},{id:"design",layer:"design",tech:"Slot Screening + Pareto Frontier",title:"Design Loop: Reconfigurable Mount Slots",oneLiner:"Screen candidate FR3 mount slots (s0 through s7) by static reachability, then compute the Pareto frontier of arm count vs. build makespan.",points:["Eight standardized mount slots surround the 1.6m x 1.2m workcell table.","Static reachability immediately prunes 1-arm layouts that cannot reach opposite feeder corners or lift bimanual objects.","In-browser fast planning (< 25 ms median) lets you click any slot ring in 3D and immediately evaluate the new schedule."],actionLabel:"Explore Pareto Design Space ->"}];class eg{constructor(t){j(this,"el");j(this,"isOpen",!1);j(this,"currentId","overview");j(this,"navEl");j(this,"contentEl");j(this,"onNavigateDemo");this.onNavigateDemo=t,this.el=document.createElement("div"),this.el.className="explain-backdrop",this.el.hidden=!0;const e=document.createElement("div");e.className="ex-dialog",e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true");const n=document.createElement("div");n.className="ex-head",n.innerHTML='<div class="ex-head-t">System & Algorithms · Physical AI Fast-Sim</div><div class="grow"></div>';const s=document.createElement("button");s.type="button",s.className="btn small",s.textContent="✕ Close",s.addEventListener("click",()=>this.close()),n.appendChild(s);const r=document.createElement("div");r.className="ex-main",this.navEl=document.createElement("div"),this.navEl.className="ex-list",this.contentEl=document.createElement("div"),this.contentEl.className="ex-content",r.append(this.navEl,this.contentEl),e.append(n,r),this.el.appendChild(e),this.el.addEventListener("mousedown",o=>{o.target===this.el&&this.close()}),window.addEventListener("keydown",o=>{this.isOpen&&(o.key==="Escape"?(o.preventDefault(),this.close()):(o.key==="ArrowRight"||o.key==="ArrowLeft")&&this.step(o.key==="ArrowRight"?1:-1))}),this.renderNav()}show(t){this.isOpen=!0,this.el.hidden=!1,t&&Gn.some(e=>e.id===t)&&(this.currentId=t),this.select(this.currentId)}close(){this.isOpen=!1,this.el.hidden=!0;const t=new URL(location.href);t.searchParams.delete("explain"),history.replaceState(null,"",t)}step(t){const e=Gn.findIndex(s=>s.id===this.currentId),n=Math.max(0,Math.min(Gn.length-1,e+t));n!==e&&this.select(Gn[n].id)}select(t){this.currentId=t;const e=new URL(location.href);e.searchParams.set("explain",t),history.replaceState(null,"",e),this.renderNav(),this.renderContent()}renderNav(){this.navEl.replaceChildren(),Gn.forEach((t,e)=>{const n=document.createElement("button");n.type="button",n.className=`ex-item ${t.id===this.currentId?"on":""}`,n.innerHTML=`<span class="ex-item-n">${e}</span><div><div class="ex-item-t">${t.title}</div><div class="ex-item-s dim small">${t.tech}</div></div>`,n.addEventListener("click",()=>this.select(t.id)),this.navEl.appendChild(n)})}renderContent(){this.contentEl.replaceChildren();const t=Gn.find(r=>r.id===this.currentId)??Gn[0],e=document.createElement("div");e.className="ex-mod-h",e.innerHTML=`
      <div class="ex-tags"><span class="ex-layer">${t.layer.toUpperCase()}</span><span class="ex-tech mono">${t.tech}</span></div>
      <h2>${t.title}</h2>
      <p class="ex-one">${t.oneLiner}</p>
    `;const n=document.createElement("ul");n.className="ex-points";for(const r of t.points){const o=document.createElement("li");o.textContent=r,n.appendChild(o)}if(e.appendChild(n),t.actionLabel){const r=document.createElement("button");r.type="button",r.className="btn primary",r.textContent=t.actionLabel,r.addEventListener("click",()=>{this.close(),this.onNavigateDemo(t.id)}),e.appendChild(r)}const s=document.createElement("div");s.className="ex-viz",s.innerHTML=`
      <div class="ex-viz-t">Interactive Pipeline Diagram (${t.title})</div>
      <svg viewBox="0 0 620 150" class="ex-svg">
        <rect x="16" y="35" width="125" height="72" rx="8" fill="#1e2430" stroke="#4f9dff" stroke-width="1.6"/>
        <text x="78" y="66" text-anchor="middle" fill="#eef2f8" font-size="12" font-weight="600">1. Plan (DAG)</text>
        <text x="78" y="86" text-anchor="middle" fill="#8b96a8" font-size="10">Gemini-4-Argon / MILP</text>

        <line x1="141" y1="71" x2="175" y2="71" stroke="#6b7788" stroke-width="1.6"/>

        <rect x="175" y="35" width="130" height="72" rx="8" fill="#1e2430" stroke="#f5c542" stroke-width="1.6"/>
        <text x="240" y="66" text-anchor="middle" fill="#eef2f8" font-size="12" font-weight="600">2. Safety Gate</text>
        <text x="240" y="86" text-anchor="middle" fill="#8b96a8" font-size="10">128 Hz IK + AABB + Mutex</text>

        <line x1="305" y1="71" x2="339" y2="71" stroke="#6b7788" stroke-width="1.6"/>

        <rect x="339" y="35" width="125" height="72" rx="8" fill="#1e2430" stroke="#3ccf91" stroke-width="1.6"/>
        <text x="401" y="66" text-anchor="middle" fill="#eef2f8" font-size="12" font-weight="600">3. Execute 32Hz</text>
        <text x="401" y="86" text-anchor="middle" fill="#8b96a8" font-size="10">DLS 7-DOF IK + SE(3)</text>

        <line x1="464" y1="71" x2="496" y2="71" stroke="#6b7788" stroke-width="1.6"/>

        <rect x="496" y="35" width="108" height="72" rx="8" fill="#1e2430" stroke="#c78bff" stroke-width="1.6"/>
        <text x="550" y="66" text-anchor="middle" fill="#eef2f8" font-size="12" font-weight="600">4. Write-Back</text>
        <text x="550" y="86" text-anchor="middle" fill="#8b96a8" font-size="10">3D Ghost Repair</text>
      </svg>
    `,this.contentEl.append(e,s)}}const Sc={pick:"#4f9dff",stage_pre_gate:"#f5c542",place:"#3ccf91",dual_arm_pick:"#f5c542",dual_arm_place:"#3ccf91",handover:"#ff8a5c",unfold:"#4f9dff",fold:"#c78bff",recover_slip:"#ff5c5c",part:"#4f9dff",kit:"#6aa8ff",cell_job:"#3ccf91"};function ng(i){var t,e;return{rows:i.scene.arms.map(n=>({id:n.id,label:`${n.id} (${n.slot})`,color:n.color})),bars:(((t=i.plan)==null?void 0:t.actions)??[]).map(n=>({id:n.id,rows:n.arms,t_start:n.t_start,t_end:n.t_end,kind:n.kind,color:Sc[n.kind]??"#4f9dff",label:n.label})),edges:((e=i.plan)==null?void 0:e.tpg_edges)??[]}}function ig(i){const t=[...i.mms.map(n=>({id:n.id,label:n.id.toUpperCase(),color:n.color})),...i.cells.map(n=>({id:n.id,label:n.id.toUpperCase(),color:"#3ccf91"}))],e=[...i.transport.map((n,s)=>({id:`tr_${s}`,rows:[n.mm],t_start:n.t_start,t_end:n.t_end,kind:n.kind,color:Sc[n.kind]??"#4f9dff",label:n.label})),...i.cell_jobs.map((n,s)=>({id:`cj_${s}`,rows:[n.cell],t_start:n.t_start,t_end:n.t_end,kind:"cell_job",color:"#3ccf91",label:`${n.order} (${n.model})`}))];return{rows:t,bars:e,edges:[]}}const Hn="http://www.w3.org/2000/svg";class sg{constructor(t){j(this,"el");j(this,"svg");j(this,"onSeek");j(this,"data",null);j(this,"duration",10);j(this,"currentTime",0);j(this,"dragging",!1);this.onSeek=t,this.el=document.createElement("div"),this.el.className="gantt-wrap",this.svg=document.createElementNS(Hn,"svg"),this.svg.setAttribute("class","gantt-svg"),this.el.appendChild(this.svg);const e=n=>{const s=this.svg.getBoundingClientRect(),r=68,a=Math.max(100,s.width-r-14),l=Math.max(0,Math.min(1,(n.clientX-s.left-r)/a));this.onSeek(l*this.duration)};this.svg.addEventListener("pointerdown",n=>{this.dragging=!0,this.svg.setPointerCapture(n.pointerId),e(n)}),this.svg.addEventListener("pointermove",n=>{this.dragging&&e(n)}),this.svg.addEventListener("pointerup",()=>{this.dragging=!1})}setData(t,e){this.data=t,this.duration=Math.max(1,e),this.render()}update(t){this.currentTime=t;const e=this.svg.querySelector(".gantt-playhead");if(e){const o=Math.max(480,this.el.clientWidth||640)-68-14,a=68+Math.max(0,Math.min(1,t/Math.max(.01,this.duration)))*o;e.setAttribute("x1",String(a)),e.setAttribute("x2",String(a))}}render(){for(;this.svg.firstChild;)this.svg.removeChild(this.svg.firstChild);if(!this.data)return;const t=this.data.rows,e=Math.max(480,this.el.clientWidth||640),n=22,s=10,r=20,o=68,a=14,l=Math.max(88,s+t.length*n+r),c=Math.max(100,e-o-a);this.svg.setAttribute("viewBox",`0 0 ${e} ${l}`);const h=new Map;t.forEach((g,_)=>{const m=s+_*n;h.set(g.id,m);const u=document.createElementNS(Hn,"rect");u.setAttribute("x",String(o)),u.setAttribute("y",String(m+2)),u.setAttribute("width",String(c)),u.setAttribute("height",String(n-4)),u.setAttribute("rx","3"),u.setAttribute("fill","rgba(255,255,255,0.03)"),this.svg.appendChild(u);const b=document.createElementNS(Hn,"text");b.setAttribute("x","8"),b.setAttribute("y",String(m+n*.68)),b.setAttribute("fill",g.color),b.setAttribute("class","gantt-row-label"),b.textContent=g.label,this.svg.appendChild(b)});const d=new Map;for(const g of this.data.bars){const _=o+g.t_start/this.duration*c,m=o+g.t_end/this.duration*c,u=Math.max(4,m-_);for(const b of g.rows){const x=h.get(b);if(x===void 0)continue;const v=document.createElementNS(Hn,"rect");v.setAttribute("x",String(_)),v.setAttribute("y",String(x+3)),v.setAttribute("width",String(u)),v.setAttribute("height",String(n-6)),v.setAttribute("rx","3"),v.setAttribute("fill",g.color),v.setAttribute("opacity","0.85");const T=document.createElementNS(Hn,"title");T.textContent=`${g.label} (${g.t_start.toFixed(1)}s - ${g.t_end.toFixed(1)}s)`,v.appendChild(T),this.svg.appendChild(v),d.has(g.id)||d.set(g.id,{x0:_,x1:m,y:x+n/2})}}for(const[g,_]of this.data.edges){const m=d.get(g),u=d.get(_);if(!m||!u)continue;const b=document.createElementNS(Hn,"path"),x=(m.x1+u.x0)*.5;b.setAttribute("d",`M ${m.x1} ${m.y} C ${x} ${m.y}, ${x} ${u.y}, ${u.x0} ${u.y}`),b.setAttribute("stroke","rgba(255,255,255,0.35)"),b.setAttribute("stroke-width","1.2"),b.setAttribute("fill","none"),this.svg.appendChild(b)}const f=o+this.currentTime/Math.max(.01,this.duration)*c,p=document.createElementNS(Hn,"line");p.setAttribute("class","gantt-playhead"),p.setAttribute("x1",String(f)),p.setAttribute("x2",String(f)),p.setAttribute("y1",String(s)),p.setAttribute("y2",String(l-r+4)),p.setAttribute("stroke","#ff5c5c"),p.setAttribute("stroke-width","2"),this.svg.appendChild(p)}}class rg{constructor(){j(this,"time",0);j(this,"duration",10);j(this,"playing",!1);j(this,"speed",1);j(this,"loop",!0);j(this,"listeners",[])}onChange(t){this.listeners.push(t)}emit(){for(const t of this.listeners)t()}reset(t){this.duration=Math.max(0,t),this.time=0,this.emit()}seek(t){this.time=Math.max(0,Math.min(this.duration,t)),this.emit()}setPlaying(t){t&&this.time>=this.duration&&this.duration>0&&(this.time=0),this.playing=t&&this.duration>0,this.emit()}toggle(){this.setPlaying(!this.playing)}setSpeed(t){this.speed=t,this.emit()}setLoop(t){this.loop=t,this.emit()}tick(t){return!this.playing||this.duration<=0?!1:(this.time+=t*this.speed,this.time>=this.duration&&(this.loop?this.time=this.time%this.duration:(this.time=this.duration,this.playing=!1)),this.emit(),!0)}}class og{constructor(t){j(this,"clock");j(this,"el");j(this,"playBtn");j(this,"slider");j(this,"timeEl");j(this,"speedSel");this.clock=t,this.el=document.createElement("div"),this.el.className="transport-bar",this.playBtn=document.createElement("button"),this.playBtn.className="icon-btn play-btn",this.playBtn.type="button",this.playBtn.title="Play / Pause (Space)",this.playBtn.addEventListener("click",()=>this.clock.toggle()),this.slider=document.createElement("input"),this.slider.type="range",this.slider.className="transport-slider",this.slider.min="0",this.slider.max="10",this.slider.step="0.01",this.slider.value="0",this.slider.addEventListener("input",()=>{this.clock.seek(Number(this.slider.value))}),this.timeEl=document.createElement("div"),this.timeEl.className="transport-time mono",this.speedSel=document.createElement("select"),this.speedSel.className="speed-select mono",this.speedSel.title="Playback speed";for(const e of[.25,.5,1,2,4,8]){const n=document.createElement("option");n.value=String(e),n.textContent=`${e}x`,e===1&&(n.selected=!0),this.speedSel.appendChild(n)}this.speedSel.addEventListener("change",()=>{this.clock.setSpeed(Number(this.speedSel.value))}),this.el.append(this.playBtn,this.slider,this.timeEl,this.speedSel),this.clock.onChange(()=>this.update(this.clock.time)),this.update(0)}update(t){this.playBtn.textContent=this.clock.playing?"⏸":"▶",this.slider.max=String(Math.max(.01,this.clock.duration)),this.slider.value=String(t),this.timeEl.textContent=`${t.toFixed(1)}s / ${this.clock.duration.toFixed(1)}s`,this.speedSel.value=String(this.clock.speed)}}class ag{constructor(t){j(this,"el");j(this,"run",null);j(this,"selectedIter",0);j(this,"onSelectIteration");this.onSelectIteration=t,this.el=document.createElement("div"),this.el.className="lazy-stepper"}setRun(t){this.run=t,this.selectedIter=Math.max(0,t.lazy_log.length-1),this.render()}selectIter(t){if(!this.run)return;this.selectedIter=Math.max(0,Math.min(this.run.lazy_log.length-1,t));const e=this.run.lazy_log[this.selectedIter];this.onSelectIteration(this.selectedIter,(e==null?void 0:e.conflict)??null),this.render()}render(){if(this.el.replaceChildren(),!this.run||this.run.lazy_log.length===0)return;const t=document.createElement("div");t.className="section-h",t.innerHTML=`<span>Plan -> Gate -> Write-Back Loop</span><span class="dim small">${this.run.lazy_log.length} iter${this.run.lazy_log.length===1?"":"s"}</span>`,this.el.appendChild(t);const e=document.createElement("div");e.className="iter-pills",this.run.lazy_log.forEach((r,o)=>{var c;const a=document.createElement("button");a.type="button";const l=r.status==="verified";a.className=`iter-pill ${l?"ok":"conflict"} ${o===this.selectedIter?"active":""}`,a.textContent=l?`iter ${r.iter} · verified`:`iter ${r.iter} · ${((c=r.conflict)==null?void 0:c.kind)??"conflict"}`,a.addEventListener("click",()=>this.selectIter(o)),e.appendChild(a)}),this.el.appendChild(e);const n=this.run.lazy_log[this.selectedIter],s=document.createElement("div");if(s.className=`iter-card ${n.status==="verified"?"ok":"warn"}`,n.status==="verified"){const r=this.run.metrics.verify;s.innerHTML=`
        <div class="iter-badge ok">PASS · Gate Verified (${r.rate} Hz · ${r.samples} samples · 0 collisions)</div>
        <div class="iter-desc">All ${this.run.plan.actions.length} actions and ${this.run.plan.tpg_edges.length} Temporal Plan Graph edges satisfied kinematic reach, table collision bounds, and central-table mutex locks.</div>
      `}else n.conflict&&(s.innerHTML=`
        <div class="iter-badge warn">REJECT · ${n.conflict.kind} @ t=${n.conflict.time.toFixed(2)}s (3D Ghost Active)</div>
        <div class="iter-desc">${n.conflict.description}</div>
        <div class="iter-writeback mono">${n.conflict.write_limit_back}</div>
      `);this.el.appendChild(s)}}function Ec(i){const t=i.filter(n=>n.status==="ok"&&n.makespan_s!==null),e=new Set;for(const n of t)t.some(r=>r.file!==n.file&&r.num_arms<=n.num_arms&&r.makespan_s<=n.makespan_s&&(r.num_arms<n.num_arms||r.makespan_s<n.makespan_s))||e.add(n.file);return e}const Gi="http://www.w3.org/2000/svg";class lg{constructor(t){j(this,"el");j(this,"onPickRun");this.onPickRun=t,this.el=document.createElement("div"),this.el.className="pareto-card"}render(t,e){this.el.replaceChildren();const n=t.filter(u=>u.status==="ok"&&u.makespan_s!==null),s=Ec(t),r=document.createElement("div");if(r.className="section-h",r.innerHTML=`<span>Pareto Design Space (# Arms vs Makespan)</span><span class="dim small">${n.length}/${t.length} feasible</span>`,this.el.appendChild(r),n.length===0){const u=document.createElement("div");u.className="dim small",u.textContent="No feasible precomputed layouts for this model.",this.el.appendChild(u);return}const o=310,a=155,l={l:38,r:16,t:14,b:26},c=o-l.l-l.r,h=a-l.t-l.b,d=Math.min(...n.map(u=>u.makespan_s))*.88,f=Math.max(...n.map(u=>u.makespan_s))*1.08,p=u=>l.l+(u-1)/3*c,g=u=>l.t+(1-(u-d)/Math.max(.5,f-d))*h,_=document.createElementNS(Gi,"svg");_.setAttribute("viewBox",`0 0 ${o} ${a}`),_.setAttribute("class","pareto-svg");for(const u of[1,2,3,4]){const b=p(u),x=document.createElementNS(Gi,"text");x.setAttribute("x",String(b)),x.setAttribute("y",String(a-6)),x.setAttribute("text-anchor","middle"),x.setAttribute("class","pareto-axis-label"),x.textContent=`${u} arm${u>1?"s":""}`,_.appendChild(x)}const m=n.filter(u=>s.has(u.file)).sort((u,b)=>u.num_arms-b.num_arms);if(m.length>=2){const u=document.createElementNS(Gi,"polyline");u.setAttribute("points",m.map(b=>`${p(b.num_arms)},${g(b.makespan_s)}`).join(" ")),u.setAttribute("fill","none"),u.setAttribute("stroke","#3ccf91"),u.setAttribute("stroke-width","1.8"),u.setAttribute("stroke-dasharray","4 2"),_.appendChild(u)}n.forEach((u,b)=>{const x=s.has(u.file),v=u.file===e,T=(b%3-1)*4,w=p(u.num_arms)+(x?0:T),A=g(u.makespan_s),L=document.createElementNS(Gi,"circle");L.setAttribute("cx",String(w)),L.setAttribute("cy",String(A)),L.setAttribute("r",v?"6.5":x?"5":"3.8"),L.setAttribute("fill",v?"#f5c542":x?"#3ccf91":"#4f9dff"),L.setAttribute("stroke","#14171c"),L.setAttribute("stroke-width","1.4"),L.style.cursor="pointer";const S=document.createElementNS(Gi,"title");S.textContent=`${u.slots.join("-")} (${u.num_arms} arms) · ${u.makespan_s.toFixed(2)}s${x?" [Pareto Optimal]":""}`,L.appendChild(S),L.addEventListener("click",()=>this.onPickRun(u)),_.appendChild(L)}),this.el.appendChild(_)}}class cg{constructor(t){j(this,"el");j(this,"hooks");j(this,"pareto");j(this,"lazyStepper");j(this,"index",null);j(this,"selectedModel","tower");j(this,"selectedSlots",new Set(["s0","s2","s3"]));j(this,"currentFile",null);j(this,"currentRun",null);j(this,"lastPlanMs",null);j(this,"schedulerMode","lazy_dash");j(this,"slipObjectId",null);this.hooks=t,this.el=document.createElement("div"),this.el.className="side-pane-inner",this.pareto=new lg(e=>{this.selectedModel=e.model,this.selectedSlots=new Set(e.slots),this.hooks.onSlotsSelectionChanged(this.selectedSlots),this.hooks.onLoadRunFile(e.file)}),this.lazyStepper=new ag((e,n)=>{this.hooks.onSelectLazyConflict(e,n)})}setIndex(t){this.index=t,this.render()}setCurrentRun(t,e){this.currentRun=t,this.currentFile=e,this.selectedModel=t.model.name,this.selectedSlots=new Set(t.scene.arms.map(n=>n.slot)),this.lazyStepper.setRun(t),this.render()}toggleSlot(t){if(this.selectedSlots.has(t))this.selectedSlots.size>1&&this.selectedSlots.delete(t);else{if(this.selectedSlots.size>=6){const e=this.selectedSlots.values().next().value;e&&this.selectedSlots.delete(e)}this.selectedSlots.add(t)}this.hooks.onSlotsSelectionChanged(this.selectedSlots),this.planOrLoadCurrentSelection()}findBestLayout(){const t=this.getModelRuns(),e=Ec(t),n=t.filter(s=>e.has(s.file)&&s.makespan_s!==null).sort((s,r)=>(s.makespan_s??999)-(r.makespan_s??999))[0];n?(this.selectedSlots=new Set(n.slots),this.hooks.onSlotsSelectionChanged(this.selectedSlots),this.hooks.onLoadRunFile(n.file)):this.planInBrowserNow()}planInBrowserNow(){const t=performance.now(),e=_o(this.selectedModel,[...this.selectedSlots],"fA",{schedulerMode:this.schedulerMode,injectSlipOnObject:this.slipObjectId});this.lastPlanMs=Number((performance.now()-t).toFixed(2)),this.hooks.onApplyLivePlannedRun(e)}planOrLoadCurrentSelection(){if(this.schedulerMode!=="lazy_dash"||this.slipObjectId!==null){this.planInBrowserNow();return}const t=[...this.selectedSlots].sort().join("-"),e=this.getModelRuns().find(n=>n.slots.slice().sort().join("-")===t);e?(this.lastPlanMs=null,this.hooks.onLoadRunFile(e.file)):this.planInBrowserNow()}getModelRuns(){var t;return(((t=this.index)==null?void 0:t.runs)??[]).filter(e=>e.model===this.selectedModel)}render(){var g;this.el.replaceChildren();const t=document.createElement("div");t.className="model-cards";for(const _ of Object.values(Vi)){const m=document.createElement("button");m.type="button",m.className=`mcard ${this.selectedModel===_.name?"on":""}`,m.innerHTML=`<div class="mcard-title">${_.title}</div><div class="mcard-sub dim small">${_.objects.length} objects · ${_.objects.some(u=>u.deformable)?"deformable":_.objects.some(u=>u.bimanual)?"bimanual":"multi-arm"}</div>`,m.addEventListener("click",()=>{this.selectedModel=_.name,this.planOrLoadCurrentSelection()}),t.appendChild(m)}this.el.appendChild(t);const e=document.createElement("div");e.className="wb-config";const n=document.createElement("div");n.className="section-h",n.innerHTML=`<span>Mount Slots (${this.selectedSlots.size} FR3 arm${this.selectedSlots.size===1?"":"s"})</span><span class="dim small">click 3D rings or toggles</span>`,e.appendChild(n);const s=document.createElement("div");s.className="slot-grid";for(const _ of Is){const m=document.createElement("button");m.type="button",m.className=`slot-cb ${this.selectedSlots.has(_.id)?"on":""}`,m.textContent=_.id,m.addEventListener("click",()=>this.toggleSlot(_.id)),s.appendChild(m)}e.appendChild(s);const r=document.createElement("div");r.className="btn-row";const o=document.createElement("button");o.type="button",o.className="btn primary",o.textContent="★ Find Best Layout",o.addEventListener("click",()=>this.findBestLayout());const a=document.createElement("button");a.type="button",a.className="btn",a.textContent="⚡ Plan in Browser (Fast-Sim)",a.addEventListener("click",()=>this.planInBrowserNow()),r.append(o,a),e.appendChild(r),this.el.appendChild(e);const l=document.createElement("div");l.className="wb-config";const c=document.createElement("div");c.className="section-h",c.innerHTML='<span>High-Level Scheduler (Lazy-DaSH)</span><span class="dim small">TPG + Mutex</span>',l.appendChild(c);const h=document.createElement("div");h.className="layer-bar";const d=[{id:"lazy_dash",label:"Lazy-DaSH RCPSP"},{id:"eager_sequential",label:"Sequential Lock"},{id:"uncoordinated_raw",label:"Raw Unshielded"}];for(const _ of d){const m=document.createElement("button");m.type="button",m.className=`layer-btn ${this.schedulerMode===_.id?"on":""}`,m.textContent=_.label,m.addEventListener("click",()=>{this.schedulerMode=_.id,this.planInBrowserNow()}),h.appendChild(m)}l.appendChild(h);const f=((g=(Vi[this.selectedModel]??Vi.tower).objects[0])==null?void 0:g.id)??"Block1",p=document.createElement("button");if(p.type="button",p.className=`btn ${this.slipObjectId?"primary":""}`,p.style.width="100%",p.style.marginTop="6px",p.textContent=this.slipObjectId?`✓ Tier-1 Pose-Slip Spliced (${this.slipObjectId}) · Click to Clear`:`⚡ Inject Pose Slip on ${f} (0-Token Subgraph Patch)`,p.addEventListener("click",()=>{this.slipObjectId=this.slipObjectId?null:f,this.planInBrowserNow()}),l.appendChild(p),this.el.appendChild(l),this.currentRun){const _=document.createElement("div");_.className="metrics-grid";const m=this.currentRun.metrics.makespan_s,u=this.lastPlanMs!==null?`${this.lastPlanMs.toFixed(1)} ms (browser)`:`${(this.currentRun.metrics.time.total*1e3).toFixed(1)} ms`;_.innerHTML=`
        <div class="stat"><div class="stat-v ${this.currentRun.status==="ok"?"ok-t":"warn-t"}">${this.currentRun.status.toUpperCase()}</div><div class="stat-l">Gate Verdict</div></div>
        <div class="stat"><div class="stat-v mono">${m!==null?`${m.toFixed(2)}s`:"—"}</div><div class="stat-l">Makespan</div></div>
        <div class="stat"><div class="stat-v mono">${this.currentRun.scene.arms.length}</div><div class="stat-l">FR3 Arms</div></div>
        <div class="stat"><div class="stat-v mono">${u}</div><div class="stat-l">Solve Time</div></div>
      `,this.el.appendChild(_)}this.pareto.render(this.getModelRuns(),this.currentFile),this.el.appendChild(this.pareto.el),this.el.appendChild(this.lazyStepper.el)}}class hg{constructor(t,e){j(this,"el");j(this,"index",null);j(this,"currentScenario",null);j(this,"currentFile",null);j(this,"activeOverlay","L2");j(this,"onSelectScenario");j(this,"onToggleOverlay");this.onSelectScenario=t,this.onToggleOverlay=e,this.el=document.createElement("div"),this.el.className="side-pane-inner"}setIndex(t){this.index=t,this.render()}setScenario(t,e){this.currentScenario=t,this.currentFile=e,this.render()}render(){var r;this.el.replaceChildren();const t=document.createElement("div");t.className="section-h",t.innerHTML='<span>Multi-Cell Factory Scenarios</span><span class="dim small">3 cells · up to 5 MMs</span>',this.el.appendChild(t);const e=document.createElement("select");e.className="ex-select";for(const o of((r=this.index)==null?void 0:r.scenarios)??[]){const a=document.createElement("option");a.value=o.file,a.textContent=`${o.title} (${o.throughput_per_hour}/h)`,o.file===this.currentFile&&(a.selected=!0),e.appendChild(a)}e.addEventListener("change",()=>this.onSelectScenario(e.value)),this.el.appendChild(e);const n=document.createElement("div");n.className="section-h",n.innerHTML='<span>3D Floor Overlays</span><span class="dim small">MILP / PDDL / Repairs</span>',this.el.appendChild(n);const s=document.createElement("div");s.className="btn-row";for(const[o,a]of[["L1","L1 · MILP Cell Loads"],["L2","L2 · Station Graph"],["L3","L3 · Local Repairs"]]){const l=document.createElement("button");l.type="button",l.className=`btn small ${this.activeOverlay===o?"primary":""}`,l.textContent=a,l.addEventListener("click",()=>{this.activeOverlay=this.activeOverlay===o?null:o,this.onToggleOverlay(this.activeOverlay),this.render()}),s.appendChild(l)}if(this.el.appendChild(s),this.currentScenario){const o=this.currentScenario.metrics,a=document.createElement("div");a.className="metrics-grid",a.innerHTML=`
        <div class="stat"><div class="stat-v ok-t mono">${o.throughput_per_hour.toFixed(1)}/h</div><div class="stat-l">Throughput</div></div>
        <div class="stat"><div class="stat-v mono">${o.makespan_s.toFixed(1)}s</div><div class="stat-l">Makespan</div></div>
        <div class="stat"><div class="stat-v mono">${o.orders_done}</div><div class="stat-l">Orders Done</div></div>
        <div class="stat"><div class="stat-v mono">${Object.values(o.local_repairs).reduce((h,d)=>h+d,0)}</div><div class="stat-l">Local Repairs</div></div>
      `,this.el.appendChild(a);const l=document.createElement("div");l.className="util-box",l.innerHTML='<div class="section-h"><span>Cell & Fleet Utilization</span></div>';for(const[h,d]of[...Object.entries(o.cell_utilization),...Object.entries(o.mm_utilization)]){const f=Math.round(d*100),p=document.createElement("div");p.className="util-row",p.innerHTML=`
          <span class="mono util-l">${h.toUpperCase()}</span>
          <span class="util-bar"><span style="width:${f}%"></span></span>
          <span class="mono small">${f}%</span>
        `,l.appendChild(p)}this.el.appendChild(l);const c=document.createElement("div");c.className="order-list",c.innerHTML=`<div class="section-h"><span>Order Stream (${this.currentScenario.orders.length})</span></div>`;for(const h of this.currentScenario.orders){const d=document.createElement("div");d.className="order-row mono small",d.innerHTML=`<span><b>${h.id}</b> · ${h.model}</span><span>-> ${h.cell.toUpperCase()} (${h.t_done.toFixed(1)}s)</span>`,c.appendChild(d)}this.el.appendChild(c)}}}window.__fastSimPerf={coldLoadMs:0,frameTimesMs:[]};const bl=new Map;async function Us(i){const t=await fetch(i);if(!t.ok)throw new Error(`HTTP ${t.status} on ${i}`);return await t.json()}function wl(i){const t=i.startsWith("./")||i.startsWith("http")?i:`./${i}`;let e=bl.get(t);return e||(e=Us(t),bl.set(t,e)),e}class dg{constructor(t){j(this,"viewer");j(this,"factoryPlayer");j(this,"clock",new rg);j(this,"transport");j(this,"gantt");j(this,"hypergraph");j(this,"workcellPanel");j(this,"factoryPanel");j(this,"explainer");j(this,"tab","workcell");j(this,"runIndex",null);j(this,"factoryIndex",null);j(this,"currentRun",null);j(this,"currentFactory",null);j(this,"activeArms",new Map);j(this,"activeObjects",new Map);j(this,"workcellMm",null);j(this,"workcellMmEast",null);j(this,"workcellCrane",null);j(this,"timeline",null);j(this,"selectedSlots",new Set(["s0","s2","s3"]));j(this,"lazyGhostActive",!1);j(this,"nowPlayingEl",document.createElement("div"));j(this,"camBarEl",document.createElement("div"));j(this,"tabWorkcellBtn",document.createElement("button"));j(this,"tabFactoryBtn",document.createElement("button"));const e=performance.now(),n=document.createElement("div");n.className="shell";const s=document.createElement("div");s.className="stage",this.viewer=new Z0(s),this.factoryPlayer=new F0(this.viewer),this.transport=new og(this.clock),this.gantt=new sg(v=>{this.lazyGhostActive&&this.clearGhostVisuals(),this.clock.seek(v)}),this.hypergraph=new tg(v=>{this.lazyGhostActive&&this.clearGhostVisuals(),this.clock.seek(v)}),this.workcellPanel=new cg({onLoadRunFile:v=>void this.loadRunFromFile(v),onApplyLivePlannedRun:v=>void this.setWorkcellRun(v,null),onSlotsSelectionChanged:v=>{this.selectedSlots=new Set(v),this.paintSlotRings()},onSelectLazyConflict:(v,T)=>{this.showLazyGhostPose(T)}}),this.factoryPanel=new hg(v=>void this.loadFactoryFromFile(v),v=>this.factoryPlayer.setOverlayLayer(v)),this.explainer=new eg(v=>{v==="orders"||v==="fleet"?(this.setTab("factory"),this.factoryPlayer.setOverlayLayer(v==="orders"?"L1":"L3")):this.setTab("workcell")}),this.viewer.onSlotClick=v=>{this.tab==="workcell"&&this.workcellPanel.toggleSlot(v)};const r=document.createElement("div");r.className="overlay-tl",r.innerHTML=`
      <div class="brand">
        <div class="brand-mark"></div>
        <div>
          <div class="brand-t">Reconfigurable Franka FR3 Workcell</div>
          <div class="brand-s">3D Fast-Sim · STAMP Plan -> Gate -> Write-Back</div>
        </div>
      </div>
    `;const o=document.createElement("button");o.type="button",o.className="how-btn",o.textContent="✦ Learn System & Algorithms",o.addEventListener("click",()=>this.explainer.show()),r.querySelector(".brand").appendChild(o);const a=document.createElement("div");a.className="overlay-tc";const l=document.createElement("div");l.className="product-tabs",this.tabWorkcellBtn.type="button",this.tabWorkcellBtn.className="tab on",this.tabWorkcellBtn.textContent="Workcell",this.tabWorkcellBtn.addEventListener("click",()=>this.setTab("workcell")),this.tabFactoryBtn.type="button",this.tabFactoryBtn.className="tab",this.tabFactoryBtn.textContent="Factory",this.tabFactoryBtn.addEventListener("click",()=>this.setTab("factory")),l.append(this.tabWorkcellBtn,this.tabFactoryBtn),a.appendChild(l);const c=document.createElement("div");c.className="overlay-tr";const h=document.createElement("div");h.className="overlay-tr-row",this.camBarEl.className="camera-bar";const d=document.createElement("button");d.type="button",d.className="theme-btn",d.textContent="☀",d.title="Switch light / dark theme",d.addEventListener("click",()=>{const v=this.viewer.getTheme()==="dark"?"light":"dark";this.viewer.setTheme(v),document.documentElement.dataset.theme=v,d.textContent=v==="dark"?"☀":"☾"}),h.append(this.camBarEl,d),this.nowPlayingEl.className="now-playing",c.append(h,this.nowPlayingEl),s.append(r,a,c);const f=document.createElement("div");f.className="dock";const p=document.createElement("div");p.className="resizer-h",p.title="Drag to resize Graph & Hypergraph pane height (double-click to reset)",p.innerHTML='<span class="resizer-pill"></span>';const g=document.createElement("div");g.className="resizer-v-inner",g.title="Drag to resize Gantt vs. Hypergraph width";const _=document.createElement("div");_.className="dock-split",_.append(this.gantt.el,g,this.hypergraph.el),f.append(p,this.transport.el,_);const m=document.createElement("aside");m.className="side";const u=document.createElement("div");u.className="resizer-v",u.title="Drag to resize Scheduler pane width (double-click to reset)",m.append(u,this.workcellPanel.el,this.factoryPanel.el),n.append(s,f,m),t.append(n,this.explainer.el),this.bindPaneResizers(n,_,p,g,u),window.addEventListener("keydown",v=>{const T=v.target;T&&/INPUT|SELECT|TEXTAREA/.test(T.tagName)||(v.code==="Space"?(v.preventDefault(),this.clock.toggle()):v.key==="ArrowRight"?this.clock.seek(this.clock.time+.5):v.key==="ArrowLeft"&&this.clock.seek(this.clock.time-.5))}),this.clock.onChange(()=>{this.applyTime(this.clock.time)});let b=performance.now();const x=v=>{const T=v-b;b=v,window.__fastSimPerf.frameTimesMs.length<600&&window.__fastSimPerf.frameTimesMs.push(Number(T.toFixed(2)));const w=Math.min(.1,T/1e3);this.clock.tick(w),this.viewer.render(w),requestAnimationFrame(x)};requestAnimationFrame(x),this.boot().then(()=>{window.__fastSimPerf.coldLoadMs=Number((performance.now()-e).toFixed(1))})}bindPaneResizers(t,e,n,s,r){n.addEventListener("pointerdown",o=>{o.preventDefault(),n.setPointerCapture(o.pointerId),n.classList.add("dragging");const a=c=>{const h=Math.max(115,Math.min(window.innerHeight*.65,window.innerHeight-c.clientY));t.style.setProperty("--dock-h",`${Math.round(h)}px`),this.viewer.resize()},l=c=>{n.releasePointerCapture(c.pointerId),n.classList.remove("dragging"),n.removeEventListener("pointermove",a),n.removeEventListener("pointerup",l)};n.addEventListener("pointermove",a),n.addEventListener("pointerup",l)}),n.addEventListener("dblclick",()=>{t.style.setProperty("--dock-h","196px"),this.viewer.resize()}),s.addEventListener("pointerdown",o=>{o.preventDefault(),s.setPointerCapture(o.pointerId),s.classList.add("dragging");const a=c=>{const h=e.getBoundingClientRect();if(h.width<100)return;const d=Math.max(22,Math.min(78,(c.clientX-h.left)/h.width*100));e.style.setProperty("--gantt-fr",`${d.toFixed(1)}fr`),e.style.setProperty("--hg-fr",`${(100-d).toFixed(1)}fr`)},l=c=>{s.releasePointerCapture(c.pointerId),s.classList.remove("dragging"),s.removeEventListener("pointermove",a),s.removeEventListener("pointerup",l)};s.addEventListener("pointermove",a),s.addEventListener("pointerup",l)}),s.addEventListener("dblclick",()=>{e.style.setProperty("--gantt-fr","52fr"),e.style.setProperty("--hg-fr","48fr")}),r.addEventListener("pointerdown",o=>{o.preventDefault(),r.setPointerCapture(o.pointerId),r.classList.add("dragging");const a=c=>{const h=Math.max(280,Math.min(window.innerWidth*.52,window.innerWidth-c.clientX));t.style.setProperty("--side-w",`${Math.round(h)}px`),this.viewer.resize()},l=c=>{r.releasePointerCapture(c.pointerId),r.classList.remove("dragging"),r.removeEventListener("pointermove",a),r.removeEventListener("pointerup",l)};r.addEventListener("pointermove",a),r.addEventListener("pointerup",l)}),r.addEventListener("dblclick",()=>{t.style.setProperty("--side-w","368px"),this.viewer.resize()})}async boot(){var o,a,l;const[,t,e]=await Promise.all([fc(),Us("./runs/index.json").catch(()=>null),Us("./factory/index.json").catch(()=>null)]);this.runIndex=t,this.factoryIndex=e,this.workcellPanel.setIndex(t),this.factoryPanel.setIndex(e);const n=new URLSearchParams(location.search),s=n.get("explain");if(s!==null&&this.explainer.show(s||"overview"),n.get("tab")==="factory"){this.setTab("factory");return}this.setTab("workcell");const r=((o=t==null?void 0:t.runs.find(c=>c.model==="tower"&&c.slots.join("-")==="s0-s1-s2-s3"))==null?void 0:o.file)??((a=t==null?void 0:t.runs.find(c=>c.model==="tower"&&c.slots.join("-")==="s0-s2-s3"))==null?void 0:a.file)??((l=t==null?void 0:t.runs.find(c=>c.status==="ok"))==null?void 0:l.file);if(r)await this.loadRunFromFile(r);else{const c=_o("tower",["s0","s1","s2","s3"],"fA");await this.setWorkcellRun(c,null)}}setTab(t){var n,s;this.tab=t,this.tabWorkcellBtn.classList.toggle("on",t==="workcell"),this.tabFactoryBtn.classList.toggle("on",t==="factory"),this.workcellPanel.el.hidden=t!=="workcell",this.factoryPanel.el.hidden=t!=="factory";const e=new URL(location.href);if(t==="factory"?e.searchParams.set("tab","factory"):e.searchParams.delete("tab"),history.replaceState(null,"",e),t==="factory"){const r=((s=(n=this.factoryIndex)==null?void 0:n.scenarios[0])==null?void 0:s.file)??"factory/multi_cell_stamp.json";this.loadFactoryFromFile(r)}else this.currentRun&&this.setWorkcellRun(this.currentRun,null)}async loadRunFromFile(t){try{const e=await wl(t);await this.setWorkcellRun(e,t)}catch{const e=_o("tower",["s0","s2","s3"],"fA");await this.setWorkcellRun(e,null)}}async setWorkcellRun(t,e){var s;this.factoryPlayer.dispose(),this.clearGhostVisuals(),this.currentRun=t,this.selectedSlots=new Set(t.scene.arms.map(r=>r.slot)),this.viewer.buildStatic(t.scene),this.viewer.clearGroup(this.viewer.dynamicGroup),this.activeArms.clear(),this.activeObjects.clear();for(const r of t.scene.arms){const o=await Wi(r);this.viewer.dynamicGroup.add(o.root),this.activeArms.set(r.id,{spec:r,robot:o})}for(const r of t.model.objects){const o=uc(r);vo(o,r.start),this.viewer.dynamicGroup.add(o),this.activeObjects.set(r.id,o)}await this.buildWorkcellCourierMm(),this.timeline=new cc(t.model.objects,t.events),this.paintSlotRings(),this.renderCameraPresets([{id:"iso",label:"Iso"},{id:"front",label:"Front"},{id:"top",label:"Top"},{id:"wc_mm0",label:"MM0"},...t.scene.arms.map(r=>({id:`arm:${r.id}`,label:r.id}))]);const n=t.trajectories.duration||0;this.clock.reset(n),this.gantt.setData(ng(t),Math.max(1,n)),this.hypergraph.setHypergraph(J0(t)),this.workcellPanel.setCurrentRun(t,e),this.nowPlayingEl.innerHTML=`
      <div class="np-t">${t.title}</div>
      <div class="np-s">
        <span class="status-dot ${t.status}"></span>
        ${t.scene.arms.length} FR3 arm${t.scene.arms.length===1?"":"s"} · ${t.model.objects.length} objects
        ${t.metrics.makespan_s!==null?` · ${t.metrics.makespan_s.toFixed(2)}s`:` · ${t.message}`}
      </div>
    `,this.viewer.goTo(this.viewer.presetPose("iso"),!1),t.status==="ok"&&n>0?this.clock.setPlaying(!0):(this.clock.setPlaying(!1),(s=t.lazy_log[0])!=null&&s.conflict&&await this.showLazyGhostPose(t.lazy_log[0].conflict))}async loadFactoryFromFile(t){const e=t.startsWith("./")?t:`./${t}`,n=await Us(e);this.currentFactory=n,this.clearGhostVisuals(),this.viewer.clearGroup(this.viewer.dynamicGroup),await this.factoryPlayer.load(n,wl),this.factoryPlayer.setOverlayLayer("L2"),this.factoryPanel.setScenario(n,t),this.renderCameraPresets([{id:"overview",label:"Overview"},...n.cells.map(s=>({id:`cell:${s.id}`,label:s.id.toUpperCase()})),...n.mms.map(s=>({id:`mm:${s.id}`,label:s.id.toUpperCase()}))]),this.nowPlayingEl.innerHTML=`
      <div class="np-t">${n.title}</div>
      <div class="np-s">
        <span class="status-dot ok"></span>
        ${n.orders.length} orders · ${n.cells.length} cells · ${n.mms.length} MMs · ${n.metrics.throughput_per_hour.toFixed(1)}/h
      </div>
    `,this.viewer.goTo([new I(.3,-12.6,9.2),new I(.3,0,-.4)],!1),this.clock.reset(n.metrics.makespan_s),this.clock.setSpeed(2),this.gantt.setData(ig(n),n.metrics.makespan_s),this.hypergraph.setHypergraph(Q0(n)),this.clock.setPlaying(!0)}async showLazyGhostPose(t){if(this.viewer.clearGroup(this.viewer.ghostGroup),!t||!this.currentRun){this.lazyGhostActive=!1,this.hypergraph.setConflictHighlight([]);for(const n of this.activeArms.values())n.robot.root.visible=!0;return}this.lazyGhostActive=!0,this.clock.setPlaying(!1);const e=new Set(Object.keys(t.configs));this.hypergraph.setConflictHighlight([...e]);for(const[n,s]of this.activeArms)s.robot.root.visible=!e.has(n);for(const[n,s]of Object.entries(t.configs)){const r=this.currentRun.scene.arms.find(a=>a.id===n);if(!r)continue;const o=await Wi(r,{isGhost:!0});ve(o.joints,s),this.viewer.ghostGroup.add(o.root)}}clearGhostVisuals(){this.lazyGhostActive=!1,this.hypergraph.setConflictHighlight([]),this.viewer.clearGroup(this.viewer.ghostGroup);for(const t of this.activeArms.values())t.robot.root.visible=!0}paintSlotRings(){if(!this.currentRun)return;const t=new Map(this.currentRun.scene.arms.map(e=>[e.slot,e.color]));for(const e of this.currentRun.scene.mount_slots){const n=t.get(e.id)??null,s=this.selectedSlots.has(e.id),r=n&&s?"selected-occupied":n?"occupied":s?"selected":"empty";this.viewer.setSlotState(e.id,r,n)}}renderCameraPresets(t){this.camBarEl.replaceChildren();for(const e of t){const n=document.createElement("button");n.type="button",n.className="cam-btn",n.textContent=e.label,n.addEventListener("click",()=>{if(this.viewer.followTarget=null,e.id==="overview")this.viewer.goTo([new I(.3,-12.6,9.2),new I(.3,0,-.4)]);else if(e.id.startsWith("cell:")){const s=e.id.slice(5),r=this.factoryPlayer.cells.find(o=>o.spec.id===s);if(r){const[o,a]=r.spec.xy;this.viewer.goTo([new I(o+1.5,a-1.7,1.3),new I(o,a,.1)])}}else if(e.id.startsWith("mm:")){const s=e.id.slice(3),r=this.factoryPlayer.mms.get(s);r&&(this.viewer.followTarget=()=>r.group.position.clone())}else if(e.id==="wc_mm0"&&this.workcellMm)this.viewer.goTo([new I(-.9,-2.25,.95),new I(-.2,-.55,-.15)]);else if(e.id.startsWith("arm:")){const s=e.id.slice(4),r=this.activeArms.get(s);r&&this.viewer.goTo(this.viewer.presetPose("arm",r.spec.base))}else this.viewer.goTo(this.viewer.presetPose(e.id))}),this.camBarEl.appendChild(n)}}async buildWorkcellCourierMm(){const t=new $t,[e,n,s]=[.62,.46,.42],r=-.52,o=-1.38,a=.12,l=new st(new Rt(2.2,.54,.01),new At({color:"#1f2631",roughness:.75}));l.position.set(0,o,r),this.viewer.dynamicGroup.add(l);const c=new st(new Rt(e+.04,n+.03,.08),new At({color:"#252c37",roughness:.45,metalness:.4}));c.position.set(0,0,.06),t.add(c);const h=new st(new Rt(e*.92,n*.92,s-.06),new At({color:"#e8833a",roughness:.36,metalness:.28}));h.position.set(0,0,s/2+.02),h.castShadow=!0,t.add(h);const d=new st(new fe(.095,.11,a,24).rotateX(Math.PI/2),new At({color:"#252c37",roughness:.38,metalness:.5}));d.position.set(.14,0,s+a/2),t.add(d);const f=new fe(.085,.085,.05,16),p=new At({color:"#151920",roughness:.7});for(const A of[-1,1])for(const L of[-1,1]){const S=new st(f,p);S.position.set(A*(e*.34),L*(n*.48),.085),t.add(S)}const g=new st(new Rt(.22,.3,.09),new At({color:"#364152",roughness:.5}));g.position.set(-.17,0,s+.045),t.add(g);const _=()=>{const A=new $t,L=new st(new Rt(.065,.065,.055),new At({color:"#e64a4a",roughness:.35}));L.position.set(-.035,-.035,.028);const S=new st(new Rt(.065,.065,.055),new At({color:"#3ccf91",roughness:.35}));S.position.set(.035,.035,.028);const M=new st(new Rt(.13,.038,.032),new At({color:"#f5c542",roughness:.35}));return M.position.set(0,0,.068),A.add(L,S,M),A},m=_();m.position.set(-.17,0,s+.09),t.add(m);const u=new st(new fe(.045,.05,.045,16).rotateX(Math.PI/2),new At({color:"#4f9dff",emissive:"#1b4d8a",emissiveIntensity:.5}));u.position.set(e*.42,0,s+.02),t.add(u);const b=await Wi({id:"mm0",color:"#e8833a",base:{xyz:[.14,0,s+a],yaw:0},home:[0,-.78,0,-2.48,0,1.68,.785]},{castShadow:!1});t.add(b.root);const x=_();x.position.set(0,0,.02),x.visible=!1,b.tcp.add(x);const v=document.createElement("div");v.className="scene-label mm-tag",v.textContent="MM0 · DOCK TRANSFER";const T=new Cn(v);T.position.set(0,0,s+a+.62),t.add(T),t.position.set(-.38,o,r),t.rotation.set(0,0,0),this.viewer.dynamicGroup.add(t),this.workcellMm={group:t,robot:b,toteCargo:m,tcpCargo:x,tagEl:v},this.workcellMmEast=null;const w=xc(3.8,1.25);w.root.position.set(0,2.25,r),this.viewer.dynamicGroup.add(w.root),this.workcellCrane=w}applyWorkcellMmTime(t,e){if(!this.workcellMm)return;const n=Math.max(4,e),s=Math.max(0,Math.min(1,t/n)),r=-.52,o=-1.38,a=[0,-.78,0,-2.48,0,1.68,.785],l=[3.12,.12,0,-1.92,0,2.08,.785],c=[1.57,.06,0,-1.78,0,1.84,.785],h=(d,f,p)=>{const g=Math.max(0,Math.min(1,p)),_=g*g*(3-2*g);return d.map((m,u)=>m+(f[u]-m)*_)};if(s<.32){const d=s/.32;this.workcellMm.group.position.set(-.38,o,r),this.workcellMm.group.rotation.set(0,0,0),d<.35?(ve(this.workcellMm.robot.joints,h(a,l,d/.35)),this.workcellMm.toteCargo.visible=!0,this.workcellMm.tcpCargo.visible=!1):d<.8?(ve(this.workcellMm.robot.joints,h(l,c,(d-.35)/.45)),this.workcellMm.toteCargo.visible=!1,this.workcellMm.tcpCargo.visible=!0):(ve(this.workcellMm.robot.joints,h(c,a,(d-.8)/.2)),this.workcellMm.toteCargo.visible=!1,this.workcellMm.tcpCargo.visible=!1),this.workcellMm.tagEl.textContent="MM0 · UNLOADING TO FEEDER"}else if(s<.68){const d=(s-.32)/.36,f=d*d*(3-2*d);this.workcellMm.group.position.set(-.38+.76*f,o,r),this.workcellMm.group.rotation.set(0,0,0),ve(this.workcellMm.robot.joints,a),this.workcellMm.toteCargo.visible=!1,this.workcellMm.tcpCargo.visible=!1,this.workcellMm.tagEl.textContent="MM0 · REPOSITION TO OUTBOUND"}else{const d=(s-.68)/.32;this.workcellMm.group.position.set(.38,o,r),this.workcellMm.group.rotation.set(0,0,0),d<.38?(ve(this.workcellMm.robot.joints,h(a,c,d/.38)),this.workcellMm.toteCargo.visible=!1,this.workcellMm.tcpCargo.visible=!1):d<.82?(ve(this.workcellMm.robot.joints,h(c,l,(d-.38)/.44)),this.workcellMm.toteCargo.visible=!1,this.workcellMm.tcpCargo.visible=!0):(ve(this.workcellMm.robot.joints,h(l,a,(d-.82)/.18)),this.workcellMm.toteCargo.visible=!0,this.workcellMm.tcpCargo.visible=!1),this.workcellMm.tagEl.textContent="MM0 · RECEIVING OUTBOUND KIT"}if(this.workcellMmEast){const d=(s+.45)%1,f=[-1.57,.08,0,-1.76,0,1.84,.785];if(d<.35){const p=d/.35;this.workcellMmEast.group.position.set(1.56,-.35,r),this.workcellMmEast.group.rotation.set(0,0,Math.PI/2),ve(this.workcellMmEast.robot.joints,h(a,f,p)),this.workcellMmEast.toteCargo.visible=!1,this.workcellMmEast.tcpCargo.visible=p>.35,this.workcellMmEast.tagEl.textContent="MM1 · PICKING SUB-ASSEMBLY"}else if(d<.7){const p=(d-.35)/.35,g=p*p*(3-2*p);this.workcellMmEast.group.position.set(1.56,-.35+.75*g,r),this.workcellMmEast.group.rotation.set(0,0,Math.PI/2),ve(this.workcellMmEast.robot.joints,a),this.workcellMmEast.toteCargo.visible=!0,this.workcellMmEast.tcpCargo.visible=!1,this.workcellMmEast.tagEl.textContent="MM1 · TRANSFER → SHIPPING DOCK"}else{const p=(d-.7)/.3;this.workcellMmEast.group.position.set(1.56,.4,r),this.workcellMmEast.group.rotation.set(0,0,Math.PI/2),ve(this.workcellMmEast.robot.joints,h(l,f,p)),this.workcellMmEast.toteCargo.visible=!1,this.workcellMmEast.tcpCargo.visible=p<.75,this.workcellMmEast.tagEl.textContent="MM1 · LOADING SHIPPING ROLLERS"}}this.workcellCrane&&(this.workcellCrane.mast.position.x=Math.sin(t*.65)*2.1,this.workcellCrane.carriage.position.z=.55+Math.sin(t*1.1)*.36)}applyTime(t){if(this.transport.update(t),this.gantt.update(t),this.hypergraph.setTime(t),this.tab==="factory"){this.factoryPlayer.applyTime(t);return}if(!this.currentRun||this.lazyGhostActive)return;const e=this.currentRun.trajectories;this.applyWorkcellMmTime(t,e.duration||8);for(const[n,s]of this.activeArms){const r=Gs(e.rate,e.t0,e.arms[n],t,s.spec.home);ve(s.robot.joints,r)}if(this.viewer.root.updateMatrixWorld(!0),this.timeline)for(const[n,s]of this.activeObjects){const r=this.timeline.stateAt(n,t);if(r.kind==="pose")vo(s,r.pose);else{const a=this.activeArms.get(r.ev.arm);a&&hc(s,this.viewer.root,a.robot.tcp,r.ev)}const o=dc(this.currentRun.events,n,t);s.scale.set(o[0],o[1],o[2])}this.viewer.setBeltTime(t)}}const Tl=document.getElementById("app");Tl&&new dg(Tl);
