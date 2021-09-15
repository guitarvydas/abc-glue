var transpiler = require('./transpiler.js');

function main () {
    var abc = transpiler.ftranspile ('test.abc', 'abc.ohm', 'abc.glue', 'abc');
}

main ();
