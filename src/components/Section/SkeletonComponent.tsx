export default function SkeletonComponent() {
  return (
    <div>
      <div className="max-w-7xl w-full mx-auto p-6 flex mt-7 flex-col gap-4 justify-center items-center md:items-start">
        <div className="bg-gray-200 rounded w-52 h-8 animate-pulse"></div>
        <div className="bg-gray-200 rounded w-64 h-5 animate-pulse"></div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full mt-4 md:mt-6">
          <div className="bg-gray-200 h-80 rounded"></div>
          <div className="bg-gray-200 h-80 rounded"></div>
          <div className="bg-gray-200 h-80 rounded"></div>
          <div className="bg-gray-200 h-80 rounded"></div>
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto p-6 flex mt-7 flex-col gap-4 justify-center items-center md:items-start">
        <div className="bg-gray-200 rounded w-52 h-8 animate-pulse"></div>
        <div className="bg-gray-200 rounded w-64 h-5 animate-pulse"></div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full mt-4 md:mt-6">
          <div className="bg-gray-200 h-80 rounded"></div>
          <div className="bg-gray-200 h-80 rounded"></div>
          <div className="bg-gray-200 h-80 rounded"></div>
          <div className="bg-gray-200 h-80 rounded"></div>
        </div>
      </div>
    </div>
  );
}
