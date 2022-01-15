let input = process.argv[2]

let command = input
// console.log(input)

switch(command){
    case "tree" :
        console.log("tree Implemented");
        break;
        case "organize" :
            console.log("organize Implemented");
            break;
        case "Help":
            console.log("Help Implemented");
            break;

        default : 
            console.log("Please Enter a valid command");
            break;
}