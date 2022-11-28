import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const BookingModal = ({ book, setBook }) => {
  const { user } = useContext(AuthContext);
  const { productName, resellPrice } = book;

  const { data: products = [], refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/products");
      const data = await res.json();
      return data;
    },
  });

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
          <form className="grid grid-cols-1 gap-3 mt-5">
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
              type="text"
              className="font-medium text-lg border-2 border-blue-900 rounded-lg block w-full p-2.5  focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
              placeholder="Phone"
            />
            <input
              type="text"
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
