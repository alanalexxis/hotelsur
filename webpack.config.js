// webpack.config.js

export const module = {
  rules: [
    {
      test: /\.pem$/,
      use: "raw-loader",
    },
    // ...otras reglas
  ],
};
