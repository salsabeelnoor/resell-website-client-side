import React, { useContext } from "react";
import { AuthContext } from "../../../../Contexts/AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddAProduct = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const imgHostKey = process.env.REACT_APP_imgbb_key;

  const handleAddProduct = (data) => {
    const formData = new FormData();
    //take time
    const current = new Date();
    const time = current.toLocaleTimeString("en-US");
    const date = `${current.getDate()}/${
      current.getMonth() + 1
    }/${current.getFullYear()}`;

    //append image
    const image = data.image[0];
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(data);
          const product = {
            name: data.name,
            productName: data.productName,
            category: data.category,
            yearOfPurchase: data.purchaseYear,
            condition: data.productCondition,
            originalPrice: data.originalPrice,
            resellPrice: data.resellPrice,
            phone: data.phone,
            image: imgData.data.url,
            detail: data.productDetail,
            time,
            date,
            advertise: false,
          };

          //save product info into database
          fetch("http://localhost:5000/products", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log("api hits", result);
              toast.success(`${data.productName} is added successfully`);
            });
        }
      });
    reset();
  };

  return (
    <div className="container mx-auto py-10">
      <h2 className="lg:text-5xl text-blue-900 font-bold lg:text-start text-center text-4xl">
        Add A Product
      </h2>
      <div className="my-10 mx-5">
        <form onSubmit={handleSubmit(handleAddProduct)}>
          <div className="mb-6">
            <label className="block text-xl mb-2 font-medium text-gray-900">
              Seller Name
            </label>
            <input
              type="text"
              {...register("name", { value: user?.displayName })}
              className="font-medium text-lg border-2 border-blue-900 rounded-lg block w-full p-2.5  focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
              defaultValue={user?.displayName}
              disabled
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="flex lg:flex-row flex-col lg:justify-between">
            <div className="mb-6 lg:w-1/2 w-full pr-3">
              <label className="block text-xl mb-2 font-medium text-gray-900">
                Product Name
              </label>
              <input
                type="text"
                {...register("productName", { required: true })}
                className=" border-2 border-blue-900 rounded-lg block w-full p-2.5  focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
                placeholder="Product Name"
              />
              {errors.productName && (
                <p className="text-red-500">{errors.productName.message}</p>
              )}
            </div>
            <div className="mb-6 lg:w-1/2 w-full lg:pl-3">
              <label className="block text-xl mb-2 font-medium text-gray-900">
                Category
              </label>
              <select
                {...register("category")}
                className=" border-2 border-blue-900 rounded-lg block w-full p-2.5  focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
              >
                <option className="uppercase" value="apple">
                  Apple
                </option>
                <option className="uppercase" value="hp">
                  hp
                </option>
                <option className="uppercase" value="dell">
                  dell
                </option>
              </select>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col lg:justify-between">
            <div className="mb-6 lg:w-1/2 w-full pr-3">
              <label className="block text-xl mb-2 font-medium text-gray-900">
                Year of Purchase
              </label>
              <input
                type="number"
                {...register("purchaseYear", { required: true })}
                className=" border-2 border-blue-900 rounded-lg block w-full p-2.5  focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
                placeholder="Product Name"
                required
              />
              {errors.purchaseYear && (
                <p className="text-red-500">{errors.purchaseYear.message}</p>
              )}
            </div>
            <div className="mb-6 lg:w-1/2 w-full lg:pl-3">
              <label className="block text-xl mb-2 font-medium text-gray-900">
                Condition
              </label>
              <select
                {...register("productCondition")}
                className=" border-2 border-blue-900 rounded-lg block w-full p-2.5  focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
              >
                <option value="excellent">Excellent</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
              </select>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col lg:justify-between">
            <div className="mb-6 lg:w-1/2 w-full pr-3">
              <label className="block text-xl mb-2 font-medium text-gray-900">
                Original Price
              </label>
              <input
                type="number"
                {...register("originalPrice", { required: true })}
                className=" border-2 border-blue-900 rounded-lg block w-full p-2.5  focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
                placeholder="Original Price"
              />
              {errors.originalPrice && (
                <p className="text-red-500">{errors.originalPrice.message}</p>
              )}
            </div>
            <div className="mb-6 lg:w-1/2 w-full lg:pl-3">
              <label className="block text-xl mb-2 font-medium text-gray-900">
                Resell Price
              </label>
              <input
                type="text"
                {...register("resellPrice", { required: true })}
                className=" border-2 border-blue-900 rounded-lg block w-full p-2.5  focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
                placeholder="Resell Price"
              />
              {errors.resellPrice && (
                <p className="text-red-500">{errors.resellPrice.message}</p>
              )}
            </div>
          </div>
          <div className="flex lg:flex-row flex-col lg:justify-between">
            <div className="mb-6 lg:w-1/2 w-full pr-3">
              <label className="block text-xl mb-2 font-medium text-gray-900">
                Phone
              </label>
              <input
                type="number"
                {...register("phone", { required: true })}
                className=" border-2 border-blue-900 rounded-lg block w-full p-2.5  focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
                placeholder="Phone"
              />
              {errors.phone && (
                <p className="text-red-500">{errors.phone.message}</p>
              )}
            </div>
            <div className="mb-6 lg:w-1/2 w-full lg:pl-3">
              <label className="block text-xl mb-2 font-medium text-gray-900">
                Location
              </label>
              <input
                type="text"
                {...register("location", { required: true })}
                className=" border-2 border-blue-900 rounded-lg block w-full p-2.5  focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
                placeholder="Location"
              />
              {errors.location && (
                <p className="text-red-500">{errors.location.message}</p>
              )}
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-xl mb-2 font-medium text-gray-900">
              Image URL
            </label>
            <input
              type="file"
              {...register("image", { required: "Photo is required" })}
              className=" border-2 border-pink-900 rounded-lg block w-full p-2.5  focus:outline-none focus:border-pink-900 focus:ring-1 focus:ring-pink-900"
              placeholder="Product Image"
            />
            {errors.image && (
              <p className="text-red-500">{errors.image.message}</p>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-xl mb-2 font-medium text-gray-900">
              Product Details
            </label>
            <textarea
              {...register("productDetail", { required: true })}
              className="border-2 h-24 border-blue-900 rounded-lg block w-full p-3  focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
              placeholder="Product description"
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary text-gray-900 hidden lg:flex mr-2 bg-transparent rounded-lg hover:text-white"
          >
            POST
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAProduct;