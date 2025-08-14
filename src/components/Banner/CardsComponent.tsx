export default function CardsComponent() {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-6 ">
      <div className="flex-1 py-6 border border-gray-200 rounded-sm flex">
        {/* 1 */}
        <div className="border-r border-gray-200 size-10 w-32 flex justify-center items-center">
          <img
            src="assets/ui/truck-line.png"
            alt=""
            className="size-10"
            width={40}
            height={40}
          />
        </div>
        <div className="flex-1 pl-4 md:pl-8">
          <p className="font-bold text-xl">Frete Gratis</p>
          <p className="text-gray-500">Para todo o Brasil!</p>
        </div>
      </div>
      {/* 2 */}
      <div className="flex-1 py-6 border border-gray-200 rounded-sm flex">
        <div className="border-r border-gray-200 size-10 w-32 flex justify-center items-center">
          <img
            src="assets/ui/discount-percent-line.png"
            alt=""
            className="size-10"
            width={40}
            height={40}
          />
        </div>
        <div className="flex-1 pl-4 md:pl-8">
          <p className="font-bold text-xl">Muitas Ofertas</p>
          <p className="text-gray-500">Ofertas imbatíveis</p>
        </div>
        {/* 3 */}
      </div>
      <div className="flex-1 py-6 border border-gray-200 rounded-sm flex">
        <div className="border-r border-gray-200 size-10 w-32 flex justify-center items-center">
          <img
            src="assets/ui/arrow-left-right-line.png"
            alt=""
            className="size-10"
            width={40}
            height={40}
          />
        </div>
        <div className="flex-1 pl-4 md:pl-8">
          <p className="font-bold text-xl">Troca Fácil</p>
          <p className="text-gray-500">No período de 30dias</p>
        </div>
      </div>
    </div>
  );
}
