import { readFileSync, writeFileSync } from "fs"
import { join } from "path"

function read(filename){
    return JSON.parse(readFileSync(join(process.cwd(),"vazifa", "src", "database", `${filename}.json`), "utf-8"))
}
function write(filename, data){
    writeFileSync(join(process.cwd(),"vazifa", "src", "database", `${filename}.json`), JSON.stringify(data,null,4))
}

export default {
    read,
    write
}