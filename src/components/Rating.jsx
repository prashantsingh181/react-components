import { FaStar } from "react-icons/fa";

function Rating({ rating }) {
  return (
    <div className="flex flex-row items-center gap-1">
      <FaStar className="text-yellow-500" />
      <span>{rating}</span>
    </div>
  );
}

export default Rating;
