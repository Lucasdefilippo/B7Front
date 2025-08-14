import { useState } from "react";
import "../../../App.css";
import { Link, useParams, useSearchParams } from "react-router";

export default function Page() {
  const { slug } = useParams<{ slug: string }>();

  const [searchParams] = useSearchParams();
  const paramsArray: [string, string][] = Array.from(searchParams.entries());

  const [filterOpened, setFilterOpened] = useState(false);

  return (
    <div>
      <div className="text-gray-500 mb-4">
        <Link to={"/"}>Home</Link> &gt;Temporário
      </div>
      {/* Quantidade e Ordenar */}
      <div className="">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <p className="text-3xl">
            <strong>99</strong> Produtos
          </p>
          <div className="flex flex-row w-full md:max-w-70 gap-5">
            <select className="flex-1 bg-white flex items-center border-gray-200 rounded-sm text-gray-500 px-6 h-14 cursor-pointer">
              <option className="">Ordenar por</option>
            </select>
            <div
              onClick={() => setFilterOpened(!filterOpened)}
              className="flex-1 bg-white border-gray-200 rounded-sm text-gray-500 px-6 h-14 flex items-center md:hidden"
            >
              Filtrar por
            </div>
          </div>
        </div>
      </div>
      {/* Grid e Filtros */}
      <div className="flex flex-col md:flex-row gap-8 mt-8">
        <div
          className={`flex-1 md:max-w-70 bg-red-400 ${
            filterOpened ? "block" : "hidden"
          } md:block`}
        >
          Filtro
        </div>
        <div className="flex-1 grid-cols-1 md:grid-cols-3">321</div>
      </div>
    </div>
  );
}
