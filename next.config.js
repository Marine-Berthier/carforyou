// eslint-disable-next-line import/no-internal-modules
module.exports = {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(jpe?g|png|gif|ico|svg)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name]-[hash].[ext]",
            outputPath: `${options.isServer ? "../" : ""}static/assets/`,
            publicPath: "_next/static/assets/",
            esModule: false,
          },
        },
      ],
    })

    return config
  },
}
