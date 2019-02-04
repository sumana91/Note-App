const fs = require('fs');

var originalNote = {
  title : 'sometitle',
  body : 'somebody'
};

var originalNoteString = JSON.stringify(originalNote);
console.log(originalNoteString);

fs.writeFileSync('note.json', originalNoteString);

var noteString = fs.readFileSync('note.json');
var notes = JSON.parse(noteString);
console.log(notes);
console.log(typeof notes);
