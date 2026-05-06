(() => {
    "use strict";
    var e,
        t = {
            163(e, t, o) {
                (o.r(t), o.d(t, { default: () => r }));
                const r = (e) => {
                    const t = document.querySelector("#timer-hours"),
                        o = document.querySelector("#timer-minutes"),
                        r = document.querySelector("#timer-seconds"),
                        n = () => {
                            let n = (() => {
                                let t =
                                        (new Date(e).getTime() -
                                            new Date().getTime()) /
                                        1e3,
                                    o = Math.floor(t / 60 / 60),
                                    r = Math.floor((t / 60) % 60),
                                    n = Math.floor(t % 60);
                                return {
                                    timeRemaining: t,
                                    fHours: o < 10 ? "0" + o : o,
                                    fMinutes: r < 10 ? "0" + r : r,
                                    fSecond: n < 10 ? "0" + n : n,
                                };
                            })();
                            ((t.textContent = n.fHours),
                                (r.textContent = n.fSecond),
                                (o.textContent = n.fMinutes),
                                n.timeRemaining <= 0 &&
                                    ((t.textContent = "00"),
                                    (r.textContent = "00"),
                                    (o.textContent = "00"),
                                    clearInterval(u)));
                        };
                    let u = setInterval(n, 1e3);
                    n();
                };
            },
        },
        o = {};
    function r(e) {
        var n = o[e];
        if (void 0 !== n) return n.exports;
        var u = (o[e] = { exports: {} });
        return (t[e](u, u.exports, r), u.exports);
    }
    ((r.d = (e, t) => {
        for (var o in t)
            r.o(t, o) &&
                !r.o(e, o) &&
                Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
    }),
        (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (r.r = (e) => {
            ("undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module",
                }),
                Object.defineProperty(e, "__esModule", { value: !0 }));
        }),
        (0, ((e = r(163)) && e.__esModule ? e : { default: e }).default)(
            "01 september 2026",
        ));
})();
