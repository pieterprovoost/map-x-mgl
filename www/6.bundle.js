webpackJsonp([6],{106:function(t,n,e){"use strict";function r(t,n,e){return"string"==typeof n?(/\.dbf$/.test(n)||(n+=".dbf"),n=Object(o.a)(n,e)):n instanceof ArrayBuffer||n instanceof Uint8Array?n=Object(c.a)(n):null!=n&&(n=Object(s.a)(n)),"string"==typeof t?(/\.shp$/.test(t)||(t+=".shp"),void 0===n&&(n=Object(o.a)(t.substring(0,t.length-4)+".dbf",e).catch(function(){})),t=Object(o.a)(t,e)):t=t instanceof ArrayBuffer||t instanceof Uint8Array?Object(c.a)(t):Object(s.a)(t),Promise.all([t,n]).then(function(t){var n=t[0],r=t[1],i="windows-1252";return e&&null!=e.encoding&&(i=e.encoding),Object(l.a)(n,r,r&&new TextDecoder(i))})}function i(t,n){return"string"==typeof t?(/\.shp$/.test(t)||(t+=".shp"),t=Object(o.a)(t,n)):t=t instanceof ArrayBuffer||t instanceof Uint8Array?Object(c.a)(t):Object(s.a)(t),Promise.resolve(t).then(h.a)}function a(t,n){var e="windows-1252";return n&&null!=n.encoding&&(e=n.encoding),e=new TextDecoder(e),"string"==typeof t?(/\.dbf$/.test(t)||(t+=".dbf"),t=Object(o.a)(t,n)):t=t instanceof ArrayBuffer||t instanceof Uint8Array?Object(c.a)(t):Object(s.a)(t),Promise.resolve(t).then(function(t){return Object(f.a)(t,e)})}function u(t,n,e){return r(t,n,e).then(function(t){var n=[],e={type:"FeatureCollection",features:n,bbox:t.bbox};return t.read().then(function r(i){return i.done?e:(n.push(i.value),t.read().then(r))})})}Object.defineProperty(n,"__esModule",{value:!0}),n.open=r,n.openShp=i,n.openDbf=a,n.read=u;var o=e(531),c=e(198),s=e(536),f=e(289),l=e(547),h=e(291)},198:function(t,n,e){"use strict";function r(t){return new i(t instanceof Uint8Array?t:new Uint8Array(t))}function i(t){this._array=t}n.a=r;var a=e(533),u=e(534);i.prototype.read=u.a,i.prototype.cancel=a.a},199:function(t,n,e){"use strict";n.a=new Uint8Array(0)},200:function(t,n,e){"use strict";n.a=function(t){return new DataView(t.buffer,t.byteOffset,t.byteLength)}},289:function(t,n,e){"use strict";function r(t,n,e,r){this._source=t,this._decode=n.decode.bind(n),this._recordLength=e.getUint16(10,!0),this._fields=[];for(var i=0;13!==r.getUint8(i);i+=32){for(var a=0;a<11&&0!==r.getUint8(i+a);++a);this._fields.push({name:this._decode(new Uint8Array(r.buffer,r.byteOffset+i,a)),type:String.fromCharCode(r.getUint8(i+11)),length:r.getUint8(i+16)})}}var i=e(290),a=e(541),u=e(542),o=e(200);n.a=function(t,n){return t=Object(i.a)(t),t.slice(32).then(function(e){var i=Object(o.a)(e);return t.slice(i.getUint16(8,!0)-32).then(function(e){return new r(t,n,i,Object(o.a)(e))})})};var c=r.prototype;c.read=u.a,c.cancel=a.a},290:function(t,n,e){"use strict";function r(t){return"function"==typeof t.slice?t:new i("function"==typeof t.read?t:t.getReader())}function i(t){this._source=t,this._array=a.a,this._index=0}n.a=r;var a=e(199),u=e(537),o=e(538),c=e(540);i.prototype.read=o.a,i.prototype.slice=c.a,i.prototype.cancel=u.a},291:function(t,n,e){"use strict";function r(t,n){var e=n.getInt32(32,!0);if(!(e in d))throw new Error("unsupported shape type: "+e);this._source=t,this._type=e,this._index=0,this._parse=d[e],this.bbox=[n.getFloat64(36,!0),n.getFloat64(44,!0),n.getFloat64(52,!0),n.getFloat64(60,!0)]}var i=e(290),a=e(200),u=e(548),o=e(549),c=e(550),s=e(551),f=e(552),l=e(553),h=e(554),d={0:c.a,1:s.a,3:l.a,5:f.a,8:o.a,11:s.a,13:l.a,15:f.a,18:o.a,21:s.a,23:l.a,25:f.a,28:o.a};n.a=function(t){return t=Object(i.a)(t),t.slice(100).then(function(n){return new r(t,Object(a.a)(n))})};var y=r.prototype;y.read=h.a,y.cancel=u.a},531:function(t,n,e){"use strict";function r(t){return("function"==typeof fetch?i.a:a.a)(t)}n.a=r;var i=e(532),a=e(535)},532:function(t,n,e){"use strict";var r=e(198);n.a=function(t){return fetch(t).then(function(t){return t.body&&t.body.getReader?t.body.getReader():t.arrayBuffer().then(r.a)})}},533:function(t,n,e){"use strict";n.a=function(){return this._array=null,Promise.resolve()}},534:function(t,n,e){"use strict";n.a=function(){var t=this._array;return this._array=null,Promise.resolve(t?{done:!1,value:t}:{done:!0,value:void 0})}},535:function(t,n,e){"use strict";var r=e(198);n.a=function(t){return new Promise(function(n,e){var i=new XMLHttpRequest;i.responseType="arraybuffer",i.onload=function(){n(Object(r.a)(i.response))},i.onerror=e,i.ontimeout=e,i.open("GET",t,!0),i.send()})}},536:function(t,n,e){"use strict";function r(t){return"function"==typeof t.read?t:t.getReader()}n.a=r},537:function(t,n,e){"use strict";n.a=function(){return this._source.cancel()}},538:function(t,n,e){"use strict";var r=e(539),i=e(199);n.a=function(){var t=this,n=t._array.subarray(t._index);return t._source.read().then(function(e){return t._array=i.a,t._index=0,e.done?n.length>0?{done:!1,value:n}:{done:!0,value:void 0}:{done:!1,value:Object(r.a)(n,e.value)}})}},539:function(t,n,e){"use strict";function r(t,n){if(!t.length)return n;if(!n.length)return t;var e=new Uint8Array(t.length+n.length);return e.set(t),e.set(n,t.length),e}n.a=r},540:function(t,n,e){"use strict";var r=e(199);n.a=function(t){if((t|=0)<0)throw new Error("invalid length");var n=this,e=this._array.length-this._index;if(this._index+t<=this._array.length)return Promise.resolve(this._array.subarray(this._index,this._index+=t));var i=new Uint8Array(t);return i.set(this._array.subarray(this._index)),function a(){return n._source.read().then(function(u){return u.done?(n._array=r.a,n._index=0,e>0?i.subarray(0,e):null):e+u.value.length>=t?(n._array=u.value,n._index=t-e,i.set(u.value.subarray(0,t-e),e),i):(i.set(u.value,e),e+=u.value.length,a())})}()}},541:function(t,n,e){"use strict";n.a=function(){return this._source.cancel()}},542:function(t,n,e){"use strict";var r=e(543),i=e(544),a=e(545),u=e(546),o={B:a.a,C:u.a,D:i.a,F:a.a,L:r.a,M:a.a,N:a.a};n.a=function(){var t=this,n=1;return t._source.slice(t._recordLength).then(function(e){return e&&26!==e[0]?{done:!1,value:t._fields.reduce(function(r,i){return r[i.name]=o[i.type](t._decode(e.subarray(n,n+=i.length))),r},{})}:{done:!0,value:void 0}})}},543:function(t,n,e){"use strict";n.a=function(t){return!/^[nf]$/i.test(t)&&(!!/^[yt]$/i.test(t)||null)}},544:function(t,n,e){"use strict";n.a=function(t){return new Date(+t.substring(0,4),t.substring(4,6)-1,+t.substring(6,8))}},545:function(t,n,e){"use strict";n.a=function(t){return!(t=t.trim())||isNaN(t=+t)?null:t}},546:function(t,n,e){"use strict";n.a=function(t){return t.trim()||null}},547:function(t,n,e){"use strict";function r(t,n){this._shp=t,this._dbf=n,this.bbox=t.bbox}var i=e(289),a=e(291),u=e(556),o=e(557);n.a=function(t,n,e){return Promise.all([Object(a.a)(t),n&&Object(i.a)(n,e)]).then(function(t){return new r(t[0],t[1])})};var c=r.prototype;c.read=o.a,c.cancel=u.a},548:function(t,n,e){"use strict";function r(){return this._source.cancel()}n.a=r},549:function(t,n,e){"use strict";n.a=function(t){var n,e=40,r=t.getInt32(36,!0),i=new Array(r);for(n=0;n<r;++n,e+=16)i[n]=[t.getFloat64(e,!0),t.getFloat64(e+8,!0)];return{type:"MultiPoint",coordinates:i}}},550:function(t,n,e){"use strict";n.a=function(){return null}},551:function(t,n,e){"use strict";n.a=function(t){return{type:"Point",coordinates:[t.getFloat64(4,!0),t.getFloat64(12,!0)]}}},552:function(t,n,e){"use strict";function r(t){if((n=t.length)<4)return!1;for(var n,e=0,r=t[n-1][1]*t[0][0]-t[n-1][0]*t[0][1];++e<n;)r+=t[e-1][1]*t[e][0]-t[e-1][0]*t[e][1];return r>=0}function i(t,n){for(var e,r=-1,i=n.length;++r<i;)if(e=a(t,n[r]))return e>0;return!1}function a(t,n){for(var e=n[0],r=n[1],i=-1,a=0,o=t.length,c=o-1;a<o;c=a++){var s=t[a],f=s[0],l=s[1],h=t[c],d=h[0],y=h[1];if(u(s,h,n))return 0;l>r!=y>r&&e<(d-f)*(r-l)/(y-l)+f&&(i=-i)}return i}function u(t,n,e){var r=e[0]-t[0],i=e[1]-t[1];if(0===r&&0===i)return!0;var a=n[0]-t[0],u=n[1]-t[1];if(0===a&&0===u)return!1;var o=(r*a+i*u)/(a*a+u*u);return!(o<0||o>1)&&(0===o||1===o||o*a===r&&o*u===i)}n.a=function(t){var n,e=44,a=t.getInt32(36,!0),u=t.getInt32(40,!0),o=new Array(a),c=new Array(u),s=[],f=[];for(n=0;n<a;++n,e+=4)o[n]=t.getInt32(e,!0);for(n=0;n<u;++n,e+=16)c[n]=[t.getFloat64(e,!0),t.getFloat64(e+8,!0)];return o.forEach(function(t,n){var e=c.slice(t,o[n+1]);r(e)?s.push([e]):f.push(e)}),f.forEach(function(t){s.some(function(n){if(i(n[0],t))return n.push(t),!0})||s.push([t])}),1===s.length?{type:"Polygon",coordinates:s[0]}:{type:"MultiPolygon",coordinates:s}}},553:function(t,n,e){"use strict";n.a=function(t){var n,e=44,r=t.getInt32(36,!0),i=t.getInt32(40,!0),a=new Array(r),u=new Array(i);for(n=0;n<r;++n,e+=4)a[n]=t.getInt32(e,!0);for(n=0;n<i;++n,e+=16)u[n]=[t.getFloat64(e,!0),t.getFloat64(e+8,!0)];return 1===r?{type:"LineString",coordinates:u}:{type:"MultiLineString",coordinates:a.map(function(t,n){return u.slice(t,a[n+1])})}}},554:function(t,n,e){"use strict";var r=e(555),i=e(200);n.a=function(){var t=this;return++t._index,t._source.slice(12).then(function(n){function e(){return t._source.slice(4).then(function(o){return null==o?{done:!0,value:void 0}:(u=Object(i.a)(n=Object(r.a)(n.slice(4),o)),u.getInt32(0,!1)!==t._index?e():a())})}function a(){var a=2*u.getInt32(4,!1)-4,o=u.getInt32(8,!0);return a<0||o&&o!==t._type?e():t._source.slice(a).then(function(e){return{done:!1,value:o?t._parse(Object(i.a)(Object(r.a)(n.slice(8),e))):null}})}if(null==n)return{done:!0,value:void 0};var u=Object(i.a)(n);return a()})}},555:function(t,n,e){"use strict";n.a=function(t,n){var e=new Uint8Array(t.length+n.length);return e.set(t,0),e.set(n,t.length),e}},556:function(t,n,e){"use strict";function r(){}n.a=function(){return Promise.all([this._dbf&&this._dbf.cancel(),this._shp.cancel()]).then(r)}},557:function(t,n,e){"use strict";n.a=function(){var t=this;return Promise.all([t._dbf?t._dbf.read():{value:{}},t._shp.read()]).then(function(t){var n=t[0],e=t[1];return e.done?e:{done:!1,value:{type:"Feature",properties:n.value,geometry:e.value}}})}}});