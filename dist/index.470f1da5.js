function e(e) {
  return e && e.__esModule ? e.default : e;
}
var n =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof self
      ? self
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : {},
  t = {},
  a = {},
  r = n.parcelRequire3a11;
null == r &&
  (((r = function (e) {
    if (e in t) return t[e].exports;
    if (e in a) {
      var n = a[e];
      delete a[e];
      var r = { id: e, exports: {} };
      return (t[e] = r), n.call(r.exports, r, r.exports), r.exports;
    }
    var s = new Error("Cannot find module '" + e + "'");
    throw ((s.code = "MODULE_NOT_FOUND"), s);
  }).register = function (e, n) {
    a[e] = n;
  }),
  (n.parcelRequire3a11 = r)),
  r("27Lyk").register(
    JSON.parse(
      '{"f9fpV":"index.470f1da5.js","eyyUD":"icons.7bb96926.svg","1J7OZ":"mealPlanner.ef01a64d.js","9df1U":"mealPlanner.b75d3415.js"}'
    )
  ),
  r("3gXC5"),
  r("ic7rk");
var s = r("1is5Y"),
  d = r("hY7mJ");
var i,
  o = new (class {
    _parentElement = document.querySelector(".search");
    getQuery() {
      const e = this._parentElement.querySelector(".search__field").value;
      return this._clearInput(), e;
    }
    _clearInput() {
      this._parentElement.querySelector(".search__field").value = "";
    }
    addHandlerSearch(e) {
      this._parentElement.addEventListener("submit", function (n) {
        n.preventDefault(), e();
      });
    }
  })(),
  l = r("4YTqJ");
l = r("4YTqJ");
i = new URL(r("27Lyk").resolve("eyyUD"), import.meta.url).toString();
class c extends l.default {
  _parentElement = "";
  _generateMarkup() {
    const n = window.location.hash.slice(1);
    return `\n    <li class="preview">\n    <a class="preview__link ${
      this._data.id === n ? "preview__link--active" : ""
    }" href="#${
      this._data.id
    }">\n    <figure class="preview__fig">\n        <img src="${
      this._data.image
    }" alt="Test" />\n    </figure>\n    <div class="preview__data">\n        <h4 class="preview__title">${
      this._data.title
    }</h4>\n        <p class="preview__publisher">${
      this._data.publisher
    }</p>\n        <div class="preview__user-generated ${
      this._data.key ? "" : "hidden"
    }">\n          <svg>\n            <use href="${e(
      i
    )}#icon-user"></use>\n          </svg>\n        </div>\n    </div>\n    </a>\n    </li>  \n    `;
  }
}
var u = new c();
class p extends l.default {
  _parentElement = document.querySelector(".results");
  _errorMessage = "No recipes found for your query. Please try again!";
  _message;
  _generateMarkup() {
    return this._data.map((e) => u.render(e, !1)).join("");
  }
}
var _ = new p();
l = r("4YTqJ");
class g extends l.default {
  _parentElement = document.querySelector(".pagination");
  addHandlerClick(e) {
    this._parentElement.addEventListener("click", function (n) {
      const t = n.target.closest(".btn--inline");
      if (!t) return;
      const a = +t.dataset.goto;
      e(a);
    });
  }
  _generateMarkup() {
    const n = this._data.page,
      t = Math.ceil(this._data.results.length / this._data.resultsPerPage);
    return 1 === n && t > 1
      ? `\n        <button data-goto="${
          n + 1
        }" class="btn--inline pagination__btn--next">\n            <span>Page ${
          n + 1
        }</span>\n            <svg class="search__icon">\n              <use href="${e(
          i
        )}#icon-arrow-right"></use>\n            </svg>\n        </button>\n        <div class="pagination__label">\n            <span class="pagination__label-text">Page ${n} out of ${t}</span>\n        </div>\n      `
      : n === t && t > 1
      ? `\n        <button data-goto="${
          n - 1
        }" class="btn--inline pagination__btn--prev">\n            <svg class="search__icon">\n              <use href="${e(
          i
        )}#icon-arrow-left"></use>\n            </svg>\n            <span>Page ${
          n - 1
        }</span>\n        </button>\n        <div class="pagination__label">\n            <span class="pagination__label-text">Page ${n} out of ${t}</span>\n        </div>\n      `
      : n < t
      ? `\n        <button data-goto="${
          n - 1
        }" class="btn--inline pagination__btn--prev">\n            <svg class="search__icon">\n              <use href="${e(
          i
        )}#icon-arrow-left"></use>\n            </svg>\n            <span>Page ${
          n - 1
        }</span>\n        </button>\n        <button data-goto="${
          n + 1
        }" class="btn--inline pagination__btn--next">\n            <span>Page ${
          n + 1
        }</span>\n            <svg class="search__icon">\n                <use href="${e(
          i
        )}#icon-arrow-right"></use>\n            </svg>\n        </button>\n        <div class="pagination__label">\n            <span class="pagination__label-text">Page ${n} out of ${t}</span>\n        </div>\n      `
      : "\n    ";
  }
}
var h = new g();
l = r("4YTqJ");
class f extends l.default {
  _parentElement = document.querySelector(".bookmarks__list");
  _errorMessage = "No bookmarks yet. Find a nice recipe and bookmark it ;)";
  _message = "";
  addHandlerRender(e) {
    window.addEventListener("load", e);
  }
  _generateMarkup() {
    return this._data.map((e) => u.render(e, !1)).join("");
  }
}
var m = new f();
l = r("4YTqJ");
class v extends l.default {
  _parentElement = document.querySelector(".upload");
  _message = "Recipe was succesfully uploaded";
  _window = document.querySelector(".add-recipe-window");
  _overlay = document.querySelector(".overlay");
  _btnOpen = document.querySelector(".page-options__btn--add-recipe");
  _btnClose = document.querySelector(".btn--close-modal");
  constructor() {
    super(), this._addHandlerShowWindow(), this._addHandlerHideWindow();
  }
  toggleWindow() {
    this._overlay.classList.toggle("hidden"),
      this._window.classList.toggle("hidden");
  }
  _addHandlerShowWindow() {
    this._btnOpen.addEventListener("click", this.toggleWindow.bind(this));
  }
  _addHandlerHideWindow() {
    this._btnClose.addEventListener("click", this.toggleWindow.bind(this)),
      this._overlay.addEventListener("click", this.toggleWindow.bind(this));
  }
  addHandlerUpload(e) {
    this._parentElement.addEventListener("submit", function (n) {
      n.preventDefault();
      const t = [...new FormData(this)],
        a = Object.fromEntries(t);
      console.log(a), e(a);
    });
  }
  _generateMarkup() {}
}
var b = new v(),
  w = r("5smQv"),
  y = r("fZ5A9");
