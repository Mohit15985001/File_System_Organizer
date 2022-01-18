// File System Organizer//
//Features of the Project -
//If you have numerous Files in a folder and they are not Properly arranged
//So you can use this tool to arrange them in specific directory according to their extension
// like text files will go into text File Folder .exe files will go into application folder and so on
// so at the end you will have a arranged set of files in specific folders
let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
    documents: [
      "docx",
      "doc",
      "pdf",
      "xlsx",
      "xls",
      "odt",
      "ods",
      "odp",
      "odg",
      "odf",
      "txt",
      "ps",
      "tex",
    ],
    app: ["exe", "dmg", "pkg", "deb"],
  };
  
const fs = require("fs");
const { type } = require("os");
const path = require("path");

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
            organizeFn(inputArr[1]);
            // console.log("organize Implemented");
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
function organizeFn(dirpath){
    if(dirpath==undefined){
        console.log("Please enter a valid Directory path");
        return;
    }else{
        let doesExist= fs.existsSync(dirpath);
        // console.log(doesExist);
        if(doesExist==true){
            despath=path.join(dirpath,"organized_files");
            if(fs.existsSync(despath)==false){
                fs.mkdirSync(despath);
            }else{
                console.log("this folder already exist");
            }
        }else{
            console.log("please enter a valid path");
        }
    }
    organizeHelper(dirpath,despath);
}
function organizeHelper(src,dest){
    let childNames= fs.readdirSync(src)
    for( let i=0;i<childNames.length;i++){
        let childAddress = path.join(src,childNames[i])
        let isFile = fs.lstatSync(childAddress).isFile()
        // console.log(childAddress+" ->" +isFile)
        if(isFile==true){
            let filecategory = getCategory(childNames[i]);
            console.log(childNames[i]+" belongs to "+ filecategory)
            sendFiles(childAddress,dest,filecategory)
        }
    }
}
function getCategory(name){
    let ext = path.extname(name)
    ext=ext.slice(1)
    // console.log(ext)
    for(let type in types){
        let cTypeArr = types[type];
        // console.log(cTypeArr);
        for(let i=0;i<cTypeArr.length;i++){
            if(ext==cTypeArr[i]){
                return type;
            }
        }
    }
    return "others"
}
function sendFiles(srcFilePath, dest ,filecategory){
    let catPath = path.join(dest,filecategory)
    if(fs.existsSync(catPath)==false){
        fs.mkdirSync(catPath)
    }
    let filename = path.basename(srcFilePath)
    let destFilePath = path.join(catPath, filename)

    fs.copyFileSync(srcFilePath,destFilePath)
    fs.unlinkSync(srcFilePath)
    console.log(filename+" is copied to"+ filecategory)

}
