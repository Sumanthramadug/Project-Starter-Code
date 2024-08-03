const { override, addWebpackAlias, overrideDevServer } = require('customize-cra');
const path = require('path');

const devServerConfig = () => (config) => {
  config.allowedHosts = ['localhost', '127.0.0.1'];
  return config;
};

module.exports = {
  webpack: override(
    // Add other webpack configuration overrides here, if needed
    addWebpackAlias({
      ['@']: path.resolve(__dirname, 'src')
    })
  ),
  devServer: overrideDevServer(devServerConfig())
};
