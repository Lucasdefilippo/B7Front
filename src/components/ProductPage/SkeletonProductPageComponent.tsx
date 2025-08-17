export default function SkeletonProductPageComponent() {
  return (
    <div className="mt-10">
      <div className="bg-gray-200 rounded w-64 h-5 animate-pulse"></div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full mt-4 md:mt-6">
        <div className="bg-gray-200 h-80 rounded animate-pulse"></div>
        <div className="bg-gray-200 h-80 rounded animate-pulse"></div>
        <div className="bg-gray-200 h-80 rounded animate-pulse"></div>
        <div className="bg-gray-200 h-80 rounded animate-pulse"></div>
      </div>
    </div>
  );
}
