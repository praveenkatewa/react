import { useEffect } from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [product, setProduct] = useState([]);

  async function APIFetch() {
    const API = await fetch("https://dummyjson.com/products");
    const JSON_DATA = await API.json();
    setProduct(JSON_DATA.products);
  }

  useEffect(() => {
    APIFetch();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row m-5">
          <div className="col-8">
            <input type="search" placeholder="Search Your Item" className="form-control " />
          </div>
          <div className="col-4">
            <button className="btn btn-primary">Search</button>
          </div>
        </div>
        <div className="row">
          {product.map((item) => (
            <div className="card" style={{ width: "18rem" }}>
              <img src={item.thumbnail} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5>{item.title}</h5>
                <h3>Rs.{item.price}</h3>
                <p className="card-text">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
