import ProductListComponent from "../ProductListComponent";
import { data } from "../../data";

export default function BestSellerComponent() {
  return (
    <div className="max-w-7xl w-full mx-auto p-6 flex mt-7 flex-col gap-4 justify-center items-center md:items-start">
      <div className="text-2xl">Produtos mais vendidos</div>
      <div className="">Campeões de vendas da nossa loja.</div>
      <ProductListComponent info={data.products} />
    </div>
  );
}
