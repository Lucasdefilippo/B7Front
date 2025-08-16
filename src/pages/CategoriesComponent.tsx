import { useState, type ChangeEvent } from "react";
import "../App.css";
import { Link, useParams, useSearchParams } from "react-router";
import { UseQueryString } from "../hooks/use-querystring";
import FilterComponent from "../components/Filter/FilterComponent";
import { data } from "../data";
import { ProductComponent } from "../components/ProductComponent";

export default async function CategoriesComponent() {
  const queryString = UseQueryString();

  const { slug } = useParams<{ slug: string }>();

  const [searchParams] = useSearchParams();
  const paramsArray: [string, string][] = Array.from(searchParams.entries());

  const [filterOpened, setFilterOpened] = useState(false);

  const order = queryString.get("order") ?? "views";

  const handleSelectChanged = (e: ChangeEvent<HTMLSelectElement>) => {
    queryString.set("order", e.target.value);
  };

  return (
    <div>
      <div className="text-gray-500 mb-4">
        <Link to={"/"}>Home</Link> &gt;Temporário
      </div>
      {/* Quantidade e Ordenar */}
      <div className="">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <p className="text-3xl">
            <strong>{data.products_views.length}</strong>{" "}
            {data.products_views.length == 1 ? "Produto" : "Produtos"}
          </p>
          <div className="flex flex-row w-full md:max-w-70 gap-5">
            <select
              defaultValue={order}
              onChange={handleSelectChanged}
              className="flex-1 bg-white flex items-center border-gray-200 rounded-sm text-gray-500 px-6 h-14 cursor-pointer"
            >
              <option value={"views"}>Popularidade</option>
              <option value={"price"}>Por Preço</option>
              <option value={"selling"}>Mais Vendidos</option>
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
          className={`flex-1 md:max-w-70 ${
            filterOpened ? "block" : "hidden"
          } md:block`}
        >
          <FilterComponent id="Techs" name="Tecnologias" />
          <FilterComponent id="Color" name="Cores" />
          <FilterComponent id="Size" name="Tamanho" />
        </div>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.products_views.map((item) => (
            <ProductComponent key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
