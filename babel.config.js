module.exports = function(api){
    api.cache(true)
    const presets = [
        ["@babel/env", {
          targets: {
            ie:"10",
            edge: "17",
            firefox: "60",
            chrome: "67",
            safari: "11.1"
          },
          useBuiltIns: "usage"
        }]
      ];
      const plugins = [
        "transform-member-expression-literals",
        "transform-property-literals",
        "@babel/plugin-transform-reserved-words",
        "@babel/plugin-transform-property-mutators"
      ];
      return {
        presets,
        plugins
      }
}

