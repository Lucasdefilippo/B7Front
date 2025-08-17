import { data } from "../../data";
import ProductListComponent from "../ProductListComponent";

type Props = {
  id: number;
};

export default function RelatedProductsComponent({ id }: Props) {
  return (
    <div className="mt-10 ">
      <h3 className="text-xl md:text-2xl">Você pode gostar também</h3>
      <div className="mt-9 ">
        <ProductListComponent info={data.products_views} />
      </div>
    </div>
  );
}
