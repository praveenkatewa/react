import React, { useEffect, useState } from "react";

function ApiFetching() {
  const [product, setproduct] = useState([]);

  
  async function FetchApi() {
    const APIDATA = await fetch("https://dummyjson.com/products");
    const JSON_DATA = await APIDATA.json();

    setproduct(JSON_DATA.products);
  }
  console.log(product, ">>>>>>product<<<<<<<");

  useEffect(() => {
    FetchApi();
  }, []);

  return (
    <>
    {product.map((item)=>(

      <div class="card" style={{ width: "18rem" }}>
        <img src={item.thumbnail} class="card-img-top" alt="..." />
        <div class="card-body">
          <h6>{item.title}</h6>
          <p class="card-text">
            {item.description}
          </p>
        </div>
      </div>

    ))}
    </>
  );
}

export default ApiFetching;