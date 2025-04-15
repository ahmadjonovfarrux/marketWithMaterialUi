// Cart imports
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useFetch } from "../hooks/useFetch";
import { axiosInstance } from "../utils";
import { useLoaderData } from "react-router-dom";
import ProductList from "../components/ProductList";
export const loader = async () => {
  const req = await axiosInstance("/product");
  return req;
};

function Home() {
  const data = useLoaderData();

  return (
    <div>
      <ProductList />
    </div>
  );
}

export default Home;
