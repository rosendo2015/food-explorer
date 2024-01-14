const fs = require("fs")
const path = require("path")
const uploadFile = require("../config/upload")

class DiskStorage{
    async saveFile(file){
        fs.promises.raname(
            path.resolve(uploadConfig.TMP_FOLDER, file),
            path.resolve(uploadConfig.UPLOADS_FOLDER, file)
        )
        return file;
    }
    async deleteFile(file){
        const filePath = path.resolve(uploadConfig.UPLOADS_FOLDER, file)
        try{
            await fs.promises.stat(filePath)
        }catch{
            return
        }
    }   
}
module.exports = DiskStorage