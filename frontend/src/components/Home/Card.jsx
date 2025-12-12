import { Link } from "react-router";

const Card = ({ club }) => {
  const {
    _id,
    bannerImage,
    category,
    clubName,
    location,
    membershipFee,
    status,
  } = club || {};

  return (
    <Link to={`/clubs/${_id}`} className="col-span-1 cursor-pointer group">
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-4 flex flex-col gap-4 border border-gray-100">
        {/* Image Section */}
        <div className="relative w-full h-52 rounded-xl overflow-hidden">
          <img
            src={bannerImage}
            alt={clubName}
            className="object-cover w-full h-full group-hover:scale-105 transition duration-300"
          />

          {/* Category Badge */}
          <span className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-700 shadow">
            {category}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-bold text-gray-900">{clubName}</h3>

          <div className="text-gray-700 space-y-1 text-sm">
            <p>
              <span className="font-medium">Location:</span> {location}
            </p>
            <p>
              <span className="font-medium">Status:</span> {status}
            </p>
            <p>
              <span className="font-medium">Fee:</span> ${membershipFee}
            </p>
          </div>
        </div>

        {/* Button */}
        <Link
          to={`/clubs/${_id}`}
          className="w-full text-center py-2 rounded-xl bg-orange-400 hover:bg-orange-700 transition font-semibold shadow"
        >
          View Details
        </Link>
      </div>
    </Link>
  );
};

export default Card;
