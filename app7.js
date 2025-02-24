const fs = require('fs');
const zlib = require('zlib');
//acum facem invers, luam din sursa comprimata si scriem in sursa de iesire, decomprimat
const gunzip = zlib.createGunzip();

const readStream = fs.createReadStream('./example2.txt.gz');
const writeStream = fs.createWriteStream('uncompressed.txt');
readStream.pipe(gunzip).pipe(writeStream);
