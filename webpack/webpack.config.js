const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const packageJson = require('../package.json');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

function getEnvVariables(envVarsPath) {
  if (fs.existsSync(envVarsPath)) {
    const envVarsRaw = dotenv.config({ path: envVarsPath }).parsed;
    const envVars = Object.keys(envVarsRaw).reduce((prev, next) => {
      prev[`process.env.${next}`] = JSON.stringify(envVarsRaw[next]);
      return prev;
    }, {});
    return envVars;
  }
  return {};
}

module.exports = (envs) => {
  const { env, mfe } = envs;

  // Load environment variables
  const commonVarsPath = path.resolve(__dirname, '..', 'env/.env');
  const envVarsPath = path.resolve(__dirname, '..', `env/.env.${env}`);
  const commonVars = getEnvVariables(commonVarsPath);
  const envVars = getEnvVariables(envVarsPath);

  // Load configs
  const envConfig = require(`./webpack.${env}.js`);
  let config = merge(commonConfig, envConfig);

  config = {
    ...config,
    plugins: [
      ...(config.plugins ?? []),
      new webpack.DefinePlugin({
        ...commonVars,
        ...envVars,
      }),
      ...(mfe === 'true'
        ? [
            new ModuleFederationPlugin({
              name: 'mfe-dashboard',
              library: {
                type: 'var',
                name: 'mfeDashboard',
              },
              filename: 'remoteEntry.js',
              exposes: {
                './DashboardApp': './src/bootstrap',
              },
              shared: packageJson.dependencies,
            }),
          ]
        : []),
    ],
  };

  return config;
};
