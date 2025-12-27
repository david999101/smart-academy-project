"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "@/app/page.module.css";
import Button from "../button/Button";

//initialize function
const Text = () => {
  const [number, setNumber] = useState(10);
  const [input, setInput] = useState("");
  const [products, setProducts] = useState(null);

  //useEffect hook for fetching products
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((result) => setProducts(result));
  }, []);

  const handlePlus = () => {
    setNumber(number + 1);
    return number;
  };
  const handleMinus = () => {
    setNumber(number - 1);
    return number;
  };

  //condition rendering
  if (products === null) {
    return <div>products are fetching</div>;
  }

  return (
    <div>
      my number is {number}
      <Button title={"plus 1"} handleClick={handlePlus} />
      <Button title={"minus 1"} handleClick={handleMinus} />
      <br />
      <br />
      my input {input}
      <br />
      <input
        type="text"
        placeholder="username"
        onChange={(e) => setInput(e.target.value)}
      />
      {products.map((item) => (
        <div className={styles.itemWrapper} key={item.id}>
          <Image
            src={item.image}
            width={100}
            height={80}
            style={{ objectFit: "contain" }}
            alt="photos"
          />
          <div>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.desc}>{item.description}</p>
            {/* <Button title={item.price} /> */}
          </div>
        </div>
      ))}
    </div>

    // useEffect(() => {
    //   if (input.length > 5) {
    //     console.log("input length is higher than 5");
    //   } else {
    //     console.log("input length ", input.length);
    //   }
    // }, [input, number]);
  );
};

export default Text;
