const {getDefaultConfig} = require("metro-config");

module.exports = (async () => {
  const {
    resolver: {sourceExts},
  } = await getDefaultConfig();
  return {
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          babelTransformerPath: require.resolve("./transformer.js"),
          experimentalImportSupport: false,
          inlineRequires: true,
        },
        resolver: {
          sourceExts: [...sourceExts, "scss", "sass"],
        },
      }),
    },
  };
})();
