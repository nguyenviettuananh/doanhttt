! function(t, e, n) {
    function i(t, e) {
        return typeof t === e
    }

    function s() {
        var t, e, n, s, o, a, r;
        for (var l in y) {
            if (t = [], e = y[l], e.name && (t.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length))
                for (n = 0; n < e.options.aliases.length; n++) t.push(e.options.aliases[n].toLowerCase());
            for (s = i(e.fn, "function") ? e.fn() : e.fn, o = 0; o < t.length; o++) a = t[o], r = a.split("."), 1 === r.length ? S[r[0]] = s : 2 === r.length && (!S[r[0]] || S[r[0]] instanceof Boolean || (S[r[0]] = new Boolean(S[r[0]])), S[r[0]][r[1]] = s), v.push((s ? "" : "no-") + r.join("-"))
        }
    }

    function o(t) {
        var e = T.className,
            n = S._config.classPrefix || "",
            i = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
        e = e.replace(i, "$1" + n + "js$2"), S._config.enableClasses && (e += " " + n + t.join(" " + n), T.className = e)
    }

    function a() {
        var t = e.body;
        return t || (t = k("body"), t.fake = !0), t
    }

    function r(t, e, n, i) {
        var s, o, r, l, c = "modernizr",
            d = k("div"),
            u = a();
        if (parseInt(n, 10))
            for (; n--;) r = k("div"), r.id = i ? i[n] : c + (n + 1), d.appendChild(r);
        return s = ["\xad", '<style id="s', c, '">', t, "</style>"].join(""), d.id = c, (u.fake ? u : d).innerHTML += s, u.appendChild(d), u.fake && (u.style.background = "", u.style.overflow = "hidden", l = T.style.overflow, T.style.overflow = "hidden", T.appendChild(u)), o = e(d, t), u.fake ? (u.parentNode.removeChild(u), T.style.overflow = l, T.offsetHeight) : d.parentNode.removeChild(d), !!o
    }

    function l(t, e) {
        return !!~("" + t).indexOf(e)
    }

    function c(t) {
        return t.replace(/([a-z])-([a-z])/g, function(t, e, n) {
            return e + n.toUpperCase()
        }).replace(/^-/, "")
    }

    function d(t) {
        return t.replace(/([A-Z])/g, function(t, e) {
            return "-" + e.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function u(e, i) {
        var s = e.length;
        if ("CSS" in t && "supports" in t.CSS) {
            for (; s--;)
                if (t.CSS.supports(d(e[s]), i)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in t) {
            for (var o = []; s--;) o.push("(" + d(e[s]) + ":" + i + ")");
            return o = o.join(" or "), r("@supports (" + o + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == (t.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle).position
            })
        }
        return n
    }

    function h(t, e, s, o) {
        function a() {
            c && (delete x.style, delete x.modElem)
        }
        if (o = i(o, "undefined") ? !1 : o, !i(s, "undefined")) {
            var r = u(t, s);
            if (!i(r, "undefined")) return r
        }
        var c, d, h, p;
        x.style || (c = !0, x.modElem = k("modernizr"), x.style = x.modElem.style);
        for (d in t)
            if (h = t[d], p = x.style[h], !l(h, "-") && x.style[h] !== n) {
                if (o || i(s, "undefined")) return a(), "pfx" == e ? h : !0;
                try {
                    x.style[h] = s
                } catch (f) {}
                if (x.style[h] != p) return a(), "pfx" == e ? h : !0
            }
        return a(), !1
    }

    function p(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }

    function f(t, e, n) {
        var s;
        for (var o in t)
            if (t[o] in e) return n === !1 ? t[o] : (s = e[t[o]], i(s, "function") ? p(s, n || e) : s);
        return !1
    }

    function m(t, e, n, s, o) {
        var a = t.charAt(0).toUpperCase() + t.slice(1),
            r = (t + " " + C.join(a + " ") + a).split(" ");
        return i(e, "string") || i(e, "undefined") ? h(r, e, s, o) : (r = (t + " " + w.join(a + " ") + a).split(" "), f(r, e, n))
    }

    function g(t, e, i) {
        return m(t, n, n, e, i)
    }
    var v = [],
        y = [],
        b = {
            _version: "v3.0.0pre",
            _config: {
                classPrefix: "mz-",
                enableClasses: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(t, e) {
                setTimeout(function() {
                    e(this[t])
                }, 0)
            },
            addTest: function(t, e, n) {
                y.push({
                    name: t,
                    fn: e,
                    options: n
                })
            },
            addAsyncTest: function(t) {
                y.push({
                    name: null,
                    fn: t
                })
            }
        },
        S = function() {};
    S.prototype = b, S = new S, S.addTest("applicationcache", "applicationCache" in t), S.addTest("history", function() {
        var e = navigator.userAgent;
        return -1 === e.indexOf("Android 2.") && -1 === e.indexOf("Android 4.0") || -1 === e.indexOf("Mobile Safari") || -1 !== e.indexOf("Chrome") ? t.history && "pushState" in t.history : !1
    }), S.addTest("localstorage", function() {
        var t = "modernizr";
        try {
            return localStorage.setItem(t, t), localStorage.removeItem(t), !0
        } catch (e) {
            return !1
        }
    }), S.addTest("svg", !!e.createElementNS && !!e.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect);
    var E = b._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : [];
    b._prefixes = E;
    var T = e.documentElement,
        _ = "Webkit Moz O ms",
        w = b._config.usePrefixes ? _.toLowerCase().split(" ") : [];
    b._domPrefixes = w;
    var k = function() {
        return e.createElement.apply(e, arguments)
    };
    S.addTest("opacity", function() {
        var t = k("div"),
            e = t.style;
        return e.cssText = E.join("opacity:.55;"), /^0.55$/.test(e.opacity)
    }), S.addTest("rgba", function() {
        var t = k("div"),
            e = t.style;
        return e.cssText = "background-color:rgba(150,255,150,.5)", ("" + e.backgroundColor).indexOf("rgba") > -1
    });
    var L = b.testStyles = r,
        C = b._config.usePrefixes ? _.split(" ") : [];
    b._cssomPrefixes = C;
    var A = {
        elem: k("modernizr")
    };
    S._q.push(function() {
        delete A.elem
    });
    var x = {
        style: A.elem.style
    };
    S._q.unshift(function() {
        delete x.style
    });
    b.testProp = function(t, e, i) {
        return h([t], n, e, i)
    };
    b.testAllProps = m, b.testAllProps = g, S.addTest("backgroundsize", g("backgroundSize", "100%", !0)), S.addTest("cssanimations", g("animationName", "a", !0)), S.addTest("csstransforms", g("transform", "scale(1)", !0)), S.addTest("csstransforms3d", function() {
        var t = !!g("perspective", "1px", !0),
            e = S._config.usePrefixes;
        if (t && (!e || "webkitPerspective" in T.style)) {
            var n = "@media (transform-3d)";
            e && (n += ",(-webkit-transform-3d)"), n += "{#modernizr{left:9px;position:absolute;height:5px;margin:0;padding:0;border:0}}", L(n, function(e) {
                t = 9 === e.offsetLeft && 5 === e.offsetHeight
            })
        }
        return t
    }), S.addTest("csstransitions", g("transition", "all", !0)), S.addTest("flexbox", g("flexBasis", "1px", !0)), S.addTest("flexboxlegacy", g("boxDirection", "reverse", !0));
    var I = b.prefixed = function(t, e, n) {
        return -1 != t.indexOf("-") && (t = c(t)), e ? m(t, e, n) : m(t, "pfx")
    };
    S.addTest("fullscreen", !(!I("exitFullscreen", e, !1) && !I("cancelFullScreen", e, !1))), s(), o(v), delete b.addTest, delete b.addAsyncTest;
    for (var D = 0; D < S._q.length; D++) S._q[D]();
    t.Modernizr = S
}(this, document),
    function(t, e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return e(t)
        } : e(t)
    }("undefined" != typeof window ? window : this, function(t, e) {
        function n(t) {
            var e = t.length,
                n = se.type(t);
            return "function" === n || se.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
        }

        function i(t, e, n) {
            if (se.isFunction(e)) return se.grep(t, function(t, i) {
                return !!e.call(t, i, t) !== n
            });
            if (e.nodeType) return se.grep(t, function(t) {
                return t === e !== n
            });
            if ("string" == typeof e) {
                if (he.test(e)) return se.filter(e, t, n);
                e = se.filter(e, t)
            }
            return se.grep(t, function(t) {
                return se.inArray(t, e) >= 0 !== n
            })
        }

        function s(t, e) {
            do t = t[e]; while (t && 1 !== t.nodeType);
            return t
        }

        function o(t) {
            var e = Se[t] = {};
            return se.each(t.match(be) || [], function(t, n) {
                e[n] = !0
            }), e
        }

        function a() {
            fe.addEventListener ? (fe.removeEventListener("DOMContentLoaded", r, !1), t.removeEventListener("load", r, !1)) : (fe.detachEvent("onreadystatechange", r), t.detachEvent("onload", r))
        }

        function r() {
            (fe.addEventListener || "load" === event.type || "complete" === fe.readyState) && (a(), se.ready())
        }

        function l(t, e, n) {
            if (void 0 === n && 1 === t.nodeType) {
                var i = "data-" + e.replace(ke, "-$1").toLowerCase();
                if (n = t.getAttribute(i), "string" == typeof n) {
                    try {
                        n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : we.test(n) ? se.parseJSON(n) : n
                    } catch (s) {}
                    se.data(t, e, n)
                } else n = void 0
            }
            return n
        }

        function c(t) {
            var e;
            for (e in t)
                if (("data" !== e || !se.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
            return !0
        }

        function d(t, e, n, i) {
            if (se.acceptData(t)) {
                var s, o, a = se.expando,
                    r = t.nodeType,
                    l = r ? se.cache : t,
                    c = r ? t[a] : t[a] && a;
                if (c && l[c] && (i || l[c].data) || void 0 !== n || "string" != typeof e) return c || (c = r ? t[a] = J.pop() || se.guid++ : a), l[c] || (l[c] = r ? {} : {
                    toJSON: se.noop
                }), ("object" == typeof e || "function" == typeof e) && (i ? l[c] = se.extend(l[c], e) : l[c].data = se.extend(l[c].data, e)), o = l[c], i || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[se.camelCase(e)] = n), "string" == typeof e ? (s = o[e], null == s && (s = o[se.camelCase(e)])) : s = o, s
            }
        }

        function u(t, e, n) {
            if (se.acceptData(t)) {
                var i, s, o = t.nodeType,
                    a = o ? se.cache : t,
                    r = o ? t[se.expando] : se.expando;
                if (a[r]) {
                    if (e && (i = n ? a[r] : a[r].data)) {
                        se.isArray(e) ? e = e.concat(se.map(e, se.camelCase)) : e in i ? e = [e] : (e = se.camelCase(e), e = e in i ? [e] : e.split(" ")), s = e.length;
                        for (; s--;) delete i[e[s]];
                        if (n ? !c(i) : !se.isEmptyObject(i)) return
                    }(n || (delete a[r].data, c(a[r]))) && (o ? se.cleanData([t], !0) : ne.deleteExpando || a != a.window ? delete a[r] : a[r] = null)
                }
            }
        }

        function h() {
            return !0
        }

        function p() {
            return !1
        }

        function f() {
            try {
                return fe.activeElement
            } catch (t) {}
        }

        function m(t) {
            var e = Pe.split("|"),
                n = t.createDocumentFragment();
            if (n.createElement)
                for (; e.length;) n.createElement(e.pop());
            return n
        }

        function g(t, e) {
            var n, i, s = 0,
                o = typeof t.getElementsByTagName !== _e ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== _e ? t.querySelectorAll(e || "*") : void 0;
            if (!o)
                for (o = [], n = t.childNodes || t; null != (i = n[s]); s++) !e || se.nodeName(i, e) ? o.push(i) : se.merge(o, g(i, e));
            return void 0 === e || e && se.nodeName(t, e) ? se.merge([t], o) : o
        }

        function v(t) {
            Ie.test(t.type) && (t.defaultChecked = t.checked)
        }

        function y(t, e) {
            return se.nodeName(t, "table") && se.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function b(t) {
            return t.type = (null !== se.find.attr(t, "type")) + "/" + t.type, t
        }

        function S(t) {
            var e = Xe.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function E(t, e) {
            for (var n, i = 0; null != (n = t[i]); i++) se._data(n, "globalEval", !e || se._data(e[i], "globalEval"))
        }

        function T(t, e) {
            if (1 === e.nodeType && se.hasData(t)) {
                var n, i, s, o = se._data(t),
                    a = se._data(e, o),
                    r = o.events;
                if (r) {
                    delete a.handle, a.events = {};
                    for (n in r)
                        for (i = 0, s = r[n].length; s > i; i++) se.event.add(e, n, r[n][i])
                }
                a.data && (a.data = se.extend({}, a.data))
            }
        }

        function _(t, e) {
            var n, i, s;
            if (1 === e.nodeType) {
                if (n = e.nodeName.toLowerCase(), !ne.noCloneEvent && e[se.expando]) {
                    s = se._data(e);
                    for (i in s.events) se.removeEvent(e, i, s.handle);
                    e.removeAttribute(se.expando)
                }
                "script" === n && e.text !== t.text ? (b(e).text = t.text, S(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), ne.html5Clone && t.innerHTML && !se.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Ie.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
            }
        }

        function w(e, n) {
            var i, s = se(n.createElement(e)).appendTo(n.body),
                o = t.getDefaultComputedStyle && (i = t.getDefaultComputedStyle(s[0])) ? i.display : se.css(s[0], "display");
            return s.detach(), o
        }

        function k(t) {
            var e = fe,
                n = Qe[t];
            return n || (n = w(t, e), "none" !== n && n || (Ze = (Ze || se("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Ze[0].contentWindow || Ze[0].contentDocument).document, e.write(), e.close(), n = w(t, e), Ze.detach()), Qe[t] = n), n
        }

        function L(t, e) {
            return {
                get: function() {
                    var n = t();
                    if (null != n) return n ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }

        function C(t, e) {
            if (e in t) return e;
            for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, s = pn.length; s--;)
                if (e = pn[s] + n, e in t) return e;
            return i
        }

        function A(t, e) {
            for (var n, i, s, o = [], a = 0, r = t.length; r > a; a++) i = t[a], i.style && (o[a] = se._data(i, "olddisplay"), n = i.style.display, e ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && Ae(i) && (o[a] = se._data(i, "olddisplay", k(i.nodeName)))) : (s = Ae(i), (n && "none" !== n || !s) && se._data(i, "olddisplay", s ? n : se.css(i, "display"))));
            for (a = 0; r > a; a++) i = t[a], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? o[a] || "" : "none"));
            return t
        }

        function x(t, e, n) {
            var i = cn.exec(e);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
        }

        function I(t, e, n, i, s) {
            for (var o = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += se.css(t, n + Ce[o], !0, s)), i ? ("content" === n && (a -= se.css(t, "padding" + Ce[o], !0, s)), "margin" !== n && (a -= se.css(t, "border" + Ce[o] + "Width", !0, s))) : (a += se.css(t, "padding" + Ce[o], !0, s), "padding" !== n && (a += se.css(t, "border" + Ce[o] + "Width", !0, s)));
            return a
        }

        function D(t, e, n) {
            var i = !0,
                s = "width" === e ? t.offsetWidth : t.offsetHeight,
                o = tn(t),
                a = ne.boxSizing && "border-box" === se.css(t, "boxSizing", !1, o);
            if (0 >= s || null == s) {
                if (s = en(t, e, o), (0 > s || null == s) && (s = t.style[e]), sn.test(s)) return s;
                i = a && (ne.boxSizingReliable() || s === t.style[e]), s = parseFloat(s) || 0
            }
            return s + I(t, e, n || (a ? "border" : "content"), i, o) + "px"
        }

        function M(t, e, n, i, s) {
            return new M.prototype.init(t, e, n, i, s)
        }

        function O() {
            return setTimeout(function() {
                fn = void 0
            }), fn = se.now()
        }

        function R(t, e) {
            var n, i = {
                    height: t
                },
                s = 0;
            for (e = e ? 1 : 0; 4 > s; s += 2 - e) n = Ce[s], i["margin" + n] = i["padding" + n] = t;
            return e && (i.opacity = i.width = t), i
        }

        function N(t, e, n) {
            for (var i, s = (Sn[e] || []).concat(Sn["*"]), o = 0, a = s.length; a > o; o++)
                if (i = s[o].call(n, e, t)) return i
        }

        function P(t, e, n) {
            var i, s, o, a, r, l, c, d, u = this,
                h = {},
                p = t.style,
                f = t.nodeType && Ae(t),
                m = se._data(t, "fxshow");
            n.queue || (r = se._queueHooks(t, "fx"), null == r.unqueued && (r.unqueued = 0, l = r.empty.fire, r.empty.fire = function() {
                r.unqueued || l()
            }), r.unqueued++, u.always(function() {
                u.always(function() {
                    r.unqueued--, se.queue(t, "fx").length || r.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], c = se.css(t, "display"), d = "none" === c ? se._data(t, "olddisplay") || k(t.nodeName) : c, "inline" === d && "none" === se.css(t, "float") && (ne.inlineBlockNeedsLayout && "inline" !== k(t.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", ne.shrinkWrapBlocks() || u.always(function() {
                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
            }));
            for (i in e)
                if (s = e[i], gn.exec(s)) {
                    if (delete e[i], o = o || "toggle" === s, s === (f ? "hide" : "show")) {
                        if ("show" !== s || !m || void 0 === m[i]) continue;
                        f = !0
                    }
                    h[i] = m && m[i] || se.style(t, i)
                } else c = void 0;
            if (se.isEmptyObject(h)) "inline" === ("none" === c ? k(t.nodeName) : c) && (p.display = c);
            else {
                m ? "hidden" in m && (f = m.hidden) : m = se._data(t, "fxshow", {}), o && (m.hidden = !f), f ? se(t).show() : u.done(function() {
                    se(t).hide()
                }), u.done(function() {
                    var e;
                    se._removeData(t, "fxshow");
                    for (e in h) se.style(t, e, h[e])
                });
                for (i in h) a = N(f ? m[i] : 0, i, u), i in m || (m[i] = a.start, f && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function $(t, e) {
            var n, i, s, o, a;
            for (n in t)
                if (i = se.camelCase(n), s = e[i], o = t[n], se.isArray(o) && (s = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), a = se.cssHooks[i], a && "expand" in a) {
                    o = a.expand(o), delete t[i];
                    for (n in o) n in t || (t[n] = o[n], e[n] = s)
                } else e[i] = s
        }

        function U(t, e, n) {
            var i, s, o = 0,
                a = bn.length,
                r = se.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (s) return !1;
                    for (var e = fn || O(), n = Math.max(0, c.startTime + c.duration - e), i = n / c.duration || 0, o = 1 - i, a = 0, l = c.tweens.length; l > a; a++) c.tweens[a].run(o);
                    return r.notifyWith(t, [c, o, n]), 1 > o && l ? n : (r.resolveWith(t, [c]), !1)
                },
                c = r.promise({
                    elem: t,
                    props: se.extend({}, e),
                    opts: se.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: e,
                    originalOptions: n,
                    startTime: fn || O(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(e, n) {
                        var i = se.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                        return c.tweens.push(i), i
                    },
                    stop: function(e) {
                        var n = 0,
                            i = e ? c.tweens.length : 0;
                        if (s) return this;
                        for (s = !0; i > n; n++) c.tweens[n].run(1);
                        return e ? r.resolveWith(t, [c, e]) : r.rejectWith(t, [c, e]), this
                    }
                }),
                d = c.props;
            for ($(d, c.opts.specialEasing); a > o; o++)
                if (i = bn[o].call(c, t, d, c.opts)) return i;
            return se.map(d, N, c), se.isFunction(c.opts.start) && c.opts.start.call(t, c), se.fx.timer(se.extend(l, {
                elem: t,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }

        function j(t) {
            return function(e, n) {
                "string" != typeof e && (n = e, e = "*");
                var i, s = 0,
                    o = e.toLowerCase().match(be) || [];
                if (se.isFunction(n))
                    for (; i = o[s++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
            }
        }

        function B(t, e, n, i) {
            function s(r) {
                var l;
                return o[r] = !0, se.each(t[r] || [], function(t, r) {
                    var c = r(e, n, i);
                    return "string" != typeof c || a || o[c] ? a ? !(l = c) : void 0 : (e.dataTypes.unshift(c), s(c), !1)
                }), l
            }
            var o = {},
                a = t === Wn;
            return s(e.dataTypes[0]) || !o["*"] && s("*")
        }

        function F(t, e) {
            var n, i, s = se.ajaxSettings.flatOptions || {};
            for (i in e) void 0 !== e[i] && ((s[i] ? t : n || (n = {}))[i] = e[i]);
            return n && se.extend(!0, t, n), t
        }

        function H(t, e, n) {
            for (var i, s, o, a, r = t.contents, l = t.dataTypes;
                 "*" === l[0];) l.shift(), void 0 === s && (s = t.mimeType || e.getResponseHeader("Content-Type"));
            if (s)
                for (a in r)
                    if (r[a] && r[a].test(s)) {
                        l.unshift(a);
                        break
                    }
            if (l[0] in n) o = l[0];
            else {
                for (a in n) {
                    if (!l[0] || t.converters[a + " " + l[0]]) {
                        o = a;
                        break
                    }
                    i || (i = a)
                }
                o = o || i
            }
            return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
        }

        function z(t, e, n, i) {
            var s, o, a, r, l, c = {},
                d = t.dataTypes.slice();
            if (d[1])
                for (a in t.converters) c[a.toLowerCase()] = t.converters[a];
            for (o = d.shift(); o;)
                if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = d.shift())
                    if ("*" === o) o = l;
                    else if ("*" !== l && l !== o) {
                        if (a = c[l + " " + o] || c["* " + o], !a)
                            for (s in c)
                                if (r = s.split(" "), r[1] === o && (a = c[l + " " + r[0]] || c["* " + r[0]])) {
                                    a === !0 ? a = c[s] : c[s] !== !0 && (o = r[0], d.unshift(r[1]));
                                    break
                                }
                        if (a !== !0)
                            if (a && t["throws"]) e = a(e);
                            else try {
                                e = a(e)
                            } catch (u) {
                                return {
                                    state: "parsererror",
                                    error: a ? u : "No conversion from " + l + " to " + o
                                }
                            }
                    }
            return {
                state: "success",
                data: e
            }
        }

        function W(t, e, n, i) {
            var s;
            if (se.isArray(e)) se.each(e, function(e, s) {
                n || Jn.test(t) ? i(t, s) : W(t + "[" + ("object" == typeof s ? e : "") + "]", s, n, i)
            });
            else if (n || "object" !== se.type(e)) i(t, e);
            else
                for (s in e) W(t + "[" + s + "]", e[s], n, i)
        }

        function V() {
            try {
                return new t.XMLHttpRequest
            } catch (e) {}
        }

        function G() {
            try {
                return new t.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {}
        }

        function X(t) {
            return se.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
        }
        var J = [],
            q = J.slice,
            Y = J.concat,
            K = J.push,
            Z = J.indexOf,
            Q = {},
            te = Q.toString,
            ee = Q.hasOwnProperty,
            ne = {},
            ie = "1.11.1",
            se = function(t, e) {
                return new se.fn.init(t, e)
            },
            oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            ae = /^-ms-/,
            re = /-([\da-z])/gi,
            le = function(t, e) {
                return e.toUpperCase()
            };
        se.fn = se.prototype = {
            jquery: ie,
            constructor: se,
            selector: "",
            length: 0,
            toArray: function() {
                return q.call(this)
            },
            get: function(t) {
                return null != t ? 0 > t ? this[t + this.length] : this[t] : q.call(this)
            },
            pushStack: function(t) {
                var e = se.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            },
            each: function(t, e) {
                return se.each(this, t, e)
            },
            map: function(t) {
                return this.pushStack(se.map(this, function(e, n) {
                    return t.call(e, n, e)
                }))
            },
            slice: function() {
                return this.pushStack(q.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length,
                    n = +t + (0 > t ? e : 0);
                return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: K,
            sort: J.sort,
            splice: J.splice
        }, se.extend = se.fn.extend = function() {
            var t, e, n, i, s, o, a = arguments[0] || {},
                r = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof a && (c = a, a = arguments[r] || {}, r++), "object" == typeof a || se.isFunction(a) || (a = {}), r === l && (a = this, r--); l > r; r++)
                if (null != (s = arguments[r]))
                    for (i in s) t = a[i], n = s[i], a !== n && (c && n && (se.isPlainObject(n) || (e = se.isArray(n))) ? (e ? (e = !1, o = t && se.isArray(t) ? t : []) : o = t && se.isPlainObject(t) ? t : {}, a[i] = se.extend(c, o, n)) : void 0 !== n && (a[i] = n));
            return a
        }, se.extend({
            expando: "jQuery" + (ie + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isFunction: function(t) {
                return "function" === se.type(t)
            },
            isArray: Array.isArray || function(t) {
                return "array" === se.type(t)
            },
            isWindow: function(t) {
                return null != t && t == t.window
            },
            isNumeric: function(t) {
                return !se.isArray(t) && t - parseFloat(t) >= 0
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            isPlainObject: function(t) {
                var e;
                if (!t || "object" !== se.type(t) || t.nodeType || se.isWindow(t)) return !1;
                try {
                    if (t.constructor && !ee.call(t, "constructor") && !ee.call(t.constructor.prototype, "isPrototypeOf")) return !1
                } catch (n) {
                    return !1
                }
                if (ne.ownLast)
                    for (e in t) return ee.call(t, e);
                for (e in t);
                return void 0 === e || ee.call(t, e)
            },
            type: function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? Q[te.call(t)] || "object" : typeof t
            },
            globalEval: function(e) {
                e && se.trim(e) && (t.execScript || function(e) {
                    t.eval.call(t, e)
                })(e)
            },
            camelCase: function(t) {
                return t.replace(ae, "ms-").replace(re, le)
            },
            nodeName: function(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function(t, e, i) {
                var s, o = 0,
                    a = t.length,
                    r = n(t);
                if (i) {
                    if (r)
                        for (; a > o && (s = e.apply(t[o], i), s !== !1); o++);
                    else
                        for (o in t)
                            if (s = e.apply(t[o], i), s === !1) break
                } else if (r)
                    for (; a > o && (s = e.call(t[o], o, t[o]), s !== !1); o++);
                else
                    for (o in t)
                        if (s = e.call(t[o], o, t[o]), s === !1) break; return t
            },
            trim: function(t) {
                return null == t ? "" : (t + "").replace(oe, "")
            },
            makeArray: function(t, e) {
                var i = e || [];
                return null != t && (n(Object(t)) ? se.merge(i, "string" == typeof t ? [t] : t) : K.call(i, t)), i
            },
            inArray: function(t, e, n) {
                var i;
                if (e) {
                    if (Z) return Z.call(e, t, n);
                    for (i = e.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                        if (n in e && e[n] === t) return n
                }
                return -1
            },
            merge: function(t, e) {
                for (var n = +e.length, i = 0, s = t.length; n > i;) t[s++] = e[i++];
                if (n !== n)
                    for (; void 0 !== e[i];) t[s++] = e[i++];
                return t.length = s, t
            },
            grep: function(t, e, n) {
                for (var i, s = [], o = 0, a = t.length, r = !n; a > o; o++) i = !e(t[o], o), i !== r && s.push(t[o]);
                return s
            },
            map: function(t, e, i) {
                var s, o = 0,
                    a = t.length,
                    r = n(t),
                    l = [];
                if (r)
                    for (; a > o; o++) s = e(t[o], o, i), null != s && l.push(s);
                else
                    for (o in t) s = e(t[o], o, i), null != s && l.push(s);
                return Y.apply([], l)
            },
            guid: 1,
            proxy: function(t, e) {
                var n, i, s;
                return "string" == typeof e && (s = t[e], e = t, t = s), se.isFunction(t) ? (n = q.call(arguments, 2), i = function() {
                    return t.apply(e || this, n.concat(q.call(arguments)))
                }, i.guid = t.guid = t.guid || se.guid++, i) : void 0
            },
            now: function() {
                return +new Date
            },
            support: ne
        }), se.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
            Q["[object " + e + "]"] = e.toLowerCase()
        });
        var ce = function(t) {
            function e(t, e, n, i) {
                var s, o, a, r, l, c, u, p, f, m;
                if ((e ? e.ownerDocument || e : B) !== M && D(e), e = e || M, n = n || [], !t || "string" != typeof t) return n;
                if (1 !== (r = e.nodeType) && 9 !== r) return [];
                if (R && !i) {
                    if (s = ye.exec(t))
                        if (a = s[1]) {
                            if (9 === r) {
                                if (o = e.getElementById(a), !o || !o.parentNode) return n;
                                if (o.id === a) return n.push(o), n
                            } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(a)) && U(e, o) && o.id === a) return n.push(o), n
                        } else {
                            if (s[2]) return Q.apply(n, e.getElementsByTagName(t)), n;
                            if ((a = s[3]) && E.getElementsByClassName && e.getElementsByClassName) return Q.apply(n, e.getElementsByClassName(a)), n
                        }
                    if (E.qsa && (!N || !N.test(t))) {
                        if (p = u = j, f = e, m = 9 === r && t, 1 === r && "object" !== e.nodeName.toLowerCase()) {
                            for (c = k(t), (u = e.getAttribute("id")) ? p = u.replace(Se, "\\$&") : e.setAttribute("id", p), p = "[id='" + p + "'] ", l = c.length; l--;) c[l] = p + h(c[l]);
                            f = be.test(t) && d(e.parentNode) || e, m = c.join(",")
                        }
                        if (m) try {
                            return Q.apply(n, f.querySelectorAll(m)), n
                        } catch (g) {} finally {
                            u || e.removeAttribute("id")
                        }
                    }
                }
                return C(t.replace(le, "$1"), e, n, i)
            }

            function n() {
                function t(n, i) {
                    return e.push(n + " ") > T.cacheLength && delete t[e.shift()], t[n + " "] = i
                }
                var e = [];
                return t
            }

            function i(t) {
                return t[j] = !0, t
            }

            function s(t) {
                var e = M.createElement("div");
                try {
                    return !!t(e)
                } catch (n) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function o(t, e) {
                for (var n = t.split("|"), i = t.length; i--;) T.attrHandle[n[i]] = e
            }

            function a(t, e) {
                var n = e && t,
                    i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || J) - (~t.sourceIndex || J);
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === e) return -1;
                return t ? 1 : -1
            }

            function r(t) {
                return function(e) {
                    var n = e.nodeName.toLowerCase();
                    return "input" === n && e.type === t
                }
            }

            function l(t) {
                return function(e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t
                }
            }

            function c(t) {
                return i(function(e) {
                    return e = +e, i(function(n, i) {
                        for (var s, o = t([], n.length, e), a = o.length; a--;) n[s = o[a]] && (n[s] = !(i[s] = n[s]))
                    })
                })
            }

            function d(t) {
                return t && typeof t.getElementsByTagName !== X && t
            }

            function u() {}

            function h(t) {
                for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
                return i
            }

            function p(t, e, n) {
                var i = e.dir,
                    s = n && "parentNode" === i,
                    o = H++;
                return e.first ? function(e, n, o) {
                    for (; e = e[i];)
                        if (1 === e.nodeType || s) return t(e, n, o)
                } : function(e, n, a) {
                    var r, l, c = [F, o];
                    if (a) {
                        for (; e = e[i];)
                            if ((1 === e.nodeType || s) && t(e, n, a)) return !0
                    } else
                        for (; e = e[i];)
                            if (1 === e.nodeType || s) {
                                if (l = e[j] || (e[j] = {}), (r = l[i]) && r[0] === F && r[1] === o) return c[2] = r[2];
                                if (l[i] = c, c[2] = t(e, n, a)) return !0
                            }
                }
            }

            function f(t) {
                return t.length > 1 ? function(e, n, i) {
                    for (var s = t.length; s--;)
                        if (!t[s](e, n, i)) return !1;
                    return !0
                } : t[0]
            }

            function m(t, n, i) {
                for (var s = 0, o = n.length; o > s; s++) e(t, n[s], i);
                return i
            }

            function g(t, e, n, i, s) {
                for (var o, a = [], r = 0, l = t.length, c = null != e; l > r; r++)(o = t[r]) && (!n || n(o, i, s)) && (a.push(o), c && e.push(r));
                return a
            }

            function v(t, e, n, s, o, a) {
                return s && !s[j] && (s = v(s)), o && !o[j] && (o = v(o, a)), i(function(i, a, r, l) {
                    var c, d, u, h = [],
                        p = [],
                        f = a.length,
                        v = i || m(e || "*", r.nodeType ? [r] : r, []),
                        y = !t || !i && e ? v : g(v, h, t, r, l),
                        b = n ? o || (i ? t : f || s) ? [] : a : y;
                    if (n && n(y, b, r, l), s)
                        for (c = g(b, p), s(c, [], r, l), d = c.length; d--;)(u = c[d]) && (b[p[d]] = !(y[p[d]] = u));
                    if (i) {
                        if (o || t) {
                            if (o) {
                                for (c = [], d = b.length; d--;)(u = b[d]) && c.push(y[d] = u);
                                o(null, b = [], c, l)
                            }
                            for (d = b.length; d--;)(u = b[d]) && (c = o ? ee.call(i, u) : h[d]) > -1 && (i[c] = !(a[c] = u))
                        }
                    } else b = g(b === a ? b.splice(f, b.length) : b), o ? o(null, a, b, l) : Q.apply(a, b)
                })
            }

            function y(t) {
                for (var e, n, i, s = t.length, o = T.relative[t[0].type], a = o || T.relative[" "], r = o ? 1 : 0, l = p(function(t) {
                    return t === e
                }, a, !0), c = p(function(t) {
                    return ee.call(e, t) > -1
                }, a, !0), d = [function(t, n, i) {
                    return !o && (i || n !== A) || ((e = n).nodeType ? l(t, n, i) : c(t, n, i))
                }]; s > r; r++)
                    if (n = T.relative[t[r].type]) d = [p(f(d), n)];
                    else {
                        if (n = T.filter[t[r].type].apply(null, t[r].matches), n[j]) {
                            for (i = ++r; s > i && !T.relative[t[i].type]; i++);
                            return v(r > 1 && f(d), r > 1 && h(t.slice(0, r - 1).concat({
                                    value: " " === t[r - 2].type ? "*" : ""
                                })).replace(le, "$1"), n, i > r && y(t.slice(r, i)), s > i && y(t = t.slice(i)), s > i && h(t))
                        }
                        d.push(n)
                    }
                return f(d)
            }

            function b(t, n) {
                var s = n.length > 0,
                    o = t.length > 0,
                    a = function(i, a, r, l, c) {
                        var d, u, h, p = 0,
                            f = "0",
                            m = i && [],
                            v = [],
                            y = A,
                            b = i || o && T.find.TAG("*", c),
                            S = F += null == y ? 1 : Math.random() || .1,
                            E = b.length;
                        for (c && (A = a !== M && a); f !== E && null != (d = b[f]); f++) {
                            if (o && d) {
                                for (u = 0; h = t[u++];)
                                    if (h(d, a, r)) {
                                        l.push(d);
                                        break
                                    }
                                c && (F = S)
                            }
                            s && ((d = !h && d) && p--, i && m.push(d))
                        }
                        if (p += f, s && f !== p) {
                            for (u = 0; h = n[u++];) h(m, v, a, r);
                            if (i) {
                                if (p > 0)
                                    for (; f--;) m[f] || v[f] || (v[f] = K.call(l));
                                v = g(v)
                            }
                            Q.apply(l, v), c && !i && v.length > 0 && p + n.length > 1 && e.uniqueSort(l)
                        }
                        return c && (F = S, A = y), m
                    };
                return s ? i(a) : a
            }
            var S, E, T, _, w, k, L, C, A, x, I, D, M, O, R, N, P, $, U, j = "sizzle" + -new Date,
                B = t.document,
                F = 0,
                H = 0,
                z = n(),
                W = n(),
                V = n(),
                G = function(t, e) {
                    return t === e && (I = !0), 0
                },
                X = "undefined",
                J = 1 << 31,
                q = {}.hasOwnProperty,
                Y = [],
                K = Y.pop,
                Z = Y.push,
                Q = Y.push,
                te = Y.slice,
                ee = Y.indexOf || function(t) {
                        for (var e = 0, n = this.length; n > e; e++)
                            if (this[e] === t) return e;
                        return -1
                    },
                ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ie = "[\\x20\\t\\r\\n\\f]",
                se = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                oe = se.replace("w", "w#"),
                ae = "\\[" + ie + "*(" + se + ")(?:" + ie + "*([*^$|!~]?=)" + ie + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ie + "*\\]",
                re = ":(" + se + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ae + ")*)|.*)\\)|)",
                le = new RegExp("^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$", "g"),
                ce = new RegExp("^" + ie + "*," + ie + "*"),
                de = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"),
                ue = new RegExp("=" + ie + "*([^\\]'\"]*?)" + ie + "*\\]", "g"),
                he = new RegExp(re),
                pe = new RegExp("^" + oe + "$"),
                fe = {
                    ID: new RegExp("^#(" + se + ")"),
                    CLASS: new RegExp("^\\.(" + se + ")"),
                    TAG: new RegExp("^(" + se.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + ae),
                    PSEUDO: new RegExp("^" + re),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ie + "*(even|odd|(([+-]|)(\\d*)n|)" + ie + "*(?:([+-]|)" + ie + "*(\\d+)|))" + ie + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + ne + ")$", "i"),
                    needsContext: new RegExp("^" + ie + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ie + "*((?:-\\d)?\\d*)" + ie + "*\\)|)(?=[^-]|$)", "i")
                },
                me = /^(?:input|select|textarea|button)$/i,
                ge = /^h\d$/i,
                ve = /^[^{]+\{\s*\[native \w/,
                ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                be = /[+~]/,
                Se = /'|\\/g,
                Ee = new RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)", "ig"),
                Te = function(t, e, n) {
                    var i = "0x" + e - 65536;
                    return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                };
            try {
                Q.apply(Y = te.call(B.childNodes), B.childNodes), Y[B.childNodes.length].nodeType
            } catch (_e) {
                Q = {
                    apply: Y.length ? function(t, e) {
                        Z.apply(t, te.call(e))
                    } : function(t, e) {
                        for (var n = t.length, i = 0; t[n++] = e[i++];);
                        t.length = n - 1
                    }
                }
            }
            E = e.support = {}, w = e.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return e ? "HTML" !== e.nodeName : !1
            }, D = e.setDocument = function(t) {
                var e, n = t ? t.ownerDocument || t : B,
                    i = n.defaultView;
                return n !== M && 9 === n.nodeType && n.documentElement ? (M = n, O = n.documentElement, R = !w(n), i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", function() {
                    D()
                }, !1) : i.attachEvent && i.attachEvent("onunload", function() {
                    D()
                })), E.attributes = s(function(t) {
                    return t.className = "i", !t.getAttribute("className")
                }), E.getElementsByTagName = s(function(t) {
                    return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
                }), E.getElementsByClassName = ve.test(n.getElementsByClassName) && s(function(t) {
                        return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
                    }), E.getById = s(function(t) {
                    return O.appendChild(t).id = j, !n.getElementsByName || !n.getElementsByName(j).length
                }), E.getById ? (T.find.ID = function(t, e) {
                    if (typeof e.getElementById !== X && R) {
                        var n = e.getElementById(t);
                        return n && n.parentNode ? [n] : []
                    }
                }, T.filter.ID = function(t) {
                    var e = t.replace(Ee, Te);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete T.find.ID, T.filter.ID = function(t) {
                    var e = t.replace(Ee, Te);
                    return function(t) {
                        var n = typeof t.getAttributeNode !== X && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }), T.find.TAG = E.getElementsByTagName ? function(t, e) {
                    return typeof e.getElementsByTagName !== X ? e.getElementsByTagName(t) : void 0
                } : function(t, e) {
                    var n, i = [],
                        s = 0,
                        o = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; n = o[s++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return o
                }, T.find.CLASS = E.getElementsByClassName && function(t, e) {
                        return typeof e.getElementsByClassName !== X && R ? e.getElementsByClassName(t) : void 0
                    }, P = [], N = [], (E.qsa = ve.test(n.querySelectorAll)) && (s(function(t) {
                    t.innerHTML = "<select msallowclip=''><option selected=''></option></select>", t.querySelectorAll("[msallowclip^='']").length && N.push("[*^$]=" + ie + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || N.push("\\[" + ie + "*(?:value|" + ne + ")"), t.querySelectorAll(":checked").length || N.push(":checked")
                }), s(function(t) {
                    var e = n.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && N.push("name" + ie + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || N.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), N.push(",.*:")
                })), (E.matchesSelector = ve.test($ = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && s(function(t) {
                    E.disconnectedMatch = $.call(t, "div"), $.call(t, "[s!='']:x"), P.push("!=", re)
                }), N = N.length && new RegExp(N.join("|")), P = P.length && new RegExp(P.join("|")), e = ve.test(O.compareDocumentPosition), U = e || ve.test(O.contains) ? function(t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t,
                        i = e && e.parentNode;
                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, G = e ? function(t, e) {
                    if (t === e) return I = !0, 0;
                    var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !E.sortDetached && e.compareDocumentPosition(t) === i ? t === n || t.ownerDocument === B && U(B, t) ? -1 : e === n || e.ownerDocument === B && U(B, e) ? 1 : x ? ee.call(x, t) - ee.call(x, e) : 0 : 4 & i ? -1 : 1)
                } : function(t, e) {
                    if (t === e) return I = !0, 0;
                    var i, s = 0,
                        o = t.parentNode,
                        r = e.parentNode,
                        l = [t],
                        c = [e];
                    if (!o || !r) return t === n ? -1 : e === n ? 1 : o ? -1 : r ? 1 : x ? ee.call(x, t) - ee.call(x, e) : 0;
                    if (o === r) return a(t, e);
                    for (i = t; i = i.parentNode;) l.unshift(i);
                    for (i = e; i = i.parentNode;) c.unshift(i);
                    for (; l[s] === c[s];) s++;
                    return s ? a(l[s], c[s]) : l[s] === B ? -1 : c[s] === B ? 1 : 0
                }, n) : M
            }, e.matches = function(t, n) {
                return e(t, null, null, n)
            }, e.matchesSelector = function(t, n) {
                if ((t.ownerDocument || t) !== M && D(t), n = n.replace(ue, "='$1']"), !(!E.matchesSelector || !R || P && P.test(n) || N && N.test(n))) try {
                    var i = $.call(t, n);
                    if (i || E.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                } catch (s) {}
                return e(n, M, null, [t]).length > 0
            }, e.contains = function(t, e) {
                return (t.ownerDocument || t) !== M && D(t), U(t, e)
            }, e.attr = function(t, e) {
                (t.ownerDocument || t) !== M && D(t);
                var n = T.attrHandle[e.toLowerCase()],
                    i = n && q.call(T.attrHandle, e.toLowerCase()) ? n(t, e, !R) : void 0;
                return void 0 !== i ? i : E.attributes || !R ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }, e.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function(t) {
                var e, n = [],
                    i = 0,
                    s = 0;
                if (I = !E.detectDuplicates, x = !E.sortStable && t.slice(0), t.sort(G), I) {
                    for (; e = t[s++];) e === t[s] && (i = n.push(s));
                    for (; i--;) t.splice(n[i], 1)
                }
                return x = null, t
            }, _ = e.getText = function(t) {
                var e, n = "",
                    i = 0,
                    s = t.nodeType;
                if (s) {
                    if (1 === s || 9 === s || 11 === s) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) n += _(t)
                    } else if (3 === s || 4 === s) return t.nodeValue
                } else
                    for (; e = t[i++];) n += _(e);
                return n
            }, T = e.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: fe,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(t) {
                        return t[1] = t[1].replace(Ee, Te), t[3] = (t[3] || t[4] || t[5] || "").replace(Ee, Te), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var e, n = !t[6] && t[2];
                        return fe.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && he.test(n) && (e = k(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(Ee, Te).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = z[t + " "];
                        return e || (e = new RegExp("(^|" + ie + ")" + t + "(" + ie + "|$)")) && z(t, function(t) {
                                return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== X && t.getAttribute("class") || "")
                            })
                    },
                    ATTR: function(t, n, i) {
                        return function(s) {
                            var o = e.attr(s, t);
                            return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o + " ").indexOf(i) > -1 : "|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
                        }
                    },
                    CHILD: function(t, e, n, i, s) {
                        var o = "nth" !== t.slice(0, 3),
                            a = "last" !== t.slice(-4),
                            r = "of-type" === e;
                        return 1 === i && 0 === s ? function(t) {
                            return !!t.parentNode
                        } : function(e, n, l) {
                            var c, d, u, h, p, f, m = o !== a ? "nextSibling" : "previousSibling",
                                g = e.parentNode,
                                v = r && e.nodeName.toLowerCase(),
                                y = !l && !r;
                            if (g) {
                                if (o) {
                                    for (; m;) {
                                        for (u = e; u = u[m];)
                                            if (r ? u.nodeName.toLowerCase() === v : 1 === u.nodeType) return !1;
                                        f = m = "only" === t && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [a ? g.firstChild : g.lastChild], a && y) {
                                    for (d = g[j] || (g[j] = {}), c = d[t] || [], p = c[0] === F && c[1], h = c[0] === F && c[2], u = p && g.childNodes[p]; u = ++p && u && u[m] || (h = p = 0) || f.pop();)
                                        if (1 === u.nodeType && ++h && u === e) {
                                            d[t] = [F, p, h];
                                            break
                                        }
                                } else if (y && (c = (e[j] || (e[j] = {}))[t]) && c[0] === F) h = c[1];
                                else
                                    for (;
                                        (u = ++p && u && u[m] || (h = p = 0) || f.pop()) && ((r ? u.nodeName.toLowerCase() !== v : 1 !== u.nodeType) || !++h || (y && ((u[j] || (u[j] = {}))[t] = [F, h]), u !== e)););
                                return h -= s, h === i || h % i === 0 && h / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, n) {
                        var s, o = T.pseudos[t] || T.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return o[j] ? o(n) : o.length > 1 ? (s = [t, t, "", n], T.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                            for (var i, s = o(t, n), a = s.length; a--;) i = ee.call(t, s[a]), t[i] = !(e[i] = s[a])
                        }) : function(t) {
                            return o(t, 0, s)
                        }) : o
                    }
                },
                pseudos: {
                    not: i(function(t) {
                        var e = [],
                            n = [],
                            s = L(t.replace(le, "$1"));
                        return s[j] ? i(function(t, e, n, i) {
                            for (var o, a = s(t, null, i, []), r = t.length; r--;)(o = a[r]) && (t[r] = !(e[r] = o))
                        }) : function(t, i, o) {
                            return e[0] = t, s(e, null, o, n), !n.pop()
                        }
                    }),
                    has: i(function(t) {
                        return function(n) {
                            return e(t, n).length > 0
                        }
                    }),
                    contains: i(function(t) {
                        return function(e) {
                            return (e.textContent || e.innerText || _(e)).indexOf(t) > -1
                        }
                    }),
                    lang: i(function(t) {
                        return pe.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(Ee, Te).toLowerCase(),
                            function(e) {
                                var n;
                                do
                                    if (n = R ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
                                while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === O
                    },
                    focus: function(t) {
                        return t === M.activeElement && (!M.hasFocus || M.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: function(t) {
                        return t.disabled === !1
                    },
                    disabled: function(t) {
                        return t.disabled === !0
                    },
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !T.pseudos.empty(t)
                    },
                    header: function(t) {
                        return ge.test(t.nodeName)
                    },
                    input: function(t) {
                        return me.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: c(function() {
                        return [0]
                    }),
                    last: c(function(t, e) {
                        return [e - 1]
                    }),
                    eq: c(function(t, e, n) {
                        return [0 > n ? n + e : n]
                    }),
                    even: c(function(t, e) {
                        for (var n = 0; e > n; n += 2) t.push(n);
                        return t
                    }),
                    odd: c(function(t, e) {
                        for (var n = 1; e > n; n += 2) t.push(n);
                        return t
                    }),
                    lt: c(function(t, e, n) {
                        for (var i = 0 > n ? n + e : n; --i >= 0;) t.push(i);
                        return t
                    }),
                    gt: c(function(t, e, n) {
                        for (var i = 0 > n ? n + e : n; ++i < e;) t.push(i);
                        return t
                    })
                }
            }, T.pseudos.nth = T.pseudos.eq;
            for (S in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) T.pseudos[S] = r(S);
            for (S in {
                submit: !0,
                reset: !0
            }) T.pseudos[S] = l(S);
            return u.prototype = T.filters = T.pseudos, T.setFilters = new u, k = e.tokenize = function(t, n) {
                var i, s, o, a, r, l, c, d = W[t + " "];
                if (d) return n ? 0 : d.slice(0);
                for (r = t, l = [], c = T.preFilter; r;) {
                    (!i || (s = ce.exec(r))) && (s && (r = r.slice(s[0].length) || r), l.push(o = [])), i = !1, (s = de.exec(r)) && (i = s.shift(), o.push({
                        value: i,
                        type: s[0].replace(le, " ")
                    }), r = r.slice(i.length));
                    for (a in T.filter) !(s = fe[a].exec(r)) || c[a] && !(s = c[a](s)) || (i = s.shift(), o.push({
                        value: i,
                        type: a,
                        matches: s
                    }), r = r.slice(i.length));
                    if (!i) break
                }
                return n ? r.length : r ? e.error(t) : W(t, l).slice(0)
            }, L = e.compile = function(t, e) {
                var n, i = [],
                    s = [],
                    o = V[t + " "];
                if (!o) {
                    for (e || (e = k(t)), n = e.length; n--;) o = y(e[n]), o[j] ? i.push(o) : s.push(o);
                    o = V(t, b(s, i)), o.selector = t
                }
                return o
            }, C = e.select = function(t, e, n, i) {
                var s, o, a, r, l, c = "function" == typeof t && t,
                    u = !i && k(t = c.selector || t);
                if (n = n || [], 1 === u.length) {
                    if (o = u[0] = u[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && E.getById && 9 === e.nodeType && R && T.relative[o[1].type]) {
                        if (e = (T.find.ID(a.matches[0].replace(Ee, Te), e) || [])[0], !e) return n;
                        c && (e = e.parentNode), t = t.slice(o.shift().value.length)
                    }
                    for (s = fe.needsContext.test(t) ? 0 : o.length; s-- && (a = o[s], !T.relative[r = a.type]);)
                        if ((l = T.find[r]) && (i = l(a.matches[0].replace(Ee, Te), be.test(o[0].type) && d(e.parentNode) || e))) {
                            if (o.splice(s, 1), t = i.length && h(o), !t) return Q.apply(n, i), n;
                            break
                        }
                }
                return (c || L(t, u))(i, e, !R, n, be.test(t) && d(e.parentNode) || e), n
            }, E.sortStable = j.split("").sort(G).join("") === j, E.detectDuplicates = !!I, D(), E.sortDetached = s(function(t) {
                return 1 & t.compareDocumentPosition(M.createElement("div"))
            }), s(function(t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || o("type|href|height|width", function(t, e, n) {
                return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), E.attributes && s(function(t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || o("value", function(t, e, n) {
                return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
            }), s(function(t) {
                return null == t.getAttribute("disabled")
            }) || o(ne, function(t, e, n) {
                var i;
                return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }), e
        }(t);
        se.find = ce, se.expr = ce.selectors, se.expr[":"] = se.expr.pseudos, se.unique = ce.uniqueSort, se.text = ce.getText, se.isXMLDoc = ce.isXML, se.contains = ce.contains;
        var de = se.expr.match.needsContext,
            ue = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            he = /^.[^:#\[\.,]*$/;
        se.filter = function(t, e, n) {
            var i = e[0];
            return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? se.find.matchesSelector(i, t) ? [i] : [] : se.find.matches(t, se.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        }, se.fn.extend({
            find: function(t) {
                var e, n = [],
                    i = this,
                    s = i.length;
                if ("string" != typeof t) return this.pushStack(se(t).filter(function() {
                    for (e = 0; s > e; e++)
                        if (se.contains(i[e], this)) return !0
                }));
                for (e = 0; s > e; e++) se.find(t, i[e], n);
                return n = this.pushStack(s > 1 ? se.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
            },
            filter: function(t) {
                return this.pushStack(i(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(i(this, t || [], !0))
            },
            is: function(t) {
                return !!i(this, "string" == typeof t && de.test(t) ? se(t) : t || [], !1).length
            }
        });
        var pe, fe = t.document,
            me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            ge = se.fn.init = function(t, e) {
                var n, i;
                if (!t) return this;
                if ("string" == typeof t) {
                    if (n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : me.exec(t), !n || !n[1] && e) return !e || e.jquery ? (e || pe).find(t) : this.constructor(e).find(t);
                    if (n[1]) {
                        if (e = e instanceof se ? e[0] : e, se.merge(this, se.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : fe, !0)), ue.test(n[1]) && se.isPlainObject(e))
                            for (n in e) se.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                        return this
                    }
                    if (i = fe.getElementById(n[2]), i && i.parentNode) {
                        if (i.id !== n[2]) return pe.find(t);
                        this.length = 1, this[0] = i
                    }
                    return this.context = fe, this.selector = t, this
                }
                return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : se.isFunction(t) ? "undefined" != typeof pe.ready ? pe.ready(t) : t(se) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), se.makeArray(t, this))
            };
        ge.prototype = se.fn, pe = se(fe);
        var ve = /^(?:parents|prev(?:Until|All))/,
            ye = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        se.extend({
            dir: function(t, e, n) {
                for (var i = [], s = t[e]; s && 9 !== s.nodeType && (void 0 === n || 1 !== s.nodeType || !se(s).is(n));) 1 === s.nodeType && i.push(s), s = s[e];
                return i
            },
            sibling: function(t, e) {
                for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                return n
            }
        }), se.fn.extend({
            has: function(t) {
                var e, n = se(t, this),
                    i = n.length;
                return this.filter(function() {
                    for (e = 0; i > e; e++)
                        if (se.contains(this, n[e])) return !0
                })
            },
            closest: function(t, e) {
                for (var n, i = 0, s = this.length, o = [], a = de.test(t) || "string" != typeof t ? se(t, e || this.context) : 0; s > i; i++)
                    for (n = this[i]; n && n !== e; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && se.find.matchesSelector(n, t))) {
                            o.push(n);
                            break
                        }
                return this.pushStack(o.length > 1 ? se.unique(o) : o)
            },
            index: function(t) {
                return t ? "string" == typeof t ? se.inArray(this[0], se(t)) : se.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(se.unique(se.merge(this.get(), se(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), se.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return se.dir(t, "parentNode")
            },
            parentsUntil: function(t, e, n) {
                return se.dir(t, "parentNode", n)
            },
            next: function(t) {
                return s(t, "nextSibling")
            },
            prev: function(t) {
                return s(t, "previousSibling")
            },
            nextAll: function(t) {
                return se.dir(t, "nextSibling")
            },
            prevAll: function(t) {
                return se.dir(t, "previousSibling")
            },
            nextUntil: function(t, e, n) {
                return se.dir(t, "nextSibling", n)
            },
            prevUntil: function(t, e, n) {
                return se.dir(t, "previousSibling", n)
            },
            siblings: function(t) {
                return se.sibling((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return se.sibling(t.firstChild)
            },
            contents: function(t) {
                return se.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : se.merge([], t.childNodes)
            }
        }, function(t, e) {
            se.fn[t] = function(n, i) {
                var s = se.map(this, e, n);
                return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (s = se.filter(i, s)), this.length > 1 && (ye[t] || (s = se.unique(s)), ve.test(t) && (s = s.reverse())), this.pushStack(s)
            }
        });
        var be = /\S+/g,
            Se = {};
        se.Callbacks = function(t) {
            t = "string" == typeof t ? Se[t] || o(t) : se.extend({}, t);
            var e, n, i, s, a, r, l = [],
                c = !t.once && [],
                d = function(o) {
                    for (n = t.memory && o, i = !0, a = r || 0, r = 0, s = l.length, e = !0; l && s > a; a++)
                        if (l[a].apply(o[0], o[1]) === !1 && t.stopOnFalse) {
                            n = !1;
                            break
                        }
                    e = !1, l && (c ? c.length && d(c.shift()) : n ? l = [] : u.disable())
                },
                u = {
                    add: function() {
                        if (l) {
                            var i = l.length;
                            ! function o(e) {
                                se.each(e, function(e, n) {
                                    var i = se.type(n);
                                    "function" === i ? t.unique && u.has(n) || l.push(n) : n && n.length && "string" !== i && o(n)
                                })
                            }(arguments), e ? s = l.length : n && (r = i, d(n))
                        }
                        return this
                    },
                    remove: function() {
                        return l && se.each(arguments, function(t, n) {
                            for (var i;
                                 (i = se.inArray(n, l, i)) > -1;) l.splice(i, 1), e && (s >= i && s--, a >= i && a--)
                        }), this
                    },
                    has: function(t) {
                        return t ? se.inArray(t, l) > -1 : !(!l || !l.length)
                    },
                    empty: function() {
                        return l = [], s = 0, this
                    },
                    disable: function() {
                        return l = c = n = void 0, this
                    },
                    disabled: function() {
                        return !l
                    },
                    lock: function() {
                        return c = void 0, n || u.disable(), this
                    },
                    locked: function() {
                        return !c
                    },
                    fireWith: function(t, n) {
                        return !l || i && !c || (n = n || [], n = [t, n.slice ? n.slice() : n], e ? c.push(n) : d(n)), this
                    },
                    fire: function() {
                        return u.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return u
        }, se.extend({
            Deferred: function(t) {
                var e = [
                        ["resolve", "done", se.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", se.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", se.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return s.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var t = arguments;
                            return se.Deferred(function(n) {
                                se.each(e, function(e, o) {
                                    var a = se.isFunction(t[e]) && t[e];
                                    s[o[1]](function() {
                                        var t = a && a.apply(this, arguments);
                                        t && se.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, a ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? se.extend(t, i) : i
                        }
                    },
                    s = {};
                return i.pipe = i.then, se.each(e, function(t, o) {
                    var a = o[2],
                        r = o[3];
                    i[o[1]] = a.add, r && a.add(function() {
                        n = r
                    }, e[1 ^ t][2].disable, e[2][2].lock), s[o[0]] = function() {
                        return s[o[0] + "With"](this === s ? i : this, arguments), this
                    }, s[o[0] + "With"] = a.fireWith
                }), i.promise(s), t && t.call(s, s), s
            },
            when: function(t) {
                var e, n, i, s = 0,
                    o = q.call(arguments),
                    a = o.length,
                    r = 1 !== a || t && se.isFunction(t.promise) ? a : 0,
                    l = 1 === r ? t : se.Deferred(),
                    c = function(t, n, i) {
                        return function(s) {
                            n[t] = this, i[t] = arguments.length > 1 ? q.call(arguments) : s, i === e ? l.notifyWith(n, i) : --r || l.resolveWith(n, i)
                        }
                    };
                if (a > 1)
                    for (e = new Array(a), n = new Array(a), i = new Array(a); a > s; s++) o[s] && se.isFunction(o[s].promise) ? o[s].promise().done(c(s, i, o)).fail(l.reject).progress(c(s, n, e)) : --r;
                return r || l.resolveWith(i, o), l.promise()
            }
        });
        var Ee;
        se.fn.ready = function(t) {
            return se.ready.promise().done(t), this
        }, se.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(t) {
                t ? se.readyWait++ : se.ready(!0)
            },
            ready: function(t) {
                if (t === !0 ? !--se.readyWait : !se.isReady) {
                    if (!fe.body) return setTimeout(se.ready);
                    se.isReady = !0, t !== !0 && --se.readyWait > 0 || (Ee.resolveWith(fe, [se]), se.fn.triggerHandler && (se(fe).triggerHandler("ready"), se(fe).off("ready")))
                }
            }
        }), se.ready.promise = function(e) {
            if (!Ee)
                if (Ee = se.Deferred(), "complete" === fe.readyState) setTimeout(se.ready);
                else if (fe.addEventListener) fe.addEventListener("DOMContentLoaded", r, !1), t.addEventListener("load", r, !1);
                else {
                    fe.attachEvent("onreadystatechange", r), t.attachEvent("onload", r);
                    var n = !1;
                    try {
                        n = null == t.frameElement && fe.documentElement
                    } catch (i) {}
                    n && n.doScroll && ! function s() {
                        if (!se.isReady) {
                            try {
                                n.doScroll("left")
                            } catch (t) {
                                return setTimeout(s, 50)
                            }
                            a(), se.ready()
                        }
                    }()
                }
            return Ee.promise(e)
        };
        var Te, _e = "undefined";
        for (Te in se(ne)) break;
        ne.ownLast = "0" !== Te, ne.inlineBlockNeedsLayout = !1, se(function() {
            var t, e, n, i;
            n = fe.getElementsByTagName("body")[0], n && n.style && (e = fe.createElement("div"), i = fe.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), typeof e.style.zoom !== _e && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ne.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n.removeChild(i))
        }),
            function() {
                var t = fe.createElement("div");
                if (null == ne.deleteExpando) {
                    ne.deleteExpando = !0;
                    try {
                        delete t.test
                    } catch (e) {
                        ne.deleteExpando = !1
                    }
                }
                t = null
            }(), se.acceptData = function(t) {
            var e = se.noData[(t.nodeName + " ").toLowerCase()],
                n = +t.nodeType || 1;
            return 1 !== n && 9 !== n ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
        };
        var we = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            ke = /([A-Z])/g;
        se.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(t) {
                return t = t.nodeType ? se.cache[t[se.expando]] : t[se.expando], !!t && !c(t)
            },
            data: function(t, e, n) {
                return d(t, e, n)
            },
            removeData: function(t, e) {
                return u(t, e)
            },
            _data: function(t, e, n) {
                return d(t, e, n, !0)
            },
            _removeData: function(t, e) {
                return u(t, e, !0)
            }
        }), se.fn.extend({
            data: function(t, e) {
                var n, i, s, o = this[0],
                    a = o && o.attributes;
                if (void 0 === t) {
                    if (this.length && (s = se.data(o), 1 === o.nodeType && !se._data(o, "parsedAttrs"))) {
                        for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = se.camelCase(i.slice(5)), l(o, i, s[i])));
                        se._data(o, "parsedAttrs", !0)
                    }
                    return s
                }
                return "object" == typeof t ? this.each(function() {
                    se.data(this, t)
                }) : arguments.length > 1 ? this.each(function() {
                    se.data(this, t, e)
                }) : o ? l(o, t, se.data(o, t)) : void 0
            },
            removeData: function(t) {
                return this.each(function() {
                    se.removeData(this, t)
                })
            }
        }), se.extend({
            queue: function(t, e, n) {
                var i;
                return t ? (e = (e || "fx") + "queue", i = se._data(t, e), n && (!i || se.isArray(n) ? i = se._data(t, e, se.makeArray(n)) : i.push(n)), i || []) : void 0
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var n = se.queue(t, e),
                    i = n.length,
                    s = n.shift(),
                    o = se._queueHooks(t, e),
                    a = function() {
                        se.dequeue(t, e)
                    };
                "inprogress" === s && (s = n.shift(), i--), s && ("fx" === e && n.unshift("inprogress"), delete o.stop, s.call(t, a, o)), !i && o && o.empty.fire()
            },
            _queueHooks: function(t, e) {
                var n = e + "queueHooks";
                return se._data(t, n) || se._data(t, n, {
                        empty: se.Callbacks("once memory").add(function() {
                            se._removeData(t, e + "queue"), se._removeData(t, n)
                        })
                    })
            }
        }), se.fn.extend({
            queue: function(t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? se.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var n = se.queue(this, t, e);
                    se._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && se.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    se.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var n, i = 1,
                    s = se.Deferred(),
                    o = this,
                    a = this.length,
                    r = function() {
                        --i || s.resolveWith(o, [o])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;) n = se._data(o[a], t + "queueHooks"), n && n.empty && (i++, n.empty.add(r));
                return r(), s.promise(e)
            }
        });
        var Le = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Ce = ["Top", "Right", "Bottom", "Left"],
            Ae = function(t, e) {
                return t = e || t, "none" === se.css(t, "display") || !se.contains(t.ownerDocument, t)
            },
            xe = se.access = function(t, e, n, i, s, o, a) {
                var r = 0,
                    l = t.length,
                    c = null == n;
                if ("object" === se.type(n)) {
                    s = !0;
                    for (r in n) se.access(t, e, r, n[r], !0, o, a)
                } else if (void 0 !== i && (s = !0, se.isFunction(i) || (a = !0), c && (a ? (e.call(t, i), e = null) : (c = e, e = function(t, e, n) {
                        return c.call(se(t), n)
                    })), e))
                    for (; l > r; r++) e(t[r], n, a ? i : i.call(t[r], r, e(t[r], n)));
                return s ? t : c ? e.call(t) : l ? e(t[0], n) : o
            },
            Ie = /^(?:checkbox|radio)$/i;
        ! function() {
            var t = fe.createElement("input"),
                e = fe.createElement("div"),
                n = fe.createDocumentFragment();
            if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ne.leadingWhitespace = 3 === e.firstChild.nodeType, ne.tbody = !e.getElementsByTagName("tbody").length, ne.htmlSerialize = !!e.getElementsByTagName("link").length, ne.html5Clone = "<:nav></:nav>" !== fe.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, n.appendChild(t), ne.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", ne.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, n.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", ne.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, ne.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function() {
                    ne.noCloneEvent = !1
                }), e.cloneNode(!0).click()), null == ne.deleteExpando) {
                ne.deleteExpando = !0;
                try {
                    delete e.test
                } catch (i) {
                    ne.deleteExpando = !1
                }
            }
        }(),
            function() {
                var e, n, i = fe.createElement("div");
                for (e in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) n = "on" + e, (ne[e + "Bubbles"] = n in t) || (i.setAttribute(n, "t"), ne[e + "Bubbles"] = i.attributes[n].expando === !1);
                i = null
            }();
        var De = /^(?:input|select|textarea)$/i,
            Me = /^key/,
            Oe = /^(?:mouse|pointer|contextmenu)|click/,
            Re = /^(?:focusinfocus|focusoutblur)$/,
            Ne = /^([^.]*)(?:\.(.+)|)$/;
        se.event = {
            global: {},
            add: function(t, e, n, i, s) {
                var o, a, r, l, c, d, u, h, p, f, m, g = se._data(t);
                if (g) {
                    for (n.handler && (l = n, n = l.handler, s = l.selector), n.guid || (n.guid = se.guid++), (a = g.events) || (a = g.events = {}), (d = g.handle) || (d = g.handle = function(t) {
                        return typeof se === _e || t && se.event.triggered === t.type ? void 0 : se.event.dispatch.apply(d.elem, arguments)
                    }, d.elem = t), e = (e || "").match(be) || [""], r = e.length; r--;) o = Ne.exec(e[r]) || [], p = m = o[1], f = (o[2] || "").split(".").sort(), p && (c = se.event.special[p] || {}, p = (s ? c.delegateType : c.bindType) || p, c = se.event.special[p] || {}, u = se.extend({
                        type: p,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: s,
                        needsContext: s && se.expr.match.needsContext.test(s),
                        namespace: f.join(".")
                    }, l), (h = a[p]) || (h = a[p] = [], h.delegateCount = 0, c.setup && c.setup.call(t, i, f, d) !== !1 || (t.addEventListener ? t.addEventListener(p, d, !1) : t.attachEvent && t.attachEvent("on" + p, d))), c.add && (c.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), s ? h.splice(h.delegateCount++, 0, u) : h.push(u), se.event.global[p] = !0);
                    t = null
                }
            },
            remove: function(t, e, n, i, s) {
                var o, a, r, l, c, d, u, h, p, f, m, g = se.hasData(t) && se._data(t);
                if (g && (d = g.events)) {
                    for (e = (e || "").match(be) || [""], c = e.length; c--;)
                        if (r = Ne.exec(e[c]) || [], p = m = r[1], f = (r[2] || "").split(".").sort(), p) {
                            for (u = se.event.special[p] || {}, p = (i ? u.delegateType : u.bindType) || p, h = d[p] || [], r = r[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = h.length; o--;) a = h[o], !s && m !== a.origType || n && n.guid !== a.guid || r && !r.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (h.splice(o, 1), a.selector && h.delegateCount--, u.remove && u.remove.call(t, a));
                            l && !h.length && (u.teardown && u.teardown.call(t, f, g.handle) !== !1 || se.removeEvent(t, p, g.handle), delete d[p])
                        } else
                            for (p in d) se.event.remove(t, p + e[c], n, i, !0);
                    se.isEmptyObject(d) && (delete g.handle, se._removeData(t, "events"))
                }
            },
            trigger: function(e, n, i, s) {
                var o, a, r, l, c, d, u, h = [i || fe],
                    p = ee.call(e, "type") ? e.type : e,
                    f = ee.call(e, "namespace") ? e.namespace.split(".") : [];
                if (r = d = i = i || fe, 3 !== i.nodeType && 8 !== i.nodeType && !Re.test(p + se.event.triggered) && (p.indexOf(".") >= 0 && (f = p.split("."), p = f.shift(), f.sort()), a = p.indexOf(":") < 0 && "on" + p, e = e[se.expando] ? e : new se.Event(p, "object" == typeof e && e), e.isTrigger = s ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : se.makeArray(n, [e]), c = se.event.special[p] || {}, s || !c.trigger || c.trigger.apply(i, n) !== !1)) {
                    if (!s && !c.noBubble && !se.isWindow(i)) {
                        for (l = c.delegateType || p, Re.test(l + p) || (r = r.parentNode); r; r = r.parentNode) h.push(r), d = r;
                        d === (i.ownerDocument || fe) && h.push(d.defaultView || d.parentWindow || t)
                    }
                    for (u = 0;
                         (r = h[u++]) && !e.isPropagationStopped();) e.type = u > 1 ? l : c.bindType || p, o = (se._data(r, "events") || {})[e.type] && se._data(r, "handle"), o && o.apply(r, n), o = a && r[a], o && o.apply && se.acceptData(r) && (e.result = o.apply(r, n), e.result === !1 && e.preventDefault());
                    if (e.type = p, !s && !e.isDefaultPrevented() && (!c._default || c._default.apply(h.pop(), n) === !1) && se.acceptData(i) && a && i[p] && !se.isWindow(i)) {
                        d = i[a], d && (i[a] = null), se.event.triggered = p;
                        try {
                            i[p]()
                        } catch (m) {}
                        se.event.triggered = void 0, d && (i[a] = d)
                    }
                    return e.result
                }
            },
            dispatch: function(t) {
                t = se.event.fix(t);
                var e, n, i, s, o, a = [],
                    r = q.call(arguments),
                    l = (se._data(this, "events") || {})[t.type] || [],
                    c = se.event.special[t.type] || {};
                if (r[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                    for (a = se.event.handlers.call(this, t, l), e = 0;
                         (s = a[e++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = s.elem, o = 0;
                             (i = s.handlers[o++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(i.namespace)) && (t.handleObj = i, t.data = i.data, n = ((se.event.special[i.origType] || {}).handle || i.handler).apply(s.elem, r), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, t), t.result
                }
            },
            handlers: function(t, e) {
                var n, i, s, o, a = [],
                    r = e.delegateCount,
                    l = t.target;
                if (r && l.nodeType && (!t.button || "click" !== t.type))
                    for (; l != this; l = l.parentNode || this)
                        if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                            for (s = [], o = 0; r > o; o++) i = e[o], n = i.selector + " ", void 0 === s[n] && (s[n] = i.needsContext ? se(n, this).index(l) >= 0 : se.find(n, this, null, [l]).length), s[n] && s.push(i);
                            s.length && a.push({
                                elem: l,
                                handlers: s
                            })
                        }
                return r < e.length && a.push({
                    elem: this,
                    handlers: e.slice(r)
                }), a
            },
            fix: function(t) {
                if (t[se.expando]) return t;
                var e, n, i, s = t.type,
                    o = t,
                    a = this.fixHooks[s];
                for (a || (this.fixHooks[s] = a = Oe.test(s) ? this.mouseHooks : Me.test(s) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, t = new se.Event(o), e = i.length; e--;) n = i[e], t[n] = o[n];
                return t.target || (t.target = o.srcElement || fe), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, a.filter ? a.filter(t, o) : t
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(t, e) {
                    var n, i, s, o = e.button,
                        a = e.fromElement;
                    return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || fe, s = i.documentElement, n = i.body, t.pageX = e.clientX + (s && s.scrollLeft || n && n.scrollLeft || 0) - (s && s.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (s && s.scrollTop || n && n.scrollTop || 0) - (s && s.clientTop || n && n.clientTop || 0)), !t.relatedTarget && a && (t.relatedTarget = a === t.target ? e.toElement : a), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== f() && this.focus) try {
                            return this.focus(), !1
                        } catch (t) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === f() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return se.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    },
                    _default: function(t) {
                        return se.nodeName(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            },
            simulate: function(t, e, n, i) {
                var s = se.extend(new se.Event, n, {
                    type: t,
                    isSimulated: !0,
                    originalEvent: {}
                });
                i ? se.event.trigger(s, null, e) : se.event.dispatch.call(e, s), s.isDefaultPrevented() && n.preventDefault()
            }
        }, se.removeEvent = fe.removeEventListener ? function(t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n, !1)
        } : function(t, e, n) {
            var i = "on" + e;
            t.detachEvent && (typeof t[i] === _e && (t[i] = null), t.detachEvent(i, n))
        }, se.Event = function(t, e) {
            return this instanceof se.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? h : p) : this.type = t, e && se.extend(this, e), this.timeStamp = t && t.timeStamp || se.now(), void(this[se.expando] = !0)) : new se.Event(t, e)
        }, se.Event.prototype = {
            isDefaultPrevented: p,
            isPropagationStopped: p,
            isImmediatePropagationStopped: p,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = h, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = h, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = h, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, se.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(t, e) {
            se.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var n, i = this,
                        s = t.relatedTarget,
                        o = t.handleObj;
                    return (!s || s !== i && !se.contains(i, s)) && (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
                }
            }
        }), ne.submitBubbles || (se.event.special.submit = {
            setup: function() {
                return se.nodeName(this, "form") ? !1 : void se.event.add(this, "click._submit keypress._submit", function(t) {
                    var e = t.target,
                        n = se.nodeName(e, "input") || se.nodeName(e, "button") ? e.form : void 0;
                    n && !se._data(n, "submitBubbles") && (se.event.add(n, "submit._submit", function(t) {
                        t._submit_bubble = !0
                    }), se._data(n, "submitBubbles", !0))
                })
            },
            postDispatch: function(t) {
                t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && se.event.simulate("submit", this.parentNode, t, !0))
            },
            teardown: function() {
                return se.nodeName(this, "form") ? !1 : void se.event.remove(this, "._submit")
            }
        }), ne.changeBubbles || (se.event.special.change = {
            setup: function() {
                return De.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (se.event.add(this, "propertychange._change", function(t) {
                    "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
                }), se.event.add(this, "click._change", function(t) {
                    this._just_changed && !t.isTrigger && (this._just_changed = !1), se.event.simulate("change", this, t, !0)
                })), !1) : void se.event.add(this, "beforeactivate._change", function(t) {
                    var e = t.target;
                    De.test(e.nodeName) && !se._data(e, "changeBubbles") && (se.event.add(e, "change._change", function(t) {
                        !this.parentNode || t.isSimulated || t.isTrigger || se.event.simulate("change", this.parentNode, t, !0)
                    }), se._data(e, "changeBubbles", !0))
                })
            },
            handle: function(t) {
                var e = t.target;
                return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function() {
                return se.event.remove(this, "._change"), !De.test(this.nodeName)
            }
        }), ne.focusinBubbles || se.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var n = function(t) {
                se.event.simulate(e, t.target, se.event.fix(t), !0)
            };
            se.event.special[e] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        s = se._data(i, e);
                    s || i.addEventListener(t, n, !0), se._data(i, e, (s || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        s = se._data(i, e) - 1;
                    s ? se._data(i, e, s) : (i.removeEventListener(t, n, !0), se._removeData(i, e))
                }
            }
        }), se.fn.extend({
            on: function(t, e, n, i, s) {
                var o, a;
                if ("object" == typeof t) {
                    "string" != typeof e && (n = n || e, e = void 0);
                    for (o in t) this.on(o, e, n, t[o], s);
                    return this
                }
                if (null == n && null == i ? (i = e, n = e = void 0) : null == i && ("string" == typeof e ? (i = n, n = void 0) : (i = n, n = e, e = void 0)), i === !1) i = p;
                else if (!i) return this;
                return 1 === s && (a = i, i = function(t) {
                    return se().off(t), a.apply(this, arguments)
                }, i.guid = a.guid || (a.guid = se.guid++)), this.each(function() {
                    se.event.add(this, t, i, n, e)
                })
            },
            one: function(t, e, n, i) {
                return this.on(t, e, n, i, 1)
            },
            off: function(t, e, n) {
                var i, s;
                if (t && t.preventDefault && t.handleObj) return i = t.handleObj, se(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof t) {
                    for (s in t) this.off(s, e, t[s]);
                    return this
                }
                return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = p), this.each(function() {
                    se.event.remove(this, t, n, e)
                })
            },
            trigger: function(t, e) {
                return this.each(function() {
                    se.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var n = this[0];
                return n ? se.event.trigger(t, e, n, !0) : void 0
            }
        });
        var Pe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            $e = / jQuery\d+="(?:null|\d+)"/g,
            Ue = new RegExp("<(?:" + Pe + ")[\\s/>]", "i"),
            je = /^\s+/,
            Be = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Fe = /<([\w:]+)/,
            He = /<tbody/i,
            ze = /<|&#?\w+;/,
            We = /<(?:script|style|link)/i,
            Ve = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ge = /^$|\/(?:java|ecma)script/i,
            Xe = /^true\/(.*)/,
            Je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            qe = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: ne.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            Ye = m(fe),
            Ke = Ye.appendChild(fe.createElement("div"));
        qe.optgroup = qe.option, qe.tbody = qe.tfoot = qe.colgroup = qe.caption = qe.thead, qe.th = qe.td, se.extend({
            clone: function(t, e, n) {
                var i, s, o, a, r, l = se.contains(t.ownerDocument, t);
                if (ne.html5Clone || se.isXMLDoc(t) || !Ue.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (Ke.innerHTML = t.outerHTML, Ke.removeChild(o = Ke.firstChild)), !(ne.noCloneEvent && ne.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || se.isXMLDoc(t)))
                    for (i = g(o), r = g(t), a = 0; null != (s = r[a]); ++a) i[a] && _(s, i[a]);
                if (e)
                    if (n)
                        for (r = r || g(t), i = i || g(o), a = 0; null != (s = r[a]); a++) T(s, i[a]);
                    else T(t, o);
                return i = g(o, "script"), i.length > 0 && E(i, !l && g(t, "script")), i = r = s = null, o
            },
            buildFragment: function(t, e, n, i) {
                for (var s, o, a, r, l, c, d, u = t.length, h = m(e), p = [], f = 0; u > f; f++)
                    if (o = t[f], o || 0 === o)
                        if ("object" === se.type(o)) se.merge(p, o.nodeType ? [o] : o);
                        else if (ze.test(o)) {
                            for (r = r || h.appendChild(e.createElement("div")), l = (Fe.exec(o) || ["", ""])[1].toLowerCase(), d = qe[l] || qe._default, r.innerHTML = d[1] + o.replace(Be, "<$1></$2>") + d[2], s = d[0]; s--;) r = r.lastChild;
                            if (!ne.leadingWhitespace && je.test(o) && p.push(e.createTextNode(je.exec(o)[0])), !ne.tbody)
                                for (o = "table" !== l || He.test(o) ? "<table>" !== d[1] || He.test(o) ? 0 : r : r.firstChild, s = o && o.childNodes.length; s--;) se.nodeName(c = o.childNodes[s], "tbody") && !c.childNodes.length && o.removeChild(c);
                            for (se.merge(p, r.childNodes), r.textContent = ""; r.firstChild;) r.removeChild(r.firstChild);
                            r = h.lastChild
                        } else p.push(e.createTextNode(o));
                for (r && h.removeChild(r), ne.appendChecked || se.grep(g(p, "input"), v), f = 0; o = p[f++];)
                    if ((!i || -1 === se.inArray(o, i)) && (a = se.contains(o.ownerDocument, o), r = g(h.appendChild(o), "script"), a && E(r), n))
                        for (s = 0; o = r[s++];) Ge.test(o.type || "") && n.push(o);
                return r = null, h
            },
            cleanData: function(t, e) {
                for (var n, i, s, o, a = 0, r = se.expando, l = se.cache, c = ne.deleteExpando, d = se.event.special; null != (n = t[a]); a++)
                    if ((e || se.acceptData(n)) && (s = n[r], o = s && l[s])) {
                        if (o.events)
                            for (i in o.events) d[i] ? se.event.remove(n, i) : se.removeEvent(n, i, o.handle);
                        l[s] && (delete l[s], c ? delete n[r] : typeof n.removeAttribute !== _e ? n.removeAttribute(r) : n[r] = null, J.push(s))
                    }
            }
        }), se.fn.extend({
            text: function(t) {
                return xe(this, function(t) {
                    return void 0 === t ? se.text(this) : this.empty().append((this[0] && this[0].ownerDocument || fe).createTextNode(t))
                }, null, t, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = y(this, t);
                        e.appendChild(t)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = y(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            remove: function(t, e) {
                for (var n, i = t ? se.filter(t, this) : this, s = 0; null != (n = i[s]); s++) e || 1 !== n.nodeType || se.cleanData(g(n)), n.parentNode && (e && se.contains(n.ownerDocument, n) && E(g(n, "script")), n.parentNode.removeChild(n));
                return this
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) {
                    for (1 === t.nodeType && se.cleanData(g(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                    t.options && se.nodeName(t, "select") && (t.options.length = 0)
                }
                return this
            },
            clone: function(t, e) {
                return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                    return se.clone(this, t, e)
                })
            },
            html: function(t) {
                return xe(this, function(t) {
                    var e = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace($e, "") : void 0;
                    if (!("string" != typeof t || We.test(t) || !ne.htmlSerialize && Ue.test(t) || !ne.leadingWhitespace && je.test(t) || qe[(Fe.exec(t) || ["", ""])[1].toLowerCase()])) {
                        t = t.replace(Be, "<$1></$2>");
                        try {
                            for (; i > n; n++) e = this[n] || {}, 1 === e.nodeType && (se.cleanData(g(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (s) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = arguments[0];
                return this.domManip(arguments, function(e) {
                    t = this.parentNode, se.cleanData(g(this)), t && t.replaceChild(e, this)
                }), t && (t.length || t.nodeType) ? this : this.remove()
            },
            detach: function(t) {
                return this.remove(t, !0)
            },
            domManip: function(t, e) {
                t = Y.apply([], t);
                var n, i, s, o, a, r, l = 0,
                    c = this.length,
                    d = this,
                    u = c - 1,
                    h = t[0],
                    p = se.isFunction(h);
                if (p || c > 1 && "string" == typeof h && !ne.checkClone && Ve.test(h)) return this.each(function(n) {
                    var i = d.eq(n);
                    p && (t[0] = h.call(this, n, i.html())), i.domManip(t, e)
                });
                if (c && (r = se.buildFragment(t, this[0].ownerDocument, !1, this), n = r.firstChild, 1 === r.childNodes.length && (r = n), n)) {
                    for (o = se.map(g(r, "script"), b), s = o.length; c > l; l++) i = r, l !== u && (i = se.clone(i, !0, !0), s && se.merge(o, g(i, "script"))), e.call(this[l], i, l);
                    if (s)
                        for (a = o[o.length - 1].ownerDocument, se.map(o, S), l = 0; s > l; l++) i = o[l], Ge.test(i.type || "") && !se._data(i, "globalEval") && se.contains(a, i) && (i.src ? se._evalUrl && se._evalUrl(i.src) : se.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Je, "")));
                    r = n = null
                }
                return this
            }
        }), se.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            se.fn[t] = function(t) {
                for (var n, i = 0, s = [], o = se(t), a = o.length - 1; a >= i; i++) n = i === a ? this : this.clone(!0), se(o[i])[e](n), K.apply(s, n.get());
                return this.pushStack(s)
            }
        });
        var Ze, Qe = {};
        ! function() {
            var t;
            ne.shrinkWrapBlocks = function() {
                if (null != t) return t;
                t = !1;
                var e, n, i;
                return n = fe.getElementsByTagName("body")[0], n && n.style ? (e = fe.createElement("div"), i = fe.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), typeof e.style.zoom !== _e && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(fe.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), n.removeChild(i), t) : void 0
            }
        }();
        var tn, en, nn = /^margin/,
            sn = new RegExp("^(" + Le + ")(?!px)[a-z%]+$", "i"),
            on = /^(top|right|bottom|left)$/;
        t.getComputedStyle ? (tn = function(t) {
            return t.ownerDocument.defaultView.getComputedStyle(t, null)
        }, en = function(t, e, n) {
            var i, s, o, a, r = t.style;
            return n = n || tn(t), a = n ? n.getPropertyValue(e) || n[e] : void 0, n && ("" !== a || se.contains(t.ownerDocument, t) || (a = se.style(t, e)), sn.test(a) && nn.test(e) && (i = r.width, s = r.minWidth, o = r.maxWidth, r.minWidth = r.maxWidth = r.width = a, a = n.width, r.width = i, r.minWidth = s, r.maxWidth = o)), void 0 === a ? a : a + ""
        }) : fe.documentElement.currentStyle && (tn = function(t) {
            return t.currentStyle
        }, en = function(t, e, n) {
            var i, s, o, a, r = t.style;
            return n = n || tn(t), a = n ? n[e] : void 0, null == a && r && r[e] && (a = r[e]), sn.test(a) && !on.test(e) && (i = r.left, s = t.runtimeStyle, o = s && s.left, o && (s.left = t.currentStyle.left), r.left = "fontSize" === e ? "1em" : a, a = r.pixelLeft + "px", r.left = i, o && (s.left = o)), void 0 === a ? a : a + "" || "auto"
        }),
            function() {
                function e() {
                    var e, n, i, s;
                    n = fe.getElementsByTagName("body")[0], n && n.style && (e = fe.createElement("div"), i = fe.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = a = !1, l = !0, t.getComputedStyle && (o = "1%" !== (t.getComputedStyle(e, null) || {}).top, a = "4px" === (t.getComputedStyle(e, null) || {
                            width: "4px"
                        }).width, s = e.appendChild(fe.createElement("div")), s.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", s.style.marginRight = s.style.width = "0", e.style.width = "1px", l = !parseFloat((t.getComputedStyle(s, null) || {}).marginRight)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s = e.getElementsByTagName("td"), s[0].style.cssText = "margin:0;border:0;padding:0;display:none", r = 0 === s[0].offsetHeight, r && (s[0].style.display = "", s[1].style.display = "none", r = 0 === s[0].offsetHeight), n.removeChild(i))
                }
                var n, i, s, o, a, r, l;
                n = fe.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", s = n.getElementsByTagName("a")[0], i = s && s.style, i && (i.cssText = "float:left;opacity:.5", ne.opacity = "0.5" === i.opacity, ne.cssFloat = !!i.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", ne.clearCloneStyle = "content-box" === n.style.backgroundClip, ne.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing, se.extend(ne, {
                    reliableHiddenOffsets: function() {
                        return null == r && e(), r
                    },
                    boxSizingReliable: function() {
                        return null == a && e(), a
                    },
                    pixelPosition: function() {
                        return null == o && e(), o
                    },
                    reliableMarginRight: function() {
                        return null == l && e(), l
                    }
                }))
            }(), se.swap = function(t, e, n, i) {
            var s, o, a = {};
            for (o in e) a[o] = t.style[o], t.style[o] = e[o];
            s = n.apply(t, i || []);
            for (o in e) t.style[o] = a[o];
            return s
        };
        var an = /alpha\([^)]*\)/i,
            rn = /opacity\s*=\s*([^)]*)/,
            ln = /^(none|table(?!-c[ea]).+)/,
            cn = new RegExp("^(" + Le + ")(.*)$", "i"),
            dn = new RegExp("^([+-])=(" + Le + ")", "i"),
            un = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            hn = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            pn = ["Webkit", "O", "Moz", "ms"];
        se.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var n = en(t, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": ne.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(t, e, n, i) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var s, o, a, r = se.camelCase(e),
                        l = t.style;
                    if (e = se.cssProps[r] || (se.cssProps[r] = C(l, r)), a = se.cssHooks[e] || se.cssHooks[r], void 0 === n) return a && "get" in a && void 0 !== (s = a.get(t, !1, i)) ? s : l[e];
                    if (o = typeof n, "string" === o && (s = dn.exec(n)) && (n = (s[1] + 1) * s[2] + parseFloat(se.css(t, e)), o = "number"), null != n && n === n && ("number" !== o || se.cssNumber[r] || (n += "px"), ne.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(t, n, i))))) try {
                        l[e] = n
                    } catch (c) {}
                }
            },
            css: function(t, e, n, i) {
                var s, o, a, r = se.camelCase(e);
                return e = se.cssProps[r] || (se.cssProps[r] = C(t.style, r)), a = se.cssHooks[e] || se.cssHooks[r], a && "get" in a && (o = a.get(t, !0, n)), void 0 === o && (o = en(t, e, i)), "normal" === o && e in hn && (o = hn[e]), "" === n || n ? (s = parseFloat(o), n === !0 || se.isNumeric(s) ? s || 0 : o) : o
            }
        }), se.each(["height", "width"], function(t, e) {
            se.cssHooks[e] = {
                get: function(t, n, i) {
                    return n ? ln.test(se.css(t, "display")) && 0 === t.offsetWidth ? se.swap(t, un, function() {
                        return D(t, e, i)
                    }) : D(t, e, i) : void 0
                },
                set: function(t, n, i) {
                    var s = i && tn(t);
                    return x(t, n, i ? I(t, e, i, ne.boxSizing && "border-box" === se.css(t, "boxSizing", !1, s), s) : 0)
                }
            }
        }), ne.opacity || (se.cssHooks.opacity = {
            get: function(t, e) {
                return rn.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
            },
            set: function(t, e) {
                var n = t.style,
                    i = t.currentStyle,
                    s = se.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                    o = i && i.filter || n.filter || "";
                n.zoom = 1, (e >= 1 || "" === e) && "" === se.trim(o.replace(an, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = an.test(o) ? o.replace(an, s) : o + " " + s)
            }
        }), se.cssHooks.marginRight = L(ne.reliableMarginRight, function(t, e) {
            return e ? se.swap(t, {
                display: "inline-block"
            }, en, [t, "marginRight"]) : void 0
        }), se.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            se.cssHooks[t + e] = {
                expand: function(n) {
                    for (var i = 0, s = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) s[t + Ce[i] + e] = o[i] || o[i - 2] || o[0];
                    return s
                }
            }, nn.test(t) || (se.cssHooks[t + e].set = x)
        }), se.fn.extend({
            css: function(t, e) {
                return xe(this, function(t, e, n) {
                    var i, s, o = {},
                        a = 0;
                    if (se.isArray(e)) {
                        for (i = tn(t), s = e.length; s > a; a++) o[e[a]] = se.css(t, e[a], !1, i);
                        return o
                    }
                    return void 0 !== n ? se.style(t, e, n) : se.css(t, e)
                }, t, e, arguments.length > 1)
            },
            show: function() {
                return A(this, !0)
            },
            hide: function() {
                return A(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    Ae(this) ? se(this).show() : se(this).hide()
                })
            }
        }), se.Tween = M, M.prototype = {
            constructor: M,
            init: function(t, e, n, i, s, o) {
                this.elem = t, this.prop = n, this.easing = s || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (se.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var t = M.propHooks[this.prop];
                return t && t.get ? t.get(this) : M.propHooks._default.get(this)
            },
            run: function(t) {
                var e, n = M.propHooks[this.prop];
                return this.pos = e = this.options.duration ? se.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : M.propHooks._default.set(this), this
            }
        }, M.prototype.init.prototype = M.prototype, M.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = se.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
                },
                set: function(t) {
                    se.fx.step[t.prop] ? se.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[se.cssProps[t.prop]] || se.cssHooks[t.prop]) ? se.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
                }
            }
        }, M.propHooks.scrollTop = M.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, se.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            }
        }, se.fx = M.prototype.init, se.fx.step = {};
        var fn, mn, gn = /^(?:toggle|show|hide)$/,
            vn = new RegExp("^(?:([+-])=|)(" + Le + ")([a-z%]*)$", "i"),
            yn = /queueHooks$/,
            bn = [P],
            Sn = {
                "*": [function(t, e) {
                    var n = this.createTween(t, e),
                        i = n.cur(),
                        s = vn.exec(e),
                        o = s && s[3] || (se.cssNumber[t] ? "" : "px"),
                        a = (se.cssNumber[t] || "px" !== o && +i) && vn.exec(se.css(n.elem, t)),
                        r = 1,
                        l = 20;
                    if (a && a[3] !== o) {
                        o = o || a[3], s = s || [], a = +i || 1;
                        do r = r || ".5", a /= r, se.style(n.elem, t, a + o); while (r !== (r = n.cur() / i) && 1 !== r && --l)
                    }
                    return s && (a = n.start = +a || +i || 0, n.unit = o, n.end = s[1] ? a + (s[1] + 1) * s[2] : +s[2]), n
                }]
            };
        se.Animation = se.extend(U, {
            tweener: function(t, e) {
                se.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                for (var n, i = 0, s = t.length; s > i; i++) n = t[i], Sn[n] = Sn[n] || [], Sn[n].unshift(e)
            },
            prefilter: function(t, e) {
                e ? bn.unshift(t) : bn.push(t)
            }
        }), se.speed = function(t, e, n) {
            var i = t && "object" == typeof t ? se.extend({}, t) : {
                complete: n || !n && e || se.isFunction(t) && t,
                duration: t,
                easing: n && e || e && !se.isFunction(e) && e
            };
            return i.duration = se.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in se.fx.speeds ? se.fx.speeds[i.duration] : se.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                se.isFunction(i.old) && i.old.call(this), i.queue && se.dequeue(this, i.queue)
            }, i
        }, se.fn.extend({
            fadeTo: function(t, e, n, i) {
                return this.filter(Ae).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, n, i)
            },
            animate: function(t, e, n, i) {
                var s = se.isEmptyObject(t),
                    o = se.speed(e, n, i),
                    a = function() {
                        var e = U(this, se.extend({}, t), o);
                        (s || se._data(this, "finish")) && e.stop(!0)
                    };
                return a.finish = a, s || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(t, e, n) {
                var i = function(t) {
                    var e = t.stop;
                    delete t.stop, e(n)
                };
                return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        s = null != t && t + "queueHooks",
                        o = se.timers,
                        a = se._data(this);
                    if (s) a[s] && a[s].stop && i(a[s]);
                    else
                        for (s in a) a[s] && a[s].stop && yn.test(s) && i(a[s]);
                    for (s = o.length; s--;) o[s].elem !== this || null != t && o[s].queue !== t || (o[s].anim.stop(n), e = !1, o.splice(s, 1));
                    (e || !n) && se.dequeue(this, t)
                })
            },
            finish: function(t) {
                return t !== !1 && (t = t || "fx"), this.each(function() {
                    var e, n = se._data(this),
                        i = n[t + "queue"],
                        s = n[t + "queueHooks"],
                        o = se.timers,
                        a = i ? i.length : 0;
                    for (n.finish = !0, se.queue(this, t, []), s && s.stop && s.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                    for (e = 0; a > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
                    delete n.finish
                })
            }
        }), se.each(["toggle", "show", "hide"], function(t, e) {
            var n = se.fn[e];
            se.fn[e] = function(t, i, s) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(R(e, !0), t, i, s)
            }
        }), se.each({
            slideDown: R("show"),
            slideUp: R("hide"),
            slideToggle: R("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            se.fn[t] = function(t, n, i) {
                return this.animate(e, t, n, i)
            }
        }), se.timers = [], se.fx.tick = function() {
            var t, e = se.timers,
                n = 0;
            for (fn = se.now(); n < e.length; n++) t = e[n], t() || e[n] !== t || e.splice(n--, 1);
            e.length || se.fx.stop(), fn = void 0
        }, se.fx.timer = function(t) {
            se.timers.push(t), t() ? se.fx.start() : se.timers.pop()
        }, se.fx.interval = 13, se.fx.start = function() {
            mn || (mn = setInterval(se.fx.tick, se.fx.interval))
        }, se.fx.stop = function() {
            clearInterval(mn), mn = null
        }, se.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, se.fn.delay = function(t, e) {
            return t = se.fx ? se.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, n) {
                var i = setTimeout(e, t);
                n.stop = function() {
                    clearTimeout(i)
                }
            })
        },
            function() {
                var t, e, n, i, s;
                e = fe.createElement("div"), e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = e.getElementsByTagName("a")[0], n = fe.createElement("select"), s = n.appendChild(fe.createElement("option")), t = e.getElementsByTagName("input")[0], i.style.cssText = "top:1px", ne.getSetAttribute = "t" !== e.className, ne.style = /top/.test(i.getAttribute("style")), ne.hrefNormalized = "/a" === i.getAttribute("href"), ne.checkOn = !!t.value, ne.optSelected = s.selected, ne.enctype = !!fe.createElement("form").enctype, n.disabled = !0, ne.optDisabled = !s.disabled, t = fe.createElement("input"), t.setAttribute("value", ""), ne.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), ne.radioValue = "t" === t.value
            }();
        var En = /\r/g;
        se.fn.extend({
            val: function(t) {
                var e, n, i, s = this[0]; {
                    if (arguments.length) return i = se.isFunction(t), this.each(function(n) {
                        var s;
                        1 === this.nodeType && (s = i ? t.call(this, n, se(this).val()) : t, null == s ? s = "" : "number" == typeof s ? s += "" : se.isArray(s) && (s = se.map(s, function(t) {
                            return null == t ? "" : t + ""
                        })), e = se.valHooks[this.type] || se.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, s, "value") || (this.value = s))
                    });
                    if (s) return e = se.valHooks[s.type] || se.valHooks[s.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(s, "value")) ? n : (n = s.value, "string" == typeof n ? n.replace(En, "") : null == n ? "" : n)
                }
            }
        }), se.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = se.find.attr(t, "value");
                        return null != e ? e : se.trim(se.text(t))
                    }
                },
                select: {
                    get: function(t) {
                        for (var e, n, i = t.options, s = t.selectedIndex, o = "select-one" === t.type || 0 > s, a = o ? null : [], r = o ? s + 1 : i.length, l = 0 > s ? r : o ? s : 0; r > l; l++)
                            if (n = i[l], !(!n.selected && l !== s || (ne.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && se.nodeName(n.parentNode, "optgroup"))) {
                                if (e = se(n).val(), o) return e;
                                a.push(e)
                            }
                        return a
                    },
                    set: function(t, e) {
                        for (var n, i, s = t.options, o = se.makeArray(e), a = s.length; a--;)
                            if (i = s[a], se.inArray(se.valHooks.option.get(i), o) >= 0) try {
                                i.selected = n = !0
                            } catch (r) {
                                i.scrollHeight
                            } else i.selected = !1;
                        return n || (t.selectedIndex = -1), s
                    }
                }
            }
        }), se.each(["radio", "checkbox"], function() {
            se.valHooks[this] = {
                set: function(t, e) {
                    return se.isArray(e) ? t.checked = se.inArray(se(t).val(), e) >= 0 : void 0
                }
            }, ne.checkOn || (se.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var Tn, _n, wn = se.expr.attrHandle,
            kn = /^(?:checked|selected)$/i,
            Ln = ne.getSetAttribute,
            Cn = ne.input;
        se.fn.extend({
            attr: function(t, e) {
                return xe(this, se.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    se.removeAttr(this, t)
                })
            }
        }), se.extend({
            attr: function(t, e, n) {
                var i, s, o = t.nodeType;
                if (t && 3 !== o && 8 !== o && 2 !== o) return typeof t.getAttribute === _e ? se.prop(t, e, n) : (1 === o && se.isXMLDoc(t) || (e = e.toLowerCase(), i = se.attrHooks[e] || (se.expr.match.bool.test(e) ? _n : Tn)), void 0 === n ? i && "get" in i && null !== (s = i.get(t, e)) ? s : (s = se.find.attr(t, e), null == s ? void 0 : s) : null !== n ? i && "set" in i && void 0 !== (s = i.set(t, n, e)) ? s : (t.setAttribute(e, n + ""), n) : void se.removeAttr(t, e))
            },
            removeAttr: function(t, e) {
                var n, i, s = 0,
                    o = e && e.match(be);
                if (o && 1 === t.nodeType)
                    for (; n = o[s++];) i = se.propFix[n] || n, se.expr.match.bool.test(n) ? Cn && Ln || !kn.test(n) ? t[i] = !1 : t[se.camelCase("default-" + n)] = t[i] = !1 : se.attr(t, n, ""), t.removeAttribute(Ln ? n : i)
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!ne.radioValue && "radio" === e && se.nodeName(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            }
        }), _n = {
            set: function(t, e, n) {
                return e === !1 ? se.removeAttr(t, n) : Cn && Ln || !kn.test(n) ? t.setAttribute(!Ln && se.propFix[n] || n, n) : t[se.camelCase("default-" + n)] = t[n] = !0, n
            }
        }, se.each(se.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var n = wn[e] || se.find.attr;
            wn[e] = Cn && Ln || !kn.test(e) ? function(t, e, i) {
                var s, o;
                return i || (o = wn[e], wn[e] = s, s = null != n(t, e, i) ? e.toLowerCase() : null, wn[e] = o), s
            } : function(t, e, n) {
                return n ? void 0 : t[se.camelCase("default-" + e)] ? e.toLowerCase() : null
            }
        }), Cn && Ln || (se.attrHooks.value = {
            set: function(t, e, n) {
                return se.nodeName(t, "input") ? void(t.defaultValue = e) : Tn && Tn.set(t, e, n)
            }
        }), Ln || (Tn = {
            set: function(t, e, n) {
                var i = t.getAttributeNode(n);
                return i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)), i.value = e += "", "value" === n || e === t.getAttribute(n) ? e : void 0
            }
        }, wn.id = wn.name = wn.coords = function(t, e, n) {
            var i;
            return n ? void 0 : (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null
        }, se.valHooks.button = {
            get: function(t, e) {
                var n = t.getAttributeNode(e);
                return n && n.specified ? n.value : void 0
            },
            set: Tn.set
        }, se.attrHooks.contenteditable = {
            set: function(t, e, n) {
                Tn.set(t, "" === e ? !1 : e, n)
            }
        }, se.each(["width", "height"], function(t, e) {
            se.attrHooks[e] = {
                set: function(t, n) {
                    return "" === n ? (t.setAttribute(e, "auto"), n) : void 0
                }
            }
        })), ne.style || (se.attrHooks.style = {
            get: function(t) {
                return t.style.cssText || void 0
            },
            set: function(t, e) {
                return t.style.cssText = e + ""
            }
        });
        var An = /^(?:input|select|textarea|button|object)$/i,
            xn = /^(?:a|area)$/i;
        se.fn.extend({
            prop: function(t, e) {
                return xe(this, se.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return t = se.propFix[t] || t, this.each(function() {
                    try {
                        this[t] = void 0, delete this[t]
                    } catch (e) {}
                })
            }
        }), se.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(t, e, n) {
                var i, s, o, a = t.nodeType;
                if (t && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !se.isXMLDoc(t), o && (e = se.propFix[e] || e, s = se.propHooks[e]), void 0 !== n ? s && "set" in s && void 0 !== (i = s.set(t, n, e)) ? i : t[e] = n : s && "get" in s && null !== (i = s.get(t, e)) ? i : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = se.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : An.test(t.nodeName) || xn.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            }
        }), ne.hrefNormalized || se.each(["href", "src"], function(t, e) {
            se.propHooks[e] = {
                get: function(t) {
                    return t.getAttribute(e, 4)
                }
            }
        }), ne.optSelected || (se.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
            }
        }), se.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            se.propFix[this.toLowerCase()] = this
        }), ne.enctype || (se.propFix.enctype = "encoding");
        var In = /[\t\r\n\f]/g;
        se.fn.extend({
            addClass: function(t) {
                var e, n, i, s, o, a, r = 0,
                    l = this.length,
                    c = "string" == typeof t && t;
                if (se.isFunction(t)) return this.each(function(e) {
                    se(this).addClass(t.call(this, e, this.className))
                });
                if (c)
                    for (e = (t || "").match(be) || []; l > r; r++)
                        if (n = this[r], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(In, " ") : " ")) {
                            for (o = 0; s = e[o++];) i.indexOf(" " + s + " ") < 0 && (i += s + " ");
                            a = se.trim(i), n.className !== a && (n.className = a)
                        }
                return this
            },
            removeClass: function(t) {
                var e, n, i, s, o, a, r = 0,
                    l = this.length,
                    c = 0 === arguments.length || "string" == typeof t && t;
                if (se.isFunction(t)) return this.each(function(e) {
                    se(this).removeClass(t.call(this, e, this.className))
                });
                if (c)
                    for (e = (t || "").match(be) || []; l > r; r++)
                        if (n = this[r], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(In, " ") : "")) {
                            for (o = 0; s = e[o++];)
                                for (; i.indexOf(" " + s + " ") >= 0;) i = i.replace(" " + s + " ", " ");
                            a = t ? se.trim(i) : "", n.className !== a && (n.className = a)
                        }
                return this
            },
            toggleClass: function(t, e) {
                var n = typeof t;
                return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : this.each(se.isFunction(t) ? function(n) {
                    se(this).toggleClass(t.call(this, n, this.className, e), e)
                } : function() {
                    if ("string" === n)
                        for (var e, i = 0, s = se(this), o = t.match(be) || []; e = o[i++];) s.hasClass(e) ? s.removeClass(e) : s.addClass(e);
                    else(n === _e || "boolean" === n) && (this.className && se._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : se._data(this, "__className__") || "")
                })
            },
            hasClass: function(t) {
                for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(In, " ").indexOf(e) >= 0) return !0;
                return !1
            }
        }), se.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
            se.fn[e] = function(t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        }), se.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            },
            bind: function(t, e, n) {
                return this.on(t, null, e, n)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, n, i) {
                return this.on(e, t, n, i)
            },
            undelegate: function(t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            }
        });
        var Dn = se.now(),
            Mn = /\?/,
            On = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        se.parseJSON = function(e) {
            if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
            var n, i = null,
                s = se.trim(e + "");
            return s && !se.trim(s.replace(On, function(t, e, s, o) {
                return n && e && (i = 0), 0 === i ? t : (n = s || e, i += !o - !s, "")
            })) ? Function("return " + s)() : se.error("Invalid JSON: " + e)
        }, se.parseXML = function(e) {
            var n, i;
            if (!e || "string" != typeof e) return null;
            try {
                t.DOMParser ? (i = new DOMParser, n = i.parseFromString(e, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(e))
            } catch (s) {
                n = void 0
            }
            return n && n.documentElement && !n.getElementsByTagName("parsererror").length || se.error("Invalid XML: " + e), n
        };
        var Rn, Nn, Pn = /#.*$/,
            $n = /([?&])_=[^&]*/,
            Un = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            jn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Bn = /^(?:GET|HEAD)$/,
            Fn = /^\/\//,
            Hn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            zn = {},
            Wn = {},
            Vn = "*/".concat("*");
        try {
            Nn = location.href
        } catch (Gn) {
            Nn = fe.createElement("a"), Nn.href = "", Nn = Nn.href
        }
        Rn = Hn.exec(Nn.toLowerCase()) || [], se.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Nn,
                type: "GET",
                isLocal: jn.test(Rn[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Vn,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": se.parseJSON,
                    "text xml": se.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? F(F(t, se.ajaxSettings), e) : F(se.ajaxSettings, t)
            },
            ajaxPrefilter: j(zn),
            ajaxTransport: j(Wn),
            ajax: function(t, e) {
                function n(t, e, n, i) {
                    var s, d, v, y, S, T = e;
                    2 !== b && (b = 2, r && clearTimeout(r), c = void 0, a = i || "", E.readyState = t > 0 ? 4 : 0, s = t >= 200 && 300 > t || 304 === t, n && (y = H(u, E, n)), y = z(u, y, E, s), s ? (u.ifModified && (S = E.getResponseHeader("Last-Modified"), S && (se.lastModified[o] = S), S = E.getResponseHeader("etag"), S && (se.etag[o] = S)), 204 === t || "HEAD" === u.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = y.state, d = y.data, v = y.error, s = !v)) : (v = T, (t || !T) && (T = "error", 0 > t && (t = 0))), E.status = t, E.statusText = (e || T) + "", s ? f.resolveWith(h, [d, T, E]) : f.rejectWith(h, [E, T, v]), E.statusCode(g), g = void 0, l && p.trigger(s ? "ajaxSuccess" : "ajaxError", [E, u, s ? d : v]), m.fireWith(h, [E, T]), l && (p.trigger("ajaxComplete", [E, u]), --se.active || se.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var i, s, o, a, r, l, c, d, u = se.ajaxSetup({}, e),
                    h = u.context || u,
                    p = u.context && (h.nodeType || h.jquery) ? se(h) : se.event,
                    f = se.Deferred(),
                    m = se.Callbacks("once memory"),
                    g = u.statusCode || {},
                    v = {},
                    y = {},
                    b = 0,
                    S = "canceled",
                    E = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (2 === b) {
                                if (!d)
                                    for (d = {}; e = Un.exec(a);) d[e[1].toLowerCase()] = e[2];
                                e = d[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() {
                            return 2 === b ? a : null
                        },
                        setRequestHeader: function(t, e) {
                            var n = t.toLowerCase();
                            return b || (t = y[n] = y[n] || t, v[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return b || (u.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (2 > b)
                                    for (e in t) g[e] = [g[e], t[e]];
                                else E.always(t[E.status]);
                            return this
                        },
                        abort: function(t) {
                            var e = t || S;
                            return c && c.abort(e), n(0, e), this
                        }
                    };
                if (f.promise(E).complete = m.add, E.success = E.done, E.error = E.fail, u.url = ((t || u.url || Nn) + "").replace(Pn, "").replace(Fn, Rn[1] + "//"), u.type = e.method || e.type || u.method || u.type, u.dataTypes = se.trim(u.dataType || "*").toLowerCase().match(be) || [""], null == u.crossDomain && (i = Hn.exec(u.url.toLowerCase()), u.crossDomain = !(!i || i[1] === Rn[1] && i[2] === Rn[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Rn[3] || ("http:" === Rn[1] ? "80" : "443")))), u.data && u.processData && "string" != typeof u.data && (u.data = se.param(u.data, u.traditional)), B(zn, u, e, E), 2 === b) return E;
                l = u.global, l && 0 === se.active++ && se.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !Bn.test(u.type), o = u.url, u.hasContent || (u.data && (o = u.url += (Mn.test(o) ? "&" : "?") + u.data, delete u.data), u.cache === !1 && (u.url = $n.test(o) ? o.replace($n, "$1_=" + Dn++) : o + (Mn.test(o) ? "&" : "?") + "_=" + Dn++)), u.ifModified && (se.lastModified[o] && E.setRequestHeader("If-Modified-Since", se.lastModified[o]), se.etag[o] && E.setRequestHeader("If-None-Match", se.etag[o])), (u.data && u.hasContent && u.contentType !== !1 || e.contentType) && E.setRequestHeader("Content-Type", u.contentType), E.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + Vn + "; q=0.01" : "") : u.accepts["*"]);
                for (s in u.headers) E.setRequestHeader(s, u.headers[s]);
                if (u.beforeSend && (u.beforeSend.call(h, E, u) === !1 || 2 === b)) return E.abort();
                S = "abort";
                for (s in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) E[s](u[s]);
                if (c = B(Wn, u, e, E)) {
                    E.readyState = 1, l && p.trigger("ajaxSend", [E, u]), u.async && u.timeout > 0 && (r = setTimeout(function() {
                        E.abort("timeout")
                    }, u.timeout));
                    try {
                        b = 1, c.send(v, n)
                    } catch (T) {
                        if (!(2 > b)) throw T;
                        n(-1, T)
                    }
                } else n(-1, "No Transport");
                return E
            },
            getJSON: function(t, e, n) {
                return se.get(t, e, n, "json")
            },
            getScript: function(t, e) {
                return se.get(t, void 0, e, "script")
            }
        }), se.each(["get", "post"], function(t, e) {
            se[e] = function(t, n, i, s) {
                return se.isFunction(n) && (s = s || i, i = n, n = void 0), se.ajax({
                    url: t,
                    type: e,
                    dataType: s,
                    data: n,
                    success: i
                })
            }
        }), se.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            se.fn[e] = function(t) {
                return this.on(e, t)
            }
        }), se._evalUrl = function(t) {
            return se.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }, se.fn.extend({
            wrapAll: function(t) {
                if (se.isFunction(t)) return this.each(function(e) {
                    se(this).wrapAll(t.call(this, e))
                });
                if (this[0]) {
                    var e = se(t, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                        for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                        return t
                    }).append(this)
                }
                return this
            },
            wrapInner: function(t) {
                return this.each(se.isFunction(t) ? function(e) {
                    se(this).wrapInner(t.call(this, e))
                } : function() {
                    var e = se(this),
                        n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = se.isFunction(t);
                return this.each(function(n) {
                    se(this).wrapAll(e ? t.call(this, n) : t)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    se.nodeName(this, "body") || se(this).replaceWith(this.childNodes)
                }).end()
            }
        }), se.expr.filters.hidden = function(t) {
            return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !ne.reliableHiddenOffsets() && "none" === (t.style && t.style.display || se.css(t, "display"))
        }, se.expr.filters.visible = function(t) {
            return !se.expr.filters.hidden(t)
        };
        var Xn = /%20/g,
            Jn = /\[\]$/,
            qn = /\r?\n/g,
            Yn = /^(?:submit|button|image|reset|file)$/i,
            Kn = /^(?:input|select|textarea|keygen)/i;
        se.param = function(t, e) {
            var n, i = [],
                s = function(t, e) {
                    e = se.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
            if (void 0 === e && (e = se.ajaxSettings && se.ajaxSettings.traditional), se.isArray(t) || t.jquery && !se.isPlainObject(t)) se.each(t, function() {
                s(this.name, this.value)
            });
            else
                for (n in t) W(n, t[n], e, s);
            return i.join("&").replace(Xn, "+")
        }, se.fn.extend({
            serialize: function() {
                return se.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = se.prop(this, "elements");
                    return t ? se.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !se(this).is(":disabled") && Kn.test(this.nodeName) && !Yn.test(t) && (this.checked || !Ie.test(t))
                }).map(function(t, e) {
                    var n = se(this).val();
                    return null == n ? null : se.isArray(n) ? se.map(n, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(qn, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: n.replace(qn, "\r\n")
                    }
                }).get()
            }
        }), se.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function() {
            return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && V() || G()
        } : V;
        var Zn = 0,
            Qn = {},
            ti = se.ajaxSettings.xhr();
        t.ActiveXObject && se(t).on("unload", function() {
            for (var t in Qn) Qn[t](void 0, !0)
        }), ne.cors = !!ti && "withCredentials" in ti, ti = ne.ajax = !!ti, ti && se.ajaxTransport(function(t) {
            if (!t.crossDomain || ne.cors) {
                var e;
                return 0
            }
        }), se.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(t) {
                    return se.globalEval(t), t
                }
            }
        }), se.ajaxPrefilter("script", function(t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
        }), se.ajaxTransport("script", function(t) {
            if (t.crossDomain) {
                var e, n = fe.head || se("head")[0] || fe.documentElement;
                return {
                    send: function(i, s) {
                        e = fe.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function(t, n) {
                            (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || s(200, "success"))
                        }, n.insertBefore(e, n.firstChild)
                    },
                    abort: function() {
                        e && e.onload(void 0, !0)
                    }
                }
            }
        });
        var ei = [],
            ni = /(=)\?(?=&|$)|\?\?/;
        se.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = ei.pop() || se.expando + "_" + Dn++;
                return this[t] = !0, t
            }
        }), se.ajaxPrefilter("json jsonp", function(e, n, i) {
            var s, o, a, r = e.jsonp !== !1 && (ni.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && ni.test(e.data) && "data");
            return r || "jsonp" === e.dataTypes[0] ? (s = e.jsonpCallback = se.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, r ? e[r] = e[r].replace(ni, "$1" + s) : e.jsonp !== !1 && (e.url += (Mn.test(e.url) ? "&" : "?") + e.jsonp + "=" + s), e.converters["script json"] = function() {
                return a || se.error(s + " was not called"), a[0]
            }, e.dataTypes[0] = "json", o = t[s], t[s] = function() {
                a = arguments
            }, i.always(function() {
                t[s] = o, e[s] && (e.jsonpCallback = n.jsonpCallback, ei.push(s)), a && se.isFunction(o) && o(a[0]), a = o = void 0
            }), "script") : void 0
        }), se.parseHTML = function(t, e, n) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (n = e, e = !1), e = e || fe;
            var i = ue.exec(t),
                s = !n && [];
            return i ? [e.createElement(i[1])] : (i = se.buildFragment([t], e, s), s && s.length && se(s).remove(), se.merge([], i.childNodes))
        };
        var ii = se.fn.load;
        se.fn.load = function(t, e, n) {
            if ("string" != typeof t && ii) return ii.apply(this, arguments);
            var i, s, o, a = this,
                r = t.indexOf(" ");
            return r >= 0 && (i = se.trim(t.slice(r, t.length)), t = t.slice(0, r)), se.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"), a.length > 0 && se.ajax({
                url: t,
                type: o,
                dataType: "html",
                data: e
            }).done(function(t) {
                s = arguments, a.html(i ? se("<div>").append(se.parseHTML(t)).find(i) : t)
            }).complete(n && function(t, e) {
                    a.each(n, s || [t.responseText, e, t])
                }), this
        }, se.expr.filters.animated = function(t) {
            return se.grep(se.timers, function(e) {
                return t === e.elem
            }).length
        };
        var si = t.document.documentElement;
        se.offset = {
            setOffset: function(t, e, n) {
                var i, s, o, a, r, l, c, d = se.css(t, "position"),
                    u = se(t),
                    h = {};
                "static" === d && (t.style.position = "relative"), r = u.offset(), o = se.css(t, "top"), l = se.css(t, "left"), c = ("absolute" === d || "fixed" === d) && se.inArray("auto", [o, l]) > -1, c ? (i = u.position(), a = i.top, s = i.left) : (a = parseFloat(o) || 0, s = parseFloat(l) || 0), se.isFunction(e) && (e = e.call(t, n, r)), null != e.top && (h.top = e.top - r.top + a), null != e.left && (h.left = e.left - r.left + s), "using" in e ? e.using.call(t, h) : u.css(h)
            }
        }, se.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                    se.offset.setOffset(this, t, e)
                });
                var e, n, i = {
                        top: 0,
                        left: 0
                    },
                    s = this[0],
                    o = s && s.ownerDocument;
                if (o) return e = o.documentElement, se.contains(e, s) ? (typeof s.getBoundingClientRect !== _e && (i = s.getBoundingClientRect()), n = X(o), {
                    top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                    left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
                }) : i
            },
            position: function() {
                if (this[0]) {
                    var t, e, n = {
                            top: 0,
                            left: 0
                        },
                        i = this[0];
                    return "fixed" === se.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), se.nodeName(t[0], "html") || (n = t.offset()), n.top += se.css(t[0], "borderTopWidth", !0), n.left += se.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - n.top - se.css(i, "marginTop", !0),
                        left: e.left - n.left - se.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent || si; t && !se.nodeName(t, "html") && "static" === se.css(t, "position");) t = t.offsetParent;
                    return t || si
                })
            }
        }), se.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, e) {
            var n = /Y/.test(e);
            se.fn[t] = function(i) {
                return xe(this, function(t, i, s) {
                    var o = X(t);
                    return void 0 === s ? o ? e in o ? o[e] : o.document.documentElement[i] : t[i] : void(o ? o.scrollTo(n ? se(o).scrollLeft() : s, n ? s : se(o).scrollTop()) : t[i] = s)
                }, t, i, arguments.length, null)
            }
        }), se.each(["top", "left"], function(t, e) {
            se.cssHooks[e] = L(ne.pixelPosition, function(t, n) {
                return n ? (n = en(t, e), sn.test(n) ? se(t).position()[e] + "px" : n) : void 0
            })
        }), se.each({
            Height: "height",
            Width: "width"
        }, function(t, e) {
            se.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function(n, i) {
                se.fn[i] = function(i, s) {
                    var o = arguments.length && (n || "boolean" != typeof i),
                        a = n || (i === !0 || s === !0 ? "margin" : "border");
                    return xe(this, function(e, n, i) {
                        var s;
                        return se.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (s = e.documentElement, Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t])) : void 0 === i ? se.css(e, n, a) : se.style(e, n, i, a)
                    }, e, o ? i : void 0, o, null)
                }
            })
        }), se.fn.size = function() {
            return this.length
        }, se.fn.andSelf = se.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return se
        });
        var oi = t.jQuery,
            ai = t.$;
        return se.noConflict = function(e) {
            return t.$ === se && (t.$ = ai), e && t.jQuery === se && (t.jQuery = oi), se
        }, typeof e === _e && (t.jQuery = t.$ = se), se
    }),
    function(t, e) {
        t.rails !== e && t.error("jquery-ujs has already been loaded!");
        var n, i = t(document);
        t.rails = n = {
            linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]",
            buttonClickSelector: "button[data-remote]:not(form button), button[data-confirm]:not(form button)",
            inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
            formSubmitSelector: "form",
            formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
            disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
            enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
            requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
            fileInputSelector: "input[type=file]",
            linkDisableSelector: "a[data-disable-with], a[data-disable]",
            buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
            CSRFProtection: function(e) {
                var n = t('meta[name="csrf-token"]').attr("content");
                n && e.setRequestHeader("X-CSRF-Token", n)
            },
            refreshCSRFTokens: function() {
                var e = t("meta[name=csrf-token]").attr("content"),
                    n = t("meta[name=csrf-param]").attr("content");
                t('form input[name="' + n + '"]').val(e)
            },
            fire: function(e, n, i) {
                var s = t.Event(n);
                return e.trigger(s, i), s.result !== !1
            },
            confirm: function(t) {
                return confirm(t)
            },
            ajax: function(e) {
                return t.ajax(e)
            },
            href: function(t) {
                return t.attr("href")
            },
            handleRemote: function(i) {
                var s, o, a, r, l, c, d, u;
                if (n.fire(i, "ajax:before")) {
                    if (r = i.data("cross-domain"), l = r === e ? null : r, c = i.data("with-credentials") || null, d = i.data("type") || t.ajaxSettings && t.ajaxSettings.dataType, i.is("form")) {
                        s = i.attr("method"), o = i.attr("action"), a = i.serializeArray();
                        var h = i.data("ujs:submit-button");
                        h && (a.push(h), i.data("ujs:submit-button", null))
                    } else i.is(n.inputChangeSelector) ? (s = i.data("method"), o = i.data("url"), a = i.serialize(), i.data("params") && (a = a + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (s = i.data("method") || "get", o = i.data("url"), a = i.serialize(), i.data("params") && (a = a + "&" + i.data("params"))) : (s = i.data("method"), o = n.href(i), a = i.data("params") || null);
                    return u = {
                        type: s || "GET",
                        data: a,
                        dataType: d,
                        beforeSend: function(t, s) {
                            return s.dataType === e && t.setRequestHeader("accept", "*/*;q=0.5, " + s.accepts.script), n.fire(i, "ajax:beforeSend", [t, s]) ? void i.trigger("ajax:send", t) : !1
                        },
                        success: function(t, e, n) {
                            i.trigger("ajax:success", [t, e, n])
                        },
                        complete: function(t, e) {
                            i.trigger("ajax:complete", [t, e])
                        },
                        error: function(t, e, n) {
                            i.trigger("ajax:error", [t, e, n])
                        },
                        crossDomain: l
                    }, c && (u.xhrFields = {
                        withCredentials: c
                    }), o && (u.url = o), n.ajax(u)
                }
                return !1
            },
            handleMethod: function(i) {
                var s = n.href(i),
                    o = i.data("method"),
                    a = i.attr("target"),
                    r = t("meta[name=csrf-token]").attr("content"),
                    l = t("meta[name=csrf-param]").attr("content"),
                    c = t('<form method="post" action="' + s + '"></form>'),
                    d = '<input name="_method" value="' + o + '" type="hidden" />';
                l !== e && r !== e && (d += '<input name="' + l + '" value="' + r + '" type="hidden" />'), a && c.attr("target", a), c.hide().append(d).appendTo("body"), c.submit()
            },
            formElements: function(e, n) {
                return e.is("form") ? t(e[0].elements).filter(n) : e.find(n)
            },
            disableFormElements: function(e) {
                n.formElements(e, n.disableSelector).each(function() {
                    n.disableFormElement(t(this))
                })
            },
            disableFormElement: function(t) {
                var n, i;
                n = t.is("button") ? "html" : "val", i = t.data("disable-with"), t.data("ujs:enable-with", t[n]()), i !== e && t[n](i), t.prop("disabled", !0)
            },
            enableFormElements: function(e) {
                n.formElements(e, n.enableSelector).each(function() {
                    n.enableFormElement(t(this))
                })
            },
            enableFormElement: function(t) {
                var e = t.is("button") ? "html" : "val";
                t.data("ujs:enable-with") && t[e](t.data("ujs:enable-with")), t.prop("disabled", !1)
            },
            allowAction: function(t) {
                var e, i = t.data("confirm"),
                    s = !1;
                return i ? (n.fire(t, "confirm") && (s = n.confirm(i), e = n.fire(t, "confirm:complete", [s])), s && e) : !0
            },
            blankInputs: function(e, n, i) {
                var s, o, a = t(),
                    r = n || "input,textarea",
                    l = e.find(r);
                return l.each(function() {
                    if (s = t(this), o = s.is("input[type=checkbox],input[type=radio]") ? s.is(":checked") : s.val(), !o == !i) {
                        if (s.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + s.attr("name") + '"]').length) return !0;
                        a = a.add(s)
                    }
                }), a.length ? a : !1
            },
            nonBlankInputs: function(t, e) {
                return n.blankInputs(t, e, !0)
            },
            stopEverything: function(e) {
                return t(e.target).trigger("ujs:everythingStopped"), e.stopImmediatePropagation(), !1
            },
            disableElement: function(t) {
                var i = t.data("disable-with");
                t.data("ujs:enable-with", t.html()), i !== e && t.html(i), t.bind("click.railsDisable", function(t) {
                    return n.stopEverything(t)
                })
            },
            enableElement: function(t) {
                t.data("ujs:enable-with") !== e && (t.html(t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.unbind("click.railsDisable")
            }
        }, n.fire(i, "rails:attachBindings") && (t.ajaxPrefilter(function(t, e, i) {
            t.crossDomain || n.CSRFProtection(i)
        }), i.delegate(n.linkDisableSelector, "ajax:complete", function() {
            n.enableElement(t(this))
        }), i.delegate(n.buttonDisableSelector, "ajax:complete", function() {
            n.enableFormElement(t(this))
        }), i.delegate(n.linkClickSelector, "click.rails", function(i) {
            var s = t(this),
                o = s.data("method"),
                a = s.data("params"),
                r = i.metaKey || i.ctrlKey;
            if (!n.allowAction(s)) return n.stopEverything(i);
            if (!r && s.is(n.linkDisableSelector) && n.disableElement(s), s.data("remote") !== e) {
                if (r && (!o || "GET" === o) && !a) return !0;
                var l = n.handleRemote(s);
                return l === !1 ? n.enableElement(s) : l.error(function() {
                    n.enableElement(s)
                }), !1
            }
            return s.data("method") ? (n.handleMethod(s), !1) : void 0
        }), i.delegate(n.buttonClickSelector, "click.rails", function(e) {
            var i = t(this);
            if (!n.allowAction(i)) return n.stopEverything(e);
            i.is(n.buttonDisableSelector) && n.disableFormElement(i);
            var s = n.handleRemote(i);
            return s === !1 ? n.enableFormElement(i) : s.error(function() {
                n.enableFormElement(i)
            }), !1
        }), i.delegate(n.inputChangeSelector, "change.rails", function(e) {
            var i = t(this);
            return n.allowAction(i) ? (n.handleRemote(i), !1) : n.stopEverything(e)
        }), i.delegate(n.formSubmitSelector, "submit.rails", function(i) {
            var s, o, a = t(this),
                r = a.data("remote") !== e;
            if (!n.allowAction(a)) return n.stopEverything(i);
            if (a.attr("novalidate") == e && (s = n.blankInputs(a, n.requiredInputSelector), s && n.fire(a, "ajax:aborted:required", [s]))) return n.stopEverything(i);
            if (r) {
                if (o = n.nonBlankInputs(a, n.fileInputSelector)) {
                    setTimeout(function() {
                        n.disableFormElements(a)
                    }, 13);
                    var l = n.fire(a, "ajax:aborted:file", [o]);
                    return l || setTimeout(function() {
                        n.enableFormElements(a)
                    }, 13), l
                }
                return n.handleRemote(a), !1
            }
            setTimeout(function() {
                n.disableFormElements(a)
            }, 13)
        }), i.delegate(n.formInputClickSelector, "click.rails", function(e) {
            var i = t(this);
            if (!n.allowAction(i)) return n.stopEverything(e);
            var s = i.attr("name"),
                o = s ? {
                    name: s,
                    value: i.val()
                } : null;
            i.closest("form").data("ujs:submit-button", o)
        }), i.delegate(n.formSubmitSelector, "ajax:send.rails", function(e) {
            this == e.target && n.disableFormElements(t(this))
        }), i.delegate(n.formSubmitSelector, "ajax:complete.rails", function(e) {
            this == e.target && n.enableFormElements(t(this))
        }), t(function() {
            n.refreshCSRFTokens()
        }))
    }(jQuery),
    function(t) {
        t.extend({
            debounce: function(t, e, n, i) {
                3 == arguments.length && "boolean" != typeof n && (i = n, n = !1);
                var s;
                return function() {
                    var o = arguments;
                    i = i || this, n && !s && t.apply(i, o), clearTimeout(s), s = setTimeout(function() {
                        n || t.apply(i, o), s = null
                    }, e)
                }
            },
            throttle: function(t, e, n) {
                var i, s, o;
                return function() {
                    s = arguments, o = !0, n = n || this, i || function() {
                        o ? (t.apply(n, s), o = !1, i = setTimeout(arguments.callee, e)) : i = null
                    }()
                }
            }
        })
    }(jQuery), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(t, e, n, i, s) {
        return jQuery.easing[jQuery.easing.def](t, e, n, i, s)
    },
    easeInQuad: function(t, e, n, i, s) {
        return i * (e /= s) * e + n
    },
    easeOutQuad: function(t, e, n, i, s) {
        return -i * (e /= s) * (e - 2) + n
    },
    easeInOutQuad: function(t, e, n, i, s) {
        return (e /= s / 2) < 1 ? i / 2 * e * e + n : -i / 2 * (--e * (e - 2) - 1) + n
    },
    easeInCubic: function(t, e, n, i, s) {
        return i * (e /= s) * e * e + n
    },
    easeOutCubic: function(t, e, n, i, s) {
        return i * ((e = e / s - 1) * e * e + 1) + n
    },
    easeInOutCubic: function(t, e, n, i, s) {
        return (e /= s / 2) < 1 ? i / 2 * e * e * e + n : i / 2 * ((e -= 2) * e * e + 2) + n
    },
    easeInQuart: function(t, e, n, i, s) {
        return i * (e /= s) * e * e * e + n
    },
    easeOutQuart: function(t, e, n, i, s) {
        return -i * ((e = e / s - 1) * e * e * e - 1) + n
    },
    easeInOutQuart: function(t, e, n, i, s) {
        return (e /= s / 2) < 1 ? i / 2 * e * e * e * e + n : -i / 2 * ((e -= 2) * e * e * e - 2) + n
    },
    easeInQuint: function(t, e, n, i, s) {
        return i * (e /= s) * e * e * e * e + n
    },
    easeOutQuint: function(t, e, n, i, s) {
        return i * ((e = e / s - 1) * e * e * e * e + 1) + n
    },
    easeInOutQuint: function(t, e, n, i, s) {
        return (e /= s / 2) < 1 ? i / 2 * e * e * e * e * e + n : i / 2 * ((e -= 2) * e * e * e * e + 2) + n
    },
    easeInSine: function(t, e, n, i, s) {
        return -i * Math.cos(e / s * (Math.PI / 2)) + i + n
    },
    easeOutSine: function(t, e, n, i, s) {
        return i * Math.sin(e / s * (Math.PI / 2)) + n
    },
    easeInOutSine: function(t, e, n, i, s) {
        return -i / 2 * (Math.cos(Math.PI * e / s) - 1) + n
    },
    easeInExpo: function(t, e, n, i, s) {
        return 0 == e ? n : i * Math.pow(2, 10 * (e / s - 1)) + n
    },
    easeOutExpo: function(t, e, n, i, s) {
        return e == s ? n + i : i * (-Math.pow(2, -10 * e / s) + 1) + n
    },
    easeInOutExpo: function(t, e, n, i, s) {
        return 0 == e ? n : e == s ? n + i : (e /= s / 2) < 1 ? i / 2 * Math.pow(2, 10 * (e - 1)) + n : i / 2 * (-Math.pow(2, -10 * --e) + 2) + n
    },
    easeInCirc: function(t, e, n, i, s) {
        return -i * (Math.sqrt(1 - (e /= s) * e) - 1) + n
    },
    easeOutCirc: function(t, e, n, i, s) {
        return i * Math.sqrt(1 - (e = e / s - 1) * e) + n
    },
    easeInOutCirc: function(t, e, n, i, s) {
        return (e /= s / 2) < 1 ? -i / 2 * (Math.sqrt(1 - e * e) - 1) + n : i / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + n
    },
    easeInElastic: function(t, e, n, i, s) {
        var o = 1.70158,
            a = 0,
            r = i;
        if (0 == e) return n;
        if (1 == (e /= s)) return n + i;
        if (a || (a = .3 * s), r < Math.abs(i)) {
            r = i;
            var o = a / 4
        } else var o = a / (2 * Math.PI) * Math.asin(i / r);
        return -(r * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * s - o) * Math.PI / a)) + n
    },
    easeOutElastic: function(t, e, n, i, s) {
        var o = 1.70158,
            a = 0,
            r = i;
        if (0 == e) return n;
        if (1 == (e /= s)) return n + i;
        if (a || (a = .3 * s), r < Math.abs(i)) {
            r = i;
            var o = a / 4
        } else var o = a / (2 * Math.PI) * Math.asin(i / r);
        return r * Math.pow(2, -10 * e) * Math.sin(2 * (e * s - o) * Math.PI / a) + i + n
    },
    easeInOutElastic: function(t, e, n, i, s) {
        var o = 1.70158,
            a = 0,
            r = i;
        if (0 == e) return n;
        if (2 == (e /= s / 2)) return n + i;
        if (a || (a = .3 * s * 1.5), r < Math.abs(i)) {
            r = i;
            var o = a / 4
        } else var o = a / (2 * Math.PI) * Math.asin(i / r);
        return 1 > e ? -.5 * r * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * s - o) * Math.PI / a) + n : r * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * (e * s - o) * Math.PI / a) * .5 + i + n
    },
    easeInBack: function(t, e, n, i, s, o) {
        return void 0 == o && (o = 1.70158), i * (e /= s) * e * ((o + 1) * e - o) + n
    },
    easeOutBack: function(t, e, n, i, s, o) {
        return void 0 == o && (o = 1.70158), i * ((e = e / s - 1) * e * ((o + 1) * e + o) + 1) + n
    },
    easeInOutBack: function(t, e, n, i, s, o) {
        return void 0 == o && (o = 1.70158), (e /= s / 2) < 1 ? i / 2 * e * e * (((o *= 1.525) + 1) * e - o) + n : i / 2 * ((e -= 2) * e * (((o *= 1.525) + 1) * e + o) + 2) + n
    },
    easeInBounce: function(t, e, n, i, s) {
        return i - jQuery.easing.easeOutBounce(t, s - e, 0, i, s) + n
    },
    easeOutBounce: function(t, e, n, i, s) {
        return (e /= s) < 1 / 2.75 ? 7.5625 * i * e * e + n : 2 / 2.75 > e ? i * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + n : 2.5 / 2.75 > e ? i * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + n : i * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + n
    },
    easeInOutBounce: function(t, e, n, i, s) {
        return s / 2 > e ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, i, s) + n : .5 * jQuery.easing.easeOutBounce(t, 2 * e - s, 0, i, s) + .5 * i + n
    }
}),
    function() {
        var t, e, n, i, s, o, a, r, l, c, d, u, h, p, f, m, g, v, y, b = [].slice,
            S = [].indexOf || function(t) {
                    for (var e = 0, n = this.length; n > e; e++)
                        if (e in this && this[e] === t) return e;
                    return -1
                };
        t = jQuery, t.payment = {}, t.payment.fn = {}, t.fn.payment = function() {
            var e, n;
            return n = arguments[0], e = 2 <= arguments.length ? b.call(arguments, 1) : [], t.payment.fn[n].apply(this, e)
        }, s = /(\d{1,4})/g, i = [{
            type: "maestro",
            pattern: /^(5018|5020|5038|6304|6759|676[1-3])/,
            format: s,
            length: [12, 13, 14, 15, 16, 17, 18, 19],
            cvcLength: [3],
            luhn: !0
        }, {
            type: "dinersclub",
            pattern: /^(36|38|30[0-5])/,
            format: s,
            length: [14],
            cvcLength: [3],
            luhn: !0
        }, {
            type: "laser",
            pattern: /^(6706|6771|6709)/,
            format: s,
            length: [16, 17, 18, 19],
            cvcLength: [3],
            luhn: !0
        }, {
            type: "jcb",
            pattern: /^35/,
            format: s,
            length: [16],
            cvcLength: [3],
            luhn: !0
        }, {
            type: "unionpay",
            pattern: /^62/,
            format: s,
            length: [16, 17, 18, 19],
            cvcLength: [3],
            luhn: !1
        }, {
            type: "discover",
            pattern: /^(6011|65|64[4-9]|622)/,
            format: s,
            length: [16],
            cvcLength: [3],
            luhn: !0
        }, {
            type: "mastercard",
            pattern: /^5[1-5]/,
            format: s,
            length: [16],
            cvcLength: [3],
            luhn: !0
        }, {
            type: "amex",
            pattern: /^3[47]/,
            format: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
            length: [15],
            cvcLength: [3, 4],
            luhn: !0
        }, {
            type: "visa",
            pattern: /^4/,
            format: s,
            length: [13, 14, 15, 16],
            cvcLength: [3],
            luhn: !0
        }], e = function(t) {
            var e, n, s;
            for (t = (t + "").replace(/\D/g, ""), n = 0, s = i.length; s > n; n++)
                if (e = i[n], e.pattern.test(t)) return e
        }, n = function(t) {
            var e, n, s;
            for (n = 0, s = i.length; s > n; n++)
                if (e = i[n], e.type === t) return e
        }, h = function(t) {
            var e, n, i, s, o, a;
            for (i = !0, s = 0, n = (t + "").split("").reverse(), o = 0, a = n.length; a > o; o++) e = n[o], e = parseInt(e, 10), (i = !i) && (e *= 2), e > 9 && (e -= 9), s += e;
            return s % 10 === 0
        }, u = function(t) {
            var e;
            return null != t.prop("selectionStart") && t.prop("selectionStart") !== t.prop("selectionEnd") ? !0 : ("undefined" != typeof document && null !== document && null != (e = document.selection) && "function" == typeof e.createRange ? e.createRange().text : void 0) ? !0 : !1
        }, p = function(e) {
            return setTimeout(function() {
                var n, i;
                return n = t(e.currentTarget), i = n.val(), i = t.payment.formatCardNumber(i), n.val(i)
            })
        }, r = function(n) {
            var i, s, o, a, r, l, c;
            return o = String.fromCharCode(n.which), !/^\d+$/.test(o) || (i = t(n.currentTarget), c = i.val(), s = e(c + o), a = (c.replace(/\D/g, "") + o).length, l = 16, s && (l = s.length[s.length.length - 1]), a >= l || null != i.prop("selectionStart") && i.prop("selectionStart") !== c.length) ? void 0 : (r = s && "amex" === s.type ? /^(\d{4}|\d{4}\s\d{6})$/ : /(?:^|\s)(\d{4})$/, r.test(c) ? (n.preventDefault(), i.val(c + " " + o)) : r.test(c + o) ? (n.preventDefault(), i.val(c + o + " ")) : void 0)
        }, o = function(e) {
            var n, i;
            return n = t(e.currentTarget), i = n.val(), e.meta || null != n.prop("selectionStart") && n.prop("selectionStart") !== i.length ? void 0 : 8 === e.which && /\s\d?$/.test(i) ? (e.preventDefault(), n.val(i.replace(/\s\d?$/, ""))) : void 0
        }, l = function(e) {
            var n, i, s;
            return i = String.fromCharCode(e.which), /^\d+$/.test(i) ? (n = t(e.currentTarget), s = n.val() + i, /^\d$/.test(s) && "0" !== s && "1" !== s ? (e.preventDefault(), n.val("0" + s + " / ")) : /^\d\d$/.test(s) ? (e.preventDefault(), n.val("" + s + " / ")) : void 0) : void 0
        }, c = function(e) {
            var n, i, s;
            return i = String.fromCharCode(e.which), /^\d+$/.test(i) ? (n = t(e.currentTarget), s = n.val(), /^\d\d$/.test(s) ? n.val("" + s + " / ") : void 0) : void 0
        }, d = function(e) {
            var n, i, s;
            return i = String.fromCharCode(e.which), "/" === i ? (n = t(e.currentTarget), s = n.val(), /^\d$/.test(s) && "0" !== s ? n.val("0" + s + " / ") : void 0) : void 0
        }, a = function(e) {
            var n, i;
            if (!e.meta && (n = t(e.currentTarget), i = n.val(), 8 === e.which && (null == n.prop("selectionStart") || n.prop("selectionStart") === i.length))) return /\s\/\s?\d?$/.test(i) ? (e.preventDefault(), n.val(i.replace(/\s\/\s?\d?$/, ""))) : void 0
        }, v = function(t) {
            var e;
            return t.metaKey || t.ctrlKey ? !0 : 32 === t.which ? !1 : 0 === t.which ? !0 : t.which < 33 ? !0 : (e = String.fromCharCode(t.which), !!/[\d\s]/.test(e))
        }, m = function(n) {
            var i, s, o, a;
            return i = t(n.currentTarget), o = String.fromCharCode(n.which), /^\d+$/.test(o) && !u(i) ? (a = (i.val() + o).replace(/\D/g, ""), s = e(a), s ? a.length <= s.length[s.length.length - 1] : a.length <= 16) : void 0
        }, g = function(e) {
            var n, i, s;
            return n = t(e.currentTarget), i = String.fromCharCode(e.which), /^\d+$/.test(i) && !u(n) ? (s = n.val() + i, s = s.replace(/\D/g, ""), s.length > 6 ? !1 : void 0) : void 0
        }, f = function(e) {
            var n, i, s;
            return n = t(e.currentTarget), i = String.fromCharCode(e.which), /^\d+$/.test(i) ? (s = n.val() + i, s.length <= 4) : void 0
        }, y = function(e) {
            var n, s, o, a, r;
            return n = t(e.currentTarget), r = n.val(), a = t.payment.cardType(r) || "unknown", n.hasClass(a) ? void 0 : (s = function() {
                var t, e, n;
                for (n = [], t = 0, e = i.length; e > t; t++) o = i[t], n.push(o.type);
                return n
            }(), n.removeClass("unknown"), n.removeClass(s.join(" ")), n.addClass(a), n.toggleClass("identified", "unknown" !== a), n.trigger("payment.cardType", a))
        }, t.payment.fn.formatCardCVC = function() {
            return this.payment("restrictNumeric"), this.on("keypress", f), this
        }, t.payment.fn.formatCardExpiry = function() {
            return this.payment("restrictNumeric"), this.on("keypress", g), this.on("keypress", l), this.on("keypress", d), this.on("keypress", c), this.on("keydown", a), this
        }, t.payment.fn.formatCardNumber = function() {
            return this.payment("restrictNumeric"), this.on("keypress", m), this.on("keypress", r), this.on("keydown", o), this.on("keyup", y), this.on("paste", p), this
        }, t.payment.fn.restrictNumeric = function() {
            return this.on("keypress", v), this
        }, t.payment.fn.cardExpiryVal = function() {
            return t.payment.cardExpiryVal(t(this).val())
        }, t.payment.cardExpiryVal = function(t) {
            var e, n, i, s;
            return t = t.replace(/\s/g, ""), s = t.split("/", 2), e = s[0], i = s[1], 2 === (null != i ? i.length : void 0) && /^\d+$/.test(i) && (n = (new Date).getFullYear(), n = n.toString().slice(0, 2), i = n + i), e = parseInt(e, 10), i = parseInt(i, 10), {
                month: e,
                year: i
            }
        }, t.payment.validateCardNumber = function(t) {
            var n, i;
            return t = (t + "").replace(/\s+|-/g, ""), /^\d+$/.test(t) ? (n = e(t), n ? (i = t.length, S.call(n.length, i) >= 0 && (n.luhn === !1 || h(t))) : !1) : !1
        }, t.payment.validateCardExpiry = function(e, n) {
            var i, s, o, a;
            return "object" == typeof e && "month" in e && (a = e, e = a.month, n = a.year), e && n ? (e = t.trim(e), n = t.trim(n), /^\d+$/.test(e) && /^\d+$/.test(n) && parseInt(e, 10) <= 12 ? (2 === n.length && (o = (new Date).getFullYear(), o = o.toString().slice(0, 2), n = o + n), s = new Date(n, e), i = new Date, s.setMonth(s.getMonth() - 1), s.setMonth(s.getMonth() + 1, 1), s > i) : !1) : !1
        }, t.payment.validateCardCVC = function(e, i) {
            var s, o;
            return e = t.trim(e), /^\d+$/.test(e) ? i ? (s = e.length, S.call(null != (o = n(i)) ? o.cvcLength : void 0, s) >= 0) : e.length >= 3 && e.length <= 4 : !1
        }, t.payment.cardType = function(t) {
            var n;
            return t ? (null != (n = e(t)) ? n.type : void 0) || null : null
        }, t.payment.formatCardNumber = function(t) {
            var n, i, s, o;
            return (n = e(t)) ? (s = n.length[n.length.length - 1], t = t.replace(/\D/g, ""), t = t.slice(0, +s + 1 || 9e9), n.format.global ? null != (o = t.match(n.format)) ? o.join(" ") : void 0 : (i = n.format.exec(t), null != i && i.shift(), null != i ? i.join(" ") : void 0)) : t
        }
    }.call(this),
    function(t) {
        t.fn.changeElementType = function(e) {
            var n = {};
            t.each(this[0].attributes, function(t, e) {
                n[e.nodeName] = e.nodeValue
            }), this.replaceWith(function() {
                return t("<" + e + "/>", n).append(t(this).contents())
            })
        }
    }(jQuery),
    function(t, e, n) {
        "function" == typeof define && define.amd ? define(["jquery"], function(i) {
            return n(i, t, e), i.mobile
        }) : n(t.jQuery, t, e)
    }(this, document, function(t, e, n) {
        ! function(t, e, n, i) {
            function s(t) {
                for (; t && "undefined" != typeof t.originalEvent;) t = t.originalEvent;
                return t
            }

            function o(e, n) {
                var o, a, r, l, c, d, u, h, p, f = e.type;
                if (e = t.Event(e), e.type = n, o = e.originalEvent, a = t.event.props, f.search(/^(mouse|click)/) > -1 && (a = I), o)
                    for (u = a.length, l; u;) l = a[--u], e[l] = o[l];
                if (f.search(/mouse(down|up)|click/) > -1 && !e.which && (e.which = 1), -1 !== f.search(/^touch/) && (r = s(o), f = r.touches, c = r.changedTouches, d = f && f.length ? f[0] : c && c.length ? c[0] : i))
                    for (h = 0, p = A.length; p > h; h++) l = A[h], e[l] = d[l];
                return e
            }

            function a(e) {
                for (var n, i, s = {}; e;) {
                    n = t.data(e, k);
                    for (i in n) n[i] && (s[i] = s.hasVirtualBinding = !0);
                    e = e.parentNode
                }
                return s
            }

            function r(e, n) {
                for (var i; e;) {
                    if (i = t.data(e, k), i && (!n || i[n])) return e;
                    e = e.parentNode
                }
                return null
            }

            function l() {
                U = !1
            }

            function c() {
                U = !0
            }

            function d() {
                H = 0, P.length = 0, $ = !1, c()
            }

            function u() {
                l()
            }

            function h() {
                p(), M = setTimeout(function() {
                    M = 0, d()
                }, t.vmouse.resetTimerDuration)
            }

            function p() {
                M && (clearTimeout(M), M = 0)
            }

            function f(e, n, i) {
                var s;
                return (i && i[e] || !i && r(n.target, e)) && (s = o(n, e), t(n.target).trigger(s)), s
            }

            function m(e) {
                var n, i = t.data(e.target, L);
                $ || H && H === i || (n = f("v" + e.type, e), n && (n.isDefaultPrevented() && e.preventDefault(), n.isPropagationStopped() && e.stopPropagation(), n.isImmediatePropagationStopped() && e.stopImmediatePropagation()))
            }

            function g(e) {
                var n, i, o, r = s(e).touches;
                r && 1 === r.length && (n = e.target, i = a(n), i.hasVirtualBinding && (H = F++, t.data(n, L, H), p(), u(), N = !1, o = s(e).touches[0], O = o.pageX, R = o.pageY, f("vmouseover", e, i), f("vmousedown", e, i)))
            }

            function v(t) {
                U || (N || f("vmousecancel", t, a(t.target)), N = !0, h())
            }

            function y(e) {
                if (!U) {
                    var n = s(e).touches[0],
                        i = N,
                        o = t.vmouse.moveDistanceThreshold,
                        r = a(e.target);
                    N = N || Math.abs(n.pageX - O) > o || Math.abs(n.pageY - R) > o, N && !i && f("vmousecancel", e, r), f("vmousemove", e, r), h()
                }
            }

            function b(t) {
                if (!U) {
                    c();
                    var e, n, i = a(t.target);
                    f("vmouseup", t, i), N || (e = f("vclick", t, i), e && e.isDefaultPrevented() && (n = s(t).changedTouches[0], P.push({
                        touchID: H,
                        x: n.clientX,
                        y: n.clientY
                    }), $ = !0)), f("vmouseout", t, i), N = !1, h()
                }
            }

            function S(e) {
                var n, i = t.data(e, k);
                if (i)
                    for (n in i)
                        if (i[n]) return !0;
                return !1
            }

            function E() {}

            function T(e) {
                var n = e.substr(1);
                return {
                    setup: function() {
                        S(this) || t.data(this, k, {});
                        var i = t.data(this, k);
                        i[e] = !0, D[e] = (D[e] || 0) + 1, 1 === D[e] && B.bind(n, m), t(this).bind(n, E), j && (D.touchstart = (D.touchstart || 0) + 1, 1 === D.touchstart && B.bind("touchstart", g).bind("touchend", b).bind("touchmove", y).bind("scroll", v))
                    },
                    teardown: function() {
                        --D[e], D[e] || B.unbind(n, m), j && (--D.touchstart, D.touchstart || B.unbind("touchstart", g).unbind("touchmove", y).unbind("touchend", b).unbind("scroll", v));
                        var i = t(this),
                            s = t.data(this, k);
                        s && (s[e] = !1), i.unbind(n, E), S(this) || i.removeData(k)
                    }
                }
            }
            var _, w, k = "virtualMouseBindings",
                L = "virtualTouchID",
                C = "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),
                A = "clientX clientY pageX pageY screenX screenY".split(" "),
                x = t.event.mouseHooks ? t.event.mouseHooks.props : [],
                I = t.event.props.concat(x),
                D = {},
                M = 0,
                O = 0,
                R = 0,
                N = !1,
                P = [],
                $ = !1,
                U = !1,
                j = "addEventListener" in n,
                B = t(n),
                F = 1,
                H = 0;
            for (t.vmouse = {
                moveDistanceThreshold: 10,
                clickDistanceThreshold: 10,
                resetTimerDuration: 1500
            }, w = 0; w < C.length; w++) t.event.special[C[w]] = T(C[w]);
            j && n.addEventListener("click", function(e) {
                var n, i, s, o, a, r, l = P.length,
                    c = e.target;
                if (l)
                    for (n = e.clientX, i = e.clientY, _ = t.vmouse.clickDistanceThreshold, s = c; s;) {
                        for (o = 0; l > o; o++)
                            if (a = P[o], r = 0, s === c && Math.abs(a.x - n) < _ && Math.abs(a.y - i) < _ || t.data(s, L) === a.touchID) return e.preventDefault(), void e.stopPropagation();
                        s = s.parentNode
                    }
            }, !0)
        }(t, e, n)
    }),
    function() {
        var t = !1,
            e = /xyz/.test(function() {}) ? /\b_super\b/ : /.*/;
        this.Class = function() {}, Class.extend = function(n) {
            function i() {
                !t && this.init && this.init.apply(this, arguments)
            }
            var s = this.prototype;
            t = !0;
            var o = new this;
            t = !1;
            for (var a in n) o[a] = "function" == typeof n[a] && "function" == typeof s[a] && e.test(n[a]) ? function(t, e) {
                return function() {
                    var n = this._super;
                    this._super = s[t];
                    var i = e.apply(this, arguments);
                    return this._super = n, i
                }
            }(a, n[a]) : n[a];
            return i.prototype = o, i.constructor = i, i.extend = arguments.callee, i
        }
    }(),
    function(t) {
        "function" == typeof define ? define(function() {
            t()
        }) : t()
    }(function(t) {
        if (!Function.prototype.bind) {
            var e = Array.prototype.slice;
            Function.prototype.bind = function() {
                function t() {
                    if (this instanceof t) {
                        var s = Object.create(n.prototype);
                        return n.apply(s, i.concat(e.call(arguments))), s
                    }
                    return n.call.apply(n, i.concat(e.call(arguments)))
                }
                var n = this;
                if ("function" != typeof n.apply || "function" != typeof n.call) return new TypeError;
                var i = e.call(arguments);
                return t.length = "function" == typeof n ? Math.max(n.length - i.length, 0) : 0, t
            }
        }
        var n, i, s, o, a, r = Function.prototype.call,
            l = Object.prototype,
            c = r.bind(l.hasOwnProperty);
        (a = c(l, "__defineGetter__")) && (n = r.bind(l.__defineGetter__), i = r.bind(l.__defineSetter__), s = r.bind(l.__lookupGetter__), o = r.bind(l.__lookupSetter__)), Array.isArray || (Array.isArray = function(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        }), Array.prototype.forEach || (Array.prototype.forEach = function(t, e) {
            for (var n = +this.length, i = 0; n > i; i++) i in this && t.call(e, this[i], i, this)
        }), Array.prototype.map || (Array.prototype.map = function(t, e) {
            var n = +this.length;
            if ("function" != typeof t) throw new TypeError;
            for (var i = Array(n), s = 0; n > s; s++) s in this && (i[s] = t.call(e, this[s], s, this));
            return i
        }), Array.prototype.filter || (Array.prototype.filter = function(t, e) {
            for (var n = [], i = 0; i < this.length; i++) t.call(e, this[i]) && n.push(this[i]);
            return n
        }), Array.prototype.every || (Array.prototype.every = function(t, e) {
            for (var n = 0; n < this.length; n++)
                if (!t.call(e, this[n])) return !1;
            return !0
        }), Array.prototype.some || (Array.prototype.some = function(t, e) {
            for (var n = 0; n < this.length; n++)
                if (t.call(e, this[n])) return !0;
            return !1
        }), Array.prototype.reduce || (Array.prototype.reduce = function(t) {
            var e = +this.length;
            if ("function" != typeof t) throw new TypeError;
            if (0 === e && 1 === arguments.length) throw new TypeError;
            var n = 0;
            if (arguments.length >= 2) var i = arguments[1];
            else
                for (;;) {
                    if (n in this) {
                        i = this[n++];
                        break
                    }
                    if (++n >= e) throw new TypeError
                }
            for (; e > n; n++) n in this && (i = t.call(null, i, this[n], n, this));
            return i
        }), Array.prototype.reduceRight || (Array.prototype.reduceRight = function(t) {
            var e = +this.length;
            if ("function" != typeof t) throw new TypeError;
            if (0 === e && 1 === arguments.length) throw new TypeError;
            var n;
            if (e -= 1, arguments.length >= 2) n = arguments[1];
            else
                for (;;) {
                    if (e in this) {
                        n = this[e--];
                        break
                    }
                    if (--e < 0) throw new TypeError
                }
            for (; e >= 0; e--) e in this && (n = t.call(null, n, this[e], e, this));
            return n
        }), Array.prototype.indexOf || (Array.prototype.indexOf = function(t, e) {
            var n = this.length;
            if (!n) return -1;
            var i = e || 0;
            if (i >= n) return -1;
            for (0 > i && (i += n); n > i; i++)
                if (i in this && t === this[i]) return i;
            return -1
        }), Array.prototype.lastIndexOf || (Array.prototype.lastIndexOf = function(t, e) {
            var n = this.length;
            if (!n) return -1;
            var i = e || n;
            for (0 > i && (i += n), i = Math.min(i, n - 1); i >= 0; i--)
                if (i in this && t === this[i]) return i;
            return -1
        }), Object.getPrototypeOf || (Object.getPrototypeOf = function(t) {
            return t.__proto__ || t.constructor.prototype
        }), Object.getOwnPropertyDescriptor || (Object.getOwnPropertyDescriptor = function(e, n) {
            if ("object" != typeof e && "function" != typeof e || null === e) throw new TypeError("Object.getOwnPropertyDescriptor called on a non-object: " + e);
            if (!c(e, n)) return t;
            var i, r, d;
            if (i = {
                    enumerable: !0,
                    configurable: !0
                }, a) {
                var u = e.__proto__;
                if (e.__proto__ = l, r = s(e, n), d = o(e, n), e.__proto__ = u, r || d) return r && (i.get = r), d && (i.set = d), i
            }
            return i.value = e[n], i
        }), Object.getOwnPropertyNames || (Object.getOwnPropertyNames = function(t) {
            return Object.keys(t)
        }), Object.create || (Object.create = function(t, e) {
            var n;
            if (null === t) n = {
                __proto__: null
            };
            else {
                if ("object" != typeof t) throw new TypeError("typeof prototype[" + typeof t + "] != 'object'");
                n = function() {}, n.prototype = t, n = new n, n.__proto__ = t
            }
            return "undefined" != typeof e && Object.defineProperties(n, e), n
        }), Object.defineProperty || (Object.defineProperty = function(t, e, r) {
            if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object.defineProperty called on non-object: " + t);
            if ("object" != typeof r || null === r) throw new TypeError("Property description must be an object: " + r);
            if (c(r, "value")) a && (s(t, e) || o(t, e)) && (t.__proto__ = l, delete t[e]), t[e] = r.value;
            else {
                if (!a) throw new TypeError("getters & setters can not be defined on this javascript engine");
                c(r, "get") && n(t, e, r.get), c(r, "set") && i(t, e, r.set)
            }
            return t
        }), Object.defineProperties || (Object.defineProperties = function(t, e) {
            for (var n in e) c(e, n) && Object.defineProperty(t, n, e[n]);
            return t
        }), Object.seal || (Object.seal = function(t) {
            return t
        }), Object.freeze || (Object.freeze = function(t) {
            return t
        });
        try {
            Object.freeze(function() {})
        } catch (d) {
            Object.freeze = function(t) {
                return function(e) {
                    return "function" == typeof e ? e : t(e)
                }
            }(Object.freeze)
        }
        if (Object.preventExtensions || (Object.preventExtensions = function(t) {
                return t
            }), Object.isSealed || (Object.isSealed = function() {
                return !1
            }), Object.isFrozen || (Object.isFrozen = function() {
                return !1
            }), Object.isExtensible || (Object.isExtensible = function() {
                return !0
            }), !Object.keys) {
            var u, h = !0,
                p = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                f = p.length;
            for (u in {
                toString: null
            }) h = !1;
            Object.keys = function v(t) {
                if ("object" != typeof t && "function" != typeof t || null === t) throw new TypeError("Object.keys called on a non-object");
                var e, v = [];
                for (e in t) c(t, e) && v.push(e);
                if (h)
                    for (e = 0; f > e; e++) {
                        var n = p[e];
                        c(t, n) && v.push(n)
                    }
                return v
            }
        }
        if (Date.prototype.toISOString || (Date.prototype.toISOString = function() {
                return this.getUTCFullYear() + "-" + (this.getUTCMonth() + 1) + "-" + this.getUTCDate() + "T" + this.getUTCHours() + ":" + this.getUTCMinutes() + ":" + this.getUTCSeconds() + "Z"
            }), Date.now || (Date.now = function() {
                return (new Date).getTime()
            }), Date.prototype.toJSON || (Date.prototype.toJSON = function() {
                if ("function" != typeof this.toISOString) throw new TypeError;
                return this.toISOString()
            }), isNaN(Date.parse("T00:00")) && (Date = function(e) {
                var n, i = function(t, n, s, o, a, r, l) {
                        var c = arguments.length;
                        return this instanceof e ? (c = 1 === c && String(t) === t ? new e(i.parse(t)) : c >= 7 ? new e(t, n, s, o, a, r, l) : c >= 6 ? new e(t, n, s, o, a, r) : c >= 5 ? new e(t, n, s, o, a) : c >= 4 ? new e(t, n, s, o) : c >= 3 ? new e(t, n, s) : c >= 2 ? new e(t, n) : c >= 1 ? new e(t) : new e, c.constructor = i, c) : e.apply(this, arguments)
                    },
                    s = RegExp("^(?:((?:[+-]\\d\\d)?\\d\\d\\d\\d)(?:-(\\d\\d)(?:-(\\d\\d))?)?)?(?:T(\\d\\d):(\\d\\d)(?::(\\d\\d)(?:\\.(\\d\\d\\d))?)?)?(?:Z|([+-])(\\d\\d):(\\d\\d))?$");
                for (n in e) i[n] = e[n];
                return i.now = e.now, i.UTC = e.UTC, i.prototype = e.prototype, i.prototype.constructor = i, i.parse = function(n) {
                    var i = s.exec(n);
                    if (i) {
                        i.shift();
                        for (var o = i[0] === t, a = 0; 10 > a; a++) 7 !== a && (i[a] = +(i[a] || (3 > a ? 1 : 0)), 1 === a && i[a]--);
                        return o ? 1e3 * (60 * (60 * i[3] + i[4]) + i[5]) + i[6] : (o = 6e4 * (60 * i[8] + i[9]), "-" === i[6] && (o = -o), e.UTC.apply(this, i.slice(0, 7)) + o)
                    }
                    return e.parse.apply(this, arguments)
                }, i
            }(Date)), !String.prototype.trim) {
            var m = /^\s\s*/,
                g = /\s\s*$/;
            String.prototype.trim = function() {
                return String(this).replace(m, "").replace(g, "")
            }
        }
    }), "undefined" == typeof document || "classList" in document.createElement("a") || ! function(t) {
    var e = "classList",
        n = "prototype",
        i = (t.HTMLElement || t.Element)[n],
        s = Object,
        o = String[n].trim || function() {
                return this.replace(/^\s+|\s+$/g, "")
            },
        a = Array[n].indexOf || function(t) {
                for (var e = 0, n = this.length; n > e; e++)
                    if (e in this && this[e] === t) return e;
                return -1
            },
        r = function(t, e) {
            this.name = t, this.code = DOMException[t], this.message = e
        },
        l = function(t, e) {
            if ("" === e) throw new r("SYNTAX_ERR", "An invalid or illegal string was specified");
            if (/\s/.test(e)) throw new r("INVALID_CHARACTER_ERR", "String contains an invalid character");
            return a.call(t, e)
        },
        c = function(t) {
            for (var e = o.call(t.className), n = e ? e.split(/\s+/) : [], i = 0, s = n.length; s > i; i++) this.push(n[i]);
            this._updateClassName = function() {
                t.className = this.toString()
            }
        },
        d = c[n] = [],
        u = function() {
            return new c(this)
        };
    if (r[n] = Error[n], d.item = function(t) {
            return this[t] || null
        }, d.contains = function(t) {
            return t += "", -1 !== l(this, t)
        }, d.add = function(t) {
            t += "", -1 === l(this, t) && (this.push(t), this._updateClassName())
        }, d.remove = function(t) {
            t += "";
            var e = l(this, t); - 1 !== e && (this.splice(e, 1), this._updateClassName())
        }, d.toggle = function(t) {
            t += "", -1 === l(this, t) ? this.add(t) : this.remove(t)
        }, d.toString = function() {
            return this.join(" ")
        }, s.defineProperty) {
        var h = {
            get: u,
            enumerable: !0,
            configurable: !0
        };
        try {
            s.defineProperty(i, e, h)
        } catch (p) {
            -2146823252 === p.number && (h.enumerable = !1, s.defineProperty(i, e, h))
        }
    } else s[n].__defineGetter__ && i.__defineGetter__(e, u)
}(self),
    function(t) {
        function e() {
            p || (p = !0, l(m, function(t) {
                u(t)
            }))
        }

        function n(e, n) {
            var i = t.createElement("script");
            i.type = "text/" + (e.type || "javascript"), i.src = e.src || e, i.async = !1, i.onreadystatechange = i.onload = function() {
                var t = i.readyState;
                !n.done && (!t || /loaded|complete/.test(t)) && (n.done = !0, n())
            }, (t.body || f).appendChild(i)
        }

        function i(t, e) {
            return t.state == k ? e && e() : t.state == w ? E.ready(t.name, e) : t.state == _ ? t.onpreload.push(function() {
                i(t, e)
            }) : (t.state = w, void n(t.url, function() {
                t.state = k, e && e(), l(v[t.name], function(t) {
                    u(t)
                }), a() && p && l(v.ALL, function(t) {
                    u(t)
                })
            }))
        }

        function s(t) {
            void 0 === t.state && (t.state = _, t.onpreload = [], n({
                src: t.url,
                type: "cache"
            }, function() {
                o(t)
            }))
        }

        function o(t) {
            t.state = T, l(t.onpreload, function(t) {
                t.call()
            })
        }

        function a(t) {
            t = t || y;
            var e;
            for (var n in t) {
                if (t.hasOwnProperty(n) && t[n].state != k) return !1;
                e = !0
            }
            return e
        }

        function r(t) {
            return "[object Function]" == Object.prototype.toString.call(t)
        }

        function l(t, e) {
            if (t) {
                "object" == typeof t && (t = [].slice.call(t));
                for (var n = 0; n < t.length; n++) e.call(t, t[n], n)
            }
        }

        function c(t) {
            var e;
            if ("object" == typeof t)
                for (var n in t) t[n] && (e = {
                    name: n,
                    url: t[n]
                });
            else e = {
                name: d(t),
                url: t
            };
            var i = y[e.name];
            return i && i.url === e.url ? i : (y[e.name] = e, e)
        }

        function d(t) {
            var e = t.split("/"),
                n = e[e.length - 1],
                i = n.indexOf("?");
            return -1 != i ? n.substring(0, i) : n
        }

        function u(t) {
            t._done || (t(), t._done = 1)
        }
        var h, p, f = t.documentElement,
            m = [],
            g = [],
            v = {},
            y = {},
            b = t.createElement("script").async === !0 || "MozAppearance" in t.documentElement.style || window.opera,
            S = window.head_conf && head_conf.head || "head",
            E = window[S] = window[S] || function() {
                    E.ready.apply(null, arguments)
                },
            T = 1,
            _ = 2,
            w = 3,
            k = 4;
        if (E.js = b ? function() {
                var t = arguments,
                    e = t[t.length - 1],
                    n = {};
                return r(e) || (e = null), l(t, function(s, o) {
                    s != e && (s = c(s), n[s.name] = s, i(s, e && o == t.length - 2 ? function() {
                        a(n) && u(e)
                    } : null))
                }), E
            } : function() {
                var t = arguments,
                    e = [].slice.call(t, 1),
                    n = e[0];
                return h ? (n ? (l(e, function(t) {
                    r(t) || s(c(t))
                }), i(c(t[0]), r(n) ? n : function() {
                    E.js.apply(null, e)
                })) : i(c(t[0])), E) : (g.push(function() {
                    E.js.apply(null, t)
                }), E)
            }, E.ready = function(e, n) {
                if (e == t) return p ? u(n) : m.push(n), E;
                if (r(e) && (n = e, e = "ALL"), "string" != typeof e || !r(n)) return E;
                var i = y[e];
                if (i && i.state == k || "ALL" == e && a() && p) return u(n), E;
                var s = v[e];
                return s ? s.push(n) : s = v[e] = [n], E
            }, E.ready(t, function() {
                a() && l(v.ALL, function(t) {
                    u(t)
                }), E.feature && E.feature("domloaded", !0)
            }), window.addEventListener) t.addEventListener("DOMContentLoaded", e, !1), window.addEventListener("load", e, !1);
        else if (window.attachEvent) {
            t.attachEvent("onreadystatechange", function() {
                "complete" === t.readyState && e()
            });
            var L = 1;
            try {
                L = window.frameElement
            } catch (C) {}!L && f.doScroll && function() {
                try {
                    f.doScroll("left"), e()
                } catch (t) {
                    return void setTimeout(arguments.callee, 1)
                }
            }(), window.attachEvent("onload", e)
        }!t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", handler = function() {
            t.removeEventListener("DOMContentLoaded", handler, !1), t.readyState = "complete"
        }, !1)), setTimeout(function() {
            h = !0, l(g, function(t) {
                t()
            })
        }, 300)
    }(document),
    function(t) {
        function e(t, e, n, i, s) {
            this._listener = e, this._isOnce = n, this.context = i, this._signal = t, this._priority = s || 0
        }
        var n = {
            VERSION: "0.6.1"
        };
        e.prototype = {
            active: !0,
            execute: function(t) {
                var e;
                return this.active && (e = this._listener.apply(this.context, t), this._isOnce && this.detach()), e
            },
            detach: function() {
                return this._signal.remove(this._listener)
            },
            getListener: function() {
                return this._listener
            },
            dispose: function() {
                this.detach(), this._destroy()
            },
            _destroy: function() {
                delete this._signal, delete this._isOnce, delete this._listener, delete this.context
            },
            isOnce: function() {
                return this._isOnce
            },
            toString: function() {
                return "[SignalBinding isOnce: " + this._isOnce + ", active: " + this.active + "]"
            }
        }, n.Signal = function() {
            this._bindings = []
        }, n.Signal.prototype = {
            _shouldPropagate: !0,
            active: !0,
            _registerListener: function(t, n, i, s) {
                if ("function" != typeof t) throw new Error("listener is a required param of add() and addOnce() and should be a Function.");
                var o, a = this._indexOfListener(t);
                if (-1 !== a) {
                    if (o = this._bindings[a], o.isOnce() !== n) throw new Error("You cannot add" + (n ? "" : "Once") + "() then add" + (n ? "Once" : "") + "() the same listener without removing the relationship first.")
                } else o = new e(this, t, n, i, s), this._addBinding(o);
                return o
            },
            _addBinding: function(t) {
                var e = this._bindings.length;
                do --e; while (this._bindings[e] && t._priority <= this._bindings[e]._priority);
                this._bindings.splice(e + 1, 0, t)
            },
            _indexOfListener: function(t) {
                for (var e = this._bindings.length; e--;)
                    if (this._bindings[e]._listener === t) return e;
                return -1
            },
            add: function(t, e, n) {
                return this._registerListener(t, !1, e, n)
            },
            addOnce: function(t, e, n) {
                return this._registerListener(t, !0, e, n)
            },
            remove: function(t) {
                if ("function" != typeof t) throw new Error("listener is a required param of remove() and should be a Function.");
                var e = this._indexOfListener(t);
                return -1 !== e && (this._bindings[e]._destroy(), this._bindings.splice(e, 1)), t
            },
            removeAll: function() {
                for (var t = this._bindings.length; t--;) this._bindings[t]._destroy();
                this._bindings.length = 0
            },
            getNumListeners: function() {
                return this._bindings.length
            },
            halt: function() {
                this._shouldPropagate = !1
            },
            dispatch: function() {
                if (this.active) {
                    var t = Array.prototype.slice.call(arguments),
                        e = this._bindings.slice(),
                        n = this._bindings.length;
                    this._shouldPropagate = !0;
                    do n--; while (e[n] && this._shouldPropagate && e[n].execute(t) !== !1)
                }
            },
            dispose: function() {
                this.removeAll(), delete this._bindings
            },
            toString: function() {
                return "[Signal active: " + this.active + " numListeners: " + this.getNumListeners() + "]"
            }
        }, t.signals = n
    }(window || global || this);
var JSON;
JSON || (JSON = {}),
    function() {
        "use strict";

        function f(t) {
            return 10 > t ? "0" + t : t
        }

        function quote(t) {
            return escapable.lastIndex = 0, escapable.test(t) ? '"' + t.replace(escapable, function(t) {
                var e = meta[t];
                return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + t + '"'
        }

        function str(t, e) {
            var n, i, s, o, a, r = gap,
                l = e[t];
            switch (l && "object" == typeof l && "function" == typeof l.toJSON && (l = l.toJSON(t)), "function" == typeof rep && (l = rep.call(e, t, l)), typeof l) {
                case "string":
                    return quote(l);
                case "number":
                    return isFinite(l) ? String(l) : "null";
                case "boolean":
                case "null":
                    return String(l);
                case "object":
                    if (!l) return "null";
                    if (gap += indent, a = [], "[object Array]" === Object.prototype.toString.apply(l)) {
                        for (o = l.length, n = 0; o > n; n += 1) a[n] = str(n, l) || "null";
                        return s = 0 === a.length ? "[]" : gap ? "[\n" + gap + a.join(",\n" + gap) + "\n" + r + "]" : "[" + a.join(",") + "]", gap = r, s
                    }
                    if (rep && "object" == typeof rep)
                        for (o = rep.length, n = 0; o > n; n += 1) "string" == typeof rep[n] && (i = rep[n], s = str(i, l), s && a.push(quote(i) + (gap ? ": " : ":") + s));
                    else
                        for (i in l) Object.prototype.hasOwnProperty.call(l, i) && (s = str(i, l), s && a.push(quote(i) + (gap ? ": " : ":") + s));
                    return s = 0 === a.length ? "{}" : gap ? "{\n" + gap + a.join(",\n" + gap) + "\n" + r + "}" : "{" + a.join(",") + "}", gap = r, s
            }
        }
        "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
            return this.valueOf()
        });
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent, meta = {
                "\b": "\\b",
                "	": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            rep;
        "function" != typeof JSON.stringify && (JSON.stringify = function(t, e, n) {
            var i;
            if (gap = "", indent = "", "number" == typeof n)
                for (i = 0; n > i; i += 1) indent += " ";
            else "string" == typeof n && (indent = n);
            if (rep = e, e && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length)) throw new Error("JSON.stringify");
            return str("", {
                "": t
            })
        }), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
            function walk(t, e) {
                var n, i, s = t[e];
                if (s && "object" == typeof s)
                    for (n in s) Object.prototype.hasOwnProperty.call(s, n) && (i = walk(s, n), void 0 !== i ? s[n] = i : delete s[n]);
                return reviver.call(t, e, s)
            }
            var j;
            if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(t) {
                    return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
                })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                "": j
            }, "") : j;
            throw new SyntaxError("JSON.parse")
        })
    }(),
    function(t) {
        function e(t, e) {
            return function(n) {
                return l(t.call(this, n), e)
            }
        }

        function n(t, e) {
            return function(n) {
                return this.lang().ordinal(t.call(this, n), e)
            }
        }

        function i() {}

        function s(t) {
            a(this, t)
        }

        function o(t) {
            var e = t.years || t.year || t.y || 0,
                n = t.months || t.month || t.M || 0,
                i = t.weeks || t.week || t.w || 0,
                s = t.days || t.day || t.d || 0,
                o = t.hours || t.hour || t.h || 0,
                a = t.minutes || t.minute || t.m || 0,
                r = t.seconds || t.second || t.s || 0,
                l = t.milliseconds || t.millisecond || t.ms || 0;
            this._input = t, this._milliseconds = +l + 1e3 * r + 6e4 * a + 36e5 * o, this._days = +s + 7 * i, this._months = +n + 12 * e, this._data = {}, this._bubble()
        }

        function a(t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            return t
        }

        function r(t) {
            return 0 > t ? Math.ceil(t) : Math.floor(t)
        }

        function l(t, e) {
            for (var n = t + ""; n.length < e;) n = "0" + n;
            return n
        }

        function c(t, e, n, i) {
            var s, o, a = e._milliseconds,
                r = e._days,
                l = e._months;
            a && t._d.setTime(+t._d + a * n), (r || l) && (s = t.minute(), o = t.hour()), r && t.date(t.date() + r * n), l && t.month(t.month() + l * n), a && !i && $.updateOffset(t), (r || l) && (t.minute(s), t.hour(o))
        }

        function d(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        }

        function u(t, e) {
            var n, i = Math.min(t.length, e.length),
                s = Math.abs(t.length - e.length),
                o = 0;
            for (n = 0; i > n; n++) ~~t[n] !== ~~e[n] && o++;
            return o + s
        }

        function h(t) {
            return t ? le[t] || t.toLowerCase().replace(/(.)s$/, "$1") : t
        }

        function p(t, e) {
            return e.abbr = t, F[t] || (F[t] = new i), F[t].set(e), F[t]
        }

        function f(t) {
            delete F[t]
        }

        function m(t) {
            if (!t) return $.fn._lang;
            if (!F[t] && H) try {
                require("./lang/" + t)
            } catch (e) {
                return $.fn._lang
            }
            return F[t] || $.fn._lang
        }

        function g(t) {
            return t.match(/\[.*\]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "")
        }

        function v(t) {
            var e, n, i = t.match(V);
            for (e = 0, n = i.length; n > e; e++) i[e] = he[i[e]] ? he[i[e]] : g(i[e]);
            return function(s) {
                var o = "";
                for (e = 0; n > e; e++) o += i[e] instanceof Function ? i[e].call(s, t) : i[e];
                return o
            }
        }

        function y(t, e) {
            return e = b(e, t.lang()), ce[e] || (ce[e] = v(e)), ce[e](t)
        }

        function b(t, e) {
            function n(t) {
                return e.longDateFormat(t) || t
            }
            for (var i = 5; i-- && (G.lastIndex = 0, G.test(t));) t = t.replace(G, n);
            return t
        }

        function S(t, e) {
            switch (t) {
                case "DDDD":
                    return q;
                case "YYYY":
                    return Y;
                case "YYYYY":
                    return K;
                case "S":
                case "SS":
                case "SSS":
                case "DDD":
                    return J;
                case "MMM":
                case "MMMM":
                case "dd":
                case "ddd":
                case "dddd":
                    return Z;
                case "a":
                case "A":
                    return m(e._l)._meridiemParse;
                case "X":
                    return ee;
                case "Z":
                case "ZZ":
                    return Q;
                case "T":
                    return te;
                case "MM":
                case "DD":
                case "YY":
                case "HH":
                case "hh":
                case "mm":
                case "ss":
                case "M":
                case "D":
                case "d":
                case "H":
                case "h":
                case "m":
                case "s":
                    return X;
                default:
                    return new RegExp(t.replace("\\", ""))
            }
        }

        function E(t) {
            var e = (Q.exec(t) || [])[0],
                n = (e + "").match(oe) || ["-", 0, 0],
                i = +(60 * n[1]) + ~~n[2];
            return "+" === n[0] ? -i : i
        }

        function T(t, e, n) {
            var i, s = n._a;
            switch (t) {
                case "M":
                case "MM":
                    null != e && (s[1] = ~~e - 1);
                    break;
                case "MMM":
                case "MMMM":
                    i = m(n._l).monthsParse(e), null != i ? s[1] = i : n._isValid = !1;
                    break;
                case "D":
                case "DD":
                    null != e && (s[2] = ~~e);
                    break;
                case "DDD":
                case "DDDD":
                    null != e && (s[1] = 0, s[2] = ~~e);
                    break;
                case "YY":
                    s[0] = ~~e + (~~e > 68 ? 1900 : 2e3);
                    break;
                case "YYYY":
                case "YYYYY":
                    s[0] = ~~e;
                    break;
                case "a":
                case "A":
                    n._isPm = m(n._l).isPM(e);
                    break;
                case "H":
                case "HH":
                case "h":
                case "hh":
                    s[3] = ~~e;
                    break;
                case "m":
                case "mm":
                    s[4] = ~~e;
                    break;
                case "s":
                case "ss":
                    s[5] = ~~e;
                    break;
                case "S":
                case "SS":
                case "SSS":
                    s[6] = ~~(1e3 * ("0." + e));
                    break;
                case "X":
                    n._d = new Date(1e3 * parseFloat(e));
                    break;
                case "Z":
                case "ZZ":
                    n._useUTC = !0, n._tzm = E(e)
            }
            null == e && (n._isValid = !1)
        }

        function _(t) {
            var e, n, i, s = [];
            if (!t._d) {
                for (i = k(t), e = 0; 3 > e && null == t._a[e]; ++e) t._a[e] = s[e] = i[e];
                for (; 7 > e; e++) t._a[e] = s[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
                s[3] += ~~((t._tzm || 0) / 60), s[4] += ~~((t._tzm || 0) % 60), n = new Date(0), t._useUTC ? (n.setUTCFullYear(s[0], s[1], s[2]), n.setUTCHours(s[3], s[4], s[5], s[6])) : (n.setFullYear(s[0], s[1], s[2]), n.setHours(s[3], s[4], s[5], s[6])), t._d = n
            }
        }

        function w(t) {
            var e = t._i;
            t._d || (t._a = [e.years || e.year || e.y, e.months || e.month || e.M, e.days || e.day || e.d, e.hours || e.hour || e.h, e.minutes || e.minute || e.m, e.seconds || e.second || e.s, e.milliseconds || e.millisecond || e.ms], _(t))
        }

        function k(t) {
            var e = new Date;
            return t._useUTC ? [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()] : [e.getFullYear(), e.getMonth(), e.getDate()]
        }

        function L(t) {
            var e, n, i, s = m(t._l),
                o = "" + t._i;
            for (i = b(t._f, s).match(V), t._a = [], e = 0; e < i.length; e++) n = (S(i[e], t).exec(o) || [])[0], n && (o = o.slice(o.indexOf(n) + n.length)), he[i[e]] && T(i[e], n, t);
            o && (t._il = o), t._isPm && t._a[3] < 12 && (t._a[3] += 12), t._isPm === !1 && 12 === t._a[3] && (t._a[3] = 0), _(t)
        }

        function C(t) {
            var e, n, i, o, r, l = 99;
            for (o = 0; o < t._f.length; o++) e = a({}, t), e._f = t._f[o], L(e), n = new s(e), r = u(e._a, n.toArray()), n._il && (r += n._il.length), l > r && (l = r, i = n);
            a(t, i)
        }

        function A(t) {
            var e, n = t._i,
                i = ne.exec(n);
            if (i) {
                for (t._f = "YYYY-MM-DD" + (i[2] || " "), e = 0; 4 > e; e++)
                    if (se[e][1].exec(n)) {
                        t._f += se[e][0];
                        break
                    }
                Q.exec(n) && (t._f += " Z"), L(t)
            } else t._d = new Date(n)
        }

        function x(e) {
            var n = e._i,
                i = z.exec(n);
            n === t ? e._d = new Date : i ? e._d = new Date(+i[1]) : "string" == typeof n ? A(e) : d(n) ? (e._a = n.slice(0), _(e)) : n instanceof Date ? e._d = new Date(+n) : "object" == typeof n ? w(e) : e._d = new Date(n)
        }

        function I(t, e, n, i, s) {
            return s.relativeTime(e || 1, !!n, t, i)
        }

        function D(t, e, n) {
            var i = B(Math.abs(t) / 1e3),
                s = B(i / 60),
                o = B(s / 60),
                a = B(o / 24),
                r = B(a / 365),
                l = 45 > i && ["s", i] || 1 === s && ["m"] || 45 > s && ["mm", s] || 1 === o && ["h"] || 22 > o && ["hh", o] || 1 === a && ["d"] || 25 >= a && ["dd", a] || 45 >= a && ["M"] || 345 > a && ["MM", B(a / 30)] || 1 === r && ["y"] || ["yy", r];
            return l[2] = e, l[3] = t > 0, l[4] = n, I.apply({}, l)
        }

        function M(t, e, n) {
            var i, s = n - e,
                o = n - t.day();
            return o > s && (o -= 7), s - 7 > o && (o += 7), i = $(t).add("d", o), {
                week: Math.ceil(i.dayOfYear() / 7),
                year: i.year()
            }
        }

        function O(t) {
            var e = t._i,
                n = t._f;
            return null === e || "" === e ? null : ("string" == typeof e && (t._i = e = m().preparse(e)), $.isMoment(e) ? (t = a({}, e), t._d = new Date(+e._d)) : n ? d(n) ? C(t) : L(t) : x(t), new s(t))
        }

        function R(t, e) {
            $.fn[t] = $.fn[t + "s"] = function(t) {
                var n = this._isUTC ? "UTC" : "";
                return null != t ? (this._d["set" + n + e](t), $.updateOffset(this), this) : this._d["get" + n + e]()
            }
        }

        function N(t) {
            $.duration.fn[t] = function() {
                return this._data[t]
            }
        }

        function P(t, e) {
            $.duration.fn["as" + t] = function() {
                return +this / e
            }
        }
        for (var $, U, j = "2.2.1", B = Math.round, F = {}, H = "undefined" != typeof module && module.exports, z = /^\/?Date\((\-?\d+)/i, W = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)\:(\d+)\.?(\d{3})?/, V = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g, G = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, X = /\d\d?/, J = /\d{1,3}/, q = /\d{3}/, Y = /\d{1,4}/, K = /[+\-]?\d{1,6}/, Z = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Q = /Z|[\+\-]\d\d:?\d\d/i, te = /T/i, ee = /[\+\-]?\d+(\.\d{1,3})?/, ne = /^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/, ie = "YYYY-MM-DDTHH:mm:ssZ", se = [
            ["HH:mm:ss.S", /(T| )\d\d:\d\d:\d\d\.\d{1,3}/],
            ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
            ["HH:mm", /(T| )\d\d:\d\d/],
            ["HH", /(T| )\d\d/]
        ], oe = /([\+\-]|\d\d)/gi, ae = "Date|Hours|Minutes|Seconds|Milliseconds".split("|"), re = {
            Milliseconds: 1,
            Seconds: 1e3,
            Minutes: 6e4,
            Hours: 36e5,
            Days: 864e5,
            Months: 2592e6,
            Years: 31536e6
        }, le = {
            ms: "millisecond",
            s: "second",
            m: "minute",
            h: "hour",
            d: "day",
            w: "week",
            W: "isoweek",
            M: "month",
            y: "year"
        }, ce = {}, de = "DDD w W M D d".split(" "), ue = "M D H h m s w W".split(" "), he = {
            M: function() {
                return this.month() + 1
            },
            MMM: function(t) {
                return this.lang().monthsShort(this, t)
            },
            MMMM: function(t) {
                return this.lang().months(this, t)
            },
            D: function() {
                return this.date()
            },
            DDD: function() {
                return this.dayOfYear()
            },
            d: function() {
                return this.day()
            },
            dd: function(t) {
                return this.lang().weekdaysMin(this, t)
            },
            ddd: function(t) {
                return this.lang().weekdaysShort(this, t)
            },
            dddd: function(t) {
                return this.lang().weekdays(this, t)
            },
            w: function() {
                return this.week()
            },
            W: function() {
                return this.isoWeek()
            },
            YY: function() {
                return l(this.year() % 100, 2)
            },
            YYYY: function() {
                return l(this.year(), 4)
            },
            YYYYY: function() {
                return l(this.year(), 5)
            },
            gg: function() {
                return l(this.weekYear() % 100, 2)
            },
            gggg: function() {
                return this.weekYear()
            },
            ggggg: function() {
                return l(this.weekYear(), 5)
            },
            GG: function() {
                return l(this.isoWeekYear() % 100, 2)
            },
            GGGG: function() {
                return this.isoWeekYear()
            },
            GGGGG: function() {
                return l(this.isoWeekYear(), 5)
            },
            e: function() {
                return this.weekday()
            },
            E: function() {
                return this.isoWeekday()
            },
            a: function() {
                return this.lang().meridiem(this.hours(), this.minutes(), !0)
            },
            A: function() {
                return this.lang().meridiem(this.hours(), this.minutes(), !1)
            },
            H: function() {
                return this.hours()
            },
            h: function() {
                return this.hours() % 12 || 12
            },
            m: function() {
                return this.minutes()
            },
            s: function() {
                return this.seconds()
            },
            S: function() {
                return ~~(this.milliseconds() / 100)
            },
            SS: function() {
                return l(~~(this.milliseconds() / 10), 2)
            },
            SSS: function() {
                return l(this.milliseconds(), 3)
            },
            Z: function() {
                var t = -this.zone(),
                    e = "+";
                return 0 > t && (t = -t, e = "-"), e + l(~~(t / 60), 2) + ":" + l(~~t % 60, 2)
            },
            ZZ: function() {
                var t = -this.zone(),
                    e = "+";
                return 0 > t && (t = -t, e = "-"), e + l(~~(10 * t / 6), 4)
            },
            z: function() {
                return this.zoneAbbr()
            },
            zz: function() {
                return this.zoneName()
            },
            X: function() {
                return this.unix()
            }
        }; de.length;) U = de.pop(), he[U + "o"] = n(he[U], U);
        for (; ue.length;) U = ue.pop(), he[U + U] = e(he[U], 2);
        for (he.DDDD = e(he.DDD, 3), a(i.prototype, {
            set: function(t) {
                var e, n;
                for (n in t) e = t[n], "function" == typeof e ? this[n] = e : this["_" + n] = e
            },
            _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            months: function(t) {
                return this._months[t.month()]
            },
            _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            monthsShort: function(t) {
                return this._monthsShort[t.month()]
            },
            monthsParse: function(t) {
                var e, n, i;
                for (this._monthsParse || (this._monthsParse = []), e = 0; 12 > e; e++)
                    if (this._monthsParse[e] || (n = $.utc([2e3, e]), i = "^" + this.months(n, "") + "|^" + this.monthsShort(n, ""), this._monthsParse[e] = new RegExp(i.replace(".", ""), "i")), this._monthsParse[e].test(t)) return e
            },
            _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdays: function(t) {
                return this._weekdays[t.day()]
            },
            _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysShort: function(t) {
                return this._weekdaysShort[t.day()]
            },
            _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            weekdaysMin: function(t) {
                return this._weekdaysMin[t.day()]
            },
            weekdaysParse: function(t) {
                var e, n, i;
                for (this._weekdaysParse || (this._weekdaysParse = []), e = 0; 7 > e; e++)
                    if (this._weekdaysParse[e] || (n = $([2e3, 1]).day(e), i = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[e] = new RegExp(i.replace(".", ""), "i")), this._weekdaysParse[e].test(t)) return e
            },
            _longDateFormat: {
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D YYYY",
                LLL: "MMMM D YYYY LT",
                LLLL: "dddd, MMMM D YYYY LT"
            },
            longDateFormat: function(t) {
                var e = this._longDateFormat[t];
                return !e && this._longDateFormat[t.toUpperCase()] && (e = this._longDateFormat[t.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(t) {
                    return t.slice(1)
                }), this._longDateFormat[t] = e), e
            },
            isPM: function(t) {
                return "p" === (t + "").toLowerCase().charAt(0)
            },
            _meridiemParse: /[ap]\.?m?\.?/i,
            meridiem: function(t, e, n) {
                return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
            },
            _calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            calendar: function(t, e) {
                var n = this._calendar[t];
                return "function" == typeof n ? n.apply(e) : n
            },
            _relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            relativeTime: function(t, e, n, i) {
                var s = this._relativeTime[n];
                return "function" == typeof s ? s(t, e, n, i) : s.replace(/%d/i, t)
            },
            pastFuture: function(t, e) {
                var n = this._relativeTime[t > 0 ? "future" : "past"];
                return "function" == typeof n ? n(e) : n.replace(/%s/i, e)
            },
            ordinal: function(t) {
                return this._ordinal.replace("%d", t)
            },
            _ordinal: "%d",
            preparse: function(t) {
                return t
            },
            postformat: function(t) {
                return t
            },
            week: function(t) {
                return M(t, this._week.dow, this._week.doy).week
            },
            _week: {
                dow: 0,
                doy: 6
            }
        }), $ = function(t, e, n) {
            return O({
                _i: t,
                _f: e,
                _l: n,
                _isUTC: !1
            })
        }, $.utc = function(t, e, n) {
            return O({
                _useUTC: !0,
                _isUTC: !0,
                _l: n,
                _i: t,
                _f: e
            }).utc()
        }, $.unix = function(t) {
            return $(1e3 * t)
        }, $.duration = function(t, e) {
            var n, i, s = $.isDuration(t),
                a = "number" == typeof t,
                r = s ? t._input : a ? {} : t,
                l = W.exec(t);
            return a ? e ? r[e] = t : r.milliseconds = t : l && (n = "-" === l[1] ? -1 : 1, r = {
                y: 0,
                d: ~~l[2] * n,
                h: ~~l[3] * n,
                m: ~~l[4] * n,
                s: ~~l[5] * n,
                ms: ~~l[6] * n
            }), i = new o(r), s && t.hasOwnProperty("_lang") && (i._lang = t._lang), i
        }, $.version = j, $.defaultFormat = ie, $.updateOffset = function() {}, $.lang = function(t, e) {
            return t ? (t = t.toLowerCase(), t = t.replace("_", "-"), e ? p(t, e) : null === e ? (f(t), t = "en") : F[t] || m(t), void($.duration.fn._lang = $.fn._lang = m(t))) : $.fn._lang._abbr
        }, $.langData = function(t) {
            return t && t._lang && t._lang._abbr && (t = t._lang._abbr), m(t)
        }, $.isMoment = function(t) {
            return t instanceof s
        }, $.isDuration = function(t) {
            return t instanceof o
        }, a($.fn = s.prototype, {
            clone: function() {
                return $(this)
            },
            valueOf: function() {
                return +this._d + 6e4 * (this._offset || 0)
            },
            unix: function() {
                return Math.floor(+this / 1e3)
            },
            toString: function() {
                return this.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
            },
            toDate: function() {
                return this._offset ? new Date(+this) : this._d
            },
            toISOString: function() {
                return y($(this).utc(), "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
            },
            toArray: function() {
                var t = this;
                return [t.year(), t.month(), t.date(), t.hours(), t.minutes(), t.seconds(), t.milliseconds()]
            },
            isValid: function() {
                return null == this._isValid && (this._isValid = this._a ? !u(this._a, (this._isUTC ? $.utc(this._a) : $(this._a)).toArray()) : !isNaN(this._d.getTime())), !!this._isValid
            },
            invalidAt: function() {
                var t, e = this._a,
                    n = (this._isUTC ? $.utc(this._a) : $(this._a)).toArray();
                for (t = 6; t >= 0 && e[t] === n[t]; --t);
                return t
            },
            utc: function() {
                return this.zone(0)
            },
            local: function() {
                return this.zone(0), this._isUTC = !1, this
            },
            format: function(t) {
                var e = y(this, t || $.defaultFormat);
                return this.lang().postformat(e)
            },
            add: function(t, e) {
                var n;
                return n = "string" == typeof t ? $.duration(+e, t) : $.duration(t, e), c(this, n, 1), this
            },
            subtract: function(t, e) {
                var n;
                return n = "string" == typeof t ? $.duration(+e, t) : $.duration(t, e), c(this, n, -1), this
            },
            diff: function(t, e, n) {
                var i, s, o = this._isUTC ? $(t).zone(this._offset || 0) : $(t).local(),
                    a = 6e4 * (this.zone() - o.zone());
                return e = h(e), "year" === e || "month" === e ? (i = 432e5 * (this.daysInMonth() + o.daysInMonth()), s = 12 * (this.year() - o.year()) + (this.month() - o.month()), s += (this - $(this).startOf("month") - (o - $(o).startOf("month"))) / i, s -= 6e4 * (this.zone() - $(this).startOf("month").zone() - (o.zone() - $(o).startOf("month").zone())) / i, "year" === e && (s /= 12)) : (i = this - o, s = "second" === e ? i / 1e3 : "minute" === e ? i / 6e4 : "hour" === e ? i / 36e5 : "day" === e ? (i - a) / 864e5 : "week" === e ? (i - a) / 6048e5 : i), n ? s : r(s)
            },
            from: function(t, e) {
                return $.duration(this.diff(t)).lang(this.lang()._abbr).humanize(!e)
            },
            fromNow: function(t) {
                return this.from($(), t)
            },
            calendar: function() {
                var t = this.diff($().zone(this.zone()).startOf("day"), "days", !0),
                    e = -6 > t ? "sameElse" : -1 > t ? "lastWeek" : 0 > t ? "lastDay" : 1 > t ? "sameDay" : 2 > t ? "nextDay" : 7 > t ? "nextWeek" : "sameElse";
                return this.format(this.lang().calendar(e, this))
            },
            isLeapYear: function() {
                var t = this.year();
                return 0 === t % 4 && 0 !== t % 100 || 0 === t % 400
            },
            isDST: function() {
                return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone()
            },
            day: function(t) {
                var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return null != t ? "string" == typeof t && (t = this.lang().weekdaysParse(t), "number" != typeof t) ? this : this.add({
                    d: t - e
                }) : e
            },
            month: function(t) {
                var e, n = this._isUTC ? "UTC" : "";
                return null != t ? "string" == typeof t && (t = this.lang().monthsParse(t), "number" != typeof t) ? this : (e = this.date(), this.date(1), this._d["set" + n + "Month"](t), this.date(Math.min(e, this.daysInMonth())), $.updateOffset(this), this) : this._d["get" + n + "Month"]()
            },
            startOf: function(t) {
                switch (t = h(t)) {
                    case "year":
                        this.month(0);
                    case "month":
                        this.date(1);
                    case "week":
                    case "isoweek":
                    case "day":
                        this.hours(0);
                    case "hour":
                        this.minutes(0);
                    case "minute":
                        this.seconds(0);
                    case "second":
                        this.milliseconds(0)
                }
                return "week" === t ? this.weekday(0) : "isoweek" === t && this.isoWeekday(1), this
            },
            endOf: function(t) {
                return t = h(t), this.startOf(t).add("isoweek" === t ? "week" : t, 1).subtract("ms", 1)
            },
            isAfter: function(t, e) {
                return e = "undefined" != typeof e ? e : "millisecond", +this.clone().startOf(e) > +$(t).startOf(e)
            },
            isBefore: function(t, e) {
                return e = "undefined" != typeof e ? e : "millisecond", +this.clone().startOf(e) < +$(t).startOf(e)
            },
            isSame: function(t, e) {
                return e = "undefined" != typeof e ? e : "millisecond", +this.clone().startOf(e) === +$(t).startOf(e)
            },
            min: function(t) {
                return t = $.apply(null, arguments), this > t ? this : t
            },
            max: function(t) {
                return t = $.apply(null, arguments), t > this ? this : t
            },
            zone: function(t) {
                var e = this._offset || 0;
                return null == t ? this._isUTC ? e : this._d.getTimezoneOffset() : ("string" == typeof t && (t = E(t)), Math.abs(t) < 16 && (t = 60 * t), this._offset = t, this._isUTC = !0, e !== t && c(this, $.duration(e - t, "m"), 1, !0), this)
            },
            zoneAbbr: function() {
                return this._isUTC ? "UTC" : ""
            },
            zoneName: function() {
                return this._isUTC ? "Coordinated Universal Time" : ""
            },
            hasAlignedHourOffset: function(t) {
                return t = t ? $(t).zone() : 0, 0 === (this.zone() - t) % 60
            },
            daysInMonth: function() {
                return $.utc([this.year(), this.month() + 1, 0]).date()
            },
            dayOfYear: function(t) {
                var e = B(($(this).startOf("day") - $(this).startOf("year")) / 864e5) + 1;
                return null == t ? e : this.add("d", t - e)
            },
            weekYear: function(t) {
                var e = M(this, this.lang()._week.dow, this.lang()._week.doy).year;
                return null == t ? e : this.add("y", t - e)
            },
            isoWeekYear: function(t) {
                var e = M(this, 1, 4).year;
                return null == t ? e : this.add("y", t - e)
            },
            week: function(t) {
                var e = this.lang().week(this);
                return null == t ? e : this.add("d", 7 * (t - e))
            },
            isoWeek: function(t) {
                var e = M(this, 1, 4).week;
                return null == t ? e : this.add("d", 7 * (t - e))
            },
            weekday: function(t) {
                var e = (this._d.getDay() + 7 - this.lang()._week.dow) % 7;
                return null == t ? e : this.add("d", t - e)
            },
            isoWeekday: function(t) {
                return null == t ? this.day() || 7 : this.day(this.day() % 7 ? t : t - 7)
            },
            get: function(t) {
                return t = h(t), this[t.toLowerCase()]()
            },
            set: function(t, e) {
                t = h(t), this[t.toLowerCase()](e)
            },
            lang: function(e) {
                return e === t ? this._lang : (this._lang = m(e), this)
            }
        }), U = 0; U < ae.length; U++) R(ae[U].toLowerCase().replace(/s$/, ""), ae[U]);
        R("year", "FullYear"), $.fn.days = $.fn.day, $.fn.months = $.fn.month, $.fn.weeks = $.fn.week, $.fn.isoWeeks = $.fn.isoWeek, $.fn.toJSON = $.fn.toISOString, a($.duration.fn = o.prototype, {
            _bubble: function() {
                var t, e, n, i, s = this._milliseconds,
                    o = this._days,
                    a = this._months,
                    l = this._data;
                l.milliseconds = s % 1e3, t = r(s / 1e3), l.seconds = t % 60, e = r(t / 60), l.minutes = e % 60, n = r(e / 60), l.hours = n % 24, o += r(n / 24), l.days = o % 30, a += r(o / 30), l.months = a % 12, i = r(a / 12), l.years = i
            },
            weeks: function() {
                return r(this.days() / 7)
            },
            valueOf: function() {
                return this._milliseconds + 864e5 * this._days + 2592e6 * (this._months % 12) + 31536e6 * ~~(this._months / 12)
            },
            humanize: function(t) {
                var e = +this,
                    n = D(e, !t, this.lang());
                return t && (n = this.lang().pastFuture(e, n)), this.lang().postformat(n)
            },
            add: function(t, e) {
                var n = $.duration(t, e);
                return this._milliseconds += n._milliseconds, this._days += n._days, this._months += n._months, this._bubble(), this
            },
            subtract: function(t, e) {
                var n = $.duration(t, e);
                return this._milliseconds -= n._milliseconds, this._days -= n._days, this._months -= n._months, this._bubble(), this
            },
            get: function(t) {
                return t = h(t), this[t.toLowerCase() + "s"]()
            },
            as: function(t) {
                return t = h(t), this["as" + t.charAt(0).toUpperCase() + t.slice(1) + "s"]()
            },
            lang: $.fn.lang
        });
        for (U in re) re.hasOwnProperty(U) && (P(U, re[U]), N(U.toLowerCase()));
        P("Weeks", 6048e5), $.duration.fn.asMonths = function() {
            return (+this - 31536e6 * this.years()) / 2592e6 + 12 * this.years()
        }, $.lang("en", {
            ordinal: function(t) {
                var e = t % 10,
                    n = 1 === ~~(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
                return t + n
            }
        }), H && (module.exports = $), "undefined" == typeof ender && (this.moment = $), "function" == typeof define && define.amd && define("moment", [], function() {
            return $
        })
    }.call(this),
    function(t, e) {
        "object" == typeof exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.Spinner = e()
    }(this, function() {
        "use strict";

        function t(t, e) {
            var n, i = document.createElement(t || "div");
            for (n in e) i[n] = e[n];
            return i
        }

        function e(t) {
            for (var e = 1, n = arguments.length; n > e; e++) t.appendChild(arguments[e]);
            return t
        }

        function n(t, e, n, i) {
            var s = ["opacity", e, ~~(100 * t), n, i].join("-"),
                o = .01 + n / i * 100,
                a = Math.max(1 - (1 - t) / e * (100 - o), t),
                r = c.substring(0, c.indexOf("Animation")).toLowerCase(),
                l = r && "-" + r + "-" || "";
            return u[s] || (h.insertRule("@" + l + "keyframes " + s + "{0%{opacity:" + a + "}" + o + "%{opacity:" + t + "}" + (o + .01) + "%{opacity:1}" + (o + e) % 100 + "%{opacity:" + t + "}100%{opacity:" + a + "}}", h.cssRules.length), u[s] = 1), s
        }

        function i(t, e) {
            var n, i, s = t.style;
            if (void 0 !== s[e]) return e;
            for (e = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < d.length; i++)
                if (n = d[i] + e, void 0 !== s[n]) return n
        }

        function s(t, e) {
            for (var n in e) t.style[i(t, n) || n] = e[n];
            return t
        }

        function o(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n) void 0 === t[i] && (t[i] = n[i])
            }
            return t
        }

        function a(t) {
            for (var e = {
                x: t.offsetLeft,
                y: t.offsetTop
            }; t = t.offsetParent;) e.x += t.offsetLeft, e.y += t.offsetTop;
            return e
        }

        function r(t) {
            return "undefined" == typeof this ? new r(t) : void(this.opts = o(t || {}, r.defaults, p))
        }

        function l() {
            function n(e, n) {
                return t("<" + e + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', n)
            }
            h.addRule(".spin-vml", "behavior:url(#default#VML)"), r.prototype.lines = function(t, i) {
                function o() {
                    return s(n("group", {
                        coordsize: c + " " + c,
                        coordorigin: -l + " " + -l
                    }), {
                        width: c,
                        height: c
                    })
                }

                function a(t, a, r) {
                    e(u, e(s(o(), {
                        rotation: 360 / i.lines * t + "deg",
                        left: ~~a
                    }), e(s(n("roundrect", {
                        arcsize: i.corners
                    }), {
                        width: l,
                        height: i.width,
                        left: i.radius,
                        top: -i.width >> 1,
                        filter: r
                    }), n("fill", {
                        color: i.color,
                        opacity: i.opacity
                    }), n("stroke", {
                        opacity: 0
                    }))))
                }
                var r, l = i.length + i.width,
                    c = 2 * l,
                    d = 2 * -(i.width + i.length) + "px",
                    u = s(o(), {
                        position: "absolute",
                        top: d,
                        left: d
                    });
                if (i.shadow)
                    for (r = 1; r <= i.lines; r++) a(r, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
                for (r = 1; r <= i.lines; r++) a(r);
                return e(t, u)
            }, r.prototype.opacity = function(t, e, n, i) {
                var s = t.firstChild;
                i = i.shadow && i.lines || 0, s && e + i < s.childNodes.length && (s = s.childNodes[e + i], s = s && s.firstChild, s = s && s.firstChild, s && (s.opacity = n))
            }
        }
        var c, d = ["webkit", "Moz", "ms", "O"],
            u = {},
            h = function() {
                var n = t("style", {
                    type: "text/css"
                });
                return e(document.getElementsByTagName("head")[0], n), n.sheet || n.styleSheet
            }(),
            p = {
                lines: 12,
                length: 7,
                width: 5,
                radius: 10,
                rotate: 0,
                corners: 1,
                color: "#000",
                direction: 1,
                speed: 1,
                trail: 100,
                opacity: .25,
                fps: 20,
                zIndex: 2e9,
                className: "spinner",
                top: "auto",
                left: "auto",
                position: "relative"
            };
        r.defaults = {}, o(r.prototype, {
            spin: function(e) {
                this.stop();
                var n, i, o = this,
                    r = o.opts,
                    l = o.el = s(t(0, {
                        className: r.className
                    }), {
                        position: r.position,
                        width: 0,
                        zIndex: r.zIndex
                    }),
                    d = r.radius + r.length + r.width;
                if (e && (e.insertBefore(l, e.firstChild || null), i = a(e), n = a(l), s(l, {
                        left: ("auto" == r.left ? i.x - n.x + (e.offsetWidth >> 1) : parseInt(r.left, 10) + d) + "px",
                        top: ("auto" == r.top ? i.y - n.y + (e.offsetHeight >> 1) : parseInt(r.top, 10) + d) + "px"
                    })), l.setAttribute("role", "progressbar"), o.lines(l, o.opts), !c) {
                    var u, h = 0,
                        p = (r.lines - 1) * (1 - r.direction) / 2,
                        f = r.fps,
                        m = f / r.speed,
                        g = (1 - r.opacity) / (m * r.trail / 100),
                        v = m / r.lines;
                    ! function y() {
                        h++;
                        for (var t = 0; t < r.lines; t++) u = Math.max(1 - (h + (r.lines - t) * v) % m * g, r.opacity), o.opacity(l, t * r.direction + p, u, r);
                        o.timeout = o.el && setTimeout(y, ~~(1e3 / f))
                    }()
                }
                return o
            },
            stop: function() {
                var t = this.el;
                return t && (clearTimeout(this.timeout), t.parentNode && t.parentNode.removeChild(t), this.el = void 0), this
            },
            lines: function(i, o) {
                function a(e, n) {
                    return s(t(), {
                        position: "absolute",
                        width: o.length + o.width + "px",
                        height: o.width + "px",
                        background: e,
                        boxShadow: n,
                        transformOrigin: "left",
                        transform: "rotate(" + ~~(360 / o.lines * l + o.rotate) + "deg) translate(" + o.radius + "px,0)",
                        borderRadius: (o.corners * o.width >> 1) + "px"
                    })
                }
                for (var r, l = 0, d = (o.lines - 1) * (1 - o.direction) / 2; l < o.lines; l++) r = s(t(), {
                    position: "absolute",
                    top: 1 + ~(o.width / 2) + "px",
                    transform: o.hwaccel ? "translate3d(0,0,0)" : "",
                    opacity: o.opacity,
                    animation: c && n(o.opacity, o.trail, d + l * o.direction, o.lines) + " " + 1 / o.speed + "s linear infinite"
                }), o.shadow && e(r, s(a("#000", "0 0 4px #000"), {
                    top: "2px"
                })), e(i, e(r, a(o.color, "0 0 1px rgba(0,0,0,.1)")));
                return i
            },
            opacity: function(t, e, n) {
                e < t.childNodes.length && (t.childNodes[e].style.opacity = n)
            }
        });
        var f = s(t("group"), {
            behavior: "url(#default#VML)"
        });
        return !i(f, "transform") && f.adj ? l() : c = i(f, "animation"), r
    }),
    function(t, e) {
        "object" == typeof exports ? module.exports = e(require("spin.js")) : "function" == typeof define && define.amd ? define(["spin"], e) : t.Ladda = e(t.Spinner)
    }(this, function(t) {
        "use strict";

        function e(t) {
            if ("undefined" == typeof t) return void console.warn("Ladda button target must be defined.");
            t.querySelector(".ladda-label") || (t.innerHTML = '<span class="ladda-label">' + t.innerHTML + "</span>");
            var e, n = t.querySelector(".ladda-spinner");
            n || (n = document.createElement("span"), n.className = "ladda-spinner"), t.appendChild(n);
            var i, s = {
                start: function() {
                    return e || (e = a(t)), t.setAttribute("disabled", ""), t.setAttribute("data-loading", ""), clearTimeout(i), e.spin(n), this.setProgress(0), this
                },
                startAfter: function(t) {
                    return clearTimeout(i), i = setTimeout(function() {
                        s.start()
                    }, t), this
                },
                stop: function() {
                    return t.removeAttribute("disabled"), t.removeAttribute("data-loading"), clearTimeout(i), e && (i = setTimeout(function() {
                        e.stop()
                    }, 1e3)), this
                },
                toggle: function() {
                    return this.isLoading() ? this.stop() : this.start(), this
                },
                setProgress: function(e) {
                    e = Math.max(Math.min(e, 1), 0);
                    var n = t.querySelector(".ladda-progress");
                    0 === e && n && n.parentNode ? n.parentNode.removeChild(n) : (n || (n = document.createElement("div"), n.className = "ladda-progress", t.appendChild(n)), n.style.width = (e || 0) * t.offsetWidth + "px")
                },
                enable: function() {
                    return this.stop(), this
                },
                disable: function() {
                    return this.stop(), t.setAttribute("disabled", ""), this
                },
                isLoading: function() {
                    return t.hasAttribute("data-loading")
                },
                remove: function() {
                    clearTimeout(i), t.removeAttribute("disabled", ""), t.removeAttribute("data-loading", ""), e && (e.stop(), e = null);
                    for (var n = 0, o = l.length; o > n; n++)
                        if (s === l[n]) {
                            l.splice(n, 1);
                            break
                        }
                }
            };
            return l.push(s), s
        }

        function n(t, e) {
            for (; t.parentNode && t.tagName !== e;) t = t.parentNode;
            return e === t.tagName ? t : void 0
        }

        function i(t) {
            for (var e = ["input", "textarea", "select"], n = [], i = 0; i < e.length; i++)
                for (var s = t.getElementsByTagName(e[i]), o = 0; o < s.length; o++) s[o].hasAttribute("required") && n.push(s[o]);
            return n
        }

        function s(t, s) {
            s = s || {};
            var o = [];
            "string" == typeof t ? o = r(document.querySelectorAll(t)) : "object" == typeof t && "string" == typeof t.nodeName && (o = [t]);
            for (var a = 0, l = o.length; l > a; a++) ! function() {
                var t = o[a];
                if ("function" == typeof t.addEventListener) {
                    var r = e(t),
                        l = -1;
                    t.addEventListener("click", function() {
                        var e = !0,
                            o = n(t, "FORM");
                        if ("undefined" != typeof o)
                            for (var a = i(o), c = 0; c < a.length; c++) "" === a[c].value.replace(/^\s+|\s+$/g, "") && (e = !1), "checkbox" !== a[c].type && "radio" !== a[c].type || a[c].checked || (e = !1);
                        e && (r.startAfter(1), "number" == typeof s.timeout && (clearTimeout(l), l = setTimeout(r.stop, s.timeout)), "function" == typeof s.callback && s.callback.apply(null, [r]))
                    }, !1)
                }
            }()
        }

        function o() {
            for (var t = 0, e = l.length; e > t; t++) l[t].stop()
        }

        function a(e) {
            var n, i = e.offsetHeight;
            0 === i && (i = parseFloat(window.getComputedStyle(e).height)), i > 32 && (i *= .8), e.hasAttribute("data-spinner-size") && (i = parseInt(e.getAttribute("data-spinner-size"), 10)), e.hasAttribute("data-spinner-color") && (n = e.getAttribute("data-spinner-color"));
            var s = 12,
                o = .2 * i,
                a = .6 * o,
                r = 7 > o ? 2 : 3;
            return new t({
                color: n || "#fff",
                lines: s,
                radius: o,
                length: a,
                width: r,
                zIndex: "auto",
                top: "auto",
                left: "auto",
                className: ""
            })
        }

        function r(t) {
            for (var e = [], n = 0; n < t.length; n++) e.push(t[n]);
            return e
        }
        var l = [];
        return {
            bind: s,
            create: e,
            stopAll: o
        }
    }),
    function(t, e) {
        function n(t, e, n) {
            return t.addEventListener ? void t.addEventListener(e, n, !1) : void t.attachEvent("on" + e, n)
        }

        function i(t) {
            if ("keypress" == t.type) {
                var e = String.fromCharCode(t.which);
                return t.shiftKey || (e = e.toLowerCase()), e
            }
            return w[t.which] ? w[t.which] : k[t.which] ? k[t.which] : String.fromCharCode(t.which).toLowerCase()
        }

        function s(t, e) {
            return t.sort().join(",") === e.sort().join(",")
        }

        function o(t) {
            t = t || {};
            var e, n = !1;
            for (e in I) t[e] ? n = !0 : I[e] = 0;
            n || (O = !1)
        }

        function a(t, e, n, i, o, a) {
            var r, l, c = [],
                d = n.type;
            if (!A[t]) return [];
            for ("keyup" == d && p(t) && (e = [t]), r = 0; r < A[t].length; ++r)
                if (l = A[t][r], (i || !l.seq || I[l.seq] == l.level) && d == l.action && ("keypress" == d && !n.metaKey && !n.ctrlKey || s(e, l.modifiers))) {
                    var u = !i && l.combo == o,
                        h = i && l.seq == i && l.level == a;
                    (u || h) && A[t].splice(r, 1), c.push(l)
                }
            return c
        }

        function r(t) {
            var e = [];
            return t.shiftKey && e.push("shift"), t.altKey && e.push("alt"), t.ctrlKey && e.push("ctrl"), t.metaKey && e.push("meta"), e
        }

        function l(t) {
            return t.preventDefault ? void t.preventDefault() : void(t.returnValue = !1)
        }

        function c(t) {
            return t.stopPropagation ? void t.stopPropagation() : void(t.cancelBubble = !0)
        }

        function d(t, e, n, i) {
            N.stopCallback(e, e.target || e.srcElement, n, i) || t(e, n) === !1 && (l(e), c(e))
        }

        function u(t, e, n) {
            var i, s = a(t, e, n),
                r = {},
                l = 0,
                c = !1;
            for (i = 0; i < s.length; ++i) s[i].seq && (l = Math.max(l, s[i].level));
            for (i = 0; i < s.length; ++i)
                if (s[i].seq) {
                    if (s[i].level != l) continue;
                    c = !0, r[s[i].seq] = 1, d(s[i].callback, n, s[i].combo, s[i].seq)
                } else c || d(s[i].callback, n, s[i].combo);
            var u = "keypress" == n.type && M;
            n.type != O || p(t) || u || o(r), M = c && "keydown" == n.type
        }

        function h(t) {
            "number" != typeof t.which && (t.which = t.keyCode);
            var e = i(t);
            if (e) return "keyup" == t.type && D === e ? void(D = !1) : void N.handleKey(e, r(t), t)
        }

        function p(t) {
            return "shift" == t || "ctrl" == t || "alt" == t || "meta" == t
        }

        function f() {
            clearTimeout(_), _ = setTimeout(o, 1e3)
        }

        function m() {
            if (!T) {
                T = {};
                for (var t in w) t > 95 && 112 > t || w.hasOwnProperty(t) && (T[w[t]] = t)
            }
            return T
        }

        function g(t, e, n) {
            return n || (n = m()[t] ? "keydown" : "keypress"), "keypress" == n && e.length && (n = "keydown"), n
        }

        function v(t, e, n, s) {
            function a(e) {
                return function() {
                    O = e, ++I[t], f()
                }
            }

            function r(e) {
                d(n, e, t), "keyup" !== s && (D = i(e)), setTimeout(o, 10)
            }
            I[t] = 0;
            for (var l = 0; l < e.length; ++l) {
                var c = l + 1 === e.length,
                    u = c ? r : a(s || b(e[l + 1]).action);
                S(e[l], u, s, t, l)
            }
        }

        function y(t) {
            return "+" === t ? ["+"] : t.split("+")
        }

        function b(t, e) {
            var n, i, s, o = [];
            for (n = y(t), s = 0; s < n.length; ++s) i = n[s], C[i] && (i = C[i]), e && "keypress" != e && L[i] && (i = L[i], o.push("shift")), p(i) && o.push(i);
            return e = g(i, o, e), {
                key: i,
                modifiers: o,
                action: e
            }
        }

        function S(t, e, n, i, s) {
            x[t + ":" + n] = e, t = t.replace(/\s+/g, " ");
            var o, r = t.split(" ");
            return r.length > 1 ? void v(t, r, e, n) : (o = b(t, n), A[o.key] = A[o.key] || [], a(o.key, o.modifiers, {
                type: o.action
            }, i, t, s), void A[o.key][i ? "unshift" : "push"]({
                callback: e,
                modifiers: o.modifiers,
                action: o.action,
                seq: i,
                level: s,
                combo: t
            }))
        }

        function E(t, e, n) {
            for (var i = 0; i < t.length; ++i) S(t[i], e, n)
        }
        for (var T, _, w = {
            8: "backspace",
            9: "tab",
            13: "enter",
            16: "shift",
            17: "ctrl",
            18: "alt",
            20: "capslock",
            27: "esc",
            32: "space",
            33: "pageup",
            34: "pagedown",
            35: "end",
            36: "home",
            37: "left",
            38: "up",
            39: "right",
            40: "down",
            45: "ins",
            46: "del",
            91: "meta",
            93: "meta",
            224: "meta"
        }, k = {
            106: "*",
            107: "+",
            109: "-",
            110: ".",
            111: "/",
            186: ";",
            187: "=",
            188: ",",
            189: "-",
            190: ".",
            191: "/",
            192: "`",
            219: "[",
            220: "\\",
            221: "]",
            222: "'"
        }, L = {
            "~": "`",
            "!": "1",
            "@": "2",
            "#": "3",
            $: "4",
            "%": "5",
            "^": "6",
            "&": "7",
            "*": "8",
            "(": "9",
            ")": "0",
            _: "-",
            "+": "=",
            ":": ";",
            '"': "'",
            "<": ",",
            ">": ".",
            "?": "/",
            "|": "\\"
        }, C = {
            option: "alt",
            command: "meta",
            "return": "enter",
            escape: "esc",
            mod: /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "meta" : "ctrl"
        }, A = {}, x = {}, I = {}, D = !1, M = !1, O = !1, R = 1; 20 > R; ++R) w[111 + R] = "f" + R;
        for (R = 0; 9 >= R; ++R) w[R + 96] = R;
        n(e, "keypress", h), n(e, "keydown", h), n(e, "keyup", h);
        var N = {
            bind: function(t, e, n) {
                return t = t instanceof Array ? t : [t], E(t, e, n), this
            },
            unbind: function(t, e) {
                return N.bind(t, function() {}, e)
            },
            trigger: function(t, e) {
                return x[t + ":" + e] && x[t + ":" + e]({}, t), this
            },
            reset: function() {
                return A = {}, x = {}, this
            },
            stopCallback: function(t, e) {
                return (" " + e.className + " ").indexOf(" mousetrap ") > -1 ? !1 : "INPUT" == e.tagName || "SELECT" == e.tagName || "TEXTAREA" == e.tagName || e.isContentEditable
            },
            handleKey: u
        };
        t.Mousetrap = N, "function" == typeof define && define.amd && define(N)
    }(window, document),
    function(t, e, n, i) {
        "use strict";

        function s(t, e, n) {
            return setTimeout(d(t, n), e)
        }

        function o(t, e, n) {
            return Array.isArray(t) ? (a(t, n[e], n), !0) : !1
        }

        function a(t, e, n) {
            var s;
            if (t)
                if (t.forEach) t.forEach(e, n);
                else if (t.length !== i)
                    for (s = 0; s < t.length;) e.call(n, t[s], s, t), s++;
                else
                    for (s in t) t.hasOwnProperty(s) && e.call(n, t[s], s, t)
        }

        function r(t, e, n) {
            for (var s = Object.keys(e), o = 0; o < s.length;)(!n || n && t[s[o]] === i) && (t[s[o]] = e[s[o]]), o++;
            return t
        }

        function l(t, e) {
            return r(t, e, !0)
        }

        function c(t, e, n) {
            var i, s = e.prototype;
            i = t.prototype = Object.create(s), i.constructor = t, i._super = s, n && r(i, n)
        }

        function d(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        }

        function u(t, e) {
            return typeof t == de ? t.apply(e ? e[0] || i : i, e) : t
        }

        function h(t, e) {
            return t === i ? e : t
        }

        function p(t, e, n) {
            a(v(e), function(e) {
                t.addEventListener(e, n, !1)
            })
        }

        function f(t, e, n) {
            a(v(e), function(e) {
                t.removeEventListener(e, n, !1)
            })
        }

        function m(t, e) {
            for (; t;) {
                if (t == e) return !0;
                t = t.parentNode
            }
            return !1
        }

        function g(t, e) {
            return t.indexOf(e) > -1
        }

        function v(t) {
            return t.trim().split(/\s+/g)
        }

        function y(t, e, n) {
            if (t.indexOf && !n) return t.indexOf(e);
            for (var i = 0; i < t.length;) {
                if (n && t[i][n] == e || !n && t[i] === e) return i;
                i++
            }
            return -1
        }

        function b(t) {
            return Array.prototype.slice.call(t, 0)
        }

        function S(t, e, n) {
            for (var i = [], s = [], o = 0; o < t.length;) {
                var a = e ? t[o][e] : t[o];
                y(s, a) < 0 && i.push(t[o]), s[o] = a, o++
            }
            return n && (i = e ? i.sort(function(t, n) {
                return t[e] > n[e]
            }) : i.sort()), i
        }

        function E(t, e) {
            for (var n, s, o = e[0].toUpperCase() + e.slice(1), a = 0; a < le.length;) {
                if (n = le[a], s = n ? n + o : e, s in t) return s;
                a++
            }
            return i
        }

        function T() {
            return fe++
        }

        function _(t) {
            var e = t.ownerDocument;
            return e.defaultView || e.parentWindow
        }

        function w(t, e) {
            var n = this;
            this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(e) {
                u(t.options.enable, [t]) && n.handler(e)
            }, this.init()
        }

        function k(t) {
            var e, n = t.options.inputClass;
            return new(e = n ? n : ve ? j : ye ? H : ge ? W : U)(t, L)
        }

        function L(t, e, n) {
            var i = n.pointers.length,
                s = n.changedPointers.length,
                o = e & we && i - s === 0,
                a = e & (Le | Ce) && i - s === 0;
            n.isFirst = !!o, n.isFinal = !!a, o && (t.session = {}), n.eventType = e, C(t, n), t.emit("hammer.input", n), t.recognize(n), t.session.prevInput = n
        }

        function C(t, e) {
            var n = t.session,
                i = e.pointers,
                s = i.length;
            n.firstInput || (n.firstInput = I(e)), s > 1 && !n.firstMultiple ? n.firstMultiple = I(e) : 1 === s && (n.firstMultiple = !1);
            var o = n.firstInput,
                a = n.firstMultiple,
                r = a ? a.center : o.center,
                l = e.center = D(i);
            e.timeStamp = pe(), e.deltaTime = e.timeStamp - o.timeStamp, e.angle = N(r, l), e.distance = R(r, l), A(n, e), e.offsetDirection = O(e.deltaX, e.deltaY), e.scale = a ? $(a.pointers, i) : 1, e.rotation = a ? P(a.pointers, i) : 0, x(n, e);
            var c = t.element;
            m(e.srcEvent.target, c) && (c = e.srcEvent.target), e.target = c
        }

        function A(t, e) {
            var n = e.center,
                i = t.offsetDelta || {},
                s = t.prevDelta || {},
                o = t.prevInput || {};
            (e.eventType === we || o.eventType === Le) && (s = t.prevDelta = {
                x: o.deltaX || 0,
                y: o.deltaY || 0
            }, i = t.offsetDelta = {
                x: n.x,
                y: n.y
            }), e.deltaX = s.x + (n.x - i.x), e.deltaY = s.y + (n.y - i.y)
        }

        function x(t, e) {
            var n, s, o, a, r = t.lastInterval || e,
                l = e.timeStamp - r.timeStamp;
            if (e.eventType != Ce && (l > _e || r.velocity === i)) {
                var c = r.deltaX - e.deltaX,
                    d = r.deltaY - e.deltaY,
                    u = M(l, c, d);
                s = u.x, o = u.y, n = he(u.x) > he(u.y) ? u.x : u.y, a = O(c, d), t.lastInterval = e
            } else n = r.velocity, s = r.velocityX, o = r.velocityY, a = r.direction;
            e.velocity = n, e.velocityX = s, e.velocityY = o, e.direction = a
        }

        function I(t) {
            for (var e = [], n = 0; n < t.pointers.length;) e[n] = {
                clientX: ue(t.pointers[n].clientX),
                clientY: ue(t.pointers[n].clientY)
            }, n++;
            return {
                timeStamp: pe(),
                pointers: e,
                center: D(e),
                deltaX: t.deltaX,
                deltaY: t.deltaY
            }
        }

        function D(t) {
            var e = t.length;
            if (1 === e) return {
                x: ue(t[0].clientX),
                y: ue(t[0].clientY)
            };
            for (var n = 0, i = 0, s = 0; e > s;) n += t[s].clientX, i += t[s].clientY, s++;
            return {
                x: ue(n / e),
                y: ue(i / e)
            }
        }

        function M(t, e, n) {
            return {
                x: e / t || 0,
                y: n / t || 0
            }
        }

        function O(t, e) {
            return t === e ? Ae : he(t) >= he(e) ? t > 0 ? xe : Ie : e > 0 ? De : Me
        }

        function R(t, e, n) {
            n || (n = Pe);
            var i = e[n[0]] - t[n[0]],
                s = e[n[1]] - t[n[1]];
            return Math.sqrt(i * i + s * s)
        }

        function N(t, e, n) {
            n || (n = Pe);
            var i = e[n[0]] - t[n[0]],
                s = e[n[1]] - t[n[1]];
            return 180 * Math.atan2(s, i) / Math.PI
        }

        function P(t, e) {
            return N(e[1], e[0], $e) - N(t[1], t[0], $e)
        }

        function $(t, e) {
            return R(e[0], e[1], $e) / R(t[0], t[1], $e)
        }

        function U() {
            this.evEl = je, this.evWin = Be, this.allow = !0, this.pressed = !1, w.apply(this, arguments)
        }

        function j() {
            this.evEl = ze, this.evWin = We, w.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
        }

        function B() {
            this.evTarget = Ge, this.evWin = Xe, this.started = !1, w.apply(this, arguments)
        }

        function F(t, e) {
            var n = b(t.touches),
                i = b(t.changedTouches);
            return e & (Le | Ce) && (n = S(n.concat(i), "identifier", !0)), [n, i]
        }

        function H() {
            this.evTarget = qe, this.targetIds = {}, w.apply(this, arguments)
        }

        function z(t, e) {
            var n = b(t.touches),
                i = this.targetIds;
            if (e & (we | ke) && 1 === n.length) return i[n[0].identifier] = !0, [n, n];
            var s, o, a = b(t.changedTouches),
                r = [],
                l = this.target;
            if (o = n.filter(function(t) {
                    return m(t.target, l)
                }), e === we)
                for (s = 0; s < o.length;) i[o[s].identifier] = !0, s++;
            for (s = 0; s < a.length;) i[a[s].identifier] && r.push(a[s]), e & (Le | Ce) && delete i[a[s].identifier], s++;
            return r.length ? [S(o.concat(r), "identifier", !0), r] : void 0
        }

        function W() {
            w.apply(this, arguments);
            var t = d(this.handler, this);
            this.touch = new H(this.manager, t), this.mouse = new U(this.manager, t)
        }

        function V(t, e) {
            this.manager = t, this.set(e)
        }

        function G(t) {
            if (g(t, en)) return en;
            var e = g(t, nn),
                n = g(t, sn);
            return e && n ? nn + " " + sn : e || n ? e ? nn : sn : g(t, tn) ? tn : Qe
        }

        function X(t) {
            this.id = T(), this.manager = null, this.options = l(t || {}, this.defaults), this.options.enable = h(this.options.enable, !0), this.state = on, this.simultaneous = {}, this.requireFail = []
        }

        function J(t) {
            return t & dn ? "cancel" : t & ln ? "end" : t & rn ? "move" : t & an ? "start" : ""
        }

        function q(t) {
            return t == Me ? "down" : t == De ? "up" : t == xe ? "left" : t == Ie ? "right" : ""
        }

        function Y(t, e) {
            var n = e.manager;
            return n ? n.get(t) : t
        }

        function K() {
            X.apply(this, arguments)
        }

        function Z() {
            K.apply(this, arguments), this.pX = null, this.pY = null
        }

        function Q() {
            K.apply(this, arguments)
        }

        function te() {
            X.apply(this, arguments), this._timer = null, this._input = null
        }

        function ee() {
            K.apply(this, arguments)
        }

        function ne() {
            K.apply(this, arguments)
        }

        function ie() {
            X.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
        }

        function se(t, e) {
            return e = e || {}, e.recognizers = h(e.recognizers, se.defaults.preset), new oe(t, e)
        }

        function oe(t, e) {
            e = e || {}, this.options = l(e, se.defaults), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.element = t, this.input = k(this), this.touchAction = new V(this, this.options.touchAction), ae(this, !0), a(e.recognizers, function(t) {
                var e = this.add(new t[0](t[1]));
                t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
            }, this)
        }

        function ae(t, e) {
            var n = t.element;
            a(t.options.cssProps, function(t, i) {
                n.style[E(n.style, i)] = e ? t : ""
            })
        }

        function re(t, n) {
            var i = e.createEvent("Event");
            i.initEvent(t, !0, !0), i.gesture = n, n.target.dispatchEvent(i)
        }
        var le = ["", "webkit", "moz", "MS", "ms", "o"],
            ce = e.createElement("div"),
            de = "function",
            ue = Math.round,
            he = Math.abs,
            pe = Date.now,
            fe = 1,
            me = /mobile|tablet|ip(ad|hone|od)|android/i,
            ge = "ontouchstart" in t,
            ve = E(t, "PointerEvent") !== i,
            ye = ge && me.test(navigator.userAgent),
            be = "touch",
            Se = "pen",
            Ee = "mouse",
            Te = "kinect",
            _e = 25,
            we = 1,
            ke = 2,
            Le = 4,
            Ce = 8,
            Ae = 1,
            xe = 2,
            Ie = 4,
            De = 8,
            Me = 16,
            Oe = xe | Ie,
            Re = De | Me,
            Ne = Oe | Re,
            Pe = ["x", "y"],
            $e = ["clientX", "clientY"];
        w.prototype = {
            handler: function() {},
            init: function() {
                this.evEl && p(this.element, this.evEl, this.domHandler), this.evTarget && p(this.target, this.evTarget, this.domHandler), this.evWin && p(_(this.element), this.evWin, this.domHandler)
            },
            destroy: function() {
                this.evEl && f(this.element, this.evEl, this.domHandler), this.evTarget && f(this.target, this.evTarget, this.domHandler), this.evWin && f(_(this.element), this.evWin, this.domHandler)
            }
        };
        var Ue = {
                mousedown: we,
                mousemove: ke,
                mouseup: Le
            },
            je = "mousedown",
            Be = "mousemove mouseup";
        c(U, w, {
            handler: function(t) {
                var e = Ue[t.type];
                e & we && 0 === t.button && (this.pressed = !0), e & ke && 1 !== t.which && (e = Le), this.pressed && this.allow && (e & Le && (this.pressed = !1), this.callback(this.manager, e, {
                    pointers: [t],
                    changedPointers: [t],
                    pointerType: Ee,
                    srcEvent: t
                }))
            }
        });
        var Fe = {
                pointerdown: we,
                pointermove: ke,
                pointerup: Le,
                pointercancel: Ce,
                pointerout: Ce
            },
            He = {
                2: be,
                3: Se,
                4: Ee,
                5: Te
            },
            ze = "pointerdown",
            We = "pointermove pointerup pointercancel";
        t.MSPointerEvent && (ze = "MSPointerDown", We = "MSPointerMove MSPointerUp MSPointerCancel"), c(j, w, {
            handler: function(t) {
                var e = this.store,
                    n = !1,
                    i = t.type.toLowerCase().replace("ms", ""),
                    s = Fe[i],
                    o = He[t.pointerType] || t.pointerType,
                    a = o == be,
                    r = y(e, t.pointerId, "pointerId");
                s & we && (0 === t.button || a) ? 0 > r && (e.push(t), r = e.length - 1) : s & (Le | Ce) && (n = !0), 0 > r || (e[r] = t, this.callback(this.manager, s, {
                    pointers: e,
                    changedPointers: [t],
                    pointerType: o,
                    srcEvent: t
                }), n && e.splice(r, 1))
            }
        });
        var Ve = {
                touchstart: we,
                touchmove: ke,
                touchend: Le,
                touchcancel: Ce
            },
            Ge = "touchstart",
            Xe = "touchstart touchmove touchend touchcancel";
        c(B, w, {
            handler: function(t) {
                var e = Ve[t.type];
                if (e === we && (this.started = !0), this.started) {
                    var n = F.call(this, t, e);
                    e & (Le | Ce) && n[0].length - n[1].length === 0 && (this.started = !1), this.callback(this.manager, e, {
                        pointers: n[0],
                        changedPointers: n[1],
                        pointerType: be,
                        srcEvent: t
                    })
                }
            }
        });
        var Je = {
                touchstart: we,
                touchmove: ke,
                touchend: Le,
                touchcancel: Ce
            },
            qe = "touchstart touchmove touchend touchcancel";
        c(H, w, {
            handler: function(t) {
                var e = Je[t.type],
                    n = z.call(this, t, e);
                n && this.callback(this.manager, e, {
                    pointers: n[0],
                    changedPointers: n[1],
                    pointerType: be,
                    srcEvent: t
                })
            }
        }), c(W, w, {
            handler: function(t, e, n) {
                var i = n.pointerType == be,
                    s = n.pointerType == Ee;
                if (i) this.mouse.allow = !1;
                else if (s && !this.mouse.allow) return;
                e & (Le | Ce) && (this.mouse.allow = !0), this.callback(t, e, n)
            },
            destroy: function() {
                this.touch.destroy(), this.mouse.destroy()
            }
        });
        var Ye = E(ce.style, "touchAction"),
            Ke = Ye !== i,
            Ze = "compute",
            Qe = "auto",
            tn = "manipulation",
            en = "none",
            nn = "pan-x",
            sn = "pan-y";
        V.prototype = {
            set: function(t) {
                t == Ze && (t = this.compute()), Ke && (this.manager.element.style[Ye] = t), this.actions = t.toLowerCase().trim()
            },
            update: function() {
                this.set(this.manager.options.touchAction)
            },
            compute: function() {
                var t = [];
                return a(this.manager.recognizers, function(e) {
                    u(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
                }), G(t.join(" "))
            },
            preventDefaults: function(t) {
                if (!Ke) {
                    var e = t.srcEvent,
                        n = t.offsetDirection;
                    if (this.manager.session.prevented) return void e.preventDefault();
                    var i = this.actions,
                        s = g(i, en),
                        o = g(i, sn),
                        a = g(i, nn);
                    return s || o && n & Oe || a && n & Re ? this.preventSrc(e) : void 0
                }
            },
            preventSrc: function(t) {
                this.manager.session.prevented = !0, t.preventDefault()
            }
        };
        var on = 1,
            an = 2,
            rn = 4,
            ln = 8,
            cn = ln,
            dn = 16,
            un = 32;
        X.prototype = {
            defaults: {},
            set: function(t) {
                return r(this.options, t), this.manager && this.manager.touchAction.update(), this
            },
            recognizeWith: function(t) {
                if (o(t, "recognizeWith", this)) return this;
                var e = this.simultaneous;
                return t = Y(t, this), e[t.id] || (e[t.id] = t, t.recognizeWith(this)), this
            },
            dropRecognizeWith: function(t) {
                return o(t, "dropRecognizeWith", this) ? this : (t = Y(t, this), delete this.simultaneous[t.id], this)
            },
            requireFailure: function(t) {
                if (o(t, "requireFailure", this)) return this;
                var e = this.requireFail;
                return t = Y(t, this), -1 === y(e, t) && (e.push(t), t.requireFailure(this)), this
            },
            dropRequireFailure: function(t) {
                if (o(t, "dropRequireFailure", this)) return this;
                t = Y(t, this);
                var e = y(this.requireFail, t);
                return e > -1 && this.requireFail.splice(e, 1), this
            },
            hasRequireFailures: function() {
                return this.requireFail.length > 0
            },
            canRecognizeWith: function(t) {
                return !!this.simultaneous[t.id]
            },
            emit: function(t) {
                function e(e) {
                    n.manager.emit(n.options.event + (e ? J(i) : ""), t)
                }
                var n = this,
                    i = this.state;
                ln > i && e(!0), e(), i >= ln && e(!0)
            },
            tryEmit: function(t) {
                return this.canEmit() ? this.emit(t) : void(this.state = un)
            },
            canEmit: function() {
                for (var t = 0; t < this.requireFail.length;) {
                    if (!(this.requireFail[t].state & (un | on))) return !1;
                    t++
                }
                return !0
            },
            recognize: function(t) {
                var e = r({}, t);
                return u(this.options.enable, [this, e]) ? (this.state & (cn | dn | un) && (this.state = on), this.state = this.process(e), void(this.state & (an | rn | ln | dn) && this.tryEmit(e))) : (this.reset(), void(this.state = un))
            },
            process: function() {},
            getTouchAction: function() {},
            reset: function() {}
        }, c(K, X, {
            defaults: {
                pointers: 1
            },
            attrTest: function(t) {
                var e = this.options.pointers;
                return 0 === e || t.pointers.length === e
            },
            process: function(t) {
                var e = this.state,
                    n = t.eventType,
                    i = e & (an | rn),
                    s = this.attrTest(t);
                return i && (n & Ce || !s) ? e | dn : i || s ? n & Le ? e | ln : e & an ? e | rn : an : un
            }
        }), c(Z, K, {
            defaults: {
                event: "pan",
                threshold: 10,
                pointers: 1,
                direction: Ne
            },
            getTouchAction: function() {
                var t = this.options.direction,
                    e = [];
                return t & Oe && e.push(sn), t & Re && e.push(nn), e
            },
            directionTest: function(t) {
                var e = this.options,
                    n = !0,
                    i = t.distance,
                    s = t.direction,
                    o = t.deltaX,
                    a = t.deltaY;
                return s & e.direction || (e.direction & Oe ? (s = 0 === o ? Ae : 0 > o ? xe : Ie, n = o != this.pX, i = Math.abs(t.deltaX)) : (s = 0 === a ? Ae : 0 > a ? De : Me, n = a != this.pY, i = Math.abs(t.deltaY))), t.direction = s, n && i > e.threshold && s & e.direction
            },
            attrTest: function(t) {
                return K.prototype.attrTest.call(this, t) && (this.state & an || !(this.state & an) && this.directionTest(t))
            },
            emit: function(t) {
                this.pX = t.deltaX, this.pY = t.deltaY;
                var e = q(t.direction);
                e && this.manager.emit(this.options.event + e, t), this._super.emit.call(this, t)
            }
        }), c(Q, K, {
            defaults: {
                event: "pinch",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return [en]
            },
            attrTest: function(t) {
                return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & an)
            },
            emit: function(t) {
                if (this._super.emit.call(this, t), 1 !== t.scale) {
                    var e = t.scale < 1 ? "in" : "out";
                    this.manager.emit(this.options.event + e, t)
                }
            }
        }), c(te, X, {
            defaults: {
                event: "press",
                pointers: 1,
                time: 500,
                threshold: 5
            },
            getTouchAction: function() {
                return [Qe]
            },
            process: function(t) {
                var e = this.options,
                    n = t.pointers.length === e.pointers,
                    i = t.distance < e.threshold,
                    o = t.deltaTime > e.time;
                if (this._input = t, !i || !n || t.eventType & (Le | Ce) && !o) this.reset();
                else if (t.eventType & we) this.reset(), this._timer = s(function() {
                    this.state = cn, this.tryEmit()
                }, e.time, this);
                else if (t.eventType & Le) return cn;
                return un
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function(t) {
                this.state === cn && (t && t.eventType & Le ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = pe(), this.manager.emit(this.options.event, this._input)))
            }
        }), c(ee, K, {
            defaults: {
                event: "rotate",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return [en]
            },
            attrTest: function(t) {
                return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & an)
            }
        }), c(ne, K, {
            defaults: {
                event: "swipe",
                threshold: 10,
                velocity: .65,
                direction: Oe | Re,
                pointers: 1
            },
            getTouchAction: function() {
                return Z.prototype.getTouchAction.call(this)
            },
            attrTest: function(t) {
                var e, n = this.options.direction;
                return n & (Oe | Re) ? e = t.velocity : n & Oe ? e = t.velocityX : n & Re && (e = t.velocityY), this._super.attrTest.call(this, t) && n & t.direction && t.distance > this.options.threshold && he(e) > this.options.velocity && t.eventType & Le
            },
            emit: function(t) {
                var e = q(t.direction);
                e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
            }
        }), c(ie, X, {
            defaults: {
                event: "tap",
                pointers: 1,
                taps: 1,
                interval: 300,
                time: 250,
                threshold: 2,
                posThreshold: 10
            },
            getTouchAction: function() {
                return [tn]
            },
            process: function(t) {
                var e = this.options,
                    n = t.pointers.length === e.pointers,
                    i = t.distance < e.threshold,
                    o = t.deltaTime < e.time;
                if (this.reset(), t.eventType & we && 0 === this.count) return this.failTimeout();
                if (i && o && n) {
                    if (t.eventType != Le) return this.failTimeout();
                    var a = this.pTime ? t.timeStamp - this.pTime < e.interval : !0,
                        r = !this.pCenter || R(this.pCenter, t.center) < e.posThreshold;
                    this.pTime = t.timeStamp, this.pCenter = t.center, r && a ? this.count += 1 : this.count = 1, this._input = t;
                    var l = this.count % e.taps;
                    if (0 === l) return this.hasRequireFailures() ? (this._timer = s(function() {
                        this.state = cn, this.tryEmit()
                    }, e.interval, this), an) : cn
                }
                return un
            },
            failTimeout: function() {
                return this._timer = s(function() {
                    this.state = un
                }, this.options.interval, this), un
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function() {
                this.state == cn && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
            }
        }), se.VERSION = "2.0.4", se.defaults = {
            domEvents: !1,
            touchAction: Ze,
            enable: !0,
            inputTarget: null,
            inputClass: null,
            preset: [
                [ee, {
                    enable: !1
                }],
                [Q, {
                    enable: !1
                },
                    ["rotate"]
                ],
                [ne, {
                    direction: Oe
                }],
                [Z, {
                    direction: Oe
                },
                    ["swipe"]
                ],
                [ie],
                [ie, {
                    event: "doubletap",
                    taps: 2
                },
                    ["tap"]
                ],
                [te]
            ],
            cssProps: {
                userSelect: "none",
                touchSelect: "none",
                touchCallout: "none",
                contentZooming: "none",
                userDrag: "none",
                tapHighlightColor: "rgba(0,0,0,0)"
            }
        };
        var hn = 1,
            pn = 2;
        oe.prototype = {
            set: function(t) {
                return r(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
            },
            stop: function(t) {
                this.session.stopped = t ? pn : hn
            },
            recognize: function(t) {
                var e = this.session;
                if (!e.stopped) {
                    this.touchAction.preventDefaults(t);
                    var n, i = this.recognizers,
                        s = e.curRecognizer;
                    (!s || s && s.state & cn) && (s = e.curRecognizer = null);
                    for (var o = 0; o < i.length;) n = i[o], e.stopped === pn || s && n != s && !n.canRecognizeWith(s) ? n.reset() : n.recognize(t), !s && n.state & (an | rn | ln) && (s = e.curRecognizer = n), o++
                }
            },
            get: function(t) {
                if (t instanceof X) return t;
                for (var e = this.recognizers, n = 0; n < e.length; n++)
                    if (e[n].options.event == t) return e[n];
                return null
            },
            add: function(t) {
                if (o(t, "add", this)) return this;
                var e = this.get(t.options.event);
                return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t
            },
            remove: function(t) {
                if (o(t, "remove", this)) return this;
                var e = this.recognizers;
                return t = this.get(t), e.splice(y(e, t), 1), this.touchAction.update(), this
            },
            on: function(t, e) {
                var n = this.handlers;
                return a(v(t), function(t) {
                    n[t] = n[t] || [], n[t].push(e)
                }), this
            },
            off: function(t, e) {
                var n = this.handlers;
                return a(v(t), function(t) {
                    e ? n[t].splice(y(n[t], e), 1) : delete n[t]
                }), this
            },
            emit: function(t, e) {
                this.options.domEvents && re(t, e);
                var n = this.handlers[t] && this.handlers[t].slice();
                if (n && n.length) {
                    e.type = t, e.preventDefault = function() {
                        e.srcEvent.preventDefault()
                    };
                    for (var i = 0; i < n.length;) n[i](e), i++
                }
            },
            destroy: function() {
                this.element && ae(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
            }
        }, r(se, {
            INPUT_START: we,
            INPUT_MOVE: ke,
            INPUT_END: Le,
            INPUT_CANCEL: Ce,
            STATE_POSSIBLE: on,
            STATE_BEGAN: an,
            STATE_CHANGED: rn,
            STATE_ENDED: ln,
            STATE_RECOGNIZED: cn,
            STATE_CANCELLED: dn,
            STATE_FAILED: un,
            DIRECTION_NONE: Ae,
            DIRECTION_LEFT: xe,
            DIRECTION_RIGHT: Ie,
            DIRECTION_UP: De,
            DIRECTION_DOWN: Me,
            DIRECTION_HORIZONTAL: Oe,
            DIRECTION_VERTICAL: Re,
            DIRECTION_ALL: Ne,
            Manager: oe,
            Input: w,
            TouchAction: V,
            TouchInput: H,
            MouseInput: U,
            PointerEventInput: j,
            TouchMouseInput: W,
            SingleTouchInput: B,
            Recognizer: X,
            AttrRecognizer: K,
            Tap: ie,
            Pan: Z,
            Swipe: ne,
            Pinch: Q,
            Rotate: ee,
            Press: te,
            on: p,
            off: f,
            each: a,
            merge: l,
            extend: r,
            inherit: c,
            bindFn: d,
            prefixed: E
        }), typeof define == de && define.amd ? define(function() {
            return se
        }) : "undefined" != typeof module && module.exports ? module.exports = se : t[n] = se
    }(window, document, "Hammer");
var io = "undefined" == typeof module ? {} : module.exports;
! function() {
    if (function(t, e) {
            var n = t;
            n.version = "0.9.16", n.protocol = 1, n.transports = [], n.j = [], n.sockets = {}, n.connect = function(t, i) {
                var s, o, a = n.util.parseUri(t);
                e && e.location && (a.protocol = a.protocol || e.location.protocol.slice(0, -1), a.host = a.host || (e.document ? e.document.domain : e.location.hostname), a.port = a.port || e.location.port), s = n.util.uniqueUri(a);
                var r = {
                    host: a.host,
                    secure: "https" == a.protocol,
                    port: a.port || ("https" == a.protocol ? 443 : 80),
                    query: a.query || ""
                };
                return n.util.merge(r, i), (r["force new connection"] || !n.sockets[s]) && (o = new n.Socket(r)), !r["force new connection"] && o && (n.sockets[s] = o), o = o || n.sockets[s], o.of(a.path.length > 1 ? a.path : "")
            }
        }("object" == typeof module ? module.exports : this.io = {}, this), function(t, e) {
            var n = t.util = {},
                i = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
                s = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
            n.parseUri = function(t) {
                for (var e = i.exec(t || ""), n = {}, o = 14; o--;) n[s[o]] = e[o] || "";
                return n
            }, n.uniqueUri = function(t) {
                var n = t.protocol,
                    i = t.host,
                    s = t.port;
                return "document" in e ? (i = i || document.domain, s = s || ("https" == n && "https:" !== document.location.protocol ? 443 : document.location.port)) : (i = i || "localhost", !s && "https" == n && (s = 443)), (n || "http") + "://" + i + ":" + (s || 80)
            }, n.query = function(t, e) {
                var i = n.chunkQuery(t || ""),
                    s = [];
                n.merge(i, n.chunkQuery(e || ""));
                for (var o in i) i.hasOwnProperty(o) && s.push(o + "=" + i[o]);
                return s.length ? "?" + s.join("&") : ""
            }, n.chunkQuery = function(t) {
                for (var e, n = {}, i = t.split("&"), s = 0, o = i.length; o > s; ++s) e = i[s].split("="), e[0] && (n[e[0]] = e[1]);
                return n
            };
            var o = !1;
            n.load = function(t) {
                return "document" in e && "complete" === document.readyState || o ? t() : void n.on(e, "load", t, !1)
            }, n.on = function(t, e, n, i) {
                t.attachEvent ? t.attachEvent("on" + e, n) : t.addEventListener && t.addEventListener(e, n, i)
            }, n.request = function(t) {
                if (t && "undefined" != typeof XDomainRequest && !n.ua.hasCORS) return new XDomainRequest;
                if ("undefined" != typeof XMLHttpRequest && (!t || n.ua.hasCORS)) return new XMLHttpRequest;
                if (!t) try {
                    return new(window[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
                } catch (e) {}
                return null
            }, "undefined" != typeof window && n.load(function() {
                o = !0
            }), n.defer = function(t) {
                return n.ua.webkit && "undefined" == typeof importScripts ? void n.load(function() {
                    setTimeout(t, 100)
                }) : t()
            }, n.merge = function(t, e, i, s) {
                var o, a = s || [],
                    r = "undefined" == typeof i ? 2 : i;
                for (o in e) e.hasOwnProperty(o) && n.indexOf(a, o) < 0 && ("object" == typeof t[o] && r ? n.merge(t[o], e[o], r - 1, a) : (t[o] = e[o], a.push(e[o])));
                return t
            }, n.mixin = function(t, e) {
                n.merge(t.prototype, e.prototype)
            }, n.inherit = function(t, e) {
                function n() {}
                n.prototype = e.prototype, t.prototype = new n
            }, n.isArray = Array.isArray || function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                }, n.intersect = function(t, e) {
                for (var i = [], s = t.length > e.length ? t : e, o = t.length > e.length ? e : t, a = 0, r = o.length; r > a; a++) ~n.indexOf(s, o[a]) && i.push(o[a]);
                return i
            }, n.indexOf = function(t, e, n) {
                for (var i = t.length, n = 0 > n ? 0 > n + i ? 0 : n + i : n || 0; i > n && t[n] !== e; n++);
                return n >= i ? -1 : n
            }, n.toArray = function(t) {
                for (var e = [], n = 0, i = t.length; i > n; n++) e.push(t[n]);
                return e
            }, n.ua = {}, n.ua.hasCORS = "undefined" != typeof XMLHttpRequest && function() {
                    try {
                        var t = new XMLHttpRequest
                    } catch (e) {
                        return !1
                    }
                    return void 0 != t.withCredentials
                }(), n.ua.webkit = "undefined" != typeof navigator && /webkit/i.test(navigator.userAgent), n.ua.iDevice = "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent)
        }("undefined" != typeof io ? io : module.exports, this), function(t, e) {
            function n() {}
            t.EventEmitter = n, n.prototype.on = function(t, n) {
                return this.$events || (this.$events = {}), this.$events[t] ? e.util.isArray(this.$events[t]) ? this.$events[t].push(n) : this.$events[t] = [this.$events[t], n] : this.$events[t] = n, this
            }, n.prototype.addListener = n.prototype.on, n.prototype.once = function(t, e) {
                function n() {
                    i.removeListener(t, n), e.apply(this, arguments)
                }
                var i = this;
                return n.listener = e, this.on(t, n), this
            }, n.prototype.removeListener = function(t, n) {
                if (this.$events && this.$events[t]) {
                    var i = this.$events[t];
                    if (e.util.isArray(i)) {
                        for (var s = -1, o = 0, a = i.length; a > o; o++)
                            if (i[o] === n || i[o].listener && i[o].listener === n) {
                                s = o;
                                break
                            }
                        if (0 > s) return this;
                        i.splice(s, 1), i.length || delete this.$events[t]
                    } else(i === n || i.listener && i.listener === n) && delete this.$events[t]
                }
                return this
            }, n.prototype.removeAllListeners = function(t) {
                return void 0 === t ? (this.$events = {}, this) : (this.$events && this.$events[t] && (this.$events[t] = null), this)
            }, n.prototype.listeners = function(t) {
                return this.$events || (this.$events = {}), this.$events[t] || (this.$events[t] = []), e.util.isArray(this.$events[t]) || (this.$events[t] = [this.$events[t]]), this.$events[t]
            }, n.prototype.emit = function(t) {
                if (!this.$events) return !1;
                var n = this.$events[t];
                if (!n) return !1;
                var i = Array.prototype.slice.call(arguments, 1);
                if ("function" == typeof n) n.apply(this, i);
                else {
                    if (!e.util.isArray(n)) return !1;
                    for (var s = n.slice(), o = 0, a = s.length; a > o; o++) s[o].apply(this, i)
                }
                return !0
            }
        }("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports), function(exports, nativeJSON) {
            function f(t) {
                return 10 > t ? "0" + t : t
            }

            function date(t) {
                return isFinite(t.valueOf()) ? t.getUTCFullYear() + "-" + f(t.getUTCMonth() + 1) + "-" + f(t.getUTCDate()) + "T" + f(t.getUTCHours()) + ":" + f(t.getUTCMinutes()) + ":" + f(t.getUTCSeconds()) + "Z" : null
            }

            function quote(t) {
                return escapable.lastIndex = 0, escapable.test(t) ? '"' + t.replace(escapable, function(t) {
                    var e = meta[t];
                    return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
                }) + '"' : '"' + t + '"'
            }

            function str(t, e) {
                var n, i, s, o, a, r = gap,
                    l = e[t];
                switch (l instanceof Date && (l = date(t)), "function" == typeof rep && (l = rep.call(e, t, l)), typeof l) {
                    case "string":
                        return quote(l);
                    case "number":
                        return isFinite(l) ? String(l) : "null";
                    case "boolean":
                    case "null":
                        return String(l);
                    case "object":
                        if (!l) return "null";
                        if (gap += indent, a = [], "[object Array]" === Object.prototype.toString.apply(l)) {
                            for (o = l.length, n = 0; o > n; n += 1) a[n] = str(n, l) || "null";
                            return s = 0 === a.length ? "[]" : gap ? "[\n" + gap + a.join(",\n" + gap) + "\n" + r + "]" : "[" + a.join(",") + "]", gap = r, s
                        }
                        if (rep && "object" == typeof rep)
                            for (o = rep.length, n = 0; o > n; n += 1) "string" == typeof rep[n] && (i = rep[n], s = str(i, l), s && a.push(quote(i) + (gap ? ": " : ":") + s));
                        else
                            for (i in l) Object.prototype.hasOwnProperty.call(l, i) && (s = str(i, l), s && a.push(quote(i) + (gap ? ": " : ":") + s));
                        return s = 0 === a.length ? "{}" : gap ? "{\n" + gap + a.join(",\n" + gap) + "\n" + r + "}" : "{" + a.join(",") + "}", gap = r, s
                }
            }
            if (nativeJSON && nativeJSON.parse) return exports.JSON = {
                parse: nativeJSON.parse,
                stringify: nativeJSON.stringify
            };
            var JSON = exports.JSON = {},
                cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                gap, indent, meta = {
                    "\b": "\\b",
                    "	": "\\t",
                    "\n": "\\n",
                    "\f": "\\f",
                    "\r": "\\r",
                    '"': '\\"',
                    "\\": "\\\\"
                },
                rep;
            JSON.stringify = function(t, e, n) {
                var i;
                if (gap = "", indent = "", "number" == typeof n)
                    for (i = 0; n > i; i += 1) indent += " ";
                else "string" == typeof n && (indent = n);
                if (rep = e, !e || "function" == typeof e || "object" == typeof e && "number" == typeof e.length) return str("", {
                    "": t
                });
                throw new Error("JSON.stringify")
            }, JSON.parse = function(text, reviver) {
                function walk(t, e) {
                    var n, i, s = t[e];
                    if (s && "object" == typeof s)
                        for (n in s) Object.prototype.hasOwnProperty.call(s, n) && (i = walk(s, n), void 0 !== i ? s[n] = i : delete s[n]);
                    return reviver.call(t, e, s)
                }
                var j;
                if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(t) {
                        return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
                    })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                    "": j
                }, "") : j;
                throw new SyntaxError("JSON.parse")
            }
        }("undefined" != typeof io ? io : module.exports, "undefined" != typeof JSON ? JSON : void 0), function(t, e) {
            var n = t.parser = {},
                i = n.packets = ["disconnect", "connect", "heartbeat", "message", "json", "event", "ack", "error", "noop"],
                s = n.reasons = ["transport not supported", "client not handshaken", "unauthorized"],
                o = n.advice = ["reconnect"],
                a = e.JSON,
                r = e.util.indexOf;
            n.encodePacket = function(t) {
                var e = r(i, t.type),
                    n = t.id || "",
                    l = t.endpoint || "",
                    c = t.ack,
                    d = null;
                switch (t.type) {
                    case "error":
                        var u = t.reason ? r(s, t.reason) : "",
                            h = t.advice ? r(o, t.advice) : "";
                        ("" !== u || "" !== h) && (d = u + ("" !== h ? "+" + h : ""));
                        break;
                    case "message":
                        "" !== t.data && (d = t.data);
                        break;
                    case "event":
                        var p = {
                            name: t.name
                        };
                        t.args && t.args.length && (p.args = t.args), d = a.stringify(p);
                        break;
                    case "json":
                        d = a.stringify(t.data);
                        break;
                    case "connect":
                        t.qs && (d = t.qs);
                        break;
                    case "ack":
                        d = t.ackId + (t.args && t.args.length ? "+" + a.stringify(t.args) : "")
                }
                var f = [e, n + ("data" == c ? "+" : ""), l];
                return null !== d && void 0 !== d && f.push(d), f.join(":")
            }, n.encodePayload = function(t) {
                var e = "";
                if (1 == t.length) return t[0];
                for (var n = 0, i = t.length; i > n; n++) {
                    var s = t[n];
                    e += "\ufffd" + s.length + "\ufffd" + t[n]
                }
                return e
            };
            var l = /([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;
            n.decodePacket = function(t) {
                var e = t.match(l);
                if (!e) return {};
                var n = e[2] || "",
                    t = e[5] || "",
                    r = {
                        type: i[e[1]],
                        endpoint: e[4] || ""
                    };
                switch (n && (r.id = n, r.ack = e[3] ? "data" : !0), r.type) {
                    case "error":
                        var e = t.split("+");
                        r.reason = s[e[0]] || "", r.advice = o[e[1]] || "";
                        break;
                    case "message":
                        r.data = t || "";
                        break;
                    case "event":
                        try {
                            var c = a.parse(t);
                            r.name = c.name, r.args = c.args
                        } catch (d) {}
                        r.args = r.args || [];
                        break;
                    case "json":
                        try {
                            r.data = a.parse(t)
                        } catch (d) {}
                        break;
                    case "connect":
                        r.qs = t || "";
                        break;
                    case "ack":
                        var e = t.match(/^([0-9]+)(\+)?(.*)/);
                        if (e && (r.ackId = e[1], r.args = [], e[3])) try {
                            r.args = e[3] ? a.parse(e[3]) : []
                        } catch (d) {}
                        break;
                    case "disconnect":
                    case "heartbeat":
                }
                return r
            }, n.decodePayload = function(t) {
                if ("\ufffd" == t.charAt(0)) {
                    for (var e = [], i = 1, s = ""; i < t.length; i++) "\ufffd" == t.charAt(i) ? (e.push(n.decodePacket(t.substr(i + 1).substr(0, s))), i += Number(s) + 1, s = "") : s += t.charAt(i);
                    return e
                }
                return [n.decodePacket(t)]
            }
        }("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports), function(t, e) {
            function n(t, e) {
                this.socket = t, this.sessid = e
            }
            t.Transport = n, e.util.mixin(n, e.EventEmitter), n.prototype.heartbeats = function() {
                return !0
            }, n.prototype.onData = function(t) {
                if (this.clearCloseTimeout(), (this.socket.connected || this.socket.connecting || this.socket.reconnecting) && this.setCloseTimeout(), "" !== t) {
                    var n = e.parser.decodePayload(t);
                    if (n && n.length)
                        for (var i = 0, s = n.length; s > i; i++) this.onPacket(n[i])
                }
                return this
            }, n.prototype.onPacket = function(t) {
                return this.socket.setHeartbeatTimeout(), "heartbeat" == t.type ? this.onHeartbeat() : ("connect" == t.type && "" == t.endpoint && this.onConnect(), "error" == t.type && "reconnect" == t.advice && (this.isOpen = !1), this.socket.onPacket(t), this)
            }, n.prototype.setCloseTimeout = function() {
                if (!this.closeTimeout) {
                    var t = this;
                    this.closeTimeout = setTimeout(function() {
                        t.onDisconnect()
                    }, this.socket.closeTimeout)
                }
            }, n.prototype.onDisconnect = function() {
                return this.isOpen && this.close(), this.clearTimeouts(), this.socket.onDisconnect(), this
            }, n.prototype.onConnect = function() {
                return this.socket.onConnect(), this
            }, n.prototype.clearCloseTimeout = function() {
                this.closeTimeout && (clearTimeout(this.closeTimeout), this.closeTimeout = null)
            }, n.prototype.clearTimeouts = function() {
                this.clearCloseTimeout(), this.reopenTimeout && clearTimeout(this.reopenTimeout)
            }, n.prototype.packet = function(t) {
                this.send(e.parser.encodePacket(t))
            }, n.prototype.onHeartbeat = function() {
                this.packet({
                    type: "heartbeat"
                })
            }, n.prototype.onOpen = function() {
                this.isOpen = !0, this.clearCloseTimeout(), this.socket.onOpen()
            }, n.prototype.onClose = function() {
                this.isOpen = !1, this.socket.onClose(), this.onDisconnect()
            }, n.prototype.prepareUrl = function() {
                var t = this.socket.options;
                return this.scheme() + "://" + t.host + ":" + t.port + "/" + t.resource + "/" + e.protocol + "/" + this.name + "/" + this.sessid
            }, n.prototype.ready = function(t, e) {
                e.call(this)
            }
        }("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports), function(t, e, n) {
            function i(t) {
                if (this.options = {
                        port: 80,
                        secure: !1,
                        document: "document" in n ? document : !1,
                        resource: "socket.io",
                        transports: e.transports,
                        "connect timeout": 1e4,
                        "try multiple transports": !0,
                        reconnect: !0,
                        "reconnection delay": 500,
                        "reconnection limit": 1 / 0,
                        "reopen delay": 3e3,
                        "max reconnection attempts": 10,
                        "sync disconnect on unload": !1,
                        "auto connect": !0,
                        "flash policy port": 10843,
                        manualFlush: !1
                    }, e.util.merge(this.options, t), this.connected = !1, this.open = !1, this.connecting = !1, this.reconnecting = !1, this.namespaces = {}, this.buffer = [], this.doBuffer = !1, this.options["sync disconnect on unload"] && (!this.isXDomain() || e.util.ua.hasCORS)) {
                    var i = this;
                    e.util.on(n, "beforeunload", function() {
                        i.disconnectSync()
                    }, !1)
                }
                this.options["auto connect"] && this.connect()
            }

            function s() {}
            t.Socket = i, e.util.mixin(i, e.EventEmitter), i.prototype.of = function(t) {
                return this.namespaces[t] || (this.namespaces[t] = new e.SocketNamespace(this, t), "" !== t && this.namespaces[t].packet({
                    type: "connect"
                })), this.namespaces[t]
            }, i.prototype.publish = function() {
                this.emit.apply(this, arguments);
                var t;
                for (var e in this.namespaces) this.namespaces.hasOwnProperty(e) && (t = this.of(e), t.$emit.apply(t, arguments))
            }, i.prototype.handshake = function(t) {
                function n(e) {
                    e instanceof Error ? (i.connecting = !1, i.onError(e.message)) : t.apply(null, e.split(":"))
                }
                var i = this,
                    o = this.options,
                    a = ["http" + (o.secure ? "s" : "") + ":/", o.host + ":" + o.port, o.resource, e.protocol, e.util.query(this.options.query, "t=" + +new Date)].join("/");
                if (this.isXDomain() && !e.util.ua.hasCORS) {
                    var r = document.getElementsByTagName("script")[0],
                        l = document.createElement("script");
                    l.src = a + "&jsonp=" + e.j.length, r.parentNode.insertBefore(l, r), e.j.push(function(t) {
                        n(t), l.parentNode.removeChild(l)
                    })
                } else {
                    var c = e.util.request();
                    c.open("GET", a, !0), this.isXDomain() && (c.withCredentials = !0), c.onreadystatechange = function() {
                        4 == c.readyState && (c.onreadystatechange = s, 200 == c.status ? n(c.responseText) : 403 == c.status ? i.onError(c.responseText) : (i.connecting = !1, !i.reconnecting && i.onError(c.responseText)))
                    }, c.send(null)
                }
            }, i.prototype.getTransport = function(t) {
                for (var n, i = t || this.transports, s = 0; n = i[s]; s++)
                    if (e.Transport[n] && e.Transport[n].check(this) && (!this.isXDomain() || e.Transport[n].xdomainCheck(this))) return new e.Transport[n](this, this.sessionid);
                return null
            }, i.prototype.connect = function(t) {
                if (this.connecting) return this;
                var n = this;
                return n.connecting = !0, this.handshake(function(i, s, o, a) {
                    function r(t) {
                        return n.transport && n.transport.clearTimeouts(), n.transport = n.getTransport(t), n.transport ? void n.transport.ready(n, function() {
                            n.connecting = !0, n.publish("connecting", n.transport.name), n.transport.open(), n.options["connect timeout"] && (n.connectTimeoutTimer = setTimeout(function() {
                                if (!n.connected && (n.connecting = !1, n.options["try multiple transports"])) {
                                    for (var t = n.transports; t.length > 0 && t.splice(0, 1)[0] != n.transport.name;);
                                    t.length ? r(t) : n.publish("connect_failed")
                                }
                            }, n.options["connect timeout"]))
                        }) : n.publish("connect_failed")
                    }
                    n.sessionid = i, n.closeTimeout = 1e3 * o, n.heartbeatTimeout = 1e3 * s, n.transports || (n.transports = n.origTransports = a ? e.util.intersect(a.split(","), n.options.transports) : n.options.transports), n.setHeartbeatTimeout(), r(n.transports), n.once("connect", function() {
                        clearTimeout(n.connectTimeoutTimer), t && "function" == typeof t && t()
                    })
                }), this
            }, i.prototype.setHeartbeatTimeout = function() {
                if (clearTimeout(this.heartbeatTimeoutTimer), !this.transport || this.transport.heartbeats()) {
                    var t = this;
                    this.heartbeatTimeoutTimer = setTimeout(function() {
                        t.transport.onClose()
                    }, this.heartbeatTimeout)
                }
            }, i.prototype.packet = function(t) {
                return this.connected && !this.doBuffer ? this.transport.packet(t) : this.buffer.push(t), this
            }, i.prototype.setBuffer = function(t) {
                this.doBuffer = t, !t && this.connected && this.buffer.length && (this.options.manualFlush || this.flushBuffer())
            }, i.prototype.flushBuffer = function() {
                this.transport.payload(this.buffer), this.buffer = []
            }, i.prototype.disconnect = function() {
                return (this.connected || this.connecting) && (this.open && this.of("").packet({
                    type: "disconnect"
                }), this.onDisconnect("booted")), this
            }, i.prototype.disconnectSync = function() {
                var t = e.util.request(),
                    n = ["http" + (this.options.secure ? "s" : "") + ":/", this.options.host + ":" + this.options.port, this.options.resource, e.protocol, "", this.sessionid].join("/") + "/?disconnect=1";
                t.open("GET", n, !1), t.send(null), this.onDisconnect("booted")
            }, i.prototype.isXDomain = function() {
                var t = n.location.port || ("https:" == n.location.protocol ? 443 : 80);
                return this.options.host !== n.location.hostname || this.options.port != t
            }, i.prototype.onConnect = function() {
                this.connected || (this.connected = !0, this.connecting = !1, this.doBuffer || this.setBuffer(!1), this.emit("connect"))
            }, i.prototype.onOpen = function() {
                this.open = !0
            }, i.prototype.onClose = function() {
                this.open = !1, clearTimeout(this.heartbeatTimeoutTimer)
            }, i.prototype.onPacket = function(t) {
                this.of(t.endpoint).onPacket(t)
            }, i.prototype.onError = function(t) {
                t && t.advice && "reconnect" === t.advice && (this.connected || this.connecting) && (this.disconnect(), this.options.reconnect && this.reconnect()), this.publish("error", t && t.reason ? t.reason : t)
            }, i.prototype.onDisconnect = function(t) {
                var e = this.connected,
                    n = this.connecting;
                this.connected = !1, this.connecting = !1, this.open = !1, (e || n) && (this.transport.close(), this.transport.clearTimeouts(), e && (this.publish("disconnect", t), "booted" != t && this.options.reconnect && !this.reconnecting && this.reconnect()))
            }, i.prototype.reconnect = function() {
                function t() {
                    if (n.connected) {
                        for (var t in n.namespaces) n.namespaces.hasOwnProperty(t) && "" !== t && n.namespaces[t].packet({
                            type: "connect"
                        });
                        n.publish("reconnect", n.transport.name, n.reconnectionAttempts)
                    }
                    clearTimeout(n.reconnectionTimer), n.removeListener("connect_failed", e), n.removeListener("connect", e), n.reconnecting = !1, delete n.reconnectionAttempts, delete n.reconnectionDelay, delete n.reconnectionTimer, delete n.redoTransports, n.options["try multiple transports"] = s
                }

                function e() {
                    return n.reconnecting ? n.connected ? t() : n.connecting && n.reconnecting ? n.reconnectionTimer = setTimeout(e, 1e3) : void(n.reconnectionAttempts++ >= i ? n.redoTransports ? (n.publish("reconnect_failed"), t()) : (n.on("connect_failed", e), n.options["try multiple transports"] = !0, n.transports = n.origTransports, n.transport = n.getTransport(), n.redoTransports = !0, n.connect()) : (n.reconnectionDelay < o && (n.reconnectionDelay *= 2), n.connect(), n.publish("reconnecting", n.reconnectionDelay, n.reconnectionAttempts), n.reconnectionTimer = setTimeout(e, n.reconnectionDelay))) : void 0
                }
                this.reconnecting = !0, this.reconnectionAttempts = 0, this.reconnectionDelay = this.options["reconnection delay"];
                var n = this,
                    i = this.options["max reconnection attempts"],
                    s = this.options["try multiple transports"],
                    o = this.options["reconnection limit"];
                this.options["try multiple transports"] = !1, this.reconnectionTimer = setTimeout(e, this.reconnectionDelay), this.on("connect", e)
            }
        }("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports, this), function(t, e) {
            function n(t, e) {
                this.socket = t, this.name = e || "", this.flags = {}, this.json = new i(this, "json"), this.ackPackets = 0, this.acks = {}
            }

            function i(t, e) {
                this.namespace = t, this.name = e
            }
            t.SocketNamespace = n, e.util.mixin(n, e.EventEmitter), n.prototype.$emit = e.EventEmitter.prototype.emit, n.prototype.of = function() {
                return this.socket.of.apply(this.socket, arguments)
            }, n.prototype.packet = function(t) {
                return t.endpoint = this.name, this.socket.packet(t), this.flags = {}, this
            }, n.prototype.send = function(t, e) {
                var n = {
                    type: this.flags.json ? "json" : "message",
                    data: t
                };
                return "function" == typeof e && (n.id = ++this.ackPackets, n.ack = !0, this.acks[n.id] = e), this.packet(n)
            }, n.prototype.emit = function(t) {
                var e = Array.prototype.slice.call(arguments, 1),
                    n = e[e.length - 1],
                    i = {
                        type: "event",
                        name: t
                    };
                return "function" == typeof n && (i.id = ++this.ackPackets, i.ack = "data", this.acks[i.id] = n, e = e.slice(0, e.length - 1)), i.args = e, this.packet(i)
            }, n.prototype.disconnect = function() {
                return "" === this.name ? this.socket.disconnect() : (this.packet({
                    type: "disconnect"
                }), this.$emit("disconnect")), this
            }, n.prototype.onPacket = function(t) {
                function n() {
                    i.packet({
                        type: "ack",
                        args: e.util.toArray(arguments),
                        ackId: t.id
                    })
                }
                var i = this;
                switch (t.type) {
                    case "connect":
                        this.$emit("connect");
                        break;
                    case "disconnect":
                        "" === this.name ? this.socket.onDisconnect(t.reason || "booted") : this.$emit("disconnect", t.reason);
                        break;
                    case "message":
                    case "json":
                        var s = ["message", t.data];
                        "data" == t.ack ? s.push(n) : t.ack && this.packet({
                            type: "ack",
                            ackId: t.id
                        }), this.$emit.apply(this, s);
                        break;
                    case "event":
                        var s = [t.name].concat(t.args);
                        "data" == t.ack && s.push(n), this.$emit.apply(this, s);
                        break;
                    case "ack":
                        this.acks[t.ackId] && (this.acks[t.ackId].apply(this, t.args), delete this.acks[t.ackId]);
                        break;
                    case "error":
                        t.advice ? this.socket.onError(t) : "unauthorized" == t.reason ? this.$emit("connect_failed", t.reason) : this.$emit("error", t.reason)
                }
            }, i.prototype.send = function() {
                this.namespace.flags[this.name] = !0, this.namespace.send.apply(this.namespace, arguments)
            }, i.prototype.emit = function() {
                this.namespace.flags[this.name] = !0, this.namespace.emit.apply(this.namespace, arguments)
            }
        }("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports), function(t, e, n) {
            function i() {
                e.Transport.apply(this, arguments)
            }
            t.websocket = i, e.util.inherit(i, e.Transport), i.prototype.name = "websocket", i.prototype.open = function() {
                var t, i = e.util.query(this.socket.options.query),
                    s = this;
                return t || (t = n.MozWebSocket || n.WebSocket), this.websocket = new t(this.prepareUrl() + i), this.websocket.onopen = function() {
                    s.onOpen(), s.socket.setBuffer(!1)
                }, this.websocket.onmessage = function(t) {
                    s.onData(t.data)
                }, this.websocket.onclose = function() {
                    s.onClose(), s.socket.setBuffer(!0)
                }, this.websocket.onerror = function(t) {
                    s.onError(t)
                }, this
            }, i.prototype.send = e.util.ua.iDevice ? function(t) {
                var e = this;
                return setTimeout(function() {
                    e.websocket.send(t)
                }, 0), this
            } : function(t) {
                return this.websocket.send(t), this
            }, i.prototype.payload = function(t) {
                for (var e = 0, n = t.length; n > e; e++) this.packet(t[e]);
                return this
            }, i.prototype.close = function() {
                return this.websocket.close(), this
            }, i.prototype.onError = function(t) {
                this.socket.onError(t)
            }, i.prototype.scheme = function() {
                return this.socket.options.secure ? "wss" : "ws"
            }, i.check = function() {
                return "WebSocket" in n && !("__addTask" in WebSocket) || "MozWebSocket" in n
            }, i.xdomainCheck = function() {
                return !0
            }, e.transports.push("websocket")
        }("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this), function(t, e) {
            function n() {
                e.Transport.websocket.apply(this, arguments)
            }
            t.flashsocket = n, e.util.inherit(n, e.Transport.websocket), n.prototype.name = "flashsocket", n.prototype.open = function() {
                var t = this,
                    n = arguments;
                return WebSocket.__addTask(function() {
                    e.Transport.websocket.prototype.open.apply(t, n)
                }), this
            }, n.prototype.send = function() {
                var t = this,
                    n = arguments;
                return WebSocket.__addTask(function() {
                    e.Transport.websocket.prototype.send.apply(t, n)
                }), this
            }, n.prototype.close = function() {
                return WebSocket.__tasks.length = 0, e.Transport.websocket.prototype.close.call(this), this
            }, n.prototype.ready = function(t, i) {
                function s() {
                    var e = t.options,
                        s = e["flash policy port"],
                        a = ["http" + (e.secure ? "s" : "") + ":/", e.host + ":" + e.port, e.resource, "static/flashsocket", "WebSocketMain" + (t.isXDomain() ? "Insecure" : "") + ".swf"];
                    n.loaded || ("undefined" == typeof WEB_SOCKET_SWF_LOCATION && (WEB_SOCKET_SWF_LOCATION = a.join("/")), 843 !== s && WebSocket.loadFlashPolicyFile("xmlsocket://" + e.host + ":" + s), WebSocket.__initialize(), n.loaded = !0), i.call(o)
                }
                var o = this;
                return document.body ? s() : void e.util.load(s)
            }, n.check = function() {
                return "undefined" != typeof WebSocket && "__initialize" in WebSocket && swfobject ? swfobject.getFlashPlayerVersion().major >= 10 : !1
            }, n.xdomainCheck = function() {
                return !0
            }, "undefined" != typeof window && (WEB_SOCKET_DISABLE_AUTO_INITIALIZATION = !0), e.transports.push("flashsocket")
        }("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports), "undefined" != typeof window) var swfobject = function() {
        function t() {
            if (!z) {
                try {
                    var t = P.getElementsByTagName("body")[0].appendChild(g("span"));
                    t.parentNode.removeChild(t)
                } catch (e) {
                    return
                }
                z = !0;
                for (var n = j.length, i = 0; n > i; i++) j[i]()
            }
        }

        function e(t) {
            z ? t() : j[j.length] = t
        }

        function n(t) {
            if (typeof N.addEventListener != A) N.addEventListener("load", t, !1);
            else if (typeof P.addEventListener != A) P.addEventListener("load", t, !1);
            else if (typeof N.attachEvent != A) v(N, "onload", t);
            else if ("function" == typeof N.onload) {
                var e = N.onload;
                N.onload = function() {
                    e(), t()
                }
            } else N.onload = t
        }

        function i() {
            U ? s() : o()
        }

        function s() {
            var t = P.getElementsByTagName("body")[0],
                e = g(x);
            e.setAttribute("type", M);
            var n = t.appendChild(e);
            if (n) {
                var i = 0;
                ! function() {
                    if (typeof n.GetVariable != A) {
                        var s = n.GetVariable("$version");
                        s && (s = s.split(" ")[1].split(","), G.pv = [parseInt(s[0], 10), parseInt(s[1], 10), parseInt(s[2], 10)])
                    } else if (10 > i) return i++, void setTimeout(arguments.callee, 10);
                    t.removeChild(e), n = null, o()
                }()
            } else o()
        }

        function o() {
            var t = B.length;
            if (t > 0)
                for (var e = 0; t > e; e++) {
                    var n = B[e].id,
                        i = B[e].callbackFn,
                        s = {
                            success: !1,
                            id: n
                        };
                    if (G.pv[0] > 0) {
                        var o = m(n);
                        if (o)
                            if (!y(B[e].swfVersion) || G.wk && G.wk < 312)
                                if (B[e].expressInstall && r()) {
                                    var d = {};
                                    d.data = B[e].expressInstall, d.width = o.getAttribute("width") || "0", d.height = o.getAttribute("height") || "0", o.getAttribute("class") && (d.styleclass = o.getAttribute("class")), o.getAttribute("align") && (d.align = o.getAttribute("align"));
                                    for (var u = {}, h = o.getElementsByTagName("param"), p = h.length, f = 0; p > f; f++) "movie" != h[f].getAttribute("name").toLowerCase() && (u[h[f].getAttribute("name")] = h[f].getAttribute("value"));
                                    l(d, u, n, i)
                                } else c(o), i && i(s);
                            else S(n, !0), i && (s.success = !0, s.ref = a(n), i(s))
                    } else if (S(n, !0), i) {
                        var g = a(n);
                        g && typeof g.SetVariable != A && (s.success = !0, s.ref = g), i(s)
                    }
                }
        }

        function a(t) {
            var e = null,
                n = m(t);
            if (n && "OBJECT" == n.nodeName)
                if (typeof n.SetVariable != A) e = n;
                else {
                    var i = n.getElementsByTagName(x)[0];
                    i && (e = i)
                }
            return e
        }

        function r() {
            return !W && y("6.0.65") && (G.win || G.mac) && !(G.wk && G.wk < 312)
        }

        function l(t, e, n, i) {
            W = !0, w = i || null, k = {
                success: !1,
                id: n
            };
            var s = m(n);
            if (s) {
                "OBJECT" == s.nodeName ? (T = d(s), _ = null) : (T = s, _ = n), t.id = O, (typeof t.width == A || !/%$/.test(t.width) && parseInt(t.width, 10) < 310) && (t.width = "310"), (typeof t.height == A || !/%$/.test(t.height) && parseInt(t.height, 10) < 137) && (t.height = "137"), P.title = P.title.slice(0, 47) + " - Flash Player Installation";
                var o = G.ie && G.win ? ["Active"].concat("").join("X") : "PlugIn",
                    a = "MMredirectURL=" + N.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + o + "&MMdoctitle=" + P.title;
                if (typeof e.flashvars != A ? e.flashvars += "&" + a : e.flashvars = a, G.ie && G.win && 4 != s.readyState) {
                    var r = g("div");
                    n += "SWFObjectNew", r.setAttribute("id", n), s.parentNode.insertBefore(r, s), s.style.display = "none",
                        function() {
                            4 == s.readyState ? s.parentNode.removeChild(s) : setTimeout(arguments.callee, 10)
                        }()
                }
                u(t, e, n)
            }
        }

        function c(t) {
            if (G.ie && G.win && 4 != t.readyState) {
                var e = g("div");
                t.parentNode.insertBefore(e, t), e.parentNode.replaceChild(d(t), e), t.style.display = "none",
                    function() {
                        4 == t.readyState ? t.parentNode.removeChild(t) : setTimeout(arguments.callee, 10)
                    }()
            } else t.parentNode.replaceChild(d(t), t)
        }

        function d(t) {
            var e = g("div");
            if (G.win && G.ie) e.innerHTML = t.innerHTML;
            else {
                var n = t.getElementsByTagName(x)[0];
                if (n) {
                    var i = n.childNodes;
                    if (i)
                        for (var s = i.length, o = 0; s > o; o++)(1 != i[o].nodeType || "PARAM" != i[o].nodeName) && 8 != i[o].nodeType && e.appendChild(i[o].cloneNode(!0))
                }
            }
            return e
        }

        function u(t, e, n) {
            var i, s = m(n);
            if (G.wk && G.wk < 312) return i;
            if (s)
                if (typeof t.id == A && (t.id = n), G.ie && G.win) {
                    var o = "";
                    for (var a in t) t[a] != Object.prototype[a] && ("data" == a.toLowerCase() ? e.movie = t[a] : "styleclass" == a.toLowerCase() ? o += ' class="' + t[a] + '"' : "classid" != a.toLowerCase() && (o += " " + a + '="' + t[a] + '"'));
                    var r = "";
                    for (var l in e) e[l] != Object.prototype[l] && (r += '<param name="' + l + '" value="' + e[l] + '" />');
                    s.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + o + ">" + r + "</object>", F[F.length] = t.id, i = m(t.id)
                } else {
                    var c = g(x);
                    c.setAttribute("type", M);
                    for (var d in t) t[d] != Object.prototype[d] && ("styleclass" == d.toLowerCase() ? c.setAttribute("class", t[d]) : "classid" != d.toLowerCase() && c.setAttribute(d, t[d]));
                    for (var u in e) e[u] != Object.prototype[u] && "movie" != u.toLowerCase() && h(c, u, e[u]);
                    s.parentNode.replaceChild(c, s), i = c
                }
            return i
        }

        function h(t, e, n) {
            var i = g("param");
            i.setAttribute("name", e), i.setAttribute("value", n), t.appendChild(i)
        }

        function p(t) {
            var e = m(t);
            e && "OBJECT" == e.nodeName && (G.ie && G.win ? (e.style.display = "none", function() {
                4 == e.readyState ? f(t) : setTimeout(arguments.callee, 10)
            }()) : e.parentNode.removeChild(e))
        }

        function f(t) {
            var e = m(t);
            if (e) {
                for (var n in e) "function" == typeof e[n] && (e[n] = null);
                e.parentNode.removeChild(e)
            }
        }

        function m(t) {
            var e = null;
            try {
                e = P.getElementById(t)
            } catch (n) {}
            return e
        }

        function g(t) {
            return P.createElement(t)
        }

        function v(t, e, n) {
            t.attachEvent(e, n), H[H.length] = [t, e, n]
        }

        function y(t) {
            var e = G.pv,
                n = t.split(".");
            return n[0] = parseInt(n[0], 10), n[1] = parseInt(n[1], 10) || 0, n[2] = parseInt(n[2], 10) || 0, e[0] > n[0] || e[0] == n[0] && e[1] > n[1] || e[0] == n[0] && e[1] == n[1] && e[2] >= n[2] ? !0 : !1
        }

        function b(t, e, n, i) {
            if (!G.ie || !G.mac) {
                var s = P.getElementsByTagName("head")[0];
                if (s) {
                    var o = n && "string" == typeof n ? n : "screen";
                    if (i && (L = null, C = null), !L || C != o) {
                        var a = g("style");
                        a.setAttribute("type", "text/css"), a.setAttribute("media", o), L = s.appendChild(a), G.ie && G.win && typeof P.styleSheets != A && P.styleSheets.length > 0 && (L = P.styleSheets[P.styleSheets.length - 1]), C = o
                    }
                    G.ie && G.win ? L && typeof L.addRule == x && L.addRule(t, e) : L && typeof P.createTextNode != A && L.appendChild(P.createTextNode(t + " {" + e + "}"))
                }
            }
        }

        function S(t, e) {
            if (V) {
                var n = e ? "visible" : "hidden";
                z && m(t) ? m(t).style.visibility = n : b("#" + t, "visibility:" + n)
            }
        }

        function E(t) {
            var e = /[\\\"<>\.;]/,
                n = null != e.exec(t);
            return n && typeof encodeURIComponent != A ? encodeURIComponent(t) : t
        } {
            var T, _, w, k, L, C, A = "undefined",
                x = "object",
                I = "Shockwave Flash",
                D = "ShockwaveFlash.ShockwaveFlash",
                M = "application/x-shockwave-flash",
                O = "SWFObjectExprInst",
                R = "onreadystatechange",
                N = window,
                P = document,
                $ = navigator,
                U = !1,
                j = [i],
                B = [],
                F = [],
                H = [],
                z = !1,
                W = !1,
                V = !0,
                G = function() {
                    var t = typeof P.getElementById != A && typeof P.getElementsByTagName != A && typeof P.createElement != A,
                        e = $.userAgent.toLowerCase(),
                        n = $.platform.toLowerCase(),
                        i = /win/.test(n ? n : e),
                        s = /mac/.test(n ? n : e),
                        o = /webkit/.test(e) ? parseFloat(e.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1,
                        a = !1,
                        r = [0, 0, 0],
                        l = null;
                    if (typeof $.plugins != A && typeof $.plugins[I] == x) l = $.plugins[I].description, l && (typeof $.mimeTypes == A || !$.mimeTypes[M] || !!$.mimeTypes[M].enabledPlugin) && (U = !0, a = !1, l = l.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), r[0] = parseInt(l.replace(/^(.*)\..*$/, "$1"), 10), r[1] = parseInt(l.replace(/^.*\.(.*)\s.*$/, "$1"), 10), r[2] = /[a-zA-Z]/.test(l) ? parseInt(l.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
                    else if (typeof N[["Active"].concat("Object").join("X")] != A) try {
                        var c = new(window[["Active"].concat("Object").join("X")])(D);
                        c && (l = c.GetVariable("$version"), l && (a = !0, l = l.split(" ")[1].split(","), r = [parseInt(l[0], 10), parseInt(l[1], 10), parseInt(l[2], 10)]))
                    } catch (d) {}
                    return {
                        w3: t,
                        pv: r,
                        wk: o,
                        ie: a,
                        win: i,
                        mac: s
                    }
                }();
            ! function() {
                G.w3 && ((typeof P.readyState != A && "complete" == P.readyState || typeof P.readyState == A && (P.getElementsByTagName("body")[0] || P.body)) && t(), z || (typeof P.addEventListener != A && P.addEventListener("DOMContentLoaded", t, !1), G.ie && G.win && (P.attachEvent(R, function() {
                    "complete" == P.readyState && (P.detachEvent(R, arguments.callee), t())
                }), N == top && function() {
                    if (!z) {
                        try {
                            P.documentElement.doScroll("left")
                        } catch (e) {
                            return void setTimeout(arguments.callee, 0)
                        }
                        t()
                    }
                }()), G.wk && function() {
                    return z ? void 0 : /loaded|complete/.test(P.readyState) ? void t() : void setTimeout(arguments.callee, 0)
                }(), n(t)))
            }(),
                function() {
                    G.ie && G.win && window.attachEvent("onunload", function() {
                        for (var t = H.length, e = 0; t > e; e++) H[e][0].detachEvent(H[e][1], H[e][2]);
                        for (var n = F.length, i = 0; n > i; i++) p(F[i]);
                        for (var s in G) G[s] = null;
                        G = null;
                        for (var o in swfobject) swfobject[o] = null;
                        swfobject = null
                    })
                }()
        }
        return {
            registerObject: function(t, e, n, i) {
                if (G.w3 && t && e) {
                    var s = {};
                    s.id = t, s.swfVersion = e, s.expressInstall = n, s.callbackFn = i, B[B.length] = s, S(t, !1)
                } else i && i({
                    success: !1,
                    id: t
                })
            },
            getObjectById: function(t) {
                return G.w3 ? a(t) : void 0
            },
            embedSWF: function(t, n, i, s, o, a, c, d, h, p) {
                var f = {
                    success: !1,
                    id: n
                };
                G.w3 && !(G.wk && G.wk < 312) && t && n && i && s && o ? (S(n, !1), e(function() {
                    i += "", s += "";
                    var e = {};
                    if (h && typeof h === x)
                        for (var m in h) e[m] = h[m];
                    e.data = t, e.width = i, e.height = s;
                    var g = {};
                    if (d && typeof d === x)
                        for (var v in d) g[v] = d[v];
                    if (c && typeof c === x)
                        for (var b in c) typeof g.flashvars != A ? g.flashvars += "&" + b + "=" + c[b] : g.flashvars = b + "=" + c[b];
                    if (y(o)) {
                        var E = u(e, g, n);
                        e.id == n && S(n, !0), f.success = !0, f.ref = E
                    } else {
                        if (a && r()) return e.data = a, void l(e, g, n, p);
                        S(n, !0)
                    }
                    p && p(f)
                })) : p && p(f)
            },
            switchOffAutoHideShow: function() {
                V = !1
            },
            ua: G,
            getFlashPlayerVersion: function() {
                return {
                    major: G.pv[0],
                    minor: G.pv[1],
                    release: G.pv[2]
                }
            },
            hasFlashPlayerVersion: y,
            createSWF: function(t, e, n) {
                return G.w3 ? u(t, e, n) : void 0
            },
            showExpressInstall: function(t, e, n, i) {
                G.w3 && r() && l(t, e, n, i)
            },
            removeSWF: function(t) {
                G.w3 && p(t)
            },
            createCSS: function(t, e, n, i) {
                G.w3 && b(t, e, n, i)
            },
            addDomLoadEvent: e,
            addLoadEvent: n,
            getQueryParamValue: function(t) {
                var e = P.location.search || P.location.hash;
                if (e) {
                    if (/\?/.test(e) && (e = e.split("?")[1]), null == t) return E(e);
                    for (var n = e.split("&"), i = 0; i < n.length; i++)
                        if (n[i].substring(0, n[i].indexOf("=")) == t) return E(n[i].substring(n[i].indexOf("=") + 1))
                }
                return ""
            },
            expressInstallCallback: function() {
                if (W) {
                    var t = m(O);
                    t && T && (t.parentNode.replaceChild(T, t), _ && (S(_, !0), G.ie && G.win && (T.style.display = "block")), w && w(k)), W = !1
                }
            }
        }
    }();
    ! function() {
        if ("undefined" != typeof window && !window.WebSocket) {
            var t = window.console;
            return t && t.log && t.error || (t = {
                log: function() {},
                error: function() {}
            }), swfobject.hasFlashPlayerVersion("10.0.0") ? ("file:" == location.protocol && t.error("WARNING: web-socket-js doesn't work in file:///... URL unless you set Flash Security Settings properly. Open the page via Web server i.e. http://..."), WebSocket = function(t, e, n, i, s) {
                var o = this;
                o.__id = WebSocket.__nextId++, WebSocket.__instances[o.__id] = o, o.readyState = WebSocket.CONNECTING, o.bufferedAmount = 0, o.__events = {}, e ? "string" == typeof e && (e = [e]) : e = [], setTimeout(function() {
                    WebSocket.__addTask(function() {
                        WebSocket.__flash.create(o.__id, t, e, n || null, i || 0, s || null)
                    })
                }, 0)
            }, WebSocket.prototype.send = function(t) {
                if (this.readyState == WebSocket.CONNECTING) throw "INVALID_STATE_ERR: Web Socket connection has not been established";
                var e = WebSocket.__flash.send(this.__id, encodeURIComponent(t));
                return 0 > e ? !0 : (this.bufferedAmount += e, !1)
            }, WebSocket.prototype.close = function() {
                this.readyState != WebSocket.CLOSED && this.readyState != WebSocket.CLOSING && (this.readyState = WebSocket.CLOSING, WebSocket.__flash.close(this.__id))
            }, WebSocket.prototype.addEventListener = function(t, e) {
                t in this.__events || (this.__events[t] = []), this.__events[t].push(e)
            }, WebSocket.prototype.removeEventListener = function(t, e) {
                if (t in this.__events)
                    for (var n = this.__events[t], i = n.length - 1; i >= 0; --i)
                        if (n[i] === e) {
                            n.splice(i, 1);
                            break
                        }
            }, WebSocket.prototype.dispatchEvent = function(t) {
                for (var e = this.__events[t.type] || [], n = 0; n < e.length; ++n) e[n](t);
                var i = this["on" + t.type];
                i && i(t)
            }, WebSocket.prototype.__handleEvent = function(t) {
                "readyState" in t && (this.readyState = t.readyState), "protocol" in t && (this.protocol = t.protocol);
                var e;
                if ("open" == t.type || "error" == t.type) e = this.__createSimpleEvent(t.type);
                else if ("close" == t.type) e = this.__createSimpleEvent("close");
                else {
                    if ("message" != t.type) throw "unknown event type: " + t.type;
                    var n = decodeURIComponent(t.message);
                    e = this.__createMessageEvent("message", n)
                }
                this.dispatchEvent(e)
            }, WebSocket.prototype.__createSimpleEvent = function(t) {
                if (document.createEvent && window.Event) {
                    var e = document.createEvent("Event");
                    return e.initEvent(t, !1, !1), e
                }
                return {
                    type: t,
                    bubbles: !1,
                    cancelable: !1
                }
            }, WebSocket.prototype.__createMessageEvent = function(t, e) {
                if (document.createEvent && window.MessageEvent && !window.opera) {
                    var n = document.createEvent("MessageEvent");
                    return n.initMessageEvent("message", !1, !1, e, null, null, window, null), n
                }
                return {
                    type: t,
                    data: e,
                    bubbles: !1,
                    cancelable: !1
                }
            }, WebSocket.CONNECTING = 0, WebSocket.OPEN = 1, WebSocket.CLOSING = 2, WebSocket.CLOSED = 3, WebSocket.__flash = null, WebSocket.__instances = {}, WebSocket.__tasks = [], WebSocket.__nextId = 0, WebSocket.loadFlashPolicyFile = function(t) {
                WebSocket.__addTask(function() {
                    WebSocket.__flash.loadManualPolicyFile(t)
                })
            }, WebSocket.__initialize = function() {
                if (!WebSocket.__flash) {
                    if (WebSocket.__swfLocation && (window.WEB_SOCKET_SWF_LOCATION = WebSocket.__swfLocation), !window.WEB_SOCKET_SWF_LOCATION) return void t.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");
                    var e = document.createElement("div");
                    e.id = "webSocketContainer", e.style.position = "absolute", WebSocket.__isFlashLite() ? (e.style.left = "0px", e.style.top = "0px") : (e.style.left = "-100px", e.style.top = "-100px");
                    var n = document.createElement("div");
                    n.id = "webSocketFlash", e.appendChild(n), document.body.appendChild(e), swfobject.embedSWF(WEB_SOCKET_SWF_LOCATION, "webSocketFlash", "1", "1", "10.0.0", null, null, {
                        hasPriority: !0,
                        swliveconnect: !0,
                        allowScriptAccess: "always"
                    }, null, function(e) {
                        e.success || t.error("[WebSocket] swfobject.embedSWF failed")
                    })
                }
            }, WebSocket.__onFlashInitialized = function() {
                setTimeout(function() {
                    WebSocket.__flash = document.getElementById("webSocketFlash"), WebSocket.__flash.setCallerUrl(location.href), WebSocket.__flash.setDebug(!!window.WEB_SOCKET_DEBUG);
                    for (var t = 0; t < WebSocket.__tasks.length; ++t) WebSocket.__tasks[t]();
                    WebSocket.__tasks = []
                }, 0)
            }, WebSocket.__onFlashEvent = function() {
                return setTimeout(function() {
                    try {
                        for (var e = WebSocket.__flash.receiveEvents(), n = 0; n < e.length; ++n) WebSocket.__instances[e[n].webSocketId].__handleEvent(e[n])
                    } catch (i) {
                        t.error(i)
                    }
                }, 0), !0
            }, WebSocket.__log = function(e) {
                t.log(decodeURIComponent(e))
            }, WebSocket.__error = function(e) {
                t.error(decodeURIComponent(e))
            }, WebSocket.__addTask = function(t) {
                WebSocket.__flash ? t() : WebSocket.__tasks.push(t)
            }, WebSocket.__isFlashLite = function() {
                if (!window.navigator || !window.navigator.mimeTypes) return !1;
                var t = window.navigator.mimeTypes["application/x-shockwave-flash"];
                return t && t.enabledPlugin && t.enabledPlugin.filename && t.enabledPlugin.filename.match(/flashlite/i) ? !0 : !1
            }, window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION || (window.addEventListener ? window.addEventListener("load", function() {
                WebSocket.__initialize()
            }, !1) : window.attachEvent("onload", function() {
                WebSocket.__initialize()
            })), void 0) : void t.error("Flash Player >= 10.0.0 is required.")
        }
    }(),
        function(t, e, n) {
            function i(t) {
                t && (e.Transport.apply(this, arguments), this.sendBuffer = [])
            }

            function s() {}
            t.XHR = i, e.util.inherit(i, e.Transport), i.prototype.open = function() {
                return this.socket.setBuffer(!1), this.onOpen(), this.get(), this.setCloseTimeout(), this
            }, i.prototype.payload = function(t) {
                for (var n = [], i = 0, s = t.length; s > i; i++) n.push(e.parser.encodePacket(t[i]));
                this.send(e.parser.encodePayload(n))
            }, i.prototype.send = function(t) {
                return this.post(t), this
            }, i.prototype.post = function(t) {
                function e() {
                    4 == this.readyState && (this.onreadystatechange = s, o.posting = !1, 200 == this.status ? o.socket.setBuffer(!1) : o.onClose())
                }

                function i() {
                    this.onload = s, o.socket.setBuffer(!1)
                }
                var o = this;
                this.socket.setBuffer(!0), this.sendXHR = this.request("POST"), n.XDomainRequest && this.sendXHR instanceof XDomainRequest ? this.sendXHR.onload = this.sendXHR.onerror = i : this.sendXHR.onreadystatechange = e, this.sendXHR.send(t)
            }, i.prototype.close = function() {
                return this.onClose(), this
            }, i.prototype.request = function(t) {
                var n = e.util.request(this.socket.isXDomain()),
                    i = e.util.query(this.socket.options.query, "t=" + +new Date);
                if (n.open(t || "GET", this.prepareUrl() + i, !0), "POST" == t) try {
                    n.setRequestHeader ? n.setRequestHeader("Content-type", "text/plain;charset=UTF-8") : n.contentType = "text/plain"
                } catch (s) {}
                return n
            }, i.prototype.scheme = function() {
                return this.socket.options.secure ? "https" : "http"
            }, i.check = function(t, i) {
                try {
                    var s = e.util.request(i),
                        o = n.XDomainRequest && s instanceof XDomainRequest,
                        a = t && t.options && t.options.secure ? "https:" : "http:",
                        r = n.location && a != n.location.protocol;
                    if (s && (!o || !r)) return !0
                } catch (l) {}
                return !1
            }, i.xdomainCheck = function(t) {
                return i.check(t, !0)
            }
        }("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this),
        function(t, e) {
            function n() {
                e.Transport.XHR.apply(this, arguments)
            }
            t.htmlfile = n, e.util.inherit(n, e.Transport.XHR), n.prototype.name = "htmlfile", n.prototype.get = function() {
                this.doc = new(window[["Active"].concat("Object").join("X")])("htmlfile"), this.doc.open(), this.doc.write("<html></html>"), this.doc.close(), this.doc.parentWindow.s = this;
                var t = this.doc.createElement("div");
                t.className = "socketio", this.doc.body.appendChild(t), this.iframe = this.doc.createElement("iframe"), t.appendChild(this.iframe);
                var n = this,
                    i = e.util.query(this.socket.options.query, "t=" + +new Date);
                this.iframe.src = this.prepareUrl() + i, e.util.on(window, "unload", function() {
                    n.destroy()
                })
            }, n.prototype._ = function(t, e) {
                t = t.replace(/\\\//g, "/"), this.onData(t);
                try {
                    var n = e.getElementsByTagName("script")[0];
                    n.parentNode.removeChild(n)
                } catch (i) {}
            }, n.prototype.destroy = function() {
                if (this.iframe) {
                    try {
                        this.iframe.src = "about:blank"
                    } catch (t) {}
                    this.doc = null, this.iframe.parentNode.removeChild(this.iframe), this.iframe = null, CollectGarbage()
                }
            }, n.prototype.close = function() {
                return this.destroy(), e.Transport.XHR.prototype.close.call(this)
            }, n.check = function(t) {
                if ("undefined" != typeof window && ["Active"].concat("Object").join("X") in window) try {
                    var n = new(window[["Active"].concat("Object").join("X")])("htmlfile");
                    return n && e.Transport.XHR.check(t)
                } catch (i) {}
                return !1
            }, n.xdomainCheck = function() {
                return !1
            }, e.transports.push("htmlfile")
        }("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports),
        function(t, e, n) {
            function i() {
                e.Transport.XHR.apply(this, arguments)
            }

            function s() {}
            t["xhr-polling"] = i, e.util.inherit(i, e.Transport.XHR), e.util.merge(i, e.Transport.XHR), i.prototype.name = "xhr-polling", i.prototype.heartbeats = function() {
                return !1
            }, i.prototype.open = function() {
                var t = this;
                return e.Transport.XHR.prototype.open.call(t), !1
            }, i.prototype.get = function() {
                function t() {
                    4 == this.readyState && (this.onreadystatechange = s, 200 == this.status ? (o.onData(this.responseText), o.get()) : o.onClose())
                }

                function e() {
                    this.onload = s, this.onerror = s, o.retryCounter = 1, o.onData(this.responseText), o.get()
                }

                function i() {
                    o.retryCounter++, !o.retryCounter || o.retryCounter > 3 ? o.onClose() : o.get()
                }
                if (this.isOpen) {
                    var o = this;
                    this.xhr = this.request(), n.XDomainRequest && this.xhr instanceof XDomainRequest ? (this.xhr.onload = e, this.xhr.onerror = i) : this.xhr.onreadystatechange = t, this.xhr.send(null)
                }
            }, i.prototype.onClose = function() {
                if (e.Transport.XHR.prototype.onClose.call(this), this.xhr) {
                    this.xhr.onreadystatechange = this.xhr.onload = this.xhr.onerror = s;
                    try {
                        this.xhr.abort()
                    } catch (t) {}
                    this.xhr = null
                }
            }, i.prototype.ready = function(t, n) {
                var i = this;
                e.util.defer(function() {
                    n.call(i)
                })
            }, e.transports.push("xhr-polling")
        }("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this),
        function(t, e, n) {
            function i() {
                e.Transport["xhr-polling"].apply(this, arguments), this.index = e.j.length;
                var t = this;
                e.j.push(function(e) {
                    t._(e)
                })
            }
            var s = n.document && "MozAppearance" in n.document.documentElement.style;
            t["jsonp-polling"] = i, e.util.inherit(i, e.Transport["xhr-polling"]), i.prototype.name = "jsonp-polling", i.prototype.post = function(t) {
                function n() {
                    i(), s.socket.setBuffer(!1)
                }

                function i() {
                    s.iframe && s.form.removeChild(s.iframe);
                    try {
                        a = document.createElement('<iframe name="' + s.iframeId + '">')
                    } catch (t) {
                        a = document.createElement("iframe"), a.name = s.iframeId
                    }
                    a.id = s.iframeId, s.form.appendChild(a), s.iframe = a
                }
                var s = this,
                    o = e.util.query(this.socket.options.query, "t=" + +new Date + "&i=" + this.index);
                if (!this.form) {
                    var a, r = document.createElement("form"),
                        l = document.createElement("textarea"),
                        c = this.iframeId = "socketio_iframe_" + this.index;
                    r.className = "socketio", r.style.position = "absolute", r.style.top = "0px", r.style.left = "0px", r.style.display = "none", r.target = c, r.method = "POST", r.setAttribute("accept-charset", "utf-8"), l.name = "d", r.appendChild(l), document.body.appendChild(r), this.form = r, this.area = l
                }
                this.form.action = this.prepareUrl() + o, i(), this.area.value = e.JSON.stringify(t);
                try {
                    this.form.submit()
                } catch (d) {}
                this.iframe.attachEvent ? a.onreadystatechange = function() {
                    "complete" == s.iframe.readyState && n()
                } : this.iframe.onload = n, this.socket.setBuffer(!0)
            }, i.prototype.get = function() {
                var t = this,
                    n = document.createElement("script"),
                    i = e.util.query(this.socket.options.query, "t=" + +new Date + "&i=" + this.index);
                this.script && (this.script.parentNode.removeChild(this.script), this.script = null), n.async = !0, n.src = this.prepareUrl() + i, n.onerror = function() {
                    t.onClose()
                };
                var o = document.getElementsByTagName("script")[0];
                o.parentNode.insertBefore(n, o), this.script = n, s && setTimeout(function() {
                    var t = document.createElement("iframe");
                    document.body.appendChild(t), document.body.removeChild(t)
                }, 100)
            }, i.prototype._ = function(t) {
                return this.onData(t), this.isOpen && this.get(), this
            }, i.prototype.ready = function(t, n) {
                var i = this;
                return s ? void e.util.load(function() {
                    n.call(i)
                }) : n.call(this)
            }, i.check = function() {
                return "document" in n
            }, i.xdomainCheck = function() {
                return !0
            }, e.transports.push("jsonp-polling")
        }("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this), "function" == typeof define && define.amd && define([], function() {
        return io
    })
}();
var CryptoJS = CryptoJS || function(t, e) {
        var n = {},
            i = n.lib = {},
            s = function() {},
            o = i.Base = {
                extend: function(t) {
                    s.prototype = this;
                    var e = new s;
                    return t && e.mixIn(t), e.hasOwnProperty("init") || (e.init = function() {
                        e.$super.init.apply(this, arguments)
                    }), e.init.prototype = e, e.$super = this, e
                },
                create: function() {
                    var t = this.extend();
                    return t.init.apply(t, arguments), t
                },
                init: function() {},
                mixIn: function(t) {
                    for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
                    t.hasOwnProperty("toString") && (this.toString = t.toString)
                },
                clone: function() {
                    return this.init.prototype.extend(this)
                }
            },
            a = i.WordArray = o.extend({
                init: function(t, n) {
                    t = this.words = t || [], this.sigBytes = n != e ? n : 4 * t.length
                },
                toString: function(t) {
                    return (t || l).stringify(this)
                },
                concat: function(t) {
                    var e = this.words,
                        n = t.words,
                        i = this.sigBytes;
                    if (t = t.sigBytes, this.clamp(), i % 4)
                        for (var s = 0; t > s; s++) e[i + s >>> 2] |= (n[s >>> 2] >>> 24 - 8 * (s % 4) & 255) << 24 - 8 * ((i + s) % 4);
                    else if (65535 < n.length)
                        for (s = 0; t > s; s += 4) e[i + s >>> 2] = n[s >>> 2];
                    else e.push.apply(e, n);
                    return this.sigBytes += t, this
                },
                clamp: function() {
                    var e = this.words,
                        n = this.sigBytes;
                    e[n >>> 2] &= 4294967295 << 32 - 8 * (n % 4), e.length = t.ceil(n / 4)
                },
                clone: function() {
                    var t = o.clone.call(this);
                    return t.words = this.words.slice(0), t
                },
                random: function(e) {
                    for (var n = [], i = 0; e > i; i += 4) n.push(4294967296 * t.random() | 0);
                    return new a.init(n, e)
                }
            }),
            r = n.enc = {},
            l = r.Hex = {
                stringify: function(t) {
                    var e = t.words;
                    t = t.sigBytes;
                    for (var n = [], i = 0; t > i; i++) {
                        var s = e[i >>> 2] >>> 24 - 8 * (i % 4) & 255;
                        n.push((s >>> 4).toString(16)), n.push((15 & s).toString(16))
                    }
                    return n.join("")
                },
                parse: function(t) {
                    for (var e = t.length, n = [], i = 0; e > i; i += 2) n[i >>> 3] |= parseInt(t.substr(i, 2), 16) << 24 - 4 * (i % 8);
                    return new a.init(n, e / 2)
                }
            },
            c = r.Latin1 = {
                stringify: function(t) {
                    var e = t.words;
                    t = t.sigBytes;
                    for (var n = [], i = 0; t > i; i++) n.push(String.fromCharCode(e[i >>> 2] >>> 24 - 8 * (i % 4) & 255));
                    return n.join("")
                },
                parse: function(t) {
                    for (var e = t.length, n = [], i = 0; e > i; i++) n[i >>> 2] |= (255 & t.charCodeAt(i)) << 24 - 8 * (i % 4);
                    return new a.init(n, e)
                }
            },
            d = r.Utf8 = {
                stringify: function(t) {
                    try {
                        return decodeURIComponent(escape(c.stringify(t)))
                    } catch (e) {
                        throw Error("Malformed UTF-8 data")
                    }
                },
                parse: function(t) {
                    return c.parse(unescape(encodeURIComponent(t)))
                }
            },
            u = i.BufferedBlockAlgorithm = o.extend({
                reset: function() {
                    this._data = new a.init, this._nDataBytes = 0
                },
                _append: function(t) {
                    "string" == typeof t && (t = d.parse(t)), this._data.concat(t), this._nDataBytes += t.sigBytes
                },
                _process: function(e) {
                    var n = this._data,
                        i = n.words,
                        s = n.sigBytes,
                        o = this.blockSize,
                        r = s / (4 * o),
                        r = e ? t.ceil(r) : t.max((0 | r) - this._minBufferSize, 0);
                    if (e = r * o, s = t.min(4 * e, s), e) {
                        for (var l = 0; e > l; l += o) this._doProcessBlock(i, l);
                        l = i.splice(0, e), n.sigBytes -= s
                    }
                    return new a.init(l, s)
                },
                clone: function() {
                    var t = o.clone.call(this);
                    return t._data = this._data.clone(), t
                },
                _minBufferSize: 0
            });
        i.Hasher = u.extend({
            cfg: o.extend(),
            init: function(t) {
                this.cfg = this.cfg.extend(t), this.reset()
            },
            reset: function() {
                u.reset.call(this), this._doReset()
            },
            update: function(t) {
                return this._append(t), this._process(), this
            },
            finalize: function(t) {
                return t && this._append(t), this._doFinalize()
            },
            blockSize: 16,
            _createHelper: function(t) {
                return function(e, n) {
                    return new t.init(n).finalize(e)
                }
            },
            _createHmacHelper: function(t) {
                return function(e, n) {
                    return new h.HMAC.init(t, n).finalize(e)
                }
            }
        });
        var h = n.algo = {};
        return n
    }(Math);
! function(t) {
    function e(t, e, n, i, s, o, a) {
        return t = t + (e & n | ~e & i) + s + a, (t << o | t >>> 32 - o) + e
    }

    function n(t, e, n, i, s, o, a) {
        return t = t + (e & i | n & ~i) + s + a, (t << o | t >>> 32 - o) + e
    }

    function i(t, e, n, i, s, o, a) {
        return t = t + (e ^ n ^ i) + s + a, (t << o | t >>> 32 - o) + e
    }

    function s(t, e, n, i, s, o, a) {
        return t = t + (n ^ (e | ~i)) + s + a, (t << o | t >>> 32 - o) + e
    }
    for (var o = CryptoJS, a = o.lib, r = a.WordArray, l = a.Hasher, a = o.algo, c = [], d = 0; 64 > d; d++) c[d] = 4294967296 * t.abs(t.sin(d + 1)) | 0;
    a = a.MD5 = l.extend({
        _doReset: function() {
            this._hash = new r.init([1732584193, 4023233417, 2562383102, 271733878])
        },
        _doProcessBlock: function(t, o) {
            for (var a = 0; 16 > a; a++) {
                var r = o + a,
                    l = t[r];
                t[r] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8)
            }
            var a = this._hash.words,
                r = t[o + 0],
                l = t[o + 1],
                d = t[o + 2],
                u = t[o + 3],
                h = t[o + 4],
                p = t[o + 5],
                f = t[o + 6],
                m = t[o + 7],
                g = t[o + 8],
                v = t[o + 9],
                y = t[o + 10],
                b = t[o + 11],
                S = t[o + 12],
                E = t[o + 13],
                T = t[o + 14],
                _ = t[o + 15],
                w = a[0],
                k = a[1],
                L = a[2],
                C = a[3],
                w = e(w, k, L, C, r, 7, c[0]),
                C = e(C, w, k, L, l, 12, c[1]),
                L = e(L, C, w, k, d, 17, c[2]),
                k = e(k, L, C, w, u, 22, c[3]),
                w = e(w, k, L, C, h, 7, c[4]),
                C = e(C, w, k, L, p, 12, c[5]),
                L = e(L, C, w, k, f, 17, c[6]),
                k = e(k, L, C, w, m, 22, c[7]),
                w = e(w, k, L, C, g, 7, c[8]),
                C = e(C, w, k, L, v, 12, c[9]),
                L = e(L, C, w, k, y, 17, c[10]),
                k = e(k, L, C, w, b, 22, c[11]),
                w = e(w, k, L, C, S, 7, c[12]),
                C = e(C, w, k, L, E, 12, c[13]),
                L = e(L, C, w, k, T, 17, c[14]),
                k = e(k, L, C, w, _, 22, c[15]),
                w = n(w, k, L, C, l, 5, c[16]),
                C = n(C, w, k, L, f, 9, c[17]),
                L = n(L, C, w, k, b, 14, c[18]),
                k = n(k, L, C, w, r, 20, c[19]),
                w = n(w, k, L, C, p, 5, c[20]),
                C = n(C, w, k, L, y, 9, c[21]),
                L = n(L, C, w, k, _, 14, c[22]),
                k = n(k, L, C, w, h, 20, c[23]),
                w = n(w, k, L, C, v, 5, c[24]),
                C = n(C, w, k, L, T, 9, c[25]),
                L = n(L, C, w, k, u, 14, c[26]),
                k = n(k, L, C, w, g, 20, c[27]),
                w = n(w, k, L, C, E, 5, c[28]),
                C = n(C, w, k, L, d, 9, c[29]),
                L = n(L, C, w, k, m, 14, c[30]),
                k = n(k, L, C, w, S, 20, c[31]),
                w = i(w, k, L, C, p, 4, c[32]),
                C = i(C, w, k, L, g, 11, c[33]),
                L = i(L, C, w, k, b, 16, c[34]),
                k = i(k, L, C, w, T, 23, c[35]),
                w = i(w, k, L, C, l, 4, c[36]),
                C = i(C, w, k, L, h, 11, c[37]),
                L = i(L, C, w, k, m, 16, c[38]),
                k = i(k, L, C, w, y, 23, c[39]),
                w = i(w, k, L, C, E, 4, c[40]),
                C = i(C, w, k, L, r, 11, c[41]),
                L = i(L, C, w, k, u, 16, c[42]),
                k = i(k, L, C, w, f, 23, c[43]),
                w = i(w, k, L, C, v, 4, c[44]),
                C = i(C, w, k, L, S, 11, c[45]),
                L = i(L, C, w, k, _, 16, c[46]),
                k = i(k, L, C, w, d, 23, c[47]),
                w = s(w, k, L, C, r, 6, c[48]),
                C = s(C, w, k, L, m, 10, c[49]),
                L = s(L, C, w, k, T, 15, c[50]),
                k = s(k, L, C, w, p, 21, c[51]),
                w = s(w, k, L, C, S, 6, c[52]),
                C = s(C, w, k, L, u, 10, c[53]),
                L = s(L, C, w, k, y, 15, c[54]),
                k = s(k, L, C, w, l, 21, c[55]),
                w = s(w, k, L, C, g, 6, c[56]),
                C = s(C, w, k, L, _, 10, c[57]),
                L = s(L, C, w, k, f, 15, c[58]),
                k = s(k, L, C, w, E, 21, c[59]),
                w = s(w, k, L, C, h, 6, c[60]),
                C = s(C, w, k, L, b, 10, c[61]),
                L = s(L, C, w, k, d, 15, c[62]),
                k = s(k, L, C, w, v, 21, c[63]);
            a[0] = a[0] + w | 0, a[1] = a[1] + k | 0, a[2] = a[2] + L | 0, a[3] = a[3] + C | 0
        },
        _doFinalize: function() {
            var e = this._data,
                n = e.words,
                i = 8 * this._nDataBytes,
                s = 8 * e.sigBytes;
            n[s >>> 5] |= 128 << 24 - s % 32;
            var o = t.floor(i / 4294967296);
            for (n[(s + 64 >>> 9 << 4) + 15] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), n[(s + 64 >>> 9 << 4) + 14] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), e.sigBytes = 4 * (n.length + 1), this._process(), e = this._hash, n = e.words, i = 0; 4 > i; i++) s = n[i], n[i] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8);
            return e
        },
        clone: function() {
            var t = l.clone.call(this);
            return t._hash = this._hash.clone(), t
        }
    }), o.MD5 = l._createHelper(a), o.HmacMD5 = l._createHmacHelper(a)
}(Math),
    function() {
        function t(t) {
            var n = {
                    r: 0,
                    g: 0,
                    b: 0
                },
                s = 1,
                a = !1,
                r = !1;
            return "string" == typeof t && (t = M(t)), "object" == typeof t && (t.hasOwnProperty("r") && t.hasOwnProperty("g") && t.hasOwnProperty("b") ? (n = e(t.r, t.g, t.b), a = !0, r = "%" === String(t.r).substr(-1) ? "prgb" : "rgb") : t.hasOwnProperty("h") && t.hasOwnProperty("s") && t.hasOwnProperty("v") ? (t.s = x(t.s), t.v = x(t.v), n = o(t.h, t.s, t.v), a = !0, r = "hsv") : t.hasOwnProperty("h") && t.hasOwnProperty("s") && t.hasOwnProperty("l") && (t.s = x(t.s), t.l = x(t.l), n = i(t.h, t.s, t.l), a = !0, r = "hsl"), t.hasOwnProperty("a") && (s = t.a)), s = T(s), {
                ok: a,
                format: t.format || r,
                r: U(255, j(n.r, 0)),
                g: U(255, j(n.g, 0)),
                b: U(255, j(n.b, 0)),
                a: s
            }
        }

        function e(t, e, n) {
            return {
                r: 255 * _(t, 255),
                g: 255 * _(e, 255),
                b: 255 * _(n, 255)
            }
        }

        function n(t, e, n) {
            t = _(t, 255), e = _(e, 255), n = _(n, 255);
            var i, s, o = j(t, e, n),
                a = U(t, e, n),
                r = (o + a) / 2;
            if (o == a) i = s = 0;
            else {
                var l = o - a;
                switch (s = r > .5 ? l / (2 - o - a) : l / (o + a), o) {
                    case t:
                        i = (e - n) / l + (n > e ? 6 : 0);
                        break;
                    case e:
                        i = (n - t) / l + 2;
                        break;
                    case n:
                        i = (t - e) / l + 4
                }
                i /= 6
            }
            return {
                h: i,
                s: s,
                l: r
            }
        }

        function i(t, e, n) {
            function i(t, e, n) {
                return 0 > n && (n += 1), n > 1 && (n -= 1), 1 / 6 > n ? t + 6 * (e - t) * n : .5 > n ? e : 2 / 3 > n ? t + (e - t) * (2 / 3 - n) * 6 : t
            }
            var s, o, a;
            if (t = _(t, 360), e = _(e, 100), n = _(n, 100), 0 === e) s = o = a = n;
            else {
                var r = .5 > n ? n * (1 + e) : n + e - n * e,
                    l = 2 * n - r;
                s = i(l, r, t + 1 / 3), o = i(l, r, t), a = i(l, r, t - 1 / 3)
            }
            return {
                r: 255 * s,
                g: 255 * o,
                b: 255 * a
            }
        }

        function s(t, e, n) {
            t = _(t, 255), e = _(e, 255), n = _(n, 255);
            var i, s, o = j(t, e, n),
                a = U(t, e, n),
                r = o,
                l = o - a;
            if (s = 0 === o ? 0 : l / o, o == a) i = 0;
            else {
                switch (o) {
                    case t:
                        i = (e - n) / l + (n > e ? 6 : 0);
                        break;
                    case e:
                        i = (n - t) / l + 2;
                        break;
                    case n:
                        i = (t - e) / l + 4
                }
                i /= 6
            }
            return {
                h: i,
                s: s,
                v: r
            }
        }

        function o(t, e, n) {
            t = 6 * _(t, 360), e = _(e, 100), n = _(n, 100);
            var i = P.floor(t),
                s = t - i,
                o = n * (1 - e),
                a = n * (1 - s * e),
                r = n * (1 - (1 - s) * e),
                l = i % 6,
                c = [n, a, o, o, r, n][l],
                d = [r, n, n, a, o, o][l],
                u = [o, o, r, n, n, a][l];
            return {
                r: 255 * c,
                g: 255 * d,
                b: 255 * u
            }
        }

        function a(t, e, n, i) {
            var s = [A($(t).toString(16)), A($(e).toString(16)), A($(n).toString(16))];
            return i && s[0].charAt(0) == s[0].charAt(1) && s[1].charAt(0) == s[1].charAt(1) && s[2].charAt(0) == s[2].charAt(1) ? s[0].charAt(0) + s[1].charAt(0) + s[2].charAt(0) : s.join("")
        }

        function r(t, e, n, i) {
            var s = [A(I(i)), A($(t).toString(16)), A($(e).toString(16)), A($(n).toString(16))];
            return s.join("")
        }

        function l(t, e) {
            e = 0 === e ? 0 : e || 10;
            var n = F(t).toHsl();
            return n.s -= e / 100, n.s = w(n.s), F(n)
        }

        function c(t, e) {
            e = 0 === e ? 0 : e || 10;
            var n = F(t).toHsl();
            return n.s += e / 100, n.s = w(n.s), F(n)
        }

        function d(t) {
            return F(t).desaturate(100)
        }

        function u(t, e) {
            e = 0 === e ? 0 : e || 10;
            var n = F(t).toHsl();
            return n.l += e / 100, n.l = w(n.l), F(n)
        }

        function h(t, e) {
            e = 0 === e ? 0 : e || 10;
            var n = F(t).toRgb();
            return n.r = j(0, U(255, n.r - $(255 * -(e / 100)))), n.g = j(0, U(255, n.g - $(255 * -(e / 100)))), n.b = j(0, U(255, n.b - $(255 * -(e / 100)))), F(n)
        }

        function p(t, e) {
            e = 0 === e ? 0 : e || 10;
            var n = F(t).toHsl();
            return n.l -= e / 100, n.l = w(n.l), F(n)
        }

        function f(t, e) {
            var n = F(t).toHsl(),
                i = ($(n.h) + e) % 360;
            return n.h = 0 > i ? 360 + i : i, F(n)
        }

        function m(t) {
            var e = F(t).toHsl();
            return e.h = (e.h + 180) % 360, F(e)
        }

        function g(t) {
            var e = F(t).toHsl(),
                n = e.h;
            return [F(t), F({
                h: (n + 120) % 360,
                s: e.s,
                l: e.l
            }), F({
                h: (n + 240) % 360,
                s: e.s,
                l: e.l
            })]
        }

        function v(t) {
            var e = F(t).toHsl(),
                n = e.h;
            return [F(t), F({
                h: (n + 90) % 360,
                s: e.s,
                l: e.l
            }), F({
                h: (n + 180) % 360,
                s: e.s,
                l: e.l
            }), F({
                h: (n + 270) % 360,
                s: e.s,
                l: e.l
            })]
        }

        function y(t) {
            var e = F(t).toHsl(),
                n = e.h;
            return [F(t), F({
                h: (n + 72) % 360,
                s: e.s,
                l: e.l
            }), F({
                h: (n + 216) % 360,
                s: e.s,
                l: e.l
            })]
        }

        function b(t, e, n) {
            e = e || 6, n = n || 30;
            var i = F(t).toHsl(),
                s = 360 / n,
                o = [F(t)];
            for (i.h = (i.h - (s * e >> 1) + 720) % 360; --e;) i.h = (i.h + s) % 360, o.push(F(i));
            return o
        }

        function S(t, e) {
            e = e || 6;
            for (var n = F(t).toHsv(), i = n.h, s = n.s, o = n.v, a = [], r = 1 / e; e--;) a.push(F({
                h: i,
                s: s,
                v: o
            })), o = (o + r) % 1;
            return a
        }

        function E(t) {
            var e = {};
            for (var n in t) t.hasOwnProperty(n) && (e[t[n]] = n);
            return e
        }

        function T(t) {
            return t = parseFloat(t), (isNaN(t) || 0 > t || t > 1) && (t = 1), t
        }

        function _(t, e) {
            L(t) && (t = "100%");
            var n = C(t);
            return t = U(e, j(0, parseFloat(t))), n && (t = parseInt(t * e, 10) / 100), P.abs(t - e) < 1e-6 ? 1 : t % e / parseFloat(e)
        }

        function w(t) {
            return U(1, j(0, t))
        }

        function k(t) {
            return parseInt(t, 16)
        }

        function L(t) {
            return "string" == typeof t && -1 != t.indexOf(".") && 1 === parseFloat(t)
        }

        function C(t) {
            return "string" == typeof t && -1 != t.indexOf("%")
        }

        function A(t) {
            return 1 == t.length ? "0" + t : "" + t
        }

        function x(t) {
            return 1 >= t && (t = 100 * t + "%"), t
        }

        function I(t) {
            return Math.round(255 * parseFloat(t)).toString(16)
        }

        function D(t) {
            return k(t) / 255
        }

        function M(t) {
            t = t.replace(O, "").replace(R, "").toLowerCase();
            var e = !1;
            if (H[t]) t = H[t], e = !0;
            else if ("transparent" == t) return {
                r: 0,
                g: 0,
                b: 0,
                a: 0,
                format: "name"
            };
            var n;
            return (n = W.rgb.exec(t)) ? {
                r: n[1],
                g: n[2],
                b: n[3]
            } : (n = W.rgba.exec(t)) ? {
                r: n[1],
                g: n[2],
                b: n[3],
                a: n[4]
            } : (n = W.hsl.exec(t)) ? {
                h: n[1],
                s: n[2],
                l: n[3]
            } : (n = W.hsla.exec(t)) ? {
                h: n[1],
                s: n[2],
                l: n[3],
                a: n[4]
            } : (n = W.hsv.exec(t)) ? {
                h: n[1],
                s: n[2],
                v: n[3]
            } : (n = W.hex8.exec(t)) ? {
                a: D(n[1]),
                r: k(n[2]),
                g: k(n[3]),
                b: k(n[4]),
                format: e ? "name" : "hex8"
            } : (n = W.hex6.exec(t)) ? {
                r: k(n[1]),
                g: k(n[2]),
                b: k(n[3]),
                format: e ? "name" : "hex"
            } : (n = W.hex3.exec(t)) ? {
                r: k(n[1] + "" + n[1]),
                g: k(n[2] + "" + n[2]),
                b: k(n[3] + "" + n[3]),
                format: e ? "name" : "hex"
            } : !1
        }
        var O = /^[\s,#]+/,
            R = /\s+$/,
            N = 0,
            P = Math,
            $ = P.round,
            U = P.min,
            j = P.max,
            B = P.random,
            F = function V(e, n) {
                if (e = e ? e : "", n = n || {}, e instanceof V) return e;
                if (!(this instanceof V)) return new V(e, n);
                var i = t(e);
                this._r = i.r, this._g = i.g, this._b = i.b, this._a = i.a, this._roundA = $(100 * this._a) / 100, this._format = n.format || i.format, this._gradientType = n.gradientType, this._r < 1 && (this._r = $(this._r)), this._g < 1 && (this._g = $(this._g)), this._b < 1 && (this._b = $(this._b)), this._ok = i.ok, this._tc_id = N++
            };
        F.prototype = {
            isDark: function() {
                return this.getBrightness() < 128
            },
            isLight: function() {
                return !this.isDark()
            },
            isValid: function() {
                return this._ok
            },
            getFormat: function() {
                return this._format
            },
            getAlpha: function() {
                return this._a
            },
            getBrightness: function() {
                var t = this.toRgb();
                return (299 * t.r + 587 * t.g + 114 * t.b) / 1e3
            },
            setAlpha: function(t) {
                return this._a = T(t), this._roundA = $(100 * this._a) / 100, this
            },
            toHsv: function() {
                var t = s(this._r, this._g, this._b);
                return {
                    h: 360 * t.h,
                    s: t.s,
                    v: t.v,
                    a: this._a
                }
            },
            toHsvString: function() {
                var t = s(this._r, this._g, this._b),
                    e = $(360 * t.h),
                    n = $(100 * t.s),
                    i = $(100 * t.v);
                return 1 == this._a ? "hsv(" + e + ", " + n + "%, " + i + "%)" : "hsva(" + e + ", " + n + "%, " + i + "%, " + this._roundA + ")"
            },
            toHsl: function() {
                var t = n(this._r, this._g, this._b);
                return {
                    h: 360 * t.h,
                    s: t.s,
                    l: t.l,
                    a: this._a
                }
            },
            toHslString: function() {
                var t = n(this._r, this._g, this._b),
                    e = $(360 * t.h),
                    i = $(100 * t.s),
                    s = $(100 * t.l);
                return 1 == this._a ? "hsl(" + e + ", " + i + "%, " + s + "%)" : "hsla(" + e + ", " + i + "%, " + s + "%, " + this._roundA + ")"
            },
            toHex: function(t) {
                return a(this._r, this._g, this._b, t)
            },
            toHexString: function(t) {
                return "#" + this.toHex(t)
            },
            toHex8: function() {
                return r(this._r, this._g, this._b, this._a)
            },
            toHex8String: function() {
                return "#" + this.toHex8()
            },
            toRgb: function() {
                return {
                    r: $(this._r),
                    g: $(this._g),
                    b: $(this._b),
                    a: this._a
                }
            },
            toRgbString: function() {
                return 1 == this._a ? "rgb(" + $(this._r) + ", " + $(this._g) + ", " + $(this._b) + ")" : "rgba(" + $(this._r) + ", " + $(this._g) + ", " + $(this._b) + ", " + this._roundA + ")"
            },
            toPercentageRgb: function() {
                return {
                    r: $(100 * _(this._r, 255)) + "%",
                    g: $(100 * _(this._g, 255)) + "%",
                    b: $(100 * _(this._b, 255)) + "%",
                    a: this._a
                }
            },
            toPercentageRgbString: function() {
                return 1 == this._a ? "rgb(" + $(100 * _(this._r, 255)) + "%, " + $(100 * _(this._g, 255)) + "%, " + $(100 * _(this._b, 255)) + "%)" : "rgba(" + $(100 * _(this._r, 255)) + "%, " + $(100 * _(this._g, 255)) + "%, " + $(100 * _(this._b, 255)) + "%, " + this._roundA + ")"
            },
            toName: function() {
                return 0 === this._a ? "transparent" : this._a < 1 ? !1 : z[a(this._r, this._g, this._b, !0)] || !1
            },
            toFilter: function(t) {
                var e = "#" + r(this._r, this._g, this._b, this._a),
                    n = e,
                    i = this._gradientType ? "GradientType = 1, " : "";
                if (t) {
                    var s = F(t);
                    n = s.toHex8String()
                }
                return "progid:DXImageTransform.Microsoft.gradient(" + i + "startColorstr=" + e + ",endColorstr=" + n + ")"
            },
            toString: function(t) {
                var e = !!t;
                t = t || this._format;
                var n = !1,
                    i = this._a < 1 && this._a >= 0,
                    s = !e && i && ("hex" === t || "hex6" === t || "hex3" === t || "name" === t);
                return s ? "name" === t && 0 === this._a ? this.toName() : this.toRgbString() : ("rgb" === t && (n = this.toRgbString()), "prgb" === t && (n = this.toPercentageRgbString()), ("hex" === t || "hex6" === t) && (n = this.toHexString()), "hex3" === t && (n = this.toHexString(!0)), "hex8" === t && (n = this.toHex8String()), "name" === t && (n = this.toName()), "hsl" === t && (n = this.toHslString()), "hsv" === t && (n = this.toHsvString()), n || this.toHexString())
            },
            _applyModification: function(t, e) {
                var n = t.apply(null, [this].concat([].slice.call(e)));
                return this._r = n._r, this._g = n._g, this._b = n._b, this.setAlpha(n._a), this
            },
            lighten: function() {
                return this._applyModification(u, arguments)
            },
            brighten: function() {
                return this._applyModification(h, arguments)
            },
            darken: function() {
                return this._applyModification(p, arguments)
            },
            desaturate: function() {
                return this._applyModification(l, arguments)
            },
            saturate: function() {
                return this._applyModification(c, arguments)
            },
            greyscale: function() {
                return this._applyModification(d, arguments)
            },
            spin: function() {
                return this._applyModification(f, arguments)
            },
            _applyCombination: function(t, e) {
                return t.apply(null, [this].concat([].slice.call(e)))
            },
            analogous: function() {
                return this._applyCombination(b, arguments)
            },
            complement: function() {
                return this._applyCombination(m, arguments)
            },
            monochromatic: function() {
                return this._applyCombination(S, arguments)
            },
            splitcomplement: function() {
                return this._applyCombination(y, arguments)
            },
            triad: function() {
                return this._applyCombination(g, arguments)
            },
            tetrad: function() {
                return this._applyCombination(v, arguments)
            }
        }, F.fromRatio = function(t, e) {
            if ("object" == typeof t) {
                var n = {};
                for (var i in t) t.hasOwnProperty(i) && (n[i] = "a" === i ? t[i] : x(t[i]));
                t = n
            }
            return F(t, e)
        }, F.equals = function(t, e) {
            return t && e ? F(t).toRgbString() == F(e).toRgbString() : !1
        }, F.random = function() {
            return F.fromRatio({
                r: B(),
                g: B(),
                b: B()
            })
        }, F.mix = function(t, e, n) {
            n = 0 === n ? 0 : n || 50;
            var i, s = F(t).toRgb(),
                o = F(e).toRgb(),
                a = n / 100,
                r = 2 * a - 1,
                l = o.a - s.a;
            i = r * l == -1 ? r : (r + l) / (1 + r * l), i = (i + 1) / 2;
            var c = 1 - i,
                d = {
                    r: o.r * i + s.r * c,
                    g: o.g * i + s.g * c,
                    b: o.b * i + s.b * c,
                    a: o.a * a + s.a * (1 - a)
                };
            return F(d)
        }, F.readability = function(t, e) {
            var n = F(t),
                i = F(e),
                s = n.toRgb(),
                o = i.toRgb(),
                a = n.getBrightness(),
                r = i.getBrightness(),
                l = Math.max(s.r, o.r) - Math.min(s.r, o.r) + Math.max(s.g, o.g) - Math.min(s.g, o.g) + Math.max(s.b, o.b) - Math.min(s.b, o.b);
            return {
                brightness: Math.abs(a - r),
                color: l
            }
        }, F.isReadable = function(t, e) {
            var n = F.readability(t, e);
            return n.brightness > 125 && n.color > 500
        }, F.mostReadable = function(t, e) {
            for (var n = null, i = 0, s = !1, o = 0; o < e.length; o++) {
                var a = F.readability(t, e[o]),
                    r = a.brightness > 125 && a.color > 500,
                    l = 3 * (a.brightness / 125) + a.color / 500;
                (r && !s || r && s && l > i || !r && !s && l > i) && (s = r, i = l, n = F(e[o]))
            }
            return n
        };
        var H = F.names = {
                aliceblue: "f0f8ff",
                antiquewhite: "faebd7",
                aqua: "0ff",
                aquamarine: "7fffd4",
                azure: "f0ffff",
                beige: "f5f5dc",
                bisque: "ffe4c4",
                black: "000",
                blanchedalmond: "ffebcd",
                blue: "00f",
                blueviolet: "8a2be2",
                brown: "a52a2a",
                burlywood: "deb887",
                burntsienna: "ea7e5d",
                cadetblue: "5f9ea0",
                chartreuse: "7fff00",
                chocolate: "d2691e",
                coral: "ff7f50",
                cornflowerblue: "6495ed",
                cornsilk: "fff8dc",
                crimson: "dc143c",
                cyan: "0ff",
                darkblue: "00008b",
                darkcyan: "008b8b",
                darkgoldenrod: "b8860b",
                darkgray: "a9a9a9",
                darkgreen: "006400",
                darkgrey: "a9a9a9",
                darkkhaki: "bdb76b",
                darkmagenta: "8b008b",
                darkolivegreen: "556b2f",
                darkorange: "ff8c00",
                darkorchid: "9932cc",
                darkred: "8b0000",
                darksalmon: "e9967a",
                darkseagreen: "8fbc8f",
                darkslateblue: "483d8b",
                darkslategray: "2f4f4f",
                darkslategrey: "2f4f4f",
                darkturquoise: "00ced1",
                darkviolet: "9400d3",
                deeppink: "ff1493",
                deepskyblue: "00bfff",
                dimgray: "696969",
                dimgrey: "696969",
                dodgerblue: "1e90ff",
                firebrick: "b22222",
                floralwhite: "fffaf0",
                forestgreen: "228b22",
                fuchsia: "f0f",
                gainsboro: "dcdcdc",
                ghostwhite: "f8f8ff",
                gold: "ffd700",
                goldenrod: "daa520",
                gray: "808080",
                green: "008000",
                greenyellow: "adff2f",
                grey: "808080",
                honeydew: "f0fff0",
                hotpink: "ff69b4",
                indianred: "cd5c5c",
                indigo: "4b0082",
                ivory: "fffff0",
                khaki: "f0e68c",
                lavender: "e6e6fa",
                lavenderblush: "fff0f5",
                lawngreen: "7cfc00",
                lemonchiffon: "fffacd",
                lightblue: "add8e6",
                lightcoral: "f08080",
                lightcyan: "e0ffff",
                lightgoldenrodyellow: "fafad2",
                lightgray: "d3d3d3",
                lightgreen: "90ee90",
                lightgrey: "d3d3d3",
                lightpink: "ffb6c1",
                lightsalmon: "ffa07a",
                lightseagreen: "20b2aa",
                lightskyblue: "87cefa",
                lightslategray: "789",
                lightslategrey: "789",
                lightsteelblue: "b0c4de",
                lightyellow: "ffffe0",
                lime: "0f0",
                limegreen: "32cd32",
                linen: "faf0e6",
                magenta: "f0f",
                maroon: "800000",
                mediumaquamarine: "66cdaa",
                mediumblue: "0000cd",
                mediumorchid: "ba55d3",
                mediumpurple: "9370db",
                mediumseagreen: "3cb371",
                mediumslateblue: "7b68ee",
                mediumspringgreen: "00fa9a",
                mediumturquoise: "48d1cc",
                mediumvioletred: "c71585",
                midnightblue: "191970",
                mintcream: "f5fffa",
                mistyrose: "ffe4e1",
                moccasin: "ffe4b5",
                navajowhite: "ffdead",
                navy: "000080",
                oldlace: "fdf5e6",
                olive: "808000",
                olivedrab: "6b8e23",
                orange: "ffa500",
                orangered: "ff4500",
                orchid: "da70d6",
                palegoldenrod: "eee8aa",
                palegreen: "98fb98",
                paleturquoise: "afeeee",
                palevioletred: "db7093",
                papayawhip: "ffefd5",
                peachpuff: "ffdab9",
                peru: "cd853f",
                pink: "ffc0cb",
                plum: "dda0dd",
                powderblue: "b0e0e6",
                purple: "800080",
                red: "f00",
                rosybrown: "bc8f8f",
                royalblue: "4169e1",
                saddlebrown: "8b4513",
                salmon: "fa8072",
                sandybrown: "f4a460",
                seagreen: "2e8b57",
                seashell: "fff5ee",
                sienna: "a0522d",
                silver: "c0c0c0",
                skyblue: "87ceeb",
                slateblue: "6a5acd",
                slategray: "708090",
                slategrey: "708090",
                snow: "fffafa",
                springgreen: "00ff7f",
                steelblue: "4682b4",
                tan: "d2b48c",
                teal: "008080",
                thistle: "d8bfd8",
                tomato: "ff6347",
                turquoise: "40e0d0",
                violet: "ee82ee",
                wheat: "f5deb3",
                white: "fff",
                whitesmoke: "f5f5f5",
                yellow: "ff0",
                yellowgreen: "9acd32"
            },
            z = F.hexNames = E(H),
            W = function() {
                var t = "[-\\+]?\\d+%?",
                    e = "[-\\+]?\\d*\\.\\d+%?",
                    n = "(?:" + e + ")|(?:" + t + ")",
                    i = "[\\s|\\(]+(" + n + ")[,|\\s]+(" + n + ")[,|\\s]+(" + n + ")\\s*\\)?",
                    s = "[\\s|\\(]+(" + n + ")[,|\\s]+(" + n + ")[,|\\s]+(" + n + ")[,|\\s]+(" + n + ")\\s*\\)?";
                return {
                    rgb: new RegExp("rgb" + i),
                    rgba: new RegExp("rgba" + s),
                    hsl: new RegExp("hsl" + i),
                    hsla: new RegExp("hsla" + s),
                    hsv: new RegExp("hsv" + i),
                    hex3: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                    hex6: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
                    hex8: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
                }
            }();
        "undefined" != typeof module && module.exports ? module.exports = F : "function" == typeof define && define.amd ? define(function() {
            return F
        }) : window.tinycolor = F
    }(),
    function() {
        function t(t) {
            var e = "    ";
            if (isNaN(parseInt(t))) e = t;
            else switch (t) {
                case 1:
                    e = " ";
                    break;
                case 2:
                    e = "  ";
                    break;
                case 3:
                    e = "   ";
                    break;
                case 4:
                    e = "    ";
                    break;
                case 5:
                    e = "     ";
                    break;
                case 6:
                    e = "      ";
                    break;
                case 7:
                    e = "       ";
                    break;
                case 8:
                    e = "        ";
                    break;
                case 9:
                    e = "         ";
                    break;
                case 10:
                    e = "          ";
                    break;
                case 11:
                    e = "           ";
                    break;
                case 12:
                    e = "            "
            }
            var n = ["\n"];
            for (ix = 0; 100 > ix; ix++) n.push(n[ix] + e);
            return n
        }

        function e() {
            this.step = "    ", this.shift = t(this.step)
        }

        function n(t, e) {
            return e - (t.replace(/\(/g, "").length - t.replace(/\)/g, "").length)
        }

        function i(t, e) {
            return t.replace(/\s{1,}/g, " ").replace(/ AND /gi, "~::~" + e + e + "AND ").replace(/ BETWEEN /gi, "~::~" + e + "BETWEEN ").replace(/ CASE /gi, "~::~" + e + "CASE ").replace(/ ELSE /gi, "~::~" + e + "ELSE ").replace(/ END /gi, "~::~" + e + "END ").replace(/ FROM /gi, "~::~FROM ").replace(/ GROUP\s{1,}BY/gi, "~::~GROUP BY ").replace(/ HAVING /gi, "~::~HAVING ").replace(/ IN /gi, " IN ").replace(/ JOIN /gi, "~::~JOIN ").replace(/ CROSS~::~{1,}JOIN /gi, "~::~CROSS JOIN ").replace(/ INNER~::~{1,}JOIN /gi, "~::~INNER JOIN ").replace(/ LEFT~::~{1,}JOIN /gi, "~::~LEFT JOIN ").replace(/ RIGHT~::~{1,}JOIN /gi, "~::~RIGHT JOIN ").replace(/ ON /gi, "~::~" + e + "ON ").replace(/ OR /gi, "~::~" + e + e + "OR ").replace(/ ORDER\s{1,}BY/gi, "~::~ORDER BY ").replace(/ OVER /gi, "~::~" + e + "OVER ").replace(/\(\s{0,}SELECT /gi, "~::~(SELECT ").replace(/\)\s{0,}SELECT /gi, ")~::~SELECT ").replace(/ THEN /gi, " THEN~::~" + e).replace(/ UNION /gi, "~::~UNION~::~").replace(/ USING /gi, "~::~USING ").replace(/ WHEN /gi, "~::~" + e + "WHEN ").replace(/ WHERE /gi, "~::~WHERE ").replace(/ WITH /gi, "~::~WITH ").replace(/ ALL /gi, " ALL ").replace(/ AS /gi, " AS ").replace(/ ASC /gi, " ASC ").replace(/ DESC /gi, " DESC ").replace(/ DISTINCT /gi, " DISTINCT ").replace(/ EXISTS /gi, " EXISTS ").replace(/ NOT /gi, " NOT ").replace(/ NULL /gi, " NULL ").replace(/ LIKE /gi, " LIKE ").replace(/\s{0,}SELECT /gi, "SELECT ").replace(/\s{0,}UPDATE /gi, "UPDATE ").replace(/ SET /gi, " SET ").replace(/~::~{1,}/g, "~::~").split("~::~")
        }
        e.prototype.xml = function(e, n) {
            var i = e.replace(/>\s{0,}</g, "><").replace(/</g, "~::~<").replace(/\s*xmlns\:/g, "~::~xmlns:").replace(/\s*xmlns\=/g, "~::~xmlns=").split("~::~"),
                s = i.length,
                o = !1,
                a = 0,
                r = "",
                l = 0,
                c = n ? t(n) : this.shift;
            for (l = 0; s > l; l++) i[l].search(/<!/) > -1 ? (r += c[a] + i[l], o = !0, (i[l].search(/-->/) > -1 || i[l].search(/\]>/) > -1 || i[l].search(/!DOCTYPE/) > -1) && (o = !1)) : i[l].search(/-->/) > -1 || i[l].search(/\]>/) > -1 ? (r += i[l], o = !1) : /^<\w/.exec(i[l - 1]) && /^<\/\w/.exec(i[l]) && /^<[\w:\-\.\,]+/.exec(i[l - 1]) == /^<\/[\w:\-\.\,]+/.exec(i[l])[0].replace("/", "") ? (r += i[l], o || a--) : i[l].search(/<\w/) > -1 && -1 == i[l].search(/<\//) && -1 == i[l].search(/\/>/) ? r = r += o ? i[l] : c[a++] + i[l] : i[l].search(/<\w/) > -1 && i[l].search(/<\//) > -1 ? r = r += o ? i[l] : c[a] + i[l] : i[l].search(/<\//) > -1 ? r = r += o ? i[l] : c[--a] + i[l] : i[l].search(/\/>/) > -1 ? r = r += o ? i[l] : c[a] + i[l] : r += i[l].search(/<\?/) > -1 ? c[a] + i[l] : i[l].search(/xmlns\:/) > -1 || i[l].search(/xmlns\=/) > -1 ? c[a] + i[l] : i[l];
            return "\n" == r[0] ? r.slice(1) : r
        }, e.prototype.json = function(t, e) {
            var e = e ? e : this.step;
            return "undefined" == typeof JSON ? t : "string" == typeof t ? JSON.stringify(JSON.parse(t), null, e) : "object" == typeof t ? JSON.stringify(t, null, e) : t
        }, e.prototype.css = function(e, n) {
            var i = e.replace(/\s{1,}/g, " ").replace(/\{/g, "{~::~").replace(/\}/g, "~::~}~::~").replace(/\;/g, ";~::~").replace(/\/\*/g, "~::~/*").replace(/\*\//g, "*/~::~").replace(/~::~\s{0,}~::~/g, "~::~").split("~::~"),
                s = i.length,
                o = 0,
                a = "",
                r = 0,
                l = n ? t(n) : this.shift;
            for (r = 0; s > r; r++) a += /\{/.exec(i[r]) ? l[o++] + i[r] : /\}/.exec(i[r]) ? l[--o] + i[r] : /\*\\/.exec(i[r]) ? l[o] + i[r] : l[o] + i[r];
            return a.replace(/^\n{1,}/, "")
        }, e.prototype.sql = function(e, s) {
            var o = e.replace(/\s{1,}/g, " ").replace(/\'/gi, "~::~'").split("~::~"),
                a = o.length,
                r = [],
                l = 0,
                c = this.step,
                d = 0,
                u = "",
                h = 0,
                p = s ? t(s) : this.shift;
            for (h = 0; a > h; h++) r = r.concat(h % 2 ? o[h] : i(o[h], c));
            for (a = r.length, h = 0; a > h; h++) {
                d = n(r[h], d), /\s{0,}\s{0,}SELECT\s{0,}/.exec(r[h]) && (r[h] = r[h].replace(/\,/g, ",\n" + c + c)), /\s{0,}\s{0,}SET\s{0,}/.exec(r[h]) && (r[h] = r[h].replace(/\,/g, ",\n" + c + c)), /\s{0,}\(\s{0,}SELECT\s{0,}/.exec(r[h]) ? (l++, u += p[l] + r[h]) : /\'/.exec(r[h]) ? (1 > d && l && l--, u += r[h]) : (u += p[l] + r[h], 1 > d && l && l--)
            }
            return u = u.replace(/^\n{1,}/, "").replace(/\n{1,}/g, "\n")
        }, e.prototype.xmlmin = function(t, e) {
            var n = e ? t : t.replace(/\<![ \r\n\t]*(--([^\-]|[\r\n]|-[^\-])*--[ \r\n\t]*)\>/g, "").replace(/[ \r\n\t]{1,}xmlns/g, " xmlns");
            return n.replace(/>\s{0,}</g, "><")
        }, e.prototype.jsonmin = function(t) {
            return "undefined" == typeof JSON ? t : JSON.stringify(JSON.parse(t), null, 0)
        }, e.prototype.cssmin = function(t, e) {
            var n = e ? t : t.replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\//g, "");
            return n.replace(/\s{1,}/g, " ").replace(/\{\s{1,}/g, "{").replace(/\}\s{1,}/g, "}").replace(/\;\s{1,}/g, ";").replace(/\/\*\s{1,}/g, "/*").replace(/\*\/\s{1,}/g, "*/")
        }, e.prototype.sqlmin = function(t) {
            return t.replace(/\s{1,}/g, " ").replace(/\s{1,}\(/, "(").replace(/\s{1,}\)/, ")")
        }, window.vkbeautify = new e
    }(),
    function(t, e) {
        function n(t) {
            return t.call.apply(t.bind, arguments)
        }

        function i(t, e) {
            if (!t) throw Error();
            if (2 < arguments.length) {
                var n = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var i = Array.prototype.slice.call(arguments);
                    return Array.prototype.unshift.apply(i, n), t.apply(e, i)
                }
            }
            return function() {
                return t.apply(e, arguments)
            }
        }

        function s() {
            return s = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? n : i, s.apply(null, arguments)
        }

        function o(t, e) {
            this.J = t, this.t = e || t, this.C = this.t.document
        }

        function a(t, n, i) {
            t = t.C.getElementsByTagName(n)[0], t || (t = e.documentElement), t && t.lastChild && t.insertBefore(i, t.lastChild)
        }

        function r(t, e) {
            function n() {
                t.C.body ? e() : setTimeout(n, 0)
            }
            n()
        }

        function l(t, e, n) {
            e = e || [], n = n || [];
            for (var i = t.className.split(/\s+/), s = 0; s < e.length; s += 1) {
                for (var o = !1, a = 0; a < i.length; a += 1)
                    if (e[s] === i[a]) {
                        o = !0;
                        break
                    }
                o || i.push(e[s])
            }
            for (e = [], s = 0; s < i.length; s += 1) {
                for (o = !1, a = 0; a < n.length; a += 1)
                    if (i[s] === n[a]) {
                        o = !0;
                        break
                    }
                o || e.push(i[s])
            }
            t.className = e.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
        }

        function c(t, e) {
            for (var n = t.className.split(/\s+/), i = 0, s = n.length; s > i; i++)
                if (n[i] == e) return !0;
            return !1
        }

        function d(t) {
            if ("string" == typeof t.ma) return t.ma;
            var e = t.t.location.protocol;
            return "about:" == e && (e = t.J.location.protocol), "https:" == e ? "https:" : "http:"
        }

        function u(t, e) {
            var n = t.createElement("link", {
                    rel: "stylesheet",
                    href: e
                }),
                i = !1;
            n.onload = function() {
                i || (i = !0)
            }, n.onerror = function() {
                i || (i = !0)
            }, a(t, "head", n)
        }

        function h(e, n, i, s) {
            var o = e.C.getElementsByTagName("head")[0];
            if (o) {
                var a = e.createElement("script", {
                        src: n
                    }),
                    r = !1;
                return a.onload = a.onreadystatechange = function() {
                    r || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (r = !0, i && i(null), a.onload = a.onreadystatechange = null, "HEAD" == a.parentNode.tagName && o.removeChild(a))
                }, o.appendChild(a), t.setTimeout(function() {
                    r || (r = !0, i && i(Error("Script load timeout")))
                }, s || 5e3), a
            }
            return null
        }

        function p(t, e) {
            this.X = t, this.fa = e
        }

        function f(t, e, n, i) {
            this.c = null != t ? t : null, this.g = null != e ? e : null, this.A = null != n ? n : null, this.e = null != i ? i : null
        }

        function m(t) {
            t = K.exec(t);
            var e = null,
                n = null,
                i = null,
                s = null;
            return t && (null !== t[1] && t[1] && (e = parseInt(t[1], 10)), null !== t[2] && t[2] && (n = parseInt(t[2], 10)), null !== t[3] && t[3] && (i = parseInt(t[3], 10)), null !== t[4] && t[4] && (s = /^[0-9]+$/.test(t[4]) ? parseInt(t[4], 10) : t[4])), new f(e, n, i, s)
        }

        function g(t, e, n, i, s, o, a, r) {
            this.M = t, this.k = r
        }

        function v(t) {
            this.a = t
        }

        function y(t) {
            var e = E(t.a, /(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/, 1);
            return "" != e ? (/BB\d{2}/.test(e) && (e = "BlackBerry"), e) : (t = E(t.a, /(Linux|Mac_PowerPC|Macintosh|Windows|CrOS|PlayStation|CrKey)/, 1), "" != t ? ("Mac_PowerPC" == t ? t = "Macintosh" : "PlayStation" == t && (t = "Linux"), t) : "Unknown")
        }

        function b(t) {
            var e = E(t.a, /(OS X|Windows NT|Android) ([^;)]+)/, 2);
            if (e || (e = E(t.a, /Windows Phone( OS)? ([^;)]+)/, 2)) || (e = E(t.a, /(iPhone )?OS ([\d_]+)/, 2))) return e;
            if (e = E(t.a, /(?:Linux|CrOS|CrKey) ([^;)]+)/, 1))
                for (var e = e.split(/\s/), n = 0; n < e.length; n += 1)
                    if (/^[\d\._]+$/.test(e[n])) return e[n];
            return (t = E(t.a, /(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/, 2)) ? t : "Unknown"
        }

        function S(t) {
            var e = y(t),
                n = m(b(t)),
                i = m(E(t.a, /AppleWeb(?:K|k)it\/([\d\.\+]+)/, 1)),
                s = "Unknown",
                o = new f,
                o = "Unknown",
                a = !1;
            return /OPR\/[\d.]+/.test(t.a) ? s = "Opera" : -1 != t.a.indexOf("Chrome") || -1 != t.a.indexOf("CrMo") || -1 != t.a.indexOf("CriOS") ? s = "Chrome" : /Silk\/\d/.test(t.a) ? s = "Silk" : "BlackBerry" == e || "Android" == e ? s = "BuiltinBrowser" : -1 != t.a.indexOf("PhantomJS") ? s = "PhantomJS" : -1 != t.a.indexOf("Safari") ? s = "Safari" : -1 != t.a.indexOf("AdobeAIR") ? s = "AdobeAIR" : -1 != t.a.indexOf("PlayStation") && (s = "BuiltinBrowser"), "BuiltinBrowser" == s ? o = "Unknown" : "Silk" == s ? o = E(t.a, /Silk\/([\d\._]+)/, 1) : "Chrome" == s ? o = E(t.a, /(Chrome|CrMo|CriOS)\/([\d\.]+)/, 2) : -1 != t.a.indexOf("Version/") ? o = E(t.a, /Version\/([\d\.\w]+)/, 1) : "AdobeAIR" == s ? o = E(t.a, /AdobeAIR\/([\d\.]+)/, 1) : "Opera" == s ? o = E(t.a, /OPR\/([\d.]+)/, 1) : "PhantomJS" == s && (o = E(t.a, /PhantomJS\/([\d.]+)/, 1)), o = m(o), a = "AdobeAIR" == s ? 2 < o.c || 2 == o.c && 5 <= o.g : "BlackBerry" == e ? 10 <= n.c : "Android" == e ? 2 < n.c || 2 == n.c && 1 < n.g : 526 <= i.c || 525 <= i.c && 13 <= i.g, new g(s, 0, 0, 0, 0, 0, 0, new p(a, 536 > i.c || 536 == i.c && 11 > i.g))
        }

        function E(t, e, n) {
            return (t = t.match(e)) && t[n] ? t[n] : ""
        }

        function T(t) {
            this.la = t || "-"
        }

        function _(t, e) {
            this.M = t, this.Y = 4, this.N = "n";
            var n = (e || "n4").match(/^([nio])([1-9])$/i);
            n && (this.N = n[1], this.Y = parseInt(n[2], 10))
        }

        function w(t) {
            return t.N + t.Y
        }

        function k(t) {
            var e = 4,
                n = "n",
                i = null;
            return t && ((i = t.match(/(normal|oblique|italic)/i)) && i[1] && (n = i[1].substr(0, 1).toLowerCase()), (i = t.match(/([1-9]00|normal|bold)/i)) && i[1] && (/bold/i.test(i[1]) ? e = 7 : /[1-9]00/.test(i[1]) && (e = parseInt(i[1].substr(0, 1), 10)))), n + e
        }

        function L(t, e) {
            this.d = t, this.p = t.t.document.documentElement, this.P = e, this.j = "wf", this.h = new T("-"), this.ga = !1 !== e.events, this.B = !1 !== e.classes
        }

        function C(t) {
            if (t.B) {
                var e = c(t.p, t.h.e(t.j, "active")),
                    n = [],
                    i = [t.h.e(t.j, "loading")];
                e || n.push(t.h.e(t.j, "inactive")), l(t.p, n, i)
            }
            A(t, "inactive")
        }

        function A(t, e, n) {
            t.ga && t.P[e] && (n ? t.P[e](n.getName(), w(n)) : t.P[e]())
        }

        function x() {
            this.w = {}
        }

        function I(t, e) {
            this.d = t, this.G = e, this.m = this.d.createElement("span", {
                "aria-hidden": "true"
            }, this.G)
        }

        function D(t) {
            a(t.d, "body", t.m)
        }

        function M(t) {
            var e;
            e = [];
            for (var n = t.M.split(/,\s*/), i = 0; i < n.length; i++) {
                var s = n[i].replace(/['"]/g, "");
                e.push(-1 == s.indexOf(" ") ? s : "'" + s + "'")
            }
            return e = e.join(","), n = "normal", "o" === t.N ? n = "oblique" : "i" === t.N && (n = "italic"), "display:block;position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + e + ";" + ("font-style:" + n + ";font-weight:" + (t.Y + "00") + ";")
        }

        function O(t, e, n, i, s, o, a, r) {
            this.Z = t, this.ja = e, this.d = n, this.s = i, this.G = r || "BESbswy", this.k = s, this.I = {}, this.W = o || 3e3, this.ba = a || null, this.F = this.D = null, t = new I(this.d, this.G), D(t);
            for (var l in Q) Q.hasOwnProperty(l) && (e = new _(Q[l], w(this.s)), e = M(e), t.m.style.cssText = e, this.I[Q[l]] = t.m.offsetWidth);
            t.remove()
        }

        function R(t, e, n) {
            for (var i in Q)
                if (Q.hasOwnProperty(i) && e === t.I[Q[i]] && n === t.I[Q[i]]) return !0;
            return !1
        }

        function N(t) {
            var e = t.D.m.offsetWidth,
                n = t.F.m.offsetWidth;
            e === t.I.serif && n === t.I["sans-serif"] || t.k.fa && R(t, e, n) ? Y() - t.na >= t.W ? t.k.fa && R(t, e, n) && (null === t.ba || t.ba.hasOwnProperty(t.s.getName())) ? $(t, t.Z) : $(t, t.ja) : P(t) : $(t, t.Z)
        }

        function P(t) {
            setTimeout(s(function() {
                N(this)
            }, t), 25)
        }

        function $(t, e) {
            t.D.remove(), t.F.remove(), e(t.s)
        }

        function U(t, e, n, i) {
            this.d = e, this.u = n, this.R = 0, this.da = this.aa = !1, this.W = i, this.k = t.k
        }

        function j(t, e, n, i, o) {
            if (n = n || {}, 0 === e.length && o) C(t.u);
            else
                for (t.R += e.length, o && (t.aa = o), o = 0; o < e.length; o++) {
                    var a = e[o],
                        r = n[a.getName()],
                        c = t.u,
                        d = a;
                    c.B && l(c.p, [c.h.e(c.j, d.getName(), w(d).toString(), "loading")]), A(c, "fontloading", d), c = null, c = new O(s(t.ha, t), s(t.ia, t), t.d, a, t.k, t.W, i, r), c.start()
                }
        }

        function B(t) {
            0 == --t.R && t.aa && (t.da ? (t = t.u, t.B && l(t.p, [t.h.e(t.j, "active")], [t.h.e(t.j, "loading"), t.h.e(t.j, "inactive")]), A(t, "active")) : C(t.u))
        }

        function F(t) {
            this.J = t, this.v = new x, this.oa = new v(t.navigator.userAgent), this.a = this.oa.parse(), this.T = this.U = 0, this.Q = this.S = !0
        }

        function H(t, e, n, i, s) {
            var o = 0 == --t.U;
            (t.Q || t.S) && setTimeout(function() {
                j(e, n, i || null, s || null, o)
            }, 0)
        }

        function z(t, e, n) {
            this.O = t ? t : e + te, this.q = [], this.V = [], this.ea = n || ""
        }

        function W(t) {
            this.q = t, this.ca = [], this.L = {}
        }

        function V(t, e) {
            this.a = new v(navigator.userAgent).parse(), this.d = t, this.f = e
        }

        function G(t, e) {
            this.d = t, this.f = e, this.o = []
        }

        function X(t, e) {
            this.d = t, this.f = e, this.o = []
        }

        function J(t, e) {
            this.d = t, this.f = e, this.o = []
        }

        function q(t, e) {
            this.d = t, this.f = e
        }
        var Y = Date.now || function() {
                return +new Date
            };
        o.prototype.createElement = function(t, e, n) {
            if (t = this.C.createElement(t), e)
                for (var i in e) e.hasOwnProperty(i) && ("style" == i ? t.style.cssText = e[i] : t.setAttribute(i, e[i]));
            return n && t.appendChild(this.C.createTextNode(n)), t
        };
        var K = /^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;
        f.prototype.compare = function(t) {
            return this.c > t.c || this.c === t.c && this.g > t.g || this.c === t.c && this.g === t.g && this.A > t.A ? 1 : this.c < t.c || this.c === t.c && this.g < t.g || this.c === t.c && this.g === t.g && this.A < t.A ? -1 : 0
        }, f.prototype.toString = function() {
            return [this.c, this.g || "", this.A || "", this.e || ""].join("")
        }, g.prototype.getName = function() {
            return this.M
        };
        var Z = new g("Unknown", 0, 0, 0, 0, 0, 0, new p(!1, !1));
        v.prototype.parse = function() {
            var t;
            if (-1 != this.a.indexOf("MSIE") || -1 != this.a.indexOf("Trident/")) {
                t = y(this);
                var e = m(b(this)),
                    n = null,
                    i = E(this.a, /Trident\/([\d\w\.]+)/, 1),
                    n = m(-1 != this.a.indexOf("MSIE") ? E(this.a, /MSIE ([\d\w\.]+)/, 1) : E(this.a, /rv:([\d\w\.]+)/, 1));
                "" != i && m(i), t = new g("MSIE", 0, 0, 0, 0, 0, 0, new p("Windows" == t && 6 <= n.c || "Windows Phone" == t && 8 <= e.c, !1))
            } else if (-1 != this.a.indexOf("Opera")) t: if (t = m(E(this.a, /Presto\/([\d\w\.]+)/, 1)), m(b(this)), null !== t.c || m(E(this.a, /rv:([^\)]+)/, 1)), -1 != this.a.indexOf("Opera Mini/")) t = m(E(this.a, /Opera Mini\/([\d\.]+)/, 1)), t = new g("OperaMini", 0, 0, 0, y(this), 0, 0, new p(!1, !1));
            else {
                if (-1 != this.a.indexOf("Version/") && (t = m(E(this.a, /Version\/([\d\.]+)/, 1)), null !== t.c)) {
                    t = new g("Opera", 0, 0, 0, y(this), 0, 0, new p(10 <= t.c, !1));
                    break t
                }
                t = m(E(this.a, /Opera[\/ ]([\d\.]+)/, 1)), t = null !== t.c ? new g("Opera", 0, 0, 0, y(this), 0, 0, new p(10 <= t.c, !1)) : new g("Opera", 0, 0, 0, y(this), 0, 0, new p(!1, !1))
            } else /OPR\/[\d.]+/.test(this.a) ? t = S(this) : /AppleWeb(K|k)it/.test(this.a) ? t = S(this) : -1 != this.a.indexOf("Gecko") ? (t = "Unknown", e = new f, m(b(this)), e = !1, -1 != this.a.indexOf("Firefox") ? (t = "Firefox", e = m(E(this.a, /Firefox\/([\d\w\.]+)/, 1)), e = 3 <= e.c && 5 <= e.g) : -1 != this.a.indexOf("Mozilla") && (t = "Mozilla"), n = m(E(this.a, /rv:([^\)]+)/, 1)), e || (e = 1 < n.c || 1 == n.c && 9 < n.g || 1 == n.c && 9 == n.g && 2 <= n.A), t = new g(t, 0, 0, 0, y(this), 0, 0, new p(e, !1))) : t = Z;
            return t
        }, T.prototype.e = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t.push(arguments[e].replace(/[\W_]+/g, "").toLowerCase());
            return t.join(this.la)
        }, _.prototype.getName = function() {
            return this.M
        }, I.prototype.remove = function() {
            var t = this.m;
            t.parentNode && t.parentNode.removeChild(t)
        };
        var Q = {
            ra: "serif",
            qa: "sans-serif",
            pa: "monospace"
        };
        O.prototype.start = function() {
            this.D = new I(this.d, this.G), D(this.D), this.F = new I(this.d, this.G), D(this.F), this.na = Y();
            var t = new _(this.s.getName() + ",serif", w(this.s)),
                t = M(t);
            this.D.m.style.cssText = t, t = new _(this.s.getName() + ",sans-serif", w(this.s)), t = M(t), this.F.m.style.cssText = t, N(this)
        }, U.prototype.ha = function(t) {
            var e = this.u;
            e.B && l(e.p, [e.h.e(e.j, t.getName(), w(t).toString(), "active")], [e.h.e(e.j, t.getName(), w(t).toString(), "loading"), e.h.e(e.j, t.getName(), w(t).toString(), "inactive")]), A(e, "fontactive", t), this.da = !0, B(this)
        }, U.prototype.ia = function(t) {
            var e = this.u;
            if (e.B) {
                var n = c(e.p, e.h.e(e.j, t.getName(), w(t).toString(), "active")),
                    i = [],
                    s = [e.h.e(e.j, t.getName(), w(t).toString(), "loading")];
                n || i.push(e.h.e(e.j, t.getName(), w(t).toString(), "inactive")), l(e.p, i, s)
            }
            A(e, "fontinactive", t), B(this)
        }, F.prototype.load = function(t) {
            this.d = new o(this.J, t.context || this.J), this.S = !1 !== t.events, this.Q = !1 !== t.classes;
            var e = new L(this.d, t),
                n = [],
                i = t.timeout;
            e.B && l(e.p, [e.h.e(e.j, "loading")]), A(e, "loading");
            var a, n = this.v,
                r = this.d,
                c = [];
            for (a in t)
                if (t.hasOwnProperty(a)) {
                    var d = n.w[a];
                    d && c.push(d(t[a], r))
                }
            for (n = c, this.T = this.U = n.length, t = new U(this.a, this.d, e, i), i = 0, a = n.length; a > i; i++) r = n[i], r.K(this.a, s(this.ka, this, r, e, t))
        }, F.prototype.ka = function(t, e, n, i) {
            var s = this;
            i ? t.load(function(t, e, i) {
                H(s, n, t, e, i)
            }) : (t = 0 == --this.U, this.T--, t && 0 == this.T ? C(e) : (this.Q || this.S) && j(n, [], {}, null, t))
        };
        var te = "//fonts.googleapis.com/css";
        z.prototype.e = function() {
            if (0 == this.q.length) throw Error("No fonts to load!");
            if (-1 != this.O.indexOf("kit=")) return this.O;
            for (var t = this.q.length, e = [], n = 0; t > n; n++) e.push(this.q[n].replace(/ /g, "+"));
            return t = this.O + "?family=" + e.join("%7C"), 0 < this.V.length && (t += "&subset=" + this.V.join(",")), 0 < this.ea.length && (t += "&text=" + encodeURIComponent(this.ea)), t
        };
        var ee = {
                latin: "BESbswy",
                cyrillic: "&#1081;&#1103;&#1046;",
                greek: "&#945;&#946;&#931;",
                khmer: "&#x1780;&#x1781;&#x1782;",
                Hanuman: "&#x1780;&#x1781;&#x1782;"
            },
            ne = {
                thin: "1",
                extralight: "2",
                "extra-light": "2",
                ultralight: "2",
                "ultra-light": "2",
                light: "3",
                regular: "4",
                book: "4",
                medium: "5",
                "semi-bold": "6",
                semibold: "6",
                "demi-bold": "6",
                demibold: "6",
                bold: "7",
                "extra-bold": "8",
                extrabold: "8",
                "ultra-bold": "8",
                ultrabold: "8",
                black: "9",
                heavy: "9",
                l: "3",
                r: "4",
                b: "7"
            },
            ie = {
                i: "i",
                italic: "i",
                n: "n",
                normal: "n"
            },
            se = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
        W.prototype.parse = function() {
            for (var t = this.q.length, e = 0; t > e; e++) {
                var n = this.q[e].split(":"),
                    i = n[0].replace(/\+/g, " "),
                    s = ["n4"];
                if (2 <= n.length) {
                    var o, a = n[1];
                    if (o = [], a)
                        for (var a = a.split(","), r = a.length, l = 0; r > l; l++) {
                            var c;
                            if (c = a[l], c.match(/^[\w-]+$/)) {
                                c = se.exec(c.toLowerCase());
                                var d = void 0;
                                if (null == c) d = "";
                                else {
                                    if (d = void 0, d = c[1], null == d || "" == d) d = "4";
                                    else var u = ne[d],
                                        d = u ? u : isNaN(d) ? "4" : d.substr(0, 1);
                                    c = c[2], d = [null == c || "" == c ? "n" : ie[c], d].join("")
                                }
                                c = d
                            } else c = "";
                            c && o.push(c)
                        }
                    0 < o.length && (s = o), 3 == n.length && (n = n[2], o = [], n = n ? n.split(",") : o, 0 < n.length && (n = ee[n[0]]) && (this.L[i] = n))
                }
                for (this.L[i] || (n = ee[i]) && (this.L[i] = n), n = 0; n < s.length; n += 1) this.ca.push(new _(i, s[n]))
            }
        };
        var oe = {
            Arimo: !0,
            Cousine: !0,
            Tinos: !0
        };
        V.prototype.K = function(t, e) {
            e(t.k.X)
        }, V.prototype.load = function(t) {
            var e = this.d;
            "MSIE" == this.a.getName() && 1 != this.f.blocking ? r(e, s(this.$, this, t)) : this.$(t)
        }, V.prototype.$ = function(t) {
            for (var e = this.d, n = new z(this.f.api, d(e), this.f.text), i = this.f.families, s = i.length, o = 0; s > o; o++) {
                var a = i[o].split(":");
                3 == a.length && n.V.push(a.pop());
                var r = "";
                2 == a.length && "" != a[1] && (r = ":"), n.q.push(a.join(r))
            }
            i = new W(i), i.parse(), u(e, n.e()), t(i.ca, i.L, oe)
        }, G.prototype.H = function(t) {
            var e = this.d;
            return d(this.d) + (this.f.api || "//f.fontdeck.com/s/css/js/") + (e.t.location.hostname || e.J.location.hostname) + "/" + t + ".js"
        }, G.prototype.K = function(t, e) {
            var n = this.f.id,
                i = this.d.t,
                s = this;
            n ? (i.__webfontfontdeckmodule__ || (i.__webfontfontdeckmodule__ = {}), i.__webfontfontdeckmodule__[n] = function(t, n) {
                for (var i = 0, o = n.fonts.length; o > i; ++i) {
                    var a = n.fonts[i];
                    s.o.push(new _(a.name, k("font-weight:" + a.weight + ";font-style:" + a.style)))
                }
                e(t)
            }, h(this.d, this.H(n), function(t) {
                t && e(!1)
            })) : e(!1)
        }, G.prototype.load = function(t) {
            t(this.o)
        }, X.prototype.H = function(t) {
            var e = d(this.d);
            return (this.f.api || e + "//use.typekit.net") + "/" + t + ".js"
        }, X.prototype.K = function(t, e) {
            var n = this.f.id,
                i = this.d.t,
                s = this;
            n ? h(this.d, this.H(n), function(t) {
                if (t) e(!1);
                else {
                    if (i.Typekit && i.Typekit.config && i.Typekit.config.fn) {
                        t = i.Typekit.config.fn;
                        for (var n = 0; n < t.length; n += 2)
                            for (var o = t[n], a = t[n + 1], r = 0; r < a.length; r++) s.o.push(new _(o, a[r]));
                        try {
                            i.Typekit.load({
                                events: !1,
                                classes: !1
                            })
                        } catch (l) {}
                    }
                    e(!0)
                }
            }, 2e3) : e(!1)
        }, X.prototype.load = function(t) {
            t(this.o)
        }, J.prototype.K = function(t, e) {
            var n = this,
                i = n.f.projectId,
                s = n.f.version;
            if (i) {
                var o = n.d.t;
                h(this.d, n.H(i, s), function(s) {
                    if (s) e(!1);
                    else {
                        if (o["__mti_fntLst" + i] && (s = o["__mti_fntLst" + i]()))
                            for (var a = 0; a < s.length; a++) n.o.push(new _(s[a].fontfamily));
                        e(t.k.X)
                    }
                }).id = "__MonotypeAPIScript__" + i
            } else e(!1)
        }, J.prototype.H = function(t, e) {
            var n = d(this.d),
                i = (this.f.api || "fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/, "");
            return n + "//" + i + "/" + t + ".js" + (e ? "?v=" + e : "")
        }, J.prototype.load = function(t) {
            t(this.o)
        }, q.prototype.load = function(t) {
            var e, n, i = this.f.urls || [],
                s = this.f.families || [],
                o = this.f.testStrings || {};
            for (e = 0, n = i.length; n > e; e++) u(this.d, i[e]);
            for (i = [], e = 0, n = s.length; n > e; e++) {
                var a = s[e].split(":");
                if (a[1])
                    for (var r = a[1].split(","), l = 0; l < r.length; l += 1) i.push(new _(a[0], r[l]));
                else i.push(new _(a[0]))
            }
            t(i, o)
        }, q.prototype.K = function(t, e) {
            return e(t.k.X)
        };
        var ae = new F(this);
        ae.v.w.custom = function(t, e) {
            return new q(e, t)
        }, ae.v.w.fontdeck = function(t, e) {
            return new G(e, t)
        }, ae.v.w.monotype = function(t, e) {
            return new J(e, t)
        }, ae.v.w.typekit = function(t, e) {
            return new X(e, t)
        }, ae.v.w.google = function(t, e) {
            return new V(e, t)
        }, this.WebFont || (this.WebFont = {}, this.WebFont.load = s(ae.load, ae), this.WebFontConfig && ae.load(this.WebFontConfig))
    }(this, document), window.SL = function(t) {
    t = t.split(".");
    for (var e = SL; t.length;) {
        var n = t.shift();
        e[n] || (e[n] = {}), e = e[n]
    }
    return e
}, $(function() {
    function t() {
        e(), SL.helpers.PageLoader.hide(), SL.settings.init(), SL.keyboard.init(), SL.pointer.init(), SL.warnings.init(), SL.draganddrop.init(), SL.fonts.init(), "undefined" == typeof SLConfig && (window.SLConfig = {}), n(), i()
    }

    function e() {
        var t = $("html");
        t.addClass("loaded"), SL.util.device.HAS_TOUCH && t.addClass("touch"), SL.util.device.isMac() ? t.addClass("ua-mac") : SL.util.device.isWindows() ? t.addClass("ua-windows") : SL.util.device.isLinux() && t.addClass("ua-linux"), SL.util.device.isChrome() ? t.addClass("ua-chrome") : SL.util.device.isSafari() ? t.addClass("ua-safari") : SL.util.device.isFirefox() ? t.addClass("ua-firefox") : SL.util.device.isIE() && t.addClass("ua-ie"), SL.util.device.getScrollBarWidth() > 0 && t.addClass("has-visible-scrollbars")
    }

    function n() {
        "object" == typeof window.SLConfig && (SLConfig.deck && !SLConfig.deck.notes && (SLConfig.deck.notes = {}), SL.current_user = new SL.models.User(SLConfig.current_user), "object" == typeof SLConfig.deck && (SL.current_deck = new SL.models.Deck(SLConfig.deck)), "object" == typeof SLConfig.team && (SL.current_team = new SL.models.Team(SLConfig.team)))
    }

    function i() {
        var t = $("html");
        SL.util.hideAddressBar(), t.hasClass("home index") && (SL.view = new SL.views.home.Index), SL.view = t.hasClass("home explore") ? new SL.views.home.Explore : t.hasClass("users show") ? new SL.views.users.Show : t.hasClass("decks show") ? new SL.views.decks.Show : t.hasClass("decks edit") ? new SL.editor.Editor : t.hasClass("decks edit-requires-upgrade") ? new SL.views.decks.EditRequiresUpgrade : t.hasClass("decks embed") ? new SL.views.decks.Embed : t.is(".decks.live-client") ? new SL.views.decks.LiveClient : t.is(".decks.live-server") ? new SL.views.decks.LiveServer : t.hasClass("decks speaker") ? new SL.views.decks.Speaker : t.hasClass("decks export") ? new SL.views.decks.Export : t.hasClass("decks fullscreen") ? new SL.views.decks.Fullscreen : t.hasClass("decks password") ? new SL.views.decks.Password : t.hasClass("teams-subscriptions-show") ? new SL.views.teams.subscriptions.Show : t.hasClass("registrations") && (t.hasClass("edit") || t.hasClass("update")) ? new SL.views.devise.Edit : t.hasClass("registrations") || t.hasClass("team_registrations") || t.hasClass("sessions") || t.hasClass("passwords") ? new SL.views.devise.All : t.hasClass("subscriptions new") || t.hasClass("subscriptions edit") ? new SL.views.subscriptions.New : t.hasClass("subscriptions show") ? new SL.views.subscriptions.Show : t.hasClass("subscriptions edit_period") ? new SL.views.subscriptions.EditPeriod : t.hasClass("teams-signup") ? new SL.views.teams.New : t.hasClass("teams edit") ? new SL.views.teams.teams.Edit : t.hasClass("teams edit_members") ? new SL.views.teams.teams.EditMembers : t.hasClass("teams show") ? new SL.views.teams.teams.Show : t.hasClass("themes edit") ? new SL.views.themes.Edit : t.hasClass("themes preview") ? new SL.views.themes.Preview : t.hasClass("pricing") ? new SL.views.statik.Pricing : t.hasClass("static") ? new SL.views.statik.All : new SL.views.Base, Placement.sync()
    }
    setTimeout(t, 1)
}), SL("collections").Collection = Class.extend({
    init: function(t, e, n) {
        this.factory = e, this.crud = n || {}, this.changed = new signals.Signal, this.setData(t)
    },
    setData: function(t) {
        if (this.data = t || [], "function" == typeof this.factory) {
            var e = this.data;
            this.data = [];
            for (var n = 0, i = e.length; i > n; n++) {
                var s = e[n];
                this.data.push(s instanceof this.factory ? e[n] : this.createModelInstance(e[n]))
            }
        }
    },
    find: function(t) {
        for (var e = 0, n = this.data.length; n > e; e++) {
            var i = this.data[e];
            if (i === t) return e
        }
        return -1
    },
    contains: function(t) {
        return -1 !== this.find(t)
    },
    findByProperties: function(t) {
        for (var e = 0, n = this.data.length; n > e; e++) {
            var i = this.data[e],
                s = !0;
            for (var o in t) t.hasOwnProperty(o) && ("function" == typeof i.get ? i.get(o) != t[o] && (s = !1) : i[o] != t[o] && (s = !1));
            if (s) return e
        }
        return -1
    },
    getByProperties: function(t) {
        return this.data[this.findByProperties(t)]
    },
    remove: function(t) {
        for (var e, n = 0; n < this.data.length; n++) this.data[n] === t && (e = this.data.splice(n, 1)[0], n--);
        "undefined" != typeof e && this.changed.dispatch(null, [e])
    },
    removeByProperties: function(t) {
        for (var e, n = this.findByProperties(t), i = 0; - 1 !== n && i++ < 1e3;) e = this.data.splice(n, 1)[0], n = this.findByProperties(t);
        "undefined" != typeof e && this.changed.dispatch(null, [e])
    },
    removeByIndex: function(t) {
        var e = this.data.splice(t, 1);
        return "undefined" != typeof e && this.changed.dispatch(null, [e]), e
    },
    create: function(t, e) {
        if ("function" == typeof this.factory) {
            if (!this.crud.create) {
                var n = this.createModel(t, e);
                return e && SL.util.callback(e.success, n), n
            }
            $.ajax({
                type: "POST",
                context: this,
                url: this.crud.create,
                data: t
            }).done(function(t) {
                SL.util.callback(e.success, this.createModel(t, e))
            }).fail(function() {
                SL.util.callback(e.error)
            })
        }
    },
    createModel: function(t, e) {
        if (e = $.extend({
                prepend: !1
            }, e), "function" == typeof this.factory) {
            var n = this.createModelInstance(t);
            return e.prepend ? this.unshift(n) : this.push(n), n
        }
    },
    createModelInstance: function(t, e) {
        return new this.factory(t, e)
    },
    clear: function() {
        this.data.length = 0, this.changed.dispatch()
    },
    swap: function(t, e) {
        var n = "number" == typeof t && t >= 0 && t < this.size(),
            i = "number" == typeof e && e >= 0 && e < this.size();
        if (n && i) {
            var s = this.data[t],
                o = this.data[e];
            this.data[t] = o, this.data[e] = s
        }
        this.changed.dispatch()
    },
    shiftLeft: function(t) {
        "number" == typeof t && t > 0 && this.swap(t, t - 1)
    },
    shiftRight: function(t) {
        "number" == typeof t && t < this.size() - 1 && this.swap(t, t + 1)
    },
    at: function(t) {
        return this.data[t]
    },
    first: function() {
        return this.at(0)
    },
    last: function() {
        return this.at(this.size() - 1)
    },
    size: function() {
        return this.data.length
    },
    isEmpty: function() {
        return 0 === this.size()
    },
    getUniqueName: function(t, e, n) {
        for (var i = -1, s = 0, o = this.data.length; o > s; s++) {
            var a = this.data[s],
                r = "function" == typeof a.get ? a.get(e) : a[e];
            if (r) {
                var l = r.match(new RegExp("^" + t + "\\s?(\\d+)?$"));
                l && 2 === l.length && (i = Math.max(l[1] ? parseInt(l[1], 10) : 0, i))
            }
        }
        return -1 === i ? t + (n ? " 1" : "") : t + " " + (i + 1)
    },
    toJSON: function() {
        return this.map(function(t) {
            return "function" == typeof t.toJSON ? t.toJSON() : t
        })
    },
    destroy: function() {
        this.changed.dispose(), this.data = null
    },
    unshift: function(t) {
        var e = this.data.unshift(t);
        return this.changed.dispatch(t), e
    },
    push: function(t) {
        var e = this.data.push(t);
        return this.changed.dispatch([t]), e
    },
    pop: function() {
        var t = this.data.pop();
        return "undefined" != typeof t && this.changed.dispatch(null, [t]), t
    },
    map: function(t) {
        return this.data.map(t)
    },
    some: function(t) {
        return this.data.some(t)
    },
    filter: function(t) {
        return this.data.filter(t)
    },
    forEach: function(t) {
        return this.data.forEach(t)
    }
}), SL("collections").Loadable = SL.collections.Collection.extend({
    init: function() {
        this._super.apply(this, arguments), this.loadStatus = "", this.loadStarted = new signals.Signal, this.loadCompleted = new signals.Signal, this.loadFailed = new signals.Signal
    },
    load: function() {},
    onLoadStarted: function() {
        this.loadStatus = "loading", this.loadStarted.dispatch()
    },
    onLoadCompleted: function() {
        this.loadStatus = "loaded", this.loadCompleted.dispatch()
    },
    onLoadFailed: function() {
        this.loadStatus = "failed", this.loadFailed.dispatch()
    },
    isLoading: function() {
        return "loading" === this.loadStatus
    },
    isLoaded: function() {
        return "loaded" === this.loadStatus
    },
    destroy: function() {
        this.loadStarted.dispose(), this.loadCompleted.dispose(), this.loadFailed.dispose(), this._super()
    }
}), SL("collections").MediaTags = SL.collections.Loadable.extend({
    init: function(t, e, n) {
        this._super(t, e || SL.models.MediaTag, n || {
                list: SL.config.AJAX_MEDIA_TAG_LIST,
                create: SL.config.AJAX_MEDIA_TAG_CREATE,
                update: SL.config.AJAX_MEDIA_TAG_UPDATE,
                "delete": SL.config.AJAX_MEDIA_TAG_DELETE,
                add_media: SL.config.AJAX_MEDIA_TAG_ADD_MEDIA,
                remove_media: SL.config.AJAX_MEDIA_TAG_REMOVE_MEDIA
            }), this.associationChanged = new signals.Signal
    },
    load: function() {
        this.isLoading() || (this.onLoadStarted(), $.ajax({
            type: "GET",
            url: this.crud.list,
            context: this
        }).done(function(t) {
            this.setData(t.results), this.onLoadCompleted()
        }).fail(function() {
            this.onLoadFailed()
        }))
    },
    create: function(t, e) {
        this._super($.extend({
            tag: {
                name: this.getUniqueName("Tag", "name", !0)
            }
        }, t), e)
    },
    addTagTo: function(t, e) {
        e.forEach(function(e) {
            t.addMedia(e)
        }), this.associationChanged.dispatch(t), $.ajax({
            type: "POST",
            url: this.crud.add_media(t.get("id")),
            context: this,
            data: {
                media_ids: e.map(function(t) {
                    return t.get("id")
                })
            }
        }).fail(function() {
            SL.notify(SL.locale.get("GENERIC_ERROR"), "negative")
        })
    },
    removeTagFrom: function(t, e) {
        e.forEach(function(e) {
            t.removeMedia(e)
        }), this.associationChanged.dispatch(t), $.ajax({
            type: "DELETE",
            url: this.crud.remove_media(t.get("id")),
            context: this,
            data: {
                media_ids: e.map(function(t) {
                    return t.get("id")
                })
            }
        }).fail(function() {
            SL.notify(SL.locale.get("GENERIC_ERROR"), "negative")
        })
    }
}), SL("collections").Media = SL.collections.Loadable.extend({
    init: function(t, e, n) {
        this._super(t, e || SL.models.Media, n || {
                list: SL.config.AJAX_MEDIA_LIST,
                update: SL.config.AJAX_MEDIA_UPDATE,
                create: SL.config.AJAX_MEDIA_CREATE,
                "delete": SL.config.AJAX_MEDIA_DELETE
            })
    },
    load: function() {
        this.isLoading() || (this.page = 1, this.pagedResults = [], this.onLoadStarted(), this.loadNextPage())
    },
    loadNextPage: function() {
        1 === this.page || this.page <= this.totalPages ? $.ajax({
            type: "GET",
            url: this.crud.list + "?page=" + this.page,
            context: this
        }).done(function(t) {
            this.totalPages || (this.totalPages = Math.ceil(t.total / t.results.length)), this.pagedResults = this.pagedResults.concat(t.results), this.page += 1, this.loadNextPage()
        }).fail(function() {
            this.onLoadFailed()
        }) : (this.setData(this.pagedResults), this.onLoadCompleted())
    },
    createSearchFilter: function(t) {
        if (!t || "" === t) return function() {
            return !1
        };
        var e = new RegExp(t, "i");
        return function(t) {
            return e.test(t.get("label"))
        }
    },
    getImages: function() {
        return this.filter(SL.models.Media.IMAGE.filter)
    },
    getVideos: function() {
        return this.filter(SL.models.Media.VIDEO.filter)
    }
}), SL("collections").TeamMediaTags = SL.collections.MediaTags.extend({
    init: function(t) {
        this._super(t, SL.models.MediaTag, {
            list: SL.config.AJAX_TEAM_MEDIA_TAG_LIST,
            create: SL.config.AJAX_TEAM_MEDIA_TAG_CREATE,
            update: SL.config.AJAX_TEAM_MEDIA_TAG_UPDATE,
            "delete": SL.config.AJAX_TEAM_MEDIA_TAG_DELETE,
            add_media: SL.config.AJAX_TEAM_MEDIA_TAG_ADD_MEDIA,
            remove_media: SL.config.AJAX_TEAM_MEDIA_TAG_REMOVE_MEDIA
        })
    },
    createModelInstance: function(t) {
        return this._super(t, this.crud)
    }
}), SL("collections").TeamMedia = SL.collections.Media.extend({
    init: function(t) {
        this._super(t, SL.models.Media, {
            list: SL.config.AJAX_TEAM_MEDIA_LIST,
            create: SL.config.AJAX_TEAM_MEDIA_CREATE,
            update: SL.config.AJAX_TEAM_MEDIA_UPDATE,
            "delete": SL.config.AJAX_TEAM_MEDIA_DELETE
        })
    },
    createModelInstance: function(t) {
        return this._super(t, this.crud)
    }
}), SL("models").Model = Class.extend({
    init: function(t) {
        this.data = t || {}
    },
    set: function(t, e) {
        this.data[t] = e
    },
    get: function(t) {
        if ("string" == typeof t && /\./.test(t)) {
            for (var e = t.split("."), n = this.data; e.length && n;) t = e.shift(), n = n[t];
            return n
        }
        return this.data[t]
    },
    has: function(t) {
        var e = this.get(t);
        return !!e || e === !1 || 0 === e
    },
    toJSON: function() {
        return JSON.parse(JSON.stringify(this.data))
    }
}), SL("models").AccessToken = SL.models.Model.extend({
    init: function(t) {
        this._super(t)
    },
    save: function(t) {
        var e = {
            access_token: {}
        };
        return t ? t.forEach(function(t) {
            e.access_token[t] = this.get(t)
        }.bind(this)) : e.access_token = this.toJSON(), $.ajax({
            url: SL.config.AJAX_ACCESS_TOKENS_UPDATE(this.get("deck_id"), this.get("id")),
            type: "PUT",
            data: e
        })
    },
    destroy: function() {
        return $.ajax({
            url: SL.config.AJAX_ACCESS_TOKENS_DELETE(this.get("deck_id"), this.get("id")),
            type: "DELETE"
        })
    },
    clone: function() {
        return new SL.models.AccessToken(JSON.parse(JSON.stringify(this.data)))
    }
}), SL("models").Customer = SL.models.Model.extend({
    init: function(t) {
        this._super(t)
    },
    isTrial: function() {
        return "trialing" === this.get("subscription.status")
    },
    hasActiveSubscription: function() {
        return this.has("subscription") && !this.get("subscription.cancel_at_period_end")
    },
    getNextInvoiceDate: function() {
        return this.get("next_charge")
    },
    getNextInvoiceSum: function() {
        return (parseFloat(this.get("next_charge_amount")) / 100).toFixed(2)
    },
    clone: function() {
        return new SL.models.Customer(JSON.parse(JSON.stringify(this.data)))
    }
}), SL("models").Deck = SL.models.Model.extend({
    init: function(t) {
        this.data = t || {}, $.extend(this, this.data), this.user_settings = new SL.models.UserSettings(this.data.user.settings)
    },
    isPro: function() {
        return this.data.user ? !!this.data.user.pro : !1
    },
    isVisibilityAll: function() {
        return this.get("visibility") === SL.models.Deck.VISIBILITY_ALL
    },
    isVisibilitySelf: function() {
        return this.get("visibility") === SL.models.Deck.VISIBILITY_SELF
    },
    isVisibilityTeam: function() {
        return this.get("visibility") === SL.models.Deck.VISIBILITY_TEAM
    },
    belongsTo: function(t) {
        return this.get("user.id") === t.get("id")
    },
    getURL: function(t) {
        t = $.extend({
            protocol: document.location.protocol,
            token: null,
            view: null
        }, t);
        var e = this.get("user.username"),
            n = this.get("slug") || this.get("id"),
            i = t.protocol + "//" + document.location.host + SL.routes.DECK(e, n);
        return t.view && (i += "/" + t.view), t.token && (i += "?token=" + t.token.get("token")), i
    },
    clone: function() {
        return new SL.models.Deck(JSON.parse(JSON.stringify(this.data)))
    }
}), SL("models").Deck.VISIBILITY_SELF = "self", SL("models").Deck.VISIBILITY_TEAM = "team", SL("models").Deck.VISIBILITY_ALL = "all", SL("models").MediaTag = SL.models.Model.extend({
    init: function(t, e) {
        this._super(t), this.crud = $.extend({
            update: SL.config.AJAX_MEDIA_TAG_UPDATE,
            "delete": SL.config.AJAX_MEDIA_TAG_DELETE
        }, e)
    },
    createFilter: function() {
        var t = this;
        return function(e) {
            return t.hasMedia(e)
        }
    },
    hasMedia: function(t) {
        return -1 !== this.data.medias.indexOf(t.get("id"))
    },
    addMedia: function(t) {
        this.hasMedia(t) || this.data.medias.push(t.get("id"))
    },
    removeMedia: function(t) {
        for (var e = t.get("id"), n = 0; n < this.data.medias.length; n++) this.data.medias[n] === e && (this.data.medias.splice(n, 1), n--)
    },
    clone: function() {
        return new SL.models.MediaTag(JSON.parse(JSON.stringify(this.data)))
    },
    save: function(t) {
        var e = {
            tag: {}
        };
        return t ? t.forEach(function(t) {
            e.tag[t] = this.get(t)
        }.bind(this)) : e.tag = this.toJSON(), $.ajax({
            url: this.crud.update(this.get("id")),
            type: "PUT",
            data: e
        })
    },
    destroy: function() {
        return $.ajax({
            url: this.crud["delete"](this.get("id")),
            type: "DELETE"
        })
    }
}), SL("models").Media = SL.models.Model.extend({
    uploadStatus: "",
    uploadFile: null,
    init: function(t, e, n, i) {
        this._super(t), this.crud = $.extend({
            create: SL.config.AJAX_MEDIA_CREATE,
            update: SL.config.AJAX_MEDIA_UPDATE,
            "delete": SL.config.AJAX_MEDIA_DELETE
        }, e), n ? (this.uploadStatus = SL.models.Media.STATUS_UPLOAD_WAITING, this.uploadFile = n, this.uploadFilename = i) : this.uploadStatus = SL.models.Media.STATUS_UPLOADED, this.uploadStarted = new signals.Signal, this.uploadProgressed = new signals.Signal, this.uploadCompleted = new signals.Signal, this.uploadFailed = new signals.Signal
    },
    upload: function() {
        /\.svg$/i.test(this.uploadFile.name) && window.FileReader ? (SL.analytics.trackEditor("Media: SVG upload started"), this.reader = new window.FileReader, this.reader.addEventListener("abort", this.uploadValidated.bind(this)), this.reader.addEventListener("error", this.uploadValidated.bind(this)), this.reader.addEventListener("load", function(t) {
            var e = $("<div>" + t.target.result + "</div>").find("svg").get(0);
            if (e) {
                $(e).parent().find("*").contents().each(function() {
                    8 === this.nodeType && $(this).remove()
                });
                var n = e.hasAttribute("xmlns"),
                    i = e.hasAttribute("viewBox");
                if (hasWidthAndHeight = e.hasAttribute("width") && e.hasAttribute("height"), n || e.setAttribute("xmlns", "http://www.w3.org/2000/svg"), !i && hasWidthAndHeight && (e.setAttribute("viewBox", [0, 0, e.getAttribute("width"), e.getAttribute("height")].join(" ")), i = !0), !hasWidthAndHeight && i) {
                    var s = e.getAttribute("viewBox").split(" ");
                    4 === s.length && (e.setAttribute("width", s[2]), e.setAttribute("height", s[3]), hasWidthAndHeight = !0)
                }
                if (i && hasWidthAndHeight) {
                    var o = '<?xml version="1.0"?>\n' + e.parentNode.innerHTML;
                    this.uploadFilename = this.uploadFile.name || "image.svg", this.uploadFile = new Blob([o], {
                        type: "image/svg+xml"
                    }), this.uploadValidated()
                } else this.uploadStatus = SL.models.Media.STATUS_UPLOAD_FAILED, this.uploadFailed.dispatch("SVG error: missing viewBox or width/height"), SL.analytics.trackEditor("Media: SVG upload error", "missing viewBox or w/h")
            } else this.uploadStatus = SL.models.Media.STATUS_UPLOAD_FAILED, this.uploadFailed.dispatch("Invalid SVG: missing &lt;svg&gt; element"), SL.analytics.trackEditor("Media: SVG upload error", "missing svg element");
            this.reader = null
        }.bind(this)), this.reader.readAsText(this.uploadFile, "UTF-8")) : this.uploadValidated()
    },
    uploadValidated: function() {
        return this.uploader ? !1 : (this.uploader = new SL.helpers.FileUploader({
            file: this.uploadFile,
            filename: this.uploadFilename,
            service: this.crud.create,
            timeout: 6e4
        }), this.uploader.progressed.add(this.onUploadProgress.bind(this)), this.uploader.succeeded.add(this.onUploadSuccess.bind(this)), this.uploader.failed.add(this.onUploadError.bind(this)), this.uploader.upload(), this.uploadStatus = SL.models.Media.STATUS_UPLOADING, void this.uploadStarted.dispatch())
    },
    onUploadProgress: function(t) {
        this.uploadProgressed.dispatch(t)
    },
    onUploadSuccess: function(t) {
        this.uploader.destroy(), this.uploader = null;
        for (var e in t) this.set(e, t[e]);
        this.uploadStatus = SL.models.Media.STATUS_UPLOADED, this.uploadCompleted.dispatch()
    },
    onUploadError: function() {
        this.uploader.destroy(), this.uploader = null, this.uploadStatus = SL.models.Media.STATUS_UPLOAD_FAILED, this.uploadFailed.dispatch()
    },
    isWaitingToUpload: function() {
        return this.uploadStatus === SL.models.Media.STATUS_UPLOAD_WAITING
    },
    isUploading: function() {
        return this.uploadStatus === SL.models.Media.STATUS_UPLOADING
    },
    isUploaded: function() {
        return this.uploadStatus === SL.models.Media.STATUS_UPLOADED
    },
    isUploadFailed: function() {
        return this.uploadStatus === SL.models.Media.STATUS_UPLOAD_FAILED
    },
    isImage: function() {
        return /^image\//.test(this.get("content_type"))
    },
    isSVG: function() {
        return /^image\/svg/.test(this.get("content_type"))
    },
    isVideo: function() {
        return /^video\//.test(this.get("content_type"))
    },
    clone: function() {
        return new SL.models.Media(JSON.parse(JSON.stringify(this.data)))
    },
    save: function(t) {
        var e = {
            media: {}
        };
        return t ? t.forEach(function(t) {
            e.media[t] = this.get(t)
        }.bind(this)) : e.media = this.toJSON(), $.ajax({
            url: this.crud.update(this.get("id")),
            type: "PUT",
            data: e
        })
    },
    destroy: function() {
        return this.uploadFile = null, this.uploadStarted && this.uploadStarted.dispose(), this.uploadProgressed && this.uploadProgressed.dispose(), this.uploadCompleted && this.uploadCompleted.dispose(), this.uploadFailed && this.uploadFailed.dispose(), this.uploader && (this.uploader.destroy(), this.uploader = null), $.ajax({
            url: this.crud["delete"](this.get("id")),
            type: "DELETE"
        })
    }
}), SL.models.Media.STATUS_UPLOAD_WAITING = "waiting", SL.models.Media.STATUS_UPLOADING = "uploading", SL.models.Media.STATUS_UPLOADED = "uploaded", SL.models.Media.STATUS_UPLOAD_FAILED = "upload-failed", SL.models.Media.IMAGE = {
    id: "image",
    filter: function(t) {
        return t.isImage()
    }
}, SL.models.Media.SVG = {
    id: "svg",
    filter: function(t) {
        return t.isSVG()
    }
}, SL.models.Media.VIDEO = {
    id: "video",
    filter: function(t) {
        return t.isVideo()
    }
}, SL("models").Team = SL.models.Model.extend({
    init: function(t) {
        if (this._super(t), "object" == typeof this.data.themes)
            for (var e = 0, n = this.data.themes.length; n > e; e++) this.data.themes[e] = new SL.models.Theme(this.data.themes[e]);
        this.set("themes", new SL.collections.Collection(this.data.themes))
    },
    hasThemes: function() {
        var t = this.get("themes");
        return t && t.size() > 0
    },
    clone: function() {
        return new SL.models.Team(JSON.parse(JSON.stringify(this.data)))
    }
}), SL("models").Template = SL.models.Model.extend({
    init: function(t) {
        this._super(t)
    },
    isAvailableForTheme: function(t) {
        return t.hasSlideTemplate(this.get("id")) || this.isAvailableForAllThemes()
    },
    isAvailableForAllThemes: function() {
        var t = this.get("id");
        return !SL.current_user.getThemes().some(function(e) {
            return e.hasSlideTemplate(t)
        })
    }
}), SL("models").ThemeSnippet = SL.models.Model.extend({
    init: function(t) {
        this._super(t), this.has("title") || this.set("title", ""), this.has("template") || this.set("template", "")
    },
    templatize: function(t) {
        var e = this.get("template");
        return e && (e = e.split(SL.models.ThemeSnippet.TEMPLATE_SELECTION_TAG).join(""), t.forEach(function(t) {
            e = e.replace(t.string, t.value || t.defaultValue)
        })), e
    },
    getTemplateVariables: function() {
        var t = this.get("template");
        if (t) {
            t = t.split(SL.models.ThemeSnippet.TEMPLATE_SELECTION_TAG).join("");
            var e = t.match(SL.models.ThemeSnippet.TEMPLATE_VARIABLE_REGEX);
            if (e) return e = e.map(function(t) {
                var e = t.split(SL.models.ThemeSnippet.TEMPLATE_VARIABLE_DIVIDER),
                    n = {
                        string: t,
                        label: e[0] || "",
                        defaultValue: e[1] || ""
                    };
                return n.label = n.label.trim(), n.defaultValue = n.defaultValue.trim(), n.label = n.label.replace(SL.models.ThemeSnippet.TEMPLATE_VARIABLE_OPENER, ""), n.label = n.label.replace(SL.models.ThemeSnippet.TEMPLATE_VARIABLE_CLOSER, ""), n.defaultValue = n.defaultValue.replace(SL.models.ThemeSnippet.TEMPLATE_VARIABLE_OPENER, ""), n.defaultValue = n.defaultValue.replace(SL.models.ThemeSnippet.TEMPLATE_VARIABLE_CLOSER, ""), n
            })
        }
        return []
    },
    templateHasVariables: function() {
        return this.getTemplateVariables().length > 0
    },
    templateHasSelection: function() {
        var t = this.get("template");
        return t ? t.indexOf(SL.models.ThemeSnippet.TEMPLATE_SELECTION_TAG) > -1 : !1
    },
    isEmpty: function() {
        return !this.get("title") && !this.get("template")
    }
}), SL.models.ThemeSnippet.TEMPLATE_VARIABLE_OPENER = "{{", SL.models.ThemeSnippet.TEMPLATE_VARIABLE_CLOSER = "}}", SL.models.ThemeSnippet.TEMPLATE_VARIABLE_DIVIDER = "::", SL.models.ThemeSnippet.TEMPLATE_VARIABLE_REGEX = /\{\{.*?\}\}/gi, SL.models.ThemeSnippet.TEMPLATE_SELECTION_TAG = "{{selection}}", SL("models").Theme = SL.models.Model.extend({
    init: function(t) {
        this._super(t), this.has("name") || this.set("name", "Untitled"), this.set("slide_template_ids", new SL.collections.Collection(this.data.slide_template_ids)), this.loading = !1
    },
    load: function() {
        return this.loading = !0, $.ajax({
            type: "GET",
            url: SL.config.AJAX_THEMES_READ(this.get("id")),
            context: this
        }).done(function(t) {
            if (this.data = $.extend(t, this.data), this.has("font") || this.set("font", SL.config.DEFAULT_THEME_FONT), this.has("color") || this.set("color", SL.config.DEFAULT_THEME_COLOR), this.has("transition") || this.set("transition", SL.config.DEFAULT_THEME_TRANSITION), this.has("background_transition") || this.set("background_transition", SL.config.DEFAULT_THEME_BACKGROUND_TRANSITION), "string" == typeof this.data.snippets && this.data.snippets.length > 0) try {
                this.data.snippets = JSON.parse(this.data.snippets)
            } catch (e) {
                console.warn("Malformed snippets JSON")
            }
            this.set("snippets", new SL.collections.Collection(this.data.snippets, SL.models.ThemeSnippet)), "string" == typeof this.data.palette && this.data.palette.length > 0 ? (this.data.palette = this.data.palette.split(","), this.data.palette = this.data.palette.map(function(t) {
                return t.trim()
            })) : this.data.palette = []
        }).always(function() {
            this.loading = !1
        })
    },
    hasSlideTemplate: function(t) {
        return this.get("slide_template_ids").contains(t)
    },
    addSlideTemplate: function(t) {
        var e = this.get("slide_template_ids");
        return t.forEach(function(t) {
            e.contains(t) || e.push(t)
        }), $.ajax({
            type: "POST",
            url: SL.config.AJAX_THEME_ADD_SLIDE_TEMPLATE(this.get("id")),
            context: this,
            data: {
                slide_template_ids: t
            }
        })
    },
    removeSlideTemplate: function(t) {
        var e = this.get("slide_template_ids");
        return t.forEach(function(t) {
            e.remove(t)
        }), $.ajax({
            type: "DELETE",
            url: SL.config.AJAX_THEME_REMOVE_SLIDE_TEMPLATE(this.get("id")),
            context: this,
            data: {
                slide_template_ids: t
            }
        })
    },
    hasThumbnail: function() {
        return !!this.get("thumbnail_url")
    },
    hasJavaScript: function() {
        return !!this.get("js")
    },
    hasPalette: function() {
        return this.get("palette").length > 0
    },
    isTransitionDeprecated: function() {
        var t = this.get("transition");
        return SL.config.THEME_TRANSITIONS.some(function(e) {
            return e.id === t && e.deprecated === !0
        })
    },
    isBackgroundTransitionDeprecated: function() {
        var t = this.get("background_transition");
        return SL.config.THEME_BACKGROUND_TRANSITIONS.some(function(e) {
            return e.id === t && e.deprecated === !0
        })
    },
    isLoading: function() {
        return this.loading
    },
    clone: function() {
        return new SL.models.Theme(JSON.parse(JSON.stringify(this.toJSON())))
    },
    toJSON: function() {
        return {
            id: this.get("id"),
            name: this.get("name"),
            center: this.get("center"),
            rolling_links: this.get("rolling_links"),
            font: this.get("font"),
            color: this.get("color"),
            transition: this.get("transition"),
            background_transition: this.get("background_transition"),
            html: this.get("html"),
            less: this.get("less"),
            css: this.get("css"),
            js: this.get("js"),
            snippets: this.has("snippets") ? JSON.stringify(this.get("snippets").toJSON()) : null,
            palette: this.has("palette") ? this.get("palette").join(",") : null
        }
    }
}), SL("models").Theme.fromDeck = function(t) {
    return new SL.models.Theme({
        id: t.theme_id,
        name: "",
        center: t.center,
        rolling_links: t.rolling_links,
        font: t.theme_font,
        color: t.theme_color,
        transition: t.transition,
        background_transition: t.background_transition,
        snippets: "",
        palette: []
    })
}, SL("models").UserSettings = SL.models.Model.extend({
    init: function(t) {
        this._super(t), this.has("present_controls") || this.set("present_controls", SL.config.PRESENT_CONTROLS_DEFAULT), this.has("present_upsizing") || this.set("present_upsizing", SL.config.PRESENT_UPSIZING_DEFAULT)
    },
    save: function(t) {
        var e = {
            user_settings: {}
        };
        return t ? t.forEach(function(t) {
            e.user_settings[t] = this.get(t)
        }.bind(this)) : e.user_settings = this.toJSON(), $.ajax({
            url: SL.config.AJAX_UPDATE_USER_SETTINGS,
            type: "PUT",
            data: e
        })
    },
    clone: function() {
        return new SL.models.UserSettings(JSON.parse(JSON.stringify(this.data)))
    }
}), SL("models").User = Class.extend({
    init: function(t) {
        this.data = t || {}, $.extend(this, this.data), this.settings = new SL.models.UserSettings(this.data.settings)
    },
    isPro: function() {
        return !!this.pro
    },
    isEnterprise: function() {
        return !!this.enterprise
    },
    isEnterpriseManager: function() {
        return !!this.enterprise_manager
    },
    get: function(t) {
        return this[t]
    },
    set: function(t, e) {
        this[t] = e
    },
    has: function(t) {
        var e = this.get(t);
        return !!e || e === !1 || 0 === e
    },
    hasThemes: function() {
        return SL.current_team ? SL.current_team.hasThemes() : void 0
    },
    getThemes: function() {
        return SL.current_team ? SL.current_team.get("themes") : new SL.collections.Collection
    },
    hasDefaultTheme: function() {
        return !!this.getDefaultTheme()
    },
    getDefaultTheme: function() {
        var t = this.getThemes();
        return t.getByProperties(SL.current_team ? {
            id: SL.current_team.get("default_theme_id")
        } : {
            id: this.default_theme_id
        })
    },
    getProfileURL: function() {
        return "/" + this.username
    },
    getNameOrSlug: function() {
        return this.name || this.username
    }
}), SL("data").templates = {
    NEW_DECK_TEMPLATE: {
        html: ["<section>", '<div class="sl-block" data-block-type="text" style="width: 800px; left: 80px; top: 250px;">', '<div class="sl-block-content" data-placeholder-tag="h1" data-placeholder-text="Title Text">', "<h1>Title Text</h1>", "</div>", "</div>", "</section>"].join("")
    },
    DEFAULT_TEMPLATES_DUPLICATE_INDEX: 1,
    DEFAULT_TEMPLATES: [{
        label: "Blank",
        html: ""
    }, {
        label: "Duplicate",
        html: ""
    }, {
        html: ["<section>", '<div class="sl-block" data-block-type="text" style="width: 800px; left: 80px; top: 270px;">', '<div class="sl-block-content" data-placeholder-tag="h1" data-placeholder-text="Title Text">', "<h1>Title Text</h1>", "</div>", "</div>", "</section>"].join("")
    }, {
        html: ["<section>", '<div class="sl-block" data-block-type="text" style="width: 800px; left: 80px; top: 190px;">', '<div class="sl-block-content" data-placeholder-tag="h1" data-placeholder-text="Title Text">', "<h1>Title Text</h1>", "</div>", "</div>", '<div class="sl-block" data-block-type="text" style="width: 800px; left: 80px; top: 255px;" data-layout-method="belowPreviousBlock">', '<div class="sl-block-content" data-placeholder-tag="h2" data-placeholder-text="Subtitle">', "<h2>Subtitle</h2>", "</div>", "</div>", "</section>"].join("")
    }, {
        html: ["<section>", '<div class="sl-block" data-block-type="text" style="width: 800px; left: 80px; top: 190px;">', '<div class="sl-block-content" data-placeholder-tag="h2" data-placeholder-text="Title Text">', "<h2>Title Text</h2>", "</div>", "</div>", '<div class="sl-block" data-block-type="text" style="width: 800px; left: 80px; top: 264px;" data-layout-method="belowPreviousBlock">', '<div class="sl-block-content">', "<ul>", "<li>Bullet One</li>", "<li>Bullet Two</li>", "<li>Bullet Three</li>", "</ul>", "</div>", "</div>", "</section>"].join("")
    }, {
        html: ["<section>", '<div class="sl-block" data-block-type="text" style="width: 410px; left: 49px; top: 106px; height: auto;">', '<div class="sl-block-content" data-placeholder-tag="h2" data-placeholder-text="Title Text" style="text-align: left;">', "<h2>Title Text</h2>", "</div>", "</div>", '<div class="sl-block" data-block-type="text" style="width: 410px; left: 49px; top: 200px; height: auto;">', '<div class="sl-block-content" data-placeholder-tag="p" data-placeholder-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin urna odio, aliquam vulputate faucibus id, elementum lobortis felis. Mauris urna dolor, placerat ac sagittis quis." style="text-align: left;">', "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin urna odio, aliquam vulputate faucibus id, elementum lobortis felis. Mauris urna dolor, placerat ac sagittis quis.</p>", "</div>", "</div>", '<div class="sl-block" data-block-type="text" style="width: 410px; left: 499px; top: 106px; height: auto;">', '<div class="sl-block-content" data-placeholder-tag="h2" data-placeholder-text="Title Text" style="text-align: left;">', "<h2>Title Text</h2>", "</div>", "</div>", '<div class="sl-block" data-block-type="text" style="width: 410px; left: 499px; top: 200px; height: auto;">', '<div class="sl-block-content" data-placeholder-tag="p" data-placeholder-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin urna odio, aliquam vulputate faucibus id, elementum lobortis felis. Mauris urna dolor, placerat ac sagittis quis." style="text-align: left;">', "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin urna odio, aliquam vulputate faucibus id, elementum lobortis felis. Mauris urna dolor, placerat ac sagittis quis.</p>", "</div>", "</div>", "</section>"].join("")
    }, {
        html: ["<section>", '<div class="sl-block" data-block-type="text" style="width: 900px; left: 30px; top: 58px; height: auto;">', '<div class="sl-block-content" data-placeholder-tag="h1" style="font-size: 200%; text-align: left;">', "<h1>One<br>Two<br>Three</h1>", "</div>", "</div>", "</section>"].join("")
    }, {
        html: ["<section>", '<div class="sl-block" data-block-type="text" style="width: 800px; left: 79px; top: 50px;">', '<div class="sl-block-content" data-placeholder-tag="h2" data-placeholder-text="Title Text">', "<h2>Title Text</h2>", "</div>", "</div>", '<div class="sl-block" data-block-type="image" style="width: 700px; height: 475px; left: 129px; top: 144px;">', '<div class="sl-block-content">', '<div class="editing-ui sl-block-overlay sl-block-placeholder"></div>', "</div>", "</div>", "</section>"].join("")
    }, {
        html: ["<section>", '<div class="sl-block" data-block-type="text" style="width: 430px; left: 23px; top: 87px;">', '<div class="sl-block-content" data-placeholder-tag="h2" data-placeholder-text="Title Text" style="text-align: left;">', "<h2>Title Text</h2>", "</div>", "</div>", '<div class="sl-block" data-block-type="text" style="width: 430px; left: 23px; top: 161px;" data-layout-method="belowPreviousBlock">', '<div class="sl-block-content" data-placeholder-tag="p" data-placeholder-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec metus justo. Aliquam erat volutpat." style="z-index: 13; text-align: left;">', "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec metus justo. Aliquam erat volutpat.</p>", "</div>", "</div>", '<div class="sl-block" data-block-type="image" style="width: 454px; height: 641px; left: 479px; top: 29px;">', '<div class="sl-block-content">', '<div class="editing-ui sl-block-overlay sl-block-placeholder"></div>', "</div>", "</div>", "</section>"].join("")
    }, {
        html: ["<section>", '<div class="sl-block" data-block-type="image" style="width: 700px; height: 475px; left: 130px; top: 65px;">', '<div class="sl-block-content">', '<div class="editing-ui sl-block-overlay sl-block-placeholder"></div>', "</div>", "</div>", '<div class="sl-block" data-block-type="text" style="width: 800px; left: 80px; top: 575px;">', '<div class="sl-block-content" data-placeholder-tag="h2" data-placeholder-text="Title Text">', "<h2>Title Text</h2>", "</div>", "</div>", "</section>"].join("")
    }],
    LAYOUT_METHODS: {
        belowPreviousBlock: function(t, e) {
            var n = e.prev().get(0);
            n && e.css("top", n.offsetTop + n.offsetHeight)
        }
    },
    getNewDeckTemplate: function() {
        return new SL.models.Template(SL.data.templates.NEW_DECK_TEMPLATE)
    },
    getDefaultTemplates: function() {
        return new SL.collections.Collection(SL.data.templates.DEFAULT_TEMPLATES, SL.models.Template)
    },
    userTemplatesLoaded: !1,
    userTemplatesLoading: !1,
    userTemplatesCallbacks: [],
    getUserTemplates: function(t) {
        t = t || function() {}, SL.data.templates.userTemplatesLoading === !1 && SL.data.templates.userTemplatesLoaded === !1 ? (SL.data.templates.userTemplatesLoading = !0, SL.data.templates.userTemplatesCallbacks.push(t), $.ajax({
            type: "GET",
            url: SL.config.AJAX_SLIDE_TEMPLATES_LIST,
            context: this
        }).done(function(t) {
            SL.data.templates.userTemplates = new SL.collections.Collection(t.results, SL.models.Template), SL.data.templates.userTemplatesLoaded = !0, SL.data.templates.userTemplatesLoading = !1, SL.data.templates.userTemplatesCallbacks.forEach(function(t) {
                t.call(null, SL.data.templates.userTemplates)
            }), SL.data.templates.userTemplatesCallbacks.length = 0
        }).fail(function() {
            SL.data.templates.userTemplatesLoading = !1, SL.notify(SL.locale.get("TEMPLATE_LOAD_ERROR"), "negative")
        })) : SL.data.templates.userTemplatesLoading ? SL.data.templates.userTemplatesCallbacks.push(t) : t.call(null, SL.data.templates.userTemplates)
    },
    teamTemplatesLoaded: !1,
    teamTemplatesLoading: !1,
    teamTemplatesCallbacks: [],
    getTeamTemplates: function(t) {
        SL.current_user.isEnterprise() && (t = t || function() {}, SL.data.templates.teamTemplatesLoading === !1 && SL.data.templates.teamTemplatesLoaded === !1 ? (SL.data.templates.teamTemplatesLoading = !0, SL.data.templates.teamTemplatesCallbacks.push(t), $.ajax({
            type: "GET",
            url: SL.config.AJAX_TEAM_SLIDE_TEMPLATES_LIST,
            context: this
        }).done(function(t) {
            SL.data.templates.teamTemplates = new SL.collections.Collection(t.results, SL.models.Template), SL.data.templates.teamTemplatesLoaded = !0, SL.data.templates.teamTemplatesLoading = !1, SL.data.templates.teamTemplatesCallbacks.forEach(function(t) {
                t.call(null, SL.data.templates.teamTemplates)
            }), SL.data.templates.teamTemplatesCallbacks.length = 0
        }).fail(function() {
            SL.data.templates.teamTemplatesLoading = !1, SL.notify(SL.locale.get("TEMPLATE_LOAD_ERROR"), "negative")
        })) : SL.data.templates.teamTemplatesLoading ? SL.data.templates.teamTemplatesCallbacks.push(t) : t.call(null, SL.data.templates.teamTemplates))
    },
    layoutTemplate: function(t, e) {
        t.find(".sl-block").each(function(n, i) {
            i = $(i);
            var s = i.attr("data-layout-method");
            s && "function" == typeof SL.data.templates.LAYOUT_METHODS[s] && (e || i.removeAttr("data-layout-method"), SL.data.templates.LAYOUT_METHODS[s](t, i))
        })
    },
    templatize: function(t, e) {
        t = $(t), e = $.extend({
            placeholderText: !1,
            zIndex: !0
        }, e);
        var n = SL.editor.controllers.Serialize.getSlideAsString(t, {
                templatize: !0,
                inner: !0
            }),
            i = $("<section>" + n + "</section>");
        return i.children().each(function(t, n) {
            n = $(n), n.css({
                "min-width": "",
                "min-height": ""
            });
            var i = n.find(".sl-block-content");
            if (e.placeholderText && "text" === n.attr("data-block-type") && 1 === i.children().length) {
                var s = $(i.children()[0]);
                s.is("h1, h2") ? (s.html("Title Text"), i.attr("data-placeholder-text", "Title Text")) : s.is("p") && i.attr("data-placeholder-text", s.text().trim())
            }
            e.zIndex === !1 && i.css("z-index", "")
        }), ["class", "data-autoslide", "data-transition", "data-transition-speed", "data-background", "data-background-color", "data-background-image", "data-background-size"].forEach(function(e) {
            t.attr(e) && i.attr(e, t.attr(e))
        }), i.removeClass("past present future"), i.prop("outerHTML").trim()
    }
}, SL("data").tokens = {
    get: function(t, e) {
        e = e || {}, this._addCallbacks(t, e.success, e.error), "object" == typeof this.cache[t] ? this._triggerSuccessCallback(t, this.cache[t]) : "loading" !== this.cache[t] && (this.cache[t] = "loading", $.ajax({
            type: "GET",
            context: this,
            url: SL.config.AJAX_ACCESS_TOKENS_LIST(t)
        }).done(function(e) {
            var n = new SL.collections.Collection(e.results, SL.models.AccessToken);
            this.cache[t] = n, this._triggerSuccessCallback(t, n)
        }).fail(function(e) {
            delete this.cache[t], this._triggerErrorCallback(t, e.status)
        }))
    },
    create: function(t, e) {
        e = $.extend({
            success: function() {},
            error: function() {}
        }, e), SL.data.tokens.get(t, {
            success: function(n) {
                $.ajax({
                    type: "POST",
                    context: this,
                    url: SL.config.AJAX_ACCESS_TOKENS_CREATE(t),
                    data: {
                        access_token: {
                            name: n.getUniqueName("Link", "name", !0)
                        }
                    }
                }).done(function(t) {
                    e.success.call(null, n.create(t))
                }).fail(function() {
                    e.error.call()
                })
            }.bind(this),
            error: function() {
                console.warn("Failed to load token collection for deck " + t)
            }.bind(this)
        })
    },
    cache: {},
    callbacks: {},
    _addCallbacks: function(t, e, n) {
        this.callbacks[t] || (this.callbacks[t] = {
            success: [],
            error: []
        }), e && this.callbacks[t].success.push(e), n && this.callbacks[t].error.push(n)
    },
    _triggerSuccessCallback: function(t, e) {
        var n = this.callbacks[t];
        if (n) {
            for (; n.success.length;) n.success.pop().call(null, e);
            n.success = [], n.error = []
        }
    },
    _triggerErrorCallback: function(t, e) {
        var n = this.callbacks[t];
        if (n) {
            for (; n.error.length;) n.error.pop().call(null, e);
            n.success = [], n.error = []
        }
    }
}, SL.util = {
    getQuery: function() {
        var t = {};
        return location.search.replace(/[A-Z0-9]+?=([\w%]*)/gi, function(e) {
            t[e.split("=").shift()] = unescape(e.split("=").pop())
        }), t
    },
    getMetaKeyName: function() {
        return SL.util.device.isMac() ? "&#8984" : "CTRL"
    },
    escapeHTMLEntities: function(t) {
        return t = t || "", t = t.split("<").join("&lt;"), t = t.split(">").join("&gt;")
    },
    unescapeHTMLEntities: function(t) {
        var e = document.createElement("div");
        e.innerHTML = t || "";
        var n = 0 === e.childNodes.length ? "" : e.childNodes[0].nodeValue;
        return n || ""
    },
    toArray: function(t) {
        for (var e = [], n = 0, i = t.length; i > n; n++) e.push(t[n]);
        return e
    },
    skipCSSTransitions: function(t, e) {
        t = $(t ? t : "html");
        var n = typeof t.get(0);
        ("undefined" === n || "number" === n) && console.warn("Bad target for skipCSSTransitions."), t.addClass("no-transition"), setTimeout(function() {
            t.removeClass("no-transition")
        }, e || 1)
    },
    setupReveal: function(t) {
        if ("undefined" != typeof Reveal) {
            var e = {
                controls: !0,
                progress: !0,
                history: !1,
                mouseWheel: !1,
                margin: .05,
                autoSlideStoppable: !0,
                dependencies: [{
                    src: SL.config.ASSET_URLS["reveal-plugins/markdown/marked.js"],
                    condition: function() {
                        return !!document.querySelector(".reveal [data-markdown]")
                    }
                }, {
                    src: SL.config.ASSET_URLS["reveal-plugins/markdown/markdown.js"],
                    condition: function() {
                        return !!document.querySelector(".reveal [data-markdown]")
                    }
                }, {
                    src: SL.config.ASSET_URLS["reveal-plugins/highlight/highlight.js"],
                    async: !0,
                    condition: function() {
                        return !!document.querySelector(".reveal pre code")
                    },
                    callback: function() {
                        hljs.initHighlighting(), hljs.initHighlightingOnLoad()
                    }
                }]
            };
            if (SLConfig && SLConfig.deck && (e.autoSlide = SLConfig.deck.auto_slide_interval || 0, e.rollingLinks = SLConfig.deck.rolling_links, e.center = SLConfig.deck.center, e.loop = SLConfig.deck.should_loop, e.rtl = SLConfig.deck.rtl, e.transition = SLConfig.deck.transition || "default", e.backgroundTransition = SLConfig.deck.background_transition), $.extend(e, t), Reveal.initialize(e), Reveal.addEventListener("ready", function() {
                    window.STATUS = window.STATUS || {}, window.STATUS.REVEAL_IS_READY = !0, $("html").addClass("reveal-is-ready")
                }), t && t.openLinksInTabs && this.openLinksInTabs($(".reveal .slides")), t && t.trackEvents) {
                var n = [];
                Reveal.addEventListener("slidechanged", function() {
                    var t = Reveal.getProgress();
                    t >= .5 && !n[0] && (n[0] = !0, SL.analytics.trackPresenting("Presentation progress: 50%")), t >= 1 && !n[1] && (n[1] = !0, SL.analytics.trackPresenting("Presentation progress: 100%")), SL.analytics.trackCurrentSlide()
                })
            }
            SL.util.deck.injectNotes()
        }
    },
    openLinksInTabs: function(t) {
        t && t.find("a").each(function() {
            var t = $(this),
                e = t.attr("href");
            /^#/gi.test(e) === !0 || this.hasAttribute("download") ? t.removeAttr("target") : /http|www/gi.test(e) ? t.attr("target", "_blank") : t.attr("target", "_top")
        })
    },
    openPopupWindow: function(t, e, n, i) {
        var s = screen.width / 2 - n / 2,
            o = screen.height / 2 - i / 2;
        return window.open(t, e, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + n + ", height=" + i + ", top=" + o + ", left=" + s)
    },
    layoutReveal: function(t, e) {
        if (clearInterval(this.revealLayoutInterval), clearTimeout(this.revealLayoutTimeout), 1 === arguments.length) this.revealLayoutTimeout = setTimeout(Reveal.layout, t);
        else {
            if (2 !== arguments.length) throw "Illegal arguments, expected (duration[, fps])";
            this.revealLayoutInterval = setInterval(Reveal.layout, e), this.revealLayoutTimeout = setTimeout(function() {
                clearInterval(this.revealLayoutInterval)
            }.bind(this), t)
        }
    },
    getRevealSlideBounds: function(t, e) {
        t = t || SL.editor.controllers.Markup.getCurrentSlide();
        var n = t.offset(),
            i = Reveal.getScale(),
            s = n.left * i,
            o = n.top * i;
        if (e) {
            var a = $(".projector").offset();
            a && (s -= a.left, o -= a.top)
        }
        return {
            x: s,
            y: o,
            width: t.outerWidth() * i,
            height: t.outerHeight() * i
        }
    },
    getRevealSlidesBounds: function(t) {
        var e = $(".reveal .slides"),
            n = e.offset(),
            i = Reveal.getScale(),
            s = n.left * i,
            o = n.top * i;
        if (t) {
            var a = $(".projector").offset();
            a && (s -= a.left, o -= a.top)
        }
        return {
            x: s,
            y: o,
            width: e.outerWidth() * i,
            height: e.outerHeight() * i
        }
    },
    getRevealElementOffset: function(t, e) {
        t = $(t);
        var n = {
            x: 0,
            y: 0
        };
        if (t.parents("section").length)
            for (; t.length && !t.is("section");) n.x += t.get(0).offsetLeft, n.y += t.get(0).offsetTop, e && (n.x -= parseInt(t.css("margin-left"), 10), n.y -= parseInt(t.css("margin-top"), 10)), t = $(t.get(0).offsetParent);
        return n
    },
    getRevealElementGlobalOffset: function(t) {
        var e = $(t),
            n = e.closest(".reveal"),
            i = {
                x: 0,
                y: 0
            };
        if (e.length && n.length) {
            var s = Reveal.getConfig(),
                o = Reveal.getScale(),
                a = n.get(0).getBoundingClientRect(),
                r = {
                    x: a.left + a.width / 2,
                    y: a.top + a.height / 2
                },
                l = s.width * o,
                c = s.height * o;
            i.x = r.x - l / 2, i.y = r.y - c / 2;
            var d = e.closest(".slides section");
            d.length && (i.y -= d.scrollTop() * o);
            var u = SL.util.getRevealElementOffset(e);
            i.x += u.x * o, i.y += u.y * o
        }
        return i
    },
    getRevealCounterScale: function() {
        return window.Reveal ? 2 - Reveal.getScale() : 1
    },
    globalToRevealCoordinate: function(t, e) {
        var n = SL.util.getRevealSlideBounds(),
            i = SL.util.getRevealCounterScale();
        return {
            x: (t - n.x) * i,
            y: (e - n.y) * i
        }
    },
    globalToProjectorCoordinate: function(t, e) {
        var n = {
                x: t,
                y: e
            },
            i = $(".projector").offset();
        return i && (n.x -= i.left, n.y -= i.top), n
    },
    hideAddressBar: function() {
        if (SL.util.device.IS_PHONE && !/crios/gi.test(navigator.userAgent)) {
            var t = function() {
                setTimeout(function() {
                    window.scrollTo(0, 1)
                }, 10)
            };
            $(window).on("orientationchange", function() {
                t()
            }), t()
        }
    },
    callback: function() {
        "function" == typeof arguments[0] && arguments[0].apply(null, [].slice.call(arguments, 1))
    },
    getPlaceholderImage: function(t) {
        var e = "";
        return t && "function" == typeof window.btoa && (e = window.btoa(Math.random().toString()).replace(/=/g, "")), "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" + e
    },
    isTypingEvent: function(t) {
        return $(t.target).is('input:not([type="file"]), textarea, [contenteditable]')
    }
}, SL.util.user = {
    isLoggedIn: function() {
        return "object" == typeof SLConfig && "object" == typeof SLConfig.current_user
    },
    isPro: function() {
        return SL.util.user.isLoggedIn() ? SLConfig.current_user.pro : null
    },
    isEnterprise: function() {
        return SL.util.user.isLoggedIn() ? SLConfig.current_user.enterprise : null
    }
}, SL.util.device = {
    HAS_TOUCH: !!("ontouchstart" in window),
    IS_PHONE: /iphone|ipod|android|windows\sphone/gi.test(navigator.userAgent),
    IS_TABLET: /ipad/gi.test(navigator.userAgent),
    isMac: function() {
        return /Mac/.test(navigator.platform)
    },
    isWindows: function() {
        return /Win/g.test(navigator.platform)
    },
    isLinux: function() {
        return /Linux/g.test(navigator.platform)
    },
    isIE: function() {
        return /MSIE\s[0-9]/gi.test(navigator.userAgent) || /Trident\/7.0;(.*)rv:\d\d/.test(navigator.userAgent)
    },
    isChrome: function() {
        return /chrome/gi.test(navigator.userAgent)
    },
    isSafari: function() {
        return /safari/gi.test(navigator.userAgent) && !SL.util.device.isChrome()
    },
    isSafariDesktop: function() {
        return SL.util.device.isSafari() && !SL.util.device.isChrome() && !SL.util.device.IS_PHONE && !SL.util.device.IS_TABLET
    },
    isOpera: function() {
        return !!window.opera
    },
    isFirefox: function() {
        return /firefox\/\d+\.?\d+/gi.test(navigator.userAgent)
    },
    isPhantomJS: function() {
        return /PhantomJS/gi.test(navigator.userAgent)
    },
    supportedByEditor: function() {
        return Modernizr.history && Modernizr.csstransforms && !SL.util.device.isOpera()
    },
    getScrollBarWidth: function() {
        var t = $("<div>").css({
            width: "100px",
            height: "100px",
            overflow: "scroll",
            position: "absolute",
            top: "-9999px"
        });
        t.appendTo(document.body);
        var e = t.prop("offsetWidth") - t.prop("clientWidth");
        return t.remove(), e
    }
}, SL.util.trig = {
    distanceBetween: function(t, e) {
        var n = t.x - e.x,
            i = t.y - e.y;
        return Math.sqrt(n * n + i * i)
    },
    intersection: function(t, e) {
        return {
            width: Math.max(0, Math.min(t.x + t.width, e.x + e.width) - Math.max(t.x, e.x)),
            height: Math.max(0, Math.min(t.y + t.height, e.y + e.height) - Math.max(t.y, e.y))
        }
    },
    intersects: function(t, e, n) {
        "undefined" == typeof n && (n = 0);
        var i = SL.util.trig.intersection(t, e);
        return i.width > t.width * n && i.height > t.height * n
    }
}, SL.util.string = {
    URL_REGEX: /((https?\:\/\/)|(www\.)|(\/\/))(\S+)(\w{2,4})(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/i,
    SCRIPT_TAG_REGEX: /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    uniqueIDCount: 0,
    uniqueID: function(t) {
        return SL.util.string.uniqueIDCount += 1, (t || "") + SL.util.string.uniqueIDCount + "-" + Date.now()
    },
    slug: function(t) {
        return "string" == typeof t ? (t = SL.util.string.trim(t), t = t.toLowerCase(), t = t.replace(/-/g, " "), t = t.replace(/[^\w\s]/g, ""), t = t.replace(/\s{2,}/g, " "), t = t.replace(/\s/g, "-")) : ""
    },
    trim: function(t) {
        return SL.util.string.trimRight(SL.util.string.trimLeft(t))
    },
    trimLeft: function(t) {
        return "string" == typeof t ? t.replace(/^\s+/, "") : ""
    },
    trimRight: function(t) {
        return "string" == typeof t ? t.replace(/\s+$/, "") : ""
    },
    linkify: function(t) {
        return t && (t = t.replace(/((https?\:\/\/)|(www\.))(\S+)(\w{2,4})(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/gi, function(t) {
            var e = t;
            return e.match("^https?://") || (e = "http://" + e), '<a href="' + e + '">' + t + "</a>"
        })), t
    },
    pluralize: function(t, e, n) {
        return n ? t + e : t
    },
    getCustomClassesFromLESS: function(t) {
        var e = (t || "").match(/\/\/=[a-z0-9-_ \t]{2,}(?=\n)?/gi);
        return e ? e.map(function(t) {
            return t = t.replace("//=", ""), t = t.trim(), t = t.toLowerCase(), t = t.replace(/\s/g, "-")
        }) : []
    }
}, SL.util.validate = {
    name: function() {
        return []
    },
    slug: function(t) {
        t = t || "";
        var e = [];
        return t.length < 2 && e.push("At least 2 characters"), /\s/gi.test(t) && e.push("No spaces please"), /^[\w-_]+$/gi.test(t) || e.push("Can only contain: A-Z, 0-9, - and _"), e
    },
    username: function(t) {
        return SL.util.validate.slug(t)
    },
    team_slug: function(t) {
        return SL.util.validate.slug(t)
    },
    password: function(t) {
        t = t || "";
        var e = [];
        return t.length < 6 && e.push("At least 6 characters"), e
    },
    email: function(t) {
        t = t || "";
        var e = [];
        return /^[A-Z0-9._%+\-]+@[A-Z0-9.\-]+\.[A-Z]{2,}$/gi.test(t) || e.push("Please enter a valid email"), e
    },
    twitterhandle: function(t) {
        t = t || "";
        var e = [];
        return t.length > 15 && e.push("15 characters max"), /\s/gi.test(t) && e.push("No spaces please"), /^[\w-_]+$/gi.test(t) || e.push("Can only contain: A-Z, 0-9 and _"), e
    },
    url: function(t) {
        t = t || "";
        var e = [];
        return t.length < 4 && e.push("Please enter a valid URL"), /\s/gi.test(t) && e.push("No spaces please"), e
    },
    decktitle: function(t) {
        t = t || "";
        var e = [];
        return 0 === t.length && e.push("Can not be empty"), e
    },
    deckslug: function(t) {
        t = t || "";
        var e = [];
        return 0 === t.length && e.push("Can not be empty"), e
    },
    google_analytics_id: function(t) {
        t = t || "";
        var e = [];
        return /\bUA-\d{4,20}-\d{1,10}\b/gi.test(t) || e.push("Please enter a valid ID"), e
    },
    none: function() {
        return []
    }
}, SL.util.dom = {
    scrollIntoViewIfNeeded: function(t) {
        t && ("function" == typeof t.scrollIntoViewIfNeeded ? t.scrollIntoViewIfNeeded.apply(t, [].slice.call(arguments, 1)) : "function" == typeof t.scrollIntoView && t.scrollIntoView())
    },
    insertCSRF: function(t, e) {
        "undefined" == typeof e && (e = $('meta[name="csrf-token"]').attr("content")), e && (t.find('input[name="authenticity_token"]').remove(), t.append('<input name="authenticity_token" type="hidden" value="' + e + '" />'))
    },
    calculateStyle: function(t) {
        window.getComputedStyle($(t).get(0)).opacity
    }
}, SL.util.html = {
    indent: function(t) {
        t = t.replace(/<br>/gi, "<br/>"), t = t.replace(/(<img("[^"]*"|[^>])+)/gi, "$1/");
        var e = vkbeautify.xml(t);
        return e = e.replace(/<pre>[\n\r\t\s]+<code/gi, "<pre><code"), e = e.replace(/<\/code>[\n\r\t\s]+<\/pre>/gi, "</code></pre>")
    },
    ATTR_SRC_NORMAL: "src",
    ATTR_SRC_SILENCED: "data-silenced-src",
    ATTR_SRC_NORMAL_REGEX: " src=",
    ATTR_SRC_SILENCED_REGEX: " data-silenced-src=",
    muteSources: function(t) {
        return (t || "").replace(new RegExp(SL.util.html.ATTR_SRC_NORMAL_REGEX, "gi"), SL.util.html.ATTR_SRC_SILENCED_REGEX)
    },
    unmuteSources: function(t) {
        return (t || "").replace(new RegExp(SL.util.html.ATTR_SRC_SILENCED_REGEX, "gi"), SL.util.html.ATTR_SRC_NORMAL_REGEX)
    },
    trimCode: function(t) {
        $(t).find("pre code").each(function() {
            var t = $(this).parent("pre"),
                e = t.html(),
                n = $.trim(e);
            e !== n && t.html(n)
        })
    },
    removeAttributes: function(t, e) {
        t = $(t);
        var n = $.map(t.get(0).attributes, function(t) {
            return t.name
        });
        "function" == typeof e && (n = n.filter(e)), $.each(n, function(e, n) {
            t.removeAttr(n)
        })
    },
    removeClasses: function(t, e) {
        if (t = $(t), "function" == typeof e) {
            var n = (t.attr("class") || "").split(" ").filter(e);
            t.removeClass(n.join(" "))
        } else t.attr("class", "")
    },
    findScriptTags: function(t) {
        var e = document.createElement("div");
        e.innerHTML = t;
        var n = SL.util.toArray(e.getElementsByTagName("script"));
        return n.map(function(t) {
            return t.outerHTML
        })
    },
    removeScriptTags: function(t) {
        var e = document.createElement("div");
        e.innerHTML = t;
        var n = SL.util.toArray(e.getElementsByTagName("script"));
        return n.forEach(function(t) {
            t.parentNode.removeChild(t)
        }), e.innerHTML
    },
    createSpinner: function(t) {
        return t = $.extend({
            lines: 12,
            radius: 8,
            length: 6,
            width: 3,
            color: "#fff",
            zIndex: "auto",
            left: "0",
            top: "0",
            className: ""
        }, t), new Spinner(t)
    },
    generateSpinners: function() {
        $(".spinner").each(function(t, e) {
            if (e.hasAttribute("data-spinner-state") === !1) {
                e.setAttribute("data-spinner-state", "spinning");
                var n = {};
                e.hasAttribute("data-spinner-color") && (n.color = e.getAttribute("data-spinner-color")), e.hasAttribute("data-spinner-lines") && (n.lines = parseInt(e.getAttribute("data-spinner-lines"), 10)), e.hasAttribute("data-spinner-width") && (n.width = parseInt(e.getAttribute("data-spinner-width"), 10)), e.hasAttribute("data-spinner-radius") && (n.radius = parseInt(e.getAttribute("data-spinner-radius"), 10)), e.hasAttribute("data-spinner-length") && (n.length = parseInt(e.getAttribute("data-spinner-length"), 10));
                var i = SL.util.html.createSpinner(n);
                i.spin(e)
            }
        })
    },
    createDeckThumbnail: function(t) {
        var t = {
                DECK_URL: t.user.username + "/" + t.slug,
                DECK_VIEWS: "number" == typeof t.view_count ? t.view_count : "N/A",
                DECK_THUMB_URL: t.thumbnail_url || SL.config.DEFAULT_DECK_THUMBNAIL,
                USER_URL: "/" + t.user.username,
                USER_NAME: t.user.name || t.user.username,
                USER_THUMB_URL: t.user.thumbnail_url || SL.config.DEFAULT_USER_THUMBNAIL
            },
            e = SL.config.DECK_THUMBNAIL_TEMPLATE;
        for (var n in t) e = e.replace("{{" + n + "}}", t[n]);
        return $(e)
    }
}, SL.util.deck = {
    idCounter: 1,
    sortInjectedStyles: function() {
        var t = $("head");
        $("#theme-css-output").appendTo(t), $("#user-css-output").appendTo(t)
    },
    generateIdentifiers: function(t) {
        $(t || ".reveal .slides section").each(function() {
            (this.hasAttribute("data-id") === !1 || 0 === this.getAttribute("data-id").length) && this.setAttribute("data-id", CryptoJS.MD5(["slide", SL.current_user.get("id"), SL.current_deck.get("id"), Date.now(), SL.util.deck.idCounter++].join("-")).toString())
        })
    },
    injectNotes: function() {
        SLConfig.deck && SLConfig.deck.notes && [].forEach.call(document.querySelectorAll(".reveal .slides section"), function(t) {
            var e = SLConfig.deck.notes[t.getAttribute("data-id")];
            e && "string" == typeof e && t.setAttribute("data-notes", e)
        })
    },
    getBackgroundColor: function() {
        var t = $(".reveal-viewport");
        if (t.length) {
            var e = t.css("background-color");
            if (window.Reveal && window.Reveal.isReady()) {
                var n = window.Reveal.getIndices(),
                    i = window.Reveal.getSlideBackground(n.h, n.v);
                if (i) {
                    var s = i.style.backgroundColor;
                    s && window.tinycolor(s).getAlpha() > 0 && (e = s)
                }
            }
            if (e) return e
        }
        return "#ffffff"
    },
    getBackgroundContrast: function() {
        return SL.util.color.getContrast(SL.util.deck.getBackgroundColor())
    },
    getBackgroundBrightness: function() {
        return SL.util.color.getBrightness(SL.util.deck.getBackgroundColor())
    }
}, SL.util.color = {
    getContrast: function(t) {
        var e = window.tinycolor(t).toRgb(),
            n = (299 * e.r + 587 * e.g + 114 * e.b) / 1e3;
        return n / 255
    },
    getBrightness: function(t) {
        var e = window.tinycolor(t).toRgb(),
            n = e.r / 255 * .3 + e.g / 255 * .59 + (e.b / 255 + .11);
        return n / 2
    }
}, SL.util.anim = {
    collapseListItem: function(t, e, n) {
        t = $(t), t.addClass("no-transition"), t.css({
            overflow: "hidden"
        }), t.animate({
            opacity: 0,
            height: 0,
            minHeight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            marginTop: 0,
            marginBottom: 0
        }, {
            duration: n || 500,
            complete: e
        })
    }
}, SL.util.selection = {
    moveCursorToEnd: function(t) {
        if (t) {
            t.focus();
            var e = document.createRange();
            e.selectNodeContents(t), e.collapse(!1), selection = window.getSelection(), selection.removeAllRanges(), selection.addRange(e)
        }
    },
    selectText: function(t) {
        var e, n;
        document.body.createTextRange ? (e = document.body.createTextRange(), e.moveToElementText(t), e.select()) : window.getSelection && (n = window.getSelection(), e = document.createRange(), e.selectNodeContents(t), n.removeAllRanges(), n.addRange(e))
    },
    getSelectedElement: function() {
        var t = window.getSelection();
        return t && t.anchorNode ? t.anchorNode.parentNode : null
    },
    getSelectedTags: function() {
        var t = SL.util.selection.getSelectedElement(),
            e = [];
        if (t)
            for (; t;) e.push(t.nodeName.toLowerCase()), t = t.parentNode;
        return e
    },
    getSelectedHTML: function() {
        var t;
        if (document.selection && document.selection.createRange) return t = document.selection.createRange(), t.htmlText;
        if (window.getSelection) {
            var e = window.getSelection();
            if (e.rangeCount > 0) {
                t = e.getRangeAt(0);
                var n = t.cloneContents(),
                    i = document.createElement("div");
                return i.appendChild(n), i.innerHTML
            }
        }
        return ""
    }
}, "undefined" != typeof window.Spinner && "undefined" != typeof SL.util && SL.util.html.generateSpinners(), SL.analytics = {
    CATEGORY_OTHER: "other",
    CATEGORY_EDITOR: "editor",
    CATEGORY_THEMING: "theming",
    CATEGORY_PRESENTING: "presenting",
    _track: function(t, e, n) {
        "undefined" != typeof window.ga && ga("send", "event", t, e, n)
    },
    _trackPageView: function(t, e) {
        e = e || document.title, "undefined" != typeof window.ga && ga(function() {
            for (var n = ga.getAll(), i = 0; i < n.length; ++i) n[i].send("pageview", {
                page: t,
                title: e
            })
        })
    },
    track: function(t, e) {
        this._track(SL.analytics.CATEGORY_OTHER, t, e)
    },
    trackEditor: function(t, e) {
        this._track(SL.analytics.CATEGORY_EDITOR, t, e)
    },
    trackTheming: function(t, e) {
        this._track(SL.analytics.CATEGORY_THEMING, t, e)
    },
    trackPresenting: function(t, e) {
        this._track(SL.analytics.CATEGORY_PRESENTING, t, e)
    },
    trackCurrentSlide: function(t) {
        if (window.Reveal) {
            var e = window.Reveal.getIndices(),
                t = window.location.pathname + "/" + e.h;
            "number" == typeof e.v && e.v > 0 && (t += "/" + e.v);
            var n = $(Reveal.getCurrentSlide()).find("h1, h2, h3").first().text().trim();
            (!n || n.length < 2) && (n = "Untitled"), this._trackPageView(t, n)
        }
    }
}, SL.config = {
    SLIDE_WIDTH: 960,
    SLIDE_HEIGHT: 700,
    LOGIN_STATUS_INTERVAL: 6e4,
    UNSAVED_CHANGES_INTERVAL: 1500,
    AUTOSAVE_INTERVAL: 4e3,
    DECK_TITLE_MAXLENGTH: 200,
    MEDIA_LABEL_MAXLENGTH: 200,
    SPEAKER_NOTES_MAXLENGTH: 300,
    MAX_IMAGE_UPLOAD_SIZE: 1e4,
    MAX_IMPORT_UPLOAD_SIZE: 1e5,
    IMPORT_SOCKET_TIMEOUT: 24e4,
    PRESENT_CONTROLS_DEFAULT: !0,
    PRESENT_UPSIZING_DEFAULT: !0,
    PRESENT_UPSIZING_MAX_SCALE: 10,
    DEFAULT_THEME_COLOR: "white-blue",
    DEFAULT_THEME_FONT: "montserrat",
    DEFAULT_THEME_TRANSITION: "slide",
    DEFAULT_THEME_BACKGROUND_TRANSITION: "slide",
    AUTO_SLIDE_OPTIONS: [2, 4, 6, 8, 10, 15, 20, 30, 40],
    THEME_COLORS: [{
        id: "white-blue"
    }, {
        id: "sand-blue"
    }, {
        id: "beige-brown"
    }, {
        id: "silver-green"
    }, {
        id: "silver-blue"
    }, {
        id: "sky-blue"
    }, {
        id: "blue-yellow"
    }, {
        id: "cobalt-orange"
    }, {
        id: "asphalt-orange"
    }, {
        id: "forest-yellow"
    }, {
        id: "mint-beige"
    }, {
        id: "sea-yellow"
    }, {
        id: "yellow-black"
    }, {
        id: "coral-blue"
    }, {
        id: "grey-blue"
    }, {
        id: "black-blue"
    }, {
        id: "black-mint"
    }, {
        id: "black-orange"
    }],
    THEME_FONTS: [{
        id: "montserrat",
        title: "Montserrat"
    }, {
        id: "league",
        title: "League"
    }, {
        id: "opensans",
        title: "Open Sans"
    }, {
        id: "josefine",
        title: "Josefine"
    }, {
        id: "palatino",
        title: "Palatino"
    }, {
        id: "news",
        title: "News"
    }, {
        id: "helvetica",
        title: "Helvetica"
    }, {
        id: "merriweather",
        title: "Merriweather"
    }, {
        id: "asul",
        title: "Asul"
    }, {
        id: "sketch",
        title: "Sketch"
    }, {
        id: "quicksand",
        title: "Quicksand"
    }, {
        id: "overpass",
        title: "Overpass"
    }],
    THEME_TRANSITIONS: [{
        id: "slide",
        title: "Slide"
    }, {
        id: "linear",
        title: "Linear",
        deprecated: !0
    }, {
        id: "fade",
        title: "Fade"
    }, {
        id: "none",
        title: "None"
    }, {
        id: "default",
        title: "Convex"
    }, {
        id: "concave",
        title: "Concave"
    }, {
        id: "zoom",
        title: "Zoom"
    }, {
        id: "cube",
        title: "Cube",
        deprecated: !0
    }, {
        id: "page",
        title: "Page",
        deprecated: !0
    }],
    THEME_BACKGROUND_TRANSITIONS: [{
        id: "slide",
        title: "Slide"
    }, {
        id: "fade",
        title: "Fade"
    }, {
        id: "none",
        title: "None"
    }, {
        id: "convex",
        title: "Convex"
    }, {
        id: "concave",
        title: "Concave"
    }, {
        id: "zoom",
        title: "Zoom"
    }],
    BLOCKS: new SL.collections.Collection([{
        type: "text",
        factory: "Text",
        label: "Text",
        icon: "type"
    }, {
        type: "image",
        factory: "Image",
        label: "Image",
        icon: "picture"
    }, {
        type: "shape",
        factory: "Shape",
        label: "Shape",
        icon: "shapes"
    }, {
        type: "iframe",
        factory: "Iframe",
        label: "Iframe",
        icon: "browser"
    }, {
        type: "code",
        factory: "Code",
        label: "Code",
        icon: "file-css"
    }, {
        type: "math",
        factory: "Math",
        label: "Math",
        icon: "divide"
    }, {
        type: "snippet",
        factory: "Snippet",
        label: "snippet",
        icon: "file-xml",
        hidden: !0
    }]),
    DEFAULT_DECK_THUMBNAIL: "https://s3.amazonaws.com/static.slid.es/images/default-deck-thumbnail.png",
    DEFAULT_USER_THUMBNAIL: "https://s3.amazonaws.com/static.slid.es/images/default-profile-picture.png",
    DECK_THUMBNAIL_TEMPLATE: ['<li class="deck-thumbnail">', '<div class="deck-image" style="background-image: url({{DECK_THUMB_URL}})">', '<a class="deck-link" href="{{DECK_URL}}"></a>', "</div>", '<footer class="deck-details">', '<a class="author" href="{{USER_URL}}">', '<span class="picture" style="background-image: url({{USER_THUMB_URL}})"></span>', '<span class="name">{{USER_NAME}}</span>', "</a>", '<div class="stats">', '<div>{{DECK_VIEWS}}<span class="icon i-eye"></span></div>', "</div>", "</footer>", "</li>"].join(""),
    AJAX_SEARCH: "/api/v1/search.json",
    AJAX_SEARCH_ORGANIZATION: "/api/v1/team/search.json",
    AJAX_CREATE_DECK: function() {
        return "/api/v1/decks.json"
    },
    AJAX_UPDATE_DECK: function(t) {
        return "/api/v1/decks/" + t + ".json"
    },
    AJAX_PUBLISH_DECK: function(t) {
        return "/api/v1/decks/" + t + "/publish.json"
    },
    AJAX_GET_DECK_VERSIONS: function(t) {
        return "/api/v1/decks/" + t + "/revisions.json"
    },
    AJAX_PREVIEW_DECK_VERSION: function(t, e, n) {
        return "/" + t + "/" + e + "/preview?revision=" + n
    },
    AJAX_RESTORE_DECK_VERSION: function(t, e) {
        return "/api/v1/decks/" + t + "/revisions/" + e + "/restore.json"
    },
    AJAX_EXPORT_DECK: function(t, e) {
        return "/" + t + "/" + e + "/export"
    },
    AJAX_THUMBNAIL_DECK: function(t) {
        return "/api/v1/decks/" + t + "/thumbnails.json"
    },
    AJAX_FORK_DECK: function(t) {
        return "/api/v1/decks/" + t + "/fork.json"
    },
    AJAX_SHARE_DECK_VIA_EMAIL: function(t) {
        return "/api/v1/decks/" + t + "/deck_shares.json"
    },
    AJAX_KUDO_DECK: function(t) {
        return "/api/v1/decks/" + t + "/kudos/kudo.json"
    },
    AJAX_UNKUDO_DECK: function(t) {
        return "/api/v1/decks/" + t + "/kudos/unkudo.json"
    },
    AJAX_EXPORT_START: function(t) {
        return "/api/v1/decks/" + t + "/exports.json"
    },
    AJAX_EXPORT_LIST: function(t) {
        return "/api/v1/decks/" + t + "/exports.json"
    },
    AJAX_EXPORT_STATUS: function(t, e) {
        return "/api/v1/decks/" + t + "/exports/" + e + ".json"
    },
    AJAX_PDF_IMPORT_NEW: "/api/v1/imports.json",
    AJAX_PDF_IMPORT_UPLOADED: function(t) {
        return "/api/v1/imports/" + t + ".json"
    },
    AJAX_DROPBOX_CONNECT: "/settings/dropbox/authorize",
    AJAX_DROPBOX_DISCONNECT: "https://www.dropbox.com/account/security#apps",
    AJAX_DROPBOX_SYNC_DECK: function(t) {
        return "/api/v1/decks/" + t + "/export.json"
    },
    AJAX_UPDATE_ORGANIZATION: "/api/v1/team.json",
    AJAX_LOOKUP_ORGANIZATION: "/api/v1/team/lookup.json",
    AJAX_ORGANIZATION_MEMBERS_LIST: "/api/v1/team/users.json",
    AJAX_ORGANIZATION_MEMBER_CREATE: "/api/v1/team/users.json",
    AJAX_ORGANIZATION_MEMBER_DELETE: function(t) {
        return "/api/v1/team/users/" + t + ".json"
    },
    AJAX_ORGANIZATION_MEMBER_WELCOME: function(t) {
        return "/api/v1/team/users/" + t + "/welcome.json"
    },
    AJAX_THEMES_LIST: "/api/v1/themes.json",
    AJAX_THEMES_CREATE: "/api/v1/themes.json",
    AJAX_THEMES_READ: function(t) {
        return "/api/v1/themes/" + t + ".json"
    },
    AJAX_THEMES_UPDATE: function(t) {
        return "/api/v1/themes/" + t + ".json"
    },
    AJAX_THEMES_DELETE: function(t) {
        return "/api/v1/themes/" + t + ".json"
    },
    AJAX_THEME_ADD_SLIDE_TEMPLATE: function(t) {
        return "/api/v1/themes/" + t + "/add_slide_template.json"
    },
    AJAX_THEME_REMOVE_SLIDE_TEMPLATE: function(t) {
        return "/api/v1/themes/" + t + "/remove_slide_template.json"
    },
    AJAX_ACCESS_TOKENS_LIST: function(t) {
        return "/api/v1/decks/" + t + "/access_tokens.json"
    },
    AJAX_ACCESS_TOKENS_CREATE: function(t) {
        return "/api/v1/decks/" + t + "/access_tokens.json"
    },
    AJAX_ACCESS_TOKENS_UPDATE: function(t, e) {
        return "/api/v1/decks/" + t + "/access_tokens/" + e + ".json"
    },
    AJAX_ACCESS_TOKENS_DELETE: function(t, e) {
        return "/api/v1/decks/" + t + "/access_tokens/" + e + ".json"
    },
    AJAX_ACCESS_TOKENS_PASSWORD_AUTH: function(t) {
        return "/access_tokens/" + t + ".json"
    },
    AJAX_SLIDE_TEMPLATES_LIST: "/api/v1/slide_templates.json",
    AJAX_SLIDE_TEMPLATES_CREATE: "/api/v1/slide_templates.json",
    AJAX_SLIDE_TEMPLATES_UPDATE: function(t) {
        return "/api/v1/slide_templates/" + t + ".json"
    },
    AJAX_SLIDE_TEMPLATES_DELETE: function(t) {
        return "/api/v1/slide_templates/" + t + ".json"
    },
    AJAX_TEAM_SLIDE_TEMPLATES_LIST: "/api/v1/team/slide_templates.json",
    AJAX_TEAM_SLIDE_TEMPLATES_CREATE: "/api/v1/team/slide_templates.json",
    AJAX_TEAM_SLIDE_TEMPLATES_UPDATE: function(t) {
        return "/api/v1/team/slide_templates/" + t + ".json"
    },
    AJAX_TEAM_SLIDE_TEMPLATES_DELETE: function(t) {
        return "/api/v1/team/slide_templates/" + t + ".json"
    },
    AJAX_GET_USER: function(t) {
        return "/api/v1/users/" + t + ".json"
    },
    AJAX_LOOKUP_USER: "/api/v1/users/lookup.json",
    AJAX_SERVICES_USER: "/api/v1/users/services.json",
    AJAX_UPDATE_USER: "/users.json",
    AJAX_GET_USER_SETTINGS: "/api/v1/user_settings.json",
    AJAX_UPDATE_USER_SETTINGS: "/api/v1/user_settings.json",
    AJAX_SUBSCRIPTIONS: "/subscriptions",
    AJAX_SUBSCRIPTIONS_STATUS: "/account/details.json",
    AJAX_SUBSCRIPTIONS_PRINT_RECEIPT: function(t) {
        return "/account/receipts/" + t
    },
    AJAX_TEAMS_CREATE: "/teams.json",
    AJAX_CHECK_STATUS: "/api/v1/status.json",
    AJAX_MEDIA_LIST: "/api/v1/media.json",
    AJAX_MEDIA_CREATE: "/api/v1/media.json",
    AJAX_MEDIA_UPDATE: function(t) {
        return "/api/v1/media/" + t + ".json"
    },
    AJAX_MEDIA_DELETE: function(t) {
        return "/api/v1/media/" + t + ".json"
    },
    AJAX_MEDIA_TAG_LIST: "/api/v1/tags.json",
    AJAX_MEDIA_TAG_CREATE: "/api/v1/tags.json",
    AJAX_MEDIA_TAG_UPDATE: function(t) {
        return "/api/v1/tags/" + t + ".json"
    },
    AJAX_MEDIA_TAG_DELETE: function(t) {
        return "/api/v1/tags/" + t + ".json"
    },
    AJAX_MEDIA_TAG_ADD_MEDIA: function(t) {
        return "/api/v1/tags/" + t + "/add_media.json"
    },
    AJAX_MEDIA_TAG_REMOVE_MEDIA: function(t) {
        return "/api/v1/tags/" + t + "/remove_media.json"
    },
    AJAX_TEAM_MEDIA_LIST: "/api/v1/team/media.json",
    AJAX_TEAM_MEDIA_CREATE: "/api/v1/team/media.json",
    AJAX_TEAM_MEDIA_UPDATE: function(t) {
        return "/api/v1/team/media/" + t + ".json"
    },
    AJAX_TEAM_MEDIA_DELETE: function(t) {
        return "/api/v1/team/media/" + t + ".json"
    },
    AJAX_TEAM_MEDIA_TAG_LIST: "/api/v1/team/tags.json",
    AJAX_TEAM_MEDIA_TAG_CREATE: "/api/v1/team/tags.json",
    AJAX_TEAM_MEDIA_TAG_UPDATE: function(t) {
        return "/api/v1/team/tags/" + t + ".json"
    },
    AJAX_TEAM_MEDIA_TAG_DELETE: function(t) {
        return "/api/v1/team/tags/" + t + ".json"
    },
    AJAX_TEAM_MEDIA_TAG_ADD_MEDIA: function(t) {
        return "/api/v1/team/tags/" + t + "/add_media.json"
    },
    AJAX_TEAM_MEDIA_TAG_REMOVE_MEDIA: function(t) {
        return "/api/v1/team/tags/" + t + "/remove_media.json"
    },
    STREAM_ENGINE_HOST: window.location.protocol + "//stream.slides.com",
    STREAM_ENGINE_LIVE_NAMESPACE: "live",
    STREAM_ENGINE_EDITOR_NAMESPACE: "editor",
    APP_HOST: "slides.com",
    S3_HOST: "https://s3.amazonaws.com/media-p.slid.es",
    ASSET_URLS: {
        "offline-v2.css": "//assets.slid.es/assets/offline-v2-4318741740749090829a742900f60430.css",
        "homepage-background.jpg": "//assets.slid.es/assets/homepage-background-b002e480a9b1026f07a1a3d066404640.jpg",
        "reveal-plugins/markdown/marked.js": "//assets.slid.es/assets/reveal-plugins/markdown/marked-285d0e546e608bca75e0c8af0d6b44cd.js",
        "reveal-plugins/markdown/markdown.js": "//assets.slid.es/assets/reveal-plugins/markdown/markdown-769f9bfbb5d81257779bf0353cc6ecd4.js",
        "reveal-plugins/highlight/highlight.js": "//assets.slid.es/assets/reveal-plugins/highlight/highlight-b9890bd9d95fc94cb5cc7e2034fd0040.js"
    }
}, SL.config.V1 = {
    DEFAULT_THEME_COLOR: "grey-blue",
    DEFAULT_THEME_FONT: "league",
    DEFAULT_THEME_TRANSITION: "linear",
    DEFAULT_THEME_BACKGROUND_TRANSITION: "fade",
    THEME_COLORS: [{
        id: "grey-blue"
    }, {
        id: "black-mint"
    }, {
        id: "black-orange"
    }, {
        id: "forest-yellow"
    }, {
        id: "lila-yellow"
    }, {
        id: "asphalt-orange"
    }, {
        id: "sky-blue"
    }, {
        id: "beige-brown"
    }, {
        id: "sand-grey"
    }, {
        id: "silver-green"
    }, {
        id: "silver-blue"
    }, {
        id: "cobalt-orange"
    }, {
        id: "white-blue"
    }, {
        id: "mint-beige"
    }, {
        id: "sea-yellow"
    }, {
        id: "coral-blue"
    }],
    THEME_FONTS: [{
        id: "league",
        title: "League"
    }, {
        id: "opensans",
        title: "Open Sans"
    }, {
        id: "josefine",
        title: "Josefine"
    }, {
        id: "palatino",
        title: "Palatino"
    }, {
        id: "news",
        title: "News"
    }, {
        id: "montserrat",
        title: "Montserrat"
    }, {
        id: "helvetica",
        title: "Helvetica"
    }, {
        id: "asul",
        title: "Asul"
    }, {
        id: "merriweather",
        title: "Merriweather"
    }, {
        id: "sketch",
        title: "Sketch"
    }, {
        id: "quicksand",
        title: "Quicksand"
    }, {
        id: "overpass",
        title: "Overpass"
    }]
}, SL.draganddrop = {
    init: function() {
        this.listeners = new SL.collections.Collection, this.onDragStart = this.onDragStart.bind(this), this.onDragOver = this.onDragOver.bind(this), this.onDragOut = this.onDragOut.bind(this), this.onDrop = this.onDrop.bind(this), this.isListening = !1, this.isInternalDrag = !1
    },
    subscribe: function(t) {
        this.listeners.push(t), this.bind()
    },
    unsubscribe: function(t) {
        this.listeners.remove(t), this.listeners.isEmpty() && this.unbind()
    },
    dispatch: function(t, e) {
        var n = this.listeners.last();
        n && n[t](e)
    },
    bind: function() {
        this.isListening === !1 && (this.isListening = !0, $(document.documentElement).on("dragstart", this.onDragStart).on("dragover dragenter", this.onDragOver).on("dragleave", this.onDragOut).on("drop", this.onDrop))
    },
    unbind: function() {
        this.isListening === !0 && (this.isListening = !1, $(document.documentElement).off("dragstart", this.onDragStart).off("dragover dragenter", this.onDragOver).off("dragleave", this.onDragOut).off("drop", this.onDrop))
    },
    onDragStart: function(t) {
        t.preventDefault(), this.isInternalDrag = !0
    },
    onDragOver: function(t) {
        this.isInternalDrag || (t.preventDefault(), this.dispatch("onDragOver", t))
    },
    onDragOut: function(t) {
        this.isInternalDrag || (t.preventDefault(), this.dispatch("onDragOut", t))
    },
    onDrop: function(t) {
        return this.isInternalDrag ? void 0 : (t.stopPropagation(), t.preventDefault(), this.isInternalDrag = !1, this.dispatch("onDrop", t), !1)
    }
}, SL.fonts = {
    INIT_TIMEOUT: 5e3,
    FONTS_URL: "https://s3.amazonaws.com/static.slid.es/fonts/",
    FAMILIES: {
        montserrat: {
            name: "Montserrat",
            css: "montserrat/montserrat.css"
        },
        opensans: {
            name: "Open Sans",
            css: "opensans/opensans.css"
        },
        lato: {
            name: "Lato",
            css: "lato/lato.css"
        },
        asul: {
            name: "Asul",
            css: "asul/asul.css"
        },
        josefinsans: {
            name: "Josefin Sans",
            css: "josefinsans/josefinsans.css"
        },
        league: {
            name: "League Gothic",
            css: "league/league_gothic.css"
        },
        merriweathersans: {
            name: "Merriweather Sans",
            css: "merriweathersans/merriweathersans.css"
        },
        overpass: {
            name: "Overpass",
            css: "overpass/overpass.css"
        },
        quicksand: {
            name: "Quicksand",
            css: "quicksand/quicksand.css"
        },
        cabinsketch: {
            name: "Cabin Sketch",
            css: "cabinsketch/cabinsketch.css"
        },
        newscycle: {
            name: "News Cycle",
            css: "newscycle/newscycle.css"
        },
        oxygen: {
            name: "Oxygen",
            css: "oxygen/oxygen.css"
        }
    },
    PACKAGES: {
        asul: ["asul"],
        helvetica: [],
        josefine: ["josefinsans", "lato"],
        league: ["league", "lato"],
        merriweather: ["merriweathersans", "oxygen"],
        news: ["newscycle", "lato"],
        montserrat: ["montserrat", "opensans"],
        opensans: ["opensans"],
        overpass: ["overpass"],
        palatino: [],
        quicksand: ["quicksand", "opensans"],
        sketch: ["cabinsketch", "oxygen"]
    },
    init: function() {
        if (this._isReady = !1, this.ready = new signals.Signal, this.debugMode = !!SL.util.getQuery().debug, $("link[data-application-font]").each(function() {
                var t = $(this).attr("data-application-font");
                SL.fonts.FAMILIES[t] && (SL.fonts.FAMILIES[t].loaded = !0)
            }), SLConfig && SLConfig.deck) {
            var t = (SLConfig.deck.theme_font, this.loadDeckFont([SLConfig.deck.theme_font || SL.config.DEFAULT_THEME_FONT], {
                active: this.onWebFontsActive.bind(this),
                inactive: this.onWebFontsInactive.bind(this)
            }));
            t ? this.initTimeout = setTimeout(function() {
                this.debugMode && console.log("SL.fonts", "timed out"), this.finishLoading()
            }.bind(this), SL.fonts.INIT_TIMEOUT) : this.finishLoading()
        } else this.finishLoading()
    },
    load: function(t, e) {
        var n = $.extend({
            custom: {
                families: [],
                urls: []
            }
        }, e);
        return t.forEach(function(t) {
            var e = SL.fonts.FAMILIES[t];
            e ? e.loaded || (e.loaded = !0, n.custom.families.push(e.name), n.custom.urls.push(SL.fonts.FONTS_URL + e.css)) : console.warn('Could not find font family with id "' + t + '"')
        }), this.debugMode && console.log("SL.fonts.load", n.custom.families), n.custom.families.length ? (WebFont.load(n), !0) : !1
    },
    loadAll: function() {
        var t = [];
        for (var e in SL.fonts.FAMILIES) t.push(e);
        this.load(t)
    },
    loadDeckFont: function(t, e) {
        var n = SL.fonts.PACKAGES[t];
        return n ? SL.fonts.load(n, e) : !1
    },
    finishLoading: function() {
        clearTimeout(this.initTimeout), $("html").addClass("fonts-are-ready"), this._isReady === !1 && (this._isReady = !0, this.ready.dispatch())
    },
    isReady: function() {
        return this._isReady
    },
    onWebFontsActive: function() {
        this.finishLoading()
    },
    onWebFontsInactive: function() {
        this.finishLoading()
    }
}, SL.keyboard = {
    init: function() {
        this.keyupConsumers = new SL.collections.Collection, this.keydownConsumers = new SL.collections.Collection, $(document).on("keydown", this.onDocumentKeyDown.bind(this)), $(document).on("keyup", this.onDocumentKeyUp.bind(this))
    },
    keydown: function(t) {
        this.keydownConsumers.push(t)
    },
    keyup: function(t) {
        this.keyupConsumers.push(t)
    },
    release: function(t) {
        this.keydownConsumers.remove(t), this.keyupConsumers.remove(t)
    },
    onDocumentKeyDown: function(t) {
        for (var e, n = this.keydownConsumers.size(), i = !1; e = this.keydownConsumers.at(--n);)
            if (!e(t)) {
                i = !0;
                break
            }
        return i ? (t.preventDefault(), t.stopImmediatePropagation(), !1) : void 0
    },
    onDocumentKeyUp: function(t) {
        for (var e, n = this.keyupConsumers.size(), i = !1; e = this.keyupConsumers.at(--n);)
            if (!e(t)) {
                i = !0;
                break
            }
        return i ? (t.preventDefault(), t.stopImmediatePropagation(), !1) : void 0
    }
}, SL.locale = {
    GENERIC_ERROR: ["Oops, something went wrong", "We ran into an unexpected error", "Something's wong, can you try that again?"],
    WARN_UNSAVED_CHANGES: "You have unsaved changes, save first?",
    CLOSE: "Close",
    PREVIOUS: "Previous",
    NEXT: "Next",
    DECK_SAVE_SUCCESS: "Saved successfully",
    DECK_SAVE_ERROR: "Failed to save",
    NEW_SLIDE_TITLE: "Title",
    LEAVE_UNSAVED_DECK: "You will lose your unsaved changes.",
    LEAVE_UNSAVED_THEME: "You will lose your unsaved changes.",
    REMOVE_PRO_CONFIRM: "After the end of the current billing cycle your account will be downgraded from Pro to the Free plan.",
    REMOVE_PRO_SUCCESS: "Subscription canceled",
    DECK_RESTORE_CONFIRM: "Are you sure you want to revert to this version from {#time}?",
    DECK_DELETE_CONFIRM: 'Are you sure you want to delete "{#title}"?',
    DECK_DELETE_SUCCESS: "Deck deleted",
    DECK_DELETE_ERROR: "Failed to delete",
    DECK_VISIBILITY_CHANGE_SELF: '<div><span class="icon i-lock-stroke"></span></div><h3>Private</h3><p>Only visible to you</p>',
    DECK_VISIBILITY_CHANGE_TEAM: '<div><span class="icon i-users"></span></div><h3>Internal</h3><p>Visible to your team</p>',
    DECK_VISIBILITY_CHANGE_ALL: '<div><span class="icon i-globe"></span></div><h3>Public</h3><p>Visible to the world</p>',
    DECK_VISIBILITY_CHANGED_SELF: "Your deck is now private",
    DECK_VISIBILITY_CHANGED_TEAM: "Your deck is now internal",
    DECK_VISIBILITY_CHANGED_ALL: "Your deck is now public",
    DECK_VISIBILITY_CHANGED_ERROR: "Failed to change visibility",
    DECK_EDIT_INVALID_TITLE: "Please enter a valid title",
    DECK_EDIT_INVALID_SLUG: "Please enter a valid URL",
    DECK_DELETE_SLIDE_CONFIRM: "Are you sure you want to remove this slide?",
    DECK_IMPORT_HTML_CONFIRM: "All existing content will be replaced, continue?",
    EXPORT_PDF_BUTTON: "Download PDF",
    EXPORT_PDF_BUTTON_WORKING: "Creating PDF...",
    EXPORT_PDF_ERROR: "An error occured while exporting your PDF.",
    EXPORT_ZIP_BUTTON: "Download ZIP",
    EXPORT_ZIP_BUTTON_WORKING: "Creating ZIP...",
    EXPORT_ZIP_ERROR: "An error occured while exporting your ZIP.",
    FORM_ERROR_REQUIRED: "Required",
    FORM_ERROR_USERNAME_TAKEN: ["That one's already taken :(", "Sorry, that's taken too"],
    FORM_ERROR_ORGANIZATION_SLUG_TAKEN: ["That one's already taken :(", "Sorry, that's taken too"],
    BILLING_DETAILS_ERROR: "An error occured while fetching your billing details, please try again.",
    BILLING_DETAILS_NOHISTORY: "You haven't made any payments yet.",
    THEME_CREATE: "New theme",
    THEME_CREATE_ERROR: "Failed to create theme",
    THEME_SAVE_SUCCESS: "Theme saved",
    THEME_SAVE_ERROR: "Failed to save theme",
    THEME_REMOVE_CONFIRM: "Are you sure you want to delete this theme?",
    THEME_REMOVE_SUCCESS: "Theme removed successfully",
    THEME_REMOVE_ERROR: "Failed to remove theme",
    THEME_LIST_LOAD_ERROR: "Failed to load themes",
    THEME_LIST_EMPTY: 'You haven\'t created any themes yet. <a href="#" class="create-theme-button">Create one now</a>.',
    THEME_CSS_DESCRIPTION: "This editor supports LESS or plain CSS input. All selectors are prefixed with .reveal when saved to avoid style spillover.",
    THEME_HTML_DESCRIPTION: "HTML is inserted into the presentation container, meaning it lives separately from individual slides. This makes it great for things like a company logo which is constantly visible on top of the presentation.",
    THEME_JS_DESCRIPTION: "Scripts will be executed when a deck that uses this theme is loaded.",
    THEME_DEFAULT_SAVE_SUCCESS: "Default theme was changed",
    THEME_DEFAULT_SAVE_ERROR: "Failed to change default theme",
    THEME_DELETE_TOOLTIP: "Delete",
    THEME_EDIT_TOOLTIP: "Edit",
    THEME_MAKE_DEFAULT_TOOLTIP: "Make this the default theme",
    THEME_IS_DEFAULT_TOOLTIP: "This is the default theme",
    THEME_SNIPPET_DELETE_CONFIRM: "Are you sure you want to delete this snippet?",
    TEMPLATE_LOAD_ERROR: "Failed to load slide templates",
    TEMPLATE_CREATE_ERROR: "Failed to save template",
    TEMPLATE_DELETE_CONFIRM: "Are you sure you want to delete this template?",
    ORG_USERS_REMOVE_CONFIRM: 'Delete "{#name}" and all of their decks?',
    ORG_USERS_REMOVE_SUCCESS: "User removed successfully",
    ORG_USERS_REMOVE_ERROR: "Failed to remove user",
    ORG_USERS_INVITE_SEND_SUCCESS: "Invite email sent",
    ORG_USERS_INVITE_SEND_ERROR: "Failed to send invite email",
    ORG_USERS_LIST_EMPTY: "Couldn't find any members of this team.",
    ORG_USERS_LIST_LOAD_ERROR: "Failed to load user list",
    SEARCH_PAGINATION_PAGE: "Page",
    SEARCH_NO_RESULTS_FOR: 'No results for "{#term}"',
    SEARCH_SERVER_ERROR: "Failed to fetch search results",
    SEARCH_NO_TERM_ERROR: "Please enter a search term",
    MEDIA_TAG_DELETE_CONFIRM: "Are you sure you want to permanently delete this tag?",
    MEDIA_TAG_DELETE_SUCCESS: "Tag deleted",
    MEDIA_TAG_DELETE_ERROR: "Failed to delete",
    counter: {},
    get: function(t, e) {
        var n = SL.locale[t];
        if ("object" == typeof n && n.length && (this.counter[t] = "number" == typeof this.counter[t] ? (this.counter[t] + 1) % n.length : 0, n = n[this.counter[t]]), "object" == typeof e)
            for (var i in e) n = n.replace("{#" + i + "}", e[i]);
        return "string" == typeof n ? n : ""
    }
},
    function(t) {
        var e = {};
        e.sync = function() {
            $("[data-placement]").each(function() {
                var t = $(this),
                    n = t.attr("data-placement");
                "function" == typeof e[n] ? e[n](t) : console.log('No matching layout found for "' + n + '"')
            })
        }, e.hcenter = function(t) {
            var e = t.parent();
            e && t.css("left", (e.width() - t.outerWidth()) / 2)
        }, e.vcenter = function(t) {
            var e = t.parent();
            e && t.css("top", (e.height() - t.outerHeight()) / 2)
        }, e.center = function(t) {
            var e = t.parent();
            if (e) {
                var n = e.width(),
                    i = e.height(),
                    s = t.outerWidth(),
                    o = t.outerHeight();
                t.css({
                    left: (n - s) / 2,
                    top: (i - o) / 2
                })
            }
        }, e.sync(), $(t).on("resize", e.sync), t.Placement = e
    }(window), SL.pointer = {
    down: !1,
    downTimeout: -1,
    init: function() {
        $(document).on("mousedown", this.onMouseDown.bind(this)), $(document).on("mouseleave", this.onMouseLeave.bind(this)), $(document).on("mouseup", this.onMouseUp.bind(this))
    },
    isDown: function() {
        return this.down
    },
    onMouseDown: function() {
        clearTimeout(this.downTimeout), this.down = !0, this.downTimeout = setTimeout(function() {
            this.down = !1
        }.bind(this), 3e4)
    },
    onMouseLeave: function() {
        clearTimeout(this.downTimeout), this.down = !1
    },
    onMouseUp: function() {
        clearTimeout(this.downTimeout), this.down = !1
    }
}, SL.routes = {
    PRICING: "/pricing",
    SIGN_IN: "/users/sign_in",
    SIGN_OUT: "/users/sign_out",
    SUBSCRIPTIONS_NEW: "/account/upgrade",
    SUBSCRIPTIONS_EDIT_CARD: "/account/update_billing",
    SUBSCRIPTIONS_EDIT_PERIOD: "/account/update_billing_period",
    USER: function(t) {
        return "/" + t
    },
    USER_EDIT: "/users/edit",
    DECK: function(t, e) {
        return "/" + t + "/" + e
    },
    DECK_NEW: function(t) {
        return "/" + t + "/new"
    },
    DECK_EDIT: function(t, e) {
        return "/" + t + "/" + e + "/edit"
    },
    DECK_EMBED: function(t, e) {
        return "/" + t + "/" + e + "/embed"
    },
    DECK_LIVE: function(t, e) {
        return "/" + t + "/" + e + "/live"
    },
    THEME_EDITOR: "/themes",
    BILLING_DETAILS: "/account/billing",
    TEAM: function(t) {
        return window.location.protocol + "//" + t.get("slug") + "." + SL.config.APP_HOST
    },
    TEAM_EDIT: function(t) {
        return SL.routes.TEAM(t) + "/edit"
    },
    TEAM_EDIT_MEMBERS: function(t) {
        return SL.routes.TEAM(t) + "/edit_members"
    }
}, SL.settings = {
    STORAGE_KEY: "slides-settings",
    STORAGE_VERSION: 1,
    EDITOR_AUTO_HIDE: "editorAutoHide",
    EDITOR_AUTO_SAVE: "editorAutoSave",
    init: function() {
        this.settings = {
            version: this.STORAGE_VERSION
        }, this.changed = new signals.Signal, this.restore()
    },
    setDefaults: function() {
        "undefined" == typeof this.settings[this.EDITOR_AUTO_HIDE] && (this.settings[this.EDITOR_AUTO_HIDE] = !1), "undefined" == typeof this.settings[this.EDITOR_AUTO_SAVE] && (this.settings[this.EDITOR_AUTO_SAVE] = !0)
    },
    setValue: function(t, e) {
        "object" == typeof t ? $.extend(this.settings, t) : this.settings[t] = e, this.save(), this.changed.dispatch([t])
    },
    getValue: function(t) {
        return this.settings[t]
    },
    removeValue: function(t) {
        "object" == typeof t && t.length ? t.forEach(function(t) {
            delete this.settings[t]
        }.bind(this)) : delete this.settings[t], this.save(), this.changed.dispatch([t])
    },
    restore: function() {
        if (Modernizr.localstorage) {
            var t = localStorage.getItem(this.STORAGE_KEY);
            if (t) {
                var e = JSON.parse(localStorage.getItem(this.STORAGE_KEY));
                e && e.version === this.STORAGE_VERSION ? (this.settings = e, this.setDefaults(), this.changed.dispatch()) : (this.setDefaults(), this.save())
            }
        }
        this.setDefaults()
    },
    save: function() {
        Modernizr.localstorage && localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.settings))
    }
}, SL.util.svg = {
    NAMESPACE: "http://www.w3.org/2000/svg",
    SYMBOLS: {
        happy: '<path d="M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13zM16 18.711c3.623 0 7.070-0.963 10-2.654-0.455 5.576-4.785 9.942-10 9.942-5.215 0-9.544-4.371-10-9.947 2.93 1.691 6.377 2.658 10 2.658zM8 11c0-1.657 0.895-3 2-3s2 1.343 2 3c0 1.657-0.895 3-2 3-1.105 0-2-1.343-2-3zM20 11c0-1.657 0.895-3 2-3s2 1.343 2 3c0 1.657-0.895 3-2 3-1.105 0-2-1.343-2-3z"></path>',
        smiley: '<path d="M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13zM8 10c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2-1.105 0-2-0.895-2-2zM20 10c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2-1.105 0-2-0.895-2-2zM22.003 19.602l2.573 1.544c-1.749 2.908-4.935 4.855-8.576 4.855s-6.827-1.946-8.576-4.855l2.573-1.544c1.224 2.036 3.454 3.398 6.003 3.398s4.779-1.362 6.003-3.398z"></path>',
        wondering: '<path d="M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13zM23.304 18.801l0.703 2.399-13.656 4-0.703-2.399zM8 10c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2-1.105 0-2-0.895-2-2zM20 10c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2-1.105 0-2-0.895-2-2z"></path>',
        sad: '<path d="M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13zM8 10c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2-1.105 0-2-0.895-2-2zM20 10c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2-1.105 0-2-0.895-2-2zM9.997 24.398l-2.573-1.544c1.749-2.908 4.935-4.855 8.576-4.855 3.641 0 6.827 1.946 8.576 4.855l-2.573 1.544c-1.224-2.036-3.454-3.398-6.003-3.398-2.549 0-4.779 1.362-6.003 3.398z"></path>',
        "checkmark-circle": '<path d="M16 0c-8.836 0-16 7.164-16 16s7.164 16 16 16 16-7.164 16-16-7.164-16-16-16zM13.52 23.383l-7.362-7.363 2.828-2.828 4.533 4.535 9.617-9.617 2.828 2.828-12.444 12.445z"></path>',
        "plus-circle": '<path d="M16 0c-8.836 0-16 7.164-16 16s7.164 16 16 16 16-7.164 16-16-7.164-16-16-16zM24 18h-6v6h-4v-6h-6v-4h6v-6h4v6h6v4z"></path>',
        "minus-circle": '<path d="M16 0c-8.836 0-16 7.164-16 16s7.164 16 16 16 16-7.164 16-16-7.164-16-16-16zM24 18h-16v-4h16v4z"></path>',
        "x-circle": '<path d="M16 0c-8.836 0-16 7.164-16 16s7.164 16 16 16 16-7.164 16-16-7.164-16-16-16zM23.914 21.086l-2.828 2.828-5.086-5.086-5.086 5.086-2.828-2.828 5.086-5.086-5.086-5.086 2.828-2.828 5.086 5.086 5.086-5.086 2.828 2.828-5.086 5.086 5.086 5.086z"></path>',
        denied: '<path d="M16 0c-8.836 0-16 7.164-16 16s7.164 16 16 16 16-7.164 16-16-7.164-16-16-16zM16 4c2.59 0 4.973 0.844 6.934 2.242l-16.696 16.688c-1.398-1.961-2.238-4.344-2.238-6.93 0-6.617 5.383-12 12-12zM16 28c-2.59 0-4.973-0.844-6.934-2.242l16.696-16.688c1.398 1.961 2.238 4.344 2.238 6.93 0 6.617-5.383 12-12 12z"></path>',
        clock: '<path d="M16 4c6.617 0 12 5.383 12 12s-5.383 12-12 12-12-5.383-12-12 5.383-12 12-12zM16 0c-8.836 0-16 7.164-16 16s7.164 16 16 16 16-7.164 16-16-7.164-16-16-16v0zM21.422 18.578l-3.422-3.426v-7.152h-4.023v7.992c0 0.602 0.277 1.121 0.695 1.492l3.922 3.922 2.828-2.828z"></path>',
        "heart-stroke": '<path d="M23.113 6c2.457 0 4.492 1.82 4.836 4.188l-11.945 13.718-11.953-13.718c0.344-2.368 2.379-4.188 4.836-4.188 2.016 0 3.855 2.164 3.855 2.164l3.258 3.461 3.258-3.461c0 0 1.84-2.164 3.855-2.164zM23.113 2c-2.984 0-5.5 1.578-7.113 3.844-1.613-2.266-4.129-3.844-7.113-3.844-4.903 0-8.887 3.992-8.887 8.891v0.734l16.008 18.375 15.992-18.375v-0.734c0-4.899-3.984-8.891-8.887-8.891v0z"></path>',
        "heart-fill": '<path d="M16 5.844c-1.613-2.266-4.129-3.844-7.113-3.844-4.903 0-8.887 3.992-8.887 8.891v0.734l16.008 18.375 15.992-18.375v-0.734c0-4.899-3.984-8.891-8.887-8.891-2.984 0-5.5 1.578-7.113 3.844z"></path>',
        home: '<path d="M16 0l-16 16h4v16h24v-16h4l-16-16zM24 28h-6v-6h-4v6h-6v-14.344l8-5.656 8 5.656v14.344z"></path>',
        pin: '<path d="M17.070 2.93c-3.906-3.906-10.234-3.906-14.141 0-3.906 3.904-3.906 10.238 0 14.14 0.001 0 7.071 6.93 7.071 14.93 0-8 7.070-14.93 7.070-14.93 3.907-3.902 3.907-10.236 0-14.14zM10 14c-2.211 0-4-1.789-4-4s1.789-4 4-4 4 1.789 4 4-1.789 4-4 4z"></path>',
        user: '<path d="M12 16c-6.625 0-12 5.375-12 12 0 2.211 1.789 4 4 4h16c2.211 0 4-1.789 4-4 0-6.625-5.375-12-12-12zM6 6c0-3.314 2.686-6 6-6s6 2.686 6 6c0 3.314-2.686 6-6 6-3.314 0-6-2.686-6-6z"></path>',
        mail: '<path d="M15.996 15.457l16.004-7.539v-3.918h-32v3.906zM16.004 19.879l-16.004-7.559v15.68h32v-15.656z"></path>',
        star: '<path d="M22.137 19.625l9.863-7.625h-12l-4-12-4 12h-12l9.875 7.594-3.875 12.406 10.016-7.68 9.992 7.68z"></path>',
        bolt: '<path d="M32 0l-24 16 6 4-14 12 24-12-6-4z"></path>',
        sun: '<path d="M16.001 8c-4.418 0-8 3.582-8 8s3.582 8 8 8c4.418 0 7.999-3.582 7.999-8s-3.581-8-7.999-8v0zM14 2c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2-1.105 0-2-0.895-2-2zM4 6c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2-1.105 0-2-0.895-2-2zM2 14c1.105 0 2 0.895 2 2 0 1.107-0.895 2-2 2s-2-0.893-2-2c0-1.105 0.895-2 2-2zM4 26c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2-1.105 0-2-0.895-2-2zM14 30c0-1.109 0.895-2 2-2 1.108 0 2 0.891 2 2 0 1.102-0.892 2-2 2-1.105 0-2-0.898-2-2zM24 26c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2-1.105 0-2-0.895-2-2zM30 18c-1.104 0-2-0.896-2-2 0-1.107 0.896-2 2-2s2 0.893 2 2c0 1.104-0.896 2-2 2zM24 6c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2-1.105 0-2-0.895-2-2z"></path>',
        moon: '<path d="M24.633 22.184c-8.188 0-14.82-6.637-14.82-14.82 0-2.695 0.773-5.188 2.031-7.363-6.824 1.968-11.844 8.187-11.844 15.644 0 9.031 7.32 16.355 16.352 16.355 7.457 0 13.68-5.023 15.648-11.844-2.18 1.254-4.672 2.028-7.367 2.028z"></path>',
        cloud: '<path d="M24 10c-0.379 0-0.738 0.061-1.102 0.111-1.394-2.465-3.972-4.111-6.898-4.111-2.988 0-5.566 1.666-6.941 4.1-0.352-0.047-0.704-0.1-1.059-0.1-4.41 0-8 3.588-8 8 0 4.414 3.59 8 8 8h16c4.41 0 8-3.586 8-8 0-4.412-3.59-8-8-8zM24 22h-16c-2.207 0-4-1.797-4-4 0-2.193 1.941-3.885 4.004-3.945 0.008 0.943 0.172 1.869 0.5 2.744l3.746-1.402c-0.168-0.444-0.25-0.915-0.25-1.397 0-2.205 1.793-4 4-4 1.293 0 2.465 0.641 3.199 1.639-1.929 1.461-3.199 3.756-3.199 6.361h4c0-2.205 1.793-4 4-4s4 1.795 4 4c0 2.203-1.793 4-4 4z"></path>',
        rain: '<path d="M23.998 6c-0.375 0-0.733 0.061-1.103 0.111-1.389-2.465-3.969-4.111-6.895-4.111-2.987 0-5.565 1.666-6.94 4.1-0.353-0.047-0.705-0.1-1.060-0.1-4.41 0-8 3.588-8 8s3.59 8 8 8h15.998c4.414 0 8-3.588 8-8s-3.586-8-8-8zM23.998 18h-15.998c-2.207 0-4-1.795-4-4 0-2.193 1.941-3.885 4.004-3.945 0.009 0.943 0.172 1.869 0.5 2.744l3.746-1.402c-0.168-0.444-0.25-0.915-0.25-1.397 0-2.205 1.793-4 4-4 1.293 0 2.465 0.641 3.199 1.639-1.928 1.461-3.199 3.756-3.199 6.361h4c0-2.205 1.795-4 3.998-4 2.211 0 4 1.795 4 4s-1.789 4-4 4zM3.281 29.438c-0.75 0.75-1.969 0.75-2.719 0s-0.75-1.969 0-2.719 5.438-2.719 5.438-2.719-1.969 4.688-2.719 5.438zM11.285 29.438c-0.75 0.75-1.965 0.75-2.719 0-0.75-0.75-0.75-1.969 0-2.719 0.754-0.75 5.438-2.719 5.438-2.719s-1.965 4.688-2.719 5.438zM19.28 29.438c-0.75 0.75-1.969 0.75-2.719 0s-0.75-1.969 0-2.719 5.437-2.719 5.437-2.719-1.968 4.688-2.718 5.438z"></path>',
        umbrella: '<path d="M16 0c-8.82 0-16 7.178-16 16h4c0-0.826 0.676-1.5 1.5-1.5 0.828 0 1.5 0.674 1.5 1.5h4c0-0.826 0.676-1.5 1.5-1.5 0.828 0 1.5 0.674 1.5 1.5v10c0 1.102-0.895 2-2 2-1.102 0-2-0.898-2-2h-4c0 3.309 2.695 6 6 6 3.312 0 6-2.691 6-6v-10c0-0.826 0.676-1.5 1.5-1.5 0.828 0 1.498 0.674 1.498 1.5h4c0-0.826 0.68-1.5 1.5-1.5 0.828 0 1.5 0.674 1.5 1.5h4c0-8.822-7.172-16-15.998-16z"></path>',
        eye: '<path d="M16 4c-8.836 0-16 11.844-16 11.844s7.164 12.156 16 12.156 16-12.156 16-12.156-7.164-11.844-16-11.844zM16 24c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zM12 16c0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4-2.209 0-4-1.791-4-4z"></path>',
        ribbon: '<path d="M8 20c-1.41 0-2.742-0.289-4-0.736v12.736l4-4 4 4v-12.736c-1.258 0.447-2.59 0.736-4 0.736zM0 8c0-4.418 3.582-8 8-8s8 3.582 8 8c0 4.418-3.582 8-8 8-4.418 0-8-3.582-8-8z"></path>',
        iphone: '<path d="M16 0h-8c-4.418 0-8 3.582-8 8v16c0 4.418 3.582 8 8 8h8c4.418 0 8-3.582 8-8v-16c0-4.418-3.582-8-8-8zM12 30.062c-1.139 0-2.062-0.922-2.062-2.062s0.924-2.062 2.062-2.062 2.062 0.922 2.062 2.062-0.923 2.062-2.062 2.062zM20 24h-16v-16c0-2.203 1.795-4 4-4h8c2.203 0 4 1.797 4 4v16z"></path>',
        camera: '<path d="M16 20c0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4-2.209 0-4-1.791-4-4zM28 8l-3.289-6.643c-0.27-0.789-1.016-1.357-1.899-1.357h-5.492c-0.893 0-1.646 0.582-1.904 1.385l-3.412 6.615h-8.004c-2.209 0-4 1.791-4 4v20h32v-20c0-2.209-1.789-4-4-4zM6 16c-1.105 0-2-0.895-2-2s0.895-2 2-2 2 0.895 2 2-0.895 2-2 2zM20 28c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path>',
        cog: '<path d="M32 17.969v-4l-4.781-1.992c-0.133-0.375-0.273-0.738-0.445-1.094l1.93-4.805-2.829-2.828-4.762 1.961c-0.363-0.176-0.734-0.324-1.117-0.461l-2.027-4.75h-4l-1.977 4.734c-0.398 0.141-0.781 0.289-1.16 0.469l-4.754-1.91-2.828 2.828 1.938 4.711c-0.188 0.387-0.34 0.781-0.485 1.188l-4.703 2.011v4l4.707 1.961c0.145 0.406 0.301 0.801 0.488 1.188l-1.902 4.742 2.828 2.828 4.723-1.945c0.379 0.18 0.766 0.324 1.164 0.461l2.023 4.734h4l1.98-4.758c0.379-0.141 0.754-0.289 1.113-0.461l4.797 1.922 2.828-2.828-1.969-4.773c0.168-0.359 0.305-0.723 0.438-1.094l4.782-2.039zM15.969 22c-3.312 0-6-2.688-6-6s2.688-6 6-6 6 2.688 6 6-2.688 6-6 6z"></path>',
        lock: '<path d="M14 0c-5.508 0-9.996 4.484-9.996 10v2h-4.004v14c0 3.309 2.691 6 6 6h12c3.309 0 6-2.691 6-6v-16c0-5.516-4.488-10-10-10zM11.996 24c-1.101 0-1.996-0.895-1.996-2s0.895-2 1.996-2c1.105 0 2 0.895 2 2s-0.894 2-2 2zM20 12h-11.996v-2c0-3.309 2.691-6 5.996-6 3.309 0 6 2.691 6 6v2z"></path>',
        unlock: '<path d="M14.004 0c-5.516 0-9.996 4.484-9.996 10h3.996c0-3.309 2.688-6 6-6 3.305 0 5.996 2.691 5.996 6v2h-20v14c0 3.309 2.695 6 6 6h12c3.305 0 6-2.691 6-6v-16c0-5.516-4.488-10-9.996-10zM12 24c-1.102 0-2-0.895-2-2s0.898-2 2-2c1.109 0 2 0.895 2 2s-0.891 2-2 2z"></path>',
        fork: '<path d="M20 0v3.875c0 1.602-0.625 3.109-1.754 4.238l-11.316 11.254c-1.789 1.785-2.774 4.129-2.883 6.633h-4.047l6 6 6-6h-3.957c0.105-1.438 0.684-2.773 1.711-3.805l11.316-11.25c1.891-1.89 2.93-4.398 2.93-7.070v-3.875h-4zM23.953 26c-0.109-2.504-1.098-4.848-2.887-6.641l-2.23-2.215-2.836 2.821 2.242 2.23c1.031 1.027 1.609 2.367 1.715 3.805h-3.957l6 6 6-6h-4.047z"></path>',
        paperclip: '<path d="M17.293 15.292l-2.829-2.829-4 4c-1.953 1.953-1.953 5.119 0 7.071 1.953 1.953 5.118 1.953 7.071 0l10.122-9.879c3.123-3.124 3.123-8.188 0-11.313-3.125-3.124-8.19-3.124-11.313 0l-11.121 10.88c-4.296 4.295-4.296 11.26 0 15.557 4.296 4.296 11.261 4.296 15.556 0l6-6-2.829-2.829-5.999 6c-2.733 2.732-7.166 2.732-9.9 0-2.733-2.732-2.733-7.166 0-9.899l11.121-10.881c1.562-1.562 4.095-1.562 5.656 0 1.563 1.563 1.563 4.097 0 5.657l-10.121 9.879c-0.391 0.391-1.023 0.391-1.414 0s-0.391-1.023 0-1.414l4-4z"></path>',
        facebook: '<path d="M17.996 32h-5.996v-16h-4v-5.514l4-0.002-0.007-3.248c0-4.498 1.22-7.236 6.519-7.236h4.412v5.515h-2.757c-2.064 0-2.163 0.771-2.163 2.209l-0.008 2.76h4.959l-0.584 5.514-4.37 0.002-0.004 16z"></path>',
        twitter: '<path d="M32 6.076c-1.177 0.522-2.443 0.875-3.771 1.034 1.355-0.813 2.396-2.099 2.887-3.632-1.269 0.752-2.674 1.299-4.169 1.593-1.198-1.276-2.904-2.073-4.792-2.073-3.626 0-6.565 2.939-6.565 6.565 0 0.515 0.058 1.016 0.17 1.496-5.456-0.274-10.294-2.888-13.532-6.86-0.565 0.97-0.889 2.097-0.889 3.301 0 2.278 1.159 4.287 2.921 5.465-1.076-0.034-2.088-0.329-2.974-0.821-0.001 0.027-0.001 0.055-0.001 0.083 0 3.181 2.263 5.834 5.266 6.437-0.551 0.15-1.131 0.23-1.73 0.23-0.423 0-0.834-0.041-1.235-0.118 0.835 2.608 3.26 4.506 6.133 4.559-2.247 1.761-5.078 2.81-8.154 2.81-0.53 0-1.052-0.031-1.566-0.092 2.905 1.863 6.356 2.95 10.064 2.95 12.076 0 18.679-10.004 18.679-18.68 0-0.285-0.006-0.568-0.019-0.849 1.283-0.926 2.396-2.082 3.276-3.398z"></path>',
        earth: '<path d="M27.314 4.686c3.022 3.022 4.686 7.040 4.686 11.314s-1.664 8.292-4.686 11.314c-3.022 3.022-7.040 4.686-11.314 4.686s-8.292-1.664-11.314-4.686c-3.022-3.022-4.686-7.040-4.686-11.314s1.664-8.292 4.686-11.314c3.022-3.022 7.040-4.686 11.314-4.686s8.292 1.664 11.314 4.686zM25.899 25.9c1.971-1.971 3.281-4.425 3.821-7.096-0.421 0.62-0.824 0.85-1.073-0.538-0.257-2.262-2.335-0.817-3.641-1.621-1.375 0.927-4.466-1.802-3.941 1.276 0.81 1.388 4.375-1.858 2.598 1.079-1.134 2.050-4.145 6.592-3.753 8.946 0.049 3.43-3.504 0.715-4.729-0.422-0.824-2.279-0.281-6.262-2.434-7.378-2.338-0.102-4.344-0.314-5.25-2.927-0.545-1.87 0.58-4.653 2.584-5.083 2.933-1.843 3.98 2.158 6.731 2.232 0.854-0.894 3.182-1.178 3.375-2.18-1.805-0.318 2.29-1.517-0.173-2.199-1.358 0.16-2.234 1.409-1.512 2.467-2.632 0.614-2.717-3.809-5.247-2.414-0.064 2.206-4.132 0.715-1.407 0.268 0.936-0.409-1.527-1.594-0.196-1.379 0.654-0.036 2.854-0.807 2.259-1.325 1.225-0.761 2.255 1.822 3.454-0.059 0.866-1.446-0.363-1.713-1.448-0.98-0.612-0.685 1.080-2.165 2.573-2.804 0.497-0.213 0.973-0.329 1.336-0.296 0.752 0.868 2.142 1.019 2.215-0.104-1.862-0.892-3.915-1.363-6.040-1.363-3.051 0-5.952 0.969-8.353 2.762 0.645 0.296 1.012 0.664 0.39 1.134-0.483 1.439-2.443 3.371-4.163 3.098-0.893 1.54-1.482 3.238-1.733 5.017 1.441 0.477 1.773 1.42 1.464 1.736-0.734 0.64-1.185 1.548-1.418 2.541 0.469 2.87 1.818 5.515 3.915 7.612 2.644 2.644 6.16 4.1 9.899 4.1s7.255-1.456 9.899-4.1z"></path>',
        globe: '<path d="M15 2c-8.284 0-15 6.716-15 15s6.716 15 15 15c8.284 0 15-6.716 15-15s-6.716-15-15-15zM23.487 22c0.268-1.264 0.437-2.606 0.492-4h3.983c-0.104 1.381-0.426 2.722-0.959 4h-3.516zM6.513 12c-0.268 1.264-0.437 2.606-0.492 4h-3.983c0.104-1.381 0.426-2.722 0.959-4h3.516zM21.439 12c0.3 1.28 0.481 2.62 0.54 4h-5.979v-4h5.439zM16 10v-5.854c0.456 0.133 0.908 0.355 1.351 0.668 0.831 0.586 1.625 1.488 2.298 2.609 0.465 0.775 0.867 1.638 1.203 2.578h-4.852zM10.351 7.422c0.673-1.121 1.467-2.023 2.298-2.609 0.443-0.313 0.895-0.535 1.351-0.668v5.854h-4.852c0.336-0.94 0.738-1.803 1.203-2.578zM14 12v4h-5.979c0.059-1.38 0.24-2.72 0.54-4h5.439zM2.997 22c-0.533-1.278-0.854-2.619-0.959-4h3.983c0.055 1.394 0.224 2.736 0.492 4h-3.516zM8.021 18h5.979v4h-5.439c-0.3-1.28-0.481-2.62-0.54-4zM14 24v5.854c-0.456-0.133-0.908-0.355-1.351-0.668-0.831-0.586-1.625-1.488-2.298-2.609-0.465-0.775-0.867-1.638-1.203-2.578h4.852zM19.649 26.578c-0.673 1.121-1.467 2.023-2.298 2.609-0.443 0.312-0.895 0.535-1.351 0.668v-5.854h4.852c-0.336 0.94-0.738 1.802-1.203 2.578zM16 22v-4h5.979c-0.059 1.38-0.24 2.72-0.54 4h-5.439zM23.98 16c-0.055-1.394-0.224-2.736-0.492-4h3.516c0.533 1.278 0.855 2.619 0.959 4h-3.983zM25.958 10h-2.997c-0.582-1.836-1.387-3.447-2.354-4.732 1.329 0.636 2.533 1.488 3.585 2.54 0.671 0.671 1.261 1.404 1.766 2.192zM5.808 7.808c1.052-1.052 2.256-1.904 3.585-2.54-0.967 1.285-1.771 2.896-2.354 4.732h-2.997c0.504-0.788 1.094-1.521 1.766-2.192zM4.042 24h2.997c0.583 1.836 1.387 3.447 2.354 4.732-1.329-0.636-2.533-1.488-3.585-2.54-0.671-0.671-1.261-1.404-1.766-2.192zM24.192 26.192c-1.052 1.052-2.256 1.904-3.585 2.54 0.967-1.285 1.771-2.896 2.354-4.732h2.997c-0.504 0.788-1.094 1.521-1.766 2.192z"></path>',
        "thin-arrow-up": '<path d="M27.414 12.586l-10-10c-0.781-0.781-2.047-0.781-2.828 0l-10 10c-0.781 0.781-0.781 2.047 0 2.828s2.047 0.781 2.828 0l6.586-6.586v19.172c0 1.105 0.895 2 2 2s2-0.895 2-2v-19.172l6.586 6.586c0.39 0.39 0.902 0.586 1.414 0.586s1.024-0.195 1.414-0.586c0.781-0.781 0.781-2.047 0-2.828z"></path>',
        "thin-arrow-down": '<path d="M4.586 19.414l10 10c0.781 0.781 2.047 0.781 2.828 0l10-10c0.781-0.781 0.781-2.047 0-2.828s-2.047-0.781-2.828 0l-6.586 6.586v-19.172c0-1.105-0.895-2-2-2s-2 0.895-2 2v19.172l-6.586-6.586c-0.391-0.39-0.902-0.586-1.414-0.586s-1.024 0.195-1.414 0.586c-0.781 0.781-0.781 2.047 0 2.828z"></path>',
        "thin-arrow-up-left": '<path d="M4 18c0 1.105 0.895 2 2 2s2-0.895 2-2v-7.172l16.586 16.586c0.781 0.781 2.047 0.781 2.828 0 0.391-0.391 0.586-0.902 0.586-1.414s-0.195-1.024-0.586-1.414l-16.586-16.586h7.172c1.105 0 2-0.895 2-2s-0.895-2-2-2h-14v14z"></path>',
        "thin-arrow-up-right": '<path d="M26.001 4c-0 0-0.001 0-0.001 0h-11.999c-1.105 0-2 0.895-2 2s0.895 2 2 2h7.172l-16.586 16.586c-0.781 0.781-0.781 2.047 0 2.828 0.391 0.391 0.902 0.586 1.414 0.586s1.024-0.195 1.414-0.586l16.586-16.586v7.172c0 1.105 0.895 2 2 2s2-0.895 2-2v-14h-1.999z"></path>',
        "thin-arrow-left": '<path d="M12.586 4.586l-10 10c-0.781 0.781-0.781 2.047 0 2.828l10 10c0.781 0.781 2.047 0.781 2.828 0s0.781-2.047 0-2.828l-6.586-6.586h19.172c1.105 0 2-0.895 2-2s-0.895-2-2-2h-19.172l6.586-6.586c0.39-0.391 0.586-0.902 0.586-1.414s-0.195-1.024-0.586-1.414c-0.781-0.781-2.047-0.781-2.828 0z"></path>',
        "thin-arrow-right": '<path d="M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z"></path>',
        "thin-arrow-down-left": '<path d="M18 28c1.105 0 2-0.895 2-2s-0.895-2-2-2h-7.172l16.586-16.586c0.781-0.781 0.781-2.047 0-2.828-0.391-0.391-0.902-0.586-1.414-0.586s-1.024 0.195-1.414 0.586l-16.586 16.586v-7.172c0-1.105-0.895-2-2-2s-2 0.895-2 2v14h14z"></path>',
        "thin-arrow-down-right": '<path d="M28 14c0-1.105-0.895-2-2-2s-2 0.895-2 2v7.172l-16.586-16.586c-0.781-0.781-2.047-0.781-2.828 0-0.391 0.391-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414l16.586 16.586h-7.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h14v-14z"></path>'
    },
    boundingBox: function(t) {
        var e;
        if ($(t).parents("body").length) e = t.getBBox();
        else {
            var n = t.parentNode,
                i = document.createElementNS(SL.util.svg.NAMESPACE, "svg");
            i.setAttribute("width", "0"), i.setAttribute("height", "0"), i.setAttribute("style", "visibility: hidden; position: absolute; left: 0; top: 0;"), i.appendChild(t), document.body.appendChild(i), e = t.getBBox(), n ? n.appendChild(t) : i.removeChild(t), document.body.removeChild(i)
        }
        return e
    },
    pointsToPolygon: function(t) {
        for (var e = []; t.length >= 2;) e.push(t.shift() + "," + t.shift());
        return e.join(" ")
    },
    rect: function(t, e) {
        var n = document.createElementNS(SL.util.svg.NAMESPACE, "rect");
        return n.setAttribute("width", t), n.setAttribute("height", e), n
    },
    ellipse: function(t, e) {
        var n = document.createElementNS(SL.util.svg.NAMESPACE, "ellipse");
        return n.setAttribute("rx", t / 2), n.setAttribute("ry", e / 2), n.setAttribute("cx", t / 2), n.setAttribute("cy", e / 2), n
    },
    triangleUp: function(t, e) {
        var n = document.createElementNS(SL.util.svg.NAMESPACE, "polygon");
        return n.setAttribute("points", SL.util.svg.pointsToPolygon([t / 2, 0, t, e, 0, e])), n
    },
    triangleDown: function(t, e) {
        var n = document.createElementNS(SL.util.svg.NAMESPACE, "polygon");
        return n.setAttribute("points", SL.util.svg.pointsToPolygon([0, 0, t, 0, t / 2, e])), n
    },
    triangleLeft: function(t, e) {
        var n = document.createElementNS(SL.util.svg.NAMESPACE, "polygon");
        return n.setAttribute("points", SL.util.svg.pointsToPolygon([0, e / 2, t, 0, t, e])), n
    },
    triangleRight: function(t, e) {
        var n = document.createElementNS(SL.util.svg.NAMESPACE, "polygon");
        return n.setAttribute("points", SL.util.svg.pointsToPolygon([t, e / 2, 0, e, 0, 0])), n
    },
    arrowUp: function(t, e) {
        var n = document.createElementNS(SL.util.svg.NAMESPACE, "polygon");
        return n.setAttribute("points", SL.util.svg.pointsToPolygon([.5 * t, 0, t, .5 * e, .7 * t, .5 * e, .7 * t, e, .3 * t, e, .3 * t, .5 * e, 0, .5 * e, .5 * t, 0])), n
    },
    arrowDown: function(t, e) {
        var n = document.createElementNS(SL.util.svg.NAMESPACE, "polygon");
        return n.setAttribute("points", SL.util.svg.pointsToPolygon([.5 * t, e, t, .5 * e, .7 * t, .5 * e, .7 * t, 0, .3 * t, 0, .3 * t, .5 * e, 0, .5 * e, .5 * t, e])), n
    },
    arrowLeft: function(t, e) {
        var n = document.createElementNS(SL.util.svg.NAMESPACE, "polygon");
        return n.setAttribute("points", SL.util.svg.pointsToPolygon([t, .3 * e, .5 * t, .3 * e, .5 * t, 0, 0, .5 * e, .5 * t, e, .5 * t, .7 * e, t, .7 * e, t, .3 * e])), n
    },
    arrowRight: function(t, e) {
        var n = document.createElementNS(SL.util.svg.NAMESPACE, "polygon");
        return n.setAttribute("points", SL.util.svg.pointsToPolygon([0, .3 * e, .5 * t, .3 * e, .5 * t, 0, t, .5 * e, .5 * t, e, .5 * t, .7 * e, 0, .7 * e])), n
    },
    polygon: function(t, e, n) {
        var i = document.createElementNS(SL.util.svg.NAMESPACE, "polygon"),
            s = [];
        if (3 === n) s = [t / 2, 0, t, e, 0, e];
        else if (n > 3)
            for (var o = t / 2, a = e / 2, r = 0; n > r; r++) {
                var l = o + o * Math.cos(2 * Math.PI * r / n),
                    c = a + a * Math.sin(2 * Math.PI * r / n);
                l = Math.round(10 * l) / 10, c = Math.round(10 * c) / 10, s.push(l), s.push(c)
            }
        return i.setAttribute("points", SL.util.svg.pointsToPolygon(s)), i
    },
    symbol: function(t) {
        var e = document.createElementNS(SL.util.svg.NAMESPACE, "g"),
            n = SL.util.svg.SYMBOLS[t];
        return n && (e.innerSVG = SL.util.svg.SYMBOLS[t]), e
    }
}, SL.warnings = {
    STORAGE_KEY: "slides-last-warning-id",
    MESSAGE_ID: 23,
    init: function() {
        this.showMessage()
    },
    showMessage: function() {
        if (this.hasMessage() && !this.hasExpired() && SL.util.user.isLoggedIn() && Modernizr.localstorage) {
            var t = parseInt(localStorage.getItem(this.STORAGE_KEY), 10) || 0;
            if (t < this.MESSAGE_ID) {
                var e = SL.notify(this.MESSAGE_TEXT, {
                    autoHide: !1
                });
                e.destroyed.add(this.hideMessage.bind(this))
            }
        }
    },
    hideMessage: function() {
        Modernizr.localstorage && localStorage.setItem(this.STORAGE_KEY, this.MESSAGE_ID)
    },
    hasMessage: function() {
        return !!this.MESSAGE_TEXT
    },
    hasExpired: function() {
        return this.MESSAGE_EXPIRY ? moment().diff(moment(this.MESSAGE_EXPIRY)) > 0 : !1
    }
}, SL("helpers").FileUploader = Class.extend({
    init: function(t) {
        if (this.options = $.extend({
                formdata: !0,
                contentType: !1,
                external: !1,
                method: "POST"
            }, t), "undefined" == typeof this.options.file || "undefined" == typeof this.options.service) throw "File and service must be defined for FileUploader task.";
        this.timeout = -1, this.uploading = !1, this.onUploadSuccess = this.onUploadSuccess.bind(this), this.onUploadProgress = this.onUploadProgress.bind(this), this.onUploadError = this.onUploadError.bind(this), this.failed = new signals.Signal, this.succeeded = new signals.Signal, this.progressed = new signals.Signal
    },
    upload: function() {
        if (this.uploading = !0, clearTimeout(this.timeout), "number" == typeof this.options.timeout && (this.timeout = setTimeout(this.onUploadError, this.options.timeout)), this.xhr = new XMLHttpRequest, this.xhr.onload = function() {
                if (this.options.external === !0) this.onUploadSuccess();
                else if (422 === this.xhr.status || 500 === this.xhr.status) this.onUploadError();
                else {
                    try {
                        var t = JSON.parse(this.xhr.responseText)
                    } catch (e) {
                        return this.onUploadError()
                    }
                    this.onUploadSuccess(t)
                }
            }.bind(this), this.xhr.onerror = this.onUploadError, this.xhr.upload.onprogress = this.onUploadProgress, this.xhr.open(this.options.method, this.options.service, !0), this.options.contentType) {
            var t = "string" == typeof this.options.contentType ? this.options.contentType : this.options.file.type;
            t && this.xhr.setRequestHeader("Content-Type", t)
        }
        if (this.options.formdata) {
            var e = new FormData;
            this.options.filename ? e.append("file", this.options.file, this.options.filename) : e.append("file", this.options.file);
            var n = this.options.csrf || document.querySelector('meta[name="csrf-token"]');
            n && !this.options.external && e.append("authenticity_token", n.getAttribute("content")), this.xhr.send(e)
        } else this.xhr.send(this.options.file)
    },
    isUploading: function() {
        return this.uploading
    },
    onUploadSuccess: function(t) {
        clearTimeout(this.timeout), this.uploading = !1, this.succeeded.dispatch(t)
    },
    onUploadProgress: function(t) {
        t.lengthComputable && this.progressed.dispatch(t.loaded / t.total)
    },
    onUploadError: function() {
        clearTimeout(this.timeout), this.uploading = !1, this.failed.dispatch()
    },
    destroy: function() {
        if (clearTimeout(this.timeout), this.xhr) {
            var t = function() {};
            this.xhr.onload = t, this.xhr.onerror = t, this.xhr.upload.onprogress = t, this.xhr.abort()
        }
        this.succeeded.dispose(), this.progressed.dispose(), this.failed.dispose()
    }
}), SL.helpers.Fullscreen = {
    enter: function(t) {
        t = t || document.body;
        var e = t.requestFullScreen || t.webkitRequestFullscreen || t.webkitRequestFullScreen || t.mozRequestFullScreen || t.msRequestFullscreen;
        e && e.apply(t)
    },
    exit: function() {
        var t = document.exitFullscreen || document.msExitFullscreen || document.mozCancelFullScreen || document.webkitExitFullscreen;
        t && t.apply(document)
    },
    toggle: function() {
        SL.helpers.Fullscreen.isActive() ? SL.helpers.Fullscreen.exit() : SL.helpers.Fullscreen.enter()
    },
    isEnabled: function() {
        return !!(document.fullscreenEnabled || document.mozFullscreenEnabled || document.msFullscreenEnabled || document.webkitFullscreenEnabled)
    },
    isActive: function() {
        return !!(document.fullscreenElement || document.msFullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement)
    }
}, SL("helpers").ImageUploader = Class.extend({
    init: function(t) {
        this.options = $.extend({
            service: SL.config.AJAX_MEDIA_CREATE,
            timeout: 9e4
        }, t), this.onUploadSuccess = this.onUploadSuccess.bind(this), this.onUploadProgress = this.onUploadProgress.bind(this), this.onUploadError = this.onUploadError.bind(this), this.progressed = new signals.Signal, this.succeeded = new signals.Signal, this.failed = new signals.Signal
    },
    upload: function(t, e) {
        return t && t.type.match(/image.*/) ? "number" == typeof t.size && t.size / 1024 > SL.config.MAX_IMAGE_UPLOAD_SIZE.maxsize ? void SL.notify("No more than " + Math.round(MAX_IMAGE_UPLOAD_SIZE / 1e3) + "mb please", "negative") : (this.fileUploader && this.fileUploader.destroy(), this.fileUploader = new SL.helpers.FileUploader({
            file: t,
            filename: e || this.options.filename,
            service: this.options.service,
            timeout: this.options.timeout
        }), this.fileUploader.succeeded.add(this.onUploadSuccess), this.fileUploader.progressed.add(this.onUploadProgress), this.fileUploader.failed.add(this.onUploadError), void this.fileUploader.upload()) : void SL.notify("Only image files, please")
    },
    isUploading: function() {
        return !(!this.fileUploader || !this.fileUploader.isUploading())
    },
    onUploadSuccess: function(t) {
        t && "string" == typeof t.url ? this.succeeded.dispatch(t.url) : this.failed.dispatch(), this.fileUploader.destroy(), this.fileUploader = null
    },
    onUploadProgress: function(t) {
        this.progressed.dispatch(t)
    },
    onUploadError: function() {
        this.failed.dispatch(), this.fileUploader.destroy(), this.fileUploader = null
    },
    destroy: function() {
        this.succeeded.dispose(), this.progressed.dispose(), this.failed.dispose(), this.fileUploader && this.fileUploader.destroy()
    }
}), SL.helpers.PageLoader = {
    show: function(t) {
        t = $.extend({
            style: null,
            message: null
        }, t);
        var e = $(".page-loader");
        0 === e.length && (e = $(['<div class="page-loader">', '<div class="page-loader-inner hidden">', '<p class="page-loader-message"></p>', '<div class="page-loader-spinner spinner"></div>', "</div>", "</div>"].join("")).appendTo(document.body), setTimeout(function() {
            e.find(".page-loader-inner").removeClass("hidden")
        }, 1)), t.container && e.appendTo(t.container), t.message && e.find(".page-loader-message").html(t.message), t.style && e.attr("data-style", t.style), clearTimeout(this.hideTimeout), e.removeClass("frozen"), e.addClass("visible")
    },
    hide: function() {
        $(".page-loader").removeClass("visible"), clearTimeout(this.hideTimeout), this.hideTimeout = setTimeout(function() {
            $(".page-loader").addClass("frozen")
        }.bind(this), 1e3)
    },
    waitForFonts: function(t) {
        SL.fonts.isReady() === !1 && (this.show(t), SL.fonts.ready.add(this.hide))
    }
}, SL("helpers").PollJob = Class.extend({
    init: function(t) {
        this.options = $.extend({
            interval: 1e3,
            timeout: Number.MAX_VALUE,
            retries: Number.MAX_VALUE
        }, t), this.interval = -1, this.running = !1, this.poll = this.poll.bind(this), this.ended = new signals.Signal, this.polled = new signals.Signal
    },
    start: function() {
        this.running = !0, this.pollStart = Date.now(), this.pollTimes = 0, clearInterval(this.interval), this.interval = setInterval(this.poll, this.options.interval)
    },
    stop: function() {
        this.running = !1, clearInterval(this.interval)
    },
    poll: function() {
        this.pollTimes++, Date.now() - this.pollStart > this.options.timeout || this.pollTimes > this.options.retries ? (this.stop(), this.ended.dispatch()) : this.polled.dispatch()
    }
}), SL("helpers").StreamEditor = Class.extend({
    init: function(t) {
        this.options = $.extend({}, t), this.statusChanged = new signals.Signal, this.messageReceived = new signals.Signal, this.socketIsDisconnected = !1, this.debugMode = !!SL.util.getQuery().debug
    },
    connect: function() {
        var t = SL.config.STREAM_ENGINE_HOST + "/" + SL.config.STREAM_ENGINE_EDITOR_NAMESPACE;
        this.log("socket connected", t), this.socket = io.connect(t), this.socket.on("connect", this.onSocketConnected.bind(this)), this.socket.on("disconnect", this.onSocketDisconnected.bind(this)), this.socket.on("message", this.onSocketMessage.bind(this))
    },
    log: function() {
        if (this.debugMode && "function" == typeof console.log.apply) {
            var t = ["Stream:"].concat(Array.prototype.slice.call(arguments));
            console.log.apply(console, t)
        }
    },
    setStatus: function(t) {
        this.status !== t && (this.status = t, this.statusChanged.dispatch(this.status))
    },
    onSocketMessage: function(t) {
        try {
            var e = JSON.parse(t.data);
            this.messageReceived.dispatch(e)
        } catch (n) {
            this.log("unable to parse streamed socket message as JSON.")
        }
        this.setStatus(SL.helpers.StreamEditor.STATUS_NONE)
    },
    onSocketConnected: function() {
        this.socket.emit("subscribe", {
            deck_id: this.options.deckID
        }), this.socketIsDisconnected === !0 && (this.socketIsDisconnected = !1, this.log("socket connection regained"), this.setStatus(SL.helpers.StreamEditor.STATUS_NONE))
    },
    onSocketDisconnected: function() {
        this.socketIsDisconnected === !1 && (this.socketIsDisconnected = !0, this.log("socket connection lost"), this.setStatus(SL.helpers.StreamEditor.STATUS_CONNECTION_LOST))
    }
}), SL.helpers.StreamEditor.STATUS_NONE = "", SL.helpers.StreamEditor.STATUS_CONNECTION_LOST = "connection_lost", SL("helpers").StreamLive = Class.extend({
    init: function(t) {
        this.options = $.extend({
            reveal: window.Reveal,
            subscriber: !0,
            publisher: !1,
            publisherID: Date.now() + "-" + Math.round(1e6 * Math.random()),
            deckID: SL.current_deck.get("id")
        }, t), this.ready = new signals.Signal, this.stateChanged = new signals.Signal, this.statusChanged = new signals.Signal, this.subscribersChanged = new signals.Signal, this.socketIsDisconnected = !1, this.debugMode = !!SL.util.getQuery().debug
    },
    connect: function() {
        this.options.publisher ? this.setupPublisher() : this.setupSubscriber()
    },
    setupPublisher: function() {
        this.publish = this.publish.bind(this), this.publishable = !0, this.options.reveal.addEventListener("slidechanged", this.publish), this.options.reveal.addEventListener("fragmentshown", this.publish), this.options.reveal.addEventListener("fragmenthidden", this.publish), this.options.reveal.addEventListener("overviewshown", this.publish), this.options.reveal.addEventListener("overviewhidden", this.publish), this.options.reveal.addEventListener("paused", this.publish), this.options.reveal.addEventListener("resumed", this.publish), $.ajax({
            url: "/api/v1/decks/" + this.options.deckID + "/stream.json",
            type: "GET",
            context: this
        }).done(function(t) {
            this.log("found existing stream"), this.setState(JSON.parse(t.state), !0), this.setupSocket(), this.ready.dispatch()
        }).error(function() {
            this.log("no existing stream, publishing state"), this.publish(function() {
                this.setupSocket(), this.ready.dispatch()
            }.bind(this))
        })
    },
    setupSubscriber: function() {
        $.ajax({
            url: "/api/v1/decks/" + this.options.deckID + "/stream.json",
            type: "GET",
            context: this
        }).done(function(t) {
            this.log("found existing stream"), this.setStatus(SL.helpers.StreamLive.STATUS_NONE), this.setState(JSON.parse(t.state), !0), this.setupSocket(), this.ready.dispatch()
        }).error(function() {
            this.retryStartTime = Date.now(), this.setStatus(SL.helpers.StreamLive.STATUS_WAITING_FOR_PUBLISHER), this.log("no existing stream, retrying in " + SL.helpers.StreamLive.CONNECTION_RETRY_INTERVAL / 1e3 + "s"), setTimeout(this.setupSubscriber.bind(this), SL.helpers.StreamLive.CONNECTION_RETRY_INTERVAL)
        })
    },
    setupSocket: function() {
        if (this.options.subscriber) {
            var t = SL.config.STREAM_ENGINE_HOST + "/" + SL.config.STREAM_ENGINE_LIVE_NAMESPACE;
            this.log("socket connected", t), this.socket = io.connect(t), this.socket.on("connect", this.onSocketConnected.bind(this)), this.socket.on("disconnect", this.onSocketDisconnected.bind(this)), this.socket.on("message", this.onSocketStateMessage.bind(this)), this.socket.on("subscribers", this.onSocketSubscribersMessage.bind(this))
        }
    },
    publish: function(t, e) {
        if (this.publishable) {
            var n = this.options.reveal.getState();
            n.publisher_id = this.options.publisherID, n = $.extend(n, e), this.log("publish", n.publisher_id), $.ajax({
                url: "/api/v1/decks/" + this.options.deckID + "/stream.json",
                type: "PUT",
                data: {
                    state: JSON.stringify(n)
                },
                success: t
            })
        }
    },
    log: function() {
        if (this.debugMode && "function" == typeof console.log.apply) {
            var t = "Stream (" + (this.options.publisher ? "publisher" : "subscriber") + "):",
                e = [t].concat(Array.prototype.slice.call(arguments));
            console.log.apply(console, e)
        }
    },
    setState: function(t, e) {
        this.publishable = !1, e && $(".reveal").addClass("no-transition"), this.options.reveal.setState(t), this.stateChanged.dispatch(t), setTimeout(function() {
            this.publishable = !0, e && $(".reveal").removeClass("no-transition")
        }.bind(this), 1)
    },
    setStatus: function(t) {
        this.status !== t && (this.status = t, this.statusChanged.dispatch(this.status))
    },
    getRetryStartTime: function() {
        return this.retryStartTime
    },
    isPublisher: function() {
        return this.options.publisher
    },
    onSocketStateMessage: function(t) {
        try {
            var e = JSON.parse(t.data);
            e.publisher_id != this.options.publisherID && (this.log("sync", "from: " + e.publisher_id, "to: " + this.options.publisherID), this.setState(e))
        } catch (n) {
            this.log("unable to parse streamed deck state as JSON.")
        }
        this.setStatus(SL.helpers.StreamLive.STATUS_NONE)
    },
    onSocketSubscribersMessage: function(t) {
        this.subscribersChanged.dispatch(t.subscribers)
    },
    onSocketConnected: function() {
        this.socket.emit("subscribe", {
            deck_id: this.options.deckID,
            publisher: this.options.publisher
        }), this.socketIsDisconnected === !0 && (this.socketIsDisconnected = !1, this.log("socket connection regained"), this.setStatus(SL.helpers.StreamLive.STATUS_NONE))
    },
    onSocketDisconnected: function() {
        this.socketIsDisconnected === !1 && (this.socketIsDisconnected = !0, this.log("socket connection lost"), this.setStatus(SL.helpers.StreamLive.STATUS_CONNECTION_LOST))
    }
}), SL.helpers.StreamLive.CONNECTION_RETRY_INTERVAL = 2e4, SL.helpers.StreamLive.STATUS_NONE = "", SL.helpers.StreamLive.STATUS_CONNECTION_LOST = "connection_lost", SL.helpers.StreamLive.STATUS_WAITING_FOR_PUBLISHER = "waiting_for_publisher", SL.helpers.ThemeController = {
    paint: function(t, e) {
        e = e || {};
        var n = $(".reveal-viewport");
        if (0 === n.length || "undefined" == typeof window.Reveal) return !1;
        if (this.cleanup(), n.addClass("theme-font-" + t.get("font")), n.addClass("theme-color-" + t.get("color")), Reveal.configure($.extend({
                center: t.get("center"),
                rolling_links: t.get("rolling_links"),
                transition: t.get("transition"),
                backgroundTransition: t.get("background_transition")
            }, e)), t.get("html")) {
            var i = $("#theme-html-output");
            i.length ? i.html(t.get("html")) : $(".reveal").append('<div id="theme-html-output">' + t.get("html") + "</div>")
        } else $("#theme-html-output").remove();
        if (t.get("css")) {
            var s = $("#theme-css-output");
            s.length ? s.html(t.get("css")) : $("head").append('<style id="theme-css-output">' + t.get("css") + "</style>")
        } else $("#theme-css-output").remove();
        if (e.js !== !1)
            if (t.get("js")) {
                var o = $("#theme-js-output");
                o.text() !== t.get("js") && (o.remove(), $("body").append('<script id="theme-js-output">' + t.get("js") + "</script>"))
            } else $("#theme-js-output").remove();
        SL.util.deck.sortInjectedStyles(), SL.fonts.loadDeckFont(t.get("font"))
    },
    cleanup: function() {
        var t = $(".reveal-viewport"),
            e = $(".reveal");
        t.attr("class", t.attr("class").replace(/theme\-(font|color)\-([a-z0-9-])*/gi, "")), SL.config.THEME_TRANSITIONS.forEach(function(t) {
            e.removeClass(t.id)
        })
    }
}, SL.popup = {
    items: [],
    singletons: [],
    open: function(t, e) {
        for (var n, i = 0; i < SL.popup.singletons.length; i++)
            if (SL.popup.singletons[i].factory === t) {
                n = SL.popup.singletons[i].instance;
                break
            }
        return n || (n = new t(e), n.isSingleton() && SL.popup.singletons.push({
            factory: t,
            instance: n
        })), n.open(e), SL.popup.items.push({
            instance: n,
            factory: t
        }), $("html").addClass("popup-open"), n
    },
    close: function(t) {
        SL.popup.items.concat().forEach(function(e) {
            t && t !== e.factory || e.instance.close(!0)
        })
    },
    isOpen: function(t) {
        for (var e = 0; e < SL.popup.items.length; e++)
            if (!t || t === SL.popup.items[e].factory) return !0;
        return !1
    },
    unregister: function(t) {
        for (var e = 0; e < SL.popup.items.length; e++) SL.popup.items[e].instance === t && (removedValue = SL.popup.items.splice(e, 1), e--);
        0 === SL.popup.items.length && $("html").removeClass("popup-open")
    }
}, SL("components.popup").Popup = Class.extend({
    WINDOW_PADDING: 5,
    USE_ABSOLUTE_POSITIONING: SL.util.device.IS_PHONE || SL.util.device.IS_TABLET,
    init: function(t) {
        if (this.options = $.extend({
                title: "",
                titleItem: "",
                header: !0,
                headerActions: [{
                    label: "Close",
                    className: "grey",
                    callback: this.close.bind(this)
                }],
                width: "auto",
                height: "auto",
                singleton: !1,
                closeOnEscape: !0,
                closeOnClickOutside: !0
            }, t), this.render(), this.bind(), this.layout(), this.USE_ABSOLUTE_POSITIONING) {
            var e = $(window);
            this.domElement.css({
                position: "absolute"
            }), this.innerElement.css({
                maxWidth: e.width() - 2 * this.WINDOW_PADDING
            }), this.innerElement.css({
                position: "absolute",
                top: e.scrollTop() + (e.height() - this.innerElement.outerHeight()) / 2,
                left: e.scrollLeft() + (e.width() - this.innerElement.outerWidth()) / 2
            })
        }
    },
    render: function() {
        this.domElement = $('<div class="sl-popup" data-id="' + this.TYPE + '">'), this.domElement.appendTo(document.body), this.innerElement = $('<div class="sl-popup-inner">'), this.innerElement.appendTo(this.domElement), this.options.header && this.renderHeader(), this.bodyElement = $('<div class="sl-popup-body">'), this.bodyElement.appendTo(this.innerElement)
    },
    renderHeader: function() {
        this.headerElement = $(['<header class="sl-popup-header">', '<h3 class="sl-popup-header-title">' + this.options.title + "</h3>", "</header>"].join("")), this.headerElement.appendTo(this.innerElement), this.headerTitleElement = this.headerElement.find(".sl-popup-header-title"), this.options.titleItem && this.headerTitleElement.append('<span class="sl-popup-header-title-item">' + this.options.titleItem + "</span>"), this.options.headerActions && this.options.headerActions.length && (this.headerActionsElement = $('<div class="sl-popup-header-actions">').appendTo(this.headerElement), this.options.headerActions.forEach(function(t) {
            $('<button class="button l ' + t.className + '">' + t.label + "</button>").appendTo(this.headerActionsElement).on("vclick", function(e) {
                t.callback(e), e.preventDefault()
            })
        }.bind(this)))
    },
    bind: function() {
        this.onKeyDown = this.onKeyDown.bind(this), this.onWindowResize = this.onWindowResize.bind(this), this.onBackgroundClicked = this.onBackgroundClicked.bind(this), this.domElement.on("vclick", this.onBackgroundClicked)
    },
    layout: function() {
        if (this.innerElement.css({
                width: this.options.width,
                height: this.options.height
            }), this.options.height) {
            var t = this.headerElement ? this.headerElement.outerHeight() : 0;
            this.headerElement && "number" == typeof this.options.height ? this.bodyElement.css("height", this.options.height - t) : this.bodyElement.css("height", "auto"), this.bodyElement.css("max-height", window.innerHeight - t - 2 * this.WINDOW_PADDING)
        }
        if (this.headerElement) {
            var e = this.headerElement.width(),
                n = this.headerActionsElement.outerWidth();
            this.headerTitleElement.css("max-width", e - n - 30)
        }
        this.USE_ABSOLUTE_POSITIONING && this.domElement.css("height", Math.max($(window).height(), $(document).height()))
    },
    open: function(t) {
        this.domElement.appendTo(document.body), clearTimeout(this.closeTimeout), this.closeTimeout = null, this.options = $.extend(this.options, t), SL.keyboard.keydown(this.onKeyDown), $(window).on("resize", this.onWindowResize), setTimeout(function() {
            this.domElement.addClass("visible")
        }.bind(this), 1)
    },
    close: function(t) {
        this.closeTimeout || (t ? this.closeConfirmed() : this.checkUnsavedChanges(this.closeConfirmed.bind(this)))
    },
    closeConfirmed: function() {
        SL.keyboard.release(this.onKeyDown), $(window).off("resize", this.onWindowResize), this.domElement.removeClass("visible"), SL.popup.unregister(this), this.closeTimeout = setTimeout(function() {
            this.domElement.detach(), this.isSingleton() || this.destroy()
        }.bind(this), 500)
    },
    checkUnsavedChanges: function(t) {
        t()
    },
    isSingleton: function() {
        return this.options.singleton
    },
    onBackgroundClicked: function(t) {
        $(t.target).is(this.domElement) && (this.options.closeOnClickOutside && this.close(), t.preventDefault())
    },
    onWindowResize: function() {
        this.layout()
    },
    onKeyDown: function(t) {
        return 27 === t.keyCode ? (this.options.closeOnEscape && this.close(), !1) : !0
    },
    destroy: function() {
        SL.popup.unregister(this), this.options = null, this.domElement.remove()
    }
}), SL("components.popup").EditHTML = SL.components.popup.Popup.extend({
    TYPE: "edit-html",
    init: function(t) {
        this._super($.extend({
            title: "Edit HTML",
            width: 900,
            height: 550,
            headerActions: [{
                label: "Cancel",
                className: "outline",
                callback: this.close.bind(this)
            }, {
                label: "Save",
                className: "positive",
                callback: this.saveAndClose.bind(this)
            }]
        }, t)), this.saved = new signals.Signal
    },
    render: function() {
        this._super(), this.bodyElement.html('<div id="ace-html" class="editor"></div>'), this.editor && "function" == typeof this.editor.destroy && (this.editor.destroy(), this.editor = null);
        try {
            this.editor = ace.edit("ace-html"), this.editor.setTheme("ace/theme/monokai"), this.editor.setDisplayIndentGuides(!0), this.editor.setShowPrintMargin(!1), this.editor.getSession().setMode("ace/mode/html")
        } catch (t) {
            console.log("An error occurred while initializing the Ace editor.")
        }
        this.editor.env.document.setValue(this.options.html), this.editor.focus()
    },
    saveAndClose: function() {
        this.saved.dispatch(this.getHTML()), this.close(!0)
    },
    checkUnsavedChanges: function(t) {
        this.getHTML() === this.options.html || this.cancelPrompt ? t() : (this.cancelPrompt = SL.prompt({
            title: "Discard unsaved changes?",
            type: "select",
            data: [{
                html: "<h3>Cancel</h3>"
            }, {
                html: "<h3>Discard</h3>",
                selected: !0,
                className: "negative",
                callback: t
            }]
        }), this.cancelPrompt.destroyed.add(function() {
            this.cancelPrompt = null
        }.bind(this)))
    },
    getHTML: function() {
        return this.editor.env.document.getValue()
    },
    destroy: function() {
        this.editor && "function" == typeof this.editor.destroy && (this.editor.destroy(), this.editor = null), this.saved && (this.saved.dispose(), this.saved = null), this._super()
    }
}), SL("components.popup").InsertSnippet = SL.components.popup.Popup.extend({
    TYPE: "insert-snippet",
    init: function(t) {
        this._super($.extend({
            title: "Insert",
            titleItem: '"' + t.snippet.get("title") + '"',
            width: 500,
            headerActions: [{
                label: "Cancel",
                className: "outline",
                callback: this.close.bind(this)
            }, {
                label: "Insert",
                className: "positive",
                callback: this.insertAndClose.bind(this)
            }]
        }, t)), this.snippetInserted = new signals.Signal
    },
    render: function() {
        this._super(), this.variablesElement = $('<div class="variables sl-form"></div>'), this.variablesElement.appendTo(this.bodyElement), this.variables = this.options.snippet.getTemplateVariables(), this.variables.forEach(function(t) {
            var e = $(['<div class="unit">', "<label>" + t.label + "</label>", '<input type="text" value="' + t.defaultValue + '">', "</div>"].join("")).appendTo(this.variablesElement);
            e.find("input").data("variable", t)
        }.bind(this)), this.variablesElement.find("input").first().focus().select()
    },
    insertAndClose: function() {
        this.variablesElement.find("input").each(function(t, e) {
            e = $(e), e.data("variable").value = e.val()
        }), this.snippetInserted.dispatch(this.options.snippet.templatize(this.variables)), this.close()
    },
    onKeyDown: function(t) {
        return 13 === t.keyCode ? (this.insertAndClose(), !1) : this._super(t)
    },
    destroy: function() {
        this.snippetInserted.dispose(), this._super()
    }
}), SL("components.popup").Revision = SL.components.popup.Popup.extend({
    TYPE: "revision",
    init: function(t) {
        this._super($.extend({
            revisionURL: null,
            revisionTimeAgo: null,
            title: "Revision",
            titleItem: "from " + t.revisionTimeAgo,
            width: 900,
            height: 700,
            headerActions: [{
                label: "Open in new tab",
                className: "outline",
                callback: this.onOpenExternalClicked.bind(this)
            }, {
                label: "Restore",
                className: "grey",
                callback: this.onRestoreClicked.bind(this)
            }, {
                label: "Close",
                className: "grey",
                callback: this.close.bind(this)
            }]
        }, t)), this.restoreRequested = new signals.Signal, this.externalRequested = new signals.Signal
    },
    render: function() {
        this._super(), this.bodyElement.html(['<div class="spinner centered"></div>', '<div class="deck"></div>'].join("")), this.bodyElement.addClass("loading"), SL.util.html.generateSpinners();
        var t = $("<iframe>", {
            src: this.options.revisionURL,
            load: function() {
                this.bodyElement.removeClass("loading")
            }.bind(this)
        });
        t.appendTo(this.bodyElement.find(".deck"))
    },
    onRestoreClicked: function(t) {
        this.restoreRequested.dispatch(t)
    },
    onOpenExternalClicked: function(t) {
        this.externalRequested.dispatch(t)
    },
    destroy: function() {
        this.bodyElement.find(".deck iframe").attr("src", ""), this.bodyElement.find(".deck").empty(), this.restoreRequested.dispose(), this.externalRequested.dispose(), this._super()
    }
}), SL("components.popup").SessionExpired = SL.components.popup.Popup.extend({
    TYPE: "session-expired",
    init: function(t) {
        this._super($.extend({
            title: "Session expired",
            width: 500,
            closeOnEscape: !1,
            closeOnClickOutside: !1,
            headerActions: [{
                label: "Ignore",
                className: "outline negative",
                callback: this.close.bind(this)
            }, {
                label: "Retry",
                className: "positive",
                callback: this.onRetryClicked.bind(this)
            }]
        }, t))
    },
    render: function() {
        this._super(), this.bodyElement.html(["<p>You are no longer signed in to Slides. This can happen when you leave the editor idle for too long, log out in a different tab or go offline. To continue please:</p>", "<ol>", '<li><a href="' + SL.routes.SIGN_IN + '" target="_blank">Sign in</a> to Slides from another browser tab.</li>', "<li>Come back to this tab and press the 'Retry' button.</li>", "</ol>"].join(""))
    },
    onRetryClicked: function() {
        SL.editor ? 1 === SL.editor.Editor.VERSION ? SL.view.checkLogin(!0) : SL.editor.controllers.Session.checkLogin(!0) : console.warn("The session expired popup only works within the Slides editor.")
    },
    destroy: function() {
        this._super()
    }
}), SL("components.decksharer").DeckSharer = SL.components.popup.Popup.extend({
    TYPE: "decksharer",
    MODE_PUBLIC: {
        id: "public",
        width: 560,
        height: 380,
        heightEmail: "auto"
    },
    MODE_PRIVATE: {
        id: "private",
        width: 800,
        height: 560,
        heightEmail: 730
    },
    MODE_INTERNAL: {
        id: "internal",
        width: 560,
        height: "auto",
        heightEmail: "auto"
    },
    init: function(t) {
        var e = t.deck,
            n = e.belongsTo(SL.current_user);
        this.mode = n && (e.isVisibilitySelf() || e.isVisibilityTeam()) ? this.MODE_PRIVATE : !n && e.isVisibilityTeam() ? this.MODE_INTERNAL : this.MODE_PUBLIC, this._super($.extend({
            title: "Share",
            titleItem: '"' + e.get("title") + '"',
            width: this.mode.width,
            height: this.mode.height
        }, t))
    },
    render: function() {
        this._super(), this.mode.id === this.MODE_PRIVATE.id ? this.renderPrivate() : this.mode.id === this.MODE_INTERNAL.id ? this.renderInternal() : this.renderPublic()
    },
    renderPublic: function() {
        this.domElement.addClass("is-public"), this.shareOptions = new SL.components.decksharer.ShareOptions(this.options.deck), this.shareOptions.tabChanged.add(this.layout.bind(this)), this.shareOptions.appendTo(this.bodyElement)
    },
    renderInternal: function() {
        this.domElement.addClass("is-internal"), this.bodyElement.append('<p class="decksharer-share-warning">This deck is internal and can only be shared with and viewed by other team members.</p>'), this.shareOptions = new SL.components.decksharer.ShareOptions(this.options.deck, {
            embedEnabled: !1
        }), this.shareOptions.tabChanged.add(this.layout.bind(this)), this.shareOptions.appendTo(this.bodyElement)
    },
    renderPrivate: function() {
        this.domElement.addClass("is-private"), this.placeholderElement = $(['<div class="decksharer-token-placeholder">', '<div class="decksharer-token-placeholder-inner">', '<div class="spinner" data-spinner-color="#999"></div>', "</div>", "</div>"].join("")), this.placeholderElement.appendTo(this.bodyElement), SL.util.html.generateSpinners(), SL.data.tokens.get(this.options.deck.get("id"), {
            success: function(t) {
                this.tokens = t, this.tokenList = new SL.components.decksharer.TokenList(this.options.deck, this.tokens), this.tokenList.appendTo(this.bodyElement), this.tokenList.tokenSelected.add(this.onTokenSelected.bind(this)), this.tokenList.tokensEmptied.add(this.onTokensEmptied.bind(this)), 0 === this.tokens.size() ? this.renderTokenPlaceholder() : this.tokenList.selectDefault()
            }.bind(this),
            error: function(t) {
                this.destroy(), 401 === t ? SL.notify("It looks like you're no longer signed in to Slides. Please open a new tab and sign in.", "negative") : SL.notify(SL.locale.get("GENERIC_ERROR"), "negative")
            }.bind(this)
        })
    },
    layout: function() {
        var t = this.tokenOptions ? this.tokenOptions.shareOptions : this.shareOptions;
        this.options.height = t && t.getTabID() === SL.components.decksharer.ShareOptions.EMAIL_PAGE_ID ? this.mode.heightEmail : this.mode.height, this._super()
    },
    resetContentArea: function() {
        this.tokenOptions && (this.tokenOptions.destroy(), this.tokenOptions = null), this.placeholderElement && (this.placeholderElement.addClass("hidden"), setTimeout(this.placeholderElement.remove.bind(this.placeholderElement), 300), this.placeholderElement = null)
    },
    renderTokenPlaceholder: function() {
        this.domElement.addClass("is-empty"), this.resetContentArea();
        var t = this.options.deck.isVisibilityTeam() ? "This deck is internal" : "This deck is private";
        this.placeholderElement = $(['<div class="decksharer-token-placeholder">', '<div class="decksharer-token-placeholder-inner">', '<div class="lock-icon icon i-lock-stroke"></div>', "<h2>" + t + "</h2>", "<p>To share it you'll need to create a secret link.</p>", '<button class="button create-button xl ladda-button" data-style="zoom-out">Create link</button>', "</div>", "</div>"].join("")), this.placeholderElement.appendTo(this.bodyElement), this.placeholderElement.find(".create-button").on("click", function() {
            this.tokenList.create()
        }.bind(this)), Ladda.bind(this.placeholderElement.find(".create-button").get(0)), this.layout()
    },
    renderTokenOptions: function(t) {
        this.domElement.removeClass("is-empty");
        var e = !this.tokenOptions;
        this.resetContentArea(), this.tokenOptions = new SL.components.decksharer.TokenOptions(this.options.deck, t), this.tokenOptions.appendTo(this.bodyElement, e), this.tokenOptions.tokenRenamed.add(this.tokenList.setTokenLabel.bind(this.tokenList)), this.tokenOptions.shareOptions.tabChanged.add(this.layout.bind(this)), this.layout()
    },
    onTokenSelected: function(t) {
        this.renderTokenOptions(t)
    },
    onTokensEmptied: function() {
        this.renderTokenPlaceholder()
    },
    destroy: function() {
        this.shareOptions && (this.shareOptions.destroy(), this.shareOptions = null), this.tokenList && (this.tokenList.destroy(), this.tokenList = null), this.options.deck = null, this.tokens = null, this._super()
    }
}), SL("components.decksharer").ShareOptions = Class.extend({
    USE_READONLY: !SL.util.device.IS_PHONE && !SL.util.device.IS_TABLET,
    init: function(t, e) {
        this.deck = t, this.options = $.extend({
            token: null,
            linkEnabled: !0,
            embedEnabled: !0,
            emailEnabled: !0
        }, e), this.onLinkInputMouseDown = this.onLinkInputMouseDown.bind(this), this.onEmbedOutputMouseDown = this.onEmbedOutputMouseDown.bind(this), this.onEmbedStyleChanged = this.onEmbedStyleChanged.bind(this), this.onEmbedSizeChanged = this.onEmbedSizeChanged.bind(this), this.width = SL.components.decksharer.ShareOptions.DEFAULT_WIDTH, this.height = SL.components.decksharer.ShareOptions.DEFAULT_HEIGHT, this.style = "", this.tabChanged = new signals.Signal, this.render(), this.generate()
    },
    render: function() {
        this.domElement = $('<div class="decksharer-share-options">'), this.tabsElement = $('<div class="decksharer-share-options-tabs">').appendTo(this.domElement), this.pagesElement = $('<div class="decksharer-share-options-pages">').appendTo(this.domElement), this.options.linkEnabled && this.renderLink(), this.options.embedEnabled && this.renderEmbed(), this.options.emailEnabled && SL.util.user.isLoggedIn() && this.renderEmail(), this.tabsElement.find(".decksharer-share-options-tab").on("vclick", function(t) {
            var e = $(t.currentTarget).attr("data-id");
            this.showTab(e), SL.analytics.track("Decksharer: Tab clicked", e)
        }.bind(this)), this.showTab(this.tabsElement.find(".decksharer-share-options-tab").first().attr("data-id"))
    },
    renderLink: function() {
        this.tabsElement.append('<div class="decksharer-share-options-tab" data-id="' + SL.components.decksharer.ShareOptions.LINK_PAGE_ID + '">Link</div>'), this.pagesElement.append(['<div class="decksharer-share-options-page sl-form" data-id="link">', '<div class="unit link-unit">', "<label>Presentation link</label>", "</div>", '<div class="unit sl-checkbox outline">', '<input id="fullscreen-checkbox" type="checkbox" class="fullscreen-input" />', '<label for="fullscreen-checkbox">Fullscreen</label>', "</div>", "</div>"].join("")), this.USE_READONLY ? (this.linkInput = $('<input type="text" class="link-input" readonly="readonly" />'), this.linkInput.on("mousedown", this.onLinkInputMouseDown), this.linkInput.appendTo(this.pagesElement.find('[data-id="link"] .link-unit'))) : (this.linkAnchor = $('<a href="#" class="input-field">'), this.linkAnchor.appendTo(this.pagesElement.find('[data-id="link"] .link-unit'))), this.fullscreenInput = this.pagesElement.find('[data-id="link"] .fullscreen-input'), this.fullscreenInput.on("change", this.onLinkFullscreenToggled.bind(this))
    },
    renderEmbed: function() {
        this.tabsElement.append('<div class="decksharer-share-options-tab" data-id="' + SL.components.decksharer.ShareOptions.EMBED_PAGE_ID + '">Embed</div>');
        var t = '<option value="dark" selected>Dark</option><option value="light">Light</option>';
        SL.current_user.isPro() && (t += '<option value="hidden">Hidden</option>'), this.pagesElement.append(['<div class="decksharer-share-options-page sl-form" data-id="embed">', '<div class="embed-options">', '<div class="unit">', "<label>Width:</label>", '<input type="text" name="width" maxlength="4" />', "</div>", '<div class="unit">', "<label>Height:</label>", '<input type="text" name="height" maxlength="4" />', "</div>", '<div class="unit">', "<label>Footer style:</label>", '<select class="sl-select" name="style">', t, "</select>", "</div>", "</div>", '<textarea name="output"></textarea>', "</div>"].join("")), this.embedElement = this.pagesElement.find('[data-id="embed"]'), this.embedStyleElement = this.embedElement.find("select[name=style]"), this.embedWidthElement = this.embedElement.find("input[name=width]"), this.embedHeightElement = this.embedElement.find("input[name=height]"), this.embedOutputElement = this.embedElement.find("textarea"), this.embedStyleElement.on("change", this.onEmbedStyleChanged), this.embedWidthElement.on("input", this.onEmbedSizeChanged), this.embedHeightElement.on("input", this.onEmbedSizeChanged), this.USE_READONLY ? (this.embedOutputElement.attr("readonly", "readonly"), this.embedOutputElement.on("mousedown", this.onEmbedOutputMouseDown)) : this.embedOutputElement.on("input", this.generate.bind(this)), this.embedWidthElement.val(this.width), this.embedHeightElement.val(this.height)
    },
    renderEmail: function() {
        this.tabsElement.append('<div class="decksharer-share-options-tab" data-id="' + SL.components.decksharer.ShareOptions.EMAIL_PAGE_ID + '">Email</div>'), this.pagesElement.append(['<div class="decksharer-share-options-page" data-id="email">', '<div class="sl-form">', '<div class="unit" data-validate="none" data-required>', "<label>From</label>", '<input type="text" class="email-from" placeholder="Your Name" maxlength="255" />', "</div>", '<div class="unit" data-validate="none" data-required>', "<label>To</label>", '<input type="text" class="email-to" placeholder="john@example.com, jane@example.com" maxlength="2500" />', "</div>", '<div class="unit text" data-validate="none" data-required>', "<label>Message</label>", '<p class="unit-description">A link to the deck is automatically included after the message.</p>', '<textarea class="email-body" rows="3" maxlength="2500"></textarea>', "</div>", '<div class="submit-wrapper">', '<button type="submit" class="button positive l ladda-button email-submit" data-style="zoom-out">Send</button>', "</div>", "</div>", '<div class="email-success">', '<div class="email-success-icon icon i-checkmark"></div>', '<p class="email-success-description">Email sent!</p>', "</div>", "</div>"].join("")), this.emailElement = this.pagesElement.find('[data-id="email"]'), this.emailSuccess = this.emailElement.find(".email-success"), this.emailForm = this.emailElement.find(".sl-form"), this.emailFromElement = this.emailForm.find(".email-from"), this.emailToElement = this.emailForm.find(".email-to"), this.emailBodyElement = this.emailForm.find(".email-body"), this.emailSubmitButton = this.emailForm.find(".email-submit"), this.emailFormUnits = [], this.emailForm.find(".unit[data-validate]").each(function(t, e) {
            this.emailFormUnits.push(new SL.components.FormUnit(e))
        }.bind(this)), this.emailSubmitButton.on("vclick", this.onEmailSubmitClicked.bind(this)), this.emailSubmitLoader = Ladda.create(this.emailSubmitButton.get(0))
    },
    appendTo: function(t) {
        this.domElement.appendTo(t)
    },
    showTab: function(t) {
        this.tabsElement.find(".decksharer-share-options-tab").removeClass("is-selected"), this.pagesElement.find(".decksharer-share-options-page").removeClass("is-selected"), this.tabsElement.find('[data-id="' + t + '"]').addClass("is-selected"), this.pagesElement.find('[data-id="' + t + '"]').addClass("is-selected"), this.tabChanged.dispatch(t)
    },
    getTabID: function() {
        return this.tabsElement.find(".is-selected").attr("data-id")
    },
    generate: function() {
        var t = this.getShareURLs();
        if (this.embedOutputElement) {
            var e = '<iframe src="' + t.embed + '" width="' + this.width + '" height="' + this.height + '" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
            this.embedOutputElement.text(e)
        }
        var n = this.fullscreenInput.is(":checked") ? t.fullscreen : t.show;
        this.linkInput && this.linkInput.val(n), this.linkAnchor && this.linkAnchor.attr("href", n).text(n), this.emailElement && (SL.current_user && this.emailFromElement.val(SL.current_user.getNameOrSlug()), this.emailBodyElement.val(this.deck.has("title") && "deck" !== this.deck.get("title") ? 'Check out this deck "' + this.deck.get("title") + '"' : "Check out this deck"))
    },
    getShareURLs: function() {
        var t = {
                show: this.deck.getURL({
                    protocol: "http:"
                }),
                fullscreen: this.deck.getURL({
                    protocol: "http:",
                    view: "fullscreen"
                }),
                embed: this.deck.getURL({
                    protocol: "",
                    view: "embed"
                })
            },
            e = [];
        return this.options.token && this.options.token.has("token") && e.push("token=" + this.options.token.get("token")), t.show += e.length ? "?" + e.join("&") : "", t.fullscreen += e.length ? "?" + e.join("&") : "", "string" == typeof this.style && this.style.length > 0 && e.push("style=" + this.style), t.embed += e.length ? "?" + e.join("&") : "", t
    },
    onEmbedOutputMouseDown: function(t) {
        t.preventDefault(), this.embedOutputElement.focus().select(), SL.analytics.track("Decksharer: Embed code selected")
    },
    onLinkInputMouseDown: function(t) {
        t.preventDefault(), $(t.target).focus().select(), SL.analytics.track("Decksharer: URL selected")
    },
    onLinkFullscreenToggled: function() {
        this.generate(), SL.analytics.track("Decksharer: URL fullscreen toggled")
    },
    onEmbedSizeChanged: function() {
        this.width = parseInt(this.embedWidthElement.val(), 10) || 1, this.height = parseInt(this.embedHeightElement.val(), 10) || 1, this.generate()
    },
    onEmbedStyleChanged: function() {
        this.style = this.embedStyleElement.val(), this.generate()
    },
    onEmailSubmitClicked: function(t) {
        var e = this.emailFormUnits.every(function(t) {
            return t.beforeSubmit()
        });
        if (e && !this.emailXHR) {
            SL.analytics.track("Decksharer: Submit email");
            var n = this.emailFromElement.val(),
                i = this.emailToElement.val(),
                s = this.emailBodyElement.val();
            this.emailSubmitLoader.start(), i = i.split(","), i = i.map(function(t) {
                return t.trim()
            }), i = i.join(",");
            var o = {
                deck_share: {
                    emails: i,
                    from: n,
                    body: s
                }
            };
            this.options.token && (o.deck_share.access_token_id = this.options.token.get("id")), this.emailXHR = $.ajax({
                url: SL.config.AJAX_SHARE_DECK_VIA_EMAIL(this.deck.get("id")),
                type: "POST",
                context: this,
                data: o
            }).done(function() {
                this.emailSuccess.addClass("visible"), setTimeout(function() {
                    this.emailSuccess.removeClass("visible"), this.emailToElement.val(""), this.emailBodyElement.val(""), this.generate()
                }.bind(this), 3e3), SL.analytics.track("Decksharer: Submit email success")
            }).fail(function() {
                SL.notify("Failed to send email", "negative"), SL.analytics.track("Decksharer: Submit email error")
            }).always(function() {
                this.emailXHR = null, this.emailSubmitLoader.stop()
            })
        }
        t.preventDefault()
    },
    destroy: function() {
        this.tabChanged.dispose(), this.deck = null, this.domElement.remove()
    }
}), SL.components.decksharer.ShareOptions.DEFAULT_WIDTH = 576, SL.components.decksharer.ShareOptions.DEFAULT_HEIGHT = 420, SL.components.decksharer.ShareOptions.LINK_PAGE_ID = "link", SL.components.decksharer.ShareOptions.EMBED_PAGE_ID = "embed", SL.components.decksharer.ShareOptions.EMAIL_PAGE_ID = "email", SL("components.decksharer").TokenList = Class.extend({
    init: function(t, e) {
        this.deck = t, this.tokens = e, this.tokenSelected = new signals.Signal, this.tokensEmptied = new signals.Signal, this.render()
    },
    render: function() {
        this.domElement = $('<div class="decksharer-token-list">'), this.listItems = $('<div class="decksharer-token-list-items">').appendTo(this.domElement), this.createButton = $(['<div class="decksharer-token-list-create ladda-button" data-style="zoom-out" data-spinner-color="#222">', '<span class="icon i-plus"></span>', "</div>"].join("")), this.createButton.on("vclick", this.create.bind(this)), this.createButton.appendTo(this.domElement), this.createButtonLoader = Ladda.create(this.createButton.get(0)), this.tokens.forEach(this.renderToken.bind(this)), this.scrollShadow = new SL.components.ScrollShadow({
            parentElement: this.domElement,
            contentElement: this.listItems,
            footerElement: this.createButton,
            resizeContent: !1
        })
    },
    renderToken: function(t) {
        var e = t.get("deck_view_count") || 0,
            n = e + " " + SL.util.string.pluralize("view", "s", 1 !== e),
            i = $(['<div class="decksharer-token-list-item" data-id="' + t.get("id") + '">', '<span class="label"></span>', '<div class="meta">', '<span class="views">' + n + "</span>", '<span class="icon i-x delete" data-tooltip="Delete link"></span>', "</div>", "</div>"].join(""));
        i.appendTo(this.listItems), i.on("vclick", function(e) {
            if ($(e.target).closest(".delete").length > 0) {
                SL.prompt({
                    anchor: i,
                    alignment: "r",
                    title: "Are you sure you want to delete this link? It will stop working for anyone you have already shared it with.",
                    type: "select",
                    data: [{
                        html: "<h3>Cancel</h3>"
                    }, {
                        html: "<h3>Delete</h3>",
                        selected: !0,
                        className: "negative",
                        callback: function() {
                            this.remove(t, i)
                        }.bind(this)
                    }]
                })
            } else this.select(t)
        }.bind(this)), this.setTokenLabel(t)
    },
    setTokenLabel: function(t, e) {
        var n = this.listItems.find(".decksharer-token-list-item[data-id=" + t.get("id") + "]");
        n.length && (e || (e = t.get("name") || t.get("token")), n.find(".label").html(e))
    },
    appendTo: function(t) {
        this.domElement.appendTo(t), this.scrollShadow.sync()
    },
    selectDefault: function() {
        this.select(this.tokens.first()), this.scrollShadow.sync()
    },
    select: function(t) {
        if (t && t !== this.selectedToken) {
            var e = this.listItems.find(".decksharer-token-list-item[data-id=" + t.get("id") + "]");
            e.length && (this.listItems.find(".decksharer-token-list-item").removeClass("is-selected"), e.addClass("is-selected"), this.tokenSelected.dispatch(t), this.selectedToken = t)
        }
    },
    create: function(t) {
        var e = 0 === this.tokens.size();
        t && this.createButtonLoader.start(), SL.data.tokens.create(this.deck.get("id"), {
            success: function(t) {
                SL.analytics.track(e ? "Decksharer: Created first token" : "Decksharer: Created additional token"), this.renderToken(t), this.select(t), this.createButtonLoader.stop(), this.scrollShadow.sync()
            }.bind(this),
            error: function() {
                SL.notify(SL.locale.get("GENERIC_ERROR"), "negative"), this.createButtonLoader.stop()
            }.bind(this)
        })
    },
    remove: function(t, e) {
        t.destroy().fail(function() {
            SL.notify(SL.locale.get("GENERIC_ERROR"), "negative")
        }.bind(this)).done(function() {
            SL.util.anim.collapseListItem(e, function() {
                e.remove(), this.scrollShadow.sync()
            }.bind(this), 300), this.tokens.remove(t), this.selectedToken === t && (this.selectedToken = null, this.selectDefault()), 0 === this.tokens.size() && this.tokensEmptied.dispatch(), SL.analytics.track("Decksharer: Deleted token")
        }.bind(this))
    },
    destroy: function() {
        this.createButtonLoader && this.createButtonLoader.stop(), this.scrollShadow && this.scrollShadow.destroy(), this.tokens = null, this.domElement.remove()
    }
}), SL("components.decksharer").TokenOptions = Class.extend({
    init: function(t, e) {
        this.deck = t, this.token = e, this.tokenRenamed = new signals.Signal, this.render(), this.bind()
    },
    render: function() {
        this.domElement = $('<div class="decksharer-token-options">'), this.innerElement = $('<div class="sl-form decksharer-token-options-inner">'), this.innerElement.appendTo(this.domElement), this.namePasswordElement = $('<div class="split-units">'), this.namePasswordElement.appendTo(this.innerElement), this.nameUnit = $(['<div class="unit">', '<label class="form-label" for="token-name">Name</label>', '<p class="unit-description">So you can tell your links apart.</p>', '<input class="input-field" type="text" id="token-name" maxlength="255" />', "</div>"].join("")), this.nameUnit.appendTo(this.namePasswordElement), this.nameInput = this.nameUnit.find("input"), this.nameInput.val(this.token.get("name")), this.passwordUnit = $(['<div class="unit">', '<label class="form-label" for="token-password">Password<span class="optional-label">(optional)</span></label>', '<p class="unit-description">Viewers need to enter this.</p>', '<input class="input-field" type="password" id="token-password" placeholder="&bull;&bull;&bull;&bull;&bull;&bull;" maxlength="255" />', "</div>"].join("")), this.passwordUnit.appendTo(this.namePasswordElement), this.passwordInput = this.passwordUnit.find("input"), this.passwordInput.val(this.token.get("password")), this.saveWrapper = $(['<div class="save-wrapper">', '<button class="button l save-button ladda-button" data-style="expand-left" data-spinner-size="26">Save changes</button>', "</div>"].join("")), this.saveWrapper.appendTo(this.innerElement), this.saveButton = this.saveWrapper.find(".button"), this.saveButtonLoader = Ladda.create(this.saveButton.get(0)), this.shareOptions = new SL.components.decksharer.ShareOptions(this.deck, {
            token: this.token
        }), this.shareOptions.appendTo(this.domElement)
    },
    bind: function() {
        this.saveChanges = this.saveChanges.bind(this), this.nameInput.on("input", this.onNameInput.bind(this)), this.passwordInput.on("input", this.onPasswordInput.bind(this)), this.saveButton.on("click", this.saveChanges)
    },
    appendTo: function(t, e) {
        this.domElement.appendTo(t), e || SL.util.dom.calculateStyle(this.domElement), this.domElement.addClass("visible")
    },
    checkUnsavedChanges: function() {
        var t = this.token.get("name") || "",
            e = this.token.get("password") || "",
            n = this.nameInput.val(),
            i = this.passwordInput.val(),
            s = i !== e || n !== t;
        this.domElement.toggleClass("is-unsaved", s)
    },
    saveChanges: function() {
        this.nameInput.val() ? (this.token.set("name", this.nameInput.val()), this.token.set("password", this.passwordInput.val()), this.saveButtonLoader.start(), this.token.save(["name", "password"]).fail(function() {
            this.saveButtonLoader.stop(), SL.notify(SL.locale.get("GENERIC_ERROR"), "negative")
        }.bind(this)).done(function() {
            this.saveButtonLoader.stop(), this.domElement.removeClass("is-unsaved")
        }.bind(this))) : SL.notify("Please give the link a name", "negative")
    },
    onNameInput: function() {
        this.tokenRenamed.dispatch(this.token, this.nameInput.val()), this.checkUnsavedChanges()
    },
    onPasswordInput: function() {
        this.checkUnsavedChanges()
    },
    destroy: function() {
        this.tokenRenamed.dispatch(this.token), this.tokenRenamed.dispose(), this.shareOptions && (this.shareOptions.destroy(), this.shareOptions = null), this.saveButtonLoader && this.saveButtonLoader.stop(), this.deck = null, this.token = null, this.domElement.addClass("hidden"), setTimeout(this.domElement.remove.bind(this.domElement), 500)
    }
}), SL("components.form").Scripts = Class.extend({
    init: function(t) {
        this.domElement = $(t), this.render(), this.readValues(), this.renderList()
    },
    render: function() {
        this.valueElement = this.domElement.find(".value-holder"), this.listElement = $('<ul class="list">'), this.listElement.delegate("li .remove", "click", this.onListItemRemove.bind(this)), this.listElement.appendTo(this.domElement), this.inputWrapper = $('<div class="input-wrapper"></div>').appendTo(this.domElement), this.inputElement = $('<input type="text" placeholder="https://...">'), this.inputElement.on("keyup", this.onInputKeyUp.bind(this)), this.inputElement.appendTo(this.inputWrapper), this.submitElement = $('<div class="button outline">Add</div>'), this.submitElement.on("click", this.submitInput.bind(this)), this.submitElement.appendTo(this.inputWrapper), this.domElement.parents("form").first().on("submit", this.onFormSubmit.bind(this))
    },
    renderList: function() {
        this.listElement.empty(), this.values.forEach(function(t) {
            this.listElement.append(['<li class="list-item" data-value="' + t + '">', t, '<span class="icon i-x remove"></span>', "</li>"].join(""))
        }.bind(this))
    },
    formatValues: function() {
        for (var t = 0; t < this.values.length; t++) this.values[t] = SL.util.string.trim(this.values[t]), "" === this.values[t] && this.values.splice(t, 1)
    },
    readValues: function() {
        this.values = (this.valueElement.val() || "").split(","), this.formatValues()
    },
    writeValues: function() {
        this.formatValues(), this.valueElement.val(this.values.join(","))
    },
    addValue: function(t) {
        return t = t || "", 0 === t.search(/https\:\/\//gi) ? (this.values.push(t), this.renderList(), this.writeValues(), !0) : 0 === t.search(/http\:\/\//gi) ? (SL.notify("Script must be loaded via HTTPS", "negative"), !1) : (SL.notify("Please enter a valid script URL", "negative"), !1)
    },
    removeValue: function(t) {
        if ("string" == typeof t)
            for (var e = 0; e < this.values.length; e++) this.values[e] === t && this.values.splice(e, 1);
        else "number" == typeof t && this.values.splice(t, 1);
        this.renderList(), this.writeValues()
    },
    submitInput: function() {
        this.addValue(this.inputElement.val()) && this.inputElement.val("")
    },
    onListItemRemove: function(t) {
        var e = $(t.target).parent().index();
        "number" == typeof e && this.removeValue(e)
    },
    onInputKeyUp: function(t) {
        13 === t.keyCode && this.submitInput()
    },
    onFormSubmit: function(t) {
        return this.inputElement.is(":focus") ? (t.preventDefault(), !1) : void 0
    }
}), SL("components").FormUnit = Class.extend({
    init: function(t) {
        this.domElement = $(t), this.inputElement = this.domElement.find("input, textarea").first(), this.errorElement = $('<div class="error">'), this.errorIcon = $('<span class="icon">!</span>').appendTo(this.errorElement), this.errorMessage = $('<p class="message">!</p>').appendTo(this.errorElement), this.validateType = this.domElement.attr("data-validate"), this.validateTimeout = -1, this.originalValue = this.inputElement.val(), this.originalError = this.domElement.attr("data-error-message"), this.asyncValidatedValue = null, this.clientErrors = [], this.serverErrors = [], this.inputElement.on("input", this.onInput.bind(this)), this.inputElement.on("change", this.onInputChange.bind(this)), this.inputElement.on("focus", this.onInputFocus.bind(this)), this.inputElement.on("blur", this.onInputBlur.bind(this)), this.inputElement.on("invalid", this.onInputInvalid.bind(this)), this.domElement.parents("form").first().on("submit", this.onFormSubmit.bind(this)), this.originalError && (this.domElement.removeClass("hidden"), this.validate(), this.inputElement.focus()), this.domElement.data("controller", this)
    },
    validate: function(t) {
        clearTimeout(this.validateTimeout);
        var e = this.inputElement.val();
        if ("string" != typeof e) return this.serverErrors = [], this.clientErrors = [], void this.render();
        if (e === this.originalValue && (this.originalValue || "password" === this.validateType) && this.originalError) this.clientErrors = [this.originalError];
        else if (e.length) {
            var n = SL.util.validate[this.validateType];
            "function" == typeof n ? this.clientErrors = n(e) : console.log('Could not find validation method of type "' + this.validateType + '"')
        } else this.clientErrors = [], t && this.isRequired() && this.clientErrors.push(SL.locale.FORM_ERROR_REQUIRED);
        return this.validateAsync(), this.render(), 0 === this.clientErrors.length && 0 === this.serverErrors.length
    },
    validateAsync: function() {
        if ("username" === this.validateType) {
            var t = SLConfig && SLConfig.current_user ? SLConfig.current_user.username : "",
                e = this.inputElement.val();
            0 === SL.util.validate.username(e).length && (t && e === t ? (this.asyncValidatedValue = t, this.serverErrors = []) : e !== this.asyncValidatedValue && $.ajax({
                url: SL.config.AJAX_LOOKUP_USER,
                type: "GET",
                data: {
                    id: e
                },
                context: this,
                statusCode: {
                    204: function() {
                        this.serverErrors = [SL.locale.get("FORM_ERROR_USERNAME_TAKEN")]
                    },
                    404: function() {
                        this.serverErrors = []
                    }
                }
            }).complete(function() {
                this.render(), this.asyncValidatedValue = e
            }))
        } else if ("team_slug" === this.validateType) {
            var n = SL.current_team ? SL.current_team.get("slug") : "",
                i = this.inputElement.val();
            0 === SL.util.validate.team_slug(i).length && (n && i === n ? (this.asyncValidatedValue = n, this.serverErrors = []) : i !== this.asyncValidatedValue && $.ajax({
                url: SL.config.AJAX_LOOKUP_ORGANIZATION,
                type: "GET",
                data: {
                    id: i
                },
                context: this,
                statusCode: {
                    204: function() {
                        this.serverErrors = [SL.locale.get("FORM_ERROR_ORGANIZATION_SLUG_TAKEN")]
                    },
                    404: function() {
                        this.serverErrors = []
                    }
                }
            }).complete(function() {
                this.render(), this.asyncValidatedValue = i
            }))
        }
    },
    render: function() {
        var t = this.serverErrors.concat(this.clientErrors);
        t.length ? (this.domElement.addClass("has-error"), this.errorElement.appendTo(this.domElement), this.errorMessage.text(t[0]), setTimeout(function() {
            this.errorElement.addClass("visible")
        }.bind(this), 1)) : (this.domElement.removeClass("has-error"), this.errorElement.removeClass("visible").remove())
    },
    format: function() {
        if ("username" === this.validateType || "team_slug" === this.validateType) {
            var t = this.inputElement.val();
            t && this.inputElement.val(this.inputElement.val().toLowerCase())
        }
        if ("url" === this.validateType) {
            var t = this.inputElement.val();
            t && t.length > 2 && /^http(s?):\/\//gi.test(t) === !1 && this.inputElement.val("http://" + t)
        }
    },
    focus: function() {
        this.inputElement.focus()
    },
    beforeSubmit: function() {
        return this.validate(!0), this.clientErrors.length > 0 || this.serverErrors.length > 0 ? (this.focus(), !1) : !0
    },
    renderImage: function() {
        var t = this.inputElement.get(0);
        if (t.files && t.files[0]) {
            var e = new FileReader;
            e.onload = function(t) {
                var e = this.domElement.find("img"),
                    n = t.target.result;
                e.length ? e.attr("src", n) : $('<img src="' + n + '">').appendTo(this.domElement.find(".image-uploader"))
            }.bind(this), e.readAsDataURL(t.files[0])
        }
    },
    isRequired: function() {
        return !this.domElement.hasClass("hidden") && this.domElement.is("[data-required]")
    },
    isUnchanged: function() {
        return this.inputElement.val() === this.originalValue
    },
    onInput: function() {
        if (clearTimeout(this.validateTimeout), !SL.util.device.IS_PHONE && !SL.util.device.IS_TABLET) {
            var t = 600;
            (this.clientErrors.length || this.serverErrors.length) && (t = 300), this.validateTimeout = setTimeout(this.validate.bind(this), t)
        }
    },
    onInputChange: function(t) {
        this.domElement.hasClass("image") && this.renderImage(t.target), this.validate()
    },
    onInputFocus: function() {
        this.domElement.addClass("focused")
    },
    onInputBlur: function() {
        this.format(), this.domElement.removeClass("focused")
    },
    onInputInvalid: function() {
        return this.beforeSubmit()
    },
    onFormSubmit: function(t) {
        return this.beforeSubmit() === !1 ? (t.preventDefault(), !1) : void 0
    }
}), SL("components").Header = Class.extend({
    init: function() {
        this.domElement = $(".global-header"), this.render(), this.bind()
    },
    render: function() {
        // FIXME
    },
    bind: function() {
        this.domElement.find(".logo-animation").on("contextmenu", function() {
            return window.location.href = "/about#logo", !1
        }), this.domElement.hasClass("show-on-scroll") && ($(document).on("mousemove", this.onDocumentMouseMove.bind(this)), $(window).on("scroll", this.onWindowScroll.bind(this)))
    },
    onWindowScroll: function() {
        this.isScrolledDown = $(window).scrollTop() > 30, this.domElement.toggleClass("show", this.isScrolledDown)
    },
    onDocumentMouseMove: function(t) {
        if (!this.isScrolledDown) {
            var e = t.clientY;
            e > 0 && (20 > e && !this.isMouseOver ? (this.domElement.addClass("show"), this.isMouseOver = !0) : e > 80 && this.isMouseOver && 0 === $(t.target).parents(".global-header").length && (this.domElement.removeClass("show"), this.isMouseOver = !1))
        }
    }
}), SL("components").Kudos = function() {
    function t() {
        $("[data-kudos-value][data-kudos-id]").each(function(t, e) {
            var n = e.getAttribute("data-kudos-id");
            n && !a[n] && (a[n] = e.getAttribute("data-kudos-value"))
        }.bind(this)), $(".kudos-trigger[data-kudos-id]").on("click", function(t) {
            var i = t.currentTarget;
            "true" === i.getAttribute("data-kudoed-by-user") ? n(i.getAttribute("data-kudos-id")) : e(i.getAttribute("data-kudos-id"))
        }.bind(this))
    }

    function e(t) {
        i(t), $.ajax({
            type: "POST",
            url: SL.config.AJAX_KUDO_DECK(t),
            context: this
        }).fail(function() {
            s(t), SL.notify(SL.locale.get("GENERIC_ERROR"))
        })
    }

    function n(t) {
        s(t), $.ajax({
            type: "DELETE",
            url: SL.config.AJAX_UNKUDO_DECK(t),
            context: this
        }).fail(function() {
            i(t), SL.notify(SL.locale.get("GENERIC_ERROR"))
        })
    }

    function i(t) {
        var e = $('.kudos-trigger[data-kudos-id="' + t + '"]');
        e.attr("data-kudoed-by-user", "true"), a[t]++, o(t, a[t]);
        var n = e.find(".kudos-icon");
        n.length && (n.removeClass("bounce"), setTimeout(function() {
            n.addClass("bounce")
        }, 1))
    }

    function s(t) {
        var e = $('.kudos-trigger[data-kudos-id="' + t + '"]');
        e.attr("data-kudoed-by-user", "false"), a[t]--, o(t, a[t]), e.find(".kudos-icon").removeClass("bounce")
    }

    function o(t, e) {
        "number" == typeof a[t] && ("number" == typeof e && (a[t] = e), e = Math.max(a[t], 0), $("[data-kudos-id][data-kudos-value]").each(function(t, n) {
            n.setAttribute("data-kudos-value", e)
        }))
    }
    var a = {};
    t()
}(), SL("components").Menu = Class.extend({
    init: function(t) {
        if (this.config = $.extend({
                alignment: "auto",
                anchorSpacing: 10,
                minWidth: 0,
                offsetX: 0,
                offsetY: 0,
                options: [],
                showOnHover: !1,
                touch: /(iphone|ipod|ipad|android|windows\sphone)/gi.test(navigator.userAgent)
            }, t), this.config.anchor = $(this.config.anchor), this.show = this.show.bind(this), this.hide = this.hide.bind(this), this.layout = this.layout.bind(this), this.toggle = this.toggle.bind(this), this.onMouseOver = this.onMouseOver.bind(this), this.onDocumentMouseMove = this.onDocumentMouseMove.bind(this), this.onDocumentMouseDown = this.onDocumentMouseDown.bind(this), this.onDocumentKeydown = this.onDocumentKeydown.bind(this), this.submenus = [], this.destroyed = new signals.Signal, this.render(), this.renderList(), this.config.anchor.length)
            if (t.touch) this.config.anchor.addClass("menu-show-on-touch"), this.config.anchor.on("touchstart pointerdown", function(t) {
                t.preventDefault(), this.toggle()
            }.bind(this)), this.config.anchor.on("click", function(t) {
                t.preventDefault()
            }.bind(this));
            else {
                if (this.config.showOnHover) {
                    this.config.anchor.on("mouseover", this.onMouseOver);
                    try {
                        this.config.anchor.is(":hover") && this.onMouseOver()
                    } catch (e) {}
                }
                this.config.anchor.on("click", this.toggle)
            }
    },
    render: function() {
        this.domElement = $('<div class="sl-menu">'), this.listElement = $('<div class="sl-menu-list">').appendTo(this.domElement), this.arrowElement = $('<div class="sl-menu-arrow">').appendTo(this.domElement), this.hitareaElement = $('<div class="sl-menu-hitarea">').appendTo(this.domElement), this.listElement.css("minWidth", this.config.minWidth + "px")
    },
    renderList: function() {
        this.config.options.forEach(function(t) {
            var e;
            e = $("string" == typeof t.url ? '<a class="sl-menu-item" href="' + t.url + '">' : '<div class="sl-menu-item">'), e.html('<span class="label">' + t.label + "</span>"), e.data("callback", t.callback), e.appendTo(this.listElement), e.on("click", function(t) {
                var e = $(t.currentTarget).data("callback");
                "function" == typeof e && e.apply(null), this.hide()
            }.bind(this)), t.icon && e.append('<span class="icon i-' + t.icon + '"></span>'), t.attributes && e.attr(t.attributes), t.submenu && !this.config.touch && this.submenus.push(new SL.components.Menu({
                anchor: e,
                anchorSpacing: 10,
                alignment: t.submenuAlignment || "rl",
                minWidth: t.submenuWidth || 160,
                showOnHover: !0,
                options: t.submenu
            }))
        }.bind(this)), this.listElement.find(".sl-menu-item:not(:last-child)").after('<div class="sl-menu-divider">')
    },
    bind: function() {
        $(window).on("resize scroll", this.layout), $(document).on("keydown", this.onDocumentKeydown), $(document).on("mousedown touchstart pointerdown", this.onDocumentMouseDown)
    },
    unbind: function() {
        $(window).off("resize scroll", this.layout), $(document).off("keydown", this.onDocumentKeydown), $(document).off("mousedown touchstart pointerdown", this.onDocumentMouseDown)
    },
    layout: function() {
        if (this.config.anchor.length) {
            var t = this.config.anchor.offset(),
                e = this.config.anchorSpacing,
                n = this.config.alignment,
                i = $(window).scrollLeft(),
                s = $(window).scrollTop(),
                o = t.left + this.config.offsetX,
                a = t.top + this.config.offsetY,
                r = this.config.anchor.outerWidth(),
                l = this.config.anchor.outerHeight(),
                c = this.domElement.outerWidth(),
                d = this.domElement.outerHeight(),
                u = c / 2,
                h = c / 2,
                p = 8;
            switch ("auto" === n && (n = t.top - (d + e + p) < s ? "b" : "t"), "rl" === n && (n = t.left + r + e + p + c < window.innerWidth ? "r" : "l"), this.domElement.attr("data-alignment", n), n) {
                case "t":
                    o += (r - c) / 2, a -= d + e;
                    break;
                case "b":
                    o += (r - c) / 2, a += l + e;
                    break;
                case "l":
                    o -= c + e, a += (l - d) / 2;
                    break;
                case "r":
                    o += r + e, a += (l - d) / 2
            }
            switch (o = Math.min(Math.max(o, i + e), window.innerWidth + i - c - e), a = Math.min(Math.max(a, s + e), window.innerHeight + s - d - e), n) {
                case "t":
                    u = t.left - o + r / 2, h = d;
                    break;
                case "b":
                    u = t.left - o + r / 2, h = -p;
                    break;
                case "l":
                    u = c, h = t.top - a + l / 2;
                    break;
                case "r":
                    u = -p, h = t.top - a + l / 2
            }
            this.domElement.css({
                left: o,
                top: a
            }), this.arrowElement.css({
                left: u,
                top: h
            }), this.hitareaElement.css({
                top: -e,
                right: -e,
                bottom: -e,
                left: -e
            })
        }
    },
    focus: function(t) {
        var e = this.listElement.find(".focus");
        if (e.length) {
            var n = t > 0 ? e.nextAll(".sl-menu-item").first() : e.prevAll(".sl-menu-item").first();
            n.length && (e.removeClass("focus"), n.addClass("focus"))
        } else this.listElement.find(".sl-menu-item").first().addClass("focus")
    },
    show: function() {
        this.domElement.removeClass("visible").appendTo(document.body), setTimeout(function() {
            this.domElement.addClass("visible")
        }.bind(this), 1), this.config.anchor.addClass("menu-is-open"), this.layout(), this.bind()
    },
    hide: function() {
        this.listElement.find(".focus").removeClass("focus"), this.config.anchor.removeClass("menu-is-open"), this.domElement.detach(), this.unbind(), $(document).off("mousemove", this.onDocumentMouseMove), this.isMouseOver = !1, clearTimeout(this.hideTimeout)
    },
    toggle: function() {
        this.isVisible() ? this.hide() : this.show()
    },
    isVisible: function() {
        return this.domElement.parent().length > 0
    },
    hasSubMenu: function() {
        return this.submenus.length > 0
    },
    destroy: function() {
        this.destroyed.dispatch(), this.destroyed.dispose(), this.domElement.remove(), this.unbind(), this.config.anchor.off("click", this.toggle), this.config.anchor.off("hover", this.toggle), this.submenus.forEach(function(t) {
            t.destroy()
        })
    },
    onDocumentKeydown: function(t) {
        if (27 === t.keyCode && (this.hide(), t.preventDefault()), 13 === t.keyCode) {
            var e = this.listElement.find(".focus");
            e.length && (e.trigger("click"), t.preventDefault())
        } else 38 === t.keyCode ? (this.focus(-1), t.preventDefault()) : 40 === t.keyCode ? (this.focus(1), t.preventDefault()) : 9 === t.keyCode && t.shiftKey ? (this.focus(-1), t.preventDefault()) : 9 === t.keyCode && (this.focus(1), t.preventDefault())
    },
    onMouseOver: function() {
        this.isMouseOver || ($(document).on("mousemove", this.onDocumentMouseMove), this.hideTimeout = -1, this.isMouseOver = !0, this.show())
    },
    onDocumentMouseMove: function(t) {
        var e = $(t.target),
            n = 0 === e.closest(this.domElement).length && 0 === e.closest(this.config.anchor).length;
        this.hasSubMenu() && (n = 0 === e.closest(".sl-menu").length && 0 === e.closest(this.config.anchor).length), n ? -1 === this.hideTimeout && (clearTimeout(this.hideTimeout), this.hideTimeout = setTimeout(this.hide, 150)) : this.hideTimeout && (clearTimeout(this.hideTimeout), this.hideTimeout = -1)
    },
    onDocumentMouseDown: function(t) {
        var e = $(t.target);
        this.isVisible() && 0 === e.closest(this.domElement).length && 0 === e.closest(this.config.anchor).length && this.hide()
    }
}), SL("components").Meter = Class.extend({
    init: function(t) {
        this.domElement = $(t), this.labelElement = $('<div class="label">').appendTo(this.domElement), this.progressElement = $('<div class="progress">').appendTo(this.domElement), this.read(), this.paint(), window.m = this
    },
    read: function() {
        switch (this.unit = "", this.type = this.domElement.attr("data-type"), this.value = parseInt(this.domElement.attr("data-value"), 10) || 0, this.total = parseInt(this.domElement.attr("data-total"), 10) || 0, this.type) {
            case "storage":
                var t = 1024,
                    e = 1024 * t,
                    n = 1024 * e;
                this.value < e && this.total < e && (this.value = Math.round(this.value / t), this.total = Math.round(this.total / t), this.unit = "KB"), this.value < n && this.total < n ? (this.value = Math.round(this.value / e), this.total = Math.round(this.total / e), this.unit = "MB") : (this.value = (this.value / n).toFixed(2), this.total = (this.total / n).toFixed(2), this.unit = "GB")
        }
    },
    paint: function() {
        var t = Math.min(Math.max(this.value / this.total, 0), 1) || 0;
        this.labelElement.text(this.value + " / " + this.total + " " + this.unit), this.progressElement.width(100 * t + "%"), 0 === this.total ? this.domElement.attr("data-state", "invalid") : t > .9 ? this.domElement.attr("data-state", "negative") : t > .7 ? this.domElement.attr("data-state", "warning") : this.domElement.attr("data-state", "positive")
    }
}), SL.notify = function(t, e) {
    function n() {
        i(), r = setTimeout(function() {
            o.addClass("no-transition").fadeOut(600, s)
        }, e.duration)
    }

    function i() {
        clearTimeout(r), o.stop().css("opacity", "")
    }

    function s() {
        clearTimeout(r), o.remove(), a.dispatch()
    }
    0 === $(".sl-notifications1").length && $(document.body).append('<div class="sl-notifications1"></div>'), $(".sl-notifications>p").last().html() === t && $(".sl-notifications>p").last().remove(), "string" == typeof e && (e = {
        type: e
    }), e = $.extend({
        type: "",
        duration: 2500 + 15 * t.length,
        autoHide: !0
    }, e), "negative" === e.type && (e.duration = 1.5 * e.duration);
    var o = $("<p>").html(t).addClass(e.type).appendTo($(".sl-notifications")).on("click", s);
    e.autoHide && (o.on("mouseover", i), o.on("mouseout", n));
    var a = new signals.Signal,
        r = -1;
    return setTimeout(function() {
        o.addClass("show"), e.autoHide && n()
    }, 1), {
        domElement: o,
        destroy: s,
        destroyed: a
    }
}, SL("components").Prompt = Class.extend({
    init: function(t) {
        this.config = $.extend({
            type: "custom",
            data: null,
            anchor: null,
            title: null,
            optional: !0,
            alignment: "auto",
            offsetX: 0,
            offsetY: 0,
            className: null,
            confirmLabel: "OK",
            cancelLabel: "Cancel",
            hoverTarget: null,
            hoverClass: "hover"
        }, t), this.onBackgroundClicked = this.onBackgroundClicked.bind(this), this.onDocumentKeydown = this.onDocumentKeydown.bind(this), this.onPromptCancelClick = this.onPromptCancelClick.bind(this), this.onPromptConfirmClick = this.onPromptConfirmClick.bind(this), this.onInputChanged = this.onInputChanged.bind(this), this.layout = this.layout.bind(this), this.confirmed = new signals.Signal, this.canceled = new signals.Signal, this.destroyed = new signals.Signal, this.render()
    },
    render: function() {
        this.domElement = $('<div class="sl-prompt" data-type="' + this.config.type + '">'), this.innerElement = $('<div class="sl-prompt-inner">').appendTo(this.domElement), this.arrowElement = $('<div class="sl-prompt-arrow">').appendTo(this.innerElement), this.config.title && (this.titleElement = $('<h3 class="title">').html(this.config.title).appendTo(this.innerElement)), this.config.className && this.domElement.addClass(this.config.className), this.config.html && this.innerElement.append(this.config.html), "select" === this.config.type ? this.renderSelect() : "list" === this.config.type ? (this.renderList(), this.renderButtons(!this.config.multiselect, this.config.multiselect)) : "input" === this.config.type && (this.renderInput(), this.renderButtons())
    },
    renderSelect: function() {
        this.config.data.forEach(function(t) {
            var e = $('<a class="item button outline l">').html(t.html);
            e.data("callback", t.callback), e.appendTo(this.innerElement), e.on("vclick", function(t) {
                var e = $(t.currentTarget).data("callback");
                "function" == typeof e && e.apply(null), this.destroy(), t.preventDefault()
            }.bind(this)), t.focused === !0 && e.addClass("focus"), t.selected === !0 && e.addClass("selected"), "string" == typeof t.className && e.addClass(t.className)
        }.bind(this)), this.domElement.attr("data-length", this.config.data.length)
    },
    renderList: function() {
        this.listElement = $('<div class="list">').appendTo(this.innerElement), this.config.data.forEach(function(t) {
            var e = $('<div class="item">');
            e.html('<span class="title">' + (t.title ? t.title : t.value) + '</span><span class="checkmark icon i-checkmark"></span>'), e.data({
                callback: t.callback,
                value: t.value
            }), e.appendTo(this.listElement), e.on("click", function(e) {
                var n = $(e.currentTarget),
                    i = n.data("callback"),
                    s = n.data("value");
                this.config.multiselect && (n.toggleClass("selected"), t.exclusive ? (n.addClass("selected"), n.siblings().removeClass("selected")) : n.siblings().filter(".exclusive").removeClass("selected")), "function" == typeof i && i.apply(null, [s, n.hasClass("selected")]), this.config.multiselect || (this.confirmed.dispatch(s), this.destroy())
            }.bind(this)), t.focused === !0 && e.addClass("focus"), t.selected === !0 && e.addClass("selected"), t.exclusive === !0 && e.addClass("exclusive"), "string" == typeof t.className && e.addClass(t.className)
        }.bind(this))
    },
    renderInput: function() {
        this.config.data.multiline === !0 ? this.inputElement = $('<textarea cols="40" rows="8">') : (this.inputElement = $('<input type="text">'), "number" == typeof this.config.data.width && this.inputElement.css("width", this.config.data.width)), this.config.data.value && this.inputElement.val(this.config.data.value), this.config.data.placeholder && this.inputElement.attr("placeholder", this.config.data.placeholder), this.config.data.maxlength && this.inputElement.attr("maxlength", this.config.data.maxlength), this.inputWrapperElement = $('<div class="input-wrapper">').append(this.inputElement), this.inputWrapperElement.appendTo(this.innerElement), this.onInputChanged()
    },
    renderButtons: function(t, e) {
        this.footerElement = $('<div class="footer">').appendTo(this.innerElement), !e && this.config.optional && this.config.cancelLabel && this.footerElement.append('<button class="button l outline white prompt-cancel">' + this.config.cancelLabel + "</button>"), !t && this.config.confirmLabel && this.footerElement.append('<button class="button l prompt-confirm">' + this.config.confirmLabel + "</button>")
    },
    bind: function() {
        $(window).on("resize", this.layout), this.domElement.on("vclick", this.onBackgroundClicked), SL.keyboard.keydown(this.onDocumentKeydown), "hidden" !== $("html").css("overflow") && $(window).on("scroll", this.layout), this.domElement.find(".prompt-cancel").on("vclick", this.onPromptCancelClick), this.domElement.find(".prompt-confirm").on("vclick", this.onPromptConfirmClick), this.inputElement && this.inputElement.on("input", this.onInputChanged)
    },
    unbind: function() {
        $(window).off("resize scroll", this.layout), this.domElement.off("vclick", this.onBackgroundClicked), SL.keyboard.release(this.onDocumentKeydown), this.domElement.find(".prompt-cancel").off("vclick", this.onPromptCancelClick), this.domElement.find(".prompt-confirm").off("vclick", this.onPromptConfirmClick), this.inputElement && this.inputElement.off("input", this.onInputChanged)
    },
    layout: function() {
        var t = 10,
            e = window.innerWidth,
            n = window.innerHeight;
        this.innerElement.css({
            "max-width": e - 2 * t,
            "max-height": n - 2 * t
        });
        var i = this.innerElement.outerWidth(),
            s = this.innerElement.outerHeight(),
            o = $(this.config.anchor);
        if (o.length) {
            var a = o.offset(),
                r = 15,
                l = this.config.alignment,
                c = $(window).scrollLeft(),
                d = $(window).scrollTop(),
                u = a.left - c,
                h = a.top - d;
            u += this.config.offsetX, h += this.config.offsetY;
            var p = o.outerWidth(),
                f = o.outerHeight(),
                m = i / 2,
                g = i / 2,
                v = 8;
            switch ("auto" === l && (l = a.top - (s + r + v) < d ? "b" : "t"), this.domElement.attr("data-alignment", l), l) {
                case "t":
                    u += (p - i) / 2, h -= s + r;
                    break;
                case "b":
                    u += (p - i) / 2, h += f + r;
                    break;
                case "l":
                    u -= i + r, h += (f - s) / 2;
                    break;
                case "r":
                    u += p + r, h += (f - s) / 2
            }
            switch (u = Math.max(Math.min(u, window.innerWidth - i - t), t), h = Math.max(Math.min(h, window.innerHeight - s - t), t), u = Math.round(u), h = Math.round(h), l) {
                case "t":
                    m = a.left - u - c + p / 2, m = Math.max(Math.min(m, i - v), v), g = s;
                    break;
                case "b":
                    m = a.left - u - c + p / 2, m = Math.max(Math.min(m, i - v), v), g = -v;
                    break;
                case "l":
                    m = i, g = a.top - h - d + f / 2, g = Math.max(Math.min(g, s - v), v);
                    break;
                case "r":
                    m = -v, g = a.top - h - d + f / 2, g = Math.max(Math.min(g, s - v), v)
            }
            this.innerElement.css({
                left: u,
                top: h
            }), this.arrowElement.css({
                left: m,
                top: g
            }).show()
        } else this.innerElement.css({
            left: Math.round((e - i) / 2),
            top: Math.round(.4 * (n - s))
        }), this.arrowElement.hide()
    },
    focus: function(t) {
        var e = this.innerElement.find(".focus");
        if (e.length || (e = this.innerElement.find(".selected")), e.length) {
            var n = t > 0 ? e.next(".item") : e.prev(".item");
            n.length && (e.removeClass("focus"), n.addClass("focus"))
        } else this.innerElement.find(".item").first().addClass("focus")
    },
    show: function() {
        var t = $(this.config.anchor);
        t.length && t.addClass("focus"), $(this.config.hoverTarget).addClass(this.config.hoverClass), this.domElement.removeClass("visible").appendTo(document.body), setTimeout(function() {
            this.domElement.addClass("visible")
        }.bind(this), 1), this.layout(), this.bind(), this.inputElement && this.inputElement.focus()
    },
    hide: function() {
        var t = $(this.config.anchor);
        t.length && t.removeClass("focus"), $(this.config.hoverTarget).removeClass(this.config.hoverClass), this.domElement.detach(), this.unbind()
    },
    getValue: function() {
        var t = void 0;
        return "input" === this.config.type && (t = this.inputElement.val()), t
    },
    getDOMElement: function() {
        return this.domElement
    },
    cancel: function() {
        if ("input" === this.config.type && this.config.data.confirmBeforeDiscard) {
            var t = this.config.data.value || "",
                e = this.getValue() || "";
            e !== t ? SL.prompt({
                title: "Discard unsaved changes?",
                type: "select",
                data: [{
                    html: "<h3>Cancel</h3>"
                }, {
                    html: "<h3>Discard</h3>",
                    selected: !0,
                    className: "negative",
                    callback: function() {
                        this.canceled.dispatch(this.getValue()), this.destroy()
                    }.bind(this)
                }]
            }) : (this.canceled.dispatch(this.getValue()), this.destroy())
        } else this.canceled.dispatch(this.getValue()), this.destroy()
    },
    destroy: function() {
        this.destroyed.dispatch(), this.destroyed.dispose();
        var t = $(this.config.anchor);
        t.length && t.removeClass("focus"), $(this.config.hoverTarget).removeClass(this.config.hoverClass), this.domElement.remove(), this.unbind(), this.confirmed.dispose(), this.canceled.dispose()
    },
    onBackgroundClicked: function(t) {
        this.config.optional && $(t.target).is(this.domElement) && (this.cancel(), t.preventDefault())
    },
    onPromptCancelClick: function(t) {
        this.cancel(), t.preventDefault()
    },
    onPromptConfirmClick: function(t) {
        this.confirmed.dispatch(this.getValue()), this.destroy(), t.preventDefault()
    },
    onDocumentKeydown: function(t) {
        if (27 === t.keyCode) return this.config.optional && this.cancel(), t.preventDefault(), !1;
        if ("select" === this.config.type || "list" === this.config.type)
            if (13 === t.keyCode) {
                var e = this.innerElement.find(".focus");
                0 === e.length && (e = this.innerElement.find(".selected")), e.length && (e.trigger("click"), t.preventDefault())
            } else 37 === t.keyCode || 38 === t.keyCode ? (this.focus(-1), t.preventDefault()) : 39 === t.keyCode || 40 === t.keyCode ? (this.focus(1), t.preventDefault()) : 9 === t.keyCode && t.shiftKey ? (this.focus(-1), t.preventDefault()) : 9 === t.keyCode && (this.focus(1), t.preventDefault());
        return "input" === this.config.type && (13 !== t.keyCode || this.config.data.multiline || this.onPromptConfirmClick(t)), !0
    },
    onInputChanged: function() {
        if (this.config.data.maxlength) {
            var t = this.inputWrapperElement.find(".input-status");
            0 === t.length && (t = $('<div class="input-status">').appendTo(this.inputWrapperElement));
            var e = this.inputElement.val().length,
                n = this.config.data.maxlength;
            t.text(e + "/" + n), t.toggleClass("negative", e > .95 * n)
        }
    }
}), SL.prompt = function(t) {
    var e = new SL.components.Prompt(t);
    return e.show(), e
}, SL("components").Resizer = Class.extend({
    init: function(t, e) {
        this.domElement = $(t), this.revealElement = this.domElement.closest(".reveal"), this.options = $.extend({
            padding: 10,
            preserveAspectRatio: !1,
            useOverlay: !1
        }, e), this.mouse = {
            x: 0,
            y: 0
        }, this.mouseStart = {
            x: 0,
            y: 0
        }, this.origin = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        }, this.resizing = !1, this.domElement.length ? (this.onAnchorMouseDown = this.onAnchorMouseDown.bind(this), this.onDocumentMouseMove = this.onDocumentMouseMove.bind(this), this.onDocumentMouseUp = this.onDocumentMouseUp.bind(this), this.onElementDrop = this.onElementDrop.bind(this), this.layout = this.layout.bind(this), this.build(), this.bind(), this.layout()) : console.warn("Resizer: invalid resize target.")
    },
    build: function() {
        this.options.useOverlay && (this.overlay = $('<div class="editing-ui resizer-overlay"></div>').appendTo(document.body).hide()), this.anchorN = $('<div class="editing-ui resizer-anchor" data-direction="n"></div>').appendTo(document.body), this.anchorE = $('<div class="editing-ui resizer-anchor" data-direction="e"></div>').appendTo(document.body), this.anchorS = $('<div class="editing-ui resizer-anchor" data-direction="s"></div>').appendTo(document.body), this.anchorW = $('<div class="editing-ui resizer-anchor" data-direction="w"></div>').appendTo(document.body)
    },
    bind: function() {
        this.resizeStarted = new signals.Signal, this.resizeUpdated = new signals.Signal, this.resizeEnded = new signals.Signal, this.getAnchors().on("mousedown", this.onAnchorMouseDown), this.revealElement.on("drop", this.onElementDrop), $(document).on("keyup", this.layout), $(document).on("mouseup", this.layout), $(document).on("mousewheel", this.layout), $(document).on("DOMMouseScroll", this.layout), $(window).on("resize", this.layout)
    },
    layout: function() {
        if (!this.destroyIfDetached()) {
            var t = SL.util.getRevealElementGlobalOffset(this.domElement),
                e = Reveal.getScale(),
                n = parseInt(this.domElement.css("margin-right"), 10);
            marginBottom = parseInt(this.domElement.css("margin-bottom"), 10);
            var i = t.x - this.options.padding,
                s = t.y - this.options.padding,
                o = (this.domElement.width() + n) * e + 2 * this.options.padding;
            height = (this.domElement.height() + marginBottom) * e + 2 * this.options.padding;
            var a = -this.anchorN.outerWidth() / 2;
            this.anchorN.css({
                left: i + o / 2 + a,
                top: s + a
            }), this.anchorE.css({
                left: i + o + a,
                top: s + height / 2 + a
            }), this.anchorS.css({
                left: i + o / 2 + a,
                top: s + height + a
            }), this.anchorW.css({
                left: i + a,
                top: s + height / 2 + a
            }), this.overlay && this.overlay.css({
                left: i,
                top: s,
                width: o,
                height: height
            })
        }
    },
    show: function() {
        this.getAnchors().addClass("visible"), this.layout()
    },
    hide: function() {
        this.getAnchors().removeClass("visible")
    },
    destroyIfDetached: function() {
        return 0 === this.domElement.closest("body").length ? (this.destroy(), !0) : !1
    },
    getOptions: function() {
        return this.options
    },
    getAnchors: function() {
        return this.anchorN.add(this.anchorE).add(this.anchorS).add(this.anchorW)
    },
    isResizing: function() {
        return !!this.resizing
    },
    isDestroyed: function() {
        return !!this.destroyed
    },
    onAnchorMouseDown: function(t) {
        var e = $(t.target).attr("data-direction");
        if (e) {
            t.preventDefault(), this.resizeDirection = e, this.mouseStart.x = t.clientX, this.mouseStart.y = t.clientY;
            var n = SL.util.getRevealElementOffset(this.domElement);
            this.origin.x = n.x, this.origin.y = n.y, this.origin.width = this.domElement.width(), this.origin.height = this.domElement.height(), this.overlay && this.overlay.show(), this.resizing = !0, $(document).on("mousemove", this.onDocumentMouseMove), $(document).on("mouseup", this.onDocumentMouseUp), this.resizeStarted.dispatch()
        }
    },
    onDocumentMouseMove: function(t) {
        if (!this.destroyIfDetached() && (this.mouse.x = t.clientX, this.mouse.y = t.clientY, this.resizing)) {
            var e = Reveal.getScale(),
                n = (this.mouse.x - this.mouseStart.x) / e,
                i = (this.mouse.y - this.mouseStart.y) / e,
                s = "",
                o = "";
            switch (this.resizeDirection) {
                case "e":
                    s = Math.max(this.origin.width + n, 1);
                    break;
                case "w":
                    s = Math.max(this.origin.width - n, 1);
                    break;
                case "s":
                    o = Math.max(this.origin.height + i, 1);
                    break;
                case "n":
                    o = Math.max(this.origin.height - i, 1)
            }
            if (this.options.preserveAspectRatio ? ("" === s && (s = this.origin.width * (o / this.origin.height)), "" === o && (o = this.origin.height * (s / this.origin.width))) : ("" === s && (s = this.domElement.css("width")), "" === o && (o = this.domElement.css("height"))), "absolute" === this.domElement.css("position") && ("n" === this.resizeDirection || "w" === this.resizeDirection)) switch (this.resizeDirection) {
                case "w":
                    this.domElement.css("left", Math.round(this.origin.x + n));
                    break;
                case "n":
                    this.domElement.css("top", Math.round(this.origin.y + i))
            }
            this.domElement.css({
                width: s ? s : "",
                height: o ? o : "",
                maxHeight: "none",
                maxWidth: "none"
            }), this.layout(), this.resizeUpdated.dispatch()
        }
    },
    onDocumentMouseUp: function() {
        this.resizing = !1, $(document).off("mousemove", this.onDocumentMouseMove), $(document).off("mouseup", this.onDocumentMouseUp), this.overlay && this.overlay.hide(), this.resizeEnded.dispatch()
    },
    onElementDrop: function() {
        setTimeout(this.layout, 1)
    },
    destroy: function() {
        this.destroyed || (this.destroyed = !0, this.resizeStarted.dispose(), this.resizeUpdated.dispose(), this.resizeEnded.dispose(), $(document).off("mousemove", this.onDocumentMouseMove), $(document).off("mouseup", this.onDocumentMouseUp), $(document).off("keyup", this.layout), $(document).off("mouseup", this.layout), $(document).off("mousewheel", this.layout), $(document).off("DOMMouseScroll", this.layout), $(window).off("resize", this.layout), this.revealElement.off("drop", this.onElementDrop), this.getAnchors().off("mousedown", this.onAnchorMouseDown), this.anchorN.remove(), this.anchorE.remove(), this.anchorS.remove(), this.anchorW.remove(), this.overlay && this.overlay.remove())
    }
}), SL.components.Resizer.delegateOnHover = function(t, e, n) {
    function i() {
        c && (c.destroy(), c = null, $(document).off("mousemove", a), $(document).off("mouseup", r))
    }

    function s(t, e) {
        if (c && c.isResizing()) return !1;
        if (c && d && !d.is(t) && i(), !c) {
            var s = {};
            $.extend(s, n), $.extend(s, e), d = $(t), c = new SL.components.Resizer(d, s), c.resizeUpdated.add(l), c.show(), $(document).on("mousemove", a), $(document).on("mouseup", r)
        }
    }

    function o(t) {
        var e = $(t.currentTarget),
            n = null;
        e.data("resizer-options") && (n = e.data("resizer-options")), e.data("target-element") && (e = e.data("target-element")), s(e, n)
    }

    function a(t) {
        if (c)
            if (c.isDestroyed()) i();
            else if (!c.isResizing()) {
                var e = Reveal.getScale(),
                    n = SL.util.getRevealElementGlobalOffset(d),
                    s = 3 * c.getOptions().padding,
                    o = {
                        top: n.y - s,
                        right: n.x + d.outerWidth(!0) * e + s,
                        bottom: n.y + d.outerHeight(!0) * e + s,
                        left: n.x - s
                    };
                (t.clientX < o.left || t.clientX > o.right || t.clientY < o.top || t.clientY > o.bottom) && i()
            }
    }

    function r(t) {
        setTimeout(function() {
            a(t)
        }, 1)
    }

    function l() {
        u.dispatch(d)
    }
    t.delegate(e, "mouseover", o);
    var c = null,
        d = null,
        u = new signals.Signal;
    return {
        show: s,
        updated: u,
        layout: function() {
            c && c.layout()
        },
        destroy: function() {
            i(), u.dispose(), t.undelegate(e, "mouseover", o)
        }
    }
}, SL("components").ScrollShadow = Class.extend({
    init: function(t) {
        this.options = $.extend({
            threshold: 20,
            shadowSize: 10,
            resizeContent: !0
        }, t), this.bind(), this.render(), this.layout()
    },
    bind: function() {
        this.layout = this.layout.bind(this), this.sync = this.sync.bind(this), $(window).on("resize", this.layout), this.options.contentElement.on("scroll", this.sync)
    },
    render: function() {
        this.shadowTop = $('<div class="sl-scroll-shadow-top">').appendTo(this.options.parentElement), this.shadowBottom = $('<div class="sl-scroll-shadow-bottom">').appendTo(this.options.parentElement), this.shadowTop.height(this.options.shadowSize), this.shadowBottom.height(this.options.shadowSize)
    },
    layout: function() {
        var t = this.options.parentElement.height(),
            e = this.options.footerElement ? this.options.footerElement.outerHeight() : 0,
            n = this.options.headerElement ? this.options.headerElement.outerHeight() : 0;
        (this.options.resizeContent && this.options.footerElement || this.options.headerElement) && this.options.contentElement.css("height", t - e - n), this.sync()
    },
    sync: function() {
        var t = this.options.footerElement ? this.options.footerElement.outerHeight() : 0,
            e = this.options.headerElement ? this.options.headerElement.outerHeight() : 0,
            n = this.options.contentElement.scrollTop(),
            i = this.options.contentElement.prop("scrollHeight"),
            s = this.options.contentElement.outerHeight(),
            o = i > s + this.options.threshold,
            a = n / (i - s);
        this.shadowTop.css({
            opacity: o ? a : 0,
            top: e
        }), this.shadowBottom.css({
            opacity: o ? 1 - a : 0,
            bottom: t
        })
    },
    destroy: function() {
        $(window).off("resize", this.layout), this.options.contentElement.off("scroll", this.sync), this.options = null
    }
}), SL("components").Search = Class.extend({
    init: function(t) {
        this.config = t, this.searchForm = $(".search .search-form"), this.searchFormInput = this.searchForm.find(".search-term"), this.searchFormSubmit = this.searchForm.find(".search-submit"), this.searchResults = $(".search .search-results"), this.searchResultsHeader = this.searchResults.find("header"), this.searchResultsTitle = this.searchResults.find(".search-results-title"), this.searchResultsSorting = this.searchResults.find(".search-results-sorting"), this.searchResultsList = this.searchResults.find("ul"), this.searchFormLoader = Ladda.create(this.searchFormSubmit.get(0)), this.bind(), this.checkQuery()
    },
    bind: function() {
        this.searchForm.on("submit", this.onSearchFormSubmit.bind(this)), this.searchResultsSorting.find("input[type=radio]").on("click", this.onSearchSortingChange.bind(this))
    },
    checkQuery: function() {
        var t = SL.util.getQuery();
        t.search && !this.searchFormInput.val() && (this.searchFormInput.val(t.search), t.page ? this.search(t.search, parseInt(t.page, 10)) : this.search(t.search))
    },
    renderSearchResults: function(t) {
        if ($(".search").removeClass("empty"), this.searchResults.show(), this.searchResultsList.empty(), this.renderSearchPagination(t), t.results && t.results.length) {
            this.searchResultsTitle.text(t.total + " " + SL.util.string.pluralize("result", "s", t.total > 1) + ' for "' + this.searchTerm + '"');
            for (var e = 0, n = t.results.length; n > e; e++) this.searchResultsList.append(SL.util.html.createDeckThumbnail(t.results[e]))
        } else this.searchResultsTitle.text(t.error || SL.locale.get("SEARCH_NO_RESULTS_FOR", {
                term: this.searchTerm
            }))
    },
    renderSearchPagination: function(t) {
        "undefined" == typeof t.decks_per_page && (t.decks_per_page = 8);
        var e = Math.ceil(t.total / t.decks_per_page);
        this.searchPagination && this.searchPagination.remove(), e > 1 && (this.searchPagination = $('<div class="search-results-pagination"></div>').appendTo(this.searchResultsHeader), this.searchPagination.append('<span class="page">' + SL.locale.get("SEARCH_PAGINATION_PAGE") + " " + this.searchPage + "/" + e + "</span>"), this.searchPage > 1 && this.searchPagination.append('<button class="button outline previous">' + SL.locale.get("PREVIOUS") + "</button>"), this.searchPagination.append('<button class="button outline next">' + SL.locale.get("NEXT") + "</button>"), this.searchPagination.find("button.previous").on("click", function() {
            this.search(this.searchTerm, Math.max(this.searchPage - 1, 1))
        }.bind(this)), this.searchPagination.find("button.next").on("click", function() {
            this.search(this.searchTerm, Math.min(this.searchPage + 1, e))
        }.bind(this)))
    },
    search: function(t, e, n) {
        if (this.searchTerm = t || this.searchFormInput.val(), this.searchPage = e || 1, this.searchSort = n || this.searchSort, window.history && "function" == typeof window.history.replaceState) {
            var i = "?search=" + escape(this.searchTerm);
            e > 1 && (i += "&page=" + e), window.history.replaceState(null, null, "/explore" + i)
        }
        this.searchSort || (this.searchSort = this.searchResultsSorting.find("input[type=radio]:checked").val()), this.searchResultsSorting.find("input[type=radio]").prop("checked", !1), this.searchResultsSorting.find("input[type=radio][value=" + this.searchSort + "]").prop("checked", !0), this.searchTerm ? (this.searchFormLoader.start(), $.ajax({
            type: "GET",
            url: this.config.url,
            context: this,
            data: {
                q: this.searchTerm,
                page: this.searchPage,
                sort: this.searchSort
            }
        }).done(function(t) {
            this.renderSearchResults(t)
        }).fail(function() {
            this.renderSearchResults({
                error: SL.locale.get("SEARCH_SERVER_ERROR")
            })
        }).always(function() {
            this.searchFormLoader.stop()
        })) : SL.notify(SL.locale.get("SEARCH_NO_TERM_ERROR"))
    },
    sort: function(t) {
        this.search(this.searchTerm, this.searchPage, t)
    },
    onSearchFormSubmit: function(t) {
        return this.search(), t.preventDefault(), !1
    },
    onSearchSortingChange: function() {
        this.sort(this.searchResultsSorting.find("input[type=radio]:checked").val())
    }
}), SL("components").TemplatesPage = Class.extend({
    init: function(t) {
        this.options = t || {}, this.templateSelected = new signals.Signal, this.render()
    },
    render: function() {
        this.domElement = $('<div class="page" data-page-id="' + this.options.id + '">'), this.bodyElement = $('<div class="page-body">').appendTo(this.domElement), this.isEditable() && (this.domElement.addClass("has-footer"), this.footerElement = $('<div class="page-footer">').appendTo(this.domElement), this.addTemplateButton = $(['<div class="add-new-template ladda-button" data-style="zoom-out" data-spinner-color="#222" data-spinner-size="32">', '<span class="icon i-plus"></span>', "<span>Save current slide</span>", "</div>"].join("")), this.addTemplateButton.appendTo(this.footerElement), this.addTemplateButton.on("click", this.onTemplateCreateClicked.bind(this)), this.addTemplateButtonLoader = Ladda.create(this.addTemplateButton.get(0))), this.options.templates.forEach(this.renderTemplate.bind(this))
    },
    renderTemplate: function(t, e) {
        e = $.extend({
            prepend: !1
        }, e);
        var n = $('<div class="template-item">');
        n.html(['<div class="template-item-thumb themed">', '<div class="template-item-thumb-content reveal reveal-thumbnail">', '<div class="slides">', t.get("html"), "</div>", '<div class="backgrounds"></div>', "</div>", "</div>"].join("")), n.data("template-model", t), n.on("vclick", this.onTemplateSelected.bind(this, n)), n.find('.sl-block[data-block-type="code"] pre').addClass("hljs"), t.get("label") && n.append('<span class="template-item-label">' + t.get("label") + "</span>"), e.replaceTemplateAt ? this.bodyElement.find(".template-item").eq(e.replaceTemplateAt).replaceWith(n) : e.prepend ? this.bodyElement.prepend(n) : this.bodyElement.append(n);
        var i = n.find("section").attr("data-background-color"),
            s = n.find("section").attr("data-background-image"),
            o = n.find("section").attr("data-background-size"),
            a = $('<div class="slide-background present template-item-thumb-background">');
        if (a.addClass(n.find(".template-item-thumb .reveal section").attr("class")), a.appendTo(n.find(".template-item-thumb .reveal>.backgrounds")), (i || s) && (i && a.css("background-color", i), s && a.css("background-image", 'url("' + s + '")'), o && a.css("background-size", o)), this.isEditable()) {
            var r = $('<div class="template-item-options"></div>').appendTo(n),
                l = $('<div class="option"><span class="icon i-trash-stroke"></span></div>');
            if (l.attr("data-tooltip", "Delete this template"), l.on("vclick", this.onTemplateDeleteClicked.bind(this, n)), l.appendTo(r), this.isTeamTemplates() && SL.current_user.getThemes().size() > 1) {
                var c = $('<div class="option"><span class="icon i-ellipsis-v"></span></div>');
                c.attr("data-tooltip", "Theme availability"), c.on("vclick", this.onTemplateThemeClicked.bind(this, n)), c.appendTo(r)
            }
        }
    },
    refresh: function() {
        if (this.isDefaultTemplates()) {
            var t = SL.data.templates.DEFAULT_TEMPLATES_DUPLICATE_INDEX,
                e = this.options.templates.at(t);
            e && (e.set("html", SL.data.templates.templatize(Reveal.getCurrentSlide())), this.renderTemplate(e, {
                replaceTemplateAt: t
            }))
        }
        this.bodyElement.find(".placeholder").remove();
        var n = SL.view.getCurrentTheme(),
            i = this.bodyElement.find(".template-item");
        if (this.isTeamTemplates() && i.each(function(t, e) {
                var i = $(e),
                    s = i.data("template-model").isAvailableForTheme(n);
                i.toggleClass(SL.current_user.isEnterpriseManager() ? "semi-hidden" : "hidden", !s)
            }.bind(this)), i = this.bodyElement.find(".template-item:not(.hidden)"), i.length) i.each(function(t, e) {
            var i = $(e),
                s = (i.data("template-model"), i.find(".template-item-thumb"));
            s.attr("class", s.attr("class").replace(/theme\-(font|color)\-([a-z0-9-])*/gi, "")), s.addClass("theme-font-" + n.get("font")), s.addClass("theme-color-" + n.get("color")), s.find(".template-item-thumb-content img[data-src]").each(function() {
                this.setAttribute("src", this.getAttribute("data-src")), this.removeAttribute("data-src")
            }), SL.data.templates.layoutTemplate(s.find("section"), !0)
        }.bind(this)), this.bodyElement.find(".placeholder").remove();
        else {
            var s = "You haven't saved any custom templates yet.<br>Click the button below to save one now.";
            this.isTeamTemplates() && (s = SL.current_user.isEnterpriseManager() ? "Templates saved here are made available to the everyone in your team." : "No templates are available for the current theme."), this.bodyElement.append('<p class="placeholder">' + s + "</p>")
        }
    },
    appendTo: function(t) {
        this.domElement.appendTo(t)
    },
    isEditable: function() {
        return this.isUserTemplates() || this.isTeamTemplates() && SL.current_user.isEnterpriseManager()
    },
    isDefaultTemplates: function() {
        return "default" === this.options.id
    },
    isUserTemplates: function() {
        return "user" === this.options.id
    },
    isTeamTemplates: function() {
        return "team" === this.options.id
    },
    getNumberOfVisibleTemplates: function() {
        return this.bodyElement.find(".template-item:not(.hidden)").length
    },
    onTemplateSelected: function(t, e) {
        e.preventDefault(), this.templateSelected.dispatch(t.data("template-model"))
    },
    onTemplateDeleteClicked: function(t, e) {
        return e.preventDefault(), SL.prompt({
            anchor: $(e.currentTarget),
            title: SL.locale.get("TEMPLATE_DELETE_CONFIRM"),
            type: "select",
            hoverTarget: t,
            data: [{
                html: "<h3>Cancel</h3>"
            }, {
                html: "<h3>Delete</h3>",
                selected: !0,
                className: "negative",
                callback: function() {
                    var e = t.data("template-model"),
                        n = SL.config.AJAX_SLIDE_TEMPLATES_DELETE(e.get("id"));
                    this.isTeamTemplates() && (n = SL.config.AJAX_TEAM_SLIDE_TEMPLATES_DELETE(e.get("id"))), $.ajax({
                        type: "DELETE",
                        url: n,
                        context: this
                    }).done(function() {
                        t.remove(), this.refresh()
                    })
                }.bind(this)
            }]
        }), !1
    },
    onTemplateThemeClicked: function(t, e) {
        e.preventDefault();
        var n = SL.current_user.getThemes();
        if (n.size() > 0) {
            var i = t.data("template-model"),
                s = i.get("id"),
                o = i.isAvailableForAllThemes(),
                a = ($(Reveal.getCurrentSlide()), [{
                    value: "All themes",
                    selected: o,
                    exclusive: !0,
                    className: "header-item",
                    callback: function() {
                        n.forEach(function(t) {
                            t.hasSlideTemplate(s) && t.removeSlideTemplate([s]).fail(this.onGenericError)
                        }.bind(this)), this.refresh()
                    }.bind(this)
                }]);
            n.forEach(function(t) {
                a.push({
                    value: t.get("name"),
                    selected: o ? !1 : i.isAvailableForTheme(t),
                    callback: function(e, n) {
                        n ? t.addSlideTemplate([s]).fail(this.onGenericError) : t.removeSlideTemplate([s]).fail(this.onGenericError), this.refresh()
                    }.bind(this)
                })
            }.bind(this)), SL.prompt({
                anchor: $(e.currentTarget),
                title: "Available for...",
                type: "list",
                alignment: "l",
                data: a,
                multiselect: !0,
                optional: !0,
                hoverTarget: t
            })
        }
        return !1
    },
    onTemplateCreateClicked: function() {
        var t = SL.config.AJAX_SLIDE_TEMPLATES_CREATE;
        this.isTeamTemplates() && (t = SL.config.AJAX_TEAM_SLIDE_TEMPLATES_CREATE);
        var e = SL.data.templates.templatize(Reveal.getCurrentSlide());
        return this.addTemplateButtonLoader.start(), $.ajax({
            type: "POST",
            url: t,
            context: this,
            data: {
                slide_template: {
                    html: e
                }
            }
        }).done(function(t) {
            var e = this.options.templates.create(t, {
                prepend: !0
            });
            this.renderTemplate(e, {
                prepend: !0
            }), this.refresh(), this.addTemplateButtonLoader.stop(), SL.analytics.trackEditor(this.isTeamTemplates() ? "Saved team template" : "Saved user template")
        }).fail(function() {
            this.addTemplateButtonLoader.stop(), SL.notify(SL.locale.get("TEMPLATE_CREATE_ERROR"), "negative")
        }), !1
    },
    onGenericError: function() {
        SL.notify(SL.locale.get("GENERIC_ERROR"), "negative")
    }
}), SL("components").Templates = Class.extend({
    init: function(t) {
        this.options = $.extend({
            alignment: "",
            width: 450,
            height: 730,
            arrowSize: 8
        }, t), this.pages = [], SL.data.templates.getUserTemplates(), SL.data.templates.getTeamTemplates(), this.render(), this.bind()
    },
    render: function() {
        this.domElement = $('<div class="sl-templates">'), this.innerElement = $('<div class="sl-templates-inner">').appendTo(this.domElement), this.headerElement = $('<div class="sl-templates-header">').appendTo(this.innerElement), this.bodyElement = $('<div class="sl-templates-body">').appendTo(this.innerElement), this.domElement.data("instance", this)
    },
    renderTemplates: function() {
        this.pages = [], this.headerElement.empty(), this.bodyElement.empty(), this.renderPage("default", "Default", SL.data.templates.getDefaultTemplates()), SL.data.templates.getUserTemplates(function(t) {
            this.renderPage("user", "User", t)
        }.bind(this)), SL.data.templates.getTeamTemplates(function(t) {
            (SL.current_user.isEnterpriseManager() || !t.isEmpty()) && this.renderPage("team", "Team", t)
        }.bind(this))
    },
    renderPage: function(t, e, n) {
        var i = $('<div class="page-tab" data-page-id="' + t + '">' + e + "</div>");
        i.on("vclick", function() {
            this.showPage(t), SL.analytics.trackEditor("Slide templates tab clicked", t)
        }.bind(this)), i.appendTo(this.headerElement);
        var s = new SL.components.TemplatesPage({
            id: t,
            templates: n
        });
        s.templateSelected.add(this.onTemplateSelected.bind(this)), s.appendTo(this.bodyElement), this.pages.push(s), this.domElement.attr("data-pages-total", this.pages.length)
    },
    selectDefaultPage: function() {
        var t = this.pages.some(function(t) {
            return t.isTeamTemplates() && t.getNumberOfVisibleTemplates() > 0
        });
        this.showPage(t ? "team" : "default")
    },
    showPage: function(t) {
        this.bodyElement.find(".page").removeClass("past present future"), this.bodyElement.find('.page[data-page-id="' + t + '"]').addClass("present"), this.bodyElement.find('.page[data-page-id="' + t + '"]').prevAll().addClass("past"), this.bodyElement.find('.page[data-page-id="' + t + '"]').nextAll().addClass("future"), this.headerElement.find(".page-tab").removeClass("selected"), this.headerElement.find('.page-tab[data-page-id="' + t + '"]').addClass("selected")
    },
    refreshPages: function() {
        this.pages.forEach(function(t) {
            t.refresh()
        })
    },
    bind: function() {
        this.layout = this.layout.bind(this), this.onKeyDown = this.onKeyDown.bind(this), this.onClicked = this.onClicked.bind(this), this.domElement.on("vclick", this.onClicked)
    },
    layout: function() {
        var t = 10,
            e = this.domElement.outerWidth(),
            n = this.domElement.outerHeight(),
            i = this.options.width,
            s = this.options.height,
            o = {};
        i = Math.min(i, n - 2 * t), s = Math.min(s, n - 2 * t), this.options.anchor && (o.left = this.options.anchor.offset().left, o.top = this.options.anchor.offset().top, o.width = this.options.anchor.outerWidth(), o.height = this.options.anchor.outerHeight(), o.right = o.left + o.width, o.bottom = o.top + o.height);
        var a, r;
        this.options.anchor && "r" === this.options.alignment ? (i = Math.min(i, o.left - 2 * t), a = o.left - i - this.options.arrowSize - t, r = o.top + o.height / 2 - s / 2) : this.options.anchor && "b" === this.options.alignment ? (s = Math.min(s, o.top - 2 * t), a = o.left + o.width / 2 - i / 2, r = o.top - s - this.options.arrowSize - t) : this.options.anchor && "l" === this.options.alignment ? (i = Math.min(i, e - o.right - 2 * t), a = o.right + this.options.arrowSize + t, r = o.top + o.height / 2 - s / 2) : (a = (e - i) / 2, r = (n - s) / 2), this.innerElement.css({
            width: i,
            height: s,
            left: a,
            top: r
        })
    },
    show: function(t) {
        this.options = $.extend(this.options, t), 0 === this.pages.length && this.renderTemplates(), this.domElement.attr("data-alignment", this.options.alignment), this.domElement.appendTo(document.body), SL.util.skipCSSTransitions(this.domElement), $(window).on("resize", this.layout), SL.keyboard.keydown(this.onKeyDown), this.refreshPages(), this.hasSelectedDefaultPage || (this.hasSelectedDefaultPage = !0, this.selectDefaultPage()), this.layout()
    },
    hide: function() {
        this.domElement.detach(), $(window).off("resize", this.layout), SL.keyboard.release(this.onKeyDown)
    },
    onTemplateSelected: function(t) {
        this.options.callback && (this.hide(), this.options.callback(t.get("html")))
    },
    onKeyDown: function(t) {
        return 27 === t.keyCode ? (this.hide(), !1) : !0
    },
    onClicked: function(t) {
        $(t.target).is(this.domElement) && (t.preventDefault(), this.hide())
    },
    destroy: function() {
        $(window).off("resize", this.layout), SL.keyboard.release(this.onKeyDown), this.domElement.remove()
    }
}), SL("components").TextEditor = Class.extend({
    init: function(t) {
        this.options = $.extend({
            type: "",
            value: ""
        }, t), this.saved = new signals.Signal, this.canceled = new signals.Signal, this.render(), this.bind(), this.originalValue = this.options.value || "", "string" == typeof this.options.value && this.setValue(this.options.value), SL.editor.controllers.Capabilities.isTouchEditor() || this.focusInput()
    },
    render: function() {
        this.domElement = $('<div class="sl-text-editor">').appendTo(document.body), this.innerElement = $('<div class="sl-text-editor-inner">').appendTo(this.domElement), this.domElement.attr("data-type", this.options.type), "html" === this.options.type ? this.renderHTMLInput() : this.renderTextInput(), this.footerElement = $(['<div class="sl-text-editor-footer">', '<button class="button l outline white cancel-button">Cancel</button>', '<button class="button l positive save-button">Save</button>', "</div>"].join("")).appendTo(this.innerElement), setTimeout(function() {
            this.domElement.addClass("visible")
        }.bind(this), 1)
    },
    renderTextInput: function() {
        this.inputElement = $('<textarea class="sl-text-editor-input">').appendTo(this.innerElement), "code" === this.options.type && this.inputElement.tabby({
            tabString: "    "
        })
    },
    renderHTMLInput: function() {
        this.inputElement = $('<div class="editor sl-text-editor-input">').appendTo(this.innerElement), this.codeEditor && "function" == typeof this.codeEditor.destroy && (this.codeEditor.destroy(), this.codeEditor = null);
        try {
            this.codeEditor = ace.edit(this.inputElement.get(0)), this.codeEditor.setTheme("ace/theme/monokai"), this.codeEditor.setDisplayIndentGuides(!0), this.codeEditor.setShowPrintMargin(!1), this.codeEditor.getSession().setMode("ace/mode/html")
        } catch (t) {
            console.log("An error occurred while initializing the Ace editor.")
        }
    },
    bind: function() {
        this.footerElement.find(".save-button").on("click", this.save.bind(this)), this.footerElement.find(".cancel-button").on("click", this.cancel.bind(this)), this.onKeyDown = this.onKeyDown.bind(this), SL.keyboard.keydown(this.onKeyDown), this.onBackgroundClicked = this.onBackgroundClicked.bind(this), this.domElement.on("vclick", this.onBackgroundClicked)
    },
    save: function() {
        this.saved.dispatch(this.getValue()), this.destroy()
    },
    cancel: function() {
        var t = this.originalValue || "",
            e = this.getValue() || "";
        e !== t ? this.cancelPrompt || (this.cancelPrompt = SL.prompt({
            title: "Discard unsaved changes?",
            type: "select",
            data: [{
                html: "<h3>Cancel</h3>"
            }, {
                html: "<h3>Discard</h3>",
                selected: !0,
                className: "negative",
                callback: function() {
                    this.canceled.dispatch(), this.destroy()
                }.bind(this)
            }]
        }), this.cancelPrompt.destroyed.add(function() {
            this.cancelPrompt = null
        }.bind(this))) : (this.canceled.dispatch(), this.destroy())
    },
    focusInput: function() {
        this.codeEditor ? this.codeEditor.focus() : this.inputElement.focus()
    },
    setValue: function(t) {
        this.originalValue = t || "", this.codeEditor ? this.codeEditor.env.document.setValue(t) : this.inputElement.val(t)
    },
    getValue: function() {
        return this.codeEditor ? this.codeEditor.env.document.getValue() : this.inputElement.val()
    },
    onBackgroundClicked: function(t) {
        $(t.target).is(this.domElement) && (this.cancel(), t.preventDefault())
    },
    onKeyDown: function(t) {
        return 27 === t.keyCode ? (this.cancel(), !1) : (t.metaKey || t.ctrlKey) && 83 === t.keyCode ? (this.save(), !1) : !0
    },
    destroy: function() {
        this.saved.dispose(), this.canceled.dispose(), SL.keyboard.release(this.onKeyDown), this.domElement.remove()
    }
}), SL("components").ThemeOptions = Class.extend({
    init: function(t) {
        if (!t.container) throw "Cannot build theme options without container";
        if (!t.model) throw "Cannot build theme options without model";
        this.config = $.extend({
            center: !0,
            rollingLinks: !0,
            colors: SL.config.THEME_COLORS,
            fonts: SL.config.THEME_FONTS,
            transitions: SL.config.THEME_TRANSITIONS,
            backgroundTransitions: SL.config.THEME_BACKGROUND_TRANSITIONS
        }, t), this.theme = t.model, this.changed = new signals.Signal, this.render(), this.updateSelection(), this.toggleDeprecatedOptions(), this.scrollToTop()
    },
    render: function() {
        this.domElement = $('<div class="sl-themeoptions">').appendTo(this.config.container), "string" == typeof this.config.className && this.domElement.addClass(this.config.className), this.config.themes && this.renderThemes(), (this.config.center || this.config.rollingLinks) && this.renderOptions(), this.config.colors && this.renderColors(), this.config.fonts && this.renderFonts(), this.config.transitions && this.renderTransitions(), this.config.backgroundTransitions && this.renderBackgroundTransitions()
    },
    renderThemes: function() {
        if (this.config.themes && !this.config.themes.isEmpty()) {
            var t = $('<div class="section selector theme"><h3>Theme</h3><ul></ul></div>').appendTo(this.domElement),
                e = t.find("ul");
            e.append(['<li data-theme="" class="custom">', '<span class="thumb-icon icon i-equalizer"></span>', '<span class="thumb-label">Custom</span>', "</li>"].join("")), this.config.themes.forEach(function(t) {
                var n = $('<li data-theme="' + t.get("id") + '"><span class="thumb-label" title="' + t.get("name") + '">' + t.get("name") + "</span></li>").appendTo(e);
                t.hasThumbnail() && n.css("background-image", 'url("' + t.get("thumbnail_url") + '")')
            }), this.domElement.find(".theme li").on("vclick", this.onThemeClicked.bind(this))
        }
    },
    renderOptions: function() {
        var t = $('<div class="section options"><h3>Options</h3></div>').appendTo(this.domElement),
            e = $('<div class="options"></div>').appendTo(t);
        this.config.center && (e.append('<div class="unit sl-checkbox outline"><input id="theme-center" value="center" type="checkbox"><label for="theme-center" data-tooltip="Center slide contents vertically (not visible while editing)" data-tooltip-maxwidth="220" data-tooltip-delay="500">Vertical centering</label></div>'), t.find("#theme-center").on("change", this.onOptionChanged.bind(this))), this.config.rollingLinks && (e.append('<div class="unit sl-checkbox outline"><input id="theme-rolling_links" value="rolling_links" type="checkbox"><label for="theme-rolling_links" data-tooltip="Use a 3D hover effect on links" data-tooltip-maxwidth="220" data-tooltip-delay="500">Rolling links</label></div>'), t.find("#theme-rolling_links").on("change", this.onOptionChanged.bind(this)))
    },
    renderColors: function() {
        var t = $('<div class="section selector color"><h3>Color</h3><ul></ul></div>').appendTo(this.domElement),
            e = t.find("ul");
        this.config.colors.forEach(function(t) {
            var n = $('<li data-color="' + t.id + '"><div class="theme-body-color-block"></div><div class="theme-link-color-block"></div></li>');
            n.addClass("theme-color-" + t.id), n.addClass("themed"), n.appendTo(e), t.tooltip && n.attr({
                "data-tooltip": t.tooltip,
                "data-tooltip-delay": 250,
                "data-tooltip-maxwidth": 300
            }), !SL.current_user.isPro() && t.pro && n.attr("data-pro", "true")
        }.bind(this)), this.domElement.find(".color li").on("vclick", this.onColorClicked.bind(this))
    },
    renderFonts: function() {
        var t = $('<div class="section selector font"><h3>Typography</h3><ul></ul></div>').appendTo(this.domElement),
            e = t.find("ul");
        this.config.fonts.forEach(function(t) {
            var n = $('<li data-font="' + t.id + '" data-name="' + t.title + '"><div class="themed"><h1>' + t.title + "</h1><a>Type</a></div></li>");
            n.addClass("theme-font-" + t.id), n.appendTo(e), t.tooltip && n.attr({
                "data-tooltip": t.tooltip,
                "data-tooltip-delay": 250,
                "data-tooltip-maxwidth": 300
            })
        }.bind(this)), this.domElement.find(".font li").on("vclick", this.onFontClicked.bind(this))
    },
    renderTransitions: function() {
        var t = $('<div class="section selector transition"><h3>Transition</h3><ul></ul></div>').appendTo(this.domElement),
            e = t.find("ul");
        this.config.transitions.forEach(function(t) {
            var n = $('<li data-transition="' + t.id + '"></li>').appendTo(e);
            t.deprecated === !0 && n.addClass("deprecated"), t.title && n.attr({
                "data-tooltip": t.title,
                "data-tooltip-oy": -5
            })
        }.bind(this)), this.domElement.find(".transition li").on("vclick", this.onTransitionClicked.bind(this))
    },
    renderBackgroundTransitions: function() {
        var t = $('<div class="section selector background-transition"></div>').appendTo(this.domElement);
        t.append('<h3>Background Transition <span class="icon i-info info-icon" data-tooltip="Background transitions apply when navigating to or from a slide that has a background image or color." data-tooltip-maxwidth="250"></span></h3>'), t.append("<ul>");
        var e = t.find("ul");
        this.config.backgroundTransitions.forEach(function(t) {
            var n = $('<li data-background-transition="' + t.id + '"></li>').appendTo(e);
            t.deprecated === !0 && n.addClass("deprecated"), t.title && n.attr({
                "data-tooltip": t.title,
                "data-tooltip-oy": -5
            })
        }.bind(this)), this.domElement.find(".background-transition li").on("vclick", this.onBackgroundTransitionClicked.bind(this))
    },
    populate: function(t) {
        t && (this.theme = t, this.updateSelection(), this.toggleDeprecatedOptions(), this.scrollToTop())
    },
    scrollToTop: function() {
        this.domElement.scrollTop(0)
    },
    updateSelection: function() {
        this.config.themes && !this.config.themes.isEmpty() && this.domElement.toggleClass("using-theme", this.theme.has("id")), this.config.center && this.domElement.find("#theme-center").prop("checked", 1 == this.theme.get("center")), this.config.rollingLinks && this.domElement.find("#theme-rolling_links").prop("checked", 1 == this.theme.get("rolling_links")), this.domElement.find(".theme li").removeClass("selected"), this.domElement.find(".theme li[data-theme=" + this.theme.get("id") + "]").addClass("selected"), 0 !== this.domElement.find(".theme li.selected").length || this.theme.has("id") || this.domElement.find('.theme li[data-theme=""]').addClass("selected"), this.domElement.find(".color li").removeClass("selected"), this.domElement.find(".color li[data-color=" + this.theme.get("color") + "]").addClass("selected"), this.domElement.find(".font li").removeClass("selected"), this.domElement.find(".font li[data-font=" + this.theme.get("font") + "]").addClass("selected"), this.domElement.find(".font li").each(function(t, e) {
            SL.util.html.removeClasses(e, function(t) {
                return t.match(/^theme\-color\-/gi)
            }), $(e).addClass("theme-color-" + this.theme.get("color"))
        }.bind(this)), this.domElement.find(".transition li").removeClass("selected"), this.domElement.find(".transition li[data-transition=" + this.theme.get("transition") + "]").addClass("selected"), this.domElement.find(".background-transition li").removeClass("selected"), this.domElement.find(".background-transition li[data-background-transition=" + this.theme.get("background_transition") + "]").addClass("selected")
    },
    applySelection: function() {
        SL.helpers.ThemeController.paint(this.theme, {
            center: !1,
            js: !1
        })
    },
    toggleDeprecatedOptions: function() {
        this.domElement.find(".transition .deprecated").toggle(this.theme.isTransitionDeprecated()), this.domElement.find(".background-transition .deprecated").toggle(this.theme.isBackgroundTransitionDeprecated())
    },
    getTheme: function() {
        return this.theme
    },
    onThemeClicked: function(t) {
        var e = $(t.currentTarget),
            n = e.data("theme");
        if (n) {
            var i = this.config.themes.getByProperties({
                id: n
            });
            if (i) {
                if (!i.isLoading()) {
                    var s = $('<div class="thumb-preloader hidden"><div class="spinner centered"></div></div>').appendTo(e),
                        o = setTimeout(function() {
                            s.removeClass("hidden")
                        }, 1);
                    SL.util.html.generateSpinners(), e.addClass("selected"), i.load().done(function() {
                        this.theme = i.clone(), this.updateSelection(), this.applySelection(), this.changed.dispatch()
                    }.bind(this)).fail(function() {
                        SL.notify(SL.locale.get("GENERIC_ERROR"), "negative"), e.removeClass("selected")
                    }.bind(this)).always(function() {
                        clearTimeout(o), s.remove()
                    }.bind(this))
                }
            } else SL.notify("Could not find theme data", "negative")
        } else this.theme.set("id", null), this.theme.set("js", null), this.theme.set("css", null), this.theme.set("less", null), this.theme.set("html", null), this.updateSelection(), this.applySelection(), this.changed.dispatch();
        SL.analytics.trackTheming("Theme option selected")
    },
    onOptionChanged: function() {
        this.theme.set("center", this.domElement.find("#theme-center").is(":checked")), this.theme.set("rolling_links", this.domElement.find("#theme-rolling_links").is(":checked")), this.updateSelection(), this.applySelection(), this.changed.dispatch()
    },
    onColorClicked: function(t) {
        return t.preventDefault(), $(t.currentTarget).is("[data-pro]") ? void window.open("/pricing") : (this.theme.set("color", $(t.currentTarget).data("color")), this.updateSelection(), this.applySelection(), SL.analytics.trackTheming("Color option selected", this.theme.get("color")), void this.changed.dispatch())
    },
    onFontClicked: function(t) {
        t.preventDefault(), this.theme.set("font", $(t.currentTarget).data("font")), this.updateSelection(), this.applySelection(), SL.analytics.trackTheming("Font option selected", this.theme.get("font")), this.changed.dispatch()
    },
    onTransitionClicked: function(t) {
        t.preventDefault(), this.theme.set("transition", $(t.currentTarget).data("transition")), this.updateSelection(), this.applySelection(), SL.analytics.trackTheming("Transition option selected", this.theme.get("transition")), this.changed.dispatch()
    },
    onBackgroundTransitionClicked: function(t) {
        t.preventDefault(), this.theme.set("background_transition", $(t.currentTarget).data("background-transition")), this.updateSelection(), this.applySelection(), SL.analytics.trackTheming("Background transition option selected", this.theme.get("background_transition")), this.changed.dispatch()
    },
    destroy: function() {
        this.changed.dispose(), this.domElement.remove(), this.theme = null, this.config = null
    }
}), SL.tooltip = function() {
    function t() {
        a = $("<div>").addClass("sl-tooltip"), r = $('<p class="sl-tooltip-inner">').appendTo(a), l = $('<div class="sl-tooltip-arrow">').appendTo(a), c = $('<div class="sl-tooltip-arrow-fill">').appendTo(l), e()
    }

    function e() {
        i = i.bind(this), $(document).on("keydown, mousedown", function() {
            SL.tooltip.hide()
        }), SL.util.device.IS_PHONE || SL.util.device.IS_TABLET || ($(document.body).delegate("[data-tooltip]", "mouseenter", function(t) {
            var e = $(t.currentTarget);
            if (!e.is("[no-tooltip]")) {
                var i = e.attr("data-tooltip"),
                    s = e.attr("data-tooltip-delay"),
                    o = e.attr("data-tooltip-align"),
                    a = e.attr("data-tooltip-alignment"),
                    r = e.attr("data-tooltip-maxwidth"),
                    l = e.attr("data-tooltip-maxheight"),
                    c = e.attr("data-tooltip-ox"),
                    d = e.attr("data-tooltip-oy"),
                    u = e.attr("data-tooltip-x"),
                    h = e.attr("data-tooltip-y");
                if (i) {
                    var p = {
                        anchor: e,
                        align: o,
                        alignment: a,
                        delay: parseInt(s, 10),
                        maxwidth: parseInt(r, 10),
                        maxheight: parseInt(l, 10)
                    };
                    c && (p.ox = parseFloat(c)), d && (p.oy = parseFloat(d)), u && h && (p.x = parseFloat(u), p.y = parseFloat(h), p.anchor = null), n(i, p)
                }
            }
        }), $(document.body).delegate("[data-tooltip]", "mouseleave", s))
    }

    function n(t, e) {
        if (!SL.util.device.IS_PHONE && !SL.util.device.IS_TABLET) {
            d = e || {}, clearTimeout(p);
            var s = Date.now() - f;
            if ("number" == typeof d.delay && s > 500) return p = setTimeout(n.bind(this, t, d), d.delay), void delete d.delay;
            a.css("opacity", 0), a.appendTo(document.body), r.html(t), a.css("max-width", d.maxwidth ? d.maxwidth : null), a.css("max-height", d.maxheight ? d.maxheight : null), d.align && a.css("text-align", d.align), i(), a.stop(!0, !0).animate({
                opacity: 1
            }, {
                duration: 150
            }), $(window).on("resize scroll", i)
        }
    }

    function i() {
        var t = $(d.anchor);
        if (t.length) {
            var e = d.alignment || "auto",
                n = 10,
                i = $(window).scrollLeft(),
                s = $(window).scrollTop(),
                o = t.offset();
            o.x = o.left, o.y = o.top, d.anchor.parents(".reveal .slides").length && "undefined" != typeof window.Reveal && (o = SL.util.getRevealElementGlobalOffset(d.anchor));
            var c = t.outerWidth(),
                p = t.outerHeight(),
                f = r.outerWidth(),
                m = r.outerHeight(),
                g = o.x - $(window).scrollLeft(),
                v = o.y - $(window).scrollTop(),
                y = f / 2,
                b = m / 2;
            switch ("number" == typeof d.ox && (g += d.ox), "number" == typeof d.oy && (v += d.oy), "auto" === e && (e = o.y - (m + n + u) < s ? "b" : "t"), e) {
                case "t":
                    g += (c - f) / 2, v -= m + u + h;
                    break;
                case "b":
                    g += (c - f) / 2, v += p + u + h;
                    break;
                case "l":
                    g -= f + u + h, v += (p - m) / 2;
                    break;
                case "r":
                    g += c + u + h, v += (p - m) / 2
            }
            g = Math.min(Math.max(g, n), window.innerWidth - f - n), v = Math.min(Math.max(v, n), window.innerHeight - m - n);
            var S = u + 3;
            switch (e) {
                case "t":
                    y = o.x - g - i + c / 2, b = m, y = Math.min(Math.max(y, S), f - S);
                    break;
                case "b":
                    y = o.x - g - i + c / 2, b = -u, y = Math.min(Math.max(y, S), f - S);
                    break;
                case "l":
                    y = f, b = o.y - v - s + p / 2, b = Math.min(Math.max(b, S), m - S);
                    break;
                case "r":
                    y = -u, b = o.y - v - s + p / 2, b = Math.min(Math.max(b, S), m - S)
            }
            l.css({
                left: Math.round(y),
                top: Math.round(b)
            }), a.css({
                left: Math.round(g),
                top: Math.round(v)
            }).attr("data-alignment", e)
        }
    }

    function s() {
        o() && (f = Date.now()), clearTimeout(p), a.remove().stop(!0, !0), $(window).off("resize scroll", i)
    }

    function o() {
        return a.parent().length > 0
    }
    var a, r, l, c, d, u = 6,
        h = 4,
        p = -1,
        f = -1;
    return t(), {
        show: function(t, e) {
            n(t, e)
        },
        hide: function() {
            s()
        },
        anchorTo: function(t, e, n) {
            var i = {};
            "undefined" != typeof e && (i["data-tooltip"] = e), "number" == typeof n.delay && (i["data-tooltip-delay"] = n.delay), "string" == typeof n.alignment && (i["data-tooltip-alignment"] = n.alignment), $(t).attr(i)
        }
    }
}(), SL("components").Tutorial = Class.extend({
    init: function(t) {
        this.options = $.extend({
            steps: []
        }, t), this.options.steps.forEach(function(t) {
            "undefined" == typeof t.backwards && (t.backwards = function() {}), "undefined" == typeof t.forwards && (t.forwards = function() {})
        }), this.skipped = new signals.Signal, this.finished = new signals.Signal, this.index = -1, this.render(), this.bind(), this.layout(), this.paint(), this.controlsButtons.css("width", this.controlsButtons.outerWidth() + 10)
    },
    render: function() {
        this.domElement = $('<div class="sl-tutorial">'), this.domElement.appendTo(document.body), this.canvas = $('<canvas class="sl-tutorial-canvas">'), this.canvas.appendTo(this.domElement), this.canvas = this.canvas.get(0), this.context = this.canvas.getContext("2d"), this.controls = $('<div class="sl-tutorial-controls">'), this.controls.appendTo(this.domElement), this.controlsInner = $('<div class="sl-tutorial-controls-inner">'), this.controlsInner.appendTo(this.controls), this.renderPagination(), this.controlsButtons = $('<div class="sl-tutorial-buttons">'), this.controlsButtons.appendTo(this.controlsInner), this.nextButton = $('<button class="button no-transition positive l sl-tutorial-next">Next</button>'), this.nextButton.appendTo(this.controlsButtons), this.skipButton = $('<button class="button no-transition outline white l sl-tutorial-skip">Skip tutorial</button>'), this.skipButton.appendTo(this.controlsButtons), this.messageElement = $('<div class="sl-tutorial-message no-transition">').hide(), this.messageElement.appendTo(this.domElement)
    },
    renderPagination: function() {
        this.pagination = $('<div class="sl-tutorial-pagination">'), this.pagination.appendTo(this.controlsInner), this.options.steps.forEach(function(t, e) {
            $('<li class="sl-tutorial-pagination-number">').appendTo(this.pagination).on("click", this.step.bind(this, e))
        }.bind(this))
    },
    updatePagination: function() {
        this.pagination.find(".sl-tutorial-pagination-number").each(function(t, e) {
            e = $(e), e.toggleClass("past", t < this.index), e.toggleClass("present", t === this.index), e.toggleClass("future", t > this.index)
        }.bind(this))
    },
    bind: function() {
        this.onKeyDown = this.onKeyDown.bind(this), this.onSkipClicked = this.onSkipClicked.bind(this), this.onWindowResize = this.onWindowResize.bind(this), SL.keyboard.keydown(this.onKeyDown), this.skipButton.on("click", this.onSkipClicked), this.nextButton.on("click", this.next.bind(this)), $(window).on("resize", this.onWindowResize)
    },
    prev: function() {
        this.step(Math.max(this.index - 1, 0))
    },
    next: function() {
        this.index + 1 >= this.options.steps.length ? (this.finished.dispatch(), this.destroy()) : this.step(Math.min(this.index + 1, this.options.steps.length - 1))
    },
    step: function(t) {
        if (this.index < t) {
            for (; this.index < t;) this.index += 1, this.options.steps[this.index].forwards.call(this.options.context);
            this.index + 1 === this.options.steps.length && (this.skipButton.hide(), this.nextButton.text("Get started"), this.domElement.addClass("last-step"))
        } else if (this.index > t) {
            for (this.index + 1 === this.options.steps.length && (this.skipButton.show(), this.nextButton.text("Next"), this.domElement.removeClass("last-step")); this.index > t;) this.options.steps[this.index].backwards.call(this.options.context), this.index -= 1;
            this.options.steps[this.index].forwards.call(this.options.context)
        }
        this.updatePagination()
    },
    layout: function() {
        this.width = window.innerWidth, this.height = window.innerHeight;
        if (this.cutoutElement) {
            var t = this.cutoutElement.offset();
            this.cutoutRect = {
                x: t.left - this.cutoutPadding,
                y: t.top - this.cutoutPadding,
                width: this.cutoutElement.outerWidth() + 2 * this.cutoutPadding,
                height: this.cutoutElement.outerHeight() + 2 * this.cutoutPadding
            }
        }
        if (this.messageElement.is(":visible")) {
            var e = 20,
                n = this.messageElement.outerWidth(),
                i = this.messageElement.outerHeight(),
                s = {
                    left: (window.innerWidth - n) / 2,
                    top: (window.innerHeight - i) / 2
                };
            if (this.messageOptions.anchor && this.messageOptions.alignment) {
                var o = this.messageOptions.anchor.offset(),
                    a = this.messageOptions.anchor.outerWidth(),
                    r = this.messageOptions.anchor.outerHeight();
                switch (this.messageOptions.alignment) {
                    case "t":
                        s.left = o.left + (a - n) / 2, s.top = o.top - i - e;
                        break;
                    case "r":
                        s.left = o.left + a + e, s.top = o.top + (r - i) / 2;
                        break;
                    case "b":
                        s.left = o.left + (a - n) / 2, s.top = o.top + r + e;
                        break;
                    case "l":
                        s.left = o.left - n - e, s.top = o.top + (r - i) / 2
                }
            }
            var l = "translate(" + Math.round(s.left) + "px," + Math.round(s.top) + "px)";
            this.messageElement.css({
                "-webkit-transform": l,
                "-moz-transform": l,
                "-ms-transform": l,
                transform: l
            }), setTimeout(function() {
                this.messageElement.removeClass("no-transition")
            }.bind(this), 1)
        }
    },
    paint: function() {
        this.canvas.width = this.width, this.canvas.height = this.height, this.context.clearRect(0, 0, this.width, this.height), this.context.fillStyle = "rgba( 0, 0, 0, 0.7 )", this.context.fillRect(0, 0, this.width, this.height), this.cutoutElement && (this.context.clearRect(this.cutoutRect.x, this.cutoutRect.y, this.cutoutRect.width, this.cutoutRect.height), this.context.strokeStyle = "#ddd", this.context.lineWidth = 1, this.context.strokeRect(this.cutoutRect.x + .5, this.cutoutRect.y + .5, this.cutoutRect.width - 1, this.cutoutRect.height - 1))
    },
    cutout: function(t, e) {
        e = e || {}, this.cutoutElement = t, this.cutoutPadding = e.padding || 0, this.layout(), this.paint()
    },
    clearCutout: function() {
        this.cutoutElement = null, this.cutoutPadding = 0, this.paint()
    },
    message: function(t, e) {
        this.messageOptions = $.extend({
            maxWidth: 320,
            alignment: ""
        }, e), this.messageElement.html(t).show(), this.messageElement.css("max-width", this.messageOptions.maxWidth), this.messageElement.attr("data-alignment", this.messageOptions.alignment), this.layout(), this.paint()
    },
    clearMessage: function() {
        this.messageElement.hide(), this.messageOptions = {}
    },
    hasNextStep: function() {
        return this.index + 1 < this.options.steps.length
    },
    destroy: function() {
        this.destroyed || (this.destroyed = !0, $(window).off("resize", this.onWindowResize), this.skipped.dispose(), this.finished.dispose(), SL.keyboard.release(this.onKeyDown), this.domElement.fadeOut(400, this.domElement.remove))
    },
    onKeyDown: function(t) {
        return 27 === t.keyCode ? (this.skipped.dispatch(), this.destroy(), !1) : 37 === t.keyCode || 8 === t.keyCode ? (this.prev(), !1) : 39 === t.keyCode || 32 === t.keyCode ? (this.next(), !1) : !0
    },
    onSkipClicked: function() {
        this.skipped.dispatch(), this.destroy()
    },
    onWindowResize: function() {
        this.layout(), this.paint()
    }
}), SL("views").Base = Class.extend({
    init: function() {
        this.header = new SL.components.Header, this.setupAce(), this.setupSocial(), this.handleLogos(), this.handleOutlines(), this.handleFeedback(), this.handleWindowClose(), this.handleAutoRefresh(), this.parseTimes(), this.parseLinks(), this.parseMeters(), this.parseSpinners(), this.parseNotifications(), this.parseScrollLinks(), setInterval(this.parseTimes.bind(this), 12e4)
    },
    setupAce: function() {
        "object" == typeof window.ace && "object" == typeof window.ace.config && "function" == typeof window.ace.config.set && ace.config.set("workerPath", "/assets")
    },
    setupSocial: function() {
        $(window).on("load", function() {
            if (document.querySelector(".fb-like") && ($("body").append('<div id="fb-root"></div>'), function(t, e, n) {
                    var i, s = t.getElementsByTagName(e)[0];
                    t.getElementById(n) || (i = t.createElement(e), i.id = n, i.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=178466085544080", s.parentNode.insertBefore(i, s))
                }(document, "script", "facebook-jssdk")), document.querySelector(".twitter-share-button") && ! function(t, e, n) {
                    var i, s = t.getElementsByTagName(e)[0];
                    t.getElementById(n) || (i = t.createElement(e), i.id = n, i.src = "//platform.twitter.com/widgets.js", s.parentNode.insertBefore(i, s))
                }(document, "script", "twitter-wjs"), document.querySelector(".g-plusone")) {
                var t = document.createElement("script");
                t.type = "text/javascript", t.async = !0, t.src = "https://apis.google.com/js/plusone.js";
                var e = document.getElementsByTagName("script")[0];
                e.parentNode.insertBefore(t, e)
            }
        })
    },
    handleLogos: function() {
        setTimeout(function() {
            $(".logo-animation").addClass("open")
        }, 600)
    },
    handleOutlines: function() {
        var t = $("<style>").appendTo("head").get(0),
            e = function(e) {
                t.styleSheet ? t.styleSheet.cssText = e : t.innerHTML = e
            };
        $(document).on("mousedown", function() {
            e("a, button, .sl-select, .sl-checkbox label, .radio label { outline: none !important; }")
        }), $(document).on("keydown", function() {
            e("")
        })
    },
    handleFeedback: function() {
        $("html").on("click", "[data-feedback-mode]", function(t) {
            var e = $(this),
                n = {
                    target: this,
                    mode: e.attr("data-feedback-mode") || "contact",
                    position: e.attr("data-feedback-position") || "top",
                    screenshot_enabled: e.attr("data-feedback-screenshot_enabled") || "true",
                    smartvote_enabled: e.attr("data-feedback-smartvote-enabled") || "true",
                    ticket_custom_fields: {}
                };
            SL.current_deck && (n.ticket_custom_fields["Deck ID"] = SL.current_deck.get("id"), n.ticket_custom_fields["Deck Slug"] = SL.current_deck.get("slug"), n.ticket_custom_fields["Deck Version"] = SL.current_deck.get("version"), n.ticket_custom_fields["Deck Font"] = SL.current_deck.get("theme_font"), n.ticket_custom_fields["Deck Color"] = SL.current_deck.get("theme_color"), n.ticket_custom_fields["Deck Transition"] = SL.current_deck.get("transition"), n.ticket_custom_fields["Deck Background Transition"] = SL.current_deck.get("backgroundTransition"));
            var i = e.attr("data-feedback-type");
            i && i.length && (n.ticket_custom_fields.Type = i);
            var s = e.attr("data-feedback-contact-title");
            s && s.length && (n.contact_title = s), UserVoice.push(["show", n]), t.preventDefault()
        })
    },
    handleWindowClose: function() {
        var t = SL.util.getQuery();
        if (t && t.autoclose && window.opener) {
            var e = parseInt(t.autoclose, 10) || 0;
            setTimeout(function() {
                try {
                    window.close()
                } catch (t) {}
            }, e)
        }
    },
    handleAutoRefresh: function() {
        var t = SL.util.getQuery();
        if (t && t.autoRefresh) {
            var e = parseInt(t.autoRefresh, 10);
            !isNaN(e) && e > 0 && setTimeout(function() {
                window.location.reload()
            }, e)
        }
    },
    parseTimes: function() {
        $("time.ago").each(function() {
            var t = $(this).attr("datetime");
            t && $(this).text(moment.utc(t).fromNow())
        }), $("time.date").each(function() {
            var t = $(this).attr("datetime");
            t && $(this).text(moment.utc(t).format("MMM Do, YYYY"))
        })
    },
    parseLinks: function() {
        $(".linkify").each(function() {
            $(this).html(SL.util.string.linkify($(this).text()))
        })
    },
    parseMeters: function() {
        $(".sl-meter").each(function() {
            new SL.components.Meter($(this))
        })
    },
    parseSpinners: function() {
        SL.util.html.generateSpinners()
    },
    parseNotifications: function() {
        var t = $(".flash-notification");
        t.length && SL.notify(t.remove().text(), t.attr("data-notification-type"))
    },
    parseScrollLinks: function() {
        $(document).delegate("a[data-scroll-to]", "click", function(t) {
            var e = t.currentTarget,
                n = $(e.getAttribute("href")),
                i = parseInt(e.getAttribute("data-scroll-to-offset"), 10),
                s = parseInt(e.getAttribute("data-scroll-to-duration"), 10);
            isNaN(i) && (i = -20), isNaN(s) && (s = 1e3), n.length && $("html, body").animate({
                scrollTop: n.offset().top + i
            }, s), t.preventDefault()
        })
    }
}), SL("views.decks").EditRequiresUpgrade = SL.views.Base.extend({
    init: function() {
        this._super(), this.makePublicButton = $(".make-deck-public").first(), this.makePublicButton.on("click", this.onMakePublicClicked.bind(this)), this.makePublicLoader = Ladda.create(this.makePublicButton.get(0))
    },
    makeDeckPublic: function() {
        var t = {
            type: "POST",
            url: SL.config.AJAX_PUBLISH_DECK(SL.current_deck.get("id")),
            context: this,
            data: {
                visibility: SL.models.Deck.VISIBILITY_ALL
            }
        };
        this.makePublicLoader.start(), $.ajax(t).done(function() {
            window.location = SL.routes.DECK_EDIT(SL.current_user.get("username"), SL.current_deck.get("slug"))
        }).fail(function() {
            SL.notify(SL.locale.get("DECK_VISIBILITY_CHANGED_ERROR"), "negative"), this.makePublicLoader.stop()
        })
    },
    onMakePublicClicked: function(t) {
        t.preventDefault(), this.makeDeckPublic()
    }
}), SL("views.decks").Embed = SL.views.Base.extend({
    init: function() {
        this._super(), this.footerElement = $(".embed-footer"), this.shareButton = this.footerElement.find(".embed-footer-share"), this.fullscreenButton = this.footerElement.find(".embed-footer-fullscreen"), this.revealElement = $(".reveal"), SL.util.setupReveal({
            embedded: !0,
            openLinksInTabs: !0,
            trackEvents: !0
        }), $(window).on("resize", this.layout.bind(this)), $(document).on("webkitfullscreenchange mozfullscreenchange MSFullscreenChange fullscreenchange", this.layout.bind(this)), this.shareButton.on("click", this.onShareClicked.bind(this)), this.fullscreenButton.on("click", this.onFullscreenClicked.bind(this));
        var t = SL.util.getQuery().style;
        "hidden" !== t || SL.current_deck.isPro() || (t = null), t && $("html").attr("data-embed-style", t), Modernizr.fullscreen === !1 && this.fullscreenButton.hide(), this.layout()
    },
    layout: function() {
        this.revealElement.height(this.footerElement.is(":visible") ? window.innerHeight - this.footerElement.height() : "100%"), Reveal.layout()
    },
    onFullscreenClicked: function() {
        var t = $("html").get(0);
        return t ? (SL.helpers.Fullscreen.enter(t), !1) : void 0
    },
    onShareClicked: function() {
        SL.popup.open(SL.components.decksharer.DeckSharer, {
            deck: SL.current_deck
        }), SL.analytics.trackPresenting("Share clicked (embed footer)")
    }
}), SL("views.decks").Export = SL.views.Base.extend({
    init: function() {
        this._super(), SL.util.setupReveal({
            history: !navigator.userAgent.match(/(iphone|ipod|ipad|android)/gi),
            openLinksInTabs: !0,
            trackEvents: !0
        })
    }
}), SL("views.decks").Fullscreen = SL.views.Base.extend({
    init: function() {
        this._super(), SL.util.setupReveal({
            history: !navigator.userAgent.match(/(iphone|ipod|ipad|android)/gi),
            openLinksInTabs: !0,
            trackEvents: !0,
            maxScale: SL.config.PRESENT_UPSIZING_MAX_SCALE
        })
    }
}), SL("views.decks").LiveClient = SL.views.Base.extend({
    init: function() {
        this._super(), SL.util.setupReveal({
            touch: !1,
            history: !1,
            keyboard: !1,
            controls: !1,
            progress: !1,
            autoSlide: 0,
            openLinksInTabs: !0,
            trackEvents: !0
        }), Reveal.addEventListener("ready", this.onRevealReady.bind(this)), this.stream = new SL.helpers.StreamLive, this.stream.ready.add(this.onStreamReady.bind(this)), this.stream.stateChanged.add(this.onStreamStateChanged.bind(this)), this.stream.statusChanged.add(this.onStreamStatusChanged.bind(this)), this.render(), this.bind(), this.stream.connect()
    },
    render: function() {
        var t = SL.current_deck.get("user"),
            e = SL.routes.DECK(t.username, SL.current_deck.get("slug")),
            n = t.thumbnail_url;
        this.summaryBubble = $(['<a class="summary-bubble hidden" href="' + e + '" target="_blank">', '<div class="summary-bubble-picture" style="background-image: url(' + n + ')"></div>', '<div class="summary-bubble-content"></div>', "</a>"].join("")).appendTo(document.body), this.summaryBubbleContent = this.summaryBubble.find(".summary-bubble-content"), this.renderUserSummary()
    },
    renderUserSummary: function() {
        var t = SL.current_deck.get("user");
        this.summaryBubbleContent.html(["<h4>" + SL.current_deck.get("title") + "</h4>", "<p>By " + (t.name || t.username) + "</p>"].join(""))
    },
    renderWaitingSummary: function() {
        this.summaryBubbleContent.html(["<h4>Waiting for presenter</h4>", '<p class="retry-status"></p>'].join("")), this.summaryBubbleRetryStatus = this.summaryBubbleContent.find(".retry-status")
    },
    renderConnectionLostSummary: function() {
        this.summaryBubbleContent.html(["<h4>Connection lost</h4>", "<p>Attempting to reconnect</p>"].join(""))
    },
    startUpdatingTimer: function() {
        var t = function() {
            if (this.summaryBubbleRetryStatus && this.summaryBubbleRetryStatus.length) {
                var t = Date.now() - this.stream.getRetryStartTime(),
                    e = Math.ceil((SL.helpers.StreamLive.CONNECTION_RETRY_INTERVAL - t) / 1e3);
                this.summaryBubbleRetryStatus.text(isNaN(e) ? "Retrying" : e > 0 ? "Retrying in " + e + "s" : "Retrying now")
            }
        }.bind(this);
        clearInterval(this.updateTimerInterval), this.updateTimerInterval = setInterval(t, 100), t()
    },
    stopUpdatingTimer: function() {
        clearInterval(this.updateTimerInterval)
    },
    bind: function() {
        this.summaryBubble.on("mouseover", this.expandSummary.bind(this)), this.summaryBubble.on("mouseout", this.collapseSummary.bind(this))
    },
    expandSummary: function(t) {
        clearTimeout(this.collapseSummaryTimeout);
        var e = window.innerWidth - (this.summaryBubbleContent.find("h4, p").offset().left + 40);
        e = Math.min(e, 400), this.summaryBubbleContent.find("h4, p").css("max-width", e), this.summaryBubble.width(this.summaryBubble.height() + this.summaryBubbleContent.outerWidth()), "number" == typeof t && (this.collapseSummaryTimeout = setTimeout(this.collapseSummary.bind(this), t))
    },
    expandSummaryError: function() {
        this.summaryBubbleError = !0, this.expandSummary()
    },
    collapseSummary: function() {
        this.summaryBubbleError || (clearTimeout(this.collapseSummaryTimeout), this.summaryBubble.width(this.summaryBubble.height()))
    },
    setPresentControls: function(t) {
        "boolean" != typeof t && (upsizing = SL.config.PRESENT_CONTROLS_DEFAULT), this.summaryBubble.toggleClass("hidden", !t)
    },
    setPresentUpsizing: function(t) {
        "boolean" != typeof t && (upsizing = SL.config.PRESENT_UPSIZING_DEFAULT), Reveal.configure({
            maxScale: t ? SL.config.PRESENT_UPSIZING_MAX_SCALE : 1
        })
    },
    onRevealReady: function() {
        this.setPresentControls(SL.current_deck.user_settings.get("present_controls")), this.setPresentUpsizing(SL.current_deck.user_settings.get("present_upsizing"))
    },
    onStreamReady: function() {
        this.expandSummary(5e3)
    },
    onStreamStateChanged: function(t) {
        t && "boolean" == typeof t.present_controls && this.setPresentControls(t.present_controls), t && "boolean" == typeof t.present_upsizing && this.setPresentUpsizing(t.present_upsizing)
    },
    onStreamStatusChanged: function(t) {
        t === SL.helpers.StreamLive.STATUS_WAITING_FOR_PUBLISHER ? (this.renderWaitingSummary(), this.expandSummaryError(), this.startUpdatingTimer()) : t === SL.helpers.StreamLive.STATUS_CONNECTION_LOST ? (this.renderConnectionLostSummary(), this.expandSummaryError(), this.stopUpdatingTimer()) : (this.summaryBubbleError = !1, this.renderUserSummary(), this.stopUpdatingTimer())
    }
}), SL("views.decks").LiveServer = SL.views.Base.extend({
    init: function() {
        this._super(), SL.util.setupReveal({
            history: !0,
            openLinksInTabs: !0,
            trackEvents: !0,
            controls: SL.current_user.settings.get("present_controls"),
            progress: SL.current_user.settings.get("present_controls"),
            maxScale: SL.current_user.settings.get("present_upsizing") ? SL.config.PRESENT_UPSIZING_MAX_SCALE : 1
        }), this.stream = new SL.helpers.StreamLive({
            publisher: !0
        }), this.stream.connect(), this.render(), SL.helpers.PageLoader.waitForFonts()
    },
    render: function() {
        var t = SL.current_deck.getURL({
                view: "speaker"
            }),
            e = "http://help.slides.com/knowledgebase/articles/333924",
            n = "http://help.slides.com/knowledgebase/articles/333923";
        this.presentationControls = $(['<aside class="presentation-controls">', '<div class="presentation-controls-content">', "<h2>Presentation Controls</h2>", '<div class="presentation-controls-section">', "<h2>Speaker View</h2>", '<p>The control panel for your presentation. Includes speaker notes, an upcoming slide preview and more. It can be used as a remote control when opened from a mobile device. <a href="' + n + '" target="_blank">Learn more.</a></p>', '<a class="button l outline" href="' + t + '" target="_blank">Open speaker view</a>', "</div>", '<div class="presentation-controls-section">', "<h2>Present Live</h2>", '<p>Share this link with your audience to have them follow along with the presentation in real-time. <a href="' + e + '" target="_blank">Learn more.</a></p>', '<div class="live-share"></div>', "</div>", '<div class="presentation-controls-section sl-form">', "<h2>Options</h2>", '<div class="sl-checkbox outline fullscreen-toggle">', '<input id="fullscreen-checkbox" type="checkbox">', '<label for="fullscreen-checkbox">Fullscreen</label>', "</div>", '<div class="sl-checkbox outline controls-toggle" data-tooltip="Hide the presentation control arrows and progress bar." data-tooltip-alignment="r" data-tooltip-delay="500" data-tooltip-maxwidth="250">', '<input id="controls-checkbox" type="checkbox">', '<label for="controls-checkbox">Hide controls</label>', "</div>", '<div class="sl-checkbox outline upsizing-toggle" data-tooltip="Your content is automatically scaled up to fill as much of the browser window as possible. This option disables that scaling and favors the original authored at size." data-tooltip-alignment="r" data-tooltip-delay="500" data-tooltip-maxwidth="300">', '<input id="upsizing-checkbox" type="checkbox">', '<label for="upsizing-checkbox">Disable upsizing</label>', "</div>", "</div>", "</div>", '<footer class="presentation-controls-footer">', '<button class="button xl positive start-presentation">Start presentation</button>', "</footer>", "</aside>"].join("")).appendTo(document.body), this.presentationControlsScrollShadow = new SL.components.ScrollShadow({
            parentElement: this.presentationControls,
            contentElement: this.presentationControls.find(".presentation-controls-content"),
            footerElement: this.presentationControls.find(".presentation-controls-footer")
        }), this.presentationControls.find(".live-view-url").on("mousedown", this.onLiveURLMouseDown.bind(this)), this.presentationControls.find(".fullscreen-toggle").on("click", this.onFullscreenToggled.bind(this)), this.presentationControls.find(".controls-toggle").on("click", this.onControlsToggled.bind(this)), this.presentationControls.find(".upsizing-toggle").on("click", this.onUpsizingToggled.bind(this)), this.presentationControls.find(".button.start-presentation").on("click", this.onStartPresentationClicked.bind(this)), $(document).on("webkitfullscreenchange mozfullscreenchange MSFullscreenChange fullscreenchange", this.onFullscreenChange.bind(this)), SL.helpers.Fullscreen.isEnabled() === !1 && this.presentationControls.find(".fullscreen-toggle").hide(), this.syncPresentationControls(), this.renderLiveShare()
    },
    syncPresentationControls: function() {
        this.presentationControls.find(".fullscreen-toggle input").prop("checked", SL.helpers.Fullscreen.isActive()), this.presentationControls.find(".controls-toggle input").prop("checked", !SL.current_user.settings.get("present_controls")), this.presentationControls.find(".upsizing-toggle input").prop("checked", !SL.current_user.settings.get("present_upsizing"))
    },
    renderLiveShare: function() {
        this.liveShareElement = this.presentationControls.find(".live-share"), SL.current_deck.isVisibilityAll() ? this.showLiveShareLink(SL.current_deck.getURL({
            view: "live"
        })) : (this.liveShareElement.html('<div class="spinner" data-spinner-color="#777"></div>'), SL.util.html.generateSpinners(), SL.data.tokens.get(SL.current_deck.get("id"), {
            success: function(t) {
                this.tokens = t, 0 === this.tokens.size() ? this.showLiveShareLinkGenerator() : this.showLiveShareLink(SL.current_deck.getURL({
                    view: "live",
                    token: this.tokens.first()
                }))
            }.bind(this),
            error: function() {
                SL.notify(SL.locale.get("GENERIC_ERROR"), "negative"), this.liveShareElement.html('<p class="live-view-error">Failed to generate link</p>')
            }.bind(this)
        }))
    },
    showLiveShareLinkGenerator: function() {
        this.liveShareElement.html(["<p>This deck is private. To share a private deck you'll need to create a secret share link.</p>", '<button class="button l outline ladda-button" data-style="zoom-out" data-spinner-color="#222">Create link</button>'].join(""));
        var t = this.liveShareElement.find(".button"),
            e = Ladda.create(t.get(0));
        t.on("click", function() {
            e.start(), SL.data.tokens.create(SL.current_deck.get("id"), {
                success: function(t) {
                    this.showLiveShareLink(SL.current_deck.getURL({
                        view: "live",
                        token: t
                    })), e.stop()
                }.bind(this),
                error: function() {
                    SL.notify(SL.locale.get("GENERIC_ERROR"), "negative"), e.stop()
                }.bind(this)
            })
        }.bind(this))
    },
    showLiveShareLink: function(t) {
        this.liveShareElement.html('<input class="live-view-url input-field" type="text" value="' + t + '" readonly />'), this.liveShareElement.find(".live-view-url").on("mousedown", this.onLiveURLMouseDown.bind(this))
    },
    showStatus: function(t) {
        this.statusElement ? this.statusElement.find(".stream-status-message").html(t) : this.statusElement = $(['<div class="stream-status">', '<p class="stream-status-message">' + t + "</p>", "</div>"].join("")).appendTo(document.body)
    },
    clearStatus: function() {
        this.statusElement && (this.statusElement.remove(), this.statusElement = null)
    },
    savePresentOption: function(t) {
        this.xhrRequests = this.xhrRequests || {}, this.xhrRequests[t] && this.xhrRequests[t].abort();
        var e = {
            url: SL.config.AJAX_UPDATE_USER_SETTINGS,
            type: "PUT",
            context: this,
            data: {
                user_settings: {}
            }
        };
        e.data.user_settings[t] = SL.current_user.settings.get(t), this.xhrRequests[t] = $.ajax(e).always(function() {
            this.xhrRequests[t] = null
        })
    },
    onLiveURLMouseDown: function(t) {
        $(t.target).focus().select(), t.preventDefault()
    },
    onControlsToggled: function(t) {
        t.preventDefault();
        var e = !Reveal.getConfig().controls;
        SL.current_user.settings.set("present_controls", e), Reveal.configure({
            controls: e,
            progress: e
        }), this.syncPresentationControls(), this.savePresentOption("present_controls"), this.stream.publish(null, {
            present_controls: e
        })
    },
    onUpsizingToggled: function(t) {
        t.preventDefault();
        var e = Reveal.getConfig().maxScale <= 1;
        SL.current_user.settings.set("present_upsizing", e), Reveal.configure({
            maxScale: e ? SL.config.PRESENT_UPSIZING_MAX_SCALE : 1
        }), this.syncPresentationControls(), this.savePresentOption("present_upsizing"), this.stream.publish(null, {
            present_upsizing: e
        })
    },
    onFullscreenToggled: function(t) {
        t.preventDefault(), SL.helpers.Fullscreen.toggle()
    },
    onFullscreenChange: function() {
        this.syncPresentationControls(), Reveal.layout()
    },
    onStartPresentationClicked: function() {
        $("html").addClass("presentation-started")
    }
}), SL("views.decks").Password = SL.views.Base.extend({
    OUTRO_DURATION: 600,
    init: function() {
        this._super(), this.domElement = $(".password-content"), this.formElement = this.domElement.find(".sl-form"), this.inputElement = this.formElement.find(".password-input"), this.submitButton = this.formElement.find(".password-submit"), this.submitLoader = Ladda.create(this.submitButton.get(0)), this.iconElement = $(".password-icon"), this.titleElement = $(".password-title"), this.incorrectPasswordCounter = 0, this.incorrectPasswordMessages = ["Wrong password, please try again", "Still wrong, give it another try", "That one was wrong too", "Nope"], this.submitButton.on("vclick", this.onSubmitClicked.bind(this)), $(document).on("keydown", this.onKeyDown.bind(this))
    },
    submit: function() {
        this.request || (this.submitLoader.start(), this.iconElement.removeClass("wobble"), this.request = $.ajax({
            url: SL.config.AJAX_ACCESS_TOKENS_PASSWORD_AUTH(SLConfig.access_token_id),
            type: "PUT",
            context: this,
            data: {
                access_token: {
                    password: this.inputElement.val()
                }
            }
        }).done(function() {
            this.domElement.addClass("outro"), this.titleElement.text("All set! Loading deck..."), setTimeout(function() {
                window.location.reload()
            }, this.OUTRO_DURATION)
        }).fail(function() {
            this.submitLoader.stop(), this.titleElement.text(this.getIncorrectPasswordMessage()), this.iconElement.addClass("wobble"), this.request = null
        }))
    },
    getIncorrectPasswordMessage: function() {
        return this.incorrectPasswordMessages[this.incorrectPasswordCounter++ % this.incorrectPasswordMessages.length]
    },
    onSubmitClicked: function(t) {
        t.preventDefault(), this.submit()
    },
    onKeyDown: function(t) {
        13 === t.keyCode && (t.preventDefault(), this.submit())
    }
}), SL("views.decks").Show = SL.views.Base.extend({
    init: function() {
        this._super(), SL.util.setupReveal({
            history: !0,
            embedded: !0,
            pause: !1,
            margin: .1,
            openLinksInTabs: !0,
            trackEvents: !0
        }), this.setupDisqus(), this.setupPills(), $("header .deck-promotion").length && $("header").addClass("extra-wide"), Modernizr.fullscreen === !1 && $(".deck-options .fullscreen-button").hide(), this.bind(), this.layout()
    },
    bind: function() {
        this.editButton = $(".deck-options .edit-button"), this.editButtonOriginalLink = this.editButton.attr("href"), $(".deck-options .fork-button").on("click", this.onForkClicked.bind(this)), $(".deck-options .share-button").on("click", this.onShareClicked.bind(this)), $(".deck-options .comment-button").on("click", this.onCommentsClicked.bind(this)), $(".deck-options .fullscreen-button").on("click", this.onFullScreenClicked.bind(this)), this.visibilityButton = $(".deck-options .visibility-button"), this.visibilityButton.on("click", this.onVisibilityClicked.bind(this)), $(document).on("webkitfullscreenchange mozfullscreenchange MSFullscreenChange fullscreenchange", Reveal.layout), this.onWindowScroll = $.debounce(this.onWindowScroll, 200), $(window).on("resize", this.layout.bind(this)), $(window).on("scroll", this.onWindowScroll.bind(this)), this.hideSummary = this.hideSummary.bind(this), Reveal.addEventListener("slidechanged", this.onSlideChanged.bind(this)), Reveal.addEventListener("fragmentshown", this.hideSummary), Reveal.addEventListener("fragmenthidden", this.hideSummary)
    },
    setupPills: function() {
        if (this.summaryPill = $(".summary-pill"), this.instructionsPill = $(".instructions-pill"), this.summaryPill.on("click", this.hideSummary), this.instructionsPill.on("click", this.hideInstructions), this.showSummaryTimeout = setTimeout(this.showSummary.bind(this), 1e3), this.hideSummaryTimeout = setTimeout(this.hideSummary.bind(this), 6e3), !SL.util.user.isLoggedIn() && !SL.util.device.IS_PHONE && !SL.util.device.IS_TABLET && Reveal.getTotalSlides() > 1 && Modernizr.localstorage) {
            var t = "slides-has-seen-deck-navigation-instructions";
            localStorage.getItem(t) || (localStorage.setItem(t, "yes"), this.showInstructionsTimeout = setTimeout(this.showInstructions.bind(this), 6e3))
        }
    },
    setupDisqus: function() {
        $("#disqus_thread").length ? $(window).on("load", function() {
            {
                var t = window.disqus_shortname = "slidesapp";
                window.disqus_identifier = SLConfig.deck.id
            }! function() {
                var e = document.createElement("script");
                e.type = "text/javascript", e.async = !0, e.src = "//" + t + ".disqus.com/embed.js", (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(e)
            }()
        }) : $(".options .comment-button").hide()
    },
    showSummary: function() {
        this.summaryPill && this.summaryPill.addClass("visible")
    },
    hideSummary: function() {
        clearTimeout(this.showSummaryTimeout), this.summaryPill && (this.summaryPill.removeClass("visible"), this.summaryPill.on("transitionend", this.summaryPill.remove), this.summaryPill = null)
    },
    showInstructions: function() {
        this.instructionsPill && this.instructionsPill.addClass("visible")
    },
    hideInstructions: function() {
        clearTimeout(this.showInstructionsTimeout), this.instructionsPill && (this.instructionsPill.removeClass("visible"), this.instructionsPill.on("transitionend", this.instructionsPill.remove), this.instructionsPill = null)
    },
    layout: function() {
        this.summaryPill && this.summaryPill.css("left", (window.innerWidth - this.summaryPill.width()) / 2), this.instructionsPill && this.instructionsPill.css("left", (window.innerWidth - this.instructionsPill.width()) / 2);
        var t = $(".reveal .playback"),
            e = $(".deck-kudos"),
            n = {
                opacity: 1
            };
        e.length && t.length && (n.marginLeft = t.offset().left + t.outerWidth() - 10), e.css(n)
    },
    saveVisibility: function(t) {
        var e = {
            type: "POST",
            url: SL.config.AJAX_PUBLISH_DECK(SL.current_deck.get("id")),
            context: this,
            data: {
                visibility: t
            }
        };
        $.ajax(e).done(function(t) {
            t.deck.visibility === SL.models.Deck.VISIBILITY_SELF ? SL.notify(SL.locale.get("DECK_VISIBILITY_CHANGED_SELF")) : t.deck.visibility === SL.models.Deck.VISIBILITY_TEAM ? SL.notify(SL.locale.get("DECK_VISIBILITY_CHANGED_TEAM")) : t.deck.visibility === SL.models.Deck.VISIBILITY_ALL && SL.notify(SL.locale.get("DECK_VISIBILITY_CHANGED_ALL")), "string" == typeof t.deck.slug && SL.current_deck.set("slug", t.deck.slug), "string" == typeof t.deck.visibility && SL.current_deck.set("visibility", t.deck.visibility)
        }).fail(function() {
            SL.notify(SL.locale.get("DECK_VISIBILITY_CHANGED_ERROR"), "negative")
        })
    },
    onShareClicked: function() {
        return "undefined" != typeof SLConfig && "string" == typeof SLConfig.deck.user.username && "string" == typeof SLConfig.deck.slug ? SL.popup.open(SL.components.decksharer.DeckSharer, {
            deck: SL.current_deck
        }) : SL.notify(SL.locale.get("GENERIC_ERROR"), "negative"), SL.analytics.trackPresenting("Share clicked"), !1
    },
    onCommentsClicked: function() {
        SL.analytics.trackPresenting("Comments clicked")
    },
    onFullScreenClicked: function() {
        var t = $(".reveal-viewport").get(0);
        return t ? (SL.helpers.Fullscreen.enter(t), !1) : void SL.analytics.trackPresenting("Fullscreen clicked")
    },
    onForkClicked: function() {
        return SL.analytics.trackPresenting("Fork clicked"), $.ajax({
            type: "POST",
            url: SL.config.AJAX_FORK_DECK(SLConfig.deck.id),
            context: this
        }).done(function() {
            window.location = SL.current_user.getProfileURL()
        }).fail(function() {
            SL.notify(SL.locale.get("GENERIC_ERROR"), "negative")
        }), !1
    },
    onVisibilityClicked: function(t) {
        t.preventDefault();
        var e = SL.current_deck.get("visibility"),
            n = [];
        n.push({
            html: SL.locale.get("DECK_VISIBILITY_CHANGE_SELF"),
            selected: e === SL.models.Deck.VISIBILITY_SELF,
            callback: function() {
                this.saveVisibility(SL.models.Deck.VISIBILITY_SELF), SL.analytics.trackPresenting("Visibility changed", "self")
            }.bind(this)
        }), SL.current_user.isEnterprise() && n.push({
            html: SL.locale.get("DECK_VISIBILITY_CHANGE_TEAM"),
            selected: e === SL.models.Deck.VISIBILITY_TEAM,
            className: "divider",
            callback: function() {
                this.saveVisibility(SL.models.Deck.VISIBILITY_TEAM), SL.analytics.trackPresenting("Visibility changed", "team")
            }.bind(this)
        }), n.push({
            html: SL.locale.get("DECK_VISIBILITY_CHANGE_ALL"),
            selected: e === SL.models.Deck.VISIBILITY_ALL,
            callback: function() {
                this.saveVisibility(SL.models.Deck.VISIBILITY_ALL), SL.analytics.trackPresenting("Visibility changed", "all")
            }.bind(this)
        }), SL.prompt({
            anchor: $(t.currentTarget),
            type: "select",
            data: n
        }), SL.analytics.trackPresenting("Visibility menu opened")
    },
    onSlideChanged: function(t) {
        this.hideSummary(), this.hideInstructions();
        var e = "#";
        t.indexh && (e += "/" + t.indexh, t.indexv && (e += "/" + t.indexv)), this.editButton.attr("href", this.editButtonOriginalLink + e)
    },
    onWindowScroll: function() {
        $(window).scrollTop() > 10 && (this.hideSummary(), this.hideInstructions())
    }
}), SL("views.decks").Speaker = SL.views.Base.extend({
    init: function() {
        this._super(), this.notesElement = $(".speaker-controls .notes"), this.notesValue = $(".speaker-controls .notes .value"), this.timeElement = $(".speaker-controls .time"), this.timeTimerValue = $(".speaker-controls .time .timer-value"), this.timeClockValue = $(".speaker-controls .time .clock-value"), this.subscribersElement = $(".speaker-controls .subscribers"), this.subscribersValue = $(".speaker-controls .subscribers .subscribers-value"), this.currentElement = $(".current-slide"), this.upcomingElement = $(".upcoming-slide"), this.upcomingFrame = $(".upcoming-slide iframe"), this.upcomingJumpTo = $(".upcoming-slide-jump-to"), this.upcomingFrame.length ? (this.upcomingFrame.on("load", this.onUpcomingFrameLoaded.bind(this)), this.upcomingFrame.attr("src", this.upcomingFrame.attr("data-src"))) : this.setup(), SL.helpers.PageLoader.show()
    },
    setup: function() {
        Reveal.addEventListener("ready", function() {
            this.currentReveal = window.Reveal, this.currentReveal.addEventListener("slidechanged", this.onCurrentSlideChanged.bind(this)), this.currentReveal.addEventListener("fragmentshown", this.onCurrentFragmentChanged.bind(this)), this.currentReveal.addEventListener("fragmenthidden", this.onCurrentFragmentChanged.bind(this)), this.currentReveal.addEventListener("paused", this.onCurrentPaused.bind(this)), this.currentReveal.addEventListener("resumed", this.onCurrentResumed.bind(this)), this.upcomingFrame.length && (this.upcomingReveal = this.upcomingFrame.get(0).contentWindow.Reveal, this.upcomingReveal.configure({
                history: !1,
                controls: !1,
                progress: !1,
                overview: !1,
                autoSlide: 0,
                transition: "none",
                backgroundTransition: "none"
            }), this.upcomingReveal.addEventListener("slidechanged", this.onUpcomingSlideChanged.bind(this)), this.upcomingReveal.addEventListener("fragmentshown", this.onUpcomingFragmentChanged.bind(this)), this.upcomingReveal.addEventListener("fragmenthidden", this.onUpcomingFragmentChanged.bind(this)), this.upcomingFrame.get(0).contentWindow.document.body.className += " no-transition", this.upcomingJumpTo.on("vclick", this.onJumpToUpcomingSlide.bind(this)), this.syncJumpButton()), this.setupTimer(), this.setupTouch(), this.stream = new SL.helpers.StreamLive({
                reveal: this.currentReveal,
                publisher: !0
            }), this.stream.ready.add(this.onStreamReady.bind(this)), this.stream.subscribersChanged.add(this.onStreamSubscribersChange.bind(this)), this.stream.connect()
        }.bind(this)), SL.util.setupReveal({
            touch: !0,
            history: !1,
            autoSlide: 0,
            openLinksInTabs: !0,
            trackEvents: !0
        })
    },
    setupTouch: function() {
        if ($("html").hasClass("speaker-mobile") && (SL.util.device.HAS_TOUCH || window.navigator.pointerEnabled)) {
            this.touchControls = $(['<div class="touch-controls">', '<div class="touch-controls-content">', '<span class="status">', "Tap or Swipe to change slide", "</span>", '<span class="slide-number"></span>', "</div>", '<div class="touch-controls-progress"></div>', "</div>"].join("")).appendTo(document.body), this.touchControlsProgress = this.touchControls.find(".touch-controls-progress"), this.touchControlsSlideNumber = this.touchControls.find(".slide-number"), this.touchControlsStatus = this.touchControls.find(".status"), setTimeout(function() {
                this.touchControls.addClass("visible")
            }.bind(this), 1e3);
            var t = new Hammer(document.body);
            t.get("swipe").set({
                direction: Hammer.DIRECTION_ALL
            }), t.get("press").set({
                threshold: 1e3
            }), t.on("swipe", function(t) {
                switch (t.direction) {
                    case Hammer.DIRECTION_LEFT:
                        this.currentReveal.right(), this.showTouchStatus("Next slide");
                        break;
                    case Hammer.DIRECTION_RIGHT:
                        this.currentReveal.left(), this.showTouchStatus("Previous slide");
                        break;
                    case Hammer.DIRECTION_UP:
                        this.currentReveal.down(), this.showTouchStatus("Next vertical slide");
                        break;
                    case Hammer.DIRECTION_DOWN:
                        this.currentReveal.up(), this.showTouchStatus("Previous vertical slide")
                }
            }.bind(this)), t.on("tap", function() {
                this.currentReveal.next(), this.showTouchStatus("Next slide")
            }.bind(this)), t.on("press", function() {
                this.currentReveal.isPaused() && (this.currentReveal.togglePause(!1), this.showTouchStatus("Resumed"))
            }.bind(this))
        }
    },
    setupTimer: function() {
        this.timeTimerValue.on("click", this.restartTimer.bind(this)), this.restartTimer(), setInterval(this.syncTimer.bind(this), 1e3)
    },
    restartTimer: function() {
        this.startTime = Date.now(), this.syncTimer()
    },
    sync: function() {
        setTimeout(function() {
            this.syncUpcomingSlide(), this.syncTouchControls(), this.syncNotes(), this.syncTimer()
        }.bind(this), 1)
    },
    syncTimer: function() {
        var t = moment();
        this.timeClockValue.html(t.format("hh:mm") + ' <span class="dim">' + t.format("A") + "<span>"), t.hour(0).minute(0).second((Date.now() - this.startTime) / 1e3);
        var e = t.format("HH") + ":",
            n = t.format("mm") + ":",
            i = t.format("ss");
        "00:" === e && (e = '<span class="dim">' + e + "</span>", "00:" === n && (n = '<span class="dim">' + n + "</span>")), this.timeTimerValue.html(e + n + i)
    },
    syncUpcomingSlide: function() {
        if (this.upcomingReveal) {
            var t = this.currentReveal.getIndices();
            this.upcomingReveal.slide(t.h, t.v, t.f), this.upcomingReveal.next();
            var e = this.upcomingReveal.getIndices();
            this.upcomingElement.toggleClass("is-last-slide", t.h === e.h && t.v === e.v && t.f === e.f)
        }
    },
    syncJumpButton: function() {
        if (this.upcomingReveal) {
            var t = this.currentReveal.getIndices(),
                e = this.upcomingReveal.getIndices();
            this.upcomingJumpTo.toggleClass("hidden", t.h === e.h && t.v === e.v && t.f === e.f)
        }
    },
    syncNotes: function() {
        var t = $(this.currentReveal.getCurrentSlide()).attr("data-notes") || "";
        t ? (this.notesElement.show(), this.notesValue.text(t), this.notesElement.removeAttr("data-note-length"), t.length < .4 * SL.config.SPEAKER_NOTES_MAXLENGTH ? this.notesElement.attr("data-note-length", "short") : t.length > .7 * SL.config.SPEAKER_NOTES_MAXLENGTH && this.notesElement.attr("data-note-length", "long")) : this.notesElement.hide()
    },
    syncTouchControls: function() {
        if (this.touchControls) {
            var t = this.currentReveal.getProgress();
            this.touchControlsProgress.css({
                "-webkit-transform": "scale(" + t + ", 1)",
                "-moz-transform": "scale(" + t + ", 1)",
                "-ms-transform": "scale(" + t + ", 1)",
                transform: "scale(" + t + ", 1)"
            });
            var e = $(".reveal .slides section:not(.stack)").length,
                n = this.currentReveal.getIndices().h + this.currentReveal.getIndices().v;
            n += $(".reveal .slides>section.present").prevAll("section").find(">section:gt(0)").length, n += 1, this.touchControlsSlideNumber.html(n + "/" + e)
        }
    },
    showTouchStatus: function(t) {
        clearTimeout(this.touchControlsStatusTimeout);
        var e = this.currentReveal && this.currentReveal.isPaused();
        e && (t = "Paused (tap+hold to resume)"), this.touchControlsStatus && (this.touchControlsStatus.text(t).removeClass("hidden"), e || (this.touchControlsStatusTimeout = setTimeout(function() {
            this.touchControlsStatus.addClass("hidden")
        }.bind(this), 1e3)))
    },
    onUpcomingFrameLoaded: function() {
        this.setup()
    },
    onStreamReady: function() {
        SL.helpers.PageLoader.hide(), this.sync()
    },
    onStreamSubscribersChange: function(t) {
        "number" == typeof this.subscriberCount && (this.subscribersValue.removeClass("flash green flash-red"), t > this.subscriberCount ? setTimeout(function() {
            this.subscribersValue.addClass("flash-green")
        }.bind(this), 1) : t < this.subscriberCount && setTimeout(function() {
            this.subscribersValue.addClass("flash-red")
        }.bind(this), 1)), this.subscriberCount = t, this.subscriberCount > 0 ? (this.subscribersValue.html('<span class="icon i-eye"></span>' + t), this.subscribersElement.addClass("visible")) : this.subscribersElement.removeClass("visible")
    },
    onCurrentSlideChanged: function() {
        this.sync()
    },
    onCurrentFragmentChanged: function() {
        this.sync()
    },
    onCurrentPaused: function() {
        this.pausedInstructions || (this.pausedInstructions = $('<h3 class="message-overlay">Paused. Press the "B" key to resume.</h3>'), this.pausedInstructions.appendTo(this.currentElement), this.pausedInstructions.addClass("visible"))
    },
    onCurrentResumed: function() {
        this.pausedInstructions && (this.pausedInstructions.remove(), this.pausedInstructions = null)
    },
    onUpcomingSlideChanged: function() {
        this.syncJumpButton()
    },
    onUpcomingFragmentChanged: function() {
        this.syncJumpButton()
    },
    onJumpToUpcomingSlide: function() {
        var t = this.upcomingReveal.getIndices();
        this.currentReveal.slide(t.h, t.v, t.f), this.syncUpcomingSlide()
    }
}), SL("views.devise").All = SL.views.Base.extend({
    init: function() {
        this._super(), this.setupForm(), $(".auth-button.email.toggle").on("vclick", function(t) {
            t.preventDefault();
            var e = $(".auth-option.email-auth");
            e.toggleClass("hidden"), e.hasClass("hidden") === !1 && e.find('input[type="text"], input[type="email"]').first().focus()
        })
    },
    setupForm: function() {
        if (this.formElement = $("form"), this.formElement.length) {
            this.formElement.find(".unit[data-validate]").each(function(t, e) {
                new SL.components.FormUnit(e)
            });
            var t = this.formElement.find("button[type=submit]");
            t.length && this.formElement.on("submit", function(e) {
                if (!e.isDefaultPrevented()) {
                    if ($(".g-recaptcha").length && "undefined" != typeof window.grecaptcha && "function" == typeof window.grecaptcha.getResponse && !grecaptcha.getResponse()) return SL.notify("Please answer the reCAPTCHA to prove you're not a robot"), e.preventDefault(), !1;
                    Ladda.create(t.get(0)).start()
                }
            }.bind(this))
        }
    }
}), SL("views.devise").Edit = SL.views.devise.All.extend({
    init: function() {
        this._super(), $(".delete-account-toggle").on("click", this.onDeleteAccountToggleClicked.bind(this)), $(".delete-profile-photo").on("click", this.onDeleteProfilePhotoClicked.bind(this)), $("#user_email").on("change keyup", this.onEmailChanged.bind(this)), $("#user_password").on("change keyup", this.onNewPasswordChanged.bind(this)), this.undoAutoFill()
    },
    undoAutoFill: function() {
        if (navigator.userAgent.toLowerCase().indexOf("chrome") >= 0) var t = window.setInterval(function() {
            var e = $("input:-webkit-autofill");
            e.length > 0 && (window.clearInterval(t), e.each(function() {
                var t = $(this).clone(!0, !0);
                t.is("[type=password]") && t.val(""), $(this).after(t).remove();
                var e = t.parent(".unit");
                e.length && new SL.components.FormUnit(e)
            }))
        }, 20)
    },
    updatePasswordVerification: function() {
        var t = $("#user_email").parents(".unit"),
            e = $("#user_password").parents(".unit"),
            n = $("#user_current_password").parents(".unit"),
            i = t.data("controller"),
            s = e.data("controller");
        i && s && i.isUnchanged() && s.isUnchanged() ? (n.removeAttr("data-required"), n.addClass("hidden")) : (n.attr("data-required", "true"), n.removeClass("hidden"))
    },
    onDeleteAccountToggleClicked: function(t) {
        t.preventDefault(), $(".delete-account").toggleClass("visible")
    },
    onDeleteProfilePhotoClicked: function(t) {
        t.preventDefault(), $.ajax({
            url: SL.config.AJAX_UPDATE_USER,
            type: "PUT",
            context: this,
            data: {
                user: {
                    profile_photo: ""
                }
            }
        }).done(function() {
            $(".photo-editor").attr("data-photo-type", "gravatar")
        }).fail(function() {
            SL.notify("An error occured while saving", "negative")
        })
    },
    onEmailChanged: function() {
        this.updatePasswordVerification()
    },
    onNewPasswordChanged: function() {
        this.updatePasswordVerification()
    }
}), SL("views.home").Explore = SL.views.Base.extend({
    init: function() {
        this._super(), new SL.components.Search({
            url: SL.config.AJAX_SEARCH
        })
    }
}), SL("views.home").Index = SL.views.Base.extend({
    MARQUEE_MIN_HEIGHT: 600,
    init: function() {
        this._super(), this.learnMoreButton = $(".marquee .description-cta-secondary"), this.scrollPromotion = $(".marquee .scroll-promotion"), this.scrollPromotionArrow = $(".marquee .scroll-promotion-arrow"), this.setupVideo(), this.bind(), this.startScrollPromotion()
    },
    setupVideo: function() {
        (SL.util.device.IS_PHONE || SL.util.device.IS_TABLET) && ($(".media-item video").each(function() {
            $(this).prop("controls", !0)
        }), $(".features .media-item").each(function() {
            var t = $(this),
                e = t.find(".image-wrapper"),
                n = t.find(".video-wrapper");
            n.length && (n.appendTo(t), e.appendTo(t), t.addClass("manually-triggered"), t.find(".browser-frame").remove(), t.find(".browser-content").remove())
        })), $(".media-item video").each(function(t, e) {
            var n = "";
            e = $(e), SL.util.device.IS_PHONE || SL.util.device.IS_TABLET ? e.parents(".media-item").addClass("loaded") : e.on("loadeddata", function() {
                e.parents(".media-item").addClass("loaded")
            }), e.find("span[data-src]").each(function(t, e) {
                e = $(e), n += '<source src="' + e.attr("data-src") + '" type="' + e.attr("data-type") + '">'
            }), n && e.html(n)
        })
    },
    bind: function() {
        this.learnMoreButton.on("click", this.onLearnMoreClicked.bind(this)), this.scrollPromotion.on("click", this.onLearnMoreClicked.bind(this)), this.scrollPromotionArrow.on("mouseover", this.onScrollPromotionOver.bind(this)), this.syncScrolling = $.debounce(this.syncScrolling, 300), this.trackScrolling = $.throttle(this.trackScrolling, 500), $(window).on("resize", this.onWindowResize.bind(this)), $(window).on("scroll", this.onWindowScroll.bind(this))
    },
    trackScrolling: function() {
        this.scrollTracking = this.scrollTracking || {};
        var t = $(window).scrollTop(),
            e = window.innerHeight,
            n = $(document).height(),
            i = Math.max(Math.min(t / (n - e), 1), 0);
        i > .1 && !this.scrollTracking[.1] && (this.scrollTracking[.1] = !0, SL.analytics.track("Home: Scrolled", "10%")), i > .5 && !this.scrollTracking[.5] && (this.scrollTracking[.5] = !0, SL.analytics.track("Home: Scrolled", "50%")), i > .95 && !this.scrollTracking[.95] && (this.scrollTracking[.95] = !0, SL.analytics.track("Home: Scrolled", "100%"))
    },
    syncScrolling: function() {
        var t = $(window).scrollTop();
        if (!SL.util.device.IS_PHONE && !SL.util.device.IS_TABLET) {
            var e, n = Number.MAX_VALUE;
            $(".media-item .video-wrapper, .media-item .animation-wrapper").each(function(i, s) {
                s = $(s);
                var o = s.offset().top,
                    a = o - t;
                a > -100 && 500 > a && n > a && (n = a, e = s)
            }), this.activeFeature && !this.activeFeature.is(e) && this.stopFeatureAnimation(), e && !e.hasClass("playing") && (this.activeFeature = e, this.startFeatureAnimation())
        }
        t > 20 && this.scrollPromotion.addClass("hidden")
    },
    startFeatureAnimation: function() {
        if (this.activeFeature.addClass("playing"), this.activeFeature.is(".video-wrapper")) this.activeFeature.find("video").get(0).play();
        else if (this.activeFeature.is(".animation-wrapper")) {
            var t = parseInt(this.activeFeature.attr("data-animation-steps"), 10),
                e = parseInt(this.activeFeature.attr("data-animation-duration"), 10),
                n = 1;
            this.activeFeature.attr("data-animation-step", n), this.activeFeatureInterval = setInterval(function() {
                n += 1, n = n > t ? 1 : n, this.activeFeature.attr("data-animation-step", n)
            }.bind(this), e / t)
        }
        SL.analytics.track("Home: Start feature animation")
    },
    stopFeatureAnimation: function() {
        this.activeFeature.removeClass("playing"), this.activeFeature.removeAttr("data-animation-step"), clearInterval(this.activeFeatureInterval), this.activeFeature.is(".video-wrapper") && this.activeFeature.find("video").get(0).pause()
    },
    startScrollPromotion: function() {
        clearInterval(this.scrollPromotionInterval), this.scrollPromotionInterval = setInterval(this.promoteScrolling.bind(this), 2500)
    },
    stopScrollPromotion: function() {
        clearInterval(this.scrollPromotionInterval), this.scrollPromotionInterval = null
    },
    promoteScrolling: function() {
        this.scrollPromotionArrow.removeClass("bounce"), setTimeout(function() {
            this.scrollPromotionArrow.addClass("bounce")
        }.bind(this), 1)
    },
    onScrollPromotionOver: function() {
        this.stopScrollPromotion()
    },
    onLearnMoreClicked: function() {
        SL.analytics.track("Home: Learn more clicked"), this.stopScrollPromotion()
    },
    onWindowResize: function() {
        this.syncScrolling()
    },
    onWindowScroll: function() {
        this.scrollPromotionInterval && this.stopScrollPromotion(), this.syncScrolling(), this.trackScrolling()
    }
}), SL("views.statik").All = SL.views.Base.extend({
    init: function() {
        this._super(), $("img.click-to-expand").on("click", function() {
            $(this).toggleClass("expanded")
        })
    }
}), SL("views.statik").Pricing = SL.views.statik.All.extend({
    init: function() {
        this._super(), $(".tier").each(this.setupTier.bind(this))
    },
    setupTier: function(t, e) {
        var e = $(e),
            n = e.find(".cta a");
        n.length && !n.hasClass("disabled") && (e.on("click", function(t) {
            t.preventDefault(), window.location = n.attr("href")
        }), e.on("mouseenter", function() {
            e.addClass("hover")
        }), e.on("mouseleave", function() {
            e.removeClass("hover")
        }))
    }
}), SL("views.subscriptions").EditPeriod = SL.views.Base.extend({
    init: function() {
        this._super(), Ladda.bind($("#payment-form button[type=submit]").get(0))
    }
}), SL("views.subscriptions").New = SL.views.Base.extend({
    init: function() {
        this._super(), this.onFormSubmit = this.onFormSubmit.bind(this), this.onStripeResponse = this.onStripeResponse.bind(this), this.formElement = $("#payment-form"), this.formElement.on("submit", this.onFormSubmit), this.formSubmitButton = this.formElement.find("button[type=submit]"), this.formSubmitLoader = Ladda.create(this.formSubmitButton.get(0)), $("#stripe-card-number").payment("formatCardNumber"), $("#stripe-card-cvc").payment("formatCardCVC"), $("#stripe-month").payment("restrictNumeric"), $("#stripe-year").payment("restrictNumeric"), SL.util.device.supportedByEditor() || $(".column").prepend("<section class=\"critical-error\"><h2>Not supported</h2><p>It looks like you're using a browser which isn't suported by the Slides editor. Please make sure to try the editor before upgrading.</p></section>"), $("html").hasClass("subscriptions new") && ($('input[name="subscription[billing_period]"]').on("change", this.syncSubmitButton.bind(this)), this.syncSubmitButton())
    },
    syncSubmitButton: function() {
        var t = this.formElement.find('input[name="subscription[billing_period]"]:checked'),
            e = t.attr("data-period-value"),
            n = t.attr("data-dollar-value"),
            i = this.formElement.find(".devise-note");
        0 === i.length && (i = $('<div class="devise-note">').insertAfter(this.formElement.find(".actions"))), e && n ? i.html("You are starting a <strong>" + e + "</strong> subscription and will be charged <strong>$" + n + "</strong> today.") : i.remove()
    },
    onFormSubmit: function(t) {
        return this.formSubmitLoader.start(), Stripe.createToken(this.formElement, this.onStripeResponse), t.preventDefault(), !1
    },
    onStripeResponse: function(t, e) {
        if (e.error) SL.notify(e.error.message, "negative"), this.formSubmitLoader.stop();
        else {
            var n = e.id;
            this.formElement.find('input[name="subscription[token]"]').remove(), this.formElement.append($('<input type="hidden" name="subscription[token]" />').val(n)), this.formElement.get(0).submit()
        }
    }
}), SL("views.subscriptions").Show = SL.views.Base.extend({
    DOTTED_CARD_PREFIX: "&bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; ",
    init: function() {
        this._super(), this.strings = {
            CONFIRM_UNSUBSCRIBE_ACTION: "Unsubscribe",
            CONFIRM_UNSUBSCRIBE_DESCRIPTION: SL.locale.get("REMOVE_PRO_CONFIRM")
        }, this.load()
    },
    bindLadda: function() {
        $(".column section .ladda-button").each(function(t, e) {
            e = $(e), e.data("ladda") || e.data("ladda", Ladda.create(e.get(0)))
        })
    },
    load: function() {
        $.ajax({
            url: SL.config.AJAX_SUBSCRIPTIONS_STATUS,
            type: "GET",
            context: this
        }).done(this.onDataLoaded).fail(this.onDataFailed)
    },
    onDataLoaded: function(t) {
        this.data = new SL.models.Customer(t.customer), this.render()
    },
    onDataFailed: function() {
        $(".billing-loader").text(SL.locale.get("BILLING_DETAILS_ERROR"))
    },
    render: function() {
        $(".billing-loader").remove(), this.renderDetails(), this.renderHistory(), (!SL.current_user.isEnterprise() || SL.current_user.billing_address) && this.renderAddress(), this.bindLadda()
    },
    renderDetails: function() {
        var t = $('<section class="billing-details"><h2>Billing details</h2></section>').appendTo(".billing-wrapper"),
            e = this.data.hasActiveSubscription();
        if (e) {
            if (t.append('<div class="field status"><span class="label">Status</span><span class="value">Active</span></div>'), this.data.has("active_card") && t.append('<div class="field card"><span class="label">Card</span><span class="value">' + this.DOTTED_CARD_PREFIX + this.data.get("active_card.last4") + "</span></div>"), this.data.has("subscription")) {
                var n = moment.unix(this.data.getNextInvoiceDate()).format("MMMM Do, YYYY"),
                    i = "$" + this.data.getNextInvoiceSum();
                t.append('<div class="field payment-cycle"><span class="label">Next invoice</span><span class="value">' + i + " on " + n + "</span></div>")
            }
            t.append('<footer class="actions"><a class="button s outline" href="' + SL.routes.SUBSCRIPTIONS_EDIT_CARD + '">Change credit card</a><button class="button s negative outline cancel-subscription ladda-button" data-style="expand-right" data-spinner-color="#222">' + this.strings.CONFIRM_UNSUBSCRIBE_ACTION + "</button></footer>"), this.data.get("can_change_period") && t.find(".actions").prepend('<a class="button s outline" href="' + SL.routes.SUBSCRIPTIONS_EDIT_PERIOD + '">Change billing period</a>')
        } else {
            var s = "No active subscription";
            this.data.get("subscription") && (s = "Pro until " + moment.unix(this.data.get("subscription.current_period_end")).format("MMM Do, YYYY")), t.append('<div class="field status"><span class="label">Status</span><span class="value">' + s + "</span></div>"), t.append('<footer class="actions"><a class="button s outline positive" href="' + SL.routes.SUBSCRIPTIONS_NEW + '">Return to Pro</a></footer>')
        }
        this.cancelButton = $(".billing-details .cancel-subscription"), this.cancelButton.length && (this.cancelButton.on("click", this.onCancelSubscriptionClicked.bind(this)), this.cancelLoader = Ladda.create(this.cancelButton.get(0)))
    },
    renderHistory: function() {
        var t = $(['<section class="billing-history">', "<h2>Receipts</h2>", '<table class="sl-table"></table>', "</section>"].join("")).appendTo(".billing-wrapper"),
            e = t.find("table");
        if (this.data.get("can_toggle_notifications") === !0) {
            t.append(['<div class="sl-checkbox outline">', '<input type="checkbox" id="receipt-notifications">', '<label for="receipt-notifications">Send receipts via email when I\'m charged</label>', "</div>"].join(""));
            var n = t.find("#receipt-notifications");
            n.on("change", this.onEmailNotificationChanged.bind(this)), SL.current_user.notify_on_receipt && n.prop("checked", !0)
        }
        e.html(["<tr>", '<th class="amount">Amount</th>', '<th class="date">Date</th>', '<th class="card">Card</th>', '<th class="download">PDF</th>', "</tr>"].join(""));
        var i = this.data.get("charges");
        i && i.length ? i.forEach(function(t) {
            if (t.paid) {
                var n = $(['<tr data-charge-id="' + t.id + '">', '<td class="amount">$' + (t.amount / 100).toFixed(2) + "</td>", '<td class="date">' + moment.unix(t.created).format("DD-MM-YYYY") + "</td>", '<td class="card">' + this.DOTTED_CARD_PREFIX + t.card.last4 + "</td>", '<td class="download">', '<form action="' + SL.config.AJAX_SUBSCRIPTIONS_PRINT_RECEIPT(t.id) + '" method="post">', '<button type="submit" class="button outline ladda-button download-button" data-style="slide-right" data-spinner-color="#222">', '<span class="icon i-download"></span>', "</button>", "</form>", "</td>", "</tr>"].join(""));
                n.appendTo(e), SL.util.dom.insertCSRF(n.find(".download form"))
            }
        }.bind(this)) : e.replaceWith("<p>" + SL.locale.get("BILLING_DETAILS_NOHISTORY") + "</p>")
    },
    renderAddress: function() {
        var t = $(['<section class="billing-address">', "<h2>Billing address</h2>", '<div class="sl-form">', '<div class="unit">', '<p class="unit-description">If you wish to include a billing address on your receipts please enter it below.</p>', '<textarea class="billing-address-input" rows="4" maxlength="100">', SL.current_user.billing_address || "", "</textarea>", "</div>", '<div class="footer">', '<button class="button l positive billing-address-save">Save</button>', "</div>", "</div>", "</section>"].join("")).appendTo(".billing-wrapper");
        this.addressInputField = t.find(".billing-address-input"), this.addressSaveButton = t.find(".billing-address-save"), this.addressInputField.on("change keyup mouseup", this.checkAddress.bind(this)), this.addressSaveButton.on("click", this.saveAddress.bind(this)), this.checkAddress()
    },
    checkAddress: function() {
        this.addressInputField.val() === (SL.current_user.billing_address || "") ? this.addressSaveButton.hide() : this.addressSaveButton.show()
    },
    saveAddress: function() {
        this.billingAddressXHR && this.billingAddressXHR.abort();
        var t = this.addressInputField.val() || "";
        this.billingAddressXHR = $.ajax({
            url: SL.config.AJAX_UPDATE_USER,
            type: "PUT",
            context: this,
            data: {
                user: {
                    billing_address: t
                }
            }
        }).done(function() {
            SL.current_user.billing_address = t, SL.notify("Billing address saved")
        }).fail(function() {
            SL.notify(SL.locale.get("GENERIC_ERROR"), "negative")
        }).always(function() {
            this.billingAddressXHR = null, this.checkAddress()
        })
    },
    onCancelSubscriptionClicked: function(t) {
        SL.prompt({
            anchor: $(t.currentTarget),
            title: this.strings.CONFIRM_UNSUBSCRIBE_DESCRIPTION,
            type: "select",
            data: [{
                html: "<h3>Cancel</h3>"
            }, {
                html: "<h3>Confirm</h3>",
                selected: !0,
                className: "negative",
                callback: function() {
                    this.cancelLoader.start(), $.ajax({
                        url: SL.config.AJAX_SUBSCRIPTIONS,
                        type: "DELETE",
                        context: this
                    }).done(this.onCancelSubscriptionSuccess).fail(this.onCancelSubscriptionError)
                }.bind(this)
            }]
        })
    },
    onCancelSubscriptionSuccess: function() {
        SL.notify(SL.locale.get("REMOVE_PRO_SUCCESS")), window.location.reload()
    },
    onCancelSubscriptionError: function() {
        SL.notify(SL.locale.get("GENERIC_ERROR")), this.cancelLoader.stop()
    },
    onEmailNotificationChanged: function(t) {
        this.emailNotificationXHR && this.emailNotificationXHR.abort();
        var e = $(t.currentTarget).is(":checked");
        this.emailNotificationXHR = $.ajax({
            url: SL.config.AJAX_UPDATE_USER,
            type: "PUT",
            context: this,
            data: {
                user: {
                    notify_on_receipt: e
                }
            }
        }).done(function() {
            e === !0 && SL.notify("All future receipts will be emailed to you")
        }).fail(function() {
            SL.notify(SL.locale.get("GENERIC_ERROR"), "negative")
        }).always(function() {
            this.emailNotificationXHR = null
        })
    }
}), SL("views.teams").New = SL.views.Base.extend({
    init: function() {
        this._super(), this.formElement = $("#payment-form"), this.formSubmitButton = this.formElement.find("button[type=submit]"), this.formSubmitLoader = Ladda.create(this.formSubmitButton.get(0)), this.bind(), this.summarize()
    },
    bind: function() {
        this.summarize = this.summarize.bind(this), this.formElement.on("keydown", this.onFormKeyDown.bind(this)), this.formSubmitButton.on("click", this.onFormSubmitClicked.bind(this)), this.formElement.find("#team-name").on("input", this.onTeamNameChange.bind(this)), this.formElement.find('input[name="billing-period"]').on("change", this.summarize), $("#stripe-card-number").payment("formatCardNumber"), $("#stripe-card-cvc").payment("formatCardCVC"), $("#stripe-month").payment("restrictNumeric"), $("#stripe-year").payment("restrictNumeric"), this.formElement.find(".unit[data-validate], .unit[data-required]").each(function(t, e) {
            $(e).data("unit", new SL.components.FormUnit(e))
        })
    },
    summarize: function() {
        var t = this.formElement.find(".purchase-summary"),
            e = t.find(".message"),
            n = "monthly" === this.formElement.find('input[name="billing-period"]:checked').val(),
            i = {
                period: n ? "month" : "year",
                cost: "$" + (n ? 14 : 140)
            };
        e.html(SL.current_user && SL.current_user.isPro() ? ["Your account will be upgraded to the Team plan. The upgraded subscription will renew at the same interval as your current Pro subscription.", "<br><br>Unused time on your existing plan will be applied towards the upgrade."].join("") : ["You are starting a <strong>30 day free trial</strong>. If you cancel anytime in that period you will not be charged at all.", "<br><br>After the trial you will begin paying <strong>" + i.cost + " per " + i.period + "</strong> for each team member."].join(""))
    },
    validate: function() {
        var t = !0;
        return this.formElement.find(".unit[data-validate], .unit[data-required]").each(function(e, n) {
            var i = $(n).data("unit");
            i.validate(!0) === !1 && (t && i.focus(), t = !1)
        }), t
    },
    captureData: function() {
        this.formData = {
            team: {
                name: this.formElement.find("#team-name").val(),
                slug: this.formElement.find("#team-slug").val()
            },
            user: {
                username: this.formElement.find("#user-name").val(),
                email: this.formElement.find("#user-email").val(),
                password: this.formElement.find("#user-password").val()
            },
            subscription: {
                billing_period: this.formElement.find('input[name="billing-period"]:checked').val()
            }
        }
    },
    submitToStripe: function() {
        this.validate() && (this.captureData(), this.formSubmitLoader.start(), SL.current_user && SL.current_user.isPro() && 0 === $("#stripe-card-number").length ? this.submitToApp() : Stripe.createToken(this.formElement, this.onStripeResponse.bind(this)))
    },
    submitToApp: function(t) {
        t && (this.formData.subscription.token = t), $.ajax({
            type: "POST",
            url: SL.config.AJAX_TEAMS_CREATE,
            data: JSON.stringify(this.formData),
            dataType: "json",
            context: this,
            contentType: "application/json"
        }).done(function(t) {
            window.location = t.team && "string" == typeof t.team.root_url ? window.location.protocol + "//" + t.team.root_url : window.location.protocol + "//" + this.formData.team.slug + "." + window.location.host
        }).fail(function(t) {
            var e = JSON.parse(t.responseText);
            e && e.user && e.user.email && e.user.email.length ? SL.notify("Email error: " + e.user.email[0], "negative") : SL.notify(SL.locale.get("GENERIC_ERROR"), "negative"), this.formSubmitLoader.stop()
        })
    },
    onStripeResponse: function(t, e) {
        e.error ? (SL.notify(e.error.message, "negative"), this.formSubmitLoader.stop()) : this.submitToApp(e.id)
    },
    onFormKeyDown: function(t) {
        return 13 === t.keyCode ? (this.submitToStripe(), t.preventDefault(), !1) : void 0
    },
    onFormSubmitClicked: function(t) {
        return this.submitToStripe(), t.preventDefault(), !1
    },
    onTeamNameChange: function() {
        var t = this.formElement.find("#team-name"),
            e = this.formElement.find("#team-slug");
        e.val(SL.util.string.slug(t.val()));
        var n = e.data("unit");
        n && n.validate()
    }
}), SL("views.teams.subscriptions").Show = SL.views.subscriptions.Show.extend({
    init: function() {
        this._super()
    },
    render: function() {
        this.data.isTrial() ? (this.strings.CONFIRM_UNSUBSCRIBE_ACTION = "Delete my team", this.strings.CONFIRM_UNSUBSCRIBE_DESCRIPTION = "Your trial will be canceled immediately and this team will no longer be accessible.") : (this.strings.CONFIRM_UNSUBSCRIBE_ACTION = "End subscription", this.strings.CONFIRM_UNSUBSCRIBE_DESCRIPTION = "Your subscription will be terminated and this team will be inaccessible after the end of the current billing cycle."), this._super()
    },
    renderDetails: function() {
        var t = $('<section class="billing-details"><h2>Billing details</h2></section>').appendTo(".billing-wrapper"),
            e = this.data.hasActiveSubscription(),
            n = this.data.isTrial();
        if (e) {
            if (t.append(n ? '<div class="field status"><span class="label">Status</span><span class="value">Trial</span></div>' : '<div class="field status"><span class="label">Status</span><span class="value">Active</span></div>'), SL.current_team.has("user_count") && t.append('<div class="field active-users"><span class="label" data-tooltip="The current number of users that you have invited to the team." data-tooltip-maxwidth="260">Team members</span><span class="value">' + SL.current_team.get("user_count") + "</span></div>"), this.data.has("subscription.period") && t.append('<div class="field period"><span class="label">Billing period</span><span class="value">' + ("year" === this.data.get("subscription.period") ? "Yearly" : "Monthly") + "</span></div>"), this.data.has("active_card") && t.append('<div class="field card"><span class="label">Card</span><span class="value">' + this.DOTTED_CARD_PREFIX + this.data.get("active_card.last4") + "</span></div>"), this.data.has("subscription")) {
                var i = moment.unix(this.data.getNextInvoiceDate()).format("MMMM Do, YYYY"),
                    s = n ? "First invoice" : "Next invoice",
                    o = "$" + this.data.getNextInvoiceSum();
                t.append('<div class="field payment-cycle"><span class="label">' + s + '</span><span class="value">' + o + " on " + i + "</span></div>")
            }
            t.append('<footer class="actions"><a class="button s outline" href="' + SL.routes.SUBSCRIPTIONS_EDIT_CARD + '">Change credit card</a><button class="button s negative outline cancel-subscription ladda-button" data-style="expand-right" data-spinner-color="#222">' + this.strings.CONFIRM_UNSUBSCRIBE_ACTION + "</button></footer>"), this.data.get("can_change_period") && t.find(".actions").prepend('<a class="button s outline" href="' + SL.routes.SUBSCRIPTIONS_EDIT_PERIOD + '">Change billing period</a>')
        } else {
            var a = moment.unix(this.data.get("subscription.current_period_end")).format("MMM Do, YYYY");
            t.append('<div class="field status"><span class="label">Status</span><span class="value">Canceled, available until ' + a + "</span></div>")
        }
        this.cancelButton = $(".billing-details .cancel-subscription"), this.cancelButton.length && (this.cancelButton.on("click", this.onCancelSubscriptionClicked.bind(this)), this.cancelLoader = Ladda.create(this.cancelButton.get(0)))
    },
    onCancelSubscriptionSuccess: function() {
        SL.notify("Subscription canceled"), window.location = "http://slides.com"
    }
}), SL("views.teams.teams").Edit = SL.views.Base.extend({
    init: function() {
        this._super(), this.render()
    },
    render: function() {
        if (this.formElement = $("form"), this.formElement.length) {
            this.formElement.find(".unit[data-factory]").each(function(t, e) {
                var n = null;
                $(e).attr("data-factory").split(".").forEach(function(t) {
                    n = n ? n[t] : window[t]
                }), "function" == typeof n && new n(e)
            }), this.formElement.find(".unit[data-validate]:not([data-factory])").each(function(t, e) {
                new SL.components.FormUnit(e)
            });
            var t = this.formElement.find("button[type=submit]");
            if (t.length) {
                var e = Ladda.create(t.get(0));
                this.formElement.on("submit", function(t) {
                    t.isDefaultPrevented() || e.start()
                }.bind(this))
            }
        }
    }
}), SL("views.teams.teams").EditMembers = SL.views.Base.extend({
    init: function() {
        this._super(), this.domElement = $("section.users"), this.load()
    },
    bindLadda: function() {
        $(".column section .ladda-button").each(function(t, e) {
            e = $(e), e.data("ladda") || e.data("ladda", Ladda.create(e.get(0)))
        })
    },
    load: function() {
        $.ajax({
            type: "GET",
            url: SL.config.AJAX_ORGANIZATION_MEMBERS_LIST,
            context: this
        }).done(function(t) {
            this.userData = new SL.collections.Collection, this.userLimit = t.max, t.results.forEach(function(t) {
                this.userData.push(new SL.models.User(t))
            }.bind(this))
        }).fail(function() {
            SL.notify(SL.locale.get("ORG_USERS_LIST_LOAD_ERROR"), "negative")
        }).always(this.render)
    },
    render: function() {
        var t = this.domElement.find(".contents");
        t.empty(), this.renderTable(t), this.renderInviteForm(t), this.syncInviteForm()
    },
    renderTable: function(t) {
        if (this.userData.isEmpty()) t.html('<p class="empty-notice">' + SL.locale.get("ORG_USERS_LIST_EMPTY") + "</p>");
        else {
            var e = $('<table class="sl-table">').appendTo(t);
            e.append('<tr><th class="name">User</th><th class="email">Email</th><th class="actions"></th></tr>'), this.userData.forEach(this.renderUser.bind(this))
        }
    },
    renderInviteForm: function(t) {
        var e = $('<form class="create-user-form"><h4>Add a user to this team</h4><div class="unit text" data-validate="email" data-required><input type="text" placeholder="Email" name="email" size="35"></div><div class="unit text" data-validate="username" data-required><input type="text" placeholder="Username" name="username"></div><button type="submit" class="button positive l ladda-button create-user" data-style="zoom-out">Add</button></form>').appendTo(t),
            n = e.find("[name=email]"),
            i = e.find("[name=username]");
        e.find(".unit[data-validate]").each(function(t, e) {
            new SL.components.FormUnit(e)
        }), e.on("submit", function(t) {
            return this.createUser(), t.preventDefault(), !1
        }.bind(this)), n.on("blur", function() {
            var t = n.val(),
                e = i.val();
            e || 0 !== SL.util.validate.email(t).length || i.val(SL.util.string.slug(t.slice(0, t.indexOf("@"))))
        }.bind(this)), this.bindLadda()
    },
    renderUser: function(t) {
        var e = $("<tr>"),
            n = '<div class="avatar" style="background-image: url(' + t.thumbnail_url + ')"></div>';
        if (e.append('<td><a href="/' + t.username + '" target="_blank">' + n + t.username + "</a>" + (t.name ? " (" + t.name + ")" : "") + "</td>"), e.append("<td>" + t.email + "</td>"), SL.current_user.username && SL.current_user.username !== t.username) {
            var i = $("<td>");
            i.append('<button class="button outline ladda-button remove-user" data-style="zoom-out" data-spinner-color="#222" data-tooltip="Remove ' + t.username + ' from the team"><span class="i-trash-stroke"></span></button>'), t.registered || (i.append('<button class="button outline ladda-button welcome-user" data-style="zoom-out" data-spinner-color="#222" data-tooltip="Re-send invite email"><span class="i-mail"></span></button>'), e.addClass("disabled")), e.append(i), e.find(".welcome-user").on("click", function(n) {
                this.welcomeUser(n, t, e)
            }.bind(this)), e.find(".remove-user").on("click", function(n) {
                this.removeUser(n, t, e)
            }.bind(this))
        } else e.append("<td></td>");
        e.appendTo(this.domElement.find("table")), this.bindLadda()
    },
    syncInviteForm: function() {
        $(".team-is-full-notice").remove(), this.isTeamFull() && $(".create-user-form").append('<div class="team-is-full-notice"><h4>This team is full</h4><p>To add new members please <a href="mailto:support@slides.com" data-feedback-mode="contact" data-feedback-screenshot_enabled="false">contact support</a>.</p></div>')
    },
    createUser: function() {
        if (this.isTeamFull()) return SL.notify("Your team is full, please contact support"), !1;
        var t = $(".create-user-form"),
            e = t.find("button.create-user").data("ladda");
        e && e.start(), $.ajax({
            type: "POST",
            url: SL.config.AJAX_ORGANIZATION_MEMBER_CREATE,
            data: {
                user: {
                    email: t.find("[name=email]").val(),
                    username: t.find("[name=username]").val()
                }
            },
            dataType: "json",
            context: this
        }).done(function(n) {
            var i = new SL.models.User(n);
            this.userData.isEmpty() ? (this.userData.push(i), this.render()) : (this.userData.push(i), this.renderUser(i)), t.find("[name=email]").val(""), t.find("[name=username]").val(""), this.syncInviteForm(), e && e.stop(), SL.notify(SL.locale.get("ORG_USERS_INVITE_SEND_SUCCESS"))
        }).fail(function(t) {
            t = $.parseJSON(t.responseText) || {}, e && e.stop(), "object" == typeof t.email && t.email.length ? SL.notify("Email error: " + t.email[0], "negative") : "object" == typeof t.username && t.username.length ? SL.notify("Username error: " + t.username[0], "negative") : SL.notify("Failed to add user", "negative")
        })
    },
    removeUser: function(t, e, n) {
        SL.prompt({
            anchor: $(t.currentTarget),
            title: SL.locale.get("ORG_USERS_REMOVE_CONFIRM", {
                name: e.name || e.username
            }),
            type: "select",
            data: [{
                html: "<h3>Cancel</h3>"
            }, {
                html: "<h3>Delete</h3>",
                selected: !0,
                className: "negative",
                callback: function() {
                    var t = n.find(".remove-user").data("ladda");
                    t && t.start(), $.ajax({
                        type: "DELETE",
                        url: SL.config.AJAX_ORGANIZATION_MEMBER_DELETE(e.id),
                        context: this
                    }).done(function() {
                        n.remove(), this.userData.removeByProperties({
                            id: e.id
                        }), this.syncInviteForm(), t && t.stop(), SL.notify(SL.locale.get("ORG_USERS_REMOVE_SUCCESS"))
                    }).fail(function() {
                        t && t.stop(), SL.notify(SL.locale.get("ORG_USERS_REMOVE_ERROR"), "negative")
                    })
                }.bind(this)
            }]
        })
    },
    welcomeUser: function(t, e, n) {
        var i = n.find(".welcome-user").data("ladda");
        i && i.start(), $.ajax({
            type: "POST",
            url: SL.config.AJAX_ORGANIZATION_MEMBER_WELCOME(e.id),
            context: this
        }).done(function() {
            i && i.stop(), SL.notify(SL.locale.get("ORG_USERS_INVITE_SEND_SUCCESS"))
        }).fail(function() {
            i && i.stop(), SL.notify(SL.locale.get("ORG_USERS_INVITE_SEND_ERROR"), "negative")
        })
    },
    isTeamFull: function() {
        return this.userLimit > 0 && this.userData.size() >= this.userLimit
    }
}), SL("views.teams.teams").Show = SL.views.Base.extend({
    init: function() {
        this._super(), new SL.components.Search({
            url: SL.config.AJAX_SEARCH_ORGANIZATION
        })
    }
}), SL("views.themes").Edit = SL.views.Base.extend({
    init: function() {
        this._super(), this.themeData = new SL.collections.Collection, this.listElement = $(".theme-list"), this.editorElement = $(".theme-editor"), this.editorInnerElement = $(".theme-editor-inner"), this.VERSION = parseInt($(".theme-editor").attr("data-editor-version"), 10), this.load(), this.bindLadda(), this.setupPreview(), $("body").on("click", ".create-theme-button", this.onCreateThemeClicked.bind(this)), $(window).on("beforeunload", this.onWindowBeforeUnload.bind(this))
    },
    bindLadda: function() {
        $(".page-wrapper .ladda-button").each(function(t, e) {
            e = $(e), e.data("ladda") || e.data("ladda", Ladda.create(e.get(0)))
        })
    },
    setupPreview: function() {
        this.previewFrame = $(".preview .preview-frame"), this.previewReloader = $(".preview .preview-reloader"), this.previewReloader.on("click", this.reloadPreview.bind(this)), window.addEventListener("message", function(t) {
            t.data && "theme-preview-ready" === t.data.type && this.refreshPreview()
        }.bind(this))
    },
    load: function() {
        SL.helpers.PageLoader.show({
            message: "Loading themes"
        }), $.ajax({
            type: "GET",
            url: SL.config.AJAX_THEMES_LIST,
            context: this
        }).done(function(t) {
            this.themeData.clear(), t.results.forEach(function(t) {
                this.themeData.push(new SL.models.Theme(t))
            }.bind(this))
        }).fail(function() {
            SL.notify(SL.locale.get("THEME_LIST_LOAD_ERROR"), "negative")
        }).always(function() {
            this.renderList(), SL.helpers.PageLoader.hide()
        })
    },
    renderList: function() {
        this.listElement.empty(), this.themeData.isEmpty() ? this.listElement.html('<p class="theme-list-empty">' + SL.locale.get("THEME_LIST_EMPTY") + "</p>") : (this.themeData.forEach(this.renderListItem.bind(this)), SL.view.parseTimes()), this.updateListDefault()
    },
    renderListItem: function(t, e) {
        e = $.extend({
            prepend: !1,
            showDelay: 0
        }, e);
        var n = this.listElement.find('[data-theme-id="' + t.get("id") + '"]');
        if (n.length ? n.find(".theme-list-item-title").text(t.get("name")).attr("title", t.get("name")) : (n = $(['<div class="theme-list-item" data-theme-id="' + t.get("id") + '">', '<div class="theme-list-item-thumbnail"></div>', '<h2 class="theme-list-item-title" title="' + t.get("name") + '">' + t.get("name") + "</h2>", '<div class="theme-list-item-metadata">', '<div class="theme-list-item-metadata-field">Created <time class="date" datetime="' + t.get("created_at") + '"></time></div>', '<div class="theme-list-item-metadata-field">Updated <time class="ago" datetime="' + t.get("updated_at") + '"></time></div>', "</div>", '<div class="theme-list-item-controls">', '<button class="button outline l delete" data-tooltip="' + SL.locale.get("THEME_DELETE_TOOLTIP") + '">', '<span class="icon i-trash-stroke"></span>', "</button>", '<button class="button outline l edit" data-tooltip="' + SL.locale.get("THEME_EDIT_TOOLTIP") + '">', '<span class="icon i-pen-alt2"></span>', "</button>", '<button class="button outline l default" data-tooltip="' + SL.locale.get("THEME_MAKE_DEFAULT_TOOLTIP") + '">', '<span class="icon i-checkmark"></span>', "</button>", "</div>", "</div>"].join("")), e.prepend === !0 ? n.prependTo(this.listElement) : n.appendTo(this.listElement), e.showDelay > 0 && (n.hide(), setTimeout(function() {
                n.show()
            }, e.showDelay))), t.hasThumbnail()) {
            var i = t.get("thumbnail_url");
            n.find(".theme-list-item-thumbnail").css("background-image", 'url("' + i + '")').attr("data-thumb-url", i)
        }
        return n.off("click").on("click", function(e) {
            $(e.target).closest(".theme-list-item-controls .delete").length ? this.removeTheme(t, null, $(e.target).closest(".theme-list-item-controls .delete")) : $(e.target).closest(".theme-list-item-controls .default").length ? n.hasClass("default") ? this.unmakeDefaultTheme() : this.makeDefaultTheme(t) : this.editTheme(t)
        }.bind(this)), n
    },
    refreshListItemThumb: function(t) {
        if (t && t.length) {
            var e = t.find(".theme-list-item-thumbnail"),
                n = e.attr("data-thumb-url");
            n && (n = n + "?" + Math.round(1e4 * Math.random()), e.css("background-image", 'url("' + n + '")'))
        }
    },
    updateListDefault: function() {
        this.listElement.find(".theme-list-item").each(function(t, e) {
            e = $(e), e.toggleClass("default", e.attr("data-theme-id") == SL.current_team.get("default_theme_id")), e.find(".theme-list-item-controls .default").attr("data-tooltip", SL.locale.get(e.hasClass("default") ? "THEME_IS_DEFAULT_TOOLTIP" : "THEME_MAKE_DEFAULT_TOOLTIP"))
        })
    },
    editTheme: function(t) {
        if (SL.fonts.loadAll(), this.panel) return this.panel.close(function() {
            this.editTheme(t)
        }.bind(this)), !1;
        $("html").addClass("is-editing-theme");
        var e = {};
        e = 1 === this.VERSION ? {
            colors: SL.config.V1.THEME_COLORS,
            fonts: SL.config.V1.THEME_FONTS,
            center: !0,
            rollingLinks: !0
        } : {
            colors: SL.config.THEME_COLORS,
            fonts: SL.config.THEME_FONTS,
            center: !1,
            rollingLinks: !1
        }, this.panel = new SL.views.themes.edit.Panel(this, t, e), this.panel.destroyed.add(function() {
            this.setSelectedListItem(null), $("html").removeClass("is-editing-theme"), this.panel = null
        }.bind(this)), this.setSelectedListItem(t), this.bindLadda()
    },
    createTheme: function() {
        $.ajax({
            type: "POST",
            url: SL.config.AJAX_THEMES_CREATE,
            data: {
                theme: {
                    font: SL.config.DEFAULT_THEME_FONT,
                    color: SL.config.DEFAULT_THEME_COLOR,
                    transition: SL.config.DEFAULT_THEME_TRANSITION,
                    background_transition: SL.config.DEFAULT_THEME_BACKGROUND_TRANSITION
                }
            },
            context: this
        }).done(function(t) {
            var e = new SL.models.Theme(t);
            this.themeData.isEmpty() ? (this.themeData.push(e), this.renderList(), this.makeDefaultTheme(e, null, !0)) : (this.themeData.push(e), this.renderListItem(e, {
                prepend: !0,
                showDelay: 3e3
            }), SL.view.parseTimes()), this.editTheme(e)
        }).fail(function() {
            SL.notify(SL.locale.get("THEME_CREATE_ERROR"), "negative")
        })
    },
    saveTheme: function(t, e, n) {
        $.ajax({
            type: "PUT",
            url: SL.config.AJAX_THEMES_UPDATE(t.get("id")),
            data: {
                theme: t.toJSON()
            },
            context: this
        }).done(function(t) {
            var n = this.renderListItem(new SL.models.Theme(t));
            SL.view.parseTimes(), t && t.sanitize_messages && t.sanitize_messages.length ? SL.notify(t.sanitize_messages[0], "negative") : SL.notify(SL.locale.get("THEME_SAVE_SUCCESS")), SL.util.callback(e), setTimeout(function() {
                this.refreshListItemThumb(n)
            }.bind(this), 2500), setTimeout(function() {
                this.refreshListItemThumb(n)
            }.bind(this), 5e3)
        }).fail(function() {
            SL.notify(SL.locale.get("THEME_SAVE_ERROR"), "negative"), SL.util.callback(n)
        })
    },
    removeTheme: function(t, e, n) {
        var i = this.getListItem(t);
        SL.prompt({
            anchor: n,
            title: SL.locale.get("THEME_REMOVE_CONFIRM"),
            type: "select",
            offsetX: 15,
            data: [{
                html: "<h3>Cancel</h3>"
            }, {
                html: "<h3>Delete</h3>",
                selected: !0,
                className: "negative",
                callback: function() {
                    var n = t.get("id");
                    $.ajax({
                        type: "DELETE",
                        url: SL.config.AJAX_THEMES_DELETE(n),
                        context: this
                    }).done(function() {
                        SL.util.anim.collapseListItem(i, function() {
                            i.remove()
                        }), SL.util.callback(e), this.themeData.removeByProperties({
                            id: n
                        }), this.panel && this.panel.getTheme().get("id") === n && this.panel.destroy(), SL.notify(SL.locale.get("THEME_REMOVE_SUCCESS"))
                    }).fail(function() {
                        SL.notify(SL.locale.get("THEME_REMOVE_ERROR"), "negative")
                    })
                }.bind(this)
            }]
        })
    },
    makeDefaultTheme: function(t, e, n) {
        $.ajax({
            type: "PUT",
            url: SL.config.AJAX_UPDATE_ORGANIZATION,
            data: {
                team: {
                    default_theme_id: t.get("id")
                }
            },
            context: this
        }).done(function() {
            SL.current_team.set("default_theme_id", t.get("id")), this.updateListDefault(), n || SL.notify(SL.locale.get("THEME_DEFAULT_SAVE_SUCCESS")), SL.util.callback(e)
        }).fail(function() {
            n || SL.notify(SL.locale.get("THEME_DEFAULT_SAVE_ERROR"), "negative")
        })
    },
    unmakeDefaultTheme: function(t, e) {
        $.ajax({
            type: "PUT",
            url: SL.config.AJAX_UPDATE_ORGANIZATION,
            data: {
                team: {
                    default_theme_id: null
                }
            },
            context: this
        }).done(function() {
            SL.current_team.set("default_theme_id", null), this.updateListDefault(), e || SL.notify(SL.locale.get("THEME_DEFAULT_SAVE_SUCCESS")), SL.util.callback(t)
        }).fail(function() {
            e || SL.notify(SL.locale.get("THEME_DEFAULT_SAVE_ERROR"), "negative")
        })
    },
    getListItem: function(t) {
        return this.listElement.find('[data-theme-id="' + (t ? t.get("id") : null) + '"]')
    },
    setSelectedListItem: function(t) {
        this.listElement.find(".theme-list-item").removeClass("selected");
        var e = this.getListItem(t);
        e.length && e.addClass("selected")
    },
    refreshPreview: function(t) {
        t = t || this.previewTheme;
        var e = this.getPreviewWindow();
        e && t && (e.SL && e.SL.helpers && e.SL.helpers.ThemeController.paint(t, {
            center: 1 === this.VERSION
        }), this.previewTheme = t)
    },
    reloadPreview: function() {
        var t = this.getPreviewWindow();
        t && t.location.reload()
    },
    getPreviewWindow: function() {
        return this.previewFrame.length ? this.previewFrame.get(0).contentWindow : null
    },
    onWindowBeforeUnload: function() {
        return this.panel && this.panel.hasUnsavedChanges() ? SL.locale.get("LEAVE_UNSAVED_THEME") : void 0
    },
    onCreateThemeClicked: function(t) {
        t.preventDefault(), this.createTheme()
    }
}), SL("views.themes.edit.pages").Palette = Class.extend({
    init: function(t, e) {
        this.editor = t, this.theme = e, this.changed = new signals.Signal, this.onDocumentMouseUp = this.onDocumentMouseUp.bind(this), this.onDocumentMouseMove = this.onDocumentMouseMove.bind(this), this.onSaveButtonClicked = this.onSaveButtonClicked.bind(this), this.onListItemDelete = this.onListItemDelete.bind(this), this.onListItemMouseDown = this.onListItemMouseDown.bind(this), this.render(), this.bind()
    },
    render: function() {
        this.domElement = $('<div class="page" data-page-id="palette">'), this.domElement.html(['<div class="page-header">', "<h4>Color Palette</h4>", '<p>Replace the default color options that we offer throughout the deck editor with your own custom color palette. <a class="documentation-link" href="#">More info</a></p>', '<div class="documentation">', "<p>A color picker component appears in multiple places inside of the deck editor, such as when setting text or slide background color. Inside of that color picker we display a preset color palette. If you define a custom color palette here anyone using this theme will see your custom palette instead of our defaults.</p>", "<h5>Reset</h5>", "<p>If no custom colors are added here we'll show our default palette. Colors can be deleted by clicking the trash icon that appears when hovering over them with your mouse pointer.</p>", "<h5>Rearrange</h5>", "<p>Drag and drop colors in your palette to change their order.</p>", "</div>", "</div>", '<div class="page-body">', '<div class="palette-picker">', '<div class="palette-picker-api"></div>', "</div>", '<ul class="palette-list"></ul>', "</div>"].join("")), this.innerElement = this.domElement.find(".page-body"), this.pickerElement = this.domElement.find(".palette-picker"), this.pickerAPIElement = this.domElement.find(".palette-picker-api"), this.listElement = this.domElement.find(".palette-list"), this.documentationLinkElement = this.domElement.find(".page-header .documentation-link"), this.documentationElement = this.domElement.find(".page-header .documentation"), this.documentationElement.hide(), this.renderPicker(), this.renderList(), this.checkIfEmpty()
    },
    renderPicker: function() {
        this.pickerAPIElement.spectrum({
            flat: !0,
            showInput: !0,
            showButtons: !1,
            showInitial: !1,
            showPalette: !1,
            showSelectionPalette: !1,
            preferredFormat: "hex",
            className: "palette-picker-spectrum",
            move: function(t) {
                this.setPreviewColor(t.toHexString())
            }.bind(this),
            change: function(t) {
                this.setPreviewColor(t.toHexString())
            }.bind(this)
        }), this.domElement.find(".palette-picker-spectrum .sp-input-container").append('<div class="palette-picker-save-button"><span class="icon i-plus"></span>Save color</div>'), this.pickerSaveButton = this.domElement.find(".palette-picker-save-button")
    },
    renderList: function() {
        this.listElement.empty(), this.theme.get("palette").forEach(this.renderListItem.bind(this))
    },
    renderListItem: function(t) {
        var e = $('<li class="palette-list-item sl-form">');
        return e.data("color", t), e.html(['<div class="palette-list-item-color"></div>', '<div class="palette-list-item-label">' + t + "</div>", '<div class="palette-list-item-delete"><span class="icon i-trash-stroke"></span></div>'].join("")), e.appendTo(this.listElement), e.toggleClass("is-light", tinycolor(t).isLight()), e.find(".palette-list-item-color").css("background-color", t), e.find(".palette-list-item-delete").on("click", this.onListItemDelete), e.on("mousedown", this.onListItemMouseDown), e
    },
    bind: function() {
        this.documentationLinkElement.on("click", this.onDocumentationLinkClicked.bind(this)), this.pickerSaveButton.on("click", this.onSaveButtonClicked.bind(this))
    },
    appendTo: function(t) {
        this.domElement.appendTo(t)
    },
    setPreviewColor: function(t) {
        this.pickerSaveButton.css({
            color: tinycolor(t).isLight() ? "#222222" : "#ffffff",
            backgroundColor: t
        })
    },
    checkIfEmpty: function() {
        0 === this.listElement.find(".palette-list-item").length ? this.listElement.append('<span class="palette-list-empty">No custom colors have been added to the palette. Click "Save color" to add one now.</span>') : this.listElement.find(".palette-list-empty").remove()
    },
    refresh: function() {
        this.pickerAPIElement.spectrum("set", "#000000"), this.pickerAPIElement.spectrum("reflow"), this.setPreviewColor("#000000")
    },
    persist: function() {
        var t = this.listElement.find(".palette-list-item:not(.element)").map(function() {
            return $(this).data("color")
        }).toArray();
        this.theme.set("palette", t), this.checkIfEmpty(), this.changed.dispatch()
    },
    destroy: function() {
        this.changed.dispose(), this.listElement.find(".palette-list-item").off(), this.editor = null, this.theme = null
    },
    onDocumentationLinkClicked: function(t) {
        t.preventDefault(), this.documentationElement.toggle(), this.documentationLinkElement.text(this.documentationElement.is(":visible") ? "Less info" : "More info")
    },
    onSaveButtonClicked: function() {
        var t = this.renderListItem(this.pickerAPIElement.spectrum("get"));
        this.listElement.prepend(t), this.persist()
    },
    onListItemDelete: function(t) {
        var e = $(t.target).closest(".palette-list-item");
        e.length ? (e.remove(), this.persist()) : SL.notify("An error occured while deleting this color")
    },
    onListItemMouseDown: function(t) {
        var e = $(t.currentTarget);
        e.length && e.is(".palette-list-item") && 0 === $(t.target).closest(".palette-list-item-delete").length && (this.dragTarget = e, this.dragGhost = e.clone().appendTo(this.listElement), this.dragGhost.addClass("drag-ghost"), this.dragTarget.addClass("drag-target"), this.dragOffsetX = t.clientX - this.dragTarget.offset().left, this.dragOffsetY = t.clientY - this.dragTarget.offset().top, this.listOffsetX = this.listElement.offset().left, this.listOffsetY = this.listElement.offset().top, this.listWidth = this.listElement.width(), this.listHeight = this.listElement.height(), this.listItemSize = this.dragTarget.outerHeight(), this.listItemCols = Math.floor(this.listWidth / this.listItemSize), $(document).on("mousemove", this.onDocumentMouseMove), $(document).on("mouseup", this.onDocumentMouseUp), this.onDocumentMouseMove(t))
    },
    onDocumentMouseMove: function(t) {
        t.preventDefault();
        var e = this.listElement.find(".palette-list-item"),
            n = t.clientX - this.listOffsetX - this.dragOffsetX,
            i = t.clientY - this.listOffsetY - this.dragOffsetY;
        n = Math.max(Math.min(n, this.listWidth - this.listItemSize), 0), i = Math.max(Math.min(i, this.listHeight - this.listItemSize), 0), this.dragGhost.css({
            left: n,
            top: i
        });
        var s = Math.round(n / this.listItemSize),
            o = Math.round(i / this.listItemSize);
        s = Math.max(Math.min(s, this.listItemCols), 0), o = Math.max(Math.min(o, e.length), 0);
        var a = o * this.listItemCols + s,
            r = $(e[a]);
        r.is(this.dragTarget) || (this.dragTarget.index() > a ? r.before(this.dragTarget) : r.after(this.dragTarget))
    },
    onDocumentMouseUp: function() {
        this.dragTarget.removeClass("drag-target"), this.dragGhost.remove(), $(document).off("mousemove", this.onDocumentMouseMove), $(document).off("mouseup", this.onDocumentMouseUp), this.persist()
    }
}), SL("views.themes.edit.pages").Snippets = Class.extend({
    init: function(t, e) {
        this.editor = t, this.theme = e, this.changed = new signals.Signal, this.render(), this.bind(), this.syncMoveButtons()
    },
    render: function() {
        this.domElement = $('<div class="page" data-page-id="snippets">'), this.domElement.html(['<div class="page-header">', "<h4>Snippets</h4>", '<p>Snippets are small HTML templates that your team members can use as building blocks when creating decks. These templates can contain placeholder variables that are filled out at the time of insertion. <a class="documentation-link" href="#">More info</a></p>', '<div class="documentation">', "<p>Each snippet consist of two values; title and template. The title is what we'll show your teammates so try to keep it descriptive. The template is where you enter your custom HTML.</p>", "<h5>Variables</h5>", "<p>If you add placeholder variables inside of your templates the user will be prompted to fill them out. The syntax for variables is as follows:</p>", "<pre><code>{{Label Value}}</code></pre>", "<p>The string between the opening and closing brackets is considered the variable name. This name is shown when the snippet is inserted so that the author knows what value you're expecting.</p>", "<p>It's possible to define default values for variables. To do so you'll need to delimit your variable name and default value by two colon characters as shown below.</p>", "<pre><code>{{Label Value::Default value}}</code></pre>", "<h5>Example</h5>", "<p>Here's a basic example template that shows how you could create a snippet for images with captions.</p>", "<pre><code>", '&lt;div class="image-with-caption"&gt;\n', '  &lt;img src="{{Image URL}}"&gt;\n', "  &lt;p&gt;{{Caption::Untitled}}&lt;/p&gt;\n", "&lt;/div&gt;", "</code></pre>", "</div>", "</div>", '<div class="page-body">', '<ul class="snippet-list"></ul>', '<ul class="snippet-controls snippet-list-item sl-form">', '<div class="add-button-wrapper">', '<button class="button l add-button">Add Snippet <span class="icon i-plus"></span></button>', "</div>", '<div class="unit text">', "<label>Title</label>", '<input class="title-value" maxlength="200" type="text" readonly>', "</div>", '<div class="unit text">', "<label>Template</label>", '<textarea class="template-value" rows="4" readonly></textarea>', "</div>", "</ul>", "</div>"].join("")), this.innerElement = this.domElement.find(".page-body"), this.listElement = this.domElement.find(".snippet-list"), this.controlsElement = this.domElement.find(".snippet-controls"), this.addButton = this.domElement.find(".snippet-controls .add-button-wrapper"), this.documentationLinkElement = this.domElement.find(".page-header .documentation-link"), this.documentationElement = this.domElement.find(".page-header .documentation"), this.documentationElement.hide(), this.renderList()
    },
    renderList: function() {
        this.listElement.empty(), this.theme.get("snippets").forEach(this.renderListItem.bind(this))
    },
    renderListItem: function(t) {
        var e = $('<li class="snippet-list-item sl-form">');
        return e.html(['<div class="unit text">', "<label>Title</label>", '<input class="title-value" maxlength="200" value="' + t.get("title") + '" type="text" spellcheck="false">', "</div>", '<div class="unit text">', "<label>Template</label>", '<textarea class="template-value" rows="4" spellcheck="false">' + t.get("template") + "</textarea>", '<div class="status" data-tooltip="" data-tooltip-maxwidth="400" data-tooltip-align="left"><span class="icon i-info"></span></div>', "</div>", '<div class="snippet-list-item-footer">', '<button class="button outline delete-button" data-tooltip="Delete" data-tooltip-delay="1000"><snap class="icon i-trash-stroke"></snap></button>', '<button class="button outline preview-button" data-tooltip="Preview" data-tooltip-delay="1000"><snap class="icon i-eye"></snap></button>', '<button class="button outline move-up-button" data-tooltip="Move Up" data-tooltip-delay="1000"><snap class="icon i-arrow-up"></snap></button>', '<button class="button outline move-down-button" data-tooltip="Move Down" data-tooltip-delay="1000"><snap class="icon i-arrow-down"></snap></button>', "</div>"].join("")), e.appendTo(this.listElement), e.data("model", t), e.find("input, textarea").on("input", this.onSnippetChange.bind(this)), e.find("input, textarea").on("focus", this.onSnippetFocused.bind(this)), e.find(".delete-button").on("click", this.onSnippetDelete.bind(this)), e.find(".preview-button").on("click", this.onSnippetFocused.bind(this)), e.find(".move-up-button").on("click", this.onSnippetMoveUp.bind(this)), e.find(".move-down-button").on("click", this.onSnippetMoveDown.bind(this)), this.validateSnippet(e), e
    },
    bind: function() {
        this.addButton.on("click", this.addSnippet.bind(this)), this.documentationLinkElement.on("click", this.onDocumentationLinkClicked.bind(this))
    },
    appendTo: function(t) {
        this.domElement.appendTo(t), this.listElement.find(".snippet-list-item").each(function(t, e) {
            this.layoutSnippet($(e))
        }.bind(this))
    },
    addSnippet: function() {
        var t = this.theme.get("snippets").create(),
            e = this.renderListItem(t);
        e.data("model", t), e.find("input").first().focus(), setTimeout(function() {
            var t = this.domElement.prop("scrollHeight");
            t -= this.domElement.outerHeight(!0), t -= this.controlsElement.outerHeight(!0), this.domElement.scrollTop(t)
        }.bind(this), 1), this.changed.dispatch(), this.syncMoveButtons()
    },
    layoutSnippet: function(t) {
        var e = t.find(".template-value");
        e.attr("rows", 4);
        var n = parseFloat(e.css("line-height")),
            i = e.prop("scrollHeight"),
            s = e.prop("clientHeight");
        i > s && e.attr("rows", Math.min(Math.ceil(i / n), 10))
    },
    validateSnippet: function(t) {
        var e = t.data("model"),
            n = [],
            i = [],
            s = e.templateHasVariables(),
            o = e.templateHasSelection();
        if (s && o) i.push("Templates can not mix variables and selection tags.");
        else if (s) {
            var a = e.getTemplateVariables();
            n.push("Found " + a.length + " variables:"), a.forEach(function(t) {
                n.push(t.defaultValue ? "- " + t.label + " (default: " + t.defaultValue + ")" : "- " + t.label)
            })
        }
        i.length ? t.find(".status").addClass("negative").show().attr("data-tooltip", i.join("<br>")) : n.length ? t.find(".status").removeClass("negative").show().attr("data-tooltip", n.join("<br>")) : t.find(".status").removeClass("negative").hide()
    },
    previewSnippet: function(t) {
        var e = this.editor.getPreviewWindow(),
            n = e.$("#snippet-slide");
        0 === n.length && (n = $('<section id="snippet-slide">').appendTo(e.$(".reveal .slides"))), n.html(['<div class="sl-block" data-block-type="html" style="width: 100%; left: 0; top: 0; height: auto;">', '<div class="sl-block-content">', t.templatize(t.getTemplateVariables()), "</div>", "</div>"].join("")), e.SL.util.skipCSSTransitions(), e.Reveal.sync(), e.Reveal.slide(n.index())
    },
    syncSnippetOrder: function() {
        var t = this.listElement.find(".snippet-list-item"),
            e = this.theme.get("snippets");
        t.sort(function(t, n) {
            var i = e.find($(t).data("model")),
                s = e.find($(n).data("model"));
            return i - s
        }.bind(this)), t.each(function(t, e) {
            this.listElement.append(e)
        }.bind(this)), this.syncMoveButtons()
    },
    syncMoveButtons: function() {
        this.listElement.find(".snippet-list-item").each(function(t, e) {
            e = $(e), e.find(".move-up-button").toggleClass("disabled", e.is(":first-child")), e.find(".move-down-button").toggleClass("disabled", e.is(":last-child"))
        })
    },
    destroy: function() {
        this.changed.dispose(), this.listElement.find(".snippet-list-item").off().removeData("model");
        var t = this.editor.getPreviewWindow();
        t.$("#snippet-slide").remove(), t.Reveal.sync(), t.Reveal.slide(0), this.editor = null, this.theme = null
    },
    onDocumentationLinkClicked: function(t) {
        t.preventDefault(), this.documentationElement.toggle(), this.documentationLinkElement.text(this.documentationElement.is(":visible") ? "Less info" : "More info")
    },
    onSnippetFocused: function(t) {
        var e = $(t.target).closest(".snippet-list-item");
        e.length && this.previewSnippet(e.data("model"))
    },
    onSnippetChange: function(t) {
        var e = $(t.target).closest(".snippet-list-item");
        if (e.length) {
            var n = e.find(".title-value").val(),
                i = e.find(".template-value").val(),
                s = SL.util.html.findScriptTags(i);
            if (s.length > 0) return SL.notify("Scripts are not allowed. Please remove all script tags for this snippet to save.", "negative"), !1;
            var o = e.data("model");
            o.set("title", n), o.set("template", i), this.layoutSnippet(e), this.validateSnippet(e), this.previewSnippet(o), this.changed.dispatch()
        }
    },
    onSnippetDelete: function(t) {
        var e = $(t.target).closest(".snippet-list-item");
        if (e.length) {
            var n = e.data("model");
            n ? SL.prompt({
                anchor: $(t.currentTarget),
                title: SL.locale.get("THEME_SNIPPET_DELETE_CONFIRM"),
                type: "select",
                data: [{
                    html: "<h3>Cancel</h3>"
                }, {
                    html: "<h3>Remove</h3>",
                    selected: !0,
                    className: "negative",
                    callback: function() {
                        SL.util.anim.collapseListItem(e, function() {
                            e.remove(), this.syncMoveButtons()
                        }.bind(this));
                        var t = this.theme.get("snippets");
                        t.remove(e.data("model")), this.changed.dispatch()
                    }.bind(this)
                }]
            }) : SL.notify("An error occured while deleting this snippet")
        } else SL.notify("An error occured while deleting this snippet")
    },
    onSnippetMoveUp: function(t) {
        var e = $(t.target).closest(".snippet-list-item");
        if (e.length) {
            var n = e.data("model");
            if (n) {
                var i = this.theme.get("snippets");
                i.shiftLeft(i.find(n)), this.changed.dispatch(), this.syncSnippetOrder()
            }
        }
    },
    onSnippetMoveDown: function(t) {
        var e = $(t.target).closest(".snippet-list-item");
        if (e.length) {
            var n = e.data("model");
            if (n) {
                var i = this.theme.get("snippets");
                i.shiftRight(i.find(n)), this.changed.dispatch(), this.syncSnippetOrder()
            }
        }
    }
}), SL("views.themes.edit").Panel = Class.extend({
    PAGES: [{
        name: "Settings",
        id: "settings",
        factory: "renderSettings"
    }, {
        name: "CSS",
        id: "css",
        factory: "renderCSS"
    }, {
        name: "HTML",
        id: "html",
        factory: "renderHTML"
    }, {
        name: "JS",
        id: "js",
        factory: "renderJS",
        condition: function() {
            return SL.current_team.get("allow_scripts")
        }
    }, {
        name: "Palette",
        id: "palette",
        factory: "renderPalette",
        condition: function() {
            return this.editor.VERSION > 1
        }
    }, {
        name: "Snippets",
        id: "snippets",
        factory: "renderSnippets"
    }],
    init: function(t, e, n) {
        this.editor = t, this.theme = e, this.themeOptionsConfig = n, this.previewTimeout = -1, this.destroyed = new signals.Signal, this.updatePreview = this.updatePreview.bind(this), this.paintPreview = this.paintPreview.bind(this), this.render(), this.load()
    },
    load: function() {
        this.theme.load().done(function(t) {
            this.theme = new SL.models.Theme(t), this.preloaderElement.addClass("hidden"), setTimeout(function() {
                this.preloaderElement.remove(), this.preloaderElement = null
            }.bind(this), 400), this.renderHeader(), this.renderPages(), this.bind(), this.showPage("settings"), this.paintPreview(), this.savedJSON = JSON.stringify(this.theme.toJSON()), this.checkUnsavedChanges()
        }.bind(this)).fail(function() {
            this.close(), SL.notify(SL.locale.get("GENERIC_ERROR"), "negative")
        }.bind(this))
    },
    render: function() {
        this.domElement = $('<div class="panel">'), this.domElement.appendTo(this.editor.editorInnerElement), this.pagesElement = $('<div class="pages">'), this.pagesElement.appendTo(this.domElement), this.preloaderElement = $('<div class="preloader"><div class="preloader-inner"><div class="preloader-spinner"></div></div></div>'), this.preloaderElement.appendTo(this.editor.editorInnerElement), SL.util.html.generateSpinners()
    },
    renderHeader: function() {
        this.headerElement = $('<header class="panel-header">').appendTo(this.domElement), this.tabsElement = $('<div class="page-tabs">').appendTo(this.headerElement), this.cancelButton = $('<button class="button l grey cancel-button">Close</button>').appendTo(this.headerElement), this.saveButton = $('<button class="button l positive save-button ladda-button" data-style="zoom-out">Save</button>').appendTo(this.headerElement), this.saveButton.data("ladda", Ladda.create(this.saveButton.get(0))), this.onSaveClicked = this.onSaveClicked.bind(this), this.onCancelClicked = this.onCancelClicked.bind(this), this.saveButton.on("click", this.onSaveClicked), this.cancelButton.on("click", this.onCancelClicked)
    },
    renderPages: function() {
        this.PAGES.forEach(function(t) {
            ("function" != typeof t.condition || t.condition.call(this)) && ($('<button class="page-tab" data-page-id="' + t.id + '">' + t.name + "</button>").on("click", this.showPage.bind(this, t.id)).appendTo(this.tabsElement), this[t.factory]())
        }.bind(this))
    },
    renderSettings: function() {
        this.settingsElement = $('<div class="page sl-form" data-page-id="settings">').appendTo(this.pagesElement), this.settingsElement.append('<div class="unit name" data-required><label for="">Name</label><input id="theme-name" placeholder="Theme name" type="text" value="' + (this.theme.get("name") || "Untitled") + '"></div>'), this.settingsElement.find("#theme-name").on("change", this.paintPreview), this.settingsElement.find("#theme-name").on("input", this.onNameInputChanged.bind(this)), this.renderThemeOptions()
    },
    renderThemeOptions: function() {
        var t = $.extend(this.themeOptionsConfig, {
            model: this.theme,
            container: this.settingsElement
        });
        "no-color" !== t.colors[t.colors.length - 1].id && t.colors.push({
            id: "no-color",
            tooltip: "Specifies as few color styles as possible, useful if you want to write custom CSS from the ground up."
        }), "no-font" !== t.fonts[t.fonts.length - 1].id && t.fonts.push({
            id: "no-font",
            title: "None",
            tooltip: "Specifies as few typographic styles as possible, useful if you want to write custom CSS from the ground up."
        }), this.themeOptions = new SL.components.ThemeOptions(t), this.themeOptions.changed.add(this.paintPreview)
    },
    renderCSS: function() {
        this.cssElement = $('<div class="page" data-page-id="css">').appendTo(this.pagesElement), this.cssElement.append('<div class="editor-wrapper"><div id="ace-less" class="editor"></div><div class="error"></div><div class="info" data-tooltip="' + SL.locale.get("THEME_CSS_DESCRIPTION") + '" data-tooltip-maxwidth="300" data-tooltip-align="left"><span class="icon i-info"></span></div></div>'), this.cssErrorElement = this.cssElement.find(".error");
        try {
            this.cssEditor = ace.edit("ace-less"), this.cssEditor.setTheme("ace/theme/monokai"), this.cssEditor.setDisplayIndentGuides(!0), this.cssEditor.setShowPrintMargin(!1), this.cssEditor.getSession().setMode("ace/mode/less"), this.cssEditor.env.document.setValue(this.theme.get("less") || ""), this.cssEditor.env.editor.on("change", this.onCSSInputChanged.bind(this)), this.syncCSS()
        } catch (t) {
            console.log("An error occurred while initializing the Ace CSS editor.")
        }
    },
    syncCSS: function() {
        var t, e = SL.util.string.getCustomClassesFromLESS(this.cssEditor.env.document.getValue());
        t = e.length ? "Found custom slide classes:<br>- " + e.join("<br>- ") + "<br><br>" + SL.locale.get("THEME_CSS_DESCRIPTION") : SL.locale.get("THEME_CSS_DESCRIPTION"), this.cssElement.find(".info").toggleClass("positive", e.length > 0), this.cssElement.find(".info").attr("data-tooltip", t)
    },
    renderHTML: function() {
        this.htmlElement = $('<div class="page" data-page-id="html">').appendTo(this.pagesElement), this.htmlElement.append('<div class="editor-wrapper"><div id="ace-html" class="editor"></div>', '<div class="info" data-tooltip="' + SL.locale.get("THEME_HTML_DESCRIPTION") + '" data-tooltip-maxwidth="300" data-tooltip-align="left"><span class="icon i-info"></span></div></div>');
        try {
            this.htmlEditor = ace.edit("ace-html"), this.htmlEditor.setTheme("ace/theme/monokai"), this.htmlEditor.setDisplayIndentGuides(!0), this.htmlEditor.setShowPrintMargin(!1), this.htmlEditor.getSession().setMode("ace/mode/html"), this.htmlEditor.env.document.setValue(this.theme.get("html") || ""), this.htmlEditor.env.editor.on("change", this.onHTMLInputChanged.bind(this))
        } catch (t) {
            console.log("An error occurred while initializing the Ace HTML editor.")
        }
    },
    renderJS: function() {
        this.jsElement = $('<div class="page" data-page-id="js">').appendTo(this.pagesElement), this.jsElement.append('<div class="editor-wrapper"><div id="ace-js" class="editor"></div>', '<div class="info" data-tooltip="' + SL.locale.get("THEME_JS_DESCRIPTION") + '" data-tooltip-maxwidth="300" data-tooltip-align="left"><span class="icon i-info"></span></div></div>');
        try {
            this.jsEditor = ace.edit("ace-js"), this.jsEditor.setTheme("ace/theme/monokai"), this.jsEditor.setDisplayIndentGuides(!0), this.jsEditor.setShowPrintMargin(!1), this.jsEditor.getSession().setMode("ace/mode/javascript"), this.jsEditor.env.document.setValue(this.theme.get("js") || ""), this.jsEditor.env.editor.on("change", this.onJSInputChanged.bind(this))
        } catch (t) {
            console.log("An error occurred while initializing the Ace JS editor.")
        }
    },
    renderPalette: function() {
        this.palette = new SL.views.themes.edit.pages.Palette(this.editor, this.theme), this.palette.appendTo(this.pagesElement), this.palette.changed.add(this.checkUnsavedChanges.bind(this))
    },
    renderSnippets: function() {
        this.snippets = new SL.views.themes.edit.pages.Snippets(this.editor, this.theme), this.snippets.appendTo(this.pagesElement), this.snippets.changed.add(this.checkUnsavedChanges.bind(this))
    },
    bind: function() {
        this.onDocumentKeyDown = this.onDocumentKeyDown.bind(this), $(document).on("keydown", this.onDocumentKeyDown)
    },
    showPage: function(t) {
        this.domElement.find(".page").removeClass("past present future"), this.domElement.find('.page[data-page-id="' + t + '"]').addClass("present"), this.domElement.find('.page[data-page-id="' + t + '"]').prevAll().addClass("past"), this.domElement.find('.page[data-page-id="' + t + '"]').nextAll().addClass("future"), this.domElement.find(".panel-header .page-tab").removeClass("selected"), this.domElement.find('.panel-header .page-tab[data-page-id="' + t + '"]').addClass("selected"), "css" === t && this.cssEditor ? this.cssEditor.focus() : "html" === t && this.htmlEditor ? this.htmlEditor.focus() : "js" === t && this.jsEditor ? this.jsEditor.focus() : "palette" === t && this.palette && this.palette.refresh(), setTimeout(function() {
            this.domElement.find(".page").addClass("transition")
        }.bind(this), 1), this.resetScrollPosition()
    },
    resetScrollPosition: function() {
        this.domElement.scrollLeft(0).scrollTop(0), this.settingsElement.scrollLeft(0).scrollTop(0)
    },
    updatePreview: function(t) {
        "number" != typeof t && (t = 250), clearTimeout(this.previewTimeout), this.previewTimeout = setTimeout(function() {
            this.paintPreview()
        }.bind(this), t)
    },
    paintPreview: function() {
        this.preprocess(function() {
            this.editor.refreshPreview(this.theme)
        }.bind(this), function() {
            this.editor.refreshPreview(this.theme)
        }.bind(this))
    },
    preprocess: function(t, e) {
        this.theme.set("name", this.domElement.find("#theme-name").val()), this.cssEditor && this.theme.set("less", this.cssEditor.env.document.getValue()), this.htmlEditor && this.theme.set("html", this.htmlEditor.env.document.getValue()), this.jsEditor && this.theme.set("js", this.jsEditor.env.document.getValue()), this.cssParser || (this.cssParser = new less.Parser);
        var n = this.cssEditor.env.document.getValue();
        n ? this.cssParser.parse(".reveal { " + n + " }", function(i, s) {
            if (i) this.cssErrorElement.addClass("visible"), this.cssErrorElement.html(i.message), SL.util.callback(e, i);
            else {
                this.cssErrorElement.removeClass("visible");
                try {
                    var o = s.toCSS()
                } catch (a) {
                    console.log(a)
                }
                if (o) {
                    var r = "";
                    o = o.replace(/@import url\(["'\s]*(http:|https:)?\/\/(.*)\);?/gi, function(t) {
                        return r += t + "\n", ""
                    }), o = r + o, this.theme.set("less", n), this.theme.set("css", o), SL.util.callback(t)
                } else SL.util.callback(e)
            }
            this.checkUnsavedChanges()
        }.bind(this)) : (this.theme.set("less", ""), this.theme.set("css", ""), SL.util.callback(t)), this.checkUnsavedChanges()
    },
    hasUnsavedChanges: function() {
        return this.theme && this.savedJSON !== JSON.stringify(this.theme.toJSON())
    },
    checkUnsavedChanges: function() {
        this.domElement.toggleClass("has-unsaved-changes", this.hasUnsavedChanges())
    },
    save: function(t) {
        var e = this.saveButton.data("ladda");
        e && e.start(), this.preprocess(function() {
            this.editor.saveTheme(this.theme, function() {
                e && e.stop(), this.savedJSON = JSON.stringify(this.theme.toJSON()), this.checkUnsavedChanges(), SL.util.callback(t)
            }.bind(this), function() {
                e && e.stop()
            }.bind(this))
        }.bind(this), function() {
            SL.notify("Please fix all CSS errors before saving", "negative"), e && e.stop()
        }.bind(this))
    },
    close: function(t) {
        this.hasUnsavedChanges() ? SL.prompt({
            anchor: this.cancelButton,
            title: SL.locale.get("WARN_UNSAVED_CHANGES"),
            alignment: "b",
            type: "select",
            data: [{
                html: "<h3>Cancel</h3>"
            }, {
                html: "<h3>Discard</h3>",
                className: "divider",
                callback: function() {
                    this.destroy(), SL.util.callback(t)
                }.bind(this)
            }, {
                html: "<h3>Save</h3>",
                className: "positive",
                selected: !0,
                callback: function() {
                    SL.util.callback(t), this.save(this.destroy.bind(this))
                }.bind(this)
            }]
        }) : (this.destroy(), SL.util.callback(t))
    },
    getTheme: function() {
        return this.theme
    },
    onCSSInputChanged: function() {
        this.syncCSS(), this.updatePreview()
    },
    onHTMLInputChanged: function() {
        this.updatePreview()
    },
    onJSInputChanged: function() {
        this.updatePreview(1e3)
    },
    onNameInputChanged: function() {
        this.theme.set("name", this.domElement.find("#theme-name").val()), this.checkUnsavedChanges()
    },
    onSaveClicked: function() {
        this.save()
    },
    onCancelClicked: function() {
        this.close()
    },
    onDocumentKeyDown: function(t) {
        (t.metaKey || t.ctrlKey) && 83 === t.keyCode && (this.hasUnsavedChanges() && this.save(), t.preventDefault())
    },
    destroy: function() {
        this.isDestroyed || (this.isDestroyed = !0, clearTimeout(this.previewTimeout), this.destroyed.dispatch(), this.destroyed.dispose(), $(document).off("keydown", this.onDocumentKeyDown), setTimeout(function() {
            this.cssEditor && (this.cssEditor.destroy(), this.cssEditor = null), this.htmlEditor && (this.htmlEditor.destroy(), this.htmlEditor = null), this.jsEditor && (this.jsEditor.destroy(), this.jsEditor = null), this.palette && (this.palette.destroy(), this.palette = null), this.snippets && (this.snippets.destroy(), this.snippets = null), this.themeOptions && this.themeOptions.destroy(), this.preloaderElement && this.preloaderElement.remove(), this.domElement && this.domElement.remove()
        }.bind(this), 500))
    }
}), SL("views.themes").Preview = SL.views.Base.extend({
    init: function() {
        this._super(), SL.util.setupReveal({
            openLinksInTabs: !0
        }), window.parent !== window.self && window.parent.postMessage({
            type: "theme-preview-ready"
        }, window.location.origin)
    }
}), SL("views.users").Show = SL.views.Base.extend({
    init: function() {
        this._super(), $(".decks .deck").each(function(t, e) {
            e = $(e), e.find(".edit").on("vclick", this.onEditClicked.bind(this, e)), e.find(".share").on("vclick", this.onShareClicked.bind(this, e)), e.find(".fork").on("vclick", this.onForkClicked.bind(this, e)), e.find(".clone").on("vclick", this.onCloneClicked.bind(this, e)), e.find(".delete").on("vclick", this.onDeleteClicked.bind(this, e)), e.find(".lock-icon").on("vclick", this.onVisibilityClicked.bind(this, e)), e.find(".visibility").on("vclick", this.onVisibilityClicked.bind(this, e)), e.hasClass("is-owner") && (e.find(".deck-title-value").attr({
                "data-tooltip": "Click to edit",
                "data-tooltip-alignment": "l",
                "data-tooltip-delay": 200
            }), e.find(".deck-title-value").on("click", this.onDeckTitleClicked.bind(this, e)), e.find(".deck-description-value").attr({
                "data-tooltip": "Click to edit",
                "data-tooltip-alignment": "l",
                "data-tooltip-delay": 200
            }), e.find(".deck-description-value").on("click", this.onDeckDescriptionClicked.bind(this, e)))
        }.bind(this)), $(".decks .deck .ladda-button").each(function(t, e) {
            $(e).data("ladda", Ladda.create(e))
        }), SL.util.device.IS_PHONE && $("html").addClass("is-mobile-phone"), this.showAnnouncement()
    },
    showAnnouncement: function() {
        if (Modernizr.localstorage && SL.current_user.isEnterpriseManager() && SL.current_team && SL.current_team.get("beta_new_editor") === !1) {
            var t = "slides-team-has-seen-new-editor-announcement";
            if (!localStorage.getItem(t)) {
                var e = $(['<section class="announcement">', "<h3>New Editor</h3>", '<p>We have released a new and greatly improved presentation editor. Have a look at the <a href="http://slides.com/news/new-editor/" target="_blank">demo presentation</a> for a quick overview.</p>', "<p>To enable the new editor, please visit the team settings page.</p>", '<a class="button positive" href="/edit#beta-features">Team settings</a>', '<a class="button grey dismiss-button">Dismiss</a>', "</section>"].join(""));
                e.find(".dismiss-button").on("click", function() {
                    e.remove(), localStorage.setItem(t, "completed")
                }), $(".main section").first().before(e)
            }
        }
    },
    getDeckData: function(t) {
        return {
            user: {
                id: parseInt(t.attr("data-userid"), 10),
                username: t.attr("data-username")
            },
            id: t.attr("data-id"),
            slug: t.attr("data-slug"),
            title: t.attr("data-title"),
            visibility: t.attr("data-visibility")
        }
    },
    saveVisibility: function(t, e) {
        var n = this.getDeckData(t),
            i = {
                type: "POST",
                url: SL.config.AJAX_PUBLISH_DECK(n.id),
                context: this,
                data: {
                    visibility: e
                }
            },
            s = t.find(".visibility").data("ladda");
        s && s.start(), $.ajax(i).done(function(e) {
            e.deck.visibility === SL.models.Deck.VISIBILITY_SELF ? SL.notify(SL.locale.get("DECK_VISIBILITY_CHANGED_SELF")) : e.deck.visibility === SL.models.Deck.VISIBILITY_TEAM ? SL.notify(SL.locale.get("DECK_VISIBILITY_CHANGED_TEAM")) : e.deck.visibility === SL.models.Deck.VISIBILITY_ALL && SL.notify(SL.locale.get("DECK_VISIBILITY_CHANGED_ALL")), "string" == typeof e.deck.slug && t.attr("data-slug", e.deck.slug), "string" == typeof e.deck.visibility && t.attr("data-visibility", e.deck.visibility)
        }).fail(function() {
            SL.notify(SL.locale.get("DECK_VISIBILITY_CHANGED_ERROR"), "negative")
        }).always(function() {
            s && s.stop(), t.removeClass("hover")
        })
    },
    cloneDeck: function(t, e) {
        var n = this.getDeckData(t);
        t.addClass("hover");
        var i = t.find(".clone.ladda-button").data("ladda");
        i && i.start(), $.ajax({
            type: "POST",
            url: SL.config.AJAX_FORK_DECK(n.id),
            context: this
        }).done(function() {
            SL.util.callback(e)
        }).fail(function() {
            SL.notify(SL.locale.get("GENERIC_ERROR"), "negative"), i && i.stop(), t.removeClass("hover")
        })
    },
    onEditClicked: function(t, e) {
        e.preventDefault(), window.location = t.attr("data-url") + "/edit"
    },
    onDeleteClicked: function(t, e) {
        e.preventDefault(), t.addClass("hover");
        var n = this.getDeckData(t),
            i = SL.prompt({
                anchor: $(e.currentTarget),
                title: SL.locale.get("DECK_DELETE_CONFIRM", {
                    title: n.title
                }),
                type: "select",
                data: [{
                    html: "<h3>Cancel</h3>",
                    callback: function() {
                        t.removeClass("hover")
                    }.bind(this)
                }, {
                    html: "<h3>Delete</h3>",
                    selected: !0,
                    className: "negative",
                    callback: function() {
                        t.find(".deck-metadata .status").text("Deleting...");
                        var e = t.find(".delete.ladda-button").data("ladda");
                        e && e.start(), $.ajax({
                            type: "DELETE",
                            url: SL.config.AJAX_UPDATE_DECK(n.id),
                            data: {},
                            context: this
                        }).done(function() {
                            SL.util.anim.collapseListItem(t, function() {
                                e && e.stop(), t.remove()
                            }.bind(this)), SL.notify(SL.locale.get("DECK_DELETE_SUCCESS"))
                        }).fail(function() {
                            SL.notify(SL.locale.get("DECK_DELETE_ERROR"), "negative"), e && e.stop()
                        }).always(function() {
                            t.removeClass("hover")
                        })
                    }.bind(this)
                }]
            });
        i.canceled.add(function() {
            t.removeClass("hover")
        }), SL.analytics.track("User.show: Delete deck")
    },
    onVisibilityClicked: function(t, e) {
        e.preventDefault(), t.addClass("hover");
        var n = this.getDeckData(t),
            i = [];
        i.push({
            html: SL.locale.get("DECK_VISIBILITY_CHANGE_SELF"),
            selected: n.visibility === SL.models.Deck.VISIBILITY_SELF,
            callback: function() {
                this.saveVisibility(t, SL.models.Deck.VISIBILITY_SELF), SL.analytics.track("User.show: Visibility changed", "self")
            }.bind(this)
        }), SL.current_user.isEnterprise() && i.push({
            html: SL.locale.get("DECK_VISIBILITY_CHANGE_TEAM"),
            selected: n.visibility === SL.models.Deck.VISIBILITY_TEAM,
            className: "divider",
            callback: function() {
                this.saveVisibility(t, SL.models.Deck.VISIBILITY_TEAM), SL.analytics.track("User.show: Visibility changed", "team")
            }.bind(this)
        }), i.push({
            html: SL.locale.get("DECK_VISIBILITY_CHANGE_ALL"),
            selected: n.visibility === SL.models.Deck.VISIBILITY_ALL,
            callback: function() {
                this.saveVisibility(t, SL.models.Deck.VISIBILITY_ALL), SL.analytics.track("User.show: Visibility changed", "all")
            }.bind(this)
        });
        var s = SL.prompt({
            anchor: $(e.currentTarget),
            type: "select",
            data: i
        });
        s.canceled.add(function() {
            t.removeClass("hover")
        }), SL.analytics.track("User.show: Visibility menu opened")
    },
    onShareClicked: function(t, e) {
        e.preventDefault();
        var n = this.getDeckData(t);
        return "string" != typeof n.user.username || "string" != typeof n.slug && "string" != typeof n.id ? SL.notify(SL.locale.get("GENERIC_ERROR"), "negative") : SL.popup.open(SL.components.decksharer.DeckSharer, {
            deck: new SL.models.Deck(n)
        }), !1
    },
    onCloneClicked: function(t, e) {
        return e.preventDefault(), this.cloneDeck(t, function() {
            window.location.reload()
        }), !1
    },
    onForkClicked: function(t, e) {
        return e.preventDefault(), this.cloneDeck(t, function() {
            window.location = SL.current_user.getProfileURL()
        }), !1
    },
    onDeckTitleClicked: function(t) {
        var e = t.find(".deck-title-value"),
            n = SL.prompt({
                anchor: e,
                title: "Edit deck title",
                type: "input",
                confirmLabel: "Save",
                data: {
                    value: e.text(),
                    placeholder: "Deck title...",
                    maxlength: SL.config.DECK_TITLE_MAXLENGTH,
                    width: 400,
                    confirmBeforeDiscard: !0
                }
            });
        return n.confirmed.add(function(n) {
            n && "" !== n.trim() ? (e.text(n), $.ajax({
                url: SL.config.AJAX_UPDATE_DECK(this.getDeckData(t).id),
                type: "PUT",
                context: this,
                data: {
                    deck: {
                        title: n
                    }
                }
            }).fail(function() {
                SL.notify("An error occured while saving your deck title", "negative")
            })) : SL.notify("Title can't be empty", "negative")
        }.bind(this)), !1
    },
    onDeckDescriptionClicked: function(t) {
        var e = t.find(".deck-description-value"),
            n = SL.prompt({
                anchor: e,
                title: "Edit deck description",
                type: "input",
                confirmLabel: "Save",
                data: {
                    value: e.text(),
                    placeholder: "A short description of this deck...",
                    multiline: !0,
                    confirmBeforeDiscard: !0
                }
            });
        return n.confirmed.add(function(n) {
            e.text(n), $.ajax({
                url: SL.config.AJAX_UPDATE_DECK(this.getDeckData(t).id),
                type: "PUT",
                context: this,
                data: {
                    deck: {
                        description: n
                    }
                }
            }).fail(function() {
                SL.notify("An error occured while saving your deck description", "negative")
            })
        }.bind(this)), !1
    }
});