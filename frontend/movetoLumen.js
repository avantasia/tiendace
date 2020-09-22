var shell = require('shelljs');

shell.cp('-R', 'dist/*', '../public');
shell.cp('-R', 'dist/index.html','../views');

