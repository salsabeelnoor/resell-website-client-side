import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";

const CheckOutForm = ({ bookingData }) => {
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [processing, setProcessing] = useState(false);

  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const { bookerProductPrice, buyerName, buyerEmail, _id, bookedProductId } =
    bookingData;

  const navigate = useNavigate();

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch(
      "https://resell-website-assignment-server-side.vercel.app/create-payment-intent",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bookerProductPrice }),
      }
    )
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [bookerProductPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      setCardError("");
      console.log("[PaymentMethod]", paymentMethod);
    }
    setSuccess("");
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: buyerName,
            email: buyerEmail,
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      const payment = {
        price: bookerProductPrice,
        transactionId: paymentIntent.id,
        buyerEmail,
        bookingid: _id,
        productId: bookedProductId,
      };
      //post
      fetch(
        "https://resell-website-assignment-server-side.vercel.app/payments",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(payment),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            setSuccess("Congrats! Payment Completed Successfully");
            toast.success("Congrats! Payment Completed Successfully");
            setTransactionId(paymentIntent.id);

            //put
            fetch(
              `https://resell-website-assignment-server-side.vercel.app/bookings/${_id}`,
              {
                method: "PUT",
              }
            )
              .then((res) => res.json())
              .then((data) => {
                if (data.modifiedCount > 0) {
                  console.log(data);
                }
              })
              .catch((error) => console.error(error));
            // //put
            fetch(
              `https://resell-website-assignment-server-side.vercel.app/products/payment/${bookedProductId}`,
              {
                method: "PUT",
              }
            )
              .then((res) => res.json())
              .then((data) => {
                if (data.modifiedCount > 0) {
                  console.log(data);
                }
              })
              .catch((error) => console.error(error));

            navigate("/dashboard/myorders");
          }
        });
    }
    setProcessing(false);
    console.log("paymentIntent", paymentIntent);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-xs w-20 mt-9 h-10 bg-sky-800 text-white"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      <p className="text-red-500 font-medium mt-4">{cardError}</p>
      {success && (
        <div>
          Your TransactionId <span className="font-bold">{transactionId}</span>
        </div>
      )}
    </div>
  );
};

export default CheckOutForm;
