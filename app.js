console.log("starting the app");

const fs = require('fs');
const os = require('os');
const note = require('./note.js');
const _ = require('lodash');
const yargs = require('yargs');

const titleOptions = {
  describe: 'title',
  demand: true,
  alias: 't'
}
const argv = yargs
  .command('add','Add new note', {
    title: titleOptions,
    body: {
      describe: 'body',
      demand: true,
      alias: 'b'
    }
  })
  .command('list','list all notes')
  .command('remove','remove note', {
    title: titleOptions,
  })
  .help()
  .argv;
var command = argv._[0];
console.log("command", command);

if(command === 'add') {
  var note1 = note.addNote(argv.title, argv.body);
  if(note1) {
    console.log("note exists");
  } else {
    console.log("note doesnt exist");
  }
} else if (command === 'list') {
  var allNotes = note.getAll();
  console.log(allNotes);
} else if (command ==='read'){
  var note2 = note.read(argv.title);
  if(note2) {
    console.log('note found');
  } else {
    console.log('note not found');
  }
} else if (command === 'remove'){
  var noteremoved = note.remove(argv.title);
  var message = noteremoved ? 'note removed' : 'not removed';
  console.log(message);
} else {
  console.log('command not found');
}
