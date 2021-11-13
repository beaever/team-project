const withPlugins = require("next-compose-plugins");
const sass = require("@zeit/next-sass");
const css = require("@zeit/next-css");
const withImages = require("next-images");
module.exports = withImages();

const nextConfig = {
	webpack: function (config) {
		config.module.rules.push([
			{
				test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
				use: {
					loader: "url-loader",
					options: {
						limit: 100000,
						name: "[name].[ext]",
					},
				},
			},
			{
				test: /\.(jpe?g|png|gif)$/i,
				use: {
					loader: "url-loader",
				},
			},
		]);
		return config;
	},
};

module.exports = withImages();

module.exports = withPlugins(
	[
		[css],
		[
			sass,
			{
				cssModules: true,
			},
		],
	],
	nextConfig,
);

module.exports = {
	typescript: {
		ignoreBuildErrors: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	experimental: {
		async redirects() {
			return [
				{ source: "/", destination: "/", permanent: true }, // Root Path 변경
			];
		},
	},
	env: {},
};
