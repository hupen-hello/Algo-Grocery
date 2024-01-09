<>
  /*! jQuery Migrate v3.3.0 | (c) OpenJS Foundation and other contributors |
  jquery.org/license */ "undefined" == typeof jQuery.migrateMute &amp;&amp;
  (jQuery.migrateMute = !0), (function (t) {"{"}
  "use strict"; "function" == typeof define &amp;&amp; define.amd ?
  define(["jquery"], function (e) {"{"}
  return t(e, window);
  {"}"}) : "object" == typeof module &amp;&amp; module.exports ? (module.exports
  = t(require("jquery"), window)) : t(jQuery, window);
  {"}"})(function (s, n) {"{"}
  "use strict"; function e(e) {"{"}
  return ( 0 &lt;= (function (e, t) {"{"}
  var r, n = /^(\d+)\.(\d+)\.(\d+)/, i = n.exec(e) || [], o = n.exec(t) || [];
  for (r = 1; r &lt;= 3; r++) {"{"}
  if (+i[r] &gt; +o[r]) return 1; if (+i[r] &lt; +o[r]) return -1;
  {"}"}
  return 0;
  {"}"})(s.fn.jquery, e) );
  {"}"}
  (s.migrateVersion = "3.3.0"), n.console &amp;&amp; n.console.log &amp;&amp;
  ((s &amp;&amp; e("3.0.0")) || n.console.log("JQMIGRATE: jQuery 3.0.0+
  REQUIRED"), s.migrateWarnings &amp;&amp; n.console.log("JQMIGRATE: Migrate
  plugin loaded multiple times"), n.console.log( "JQMIGRATE: Migrate is
  installed" + (s.migrateMute ? "" : " with logging active") + ", version " +
  s.migrateVersion )); var r = {"{"}
  {"}"}; function u(e) {"{"}
  var t = n.console; (s.migrateDeduplicateWarnings &amp;&amp; r[e]) || ((r[e] =
  !0), s.migrateWarnings.push(e), t &amp;&amp; t.warn &amp;&amp; !s.migrateMute
  &amp;&amp; (t.warn("JQMIGRATE: " + e), s.migrateTrace &amp;&amp; t.trace
  &amp;&amp; t.trace()));
  {"}"}
  function t(e, t, r, n) {"{"}
  Object.defineProperty(e, t, {"{"}
  configurable: !0, enumerable: !0, get: function () {"{"}
  return u(n), r;
  {"}"}, set: function (e) {"{"}
  u(n), (r = e);
  {"}"},{"}"});
  {"}"}
  function i(e, t, r, n) {"{"}
  e[t] = function () {"{"}
  return u(n), r.apply(this, arguments);
  {"}"};{"}"}
  (s.migrateDeduplicateWarnings = !0), (s.migrateWarnings = []), void 0 ===
  s.migrateTrace &amp;&amp; (s.migrateTrace = !0), (s.migrateReset = function (){" "}
  {"{"}
  (r = {"{"}
  {"}"}), (s.migrateWarnings.length = 0);
  {"}"}), "BackCompat" === n.document.compatMode &amp;&amp; u("jQuery is not
  compatible with Quirks Mode"); var o, a = {"{"}
  {"}"}, c = s.fn.init, d = s.find, l =
  /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/, p =
  /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g, f =
  /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g; for (o in ((s.fn.init = function (e){" "}
  {"{"}
  var t = Array.prototype.slice.call(arguments); return ( "string" == typeof e
  &amp;&amp; "#" === e &amp;&amp; (u("jQuery( '#' ) is not a valid selector"),
  (t[0] = [])), c.apply(this, t) );
  {"}"}), (s.fn.init.prototype = s.fn), (s.find = function (t) {"{"}
  var r = Array.prototype.slice.call(arguments); if ("string" == typeof t
  &amp;&amp; l.test(t)) try {"{"}
  n.document.querySelector(t);
  {"}"} catch (e) {"{"}t = t.replace(p, function (e, t, r, n) {"{"}
  return "[" + t + r + '"' + n + '"]';
  {"}"}); try {"{"}
  n.document.querySelector(t), u("Attribute selector with '#' must be quoted: "
  + r[0]), (r[0] = t);
  {"}"} catch (e) {"{"}
  u("Attribute selector with '#' was not fixed: " + r[0]);
  {"}"}
  {"}"}
  return d.apply(this, r);
  {"}"}), d)) Object.prototype.hasOwnProperty.call(d, o) &amp;&amp; (s.find[o] =
  d[o]); if ( (i( s.fn, "size", function () {"{"}
  return this.length;
  {"}"}, "jQuery.fn.size() is deprecated and removed; use the .length property"
  ), i( s, "parseJSON", function () {"{"}
  return JSON.parse.apply(null, arguments);
  {"}"}, "jQuery.parseJSON is deprecated; use JSON.parse" ), i(s, "holdReady",
  s.holdReady, "jQuery.holdReady is deprecated"), i( s, "unique", s.uniqueSort,
  "jQuery.unique is deprecated; use jQuery.uniqueSort" ), t( s.expr, "filters",
  s.expr.pseudos, "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"
  ), t( s.expr, ":", s.expr.pseudos, "jQuery.expr[':'] is deprecated; use
  jQuery.expr.pseudos" ), e("3.1.1") &amp;&amp; i( s, "trim", function (e) {"{"}
  return null == e ? "" : (e + "").replace(f, "");
  {"}"}, "jQuery.trim is deprecated; use String.prototype.trim" ), e("3.2.0")
  &amp;&amp; i( s, "nodeName", function (e, t) {"{"}
  return e.nodeName &amp;&amp; e.nodeName.toLowerCase() === t.toLowerCase();
  {"}"}, "jQuery.nodeName is deprecated" ), e("3.3.0") &amp;&amp; (i( s,
  "isNumeric", function (e) {"{"}
  var t = typeof e; return ( ("number" == t || "string" == t) &amp;&amp;
  !isNaN(e - parseFloat(e)) );
  {"}"}, "jQuery.isNumeric() is deprecated" ), s.each( "Boolean Number String
  Function Array Date RegExp Object Error Symbol".split( " " ), function (e, t){" "}
  {"{"}
  a["[object " + t + "]"] = t.toLowerCase();
  {"}"}
  ), i( s, "type", function (e) {"{"}
  return null == e ? e + "" : "object" == typeof e || "function" == typeof e ?
  a[Object.prototype.toString.call(e)] || "object" : typeof e;
  {"}"}, "jQuery.type is deprecated" ), i( s, "isFunction", function (e) {"{"}
  return "function" == typeof e;
  {"}"}, "jQuery.isFunction() is deprecated" ), i( s, "isWindow", function (e){" "}
  {"{"}
  return null != e &amp;&amp; e === e.window;
  {"}"}, "jQuery.isWindow() is deprecated" ), i( s, "isArray", Array.isArray,
  "jQuery.isArray is deprecated; use Array.isArray" )), s.ajax) ) {"{"}
  var y = s.ajax; s.ajax = function () {"{"}
  var e = y.apply(this, arguments); return ( e.promise &amp;&amp; (i(e,
  "success", e.done, "jQXHR.success is deprecated and removed"), i(e, "error",
  e.fail, "jQXHR.error is deprecated and removed"), i( e, "complete", e.always,
  "jQXHR.complete is deprecated and removed" )), e );
  {"}"};{"}"}
  var m = s.fn.removeAttr, g = s.fn.toggleClass, h = /\S+/g; function v(e) {"{"}
  return e.replace(/-([a-z])/g, function (e, t) {"{"}
  return t.toUpperCase();
  {"}"});
  {"}"}
  s.fn.removeAttr = function (e) {"{"}
  var r = this; return ( s.each(e.match(h), function (e, t) {"{"}
  s.expr.match.bool.test(t) &amp;&amp; (u("jQuery.fn.removeAttr no longer sets
  boolean properties: " + t), r.prop(t, !1));
  {"}"}), m.apply(this, arguments) );
  {"}"}; var j, Q = !(s.fn.toggleClass = function (t) {"{"}
  return void 0 !== t &amp;&amp; "boolean" != typeof t ? g.apply(this,
  arguments) : (u("jQuery.fn.toggleClass( boolean ) is deprecated"),
  this.each(function () {"{"}
  var e = (this.getAttribute &amp;&amp; this.getAttribute("class")) || ""; e
  &amp;&amp; s.data(this, "__className__", e), this.setAttribute &amp;&amp;
  this.setAttribute( "class", e || !1 === t ? "" : s.data(this, "__className__")
  || "" );
  {"}"}));
  {"}"}), b = /^[a-z]/, w =
  /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
  s.swap &amp;&amp; s.each(["height", "width", "reliableMarginRight"], function
  (e, t) {"{"}
  var r = s.cssHooks[t] &amp;&amp; s.cssHooks[t].get; r &amp;&amp;
  (s.cssHooks[t].get = function () {"{"}
  var e; return (Q = !0), (e = r.apply(this, arguments)), (Q = !1), e;
  {"}"});
  {"}"}), (s.swap = function (e, t, r, n) {"{"}
  var i, o, a = {"{"}
  {"}"}; for (o in (Q || u("jQuery.swap() is undocumented and deprecated"), t))
  (a[o] = e.style[o]), (e.style[o] = t[o]); for (o in ((i = r.apply(e, n ||
  [])), t)) e.style[o] = a[o]; return i;
  {"}"}), e("3.4.0") &amp;&amp; "undefined" != typeof Proxy &amp;&amp;
  (s.cssProps = new Proxy(s.cssProps || {"{"}
  {"}"}, {"{"}
  set: function () {"{"}
  return ( u("JQMIGRATE: jQuery.cssProps is deprecated"),
  Reflect.set.apply(this, arguments) );
  {"}"},{"}"})), s.cssNumber || (s.cssNumber = {"{"}
  {"}"}), (j = s.fn.css), (s.fn.css = function (e, t) {"{"}
  var r = this; return ( "string" != typeof e &amp;&amp; s.each(e, function (e,
  t) {"{"}
  s.fn.css.call(r, e, t);
  {"}"}), "number" != typeof t || (function (e) {"{"}
  return b.test(e) &amp;&amp; w.test(e[0].toUpperCase() + e.slice(1));
  {"}"})(v(e)) || u("Use of number-typed values is deprecated in
  jQuery.fn.css"), j.apply(this, arguments) );
  {"}"}); var x = s.data; if ( ((s.data = function (e, t, r) {"{"}
  var n, i, o; if (t &amp;&amp; "object" == typeof t &amp;&amp; 2 ===
  arguments.length) {"{"}
  for (o in ((n = s.hasData(e) &amp;&amp; x.call(this, e)), (i = {"{"}
  {"}"}), t)) o !== v(o) ? (u("jQuery.data() always sets/gets camelCased names:
  " + o), (n[o] = t[o])) : (i[o] = t[o]); return x.call(this, e, i), t;
  {"}"}
  return t &amp;&amp; "string" == typeof t &amp;&amp; t !== v(t) &amp;&amp; (n =
  s.hasData(e) &amp;&amp; x.call(this, e)) &amp;&amp; t in n ? (u("jQuery.data()
  always sets/gets camelCased names: " + t), 2 &lt; arguments.length &amp;&amp;
  (n[t] = r), n[t]) : x.apply(this, arguments);
  {"}"}), s.fx) ) {"{"}
  var A, k, M = s.Tween.prototype.run, S = function (e) {"{"}
  return e;
  {"}"}; (s.Tween.prototype.run = function () {"{"}1 &lt;
  s.easing[this.easing].length &amp;&amp; (u( "'jQuery.easing." +
  this.easing.toString() + "' should use only one argument" ),
  (s.easing[this.easing] = S)), M.apply(this, arguments);
  {"}"}), (A = s.fx.interval || 13), (k = "jQuery.fx.interval is deprecated"),
  n.requestAnimationFrame &amp;&amp; Object.defineProperty(s.fx, "interval",{" "}
  {"{"}
  configurable: !0, enumerable: !0, get: function () {"{"}
  return n.document.hidden || u(k), A;
  {"}"}, set: function (e) {"{"}
  u(k), (A = e);
  {"}"},{"}"});
  {"}"}
  var H = s.fn.load, R = s.event.add, N = s.event.fix; (s.event.props = []),
  (s.event.fixHooks = {"{"}
  {"}"}), t( s.event.props, "concat", s.event.props.concat,
  "jQuery.event.props.concat() is deprecated and removed" ), (s.event.fix =
  function (e) {"{"}
  var t, r = e.type, n = this.fixHooks[r], i = s.event.props; if (i.length){" "}
  {"{"}
  u("jQuery.event.props are deprecated and removed: " + i.join()); while
  (i.length) s.event.addProp(i.pop());
  {"}"}
  if ( n &amp;&amp; !n._migrated_ &amp;&amp; ((n._migrated_ = !0),
  u("jQuery.event.fixHooks are deprecated and removed: " + r), (i = n.props)
  &amp;&amp; i.length) ) while (i.length) s.event.addProp(i.pop()); return (t =
  N.call(this, e)), n &amp;&amp; n.filter ? n.filter(t, e) : t;
  {"}"}), (s.event.add = function (e, t) {"{"}
  return ( e === n &amp;&amp; "load" === t &amp;&amp; "complete" ===
  n.document.readyState &amp;&amp; u("jQuery(window).on('load'...) called after
  load event occurred"), R.apply(this, arguments) );
  {"}"}), s.each(["load", "unload", "error"], function (e, t) {"{"}
  s.fn[t] = function () {"{"}
  var e = Array.prototype.slice.call(arguments, 0); return "load" === t
  &amp;&amp; "string" == typeof e[0] ? H.apply(this, e) : (u("jQuery.fn." + t +
  "() is deprecated"), e.splice(0, 0, t), arguments.length ? this.on.apply(this,
  e) : (this.triggerHandler.apply(this, e), this));
  {"}"};{"}"}), s.each( "blur focus focusin focusout resize scroll click
  dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave
  change select submit keydown keypress keyup contextmenu".split( " " ),
  function (e, r) {"{"}
  s.fn[r] = function (e, t) {"{"}
  return ( u("jQuery.fn." + r + "() event shorthand is deprecated"), 0 &lt;
  arguments.length ? this.on(r, null, e, t) : this.trigger(r) );
  {"}"};{"}"}
  ), s(function () {"{"}
  s(n.document).triggerHandler("ready");
  {"}"}), (s.event.special.ready = {"{"}
  setup: function () {"{"}
  this === n.document &amp;&amp; u("'ready' event is deprecated");
  {"}"},{"}"}), s.fn.extend({"{"}
  bind: function (e, t, r) {"{"}
  return u("jQuery.fn.bind() is deprecated"), this.on(e, null, t, r);
  {"}"}, unbind: function (e, t) {"{"}
  return u("jQuery.fn.unbind() is deprecated"), this.off(e, null, t);
  {"}"}, delegate: function (e, t, r, n) {"{"}
  return u("jQuery.fn.delegate() is deprecated"), this.on(t, e, r, n);
  {"}"}, undelegate: function (e, t, r) {"{"}
  return ( u("jQuery.fn.undelegate() is deprecated"), 1 === arguments.length ?
  this.off(e, "**") : this.off(t, e || "**", r) );
  {"}"}, hover: function (e, t) {"{"}
  return ( u("jQuery.fn.hover() is deprecated"), this.on("mouseenter",
  e).on("mouseleave", t || e) );
  {"}"},{"}"}); function C(e) {"{"}
  var t = n.document.implementation.createHTMLDocument(""); return
  (t.body.innerHTML = e), t.body &amp;&amp; t.body.innerHTML;
  {"}"}
  function T(e) {"{"}
  var t = e.replace(P, "&lt;$1&gt;{/*$2*/}"); t !== e &amp;&amp; C(e) !== C(t)
  &amp;&amp; u("HTML tags must be properly nested and closed: " + e);
  {"}"}
  var P =
  /&lt;(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0&gt;\x20\t\r\n\f]*)[^&gt;]*)\/&gt;/gi,
  q = s.htmlPrefilter; (s.UNSAFE_restoreLegacyHtmlPrefilter = function () {"{"}
  s.htmlPrefilter = function (e) {"{"}
  return T(e), e.replace(P, "&lt;$1&gt;{/*$2*/}");
  {"}"};{"}"}), (s.htmlPrefilter = function (e) {"{"}
  return T(e), q(e);
  {"}"}); var D = s.fn.offset; if ( ((s.fn.offset = function () {"{"}
  var e, t = this[0]; if (t &amp;&amp; t.nodeType) return ( (e =
  (t.ownerDocument || n.document).documentElement), s.contains(e, t) ?
  D.apply(this, arguments) : (u( "jQuery.fn.offset() requires an element
  connected to a document" ),
  {"{"} top: 0, left: 0 {"}"}) ); u("jQuery.fn.offset() requires a valid DOM
  element");
  {"}"}), s.ajax) ) {"{"}
  var E = s.param; s.param = function (e, t) {"{"}
  var r = s.ajaxSettings &amp;&amp; s.ajaxSettings.traditional; return ( void 0
  === t &amp;&amp; r &amp;&amp; (u("jQuery.param() no longer uses
  jQuery.ajaxSettings.traditional"), (t = r)), E.call(this, e, t) );
  {"}"};{"}"}
  var _ = s.fn.andSelf || s.fn.addBack; if ( ((s.fn.andSelf = function () {"{"}
  return ( u( "jQuery.fn.andSelf() is deprecated and removed, use
  jQuery.fn.addBack()" ), _.apply(this, arguments) );
  {"}"}), s.Deferred) ) {"{"}
  var F = s.Deferred, O = [ [ "resolve", "done", s.Callbacks("once memory"),
  s.Callbacks("once memory"), "resolved", ], [ "reject", "fail",
  s.Callbacks("once memory"), s.Callbacks("once memory"), "rejected", ],
  ["notify", "progress", s.Callbacks("memory"), s.Callbacks("memory")], ];
  (s.Deferred = function (e) {"{"}
  var o = F(), a = o.promise(); return ( (o.pipe = a.pipe = function () {"{"}
  var i = arguments; return ( u("deferred.pipe() is deprecated"), s
  .Deferred(function (n) {"{"}
  s.each(O, function (e, t) {"{"}
  var r = "function" == typeof i[e] &amp;&amp; i[e]; o[t[1]](function () {"{"}
  var e = r &amp;&amp; r.apply(this, arguments); e &amp;&amp; "function" ==
  typeof e.promise ? e .promise() .done(n.resolve) .fail(n.reject)
  .progress(n.notify) : n[t[0] + "With"]( this === a ? n.promise() : this, r ?
  [e] : arguments );
  {"}"});
  {"}"}), (i = null);
  {"}"}) .promise() );
  {"}"}), e &amp;&amp; e.call(o, o), o );
  {"}"}), (s.Deferred.exceptionHook = F.exceptionHook);
  {"}"}
  return s;
  {"}"});
</>
