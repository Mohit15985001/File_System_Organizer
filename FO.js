// File System Organizer//
//Features of the Project -
//If you have numerous Files in a folder and they are not Properly arranged
//So you can use this tool to arrange them in specific directory according to their extension
// like text files will go into text File Folder .exe files will go into application folder and so on
// so at the end you will have a arranged set of files in specific folders


let inputArr = process.argv.slice(2);

let command = inputArr[0];

// console.log(inputArr);
// console.log(command);

// console.log(input)

switch(command){
    case "tree" :
        console.log("tree Implemented");
        break;
        case "organize" :
            console.log("organize Implemented");
            break;
        case "help":
            // console.log("Help Implemented");
            helpfn()
            break;

        default : 
            console.log("Please Enter a valid command");
            break;
}

function helpfn(){
    console.log(`List of all the Commands-
    1) Tree Command - node FO.js tree <dirname>
    2) Organize Command- node FO.js organize <dirname>
    3) Help Command - node FO.js help`)
}