import React, { useEffect, useState } from "react";
// import classes from "./ProductDetail.module.css";
import LayOut from "../../components/Layout/Layout";
import { useParams } from "react-router";
import axios from "axios";
import { productUrl } from "../../API/EndPoint";
import ProductCard from "../../components/Product/ProductCard";
import Loader from "../../components/Loader/Loader";

function ProductDetail() {
  const [Product, setProduct] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const { productId } = useParams();
  useEffect(() => {
    setisLoading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setisLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : (
        <ProductCard
          product={Product}
          flex={true}
          renderDesc={true}
          renderAdd={true}
        />
      )}
    </LayOut>
  );
}

export default ProductDetail;
