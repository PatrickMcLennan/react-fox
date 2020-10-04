const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: path.resolve(`src/index.ts`),
  output: {
    path: path.resolve(`dist`),
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|jsx|tsx)$/,
        exclude: /(node_modules)/,
        use: `swc-loader`,
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: "file-loader",
      },
      {
        test: /\.(glb|gltf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "models/",
            },
          },
        ],
      },
    ],
  },
  plugins: [new Dotenv()],
  resolve: {
    extensions: [`.js`, `.ts`, `.jsx`, `.tsx`],
  },
};
