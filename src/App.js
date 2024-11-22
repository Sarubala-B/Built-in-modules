// import React from 'react';
// function App() {
//   return (
//     <div className="App">
//       <h1>React App</h1>
//       {/* React code goes here */}
//     </div>
//   );
// }
// export default App;


// Function that returns a promise
const delayedMessage = (message, delay) => {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      return reject('Delay must be a non-negative number.');
    }
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
};


delayedMessage('Hello after 2 seconds!', 2000)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
