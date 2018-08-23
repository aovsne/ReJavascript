var shigoto = ['gotta buy some toilet paper']
var todo = prompt('what do u wanna do');
while(todo !== 'quit'){
    if(todo == 'list'){
        printList();
    }
    else if(todo == 'new'){
        addList();
    }
    else if(todo == 'delete'){
        deleteList();
    }
    todo = prompt('what do u wanna do')
}
console.log('you quit the app')

function printList(){
    shigoto.forEach(function(e, index){
        console.log(index + ':' +  e)
    })
}
function addList(){
    var ask = prompt('what do u wanna add')
    shigoto.push(ask)
    console.log(ask + ' added to the list')

}
function deleteList(){
    var index = prompt('what index u wanna delete')
    shigoto.splice(index,1)
    console.log('removed')
}