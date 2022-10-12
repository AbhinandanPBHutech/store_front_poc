import React, { useEffect, useState } from "react";
import FullFledgedBanner from "../../components/HomeComponents/FullFledgedBanner";
import HomePageCategories from "../../components/HomeComponents/HomeCategories";
import MostPopulerProduct from "../../components/HomeComponents/MostPopulerProduct";
import RecommendedProducts from "../../components/HomeComponents/RecomondedProducts";
import SubBanners from "../../components/HomeComponents/SubBanners";
import HomePageTopBanner from "../../components/HomeComponents/TopBanner";
import styles from "./home.module.css";
function HomePage() {
  const [color, setColor] = useState("green");

  useEffect(() => {
    document.body.style.setProperty("--text-color", color);
  }, [color]);
  return (
    <>
      <HomePageTopBanner />
      <HomePageCategories />
      <SubBanners />
      <MostPopulerProduct />
      <FullFledgedBanner />
      <RecommendedProducts />
    </>
  );
}

export default HomePage;
