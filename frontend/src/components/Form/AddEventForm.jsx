import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { imageUpload } from "../../utils";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import LoadingSpinner from "../Shared/LoadingSpinner";
import ErrorPage from "../../pages/ErrorPage";
import { TbFidgetSpinner } from "react-icons/tb";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useNavigate } from "react-router";

const AddEventForm = () => {
  //*
  const { user } = useAuth();
  const navigate = useNavigate();
  const {
    isLoading: clubsLoading,
    isError: clubsError,
    data: managerClubs = [],
    // refetch,
  } = useQuery({
    queryKey: ["managerClubs", user?.email],
    queryFn: async () => {
      const result = await axios(
        `${import.meta.env.VITE_API_URL}/manage-clubs/${user.email}`
      );
      return result.data;
    },
  });

  // console.table("managerClubs", managerClubs);
  // console.table(managerClubs);

  //*
  //   const { user } = useAuth();
  const queryClient = useQueryClient();
  const axiosSecure = useAxiosSecure();

  // useMutation hook case :
  // Mutations
  const {
    isPending,
    isError,
    mutateAsync,
    reset: mutatereset,
  } = useMutation({
    mutationFn: async (edata) => {
      return await axiosSecure.post(`/events`, edata);
    },
    onMutate: (edata) => {
      // console.log("I will post this data--->", edata);
    },
    onSuccess: (data) => {
      console.log("onsuccess", data);
      //ADD TOAST
      toast.success("add event Successful");
      navigate("/dashboard/events-management");
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
    // const { name, price, location, image, description, category } = data;
    // console.log("----------", data);

    try {
      //* img :
      const imgfile = data.image[0];
      const imgURL = await imageUpload(imgfile);
      // console.log(imgURL);
      // console.log("DDADAFDDATA-----", data);
      // !Find selected club to get club name
      // const selectedClub = managerClubs.find(
      //   (club) => club._id === data.clubId
      // );
      // ✅ AFTER
      const selectedClub = managerClubs.find(
        (club) => club._id.toString() === data.clubId
      );
      console.log("data=====>", data);
      console.log("selectedClub", selectedClub);
      //* add club data to db
      const clubData = {
        // category;
        clubId: data.clubId,
        title: data.title,
        description: data.description,
        eventDate: data.date,
        location: data.location,

        // image: data.image,
        // name;
        isPaid: false,
        // eventFee: "",
        eventFee: parseFloat(data.eventFee) || 0 || "Free",
        // maxAttendees: optional
        maxAttendees: data.maxAttendees ? parseInt(data.maxAttendees) : null,
        clubName: selectedClub.clubName || "",
        // clubName2: data.category || "",
        // price: data.price,
        // description: data.description,
        // category,
        // location,
        // membershipFee: Number(price),
        // status: "pending",
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
      // console.log(data);
      // console.table(clubData);
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
  if (clubsLoading) return <LoadingSpinner></LoadingSpinner>;
  if (clubsError) return <ErrorPage></ErrorPage>;
  return (
    <div className="w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
      <title> add club (manager ) </title>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* //* */}
        {/* Category */}
        <div className="space-y-1 text-sm">
          <label htmlFor="category" className="block text-gray-600 ">
            Category
          </label>
          <select
            className="w-full px-4 py-3 border-orange-400 focus:outline-orange-400 rounded-md bg-white"
            {...register("clubId", {
              required: "category is required",
            })}
          >
            {managerClubs.map((club) => (
              <option key={club._id} value={club._id}>
                {club.category} - {club.clubName}
              </option>
            ))}
            {/* <option value="photography">photography</option>
            <option value="sports">sports</option>
            <option value="debate">debate</option>
            <option value="cultural">cultural</option> */}
            {errors.clubId && (
              <p className="text-red-500 text-xs mt-1">
                {errors.clubId.message}
              </p>
            )}
          </select>
        </div>
        {/* //* */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            {/* Title */}
            <div className="space-y-1 text-sm">
              <label htmlFor="name" className="block text-gray-600">
                Title
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-orange-400 focus:outline-orange-400rounded-md bg-white"
                id="name"
                type="text"
                placeholder="Club Name"
                {...register("title", { required: "title is required" })}
              />
              {errors.title && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.title.message}
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
              {/* eventFee */}
              <div className="space-y-1 text-sm w-full">
                <label htmlFor="eventFee" className="block text-gray-600 ">
                  event Fee
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-orange-400 focus:outline-orange-400 rounded-md bg-white"
                  id="eventFee"
                  type="number"
                  placeholder="Free "
                  disabled
                  {...register("eventFee", {
                    // required: "eventFee is required",
                    min: { value: 0, message: "eventFee should more then 0" },
                  })}
                />
                {errors.eventFee && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.eventFee.message}
                  </p>
                )}
              </div>

              {/* maxAttendees */}
              <div className="space-y-1 text-sm">
                <label htmlFor="maxAttendees" className="block text-gray-600">
                  maxAttendees
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-orange-300 focus:outline-orange-500 rounded-md bg-white"
                  id="maxAttendees"
                  type="number"
                  // placeholder="maxAttendees"
                  Value="0"
                  {...register("maxAttendees", {
                    // required: "quantity is required",
                    // min: {
                    //   value: 1,
                    //   message: "maxAttendees should more then 0",
                    // },
                    min: { value: 1, message: "Must be at least 1" },
                  })}
                />
                {errors.maxAttendees && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.maxAttendees.message}
                  </p>
                )}
              </div>
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
            {/* Image */}

            <div className=" p-4  w-full  m-auto rounded-lg grow">
              <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
                <div className="flex flex-col w-max mx-auto text-center">
                  <div className=" bg-orange-400 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hove:bg-orange-400 ">
                    <input
                      type="date"
                      name=""
                      id=""
                      {...register("date", {
                        required: "date is required",
                      })}
                    />
                    {errors.date && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.date.message}
                      </p>
                    )}
                  </div>
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

export default AddEventForm;
