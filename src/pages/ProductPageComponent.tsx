import { Link, useParams, useSearchParams } from "react-router";
import { Suspense } from "react";
import { data } from "../data";
import ProductSlider from "../components/ProductPage/ProductSlider";
import ProductDetails from "../components/ProductPage/ProductDatails";
import ProductDescription from "../components/ProductPage/ProductDescription";
import SkeletonProductPageComponent from "../components/ProductPage/SkeletonProductPageComponent";
import RelatedProductsComponent from "../components/ProductPage/RelatedProductsComponent";

export default function ProductPageComponent() {
  const { id } = useParams<{ id: string }>();

  const [searchParams] = useSearchParams();
  const paramsArray: [string, string][] = Array.from(searchParams.entries());

  // TODO: RECEBER ESSE ID E TRAZER AS INFORMAÇÕES
  return (
    <div>
      <div className="text-gray-500 mb-4">
        <Link to={"/"}>Home</Link> &gt;
        <Link to={"/categories/shirts"}> TEMPORARIO </Link>
        &gt; {data.product.label}
      </div>
      <div className="flex flex-col md:flex-row gap-6 md:gap-32">
        <ProductSlider images={data.product.images} />
        <ProductDetails info={data.product} />
      </div>
      <ProductDescription description={data.product.description} />
      <div>
        <Suspense fallback={<SkeletonProductPageComponent />}>
          <RelatedProductsComponent id={data.product.id} />
        </Suspense>
      </div>
    </div>
  );
}
