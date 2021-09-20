module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass/");
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/js");
  // eleventyConfig.addPassthroughCopy("./src/img");
  
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
