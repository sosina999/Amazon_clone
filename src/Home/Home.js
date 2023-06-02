import React from "react";
import "./Home.css";
import Product from "../Product/Product";


function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product className="d-none"
            id="12321341"
            title="Acer Nitro 5 AN515-57-79TD Gaming Laptop | Intel Core i7-11800H | NVIDIA GeForce RTX 3050 Ti Laptop GPU | 15.6"
            price={809}
            rating={5}
            image="https://m.media-amazon.com/images/I/81lDOtJRTkL._AC_UL600_QL65_.jpg"
          />
          <Product
            id="49538094"
            title="LG UltraGear QHD 27-Inch Gaming Monitor 27GL83A-B - IPS 1ms (GtG), with HDR 10 Compatibility, NVIDIA G-SYNC, and AMD FreeSync, 144Hz, Black"
            price={469}
            rating={4}
            image="https://m.media-amazon.com/images/I/81dAe2wXIqL._AC_UL600_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Champion Men's Hooded Long-Sleeve Tee Shirt for Men, Cotton Men's T-Shirt Hoodie, Script Logo"
            price={42}
            rating={3}
            image="https://m.media-amazon.com/images/I/71B3lj70BSL._AC_UL600_FMwebp_QL65_.jpg"
          />
          <Product
            id="23445930"
            title="Lucky Brand Men's Venice Burnout Notch Neck Tee Shirt"
            price={20}
            rating={5}
            image="https://m.media-amazon.com/images/I/71Z4fIIWDtL._AC_UL600_FMwebp_QL65_.jpg"
          />
          <Product
            id="3254354345"
            title="Champion Men's Everyday Cotton Graphic Joggers, Men’s Sweatpants, Men’s Lightweight Joggers,31"
            price={27}
            rating={4}
            image="https://m.media-amazon.com/images/I/41SLV9KlTJL._AC_UL600_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="JUST MY SIZE Women's Plus Size Active Pieced Stretch Capri"
            price={22.5}
            rating={4}
            image="https://m.media-amazon.com/images/I/71WBoqJkyXL._AC_UY550_.jpg"
          />
          <Product
            id="90829332"
            title="Columbia Women's Benton Springs Full Zip"
            price={52.75}
            rating={4}
            image="https://m.media-amazon.com/images/I/71F2tjW19JS._AC_UX569_.jpg"
          />
      </div> 
      <div className="home__row">
          <Product
            id="4903850"
            title="Mielle Organics Rosemary Mint Scalp & Hair Strengthening Oil With Biotin & Essential Oils, Nourishing Treatment for Split Ends"
            price={18.60}
            rating={3}
            image="https://m.media-amazon.com/images/I/716gEi8p8IL._AC_UL480_QL65_.jpg"
          />
          <Product
            id="23445930"
            title="Mighty Patch Original from Hero Cosmetics - Hydrocolloid Acne Pimple Patch for Covering Zits and Blemishes"
            price={52}
            rating={5}
            image="https://m.media-amazon.com/images/I/61NCz9l8C+L._AC_UL480_QL65_.jpg"
          />
          <Product
            id="3254354345"
            title="essence | Lash Princess False Lash Effect Mascara | Gluten & Cruelty Free"
            price={27}
            rating={4}
            image="https://m.media-amazon.com/images/I/61K6cQhw4EL._AC_UL480_QL65_.jpg"
          />
          <Product
            id="3254354345"
            title="Amazon Basics Cotton Swabs, 500 ct, 1-Pack (Previously Solimo)"
            price={257.55}
            rating={4}
            image="https://m.media-amazon.com/images/I/61viR94S9QL._AC_UL480_QL65_.jpg"
          />
        </div>
        </div>
        <hr />
    </div>
  );
}

export default Home;
