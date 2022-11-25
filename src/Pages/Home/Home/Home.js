import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* img  */}
      <section className="banner bg-cover bg-no-repeat lg:min-h-[750px] min-h-[480px]">
        <div className="lg:flex hidden justify-center -ml-96 items-center">
          <div class="content text-9xl top-12">
            <h2>Laptop</h2>
            <h2>Laptop</h2>
          </div>
          <div className="w-[410px]"></div>
          <div class="content text-9xl top-12">
            <h2>Trades</h2>
            <h2>Trades</h2>
          </div>
        </div>
        <div className="lg:hidden flex justify-center">
          <div class="content text-7xl right-24 top-10">
            <h2>Laptop</h2>
            <h2>Laptop</h2>
          </div>
        </div>
        <div className="lg:hidden flex justify-center mt-28">
          <div class="content text-7xl right-24">
            <h2>Trades</h2>
            <h2>Trades</h2>
          </div>
        </div>
        <div>
          <h2 className="text-gray-300 text-center lg:mt-56 mt-28  font-poppins mx-2">
            Welcome to Laptop Trades. Bangladesh's premium online laptop buy
            sell website. Get your desired laptop at cheapest{" "}
            <br className="lg:block hidden" />
            price ever !!! Around one million people's trusted online platform
            to buy sell laptops.
            <br className="lg:block hidden" /> Register today and experience
            your best shopping ever !
          </h2>
        </div>
      </section>
      <h2>THis is home</h2>
    </div>
  );
};

export default Home;
