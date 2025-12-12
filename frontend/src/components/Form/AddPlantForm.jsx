import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { imageUpload } from "../../utils";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import LoadingSpinner from "../Shared/LoadingSpinner";
import ErrorPage from "../../pages/ErrorPage";
import { TbFidgetSpinner } from "react-icons/tb";

const AddPlantForm = () => {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  // useMutation hook case :
  // Mutations
  const {
    isPending,
    isError,
    mutateAsync,
    reset: mutatereset,
  } = useMutation({
    mutationFn: async (cdata) => {
      return await axios.post(`${import.meta.env.VITE_API_URL}/clubs`, cdata);
    },
    onMutate: (cdata) => {
      console.log("I will post this data--->", cdata);
    },
    onSuccess: (data) => {
      console.log("onsuccess", data);
      //ADD TOAST
      toast.success("add club Successful");
      //reset form after post completed
      mutatereset();
      //navigate to page

      // Invalidate and refetch
      // queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (errors) => {
      console.log(errors);
    },

    onSettled: (data, error) => {
      if (data) console.log(data);
      if (error) console.log(error);
    },
    retry: true,

    //
  });
  //react hook :
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const { name, price, location, image, description, category } = data;

    try {
      //* img :
      const imgfile = image[0];
      const imgURL = await imageUpload(imgfile);
      console.log(imgURL);
      console.log(data);
      //* add club data to db
      const clubData = {
        clubName: name,
        description,
        category,
        location,
        membershipFee: Number(price),
        status: "Pending",
        // quantity,
        managerEmail: user.email,
        createAt: new Date(),
        updateAt: new Date(),
        bannerImage: imgURL,
      };
      // const { data } = await axios.post(
      //   `${import.meta.env.VITE_API_URL}/clubs`,
      //   clubData
      // );
      // // console.log(result);
      console.log(data);
      console.table(clubData);
      await mutateAsync(clubData);
      reset();
    } catch (error) {
      console.log(error);
    }
    try {
      // toast.success("add club Successful");
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };
  if (isPending) return <LoadingSpinner></LoadingSpinner>;
  if (isError) return <ErrorPage></ErrorPage>;

  return (
    <div className="w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
      <title> add club (manager ) </title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            {/* Name */}
            <div className="space-y-1 text-sm">
              <label htmlFor="name" className="block text-gray-600">
                Name
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-orange-400 focus:outline-orange-400rounded-md bg-white"
                id="name"
                type="text"
                placeholder="Club Name"
                {...register("name", { required: "name is required" })}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            {/* Description */}
            <div className="space-y-1 text-sm">
              <label htmlFor="description" className="block text-gray-600">
                Description
              </label>

              <textarea
                id="description"
                placeholder="Write plant description here..."
                className="block rounded-md focus:lime-300 w-full h-32 px-4 py-3 text-gray-800  border border-orange-400 bg-white focus:outline-orange-400 "
                name="description"
                {...register("description", {
                  required: "description is required",
                })}
              ></textarea>
              {errors.description && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.description.message}
                </p>
              )}
            </div>
            {/* Category */}
            <div className="space-y-1 text-sm">
              <label htmlFor="category" className="block text-gray-600 ">
                Category
              </label>
              <select
                className="w-full px-4 py-3 border-orange-400 focus:outline-orange-400 rounded-md bg-white"
                {...register("category", { required: "category is required" })}
              >
                <option value="photography">photography</option>
                <option value="sports">sports</option>
                <option value="debate">debate</option>
                <option value="cultural">cultural</option>
                {errors.category && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.category.message}
                  </p>
                )}
              </select>
            </div>
            {/* location */}
            <div className="space-y-1 text-sm">
              <label htmlFor="location" className="block text-gray-600 ">
                location
              </label>
              <select
                className="w-full px-4 py-3 border-orange-400 focus:bg-orange-400 rounded-md bg-white"
                {...register("location", { required: "location is required" })}
              >
                <option value="bashabo">bashabo</option>
                <option value="Outdoor">khilgao</option>
                <option value="Succulent">motijheel</option>
                <option value="Flowering">mirpur</option>
                {errors.location && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.location.message}
                  </p>
                )}
              </select>
            </div>
          </div>
          <div className="space-y-6 flex w-60 md:w-90 flex-col">
            {/* Price & Quantity */}
            <div className="flex justify-between gap-2">
              {/* Price */}
              <div className="space-y-1 text-sm w-full">
                <label htmlFor="price" className="block text-gray-600 ">
                  Price
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-orange-400 focus:outline-orange-400 rounded-md bg-white"
                  id="price"
                  type="number"
                  placeholder="Price per unit"
                  {...register("price", {
                    required: "price is required",
                    min: { value: 0, message: "price should more then 0" },
                  })}
                />
                {errors.price && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.price.message}
                  </p>
                )}
              </div>

              {/* Quantity */}
              {/* <div className="space-y-1 text-sm">
                <label htmlFor="quantity" className="block text-gray-600">
                  Quantity
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                  id="quantity"
                  type="number"
                  placeholder="Available quantity"
                  {...register("quantity", {
                    required: "quantity is required",
                    min: { value: 1, message: "price should more then 0" },
                  })}
                />
                {errors.quantity && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.quantity.message}
                  </p>
                )}
              </div> */}
              {/* <div>hi</div> */}
            </div>
            {/* Image */}
            <div className=" p-4  w-full  m-auto rounded-lg grow">
              <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
                <div className="flex flex-col w-max mx-auto text-center">
                  <label>
                    <input
                      className="text-sm cursor-pointer w-36 hidden"
                      type="file"
                      id="image"
                      accept="image/*"
                      hidden
                      {...register("image", { required: "image is required" })}
                    />
                    {errors.image && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.image.message}
                      </p>
                    )}
                    <div className=" bg-orange-400 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hove:bg-orange-400">
                      Upload
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              onSubmit={handleSubmit}
              className="w-full cursor-pointer p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md  bg-orange-400 "
            >
              {isPending ? (
                <TbFidgetSpinner className="animate-spin m-auto" />
              ) : (
                "Save & Continue"
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddPlantForm;
