const htmlmin = require('html-minifier');

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
module.exports = function (eleventyConfig) {
  // Disable automatic use of .gitignore
  eleventyConfig.setUseGitIgnore(false);

  // Copy favicon to route of /_site
  eleventyConfig.addPassthroughCopy('./src/favicon.ico');

  // Minify html output for production build
  process.env.NODE_ENV === 'production' &&
    eleventyConfig.addTransform('htmlmin', async function (content) {
      if (this.page.outputPath && this.page.outputPath.endsWith('.html')) {
        return htmlmin.minify(content, {
          collapseWhitespace: true,
          removeComments: true,
          useShortDoctype: true,
        });
      }
      return content;
    });

  return {
    dir: {
      input: 'src',
    },
    htmlTemplateEngine: 'njk',
  };
};
