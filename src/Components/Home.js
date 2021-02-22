import React from "react";
import "../Style/Home.css";
import Product from "./Product";
import tv from "../img/tv.png";
import hp from "../img/hp.jpg";
import alien from "../img/alien.jpg";
import harry from "../img/harry.jpg";
import homegym from "../img/home-gym.jpg";
import dw from "../img/dw.jpg";
import ip12 from "../img/ip12.jpg";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="1"
            title="Samsung 55 UHD"
            price={599.99}
            image={tv}
            rating={5}
          />
          <Product
            id="2"
            title="HP 15-dw Full-HD"
            price={259.99}
            image={hp}
            rating={3}
          />
          <Product
            id="3"
            title="Alienware PRO"
            price={669.99}
            image={alien}
            rating={5}
          />
          <Product
            id="4"
            title="Hary Potter Saga"
            price={369.99}
            image={harry}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="5"
            title="Home GYM"
            price={1119.99}
            image={homegym}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="Dishwasher NO.1!"
            price={543}
            image={dw}
            rating={5}
          />
          <Product
            id="7"
            title="Iphone 12 PRO"
            price={1119.99}
            image={ip12}
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
