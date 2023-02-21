const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
myFileWriter(fileName,fileContent)

}
fs.writeFile("./index.txt","Hello World")

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.readFile(fileName)
		.then(function (result) {
			console.log("" + result);
		})
		.catch(function (error) {
			console.log(error);
		});
}
myFileReader("./index.txt")


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.appendFile(fileName,fileContent)
	
}
myFileUpdater("./index.txt"," This is the Update in the file")
const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.unlink(fileName)
	
}
myFileDeleter("./index.txt")


module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }