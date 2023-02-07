import { Transform } from 'stream'
import { createReadStream, createWriteStream } from 'fs'

const rs = createReadStream('./access.log')
const ws = createWriteStream('./ips')


const transformStream = new Transform({
    transform(chunk, encoding, callback) {
        const edditedChunk = chunk.toString().replace(/((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}/g, '*.*.*.*')
        this.push(edditedChunk)

        callback()
    }
})

rs.pipe(transformStream).pipe(ws)