"use client";
import { useState } from "react";
import { use, useEffect } from "react";
import styles from "./CartItem.module.css";

const CartItem = ({ item, cartData, setCartData}) => {
  const [cartProduct, setCartProduct] = useState(null);

  const fetchCartProduct = async () => {
    const response = await fetch(
      `https://fakestoreapi.com/products/${item.productId}`
    );
    const result = await response.json();
    return setCartProduct(result);
  };
  useEffect(() => {
    fetchCartProduct();
  }, []);

  const handleDeleteProduct = async (id) => {
    const response = await fetch("https://fakestoreapi.com/carts/1", {
      method: "DELETE",
    });
    const result = await response.json();
    console.log("deleted: ", result);
    if(result?.date){
        setCartData(cartData.filter((item) => item.productId !== id))
    }
  };

  if (!cartProduct) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.itemContainer}>
      Product Name: {cartProduct.title}
      Qauntity: {item.quantity}
      <button onClick={() =>handleDeleteProduct(cartProduct.id)}>remove</button>
    </div>
  );
};

export default CartItem;
