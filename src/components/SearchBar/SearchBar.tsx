interface PropsType {
  onSearch: (searchTerm: string) => void;
}

const SearchBar = ({ onSearch }: PropsType) => {
  return (
    <div className="SearchBar w-full lg:w-[320px]">
      <input
        className="w-full  h-10 lg:text-base px-4 rounded-[4px] text-sm border border-gray-400 focus:outline-blue-500"
        type="text"
        placeholder="Search by customer name..."
        onChange={(e) => onSearch(e.target.value)}
      />
      <br />
    </div>
  );
};

export default SearchBar;
