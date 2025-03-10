import React from 'react';
import './App.css';
import ProductRow from './components/ProductRow';
import jsondata from './data.json';
import FilterableProductTable from './components/FilterableProductTable';

function App() {
  return (
    <div className="App">
      <FilterableProductTable products={jsondata.data} />
    </div>
  );
}

export default App;
