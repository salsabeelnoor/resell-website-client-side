import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import Loading from "../../../../Components/Loading/Loading";
import { AuthContext } from "../../../../Contexts/AuthProvider/AuthProvider";

const AllBuyers = () => {
  const { data: customers = [], isLoading } = useQuery({
    queryKey: ["customers"],
    queryFn: async () => {
      const res = await fetch(
        "https://resell-website-assignment-server-side.vercel.app/users"
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    <Loading></Loading>;
  }

  return (
    <div className="container lg:mx-auto mx-2 py-10">
      <h2 className="lg:text-5xl text-blue-900 font-bold lg:text-start text-center text-4xl mb-5">
        Buyers
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {customers.map(
              (customer, i) =>
                customer.customerState === "buyer" && (
                  <tr key={customer._id}>
                    <th>{i + 1}</th>
                    <td>
                      <div className="avatar">
                        <div className="w-[72px] rounded-full">
                          <img src={customer.image} alt="" />
                        </div>
                      </div>
                    </td>
                    <td className="capitalize">{customer.name}</td>
                    <td>{customer.email}</td>
                    <td className="uppercase font-medium">
                      {customer.customerState}
                    </td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBuyers;
