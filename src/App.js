import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import ProductList from './pages/ProductList';
import ErrorMessage from "./pages/components/ErrorMessage";

function App() {

      return (
          <div className="App">
              <Provider store={store}>
                  <ErrorMessage />
                  <ProductList />                  
              </Provider>
        </div>
      );
}

export default App;


//productPage - list of product's cards
//productCard - list of subproducts
