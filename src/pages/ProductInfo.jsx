import React from "react";
import { axiosInstance } from "../utils";
import { useLoaderData } from "react-router-dom";

export const loader = async ({ params }) => {
  const req = await axiosInstance(`/product/${params.id}`);
  return req.data;
};
function ProductInfo() {
  const data = useLoaderData();
  console.log(data);
  return <div>ProductInfo</div>;
}

export default ProductInfo;
