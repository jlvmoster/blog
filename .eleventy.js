module.exports = function (eleventyConfig) {
  // Disable automatic use of .gitignore
  eleventyConfig.setUseGitIgnore(false);

  // Copy favicon to route of /_site
  eleventyConfig.addPassthroughCopy('./src/favicon.ico');

  return {
    dir: {
      input: 'src',
    },
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
  };
};
