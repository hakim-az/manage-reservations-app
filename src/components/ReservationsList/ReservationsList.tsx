import { ReservationType } from "../../__mock__/Reservations/Reservations";
import ReservationCard from "./ReservationCard";
import ReservationCardSkeleton from "./ReservationCardSkeleton";
import NotFoundSearch from "../../assets/NotFounSearch/not-found-search.png";

interface PropsType {
  reservations: ReservationType[];
  loading: boolean;
  error: string;
  notFound: boolean;
}

const ReservationsList = ({
  reservations,
  loading,
  error,
  notFound,
}: PropsType) => {
  console.log(error);

  return (
    <>
      {loading ? (
        <div className="flex flex-wrap items-center justify-evenly gap-y-6 w-full max-w-[1440px] mx-auto px-3 pt-10 pb-28">
          {Array.from({ length: 8 }, (_, index) => (
            <ReservationCardSkeleton key={index} />
          ))}
        </div>
      ) : (
        <div className="ReservationsList flex flex-wrap items-stretch justify-evenly gap-y-6 w-full max-w-[1440px] mx-auto px-3 pt-10 pb-28">
          {notFound ? (
            <div className="flex flex-col items-center justify-center p-20">
              <img className="w-52" src={NotFoundSearch} alt="not-found-icon" />
              <span className="font-semibold text-2xl text-center mt-5">
                No reservations found matching the criteria.
              </span>
            </div>
          ) : (
            <>
              {reservations.map((reservation, index) => (
                <ReservationCard key={index} reservation={reservation} />
              ))}
            </>
          )}
        </div>
      )}
    </>
  );
};

export default ReservationsList;
