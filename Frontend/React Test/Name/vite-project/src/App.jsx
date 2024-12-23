// eslint-disable-next-line no-unused-vars
import React from 'react';
import Name from './Component/Name';  // Import the Greeting component

function App() {
  return (
    <div>
      <Name name="John" />  {/* Pass the name prop */}
    </div>
  );
}

export default App;
