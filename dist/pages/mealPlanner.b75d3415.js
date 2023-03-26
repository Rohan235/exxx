function e(e, n, t, i) {
  Object.defineProperty(e, n, {
    get: t,
    set: i,
    enumerable: !0,
    configurable: !0,
  });
}
function n(e) {
  return e && e.__esModule ? e.default : e;
}
var t =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof self
      ? self
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : {},
  i = {},
  r = {},
  a = t.parcelRequire3a11;
null == a &&
  (((a = function (e) {
    if (e in i) return i[e].exports;
    if (e in r) {
      var n = r[e];
      delete r[e];
      var t = { id: e, exports: {} };
      return (i[e] = t), n.call(t.exports, t, t.exports), t.exports;
    }
    var a = new Error("Cannot find module '" + e + "'");
    throw ((a.code = "MODULE_NOT_FOUND"), a);
  }).register = function (e, n) {
    r[e] = n;
  }),
  (t.parcelRequire3a11 = a)),
  a.register("27Lyk", function (n, t) {
    var i, r;
    e(
      n.exports,
      "register",
      () => i,
      (e) => (i = e)
    ),
      e(
        n.exports,
        "resolve",
        () => r,
        (e) => (r = e)
      );
    var a = {};
    (i = function (e) {
      for (var n = Object.keys(e), t = 0; t < n.length; t++) a[n[t]] = e[n[t]];
    }),
      (r = function (e) {
        var n = a[e];
        if (null == n) throw new Error("Could not resolve bundle with id " + e);
        return n;
      });
  }),
  a.register("hY7mJ", function (t, i) {
    e(t.exports, "default", () => l);
    var r = a("RMgkO"),
      o = a("iqSiK"),
      s = a("4YTqJ");
    class c extends s.default {
      _parentElement = document.querySelector(".recipe");
      _errorMessage = "We could not find that recipe. Please try another one!";
      _message;
      addHandlerRender(e) {
        ["hashchange", "load"].forEach((n) => window.addEventListener(n, e));
      }
      addHandlerUpdateServings(e) {
        this._parentElement.addEventListener("click", function (n) {
          const t = n.target.closest(".btn--update-servings");
          if (!t) return;
          console.log(t);
          const { updateTo: i } = t.dataset;
          +i > 0 && e(+i);
        });
      }
      addHandlerAddBookmark(e) {
        this._parentElement.addEventListener("click", function (n) {
          n.target.closest(".btn--bookmark") && e();
        });
      }
      addHandlerAddIngredient(e) {
        this._parentElement.addEventListener("click", function (n) {
          const t = n.target.closest(".btn--add-ing");
          if (!t) return;
          const i = t
              .closest(".recipe__ingredient")
              .querySelector(".recipe__quantity").innerText,
            r = t
              .closest(".recipe__ingredient")
              .querySelector(".recipe__description").innerText;
          e(`${i} ${r}`);
        });
      }
      addHandlerSubmitPlan(e) {
        this._parentElement.addEventListener("submit", function (n) {
          n.preventDefault();
          const t = n.target.closest("form");
          if (!t) return;
          const i = this.querySelector("img").alt,
            r = this.querySelector("img").src,
            a = {
              weekday: t.querySelector("#weekday").value,
              meal: t.querySelector("#meal").value,
              week: t.querySelector("#week").value,
              recipe: { id: window.location.hash, title: i, img: r },
            };
          e(a);
        });
      }
      scrollToRecipe() {
        this._parentElement.scrollIntoView();
      }
      _generateMarkup() {
        return `\n    <figure class="recipe__fig">\n      <img src="${
          this._data.image
        }" alt="${this._data.title}" class="recipe__img" />\n      <h1 class="recipe__title">\n        <span>${this._data.title}</span>\n      </h1>\n    </figure>\n\n    <div class="recipe__details">\n      <div class="recipe__info">\n        <svg class="recipe__info-icon">\n          <use href="${n(r)}#icon-clock"></use>\n        </svg>\n        <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>\n        <span class="recipe__info-text">minutes</span>\n      </div>\n      <div class="recipe__info">\n        <svg class="recipe__info-icon">\n          <use href="${n(r)}#icon-users"></use>\n        </svg>\n        <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>\n        <span class="recipe__info-text">servings</span>\n\n        <div class="recipe__info-buttons">\n          <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings - 1}">\n            <svg>\n              <use href="${n(r)}#icon-minus-circle"></use>\n            </svg>\n          </button>\n          <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings + 1}">\n            <svg>\n              <use href="${n(r)}#icon-plus-circle"></use>\n            </svg>\n          </button>\n        </div>\n        </div>\n        ${window.location.pathname.includes("mealplanner") || window.location.pathname.includes("mealPlanner") ? "" : `\n        <div class="recipe__user-generated ${this._data.key ? "" : "hidden"}">\n          <svg>\n            <use href="${n(r)}#icon-user"></use>\n          </svg>\n        </div>\n        <button class="btn--round btn--bookmark">\n          <svg class="">\n            <use href="${n(r)}#icon-bookmark${this._data.bookmarked ? "-fill" : ""}">\n            </use>\n          </svg>\n        </button>\n        `}  \n    </div>\n\n    \x3c!-------------------------RENDER RECIPE NUTRIENTS DATA ONLY IF DATA EXISTS--------------------------\x3e\n    ${this._data.calories && this._data.carbs && this._data.proteins && this._data.fats ? `\n    <div class="recipe__nutritional-data">  \n      <h2 class="heading--2">Nutritional data / serving</h2>\n      <div class="recipe__nutrients">\n        <div class="recipe__nutrient-field recipe__calories">\n          <h3 class="heading--3">Calories</h3>\n          <span class="recipe__nutrient-value">${this._data.calories} kcal</span>\n        </div>\n        <div class="recipe__nutrient-field recipe__carbs">\n          <h3 class="heading--3">Carbs</h3>\n          <span class="recipe__nutrient-value">${this._data.carbs} g</span>\n        </div>\n        <div class="recipe__nutrient-field recipe__proteins">\n          <h3 class="heading--3">Proteins</h3>\n          <span class="recipe__nutrient-value">${this._data.proteins} g</span>\n        </div>\n        <div class="recipe__nutrient-field recipe__fats">\n          <h3 class="heading--3">Fats</h3>\n          <span class="recipe__nutrient-value">${this._data.fats} g</span>\n        </div>\n      </div>\n    </div>\n    ` : ""}\n    \n\n    <div class="recipe__ingredients">\n      <h2 class="heading--2">Recipe ingredients</h2>\n      <ul class="recipe__ingredient-list">\n      ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}\n\n      </ul>\n      <h5 class="recipe__note">Click on <span>&plus;</span>\n              to add an ingredient to <a href= ${window.location.pathname.includes("mealPlanner") || window.location.pathname.includes("mealplanner") ? "./shoppingList.html" : "./pages/shoppingList.html"}\n                  >your shopping list</a></h5>\n    </div>\n\n    <div class="recipe__directions">\n      <h2 class="heading--2">How to cook it</h2>\n      <p class="recipe__directions-text">\n        This recipe was carefully designed and tested by\n        <span class="recipe__publisher">${this._data.publisher}</span>. Please check out\n        directions at their website.\n      </p>\n      <a\n        class="btn--small recipe__btn"\n        href="${this._data.sourceUrl}"\n        target="_blank"\n      >\n        <span>Directions</span>\n        <svg class="search__icon">\n          <use href="${n(r)}#icon-arrow-right"></use>\n        </svg>\n      </a>\n    </div>\n    \n    ${window.location.pathname.includes("mealPlanner") || window.location.pathname.includes("mealplanner") ? "" : '\n    <div class="recipe__planning">\n    <h2 class="heading--2">Plan your meal</h2>\n    <form class="recipe__planning-form">\n\n      <label class="recipe__label" for="weekday"> Weekday </label>\n      <select class="recipe__select" id="weekday" required>\n        <option class="recipe__option" value="" disabled selected hidden>\n          Select\n        </option>\n        <option class="recipe__option" value="0">monday</option>\n        <option class="recipe__option" value="1">tuesday</option>\n        <option class="recipe__option" value="2">\n          wednesday\n        </option>\n        <option class="recipe__option" value="3">thursday</option>\n        <option class="recipe__option" value="4">friday</option>\n        <option class="recipe__option" value="5">saturday</option>\n        <option class="recipe__option" value="6">sunday</option>\n      </select>\n\n      <label class="recipe__label" for="meal"> Meal </label>\n      <select class="recipe__select" id="meal" required>\n        <option class="recipe__option" value="" disabled selected hidden>\n          Select\n        </option>\n        <option class="recipe__option" value="0">\n          breakfast\n        </option>\n        <option class="recipe__option" value="1">lunch</option>\n        <option class="recipe__option" value="2">dinner</option>\n        <option class="recipe__option" value="3">desert</option>\n      </select>\n\n      <label class="recipe__label" for="week"> Week </label>\n      <select class="recipe__select" id="week" required>\n        <option class="recipe__option" value="" disabled selected hidden>\n          Select\n        </option>\n        <option class="recipe__option" value="currentWeek">\n          current week\n        </option>\n        <option class="recipe__option" value="nextWeek">\n          next week\n        </option>\n      </select>\n      <button class="btn--small recipe__submit" type="submit">\n        Submit\n      </button>\n    </form>\n      <h5 class="recipe__note">\n        Check your\n        <a href="./pages/mealPlanner.html">weekly meal planner</a>\n      </h5>\n    </div>    \n    '}\n    \n`;
      }
      _generateMarkupIngredient(e) {
        return `\n    <li class="recipe__ingredient">\n      <svg class="recipe__icon btn--tiny btn--add-ing" >\n      <title>Add to shopping list</title>\n        <use href="${n(
          r
        )}#icon-plus"></use>\n      </svg>\n      <div class="recipe__quantity">${e.quantity ? new (0, o.Fraction)(e.quantity).toString() : ""}</div>\n      <div class="recipe__description">\n        <span class="recipe__unit">${e.unit}</span>\n        ${e.description}\n      </div>\n    </li>\n    `;
      }
    }
    var l = new c();
  }),
  a.register("RMgkO", function (e, n) {
    e.exports = new URL(
      "../" + a("27Lyk").resolve("eyyUD"),
      import.meta.url
    ).toString();
  }),
  a.register("iqSiK", function (n, t) {
    var i, r, a;
    e(
      n.exports,
      "Fraction",
      () => i,
      (e) => (i = e)
    ),
      (Fraction = function (e, n) {
        if (void 0 !== e && n)
          "number" == typeof e && "number" == typeof n
            ? ((this.numerator = e), (this.denominator = n))
            : "string" == typeof e &&
              "string" == typeof n &&
              ((this.numerator = parseInt(e)),
              (this.denominator = parseInt(n)));
        else if (void 0 === n)
          if (((num = e), "number" == typeof num))
            (this.numerator = num), (this.denominator = 1);
          else if ("string" == typeof num) {
            var t,
              i,
              r = num.split(" ");
            if (
              (r[0] && (t = r[0]),
              r[1] && (i = r[1]),
              t % 1 == 0 && i && i.match("/"))
            )
              return new Fraction(t).add(new Fraction(i));
            if (!t || i) return;
            if ("string" == typeof t && t.match("/")) {
              var a = t.split("/");
              (this.numerator = a[0]), (this.denominator = a[1]);
            } else {
              if ("string" == typeof t && t.match("."))
                return new Fraction(parseFloat(t));
              (this.numerator = parseInt(t)), (this.denominator = 1);
            }
          }
        this.normalize();
      }),
      (Fraction.prototype.clone = function () {
        return new Fraction(this.numerator, this.denominator);
      }),
      (Fraction.prototype.toString = function () {
        if ("NaN" === this.denominator) return "NaN";
        var e =
            this.numerator / this.denominator > 0
              ? Math.floor(this.numerator / this.denominator)
              : Math.ceil(this.numerator / this.denominator),
          n = this.numerator % this.denominator,
          t = this.denominator,
          i = [];
        return (
          0 != e && i.push(e),
          0 != n && i.push((0 === e ? n : Math.abs(n)) + "/" + t),
          i.length > 0 ? i.join(" ") : 0
        );
      }),
      (Fraction.prototype.rescale = function (e) {
        return (this.numerator *= e), (this.denominator *= e), this;
      }),
      (Fraction.prototype.add = function (e) {
        var n = this.clone();
        return (
          (e = e instanceof Fraction ? e.clone() : new Fraction(e)),
          (td = n.denominator),
          n.rescale(e.denominator),
          e.rescale(td),
          (n.numerator += e.numerator),
          n.normalize()
        );
      }),
      (Fraction.prototype.subtract = function (e) {
        var n = this.clone();
        return (
          (e = e instanceof Fraction ? e.clone() : new Fraction(e)),
          (td = n.denominator),
          n.rescale(e.denominator),
          e.rescale(td),
          (n.numerator -= e.numerator),
          n.normalize()
        );
      }),
      (Fraction.prototype.multiply = function (e) {
        var n = this.clone();
        if (e instanceof Fraction)
          (n.numerator *= e.numerator), (n.denominator *= e.denominator);
        else {
          if ("number" != typeof e) return n.multiply(new Fraction(e));
          n.numerator *= e;
        }
        return n.normalize();
      }),
      (Fraction.prototype.divide = function (e) {
        var n = this.clone();
        if (e instanceof Fraction)
          (n.numerator *= e.denominator), (n.denominator *= e.numerator);
        else {
          if ("number" != typeof e) return n.divide(new Fraction(e));
          n.denominator *= e;
        }
        return n.normalize();
      }),
      (Fraction.prototype.equals = function (e) {
        e instanceof Fraction || (e = new Fraction(e));
        var n = this.clone().normalize();
        e = e.clone().normalize();
        return n.numerator === e.numerator && n.denominator === e.denominator;
      }),
      (Fraction.prototype.normalize =
        ((r = function (e) {
          return (
            "number" == typeof e &&
            ((e > 0 && e % 1 > 0 && e % 1 < 1) ||
              (e < 0 && e % -1 < 0 && e % -1 > -1))
          );
        }),
        (a = function (e, n) {
          if (n) {
            var t = Math.pow(10, n);
            return Math.round(e * t) / t;
          }
          return Math.round(e);
        }),
        function () {
          if (r(this.denominator)) {
            var e = a(this.denominator, 9),
              n = Math.pow(10, e.toString().split(".")[1].length);
            (this.denominator = Math.round(this.denominator * n)),
              (this.numerator *= n);
          }
          r(this.numerator) &&
            ((e = a(this.numerator, 9)),
            (n = Math.pow(10, e.toString().split(".")[1].length)),
            (this.numerator = Math.round(this.numerator * n)),
            (this.denominator *= n));
          var t = Fraction.gcf(this.numerator, this.denominator);
          return (
            (this.numerator /= t),
            (this.denominator /= t),
            ((this.numerator < 0 && this.denominator < 0) ||
              (this.numerator > 0 && this.denominator < 0)) &&
              ((this.numerator *= -1), (this.denominator *= -1)),
            this
          );
        })),
      (Fraction.gcf = function (e, n) {
        var t = [],
          i = Fraction.primeFactors(e),
          r = Fraction.primeFactors(n);
        return (
          i.forEach(function (e) {
            var n = r.indexOf(e);
            n >= 0 && (t.push(e), r.splice(n, 1));
          }),
          0 === t.length
            ? 1
            : (function () {
                var e,
                  n = t[0];
                for (e = 1; e < t.length; e++) n *= t[e];
                return n;
              })()
        );
      }),
      (Fraction.primeFactors = function (e) {
        for (var n = Math.abs(e), t = [], i = 2; i * i <= n; )
          n % i == 0 ? (t.push(i), (n /= i)) : i++;
        return 1 != n && t.push(n), t;
      }),
      (i = Fraction);
  }),
  a("27Lyk").register(
    JSON.parse(
      '{"9df1U":"mealPlanner.b75d3415.js","eyyUD":"icons.7bb96926.svg"}'
    )
  );
//# sourceMappingURL=mealPlanner.b75d3415.js.map
