import React from 'react';

function Output({ result }) {
  return (
    <div>
      <h2>Output Card</h2>
      {result && (
        <div>
          <h3>Your Fitness Plan:</h3>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}

export default Output;