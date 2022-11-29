import { useQuery } from "@tanstack/react-query";
import React from "react";

const MyOrders = () => {
  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/bookings");
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="container lg:mx-auto mx-2 py-10">
      <h2 className="lg:text-5xl text-blue-900 font-bold lg:text-start text-center text-4xl mb-5">
        My Products
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Pay</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, i) => (
              <tr key={booking._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-[72px] rounded-full">
                      <img src={booking.bookedProductImage} alt="" />
                    </div>
                  </div>
                </td>
                <td>{booking.bookedProductName}</td>
                <td>{booking.bookerProductPrice}</td>
                <td>
                  <button className="btn btn-sm bg-blue-800 text-white ">
                    Pay
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
