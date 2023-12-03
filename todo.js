let command=prompt('what would you like to do???');
let arrayToDo=[];
while (command !== 'quit') {

    if (command === 'new') {

        command = prompt('Enter new todo');
        console.log(`${command} added to list`);
        arrayToDo.push(command);
    }
    else if(command==='list') {
        console.log("******");
        for(let i=0;i<arrayToDo.length;i++) {
            console.log(`${i} : ${arrayToDo[i]}`);
        }
        console.log("******");
    }
    else if(command==='delete') {
        command=prompt('Enter the index of Todo to delete');
        arrayToDo.splice(command,1);
        console.log("Todo removed");
    }
    else if(command==='quit'){
        break;
    }
    command=prompt('what would you like to do???');
}
console.log('Ok you quit the app...thanku');