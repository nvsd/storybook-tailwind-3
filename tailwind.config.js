const { join } = require('path');

module.exports = {
  content: [join(__dirname, './src/**/*.(js|jsx|ts|tsx)')],
  theme: {},
  plugins: [],
};
