// import { useEffect } from "react";
// import "./App.css";
// import { useState } from "react";

// function App() {
//   const [product, setProduct] = useState([]);

//   async function APIFetch() {
//     const API = await fetch("https://dummyjson.com/products");
//     const JSON_DATA = await API.json();
//     setProduct(JSON_DATA.products);
//   }

//   useEffect(() => {
//     APIFetch();
//   }, []);

//   return (
//     <>
//       <div className="container">
//         <div className="row m-5">
//           <div className="col-8">
//             <input type="search" placeholder="Search Your Item" className="form-control " value={searchQuery}
//               onChange={handleSearch}/>
//           </div>
//           <div className="col-4">
//             <button className="btn btn-primary">Search</button>
//           </div>
//         </div>
//         <div className="row">
        
//           {product.map((item) => (
//             <div className="card" style={{ width: "18rem" }}>
//               <img src={item.thumbnail} className="card-img-top" alt="..." />
//               <div className="card-body">
//                 <h5>{item.title}</h5>
//                 <h3>Rs.{item.price}</h3>
//                 <p className="card-text">{item.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;



import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  async function APIFetch() {
    const API = await fetch("https://dummyjson.com/products");
    const JSON_DATA = await API.json();
    setProducts(JSON_DATA.products);
    setFilteredProducts(JSON_DATA.products); 
  }

  useEffect(() => {
    APIFetch();
  }, []);

  
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(query) 
    
    );
    setFilteredProducts(filtered);
  };

  return (
    <>
      <div className="container">
        <div className="row m-5">
          <div className="col-8">
            <input type="search" placeholder="Search Your Item" className="form-control" value={searchQuery}
              onChange={handleSearch} 
            />
          </div>
        </div>
        <div className="row">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <div className="card m-2" style={{ width: "18rem" }} key={item.id}>
                <img src={item.thumbnail} className="card-img-top" alt={item.title} />
                <div className="card-body">
                  <h5>{item.title}</h5>
                  <h3>Rs.{item.price}</h3>
                  <p className="card-text">{item.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;

