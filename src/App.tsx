import React from 'react';
import Product from './product.tsx';
const App: React.FC = () => {
  return (
    <div>
      <h1>Hello, TypeScript!</h1>
      <Product id={6} />
    </div>
  );
}

export default App;
