"use strict";

require("core-js/modules/es7.promise.finally");

const sayHi = () => {
  console.log("hello babel");
};

Promise.resolve().finally();
sayHi();