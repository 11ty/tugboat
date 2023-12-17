const pluginWebc = require("@11ty/eleventy-plugin-webc");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const { eleventyImagePlugin } = require("@11ty/eleventy-img");
const emojiShortName = require("emoji-short-name");
const {parseHTML} = require("linkedom");

module.exports = function(eleventyConfig) {
	eleventyConfig.ignores.add("./README.md");
	eleventyConfig.addWatchTarget("./_components/**/*.css");

	eleventyConfig.addPlugin(pluginSyntaxHighlight, {
		preAttributes: {
			"tabindex": "0"
		}
	});

	eleventyConfig.addPlugin(pluginWebc, {
		components: [
			"./_components/**/*.webc",
			"npm:@11ty/eleventy-img/*.webc",
			"npm:@11ty/is-land/*.webc"
		]
	});

	eleventyConfig.addPlugin(eleventyImagePlugin, {
		formats: ["webp", "jpeg"],
		urlPath: "/img/",

		defaultAttributes: {
			loading: "lazy",
			decoding: "async"
		}
	});

	eleventyConfig.setServerOptions({
		domDiff: false
	});

	eleventyConfig.addJavaScriptFunction("emojiShortName", (emoji) => {
		return emojiShortName[emoji];
	})

	eleventyConfig.addJavaScriptFunction("selectFromHtml", (html, selector) => {
		const { document } = parseHTML(html);
		return document.querySelectorAll(selector);
	});
};