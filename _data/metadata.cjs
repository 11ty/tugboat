const pkg = require("../package.json");

module.exports = {
	// Feel free to override these, they are pulling from package.json for default values.
	title: "Tugboat" || pkg.name,
	description: "" || pkg.description,
	language: "en",
	repository: "https://github.com/11ty/tugboat/blob/main/",
};