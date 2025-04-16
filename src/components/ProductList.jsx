import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "./Product";
import { Grid } from "@mui/material";
import { Repeat } from "@mui/icons-material";

function ProductList() {
  const {
    data: { products },
  } = useLoaderData();
  return (
    <Grid container spacing={3}>
      {products.map((product) => {
        return <Product product={product} key={product.id} />;
      })}
    </Grid>
  );
}

export default ProductList;
