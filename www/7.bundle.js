webpackJsonp([7],{171:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.open=s,n.openShp=function(t,n){"string"===typeof t?(/\.shp$/.test(t)||(t+=".shp"),t=Object(r.a)(t,n)):t=t instanceof ArrayBuffer||t instanceof Uint8Array?Object(i.a)(t):Object(a.a)(t);return Promise.resolve(t).then(c.a)},n.openDbf=function(t,n){var e="windows-1252";n&&null!=n.encoding&&(e=n.encoding);e=new TextDecoder(e),"string"===typeof t?(/\.dbf$/.test(t)||(t+=".dbf"),t=Object(r.a)(t,n)):t=t instanceof ArrayBuffer||t instanceof Uint8Array?Object(i.a)(t):Object(a.a)(t);return Promise.resolve(t).then(function(t){return Object(u.a)(t,e)})},n.read=function(t,n,e){return s(t,n,e).then(function(t){var n=[],e={type:"FeatureCollection",features:n,bbox:t.bbox};return t.read().then(function r(i){return i.done?e:(n.push(i.value),t.read().then(r))})})};var r=e(391),i=e(241),a=e(396),u=e(289),o=e(407),c=e(291);function s(t,n,e){return"string"===typeof n?(/\.dbf$/.test(n)||(n+=".dbf"),n=Object(r.a)(n,e)):n instanceof ArrayBuffer||n instanceof Uint8Array?n=Object(i.a)(n):null!=n&&(n=Object(a.a)(n)),"string"===typeof t?(/\.shp$/.test(t)||(t+=".shp"),void 0===n&&(n=Object(r.a)(t.substring(0,t.length-4)+".dbf",e).catch(function(){})),t=Object(r.a)(t,e)):t=t instanceof ArrayBuffer||t instanceof Uint8Array?Object(i.a)(t):Object(a.a)(t),Promise.all([t,n]).then(function(t){var n=t[0],r=t[1],i="windows-1252";return e&&null!=e.encoding&&(i=e.encoding),Object(o.a)(n,r,r&&new TextDecoder(i))})}},241:function(t,n,e){"use strict";n.a=function(t){return new a(t instanceof Uint8Array?t:new Uint8Array(t))};var r=e(393),i=e(394);function a(t){this._array=t}a.prototype.read=i.a,a.prototype.cancel=r.a},242:function(t,n,e){"use strict";n.a=new Uint8Array(0)},243:function(t,n,e){"use strict";n.a=function(t){return new DataView(t.buffer,t.byteOffset,t.byteLength)}},289:function(t,n,e){"use strict";var r=e(290),i=e(401),a=e(402),u=e(243);function o(t,n,e,r){this._source=t,this._decode=n.decode.bind(n),this._recordLength=e.getUint16(10,!0),this._fields=[];for(var i=0;13!==r.getUint8(i);i+=32){for(var a=0;a<11&&0!==r.getUint8(i+a);++a);this._fields.push({name:this._decode(new Uint8Array(r.buffer,r.byteOffset+i,a)),type:String.fromCharCode(r.getUint8(i+11)),length:r.getUint8(i+16)})}}n.a=function(t,n){return(t=Object(r.a)(t)).slice(32).then(function(e){var r=Object(u.a)(e);return t.slice(r.getUint16(8,!0)-32).then(function(e){return new o(t,n,r,Object(u.a)(e))})})};var c=o.prototype;c.read=a.a,c.cancel=i.a},290:function(t,n,e){"use strict";n.a=function(t){return"function"===typeof t.slice?t:new o("function"===typeof t.read?t:t.getReader())};var r=e(242),i=e(397),a=e(398),u=e(400);function o(t){this._source=t,this._array=r.a,this._index=0}o.prototype.read=a.a,o.prototype.slice=u.a,o.prototype.cancel=i.a},291:function(t,n,e){"use strict";var r=e(290),i=e(243),a=e(408),u=e(409),o=e(410),c=e(411),s=e(412),f=e(413),l=e(414),h={0:o.a,1:c.a,3:f.a,5:s.a,8:u.a,11:c.a,13:f.a,15:s.a,18:u.a,21:c.a,23:f.a,25:s.a,28:u.a};function d(t,n){var e=n.getInt32(32,!0);if(!(e in h))throw new Error("unsupported shape type: "+e);this._source=t,this._type=e,this._index=0,this._parse=h[e],this.bbox=[n.getFloat64(36,!0),n.getFloat64(44,!0),n.getFloat64(52,!0),n.getFloat64(60,!0)]}n.a=function(t){return(t=Object(r.a)(t)).slice(100).then(function(n){return new d(t,Object(i.a)(n))})};var y=d.prototype;y.read=l.a,y.cancel=a.a},391:function(t,n,e){"use strict";n.a=function(t){return("function"===typeof fetch?r.a:i.a)(t)};var r=e(392),i=e(395)},392:function(t,n,e){"use strict";var r=e(241);n.a=function(t){return fetch(t).then(function(t){return t.body&&t.body.getReader?t.body.getReader():t.arrayBuffer().then(r.a)})}},393:function(t,n,e){"use strict";n.a=function(){return this._array=null,Promise.resolve()}},394:function(t,n,e){"use strict";n.a=function(){var t=this._array;return this._array=null,Promise.resolve(t?{done:!1,value:t}:{done:!0,value:void 0})}},395:function(t,n,e){"use strict";var r=e(241);n.a=function(t){return new Promise(function(n,e){var i=new XMLHttpRequest;i.responseType="arraybuffer",i.onload=function(){n(Object(r.a)(i.response))},i.onerror=e,i.ontimeout=e,i.open("GET",t,!0),i.send()})}},396:function(t,n,e){"use strict";n.a=function(t){return"function"===typeof t.read?t:t.getReader()}},397:function(t,n,e){"use strict";n.a=function(){return this._source.cancel()}},398:function(t,n,e){"use strict";var r=e(399),i=e(242);n.a=function(){var t=this,n=t._array.subarray(t._index);return t._source.read().then(function(e){return t._array=i.a,t._index=0,e.done?n.length>0?{done:!1,value:n}:{done:!0,value:void 0}:{done:!1,value:Object(r.a)(n,e.value)}})}},399:function(t,n,e){"use strict";n.a=function(t,n){if(!t.length)return n;if(!n.length)return t;var e=new Uint8Array(t.length+n.length);return e.set(t),e.set(n,t.length),e}},400:function(t,n,e){"use strict";var r=e(242);n.a=function(t){if((t|=0)<0)throw new Error("invalid length");var n=this,e=this._array.length-this._index;if(this._index+t<=this._array.length)return Promise.resolve(this._array.subarray(this._index,this._index+=t));var i=new Uint8Array(t);return i.set(this._array.subarray(this._index)),function a(){return n._source.read().then(function(u){return u.done?(n._array=r.a,n._index=0,e>0?i.subarray(0,e):null):e+u.value.length>=t?(n._array=u.value,n._index=t-e,i.set(u.value.subarray(0,t-e),e),i):(i.set(u.value,e),e+=u.value.length,a())})}()}},401:function(t,n,e){"use strict";n.a=function(){return this._source.cancel()}},402:function(t,n,e){"use strict";var r=e(403),i=e(404),a=e(405),u=e(406),o={B:a.a,C:u.a,D:i.a,F:a.a,L:r.a,M:a.a,N:a.a};n.a=function(){var t=this,n=1;return t._source.slice(t._recordLength).then(function(e){return e&&26!==e[0]?{done:!1,value:t._fields.reduce(function(r,i){return r[i.name]=o[i.type](t._decode(e.subarray(n,n+=i.length))),r},{})}:{done:!0,value:void 0}})}},403:function(t,n,e){"use strict";n.a=function(t){return!/^[nf]$/i.test(t)&&(!!/^[yt]$/i.test(t)||null)}},404:function(t,n,e){"use strict";n.a=function(t){return new Date(+t.substring(0,4),t.substring(4,6)-1,+t.substring(6,8))}},405:function(t,n,e){"use strict";n.a=function(t){return!(t=t.trim())||isNaN(t=+t)?null:t}},406:function(t,n,e){"use strict";n.a=function(t){return t.trim()||null}},407:function(t,n,e){"use strict";var r=e(289),i=e(291),a=e(416),u=e(417);function o(t,n){this._shp=t,this._dbf=n,this.bbox=t.bbox}n.a=function(t,n,e){return Promise.all([Object(i.a)(t),n&&Object(r.a)(n,e)]).then(function(t){return new o(t[0],t[1])})};var c=o.prototype;c.read=u.a,c.cancel=a.a},408:function(t,n,e){"use strict";n.a=function(){return this._source.cancel()}},409:function(t,n,e){"use strict";n.a=function(t){var n,e=40,r=t.getInt32(36,!0),i=new Array(r);for(n=0;n<r;++n,e+=16)i[n]=[t.getFloat64(e,!0),t.getFloat64(e+8,!0)];return{type:"MultiPoint",coordinates:i}}},410:function(t,n,e){"use strict";n.a=function(){return null}},411:function(t,n,e){"use strict";n.a=function(t){return{type:"Point",coordinates:[t.getFloat64(4,!0),t.getFloat64(12,!0)]}}},412:function(t,n,e){"use strict";function r(t,n){for(var e=n[0],r=n[1],a=-1,u=0,o=t.length,c=o-1;u<o;c=u++){var s=t[u],f=s[0],l=s[1],h=t[c],d=h[0],y=h[1];if(i(s,h,n))return 0;l>r!==y>r&&e<(d-f)*(r-l)/(y-l)+f&&(a=-a)}return a}function i(t,n,e){var r=e[0]-t[0],i=e[1]-t[1];if(0===r&&0===i)return!0;var a=n[0]-t[0],u=n[1]-t[1];if(0===a&&0===u)return!1;var o=(r*a+i*u)/(a*a+u*u);return!(o<0||o>1)&&(0===o||1===o||o*a===r&&o*u===i)}n.a=function(t){var n,e=44,i=t.getInt32(36,!0),a=t.getInt32(40,!0),u=new Array(i),o=new Array(a),c=[],s=[];for(n=0;n<i;++n,e+=4)u[n]=t.getInt32(e,!0);for(n=0;n<a;++n,e+=16)o[n]=[t.getFloat64(e,!0),t.getFloat64(e+8,!0)];return u.forEach(function(t,n){var e=o.slice(t,u[n+1]);!function(t){if((n=t.length)<4)return!1;var n,e=0,r=t[n-1][1]*t[0][0]-t[n-1][0]*t[0][1];for(;++e<n;)r+=t[e-1][1]*t[e][0]-t[e-1][0]*t[e][1];return r>=0}(e)?s.push(e):c.push([e])}),s.forEach(function(t){c.some(function(n){if(function(t,n){var e,i=-1,a=n.length;for(;++i<a;)if(e=r(t,n[i]))return e>0;return!1}(n[0],t))return n.push(t),!0})||c.push([t])}),1===c.length?{type:"Polygon",coordinates:c[0]}:{type:"MultiPolygon",coordinates:c}}},413:function(t,n,e){"use strict";n.a=function(t){var n,e=44,r=t.getInt32(36,!0),i=t.getInt32(40,!0),a=new Array(r),u=new Array(i);for(n=0;n<r;++n,e+=4)a[n]=t.getInt32(e,!0);for(n=0;n<i;++n,e+=16)u[n]=[t.getFloat64(e,!0),t.getFloat64(e+8,!0)];return 1===r?{type:"LineString",coordinates:u}:{type:"MultiLineString",coordinates:a.map(function(t,n){return u.slice(t,a[n+1])})}}},414:function(t,n,e){"use strict";var r=e(415),i=e(243);n.a=function(){var t=this;return++t._index,t._source.slice(12).then(function(n){if(null==n)return{done:!0,value:void 0};var e=Object(i.a)(n);function a(){var u=2*e.getInt32(4,!1)-4,o=e.getInt32(8,!0);return u<0||o&&o!==t._type?function u(){return t._source.slice(4).then(function(o){return null==o?{done:!0,value:void 0}:(e=Object(i.a)(n=Object(r.a)(n.slice(4),o))).getInt32(0,!1)!==t._index?u():a()})}():t._source.slice(u).then(function(e){return{done:!1,value:o?t._parse(Object(i.a)(Object(r.a)(n.slice(8),e))):null}})}return a()})}},415:function(t,n,e){"use strict";n.a=function(t,n){var e=new Uint8Array(t.length+n.length);return e.set(t,0),e.set(n,t.length),e}},416:function(t,n,e){"use strict";function r(){}n.a=function(){return Promise.all([this._dbf&&this._dbf.cancel(),this._shp.cancel()]).then(r)}},417:function(t,n,e){"use strict";n.a=function(){return Promise.all([this._dbf?this._dbf.read():{value:{}},this._shp.read()]).then(function(t){var n=t[0],e=t[1];return e.done?e:{done:!1,value:{type:"Feature",properties:n.value,geometry:e.value}}})}}});