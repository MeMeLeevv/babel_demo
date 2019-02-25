"use strict";

var foo = Object.defineProperties({}, {
  bar: {
    get: function get() {
      return this._bar;
    },
    set: function set(value) {
      this._bar = value;
    },
    configurable: true,
    enumerable: true
  }
});