const config = {
  babel: {
    plugins: [
      "@babel/plugin-proposal-nullish-coalescing-operator",
      "@babel/plugin-proposal-optional-chaining",
      "@babel/plugin-transform-shorthand-properties",
    ],
  },
  webpack: {
    configure: {
      experiments: {
        topLevelAwait: true,
      },
    },
  },
};
export default config;
