const fs = require("fs");

// //Reading a file

// let fileContent = fs.readFileSync('f1.txt')

// console.log('data of file 1-->'+ fileContent)

// //writing in a file or creating a new file

// fs.writeFileSync('f2.txt', 'This is a file 2 ')

// console.log('file has been written')

// //append a new file

// fs.appendFileSync('f3.txt', ' This is a updated file')
// console.log('file has been updated')

// //delete a file

// fs.unlinkSync('f3.txt');
// console.log('file has been deleted');

//Directories using fs filesystem

//create directory

// fs.mkdirSync('myDirectory2');

//check the content of the directory

// let folderPath =
//   "C:/Users/vaibh/Desktop/Node.js-Course-By-Mrinal-Scalar/Node Module System/myDirectory";

// let folderContent = fs.readdirSync(folderPath);

// console.log("Folder Content: " , folderContent);


//to check whether the directory exists or not

// let checkDirec = fs.existsSync('myDirectory')
// console.log(checkDirec);

// delete or remove the directory

  let removeDirectory = fs.rmdirSync('myDirectory2');

  console.log(removeDirectory);


