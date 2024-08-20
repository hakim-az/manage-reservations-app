const ReservationCardSkeleton = () => {
    return (
      <div className="ReservationCardSkeleton flex flex-col items-center w-[320px] min-h-[400px] p-5 bg-white border border-gray-300 rounded relative animate-pulse">
        <div className="bg-slate-300 h-5 w-16 absolute right-5 top-5 rounded"></div>
  
        <div className="flex items-center gap-2 absolute top-5 left-5">
          <div className="bg-slate-300 h-6 w-6 rounded-full"></div>
          <div className="bg-slate-300 h-6 w-12 rounded"></div>
        </div>
  
        <div className="flex items-center justify-center h-48 w-full">
          <div className="bg-slate-300 mt-10 w-40 h-28 rounded"></div>
        </div>
  
        <div className="bg-slate-300 h-6 w-48 mt-3 rounded"></div>
  
        <div className="w-full flex items-center justify-between mt-5">
          <div className="flex items-center gap-x-2">
            <div className="bg-slate-300 h-6 w-6 rounded"></div>
            <div className="bg-slate-300 h-4 w-24 rounded"></div>
          </div>
  
          <div className="flex items-center gap-x-2">
            <div className="bg-slate-300 h-6 w-6 rounded"></div>
            <div className="bg-slate-300 h-4 w-20 rounded"></div>
          </div>
        </div>
  
        <div className="w-full mt-4">
          <div className="bg-slate-300 h-6 w-32 rounded"></div>
        </div>
  
        <div className="w-full mt-2 mb-5">
          <div className="bg-slate-300 h-6 w-full rounded"></div>
        </div>
      </div>
    );
  };
  
  export default ReservationCardSkeleton;
  