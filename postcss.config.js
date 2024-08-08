// postcss.config.js
import postcssImport from "postcss-import";
import postcssNested from "postcss-nested";
import cssnano from "cssnano";

export default {
  plugins: [
    postcssImport(),
    postcssNested(),
    cssnano({
      preset: "default",
    }),
  ],
};
