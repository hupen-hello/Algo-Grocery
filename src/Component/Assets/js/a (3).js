<>
  /*! * imagesLoaded PACKAGED v4.1.1 * JavaScript is all like "You images are
  done yet or what?" * MIT License */ !(function (t, e) {"{"}
  "function" == typeof define &amp;&amp; define.amd ?
  define("ev-emitter/ev-emitter", e) : "object" == typeof module &amp;&amp;
  module.exports ? (module.exports = e()) : (t.EvEmitter = e());
  {"}"})("undefined" != typeof window ? window : this, function () {"{"}
  function t() {"{"}
  {"}"}
  var e = t.prototype; return ( (e.on = function (t, e) {"{"}
  if (t &amp;&amp; e) {"{"}
  var i = (this._events = this._events || {"{"}
  {"}"}), n = (i[t] = i[t] || []); return -1 == n.indexOf(e) &amp;&amp;
  n.push(e), this;
  {"}"}
  {"}"}), (e.once = function (t, e) {"{"}
  if (t &amp;&amp; e) {"{"}
  this.on(t, e); var i = (this._onceEvents = this._onceEvents || {"{"}
  {"}"}), n = (i[t] = i[t] || {"{"}
  {"}"}); return (n[e] = !0), this;
  {"}"}
  {"}"}), (e.off = function (t, e) {"{"}
  var i = this._events &amp;&amp; this._events[t]; if (i &amp;&amp; i.length){" "}
  {"{"}
  var n = i.indexOf(e); return -1 != n &amp;&amp; i.splice(n, 1), this;
  {"}"}
  {"}"}), (e.emitEvent = function (t, e) {"{"}
  var i = this._events &amp;&amp; this._events[t]; if (i &amp;&amp; i.length){" "}
  {"{"}
  var n = 0, o = i[n]; e = e || []; for (var r = this._onceEvents &amp;&amp;
  this._onceEvents[t]; o; ) {"{"}
  var s = r &amp;&amp; r[o]; s &amp;&amp; (this.off(t, o), delete r[o]),
  o.apply(this, e), (n += s ? 0 : 1), (o = i[n]);
  {"}"}
  return this;
  {"}"}
  {"}"}), t );
  {"}"}), (function (t, e) {"{"}
  "use strict"; "function" == typeof define &amp;&amp; define.amd ?
  define(["ev-emitter/ev-emitter"], function (i) {"{"}
  return e(t, i);
  {"}"}) : "object" == typeof module &amp;&amp; module.exports ? (module.exports
  = e(t, require("ev-emitter"))) : (t.imagesLoaded = e(t, t.EvEmitter));
  {"}"})(window, function (t, e) {"{"}
  function i(t, e) {"{"}
  for (var i in e) t[i] = e[i]; return t;
  {"}"}
  function n(t) {"{"}
  var e = []; if (Array.isArray(t)) e = t; else if ("number" == typeof t.length)
  for (var i = 0; i &lt; t.length; i++) e.push(t[i]); else e.push(t); return e;
  {"}"}
  function o(t, e, r) {"{"}
  return this instanceof o ? ("string" == typeof t &amp;&amp; (t =
  document.querySelectorAll(t)), (this.elements = n(t)), (this.options = i({"{"}
  {"}"}, this.options)), "function" == typeof e ? (r = e) : i(this.options, e),
  r &amp;&amp; this.on("always", r), this.getImages(), h &amp;&amp;
  (this.jqDeferred = new h.Deferred()), void setTimeout( function () {"{"}
  this.check();
  {"}"}.bind(this) )) : new o(t, e, r);
  {"}"}
  function r(t) {"{"}
  this.img = t;
  {"}"}
  function s(t, e) {"{"}
  (this.url = t), (this.element = e), (this.img = new Image());
  {"}"}
  var h = t.jQuery, a = t.console; (o.prototype = Object.create(e.prototype)),
  (o.prototype.options = {"{"}
  {"}"}), (o.prototype.getImages = function () {"{"}
  (this.images = []), this.elements.forEach(this.addElementImages, this);
  {"}"}), (o.prototype.addElementImages = function (t) {"{"}
  "IMG" == t.nodeName &amp;&amp; this.addImage(t), this.options.background ===
  !0 &amp;&amp; this.addElementBackgroundImages(t); var e = t.nodeType; if (e
  &amp;&amp; d[e]) {"{"}
  for (var i = t.querySelectorAll("img"), n = 0; n &lt; i.length; n++) {"{"}
  var o = i[n]; this.addImage(o);
  {"}"}
  if ("string" == typeof this.options.background) {"{"}
  var r = t.querySelectorAll(this.options.background); for (n = 0; n &lt;
  r.length; n++) {"{"}
  var s = r[n]; this.addElementBackgroundImages(s);
  {"}"}
  {"}"}
  {"}"}
  {"}"}); var d = {"{"} 1: !0, 9: !0, 11: !0 {"}"}; return (
  (o.prototype.addElementBackgroundImages = function (t) {"{"}
  var e = getComputedStyle(t); if (e) for ( var i = /url\((['"])?(.*?)\1\)/gi, n
  = i.exec(e.backgroundImage); null !== n; ) {"{"}
  var o = n &amp;&amp; n[2]; o &amp;&amp; this.addBackground(o, t), (n =
  i.exec(e.backgroundImage));
  {"}"}
  {"}"}), (o.prototype.addImage = function (t) {"{"}
  var e = new r(t); this.images.push(e);
  {"}"}), (o.prototype.addBackground = function (t, e) {"{"}
  var i = new s(t, e); this.images.push(i);
  {"}"}), (o.prototype.check = function () {"{"}
  function t(t, i, n) {"{"}
  setTimeout(function () {"{"}
  e.progress(t, i, n);
  {"}"});
  {"}"}
  var e = this; return ( (this.progressedCount = 0), (this.hasAnyBroken = !1),
  this.images.length ? void this.images.forEach(function (e) {"{"}
  e.once("progress", t), e.check();
  {"}"}) : void this.complete() );
  {"}"}), (o.prototype.progress = function (t, e, i) {"{"}
  this.progressedCount++, (this.hasAnyBroken = this.hasAnyBroken ||
  !t.isLoaded), this.emitEvent("progress", [this, t, e]), this.jqDeferred
  &amp;&amp; this.jqDeferred.notify &amp;&amp; this.jqDeferred.notify(this, t),
  this.progressedCount == this.images.length &amp;&amp; this.complete(),
  this.options.debug &amp;&amp; a &amp;&amp; a.log("progress: " + i, t, e);
  {"}"}), (o.prototype.complete = function () {"{"}
  var t = this.hasAnyBroken ? "fail" : "done"; if ( ((this.isComplete = !0),
  this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred)
  ) {"{"}
  var e = this.hasAnyBroken ? "reject" : "resolve"; this.jqDeferred[e](this);
  {"}"}
  {"}"}), (r.prototype = Object.create(e.prototype)), (r.prototype.check =
  function () {"{"}
  var t = this.getIsImageComplete(); return t ? void this.confirm(0 !==
  this.img.naturalWidth, "naturalWidth") : ((this.proxyImage = new Image()),
  this.proxyImage.addEventListener("load", this),
  this.proxyImage.addEventListener("error", this),
  this.img.addEventListener("load", this), this.img.addEventListener("error",
  this), void (this.proxyImage.src = this.img.src));
  {"}"}), (r.prototype.getIsImageComplete = function () {"{"}
  return this.img.complete &amp;&amp; void 0 !== this.img.naturalWidth;
  {"}"}), (r.prototype.confirm = function (t, e) {"{"}
  (this.isLoaded = t), this.emitEvent("progress", [this, this.img, e]);
  {"}"}), (r.prototype.handleEvent = function (t) {"{"}
  var e = "on" + t.type; this[e] &amp;&amp; this[e](t);
  {"}"}), (r.prototype.onload = function () {"{"}
  this.confirm(!0, "onload"), this.unbindEvents();
  {"}"}), (r.prototype.onerror = function () {"{"}
  this.confirm(!1, "onerror"), this.unbindEvents();
  {"}"}), (r.prototype.unbindEvents = function () {"{"}
  this.proxyImage.removeEventListener("load", this),
  this.proxyImage.removeEventListener("error", this),
  this.img.removeEventListener("load", this),
  this.img.removeEventListener("error", this);
  {"}"}), (s.prototype = Object.create(r.prototype)), (s.prototype.check =
  function () {"{"}
  this.img.addEventListener("load", this), this.img.addEventListener("error",
  this), (this.img.src = this.url); var t = this.getIsImageComplete(); t
  &amp;&amp; (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
  this.unbindEvents());
  {"}"}), (s.prototype.unbindEvents = function () {"{"}
  this.img.removeEventListener("load", this),
  this.img.removeEventListener("error", this);
  {"}"}), (s.prototype.confirm = function (t, e) {"{"}
  (this.isLoaded = t), this.emitEvent("progress", [this, this.element, e]);
  {"}"}), (o.makeJQueryPlugin = function (e) {"{"}
  (e = e || t.jQuery), e &amp;&amp; ((h = e), (h.fn.imagesLoaded = function (t,
  e) {"{"}
  var i = new o(this, t, e); return i.jqDeferred.promise(h(this));
  {"}"}));
  {"}"}), o.makeJQueryPlugin(), o );
  {"}"});
</>
