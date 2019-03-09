module.exports = function (eleventyConfig) {

    // // Kopiere Ordner
    // eleventyConfig.addPassthroughCopy("./node_modules/highlight.js")


    return {
        dir: {
            input: "src",
            output: "dist"
        },
        templateFormats: [
            "md",
            "css",
            "js"
        ],
        passthroughFileCopy: true
    }
    
}