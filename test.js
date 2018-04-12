const copydir = require('copy-dir');
const path = require('path');
const fs = require('fs');
const fontDir = path.resolve(__dirname, './_site/fonts');
if (!fs.existsSync(fontDir)) {
  fs.mkdirSync(fontDir);
}

copydir.sync('./site/fonts', './_site/fonts');
