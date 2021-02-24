const recentChanges = require('eleventy-plugin-recent-changes');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(recentChanges, {
    commits: 30, // The maxmium number of commits to add to the collection, before filtering.
  });

  return {
    dir: {
      output: "docs",
      input: "src/content"
  }
  };
};