import { ReservationType } from "../../__mock__/Reservations/Reservations";
import DinnerIcon from "../../assets/ShiftIcons/dinner.png";
import LunchIcon from "../../assets/ShiftIcons/lunch.png";
import BreakfastIcon from "../../assets/ShiftIcons/breakfast.png";

interface PropsType {
  reservation: ReservationType;
}

const ReservationCard = ({ reservation }: PropsType) => {
  // render shift icon
  const renderShiftIcon = (shift: string) => {
    switch (shift) {
      case "DINNER":
        return DinnerIcon;
      case "LUNCH":
        return LunchIcon;
      case "BREAKFAST":
        return BreakfastIcon;
      default:
        return "";
    }
  };

  // render shift icon
  const renderStatusStyle = (status: string) => {
    switch (status) {
      case "CHECKED OUT":
        return 'bg-blue-700 text-white';
      case "NOT CONFIRMED":
        return 'bg-red-700 text-white';
      case "SEATED":
        return 'bg-green-700 text-white';
      case "CONFIRMED":
        return 'bg-yellow-400 text-gray-700';
      default:
        return "";
    }
  };

  // extarct time
  function extractTime(dateTimeString: string) {
    const date = new Date(dateTimeString);

    const hours = date.getUTCHours().toString().padStart(2, "0");
    const minutes = date.getUTCMinutes().toString().padStart(2, "0");

    return `${hours}:${minutes}`;
  }
  return (
    <div className="reservationCard flex flex-col items-center w-[320px] min-h-[400px] p-5 bg-white border border-gray-400 rounded relative">
      {/* status */}
      <span className={`px-3 py-1 absolute right-5 top-5 rounded text-sm lowercase ${renderStatusStyle(reservation.status)}`} >
        {reservation.status}
      </span>
      {/* quantity */}
      <span className="flex items-center gap-2 absolute top-5 left-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-6"
        >
          <path d="M10 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM1.49 15.326a.78.78 0 0 1-.358-.442 3 3 0 0 1 4.308-3.516 6.484 6.484 0 0 0-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 0 1-2.07-.655ZM16.44 15.98a4.97 4.97 0 0 0 2.07-.654.78.78 0 0 0 .357-.442 3 3 0 0 0-4.308-3.517 6.484 6.484 0 0 1 1.907 3.96 2.32 2.32 0 0 1-.026.654ZM18 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM5.304 16.19a.844.844 0 0 1-.277-.71 5 5 0 0 1 9.947 0 .843.843 0 0 1-.277.71A6.975 6.975 0 0 1 10 18a6.974 6.974 0 0 1-4.696-1.81Z" />
        </svg>
        <span className="text-lg font-medium"> {reservation.quantity}</span>
      </span>
      {/* shift */}
      <div className="flex items-center justify-center h-48 w-full">
        <img
          className={` mt-10 ${
            reservation.shift === "BREAKFAST" ? "w-40" : "w-28"
          }`}
          src={renderShiftIcon(reservation.shift)}
          alt="shift-icon"
        />
      </div>
      {/* name */}
      <span className="text-lg font-semibold pt-3">
        {reservation.customer.firstName} {reservation.customer.lastName}
      </span>
      {/* date / quantity */}
      <div className="w-full flex items-center justify-between mt-5">
        {/* date */}
        <div className="flex items-center gap-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
              clipRule="evenodd"
            />
          </svg>

          <span className="text-sm font-medium">
            {reservation.businessDate}
          </span>
        </div>

        {/* quantity */}
        <div className="flex items-center gap-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <span>
            {extractTime(reservation.start)} - {extractTime(reservation.end)}{" "}
          </span>
        </div>
      </div>

      {/* area */}
      <div className="w-full mt-4">
        <span className="font-semibold text-lg"> Area : </span>
        <span className=" lowercase">{reservation.area}</span>
      </div>

      {/* note */}
      {reservation.guestNotes && (
        <div className="w-full mt-2 mb-5">
          <span className="font-semibold text-lg">Note :</span>
          <span>{reservation.guestNotes}</span>
        </div>
      )}
    </div>
  );
};

export default ReservationCard;
