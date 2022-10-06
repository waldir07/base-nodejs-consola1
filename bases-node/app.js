const {tabla} = require('../helpers/multiplicar');
const argv = require('../configs/yargs');

console.clear();
//const base = 2;


//cls
console.log(argv);
//const [,,arg3='base=5'] = process.argv;
//const [,base=5] = arg3.split('=');


tabla(argv.b,argv.l,argv.h)
    .then(tabla => console.log(tabla,'creado'))
    .catch(err => console.error(err));


