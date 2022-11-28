import React from "react";

const OfferSection = () => {
  return (
    <div className="bg-[#205b7f] mt-24 mb-20 py-12 shadow-xl">
      <div className="flex lg:flex-row lg:justify-between flex-col items-center mx-auto container px-5 lg:px-0">
        <div className=" text-gray-200  text-center lg:text-start">
          <h2 className="lg:text-5xl text-3xl">
            Get 15% discount On StanChart Credit Cards
          </h2>
          <p className="pt-5 lg:text-3xl text-xl">
            Also get 7% discount on Bkash, Mastercard and Visa Card
          </p>
        </div>
        <div className="grid grid-cols-4 gap-3 mt-4">
          <img
            src="https://www.gozayaan.com/img/icon-footer-visa.0cc68109.svg"
            alt=""
          />
          <img
            src="https://www.gozayaan.com/img/icon-footer-mastercard.afdd5b7f.svg"
            alt=""
          />
          <img
            src="https://www.gozayaan.com/img/icon-footer-bkash.a929cde0.svg"
            alt=""
          />
          <img
            src="https://www.gozayaan.com/img/icon-payment-dbbl.0975a769.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default OfferSection;
