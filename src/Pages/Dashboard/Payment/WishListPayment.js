import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import WishListCheckOutForm from "./WishListCheckOutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

console.log(stripePromise);

const WishListPayment = () => {
  const bookingData = useLoaderData();
  console.log(bookingData);

  return (
    <div className="container mx-auto mt-16">
      <h2 className="lg:text-4xl text-blue-900  lg:text-start text-center text-4xl mb-5">
        Payment For <span className="font-bold">{bookingData.productName}</span>
      </h2>
      <div className="w-96 mt-16">
        <Elements stripe={stripePromise}>
          <WishListCheckOutForm
            bookingData={bookingData}
          ></WishListCheckOutForm>
        </Elements>
      </div>
    </div>
  );
};

export default WishListPayment;
