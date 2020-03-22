const chalk = require('chalk');
const yargs = require('yargs');
const validator = require('validator');
const Note = require('./notes.js');

// console.log(getNotes());
// console.log(process.argv[2]);
// const command = process.argv[2];
// console.log(process.argv);

// console.log(Note);

yargs.version('1.1.0');

yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title:{
            describe: "note title",
            demandOption: true,
            type: 'string',
        },
        body:{
            describe: "note body",
            demandOption: true,
            type: 'string',            
        }
    },
    handler(argv){
        // console.log(argv.title, argv.body);
        Note.addNotes(argv.title,argv.body);
    }
});

yargs.command({
    command: 'read',
    describe: 'read notes',
    builder: {
        title:{
            describe: "note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        console.log(Note.getNotes(argv.title));
    }
});

yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title:{
            describe: "note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        Note.removeNotes(argv.title);
    }
});

yargs.command({
    command: 'list',
    describe: 'list notes',
    handler(){
        console.log(Note.listNotes());
    }
});




yargs.parse();

// console.log(yargs.argv);


// if (command === 'add'){ 
//     console.log(chalk.green("Adding note!."));
// }else if (command === 'remove'){
//     console.log(chalk.red("Removing note!."));
// } 