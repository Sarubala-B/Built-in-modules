const fs = require('fs');
const filePath = './example.txt';

// Create a file and write some content to it
fs.writeFile(filePath, 'Hello, World!', (err) => {
  if (err) {
    console.error('Error creating file:', err);
    return;
  }
  console.log('File created successfully.');


  // Read the file
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
    console.log('File content:', data);


    // Update the file
    fs.appendFile(filePath, '\nUpdated content!', (err) => {
      if (err) {
        console.error('Error updating file:', err);
        return;
      }
      console.log('File updated successfully.');


      // Read the updated file
      fs.readFile(filePath, 'utf8', (err, updatedData) => {
        if (err) {
          console.error('Error reading updated file:', err);
          return;
        }
        console.log('Updated file content:', updatedData);


        // // Delete the file
        // fs.unlink(filePath, (err) => {
        //   if (err) {
        //     console.error('Error deleting file:', err);
        //     return;
        //   }
        //   console.log('File deleted successfully.');
        // });


      });
    });
  });
});
