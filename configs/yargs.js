const argv = require('yargs')
                .options({
                    'b': {
                        alias: 'base',
                        type: 'number',
                        demandOption: true
                    },
                    'l': {
                        alias: 'listar',
                        type: 'boolean',
                        demandOption: true,
                        default:false
                    },
                    'h': {
                        alias: 'hasta',
                        type: 'number',
                        default:10
                    }
                })
                .check((argv,options) => {
                    //console.log('yargs',argv);
                    if(isNaN(argv.base)){
                        throw 'La base tiene que ser un número';
                    }
                    if(isNaN(argv.hasta)){
                        throw 'El "Hasta" debe ser un número';
                    }
                    return true;
                })
                .argv;

module.exports = argv;