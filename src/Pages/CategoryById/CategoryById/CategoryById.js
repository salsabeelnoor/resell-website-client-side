import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Loading from "../../../Components/Loading/Loading";
import ProductCard from "../../Shared/ProductCard/ProductCard";

const CategoryById = () => {
  const categoryById = useLoaderData();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `http://localhost:5000/products?category=${categoryById.category_name}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, [categoryById.category_name]);

  return (
    <div className="container mx-auto mt-24 min-h-screen">
      <h2 className="lg:text-start text-center lg:text-5xl text-4xl font-medium mb-16 text-gray-600">
        Showing results of{" "}
        <span className="uppercase">{categoryById.category_name}</span>
      </h2>
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
                    product={product}
                  ></ProductCard>
                )
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default CategoryById;
