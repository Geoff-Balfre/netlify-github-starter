module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");

  return {
    passthroughFileCopy: true,
    dir: {
      input:     'src',
      output:    'dist'
    }
  }

}
