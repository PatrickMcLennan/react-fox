module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    ".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform",
    "\\.(png|jpg|jpeg)$": "jest-file-loader",
  },
};
