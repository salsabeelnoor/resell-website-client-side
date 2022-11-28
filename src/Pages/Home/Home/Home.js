import React from "react";
import BookingModal from "../../Book/BookingModal/BookingModal";
import AdvertisedItems from "../AdvertisedItems/AdvertisedItems";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import OfferSection from "../OfferSection/OfferSection";
import "./Home.css";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Banner></Banner>
      <Category></Category>
      <AdvertisedItems></AdvertisedItems>
      <OfferSection></OfferSection>
    </div>
  );
};

export default Home;
