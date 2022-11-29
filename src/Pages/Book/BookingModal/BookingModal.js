import { useQuery } from "@tanstack/react-query";
import { data } from "autoprefixer";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const BookingModal = ({ book, setBook }) => {
  const { user } = useContext(AuthContext);
  const { _id, productName, resellPrice, image } = book;

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const buyerName = user?.displayName;
    const buyerEmail = user?.email;
    const bookedProductName = productName;
    const bookerProductPrice = resellPrice;
    const phone = form.phone.value;
    const location = form.location.value;
    console.log(_id);

    const booking = {
      buyerName,
      buyerEmail,
      bookedProductId: _id,
      bookedProductName,
      bookerProductPrice,
      bookedProductImage: image,
      phone,
      meetingLocation: location,
      paymentStatus: false,
    };
    console.log(booking);
    //save product info into database
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("api hits", result);
        if (result.acknowledged) {
          setBook(null);
          toast.success("Booking Confirmed");
        } else {
          toast.error(result.message);
        }
      });
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            X
          </label>
          <h3 className="text-lg font-medium mt-5 text-gray-900">
            {productName}
          </h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-5"
          >
            <input
              type="text"
              className="font-medium text-lg border-2 border-blue-900 rounded-lg block w-full p-2.5  focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
              defaultValue={user?.displayName}
              disabled
            />
            <input
              type="text"
              className="font-medium text-lg border-2 border-blue-900 rounded-lg block w-full p-2.5  focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
              defaultValue={user?.email}
              disabled
            />
            <input
              type="number"
              className="font-medium text-lg border-2 border-blue-900 rounded-lg block w-full p-2.5  focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
              defaultValue={resellPrice}
              disabled
            />
            <input
              type="number"
              name="phone"
              className="font-medium text-lg border-2 border-blue-900 rounded-lg block w-full p-2.5  focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
              placeholder="Phone"
            />
            <input
              type="text"
              name="location"
              className="font-medium text-lg border-2 border-blue-900 rounded-lg block w-full p-2.5  focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
              placeholder="Meeting Location"
            />
            <input
              className="btn btn-secondary w-full my-4"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
