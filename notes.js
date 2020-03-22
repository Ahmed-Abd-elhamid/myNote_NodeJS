const fs = require ('fs');
const chalk = require ('chalk');

function getNotes(title){
    const notes = loadNotes();

    const newnotes = notes.filter( (value)=>value.title === title);

    if ( newnotes.length === 0 ){
        console.log(chalk.red.inverse("No Note found!"));
    }else{
        console.log(chalk.green.inverse("Note Found!"));
        return newnotes;
}
}

function listNotes(){
    const notes = loadNotes();
    return notes;
}
function addNotes(title, body){
    const notes = loadNotes();

    const duplicated = notes.filter( (value) => value.title == title);
    console.log(duplicated)
    //OR

    // let duplicated = false;
    // for (let value of notes){
    //     if(value.title == title){
    //         duplicated = true;
    //     }
    // }]
    if(duplicated.length === 0){
        const obj = {
            title: title,
            body: body, 
        }
        notes.push(obj);
        saveNotes(notes);
        fs.appendFileSync("myNote.txt", title+": \n\n"+body+"\n");
        console.log(chalk.green.inverse("Note Added!"));
    }else{
        console.log(chalk.red.inverse("Duplicated Note!"));
    }
}

function removeNotes(title){
    const notes = loadNotes();

    const newnotes = notes.filter( (value)=>value.title !== title);

    if ( notes.length == newnotes.length){
        console.log(chalk.red.inverse("No Note found!"));
    }else{
        console.log(chalk.green.inverse("Note Removed!"));
        saveNotes(newnotes);
    }
}

function loadNotes(){
    try{
        const dataBuffer = fs.readFileSync("myNote.json");
        const datajson = dataBuffer.toString();
        const obj = JSON.parse(datajson);
        return obj;
    }catch(e){
        // console.log(e);
        return [];
    }
}

function saveNotes(arrayObj){
    const json = JSON.stringify(arrayObj);
    fs.writeFileSync("myNote.json", json);
}


module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
}