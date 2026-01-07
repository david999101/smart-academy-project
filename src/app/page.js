"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Footer from "@/components/footer/Footer";
import styles from "./page.module.css";
import Text from "@/components/test/Text";
import { use } from "react";
import Link from "next/link";


//products
export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((resp) => resp.json())
      .then((res) => setProducts(res));
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
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
            <Link href={`/details/${item.id}`}>
              <p>see details</p>
            </Link>
          </div>
        ))}
      </main>
      {/* <Text /> */}
      <Footer />
    </div>
  );
}

// Mount
// Update
// Unmount
