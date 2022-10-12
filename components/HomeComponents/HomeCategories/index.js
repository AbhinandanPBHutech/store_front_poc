import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./index.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoriesImg from "../../../public/assets/home-categories.png";
import CategoriesImg2 from "../../../public/assets/home-categories2.svg";
import CategoriesImg3 from "../../../public/assets/home-categories3.svg";
import CategoriesImg4 from "../../../public/assets/home-categories4.svg";
import CategoriesImg5 from "../../../public/assets/home-categories5.svg";
import CategoriesImg6 from "../../../public/assets/home-categories6.svg";
import Image from "next/image";
import getWindowDimensions from "../../Constants/getWidth";

function HomePageCategories() {
  const sliderRef = useRef();
  const [size, setSize] = useState(0);
  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.categories_top_row}>
        <div className={styles.categories_top_heading}>Explore Categories</div>
        <div className={styles.categories_see_all}>See all</div>
      </div>
      <div id="one" className={styles.home_categories_carousel_container}>
        <Slider
          ref={sliderRef}
          slidesToShow={size < 600 ? 1 : size < 800 ? 2 : size < 900 ? 4 : 6}
        >
          {[
            CategoriesImg,
            CategoriesImg2,
            CategoriesImg3,
            CategoriesImg4,
            CategoriesImg5,
            CategoriesImg6,
            CategoriesImg2,
            CategoriesImg3,
            CategoriesImg4,
            CategoriesImg5,
            CategoriesImg6,
          ]?.map((item, index) => {
            return (
              <div key={index}>
                <div className={styles.slider_card}>
                  <Image objectFit="contain" {...item} alt="" />
                </div>
                <div className={styles.categories_name}>Casual Shoes</div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default HomePageCategories;
