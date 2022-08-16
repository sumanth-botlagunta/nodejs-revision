const fs = require('fs');

const readstream = fs.createReadStream('./docs/file3.txt',{encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/file5.txt');

readstream.on('data', chunk => {
    // console.log("<---New Chunk: ");
    // console.log(chunk);
    writeStream.write("\n<---New Chunk:  \n");
    writeStream.write(chunk);
})

readstream.pipe(writeStream);