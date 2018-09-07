const path = require('path');
const fs = require('fs-extra');

const pkg = require('../../package.json');

// Generate package.json
const distPkgPath  = path.resolve(__dirname, '../../dist/ui/package.json');
const blueprint = fs.readFileSync(distPkgPath, 'utf-8');
const result = blueprint
  .replace(/0\.0\.0\-PLACEHOLDER/g, pkg.version)
  .replace(/0\.0\.0\-KIT-PLACEHOLDER/g, pkg.dependencies["@ngx-kit/core"]);
fs.writeFileSync(distPkgPath, result);
// Copy themes
fs.copySync(path.resolve(__dirname, './src/themes'), path.resolve(__dirname, '../../dist/ui/themes'));
// Copy README
fs.copySync(path.resolve(__dirname, '../../README.md'), path.resolve(__dirname, '../../dist/ui/README.md'));

console.log('release.js finished!');
