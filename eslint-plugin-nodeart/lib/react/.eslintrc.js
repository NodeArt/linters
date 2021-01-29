module.exports = {
  extends: ["plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
  },
  plugins: ["react"],
  settings: {
    react: {
      version: "999.999.999",
    },
  },
};
