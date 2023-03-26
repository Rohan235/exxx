function e(e) {
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
  n = {},
  s = {},
  i = t.parcelRequire3a11;
null == i &&
  (((i = function (e) {
    if (e in n) return n[e].exports;
    if (e in s) {
      var t = s[e];
      delete s[e];
      var i = { id: e, exports: {} };
      return (n[e] = i), t.call(i.exports, i, i.exports), i.exports;
    }
    var a = new Error("Cannot find module '" + e + "'");
    throw ((a.code = "MODULE_NOT_FOUND"), a);
  }).register = function (e, t) {
    s[e] = t;
  }),
  (t.parcelRequire3a11 = i)),
  i("27Lyk").register(
    JSON.parse(
      '{"7SchA":"shoppingList.f5141cb2.js","eyyUD":"icons.7bb96926.svg","1J7OZ":"mealPlanner.ef01a64d.js"}'
    )
  ),
  i("3gXC5"),
  i("ic7rk");
var a = i("1is5Y");
i("9NZOq");
var l,
  r = i("4YTqJ");
l = new URL("../" + i("27Lyk").resolve("eyyUD"), import.meta.url).toString();
class d extends r.default {
  _parentElement = document.querySelector(".list__list-container");
  _message =
    "Choose a recipe and start adding some ingredients to your shopping list or click 'Edit' to add your own items!";
  _buttonClear = document.querySelector(".list__btn-delete");
  _buttonDownload = document.querySelector(".list__btn-download");
  _buttonEdit = document.querySelector(".list__btn-edit");
  _buttonNav = document.querySelector(".page-options__btn--reset");
  listToDownload = document.getElementById("list");
  addHandlerRenderList(e) {
    window.addEventListener("load", e), this.renderMessageInsideList();
  }
  addHandlerReset(e) {
    this._buttonNav.addEventListener("click", function () {
      e();
    });
  }
  addHandlerCheck(e) {
    this._parentElement.addEventListener("click", function (t) {
      if (!t.target.closest(".btn--check")) return;
      const n = t.target
        .closest(".list__item")
        .querySelector(".list__ing").innerText;
      e(n);
    });
  }
  addHandlerClear(e) {
    this._parentElement.addEventListener("click", function (t) {
      t.target.closest(".list__btn-delete") && e("listView");
    });
  }
  addHandlerDownload(e) {
    this._parentElement.addEventListener("click", function (t) {
      t.target.closest(".list__btn-download") && e();
    });
  }
  addHandlerEditList(e) {
    this._parentElement.addEventListener("click", function (t) {
      t.target.closest(".list__btn-edit") && e();
    });
  }
  _generateMarkup() {
    return ` \n    <h3 class="list__title"><span>${
      this._data[0]
    }</span></h3>\n    \n    <ul class="list__shopping-list">\n    ${this._data
      .slice(1)
      .map(this._generateMarkupItem)
      .join(
        ""
      )}\n    </ul>\n\n    <div class="list__options">\n                <button class="btn--list list__btn-edit">\n                  <svg class="list__icon">\n                    <use href="${e(
      l
    )}#icon-edit-pencil"></use>\n                  </svg>\n                </button>\n                <button class="btn--list list__btn-delete">\n                  <svg class="list__icon">\n                    <use href="${e(
      l
    )}#icon-bin"></use>\n                  </svg>\n                </button>\n                <button class="btn--list list__btn-download">\n                  <svg class="list__icon">\n                    <use href="${e(
      l
    )}#icon-download"></use>\n                  </svg>\n                </button>\n              </div>\n    `;
  }
  _generateMarkupItem(t) {
    return `\n    <li class="list__item">\n    <div class="list__ing">${t}</div>\n    <div class="list__item-buttons">\n      <button class="btn--tiny btn--check">\n        <svg>\n          <title>Check</title>\n          <use href="${e(
      l
    )}#icon-checkmark"></use>\n        </svg>\n      </button>\n    </div>\n  </li>\n    `;
  }
  renderMessageInsideList(t = this._message) {
    const n = `\n    <h3 class="list__title"><span>MY SHOPPING LIST</span></h3>\n\n    <ul class="list__shopping-list" id="list">\n      <div class="message">\n        <div>\n          <svg>\n            <use href="${e(
      l
    )}#icon-smile"></use>\n           </svg>\n        </div>\n        <p>${t}</p>\n      </div>\n    </ul>\n\n    <div class="list__options">\n      <button class="btn--list list__btn-edit">\n        <svg class="list__icon">\n          <use href="${e(
      l
    )}#icon-edit-pencil"></use>\n        </svg>\n      </button>\n      <button class="btn--list list__btn-delete">\n        <svg class="list__icon">\n          <use href="${e(
      l
    )}#icon-bin"></use>\n        </svg>\n      </button>\n      <button class="btn--list list__btn-download">\n        <svg class="list__icon">\n          <use href="${e(
      l
    )}#icon-download"></use>\n        </svg>\n      </button>\n    </div>\n      `;
    this._clear(), this._parentElement.insertAdjacentHTML("afterbegin", n);
  }
}
var o = new d();
r = i("4YTqJ");
class c extends r.default {
  _parentElement = document.querySelector(".list__list-container");
  addHandlerSubmit(e) {
    this._parentElement.addEventListener("click", function (t) {
      t.preventDefault();
      if (!t.target.closest(".list__btn-submit")) return;
      const n = [...new FormData(this.querySelector("form"))];
      e(n);
    });
  }
  addHandlerAddItem(e) {
    this._parentElement.addEventListener("click", function (t) {
      t.target.closest(".list__btn-add") && e();
    });
  }
  addHandlerClear(e) {
    this._parentElement.parentElement.addEventListener("click", function (t) {
      t.target.closest(".list__btn-clear-form") && e("formView");
    });
  }
  addHandlerRemoveItem(e) {
    this._parentElement.addEventListener("click", function (t) {
      if (!t.target.closest(".btn--discard")) return;
      const n = t.target.closest(".list__item");
      e(n);
    });
  }
  addHandlerOnFocus() {
    this._parentElement.addEventListener("onfocusin", function (e) {
      const t = e.target.closest(".form__input");
      t &&
        (t.parentNode.setAttribute("draggable", !1), console.log(t.parentNode));
    });
  }
  addHandlerOnBlur() {
    this._parentElement.addEventListener("onfocusout", function (e) {
      const t = e.target.closest(".form__input");
      t &&
        (t.parentNode.setAttribute("draggable", !0), console.log(t.parentNode));
    });
  }
  addHandlerDragover() {
    this._parentElement.addEventListener("dragover", this._dragover.bind(this));
  }
  addHandlerDragstart() {
    this._parentElement.addEventListener("dragstart", function (e) {
      const t = e.target.closest(".list__item--draggable");
      t && t.classList.add("list__item--draggable-dragging");
    });
  }
  addHandlerDragend() {
    this._parentElement.addEventListener("dragend", function (e) {
      const t = e.target.closest(".list__item--draggable");
      t && t.classList.remove("list__item--draggable-dragging");
    });
  }
  _dragover(e) {
    e.preventDefault();
    const t = e.target.closest(".list__shopping-list");
    if (!t) return;
    const n = this._getDragAfterElement(t, e.clientY),
      s = document.querySelector(".list__item--draggable-dragging");
    null == n ? t.appendChild(s) : t.insertBefore(s, n);
  }
  _getDragAfterElement(e, t) {
    return [
      ...e.querySelectorAll(
        ".list__item--draggable:not(.list__item--draggable-dragging)"
      ),
    ].reduce(
      (e, n) => {
        const s = n.getBoundingClientRect(),
          i = t - s.top - s.height / 2;
        return i < 0 && i > e.offset ? { offset: i, element: n } : e;
      },
      { offset: Number.NEGATIVE_INFINITY }
    ).element;
  }
  addListItem() {
    const e = this._generateInputField();
    this._parentElement
      .querySelector(".list__shopping-list")
      .insertAdjacentHTML("beforeend", e);
  }
  removeListItem(e) {
    this._parentElement.querySelector(".list__shopping-list").removeChild(e);
  }
  clearForm() {
    (this._parentElement.querySelector(".list__shopping-list").innerHTML = ""),
      this.addListItem();
  }
  _generateMarkup() {
    return `\n    <form>\n    <h3 class="list__title list__title--form"><span><input placeholder="My shopping list" class="form__title" name="title" value="${
      this._data[0]
    }"></input></span></h3>\n\n    \n    <ul class="list__shopping-list">\n      ${this._data
      .slice(1)
      .map((e) => this._generateInputField(e))
      .join(
        ""
      )}\n    </ul>\n    </form>\n    <div class="list__options form__buttons">\n      <button class="btn--list list__btn-add">\n        <svg class="list__icon list__icon--add">\n          <use href="${e(
      l
    )}#icon-plus"></use>\n        </svg>\n      </button>\n      <button class="btn--list list__btn-clear-form">\n        <svg class="list__icon">\n          <use href="${e(
      l
    )}#icon-bin"></use>\n        </svg>\n      </button>\n      <button class="btn--list list__btn-submit">\n        <svg class="list__icon">\n          <use href="${e(
      l
    )}#icon-checkmark"></use>\n        </svg>\n      </button>\n    </div>\n    `;
  }
  _generateInputField(t = "") {
    return `\n    <li class="list__item list__item--draggable" draggable="true">\n      <input class="list__ing form__input" placeholder="Your item here" name="item" value="${t}"></input>\n      <div class="list__item-buttons">\n        <button class="btn--tiny btn--discard">\n         <svg>\n            <use href="${e(
      l
    )}#icon-minus"></use>\n          </svg>\n        </button>\n      </div>\n    </li>\n    `;
  }
}
var _ = new c(),
  u = i("5smQv");
const g = function () {
    if (!a.state.ingredientsList[0]) return;
    html2pdf()
      .set({
        margin: 5,
        filename: "shoppingList.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 1 },
      })
      .from(o.listToDownload.children[1])
      .save();
  },
  m = function () {
    a.state.ingredientsList[1] && o.render(a.state.ingredientsList);
  },
  p = function (e) {
    a.clearIngredients(),
      "listView" === e && o.renderMessageInsideList(),
      "formView" === e && _.clearForm();
  },
  b = function () {
    a.clearIngredients(),
      _.clearForm(),
      o.render(a.state.ingredientsList),
      o.renderMessageInsideList();
  },
  f = function (e) {
    a.removeIngredient(e),
      a.state.ingredientsList[1]
        ? o.render(a.state.ingredientsList)
        : o.renderMessageInsideList();
  },
  h = function () {
    a.state.ingredientsList[1]
      ? _.render(a.state.ingredientsList)
      : _.render(["", ""]);
  },
  v = function (e) {
    _.removeListItem(e);
  },
  L = function () {
    _.addListItem();
  },
  E = function (e) {
    a.submitListData(e),
      a.state.ingredientsList[1]
        ? o.render(a.state.ingredientsList)
        : o.renderMessageInsideList();
  },
  H = function (e) {
    let t = "light";
    "light" === e && (t = "dark"), a.changeTheme(t), u.default.setTheme(t);
  };
o.addHandlerRenderList(m),
  o.addHandlerCheck(f),
  o.addHandlerDownload(g),
  o.addHandlerEditList(h),
  o.addHandlerClear(p),
  o.addHandlerReset(b),
  _.addHandlerClear(p),
  _.addHandlerAddItem(L),
  _.addHandlerRemoveItem(v),
  _.addHandlerSubmit(E),
  _.addHandlerDragover(),
  _.addHandlerDragstart(),
  _.addHandlerDragend(),
  _.addHandlerOnFocus(),
  _.addHandlerOnBlur(),
  u.default.addHandlerChangeTheme(H),
  u.default.setTheme(a.state.theme);
//# sourceMappingURL=shoppingList.f5141cb2.js.map
