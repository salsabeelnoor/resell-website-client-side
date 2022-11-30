import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Loading from "../../../Components/Loading/Loading";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

console.log(stripePromise);

const Payment = () => {
  const bookingData = useLoaderData();
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }

  console.log(bookingData);
  return (
    <div className="container mx-auto mt-16">
      <h2 className="lg:text-4xl text-blue-900  lg:text-start text-center text-4xl mb-5">
        Payment For{" "}
        <span className="font-bold">{bookingData.bookedProductName}</span>
      </h2>
      <div className="w-96 my-16">
        <Elements stripe={stripePromise}>
          <CheckOutForm bookingData={bookingData}></CheckOutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
