import React, { useEffect, useState } from "react";

const useCustomer = (email) => {
  const [isCustomer, setIsCustomer] = useState("");
  const [isCustomerLoading, setIsCustomerLoading] = useState(true);

  useEffect(() => {
    if (email) {
      fetch(
        `https://resell-website-assignment-server-side.vercel.app/users/${email}`
      )
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setIsCustomer(data.customerState);
          setIsCustomerLoading(false);
        });
    }
  }, [email]);

  return [isCustomer, isCustomerLoading];
};

export default useCustomer;
