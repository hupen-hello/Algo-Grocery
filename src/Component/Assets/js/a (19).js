<>
  /*! modernizr 3.6.0 (Custom Build) | MIT */ /*
  https://modernizr.com/download/?-animation-cssanimations-csscolumns-customelements-flexbox-history-picture-pointerevents-postmessage-sizes-srcset-webgl-websockets-webworkers-addtest-atrule-domprefixes-hasevent-mq-prefixed-prefixedcss-prefixedcssvalue-prefixes-setclasses-shiv-testallprops-testprop-teststyles
  !*/ !(function (e, t, n) {"{"}
  function r(e, t) {"{"}
  return typeof e === t;
  {"}"}
  function o() {"{"}
  var e, t, n, o, i, a, s; for (var l in b) if (b.hasOwnProperty(l)) {"{"}
  if ( ((e = []), (t = b[l]), t.name &amp;&amp; (e.push(t.name.toLowerCase()),
  t.options &amp;&amp; t.options.aliases &amp;&amp; t.options.aliases.length)) )
  for (n = 0; n &lt; t.options.aliases.length; n++)
  e.push(t.options.aliases[n].toLowerCase()); for (o = r(t.fn, "function") ?
  t.fn() : t.fn, i = 0; i &lt; e.length; i++) (a = e[i]), (s = a.split(".")), 1
  === s.length ? (Modernizr[s[0]] = o) : (!Modernizr[s[0]] || Modernizr[s[0]]
  instanceof Boolean || (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])),
  (Modernizr[s[0]][s[1]] = o)), C.push((o ? "" : "no-") + s.join("-"));
  {"}"}
  {"}"}
  function i(e) {"{"}
  var t = _.className, n = Modernizr._config.classPrefix || ""; if ((T
  &amp;&amp; (t = t.baseVal), Modernizr._config.enableJSClass)) {"{"}
  var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)"); t = t.replace(r, "$1" + n
  + "js$2");
  {"}"}
  Modernizr._config.enableClasses &amp;&amp; ((t += " " + n + e.join(" " + n)),
  T ? (_.className.baseVal = t) : (_.className = t));
  {"}"}
  function a(e, t) {"{"}
  if ("object" == typeof e) for (var n in e) z(e, n) &amp;&amp; a(n, e[n]); else{" "}
  {"{"}e = e.toLowerCase(); var r = e.split("."), o = Modernizr[r[0]]; if ((2 ==
  r.length &amp;&amp; (o = o[r[1]]), "undefined" != typeof o)) return Modernizr;
  (t = "function" == typeof t ? t() : t), 1 == r.length ? (Modernizr[r[0]] = t)
  : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]]
  = new Boolean(Modernizr[r[0]])), (Modernizr[r[0]][r[1]] = t)), i([(t
  &amp;&amp; 0 != t ? "" : "no-") + r.join("-")]), Modernizr._trigger(e, t);
  {"}"}
  return Modernizr;
  {"}"}
  function s(e) {"{"}
  return e .replace(/([A-Z])/g, function (e, t) {"{"}
  return "-" + t.toLowerCase();
  {"}"}) .replace(/^ms-/, "-ms-");
  {"}"}
  function l() {"{"}
  return "function" != typeof t.createElement ? t.createElement(arguments[0]) :
  T ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) :
  t.createElement.apply(t, arguments);
  {"}"}
  function u(e) {"{"}
  return e .replace(/([a-z])-([a-z])/g, function (e, t, n) {"{"}
  return t + n.toUpperCase();
  {"}"}) .replace(/^-/, "");
  {"}"}
  function c(e, t) {"{"}
  return !!~("" + e).indexOf(t);
  {"}"}
  function f() {"{"}
  var e = t.body; return e || ((e = l(T ? "svg" : "body")), (e.fake = !0)), e;
  {"}"}
  function d(e, n, r, o) {"{"}
  var i, a, s, u, c = "modernizr", d = l("div"), p = f(); if (parseInt(r, 10))
  for (; r--; ) (s = l("div")), (s.id = o ? o[r] : c + (r + 1)),
  d.appendChild(s); return ( (i = l("style")), (i.type = "text/css"), (i.id =
  "s" + c), (p.fake ? p : d).appendChild(i), p.appendChild(d), i.styleSheet ?
  (i.styleSheet.cssText = e) : i.appendChild(t.createTextNode(e)), (d.id = c),
  p.fake &amp;&amp; ((p.style.background = ""), (p.style.overflow = "hidden"),
  (u = _.style.overflow), (_.style.overflow = "hidden"), _.appendChild(p)), (a =
  n(d, e)), p.fake ? (p.parentNode.removeChild(p), (_.style.overflow = u),
  _.offsetHeight) : d.parentNode.removeChild(d), !!a );
  {"}"}
  function p(e, t) {"{"}
  return function () {"{"}
  return e.apply(t, arguments);
  {"}"};{"}"}
  function m(e, t, n) {"{"}
  var o; for (var i in e) if (e[i] in t) return n === !1 ? e[i] : ((o =
  t[e[i]]), r(o, "function") ? p(o, n || t) : o); return !1;
  {"}"}
  function h(t, n, r) {"{"}
  var o; if ("getComputedStyle" in e) {"{"}o = getComputedStyle.call(e, t, n);
  var i = e.console; if (null !== o) r &amp;&amp; (o = o.getPropertyValue(r));
  else if (i) {"{"}
  var a = i.error ? "error" : "log"; i[a].call( i, "getComputedStyle returning
  null, its possible modernizr test results are inaccurate" );
  {"}"}
  {"}"} else o = !n &amp;&amp; t.currentStyle &amp;&amp; t.currentStyle[r];
  return o;
  {"}"}
  function v(t, r) {"{"}
  var o = t.length; if ("CSS" in e &amp;&amp; "supports" in e.CSS) {"{"}
  for (; o--; ) if (e.CSS.supports(s(t[o]), r)) return !0; return !1;
  {"}"}
  if ("CSSSupportsRule" in e) {"{"}
  for (var i = []; o--; ) i.push("(" + s(t[o]) + ":" + r + ")"); return ( (i =
  i.join(" or ")), d( "@supports (" + i + ") {"{"} #modernizr {"{"} position:
  absolute; {"}"} {"}"}", function (e) {"{"}
  return "absolute" == h(e, null, "position");
  {"}"}) );
  {"}"}
  return n;
  {"}"}
  function g(e, t, o, i) {"{"}
  function a() {"{"}f &amp;&amp; (delete R.style, delete R.modElem);
  {"}"}
  if (((i = r(i, "undefined") ? !1 : i), !r(o, "undefined"))) {"{"}
  var s = v(e, o); if (!r(s, "undefined")) return s;
  {"}"}
  for ( var f, d, p, m, h, g = ["modernizr", "tspan", "samp"]; !R.style
  &amp;&amp; g.length; ) (f = !0), (R.modElem = l(g.shift())), (R.style =
  R.modElem.style); for (p = e.length, d = 0; p &gt; d; d++) if ( ((m = e[d]),
  (h = R.style[m]), c(m, "-") &amp;&amp; (m = u(m)), R.style[m] !== n) ) {"{"}
  if (i || r(o, "undefined")) return a(), "pfx" == t ? m : !0; try {"{"}
  R.style[m] = o;
  {"}"} catch (y) {"{"}
  {"}"}
  if (R.style[m] != h) return a(), "pfx" == t ? m : !0;
  {"}"}
  return a(), !1;
  {"}"}
  function y(e, t, n, o, i) {"{"}
  var a = e.charAt(0).toUpperCase() + e.slice(1), s = (e + " " + B.join(a + " ")
  + a).split(" "); return r(t, "string") || r(t, "undefined") ? g(s, t, o, i) :
  ((s = (e + " " + P.join(a + " ") + a).split(" ")), m(s, t, n));
  {"}"}
  function A(e, t, r) {"{"}
  return y(e, n, n, t, r);
  {"}"}
  var C = [], b = [], S = {"{"}
  _version: "3.6.0", _config: {"{"}
  classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0,
  {"}"}, _q: [], on: function (e, t) {"{"}
  var n = this; setTimeout(function () {"{"}
  t(n[e]);
  {"}"}, 0);
  {"}"}, addTest: function (e, t, n) {"{"}
  b.push({"{"} name: e, fn: t, options: n {"}"});
  {"}"}, addAsyncTest: function (e) {"{"}
  b.push({"{"} name: null, fn: e {"}"});
  {"}"},{"}"}, Modernizr = function () {"{"}
  {"}"}; (Modernizr.prototype = S), (Modernizr = new Modernizr()); var w = !1;
  try {"{"}w = "WebSocket" in e &amp;&amp; 2 === e.WebSocket.CLOSING;
  {"}"} catch (x) {"{"}
  {"}"}
  Modernizr.addTest("websockets", w), Modernizr.addTest("customelements",
  "customElements" in e), Modernizr.addTest("history", function () {"{"}
  var t = navigator.userAgent; return (-1 === t.indexOf("Android 2.") &amp;&amp;
  -1 === t.indexOf("Android 4.0")) || -1 === t.indexOf("Mobile Safari") || -1
  !== t.indexOf("Chrome") || -1 !== t.indexOf("Windows Phone") || "file:" ===
  location.protocol ? e.history &amp;&amp; "pushState" in e.history : !1;
  {"}"}), Modernizr.addTest("postmessage", "postMessage" in e),
  Modernizr.addTest("webworkers", "Worker" in e), Modernizr.addTest("picture",
  "HTMLPictureElement" in e); var E = S._config.usePrefixes ? " -webkit- -moz-
  -o- -ms- ".split(" ") : ["", ""]; S._prefixes = E; var _ = t.documentElement,
  T = "svg" === _.nodeName.toLowerCase(); T || !(function (e, t) {"{"}
  function n(e, t) {"{"}
  var n = e.createElement("p"), r = e.getElementsByTagName("head")[0] ||
  e.documentElement; return ( (n.innerHTML = "x
  <style dangerouslySetInnerHTML={{ __html: '" + t + "' }} />
  "), r.insertBefore(n.lastChild, r.firstChild) );
  {"}"}
  function r() {"{"}
  var e = A.elements; return "string" == typeof e ? e.split(" ") : e;
  {"}"}
  function o(e, t) {"{"}
  var n = A.elements; "string" != typeof n &amp;&amp; (n = n.join(" ")),
  "string" != typeof e &amp;&amp; (e = e.join(" ")), (A.elements = n + " " + e),
  u(t);
  {"}"}
  function i(e) {"{"}
  var t = y[e[v]]; return t || ((t = {"{"}
  {"}"}), g++, (e[v] = g), (y[g] = t)), t;
  {"}"}
  function a(e, n, r) {"{"}
  if ((n || (n = t), f)) return n.createElement(e); r || (r = i(n)); var o;
  return ( (o = r.cache[e] ? r.cache[e].cloneNode() : h.test(e) ? (r.cache[e] =
  r.createElem(e)).cloneNode() : r.createElem(e)), !o.canHaveChildren ||
  m.test(e) || o.tagUrn ? o : r.frag.appendChild(o) );
  {"}"}
  function s(e, n) {"{"}
  if ((e || (e = t), f)) return e.createDocumentFragment(); n = n || i(e); for (
  var o = n.frag.cloneNode(), a = 0, s = r(), l = s.length; l &gt; a; a++ )
  o.createElement(s[a]); return o;
  {"}"}
  function l(e, t) {"{"}
  t.cache || ((t.cache = {"{"}
  {"}"}), (t.createElem = e.createElement), (t.createFrag =
  e.createDocumentFragment), (t.frag = t.createFrag())), (e.createElement =
  function (n) {"{"}
  return A.shivMethods ? a(n, e, t) : t.createElem(n);
  {"}"}), (e.createDocumentFragment = Function( "h,f", "return function(){"{"}
  var n=f.cloneNode(),c=n.createElement;h.shivMethods&amp;&amp;(" + r() .join()
  .replace(/[\w\-:]+/g, function (e) {"{"}
  return ( t.createElem(e), t.frag.createElement(e), 'c("' + e + '")' );
  {"}"}) + ");return n{"}"}" )(A, t.frag));
  {"}"}
  function u(e) {"{"}e || (e = t); var r = i(e); return ( !A.shivCSS || c ||
  r.hasCSS || (r.hasCSS = !!n( e,
  "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section
  {"{"}display:block{"}"}mark{"{"}background:#FF0;color:#000{"}"}template{"{"}
  display:none{"}"}" )), f || l(e, r), e );
  {"}"}
  var c, f, d = "3.7.3", p = e.html5 || {"{"}
  {"}"}, m =
  /^&lt;|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, h =
  /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
  v = "_html5shiv", g = 0, y = {"{"}
  {"}"}; !(function () {"{"}
  try {"{"}
  var e = t.createElement("a"); (e.innerHTML = "<xyz />
  "), (c = "hidden" in e), (f = 1 == e.childNodes.length || (function () {"{"}
  t.createElement("a"); var e = t.createDocumentFragment(); return ( "undefined"
  == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment ||
  "undefined" == typeof e.createElement );
  {"}"})());
  {"}"} catch (n) {"{"}
  (c = !0), (f = !0);
  {"}"}
  {"}"})(); var A = {"{"}
  elements: p.elements || "abbr article aside audio bdi canvas data datalist
  details dialog figcaption figure footer header hgroup main mark meter nav
  output picture progress section summary template time video", version: d,
  shivCSS: p.shivCSS !== !1, supportsUnknownElements: f, shivMethods:
  p.shivMethods !== !1, type: "default", shivDocument: u, createElement: a,
  createDocumentFragment: s, addElements: o,
  {"}"}; (e.html5 = A), u(t), "object" == typeof module &amp;&amp;
  module.exports &amp;&amp; (module.exports = A);
  {"}"})("undefined" != typeof e ? e : this, t); var k = "Moz O ms Webkit", P =
  S._config.usePrefixes ? k.toLowerCase().split(" ") : []; S._domPrefixes = P;
  var z; !(function () {"{"}
  var e = {"{"}
  {"}"}.hasOwnProperty; z = r(e, "undefined") || r(e.call, "undefined") ?
  function (e, t) {"{"}
  return t in e &amp;&amp; r(e.constructor.prototype[t], "undefined");
  {"}"}: function (t, n) {"{"}
  return e.call(t, n);
  {"}"};{"}"})(), (S._l = {"{"}
  {"}"}), (S.on = function (e, t) {"{"}
  this._l[e] || (this._l[e] = []), this._l[e].push(t),
  Modernizr.hasOwnProperty(e) &amp;&amp; setTimeout(function () {"{"}
  Modernizr._trigger(e, Modernizr[e]);
  {"}"}, 0);
  {"}"}), (S._trigger = function (e, t) {"{"}
  if (this._l[e]) {"{"}
  var n = this._l[e]; setTimeout(function () {"{"}
  var e, r; for (e = 0; e &lt; n.length; e++) (r = n[e])(t);
  {"}"}, 0), delete this._l[e];
  {"}"}
  {"}"}), Modernizr._q.push(function () {"{"}
  S.addTest = a;
  {"}"}); var B = S._config.usePrefixes ? k.split(" ") : []; S._cssomPrefixes =
  B; var N = function (t) {"{"}
  var r, o = E.length, i = e.CSSRule; if ("undefined" == typeof i) return n; if
  (!t) return !1; if ( ((t = t.replace(/^@/, "")), (r = t.replace(/-/g,
  "_").toUpperCase() + "_RULE"), r in i) ) return "@" + t; for (var a = 0; o
  &gt; a; a++) {"{"}
  var s = E[a], l = s.toUpperCase() + "_" + r; if (l in i) return "@-" +
  s.toLowerCase() + "-" + t;
  {"}"}
  return !1;
  {"}"}; S.atRule = N; var O = (function () {"{"}
  function e(e, t) {"{"}
  var o; return e ? ((t &amp;&amp; "string" != typeof t) || (t = l(t || "div")),
  (e = "on" + e), (o = e in t), !o &amp;&amp; r &amp;&amp; (t.setAttribute || (t
  = l("div")), t.setAttribute(e, ""), (o = "function" == typeof t[e]), t[e] !==
  n &amp;&amp; (t[e] = n), t.removeAttribute(e)), o) : !1;
  {"}"}
  var r = !("onblur" in t.documentElement); return e;
  {"}"})(); (S.hasEvent = O), Modernizr.addTest("pointerevents", function (){" "}
  {"{"}
  var e = !1, t = P.length; for (e = Modernizr.hasEvent("pointerdown"); t--
  &amp;&amp; !e; ) O(P[t] + "pointerdown") &amp;&amp; (e = !0); return e;
  {"}"}); var L = function (e, t) {"{"}
  var n = !1, r = l("div"), o = r.style; if (e in o) {"{"}
  var i = P.length; for (o[e] = t, n = o[e]; i-- &amp;&amp; !n; ) (o[e] = "-" +
  P[i] + "-" + t), (n = o[e]);
  {"}"}
  return "" === n &amp;&amp; (n = !1), n;
  {"}"}; (S.prefixedCSSValue = L), Modernizr.addTest("webanimations", "animate"
  in l("div")), Modernizr.addTest("webgl", function () {"{"}
  var t = l("canvas"), n = "probablySupportsContext" in t ?
  "probablySupportsContext" : "supportsContext"; return n in t ? t[n]("webgl")
  || t[n]("experimental-webgl") : "WebGLRenderingContext" in e;
  {"}"}), Modernizr.addAsyncTest(function () {"{"}
  var e, t, n, r = l("img"), o = "sizes" in r; !o &amp;&amp; "srcset" in r ? ((t
  =
  "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw=="),
  (e =
  "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),
  (n = function () {"{"}
  a("sizes", 2 == r.width);
  {"}"}), (r.onload = n), (r.onerror = n), r.setAttribute("sizes", "9px"),
  (r.srcset = e + " 1w," + t + " 8w"), (r.src = e)) : a("sizes", o);
  {"}"}), Modernizr.addTest("srcset", "srcset" in l("img")); var j = (function
  () {"{"}
  var t = e.matchMedia || e.msMatchMedia; return t ? function (e) {"{"}
  var n = t(e); return (n &amp;&amp; n.matches) || !1;
  {"}"}: function (t) {"{"}
  var n = !1; return ( d( "@media " + t + " {"{"} #modernizr {"{"} position:
  absolute; {"}"} {"}"}", function (t) {"{"}n = "absolute" ==
  (e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle ).position;
  {"}"}
  ), n );
  {"}"};{"}"})(); S.mq = j; var M = ((S.testStyles = d), {"{"} elem:
  l("modernizr") {"}"}); Modernizr._q.push(function () {"{"}
  delete M.elem;
  {"}"}); var R = {"{"} style: M.elem.style {"}"}; Modernizr._q.unshift(function
  () {"{"}
  delete R.style;
  {"}"}); S.testProp = function (e, t, r) {"{"}
  return g([e], n, t, r);
  {"}"}; S.testAllProps = y; var F = (S.prefixed = function (e, t, n) {"{"}
  return 0 === e.indexOf("@") ? N(e) : (-1 != e.indexOf("-") &amp;&amp; (e =
  u(e)), t ? y(e, t, n) : y(e, "pfx"));
  {"}"}); S.prefixedCSS = function (e) {"{"}
  var t = F(e); return t &amp;&amp; s(t);
  {"}"}; (S.testAllProps = A), Modernizr.addTest("flexbox", A("flexBasis",
  "1px", !0)), Modernizr.addTest("cssanimations", A("animationName", "a", !0)),
  (function () {"{"}
  Modernizr.addTest("csscolumns", function () {"{"}
  var e = !1, t = A("columnCount"); try {"{"}
  (e = !!t), e &amp;&amp; (e = new Boolean(e));
  {"}"} catch (n) {"{"}
  {"}"}
  return e;
  {"}"}); for ( var e, t, n = [ "Width", "Span", "Fill", "Gap", "Rule",
  "RuleColor", "RuleStyle", "RuleWidth", "BreakBefore", "BreakAfter",
  "BreakInside", ], r = 0; r &lt; n.length; r++ ) (e = n[r].toLowerCase()), (t =
  A("column" + n[r])), ("breakbefore" === e || "breakafter" === e ||
  "breakinside" == e) &amp;&amp; (t = t || A(n[r])),
  Modernizr.addTest("csscolumns." + e, t);
  {"}"})(), o(), i(C), delete S.addTest, delete S.addAsyncTest; for (var D = 0;
  D &lt; Modernizr._q.length; D++) Modernizr._q[D](); e.Modernizr = Modernizr;
  {"}"})(window, document);
</>
