const crypto = require('crypto');

module.exports = function () {
  let buildNum =
    process.env.TRAVIS_JOB_NUMBER ||
    process.env.BITBUCKET_BUILD_NUMBER ||
    process.env.CIRCLE_BUILD_NUM ||
    process.env.GITHUB_RUN_ID ||
    process.env.CI_JOB_ID;
  if (process.env.GITHUB_RUN_ID) {
    buildNum = `${buildNum}${process.env.GITHUB_JOB}`;
  }
  let prefix = process.env.BROWSERSTACK_BUILD_NAME_PREFIX;
  if (buildNum && prefix) {
    return prefix + '_' + buildNum;
  }
  return buildNum || crypto.randomBytes(10).toString('hex');
};
