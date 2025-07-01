import fs from 'fs';
const filePath = "sample.txt";

//read file
fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
        console.log("Error reading file:", err);
        return;
    }
    console.log(data);
});

//write file

fs.writeFile(filePath, "hello, writefile",(err, data) => {
    if (err) {
        console.log("Error writing file:", err);
        return;
    }
    console.log("File written successfully", data);
});

fs.appendFile("sample.txt", "\nAppended new Text", (err) => {
    if(err) throw err;
    console.log("Text appended!");
});

fs.unlink("sample.txt", (err)=>{  // delete file
    if(err) throw err;
    console.log("File deleted!"); 
});