r("9NZOq");
const k = async function () {
    try {
      const e = window.location.hash.slice(1);
      if (!e) return;
      document.documentElement.clientWidth <= 600 && d.default.scrollToRecipe(),
        d.default.renderSpinner(),
        _.update(s.getSearchResultsPage()),
        await s.loadRecipe(e),
        d.default.render(s.state.recipe),
        m.update(s.state.bookmarks);
    } catch (e) {
      console.error(`${e.message} ⚠⚠⚠`), d.default.renderError();
    }
    s.state.recipe.calories ||
      (d.default.render(s.state.recipe), m.update(s.state.bookmarks));
  },
  S = async function () {
    try {
      _.renderSpinner();
      const e = o.getQuery();
      if (!e) return;
      await s.loadSearchResults(e),
        _.render(s.getSearchResultsPage()),
        h.render(s.state.search);
    } catch (e) {
      console.error(e);
    }
  },
  E = function (e) {
    _.render(s.getSearchResultsPage(e)), h.render(s.state.search);
  },
  H = function (e) {
    s.updateServings(e), d.default.update(s.state.recipe);
  },
  $ = function () {
    s.state.recipe.bookmarked
      ? s.deleteBookmark(s.state.recipe.id)
      : s.addBookmark(s.state.recipe),
      d.default.update(s.state.recipe),
      m.render(s.state.bookmarks);
  },
  q = function () {
    m.render(s.state.bookmarks);
  },
  R = async function (e) {
    try {
      b.renderSpinner(),
        await s.uploadRecipe(e),
        d.default.render(s.state.recipe),
        b.renderMessage(),
        m.render(s.state.bookmarks),
        window.history.pushState(null, "", `#${s.state.recipe.id}`);
    } catch (e) {
      console.error(e), b.renderError(e.message);
    }
    setTimeout(function () {
      b.toggleWindow(), location.reload();
    }, 1e3 * y.MODAL_CLOSE_SEC);
  },
  P = function (e) {
    s.addIngredient(e);
  },
  x = async function (e) {
    try {
      await s.addPlannedMeal(e);
    } catch (e) {
      d.default.renderError("We could not get the recipe data. Try again!");
    }
  },
  T = function (e) {
    let n = "light";
    "light" === e && (n = "dark"), s.changeTheme(n), w.default.setTheme(n);
  };
d.default.addHandlerRender(k),
  d.default.addHandlerUpdateServings(H),
  d.default.addHandlerAddBookmark($),
  d.default.addHandlerSubmitPlan(x),
  d.default.addHandlerAddIngredient(P),
  o.addHandlerSearch(S),
  h.addHandlerClick(E),
  m.addHandlerRender(q),
  b.addHandlerUpload(R),
  console.log(s.state.theme),
  w.default.setTheme(s.state.theme),
  w.default.addHandlerChangeTheme(T);
//# sourceMappingURL=index.470f1da5.js.map
