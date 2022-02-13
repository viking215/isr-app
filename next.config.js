module.exports = {
	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.(graphql|gql)$/,
			exclude: /node_modules/,
			loader: "graphql-tag/loader",
		});

		return config;
	},
	async redirects() {
		return [
			{
				source: "/",
				destination: "/tasks",
				permanent: true,
			},
		];
	},
	images: {
		domains: ['encrypted-tbn0.gstatic.com'],
	},
};
