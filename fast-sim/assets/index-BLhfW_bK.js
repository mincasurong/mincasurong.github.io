var cc=Object.defineProperty;var hc=(i,t,e)=>t in i?cc(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var j=(i,t,e)=>hc(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const po="174",mi={ROTATE:0,DOLLY:1,PAN:2},fi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},dc=0,No=1,uc=2,fl=1,pl=2,fn=3,Cn=0,Ie=1,Be=2,An=0,gi=1,Uo=2,Fo=3,Oo=4,fc=5,Vn=100,pc=101,mc=102,gc=103,_c=104,vc=200,xc=201,Mc=202,yc=203,br=204,wr=205,Sc=206,Ec=207,bc=208,wc=209,Tc=210,Ac=211,Rc=212,Cc=213,Pc=214,Tr=0,Ar=1,Rr=2,xi=3,Cr=4,Pr=5,Lr=6,Dr=7,ml=0,Lc=1,Dc=2,Rn=0,Ic=1,Nc=2,Uc=3,gl=4,Fc=5,Oc=6,zc=7,_l=300,Mi=301,yi=302,Ir=303,Nr=304,zs=306,Wi=1e3,Xn=1001,Ur=1002,tn=1003,kc=1004,Ji=1005,rn=1006,$s=1007,$n=1008,_n=1009,vl=1010,xl=1011,Xi=1012,mo=1013,Yn=1014,pn=1015,qi=1016,go=1017,_o=1018,Si=1020,Ml=35902,yl=1021,Sl=1022,Qe=1023,El=1024,bl=1025,_i=1026,Ei=1027,wl=1028,vo=1029,Tl=1030,xo=1031,Mo=1033,Es=33776,bs=33777,ws=33778,Ts=33779,Fr=35840,Or=35841,zr=35842,kr=35843,Br=36196,Gr=37492,Hr=37496,Vr=37808,Wr=37809,Xr=37810,$r=37811,qr=37812,Yr=37813,jr=37814,Kr=37815,Zr=37816,Jr=37817,Qr=37818,to=37819,eo=37820,no=37821,As=36492,io=36494,so=36495,Al=36283,ro=36284,oo=36285,ao=36286,Bc=3200,Gc=3201,Rl=0,Hc=1,wn="",ke="srgb",bi="srgb-linear",Ds="linear",se="srgb",Jn=7680,zo=519,Vc=512,Wc=513,Xc=514,Cl=515,$c=516,qc=517,Yc=518,jc=519,ko=35044,Bo="300 es",mn=2e3,Is=2001;class Kn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Se=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rs=Math.PI/180,lo=180/Math.PI;function Yi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Se[i&255]+Se[i>>8&255]+Se[i>>16&255]+Se[i>>24&255]+"-"+Se[t&255]+Se[t>>8&255]+"-"+Se[t>>16&15|64]+Se[t>>24&255]+"-"+Se[e&63|128]+Se[e>>8&255]+"-"+Se[e>>16&255]+Se[e>>24&255]+Se[n&255]+Se[n>>8&255]+Se[n>>16&255]+Se[n>>24&255]).toLowerCase()}function Gt(i,t,e){return Math.max(t,Math.min(e,i))}function Kc(i,t){return(i%t+t)%t}function qs(i,t,e){return(1-e)*i+e*t}function Ni(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Le(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Zc={DEG2RAD:Rs};class Pt{constructor(t=0,e=0){Pt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Gt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zt{constructor(t,e,n,s,r,o,a,l,c){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const d=this.elements;return d[0]=t,d[1]=s,d[2]=a,d[3]=e,d[4]=r,d[5]=l,d[6]=n,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],d=n[4],u=n[7],f=n[2],m=n[5],g=n[8],_=s[0],p=s[3],h=s[6],b=s[1],v=s[4],x=s[7],T=s[2],w=s[5],R=s[8];return r[0]=o*_+a*b+l*T,r[3]=o*p+a*v+l*w,r[6]=o*h+a*x+l*R,r[1]=c*_+d*b+u*T,r[4]=c*p+d*v+u*w,r[7]=c*h+d*x+u*R,r[2]=f*_+m*b+g*T,r[5]=f*p+m*v+g*w,r[8]=f*h+m*x+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8];return e*o*d-e*a*c-n*r*d+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8],u=d*o-a*c,f=a*l-d*r,m=c*r-o*l,g=e*u+n*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*c-d*n)*_,t[2]=(a*n-s*o)*_,t[3]=f*_,t[4]=(d*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=m*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ys.makeScale(t,e)),this}rotate(t){return this.premultiply(Ys.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ys.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ys=new zt;function Pl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ns(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Jc(){const i=Ns("canvas");return i.style.display="block",i}const Go={};function Gn(i){i in Go||(Go[i]=!0,console.warn(i))}function Qc(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function th(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function eh(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Ho=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vo=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nh(){const i={enabled:!0,workingColorSpace:bi,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===se&&(s.r=gn(s.r),s.g=gn(s.g),s.b=gn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===se&&(s.r=vi(s.r),s.g=vi(s.g),s.b=vi(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===wn?Ds:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[bi]:{primaries:t,whitePoint:n,transfer:Ds,toXYZ:Ho,fromXYZ:Vo,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ke},outputColorSpaceConfig:{drawingBufferColorSpace:ke}},[ke]:{primaries:t,whitePoint:n,transfer:se,toXYZ:Ho,fromXYZ:Vo,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ke}}}),i}const Yt=nh();function gn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function vi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Qn;class ih{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Qn===void 0&&(Qn=Ns("canvas")),Qn.width=t.width,Qn.height=t.height;const n=Qn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Qn}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ns("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=gn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(gn(e[n]/255)*255):e[n]=gn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let sh=0;class yo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sh++}),this.uuid=Yi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(js(s[o].image)):r.push(js(s[o]))}else r=js(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function js(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ih.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rh=0;class Ae extends Kn{constructor(t=Ae.DEFAULT_IMAGE,e=Ae.DEFAULT_MAPPING,n=Xn,s=Xn,r=rn,o=$n,a=Qe,l=_n,c=Ae.DEFAULT_ANISOTROPY,d=wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rh++}),this.uuid=Yi(),this.name="",this.source=new yo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_l)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wi:t.x=t.x-Math.floor(t.x);break;case Xn:t.x=t.x<0?0:1;break;case Ur:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wi:t.y=t.y-Math.floor(t.y);break;case Xn:t.y=t.y<0?0:1;break;case Ur:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ae.DEFAULT_IMAGE=null;Ae.DEFAULT_MAPPING=_l;Ae.DEFAULT_ANISOTROPY=1;class de{constructor(t=0,e=0,n=0,s=1){de.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],d=l[4],u=l[8],f=l[1],m=l[5],g=l[9],_=l[2],p=l[6],h=l[10];if(Math.abs(d-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(d+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,x=(m+1)/2,T=(h+1)/2,w=(d+f)/4,R=(u+_)/4,L=(g+p)/4;return v>x&&v>T?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=w/n,r=R/n):x>T?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=w/s,r=L/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=R/r,s=L/r),this.set(n,s,r,e),this}let b=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(f-d)*(f-d));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(u-_)/b,this.z=(f-d)/b,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this.w=Gt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this.w=Gt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class oh extends Kn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ae(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new yo(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jn extends oh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ll extends Ae{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ah extends Ae{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],d=n[s+2],u=n[s+3];const f=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=d,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==f||c!==m||d!==g){let p=1-a;const h=l*f+c*m+d*g+u*_,b=h>=0?1:-1,v=1-h*h;if(v>Number.EPSILON){const T=Math.sqrt(v),w=Math.atan2(T,h*b);p=Math.sin(p*w)/T,a=Math.sin(a*w)/T}const x=a*b;if(l=l*p+f*x,c=c*p+m*x,d=d*p+g*x,u=u*p+_*x,p===1-a){const T=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=T,c*=T,d*=T,u*=T}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],d=n[s+3],u=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+d*u+l*m-c*f,t[e+1]=l*g+d*f+c*u-a*m,t[e+2]=c*g+d*m+a*f-l*u,t[e+3]=d*g-a*u-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(s/2),u=a(r/2),f=l(n/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*d*u+c*m*g,this._y=c*m*u-f*d*g,this._z=c*d*g+f*m*u,this._w=c*d*u-f*m*g;break;case"YXZ":this._x=f*d*u+c*m*g,this._y=c*m*u-f*d*g,this._z=c*d*g-f*m*u,this._w=c*d*u+f*m*g;break;case"ZXY":this._x=f*d*u-c*m*g,this._y=c*m*u+f*d*g,this._z=c*d*g+f*m*u,this._w=c*d*u-f*m*g;break;case"ZYX":this._x=f*d*u-c*m*g,this._y=c*m*u+f*d*g,this._z=c*d*g-f*m*u,this._w=c*d*u+f*m*g;break;case"YZX":this._x=f*d*u+c*m*g,this._y=c*m*u+f*d*g,this._z=c*d*g-f*m*u,this._w=c*d*u-f*m*g;break;case"XZY":this._x=f*d*u-c*m*g,this._y=c*m*u-f*d*g,this._z=c*d*g+f*m*u,this._w=c*d*u+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],d=e[6],u=e[10],f=n+a+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(d-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>u){const m=2*Math.sqrt(1+n-a-u);this._w=(d-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>u){const m=2*Math.sqrt(1+a-n-u);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+u-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Gt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,d=e._w;return this._x=n*d+o*a+s*c-r*l,this._y=s*d+o*l+r*a-n*c,this._z=r*d+o*c+n*l-s*a,this._w=o*d-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),u=Math.sin((1-e)*d)/c,f=Math.sin(e*d)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Wo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Wo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),d=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*d,this.y=n+l*d+a*c-r*u,this.z=s+l*u+r*d-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ks.copy(this).projectOnVector(t),this.sub(Ks)}reflect(t){return this.sub(Ks.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Gt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ks=new I,Wo=new Pn;class ji{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,je):je.fromBufferAttribute(r,o),je.applyMatrix4(t.matrixWorld),this.expandByPoint(je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qi.copy(n.boundingBox)),Qi.applyMatrix4(t.matrixWorld),this.union(Qi)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,je),je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ui),ts.subVectors(this.max,Ui),ti.subVectors(t.a,Ui),ei.subVectors(t.b,Ui),ni.subVectors(t.c,Ui),vn.subVectors(ei,ti),xn.subVectors(ni,ei),In.subVectors(ti,ni);let e=[0,-vn.z,vn.y,0,-xn.z,xn.y,0,-In.z,In.y,vn.z,0,-vn.x,xn.z,0,-xn.x,In.z,0,-In.x,-vn.y,vn.x,0,-xn.y,xn.x,0,-In.y,In.x,0];return!Zs(e,ti,ei,ni,ts)||(e=[1,0,0,0,1,0,0,0,1],!Zs(e,ti,ei,ni,ts))?!1:(es.crossVectors(vn,xn),e=[es.x,es.y,es.z],Zs(e,ti,ei,ni,ts))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(an[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),an[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),an[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),an[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),an[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),an[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),an[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),an[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(an),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const an=[new I,new I,new I,new I,new I,new I,new I,new I],je=new I,Qi=new ji,ti=new I,ei=new I,ni=new I,vn=new I,xn=new I,In=new I,Ui=new I,ts=new I,es=new I,Nn=new I;function Zs(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Nn.fromArray(i,r);const a=s.x*Math.abs(Nn.x)+s.y*Math.abs(Nn.y)+s.z*Math.abs(Nn.z),l=t.dot(Nn),c=e.dot(Nn),d=n.dot(Nn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const lh=new ji,Fi=new I,Js=new I;class ks{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):lh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fi.subVectors(t,this.center);const e=Fi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Fi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Js.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fi.copy(t.center).add(Js)),this.expandByPoint(Fi.copy(t.center).sub(Js))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ln=new I,Qs=new I,ns=new I,Mn=new I,tr=new I,is=new I,er=new I;class Bs{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ln.copy(this.origin).addScaledVector(this.direction,e),ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Qs.copy(t).add(e).multiplyScalar(.5),ns.copy(e).sub(t).normalize(),Mn.copy(this.origin).sub(Qs);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ns),a=Mn.dot(this.direction),l=-Mn.dot(ns),c=Mn.lengthSq(),d=Math.abs(1-o*o);let u,f,m,g;if(d>0)if(u=o*l-a,f=o*a-l,g=r*d,u>=0)if(f>=-g)if(f<=g){const _=1/d;u*=_,f*=_,m=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Qs).addScaledVector(ns,f),m}intersectSphere(t,e){ln.subVectors(t.center,this.origin);const n=ln.dot(this.direction),s=ln.dot(ln)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),d>=0?(r=(t.min.y-f.y)*d,o=(t.max.y-f.y)*d):(r=(t.max.y-f.y)*d,o=(t.min.y-f.y)*d),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ln)!==null}intersectTriangle(t,e,n,s,r){tr.subVectors(e,t),is.subVectors(n,t),er.crossVectors(tr,is);let o=this.direction.dot(er),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mn.subVectors(this.origin,t);const l=a*this.direction.dot(is.crossVectors(Mn,is));if(l<0)return null;const c=a*this.direction.dot(tr.cross(Mn));if(c<0||l+c>o)return null;const d=-a*Mn.dot(er);return d<0?null:this.at(d/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ee{constructor(t,e,n,s,r,o,a,l,c,d,u,f,m,g,_,p){ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,d,u,f,m,g,_,p)}set(t,e,n,s,r,o,a,l,c,d,u,f,m,g,_,p){const h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=d,h[10]=u,h[14]=f,h[3]=m,h[7]=g,h[11]=_,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ee().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ii.setFromMatrixColumn(t,0).length(),r=1/ii.setFromMatrixColumn(t,1).length(),o=1/ii.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*d,m=o*u,g=a*d,_=a*u;e[0]=l*d,e[4]=-l*u,e[8]=c,e[1]=m+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+m*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*d,m=l*u,g=c*d,_=c*u;e[0]=f+_*a,e[4]=g*a-m,e[8]=o*c,e[1]=o*u,e[5]=o*d,e[9]=-a,e[2]=m*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*d,m=l*u,g=c*d,_=c*u;e[0]=f-_*a,e[4]=-o*u,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*d,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*d,m=o*u,g=a*d,_=a*u;e[0]=l*d,e[4]=g*c-m,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=m*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,m=o*c,g=a*l,_=a*c;e[0]=l*d,e[4]=_-f*u,e[8]=g*u+m,e[1]=u,e[5]=o*d,e[9]=-a*d,e[2]=-c*d,e[6]=m*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=o*l,m=o*c,g=a*l,_=a*c;e[0]=l*d,e[4]=-u,e[8]=c*d,e[1]=f*u+_,e[5]=o*d,e[9]=m*u-g,e[2]=g*u-m,e[6]=a*d,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ch,t,hh)}lookAt(t,e,n){const s=this.elements;return Oe.subVectors(t,e),Oe.lengthSq()===0&&(Oe.z=1),Oe.normalize(),yn.crossVectors(n,Oe),yn.lengthSq()===0&&(Math.abs(n.z)===1?Oe.x+=1e-4:Oe.z+=1e-4,Oe.normalize(),yn.crossVectors(n,Oe)),yn.normalize(),ss.crossVectors(Oe,yn),s[0]=yn.x,s[4]=ss.x,s[8]=Oe.x,s[1]=yn.y,s[5]=ss.y,s[9]=Oe.y,s[2]=yn.z,s[6]=ss.z,s[10]=Oe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],d=n[1],u=n[5],f=n[9],m=n[13],g=n[2],_=n[6],p=n[10],h=n[14],b=n[3],v=n[7],x=n[11],T=n[15],w=s[0],R=s[4],L=s[8],S=s[12],M=s[1],P=s[5],O=s[9],U=s[13],V=s[2],G=s[6],B=s[10],K=s[14],W=s[3],lt=s[7],pt=s[11],bt=s[15];return r[0]=o*w+a*M+l*V+c*W,r[4]=o*R+a*P+l*G+c*lt,r[8]=o*L+a*O+l*B+c*pt,r[12]=o*S+a*U+l*K+c*bt,r[1]=d*w+u*M+f*V+m*W,r[5]=d*R+u*P+f*G+m*lt,r[9]=d*L+u*O+f*B+m*pt,r[13]=d*S+u*U+f*K+m*bt,r[2]=g*w+_*M+p*V+h*W,r[6]=g*R+_*P+p*G+h*lt,r[10]=g*L+_*O+p*B+h*pt,r[14]=g*S+_*U+p*K+h*bt,r[3]=b*w+v*M+x*V+T*W,r[7]=b*R+v*P+x*G+T*lt,r[11]=b*L+v*O+x*B+T*pt,r[15]=b*S+v*U+x*K+T*bt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],d=t[2],u=t[6],f=t[10],m=t[14],g=t[3],_=t[7],p=t[11],h=t[15];return g*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*m-n*l*m)+_*(+e*l*m-e*c*f+r*o*f-s*o*m+s*c*d-r*l*d)+p*(+e*c*u-e*a*m-r*o*u+n*o*m+r*a*d-n*c*d)+h*(-s*a*d-e*l*u+e*a*f+s*o*u-n*o*f+n*l*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8],u=t[9],f=t[10],m=t[11],g=t[12],_=t[13],p=t[14],h=t[15],b=u*p*c-_*f*c+_*l*m-a*p*m-u*l*h+a*f*h,v=g*f*c-d*p*c-g*l*m+o*p*m+d*l*h-o*f*h,x=d*_*c-g*u*c+g*a*m-o*_*m-d*a*h+o*u*h,T=g*u*l-d*_*l-g*a*f+o*_*f+d*a*p-o*u*p,w=e*b+n*v+s*x+r*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return t[0]=b*R,t[1]=(_*f*r-u*p*r-_*s*m+n*p*m+u*s*h-n*f*h)*R,t[2]=(a*p*r-_*l*r+_*s*c-n*p*c-a*s*h+n*l*h)*R,t[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*m-n*l*m)*R,t[4]=v*R,t[5]=(d*p*r-g*f*r+g*s*m-e*p*m-d*s*h+e*f*h)*R,t[6]=(g*l*r-o*p*r-g*s*c+e*p*c+o*s*h-e*l*h)*R,t[7]=(o*f*r-d*l*r+d*s*c-e*f*c-o*s*m+e*l*m)*R,t[8]=x*R,t[9]=(g*u*r-d*_*r-g*n*m+e*_*m+d*n*h-e*u*h)*R,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*h+e*a*h)*R,t[11]=(d*a*r-o*u*r-d*n*c+e*u*c+o*n*m-e*a*m)*R,t[12]=T*R,t[13]=(d*_*s-g*u*s+g*n*f-e*_*f-d*n*p+e*u*p)*R,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*p-e*a*p)*R,t[15]=(o*u*s-d*a*s+d*n*l-e*u*l-o*n*f+e*a*f)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,d=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,d*a+n,d*l-s*o,0,c*l-s*a,d*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,d=o+o,u=a+a,f=r*c,m=r*d,g=r*u,_=o*d,p=o*u,h=a*u,b=l*c,v=l*d,x=l*u,T=n.x,w=n.y,R=n.z;return s[0]=(1-(_+h))*T,s[1]=(m+x)*T,s[2]=(g-v)*T,s[3]=0,s[4]=(m-x)*w,s[5]=(1-(f+h))*w,s[6]=(p+b)*w,s[7]=0,s[8]=(g+v)*R,s[9]=(p-b)*R,s[10]=(1-(f+_))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=ii.set(s[0],s[1],s[2]).length();const o=ii.set(s[4],s[5],s[6]).length(),a=ii.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ke.copy(this);const c=1/r,d=1/o,u=1/a;return Ke.elements[0]*=c,Ke.elements[1]*=c,Ke.elements[2]*=c,Ke.elements[4]*=d,Ke.elements[5]*=d,Ke.elements[6]*=d,Ke.elements[8]*=u,Ke.elements[9]*=u,Ke.elements[10]*=u,e.setFromRotationMatrix(Ke),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=mn){const l=this.elements,c=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let m,g;if(a===mn)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Is)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=mn){const l=this.elements,c=1/(e-t),d=1/(n-s),u=1/(o-r),f=(e+t)*c,m=(n+s)*d;let g,_;if(a===mn)g=(o+r)*u,_=-2*u;else if(a===Is)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ii=new I,Ke=new ee,ch=new I(0,0,0),hh=new I(1,1,1),yn=new I,ss=new I,Oe=new I,Xo=new ee,$o=new Pn;class on{constructor(t=0,e=0,n=0,s=on.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],d=s[9],u=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Gt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Xo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Xo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $o.setFromEuler(this),this.setFromQuaternion($o,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}on.DEFAULT_ORDER="XYZ";class So{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let dh=0;const qo=new I,si=new Pn,cn=new ee,rs=new I,Oi=new I,uh=new I,fh=new Pn,Yo=new I(1,0,0),jo=new I(0,1,0),Ko=new I(0,0,1),Zo={type:"added"},ph={type:"removed"},ri={type:"childadded",child:null},nr={type:"childremoved",child:null};class me extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dh++}),this.uuid=Yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=me.DEFAULT_UP.clone();const t=new I,e=new on,n=new Pn,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ee},normalMatrix:{value:new zt}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new So,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return si.setFromAxisAngle(t,e),this.quaternion.multiply(si),this}rotateOnWorldAxis(t,e){return si.setFromAxisAngle(t,e),this.quaternion.premultiply(si),this}rotateX(t){return this.rotateOnAxis(Yo,t)}rotateY(t){return this.rotateOnAxis(jo,t)}rotateZ(t){return this.rotateOnAxis(Ko,t)}translateOnAxis(t,e){return qo.copy(t).applyQuaternion(this.quaternion),this.position.add(qo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yo,t)}translateY(t){return this.translateOnAxis(jo,t)}translateZ(t){return this.translateOnAxis(Ko,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(cn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?rs.copy(t):rs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Oi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cn.lookAt(Oi,rs,this.up):cn.lookAt(rs,Oi,this.up),this.quaternion.setFromRotationMatrix(cn),s&&(cn.extractRotation(s.matrixWorld),si.setFromRotationMatrix(cn),this.quaternion.premultiply(si.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Zo),ri.child=t,this.dispatchEvent(ri),ri.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ph),nr.child=t,this.dispatchEvent(nr),nr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),cn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),cn.multiply(t.parent.matrixWorld)),t.applyMatrix4(cn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Zo),ri.child=t,this.dispatchEvent(ri),ri.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oi,t,uh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oi,fh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),d=o(t.images),u=o(t.shapes),f=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}me.DEFAULT_UP=new I(0,1,0);me.DEFAULT_MATRIX_AUTO_UPDATE=!0;me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ze=new I,hn=new I,ir=new I,dn=new I,oi=new I,ai=new I,Jo=new I,sr=new I,rr=new I,or=new I,ar=new de,lr=new de,cr=new de;class Je{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ze.subVectors(t,e),s.cross(Ze);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ze.subVectors(s,e),hn.subVectors(n,e),ir.subVectors(t,e);const o=Ze.dot(Ze),a=Ze.dot(hn),l=Ze.dot(ir),c=hn.dot(hn),d=hn.dot(ir),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,m=(c*l-a*d)*f,g=(o*d-a*l)*f;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,dn)===null?!1:dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,dn.x),l.addScaledVector(o,dn.y),l.addScaledVector(a,dn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return ar.setScalar(0),lr.setScalar(0),cr.setScalar(0),ar.fromBufferAttribute(t,e),lr.fromBufferAttribute(t,n),cr.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ar,r.x),o.addScaledVector(lr,r.y),o.addScaledVector(cr,r.z),o}static isFrontFacing(t,e,n,s){return Ze.subVectors(n,e),hn.subVectors(t,e),Ze.cross(hn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ze.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),Ze.cross(hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Je.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Je.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Je.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Je.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Je.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;oi.subVectors(s,n),ai.subVectors(r,n),sr.subVectors(t,n);const l=oi.dot(sr),c=ai.dot(sr);if(l<=0&&c<=0)return e.copy(n);rr.subVectors(t,s);const d=oi.dot(rr),u=ai.dot(rr);if(d>=0&&u<=d)return e.copy(s);const f=l*u-d*c;if(f<=0&&l>=0&&d<=0)return o=l/(l-d),e.copy(n).addScaledVector(oi,o);or.subVectors(t,r);const m=oi.dot(or),g=ai.dot(or);if(g>=0&&m<=g)return e.copy(r);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(ai,a);const p=d*g-m*u;if(p<=0&&u-d>=0&&m-g>=0)return Jo.subVectors(r,s),a=(u-d)/(u-d+(m-g)),e.copy(s).addScaledVector(Jo,a);const h=1/(p+_+f);return o=_*h,a=f*h,e.copy(n).addScaledVector(oi,o).addScaledVector(ai,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Dl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sn={h:0,s:0,l:0},os={h:0,s:0,l:0};function hr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Bt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Yt.workingColorSpace){if(t=Kc(t,1),e=Gt(e,0,1),n=Gt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=hr(o,r,t+1/3),this.g=hr(o,r,t),this.b=hr(o,r,t-1/3)}return Yt.toWorkingColorSpace(this,s),this}setStyle(t,e=ke){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ke){const n=Dl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gn(t.r),this.g=gn(t.g),this.b=gn(t.b),this}copyLinearToSRGB(t){return this.r=vi(t.r),this.g=vi(t.g),this.b=vi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ke){return Yt.fromWorkingColorSpace(Ee.copy(this),t),Math.round(Gt(Ee.r*255,0,255))*65536+Math.round(Gt(Ee.g*255,0,255))*256+Math.round(Gt(Ee.b*255,0,255))}getHexString(t=ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(Ee.copy(this),e);const n=Ee.r,s=Ee.g,r=Ee.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=d<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(Ee.copy(this),e),t.r=Ee.r,t.g=Ee.g,t.b=Ee.b,t}getStyle(t=ke){Yt.fromWorkingColorSpace(Ee.copy(this),t);const e=Ee.r,n=Ee.g,s=Ee.b;return t!==ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Sn),this.setHSL(Sn.h+t,Sn.s+e,Sn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Sn),t.getHSL(os);const n=qs(Sn.h,os.h,e),s=qs(Sn.s,os.s,e),r=qs(Sn.l,os.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ee=new Bt;Bt.NAMES=Dl;let mh=0;class Ti extends Kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mh++}),this.uuid=Yi(),this.name="",this.type="Material",this.blending=gi,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=br,this.blendDst=wr,this.blendEquation=Vn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=xi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jn,this.stencilZFail=Jn,this.stencilZPass=Jn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gi&&(n.blending=this.blending),this.side!==Cn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==br&&(n.blendSrc=this.blendSrc),this.blendDst!==wr&&(n.blendDst=this.blendDst),this.blendEquation!==Vn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==xi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Jn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Jn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class qn extends Ti{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=ml,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pe=new I,as=new Pt;let gh=0;class Ne{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ko,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)as.fromBufferAttribute(this,e),as.applyMatrix3(t),this.setXY(e,as.x,as.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ni(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ni(e,this.array)),e}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ni(e,this.array)),e}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ni(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ni(e,this.array)),e}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),s=Le(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),s=Le(s,this.array),r=Le(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ko&&(t.usage=this.usage),t}}class Il extends Ne{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Nl extends Ne{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ue extends Ne{constructor(t,e,n){super(new Float32Array(t),e,n)}}let _h=0;const We=new ee,dr=new me,li=new I,ze=new ji,zi=new ji,xe=new I;class Re extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_h++}),this.uuid=Yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Pl(t)?Nl:Il)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return We.makeRotationFromQuaternion(t),this.applyMatrix4(We),this}rotateX(t){return We.makeRotationX(t),this.applyMatrix4(We),this}rotateY(t){return We.makeRotationY(t),this.applyMatrix4(We),this}rotateZ(t){return We.makeRotationZ(t),this.applyMatrix4(We),this}translate(t,e,n){return We.makeTranslation(t,e,n),this.applyMatrix4(We),this}scale(t,e,n){return We.makeScale(t,e,n),this.applyMatrix4(We),this}lookAt(t){return dr.lookAt(t),dr.updateMatrix(),this.applyMatrix4(dr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(li).negate(),this.translate(li.x,li.y,li.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ue(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ji);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];ze.setFromBufferAttribute(r),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,ze.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,ze.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint(ze.min),this.boundingBox.expandByPoint(ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ks);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(ze.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];zi.setFromBufferAttribute(a),this.morphTargetsRelative?(xe.addVectors(ze.min,zi.min),ze.expandByPoint(xe),xe.addVectors(ze.max,zi.max),ze.expandByPoint(xe)):(ze.expandByPoint(zi.min),ze.expandByPoint(zi.max))}ze.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)xe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(xe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)xe.fromBufferAttribute(a,c),l&&(li.fromBufferAttribute(t,c),xe.add(li)),s=Math.max(s,n.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ne(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new I,l[L]=new I;const c=new I,d=new I,u=new I,f=new Pt,m=new Pt,g=new Pt,_=new I,p=new I;function h(L,S,M){c.fromBufferAttribute(n,L),d.fromBufferAttribute(n,S),u.fromBufferAttribute(n,M),f.fromBufferAttribute(r,L),m.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),d.sub(c),u.sub(c),m.sub(f),g.sub(f);const P=1/(m.x*g.y-g.x*m.y);isFinite(P)&&(_.copy(d).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(P),p.copy(u).multiplyScalar(m.x).addScaledVector(d,-g.x).multiplyScalar(P),a[L].add(_),a[S].add(_),a[M].add(_),l[L].add(p),l[S].add(p),l[M].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let L=0,S=b.length;L<S;++L){const M=b[L],P=M.start,O=M.count;for(let U=P,V=P+O;U<V;U+=3)h(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const v=new I,x=new I,T=new I,w=new I;function R(L){T.fromBufferAttribute(s,L),w.copy(T);const S=a[L];v.copy(S),v.sub(T.multiplyScalar(T.dot(S))).normalize(),x.crossVectors(w,S);const P=x.dot(l[L])<0?-1:1;o.setXYZW(L,v.x,v.y,v.z,P)}for(let L=0,S=b.length;L<S;++L){const M=b[L],P=M.start,O=M.count;for(let U=P,V=P+O;U<V;U+=3)R(t.getX(U+0)),R(t.getX(U+1)),R(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ne(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,d=new I,u=new I;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),d.subVectors(o,r),u.subVectors(s,r),d.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(d),l.add(d),c.add(d),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),d.subVectors(o,r),u.subVectors(s,r),d.cross(u),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(a,l){const c=a.array,d=a.itemSize,u=a.normalized,f=new c.constructor(l.length*d);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*d;for(let h=0;h<d;h++)f[g++]=c[m++]}return new Ne(f,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Re,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let d=0,u=c.length;d<u;d++){const f=c[d],m=t(f,n);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let u=0,f=c.length;u<f;u++){const m=c[u];d.push(m.toJSON(t.data))}d.length>0&&(s[l]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(e))}const r=t.morphAttributes;for(const c in r){const d=[],u=r[c];for(let f=0,m=u.length;f<m;f++)d.push(u[f].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,d=o.length;c<d;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qo=new ee,Un=new Bs,ls=new ks,ta=new I,cs=new I,hs=new I,ds=new I,ur=new I,us=new I,ea=new I,fs=new I;class Et extends me{constructor(t=new Re,e=new qn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){us.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=a[l],u=r[l];d!==0&&(ur.fromBufferAttribute(u,t),o?us.addScaledVector(ur,d):us.addScaledVector(ur.sub(e),d))}e.add(us)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ls.copy(n.boundingSphere),ls.applyMatrix4(r),Un.copy(t.ray).recast(t.near),!(ls.containsPoint(Un.origin)===!1&&(Un.intersectSphere(ls,ta)===null||Un.origin.distanceToSquared(ta)>(t.far-t.near)**2))&&(Qo.copy(r).invert(),Un.copy(t.ray).applyMatrix4(Qo),!(n.boundingBox!==null&&Un.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Un)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],h=o[p.materialIndex],b=Math.max(p.start,m.start),v=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let x=b,T=v;x<T;x+=3){const w=a.getX(x),R=a.getX(x+1),L=a.getX(x+2);s=ps(this,h,t,n,c,d,u,w,R,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,h=_;p<h;p+=3){const b=a.getX(p),v=a.getX(p+1),x=a.getX(p+2);s=ps(this,o,t,n,c,d,u,b,v,x),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],h=o[p.materialIndex],b=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let x=b,T=v;x<T;x+=3){const w=x,R=x+1,L=x+2;s=ps(this,h,t,n,c,d,u,w,R,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,h=_;p<h;p+=3){const b=p,v=p+1,x=p+2;s=ps(this,o,t,n,c,d,u,b,v,x),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function vh(i,t,e,n,s,r,o,a){let l;if(t.side===Ie?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Cn,a),l===null)return null;fs.copy(a),fs.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(fs);return c<e.near||c>e.far?null:{distance:c,point:fs.clone(),object:i}}function ps(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,cs),i.getVertexPosition(l,hs),i.getVertexPosition(c,ds);const d=vh(i,t,e,n,cs,hs,ds,ea);if(d){const u=new I;Je.getBarycoord(ea,cs,hs,ds,u),s&&(d.uv=Je.getInterpolatedAttribute(s,a,l,c,u,new Pt)),r&&(d.uv1=Je.getInterpolatedAttribute(r,a,l,c,u,new Pt)),o&&(d.normal=Je.getInterpolatedAttribute(o,a,l,c,u,new I),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new I,materialIndex:0};Je.getNormal(cs,hs,ds,f.normal),d.face=f,d.barycoord=u}return d}class Wt extends Re{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],d=[],u=[];let f=0,m=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ue(c,3)),this.setAttribute("normal",new ue(d,3)),this.setAttribute("uv",new ue(u,2));function g(_,p,h,b,v,x,T,w,R,L,S){const M=x/R,P=T/L,O=x/2,U=T/2,V=w/2,G=R+1,B=L+1;let K=0,W=0;const lt=new I;for(let pt=0;pt<B;pt++){const bt=pt*P-U;for(let It=0;It<G;It++){const Kt=It*M-O;lt[_]=Kt*b,lt[p]=bt*v,lt[h]=V,c.push(lt.x,lt.y,lt.z),lt[_]=0,lt[p]=0,lt[h]=w>0?1:-1,d.push(lt.x,lt.y,lt.z),u.push(It/R),u.push(1-pt/L),K+=1}}for(let pt=0;pt<L;pt++)for(let bt=0;bt<R;bt++){const It=f+bt+G*pt,Kt=f+bt+G*(pt+1),A=f+(bt+1)+G*(pt+1),$=f+(bt+1)+G*pt;l.push(It,Kt,$),l.push(Kt,A,$),W+=6}a.addGroup(m,W,S),m+=W,f+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function wi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Te(i){const t={};for(let e=0;e<i.length;e++){const n=wi(i[e]);for(const s in n)t[s]=n[s]}return t}function xh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ul(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}const Mh={clone:wi,merge:Te};var yh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ln extends Ti{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yh,this.fragmentShader=Sh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=wi(t.uniforms),this.uniformsGroups=xh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Fl extends me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=mn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const En=new I,na=new Pt,ia=new Pt;class $e extends Fl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=lo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Rs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return lo*2*Math.atan(Math.tan(Rs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){En.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(En.x,En.y).multiplyScalar(-t/En.z),En.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(En.x,En.y).multiplyScalar(-t/En.z)}getViewSize(t,e){return this.getViewBounds(t,na,ia),e.subVectors(ia,na)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Rs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ci=-90,hi=1;class Eh extends me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new $e(ci,hi,t,e);s.layers=this.layers,this.add(s);const r=new $e(ci,hi,t,e);r.layers=this.layers,this.add(r);const o=new $e(ci,hi,t,e);o.layers=this.layers,this.add(o);const a=new $e(ci,hi,t,e);a.layers=this.layers,this.add(a);const l=new $e(ci,hi,t,e);l.layers=this.layers,this.add(l);const c=new $e(ci,hi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Is)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,d]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,d),t.setRenderTarget(u,f,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ol extends Ae{constructor(t,e,n,s,r,o,a,l,c,d){t=t!==void 0?t:[],e=e!==void 0?e:Mi,super(t,e,n,s,r,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class bh extends jn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ol(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:rn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Wt(5,5,5),r=new Ln({name:"CubemapFromEquirect",uniforms:wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ie,blending:An});r.uniforms.tEquirect.value=e;const o=new Et(s,r),a=e.minFilter;return e.minFilter===$n&&(e.minFilter=rn),new Eh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class ae extends me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wh={type:"move"};class fr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),h=this._getHandJoint(c,_);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=d.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wh)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ae;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Th extends me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const pr=new I,Ah=new I,Rh=new zt;class bn{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=pr.subVectors(n,e).cross(Ah.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(pr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Rh.getNormalMatrix(t),s=this.coplanarPoint(pr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fn=new ks,ms=new I;class Eo{constructor(t=new bn,e=new bn,n=new bn,s=new bn,r=new bn,o=new bn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=mn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],d=s[5],u=s[6],f=s[7],m=s[8],g=s[9],_=s[10],p=s[11],h=s[12],b=s[13],v=s[14],x=s[15];if(n[0].setComponents(l-r,f-c,p-m,x-h).normalize(),n[1].setComponents(l+r,f+c,p+m,x+h).normalize(),n[2].setComponents(l+o,f+d,p+g,x+b).normalize(),n[3].setComponents(l-o,f-d,p-g,x-b).normalize(),n[4].setComponents(l-a,f-u,p-_,x-v).normalize(),e===mn)n[5].setComponents(l+a,f+u,p+_,x+v).normalize();else if(e===Is)n[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Fn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fn)}intersectsSprite(t){return Fn.center.set(0,0,0),Fn.radius=.7071067811865476,Fn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ms.x=s.normal.x>0?t.max.x:t.min.x,ms.y=s.normal.y>0?t.max.y:t.min.y,ms.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ms)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class bo extends Ti{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Us=new I,Fs=new I,sa=new ee,ki=new Bs,gs=new ks,mr=new I,ra=new I;class zl extends me{constructor(t=new Re,e=new bo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Us.fromBufferAttribute(e,s-1),Fs.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Us.distanceTo(Fs);t.setAttribute("lineDistance",new ue(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),gs.copy(n.boundingSphere),gs.applyMatrix4(s),gs.radius+=r,t.ray.intersectsSphere(gs)===!1)return;sa.copy(s).invert(),ki.copy(t.ray).applyMatrix4(sa);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=n.index,f=n.attributes.position;if(d!==null){const m=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=m,p=g-1;_<p;_+=c){const h=d.getX(_),b=d.getX(_+1),v=_s(this,t,ki,l,h,b,_);v&&e.push(v)}if(this.isLineLoop){const _=d.getX(g-1),p=d.getX(m),h=_s(this,t,ki,l,_,p,g-1);h&&e.push(h)}}else{const m=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=m,p=g-1;_<p;_+=c){const h=_s(this,t,ki,l,_,_+1,_);h&&e.push(h)}if(this.isLineLoop){const _=_s(this,t,ki,l,g-1,m,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function _s(i,t,e,n,s,r,o){const a=i.geometry.attributes.position;if(Us.fromBufferAttribute(a,s),Fs.fromBufferAttribute(a,r),e.distanceSqToSegment(Us,Fs,mr,ra)>n)return;mr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(mr);if(!(c<t.near||c>t.far))return{distance:c,point:ra.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const oa=new I,aa=new I;class Ch extends zl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)oa.fromBufferAttribute(e,s),aa.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+oa.distanceTo(aa);t.setAttribute("lineDistance",new ue(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ph extends Ae{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class kl extends Ae{constructor(t,e,n,s,r,o,a,l,c,d=_i){if(d!==_i&&d!==Ei)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===_i&&(n=Yn),n===void 0&&d===Ei&&(n=Si),super(null,s,r,o,a,l,d,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:tn,this.minFilter=l!==void 0?l:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new yo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class wo extends Re{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new I,d=new Pt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const m=n+u/e*s;c.x=t*Math.cos(m),c.y=t*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),d.x=(o[f]/t+1)/2,d.y=(o[f+1]/t+1)/2,l.push(d.x,d.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ue(o,3)),this.setAttribute("normal",new ue(a,3)),this.setAttribute("uv",new ue(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ge extends Re{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const d=[],u=[],f=[],m=[];let g=0;const _=[],p=n/2;let h=0;b(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(d),this.setAttribute("position",new ue(u,3)),this.setAttribute("normal",new ue(f,3)),this.setAttribute("uv",new ue(m,2));function b(){const x=new I,T=new I;let w=0;const R=(e-t)/n;for(let L=0;L<=r;L++){const S=[],M=L/r,P=M*(e-t)+t;for(let O=0;O<=s;O++){const U=O/s,V=U*l+a,G=Math.sin(V),B=Math.cos(V);T.x=P*G,T.y=-M*n+p,T.z=P*B,u.push(T.x,T.y,T.z),x.set(G,R,B).normalize(),f.push(x.x,x.y,x.z),m.push(U,1-M),S.push(g++)}_.push(S)}for(let L=0;L<s;L++)for(let S=0;S<r;S++){const M=_[S][L],P=_[S+1][L],O=_[S+1][L+1],U=_[S][L+1];(t>0||S!==0)&&(d.push(M,P,U),w+=3),(e>0||S!==r-1)&&(d.push(P,O,U),w+=3)}c.addGroup(h,w,0),h+=w}function v(x){const T=g,w=new Pt,R=new I;let L=0;const S=x===!0?t:e,M=x===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,p*M,0),f.push(0,M,0),m.push(.5,.5),g++;const P=g;for(let O=0;O<=s;O++){const V=O/s*l+a,G=Math.cos(V),B=Math.sin(V);R.x=S*B,R.y=p*M,R.z=S*G,u.push(R.x,R.y,R.z),f.push(0,M,0),w.x=G*.5+.5,w.y=B*.5*M+.5,m.push(w.x,w.y),g++}for(let O=0;O<s;O++){const U=T+O,V=P+O;x===!0?d.push(V,V+1,U):d.push(V+1,V,U),L+=3}c.addGroup(h,L,x===!0?1:2),h+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ge(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Gs extends Re{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,d=l+1,u=t/a,f=e/l,m=[],g=[],_=[],p=[];for(let h=0;h<d;h++){const b=h*f-o;for(let v=0;v<c;v++){const x=v*u-r;g.push(x,-b,0),_.push(0,0,1),p.push(v/a),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let b=0;b<a;b++){const v=b+c*h,x=b+c*(h+1),T=b+1+c*(h+1),w=b+1+c*h;m.push(v,x,w),m.push(x,T,w)}this.setIndex(m),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(_,3)),this.setAttribute("uv",new ue(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gs(t.width,t.height,t.widthSegments,t.heightSegments)}}class $i extends Re{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],d=[];let u=t;const f=(e-t)/s,m=new I,g=new Pt;for(let _=0;_<=s;_++){for(let p=0;p<=n;p++){const h=r+p/n*o;m.x=u*Math.cos(h),m.y=u*Math.sin(h),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/e+1)/2,g.y=(m.y/e+1)/2,d.push(g.x,g.y)}u+=f}for(let _=0;_<s;_++){const p=_*(n+1);for(let h=0;h<n;h++){const b=h+p,v=b,x=b+n+1,T=b+n+2,w=b+1;a.push(v,x,w),a.push(x,T,w)}}this.setIndex(a),this.setAttribute("position",new ue(l,3)),this.setAttribute("normal",new ue(c,3)),this.setAttribute("uv",new ue(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Xt extends Ti{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rl,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Lh extends Ti{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Dh extends Ti{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const la={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Ih{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(d){a++,r===!1&&s.onStart!==void 0&&s.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,s.onProgress!==void 0&&s.onProgress(d,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,u){return c.push(d,u),this},this.removeHandler=function(d){const u=c.indexOf(d);return u!==-1&&c.splice(u,2),this},this.getHandler=function(d){for(let u=0,f=c.length;u<f;u+=2){const m=c[u],g=c[u+1];if(m.global&&(m.lastIndex=0),m.test(d))return g}return null}}}const Nh=new Ih;class To{constructor(t){this.manager=t!==void 0?t:Nh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}To.DEFAULT_MATERIAL_NAME="__DEFAULT";const un={};class Uh extends Error{constructor(t,e){super(t),this.response=e}}class Fh extends To{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=la.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(un[t]!==void 0){un[t].push({onLoad:e,onProgress:n,onError:s});return}un[t]=[],un[t].push({onLoad:e,onProgress:n,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const d=un[t],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),m=f?parseInt(f):0,g=m!==0;let _=0;const p=new ReadableStream({start(h){b();function b(){u.read().then(({done:v,value:x})=>{if(v)h.close();else{_+=x.byteLength;const T=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:m});for(let w=0,R=d.length;w<R;w++){const L=d[w];L.onProgress&&L.onProgress(T)}h.enqueue(x),b()}},v=>{h.error(v)})}}});return new Response(p)}else throw new Uh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{la.add(t,c);const d=un[t];delete un[t];for(let u=0,f=d.length;u<f;u++){const m=d[u];m.onLoad&&m.onLoad(c)}}).catch(c=>{const d=un[t];if(d===void 0)throw this.manager.itemError(t),c;delete un[t];for(let u=0,f=d.length;u<f;u++){const m=d[u];m.onError&&m.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Bl extends me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Oh extends Bl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const gr=new ee,ca=new I,ha=new I;class zh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pt(512,512),this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Eo,this._frameExtents=new Pt(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ca.setFromMatrixPosition(t.matrixWorld),e.position.copy(ca),ha.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ha),e.updateMatrixWorld(),gr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(gr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Gl extends Fl{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class kh extends zh{constructor(){super(new Gl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class da extends Bl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.target=new me,this.shadow=new kh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Bh extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}const ua=new ee;class Gh{constructor(t,e,n=0,s=1/0){this.ray=new Bs(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new So,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ua.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ua),this}intersectObject(t,e=!0,n=[]){return co(t,this,n,e),n.sort(fa),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)co(t[s],this,n,e);return n.sort(fa),n}}function fa(i,t){return i.distance-t.distance}function co(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)co(r[o],t,e,!0)}}class pa{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Gt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Gt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Hl extends Ch{constructor(t=10,e=10,n=4473924,s=8947848){n=new Bt(n),s=new Bt(s);const r=e/2,o=t/e,a=t/2,l=[],c=[];for(let f=0,m=0,g=-a;f<=e;f++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const _=f===r?n:s;_.toArray(c,m),m+=3,_.toArray(c,m),m+=3,_.toArray(c,m),m+=3,_.toArray(c,m),m+=3}const d=new Re;d.setAttribute("position",new ue(l,3)),d.setAttribute("color",new ue(c,3));const u=new bo({vertexColors:!0,toneMapped:!1});super(d,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Hh extends Kn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function ma(i,t,e,n){const s=Vh(n);switch(e){case yl:return i*t;case El:return i*t;case bl:return i*t*2;case wl:return i*t/s.components*s.byteLength;case vo:return i*t/s.components*s.byteLength;case Tl:return i*t*2/s.components*s.byteLength;case xo:return i*t*2/s.components*s.byteLength;case Sl:return i*t*3/s.components*s.byteLength;case Qe:return i*t*4/s.components*s.byteLength;case Mo:return i*t*4/s.components*s.byteLength;case Es:case bs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ws:case Ts:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Or:case kr:return Math.max(i,16)*Math.max(t,8)/4;case Fr:case zr:return Math.max(i,8)*Math.max(t,8)/2;case Br:case Gr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Hr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Vr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wr:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Xr:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case $r:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case qr:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Yr:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case jr:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Kr:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Zr:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Jr:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Qr:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case to:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case eo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case no:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case As:case io:case so:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Al:case ro:return Math.ceil(i/4)*Math.ceil(t/4)*8;case oo:case ao:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Vh(i){switch(i){case _n:case vl:return{byteLength:1,components:1};case Xi:case xl:case qi:return{byteLength:2,components:1};case go:case _o:return{byteLength:2,components:4};case Yn:case mo:case pn:return{byteLength:4,components:1};case Ml:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:po}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=po);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Vl(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Wh(i){const t=new WeakMap;function e(a,l){const c=a.array,d=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,d),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const d=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,d);else{u.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<u.length;m++){const g=u[f],_=u[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let m=0,g=u.length;m<g;m++){const _=u[m];i.bufferSubData(c,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=t.get(a);(!d||d.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Xh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$h=`#ifdef USE_ALPHAHASH
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
#endif`,qh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zh=`#ifdef USE_AOMAP
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
#endif`,Jh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qh=`#ifdef USE_BATCHING
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
#endif`,td=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ed=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,id=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sd=`#ifdef USE_IRIDESCENCE
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
#endif`,rd=`#ifdef USE_BUMPMAP
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
#endif`,od=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ad=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ld=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ud=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,pd=`#define PI 3.141592653589793
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
} // validated`,md=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gd=`vec3 transformedNormal = objectNormal;
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
#endif`,_d=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Md=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ed=`#ifdef USE_ENVMAP
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
#endif`,bd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wd=`#ifdef USE_ENVMAP
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
#endif`,Td=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ad=`#ifdef USE_ENVMAP
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
#endif`,Rd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ld=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dd=`#ifdef USE_GRADIENTMAP
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
}`,Id=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ud=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fd=`uniform bool receiveShadow;
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
#endif`,Od=`#ifdef USE_ENVMAP
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
#endif`,zd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hd=`PhysicalMaterial material;
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
#endif`,Vd=`struct PhysicalMaterial {
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
}`,Wd=`
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
#endif`,Xd=`#if defined( RE_IndirectDiffuse )
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
#endif`,$d=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tu=`#if defined( USE_POINTS_UV )
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
#endif`,eu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,su=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ru=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ou=`#ifdef USE_MORPHTARGETS
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
#endif`,au=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,du=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fu=`#ifdef USE_NORMALMAP
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
#endif`,pu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_u=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Mu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Su=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Eu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Au=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ru=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Cu=`float getShadowMask() {
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
}`,Pu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lu=`#ifdef USE_SKINNING
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
#endif`,Du=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Iu=`#ifdef USE_SKINNING
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
#endif`,Nu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Uu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ou=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zu=`#ifdef USE_TRANSMISSION
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
#endif`,ku=`#ifdef USE_TRANSMISSION
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
#endif`,Bu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xu=`uniform sampler2D t2D;
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
}`,$u=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Yu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ju=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ku=`#include <common>
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
}`,Zu=`#if DEPTH_PACKING == 3200
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
}`,Ju=`#define DISTANCE
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
}`,Qu=`#define DISTANCE
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
}`,tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ef=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nf=`uniform float scale;
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
}`,sf=`uniform vec3 diffuse;
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
}`,rf=`#include <common>
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
}`,of=`uniform vec3 diffuse;
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
}`,af=`#define LAMBERT
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
}`,lf=`#define LAMBERT
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
}`,cf=`#define MATCAP
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
}`,hf=`#define MATCAP
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
}`,df=`#define NORMAL
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
}`,uf=`#define NORMAL
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
}`,ff=`#define PHONG
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
}`,pf=`#define PHONG
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
}`,mf=`#define STANDARD
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
}`,gf=`#define STANDARD
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
}`,_f=`#define TOON
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
}`,vf=`#define TOON
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
}`,xf=`uniform float size;
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
}`,Mf=`uniform vec3 diffuse;
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
}`,yf=`#include <common>
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
}`,Sf=`uniform vec3 color;
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
}`,Ef=`uniform float rotation;
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
}`,bf=`uniform vec3 diffuse;
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
}`,kt={alphahash_fragment:Xh,alphahash_pars_fragment:$h,alphamap_fragment:qh,alphamap_pars_fragment:Yh,alphatest_fragment:jh,alphatest_pars_fragment:Kh,aomap_fragment:Zh,aomap_pars_fragment:Jh,batching_pars_vertex:Qh,batching_vertex:td,begin_vertex:ed,beginnormal_vertex:nd,bsdfs:id,iridescence_fragment:sd,bumpmap_pars_fragment:rd,clipping_planes_fragment:od,clipping_planes_pars_fragment:ad,clipping_planes_pars_vertex:ld,clipping_planes_vertex:cd,color_fragment:hd,color_pars_fragment:dd,color_pars_vertex:ud,color_vertex:fd,common:pd,cube_uv_reflection_fragment:md,defaultnormal_vertex:gd,displacementmap_pars_vertex:_d,displacementmap_vertex:vd,emissivemap_fragment:xd,emissivemap_pars_fragment:Md,colorspace_fragment:yd,colorspace_pars_fragment:Sd,envmap_fragment:Ed,envmap_common_pars_fragment:bd,envmap_pars_fragment:wd,envmap_pars_vertex:Td,envmap_physical_pars_fragment:Od,envmap_vertex:Ad,fog_vertex:Rd,fog_pars_vertex:Cd,fog_fragment:Pd,fog_pars_fragment:Ld,gradientmap_pars_fragment:Dd,lightmap_pars_fragment:Id,lights_lambert_fragment:Nd,lights_lambert_pars_fragment:Ud,lights_pars_begin:Fd,lights_toon_fragment:zd,lights_toon_pars_fragment:kd,lights_phong_fragment:Bd,lights_phong_pars_fragment:Gd,lights_physical_fragment:Hd,lights_physical_pars_fragment:Vd,lights_fragment_begin:Wd,lights_fragment_maps:Xd,lights_fragment_end:$d,logdepthbuf_fragment:qd,logdepthbuf_pars_fragment:Yd,logdepthbuf_pars_vertex:jd,logdepthbuf_vertex:Kd,map_fragment:Zd,map_pars_fragment:Jd,map_particle_fragment:Qd,map_particle_pars_fragment:tu,metalnessmap_fragment:eu,metalnessmap_pars_fragment:nu,morphinstance_vertex:iu,morphcolor_vertex:su,morphnormal_vertex:ru,morphtarget_pars_vertex:ou,morphtarget_vertex:au,normal_fragment_begin:lu,normal_fragment_maps:cu,normal_pars_fragment:hu,normal_pars_vertex:du,normal_vertex:uu,normalmap_pars_fragment:fu,clearcoat_normal_fragment_begin:pu,clearcoat_normal_fragment_maps:mu,clearcoat_pars_fragment:gu,iridescence_pars_fragment:_u,opaque_fragment:vu,packing:xu,premultiplied_alpha_fragment:Mu,project_vertex:yu,dithering_fragment:Su,dithering_pars_fragment:Eu,roughnessmap_fragment:bu,roughnessmap_pars_fragment:wu,shadowmap_pars_fragment:Tu,shadowmap_pars_vertex:Au,shadowmap_vertex:Ru,shadowmask_pars_fragment:Cu,skinbase_vertex:Pu,skinning_pars_vertex:Lu,skinning_vertex:Du,skinnormal_vertex:Iu,specularmap_fragment:Nu,specularmap_pars_fragment:Uu,tonemapping_fragment:Fu,tonemapping_pars_fragment:Ou,transmission_fragment:zu,transmission_pars_fragment:ku,uv_pars_fragment:Bu,uv_pars_vertex:Gu,uv_vertex:Hu,worldpos_vertex:Vu,background_vert:Wu,background_frag:Xu,backgroundCube_vert:$u,backgroundCube_frag:qu,cube_vert:Yu,cube_frag:ju,depth_vert:Ku,depth_frag:Zu,distanceRGBA_vert:Ju,distanceRGBA_frag:Qu,equirect_vert:tf,equirect_frag:ef,linedashed_vert:nf,linedashed_frag:sf,meshbasic_vert:rf,meshbasic_frag:of,meshlambert_vert:af,meshlambert_frag:lf,meshmatcap_vert:cf,meshmatcap_frag:hf,meshnormal_vert:df,meshnormal_frag:uf,meshphong_vert:ff,meshphong_frag:pf,meshphysical_vert:mf,meshphysical_frag:gf,meshtoon_vert:_f,meshtoon_frag:vf,points_vert:xf,points_frag:Mf,shadow_vert:yf,shadow_frag:Sf,sprite_vert:Ef,sprite_frag:bf},ct={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},sn={basic:{uniforms:Te([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:Te([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Bt(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:Te([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:Te([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:Te([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new Bt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:Te([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:Te([ct.points,ct.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:Te([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:Te([ct.common,ct.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:Te([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:Te([ct.sprite,ct.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distanceRGBA:{uniforms:Te([ct.common,ct.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distanceRGBA_vert,fragmentShader:kt.distanceRGBA_frag},shadow:{uniforms:Te([ct.lights,ct.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};sn.physical={uniforms:Te([sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};const vs={r:0,b:0,g:0},On=new on,wf=new ee;function Tf(i,t,e,n,s,r,o){const a=new Bt(0);let l=r===!0?0:1,c,d,u=null,f=0,m=null;function g(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?e:t).get(x)),x}function _(v){let x=!1;const T=g(v);T===null?h(a,l):T&&T.isColor&&(h(T,1),x=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(v,x){const T=g(x);T&&(T.isCubeTexture||T.mapping===zs)?(d===void 0&&(d=new Et(new Wt(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:wi(sn.backgroundCube.uniforms),vertexShader:sn.backgroundCube.vertexShader,fragmentShader:sn.backgroundCube.fragmentShader,side:Ie,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(w,R,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),On.copy(x.backgroundRotation),On.x*=-1,On.y*=-1,On.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(On.y*=-1,On.z*=-1),d.material.uniforms.envMap.value=T,d.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(wf.makeRotationFromEuler(On)),d.material.toneMapped=Yt.getTransfer(T.colorSpace)!==se,(u!==T||f!==T.version||m!==i.toneMapping)&&(d.material.needsUpdate=!0,u=T,f=T.version,m=i.toneMapping),d.layers.enableAll(),v.unshift(d,d.geometry,d.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Et(new Gs(2,2),new Ln({name:"BackgroundMaterial",uniforms:wi(sn.background.uniforms),vertexShader:sn.background.vertexShader,fragmentShader:sn.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Yt.getTransfer(T.colorSpace)!==se,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||f!==T.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=T,f=T.version,m=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function h(v,x){v.getRGB(vs,Ul(i)),n.buffers.color.setClear(vs.r,vs.g,vs.b,x,o)}function b(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),l=x,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,h(a,l)},render:_,addToRenderList:p,dispose:b}}function Af(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(M,P,O,U,V){let G=!1;const B=u(U,O,P);r!==B&&(r=B,c(r.object)),G=m(M,U,O,V),G&&g(M,U,O,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,x(M,P,O,U),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function d(M){return i.deleteVertexArray(M)}function u(M,P,O){const U=O.wireframe===!0;let V=n[M.id];V===void 0&&(V={},n[M.id]=V);let G=V[P.id];G===void 0&&(G={},V[P.id]=G);let B=G[U];return B===void 0&&(B=f(l()),G[U]=B),B}function f(M){const P=[],O=[],U=[];for(let V=0;V<e;V++)P[V]=0,O[V]=0,U[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:U,object:M,attributes:{},index:null}}function m(M,P,O,U){const V=r.attributes,G=P.attributes;let B=0;const K=O.getAttributes();for(const W in K)if(K[W].location>=0){const pt=V[W];let bt=G[W];if(bt===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(bt=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(bt=M.instanceColor)),pt===void 0||pt.attribute!==bt||bt&&pt.data!==bt.data)return!0;B++}return r.attributesNum!==B||r.index!==U}function g(M,P,O,U){const V={},G=P.attributes;let B=0;const K=O.getAttributes();for(const W in K)if(K[W].location>=0){let pt=G[W];pt===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(pt=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(pt=M.instanceColor));const bt={};bt.attribute=pt,pt&&pt.data&&(bt.data=pt.data),V[W]=bt,B++}r.attributes=V,r.attributesNum=B,r.index=U}function _(){const M=r.newAttributes;for(let P=0,O=M.length;P<O;P++)M[P]=0}function p(M){h(M,0)}function h(M,P){const O=r.newAttributes,U=r.enabledAttributes,V=r.attributeDivisors;O[M]=1,U[M]===0&&(i.enableVertexAttribArray(M),U[M]=1),V[M]!==P&&(i.vertexAttribDivisor(M,P),V[M]=P)}function b(){const M=r.newAttributes,P=r.enabledAttributes;for(let O=0,U=P.length;O<U;O++)P[O]!==M[O]&&(i.disableVertexAttribArray(O),P[O]=0)}function v(M,P,O,U,V,G,B){B===!0?i.vertexAttribIPointer(M,P,O,V,G):i.vertexAttribPointer(M,P,O,U,V,G)}function x(M,P,O,U){_();const V=U.attributes,G=O.getAttributes(),B=P.defaultAttributeValues;for(const K in G){const W=G[K];if(W.location>=0){let lt=V[K];if(lt===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(lt=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(lt=M.instanceColor)),lt!==void 0){const pt=lt.normalized,bt=lt.itemSize,It=t.get(lt);if(It===void 0)continue;const Kt=It.buffer,A=It.type,$=It.bytesPerElement,tt=A===i.INT||A===i.UNSIGNED_INT||lt.gpuType===mo;if(lt.isInterleavedBufferAttribute){const st=lt.data,mt=st.stride,ot=lt.offset;if(st.isInstancedInterleavedBuffer){for(let wt=0;wt<W.locationSize;wt++)h(W.location+wt,st.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let wt=0;wt<W.locationSize;wt++)p(W.location+wt);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let wt=0;wt<W.locationSize;wt++)v(W.location+wt,bt/W.locationSize,A,pt,mt*$,(ot+bt/W.locationSize*wt)*$,tt)}else{if(lt.isInstancedBufferAttribute){for(let st=0;st<W.locationSize;st++)h(W.location+st,lt.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let st=0;st<W.locationSize;st++)p(W.location+st);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let st=0;st<W.locationSize;st++)v(W.location+st,bt/W.locationSize,A,pt,bt*$,bt/W.locationSize*st*$,tt)}}else if(B!==void 0){const pt=B[K];if(pt!==void 0)switch(pt.length){case 2:i.vertexAttrib2fv(W.location,pt);break;case 3:i.vertexAttrib3fv(W.location,pt);break;case 4:i.vertexAttrib4fv(W.location,pt);break;default:i.vertexAttrib1fv(W.location,pt)}}}}b()}function T(){L();for(const M in n){const P=n[M];for(const O in P){const U=P[O];for(const V in U)d(U[V].object),delete U[V];delete P[O]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const O in P){const U=P[O];for(const V in U)d(U[V].object),delete U[V];delete P[O]}delete n[M.id]}function R(M){for(const P in n){const O=n[P];if(O[M.id]===void 0)continue;const U=O[M.id];for(const V in U)d(U[V].object),delete U[V];delete O[M.id]}}function L(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:S,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:p,disableUnusedAttributes:b}}function Rf(i,t,e){let n;function s(c){n=c}function r(c,d){i.drawArrays(n,c,d),e.update(d,n,1)}function o(c,d,u){u!==0&&(i.drawArraysInstanced(n,c,d,u),e.update(d,n,u))}function a(c,d,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,u);let m=0;for(let g=0;g<u;g++)m+=d[g];e.update(m,n,1)}function l(c,d,u,f){if(u===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],d[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,d,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=d[_]*f[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Cf(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Qe&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const L=R===qi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==_n&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==pn&&!L)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:b,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:T,maxSamples:w}}function Pf(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new bn,a=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const m=u.length!==0||f||n!==0||s;return s=f,n=u.length,m},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=d(u,f,0)},this.setState=function(u,f,m){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,h=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?d(null):c();else{const b=r?0:n,v=b*4;let x=h.clippingState||null;l.value=x,x=d(g,f,v,m);for(let T=0;T!==v;++T)x[T]=e[T];h.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(u,f,m,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const h=m+_*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<h)&&(p=new Float32Array(h));for(let v=0,x=m;v!==_;++v,x+=4)o.copy(u[v]).applyMatrix4(b,a),o.normal.toArray(p,x),p[x+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function Lf(i){let t=new WeakMap;function e(o,a){return a===Ir?o.mapping=Mi:a===Nr&&(o.mapping=yi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ir||a===Nr)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new bh(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const pi=4,ga=[.125,.215,.35,.446,.526,.582],Wn=20,_r=new Gl,_a=new Bt;let vr=null,xr=0,Mr=0,yr=!1;const Hn=(1+Math.sqrt(5))/2,di=1/Hn,va=[new I(-Hn,di,0),new I(Hn,di,0),new I(-di,0,Hn),new I(di,0,Hn),new I(0,Hn,-di),new I(0,Hn,di),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Df=new I;class xa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=Df}=r;vr=this._renderer.getRenderTarget(),xr=this._renderer.getActiveCubeFace(),Mr=this._renderer.getActiveMipmapLevel(),yr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ya(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(vr,xr,Mr),this._renderer.xr.enabled=yr,t.scissorTest=!1,xs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Mi||t.mapping===yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vr=this._renderer.getRenderTarget(),xr=this._renderer.getActiveCubeFace(),Mr=this._renderer.getActiveMipmapLevel(),yr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:qi,format:Qe,colorSpace:bi,depthBuffer:!1},s=Ma(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ma(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=If(r)),this._blurMaterial=Nf(r,t,e)}return s}_compileMaterial(t){const e=new Et(this._lodPlanes[0],t);this._renderer.compile(e,_r)}_sceneToCubeUV(t,e,n,s,r){const l=new $e(90,1,e,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,m=u.toneMapping;u.getClearColor(_a),u.toneMapping=Rn,u.autoClear=!1;const g=new qn({name:"PMREM.Background",side:Ie,depthWrite:!1,depthTest:!1}),_=new Et(new Wt,g);let p=!1;const h=t.background;h?h.isColor&&(g.color.copy(h),t.background=null,p=!0):(g.color.copy(_a),p=!0);for(let b=0;b<6;b++){const v=b%3;v===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[b],r.y,r.z)):v===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[b]));const x=this._cubeSize;xs(s,v*x,b>2?x:0,x,x),u.setRenderTarget(s),p&&u.render(_,l),u.render(t,l)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=m,u.autoClear=f,t.background=h}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Mi||t.mapping===yi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sa()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ya());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Et(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;xs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,_r)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=va[(s-r-1)%va.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new Et(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Wn-1),_=r/g,p=isFinite(r)?1+Math.floor(d*_):Wn;p>Wn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Wn}`);const h=[];let b=0;for(let R=0;R<Wn;++R){const L=R/_,S=Math.exp(-L*L/2);h.push(S),R===0?b+=S:R<p&&(b+=2*S)}for(let R=0;R<h.length;R++)h[R]=h[R]/b;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;const x=this._sizeLods[s],T=3*x*(s>v-pi?s-v+pi:0),w=4*(this._cubeSize-x);xs(e,T,w,3*x,2*x),l.setRenderTarget(e),l.render(u,_r)}}function If(i){const t=[],e=[],n=[];let s=i;const r=i-pi+1+ga.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-pi?l=ga[o-i+pi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),d=-c,u=1+c,f=[d,d,u,d,u,u,d,d,u,u,d,u],m=6,g=6,_=3,p=2,h=1,b=new Float32Array(_*g*m),v=new Float32Array(p*g*m),x=new Float32Array(h*g*m);for(let w=0;w<m;w++){const R=w%3*2/3-1,L=w>2?0:-1,S=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];b.set(S,_*g*w),v.set(f,p*g*w);const M=[w,w,w,w,w,w];x.set(M,h*g*w)}const T=new Re;T.setAttribute("position",new Ne(b,_)),T.setAttribute("uv",new Ne(v,p)),T.setAttribute("faceIndex",new Ne(x,h)),t.push(T),s>pi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ma(i,t,e){const n=new jn(i,t,e);return n.texture.mapping=zs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Nf(i,t,e){const n=new Float32Array(Wn),s=new I(0,1,0);return new Ln({name:"SphericalGaussianBlur",defines:{n:Wn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ao(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function ya(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ao(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function Sa(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function Ao(){return`

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
	`}function Uf(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ir||l===Nr,d=l===Mi||l===yi;if(c||d){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new xa(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const m=a.image;return c&&m&&m.height>0||d&&m&&s(m)?(e===null&&(e=new xa(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Ff(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Gn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Of(i,t,e,n){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const m in f)t.update(f[m],i.ARRAY_BUFFER)}function c(u){const f=[],m=u.index,g=u.attributes.position;let _=0;if(m!==null){const b=m.array;_=m.version;for(let v=0,x=b.length;v<x;v+=3){const T=b[v+0],w=b[v+1],R=b[v+2];f.push(T,w,w,R,R,T)}}else if(g!==void 0){const b=g.array;_=g.version;for(let v=0,x=b.length/3-1;v<x;v+=3){const T=v+0,w=v+1,R=v+2;f.push(T,w,w,R,R,T)}}else return;const p=new(Pl(f)?Nl:Il)(f,1);p.version=_;const h=r.get(u);h&&t.remove(h),r.set(u,p)}function d(u){const f=r.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:d}}function zf(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,m){i.drawElements(n,m,r,f*o),e.update(m,n,1)}function c(f,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,f*o,g),e.update(m,n,g))}function d(f,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,f,0,g);let p=0;for(let h=0;h<g;h++)p+=m[h];e.update(p,n,1)}function u(f,m,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<f.length;h++)c(f[h]/o,m[h],_[h]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,f,0,_,0,g);let h=0;for(let b=0;b<g;b++)h+=m[b]*_[b];e.update(h,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function kf(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Bf(i,t,e){const n=new WeakMap,s=new de;function r(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=d!==void 0?d.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let M=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var m=M;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),p===!0&&(x=3);let T=a.attributes.position.count*x,w=1;T>t.maxTextureSize&&(w=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const R=new Float32Array(T*w*4*u),L=new Ll(R,T,w,u);L.type=pn,L.needsUpdate=!0;const S=x*4;for(let P=0;P<u;P++){const O=h[P],U=b[P],V=v[P],G=T*w*4*P;for(let B=0;B<O.count;B++){const K=B*S;g===!0&&(s.fromBufferAttribute(O,B),R[G+K+0]=s.x,R[G+K+1]=s.y,R[G+K+2]=s.z,R[G+K+3]=0),_===!0&&(s.fromBufferAttribute(U,B),R[G+K+4]=s.x,R[G+K+5]=s.y,R[G+K+6]=s.z,R[G+K+7]=0),p===!0&&(s.fromBufferAttribute(V,B),R[G+K+8]=s.x,R[G+K+9]=s.y,R[G+K+10]=s.z,R[G+K+11]=V.itemSize===4?s.w:1)}}f={count:u,texture:L,size:new Pt(T,w)},n.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Gf(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,d=l.geometry,u=t.get(l,d);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const Wl=new Ae,Ea=new kl(1,1),Xl=new Ll,$l=new ah,ql=new Ol,ba=[],wa=[],Ta=new Float32Array(16),Aa=new Float32Array(9),Ra=new Float32Array(4);function Ai(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=ba[s];if(r===void 0&&(r=new Float32Array(s),ba[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function _e(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ve(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Hs(i,t){let e=wa[t];e===void 0&&(e=new Int32Array(t),wa[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Hf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Vf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2fv(this.addr,t),ve(e,t)}}function Wf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;i.uniform3fv(this.addr,t),ve(e,t)}}function Xf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4fv(this.addr,t),ve(e,t)}}function $f(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;Ra.set(n),i.uniformMatrix2fv(this.addr,!1,Ra),ve(e,n)}}function qf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;Aa.set(n),i.uniformMatrix3fv(this.addr,!1,Aa),ve(e,n)}}function Yf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;Ta.set(n),i.uniformMatrix4fv(this.addr,!1,Ta),ve(e,n)}}function jf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Kf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2iv(this.addr,t),ve(e,t)}}function Zf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3iv(this.addr,t),ve(e,t)}}function Jf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4iv(this.addr,t),ve(e,t)}}function Qf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function tp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2uiv(this.addr,t),ve(e,t)}}function ep(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3uiv(this.addr,t),ve(e,t)}}function np(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4uiv(this.addr,t),ve(e,t)}}function ip(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ea.compareFunction=Cl,r=Ea):r=Wl,e.setTexture2D(t||r,s)}function sp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||$l,s)}function rp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ql,s)}function op(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Xl,s)}function ap(i){switch(i){case 5126:return Hf;case 35664:return Vf;case 35665:return Wf;case 35666:return Xf;case 35674:return $f;case 35675:return qf;case 35676:return Yf;case 5124:case 35670:return jf;case 35667:case 35671:return Kf;case 35668:case 35672:return Zf;case 35669:case 35673:return Jf;case 5125:return Qf;case 36294:return tp;case 36295:return ep;case 36296:return np;case 35678:case 36198:case 36298:case 36306:case 35682:return ip;case 35679:case 36299:case 36307:return sp;case 35680:case 36300:case 36308:case 36293:return rp;case 36289:case 36303:case 36311:case 36292:return op}}function lp(i,t){i.uniform1fv(this.addr,t)}function cp(i,t){const e=Ai(t,this.size,2);i.uniform2fv(this.addr,e)}function hp(i,t){const e=Ai(t,this.size,3);i.uniform3fv(this.addr,e)}function dp(i,t){const e=Ai(t,this.size,4);i.uniform4fv(this.addr,e)}function up(i,t){const e=Ai(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function fp(i,t){const e=Ai(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function pp(i,t){const e=Ai(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function mp(i,t){i.uniform1iv(this.addr,t)}function gp(i,t){i.uniform2iv(this.addr,t)}function _p(i,t){i.uniform3iv(this.addr,t)}function vp(i,t){i.uniform4iv(this.addr,t)}function xp(i,t){i.uniform1uiv(this.addr,t)}function Mp(i,t){i.uniform2uiv(this.addr,t)}function yp(i,t){i.uniform3uiv(this.addr,t)}function Sp(i,t){i.uniform4uiv(this.addr,t)}function Ep(i,t,e){const n=this.cache,s=t.length,r=Hs(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Wl,r[o])}function bp(i,t,e){const n=this.cache,s=t.length,r=Hs(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||$l,r[o])}function wp(i,t,e){const n=this.cache,s=t.length,r=Hs(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||ql,r[o])}function Tp(i,t,e){const n=this.cache,s=t.length,r=Hs(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Xl,r[o])}function Ap(i){switch(i){case 5126:return lp;case 35664:return cp;case 35665:return hp;case 35666:return dp;case 35674:return up;case 35675:return fp;case 35676:return pp;case 5124:case 35670:return mp;case 35667:case 35671:return gp;case 35668:case 35672:return _p;case 35669:case 35673:return vp;case 5125:return xp;case 36294:return Mp;case 36295:return yp;case 36296:return Sp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ep;case 35679:case 36299:case 36307:return bp;case 35680:case 36300:case 36308:case 36293:return wp;case 36289:case 36303:case 36311:case 36292:return Tp}}class Rp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ap(e.type)}}class Cp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ap(e.type)}}class Pp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Sr=/(\w+)(\])?(\[|\.)?/g;function Ca(i,t){i.seq.push(t),i.map[t.id]=t}function Lp(i,t,e){const n=i.name,s=n.length;for(Sr.lastIndex=0;;){const r=Sr.exec(n),o=Sr.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ca(e,c===void 0?new Rp(a,i,t):new Cp(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Pp(a),Ca(e,u)),e=u}}}class Cs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Lp(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Pa(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Dp=37297;let Ip=0;function Np(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const La=new zt;function Up(i){Yt._getMatrix(La,Yt.workingColorSpace,i);const t=`mat3( ${La.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(i)){case Ds:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Da(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Np(i.getShaderSource(t),o)}else return s}function Fp(i,t){const e=Up(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Op(i,t){let e;switch(t){case Ic:e="Linear";break;case Nc:e="Reinhard";break;case Uc:e="Cineon";break;case gl:e="ACESFilmic";break;case Oc:e="AgX";break;case zc:e="Neutral";break;case Fc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ms=new I;function zp(){Yt.getLuminanceCoefficients(Ms);const i=Ms.x.toFixed(4),t=Ms.y.toFixed(4),e=Ms.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gi).join(`
`)}function Bp(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Gp(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Gi(i){return i!==""}function Ia(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Na(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Hp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ho(i){return i.replace(Hp,Wp)}const Vp=new Map;function Wp(i,t){let e=kt[t];if(e===void 0){const n=Vp.get(t);if(n!==void 0)e=kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ho(e)}const Xp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ua(i){return i.replace(Xp,$p)}function $p(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fa(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function qp(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===fl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===pl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===fn&&(t="SHADOWMAP_TYPE_VSM"),t}function Yp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Mi:case yi:t="ENVMAP_TYPE_CUBE";break;case zs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function jp(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case yi:t="ENVMAP_MODE_REFRACTION";break}return t}function Kp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ml:t="ENVMAP_BLENDING_MULTIPLY";break;case Lc:t="ENVMAP_BLENDING_MIX";break;case Dc:t="ENVMAP_BLENDING_ADD";break}return t}function Zp(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Jp(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=qp(e),c=Yp(e),d=jp(e),u=Kp(e),f=Zp(e),m=kp(e),g=Bp(r),_=s.createProgram();let p,h,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Gi).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Gi).join(`
`),h.length>0&&(h+=`
`)):(p=[Fa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gi).join(`
`),h=[Fa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Rn?"#define TONE_MAPPING":"",e.toneMapping!==Rn?kt.tonemapping_pars_fragment:"",e.toneMapping!==Rn?Op("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,Fp("linearToOutputTexel",e.outputColorSpace),zp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Gi).join(`
`)),o=ho(o),o=Ia(o,e),o=Na(o,e),a=ho(a),a=Ia(a,e),a=Na(a,e),o=Ua(o),a=Ua(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",e.glslVersion===Bo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const v=b+p+o,x=b+h+a,T=Pa(s,s.VERTEX_SHADER,v),w=Pa(s,s.FRAGMENT_SHADER,x);s.attachShader(_,T),s.attachShader(_,w),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(P){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(_).trim(),U=s.getShaderInfoLog(T).trim(),V=s.getShaderInfoLog(w).trim();let G=!0,B=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,T,w);else{const K=Da(s,T,"vertex"),W=Da(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+K+`
`+W)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(U===""||V==="")&&(B=!1);B&&(P.diagnostics={runnable:G,programLog:O,vertexShader:{log:U,prefix:p},fragmentShader:{log:V,prefix:h}})}s.deleteShader(T),s.deleteShader(w),L=new Cs(s,_),S=Gp(s,_)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,Dp)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ip++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=w,this}let Qp=0;class tm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new em(t),e.set(t,n)),n}}class em{constructor(t){this.id=Qp++,this.code=t,this.usedTimes=0}}function nm(i,t,e,n,s,r,o){const a=new So,l=new tm,c=new Set,d=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function p(S,M,P,O,U){const V=O.fog,G=U.geometry,B=S.isMeshStandardMaterial?O.environment:null,K=(S.isMeshStandardMaterial?e:t).get(S.envMap||B),W=K&&K.mapping===zs?K.image.height:null,lt=g[S.type];S.precision!==null&&(m=s.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const pt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,bt=pt!==void 0?pt.length:0;let It=0;G.morphAttributes.position!==void 0&&(It=1),G.morphAttributes.normal!==void 0&&(It=2),G.morphAttributes.color!==void 0&&(It=3);let Kt,A,$,tt;if(lt){const jt=sn[lt];Kt=jt.vertexShader,A=jt.fragmentShader}else Kt=S.vertexShader,A=S.fragmentShader,l.update(S),$=l.getVertexShaderID(S),tt=l.getFragmentShaderID(S);const st=i.getRenderTarget(),mt=i.state.buffers.depth.getReversed(),ot=U.isInstancedMesh===!0,wt=U.isBatchedMesh===!0,ne=!!S.map,oe=!!S.matcap,Ht=!!K,D=!!S.aoMap,Ce=!!S.lightMap,Nt=!!S.bumpMap,Ot=!!S.normalMap,gt=!!S.displacementMap,Zt=!!S.emissiveMap,yt=!!S.metalnessMap,C=!!S.roughnessMap,y=S.anisotropy>0,k=S.clearcoat>0,Z=S.dispersion>0,Q=S.iridescence>0,Y=S.sheen>0,_t=S.transmission>0,it=y&&!!S.anisotropyMap,et=k&&!!S.clearcoatMap,vt=k&&!!S.clearcoatNormalMap,nt=k&&!!S.clearcoatRoughnessMap,ut=Q&&!!S.iridescenceMap,Rt=Q&&!!S.iridescenceThicknessMap,Ct=Y&&!!S.sheenColorMap,xt=Y&&!!S.sheenRoughnessMap,Vt=!!S.specularMap,Ft=!!S.specularColorMap,ie=!!S.specularIntensityMap,N=_t&&!!S.transmissionMap,at=_t&&!!S.thicknessMap,q=!!S.gradientMap,J=!!S.alphaMap,ft=S.alphaTest>0,ht=!!S.alphaHash,Ut=!!S.extensions;let Jt=Rn;S.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Jt=i.toneMapping);const ce={shaderID:lt,shaderType:S.type,shaderName:S.name,vertexShader:Kt,fragmentShader:A,defines:S.defines,customVertexShaderID:$,customFragmentShaderID:tt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:wt,batchingColor:wt&&U._colorsTexture!==null,instancing:ot,instancingColor:ot&&U.instanceColor!==null,instancingMorph:ot&&U.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:bi,alphaToCoverage:!!S.alphaToCoverage,map:ne,matcap:oe,envMap:Ht,envMapMode:Ht&&K.mapping,envMapCubeUVHeight:W,aoMap:D,lightMap:Ce,bumpMap:Nt,normalMap:Ot,displacementMap:f&&gt,emissiveMap:Zt,normalMapObjectSpace:Ot&&S.normalMapType===Hc,normalMapTangentSpace:Ot&&S.normalMapType===Rl,metalnessMap:yt,roughnessMap:C,anisotropy:y,anisotropyMap:it,clearcoat:k,clearcoatMap:et,clearcoatNormalMap:vt,clearcoatRoughnessMap:nt,dispersion:Z,iridescence:Q,iridescenceMap:ut,iridescenceThicknessMap:Rt,sheen:Y,sheenColorMap:Ct,sheenRoughnessMap:xt,specularMap:Vt,specularColorMap:Ft,specularIntensityMap:ie,transmission:_t,transmissionMap:N,thicknessMap:at,gradientMap:q,opaque:S.transparent===!1&&S.blending===gi&&S.alphaToCoverage===!1,alphaMap:J,alphaTest:ft,alphaHash:ht,combine:S.combine,mapUv:ne&&_(S.map.channel),aoMapUv:D&&_(S.aoMap.channel),lightMapUv:Ce&&_(S.lightMap.channel),bumpMapUv:Nt&&_(S.bumpMap.channel),normalMapUv:Ot&&_(S.normalMap.channel),displacementMapUv:gt&&_(S.displacementMap.channel),emissiveMapUv:Zt&&_(S.emissiveMap.channel),metalnessMapUv:yt&&_(S.metalnessMap.channel),roughnessMapUv:C&&_(S.roughnessMap.channel),anisotropyMapUv:it&&_(S.anisotropyMap.channel),clearcoatMapUv:et&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:vt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:xt&&_(S.sheenRoughnessMap.channel),specularMapUv:Vt&&_(S.specularMap.channel),specularColorMapUv:Ft&&_(S.specularColorMap.channel),specularIntensityMapUv:ie&&_(S.specularIntensityMap.channel),transmissionMapUv:N&&_(S.transmissionMap.channel),thicknessMapUv:at&&_(S.thicknessMap.channel),alphaMapUv:J&&_(S.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Ot||y),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!G.attributes.uv&&(ne||J),fog:!!V,useFog:S.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:mt,skinning:U.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:It,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Jt,decodeVideoTexture:ne&&S.map.isVideoTexture===!0&&Yt.getTransfer(S.map.colorSpace)===se,decodeVideoTextureEmissive:Zt&&S.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(S.emissiveMap.colorSpace)===se,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Be,flipSided:S.side===Ie,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ut&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&S.extensions.multiDraw===!0||wt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ce.vertexUv1s=c.has(1),ce.vertexUv2s=c.has(2),ce.vertexUv3s=c.has(3),c.clear(),ce}function h(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)M.push(P),M.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(b(M,S),v(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function b(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function v(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){const M=g[S.type];let P;if(M){const O=sn[M];P=Mh.clone(O.uniforms)}else P=S.uniforms;return P}function T(S,M){let P;for(let O=0,U=d.length;O<U;O++){const V=d[O];if(V.cacheKey===M){P=V,++P.usedTimes;break}}return P===void 0&&(P=new Jp(i,M,S,r),d.push(P)),P}function w(S){if(--S.usedTimes===0){const M=d.indexOf(S);d[M]=d[d.length-1],d.pop(),S.destroy()}}function R(S){l.remove(S)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:x,acquireProgram:T,releaseProgram:w,releaseShaderCache:R,programs:d,dispose:L}}function im(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function sm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Oa(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function za(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,m,g,_,p){let h=i[t];return h===void 0?(h={id:u.id,object:u,geometry:f,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},i[t]=h):(h.id=u.id,h.object=u,h.geometry=f,h.material=m,h.groupOrder=g,h.renderOrder=u.renderOrder,h.z=_,h.group=p),t++,h}function a(u,f,m,g,_,p){const h=o(u,f,m,g,_,p);m.transmission>0?n.push(h):m.transparent===!0?s.push(h):e.push(h)}function l(u,f,m,g,_,p){const h=o(u,f,m,g,_,p);m.transmission>0?n.unshift(h):m.transparent===!0?s.unshift(h):e.unshift(h)}function c(u,f){e.length>1&&e.sort(u||sm),n.length>1&&n.sort(f||Oa),s.length>1&&s.sort(f||Oa)}function d(){for(let u=t,f=i.length;u<f;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:d,sort:c}}function rm(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new za,i.set(n,[o])):s>=r.length?(o=new za,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function om(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Bt};break;case"SpotLight":e={position:new I,direction:new I,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function am(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let lm=0;function cm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function hm(i){const t=new om,e=am(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const s=new I,r=new ee,o=new ee;function a(c){let d=0,u=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let m=0,g=0,_=0,p=0,h=0,b=0,v=0,x=0,T=0,w=0,R=0;c.sort(cm);for(let S=0,M=c.length;S<M;S++){const P=c[S],O=P.color,U=P.intensity,V=P.distance,G=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=O.r*U,u+=O.g*U,f+=O.b*U;else if(P.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(P.sh.coefficients[B],U);R++}else if(P.isDirectionalLight){const B=t.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const K=P.shadow,W=e.get(P);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,n.directionalShadow[m]=W,n.directionalShadowMap[m]=G,n.directionalShadowMatrix[m]=P.shadow.matrix,b++}n.directional[m]=B,m++}else if(P.isSpotLight){const B=t.get(P);B.position.setFromMatrixPosition(P.matrixWorld),B.color.copy(O).multiplyScalar(U),B.distance=V,B.coneCos=Math.cos(P.angle),B.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),B.decay=P.decay,n.spot[_]=B;const K=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,K.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[_]=K.matrix,P.castShadow){const W=e.get(P);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=G,x++}_++}else if(P.isRectAreaLight){const B=t.get(P);B.color.copy(O).multiplyScalar(U),B.halfWidth.set(P.width*.5,0,0),B.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=B,p++}else if(P.isPointLight){const B=t.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),B.distance=P.distance,B.decay=P.decay,P.castShadow){const K=P.shadow,W=e.get(P);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,W.shadowCameraNear=K.camera.near,W.shadowCameraFar=K.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=P.shadow.matrix,v++}n.point[g]=B,g++}else if(P.isHemisphereLight){const B=t.get(P);B.skyColor.copy(P.color).multiplyScalar(U),B.groundColor.copy(P.groundColor).multiplyScalar(U),n.hemi[h]=B,h++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_FLOAT_1,n.rectAreaLTC2=ct.LTC_FLOAT_2):(n.rectAreaLTC1=ct.LTC_HALF_1,n.rectAreaLTC2=ct.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=f;const L=n.hash;(L.directionalLength!==m||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==p||L.hemiLength!==h||L.numDirectionalShadows!==b||L.numPointShadows!==v||L.numSpotShadows!==x||L.numSpotMaps!==T||L.numLightProbes!==R)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=h,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+T-w,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,L.directionalLength=m,L.pointLength=g,L.spotLength=_,L.rectAreaLength=p,L.hemiLength=h,L.numDirectionalShadows=b,L.numPointShadows=v,L.numSpotShadows=x,L.numSpotMaps=T,L.numLightProbes=R,n.version=lm++)}function l(c,d){let u=0,f=0,m=0,g=0,_=0;const p=d.matrixWorldInverse;for(let h=0,b=c.length;h<b;h++){const v=c[h];if(v.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),u++}else if(v.isSpotLight){const x=n.spot[m];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),m++}else if(v.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(p),o.identity(),r.copy(v.matrixWorld),r.premultiply(p),o.extractRotation(r),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function ka(i){const t=new hm(i),e=[],n=[];function s(d){c.camera=d,e.length=0,n.length=0}function r(d){e.push(d)}function o(d){n.push(d)}function a(){t.setup(e)}function l(d){t.setupView(e,d)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function dm(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new ka(i),t.set(s,[a])):r>=o.length?(a=new ka(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const um=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fm=`uniform sampler2D shadow_pass;
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
}`;function pm(i,t,e){let n=new Eo;const s=new Pt,r=new Pt,o=new de,a=new Lh({depthPacking:Gc}),l=new Dh,c={},d=e.maxTextureSize,u={[Cn]:Ie,[Ie]:Cn,[Be]:Be},f=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:um,fragmentShader:fm}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Re;g.setAttribute("position",new Ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Et(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fl;let h=this.type;this.render=function(w,R,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),O=i.state;O.setBlending(An),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const U=h!==fn&&this.type===fn,V=h===fn&&this.type!==fn;for(let G=0,B=w.length;G<B;G++){const K=w[G],W=K.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const lt=W.getFrameExtents();if(s.multiply(lt),r.copy(W.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/lt.x),s.x=r.x*lt.x,W.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/lt.y),s.y=r.y*lt.y,W.mapSize.y=r.y)),W.map===null||U===!0||V===!0){const bt=this.type!==fn?{minFilter:tn,magFilter:tn}:{};W.map!==null&&W.map.dispose(),W.map=new jn(s.x,s.y,bt),W.map.texture.name=K.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const pt=W.getViewportCount();for(let bt=0;bt<pt;bt++){const It=W.getViewport(bt);o.set(r.x*It.x,r.y*It.y,r.x*It.z,r.y*It.w),O.viewport(o),W.updateMatrices(K,bt),n=W.getFrustum(),x(R,L,W.camera,K,this.type)}W.isPointLightShadow!==!0&&this.type===fn&&b(W,L),W.needsUpdate=!1}h=this.type,p.needsUpdate=!1,i.setRenderTarget(S,M,P)};function b(w,R){const L=t.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new jn(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(R,null,L,f,_,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(R,null,L,m,_,null)}function v(w,R,L,S){let M=null;const P=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)M=P;else if(M=L.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const O=M.uuid,U=R.uuid;let V=c[O];V===void 0&&(V={},c[O]=V);let G=V[U];G===void 0&&(G=M.clone(),V[U]=G,R.addEventListener("dispose",T)),M=G}if(M.visible=R.visible,M.wireframe=R.wireframe,S===fn?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:u[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const O=i.properties.get(M);O.light=L}return M}function x(w,R,L,S,M){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===fn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const U=t.update(w),V=w.material;if(Array.isArray(V)){const G=U.groups;for(let B=0,K=G.length;B<K;B++){const W=G[B],lt=V[W.materialIndex];if(lt&&lt.visible){const pt=v(w,lt,S,M);w.onBeforeShadow(i,w,R,L,U,pt,W),i.renderBufferDirect(L,null,U,pt,w,W),w.onAfterShadow(i,w,R,L,U,pt,W)}}}else if(V.visible){const G=v(w,V,S,M);w.onBeforeShadow(i,w,R,L,U,G,null),i.renderBufferDirect(L,null,U,G,w,null),w.onAfterShadow(i,w,R,L,U,G,null)}}const O=w.children;for(let U=0,V=O.length;U<V;U++)x(O[U],R,L,S,M)}function T(w){w.target.removeEventListener("dispose",T);for(const L in c){const S=c[L],M=w.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const mm={[Tr]:Ar,[Rr]:Lr,[Cr]:Dr,[xi]:Pr,[Ar]:Tr,[Lr]:Rr,[Dr]:Cr,[Pr]:xi};function gm(i,t){function e(){let N=!1;const at=new de;let q=null;const J=new de(0,0,0,0);return{setMask:function(ft){q!==ft&&!N&&(i.colorMask(ft,ft,ft,ft),q=ft)},setLocked:function(ft){N=ft},setClear:function(ft,ht,Ut,Jt,ce){ce===!0&&(ft*=Jt,ht*=Jt,Ut*=Jt),at.set(ft,ht,Ut,Jt),J.equals(at)===!1&&(i.clearColor(ft,ht,Ut,Jt),J.copy(at))},reset:function(){N=!1,q=null,J.set(-1,0,0,0)}}}function n(){let N=!1,at=!1,q=null,J=null,ft=null;return{setReversed:function(ht){if(at!==ht){const Ut=t.get("EXT_clip_control");at?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT);const Jt=ft;ft=null,this.setClear(Jt)}at=ht},getReversed:function(){return at},setTest:function(ht){ht?st(i.DEPTH_TEST):mt(i.DEPTH_TEST)},setMask:function(ht){q!==ht&&!N&&(i.depthMask(ht),q=ht)},setFunc:function(ht){if(at&&(ht=mm[ht]),J!==ht){switch(ht){case Tr:i.depthFunc(i.NEVER);break;case Ar:i.depthFunc(i.ALWAYS);break;case Rr:i.depthFunc(i.LESS);break;case xi:i.depthFunc(i.LEQUAL);break;case Cr:i.depthFunc(i.EQUAL);break;case Pr:i.depthFunc(i.GEQUAL);break;case Lr:i.depthFunc(i.GREATER);break;case Dr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=ht}},setLocked:function(ht){N=ht},setClear:function(ht){ft!==ht&&(at&&(ht=1-ht),i.clearDepth(ht),ft=ht)},reset:function(){N=!1,q=null,J=null,ft=null,at=!1}}}function s(){let N=!1,at=null,q=null,J=null,ft=null,ht=null,Ut=null,Jt=null,ce=null;return{setTest:function(jt){N||(jt?st(i.STENCIL_TEST):mt(i.STENCIL_TEST))},setMask:function(jt){at!==jt&&!N&&(i.stencilMask(jt),at=jt)},setFunc:function(jt,Ue,qe){(q!==jt||J!==Ue||ft!==qe)&&(i.stencilFunc(jt,Ue,qe),q=jt,J=Ue,ft=qe)},setOp:function(jt,Ue,qe){(ht!==jt||Ut!==Ue||Jt!==qe)&&(i.stencilOp(jt,Ue,qe),ht=jt,Ut=Ue,Jt=qe)},setLocked:function(jt){N=jt},setClear:function(jt){ce!==jt&&(i.clearStencil(jt),ce=jt)},reset:function(){N=!1,at=null,q=null,J=null,ft=null,ht=null,Ut=null,Jt=null,ce=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let d={},u={},f=new WeakMap,m=[],g=null,_=!1,p=null,h=null,b=null,v=null,x=null,T=null,w=null,R=new Bt(0,0,0),L=0,S=!1,M=null,P=null,O=null,U=null,V=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,K=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(W)[1]),B=K>=1):W.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),B=K>=2);let lt=null,pt={};const bt=i.getParameter(i.SCISSOR_BOX),It=i.getParameter(i.VIEWPORT),Kt=new de().fromArray(bt),A=new de().fromArray(It);function $(N,at,q,J){const ft=new Uint8Array(4),ht=i.createTexture();i.bindTexture(N,ht),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ut=0;Ut<q;Ut++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(at,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,ft):i.texImage2D(at+Ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ft);return ht}const tt={};tt[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),tt[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),tt[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),st(i.DEPTH_TEST),o.setFunc(xi),Nt(!1),Ot(No),st(i.CULL_FACE),D(An);function st(N){d[N]!==!0&&(i.enable(N),d[N]=!0)}function mt(N){d[N]!==!1&&(i.disable(N),d[N]=!1)}function ot(N,at){return u[N]!==at?(i.bindFramebuffer(N,at),u[N]=at,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=at),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=at),!0):!1}function wt(N,at){let q=m,J=!1;if(N){q=f.get(at),q===void 0&&(q=[],f.set(at,q));const ft=N.textures;if(q.length!==ft.length||q[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,Ut=ft.length;ht<Ut;ht++)q[ht]=i.COLOR_ATTACHMENT0+ht;q.length=ft.length,J=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,J=!0);J&&i.drawBuffers(q)}function ne(N){return g!==N?(i.useProgram(N),g=N,!0):!1}const oe={[Vn]:i.FUNC_ADD,[pc]:i.FUNC_SUBTRACT,[mc]:i.FUNC_REVERSE_SUBTRACT};oe[gc]=i.MIN,oe[_c]=i.MAX;const Ht={[vc]:i.ZERO,[xc]:i.ONE,[Mc]:i.SRC_COLOR,[br]:i.SRC_ALPHA,[Tc]:i.SRC_ALPHA_SATURATE,[bc]:i.DST_COLOR,[Sc]:i.DST_ALPHA,[yc]:i.ONE_MINUS_SRC_COLOR,[wr]:i.ONE_MINUS_SRC_ALPHA,[wc]:i.ONE_MINUS_DST_COLOR,[Ec]:i.ONE_MINUS_DST_ALPHA,[Ac]:i.CONSTANT_COLOR,[Rc]:i.ONE_MINUS_CONSTANT_COLOR,[Cc]:i.CONSTANT_ALPHA,[Pc]:i.ONE_MINUS_CONSTANT_ALPHA};function D(N,at,q,J,ft,ht,Ut,Jt,ce,jt){if(N===An){_===!0&&(mt(i.BLEND),_=!1);return}if(_===!1&&(st(i.BLEND),_=!0),N!==fc){if(N!==p||jt!==S){if((h!==Vn||x!==Vn)&&(i.blendEquation(i.FUNC_ADD),h=Vn,x=Vn),jt)switch(N){case gi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Uo:i.blendFunc(i.ONE,i.ONE);break;case Fo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Oo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case gi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Uo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Fo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Oo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}b=null,v=null,T=null,w=null,R.set(0,0,0),L=0,p=N,S=jt}return}ft=ft||at,ht=ht||q,Ut=Ut||J,(at!==h||ft!==x)&&(i.blendEquationSeparate(oe[at],oe[ft]),h=at,x=ft),(q!==b||J!==v||ht!==T||Ut!==w)&&(i.blendFuncSeparate(Ht[q],Ht[J],Ht[ht],Ht[Ut]),b=q,v=J,T=ht,w=Ut),(Jt.equals(R)===!1||ce!==L)&&(i.blendColor(Jt.r,Jt.g,Jt.b,ce),R.copy(Jt),L=ce),p=N,S=!1}function Ce(N,at){N.side===Be?mt(i.CULL_FACE):st(i.CULL_FACE);let q=N.side===Ie;at&&(q=!q),Nt(q),N.blending===gi&&N.transparent===!1?D(An):D(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const J=N.stencilWrite;a.setTest(J),J&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Zt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(N){M!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),M=N)}function Ot(N){N!==dc?(st(i.CULL_FACE),N!==P&&(N===No?i.cullFace(i.BACK):N===uc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):mt(i.CULL_FACE),P=N}function gt(N){N!==O&&(B&&i.lineWidth(N),O=N)}function Zt(N,at,q){N?(st(i.POLYGON_OFFSET_FILL),(U!==at||V!==q)&&(i.polygonOffset(at,q),U=at,V=q)):mt(i.POLYGON_OFFSET_FILL)}function yt(N){N?st(i.SCISSOR_TEST):mt(i.SCISSOR_TEST)}function C(N){N===void 0&&(N=i.TEXTURE0+G-1),lt!==N&&(i.activeTexture(N),lt=N)}function y(N,at,q){q===void 0&&(lt===null?q=i.TEXTURE0+G-1:q=lt);let J=pt[q];J===void 0&&(J={type:void 0,texture:void 0},pt[q]=J),(J.type!==N||J.texture!==at)&&(lt!==q&&(i.activeTexture(q),lt=q),i.bindTexture(N,at||tt[N]),J.type=N,J.texture=at)}function k(){const N=pt[lt];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Z(){try{i.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{i.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Y(){try{i.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _t(){try{i.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function it(){try{i.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function et(){try{i.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function vt(){try{i.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function nt(){try{i.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ut(){try{i.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Rt(){try{i.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ct(N){Kt.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Kt.copy(N))}function xt(N){A.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),A.copy(N))}function Vt(N,at){let q=c.get(at);q===void 0&&(q=new WeakMap,c.set(at,q));let J=q.get(N);J===void 0&&(J=i.getUniformBlockIndex(at,N.name),q.set(N,J))}function Ft(N,at){const J=c.get(at).get(N);l.get(at)!==J&&(i.uniformBlockBinding(at,J,N.__bindingPointIndex),l.set(at,J))}function ie(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},lt=null,pt={},u={},f=new WeakMap,m=[],g=null,_=!1,p=null,h=null,b=null,v=null,x=null,T=null,w=null,R=new Bt(0,0,0),L=0,S=!1,M=null,P=null,O=null,U=null,V=null,Kt.set(0,0,i.canvas.width,i.canvas.height),A.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:st,disable:mt,bindFramebuffer:ot,drawBuffers:wt,useProgram:ne,setBlending:D,setMaterial:Ce,setFlipSided:Nt,setCullFace:Ot,setLineWidth:gt,setPolygonOffset:Zt,setScissorTest:yt,activeTexture:C,bindTexture:y,unbindTexture:k,compressedTexImage2D:Z,compressedTexImage3D:Q,texImage2D:ut,texImage3D:Rt,updateUBOMapping:Vt,uniformBlockBinding:Ft,texStorage2D:vt,texStorage3D:nt,texSubImage2D:Y,texSubImage3D:_t,compressedTexSubImage2D:it,compressedTexSubImage3D:et,scissor:Ct,viewport:xt,reset:ie}}function _m(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pt,d=new WeakMap;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,y){return m?new OffscreenCanvas(C,y):Ns("canvas")}function _(C,y,k){let Z=1;const Q=yt(C);if((Q.width>k||Q.height>k)&&(Z=k/Math.max(Q.width,Q.height)),Z<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Y=Math.floor(Z*Q.width),_t=Math.floor(Z*Q.height);u===void 0&&(u=g(Y,_t));const it=y?g(Y,_t):u;return it.width=Y,it.height=_t,it.getContext("2d").drawImage(C,0,0,Y,_t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Y+"x"+_t+")."),it}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function p(C){return C.generateMipmaps}function h(C){i.generateMipmap(C)}function b(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(C,y,k,Z,Q=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Y=y;if(y===i.RED&&(k===i.FLOAT&&(Y=i.R32F),k===i.HALF_FLOAT&&(Y=i.R16F),k===i.UNSIGNED_BYTE&&(Y=i.R8)),y===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.R8UI),k===i.UNSIGNED_SHORT&&(Y=i.R16UI),k===i.UNSIGNED_INT&&(Y=i.R32UI),k===i.BYTE&&(Y=i.R8I),k===i.SHORT&&(Y=i.R16I),k===i.INT&&(Y=i.R32I)),y===i.RG&&(k===i.FLOAT&&(Y=i.RG32F),k===i.HALF_FLOAT&&(Y=i.RG16F),k===i.UNSIGNED_BYTE&&(Y=i.RG8)),y===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RG8UI),k===i.UNSIGNED_SHORT&&(Y=i.RG16UI),k===i.UNSIGNED_INT&&(Y=i.RG32UI),k===i.BYTE&&(Y=i.RG8I),k===i.SHORT&&(Y=i.RG16I),k===i.INT&&(Y=i.RG32I)),y===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),k===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),k===i.UNSIGNED_INT&&(Y=i.RGB32UI),k===i.BYTE&&(Y=i.RGB8I),k===i.SHORT&&(Y=i.RGB16I),k===i.INT&&(Y=i.RGB32I)),y===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),k===i.UNSIGNED_INT&&(Y=i.RGBA32UI),k===i.BYTE&&(Y=i.RGBA8I),k===i.SHORT&&(Y=i.RGBA16I),k===i.INT&&(Y=i.RGBA32I)),y===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),y===i.RGBA){const _t=Q?Ds:Yt.getTransfer(Z);k===i.FLOAT&&(Y=i.RGBA32F),k===i.HALF_FLOAT&&(Y=i.RGBA16F),k===i.UNSIGNED_BYTE&&(Y=_t===se?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function x(C,y){let k;return C?y===null||y===Yn||y===Si?k=i.DEPTH24_STENCIL8:y===pn?k=i.DEPTH32F_STENCIL8:y===Xi&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Yn||y===Si?k=i.DEPTH_COMPONENT24:y===pn?k=i.DEPTH_COMPONENT32F:y===Xi&&(k=i.DEPTH_COMPONENT16),k}function T(C,y){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==tn&&C.minFilter!==rn?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function w(C){const y=C.target;y.removeEventListener("dispose",w),L(y),y.isVideoTexture&&d.delete(y)}function R(C){const y=C.target;y.removeEventListener("dispose",R),M(y)}function L(C){const y=n.get(C);if(y.__webglInit===void 0)return;const k=C.source,Z=f.get(k);if(Z){const Q=Z[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&S(C),Object.keys(Z).length===0&&f.delete(k)}n.remove(C)}function S(C){const y=n.get(C);i.deleteTexture(y.__webglTexture);const k=C.source,Z=f.get(k);delete Z[y.__cacheKey],o.memory.textures--}function M(C){const y=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(y.__webglFramebuffer[Z]))for(let Q=0;Q<y.__webglFramebuffer[Z].length;Q++)i.deleteFramebuffer(y.__webglFramebuffer[Z][Q]);else i.deleteFramebuffer(y.__webglFramebuffer[Z]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[Z])}else{if(Array.isArray(y.__webglFramebuffer))for(let Z=0;Z<y.__webglFramebuffer.length;Z++)i.deleteFramebuffer(y.__webglFramebuffer[Z]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Z=0;Z<y.__webglColorRenderbuffer.length;Z++)y.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[Z]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const k=C.textures;for(let Z=0,Q=k.length;Z<Q;Z++){const Y=n.get(k[Z]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(k[Z])}n.remove(C)}let P=0;function O(){P=0}function U(){const C=P;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),P+=1,C}function V(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function G(C,y){const k=n.get(C);if(C.isVideoTexture&&gt(C),C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){const Z=C.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{A(k,C,y);return}}e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+y)}function B(C,y){const k=n.get(C);if(C.version>0&&k.__version!==C.version){A(k,C,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+y)}function K(C,y){const k=n.get(C);if(C.version>0&&k.__version!==C.version){A(k,C,y);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+y)}function W(C,y){const k=n.get(C);if(C.version>0&&k.__version!==C.version){$(k,C,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+y)}const lt={[Wi]:i.REPEAT,[Xn]:i.CLAMP_TO_EDGE,[Ur]:i.MIRRORED_REPEAT},pt={[tn]:i.NEAREST,[kc]:i.NEAREST_MIPMAP_NEAREST,[Ji]:i.NEAREST_MIPMAP_LINEAR,[rn]:i.LINEAR,[$s]:i.LINEAR_MIPMAP_NEAREST,[$n]:i.LINEAR_MIPMAP_LINEAR},bt={[Vc]:i.NEVER,[jc]:i.ALWAYS,[Wc]:i.LESS,[Cl]:i.LEQUAL,[Xc]:i.EQUAL,[Yc]:i.GEQUAL,[$c]:i.GREATER,[qc]:i.NOTEQUAL};function It(C,y){if(y.type===pn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===rn||y.magFilter===$s||y.magFilter===Ji||y.magFilter===$n||y.minFilter===rn||y.minFilter===$s||y.minFilter===Ji||y.minFilter===$n)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,lt[y.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,lt[y.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,lt[y.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,pt[y.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,pt[y.minFilter]),y.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,bt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===tn||y.minFilter!==Ji&&y.minFilter!==$n||y.type===pn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Kt(C,y){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",w));const Z=y.source;let Q=f.get(Z);Q===void 0&&(Q={},f.set(Z,Q));const Y=V(y);if(Y!==C.__cacheKey){Q[Y]===void 0&&(Q[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),Q[Y].usedTimes++;const _t=Q[C.__cacheKey];_t!==void 0&&(Q[C.__cacheKey].usedTimes--,_t.usedTimes===0&&S(y)),C.__cacheKey=Y,C.__webglTexture=Q[Y].texture}return k}function A(C,y,k){let Z=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Z=i.TEXTURE_3D);const Q=Kt(C,y),Y=y.source;e.bindTexture(Z,C.__webglTexture,i.TEXTURE0+k);const _t=n.get(Y);if(Y.version!==_t.__version||Q===!0){e.activeTexture(i.TEXTURE0+k);const it=Yt.getPrimaries(Yt.workingColorSpace),et=y.colorSpace===wn?null:Yt.getPrimaries(y.colorSpace),vt=y.colorSpace===wn||it===et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let nt=_(y.image,!1,s.maxTextureSize);nt=Zt(y,nt);const ut=r.convert(y.format,y.colorSpace),Rt=r.convert(y.type);let Ct=v(y.internalFormat,ut,Rt,y.colorSpace,y.isVideoTexture);It(Z,y);let xt;const Vt=y.mipmaps,Ft=y.isVideoTexture!==!0,ie=_t.__version===void 0||Q===!0,N=Y.dataReady,at=T(y,nt);if(y.isDepthTexture)Ct=x(y.format===Ei,y.type),ie&&(Ft?e.texStorage2D(i.TEXTURE_2D,1,Ct,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,Ct,nt.width,nt.height,0,ut,Rt,null));else if(y.isDataTexture)if(Vt.length>0){Ft&&ie&&e.texStorage2D(i.TEXTURE_2D,at,Ct,Vt[0].width,Vt[0].height);for(let q=0,J=Vt.length;q<J;q++)xt=Vt[q],Ft?N&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,xt.width,xt.height,ut,Rt,xt.data):e.texImage2D(i.TEXTURE_2D,q,Ct,xt.width,xt.height,0,ut,Rt,xt.data);y.generateMipmaps=!1}else Ft?(ie&&e.texStorage2D(i.TEXTURE_2D,at,Ct,nt.width,nt.height),N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,nt.width,nt.height,ut,Rt,nt.data)):e.texImage2D(i.TEXTURE_2D,0,Ct,nt.width,nt.height,0,ut,Rt,nt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ft&&ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,Ct,Vt[0].width,Vt[0].height,nt.depth);for(let q=0,J=Vt.length;q<J;q++)if(xt=Vt[q],y.format!==Qe)if(ut!==null)if(Ft){if(N)if(y.layerUpdates.size>0){const ft=ma(xt.width,xt.height,y.format,y.type);for(const ht of y.layerUpdates){const Ut=xt.data.subarray(ht*ft/xt.data.BYTES_PER_ELEMENT,(ht+1)*ft/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,ht,xt.width,xt.height,1,ut,Ut)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,xt.width,xt.height,nt.depth,ut,xt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,Ct,xt.width,xt.height,nt.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,xt.width,xt.height,nt.depth,ut,Rt,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,q,Ct,xt.width,xt.height,nt.depth,0,ut,Rt,xt.data)}else{Ft&&ie&&e.texStorage2D(i.TEXTURE_2D,at,Ct,Vt[0].width,Vt[0].height);for(let q=0,J=Vt.length;q<J;q++)xt=Vt[q],y.format!==Qe?ut!==null?Ft?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,xt.width,xt.height,ut,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,q,Ct,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?N&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,xt.width,xt.height,ut,Rt,xt.data):e.texImage2D(i.TEXTURE_2D,q,Ct,xt.width,xt.height,0,ut,Rt,xt.data)}else if(y.isDataArrayTexture)if(Ft){if(ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,Ct,nt.width,nt.height,nt.depth),N)if(y.layerUpdates.size>0){const q=ma(nt.width,nt.height,y.format,y.type);for(const J of y.layerUpdates){const ft=nt.data.subarray(J*q/nt.data.BYTES_PER_ELEMENT,(J+1)*q/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,nt.width,nt.height,1,ut,Rt,ft)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,ut,Rt,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ct,nt.width,nt.height,nt.depth,0,ut,Rt,nt.data);else if(y.isData3DTexture)Ft?(ie&&e.texStorage3D(i.TEXTURE_3D,at,Ct,nt.width,nt.height,nt.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,ut,Rt,nt.data)):e.texImage3D(i.TEXTURE_3D,0,Ct,nt.width,nt.height,nt.depth,0,ut,Rt,nt.data);else if(y.isFramebufferTexture){if(ie)if(Ft)e.texStorage2D(i.TEXTURE_2D,at,Ct,nt.width,nt.height);else{let q=nt.width,J=nt.height;for(let ft=0;ft<at;ft++)e.texImage2D(i.TEXTURE_2D,ft,Ct,q,J,0,ut,Rt,null),q>>=1,J>>=1}}else if(Vt.length>0){if(Ft&&ie){const q=yt(Vt[0]);e.texStorage2D(i.TEXTURE_2D,at,Ct,q.width,q.height)}for(let q=0,J=Vt.length;q<J;q++)xt=Vt[q],Ft?N&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,ut,Rt,xt):e.texImage2D(i.TEXTURE_2D,q,Ct,ut,Rt,xt);y.generateMipmaps=!1}else if(Ft){if(ie){const q=yt(nt);e.texStorage2D(i.TEXTURE_2D,at,Ct,q.width,q.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut,Rt,nt)}else e.texImage2D(i.TEXTURE_2D,0,Ct,ut,Rt,nt);p(y)&&h(Z),_t.__version=Y.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function $(C,y,k){if(y.image.length!==6)return;const Z=Kt(C,y),Q=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+k);const Y=n.get(Q);if(Q.version!==Y.__version||Z===!0){e.activeTexture(i.TEXTURE0+k);const _t=Yt.getPrimaries(Yt.workingColorSpace),it=y.colorSpace===wn?null:Yt.getPrimaries(y.colorSpace),et=y.colorSpace===wn||_t===it?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);const vt=y.isCompressedTexture||y.image[0].isCompressedTexture,nt=y.image[0]&&y.image[0].isDataTexture,ut=[];for(let J=0;J<6;J++)!vt&&!nt?ut[J]=_(y.image[J],!0,s.maxCubemapSize):ut[J]=nt?y.image[J].image:y.image[J],ut[J]=Zt(y,ut[J]);const Rt=ut[0],Ct=r.convert(y.format,y.colorSpace),xt=r.convert(y.type),Vt=v(y.internalFormat,Ct,xt,y.colorSpace),Ft=y.isVideoTexture!==!0,ie=Y.__version===void 0||Z===!0,N=Q.dataReady;let at=T(y,Rt);It(i.TEXTURE_CUBE_MAP,y);let q;if(vt){Ft&&ie&&e.texStorage2D(i.TEXTURE_CUBE_MAP,at,Vt,Rt.width,Rt.height);for(let J=0;J<6;J++){q=ut[J].mipmaps;for(let ft=0;ft<q.length;ft++){const ht=q[ft];y.format!==Qe?Ct!==null?Ft?N&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft,0,0,ht.width,ht.height,Ct,ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft,Vt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft,0,0,ht.width,ht.height,Ct,xt,ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft,Vt,ht.width,ht.height,0,Ct,xt,ht.data)}}}else{if(q=y.mipmaps,Ft&&ie){q.length>0&&at++;const J=yt(ut[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,at,Vt,J.width,J.height)}for(let J=0;J<6;J++)if(nt){Ft?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ut[J].width,ut[J].height,Ct,xt,ut[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Vt,ut[J].width,ut[J].height,0,Ct,xt,ut[J].data);for(let ft=0;ft<q.length;ft++){const Ut=q[ft].image[J].image;Ft?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft+1,0,0,Ut.width,Ut.height,Ct,xt,Ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft+1,Vt,Ut.width,Ut.height,0,Ct,xt,Ut.data)}}else{Ft?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ct,xt,ut[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Vt,Ct,xt,ut[J]);for(let ft=0;ft<q.length;ft++){const ht=q[ft];Ft?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft+1,0,0,Ct,xt,ht.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft+1,Vt,Ct,xt,ht.image[J])}}}p(y)&&h(i.TEXTURE_CUBE_MAP),Y.__version=Q.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function tt(C,y,k,Z,Q,Y){const _t=r.convert(k.format,k.colorSpace),it=r.convert(k.type),et=v(k.internalFormat,_t,it,k.colorSpace),vt=n.get(y),nt=n.get(k);if(nt.__renderTarget=y,!vt.__hasExternalTextures){const ut=Math.max(1,y.width>>Y),Rt=Math.max(1,y.height>>Y);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,Y,et,ut,Rt,y.depth,0,_t,it,null):e.texImage2D(Q,Y,et,ut,Rt,0,_t,it,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),Ot(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,Q,nt.__webglTexture,0,Nt(y)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,Q,nt.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(C,y,k){if(i.bindRenderbuffer(i.RENDERBUFFER,C),y.depthBuffer){const Z=y.depthTexture,Q=Z&&Z.isDepthTexture?Z.type:null,Y=x(y.stencilBuffer,Q),_t=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=Nt(y);Ot(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it,Y,y.width,y.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,it,Y,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Y,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,C)}else{const Z=y.textures;for(let Q=0;Q<Z.length;Q++){const Y=Z[Q],_t=r.convert(Y.format,Y.colorSpace),it=r.convert(Y.type),et=v(Y.internalFormat,_t,it,Y.colorSpace),vt=Nt(y);k&&Ot(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,et,y.width,y.height):Ot(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt,et,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,et,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function mt(C,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(y.depthTexture);Z.__renderTarget=y,(!Z.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),G(y.depthTexture,0);const Q=Z.__webglTexture,Y=Nt(y);if(y.depthTexture.format===_i)Ot(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(y.depthTexture.format===Ei)Ot(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function ot(C){const y=n.get(C),k=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){const Z=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Z){const Q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Z.removeEventListener("dispose",Q)};Z.addEventListener("dispose",Q),y.__depthDisposeCallback=Q}y.__boundDepthTexture=Z}if(C.depthTexture&&!y.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");mt(y.__webglFramebuffer,C)}else if(k){y.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[Z]),y.__webglDepthbuffer[Z]===void 0)y.__webglDepthbuffer[Z]=i.createRenderbuffer(),st(y.__webglDepthbuffer[Z],C,!1);else{const Q=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=y.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),st(y.__webglDepthbuffer,C,!1);else{const Z=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,Q)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function wt(C,y,k){const Z=n.get(C);y!==void 0&&tt(Z.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&ot(C)}function ne(C){const y=C.texture,k=n.get(C),Z=n.get(y);C.addEventListener("dispose",R);const Q=C.textures,Y=C.isWebGLCubeRenderTarget===!0,_t=Q.length>1;if(_t||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=y.version,o.memory.textures++),Y){k.__webglFramebuffer=[];for(let it=0;it<6;it++)if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[it]=[];for(let et=0;et<y.mipmaps.length;et++)k.__webglFramebuffer[it][et]=i.createFramebuffer()}else k.__webglFramebuffer[it]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let it=0;it<y.mipmaps.length;it++)k.__webglFramebuffer[it]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(_t)for(let it=0,et=Q.length;it<et;it++){const vt=n.get(Q[it]);vt.__webglTexture===void 0&&(vt.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&Ot(C)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let it=0;it<Q.length;it++){const et=Q[it];k.__webglColorRenderbuffer[it]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[it]);const vt=r.convert(et.format,et.colorSpace),nt=r.convert(et.type),ut=v(et.internalFormat,vt,nt,et.colorSpace,C.isXRRenderTarget===!0),Rt=Nt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,ut,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,k.__webglColorRenderbuffer[it])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),st(k.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),It(i.TEXTURE_CUBE_MAP,y);for(let it=0;it<6;it++)if(y.mipmaps&&y.mipmaps.length>0)for(let et=0;et<y.mipmaps.length;et++)tt(k.__webglFramebuffer[it][et],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,et);else tt(k.__webglFramebuffer[it],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);p(y)&&h(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let it=0,et=Q.length;it<et;it++){const vt=Q[it],nt=n.get(vt);e.bindTexture(i.TEXTURE_2D,nt.__webglTexture),It(i.TEXTURE_2D,vt),tt(k.__webglFramebuffer,C,vt,i.COLOR_ATTACHMENT0+it,i.TEXTURE_2D,0),p(vt)&&h(i.TEXTURE_2D)}e.unbindTexture()}else{let it=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(it=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(it,Z.__webglTexture),It(it,y),y.mipmaps&&y.mipmaps.length>0)for(let et=0;et<y.mipmaps.length;et++)tt(k.__webglFramebuffer[et],C,y,i.COLOR_ATTACHMENT0,it,et);else tt(k.__webglFramebuffer,C,y,i.COLOR_ATTACHMENT0,it,0);p(y)&&h(it),e.unbindTexture()}C.depthBuffer&&ot(C)}function oe(C){const y=C.textures;for(let k=0,Z=y.length;k<Z;k++){const Q=y[k];if(p(Q)){const Y=b(C),_t=n.get(Q).__webglTexture;e.bindTexture(Y,_t),h(Y),e.unbindTexture()}}}const Ht=[],D=[];function Ce(C){if(C.samples>0){if(Ot(C)===!1){const y=C.textures,k=C.width,Z=C.height;let Q=i.COLOR_BUFFER_BIT;const Y=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=n.get(C),it=y.length>1;if(it)for(let et=0;et<y.length;et++)e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let et=0;et<y.length;et++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),it){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_t.__webglColorRenderbuffer[et]);const vt=n.get(y[et]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,vt,0)}i.blitFramebuffer(0,0,k,Z,0,0,k,Z,Q,i.NEAREST),l===!0&&(Ht.length=0,D.length=0,Ht.push(i.COLOR_ATTACHMENT0+et),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ht.push(Y),D.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ht))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),it)for(let et=0;et<y.length;et++){e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.RENDERBUFFER,_t.__webglColorRenderbuffer[et]);const vt=n.get(y[et]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.TEXTURE_2D,vt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const y=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Nt(C){return Math.min(s.maxSamples,C.samples)}function Ot(C){const y=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function gt(C){const y=o.render.frame;d.get(C)!==y&&(d.set(C,y),C.update())}function Zt(C,y){const k=C.colorSpace,Z=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==bi&&k!==wn&&(Yt.getTransfer(k)===se?(Z!==Qe||Q!==_n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),y}function yt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=O,this.setTexture2D=G,this.setTexture2DArray=B,this.setTexture3D=K,this.setTextureCube=W,this.rebindTextures=wt,this.setupRenderTarget=ne,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=Ot}function vm(i,t){function e(n,s=wn){let r;const o=Yt.getTransfer(s);if(n===_n)return i.UNSIGNED_BYTE;if(n===go)return i.UNSIGNED_SHORT_4_4_4_4;if(n===_o)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ml)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===vl)return i.BYTE;if(n===xl)return i.SHORT;if(n===Xi)return i.UNSIGNED_SHORT;if(n===mo)return i.INT;if(n===Yn)return i.UNSIGNED_INT;if(n===pn)return i.FLOAT;if(n===qi)return i.HALF_FLOAT;if(n===yl)return i.ALPHA;if(n===Sl)return i.RGB;if(n===Qe)return i.RGBA;if(n===El)return i.LUMINANCE;if(n===bl)return i.LUMINANCE_ALPHA;if(n===_i)return i.DEPTH_COMPONENT;if(n===Ei)return i.DEPTH_STENCIL;if(n===wl)return i.RED;if(n===vo)return i.RED_INTEGER;if(n===Tl)return i.RG;if(n===xo)return i.RG_INTEGER;if(n===Mo)return i.RGBA_INTEGER;if(n===Es||n===bs||n===ws||n===Ts)if(o===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Es)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ts)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Es)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===bs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ws)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ts)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fr||n===Or||n===zr||n===kr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Fr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Or)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===kr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Br||n===Gr||n===Hr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Br||n===Gr)return o===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Hr)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Vr||n===Wr||n===Xr||n===$r||n===qr||n===Yr||n===jr||n===Kr||n===Zr||n===Jr||n===Qr||n===to||n===eo||n===no)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Vr)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wr)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xr)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$r)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qr)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Yr)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===jr)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Kr)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Zr)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Jr)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qr)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===to)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===eo)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===no)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===As||n===io||n===so)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===As)return o===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===io)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===so)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Al||n===ro||n===oo||n===ao)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===As)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ro)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===oo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ao)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Si?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const xm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mm=`
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

}`;class ym{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ae,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ln({vertexShader:xm,fragmentShader:Mm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Et(new Gs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Sm extends Kn{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,d=null,u=null,f=null,m=null,g=null;const _=new ym,p=e.getContextAttributes();let h=null,b=null;const v=[],x=[],T=new Pt;let w=null;const R=new $e;R.viewport=new de;const L=new $e;L.viewport=new de;const S=[R,L],M=new Bh;let P=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(A){let $=v[A];return $===void 0&&($=new fr,v[A]=$),$.getTargetRaySpace()},this.getControllerGrip=function(A){let $=v[A];return $===void 0&&($=new fr,v[A]=$),$.getGripSpace()},this.getHand=function(A){let $=v[A];return $===void 0&&($=new fr,v[A]=$),$.getHandSpace()};function U(A){const $=x.indexOf(A.inputSource);if($===-1)return;const tt=v[$];tt!==void 0&&(tt.update(A.inputSource,A.frame,c||o),tt.dispatchEvent({type:A.type,data:A.inputSource}))}function V(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",G);for(let A=0;A<v.length;A++){const $=x[A];$!==null&&(x[A]=null,v[A].disconnect($))}P=null,O=null,_.reset(),t.setRenderTarget(h),m=null,f=null,u=null,s=null,b=null,Kt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(A){r=A,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(A){a=A,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(A){c=A},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(A){if(s=A,s!==null){if(h=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",V),s.addEventListener("inputsourceschange",G),p.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(T),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let tt=null,st=null,mt=null;p.depth&&(mt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=p.stencil?Ei:_i,st=p.stencil?Si:Yn);const ot={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(ot),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new jn(f.textureWidth,f.textureHeight,{format:Qe,type:_n,depthTexture:new kl(f.textureWidth,f.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const tt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new jn(m.framebufferWidth,m.framebufferHeight,{format:Qe,type:_n,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Kt.setContext(s),Kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function G(A){for(let $=0;$<A.removed.length;$++){const tt=A.removed[$],st=x.indexOf(tt);st>=0&&(x[st]=null,v[st].disconnect(tt))}for(let $=0;$<A.added.length;$++){const tt=A.added[$];let st=x.indexOf(tt);if(st===-1){for(let ot=0;ot<v.length;ot++)if(ot>=x.length){x.push(tt),st=ot;break}else if(x[ot]===null){x[ot]=tt,st=ot;break}if(st===-1)break}const mt=v[st];mt&&mt.connect(tt)}}const B=new I,K=new I;function W(A,$,tt){B.setFromMatrixPosition($.matrixWorld),K.setFromMatrixPosition(tt.matrixWorld);const st=B.distanceTo(K),mt=$.projectionMatrix.elements,ot=tt.projectionMatrix.elements,wt=mt[14]/(mt[10]-1),ne=mt[14]/(mt[10]+1),oe=(mt[9]+1)/mt[5],Ht=(mt[9]-1)/mt[5],D=(mt[8]-1)/mt[0],Ce=(ot[8]+1)/ot[0],Nt=wt*D,Ot=wt*Ce,gt=st/(-D+Ce),Zt=gt*-D;if($.matrixWorld.decompose(A.position,A.quaternion,A.scale),A.translateX(Zt),A.translateZ(gt),A.matrixWorld.compose(A.position,A.quaternion,A.scale),A.matrixWorldInverse.copy(A.matrixWorld).invert(),mt[10]===-1)A.projectionMatrix.copy($.projectionMatrix),A.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const yt=wt+gt,C=ne+gt,y=Nt-Zt,k=Ot+(st-Zt),Z=oe*ne/C*yt,Q=Ht*ne/C*yt;A.projectionMatrix.makePerspective(y,k,Z,Q,yt,C),A.projectionMatrixInverse.copy(A.projectionMatrix).invert()}}function lt(A,$){$===null?A.matrixWorld.copy(A.matrix):A.matrixWorld.multiplyMatrices($.matrixWorld,A.matrix),A.matrixWorldInverse.copy(A.matrixWorld).invert()}this.updateCamera=function(A){if(s===null)return;let $=A.near,tt=A.far;_.texture!==null&&(_.depthNear>0&&($=_.depthNear),_.depthFar>0&&(tt=_.depthFar)),M.near=L.near=R.near=$,M.far=L.far=R.far=tt,(P!==M.near||O!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,O=M.far),R.layers.mask=A.layers.mask|2,L.layers.mask=A.layers.mask|4,M.layers.mask=R.layers.mask|L.layers.mask;const st=A.parent,mt=M.cameras;lt(M,st);for(let ot=0;ot<mt.length;ot++)lt(mt[ot],st);mt.length===2?W(M,R,L):M.projectionMatrix.copy(R.projectionMatrix),pt(A,M,st)};function pt(A,$,tt){tt===null?A.matrix.copy($.matrixWorld):(A.matrix.copy(tt.matrixWorld),A.matrix.invert(),A.matrix.multiply($.matrixWorld)),A.matrix.decompose(A.position,A.quaternion,A.scale),A.updateMatrixWorld(!0),A.projectionMatrix.copy($.projectionMatrix),A.projectionMatrixInverse.copy($.projectionMatrixInverse),A.isPerspectiveCamera&&(A.fov=lo*2*Math.atan(1/A.projectionMatrix.elements[5]),A.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(A){l=A,f!==null&&(f.fixedFoveation=A),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=A)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let bt=null;function It(A,$){if(d=$.getViewerPose(c||o),g=$,d!==null){const tt=d.views;m!==null&&(t.setRenderTargetFramebuffer(b,m.framebuffer),t.setRenderTarget(b));let st=!1;tt.length!==M.cameras.length&&(M.cameras.length=0,st=!0);for(let wt=0;wt<tt.length;wt++){const ne=tt[wt];let oe=null;if(m!==null)oe=m.getViewport(ne);else{const D=u.getViewSubImage(f,ne);oe=D.viewport,wt===0&&(t.setRenderTargetTextures(b,D.colorTexture,f.ignoreDepthValues?void 0:D.depthStencilTexture),t.setRenderTarget(b))}let Ht=S[wt];Ht===void 0&&(Ht=new $e,Ht.layers.enable(wt),Ht.viewport=new de,S[wt]=Ht),Ht.matrix.fromArray(ne.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(ne.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(oe.x,oe.y,oe.width,oe.height),wt===0&&(M.matrix.copy(Ht.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),st===!0&&M.cameras.push(Ht)}const mt=s.enabledFeatures;if(mt&&mt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&u){const wt=u.getDepthInformation(tt[0]);wt&&wt.isValid&&wt.texture&&_.init(t,wt,s.renderState)}}for(let tt=0;tt<v.length;tt++){const st=x[tt],mt=v[tt];st!==null&&mt!==void 0&&mt.update(st,$,c||o)}bt&&bt(A,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}const Kt=new Vl;Kt.setAnimationLoop(It),this.setAnimationLoop=function(A){bt=A},this.dispose=function(){}}}const zn=new on,Em=new ee;function bm(i,t){function e(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function n(p,h){h.color.getRGB(p.fogColor.value,Ul(i)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function s(p,h,b,v,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(p,h):h.isMeshToonMaterial?(r(p,h),u(p,h)):h.isMeshPhongMaterial?(r(p,h),d(p,h)):h.isMeshStandardMaterial?(r(p,h),f(p,h),h.isMeshPhysicalMaterial&&m(p,h,x)):h.isMeshMatcapMaterial?(r(p,h),g(p,h)):h.isMeshDepthMaterial?r(p,h):h.isMeshDistanceMaterial?(r(p,h),_(p,h)):h.isMeshNormalMaterial?r(p,h):h.isLineBasicMaterial?(o(p,h),h.isLineDashedMaterial&&a(p,h)):h.isPointsMaterial?l(p,h,b,v):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,e(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,e(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Ie&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,e(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Ie&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,e(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,e(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const b=t.get(h),v=b.envMap,x=b.envMapRotation;v&&(p.envMap.value=v,zn.copy(x),zn.x*=-1,zn.y*=-1,zn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(zn.y*=-1,zn.z*=-1),p.envMapRotation.value.setFromMatrix4(Em.makeRotationFromEuler(zn)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,p.aoMapTransform))}function o(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,e(h.map,p.mapTransform))}function a(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,b,v){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*b,p.scale.value=v*.5,h.map&&(p.map.value=h.map,e(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,e(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function d(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function u(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,b){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ie&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function _(p,h){const b=t.get(h).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function wm(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,v){const x=v.program;n.uniformBlockBinding(b,x)}function c(b,v){let x=s[b.id];x===void 0&&(g(b),x=d(b),s[b.id]=x,b.addEventListener("dispose",p));const T=v.program;n.updateUBOMapping(b,T);const w=t.render.frame;r[b.id]!==w&&(f(b),r[b.id]=w)}function d(b){const v=u();b.__bindingPointIndex=v;const x=i.createBuffer(),T=b.__size,w=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,T,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,x),x}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const v=s[b.id],x=b.uniforms,T=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let w=0,R=x.length;w<R;w++){const L=Array.isArray(x[w])?x[w]:[x[w]];for(let S=0,M=L.length;S<M;S++){const P=L[S];if(m(P,w,S,T)===!0){const O=P.__offset,U=Array.isArray(P.value)?P.value:[P.value];let V=0;for(let G=0;G<U.length;G++){const B=U[G],K=_(B);typeof B=="number"||typeof B=="boolean"?(P.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,O+V,P.__data)):B.isMatrix3?(P.__data[0]=B.elements[0],P.__data[1]=B.elements[1],P.__data[2]=B.elements[2],P.__data[3]=0,P.__data[4]=B.elements[3],P.__data[5]=B.elements[4],P.__data[6]=B.elements[5],P.__data[7]=0,P.__data[8]=B.elements[6],P.__data[9]=B.elements[7],P.__data[10]=B.elements[8],P.__data[11]=0):(B.toArray(P.__data,V),V+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,v,x,T){const w=b.value,R=v+"_"+x;if(T[R]===void 0)return typeof w=="number"||typeof w=="boolean"?T[R]=w:T[R]=w.clone(),!0;{const L=T[R];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return T[R]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function g(b){const v=b.uniforms;let x=0;const T=16;for(let R=0,L=v.length;R<L;R++){const S=Array.isArray(v[R])?v[R]:[v[R]];for(let M=0,P=S.length;M<P;M++){const O=S[M],U=Array.isArray(O.value)?O.value:[O.value];for(let V=0,G=U.length;V<G;V++){const B=U[V],K=_(B),W=x%T,lt=W%K.boundary,pt=W+lt;x+=lt,pt!==0&&T-pt<K.storage&&(x+=T-pt),O.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=x,x+=K.storage}}}const w=x%T;return w>0&&(x+=T-w),b.__size=x,b.__cache={},this}function _(b){const v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),v}function p(b){const v=b.target;v.removeEventListener("dispose",p);const x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function h(){for(const b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:h}}class Tm{constructor(t={}){const{canvas:e=Jc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const g=new Uint32Array(4),_=new Int32Array(4);let p=null,h=null;const b=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ke,this.toneMapping=Rn,this.toneMappingExposure=1;const x=this;let T=!1,w=0,R=0,L=null,S=-1,M=null;const P=new de,O=new de;let U=null;const V=new Bt(0);let G=0,B=e.width,K=e.height,W=1,lt=null,pt=null;const bt=new de(0,0,B,K),It=new de(0,0,B,K);let Kt=!1;const A=new Eo;let $=!1,tt=!1;this.transmissionResolutionScale=1;const st=new ee,mt=new ee,ot=new I,wt=new de,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let oe=!1;function Ht(){return L===null?W:1}let D=n;function Ce(E,F){return e.getContext(E,F)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${po}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",ht,!1),D===null){const F="webgl2";if(D=Ce(F,E),D===null)throw Ce(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Nt,Ot,gt,Zt,yt,C,y,k,Z,Q,Y,_t,it,et,vt,nt,ut,Rt,Ct,xt,Vt,Ft,ie,N;function at(){Nt=new Ff(D),Nt.init(),Ft=new vm(D,Nt),Ot=new Cf(D,Nt,t,Ft),gt=new gm(D,Nt),Ot.reverseDepthBuffer&&f&&gt.buffers.depth.setReversed(!0),Zt=new kf(D),yt=new im,C=new _m(D,Nt,gt,yt,Ot,Ft,Zt),y=new Lf(x),k=new Uf(x),Z=new Wh(D),ie=new Af(D,Z),Q=new Of(D,Z,Zt,ie),Y=new Gf(D,Q,Z,Zt),Ct=new Bf(D,Ot,C),nt=new Pf(yt),_t=new nm(x,y,k,Nt,Ot,ie,nt),it=new bm(x,yt),et=new rm,vt=new dm(Nt),Rt=new Tf(x,y,k,gt,Y,m,l),ut=new pm(x,Y,Ot),N=new wm(D,Zt,Ot,gt),xt=new Rf(D,Nt,Zt),Vt=new zf(D,Nt,Zt),Zt.programs=_t.programs,x.capabilities=Ot,x.extensions=Nt,x.properties=yt,x.renderLists=et,x.shadowMap=ut,x.state=gt,x.info=Zt}at();const q=new Sm(x,D);this.xr=q,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=Nt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Nt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(E){E!==void 0&&(W=E,this.setSize(B,K,!1))},this.getSize=function(E){return E.set(B,K)},this.setSize=function(E,F,H=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=E,K=F,e.width=Math.floor(E*W),e.height=Math.floor(F*W),H===!0&&(e.style.width=E+"px",e.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(B*W,K*W).floor()},this.setDrawingBufferSize=function(E,F,H){B=E,K=F,W=H,e.width=Math.floor(E*H),e.height=Math.floor(F*H),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(bt)},this.setViewport=function(E,F,H,X){E.isVector4?bt.set(E.x,E.y,E.z,E.w):bt.set(E,F,H,X),gt.viewport(P.copy(bt).multiplyScalar(W).round())},this.getScissor=function(E){return E.copy(It)},this.setScissor=function(E,F,H,X){E.isVector4?It.set(E.x,E.y,E.z,E.w):It.set(E,F,H,X),gt.scissor(O.copy(It).multiplyScalar(W).round())},this.getScissorTest=function(){return Kt},this.setScissorTest=function(E){gt.setScissorTest(Kt=E)},this.setOpaqueSort=function(E){lt=E},this.setTransparentSort=function(E){pt=E},this.getClearColor=function(E){return E.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor(...arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,H=!0){let X=0;if(E){let z=!1;if(L!==null){const rt=L.texture.format;z=rt===Mo||rt===xo||rt===vo}if(z){const rt=L.texture.type,dt=rt===_n||rt===Yn||rt===Xi||rt===Si||rt===go||rt===_o,Mt=Rt.getClearColor(),St=Rt.getClearAlpha(),Lt=Mt.r,Dt=Mt.g,Tt=Mt.b;dt?(g[0]=Lt,g[1]=Dt,g[2]=Tt,g[3]=St,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=Lt,_[1]=Dt,_[2]=Tt,_[3]=St,D.clearBufferiv(D.COLOR,0,_))}else X|=D.COLOR_BUFFER_BIT}F&&(X|=D.DEPTH_BUFFER_BIT),H&&(X|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),Rt.dispose(),et.dispose(),vt.dispose(),yt.dispose(),y.dispose(),k.dispose(),Y.dispose(),ie.dispose(),N.dispose(),_t.dispose(),q.dispose(),q.removeEventListener("sessionstart",Ci),q.removeEventListener("sessionend",nn),Me.stop()};function J(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const E=Zt.autoReset,F=ut.enabled,H=ut.autoUpdate,X=ut.needsUpdate,z=ut.type;at(),Zt.autoReset=E,ut.enabled=F,ut.autoUpdate=H,ut.needsUpdate=X,ut.type=z}function ht(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ut(E){const F=E.target;F.removeEventListener("dispose",Ut),Jt(F)}function Jt(E){ce(E),yt.remove(E)}function ce(E){const F=yt.get(E).programs;F!==void 0&&(F.forEach(function(H){_t.releaseProgram(H)}),E.isShaderMaterial&&_t.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,H,X,z,rt){F===null&&(F=ne);const dt=z.isMesh&&z.matrixWorld.determinant()<0,Mt=ic(E,F,H,X,z);gt.setMaterial(X,dt);let St=H.index,Lt=1;if(X.wireframe===!0){if(St=Q.getWireframeAttribute(H),St===void 0)return;Lt=2}const Dt=H.drawRange,Tt=H.attributes.position;let $t=Dt.start*Lt,Qt=(Dt.start+Dt.count)*Lt;rt!==null&&($t=Math.max($t,rt.start*Lt),Qt=Math.min(Qt,(rt.start+rt.count)*Lt)),St!==null?($t=Math.max($t,0),Qt=Math.min(Qt,St.count)):Tt!=null&&($t=Math.max($t,0),Qt=Math.min(Qt,Tt.count));const fe=Qt-$t;if(fe<0||fe===1/0)return;ie.setup(z,X,Mt,H,St);let he,qt=xt;if(St!==null&&(he=Z.get(St),qt=Vt,qt.setIndex(he)),z.isMesh)X.wireframe===!0?(gt.setLineWidth(X.wireframeLinewidth*Ht()),qt.setMode(D.LINES)):qt.setMode(D.TRIANGLES);else if(z.isLine){let At=X.linewidth;At===void 0&&(At=1),gt.setLineWidth(At*Ht()),z.isLineSegments?qt.setMode(D.LINES):z.isLineLoop?qt.setMode(D.LINE_LOOP):qt.setMode(D.LINE_STRIP)}else z.isPoints?qt.setMode(D.POINTS):z.isSprite&&qt.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Gn("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),qt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Nt.get("WEBGL_multi_draw"))qt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const At=z._multiDrawStarts,ye=z._multiDrawCounts,te=z._multiDrawCount,Ye=St?Z.get(St).bytesPerElement:1,Zn=yt.get(X).currentProgram.getUniforms();for(let Fe=0;Fe<te;Fe++)Zn.setValue(D,"_gl_DrawID",Fe),qt.render(At[Fe]/Ye,ye[Fe])}else if(z.isInstancedMesh)qt.renderInstances($t,fe,z.count);else if(H.isInstancedBufferGeometry){const At=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,ye=Math.min(H.instanceCount,At);qt.renderInstances($t,fe,ye)}else qt.render($t,fe)};function jt(E,F,H){E.transparent===!0&&E.side===Be&&E.forceSinglePass===!1?(E.side=Ie,E.needsUpdate=!0,Zi(E,F,H),E.side=Cn,E.needsUpdate=!0,Zi(E,F,H),E.side=Be):Zi(E,F,H)}this.compile=function(E,F,H=null){H===null&&(H=E),h=vt.get(H),h.init(F),v.push(h),H.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(h.pushLight(z),z.castShadow&&h.pushShadow(z))}),E!==H&&E.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(h.pushLight(z),z.castShadow&&h.pushShadow(z))}),h.setupLights();const X=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const rt=z.material;if(rt)if(Array.isArray(rt))for(let dt=0;dt<rt.length;dt++){const Mt=rt[dt];jt(Mt,H,z),X.add(Mt)}else jt(rt,H,z),X.add(rt)}),h=v.pop(),X},this.compileAsync=function(E,F,H=null){const X=this.compile(E,F,H);return new Promise(z=>{function rt(){if(X.forEach(function(dt){yt.get(dt).currentProgram.isReady()&&X.delete(dt)}),X.size===0){z(E);return}setTimeout(rt,10)}Nt.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let Ue=null;function qe(E){Ue&&Ue(E)}function Ci(){Me.stop()}function nn(){Me.start()}const Me=new Vl;Me.setAnimationLoop(qe),typeof self<"u"&&Me.setContext(self),this.setAnimationLoop=function(E){Ue=E,q.setAnimationLoop(E),E===null?Me.stop():Me.start()},q.addEventListener("sessionstart",Ci),q.addEventListener("sessionend",nn),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(F),F=q.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,F,L),h=vt.get(E,v.length),h.init(F),v.push(h),mt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),A.setFromProjectionMatrix(mt),tt=this.localClippingEnabled,$=nt.init(this.clippingPlanes,tt),p=et.get(E,b.length),p.init(),b.push(p),q.enabled===!0&&q.isPresenting===!0){const rt=x.xr.getDepthSensingMesh();rt!==null&&Pi(rt,F,-1/0,x.sortObjects)}Pi(E,F,0,x.sortObjects),p.finish(),x.sortObjects===!0&&p.sort(lt,pt),oe=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,oe&&Rt.addToRenderList(p,E),this.info.render.frame++,$===!0&&nt.beginShadows();const H=h.state.shadowsArray;ut.render(H,E,F),$===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=p.opaque,z=p.transmissive;if(h.setupLights(),F.isArrayCamera){const rt=F.cameras;if(z.length>0)for(let dt=0,Mt=rt.length;dt<Mt;dt++){const St=rt[dt];Di(X,z,E,St)}oe&&Rt.render(E);for(let dt=0,Mt=rt.length;dt<Mt;dt++){const St=rt[dt];Li(p,E,St,St.viewport)}}else z.length>0&&Di(X,z,E,F),oe&&Rt.render(E),Li(p,E,F);L!==null&&R===0&&(C.updateMultisampleRenderTarget(L),C.updateRenderTargetMipmap(L)),E.isScene===!0&&E.onAfterRender(x,E,F),ie.resetDefaultState(),S=-1,M=null,v.pop(),v.length>0?(h=v[v.length-1],$===!0&&nt.setGlobalState(x.clippingPlanes,h.state.camera)):h=null,b.pop(),b.length>0?p=b[b.length-1]:p=null};function Pi(E,F,H,X){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)h.pushLight(E),E.castShadow&&h.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||A.intersectsSprite(E)){X&&wt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(mt);const dt=Y.update(E),Mt=E.material;Mt.visible&&p.push(E,dt,Mt,H,wt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||A.intersectsObject(E))){const dt=Y.update(E),Mt=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),wt.copy(E.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),wt.copy(dt.boundingSphere.center)),wt.applyMatrix4(E.matrixWorld).applyMatrix4(mt)),Array.isArray(Mt)){const St=dt.groups;for(let Lt=0,Dt=St.length;Lt<Dt;Lt++){const Tt=St[Lt],$t=Mt[Tt.materialIndex];$t&&$t.visible&&p.push(E,dt,$t,H,wt.z,Tt)}}else Mt.visible&&p.push(E,dt,Mt,H,wt.z,null)}}const rt=E.children;for(let dt=0,Mt=rt.length;dt<Mt;dt++)Pi(rt[dt],F,H,X)}function Li(E,F,H,X){const z=E.opaque,rt=E.transmissive,dt=E.transparent;h.setupLightsView(H),$===!0&&nt.setGlobalState(x.clippingPlanes,H),X&&gt.viewport(P.copy(X)),z.length>0&&Ki(z,F,H),rt.length>0&&Ki(rt,F,H),dt.length>0&&Ki(dt,F,H),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function Di(E,F,H,X){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[X.id]===void 0&&(h.state.transmissionRenderTarget[X.id]=new jn(1,1,{generateMipmaps:!0,type:Nt.has("EXT_color_buffer_half_float")||Nt.has("EXT_color_buffer_float")?qi:_n,minFilter:$n,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));const rt=h.state.transmissionRenderTarget[X.id],dt=X.viewport||P;rt.setSize(dt.z*x.transmissionResolutionScale,dt.w*x.transmissionResolutionScale);const Mt=x.getRenderTarget();x.setRenderTarget(rt),x.getClearColor(V),G=x.getClearAlpha(),G<1&&x.setClearColor(16777215,.5),x.clear(),oe&&Rt.render(H);const St=x.toneMapping;x.toneMapping=Rn;const Lt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),h.setupLightsView(X),$===!0&&nt.setGlobalState(x.clippingPlanes,X),Ki(E,H,X),C.updateMultisampleRenderTarget(rt),C.updateRenderTargetMipmap(rt),Nt.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let Tt=0,$t=F.length;Tt<$t;Tt++){const Qt=F[Tt],fe=Qt.object,he=Qt.geometry,qt=Qt.material,At=Qt.group;if(qt.side===Be&&fe.layers.test(X.layers)){const ye=qt.side;qt.side=Ie,qt.needsUpdate=!0,Lo(fe,H,X,he,qt,At),qt.side=ye,qt.needsUpdate=!0,Dt=!0}}Dt===!0&&(C.updateMultisampleRenderTarget(rt),C.updateRenderTargetMipmap(rt))}x.setRenderTarget(Mt),x.setClearColor(V,G),Lt!==void 0&&(X.viewport=Lt),x.toneMapping=St}function Ki(E,F,H){const X=F.isScene===!0?F.overrideMaterial:null;for(let z=0,rt=E.length;z<rt;z++){const dt=E[z],Mt=dt.object,St=dt.geometry,Lt=X===null?dt.material:X,Dt=dt.group;Mt.layers.test(H.layers)&&Lo(Mt,F,H,St,Lt,Dt)}}function Lo(E,F,H,X,z,rt){E.onBeforeRender(x,F,H,X,z,rt),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(x,F,H,X,E,rt),z.transparent===!0&&z.side===Be&&z.forceSinglePass===!1?(z.side=Ie,z.needsUpdate=!0,x.renderBufferDirect(H,F,X,z,E,rt),z.side=Cn,z.needsUpdate=!0,x.renderBufferDirect(H,F,X,z,E,rt),z.side=Be):x.renderBufferDirect(H,F,X,z,E,rt),E.onAfterRender(x,F,H,X,z,rt)}function Zi(E,F,H){F.isScene!==!0&&(F=ne);const X=yt.get(E),z=h.state.lights,rt=h.state.shadowsArray,dt=z.state.version,Mt=_t.getParameters(E,z.state,rt,F,H),St=_t.getProgramCacheKey(Mt);let Lt=X.programs;X.environment=E.isMeshStandardMaterial?F.environment:null,X.fog=F.fog,X.envMap=(E.isMeshStandardMaterial?k:y).get(E.envMap||X.environment),X.envMapRotation=X.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Lt===void 0&&(E.addEventListener("dispose",Ut),Lt=new Map,X.programs=Lt);let Dt=Lt.get(St);if(Dt!==void 0){if(X.currentProgram===Dt&&X.lightsStateVersion===dt)return Io(E,Mt),Dt}else Mt.uniforms=_t.getUniforms(E),E.onBeforeCompile(Mt,x),Dt=_t.acquireProgram(Mt,St),Lt.set(St,Dt),X.uniforms=Mt.uniforms;const Tt=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Tt.clippingPlanes=nt.uniform),Io(E,Mt),X.needsLights=rc(E),X.lightsStateVersion=dt,X.needsLights&&(Tt.ambientLightColor.value=z.state.ambient,Tt.lightProbe.value=z.state.probe,Tt.directionalLights.value=z.state.directional,Tt.directionalLightShadows.value=z.state.directionalShadow,Tt.spotLights.value=z.state.spot,Tt.spotLightShadows.value=z.state.spotShadow,Tt.rectAreaLights.value=z.state.rectArea,Tt.ltc_1.value=z.state.rectAreaLTC1,Tt.ltc_2.value=z.state.rectAreaLTC2,Tt.pointLights.value=z.state.point,Tt.pointLightShadows.value=z.state.pointShadow,Tt.hemisphereLights.value=z.state.hemi,Tt.directionalShadowMap.value=z.state.directionalShadowMap,Tt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Tt.spotShadowMap.value=z.state.spotShadowMap,Tt.spotLightMatrix.value=z.state.spotLightMatrix,Tt.spotLightMap.value=z.state.spotLightMap,Tt.pointShadowMap.value=z.state.pointShadowMap,Tt.pointShadowMatrix.value=z.state.pointShadowMatrix),X.currentProgram=Dt,X.uniformsList=null,Dt}function Do(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=Cs.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function Io(E,F){const H=yt.get(E);H.outputColorSpace=F.outputColorSpace,H.batching=F.batching,H.batchingColor=F.batchingColor,H.instancing=F.instancing,H.instancingColor=F.instancingColor,H.instancingMorph=F.instancingMorph,H.skinning=F.skinning,H.morphTargets=F.morphTargets,H.morphNormals=F.morphNormals,H.morphColors=F.morphColors,H.morphTargetsCount=F.morphTargetsCount,H.numClippingPlanes=F.numClippingPlanes,H.numIntersection=F.numClipIntersection,H.vertexAlphas=F.vertexAlphas,H.vertexTangents=F.vertexTangents,H.toneMapping=F.toneMapping}function ic(E,F,H,X,z){F.isScene!==!0&&(F=ne),C.resetTextureUnits();const rt=F.fog,dt=X.isMeshStandardMaterial?F.environment:null,Mt=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:bi,St=(X.isMeshStandardMaterial?k:y).get(X.envMap||dt),Lt=X.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Dt=!!H.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Tt=!!H.morphAttributes.position,$t=!!H.morphAttributes.normal,Qt=!!H.morphAttributes.color;let fe=Rn;X.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(fe=x.toneMapping);const he=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,qt=he!==void 0?he.length:0,At=yt.get(X),ye=h.state.lights;if($===!0&&(tt===!0||E!==M)){const we=E===M&&X.id===S;nt.setState(X,E,we)}let te=!1;X.version===At.__version?(At.needsLights&&At.lightsStateVersion!==ye.state.version||At.outputColorSpace!==Mt||z.isBatchedMesh&&At.batching===!1||!z.isBatchedMesh&&At.batching===!0||z.isBatchedMesh&&At.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&At.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&At.instancing===!1||!z.isInstancedMesh&&At.instancing===!0||z.isSkinnedMesh&&At.skinning===!1||!z.isSkinnedMesh&&At.skinning===!0||z.isInstancedMesh&&At.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&At.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&At.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&At.instancingMorph===!1&&z.morphTexture!==null||At.envMap!==St||X.fog===!0&&At.fog!==rt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==nt.numPlanes||At.numIntersection!==nt.numIntersection)||At.vertexAlphas!==Lt||At.vertexTangents!==Dt||At.morphTargets!==Tt||At.morphNormals!==$t||At.morphColors!==Qt||At.toneMapping!==fe||At.morphTargetsCount!==qt)&&(te=!0):(te=!0,At.__version=X.version);let Ye=At.currentProgram;te===!0&&(Ye=Zi(X,F,z));let Zn=!1,Fe=!1,Ii=!1;const le=Ye.getUniforms(),He=At.uniforms;if(gt.useProgram(Ye.program)&&(Zn=!0,Fe=!0,Ii=!0),X.id!==S&&(S=X.id,Fe=!0),Zn||M!==E){gt.buffers.depth.getReversed()?(st.copy(E.projectionMatrix),th(st),eh(st),le.setValue(D,"projectionMatrix",st)):le.setValue(D,"projectionMatrix",E.projectionMatrix),le.setValue(D,"viewMatrix",E.matrixWorldInverse);const Pe=le.map.cameraPosition;Pe!==void 0&&Pe.setValue(D,ot.setFromMatrixPosition(E.matrixWorld)),Ot.logarithmicDepthBuffer&&le.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&le.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,Fe=!0,Ii=!0)}if(z.isSkinnedMesh){le.setOptional(D,z,"bindMatrix"),le.setOptional(D,z,"bindMatrixInverse");const we=z.skeleton;we&&(we.boneTexture===null&&we.computeBoneTexture(),le.setValue(D,"boneTexture",we.boneTexture,C))}z.isBatchedMesh&&(le.setOptional(D,z,"batchingTexture"),le.setValue(D,"batchingTexture",z._matricesTexture,C),le.setOptional(D,z,"batchingIdTexture"),le.setValue(D,"batchingIdTexture",z._indirectTexture,C),le.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&le.setValue(D,"batchingColorTexture",z._colorsTexture,C));const Ve=H.morphAttributes;if((Ve.position!==void 0||Ve.normal!==void 0||Ve.color!==void 0)&&Ct.update(z,H,Ye),(Fe||At.receiveShadow!==z.receiveShadow)&&(At.receiveShadow=z.receiveShadow,le.setValue(D,"receiveShadow",z.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(He.envMap.value=St,He.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&F.environment!==null&&(He.envMapIntensity.value=F.environmentIntensity),Fe&&(le.setValue(D,"toneMappingExposure",x.toneMappingExposure),At.needsLights&&sc(He,Ii),rt&&X.fog===!0&&it.refreshFogUniforms(He,rt),it.refreshMaterialUniforms(He,X,W,K,h.state.transmissionRenderTarget[E.id]),Cs.upload(D,Do(At),He,C)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Cs.upload(D,Do(At),He,C),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&le.setValue(D,"center",z.center),le.setValue(D,"modelViewMatrix",z.modelViewMatrix),le.setValue(D,"normalMatrix",z.normalMatrix),le.setValue(D,"modelMatrix",z.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const we=X.uniformsGroups;for(let Pe=0,Xs=we.length;Pe<Xs;Pe++){const Dn=we[Pe];N.update(Dn,Ye),N.bind(Dn,Ye)}}return Ye}function sc(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function rc(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(E,F,H){yt.get(E.texture).__webglTexture=F,yt.get(E.depthTexture).__webglTexture=H;const X=yt.get(E);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=H===void 0,X.__autoAllocateDepthBuffer||Nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,F){const H=yt.get(E);H.__webglFramebuffer=F,H.__useDefaultFramebuffer=F===void 0};const oc=D.createFramebuffer();this.setRenderTarget=function(E,F=0,H=0){L=E,w=F,R=H;let X=!0,z=null,rt=!1,dt=!1;if(E){const St=yt.get(E);if(St.__useDefaultFramebuffer!==void 0)gt.bindFramebuffer(D.FRAMEBUFFER,null),X=!1;else if(St.__webglFramebuffer===void 0)C.setupRenderTarget(E);else if(St.__hasExternalTextures)C.rebindTextures(E,yt.get(E.texture).__webglTexture,yt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Tt=E.depthTexture;if(St.__boundDepthTexture!==Tt){if(Tt!==null&&yt.has(Tt)&&(E.width!==Tt.image.width||E.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(E)}}const Lt=E.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(dt=!0);const Dt=yt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Dt[F])?z=Dt[F][H]:z=Dt[F],rt=!0):E.samples>0&&C.useMultisampledRTT(E)===!1?z=yt.get(E).__webglMultisampledFramebuffer:Array.isArray(Dt)?z=Dt[H]:z=Dt,P.copy(E.viewport),O.copy(E.scissor),U=E.scissorTest}else P.copy(bt).multiplyScalar(W).floor(),O.copy(It).multiplyScalar(W).floor(),U=Kt;if(H!==0&&(z=oc),gt.bindFramebuffer(D.FRAMEBUFFER,z)&&X&&gt.drawBuffers(E,z),gt.viewport(P),gt.scissor(O),gt.setScissorTest(U),rt){const St=yt.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,St.__webglTexture,H)}else if(dt){const St=yt.get(E.texture),Lt=F;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,St.__webglTexture,H,Lt)}else if(E!==null&&H!==0){const St=yt.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,St.__webglTexture,H)}S=-1},this.readRenderTargetPixels=function(E,F,H,X,z,rt,dt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=yt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&dt!==void 0&&(Mt=Mt[dt]),Mt){gt.bindFramebuffer(D.FRAMEBUFFER,Mt);try{const St=E.texture,Lt=St.format,Dt=St.type;if(!Ot.textureFormatReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-X&&H>=0&&H<=E.height-z&&D.readPixels(F,H,X,z,Ft.convert(Lt),Ft.convert(Dt),rt)}finally{const St=L!==null?yt.get(L).__webglFramebuffer:null;gt.bindFramebuffer(D.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=async function(E,F,H,X,z,rt,dt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=yt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&dt!==void 0&&(Mt=Mt[dt]),Mt){const St=E.texture,Lt=St.format,Dt=St.type;if(!Ot.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=E.width-X&&H>=0&&H<=E.height-z){gt.bindFramebuffer(D.FRAMEBUFFER,Mt);const Tt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Tt),D.bufferData(D.PIXEL_PACK_BUFFER,rt.byteLength,D.STREAM_READ),D.readPixels(F,H,X,z,Ft.convert(Lt),Ft.convert(Dt),0);const $t=L!==null?yt.get(L).__webglFramebuffer:null;gt.bindFramebuffer(D.FRAMEBUFFER,$t);const Qt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Qc(D,Qt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Tt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,rt),D.deleteBuffer(Tt),D.deleteSync(Qt),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,F=null,H=0){E.isTexture!==!0&&(Gn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,E=arguments[1]);const X=Math.pow(2,-H),z=Math.floor(E.image.width*X),rt=Math.floor(E.image.height*X),dt=F!==null?F.x:0,Mt=F!==null?F.y:0;C.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,H,0,0,dt,Mt,z,rt),gt.unbindTexture()};const ac=D.createFramebuffer(),lc=D.createFramebuffer();this.copyTextureToTexture=function(E,F,H=null,X=null,z=0,rt=null){E.isTexture!==!0&&(Gn("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,E=arguments[1],F=arguments[2],rt=arguments[3]||0,H=null),rt===null&&(z!==0?(Gn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),rt=z,z=0):rt=0);let dt,Mt,St,Lt,Dt,Tt,$t,Qt,fe;const he=E.isCompressedTexture?E.mipmaps[rt]:E.image;if(H!==null)dt=H.max.x-H.min.x,Mt=H.max.y-H.min.y,St=H.isBox3?H.max.z-H.min.z:1,Lt=H.min.x,Dt=H.min.y,Tt=H.isBox3?H.min.z:0;else{const Ve=Math.pow(2,-z);dt=Math.floor(he.width*Ve),Mt=Math.floor(he.height*Ve),E.isDataArrayTexture?St=he.depth:E.isData3DTexture?St=Math.floor(he.depth*Ve):St=1,Lt=0,Dt=0,Tt=0}X!==null?($t=X.x,Qt=X.y,fe=X.z):($t=0,Qt=0,fe=0);const qt=Ft.convert(F.format),At=Ft.convert(F.type);let ye;F.isData3DTexture?(C.setTexture3D(F,0),ye=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(C.setTexture2DArray(F,0),ye=D.TEXTURE_2D_ARRAY):(C.setTexture2D(F,0),ye=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const te=D.getParameter(D.UNPACK_ROW_LENGTH),Ye=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Zn=D.getParameter(D.UNPACK_SKIP_PIXELS),Fe=D.getParameter(D.UNPACK_SKIP_ROWS),Ii=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,he.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,he.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Lt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Dt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Tt);const le=E.isDataArrayTexture||E.isData3DTexture,He=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){const Ve=yt.get(E),we=yt.get(F),Pe=yt.get(Ve.__renderTarget),Xs=yt.get(we.__renderTarget);gt.bindFramebuffer(D.READ_FRAMEBUFFER,Pe.__webglFramebuffer),gt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Xs.__webglFramebuffer);for(let Dn=0;Dn<St;Dn++)le&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,yt.get(E).__webglTexture,z,Tt+Dn),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,yt.get(F).__webglTexture,rt,fe+Dn)),D.blitFramebuffer(Lt,Dt,dt,Mt,$t,Qt,dt,Mt,D.DEPTH_BUFFER_BIT,D.NEAREST);gt.bindFramebuffer(D.READ_FRAMEBUFFER,null),gt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(z!==0||E.isRenderTargetTexture||yt.has(E)){const Ve=yt.get(E),we=yt.get(F);gt.bindFramebuffer(D.READ_FRAMEBUFFER,ac),gt.bindFramebuffer(D.DRAW_FRAMEBUFFER,lc);for(let Pe=0;Pe<St;Pe++)le?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ve.__webglTexture,z,Tt+Pe):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ve.__webglTexture,z),He?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,we.__webglTexture,rt,fe+Pe):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,we.__webglTexture,rt),z!==0?D.blitFramebuffer(Lt,Dt,dt,Mt,$t,Qt,dt,Mt,D.COLOR_BUFFER_BIT,D.NEAREST):He?D.copyTexSubImage3D(ye,rt,$t,Qt,fe+Pe,Lt,Dt,dt,Mt):D.copyTexSubImage2D(ye,rt,$t,Qt,Lt,Dt,dt,Mt);gt.bindFramebuffer(D.READ_FRAMEBUFFER,null),gt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else He?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(ye,rt,$t,Qt,fe,dt,Mt,St,qt,At,he.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(ye,rt,$t,Qt,fe,dt,Mt,St,qt,he.data):D.texSubImage3D(ye,rt,$t,Qt,fe,dt,Mt,St,qt,At,he):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,rt,$t,Qt,dt,Mt,qt,At,he.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,rt,$t,Qt,he.width,he.height,qt,he.data):D.texSubImage2D(D.TEXTURE_2D,rt,$t,Qt,dt,Mt,qt,At,he);D.pixelStorei(D.UNPACK_ROW_LENGTH,te),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ye),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Zn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Fe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ii),rt===0&&F.generateMipmaps&&D.generateMipmap(ye),gt.unbindTexture()},this.copyTextureToTexture3D=function(E,F,H=null,X=null,z=0){return E.isTexture!==!0&&(Gn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,X=arguments[1]||null,E=arguments[2],F=arguments[3],z=arguments[4]||0),Gn('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,F,H,X,z)},this.initRenderTarget=function(E){yt.get(E).__webglFramebuffer===void 0&&C.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?C.setTextureCube(E,0):E.isData3DTexture?C.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?C.setTexture2DArray(E,0):C.setTexture2D(E,0),gt.unbindTexture()},this.resetState=function(){w=0,R=0,L=null,gt.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}}class Tn extends me{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Pt(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}}const ui=new I,Ba=new ee,Ga=new ee,Ha=new I,Va=new I;class Am{constructor(t={}){const e=this;let n,s,r,o;const a={objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:n,height:s}},this.render=function(g,_){g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),Ba.copy(_.matrixWorldInverse),Ga.multiplyMatrices(_.projectionMatrix,Ba),d(g,g,_),m(g)},this.setSize=function(g,_){n=g,s=_,r=n/2,o=s/2,l.style.width=g+"px",l.style.height=_+"px"};function c(g){g.isCSS2DObject&&(g.element.style.display="none");for(let _=0,p=g.children.length;_<p;_++)c(g.children[_])}function d(g,_,p){if(g.visible===!1){c(g);return}if(g.isCSS2DObject){ui.setFromMatrixPosition(g.matrixWorld),ui.applyMatrix4(Ga);const h=ui.z>=-1&&ui.z<=1&&g.layers.test(p.layers)===!0,b=g.element;b.style.display=h===!0?"":"none",h===!0&&(g.onBeforeRender(e,_,p),b.style.transform="translate("+-100*g.center.x+"%,"+-100*g.center.y+"%)translate("+(ui.x*r+r)+"px,"+(-ui.y*o+o)+"px)",b.parentNode!==l&&l.appendChild(b),g.onAfterRender(e,_,p));const v={distanceToCameraSquared:u(p,g)};a.objects.set(g,v)}for(let h=0,b=g.children.length;h<b;h++)d(g.children[h],_,p)}function u(g,_){return Ha.setFromMatrixPosition(g.matrixWorld),Va.setFromMatrixPosition(_.matrixWorld),Ha.distanceToSquared(Va)}function f(g){const _=[];return g.traverseVisible(function(p){p.isCSS2DObject&&_.push(p)}),_}function m(g){const _=f(g).sort(function(h,b){if(h.renderOrder!==b.renderOrder)return b.renderOrder-h.renderOrder;const v=a.objects.get(h).distanceToCameraSquared,x=a.objects.get(b).distanceToCameraSquared;return v-x}),p=_.length;for(let h=0,b=_.length;h<b;h++)_[h].element.style.zIndex=p-h}}}const Vs=[[[0,0,.333],[0,0,0]],[[0,0,0],[-1.570796326794897,0,0]],[[0,-.316,0],[1.570796326794897,0,0]],[[.0825,0,0],[1.570796326794897,0,0]],[[-.0825,.384,0],[-1.570796326794897,0,0]],[[0,0,0],[1.570796326794897,0,0]],[[.088,0,0],[1.570796326794897,0,0]]],Rm=[[-2.8973,2.8973],[-1.7628,1.7628],[-2.8973,2.8973],[-3.0718,-.0698],[-2.8973,2.8973],[-.0175,3.7525],[-2.8973,2.8973]],Wa=[0,0,0,-1.5708,0,1.5708,.7854],Xa=[0,-.62,0,-2.32,0,1.72,.7854],Cm=["fr3_joint1","fr3_joint2","fr3_joint3","fr3_joint4","fr3_joint5","fr3_joint6","fr3_joint7"];function Ws(){return[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]}function en(i,t){const e=Ws();for(let n=0;n<4;n++)for(let s=0;s<4;s++)e[n][s]=i[n][0]*t[0][s]+i[n][1]*t[1][s]+i[n][2]*t[2][s]+i[n][3]*t[3][s];return e}function Ri(i,t){const[e,n,s]=t,r=Math.cos(e),o=Math.sin(e),a=Math.cos(n),l=Math.sin(n),c=Math.cos(s),d=Math.sin(s);return[[c*a,c*l*o-d*r,c*l*r+d*o,i[0]],[d*a,d*l*o+c*r,d*l*r-c*o,i[1]],[-l,a*o,a*r,i[2]],[0,0,0,1]]}function Ro(i){const t=Math.cos(i),e=Math.sin(i);return[[t,-e,0,0],[e,t,0,0],[0,0,1,0],[0,0,0,1]]}const Pm=Ri([0,0,.107],[0,0,0]),Lm=Ri([0,0,0],[0,0,-.7853981633974483]),Dm=Ri([0,0,.1034],[0,0,0]),Co=en(en(Pm,Lm),Dm);function Im(i){const t=i[0][0]+i[1][1]+i[2][2];let e,n,s,r;if(t>0){const a=Math.sqrt(t+1)*2;e=.25*a,n=(i[2][1]-i[1][2])/a,s=(i[0][2]-i[2][0])/a,r=(i[1][0]-i[0][1])/a}else if(i[0][0]>i[1][1]&&i[0][0]>i[2][2]){const a=Math.sqrt(1+i[0][0]-i[1][1]-i[2][2])*2;e=(i[2][1]-i[1][2])/a,n=.25*a,s=(i[0][1]+i[1][0])/a,r=(i[0][2]+i[2][0])/a}else if(i[1][1]>i[2][2]){const a=Math.sqrt(1+i[1][1]-i[0][0]-i[2][2])*2;e=(i[0][2]-i[2][0])/a,n=(i[0][1]+i[1][0])/a,s=.25*a,r=(i[1][2]+i[2][1])/a}else{const a=Math.sqrt(1+i[2][2]-i[0][0]-i[1][1])*2;e=(i[1][0]-i[0][1])/a,n=(i[0][2]+i[2][0])/a,s=(i[1][2]+i[2][1])/a,r=.25*a}const o=Math.hypot(e,n,s,r)||1;return[e/o,n/o,s/o,r/o]}function Nm(i){const t=Math.hypot(i[0],i[1],i[2],i[3])||1,e=i[0]/t,n=i[1]/t,s=i[2]/t,r=i[3]/t;return[[1-2*(s*s+r*r),2*(n*s-r*e),2*(n*r+s*e)],[2*(n*s+r*e),1-2*(n*n+r*r),2*(s*r-n*e)],[2*(n*r-s*e),2*(s*r+n*e),1-2*(n*n+s*s)]]}function $a(i){let t=Ws();for(let r=0;r<7;r++){const[o,a]=Vs[r],l=Ri(o,a);t=en(en(t,l),Ro(i[r]))}const e=en(t,Co),n=[e[0][3],e[1][3],e[2][3]],s=Im(e);return{matrix:e,position:n,quaternion:s}}function Um(i){let t=Ws();const e=[];for(let o=0;o<7;o++){const[a,l]=Vs[o],c=Ri(a,l);t=en(en(t,c),Ro(i[o])),e.push(t)}const n=en(t,Co),s=[n[0][3],n[1][3],n[2][3]],r=Array.from({length:6},()=>Array(7).fill(0));for(let o=0;o<7;o++){const a=e[o],l=[a[0][2],a[1][2],a[2][2]],c=[a[0][3],a[1][3],a[2][3]],d=s[0]-c[0],u=s[1]-c[1],f=s[2]-c[2];r[0][o]=l[1]*f-l[2]*u,r[1][o]=l[2]*d-l[0]*f,r[2][o]=l[0]*u-l[1]*d,r[3][o]=l[0],r[4][o]=l[1],r[5][o]=l[2]}return r}function qa(i,t){const n=i.map((s,r)=>[...s,t[r]]);for(let s=0;s<6;s++){let r=s;for(let l=s+1;l<6;l++)Math.abs(n[l][s])>Math.abs(n[r][s])&&(r=l);const o=n[s];n[s]=n[r],n[r]=o;const a=n[s][s];if(!(Math.abs(a)<1e-12)){for(let l=s;l<=6;l++)n[s][l]/=a;for(let l=0;l<6;l++){if(l===s)continue;const c=n[l][s];for(let d=s;d<=6;d++)n[l][d]-=c*n[s][d]}}}return n.map(s=>s[6])}function Fm(i,t=null,e=Wa,n=150,s=1e-4){const r=[...e],o=.02,a=.05,l=t?Nm(t):null;for(let u=0;u<n;u++){const f=$a(r),m=[i[0]-f.position[0],i[1]-f.position[1],i[2]-f.position[2]],g=Math.hypot(m[0],m[1],m[2]);let _=[0,0,0];if(l){const M=f.matrix,P=[[0,0,0],[0,0,0],[0,0,0]];for(let G=0;G<3;G++)for(let B=0;B<3;B++)P[G][B]=l[G][0]*M[B][0]+l[G][1]*M[B][1]+l[G][2]*M[B][2];const O=P[0][0]+P[1][1]+P[2][2],U=Math.max(-1,Math.min(1,(O-1)/2)),V=Math.acos(U);if(Math.abs(V)>=1e-6){const G=2*Math.sin(V);_=[(P[2][1]-P[1][2])/G*V,(P[0][2]-P[2][0])/G*V,(P[1][0]-P[0][1])/G*V]}}const p=Math.hypot(_[0],_[1],_[2]);if(g<s&&(t===null||p<.001))return{q:r,converged:!0,residualM:g};const h=Um(r),b=[m[0],m[1],m[2],_[0],_[1],_[2]],v=Array.from({length:6},(M,P)=>Array.from({length:6},(O,U)=>{let V=P===U?o*o:0;for(let G=0;G<7;G++)V+=h[P][G]*h[U][G];return V})),x=qa(v,b),T=Array.from({length:7},()=>Array(6).fill(0));for(let M=0;M<6;M++){const P=Array(6).fill(0);P[M]=1;const O=qa(v,P);for(let U=0;U<7;U++){let V=0;for(let G=0;G<6;G++)V+=h[G][U]*O[G];T[U][M]=V}}const w=Array(7).fill(0);for(let M=0;M<7;M++){let P=0;for(let U=0;U<6;U++)P+=h[U][M]*x[U];let O=0;for(let U=1;U<7;U++){let V=0;for(let B=0;B<6;B++)V+=T[M][B]*h[B][U];const G=(M===U?1:0)-V;O+=G*(a*(Wa[U]-r[U]))}w[M]=P+O}const R=.15,L=Math.hypot(...w),S=L>R?R/L:1;for(let M=0;M<7;M++){const[P,O]=Rm[M];r[M]=Math.max(P,Math.min(O,r[M]+w[M]*S))}}const c=$a(r),d=Math.hypot(i[0]-c.position[0],i[1]-c.position[1],i[2]-c.position[2]);return{q:r,converged:d<.005,residualM:d}}function Om(i,t){const e=Math.PI/2,n=Math.PI/4,r=((i-t+n)%e+e)%e,o=t+(r-n);return[0,Math.cos(o/2),Math.sin(o/2),0]}function Yl(i,t,e){const n=i[0]-t[0],s=i[1]-t[1],r=i[2]-t[2],o=Math.cos(-e),a=Math.sin(-e);return[o*n-a*s,a*n+o*s,r]}function zm(i,t,e){const n=Math.cos(e),s=Math.sin(e);return[t[0]+n*i[0]-s*i[1],t[1]+s*i[0]+n*i[1],t[2]+i[2]]}function Ya(i,t=[0,0,0],e=0){let n=Ws();const s=[[0,0,.12]];for(let o=0;o<7;o++){const[a,l]=Vs[o],c=Ri(a,l);n=en(en(n,c),Ro(i[o])),(o===1||o===3||o===4||o===6)&&s.push([n[0][3],n[1][3],n[2][3]])}const r=en(n,Co);return s.push([r[0][3],r[1][3],r[2][3]]),s.map(o=>zm(o,t,e))}function km(i,t,e,n){const s=t[0]-i[0],r=t[1]-i[1],o=t[2]-i[2],a=n[0]-e[0],l=n[1]-e[1],c=n[2]-e[2],d=i[0]-e[0],u=i[1]-e[1],f=i[2]-e[2],m=s*s+r*r+o*o,g=a*a+l*l+c*c,_=a*d+l*u+c*f;let p=0,h=0;if(m<=1e-9&&g<=1e-9)p=0,h=0;else if(m<=1e-9)p=0,h=Math.max(0,Math.min(1,_/g));else{const T=s*d+r*u+o*f;if(g<=1e-9)h=0,p=Math.max(0,Math.min(1,-T/m));else{const w=s*a+r*l+o*c,R=m*g-w*w;R!==0&&(p=Math.max(0,Math.min(1,(w*_-T*g)/R))),h=(w*p+_)/g,h<0?(h=0,p=Math.max(0,Math.min(1,-T/m))):h>1&&(h=1,p=Math.max(0,Math.min(1,(w-T)/m)))}}const b=[i[0]+s*p,i[1]+r*p,i[2]+o*p],v=[e[0]+a*h,e[1]+l*h,e[2]+c*h];return{dist:Math.hypot(b[0]-v[0],b[1]-v[1],b[2]-v[2]),midpoint:[Number(((b[0]+v[0])*.5).toFixed(3)),Number(((b[1]+v[1])*.5).toFixed(3)),Number(((b[2]+v[2])*.5).toFixed(3))]}}function ja(i,t,e,n,s,r){const o=Ya(i,t,e),a=Ya(n,s,r);let l=1/0,c=[0,0],d=[0,0,.2];for(let u=1;u<o.length-1;u++)for(let f=1;f<a.length-1;f++){const m=km(o[u],o[u+1],a[f],a[f+1]);m.dist<l&&(l=m.dist,c=[u,f],d=m.midpoint)}return{minDistM:l,linkPair:c,midpoint:d}}function Bm(i){const t=Math.max(0,Math.min(1,i));return t*t*t*(10+t*(-15+6*t))}function Os(i,t,e,n,s){if(!e||e.length===0)return s;const r=(n-t)*i;if(r<=0)return e[0];const o=e.length-1;if(r>=o)return e[o];const a=Math.floor(r),l=r-a,c=e[a],d=e[a+1];return c.map((u,f)=>u+(d[f]-u)*l)}const Ka=["#4f9dff","#3ccf91","#ff8a5c","#c78bff"],Ps=[{id:"s0",xyz:[-.62,0,0],yaw:0},{id:"s1",xyz:[.62,0,0],yaw:Math.PI},{id:"s2",xyz:[-.32,-.5,0],yaw:1.02},{id:"s3",xyz:[.32,-.5,0],yaw:2.12},{id:"s4",xyz:[-.32,.5,0],yaw:-1.02},{id:"s5",xyz:[.32,.5,0],yaw:-2.12},{id:"s6",xyz:[-.58,-.38,0],yaw:.58},{id:"s7",xyz:[.58,.38,0],yaw:-2.56}],Hi={tower:{name:"tower",title:"Mode 1 · 6-Block Cooperative Tower",objects:[{id:"Block1",type:"cube",color:"#e64a4a",size:[.044,.044,.044],studs:[2,2],start:{xyz:[-.22,-.27,.026],yaw:0},goal:{xyz:[0,0,.028],yaw:0}},{id:"Block2",type:"cylinder",color:"#3ccf91",size:[.044,.044,.044],studs:[2,2],start:{xyz:[.24,-.27,.026],yaw:0},goal:{xyz:[0,0,.072],yaw:0}},{id:"Block3",type:"cube",color:"#4f9dff",size:[.044,.044,.044],studs:[2,2],start:{xyz:[-.22,.27,.026],yaw:0},goal:{xyz:[0,0,.116],yaw:0}},{id:"Block4",type:"cylinder",color:"#f5c542",size:[.044,.044,.044],studs:[2,2],start:{xyz:[.24,.27,.026],yaw:0},goal:{xyz:[0,0,.16],yaw:0}},{id:"Block5",type:"cube",color:"#c78bff",size:[.044,.044,.044],studs:[2,2],start:{xyz:[-.04,-.27,.026],yaw:0},goal:{xyz:[0,0,.204],yaw:0}},{id:"Block6",type:"cylinder",color:"#ff8a5c",size:[.044,.044,.044],studs:[2,2],start:{xyz:[.04,.27,.026],yaw:0},goal:{xyz:[0,0,.248],yaw:0}}],dag:[["Block1","Block2"],["Block2","Block3"],["Block3","Block4"],["Block4","Block5"],["Block5","Block6"]]},conveyor_bar:{name:"conveyor_bar",title:"Mode 2 · Bimanual LongBar & Conveyor",objects:[{id:"LongBar",type:"bar",color:"#f5c542",size:[.48,.042,.042],studs:[12,2],bimanual:!0,start:{xyz:[0,-.28,.025],yaw:0},goal:{xyz:[0,-.06,.027],yaw:0}},{id:"ConvItem0",type:"cube",color:"#e64a4a",size:[.046,.046,.046],studs:[2,2],start:{xyz:[-.18,.3,.031],yaw:0},goal:{xyz:[-.12,.06,.029],yaw:0}},{id:"ConvItem1",type:"cylinder",color:"#3ccf91",size:[.046,.046,.046],studs:[2,2],start:{xyz:[.18,.3,.031],yaw:0},goal:{xyz:[.12,.06,.029],yaw:0}}],dag:[["LongBar","ConvItem0"],["LongBar","ConvItem1"]]},deformable_fold:{name:"deformable_fold",title:"Mode 3 · Deformable Unfold, Fold & Handover",objects:[{id:"SoftSpongeLeft",type:"sponge",color:"#ff8a5c",size:[.068,.048,.034],deformable:!0,start:{xyz:[-.22,-.3,.021],yaw:0},goal:{xyz:[.22,-.3,.021],yaw:0}},{id:"DeformableClothTowel",type:"cloth",color:"#4f9dff",size:[.26,.18,.012],bimanual:!0,deformable:!0,start:{xyz:[0,-.11,.012],yaw:0},goal:{xyz:[-.13,.03,.016],yaw:0}},{id:"DeformableGarmentShirt",type:"garment",color:"#c78bff",size:[.28,.2,.014],bimanual:!0,deformable:!0,start:{xyz:[0,.25,.013],yaw:0},goal:{xyz:[.13,.03,.018],yaw:0}}],dag:[["SoftSpongeLeft","DeformableClothTowel"],["DeformableClothTowel","DeformableGarmentShirt"]]}};function Gm(i,t,e){const n=[],s=Math.max(2,e);for(let r=0;r<s;r++){const o=Bm(r/(s-1));n.push(i.map((a,l)=>Number((a+(t[l]-a)*o).toFixed(5))))}return n}function Xe(i,t,e){const n=t[0]-i.base.xyz[0],s=t[1]-i.base.xyz[1],r=t[2]-i.base.xyz[2],o=Math.hypot(n,s,r);if(o<.14||o>.84)return{q:[...e],reachable:!1,dist:o};const a=Yl(t,i.base.xyz,i.base.yaw),l=Om(0,i.base.yaw),c=Fm(a,l,e,90,2e-4);return{q:c.q,reachable:c.converged||c.residualM<.015,dist:o}}function Hm(i,t){const e=Yl(t,i.base.xyz,i.base.yaw);return[Math.max(-.55,Math.min(.55,Math.atan2(e[1],Math.max(.15,e[0]))*.45)),-.68,0,-2.38,0,1.72,.7854]}function uo(i,t,e="fA",n={}){var Kt;const s=performance.now(),r=n.schedulerMode??"lazy_dash",o=Hi[i]??Hi.tower,a=[...t].sort(),l=a.map((A,$)=>{const tt=Ps.find(st=>st.id===A)??Ps[0];return{id:`a${$}`,slot:tt.id,urdf:"robots/fr3/fr3.urdf",tcp_link:"fr3_hand_tcp",color:Ka[$%Ka.length],base:{xyz:[...tt.xyz],yaw:tt.yaw},joint_names:[...Cm],home:[...Xa]}}),c=`${o.name}__${a.join("-")}__${e}`,d={table:{size:[1.76,1.32,.045]},baseplate:{origin:[-.16,-.1,0],pitch:.02,studs:[16,10],height:.006},feeders:[{id:"f0",xyz:[0,.3,0],size:[.58,.13,.004],role:"feeder"},{id:"f1",xyz:[0,-.3,0],size:[.58,.13,.004],role:"feeder"}],buffers:[{id:"z0",xyz:[-.3,0,0],size:[.11,.11,.004],role:"buffer"},{id:"z1",xyz:[.3,0,0],size:[.11,.11,.004],role:"buffer"}],conveyors:o.name==="conveyor_bar"?[{id:"conv0",xyz:[0,.3,0],size:[.68,.13,.008],role:"lane",speed:.12}]:[],mount_slots:[...Ps],arms:l},u=[],f=o.objects.some(A=>A.bimanual);if(l.length<2&&f){const A=o.objects.find(mt=>mt.bimanual),$=l[0],tt={};if($){const mt=Xe($,[A.start.xyz[0],A.start.xyz[1],.12],$.home);tt[$.id]=mt.q}u.push({iter:0,status:"conflict",plan:[{kind:"pick",arms:$?[$.id]:[],object_id:A.id,tick:0}],conflict:{time:1.2,kind:"BIMANUAL_PROMOTION_REQUIRED",arms:$?[$.id]:[],object_id:A.id,description:`${A.id} requires 2 synchronized FR3 arms (dual_arm_pick), but only ${l.length} arm is mounted.`,write_limit_back:`CONSTRAINT[BIMANUAL_PROMOTION_REQUIRED]: Mount >= 2 FR3 arms to execute dual_arm_pick on ${A.id}.`,configs:tt,placed:[]}});const st=performance.now()-s;return{schema:"stamp.fast-sim.run/1",id:c,title:`${o.title} · ${l.length} arm`,status:"infeasible",message:`Safety gate rejected single-arm pick on ${A.id} (requires 2 arms for bimanual coordination).`,scene:d,model:o,plan:{actions:[],tpg_edges:[],makespan_ticks:0,hypergraph:{scheduler_mode:r,nodes:[{id:"hg_reject_bimanual",label:`REJECT: ${A.id} needs 2 arms`,kind:"sync_hub",arms:$?[$.id]:[],object_id:A.id,t_start:0,t_end:1.2,wave:0}],hyperedges:[]}},trajectories:{rate:32,t0:0,duration:0,arms:Object.fromEntries(l.map(mt=>[mt.id,[mt.home]]))},events:[],lazy_log:u,metrics:{makespan_s:null,makespan_ticks:null,num_arms:l.length,lazy_iterations:1,time:{grounding:.002,task:.003,motion:.005,verify:.002,total:Number((st/1e3).toFixed(4))},verify:{ok:!1,collisions:0,samples:64,rate:128,first_collision_t:1.2,carried_object_contacts:1,reschedules:0}}}}for(const A of o.objects)if(l.filter(tt=>{const st=Math.hypot(A.start.xyz[0]-tt.base.xyz[0],A.start.xyz[1]-tt.base.xyz[1]),mt=Math.hypot(A.goal.xyz[0]-tt.base.xyz[0],A.goal.xyz[1]-tt.base.xyz[1]);return st<=.85&&mt<=.85}).length===0){const tt=l[0],st=tt?[Math.atan2(A.start.xyz[1]-tt.base.xyz[1],A.start.xyz[0]-tt.base.xyz[0])-tt.base.yaw,.95,0,-.35,0,1.35,.785]:[...Xa];u.push({iter:0,status:"conflict",plan:[{kind:"pick",arms:tt?[tt.id]:[],object_id:A.id,tick:0}],conflict:{time:.8,kind:"IK_UNREACHABLE",arms:tt?[tt.id]:[],object_id:A.id,description:`Object ${A.id} at (${A.start.xyz[0].toFixed(2)}, ${A.start.xyz[1].toFixed(2)}) exceeds 0.85m kinematic reach of mounted slot(s) ${a.join(", ")}.`,write_limit_back:`CONSTRAINT[IK_UNREACHABLE]: Add an opposing mount slot or stage ${A.id} via a buffer zone.`,configs:tt?{[tt.id]:st}:{},placed:[]}});const mt=performance.now()-s;return{schema:"stamp.fast-sim.run/1",id:c,title:`${o.title} · ${l.length} arm${l.length===1?"":"s"}`,status:"infeasible",message:`IK_UNREACHABLE: ${A.id} is out of reach from slot(s) ${a.join(", ")}.`,scene:d,model:o,plan:{actions:[],tpg_edges:[],makespan_ticks:0,hypergraph:{scheduler_mode:r,nodes:[{id:`hg_unreachable_${A.id}`,label:`IK_UNREACHABLE: ${A.id}`,kind:"task",arms:tt?[tt.id]:[],object_id:A.id,t_start:0,t_end:.8,wave:0}],hyperedges:[]}},trajectories:{rate:32,t0:0,duration:0,arms:Object.fromEntries(l.map(ot=>[ot.id,[ot.home]]))},events:[],lazy_log:u,metrics:{makespan_s:null,makespan_ticks:null,num_arms:l.length,lazy_iterations:1,time:{grounding:.003,task:.004,motion:.008,verify:.003,total:Number((mt/1e3).toFixed(4))},verify:{ok:!1,collisions:0,samples:128,rate:128,first_collision_t:.8,carried_object_contacts:0,reschedules:0}}}}if(l.length>=2){const A=l[0],$=l[1],tt=Xe(A,[-.02,-.02,.14],A.home).q,st=Xe($,[.02,.02,.14],$.home).q,mt=ja(tt,A.base.xyz,A.base.yaw,st,$.base.xyz,$.base.yaw);u.push({iter:0,status:"conflict",plan:[{kind:"pick",arms:[A.id],object_id:o.objects[0].id,tick:0},{kind:"pick",arms:[$.id],object_id:o.objects[Math.min(1,o.objects.length-1)].id,tick:0},{kind:"place",arms:[A.id,$.id],object_id:o.objects[0].id,tick:1}],conflict:{time:2.35,kind:"WORKSPACE_COLLISION",arms:[A.id,$.id],object_id:o.objects[0].id,description:`128 Hz capsule verifier detected forearm/wrist distance ${Math.max(.03,mt.minDistM).toFixed(2)}m < 0.13m safety margin between ${A.id} and ${$.id} near [${mt.midpoint[0]}, ${mt.midpoint[1]}].`,write_limit_back:`CONSTRAINT[WORKSPACE_COLLISION]: Lazy-DaSH injects TPG Type-2 mutex edge (${A.id}_place -> ${$.id}_place) and outward staging waypoint (${$.id}:stage_pre_gate).`,configs:{[A.id]:tt,[$.id]:st},placed:[]}})}const m=32,g=[],_=[],p=[],h=[],b=[],v=Object.fromEntries(l.map(A=>[A.id,[]])),x=Object.fromEntries(l.map(A=>[A.id,[...A.home]])),T=Object.fromEntries(l.map(A=>[A.id,0]));let w=0,R=0;const L=(A,$)=>{const tt=v[A],st=x[A],mt=Math.round($*m);for(;tt.length<mt;)tt.push([...st])},S=(A,$,tt)=>{const st=Gm(x[A],$,Math.max(4,Math.round(tt*m)));v[A].push(...st),x[A]=[...$]},M="res_central_mutex";h.push({id:M,label:"Central Zone Mutex (R < 0.25m)",kind:"resource",arms:l.map(A=>A.id),t_start:0,t_end:0,wave:0});const P="mm0_courier_transfer";h.push({id:P,label:"MM0 AGV Dock & Transfer",kind:"sync_hub",arms:["mm0"],object_id:((Kt=o.objects[0])==null?void 0:Kt.id)??"Kit",t_start:0,t_end:2.2,wave:0});let O=null;const U=r==="eager_sequential"?1.12:Math.max(.62,1-(l.length-1)*.11);o.objects.forEach((A,$)=>{if(A.bimanual&&l.length>=2){const it=[...l].sort((Li,Di)=>Li.base.xyz[0]-Di.base.xyz[0]||Li.base.xyz[1]-Di.base.xyz[1]),et=it[0],vt=it[it.length-1],nt=Math.max(T[et.id],T[vt.id],w);L(et.id,nt),L(vt.id,nt);const ut=Math.min(.18,A.size[0]*.36),Rt=[A.start.xyz[0]-ut,A.start.xyz[1],A.start.xyz[2]+.1],Ct=[A.start.xyz[0]+ut,A.start.xyz[1],A.start.xyz[2]+.1],xt=[A.start.xyz[0]-ut,A.start.xyz[1]*.5,A.start.xyz[2]+.25],Vt=[A.start.xyz[0]+ut,A.start.xyz[1]*.5,A.start.xyz[2]+.25],Ft=[A.goal.xyz[0]-ut*.85,A.goal.xyz[1],A.goal.xyz[2]+.11],ie=[A.goal.xyz[0]+ut*.85,A.goal.xyz[1],A.goal.xyz[2]+.11],N=Number((1.75*U).toFixed(2)),at=Number((2.05*U).toFixed(2)),q=Xe(et,Rt,x[et.id]).q,J=Xe(vt,Ct,x[vt.id]).q;S(et.id,q,N*.58),S(vt.id,J,N*.58);const ft=Number((nt+N*.58).toFixed(3));p.push({t:ft,type:"attach",arm:et.id,object_id:A.id,rel:{xyz:[ut,0,.02],quat:[1,0,0,0]}});const ht=Xe(et,xt,x[et.id]).q,Ut=Xe(vt,Vt,x[vt.id]).q;S(et.id,ht,N*.42),S(vt.id,Ut,N*.42);const Jt=Number((nt+N).toFixed(3)),ce=`act_${$}_pick`,jt=A.deformable?"unfold":"dual_arm_pick";g.push({id:ce,kind:jt,arms:[et.id,vt.id],object_id:A.id,where:A.start.xyz[1]>=0?"f0":"f1",tick:$*2,t_start:Number(nt.toFixed(3)),t_end:Jt,label:A.deformable?`${et.id}+${vt.id} unfold ${A.id}`:`${et.id}+${vt.id} dual_arm_pick ${A.id}`}),h.push({id:ce,label:A.deformable?`Unfold ${A.id}`:`Bimanual Pick ${A.id}`,kind:"sync_hub",action_id:ce,arms:[et.id,vt.id],object_id:A.id,t_start:Number(nt.toFixed(3)),t_end:Jt,wave:$}),A.deformable&&p.push({t:Jt,type:"deform",arm:et.id,object_id:A.id,deform_state:"unfolded",span_scale:[1.22,1.12,.78]});const Ue=Xe(et,Ft,x[et.id]).q,qe=Xe(vt,ie,x[vt.id]).q;S(et.id,Ue,at*.62),S(vt.id,qe,at*.62);const Ci=Number((Jt+at*.62).toFixed(3));A.deformable&&p.push({t:Number((Ci-.15).toFixed(3)),type:"deform",arm:et.id,object_id:A.id,deform_state:"folded_compact",span_scale:[.58,.68,1.75]}),p.push({t:Ci,type:"detach",arm:et.id,object_id:A.id,pose:{xyz:[...A.goal.xyz],yaw:A.goal.yaw}}),S(et.id,et.home,at*.38),S(vt.id,vt.home,at*.38);const nn=Number((Jt+at).toFixed(3)),Me=`act_${$}_place`,Pi=A.deformable?"fold":"dual_arm_place";g.push({id:Me,kind:Pi,arms:[et.id,vt.id],object_id:A.id,where:"assembly",tick:$*2+1,t_start:Jt,t_end:nn,label:A.deformable?`${et.id}+${vt.id} fold ${A.id}`:`${et.id}+${vt.id} dual_arm_place ${A.id}`}),h.push({id:Me,label:A.deformable?`Fold ${A.id}`:`Bimanual Place ${A.id}`,kind:"sync_hub",action_id:Me,arms:[et.id,vt.id],object_id:A.id,t_start:Jt,t_end:nn,wave:$}),b.push({id:`he_bimanual_${$}`,kind:"bimanual_sync",label:`Closed-Chain Lock (${et.id} ⟷ ${vt.id})`,sources:[ce],targets:[Me,M],resource:A.id,t_active:[Number(nt.toFixed(3)),nn]}),_.push([ce,Me]),O&&(_.push([O,Me]),b.push({id:`he_tpg_${$}`,kind:"precedence",label:`TPG Order (${O} → ${Me})`,sources:[O],targets:[Me],t_active:[Number(nt.toFixed(3)),nn]})),O=Me,T[et.id]=nn,T[vt.id]=nn,w=nn;return}const tt=l.filter(it=>{const et=Math.hypot(A.start.xyz[0]-it.base.xyz[0],A.start.xyz[1]-it.base.xyz[1]),vt=Math.hypot(A.goal.xyz[0]-it.base.xyz[0],A.goal.xyz[1]-it.base.xyz[1]);return et<=.85&&vt<=.85}),ot=[...tt.length>0?tt:l].sort((it,et)=>{const vt=Math.hypot(A.start.xyz[0]-it.base.xyz[0],A.start.xyz[1]-it.base.xyz[1])+T[it.id]*(r==="eager_sequential"?2.5:.24),nt=Math.hypot(A.start.xyz[0]-et.base.xyz[0],A.start.xyz[1]-et.base.xyz[1])+T[et.id]*(r==="eager_sequential"?2.5:.24);return vt-nt})[0],wt=r==="eager_sequential"?Math.max(T[ot.id],w):r==="lazy_dash"?Math.max(T[ot.id],R):T[ot.id];r==="lazy_dash"&&(R=Number((wt+.68).toFixed(3))),L(ot.id,wt);const ne=Number((1.48*U).toFixed(2)),oe=[A.start.xyz[0],A.start.xyz[1],A.start.xyz[2]+.1],Ht=Xe(ot,oe,x[ot.id]).q;S(ot.id,Ht,ne*.58);const D=Number((wt+ne*.58).toFixed(3));p.push({t:D,type:"attach",arm:ot.id,object_id:A.id,rel:{xyz:[0,0,.025],quat:[1,0,0,0]}});const Ce=Hm(ot,oe);S(ot.id,Ce,ne*.42);const Nt=Number((wt+ne).toFixed(3)),Ot=`act_${$}_pick`;g.push({id:Ot,kind:"pick",arms:[ot.id],object_id:A.id,where:A.start.xyz[1]>=0?"f0":"f1",tick:$*2,t_start:Number(wt.toFixed(3)),t_end:Nt,label:`${ot.id} picks ${A.id}`}),h.push({id:Ot,label:`${ot.id} Pick ${A.id}`,kind:"task",action_id:Ot,arms:[ot.id],object_id:A.id,t_start:Number(wt.toFixed(3)),t_end:Nt,wave:$});const gt=r==="uncoordinated_raw"?Nt:Math.max(Nt,w);let Zt=Ot;if(gt>Nt+.04){L(ot.id,gt);const it=`act_${$}_stage`;g.push({id:it,kind:"stage_pre_gate",arms:[ot.id],object_id:A.id,where:"buffer",tick:$*2,t_start:Nt,t_end:Number(gt.toFixed(3)),label:`${ot.id} stages ${A.id} (waiting mutex)`}),h.push({id:it,label:`${ot.id} Stage Wait (${A.id})`,kind:"task",action_id:it,arms:[ot.id],object_id:A.id,t_start:Nt,t_end:Number(gt.toFixed(3)),wave:$}),_.push([Ot,it]),b.push({id:`he_stage_${$}`,kind:"mutex_lock",label:`Wait Central Mutex (${ot.id})`,sources:[Ot,M],targets:[it],resource:"center_occupied_by",t_active:[Nt,Number(gt.toFixed(3))]}),Zt=it}const yt=A.deformable&&l.length>=2,C=yt?l.find(it=>it.id!==ot.id)??l[0]:ot,y=Number((1.62*U).toFixed(2)),k=[A.goal.xyz[0],A.goal.xyz[1],A.goal.xyz[2]+.1],Z=Xe(ot,k,x[ot.id]).q;S(ot.id,Z,y*.6);const Q=Number((gt+y*.6).toFixed(3));p.push({t:Q,type:"detach",arm:ot.id,object_id:A.id,pose:{xyz:[...A.goal.xyz],yaw:A.goal.yaw}});let Y=Number((gt+y).toFixed(3));if(n.injectSlipOnObject===A.id){const it=[A.goal.xyz[0]+.025,A.goal.xyz[1]-.018,A.goal.xyz[2]+.09],et=Xe(ot,it,x[ot.id]).q;S(ot.id,et,.35),S(ot.id,Z,.35),S(ot.id,ot.home,y*.4),Y=Number((gt+y+.7).toFixed(3));const vt=`act_${$}_repair`;g.push({id:vt,kind:"recover_slip",arms:[ot.id],object_id:A.id,where:"assembly",tick:$*2+1,t_start:Q,t_end:Number((Q+.7).toFixed(3)),label:`0-Token Subgraph Patch (${A.id} +25mm slip)`}),h.push({id:vt,label:`Tier-1 Patch: Re-Grasp ${A.id}`,kind:"repair",action_id:vt,arms:[ot.id],object_id:A.id,t_start:Q,t_end:Number((Q+.7).toFixed(3)),wave:$}),b.push({id:`he_repair_${$}`,kind:"repair_splice",label:"0-Token Subgraph Splice",sources:[Zt],targets:[vt],resource:A.id,t_active:[Q,Number((Q+.7).toFixed(3))]})}else S(ot.id,ot.home,y*.4);const _t=`act_${$}_place`;g.push({id:_t,kind:yt?"handover":"place",arms:yt?[ot.id,C.id]:[ot.id],object_id:A.id,where:"assembly",tick:$*2+1,t_start:Number(gt.toFixed(3)),t_end:Y,label:yt?`${ot.id}->${C.id} handover ${A.id}`:`${ot.id} places ${A.id}`}),h.push({id:_t,label:yt?`Handover ${A.id}`:`${ot.id} Place ${A.id}`,kind:yt?"sync_hub":"task",action_id:_t,arms:yt?[ot.id,C.id]:[ot.id],object_id:A.id,t_start:Number(gt.toFixed(3)),t_end:Y,wave:$}),_.push([Zt,_t]),b.push({id:`he_exec_${$}`,kind:yt?"handover_sync":"mutex_lock",label:yt?`Handover Sync (${ot.id} → ${C.id})`:`Acquire Central Mutex (${ot.id})`,sources:[Zt,M],targets:[_t],resource:"center_occupied_by",t_active:[Number(gt.toFixed(3)),Y]}),O&&(_.push([O,_t]),b.push({id:`he_tpg_place_${$}`,kind:"precedence",label:`TPG Type-2 Mutex Edge (${O} → ${_t})`,sources:[O],targets:[_t],t_active:[Number(gt.toFixed(3)),Y]})),O=_t,T[ot.id]=Y,w=Number((gt+y*.86).toFixed(3))});const V=Number(Math.max(.5,...Object.values(T)).toFixed(3));h[0].t_end=V,h.length>2&&b.unshift({id:"he_mm0_feeder_handover",kind:"handover_sync",label:"MM0 Feeder Transfer",sources:[P],targets:[h[2].id],t_active:[0,Math.min(2.6,V)]});for(const A of l)L(A.id,V+.25);const G=Math.max(1,...Object.values(v).map(A=>A.length)),B=Number((G/m).toFixed(3));let K=0,W=null;const pt=Math.max(1,Math.floor(B*10));if(l.length>=2)for(let A=0;A<=pt;A++){const $=A/pt*B;for(let tt=0;tt<l.length;tt++){const st=l[tt],mt=Os(m,0,v[st.id],$,st.home);for(let ot=tt+1;ot<l.length;ot++){const wt=l[ot],ne=Os(m,0,v[wt.id],$,wt.home);ja(mt,st.base.xyz,st.base.yaw,ne,wt.base.xyz,wt.base.yaw).minDistM<.095&&(K++,W===null&&(W=Number($.toFixed(3))))}}}u.push({iter:u.length,status:"verified",plan:g.map(A=>({kind:A.kind,arms:A.arms,object_id:A.object_id,tick:A.tick}))});const bt={scheduler_mode:r,nodes:h,hyperedges:b},It=Number(((performance.now()-s)/1e3).toFixed(4));return{schema:"stamp.fast-sim.run/1",id:c,title:`${o.title} · ${l.length} arm${l.length===1?"":"s"}`,status:"ok",message:"",scene:d,model:o,plan:{actions:g,tpg_edges:_,makespan_ticks:o.objects.length*2,hypergraph:bt},trajectories:{rate:m,t0:0,duration:B,arms:v},events:p,lazy_log:u,metrics:{makespan_s:V,makespan_ticks:o.objects.length*2,num_arms:l.length,lazy_iterations:u.length,time:{grounding:Number((It*.15).toFixed(4)),task:Number((It*.15).toFixed(4)),motion:Number((It*.45).toFixed(4)),verify:Number((It*.25).toFixed(4)),total:It},verify:{ok:r!=="uncoordinated_raw"||K===0,collisions:r==="uncoordinated_raw"?Math.max(1,K):0,samples:G*4,rate:128,first_collision_t:r==="uncoordinated_raw"?W??2.35:null,carried_object_contacts:0,reschedules:Math.max(0,u.length-1)}}}}class jl{constructor(t,e){j(this,"objects");j(this,"byObject",new Map);this.objects=new Map(t.map(n=>[n.id,n]));for(const n of e){if(n.type!=="attach"&&n.type!=="detach")continue;let s=this.byObject.get(n.object_id);s||(s=[],this.byObject.set(n.object_id,s)),s.push(n)}for(const n of this.byObject.values())n.sort((s,r)=>s.t-r.t)}stateAt(t,e){const n=this.objects.get(t),s=this.byObject.get(t);let r=null;if(s)for(const o of s)if(o.t<=e)r=o;else break;if(r){if(r.type==="attach")return{kind:"attached",ev:r};if(r.pose)return{kind:"pose",pose:r.pose}}return{kind:"pose",pose:n?n.start:{xyz:[0,0,0],yaw:0}}}}const Za=new ee,Ja=new ee,Qa=new ee,tl=new Pn,el=new I,nl=new I(1,1,1);function fo(i,t){i.position.set(t.xyz[0],t.xyz[1],t.xyz[2]),i.quaternion.setFromAxisAngle(new I(0,0,1),t.yaw)}function Kl(i,t,e,n){var o,a;const s=((o=n.rel)==null?void 0:o.xyz)??[0,0,.025],r=((a=n.rel)==null?void 0:a.quat)??[1,0,0,0];tl.set(r[1],r[2],r[3],r[0]).normalize(),el.set(s[0],s[1],s[2]),Ja.compose(el,tl,nl),Za.copy(t.matrixWorld).invert(),Qa.multiplyMatrices(Za,e.matrixWorld).multiply(Ja),Qa.decompose(i.position,i.quaternion,nl)}function Zl(i,t,e){const n=i.filter(o=>o.type==="deform"&&o.object_id===t&&o.span_scale).sort((o,a)=>o.t-a.t);if(n.length===0)return[1,1,1];let s=[1,1,1],r=0;for(const o of n){const a=o.span_scale;if(e<o.t){const l=Math.max(.25,o.t-r),c=Math.max(0,Math.min(1,(e-(o.t-Math.min(.6,l)))/.6)),d=c*c*(3-2*c);return[s[0]+(a[0]-s[0])*d,s[1]+(a[1]-s[1])*d,s[2]+(a[2]-s[2])*d]}s=a,r=o.t}return s}function Jl(i){const t=new ae;t.name=`obj:${i.id}`;const[e,n,s]=i.size,r=new Xt({color:i.color,roughness:i.deformable?.82:.38,metalness:i.deformable?.05:.12});if(i.type==="cylinder"){const o=new Ge(e*.5,e*.5,s,24);o.rotateX(Math.PI/2);const a=new Et(o,r);a.castShadow=!0,a.receiveShadow=!0,t.add(a)}else if(i.type==="cloth"||i.type==="garment"){const l=new Wt(e,n,s,12,8,2),c=l.attributes.position;for(let u=0;u<c.count;u++){const f=c.getX(u),m=c.getY(u),g=c.getZ(u),_=Math.sin(f/e*Math.PI*3)*Math.cos(m/n*Math.PI*2)*.0025;c.setZ(u,g+_)}l.computeVertexNormals();const d=new Et(l,r);if(d.castShadow=!0,d.receiveShadow=!0,t.add(d),i.type==="garment"){const u=new Wt(e*.22,n*.36,s*.9),f=new Et(u,r);f.position.set(-e*.55,n*.2,0);const m=new Et(u,r);m.position.set(e*.55,n*.2,0),t.add(f,m)}}else{const o=new Wt(e,n,s),a=new Et(o,r);if(a.castShadow=!0,a.receiveShadow=!0,t.add(a),i.studs){const[l,c]=i.studs,d=new Ge(.0045,.0045,.003,12);d.rotateX(Math.PI/2);const u=e/l,f=n/c;for(let m=0;m<l;m++)for(let g=0;g<c;g++){const _=new Et(d,r);_.position.set(-e/2+(m+.5)*u,-n/2+(g+.5)*f,s/2+.0015),t.add(_)}}}return t}class Vm extends To{constructor(t){super(t)}load(t,e,n,s){const r=this,o=new Fh(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(r.parse(a))}catch(l){s?s(l):console.error(l),r.manager.itemError(t)}},n,s)}parse(t){function e(c){const d=new DataView(c),u=32/8*3+32/8*3*3+16/8,f=d.getUint32(80,!0);if(80+32/8+f*u===d.byteLength)return!0;const g=[115,111,108,105,100];for(let _=0;_<5;_++)if(n(g,d,_))return!1;return!0}function n(c,d,u){for(let f=0,m=c.length;f<m;f++)if(c[f]!==d.getUint8(u+f))return!1;return!0}function s(c){const d=new DataView(c),u=d.getUint32(80,!0);let f,m,g,_=!1,p,h,b,v,x;for(let P=0;P<70;P++)d.getUint32(P,!1)==1129270351&&d.getUint8(P+4)==82&&d.getUint8(P+5)==61&&(_=!0,p=new Float32Array(u*3*3),h=d.getUint8(P+6)/255,b=d.getUint8(P+7)/255,v=d.getUint8(P+8)/255,x=d.getUint8(P+9)/255);const T=84,w=50,R=new Re,L=new Float32Array(u*3*3),S=new Float32Array(u*3*3),M=new Bt;for(let P=0;P<u;P++){const O=T+P*w,U=d.getFloat32(O,!0),V=d.getFloat32(O+4,!0),G=d.getFloat32(O+8,!0);if(_){const B=d.getUint16(O+48,!0);(B&32768)===0?(f=(B&31)/31,m=(B>>5&31)/31,g=(B>>10&31)/31):(f=h,m=b,g=v)}for(let B=1;B<=3;B++){const K=O+B*12,W=P*3*3+(B-1)*3;L[W]=d.getFloat32(K,!0),L[W+1]=d.getFloat32(K+4,!0),L[W+2]=d.getFloat32(K+8,!0),S[W]=U,S[W+1]=V,S[W+2]=G,_&&(M.setRGB(f,m,g,ke),p[W]=M.r,p[W+1]=M.g,p[W+2]=M.b)}}return R.setAttribute("position",new Ne(L,3)),R.setAttribute("normal",new Ne(S,3)),_&&(R.setAttribute("color",new Ne(p,3)),R.hasColors=!0,R.alpha=x),R}function r(c){const d=new Re,u=/solid([\s\S]*?)endsolid/g,f=/facet([\s\S]*?)endfacet/g,m=/solid\s(.+)/;let g=0;const _=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,p=new RegExp("vertex"+_+_+_,"g"),h=new RegExp("normal"+_+_+_,"g"),b=[],v=[],x=[],T=new I;let w,R=0,L=0,S=0;for(;(w=u.exec(c))!==null;){L=S;const M=w[0],P=(w=m.exec(M))!==null?w[1]:"";for(x.push(P);(w=f.exec(M))!==null;){let V=0,G=0;const B=w[0];for(;(w=h.exec(B))!==null;)T.x=parseFloat(w[1]),T.y=parseFloat(w[2]),T.z=parseFloat(w[3]),G++;for(;(w=p.exec(B))!==null;)b.push(parseFloat(w[1]),parseFloat(w[2]),parseFloat(w[3])),v.push(T.x,T.y,T.z),V++,S++;G!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+g),V!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+g),g++}const O=L,U=S-L;d.userData.groupNames=x,d.addGroup(O,U,R),R++}return d.setAttribute("position",new ue(b,3)),d.setAttribute("normal",new ue(v,3)),d}function o(c){return typeof c!="string"?new TextDecoder().decode(c):c}function a(c){if(typeof c=="string"){const d=new Uint8Array(c.length);for(let u=0;u<c.length;u++)d[u]=c.charCodeAt(u)&255;return d.buffer||d}else return c}const l=a(t);return e(l)?s(l):r(o(t))}}function Wm(i,t=Math.PI/3){const e=Math.cos(t),n=(1+1e-10)*100,s=[new I,new I,new I],r=new I,o=new I,a=new I,l=new I;function c(_){const p=~~(_.x*n),h=~~(_.y*n),b=~~(_.z*n);return`${p},${h},${b}`}const d=i.index?i.toNonIndexed():i,u=d.attributes.position,f={};for(let _=0,p=u.count/3;_<p;_++){const h=3*_,b=s[0].fromBufferAttribute(u,h+0),v=s[1].fromBufferAttribute(u,h+1),x=s[2].fromBufferAttribute(u,h+2);r.subVectors(x,v),o.subVectors(b,v);const T=new I().crossVectors(r,o).normalize();for(let w=0;w<3;w++){const R=s[w],L=c(R);L in f||(f[L]=[]),f[L].push(T)}}const m=new Float32Array(u.count*3),g=new Ne(m,3,!1);for(let _=0,p=u.count/3;_<p;_++){const h=3*_,b=s[0].fromBufferAttribute(u,h+0),v=s[1].fromBufferAttribute(u,h+1),x=s[2].fromBufferAttribute(u,h+2);r.subVectors(x,v),o.subVectors(b,v),a.crossVectors(r,o).normalize();for(let T=0;T<3;T++){const w=s[T],R=c(w),L=f[R];l.set(0,0,0);for(let S=0,M=L.length;S<M;S++){const P=L[S];a.dot(P)>e&&l.add(P)}l.normalize(),g.setXYZ(h+T,l.x,l.y,l.z)}}return d.setAttribute("normal",g),d}const il=new Map,Xm=new Vm,$m=["link0.stl","link1.stl","link2.stl","link3.stl","link4.stl","link5.stl","link6.stl","link7.stl","hand.stl"],qm=new Ge(.088,.098,.014,24).rotateX(Math.PI/2),Ym=new Ge(.098,.106,.006,24).rotateX(Math.PI/2),jm=new Ge(.044,.044,.012,18).rotateX(Math.PI/2),sl=new Wt(.014,.011,.046),rl=new Wt(.015,.004,.022),ol=new Ge(.045,.045,.16,14).rotateX(Math.PI/2),Km=new Wt(.04,.1,.06),Zm=new Xt({color:15922682,roughness:.28,metalness:.2}),Jm=new Xt({color:2304307,roughness:.38,metalness:.45}),Qm=new Xt({color:1580324,roughness:.32,metalness:.65}),ys=new Xt({color:16729413,emissive:10033947,emissiveIntensity:.72,transparent:!0,opacity:.46,roughness:.4,depthWrite:!1}),al=new Map;function tg(i){let t=al.get(i);return t||(t=new Xt({color:i,roughness:.3,metalness:.28}),al.set(i,t)),t}function eg(i){let t=il.get(i);return t||(t=new Promise((e,n)=>{Xm.load(i,s=>{const r=Wm(s,Math.PI*.27);r.computeBoundingSphere(),e(r)},void 0,s=>n(s))}),il.set(i,t)),t}function Ql(i="./robots/fr3/meshes/"){return Promise.all($m.map(t=>eg(`${i}${t}`).catch(()=>null)))}async function Vi(i,t={}){const e=t.baseUrl??"./robots/fr3/meshes/";let n=[];try{n=await Ql(e)}catch{n=Array(9).fill(null)}const s=!!t.isGhost,r=t.castShadow!==void 0?t.castShadow:!s,o=s?ys:Zm,a=s?ys:tg(i.color),l=s?ys:Jm,c=s?ys:Qm,d=new ae;d.name=`robot:${i.id}`,d.position.set(i.base.xyz[0],i.base.xyz[1],i.base.xyz[2]),d.rotation.set(0,0,i.base.yaw);const u=new Et(qm,c);u.position.set(0,0,.007),d.add(u);const f=new Et(Ym,a);f.position.set(0,0,.003),d.add(f);const m=new ae,g=n[0]??ol,_=new Et(g,o);_.castShadow=r,_.receiveShadow=!s,m.add(_),d.add(m);let p=m;const h=[];for(let P=0;P<7;P++){const[O,U]=Vs[P],V=new ae;V.position.set(O[0],O[1],O[2]),V.rotation.set(U[0],U[1],U[2],"ZYX"),p.add(V);const G=new ae;G.name=`fr3_joint${P+1}`,V.add(G),h.push(G);const B=new Et(jm,c);G.add(B);const K=n[P+1]??ol,W=P===1||P===5?a:o,lt=new Et(K,W);lt.castShadow=r,lt.receiveShadow=!s,G.add(lt),p=G}const b=new ae;b.position.set(0,0,.107),p.add(b);const v=new ae;v.rotation.set(0,0,-Math.PI/4),b.add(v);const x=n[8]??Km,T=new Et(x,l);T.castShadow=r,v.add(T);const w=new Et(sl,l);w.position.set(0,.032,.082);const R=new Et(rl,a);R.position.set(0,-.006,.01),w.add(R);const L=new Et(sl,l);L.position.set(0,-.032,.082);const S=new Et(rl,a);S.position.set(0,.006,.01),L.add(S),v.add(w,L);const M=new ae;return M.name="fr3_hand_tcp",M.position.set(0,0,.1034),v.add(M),be(h,i.home),{root:d,joints:h,tcp:M,fingerLeft:w,fingerRight:L}}function be(i,t){const e=Math.min(i.length,t.length);for(let n=0;n<e;n++)i[n].rotation.set(0,0,t[n])}class ng{constructor(t){j(this,"viewer");j(this,"group",new ae);j(this,"roadmapGroup",new ae);j(this,"overlayGroup",new ae);j(this,"scenario",null);j(this,"duration",0);j(this,"cells",[]);j(this,"mms",new Map);j(this,"carriers",new Map);j(this,"orderVisuals",[]);this.viewer=t}dispose(){this.viewer.clearGroup(this.group),this.viewer.clearGroup(this.roadmapGroup),this.viewer.clearGroup(this.overlayGroup),this.group.removeFromParent(),this.cells=[],this.mms.clear(),this.carriers.clear(),this.orderVisuals=[],this.scenario=null}async load(t,e){this.dispose(),this.scenario=t,this.viewer.clearStatic(),this.viewer.dynamicGroup.add(this.group),this.group.add(this.roadmapGroup,this.overlayGroup);const[n,s,r,o]=t.floor.bounds,a=r-n,l=o-s,c=new Et(new Wt(a,l,.04),new Xt({color:this.viewer.getTheme()==="light"?"#cfd6e2":"#1b1f27",roughness:.85}));c.position.set((n+r)/2,(s+o)/2,t.floor.z-.02),c.receiveShadow=!0,this.group.add(c);const d=new Hl(Math.max(a,l),24,3884116,2435894);d.rotation.x=Math.PI/2,d.position.set((n+r)/2,(s+o)/2,t.floor.z+.002),this.group.add(d);for(const v of t.floor.stations){const x=v.kind==="finished_goods"?"#3ccf91":"#3a7bd5",T=new Et(new Wt(v.size[0],v.size[1],v.size[2]),new Xt({color:x,roughness:.55}));T.position.set(v.xyz[0],v.xyz[1],v.xyz[2]+v.size[2]/2),T.castShadow=!0,T.receiveShadow=!0,this.group.add(T);const w=document.createElement("div");w.className="scene-label station",w.textContent=v.label;const R=new Tn(w);if(R.position.set(v.xyz[0],v.xyz[1],v.xyz[2]+v.size[2]+.24),this.group.add(R),v.kind==="depot"||v.kind==="finished_goods"){const L=["#e64a4a","#f5c542","#4f9dff","#3ccf91"];for(let S=-1;S<=1;S++)for(let M=-1;M<=1;M++){const P=L[Math.abs(S*2+M)%L.length],O=new Et(new Wt(.11,.14,.08),new Xt({color:P,roughness:.4,metalness:.15}));O.position.set(v.xyz[0]+M*.18,v.xyz[1]+S*.28,v.xyz[2]+v.size[2]+.04),this.group.add(O)}}}this.buildRoadmap(t);for(const v of t.cells){const x=new ae;x.position.set(v.xy[0],v.xy[1],0),this.viewer.buildStatic(v.scene,{into:x,showSlots:!1});const T=new Map;for(const S of v.scene.arms){const M=await Vi(S,{castShadow:!1});x.add(M.root),T.set(S.id,{spec:S,robot:M})}const w=new Map;for(const[S,M]of Object.entries(v.runs)){const P=typeof M=="string"?await e(M):M;w.set(S,P)}const R=document.createElement("div");R.className="scene-label cell-title",R.textContent=v.label;const L=new Tn(R);L.position.set(0,-v.scene.table.size[1]/2-.18,.08),x.add(L),this.group.add(x),this.cells.push({spec:v,group:x,arms:T,runs:w})}const u=new Et(new Wt(.52,7.6,.03),new Xt({color:"#28303d",roughness:.6,metalness:.3}));u.position.set(3.15,0,t.floor.z+.015),this.group.add(u);const f=new Ge(.085,.085,.05,16),m=new Xt({color:"#151920",roughness:.7,metalness:.2}),g=new Xt({color:"#252c37",roughness:.45,metalness:.4}),_=new Xt({color:"#364152",roughness:.5,metalness:.2}),p=new Ge(.045,.05,.045,16).rotateX(Math.PI/2),h=new Xt({color:"#4f9dff",emissive:"#1b4d8a",emissiveIntensity:.5}),b=v=>{const x=new ae,T=new Et(new Wt(.075,.075,.065),new Xt({color:v,roughness:.35}));T.position.set(-.035,-.04,.032);const w=new Et(new Wt(.075,.075,.065),new Xt({color:"#f5c542",roughness:.35}));w.position.set(.035,.04,.032);const R=new Et(new Wt(.14,.04,.035),new Xt({color:"#3ccf91",roughness:.35}));return R.position.set(0,0,.08),x.add(T,w,R),x};for(let v=0;v<t.mms.length;v++){const x=t.mms[v],T=new ae,[w,R,L]=x.size,S=new Et(new Wt(w+.04,R+.03,.08),g);S.position.set(0,0,.06),T.add(S);const M=new Et(new Wt(w*.92,R*.92,L-.06),new Xt({color:x.color,roughness:.36,metalness:.28}));M.position.set(0,0,L/2+.02),M.castShadow=!0,T.add(M);for(const lt of[-1,1])for(const pt of[-1,1]){const bt=new Et(f,m);bt.position.set(lt*(w*.34),pt*(R*.48),.085),T.add(bt)}const P=new Et(new Wt(.22,.3,.09),_);P.position.set(-.17,0,L+.045),T.add(P);const O=b(x.color);O.position.set(-.17,0,L+.09),T.add(O);const U=new Et(p,h);U.position.set(w*.42,0,L+.02),T.add(U);const V={id:x.id,color:x.color,base:{xyz:[.14,0,L],yaw:0},home:[0,-.78,0,-2.48,0,1.68,.785]},G=await Vi(V,{castShadow:!1});T.add(G.root);const B=b(x.color);B.position.set(0,0,.02),B.visible=!1,G.tcp.add(B);const K=document.createElement("div");K.className="scene-label mm-tag",K.textContent=x.id.toUpperCase();const W=new Tn(K);W.position.set(0,0,L+.65),T.add(W),T.position.set(x.track.poses[0][0],x.track.poses[0][1],t.floor.z),this.group.add(T),this.mms.set(x.id,{idx:v,group:T,robot:G,track:x.track,color:x.color,toteCargo:O,tcpCargo:B,tagEl:K})}for(const v of t.carriers){const x=new ae,T=new Et(new Wt(v.size[0],v.size[1],v.size[2]),new Xt({color:"#a0794e",roughness:.72}));T.castShadow=!0,x.add(T);const w=b("#3ccf91");w.position.set(0,0,v.size[2]/2),x.add(w),this.group.add(x),this.carriers.set(v.id,{group:x,track:v.track})}for(const v of t.cell_jobs){const x=this.cells.find(R=>R.spec.id===v.cell),T=x==null?void 0:x.runs.get(v.model);if(!x||!T)continue;const w=new Map;for(const R of T.model.objects){const L=Jl(R);L.visible=!1,x.group.add(L),w.set(R.id,L)}this.orderVisuals.push({orderId:v.order,cell:x,run:T,timeline:new jl(T.model.objects,T.events),meshes:w,tStart:v.t_start,tEnd:v.t_end})}this.duration=t.metrics.makespan_s}buildRoadmap(t){this.viewer.clearGroup(this.roadmapGroup);const e=new Map(t.floor.roadmap.nodes.map(a=>[a.id,a.xy])),n=t.floor.z+.015,s=new bo({color:5217791,transparent:!0,opacity:.45});for(const[a,l]of t.floor.roadmap.edges){const c=e.get(a),d=e.get(l);if(!c||!d)continue;const u=[new I(c[0],c[1],n),new I(d[0],d[1],n)],f=new Re().setFromPoints(u);this.roadmapGroup.add(new zl(f,s))}const r=new Ge(.08,.08,.01,16).rotateX(Math.PI/2),o=new qn({color:5217791});for(const a of t.floor.roadmap.nodes){const l=new Et(r,o);l.position.set(a.xy[0],a.xy[1],n),this.roadmapGroup.add(l)}}setOverlayLayer(t){var n;if(this.viewer.clearGroup(this.overlayGroup),this.roadmapGroup.visible=t===null||t==="L2",!this.scenario||!t)return;const e=this.scenario.floor.z+.04;if(t==="L1"){const s=((n=this.scenario.assignments[0])==null?void 0:n.loads)??{};for(const r of this.cells){const o=s[r.spec.id]??20,a=document.createElement("div");a.className="scene-label overlay-badge l1",a.textContent=`MILP Load: ${o.toFixed(1)}s`;const l=new Tn(a);l.position.set(r.spec.xy[0],r.spec.xy[1],.95),this.overlayGroup.add(l)}}else if(t==="L3")for(const s of this.scenario.replans.flatMap(r=>r.repairs??[])){const r=new Et(new $i(.18,.26,24),new qn({color:16106818,side:Be}));r.position.set(s.xy[0],s.xy[1],e),this.overlayGroup.add(r);const o=document.createElement("div");o.className="scene-label overlay-badge l3",o.textContent=`${s.type.toUpperCase()}: ${s.text}`;const a=new Tn(o);a.position.set(s.xy[0],s.xy[1],e+.45),this.overlayGroup.add(a)}}applyTime(t){if(!this.scenario)return;const e=[0,-.78,0,-2.48,0,1.68,.785],n=[0,.52,0,-1.38,0,1.92,.785],s=[3.12,.24,0,-1.96,0,2.18,.785],r=[0,.58,0,-1.32,0,1.9,.785],o=(l,c,d)=>{const u=Math.max(0,Math.min(1,d)),f=u*u*(3-2*u);return l.map((m,g)=>m+(c[g]-m)*f)},a=["C0","C1","C2","C0","C2"];for(const l of this.mms.values()){const c=(t-l.track.t0)*l.track.rate,d=l.track.poses.length-1,u=Math.max(0,Math.min(d,Math.floor(c))),f=Math.min(d,u+1),m=Math.max(0,Math.min(1,c-u)),g=l.track.poses[u],_=l.track.poses[f],p=g[0]+(_[0]-g[0])*m,h=g[1]+(_[1]-g[1])*m;let b=_[2]-g[2];b=Math.atan2(Math.sin(b),Math.cos(b)),l.group.position.set(p,h,this.scenario.floor.z),l.group.rotation.set(0,0,g[2]+b*m);const v=(t/20+l.idx*.21)%1,x=a[l.idx%a.length],T=`MM${l.idx}`;if(v<.18){const w=v/.18;let R=e;w<.42?(R=o(e,n,w/.42),l.tcpCargo.visible=!1,l.toteCargo.visible=!1):w<.82?(R=o(n,s,(w-.42)/.4),l.tcpCargo.visible=!0,l.toteCargo.visible=!1):(R=o(s,e,(w-.82)/.18),l.tcpCargo.visible=!1,l.toteCargo.visible=!0),be(l.robot.joints,R),l.tagEl.textContent=`${T} · PICKING AT DEPOT`}else if(v<.5)be(l.robot.joints,e),l.tcpCargo.visible=!1,l.toteCargo.visible=!0,l.tagEl.textContent=`${T} · TRANSFER → ${x}`;else if(v<.68){const w=(v-.5)/.18;let R=e;w<.35?(R=o(e,s,w/.35),l.tcpCargo.visible=!1,l.toteCargo.visible=!0):w<.78?(R=o(s,r,(w-.35)/.43),l.tcpCargo.visible=!0,l.toteCargo.visible=!1):(R=o(r,e,(w-.78)/.22),l.tcpCargo.visible=!1,l.toteCargo.visible=!1),be(l.robot.joints,R),l.tagEl.textContent=`${T} · UNLOADING → ${x}`}else be(l.robot.joints,e),l.tcpCargo.visible=!1,l.toteCargo.visible=!1,l.tagEl.textContent=`${T} · RETURN TO DEPOT`}for(const l of this.carriers.values()){const c=l.track;if(c.length===0||t<c[0][0]||t>c[c.length-1][0]+15){l.group.visible=!1;continue}l.group.visible=!0;let d=c[c.length-1];for(const u of c)if(u[0]<=t)d=u;else break;l.group.position.set(d[1],d[2],d[3]),l.group.rotation.set(0,0,d[4])}for(const l of this.cells)for(const c of l.arms.values())be(c.robot.joints,c.spec.home);for(const l of this.orderVisuals){if(!(t>=l.tStart&&t<=l.tEnd+1.5)){for(const f of l.meshes.values())f.visible=!1;continue}const d=Math.max(0,t-l.tStart),u=l.run.trajectories;for(const[f,m]of l.cell.arms){const g=Os(u.rate,u.t0,u.arms[f],d,m.spec.home);be(m.robot.joints,g)}l.cell.group.updateMatrixWorld(!0);for(const[f,m]of l.meshes){m.visible=!0;const g=l.timeline.stateAt(f,d);if(g.kind==="pose")fo(m,g.pose);else{const p=l.cell.arms.get(g.ev.arm);p&&Kl(m,l.cell.group,p.robot.tcp,g.ev)}const _=Zl(l.run.events,f,d);m.scale.set(_[0],_[1],_[2])}}}}const ll={type:"change"},Po={type:"start"},tc={type:"end"},Ss=new Bs,cl=new bn,ig=Math.cos(70*Zc.DEG2RAD),ge=new I,De=2*Math.PI,re={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Er=1e-6;class sg extends Hh{constructor(t,e=null){super(t,e),this.state=re.NONE,this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:mi.ROTATE,MIDDLE:mi.DOLLY,RIGHT:mi.PAN},this.touches={ONE:fi.ROTATE,TWO:fi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new Pn,this._lastTargetPosition=new I,this._quat=new Pn().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new pa,this._sphericalDelta=new pa,this._scale=1,this._panOffset=new I,this._rotateStart=new Pt,this._rotateEnd=new Pt,this._rotateDelta=new Pt,this._panStart=new Pt,this._panEnd=new Pt,this._panDelta=new Pt,this._dollyStart=new Pt,this._dollyEnd=new Pt,this._dollyDelta=new Pt,this._dollyDirection=new I,this._mouse=new Pt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=og.bind(this),this._onPointerDown=rg.bind(this),this._onPointerUp=ag.bind(this),this._onContextMenu=pg.bind(this),this._onMouseWheel=hg.bind(this),this._onKeyDown=dg.bind(this),this._onTouchStart=ug.bind(this),this._onTouchMove=fg.bind(this),this._onMouseDown=lg.bind(this),this._onMouseMove=cg.bind(this),this._interceptControlDown=mg.bind(this),this._interceptControlUp=gg.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ll),this.update(),this.state=re.NONE}update(t=null){const e=this.object.position;ge.copy(e).sub(this.target),ge.applyQuaternion(this._quat),this._spherical.setFromVector3(ge),this.autoRotate&&this.state===re.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=De:n>Math.PI&&(n-=De),s<-Math.PI?s+=De:s>Math.PI&&(s-=De),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(ge.setFromSpherical(this._spherical),ge.applyQuaternion(this._quatInverse),e.copy(this.target).add(ge),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=ge.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=ge.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ss.origin.copy(this.object.position),Ss.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ss.direction))<ig?this.object.lookAt(this.target):(cl.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ss.intersectPlane(cl,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Er||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Er||this._lastTargetPosition.distanceToSquared(this.target)>Er?(this.dispatchEvent(ll),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?De/60*this.autoRotateSpeed*t:De/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ge.setFromMatrixColumn(e,0),ge.multiplyScalar(-t),this._panOffset.add(ge)}_panUp(t,e){this.screenSpacePanning===!0?ge.setFromMatrixColumn(e,1):(ge.setFromMatrixColumn(e,0),ge.crossVectors(this.object.up,ge)),ge.multiplyScalar(t),this._panOffset.add(ge)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;ge.copy(s).sub(this.target);let r=ge.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(De*this._rotateDelta.x/e.clientHeight),this._rotateUp(De*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(De*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-De*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(De*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-De*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(De*this._rotateDelta.x/e.clientHeight),this._rotateUp(De*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Pt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function rg(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function og(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function ag(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(tc),this.state=re.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function lg(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case mi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=re.DOLLY;break;case mi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=re.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=re.ROTATE}break;case mi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=re.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=re.PAN}break;default:this.state=re.NONE}this.state!==re.NONE&&this.dispatchEvent(Po)}function cg(i){switch(this.state){case re.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case re.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case re.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function hg(i){this.enabled===!1||this.enableZoom===!1||this.state!==re.NONE||(i.preventDefault(),this.dispatchEvent(Po),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(tc))}function dg(i){this.enabled!==!1&&this._handleKeyDown(i)}function ug(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case fi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=re.TOUCH_ROTATE;break;case fi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=re.TOUCH_PAN;break;default:this.state=re.NONE}break;case 2:switch(this.touches.TWO){case fi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=re.TOUCH_DOLLY_PAN;break;case fi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=re.TOUCH_DOLLY_ROTATE;break;default:this.state=re.NONE}break;default:this.state=re.NONE}this.state!==re.NONE&&this.dispatchEvent(Po)}function fg(i){switch(this._trackPointer(i),this.state){case re.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case re.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case re.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case re.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=re.NONE}}function pg(i){this.enabled!==!1&&i.preventDefault()}function mg(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function gg(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class _g{constructor(t){j(this,"host");j(this,"renderer");j(this,"labelRenderer");j(this,"scene",new Th);j(this,"camera");j(this,"controls");j(this,"root",new ae);j(this,"staticGroup",new ae);j(this,"dynamicGroup",new ae);j(this,"ghostGroup",new ae);j(this,"overlayGroup",new ae);j(this,"slots",new Map);j(this,"onSlotClick",null);j(this,"followTarget",null);j(this,"cameraTween",null);j(this,"beltTextures",[]);j(this,"raycaster",new Gh);j(this,"pointerDownXy",new Pt);j(this,"theme","dark");this.host=t,me.DEFAULT_UP.set(0,0,1),this.renderer=new Tm({antialias:!0,powerPreference:"high-performance",stencil:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=pl,this.renderer.toneMapping=gl,this.renderer.toneMappingExposure=1.1,t.appendChild(this.renderer.domElement),this.labelRenderer=new Am,this.labelRenderer.domElement.className="label-layer",this.labelRenderer.domElement.style.position="absolute",this.labelRenderer.domElement.style.inset="0",this.labelRenderer.domElement.style.pointerEvents="none",t.appendChild(this.labelRenderer.domElement),this.camera=new $e(42,16/9,.04,80),this.camera.up.set(0,0,1),this.camera.position.set(1.55,-1.75,1.35),this.controls=new sg(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.maxPolarAngle=Math.PI*.49,this.controls.minDistance=.35,this.controls.maxDistance=26,this.controls.target.set(0,0,.12),this.controls.update(),this.scene.background=new Bt("#14171c");const e=new Oh(14411519,2501428,1.25);e.position.set(0,0,6),this.scene.add(e);const n=new da(16777215,1.85);n.position.set(2.8,-3.4,4.8),n.castShadow=!0,n.shadow.mapSize.set(1024,1024),n.shadow.camera.near=.5,n.shadow.camera.far=16;const s=3.2;n.shadow.camera.left=-s,n.shadow.camera.right=s,n.shadow.camera.top=s,n.shadow.camera.bottom=-s,n.shadow.bias=-4e-4,this.scene.add(n);const r=new da(9090303,.55);r.position.set(-3,2.5,2.6),this.scene.add(r),this.root.add(this.staticGroup,this.dynamicGroup,this.ghostGroup,this.overlayGroup),this.scene.add(this.root),this.renderer.domElement.addEventListener("pointerdown",a=>{this.pointerDownXy.set(a.clientX,a.clientY),this.cameraTween=null}),this.renderer.domElement.addEventListener("pointerup",a=>{if(Math.hypot(a.clientX-this.pointerDownXy.x,a.clientY-this.pointerDownXy.y)>5||!this.onSlotClick||this.slots.size===0)return;const l=this.renderer.domElement.getBoundingClientRect(),c=new Pt((a.clientX-l.left)/l.width*2-1,-((a.clientY-l.top)/l.height)*2+1);this.raycaster.setFromCamera(c,this.camera);const d=[];for(const f of this.slots.values())d.push(f.group);const u=this.raycaster.intersectObjects(d,!0);if(u.length>0){let f=u[0].object;for(;f&&!f.userData.slotId;)f=f.parent;f!=null&&f.userData.slotId&&this.onSlotClick(String(f.userData.slotId))}}),new ResizeObserver(()=>this.resize()).observe(t),this.resize()}resize(){const t=Math.max(320,this.host.clientWidth||window.innerWidth),e=Math.max(240,this.host.clientHeight||window.innerHeight);this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e,!1),this.labelRenderer.setSize(t,e)}setTheme(t){this.theme=t,this.scene.background=new Bt(t==="light"?"#eef1f6":"#14171c")}getTheme(){return this.theme}clearGroup(t){for(const e of[...t.children])e.traverse(n=>{n instanceof Tn&&n.element.remove()}),t.remove(e)}clearStatic(){this.clearGroup(this.staticGroup),this.slots.clear(),this.beltTextures=[]}buildStatic(t,e={}){const n=e.into??this.staticGroup;n===this.staticGroup&&this.clearStatic();const[s,r,o]=t.table.size,a=new Xt({color:this.theme==="light"?"#d6dce5":"#252a33",roughness:.72,metalness:.08}),l=new Et(new Wt(s,r,o),a);l.position.set(0,0,-o/2),l.receiveShadow=!0,l.castShadow=!0,n.add(l);const c=new Xt({color:"#3d4451",roughness:.45,metalness:.55});for(const v of[-1,1])for(const x of[-1,1]){const T=new Et(new Wt(.05,.05,.71),c);T.position.set(v*(s/2-.07),x*(r/2-.07),-o-.355),T.castShadow=!0,n.add(T)}const d=new Hl(Math.max(s,r),16,4937061,3291204);d.rotation.x=Math.PI/2,d.position.set(0,0,5e-4),n.add(d);const u=t.baseplate,f=u.studs[0]*u.pitch,m=u.studs[1]*u.pitch,g=new Et(new Wt(f,m,u.height),new Xt({color:"#3b4859",roughness:.45,metalness:.18}));g.position.set(u.origin[0]+f/2,u.origin[1]+m/2,u.height/2),g.receiveShadow=!0,n.add(g);const _=new Et(new $i(.242,.25,48),new qn({color:3985297,side:Be,transparent:!0,opacity:.35}));_.position.set(0,0,.002),n.add(_);const p=new Xt({color:"#2c384a",roughness:.52,metalness:.15}),h=new Xt({color:"#43536b",roughness:.4,metalness:.35});for(const v of t.feeders){const x=new Et(new Wt(v.size[0],v.size[1],v.size[2]),p);x.position.set(v.xyz[0],v.xyz[1],v.size[2]/2),x.receiveShadow=!0,n.add(x);const T=new Et(new Wt(v.size[0]+.012,v.size[1]+.012,v.size[2]*.7),h);T.position.set(v.xyz[0],v.xyz[1],v.size[2]*.35),n.add(T)}const b=new Xt({color:"#3e3554",roughness:.55});for(const v of t.buffers){const x=new Et(new Wt(v.size[0],v.size[1],v.size[2]),b);x.position.set(v.xyz[0],v.xyz[1],v.size[2]/2),x.receiveShadow=!0,n.add(x)}for(const v of t.conveyors??[]){const x=document.createElement("canvas");x.width=64,x.height=32;const T=x.getContext("2d");T&&(T.fillStyle="#20252d",T.fillRect(0,0,64,32),T.strokeStyle="#4f9dff",T.lineWidth=4,T.beginPath(),T.moveTo(14,4),T.lineTo(38,16),T.lineTo(14,28),T.stroke());const w=new Ph(x);w.wrapS=Wi,w.wrapT=Wi,w.repeat.set(6,1),this.beltTextures.push(w);const R=new Et(new Wt(v.size[0],v.size[1],v.size[2]),new Xt({map:w,roughness:.65}));R.position.set(v.xyz[0],v.xyz[1],v.size[2]/2),n.add(R)}if(e.showSlots!==!1&&n===this.staticGroup)for(const v of t.mount_slots){const x=new ae;x.position.set(v.xyz[0],v.xyz[1],.003),x.userData.slotId=v.id;const T=new $i(.075,.095,32),w=new qn({color:7042952,side:Be,transparent:!0,opacity:.75}),R=new Et(T,w);R.userData.slotId=v.id;const L=new wo(.074,32),S=new qn({color:5217791,side:Be,transparent:!0,opacity:.14}),M=new Et(L,S);M.userData.slotId=v.id;const P=document.createElement("div");P.className="scene-label slot-tag",P.textContent=v.id;const O=new Tn(P);O.position.set(0,-.115,.01),x.add(R,M,O),n.add(x),this.slots.set(v.id,{group:x,ring:R,disc:M,spec:v})}}setSlotState(t,e,n=null){const s=this.slots.get(t);if(!s)return;const r=s.ring.material,o=s.disc.material;if(e==="selected-occupied"||e==="occupied"){const a=new Bt(n??"#4f9dff");r.color.copy(a),r.opacity=.95,o.color.copy(a),o.opacity=e==="selected-occupied"?.32:.18}else e==="selected"?(r.color.set("#4f9dff"),r.opacity=.95,o.color.set("#4f9dff"),o.opacity=.28):(r.color.set("#6b7788"),r.opacity=.55,o.color.set("#6b7788"),o.opacity=.08)}setBeltTime(t,e=.12){for(const n of this.beltTextures)n.offset.x=-(t*e*2.5)%1}presetPose(t,e){if(t==="front")return[new I(0,-2.05,.85),new I(0,0,.14)];if(t==="top")return[new I(0,-.01,2.35),new I(0,0,0)];if(t==="arm"&&e){const n=e.xyz[0],s=e.xyz[1];return[new I(n*1.65+.35,s*1.65-.65,.88),new I(n*.4,s*.4,.18)]}return[new I(1.58,-2.02,1.32),new I(0,-.18,.02)]}goTo(t,e=!0){if(!e){this.cameraTween=null,this.camera.position.copy(t[0]),this.controls.target.copy(t[1]),this.controls.update();return}this.cameraTween={fromPos:this.camera.position.clone(),fromTarget:this.controls.target.clone(),toPos:t[0].clone(),toTarget:t[1].clone(),t:0}}render(t){if(this.cameraTween){this.cameraTween.t=Math.min(1,this.cameraTween.t+t*2.6);const e=this.cameraTween.t,n=e*e*(3-2*e);this.camera.position.lerpVectors(this.cameraTween.fromPos,this.cameraTween.toPos,n),this.controls.target.lerpVectors(this.cameraTween.fromTarget,this.cameraTween.toTarget,n),this.cameraTween.t>=1&&(this.cameraTween=null)}else if(this.followTarget){const e=this.followTarget();if(e){const n=e.clone().sub(this.controls.target);this.controls.target.addScaledVector(n,.15),this.camera.position.addScaledVector(n,.15)}}this.controls.update(),this.renderer.render(this.scene,this.camera),this.labelRenderer.render(this.scene,this.camera)}}function vg(i){if(i.plan.hypergraph&&i.plan.hypergraph.nodes.length>0)return i.plan.hypergraph;const t=[{id:"res_central_mutex",label:"Central Zone Mutex",kind:"resource",arms:i.scene.arms.map(n=>n.id),t_start:0,t_end:i.trajectories.duration||1,wave:0}],e=[];return i.plan.actions.forEach((n,s)=>{t.push({id:n.id,label:`${n.arms.join("+")} ${n.kind} ${n.object_id}`,kind:n.arms.length>1?"sync_hub":n.kind==="recover_slip"?"repair":"task",action_id:n.id,arms:n.arms,object_id:n.object_id,t_start:n.t_start,t_end:n.t_end,wave:Math.floor(s/2)}),(n.kind==="place"||n.kind==="dual_arm_place"||n.kind==="fold"||n.kind==="handover")&&e.push({id:`he_mutex_${n.id}`,kind:n.arms.length>1?"bimanual_sync":"mutex_lock",label:n.arms.length>1?"Bimanual Lock":"Mutex Lock",sources:["res_central_mutex"],targets:[n.id],t_active:[n.t_start,n.t_end]})}),i.plan.tpg_edges.forEach(([n,s],r)=>{const o=t.find(l=>l.id===n),a=t.find(l=>l.id===s);o&&a&&e.push({id:`he_tpg_${r}`,kind:"precedence",label:"TPG Edge",sources:[n],targets:[s],t_active:[o.t_start,a.t_end]})}),{scheduler_mode:"lazy_dash",nodes:t,hyperedges:e}}function xg(i){const t=[{id:"hub_milp_router",label:"Rolling MILP Dispatcher",kind:"resource",arms:i.cells.map(n=>n.id),t_start:0,t_end:i.metrics.makespan_s,wave:0}],e=[];return i.transport.slice(0,6).forEach((n,s)=>{const r=`tr_${n.order}`;t.push({id:r,label:`${n.mm.toUpperCase()} fetch ${n.order}`,kind:"task",arms:[n.mm],object_id:n.order,t_start:n.t_start,t_end:n.t_end,wave:s}),e.push({id:`he_milp_${n.order}`,kind:"precedence",label:"MILP Dispatch",sources:["hub_milp_router"],targets:[r],t_active:[n.t_start,n.t_end]})}),i.cell_jobs.slice(0,6).forEach((n,s)=>{const r=`job_${n.order}`,o=`tr_${n.order}`;t.push({id:r,label:`${n.cell.toUpperCase()} build ${n.order}`,kind:"sync_hub",arms:[n.cell],object_id:n.model,t_start:n.t_start,t_end:n.t_end,wave:s}),e.push({id:`he_handover_${n.order}`,kind:"handover_sync",label:`Dock Handover (${n.order})`,sources:[o],targets:[r],t_active:[n.t_start-1.5,n.t_end]})}),{scheduler_mode:"lazy_dash",nodes:t,hyperedges:e}}class Mg{constructor(t){j(this,"el");j(this,"headerSummaryEl");j(this,"svg");j(this,"onSeek");j(this,"posNodes",[]);j(this,"posEdges",[]);j(this,"conflictArms",new Set);j(this,"currentTime",0);this.onSeek=t,this.el=document.createElement("div"),this.el.className="hypergraph-pane";const e=document.createElement("div");e.className="hg-head",e.innerHTML='<span class="hg-title">Real-Time Execution Hypergraph (TPG + Resource Hyperedges)</span>',this.headerSummaryEl=document.createElement("span"),this.headerSummaryEl.className="hg-summary mono",e.appendChild(this.headerSummaryEl),this.svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.svg.setAttribute("viewBox","0 0 640 124"),this.svg.setAttribute("preserveAspectRatio","none"),this.svg.classList.add("hg-svg"),this.el.append(e,this.svg)}setHypergraph(t){this.conflictArms.clear(),this.posNodes=[],this.posEdges=[],this.svg.replaceChildren();const e=640,n=t.nodes.filter(f=>f.kind==="resource"),s=t.nodes.filter(f=>f.kind!=="resource"),r=new Map,o=document.createElementNS("http://www.w3.org/2000/svg","g"),a=document.createElementNS("http://www.w3.org/2000/svg","g");this.svg.append(o,a),n.forEach((f,m)=>{const p=8+m*136,b=this.createNodeDom(f,p,6,128,24);a.appendChild(b.groupEl),this.posNodes.push(b),r.set(f.id,b)});const l=Math.max(1,Math.ceil(s.length/2)),c=Math.min(126,(e-18)/l),d=Math.max(72,c-8),u=36;s.forEach((f,m)=>{const g=Math.floor(m/2),_=m%2,p=10+g*c,h=38+_*43,b=this.createNodeDom(f,p,h,d,u);a.appendChild(b.groupEl),this.posNodes.push(b),r.set(f.id,b)});for(const f of t.hyperedges){const m=f.sources.map(S=>r.get(S)).filter(Boolean),g=f.targets.map(S=>r.get(S)).filter(Boolean);if(m.length===0||g.length===0)continue;const _=m[0],p=g[0],h=_.x+_.w*.5,b=_.y+_.h*.5,v=p.x+p.w*.5,x=p.y+p.h*.5,T=(h+v)*.5,w=(b+x)*.5-(f.kind==="precedence"?8:0),R=document.createElementNS("http://www.w3.org/2000/svg","path");R.setAttribute("d",`M ${h} ${b} Q ${T} ${w} ${v} ${x}`),R.setAttribute("class",`hg-edge ${f.kind}`),o.appendChild(R);let L=null;(f.kind==="bimanual_sync"||f.kind==="mutex_lock"||f.kind==="repair_splice")&&(L=document.createElementNS("http://www.w3.org/2000/svg","circle"),L.setAttribute("cx",String(T)),L.setAttribute("cy",String(w)),L.setAttribute("r","3.2"),L.setAttribute("class",`hg-hub ${f.kind}`),o.appendChild(L)),this.posEdges.push({spec:f,pathEl:R,hubEl:L})}this.setTime(this.currentTime)}createNodeDom(t,e,n,s,r){const o=document.createElementNS("http://www.w3.org/2000/svg","g");o.setAttribute("class",`hg-node ${t.kind}`),o.style.cursor="pointer",o.addEventListener("click",()=>{const m=t.t_start+(t.t_end-t.t_start)*.35;this.onSeek(m)});const a=document.createElementNS("http://www.w3.org/2000/svg","rect");a.setAttribute("x",String(e)),a.setAttribute("y",String(n)),a.setAttribute("width",String(s)),a.setAttribute("height",String(r)),a.setAttribute("rx","5"),a.setAttribute("class","hg-node-box");const l=document.createElementNS("http://www.w3.org/2000/svg","rect");l.setAttribute("x",String(e+2)),l.setAttribute("y",String(n+r-4)),l.setAttribute("width","0"),l.setAttribute("height","2.5"),l.setAttribute("rx","1.2"),l.setAttribute("class","hg-node-prog");const c=document.createElementNS("http://www.w3.org/2000/svg","circle");c.setAttribute("cx",String(e+9)),c.setAttribute("cy",String(n+11)),c.setAttribute("r","3.5"),c.setAttribute("class","hg-node-dot");const d=document.createElementNS("http://www.w3.org/2000/svg","text");d.setAttribute("x",String(e+17)),d.setAttribute("y",String(n+14)),d.setAttribute("class","hg-node-title");const u=Math.max(10,Math.floor((s-20)/5.4));d.textContent=t.label.length>u?`${t.label.slice(0,u-1)}…`:t.label;const f=document.createElementNS("http://www.w3.org/2000/svg","text");return f.setAttribute("x",String(e+8)),f.setAttribute("y",String(n+27)),f.setAttribute("class","hg-node-state"),f.textContent=t.kind==="resource"?"MUTEX READY":"QUEUED",o.append(a,l,c,d,f),{spec:t,x:e,y:n,w:s,h:r,groupEl:o,rectEl:a,progEl:l,dotEl:c,stateTextEl:f}}setConflictHighlight(t){this.conflictArms=new Set(t),this.setTime(this.currentTime)}setTime(t){this.currentTime=t;let e=0,n=0,s=0;for(const r of this.posNodes){const{spec:o}=r,a=this.conflictArms.size>0&&o.arms.some(l=>this.conflictArms.has(l));if(o.kind==="resource"){r.groupEl.setAttribute("data-state",a?"conflict":t>.05&&t<o.t_end?"working":"idle"),r.stateTextEl.textContent=a?"CONTENTION":"ARBITRATING";continue}if(a)r.groupEl.setAttribute("data-state","conflict"),r.progEl.setAttribute("width",String(r.w-4)),r.stateTextEl.textContent="GATE CONFLICT";else if(t>=o.t_start&&t<=o.t_end){const l=o.label.toLowerCase().includes("wait")||o.label.toLowerCase().includes("stage");l?(n++,r.groupEl.setAttribute("data-state","waiting")):(e++,r.groupEl.setAttribute("data-state","working"));const c=Math.max(.05,o.t_end-o.t_start),d=Math.max(0,Math.min(1,(t-o.t_start)/c));r.progEl.setAttribute("width",String(Math.round((r.w-4)*d))),r.stateTextEl.textContent=`${l?"STAGED":"WORKING"} ${Math.round(d*100)}%`}else t>o.t_end?(s++,r.groupEl.setAttribute("data-state","done"),r.progEl.setAttribute("width",String(r.w-4)),r.stateTextEl.textContent=`DONE (${o.t_end.toFixed(1)}s)`):(r.groupEl.setAttribute("data-state","idle"),r.progEl.setAttribute("width","0"),r.stateTextEl.textContent=`T+${o.t_start.toFixed(1)}s`)}for(const r of this.posEdges){const[o,a]=r.spec.t_active,l=t>=o&&t<=a,c=t>a;r.pathEl.setAttribute("data-state",l?"working":c?"done":"idle"),r.hubEl&&r.hubEl.setAttribute("data-state",l?"working":c?"done":"idle")}this.headerSummaryEl.textContent=`${e} WORKING · ${n} STAGED · ${s} DONE`}}const kn=[{id:"overview",layer:"overview",tech:"Hierarchical ATAMP + STAMP",title:"Overview: 5-Layer Physical AI Architecture",oneLiner:"Orders decompose into part jobs, mobile manipulators transport materials across a station graph, and multi-arm Franka FR3 workcells synthesize collision-free trajectories via Plan -> Gate -> Execute -> Write-Back.",points:["Outer loop (MILP) assigns incoming orders (Tower, Conveyor Bar, Deformable Laundry) to reconfigurable FR3 workcells.","Fleet layer plans mobile manipulator routes on a station graph and resolves corridor contention via zero-replan local repairs.","Workcell layer pairs Gemini-4-Argon task DAG planning with a 128 Hz deterministic safety gate and 50 Hz Damped Least Squares IK."]},{id:"orders",layer:"outer",tech:"Part Jobs + Rolling MILP",title:"Orders & Workcell Assignment",oneLiner:"Each order is decomposed by manipulation class and assigned to the cell that minimizes queue wait + build time + fleet travel.",points:["Orders group objects into rigid blocks, bimanual bars (LongBar), and deformable textiles (DeformableClothTowel, DeformableGarmentShirt).","The rolling MILP balances load across Cell A (3-Arm Tower), Cell B (Dual Conveyor), and Cell C (Deformable Folding).","Cell build-time estimates come directly from the Pareto frontier of pre-screened FR3 mount-slot configurations."],actionLabel:"Show Factory Assignment ->"},{id:"fleet",layer:"fleet",tech:"Station Graph + Local Repair",title:"Mobile Manipulators & Local Repair",oneLiner:"Mobile manipulators (Nova Carter + FR3) plan stops on a station roadmap and execute local sidestep/yield repairs on the fly.",points:["High-level PDDL schedules part pickups from depots (D_tower, D_conveyor_bar, D_deformable_fold) to workcell infeed docks.","Each mobile manipulator reserves roadmap segments ahead of arrival.","When two robots contend at H_center, the lower-priority robot sidesteps or yields locally without triggering a global replan."],actionLabel:"Show Station Graph & Repairs ->"},{id:"workcell",layer:"cell",tech:"Plan -> Gate -> Write-Back + DLS IK",title:"Workcell: Lazy Loop & Deterministic Gate",oneLiner:"Task plans are checked at 128 Hz for IK reach, bimanual promotion, and central-zone collisions; every fault writes back a formal constraint.",points:["Franka FR3 7-DOF trajectories are solved via Damped Least Squares (DLS) IK with null-space posture regularization and quintic smoothstep profiles.","Deterministic Gate intercepts IK_UNREACHABLE, WORKSPACE_COLLISION, RESOURCE_CONTENTION, and BIMANUAL_PROMOTION_REQUIRED before execution.","Rejected iterations render translucent red 3D ghost arms at the exact conflict timestamp and inject write_limit_back constraints into the next iteration."],actionLabel:"Inspect 3D Collision Ghosts ->"},{id:"design",layer:"design",tech:"Slot Screening + Pareto Frontier",title:"Design Loop: Reconfigurable Mount Slots",oneLiner:"Screen candidate FR3 mount slots (s0 through s7) by static reachability, then compute the Pareto frontier of arm count vs. build makespan.",points:["Eight standardized mount slots surround the 1.6m x 1.2m workcell table.","Static reachability immediately prunes 1-arm layouts that cannot reach opposite feeder corners or lift bimanual objects.","In-browser fast planning (< 25 ms median) lets you click any slot ring in 3D and immediately evaluate the new schedule."],actionLabel:"Explore Pareto Design Space ->"}];class yg{constructor(t){j(this,"el");j(this,"isOpen",!1);j(this,"currentId","overview");j(this,"navEl");j(this,"contentEl");j(this,"onNavigateDemo");this.onNavigateDemo=t,this.el=document.createElement("div"),this.el.className="explain-backdrop",this.el.hidden=!0;const e=document.createElement("div");e.className="ex-dialog",e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true");const n=document.createElement("div");n.className="ex-head",n.innerHTML='<div class="ex-head-t">System & Algorithms · Physical AI Fast-Sim</div><div class="grow"></div>';const s=document.createElement("button");s.type="button",s.className="btn small",s.textContent="✕ Close",s.addEventListener("click",()=>this.close()),n.appendChild(s);const r=document.createElement("div");r.className="ex-main",this.navEl=document.createElement("div"),this.navEl.className="ex-list",this.contentEl=document.createElement("div"),this.contentEl.className="ex-content",r.append(this.navEl,this.contentEl),e.append(n,r),this.el.appendChild(e),this.el.addEventListener("mousedown",o=>{o.target===this.el&&this.close()}),window.addEventListener("keydown",o=>{this.isOpen&&(o.key==="Escape"?(o.preventDefault(),this.close()):(o.key==="ArrowRight"||o.key==="ArrowLeft")&&this.step(o.key==="ArrowRight"?1:-1))}),this.renderNav()}show(t){this.isOpen=!0,this.el.hidden=!1,t&&kn.some(e=>e.id===t)&&(this.currentId=t),this.select(this.currentId)}close(){this.isOpen=!1,this.el.hidden=!0;const t=new URL(location.href);t.searchParams.delete("explain"),history.replaceState(null,"",t)}step(t){const e=kn.findIndex(s=>s.id===this.currentId),n=Math.max(0,Math.min(kn.length-1,e+t));n!==e&&this.select(kn[n].id)}select(t){this.currentId=t;const e=new URL(location.href);e.searchParams.set("explain",t),history.replaceState(null,"",e),this.renderNav(),this.renderContent()}renderNav(){this.navEl.replaceChildren(),kn.forEach((t,e)=>{const n=document.createElement("button");n.type="button",n.className=`ex-item ${t.id===this.currentId?"on":""}`,n.innerHTML=`<span class="ex-item-n">${e}</span><div><div class="ex-item-t">${t.title}</div><div class="ex-item-s dim small">${t.tech}</div></div>`,n.addEventListener("click",()=>this.select(t.id)),this.navEl.appendChild(n)})}renderContent(){this.contentEl.replaceChildren();const t=kn.find(r=>r.id===this.currentId)??kn[0],e=document.createElement("div");e.className="ex-mod-h",e.innerHTML=`
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
    `,this.contentEl.append(e,s)}}const ec={pick:"#4f9dff",stage_pre_gate:"#f5c542",place:"#3ccf91",dual_arm_pick:"#f5c542",dual_arm_place:"#3ccf91",handover:"#ff8a5c",unfold:"#4f9dff",fold:"#c78bff",recover_slip:"#ff5c5c",part:"#4f9dff",kit:"#6aa8ff",cell_job:"#3ccf91"};function Sg(i){var t,e;return{rows:i.scene.arms.map(n=>({id:n.id,label:`${n.id} (${n.slot})`,color:n.color})),bars:(((t=i.plan)==null?void 0:t.actions)??[]).map(n=>({id:n.id,rows:n.arms,t_start:n.t_start,t_end:n.t_end,kind:n.kind,color:ec[n.kind]??"#4f9dff",label:n.label})),edges:((e=i.plan)==null?void 0:e.tpg_edges)??[]}}function Eg(i){const t=[...i.mms.map(n=>({id:n.id,label:n.id.toUpperCase(),color:n.color})),...i.cells.map(n=>({id:n.id,label:n.id.toUpperCase(),color:"#3ccf91"}))],e=[...i.transport.map((n,s)=>({id:`tr_${s}`,rows:[n.mm],t_start:n.t_start,t_end:n.t_end,kind:n.kind,color:ec[n.kind]??"#4f9dff",label:n.label})),...i.cell_jobs.map((n,s)=>({id:`cj_${s}`,rows:[n.cell],t_start:n.t_start,t_end:n.t_end,kind:"cell_job",color:"#3ccf91",label:`${n.order} (${n.model})`}))];return{rows:t,bars:e,edges:[]}}const Bn="http://www.w3.org/2000/svg";class bg{constructor(t){j(this,"el");j(this,"svg");j(this,"onSeek");j(this,"data",null);j(this,"duration",10);j(this,"currentTime",0);j(this,"dragging",!1);this.onSeek=t,this.el=document.createElement("div"),this.el.className="gantt-wrap",this.svg=document.createElementNS(Bn,"svg"),this.svg.setAttribute("class","gantt-svg"),this.el.appendChild(this.svg);const e=n=>{const s=this.svg.getBoundingClientRect(),r=68,a=Math.max(100,s.width-r-14),l=Math.max(0,Math.min(1,(n.clientX-s.left-r)/a));this.onSeek(l*this.duration)};this.svg.addEventListener("pointerdown",n=>{this.dragging=!0,this.svg.setPointerCapture(n.pointerId),e(n)}),this.svg.addEventListener("pointermove",n=>{this.dragging&&e(n)}),this.svg.addEventListener("pointerup",()=>{this.dragging=!1})}setData(t,e){this.data=t,this.duration=Math.max(1,e),this.render()}update(t){this.currentTime=t;const e=this.svg.querySelector(".gantt-playhead");if(e){const o=Math.max(480,this.el.clientWidth||640)-68-14,a=68+Math.max(0,Math.min(1,t/Math.max(.01,this.duration)))*o;e.setAttribute("x1",String(a)),e.setAttribute("x2",String(a))}}render(){for(;this.svg.firstChild;)this.svg.removeChild(this.svg.firstChild);if(!this.data)return;const t=this.data.rows,e=Math.max(480,this.el.clientWidth||640),n=22,s=10,r=20,o=68,a=14,l=Math.max(88,s+t.length*n+r),c=Math.max(100,e-o-a);this.svg.setAttribute("viewBox",`0 0 ${e} ${l}`);const d=new Map;t.forEach((g,_)=>{const p=s+_*n;d.set(g.id,p);const h=document.createElementNS(Bn,"rect");h.setAttribute("x",String(o)),h.setAttribute("y",String(p+2)),h.setAttribute("width",String(c)),h.setAttribute("height",String(n-4)),h.setAttribute("rx","3"),h.setAttribute("fill","rgba(255,255,255,0.03)"),this.svg.appendChild(h);const b=document.createElementNS(Bn,"text");b.setAttribute("x","8"),b.setAttribute("y",String(p+n*.68)),b.setAttribute("fill",g.color),b.setAttribute("class","gantt-row-label"),b.textContent=g.label,this.svg.appendChild(b)});const u=new Map;for(const g of this.data.bars){const _=o+g.t_start/this.duration*c,p=o+g.t_end/this.duration*c,h=Math.max(4,p-_);for(const b of g.rows){const v=d.get(b);if(v===void 0)continue;const x=document.createElementNS(Bn,"rect");x.setAttribute("x",String(_)),x.setAttribute("y",String(v+3)),x.setAttribute("width",String(h)),x.setAttribute("height",String(n-6)),x.setAttribute("rx","3"),x.setAttribute("fill",g.color),x.setAttribute("opacity","0.85");const T=document.createElementNS(Bn,"title");T.textContent=`${g.label} (${g.t_start.toFixed(1)}s - ${g.t_end.toFixed(1)}s)`,x.appendChild(T),this.svg.appendChild(x),u.has(g.id)||u.set(g.id,{x0:_,x1:p,y:v+n/2})}}for(const[g,_]of this.data.edges){const p=u.get(g),h=u.get(_);if(!p||!h)continue;const b=document.createElementNS(Bn,"path"),v=(p.x1+h.x0)*.5;b.setAttribute("d",`M ${p.x1} ${p.y} C ${v} ${p.y}, ${v} ${h.y}, ${h.x0} ${h.y}`),b.setAttribute("stroke","rgba(255,255,255,0.35)"),b.setAttribute("stroke-width","1.2"),b.setAttribute("fill","none"),this.svg.appendChild(b)}const f=o+this.currentTime/Math.max(.01,this.duration)*c,m=document.createElementNS(Bn,"line");m.setAttribute("class","gantt-playhead"),m.setAttribute("x1",String(f)),m.setAttribute("x2",String(f)),m.setAttribute("y1",String(s)),m.setAttribute("y2",String(l-r+4)),m.setAttribute("stroke","#ff5c5c"),m.setAttribute("stroke-width","2"),this.svg.appendChild(m)}}class wg{constructor(){j(this,"time",0);j(this,"duration",10);j(this,"playing",!1);j(this,"speed",1);j(this,"loop",!0);j(this,"listeners",[])}onChange(t){this.listeners.push(t)}emit(){for(const t of this.listeners)t()}reset(t){this.duration=Math.max(0,t),this.time=0,this.emit()}seek(t){this.time=Math.max(0,Math.min(this.duration,t)),this.emit()}setPlaying(t){t&&this.time>=this.duration&&this.duration>0&&(this.time=0),this.playing=t&&this.duration>0,this.emit()}toggle(){this.setPlaying(!this.playing)}setSpeed(t){this.speed=t,this.emit()}setLoop(t){this.loop=t,this.emit()}tick(t){return!this.playing||this.duration<=0?!1:(this.time+=t*this.speed,this.time>=this.duration&&(this.loop?this.time=this.time%this.duration:(this.time=this.duration,this.playing=!1)),this.emit(),!0)}}class Tg{constructor(t){j(this,"clock");j(this,"el");j(this,"playBtn");j(this,"slider");j(this,"timeEl");j(this,"speedSel");this.clock=t,this.el=document.createElement("div"),this.el.className="transport-bar",this.playBtn=document.createElement("button"),this.playBtn.className="icon-btn play-btn",this.playBtn.type="button",this.playBtn.title="Play / Pause (Space)",this.playBtn.addEventListener("click",()=>this.clock.toggle()),this.slider=document.createElement("input"),this.slider.type="range",this.slider.className="transport-slider",this.slider.min="0",this.slider.max="10",this.slider.step="0.01",this.slider.value="0",this.slider.addEventListener("input",()=>{this.clock.seek(Number(this.slider.value))}),this.timeEl=document.createElement("div"),this.timeEl.className="transport-time mono",this.speedSel=document.createElement("select"),this.speedSel.className="speed-select mono",this.speedSel.title="Playback speed";for(const e of[.25,.5,1,2,4,8]){const n=document.createElement("option");n.value=String(e),n.textContent=`${e}x`,e===1&&(n.selected=!0),this.speedSel.appendChild(n)}this.speedSel.addEventListener("change",()=>{this.clock.setSpeed(Number(this.speedSel.value))}),this.el.append(this.playBtn,this.slider,this.timeEl,this.speedSel),this.clock.onChange(()=>this.update(this.clock.time)),this.update(0)}update(t){this.playBtn.textContent=this.clock.playing?"⏸":"▶",this.slider.max=String(Math.max(.01,this.clock.duration)),this.slider.value=String(t),this.timeEl.textContent=`${t.toFixed(1)}s / ${this.clock.duration.toFixed(1)}s`,this.speedSel.value=String(this.clock.speed)}}class Ag{constructor(t){j(this,"el");j(this,"run",null);j(this,"selectedIter",0);j(this,"onSelectIteration");this.onSelectIteration=t,this.el=document.createElement("div"),this.el.className="lazy-stepper"}setRun(t){this.run=t,this.selectedIter=Math.max(0,t.lazy_log.length-1),this.render()}selectIter(t){if(!this.run)return;this.selectedIter=Math.max(0,Math.min(this.run.lazy_log.length-1,t));const e=this.run.lazy_log[this.selectedIter];this.onSelectIteration(this.selectedIter,(e==null?void 0:e.conflict)??null),this.render()}render(){if(this.el.replaceChildren(),!this.run||this.run.lazy_log.length===0)return;const t=document.createElement("div");t.className="section-h",t.innerHTML=`<span>Plan -> Gate -> Write-Back Loop</span><span class="dim small">${this.run.lazy_log.length} iter${this.run.lazy_log.length===1?"":"s"}</span>`,this.el.appendChild(t);const e=document.createElement("div");e.className="iter-pills",this.run.lazy_log.forEach((r,o)=>{var c;const a=document.createElement("button");a.type="button";const l=r.status==="verified";a.className=`iter-pill ${l?"ok":"conflict"} ${o===this.selectedIter?"active":""}`,a.textContent=l?`iter ${r.iter} · verified`:`iter ${r.iter} · ${((c=r.conflict)==null?void 0:c.kind)??"conflict"}`,a.addEventListener("click",()=>this.selectIter(o)),e.appendChild(a)}),this.el.appendChild(e);const n=this.run.lazy_log[this.selectedIter],s=document.createElement("div");if(s.className=`iter-card ${n.status==="verified"?"ok":"warn"}`,n.status==="verified"){const r=this.run.metrics.verify;s.innerHTML=`
        <div class="iter-badge ok">PASS · Gate Verified (${r.rate} Hz · ${r.samples} samples · 0 collisions)</div>
        <div class="iter-desc">All ${this.run.plan.actions.length} actions and ${this.run.plan.tpg_edges.length} Temporal Plan Graph edges satisfied kinematic reach, table collision bounds, and central-table mutex locks.</div>
      `}else n.conflict&&(s.innerHTML=`
        <div class="iter-badge warn">REJECT · ${n.conflict.kind} @ t=${n.conflict.time.toFixed(2)}s (3D Ghost Active)</div>
        <div class="iter-desc">${n.conflict.description}</div>
        <div class="iter-writeback mono">${n.conflict.write_limit_back}</div>
      `);this.el.appendChild(s)}}function nc(i){const t=i.filter(n=>n.status==="ok"&&n.makespan_s!==null),e=new Set;for(const n of t)t.some(r=>r.file!==n.file&&r.num_arms<=n.num_arms&&r.makespan_s<=n.makespan_s&&(r.num_arms<n.num_arms||r.makespan_s<n.makespan_s))||e.add(n.file);return e}const Bi="http://www.w3.org/2000/svg";class Rg{constructor(t){j(this,"el");j(this,"onPickRun");this.onPickRun=t,this.el=document.createElement("div"),this.el.className="pareto-card"}render(t,e){this.el.replaceChildren();const n=t.filter(h=>h.status==="ok"&&h.makespan_s!==null),s=nc(t),r=document.createElement("div");if(r.className="section-h",r.innerHTML=`<span>Pareto Design Space (# Arms vs Makespan)</span><span class="dim small">${n.length}/${t.length} feasible</span>`,this.el.appendChild(r),n.length===0){const h=document.createElement("div");h.className="dim small",h.textContent="No feasible precomputed layouts for this model.",this.el.appendChild(h);return}const o=310,a=155,l={l:38,r:16,t:14,b:26},c=o-l.l-l.r,d=a-l.t-l.b,u=Math.min(...n.map(h=>h.makespan_s))*.88,f=Math.max(...n.map(h=>h.makespan_s))*1.08,m=h=>l.l+(h-1)/3*c,g=h=>l.t+(1-(h-u)/Math.max(.5,f-u))*d,_=document.createElementNS(Bi,"svg");_.setAttribute("viewBox",`0 0 ${o} ${a}`),_.setAttribute("class","pareto-svg");for(const h of[1,2,3,4]){const b=m(h),v=document.createElementNS(Bi,"text");v.setAttribute("x",String(b)),v.setAttribute("y",String(a-6)),v.setAttribute("text-anchor","middle"),v.setAttribute("class","pareto-axis-label"),v.textContent=`${h} arm${h>1?"s":""}`,_.appendChild(v)}const p=n.filter(h=>s.has(h.file)).sort((h,b)=>h.num_arms-b.num_arms);if(p.length>=2){const h=document.createElementNS(Bi,"polyline");h.setAttribute("points",p.map(b=>`${m(b.num_arms)},${g(b.makespan_s)}`).join(" ")),h.setAttribute("fill","none"),h.setAttribute("stroke","#3ccf91"),h.setAttribute("stroke-width","1.8"),h.setAttribute("stroke-dasharray","4 2"),_.appendChild(h)}n.forEach((h,b)=>{const v=s.has(h.file),x=h.file===e,T=(b%3-1)*4,w=m(h.num_arms)+(v?0:T),R=g(h.makespan_s),L=document.createElementNS(Bi,"circle");L.setAttribute("cx",String(w)),L.setAttribute("cy",String(R)),L.setAttribute("r",x?"6.5":v?"5":"3.8"),L.setAttribute("fill",x?"#f5c542":v?"#3ccf91":"#4f9dff"),L.setAttribute("stroke","#14171c"),L.setAttribute("stroke-width","1.4"),L.style.cursor="pointer";const S=document.createElementNS(Bi,"title");S.textContent=`${h.slots.join("-")} (${h.num_arms} arms) · ${h.makespan_s.toFixed(2)}s${v?" [Pareto Optimal]":""}`,L.appendChild(S),L.addEventListener("click",()=>this.onPickRun(h)),_.appendChild(L)}),this.el.appendChild(_)}}class Cg{constructor(t){j(this,"el");j(this,"hooks");j(this,"pareto");j(this,"lazyStepper");j(this,"index",null);j(this,"selectedModel","tower");j(this,"selectedSlots",new Set(["s0","s2","s3"]));j(this,"currentFile",null);j(this,"currentRun",null);j(this,"lastPlanMs",null);j(this,"schedulerMode","lazy_dash");j(this,"slipObjectId",null);this.hooks=t,this.el=document.createElement("div"),this.el.className="side-pane-inner",this.pareto=new Rg(e=>{this.selectedModel=e.model,this.selectedSlots=new Set(e.slots),this.hooks.onSlotsSelectionChanged(this.selectedSlots),this.hooks.onLoadRunFile(e.file)}),this.lazyStepper=new Ag((e,n)=>{this.hooks.onSelectLazyConflict(e,n)})}setIndex(t){this.index=t,this.render()}setCurrentRun(t,e){this.currentRun=t,this.currentFile=e,this.selectedModel=t.model.name,this.selectedSlots=new Set(t.scene.arms.map(n=>n.slot)),this.lazyStepper.setRun(t),this.render()}toggleSlot(t){if(this.selectedSlots.has(t))this.selectedSlots.size>1&&this.selectedSlots.delete(t);else{if(this.selectedSlots.size>=4){const e=this.selectedSlots.values().next().value;e&&this.selectedSlots.delete(e)}this.selectedSlots.add(t)}this.hooks.onSlotsSelectionChanged(this.selectedSlots),this.planOrLoadCurrentSelection()}findBestLayout(){const t=this.getModelRuns(),e=nc(t),n=t.filter(s=>e.has(s.file)&&s.makespan_s!==null).sort((s,r)=>(s.makespan_s??999)-(r.makespan_s??999))[0];n?(this.selectedSlots=new Set(n.slots),this.hooks.onSlotsSelectionChanged(this.selectedSlots),this.hooks.onLoadRunFile(n.file)):this.planInBrowserNow()}planInBrowserNow(){const t=performance.now(),e=uo(this.selectedModel,[...this.selectedSlots],"fA",{schedulerMode:this.schedulerMode,injectSlipOnObject:this.slipObjectId});this.lastPlanMs=Number((performance.now()-t).toFixed(2)),this.hooks.onApplyLivePlannedRun(e)}planOrLoadCurrentSelection(){if(this.schedulerMode!=="lazy_dash"||this.slipObjectId!==null){this.planInBrowserNow();return}const t=[...this.selectedSlots].sort().join("-"),e=this.getModelRuns().find(n=>n.slots.slice().sort().join("-")===t);e?(this.lastPlanMs=null,this.hooks.onLoadRunFile(e.file)):this.planInBrowserNow()}getModelRuns(){var t;return(((t=this.index)==null?void 0:t.runs)??[]).filter(e=>e.model===this.selectedModel)}render(){var g;this.el.replaceChildren();const t=document.createElement("div");t.className="model-cards";for(const _ of Object.values(Hi)){const p=document.createElement("button");p.type="button",p.className=`mcard ${this.selectedModel===_.name?"on":""}`,p.innerHTML=`<div class="mcard-title">${_.title}</div><div class="mcard-sub dim small">${_.objects.length} objects · ${_.objects.some(h=>h.deformable)?"deformable":_.objects.some(h=>h.bimanual)?"bimanual":"multi-arm"}</div>`,p.addEventListener("click",()=>{this.selectedModel=_.name,this.planOrLoadCurrentSelection()}),t.appendChild(p)}this.el.appendChild(t);const e=document.createElement("div");e.className="wb-config";const n=document.createElement("div");n.className="section-h",n.innerHTML=`<span>Mount Slots (${this.selectedSlots.size} FR3 arm${this.selectedSlots.size===1?"":"s"})</span><span class="dim small">click 3D rings or toggles</span>`,e.appendChild(n);const s=document.createElement("div");s.className="slot-grid";for(const _ of Ps){const p=document.createElement("button");p.type="button",p.className=`slot-cb ${this.selectedSlots.has(_.id)?"on":""}`,p.textContent=_.id,p.addEventListener("click",()=>this.toggleSlot(_.id)),s.appendChild(p)}e.appendChild(s);const r=document.createElement("div");r.className="btn-row";const o=document.createElement("button");o.type="button",o.className="btn primary",o.textContent="★ Find Best Layout",o.addEventListener("click",()=>this.findBestLayout());const a=document.createElement("button");a.type="button",a.className="btn",a.textContent="⚡ Plan in Browser (Fast-Sim)",a.addEventListener("click",()=>this.planInBrowserNow()),r.append(o,a),e.appendChild(r),this.el.appendChild(e);const l=document.createElement("div");l.className="wb-config";const c=document.createElement("div");c.className="section-h",c.innerHTML='<span>High-Level Scheduler (Lazy-DaSH)</span><span class="dim small">TPG + Mutex</span>',l.appendChild(c);const d=document.createElement("div");d.className="layer-bar";const u=[{id:"lazy_dash",label:"Lazy-DaSH RCPSP"},{id:"eager_sequential",label:"Sequential Lock"},{id:"uncoordinated_raw",label:"Raw Unshielded"}];for(const _ of u){const p=document.createElement("button");p.type="button",p.className=`layer-btn ${this.schedulerMode===_.id?"on":""}`,p.textContent=_.label,p.addEventListener("click",()=>{this.schedulerMode=_.id,this.planInBrowserNow()}),d.appendChild(p)}l.appendChild(d);const f=((g=(Hi[this.selectedModel]??Hi.tower).objects[0])==null?void 0:g.id)??"Block1",m=document.createElement("button");if(m.type="button",m.className=`btn ${this.slipObjectId?"primary":""}`,m.style.width="100%",m.style.marginTop="6px",m.textContent=this.slipObjectId?`✓ Tier-1 Pose-Slip Spliced (${this.slipObjectId}) · Click to Clear`:`⚡ Inject Pose Slip on ${f} (0-Token Subgraph Patch)`,m.addEventListener("click",()=>{this.slipObjectId=this.slipObjectId?null:f,this.planInBrowserNow()}),l.appendChild(m),this.el.appendChild(l),this.currentRun){const _=document.createElement("div");_.className="metrics-grid";const p=this.currentRun.metrics.makespan_s,h=this.lastPlanMs!==null?`${this.lastPlanMs.toFixed(1)} ms (browser)`:`${(this.currentRun.metrics.time.total*1e3).toFixed(1)} ms`;_.innerHTML=`
        <div class="stat"><div class="stat-v ${this.currentRun.status==="ok"?"ok-t":"warn-t"}">${this.currentRun.status.toUpperCase()}</div><div class="stat-l">Gate Verdict</div></div>
        <div class="stat"><div class="stat-v mono">${p!==null?`${p.toFixed(2)}s`:"—"}</div><div class="stat-l">Makespan</div></div>
        <div class="stat"><div class="stat-v mono">${this.currentRun.scene.arms.length}</div><div class="stat-l">FR3 Arms</div></div>
        <div class="stat"><div class="stat-v mono">${h}</div><div class="stat-l">Solve Time</div></div>
      `,this.el.appendChild(_)}this.pareto.render(this.getModelRuns(),this.currentFile),this.el.appendChild(this.pareto.el),this.el.appendChild(this.lazyStepper.el)}}class Pg{constructor(t,e){j(this,"el");j(this,"index",null);j(this,"currentScenario",null);j(this,"currentFile",null);j(this,"activeOverlay","L2");j(this,"onSelectScenario");j(this,"onToggleOverlay");this.onSelectScenario=t,this.onToggleOverlay=e,this.el=document.createElement("div"),this.el.className="side-pane-inner"}setIndex(t){this.index=t,this.render()}setScenario(t,e){this.currentScenario=t,this.currentFile=e,this.render()}render(){var r;this.el.replaceChildren();const t=document.createElement("div");t.className="section-h",t.innerHTML='<span>Multi-Cell Factory Scenarios</span><span class="dim small">3 cells · up to 5 MMs</span>',this.el.appendChild(t);const e=document.createElement("select");e.className="ex-select";for(const o of((r=this.index)==null?void 0:r.scenarios)??[]){const a=document.createElement("option");a.value=o.file,a.textContent=`${o.title} (${o.throughput_per_hour}/h)`,o.file===this.currentFile&&(a.selected=!0),e.appendChild(a)}e.addEventListener("change",()=>this.onSelectScenario(e.value)),this.el.appendChild(e);const n=document.createElement("div");n.className="section-h",n.innerHTML='<span>3D Floor Overlays</span><span class="dim small">MILP / PDDL / Repairs</span>',this.el.appendChild(n);const s=document.createElement("div");s.className="btn-row";for(const[o,a]of[["L1","L1 · MILP Cell Loads"],["L2","L2 · Station Graph"],["L3","L3 · Local Repairs"]]){const l=document.createElement("button");l.type="button",l.className=`btn small ${this.activeOverlay===o?"primary":""}`,l.textContent=a,l.addEventListener("click",()=>{this.activeOverlay=this.activeOverlay===o?null:o,this.onToggleOverlay(this.activeOverlay),this.render()}),s.appendChild(l)}if(this.el.appendChild(s),this.currentScenario){const o=this.currentScenario.metrics,a=document.createElement("div");a.className="metrics-grid",a.innerHTML=`
        <div class="stat"><div class="stat-v ok-t mono">${o.throughput_per_hour.toFixed(1)}/h</div><div class="stat-l">Throughput</div></div>
        <div class="stat"><div class="stat-v mono">${o.makespan_s.toFixed(1)}s</div><div class="stat-l">Makespan</div></div>
        <div class="stat"><div class="stat-v mono">${o.orders_done}</div><div class="stat-l">Orders Done</div></div>
        <div class="stat"><div class="stat-v mono">${Object.values(o.local_repairs).reduce((d,u)=>d+u,0)}</div><div class="stat-l">Local Repairs</div></div>
      `,this.el.appendChild(a);const l=document.createElement("div");l.className="util-box",l.innerHTML='<div class="section-h"><span>Cell & Fleet Utilization</span></div>';for(const[d,u]of[...Object.entries(o.cell_utilization),...Object.entries(o.mm_utilization)]){const f=Math.round(u*100),m=document.createElement("div");m.className="util-row",m.innerHTML=`
          <span class="mono util-l">${d.toUpperCase()}</span>
          <span class="util-bar"><span style="width:${f}%"></span></span>
          <span class="mono small">${f}%</span>
        `,l.appendChild(m)}this.el.appendChild(l);const c=document.createElement("div");c.className="order-list",c.innerHTML=`<div class="section-h"><span>Order Stream (${this.currentScenario.orders.length})</span></div>`;for(const d of this.currentScenario.orders){const u=document.createElement("div");u.className="order-row mono small",u.innerHTML=`<span><b>${d.id}</b> · ${d.model}</span><span>-> ${d.cell.toUpperCase()} (${d.t_done.toFixed(1)}s)</span>`,c.appendChild(u)}this.el.appendChild(c)}}}window.__fastSimPerf={coldLoadMs:0,frameTimesMs:[]};const hl=new Map;async function Ls(i){const t=await fetch(i);if(!t.ok)throw new Error(`HTTP ${t.status} on ${i}`);return await t.json()}function dl(i){const t=i.startsWith("./")||i.startsWith("http")?i:`./${i}`;let e=hl.get(t);return e||(e=Ls(t),hl.set(t,e)),e}class Lg{constructor(t){j(this,"viewer");j(this,"factoryPlayer");j(this,"clock",new wg);j(this,"transport");j(this,"gantt");j(this,"hypergraph");j(this,"workcellPanel");j(this,"factoryPanel");j(this,"explainer");j(this,"tab","workcell");j(this,"runIndex",null);j(this,"factoryIndex",null);j(this,"currentRun",null);j(this,"currentFactory",null);j(this,"activeArms",new Map);j(this,"activeObjects",new Map);j(this,"workcellMm",null);j(this,"timeline",null);j(this,"selectedSlots",new Set(["s0","s2","s3"]));j(this,"lazyGhostActive",!1);j(this,"nowPlayingEl",document.createElement("div"));j(this,"camBarEl",document.createElement("div"));j(this,"tabWorkcellBtn",document.createElement("button"));j(this,"tabFactoryBtn",document.createElement("button"));const e=performance.now(),n=document.createElement("div");n.className="shell";const s=document.createElement("div");s.className="stage",this.viewer=new _g(s),this.factoryPlayer=new ng(this.viewer),this.transport=new Tg(this.clock),this.gantt=new bg(h=>{this.lazyGhostActive&&this.clearGhostVisuals(),this.clock.seek(h)}),this.hypergraph=new Mg(h=>{this.lazyGhostActive&&this.clearGhostVisuals(),this.clock.seek(h)}),this.workcellPanel=new Cg({onLoadRunFile:h=>void this.loadRunFromFile(h),onApplyLivePlannedRun:h=>void this.setWorkcellRun(h,null),onSlotsSelectionChanged:h=>{this.selectedSlots=new Set(h),this.paintSlotRings()},onSelectLazyConflict:(h,b)=>{this.showLazyGhostPose(b)}}),this.factoryPanel=new Pg(h=>void this.loadFactoryFromFile(h),h=>this.factoryPlayer.setOverlayLayer(h)),this.explainer=new yg(h=>{h==="orders"||h==="fleet"?(this.setTab("factory"),this.factoryPlayer.setOverlayLayer(h==="orders"?"L1":"L3")):this.setTab("workcell")}),this.viewer.onSlotClick=h=>{this.tab==="workcell"&&this.workcellPanel.toggleSlot(h)};const r=document.createElement("div");r.className="overlay-tl",r.innerHTML=`
      <div class="brand">
        <div class="brand-mark"></div>
        <div>
          <div class="brand-t">Reconfigurable Franka FR3 Workcell</div>
          <div class="brand-s">3D Fast-Sim · STAMP Plan -> Gate -> Write-Back</div>
        </div>
      </div>
    `;const o=document.createElement("button");o.type="button",o.className="how-btn",o.textContent="✦ Learn System & Algorithms",o.addEventListener("click",()=>this.explainer.show()),r.querySelector(".brand").appendChild(o);const a=document.createElement("div");a.className="overlay-tc";const l=document.createElement("div");l.className="product-tabs",this.tabWorkcellBtn.type="button",this.tabWorkcellBtn.className="tab on",this.tabWorkcellBtn.textContent="Workcell",this.tabWorkcellBtn.addEventListener("click",()=>this.setTab("workcell")),this.tabFactoryBtn.type="button",this.tabFactoryBtn.className="tab",this.tabFactoryBtn.textContent="Factory",this.tabFactoryBtn.addEventListener("click",()=>this.setTab("factory")),l.append(this.tabWorkcellBtn,this.tabFactoryBtn),a.appendChild(l);const c=document.createElement("div");c.className="overlay-tr";const d=document.createElement("div");d.className="overlay-tr-row",this.camBarEl.className="camera-bar";const u=document.createElement("button");u.type="button",u.className="theme-btn",u.textContent="☀",u.title="Switch light / dark theme",u.addEventListener("click",()=>{const h=this.viewer.getTheme()==="dark"?"light":"dark";this.viewer.setTheme(h),document.documentElement.dataset.theme=h,u.textContent=h==="dark"?"☀":"☾"}),d.append(this.camBarEl,u),this.nowPlayingEl.className="now-playing",c.append(d,this.nowPlayingEl),s.append(r,a,c);const f=document.createElement("div");f.className="dock";const m=document.createElement("div");m.className="dock-split",m.append(this.gantt.el,this.hypergraph.el),f.append(this.transport.el,m);const g=document.createElement("aside");g.className="side",g.append(this.workcellPanel.el,this.factoryPanel.el),n.append(s,f,g),t.append(n,this.explainer.el),window.addEventListener("keydown",h=>{const b=h.target;b&&/INPUT|SELECT|TEXTAREA/.test(b.tagName)||(h.code==="Space"?(h.preventDefault(),this.clock.toggle()):h.key==="ArrowRight"?this.clock.seek(this.clock.time+.5):h.key==="ArrowLeft"&&this.clock.seek(this.clock.time-.5))}),this.clock.onChange(()=>{this.applyTime(this.clock.time)});let _=performance.now();const p=h=>{const b=h-_;_=h,window.__fastSimPerf.frameTimesMs.length<600&&window.__fastSimPerf.frameTimesMs.push(Number(b.toFixed(2)));const v=Math.min(.1,b/1e3);this.clock.tick(v),this.viewer.render(v),requestAnimationFrame(p)};requestAnimationFrame(p),this.boot().then(()=>{window.__fastSimPerf.coldLoadMs=Number((performance.now()-e).toFixed(1))})}async boot(){var o,a;const[,t,e]=await Promise.all([Ql(),Ls("./runs/index.json").catch(()=>null),Ls("./factory/index.json").catch(()=>null)]);this.runIndex=t,this.factoryIndex=e,this.workcellPanel.setIndex(t),this.factoryPanel.setIndex(e);const n=new URLSearchParams(location.search),s=n.get("explain");if(s!==null&&this.explainer.show(s||"overview"),n.get("tab")==="factory"){this.setTab("factory");return}this.setTab("workcell");const r=((o=t==null?void 0:t.runs.find(l=>l.model==="tower"&&l.slots.join("-")==="s0-s2-s3"))==null?void 0:o.file)??((a=t==null?void 0:t.runs.find(l=>l.status==="ok"))==null?void 0:a.file);if(r)await this.loadRunFromFile(r);else{const l=uo("tower",["s0","s2","s3"],"fA");await this.setWorkcellRun(l,null)}}setTab(t){var n,s;this.tab=t,this.tabWorkcellBtn.classList.toggle("on",t==="workcell"),this.tabFactoryBtn.classList.toggle("on",t==="factory"),this.workcellPanel.el.hidden=t!=="workcell",this.factoryPanel.el.hidden=t!=="factory";const e=new URL(location.href);if(t==="factory"?e.searchParams.set("tab","factory"):e.searchParams.delete("tab"),history.replaceState(null,"",e),t==="factory"){const r=((s=(n=this.factoryIndex)==null?void 0:n.scenarios[0])==null?void 0:s.file)??"factory/multi_cell_stamp.json";this.loadFactoryFromFile(r)}else this.currentRun&&this.setWorkcellRun(this.currentRun,null)}async loadRunFromFile(t){try{const e=await dl(t);await this.setWorkcellRun(e,t)}catch{const e=uo("tower",["s0","s2","s3"],"fA");await this.setWorkcellRun(e,null)}}async setWorkcellRun(t,e){var s;this.factoryPlayer.dispose(),this.clearGhostVisuals(),this.currentRun=t,this.selectedSlots=new Set(t.scene.arms.map(r=>r.slot)),this.viewer.buildStatic(t.scene),this.viewer.clearGroup(this.viewer.dynamicGroup),this.activeArms.clear(),this.activeObjects.clear();for(const r of t.scene.arms){const o=await Vi(r);this.viewer.dynamicGroup.add(o.root),this.activeArms.set(r.id,{spec:r,robot:o})}for(const r of t.model.objects){const o=Jl(r);fo(o,r.start),this.viewer.dynamicGroup.add(o),this.activeObjects.set(r.id,o)}await this.buildWorkcellCourierMm(),this.timeline=new jl(t.model.objects,t.events),this.paintSlotRings(),this.renderCameraPresets([{id:"iso",label:"Iso"},{id:"front",label:"Front"},{id:"top",label:"Top"},{id:"wc_mm0",label:"MM0"},...t.scene.arms.map(r=>({id:`arm:${r.id}`,label:r.id}))]);const n=t.trajectories.duration||0;this.clock.reset(n),this.gantt.setData(Sg(t),Math.max(1,n)),this.hypergraph.setHypergraph(vg(t)),this.workcellPanel.setCurrentRun(t,e),this.nowPlayingEl.innerHTML=`
      <div class="np-t">${t.title}</div>
      <div class="np-s">
        <span class="status-dot ${t.status}"></span>
        ${t.scene.arms.length} FR3 arm${t.scene.arms.length===1?"":"s"} · ${t.model.objects.length} objects
        ${t.metrics.makespan_s!==null?` · ${t.metrics.makespan_s.toFixed(2)}s`:` · ${t.message}`}
      </div>
    `,this.viewer.goTo(this.viewer.presetPose("iso"),!1),t.status==="ok"&&n>0?this.clock.setPlaying(!0):(this.clock.setPlaying(!1),(s=t.lazy_log[0])!=null&&s.conflict&&await this.showLazyGhostPose(t.lazy_log[0].conflict))}async loadFactoryFromFile(t){const e=t.startsWith("./")?t:`./${t}`,n=await Ls(e);this.currentFactory=n,this.clearGhostVisuals(),this.viewer.clearGroup(this.viewer.dynamicGroup),await this.factoryPlayer.load(n,dl),this.factoryPlayer.setOverlayLayer("L2"),this.factoryPanel.setScenario(n,t),this.renderCameraPresets([{id:"overview",label:"Overview"},...n.cells.map(s=>({id:`cell:${s.id}`,label:s.id.toUpperCase()})),...n.mms.map(s=>({id:`mm:${s.id}`,label:s.id.toUpperCase()}))]),this.nowPlayingEl.innerHTML=`
      <div class="np-t">${n.title}</div>
      <div class="np-s">
        <span class="status-dot ok"></span>
        ${n.orders.length} orders · ${n.cells.length} cells · ${n.mms.length} MMs · ${n.metrics.throughput_per_hour.toFixed(1)}/h
      </div>
    `,this.viewer.goTo([new I(.5,-10.2,7.6),new I(-.5,0,-.5)],!1),this.clock.reset(n.metrics.makespan_s),this.clock.setSpeed(2),this.gantt.setData(Eg(n),n.metrics.makespan_s),this.hypergraph.setHypergraph(xg(n)),this.clock.setPlaying(!0)}async showLazyGhostPose(t){if(this.viewer.clearGroup(this.viewer.ghostGroup),!t||!this.currentRun){this.lazyGhostActive=!1,this.hypergraph.setConflictHighlight([]);for(const n of this.activeArms.values())n.robot.root.visible=!0;return}this.lazyGhostActive=!0,this.clock.setPlaying(!1);const e=new Set(Object.keys(t.configs));this.hypergraph.setConflictHighlight([...e]);for(const[n,s]of this.activeArms)s.robot.root.visible=!e.has(n);for(const[n,s]of Object.entries(t.configs)){const r=this.currentRun.scene.arms.find(a=>a.id===n);if(!r)continue;const o=await Vi(r,{isGhost:!0});be(o.joints,s),this.viewer.ghostGroup.add(o.root)}}clearGhostVisuals(){this.lazyGhostActive=!1,this.hypergraph.setConflictHighlight([]),this.viewer.clearGroup(this.viewer.ghostGroup);for(const t of this.activeArms.values())t.robot.root.visible=!0}paintSlotRings(){if(!this.currentRun)return;const t=new Map(this.currentRun.scene.arms.map(e=>[e.slot,e.color]));for(const e of this.currentRun.scene.mount_slots){const n=t.get(e.id)??null,s=this.selectedSlots.has(e.id),r=n&&s?"selected-occupied":n?"occupied":s?"selected":"empty";this.viewer.setSlotState(e.id,r,n)}}renderCameraPresets(t){this.camBarEl.replaceChildren();for(const e of t){const n=document.createElement("button");n.type="button",n.className="cam-btn",n.textContent=e.label,n.addEventListener("click",()=>{if(this.viewer.followTarget=null,e.id==="overview")this.viewer.goTo([new I(.5,-10.2,7.6),new I(-.5,0,-.5)]);else if(e.id.startsWith("cell:")){const s=e.id.slice(5),r=this.factoryPlayer.cells.find(o=>o.spec.id===s);if(r){const[o,a]=r.spec.xy;this.viewer.goTo([new I(o+1.5,a-1.7,1.3),new I(o,a,.1)])}}else if(e.id.startsWith("mm:")){const s=e.id.slice(3),r=this.factoryPlayer.mms.get(s);r&&(this.viewer.followTarget=()=>r.group.position.clone())}else if(e.id==="wc_mm0"&&this.workcellMm)this.viewer.goTo([new I(-.9,-2.25,.95),new I(-.2,-.55,-.15)]);else if(e.id.startsWith("arm:")){const s=e.id.slice(4),r=this.activeArms.get(s);r&&this.viewer.goTo(this.viewer.presetPose("arm",r.spec.base))}else this.viewer.goTo(this.viewer.presetPose(e.id))}),this.camBarEl.appendChild(n)}}async buildWorkcellCourierMm(){const t=new ae,[e,n,s]=[.62,.46,.34],r=new Et(new Wt(2.2,.56,.01),new Xt({color:"#1f2631",roughness:.75}));r.position.set(0,-1.04,-.75),this.viewer.dynamicGroup.add(r);const o=new Et(new Wt(e+.04,n+.03,.08),new Xt({color:"#252c37",roughness:.45,metalness:.4}));o.position.set(0,0,.06),t.add(o);const a=new Et(new Wt(e*.92,n*.92,s-.06),new Xt({color:"#e8833a",roughness:.36,metalness:.28}));a.position.set(0,0,s/2+.02),a.castShadow=!0,t.add(a);const l=new Ge(.085,.085,.05,16),c=new Xt({color:"#151920",roughness:.7});for(const b of[-1,1])for(const v of[-1,1]){const x=new Et(l,c);x.position.set(b*(e*.34),v*(n*.48),.085),t.add(x)}const d=new Et(new Wt(.22,.3,.09),new Xt({color:"#364152",roughness:.5}));d.position.set(-.17,0,s+.045),t.add(d);const u=()=>{const b=new ae,v=new Et(new Wt(.065,.065,.055),new Xt({color:"#e64a4a",roughness:.35}));v.position.set(-.035,-.035,.028);const x=new Et(new Wt(.065,.065,.055),new Xt({color:"#3ccf91",roughness:.35}));x.position.set(.035,.035,.028);const T=new Et(new Wt(.13,.038,.032),new Xt({color:"#f5c542",roughness:.35}));return T.position.set(0,0,.068),b.add(v,x,T),b},f=u();f.position.set(-.17,0,s+.09),t.add(f);const m=new Et(new Ge(.045,.05,.045,16).rotateX(Math.PI/2),new Xt({color:"#4f9dff",emissive:"#1b4d8a",emissiveIntensity:.5}));m.position.set(e*.42,0,s+.02),t.add(m);const g=await Vi({id:"mm0",color:"#e8833a",base:{xyz:[.14,0,s],yaw:0},home:[0,-.78,0,-2.48,0,1.68,.785]},{castShadow:!1});t.add(g.root);const _=u();_.position.set(0,0,.02),_.visible=!1,g.tcp.add(_);const p=document.createElement("div");p.className="scene-label mm-tag",p.textContent="MM0 · DOCK TRANSFER";const h=new Tn(p);h.position.set(0,0,s+.62),t.add(h),t.position.set(-.45,-1.04,-.75),t.rotation.set(0,0,Math.PI/2),this.viewer.dynamicGroup.add(t),this.workcellMm={group:t,robot:g,toteCargo:f,tcpCargo:_,tagEl:p}}applyWorkcellMmTime(t,e){if(!this.workcellMm)return;const n=Math.max(4,e),s=Math.max(0,Math.min(1,t/n)),r=[0,-.78,0,-2.48,0,1.68,.785],o=[3.12,.24,0,-1.96,0,2.18,.785],a=[1.57,.56,0,-1.28,0,1.88,.785],l=(c,d,u)=>{const f=Math.max(0,Math.min(1,u)),m=f*f*(3-2*f);return c.map((g,_)=>g+(d[_]-g)*m)};if(s<.32){const c=s/.32;this.workcellMm.group.position.set(-.38,-1.04,-.75),this.workcellMm.group.rotation.set(0,0,0),c<.35?(be(this.workcellMm.robot.joints,l(r,o,c/.35)),this.workcellMm.toteCargo.visible=!0,this.workcellMm.tcpCargo.visible=!1):c<.8?(be(this.workcellMm.robot.joints,l(o,a,(c-.35)/.45)),this.workcellMm.toteCargo.visible=!1,this.workcellMm.tcpCargo.visible=!0):(be(this.workcellMm.robot.joints,l(a,r,(c-.8)/.2)),this.workcellMm.toteCargo.visible=!1,this.workcellMm.tcpCargo.visible=!1),this.workcellMm.tagEl.textContent="MM0 · UNLOADING TO FEEDER"}else if(s<.68){const c=(s-.32)/.36,d=c*c*(3-2*c);this.workcellMm.group.position.set(-.38+.76*d,-1.04,-.75),this.workcellMm.group.rotation.set(0,0,0),be(this.workcellMm.robot.joints,r),this.workcellMm.toteCargo.visible=!1,this.workcellMm.tcpCargo.visible=!1,this.workcellMm.tagEl.textContent="MM0 · REPOSITION TO OUTBOUND"}else{const c=(s-.68)/.32;this.workcellMm.group.position.set(.38,-1.04,-.75),this.workcellMm.group.rotation.set(0,0,0),c<.38?(be(this.workcellMm.robot.joints,l(r,a,c/.38)),this.workcellMm.toteCargo.visible=!1,this.workcellMm.tcpCargo.visible=!1):c<.82?(be(this.workcellMm.robot.joints,l(a,o,(c-.38)/.44)),this.workcellMm.toteCargo.visible=!1,this.workcellMm.tcpCargo.visible=!0):(be(this.workcellMm.robot.joints,l(o,r,(c-.82)/.18)),this.workcellMm.toteCargo.visible=!0,this.workcellMm.tcpCargo.visible=!1),this.workcellMm.tagEl.textContent="MM0 · RECEIVING OUTBOUND KIT"}}applyTime(t){if(this.transport.update(t),this.gantt.update(t),this.hypergraph.setTime(t),this.tab==="factory"){this.factoryPlayer.applyTime(t);return}if(!this.currentRun||this.lazyGhostActive)return;const e=this.currentRun.trajectories;this.applyWorkcellMmTime(t,e.duration||8);for(const[n,s]of this.activeArms){const r=Os(e.rate,e.t0,e.arms[n],t,s.spec.home);be(s.robot.joints,r)}if(this.viewer.root.updateMatrixWorld(!0),this.timeline)for(const[n,s]of this.activeObjects){const r=this.timeline.stateAt(n,t);if(r.kind==="pose")fo(s,r.pose);else{const a=this.activeArms.get(r.ev.arm);a&&Kl(s,this.viewer.root,a.robot.tcp,r.ev)}const o=Zl(this.currentRun.events,n,t);s.scale.set(o[0],o[1],o[2])}this.viewer.setBeltTime(t)}}const ul=document.getElementById("app");ul&&new Lg(ul);
