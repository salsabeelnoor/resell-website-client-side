import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Loading from "../../../Components/Loading/Loading";
import BookingModal from "../../Book/BookingModal/BookingModal";
import ProductCard from "../../Shared/ProductCard/ProductCard";

const AdvertisedItems = () => {
  const [book, setBook] = useState(null);

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/products");
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="container mx-auto my-28">
      <h2 className="text-center text-4xl font-medium text-primary mb-16">
        Featured Items
      </h2>
      <div className="lg:mx-auto px--3">
        {products.map(
          (product) =>
            product.advertise &&
            product.productStatus === "available" && (
              <ProductCard
                key={product._id}
                product={product}
                setBook={setBook}
              ></ProductCard>
            )
        )}
      </div>
      {book && <BookingModal book={book} setBook={setBook}></BookingModal>}
    </div>
  );
};

export default AdvertisedItems;
