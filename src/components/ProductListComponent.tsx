import type { product } from "../types/Product";
import { ProductComponent } from "./ProductComponent";

type Props = {
  info: product[];
};

export default function ProductListComponent({ info }: Props) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
      {info.map((product) => (
        <ProductComponent key={product.id} data={product} />
      ))}
    </ul>
  );
}
