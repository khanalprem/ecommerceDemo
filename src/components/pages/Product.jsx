import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/action";
import { AiFillStar } from "react-icons/ai";
import Loader from "../Loader";
import Counter from "../Counter";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProducts();
  }, []);

  const updateQuantity = (newQuantity) => {
    setQuantity(newQuantity);
  };
  const dispacth = useDispatch();
  const addProduct = () => {
    dispacth(addCart(product));
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="col-two">
          <div className="product-details_figure">
            <figure>
              <img src={product.image} alt={product.title} />
            </figure>
          </div>
          <div className="product-details_content">
            <h2>{product.title}</h2>

            <p>
              <span className="mr-8 is-capitalize ff-medium">
                {product.category}
              </span>
              Rating {product.rating && product.rating.rate}
              <AiFillStar />
            </p>
            <div className="product-price fs-h2 mt-16">$ {product.price}</div>
            <div className="product-des mt-16">
              <p>{product.description}</p>
            </div>
            <Counter quantity={quantity} updateQuantity={updateQuantity} />
            <div className="is-flex is-start is-align-center flex-wrap col-gap-16 mt-20">
              <button  className="btn btn-secondary btn-sm is-capitalize" onClick={() => addProduct()}>
                add to cart
              </button>
              <Link
                to="/cart"
                className="btn btn-primary btn-sm is-capitalize"
              >
                Buy now
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="product-details">
      <div className="container">{loading ? <Loader /> : <ShowProducts />}</div>
    </div>
  );
};

export default Product;
