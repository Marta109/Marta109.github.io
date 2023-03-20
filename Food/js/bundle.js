/*! For license information please see bundle.js.LICENSE.txt */
(() => {
  "use strict";
  function e(e, t) {
    const o = document.querySelector(e);
    o.classList.add("show"),
      o.classList.remove("hide"),
      (document.body.style.overflow = "hidden"),
      t && (console.log(t), clearInterval(t));
  }
  function t(e) {
    const t = document.querySelector(e);
    t.classList.add("hide"),
      t.classList.remove("show"),
      (document.body.style.overflow = "");
  }
  document.addEventListener("DOMContentLoaded", () => {
    const o = setTimeout(() => e(".modal", o), 15e3);
    (function (e, t, o, n) {
      const a = document.querySelector(e),
        r = a.querySelectorAll(t),
        s = document.querySelectorAll(o),
        c = function () {
          s.forEach((e) => {
            e.classList.add("hide"), e.classList.remove("show", "fade");
          }),
            r.forEach((e) => {
              e.classList.remove(n);
            });
        },
        l = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : 0;
          s[e].classList.add("show", "fade"),
            s[e].classList.remove("hide"),
            r[e].classList.add(n);
        };
      a.addEventListener("click", (e) => {
        e.target &&
          e.target.classList.contains(t.slice(1)) &&
          r.forEach((t, o) => {
            t == e.target && (c(), l(o));
          });
      }),
        c(),
        l();
    })(
      ".tabheader__items",
      ".tabheader__item",
      ".tabcontent",
      "tabheader__item_active"
    ),
      (function (o, n, a) {
        const r = document.querySelectorAll(o),
          s = document.querySelector(n);
        r.forEach((t) => {
          t.addEventListener("click", () => e(n, a));
        }),
          s.addEventListener("click", (e) => {
            (e.target !== s &&
              "" != e.target.getAttribute("data-close")) ||
              t(n);
          }),
          document.addEventListener("keydown", (e) => {
            "Escape" == e.code && s.classList.contains("show") && t(n);
          }),
          window.addEventListener("scroll", function t() {
            window.pageYOffset + document.documentElement.clientHeight >=
              document.documentElement.scrollHeight &&
              (e(n, a), window.removeEventListener("scroll", t));
          });
      })("[date-modal]", ".modal", o),
      (function (e, t) {
        let o = function (e) {
          return e >= 0 && e < 10 ? `0${e}` : e;
        };
        !(function (e, t) {
          const n = document.querySelector(e),
            a = n.querySelector("#days"),
            r = n.querySelector("#hours"),
            s = n.querySelector("#minutes"),
            c = n.querySelector("#seconds"),
            l = setInterval(i, 1e3);
          function i() {
            const e = (function (e) {
              const t = Date.parse(e) - new Date();
              return {
                total: t,
                days: Math.floor(t / 864e5),
                hours: Math.floor((t / 36e5) % 24),
                minutes: Math.floor((t / 1e3 / 60) % 60),
                seconds: Math.floor((t / 1e3) % 60),
              };
            })(t);
            e.total > 0
              ? ((a.textContent = o(e.days)),
                (r.textContent = o(e.hours)),
                (s.textContent = o(e.minutes)),
                (c.textContent = o(e.seconds)))
              : ((a.textContent = "00"),
                (r.textContent = "00"),
                (s.textContent = "00"),
                (c.textContent = "00")),
              e.total <= 0 && clearInterval(l);
          }
          i();
        })(e, t);
      })(".timer", "2025-10-25"),
      (function () {
        class e {
          constructor(e, t, o, n, a, r) {
            (this.src = e),
              (this.alt = t),
              (this.title = o),
              (this.descr = n),
              (this.price = a),
              (this.exchange = 10);
            for (
              var s = arguments.length,
                c = new Array(s > 6 ? s - 6 : 0),
                l = 6;
              l < s;
              l++
            )
              c[l - 6] = arguments[l];
            (this.classes = c),
              this.changeToUSD(),
              (this.parent = document.querySelector(r));
          }
          changeToUSD() {
            this.price = Math.floor(+this.price * +this.exchange);
          }
          render() {
            const e = document.createElement("div");
            0 === this.classes.length
              ? ((this.element = "menu__item"),
                e.classList.add(this.element))
              : this.classes.forEach((t) => e.classList.add(t)),
              (e.innerHTML = `\n          <img src=${this.src} alt=${this.alt}>\n          <h3 class="menu__item-subtitle">${this.title}</h3>\n          <div class="menu__item-descr">${this.descr}</div>\n          <div class="menu__item-divider"></div>\n          <div class="menu__item-price">\n              <div class="menu__item-cost">Цена:</div>\n              <div class="menu__item-total"><span>${this.price}</span> USD/день</div>\n          </div> `),
              this.parent.append(e);
          }
        }
        (async function (e) {
          let t = await fetch(e);
          if (!t.ok)
            throw new Error(`Could note fetch ${e}, status${t.status}`);
          return await t.json();
        })(" http://localhost:3000/menu").then((t) => {
          t.forEach((t) => {
            let {img: o, altimg: n, title: a, descr: r, price: s} = t;
            new e(o, n, a, r, s, ".menu .container").render();
          });
        });
      })(),
      (function () {
        const e = document.querySelector(".calculating__result span");
        let t, o, n, a, r;
        localStorage.getItem("gender")
          ? (t = localStorage.getItem("gender"))
          : ((t = "female"), localStorage.setItem("gender", "female")),
          localStorage.getItem("ratio")
            ? (r = localStorage.getItem("ratio"))
            : ((r = 1.375), localStorage.setItem("ratio", 1.375));
        const s = function (e, t) {
          document.querySelectorAll(`${e} div`).forEach((e) => {
            e.classList.remove(t),
              e.getAttribute("id") == localStorage.getItem("gender") &&
                e.classList.add(t),
              e.getAttribute("data-ratio") ==
                localStorage.getItem("ratio") && e.classList.add(t);
          });
        };
        s("#gender", "calculating__choose-item_active"),
          s(".calculating__choose_big", "calculating__choose-item_active");
        const c = function (e, o, n) {
          let a = document
            .querySelector(`${e}`)
            .querySelectorAll(`${e} div`);
          a.forEach((e) => {
            e.addEventListener("click", (e) => {
              "id" == o
                ? ((t = e.target.getAttribute(o)),
                  localStorage.setItem("gender", t))
                : ((r = e.target.getAttribute(o)),
                  localStorage.setItem("ratio", r)),
                a.forEach((e) => {
                  e.classList.remove(n);
                }),
                e.target.classList.add(n),
                l();
            });
          });
        };
        function l() {
          let s = "";
          t && o && n && a && r
            ? ((s =
                "female" == t
                  ? Math.round(r * (447.6 + 9.2 * n + 3.1 * o - 4.3 * a))
                  : Math.round(
                      r * (88.36 + 13.4 * n + 4.8 * o - 5.7 * a)
                    )),
              (s = isNaN(s) ? "Неправильный параметр!" : s),
              (e.textContent = s))
            : (e.textContent = "00");
        }
        c("#gender", "id", "calculating__choose-item_active"),
          c(
            ".calculating__choose_big",
            "data-ratio",
            "calculating__choose-item_active"
          ),
          document
            .querySelector(".calculating__choose_medium")
            .addEventListener("input", (e) => {
              switch (
                (e.target.value.match(/\D/g)
                  ? (e.target.style.border = "1px solid red")
                  : (e.target.style.border = "none"),
                e.target.getAttribute("id"))
              ) {
                case "height":
                  (o = e.target.value), localStorage.setItem("height", o);
                  break;
                case "weight":
                  (n = e.target.value), localStorage.setItem("weight", n);
                  break;
                case "age":
                  (a = e.target.value), localStorage.setItem("age", a);
              }
              l();
            });
      })(),
      (function (o, n) {
        function a(o) {
          const a = document.querySelector(".modal__dialog");
          a.classList.add("hide"), e(".modal", n);
          const r = document.createElement("div");
          r.classList.add("modal__dialog"),
            (r.innerHTML = `\n        <div class="modal__content">\n            <div class="modal__close" data-close>×</div>\n            <div class="modal__title">${o}</div>\n        </div>\n    `),
            document.querySelector(".modal").append(r),
            setTimeout(() => {
              r.remove(),
                a.classList.add("show"),
                a.classList.remove("hide"),
                t(".modal");
            }, 4e3);
        }
        document.querySelectorAll(o).forEach((e) => {
          var t;
          (t = e).addEventListener("submit", (e) => {
            e.preventDefault();
            const o = document.createElement("img");
            (o.src = "img/form/spinner.svg"),
              (o.style.cssText =
                "\n      display: block;\n      margin: 0 auto;\n  "),
              t.insertAdjacentElement("afterend", o);
            const n = new FormData(t);
            (async (e, t) => {
              let o = await fetch(e, {
                method: "POST",
                headers: {"Content-type": "application/json"},
                body: t,
              });
              if (!o.ok)
                throw new Error(
                  `Could note fetch ${e}, status${o.status}`
                );
              return await o.json();
            })(
              "http://localhost:3000/requests",
              JSON.stringify(Object.fromEntries(n.entries()))
            )
              .then((e) => {
                console.log(e),
                  a("Спасибо! Скоро мы с вами свяжемся"),
                  o.remove();
              })
              .catch(() => {
                a("Что-то пошло не так...");
              })
              .finally(() => {
                t.reset();
              });
          });
        });
      })("form", o),
      (function (e) {
        let {
          container: t,
          slide: o,
          nextArrow: n,
          prevArrow: a,
          totalCounter: r,
          currentCounter: s,
          wrapper: c,
          field: l,
        } = e;
        const i = document.querySelectorAll(o),
          d = document.querySelector(a),
          u = document.querySelector(n),
          m = document.querySelector(s),
          h = document.querySelector(r),
          g = document.querySelector(c),
          f = document.querySelector(l),
          y = document.querySelector(t),
          v = window.getComputedStyle(g).width;
        let _ = 1,
          p = 0;
        function S(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : i.length;
          i.length < 10
            ? ((h.textContent = `0${t}`), (m.textContent = `0${e}`))
            : ((h.textContent = t), (m.textContent = e));
        }
        S(_),
          (f.style.width = 100 * i.length + "%"),
          (f.style.display = "flex"),
          (f.style.transition = "0.5s all"),
          (g.style.overflow = "hidden"),
          i.forEach((e) => {
            e.style.width = v;
          }),
          (y.style.position = "relative");
        const w = document.createElement("ol");
        w.classList.add("carousel-indicators"),
          y.append(w),
          i.forEach((e, t) => {
            const o = document.createElement("li");
            o.classList.add("dot"),
              o.setAttribute("data-slide-to", t + 1),
              0 == t && (o.style.opacity = 1),
              w.append(o);
          });
        const L = w.querySelectorAll(".dot");
        function E(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "";
          return +e.replace(/\D/g, t);
        }
        w.addEventListener("click", (e) => {
          L.forEach((t, o) => {
            if (((t.style.opacity = ".5"), e.target == t)) {
              t.style.opacity = 1;
              const o = e.target.getAttribute("data-slide-to");
              (_ = o),
                (p = E(v) * (o - 1)),
                (f.style.transform = `translateX(-${p}px)`),
                S(_);
            }
          });
        }),
          u.addEventListener("click", () => {
            p == E(v) * (i.length - 1) ? (p = 0) : (p += E(v)),
              (f.style.transform = `translateX(-${p}px)`),
              _ == i.length ? (_ = 1) : _++,
              S(_),
              L.forEach((e) => (e.style.opacity = ".5")),
              (L[_ - 1].style.opacity = 1);
          }),
          d.addEventListener("click", () => {
            0 == p ? (p = E(v) * (i.length - 1)) : (p -= E(v)),
              (f.style.transform = `translateX(-${p}px)`),
              1 == _ ? (_ = i.length) : _--,
              S(_),
              L.forEach((e) => (e.style.opacity = ".5")),
              (L[_ - 1].style.opacity = 1);
          });
      })({
        container: ".offer__slider",
        slide: ".offer__slide",
        nextArrow: ".offer__slider-next",
        prevArrow: ".offer__slider-prev",
        totalCounter: "#total",
        currentCounter: "#current",
        field: ".offer__slider-inner",
        wrapper: ".offer__slider-wrapper",
      });
  });
})();
//# sourceMappingURL=bundle.js.map
