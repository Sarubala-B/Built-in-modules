// server/pathOperations.js
const path = require('path');

// Define some example paths
const directoryPath = '/user/local/bin';
const fileName = 'example.txt';

// Join paths
const fullPath = path.join(directoryPath, fileName);
console.log('Full path:', fullPath);

// Get the directory name
const dirName = path.dirname(fullPath);
console.log('Directory name:', dirName);

// Get the base name (file name)
const baseName = path.basename(fullPath);
console.log('Base name:', baseName);

// Get the file extension
const extName = path.extname(fullPath);
console.log('Extension name:', extName);

// Normalized paths
const normalizedPath = path.normalize(fullPath);
console.log('NormalizedPath:',normalizedPath); 

// Joined paths
const joinedPath = path.join(fullPath);
console.log('JoinedPath:',joinedPath); 

// Resolving paths
const resolvedPath = path.resolve(fullPath);
console.log('ResolvedPath:',resolvedPath); 

//parsing paths
const parsedPath = path.parse(fullPath);
console.log('ParsedPath:',parsedPath);

