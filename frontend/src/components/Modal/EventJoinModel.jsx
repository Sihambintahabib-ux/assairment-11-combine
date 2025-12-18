import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const EventJoinModel = ({ closeModal, isOpen, events, id }) => {
  // Total Price Calculation
  console.log(events);
  console.log(id);
  const { user } = useAuth();
  console.log(user);

  const {
    _id,
    title,
    description,
    clubId,
    eventDate,
    location,
    isPaid,
    eventFee,
    maxAttendees,
    createAt,
    updateAt,
    // update,
    // delete,
    clubName,
    managerEmail,
    // membershipFee,
    // location,
    // status,
    bannerImage,
    // category,
  } = events;
  const email = user.email;
  const handlePayment = async () => {
    const PaymentInfo = {
      // clubId: new ObjectId(_id),
      EventId: _id,
      clubId: clubId,
      managerEmail,
      clubName: clubName,
      userEmail: email,
      title,
      location,
      eventFee,
      status: "registered",
      paymentId: "",
      bannerImage,
      registatedAt: new Date(),
      expiresAt: new Date(),
    };
    const result = await axios.post(
      `${import.meta.env.VITE_API_URL}/eventsRegistration`,
      PaymentInfo
    );
    console.log(result);
    // console.log(result.data);
    // console.log(result.data.url);
    // add - payment address :
    // window.location.href = result.data.url;
  };
  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-10 focus:outline-none "
      onClose={closeModal}
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full max-w-md bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0 shadow-xl rounded-2xl"
          >
            <DialogTitle
              as="h3"
              className="text-lg font-medium text-center leading-6 text-gray-900"
            >
              Review Info Before registered the Events
            </DialogTitle>
            <div className="mt-2">
              <p className="text-sm text-gray-500">Plant: {title}</p>
            </div>
            <div className="mt-2">
              <p className="text-sm text-gray-500">location: {location}</p>
            </div>
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                Join member : {user.displayName}
              </p>
            </div>

            <div className="mt-2">
              <p className="text-sm text-gray-500">Price: ${eventFee} </p>
            </div>
            <div className="mt-2">
              <p className="text-sm text-gray-500">date: {eventDate}</p>
            </div>
            <div className="flex mt-2 justify-around">
              <button
                onClick={handlePayment}
                type="button"
                className="cursor-pointer inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
              >
                register
              </button>
              <button
                type="button"
                className="cursor-pointer inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                onClick={closeModal}
              >
                Cancel
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default EventJoinModel;
