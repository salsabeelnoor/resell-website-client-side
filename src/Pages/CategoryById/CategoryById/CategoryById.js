import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Loading from "../../../Components/Loading/Loading";
import BookingModal from "../../Book/BookingModal/BookingModal";
import ProductCard from "../../Shared/ProductCard/ProductCard";

const CategoryById = () => {
  const categoryById = useLoaderData();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const [wishListBtn, setWishListBtn] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://resell-website-assignment-server-side.vercel.app/products?category=${categoryById.category_name}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, [categoryById.category_name]);

  return (
    <div className="container mx-auto mt-24 min-h-screen">
      {navigation.state === "loading" ? (
        <Loading></Loading>
      ) : (
        <>
          <div>
            <h2 className="lg:text-start text-center lg:text-5xl text-4xl font-medium mb-16 text-gray-600">
              Showing results of{" "}
              <span className="uppercase">{categoryById.category_name}</span>
            </h2>
            <div>
              {loading ? (
                <Loading></Loading>
              ) : (
                <>
                  <div className="lg:mx-auto px--3">
                    {products.map(
                      (product) =>
                        product.productStatus === "available" && (
                          <ProductCard
                            key={product._id}
                            wishListBtn={wishListBtn}
                            setWishListBtn={setWishListBtn}
                            product={product}
                            setBook={setBook}
                          ></ProductCard>
                        )
                    )}
                  </div>
                </>
              )}
            </div>
            {book && (
              <BookingModal book={book} setBook={setBook}></BookingModal>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default CategoryById;
