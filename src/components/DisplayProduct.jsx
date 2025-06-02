import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFetchApi } from '../hooks/FetchApiHook';


export const DisplayProduct = () => {

  const {res,loader}=useFetchApi("https://node5.onrender.com/product/getall")


  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">PRODUCTS</h1>
      <div className="row">
        {res?.map((product, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{product.price}</h6>
                <p className="card-text">
                  <strong>Color:</strong> {product.colors}<br />
                  <strong>Description:</strong> {product.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
