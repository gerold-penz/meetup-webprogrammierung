"use strict";

const markdownIt = require("markdown-it");


module.exports = function(eleventyConfig) {
    
    // Markdown konfigurieren
    const md = markdownIt({
        html: true,
        xhtmlOut: true,
        linkify: true
    })
    eleventyConfig.setLibrary("md", md)


    // Fertig
    return {
        dir: {
            input: "src",
            output: "dist"
        },
        templateFormats: ["md", "njk", "css", "js", "gif", "png", "jpg"]
    }
    
}