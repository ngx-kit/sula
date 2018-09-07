const path = require('path');
const fs = require('fs-extra');

// Copy files
fs.copySync(path.resolve(__dirname, './'), path.resolve(__dirname, '../../dist/ui/schematics'), {
  filter: function(src, dest) {
    // const ext = src.split('.').pop();
    // return ext !== 'ts';
    return true;
  }
});

console.log('release.js finished!');
