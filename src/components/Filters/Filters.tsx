interface PropsType {
  onFilterChange: (key: string, value: string) => void;
}

const Filters = ({ onFilterChange }: PropsType) => {
  return (
    <div className="w-full max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between flex-wrap gap-4 px-3 py-5">
      {/* date */}
      <div className="w-full md:w-[45%] lg:w-[22%] flex flex-col gap-2">
        <label className="text-gray-900 font-medium">Date :</label>
        <input
          className="w-full h-10 lg:text-base px-4 rounded-[4px] text-sm border border-gray-400 focus:outline-blue-500"
          type="date"
          onChange={(e) => onFilterChange("date", e.target.value)}
        />
      </div>
      {/* shift */}
      <div className="w-full md:w-[45%] lg:w-[22%] flex flex-col gap-2">
        <label className="text-gray-900 font-medium">Shift :</label>
        <select
          className="w-full h-10 lg:text-base px-4 rounded-[4px] text-sm border border-gray-400 focus:outline-blue-500"
          onChange={(e) => onFilterChange("shift", e.target.value)}
        >
          <option value="">All</option>
          <option value="BREAKFAST">Breakfast</option>
          <option value="LUNCH">Lunch</option>
          <option value="DINNER">Dinner</option>
        </select>
      </div>
      {/* status */}
      <div className="w-full md:w-[45%] lg:w-[22%] flex flex-col gap-2">
        <label className="text-gray-900 font-medium">Status :</label>
        <select
          className="w-full h-10 lg:text-base px-4 rounded-[4px] text-sm border border-gray-400 focus:outline-blue-500"
          onChange={(e) => onFilterChange("status", e.target.value)}
        >
          <option value="">All</option>
          <option value="CHECKED OUT">Checked Out</option>
          <option value="NOT CONFIRMED">Not Confirmed</option>
          <option value="SEATED">Seated</option>
          <option value="CONFIRMED">Confirmed</option>
        </select>
      </div>
      {/* Area */}
      <div className="w-full md:w-[45%] lg:w-[22%] flex flex-col gap-2">
        <label className="text-gray-900 font-medium">Area :</label>
        <select
          className="w-full h-10 lg:text-base px-4 rounded-[4px] text-sm border border-gray-400 focus:outline-blue-500"
          onChange={(e) => onFilterChange("area", e.target.value)}
        >
          <option value="">All</option>
          <option value="BAR">Bar</option>
          <option value="MAIN ROOM">Main Room</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
