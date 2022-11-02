import React from "react";
import styles from "./productcard.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import { Rate } from "antd";
function ProductCard({ data }) {
  const router = useRouter();

  return (
    // <div
    //   className={styles.card}
    //   onClick={() => router.push("/product-details")}
    // >
    //   {data?.off_percentage && <div className={styles.traingle}></div>}
    //   {data?.off_percentage && (
    //     <>
    //       <div className={styles.offer_percentage}>50%</div>
    //     </>
    //   )}

    //   {data?.imgs?.slice(0, 1)?.map((item, index) => {
    //     return (
    //       <Image key={index} className={styles.card_img} src={item} alt="" />
    //     );
    //   })}
    //   <div className={styles.card_title}>{data?.title}</div>
    //   <div className={styles.card_price}>
    //     <div className={styles.card_price_left}>
    //       <div className={styles.card_discount_price}>
    //         {data?.discount_price}
    //       </div>
    //       <div>
    //         <s className={styles.card_actual_price}>{data?.actual_price}</s>
    //       </div>
    //     </div>
    //     <div>
    //       <button className={styles.add_to_card_btn}>ADD</button>
    //     </div>
    //   </div>
    // </div>

    // previous ux card design below
    <div className={styles.card}>
      {data?.imgs?.slice(0, 1)?.map((item, index) => {
        return (
          <Image key={index} className={styles.card_img} src={item} alt="" />
        );
      })}
      <div className={styles.card_title}>
        Casual Sneakers Canvas Shoes For Sneakers For Men
      </div>
      <div style={{ height: "20px" }}>
        <Rate disabled allowHalf defaultValue={4.5} />
      </div>
      <div className={styles.card_price}>
        <div className={styles.card_price_left}>
          <div className={styles.card_discount_price}>₹350</div>
          <div>
            <s className={styles.card_actual_price}>₹438</s>
          </div>
          <div className={styles.price_off}>{"(50% off)"}</div>
        </div>
        <div className={styles.product_status}>In Stock</div>
      </div>
      <div>
        <button className={styles.add_to_card_btn}>ADD TO CART</button>
      </div>
    </div>
  );
}

export default ProductCard;
