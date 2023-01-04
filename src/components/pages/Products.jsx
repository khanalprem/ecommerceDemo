import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import Loader from "../Loader";

const Products = () => {
  const [data , setData] = useState([]);
  const [filter , setFilter] = useState(data);
  const [loading , setLoading] = useState(false);
  const [active , setActive] = useState('');

  useEffect(() => {
     const getProducts =  async () => {
      setLoading(true)
      const response = await fetch("https://fakestoreapi.com/products");
      setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
     }
     getProducts();
  },[]);

  const productFilter = (cat) => {
    const updateProdcuts = data.filter((item => item.category === cat));
    setFilter(updateProdcuts);
    setActive(cat);
  }

  const isActive = (type) => (active === type) ? 'active' : '';

  const ShowProducts = () => {
    return (
      <>
      <div className="is-flex is-center is-align-center col-gap-16 flex-wrap mb-24 tabs">
          <button className={`btn btn-sm btn-secondary ${isActive('')}`} onClick = {() => { setFilter(data) 
            setActive('')}}>All</button>
          <button className={`btn btn-sm btn-secondary ${isActive(`men's clothing`)}`} onClick = {() => productFilter("men's clothing")}>Men's Clothing</button>
          <button className={`btn btn-sm btn-secondary ${isActive(`women's clothing`)}`} onClick = {() => productFilter("women's clothing")}>Women's Clothing</button>
          <button className={`btn btn-sm btn-secondary ${isActive(`jewelery`)}`} onClick = {() => productFilter("jewelery")}>Jewelery</button>
          <button className={`btn btn-sm btn-secondary ${isActive(`electronics`)}`} onClick = {() => productFilter("electronics")}>Electronics</button>
      </div>
      <div className="grid grid-cols_4">
          {filter.map((product) => {
            return(
              <div className="product-card radius-8 pd-16 text-center" key={product.id}>
              <figure className="product-card_figure">
                <img src={product.image} alt = {product.title} />
              </figure>
              <div className="product-card_content mt-20">
                <h4>{product.title.substring(0, 20)}</h4>
                <div className="my-16 .fs-h4">${product.price}</div>
                <Link to={`/products/${product.id}`} className="btn btn-sm btn-primary is-capitalize">Buy now</Link>
              </div>
            </div>
            )
          })}
      </div>
    </>
    )
  }

  return (
    <div className="latest products py-40">
      <div className="container">
        <div className="text-center section-title mb-40">
          <h2>Latest Products</h2>
        </div>
        {loading ? <Loader /> : <ShowProducts />}
      </div>
    </div>
  );
};

export default Products;
