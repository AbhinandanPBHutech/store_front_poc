import React, { useEffect, useState } from "react";
import Footer from "../../componentss/Footer/Footer";
import HomeCategories from "../../componentss/HomeComponents/HomeCategories/homecategories";
import HomeFullFledgedBanner from "../../componentss/HomeComponents/HomeFullFledgedBanner/fullfledgedbanner";
import HomePopulerProduct from "../../componentss/HomeComponents/HomeMostPopulerProduct/populerproduct";
import HomeRecommendedProduct from "../../componentss/HomeComponents/HomeRecommendedProducts/recommendedProduct";
import HomeSubBanners from "../../componentss/HomeComponents/HomeSubBanners/homesubbanner";
import MobileAppBanner from "../../componentss/HomeComponents/MobileAppBanner/mobileappbanner";
import TopBanner from "../../componentss/HomeComponents/TopBanner/topbanner";
import Policys from "../../componentss/Policys/policy";
import styles from "./home.module.css";
function HomePage() {
  const [color, setColor] = useState("green");

  useEffect(() => {
    document.body.style.setProperty("--text-color", color);
  }, [color]);
  return (
    <>
      <TopBanner />
      <HomeCategories />
      <HomeSubBanners />
      <HomePopulerProduct />
      <HomeFullFledgedBanner />
      <HomeRecommendedProduct />
      <MobileAppBanner />
      <Policys />
    </>
  );
}

export default HomePage;
