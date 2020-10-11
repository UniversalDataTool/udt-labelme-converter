const zipFolderLib = require('zip-a-folder');

class Zip {
    constructor(folderName){
        this.folderName = folderName
        this.zippedStatus = false
        this.zipFileName = folderName
    }

    async zipAFolder() {
        const folderName = this.folderName

        if(folderName.includes('/')) this.zipFileName = folderName.split('/').slice(-1)[0]
        const fileName = `${this.folderName}.zip`
        zipFolderLib.zipFolder(folderName, fileName, function(err) {
            if(err) {
                console.log('There is a problem with zipping', err);
            }
        })
        console.log(`\n===========Your folder successfully zipped===========\nYour zip: ${this.zipFileName+".zip"} is ready\nYou can find it in ${fileName}`)
    }
}


const zipAFolder = (folderName) => {
    const folder = new Zip(folderName)
    folder.zipAFolder()
}


module.exports = zipAFolder