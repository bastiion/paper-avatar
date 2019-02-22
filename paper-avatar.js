import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

// Jdenticon 1.4.0 | jdenticon.com | zlib licensed | (c) 2014-2016 Daniel Mester Pirttijärvi
(function (l, h, k) {
 var m = k(l, l.jQuery);
 "undefined" !== typeof module && "exports" in module ? module.exports = m : "function" === typeof define && define.amd ? define([], function () {
  return m
 }) : l[h] = m
})(window, "jdenticon", function (l, h) {
 function k(b, a) {
  this.x = b;
  this.y = a
 }

 function m(b, a, c, d) {
  this.o = b;
  this.s = a;
  this.f = c;
  this.l = d
 }

 function A(b) {
  this.C = b;
  this.m = m.O
 }

 function n(b) {
  b |= 0;
  return 0 > b ? "00" : 16 > b ? "0" + b.toString(16) : 256 > b ? b.toString(16) : "ff"
 }

 function r(b, a, c) {
  c = 0 > c ? c + 6 : 6 < c ? c - 6 : c;
  return n(255 * (1 > c ? b + (a - b) * c : 3 > c ? a : 4 > c ? b + (a - b) * (4 - c) : b))
 }

 function D(b, a) {
  return [p.w(0, 0, a.H(0)), p.v(b, a.A, a.u(.5)), p.w(0, 0, a.H(1)), p.v(b, a.A, a.u(1)), p.v(b, a.A, a.u(0))]
 }

 function t(b, a, c, d, f) {
  var e = 0
   , u = 0;

  function v(c, d, f, g, h) {
   g = g ? parseInt(a.charAt(g), 16) : 0;
   d = d[parseInt(a.charAt(f), 16) % d.length];
   b.F(p[n[c]]);
   for (c = 0; c < h.length; c++) l.m = new m(e + h[c][0] * k, u + h[c][1] * k, k, g++ % 4), d(l, k, c);
   b.G()
  }

  function g(a) {
   if (0 <= a.indexOf(h))
    for (var b = 0; b < a.length; b++)
     if (0 <= n.indexOf(a[b])) return !0
  }
  d = c * (void 0 === d ? .08 : d) | 0;
  c -= 2 * d;
  if (!/^[0-9a-f]{11,}$/i.test(a)) throw Error("Invalid hash passed to Jdenticon.");
  var l = new A(b)
   , k = 0 | c / 4
   , e = e + (0 | d + c / 2 - 2 * k)
   , u = u + (0 | d + c / 2 - 2 * k)
   , p = D(parseInt(a.substr(-7), 16) / 268435455, f)
   , n = []
   , h;
  for (c = 0; 3 > c; c++) {
   h = parseInt(a.charAt(8 + c), 16) % p.length;
   if (g([0, 4]) || g([2, 3])) h = 1;
   n.push(h)
  }
  v(0, w.J, 2, 3, [[1, 0], [2, 0], [2, 3], [1, 3], [0, 1], [3, 1], [3, 2], [0, 2]]);
  v(1, w.J, 4, 5, [[0, 0], [3, 0], [3, 3], [0, 3]]);
  v(2, w.N, 1, null, [[1, 1], [2, 1], [2, 2], [1, 2]])
 }

 function B() {
  this.i = ""
 }

 function x(b, a) {
  this.j = {};
  this.f = {
   M: b
   , I: a
  }
 }

 function y(b, a, c) {
  this.h = b;
  b.clearRect(0, 0, a, c)
 }

 function z() {
  function b(a, b, e) {
   var d = c[a] instanceof
   Array ? c[a] : [b, e];
   return function (a) {
    a = d[0] + a * (d[1] - d[0]);
    return 0 > a ? 0 : 1 < a ? 1 : a
   }
  }
  var a = g.config || l.jdenticon_config || {}
   , c = a.lightness || {}
   , a = a.saturation;
  return {
   A: "number" == typeof a ? a : .5
   , u: b("color", .4, .8)
   , H: b("grayscale", .3, .9)
  }
 }

 function q(b, a, c) {
  if ("string" === typeof b) {
   if (C) {
    b = document.querySelectorAll(b);
    for (var d = 0; d < b.length; d++) q(b[d], a, c)
   }
  }
  else if (b && b.tagName && (a = a || b.getAttribute("data-jdenticon-hash"))) {
   var f = "svg" == b.tagName.toLowerCase()
    , d = "canvas" == b.tagName.toLowerCase();
   if (f || d && "getContext" in b) {
    var d = Number(b.getAttribute("width")) || b.clientWidth || 0
     , e = Number(b.getAttribute("height")) || b.clientHeight || 0
     , g = f ? new x(d, e) : new y(b.getContext("2d"), d, e);
    t(g, a, Math.min(d, e), c, z());
    if (f) {
     a = document.createElement("span");
     for (a.innerHTML = g.K(!1); b.firstChild;) b.removeChild(b.firstChild);
     for (a = a.firstChild.childNodes; a.length;) b.appendChild(a[0]);
     b.setAttribute("viewBox", "0 0 " + d + " " + e)
    }
   }
  }
 }

 function g() {
  C && q("svg[data-jdenticon-hash],canvas[data-jdenticon-hash]")
 }
 m.prototype = {
  L: function (b, a, c, d) {
   var f = this.o + this.f
    , e = this.s + this.f;
   return 1 === this.l ? new k(f - a - (d || 0), this.s + b) : 2 === this.l ? new k(f - b - (c || 0), e - a - (d || 0)) : 3 === this.l ? new k(this.o + a, e - b - (c || 0)) : new k(this.o + b, this.s + a)
  }
 };
 m.O = new m(0, 0, 0, 0);
 A.prototype = {
  a: function (b, a) {
   var c = a ? -2 : 2
    , d = this.m
    , f = []
    , e;
   for (e = a ? b.length - 2 : 0; e < b.length && 0 <= e; e += c) f.push(d.L(b[e], b[e + 1]));
   this.C.a(f)
  }
  , b: function (b, a, c, d) {
   this.C.b(this.m.L(b, a, c, c), c, d)
  }
  , c: function (b, a, c, d, f) {
   this.a([b, a, b + c, a, b + c, a + d, b, a + d], f)
  }
  , g: function (b, a, c, d, f, e) {
   b = [b + c, a, b + c, a + d, b, a + d, b, a];
   b.splice((f || 0) % 4 * 2, 2);
   this.a(b, e)
  }
  , D: function (b, a, c, d, f) {
   this.a([b + c / 2, a, b + c, a + d / 2, b + c / 2, a + d, b, a + d / 2], f)
  }
 };
 var w = {
   N: [function (b, a) {
    var c = .42 * a;
    b.a([0, 0, a, 0, a, a - 2 * c, a - c, a, 0, a])
   }, function (b, a) {
    var c = 0 | .5 * a;
    b.g(a - c, 0, c, 0 | .8 * a, 2)
   }, function (b, a) {
    var c = 0 | a / 3;
    b.c(c, c, a - c, a - c)
   }, function (b, a) {
    var c = .1 * a
     , c = 1 < c ? 0 | c : .5 < c ? 1 : c
     , d = 6 > a ? 1 : 8 > a ? 2 : 0 | .25 * a;
    b.c(d, d, a - c - d, a - c - d)
   }, function (b, a) {
    var c = 0 | .15 * a
     , d = 0 | .5 * a;
    b.b(a - d - c, a - d - c, d)
   }, function (b, a) {
    var c = .1 * a
     , d = 4 * c;
    b.c(0, 0, a, a);
    b.a([d, d, a - c, d, d + (a - d - c) / 2, a - c], !0)
   }, function (b, a) {
    b.a([0, 0, a, 0, a, .7 * a, .4 * a, .4 * a, .7 * a, a, 0, a])
   }, function (b, a) {
    b.g(a / 2, a / 2, a / 2, a / 2, 3)
   }, function (b, a) {
    b.c(0, 0, a, a / 2);
    b.c(0, a / 2, a / 2, a / 2);
    b.g(a / 2, a / 2, a / 2, a / 2, 1)
   }, function (b, a) {
    var c = .14 * a
     , c = 8 > a ? c : 0 | c
     , d = 4 > a ? 1 : 6 > a ? 2 : 0 | .35 * a;
    b.c(0, 0, a, a);
    b.c(d, d, a - d - c, a - d - c, !0)
   }, function (b, a) {
    var c = .12 * a
     , d = 3 * c;
    b.c(0, 0, a, a);
    b.b(d, d, a - c - d, !0)
   }, function (b, a) {
    b.g(a / 2, a / 2, a / 2, a / 2, 3)
   }, function (b, a) {
    var c = .25 * a;
    b.c(0, 0, a, a);
    b.D(c, c, a - c, a - c, !0)
   }, function (b, a, c) {
    var d = .4 * a;
    c || b.b(d, d, 1.2 * a)
   }]
   , J: [function (b, a) {
    b.g(0, 0, a, a, 0)
   }, function (b, a) {
    b.g(0, a / 2, a, a / 2, 0)
   }, function (b, a) {
    b.D(0, 0, a, a)
   }, function (b, a) {
    var c = a / 6;
    b.b(c, c, a - 2 * c)
   }]
  }
  , p = {
   P: function (b, a, c) {
    return "#" + n(b) + n(a) + n(c)
   }
   , w: function (b, a, c) {
    if (0 == a) return b = n(255 * c), "#" + b + b + b;
    a = .5 >= c ? c * (a + 1) : c + a - c * a;
    c = 2 * c - a;
    return "#" + r(c, a, 6 * b + 2) + r(c, a, 6 * b) + r(c, a, 6 * b - 2)
   }
   , v: function (b, a, c) {
    var d = [.55, .5, .5, .46, .6, .55, .55][6 * b + .5 | 0];
    return p.w(b, a, .5 > c ? c * d * 2 : d + (c - .5) * (1 - d) * 2)
   }
  };
 B.prototype = {
  a: function (b) {
   for (var a = "M" + b[0].x + " " + b[0].y, c = 1; c < b.length; c++) a += "L" + b[c].x + " " + b[c].y;
   this.i += a + "Z"
  }
  , b: function (b, a, c) {
   c = c ? 0 : 1;
   var d = a / 2;
   this.i += "M" + b.x + " " + (b.y + d) + "a" + d + "," + d + " 0 1," + c + " " + a + ",0a" + d + "," + d + " 0 1," + c + " " + -a + ",0"
  }
 };
 x.prototype = {
  F: function (b) {
   this.B = this.j[b] || (this.j[b] = new B)
  }
  , G: function () {}
  , a: function (b) {
   this.B.a(b)
  }
  , b: function (b, a, c) {
   this.B.b(b, a, c)
  }
  , K: function (b) {
   var a = b ? "" : '<svg xmlns="http://www.w3.org/2000/svg" width="' + this.f.M + '" height="' + this.f.I + '" viewBox="0 0 ' + this.f.M + " " + this.f.I + '" preserveAspectRatio="xMidYMid meet">'
    , c;
   for (c in this.j) a += '<path fill="' + c + '" d="' + this.j[c].i + '"/>';
   return b ? a : a + "</svg>"
  }
 };
 y.prototype = {
  F: function (b) {
   this.h.fillStyle = b;
   this.h.beginPath()
  }
  , G: function () {
   this.h.fill()
  }
  , a: function (b) {
   var a = this.h
    , c;
   a.moveTo(b[0].x, b[0].y);
   for (c = 1; c < b.length; c++) a.lineTo(b[c].x, b[c].y);
   a.closePath()
  }
  , b: function (b, a, c) {
   var d = this.h;
   a /= 2;
   d.arc(b.x + a, b.y + a, a, 0, 2 * Math.PI, c);
   d.closePath()
  }
 };
 var C = "document" in l && "querySelectorAll" in document;
 g.drawIcon = function (b, a, c) {
  if (!b) throw Error("No canvas specified.");
  b = new y(b, c, c);
  t(b, a, c, 0, z())
 };
 g.toSvg = function (b, a, c) {
  var d = new x(a, a);
  t(d, b, a, c, z());
  return d.K()
 };
 g.update = q;
 g.version = "1.4.0";
 h && (h.fn.jdenticon = function (b, a) {
  this.each(function (c, d) {
   q(d, b, a)
  });
  return this
 });
 "function" === typeof setTimeout && setTimeout(g, 0);
 return g
});
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.4.2
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
! function () {
 "use strict";

 function t(t) {
  if (t) c[0] = c[16] = c[1] = c[2] = c[3] = c[4] = c[5] = c[6] = c[7] = c[8] = c[9] = c[10] = c[11] = c[12] = c[13] = c[14] = c[15] = 0, this.blocks = c, this.buffer8 = i;
  else if (n) {
   var r = new ArrayBuffer(68);
   this.buffer8 = new Uint8Array(r), this.blocks = new Uint32Array(r)
  }
  else this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = 0, this.finalized = this.hashed = !1, this.first = !0
 }
 var r = "object" == typeof window ? window : {}
  , e = !r.JS_MD5_NO_NODE_JS && "object" == typeof process && process.versions && process.versions.node;
 e && (r = global);
 var i, h = !r.JS_MD5_NO_COMMON_JS && "object" == typeof module && module.exports
  , s = "function" == typeof define && define.amd
  , n = !r.JS_MD5_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer
  , f = "0123456789abcdef".split("")
  , o = [128, 32768, 8388608, -2147483648]
  , a = [0, 8, 16, 24]
  , u = ["hex", "array", "digest", "buffer", "arrayBuffer"]
  , c = [];
 if (n) {
  var p = new ArrayBuffer(68);
  i = new Uint8Array(p), c = new Uint32Array(p)
 }
 var d = function (r) {
   return function (e) {
    return new t(!0).update(e)[r]()
   }
  }
  , y = function () {
   var r = d("hex");
   e && (r = l(r)), r.create = function () {
    return new t
   }, r.update = function (t) {
    return r.create().update(t)
   };
   for (var i = 0; i < u.length; ++i) {
    var h = u[i];
    r[h] = d(h)
   }
   return r
  }
  , l = function (t) {
   var r = require("crypto")
    , e = require("buffer").Buffer
    , i = function (i) {
     if ("string" == typeof i) return r.createHash("md5").update(i, "utf8").digest("hex");
     if (i.constructor === ArrayBuffer) i = new Uint8Array(i);
     else if (void 0 === i.length) return t(i);
     return r.createHash("md5").update(new e(i)).digest("hex")
    };
   return i
  };
 t.prototype.update = function (t) {
  if (!this.finalized) {
   var e = "string" != typeof t;
   e && t.constructor == r.ArrayBuffer && (t = new Uint8Array(t));
   for (var i, h, s = 0, f = t.length || 0, o = this.blocks, u = this.buffer8; f > s;) {
    if (this.hashed && (this.hashed = !1, o[0] = o[16], o[16] = o[1] = o[2] = o[3] = o[4] = o[5] = o[6] = o[7] = o[8] = o[9] = o[10] = o[11] = o[12] = o[13] = o[14] = o[15] = 0), e)
     if (n)
      for (h = this.start; f > s && 64 > h; ++s) u[h++] = t[s];
     else
      for (h = this.start; f > s && 64 > h; ++s) o[h >> 2] |= t[s] << a[3 & h++];
    else if (n)
     for (h = this.start; f > s && 64 > h; ++s) i = t.charCodeAt(s), 128 > i ? u[h++] = i : 2048 > i ? (u[h++] = 192 | i >> 6, u[h++] = 128 | 63 & i) : 55296 > i || i >= 57344 ? (u[h++] = 224 | i >> 12, u[h++] = 128 | i >> 6 & 63, u[h++] = 128 | 63 & i) : (i = 65536 + ((1023 & i) << 10 | 1023 & t.charCodeAt(++s)), u[h++] = 240 | i >> 18, u[h++] = 128 | i >> 12 & 63, u[h++] = 128 | i >> 6 & 63, u[h++] = 128 | 63 & i);
    else
     for (h = this.start; f > s && 64 > h; ++s) i = t.charCodeAt(s), 128 > i ? o[h >> 2] |= i << a[3 & h++] : 2048 > i ? (o[h >> 2] |= (192 | i >> 6) << a[3 & h++], o[h >> 2] |= (128 | 63 & i) << a[3 & h++]) : 55296 > i || i >= 57344 ? (o[h >> 2] |= (224 | i >> 12) << a[3 & h++], o[h >> 2] |= (128 | i >> 6 & 63) << a[3 & h++], o[h >> 2] |= (128 | 63 & i) << a[3 & h++]) : (i = 65536 + ((1023 & i) << 10 | 1023 & t.charCodeAt(++s)), o[h >> 2] |= (240 | i >> 18) << a[3 & h++], o[h >> 2] |= (128 | i >> 12 & 63) << a[3 & h++], o[h >> 2] |= (128 | i >> 6 & 63) << a[3 & h++], o[h >> 2] |= (128 | 63 & i) << a[3 & h++]);
    this.lastByteIndex = h, this.bytes += h - this.start, h >= 64 ? (this.start = h - 64, this.hash(), this.hashed = !0) : this.start = h
   }
   return this
  }
 }, t.prototype.finalize = function () {
  if (!this.finalized) {
   this.finalized = !0;
   var t = this.blocks
    , r = this.lastByteIndex;
   t[r >> 2] |= o[3 & r], r >= 56 && (this.hashed || this.hash(), t[0] = t[16], t[16] = t[1] = t[2] = t[3] = t[4] = t[5] = t[6] = t[7] = t[8] = t[9] = t[10] = t[11] = t[12] = t[13] = t[14] = t[15] = 0), t[14] = this.bytes << 3, this.hash()
  }
 }, t.prototype.hash = function () {
  var t, r, e, i, h, s, n = this.blocks;
  this.first ? (t = n[0] - 680876937, t = (t << 7 | t >>> 25) - 271733879 << 0, i = (-1732584194 ^ 2004318071 & t) + n[1] - 117830708, i = (i << 12 | i >>> 20) + t << 0, e = (-271733879 ^ i & (-271733879 ^ t)) + n[2] - 1126478375, e = (e << 17 | e >>> 15) + i << 0, r = (t ^ e & (i ^ t)) + n[3] - 1316259209, r = (r << 22 | r >>> 10) + e << 0) : (t = this.h0, r = this.h1, e = this.h2, i = this.h3, t += (i ^ r & (e ^ i)) + n[0] - 680876936, t = (t << 7 | t >>> 25) + r << 0, i += (e ^ t & (r ^ e)) + n[1] - 389564586, i = (i << 12 | i >>> 20) + t << 0, e += (r ^ i & (t ^ r)) + n[2] + 606105819, e = (e << 17 | e >>> 15) + i << 0, r += (t ^ e & (i ^ t)) + n[3] - 1044525330, r = (r << 22 | r >>> 10) + e << 0), t += (i ^ r & (e ^ i)) + n[4] - 176418897, t = (t << 7 | t >>> 25) + r << 0, i += (e ^ t & (r ^ e)) + n[5] + 1200080426, i = (i << 12 | i >>> 20) + t << 0, e += (r ^ i & (t ^ r)) + n[6] - 1473231341, e = (e << 17 | e >>> 15) + i << 0, r += (t ^ e & (i ^ t)) + n[7] - 45705983, r = (r << 22 | r >>> 10) + e << 0, t += (i ^ r & (e ^ i)) + n[8] + 1770035416, t = (t << 7 | t >>> 25) + r << 0, i += (e ^ t & (r ^ e)) + n[9] - 1958414417, i = (i << 12 | i >>> 20) + t << 0, e += (r ^ i & (t ^ r)) + n[10] - 42063, e = (e << 17 | e >>> 15) + i << 0, r += (t ^ e & (i ^ t)) + n[11] - 1990404162, r = (r << 22 | r >>> 10) + e << 0, t += (i ^ r & (e ^ i)) + n[12] + 1804603682, t = (t << 7 | t >>> 25) + r << 0, i += (e ^ t & (r ^ e)) + n[13] - 40341101, i = (i << 12 | i >>> 20) + t << 0, e += (r ^ i & (t ^ r)) + n[14] - 1502002290, e = (e << 17 | e >>> 15) + i << 0, r += (t ^ e & (i ^ t)) + n[15] + 1236535329, r = (r << 22 | r >>> 10) + e << 0, t += (e ^ i & (r ^ e)) + n[1] - 165796510, t = (t << 5 | t >>> 27) + r << 0, i += (r ^ e & (t ^ r)) + n[6] - 1069501632, i = (i << 9 | i >>> 23) + t << 0, e += (t ^ r & (i ^ t)) + n[11] + 643717713, e = (e << 14 | e >>> 18) + i << 0, r += (i ^ t & (e ^ i)) + n[0] - 373897302, r = (r << 20 | r >>> 12) + e << 0, t += (e ^ i & (r ^ e)) + n[5] - 701558691, t = (t << 5 | t >>> 27) + r << 0, i += (r ^ e & (t ^ r)) + n[10] + 38016083, i = (i << 9 | i >>> 23) + t << 0, e += (t ^ r & (i ^ t)) + n[15] - 660478335, e = (e << 14 | e >>> 18) + i << 0, r += (i ^ t & (e ^ i)) + n[4] - 405537848, r = (r << 20 | r >>> 12) + e << 0, t += (e ^ i & (r ^ e)) + n[9] + 568446438, t = (t << 5 | t >>> 27) + r << 0, i += (r ^ e & (t ^ r)) + n[14] - 1019803690, i = (i << 9 | i >>> 23) + t << 0, e += (t ^ r & (i ^ t)) + n[3] - 187363961, e = (e << 14 | e >>> 18) + i << 0, r += (i ^ t & (e ^ i)) + n[8] + 1163531501, r = (r << 20 | r >>> 12) + e << 0, t += (e ^ i & (r ^ e)) + n[13] - 1444681467, t = (t << 5 | t >>> 27) + r << 0, i += (r ^ e & (t ^ r)) + n[2] - 51403784, i = (i << 9 | i >>> 23) + t << 0, e += (t ^ r & (i ^ t)) + n[7] + 1735328473, e = (e << 14 | e >>> 18) + i << 0, r += (i ^ t & (e ^ i)) + n[12] - 1926607734, r = (r << 20 | r >>> 12) + e << 0, h = r ^ e, t += (h ^ i) + n[5] - 378558, t = (t << 4 | t >>> 28) + r << 0, i += (h ^ t) + n[8] - 2022574463, i = (i << 11 | i >>> 21) + t << 0, s = i ^ t, e += (s ^ r) + n[11] + 1839030562, e = (e << 16 | e >>> 16) + i << 0, r += (s ^ e) + n[14] - 35309556, r = (r << 23 | r >>> 9) + e << 0, h = r ^ e, t += (h ^ i) + n[1] - 1530992060, t = (t << 4 | t >>> 28) + r << 0, i += (h ^ t) + n[4] + 1272893353, i = (i << 11 | i >>> 21) + t << 0, s = i ^ t, e += (s ^ r) + n[7] - 155497632, e = (e << 16 | e >>> 16) + i << 0, r += (s ^ e) + n[10] - 1094730640, r = (r << 23 | r >>> 9) + e << 0, h = r ^ e, t += (h ^ i) + n[13] + 681279174, t = (t << 4 | t >>> 28) + r << 0, i += (h ^ t) + n[0] - 358537222, i = (i << 11 | i >>> 21) + t << 0, s = i ^ t, e += (s ^ r) + n[3] - 722521979, e = (e << 16 | e >>> 16) + i << 0, r += (s ^ e) + n[6] + 76029189, r = (r << 23 | r >>> 9) + e << 0, h = r ^ e, t += (h ^ i) + n[9] - 640364487, t = (t << 4 | t >>> 28) + r << 0, i += (h ^ t) + n[12] - 421815835, i = (i << 11 | i >>> 21) + t << 0, s = i ^ t, e += (s ^ r) + n[15] + 530742520, e = (e << 16 | e >>> 16) + i << 0, r += (s ^ e) + n[2] - 995338651, r = (r << 23 | r >>> 9) + e << 0, t += (e ^ (r | ~i)) + n[0] - 198630844, t = (t << 6 | t >>> 26) + r << 0, i += (r ^ (t | ~e)) + n[7] + 1126891415, i = (i << 10 | i >>> 22) + t << 0, e += (t ^ (i | ~r)) + n[14] - 1416354905, e = (e << 15 | e >>> 17) + i << 0, r += (i ^ (e | ~t)) + n[5] - 57434055, r = (r << 21 | r >>> 11) + e << 0, t += (e ^ (r | ~i)) + n[12] + 1700485571, t = (t << 6 | t >>> 26) + r << 0, i += (r ^ (t | ~e)) + n[3] - 1894986606, i = (i << 10 | i >>> 22) + t << 0, e += (t ^ (i | ~r)) + n[10] - 1051523, e = (e << 15 | e >>> 17) + i << 0, r += (i ^ (e | ~t)) + n[1] - 2054922799, r = (r << 21 | r >>> 11) + e << 0, t += (e ^ (r | ~i)) + n[8] + 1873313359, t = (t << 6 | t >>> 26) + r << 0, i += (r ^ (t | ~e)) + n[15] - 30611744, i = (i << 10 | i >>> 22) + t << 0, e += (t ^ (i | ~r)) + n[6] - 1560198380, e = (e << 15 | e >>> 17) + i << 0, r += (i ^ (e | ~t)) + n[13] + 1309151649, r = (r << 21 | r >>> 11) + e << 0, t += (e ^ (r | ~i)) + n[4] - 145523070, t = (t << 6 | t >>> 26) + r << 0, i += (r ^ (t | ~e)) + n[11] - 1120210379, i = (i << 10 | i >>> 22) + t << 0, e += (t ^ (i | ~r)) + n[2] + 718787259, e = (e << 15 | e >>> 17) + i << 0, r += (i ^ (e | ~t)) + n[9] - 343485551, r = (r << 21 | r >>> 11) + e << 0, this.first ? (this.h0 = t + 1732584193 << 0, this.h1 = r - 271733879 << 0, this.h2 = e - 1732584194 << 0, this.h3 = i + 271733878 << 0, this.first = !1) : (this.h0 = this.h0 + t << 0, this.h1 = this.h1 + r << 0, this.h2 = this.h2 + e << 0, this.h3 = this.h3 + i << 0)
 }, t.prototype.hex = function () {
  this.finalize();
  var t = this.h0
   , r = this.h1
   , e = this.h2
   , i = this.h3;
  return f[t >> 4 & 15] + f[15 & t] + f[t >> 12 & 15] + f[t >> 8 & 15] + f[t >> 20 & 15] + f[t >> 16 & 15] + f[t >> 28 & 15] + f[t >> 24 & 15] + f[r >> 4 & 15] + f[15 & r] + f[r >> 12 & 15] + f[r >> 8 & 15] + f[r >> 20 & 15] + f[r >> 16 & 15] + f[r >> 28 & 15] + f[r >> 24 & 15] + f[e >> 4 & 15] + f[15 & e] + f[e >> 12 & 15] + f[e >> 8 & 15] + f[e >> 20 & 15] + f[e >> 16 & 15] + f[e >> 28 & 15] + f[e >> 24 & 15] + f[i >> 4 & 15] + f[15 & i] + f[i >> 12 & 15] + f[i >> 8 & 15] + f[i >> 20 & 15] + f[i >> 16 & 15] + f[i >> 28 & 15] + f[i >> 24 & 15]
 }, t.prototype.toString = t.prototype.hex, t.prototype.digest = function () {
  this.finalize();
  var t = this.h0
   , r = this.h1
   , e = this.h2
   , i = this.h3;
  return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255, 255 & r, r >> 8 & 255, r >> 16 & 255, r >> 24 & 255, 255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255, 255 & i, i >> 8 & 255, i >> 16 & 255, i >> 24 & 255]
 }, t.prototype.array = t.prototype.digest, t.prototype.arrayBuffer = function () {
  this.finalize();
  var t = new ArrayBuffer(16)
   , r = new Uint32Array(t);
  return r[0] = this.h0, r[1] = this.h1, r[2] = this.h2, r[3] = this.h3, t
 }, t.prototype.buffer = t.prototype.arrayBuffer;
 var b = y();
 h ? module.exports = b : (r.md5 = b, s && define(function () {
  return b
 }))
}();
/**
`paper-avatar`
User avatar in material style

### Styling

To change the background color:

    paper-avatar {
      --paper-avatar-color: red;
    }
	
To change the size of the avatar:

    paper-avatar {
      --paper-avatar-width: 60px;
    }

Custom property | Description | Default
----------------|-------------|----------
`--paper-avatar-width` | Size (width and height) of the avatar image | `40px`
`--paper-avatar-color` | Background color of the avatar image | 


@demo demo/index.html 
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
Polymer({
  _template: html`
		<style>
			:host {
				--paper-avatar-width: 40px;
			}

			:host {
				display: inline-block;
				box-sizing: border-box;
				position: relative;
				width: var(--paper-avatar-width);
				height:  var(--paper-avatar-width);
				border-radius: 50%;
				cursor: default;
				background-color: var(--paper-avatar-color, var(--paper-avatar-bgcolor));
				-webkit-user-select: none;
				   -moz-user-select: none;
				    -ms-user-select: none;
						user-select: none;
			}
			
			:host > * {
				pointer-events: none;
			}
			
			#label, #img, #jdenticon {
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				width: 100%;
				height: 100%;
				border-radius: 50%;
			}

			#label {
				overflow: hidden;
				display: -ms-flexbox;
				display: -webkit-flex;
				display: flex;
				-webkit-flex-direction: row;
					-ms-flex-direction: row;
						flex-direction: row;
				-webkit-align-items: center;
					 -ms-flex-align: center;
					 	align-items: center;
			}

			#label span {
				display: block;
				width: 100%;
				font-weight: 400;
				color: rgba(255, 255, 255, .8);
				text-transform: capitalize;
				font-family: 'Roboto', 'Noto', sans-serif;
				-webkit-font-smoothing: antialiased;
				text-align: center;
				font-size: calc(var(--paper-avatar-width) / 1.65);
			}

			#jdenticon {
				width: var(--paper-avatar-width);
				height: var(--paper-avatar-width);
			}
			
			*[hidden] {
				display: none !important;
			}
		</style>

		<div id="label" title="[[label]]"><span>[[_label(label)]]</span></div>

		<svg id="jdenticon" width="40" height="40"><slot></slot></svg>

		<template is="dom-if" if="[[src]]">
			<img id="img" src="[[src]]" title="[[label]]" on-load="_onImgLoad" on-error="_onImgError" title="[[color]]">
		</template>
`,

 is: 'paper-avatar'
 , properties: {
  /**
   * Image address or base64
   */
  src: {
   type: String
  }
  , /**
   *	Label with username
   */
  label: {
   type: String
   , observer: '_observerLabel'
  }
  , /**
   * Show two chars in avatar
   */
  twoChars: {
   type: Boolean
   , value: false
  }
  , /**
   * Array of colors for avatar background
   */
  colors: {
   type: Array
  , }
  , /**
   * Set true if you want use a jdenticon avatar
   */
  jdenticon: {
   type: Boolean
   , value: false
  }
 }
 , _observerLabel: function (label) {
  if (label) {
   if (this.jdenticon) {
    this.$.label.hidden = true;
    jdenticon.config = {
     lightness: {
      color: [1, 1]
      , grayscale: [1, 1]
     }
     , saturation: 1
    };
    jdenticon.update(this.$.jdenticon, md5(label));
   }
   this.updateStyles({
    '--paper-avatar-bgcolor': this._parseColor(label)
   });
  }
 }
 , _label: function (label) {
  if (!label) return "";
  if (this.twoChars) {
   if (this.label.indexOf(" ") > -1) {
    var matches = this.label.match(/\b(\w)/g);
    return matches[0] + matches[1];
   }
   else {
    return label.substring(0, 2);
   }
  }
  return label.charAt(0);
 }
 , _onImgLoad: function (e) {
  e.currentTarget.hidden = false;
 }
 , _onImgError: function (e) {
  e.currentTarget.hidden = true;
 }
 , _parseColor: function (label) {
  var colors = this.colors ? this.colors : ["#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#795548", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722", "#9E9E9E", "#607D8B"];
  var hash = 0;
  for (var a = 0; a < label.length; a++) hash += (label.charCodeAt(a) << 5);
  if (hash >= colors.length) return colors[hash % colors.length];
  return colors[hash];
 }
});
