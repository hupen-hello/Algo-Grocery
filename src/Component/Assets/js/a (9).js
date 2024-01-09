<>
  /** * SyoTimer v.2.1.2 | under MIT licence *
  http://syomochkin.xyz/folio/syotimer/demo.html */ !(function (i, e) {"{"}
  "function" == typeof define &amp;&amp; define.amd ? define(["jquery"], i) :
  "object" == typeof module &amp;&amp; module.exports ? (module.exports =
  function (e, t) {"{"}
  return ( void 0 === t &amp;&amp; (t = "undefined" != typeof window ?
  require("jquery") : require("jquery")(e)), i(t), t );
  {"}"}) : i(e);
  {"}"})(function (l) {"{"}
  var m = "day", a = "hour", s = "minute", d = "second", n = {"{"} d: m, h: a,
  m: s, s: d {"}"}, u = {"{"}
  list: [d, s, a, m], next: function (e) {"{"}
  var t = this.list.indexOf(e); return t &lt; this.list.length &amp;&amp;
  this.list[t + 1];
  {"}"}, prev: function (e) {"{"}
  var t = this.list.indexOf(e); return 0 &lt; t &amp;&amp; this.list[t - 1];
  {"}"},{"}"}, o = {"{"}
  year: 2034, month: 7, day: 31, hour: 0, minute: 0, second: 0, timeZone:
  "local", ignoreTransferTime: !1, layout: "dhms", periodic: !1, periodInterval:
  7, periodUnit: "d", doubleNumbers: !0, effectType: "none", lang: "eng",
  headTitle: "", footTitle: "", afterDeadline: function (e) {"{"}
  e.bodyBlock.html( '
  <p style={{ fontSize: "1.2em" }}>The countdown is finished!</p>' );
  {"}"},{"}"}, r = {"{"} second: !1, minute: !1, hour: !1, day: !1 {"}"}, c ={" "}
  {"{"}
  init: function (e) {"{"}
  var t = l.extend({"{"}
  {"}"}, o, e || {"{"}
  {"}"}); (t.itemTypes = y.getItemTypesByLayout(t.layout)), (t._itemsHas =
  l.extend({"{"}
  {"}"}, r)); for (var i = 0; i &lt; t.itemTypes.length; i++)
  t._itemsHas[t.itemTypes[i]] = !0; return this.each(function () {"{"}
  l(this).data("syotimer-options", t), c._render.apply(this, []),
  c._perSecondHandler.apply(this, []);
  {"}"});
  {"}"}, _render: function () {"{"}
  for ( var e = l(this), t = e.data("syotimer-options"), i = y.getTimerItem(), n
  = l("
  <div>
    ", {"{"} class: "syotimer__head" {"}"}).html(t.headTitle), o = l("
    <div>
      ", {"{"} class: "syotimer__body" {"}"}), r = l("
      <div>
        ", {"{"} class: "syotimer__footer" {"}"}).html(t.footTitle), a = {"{"}
        {"}"}, s = 0; s &lt; t.itemTypes.length; s++ ) {"{"}
        var d = i.clone(); d.addClass("syotimer-cell_type_" + t.itemTypes[s]),
        o.append(d), (a[t.itemTypes[s]] = d);
        {"}"}
        var u = {"{"} headBlock: n, bodyBlock: o, footBlock: r {"}"};
        e.data("syotimer-blocks", u) .data("syotimer-items", a)
        .addClass("syotimer") .append(n) .append(o) .append(r);
        {"}"}, _perSecondHandler: function () {"{"}
        var e = l(this), t = e.data("syotimer-options"); l(".syotimer-cell &gt;
        .syotimer-cell__value", e).css("opacity", 1); var i = new Date(), n =
        new Date(t.year, t.month - 1, t.day, t.hour, t.minute, t.second), o =
        y.getDifferenceWithTimezone(i, n, t), r = y.getSecondsToDeadLine(o, t);
        0 &lt;= r ? (c._refreshUnitsDom.apply(this, [r]),
        c._applyEffectSwitch.apply(this, [t.effectType])) : ((e = l.extend(e,
        e.data("syotimer-blocks"))), t.afterDeadline(e));
        {"}"}, _refreshUnitsDom: function (e) {"{"}
        var t = l(this), i = t.data("syotimer-options"), n =
        t.data("syotimer-items"), o = i.itemTypes, r = y.getUnitsToDeadLine(e);
        i._itemsHas.day || (r.hour += 24 * r.day), i._itemsHas.hour || (r.minute
        += 60 * r.hour), i._itemsHas.minute || (r.second += 60 * r.minute); for
        (var a = 0; a &lt; o.length; a++) {"{"}
        var s = o[a], d = r[s], u = n[s]; u.data("syotimer-unit-value", d),
        l(".syotimer-cell__value", u).html( y.format2(d, s !== m &amp;&amp;
        i.doubleNumbers) ), l(".syotimer-cell__unit", u).html(
        l.syotimerLang.getNumeral(d, i.lang, s) );
        {"}"}
        {"}"}, _applyEffectSwitch: function (e, t) {"{"}t = t || d; var i, n, o,
        r = this, a = l(r); "none" === e ? setTimeout(function () {"{"}
        c._perSecondHandler.apply(r, []);
        {"}"}, 1e3) : "opacity" !== e || ((i = a.data("syotimer-items")[t])
        &amp;&amp; ((n = u.next(t)), (o = i.data("syotimer-unit-value")),
        l(".syotimer-cell__value", i).animate(
        {"{"} opacity: 0.1 {"}"}, 1e3, "linear", function () {"{"}
        c._perSecondHandler.apply(r, []);
        {"}"}
        ), n &amp;&amp; 0 === o &amp;&amp; c._applyEffectSwitch.apply(r, [e,
        n])));
        {"}"},{"}"}, y = {"{"}
        getTimerItem: function () {"{"}
        var e = l("
        <div>
          ", {"{"} class: "syotimer-cell__value", text: "0" {"}"}), t = l("
          <div>
            ", {"{"} class: "syotimer-cell__unit" {"}"}), i = l("
            <div>
              ", {"{"} class: "syotimer-cell" {"}"}); return
              i.append(e).append(t), i;
              {"}"}, getItemTypesByLayout: function (e) {"{"}
              for (var t = [], i = 0; i &lt; e.length; i++) t.push(n[e[i]]);
              return t;
              {"}"}, getSecondsToDeadLine: function (e, t) {"{"}
              var i, n, o, r, a = e / 1e3, a = Math.floor(a), s = t.periodic ?
              ((r = e / (1e3 * (o = y.getPeriodUnit(t.periodUnit)))), (r =
              Math.ceil(r)), (r = Math.abs(r)), 0 &lt;= a ? ((n = 0 === (n = r %
              t.periodInterval) ? t.periodInterval : n), --n) : (n =
              t.periodInterval - (r % t.periodInterval)), 0 == (i = a % o)
              &amp;&amp; a &lt; 0 &amp;&amp; n--, Math.abs(n * o + i)) : a;
              return s;
              {"}"}, getUnitsToDeadLine: function (e) {"{"}
              var t = m, i = {"{"}
              {"}"}; do {"{"}
              var n = y.getPeriodUnit(t); (i[t] = Math.floor(e / n)), (e %= n);
              {"}"} while ((t = u.prev(t))); return i;
              {"}"}, getPeriodUnit: function (e) {"{"}
              switch (e) {"{"}
              case "d": case m: return 86400; case "h": case a: return 3600;
              case "m": case s: return 60; case "s": case d: return 1;
              {"}"}
              {"}"}, getDifferenceWithTimezone: function (e, t, i) {"{"}
              var n = t.getTime() - e.getTime(), o = 0, r = 0; return ( "local"
              !== i.timeZone &amp;&amp; (o = 1e3 * (parseFloat(i.timeZone) *
              y.getPeriodUnit(a) - -e.getTimezoneOffset() *
              y.getPeriodUnit(s))), i.ignoreTransferTime &amp;&amp; (r = 1e3 *
              (-e.getTimezoneOffset() * y.getPeriodUnit(s) -
              -t.getTimezoneOffset() * y.getPeriodUnit(s))), n - (o + r) );
              {"}"}, format2: function (e, t) {"{"}
              return (t = !1 !== t), e &lt;= 9 &amp;&amp; t ? "0" + e : "" + e;
              {"}"},{"}"}, i = {"{"}
              setOption: function (e, t) {"{"}
              var i = l(this), n = i.data("syotimer-options");
              n.hasOwnProperty(e) &amp;&amp; ((n[e] = t),
              i.data("syotimer-options", n));
              {"}"},{"}"}; (l.fn.syotimer = function (e) {"{"}
              if ("string" == typeof e &amp;&amp; "setOption" === e) {"{"}
              var t = Array.prototype.slice.call(arguments, 1); return
              this.each(function () {"{"}
              i[e].apply(this, t);
              {"}"});
              {"}"}
              if (null == e || "object" == typeof e) return c.init.apply(this,
              [e]); l.error("SyoTimer. Error in call methods: methods is not
              exist");
              {"}"}), (l.syotimerLang = {"{"}
              rus: {"{"}
              second: ["секунда", "секунды", "секунд"], minute: ["минута",
              "минуты", "минут"], hour: ["час", "часа", "часов"], day: ["день",
              "дня", "дней"], handler: "rusNumeral",
              {"}"}, eng: {"{"}
              second: ["second", "seconds"], minute: ["minute", "minutes"],
              hour: ["hour", "hours"], day: ["day", "days"],
              {"}"}, por: {"{"}
              second: ["segundo", "segundos"], minute: ["minuto", "minutos"],
              hour: ["hora", "horas"], day: ["dia", "dias"],
              {"}"}, spa: {"{"}
              second: ["segundo", "segundos"], minute: ["minuto", "minutos"],
              hour: ["hora", "horas"], day: ["día", "días"],
              {"}"}, heb: {"{"}
              second: ["שניה", "שניות"], minute: ["דקה", "דקות"], hour: ["שעה",
              "שעות"], day: ["יום", "ימים"],
              {"}"}, universal: function (e) {"{"}
              return 1 === e ? 0 : 1;
              {"}"}, rusNumeral: function (e) {"{"}
              var t = 4 &lt; e % 100 &amp;&amp; e % 100 &lt; 20 ? 2 : [2, 0, 1,
              1, 1, 2][e % 10 &lt; 5 ? e % 10 : 5]; return t;
              {"}"}, getNumeral: function (e, t, i) {"{"}
              var n = this[l.syotimerLang[t].handler || "universal"](e); return
              l.syotimerLang[t][i][n];
              {"}"},{"}"});
              {"}"}, window.jQuery); //#
              sourceMappingURL=jquery.syotimer.min.js.map
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
