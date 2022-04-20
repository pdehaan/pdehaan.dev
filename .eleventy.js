module.exports = function (eleventyConfig) {
  // Import all our custom configs
  require("./config/filters")(eleventyConfig);
  require("./config/plugins")(eleventyConfig);
  require("./config/passthrough")(eleventyConfig);
  require("./config/collections")(eleventyConfig);
  require("./config/engines")(eleventyConfig);

  return {
    templateFormats: ["md", "njk", "html", "liquid"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",

    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "www",
    },
  };
};
