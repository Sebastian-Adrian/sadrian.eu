require('dotenv').config({
  path: require('path').resolve(__dirname, '.env')
})
module.exports = {
  key: process.env.GITHUB_KEY,
};