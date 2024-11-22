const fs = require('fs');

const readableStream = fs.createReadStream('example.txt', { encoding: 'utf8' });
readableStream.on('data', (stream) => {
    console.log(`Received ${stream.length} bytes of data.`);
    console.log(stream);
});

readableStream.on('end', () => {
    console.log('No more data.');
});

const writableStream = fs.createWriteStream('output.txt');

writableStream.write('Hello, World!\n');
writableStream.write('This is a writable stream.\n');
writableStream.end(); // Close the stream

writableStream.on('finish', () => {
    console.log('All data has been written.');
});
