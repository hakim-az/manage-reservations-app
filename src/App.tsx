import { useEffect, useState } from "react";
import {
  mockReservations,
  ReservationType,
} from "./__mock__/Reservations/Reservations";

// components
import ReservationsList from "./components/ReservationsList/ReservationsList";
import axios from "axios";
import Filters from "./components/Filters/Filters";
import SearchBar from "./components/SearchBar/SearchBar";
import SortBar from "./components/SortBar/SortBar";

// types

function App() {
  // states
  const [reservations, setReservations] = useState<ReservationType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [notFound, setNotFound] = useState<boolean>(false);

  // filters
  const [filteredReservations, setFilteredReservations] = useState<ReservationType[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({date: "",shift: "",status: "",area: "",});
  const [sortOption, setSortOption] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");

  // functions
  const formatDateToDDMMYYYY = (date: string): string => {
    const [year, month, day] = date.split("-");
    return `${day}.${month}.${year}`;
  };

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  // Fetch all reservations
  useEffect(() => {
    const fetchReservations = async () => {
      try {
        // Simulate an API call with a delay
        await axios.get("/api/reservations");
        // Simulate a 3-second delay
        setTimeout(() => {
          setReservations(mockReservations);
          setLoading(false);
        }, 3000);
      } catch (error) {
        console.log(error);
        setError("Failed to fetch reservations.");
        setLoading(false);
      }
    };

    fetchReservations();
  }, []);

  // handle filters
  useEffect(() => {
    let updatedReservations = reservations;

    // filter by DATE
    if (filters.date) {
      const formattedDate = formatDateToDDMMYYYY(filters.date);
      updatedReservations = updatedReservations.filter(
        (res) => res.businessDate === formattedDate
      );
    }

    // filter by SHIFT
    if (filters.shift) {
      updatedReservations = updatedReservations.filter(
        (res) => res.shift === filters.shift
      );
    }

    // filter by STATUS
    if (filters.status) {
      updatedReservations = updatedReservations.filter(
        (res) => res.status === filters.status
      );
    }

    // filter by AREA
    if (filters.area) {
      updatedReservations = updatedReservations.filter(
        (res) => res.area === filters.area
      );
    }

    // search by name or surname
    if (searchQuery) {
      updatedReservations = updatedReservations.filter((res) =>
        `${res.customer.firstName} ${res.customer.lastName}`
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      );
    }

    // Sort by the selected option and order
    if (sortOption) {
      updatedReservations.sort((a, b) => {
        if (sortOption === "name") {
          const nameA = a.customer.firstName.toLowerCase();
          const nameB = b.customer.firstName.toLowerCase();
          return sortOrder === "asc"
            ? nameA.localeCompare(nameB)
            : nameB.localeCompare(nameA);
        } else if (sortOption === "quantity") {
          return sortOrder === "asc"
            ? a.quantity - b.quantity
            : b.quantity - a.quantity;
        }
        return 0;
      });
    }

    // Handle "not found" case
    if (updatedReservations.length === 0) {
      setNotFound(true);
    } else {
      setNotFound(false);
    }

    // set the reservations
    setFilteredReservations(updatedReservations);
  }, [reservations, filters, searchQuery, sortOption, sortOrder]);

  return (
    <section className="bg-slate-200 min-h-screen">
      <h1 className="text-2xl lg:text-4xl xl:text-5xl text-[#2169AC] text-center font-bold py-10">
        Manage Reservations
      </h1>
      <div className="w-full max-w-[1440px] mx-auto px-3 py-6 flex gap-y-5 flex-col lg:flex-row lg:items-center lg:justify-between pt-10">
        <SearchBar onSearch={handleSearch} />
        <SortBar
          onSortChange={(option, order) => {
            setSortOption(option);
            setSortOrder(order);
          }}
        />
      </div>
      <Filters onFilterChange={handleFilterChange} />
      <ReservationsList
        reservations={filteredReservations}
        loading={loading}
        error={error}
        notFound={notFound}
      />
    </section>
  );
}

export default App;
