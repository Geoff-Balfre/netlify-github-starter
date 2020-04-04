
module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");

  return {
    passthroughFileCopy: true,
    dir: {
      input:     'src',
      output:    'dist',
      data:      '_data',
      includes:  '_includes',
      layouts:   '_layouts'
    }
  }

}
