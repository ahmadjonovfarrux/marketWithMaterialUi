import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

function Product({ product }) {
  const { title, description, thumbnail, price, discountPercentage, id } =
    product;
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Link to={`/product/${id}`}>
      <h2>{title}</h2>
      <p>{description}</p>
      <Button variant="contained" onClick={(e) => handleSubmit(e)}>
        Buy
      </Button>
    </Link>
  );
}

export default Product;
