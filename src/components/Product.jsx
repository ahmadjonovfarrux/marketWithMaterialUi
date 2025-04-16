// cart imports
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { addToCart, decrement, increment } from "../app/features/cartSlice";
import { useDispatch, useSelector } from "react-redux";

function Product({ product }) {
  const { title, description, thumbnail, price, discountPercentage, id } =
    product;
  const { cart } = useSelector((store) => store.cart);
  const isAdded = cart.find((i) => i.id == product.id);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addToCart({
        ...product,
        amount: 1,
      })
    );
  };
  return (
    <Link to={`/product/${id}`}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 300 }}
          image={thumbnail}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="outlined" color="error">
            <del>${price}</del>
          </Button>
          {/* <Button size="small">
          <del>${price}</del>
          </Button> */}
          {/* <Button size="small">
          
            ${(price - (price / 100) * discountPercentage).toFixed(2)}
          </Button> */}
          <Button variant="outlined" size="small">
            ${(price - (price / 100) * discountPercentage).toFixed(2)}
          </Button>
          {isAdded && (
            <>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(increment(id));
                }}
                variant="contained"
              >
                +
              </Button>
              <span>{isAdded.amount}</span>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(decrement(id));
                }}
                variant="contained"
              >
                -
              </Button>
            </>
          )}
          {!isAdded && (
            <Button variant="contained" onClick={(e) => handleSubmit(e)}>
              Buy
            </Button>
          )}
        </CardActions>
      </Card>
    </Link>
  );
}

export default Product;
