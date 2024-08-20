interface SortBarProps {
  onSortChange: (option: string, order: string) => void;
}

const SortBar = ({ onSortChange }: SortBarProps) => {
  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const [option, order] = value.split(",");
    onSortChange(option, order);
  };

  return (
    <div className="SortBar w-full lg:w-[40%] flex flex-col gap-y-5">
      <div className="w-full flex flex-col gap-2">
        <label className="text-gray-900 font-medium">Sort by:</label>
        <select
          className="w-full h-10 lg:text-base px-4 rounded-[4px] text-sm border border-gray-400 focus:outline-blue-500"
          onChange={handleOptionChange}
        >
          <option value="">Select Sort</option>
          <option value="name,desc">Name A-Z</option>
          <option value="name,asc">Name Z-A</option>
          <option value="quantity,desc">Quantity Smallest to Largest</option>
          <option value="quantity,asc">Quantity Largest to Smallest</option>
        </select>
      </div>
    </div>
  );
};

export default SortBar;
